"use client";

import { motion } from "framer-motion";
import styles from "./CityWhy.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/**
 * @param {string} city - City name for copy customization
 */
export default function CityWhy({ city }) {
  const results = [
    {
      num: "1",
      name: `${city} HVAC & Repair`,
      winner: true,
      tag: "gets the call",
    },
    { num: "2", name: "NWA Climate Control", winner: true, tag: null },
    { num: "3", name: "Benton County Heating", winner: true, tag: null },
    {
      num: "—",
      name: "Your Business",
      winner: false,
      missing: true,
      tag: null,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            The Real Problem
          </motion.span>

          <motion.h2 variants={fadeUp} className={styles.h2}>
            Your competitors aren't better. They're just{" "}
            <em>easier to find.</em>
          </motion.h2>

          <motion.div variants={fadeUp} className={styles.body}>
            <p>
              You've spent years building a reputation on quality work and
              word-of-mouth. But word-of-mouth only reaches so far.
            </p>
            <p>
              When a homeowner in {city} needs an HVAC company at 9pm, or a new
              family searching for a plumber they can trust — they go to Google.
              They click one of the first three results, pick up the phone, and
              that's it.
            </p>
            <p>
              The best contractor in {city} shouldn't be the hardest to find.
              But if you're not showing up on the Map Pack, you're invisible.
              And invisible means zero calls.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className={styles.serp}>
            <div className={styles.serpLabel}>Google Search Results</div>
            {results.map((result) => (
              <motion.div
                key={result.num}
                className={`${styles.result} ${result.winner ? styles.winner : ""} ${result.missing ? styles.missing : ""}`}
                variants={fadeUp}
              >
                <span className={styles.resultNum}>{result.num}</span>
                <div className={styles.resultBody}>
                  <p className={styles.resultName}>{result.name}</p>
                  {result.tag && (
                    <span className={styles.resultTag}>{result.tag}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
