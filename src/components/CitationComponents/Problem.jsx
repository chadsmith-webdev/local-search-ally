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

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.currentTarget.click();
    }
  }

  return (
    <section
      className={styles.section}
      aria-labelledby='citation-problem-heading'
    >
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow} id='citation-problem-eyebrow'>
            The Challenge
          </span>
          <h2 className={styles.heading} id='citation-problem-heading'>
            The Citation Inconsistency Problem
          </h2>
          <p className={styles.intro}>
            You've been in business for years. But online, your listing looks
            different on every platform — and Google notices.
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
              aria-label='Wrong Phone Number or Address on Directories'
              onKeyDown={handleKeyDown}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Wrong info alert icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z'
                  />
                </svg>
              </div>
              <h3>Wrong Phone Number or Address</h3>
              <p>
                An old address from when you moved, a forwarding number that's
                no longer active, or a typo in your zip code — any of these tell
                Google your business is unreliable. Google will rank you lower
                or not at all.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Missing from Directories Google Checks'
              onKeyDown={handleKeyDown}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Directory list icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'
                  />
                </svg>
              </div>
              <h3>Missing from Directories Google Checks</h3>
              <p>
                Google cross-references dozens of directories to verify your
                business is real and where you say it is. If you're not in Yelp,
                Bing, Apple Maps, Angi, and other key platforms, Google has less
                reason to trust — and rank — you.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label='Duplicate Listings Splitting Your Authority'
              onKeyDown={handleKeyDown}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Duplicate files icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z'
                  />
                </svg>
              </div>
              <h3>Duplicate Listings Splitting Your Authority</h3>
              <p>
                If you show up twice on Yelp or have two Google Business
                Profiles, Google splits its trust between them instead of
                concentrating it on one. Duplicates hurt your rankings and
                confuse customers who don't know which listing to trust.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label="No Visibility Into What's Out There"
              onKeyDown={handleKeyDown}
            >
              <div className={styles.problemIcon}>
                <svg
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='Hidden visibility icon'
                  focusable='false'
                >
                  <path
                    fill='currentColor'
                    d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z'
                  />
                </svg>
              </div>
              <h3>No Visibility Into What's Out There</h3>
              <p>
                Most contractors have no idea how many places their business
                information appears online — or how much of it is wrong. You
                can't fix what you can't see. I find everything and give you a
                full picture before touching a single listing.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={styles.statistic}
            aria-label='Citation accuracy statistic'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className={styles.statHighlight} aria-hidden='true'>
              <div className={styles.statNumber}>50%</div>
              <div className={styles.statLabel}>
                of consumers who do a local search visit a store within one day
              </div>
            </div>
            <p>
              Those searchers are ready to hire. If your listing has the wrong
              phone number or doesn't appear at all, that visit goes to whoever
              shows up correctly.
            </p>
            <p className={styles.source}>
              Think With Google, "How Local Searches Drive Purchases"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
