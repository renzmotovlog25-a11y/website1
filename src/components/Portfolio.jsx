import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Portfolio = () => {
  const content = [
    {
      title: 'POV ng isang angkas',
      category: 'Motovlog',
      thumbnail: 'https://img.youtube.com/vi/B90jiHTKt9k/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=B90jiHTKt9k'
    },
    {
      title: "My parents' date in Caliraya",
      category: 'Vlog',
      thumbnail: 'https://img.youtube.com/vi/KV_ybQblEec/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=KV_ybQblEec'
    },
    {
      title: 'Marilaque Uphill Duo | ADV 150 | Aerox SP | Insta 360 X5 POV',
      category: 'Ride',
      thumbnail: 'https://img.youtube.com/vi/pMjZ_kwgC7Q/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=pMjZ_kwgC7Q'
    },
    {
      title: 'OJT - Side Quest sa LB - Birthday ni GF',
      category: 'Vlog',
      thumbnail: 'https://img.youtube.com/vi/5O4cwTCooDE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=5O4cwTCooDE'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Latest Content</h2>
            <p className="text-gray-400">Deep dive into my creative journey</p>
          </div>
          <a href="https://www.youtube.com/@rdftrenzo" className="text-blue-500 hover:underline font-semibold">
            View All Videos
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 glass border border-white/10">
                <img src={item.thumbnail} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 fill-current text-white" />
                  </div>
                </div>
              </div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-2 italic">{item.category}</p>
              <h3 className="font-bold text-sm h-12 group-hover:text-blue-500 transition-colors uppercase leading-tight line-clamp-2">{item.title}</h3>
              <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest font-bold">Watch on YouTube</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
