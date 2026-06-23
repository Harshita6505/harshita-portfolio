"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 4000 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Wider distribution for global background
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 20 - 5;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      const isPurple = Math.random() > 0.5;
      color.setHex(isPurple ? 0x8b5cf6 : 0x3b82f6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      // Subtle camera-like movement based on time
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      // Parallax scroll effect could be added here
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        vertexColors 
        transparent 
        opacity={0.6} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={['#02020a']} />
        <fog attach="fog" args={['#02020a', 5, 30]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Particles count={5000} />
        
        {/* Floating Background Geometries */}
        <Float speed={1} rotationIntensity={1} floatIntensity={1} position={[-8, 4, -10]}>
          <Icosahedron args={[1.5, 0]}>
            <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.15} />
          </Icosahedron>
        </Float>

        <Float speed={0.8} rotationIntensity={1.5} floatIntensity={1} position={[8, -5, -15]}>
          <TorusKnot args={[2, 0.2, 100, 16]}>
            <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
          </TorusKnot>
        </Float>
      </Canvas>
    </div>
  );
}
