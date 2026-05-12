"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: "GBP_OPT",
    num: "01",
    name: "GBP Optimization",
    description:
      "Complete profile buildout, category selection, photo strategy, weekly posting, and review response management.",
    outcome: "Get into the Map Pack and stay there.",
    href: "/services/gbp-optimization",
  },
  {
    id: "CITATION_BUILD",
    num: "02",
    name: "Citation Building",
    description:
      "Full audit and cleanup of all directory listings. Consistent NAP across 50+ directories — Yelp, Angi, BBB, and beyond.",
    outcome: "Google trusts your business is real and active.",
    href: "/services/citation-building",
  },
  {
    id: "LOCAL_SEO",
    num: "03",
    name: "Local SEO",
    description:
      "Service area pages, on-page optimization, and keyword targeting for your specific trade and city combination.",
    outcome: "Rank for searches that actually drive calls.",
    href: "/services/local-seo",
  },
  {
    id: "REPUTATION_MGMT",
    num: "04",
    name: "Reputation Management",
    description:
      "Review generation system, response templates, and ongoing monitoring. More 5-star reviews, fewer silent unhappy customers.",
    outcome: "Reviews that build trust before the call.",
    href: "/services/reputation-management",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const headVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const animate = !prefersReduced && inView ? "visible" : prefersReduced ? "visible" : "hidden";

  return (
    <section className={styles.section} id="services" ref={ref}>
      {/* Atmospheric surface — subtle carolina bloom top-left */}
      <div className={styles.bloom} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Header ── */}
        <motion.div
          className={styles.header}
          variants={headVariants}
          initial="hidden"
          animate={animate}
        >
          <span className={styles.eyebrow}>WHAT I DO</span>
          <h2 className={styles.h2}>
            Four things that move rankings.<br />
            <em>Nothing else.</em>
          </h2>
          <p className={styles.lead}>
            Each service targets a specific failure point. Together they close
            every gap between you and the Map Pack.
          </p>
        </motion.div>

        {/* ── Service cards ── */}
        <motion.div
          className={styles.grid}
          variants={prefersReduced ? {} : containerVariants}
          initial="hidden"
          animate={animate}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              className={styles.card}
              variants={prefersReduced ? {} : cardVariants}
            >
              <span className={styles.cardNum} aria-hidden="true">
                {svc.num}
              </span>
              <h3 className={styles.cardName}>{svc.name}</h3>
              <p className={styles.cardDesc}>{svc.description}</p>
              <div className={styles.cardOutcome}>
                <span className={styles.outcomePip} aria-hidden="true" />
                {svc.outcome}
              </div>
              <Link href={svc.href} className={styles.cardLink}>
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Footer row ── */}
        <div className={styles.footer}>
          <p className={styles.pricing}>
            Starting at <strong>$497/month</strong> · No setup fees · No
            contracts
          </p>
          <Link href="/services" className={styles.allServices}>
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
