import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import resumeData from '../data/resume.json';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Skills & Strengths</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {resumeData.skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/80 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Core Strengths
            </h3>
            <div className="space-y-4">
              {resumeData.strengths.map((strength, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-white/80">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
