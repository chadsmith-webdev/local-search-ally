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
    <section className={styles.section} aria-labelledby='gbp-problem-heading'>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>The Problem</span>
          <h2 className={styles.heading} id='gbp-problem-heading'>
            Your Google Business Profile Is Costing You Calls
          </h2>
          <p className={styles.intro}>
            Most profiles are incomplete, out of date, or set up wrong. You're
            losing visibility — and calls — without knowing it.
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
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Incomplete or outdated profile'
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Profile card icon'
                  focusable='false'
                >
                  <rect x='2' y='3' width='14' height='12' rx='1' />
                  <path d='M5 7h8M5 10h5' />
                </svg>
              </div>
              <h3>Incomplete or Out-of-Date Profile</h3>
              <p>
                Missing hours, wrong address, no service areas listed — every
                gap is a signal to Google that your business isn't worth
                showing. An incomplete profile doesn't just rank lower. It loses
                the click.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Weak reviews and low rating'
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Star icon'
                  focusable='false'
                >
                  <path d='M9 2l2.3 5.4h5.9l-4.8 3.6 1.8 5.4-4.2-3.2-4.2 3.2 1.8-5.4-4.8-3.6h5.9z' />
                </svg>
              </div>
              <h3>Few Reviews or a Rating Under 4.0</h3>
              <p>
                Google shows your star rating in search results. If a competitor
                has 40 reviews at 4.8 stars and you have 6 at 3.9, you've lost
                the trust comparison before they even read your name.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Wrong categories or missing services'
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Tag icon'
                  focusable='false'
                >
                  <path d='M2 2h6l8 8-6 6-8-8V2z' />
                  <circle cx='6' cy='6' r='1' />
                </svg>
              </div>
              <h3>Wrong Categories or Missing Services</h3>
              <p>
                If your primary category doesn't match what you actually do,
                Google won't connect you to the right searches. I see this in
                nearly every profile I audit — and it's one of the fastest fixes
                with the biggest impact.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='No photos or stale photos'
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Photo icon'
                  focusable='false'
                >
                  <rect x='1' y='4' width='16' height='11' rx='1' />
                  <circle cx='9' cy='10' r='3' />
                  <path d='M6 4l1.5-2h3L12 4' />
                </svg>
              </div>
              <h3>No Photos — or Photos from 2019</h3>
              <p>
                Profiles with recent, relevant photos get significantly more
                click-throughs. Stale or missing photos signal a neglected
                business. Google notices. So do customers.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className={styles.statistic}
            aria-label='Local search statistic'
          >
            <div className={styles.statHighlight} aria-hidden='true'>
              <div className={styles.statNumber}>97%</div>
              <div className={styles.statLabel}>
                of consumers use Google to evaluate local businesses
              </div>
            </div>
            <p>
              Nearly every person searching for your service checks Google
              before they call. If your profile is incomplete, out of date, or
              buried in results, you're invisible to almost all of them.
            </p>
            <p className={styles.source}>BrightLocal, "Local Consumer Review Survey"</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
