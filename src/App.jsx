import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Bike3D from './components/Bike3D';
import Socials from './components/Socials';
import Portfolio from './components/Portfolio';
import TikTok from './components/TikTok';
import Gear from './components/Gear';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Bike3D />
        <Socials />
        <Portfolio />
        <TikTok />
        <Gear />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
