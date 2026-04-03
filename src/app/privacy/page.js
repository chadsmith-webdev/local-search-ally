import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Local Search Ally",
  description:
    "How Local Search Ally collects, uses, and stores your information when you use this website and the free SEO audit tool.",
  openGraph: {
    title: "Privacy Policy | Local Search Ally",
    description:
      "How Local Search Ally collects, uses, and stores your information.",
    url: "https://localsearchally.com/privacy",
  },
  robots: { index: false },
};

const sections = [
  {
    id: "collection",
    heading: "What this site collects and why",
    subsections: [
      {
        heading: "1. The free audit tool",
        body: (
          <>
            <p>When you run a free local SEO audit, you provide:</p>
            <ul>
              <li>Business name</li>
              <li>Website URL (optional if you select "no website")</li>
              <li>Primary trade (from a dropdown)</li>
              <li>Service city</li>
            </ul>
            <p>
              This information is used to run the audit and return your scored
              results. It&rsquo;s stored in a database so your results can be
              accessed again via a shareable link. Audits are cached for 24
              hours — if someone runs an audit on the same website within that
              window, the stored result is returned rather than a new one being
              generated.
            </p>
            <p>
              No account is required. You don&rsquo;t need to provide your name
              or any personal contact information to see your audit results.
            </p>
          </>
        ),
      },
      {
        heading: "2. Email address",
        body: (
          <>
            <p>
              After your audit results are displayed, you have the option to
              enter your email address to receive the full action plan as a PDF
              report. This is optional — the scored results are visible without
              it.
            </p>
            <p>If you provide your email:</p>
            <ul>
              <li>You&rsquo;ll receive the audit report via email.</li>
              <li>
                You may receive a short follow-up email sequence (typically 3–4
                emails over 10 days) related to the findings in your audit and
                local SEO for your trade.
              </li>
              <li>
                You can unsubscribe from any email at any time using the
                unsubscribe link in each message.
              </li>
            </ul>
            <p>
              Your email is not sold, shared with third parties for marketing
              purposes, or added to any list unrelated to Local Search Ally.
            </p>
          </>
        ),
      },
      {
        heading: "3. IP address",
        body: (
          <p>
            IP addresses are collected temporarily for rate limiting purposes —
            specifically, to prevent automated abuse of the free audit tool (the
            limit is 5 audits per IP address per 24-hour period). IP data used
            for rate limiting is not stored long-term or linked to your audit
            results.
          </p>
        ),
      },
    ],
  },
  {
    id: "third-party",
    heading: "Third-party services used on this site",
    subsections: [
      {
        heading: "Google Analytics 4",
        body: (
          <p>
            This site uses Google Analytics 4 to understand how visitors use
            the site — which pages they visit, how long they stay, and how they
            navigate. Google Analytics uses cookies and collects data including
            your IP address, browser type, and device information. This data is
            processed by Google and subject to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&rsquo;s Privacy Policy
            </a>
            . You can opt out using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        ),
      },
      {
        heading: "Supabase",
        body: (
          <p>
            Audit results and associated inputs (business name, trade, city,
            website URL) are stored in a Supabase database. Data stored
            includes your audit inputs and scored results. It does not include
            personally identifiable information unless you&rsquo;ve also
            provided your email address.{" "}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supabase Privacy Policy
            </a>
          </p>
        ),
      },
      {
        heading: "Resend",
        body: (
          <p>
            If you provide your email address, it&rsquo;s transmitted to
            Resend, an email delivery service, to send your audit report and
            any follow-up emails.{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend Privacy Policy
            </a>
          </p>
        ),
      },
      {
        heading: "Upstash",
        body: (
          <p>
            Upstash Redis is used for rate limiting. IP addresses are processed
            temporarily to enforce per-IP request limits. No personally
            identifiable information is stored in Upstash beyond what&rsquo;s
            needed for this function.{" "}
            <a
              href="https://upstash.com/trust/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upstash Privacy Policy
            </a>
          </p>
        ),
      },
      {
        heading: "Anthropic",
        body: (
          <p>
            The audit tool uses the Anthropic Claude API and web search to
            generate your audit results. The business name, website URL, trade,
            and city you enter are sent to Anthropic&rsquo;s API to produce the
            audit. This data is processed according to{" "}
            <a
              href="https://www.anthropic.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthropic&rsquo;s Privacy Policy
            </a>
            .
          </p>
        ),
      },
    ],
  },
];

export default function PrivacyPage() {
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
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--carolina)",
              marginBottom: "1.25rem",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--text)",
              marginBottom: "1rem",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "var(--font-ui)", color: "var(--muted)", fontSize: "0.875rem" }}>
            Effective date: January 16, 2024 &nbsp;&middot;&nbsp; Last updated: April 3, 2026
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              paddingBottom: "1.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ fontFamily: "var(--font-ui)", color: "var(--muted)", lineHeight: 1.7, fontSize: "0.975rem" }}>
              This privacy policy explains what information Local Search Ally
              collects when you use this website, how it&rsquo;s used, and how
              it&rsquo;s stored. This site is operated by Chad Smith, based in
              Siloam Springs, AR. Questions?{" "}
              <a href="mailto:chad@localsearchally.com" className="policy-link">
                chad@localsearchally.com
              </a>{" "}
              or{" "}
              <a href="tel:+14793808626" className="policy-link">
                (479) 380-8626
              </a>
              .
            </p>
          </div>
        </div>

        {/* Main sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* What this site collects */}
          <section>
            <h2 className="policy-h2">What this site collects and why</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
              <div>
                <h3 className="policy-h3">1. The free audit tool</h3>
                <p className="policy-body">When you run a free local SEO audit, you provide:</p>
                <ul className="policy-list">
                  <li>Business name</li>
                  <li>Website URL (optional if you select "no website")</li>
                  <li>Primary trade (from a dropdown)</li>
                  <li>Service city</li>
                </ul>
                <p className="policy-body">
                  This information is used to run the audit and return your scored results. It&rsquo;s stored in a
                  database so your results can be accessed again via a shareable link. Audits are cached for 24 hours —
                  if someone runs an audit on the same website within that window, the stored result is returned rather
                  than a new one being generated.
                </p>
                <p className="policy-body">
                  No account is required. You don&rsquo;t need to provide your name or any personal contact information
                  to see your audit results.
                </p>
              </div>

              <div>
                <h3 className="policy-h3">2. Email address</h3>
                <p className="policy-body">
                  After your audit results are displayed, you have the option to enter your email address to receive the
                  full action plan as a PDF report. This is optional — the scored results are visible without it.
                </p>
                <p className="policy-body">If you provide your email:</p>
                <ul className="policy-list">
                  <li>You&rsquo;ll receive the audit report via email.</li>
                  <li>
                    You may receive a short follow-up email sequence (typically 3–4 emails over 10 days) related to the
                    findings in your audit and local SEO for your trade.
                  </li>
                  <li>
                    You can unsubscribe from any email at any time using the unsubscribe link in each message.
                  </li>
                </ul>
                <p className="policy-body">
                  Your email is not sold, shared with third parties for marketing purposes, or added to any list
                  unrelated to Local Search Ally.
                </p>
              </div>

              <div>
                <h3 className="policy-h3">3. IP address</h3>
                <p className="policy-body">
                  IP addresses are collected temporarily for rate limiting purposes — specifically, to prevent automated
                  abuse of the free audit tool (the limit is 5 audits per IP address per 24-hour period). IP data used
                  for rate limiting is not stored long-term or linked to your audit results.
                </p>
              </div>
            </div>
          </section>

          <hr className="policy-rule" />

          {/* Third-party services */}
          <section>
            <h2 className="policy-h2">Third-party services used on this site</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "1.5rem" }}>
              {[
                {
                  name: "Google Analytics 4",
                  body: <>This site uses Google Analytics 4 to understand how visitors use the site — which pages they visit, how long they stay, and how they navigate. Google Analytics uses cookies and collects data including your IP address, browser type, and device information. This data is processed by Google and subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="policy-link">Google&rsquo;s Privacy Policy</a>. You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="policy-link">Google Analytics Opt-out Browser Add-on</a>.</>,
                },
                {
                  name: "Supabase",
                  body: <>Audit results and associated inputs (business name, trade, city, website URL) are stored in a Supabase database. Data stored includes your audit inputs and scored results. It does not include personally identifiable information unless you&rsquo;ve also provided your email address. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="policy-link">Supabase Privacy Policy</a></>,
                },
                {
                  name: "Resend",
                  body: <>If you provide your email address, it&rsquo;s transmitted to Resend, an email delivery service, to send your audit report and any follow-up emails. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="policy-link">Resend Privacy Policy</a></>,
                },
                {
                  name: "Upstash",
                  body: <>Upstash Redis is used for rate limiting. IP addresses are processed temporarily to enforce per-IP request limits. No personally identifiable information is stored in Upstash beyond what&rsquo;s needed for this function. <a href="https://upstash.com/trust/privacy.pdf" target="_blank" rel="noopener noreferrer" className="policy-link">Upstash Privacy Policy</a></>,
                },
                {
                  name: "Anthropic",
                  body: <>The audit tool uses the Anthropic Claude API and web search to generate your audit results. The business name, website URL, trade, and city you enter are sent to Anthropic&rsquo;s API to produce the audit. This data is processed according to <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="policy-link">Anthropic&rsquo;s Privacy Policy</a>.</>,
                },
              ].map(({ name, body }) => (
                <div key={name}>
                  <h3 className="policy-h3">{name}</h3>
                  <p className="policy-body">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="policy-rule" />

          {/* Cookies */}
          <section>
            <h2 className="policy-h2">Cookies</h2>
            <p className="policy-body" style={{ marginTop: "1rem" }}>
              This site uses cookies for Google Analytics (described above). No other tracking cookies or advertising
              cookies are used. This site does not serve ads.
            </p>
            <p className="policy-body">
              If you&rsquo;d prefer to browse without cookies, you can disable them in your browser settings or use the
              Google Analytics opt-out tool linked above. Disabling cookies won&rsquo;t affect your ability to use the
              audit tool or view your results.
            </p>
          </section>

          <hr className="policy-rule" />

          {/* Data retention */}
          <section>
            <h2 className="policy-h2">How long data is kept</h2>
            <p className="policy-body" style={{ marginTop: "1rem" }}>
              Audit results are stored indefinitely to support shareable result URLs. If you&rsquo;d like your audit
              data deleted, contact{" "}
              <a href="mailto:chad@localsearchally.com" className="policy-link">
                chad@localsearchally.com
              </a>{" "}
              with the business name and city used in the audit and I&rsquo;ll remove it.
            </p>
            <p className="policy-body">
              Email addresses are kept for as long as you remain subscribed. Unsubscribing removes you from future
              emails. To request complete deletion of your email and associated data, contact{" "}
              <a href="mailto:chad@localsearchally.com" className="policy-link">
                chad@localsearchally.com
              </a>
              .
            </p>
          </section>

          <hr className="policy-rule" />

          {/* Your rights */}
          <section>
            <h2 className="policy-h2">Your rights</h2>
            <p className="policy-body" style={{ marginTop: "1rem" }}>You have the right to:</p>
            <ul className="policy-list">
              <li>Request a copy of any personal data stored about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>
                Withdraw consent for email communications at any time (via the unsubscribe link in any email)
              </li>
            </ul>
            <p className="policy-body">
              To exercise any of these rights, contact{" "}
              <a href="mailto:chad@localsearchally.com" className="policy-link">
                chad@localsearchally.com
              </a>
              .
            </p>
          </section>

          <hr className="policy-rule" />

          {/* Children */}
          <section>
            <h2 className="policy-h2">Children</h2>
            <p className="policy-body" style={{ marginTop: "1rem" }}>
              This site is not directed at children under 13 and does not knowingly collect information from anyone
              under 13.
            </p>
          </section>

          <hr className="policy-rule" />

          {/* Changes */}
          <section>
            <h2 className="policy-h2">Changes to this policy</h2>
            <p className="policy-body" style={{ marginTop: "1rem" }}>
              If this policy changes materially, the updated version will be posted here with a revised effective date.
              Continued use of the site after a change constitutes acceptance of the updated policy.
            </p>
          </section>

          <hr className="policy-rule" />

          {/* Contact */}
          <section>
            <h2 className="policy-h2">Contact</h2>
            <div
              style={{
                marginTop: "1.25rem",
                padding: "1.5rem 1.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                fontFamily: "var(--font-ui)",
                lineHeight: 1.9,
                color: "var(--muted)",
                fontSize: "0.9rem",
              }}
            >
              <p style={{ color: "var(--text)", fontWeight: 600, marginBottom: "0.25rem" }}>Chad Smith</p>
              <p>Local Search Ally</p>
              <p>Siloam Springs, AR</p>
              <p style={{ marginTop: "0.75rem" }}>
                <a href="mailto:chad@localsearchally.com" className="policy-link">
                  chad@localsearchally.com
                </a>
              </p>
              <p>
                <a href="tel:+14793808626" className="policy-link">
                  (479) 380-8626
                </a>
              </p>
              <p>
                <Link href="/" className="policy-link">
                  localsearchally.com
                </Link>
              </p>
            </div>
          </section>

        </div>
      </div>

      <style>{`
        .policy-h2 {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
          line-height: 1.3;
        }
        .policy-h3 {
          font-family: var(--font-ui);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.6rem;
          letter-spacing: 0.01em;
        }
        .policy-body {
          font-family: var(--font-ui);
          font-size: 0.975rem;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 0.85rem;
        }
        .policy-list {
          font-family: var(--font-ui);
          font-size: 0.975rem;
          line-height: 1.75;
          color: var(--muted);
          margin: 0.5rem 0 0.85rem 1.25rem;
          list-style: disc;
        }
        .policy-list li {
          margin-bottom: 0.2rem;
        }
        .policy-link {
          color: var(--carolina);
          text-decoration: none;
          border-bottom: 1px solid rgba(123,175,212,0.3);
          transition: border-color 0.15s, color 0.15s;
        }
        .policy-link:hover {
          color: #a8d4ef;
          border-color: rgba(123,175,212,0.7);
        }
        .policy-rule {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 0;
        }
      `}</style>
    </main>
  );
}
