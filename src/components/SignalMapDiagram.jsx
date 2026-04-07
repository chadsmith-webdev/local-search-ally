"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./SignalMapDiagram.module.css";

const SIGNALS = [
  {
    id: "findability",
    label: "Findability",
    sub: "GBP & citations",
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
    position: "topLeft",
  },
  {
    id: "relevance",
    label: "Relevance",
    sub: "Service pages & keywords",
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
        <circle cx='9' cy='9' r='6' />
        <path d='m17 17-3.5-3.5' />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "trust",
    label: "Trust",
    sub: "Reviews & photos",
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
    id: "conversion",
    label: "Conversion",
    sub: "CTAs & click-to-call",
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
        <path d='M3 5a2 2 0 0 1 2-2h1.5l2 4.5-1.5 1a10 10 0 0 0 4.5 4.5l1-1.5L17 13.5V15a2 2 0 0 1-2 2 12 12 0 0 1-12-12Z' />
      </svg>
    ),
    position: "bottomRight",
  },
];

export default function SignalMapDiagram() {
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
    <section className={styles.section} aria-labelledby='signal-map-heading'>
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
          <h2 className={styles.heading} id='signal-map-heading'>
            How Local SEO Works
          </h2>
          <p className={styles.lead}>
            Four signals that determine whether Google sends you the call — or
            sends it to your competitor.
          </p>
        </motion.div>

        {/* Diagram */}
        <div className={styles.diagramWrap}>
          {/* Connector lines drawn in CSS — no SVG coordinates */}
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
