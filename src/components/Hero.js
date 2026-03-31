"use client";

import React, { useEffect, useRef, useState } from "react";

function SignalBackdrop() {
  return (
    <div className='hero-backdrop' aria-hidden='true'>
      <div className='hero-radar-center'>
        <div className='hero-radar-ring hero-radar-ring-a' />
        <div className='hero-radar-ring hero-radar-ring-b' />
        <div className='hero-radar-core' />
        <div className='hero-radar-sweep' />
      </div>
      <div className='hero-scan-line hero-scan-line-a' />
      <div className='hero-scan-line hero-scan-line-b' />
      <div className='hero-signal-node hero-signal-node-a' />
      <div className='hero-signal-node hero-signal-node-b' />
      <div className='hero-signal-node hero-signal-node-c' />
    </div>
  );
}

export default function Hero({ title, subtitle, eyebrow, actions, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Simplified reveal for now since we just want it to show up consistently
  }, []);

  return (
    <section className='story-shell'>
      <style>{`
        .story-shell {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          border-bottom: 1px solid var(--border);
          background:
            radial-gradient(circle at 90% 8%, rgba(123, 175, 212, 0.22), transparent 36%),
            radial-gradient(circle at 8% 0%, rgba(1, 33, 105, 0.28), transparent 34%),
            linear-gradient(180deg, #090d14, #06080c);
        }
        .story-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(123, 175, 212, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 175, 212, 0.09) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.75), transparent 80%);
          pointer-events: none;
          opacity: 0.35;
        }

        .hero-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-radar-ring,
        .hero-radar-core,
        .hero-radar-sweep {
          position: absolute;
          inset: 0;
          border-radius: 50%;
        }
        .hero-radar-center {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(34rem, 72vw, 62rem);
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
        }
        .hero-radar-ring {
          border: 1px solid rgba(123, 175, 212, 0.14);
        }
        .hero-radar-ring-a {
          animation: radarPulse 4.5s linear infinite;
        }
        .hero-radar-ring-b {
          animation: radarPulse 4.5s linear infinite 1.5s;
        }
        .hero-radar-core {
          background: radial-gradient(circle, rgba(123, 175, 212, 0.14), rgba(123, 175, 212, 0.02) 52%, transparent 72%);
          opacity: 0.62;
        }
        .hero-radar-sweep {
          background: conic-gradient(from 120deg, transparent 0deg, rgba(123, 175, 212, 0.22) 48deg, transparent 90deg);
          mix-blend-mode: screen;
          animation: radarSweep 10s linear infinite;
          opacity: 0.52;
        }
        .hero-scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123, 175, 212, 0.45), transparent);
          opacity: 0;
        }
        .hero-scan-line-a {
          top: 25%;
          animation: scanDrift 7s linear infinite;
        }
        .hero-scan-line-b {
          top: 68%;
          animation: scanDrift 8.5s linear infinite 1.2s;
        }
        .hero-signal-node {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--carolina);
          box-shadow: 0 0 22px rgba(123, 175, 212, 0.42);
          animation: floatNode 4s ease-in-out infinite;
        }
        .hero-signal-node-a { left: 66%; top: 30%; }
        .hero-signal-node-b { left: 74%; top: 49%; animation-delay: 1.2s; }
        .hero-signal-node-c { left: 60%; top: 66%; animation-delay: 2.1s; }

        @keyframes radarPulse {
          0% { transform: scale(0.82); opacity: 0.06; }
          55% { opacity: 0.24; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scanDrift {
          0% { transform: translateX(-12%); opacity: 0; }
          40% { opacity: 0.45; }
          100% { transform: translateX(12%); opacity: 0; }
        }
        @keyframes floatNode {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.35; }
          50% { transform: translateY(-10px) scale(1.08); opacity: 0.85; }
        }

        .hero-wrap {
          max-width: 860px;
          margin: 0 auto;
          min-height: 100vh;
          box-sizing: border-box;
          padding: clamp(5.25rem, 8vw, 7rem) 1.5rem clamp(4rem, 6vw, 5.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .story-eyebrow {
          margin: 0 0 0.85rem;
          font-family: var(--font-mono);
          color: var(--carolina);
          letter-spacing: 0.13em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }
        .hero-title {
          margin: 0 0 1rem auto;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.04;
          letter-spacing: -0.02em;
          font-size: clamp(2rem, 4.4vw, 4.2rem);
          width: 100%;
        }
        .hero-title-lead {
          display: block;
        }
        .hero-title-lead-line {
          display: block;
          white-space: nowrap;
        }
        .hero-title-accent {
          display: block;
          margin-top: 0.14em;
          color: var(--carolina);
          font-style: italic;
          font-size: 0.94em;
          line-height: 1.02;
          white-space: nowrap;
        }
        .hero-copy {
          margin: 0 auto 1.7rem;
          color: var(--muted);
          line-height: 1.75;
          max-width: 52ch;
          font-size: 1.02rem;
        }

        .motion-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .motion-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 980px) {
          .hero-wrap { padding-top: 5.4rem; min-height: auto; }
          .hero-radar-center { width: 30rem; }
          .hero-signal-node-a { left: 68%; top: 24%; }
          .hero-signal-node-b { left: 76%; top: 44%; }
          .hero-signal-node-c { left: 58%; top: 61%; }
        }
        @media (max-width: 740px) {
          .hero-radar-center { width: 24rem; }
          .hero-radar-core, .hero-radar-sweep { opacity: 0.44; }
          .hero-signal-node-a { left: 66%; top: 21%; }
          .hero-signal-node-b { left: 74%; top: 40%; }
          .hero-signal-node-c { left: 57%; top: 56%; }
        }
        @media (max-width: 640px) {
          .hero-radar-center { width: 20.5rem; }
          .hero-radar-core, .hero-radar-sweep { opacity: 0.38; }
          .hero-wrap { min-height: auto; padding: 4.25rem 1.1rem 2.5rem; }
          .hero-title { font-size: clamp(1.55rem, 6.5vw, 2rem); }
          .hero-title-lead-line, .hero-title-accent { white-space: normal; }
          .hero-title-accent { font-size: 1em; }
          .hero-copy { font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-reveal { opacity: 1; transform: none; transition: none; }
          .hero-radar-ring, .hero-radar-sweep, .hero-scan-line, .hero-signal-node { animation: none !important; }
        }
      `}</style>

      <SignalBackdrop />
      <div className='hero-wrap'>
        <div ref={ref} className={`motion-reveal ${visible ? 'visible' : ''}`}>
          {eyebrow && <p className='story-eyebrow'>{eyebrow}</p>}
          {title && <h1 className='hero-title'>{title}</h1>}
          {subtitle && <p className='hero-copy'>{subtitle}</p>}
          {actions}
        </div>
        {children}
      </div>
    </section>
  );
}
