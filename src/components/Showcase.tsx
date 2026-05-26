import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, BarChart3, Smartphone, Laptop, Sparkles, Check, ArrowRight, CreditCard, Bot, Languages } from 'lucide-react';

interface PlatformOption {
  id: 'landing' | 'undangan' | 'dashboard' | 'mobile';
  title: string;
  desc: string;
  icon: any;
  basePrice: number;
  baseTimeline: number;
}

interface ThemeOption {
  id: 'cyber' | 'apple' | 'vercel';
  title: string;
  desc: string;
  accent: string;
  bgClass: string;
}

interface FeatureOption {
  id: 'ai' | 'payment' | 'multilingual';
  title: string;
  desc: string;
  price: number;
  timeline: number;
  icon: any;
}

// Custom smooth number counter animation
function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;
    
    const duration = 600; // ms
    const startTime = performance.now();
    let animationFrameId: number;
    
    const updateNumber = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(start + (end - start) * easeProgress);
      setDisplayValue(current);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateNumber);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);

  return <span>{displayValue.toLocaleString('id-ID')}</span>;
}

export default function Showcase() {
  const [selectedPlatform, setSelectedPlatform] = useState<'landing' | 'undangan' | 'dashboard' | 'mobile'>('landing');
  const [selectedTheme, setSelectedTheme] = useState<'cyber' | 'apple' | 'vercel'>('cyber');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const platforms: PlatformOption[] = [
    {
      id: 'landing',
      title: 'Landing Page Premium',
      desc: 'Satu halaman berkonversi tinggi dengan visual 2026 yang mewah.',
      icon: Laptop,
      basePrice: 8500000,
      baseTimeline: 7,
    },
    {
      id: 'undangan',
      title: 'Undangan Digital Kustom',
      desc: 'Undangan interaktif mewah dengan RSVP, peta, & album galeri.',
      icon: Globe,
      basePrice: 3500000,
      baseTimeline: 4,
    },
    {
      id: 'dashboard',
      title: 'Admin Dashboard & SaaS',
      desc: 'Panel data real-time, grafik terakselerasi GPU, dan kontrol database.',
      icon: BarChart3,
      basePrice: 25000000,
      baseTimeline: 18,
    },
    {
      id: 'mobile',
      title: 'Aplikasi Mobile iOS & Android',
      desc: 'Aplikasi kustom cepat beranimasi fluid siap rilis di App/Play Store.',
      icon: Smartphone,
      basePrice: 40000000,
      baseTimeline: 25,
    },
  ];

  const themes: ThemeOption[] = [
    {
      id: 'cyber',
      title: 'Cyber Neon',
      desc: 'Gelap futuristik, gradien neon tajam, & tech-grid menyala.',
      accent: 'from-accent-cyan to-accent-purple',
      bgClass: 'bg-[#060816] text-white',
    },
    {
      id: 'apple',
      title: 'Apple Clean',
      desc: 'Minimalisme mewah, abu-abu premium, & sudut melengkung anggun.',
      accent: 'from-[#e2e8f0] to-[#94a3b8]',
      bgClass: 'bg-[#0f172a] text-[#f1f5f9]',
    },
    {
      id: 'vercel',
      title: 'Vercel Dark',
      desc: 'Hitam legam arang, border laser tipis, & kontras tinggi.',
      accent: 'from-white to-neutral-500',
      bgClass: 'bg-black text-white border-neutral-800',
    },
  ];

  const features: FeatureOption[] = [
    {
      id: 'ai',
      title: 'Integrasi AI Chatbot',
      desc: 'Asisten cerdas terlatih model LLM untuk melayani pengunjung otomatis.',
      price: 7500000,
      timeline: 5,
      icon: Bot,
    },
    {
      id: 'payment',
      title: 'Payment Gateway',
      desc: 'Sistem transaksi otomatis (QRIS, Kartu Kredit, Transfer Bank).',
      price: 6500000,
      timeline: 4,
      icon: CreditCard,
    },
    {
      id: 'multilingual',
      title: 'Multi-Bahasa (ID/EN)',
      desc: 'Alih bahasa instan dengan lokalisasi lengkap untuk target global.',
      price: 3000000,
      timeline: 2,
      icon: Languages,
    },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Dynamic calculations
  const platformData = platforms.find((p) => p.id === selectedPlatform)!;
  
  const totalPrice =
    platformData.basePrice +
    selectedFeatures.reduce((acc, featId) => {
      const feat = features.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

  const totalTimeline =
    platformData.baseTimeline +
    selectedFeatures.reduce((acc, featId) => {
      const feat = features.find((f) => f.id === featId);
      return acc + (feat ? feat.timeline : 0);
    }, 0);

  const handleLockAndSend = () => {
    setIsLocked(true);
    
    // Broadcast parameters to contact form
    const prefillEvent = new CustomEvent('vizzio-prefill-project', {
      detail: {
        platform: selectedPlatform,
        theme: selectedTheme,
        features: selectedFeatures,
        price: totalPrice,
        timeline: totalTimeline,
      },
    });
    window.dispatchEvent(prefillEvent);

    // Auto unlock indicator after a short delay
    setTimeout(() => {
      setIsLocked(false);
    }, 1500);
  };

  return (
    <section
      id="showcase"
      className="relative py-32 bg-bg-darker overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-20">
          <p className="text-[10px] tracking-[0.3em] font-mono uppercase text-accent-cyan mb-3">
            VIZZIO INTERACTIVE LABS // DREAM BUILDER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Rancang Proyek Impian.
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-light">
            Mari eksperimen! Pilih jenis platform digital, rasakan perubahan gaya tema visualnya secara langsung pada layar mockup, pasang fitur tambahan yang Anda butuhkan, dan lihat kalkulasi harga serta waktu pengerjaan secara instan.
          </p>
        </div>

        {/* Builder Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Selector Configuration Console (lg:span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-bg-dark/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-cyan/40 to-accent-purple/0" />
            
            <div className="space-y-8 text-left">
              
              {/* SECTION 1: Platform Picker */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-cyan uppercase block">
                  1. Pilih Platform Digital
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {platforms.map((plat) => {
                    const IconComp = plat.icon;
                    const isSelected = selectedPlatform === plat.id;
                    return (
                      <button
                        key={plat.id}
                        onClick={() => setSelectedPlatform(plat.id)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-start space-x-3 cursor-pointer relative group ${
                          isSelected
                            ? 'border-accent-cyan bg-accent-cyan/5 shadow-[0_0_15px_rgba(0,242,254,0.06)]'
                            : 'border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className={`p-2 rounded-xl bg-white/5 border border-white/5 text-accent-cyan flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}>
                          <IconComp size={16} />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white flex items-center justify-between">
                            {plat.title}
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#00f2fe]" />
                            )}
                          </h4>
                          <p className="text-[10px] text-text-secondary leading-relaxed font-light mt-1.5">
                            {plat.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: Theme Selector */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-purple uppercase block">
                  2. Pilih Gaya & Tema Visual
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {themes.map((theme) => {
                    const isSelected = selectedTheme === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                          isSelected
                            ? 'border-accent-purple bg-accent-purple/5 shadow-[0_0_15px_rgba(199,125,255,0.06)]'
                            : 'border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div>
                          <h4 className="text-xs font-bold text-white flex items-center justify-between">
                            {theme.title}
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple glow-purple" />
                            )}
                          </h4>
                          <p className="text-[9px] text-text-secondary leading-relaxed font-light mt-2">
                            {theme.desc}
                          </p>
                        </div>
                        {/* Little color indicator preview */}
                        <div className="w-full h-1 mt-4 rounded-full overflow-hidden bg-white/5">
                          <div className={`h-full bg-gradient-to-r ${theme.accent}`} style={{ width: '40%' }} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: Features Selector */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-blue uppercase block">
                  3. Pasang Fitur Tambahan
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {features.map((feat) => {
                    const IconComp = feat.icon;
                    const isSelected = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer relative group ${
                          isSelected
                            ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_15px_rgba(59,130,246,0.06)]'
                            : 'border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-start justify-between w-full">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-accent-blue flex-shrink-0 group-hover:scale-105 transition-transform">
                            <IconComp size={14} />
                          </div>
                          
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                            isSelected 
                              ? 'border-accent-blue bg-accent-blue text-bg-darker'
                              : 'border-white/10 bg-white/5'
                          }`}>
                            {isSelected && <Check size={10} strokeWidth={3} />}
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                          <p className="text-[9px] text-text-secondary leading-relaxed font-light mt-1">
                            {feat.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Live Mockup Canvas & Estimates Board (lg:span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-bg-darker/60 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-purple/30 to-accent-cyan/30" />
            
            <div className="space-y-6 text-left flex-grow flex flex-col">
              
              {/* Screen Mockup Frame header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono text-text-dim flex items-center space-x-1.5">
                  <Sparkles size={11} className="text-accent-cyan animate-pulse" />
                  <span>PRATINJAU DESAIN PROYEK IMPIAN</span>
                </span>
                
                {/* Simulated window dot icons */}
                <div className="flex items-center space-x-1.5 select-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
              </div>

              {/* Dynamic Interactive Mockup Canvas Container */}
              <div className="relative rounded-2xl border border-white/5 p-4 flex-grow min-h-[220px] max-h-[300px] flex items-center justify-center overflow-hidden transition-all duration-500 bg-[#050714]">
                
                {/* Visual Background Theme Rendering */}
                {selectedTheme === 'cyber' && (
                  <>
                    <div className="absolute inset-0 tech-grid opacity-25" />
                    <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] rounded-full bg-accent-cyan/[0.04] blur-[40px] animate-pulse" />
                    <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%] rounded-full bg-accent-purple/[0.04] blur-[40px] animate-pulse" style={{ animationDelay: '2s' }} />
                  </>
                )}
                {selectedTheme === 'apple' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#1e293b] opacity-80" />
                )}
                {selectedTheme === 'vercel' && (
                  <div className="absolute inset-0 bg-black" />
                )}

                {/* Main Mockup Screen Body */}
                <div className={`w-full max-w-[280px] h-[160px] rounded-xl border border-white/10 p-3 shadow-2xl relative flex flex-col justify-between transition-all duration-500 bg-bg-darker/80 overflow-hidden`}>
                  
                  {/* Subtle Top Bar of Mockup */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 select-none">
                    <span className="text-[7px] font-mono text-text-dim">vizzio-preview.app</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="w-2 h-1 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Inner Content depending on Platform Selector */}
                  <div className="flex-grow flex flex-col justify-center items-center text-center px-2 relative z-10">
                    
                    {selectedPlatform === 'landing' && (
                      <div className="space-y-2">
                        <h5 className="text-[11px] font-black tracking-tight text-white uppercase bg-clip-text bg-gradient-to-r from-accent-cyan to-white">
                          CRAFTING THE FUTURE
                        </h5>
                        <p className="text-[7px] text-text-secondary leading-relaxed font-light">
                          Website kustom modern yang memikat audiens global secara instan.
                        </p>
                        <button className="px-2 py-0.5 text-[6px] font-bold rounded bg-gradient-to-r from-accent-cyan to-accent-purple text-bg-darker tracking-wider uppercase select-none mt-1">
                          Lihat Detail
                        </button>
                      </div>
                    )}

                    {selectedPlatform === 'undangan' && (
                      <div className="space-y-1.5">
                        <div className="w-5 h-5 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple mx-auto animate-pulse">
                          <span>❤️</span>
                        </div>
                        <h5 className="text-[10px] font-bold tracking-tight text-white">
                          The Marriage of Alex & Bella
                        </h5>
                        <p className="text-[7px] text-text-secondary font-mono leading-none">
                          26 OKTOBER 2026 // RSVP OPEN
                        </p>
                        <div className="flex justify-center space-x-1.5 mt-1 select-none">
                          <span className="px-1.5 py-0.5 text-[5px] border border-white/5 rounded text-white bg-white/2">🎵 Play Music</span>
                          <span className="px-1.5 py-0.5 text-[5px] border border-white/5 rounded text-white bg-white/2">📍 Peta Lokasi</span>
                        </div>
                      </div>
                    )}

                    {selectedPlatform === 'dashboard' && (
                      <div className="w-full space-y-2">
                        <div className="flex justify-between items-center text-[7px] font-mono text-text-dim border-b border-white/5 pb-1">
                          <span>RINGKASAN REVENUE</span>
                          <span className="text-emerald-400 font-bold">+28.4%</span>
                        </div>
                        
                        <div className="flex items-end justify-between h-8 px-2 pt-2 gap-1.5">
                          <div className="w-full bg-accent-cyan h-4 rounded-sm animate-pulse" />
                          <div className="w-full bg-accent-purple h-6 rounded-sm animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-full bg-accent-blue h-5 rounded-sm animate-pulse" style={{ animationDelay: '0.4s' }} />
                          <div className="w-full bg-white/10 h-7 rounded-sm" />
                        </div>
                        
                        <div className="flex justify-between text-[6px] font-mono text-text-dim">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                        </div>
                      </div>
                    )}

                    {selectedPlatform === 'mobile' && (
                      <div className="space-y-2">
                        {/* Mobile view inner status bar */}
                        <div className="w-32 h-1 bg-white/10 rounded-full mx-auto" />
                        
                        <div className="space-y-1.5 py-1">
                          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/2 border border-white/5 text-left">
                            <span className="text-[6px] text-text-secondary leading-none">Vizzio Pay wallet</span>
                            <span className="text-[7px] text-white font-bold">$12,450.80</span>
                          </div>
                          
                          <div className="flex justify-center space-x-2 select-none">
                            <span className="w-3.5 h-3.5 rounded-full bg-accent-cyan/10 flex items-center justify-center text-[6px]">💳</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-accent-purple/10 flex items-center justify-center text-[6px]">📊</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-accent-blue/10 flex items-center justify-center text-[6px]">⚙️</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* FLOATING FEATURES OVERLAYS */}
                  {/* AI Floating head */}
                  {selectedFeatures.includes('ai') && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute bottom-2 right-2 p-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/35 text-accent-cyan shadow-[0_0_10px_rgba(0,242,254,0.3)] animate-pulse flex items-center space-x-1"
                    >
                      <Bot size={10} />
                      <span className="text-[5px] font-mono uppercase font-bold tracking-wider pr-1">AI ACTIVE</span>
                    </motion.div>
                  )}

                  {/* Payment Credit Card floating */}
                  {selectedFeatures.includes('payment') && (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="absolute -left-3 top-6 p-1.5 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue border border-white/10 text-white shadow-xl flex flex-col justify-between w-14 h-9 font-mono"
                    >
                      <div className="flex justify-between items-center w-full">
                        <CreditCard size={8} />
                        <span className="text-[3px] text-white/50">VISA</span>
                      </div>
                      <span className="text-[4px] text-white/60 tracking-wider">**** 4026</span>
                    </motion.div>
                  )}

                  {/* Multilingual Flag pill */}
                  {selectedFeatures.includes('multilingual') && (
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute top-2 left-2 px-1 rounded bg-white/5 border border-white/10 text-white text-[5px] font-mono font-bold uppercase select-none flex items-center space-x-0.5"
                    >
                      <Languages size={6} />
                      <span>ID | EN</span>
                    </motion.div>
                  )}

                </div>
              </div>

              {/* SECTION: Investment & release duration details */}
              <div className="grid grid-cols-2 gap-4 font-mono border-t border-white/5 pt-6 mt-4">
                
                {/* Investment cost */}
                <div className="text-left">
                  <span className="text-[9px] text-text-dim block uppercase tracking-wider">ESTIMASI INVESTASI</span>
                  <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white select-all">
                    Rp <AnimatedNumber value={totalPrice} />
                  </span>
                </div>

                {/* Timeline release duration */}
                <div className="text-left">
                  <span className="text-[9px] text-text-dim block uppercase tracking-wider">DURASI PENGERJAAN</span>
                  <span className="text-xl sm:text-2xl font-black text-white select-all">
                    {totalTimeline} Hari Kerja
                  </span>
                </div>

              </div>

            </div>

            {/* SEND TRANSMISSION BUTTON BRIDGING TO CONTACT FORM */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <button
                onClick={handleLockAndSend}
                disabled={isLocked}
                className="w-full group px-6 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-[#020308] border border-accent-cyan/10 font-mono text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.25)] hover:scale-[1.01] cursor-pointer"
              >
                {isLocked ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#020308] animate-ping" />
                    <span>MENGIRIM SPESIFIKASI...</span>
                  </>
                ) : (
                  <>
                    <span>Kunci Spesifikasi & Kirim</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Dynamic Telemetry Sign Off */}
        <div className="mt-16 text-center select-none font-mono text-[9px] text-text-dim tracking-widest uppercase">
          SISTEM PRE-KONFIGURASI PROYEK // VERIFIED BY VIZZIO.CRAFT;
        </div>

      </div>
    </section>
  );
}
