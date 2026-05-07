"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BlogClient.module.css";

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// ── Post card ─────────────────────────────────────────────────────────────────

function PostCard({ post, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06 }}
    >
      <Link href={`/blog/${post.slug}`} className={styles.card}>
        <div className={styles.cardImage}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: "cover" }}
              className={styles.cardImg}
            />
          ) : (
            <div className={styles.cardImageFallback} aria-hidden='true' />
          )}
          {post.tags?.[0] && (
            <span className={styles.cardTag}>{post.tags[0]}</span>
          )}
        </div>
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>{post.title}</h2>
          <p className={styles.cardDesc}>{post.description}</p>
          <div className={styles.cardMeta}>
            <span className={styles.cardReadTime}>{post.readTime}</span>
            <span className={styles.cardCta}>Read post →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Featured card (hero right panel) ─────────────────────────────────────────

function FeaturedCard({ post }) {
  if (!post) return null;
  return (
    <Link href={`/blog/${post.slug}`} className={styles.featuredCard}>
      <div className={styles.featuredImage}>
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes='(max-width: 900px) 100vw, 45vw'
            style={{ objectFit: "cover" }}
            className={styles.featuredImg}
            priority
          />
        ) : (
          <div className={styles.featuredImageFallback} aria-hidden='true' />
        )}
        {post.tags?.[0] && (
          <span className={styles.featuredTag}>{post.tags[0]}</span>
        )}
      </div>
      <div className={styles.featuredBody}>
        <p className={styles.featuredLabel}>Latest post</p>
        <h2 className={styles.featuredTitle}>{post.title}</h2>
        <span className={styles.featuredCta}>Read now →</span>
      </div>
    </Link>
  );
}

// ── Blog index ────────────────────────────────────────────────────────────────

export default function BlogClient({ posts }) {
  const featuredPost = posts[0] ?? null;
  const remainingPosts = posts.slice(1);

  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero} id='blog-hero'>
        <div className={styles.heroGlow} aria-hidden='true' />

        <div className={styles.heroInner}>
          {/* Left: copy */}
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className={styles.eyebrow}>Local Search Ally · Insights</span>
            <h1 className={styles.h1}>
              The NWA contractor&rsquo;s guide to getting{" "}
              <em className={styles.accent}>found on Google.</em>
            </h1>
            <p className={styles.subhead}>
              Practical local SEO — written for HVAC companies, plumbers,
              roofers, and electricians in Northwest Arkansas.
            </p>
            <a href='#all-posts' className={styles.scrollLink}>
              ↓ All posts
            </a>
          </motion.div>

          {/* Right: featured post */}
          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <FeaturedCard post={featuredPost} />
          </motion.div>
        </div>
      </section>

      {/* ── Post grid ────────────────────────────────────────────────────── */}
      <section className={styles.gridSection} id='all-posts'>
        <div className={styles.gridInner}>
          <p className={styles.gridLabel}>All posts</p>
          {remainingPosts.length > 0 ? (
            <div className={styles.grid}>
              {remainingPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>
                No posts yet — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
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
            <Link
              href={process.env.NEXT_PUBLIC_AUDIT_URL}
              className={styles.ctaBtn}
            >
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
