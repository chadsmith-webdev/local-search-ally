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
          <h2 className={styles.heading}>The Mechanics of Citation Building</h2>
          <p className={styles.intro}>
            Trust isn't built overnight. It's built by sending consistent,
            verified signals across the platforms Google uses to confirm your
            business is real.
          </p>
        </motion.div>

        {/* Citation Engine Graphic */}
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
                    d='M10.6,16.6L17.65,9.55L16.23,8.13L10.6,13.75L7.77,10.92L6.36,12.33L10.6,16.6M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>NAP Consistency</h3>
                <p>
                  Name, Address & Phone matching across every platform Google
                  checks
                </p>
              </div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar2}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Directory Coverage</h3>
                <p>
                  Listed in the platforms Google cross-references — general,
                  trade-specific, and local
                </p>
              </div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar3}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Ongoing Monitoring</h3>
                <p>
                  Catching errors and drift before they damage rankings — not
                  after
                </p>
              </div>
            </div>

            <div className={styles.centralHub}>
              <div className={styles.hubCore}>
                <div className={styles.hubPulse}></div>
                <span className={styles.hubTag}>TARGET_DESTINATION</span>
                <div className={styles.hubTitle}>LOCAL AUTHORITY</div>
                <div className={styles.hubStatus}>TRUST_ESTABLISHED</div>
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
            <div className={styles.statNumber}>50+</div>
            <p>Directories audited and built</p>
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
