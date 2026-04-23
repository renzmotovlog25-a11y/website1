import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Shield, Radio, CheckCircle2 } from 'lucide-react';

const Gear = () => {
  const gearItems = [
    {
      category: 'Protection',
      name: 'SEC Cyclone Carbon',
      desc: 'Ultra-lightweight carbon fiber shell for maximum protection and racing aesthetics.',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      tag: 'Helmet'
    },
    {
      category: 'Cinematography',
      name: 'DJI Action 4',
      desc: 'Capturing every ride in stunning 4K with elite stabilization even in low light.',
      icon: <Camera className="w-8 h-8 text-cyan-500" />,
      tag: 'Main Camera'
    },
    {
      category: 'Communication',
      name: 'Freedconn Intercom',
      desc: 'Crystal clear audio for vlogging narration and staying connected on group rides.',
      icon: <Radio className="w-8 h-8 text-magenta-500" />,
      tag: 'Intercom'
    }
  ];

  return (
    <section id="gear" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <span className="w-8 h-px bg-blue-500"></span>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">The Setup</span>
            <span className="w-8 h-px bg-blue-500"></span>
          </motion.div>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">
            Gear & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">The tools I use to capture the thrill and keep the journey safe. Built for the road, tuned for the lens.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gearItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] glass border border-white/5 relative group overflow-hidden"
            >
              {/* Ghost background icon */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] scale-150 rotate-12 transition-transform group-hover:scale-[1.8]">
                 {item.icon}
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-blue-500 uppercase text-[10px] font-black tracking-widest">{item.tag}</span>
                  <CheckCircle2 className="w-3 h-3 text-blue-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{item.category}</span>
                  <div className="w-8 h-[2px] bg-blue-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gear;
