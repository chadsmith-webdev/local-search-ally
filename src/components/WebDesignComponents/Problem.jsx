"use client";

import styles from "./Problem.module.css";
import { motion } from "framer-motion";

export default function Problem() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>The Challenge</span>
          <h2 className={styles.heading}>Most Contractor Websites Fail</h2>
          <p className={styles.intro}>
            They look nice. Then nobody calls. Here's why.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className={styles.problems}
        >
          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>
              <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='9' cy='9' r='7' />
                <polyline points='9 5 9 9 12 11' />
              </svg>
            </div>
            <h3>Too Slow</h3>
            <p>
              Slow websites kill conversions and rankings. If your site takes 5
              seconds to load, customers bounce. Google ranks fast sites higher,
              and slow ones lower. Most contractor websites use bloated
              templates and lose the call before it starts.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>
              <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <rect x='5' y='1' width='8' height='16' rx='1' />
                <line x1='9' y1='13' x2='9' y2='13.5' strokeWidth='2' strokeLinecap='round' />
              </svg>
            </div>
            <h3>Doesn't Work on Mobile</h3>
            <p>
              88% of consumers who do a local search call the business within 24
              hours. Most are on phones. If your website is hard to navigate on
              mobile, slow to load, or has tiny buttons, they'll call your
              competitor instead. Mobile isn't optional anymore.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>
              <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='9' cy='9' r='7' />
                <circle cx='9' cy='9' r='3' />
                <circle cx='9' cy='9' r='1' fill='currentColor' />
              </svg>
            </div>
            <h3>No Clear Call-to-Action</h3>
            <p>
              Visitors land on your site and don't know what to do next. Should
              they call? Fill out a form? Schedule something? If the next step
              isn't obvious and frictionless, they leave. Your site needs one
              clear job per page: get the call.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>
              <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='8' cy='8' r='5' />
                <path d='m13 13 3 3' />
                <line x1='3' y1='3' x2='15' y2='15' />
              </svg>
            </div>
            <h3>Invisible to Google</h3>
            <p>
              Even if your site is pretty, Google might not rank it. Poor page
              structure, no meta tags, missing schema markup, slow speed — all
              invisible problems that tank your search visibility. You need a
              website that's built for Google AND humans.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>
              <svg viewBox='0 0 18 18' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='4' width='14' height='10' rx='1' />
                <line x1='2' y1='8' x2='16' y2='8' />
                <line x1='6' y1='12' x2='8' y2='12' />
              </svg>
            </div>
            <h3>Big Agency Prices, Mediocre Results</h3>
            <p>
              Web design agencies charge $5,000-$15,000+ and hand you off to a
              project manager who'll never update it. You own a site but get no
              guidance on how to use it, optimize it, or connect it to your SEO.
              You spent money but it doesn't work.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.statistic}
        >
          <p>
            <strong>
              60% of consumers say a business's website quality affects their
              perception of the business.
            </strong>{" "}
            A bad website doesn't just cost conversions — it actively damages
            your brand before anyone even meets you.
          </p>
          <p className={styles.source}>
            — BrightLocal, "The State of Local Business"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
