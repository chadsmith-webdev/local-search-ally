"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TestimonialsSection.module.css";

const REVIEW = {
  author: "Harmonie Grace Foundation",
  rating: 5,
  timeAgo: "a month ago",
  excerpt:
    "His assessment was incredibly accurate and highlighted areas I hadn\u2019t fully considered, especially in terms of growth, visibility, and positioning us to better compete within our space.",
  full: "I had the opportunity to work with Chad, who conducted a comprehensive audit of my organization, and I was truly impressed by the level of detail and insight he provided. His assessment was incredibly accurate and highlighted areas I hadn\u2019t fully considered, especially in terms of growth, visibility, and positioning us to better compete within our space. The audit was not only informative but also actionable. Chad broke things down in a way that made it clear what steps we need to take to strengthen our foundation and elevate our impact. It gave me a renewed perspective on what it will take to scale and operate at a higher level. Overall, I found the experience extremely valuable. Chad is knowledgeable, thorough, and genuinely invested in helping organizations improve. I would highly recommend his services to anyone looking to gain clarity and direction for their business or nonprofit.",
  reviewUrl: "https://g.page/r/CQNqxDONDoQiEAI/review",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={styles.star} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.31L10 13.27l-4.78 2.52.91-5.31L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id="testimonials" ref={ref}>
      <div className={styles.bloom} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.span
          className={styles.eyebrow}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          WHAT CLIENTS SAY
        </motion.span>

        <motion.h2
          className={styles.h2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.08 }}
        >
          Real feedback. No fluff.
        </motion.h2>

        <motion.div
          className={styles.card}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.cardTop}>
            <Stars count={REVIEW.rating} />
            <span className={styles.timeAgo}>{REVIEW.timeAgo}</span>
          </div>

          <blockquote className={styles.quote}>
            &ldquo;{REVIEW.full}&rdquo;
          </blockquote>

          <div className={styles.cardBottom}>
            <span className={styles.author}>{REVIEW.author}</span>
            <a
              href={REVIEW.reviewUrl}
              className={styles.googleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.googleIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              See on Google
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.cta}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.38 }}
        >
          <a
            href={REVIEW.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            Leave a Google review →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
