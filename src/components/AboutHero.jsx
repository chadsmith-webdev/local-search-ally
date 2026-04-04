"use client";

import { motion } from "framer-motion";
import styles from "./AboutHero.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden='true' />
      <div className={styles.orb} aria-hidden='true' />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            About Chad Smith
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            I&rsquo;m not an agency.{" "}
            <em>I&rsquo;m one person in Siloam Springs</em> who knows how local
            search works.
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            Most home service trades run on referrals. The problem with
            referrals is that they&rsquo;re invisible to Google — and there are
            only so many of them. I kept watching great contractors lose calls
            to competitors who had worse work but a better Google presence.
          </motion.p>

          <motion.p variants={fadeUp} className={styles.subhead}>
            The work wasn&rsquo;t the problem. Visibility was.
          </motion.p>
        </motion.div>

        {/* Quick-scan stats row */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
        >
          {[
            { number: "NWA Only", label: "Local market focus" },
            { number: "No contracts", label: "Cancel any time" },
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
