"use client";

import { motion } from "framer-motion";
import styles from "./ResourcesHero.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ResourcesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            Free Resources
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            What you don&rsquo;t know{" "}
            <em>is costing you calls.</em>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            I put together guides and reports based on what I actually find
            when I look at NWA contractor visibility. No email gate. Download
            and use what helps.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
