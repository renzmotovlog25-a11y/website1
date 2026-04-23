import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const TikTok = () => {
  // Placeholder data - You can replace these with your real TikTok video links and IDs
  const viralVideos = [
    {
      id: '7494789960860454152',
      views: '179.7K',
      title: 'BigBike Feels Part 3: KTM RC390 2025!',
      thumbnail: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oIAGe4GfLAgPCrFzAG6uAJjRTeoIQQAeAg1bvI~tplv-tiktokx-origin.image?dr=14575&x-expires=1777104000&x-signature=xiExvnspdAKmX%2B38rK8JSWVhtrI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2', 
      url: 'https://www.tiktok.com/@rdft.moto/video/7494789960860454152'
    },
    {
      id: '7497802628684893447',
      views: '91.3K',
      title: 'Bike Feels Part 15: CF Moto 250 SR 2025!',
      thumbnail: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o8gAsEYsoBACFyIkADCMASfDFAvIcQfR5EoCbQ~tplv-tiktokx-origin.image?dr=14575&x-expires=1777104000&x-signature=hantbUm466JIq0OfT58awzsfTFE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2',
      url: 'https://www.tiktok.com/@rdft.moto/video/7497802628684893447'
    },
    {
      id: '7486085314323303698',
      views: '73K',
      title: 'The 2025 Honda CBR 150R in #insideracing',
      thumbnail: 'https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/osf9jU1ADAEEAsAawCDGoPIjxEAot6r3eF0EDe~tplv-tiktokx-origin.image?dr=14575&x-expires=1777104000&x-signature=dLCWfKeMgQOvOKu6D2LmT%2F%2Bj%2Fzc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2',
      url: 'https://www.tiktok.com/@rdft.moto/video/7486085314323303698'
    },
    {
      id: '7498011695030291720',
      views: '71.9K',
      title: 'Bike Feels Part 16: Cf Moto Lite 250NK!',
      thumbnail: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oQERWxQcyAzXACD8CgfiFgAUAnIteAjoBkDokE~tplv-tiktokx-origin.image?dr=14575&x-expires=1777104000&x-signature=i9wG%2B6QtIBXQN8Mr4VFsFadPsrQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2',
      url: 'https://www.tiktok.com/@rdft.moto/video/7498011695030291720'
    },
  ];

  return (
    <section id="tiktok" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-[2px] bg-cyan-500"></span>
              <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs">Viral Content</span>
            </div>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">
              TikTok <span className="text-gradient">Viral Hits</span>
            </h2>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://www.tiktok.com/@rdft.moto" 
            target="_blank"
            className="px-6 py-3 glass rounded-2xl text-sm font-bold flex items-center space-x-2 border border-white/10 hover:bg-white/5 transition-all"
          >
             <span>Follow on TikTok</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {viralVideos.map((v, i) => (
            <motion.a
              key={i}
              href={v.url}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[9/16] rounded-[2rem] overflow-hidden glass border border-white/10 relative">
                {/* Thumbnail */}
                <img 
                  src={v.thumbnail} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-40"
                  alt={v.title}
                />
                
                {/* Sneak Peek Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-16 h-16 rounded-full bg-cyan-600/20 backdrop-blur-xl border border-cyan-500/50 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <Play className="w-6 h-6 text-cyan-400 fill-current" />
                  </div>
                  <p className="text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase">Sneak Peek</p>
                </div>

                {/* Viral Badge */}
                <div className="absolute top-4 left-4 z-10 transition-transform group-hover:scale-90">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    <span className="text-[10px] font-black text-white uppercase tracking-tighter">{v.views} VIEWS</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="text-cyan-500 text-[8px] font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Watch on TikTok</p>
                  <h3 className="text-white font-bold text-sm leading-tight uppercase line-clamp-2 transition-colors group-hover:text-cyan-400">
                    {v.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
          
          {/* Add-on Card for CTA */}
          <div className="hidden lg:flex aspect-[9/16] rounded-[2rem] border-2 border-dashed border-white/10 items-center justify-center p-8 text-center bg-white/[0.02]">
            <div>
              <p className="text-gray-500 text-sm mb-4">Want to see more viral rides?</p>
              <a href="https://www.tiktok.com/@rdft.moto" className="text-cyan-500 font-bold hover:underline uppercase text-xs tracking-widest">Visit TikTok Profile</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTok;
