"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./HowItWorksSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const STEPS = [
  {
    num: "01",
    title: "Audit",
    desc: "I review your local visibility, service pages, and competitor presence to find the highest-impact gaps — what's holding you back and what's easiest to fix first.",
  },
  {
    num: "02",
    title: "Fix Priority Gaps",
    desc: "I improve what matters most first: local relevance, on-page clarity, Google Business Profile, and lead paths that actually support calls from real customers.",
  },
  {
    num: "03",
    title: "Grow and Track",
    desc: "I monitor progress and adjust based on what's working. You get clear monthly reports — rankings, calls, and actions taken. No mystery, no jargon.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id='how-it-works'>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.h2}>
            Three steps. No retainer lock-in.
            <br />
            No guesswork.
          </h2>
          <p className={styles.lead}>
            I keep the process simple because complicated marketing plans rarely
            get executed. Here&rsquo;s exactly what working together looks like.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div className={styles.steps} variants={container}>
          {STEPS.map((step) => (
            <motion.div
              key={step.num}
              className={styles.step}
              variants={fadeUp}
            >
              <div className={styles.stepNum}>
                <span className={styles.stepNumText}>{step.num}</span>
              </div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note + audit CTA */}
        <motion.div className={styles.noteRow} variants={fadeUp}>
          <div className={styles.note}>
            <div className={styles.noteIcon}>
              <svg
                viewBox='0 0 15 15'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='7.5' cy='7.5' r='6.5' />
                <path d='M7.5 5v3.5M7.5 10.5v.5' />
              </svg>
            </div>
            <p className={styles.noteText}>
              <strong>No long-term contracts.</strong> Every engagement is
              month-to-month. You stay because it&rsquo;s working — not because
              you&rsquo;re locked in.
            </p>
          </div>
          <Link href='/services/audit' className={styles.auditCta}>
            Start with the free audit
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.75'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M3 7.5h9M8.5 4l3.5 3.5L8.5 11' />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
