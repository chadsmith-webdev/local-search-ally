"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutServiceAreas.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CITIES = [
  { name: "Rogers", slug: "rogers-ar" },
  { name: "Bentonville", slug: "bentonville-ar" },
  { name: "Fayetteville", slug: "fayetteville-ar" },
  { name: "Springdale", slug: "springdale-ar" },
  { name: "Bella Vista", slug: "bella-vista-ar" },
  { name: "Centerton", slug: "centerton-ar" },
  { name: "Lowell", slug: "lowell-ar" },
  { name: "Cave Springs", slug: "cave-springs-ar" },
  { name: "Siloam Springs", slug: "siloam-springs-ar" },
];

export default function AboutServiceAreas() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={styles.wrapper}
        >
          <div className={styles.header}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Where I work
            </motion.span>
            <motion.h2 className={styles.h2} variants={fadeUp}>
              I work with NWA home service contractors,{" "}
              <em>specifically.</em>
            </motion.h2>
          </div>

          <div className={styles.content}>
            <motion.div className={styles.cityGrid} variants={fadeUp}>
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className={styles.city}
                >
                  {city.name}
                </Link>
              ))}
            </motion.div>

            <motion.p className={styles.trades} variants={fadeUp}>
              If you work on homes &mdash; HVAC, plumbing, electrical, roofing,
              landscaping, remodeling, or any other trade &mdash; I can work with
              you.
            </motion.p>

            <motion.p className={styles.learning} variants={fadeUp}>
              I&rsquo;m still learning these markets. Every audit I run and every
              hour I spend researching the area fills in more of the picture.
              What I know right now is where the visibility gaps are, and that
              shows up in the data regardless of how long I&rsquo;ve been here.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
