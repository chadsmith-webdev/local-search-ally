"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

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

export default function About() {
  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2.5rem;
          border-left: 2px solid var(--border);
        }
        .timeline-item:last-child {
          border-left: 2px solid transparent;
          padding-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--carolina);
          box-shadow: 0 0 10px var(--carolina);
        }
        .value-card {
          border-left: 3px solid var(--carolina);
          border-radius: 4px 12px 12px 4px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .hero-section { padding: 4rem 1.5rem 3rem !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .photo-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .about-hero-title { font-size: clamp(2rem, 8vw, 2.75rem) !important; }
        }
      `}</style>

      {/* Hero */}
      <Hero
        eyebrow='The Strategy Behind the Visibility'
        title={
          <>
            A Strategic Approach to{" "}
            <span className='hero-title-accent' style={{ display: "block" }}>
              Local Market Dominance.
            </span>
          </>
        }
        subtitle="Local Search Ally was built to bridge the Gap between professional excellence and algorithmic invisibility. We transform high-performing NWA contractors into the pre-eminent local choice through precision-engineered search strategy."
      />

      {/* Photo + Intro */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}
      >
        <div
          className='photo-col'
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <Reveal>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src='/images/chad.avif'
                alt='Chad Smith — Local Search Ally'
                width={280}
                height={280}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div
              style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem" }}
            >
              {[
                {
                  label: (
                    <>
                      <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24' style={{ color: "var(--carolina)", marginRight: "0.25rem" }}>
                        <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                      </svg>{" "}
                      Focus
                    </>
                  ),
                  value: "NWA Market Strategy",
                },
                {
                  label: (
                    <>
                      <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24' style={{ color: "var(--carolina)", marginRight: "0.25rem" }}>
                        <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
                      </svg>{" "}
                      Methodology
                    </>
                  ),
                  value: "Algorithm Mapping",
                },
                {
                  label: (
                    <>
                      <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24' style={{ color: "var(--carolina)", marginRight: "0.25rem" }}>
                        <path d='M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z' />
                      </svg>{" "}
                      Partnership
                    </>
                  ),
                  value: "Consultative Only",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className='glass-card'
                  style={{
                    padding: "0.85rem 1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: "var(--text)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1.5rem",
              }}
            >
              The Methodology
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              I founded Local Search Ally to solve a single, critical problem: 
              the Invisibility Gap. In Northwest Arkansas, the best contractors 
              are often the hardest to find online—not because they lack 
              professionalism, but because they lack the technical signals 
              required by the local search algorithm.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              Our approach is built on precision, not mystery. We treat local 
              SEO as a map to be navigated, ensuring your business is the 
              primary destination for high-intent searchers. By focusing 
              exclusively on the home service sector, we maintain a deep 
              understanding of the conversion hurdles unique to your trade.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              This is a strategic partnership. While you focus on professional 
              excellence in the field, I focus on the technical integrity and 
              visibility of your brand in the local market.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <Link href='/grader' className='btn-glow' style={{ textDecoration: "none", padding: "0.9rem 2rem" }}>
                Check My Visibility
              </Link>
              <Link href='/contact' className='btn-outline-glow' style={{ textDecoration: "none", padding: "0.9rem 2rem" }}>
                Book a Strategy Session
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section
        style={{ borderTop: "1px solid var(--border)", padding: "5rem 2rem" }}
      >
        <div
          className='two-col'
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          <Reveal>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1.5rem",
              }}
            >
              My Journey
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "800",
                marginBottom: "2rem",
                lineHeight: 1.3,
              }}
            >
              Mapping excellence to the local market.
            </h2>
            {[
              {
                title: "Algorithm Deciphering",
                desc: "We move beyond the surface-level SEO tips and dive into the specific data points Google uses to rank local businesses in the Map Pack.",
              },
              {
                title: "Methodology Refinement",
                desc: "Developing a repeatable, precision-engineered system that identifies and closes technical gaps for home service tradesmen.",
              },
              {
                title: "Market Specificity",
                desc: "Applying deep knowledge of the NWA local market to ensure our search strategies resonate with the specific needs of local customers.",
              },
              {
                title: "Strategic Launch",
                desc: "Local Search Ally launched with a single focus: providing high-performing contractors with the strategic authority they deserve.",
              },
            ].map((item) => (
              <div key={item.title} className='timeline-item'>
                <div className='timeline-dot' />
                <h4
                  style={{
                    color: "var(--text)",
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </Reveal>

          {/* Values */}
          <Reveal delay={200}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1.5rem",
              }}
            >
              How I Work
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "800",
                marginBottom: "2rem",
                lineHeight: 1.3,
              }}
            >
              Values that guide every engagement.
            </h2>
            {[
              {
                title: "Precision over Volume",
                desc: "We don't offer generic packages. Every diagnostic and roadmap is engineered for the unique position of your business.",
              },
              {
                title: "Strategic Integrity",
                desc: "A commitment to transparent analysis. If a strategy won't move the needle for your trade, we won't recommend it.",
              },
              {
                title: "Algorithm Alignment",
                desc: "Our methods stay synchronized with local search updates, ensuring your business asset remains productive and visible.",
              },
              {
                title: "No-Pressure Consultations",
                desc: "Value is provided before engagement. Our diagnostic is free because we believe the strategy should speak for itself.",
              },
            ].map((item) => (
              <div key={item.title} className='glass-card value-card'>
                <p
                  style={{
                    color: "var(--text)",
                    fontWeight: "600",
                    margin: "0 0 0.25rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    margin: 0,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          padding: "5rem 2rem",
          textAlign: "center",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(1,33,105,0.3) 0%, transparent 70%)",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: "800",
              marginBottom: "1.25rem",
            }}
          >
            Ready to work with someone who's honest about what they can do?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.9,
            }}
          >
            Let's have a real conversation about your business — no pitch, no
            pressure.
          </p>
          <Link
            href='/grader'
            className='btn-glow'
            style={{ textDecoration: "none", padding: "1rem 2.5rem", display: "inline-block" }}
          >
            Check My Visibility
          </Link>
        </Reveal>
      </section>
    </>
  );
}
