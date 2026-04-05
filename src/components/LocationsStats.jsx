"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import styles from "./LocationsStats.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  {
    end: 97,
    suffix: "%",
    label: "of consumers use Google to evaluate local businesses",
    source: "BrightLocal",
  },
  {
    end: 88,
    suffix: "%",
    label: "of mobile searchers call or visit within 24 hours",
    source: "Think With Google",
  },
  {
    end: 78,
    suffix: "%",
    label: "of local mobile searches result in offline purchases",
    source: "Safari Digital",
  },
];

function StatItem({ stat, isVisible, delay }) {
  return (
    <motion.div className={styles.stat} variants={fadeUp}>
      <div className={styles.statNumber}>
        {isVisible ? (
          <CountUp
            start={0}
            end={stat.end}
            duration={1.8}
            delay={delay}
            useEasing
          />
        ) : (
          <span>0</span>
        )}
        <span className={styles.statSuffix}>{stat.suffix}</span>
      </div>
      <p className={styles.statLabel}>{stat.label}</p>
      <p className={styles.statSource}>{stat.source}</p>
    </motion.div>
  );
}

export default function LocationsStats() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className={styles.label}>
            Why local SEO matters for NWA contractors
          </p>
          <p className={styles.intro}>
            These aren't abstract marketing numbers. This is how contractors in
            Rogers, Bentonville, Fayetteville, and Springdale are getting found
            right now—and losing jobs when they're not visible.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className={styles.statsGrid}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={container}
        >
          {stats.map((stat, i) => (
            <StatItem
              key={stat.source + stat.end}
              stat={stat}
              isVisible={isVisible}
              delay={i * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
