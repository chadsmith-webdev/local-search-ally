"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Steps — exact framing from CLAUDE.md ────────────────────────────────────

const STEPS = [
  {
    number: "01",
    eyebrow: "Audit",
    heading: "Run the free audit. See exactly where you stand.",
    body: "Enter your business name, trade, and city. In 90 seconds you get scored results across your GBP, reviews, website, citations, and how your top three local competitors compare to you right now. No email required to start.",
    cta: { label: "Run Your Free Audit →", href: "/audit" },
  },
  {
    number: "02",
    eyebrow: "Fix Priority Gaps",
    heading: "I tell you which problems are costing you the most calls.",
    body: "Not a 12-item checklist. Not a generic playbook. Based on your audit scores and your trade, I identify the one or two things that matter most — local relevance, GBP health, on-page clarity, or citation accuracy — and start there. That's where the calls come from.",
    cta: null,
  },
  {
    number: "03",
    eyebrow: "Grow and Track",
    heading: "Rankings move. You see exactly what changed and why.",
    body: "Monthly reports in plain English — what improved, what's next, and what I'm working on. No hiding behind impressions. You track calls and rankings. If something isn't working, I'll tell you before you've been paying for it for three months wondering why nothing moved.",
    cta: null,
  },
];

// ─── Step card ────────────────────────────────────────────────────────────────

function Step({ step, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
        style={{
          display: "grid",
          gap: "2rem",
          alignItems: "start",
        }}
        className="step-inner"
      >
        {/* Step number + eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          {/* Numbered bubble */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid #1e1e1e",
              background: "#141414",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <span
              className="font-mono font-bold text-[#7bafd4]"
              style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
            >
              {step.number}
            </span>
          </div>

          {/* Eyebrow */}
          <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.08)] px-3 py-1 rounded">
            {step.eyebrow}
          </span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3
            className="font-serif font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}
          >
            {step.heading}
          </h3>
          <p
            className="font-sans text-[#b0b0b0] leading-[1.7]"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
          >
            {step.body}
          </p>
          {step.cta && (
            <Link
              href={step.cta.href}
              className="inline-flex items-center font-sans font-semibold text-[#7bafd4] text-[0.9rem] hover:text-[#f0f0f0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
            >
              {step.cta.label}
            </Link>
          )}
        </div>
      </motion.div>

      {/* Animated connector line between steps */}
      {!isLast && (
        <div
          style={{
            position: "relative",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            marginTop: "2rem",
          }}
          className="step-connector"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "100%",
              background: "linear-gradient(to bottom, #7bafd4, #1e1e1e)",
              marginLeft: "23px", // aligns with centre of the numbered bubble
            }}
          />
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ServicesHowItWorks() {
  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
      aria-labelledby="how-it-works-heading"
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
          display: "grid",
          gap: "5rem",
          alignItems: "start",
        }}
        className="how-it-works-layout"
      >
        {/* ── Left: header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          className="how-it-works-header"
        >
          <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded w-fit">
            The Process
          </span>

          <h2
            id="how-it-works-heading"
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Three steps.{" "}
            <span className="text-[#7bafd4]">No guesswork.</span>
          </h2>

          <p
            className="font-sans text-[#b0b0b0] leading-[1.7]"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", maxWidth: "480px" }}
          >
            Most agencies make the process feel complicated. It isn't. You start
            with a free audit that takes 90 seconds, and everything else follows
            from what that audit finds.
          </p>
        </motion.div>

        {/* ── Right: steps ── */}
        <div style={{ display: "flex", flexDirection: "column" }} className="how-it-works-steps">
          {STEPS.map((step, i) => (
            <Step key={step.number} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>

      {/* Responsive 2-col at ≥900px */}
      <style>{`
        @media (min-width: 900px) {
          .how-it-works-layout {
            grid-template-columns: 1fr 1.2fr !important;
            gap: 6rem !important;
          }
        }
        @media (max-width: 599px) {
          .step-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
