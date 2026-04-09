"use client";

import { motion } from "framer-motion";
import styles from "./ResourcesFeatured.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// Funnel tiers shown on the document preview
const tiers = [
  { value: "8.5B", label: "Global searches / day" },
  { value: "3.91B", label: "With local intent" },
  { value: "3.12B", label: "Daily conversions" },
];

export default function ResourcesFeatured() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: document preview */}
          <div className={styles.preview} aria-hidden="true">
            <div className={styles.previewGrid} />

            {/* Corner brackets */}
            <div className={styles.cornerTL} />
            <div className={styles.cornerBR} />

            <div className={styles.previewInner}>
              <span className={styles.previewLabel}>
                Field Report · NWA · 2026
              </span>

              <div className={styles.previewTitle}>
                <span className={styles.previewTitleLine1}>The</span>
                <span className={styles.previewTitleLine2}>Invisibility</span>
                <span className={styles.previewTitleLine3}>Report</span>
              </div>

              <div className={styles.previewFunnel}>
                {tiers.map((tier, i) => (
                  <div key={tier.value} className={styles.previewTier}>
                    <span className={styles.previewTierValue}>{tier.value}</span>
                    <span className={styles.previewTierLabel}>{tier.label}</span>
                    {i < tiers.length - 1 && (
                      <span className={styles.previewArrow}>↓</span>
                    )}
                  </div>
                ))}
              </div>

              <span className={styles.previewByline}>localsearchally.com</span>
            </div>
          </div>

          {/* Right: content */}
          <div className={styles.content}>
            <motion.div variants={fadeUp} className={styles.contentInner}>
              <span className={styles.tag}>Field Report</span>

              <h2 className={styles.h2}>The Invisibility Report</h2>
              <p className={styles.edition}>Northwest Arkansas Edition</p>

              <p className={styles.description}>
                I ran visibility audits on dozens of NWA contractors and
                anonymized what I found. Three patterns keep showing up —
                and most trade owners have no idea they&rsquo;re there. This
                report shows you what they are, what they&rsquo;re costing
                you, and what you can check right now.
              </p>

              <div className={styles.meta}>
                <span>PDF</span>
                <span className={styles.dot} />
                <span>~10 min read</span>
                <span className={styles.dot} />
                <span>Free</span>
              </div>

              {/* Place the finished PDF at public/downloads/invisibility-report.pdf */}
              <a
                href="/downloads/invisibility-report.pdf"
                download
                className={styles.downloadBtn}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 2v8M5 7l3 3 3-3" />
                  <path d="M2 13h12" />
                </svg>
                Download the Report — It&rsquo;s Free
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
