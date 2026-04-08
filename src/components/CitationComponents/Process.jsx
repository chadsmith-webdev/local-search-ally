"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="citation-process-heading">
      <div className={styles.container}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={styles.header}>
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrow}>The Process</span>
            <div className={styles.statusNode} aria-hidden="true">
              <span className={styles.pulsingNode} />
              <span className={styles.statusText}>LIVE_SYSTEM</span>
            </div>
          </div>
          <h2 className={styles.heading} id="citation-process-heading">The Citation Engine</h2>
          <p className={styles.intro}>
            Three phases for auditing, cleaning, and building the citations that
            send consistent trust signals to Google — specifically for Northwest
            Arkansas home service trades.
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
                I scan every directory and data aggregator where your business appears.
                You get a full report showing every listing — what's accurate, what's wrong,
                and what's missing — before anything is changed.
              </p>
              <ul className={styles.stepList}>
                <li>Full citation audit across major directories</li>
                <li>Data aggregator scan (Neustar, Foursquare, etc.)</li>
                <li>NAP consistency check against your GBP</li>
                <li>Duplicate listing identification</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-02</span>
                <h3 className={styles.stepTitle}>Clean &amp; Build</h3>
              </div>
              <p className={styles.stepDesc}>
                I fix every inconsistency — wrong phone numbers, old addresses, duplicate
                listings — and build new citations in the directories that carry the most
                weight for local rankings. Priority goes to what Google looks for first.
              </p>
              <ul className={styles.stepList}>
                <li>NAP correction across all existing listings</li>
                <li>Duplicate suppression and merging</li>
                <li>Core directory build (Google, Bing, Apple Maps, Yelp)</li>
                <li>Trade-specific and NWA local directory submissions</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-03</span>
                <h3 className={styles.stepTitle}>Monitor &amp; Maintain</h3>
              </div>
              <p className={styles.stepDesc}>
                Citations drift. Data aggregators push incorrect info. Someone edits
                your listing. I watch for changes and fix errors before they damage
                your rankings. Monthly reports show your citation health at a glance.
              </p>
              <ul className={styles.stepList}>
                <li>Ongoing citation health monitoring</li>
                <li>Error alerts and corrections within 48 hours</li>
                <li>New directory submissions as opportunities arise</li>
                <li>Monthly citation health and coverage report</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sidebar}
            aria-label="Citation building timeline"
          >
            <h3 className={styles.sidebarHeading}>Timeline</h3>
            <ol className={styles.timeline}>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Week 1</span>
                  <p className={styles.timelineDesc}>Full citation audit report delivered</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 1–2</span>
                  <p className={styles.timelineDesc}>Existing errors fixed, duplicates suppressed</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 2–4</span>
                  <p className={styles.timelineDesc}>Core directory build launched</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 4–6</span>
                  <p className={styles.timelineDesc}>Trade platform and local directory submissions</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Ongoing</span>
                  <p className={styles.timelineDesc}>Monthly monitoring and health reports</p>
                </div>
              </li>
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
