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
          <h2 className={styles.heading}>Build Trust Faster</h2>
          <p className={styles.intro}>
            More reviews. Higher ratings. Customers choose you based on what
            they read.
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
            <div className={styles.statNumber}>30-60</div>
            <p>Days to 20+ new reviews</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>4.5+</div>
            <p>Average rating to stay competitive</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100%</div>
            <p>Transparent, no hidden fees</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
