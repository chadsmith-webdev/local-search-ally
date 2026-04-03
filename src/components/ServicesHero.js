"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Lazy-load the R3F canvas — SSR off, no blocking render
const ServicesHeroScene = dynamic(
  () => import("@/components/ServicesHeroScene"),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0a0a0a]" />,
  }
);

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function ServicesHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
      aria-labelledby="services-hero-heading"
    >
      {/* 3D background — decorative, never blocks content interaction */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Suspense fallback={<div className="w-full h-full bg-[#0a0a0a]" />}>
          {!reducedMotion && <ServicesHeroScene />}
        </Suspense>

        {/* Radial gradient vignette — pulls focus to the left-side text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 20% 50%, transparent 0%, #0a0a0a 75%)",
          }}
        />
        {/* Bottom fade — clean transition to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to bottom, transparent, #0a0a0a)",
          }}
        />
      </div>

      {/* Content — matches homepage Container: maxWidth 1400 + --page-gutter */}
      <div
        className="relative z-10 w-full mx-auto py-32 sm:py-40"
        style={{
          maxWidth: 1400,
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "900px" }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.18em] uppercase text-[#888888] mb-5 font-mono"
          >
            Services — NWA Home Service Trades
          </motion.p>

          {/* H1 */}
          <motion.h1
            id="services-hero-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.02] tracking-[-0.05em] text-[#f8f9fa] mb-6"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            You don&apos;t need more marketing.{" "}
            <span className="text-[#7bafd4]">
              You need to show up where people are already looking.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-[#b0b0b0] leading-[1.6] font-sans font-medium mb-10"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", maxWidth: "660px" }}
          >
            Every service I offer is built around one thing: getting your
            business found by people in NWA who are already searching for what
            you do — and making sure they call you, not the next name on the
            list.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-[#7bafd4] hover:bg-[#5a93bc] text-[#0a0a0a] font-semibold text-sm px-6 py-3.5 rounded-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
            >
              Run Your Free Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <p className="text-xs text-[#888888] font-mono tracking-wide">
              90 seconds · scored across 7 areas · no email needed
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-[#888888] opacity-60">
            Scroll
          </span>
          <motion.div
            animate={reducedMotion ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#7bafd4] to-transparent opacity-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
