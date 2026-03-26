import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import resumeData from '../data/resume.json';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex gap-6 items-start"
            >
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 shrink-0">
                <GraduationCap size={32} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                  Class of {edu.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-white/40 font-medium">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
