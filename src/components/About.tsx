import { useEffect, useRef, useState } from 'react';
import { Eye, ShieldCheck, Terminal, Compass } from 'lucide-react';



export default function About() {
  const infoRef = useRef<HTMLDivElement | null>(null);

  const philosophies = [
    {
      title: 'Strategi Visioner',
      desc: 'Kami memetakan solusi teknis dengan tujuan bisnis Anda. Tanpa tren dangkal; kami membangun fondasi kustom yang dirancang untuk skala besar.',
      icon: Terminal,
      color: 'text-accent-cyan',
    },
    {
      title: 'Pengerjaan Presisi',
      desc: 'Kami merancang tata letak yang sempurna dengan ketelitian pixel dan responsivitas penuh. Setiap antarmuka melalui pengujian ketat.',
      icon: Eye,
      color: 'text-accent-purple',
    },
    {
      title: 'Sistem Cerdas',
      desc: 'Mengintegrasikan otomatisasi alur kerja dan kecerdasan buatan secara mulus, membuat aplikasi Anda bekerja lebih cerdas.',
      icon: ShieldCheck,
      color: 'text-accent-blue',
    },
  ];

  // Token definition for the high-end premium syntax highlighted typing script
  const codeTokens = [
    { text: "import ", color: "text-accent-purple" },
    { text: "{ ", color: "text-white" },
    { text: "VizzioCraft ", color: "text-white font-bold" },
    { text: "} ", color: "text-white" },
    { text: "from ", color: "text-accent-purple" },
    { text: "'@vizzio/core'", color: "text-accent-cyan" },
    { text: ";\n\n", color: "text-white" },
    
    { text: "// Inisialisasi Protokol Digital Premium\n", color: "text-text-dim/50 italic font-light" },
    { text: "export async function ", color: "text-accent-purple" },
    { text: "craftFuture", color: "text-accent-blue font-semibold" },
    { text: "() {\n", color: "text-white" },
    
    { text: "  const ", color: "text-accent-purple" },
    { text: "studio ", color: "text-white" },
    { text: "= ", color: "text-accent-purple" },
    { text: "new ", color: "text-accent-purple" },
    { text: "VizzioCraft", color: "text-white font-bold" },
    { text: "({\n", color: "text-white" },
    
    { text: "    rigour", color: "text-white" },
    { text: ": ", color: "text-white" },
    { text: "'100%'", color: "text-accent-cyan" },
    { text: ",\n", color: "text-white" },
    
    { text: "    aesthetic", color: "text-white" },
    { text: ": ", color: "text-white" },
    { text: "'futuristic-2026'", color: "text-accent-cyan" },
    { text: ",\n", color: "text-white" },
    
    { text: "    gpuAcceleration", color: "text-white" },
    { text: ": ", color: "text-white" },
    { text: "true\n", color: "text-accent-purple" },
    
    { text: "  });\n\n", color: "text-white" },
    
    { text: "  const ", color: "text-accent-purple" },
    { text: "proyek ", color: "text-white" },
    { text: "= ", color: "text-accent-purple" },
    { text: "await ", color: "text-accent-purple" },
    { text: "studio", color: "text-white" },
    { text: ".", color: "text-white" },
    { text: "compile", color: "text-accent-blue font-semibold" },
    { text: "({\n", color: "text-white" },
    
    { text: "    layanan", color: "text-white" },
    { text: ": [", color: "text-white" },
    { text: "'website-kustom'", color: "text-accent-cyan" },
    { text: ", ", color: "text-white" },
    { text: "'undangan-digital'", color: "text-accent-cyan" },
    { text: ", ", color: "text-white" },
    { text: "'admin-dashboard'", color: "text-accent-cyan" },
    { text: ", ", color: "text-white" },
    { text: "'desain-ui-ux'", color: "text-accent-cyan" },
    { text: "]\n", color: "text-white" },
    
    { text: "  });\n\n", color: "text-white" },
    
    { text: "  return ", color: "text-accent-purple" },
    { text: "proyek", color: "text-white" },
    { text: ".", color: "text-white" },
    { text: "deploy", color: "text-accent-blue font-semibold" },
    { text: "(", color: "text-white" },
    { text: "'serverless-edge'", color: "text-accent-cyan" },
    { text: ");\n", color: "text-white" },
    
    { text: "}", color: "text-white" }
  ];

  const totalLength = codeTokens.reduce((acc, t) => acc + t.text.length, 0);
  const [visibleCharCount, setVisibleCharCount] = useState(0);

  // Human-like Manual Typing Effect Loop (fixes overlap bugs, adds random realistic variations)
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
        // Finished typing: pause for 6 seconds, then reset and loop typing
        timerId = setTimeout(() => {
          if (active) {
            setVisibleCharCount(0);
            typeCharacter(0);
          }
        }, 6000);
        return;
      }

      setVisibleCharCount(currentCount + 1);

      // Determine human-like delay
      const nextChar = getCharacterAt(currentCount);
      let delay = Math.random() * 60 + 40; // Base manual typing: 40ms to 100ms
      
      if (nextChar === '\n') {
        delay = Math.random() * 200 + 250; // Pause significantly longer at line breaks (250ms - 450ms)
      } else if (nextChar === ' ') {
        delay = Math.random() * 30 + 20; // Quick space typing
      }

      timerId = setTimeout(() => {
        typeCharacter(currentCount + 1);
      }, delay);
    };

    // Kickoff typing from index 0
    typeCharacter(0);

    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [totalLength]);

  // Process the tokens to render typed characters with syntax highlighting
  const renderTypedCode = () => {
    let charAccumulator = 0;
    
    return codeTokens.map((token, idx) => {
      if (charAccumulator >= visibleCharCount) return null;
      
      const tokenLength = token.text.length;
      const charsToShow = Math.min(tokenLength, visibleCharCount - charAccumulator);
      charAccumulator += tokenLength;
      
      const visibleText = token.text.slice(0, charsToShow);
      
      return (
        <span key={idx} className={token.color}>
          {visibleText}
        </span>
      );
    });
  };

  return (
    <section
      id="about"
      className="relative py-32 bg-bg-darker overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/[0.02] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/[0.03] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Layout Grid */}
        <div ref={infoRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Text & Stats Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] font-mono uppercase text-accent-cyan mb-3">
                VIZZIO.CRAFT; // PROFIL STUDIO
              </p>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                Merancang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
                  Warisan Digital.
                </span>
              </h2>
              
              <p className="text-text-secondary leading-relaxed font-light text-sm mb-4">
                Di <strong className="font-semibold text-white">Vizzio.Craft;</strong> kami tidak hanya merakit website biasa; kami membangun sistem digital berskala tinggi. Kami percaya bahwa kode dan desain adalah satu kesatuan utuh. Baik saat mengembangkan sistem enterprise yang modular, menyempurnakan responsivitas antarmuka, atau mengintegrasikan otomatisasi kecerdasan buatan (AI), kami mengerjakannya dengan dedikasi penuh.
              </p>
              
              <p className="text-text-secondary leading-relaxed font-light text-sm mb-6">
                Studio kami beroperasi dengan standar teknologi terdepan tahun 2026. Kami menolak formula instan demi menghasilkan desain kokoh yang berwibawa, meningkatkan kepercayaan pengguna, serta dapat dikembangkan dengan lancar.
              </p>

              {/* Custom Terminal signature label */}
              <div className="flex items-center space-x-4 border-l-2 border-accent-cyan pl-6 py-2 bg-white/[0.01] rounded-r-xl pr-6 border-y border-r border-white/5 inline-flex mb-2">
                <Compass size={22} className="text-accent-cyan animate-spin-slow" />
                <div>
                  <p className="text-white text-xs font-bold tracking-wider uppercase">VIZZIO.CRAFT; STUDIO</p>
                  <p className="text-[10px] text-text-dim font-mono">PROTOKOL NEON // SISTEM ONLINE</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: Code Editor & Philosophies Section */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            
            {/* Premium Code Editor Mockup Card with the interactive Typing Animation */}
            <div className="w-full glass-panel rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] overflow-hidden font-mono text-left select-none bg-[#07091B]/40">
              
              {/* Header bar controls */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/2 border-b border-white/5">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/35 border border-red-500/50 flex items-center justify-center text-[7px] text-red-500 font-bold select-none">✕</span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/35 border border-yellow-500/50 flex items-center justify-center text-[7px] text-yellow-500 font-bold select-none">─</span>
                  <span className="w-3 h-3 rounded-full bg-green-500/35 border border-green-500/50 flex items-center justify-center text-[7px] text-green-500 font-bold select-none">⤢</span>
                </div>
                <div className="text-[10px] text-text-dim tracking-widest font-extrabold flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded bg-accent-blue/15 text-accent-blue flex items-center justify-center text-[8px] font-extrabold border border-accent-blue/20">TS</span>
                  <span>vizzio.craft.ts</span>
                </div>
                <div className="w-8" /> {/* Balance spacer */}
              </div>

              {/* Code Editor Content */}
              <div className="p-6 text-[10px] sm:text-[11.5px] leading-relaxed text-text-secondary overflow-x-auto min-h-[290px] flex">
                <div className="flex space-x-4 w-full">
                  {/* Line Numbers */}
                  <div className="text-text-dim/30 border-r border-white/5 pr-4 select-none text-right font-light">
                    {Array.from({ length: 17 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  {/* Code lines with typed neon render */}
                  <div className="font-semibold whitespace-pre text-left relative flex-grow">
                    {renderTypedCode()}
                    {/* Blinking cursor at typing head */}
                    {visibleCharCount < totalLength && (
                      <span className="w-1.5 h-3.5 bg-accent-cyan inline-block animate-pulse ml-0.5 shadow-[0_0_8px_#00f2fe]" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Philosophies/Pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {philosophies.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel-interactive p-6 rounded-2xl flex flex-col items-start text-left group"
                  >
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/5 mb-5 group-hover:bg-white/10 transition-all duration-300 ${p.color}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-[10px] text-text-secondary leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
