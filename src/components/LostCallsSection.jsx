"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./LostCallsSection.module.css";

const stats = [
  {
    value: "92%",
    label: "of clicks go to the top 3 Map Pack results",
    source: "BrightLocal, 2024",
  },
  {
    value: "$0",
    label: "in Map Pack clicks for positions #4 and below",
    source: "Verified search data",
  },
  {
    value: "$900",
    label: "average value of a single trade service call",
    source: "Industry average, NWA market",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

export default function LostCallsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='lost-calls'>
      <div className={styles.scanlines} aria-hidden='true' />

      <div className={styles.inner}>
        {/* Left: oversized stat blocks */}
        <div className={styles.statsCol}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className={styles.statBlock}
              custom={i}
              variants={fadeUp}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
            >
              <div className={styles.hudBracket} aria-hidden='true'>
                <span className={styles.bracketTL} />
                <span className={styles.bracketTR} />
                <span className={styles.bracketBL} />
                <span className={styles.bracketBR} />
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSource}>{stat.source}</div>
            </motion.div>
          ))}
        </div>

        {/* Right: narrative callout */}
        <motion.div
          className={styles.narrative}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className={styles.narrativeTag}>VISIBILITY_COST_ANALYSIS</div>
          <h2 className={styles.narrativeH2}>
            Map Pack invisibility isn&rsquo;t a ranking problem.<br />
            It&rsquo;s a <em>revenue</em> problem.
          </h2>
          <p className={styles.narrativeBody}>
            If you&rsquo;re missing from the Map Pack and you&rsquo;re getting
            three fewer calls a week than the contractor ranked #1 — that&rsquo;s
            $2,700 to $10,800 a month in missed work. Jobs that are going to
            someone with worse reviews and less experience than you, simply
            because they show up and you don&rsquo;t.
          </p>
          <p className={styles.narrativeBody}>
            That&rsquo;s not a marketing problem. That&rsquo;s a visibility
            emergency.
          </p>
          <Link
            href={process.env.NEXT_PUBLIC_AUDIT_URL}
            className={styles.cta}
          >
            Find your visibility gaps — free →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
