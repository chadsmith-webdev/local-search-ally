"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BlogClient.module.css";

// ── Reading progress bar ──────────────────────────────────────────────────────

function ReadingProgress() {
  const barRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.progressTrack} aria-hidden='true'>
      <div ref={barRef} className={styles.progressBar} />
    </div>
  );
}

// ── Post card ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function PostCard({ post, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.07 }}
    >
      <Link href={`/blog/${post.slug}`} className={styles.card}>
        {/* Feature image */}
        <div className={styles.cardImage}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              width={640}
              height={208}
              className={styles.cardImg}
            />
          ) : (
            <div className={styles.cardImageFallback} aria-hidden='true' />
          )}
          {post.tags?.[0] && (
            <span className={styles.cardTag}>{post.tags[0]}</span>
          )}
        </div>

        {/* Content */}
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>{post.title}</h2>
          <p className={styles.cardDesc}>{post.description}</p>
          <div className={styles.cardMeta}>
            <span className={styles.cardReadTime}>{post.readTime}</span>
            <span className={styles.cardCta}>READ_MORE →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Blog index ────────────────────────────────────────────────────────────────

export default function BlogClient({ posts }) {
  return (
    <div className={styles.page}>
      <ReadingProgress />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden='true' />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.eyebrow}>Local Search Ally · Insights</span>
          <h1 className={styles.h1}>
            SEO for contractors is <em className={styles.accent}>broken.</em>
            <br />
            Here&rsquo;s how to fix it.
          </h1>
          <p className={styles.subhead}>
            No fluff. No generic marketing advice. Just practical guidance on
            how to win the Map Pack and get the calls you deserve.
          </p>
        </motion.div>
      </section>

      {/* Post grid */}
      <section className={styles.gridSection}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.inner}>
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles.ctaHeading}>Stop guessing. Start ranking.</h2>
            <p className={styles.ctaBody}>
              The insights here are free. The strategy to implement them is what
              I do. See where you stand first — 90-second scored audit, no email
              required.
            </p>
            <Link href='https://audit.localsearchally.com/free-local-seo-audit' className={styles.ctaBtn}>
              Run Your Free Audit →
            </Link>
            <p className={styles.ctaNote}>
              No email needed · 90 seconds · Free
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
