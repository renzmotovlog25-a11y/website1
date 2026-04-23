import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl">
              <img 
                src="./src/assets/about-me.jpg" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                alt="Renz with the squad" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <p className="text-4xl font-black text-blue-500">50K+</p>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-300 font-bold">Total Views</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8 italic uppercase tracking-tighter leading-none">
              Fueling Passion <br/> 
              <span className="text-blue-500">Behind the Lens</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>Hey, I'm Renz! Better known as <span className="text-white font-semibold italic">Renz Filart</span>. What started as a simple love for motorcycles has evolved into a full-blown journey of storytelling and content creator.</p>
              <p>My channel is a mix of high-octane motovlogs, tech deep-dives, and behind-the-scenes of what it takes to create engaging digital content.</p>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Est. 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
