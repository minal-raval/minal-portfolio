import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, Star } from 'lucide-react';
import resumeData from '../data/resume.json';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden ${
                expandedIndex === index 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-white/60 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                  <ChevronRight 
                    className={`transition-transform duration-300 hidden md:block ${expandedIndex === index ? 'rotate-90' : ''}`} 
                  />
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-0 border-t border-white/10">
                      <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div className="md:col-span-2 space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">Key Responsibilities</h4>
                          <ul className="space-y-4">
                            {exp.bullets.map((bullet, i) => (
                              <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-6">
                          {exp.metrics && (
                            <div className="space-y-4">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">Impact Highlights</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.metrics.map((metric, i) => (
                                  <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                                    {metric}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Star className="text-yellow-500 mb-3" size={20} />
                            <p className="text-xs text-white/40 leading-relaxed">
                              Focusing on performance, clean architecture, and continuous improvement.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
