"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import styles from "./InvisibilityHologram.module.css";

/* ─── Perlin noise (classic 3D) ───────────────────────── */
const PERM = new Uint8Array(512);
const GRAD3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
  [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
  [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
];

(function initPerm() {
  const p = [];
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
})();

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(a, b, t) { return a + t * (b - a); }
function dot3(g, x, y, z) { return g[0] * x + g[1] * y + g[2] * z; }

function perlin3(x, y, z) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);
  const u = fade(x), v = fade(y), w = fade(z);

  const A  = PERM[X] + Y, AA = PERM[A] + Z, AB = PERM[A + 1] + Z;
  const B  = PERM[X + 1] + Y, BA = PERM[B] + Z, BB = PERM[B + 1] + Z;

  return lerp(
    lerp(
      lerp(dot3(GRAD3[PERM[AA] % 12], x, y, z),
           dot3(GRAD3[PERM[BA] % 12], x - 1, y, z), u),
      lerp(dot3(GRAD3[PERM[AB] % 12], x, y - 1, z),
           dot3(GRAD3[PERM[BB] % 12], x - 1, y - 1, z), u), v),
    lerp(
      lerp(dot3(GRAD3[PERM[AA + 1] % 12], x, y, z - 1),
           dot3(GRAD3[PERM[BA + 1] % 12], x - 1, y, z - 1), u),
      lerp(dot3(GRAD3[PERM[AB + 1] % 12], x, y - 1, z - 1),
           dot3(GRAD3[PERM[BB + 1] % 12], x - 1, y - 1, z - 1), u), v), w);
}

/* ─── Bloom post-processing ───────────────────────────── */
function BloomEffect() {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef();

  useEffect(() => {
    const composer = new EffectComposer(gl);
    composer.setSize(size.width, size.height);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      1.0,   // strength — peaks bleed into surrounding slate
      0.8,   // radius — atmospheric spread
      0.65   // threshold — only the absolute hottest vertices bloom
    );
    composer.addPass(bloomPass);

    composerRef.current = composer;

    return () => {
      composer.dispose();
    };
  }, [gl, scene, camera, size]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  return null;
}

/* ─── Shared displacement with high-frequency jitter ──── */
function displace(origX, origY, time) {
  /* Base terrain — smooth sine waves */
  const wave1 = Math.sin(origX * 0.5 + time * 0.4) * 0.5;
  const wave2 = Math.sin(origY * 0.6 + time * 0.3) * 0.4;
  const wave3 = Math.sin((origX + origY) * 0.35 + time * 0.55) * 0.35;

  /* Perlin noise for erratic energy field */
  const n1 = perlin3(origX * 0.25, origY * 0.25, time * 0.3) * 1.2;
  const n2 = perlin3(origX * 0.5 + 50, origY * 0.5 + 50, time * 0.5) * 0.5;
  const n3 = perlin3(origX * 1.0 + 100, origY * 1.0, time * 0.8) * 0.2;

  /* High-frequency data jitter — rapid vibration */
  const jitter = Math.sin(origX * 8.0 + time * 12.0) *
                 Math.cos(origY * 6.5 + time * 9.0) * 0.06 +
                 Math.sin((origX * 12.0 + origY * 11.0) + time * 18.0) * 0.025;

  /* Per-frame random micro-jitter — live energy field instability */
  const randomJitter = (Math.random() - 0.5) * 0.02;

  return (wave1 + wave2 + wave3 + n1 + n2 + n3 + jitter + randomJitter) * 0.45;
}

/* ─── Wireframe terrain — erratic energy field ────────── */
function CloakMesh() {
  const meshRef = useRef();
  const geoRef = useRef();

  const originalPositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(18, 18, 80, 80);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  useFrame(({ clock }) => {
    if (!geoRef.current || !meshRef.current) return;

    const time = clock.getElapsedTime();
    const positions = geoRef.current.attributes.position.array;
    const count = positions.length / 3;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      positions[iz] = displace(originalPositions[ix], originalPositions[iy], time);
    }

    geoRef.current.attributes.position.needsUpdate = true;
    geoRef.current.computeVertexNormals();

    meshRef.current.rotation.z = 0.2 + time * 0.015;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.6, 0, 0.2]} position={[0, -0.8, 0]}>
      <planeGeometry ref={geoRef} args={[18, 18, 80, 80]} />
      <meshStandardMaterial
        color="#060d14"
        emissive="#7bafd4"
        emissiveIntensity={0.7}
        wireframe
        transparent
        opacity={0.3}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

/* ─── Vertex point cloud — bright star nodes ──────────── */
function VertexPoints() {
  const ref = useRef();

  const originalPositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(18, 18, 80, 80);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  const count = originalPositions.length / 3;

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const time = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      pos[iz] = displace(originalPositions[ix], originalPositions[iy], time);
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.z = 0.2 + time * 0.015;
  });

  return (
    <points ref={ref} rotation={[-Math.PI / 2.6, 0, 0.2]} position={[0, -0.8, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(originalPositions)}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#e8f4ff"
        size={0.10}
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Ambient atmospheric particles ───────────────────── */
function AtmosphericParticles() {
  const ref = useRef();
  const count = 90;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const time = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(time * 0.2 + i * 0.7) * 0.002;
      pos[i * 3 + 2] += Math.cos(time * 0.15 + i * 0.4) * 0.001;
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
        size={0.03}
        transparent
        opacity={0.25}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Dynamic data heartbeat hook ─────────────────────── */
function useDynamicData() {
  const [latency, setLatency] = useState("12ms");
  const [scanId, setScanId] = useState("0x7B");

  useEffect(() => {
    const interval = setInterval(() => {
      /* Latency: fluctuate between 8–18ms */
      const ms = 8 + Math.floor(Math.random() * 11);
      setLatency(`${ms}ms`);

      /* Scan ID: random hex suffix */
      const hex = Math.floor(Math.random() * 255)
        .toString(16)
        .toUpperCase()
        .padStart(2, "0");
      setScanId(`0x${hex}`);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return { latency, scanId };
}

/* ─── Main export: Atmospheric Hardware hologram ─────── */
export default function InvisibilityHologram() {
  const { latency, scanId } = useDynamicData();

  return (
    <div className={styles.hud}>
      {/* Corner bracket helpers (bottom) */}
      <span className={styles.bracketBL} />
      <span className={styles.bracketBR} />

      {/* Horizontal accent bars */}
      <div className={styles.hudHeader} />
      <div className={styles.hudFooter} />

      {/* Atmospheric haze — sits behind canvas */}
      <div className={styles.glow} />

      {/* Canvas wrapper — clips the 3D scene + applies glow filter */}
      <div className={styles.canvasWrap}>
        <Canvas
          camera={{ position: [0, 6, 14], fov: 60 }}
          className={styles.canvas}
          gl={{
            alpha: true,
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.3,
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.12} />
          <pointLight position={[0, 6, 8]} intensity={0.4} color="#7bafd4" />
          <pointLight position={[-5, 3, 2]} intensity={0.15} color="#5a8fb4" />

          <CloakMesh />
          <VertexPoints />
          <AtmosphericParticles />
          <BloomEffect />
        </Canvas>
      </div>

      {/* CRT scanline overlay */}
      <div className={styles.scanlines} />

      {/* Chromatic aberration overlay */}
      <div className={styles.chromatic} />

      {/* Vertical scan bar */}
      <div className={styles.scanBar} />

      {/* Data labels — highest z-index overlay */}
      <div className={styles.labelOverlay}>
        <span className={`${styles.label} ${styles.labelTL}`}>
          <span className={styles.statusDot} />
          CLOAK_STATUS: ACTIVE
        </span>
        <span className={`${styles.label} ${styles.labelTR}`}>
          NODE_MAP: 3-PACK
        </span>
        <span className={`${styles.label} ${styles.labelBL}`}>
          LATENCY: {latency}
        </span>
        <span className={`${styles.label} ${styles.labelBR}`}>
          SCAN_ID: {scanId}
        </span>
      </div>
    </div>
  );
}
