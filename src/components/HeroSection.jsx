"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
          <span className={styles.eyebrow}>LOCAL SEO · NORTHWEST ARKANSAS</span>

          {/* H1 is outside the stagger container — renders on first paint for LCP */}
          <h1 className={styles.h1}>
            The Map Pack has 3 spots.<br />
            <em>Your competitor</em> has one.<br />
            Do you?
          </h1>

          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
          >
            <motion.p variants={fadeUp} className={styles.subhead}>
              Every day, homeowners in Rogers, Bentonville, and Fayetteville
              search for an HVAC company, plumber, or roofer. 80% of those calls
              go to whoever ranks in the top 3. If that&rsquo;s not you,
              it&rsquo;s your competitor — and you&rsquo;ll never see those calls.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.ctas}>
              <Link
                href={process.env.NEXT_PUBLIC_AUDIT_URL}
                className={styles.btnPrimary}
              >
                Run Your Free Audit →
              </Link>
              <Link href='#how-it-works' className={styles.btnSecondary}>
                How it works ↓
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className={styles.trust}>
              No contracts · No setup fees · No agency markup
            </motion.p>

            {/* AEO: 50-word product overview — always in DOM for crawler extraction */}
            <motion.p variants={fadeUp} className={styles.overview}>
              Local Search Ally is a one-person local SEO service in Siloam
              Springs, AR, helping NWA home service trades — HVAC, plumbing,
              roofing, electrical, and remodeling — get found on Google and into
              the Map Pack. Starts at $497/month, month-to-month, no contracts.{" "}
              <time dateTime='2026-05-03'>Last updated: May 2026.</time>
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
          <div className={styles.imageWrap}>
            <Image
              src='/images/hero-map-pack-mockup.png'
              alt='Google Map Pack showing 3 competitor HVAC contractors in Rogers AR — your position not found'
              width={520}
              height={520}
              priority
              unoptimized
              className={styles.mapPackImg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
