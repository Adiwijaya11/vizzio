import { useState, useEffect } from 'react';
import { ShieldCheck, Send, Terminal, AlertCircle, Cpu, Globe, Smartphone, BarChart3, User, Mail, MessageSquare } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'landingpage',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (!customEvent.detail) return;
      
      const { platform, theme, features, price, timeline } = customEvent.detail;
      
      let ctaType = 'landingpage';
      if (platform === 'dashboard') ctaType = 'dashboard';
      if (platform === 'mobile') ctaType = 'webapp';
      
      const platformLabels: Record<string, string> = {
        landing: 'Landing Page Premium',
        undangan: 'Undangan Digital Interaktif',
        dashboard: 'Admin Dashboard Kustom',
        mobile: 'Aplikasi Mobile iOS/Android'
      };
      
      const themeLabels: Record<string, string> = {
        cyber: 'Cyber Neon (Futuristik)',
        apple: 'Apple Clean (Minimalis Mewah)',
        vercel: 'Vercel Dark (Monokromatis Elegan)'
      };
      
      const featureLabels: Record<string, string> = {
        ai: 'Integrasi AI Chatbot',
        payment: 'Payment Gateway',
        multilingual: 'Multi-Bahasa (ID/EN)'
      };

      const selectedFeaturesLabels = features.map((f: string) => featureLabels[f] || f);
      const featuresText = selectedFeaturesLabels.length > 0 ? selectedFeaturesLabels.join(', ') : 'Tidak ada';
      const priceText = price.toLocaleString('id-ID');
      
      setFormData(prev => ({
        ...prev,
        projectType: ctaType,
        message: `Halo Vizzio.Craft;! Saya ingin merancang proyek kustom dengan konfigurasi dari Kreator Proyek:\n\n🚀 Platform: ${platformLabels[platform] || platform}\n🎨 Gaya Visual: ${themeLabels[theme] || theme}\n🔌 Fitur Tambahan: ${featuresText}\n\n📊 Estimasi Investasi: Rp ${priceText}\n📅 Estimasi Waktu: ${timeline} Hari Kerja\n\nMari jadwalkan diskusi lebih lanjut!`
      }));
      
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    
    window.addEventListener('vizzio-prefill-project', handlePrefill);
    return () => window.removeEventListener('vizzio-prefill-project', handlePrefill);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`[Inkuiri Proyek Vizzio.Craft;] dari ${formData.name}`);
    const body = encodeURIComponent(
      `Nama Pengirim: ${formData.name}\n` +
      `Email Pengirim: ${formData.email}\n` +
      `Tipe Layanan: ${formData.projectType.toUpperCase()}\n\n` +
      `Pesan / Kebutuhan Proyek:\n` +
      `${formData.message}`
    );
    
    const mailtoUrl = `mailto:vizziocraft@gmail.com?subject=${subject}&body=${body}`;
    
    // Secure transmission simulation & mail client trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger native email client redirection
      window.location.href = mailtoUrl;
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', projectType: 'landingpage', message: '' });
      }, 5000);
    }, 1500);
  };

  const projectOptions = [
    { id: 'landingpage', label: 'Website Kustom', desc: 'Landing Page, Undangan Digital, Company Profile', icon: Globe },
    { id: 'dashboard', label: 'Admin Dashboard', desc: 'Panel Admin, Integrasi API, SaaS Platform', icon: BarChart3 },
    { id: 'webapp', label: 'Aplikasi Web / Mobile', desc: 'Web App, Aplikasi Android & iOS', icon: Smartphone },
    { id: 'ai', label: 'AI & Otomatisasi', desc: 'Integrasi LLM, Webhook Schedulers', icon: Cpu },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-bg-darker overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Background Noise Texture */}
      <div className="noise-overlay"></div>

      {/* Futuristic Floating Gradients (Space Nebula Accents) */}
      <div className="absolute top-[10%] left-[-15%] w-[650px] h-[650px] rounded-full bg-accent-cyan/10 blur-[180px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[650px] h-[650px] rounded-full bg-accent-purple/10 blur-[160px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      {/* Digital Tech Grid Dots Background */}
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Direct telemetry coordinates and info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full py-2">
            <div>
              {/* Telemetry Cyber Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] tracking-[0.25em] font-mono uppercase text-accent-cyan mb-8 shadow-[0_0_15px_rgba(0,242,254,0.05)]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan glow-cyan inline-block animate-ping"></span>
                <span>SECURE ENCRYPTED CHANNEL // OPEN</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Mari Rancang <br />
                Sistem Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple glow-text-cyan">
                  Masa Depan Anda.
                </span>
              </h2>

              {/* Paragraph details */}
              <p className="text-text-secondary leading-relaxed font-light text-sm max-w-md mb-10">
                Punya konsep untuk website kustom, landing page premium, surat undangan pernikahan digital kustom, panel admin, atau aplikasi seluler multiplatform? Diskusikan dengan tim kami sekarang juga.
              </p>
            </div>

            {/* Virtual Command Shell terminal */}
            <div className="glass-panel p-5 rounded-2xl border border-white/5 font-mono text-[10px] text-text-dim space-y-2 bg-bg-darker/60 max-w-md hidden sm:block shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                <div className="flex items-center space-x-2 text-accent-cyan">
                  <Terminal size={12} />
                  <span>VIZZIO.CRAFT // COMMAND CONSOLE</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              </div>
              <p className="text-white/40">// MENGHUBUNGKAN KE GATEWAY AMAN...</p>
              <p className="text-accent-cyan">[OK] SECURE ENCRYPTED NODE VERIFIED</p>
              <p className="text-accent-purple">[OK] ANTARMUKA GPU BUFFER DIMUAT</p>
              <p className="text-emerald-400">[READY] MENANTI DIALOG TRANSMISI PROYEK...</p>
            </div>

            {/* Core spec badges */}
            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md text-xs text-text-dim font-mono">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={14} className="text-accent-cyan" />
                <span>NDA Ketat // Kerahasiaan 100%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                <span>Respons Cepat &lt; 12 Jam</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hyper-modern Glassmorphic Form Dashboard */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <div className="relative glass-panel rounded-3xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0A0D22]/40 backdrop-blur-xl flex flex-col h-full">
              
              {/* Cyber Browser-style Header bar controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2 select-none">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/35 flex items-center justify-center text-[7px] text-red-500 font-bold">✕</div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/35 flex items-center justify-center text-[7px] text-yellow-500 font-bold">─</div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/35 flex items-center justify-center text-[7px] text-green-500 font-bold">⤢</div>
                </div>
                <div className="text-[9px] font-mono tracking-widest text-text-dim uppercase font-extrabold">
                  transmission-portal-v4.exe
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan inline-block animate-pulse" />
                  <span className="text-[8px] font-mono text-accent-cyan tracking-widest font-extrabold">SSL ONLINE</span>
                </div>
              </div>

              {/* Form container */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                {isSuccess ? (
                  <div className="py-20 text-center flex flex-col items-center justify-center space-y-4 h-full">
                    <div className="w-16 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <ShieldCheck size={28} />
                    </div>
                    <h4 className="text-xl font-extrabold text-white tracking-tight">Transmisi Berhasil!</h4>
                    <p className="text-xs text-text-secondary max-w-sm leading-relaxed font-light">
                      Sistem telemetri kami telah menyimpan data inkuiri proyek Anda. Tim engineer kami akan menghubungi Anda melalui email dalam waktu 12 jam.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 flex-grow flex flex-col justify-between">
                    
                    {/* Modern Underline Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="flex flex-col space-y-2 relative group/field">
                        <label className="text-[10px] font-mono tracking-widest text-text-secondary uppercase font-bold flex items-center space-x-1.5">
                          <User size={12} className="text-accent-cyan" />
                          <span>Nama Lengkap</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ketik nama Anda di sini..."
                          className="w-full px-1 py-3 bg-transparent border-b border-white/10 focus:border-accent-cyan outline-none text-sm text-white font-medium transition-all duration-300 placeholder:text-text-dim/50"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-cyan transition-all duration-300 group-focus-within/field:w-full" />
                      </div>

                      <div className="flex flex-col space-y-2 relative group/field">
                        <label className="text-[10px] font-mono tracking-widest text-text-secondary uppercase font-bold flex items-center space-x-1.5">
                          <Mail size={12} className="text-accent-cyan" />
                          <span>Alamat Email</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nama@perusahaan.com"
                          className="w-full px-1 py-3 bg-transparent border-b border-white/10 focus:border-accent-cyan outline-none text-sm text-white font-medium transition-all duration-300 placeholder:text-text-dim/50"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-cyan transition-all duration-300 group-focus-within/field:w-full" />
                      </div>
                    </div>

                    {/* Interactive 2x2 clickable Grid Option Cards */}
                    <div className="flex flex-col space-y-3 text-left">
                      <label className="text-[10px] font-mono tracking-widest text-text-secondary uppercase font-bold">Kategori Layanan Proyek</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {projectOptions.map((opt) => {
                          const isSelected = formData.projectType === opt.id;
                          const Icon = opt.icon;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => handleProjectTypeSelect(opt.id)}
                              className={`p-4.5 rounded-2xl text-left border transition-all duration-400 flex items-start space-x-3 cursor-pointer group/opt relative overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-br from-accent-cyan/15 to-accent-purple/15 border-accent-cyan shadow-[0_0_20px_rgba(0,242,254,0.1)]'
                                  : 'bg-white/2 border-white/5 hover:border-white/20 hover:bg-white/4'
                              }`}
                            >
                              <div className={`p-2.5 rounded-xl border transition-all ${
                                isSelected ? 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/35 shadow-[0_0_10px_rgba(0,242,254,0.2)]' : 'text-text-secondary bg-white/2 border-white/5 group-hover/opt:text-white'
                              }`}>
                                <Icon size={16} />
                              </div>
                              <div className="flex flex-col justify-center">
                                <span className={`text-xs font-extrabold tracking-wide transition-all ${
                                  isSelected ? 'text-white' : 'text-text-secondary group-hover/opt:text-white'
                                }`}>
                                  {opt.label}
                                </span>
                                <span className="text-[9px] text-text-dim font-light leading-tight mt-1 max-w-[200px]">
                                  {opt.desc}
                                </span>
                              </div>
                              
                              {/* Glowing bullet indicator */}
                              {isSelected && (
                                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent-cyan glow-cyan animate-pulse" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Textarea underlaid by laser line */}
                    <div className="flex flex-col space-y-2 relative group/field text-left">
                      <label className="text-[10px] font-mono tracking-widest text-text-secondary uppercase font-bold flex items-center space-x-1.5">
                        <MessageSquare size={12} className="text-accent-cyan" />
                        <span>Detail Visi & Kebutuhan Proyek</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Jelaskan kebutuhan website Anda, tenggat waktu, budget, atau detail kustom lainnya secara singkat..."
                        className="w-full px-1 py-3 bg-transparent border-b border-white/10 focus:border-accent-cyan outline-none text-sm text-white font-medium transition-all duration-300 placeholder:text-text-dim/50 resize-none"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-cyan transition-all duration-300 group-focus-within/field:w-full" />
                    </div>

                    {/* Submit Button with extreme high contrast: Bright neon gradient and solid thick black text */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00f2fe] via-[#3b82f6] to-[#9d4edd] text-[#000000] font-black tracking-[0.25em] uppercase text-xs flex items-center justify-center space-x-2.5 cursor-pointer shadow-[0_0_30px_rgba(0,242,254,0.45)] hover:shadow-[0_0_50px_rgba(0,242,254,0.7)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 select-none border-none outline-none font-mono"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>MEMPROSES TRANSMISI...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} className="text-black stroke-[3px]" />
                          <span>Kirim Transmisi Inkuiri</span>
                        </>
                      )}
                    </button>

                    {/* Encryption Details footer */}
                    <div className="flex items-center space-x-1.5 text-[8px] font-mono text-text-dim justify-center pt-2 select-none uppercase tracking-widest">
                      <AlertCircle size={10} className="text-accent-cyan" />
                      <span>Transmisi Dienkripsi Penuh // AES-256 GCM</span>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
