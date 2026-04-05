"use client";

import { motion } from "framer-motion";
import styles from "./LocationsProof.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const demos = [
  {
    trade: "Plumbing",
    desc: "Emergency and maintenance calls from local search",
  },
  {
    trade: "HVAC",
    desc: "Seasonal demand capture with clear booking paths",
  },
  {
    trade: "Electrical",
    desc: "Trust for higher-ticket jobs and panel upgrades",
  },
];

export default function LocationsProof() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Demo Proof */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.demoSection}
        >
          <h2>Proven approach. Three trades. Real results.</h2>
          <p className={styles.demoSubtitle}>
            Demo sites showcase what best-in-class local SEO and web design looks like for home service trades.
          </p>

          <div className={styles.demoGrid}>
            {demos.map((demo) => (
              <motion.div
                key={demo.trade}
                className={styles.demoCard}
                variants={fadeUp}
                whileHover={{ borderColor: "rgba(123, 175, 212, 0.4)" }}
              >
                <h3>{demo.trade}</h3>
                <p>{demo.desc}</p>
                <a href="/portfolio" className={styles.demoLink}>
                  View Demo →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Contractor Proof */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.testimonialSection}
        >
          <div className={styles.testimonial}>
            <p className={styles.testimonialQuote}>
              "Chad understood our business from day one. No fluff, just results. Within 3 months we had calls from searches we weren't even ranking for before."
            </p>
            <div className={styles.testimonialAttribution}>
              <div className={styles.attributionText}>
                <div className={styles.authorName}>James Mitchell</div>
                <div className={styles.authorRole}>Owner, Mitchell Plumbing & Mechanical</div>
                <div className={styles.authorLocation}>Rogers, AR</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
