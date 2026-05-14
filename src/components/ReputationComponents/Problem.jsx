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
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: "easeOut" },
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
    <section className={styles.section} aria-labelledby='problem-heading'>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>The Challenge</span>
          <h2 className={styles.heading} id='problem-heading'>
            The Review Problem
          </h2>
          <p className={styles.intro}>
            You do great work. Your customers are happy. But online, it doesn't
            show — and that costs you jobs to contractors with worse skills but
            more reviews.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className={styles.problems}
          >
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Too few reviews'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
                  />
                </svg>
              </div>
              <h3>Too Few Reviews</h3>
              <p>
                A handful of old reviews from two years ago signals a dormant
                business. Competitors with consistent, recent reviews rank above
                you and get the call.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Low or uneven rating'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z'
                  />
                </svg>
              </div>
              <h3>Low or Uneven Rating</h3>
              <p>
                A 3.8 average loses to a 4.7. Even one unanswered negative
                review shapes a first impression. Without steady positives, a
                single bad one defines you.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='No review system'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H18V1M17,12H12V17H17V12Z'
                  />
                </svg>
              </div>
              <h3>No System for Asking</h3>
              <p>
                Happy customers don't leave reviews automatically. Most forget
                within an hour of the job. Without a simple, repeatable ask
                process, you're leaving your reputation to chance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Reviews unanswered'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2M20,16H5.17L4,17.17V4H20V16Z'
                  />
                </svg>
              </div>
              <h3>Reviews Go Unanswered</h3>
              <p>
                Google rewards businesses that respond. Homeowners reading your
                profile notice when an owner is absent. Silence signals
                indifference — and costs trust.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.statistic}
            aria-label='Review trust statistic'
          >
            <div className={styles.statHighlight} aria-hidden='true'>
              <div className={styles.statNumber}>47%</div>
              <div className={styles.statLabel}>
                of consumers won't use a business with fewer than 20 reviews
              </div>
            </div>
            <p>
              Most contractors have fewer than 10 reviews. The ones at the top
              of the Map Pack have dozens — and they keep coming in. The gap
              isn't quality of work. It's a system for asking.
            </p>
            <p className={styles.source}>BrightLocal, 2026</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
