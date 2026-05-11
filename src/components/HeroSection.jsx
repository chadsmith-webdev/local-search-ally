"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MapPackMockup from "./MapPackMockup";
import styles from "./HeroSection.module.css";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// h1 animates y only — opacity stays 1 so it's visible on first paint (LCP)
const fadeUpNoOpacity = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden='true' />

      <div className={styles.inner}>
        {/* Left: content */}
        <div className={styles.content}>
          {/* Eyebrow sits above H1 — static so it appears in correct order */}
          <span className={styles.eyebrow}>
            MAP PACK SPECIALIST · NORTHWEST ARKANSAS
          </span>

          {/* H1 is outside the stagger container — renders on first paint for LCP */}
          <h1 className={styles.h1}>
            Local SEO for NWA <em>Home Service Contractors</em>
          </h1>

          <motion.div variants={container} initial='hidden' animate='visible'>
            <motion.p variants={fadeUp} className={styles.subhead}>
              Right now, someone in Northwest Arkansas is searching for your
              exact trade. The question isn&rsquo;t whether they find a
              contractor &mdash; they will. The question is whether it&rsquo;s
              you. The audit tells you in 90 seconds.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.ctas}>
              <Link
                href={process.env.NEXT_PUBLIC_AUDIT_URL}
                className={styles.btnPrimary}
              >
                Run Your Free Audit →
              </Link>
              <Link href='/contact' className={styles.btnSecondary}>
                Already know you need help? Book a call →
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className={styles.trust}>
              No contracts · No setup fees · No agency markup
            </motion.p>

            {/* AEO: 50-word product overview — always in DOM for crawler extraction */}
            <motion.p variants={fadeUp} className={styles.overview}>
              Local Search Ally is a one-person local SEO service in Siloam
              Springs, AR, helping NWA home service trades get found on Google
              and into the Map Pack. DIY tools start at $49/month. Done-for-you
              managed services start at $497/month — scoped on the first call.
              Month-to-month, no contracts.{" "}
              <time dateTime='2026-05-11'>Last updated: May 2026.</time>
            </motion.p>
          </motion.div>
        </div>

        {/* Right: Map Pack diagnostic image */}
        <motion.div
          className={styles.sceneCol}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <MapPackMockup />
        </motion.div>
      </div>
    </section>
  );
}
