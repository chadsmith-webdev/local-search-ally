"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────

function useTypewriter(text, speed = 90) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { setDone(true); clearInterval(id); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}

// ─── READING PROGRESS BAR ────────────────────────────────────────────────────

function ReadingProgress() {
  const barRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 1000, background: "rgba(255,255,255,0.04)" }}>
      <div
        ref={barRef}
        style={{
          height: "100%", width: "0%",
          background: "linear-gradient(90deg, #7bafd4, #4d8cb9)",
          boxShadow: "0 0 8px rgba(123,175,212,0.6)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

// ─── TILT CARD ────────────────────────────────────────────────────────────────

function TiltCard({ children, href }) {
  const ref = useRef();

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 4}deg) translateZ(6px)`;
    ref.current.style.borderColor = "rgba(123,175,212,0.28)";
    ref.current.style.background  = "#1a1a1a";
  };

  const onLeave = () => {
    ref.current.style.transform   = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    ref.current.style.borderColor = "rgba(255,255,255,0.08)";
    ref.current.style.background  = "#141414";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        display: "flex", textDecoration: "none",
        background: "#141414", borderRadius: "8px", overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "transform 0.18s ease, border-color 0.15s, background 0.15s",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Link>
  );
}

// ─── BLOG CLIENT ─────────────────────────────────────────────────────────────

export default function BlogClient({ posts }) {
  const { displayed, done } = useTypewriter("Blog", 90);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <ReadingProgress />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(3rem, 8vw, 5rem) clamp(1.25rem, 4vw, 3rem)" }}>

        {/* ── Header ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <m.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#7bafd4",
              fontFamily: "var(--font-mono)", marginBottom: 10,
            }}
          >
            LOCAL SEARCH ALLY — INSIGHTS
          </m.p>

          {/* Typewriter headline */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em",
            color: "#f0f0f0", margin: "0 0 12px",
          }}>
            {displayed}
            <span style={{
              display: "inline-block", width: "2px", height: "0.85em",
              background: "#7bafd4", marginLeft: "3px", verticalAlign: "middle",
              animation: done ? "blink-cursor 1s step-end infinite" : "none",
            }} />
          </h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ color: "#888", fontSize: "0.95rem", fontFamily: "var(--font-ui)", lineHeight: 1.6 }}
          >
            Local SEO tips and contractor marketing strategies.
          </m.p>
        </m.div>

        {/* ── Post grid ── */}
        <style>{`
          .blog-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          @media (min-width: 640px)  { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 1024px) { .blog-grid { grid-template-columns: repeat(3, 1fr); } }
        `}</style>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <m.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <TiltCard href={`/blog/${post.slug}`}>
                <article style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  {/* Feature image */}
                  <div style={{ width: "100%", height: 200, overflow: "hidden", flexShrink: 0, background: "#1a1a1a" }}>
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%",
                        background: "linear-gradient(135deg, rgba(123,175,212,0.08) 0%, rgba(77,140,185,0.04) 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(123,175,212,0.3)", letterSpacing: "0.2em" }}>NO IMAGE</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {post.tags?.slice(0, 2).map(tag => (
                        <span key={tag} style={{
                          fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.12em",
                          textTransform: "uppercase", color: "#7bafd4",
                          background: "rgba(123,175,212,0.12)", borderRadius: 100,
                          padding: "2px 8px", fontFamily: "var(--font-mono)",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: "0.95rem", lineHeight: 1.4, letterSpacing: "-0.01em",
                      color: "#f0f0f0", margin: 0,
                    }}>
                      {post.title}
                    </h2>
                    <p style={{
                      color: "#777", fontSize: "0.78rem", lineHeight: 1.55,
                      margin: 0, fontFamily: "var(--font-ui)",
                      display: "-webkit-box", WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical", overflow: "hidden",
                      flex: 1,
                    }}>
                      {post.description}
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem" }}>
                      <span style={{ fontSize: "0.65rem", color: "#444", fontFamily: "var(--font-mono)" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                      <span style={{ fontSize: "0.65rem", color: "#444", fontFamily: "var(--font-mono)" }}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </m.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 56, background: "#141414", borderRadius: 8,
            padding: "28px 24px", textAlign: "center",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "#f0f0f0", marginBottom: 8 }}>
            Want to see how your business ranks?
          </p>
          <p style={{ color: "#888", fontSize: "0.84rem", fontFamily: "var(--font-ui)", marginBottom: 18 }}>
            Run a free AI-powered local SEO audit — 90 seconds, no account needed.
          </p>
          <Link href="/audit" style={{
            display: "inline-block",
            background: "#7bafd4", color: "#0a1118",
            fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em",
            fontFamily: "var(--font-mono)", padding: "12px 28px",
            borderRadius: 6, textDecoration: "none", cursor: "pointer",
          }}>
            Run Free Audit →
          </Link>
        </m.div>

      </div>

      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
