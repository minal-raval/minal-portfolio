import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import { Mail, Phone, MapPin } from 'lucide-react';
import resumeData from './data/resume.json';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash screen
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedBackground />
            <Navbar />
            
            <main>
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Education />
            </main>

            <footer className="py-24 px-6 border-t border-white/10 bg-black/50 backdrop-blur-xl">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                  <p className="text-white/60 mb-8 max-w-md">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                  <div className="space-y-4">
                    <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-4 text-white/80 hover:text-blue-400 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Mail size={18} />
                      </div>
                      {resumeData.basics.email}
                    </a>
                    <a href={`tel:${resumeData.basics.phone}`} className="flex items-center gap-4 text-white/80 hover:text-blue-400 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Phone size={18} />
                      </div>
                      {resumeData.basics.phone}
                    </a>
                    <div className="flex items-center gap-4 text-white/80">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <MapPin size={18} />
                      </div>
                      {resumeData.basics.location}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <div className="text-6xl font-bold tracking-tighter text-white/10 select-none">
                    MINAL RAVAL
                  </div>
                  <div className="text-sm text-white/20 font-mono mt-12">
                    © 2026 Crafted with precision.
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
