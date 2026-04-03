"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// ─── Orb particle field ───────────────────────────────────────────────────────
// 1 400 points distributed on a sphere surface via the Fibonacci lattice
// (golden-angle spacing) — gives a very even, organic distribution without
// longitude-line artefacts from naive lat/lon sampling.

function FibonacciOrb() {
  const ref = useRef();
  const count = 1400;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const phi = Math.PI * (1 + Math.sqrt(5)); // golden angle in radians

    for (let i = 0; i < count; i++) {
      // Evenly distribute on unit sphere
      const cosTheta = 1 - (2 * (i + 0.5)) / count;
      const sinTheta = Math.sqrt(Math.max(0, 1 - cosTheta * cosTheta));
      const psi = phi * i;

      const r = 2.6; // sphere radius
      pos[i * 3]     = sinTheta * Math.cos(psi) * r;
      pos[i * 3 + 1] = sinTheta * Math.sin(psi) * r;
      pos[i * 3 + 2] = cosTheta * r;
    }
    return pos;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;

    // Slow base rotation
    ref.current.rotation.y = clock.elapsedTime * 0.07;

    // Lazy mouse-follow on X and Z axes — gives a floating, alive quality
    ref.current.rotation.x +=
      (mouse.y * 0.18 - ref.current.rotation.x) * 0.04;
    ref.current.rotation.z +=
      (-mouse.x * 0.06 - ref.current.rotation.z) * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7bafd4"
        size={0.038}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// ─── Canvas export ────────────────────────────────────────────────────────────

export default function ServicesFinalOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]}  intensity={2.2} color="#7bafd4" />
      <pointLight position={[-5, -3, 3]} intensity={0.6} color="#2E3A4D" />
      <FibonacciOrb />
    </Canvas>
  );
}
