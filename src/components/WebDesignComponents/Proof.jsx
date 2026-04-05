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
          <span className={styles.eyebrow}>What You Get</span>
          <h2 className={styles.heading}>Websites That Convert</h2>
          <p className={styles.intro}>
            Fast load times, clear CTAs, and mobile-first design all lead to one
            outcome: more calls, more bookings, more business.
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
              "Our old site was a mess — slow, confusing, and nobody was calling
              from it. After Chad built our new site, we noticed the difference
              immediately. It's fast, clean, and our phone started ringing
              within the first week. We're getting more calls and better leads.
              Actually worth the investment."
            </p>
          </div>
          <div className={styles.author}>
            <h4>Maria T.</h4>
            <p>Electrician, Northwest Arkansas</p>
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
            <div className={styles.statNumber}>2s</div>
            <p>Average load time</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100%</div>
            <p>Mobile optimized</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>0</div>
            <p>Hidden fees</p>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.commitment}
        >
          <h3>What This Means For You</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Faster website = more customers (people leave slow sites)
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Mobile-first = you reach customers on their phones
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Built for SEO = you rank better on Google
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Clear CTAs = visitors know what to do next
            </li>
            <li>
              <span className={styles.checkmark}>
                <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='2 9 7 14 16 4' />
                </svg>
              </span>
              Custom design = you stand out from competitors
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
