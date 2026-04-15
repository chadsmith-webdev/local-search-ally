import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();

  const postList = posts
    .map((p) => `- ${p.title} — https://localsearchally.com/blog/${p.slug}`)
    .join("\n");

  const body = `# Local Search Ally

## About
Local Search Ally is a one-person local SEO and web development service run by Chad Smith, based in Siloam Springs, AR. I help NWA home service trades — HVAC, plumbing, roofing, electrical, landscaping, and remodeling — get found on Google and convert searches into calls.

**One-liner:** The best contractor in town shouldn't be the hardest to find. I make sure they're not.

## Founder
Chad Smith — Local SEO specialist, Siloam Springs, AR
About page: https://localsearchally.com/about

## Contact
Phone: (479) 380-8626
Contact page: https://localsearchally.com/contact

## Service Area
Northwest Arkansas — Rogers, Bentonville, Fayetteville, Springdale, Siloam Springs, Centerton, Bella Vista, Cave Springs, Lowell

## Services
- Local SEO — Google Business Profile, citations, keyword strategy, on-page SEO, monthly reports
- Web Design & Development — Mobile-first, SEO-built, lead-gen focused
- GBP Optimization & Management — Full profile audit, photo strategy, post management
- Reputation Management — Review request process, templates, monitoring
- Citation Building — NAP consistency, Tier 1 directory listings

## Key Differentiators
- No long-term contracts
- Radical transparency — clients always know what's happening
- Local to NWA — understands the market
- Full stack — SEO and web development as one service

## Transparency Pledge
- I will never claim results I haven't achieved.
- I will tell you if something is outside my skill set.
- I will never lock you into a contract.
- I will communicate clearly and often.

## Canonical Pages
- Homepage: https://localsearchally.com
- Services: https://localsearchally.com/services
- Local SEO: https://localsearchally.com/services/local-seo
- Web Design: https://localsearchally.com/services/web-design
- GBP Optimization: https://localsearchally.com/services/gbp-optimization
- Reputation: https://localsearchally.com/services/reputation-management
- Citations: https://localsearchally.com/services/citation-building
- About: https://localsearchally.com/about
- Contact: https://localsearchally.com/contact
- Portfolio: https://localsearchally.com/portfolio
- Blog: https://localsearchally.com/blog
- Free SEO Audit Tool: https://audit.localsearchally.com

## Service Area Pages
- Rogers, AR: https://localsearchally.com/service-areas/rogers-ar
- Bentonville, AR: https://localsearchally.com/service-areas/bentonville-ar
- Fayetteville, AR: https://localsearchally.com/service-areas/fayetteville-ar
- Springdale, AR: https://localsearchally.com/service-areas/springdale-ar
- Siloam Springs, AR: https://localsearchally.com/service-areas/siloam-springs-ar
- Centerton, AR: https://localsearchally.com/service-areas/centerton-ar
- Bella Vista, AR: https://localsearchally.com/service-areas/bella-vista-ar
- Cave Springs, AR: https://localsearchally.com/service-areas/cave-springs-ar
- Lowell, AR: https://localsearchally.com/service-areas/lowell-ar

## Blog Posts
${postList}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
