"use client";

import styles from "./What.module.css";
import { motion } from "framer-motion";

export default function What() {
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
          <h2 className={styles.heading}>What the Audit Covers</h2>
          <p className={styles.intro}>
            A complete SEO health check that shows what's working and what's
            costing you visibility.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <div className={styles.whatItem}>
            <h3>Website Basics</h3>
            <p>
              Mobile responsiveness, page speed, SSL security, indexing status.
              The foundation that tells Google whether to rank you.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h3>On-Page SEO</h3>
            <p>
              Title tags, meta descriptions, heading structure, keyword usage,
              internal linking. Are your pages optimized for the keywords that
              matter?
            </p>
          </div>

          <div className={styles.whatItem}>
            <h3>Local SEO</h3>
            <p>
              Google Business Profile completeness, local citations, reviews,
              service area coverage. Where you show up (or don't) in local
              search.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h3>Competitor Analysis</h3>
            <p>
              What your competitors are doing that you're not. Keywords they
              rank for. Backlinks they have. Gaps you can exploit.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h3>Content Audit</h3>
            <p>
              Which pages perform best. Which content is attracting traffic.
              Which pages are missing opportunities for visibility.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h3>Technical Issues</h3>
            <p>
              Broken links, crawl errors, duplicate content, schema markup
              problems. Everything that prevents Google from understanding your
              site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
