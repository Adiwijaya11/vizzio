import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$10k - $25k',
    discipline: 'material',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-end server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '$10k - $25k',
        discipline: 'material',
        message: '',
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0A0A0C] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-brand-gold/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 text-left">
            <span className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Direct Channels
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-8">
              Initiate a <br />
              <span className="font-serif italic text-brand-gold">Commission</span>
            </h2>
            
            <p className="text-text-secondary font-light text-base leading-relaxed mb-10">
              Whether you wish to commission a bespoke physical centerpiece for your workspace, design a masterclass digital platform, or collaborate on a spatial pavilion, our doors are open.
            </p>

            {/* Direct Lines */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-300">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Send Inquiry</p>
                  <a href="mailto:studio@vizzio.craft" className="text-sm font-medium text-white hover:text-brand-gold transition-colors duration-300">
                    studio@vizzio.craft
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-300">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Direct Studio Line</p>
                  <a href="tel:+6221588295" className="text-sm font-medium text-white hover:text-brand-gold transition-colors duration-300">
                    +62 (21) 5088-2950
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-300">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Heritage Studio</p>
                  <p className="text-sm font-medium text-white">
                    Suite 404, Heritage Row, Jakarta • Kyoto
                  </p>
                </div>
              </div>
            </div>

            {/* Minimalist Premium Map Placeholder */}
            <div className="glass border border-white/5 rounded-2xl p-6 flex flex-col justify-between aspect-[2/1] relative overflow-hidden group hover:border-brand-gold/15 transition-all duration-500">
              <div className="absolute inset-0 bg-[#121215] opacity-80 pointer-events-none"></div>
              {/* Abstract lines representing maps */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <span className="text-[10px] tracking-widest text-brand-gold font-bold uppercase">
                  Studio Coordinates
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">VIZZIO CRAFT HQ</p>
                  <p className="text-xs text-text-secondary">6°12'S 106°49'E • Elevation 8m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_ease-out]">
                  <div className="p-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold mb-6 animate-pulse">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-serif italic text-brand-gold mb-4">
                    Inquiry Logged Securely
                  </h3>
                  <p className="text-text-secondary max-w-sm font-light text-sm leading-relaxed mb-8">
                    Our curators will carefully review your vision. Expect a personalized response and invitation within one business day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-white/10 text-xs text-white tracking-widest uppercase hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="border-b border-white/5 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-1">
                      Briefing Document
                    </h3>
                    <p className="text-xs text-text-secondary font-light">
                      Outline your parameters below and we will orchestrate the details.
                    </p>
                  </div>

                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Alexander Mercer"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., alexander@mercer.com"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Company & Budget Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
                        Studio / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g., Mercer & Co."
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
                        Project Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#121214] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors duration-300"
                      >
                        <option value="$10k - $25k">$10k - $25k USD</option>
                        <option value="$25k - $50k">$25k - $50k USD</option>
                        <option value="$50k - $100k">$50k - $100k USD</option>
                        <option value="$100k+">$100k+ USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Discipline / Medium selection */}
                  <div className="flex flex-col space-y-2.5">
                    <label className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
                      Selected Craft Discipline
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['material', 'digital', 'spatial'] as const).map((disp) => (
                        <button
                          key={disp}
                          type="button"
                          onClick={() => setFormData({ ...formData, discipline: disp })}
                          className={`py-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                            formData.discipline === disp
                              ? 'bg-brand-gold/10 border-brand-gold text-brand-gold'
                              : 'bg-white/[0.01] border-white/5 text-text-secondary hover:border-white/10 hover:text-white'
                          }`}
                        >
                          {disp === 'material' ? 'Material' : disp === 'digital' ? 'Digital' : 'Spatial'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Vision textarea */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
                      Describe the Vision
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail the materials, aesthetic values, and scale of your creative requirements..."
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-brand-gold text-bg-dark font-semibold tracking-widest uppercase text-xs hover:bg-brand-gold-hover transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_10px_20px_rgba(212,175,55,0.1)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)] cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Transmit Briefing'}</span>
                    {!isSubmitting && <ArrowRight size={14} />}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
