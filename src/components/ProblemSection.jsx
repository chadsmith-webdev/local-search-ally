"use client";

import { motion } from "framer-motion";
import styles from "./ProblemSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const results = [
  {
    num: "1",
    name: "Rogers HVAC & Repair",
    winner: true,
    tag: "gets the call",
  },
  { num: "2", name: "NWA Climate Control", winner: true, tag: null },
  { num: "3", name: "Benton County Heating", winner: true, tag: null },
  { num: "—", name: "Your Business", winner: false, missing: true, tag: null },
];

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: headline + body */}
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
              When a homeowner in Rogers needs an HVAC company at 9pm, or a new
              family in Bentonville is searching for a plumber they can trust —
              they go to Google. They click one of the first three results, pick
              up the phone, and that's it.
            </p>
            <p>
              If you're not there, you don't exist to them. The job goes to
              someone else — and you never even knew it was available.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: scenario + mockup + stat */}
        <motion.div
          className={styles.right}
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Scenario */}
          <motion.div variants={fadeUp} className={styles.scenario}>
            <p className={styles.scenarioLabel}>Real scenario · 9:14pm</p>
            <p className={styles.scenarioText}>
              A homeowner in Rogers searches{" "}
              <strong>"HVAC repair near me"</strong> on her phone. Three
              companies appear in the Map Pack. She calls the first one, books
              the job, and leaves a five-star review — for someone else.
            </p>
          </motion.div>

          {/* Search result mockup */}
          <motion.div variants={fadeUp} className={styles.mockup}>
            <p className={styles.mockupLabel}>
              Google Map Pack · "HVAC repair Rogers AR"
            </p>
            {results.map((r) => (
              <div
                key={r.num}
                className={`${styles.result} ${r.winner ? styles.winner : ""}`}
              >
                <span className={styles.resultNum}>{r.num}</span>
                <span
                  className={`${styles.resultName} ${r.missing ? styles.missing : ""}`}
                >
                  {r.name}
                </span>
                {r.tag && <span className={styles.resultTag}>{r.tag}</span>}
              </div>
            ))}
          </motion.div>

          {/* Stat */}
          <motion.div variants={fadeUp} className={styles.stat}>
            <p className={styles.statText}>
              <strong>88% of consumers</strong> who search for a local service
              business on mobile call or visit within 24 hours.
            </p>
            <p className={styles.statSource}>— Think With Google</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
