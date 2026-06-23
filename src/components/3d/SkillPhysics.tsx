"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, useSphere, usePlane } from '@react-three/cannon';
import { OrbitControls, Environment, Html } from '@react-three/drei';

function SkillBall({ skill, color, position }: { skill: string, color: string, position: [number, number, number] }) {
  const [ref, api] = useSphere(() => ({ 
    mass: 1, 
    position, 
    args: [0.6],
    restitution: 0.9,
    friction: 0.1
  }));

  const handleClick = (e: any) => {
    e.stopPropagation();
    api.applyImpulse([Math.random() * 4 - 2, 8, Math.random() * 4 - 2], [0, 0, 0]);
  };

  return (
    <mesh ref={ref as any} onClick={handleClick}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshPhysicalMaterial 
        color={color} 
        transmission={0.8}
        opacity={1}
        metalness={0.1}
        roughness={0.2}
        ior={1.5}
        thickness={0.5}
      />
      <Html distanceFactor={15} center position={[0, -0.9, 0]} style={{ pointerEvents: 'none' }}>
        <div 
          className="px-2 py-1 rounded-full text-sm font-bold whitespace-nowrap"
          style={{ 
            color: '#fff',
            textShadow: `0 0 10px ${color}, 0 0 20px ${color}`
          }}
        >
          {skill}
        </div>
      </Html>
    </mesh>
  );
}

function Borders() {
  // Floor
  usePlane(() => ({ position: [0, -3, 0], rotation: [-Math.PI / 2, 0, 0], restitution: 0.5 }));
  // Invisible Walls to keep balls inside the view
  usePlane(() => ({ position: [0, 0, -4], rotation: [0, 0, 0] }));
  usePlane(() => ({ position: [0, 0, 4], rotation: [0, Math.PI, 0] }));
  usePlane(() => ({ position: [-4, 0, 0], rotation: [0, Math.PI / 2, 0] }));
  usePlane(() => ({ position: [4, 0, 0], rotation: [0, -Math.PI / 2, 0] }));
  
  return null;
}

export default function SkillPhysics() {
  const skillCategories = [
    {
      title: "Core Skills",
      skills: ["Java", "Python", "C", "SQL", "PHP", "TypeScript"],
      color: "#8b5cf6" 
    },
    {
      title: "AI / ML",
      skills: ["TensorFlow", "OpenCV", "NLP", "LLMs", "GenAI", "Scikit-learn"],
      color: "#3b82f6" 
    },
    {
      title: "Frameworks",
      skills: ["Flutter", "Next.js", "FastAPI", "React"],
      color: "#ec4899" 
    },
    {
      title: "Databases & Tools",
      skills: ["Salesforce", "Docker", "MySQL", "MongoDB", "Oracle", "PostgreSQL"],
      color: "#10b981" 
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills.map(skill => ({ skill, color: cat.color })));

  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing relative">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <Physics gravity={[0, -9.8, 0]}>
          <Borders />
          {allSkills.map((s, i) => (
            <SkillBall 
              key={i} 
              skill={s.skill} 
              color={s.color} 
              position={[(Math.random() - 0.5) * 4, 5 + i * 1.5, (Math.random() - 0.5) * 4]} 
            />
          ))}
        </Physics>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md pointer-events-none">
        Drag to rotate. Click balls to make them bounce!
      </div>
    </div>
  );
}
