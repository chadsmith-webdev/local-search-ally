"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./Problem.module.css";

export default function Problem() {
  // useReducedMotion must be called inside the component and only on the client
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

  // Keyboard focus handler for cards
  function handleKeyDown(e, idx) {
    if (e.key === "Enter" || e.key === " ") {
      e.currentTarget.click();
    }
  }

  return (
    <section className={styles.section} aria-labelledby='problem-heading'>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow} id='problem-eyebrow'>
            The Challenge
          </span>
          <h2 className={styles.heading} id='problem-heading'>
            The Invisibility Problem
          </h2>
          <p className={styles.intro}>
            You're good at your job. Your customers love you. But Google doesn't
            know you exist.
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
              aria-label='Not Visible in Google Maps'
              onKeyDown={(e) => handleKeyDown(e, 0)}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Location pin icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
                  />
                </svg>
              </div>
              <h3>Not Visible in Google Maps</h3>
              <p>
                When someone searches "plumber near me" or "HVAC repair in
                Rogers," your business doesn't appear in the top results. Your
                competitor's does. That's a lost call.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Missing Reviews and Social Proof'
              onKeyDown={(e) => handleKeyDown(e, 1)}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Star badge icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
                  />
                </svg>
              </div>
              <h3>Missing Reviews & Social Proof</h3>
              <p>
                Google shows review count and rating directly in search results.
                Without a review strategy, you look less trustworthy than
                competitors — even if you do better work.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label="Website Doesn't Rank for Local Keywords"
              onKeyDown={(e) => handleKeyDown(e, 2)}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Magnifying glass icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
                  />
                </svg>
              </div>
              <h3>Your Website Doesn't Rank for Local Keywords</h3>
              <p>
                You have a website but nobody finds it through Google. Your
                pages don't rank for the keywords homeowners actually search
                when they need your service.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Lost Leads to Bigger Companies'
              onKeyDown={(e) => handleKeyDown(e, 3)}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Document icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z'
                  />
                </svg>
              </div>
              <h3>Lost Leads to Bigger Companies</h3>
              <p>
                National franchises and larger companies push to the top of
                search results in your market. They spend money on Google Ads.
                You can't compete with that budget. But you can rank locally
                without paying per click.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={styles.statistic}
            aria-label='Local search statistic'
          >
            <div className={styles.statHighlight} aria-hidden='true'>
              <div className={styles.statNumber}>46%</div>
              <div className={styles.statLabel}>
                of searches have local intent
              </div>
            </div>
            <p>
              These are homeowners actively looking to hire someone in your area
              — right now. If you're not visible, that call goes to your
              competitor.
            </p>
            <p className={styles.source}>
              Think With Google, "The Importance of Local Search Today"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
