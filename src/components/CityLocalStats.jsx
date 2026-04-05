"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import styles from "./CityLocalStats.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// All stats sourced from approved third-party data in brand guidelines
const STATS = [
  {
    end: 97,
    suffix: "%",
    desc: "of consumers use Google to evaluate a local business before making contact.",
    source: "BrightLocal",
  },
  {
    end: 88,
    suffix: "%",
    desc: "of mobile local searches result in a call or visit within 24 hours.",
    source: "Think With Google",
  },
  {
    end: 46,
    suffix: "%",
    desc: "of all Google searches are looking for something local — a service, a business, a contractor.",
    source: "Search Engine Roundtable",
  },
  {
    end: 78,
    suffix: "%",
    desc: "of local mobile searches end in an offline purchase. The phone rings or someone shows up.",
    source: "Safari Digital",
  },
];

/**
 * @param {string} city - City name (for context in copy)
 */
function StatItem({ stat, isVisible, delay }) {
  return (
    <div className={styles.stat}>
      <div className={styles.statNum}>
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
      <p className={styles.statDesc}>{stat.desc}</p>
      <span className={styles.statSource}>{stat.source}</span>
    </div>
  );
}

export default function CityLocalStats({ city }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className={styles.label} variants={fadeUp}>
          Why local search matters in {city}
        </motion.p>

        <motion.div className={styles.stats} variants={container}>
          {STATS.map((stat, i) => (
            <motion.div key={stat.source + stat.end} variants={fadeUp}>
              <StatItem stat={stat} isVisible={isVisible} delay={i * 0.1} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p className={styles.context} variants={fadeUp}>
          These aren't abstract marketing numbers.{" "}
          <strong>
            This is how your next customer in {city} is finding someone right
            now.
          </strong>
        </motion.p>
      </motion.div>
    </section>
  );
}
