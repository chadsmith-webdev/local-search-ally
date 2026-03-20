"use client";
import { useEffect, useRef } from "react";
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
    value: "Book a free 30-min consultation",
    href: "https://calendly.com/smithchadlamont/30min",
    desc: "Pick a time that works for you. I'll look at your current online presence before we talk.",
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .contact-card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 1.5rem;
          text-decoration: none;
          display: block;
          transition: border-color 0.3s, transform 0.3s;
        }
        .contact-card:hover {
          border-color: var(--carolina);
          transform: translateY(-3px);
        }
        input::placeholder, textarea::placeholder {
          color: #555;
        }
          @media (max-width: 768px) {
  .hero-section { padding: 5rem 1.5rem 4rem !important; }
  .contact-grid { grid-template-columns: 1fr !important; }
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
            Let's Talk
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            No pitch. No pressure. <span style={{ color: "var(--carolina)" }}>Just an honest conversation.</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px" }}>
            Tell me about your business and where you're stuck. I'll look at your online presence and give you my honest take — even if that means I'm not the right fit.
          </p>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.75fr", gap: "4rem", alignItems: "start" }}>

          {/* Left — contact methods */}
          <div>
            <Reveal>
              <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
                Reach Out Directly
              </p>
            </Reveal>
            <div style={{ display: "grid", gap: "1rem" }}>
  {contactMethods.map((method, i) => (
    <Reveal key={method.label} delay={i * 100}>
      <div>
        <a
        href={method.href}
        className="contact-card"
        {...(method.external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <p style={{ color: "var(--carolina)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", marginBottom: "0.4rem" }}>
          {method.label}
        </p>
        <p style={{ color: "var(--text)", fontWeight: "600", marginBottom: "0.4rem", fontSize: "0.95rem" }}>
          {method.value}
        </p>
        <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.85rem", lineHeight: 1.7 }}>
          {method.desc}
        </p>
      </a>
      </div>
    </Reveal>
  ))}
</div>

    {/* Business Hours */}
    <Reveal delay={250}>
      <div style={{
      backgroundColor: "var(--surface)",
      border: "1px solid var(--duke)",
      borderRadius: "10px",
      padding: "1.5rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    }}>
        <p style={{ color: "var(--carolina)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", marginBottom: "1rem" }}>
      Business Hours
        </p>
    {[
      { days: "Monday — Friday", hours: "8:00am – 6:00pm" },
      { days: "Saturday", hours: "9:00am – 12:00pm" },
      { days: "Sunday", hours: "2:00pm – 6:00pm" },
    ].map((item) => (
      <div key={item.days} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "0.6rem",
        marginBottom: "0.6rem",
        borderBottom: "1px solid var(--duke)",
      }}>
        <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>{item.days}</span>
        <span style={{ color: "var(--text)", fontSize: "0.875rem", fontWeight: "600" }}>{item.hours}</span>
      </div>
    ))}
    <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.5rem", fontStyle: "italic" }}>
      All times Central Time (CT)
    </p>
  </div>
</Reveal>

            <Reveal delay={300}>
              <div style={{
                marginTop: "2rem",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--duke)",
                borderLeft: "3px solid var(--carolina)",
                borderRadius: "0 8px 8px 0",
                padding: "1.25rem",
              }}>
                <p style={{ color: "var(--text)", fontWeight: "600", margin: "0 0 0.25rem", fontSize: "0.9rem" }}>
                  Free Consultation
                </p>
                <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.85rem", lineHeight: 1.7 }}>
                  Every client starts with a free conversation. I'll look at your online presence before we talk and tell you exactly what I see (no filter).
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={150}>
            <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              Send a Message
            </p>
            <CTAForm action="https://formspree.io/f/mkoqvkzr" />
          </Reveal>
        </div>
      </section>

      {/* Map */}
<section style={{ borderTop: "1px solid var(--duke)" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 0" }}>
    <Reveal>
      <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
        Where We're Based
      </p>
      <h2 style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: "800", marginBottom: "0.75rem" }}>
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