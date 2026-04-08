"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "../SignalMapDiagram.module.css";

const SIGNALS = [
  {
    id: "volume",
    label: "Review Volume",
    sub: "Count, recency & consistency",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2l2.4 4.8 5.3.8-3.85 3.75.9 5.25L10 14l-4.75 2.58.9-5.25L2.3 7.6l5.3-.8Z" />
      </svg>
    ),
    position: "topLeft",
  },
  {
    id: "rating",
    label: "Star Rating",
    sub: "Average score & trend direction",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 2" />
      </svg>
    ),
    position: "topRight",
  },
  {
    id: "response",
    label: "Response Rate",
    sub: "Owner replies to reviews",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 3H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5l3.5 3.5 3.5-3.5H18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
      </svg>
    ),
    position: "bottomLeft",
  },
  {
    id: "keywords",
    label: "Keyword-Rich Reviews",
    sub: "Trade & city mentioned by customers",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="9" r="6" />
        <path d="M13.5 13.5L18 18" />
      </svg>
    ),
    position: "bottomRight",
  },
];

export default function HowItWorks() {
  const shouldReduce = useReducedMotion();

  const sectionFade = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const centerReveal = {
    hidden: { opacity: 0, scale: shouldReduce ? 1 : 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 } },
  };

  const cardVariants = {
    topLeft:    { hidden: { opacity: 0, x: shouldReduce ? 0 : -24, y: shouldReduce ? 0 : -24 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.35 } } },
    topRight:   { hidden: { opacity: 0, x: shouldReduce ? 0 : 24,  y: shouldReduce ? 0 : -24 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.45 } } },
    bottomLeft: { hidden: { opacity: 0, x: shouldReduce ? 0 : -24, y: shouldReduce ? 0 : 24  }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.55 } } },
    bottomRight:{ hidden: { opacity: 0, x: shouldReduce ? 0 : 24,  y: shouldReduce ? 0 : 24  }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.65 } } },
  };

  return (
    <section className={styles.section} aria-labelledby="rep-how-heading">
      <div className={styles.container}>
        <motion.div className={styles.header} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFade}>
          <span className={styles.eyebrow}>The Mechanism</span>
          <h2 className={styles.heading} id="rep-how-heading">How Reviews Build Local Trust</h2>
          <p className={styles.lead}>
            Four reputation signals that tell Google — and every homeowner reading your
            profile — whether you're the safe choice or the risk.
          </p>
        </motion.div>

        <div className={styles.diagramWrap}>
          <span className={`${styles.line} ${styles.lineTL}`} aria-hidden="true" />
          <span className={`${styles.line} ${styles.lineTR}`} aria-hidden="true" />
          <span className={`${styles.line} ${styles.lineBL}`} aria-hidden="true" />
          <span className={`${styles.line} ${styles.lineBR}`} aria-hidden="true" />

          {SIGNALS.map((s) => (
            <motion.div
              key={s.id}
              className={`${styles.signalCard} ${styles[s.position]}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants[s.position]}
            >
              <span className={styles.signalIcon}>{s.icon}</span>
              <strong className={styles.signalLabel}>{s.label}</strong>
              <span className={styles.signalSub}>{s.sub}</span>
            </motion.div>
          ))}

          <motion.div className={styles.center} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={centerReveal}>
            <span className={styles.centerRing} aria-hidden="true" />
            <span className={styles.centerRing2} aria-hidden="true" />
            <span className={styles.centerLabel}>Local<br />Trust</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
