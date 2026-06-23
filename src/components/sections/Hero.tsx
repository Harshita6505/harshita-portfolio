"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import AnimatedRoles from '../ui/AnimatedRoles';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background is now handled globally */}
      
      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full glass-panel text-sm font-medium text-purple-300 mb-2 border-purple-500/30">
              AI Engineer & Full Stack Developer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Hi, I'm <br />
              <span className="text-gradient">Harshita Grover</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl h-20 mx-auto">
              Building intelligent systems that solve real-world problems. <br/>
              Passionate about <AnimatedRoles />
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                View Projects <ArrowRight size={18} />
              </a>
              
              <a href="/resume.pdf" download="Harshita_Grover_Resume.pdf" className="px-6 py-3 rounded-full glass-panel hover:bg-white/5 text-white font-medium transition-all flex items-center gap-2">
                Download Resume <Download size={18} />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-6">
              <a href="https://github.com/Harshita6505" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/harshita-grover6505/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] hover:scale-110 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:harshitag1262@gmail.com" className="text-gray-400 hover:text-red-400 hover:scale-110 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-20"></div>
    </section>
  );
}
