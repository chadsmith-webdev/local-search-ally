"use client";
import { useEffect, useRef } from "react";
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
    <div ref={ref} className="contact-reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

const contactMethods = [
  {
    label: "Email",
    value: "contact@localsearchally.com",
    href: "mailto:contact@localsearchally.com",
    desc: "I respond to every email personally, usually within one business day.",
  },
  {
    label: "Phone",
    value: "(479) 380-8626",
    href: "tel:+14793808626",
    desc: "Prefer to talk? Give me a call during business hours.",
  },
  {
    label: "Schedule a Call",
    value: "Book a 30-min strategy session",
    href: "https://calendly.com/smithchadlamont/30min",
    desc: "Pick a time that works for you. I'll review your current online presence before we talk.",
    external: true,
  },
];

export default function ContactClient() {
  return (
    <>
      <style>{`
        .contact-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .contact-reveal.revealed { opacity: 1; transform: translateY(0); }
        .contact-methods { display: grid; gap: 1.25rem; }
        .card-link {
          display: block;
          text-decoration: none;
          padding: 1.5rem;
        }
        .contact-method-label {
          color: var(--carolina);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-weight: 700;
          margin-bottom: 0.4rem;
          font-family: var(--font-mono);
        }
        .contact-method-val {
          color: var(--text);
          font-family: var(--font-display);
          font-weight: 700;
          margin-bottom: 0.4rem;
          font-size: 1.05rem;
        }
        .contact-method-desc {
          color: var(--muted);
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        /* Business Hours box */
        .hours-box {
          background: color-mix(in oklab, var(--surface) 90%, white 10%);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 1.25rem;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.6rem;
          margin-bottom: 0.6rem;
          border-bottom: 1px solid rgba(123, 175, 212, 0.08);
        }
        .hours-row:last-of-type { border-bottom: 0; padding-bottom: 0; margin-bottom: 0; }
        .hours-day { color: var(--muted); font-size: 0.88rem; }
        .hours-time { color: var(--text); font-size: 0.88rem; font-weight: 600; }
        .hours-note { color: var(--muted); font-size: 0.8rem; margin-top: 0.75rem; font-style: italic; text-align: right; }
        /* Strategy context box */
        .strategy-context {
          margin-top: 2rem;
          background: linear-gradient(135deg, rgba(123,175,212,0.06), rgba(1,33,105,0.1));
          border: 1px solid var(--border-hover);
          border-left: 4px solid var(--carolina);
          border-radius: 4px 12px 12px 4px;
          padding: 1.5rem;
        }
        .strategy-context-title {
          color: var(--text);
          font-family: var(--font-display);
          font-weight: 700;
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }
        .strategy-context-desc {
          color: var(--muted);
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        
        .contact-hero {
          padding: 10rem 1.5rem 8rem;
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .contact-hero-inner {
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .contact-hero-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 5.5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 auto 1.25rem;
          letter-spacing: -0.02em;
        }
        .contact-hero-copy {
          color: var(--muted);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 580px;
          margin: 0 auto;
        }
        .contact-grid-wrap {
          padding: 5rem 1.5rem;
        }
        .contact-grid {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 3.5rem;
          align-items: start;
        }
        
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            max-width: 600px;
          }
        }
        @media (max-width: 640px) {
          .contact-hero {
            padding: 7rem 1.1rem 4rem;
          }
          .contact-hero-title {
            font-size: clamp(2rem, 8vw, 2.75rem);
          }
          .contact-hero-copy {
            font-size: 0.95rem;
          }
          .contact-grid-wrap {
            padding: 3rem 1.1rem;
          }
          .contact-grid { gap: 3rem; }
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero">
        <Starfield />
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(123,175,212,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
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
        <Reveal style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: "0.85rem", justifyContent: "center" }}>
            Free Strategy Call
          </p>
          <h1 className="contact-hero-title">
            No pitch. No pressure. <span style={{ color: "var(--carolina)", display: "inline-block" }}>Just an honest conversation.</span>
          </h1>
          <p className="contact-hero-copy">
            Tell me about your business and what's not working. I'll look at your online presence and give you a clear read on where you stand—even if the answer is "you don't need me."
          </p>
        </Reveal>
      </section>

      {/* Contact Methods + Form */}
      <section className="contact-grid-wrap">
        <div className="contact-grid">

          {/* Left — Contact Methods */}
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
                Reach Out Directly
              </p>
            </Reveal>
            <div className="contact-methods">
              {contactMethods.map((method, i) => (
                <Reveal key={method.label} delay={i * 80}>
                  <a
                    href={method.href}
                    className="glass-card card-link"
                    {...(method.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <p className="contact-method-label">{method.label}</p>
                    <p className="contact-method-val">{method.value}</p>
                    <p className="contact-method-desc">{method.desc}</p>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Business Hours */}
            <Reveal delay={250}>
              <div className="hours-box">
                <p className="contact-method-label" style={{ marginBottom: "1rem" }}>Business Hours</p>
                {[
                  { days: "Monday — Friday", hours: "8:00am – 6:00pm" },
                  { days: "Saturday", hours: "9:00am – 12:00pm" },
                  { days: "Sunday", hours: "2:00pm – 6:00pm" },
                ].map((item) => (
                  <div className="hours-row" key={item.days}>
                    <span className="hours-day">{item.days}</span>
                    <span className="hours-time">{item.hours}</span>
                  </div>
                ))}
                <p className="hours-note">All times Central Time (CT)</p>
              </div>
            </Reveal>

            {/* Strategy Call Framing */}
            <Reveal delay={300}>
              <div className="strategy-context">
                <p className="strategy-context-title">The Strategy Session</p>
                <p className="strategy-context-desc">
                  Every client starts with a free conversation. No agency runaround. You'll leave with a shortlist of fixes most likely to move the needle first.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — Form */}
          <Reveal delay={120}>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Send a Message
            </p>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <CTAForm action="https://formspree.io/f/mkoqvkzr" />
            </div>
          </Reveal>

        </div>
      </section>

      {/* Map */}
      <section style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4.5rem 2rem 0" }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: "0.85rem" }}>
              Where We're Based
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", marginBottom: "0.75rem", fontFamily: "var(--font-display)" }}>
              Siloam Springs, Arkansas
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "560px" }}>
              Based in the heart of NWA — serving contractors across Siloam Springs, Bentonville, Rogers, Springdale, Fayetteville, and the surrounding area.
            </p>
          </Reveal>
        </div>
        <div style={{ position: "relative", width: "100%", height: "400px", filter: "grayscale(30%) contrast(1.1)" }}>
          <iframe
            title="Local Search Ally — Siloam Springs, AR"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52244.27!2d-94.5407!3d36.1881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c94b3a3a3a3a3b%3A0x0!2sSiloam%20Springs%2C%20AR!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            boxShadow: "inset 0 0 60px rgba(1,33,105,0.15)",
          }} />
        </div>
      </section>
    </>
  );
}
