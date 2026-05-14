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
  // mdi:check
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
      <path
        fill='currentColor'
        d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z'
      />
    </svg>
  );
}

const TIERS = [
  {
    name: "DIY Pro",
    price: "$49",
    period: "/month",
    description:
      "You run it. We built the tools we use on our own clients — now you can use them too.",
    features: [
      "Geo-grid rank tracking across your service area",
      "Google Business Profile audit + monitoring",
      "Citation tracking across top directories",
      "AI visibility check (ChatGPT, Perplexity, Google AI)",
      "8 pro local SEO tools in one dashboard",
      "Monthly report — plain English, no jargon",
    ],
    cta: "Start Free Trial →",
    href: "https://audit.localsearchally.com/signup",
    recommended: false,
    external: true,
  },
  {
    name: "Multi-Location",
    price: "$199",
    period: "/month",
    description:
      "For operators running 2–10 locations or small agencies managing multiple clients.",
    features: [
      "Everything in DIY Pro",
      "Up to 10 location profiles",
      "Cross-location rank comparison",
      "Consolidated reporting across all locations",
      "Priority support",
    ],
    cta: "Start Free Trial →",
    href: "https://audit.localsearchally.com/signup?plan=multi",
    recommended: true,
    external: true,
  },
  {
    name: "Done-for-You",
    price: "$497",
    period: "/month starting",
    description:
      "You focus on the trade. I handle everything that gets you found — GBP, citations, on-page SEO, and monthly reporting.",
    features: [
      "Full GBP audit, optimization, and ongoing management",
      "Citation cleanup across top 15 directories",
      "On-page SEO for your service pages",
      "Monthly plain-English visibility report",
      "Review request process — templates + guidance",
      "Final price scoped on the first call based on your market",
    ],
    cta: "Book a Free Call →",
    href: "/contact",
    recommended: false,
    external: false,
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
  "DIY plans include a 14-day free trial, no card required",
  "Done-for-you price is scoped on the first call — never a surprise",
  "Pay annually on DIY plans and get 2 months free",
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
            Two ways to work with me: use the tools yourself, or have me do it
            for you. Either way, no contracts and no guesswork on what
            you&rsquo;re paying for.
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
                  {...(tier.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {tier.cta}
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
