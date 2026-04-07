"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./SignalMapDiagram.module.css";

export default function SignalMapDiagram() {
  const shouldReduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section} aria-labelledby='signal-map-heading'>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>The Mechanism</span>
          <h2 className={styles.heading} id='signal-map-heading'>
            How Local SEO Works
          </h2>
          <p className={styles.lead}>
            Four signals that determine whether Google sends you the call — or
            sends it to your competitor.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
            },
          }}
        >
          <span className={styles.bracketBL} aria-hidden='true' />
          <span className={styles.bracketBR} aria-hidden='true' />
          <div className={styles.svgWrap}>
            <svg viewBox='0 0 800 360' className={styles.svg} role='img'>
              <defs>
                <linearGradient id='g1' x1='0' x2='1'>
                  <stop offset='0%' stopColor='#7bafd4' />
                  <stop offset='100%' stopColor='#4a6b8a' />
                </linearGradient>
              </defs>

              {/* center: your business */}
              <g className={styles.centerGroup} transform='translate(400,180)'>
                <circle
                  r='46'
                  fill='#141414'
                  stroke='url(#g1)'
                  strokeWidth='3'
                />
                <text
                  x='0'
                  y='6'
                  fill='#f0f0f0'
                  fontSize='14'
                  fontWeight='600'
                  textAnchor='middle'
                >
                  You
                </text>
              </g>

              {/* four signals */}
              <g className={styles.signal} transform='translate(160,80)'>
                <rect
                  x='-44'
                  y='-36'
                  width='88'
                  height='72'
                  rx='10'
                  fill='#141414'
                  stroke='#2e3a4d'
                />
                <text
                  x='0'
                  y='6'
                  fill='#7bafd4'
                  fontSize='13'
                  fontWeight='600'
                  textAnchor='middle'
                >
                  Findability
                </text>
                <text
                  x='0'
                  y='24'
                  fill='#888888'
                  fontSize='11'
                  textAnchor='middle'
                >
                  GBP & citations
                </text>
                <path
                  d='M80,100 L320,160'
                  stroke='#7bafd4'
                  strokeWidth='2'
                  fill='none'
                  markerEnd='url(#arrow)'
                />
              </g>

              <g className={styles.signal} transform='translate(640,80)'>
                <rect
                  x='-44'
                  y='-36'
                  width='88'
                  height='72'
                  rx='10'
                  fill='#141414'
                  stroke='#2e3a4d'
                />
                <text
                  x='0'
                  y='6'
                  fill='#7bafd4'
                  fontSize='13'
                  fontWeight='600'
                  textAnchor='middle'
                >
                  Relevance
                </text>
                <text
                  x='0'
                  y='24'
                  fill='#888888'
                  fontSize='11'
                  textAnchor='middle'
                >
                  Service pages & keywords
                </text>
                <path
                  d='M480,100 L440,160'
                  stroke='#7bafd4'
                  strokeWidth='2'
                  fill='none'
                  markerEnd='url(#arrow)'
                />
              </g>

              <g className={styles.signal} transform='translate(160,300)'>
                <rect
                  x='-44'
                  y='-36'
                  width='88'
                  height='72'
                  rx='10'
                  fill='#141414'
                  stroke='#2e3a4d'
                />
                <text
                  x='0'
                  y='6'
                  fill='#7bafd4'
                  fontSize='13'
                  fontWeight='600'
                  textAnchor='middle'
                >
                  Trust
                </text>
                <text
                  x='0'
                  y='24'
                  fill='#888888'
                  fontSize='11'
                  textAnchor='middle'
                >
                  Reviews & photos
                </text>
                <path
                  d='M80,260 L320,200'
                  stroke='#7bafd4'
                  strokeWidth='2'
                  fill='none'
                  markerEnd='url(#arrow)'
                />
              </g>

              <g className={styles.signal} transform='translate(640,300)'>
                <rect
                  x='-44'
                  y='-36'
                  width='88'
                  height='72'
                  rx='10'
                  fill='#141414'
                  stroke='#2e3a4d'
                />
                <text
                  x='0'
                  y='6'
                  fill='#7bafd4'
                  fontSize='13'
                  fontWeight='600'
                  textAnchor='middle'
                >
                  Conversion
                </text>
                <text
                  x='0'
                  y='24'
                  fill='#888888'
                  fontSize='11'
                  textAnchor='middle'
                >
                  CTAs & click-to-call
                </text>
                <path
                  d='M480,260 L440,200'
                  stroke='#7bafd4'
                  strokeWidth='2'
                  fill='none'
                  markerEnd='url(#arrow)'
                />
              </g>

              <defs>
                <marker
                  id='arrow'
                  markerWidth='8'
                  markerHeight='8'
                  refX='6'
                  refY='4'
                  orient='auto'
                  markerUnits='strokeWidth'
                >
                  <path d='M0,0 L8,4 L0,8 L2,4 z' fill='#7bafd4' />
                </marker>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
