"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const SkillOrbit = dynamic(() => import('../3d/SkillOrbit'), { ssr: false, loading: () => <div className="min-h-[500px] flex items-center justify-center text-purple-400">Loading 3D Engine...</div> });

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills <span className="text-gradient">Universe</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Interact with the holographic orbit to explore my technical stack across various domains.
          </p>
        </motion.div>
        
        <div className="mt-16 w-full max-w-5xl mx-auto h-[600px] rounded-3xl overflow-hidden glass-panel border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.15)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
}
