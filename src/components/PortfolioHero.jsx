"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioHero.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PortfolioHero() {
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
            Portfolio · Demo Builds
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            What a contractor website <em>should actually do.</em>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            These aren&rsquo;t templates. Each one is built to rank for specific
            trade searches in NWA, load in under two seconds on a phone, and
            give someone a reason to pick up the phone. Browse them — then
            let&rsquo;s talk about yours.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.bridge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <p>
            I built these to answer one question before you ever have to ask it:{" "}
            <em>can he actually build something good?</em> No client names or
            confidential numbers here — just real work you can click through and
            judge for yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
