import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutPhoto1 from '../assets/about-me.jpg';
import aboutPhoto2 from '../assets/about-carousel-2.jpg';
import aboutPhoto3 from '../assets/about-carousel-3.jpg';
import aboutPhoto4 from '../assets/about-carousel-4.jpg';

const photos = [aboutPhoto1, aboutPhoto2, aboutPhoto3, aboutPhoto4];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIndex}
                  src={photos[currentIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Renz Filart" 
                />
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
                {photos.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-blue-500 w-6' : 'bg-white/40 hover:bg-white/80'}`}
                  />
                ))}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
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
