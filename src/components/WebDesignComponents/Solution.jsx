"use client";

import styles from "./Solution.module.css";
import { motion } from "framer-motion";

export default function Solution() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
          <h2 className={styles.heading}>A Website That Actually Works</h2>
          <p className={styles.intro}>
            I build custom websites on Next.js — fast, mobile-first, and
            optimized to convert visitors into calls.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.answerFirst}
        >
          <h3>Websites as a conversion engine, not a brochure.</h3>
          <p>
            Your website is your 24/7 salesman. It needs to load in under 3
            seconds, look perfect on phones, clearly show what you do, and have
            an obvious next step (call, form, booking). Everything else is
            distraction.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <h3>What You Get</h3>

          <div className={styles.whatItem}>
            <h4>1. Custom Design Built for Your Customers</h4>
            <p>
              No templates. Every site is designed from scratch for your
              business, your market, and your customers. The design is clean,
              professional, and focused on one thing: making people comfortable
              calling you.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>2. Mobile-First & Fast</h4>
            <p>
              Built on Next.js with optimized images, lazy loading, and minimal
              code. Pages load in under 2 seconds on both desktop and mobile.
              Google ranks fast sites higher. Your customers don't bounce from
              slow loading.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>3. SEO Built In</h4>
            <p>
              Every page has clear H1/H2 structure, optimized meta tags, schema
              markup, mobile responsiveness, and fast load times. I'm not
              building a separate "SEO thing" — it's baked into every page. Your
              site ranks on Google because it's built right.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>4. One Clear Call-to-Action Per Page</h4>
            <p>
              Hero page? "Call us." Service page? "Schedule a free estimate."
              Contact page? Easy form. No confusion. No fluff. Visitors know
              exactly what to do next, and the path to calling you is
              frictionless.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>5. Easy to Update</h4>
            <p>
              You can updating service descriptions, testimonials, photos, and
              contact information without touching code. Content changes are
              yours to own. I handle the technical parts.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>6. Deployed on Vercel</h4>
            <p>
              Every site runs on Vercel's global CDN — meaning it's fast
              everywhere, secure, and automatically scaled. No server
              management. No downtime. Just reliability.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.transparency}
        >
          <h3>You own it. I just build it.</h3>
          <p>
            Your domain. Your data. Your website. I build it, deploy it, and
            show you how to manage it. You're never locked in or dependent on me
            for basic updates. I'm here to help, but you own the asset.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
