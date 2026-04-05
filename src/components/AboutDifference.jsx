"use client";

import { motion } from "framer-motion";
import styles from "./AboutDifference.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const WORK_ITEMS = [
  {
    label: "One-on-one",
    body: "You talk to me, not an account manager. I know your business, your service area, your competitors.",
  },
  {
    label: "Plain reporting",
    body: "Every month I tell you exactly what I did and why. Actual rankings, actual Map Pack position, actual call volume — not a PDF full of 'impressions.'",
  },
  {
    label: "Month to month",
    body: "No 6-month contracts. No lock-in to hide a slow start. If I stop delivering, you stop paying.",
  },
  {
    label: "NWA only",
    body: "Rogers, Bentonville, Springdale, Fayetteville, and the surrounding areas. I know which job-search keywords bring calls here.",
  },
];

export default function AboutDifference() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className={styles.wrapper}
        >
          {/* Section A: How I Work */}
          <div className={styles.block}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              What working with me looks like
            </motion.span>
            <motion.h2 className={styles.h2} variants={fadeUp}>
              No black box. <em>You always know what&rsquo;s happening.</em>
            </motion.h2>
            <motion.p className={styles.lead} variants={fadeUp}>
              I work one-on-one with contractors in Northwest Arkansas.
            </motion.p>

            <motion.div className={styles.items} variants={container}>
              {WORK_ITEMS.map(({ label, body }) => (
                <motion.div
                  className={styles.item}
                  key={label}
                  variants={fadeUp}
                >
                  <div className={styles.itemDot} aria-hidden='true' />
                  <div className={styles.itemText}>
                    <span className={styles.itemLabel}>{label}</span>
                    <span className={styles.itemBody}>{body}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden='true' />

          {/* Section B: Why not a bigger agency + startup honesty */}
          <motion.h2 className={styles.h2Section} variants={fadeUp}>
            Why not a bigger agency?
          </motion.h2>

          <div className={styles.twoCol}>
            <motion.div className={styles.col} variants={container}>
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                Fair question
              </motion.span>
              <motion.h3 className={styles.h3} variants={fadeUp}>
                Most agencies treat contractors as an afterthought.
              </motion.h3>
              <motion.div className={styles.body} variants={container}>
                <motion.p variants={fadeUp}>
                  The established SEO agencies in NWA are built around
                  enterprise clients — regional health systems, retail chains,
                  multi-location brands. When a plumbing company with three
                  trucks signs on, they get the junior account manager and a
                  campaign built from the same template as everyone else.
                </motion.p>
                <motion.p variants={fadeUp}>
                  What I bring is focus. Home service trades are the only
                  clients I take. NWA is the only market I work in. Being small
                  isn&rsquo;t a limitation. It&rsquo;s the point.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.col} variants={container}>
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                No manufactured credibility
              </motion.span>
              <motion.h3 className={styles.h3} variants={fadeUp}>
                I&rsquo;m building this. I&rsquo;m not going to pretend
                otherwise.
              </motion.h3>
              <motion.div className={styles.body} variants={container}>
                <motion.p variants={fadeUp}>
                  Local Search Ally is a startup. I don&rsquo;t have 200 client
                  case studies. I have demo sites built to prove the method,
                  tracked rankings from my own projects, and a clear picture of
                  how local search works in this market.
                </motion.p>
                <motion.p variants={fadeUp}>
                  I can show you the methodology, walk you through the logic,
                  and give you an honest read on where your business stands
                  online right now. What I won&rsquo;t do is claim a track
                  record I don&rsquo;t have.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
