"use client";

import styles from "./Proof.module.css";
import { motion } from "framer-motion";

export default function Proof() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>Why It Works</span>
          <h2 className={styles.heading}>Results You Can See</h2>
          <p className={styles.intro}>
            Better visibility in Google Maps. Higher ratings. More phone calls.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.stats}
        >
          <div className={styles.statBox}>
            <div className={styles.statNumber}>30-90</div>
            <p>Days to map pack movement</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>51%</div>
            <p>Use Google Maps for local search</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100%</div>
            <p>Transparent reporting</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
