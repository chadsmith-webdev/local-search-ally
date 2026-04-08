"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="local-seo-process-heading">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.header}
        >
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrow}>The Process</span>
            <div className={styles.statusNode} aria-hidden="true">
              <span className={styles.pulsingNode} />
              <span className={styles.statusText}>LIVE_SYSTEM</span>
            </div>
          </div>
          <h2 className={styles.heading} id="local-seo-process-heading">The Local SEO Engine</h2>
          <p className={styles.intro}>
            Three phases targeting the factors Google actually uses to rank local
            businesses. Every step is documented and reported — you always know where things stand.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
            className={styles.mainSteps}
          >
            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-01</span>
                <h3 className={styles.stepTitle}>Audit</h3>
              </div>
              <p className={styles.stepDesc}>
                I review your GBP, citation consistency, keyword rankings, and
                competitor positioning. You get a plain-language report showing
                exactly what's holding you back before I touch anything.
              </p>
              <ul className={styles.stepList}>
                <li>GBP audit against Google's ranking factors</li>
                <li>Keyword and competitor gap research</li>
                <li>Citation scan and NAP consistency check</li>
                <li>On-page review of service and location pages</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-02</span>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
              </div>
              <p className={styles.stepDesc}>
                Starting with what moves rankings most. I optimize your GBP,
                build citations in the right directories, improve on-page
                keyword targeting, and set up a review request system.
              </p>
              <ul className={styles.stepList}>
                <li>GBP optimization and corrections</li>
                <li>Citation build and NAP cleanup across directories</li>
                <li>On-page keyword and title optimization</li>
                <li>Review request process setup and templates</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-03</span>
                <h3 className={styles.stepTitle}>Grow &amp; Track</h3>
              </div>
              <p className={styles.stepDesc}>
                Monthly reports show your visibility trend, keyword movements,
                citation growth, and review progress. I adjust strategy based
                on what's working. You see everything.
              </p>
              <ul className={styles.stepList}>
                <li>Monthly visibility and keyword ranking report</li>
                <li>Citation and review growth tracking</li>
                <li>Ongoing on-page adjustments</li>
                <li>Strategy updates based on results</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sidebar}
            aria-label="Local SEO timeline"
          >
            <h3 className={styles.sidebarHeading}>Timeline</h3>
            <ol className={styles.timeline}>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>0–2 Weeks</span>
                  <p className={styles.timelineDesc}>Audit complete — GBP baseline and competitor review</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 2–4</span>
                  <p className={styles.timelineDesc}>Citation build launched and on-page fixes applied</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>30–60 Days</span>
                  <p className={styles.timelineDesc}>Map Pack signal growth begins, reviews coming in</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>60–90 Days</span>
                  <p className={styles.timelineDesc}>Rankings solidify, review count building consistently</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Ongoing</span>
                  <p className={styles.timelineDesc}>Monthly reports and recalibration</p>
                </div>
              </li>
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
