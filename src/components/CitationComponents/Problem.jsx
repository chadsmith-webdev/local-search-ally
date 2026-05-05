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
    <section className={styles.section} aria-labelledby='citation-problem-heading'>
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
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Phone with X icon'
                  focusable='false'
                >
                  <path d='M4 2h3l1.5 4-2 1.2A9 9 0 0 0 10.8 11.5L12 9.5l4 1.5v3A2 2 0 0 1 14 16 12 12 0 0 1 2 4a2 2 0 0 1 2-2z' />
                  <path d='M13 2l3 3m0-3l-3 3' />
                </svg>
              </div>
              <h3>Wrong Phone Number or Address</h3>
              <p>
                An old address from when you moved, a forwarding number that's
                no longer active, or a typo in your zip code — any of these
                tell Google your business is unreliable. Google will rank you
                lower or not at all.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className={styles.problem}
              tabIndex={0}
              role='group'
              aria-label="Missing from Directories Google Checks"
              onKeyDown={handleKeyDown}
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
                  aria-label='Directory list icon'
                  focusable='false'
                >
                  <rect x='2' y='2' width='14' height='14' rx='2' />
                  <path d='M6 6h6M6 9h6M6 12h3' />
                </svg>
              </div>
              <h3>Missing from Directories Google Checks</h3>
              <p>
                Google cross-references dozens of directories to verify your
                business is real and where you say it is. If you're not in
                Yelp, Bing, Apple Maps, Angi, and other key platforms, Google
                has less reason to trust — and rank — you.
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
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Duplicate files icon'
                  focusable='false'
                >
                  <rect x='3' y='5' width='11' height='11' rx='1' />
                  <path d='M6 5V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1' />
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
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  role='img'
                  aria-label='Hidden eye icon'
                  focusable='false'
                >
                  <path d='M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z' />
                  <circle cx='9' cy='9' r='2' />
                  <path d='M3 3l12 12' />
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
