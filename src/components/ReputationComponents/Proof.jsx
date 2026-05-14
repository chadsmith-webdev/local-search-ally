"use client";

import { motion } from "framer-motion";
import styles from "./Proof.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Proof() {
  return (
    <section className={styles.section} aria-labelledby='proof-heading'>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Why It Works</span>
          <h2 className={styles.heading} id='proof-heading'>
            How Google Reads Your Reputation
          </h2>
          <p className={styles.intro}>
            Google doesn't guess at trust — it measures it. Three signals tell
            the algorithm whether you belong in the Map Pack or not.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className={styles.engineContainer}
        >
          <div className={styles.engineGrid}>
            <motion.div
              variants={fadeUp}
              className={styles.pillar}
              tabIndex={0}
            >
              <div className={styles.pillarIcon} aria-hidden='true'>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Review Volume</h3>
                <p>
                  More reviews signal more customers served. Low counts make you
                  invisible regardless of quality.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.pillar}
              tabIndex={0}
            >
              <div className={styles.pillarIcon} aria-hidden='true'>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Rating Quality</h3>
                <p>
                  4.7+ with recent reviews outranks 4.2 with old ones. Recency
                  matters as much as the number.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.pillar}
              tabIndex={0}
            >
              <div className={styles.pillarIcon} aria-hidden='true'>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2M20,16H5.17L4,17.17V4H20V16Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Response Rate</h3>
                <p>
                  Owners who respond to reviews — good and bad — signal trust
                  and engagement that Google rewards.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.centralHub}
              aria-label='Trusted reputation result'
            >
              <div className={styles.hubCore}>
                <div className={styles.hubPulse}></div>
                <div className={styles.hubContent}>
                  <span className={styles.hubTag}>TARGET_DESTINATION</span>
                  <div className={styles.hubTitle}>TRUSTED REPUTATION</div>
                  <div className={styles.hubStatus}>VISIBILITY_ACHIEVED</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className={styles.stats}
        >
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>47%</span>
            <p className={styles.statLabel}>
              of consumers won't use a business with fewer than 20 reviews
            </p>
            <span className={styles.statSource}>BrightLocal 2026</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>100%</span>
            <p className={styles.statLabel}>
              of my review work is white-hat — no fake reviews, ever
            </p>
            <span className={styles.statSource}>Local Search Ally</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>0</span>
            <p className={styles.statLabel}>
              long-term contracts — you own your profile and results always
            </p>
            <span className={styles.statSource}>No Lock-In</span>
          </motion.div>
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
