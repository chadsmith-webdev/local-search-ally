"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// R3F v9 uses THREE.Clock internally; Three.js r175+ deprecated it in favor of THREE.Timer.
// Suppress until R3F v10 (currently alpha) ships a stable fix.
if (typeof window !== "undefined") {
  const _warn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
    _warn.apply(console, args);
  };
}
import { Sphere, MeshDistortMaterial, Points, PointMaterial, Torus } from "@react-three/drei";

// Module-level ref — readable inside useFrame without causing re-renders
const scrollProgress = { current: 0 };

// ─── DIAGNOSTIC CORE ────────────────────────────────────────────────────────

function DiagnosticCore() {
  const groupRef   = useRef();
  const ring1Ref   = useRef();
  const ring2Ref   = useRef();
  const ring3Ref   = useRef();
  const nucleusRef = useRef();
  const elapsed    = useRef(0);

  useFrame((state, delta) => {
    elapsed.current += delta;
    const time   = elapsed.current;
    const scroll = scrollProgress.current; // 0 = top, 1 = 1 viewport scrolled

    // ── 1. Camera fly-in (first 2s, ease-out cubic) ─────────────────────────
    const loadT = Math.min(time / 2, 1);
    const eased = 1 - Math.pow(1 - loadT, 3);
    state.camera.position.z = 60 - 35 * eased; // 60 → 25

    // ── 2. Scroll-driven rotation & drift ────────────────────────────────────
    groupRef.current.position.y = Math.sin(time * 0.5) * 2 - scroll * 4;
    groupRef.current.rotation.y = time * 0.1 + scroll * 1.8;
    groupRef.current.rotation.x = scroll * 0.25;
    const s = Math.max(0.35, 1 - scroll * 0.25);
    groupRef.current.scale.setScalar(s);

    // ── Rings ────────────────────────────────────────────────────────────────
    ring1Ref.current.rotation.z =  time * 0.4;
    ring1Ref.current.rotation.x =  time * 0.2;
    ring2Ref.current.rotation.z = -time * 0.3;
    ring2Ref.current.rotation.y =  time * 0.5;
    ring3Ref.current.rotation.x = -time * 0.6;
    ring3Ref.current.rotation.z =  time * 0.2;

    // ── Nucleus pulse ────────────────────────────────────────────────────────
    const pulse = 1 + Math.sin(time * 2) * 0.05;
    nucleusRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <group ref={groupRef} position={[12, 0, -5]}>
      {/* Outer Data Ring */}
      <Torus ref={ring1Ref} args={[8, 0.02, 16, 100]}>
        <meshBasicMaterial color="#7bafd4" transparent opacity={0.2} />
      </Torus>

      {/* Middle Structural Ring */}
      <Torus ref={ring2Ref} args={[6, 0.04, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <meshBasicMaterial color="#7bafd4" transparent opacity={0.4} />
      </Torus>

      {/* Inner Logic Ring */}
      <Torus ref={ring3Ref} args={[4.5, 0.03, 16, 100]} rotation={[0, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#4A6B8A" transparent opacity={0.6} />
      </Torus>

      {/* Nucleus */}
      <Sphere ref={nucleusRef} args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#7bafd4"
          speed={4}
          distort={0.3}
          radius={1}
          opacity={0.15}
          transparent
          wireframe
        />
      </Sphere>

      <OrbitalPoints />
    </group>
  );
}

// ─── ORBITAL POINTS ──────────────────────────────────────────────────────────

function OrbitalPoints() {
  const pointsRef = useRef();
  const elapsed   = useRef(0);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 10 + Math.random() * 2;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    elapsed.current += delta;
    pointsRef.current.rotation.y = elapsed.current * 0.05;
    pointsRef.current.rotation.x = elapsed.current * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7bafd4"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// ─── BACKGROUND GRID ─────────────────────────────────────────────────────────

function BackgroundGrid() {
  return (
    <gridHelper
      args={[100, 30, "#7bafd4", "#1a1a1a"]}
      position={[0, -10, 0]}
    />
  );
}

// ─── CANVAS WRAPPER ──────────────────────────────────────────────────────────

export default function ThreeCanvas() {
  const wrapperRef = useRef();

  useEffect(() => {
    // ── 3. Scroll-driven opacity fade-out ────────────────────────────────────
    const onScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      scrollProgress.current = progress;

      if (wrapperRef.current) {
        // Canvas fades from 0.6 → 0 between 0–80% of first viewport
        const opacity = Math.max(0, 0.6 - progress * 0.75);
        wrapperRef.current.style.opacity = String(opacity);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ opacity: 0.6, transition: "opacity 0.15s linear" }}
      className="fixed inset-0 pointer-events-none z-[-1]"
    >
      <Canvas
        camera={{ position: [0, 2, 60], fov: 45 }} // z:60 → z:25 via fly-in
        dpr={[1, 1.5]}                              // performance cap
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]}   intensity={1.5} color="#7bafd4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4A6B8A" />

        <group position={[6, 0, 0]}>
          <DiagnosticCore />
        </group>

        <BackgroundGrid />
        <fog attach="fog" args={["#020203", 5, 45]} />
      </Canvas>
    </div>
  );
}
