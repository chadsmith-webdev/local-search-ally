"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import SearchFunnel from "./SearchFunnel";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
        <motion.div
          className={styles.content}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            NWA Contractor SEO
          </motion.span>

          <motion.h1 variants={fadeUpNoOpacity} className={styles.h1}>
            Is invisibility hiding you from{" "}
            <em>3.12 billion</em> daily local searches?
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            46% of all Google searches are looking for a local pro nearby. If
            you&rsquo;re not in the Map Pack, those calls are going to someone
            else — and you&rsquo;ll never know what you missed.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.ctas}>
            <Link href={process.env.NEXT_PUBLIC_AUDIT_URL} className={styles.btnPrimary}>
              See Where You Stand — It&rsquo;s Free
            </Link>
            <Link href='#how-it-works' className={styles.btnSecondary}>
              How it works →
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.trust}>
            No contracts. No retainers. Just honest local SEO.
          </motion.p>
        </motion.div>

        {/* Right: search funnel graphic */}
        <div className={styles.sceneCol} aria-hidden='true'>
          <SearchFunnel />
        </div>
      </div>
    </section>
  );
}
