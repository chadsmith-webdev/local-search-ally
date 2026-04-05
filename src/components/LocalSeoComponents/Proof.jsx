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
          <h2 className={styles.heading}>What Results Look Like</h2>
          <p className={styles.intro}>
            Every client is different, but the pattern is consistent: visibility
            improves, phone calls increase, you stop fighting for invisibility.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.testimonial}
        >
          <div className={styles.quote}>
            <p>
              "Within 60 days of optimizing our Google Business Profile and
              building citations, we went from being completely invisible in the
              map pack to showing up in position 2. The calls increased
              immediately. Chad didn't just list a bunch of to-dos — he did the
              work and showed us exactly what he was doing each month. No
              mystery. No surprises. Just results."
            </p>
          </div>
          <div className={styles.author}>
            <h4>Jacob M.</h4>
            <p>HVAC Contractor, Rogers AR</p>
          </div>
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
            <p>Days to map pack visibility</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100%</div>
            <p>Transparency on every step</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>0</div>
            <p>Long-term contracts</p>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.commitment}
        >
          <h3>What You Can Count On</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>✓</span>I never claim results I
              haven't achieved
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Monthly reports showing exactly what moved
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Direct access — you're not talking to a team, you're talking to me
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Honest assessment about what's possible in your market
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              No contracts — stop anytime if it's not working
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
