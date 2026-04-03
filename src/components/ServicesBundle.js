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

const COMMITMENTS = [
  "No contracts — if I stop delivering, you walk. No lock-in, no notice period.",
  "You'll always know what I'm doing. Monthly reports in plain English. If something isn't working, I'll tell you before you've been paying for three months wondering why nothing moved.",
  "If your situation needs something outside my skill set, I'll say so upfront and point you to who can actually help. I'd rather lose the work than do it badly.",
];

export default function ServicesBundle() {
  return (
    <>
      {/* ── These work better together ─────────────────────────────────────── */}
      <section
        className="relative"
        style={{
          background: "#141414",
          paddingTop: "var(--section-spacing)",
          paddingBottom: "var(--section-spacing)",
        }}
        aria-labelledby="bundle-heading"
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
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
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="bundle-grid"
          >
            {/* Left — heading + body */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded self-start">
                The Full Picture
              </span>

              <h2
                id="bundle-heading"
                className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
              >
                These work better together than separately.
              </h2>

              <p className="text-[#b0b0b0] font-sans leading-[1.7]" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
                Your GBP, website, citations, and reviews aren't four different things — they're the same ranking problem from four angles. A strong GBP with inconsistent citations holds you back. Rankings without a site that converts waste the position. Reviews without a process to gather them stay stuck.
              </p>

              <p className="text-[#b0b0b0] font-sans leading-[1.7]" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
                I'm one person. When I'm working on more than one of these for the same business, the site is built to support the SEO, and the GBP work feeds into both. Nothing falls through a gap between services, because there's only one person responsible.
              </p>

              <p className="text-[#b0b0b0] font-sans leading-[1.7]" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
                If you're not sure which combination makes sense right now, the free audit will show you which areas are dragging you down most — that's usually where to start.
              </p>

              <div style={{ marginTop: "0.5rem" }}>
                <Link
                  href="/audit"
                  style={{ padding: "1rem 2.25rem" }}
                  className="inline-flex items-center justify-center bg-[#7bafd4] text-[#0a1118] font-bold rounded-lg text-[0.9rem] hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_24px_rgba(123,175,212,0.25)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
                >
                  Run Your Free Audit →
                </Link>
                <p className="font-mono text-[0.65rem] text-[#888888] mt-2 tracking-[0.1em]">
                  90 seconds. Scored results. No email needed.
                </p>
              </div>
            </motion.div>

            {/* Right — visual breakdown of the four services connecting */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "#0a0a0a",
                border: "1px solid #1e1e1e",
                borderRadius: "16px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                { label: "Local SEO", note: "Rankings, citations, on-page" },
                { label: "Web Design & Development", note: "Converts the ranking into a call" },
                { label: "Google Business Profile", note: "The Map Pack anchor" },
                { label: "Reputation Management", note: "Seals the trust before they call" },
              ].map(({ label, note }, i, arr) => (
                <div key={label}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#7bafd4",
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-sans font-semibold text-[#f0f0f0]" style={{ fontSize: "0.95rem" }}>
                        {label}
                      </div>
                      <div className="font-sans text-[#888888]" style={{ fontSize: "0.82rem", marginTop: "2px" }}>
                        {note}
                      </div>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        height: "1.25rem",
                        background: "#1e1e1e",
                        marginLeft: "3.5px",
                        marginTop: "0.5rem",
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .bundle-grid {
              grid-template-columns: 1.1fr 0.9fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── What stays the same ────────────────────────────────────────────── */}
      <section
        className="relative bg-[#0a0a0a]"
        style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
        aria-labelledby="commitments-heading"
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
            style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
                Regardless of What You Choose
              </span>
            </motion.div>

            <motion.h2
              id="commitments-heading"
              variants={fadeUp}
              className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              A few things that don't change.
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {COMMITMENTS.map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    padding: "1.5rem",
                    background: "#141414",
                    border: "1px solid #1e1e1e",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#7bafd4",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <p className="text-[#b0b0b0] font-sans leading-[1.7]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
