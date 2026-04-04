"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LocationsHero.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function LocationsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            Service Areas
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            Invisible on Google? <em>You're losing calls to contractors ranking above you.</em>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            Free SEO audit reveals your exact ranking gaps, which competitors are beating you, and your three fastest moves to the Map Pack.
          </motion.p>

          <motion.p variants={fadeUp} className={styles.credibility}>
            <strong>Chad Smith</strong> | 15+ years local SEO | Siloam Springs, AR<br />
            <em>I limit audits to 10 per week—reserve yours below.</em>
          </motion.p>

          <motion.div variants={fadeUp} className={styles.ctas}>
            <Link href="#faq" className={styles.btnPrimary}>
              Get Your Free Audit
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Schedule a Call →
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.trust}>
            No contracts. No pitch. No pressure.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
