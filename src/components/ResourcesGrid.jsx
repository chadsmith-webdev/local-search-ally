"use client";

import { motion } from "framer-motion";
import styles from "./ResourcesGrid.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const DownloadIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 2v8M5 7l3 3 3-3" />
    <path d="M2 13h12" />
  </svg>
);

const resources = [
  {
    tag: "Self-Audit Checklist",
    title: "NWA Contractor\nLocal SEO Checklist",
    description:
      "20 things to check before you call it done. GBP, website, citations, reviews, and content — organized by priority. Every unchecked item is a gap Google can rank you down for.",
    meta: ["PDF", "20 Points", "Free"],
    href: "/downloads/local-seo-checklist.pdf",
    filename: "local-seo-checklist.pdf",
  },
  {
    tag: "Step-by-Step Audit",
    title: "Google Business Profile\nOptimization Checklist",
    description:
      "Your GBP is your most important local ranking factor. This walks through every section — basic info, hours, services, photos, posts, reviews, and Q&A — so nothing gets skipped.",
    meta: ["PDF", "7 Sections", "Free"],
    href: "/downloads/gbp-optimization-checklist.pdf",
    filename: "gbp-optimization-checklist.pdf",
  },
  {
    tag: "Diagnostic Guide",
    title: "5 Reasons Your Phone\nIsn't Ringing",
    description:
      "If your business is solid but your phone is quiet, the problem isn't your work. Here are the five visibility gaps I find most often — and what to do about each one.",
    meta: ["PDF", "~8 Min Read", "Free"],
    href: "/downloads/5-reasons-phone-not-ringing.pdf",
    filename: "5-reasons-phone-not-ringing.pdf",
  },
];

export default function ResourcesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>More Resources</span>
          <h2 className={styles.h2}>
            Free tools for NWA home service trades.
          </h2>
          <p className={styles.subhead}>
            No email gate. No pitch at the end. Just useful.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {resources.map((r) => (
            <motion.article key={r.href} variants={fadeUp} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.tag}>{r.tag}</span>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.description}</p>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.meta}>
                  {r.meta.map((m, i) => (
                    <span key={m} className={styles.metaItem}>
                      {m}
                      {i < r.meta.length - 1 && (
                        <span className={styles.metaDot} aria-hidden="true" />
                      )}
                    </span>
                  ))}
                </div>
                <a
                  href={r.href}
                  download={r.filename}
                  className={styles.downloadBtn}
                  aria-label={`Download ${r.title.replace("\n", " ")} — free PDF`}
                >
                  <DownloadIcon />
                  Download Free
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
