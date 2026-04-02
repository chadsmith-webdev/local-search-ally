 "use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial, Torus, Line } from "@react-three/drei";
import * as THREE from "three";

function DiagnosticCore() {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const nucleusRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Group floating motion
    groupRef.current.position.y = Math.sin(time * 0.5) * 2;
    groupRef.current.rotation.y = time * 0.1;

    // Rings rotation
    ring1Ref.current.rotation.z = time * 0.4;
    ring1Ref.current.rotation.x = time * 0.2;
    
    ring2Ref.current.rotation.z = -time * 0.3;
    ring2Ref.current.rotation.y = time * 0.5;
    
    ring3Ref.current.rotation.x = -time * 0.6;
    ring3Ref.current.rotation.z = time * 0.2;

    // Pulse the nucleus scale
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

      {/* The Nucleus */}
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

      {/* Orbital Data Cloud */}
      <OrbitalPoints />
    </group>
  );
}

function OrbitalPoints() {
  const pointsRef = useRef();
  const count = 200;
  
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 10 + Math.random() * 2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7bafd4"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function BackgroundGrid() {
  return (
    <gridHelper 
      args={[100, 30, "#7bafd4", "#1a1a1a"]} 
      position={[0, -10, 0]} 
      rotation={[0, 0, 0]}
      transparent
      opacity={0.1}
    />
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-60">
      <Canvas camera={{ position: [0, 2, 25], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#7bafd4" />
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
