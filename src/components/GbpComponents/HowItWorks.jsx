"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "../SignalMapDiagram.module.css";

const SIGNALS = [
  {
    id: "accuracy",
    label: "Profile Accuracy",
    sub: "Name, address, phone, hours",
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <rect x='3' y='3' width='14' height='14' rx='2' />
        <path d='M7 10l2 2 4-4' />
      </svg>
    ),
    position: "topLeft",
  },
  {
    id: "categories",
    label: "Category Match",
    sub: "Primary & secondary categories",
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <path d='M3 5h2M3 10h2M3 15h2M7 5h10M7 10h10M7 15h10' />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "reviews",
    label: "Review Signals",
    sub: "Rating, count & response rate",
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <path d='M10 2l2.4 4.8 5.3.8-3.85 3.75.9 5.25L10 14l-4.75 2.58.9-5.25L2.3 7.6l5.3-.8Z' />
      </svg>
    ),
    position: "bottomLeft",
  },
  {
    id: "engagement",
    label: "Activity Signals",
    sub: "Posts, photos & Q&A updates",
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <rect x='2' y='3' width='7' height='7' rx='1' />
        <rect x='11' y='3' width='7' height='7' rx='1' />
        <rect x='2' y='12' width='7' height='7' rx='1' />
        <path d='M11 15.5h7M14.5 12v7' />
      </svg>
    ),
    position: "bottomRight",
  },
];

export default function HowItWorks() {
  const shouldReduce = useReducedMotion();

  const sectionFade = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const centerReveal = {
    hidden: { opacity: 0, scale: shouldReduce ? 1 : 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 },
    },
  };

  const cardVariants = {
    topLeft: {
      hidden: {
        opacity: 0,
        x: shouldReduce ? 0 : -24,
        y: shouldReduce ? 0 : -24,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.35 },
      },
    },
    topRight: {
      hidden: {
        opacity: 0,
        x: shouldReduce ? 0 : 24,
        y: shouldReduce ? 0 : -24,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.45 },
      },
    },
    bottomLeft: {
      hidden: {
        opacity: 0,
        x: shouldReduce ? 0 : -24,
        y: shouldReduce ? 0 : 24,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.55 },
      },
    },
    bottomRight: {
      hidden: {
        opacity: 0,
        x: shouldReduce ? 0 : 24,
        y: shouldReduce ? 0 : 24,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.65 },
      },
    },
  };

  return (
    <section className={styles.section} aria-labelledby='gbp-how-heading'>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <span className={styles.eyebrow}>The Mechanism</span>
          <h2 className={styles.heading} id='gbp-how-heading'>
            How GBP Optimization Works
          </h2>
          <p className={styles.lead}>
            Four profile signals that determine whether Google puts you in the
            Map Pack — or buries you below competitors who got it right.
          </p>
        </motion.div>

        {/* Diagram */}
        <div className={styles.diagramWrap}>
          <span
            className={`${styles.line} ${styles.lineTL}`}
            aria-hidden='true'
          />
          <span
            className={`${styles.line} ${styles.lineTR}`}
            aria-hidden='true'
          />
          <span
            className={`${styles.line} ${styles.lineBL}`}
            aria-hidden='true'
          />
          <span
            className={`${styles.line} ${styles.lineBR}`}
            aria-hidden='true'
          />

          {SIGNALS.map((s) => (
            <motion.div
              key={s.id}
              className={`${styles.signalCard} ${styles[s.position]}`}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={cardVariants[s.position]}
            >
              <span className={styles.signalIcon}>{s.icon}</span>
              <strong className={styles.signalLabel}>{s.label}</strong>
              <span className={styles.signalSub}>{s.sub}</span>
            </motion.div>
          ))}

          {/* Center node */}
          <motion.div
            className={styles.center}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={centerReveal}
          >
            <span className={styles.centerRing} aria-hidden='true' />
            <span className={styles.centerRing2} aria-hidden='true' />
            <span className={styles.centerLabel}>
              Google
              <br />
              Map Pack
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
