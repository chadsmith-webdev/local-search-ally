"use client";

import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import styles from "./HeroSection.module.css";

// Load R3F canvas only on client, never SSR
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className={styles.canvasFallback} />,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <section className={styles.hero} aria-label="Hero">
        {/* ── 3D Canvas (desktop only via CSS) ── */}
        <div className={styles.canvasWrap} aria-hidden="true">
          <Suspense fallback={<div className={styles.canvasFallback} />}>
            <HeroScene />
          </Suspense>
        </div>

        {/* ── Atmospheric overlays ── */}
        <div className={styles.vignette} aria-hidden="true" />
        {/* Carolina blue ambient bloom — top right */}
        <div className={styles.bloom} aria-hidden="true" />

      {/* ── Content ── */}
      <div className={styles.inner}>
        <span className={styles.eyebrow}>
          MAP PACK SPECIALIST · NORTHWEST ARKANSAS
        </span>

        {/* H1 outside stagger container for LCP */}
        <h1 className={styles.h1}>
          Local SEO for <em>Home Service Contractors</em>
        </h1>

        <motion.div
          variants={prefersReduced ? {} : container}
          initial="hidden"
          animate="visible"
          className={styles.textBlock}
        >
          <motion.p
            variants={prefersReduced ? {} : fadeUp}
            className={styles.subhead}
          >
            Right now, someone in Northwest Arkansas is searching for your
            exact trade. The question isn&rsquo;t whether they find a
            contractor &mdash; they will. The question is whether it&rsquo;s
            you.
          </motion.p>

          <motion.div
            variants={prefersReduced ? {} : fadeUp}
            className={styles.ctas}
          >
            <Link
              href={process.env.NEXT_PUBLIC_AUDIT_URL || "https://audit.localsearchally.com"}
              className={styles.btnPrimary}
            >
              Run Your Free Audit →
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Book a strategy call →
            </Link>
          </motion.div>

          <motion.p
            variants={prefersReduced ? {} : fadeUp}
            className={styles.trust}
          >
            No contracts · No setup fees · Cancel anytime
          </motion.p>
        </motion.div>

        {/* AEO blurb — always in DOM for crawlers */}
        <p className={styles.overview}>
          Local Search Ally is a one-person local SEO service in Siloam Springs,
          AR, helping NWA home service trades get found on Google and into the
          Map Pack. DIY tools start at $49/month. Done-for-you managed services
          start at $497/month — scoped on the first call. Month-to-month, no
          contracts.{" "}
          <time dateTime="2026-05-12">Last updated: May 2026.</time>
        </p>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
      </section>
      {/* Spacer: reserves 100vh in page flow so sections start below the fold */}
      <div className={styles.heroSpacer} aria-hidden="true" />
    </>
  );
}
