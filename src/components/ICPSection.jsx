'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ICPSection.module.css';

const TRADES = [
  {
    name: 'HVAC',
    desc: 'Seasonal demand spikes need to find you, not your competitor.',
  },
  {
    name: 'Plumbing',
    desc: 'Emergency searches happen fast. You need to show up first.',
  },
  {
    name: 'Roofing',
    desc: 'Storm season is short. Your window to rank is shorter.',
  },
  {
    name: 'Electrical',
    desc: 'High-ticket jobs start with trust. Trust starts with visibility.',
  },
  {
    name: 'Landscaping',
    desc: 'Spring search volume is real. Most landscapers miss it.',
  },
  {
    name: 'Remodeling',
    desc: 'Long sales cycles mean SEO compounds faster than ads.',
  },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const headerVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ICPSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="who-its-for" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          variants={headerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          WHO THIS IS FOR
        </motion.p>

        <motion.h2
          className={styles.h2}
          variants={headerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.08, duration: 0.5, ease: 'easeOut' }}
        >
          Built for NWA home service trades.
        </motion.h2>

        <motion.p
          className={styles.lead}
          variants={headerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.16, duration: 0.5, ease: 'easeOut' }}
        >
          If you own a trade business in Northwest Arkansas and you rely on
          Google to find new customers — this is for you.
        </motion.p>

        <div className={styles.grid}>
          {TRADES.map((trade, i) => (
            <motion.div
              key={trade.name}
              className={styles.card}
              custom={i}
              variants={slideInLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <p className={styles.tradeName}>{trade.name}</p>
              <p className={styles.tradeDesc}>{trade.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.notFit}
          variants={headerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: TRADES.length * 0.12 + 0.1, duration: 0.5, ease: 'easeOut' }}
        >
          Not in NWA? I&apos;m not the right fit — local SEO is most effective
          when the person doing it knows the market.
        </motion.p>
      </div>
    </section>
  );
}
