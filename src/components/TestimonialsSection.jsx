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
        <svg
          key={i}
          className={styles.star}
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fill='currentColor'
            d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z'
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id='testimonials' ref={ref}>
      <div className={styles.bloom} aria-hidden='true' />
      <div className={styles.inner}>
        <motion.span
          className={styles.eyebrow}
          variants={fadeUp}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          WHAT CLIENTS SAY
        </motion.span>

        <motion.h2
          className={styles.h2}
          variants={fadeUp}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.08 }}
        >
          Real feedback. No fluff.
        </motion.h2>

        <motion.div
          className={styles.card}
          variants={fadeUp}
          initial='hidden'
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
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className={styles.googleIcon}
                viewBox='0 0 256 262'
                aria-hidden='true'
              >
                <path
                  fill='#4285f4'
                  d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
                />
                <path
                  fill='#34a853'
                  d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
                />
                <path
                  fill='#fbbc05'
                  d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z'
                />
                <path
                  fill='#eb4335'
                  d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
                />
              </svg>
              See on Google
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.cta}
          variants={fadeUp}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.38 }}
        >
          <a
            href={REVIEW.reviewUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.ctaLink}
          >
            Leave a Google review →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
