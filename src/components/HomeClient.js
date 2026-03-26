"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "./FAQSection";
import CTAForm from "./CTAForm";
import Starfield from "./Starfield";
import {
  IconInvisible,
  IconNoWebsite,
  IconWordOfMouth,
} from "@/components/ProblemIcons";

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

function useCountUp(targetNumber, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * targetNumber));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, duration]);

  return { count, ref };
}

function StatNumber({ stat }) {
  const targetNumber = parseInt(stat);
  const { count, ref } = useCountUp(targetNumber);

  return (
    <div
      ref={ref}
      style={{
        fontSize: "3rem",
        fontWeight: "900",
        color: "var(--carolina)",
        marginBottom: "1rem",
        fontFamily: "var(--font-display)",
        textShadow: "0 0 20px rgba(123,175,212,0.4)",
      }}
    >
      {count}%
    </div>
  );
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

export default function HomeClient({ posts }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(32px, 32px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(24px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(123,175,212,0.15); }
          50% { box-shadow: 0 0 24px rgba(123,175,212,0.3); }
        }
        .h1 { animation: fadeUp 0.8s ease-out forwards; }
        .h2 { animation: fadeUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .h3 { animation: fadeUp 0.8s ease-out 0.4s forwards; opacity: 0; }
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
          padding: 0.9rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          font-family: var(--font-body);
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s, box-shadow 0.25s;
          box-shadow: 0 0 8px rgba(123,175,212,0.15);
        }
        .btn-primary:hover { transform: scale(0.98); box-shadow: 0 0 24px rgba(123,175,212,0.3); }
        .btn-outline {
          border: 1px solid rgba(123,175,212,0.3);
          color: var(--carolina);
          padding: 0.9rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          font-family: var(--font-body);
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.25s, border-color 0.25s, transform 0.15s, box-shadow 0.25s;
        }
        .btn-outline:hover { background-color: rgba(123,175,212,0.08); border-color: var(--carolina); transform: scale(0.98); box-shadow: 0 0 12px rgba(123,175,212,0.1); }
        .card {
          background: rgba(13,17,23,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(123,175,212,0.1);
          border-radius: 12px;
          padding: 2rem;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          height: 100%;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
        }
        .card:hover { border-color: rgba(123,175,212,0.3); transform: translateY(-4px); box-shadow: 0 0 20px rgba(123,175,212,0.1), inset 0 1px 0 rgba(255,255,255,0.06); }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2.5rem;
          border-left: 2px solid rgba(123,175,212,0.15);
        }
        .timeline-item:last-child { border-left: 2px solid transparent; padding-bottom: 0; }
        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--carolina);
          box-shadow: 0 0 10px rgba(123,175,212,0.5);
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .blog-card {
          background: rgba(13,17,23,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(123,175,212,0.1);
          border-radius: 12px;
          padding: 2rem;
          text-decoration: none;
          display: block;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .blog-card:hover { border-color: rgba(123,175,212,0.3); transform: translateY(-4px); box-shadow: 0 0 20px rgba(123,175,212,0.1); }
        .pledge-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-left: 3px solid var(--carolina);
          background: rgba(13,17,23,0.7);
          backdrop-filter: blur(12px);
          border-radius: 0 10px 10px 0;
          margin-bottom: 1rem;
          box-shadow: inset 4px 0 12px rgba(123,175,212,0.05);
        }
          @media (max-width: 768px) {
  .hero-section { padding: 5rem 1.5rem 4rem !important; }
  .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
  .three-col { grid-template-columns: 1fr !important; }
  .hide-mobile { display: none !important; }
  .form-row { grid-template-columns: 1fr !important; }
}
      `}</style>

      {/* 1. HERO */}
      <section
        className='hero-section'
        style={{
          padding: "12rem 8rem 10rem",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Galaxy starfield */}
        <Starfield />
        {/* Animated grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle, rgba(123,175,212,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            animation: "gridMove 40s linear infinite",
            pointerEvents: "none",
          }}
        />
        {/* Floating particles */}
        {mounted && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "var(--carolina)",
                  borderRadius: "50%",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        )}
        {/* Glow */}
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
            animation: "glow 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "750px", position: "relative" }}>
          <p
            className='h1 eyebrow'
            style={{
              marginBottom: "1.5rem",
            }}
          >
            Local SEO & Web Development • Siloam Springs, AR
          </p>
          <h1
            className='h1'
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              fontWeight: "800",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              textShadow: "0 0 20px rgba(123,175,212,0.3)",
            }}
          >
            Your next customer just searched Google. <br />
            <em>
              <span style={{ color: "var(--carolina)", fontWeight: "600" }}>
                They found your competitor.
              </span>
            </em>
          </h1>
          <p
            className='h2'
            style={{
              color: "var(--muted)",
              fontSize: "1.1rem",
              maxWidth: "580px",
              marginBottom: "1rem",
              lineHeight: 1.9,
            }}
          >
            Most NWA contractors do great work, but nobody finds them online.
            If you're not in the Google Map Pack, the calls go to whoever is.
            I started Local Search Ally after ranking my own sites first. Now
            I do the same thing for contractors.
          </p>
          <p
            className='h2'
            style={{
              color: "var(--error)",
              fontSize: "0.9rem",
              fontWeight: "600",
              marginBottom: "2.5rem",
            }}
          >
            ⚠️ I take a limited number of free strategy calls each month. If
            yours is open, grab it before it's not.
          </p>
          <div className='h3'>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                await fetch("https://formspree.io/f/mkoqvkzr", {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                });
                window.location.href = "/contact?submitted=true";
              }}
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                maxWidth: "560px",
              }}
            >
              <input
                type='text'
                name='name'
                placeholder='Your name'
                required
                style={{
                  flex: 1,
                  minWidth: "160px",
                  backgroundColor: "rgba(13,17,23,0.7)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "0.85rem 1rem",
                  color: "var(--text)",
                  fontSize: "0.95rem",
                  outline: "none",
                  fontFamily: "var(--font-body)",
                  backdropFilter: "blur(8px)",
                }}
              />
              <input
                type='email'
                name='email'
                placeholder='Your email'
                required
                style={{
                  flex: 1,
                  minWidth: "160px",
                  backgroundColor: "rgba(13,17,23,0.7)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "0.85rem 1rem",
                  color: "var(--text)",
                  fontSize: "0.95rem",
                  outline: "none",
                  fontFamily: "var(--font-body)",
                  backdropFilter: "blur(8px)",
                }}
              />
              <button
                type='submit'
                className='btn-glow'
                style={{
                  padding: "0.85rem 1.75rem",
                  fontSize: "0.95rem",
                  whiteSpace: "nowrap",
                }}
              >
                Let's Talk →
              </button>
            </form>

            <Link
              href='/services'
              className='btn-outline'
              style={{ marginTop: "0.5rem", display: "inline-block" }}
            >
              See How It Works
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Based in Siloam Springs, AR" },
              { label: "5+ Years SEO Experience" },
              { label: "No Contracts, Ever" },
            ].map((item) => (
              <p
                key={item.label}
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  margin: 0,
                }}
              >
                <span
                  style={{ color: "var(--carolina)", marginRight: "0.5rem" }}
                >
                  ✓
                </span>
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
      >
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              color: "var(--carolina)",
              fontWeight: "bold",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            The Problem
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3vw, 3rem)",
              fontWeight: "800",
              marginBottom: "1rem",
            }}
          >
            You're great at what you do. But nobody can find you online.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            Every day, homeowners in NWA search Google for contractors. If
            you're not showing up, you're losing jobs to competitors who are,
            even if their work isn't as good as yours.
          </p>
        </Reveal>

        {/* Staggered layout instead of uniform cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            {
              icon: <IconInvisible />,
              title: "Invisible on Google Maps",
              desc: "Your competitors show up in the Map Pack. You're on page 3, or you're not showing up at all.",
              position: "left",
            },
            {
              icon: <IconNoWebsite />,
              title: "No Website (or a Bad One)",
              desc: "Your website doesn't match the quality of your actual work. Or you don't have one, and the calls go to someone who does.",
              position: "right",
            },
            {
              icon: <IconWordOfMouth />,
              title: "Counting on Referrals Alone",
              desc: "Referrals are great until they slow down. Then what? You need something that works whether or not someone remembers your name.",
              position: "left",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 200}>
              <div
                style={{
                  display: "flex",
                  flexDirection:
                    item.position === "left" ? "row" : "row-reverse",
                  gap: "2rem",
                  alignItems: "center",
                  padding: "2rem",
                  borderRadius: "12px",
                  backgroundColor:
                    item.position === "left" ? "var(--surface)" : "transparent",
                  border:
                    item.position === "left"
                      ? "1px solid var(--secondary)"
                      : "none",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "var(--text)",
                    color: "var(--bg)",
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      color: "var(--text)",
                      marginBottom: "0.75rem",
                      fontSize: "1.25rem",
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--muted)",
                      lineHeight: 1.8,
                      margin: 0,
                      fontSize: "1rem",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. GUIDE */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className='two-col'
        >
          {/* Left — photo + stats */}
          <Reveal>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                marginBottom: "1.5rem",
              }}
            >
              <Image
                src='/images/chad.avif'
                alt='Chad Smith — Local Search Ally'
                width={600}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                { stat: "5+", label: "Years doing local SEO" },
                { stat: "100%", label: "Contractors only" },
                {
                  stat: "One Person",
                  label: "SEO + web dev, no hand-offs",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderLeft: "4px solid var(--carolina)",
                    borderRadius: "0 8px 8px 0",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "800",
                      color: "var(--carolina)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.stat}
                  </span>
                  <span
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — text */}
          <Reveal delay={200}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1rem",
              }}
            >
              Meet Your Guide
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "800",
                marginBottom: "1.5rem",
                lineHeight: 1.3,
              }}
            >
              I proved the method on myself first.
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              I'm Chad. I run Local Search Ally out of Siloam Springs. I'm
              not an agency. It's just me, and I'd rather be honest with
              you than impressive.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              I started by testing SEO on my own projects. Ranked the
              sites, optimized the Google Business Profiles, turned search
              traffic into actual phone calls. What worked became the
              method I now use for contractors.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              I'm still growing this business. But everything I do, you
              can see, question, and measure. The only thing that matters
              is whether your phone rings more.
            </p>
            <Link href='/about' className='btn-outline'>
              My Full Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3.5. STATS */}
      <section
        style={{
          borderTop: "1px solid var(--secondary)",
          borderBottom: "1px solid var(--secondary)",
          padding: "5rem 2rem",
          backgroundColor: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1rem",
              }}
            >
              The Research
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "800",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}
            >
              This is what's happening in your market right now.
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              I didn't make these up. This is what the data says about
              how homeowners find and hire contractors. Your customers
              are already searching. They're either finding you or finding
              someone else.
            </p>
          </Reveal>

          {/* Timeline layout instead of grid cards */}
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "2rem",
                top: "2rem",
                bottom: "2rem",
                width: "2px",
                background:
                  "linear-gradient(to bottom, var(--carolina), var(--duke))",
              }}
            />

            {[
              {
                stat: "80%",
                desc: "of people search for a local business at least once a week. Four out of five. If they're not finding you, they're finding someone else.",
                source: "SOCi Consumer Behavior Index · 2024",
              },
              {
                stat: "42%",
                desc: "of local searches end with a click on the Google Map Pack. That's the 3 businesses at the top with a map pin. If you're not one of them, nearly half the people searching never see you.",
                source: "Backlinko · 2024",
              },
              {
                stat: "76%",
                desc: 'of "near me" searches lead to a call or visit within 24 hours. When someone searches "plumber Bentonville," they\'re not browsing. They need someone today.',
                source: "Google · via industry survey data",
              },
              {
                stat: "71%",
                desc: "of consumers won't consider a business with under 3 stars. You can rank #1 and still lose the job if your reviews are bad. Showing up is only half of it.",
                source: "BrightLocal · Local Consumer Review Survey 2024",
              },
            ].map((item, index) => (
              <Reveal key={index} delay={index * 200}>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    marginBottom: "3rem",
                    paddingLeft: "1rem",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--carolina)",
                      border: "3px solid var(--surface)",
                      flexShrink: 0,
                      marginTop: "0.5rem",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "2rem",
                          fontWeight: "900",
                          color: "var(--carolina)",
                        }}
                      >
                        {item.stat}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--carolina)",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.source}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--secondary)",
                borderRadius: "10px",
                padding: "2.5rem",
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <blockquote
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "Good contractors stay invisible online all the time. Not
                because they're bad at their job. The ones who show up just
                figured out how local search works. That's a learnable
                thing, and it's what I do."
              </blockquote>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--carolina)",
                  fontWeight: "600",
                }}
              >
                — Chad Smith, Local Search Ally · Siloam Springs, AR
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. PLAN */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
      >
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              color: "var(--carolina)",
              fontWeight: "bold",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            The Plan
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: "800",
              marginBottom: "1rem",
            }}
          >
            Getting found online doesn't have to be complicated.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            Three steps. No jargon. Here's how it actually works.
          </p>
        </Reveal>
        <div
          className='three-col'
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              number: "01",
              title: "We Talk (For Free)",
              desc: "We talk. I'll pull up your Google listing, your website, and your competitors before the call. I'll tell you what I see, honestly, even the stuff you might not want to hear.",
            },
            {
              number: "02",
              title: "Plan & Build",
              desc: "I fix what's broken. GBP optimization, citations, a site that actually converts. You'll know what I'm doing and why at every step.",
            },
            {
              number: "03",
              title: "Optimize & Grow",
              desc: "We track it. Rankings, calls, visibility. If something's not working, we change it. No autopilot.",
            },
          ].map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div className='card' style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "var(--duke)",
                    marginBottom: "1rem",
                    opacity: 0.7,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    color: "var(--carolina)",
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}
                >
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ textAlign: "center" }}>
          <Link
            href='/contact'
            className='btn-primary'
            style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
          >
            Start With Step 1 — It's Free
          </Link>
        </Reveal>
      </section>

      {/* 5. WHAT I OFFER */}
      <section
        style={{ borderTop: "1px solid var(--border)", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1rem",
              }}
            >
              What I Offer
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Local SEO expertise. Web development growing daily.
            </h2>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.9,
              }}
            >
              Everything I offer points at one thing: more calls from people
              ready to hire.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                label: "Most clients start here",
                title: "Local SEO",
                desc: "Rank where your customers are actually searching. Google Maps, local results, the works. This is what I know best.",
                tags: ["GBP Optimization", "Citations", "On-Page SEO"],
                highlight: true,
              },
              {
                label: "Included with every website",
                title: "Web Design & Development",
                desc: "Mobile-first websites with SEO built into the structure, not bolted on after. Fast loading because the speed difference shows up in rankings.",
                tags: ["Mobile-First", "SEO-Built", "Lead Gen"],
                highlight: false,
              },
              {
                label: "One-time investment",
                title: "SEO Audits",
                desc: "Find out exactly why you're not ranking. Technical SEO, citation gaps, competitor analysis. You get a report you can actually act on.",
                tags: ["Technical SEO", "Competitor Analysis", "Action Plan"],
                highlight: false,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div
                  className='card'
                  style={{
                    borderTop: item.highlight
                      ? "3px solid var(--carolina)"
                      : "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <p
                    style={{
                      color: item.highlight
                        ? "var(--carolina)"
                        : "var(--muted)",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <h3
                    style={{
                      color: "var(--text)",
                      fontSize: "1.15rem",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--muted)",
                      lineHeight: 1.8,
                      fontSize: "0.9rem",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    {item.tags.map((tag) => (
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
              </Reveal>
            ))}
          </div>

          <Reveal style={{ textAlign: "center" }}>
            <Link href='/services' className='btn-outline'>
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. SUCCESS vs FAILURE */}
      <section
        style={{ borderTop: "1px solid var(--border)", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1rem",
              }}
            >
              What's At Stake
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "800",
              }}
            >
              Two paths forward.
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginTop: "1rem",
                lineHeight: 1.9,
              }}
            >
              Every month you're invisible online is a month your competitors
              are winning jobs that should be yours.
            </p>
          </Reveal>
          <div
            className='two-col'
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <Reveal>
              <div
                style={{
                  backgroundColor: "rgba(192,57,43,0.06)",
                  border: "1px solid rgba(192,57,43,0.3)",
                  borderTop: "4px solid #c0392b",
                  borderRadius: "10px",
                  padding: "2rem",
                }}
              >
                <h3 style={{ color: "#c0392b", marginBottom: "1.5rem" }}>
                  Do Nothing
                </h3>
                {[
                  "Competitors keep getting the calls that should be yours",
                  "Referrals slow down and revenue gets unpredictable",
                  "Great work goes unseen because nobody can find you",
                  "You keep depending on luck instead of something repeatable",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#c0392b", flexShrink: 0 }}>✗</span>
                    <p
                      style={{
                        color: "var(--muted)",
                        margin: 0,
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderTop: "4px solid var(--carolina)",
                  borderRadius: "10px",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{ color: "var(--carolina)", marginBottom: "1.5rem" }}
                >
                  Take Action
                </h3>
                {[
                  "Show up when NWA homeowners search for what you do",
                  "Get calls from people who are ready to hire, not just browse",
                  "Build a reputation online that works while you're on the job",
                  "Work with someone who tells you the truth, not what you want to hear",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--carolina)", flexShrink: 0 }}>
                      ✓
                    </span>
                    <p
                      style={{
                        color: "var(--muted)",
                        margin: 0,
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENCY PLEDGE */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1rem",
              }}
            >
              My Transparency Pledge
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "800",
              }}
            >
              No smoke. No mirrors. Just honest work.
            </h2>
          </Reveal>
          {[
            {
              promise: "I will never claim results I haven't achieved.",
              detail:
                "Every case study on this site will be real work with real outcomes.",
            },
            {
              promise: "I will tell you if something is outside my skill set.",
              detail:
                "I'll either learn it fast or recommend someone who can help.",
            },
            {
              promise: "I will never lock you into a contract.",
              detail:
                "If I'm not delivering value, you can walk away. No hard feelings.",
            },
            {
              promise: "I will communicate clearly and often.",
              detail: "You'll always know what I'm working on and why.",
            },
          ].map((item, i) => (
            <Reveal key={item.promise} delay={i * 100}>
              <div className='pledge-item'>
                <span
                  style={{
                    color: "var(--carolina)",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <div>
                  <p
                    style={{
                      color: "var(--text)",
                      fontWeight: "600",
                      margin: "0 0 0.25rem",
                    }}
                  >
                    {item.promise}
                  </p>
                  <p
                    style={{
                      color: "var(--muted)",
                      margin: 0,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p
              style={{
                color: "var(--muted)",
                textAlign: "right",
                marginTop: "1.5rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — Chad, Founder of Local Search Ally
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8a. BLOG PREVIEWS */}
      {posts.length > 0 && (
        <section
          style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
        >
          <Reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--carolina)",
                  fontWeight: "bold",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                From The Blog
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "800",
                  margin: 0,
                }}
              >
                What I'm learning. What I'm sharing.
              </h2>
            </div>
            <Link href='/blog' className='btn-outline'>
              View All Posts
            </Link>
          </Reveal>
          <div
            className='three-col'
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className='blog-card'>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.8rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3
                    style={{
                      color: "var(--text)",
                      fontSize: "1.05rem",
                      marginBottom: "0.75rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      margin: "0 0 1rem",
                    }}
                  >
                    {post.description}
                  </p>
                  <span
                    style={{
                      color: "var(--carolina)",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                    }}
                  >
                    Read more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 8b. PORTFOLIO PREVIEW */}
      <section
        style={{ borderTop: "1px solid var(--border)", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--carolina)",
                  fontWeight: "bold",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                Portfolio
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "800",
                  margin: 0,
                }}
              >
                The work speaks for itself.
              </h2>
            </div>
            <Link href='/portfolio' className='btn-outline'>
              View All Work
            </Link>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                categoryLabel: "Web Development",
                title: "Local Search Ally Website",
                desc: "Built this site from scratch using Next.js 15 — documented as a live case study.",
                tags: ["Next.js", "Vercel", "MDX"],
                result: "Live at localsearchally.com",
                link: "/blog/how-i-built-this-website",
                live: true,
              },
            ].map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <div
                  className='card'
                  style={{
                    borderTop: project.live
                      ? "3px solid var(--carolina)"
                      : "1px solid var(--border)",
                    opacity: project.live ? 1 : 0.7,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <p
                        style={{
                          color: project.live
                            ? "var(--carolina)"
                            : "var(--muted)",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: "bold",
                          margin: 0,
                        }}
                      >
                        {project.categoryLabel}
                      </p>
                      <span
                        style={{
                          backgroundColor: project.live
                            ? "rgba(123,175,212,0.15)"
                            : "rgba(1,33,105,0.3)",
                          border: `1px solid ${project.live ? "var(--carolina)" : "var(--duke)"}`,
                          color: project.live
                            ? "var(--carolina)"
                            : "var(--muted)",
                          fontSize: "0.7rem",
                          padding: "0.2rem 0.65rem",
                          borderRadius: "100px",
                          fontWeight: "bold",
                        }}
                      >
                        {project.live ? "Live" : "Coming Soon"}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        marginBottom: "0.75rem",
                        color: "var(--text)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.9rem",
                        lineHeight: 1.8,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {project.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {project.tags.map((tag) => (
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
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        color: project.live
                          ? "var(--carolina)"
                          : "var(--muted)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        margin: 0,
                      }}
                    >
                      {project.result}
                    </p>
                    {project.live && (
                      <Link
                        href={project.link}
                        style={{
                          color: "var(--carolina)",
                          fontSize: "0.85rem",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Read more →
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section
        style={{ borderTop: "1px solid var(--border)", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <p
              style={{
                color: "var(--carolina)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "1rem",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Common questions from NWA contractors.
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                maxWidth: "560px",
              }}
            >
              Straightforward answers — no jargon, no runaround.
            </p>
          </Reveal>
          <Reveal>
            <FAQSection limit={5} />
          </Reveal>
          <Reveal style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href='/services#faq' className='btn-outline'>
              View All FAQs on Services Page
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
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
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: "800",
              marginBottom: "1.25rem",
            }}
          >
            Let's have an honest conversation.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              maxWidth: "560px",
              margin: "0 auto 3rem",
              lineHeight: 1.9,
            }}
          >
            Tell me about your business. I'll look at your online presence and
            give you my honest take on where you stand — even if that means I'm
            not the right fit.
          </p>
          <CTAForm />
        </Reveal>
      </section>
    </>
  );
}
