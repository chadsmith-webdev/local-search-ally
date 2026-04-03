"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesDetail.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Icons ────────────────────────────────────────────────────────────────────

function IconSEO() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.35-4.35' />
      <path d='M11 8v6M8 11h6' />
    </svg>
  );
}

function IconWeb() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <rect x='2' y='3' width='20' height='14' rx='2' />
      <path d='M8 21h8M12 17v4' />
      <path d='M7 8h4M7 11h8M7 14h5' />
    </svg>
  );
}

function IconGBP() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' />
      <circle cx='12' cy='9' r='2.5' />
    </svg>
  );
}

function IconReputation() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
    </svg>
  );
}

// ── Service data ──────────────────────────────────────────────────────────────

const SERVICES = [
  {
    number: "01",
    icon: <IconSEO />,
    label: "Local SEO",
    headline: "Get found when someone in NWA searches your trade",
    hook: "Right now, someone in Rogers or Fayetteville is searching \u201cHVAC repair near me\u201d or \u201cplumber Bentonville\u201d \u2014 and your competitor\u2019s name is showing up instead of yours. That\u2019s a call you didn\u2019t get.",
    body: "Local SEO is how I fix that. I look at what keywords your customers actually use, make sure your service pages say the right things in the right way, and build the citation and link signals that tell Google you're a real, established business in this area. 46% of Google searches have local intent — and the businesses in the top 3 positions get the overwhelming majority of those clicks.",
    groups: [
      {
        label: "Find",
        items: [
          "Keyword research for your specific trades and service areas",
          "Competitor gap analysis — what they rank for that you don't",
        ],
      },
      {
        label: "Fix",
        items: [
          "On-page optimization of service and location pages",
          "Citation building and NAP cleanup across directories",
          "GBP signals aligned with your website",
        ],
      },
      {
        label: "Report",
        items: [
          "Monthly plain-English reporting — not buzzword soup",
          "Ongoing adjustments as rankings move",
        ],
      },
    ],
    outcome:
      "After this, you rank for the searches that used to go to your competitors.",
    cta: null,
  },
  {
    number: "02",
    icon: <IconWeb />,
    label: "Web Design & Development",
    headline: "A website that earns its keep every month",
    hook: "A website that doesn't show up in search doesn't help you. A website that shows up but doesn't convert doesn't help you either.",
    body: "I build mobile-first websites specifically for home service trade businesses. Fast load times (your customers are often on phones at job sites), clear calls to action, SEO structure baked in from the start, and schema markup that helps Google understand who you are, where you work, and what you do. You won't get a hand-off email with a password to a dashboard you've never seen and a vendor you can never reach.",
    groups: null,
    bullets: [
      "Custom mobile-first design — not a repurposed template that looks like every other contractor in town",
      "Full on-page SEO setup: title tags, meta descriptions, heading structure, schema markup",
      "Click-to-call on every page — the highest-converting CTA on mobile",
      "Core Web Vitals optimized for real-world mobile load speed",
      "You own it — no monthly website ransom fees just to keep it live",
    ],
    outcome:
      "After this, you have a site that ranks and converts. Not one or the other.",
    aside:
      "Starts with a 1-hour kickoff call. Most sites are live in 3–4 weeks.",
    cta: null,
  },
  {
    number: "03",
    icon: <IconGBP />,
    label: "Google Business Profile",
    headline: "Your Map Pack listing works as hard as your best referral",
    hook: "51% of local searches end on the Map Pack — the three businesses that show up before organic results. If your profile isn't fully optimized, you're not competing for those spots.",
    body: "I audit your entire GBP and fix what's wrong. Then I keep it active — posts, photos, Q&A. An active, complete profile tells Google you're a legitimate, operating business. That's what it takes to hold a Map Pack position. If you have no posts since last winter, three photos of your van, and a description that says \"We do all types of plumbing\" — that's a GBP that's working against you.",
    groups: null,
    bullets: [
      "Full GBP audit — category, description, services, service areas",
      "Photo strategy — ongoing, trade-relevant, geotagged where applicable",
      "Weekly Google Posts — service offers, updates, seasonal content",
      "Q&A management — populate questions, monitor for spam",
      "Review monitoring and response support",
      "Monthly visibility report — impressions, calls, direction requests",
    ],
    outcome: null,
    aside: null,
    softCTA:
      "I audit your GBP as part of the free strategy call — you'll know exactly what's missing before you decide anything.",
    cta: null,
  },
  {
    number: "04",
    icon: <IconReputation />,
    label: "Reputation Management",
    headline: "Reviews are the first thing a new customer checks",
    hook: "A contractor with 12 four-star reviews loses jobs to a competitor with 47, even when the first contractor does better work. The problem isn't the quality of your work. It's that you don't have a simple system for asking.",
    body: "I build you one. A short, low-friction process you can run yourself — or hand to whoever finishes the job. Most of my clients send their first review request within 48 hours of setup. I also give you response templates so new reviews get acknowledged (Google notices), and I monitor for anything worth a real response.",
    groups: null,
    bullets: [
      "Review request process built for trade businesses — post-job timing and messaging",
      "Text and email templates tested for trades — short enough that customers actually read them",
      "Response templates for positive reviews (saves 10 minutes per review)",
      "Guidance on handling negative reviews without making things worse",
      "Monthly monitoring and flagging",
    ],
    outcome:
      "Most clients add 5–10 new reviews per month within 60 days of setup.",
    aside: null,
    cta: null,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesDetail() {
  return (
    <section id='services-detail' className={styles.section}>
      <div className={styles.inner}>
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.number}
            className={styles.service}
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Left rail */}
            <motion.div variants={fadeUp} className={styles.rail}>
              <div className={styles.railTop}>
                <span className={styles.number}>{service.number}</span>
                <div className={styles.iconWrap} aria-hidden='true'>
                  {service.icon}
                </div>
              </div>
              <span className={styles.serviceLabel}>{service.label}</span>
              <div className={styles.railLine} aria-hidden='true' />
            </motion.div>

            {/* Right content */}
            <div className={styles.body}>
              <motion.h2 variants={fadeUp} className={styles.h2}>
                {service.headline}
              </motion.h2>

              <motion.p variants={fadeUp} className={styles.hook}>
                {service.hook}
              </motion.p>

              <motion.p variants={fadeUp} className={styles.bodyText}>
                {service.body}
              </motion.p>

              {/* Grouped bullets */}
              {service.groups && (
                <motion.div variants={fadeUp} className={styles.groups}>
                  {service.groups.map((group) => (
                    <div key={group.label} className={styles.group}>
                      <span className={styles.groupLabel}>{group.label}</span>
                      <ul className={styles.list}>
                        {group.items.map((item) => (
                          <li key={item} className={styles.item}>
                            <span
                              className={styles.bullet}
                              aria-hidden='true'
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Flat bullets */}
              {service.bullets && (
                <motion.ul variants={fadeUp} className={styles.flatList}>
                  {service.bullets.map((item) => (
                    <li key={item} className={styles.item}>
                      <span className={styles.bullet} aria-hidden='true' />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}

              {/* Time/effort aside */}
              {service.aside && (
                <motion.p variants={fadeUp} className={styles.aside}>
                  {service.aside}
                </motion.p>
              )}

              {/* Soft inline CTA */}
              {service.softCTA && (
                <motion.div variants={fadeUp} className={styles.softCTA}>
                  <span className={styles.softCTAIcon} aria-hidden='true'>
                    →
                  </span>
                  <p>{service.softCTA}</p>
                </motion.div>
              )}

              {/* Outcome */}
              {service.outcome && (
                <motion.p variants={fadeUp} className={styles.outcome}>
                  {service.outcome}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
