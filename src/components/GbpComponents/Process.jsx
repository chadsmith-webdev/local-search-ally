"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="gbp-process-heading">
      <div className={styles.container}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={styles.header}>
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrow}>The Process</span>
            <div className={styles.statusNode} aria-hidden="true">
              <span className={styles.pulsingNode} />
              <span className={styles.statusText}>LIVE_SYSTEM</span>
            </div>
          </div>
          <h2 className={styles.heading} id="gbp-process-heading">The GBP Optimization Engine</h2>
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
            <motion.div variants={fadeUp} className={`${styles.step} hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-01</span>
                <h3 className={styles.stepTitle}>Profile Audit</h3>
              </div>
              <p className={styles.stepDesc}>
                I go through every field, photo, review, and category in your GBP
                against Google's ranking criteria. You get a plain-language report
                showing what's incomplete, incorrect, or missing — and what gets fixed first.
              </p>
              <ul className={styles.stepList}>
                <li>GBP audit against Google's local ranking factors</li>
                <li>Category and attribute review</li>
                <li>Photo and review quality assessment</li>
                <li>Competitor profile comparison</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-02</span>
                <h3 className={styles.stepTitle}>Optimization Launch</h3>
              </div>
              <p className={styles.stepDesc}>
                Starting with the highest-impact gaps. Business information verified,
                categories corrected, description rewritten with local keywords,
                high-quality photos uploaded, and review request system configured.
              </p>
              <ul className={styles.stepList}>
                <li>Business info verification and corrections</li>
                <li>Category and description optimization</li>
                <li>Photo upload and geo-tagging</li>
                <li>Review request process setup and templates</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-03</span>
                <h3 className={styles.stepTitle}>Ongoing Management</h3>
              </div>
              <p className={styles.stepDesc}>
                Monthly posts, photo updates, review monitoring and responses,
                Q&amp;A management, and performance tracking. Your profile stays
                active and competitive while you focus on the work.
              </p>
              <ul className={styles.stepList}>
                <li>Monthly Google Posts and photo updates</li>
                <li>Review monitoring and response drafts</li>
                <li>Q&amp;A and spam monitoring</li>
                <li>Monthly performance and visibility report</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sidebar}
            aria-label="GBP optimization timeline"
          >
            <h3 className={styles.sidebarHeading}>Timeline</h3>
            <ol className={styles.timeline}>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Week 1</span>
                  <p className={styles.timelineDesc}>Audit complete — baseline report delivered</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 1–2</span>
                  <p className={styles.timelineDesc}>Profile optimization launched, photos uploaded</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>30–60 Days</span>
                  <p className={styles.timelineDesc}>Review system active, Map Pack signal growth begins</p>
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
                  <p className={styles.timelineDesc}>Monthly posts, reports, and profile management</p>
                </div>
              </li>
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
