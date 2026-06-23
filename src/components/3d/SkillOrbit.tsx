"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "SQL", "PHP"],
    color: "#3b82f6", // Blue
    radius: 2,
    speed: 0.5
  },
  {
    title: "AI / ML",
    skills: ["ML Algorithms", "Generative AI", "NLP", "Computer Vision", "LLMs", "OpenCV", "Face Recognition", "Speech Processing"],
    color: "#8b5cf6", // Purple
    radius: 3.5,
    speed: -0.3
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "Streamlit", "Drupal CMS"],
    color: "#ec4899", // Pink
    radius: 5,
    speed: 0.2
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "Oracle", "PostgreSQL", "Git", "VS Code", "Android Studio", "XAMPP", "phpMyAdmin", "WebSockets", "LATEX"],
    color: "#10b981", // Emerald
    radius: 6.5,
    speed: -0.15
  }
];

function OrbitRing({ radius, color, speed, category, skills }: any) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <group ref={groupRef}>
      {/* The visible ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      {/* The HTML tags for skills */}
      {skills.map((skill: string, index: number) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group key={index} position={[x, 0, z]}>
            <mesh>
              <sphereGeometry args={[0.35, 32, 32]} />
              <meshPhysicalMaterial 
                color={color} 
                transmission={0.8}
                opacity={1}
                metalness={0.1}
                roughness={0.2}
                ior={1.5}
                thickness={0.5}
              />
            </mesh>
            <Html distanceFactor={15} center position={[0, -0.6, 0]}>
              <div 
                className="px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                style={{ 
                  color: '#fff',
                  textShadow: `0 0 10px ${color}, 0 0 20px ${color}`
                }}
              >
                {skill}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function SkillOrbit() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 6, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Center core */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color="#050511" 
            emissive="#8b5cf6" 
            emissiveIntensity={0.5} 
            wireframe 
          />
          <Html center distanceFactor={10}>
            <div className="font-bold text-white text-lg drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
              Core Skills
            </div>
          </Html>
        </mesh>

        {/* Orbit Rings */}
        {skillCategories.map((cat, i) => (
          <OrbitRing key={i} {...cat} />
        ))}

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.5}
        />
      </Canvas>
    </div>
  );
}
