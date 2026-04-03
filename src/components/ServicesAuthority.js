"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// Only approved stats from CLAUDE.md — never fabricated

const CITATIONS = [
  {
    quote: "97% of consumers use Google to evaluate local businesses before making a purchase decision.",
    source: "BrightLocal Local Consumer Review Survey",
    sourceShort: "BrightLocal",
  },
  {
    quote: "28% of all searches for something nearby result in a purchase.",
    source: "Think With Google",
    sourceShort: "Think With Google",
  },
  {
    quote: "78% of local mobile searches result in an offline purchase.",
    source: "Safari Digital / Think With Google",
    sourceShort: "Think With Google",
  },
];

const DEMOS = [
  {
    trade: "Plumbing",
    description: "Emergency and maintenance calls from local search",
    href: "/portfolio",
    icon: "🔧",
  },
  {
    trade: "HVAC",
    description: "Seasonal demand capture with clear booking paths",
    href: "/portfolio",
    icon: "❄️",
  },
  {
    trade: "Electrical",
    description: "Trust-building for higher-ticket panel and wiring jobs",
    href: "/portfolio",
    icon: "⚡",
  },
];

// ─── Citation card ────────────────────────────────────────────────────────────

function CitationCard({ item }) {
  return (
    <motion.blockquote
      variants={fadeUp}
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        paddingLeft: "1.25rem",
        borderLeft: "2px solid #7bafd4",
      }}
    >
      <p
        className="font-sans font-medium text-[#f0f0f0] leading-[1.6]"
        style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>
      <footer>
        <cite
          className="font-mono text-[#555555] not-italic"
          style={{ fontSize: "0.62rem", letterSpacing: "0.12em" }}
        >
          — {item.source}
        </cite>
      </footer>
    </motion.blockquote>
  );
}

// ─── Demo site card ───────────────────────────────────────────────────────────

function DemoCard({ demo }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={demo.href}
        style={{
          display: "block",
          background: "#141414",
          border: "1px solid #1e1e1e",
          borderRadius: "10px",
          padding: "1.25rem 1.5rem",
          textDecoration: "none",
          transition: "border-color 0.2s ease, background 0.2s ease",
        }}
        className="group hover:border-[#7bafd4] hover:bg-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          <span style={{ fontSize: "1.25rem", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            {demo.icon}
          </span>
          <div>
            <div
              className="font-sans font-semibold text-[#f0f0f0] group-hover:text-[#7bafd4] transition-colors"
              style={{ fontSize: "0.95rem" }}
            >
              {demo.trade}
            </div>
            <div
              className="font-sans text-[#888888]"
              style={{ fontSize: "0.8rem", marginTop: "0.2rem", lineHeight: 1.4 }}
            >
              {demo.description}
            </div>
          </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{ marginLeft: "auto", flexShrink: 0, marginTop: "3px", opacity: 0.4 }}
            className="group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <path d="M1 6h10M6 1l5 5-5 5" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ServicesAuthority() {
  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
      aria-labelledby="authority-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)" }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        {/* ── Section header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: "680px", marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
              The Evidence
            </span>
          </motion.div>

          <motion.h2
            id="authority-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Here's what the research says.{" "}
            <span className="text-[#7bafd4]">Here's what I build.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-[#888888] leading-[1.7]"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
          >
            I'm not going to claim results I haven't achieved yet. What I can show you
            is the research behind the approach and the build quality behind the work.
          </motion.p>
        </motion.div>

        {/* ── Two-column body ── */}
        <div
          style={{ display: "grid", gap: "4rem", alignItems: "start" }}
          className="authority-grid"
        >
          {/* Left — cited data */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[#b0b0b0] leading-[1.7]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
            >
              These numbers come from BrightLocal and Think With Google — two of the
              most-cited local search research sources in the industry. I cite them
              because they're accurate, not because they're impressive.
            </motion.p>

            {CITATIONS.map((item) => (
              <CitationCard key={item.sourceShort + item.quote.slice(0, 20)} item={item} />
            ))}
          </motion.div>

          {/* Right — demo sites */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <motion.div variants={fadeUp}>
              <h3
                className="font-serif font-bold text-[#f8f9fa] leading-[1.15] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", marginBottom: "0.75rem" }}
              >
                Want to see the build quality?
              </h3>
              <p
                className="font-sans text-[#b0b0b0] leading-[1.7]"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
              >
                The portfolio has three live demo sites — built the same way I'd build
                yours. Same structure, same schema markup, same mobile-first approach.
                Deployed on real domains so you can inspect them.
              </p>
            </motion.div>

            {/* Demo cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {DEMOS.map((demo) => (
                <DemoCard key={demo.trade} demo={demo} />
              ))}
            </div>

            {/* Portfolio CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-sans font-semibold text-[0.875rem] text-[#7bafd4] hover:text-[#f0f0f0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
              >
                View full portfolio →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .authority-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
