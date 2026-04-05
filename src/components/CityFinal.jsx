"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CityFinal.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/**
 * @param {Object} props
 * @param {string} props.city - City name for copy
 * @param {string} props.ctaText - CTA button text
 */
export default function CityFinal({ city, ctaText }) {
  return (
    <section className={styles.section} id='cta'>
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
            The best contractor in {city}
            <br />
            shouldn't be the hardest to find.
          </motion.h2>
          <motion.p className={styles.sub} variants={fadeUp}>
            Let's talk about where you stand and what's worth fixing first. No
            pitch, no pressure — just an honest look at your local visibility
            and a clear answer on whether I can help.
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div className={styles.ctas} variants={fadeUp}>
          <Link href='/contact' className={styles.primaryBtn}>
            Let's Talk — It's Free
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
          <Link href='/audit' className={styles.secondaryBtn}>
            Run the free SEO audit first
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div className={styles.trustLine} variants={fadeUp}>
          <a href='tel:+14793808626' className={styles.phone}>
            <svg
              viewBox='0 0 16 16'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M3 2h3l2 5-2.5 1.5c.5 1 1.5 2 2.5 2.5L11 11l5 2v3c0 1-1 2-2 2-11 0-12-11-12-12 0-1 1-2 2-2z' />
            </svg>
            (479) 380-8626
          </a>
          <p className={styles.trustText}>
            <strong>No contracts.</strong> No long sales cycle.{" "}
            <strong>No pressure.</strong>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
