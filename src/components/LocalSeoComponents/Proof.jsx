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
          <h2 className={styles.heading}>
            The Mechanics of Local SEO Visibility
          </h2>
          <p className={styles.intro}>
            Visibility isn't random. It's the result of three specific
            engineering blocks working in sync to power your business into the
            Map Pack.
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
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M19,3V5H21V21H13V17H11V21H3V9L10 3H12V5L19 3M5 19H7V17H5V19M5 15H7V13H5V15M5 11H7V9H5V11M9 15H11V13H9V15M9 11H11V9H9V11M19 19V5L15 6V7H17V8H15V10H17V11H15V13H17V14H15V16H17V17H15V19H19M18 8H17V7H18V8M18 10V11H17V10H18M18 13V14H17V13H18M18 16V17H17V16H18Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>GBP Optimization</h3>
                <p>
                  Profile Completeness • Image Geostamping • Strategic Service
                  Lists
                </p>
              </div>
              <div className={styles.flowLine}></div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar2}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Citation Architecture</h3>
                <p>
                  NAP Consistency • Directory Sync • Industry-Specific Databases
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
                <h3>Reputation Signal</h3>
                <p>
                  Review Request System • Response Velocity • Keyword-Rich
                  Feedback
                </p>
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
