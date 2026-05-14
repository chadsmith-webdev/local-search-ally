"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "../SignalMapDiagram.module.css";

const SIGNALS = [
  {
    id: "mobile",
    label: "Mobile Speed",
    sub: "Core Web Vitals & load time",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z'
        />
      </svg>
    ),
    position: "topLeft",
  },
  {
    id: "seo",
    label: "SEO Structure",
    sub: "Meta tags, headings & schema",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
        />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "conversion",
    label: "Conversion Paths",
    sub: "CTAs, forms & click-to-call",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M10.07,14.27C10.57,14.03 11.16,14.24 11.4,14.74L13.7,19.46L15.5,18.6L13.19,13.88C12.95,13.38 13.16,12.78 13.66,12.55L13.95,12.45L16.7,12.05L8,5.12V16.32L10,14.74L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z'
        />
      </svg>
    ),
    position: "bottomLeft",
  },
  {
    id: "trust",
    label: "Trust Signals",
    sub: "Reviews, photos & proof",
    icon: (
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path
          fill='currentColor'
          d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
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
    <section className={styles.section} aria-labelledby='wd-how-heading'>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <span className={styles.eyebrow}>The Mechanism</span>
          <h2 className={styles.heading} id='wd-how-heading'>
            What Makes a Contractor Website Work
          </h2>
          <p className={styles.lead}>
            Four elements that separate a website that generates calls from one
            that just exists. Every site I build addresses all four from day
            one.
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
              Phone
              <br />
              Rings
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
