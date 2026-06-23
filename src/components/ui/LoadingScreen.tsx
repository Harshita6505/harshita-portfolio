"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const fullText = "Initializing...\nLoading Harshita's Portfolio\nAccess Granted.";

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = false;

    // Start typing after laptop opens (1.5s delay)
    const startDelay = setTimeout(() => {
      isTyping = true;
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsLoading(false), 1200); // hold for a moment before revealing
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }, 1500);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#02020a] font-mono"
          style={{ perspective: 1200 }}
        >
          {/* 3D Animated Laptop */}
          <div className="relative flex flex-col items-center transform-gpu -translate-y-12">
            
            {/* Laptop Screen (Hinged at bottom) */}
            <motion.div
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
              style={{ transformOrigin: "bottom" }}
              className="w-80 h-52 bg-black border-[6px] border-gray-800 rounded-t-2xl relative shadow-2xl flex items-center justify-center z-10"
            >
              {/* Screen Glow */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-t-xl pointer-events-none shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]"></div>
              
              {/* Terminal Output */}
              <div className="absolute inset-0 p-4 overflow-hidden flex flex-col justify-end pb-6">
                <div className="text-green-400 text-sm whitespace-pre-line text-left leading-relaxed">
                  {text}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle"
                  ></motion.span>
                </div>
              </div>
            </motion.div>
            
            {/* Laptop Base (Keyboard area) */}
            <motion.div 
              initial={{ y: -50, opacity: 0, rotateX: 60 }}
              animate={{ y: 0, opacity: 1, rotateX: 45 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "top" }}
              className="w-[22rem] h-32 bg-gray-800 rounded-b-xl relative z-0 flex flex-col items-center pt-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-gray-600"
            >
              {/* Keyboard Grid Effect */}
              <div className="w-11/12 h-16 bg-gray-900 rounded bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:8px_8px] border border-gray-700 opacity-50"></div>
              {/* Trackpad */}
              <div className="w-16 h-10 bg-gray-700 rounded-md mt-2 border border-gray-600 shadow-inner"></div>
            </motion.div>
          </div>
          
          {/* Animated "Typing..." Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-20 flex items-center gap-2 text-purple-400 font-medium tracking-widest text-sm"
          >
            <span>SYSTEM BOOTING</span>
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>...</motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
