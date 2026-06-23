"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, ExternalLink } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import dynamic from 'next/dynamic';

const ContactGlobe = dynamic(() => import('../3d/ContactGlobe'), { ssr: false });

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8 relative">
            <ContactGlobe />
            
            <TiltCard>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-purple-500/50 transition-colors bg-[#050511]/60 backdrop-blur-md border border-white/10"
              >
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Email</h3>
                <a href="mailto:harshitag1262@gmail.com" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                  harshitag1262@gmail.com
                </a>
              </div>
              </motion.div>
            </TiltCard>

            <TiltCard>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-blue-500/50 transition-colors bg-[#050511]/60 backdrop-blur-md border border-white/10"
              >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Location</h3>
                <p className="text-xl font-bold text-white">
                  Gurugram, India
                </p>
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 pt-4"
              >
                <a href="https://github.com/Harshita6505" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass-panel text-white hover:bg-white hover:text-black transition-all bg-[#050511]/60 backdrop-blur-md border border-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/harshita-grover6505/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass-panel text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all bg-[#050511]/60 backdrop-blur-md border border-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </motion.div>
            </TiltCard>
          </div>

          {/* Quick Form/Message UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>
            
            <form action="https://formsubmit.co/harshitag1262@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="New Contact from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  className="w-full bg-[#050511]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Your Email" 
                  className="w-full bg-[#050511]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  required
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-[#050511]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
