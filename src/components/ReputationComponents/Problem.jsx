"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./Problem.module.css";

export default function Problem() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section className={styles.section} aria-labelledby="problem-heading">
      <div className={styles.container}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className={styles.eyebrow}>The Challenge</span>
          <h2 className={styles.heading} id="problem-heading">The Review Problem</h2>
          <p className={styles.intro}>
            You do great work. Your customers are happy. But online, it doesn't
            show — and that costs you jobs to contractors with worse skills but more reviews.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={styles.problems}
          >
            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="Too few reviews">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 2l2.3 5.4h5.9l-4.8 3.6 1.8 5.4L9 13.2 4.8 16.4l1.8-5.4L1.8 7.4H7.7z" />
                </svg>
              </div>
              <h3>Too Few Reviews</h3>
              <p>A handful of old reviews from two years ago signals a dormant business. Competitors with consistent, recent reviews rank above you and get the call.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="Low or uneven rating">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="7" />
                  <path d="M9 5v4l3 2" />
                </svg>
              </div>
              <h3>Low or Uneven Rating</h3>
              <p>A 3.8 average loses to a 4.7. Even one unanswered negative review shapes a first impression. Without steady positives, a single bad one defines you.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="No review system">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="14" height="12" rx="2" />
                  <path d="M2 7h14M6 3v4M12 3v4" />
                </svg>
              </div>
              <h3>No System for Asking</h3>
              <p>Happy customers don't leave reviews automatically. Most forget within an hour of the job. Without a simple, repeatable ask process, you're leaving your reputation to chance.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="Reviews unanswered">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 3H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5l3 3 3-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <h3>Reviews Go Unanswered</h3>
              <p>Google rewards businesses that respond. Homeowners reading your profile notice when an owner is absent. Silence signals indifference — and costs trust.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.statistic}
            aria-label='Review trust statistic'
          >
            <div className={styles.statHighlight} aria-hidden='true'>
              <div className={styles.statNumber}>88%</div>
              <div className={styles.statLabel}>
                of consumers trust online reviews as much as personal recommendations
              </div>
            </div>
            <p>
              Most contractors have fewer than 10 reviews. The ones at the
              top of the Map Pack have dozens — and they keep coming in.
              The gap isn't quality of work. It's a system for asking.
            </p>
            <p className={styles.source}>Think With Google</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
