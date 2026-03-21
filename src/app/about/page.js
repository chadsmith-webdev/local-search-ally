"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
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

export default function About() {
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
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2.5rem;
          border-left: 2px solid var(--duke);
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
        }
        .value-card {
          border-left: 3px solid var(--carolina);
          background-color: var(--surface);
          border-radius: 0 8px 8px 0;
          padding: 1.5rem;
          margin-bottom: 1rem;
          transition: transform 0.3s;
        }
        .value-card:hover { transform: translateX(4px); }
        @media (max-width: 768px) {
  .hero-section { padding: 5rem 1.5rem 4rem !important; }
  .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
  .photo-col { grid-template-columns: 1fr !important; }
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
            The Person Behind the Work
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Hey, I'm Chad.{" "}
            <span style={{ color: "var(--carolina)" }}>Let me be straight with you.</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px" }}>
            I'm not a big agency. I'm a startup founder in Siloam Springs, AR who's obsessed with local SEO — and I've been proving it works on my own projects for years before ever offering it to anyone else.
          </p>
        </div>
      </section>

      {/* Photo + Intro */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="photo-col" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "4rem", alignItems: "start" }}>
          <Reveal>
            <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid var(--duke)" }}>
              <Image
                src="/images/chad.avif"
                alt="Chad Smith — Local Search Ally"
                width={280}
                height={280}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem" }}>
              {[
                { label: "📍 Location", value: "Siloam Springs, AR" },
                { label: "🎓 Currently", value: "Building full-stack skills" },
                { label: "💼 Focus", value: "NWA Contractors" },
              ].map((item) => (
                <div key={item.label} style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--duke)",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{item.label}</span>
                  <span style={{ color: "var(--text)", fontSize: "0.8rem", fontWeight: "600" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              My Story
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              I grew up in North Carolina — where local businesses are the backbone of every community. These days I'm based in Siloam Springs, Arkansas, a small town that feels a lot like home: cow pastures, tight-knit neighborhoods, and local contractors who work hard and deserve to be found online.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              My local SEO experience didn't start in an agency — it started on my own projects. I spent years learning what actually works in local search: ranking my own sites, optimizing profiles, studying what Google actually responds to. No theory. Just hands-on work. That's what I bring to every client.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              I'm learning web development because I believe good local SEO deserves a good website. Contractors shouldn't have to hire two people and hope they talk to each other. I'm building the skills to handle both.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Work With Me</Link>
              <Link href="/services" className="btn-outline">See My Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section style={{ borderTop: "1px solid var(--duke)", padding: "5rem 2rem" }}>
        <div className="two-col" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <Reveal>
            <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              My Journey
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", marginBottom: "2rem", lineHeight: 1.3 }}>
              Building expertise one project at a time.
            </h2>
            {[
              { title: "Learned Local SEO Hands-On", desc: "Ranked my own projects in local search. Studied Google's algorithms, GBP optimization, and citation building obsessively — years before offering it as a service." },
              { title: "Proved It Works", desc: "Got real rankings on real projects before pitching any of it to anyone else. The methods I use on your business are the same ones I used on mine first." },
              { title: "Started Learning Web Dev", desc: "Realized contractors need more than just SEO — they need fast, converting websites. Enrolled in a Web Development degree to build that skill set the right way." },
              { title: "Launched Local Search Ally", desc: "Moved to Siloam Springs and started helping NWA contractors get the online presence they deserve. This is just the beginning." },
            ].map((item) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-dot" />
                <h4 style={{ color: "var(--text)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{item.title}</h4>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </Reveal>

          {/* Values */}
          <Reveal delay={200}>
            <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              How I Work
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", marginBottom: "2rem", lineHeight: 1.3 }}>
              Values that guide every engagement.
            </h2>
            {[
              { title: "Transparency first", desc: "You'll always know what I'm working on, what it costs, and whether it's working. No smoke, no mirrors." },
              { title: "Results before revenue", desc: "I proved these methods on my own projects before charging anyone for them. I won't sell you something I haven't tested myself." },
              { title: "Contractor-focused, always", desc: "I don't work with everyone. Contractors are my niche — I understand your market, your customers, and your search patterns." },
              { title: "No long-term contracts", desc: "If I'm not delivering value, you can walk away. My job is to keep earning your business every single month." },
            ].map((item) => (
              <div key={item.title} className="value-card">
                <p style={{ color: "var(--text)", fontWeight: "600", margin: "0 0 0.25rem", fontSize: "0.95rem" }}>{item.title}</p>
                <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        borderTop: "1px solid var(--duke)",
        padding: "5rem 2rem",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 100%, rgba(1,33,105,0.3) 0%, transparent 70%)",
      }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "1.25rem" }}>
            Ready to work with someone who's honest about what they can do?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.9 }}>
            Let's have a real conversation about your business — no pitch, no pressure.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Let's Talk — It's Free
          </Link>
        </Reveal>
      </section>
    </>
  );
}