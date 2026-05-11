import { NextResponse } from "next/server";
import { Resend } from "resend";
import { email2Html, email3Html, email4Html } from "@/lib/emails";

const SEQUENCE = [
  {
    day: 2,
    subject: "The GBP fix that takes 10 minutes and most contractors haven't done",
    html: email2Html,
  },
  {
    day: 6,
    subject: "The HVAC company that was invisible (and why it wasn't their fault)",
    html: email3Html,
  },
  {
    day: 11,
    subject: "Last thing I'll send you about this",
    html: email4Html,
  },
];

export async function GET(request) {
  // Vercel sets Authorization: Bearer <CRON_SECRET> on cron requests
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

  const { data: contacts, error } = await resend.contacts.list({
    audienceId: AUDIENCE_ID,
  });

  if (error) {
    console.error("[email-sequence] failed to list contacts:", error);
    return NextResponse.json({ error: "Failed to list contacts." }, { status: 500 });
  }

  const today = new Date();
  const sent = [];
  const errors = [];

  for (const contact of contacts) {
    if (contact.unsubscribed) continue;

    // Skip anyone who came in via the audit tool — they're already in a
    // longer, more contextual drip sequence. Sending both is redundant.
    if (contact.lastName === "audit") continue;

    const start = new Date(contact.createdAt);
    const daysSince = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    const step = SEQUENCE.find((s) => s.day === daysSince);

    if (!step) continue;

    const { firstName, email } = contact;
    try {
      await resend.emails.send({
        from: "Chad Smith <chad@localsearchally.com>",
        to: email,
        subject: step.subject,
        html: step.html(firstName || "there"),
        headers: {
          "X-Entity-Ref-ID": `gbp-checklist-email${step.day}-${email}`,
        },
      });
      sent.push({ email, day: step.day });
    } catch (err) {
      console.error(`[email-sequence] failed to send day ${step.day} to ${email}:`, err);
      errors.push({ email, day: step.day });
    }
  }

  console.log(`[email-sequence] sent: ${sent.length}, errors: ${errors.length}`);
  return NextResponse.json({ ok: true, sent: sent.length, errors: errors.length });
}
