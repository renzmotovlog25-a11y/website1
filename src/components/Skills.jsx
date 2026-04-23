import React from 'react';
import { motion } from 'framer-motion';
import { Video, Bike, Code, Camera, Edit3, Settings } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Video Editing', icon: <Video className="w-6 h-6" />, level: 'Advanced' },
    { name: 'Riding / Motovlogging', icon: <Bike className="w-6 h-6" />, level: 'Pro' },
    { name: 'Cinematography', icon: <Camera className="w-6 h-6" />, level: 'Advanced' },
    { name: 'Programming (VBA, React)', icon: <Code className="w-6 h-6" />, level: 'Intermediate' },
    { name: 'Content Strategy', icon: <Edit3 className="w-6 h-6" />, level: 'Advanced' },
    { name: 'Hardware Setup', icon: <Settings className="w-6 h-6" />, level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-gray-400">What I use to create and build</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass border border-white/5 text-center flex flex-col items-center group hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
