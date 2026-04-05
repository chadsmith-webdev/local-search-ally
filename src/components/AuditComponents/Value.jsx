"use client";

import styles from "./Value.module.css";
import { motion } from "framer-motion";

export default function Value() {
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
          <h2 className={styles.heading}>Why Get an Audit Now?</h2>
          <p className={styles.intro}>
            Knowledge is power. You can't fix what you don't know is broken.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.why}
        >
          <div className={styles.whyItem}>
            <h3>Find Your Quick Wins</h3>
            <p>
              Most contractors have easy wins sitting on the table — broken
              pages, missing keywords, incomplete GBP profiles. The audit
              identifies what you can fix in 30 days.
            </p>
          </div>

          <div className={styles.whyItem}>
            <h3>Understand Your Competition</h3>
            <p>
              See where competitors rank, what keywords they target, how many
              reviews they have. This tells you exactly where to focus to move
              ahead.
            </p>
          </div>

          <div className={styles.whyItem}>
            <h3>Know the Real Problem</h3>
            <p>
              Many contractors think they need better marketing. Often the real
              problem is technical SEO or a missing value proposition. The audit
              tells you the truth.
            </p>
          </div>

          <div className={styles.whyItem}>
            <h3>Get Actionable Priorities</h3>
            <p>
              Not just a list of problems — a roadmap. The top 3 things that
              move the needle immediately, and a realistic timeline for results.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.note}
        >
          <p>
            <strong>No email gate. No gimmicks.</strong> This is a real audit
            that costs me time. If you're serious about getting found online,
            this will be valuable. That's why I don't hide it behind a form on
            every page.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
