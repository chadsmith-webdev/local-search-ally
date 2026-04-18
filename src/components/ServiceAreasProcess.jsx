"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServiceAreasProcess.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ServiceAreasProcess({ content, cta }) {
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
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h2 className={styles.h2}>{content.h2}</h2>
          <p className={styles.lead}>{content.subhead}</p>
        </motion.div>

        {/* Steps */}
        <motion.div className={styles.steps} variants={container}>
          {content.steps.map((step) => (
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
                <p className={styles.stepDesc}>{step.body}</p>
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
          <Link href={cta.primary.href} className={styles.auditCta}>
            {cta.primary.text}
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
