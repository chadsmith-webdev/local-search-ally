"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTAForm from "@/components/CTAForm";
import Starfield from "@/components/Starfield";

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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className='reveal'
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    label: "Most clients start here",
    title: "Local SEO",
    slug: "local-seo",
    tagline: "Rank where your customers are searching",
    desc: "Full-service local SEO covering everything your business needs to rank — citation building, review management, listing optimization, and on-page SEO. All battle-tested on my own projects before ever being offered as a service.",
    includes: [
      "- Google Business Profile optimization",
      "- Citation & listing cleanup",
      "- Review generation strategy",
      "- On-page SEO optimization",
      "- Monthly ranking reports",
    ],
    tags: ["GBP Optimization", "Citations", "On-Page SEO"],
    price: "Starting at $499/mo",
    highlight: true,
  },
  {
    label: "Standalone service",
    title: "Google Business Profile Optimization",
    slug: "gbp-optimization",
    tagline: "Get into the Map Pack",
    desc: "Your GBP listing is often the first thing a customer sees. I fully optimize your profile so you stand out from competitors and convert more profile views into calls.",
    includes: [
      "- Full profile audit & optimization",
      "- Category & attribute setup",
      "- Photo strategy",
      "- Q&A and post management",
    ],
    tags: ["Map Pack", "Visibility", "Conversions"],
    price: "Starting at $199",
    highlight: false,
  },
  {
    label: "Included with every package",
    title: "Web Design & Development",
    slug: "web-development",
    tagline: "Fast, modern websites built to convert",
    desc: "Mobile-first websites built with local SEO baked in from day one. I build with modern frameworks not WordPress page builders, because the performance difference matters for rankings.",
    includes: [
      "- Custom design & development",
      "- Mobile-first & fast loading",
      "- On-page SEO foundation",
      "- Contact forms & lead capture",
    ],
    tags: ["Mobile-First", "SEO-Built", "Lead Gen"],
    price: "Starting at $799",
    highlight: false,
  },
  {
    label: "Add-on or standalone",
    title: "Reputation Building",
    slug: "reputation-building",
    tagline: "Build trust that sells for you",
    desc: "I'll build out your review process — automated follow-up messages, response templates, and monthly tracking — so reviews come in consistently without you thinking about it.",
    includes: [
      "- Review generation systems",
      "- Response templates",
      "- GBP review management",
      "- Reputation monitoring",
    ],
    tags: ["Review Strategy", "GBP Reviews", "Monitoring"],
    price: "Starting at $99/mo",
    highlight: false,
  },
  {
    label: "Add-on or standalone",
    title: "Content & Keywords",
    slug: "content-keywords",
    tagline: "Get found for what customers actually search",
    desc: "Blog posts and service pages written to rank for searches like 'HVAC contractor Rogers AR' — the exact terms your customers type. No filler, no fluff. Built to show up in NWA.",
    includes: [
      "- Keyword research",
      "- Service page copywriting",
      "- Location page creation",
      "- Blog content strategy",
    ],
    tags: ["Keyword Research", "Blog Content", "Service Pages"],
    price: "Starting at $299/mo",
    highlight: false,
  },
  {
    label: "One-time investment",
    title: "SEO Audits",
    slug: "seo-audits",
    tagline: "Find out exactly why you're not ranking",
    desc: "A detailed audit of your website and local presence covering technical SEO, content gaps, citation issues, and competitor analysis. You get a clear, actionable report — no fluff.",
    includes: [
      "- Technical SEO analysis",
      "- Local citation audit",
      "- Competitor gap analysis",
      "- Prioritized action plan",
    ],
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
          transform: translateY(30px);
          filter: blur(4px);
          transition: opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); filter: blur(0); }
        .btn-primary {
          background: linear-gradient(135deg, #7bafd4, #012169);
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s, box-shadow 0.25s;
          font-family: var(--font-body);
          font-size: 0.875rem;
          box-shadow: 0 0 8px rgba(123,175,212,0.15);
        }
        .btn-primary:hover { transform: scale(0.98); box-shadow: 0 0 24px rgba(123,175,212,0.3); }
        .btn-outline {
          border: 1px solid rgba(123,175,212,0.3);
          color: var(--carolina);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
          font-family: var(--font-body);
          font-size: 0.875rem;
        }
        .btn-outline:hover { background-color: rgba(123,175,212,0.08); border-color: var(--carolina); box-shadow: 0 0 12px rgba(123,175,212,0.1); }
        .accordion-item {
          border-bottom: 1px solid var(--border);
          transition: background-color 0.2s;
        }
        .accordion-item:first-child { border-top: 1px solid var(--border); }
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
        .accordion-trigger:hover .accordion-title { color: var(--carolina); text-shadow: 0 0 12px rgba(123,175,212,0.3); }
        .accordion-title {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 700;
          color: var(--text);
          transition: color 0.2s, text-shadow 0.2s;
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
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--carolina);
          font-size: 1.1rem;
          transition: transform 0.3s, border-color 0.2s, box-shadow 0.2s;
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
      <section
        className='hero-section'
        style={{
          padding: "12rem 8rem 10rem",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Starfield />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            radial-gradient(circle, rgba(123,175,212,0.06) 1px, transparent 1px)
          `,
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(1,33,105,0.5) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "700px", position: "relative" }}>
          <p className='eyebrow'>
            Services
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Everything a contractor needs to{" "}
            <span style={{ color: "var(--carolina)" }}>get found online.</span>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              maxWidth: "560px",
            }}
          >
            No bloated packages. No mystery pricing. Every service I offer is
            aimed at one thing: more calls from people ready to hire.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <Reveal>
          <div>
            {services.map((service, i) => (
              <div
                key={service.title}
                id={service.slug}
                className='accordion-item'
              >
                <button
                  className='accordion-trigger'
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div>
                    {service.highlight && (
                      <span
                        style={{
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
                        }}
                      >
                        Core Strength
                      </span>
                    )}
                    <p className='accordion-title'>{service.title}</p>
                    <p className='accordion-tagline'>{service.tagline}</p>
                  </div>
                  <div
                    className='accordion-icon'
                    style={{
                      borderColor:
                        open === i ? "var(--carolina)" : "var(--border)",
                      transform: open === i ? "rotate(45deg)" : "none",
                      boxShadow: open === i ? "0 0 10px rgba(123,175,212,0.3)" : "none",
                    }}
                  >
                    +
                  </div>
                </button>

                <div
                  className='accordion-content'
                  style={{
                    maxHeight: open === i ? "600px" : "0px",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <div className='accordion-body'>
                    {/* Left — description + tags */}
                    <div>
                      <p
                        style={{
                          color: "var(--muted)",
                          lineHeight: 1.9,
                          marginBottom: "1.25rem",
                          fontSize: "0.95rem",
                        }}
                      >
                        {service.desc}
                      </p>
                      <ul
                        style={{
                          paddingLeft: "1.25rem",
                          color: "var(--muted)",
                          lineHeight: 2,
                          fontSize: "0.875rem",
                          marginBottom: "1.25rem",
                        }}
                      >
                        {service.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: "rgba(1,33,105,0.4)",
                              border: "1px solid var(--border)",
                              color: "var(--muted)",
                              fontSize: "0.7rem",
                              padding: "0.2rem 0.65rem",
                              borderRadius: "100px",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — pricing + CTA */}
                    <div
                      style={{
                        backgroundColor: "rgba(13,17,23,0.7)",
                        border: "1px solid var(--border)",
                        borderLeft: "4px solid var(--carolina)",
                        borderRadius: "0 10px 10px 0",
                        padding: "1.5rem",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 4px 0 12px rgba(123,175,212,0.05)",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--muted)",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Pricing
                      </p>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "800",
                          color: "var(--text)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {service.price}
                      </p>
                      <p
                        style={{
                          color: "var(--muted)",
                          fontSize: "0.8rem",
                          lineHeight: 1.7,
                          marginBottom: "1.5rem",
                        }}
                      >
                        Custom quotes available based on your market,
                        competition, and goals.
                      </p>
                      <Link
                        href='/contact'
                        className='btn-primary'
                        style={{ display: "block", textAlign: "center" }}
                      >
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
      <section
        id='faq'
        style={{
          borderTop: "1px solid var(--border)",
          padding: "5rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Reveal style={{ marginBottom: "3rem" }}>
          <p className='eyebrow'>
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: "800",
              marginBottom: "1rem",
            }}
          >
            Everything you wanted to know but didn't want to ask.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.9,
              maxWidth: "560px",
            }}
          >
            Honest answers to the questions contractors ask most.
          </p>
        </Reveal>
        <Reveal>
          <FAQSection />
        </Reveal>
      </section>

      {/* Bottom CTA Form */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          padding: "6rem 2rem",
          textAlign: "center",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(1,33,105,0.3) 0%, transparent 70%)",
        }}
      >
        <Reveal>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
            }}
          >
            Free Consultation • No Pressure • No Pitch
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: "800",
              marginBottom: "1.25rem",
            }}
          >
            Not sure which service you need?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto 3rem",
              lineHeight: 1.9,
            }}
          >
            Tell me about your business and I'll recommend the right starting
            point — honestly, even if it's just one small thing to fix first.
          </p>
          <CTAForm action='https://formspree.io/f/mkoqvkzr' />
        </Reveal>
      </section>
    </>
  );
}
