"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./StakesSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const OUTCOMES = [
  {
    icon: (
      <svg
        viewBox='0 0 18 18'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M9 1v2M9 15v2M1 9h2M15 9h2' />
        <circle cx='9' cy='9' r='4' />
        <path d='M2.2 2.2l1.4 1.4M14.4 14.4l1.4 1.4M14.4 3.6l-1.4 1.4M3.6 14.4l-1.4 1.4' />
      </svg>
    ),
    title: "Lost calls you never knew existed",
    body: "Jobs go to whoever shows up first in Google. If that's not you, those calls aren't going to voicemail — they're going to a competitor.",
  },
  {
    icon: (
      <svg
        viewBox='0 0 18 18'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M16 12s-3-2-7-2-7 2-7 2' />
        <circle cx='9' cy='7' r='3' />
        <path d='M9 10v2' />
      </svg>
    ),
    title: "Referrals can only go so far",
    body: "Word-of-mouth built your business. It won't scale it. When referrals slow down — and they will — you need search to fill the gap.",
  },
  {
    icon: (
      <svg
        viewBox='0 0 18 18'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='1 12 5 8 8 11 11 6 17 9' />
        <line x1='17' y1='14' x2='1' y2='14' />
      </svg>
    ),
    title: "Competitors gain ground you can't recover overnight",
    body: "Every month a competitor builds reviews, rankings, and recognition, the gap gets harder to close. Rankings take time. The longer you wait, the more time it takes.",
  },
];

export default function StakesSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>The Cost of Staying Invisible</span>
          <h2 className={styles.h2}>
            Every month you&rsquo;re not showing up,
            <br />
            someone else is getting your calls.
          </h2>
          <p className={styles.lead}>
            It&rsquo;s not dramatic. It&rsquo;s just math. A homeowner in
            Fayetteville needs an HVAC tech today. They open Google, click one
            of the top three results, and make a call. If you&rsquo;re not in
            those results, you don&rsquo;t get a chance to compete.
          </p>
        </motion.div>

        {/* Failure outcome cards */}
        <motion.div className={styles.cards} variants={container}>
          {OUTCOMES.map((item) => (
            <motion.div
              key={item.title}
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.iconWrap}>{item.icon}</div>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardBody}>{item.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom: transition + early CTA */}
        <motion.div className={styles.bottom} variants={fadeUp}>
          <p className={styles.bottomText}>
            <strong>It doesn&rsquo;t have to stay that way.</strong> I work with
            home service trades in NWA to close the visibility gap — fixing what
            holds them back in search, so the right customers can actually find
            them.
          </p>
          <Link href='/audit' className={styles.cta}>
            Get an honest assessment
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.75'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M3 8h10M9 4l4 4-4 4' />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
