"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import styles from "./SearchFunnel3D.module.css";

// ── Count-up hook ─────────────────────────────────────────────
function useCountUp(end, duration = 1600, delay = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let timeoutId;
    let rafId;
    timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(eased * end);
        if (progress < 1) rafId = requestAnimationFrame(tick);
        else setValue(end);
      };
      rafId = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [end, duration, delay]);
  return value;
}

// ── Frustum tier geometry ─────────────────────────────────────
function FunnelTier({
  topRadius,
  bottomRadius,
  height,
  y,
  color,
  opacity,
  emissive,
}) {
  const meshRef = useRef();
  const geo = useMemo(
    () =>
      new THREE.CylinderGeometry(topRadius, bottomRadius, height, 48, 1, true),
    [topRadius, bottomRadius, height],
  );

  return (
    <mesh ref={meshRef} position={[0, y, 0]} geometry={geo}>
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.3}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        roughness={0.25}
        metalness={0.1}
        transmission={0.15}
      />
    </mesh>
  );
}

// ── Tier ring (edge glow) ─────────────────────────────────────
function TierRing({ radius, y }) {
  const geo = useMemo(
    () => new THREE.RingGeometry(radius - 0.02, radius + 0.02, 48),
    [radius],
  );
  return (
    <mesh position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]} geometry={geo}>
      <meshBasicMaterial
        color='#7bafd4'
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ── Falling particles ─────────────────────────────────────────
const PARTICLE_COUNT = 40;

function Particles() {
  const pointsRef = useRef();

  const { positions, velocities, opacities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT);
    const opacities = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 1.6 + Math.random() * 0.4;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = 2.2 + Math.random() * 1.5;
      positions[i * 3 + 2] = Math.sin(angle) * r;
      velocities[i] = 0.008 + Math.random() * 0.012;
      opacities[i] = 0.3 + Math.random() * 0.7;
    }
    return { positions, velocities, opacities };
  }, []);

  useFrame(() => {
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Move down
      pos.array[i * 3 + 1] -= velocities[i];
      // Narrow toward center as they fall
      const y = pos.array[i * 3 + 1];
      const t = THREE.MathUtils.clamp((2.2 - y) / 4.0, 0, 1);
      const targetR = THREE.MathUtils.lerp(1.8, 0.35, t);
      const angle = Math.atan2(pos.array[i * 3 + 2], pos.array[i * 3]);
      const currentR = Math.sqrt(
        pos.array[i * 3] ** 2 + pos.array[i * 3 + 2] ** 2,
      );
      const newR = THREE.MathUtils.lerp(currentR, targetR, 0.03);
      pos.array[i * 3] = Math.cos(angle) * newR;
      pos.array[i * 3 + 2] = Math.sin(angle) * newR;

      // Reset at bottom
      if (y < -2.2) {
        const resetAngle = Math.random() * Math.PI * 2;
        const resetR = 1.6 + Math.random() * 0.4;
        pos.array[i * 3] = Math.cos(resetAngle) * resetR;
        pos.array[i * 3 + 1] = 2.2 + Math.random() * 0.5;
        pos.array[i * 3 + 2] = Math.sin(resetAngle) * resetR;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          array={positions}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color='#7bafd4'
        size={0.045}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ── Bottom glow disc ──────────────────────────────────────────
function BottomGlow() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.material.opacity = 0.15 + Math.sin(t * 1.2) * 0.08;
    ref.current.scale.x = 1 + Math.sin(t * 1.2) * 0.08;
    ref.current.scale.z = 1 + Math.sin(t * 1.2) * 0.08;
  });
  return (
    <mesh ref={ref} position={[0, -2.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.7, 32]} />
      <meshBasicMaterial color='#7bafd4' transparent opacity={0.15} />
    </mesh>
  );
}

// ── Slow auto-rotate wrapper ──────────────────────────────────
function RotatingGroup({ children }) {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.12;
  });
  return <group ref={groupRef}>{children}</group>;
}

// ── HUD labels (HTML overlays) ────────────────────────────────
function FunnelLabels() {
  const v1 = useCountUp(8.5, 1500, 600);
  const v2 = useCountUp(3.91, 1500, 1000);
  const v3 = useCountUp(3.12, 1500, 1400);

  return (
    <>
      {/* Tier 1 — Global Searches */}
      <Html
        position={[2.4, 1.4, 0]}
        center
        distanceFactor={6}
        className={styles.labelWrap}
      >
        <div className={styles.label}>
          <span className={styles.labelNum}>{v1.toFixed(1)}B</span>
          <span className={styles.labelText}>searches / day</span>
        </div>
      </Html>

      {/* Tier 2 — Local Intent */}
      <Html
        position={[1.8, -0.1, 0]}
        center
        distanceFactor={6}
        className={styles.labelWrap}
      >
        <div className={styles.label}>
          <span className={styles.labelNum}>{v2.toFixed(2)}B</span>
          <span className={styles.labelText}>local intent</span>
        </div>
      </Html>

      {/* Tier 3 — Conversions */}
      <Html
        position={[1.2, -1.5, 0]}
        center
        distanceFactor={6}
        className={styles.labelWrap}
      >
        <div className={styles.label}>
          <span className={styles.labelNum}>{v3.toFixed(2)}B</span>
          <span className={styles.labelText}>conversions</span>
        </div>
      </Html>
    </>
  );
}

// ── Main scene ────────────────────────────────────────────────
function FunnelScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={0.6} color='#e8f0ff' />
      <pointLight
        position={[0, -2.5, 0]}
        intensity={0.4}
        color='#7bafd4'
        distance={5}
      />

      <RotatingGroup>
        {/* Tier 1 — widest (Global Searches) */}
        <FunnelTier
          topRadius={1.8}
          bottomRadius={1.25}
          height={1.3}
          y={1.35}
          color='#1a3a55'
          emissive='#7bafd4'
          opacity={0.25}
        />
        <TierRing radius={1.8} y={2.0} />
        <TierRing radius={1.25} y={0.7} />

        {/* Tier 2 — middle (Local Intent) */}
        <FunnelTier
          topRadius={1.2}
          bottomRadius={0.7}
          height={1.3}
          y={-0.1}
          color='#1e4a6e'
          emissive='#7bafd4'
          opacity={0.35}
        />
        <TierRing radius={1.2} y={0.55} />
        <TierRing radius={0.7} y={-0.75} />

        {/* Tier 3 — narrowest (Conversions) */}
        <FunnelTier
          topRadius={0.65}
          bottomRadius={0.35}
          height={1.2}
          y={-1.5}
          color='#2a5f8f'
          emissive='#7bafd4'
          opacity={0.5}
        />
        <TierRing radius={0.65} y={-0.9} />
        <TierRing radius={0.35} y={-2.1} />

        {/* Particles flowing through */}
        <Particles />

        {/* Bottom glow */}
        <BottomGlow />
      </RotatingGroup>

      {/* Labels stay facing camera (outside rotation group) */}
      <FunnelLabels />
    </>
  );
}

// ── Exported canvas ───────────────────────────────────────────
export default function SearchFunnel3D() {
  return (
    <div
      className={styles.canvasWrap}
      aria-label='Local Search Opportunity Funnel: 8.5 billion daily searches, 3.91 billion with local intent, 3.12 billion daily conversions'
      role='img'
    >
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <FunnelScene />
        </Suspense>
      </Canvas>

      {/* Source line below canvas */}
      <p className={styles.source}>
        SRC: BRIGHTLOCAL · SEARCHENGINEROUNDTABLE · THINK WITH GOOGLE
      </p>
    </div>
  );
}
