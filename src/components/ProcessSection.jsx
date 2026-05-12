"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    num: "01",
    title: "Free Audit",
    body: "Run the audit at audit.localsearchally.com. In 90 seconds you get a score, a gap list, and the three things most likely to move your ranking. No email required.",
  },
  {
    num: "02",
    title: "A Quick Call",
    body: "If the audit shows I can help, I schedule a 30-minute call. I tell you exactly what I\u2019d fix, in what order, and what it costs. No pitch, no pressure.",
  },
  {
    num: "03",
    title: "I Get to Work",
    body: "Month-to-month. You get a clear progress report every 30 days \u2014 rankings, GBP call clicks, and what I did that month. You can stop any time. Most clients don\u2019t.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='how-it-works'>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>HOW IT WORKS</span>
          <h2 className={styles.h2}>Three steps. No lock-in.</h2>
        </div>

        <div className={styles.timeline}>
          {/* Connector line */}
          <div className={styles.connectorLine} aria-hidden='true' />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={{ opacity: 0, x: -48 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.18 }}
            >
              <div className={styles.stepNode}>
                <span className={styles.stepNum}>{step.num}</span>
                <div className={styles.nodePulse} aria-hidden='true' />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.noLockIn}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className={styles.lockInPip} aria-hidden='true' />
          Month-to-month. Cancel any time. No cancellation fees.
        </motion.div>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <Link
            href={process.env.NEXT_PUBLIC_AUDIT_URL}
            className={styles.btnPrimary}
          >
            Run Your Free Audit →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
