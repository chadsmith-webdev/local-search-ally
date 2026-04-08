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
          <h2 className={styles.heading} id="problem-heading">Your Website Is Costing You Jobs</h2>
          <p className={styles.intro}>
            It loads slowly, looks dated on phones, and doesn't show up in
            Google. Meanwhile someone with half your skill and a better site
            is getting the call.
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
            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="No website at all">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="14" height="12" rx="2" />
                  <path d="M9 15v2M5 17h8" />
                </svg>
              </div>
              <h3>No Website at All</h3>
              <p>No site means no credibility check. 61% of consumers are more likely to contact a business that has a website. Without one, you're invisible to anyone who doesn't already know you.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="Slow and outdated">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="7" />
                  <path d="M9 5v4l3 2" />
                </svg>
              </div>
              <h3>Slow and Outdated</h3>
              <p>A site that takes 5+ seconds to load loses over half its visitors. Google penalizes slow pages in search rankings. If your site was built years ago and hasn't been touched, it's hurting you.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="Not mobile-friendly">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="1" width="10" height="16" rx="2" />
                  <path d="M9 14h.01" />
                </svg>
              </div>
              <h3>Not Mobile-Friendly</h3>
              <p>88% of consumers who search locally on mobile call or visit within 24 hours. If your site pinches and scrolls on a phone, those callers go to a competitor whose site works.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.problem} tabIndex={0} role="group" aria-label="No clear calls to action">
              <div className={styles.problemIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16.5 12.69v2.34a1.56 1.56 0 0 1-1.7 1.56 15.44 15.44 0 0 1-6.73-2.4" />
                  <path d="M1 1l16 16" />
                </svg>
              </div>
              <h3>No Clear Path to Call</h3>
              <p>A pretty site with no click-to-call button, no booking form, and no visible phone number is a brochure — not a lead generator. Every page needs one obvious action.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
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
              Without a website, you lose every potential customer who tries
              to look you up before calling. A site that loads fast, ranks
              locally, and has a clear call-to-action is the difference
              between getting the job and losing it.
            </p>
            <p className={styles.source}>BrightLocal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
