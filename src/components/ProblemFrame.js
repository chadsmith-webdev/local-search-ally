"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const PAIN_POINTS = [
  {
    stat:  "97%",
    label: "of homeowners search Google first",
    body:  "Before they ask a neighbor. Before they open Facebook. Google is the first call — and if you're not there, you're not in the running.",
  },
  {
    stat:  "#1",
    label: "position gets 10× the clicks of position #10",
    body:  "Ranking matters more than most trades realize. Being on page two is the same as not ranking at all — no homeowner scrolls that far.",
  },
  {
    stat:  "78%",
    label: "of local mobile searches end in a purchase",
    body:  "These are ready-to-hire homeowners, not browsers. When they search \u201cHVAC repair Bentonville,\u201d they\u2019re already holding the phone.",
  },
];

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

        {/* ── Pain point cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PAIN_POINTS.map(({ stat, label, body }) => (
            <motion.div
              key={stat + label}
              variants={fadeUp}
              style={{
                background: "#141414",
                border: "1px solid #1e1e1e",
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Stat */}
              <div
                className="font-mono font-bold text-[#7bafd4]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1 }}
              >
                {stat}
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
            </motion.div>
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
