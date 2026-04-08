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

const PROBLEMS = [
  {
    id: "ghost",
    tag: "The Ghost Business",
    body: "No Google Business Profile means missing the #1 tool for local visibility. To nearly half your potential customers, you simply don't exist.",
  },
  {
    id: "trust",
    tag: "The Trust Gap",
    body: "Poor engagement or missing reviews tell Google your business might not be active. Active businesses respond to reviews. Invisible ones don't.",
  },
  {
    id: "trap",
    tag: "The Search Trap",
    body: "When your name, address, and phone number aren't consistent across the web, search engines lose confidence in your data — and rank your competitors instead.",
  },
];

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
        {/* Left: headline + problems */}
        <motion.div
          className={styles.left}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            The Visibility Problem
          </motion.span>

          <motion.h2 variants={fadeUp} className={styles.h2}>
            Invisibility is the silent thief of{" "}
            <em>NWA small business.</em>
          </motion.h2>

          <motion.p variants={fadeUp} className={styles.intro}>
            You&rsquo;ve spent years mastering your trade. But while
            you&rsquo;re out in the field, three invisible problems are keeping
            new customers from finding you.
          </motion.p>

          <motion.div variants={stagger} className={styles.problems}>
            {PROBLEMS.map((p) => (
              <motion.div key={p.id} variants={fadeUp} className={styles.problem}>
                <span className={styles.problemTag}>{p.tag}</span>
                <p className={styles.problemBody}>{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: scenario + mockup + stat */}
        <motion.div
          className={styles.right}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Scenario */}
          <motion.div variants={fadeUp} className={styles.scenario}>
            <p className={styles.scenarioLabel}>Real scenario · 9:14pm</p>
            <p className={styles.scenarioText}>
              A homeowner in Rogers searches{" "}
              <strong>&ldquo;HVAC repair near me&rdquo;</strong> on her phone.
              Three companies appear in the Map Pack. She calls the first one,
              books the job, and leaves a five-star review — for someone else.
            </p>
          </motion.div>

          {/* Search result mockup */}
          <motion.div variants={fadeUp} className={styles.mockup}>
            <p className={styles.mockupLabel}>
              Google Map Pack · &ldquo;HVAC repair Rogers AR&rdquo;
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
