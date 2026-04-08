"use client";

import { motion } from "framer-motion";
import styles from "./Proof.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Proof() {
  return (
    <section className={styles.section} aria-labelledby="proof-heading">
      <div className={styles.container}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={styles.header}>
          <span className={styles.eyebrow}>Why It Works</span>
          <h2 className={styles.heading} id="proof-heading">What Makes a Contractor Website Convert</h2>
          <p className={styles.intro}>
            Three things separate a website that generates leads from one
            that just takes up space on the internet.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className={styles.engineContainer}
        >
          <div className={styles.engineGrid}>
            <motion.div variants={fadeUp} className={styles.pillar} tabIndex={0}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="1" width="12" height="18" rx="2" />
                  <path d="M10 16h.01" />
                </svg>
              </div>
              <h3>Mobile Speed</h3>
              <p>88% of local mobile searches lead to a call or visit within 24 hours. A fast, phone-optimized site captures that intent before it goes elsewhere.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.centralHub} aria-label="Lead generation result">
              <div className={styles.hubCore} aria-hidden="true" />
              <div className={styles.hubPulse} aria-hidden="true" />
              <div className={styles.hubContent}>
                <span className={styles.hubLabel}>LEADS</span>
                <span className={styles.hubSub}>GENERATED</span>
                <span className={styles.hubMeta}>CONVERSION_ACTIVE</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.pillar} tabIndex={0}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M13.5 13.5L18 18" />
                </svg>
              </div>
              <h3>SEO Foundation</h3>
              <p>Proper heading hierarchy, meta tags, structured data, and fast Core Web Vitals. Every page is built to rank for the services you offer in the cities you serve.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.pillar} ${styles.pillarBottom}`} tabIndex={0}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5l3.5 3.5 3.5-3.5H18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <h3>Clear Conversion Paths</h3>
              <p>Every page has one job: get the visitor to call, book, or submit a form. No dead ends, no confusion, no buried phone numbers.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          className={styles.stats}
        >
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>61%</span>
            <p className={styles.statLabel}>of consumers are more likely to contact a business with a website</p>
            <span className={styles.statSource}>BrightLocal</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>88%</span>
            <p className={styles.statLabel}>of local mobile searchers call or visit a business within 24 hours</p>
            <span className={styles.statSource}>Think With Google</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>0</span>
            <p className={styles.statLabel}>long-term contracts — you own your site and hosting always</p>
            <span className={styles.statSource}>No Lock-In</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.commitment}
        >
          <h3 className={styles.commitmentHeading}>My commitments to you</h3>
          <ul className={styles.list}>
            {[
              "I will never claim results I haven't achieved.",
              "I will tell you if something is outside my skill set.",
              "I will never lock you into a contract.",
              "I will communicate clearly and often.",
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <svg className={styles.checkmark} viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" stroke="var(--carolina)" strokeWidth="1.2" />
                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke="var(--carolina)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
