"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesPricing.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function IconCheck() {
  return (
    <svg
      viewBox='0 0 10 10'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <polyline points='2 5 4.5 7.5 8.5 2.5' />
    </svg>
  );
}

const TIERS = [
  {
    name: "Visibility",
    price: "$497",
    period: "/month",
    description:
      "For trades that have a decent website but aren't showing up in the Map Pack.",
    features: [
      "Google Business Profile full audit + optimization",
      "GBP management — posts, photos, Q&A",
      "Citation cleanup (top 15 directories)",
      "Monthly visibility report in plain English",
      "Review request process — templates + guidance",
    ],
    cta: "Start With a Free Call",
    href: "/contact",
    recommended: false,
  },
  {
    name: "Growth",
    price: "$797",
    period: "/month",
    description:
      "For trades ready to rank above competitors and turn search into calls.",
    features: [
      "Everything in Visibility",
      "On-page SEO for up to 3 service pages/month",
      "Keyword strategy — what to rank for, in which cities",
      "Monthly competitor tracking",
      "1 local content piece per month",
      "Priority email access",
    ],
    cta: "Start With a Free Call",
    href: "/contact",
    recommended: true,
  },
  {
    name: "Full Stack",
    price: "$1,197",
    period: "/month",
    description:
      "For trades that want everything — found online, a website that converts, and a reputation that sells.",
    features: [
      "Everything in Growth",
      "Website hosting + maintenance",
      "Up to 2 website updates per month",
      "1 blog post written and published monthly",
      "Reputation monitoring + response guidance",
      "Quarterly strategy call (recorded)",
    ],
    cta: "Start With a Free Call",
    href: "/contact",
    recommended: false,
  },
];

const STEPS = [
  {
    n: "1",
    title: "Audit",
    desc: "I review your current local visibility, service pages, and what your top competitors are doing.",
  },
  {
    n: "2",
    title: "Fix Priority Gaps",
    desc: "I focus on the highest-impact gaps first — local relevance, on-page clarity, and lead paths that support calls.",
  },
  {
    n: "3",
    title: "Grow and Track",
    desc: "I monitor rankings, calls, and GBP activity monthly and tell you what moved and why.",
  },
];

const GUARANTEES = [
  "No long-term contracts — cancel any time",
  "I'll tell you which plan to start with on the first call",
  "Additional NWA service locations add at $297/month",
  "Pay annually and get 2 months free",
];

export default function ServicesPricing() {
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
        <motion.div variants={fadeUp} className={styles.header}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.h2}>
            Honest pricing.{" "}
            <span className={styles.accent}>No long-term contracts.</span>
          </h2>
          <p className={styles.lead}>
            Every plan is month-to-month. If it&rsquo;s not working, you can
            leave. Most clients start on Growth — I&rsquo;ll tell you if
            something different makes more sense for where you are.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div variants={container} className={styles.cards}>
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={
                tier.recommended
                  ? `${styles.card} ${styles.cardRecommended}`
                  : styles.card
              }
            >
              {tier.recommended && (
                <div className={styles.badge}>Most Popular</div>
              )}

              <div className={styles.cardTop}>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.period}>{tier.period}</span>
                </div>
                <p className={styles.tierDesc}>{tier.description}</p>
              </div>

              <ul className={styles.featureList}>
                {tier.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.checkIcon}>
                      <IconCheck />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardCta}>
                <Link
                  href={tier.href}
                  className={
                    tier.recommended ? styles.ctaPrimary : styles.ctaSecondary
                  }
                >
                  {tier.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fine print / guarantees */}
        <motion.ul variants={fadeUp} className={styles.guaranteeList}>
          {GUARANTEES.map((g) => (
            <li key={g} className={styles.guarantee}>
              <span className={styles.guaranteeDot} aria-hidden='true' />
              {g}
            </li>
          ))}
        </motion.ul>

        {/* How It Works */}
        <motion.div variants={fadeUp} className={styles.stepsBlock}>
          <span className={styles.eyebrow}>How It Works</span>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div key={step.n} className={styles.step}>
                <div className={styles.stepNum}>{step.n}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
