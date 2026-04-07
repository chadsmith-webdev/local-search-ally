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
          <span className={styles.eyebrow}>Why It Works</span>
          <h2 className={styles.heading}>The Mechanics of GBP Visibility</h2>
          <p className={styles.intro}>
            Map Pack visibility isn't random. It's the result of four specific
            profile elements working together to signal relevance and trust to
            Google.
          </p>
        </motion.div>

        {/* GBP Engine Graphic */}
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
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <rect x='3' y='4' width='18' height='15' rx='2' />
                  <path d='M8 4V2M16 4V2M3 9h18' />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Profile Completeness</h3>
                <p>Verified NAP • Hours • Service Areas • Attributes</p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar2}`}>
              <div className={styles.pillarIcon}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <path d='M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' />
                  <line x1='7' y1='7' x2='7.01' y2='7' />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Category Strategy</h3>
                <p>
                  Primary Category • Secondary Categories • Keyword-Rich
                  Description
                </p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar3}`}>
              <div className={styles.pillarIcon}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Review Velocity</h3>
                <p>Rating Average • Review Count • Response Rate</p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={styles.centralHub}>
              <div className={styles.hubCore}>
                <div className={styles.hubPulse}></div>
                <div className={styles.hubContent}>
                  <span className={styles.hubTag}>TARGET_DESTINATION</span>
                  <div className={styles.hubTitle}>GOOGLE MAP PACK</div>
                  <div className={styles.hubStatus}>VISIBILITY_ACHIEVED</div>
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
            <div className={styles.statNumber}>30–90</div>
            <p>Days to map pack movement</p>
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
              Monthly reports showing exactly what changed
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
              Direct access — you're talking to me, not a team
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
