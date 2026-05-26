import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  category: 'material' | 'digital' | 'spatial';
  desc: string;
  img: string;
  specs: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'material' | 'digital' | 'spatial'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Aurelia Desk Sculpture',
      category: 'material',
      desc: 'An exquisite hand-carved desk sculpture constructed from raw black volcanic obsidian and precision-machined brushed brass.',
      img: '/bespoke_material.png',
      specs: 'Obsidian • Brass • 32 x 18 cm',
    },
    {
      id: 2,
      title: 'Helios Investment Portal',
      category: 'digital',
      desc: 'A premium, high-frequency digital trading interface engineered for luxury wealth firms. Built with advanced organic motions.',
      img: '/digital_soul.png',
      specs: 'React • WebGL • Dark UI',
    },
    {
      id: 3,
      title: 'Lumen Studio Sanctuary',
      category: 'spatial',
      desc: 'A minimalist private showroom designed using board-formed architectural concrete, solid timber joints, and brushed brass details.',
      img: '/spatial_craft.png',
      specs: 'Architecture • 140 sqm • Tokyo',
    },
    {
      id: 4,
      title: 'Vespera Obsidian Vessel',
      category: 'material',
      desc: 'A monolithic volcanic stone centerpiece vessel detailed with an organic interior hand-burnished in copper leaf.',
      img: '/bespoke_material.png',
      specs: 'Obsidian • Copper Leaf • Limited Run',
    },
    {
      id: 5,
      title: 'Aether Private Gallery',
      category: 'spatial',
      desc: 'A sculptural modern art pavilion conceptualized to blend seamlessly into nature while keeping micro-climate balance.',
      img: '/spatial_craft.png',
      specs: 'Concrete • Teak • Kyoto',
    },
    {
      id: 6,
      title: 'Verdant Heritage System',
      category: 'digital',
      desc: 'A multi-sensory interactive platform designed for tracking carbon footprint metrics in real time with high aesthetic visuals.',
      img: '/digital_soul.png',
      specs: 'Tailwind • Next.js • Lottie animations',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'material', label: 'Bespoke Material' },
    { id: 'digital', label: 'Digital Soul' },
    { id: 'spatial', label: 'Spatial Craft' },
  ] as const;

  return (
    <section
      id="portfolio"
      className="relative py-28 bg-[#0A0A0C]"
    >
      {/* Background glowing gradient */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-gold/[0.015] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Curated Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
              Selected <span className="font-serif italic text-brand-gold">Masterpieces</span>
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 bg-white/[0.02] border border-white/5 p-1.5 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-brand-gold text-bg-dark font-bold shadow-md shadow-brand-gold/10'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden glass border border-white/5 flex flex-col h-full transition-all duration-500 hover:border-brand-gold/20"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-dark">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Visual Premium Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80"></div>
                
                {/* High-end circular hover tag */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-bg-dark/85 backdrop-blur-sm border border-white/5 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 hover:bg-brand-gold hover:text-bg-dark">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-gold uppercase mb-2">
                  {project.specs}
                </span>
                
                <h3 className="text-xl font-bold tracking-wide text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-text-secondary font-light leading-relaxed flex-grow">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Standard Stamp */}
        <div className="mt-16 text-center">
          <p className="text-xs text-text-secondary tracking-widest uppercase font-light">
            All creations are designed in-house and stamped with the authentic{' '}
            <span className="text-brand-gold font-medium">vizzio.craft</span> mark.
          </p>
        </div>

      </div>
    </section>
  );
}
