/**
 * Lightweight module-level ref for cross-boundary scroll communication.
 *
 * Problem: ServicesHeroScene is rendered inside a React Three Fiber Canvas
 * (which lives in its own renderer context). It can't receive Framer Motion
 * values directly, and ScrollControls from drei would intercept native page
 * scroll, breaking the rest of the page layout.
 *
 * Solution: A plain mutable object updated by ServicesHero (a standard DOM
 * component) and read by the R3F CameraRig inside useFrame — no re-renders,
 * no prop drilling, zero overhead.
 */

export const heroScrollProgress = {
  /** 0 = at top of hero, 1 = hero fully scrolled past */
  current: 0,
};
