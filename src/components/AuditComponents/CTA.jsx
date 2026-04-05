"use client";

import styles from "./CTA.module.css";
import { motion } from "framer-motion";

export default function CTA() {
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
          className={styles.content}
        >
          <h2 className={styles.heading}>Get Your Free Audit</h2>
          <p className={styles.description}>
            No credit card. No email gate. No sales call unless you want one.
            Just an honest assessment of where you stand.
          </p>
          <a href='#audit-form' className={styles.cta}>
            Run Your Free Audit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
