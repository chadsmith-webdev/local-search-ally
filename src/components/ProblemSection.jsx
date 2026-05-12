'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ProblemSection.module.css';

const FAILURE_MODES = [
  {
    label: 'No GBP presence',
    desc: "An unclaimed or neglected profile tells Google you're not serious about serving the area.",
  },
  {
    label: "Service pages that don't rank",
    desc: 'If your website says "we do it all" and nothing else, it shows up for nothing.',
  },
  {
    label: 'Zero local citations',
    desc: 'Google cross-references your name, address, and phone across the web. Gaps kill trust.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="the-problem" className={styles.section} ref={ref}>
      {/* Atmospheric bloom */}
      <div className={styles.bloom} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Eyebrow */}
        <motion.p
          className={styles.eyebrow}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          The Real Problem
        </motion.p>

        {/* H2 — keyword-optimized */}
        <motion.h2
          className={styles.h2}
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Why Good Contractors Go Invisible on Google
        </motion.h2>

        {/* Subhead */}
        <motion.p
          className={styles.subhead}
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          It's not your work. It's not your reputation. It's where you show up
          when someone needs you most.
        </motion.p>

        {/* Scene */}
        <motion.div
          className={styles.scene}
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className={styles.sceneLine}>
            A homeowner's pipe bursts at 11pm. They grab their phone and search
            &ldquo;emergency plumber Bentonville.&rdquo; Three names appear.
            They call the first one.
          </p>
          <p className={styles.sceneLine}>
            You're not on that list — not because you're not the best plumber in
            town, but because your Google Business Profile hasn't been touched in
            two years, your website doesn't mention Bentonville once, and no one's
            told Google you exist.
          </p>
          <p className={styles.sceneLinePunch}>
            The contractor who gets that call isn't better at plumbing.
            He's just easier to find.
          </p>
        </motion.div>

        {/* Failure modes */}
        <motion.ul
          className={styles.failureList}
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          role="list"
        >
          {FAILURE_MODES.map((item) => (
            <li key={item.label} className={styles.failureItem}>
              <span className={styles.failureLabel}>{item.label}</span>
              <span className={styles.failureDesc}>{item.desc}</span>
            </li>
          ))}
        </motion.ul>

        {/* Bridge */}
        <motion.p
          className={styles.bridge}
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          These aren't hard problems to fix. But they don't fix themselves.
        </motion.p>
      </div>
    </section>
  );
}
