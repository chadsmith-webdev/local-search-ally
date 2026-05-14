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
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Profile card icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14Z'
                  />
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
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Star icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
                  />
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
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Tag icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4A2,2 0 0,0 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z'
                  />
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
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Photo icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z'
                  />
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
            <p className={styles.source}>
              BrightLocal, "Local Consumer Review Survey"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
