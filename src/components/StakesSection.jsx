"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./StakesSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const TIERS = [
  {
    num: "8.5B",
    label: "Daily Google Searches",
    sub: "Every day, people turn to Google for answers.",
    width: "100%",
    active: false,
  },
  {
    num: "3.91B",
    pct: "46%",
    label: "Have Local Intent",
    sub: "Nearly half are searching for a business or service near them.",
    width: "76%",
    active: false,
  },
  {
    num: "3.12B",
    pct: "80%",
    label: "Take Action Within 24 Hours",
    sub: "Local searchers are ready to buy. They call, visit, or book — today.",
    width: "54%",
    active: true,
  },
];

export default function StakesSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>The Math of Local Search</span>
          <h2 className={styles.h2}>
            The numbers behind why{" "}
            <br />
            visibility is everything.
          </h2>
          <p className={styles.lead}>
            This isn&rsquo;t abstract marketing. It&rsquo;s what&rsquo;s
            happening right now — in Rogers, Bentonville, Fayetteville, and
            every city in NWA.
          </p>
        </motion.div>

        {/* Funnel */}
        <motion.div className={styles.funnel} variants={container}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.label}
              className={styles.tierWrap}
              style={{ width: tier.width }}
              variants={fadeUp}
            >
              <div
                className={`${styles.tierBlock} ${tier.active ? styles.tierActive : ""}`}
              >
                <div className={styles.tierLeft}>
                  <span className={styles.tierNum}>{tier.num}</span>
                  {tier.pct && (
                    <span className={styles.tierPct}>{tier.pct}</span>
                  )}
                </div>
                <div className={styles.tierRight}>
                  <p className={styles.tierLabel}>{tier.label}</p>
                  <p className={styles.tierSub}>{tier.sub}</p>
                </div>
              </div>
              {i < TIERS.length - 1 && (
                <div className={styles.connector}>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 1v14M3 11l5 6 5-6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative callout */}
        <motion.div className={styles.bottom} variants={fadeUp}>
          <p className={styles.bottomText}>
            For an HVAC company in Rogers or a plumber in Bentonville, the
            difference between a busy schedule and a quiet phone isn&rsquo;t
            the quality of your work —{" "}
            <strong>it&rsquo;s whether you show up when they search.</strong>
          </p>
          <Link href="/audit" className={styles.cta}>
            See where you stand
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
