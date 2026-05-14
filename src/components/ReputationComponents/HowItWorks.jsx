"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "../SignalMapDiagram.module.css";

const SIGNALS = [
  {
    id: "volume",
    label: "Review Volume",
    sub: "Count, recency & consistency",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
        />
      </svg>
    ),
    position: "topLeft",
  },
  {
    id: "rating",
    label: "Star Rating",
    sub: "Average score & trend direction",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z'
        />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "response",
    label: "Response Rate",
    sub: "Owner replies to reviews",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2M20,16H5.17L4,17.17V4H20V16Z'
        />
      </svg>
    ),
    position: "bottomLeft",
  },
  {
    id: "keywords",
    label: "Keyword-Rich Reviews",
    sub: "Trade & city mentioned by customers",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
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
    <section className={styles.section} aria-labelledby='rep-how-heading'>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <span className={styles.eyebrow}>The Mechanism</span>
          <h2 className={styles.heading} id='rep-how-heading'>
            How Reviews Build Local Trust
          </h2>
          <p className={styles.lead}>
            Four reputation signals that tell Google — and every homeowner
            reading your profile — whether you're the safe choice or the risk.
          </p>
        </motion.div>

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
              Local
              <br />
              Trust
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
