"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 3000 }) {
  const mesh = useRef<THREE.Points>(null);
  
  // Generate random positions and colors for particles
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const r = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Mix purple and blue
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
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        vertexColors 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#050511']} />
        <fog attach="fog" args={['#050511', 5, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Particles count={4000} />
        
        {/* Floating 3D Geometries */}
        <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[-3.5, 1.5, -2]}>
          <Icosahedron args={[0.6, 0]}>
            <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.6} />
          </Icosahedron>
        </Float>

        <Float speed={1.5} rotationIntensity={3} floatIntensity={2} position={[3.5, -1.5, -3]}>
          <TorusKnot args={[0.4, 0.1, 100, 16]}>
            <meshStandardMaterial color="#3b82f6" wireframe emissive="#3b82f6" emissiveIntensity={0.6} />
          </TorusKnot>
        </Float>
      </Canvas>
      {/* Overlay gradient so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050511]/60 to-[#050511] pointer-events-none"></div>
    </div>
  );
}
