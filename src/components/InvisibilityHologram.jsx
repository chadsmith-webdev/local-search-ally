"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./InvisibilityHologram.module.css";

/* ─── Wireframe terrain mesh ──────────────────────────── */
function CloakMesh() {
  const meshRef = useRef();
  const geoRef = useRef();

  // Store the original positions for displacement
  const originalPositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(5, 5, 64, 64);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  useFrame(({ clock }) => {
    if (!geoRef.current) return;

    const time = clock.getElapsedTime();
    const positions = geoRef.current.attributes.position.array;
    const count = positions.length / 3;

    const displacementScale = 0.35;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const origX = originalPositions[ix];
      const origY = originalPositions[iy];

      // Multi-frequency sine waves for organic topography
      const wave1 = Math.sin(origX * 1.2 + time * 0.6) * 0.4;
      const wave2 = Math.sin(origY * 1.5 + time * 0.4) * 0.3;
      const wave3 = Math.sin((origX + origY) * 0.8 + time * 0.8) * 0.25;
      const wave4 = Math.sin(origX * 2.5 + origY * 2.0 + time * 1.2) * 0.12;

      positions[iz] = (wave1 + wave2 + wave3 + wave4) * displacementScale;
    }

    geoRef.current.attributes.position.needsUpdate = true;
    geoRef.current.computeVertexNormals();

    // Slow rotation
    if (meshRef.current) {
      meshRef.current.rotation.z = time * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3.5, 0, 0.2]}>
      <planeGeometry ref={geoRef} args={[6, 6, 64, 64]} />
      <meshBasicMaterial
        color="#7bafd4"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/* ─── Ambient particles ───────────────────────────────── */
function Particles() {
  const ref = useRef();
  const count = 60;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const time = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(time * 0.3 + i) * 0.001;
      pos[i * 3 + 2] += Math.cos(time * 0.2 + i * 0.5) * 0.0008;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7bafd4"
        size={0.025}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Scan ring — HUD overlay ─────────────────────────── */
function ScanRing() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const time = clock.getElapsedTime();
    ref.current.rotation.z = time * 0.15;
    ref.current.material.opacity = 0.1 + Math.sin(time * 0.8) * 0.05;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 3.5, 0, 0.2]} position={[0, 0, -0.1]}>
      <ringGeometry args={[2.6, 2.75, 64]} />
      <meshBasicMaterial
        color="#7bafd4"
        transparent
        opacity={0.12}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ─── Main export: HUD-wrapped hologram ───────────────── */
export default function InvisibilityHologram() {
  return (
    <div className={styles.hud}>
      {/* Corner bracket helpers (bottom) */}
      <span className={styles.bracketBL} />
      <span className={styles.bracketBR} />

      {/* Horizontal accent bars */}
      <div className={styles.hudHeader} />
      <div className={styles.hudFooter} />

      {/* Radial glow — wireframe emitting light */}
      <div className={styles.glow} />

      {/* Vertical scan bar */}
      <div className={styles.scanBar} />

      {/* Micro-labels: diagnostic readouts */}
      <span className={`${styles.label} ${styles.labelTL}`}>
        <span className={styles.statusDot} />
        CLOAK_STATUS: ACTIVE
      </span>
      <span className={`${styles.label} ${styles.labelTR}`}>
        NODE_MAP: 3-PACK
      </span>
      <span className={`${styles.label} ${styles.labelBL}`}>
        LATENCY: 12ms
      </span>
      <span className={`${styles.label} ${styles.labelBR}`}>
        SCAN_ID: 0x7B
      </span>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        className={styles.canvas}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <CloakMesh />
        <Particles />
        <ScanRing />
      </Canvas>
    </div>
  );
}
