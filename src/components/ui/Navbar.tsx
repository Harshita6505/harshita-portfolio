"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold text-gradient">HG.</Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white hover:text-purple-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contact" className="px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500/50 text-purple-300 hover:bg-purple-600/40 transition-all">
            Let's Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-panel py-4 flex flex-col items-center space-y-4 border-t border-purple-500/20"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-purple-400 w-full text-center py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
