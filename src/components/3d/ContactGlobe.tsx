"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={mesh} args={[1, 64, 64]} scale={1.8}>
      <MeshDistortMaterial 
        color="#8b5cf6" 
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2} 
        metalness={0.8}
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

export default function ContactGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
