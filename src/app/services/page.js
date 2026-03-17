"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

const services = [
  {
    label: "Core Strength",
    title: "Local SEO",
    tagline: "Dominate your local market",
    desc: "This is where my deepest experience lives. Full-service local SEO covering citation building, review management, listing optimization, and on-page SEO — all battle-tested on my own projects first.",
    includes: ["Google Business Profile optimization", "Citation & listing cleanup", "Review generation strategy", "On-page SEO optimization", "Monthly ranking reports"],
    tags: ["GBP Optimization", "Citations", "On-Page SEO"],
    price: "Starting at $499/mo",
    highlight: true,
  },
  {
    label: "High Impact",
    title: "Google Business Profile Optimization",
    tagline: "Own the Map Pack",
    desc: "Your GBP listing is often the first thing a customer sees. I fully optimize your profile so you stand out from competitors and convert more profile views into calls.",
    includes: ["Full profile audit & optimization", "Category & attribute setup", "Photo strategy", "Q&A and post management"],
    tags: ["Map Pack", "Visibility", "Conversions"],
    price: "Starting at $199",
    highlight: false,
  },
  {
    label: "Growing Daily",
    title: "Web Design & Development",
    tagline: "Fast, modern websites built to convert",
    desc: "I'm actively building my web development skills to offer fast, mobile-first websites that convert. Every site I build is SEO-optimized from the ground up — because that's what I know best.",
    includes: ["Custom design & development", "Mobile-first & fast loading", "On-page SEO foundation", "Contact forms & lead capture"],
    tags: ["Mobile-First", "SEO-Built", "Lead Gen"],
    price: "Starting at $1,500",
    highlight: false,
  },
  {
    label: "Reputation",
    title: "Reputation Building",
    tagline: "Build trust that sells for you",
    desc: "I'll help you set up systems to get more reviews, respond professionally, and build the kind of online reputation that makes customers choose you before they even call.",
    includes: ["Review generation systems", "Response templates", "GBP review management", "Reputation monitoring"],
    tags: ["Review Strategy", "GBP Reviews", "Monitoring"],
    price: "Starting at $149/mo",
    highlight: false,
  },
  {
    label: "Content",
    title: "Content & Keywords",
    tagline: "Get found for what customers actually search",
    desc: "Strategic content that targets the searches your customers are actually making. Blog posts, service pages, and location pages that drive real local traffic.",
    includes: ["Keyword research", "Service page copywriting", "Location page creation", "Blog content strategy"],
    tags: ["Keyword Research", "Blog Content", "Service Pages"],
    price: "Starting at $299/mo",
    highlight: false,
  },
  {
    label: "Clarity",
    title: "SEO Audits",
    tagline: "Find out exactly why you're not ranking",
    desc: "A detailed audit of your website and local presence covering technical SEO, content gaps, citation issues, and competitor analysis. You get a clear, actionable report — no fluff.",
    includes: ["Technical SEO analysis", "Local citation audit", "Competitor gap analysis", "Prioritized action plan"],
    tags: ["Technical SEO", "Competitor Analysis", "Action Plan"],
    price: "Starting at $299",
    highlight: false,
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .service-card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, transform 0.3s;
        }
        .service-card:hover { border-color: var(--carolina); transform: translateY(-4px); }
        .btn-primary {
          background-color: var(--carolina);
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s;
          text-align: center;
          font-family: var(--font-satoshi);
        }
        .btn-primary:hover { opacity: 0.85; }
        .btn-outline {
          border: 1px solid var(--carolina);
          color: var(--carolina);
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s;
          text-align: center;
          font-family: var(--font-satoshi);
        }
        .btn-outline:hover { background-color: rgba(123,175,212,0.1); }
        @media (max-width: 768px) {
  .hero-section { padding: 5rem 1.5rem 4rem !important; }
  .three-col { grid-template-columns: 1fr !important; }
  .form-row { grid-template-columns: 1fr !important; }
  .card-footer { flex-direction: column !important; align-items: flex-start !important; }
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
            Services
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Everything a contractor needs to{" "}
            <span style={{ color: "var(--carolina)" }}>get found online.</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "560px" }}>
            No bloated agency packages. No mystery pricing. Just focused services built around one goal — more calls, more jobs.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            <Link href="/contact" className="btn-outline">Request an Audit</Link>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="service-card" style={{
                borderTop: service.highlight ? "3px solid var(--carolina)" : "1px solid var(--duke)",
              }}>
                <div style={{ flex: 1 }}>
                  <p style={{
                    color: service.highlight ? "var(--carolina)" : "var(--muted)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}>
                    {service.label}
                  </p>
                  <h2 style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>{service.title}</h2>
                  <p style={{ color: "var(--carolina)", fontSize: "0.85rem", marginBottom: "1rem", fontStyle: "italic" }}>{service.tagline}</p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.25rem" }}>{service.desc}</p>
                  <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)", lineHeight: 2, fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {service.tags.map((tag) => (
                      <span key={tag} style={{
                        backgroundColor: "rgba(1,33,105,0.4)",
                        border: "1px solid var(--duke)",
                        color: "var(--muted)",
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "100px",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid var(--duke)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <p style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text)", margin: 0 }}>{service.price}</p>
                  <Link href="/contact" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.65rem 1.25rem" }}>
                    Get a Quote
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA Form */}
      <section style={{
        borderTop: "1px solid var(--duke)",
        padding: "6rem 2rem",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 100%, rgba(1,33,105,0.3) 0%, transparent 70%)",
      }}>
        <Reveal>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
            Free Consultation • No Pressure • No Pitch
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "800", marginBottom: "1.25rem" }}>
            Not sure which service you need?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 3rem", lineHeight: 1.9 }}>
            Tell me about your business and I'll recommend the right starting point — honestly, even if it's just one small thing to fix first.
          </p>
          <form
            action="https://formspree.io/f/mkoqvkzr"
            method="POST"
            style={{ maxWidth: "560px", margin: "0 auto", display: "grid", gap: "1rem" }}
          >
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { name: "name", placeholder: "Your Name", type: "text" },
                { name: "business", placeholder: "Business Name", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--duke)",
                    borderRadius: "6px",
                    padding: "0.85rem 1rem",
                    color: "var(--text)",
                    fontSize: "0.95rem",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-satoshi)",
                  }}
                />
              ))}
            </div>
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { name: "phone", placeholder: "Phone Number", type: "tel" },
                { name: "email", placeholder: "Email Address", type: "email" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--duke)",
                    borderRadius: "6px",
                    padding: "0.85rem 1rem",
                    color: "var(--text)",
                    fontSize: "0.95rem",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-satoshi)",
                  }}
                />
              ))}
            </div>
            <textarea
              name="message"
              placeholder="Which service are you interested in, or what's your biggest challenge?"
              rows={4}
              required
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--duke)",
                borderRadius: "6px",
                padding: "0.85rem 1rem",
                color: "var(--text)",
                fontSize: "0.95rem",
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
                fontFamily: "var(--font-satoshi)",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "var(--carolina)",
                color: "#000",
                padding: "1rem",
                borderRadius: "6px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                fontFamily: "var(--font-satoshi)",
                transition: "opacity 0.2s",
              }}
            >
              Get a Free Consultation
            </button>
            <p style={{ color: "var(--muted)", fontSize: "0.8rem", margin: 0 }}>
              No spam. No sales pitch. Just an honest conversation about your business.
            </p>
          </form>
        </Reveal>
      </section>
    </>
  );
}