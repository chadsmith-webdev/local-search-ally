"use client";

import { motion } from "framer-motion";
import styles from "./SuccessSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const OUTCOMES = [
  {
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='10' cy='8' r='3' />
        <path d='M10 1C6.13 1 3 4.13 3 8c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z' />
      </svg>
    ),
    title: "You show up when it counts",
    body: "Your business appears in the Map Pack when someone in Rogers, Bentonville, or Fayetteville searches for your trade. The right call, at the right moment.",
  },
  {
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M6 2H3a1 1 0 00-1 1v3M6 18H3a1 1 0 01-1-1v-3M18 6h-3M18 14h-3M14 2h3a1 1 0 011 1v3M14 18h3a1 1 0 001-1v-3' />
        <path d='M9 9l2 2 4-4' />
      </svg>
    ),
    title: "Calls come from search, not just referrals",
    body: "A steady, predictable source of new work that isn't limited by your network. Referrals dry up. Search doesn't take a day off.",
  },
  {
    icon: (
      <svg
        viewBox='0 0 20 20'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>
    ),
    title: "You look credible before they call",
    body: "Reviews, photos, and a website that answers the question before they dial. Trust is built before a single word is spoken.",
  },
];

const MAP_ROWS = [
  {
    pos: "1",
    name: "Your Business",
    rating: "4.8",
    reviews: "47",
    winner: true,
  },
  {
    pos: "2",
    name: "NWA Comfort Systems",
    rating: "4.1",
    reviews: "22",
    winner: false,
  },
  {
    pos: "3",
    name: "Ozark Pro Services",
    rating: "3.9",
    reviews: "8",
    winner: false,
  },
];

export default function SuccessSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>What the Other Side Looks Like</span>
          <h2 className={styles.h2}>
            Your phone rings from people who
            <br />
            found you — not just people who know you.
          </h2>
          <p className={styles.lead}>
            That&rsquo;s the shift. You stop depending entirely on word-of-mouth
            and start showing up where decisions are made — Google Search, the
            Map Pack, and your own website. Three things working together,
            pointing at your phone number.
          </p>
        </motion.div>

        {/* Two-column: outcomes left, map mockup right */}
        <motion.div className={styles.grid} variants={container}>
          {/* Outcome list */}
          <motion.div className={styles.outcomes} variants={container}>
            {OUTCOMES.map((item) => (
              <motion.div
                key={item.title}
                className={styles.outcome}
                variants={fadeUp}
              >
                <div className={styles.outcomeIcon}>{item.icon}</div>
                <div className={styles.outcomeText}>
                  <p className={styles.outcomeTitle}>{item.title}</p>
                  <p className={styles.outcomeBody}>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Pack mockup — "Your Business" in position 1 */}
          <motion.div className={styles.visual} variants={fadeUp}>
            <div className={styles.mapCard}>
              {/* Search bar chrome */}
              <div className={styles.mapHeader}>
                <div className={styles.mapSearchInput}>
                  <svg
                    viewBox='0 0 12 12'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  >
                    <circle cx='5' cy='5' r='3.5' />
                    <path d='M8 8l2 2' />
                  </svg>
                  <span>hvac repair near me</span>
                </div>
              </div>

              <p className={styles.mapLabel}>
                Local results · Fayetteville, AR
              </p>

              {MAP_ROWS.map((row) => (
                <div
                  key={row.name}
                  className={`${styles.mapRow} ${row.winner ? styles.mapRowWinner : ""}`}
                >
                  <span
                    className={`${styles.mapPos} ${row.winner ? styles.mapPosWinner : styles.mapPosOther}`}
                  >
                    {row.pos}
                  </span>
                  <div className={styles.mapBiz}>
                    <span
                      className={`${styles.mapBizName} ${row.winner ? styles.mapBizNameWinner : ""}`}
                    >
                      {row.name}
                    </span>
                    <span className={styles.mapBizMeta}>
                      <span className={styles.mapStars}>
                        {"★".repeat(Math.round(parseFloat(row.rating)))}
                      </span>
                      {row.rating} · {row.reviews} reviews
                    </span>
                  </div>
                  {row.winner && (
                    <span className={styles.mapCallBtn}>Call</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
