"use client";

import { motion } from "framer-motion";
import styles from "./Solution.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solution() {
  return (
    <section className={styles.section} aria-labelledby="solution-heading">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.header}
        >
          <span className={styles.eyebrow}>The Fix</span>
          <h2 className={styles.heading} id="solution-heading">A Review Engine That Runs Without You</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className={styles.left}
          >
            <div className={styles.answerFirst}>
              <p>
                Most contractors get reviews randomly — great job here, silence there.
                I build a repeatable system that turns completed jobs into new reviews
                within 24 hours, without cold calls or awkward asks.
              </p>
            </div>

            <div className={styles.transparency}>
              <h3 className={styles.transparencyHeading}>What I will never do</h3>
              <ul className={styles.transparencyList}>
                <li>Fake reviews or paid placements</li>
                <li>Review gating (hiding negative feedback)</li>
                <li>Mass-blast templates that sound robotic</li>
                <li>Promising a specific star rating as a guarantee</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className={styles.right}
          >
            <h3 className={styles.whatHeading}>What's included</h3>
            <div className={styles.whatGrid}>
              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 3H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5l3 3 3-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
                <div>
                  <h4>Review Request System</h4>
                  <p>A simple, personal follow-up process that captures happy customers before they forget — via text, email, or both.</p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H4a2 2 0 0 0-2 2v12l4-2 3 2 3-2 4 2V4a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4>Response Templates</h4>
                  <p>Ready-made responses for positive and negative reviews — professional, personal, and written in your voice.</p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 2l2.3 5.4h5.9l-4.8 3.6 1.8 5.4L9 13.2 4.8 16.4l1.8-5.4L1.8 7.4H7.7z" />
                  </svg>
                </div>
                <div>
                  <h4>Rating Recovery Strategy</h4>
                  <p>If negative reviews are dragging your average down, I'll show you how to steadily rebuild it with volume and recency.</p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3h12v12H3z" />
                    <path d="M3 9h12M9 3v12" />
                  </svg>
                </div>
                <div>
                  <h4>Monthly Monitoring</h4>
                  <p>New reviews flagged and reported monthly. I track velocity, rating trends, and alert you to anything that needs attention.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
