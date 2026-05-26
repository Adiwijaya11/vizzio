import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Education from './components/Education';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section occupies the center of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    const sections = ['home', 'about', 'services', 'process', 'showcase', 'education', 'contact'];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#050714] text-white min-h-screen relative font-sans overflow-x-hidden">
      {/* Precision Custom Cursor Follow-Light */}
      <CustomCursor />

      {/* Global Cinematic Top/Left Ambient Lighting Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute top-[-10%] right-[-15%] w-[800px] h-[800px] rounded-full bg-accent-cyan/[0.015] blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-15%] w-[800px] h-[800px] rounded-full bg-accent-purple/[0.015] blur-[150px]" />
      </div>

      {/* Orchestrated Application Shell */}
      <div className="relative z-10">
        
        {/* Futuristic Glass Header */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Cinematic Hero Block */}
        <Hero onLearnMore={handleLearnMore} />
        

        
        {/* Visionary Profile Section */}
        <About />
        
        {/* Grid Core Services */}
        <Services />
        
        {/* Progressive Cyber Timeline */}
        <Process />
        
        {/* 3D Perspective Digital Showcase */}
        <Showcase />
        
        {/* High-fidelity Tech Academy Blog Grid */}
        <Education />
        
        {/* Conversion CTA Block */}
        <CTA />

        {/* Minimal Futuristic Footer */}
        <Footer />

      </div>
    </div>
  );
}
