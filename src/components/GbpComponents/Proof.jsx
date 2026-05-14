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
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M16,12.7L13.2,15.5L11.8,14.1L10.4,15.5L13.2,18.4L17.5,14.1L16,12.7M19,3H14.8C14.4,1.8 13.3,1 12,1C10.7,1 9.6,1.8 9.2,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,19H5V5H19V19Z'
                  />
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
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4A2,2 0 0,0 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z'
                  />
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
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
                  />
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
          <h3 className={styles.commitmentHeading}>My commitments to you</h3>
          <ul className={styles.list}>
            {[
              "I will never claim results I haven't achieved.",
              "I will tell you if something is outside my skill set.",
              "I will never lock you into a contract.",
              "I will communicate clearly and often.",
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <svg
                  className={styles.checkmark}
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fill='currentColor'
                    d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z'
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
