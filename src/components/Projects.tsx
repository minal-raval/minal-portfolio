import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import resumeData from '../data/resume.json';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Key Projects</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Layers size={24} />
                </div>
                <ExternalLink className="text-white/20 group-hover:text-blue-400 transition-colors" size={20} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {project.stack}
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                {project.bullets[0]}
              </p>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
