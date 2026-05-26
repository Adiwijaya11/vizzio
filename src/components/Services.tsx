import { motion } from 'framer-motion';
import { Code, Smartphone, Layers, Cpu, Sparkles, Compass, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Pembuatan Website Kustom',
      desc: 'Kami membuat website kustom apa pun mulai dari landing page premium, surat undangan digital (undangan pernikahan/event), hingga dashboard admin enterprise yang kompleks dengan integrasi data real-time.',
      icon: Code,
      accent: 'group-hover:border-accent-cyan/30 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]',
      iconColor: 'text-accent-cyan',
      glow: 'from-accent-cyan/20 to-transparent',
    },
    {
      title: 'Pengembangan Aplikasi',
      desc: 'Pembuatan aplikasi mobile native (iOS & Android) dan web app interaktif dengan render tree kustom, sinkronisasi offline, dan performa super smooth.',
      icon: Smartphone,
      accent: 'group-hover:border-accent-purple/30 group-hover:shadow-[0_0_20px_rgba(157,78,221,0.15)]',
      iconColor: 'text-accent-purple',
      glow: 'from-accent-purple/20 to-transparent',
    },
    {
      title: 'Desain UI/UX Premium',
      desc: 'Sistem desain Figma profesional terstruktur dengan visual hierarchy tinggi. Fokus pada tata letak responsif, micro-animations, dan kemudahan navigasi.',
      icon: Layers,
      accent: 'group-hover:border-accent-blue/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      iconColor: 'text-accent-blue',
      glow: 'from-accent-blue/20 to-transparent',
    },
    {
      title: 'Otomatisasi & Integrasi',
      desc: 'Menghilangkan pekerjaan manual yang berulang. Kami membangun background workers kustom, penjadwalan otomatis, dan webhooks API untuk mempercepat bisnis Anda.',
      icon: Cpu,
      accent: 'group-hover:border-accent-cyan/30 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]',
      iconColor: 'text-accent-cyan',
      glow: 'from-accent-cyan/20 to-transparent',
    },
    {
      title: 'Integrasi Kecerdasan Buatan (AI)',
      desc: 'Menghubungkan aplikasi Anda dengan pipeline LLM modern, semantic search, dan kecerdasan buatan kustom untuk pengambilan keputusan otomatis.',
      icon: Sparkles,
      accent: 'group-hover:border-accent-purple/30 group-hover:shadow-[0_0_20px_rgba(157,78,221,0.15)]',
      iconColor: 'text-accent-purple',
      glow: 'from-accent-purple/20 to-transparent',
    },
    {
      title: 'Identitas & Branding Digital',
      desc: 'Membangun identitas visual digital, pedoman tipografi kustom, dan materi peluncuran produk premium berskala internasional.',
      icon: Compass,
      accent: 'group-hover:border-accent-blue/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      iconColor: 'text-accent-blue',
      glow: 'from-accent-blue/20 to-transparent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-bg-darker overflow-hidden"
    >
      {/* Background neon glows */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent-blue/4 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent-purple/4 blur-[150px] pointer-events-none"></div>
      
      {/* Tiny dot background pattern */}
      <div className="absolute inset-0 tech-grid-dots opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-20">
          <p className="text-[10px] tracking-[0.3em] font-mono uppercase text-accent-cyan mb-3">
            KAPABILITAS KAMI // CAP 01
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Layanan Kustom. Dirancang untuk Dampak Maksimal.
          </h2>
          <p className="text-text-secondary leading-relaxed font-light text-base max-w-xl">
            Kami bekerja di persimpangan antara desain visual tingkat tinggi dan kode berkualitas. Setiap produk yang kami rilis dioptimalkan untuk kecepatan, keunggulan estetika, dan skalabilitas tinggi.
          </p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative glass-panel-interactive rounded-2xl p-8 text-left hover-glow-card flex flex-col justify-between overflow-hidden cursor-pointer ${service.accent}`}
              >
                {/* Radial color backdrop fade on hover */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.glow} blur-2xl group-hover:scale-150 transition-transform duration-500 rounded-full`} />

                <div>
                  {/* Icon Block */}
                  <div className={`inline-flex p-3.5 rounded-xl bg-white/5 border border-white/5 mb-8 ${service.iconColor} group-hover:bg-white/10 transition-all duration-300`}>
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-white mb-4 group-hover:text-accent-cyan transition-colors duration-300 flex items-center justify-between">
                    <span>{service.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-light leading-relaxed text-text-secondary group-hover:text-white/80 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>

                {/* Cyber arrow anchor */}
                <div className="mt-8 flex justify-end">
                  <span className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-text-dim group-hover:text-white group-hover:border-accent-cyan/30 transition-all duration-300">
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
