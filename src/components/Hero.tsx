import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Cpu, Database, Terminal, FileCode, Folder, ChevronDown } from 'lucide-react';

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Track mouse coordinates for background glow spotlight reactivity
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseActive, setMouseActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      mouseActive === false && setMouseActive(true);
    };

    const handleMouseLeave = () => {
      setMouseActive(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseActive]);

  // Code Tokens for the Hero introduction card (TSX style introduction)
  const codeTokens = [
    { text: "import ", color: "text-accent-purple" },
    { text: "{ ", color: "text-white" },
    { text: "VizzioCraft ", color: "text-accent-cyan font-bold" },
    { text: "} ", color: "text-white" },
    { text: "from ", color: "text-accent-purple" },
    { text: "'@vizzio/core'", color: "text-accent-blue" },
    { text: ";\n\n", color: "text-white" },

    { text: "// Inisialisasi Solusi Digital Anda\n", color: "text-text-dim/50 italic font-light" },
    { text: "const ", color: "text-accent-purple" },
    { text: "vizzio ", color: "text-white" },
    { text: "= ", color: "text-accent-purple" },
    { text: "new ", color: "text-accent-purple" },
    { text: "VizzioCraft", color: "text-accent-cyan font-bold" },
    { text: "({\n", color: "text-white" },

    { text: "  nama", color: "text-white" },
    { text: ": ", color: "text-white" },
    { text: "'Vizzio.Craft;'", color: "text-accent-purple" },
    { text: ",\n", color: "text-white" },

    { text: "  misi", color: "text-white" },
    { text: ": ", color: "text-white" },
    { text: "'Masa-Depan-Digital'", color: "text-accent-purple" },
    { text: ",\n", color: "text-white" },

    { text: "  layanan", color: "text-white" },
    { text: ": [\n", color: "text-white" },
    { text: "    'Website-Kustom',\n", color: "text-accent-cyan" },
    { text: "    'Aplikasi-Mobile',\n", color: "text-accent-cyan" },
    { text: "    'Desain-UI-UX',\n", color: "text-accent-cyan" },
    { text: "    'Pembelajaran-AI'\n", color: "text-accent-cyan" },
    { text: "  ],\n", color: "text-white" },

    { text: "  kualitas", color: "text-white" },
    { text: ": ", color: "text-white" },
    { text: "'Pixel-Perfect'", color: "text-accent-purple" },
    { text: "\n", color: "text-white" },

    { text: "});\n\n", color: "text-white" },

    { text: "// Jalankan transmisi pembangunan proyek\n", color: "text-text-dim/50 italic font-light" },
    { text: "await ", color: "text-accent-purple" },
    { text: "vizzio", color: "text-white" },
    { text: ".", color: "text-white" },
    { text: "buildDreamProject", color: "text-accent-blue font-semibold" },
    { text: "();\n", color: "text-white" }
  ];

  const totalLength = codeTokens.reduce((acc, t) => acc + t.text.length, 0);
  const [visibleCharCount, setVisibleCharCount] = useState(0);

  // Human-like manual typing simulation loop
  useEffect(() => {
    let active = true;
    let timerId: any = null;

    const getCharacterAt = (index: number) => {
      let accum = 0;
      for (const token of codeTokens) {
        if (index < accum + token.text.length) {
          return token.text[index - accum];
        }
        accum += token.text.length;
      }
      return '';
    };

    const typeCharacter = (currentCount: number) => {
      if (!active) return;

      if (currentCount >= totalLength) {
        // Pause 6 seconds when finished, then loop back
        timerId = setTimeout(() => {
          if (active) {
            setVisibleCharCount(0);
            typeCharacter(0);
          }
        }, 6000);
        return;
      }

      setVisibleCharCount(currentCount + 1);

      const nextChar = getCharacterAt(currentCount);
      let delay = Math.random() * 50 + 35; // Keystroke delay: 35ms - 85ms

      if (nextChar === '\n') {
        delay = Math.random() * 200 + 200; // Longer pause at newline: 200ms - 400ms
      } else if (nextChar === ' ') {
        delay = Math.random() * 20 + 15;  // Speedy space
      }

      timerId = setTimeout(() => {
        typeCharacter(currentCount + 1);
      }, delay);
    };

    typeCharacter(0);

    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [totalLength]);

  // Syntax highlighting processor
  const renderTypedCode = () => {
    let charAccumulator = 0;
    
    return codeTokens.map((token, tIdx) => {
      if (charAccumulator >= visibleCharCount) return null;
      
      const charsLeft = visibleCharCount - charAccumulator;
      const textToRender = token.text.substring(0, charsLeft);
      charAccumulator += token.text.length;
      
      return (
        <span key={tIdx} className={token.color}>
          {textToRender}
        </span>
      );
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-bg-darker"
    >
      {/* Dynamic Background Noise Texture */}
      <div className="noise-overlay"></div>

      {/* Floating Blobs (Cinematic glow accents) */}
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent-cyan/8 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-accent-purple/8 blur-[160px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      {/* Grid Pattern with subtle light fading */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>

      {/* Interactive mouse spotlight glow */}
      {mouseActive && (
        <div
          className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-radial from-accent-blue/4 to-transparent blur-[80px]"
          style={{
            left: mousePos.x - 250,
            top: mousePos.y - 250,
            transition: 'transform 0.1s ease',
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Cinematic Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Futuristic Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.25em] font-mono uppercase text-accent-cyan mb-8 shadow-[0_0_15px_rgba(0,242,254,0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan glow-cyan inline-block animate-ping"></span>
            <span>Est 2026 // NEON PROTOCOL DIAKTIFKAN</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6"
          >
            Merancang Pengalaman <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple glow-text-cyan">
              Digital Masa Depan.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-base sm:text-lg text-text-secondary leading-relaxed font-normal mb-10 tracking-wide"
          >
            Website, Aplikasi, dan Sistem Digital yang didesain khusus untuk brand modern. Kami merancang arsitektur perangkat lunak premium dengan tata letak taktis, gerakan dinamis yang smooth, dan antarmuka yang sempurna.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-bg-darker font-bold tracking-widest uppercase text-xs hover:shadow-[0_0_35px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Mulai Proyek
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/10 text-white font-bold tracking-widest uppercase text-xs hover:border-accent-cyan/50 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Jelajahi Layanan</span>
              <ArrowUpRight size={14} className="text-accent-cyan" />
            </button>
          </motion.div>

          {/* Tech Spec Highlights (Glass blur card) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 w-full max-w-lg p-5 rounded-2xl glass-panel border border-white/5 shadow-2xl"
          >
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5 text-accent-cyan mb-1">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-mono tracking-widest text-text-dim">MESIN</span>
              </div>
              <span className="text-sm font-bold text-white">V3 Siap GPU</span>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5 text-accent-purple mb-1">
                <Cpu size={14} />
                <span className="text-[10px] font-mono tracking-widest text-text-dim">LATENSI</span>
              </div>
              <span className="text-sm font-bold text-white">&lt; Respon 14ms</span>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5 text-accent-blue mb-1">
                <Database size={14} />
                <span className="text-[10px] font-mono tracking-widest text-text-dim">ARSITEKTUR</span>
              </div>
              <span className="text-sm font-bold text-white">Headless Edge</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Premium VS Code Mockup Workspace (Replaces 3D Orb) */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] lg:h-[480px]">
          {/* Glowing back ambient halo */}
          <div className="absolute w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full border border-white/5 bg-radial from-accent-cyan/[0.015] to-accent-purple/[0.015] blur-xl pointer-events-none animate-orb-float"></div>

          {/* High-fidelity VS Code Mockup card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[460px] h-[320px] lg:h-[370px] rounded-2xl glass-panel border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-bg-darker/90 overflow-hidden flex flex-col z-10 text-left animate-orb-float"
          >
            {/* Window Controls Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/2">
              <div className="flex items-center space-x-1.5 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <div className="flex items-center space-x-1.5 text-[9px] font-mono text-text-dim select-none">
                <Terminal size={10} className="text-accent-cyan" />
                <span>vizzio-craft.ts — Visual Studio Code</span>
              </div>
              <div className="w-8" /> {/* Spacer */}
            </div>

            {/* Editor Inner Layout Split (Sidebar + Editor Pane) */}
            <div className="flex-grow flex items-stretch font-mono text-[10px] md:text-[11px] overflow-hidden">
              
              {/* Minimal Editor Sidebar Explorer (Mock) */}
              <div className="w-32 border-r border-white/5 bg-black/20 p-3.5 hidden sm:flex flex-col space-y-4 select-none">
                <div className="flex items-center space-x-1 text-text-dim text-[8px] font-bold tracking-wider uppercase">
                  <ChevronDown size={10} />
                  <span>WORKSPACE</span>
                </div>
                
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-text-dim">
                    <Folder size={11} className="text-accent-purple/60" />
                    <span>components</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-text-dim">
                    <Folder size={11} className="text-accent-blue/60" />
                    <span>systems</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-text-dim">
                    <Folder size={11} className="text-accent-cyan/60" />
                    <span>ai-core</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-accent-cyan font-bold pl-1 border-l border-accent-cyan/40">
                    <FileCode size={11} className="text-accent-cyan" />
                    <span>vizzio-craft.ts</span>
                  </div>
                </div>
              </div>

              {/* Coding area */}
              <div className="flex-grow p-4 md:p-5 overflow-y-auto relative bg-[#040612]/30 flex flex-col justify-between">
                {/* Visual grid line backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none" />

                <pre className="whitespace-pre-wrap leading-relaxed select-all relative z-10 custom-scrollbar pr-1">
                  <code>
                    {renderTypedCode()}
                    {/* Glowing typewriter cursor */}
                    <span className="w-1.5 h-3.5 bg-accent-cyan animate-pulse shadow-[0_0_8px_#00f2fe] inline-block ml-0.5 align-middle" />
                  </code>
                </pre>

                {/* Status Bar */}
                <div className="border-t border-white/5 pt-2 mt-4 flex items-center justify-between text-[8px] text-text-dim select-none font-mono">
                  <span>UTF-8 // TypeScript</span>
                  <span className="text-accent-cyan font-bold tracking-pulse">● Live Transmission</span>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Futuristic HUD floating parameter logs */}
          <div className="absolute top-[8%] right-[5%] text-right font-mono text-[9px] text-text-dim tracking-wider select-none hidden sm:block">
            <p className="text-accent-cyan">STABLE STATE: 60FPS</p>
            <p>COMPILER: VIZZIO v4.0</p>
          </div>
          <div className="absolute bottom-[8%] left-[5%] text-left font-mono text-[9px] text-text-dim tracking-wider select-none hidden sm:block">
            <p>INTEGRITY: SECURE</p>
            <p className="text-accent-purple">SHADING DECAY: ACTIVE</p>
          </div>
        </div>

      </div>

      {/* Downward Scroll Indicator */}
      <button
        onClick={onLearnMore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-secondary hover:text-accent-cyan transition-colors duration-300 focus:outline-none cursor-pointer hidden md:flex"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-mono mb-2 text-text-dim">Gulir Telemetri</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center p-1.5 bg-white/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-accent-cyan"
          />
        </div>
      </button>

      {/* Fading bottom masking overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-darker to-transparent pointer-events-none"></div>
    </section>
  );
}
