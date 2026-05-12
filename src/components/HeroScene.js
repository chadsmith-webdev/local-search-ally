"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Signal Grid ────────────────────────────────────────────────────────────
// A 24×24 grid of points on the XZ plane.
// Points near the center are dimmer (dark focal zone behind hero text).
// Points near the perimeter glow Carolina blue.
// Each point oscillates slightly on Y — creates a living, breathing surface.
// Mouse parallax gently tilts the whole grid group.

function SignalGrid({ mouseRef }) {
  const groupRef = useRef();
  const pointsRef = useRef();
  const markersRef = useRef();

  const COLS = 24;
  const ROWS = 24;
  const SPREAD_X = 24;
  const SPREAD_Z = 20;
  const total = COLS * ROWS;

  // Carolina blue and a very dark near-black for center
  const CAROLINA = new THREE.Color("#7bafd4");
  const DARK = new THREE.Color("#0d1a24");

  const { geometry, phases } = useMemo(() => {
    const positions = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);
    const phases = new Float32Array(total);

    let idx = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c / (COLS - 1) - 0.5) * SPREAD_X;
        const z = (r / (ROWS - 1) - 0.5) * SPREAD_Z;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;

        // Normalized distance from center [0..~1.4]
        const nx = (c / (COLS - 1) - 0.5) * 2;
        const nz = (r / (ROWS - 1) - 0.5) * 2;
        const d = Math.sqrt(nx * nx + nz * nz);

        // Lerp from dark (center) → carolina (edge). Center stays dim.
        // Push the blend outward so the text zone stays dark.
        const t = Math.pow(Math.min(1, Math.max(0, (d - 0.25) / 0.9)), 1.4);
        const mixed = DARK.clone().lerp(CAROLINA, t);
        colors[idx * 3] = mixed.r;
        colors[idx * 3 + 1] = mixed.g;
        colors[idx * 3 + 2] = mixed.b;

        phases[idx] = Math.random() * Math.PI * 2;
        idx++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return { geometry: geo, phases };
  }, []);

  // A handful of location-marker hotspots — brighter, larger points
  const markerGeometry = useMemo(() => {
    const spots = [
      [-5, 0, -4],
      [4, 0, 3],
      [-2, 0, 6],
      [7, 0, -2],
      [-8, 0, 1],
      [1, 0, -7],
    ];
    const pos = new Float32Array(spots.length * 3);
    const col = new Float32Array(spots.length * 3);
    spots.forEach(([x, y, z], i) => {
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      // Pure white-ish carolina for markers
      col[i * 3] = 0.8;
      col[i * 3 + 1] = 0.92;
      col[i * 3 + 2] = 1.0;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    // Mouse parallax — gentle tilt of the whole group
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -0.28 + my * 0.07,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mx * 0.09,
        0.05
      );
    }

    // Animate grid point Y positions (gentle wave)
    if (pointsRef.current) {
      const posAttr =
        pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < total; i++) {
        posAttr.array[i * 3 + 1] =
          Math.sin(t * 0.35 + phases[i]) * 0.22;
      }
      posAttr.needsUpdate = true;
    }

    // Pulse marker brightness via scale
    if (markersRef.current) {
      const pulse = 1 + Math.sin(t * 1.2) * 0.15;
      markersRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main signal grid */}
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={2.5}
          sizeAttenuation={false}
          vertexColors
          transparent
          opacity={0.9}
        />
      </points>

      {/* Location marker hotspots */}
      <points ref={markersRef} geometry={markerGeometry}>
        <pointsMaterial
          size={5}
          sizeAttenuation={false}
          vertexColors
          transparent
          opacity={0.95}
        />
      </points>
    </group>
  );
}

// ─── Scene wrapper ───────────────────────────────────────────────────────────
function Scene({ mouseRef }) {
  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />
      {/* Subtle ambient fog to fade distant grid edges */}
      <fog attach="fog" args={["#0a0a0a", 18, 34]} />
      <SignalGrid mouseRef={mouseRef} />
    </>
  );
}

// ─── HeroScene ───────────────────────────────────────────────────────────────
// Exported component — drop this into the hero section.
// Tracks mouse on the wrapper div, feeds it to the grid via ref.

export default function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      // Normalize to [-1, 1]
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onLeave = () => {
      // Drift back to center when mouse leaves
      mouseRef.current = { x: 0, y: 0 };
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 9, 14], fov: 55, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <Scene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
