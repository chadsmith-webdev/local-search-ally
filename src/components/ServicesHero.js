"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { heroScrollProgress } from "@/lib/scrollStore";

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
  const sectionRef = useRef(null);

  // Track how far the hero has scrolled out of view (0 = fully visible, 1 = gone)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Write to the shared mutable ref — no re-renders, readable inside R3F useFrame
  useEffect(() => {
    if (reducedMotion) return;
    const unsub = scrollYProgress.on("change", (v) => {
      heroScrollProgress.current = v;
    });
    return unsub;
  }, [scrollYProgress, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
      style={{ paddingTop: "120px", paddingBottom: "8rem" }}
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

      {/* Content — matches Navbar inner div exactly */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
              Local SEO Services for NWA Contractors
            </span>
          </motion.div>

          {/* H1 — 9 words, outcome-focused, leads with the problem */}
          <motion.h1
            id="services-hero-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.02] tracking-[-0.05em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            The right homeowner is already searching.{" "}
            <span className="text-[#7bafd4]">Are they finding you?</span>
          </motion.h1>

          {/* Subhead — 22 words, includes approved stat, "I" language */}
          <motion.p
            variants={fadeUp}
            className="text-[#b0b0b0] leading-[1.6] font-sans font-medium"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", maxWidth: "660px" }}
          >
            97% of homeowners use Google to find a local contractor. I help NWA
            trades be the name they find — and the one they call.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Primary CTA */}
            <div>
              <Link
                href="/audit"
                style={{ padding: "1.25rem 2.75rem" }}
                className="inline-flex items-center justify-center bg-[#7bafd4] text-[#0a1118] font-bold rounded-lg text-[1rem] hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
              >
                Run My Free Audit →
              </Link>
            </div>

            {/* Secondary CTA */}
            <div>
              <Link
                href="/contact"
                className="font-sans text-[0.85rem] text-[#888] hover:text-[#7bafd4] transition-colors"
              >
                or book a free 15-min call →
              </Link>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip — all trust + process items in one scrolling row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-28 left-0 right-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
          {[...Array(2)].map((_, copy) => (
            <div key={copy} style={{ display: "flex", alignItems: "center", gap: "2rem", paddingRight: "2rem" }}>
              {[
                { label: "47 Contractors Audited", accent: true },
                { label: "90-Second Results" },
                { label: "No Email Needed" },
                { label: "Zero Pitch" },
                { label: "Audit → Fix Priority Gaps → Grow & Track", accent: true },
                { label: "No Long-Term Contracts" },
                { label: "NWA Local SEO" },
              ].map(({ label, accent }) => (
                <span
                  key={label}
                  className="font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
                  style={{ color: accent ? "#7bafd4" : "#333" }}
                >
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint — anchored to section bottom, not content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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

      <style>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
