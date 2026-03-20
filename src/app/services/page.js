"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTAForm from "@/components/CTAForm";

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
    label: "Most clients start here",
    title: "Local SEO",
    tagline: "Rank where your customers are searching",
    desc: "Full-service local SEO covering everything your business needs to rank — citation building, review management, listing optimization, and on-page SEO. All battle-tested on my own projects before ever being offered as a service.",
    includes: ["- Google Business Profile optimization", "- Citation & listing cleanup", "- Review generation strategy", "- On-page SEO optimization", "- Monthly ranking reports"],
    tags: ["GBP Optimization", "Citations", "On-Page SEO"],
    price: "Starting at $499/mo",
    highlight: true,
  },
  {
    label: "Standalone service",
    title: "Google Business Profile Optimization",
    tagline: "Get into the Map Pack",
    desc: "Your GBP listing is often the first thing a customer sees. I fully optimize your profile so you stand out from competitors and convert more profile views into calls.",
    includes: ["- Full profile audit & optimization", "- Category & attribute setup", "- Photo strategy", "- Q&A and post management"],
    tags: ["Map Pack", "Visibility", "Conversions"],
    price: "Starting at $199",
    highlight: false,
  },
  {
    label: "Included with every package",
    title: "Web Design & Development",
    tagline: "Fast, modern websites built to convert",
    desc: "Mobile-first websites built with local SEO baked in from day one. I build with modern frameworks not WordPress page builders, because the performance difference matters for rankings.",
    includes: ["- Custom design & development", "- Mobile-first & fast loading", "- On-page SEO foundation", "- Contact forms & lead capture"],
    tags: ["Mobile-First", "SEO-Built", "Lead Gen"],
    price: "Starting at $799",
    highlight: false,
  },
  {
    label: "Add-on or standalone",
    title: "Reputation Building",
    tagline: "Build trust that sells for you",
    desc: "I'll help you get more reviews, respond to them the right way, and build an online reputation that does some of the selling before a customer even calls.",
    includes: ["- Review generation systems", "- Response templates", "- GBP review management", "- Reputation monitoring"],
    tags: ["Review Strategy", "GBP Reviews", "Monitoring"],
    price: "Starting at $99/mo",
    highlight: false,
  },
  {
    label: "Add-on or standalone",
    title: "Content & Keywords",
    tagline: "Get found for what customers actually search",
    desc: "Content written around the exact searches your customers make - not generic SEO filler. Blog posts, services pages, and location pages built to rank in NWA.",
    includes: ["- Keyword research", "- Service page copywriting", "- Location page creation", "- Blog content strategy"],
    tags: ["Keyword Research", "Blog Content", "Service Pages"],
    price: "Starting at $299/mo",
    highlight: false,
  },
  {
    label: "One-time investment",
    title: "SEO Audits",
    tagline: "Find out exactly why you're not ranking",
    desc: "A detailed audit of your website and local presence covering technical SEO, content gaps, citation issues, and competitor analysis. You get a clear, actionable report — no fluff.",
    includes: ["- Technical SEO analysis", "- Local citation audit", "- Competitor gap analysis", "- Prioritized action plan"],
    tags: ["Technical SEO", "Competitor Analysis", "Action Plan"],
    price: "Starting at $299",
    highlight: false,
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .btn-primary {
          background-color: var(--carolina);
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s;
          font-family: var(--font-body, sans-serif);
          font-size: 0.875rem;
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
          font-family: var(--font-body, sans-serif);
          font-size: 0.875rem;
        }
        .btn-outline:hover { background-color: rgba(123,175,212,0.1); }
        .accordion-item {
          border-bottom: 1px solid var(--duke);
          transition: background-color 0.2s;
        }
        .accordion-item:first-child { border-top: 1px solid var(--duke); }
        .accordion-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1.75rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }
        .accordion-trigger:hover .accordion-title { color: var(--carolina); }
        .accordion-title {
          font-family: var(--font-display, serif);
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 700;
          color: var(--text);
          transition: color 0.2s;
          margin: 0;
        }
        .accordion-tagline {
          color: var(--muted);
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        .accordion-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--duke);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--carolina);
          font-size: 1.1rem;
          transition: transform 0.3s, border-color 0.2s;
        }
        .accordion-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        .accordion-body {
          padding-bottom: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        .form-row { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hero-section { padding: 5rem 1.5rem 4rem !important; }
          .accordion-body { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
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
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px" }}>
            No bloated packages. No mystery pricing. Every service I offer is aimed at one thing: more calls from people ready to hire.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <Reveal>
          <div>
            {services.map((service, i) => (
              <div key={service.title} className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div>
                    {service.highlight && (
                      <span style={{
                        backgroundColor: "rgba(123,175,212,0.15)",
                        border: "1px solid var(--carolina)",
                        color: "var(--carolina)",
                        fontSize: "0.65rem",
                        fontWeight: "bold",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        display: "inline-block",
                        marginBottom: "0.5rem",
                      }}>
                        Core Strength
                      </span>
                    )}
                    <p className="accordion-title">{service.title}</p>
                    <p className="accordion-tagline">{service.tagline}</p>
                  </div>
                  <div className="accordion-icon" style={{
                    borderColor: open === i ? "var(--carolina)" : "var(--duke)",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}>
                    +
                  </div>
                </button>

                <div className="accordion-content" style={{
                  maxHeight: open === i ? "600px" : "0px",
                  opacity: open === i ? 1 : 0,
                }}>
                  <div className="accordion-body">
                    {/* Left — description + tags */}
                    <div>
                      <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                        {service.desc}
                      </p>
                      <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)", lineHeight: 2, fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                        {service.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {service.tags.map((tag) => (
                          <span key={tag} style={{
                            backgroundColor: "rgba(1,33,105,0.4)",
                            border: "1px solid var(--duke)",
                            color: "var(--muted)",
                            fontSize: "0.7rem",
                            padding: "0.2rem 0.65rem",
                            borderRadius: "100px",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — pricing + CTA */}
                    <div style={{
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--duke)",
                      borderLeft: "4px solid var(--carolina)",
                      borderRadius: "0 8px 8px 0",
                      padding: "1.5rem",
                    }}>
                      <p style={{ color: "var(--muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                        Pricing
                      </p>
                      <p style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text)", marginBottom: "0.5rem" }}>
                        {service.price}
                      </p>
                      <p style={{ color: "var(--muted)", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        Custom quotes available based on your market, competition, and goals.
      </p>
                      <Link href="/contact" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
<section id="faq" style={{ borderTop: "1px solid var(--duke)", padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
  <Reveal style={{ marginBottom: "3rem" }}>
    <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>
      FAQ
    </p>
    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "1rem" }}>
      Everything you wanted to know but didn't want to ask.
    </h2>
    <p style={{ color: "var(--muted)", lineHeight: 1.9, maxWidth: "560px" }}>
      Honest answers to the questions contractors ask most.
    </p>
  </Reveal>
  <Reveal>
    <FAQSection />
  </Reveal>
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
          <CTAForm
            action="https://formspree.io/f/mkoqvkzr" />
        </Reveal>
      </section>
    </>
  );
}