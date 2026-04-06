"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SERVICES = [
  {
    icon: (
      <svg
        viewBox='0 0 22 22'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='11' cy='8' r='4' />
        <path d='M11 1C6.58 1 3 4.58 3 9c0 6.37 8 13 8 13s8-6.63 8-13c0-4.42-3.58-8-8-8z' />
      </svg>
    ),
    title: "Local SEO",
    desc: "Keyword strategy, on-page optimization, citation building, and monthly reports — everything that moves you up in local search and keeps you there.",
    tags: ["Google Rankings", "Citations", "On-Page SEO", "Monthly Reports"],
  },
  {
    icon: (
      <svg
        viewBox='0 0 22 22'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x='2' y='3' width='18' height='14' rx='2' />
        <path d='M8 21h6M11 17v4' />
        <path d='M6 8h4M6 11h8M6 14h5' />
      </svg>
    ),
    title: "Web Design & Development",
    desc: "Mobile-first websites built to rank and convert. Fast, clean, and structured so search engines understand what you do and where you do it.",
    tags: ["Mobile-First", "Lead Gen", "Core Web Vitals", "Schema Markup"],
  },
  {
    icon: (
      <svg
        viewBox='0 0 22 22'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z' />
        <circle cx='12' cy='9' r='2.5' />
        <path d='M2 20h20' />
      </svg>
    ),
    title: "Google Business Profile",
    desc: "Full GBP audit, photo strategy, post management, and Q&A — so your Map Pack listing works as hard as your website when someone searches your trade.",
    tags: ["GBP Audit", "Photo Strategy", "Post Management", "Map Pack"],
  },
  {
    icon: (
      <svg
        viewBox='0 0 22 22'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 2l2.78 5.64 6.22.9-4.5 4.38 1.06 6.19L12 16.27l-5.56 2.84 1.06-6.19L3 8.54l6.22-.9L12 2z' />
      </svg>
    ),
    title: "Reputation Management",
    desc: "A simple review request process and response templates that help you build a review profile that earns trust before the phone even rings.",
    tags: [
      "Review Requests",
      "Response Templates",
      "Star Rating",
      "Monitoring",
    ],
  },
];

const AUDIT = {
  icon: (
    <svg
      viewBox='0 0 22 22'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M9 11l3 3L22 4' />
      <path d='M21 12v7a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h11' />
    </svg>
  ),
  title: "Free SEO Audit",
  desc: "Not sure where you stand? Run the free audit and get a clear picture of your local visibility — what's working, what's missing, and what to fix first. No email required.",
  tags: ["Instant Results", "No Sign-Up", "Local Visibility Score"],
};

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>What I Do</span>
          <h2 className={styles.h2}>
            One person. Four services.
            <br />
            All pointed at the same goal.
          </h2>
          <p className={styles.lead}>
            I don&rsquo;t hand your work off. I do the SEO, build the websites,
            manage the GBP, and help you collect reviews — because they all work
            together, and they work best when one person owns all of it.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div className={styles.grid} variants={container}>
          {/* Four standard service cards */}
          {SERVICES.map((svc) => (
            <motion.div
              key={svc.title}
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.iconWrap}>{svc.icon}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{svc.title}</p>
                <p className={styles.cardDesc}>{svc.desc}</p>
                <div className={styles.tags}>
                  {svc.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Featured audit card — full-width, links to /audit */}
          <motion.div
            className={`${styles.card} ${styles.cardFeatured}`}
            variants={fadeUp}
          >
            <div className={styles.iconWrap}>{AUDIT.icon}</div>
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>{AUDIT.title}</p>
              <p className={styles.cardDesc}>{AUDIT.desc}</p>
              <div className={styles.tags}>
                {AUDIT.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link href='/services/audit' className={styles.cardCta}>
              Run your free audit
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.75'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M3 7.5h9M8.5 4l3.5 3.5L8.5 11' />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom link to full services page */}
        <motion.div className={styles.bottom} variants={fadeUp}>
          <Link href='/services' className={styles.servicesLink}>
            See full service details and pricing
            <svg
              viewBox='0 0 14 14'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M2 7h10M8 3l4 4-4 4' />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
