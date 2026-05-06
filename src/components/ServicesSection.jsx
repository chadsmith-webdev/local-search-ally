"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: "GBP_OPT",
    name: "GBP Optimization",
    description:
      "Complete profile buildout, category selection, photo strategy, weekly posting, and review response management.",
    outcome: "Get into the Map Pack and stay there.",
    href: "/services/gbp-optimization",
  },
  {
    id: "CITATION_BUILD",
    name: "Citation Building",
    description:
      "Full audit and cleanup of all directory listings. Consistent NAP across 50+ directories — Yelp, Angi, BBB, and beyond.",
    outcome: "Google trusts your business is real and active.",
    href: "/services/citation-building",
  },
  {
    id: "LOCAL_SEO",
    name: "Local SEO",
    description:
      "Service area pages, on-page optimization, and keyword targeting for your specific trade and city combination.",
    outcome: "Rank for searches that actually drive calls.",
    href: "/services/local-seo",
  },
  {
    id: "REPUTATION_MGMT",
    name: "Reputation Management",
    description:
      "Review generation system, response templates, and ongoing monitoring. More 5-star reviews, fewer silent unhappy customers.",
    outcome: "Reviews that build trust before the call.",
    href: "/services/reputation-management",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='services'>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>HOW I FIX IT</span>
          <h2 className={styles.h2}>What I actually do</h2>
          <p className={styles.lead}>
            Each service targets a specific failure point. Together they close
            every gap between you and the Map Pack.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              className={styles.card}
              variants={cardVariants}
            >
              <h3 className={styles.cardName}>{svc.name}</h3>
              <p className={styles.cardDesc}>{svc.description}</p>
              <div className={styles.cardOutcome}>
                <span className={styles.outcomePip} aria-hidden='true' />
                {svc.outcome}
              </div>
              <Link href={svc.href} className={styles.cardLink}>
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.footer}>
          <p className={styles.pricing}>
            Starting at <strong>$497/month</strong> · No setup fees · No
            contracts
          </p>
          <Link href='/services' className={styles.allServices}>
            See all services and pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}
