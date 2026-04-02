"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion as m, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(123, 175, 212, 0.3), rgba(123, 175, 212, 0.05) 30%, transparent 80%)`
  );

  return (
    <m.div
      style={{
        position: "fixed",
        inset: 0,
        background,
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}

const C = {
  carolina: "#7bafd4",
  carolinaDark: "#5a93bc",
  steel: "#4A6B8A",
  carolinaDim: "rgba(123,175,212,0.12)",
  carolinaBorder: "rgba(123,175,212,0.28)",
  muted: "#888888",
  muted2: "#555555",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",
  surface: "#141414",
  surface2: "#1e1e1e",
  text: "#f0f0f0",
  text2: "#c0c0c0",
};

// ─── Shared primitives ───────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      marginBottom: "1rem", overflow: "hidden",
    }}>
      <div style={{ width: 12, height: 1, background: C.carolina, opacity: 0.5 }} />
      <p style={{
        fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em",
        textTransform: "uppercase", color: C.carolina,
        fontFamily: "var(--font-mono)", margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}

function H2({ children, style }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em",
      color: C.text, marginBottom: "1.5rem", ...style,
    }}>
      {children}
    </h2>
  );
}

function Body({ children, style }) {
  return (
    <p style={{
      color: C.text2, fontSize: "1.05rem", lineHeight: 1.8,
      fontFamily: "var(--font-ui)", marginBottom: "1.25rem",
      maxWidth: 600, ...style,
    }}>
      {children}
    </p>
  );
}

function GradientBtn({ href, children, style }) {
  return (
    <m.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link href={href} className="btn-primary" style={{
        display: "inline-flex", alignItems: "center",
        background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
        color: "#1e2a3a", fontWeight: 600, fontSize: "0.78rem",
        letterSpacing: "0.1em", textTransform: "uppercase",
        fontFamily: "var(--font-mono)",
        padding: "15px 32px", borderRadius: 6,
        textDecoration: "none", lineHeight: 1,
        minHeight: 44, ...style,
      }}>
        {children}
      </Link>
    </m.div>
  );
}

function OutlineBtn({ href, children }) {
  return (
    <m.div
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className="btn-outline" style={{
        display: "inline-flex", alignItems: "center",
        border: `1px solid ${C.borderStrong}`,
        color: C.carolina, fontWeight: 600, fontSize: "0.78rem",
        letterSpacing: "0.1em", textTransform: "uppercase",
        fontFamily: "var(--font-mono)",
        padding: "15px 28px", borderRadius: 6,
        textDecoration: "none", lineHeight: 1,
        minHeight: 44,
      }}>
        {children}
      </Link>
    </m.div>
  );
}

// ─── Section data ─────────────────────────────────────────────────────────────

const problemCards = [
  {
    label: "On Google Maps",
    body: "Your competitors are in the Map Pack. You're buried below them — or not showing up at all. Customers searching your trade in your city right now are calling someone else.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "On your website",
    body: "An outdated site, or no site at all, tells customers to keep scrolling. It doesn't matter how good the work is if the first impression is a page that looks like it hasn't been touched since 2015.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "In your reviews",
    body: "You've done hundreds of jobs. But online you might look like the new guy. Customers can't tell who's been operating for twenty years and who started six months ago.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const planSteps = [
  {
    num: "01",
    title: "Audit",
    body: "I review your Google Business Profile, website, competitor ranking, and local citation health to find what's actually costing you calls.",
    cta: { label: "Start with the free audit →", href: "/audit" },
    active: true,
  },
  {
    num: "02",
    title: "Fix Priority Gaps",
    body: "Not everything at once. What matters most first — the things that move you up in search before we touch anything else.",
    cta: null,
    active: false,
  },
  {
    num: "03",
    title: "Grow and Track",
    body: "Monthly reports on what's improving and what's next. You see the data, not just a summary.",
    cta: null,
    active: false,
  },
];

const auditAreas = ["GBP", "Reviews", "Website", "Technical", "Citations", "Backlinks", "Competitors"];

const faqItems = [
  {
    q: "What does the free audit actually check?",
    a: "Seven areas: your Google Business Profile, review count and recency, your website's on-page setup, technical health (page speed, schema markup, mobile), citation consistency across directories like Yelp and Angi, backlink signals, and how you compare to the top three competitors showing up for your trade in your city. Each section gets a score and a plain-English finding.",
  },
  {
    q: "I don't have a website. Can you still help?",
    a: "Yes — and the audit will show you exactly what not having one is costing you in search. Most of the calls going to your competitors are coming from people who found them on Google, not through a referral. A site built for local search changes that.",
  },
  {
    q: "How is this different from hiring an SEO agency?",
    a: "Most agencies sell packages and report on numbers you can't connect to actual calls. I work with a small number of clients, no contracts, and if what I'm doing isn't working I'll tell you before you figure it out yourself.",
  },
  {
    q: "How long before I see results?",
    a: "Most businesses see meaningful ranking movement in 60–90 days, depending on how competitive your trade is in your city. I'll tell you what's realistic for your specific situation before we start — not after you've already paid.",
  },
  {
    q: "What does it cost?",
    a: "Depends on what you need. The audit is free. If you want to talk through what fixing the gaps would look like, that conversation is free too.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. I don't offer them.",
  },
  {
    q: "Why should I trust someone I've never heard of?",
    a: "Fair question. I'm a startup in Siloam Springs — no decade of client case studies. What I have is a method I've tested on my own demo sites, data I can show you, and a commitment I intend to keep: if I'm not delivering, you leave. Start with the free audit. You'll get a pretty good sense of whether I know what I'm talking about.",
  },
];

// ─── 3D Perspective Component ───────────────────────────────────────────────

function PerspectiveSection({ children }) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={ref}
      style={{
        perspective: "1200px",
        position: "relative",
      }}
    >
      <m.div
        style={{
          rotateX: mounted ? rotateX : 0,
          scale: mounted ? scale : 1,
          opacity: mounted ? opacity : 1,
          transformOrigin: "center",
        }}
      >
        {children}
      </m.div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ─── Problem Section Parallax ───
  const problemRef = useRef(null);
  const { scrollYProgress: problemScroll } = useScroll({
    target: problemRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(problemScroll, [0, 1], [-20, 20]);
  const y2 = useTransform(problemScroll, [0, 1], [-40, 40]);
  const y3 = useTransform(problemScroll, [0, 1], [-60, 60]);
  const r1 = useTransform(problemScroll, [0, 1], [-2, 2]);
  const r2 = useTransform(problemScroll, [0, 1], [3, -3]);
  const r3 = useTransform(problemScroll, [0, 1], [-1, 1]);

  // ─── Stakes Section 3D ───
  const stakesRef = useRef(null);
  const { scrollYProgress: stakesScroll } = useScroll({
    target: stakesRef,
    offset: ["start end", "center center"],
  });

  const rotateXStakes = useTransform(stakesScroll, [0, 1], [45, 0]);
  const rotateYStakes = useTransform(stakesScroll, [0, 1], [-30, 0]);
  const scaleStakes = useTransform(stakesScroll, [0, 1], [0.8, 1]);
  const opacityStakes = useTransform(stakesScroll, [0, 0.5], [0, 1]);

  return (
    <div className="tech-grid" style={{ background: "#060607", minHeight: "100vh" }}>
      <style>{`
        /* Buttons */
        .btn-primary {
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease;
        }
        .btn-primary:hover { 
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(123, 175, 212, 0.4);
        }
        .btn-primary:active { transform: scale(0.98); }

        .btn-outline {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-outline:hover {
          border-color: ${C.carolina};
          background: rgba(123, 175, 212, 0.05);
          transform: translateY(-1px);
        }

        /* Cards */
        .problem-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .problem-card:hover {
          border-color: rgba(123,175,212,0.5) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          background: rgba(123, 175, 212, 0.06) !important;
        }

        /* FAQ */
        .faq-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
        }
        .faq-item {
          transition: all 0.2s ease;
          border-radius: 8px;
          margin: 0 -16px;
          padding: 24px 16px !important;
        }
        .faq-item:hover { 
          background: rgba(255,255,255,0.03);
          border-color: rgba(255, 255, 255, 0.1) !important;
        }

        /* Success/Stakes stacking */
        .stakes-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        /* Inline links */
        .inline-link {
          position: relative;
          text-decoration: none !important;
        }
        .inline-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .inline-link:hover::after {
          width: 100%;
        }

        /* Responsive */
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        /* Scanning Line */
        .scanning-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${C.carolina}, transparent);
          top: -100%;
          border-radius: 1px;
          opacity: 0.4;
          animation: scan 3s linear infinite;
        }
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr; }
          .stakes-grid { grid-template-columns: 1fr; gap: 40px; }
          .faq-grid { grid-template-columns: 1fr; gap: 40px; }
          .guide-grid { grid-template-columns: 1fr !important; gap: 40px; }
        }
        @media (max-width: 480px) {
          .cta-row { flex-direction: column; align-items: stretch; }
          .cta-row a { justify-content: center; }
        }
      `}</style>
      <Spotlight />
      <div className="noise">


        {/* ─── HERO ──────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            maxWidth: 1100, margin: "0 auto",
            perspective: "1000px",
          }}
        >
          <m.div
            style={{
              rotateX: mounted ? rotateX : 0,
              scale: mounted ? scale : 1,
              opacity: mounted ? opacity : 1,
              transformOrigin: "top",
              padding: "clamp(8rem, 20vw, 12rem) clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 8rem)",
              display: "flex", flexDirection: "column", alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <div className="scan-line" />

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Eyebrow>Free Local SEO Audit for NWA Contractors</Eyebrow>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 8vw, 5rem)",
                fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em",
                color: C.text, margin: "0 0 28px",
                maxWidth: 900,
              }}
            >
              Your competitors are taking calls <span style={{ color: C.carolina }}>that should be yours.</span>
            </m.h1>

            <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ maxWidth: 540 }}
              >
                <p style={{
                  color: C.text2, fontSize: "1.25rem", lineHeight: 1.6,
                  fontFamily: "var(--font-ui)", margin: "0 0 20px",
                  fontWeight: 500,
                }}>
                  97% of people use Google to find local contractors. If you&apos;re not in the top results, you&apos;re invisible.
                </p>
                <p style={{
                  color: C.muted, fontSize: "1.05rem", lineHeight: 1.75,
                  fontFamily: "var(--font-ui)", margin: "0 0 40px",
                }}>
                  The best contractor in town shouldn&apos;t be the hardest to find. I give you the data to fix your visibility gap and start winning the search war.
                </p>

                <div className="cta-row">
                  <GradientBtn href="/audit" style={{ fontSize: "0.85rem", padding: "18px 36px" }}>
                    Run Your Free Audit Now →
                  </GradientBtn>
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: 12, marginTop: 20,
                }}>
                  <div style={{ display: "flex" }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={C.carolina} style={{ marginRight: 2 }}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ color: C.muted2, fontSize: "0.75rem", fontFamily: "var(--font-mono)", margin: 0 }}>
                    90s AUDIT · REAL DATA · NO EMAIL REQUIRED
                  </p>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: C.carolinaBorder,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  flex: "1 1 280px",
                  padding: "24px",
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(10px)",
                  display: "flex", flexDirection: "column", gap: 16,
                  cursor: "default",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: C.carolina }}>SYSTEM STATUS</span>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 10px #4ade80" }} />
                </div>
                <div style={{ height: 1, background: C.border }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["GOOGLE MAPS", "LOCAL SEARCH", "REVIEW HEALTH", "SITE AUDIT"].map(txt => (
                    <div key={txt} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", fontFamily: "var(--font-mono)", color: C.muted }}>
                      <span>{txt}</span>
                      <span style={{ color: C.text }}>READY</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "auto", paddingTop: 10 }}>
                  <p style={{ fontSize: "0.7rem", color: C.text, fontFamily: "var(--font-mono)", margin: 0 }}>
                    DIAGNOSTIC ENGINE v2.4
                  </p>
                </div>
              </m.div>
            </div>
          </m.div>
        </section>

        {/* ─── PROBLEM ───────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div
            ref={problemRef}
            style={{ padding: "0 clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 8rem)" }}
          >
            <div style={{ maxWidth: 700, marginBottom: 60 }}>
              <Eyebrow>The Problem</Eyebrow>
              <H2>Good work used to be enough.</H2>
              <Body>
                You built something real. You show up on time, do the job right, and your customers tell their neighbors. But the homeowner who needs a repair <strong style={{ color: C.text }}>this week</strong> isn&apos;t asking a neighbor first.
              </Body>
              <Body style={{ color: C.carolina, fontWeight: 500 }}>
                They&apos;re opening Google. And if you&apos;re not in the &quot;Map Pack&quot;, you don&apos;t exist to them.
              </Body>
            </div>

            <div className="problem-grid" style={{
              maxWidth: 1100,
              margin: "0 auto",
              perspective: "1200px"
            }}>
              {problemCards.map((card, i) => {
                const yOff = [y1, y2, y3][i];
                const rOff = [r1, r2, r3][i];

                return (
                  <m.div
                    key={card.label}
                    className="problem-card glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      borderColor: "rgba(123, 175, 212, 0.6)",
                      boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 20px rgba(123, 175, 212, 0.15)",
                      backgroundColor: "rgba(123, 175, 212, 0.08)"
                    }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      borderRadius: 12,
                      padding: "40px 32px",
                      position: "relative",
                      overflow: "hidden",
                      // Apply parallax
                      y: mounted ? yOff : 0,
                      rotateY: mounted ? rOff : 0,
                    }}
                  >
                    <div style={{
                      position: "absolute", top: -10, right: -10,
                      fontSize: "5rem", fontWeight: 900, color: C.carolina,
                      opacity: 0.03, fontFamily: "var(--font-display)",
                      pointerEvents: "none",
                    }}>
                      0{i + 1}
                    </div>

                    <div style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: 48, height: 48, borderRadius: 12,
                      background: "rgba(123, 175, 212, 0.1)",
                      border: `1px solid rgba(123, 175, 212, 0.2)`,
                      color: C.carolina, marginBottom: 24,
                    }}>
                      {card.icon}
                    </div>

                    <p style={{
                      fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em",
                      textTransform: "uppercase", color: C.muted,
                      fontFamily: "var(--font-mono)", marginBottom: 12,
                    }}>
                      {card.label}
                    </p>

                    <p style={{
                      color: C.text, fontSize: "1.1rem", lineHeight: 1.6,
                      fontFamily: "var(--font-ui)", fontWeight: 500,
                    }}>
                      {card.body}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── GUIDE (THE ARCHITECT) ─────────────────────────────────────────── */}
        <PerspectiveSection>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
          }}>
            <div className="guide-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center"
            }}>

              {/* Left: Copy Content */}
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Eyebrow>Not Another Agency</Eyebrow>
                <H2 style={{ maxWidth: 600 }}>I know why you&apos;re skeptical.</H2>

                <Body>
                  If you&apos;ve hired a marketing company before and walked away feeling like you paid for reports instead of results — I get it. Most agencies sell the idea of results. They hand you a 40-page document, disappear for three months, and call it strategy.
                </Body>
                <Body>
                  I&apos;m one person in Siloam Springs, and I don&apos;t take on clients I can&apos;t actually help. If something is outside my skill set, I&apos;ll say so before you pay for it.
                </Body>

                {/* Checklist Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 40 }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(123,175,212,0.1)", borderRadius: "50%", color: C.carolina, flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: C.text, fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Brand Fortress</div>
                      <div style={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.5 }}>Securing your identity across every digital node.</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(123,175,212,0.1)", borderRadius: "50%", color: C.carolina, flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: C.text, fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Algorithmic Integrity</div>
                      <div style={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.5 }}>Pure data-driven methodology. No shortcuts.</div>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: "rgba(123, 175, 212, 0.03)",
                  borderLeft: `3px solid ${C.carolina}`,
                  padding: "20px 24px", borderRadius: "0 12px 12px 0",
                  marginTop: 40,
                }}>
                  <p style={{
                    color: C.text, fontSize: "0.95rem", lineHeight: 1.6,
                    fontFamily: "var(--font-ui)", margin: 0, fontWeight: 500,
                  }}>
                    The data is straightforward: <span style={{ color: C.carolina }}>28% of searches</span> for a nearby service result in a purchase the same day.
                  </p>
                </div>
              </m.div>

              {/* Right: Architect Portrait & Quote */}
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ position: "relative" }}
              >
                <div style={{
                  borderRadius: 12, overflow: "hidden",
                  border: `1px solid ${C.border}`,
                  background: C.surface,
                  aspectRatio: "1/1",
                }}>
                  <img
                    src="/images/chad.avif"
                    alt="Chad Smith, Systems Architect"
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(1) contrast(1.1) brightness(0.9)",
                      display: "block",
                    }}
                  />
                </div>

                {/* Floating Quote Card */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: -115, // Shifted up to overlap shoulder but clear chin
                    left: -40,
                    padding: "24px",
                    borderRadius: 12,
                    background: "rgba(6, 6, 7, 0.50)", // Increased opacity for better card definition
                    border: `1px solid ${C.carolinaBorder}`,
                    maxWidth: 300,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 10px rgba(123, 175, 212, 0.1)",
                    backdropFilter: "blur(12px)", // Reduced blur for a cleaner frosted glass effect
                    zIndex: 10,
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: C.carolina,
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontWeight: 800,
                  }}>
                    <span style={{ width: 6, height: 6, background: C.carolina, borderRadius: "50%" }} />
                    SYSTEMS_ARCHITECT
                  </div>
                  <p style={{
                    color: C.text,
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    margin: 0,
                    fontStyle: "italic",
                    fontWeight: 600,
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)", // Added for extra clarity
                  }}>
                    &quot;Data is the only currency that matters in the local ecosystem. We don&apos;t just find it; we master it.&quot;
                  </p>
                </m.div>
              </m.div>

            </div>
          </div>
        </PerspectiveSection>

        {/* ─── PLAN ──────────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div style={{
            background: "linear-gradient(180deg, transparent, rgba(123,175,212,0.02), transparent)",
            padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
          }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 60 }}>
                <Eyebrow>How This Works</Eyebrow>
                <H2>Three steps. No surprises.</H2>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 32,
              }}>
                {planSteps.map((step, i) => (
                  <m.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      borderColor: C.carolina,
                      boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
                    }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      background: step.active ? "rgba(123, 175, 212, 0.05)" : "transparent",
                      border: `1px solid ${step.active ? C.carolinaBorder : C.border}`,
                      borderRadius: 16, padding: "40px",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: C.carolina,
                      marginBottom: 20, fontWeight: 700,
                    }}>
                      {step.num}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: "1.5rem",
                      fontWeight: 800, color: C.text, marginBottom: 16,
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      color: C.text2, fontSize: "1rem", lineHeight: 1.7,
                      fontFamily: "var(--font-ui)", marginBottom: 24,
                    }}>
                      {step.body}
                    </p>
                    {step.cta && (
                      <Link href={step.cta.href} className="inline-link" style={{
                        color: C.carolina, fontWeight: 600, fontSize: "0.9rem",
                      }}>
                        {step.cta.label}
                      </Link>
                    )}
                  </m.div>
                ))}
              </div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  maxWidth: 800, margin: "60px auto 0",
                  background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`,
                  borderRadius: 12, padding: "24px 32px",
                  display: "flex", flexWrap: "wrap", gap: "24px 40px",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.carolina} strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ fontSize: "0.85rem", color: C.text, fontWeight: 600 }}>No contracts, ever.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.carolina} strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ fontSize: "0.85rem", color: C.text, fontWeight: 600 }}>Full transparency.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.carolina} strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ fontSize: "0.85rem", color: C.text, fontWeight: 600 }}>Real results, no fluff.</span>
                </div>
              </m.div>
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── AUDIT TOOL ────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div style={{
            maxWidth: 900, margin: "0 auto", textAlign: "center",
            padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem)",
          }}>
            <Eyebrow>Free Tool</Eyebrow>
            <H2>See your scores <span style={{ color: C.carolina }}>before</span> you talk to anyone.</H2>
            <Body style={{ margin: "0 auto 40px" }}>
              Enter your business name, trade, and city. In about 90 seconds you&apos;ll get a scored audit across seven critical areas.
            </Body>

            <m.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-strong"
              style={{
                padding: "48px", borderRadius: 24, border: `1px solid ${C.carolinaBorder}`,
                position: "relative", overflow: "hidden",
                marginBottom: 40,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: `linear-gradient(90deg, transparent, ${C.carolina}, transparent)`, opacity: 0.3 }} />

              <GradientBtn href="/audit" style={{ fontSize: "1rem", padding: "20px 48px" }}>
                Launch Full SEO Audit Dashboard →
              </GradientBtn>

              <p style={{ color: C.muted2, fontSize: "0.75rem", marginTop: 20, fontFamily: "var(--font-mono)" }}>
                NO EMAIL REQUIRED TO SEE INITIAL SCORES
              </p>
            </m.div>

            <div style={{
              display: "flex", flexWrap: "wrap", alignItems: "center",
              gap: "12px 24px", justifyContent: "center", opacity: 0.6,
            }} aria-label="Audit covers">
              {auditAreas.map((area, i) => (
                <span key={area} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{
                    fontSize: "0.7rem", fontWeight: 700,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: C.muted, fontFamily: "var(--font-mono)",
                  }}>
                    {area}
                  </span>
                  {i < auditAreas.length - 1 && (
                    <span style={{
                      display: "inline-block", width: 4, height: 4, borderRadius: "50%",
                      background: C.carolina, marginLeft: 24, opacity: 0.3,
                    }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── SUCCESS ───────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div
            ref={stakesRef}
            style={{
              maxWidth: 1100, margin: "0 auto",
              padding: "0 clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 8rem)",
            }}
          >
            <div className="stakes-grid">
              <div style={{ perspective: "1000px" }}>
                <m.div
                  style={{
                    aspectRatio: "1/1",
                    background: "rgba(123,175,212,0.05)",
                    border: `1px solid ${C.border}`, borderRadius: 24,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative",
                    rotateX: mounted ? rotateXStakes : 0,
                    rotateY: mounted ? rotateYStakes : 0,
                    scale: mounted ? scaleStakes : 1,
                    opacity: mounted ? opacityStakes : 1,
                    overflow: "hidden",
                  }}
                >
                  <div className="scanning-line" />
                  <div style={{
                    width: "80%", height: "80%", border: `1px dashed ${C.carolina}`,
                    borderRadius: "50%", opacity: 0.2, animation: "spin 20s linear infinite",
                  }} />
                  <div style={{ position: "absolute", textAlign: "center" }}>
                    <div style={{ fontSize: "clamp(3rem, 10vw, 4rem)", fontWeight: 800, color: C.carolina, lineHeight: 1 }}>97%</div>
                    <div style={{ fontSize: "0.6rem", fontFamily: "var(--font-mono)", color: C.muted, marginTop: 8, letterSpacing: "0.2em" }}>SYSTEM_RELIANCE</div>
                  </div>
                </m.div>
              </div>
              <div>
                <Eyebrow>What Success Looks Like</Eyebrow>
                <H2>The phone rings from people who already want to hire you.</H2>
                <Body>
                  When visibility gaps are fixed, you stop depending on referral timing. Someone needs HVAC before summer hits. They open Google, they find you, they call.
                </Body>
                <Body>
                  What that looks like day-to-day: a schedule that fills from search, not just referrals. Calls from people who already know what they need.
                </Body>
              </div>
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── STAKES ────────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div style={{ padding: "0 clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 8rem)" }}>
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                maxWidth: 1000, margin: "0 auto",
                background: "rgba(123, 175, 212, 0.02)",
                border: `1px solid ${C.border}`,
                borderTop: `1px solid ${C.carolinaBorder}`,
                borderRadius: 24,
                padding: "clamp(3rem, 8vw, 5rem)",
                textAlign: "center",
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -50, left: -50, width: 200, height: 200, background: C.carolina, filter: "blur(120px)", opacity: 0.05 }} />

              <H2 style={{ maxWidth: 800, margin: "0 auto 24px" }}>
                Every month you&apos;re invisible is work going to a competitor.
              </H2>
              <Body style={{ maxWidth: 700, margin: "0 auto 40px" }}>
                Referrals are real business. But they&apos;re not a system — they&apos;re a streak. When the streak slows, you need a machine that produces calls. I build the machine.
              </Body>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <GradientBtn href="/audit">See Where You Stand Online →</GradientBtn>
              </div>
            </m.div>
          </div>
        </PerspectiveSection>

        {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div style={{
            maxWidth: 900, margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 8rem)",
          }}>
            <div className="faq-grid">
              <div>
                <Eyebrow>Transparency</Eyebrow>
                <H2>Questions worth asking.</H2>
                <Body>
                  I don't expect you to take my word for it. Here is how I work, what it costs, and why I don't use contracts.
                </Body>
              </div>

              <dl>
                {faqItems.map((item, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="faq-item"
                    style={{
                      borderTop: `1px solid ${C.border}`,
                    }}
                  >
                    <dt style={{
                      fontFamily: "var(--font-ui)", fontSize: "1.1rem",
                      fontWeight: 700, color: C.text, marginBottom: 12, lineHeight: 1.4,
                    }}>
                      {item.q}
                    </dt>
                    <dd style={{
                      fontFamily: "var(--font-ui)", fontSize: "1rem",
                      color: C.text2, lineHeight: 1.7, margin: 0,
                    }}>
                      {item.a}
                    </dd>
                  </m.div>
                ))}
                <div style={{ borderTop: `1px solid ${C.border}` }} />
              </dl>
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div style={{
            maxWidth: 800, margin: "0 auto", textAlign: "center",
            padding: "0 clamp(1.5rem, 5vw, 3rem) clamp(8rem, 15vw, 12rem)",
            position: "relative",
          }}>
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <H2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>The best contractor in town shouldn&apos;t be the hardest to find.</H2>
              <Body style={{ margin: "0 auto 40px", maxWidth: 600 }}>
                Run the free audit. If the findings are useful on their own, take them. If you want to talk through fixing them, I&apos;m here.
              </Body>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <GradientBtn href="/audit" style={{ padding: "20px 48px" }}>Run Your Free Audit →</GradientBtn>
                <OutlineBtn href="/contact">Let&apos;s Talk — It&apos;s Free →</OutlineBtn>
              </div>
              <p style={{ color: C.muted2, fontSize: "0.75rem", marginTop: 24, fontFamily: "var(--font-mono)" }}>
                NO PITCH · NO PRESSURE · REAL DATA
              </p>
            </m.div>
          </div>
        </PerspectiveSection>

      </div>
    </div>
  );
}
