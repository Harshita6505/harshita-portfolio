"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Users, MessageSquare, Scale, Cpu } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const projects = [
  {
    title: "AI-Based Alzheimer's Assistance System",
    description: "Built a full-stack Flutter + FastAPI app with real-time WebSocket communication, ML Kit/TensorFlow Lite face recognition, and Whisper-based voice interaction for hands-free accessibility. Developed an LLM-based assistant for reminders, task guidance, and live-location caregiver communication.",
    tech: ["Flutter", "FastAPI", "Firebase", "Oracle", "WebSockets", "ML Kit", "TensorFlow Lite", "Whisper", "LLM"],
    github: "https://github.com/Harshita6505",
    demo: "#",
    icon: <Activity size={32} className="text-white" />,
    color: "from-pink-500 to-rose-600",
    badge: "Deloitte Capstone"
  },
  {
    title: "Smart Attendance System",
    description: "Built a real-time facial recognition attendance system with automated detection/logging and EAR-based liveness detection to prevent spoofing via images or videos.",
    tech: ["OpenCV", "Haar Cascade", "EAR", "Machine Learning"],
    github: "https://github.com/Harshita6505",
    demo: "#",
    icon: <Users size={32} className="text-white" />,
    color: "from-blue-500 to-cyan-600",
    badge: "Computer Vision"
  },
  {
    title: "NLP Sentiment Analysis",
    description: "Built an end-to-end NLP pipeline (preprocessing, TF-IDF, SVM/Logistic Regression/Naive Bayes); improved accuracy from 73% to 90%+ via hyperparameter tuning.",
    tech: ["Python", "NLTK", "Scikit-learn", "Gensim", "TF-IDF", "Word2Vec"],
    github: "https://github.com/Harshita6505",
    demo: "#",
    icon: <MessageSquare size={32} className="text-white" />,
    color: "from-purple-500 to-indigo-600",
    badge: "NLP Pipeline"
  },
  {
    title: "Legal Document Assistant",
    description: "Built an LLM-based legal document summarizer using DistilBART with chunking for large inputs; evaluated via ROUGE and deployed through an interactive Streamlit UI.",
    tech: ["Streamlit", "DistilBART", "NLP", "LLM"],
    github: "https://github.com/Harshita6505",
    demo: "#",
    icon: <Scale size={32} className="text-white" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Autonomous Drone Project",
    description: "Developed and programmed a drone system capable of autonomous flight and navigation. Implemented sensor integration and control algorithms for stable flight.",
    tech: ["Python", "IoT", "Sensors", "Control Systems"],
    github: "https://github.com/Harshita6505",
    demo: "#",
    icon: <Cpu size={32} className="text-white" />,
    color: "from-orange-500 to-red-600",
    badge: "Robotics & IoT"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 bg-[#050511]/80 backdrop-blur-xl">
                  <div className="h-48 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500 mix-blend-overlay z-10`}></div>
                    <div className="absolute inset-0 bg-[#0a0a1a] flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                      <div className="relative z-20 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 text-xs font-bold bg-black/50 backdrop-blur-md rounded-full text-white border border-white/20">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 shadow-inner">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code
                      </a>
                      {project.demo !== "#" && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
