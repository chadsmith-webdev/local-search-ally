import Link from "next/link";

export const metadata = {
  title: "Local SEO for Contractors | Local Search Ally",
  description:
    "AI-powered local SEO audits and strategy for contractors in NWA. See exactly where your business stands in Google — free, in 90 seconds.",
};

const C = {
  carolina: "#7bafd4",
  steel: "#4A6B8A",
  carolinaDim: "rgba(123,175,212,0.12)",
  muted: "#888888",
  border: "rgba(255,255,255,0.08)",
  surface: "#141414",
  slate: "#2E3A4D",
};

const checks = [
  "Google Business Profile",
  "Reviews & Responses",
  "On-Page SEO",
  "Technical Setup",
  "Local Citations",
  "Backlinks",
  "Competitor Comparison",
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Hero */}
      <section style={{
        maxWidth: 640, margin: "0 auto",
        padding: "clamp(4rem, 10vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)",
        textAlign: "center",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: C.carolinaDim, borderRadius: 100,
          padding: "5px 14px", marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.carolina, display: "inline-block" }} />
          <span style={{
            fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em",
            textTransform: "uppercase", color: C.carolina, fontFamily: "var(--font-ui)",
          }}>
            Free · No Account Needed
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em",
          color: "#f0f0f0", margin: "0 0 18px",
        }}>
          See Exactly How Your Business<br />Shows Up in Google
        </h1>

        <p style={{
          color: C.muted, fontSize: "1rem", lineHeight: 1.7,
          margin: "0 0 36px", fontFamily: "var(--font-ui)",
        }}>
          Real AI-powered audit. Real data. 60–90 seconds.
          Built for contractors in Northwest Arkansas.
        </p>

        <Link href="/audit" style={{
          display: "inline-block",
          background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
          color: "#1e2a3a", fontWeight: 600, fontSize: "0.78rem",
          letterSpacing: "0.1em", textTransform: "uppercase",
          fontFamily: "var(--font-mono)",
          padding: "15px 32px", borderRadius: 6,
          textDecoration: "none",
          transition: "opacity 0.15s",
        }}>
          Run My Free Audit →
        </Link>

        <p style={{ color: "#555", fontSize: "0.72rem", marginTop: 12, fontFamily: "var(--font-ui)" }}>
          No spam. No sales pitch before you see results.
        </p>
      </section>

      {/* What it checks */}
      <section style={{
        maxWidth: 480, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)",
      }}>
        <p style={{
          textAlign: "center", fontSize: "0.62rem", fontWeight: 600,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: C.muted, fontFamily: "var(--font-ui)", marginBottom: 18,
        }}>
          The audit checks 7 things
        </p>
        <div style={{ display: "grid", gap: 8 }}>
          {checks.map((item, i) => (
            <div key={item} style={{
              background: C.surface, borderRadius: 6,
              padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: 4,
                background: C.carolinaDim,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.65rem", fontWeight: 500, color: C.carolina,
                fontFamily: "var(--font-mono)", flexShrink: 0,
              }}>{i + 1}</span>
              <span style={{ fontSize: "0.84rem", color: "#c0c0c0", fontFamily: "var(--font-ui)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/audit" style={{
            display: "inline-block",
            border: `1px solid ${C.border}`,
            color: C.carolina, fontWeight: 600, fontSize: "0.72rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
            padding: "11px 24px", borderRadius: 6,
            textDecoration: "none", transition: "border-color 0.15s, background 0.15s",
          }}>
            Get My Free Score →
          </Link>
        </div>
      </section>
    </div>
  );
}
