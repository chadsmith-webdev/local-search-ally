"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.container}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={styles.header}>
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrow}>The Process</span>
            <div className={styles.statusNode} aria-hidden="true">
              <span className={styles.pulsingNode} />
              <span className={styles.statusText}>LIVE_SYSTEM</span>
            </div>
          </div>
          <h2 className={styles.heading} id="process-heading">The Reputation Engine</h2>
          <p className={styles.intro}>
            Three phases. No guesswork. A repeatable system that turns happy customers
            into visible proof — and keeps it compounding.
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
                <h3 className={styles.stepTitle}>Reputation Audit</h3>
              </div>
              <p className={styles.stepDesc}>
                I review your current Google profile, review count, average rating,
                response rate, and how you compare to the top 3 competitors in Bentonville
                and Rogers. You get a clear picture of where the gaps are.
              </p>
              <ul className={styles.stepList}>
                <li>Review volume vs. local competitors</li>
                <li>Rating quality and recency analysis</li>
                <li>Response rate check</li>
                <li>Identified recovery opportunities</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-02</span>
                <h3 className={styles.stepTitle}>System Setup</h3>
              </div>
              <p className={styles.stepDesc}>
                I build the follow-up process your business will actually use. That means
                a simple text or email request sequence, response templates in your voice,
                and a tracking sheet to monitor new reviews as they come in.
              </p>
              <ul className={styles.stepList}>
                <li>Review request sequence (text + email options)</li>
                <li>Response templates for all scenarios</li>
                <li>Negative review escalation guide</li>
                <li>Monthly tracking setup</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} glass-premium hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-03</span>
                <h3 className={styles.stepTitle}>Monitor &amp; Grow</h3>
              </div>
              <p className={styles.stepDesc}>
                New reviews land. I flag them, track velocity, and report monthly on
                rating trends and profile visibility. As the volume builds, so does your
                position in the Map Pack.
              </p>
              <ul className={styles.stepList}>
                <li>Monthly review velocity report</li>
                <li>Rating trend monitoring</li>
                <li>Response coaching and review replies</li>
                <li>Quarterly strategy check-in</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sidebar}
            aria-label="Reputation timeline"
          >
            <h3 className={styles.sidebarHeading}>Timeline</h3>
            <ol className={styles.timeline}>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Week 1</span>
                  <p className={styles.timelineDesc}>Audit complete, gaps identified, competitors benchmarked</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 1–2</span>
                  <p className={styles.timelineDesc}>Request sequence and response templates delivered and approved</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 2–4</span>
                  <p className={styles.timelineDesc}>First new reviews start coming in from request sequence</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>30–60 Days</span>
                  <p className={styles.timelineDesc}>Velocity builds, rating trends upward, GBP ranking improves</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Ongoing</span>
                  <p className={styles.timelineDesc}>Monthly reports, response management, continued growth</p>
                </div>
              </li>
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
