"use client";

import styles from "./Proof.module.css";
import { motion } from "framer-motion";

export default function Proof() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>The Mechanics</span>
          <h2 className={styles.heading}>The Mechanism of Visibility</h2>
          <p className={styles.intro}>
            Visibility isn't random. It's the result of three specific engineering
            blocks working in sync to power your business into the Map Pack.
          </p>
        </motion.div>

        {/* Local SEO Engine Graphic */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.engineContainer}
        >
          <div className={styles.engineGrid}>
            <div className={`${styles.pillar} ${styles.pillar1}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>GBP Optimization</h3>
                <p>Profile Completeness • Image Geostamping • Strategic Service Lists</p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar2}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Citation Architecture</h3>
                <p>NAP Consistency • Directory Sync • Industry-Specific Databases</p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar3}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Reputation Signal</h3>
                <p>Review Request System • Response Velocity • Keyword-Rich Feedback</p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={styles.centralHub}>
              <div className={styles.hubCore}>
                <div className={styles.hubPulse}></div>
                <div className={styles.hubContent}>
                  <span className={styles.hubTag}>TARGET_DESTINATION</span>
                  <div className={styles.hubTitle}>GOOGLE MAP PACK</div>
                  <div className={styles.hubStatus}>DOMINANCE_ACHIEVED</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.stats}
        >
          <div className={styles.statBox}>
            <div className={styles.statNumber}>30-90</div>
            <p>Days to map pack visibility</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100%</div>
            <p>Transparency on every step</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>0</div>
            <p>Long-term contracts</p>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.commitment}
        >
          <h3>What You Can Count On</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              I never claim results I haven't achieved
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Monthly reports showing exactly what moved
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Direct access — you're not talking to a team, you're talking to me
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg
                  viewBox='0 0 18 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Honest assessment about what's possible in your market
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              No contracts — stop anytime if it's not working
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
