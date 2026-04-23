import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter, ExternalLink } from 'lucide-react';

const Socials = () => {
  const socials = [
    {
      name: 'YouTube',
      handle: '@rdftrenzo',
      url: 'https://www.youtube.com/@rdftrenzo',
      icon: <Youtube className="w-8 h-8" />,
      color: 'hover:bg-red-600',
      description: 'Subscribe for weekly motovlogs and tech reviews.'
    },
    {
      name: 'TikTok',
      handle: '@rdft.moto',
      url: 'https://www.tiktok.com/@rdft.moto', // Placeholder TikTok URL pattern
      icon: <span className="text-2xl font-bold">Tik</span>,
      color: 'hover:bg-cyan-500',
      description: 'Quick snippets and behind-the-scenes action.'
    },
    {
      name: 'Instagram',
      handle: '@r_filart',
      url: 'https://www.instagram.com/r_filart?igsh=MTd6amp1ZnFrYzhmYw==',
      icon: <Instagram className="w-8 h-8" />,
      color: 'hover:bg-pink-600',
      description: 'Photos from the road and daily life updates.'
    }
  ];

  return (
    <section id="socials" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Connect With Me</h2>
          <p className="text-gray-400">Join the community on social media</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-3xl glass transition-all border border-white/5 flex flex-col group ${social.color}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:text-white group-hover:bg-white/20 transition-all">
                  {social.icon}
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
              <p className="text-blue-500 font-mono mb-4">{social.handle}</p>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80">
                {social.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
