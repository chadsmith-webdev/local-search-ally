"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./CitationWebDiagram.module.css";

const SIGNALS = [
  {
    id: "core-directories",
    label: "Core Directories",
    sub: "Yelp, Bing, Apple Maps, BBB",
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
        <rect x='2' y='3' width='16' height='14' rx='2' />
        <path d='M6 7h8M6 10h8M6 13h5' />
      </svg>
    ),
    position: "topLeft",
  },
  {
    id: "trade-platforms",
    label: "Trade Platforms",
    sub: "Angi, HomeAdvisor, Houzz",
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
        <path d='M3 9l7-6 7 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z' />
        <path d='M8 19v-7h4v7' />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "local-citations",
    label: "Local Citations",
    sub: "Chamber, city directories",
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
        <path d='M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Z' />
        <circle cx='10' cy='8' r='2' />
      </svg>
    ),
    position: "bottomLeft",
  },
  {
    id: "social-review",
    label: "Social & Review",
    sub: "Facebook, Nextdoor, Google",
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
    position: "bottomRight",
  },
];

export default function CitationWebDiagram() {
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
      hidden: { opacity: 0, x: shouldReduce ? 0 : -24, y: shouldReduce ? 0 : -24 },
      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.35 } },
    },
    topRight: {
      hidden: { opacity: 0, x: shouldReduce ? 0 : 24, y: shouldReduce ? 0 : -24 },
      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.45 } },
    },
    bottomLeft: {
      hidden: { opacity: 0, x: shouldReduce ? 0 : -24, y: shouldReduce ? 0 : 24 },
      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.55 } },
    },
    bottomRight: {
      hidden: { opacity: 0, x: shouldReduce ? 0 : 24, y: shouldReduce ? 0 : 24 },
      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.65 } },
    },
  };

  return (
    <section className={styles.section} aria-labelledby='citation-web-heading'>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <span className={styles.eyebrow}>The Network</span>
          <h2 className={styles.heading} id='citation-web-heading'>
            How Citation Consistency Works
          </h2>
          <p className={styles.lead}>
            Four types of sources that feed your NAP data to Google. When they
            all agree, Google trusts your listing — and ranks it higher.
          </p>
        </motion.div>

        {/* Diagram */}
        <div className={styles.diagramWrap}>
          {/* Connector lines */}
          <span className={`${styles.line} ${styles.lineTL}`} aria-hidden='true' />
          <span className={`${styles.line} ${styles.lineTR}`} aria-hidden='true' />
          <span className={`${styles.line} ${styles.lineBL}`} aria-hidden='true' />
          <span className={`${styles.line} ${styles.lineBR}`} aria-hidden='true' />

          {/* Signal cards */}
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
              NAP
              <br />
              Consistent
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
