"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./HeroSection.module.css";

const InvisibilityHologram = dynamic(() => import("./InvisibilityHologram"), {
  ssr: false,
});

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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 900px)").matches);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden='true' />

      <div className={styles.inner}>
        {/* Left: content */}
        <div className={styles.content}>
          {/* H1 is outside the stagger container — renders on first paint for LCP */}
          <h1 className={styles.h1}>
            Is invisibility hiding you from <em>3.12 billion</em> daily local
            searches?
          </h1>

          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
          >
            <motion.span variants={fadeUp} className={styles.eyebrow}>
              NWA Contractor SEO
            </motion.span>

            <motion.p variants={fadeUp} className={styles.subhead}>
              46% of all Google searches are looking for a local pro nearby. If
              you&rsquo;re not in the Map Pack, those calls are going to someone
              else — and you&rsquo;ll never know what you missed.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.ctas}>
              <Link
                href={process.env.NEXT_PUBLIC_AUDIT_URL}
                className={styles.btnPrimary}
              >
                See Where You Stand — It&rsquo;s Free
              </Link>
              <Link href='#how-it-works' className={styles.btnSecondary}>
                How it works →
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className={styles.trust}>
              No contracts. No retainers. Just honest local SEO.
            </motion.p>

            {/* AEO: 50-word product overview — always in DOM for crawler extraction */}
            <motion.p variants={fadeUp} className={styles.overview}>
              Local Search Ally is a one-person local SEO and web development
              service in Siloam Springs, AR, helping NWA home service trades —
              HVAC, plumbing, roofing, electrical, and remodeling — get found on
              Google and into the Map Pack. Month-to-month, no contracts.{" "}
              <time dateTime='2026-04-29'>Last updated: April 2026.</time>
            </motion.p>
          </motion.div>
        </div>

        {/* Right: 3D invisibility hologram — desktop only, not imported on mobile */}
        {isDesktop && (
          <motion.div
            className={styles.sceneCol}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <InvisibilityHologram />
          </motion.div>
        )}
      </div>
    </section>
  );
}
