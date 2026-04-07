"use client";

import { motion } from "framer-motion";
import styles from "./Solution.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solution() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Row 1: heading + Map Pack callout */}
        <div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className={styles.eyebrow}>The Strategy</span>
            <h2 className={styles.heading}>Here's How I Fix It</h2>
            <p className={styles.intro}>
              I use a proven 3-step process focused on what actually moves
              rankings on Google: your Google Business Profile, local
              citations, and on-page SEO.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.answerFirst}
        >
          <h3>Get into the Google Map Pack in 30-90 days.</h3>
          <p>
            The Map Pack is the block of 3 businesses that appears at the top
            of Google Search results when someone searches for your service.
            That's where the phone calls come from. Everything else is
            secondary.
          </p>
        </motion.div>

        {/* Row 2: What I Actually Do — spans full width */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <h3>What I Actually Do</h3>
          <div className={styles.whatGrid}>
            <div className={styles.whatItem}>
              <h4>1. Optimize Your Google Business Profile</h4>
              <p>
                I audit your profile against Google's ranking factors. This means
                verifying your information is correct and consistent, optimizing
                your description with relevant keywords, adding high-quality
                photos, and managing your Q&A section. A properly optimized GBP is
                the single biggest factor in map pack visibility.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>2. Build Local Citations</h4>
              <p>
                Citations are mentions of your business name, address, and phone
                number on outside websites and directories. Google treats
                consistent citations as a trust signal. I build citations
                strategically in the directories that matter for your trade (Yelp,
                Angie's List, industry-specific platforms, etc.) and ensure your
                NAP is consistent everywhere.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>3. Improve Your On-Page SEO</h4>
              <p>
                I optimize your website pages for local keywords your customers
                actually search. This includes writing clear, keyword-focused page
                titles and descriptions, creating location pages if you serve
                multiple areas, improving page speed, and building internal links
                to pages that matter. Google's algorithm prioritizes relevance,
                and on-page optimization is how I signal relevance.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>4. Strategy for Reviews & Reputation</h4>
              <p>
                I can't write fake reviews (and neither can you — Google penalizes
                that). What I do is help you build a system for requesting reviews
                from happy customers. More reviews and a higher rating directly
                impact map pack rankings and customer trust. I'll give you
                templates and a process.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Row 3: Transparency — spans full width */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.transparency}
        >
          <h3>You'll see everything I'm doing.</h3>
          <p>
            Every month, I'll send you a detailed report showing your visibility
            trend, keyword rankings, citation progress, and review growth. No
            mystery clients or black-box algorithms. You'll understand exactly
            what's working and what's next.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
