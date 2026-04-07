"use client";

import styles from "./Problem.module.css";
import { motion } from "framer-motion";

export default function Problem() {
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
          <h2 className={styles.heading}>
            Your Google Business Profile Is Costing You Calls
          </h2>
          <p className={styles.intro}>
            Most profiles are incomplete, poorly optimized, or out of date.
            You're losing visibility and customer trust without even knowing it.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.statistic}
        >
          <p>
            <strong>
              51% of consumers use Google Maps specifically for local search.
            </strong>
            If your profile is incomplete, they call someone else. If your
            rating is low compared to competitors, you lose the trust battle
            before they even call.
          </p>
          <p className={styles.source}>— Backlinko, "Local SEO Statistics"</p>
        </motion.div>
      </div>
    </section>
  );
}
