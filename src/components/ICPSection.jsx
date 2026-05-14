"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ICPSection.module.css";

const TRADES = [
  {
    name: "HVAC",
    desc: "Seasonal demand spikes need to find you, not your competitor.",
    iconPath:
      "M6.59.66c2.34-1.81 4.88.4 5.45 3.84c.43 0 .85.12 1.23.34c.52-.6.98-1.42.8-2.34c-.42-2.15 1.99-3.89 4.28-.92c1.81 2.34-.4 4.88-3.85 5.45c0 .43-.11.86-.34 1.24c.6.51 1.42.97 2.34.79c2.13-.42 3.88 1.98.91 4.28c-2.34 1.81-4.88-.4-5.45-3.84c-.43 0-.85-.13-1.22-.35c-.52.6-.99 1.43-.81 2.35c.42 2.14-1.99 3.89-4.28.92c-1.82-2.35.4-4.89 3.85-5.45c0-.43.13-.85.35-1.23c-.6-.51-1.42-.98-2.35-.8c-2.13.42-3.88-1.98-.91-4.28M5 16h2a2 2 0 0 1 2 2v6H7v-2H5v2H3v-6a2 2 0 0 1 2-2m0 2v2h2v-2zm7.93-2H15l-2.93 8H10zM18 16h3v2h-3v4h3v2h-3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2",
  },
  {
    name: "Plumbing",
    desc: "Emergency searches happen fast. You need to show up first.",
    iconPath:
      "m16.17 5.63l-2.11 2.15l-2.15-2.15l4.26-4.22l3.52 3.51c1.17 1.17 1.17 3.08 0 4.27zM4.83 12.7L7 14.81l3.5-3.51l-2.11-2.11zm10.64-4.92L19 11.3l-1.42 1.4l-.7-.7L6.23 22.59l-2.81-2.81l8.49-8.48l-4.22-4.27L9.8 4.92l4.26 4.27z",
  },
  {
    name: "Roofing",
    desc: "Storm season is short. Your window to rank is shorter.",
    iconPath: "M19 16h3L12 7L2 16h3l7-6.31zM7 8.81V7H4v4.5z",
  },
  {
    name: "Electrical",
    desc: "High-ticket jobs start with trust. Trust starts with visibility.",
    iconPath: "M11 15H6l7-14v8h5l-7 14z",
  },
  {
    name: "Landscaping",
    desc: "Spring search volume is real. Most landscapers miss it.",
    iconPath:
      "M11 21v-4.26c-.47.17-.97.26-1.5.26C7 17 5 15 5 12.5c0-1.27.5-2.41 1.36-3.23C6.13 8.73 6 8.13 6 7.5C6 5 8 3 10.5 3c1.56 0 2.94.8 3.75 2h.25a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5q-.75 0-1.5-.21V21z",
  },
  {
    name: "Remodeling",
    desc: "Long sales cycles mean SEO compounds faster than ads.",
    iconPath:
      "M2 19.63L13.43 8.2l-.71-.7l1.42-1.43L12 3.89c1.2-1.19 3.09-1.19 4.27 0l3.6 3.61l-1.42 1.41h2.84l.71.71l-3.55 3.59l-.71-.71V9.62l-1.47 1.42l-.71-.71L4.13 21.76z",
  },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const headerVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ICPSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id='who-its-for' className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          variants={headerVariant}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          WHO THIS IS FOR
        </motion.p>

        <motion.h2
          className={styles.h2}
          variants={headerVariant}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
        >
          Built for NWA home service trades.
        </motion.h2>

        <motion.p
          className={styles.lead}
          variants={headerVariant}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
        >
          If you own a trade business in Northwest Arkansas and you rely on
          Google to find new customers — this is for you.
        </motion.p>

        <div className={styles.grid}>
          {TRADES.map((trade, i) => (
            <motion.div
              key={trade.name}
              className={styles.card}
              custom={i}
              variants={slideInLeft}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
            >
              <p className={styles.tradeName}>
                <svg
                  className={styles.tradeIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path fill='currentColor' d={trade.iconPath} />
                </svg>
                {trade.name}
              </p>
              <p className={styles.tradeDesc}>{trade.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.notFit}
          variants={headerVariant}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          transition={{
            delay: TRADES.length * 0.12 + 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          Don&apos;t see your trade? I work with trades outside NWA too — give
          me a call at{" "}
          <a href='tel:+14793808626' className={styles.phoneLink}>
            (479) 380-8626
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
