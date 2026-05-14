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
            What Makes a Contractor Website Convert
          </h2>
          <p className={styles.intro}>
            Three things separate a website that generates leads from one that
            just takes up space on the internet.
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
                    d='M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Mobile Speed</h3>
                <p>
                  88% of local mobile searches lead to a call or visit within 24
                  hours. A fast, phone-optimized site captures that intent
                  before it goes elsewhere.
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
                    d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>SEO Foundation</h3>
                <p>
                  Proper heading hierarchy, meta tags, structured data, and fast
                  Core Web Vitals. Every page is built to rank for the services
                  you offer in the cities you serve.
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
                    d='M10.07,14.27C10.57,14.03 11.16,14.24 11.4,14.74L13.7,19.46L15.5,18.6L13.19,13.88C12.95,13.38 13.16,12.78 13.66,12.55L13.95,12.45L16.7,12.05L8,5.12V16.32L10,14.74L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z'
                  />
                </svg>
              </div>
              <div className={styles.pillarContent}>
                <h3>Clear Conversion Paths</h3>
                <p>
                  Every page has one job: get the visitor to call, book, or
                  submit a form. No dead ends, no confusion, no buried phone
                  numbers.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.centralHub}
              aria-label='Lead generation result'
            >
              <div className={styles.hubCore}>
                <div className={styles.hubPulse}></div>
                <div className={styles.hubContent}>
                  <span className={styles.hubTag}>TARGET_DESTINATION</span>
                  <div className={styles.hubTitle}>LEADS GENERATED</div>
                  <div className={styles.hubStatus}>CONVERSION_ACTIVE</div>
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
            <span className={styles.statNumber}>61%</span>
            <p className={styles.statLabel}>
              of consumers are more likely to contact a business with a website
            </p>
            <span className={styles.statSource}>BrightLocal</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>88%</span>
            <p className={styles.statLabel}>
              of local mobile searchers call or visit a business within 24 hours
            </p>
            <span className={styles.statSource}>Think With Google</span>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.statBox}>
            <span className={styles.statNumber}>0</span>
            <p className={styles.statLabel}>
              long-term contracts — you own your site and hosting always
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
