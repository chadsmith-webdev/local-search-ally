"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import styles from "./InvisibilityHologram.module.css";

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
      0.8,   // strength — visible halo around wireframe
      0.9,   // radius — wide atmospheric spread
      0.25   // threshold — catch emissive wireframe + points
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

/* ─── Wireframe terrain — vast topographic landscape ──── */
function CloakMesh() {
  const meshRef = useRef();
  const geoRef = useRef();

  /* Cache original positions for wave displacement */
  const originalPositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(18, 18, 80, 80);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  useFrame(({ clock }) => {
    if (!geoRef.current || !meshRef.current) return;

    const time = clock.getElapsedTime();
    const positions = geoRef.current.attributes.position.array;
    const count = positions.length / 3;

    /* Multi-frequency noise displacement for breathing terrain */
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const origX = originalPositions[ix];
      const origY = originalPositions[iy];

      const wave1 = Math.sin(origX * 0.5 + time * 0.4) * 0.6;
      const wave2 = Math.sin(origY * 0.6 + time * 0.3) * 0.5;
      const wave3 = Math.sin((origX + origY) * 0.35 + time * 0.55) * 0.4;
      const wave4 = Math.sin(origX * 1.0 + origY * 0.8 + time * 0.9) * 0.2;
      const wave5 = Math.cos(origX * 1.8 - origY * 1.2 + time * 0.7) * 0.12;

      positions[iz] = (wave1 + wave2 + wave3 + wave4 + wave5) * 0.5;
    }

    geoRef.current.attributes.position.needsUpdate = true;
    geoRef.current.computeVertexNormals();

    /* Very slow Y rotation — breathing data field */
    meshRef.current.rotation.z = 0.2 + time * 0.015;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.6, 0, 0.2]} position={[0, -0.8, 0]}>
      <planeGeometry ref={geoRef} args={[18, 18, 80, 80]} />
      <meshStandardMaterial
        color="#0a1520"
        emissive="#7bafd4"
        emissiveIntensity={1.4}
        wireframe
        transparent
        opacity={0.4}
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
}

/* ─── Vertex point cloud — glowing data nodes ─────────── */
function VertexPoints() {
  const ref = useRef();
  const meshGeoRef = useRef();

  /* Generate matching grid positions for vertex dots */
  const positions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(18, 18, 80, 80);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  const count = positions.length / 3;

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const time = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array;

    /* Sync displacement with CloakMesh */
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const origX = positions[ix];
      const origY = positions[iy];

      const wave1 = Math.sin(origX * 0.5 + time * 0.4) * 0.6;
      const wave2 = Math.sin(origY * 0.6 + time * 0.3) * 0.5;
      const wave3 = Math.sin((origX + origY) * 0.35 + time * 0.55) * 0.4;
      const wave4 = Math.sin(origX * 1.0 + origY * 0.8 + time * 0.9) * 0.2;
      const wave5 = Math.cos(origX * 1.8 - origY * 1.2 + time * 0.7) * 0.12;

      pos[iz] = (wave1 + wave2 + wave3 + wave4 + wave5) * 0.5;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    /* Match CloakMesh rotation */
    ref.current.rotation.z = 0.2 + time * 0.015;
  });

  return (
    <points ref={ref} rotation={[-Math.PI / 2.6, 0, 0.2]} position={[0, -0.8, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(positions)}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7bafd4"
        size={0.06}
        transparent
        opacity={0.9}
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

/* ─── Main export: cinematic HUD-wrapped hologram ─────── */
export default function InvisibilityHologram() {
  return (
    <div className={styles.hud}>
      {/* Corner bracket helpers (bottom) */}
      <span className={styles.bracketBL} />
      <span className={styles.bracketBR} />

      {/* Horizontal accent bars */}
      <div className={styles.hudHeader} />
      <div className={styles.hudFooter} />

      {/* Atmospheric haze — pool of light */}
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

      {/* 3D Canvas — fills entire HUD container */}
      <Canvas
        camera={{ position: [0, 5, 9], fov: 75 }}
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
  );
}
