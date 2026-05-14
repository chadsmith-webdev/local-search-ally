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
            Your Website Is Costing You Jobs
          </h2>
          <p className={styles.intro}>
            It loads slowly, looks dated on phones, and doesn't show up in
            Google. Meanwhile someone with half your skill and a better site is
            getting the call.
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
              aria-label='No website at all'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10L8,21V22H16V21L14,18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z'
                  />
                </svg>
              </div>
              <h3>No Website at All</h3>
              <p>
                No site means no credibility check. 61% of consumers are more
                likely to contact a business that has a website. Without one,
                you're invisible to anyone who doesn't already know you.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Slow and outdated'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z'
                  />
                </svg>
              </div>
              <h3>Slow and Outdated</h3>
              <p>
                Google's own data shows 53% of mobile visitors abandon a site
                that takes more than 3 seconds to load — before they ever see
                your phone number. Slow sites get buried in rankings too.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Not mobile-friendly'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z'
                  />
                </svg>
              </div>
              <h3>Not Mobile-Friendly</h3>
              <p>
                88% of consumers who search locally on mobile call or visit
                within 24 hours. If your site pinches and scrolls on a phone,
                those callers go to a competitor whose site works.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='No clear calls to action'
            >
              <div className={styles.problemIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
                  />
                </svg>
              </div>
              <h3>No Clear Path to Call</h3>
              <p>
                A pretty site with no click-to-call button, no booking form, and
                no visible phone number is a brochure — not a lead generator.
                Every page needs one obvious action.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.statistic}
            aria-label='Web presence statistic'
          >
            <div className={styles.statHighlight} aria-hidden='true'>
              <div className={styles.statNumber}>61%</div>
              <div className={styles.statLabel}>
                of consumers more likely to contact a business with a website
              </div>
            </div>
            <p>
              Without a website, you lose every potential customer who tries to
              look you up before calling. A site that loads fast, ranks locally,
              and has a clear call-to-action is the difference between getting
              the job and losing it.
            </p>
            <p className={styles.source}>BrightLocal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
