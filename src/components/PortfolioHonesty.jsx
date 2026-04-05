"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioHonesty.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function PortfolioHonesty() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            About this work
          </motion.span>

          <motion.div className={styles.body} variants={container}>
            <motion.p variants={fadeUp}>
              Most agencies hand you a PDF with client logos and curated
              numbers.
            </motion.p>
            <motion.p variants={fadeUp}>I hand you a working website.</motion.p>
            <motion.p variants={fadeUp}>
              I don&rsquo;t have client case studies yet — and I&rsquo;m not
              going to pretend otherwise. What I have is demo builds you can
              click through, load on your phone, and pull apart however you
              want. No edited screenshots. No cherry-picked quotes.
            </motion.p>
            <motion.p variants={fadeUp}>
              When I take on client work and start producing results I can
              document honestly, I&rsquo;ll show you exactly that. Until then:
              this is the work. <strong>Judge it yourself.</strong>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
