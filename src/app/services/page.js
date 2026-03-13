import Link from "next/link";

const services = [
  {
    title: "Local SEO",
    tagline: "Dominate your local market",
    desc: "Full-service local SEO that covers everything — citation building, review management, listing optimization, and on-page SEO. We get your business ranking where your customers are searching.",
    includes: ["Citation & listing cleanup", "Review generation strategy", "On-page SEO optimization", "Monthly ranking reports"],
    price: "Starting at $499/mo",
    cta: "Get a Custom Quote",
  },
  {
    title: "Google Business Profile Optimization",
    tagline: "Own the Map Pack",
    desc: "Your GBP listing is often the first thing a customer sees. We fully optimize your profile so you stand out from competitors and convert more profile views into calls.",
    includes: ["Full profile audit & optimization", "Category & attribute setup", "Photo strategy", "Q&A and post management"],
    price: "Starting at $199",
    cta: "Get a Custom Quote",
  },
  {
    title: "Web Development",
    tagline: "Fast, modern websites built to convert",
    desc: "Mobile-first websites built with performance and local SEO baked in from day one. No bloated page builders — just clean, fast code that Google loves.",
    includes: ["Custom design & development", "Mobile-first & fast loading", "On-page SEO foundation", "Contact forms & lead capture"],
    price: "Starting at $1,500",
    cta: "Get a Custom Quote",
  },
  {
    title: "SEO Audits",
    tagline: "Find out exactly why you're not ranking",
    desc: "A detailed audit of your website and local presence — covering technical SEO, content gaps, citation issues, and competitor analysis. You get a clear, actionable report.",
    includes: ["Technical SEO analysis", "Local citation audit", "Competitor gap analysis", "Prioritized action plan"],
    price: "Starting at $299",
    cta: "Order an Audit",
  },
];

export const metadata = {
  title: "Services | Local Search Ally",
  description: "Local SEO, web development, GBP optimization, and SEO audits for NWA contractors.",
};

export default function Services() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1rem" }}>
          What We Offer
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: "800", marginBottom: "1rem" }}>
          Services Built for Contractors
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.7 }}>
          Every service is designed around one goal — helping local contractors get more calls, more leads, and more jobs.
        </p>
      </div>

      {/* Service Cards */}
      <div style={{ display: "grid", gap: "2rem" }}>
        {services.map((service) => (
          <div key={service.title} style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--duke)",
            borderRadius: "10px",
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "start",
          }}>
            <div>
              <p style={{ color: "var(--carolina)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                {service.tagline}
              </p>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{service.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{service.desc}</p>
              <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)", lineHeight: 2, margin: 0 }}>
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: "right", minWidth: "180px" }}>
              <p style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text)", marginBottom: "1rem" }}>
                {service.price}
              </p>
              <Link href="/contact" style={{
                backgroundColor: "var(--carolina)",
                color: "#000",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                fontWeight: "bold",
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}>
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        marginTop: "4rem",
        textAlign: "center",
        borderTop: "1px solid var(--duke)",
        paddingTop: "3rem",
      }}>
        <h2 style={{ marginBottom: "1rem" }}>Not sure which service you need?</h2>
        <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
          Get a free consultation and we'll recommend the right starting point for your business.
        </p>
        <Link href="/contact" style={{
          border: "1px solid var(--carolina)",
          color: "var(--carolina)",
          padding: "0.85rem 2rem",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
        }}>
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
}