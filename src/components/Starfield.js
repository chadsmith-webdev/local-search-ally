"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight CSS + canvas hybrid starfield background.
 * Renders 3 layers: distant stars (tiny), mid stars, and near stars (with subtle twinkle).
 * Also paints a soft nebula wash for depth.
 *
 * Usage: <Starfield /> — absolutely positioned, fills its parent.
 */
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let stars = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateStars(rect.width, rect.height);
    }

    function generateStars(w, h) {
      stars = [];
      const count = Math.floor((w * h) / 3000); // density relative to area
      for (let i = 0; i < count; i++) {
        const layer = Math.random();
        let size, baseOpacity, twinkleSpeed;

        if (layer < 0.6) {
          // Distant — tiny, faint, no twinkle
          size = Math.random() * 0.8 + 0.3;
          baseOpacity = Math.random() * 0.3 + 0.1;
          twinkleSpeed = 0;
        } else if (layer < 0.9) {
          // Mid — small, moderate
          size = Math.random() * 1.2 + 0.5;
          baseOpacity = Math.random() * 0.4 + 0.2;
          twinkleSpeed = Math.random() * 0.002 + 0.001;
        } else {
          // Near — slightly larger, brighter, twinkles
          size = Math.random() * 1.8 + 0.8;
          baseOpacity = Math.random() * 0.5 + 0.3;
          twinkleSpeed = Math.random() * 0.004 + 0.002;
        }

        // Bias color: mostly white/blue-white, occasional warm star
        const colorRoll = Math.random();
        let color;
        if (colorRoll < 0.7) {
          color = "rgba(200, 220, 255,"; // blue-white
        } else if (colorRoll < 0.9) {
          color = "rgba(123, 175, 212,"; // carolina blue tint
        } else {
          color = "rgba(255, 240, 220,"; // warm white
        }

        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          baseOpacity,
          twinkleSpeed,
          twinkleOffset: Math.random() * Math.PI * 2,
          color,
        });
      }
    }

    function draw(time) {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      // Nebula wash — subtle radial gradients
      const nebula1 = ctx.createRadialGradient(
        w * 0.3, h * 0.2, 0,
        w * 0.3, h * 0.2, w * 0.5
      );
      nebula1.addColorStop(0, "rgba(1, 33, 105, 0.12)");
      nebula1.addColorStop(0.5, "rgba(1, 33, 105, 0.04)");
      nebula1.addColorStop(1, "transparent");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, w, h);

      const nebula2 = ctx.createRadialGradient(
        w * 0.75, h * 0.6, 0,
        w * 0.75, h * 0.6, w * 0.4
      );
      nebula2.addColorStop(0, "rgba(123, 175, 212, 0.06)");
      nebula2.addColorStop(0.5, "rgba(123, 175, 212, 0.02)");
      nebula2.addColorStop(1, "transparent");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, w, h);

      // Stars
      for (const star of stars) {
        let opacity = star.baseOpacity;
        if (star.twinkleSpeed > 0) {
          opacity += Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.2;
          opacity = Math.max(0.05, Math.min(opacity, 0.8));
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color + opacity + ")";
        ctx.fill();

        // Glow for brighter stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = star.color + (opacity * 0.15) + ")";
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    resize();

    if (prefersReducedMotion) {
      // Draw once, no animation
      draw(0);
      cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
