export default function Footer() {
  const socialLinks = [
    { 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      href: 'https://www.instagram.com/vizziocraft?igsh=MTAwc2NlbjNkMDRqbg%3D%3D&utm_source=qr' 
    },
    { 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.12 2.27 1.89 3.66 2.18v3.66c-1.39-.03-2.77-.38-3.96-1.1-.28-.18-.54-.38-.78-.6-.05 2.53-.02 5.06-.05 7.59-.09 1.94-.74 3.84-1.89 5.34-1.39 1.76-3.56 2.87-5.8 2.92-2.38.07-4.75-.97-6.07-2.93-1.2-1.83-1.42-4.22-.57-6.23.83-1.93 2.62-3.37 4.71-3.76.09 1.25.1 2.51.02 3.76-1.12.18-2.14.86-2.65 1.86-.54 1.05-.44 2.37.26 3.32.74.96 1.97 1.43 3.16 1.18 1.15-.22 2.08-1.16 2.35-2.3.06-1.33.03-2.66.04-3.99 0-4.04-.02-8.08-.03-12.12z"/>
        </svg>
      ), 
      href: 'https://www.tiktok.com/@vizziocraft.studio?_r=1&_t=ZS-96gAvUtx9zJ' 
    },
    { 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ), 
      href: 'mailto:vizziocraft@gmail.com' 
    },
  ];

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-bg-darker border-t border-white/5 py-20 text-left relative overflow-hidden">
      {/* Background blur halo */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Brand Info */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center space-x-1.5 text-2xl font-bold tracking-tight mb-6 select-none">
              <span className="text-white font-extrabold tracking-wide">Vizzio</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple font-light">
                .Craft;
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan inline-block animate-pulse shadow-[0_0_10px_#00f2fe]" />
            </div>
            
            <p className="text-text-secondary leading-relaxed font-light text-sm max-w-sm mb-8">
              Studio pengembangan digital premium berskala internasional. Kami berfokus pada perancangan website kustom, aplikasi seluler performa tinggi, sistem otomasi, serta edukasi teknologi modern.
            </p>
          </div>

          <div className="flex space-x-4 mb-6 lg:mb-0">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 flex items-center justify-center text-text-dim hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Columns: Links & Status */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Navigation Links */}
          <div className="text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.25em] text-white uppercase mb-6">
              Operasi Studio
            </h4>
            <ul className="space-y-4">
              {[
                { id: 'home', label: 'Beranda Utama' },
                { id: 'about', label: 'Profil Studio' },
                { id: 'services', label: 'Layanan Kustom' },
                { id: 'process', label: 'Alur Protokol' },
                { id: 'showcase', label: 'Rancang Proyek' },
                { id: 'education', label: 'Pembelajaran AI' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-xs font-mono font-semibold tracking-wider text-text-secondary hover:text-accent-cyan transition-colors duration-300 uppercase cursor-pointer focus:outline-none"
                  >
                    // {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Panel */}
          <div className="text-left flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-mono font-bold tracking-[0.25em] text-white uppercase mb-6">
                Node Aktif
              </h4>
              <p className="text-xs font-light text-text-secondary leading-relaxed mb-6 font-mono">
                Lat: Denpasar (8.6705° S)<br />
                Lon: Bali (115.2126° E)<br />
                Menerima inkuiri proyek kustom baru untuk akhir tahun 2026.
              </p>
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-accent-cyan/5 border border-accent-cyan/15 text-[9px] text-accent-cyan font-mono font-bold tracking-widest uppercase self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan glow-cyan animate-ping" />
              <span>Node Telemetri Online</span>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-text-dim font-mono gap-4">
        <span>© {new Date().getFullYear()} VIZZIO.CRAFT; SELURUH PRESISI DIJAGA.</span>
        <span>DIRANCANG & DIKEMBANGKAN OLEH NEON CONCEPTS // P.09</span>
      </div>

    </footer>
  );
}
