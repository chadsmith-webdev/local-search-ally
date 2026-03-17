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

export default function BlogClient({ posts }) {
  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .blog-card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 2rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s, transform 0.3s;
        }
        .blog-card:hover {
          border-color: var(--carolina);
          transform: translateY(-4px);
        }
          @media (max-width: 768px) {
  .hero-section { padding: 5rem 1.5rem 4rem !important; }
  .blog-grid { grid-template-columns: 1fr !important; }
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
            The Blog
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            What I'm learning.{" "}
            <span style={{ color: "var(--carolina)" }}>What I'm sharing.</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px" }}>
            Practical local SEO tips, web development insights, and honest case studies — written for NWA contractors who want to grow online.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        {posts.length === 0 ? (
          <Reveal>
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--duke)",
              borderRadius: "10px",
            }}>
              <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>No posts yet — check back soon.</p>
              <Link href="/contact" style={{ color: "var(--carolina)", textDecoration: "none", fontWeight: "bold" }}>
                Get notified when I publish →
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  {post.image && (
                    <div style={{
                      borderRadius: "6px",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      aspectRatio: "16/9",
                      backgroundColor: "var(--duke)",
                    }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginBottom: "0.75rem" }}>
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    <h2 style={{ color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.5, marginBottom: "0.75rem", flex: 1 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                      {post.description}
                    </p>
                    {post.tags && (
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                        {post.tags.map((tag) => (
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
                    )}
                    <span style={{ color: "var(--carolina)", fontSize: "0.85rem", fontWeight: "bold" }}>
                      Read more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
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
            Ready to get found online?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.9 }}>
            Reading about SEO is a great start. Let's talk about applying it to your business.
          </p>
          <Link href="/contact" style={{
            backgroundColor: "var(--carolina)",
            color: "#000",
            padding: "1rem 2.5rem",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.05rem",
            display: "inline-block",
          }}>
            Let's Talk — It's Free
          </Link>
        </Reveal>
      </section>
    </>
  );
}