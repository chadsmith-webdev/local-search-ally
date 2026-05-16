"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AboutHero.module.css";
import HeroScene from "./HeroScene";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutHero() {
  const { scrollY } = useScroll();
  
  // Parallax: background moves down slower (0.3x)
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  // Parallax: foreground moves up slightly (-0.1x)
  const fgY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className={styles.hero}>
      <motion.div style={{ y: bgY }} className={styles.bgWrap}>
        <div className={styles.grid} aria-hidden='true' />
        <div className={styles.orb} aria-hidden='true' />
        <HeroScene />
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial='hidden'
          animate='visible'
          style={{ y: fgY }}
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            About Chad Smith
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            Good contractors lose jobs to worse ones every day.
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            Not because they do worse work. Because they&rsquo;re harder to find
            on Google. <em className={styles.accent}>I&rsquo;m trying to fix that.</em>
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
        >
          {[
            { number: "NWA Only", label: "One market, not everywhere" },
            { number: "No contracts", label: "Month-to-month, cancel anytime" },
            { number: "One person", label: "No junior staff, no outsourcing" },
          ].map(({ number, label }) => (
            <div className={styles.stat} key={label}>
              <span className={styles.statNumber}>{number}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
