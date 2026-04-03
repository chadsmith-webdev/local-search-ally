"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function ServicesAuditCTA() {
  return (
    <section
      className="relative"
      style={{
        background: "linear-gradient(135deg, #0f1a26 0%, #0a0a0a 60%)",
        paddingTop: "var(--section-spacing)",
        paddingBottom: "var(--section-spacing)",
        borderTop: "1px solid #1e1e1e",
      }}
      aria-labelledby="audit-cta-heading"
    >
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "1.75rem" }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
              Not Sure Where to Start
            </span>
          </motion.div>

          <motion.h2
            id="audit-cta-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Run the free audit. It'll tell you.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#b0b0b0] font-sans leading-[1.7]"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
          >
            Enter your business name, trade, and city. In 90 seconds you'll get scored results across seven areas — GBP, reviews, website, technical health, citations, backlinks, and how you compare to the top three competitors in your area right now.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#888888] font-sans leading-[1.7]"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
          >
            The first four sections are yours immediately. The full action plan comes with the email report.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-start" }}>
            <Link
              href="/audit"
              style={{ padding: "1.25rem 2.75rem" }}
              className="inline-flex items-center justify-center bg-[#7bafd4] text-[#0a1118] font-bold rounded-lg text-[1rem] hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
            >
              Run Your Free Audit →
            </Link>
            <p className="font-mono text-[0.65rem] text-[#888888] tracking-[0.1em]">
              90 seconds. Scored results. No email needed.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
