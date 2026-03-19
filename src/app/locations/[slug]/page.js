import Link from "next/link";
import { locations, getLocation } from "@/lib/locations";

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);
  return {
    title: `Local SEO & Web Development in ${location.city}, AR | Local Search Ally`,
    description: `Local SEO and web development services for contractors in ${location.city}, Arkansas. Get found on Google, get more calls, and win more jobs. Based in NWA.`,
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);

  return (
    <>
      <style>{`
        .loc-card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 2rem;
          transition: border-color 0.3s, transform 0.3s;
        }
        .loc-card:hover { border-color: var(--carolina); transform: translateY(-4px); }
        .btn-primary {
          background-color: var(--carolina);
          color: #000;
          padding: 0.9rem 2rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.85; }
        .btn-outline {
          border: 1px solid var(--carolina);
          color: var(--carolina);
          padding: 0.9rem 2rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s;
        }
        .btn-outline:hover { background-color: rgba(123,175,212,0.1); }
        @media (max-width: 768px) {
          .hero-section { padding: 5rem 1.5rem 4rem !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero-section" style={{
        padding: "12rem 8rem 10rem",
        borderBottom: "1px solid var(--duke)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(123,175,212,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123,175,212,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,33,105,0.5) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "700px", position: "relative" }}>
          <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
            Serving {location.region}
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Local SEO & Web Development for{" "}
            <span style={{ color: "var(--carolina)" }}>{location.city} Contractors</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px", marginBottom: "2.5rem" }}>
            {location.desc} If your business isn't showing up on Google, you're losing jobs to competitors every single day.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Free {location.city} Audit</Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>
          What We Do in {location.city}
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "3rem", maxWidth: "600px", lineHeight: 1.3 }}>
          Two services. One goal — more calls from {location.city} customers.
        </h2>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
          {[
            {
              label: "Core Strength",
              title: `Local SEO in ${location.city}`,
              desc: `Get your contracting business ranking in ${location.city}'s Google Maps and local search results. We handle everything — GBP optimization, citation building, review strategy, and on-page SEO — so your phone starts ringing with local jobs.`,
              includes: ["- Google Business Profile optimization", "- Local citation building", "- Review generation strategy", "- On-page SEO", "- Monthly ranking reports"],
              highlight: true,
            },
            {
              label: "Growing Daily",
              title: `Contractor Websites in ${location.city}`,
              desc: `A fast, mobile-first website built to convert ${location.city} visitors into calls. Built with modern frameworks — not WordPress page builders — and SEO-optimized from day one so Google can find it.`,
              includes: ["- Custom design & development", "- Mobile-first & fast loading", "- On-page SEO foundation", "- Contact forms & lead capture"],
              highlight: false,
            },
          ].map((service) => (
            <div key={service.title} className="loc-card" style={{
              borderTop: service.highlight ? "3px solid var(--carolina)" : "1px solid var(--duke)",
            }}>
              <p style={{
                color: service.highlight ? "var(--carolina)" : "var(--muted)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: "bold",
                marginBottom: "0.75rem",
              }}>
                {service.label}
              </p>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{service.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.25rem" }}>{service.desc}</p>
              <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)", lineHeight: 2, fontSize: "0.875rem" }}>
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/contact" className="btn-primary">
            Get a Free {location.city} Consultation
          </Link>
        </div>
      </section>

      {/* Why Local Matters */}
      <section style={{ borderTop: "1px solid var(--duke)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>
            Why Local SEO Matters in {location.city}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "3rem", maxWidth: "600px", lineHeight: 1.3 }}>
            {location.city} has {location.population}+ residents searching for contractors right now.
          </h2>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { stat: "46%", label: "of Google searches have local intent", desc: "Nearly half of all searches are looking for something nearby — including contractors." },
              { stat: "88%", label: "of local searches call within 24 hours", desc: "People searching locally are ready to hire — if you show up." },
              { stat: "3x", label: "more leads from Map Pack visibility", desc: "Businesses in the top 3 Google Maps results get the vast majority of clicks." },
            ].map((item) => (
              <div key={item.stat} style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--duke)",
                borderLeft: "4px solid var(--carolina)",
                borderRadius: "0 8px 8px 0",
                padding: "1.5rem",
              }}>
                <p style={{ fontSize: "2rem", fontWeight: "800", color: "var(--carolina)", marginBottom: "0.5rem" }}>{item.stat}</p>
                <p style={{ color: "var(--text)", fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.5rem" }}>{item.label}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
<section style={{ borderTop: "1px solid var(--duke)", padding: "4rem 2rem" }}>
  <style>{`
    .nearby-link {
      background-color: var(--surface);
      border: 1px solid var(--duke);
      color: var(--muted);
      padding: 0.5rem 1.25rem;
      border-radius: 100px;
      text-decoration: none;
      font-size: 0.875rem;
      transition: border-color 0.2s, color 0.2s;
      display: inline-block;
    }
    .nearby-link:hover {
      border-color: var(--carolina);
      color: var(--carolina);
    }
  `}</style>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
      Also serving contractors near {location.city}:
    </p>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {location.nearby.map((city) => {
        const nearbyLocation = locations.find((l) => l.city === city);
        return nearbyLocation ? (
          <Link
            key={city}
            href={`/locations/${nearbyLocation.slug}`}
            className="nearby-link"
          >
            {city}, AR →
          </Link>
        ) : null;
      })}
    </div>
  </div>
</section>

      {/* CTA */}
      <section style={{
        borderTop: "1px solid var(--duke)",
        padding: "6rem 2rem",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 100%, rgba(1,33,105,0.3) 0%, transparent 70%)",
      }}>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "800", marginBottom: "1.25rem" }}>
          Ready to get found in {location.city}?
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.9 }}>
          Book a free consultation and I'll show you exactly where your business stands in {location.city}'s local search results.
        </p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
          Book a Free {location.city} Audit
        </Link>
      </section>
    </>
  );
}