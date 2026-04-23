import React from 'react';
import { Youtube, Instagram, Bike, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <Bike className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold tracking-tighter uppercase">Renz Filart</span>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Renz Filart. All rights reserved.
          </p>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-6">
              <a href="https://www.youtube.com/@rdftrenzo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-3 glass rounded-full text-blue-500 hover:text-white transition-colors border border-white/5"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
