/**
 * Shared analytics helper for localsearchally.com.
 *
 * Wraps window.gtag so callers don't need to guard against it being
 * undefined. Safe to call on the server — it no-ops silently.
 *
 * Agreed event taxonomy (keep in sync with lsa-audit-tool/lib/analytics.ts):
 *
 *   audit_started          – user submitted the audit form
 *   audit_completed        – audit run finished (fired in audit tool)
 *   email_captured         – user saved / emailed their report
 *   upgrade_clicked        – user clicked a paid-plan CTA
 *   signup_started         – user landed on /signup (fired in audit tool)
 *   contact_form_submitted – contact form submitted successfully
 *   call_booked            – user clicked the Calendly booking link
 */

/**
 * Fire a GA4 custom event.
 *
 * @param {string} name  Event name — use the taxonomy above.
 * @param {Record<string, unknown>} [params]  Optional event parameters.
 */
export function track(name, params = {}) {
  if (typeof window === 'undefined') return;
  const g = window.gtag;
  if (typeof g !== 'function') return;
  g('event', name, params);
}
