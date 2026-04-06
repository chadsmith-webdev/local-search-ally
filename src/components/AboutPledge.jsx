"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutPledge.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const PLEDGES = [
  "I will never claim results I haven't achieved.",
  "I will tell you if something is outside my skill set.",
  "I will never lock you into a contract.",
  "I will communicate clearly and often.",
];

export default function AboutPledge() {
  return (
    <section className={styles.section}>
      {/* Background accent */}
      <div className={styles.glow} aria-hidden='true' />

      <div className={styles.inner}>
        <motion.div
          className={styles.wrapper}
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Pledge block */}
          <div className={styles.pledgeBlock}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              What you can hold me to
            </motion.span>
            <motion.h2 className={styles.h2} variants={fadeUp}>
              Four things I commit to. <em>In plain language.</em>
            </motion.h2>

            <motion.ul className={styles.pledgeList} variants={container}>
              {PLEDGES.map((pledge) => (
                <motion.li
                  className={styles.pledgeItem}
                  key={pledge}
                  variants={fadeUp}
                >
                  <div className={styles.pledgeIcon} aria-hidden='true'>
                    <svg
                      viewBox='0 0 16 16'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.75'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M2.5 8.5l3.5 3.5 7.5-8' />
                    </svg>
                  </div>
                  <span>&ldquo;{pledge}&rdquo;</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* CTA block */}
          <motion.div className={styles.ctaBlock} variants={fadeUp}>
            <h2 className={styles.ctaHeading}>
              If this sounds like how you want to work — let&rsquo;s talk.
            </h2>
            <p className={styles.ctaBody}>
              Thirty minutes. Free. No pitch, no agenda beyond understanding
              where your business stands and whether there&rsquo;s a good fit.
            </p>
            <div className={styles.ctaActions}>
              <Link href='/contact' className={styles.btnPrimary}>
                Start With a Free Conversation
              </Link>
              <Link href='/services/audit' className={styles.btnSecondary}>
                Or run the free SEO audit first →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
