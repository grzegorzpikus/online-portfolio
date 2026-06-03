import { useState } from 'react';
import { 
  FolderGit2, 
  FileText, 
  ExternalLink, 
  Lock, 
  Unlock,
  BookOpen, 
  Beaker, 
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileDown
} from 'lucide-react';

/**
 * =========================================================================
 * MEDICINAL CHEMISTRY PROJECT FILES CONFIGURATION
 * =========================================================================
 * Easily edit the titles and add the PDF document links below.
 * 
 * - ACTIVE STATE: Set a real path in 'pdfUrl' (e.g., "/pdfs/lecture_1.pdf" or "assets/lecture_1.pdf")
 * - INACTIVE STATE: Leave 'pdfUrl' as an empty string ""
 * 
 * The system automatically detects this and styles the bar accordingly.
 */
interface ProjectBar {
  number: number;
  title: string;
  pdfUrl: string; // <-- Place your PDF document links here
}

const MEDICINAL_CHEMISTRY_SERIES: ProjectBar[] = [
  {
    number: 1,
    title: "1. Medicinal Chemistry in Drug Discovery",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture1.pdf")
  },
  {
    number: 2,
    title: "2. Organic Synthesis in Medicinal Chemistry",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture2.pdf")
  },
  {
    number: 3,
    title: "3. Molecular Interactions",
    pdfUrl: "articles/Molecular Interactions.pdf" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture3.pdf")
  },
  {
    number: 4,
    title: "4. Pharmacodynamics",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture4.pdf")
  },
  {
    number: 5,
    title: "5. Pharmacokinetics",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture5.pdf")
  },
  {
    number: 6,
    title: "6. Metabolism",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture6.pdf")
  },
  {
    number: 7,
    title: "7. Clearance, Half-life, Volume of Distribution",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture7.pdf")
  },
  {
    number: 8,
    title: "8. Solubility, Permeability, Efflux",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture8.pdf")
  },
  {
    number: 9,
    title: "9. LogP, LE, LLE",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture9.pdf")
  },
  {
    number: 10,
    title: "10. Bioisosteres",
    pdfUrl: "" // <-- PASTE PDF LINK HERE (e.g., "assets/lecture10.pdf")
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleBarClick = (proj: ProjectBar) => {
    if (proj.pdfUrl) {
      window.open(proj.pdfUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="pt-12 pb-24 transition-colors duration-300 pointer-events-auto animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3 shadow-inner">
            <BookOpen className="w-3.5 h-3.5" /> Lecture Series
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans sm:text-4xl">
            Medicinal Chemistry Project Section
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            An interactive module containing ten specialized medicinal chemistry topics.
          </p>
        </div>

        {/* The 10 Interactive Stacked Bars */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {MEDICINAL_CHEMISTRY_SERIES.map((proj, idx) => {
            const isActive = proj.pdfUrl !== "";
            
            return (
              <div
                key={proj.number}
                id={`med-chem-bar-${proj.number}`}
                onClick={() => handleBarClick(proj)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative overflow-hidden w-full px-6 py-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4
                  ${isActive 
                    ? `
                      bg-[#729fcf] hover:bg-[#5b87b7] border-[#5b87b7]/30 text-slate-950 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]
                      dark:bg-[#4a72a0] dark:hover:bg-[#5b87b7] dark:text-white dark:border-[#5b87b7]/20
                    ` 
                    : `
                      bg-slate-100/60 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/80 text-slate-400 dark:text-slate-600 cursor-not-allowed
                    `
                  }
                `}
                title={isActive ? `Click to open ${proj.title} PDF` : `Unit ${proj.number} is currently locked (no PDF link attached)`}
              >
                {/* Active Accent Border Layer */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3169a5]"></div>
                )}

                {/* Left Side: Number and Title */}
                <div className="flex items-center gap-3 lg:gap-4 select-none pr-2">
                  <span className={`
                    text-xs font-mono font-bold flex items-center justify-center w-6 h-6 rounded-lg
                    ${isActive 
                      ? 'bg-slate-950/10 text-slate-950 dark:bg-white/10 dark:text-white' 
                      : 'bg-slate-200/40 text-slate-400 dark:bg-slate-950/20 dark:text-slate-700'
                    }
                  `}>
                    #{proj.number}
                  </span>
                  <span className={`
                    font-sans font-medium text-sm sm:text-base tracking-tight leading-snug
                    ${isActive 
                      ? 'text-slate-950 dark:text-white font-semibold' 
                      : 'text-slate-400 dark:text-slate-600'
                    }
                  `}>
                    {proj.title.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>

                {/* Right Side: Quick Action Status Badge */}
                <div className="shrink-0 flex items-center gap-2">
                  {isActive ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950/10 dark:bg-white/10 text-slate-950 dark:text-sky-100 rounded-xl text-[11px] font-mono font-bold uppercase tracking-wider">
                      <FileDown className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Active PDF</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2.5 py-0.5 bg-slate-250/20 text-slate-400 dark:text-slate-600 rounded-lg text-[10px] font-mono leading-none tracking-wider uppercase">
                      <Lock className="w-3 h-3 text-slate-300 dark:text-slate-800" />
                      <span className="hidden sm:inline">Locked</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
