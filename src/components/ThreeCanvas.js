 "use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function SearchGrid() {
  const pointsRef = useRef();
  
  // Create a grid of points
  const count = 40;
  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    const ph = new Float32Array(count * count);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const u = i / count;
        const v = j / count;
        const x = (u - 0.5) * 60;
        const z = (v - 0.5) * 60;
        const y = 0;
        const idx = (i * count + j) * 3;
        pos[idx] = x;
        pos[idx + 1] = y;
        pos[idx + 2] = z;
        ph[i * count + j] = Math.random() * Math.PI * 2;
      }
    }
    return [pos, ph];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const array = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const idx = (i * count + j) * 3;
        const phase = phases[i * count + j];
        // Create a waving terrain effect
        const dist = Math.sqrt(Math.pow(positions[idx], 2) + Math.pow(positions[idx + 2], 2));
        array[idx + 1] = Math.sin(dist * 0.2 - time * 0.5 + phase) * 0.5;
        
        // Add mouse influence
        const mx = (state.mouse.x * 30);
        const mz = (-state.mouse.y * 30);
        const mouseDist = Math.sqrt(Math.pow(positions[idx] - mx, 2) + Math.pow(positions[idx + 2] - mz, 2));
        if (mouseDist < 10) {
           array[idx + 1] += (10 - mouseDist) * 0.5;
        }
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#7bafd4"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingCore() {
  const meshRef = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[15, 5, -10]}>
        <sphereGeometry args={[4, 64, 64]} />
        <MeshDistortMaterial
          color="#7bafd4"
          speed={3}
          distort={0.4}
          radius={1}
          opacity={0.1}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-60">
      <Canvas camera={{ position: [0, 15, 30], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7bafd4" />
        <SearchGrid />
        <FloatingCore />
        <fog attach="fog" args={["#020203", 20, 60]} />
      </Canvas>
    </div>
  );
}
