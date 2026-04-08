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
          <h2 className={styles.heading}>The Mechanism of Local Trust</h2>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>NAP Consistency</h3>
                <p>Name, Address & Phone matching across every platform Google checks</p>
              </div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar2}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M7 8h10M7 12h7" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Directory Coverage</h3>
                <p>Listed in the platforms Google cross-references — general, trade-specific, and local</p>
              </div>
            </div>

            <div className={`${styles.pillar} ${styles.pillar3}`}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Ongoing Monitoring</h3>
                <p>Catching errors and drift before they damage rankings — not after</p>
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
          <h3>What You Can Count On</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Full audit report before I touch a single listing
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Every citation documented with a link and status
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Direct access — you're not talking to a team, you're talking to me
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Monthly reports showing your citation count and accuracy score
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              No contracts — stop anytime if it's not working
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
