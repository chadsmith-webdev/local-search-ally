"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCTASection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function FinalCTASection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Tag */}
        <motion.span className={styles.tag} variants={fadeUp}>
          <svg
            viewBox='0 0 10 10'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 1v4l2 2' />
            <circle cx='5' cy='5' r='4' />
          </svg>
          Free · No obligation · 30 minutes
        </motion.span>

        {/* Headline */}
        <motion.div className={styles.headlineBlock} variants={container}>
          <motion.h2 className={styles.h2} variants={fadeUp}>
            Stop losing jobs to contractors
            <br />
            with less experience and more visibility.
          </motion.h2>
          <motion.p className={styles.sub} variants={fadeUp}>
            Your reputation is earned in the field. Let me make sure
            it&rsquo;s visible online. No pitch, no pressure — just an honest
            look at your local visibility and a clear answer on whether I can
            help.
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div className={styles.ctas} variants={fadeUp}>
          <Link href='/contact' className={styles.primaryBtn}>
            Let&rsquo;s Talk — It&rsquo;s Free
            <svg
              viewBox='0 0 16 16'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M3 8h10M9 4l4 4-4 4' />
            </svg>
          </Link>
          <Link href='https://audit.localsearchally.com/free-local-seo-audit' className={styles.secondaryBtn}>
            Run the free SEO audit first
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div className={styles.trustLine} variants={fadeUp}>
          <a href='tel:+14793808626' className={styles.phone}>
            <svg
              viewBox='0 0 14 14'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M13 10.5c0 .3-.1.6-.2.8-.1.3-.3.5-.5.7-.3.3-.7.5-1.1.6-.4.1-.9.1-1.4-.1-1.1-.3-2.1-.8-3.1-1.6C5.7 9.9 4.8 9 4.1 7.9 3.3 6.9 2.8 5.9 2.5 4.8c-.2-.5-.2-1 0-1.4.1-.4.3-.8.6-1.1.3-.3.6-.5 1-.5s.8.1 1.1.3l1.5 1.5c.1.1.2.2.2.4 0 .1 0 .3-.1.4l-.5.6c-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.3.5.7 1 1.1 1.4.4.4.9.8 1.4 1.1.1.1.2.1.3.1s.2 0 .3-.1l.6-.5c.1-.1.3-.1.4-.1s.3 0 .4.2l1.5 1.5c.2.3.3.6.3.9z' />
            </svg>
            (479) 380-8626
          </a>
          <span className={styles.trustDot} />
          <span className={styles.trustNote}>
            No contracts. Cancel anytime.
          </span>
          <span className={styles.trustDot} />
          <span className={styles.trustNote}>
            NWA-based. I answer my own phone.
          </span>
        </motion.div>

        <div className={styles.divider} />
      </motion.div>
    </section>
  );
}
