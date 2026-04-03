"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// ─── Variant helpers ──────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    // target numeric value, prefix/suffix for display, static fallback
    numericValue: 97,
    prefix: "",
    suffix: "%",
    stat:  "97%",
    label: "of homeowners search Google first",
    body:  "Before they ask a neighbor. Before they open Facebook. Google is the first call — and if you're not there, you're not in the running.",
  },
  {
    // "#1" is non-numeric — keep static, still gets the tilt treatment
    numericValue: null,
    prefix: "#",
    suffix: "",
    stat:  "#1",
    label: "position gets 10× the clicks of position #10",
    body:  "Ranking matters more than most trades realize. Being on page two is the same as not ranking at all — no homeowner scrolls that far.",
  },
  {
    numericValue: 78,
    prefix: "",
    suffix: "%",
    stat:  "78%",
    label: "of local mobile searches end in a purchase",
    body:  "These are ready-to-hire homeowners, not browsers. When they search \u201cHVAC repair Bentonville,\u201d they\u2019re already holding the phone.",
  },
];

// ─── Animated counter ─────────────────────────────────────────────────────────
// Uses Framer Motion's spring + useMotionValue so the count eases in naturally
// when the card enters the viewport. Falls back to the static string for
// non-numeric values (like "#1").

function AnimatedStat({ numericValue, prefix, suffix, staticFallback, inView }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (numericValue === null) return;
    if (inView) motionValue.set(numericValue);
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    if (numericValue === null) return;
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v).toString()));
    return unsub;
  }, [spring, numericValue]);

  if (numericValue === null) return <>{staticFallback}</>;
  return <>{prefix}{display}{suffix}</>;
}

// ─── 3D tilt card ─────────────────────────────────────────────────────────────
// Pure CSS perspective transform — no WebGL, no runtime cost.
// On mobile / touch, the tilt is intentionally skipped (no hover state).

function TiltCard({ children, style, className }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5; // -0.5 → 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transition: "transform 0.18s cubic-bezier(0.23, 1, 0.32, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

// ─── Pain-point card ──────────────────────────────────────────────────────────

function PainCard({ point }) {
  const { numericValue, prefix, suffix, stat, label, body } = point;
  const cardRef = useRef(null);
  // Fire the counter as soon as the card is ~80px into the viewport
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div key={stat + label} variants={fadeUp}>
      <TiltCard
        ref={cardRef}
        style={{
          background: "#141414",
          border: "1px solid #1e1e1e",
          borderRadius: "12px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          height: "100%",
        }}
      >
        {/* Stat — animated counter or static */}
        <div
          ref={cardRef}
          className="font-mono font-bold text-[#7bafd4]"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1 }}
        >
          <AnimatedStat
            numericValue={numericValue}
            prefix={prefix}
            suffix={suffix}
            staticFallback={stat}
            inView={inView}
          />
        </div>

        {/* Label */}
        <div
          className="font-sans font-semibold text-[#f0f0f0]"
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.4 }}
        >
          {label}
        </div>

        {/* Body */}
        <p className="text-[#888888] font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>
          {body}
        </p>
      </TiltCard>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProblemFrame() {
  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
      aria-labelledby="problem-heading"
    >
      {/* Subtle top separator */}
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
          style={{ maxWidth: "760px", marginBottom: "4rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
              The Problem
            </span>
          </motion.div>

          <motion.h2
            id="problem-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Most NWA trades do great work.{" "}
            <span className="text-[#7bafd4]">Homeowners just can't find them.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#b0b0b0] leading-[1.7] font-sans font-medium"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
          >
            You built your reputation on referrals. That's real. But in NWA,
            the next job is more likely to come from a homeowner who searched
            Google at 9pm than from a neighbor's recommendation. If your name
            doesn't come up, that job goes to someone else — often someone
            with less experience and worse reviews.
          </motion.p>
        </motion.div>

        {/* ── Pain point cards — stagger wrapper + individual tilt+counter cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {PAIN_POINTS.map((point) => (
            <PainCard key={point.stat + point.label} point={point} />
          ))}
        </motion.div>

        {/* ── Closing tension line ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-sans font-medium text-[#888888] text-center"
          style={{ marginTop: "3.5rem", fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
        >
          The good news: most NWA trades haven't fixed this yet.{" "}
          <span className="text-[#f0f0f0]">The ones who do, pull ahead fast.</span>
        </motion.p>
      </div>
    </section>
  );
}
