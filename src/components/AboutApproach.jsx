"use client";

import { motion } from "framer-motion";
import styles from "./AboutApproach.module.css";
import AuditGraphic from "./AuditGraphic";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutApproach() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className={styles.grid}
        >
          <div className={styles.textCol}>
            <div className={styles.sectionHead}>
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                The Process
              </motion.span>
              <motion.h2 className={styles.h2} variants={fadeUp}>
                Why I start with an audit &mdash;{" "}
                <em className={styles.accent}>every single time.</em>
              </motion.h2>
            </div>

            <div className={styles.bodyText}>
              <motion.p variants={fadeUp}>
                Most agencies show up with a plan before they know what&rsquo;s
                wrong. That never made sense to me. You wouldn&rsquo;t let a
                plumber recommend a full re-pipe before he&rsquo;d even looked at
                the problem.
              </motion.p>
              <motion.p variants={fadeUp}>
                Every contractor I work with starts with an audit. It checks your
                Google Business Profile, your reviews, your website, your citation
                consistency across directories, and how your competitors stack up
                against you. You get the findings in plain English with specific
                numbers &mdash; not a vague summary.
              </motion.p>
              <motion.p variants={fadeUp}>
                That audit is free. It&rsquo;s not a lead-in to a sales call.
                It&rsquo;s the work.
              </motion.p>
              <motion.p variants={fadeUp}>
                If you want help fixing what it finds, we can talk about that.
                Month-to-month, no contracts until you decide you&rsquo;re ready.
              </motion.p>
            </div>
          </div>

          <div className={styles.graphicCol}>
            <AuditGraphic />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
