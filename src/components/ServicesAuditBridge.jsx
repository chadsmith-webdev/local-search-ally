"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesAuditBridge.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesAuditBridge() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.card}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Decorative corner accent */}
        <div className={styles.cornerTL} aria-hidden='true' />
        <div className={styles.cornerBR} aria-hidden='true' />

        <motion.span variants={fadeUp} className={styles.eyebrow}>
          Start Here
        </motion.span>

        <motion.h2 variants={fadeUp} className={styles.h2}>
          See where you stand in under 2 minutes
        </motion.h2>

        <motion.p variants={fadeUp} className={styles.body}>
          Not sure which of these you need first? Run the free audit. Enter your
          business name and city, and I&rsquo;ll show you your current local
          visibility score, what your Google Business Profile is missing, and
          which gaps are costing you the most calls.
        </motion.p>

        <motion.p variants={fadeUp} className={styles.social}>
          Most people find at least two things they didn&rsquo;t know were
          wrong.
        </motion.p>

        <motion.div variants={fadeUp} className={styles.ctaWrap}>
          <Link href={process.env.NEXT_PUBLIC_AUDIT_URL || "https://audit.localsearchally.com"} className={styles.cta}>
            Run Your Free SEO Audit →
          </Link>
          <p className={styles.zeroFriction}>
            Takes about 90 seconds &middot; No email required &middot; No pitch
            at the end
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
