import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, Target, PenTool, Terminal, Rocket } from 'lucide-react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Track scroll progress of the container to animate the drawing path line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      num: '01',
      title: 'Discovery & Telemetri',
      desc: 'Kami menganalisis posisi pasar Anda, mengaudit sistem yang ada, menetapkan spesifikasi KPI utama, dan menyelaraskan tujuan proyek secara rinci.',
      icon: Compass,
      color: 'text-accent-cyan',
      glow: 'shadow-[0_0_15px_rgba(0,242,254,0.15)]',
      bgGlow: 'bg-accent-cyan/10 border-accent-cyan/20',
    },
    {
      num: '02',
      title: 'Strategi Struktural',
      desc: 'Merumuskan arsitektur teknis berskala tinggi, pemetaan database kustom, efisiensi serverless edge, serta merencanakan skalabilitas API secara terperinci.',
      icon: Target,
      color: 'text-accent-purple',
      glow: 'shadow-[0_0_15px_rgba(157,78,221,0.15)]',
      bgGlow: 'bg-accent-purple/10 border-accent-purple/20',
    },
    {
      num: '03',
      title: 'Desain Futuristik',
      desc: 'Merancang keindahan visual premium tahun 2026. Tipografi modern, gradien neon elegan, efek glassmorphism yang halus, dan animasi yang GPU-friendly.',
      icon: PenTool,
      color: 'text-accent-blue',
      glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]',
      bgGlow: 'bg-accent-blue/10 border-accent-blue/20',
    },
    {
      num: '04',
      title: 'Pengembangan Berkualitas',
      desc: 'Menulis kode modular dengan standar industri tinggi. Membangun performa web tangguh, waktu respons sub-detik, serta struktur state aplikasi yang rapi.',
      icon: Terminal,
      color: 'text-accent-cyan',
      glow: 'shadow-[0_0_15px_rgba(0,242,254,0.15)]',
      bgGlow: 'bg-accent-cyan/10 border-accent-cyan/20',
    },
    {
      num: '05',
      title: 'Verifikasi & Peluncuran',
      desc: 'Melakukan optimasi performa penuh, audit keamanan ganda, deployment serverless di edge global, dan pelacakan telemetri instan saat website live.',
      icon: Rocket,
      color: 'text-accent-purple',
      glow: 'shadow-[0_0_15px_rgba(157,78,221,0.15)]',
      bgGlow: 'bg-accent-purple/10 border-accent-purple/20',
    },
  ];

  return (
    <section
      id="process"
      className="relative py-32 bg-bg-darker overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-24">
          <p className="text-[10px] tracking-[0.3em] font-mono uppercase text-accent-cyan mb-3">
            PROTOKOL ALUR KERJA // TAHAP DEMI TAHAP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Protokol Pengerjaan Kami.
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-light">
            Kami mengikuti siklus pengerjaan yang terstruktur dan detail. Setiap tahapan menjamin hasil kode yang sempurna, presisi, dan aman.
          </p>
        </div>

        {/* Timeline container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Futuristic Center Vertical Line Connector (Desktop) */}
          <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 -translate-x-[1px]" />
          
          {/* Scroll-animated Glow neon line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple -translate-x-[1px] shadow-[0_0_15px_rgba(0,242,254,0.5)]"
          />

          {/* Timeline steps */}
          <div className="space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Outer dot point on the timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[14px] z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border text-[11px] font-mono font-bold ${step.bgGlow} ${step.color} ${step.glow}`}
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Flexible columns layouts (desktop alternating, mobile clean stacked list) */}
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pl-16 md:pl-0">
                    {isEven ? (
                      <>
                        {/* Left side: Card */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
                          className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors md:text-right text-left flex flex-col md:items-end items-start"
                        >
                          <div className={`p-3 rounded-xl bg-white/5 border border-white/5 mb-6 inline-flex ${step.color}`}>
                            <Icon size={20} />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                          <p className="text-xs text-text-secondary leading-relaxed font-light">{step.desc}</p>
                        </motion.div>
                        {/* Right side: Empty cell placeholder for desktop layout consistency */}
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        {/* Left side: Empty cell placeholder for desktop layout consistency */}
                        <div className="hidden md:block" />
                        {/* Right side: Card */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
                          className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors text-left flex flex-col items-start"
                        >
                          <div className={`p-3 rounded-xl bg-white/5 border border-white/5 mb-6 inline-flex ${step.color}`}>
                            <Icon size={20} />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                          <p className="text-xs text-text-secondary leading-relaxed font-light">{step.desc}</p>
                        </motion.div>
                      </>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
