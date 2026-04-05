import { NextResponse } from "next/server";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name || "").trim();
  const phone = String(data.phone || "").trim();
  const message = String(data.message || "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 422 },
    );
  }

  // Sanitize: reject suspiciously long inputs
  if (name.length > 120 || phone.length > 30 || message.length > 2000) {
    return NextResponse.json({ error: "Input too long." }, { status: 422 });
  }

  // If a Formspree endpoint is configured, forward there
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  if (formspreeEndpoint) {
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, phone, message }),
      });

      if (!res.ok) {
        console.error("Formspree error:", res.status, await res.text());
        return NextResponse.json(
          { error: "Failed to send. Please try calling or emailing directly." },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Formspree request failed:", err);
      return NextResponse.json(
        { error: "Failed to send. Please try calling or emailing directly." },
        { status: 502 },
      );
    }
  }

  // No Formspree configured — log submission server-side and return success
  // (Replace with your preferred delivery mechanism)
  console.log("[contact form]", { name, phone, message });
  return NextResponse.json({ ok: true });
}
