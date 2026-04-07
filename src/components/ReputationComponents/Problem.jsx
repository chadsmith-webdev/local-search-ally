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
            Your Reputation Determines Who Calls
          </h2>
          <p className={styles.intro}>
            Prospects compare you to competitors. Good reviews mean they call.
            Poor reviews or no reviews? They call someone else. It's that
            simple.
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
              60% of consumers say a business's website affects their
              perception.
            </strong>
            But reputation goes further — reviews and ratings directly impact
            trust and call decisions. A 4.8-star business wins over a 3.2-star
            competitor every time, even if the 3.2-star contractor is
            technically better.
          </p>
          <p className={styles.source}>— BrightLocal, "Local SEO Statistics"</p>
        </motion.div>
      </div>
    </section>
  );
}
