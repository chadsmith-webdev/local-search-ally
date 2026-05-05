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
          <h2 className={styles.heading} id="proof-heading">How Google Reads Your Reputation</h2>
          <p className={styles.intro}>
            Google doesn't guess at trust — it measures it. Three signals tell the
            algorithm whether you belong in the Map Pack or not.
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
                  <path d="M10 2l2.6 6h6.4l-5.2 3.8 2 6L10 14l-5.8 3.8 2-6L1 8h6.4z" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Review Volume</h3>
                <p>More reviews signal more customers served. Low counts make you invisible regardless of quality.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.pillar} tabIndex={0}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M10 6v4l3 2" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Rating Quality</h3>
                <p>4.7+ with recent reviews outranks 4.2 with old ones. Recency matters as much as the number.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.pillar} tabIndex={0}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5l3.5 3.5 3.5-3.5H18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Response Rate</h3>
                <p>Owners who respond to reviews — good and bad — signal trust and engagement that Google rewards.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.centralHub} aria-label="Trusted reputation result">
              <div className={styles.hubCore}>
                <div className={styles.hubPulse}></div>
                <div className={styles.hubContent}>
                  <span className={styles.hubTag}>TARGET_DESTINATION</span>
                  <div className={styles.hubTitle}>TRUSTED REPUTATION</div>
                  <div className={styles.hubStatus}>VISIBILITY_ACHIEVED</div>
                </div>
              </div>
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
            <span className={styles.statNumber}>47%</span>
            <p className={styles.statLabel}>of consumers won't use a business with fewer than 20 reviews</p>
            <span className={styles.statSource}>BrightLocal 2026</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>100%</span>
            <p className={styles.statLabel}>of my review work is white-hat — no fake reviews, ever</p>
            <span className={styles.statSource}>Local Search Ally</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>0</span>
            <p className={styles.statLabel}>long-term contracts — you own your profile and results always</p>
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
