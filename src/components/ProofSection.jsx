'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ProofSection.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

const DEMO_CARDS = [
  {
    label: 'PLUMBING DEMO',
    heading: 'Emergency + maintenance calls from local search',
    description:
      'Built to rank for high-intent searches like "emergency plumber Rogers AR" — fast-loading, clear booking path, GBP-optimized.',
  },
  {
    label: 'HVAC DEMO',
    heading: 'Seasonal demand capture with clear booking paths',
    description:
      'Structured to rank for seasonal terms — heating tune-ups in fall, AC repair in spring. Schema markup included.',
  },
  {
    label: 'ELECTRICAL DEMO',
    heading: 'Trust signals for higher-ticket jobs',
    description:
      'Panel upgrades and EV charger installs need trust before clicks. Credibility-first layout with local review schema.',
  },
];

const PLEDGE_ITEMS = [
  "I will never claim results I haven't achieved.",
  'I will tell you if something is outside my skill set.',
  'I will never lock you into a contract.',
  'I will communicate clearly and often.',
];

export default function ProofSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  return (
    <section id="proof" className={styles.section} ref={sectionRef}>
      <div className={styles.bloom} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          WHY TRUST THIS
        </motion.p>

        <motion.h2
          className={styles.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
        >
          Transparent by design.
        </motion.h2>

        <div className={styles.demoGrid}>
          {DEMO_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              className={styles.demoCard}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 + i * 0.15 }}
            >
              <span className={styles.demoLabel}>{card.label}</span>
              <p className={styles.demoHeading}>{card.heading}</p>
              <p className={styles.demoDesc}>{card.description}</p>
              <a href="/portfolio" className={styles.demoLink}>
                View demo →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.pledgeHeading}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
        >
          THE TRANSPARENCY PLEDGE
        </motion.p>

        <div className={styles.pledgeGrid}>
          {PLEDGE_ITEMS.map((item, i) => (
            <motion.p
              key={i}
              className={styles.pledgeItem}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.68 + i * 0.15 }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
