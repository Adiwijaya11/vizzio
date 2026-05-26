import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Profil' },
    { id: 'services', label: 'Layanan' },
    { id: 'process', label: 'Alur Kerja' },
    { id: 'showcase', label: 'Rancang Proyek' },
    { id: 'education', label: 'Pembelajaran AI' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-bg-darker/70 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-1.5 text-xl font-bold tracking-tight focus:outline-none group cursor-pointer"
          >
            <span className="text-white font-extrabold tracking-wide">Vizzio</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple font-light">
              .Craft;
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan inline-block animate-pulse shadow-[0_0_10px_#00f2fe]"></span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative px-4 py-2 rounded-full cursor-pointer focus:outline-none ${
                    isActive ? 'text-white' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Premium CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleLinkClick('contact')}
              className="group px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/30 text-white text-xs font-semibold tracking-widest uppercase hover:border-accent-cyan transition-all duration-500 flex items-center space-x-2 shadow-[0_0_15px_rgba(0,242,254,0.05)] hover:shadow-[0_0_25px_rgba(0,242,254,0.2)] cursor-pointer"
            >
              <span className="bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">Mulai Proyek</span>
              <ArrowUpRight size={14} className="text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-accent-cyan transition-colors focus:outline-none cursor-pointer p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Slide-In side panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Drawer side panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 w-full max-w-[340px] h-screen bg-[#050714]/98 backdrop-blur-3xl border-l border-white/5 z-50 lg:hidden flex flex-col justify-between p-8 pt-24"
            >
              {/* Close Button inside drawer */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-accent-cyan transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Header Telemetry coordinates */}
              <div className="border-b border-white/5 pb-4 mb-6 font-mono text-[9px] text-left flex flex-col space-y-1 select-none">
                <div className="flex items-center space-x-1.5 text-accent-cyan font-bold tracking-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan glow-cyan inline-block animate-ping" />
                  <span>DENPASAR NODE ACTIVE</span>
                </div>
                <span className="text-text-dim">COORD: 8.6705° S, 115.2126° E</span>
              </div>

              {/* Staggered Navigation Links */}
              <div className="flex flex-col space-y-2 flex-grow text-left">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-left transition-all duration-300 py-3 border-b border-white/5 cursor-pointer flex justify-between items-center ${
                        isActive ? 'text-accent-cyan border-accent-cyan/15 pl-2' : 'text-text-secondary hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan glow-cyan" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom CTA & Social Links */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-bg-darker font-mono text-xs font-black tracking-widest uppercase shadow-[0_0_25px_rgba(0,242,254,0.2)] hover:scale-[1.01] transition-transform cursor-pointer"
                >
                  Mulai Proyek
                </button>

                {/* Integrated Social Channels inside Drawer */}
                <div className="flex justify-center space-x-4 select-none">
                  <a
                    href="https://www.instagram.com/vizziocraft?igsh=MTAwc2NlbjNkMDRqbg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/2 border border-white/5 flex items-center justify-center text-text-dim hover:text-accent-cyan transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@vizziocraft.studio?_r=1&_t=ZS-96gAvUtx9zJ"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/2 border border-white/5 flex items-center justify-center text-text-dim hover:text-accent-cyan transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.12 2.27 1.89 3.66 2.18v3.66c-1.39-.03-2.77-.38-3.96-1.1-.28-.18-.54-.38-.78-.6-.05 2.53-.02 5.06-.05 7.59-.09 1.94-.74 3.84-1.89 5.34-1.39 1.76-3.56 2.87-5.8 2.92-2.38.07-4.75-.97-6.07-2.93-1.2-1.83-1.42-4.22-.57-6.23.83-1.93 2.62-3.37 4.71-3.76.09 1.25.1 2.51.02 3.76-1.12.18-2.14.86-2.65 1.86-.54 1.05-.44 2.37.26 3.32.74.96 1.97 1.43 3.16 1.18 1.15-.22 2.08-1.16 2.35-2.3.06-1.33.03-2.66.04-3.99 0-4.04-.02-8.08-.03-12.12z"/>
                    </svg>
                  </a>
                </div>

                <div className="text-center text-[8px] text-text-dim tracking-widest font-mono select-none">
                  © {new Date().getFullYear()} VIZZIO.CRAFT; STUDIO
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
