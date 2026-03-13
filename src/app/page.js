import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        padding: "6rem 2rem",
        textAlign: "center",
        borderBottom: "1px solid var(--duke)",
      }}>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1rem" }}>
          Web Development + Local SEO
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.2, marginBottom: "1.5rem" }}>
          Helping Contractors Get Found <br />
          <span style={{ color: "var(--carolina)" }}>Where It Matters Most</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          Local Search Ally builds fast, SEO-optimized websites for contractors — so your next customer finds you before they find your competitor.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/services" style={{
            backgroundColor: "var(--carolina)",
            color: "#000",
            padding: "0.85rem 2rem",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
          }}>
            See Our Services
          </Link>
          <Link href="/contact" style={{
            border: "1px solid var(--carolina)",
            color: "var(--carolina)",
            padding: "0.85rem 2rem",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
          }}>
            Get a Free Audit
          </Link>
        </div>
      </section>

      {/* Services Snapshot */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>What We Do</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {[
            { title: "Local SEO", desc: "Rank higher in Google Maps and local search results. More visibility, more calls." },
            { title: "Web Development", desc: "Fast, mobile-first websites built to convert visitors into leads." },
            { title: "SEO Audits", desc: "Find out exactly why you're not ranking — and get a clear plan to fix it." },
          ].map((service) => (
            <div key={service.title} style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--duke)",
              borderRadius: "8px",
              padding: "2rem",
            }}>
              <h3 style={{ color: "var(--carolina)", marginBottom: "0.75rem" }}>{service.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        borderTop: "1px solid var(--duke)",
        padding: "4rem 2rem",
        textAlign: "center",
      }}>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Why Contractors Trust Us
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
          {[
            { stat: "5+", label: "Years Local SEO Experience" },
            { stat: "100%", label: "Contractor Focused" },
            { stat: "Fast", label: "Performance-First Builds" },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontSize: "2rem", fontWeight: "800", color: "var(--carolina)", margin: 0 }}>{item.stat}</p>
              <p style={{ color: "var(--muted)", margin: "0.25rem 0 0", fontSize: "0.9rem" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}