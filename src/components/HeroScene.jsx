"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function LocationPin() {
  const glowRef = useRef();

  useFrame((state) => {
    if (glowRef.current) {
      const t = state.clock.elapsedTime;
      glowRef.current.material.opacity = 0.12 + Math.sin(t * 1.5) * 0.06;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
      <group>
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.9, 16, 16]} />
          <meshStandardMaterial color='#7bafd4' transparent opacity={0.12} />
        </mesh>

        {/* Main ball */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color='#7bafd4'
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>

        {/* Specular highlight */}
        <mesh position={[-0.18, 0.18, 0.38]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color='#ffffff'
            transparent
            opacity={0.55}
            roughness={0}
          />
        </mesh>

        {/* Needle / pin bottom */}
        <mesh position={[0, -1.1, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.16, 0.9, 8]} />
          <meshStandardMaterial
            color='#ffffff'
            transparent
            opacity={0.65}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

function PulseRing() {
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringRef.current) {
      const s = 1 + Math.sin(t * 1.3) * 0.18;
      ringRef.current.scale.set(s, s, s);
      ringRef.current.material.opacity = 0.28 - Math.sin(t * 1.3) * 0.14;
    }
  });

  return (
    <mesh
      ref={ringRef}
      position={[0, -1.58, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <ringGeometry args={[0.45, 0.62, 48]} />
      <meshBasicMaterial
        color='#7bafd4'
        transparent
        opacity={0.28}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Particles() {
  const mesh = useRef();
  const count = 80;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.018;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color='#7bafd4'
        size={0.045}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 5], fov: 42 }}
      style={{ background: "transparent", pointerEvents: "none" }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={0.7} />
      <pointLight position={[-2, 2, 3]} intensity={2.5} color='#7bafd4' />
      <pointLight position={[3, -2, 2]} intensity={0.8} color='#3a5570' />
      <LocationPin />
      <Particles />
      <PulseRing />
    </Canvas>
  );
}
