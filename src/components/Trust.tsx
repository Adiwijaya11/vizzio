import { motion } from 'framer-motion';

export default function Trust() {
  // Infinite marquee elements
  const logos = [
    { name: 'Vercel', icon: <span className="font-mono tracking-tighter text-sm font-bold flex items-center"><span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white mr-1.5 inline-block"></span>VERCEL</span> },
    { name: 'Linear', icon: <span className="font-sans tracking-wide text-xs font-semibold uppercase flex items-center"><span className="w-3 h-3 rounded-sm bg-white/20 border border-white/40 mr-1.5 inline-block"></span>L I N E A R</span> },
    { name: 'Framer', icon: <span className="font-mono text-sm font-light flex items-center"><span className="text-white mr-1.5 font-bold">F</span>FRAMER</span> },
    { name: 'Stripe', icon: <span className="font-sans text-sm font-bold tracking-tight italic">stripe</span> },
    { name: 'Raycast', icon: <span className="font-mono text-xs tracking-wider flex items-center font-bold text-white/90">⚡ RAYCAST</span> },
    { name: 'Midjourney', icon: <span className="font-serif text-sm tracking-widest italic">midjourney</span> },
    { name: 'Supabase', icon: <span className="font-mono text-xs font-semibold flex items-center">⚡ supabase</span> },
    { name: 'Prisma', icon: <span className="font-sans text-sm font-extrabold text-white/90 flex items-center">▲ prisma</span> },
  ];

  // Duplicate the logos to create the loop effect
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-12 bg-bg-darker border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Label */}
        <div className="w-full md:w-auto text-left flex-shrink-0">
          <p className="text-[10px] tracking-[0.25em] font-mono uppercase text-accent-cyan mb-1">MITRA TELEMETRI</p>
          <h4 className="text-xs font-bold tracking-wider text-text-dim uppercase">
            Dipercaya oleh pionir teknologi modern
          </h4>
        </div>

        {/* Scrolling Ticker (Framer Motion Loop) */}
        <div className="w-full md:max-w-4xl overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
            className="flex space-x-12 items-center whitespace-nowrap py-2"
          >
            {marqueeLogos.map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center text-text-secondary hover:text-white transition-colors duration-300 select-none grayscale hover:grayscale-0"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
