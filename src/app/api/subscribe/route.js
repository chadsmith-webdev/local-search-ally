import { NextResponse } from "next/server";
import { Resend } from "resend";
import { email1Html } from "@/lib/emails";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(body.firstName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();

  if (!firstName || !email) {
    return NextResponse.json(
      { error: "First name and email are required." },
      { status: 422 },
    );
  }

  if (firstName.length > 100 || email.length > 254) {
    return NextResponse.json({ error: "Input too long." }, { status: 422 });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  try {
    // Add to Resend audience — creates or updates if email already exists
    await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
      firstName,
      lastName: "gbp-checklist",
      unsubscribed: false,
    });

    // Send Email 1 immediately
    await resend.emails.send({
      from: "Chad Smith <chad@localsearchally.com>",
      to: email,
      subject: "Your GBP Checklist (+ the one section most people skip)",
      html: email1Html(firstName),
      headers: {
        "X-Entity-Ref-ID": `gbp-checklist-email1-${email}`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
