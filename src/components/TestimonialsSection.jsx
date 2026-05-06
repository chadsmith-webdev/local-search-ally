"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TestimonialsSection.module.css";

// Add client testimonials here as you collect them.
// Each entry: { quote, name, context, stars }
const testimonials = [
  {
    quote:
      "Incredibly accurate and highlighted areas I hadn\u2019t fully considered. Not only informative but also actionable. Chad is knowledgeable, thorough, and genuinely invested in helping businesses improve.",
    name: "Harmonie Grace Foundation",
    context: "Live SEO audit \u00b7 NWA Marketing Cohort",
    stars: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star} aria-hidden='true'>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='testimonials'>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.sectionTag}>WHAT CLIENTS SAY</span>
          <h2 className={styles.h2}>Honest work. Honest feedback.</h2>
          <p className={styles.lead}>
            No manufactured case studies. These are real words from real people
            about the work itself.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className={styles.card}
              variants={cardVariants}
            >
              <Stars count={t.stars} />
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <footer className={styles.attribution}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.context}>{t.context}</span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>

        <motion.div
          className={styles.googleRow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href='https://g.page/r/CQNqxDONDoQiEAI/review'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.googleLink}
          >
            {/* Google G logo */}
            <svg
              className={styles.googleIcon}
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fill='#4285F4'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='#34A853'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='#FBBC05'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'
              />
              <path
                fill='#EA4335'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
            <span className={styles.googleLabel}>
              See our reviews on Google
            </span>
            <svg
              className={styles.googleArrow}
              viewBox='0 0 16 16'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M3 8h10M9 4l4 4-4 4'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
