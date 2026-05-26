import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, CheckCircle, Search, Play, BookOpenCheck, Terminal, Award } from 'lucide-react';

interface Article {
  id: number;
  category: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  accent: string;
  badgeColor: string;
  glow: string;
  fullContent: string[];
  takeaways: string[];
  codeLanguage: string;
  codeSnippet: string;
}

export default function Education() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<'all' | 'prompt' | 'agent' | 'local'>('all');

  const articles: Article[] = [
    {
      id: 1,
      category: 'Rekayasa Prompt',
      title: 'Prompt Engineering Tingkat Lanjut untuk Model LLM Modern',
      desc: 'Menguasai pemetaan context window, few-shot prompting, chain-of-thought, dan optimasi instruksi sistem untuk meminimalkan halusinasi AI.',
      date: '24 Mei 2026',
      readTime: 'Baca 6 mnt',
      accent: 'border-accent-cyan/20 group-hover:border-accent-cyan/40',
      badgeColor: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
      glow: 'shadow-[0_0_20px_rgba(0,242,254,0.02)] hover:shadow-[0_0_30px_rgba(0,242,254,0.15)]',
      fullContent: [
        'Prompt Engineering bukan sekadar mengetik pertanyaan biasa ke chatbot. Di era AI agen otonom tahun 2026, ini adalah metode pemrograman deklaratif tingkat tinggi yang mengontrol sistem kognitif mesin.',
        'Salah satu teknik terpenting adalah **Chain-of-Thought (CoT)**. Dengan menginstruksikan model untuk "berpikir selangkah demi selangkah" sebelum memberikan jawaban, kita memaksa LLM untuk membuat pohon penalaran internal. Hasil pengujian menunjukkan bahwa hal ini mengurangi tingkat halusinasi data hingga 84% pada tugas-tugas matematis dan logis yang kompleks.',
        'Teknik krusial lainnya adalah **Few-Shot Prompting**. Memberikan 3-5 contoh input-output terstruktur di dalam instruksi sistem membantu menyelaraskan gaya bahasa, nada bicara, serta format keluaran (misalnya skema JSON yang ketat) tanpa memerlukan fine-tuning model yang mahal.',
        'Di Vizzio.Craft;, kami menerapkan protokol rekayasa prompt khusus yang terintegrasi langsung pada API gateway untuk menjamin stabilitas keluaran agen AI dalam memproses sistem data bisnis klien secara aman.'
      ],
      takeaways: [
        'Chain-of-Thought mengurangi tingkat halusinasi LLM hingga 84% pada pemecahan logika kompleks.',
        'Few-Shot Prompting mengajari model mengenai format skema data JSON yang kaku secara instan.',
        'System Instructions bertindak sebagai batasan hukum kognitif bagi keselamatan operasional Agen AI.'
      ],
      codeLanguage: 'python',
      codeSnippet: `def generate_structured_cot_prompt(user_query: str) -> str:
    # Advanced System Prompt with CoT & strict JSON Schema
    system_instruction = """
    Kamu adalah Agen Kognitif Vizzio.Craft; v4.
    Gunakan mekanisme Chain-of-Thought (CoT):
    1. Analisis intent pengguna secara mendalam.
    2. Dekonstruksi langkah pemecahan masalah secara logis.
    3. Ekstraksi kesimpulan ke format JSON yang valid.
    
    Output JSON Wajib:
    {
      "reasoning_steps": ["Langkah 1...", "Langkah 2..."],
      "confidence_score": 0.98,
      "result_payload": {"data": "hasil"}
    }
    """
    return f"[SYSTEM]: {system_instruction}\\n[USER]: {user_query}"`
    },
    {
      id: 2,
      category: 'Agen Otonom',
      title: 'Membangun Agen AI Otonom di Loop Serverless Edge',
      desc: 'Deep dive arsitektur agen pintar yang mampu merencanakan langkah mandiri, menggunakan alat eksternal, dan mengeksekusi otomatisasi tugas di edge.',
      date: '18 Mei 2026',
      readTime: 'Baca 8 mnt',
      accent: 'border-accent-purple/20 group-hover:border-accent-purple/40',
      badgeColor: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
      glow: 'shadow-[0_0_20px_rgba(157,78,221,0.02)] hover:shadow-[0_0_30px_rgba(157,78,221,0.15)]',
      fullContent: [
        'Agen Otonom (Agentic Workflows) menandai pergeseran besar dalam otomatisasi teknologi. Alih-alih mengeksekusi alur kerja kaku berbasis aturan API statis, agen AI bertindak sebagai pemecah masalah yang dinamis.',
        'Arsitektur agen pintar terdiri dari empat pilar utama: **Profil Agen, Memori (Sensori & Memori Jangka Panjang via Vector Database), Alat Bantu (Tools/APIs), dan Mekanisme Perencanaan (Planning)**.',
        'Ketika sebuah tugas diterima, agen AI akan menggunakan modul Perencanaan untuk merumuskan langkah-langkah kerja secara mandiri. Ia dapat memanggil alat eksternal seperti mesin pencari web, interpreter kode Python, atau webhook database untuk mengumpulkan informasi. Ini sangat cocok diimplementasikan pada loop serverless edge karena memberikan latensi respons ultra-rendah (< 15ms) dekat dengan pengguna.',
        'Dengan mengintegrasikan Agen AI Otonom kustom pada sistem operasional bisnis, kami membantu perusahaan mengotomatisasi inkuiri layanan pelanggan, analisis dokumen keuangan otomatis, hingga pemantauan server serverless secara mandiri.'
      ],
      takeaways: [
        'Agen AI beroperasi melalui siklus dinamis: Menganalisis, Merencanakan, Memanggil Alat, Mengevaluasi.',
        'Integrasi Vector Database memberikan "memori jangka panjang" bagi Agen untuk melacak sesi pengguna.',
        'Eksekusi di serverless edge memangkas latensi keputusan kognitif hingga di bawah 15 milidetik.'
      ],
      codeLanguage: 'javascript',
      codeSnippet: `// Serverless Edge AI Agentic Loop implementation
async function executeAgenticLoop(request) {
  const agent = new VizzioAgent({
    model: "llama-3-edge-v4",
    memory: new VectorLongTermMemory("chroma-db-url"),
    tools: [webSearchTool, databaseWebhookTool, codeSandboxRunner]
  });

  // Formulate task execution plan autonomously
  const plan = await agent.formulatePlan(request.task);
  let status = "IN_PROGRESS";
  
  for (const step of plan.steps) {
    const result = await agent.executeStep(step);
    if (result.failed) {
      status = "ROLLBACK_INITIATED";
      await agent.repairState(step.error);
      break;
    }
  }
  return { status: "COMPLETED", latencyMs: 14 };
}`
    },
    {
      id: 3,
      category: 'Model AI Lokal',
      title: 'Integrasi Model AI Lokal untuk Privasi Data Maksimal',
      desc: 'Panduan lengkap menjalankan dan mengintegrasikan model AI open-source lokal (Llama 3, DeepSeek) secara offline demi keamanan database internal.',
      date: '12 Mei 2026',
      readTime: 'Baca 5 mnt',
      accent: 'border-accent-blue/20 group-hover:border-accent-blue/40',
      badgeColor: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.02)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      fullContent: [
        'Kekhawatiran terbesar perusahaan dalam mengadopsi teknologi AI adalah privasi data. Mengirimkan dokumen sensitif perusahaan, data nasabah, atau rahasia dagang ke server pihak ketiga melalui API publik memiliki risiko kebocoran data yang tinggi.',
        'Solusinya adalah **Model AI Lokal**. Dengan memanfaatkan model open-source berkinerja tinggi seperti Llama 3 atau DeepSeek-Coder yang dijalankan di server lokal (on-premise atau private VPC), data Anda dijamin tidak pernah keluar dari perimeter keamanan perusahaan.',
        'Dengan teknik kuantisasi model (seperti GGUF / AWQ), model AI skala besar kini dapat berjalan dengan sangat cepat pada hardware server GPU menengah tanpa mengurangi kecerdasan analisis secara drastis.',
        'Vizzio.Craft; merancang arsitektur khusus untuk menghubungkan database rahasia Anda dengan model AI lokal ini melalui sistem RAG (Retrieval-Augmented Generation) yang aman, memastikan karyawan Anda dapat berdialog dengan data internal secara instan, aman, dan tanpa biaya sewa API bulanan.'
      ],
      takeaways: [
        'Model lokal on-premise menjamin 100% kepatuhan data rahasia tanpa kebocoran API.',
        'Teknik Kuantisasi (GGUF) memotong penggunaan VRAM GPU hingga 60% dengan performa tetap tajam.',
        'Integrasi RAG internal menyajikan data akurat real-time tanpa resiko pelatihan ulang model.'
      ],
      codeLanguage: 'bash',
      codeSnippet: `# Menjalankan model Llama 3 terkuantisasi via Llama.cpp di private server
./llama-cli \\
  --model ./models/llama-3-8b-instruct.Q4_K_M.gguf \\
  --ctx-size 8192 \\
  --threads 8 \\
  --n-gpu-layers 33 \\
  --prompt "<|system|>Kamu adalah AI Lokal Internal Klien Vizzio.Craft;<|user|>Analisis data finansial..." \\
  --temp 0.2`
    }
  ];

  // Simulated AI Academy Courses with Categories for precise filtering
  const academyCourses = [
    { title: 'Dasar Pemrograman Agen AI', level: 'Pemula', duration: '4 Jam', progress: 100, category: 'agent' },
    { title: 'Prompt Engineering & Skema JSON', level: 'Menengah', duration: '6 Jam', progress: 85, category: 'prompt' },
    { title: 'Vector Database & Semantic Search', level: 'Menengah', duration: '8 Jam', progress: 40, category: 'local' },
    { title: 'Fine-Tuning Llama 3 On-Premise', level: 'Lanjutan', duration: '12 Jam', progress: 0, category: 'local' },
    { title: 'Otomatisasi Webhook via Agen Pintar', level: 'Lanjutan', duration: '10 Jam', progress: 0, category: 'agent' },
    { title: 'Optimasi Context Window & Tokenizer', level: 'Menengah', duration: '5 Jam', progress: 0, category: 'prompt' },
  ];

  // Filter courses by both search query AND selected category tab
  const filteredCourses = academyCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.level.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = selectedCategoryTab === 'all' || course.category === selectedCategoryTab;
    return matchesSearch && matchesTab;
  });

  // Prevent background scroll when modals are open
  useEffect(() => {
    if (selectedArticle || isExplorerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle, isExplorerOpen]);

  return (
    <section
      id="education"
      className="relative py-32 bg-bg-darker overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Background Nebula Glow */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent-cyan/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-xl text-left">
            <p className="text-[10px] tracking-[0.3em] font-mono uppercase text-accent-purple mb-3">
              VIZZIO.AI ACADEMY // PEMBELAJARAN AI & TEKNOLOGI
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Pembelajaran AI & Jurnal Riset.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Kami tidak hanya membangun sistem pintar, kami juga mendidik dan berbagi. Jelajahi jurnal riset teknis terbaru, tutorial rekayasa prompt tingkat lanjut, dan pemahaman arsitektur agen kecerdasan buatan (AI) yang kami rilis secara berkala untuk memandu masa depan bisnis Anda.
            </p>
          </div>
          
          {/* Concept explorer trigger */}
          <button 
            onClick={() => setIsExplorerOpen(true)}
            className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-accent-cyan border-b border-accent-cyan/30 pb-1 hover:border-accent-cyan transition-all duration-300 group cursor-pointer"
          >
            <span>Lihat Semua Pembelajaran</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Insights/Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedArticle(blog)}
              className={`group glass-panel-interactive rounded-2xl p-6 border flex flex-col justify-between cursor-pointer ${blog.accent} ${blog.glow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase border ${blog.badgeColor}`}>
                    {blog.category}
                  </span>
                  <div className="flex items-center space-x-3 text-text-dim text-[10px] font-mono">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1 text-text-dim" />
                      {blog.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-4 leading-snug group-hover:text-accent-cyan transition-colors duration-300 text-left">
                  {blog.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed font-light text-left mb-6">
                  {blog.desc}
                </p>
              </div>

              {/* Bottom Card Bar */}
              <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                <span className="flex items-center text-[10px] font-mono text-text-dim">
                  <Clock size={12} className="mr-1" />
                  {blog.readTime}
                </span>
                
                <span className="text-[10px] font-bold tracking-widest uppercase text-white group-hover:text-accent-cyan flex items-center space-x-1.5 transition-colors duration-300">
                  <span>Baca Artikel</span>
                  <BookOpen size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* POP-UP MODAL ARTICLE DETAIL (AnimatePresence) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-[#050714]/85 backdrop-blur-md"
            />
            
            {/* Modal Body Window */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden bg-bg-darker/90 max-h-[85vh] flex flex-col"
            >
              {/* Decorative top laser line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple" />

              {/* Modal Header controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase border ${selectedArticle.badgeColor}`}>
                    {selectedArticle.category}
                  </span>
                  <span className="text-[9px] font-mono text-text-dim">// DOKUMEN RISET INTEREN</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/5 hover:border-red-500/30 hover:text-red-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Scrollable Article Content */}
              <div className="p-8 overflow-y-auto text-left space-y-8 flex-grow">
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-[10px] font-mono text-text-dim">
                  <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> {selectedArticle.date}</span>
                  <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {selectedArticle.readTime}</span>
                  <span className="text-accent-cyan font-bold tracking-pulse">// STATUS: TERVERIFIKASI</span>
                </div>

                {/* Article title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h3>

                {/* Paragraphs body */}
                <div className="space-y-4 text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                  {selectedArticle.fullContent.map((para, pIdx) => (
                    <p key={pIdx} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>

                {/* Key Takeaways Section */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <div className="flex items-center space-x-2 text-white">
                    <CheckCircle size={16} className="text-accent-cyan" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase">Poin Pembelajaran Kunci</span>
                  </div>
                  <ul className="space-y-3">
                    {selectedArticle.takeaways.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3 text-xs text-text-secondary font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real Code Snippet Block */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-text-dim">
                    <span className="flex items-center space-x-1.5">
                      <Terminal size={12} className="text-accent-purple" />
                      <span>{selectedArticle.codeLanguage.toUpperCase()} IMPLEMENTATION MOCKUP</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">READONLY</span>
                  </div>
                  
                  <div className="rounded-2xl border border-white/5 bg-bg-dark overflow-hidden font-mono text-[11px] leading-relaxed relative">
                    {/* Header dots */}
                    <div className="flex items-center space-x-1.5 px-4 py-3 bg-white/2 border-b border-white/5 select-none">
                      <span className="w-2 h-2 rounded-full bg-red-500/50" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <span className="w-2 h-2 rounded-full bg-green-500/50" />
                      <span className="text-[9px] text-text-dim ml-2">vizzio-core-snippet.{selectedArticle.codeLanguage === 'javascript' ? 'js' : selectedArticle.codeLanguage === 'bash' ? 'sh' : 'py'}</span>
                    </div>
                    {/* Code lines */}
                    <pre className="p-5 overflow-x-auto text-text-secondary custom-scrollbar select-all">
                      <code>{selectedArticle.codeSnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Secure monograph block */}
                <div className="pt-6 border-t border-white/5 flex items-center space-x-3 text-[10px] font-mono text-text-dim">
                  <Sparkles size={14} className="text-accent-cyan animate-pulse" />
                  <span>VIZZIO.AI ACADEMY SECURE ARCHIVE // INDEX-REF-0{selectedArticle.id}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INTERACTIVE COURSE EXPLORER OVERLAY MODAL */}
      <AnimatePresence>
        {isExplorerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExplorerOpen(false)}
              className="absolute inset-0 bg-[#050714]/85 backdrop-blur-md"
            />

            {/* Modal Body Window */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden bg-bg-darker/90 max-h-[85vh] flex flex-col"
            >
              {/* Laser line header */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple" />

              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
                <div className="flex items-center space-x-2 text-white">
                  <BookOpenCheck size={16} className="text-accent-cyan" />
                  <span className="text-xs font-mono font-bold tracking-wider">VIZZIO AI CONSOLE TERMINAL</span>
                </div>
                <button
                  onClick={() => setIsExplorerOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/5 hover:border-red-500/30 hover:text-red-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Academy Explorer Dashboard */}
              <div className="p-8 overflow-y-auto text-left flex flex-col space-y-6 flex-grow">
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Konsol Pembelajaran AI</h3>
                  <p className="text-xs text-text-secondary font-light">
                    Katalog lengkap kurikulum, tutorial rekayasa prompt tingkat lanjut, dan riset internal AI Vizzio.Craft;. Gunakan tab filter kategori atau kolom pencarian untuk memetakan modul belajar Anda.
                  </p>
                </div>

                {/* Filters & Search Control Row */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                  {/* Tabs Category Filter */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/2 border border-white/5 self-start">
                    {[
                      { id: 'all', label: 'Semua' },
                      { id: 'prompt', label: 'Prompting' },
                      { id: 'agent', label: 'Agen AI' },
                      { id: 'local', label: 'Model Lokal' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedCategoryTab(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                          selectedCategoryTab === tab.id
                            ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-darker font-extrabold shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                            : 'text-text-secondary hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Search input */}
                  <div className="relative flex-grow max-w-xs">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim w-3.5 h-3.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari modul (Mis: prompt, RAG)..."
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/2 border border-white/5 focus:border-accent-cyan outline-none text-[10px] text-white transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Course Catalog Grid */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-[0.2em] text-accent-cyan uppercase">
                    <span>Modul Kurikulum AI ({filteredCourses.length})</span>
                    <span className="text-text-dim text-[8px]">TERKLASIFIKASI SECURE</span>
                  </div>
                  
                  {filteredCourses.length === 0 ? (
                    <div className="py-12 text-center text-xs text-text-dim font-mono border border-dashed border-white/5 rounded-2xl">
                      [KOSONG] Tidak ada modul riset yang cocok dengan kriteria pencarian Anda.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredCourses.map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-accent-cyan/20 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3 text-[9px] font-mono">
                              <span className={`px-2 py-0.5 rounded border ${
                                course.level === 'Pemula' ? 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5' :
                                course.level === 'Menengah' ? 'text-accent-blue border-accent-blue/20 bg-accent-blue/5' :
                                'text-accent-purple border-accent-purple/20 bg-accent-purple/5'
                              }`}>{course.level}</span>
                              <span className="text-text-dim">Durasi: {course.duration}</span>
                            </div>
                            <h5 className="text-xs font-bold text-white leading-tight mb-4">{course.title}</h5>
                          </div>

                          {/* Progress bar details */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-[8px] font-mono text-text-dim uppercase">
                              <span>Kemajuan Belajar</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                            
                            <div className="pt-2 flex justify-end">
                              <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-accent-cyan/35 text-[9px] font-bold text-white hover:text-accent-cyan tracking-wider uppercase flex items-center space-x-1 transition-all duration-300">
                                <Play size={8} className="fill-current" />
                                <span>{course.progress === 100 ? 'Review' : course.progress > 0 ? 'Lanjutkan' : 'Mulai'}</span>
                              </button>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cyber Academy Certificate Badge Mock */}
                <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/15 flex items-center justify-between font-mono">
                  <div className="flex items-center space-x-3 text-left">
                    <Award size={18} className="text-accent-cyan" />
                    <div>
                      <h6 className="text-[10px] text-white font-bold uppercase">Sertifikasi Rekayasa Kognitif AI</h6>
                      <p className="text-[8px] text-text-dim">Dapatkan sertifikat resmi dari Vizzio setelah merampungkan 100% modul.</p>
                    </div>
                  </div>
                  <span className="text-[8px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white select-none">TERKUNCI</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </section>
  );
}
