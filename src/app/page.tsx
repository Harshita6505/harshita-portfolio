import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import AchievementsResume from '@/components/sections/AchievementsResume';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AchievementsResume />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-[#02020a]/80 backdrop-blur-md">
        <p className="font-medium text-sm">© {new Date().getFullYear()} Harshita Grover. All rights reserved.</p>
        <p className="text-xs mt-2 flex items-center justify-center gap-1">
          Designed & Built with <span className="text-red-500 text-sm">♥</span>
        </p>
      </footer>
    </main>
  );
}
