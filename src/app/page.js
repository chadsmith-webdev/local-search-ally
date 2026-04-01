import Link from "next/link";

export const metadata = {
  title: "Local SEO for NWA Contractors | Local Search Ally",
  description:
    "97% of people use Google to find a local contractor. If your name isn't in the results, the call goes to whoever is. Free audit for NWA contractors.",
};

const C = {
  carolina:     "#7bafd4",
  carolinaDark: "#5a93bc",
  steel:        "#4A6B8A",
  carolinaDim:  "rgba(123,175,212,0.12)",
  carolinaBorder:"rgba(123,175,212,0.28)",
  muted:        "#888888",
  muted2:       "#555555",
  border:       "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",
  surface:      "#141414",
  surface2:     "#1e1e1e",
  text:         "#f0f0f0",
  text2:        "#c0c0c0",
};

// ─── Shared primitives ───────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <p style={{
      fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em",
      textTransform: "uppercase", color: C.muted,
      fontFamily: "var(--font-ui)", marginBottom: "0.875rem",
    }}>
      {children}
    </p>
  );
}

function H2({ children, style }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
      fontWeight: 700, lineHeight: 1.22, letterSpacing: "-0.02em",
      color: C.text, marginBottom: "1.25rem", ...style,
    }}>
      {children}
    </h2>
  );
}

function Body({ children, style }) {
  return (
    <p style={{
      color: C.muted, fontSize: "1rem", lineHeight: 1.78,
      fontFamily: "var(--font-ui)", marginBottom: "1.1rem", ...style,
    }}>
      {children}
    </p>
  );
}

function GradientBtn({ href, children }) {
  return (
    <Link href={href} className="btn-primary" style={{
      display: "inline-block",
      background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
      color: "#1e2a3a", fontWeight: 600, fontSize: "0.78rem",
      letterSpacing: "0.1em", textTransform: "uppercase",
      fontFamily: "var(--font-mono)",
      padding: "15px 32px", borderRadius: 6,
      textDecoration: "none", lineHeight: 1,
      minHeight: 44, display: "inline-flex", alignItems: "center",
    }}>
      {children}
    </Link>
  );
}

function OutlineBtn({ href, children }) {
  return (
    <Link href={href} className="btn-outline" style={{
      display: "inline-flex", alignItems: "center",
      border: `1px solid ${C.borderStrong}`,
      color: C.carolina, fontWeight: 600, fontSize: "0.78rem",
      letterSpacing: "0.1em", textTransform: "uppercase",
      fontFamily: "var(--font-mono)",
      padding: "15px 28px", borderRadius: 6,
      textDecoration: "none", lineHeight: 1,
      minHeight: 44,
    }}>
      {children}
    </Link>
  );
}

// ─── Section data ─────────────────────────────────────────────────────────────

const problemCards = [
  {
    label: "On Google Maps",
    body: "Your competitors are in the Map Pack. You're buried below them — or not showing up at all. Customers searching your trade in your city right now are calling someone else.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "On your website",
    body: "An outdated site, or no site at all, tells customers to keep scrolling. It doesn't matter how good the work is if the first impression is a page that looks like it hasn't been touched since 2015.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    label: "In your reviews",
    body: "You've done hundreds of jobs. But online you might look like the new guy. Customers can't tell who's been operating for twenty years and who started six months ago.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const planSteps = [
  {
    num: "01",
    title: "Audit",
    body: "I review your Google Business Profile, website, competitor ranking, and local citation health to find what's actually costing you calls.",
    cta: { label: "Start with the free audit →", href: "/audit" },
    active: true,
  },
  {
    num: "02",
    title: "Fix Priority Gaps",
    body: "Not everything at once. What matters most first — the things that move you up in search before we touch anything else.",
    cta: null,
    active: false,
  },
  {
    num: "03",
    title: "Grow and Track",
    body: "Monthly reports on what's improving and what's next. You see the data, not just a summary.",
    cta: null,
    active: false,
  },
];

const auditAreas = ["GBP", "Reviews", "Website", "Technical", "Citations", "Backlinks", "Competitors"];

const faqItems = [
  {
    q: "What does the free audit actually check?",
    a: "Seven areas: your Google Business Profile, review count and recency, your website's on-page setup, technical health (page speed, schema markup, mobile), citation consistency across directories like Yelp and Angi, backlink signals, and how you compare to the top three competitors showing up for your trade in your city. Each section gets a score and a plain-English finding.",
  },
  {
    q: "I don't have a website. Can you still help?",
    a: "Yes — and the audit will show you exactly what not having one is costing you in search. Most of the calls going to your competitors are coming from people who found them on Google, not through a referral. A site built for local search changes that.",
  },
  {
    q: "How is this different from hiring an SEO agency?",
    a: "Most agencies sell packages and report on numbers you can't connect to actual calls. I work with a small number of clients, no contracts, and if what I'm doing isn't working I'll tell you before you figure it out yourself.",
  },
  {
    q: "How long before I see results?",
    a: "Most businesses see meaningful ranking movement in 60–90 days, depending on how competitive your trade is in your city. I'll tell you what's realistic for your specific situation before we start — not after you've already paid.",
  },
  {
    q: "What does it cost?",
    a: "Depends on what you need. The audit is free. If you want to talk through what fixing the gaps would look like, that conversation is free too.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. I don't offer them.",
  },
  {
    q: "Why should I trust someone I've never heard of?",
    a: "Fair question. I'm a startup in Siloam Springs — no decade of client case studies. What I have is a method I've tested on my own demo sites, data I can show you, and a commitment I intend to keep: if I'm not delivering, you leave. Start with the free audit. You'll get a pretty good sense of whether I know what I'm talking about.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <style>{`
        /* Buttons */
        .btn-primary {
          cursor: pointer;
          transition: opacity 0.15s ease;
        }
        .btn-primary:hover { opacity: 0.86; }
        .btn-primary:active { opacity: 0.75; transform: scale(0.985); }

        .btn-outline {
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .btn-outline:hover {
          border-color: ${C.carolinaBorder};
          background: ${C.carolinaDim};
        }
        .btn-outline:active { background: rgba(123,175,212,0.16); }

        /* Cards */
        .problem-card {
          transition: border-color 0.2s ease, transform 0.22s ease;
        }
        .problem-card:hover {
          border-color: rgba(123,175,212,0.22) !important;
          transform: translateY(-2px);
        }

        /* FAQ */
        .faq-item {
          transition: background 0.15s ease;
          border-radius: 6px;
          margin: 0 -12px;
          padding-left: 12px;
          padding-right: 12px;
        }
        .faq-item:hover { background: rgba(255,255,255,0.025); }

        /* Inline links */
        .inline-link {
          transition: color 0.15s ease;
        }
        .inline-link:hover { color: ${C.carolinaDark} !important; }

        /* Responsive */
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 760px) {
          .problem-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .cta-row { flex-direction: column; align-items: stretch; }
          .cta-row a { justify-content: center; }
        }
      `}</style>

      <div style={{ background: "#0a0a0a" }}>

        {/* ─── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 640, margin: "0 auto", textAlign: "center",
          padding: "clamp(5rem, 12vw, 9rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 7rem)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: C.carolinaDim, borderRadius: 100,
            padding: "6px 14px", marginBottom: 28,
            border: `1px solid rgba(123,175,212,0.14)`,
          }}>
            <span
              className="badge-dot"
              style={{
                width: 6, height: 6, borderRadius: "50%",
                background: C.carolina, display: "inline-block",
                animation: "pulse 2.5s ease-in-out infinite",
              }}
            />
            <span style={{
              fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em",
              textTransform: "uppercase", color: C.carolina, fontFamily: "var(--font-ui)",
            }}>
              Free Local SEO Audit · NWA Contractors
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.1rem, 5.5vw, 3.25rem)",
            fontWeight: 700, lineHeight: 1.18, letterSpacing: "-0.025em",
            color: C.text, margin: "0 0 20px",
          }}>
            Your competitors are getting calls that should be yours.
          </h1>

          <p style={{
            color: C.text2, fontSize: "1.05rem", lineHeight: 1.72,
            fontFamily: "var(--font-ui)", margin: "0 0 10px",
          }}>
            97% of people use Google to find a local contractor. If your name isn't in the results, the call goes to whoever is.
          </p>

          <p style={{
            color: C.muted, fontSize: "0.95rem", lineHeight: 1.72,
            fontFamily: "var(--font-ui)", margin: "0 0 36px",
          }}>
            The best contractor in town shouldn't be the hardest to find. I make sure they're not.
          </p>

          <GradientBtn href="/audit">Run Your Free Audit →</GradientBtn>

          <p style={{ color: C.muted2, fontSize: "0.72rem", marginTop: 14, fontFamily: "var(--font-ui)" }}>
            Real audit. Real data. 90 seconds. No email needed to see your scores.
          </p>
        </section>

        {/* ─── PROBLEM ───────────────────────────────────────────────────────── */}
        <section style={{ padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)" }}>
          <div style={{ maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
            <Eyebrow>The Real Problem</Eyebrow>
            <H2>Good work used to be enough.</H2>
            <Body>
              You built something real. You show up on time, do the job right, and your customers tell their neighbors.
            </Body>
            <Body>
              But the homeowner in Rogers who needs an HVAC tune-up this week isn't asking a neighbor first. They're opening Google. And if your name isn't in the first three results on the map, they call someone else without ever knowing you exist.
            </Body>
            <p style={{
              color: C.carolina, fontSize: "1rem", lineHeight: 1.72,
              fontFamily: "var(--font-ui)", marginBottom: 0,
            }}>
              The work isn't the problem. The visibility is.
            </p>
          </div>

          <div className="problem-grid" style={{ maxWidth: 960, margin: "0 auto" }}>
            {problemCards.map((card) => (
              <div key={card.label} className="problem-card" style={{
                background: C.surface, borderRadius: 8,
                border: `1px solid ${C.border}`,
                padding: "28px 24px",
              }}>
                <div style={{ color: C.carolina, marginBottom: 14 }}>
                  {card.icon}
                </div>
                <p style={{
                  fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: C.muted,
                  fontFamily: "var(--font-ui)", marginBottom: 10,
                }}>
                  {card.label}
                </p>
                <p style={{
                  color: C.text2, fontSize: "0.9rem", lineHeight: 1.72,
                  fontFamily: "var(--font-ui)",
                }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── GUIDE ─────────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 640, margin: "0 auto",
          padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 4vw, 2rem)",
        }}>
          <Eyebrow>Not Another Agency</Eyebrow>
          <H2>I know why you're skeptical.</H2>

          <Body>
            If you've hired a marketing company before and walked away feeling like you paid for reports instead of results — I get it. Most agencies sell the idea of results. They hand you a 40-page document, disappear for three months, and call it strategy.
          </Body>
          <Body>
            I came to this through real estate wholesaling. That world runs on contractor relationships, and I watched the same thing happen over and over: good tradespeople overlooked online because nobody had ever shown them what was wrong — or that most of it is fixable without spending a fortune.
          </Body>
          <Body>
            I'm not a big agency. I'm one person in Siloam Springs, and I don't take on clients I can't actually help. If something is outside my skill set, I'll say so before you pay for it.
          </Body>

          <div style={{
            borderLeft: `2px solid ${C.carolina}`,
            paddingLeft: 20, marginTop: 32,
          }}>
            <p style={{
              color: C.text2, fontSize: "0.9rem", lineHeight: 1.75,
              fontFamily: "var(--font-ui)", marginBottom: 14,
            }}>
              The data on this is straightforward. 28% of searches for a nearby service result in a purchase the same day{" "}
              <span style={{ color: C.muted }}>(Think With Google)</span>. The Map Pack captures the overwhelming share of those clicks. Most NWA contractors aren't in it — and the reasons why are usually fixable in weeks, not months.
            </p>
            <p style={{
              color: C.text2, fontSize: "0.9rem", lineHeight: 1.75,
              fontFamily: "var(--font-ui)",
            }}>
              Before offering this to anyone, I built demo sites for plumbing, HVAC, and electrical with schema markup, dedicated service pages, GBP optimization, and conversion paths built in. Not to show clients — to prove the method on my own projects first.{" "}
              <Link href="/portfolio" className="inline-link" style={{
                color: C.carolina, textDecoration: "underline",
                textUnderlineOffset: 3,
              }}>
                See the portfolio →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── PLAN ──────────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 640, margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)",
        }}>
          <Eyebrow>How This Works</Eyebrow>
          <H2>Three steps. No surprises.</H2>

          <div role="list">
            {planSteps.map((step, i) => (
              <div key={step.num} role="listitem" style={{
                borderLeft: `2px solid ${step.active ? C.carolina : C.border}`,
                paddingLeft: 24,
                paddingBottom: i < planSteps.length - 1 ? 36 : 0,
                position: "relative",
              }}>
                {/* Active indicator dot */}
                {step.active && (
                  <span style={{
                    position: "absolute", left: -5, top: 2,
                    width: 8, height: 8, borderRadius: "50%",
                    background: C.carolina,
                  }} />
                )}
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                    color: step.active ? C.carolina : C.muted,
                    letterSpacing: "0.1em", fontWeight: 500,
                  }}>
                    {step.num}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: "1.15rem",
                    fontWeight: 700,
                    color: step.active ? C.text : C.text2,
                    letterSpacing: "-0.01em",
                  }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{
                  color: C.muted, fontSize: "0.9rem", lineHeight: 1.75,
                  fontFamily: "var(--font-ui)",
                  marginBottom: step.cta ? 10 : 0,
                }}>
                  {step.body}
                </p>
                {step.cta && (
                  <Link href={step.cta.href} className="inline-link" style={{
                    color: C.carolina, fontSize: "0.82rem",
                    fontFamily: "var(--font-ui)",
                    textDecoration: "underline", textUnderlineOffset: 3,
                  }}>
                    {step.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div style={{
            background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "20px 24px",
            display: "flex", flexDirection: "column", gap: 10,
            marginTop: 36,
          }}>
            <p style={{ color: C.text2, fontSize: "0.88rem", fontFamily: "var(--font-ui)", lineHeight: 1.65 }}>
              <strong style={{ color: C.text, fontWeight: 600 }}>No contracts, ever.</strong>{" "}
              If I stop delivering, you leave — no lock-in, no cancellation fees, no notice period.
            </p>
            <p style={{ color: C.text2, fontSize: "0.88rem", fontFamily: "var(--font-ui)", lineHeight: 1.65 }}>
              <strong style={{ color: C.text, fontWeight: 600 }}>You'll always know what I'm doing and whether it's working.</strong>{" "}
              If something's outside my skill set, I'll say so before you pay for it.
            </p>
          </div>
        </section>

        {/* ─── AUDIT TOOL ────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 640, margin: "0 auto", textAlign: "center",
          padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)",
        }}>
          <Eyebrow>Free Tool</Eyebrow>
          <H2>See your scores before you talk to anyone.</H2>
          <Body>
            Enter your business name, trade, and city. In about 90 seconds you'll get a scored audit across seven areas — your Google Business Profile, reviews, website setup, technical health, directory listings, backlinks, and how you compare to the top three competitors showing up for your trade in your area.
          </Body>
          <Body style={{ marginBottom: 32 }}>
            The first four sections are yours immediately. The full action plan — ranked by what to fix first — comes with the email report.
          </Body>

          <GradientBtn href="/audit">Run Your Free Audit →</GradientBtn>
          <p style={{ color: C.muted2, fontSize: "0.72rem", marginTop: 14, fontFamily: "var(--font-ui)" }}>
            No email needed to see your scores. Takes 90 seconds.
          </p>

          {/* Audit areas strip */}
          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center",
            gap: "8px 0", justifyContent: "center", marginTop: 32,
          }} aria-label="Audit covers">
            {auditAreas.map((area, i) => (
              <span key={area} style={{ display: "inline-flex", alignItems: "center" }}>
                {i > 0 && (
                  <span style={{
                    display: "inline-block", width: 3, height: 3, borderRadius: "50%",
                    background: C.border, margin: "0 12px",
                  }} aria-hidden="true" />
                )}
                <span style={{
                  fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: C.muted, fontFamily: "var(--font-ui)",
                }}>
                  {area}
                </span>
              </span>
            ))}
          </div>
        </section>

        {/* ─── SUCCESS ───────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 640, margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)",
        }}>
          <Eyebrow>What Good Looks Like</Eyebrow>
          <H2>The phone rings from people who already want to hire you.</H2>
          <Body>
            A plumber in Bentonville who shows up first for "emergency plumber near me" gets that call. That search happens dozens of times a week in NWA. The business at the top isn't necessarily better — they just got found first.
          </Body>
          <Body>
            When the visibility gaps are fixed, you stop depending on referral timing. Someone needs HVAC before summer hits. They open Google, they find you, they call. Not because you ran an ad. Because you showed up where they were already looking.
          </Body>
          <Body style={{ marginBottom: 0 }}>
            What that looks like day-to-day: a schedule that fills from search, not just referrals. Calls from people who already know what they need. And a clear view of which searches and pages are driving the work — no black box.
          </Body>
        </section>

        {/* ─── STAKES ────────────────────────────────────────────────────────── */}
        <section style={{ padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)" }}>
          <div style={{
            maxWidth: 640, margin: "0 auto",
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderTop: `1px solid rgba(123,175,212,0.18)`,
            borderRadius: 12,
            padding: "clamp(2rem, 5vw, 3rem)",
          }}>
            <H2>Every month you're invisible, that's work going to whoever shows up first.</H2>
            <Body>
              Referrals are real business. But they're not a system — they're a streak. The streak slows when your best customers get busy, move, or just forget to mention you. There's nothing behind it when it does.
            </Body>
            <Body>
              The contractors ranking in the Map Pack right now for your trade in Rogers, Bentonville, and Fayetteville aren't necessarily doing better work. They just got found first. The gap between your position and theirs isn't talent — it's visibility, and it's usually fixable.
            </Body>
            <Body style={{ marginBottom: 28 }}>
              Running the free audit takes 90 seconds. You'll know exactly where you stand before you decide if any of this is worth pursuing.
            </Body>
            <GradientBtn href="/audit">See Where You Stand Online →</GradientBtn>
          </div>
        </section>

        {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 680, margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
            fontWeight: 700, color: C.text,
            marginBottom: 32, letterSpacing: "-0.02em",
          }}>
            Questions worth asking.
          </h2>

          <dl>
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item" style={{
                borderTop: `1px solid ${C.border}`,
                padding: "24px 12px",
              }}>
                <dt style={{
                  fontFamily: "var(--font-ui)", fontSize: "0.95rem",
                  fontWeight: 600, color: C.text, marginBottom: 10, lineHeight: 1.5,
                }}>
                  {item.q}
                </dt>
                <dd style={{
                  fontFamily: "var(--font-ui)", fontSize: "0.9rem",
                  color: C.muted, lineHeight: 1.75, margin: 0,
                }}>
                  {item.a}
                </dd>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}` }} />
          </dl>
        </section>

        {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: 560, margin: "0 auto", textAlign: "center",
          padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(5rem, 10vw, 8rem)",
        }}>
          <H2>The best contractor in town shouldn't be the hardest to find.</H2>
          <Body style={{ marginBottom: 36 }}>
            Run the free audit and see where you stand. If the findings are useful on their own, take them. If you want to talk through what fixing them would look like, I'm here.
          </Body>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <GradientBtn href="/audit">Run Your Free Audit →</GradientBtn>
            <OutlineBtn href="/contact">Let's Talk — It's Free →</OutlineBtn>
          </div>
          <p style={{ color: C.muted2, fontSize: "0.72rem", marginTop: 18, fontFamily: "var(--font-ui)" }}>
            No pitch. No pressure.
          </p>
        </section>

      </div>
    </>
  );
}
