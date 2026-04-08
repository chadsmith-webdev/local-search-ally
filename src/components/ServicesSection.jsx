"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const TRADES = [
  {
    icon: (
      <svg
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 2C7.13 2 4 5.13 4 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" />
        <circle cx="11" cy="9" r="2.5" />
        <path d="M2 20h18" />
      </svg>
    ),
    trade: "Plumbing SEO",
    desc: "Whether you're in Siloam Springs or Fayetteville, I help you rank for high-intent searches like \"emergency drain cleaning\" or \"water heater repair\" — capturing the 80% of customers ready to call right now.",
    tags: ["Emergency Calls", "Service Area Pages", "Map Pack"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 6h18M2 10h18M5 14h12M8 18h6" />
        <rect x="4" y="2" width="14" height="18" rx="2" />
      </svg>
    ),
    trade: "HVAC Marketing",
    desc: "I make sure your business shows up exactly when the Arkansas heat or cold hits — targeting seasonal keywords that keep your schedule full year-round, not just during peak season.",
    tags: ["Seasonal Keywords", "Year-Round Visibility", "GBP Optimization"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-3 6 10-12h-9l3-6z" />
      </svg>
    ),
    trade: "Electrical Contractors",
    desc: "I focus on highlighting your certifications and safety record to build the trust necessary for high-ticket residential and commercial jobs before a customer ever picks up the phone.",
    tags: ["Trust Signals", "Certifications", "High-Ticket Jobs"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 17L11 4l9 13H2z" />
        <path d="M2 17h18" />
        <path d="M7 17v-4h8v4" />
      </svg>
    ),
    trade: "Roofing & Exteriors",
    desc: "Local homeowners need to see your recent work before they trust you with their biggest investment. I optimize your Google Business Profile and service pages to showcase your portfolio and reviews.",
    tags: ["Portfolio Visibility", "Storm Season", "Review Strategy"],
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>Specialized by Trade</span>
          <h2 className={styles.h2}>
            I don&rsquo;t believe in one-size-fits-all.
            <br />
            Each trade faces a different version of the problem.
          </h2>
          <p className={styles.lead}>
            An HVAC company needs to be found when the heat breaks in August. A
            plumber needs emergency search coverage at 11pm. A roofer needs
            photo proof before anyone calls. I build around what your trade
            actually needs — not a generic SEO checklist.
          </p>
        </motion.div>

        {/* Trade grid */}
        <motion.div className={styles.grid} variants={container}>
          {TRADES.map((t) => (
            <motion.div key={t.trade} className={styles.card} variants={fadeUp}>
              <div className={styles.iconWrap}>{t.icon}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{t.trade}</p>
                <p className={styles.cardDesc}>{t.desc}</p>
                <div className={styles.tags}>
                  {t.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom link */}
        <motion.div className={styles.bottom} variants={fadeUp}>
          <Link href="/services" className={styles.servicesLink}>
            See full service details
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
