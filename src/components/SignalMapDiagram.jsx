"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./SignalMapDiagram.module.css";

export default function SignalMapDiagram() {
  const shouldReduce = useReducedMotion();

  const reveal = shouldReduce
    ? { initial: { opacity: 1, scale: 1 }, animate: {} }
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
      };

  return (
    <section className={styles.wrap} aria-label='How local SEO works diagram'>
      <motion.div
        className={styles.card}
        initial={reveal.initial}
        animate={reveal.animate}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className={styles.title}>How Local SEO Works</h3>
        <p className={styles.lead}>
          Key signals that make you findable and trusted.
        </p>

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
              <circle r='46' fill='#141414' stroke='url(#g1)' strokeWidth='3' />
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
    </section>
  );
}
