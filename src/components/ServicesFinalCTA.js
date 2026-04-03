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

export default function ServicesFinalCTA() {
  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
      aria-labelledby="final-cta-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #2E3A4D 30%, #2E3A4D 70%, transparent)" }}
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
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "flex-start", maxWidth: "720px" }}
        >
          <motion.h2
            id="final-cta-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            You built the skills.{" "}
            <span className="text-[#7bafd4]">I'll make sure people can find them.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}
          >
            <Link
              href="/audit"
              style={{ padding: "1.25rem 2.75rem" }}
              className="inline-flex items-center justify-center bg-[#7bafd4] text-[#0a1118] font-bold rounded-lg text-[1rem] hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
            >
              Run Your Free Audit →
            </Link>

            <Link
              href="/contact"
              style={{ padding: "1.25rem 2.25rem" }}
              className="inline-flex items-center justify-center bg-transparent border border-[#1e1e1e] text-[#f0f0f0] font-semibold rounded-lg text-[1rem] hover:border-[#7bafd4] hover:text-[#7bafd4] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
            >
              Let's Talk — It's Free →
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-mono text-[#888888] tracking-[0.1em]"
            style={{ fontSize: "0.65rem" }}
          >
            No pitch. No pressure.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
