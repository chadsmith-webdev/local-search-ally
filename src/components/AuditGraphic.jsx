"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./AuditGraphic.module.css";

export default function AuditGraphic() {
  const containerRef = useRef(null);
  
  // Track scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    tiltY.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    tiltY.set(0);
  };

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className={styles.hud}
        style={{ y, rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Background Layer */}
        <div className={styles.bgLayer} />

        {/* Central Gauge Layer */}
        <div className={styles.gaugeLayer} style={{ transform: "translateZ(60px)" }}>
          <svg viewBox="0 0 100 100" className={styles.gauge}>
            <circle
              cx="50"
              cy="50"
              r="40"
              className={styles.gaugeTrack}
              fill="none"
              strokeWidth="4"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              className={styles.gaugeFillYellow}
              fill="none"
              strokeWidth="6"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              whileInView={{ strokeDashoffset: 251.2 * (1 - 0.5) }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
          </svg>
          <div className={styles.scoreBlock}>
            <span className={styles.scoreNumber}>5</span>
            <span className={styles.scoreTotal}>/10</span>
            <span className={styles.statusLabelYellow}>LOCAL MIRAGE</span>
          </div>
        </div>

        {/* Data Points Layer */}
        <div className={styles.dataLayer} style={{ transform: "translateZ(30px)" }}>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>GBP_SIGNAL (60%)</span>
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFillYellow} 
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>ON_PAGE_SEO (40%)</span>
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFillRed} 
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>CITATIONS_NAP (80%)</span>
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFillGreen} 
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </div>
          </div>
        </div>

        {/* Decorative Telemetry Overlay */}
        <div className={styles.telemetryOverlay} style={{ transform: "translateZ(90px)" }}>
          <div className={styles.scannerLine} />
          <span className={styles.telemetryTag}>[ SCAN_ID: 0x4a8d ]</span>
          <span className={styles.telemetryTag}>[ TARGET: NWA_SERVICE_CORE ]</span>
        </div>
      </motion.div>
    </div>
  );
}
