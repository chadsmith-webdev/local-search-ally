"use client";

import { motion } from "framer-motion";
import styles from "./LocationsCities.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cities = [
  {
    name: "Rogers",
    slug: "rogers",
    title: "The Growth Hub",
    problem:
      "Rogers is where the money is. Thousands search for your service every month—most click one of the first three results. If you're not there, they call someone else.",
    highlights: [
      "Exact ranking position for 10-15 high-intent Rogers searches",
      "Which competitors are beating you (and why)",
      "Your action plan to break into the Map Pack",
    ],
  },
  {
    name: "Bentonville",
    slug: "bentonville",
    title: "Corporate & Retail Momentum",
    problem:
      "Bentonville is concentrated money. Walmart HQ means high-income neighborhoods, constant retail construction, and property managers needing reliable contractors.",
    highlights: [
      "Bentonville-specific keyword rankings for your trade",
      "Review profile health and momentum",
      "Your competitive gaps and opportunities",
    ],
  },
  {
    name: "Fayetteville",
    slug: "fayetteville",
    title: "The Established Market",
    problem:
      "Fayetteville has older homes, methodical homeowners who research online, and fewer contractors visible for local searches. The market favors contractors who show up.",
    highlights: [
      "Fayetteville-specific rankings for your service",
      "Review profile strength and trajectory",
      "Website conversion: are visitors becoming calls?",
    ],
  },
  {
    name: "Springdale",
    slug: "springdale",
    title: "Industrial & Residential Mix",
    problem:
      "Springdale balances residential, light commercial, and multi-family work. Less saturated market than Rogers/Bentonville, but requires showing up in both spaces.",
    highlights: [
      "How Springdale searches find you (residential vs. commercial)",
      "Whether you're capturing both audiences",
      "High-opportunity keywords competitors miss",
    ],
  },
  {
    name: "Siloam Springs",
    slug: "siloam-springs",
    title: "Growing Residential Market",
    problem:
      "Siloam Springs is expanding fast. New construction, growing families, and homeowners who need reliable contractors. Visibility here means capturing demand early.",
    highlights: [
      "Siloam Springs micro-market keyword rankings",
      "Local review momentum and reputation health",
      "Opportunities competitors haven't touched",
    ],
  },
  {
    name: "Bella Vista",
    slug: "bella-vista",
    title: "Affluent Communities",
    problem:
      "Bella Vista has high-income homeowners with established homes and the budget to fix them right. They search online and expect professionalism. Being visible means premium work.",
    highlights: [
      "Bella Vista-specific rankings for your service",
      "Review profile perception and trust markers",
      "High-value keywords and client acquisition",
    ],
  },
  {
    name: "Eureka Springs",
    slug: "eureka-springs",
    title: "Historic & Tourism-Driven",
    problem:
      "Eureka Springs blends historic properties with vacation rentals and property manager demand. It's a smaller market but with unique needs—and less contractor visibility.",
    highlights: [
      "Eureka Springs search visibility and rankings",
      "Property manager and short-term rental contractor demand",
      "Unique service opportunities in this market",
    ],
  },
  {
    name: "Gentry",
    slug: "gentry",
    title: "Emerging Opportunity",
    problem:
      "Gentry is growing and often overlooked by contractors chasing bigger cities. Homeowners here search locally—and there's less competition if you show up.",
    highlights: [
      "Gentry keyword rankings and search visibility",
      "Local market saturation and opportunity gaps",
      "Your competitive position in this area",
    ],
  },
  {
    name: "Gravette",
    slug: "gravette",
    title: "Rural & Residential Growth",
    problem:
      "Gravette is small but growing. Homeowners need contractors who are accessible and reliable. Being found here means capturing work from a market with light competition.",
    highlights: [
      "Gravette visibility and local search rankings",
      "Review profile and reputation in a tight market",
      "Growth opportunities as the area expands",
    ],
  },
];

export default function LocationsCities() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Serving All of Northwest Arkansas</h2>
          <p>
            Rogers, Bentonville, Fayetteville, Springdale, Siloam Springs, Bella Vista, Eureka Springs, Gentry, Gravette.
          </p>
        </motion.div>

        <motion.div
          className={styles.citiesGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {cities.map((city) => (
            <motion.div key={city.name} className={styles.cityCard} variants={fadeUp}>
              <div className={styles.cityHeader}>
                <h3>{city.name}</h3>
                <span className={styles.subtitle}>{city.title}</span>
              </div>

              <p className={styles.problem}>{city.problem}</p>

              <div className={styles.highlights}>
                <p className={styles.highlightLabel}>Your audit reveals:</p>
                <ul>
                  {city.highlights.map((h, i) => (
                    <li key={i}>
                      <span className={styles.check}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={`/service-areas/${city.slug}`} className={styles.cityLink}>
                Learn more about {city.name} →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
