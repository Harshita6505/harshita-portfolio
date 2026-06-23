"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlowingBase from '../ui/GlowingBase';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

export default function About() {
  const education = [
    {
      year: "2023 - 2027",
      degree: "B.Tech CSE",
      institution: "Manipal University Jaipur",
      details: "CGPA: 9.08/10",
      icon: <GraduationCap size={16} className="text-purple-400" />
    },
    {
      year: "2021 - 2023",
      degree: "Class XII (ISC)",
      institution: "Score: 90.4%",
      details: "",
      icon: <BookOpen size={16} className="text-blue-400" />
    },
    {
      year: "2019 - 2021",
      degree: "Class X (ICSE)",
      institution: "Score: 90.8%",
      details: "",
      icon: <BookOpen size={16} className="text-blue-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and Education */}
          {/* Left Column: Text and Education */}
          <div className="space-y-12">
            <TiltCard>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="text-purple-400" /> My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I am a passionate Computer Science Engineering student with a strong foundation in Full Stack Development, AI, and Enterprise ERP systems. 
                  Currently, I am expanding my expertise in Salesforce CRM, aiming to build scalable, intelligent solutions that bridge the gap between complex backend systems and user-friendly interfaces.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-white mb-1">9.08</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">CGPA</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-white mb-1">4×</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Dean's List</div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8"
              >
                <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-blue-500">Education</h3>
                <div className="relative border-l border-purple-500/30 ml-4 space-y-8">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#050511] border border-purple-500 flex items-center justify-center z-10">
                        {item.icon}
                      </div>
                      <div className="text-sm text-purple-400 font-medium mb-1">{item.year}</div>
                      <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                      <div className="text-gray-400">{item.institution}</div>
                      {item.details && <div className="text-gray-500 text-sm mt-1">{item.details}</div>}
                    </div>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          </div>

          {/* Right Column: Avatar on Glowing Base */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center relative h-full pt-10 mt-10 md:mt-0"
          >
            <TiltCard>
              <div className="group relative z-10 w-full max-w-[320px] aspect-[4/5] md:h-[500px] md:w-80 overflow-hidden rounded-[40px] border border-white/10 bg-[#050511]/50 backdrop-blur-sm shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              <Image 
                src="/avatar-new.png" 
                alt="My Avatar" 
                fill 
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-[center_20%] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-[1.15] group-hover:scale-[1.25] group-hover:rotate-6 transition-all duration-700 ease-in-out"
                priority
              />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
