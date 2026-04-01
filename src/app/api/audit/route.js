export const maxDuration = 120;

const SYSTEM_PROMPT = `You are a local SEO specialist auditing a contractor's online presence for Local Search Ally. Research the business using web search and produce an honest, scored audit across 7 sections.

Return ONLY valid JSON — no preamble, no markdown fences, no explanation.

AUDIT SECTIONS (score each 1–10):
1. gbp — Google Business Profile: claimed, complete, keyword-optimized description, active with posts? Note photo count specifically — under 10 photos is a critical gap.
2. reviews — Quantity, recency, average rating, owner response rate. Under 10 reviews or zero responses = red.
3. onpage — Title tags, H1s, dedicated service pages, keyword targeting (trade + city).
4. technical — Core Web Vitals (LCP, INP, CLS), mobile-friendly, HTTPS, sitemap.xml present, AND schema markup: is there a <script type="application/ld+json"> block with @type LocalBusiness or a trade subtype (Plumber, HVACBusiness, Electrician, RoofingContractor)? Does it include name, address, phone, serviceArea, openingHours?
5. citations — NAP consistency across Google, Yelp, BBB, Angi, HomeAdvisor.
6. backlinks — Domain authority signals, local/industry links, anchor text quality.
7. competitors — Top 3 Map Pack results for [trade] [city] AR. How does this business compare on reviews, GBP completeness, and web presence?

NO-WEBSITE: If the business has no website, score onpage, technical, and backlinks as 1 each. Set headline to "No website found — this is costing you calls every day."

SCORING: 8–10 = "green" | 5–7 = "yellow" | 1–4 = "red"

SEARCH STRATEGY:
- Search "[business name] [city]" → GBP panel, photo count, review count
- Search "[business name] reviews" → recency, owner response rate
- Fetch homepage + a service page; look for JSON-LD schema block
- Check [website]/sitemap.xml
- Search "[trade] [city] AR" → top 3 Map Pack competitors
- Search "[business name]" on Yelp, Angi, BBB for NAP consistency

REQUIRED JSON FORMAT:
{
  "business_name": string,
  "overall_score": number (average of 7 sections, rounded),
  "overall_label": "Strong" | "Solid" | "Needs Work" | "Critical",
  "summary": string (1 sentence, plain English, specific),
  "has_website": boolean,
  "score_bucket": "Critical" | "Needs Work" | "Solid" | "Strong",
  "sections": [{
    "id": "gbp|reviews|onpage|technical|citations|backlinks|competitors",
    "name": string,
    "score": number (1–10),
    "status": "green" | "yellow" | "red",
    "headline": string (plain English, no jargon),
    "finding": string (2–3 sentences, business impact, specific),
    "priority_action": string (specific next step)
  }],
  "top_3_actions": string[],
  "competitor_names": string[]
}

VOICE: Plain English only. Every finding = a business consequence (lost calls, lost jobs, invisible to Google). Be specific. Never invent data.`;

function buildUserPrompt(input) {
  const websiteLine = input.noWebsite
    ? "Website: NONE — this business has no website"
    : `Website: ${input.websiteUrl}`;

  const noWebsiteNote = input.noWebsite
    ? "\nNOTE: No website. Score onpage, technical, backlinks as 1. Focus on GBP, reviews, citations, competitors."
    : "";

  return `Audit this contractor's local SEO:

Business Name: ${input.businessName}
${websiteLine}
Primary Trade: ${input.primaryTrade}
Service City: ${input.serviceCity}
${noWebsiteNote}

Research all 7 sections using web search. Return the JSON audit result only.`.trim();
}

async function callClaude(input) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 110_000);

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "web-search-2025-03-05",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 4000,
        system: SYSTEM_PROMPT,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ role: "user", content: buildUserPrompt(input) }],
      }),
    });

    clearTimeout(timer);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `Anthropic API error ${res.status}`);
    }

    const data = await res.json();
    const text = data.content
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("");

    const cleaned = text
      .replace(/```json\s*/g, "")
      .replace(/```\s*/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    clearTimeout(timer);
    if (err.name === "AbortError") {
      throw new Error("The audit took too long — try again, it usually completes.");
    }
    if (err instanceof SyntaxError) {
      throw new Error("Could not parse audit results. Please try again.");
    }
    throw err;
  }
}

async function notifySlack(result, input, source) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localsearchally.com";
  const scoreEmoji = result.overall_score >= 70 ? "🟢" : result.overall_score >= 50 ? "🟡" : "🔴";

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: "📊 New audit submitted",
      blocks: [{
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${result.business_name}* — ${input.primaryTrade} in ${input.serviceCity}\n${scoreEmoji} Score: *${result.overall_score}/100* (${result.score_bucket})\n<${siteUrl}/audit|View audit tool>`,
        },
      }],
    }),
  }).catch(() => {}); // fire-and-forget, never block the response
}

export async function POST(req) {
  let input;
  try {
    input = await req.json();
  } catch {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  // Basic validation
  if (!input.businessName?.trim() || !input.primaryTrade || !input.serviceCity?.trim()) {
    return Response.json({ message: "Missing required fields" }, { status: 400 });
  }
  if (!input.noWebsite && !input.websiteUrl?.trim()) {
    return Response.json({ message: "Website URL required" }, { status: 400 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event, data) => {
        controller.enqueue(
          encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
        );
      };

      // Heartbeat keeps the connection alive while Claude is thinking (up to 120s)
      const heartbeat = setInterval(() => {
        controller.enqueue(encoder.encode(": ping\n\n"));
      }, 10_000);

      try {
        const result = await callClaude(input);

        clearInterval(heartbeat);

        // Stream sections with a stagger for progressive reveal
        for (const section of result.sections || []) {
          send("section", section);
          await new Promise(r => setTimeout(r, 150));
        }

        send("complete", result);

        // Non-blocking Slack notification
        notifySlack(result, input).catch(() => {});

      } catch (err) {
        clearInterval(heartbeat);
        send("error", { message: err.message || "Audit failed. Please try again." });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no", // Disable Nginx buffering on Vercel
    },
  });
}
