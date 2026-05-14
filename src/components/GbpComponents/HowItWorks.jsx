"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "../SignalMapDiagram.module.css";

const SIGNALS = [
  {
    id: "accuracy",
    label: "Profile Accuracy",
    sub: "Name, address, phone, hours",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M10.6,16.6L17.65,9.55L16.23,8.13L10.6,13.75L7.77,10.92L6.36,12.33L10.6,16.6M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z'
        />
      </svg>
    ),
    position: "topLeft",
  },
  {
    id: "categories",
    label: "Category Match",
    sub: "Primary & secondary categories",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'
        />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "reviews",
    label: "Review Signals",
    sub: "Rating, count & response rate",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
        />
      </svg>
    ),
    position: "bottomLeft",
  },
  {
    id: "engagement",
    label: "Activity Signals",
    sub: "Posts, photos & Q&A updates",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3'
        />
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
