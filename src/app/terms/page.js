import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Local Search Ally",
  description:
    "Terms governing use of localsearchally.com and any services provided by Local Search Ally, operated by Chad Smith of Siloam Springs, AR.",
  openGraph: {
    title: "Terms of Service | Local Search Ally",
    description: "Terms governing use of localsearchally.com and Local Search Ally services.",
    url: "https://localsearchally.com/terms",
  },
  robots: { index: false },
};

const tocItems = [
  { num: "1", label: "Who these terms apply to" },
  { num: "2", label: "The free audit tool" },
  { num: "3", label: "Paid services" },
  { num: "4", label: "Client responsibilities" },
  { num: "5", label: "Intellectual property" },
  { num: "6", label: "Disclaimer of warranties" },
  { num: "7", label: "Limitation of liability" },
  { num: "8", label: "Third-party services" },
  { num: "9", label: "Termination" },
  { num: "10", label: "Governing law" },
  { num: "11", label: "Changes to these terms" },
  { num: "12", label: "Contact" },
];

export default function TermsPage() {
  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        paddingTop: "clamp(6rem, 10vw, 9rem)",
        paddingBottom: "clamp(6rem, 10vw, 10rem)",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="legal-eyebrow">Legal</p>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-meta">
            Effective date: January 16, 2024 &nbsp;&middot;&nbsp; Last updated: April 3, 2026
          </p>
          <div className="legal-intro-block">
            <p className="legal-body">
              These Terms of Service govern your use of localsearchally.com and any services provided by Local Search
              Ally, operated by Chad Smith of Siloam Springs, AR. By using this site or engaging Local Search Ally for
              services, you agree to these terms.
            </p>
            <p className="legal-body" style={{ marginBottom: 0 }}>
              Questions? Email{" "}
              <a href="mailto:chad@localsearchally.com" className="legal-link">
                chad@localsearchally.com
              </a>{" "}
              or call{" "}
              <a href="tel:+14793808626" className="legal-link">
                (479) 380-8626
              </a>
              .
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          style={{
            marginBottom: "3.5rem",
            padding: "1.5rem 1.75rem",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1rem",
            }}
          >
            Contents
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {tocItems.map(({ num, label }) => (
              <li key={num} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--carolina)",
                    minWidth: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {num}.
                </span>
                <a href={`#section-${num}`} className="toc-link">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* 1 */}
          <section id="section-1">
            <h2 className="legal-h2"><span className="legal-num">1.</span> Who these terms apply to</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>These terms apply to anyone who:</p>
            <ul className="legal-list">
              <li>Visits or uses localsearchally.com</li>
              <li>Uses the free local SEO audit tool</li>
              <li>Engages Local Search Ally for any paid service</li>
            </ul>
          </section>

          <hr className="legal-rule" />

          {/* 2 */}
          <section id="section-2">
            <h2 className="legal-h2"><span className="legal-num">2.</span> The free audit tool</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
              <div>
                <h3 className="legal-h3">What it is</h3>
                <p className="legal-body">
                  The free audit tool generates an automated analysis of a business&rsquo;s local SEO presence based on
                  publicly available information. Results are produced using artificial intelligence and web search and
                  are intended to provide a general assessment — not a comprehensive legal, financial, or technical audit.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Accuracy</h3>
                <p className="legal-body">
                  Audit results reflect publicly available data at the time the audit is run. Local Search Ally makes no
                  guarantee that results are complete, error-free, or current. Search rankings, review counts, and other
                  data points can change between the time an audit is run and the time you read the results.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Acceptable use</h3>
                <p className="legal-body">
                  You may use the audit tool to assess your own business or a business you have authority to represent.
                  You may not:
                </p>
                <ul className="legal-list">
                  <li>Use the tool to scrape, aggregate, or collect data on businesses at scale</li>
                  <li>Attempt to circumvent rate limits through automated requests, VPNs, or other means</li>
                  <li>Use the tool for any unlawful purpose</li>
                </ul>
                <p className="legal-body">The tool is rate-limited to 5 audits per IP address per 24-hour period.</p>
              </div>
              <div>
                <h3 className="legal-h3">Shareable links</h3>
                <p className="legal-body">
                  Completed audits are assigned a unique URL that can be shared. Anyone with the link can view the audit
                  results. Do not share this link if you consider the results confidential.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">No obligation</h3>
                <p className="legal-body">
                  Using the free audit tool does not create a client relationship or obligate either party to any paid
                  engagement.
                </p>
              </div>
            </div>
          </section>

          <hr className="legal-rule" />

          {/* 3 */}
          <section id="section-3">
            <h2 className="legal-h2"><span className="legal-num">3.</span> Paid services</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
              <div>
                <h3 className="legal-h3">Month-to-month, no contracts</h3>
                <p className="legal-body">
                  All ongoing paid services (Local SEO, Google Business Profile management, Reputation Management) are
                  provided on a month-to-month basis. No long-term contract is required. Either party may terminate the
                  engagement at any time with written notice (email is sufficient).
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Web design projects</h3>
                <p className="legal-body">
                  Web design and development engagements are project-based with agreed-upon scope, deliverables, and
                  payment terms established before work begins. Specific terms for each project are documented separately.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Payment</h3>
                <p className="legal-body">
                  Payment terms are established at the start of each engagement. For monthly services, payment is due at
                  the beginning of each billing period. For project-based work, a deposit may be required before work
                  begins, with the remainder due upon completion or at milestones agreed upon in writing.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Late payment</h3>
                <p className="legal-body">
                  If payment is not received within 14 days of the due date, Local Search Ally reserves the right to
                  pause services until the outstanding balance is paid.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Refunds</h3>
                <p className="legal-body">
                  Monthly services are billed in advance. If you cancel mid-month, no partial refund is issued for the
                  remainder of that billing period. For project-based work, deposits are non-refundable once work has
                  begun unless otherwise agreed in writing.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Results</h3>
                <p className="legal-body">
                  Local Search Ally does not guarantee specific ranking positions, call volumes, or revenue outcomes.
                  Local SEO results depend on factors including market competition, Google&rsquo;s algorithm, the quality
                  and consistency of work performed, and actions taken by the client. Realistic expectations will be set
                  before any engagement begins, but outcomes cannot be guaranteed.
                </p>
              </div>
            </div>
          </section>

          <hr className="legal-rule" />

          {/* 4 */}
          <section id="section-4">
            <h2 className="legal-h2"><span className="legal-num">4.</span> Client responsibilities</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              To perform services effectively, clients agree to:
            </p>
            <ul className="legal-list">
              <li>
                Provide accurate information about their business, including business name, address, phone number,
                website, and trade
              </li>
              <li>
                Respond to reasonable requests for access, approvals, or information in a timely manner
              </li>
              <li>
                Notify Local Search Ally promptly of any changes to business information, ownership, or service area
              </li>
            </ul>
            <p className="legal-body">
              Delays caused by a client&rsquo;s failure to respond or provide required information may affect timelines
              and are not the responsibility of Local Search Ally.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 5 */}
          <section id="section-5">
            <h2 className="legal-h2"><span className="legal-num">5.</span> Intellectual property</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
              <div>
                <h3 className="legal-h3">Your content</h3>
                <p className="legal-body">
                  You retain ownership of any content, photos, or business information you provide. By providing it, you
                  grant Local Search Ally a license to use it for the purpose of delivering the agreed services.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Work product</h3>
                <p className="legal-body">
                  Upon full payment, you own the final deliverables produced for your engagement — including website
                  files, written content, and configured profiles. Local Search Ally retains the right to display
                  completed work in a portfolio unless otherwise agreed in writing.
                </p>
              </div>
              <div>
                <h3 className="legal-h3">Site content</h3>
                <p className="legal-body">
                  All content on localsearchally.com — including copy, design, and code — is owned by Local Search Ally.
                  You may not reproduce, distribute, or use it without written permission.
                </p>
              </div>
            </div>
          </section>

          <hr className="legal-rule" />

          {/* 6 */}
          <section id="section-6">
            <h2 className="legal-h2"><span className="legal-num">6.</span> Disclaimer of warranties</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              This site and the free audit tool are provided &ldquo;as is&rdquo; without warranties of any kind, express
              or implied. Local Search Ally does not warrant that the site will be uninterrupted, error-free, or free of
              harmful components.
            </p>
            <p className="legal-body">
              Audit results are provided for informational purposes only and do not constitute professional SEO, legal,
              or business advice.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 7 */}
          <section id="section-7">
            <h2 className="legal-h2"><span className="legal-num">7.</span> Limitation of liability</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              To the fullest extent permitted by law, Local Search Ally&rsquo;s liability for any claim arising out of
              use of this site or any service provided shall not exceed the total amount paid by you to Local Search Ally
              in the three months preceding the claim.
            </p>
            <p className="legal-body">
              Local Search Ally is not liable for indirect, incidental, consequential, or punitive damages of any kind,
              including lost revenue or lost business opportunity.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 8 */}
          <section id="section-8">
            <h2 className="legal-h2"><span className="legal-num">8.</span> Third-party services</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              Local Search Ally uses third-party services to deliver certain features, including Google Analytics,
              Supabase, Resend, Upstash, and the Anthropic API. Local Search Ally is not responsible for the
              availability, accuracy, or practices of these services. Their respective terms and privacy policies govern
              their use.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 9 */}
          <section id="section-9">
            <h2 className="legal-h2"><span className="legal-num">9.</span> Termination</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              Local Search Ally reserves the right to suspend or terminate access to the site or audit tool for anyone
              who violates these terms, abuses the rate-limiting system, or uses the tool in a way that is harmful to
              others or to the operation of the site.
            </p>
            <p className="legal-body">
              For paid services, either party may terminate the engagement at any time with written notice. Outstanding
              balances remain due upon termination.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 10 */}
          <section id="section-10">
            <h2 className="legal-h2"><span className="legal-num">10.</span> Governing law</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              These terms are governed by the laws of the State of Arkansas. Any disputes arising under these terms will
              be resolved in the courts of Benton County, Arkansas, or through mutually agreed alternative dispute
              resolution.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 11 */}
          <section id="section-11">
            <h2 className="legal-h2"><span className="legal-num">11.</span> Changes to these terms</h2>
            <p className="legal-body" style={{ marginTop: "1rem" }}>
              These terms may be updated from time to time. Material changes will be posted here with a revised
              effective date. Continued use of the site or services after a change constitutes acceptance of the updated
              terms.
            </p>
          </section>

          <hr className="legal-rule" />

          {/* 12 */}
          <section id="section-12">
            <h2 className="legal-h2"><span className="legal-num">12.</span> Contact</h2>
            <div className="legal-contact-card">
              <p style={{ color: "var(--text)", fontWeight: 600, marginBottom: "0.25rem" }}>Chad Smith</p>
              <p>Local Search Ally</p>
              <p>Siloam Springs, AR</p>
              <p style={{ marginTop: "0.75rem" }}>
                <a href="mailto:chad@localsearchally.com" className="legal-link">
                  chad@localsearchally.com
                </a>
              </p>
              <p>
                <a href="tel:+14793808626" className="legal-link">
                  (479) 380-8626
                </a>
              </p>
              <p>
                <Link href="/" className="legal-link">
                  localsearchally.com
                </Link>
              </p>
            </div>
          </section>

        </div>
      </div>

      <style>{`
        .legal-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--carolina);
          margin-bottom: 1.25rem;
        }
        .legal-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--text);
          margin-bottom: 1rem;
        }
        .legal-meta {
          font-family: var(--font-ui);
          color: var(--muted);
          font-size: 0.875rem;
        }
        .legal-intro-block {
          margin-top: 1.75rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .legal-h2 {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 2.5vw, 1.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
          line-height: 1.3;
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }
        .legal-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--carolina);
          flex-shrink: 0;
        }
        .legal-h3 {
          font-family: var(--font-ui);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.6rem;
          letter-spacing: 0.01em;
        }
        .legal-body {
          font-family: var(--font-ui);
          font-size: 0.975rem;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 0.85rem;
        }
        .legal-list {
          font-family: var(--font-ui);
          font-size: 0.975rem;
          line-height: 1.75;
          color: var(--muted);
          margin: 0.5rem 0 0.85rem 1.25rem;
          list-style: disc;
        }
        .legal-list li { margin-bottom: 0.2rem; }
        .legal-link {
          color: var(--carolina);
          text-decoration: none;
          border-bottom: 1px solid rgba(123,175,212,0.3);
          transition: border-color 0.15s, color 0.15s;
        }
        .legal-link:hover {
          color: #a8d4ef;
          border-color: rgba(123,175,212,0.7);
        }
        .toc-link {
          font-family: var(--font-ui);
          font-size: 0.875rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .toc-link:hover { color: var(--carolina); }
        .legal-rule {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 0;
        }
        .legal-contact-card {
          margin-top: 1.25rem;
          padding: 1.5rem 1.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          font-family: var(--font-ui);
          line-height: 1.9;
          color: var(--muted);
          font-size: 0.9rem;
        }
      `}</style>
    </main>
  );
}
