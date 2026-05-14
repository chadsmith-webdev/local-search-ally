"use client";

import { motion } from "framer-motion";
import styles from "./Solution.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solution() {
  return (
    <section className={styles.section} aria-labelledby='solution-heading'>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.header}
        >
          <span className={styles.eyebrow}>The Fix</span>
          <h2 className={styles.heading} id='solution-heading'>
            How Web Design Works for NWA Contractors
          </h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className={styles.left}
          >
            <div className={styles.answerFirst}>
              <p>
                Most contractor websites are built by designers who don't
                understand SEO, or by SEO people who can't design. I do both.
                Every page is custom-coded, mobile-first, and built to generate
                calls — not win a design award.
              </p>
            </div>

            <div className={styles.transparency}>
              <h3 className={styles.transparencyHeading}>
                What I will never do
              </h3>
              <ul className={styles.transparencyList}>
                <li>Use a drag-and-drop template and call it custom</li>
                <li>Build a site that can't be found on Google</li>
                <li>Lock you into a hosting contract you can't leave</li>
                <li>Deliver a "pretty" site that doesn't convert</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className={styles.right}
          >
            <h3 className={styles.whatHeading}>What's included</h3>
            <div className={styles.whatGrid}>
              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill='currentColor'
                      d='M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10L8,21V22H16V21L14,18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z'
                    />
                  </svg>
                </div>
                <div>
                  <h4>Custom Design &amp; Code</h4>
                  <p>
                    No templates. Built on Next.js for speed, SEO, and
                    flexibility. Your site, your brand, your code.
                  </p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill='currentColor'
                      d='M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z'
                    />
                  </svg>
                </div>
                <div>
                  <h4>Mobile-First Build</h4>
                  <p>
                    Phone experience designed first. Fast load times,
                    click-to-call buttons, and thumb-friendly navigation.
                  </p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill='currentColor'
                      d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
                    />
                  </svg>
                </div>
                <div>
                  <h4>SEO Built In</h4>
                  <p>
                    Proper heading structure, meta tags, fast Core Web Vitals,
                    structured data, and local keyword targeting from day one.
                  </p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill='currentColor'
                      d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
                    />
                  </svg>
                </div>
                <div>
                  <h4>Lead-Gen Focus</h4>
                  <p>
                    Every page has one clear goal: get the visitor to call,
                    book, or fill out a form. No dead ends.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
