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
  "I won&rsquo;t promise rankings. No one can guarantee a Google ranking, and anyone who says otherwise is lying to you.",
  "I&rsquo;ll tell you what I find, even when it&rsquo;s not good news.",
  "I&rsquo;ll tell you when SEO isn&rsquo;t the right move for where you are right now.",
  "I&rsquo;ll explain what I&rsquo;m doing and why, every month, in plain English.",
  "If it&rsquo;s not working, I&rsquo;ll tell you that before you ask.",
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
              My transparency pledge
            </motion.span>
            <motion.h2 className={styles.h2} variants={fadeUp}>
              What you can hold me to. <em>In plain language.</em>
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
                  <span dangerouslySetInnerHTML={{ __html: pledge }} />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* CTA block */}
          <motion.div className={styles.ctaBlock} variants={fadeUp}>
            <h2 className={styles.ctaHeading}>
              Start with the audit
            </h2>
            <p className={styles.ctaBody}>
              The best way to know if I can help is to see what the audit turns
              up on your business. It takes 90 seconds and you&rsquo;ll walk
              away with specific numbers &mdash; not a generic score.
            </p>
            <p className={styles.ctaBody} style={{ marginTop: '-1rem', opacity: 0.8 }}>
              No pitch waiting on the other end. Just your data.
            </p>
            <div className={styles.ctaActions}>
              <Link href={process.env.NEXT_PUBLIC_AUDIT_URL || "https://audit.localsearchally.com"} className={styles.btnPrimary}>
                See Where You Stand Online &rarr;
              </Link>
              <Link href='/contact' className={styles.btnSecondary}>
                Let&rsquo;s Talk &mdash; It&rsquo;s Free
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
