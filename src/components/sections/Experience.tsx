"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, Server, Database, Code } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "IT Intern (ERP)",
    company: "SHARP India",
    location: "Gurgaon, On-site",
    date: "Ongoing",
    description: [
      "Interning with SHARP India, a Japan-headquartered multinational, gaining hands-on exposure to enterprise systems and ERP processes",
      "Building SITMS (SHARP India Ticket Management System) while learning ERP workflows and enterprise IT operations"
    ],
    tech: ["ERP", "Enterprise IT", "System Arch"],
    icon: <Server className="text-blue-400" />
  },
  {
    id: 2,
    role: "Salesforce Trainee",
    company: "PwC India",
    location: "Remote/Hybrid",
    date: "Feb 2026 – Jun 2026",
    description: [
      "Ongoing Training in Salesforce CRM and Apex; working with Java, Generative AI, PostgreSQL, MongoDB",
      "Analyzing business workflows, backend systems, and AI-driven automation in consulting environments"
    ],
    tech: ["Salesforce CRM", "Apex", "Java", "GenAI", "PostgreSQL"],
    icon: <Database className="text-purple-400" />
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Infidelta Technologies Pvt. Ltd.",
    location: "Remote",
    date: "May 2025 – Jul 2025",
    description: [
      "Developed and customized Drupal CMS modules using PHP for content management and workflow automation",
      "Improved backend architecture and explored Generative AI/GAN concepts in enterprise applications"
    ],
    tech: ["Drupal CMS", "PHP", "GenAI/GAN", "Backend Arch"],
    icon: <Code className="text-green-400" />
  },
  {
    id: 4,
    role: "Capstone Project Finalist",
    company: "Deloitte",
    location: "Top 10 Teams",
    date: "2025",
    description: [
      "Built AI-powered healthcare solution for Alzheimer's patients focusing on safety and assistance",
      "Presented to Deloitte experts; recognized for innovation and real-world impact"
    ],
    tech: ["AI/ML", "Flutter", "FastAPI", "Healthcare Tech"],
    icon: <Briefcase className="text-yellow-400" />
  }
];

export default function Experience() {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-24 relative bg-[#0a0a1a]/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Timeline Selector */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {experiences.map((exp) => (
              <motion.button
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: exp.id * 0.1 }}
                onClick={() => setActiveId(exp.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  activeId === exp.id 
                    ? 'glass-panel border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">{exp.date}</span>
                  {activeId === exp.id && <ChevronRight size={16} className="text-purple-400" />}
                </div>
                <h3 className={`text-lg font-bold ${activeId === exp.id ? 'text-white' : 'text-gray-300'}`}>
                  {exp.company}
                </h3>
                <div className="text-sm text-gray-400 mt-1">{exp.role}</div>
              </motion.button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              {experiences.map((exp) => (
                exp.id === activeId && (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel p-8 md:p-10 rounded-2xl h-full border border-purple-500/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                          <div className="text-lg text-purple-400">{exp.company}</div>
                        </div>
                      </div>
                      <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap self-start md:self-auto">
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                      {exp.tech.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-medium text-purple-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
