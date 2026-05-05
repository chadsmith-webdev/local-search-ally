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
          <h2 className={styles.heading} id="solution-heading">How Web Design Works for NWA Contractors</h2>
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
                Most contractor websites are built by designers who don't
                understand SEO, or by SEO people who can't design. I do both.
                Every page is custom-coded, mobile-first, and built to
                generate calls — not win a design award.
              </p>
            </div>

            <div className={styles.transparency}>
              <h3 className={styles.transparencyHeading}>What I will never do</h3>
              <ul className={styles.transparencyList}>
                <li>Use a drag-and-drop template and call it custom</li>
                <li>Build a site that can't be found on Google</li>
                <li>Lock you into a hosting contract you can't leave</li>
                <li>Deliver a "pretty" site that doesn't convert</li>
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
                    <rect x="2" y="3" width="14" height="12" rx="2" />
                    <path d="M9 15v2M5 17h8" />
                  </svg>
                </div>
                <div>
                  <h4>Custom Design &amp; Code</h4>
                  <p>No templates. Built on Next.js for speed, SEO, and flexibility. Your site, your brand, your code.</p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="1" width="10" height="16" rx="2" />
                    <path d="M9 14h.01" />
                  </svg>
                </div>
                <div>
                  <h4>Mobile-First Build</h4>
                  <p>Phone experience designed first. Fast load times, click-to-call buttons, and thumb-friendly navigation.</p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="9" cy="9" r="6" />
                    <path d="M13.5 13.5L17 17" />
                  </svg>
                </div>
                <div>
                  <h4>SEO Built In</h4>
                  <p>Proper heading structure, meta tags, fast Core Web Vitals, structured data, and local keyword targeting from day one.</p>
                </div>
              </div>

              <div className={styles.whatItem}>
                <div className={styles.whatIcon}>
                  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16.5 12.69v2.34a1.56 1.56 0 0 1-1.7 1.56 15.44 15.44 0 0 1-6.73-2.4" />
                    <path d="M3.4 3.6A15.2 15.2 0 0 0 8.07 8.27" />
                  </svg>
                </div>
                <div>
                  <h4>Lead-Gen Focus</h4>
                  <p>Every page has one clear goal: get the visitor to call, book, or fill out a form. No dead ends.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
