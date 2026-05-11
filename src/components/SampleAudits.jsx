"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./SampleAudits.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AUDITS = [
  {
    label: "HVAC contractor — Siloam Springs, AR",
    score: 2,
    bucket: "Critical",
    summary:
      "No Google Business Profile and minimal website content are costing this HVAC business calls every day.",
    topFindings: [
      "No Google Business Profile — invisible to Google Maps",
      "Zero online reviews across all platforms",
      "No service pages or local keyword targeting",
    ],
  },
  {
    label: "Remodeling contractor — Rogers, AR",
    score: 3,
    bucket: "Critical",
    summary:
      "No Google Business Profile is the main reason customers can't find this remodeler — despite having a working website.",
    topFindings: [
      "No Google Business Profile — invisible to Google Maps",
      "Missing from Yelp, BBB, Angi, and HomeAdvisor",
      "Title tag and H1 lack city and trade keywords",
    ],
  },
  {
    label: "Landscaping contractor — Springdale, AR",
    score: 3,
    bucket: "Critical",
    summary:
      "No GBP, no citations, no reviews — effectively invisible to local search despite having a website and Facebook presence.",
    topFindings: [
      "No Google Business Profile — doesn't appear on Google Maps",
      "Not listed in any major contractor directory",
      "LocalBusiness schema present but missing all required fields",
    ],
  },
];

function ScoreBadge({ score }) {
  const color =
    score <= 3
      ? "var(--score-red, #e05252)"
      : score <= 6
      ? "var(--score-yellow, #d4a843)"
      : "var(--score-green, #4caf82)";

  return (
    <span className={styles.scoreBadge} style={{ "--badge-color": color }}>
      {score}
      <span className={styles.scoreOut}>/10</span>
    </span>
  );
}

export default function SampleAudits() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className={styles.eyebrow}>Honest work. Honest feedback.</div>
          <h2 className={styles.h2}>
            What the audit actually{" "}
            <span className={styles.accent}>finds</span>
          </h2>
          <p className={styles.lead}>
            These are real audits run on real NWA contractors — shown with
            permission, names removed. The tool doesn&rsquo;t soften what it
            finds.
          </p>
        </motion.div>

        <div className={styles.cards}>
          {AUDITS.map((audit, i) => (
            <motion.div
              key={audit.label}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
                },
              }}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardMeta}>
                  <span className={styles.tradeLabel}>{audit.label}</span>
                  <ScoreBadge score={audit.score} />
                </div>
                <p className={styles.summary}>{audit.summary}</p>
              </div>

              <ul className={styles.findings}>
                {audit.topFindings.map((f) => (
                  <li key={f} className={styles.finding}>
                    <svg
                      className={styles.xIcon}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="7" cy="7" r="7" fill="rgba(224,82,82,0.15)" />
                      <path
                        d="M4.5 4.5l5 5M9.5 4.5l-5 5"
                        stroke="#e05252"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>


            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className={styles.ctaText}>
            Run your own audit — it takes 90 seconds and shows the same level
            of detail.
          </p>
          <Link
            href={process.env.NEXT_PUBLIC_AUDIT_URL}
            className={styles.ctaBtn}
          >
            Run Your Free Audit →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
