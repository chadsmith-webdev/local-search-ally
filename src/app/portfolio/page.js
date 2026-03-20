"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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

const categories = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "Local SEO", value: "seo" },
  { label: "GBP Optimization", value: "gbp" },
  { label: "SEO Audits", value: "audit" },
];

const projects = [
  {
    category: "web",
    categoryLabel: "Web Development",
    title: "Local Search Ally Website",
    desc: "Built this site from scratch using Next.js 15, Vercel, and MDX — documented as a live case study showing exactly how a contractor website should be built.",
    tags: ["Next.js", "Vercel", "MDX", "Local SEO"],
    result: "Live at localsearchally.com",
    link: "/blog/how-i-built-this-website",
    linkLabel: "Read the Case Study",
    live: true,
  },
];

export default function Portfolio() {
 const router = useRouter();
const [active, setActive] = useState("all");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");
  if (filter) setActive(filter);
}, []);

function handleFilter(value) {
  setActive(value);
  const url = value === "all" ? "/portfolio" : `/portfolio?filter=${value}`;
  router.replace(url, { scroll: false });
}

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .portfolio-card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s, transform 0.3s;
        }
        .portfolio-card:hover { border-color: var(--carolina); transform: translateY(-4px); }
        .filter-btn {
          background: none;
          border: 1px solid var(--duke);
          color: var(--muted);
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s;
          font-family: var(--font-satoshi);
        }
        .filter-btn:hover { border-color: var(--carolina); color: var(--carolina); }
        .filter-btn.active { background-color: var(--carolina); border-color: var(--carolina); color: #000; font-weight: bold; }
        @media (max-width: 768px) {
          .hero-section { padding: 5rem 1.5rem 4rem !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
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
            Portfolio
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Real work.{" "}
            <span style={{ color: "var(--carolina)" }}>Real results.</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px" }}>
            Every project here is documented honestly — what the challenge was, what we did, and what the outcome was. No vanity metrics, no fabricated screenshots.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Filter buttons */}
        <Reveal>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {categories.map((cat) => (
  <button
    key={cat.value}
    onClick={() => handleFilter(cat.value)}
    className={`filter-btn${active === cat.value ? " active" : ""}`}
  >
    {cat.label}
  </button>
))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <div className="portfolio-card" style={{
                borderTop: project.live ? "3px solid var(--carolina)" : "1px solid var(--duke)",
                opacity: project.live ? 1 : 0.7,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <p style={{
                      color: project.live ? "var(--carolina)" : "var(--muted)",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: "bold",
                      margin: 0,
                    }}>
                      {project.categoryLabel}
                    </p>
                    <span style={{
                      backgroundColor: project.live ? "rgba(123,175,212,0.15)" : "rgba(1,33,105,0.3)",
                      border: `1px solid ${project.live ? "var(--carolina)" : "var(--duke)"}`,
                      color: project.live ? "var(--carolina)" : "var(--muted)",
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "100px",
                      fontWeight: "bold",
                    }}>
                      {project.live ? "Live" : "Coming Soon"}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--text)" }}>{project.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>{project.desc}</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                    {project.tags.map((tag) => (
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
                <div style={{ borderTop: "1px solid var(--duke)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ color: project.live ? "var(--carolina)" : "var(--muted)", fontSize: "0.85rem", fontWeight: "600", margin: 0 }}>
                    {project.result}
                  </p>
                  {project.live && project.link && (
                    <Link href={project.link} style={{
                      color: "var(--carolina)",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}>
                      {project.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
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
            Want to be the next case study?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.9 }}>
            I'm actively taking on new clients and documenting every engagement. Let's talk about your business.
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

