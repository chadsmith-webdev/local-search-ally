"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { heroScrollProgress } from "@/lib/scrollStore";

// R3F v9 uses THREE.Clock internally; Three.js r175+ deprecated it in favor of THREE.Timer.
// Suppress until R3F v10 (currently alpha) ships a stable fix.
if (typeof window !== "undefined") {
  const _warn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
    _warn.apply(console, args);
  };
}
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── MAP PIN NODE ─────────────────────────────────────────────────────────────

function MapPinNode({ position, delay = 0, brightness = 1 }) {
  const groupRef  = useRef();
  const sphereRef = useRef();
  const elapsed   = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;
    const time = elapsed.current;

    // Page-load scale-in: each pin materializes with a staggered delay
    const t      = Math.max(0, time - delay);
    const scaleT = Math.min(t / 0.6, 1);
    const eased  = 1 - Math.pow(1 - scaleT, 3); // ease-out cubic
    groupRef.current.scale.setScalar(eased);

    // Soft continuous pulse on the glow sphere
    const pulse = 1 + Math.sin(time * 1.8 + delay * 3) * 0.12;
    sphereRef.current.scale.setScalar(pulse);
  });

  return (
    <group ref={groupRef} position={position} scale={0}>
      {/* Pin needle */}
      <mesh position={[0, -0.6, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.04, 0.7, 6]} />
        <meshBasicMaterial color="#7bafd4" transparent opacity={0.5 * brightness} />
      </mesh>

      {/* Pin ball */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.22, 12, 12]} />
        <meshBasicMaterial color="#7bafd4" transparent opacity={0.9 * brightness} />
      </mesh>

      {/* Glow halo */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.42, 10, 10]} />
        <meshBasicMaterial
          color="#7bafd4"
          transparent
          opacity={0.08 * brightness}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// ─── MAP GRID PLANE ───────────────────────────────────────────────────────────

function MapGrid() {
  const gridRef = useRef();
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;
    gridRef.current.position.z = Math.sin(elapsed.current * 0.15) * 0.4;
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[40, 20, "#4A6B8A", "#1a2030"]}
      rotation={[0.18, 0.06, 0]}
      position={[0, -4.5, 0]}
    />
  );
}

// ─── AMBIENT PARTICLE FIELD ───────────────────────────────────────────────────

function AmbientParticles() {
  const pointsRef = useRef();
  const elapsed   = useRef(0);
  const count     = 280;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    elapsed.current += delta;
    pointsRef.current.rotation.y = elapsed.current * 0.018;
    pointsRef.current.rotation.x = elapsed.current * 0.006;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7bafd4"
        size={0.055}
        sizeAttenuation
        depthWrite={false}
        opacity={0.28}
      />
    </Points>
  );
}

// ─── CAMERA RIG ───────────────────────────────────────────────────────────────
// Combines a page-load fly-in (time-driven) with a scroll-driven drift.
// heroScrollProgress.current: 0 = hero fully visible, 1 = hero scrolled past.

function CameraRig() {
  const elapsed = useRef(0);

  useFrame((state, delta) => {
    elapsed.current += delta;

    // ── fly-in phase (first 2 s) ────────────────────────────────────────────
    const t     = Math.min(elapsed.current / 2, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const baseZ = 42 - 22 * eased; // 42 → 20
    const baseY = 2  - 1.5 * eased; // 2 → 0.5

    // ── scroll drift phase ─────────────────────────────────────────────────
    // As the hero scrolls off screen the camera creeps forward and tilts,
    // giving a "diving into the map" feeling.
    const s = heroScrollProgress.current;
    state.camera.position.z = baseZ - s * 5;   // drift forward 5 units
    state.camera.position.y = baseY + s * 1.4; // rise slightly
    state.camera.position.x += (-s * 0.8 - state.camera.position.x) * 0.04; // lazy left drift
    state.camera.rotation.x  = -s * 0.07;      // subtle downward tilt
  });

  return null;
}

// ─── PIN LAYOUT ───────────────────────────────────────────────────────────────

const PIN_POSITIONS = [
  { pos: [-3.5,  0.5, -1], delay: 0.4,  brightness: 1.0 },
  { pos: [ 2.8,  1.2, -2], delay: 0.8,  brightness: 0.85 },
  { pos: [-0.6, -1.0, -3], delay: 1.1,  brightness: 0.7  },
  { pos: [ 5.2,  0.0, -4], delay: 1.4,  brightness: 0.6  },
  { pos: [-5.5, -0.5, -5], delay: 1.7,  brightness: 0.45 },
  { pos: [ 1.5, -2.0, -6], delay: 2.0,  brightness: 0.35 },
];

// ─── CANVAS EXPORT ────────────────────────────────────────────────────────────

export default function ServicesHeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 42], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 8, 8]}    intensity={1.8} color="#7bafd4" />
      <pointLight position={[-8, -4, -4]} intensity={0.6} color="#2E3A4D" />

      <CameraRig />
      <MapGrid />
      <AmbientParticles />

      {PIN_POSITIONS.map((p, i) => (
        <MapPinNode
          key={i}
          position={p.pos}
          delay={p.delay}
          brightness={p.brightness}
        />
      ))}

      <fog attach="fog" args={["#030508", 8, 38]} />
    </Canvas>
  );
}
