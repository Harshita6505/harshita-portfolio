"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, FileText, Download, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: "4× Dean's List",
    subtitle: "Academic Excellence",
    icon: <Star className="text-purple-400 w-10 h-10" />,
    color: "from-purple-500/20 to-pink-500/5"
  },
  {
    title: "CGPA 9.08",
    subtitle: "Consistent Performer",
    icon: <Award className="text-blue-400 w-10 h-10" />,
    color: "from-blue-500/20 to-cyan-500/5"
  }
];

const certifications = [
  "Data Structures and Algorithms (NPTEL)",
  "Object Oriented Programming in Java (GeeksforGeeks)",
  "Retrieval-Augmented Generation (RAG) (IBM)",
  "AI For Everyone (DeepLearning.AI)",
  "Database Management System (Oracle)"
];

export default function AchievementsResume() {
  return (
    <section id="achievements" className="py-24 relative bg-[#0a0a1a]/50">
      <div className="container mx-auto px-6">
        {/* Achievements Grid */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Honors & <span className="text-gradient">Achievements</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border border-white/5 bg-gradient-to-b ${item.color} flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto glass-panel p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-purple-400" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-green-400 mt-1 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div id="resume" className="max-w-5xl mx-auto">
          <div className="glass-panel p-1 border border-purple-500/30 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
            
            <div className="bg-[#050511] p-8 md:p-12 rounded-[22px] flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Download My <span className="text-gradient">Resume</span></h2>
                <p className="text-gray-400 text-lg">
                  Get a comprehensive overview of my experience, projects, and technical skills in a printer-friendly format.
                </p>
                
                <a 
                  href="/resume.pdf" 
                  download="Harshita_Grover_Resume.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                >
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
              
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-transparent to-transparent z-10"></div>
                <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  {/* Visual mockup of resume instead of actual image since it's a template */}
                  <div className="bg-white p-6 h-80 overflow-hidden text-black opacity-80">
                    <div className="border-b-2 border-gray-800 pb-2 mb-4 text-center">
                      <h1 className="text-xl font-bold uppercase tracking-widest text-gray-900">Harshita Grover</h1>
                      <div className="text-[10px] text-gray-600">Gurugram, India | harshitag1262@gmail.com | LinkedIn</div>
                    </div>
                    <div className="mb-4">
                      <h2 className="font-bold text-sm border-b border-gray-400 mb-1">Education</h2>
                      <div className="flex justify-between text-[11px]">
                        <strong>Manipal University Jaipur</strong>
                        <span>2023-2027</span>
                      </div>
                      <div className="text-[10px] text-gray-700">B.Tech CSE - CGPA: 9.08/10</div>
                    </div>
                    <div>
                      <h2 className="font-bold text-sm border-b border-gray-400 mb-1">Experience</h2>
                      <div className="text-[11px] font-bold mt-1">SHARP India — IT Intern (ERP)</div>
                      <ul className="list-disc pl-4 text-[10px] text-gray-700">
                        <li>Interning with SHARP India, a Japan-headquartered multinational...</li>
                        <li>Building SITMS while learning ERP workflows...</li>
                      </ul>
                      <div className="text-[11px] font-bold mt-2">PwC India — Salesforce Trainee</div>
                      <ul className="list-disc pl-4 text-[10px] text-gray-700">
                        <li>Ongoing Training in Salesforce CRM, Apex...</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
