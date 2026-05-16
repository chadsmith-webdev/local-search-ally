"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutScrollController({ children }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to a dynamic accent color using consistent RGBA values
  // Carolina Blue: rgba(123, 175, 212, 1)
  // Steel Blue: rgba(58, 85, 112, 1)
  const dynamicColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgba(123, 175, 212, 1)", 
      "rgba(123, 175, 212, 1)", 
      "rgba(58, 85, 112, 1)", 
      "rgba(58, 85, 112, 1)", 
      "rgba(123, 175, 212, 1)", 
      "rgba(123, 175, 212, 1)"
    ]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
        "--dynamic-accent": dynamicColor,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {children}
    </motion.div>
  );
}
