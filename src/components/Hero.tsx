import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import resumeData from '../data/resume.json';

const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-36 md:pb-56">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          {resumeData.basics.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {resumeData.basics.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Experience</span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <a
            href="#"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Impact Strip */}
      <div className="absolute bottom-0 w-full overflow-hidden py-4 bg-white/5 backdrop-blur-sm border-y border-white/10 hidden md:block">
        <div className="flex justify-center gap-24">
          {resumeData.achievements.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">{item.title}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{item.context}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
