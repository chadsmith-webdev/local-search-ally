"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioCraft.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const POINTS = [
  {
    heading: "Every page targets something specific.",
    body: "Not just \u201cplumber in Arkansas\u201d \u2014 \u201cemergency plumber Bentonville AR,\u201d \u201cwater heater replacement Rogers,\u201d \u201cpanel upgrade NWA.\u201d The difference is the difference between showing up and not.",
  },
  {
    heading: "Built for the phone in your pocket.",
    body: "Half your customers are searching from a job site or a flooded basement. Everything works at arm\u2019s length with a thumb, loads in under two seconds on a 4G connection, and puts the phone number one tap away.",
  },
  {
    heading: "Traffic only matters if it converts.",
    body: "A site that ranks but doesn\u2019t get calls is just a vanity project. Every page has one job: make it easy to take the next step.",
  },
];

export default function PortfolioCraft() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.layout}
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.labelCol} variants={fadeUp}>
            <span className={styles.eyebrow}>What makes these different</span>
            <p className={styles.labelNote}>
              These are built to rank. Everything else follows from that.
            </p>
          </motion.div>

          <div className={styles.pointsCol}>
            {POINTS.map(({ heading, body }) => (
              <motion.div
                key={heading}
                className={styles.point}
                variants={fadeUp}
              >
                <h3 className={styles.pointHeading}>{heading}</h3>
                <p className={styles.pointBody}>{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
