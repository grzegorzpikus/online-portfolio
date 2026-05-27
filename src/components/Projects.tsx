import { useState } from 'react';
import { FolderGit2, FileText, LineChart, ExternalLink, Beaker, Binary, Calendar, Database, FileDown, Eye, Terminal } from 'lucide-react';

/**
 * =========================================================================
 * PROJECTS ARCHITECTURE & DATA STRUCTURING
 * =========================================================================
 * To add, edit, or remove projects, simply modify the two arrays below.
 * The UI will automatically refresh, hiding the empty-state placeholders
 * and rendering your research cards beautifully.
 */

// ==========================================
// 1. MEDICINAL CHEMISTRY PROJECTS
// ==========================================
export interface MedChemProject {
  title: string;       // Name of your project or research paper
  pdfUrl: string;      // Absolute path or link to your PDF document (e.g. "/pdfs/my_paper.pdf")
  comments: string;    // Custom scientific commentary and project summary
  date?: string;       // Optional date/period (e.g. "2025")
  tags?: string[];     // Optional technology/method tags
}

export const MEDICINAL_CHEMISTRY_PROJECTS: MedChemProject[] = [
  /* Uncomment and fill this template to add your first project:
  {
    title: "Design and Synthesis of Novel Kinase Inhibitors for Oncology Targets",
    pdfUrl: "/pdfs/kinase_inhibitor_synthesis.pdf",
    comments: "Initiated a hit-to-lead campaign targeting CDK9. Synthesised a library of 24 novel aminopyrimidine derivatives. Successfully optimized IC50 from micromolar to low nanomolar range while improving microsomal metabolic stability (t1/2 > 45 min). This work demonstrates an optimized high-throughput Suzuki-Miyaura coupling protocol conducted under mild organic phase conditions.",
    date: "2025",
    tags: ["Lead Optimization", "Heterocyclic Synthesis", "Structure-Activity Relationship"]
  }
  */
];

// ==========================================
// 2. CHEMINFORMATICS PROJECTS
// ==========================================
export interface CheminformaticsProject {
  title: string;       // Workflow, analysis, or model name 
  imageUrl: string;    // Image/plot path (e.g. "/img/pca_plot.png" or online image URL)
  comments: string;    // Detailed observations, findings, and data science insights
  date?: string;       // Optional date/period (e.g. "2026")
  tags?: string[];     // Optional tools/languages used (e.g. ["Python", "RDKit", "Scikit-Learn"])
}

export const CHEMINFORMATICS_PROJECTS: CheminformaticsProject[] = [
  /* Uncomment and fill this template to add your first analysis showcase:
  {
    title: "Ensemble Clustering & PCA Mapping of FAAH Inhibitors",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80", // Replace with your plot file path
    comments: "Performed dimensionality reduction and chemical space analysis on 400+ active FAAH ligands retrieved from ChEMBL. Generated Morgan fingerprints (radius=2, 2048-bit) using RDKit and cluster analyzed the structures using K-means. Main findings reveal a distinct sub-cluster characterized by piperidine ureas associated with superior computational aqueous solubility metrics.",
    date: "2026",
    tags: ["Python", "RDKit", "scikit-learn", "t-SNE"]
  }
  */
];


export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'medchem' | 'cheminfo'>('all');

  const hasMedChem = MEDICINAL_CHEMISTRY_PROJECTS.length > 0;
  const hasChemInfo = CHEMINFORMATICS_PROJECTS.length > 0;
  const hasAnyProjects = hasMedChem || hasChemInfo;

  return (
    <section id="projects" className="pt-12 pb-20 transition-colors duration-300 pointer-events-auto animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3 shadow-inner">
            <FolderGit2 className="w-3.5 h-3.5" /> Research Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Showcase of projects split into medicinal chemistry and data-driven computational visualizations.
          </p>
        </div>

        {/* Navigation Tabs (Only rendered when there are active projects to filter) */}
        {hasAnyProjects && (
          <div className="flex flex-wrap bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-850/60 self-start mb-10 w-fit gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white dark:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('medchem')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'medchem'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Beaker className="w-3.5 h-3.5" /> Medicinal Chemistry
            </button>
            <button
              onClick={() => setActiveTab('cheminfo')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'cheminfo'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Binary className="w-3.5 h-3.5" /> Cheminformatics
            </button>
          </div>
        )}

        {/* Global Empty State Template */}
        {!hasAnyProjects && (
          <div className="bg-white/40 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-850 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-6">
              <Database className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
              Research Library Coming Soon
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
              The project repository is structurally integrated and ready. New medicinal chemistry studies and cheminformatics workflows will appear here shortly as entries are committed.
            </p>
            
            {/* Quick Helper block for User */}
            <div className="bg-slate-50/80 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 p-5 rounded-xl text-left font-mono text-xs text-slate-500 dark:text-slate-400">
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" /> Developer Integration Guide
              </p>
              <p className="mb-2">Open <code className="text-slate-700 dark:text-slate-300 font-bold bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">src/components/Projects.tsx</code> and locate the variables:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
                <li><code className="text-emerald-700 dark:text-emerald-400">MEDICINAL_CHEMISTRY_PROJECTS</code> (for PDFs & comments)</li>
                <li><code className="text-blue-700 dark:text-blue-400">CHEMINFORMATICS_PROJECTS</code> (for Plots & data analyses)</li>
              </ul>
              <p className="text-[11px] leading-relaxed">
                Add your project items to these arrays. Once filled, this placeholder card will automatically transition into a responsive dual-track dashboard display.
              </p>
            </div>
          </div>
        )}

        {/* Active Content Grid (Columns appear if projects are present) */}
        {hasAnyProjects && (
          <div className="space-y-16">
            
            {/* Subsection 1: Medicinal Chemistry */}
            {(activeTab === 'all' || activeTab === 'medchem') && (
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Beaker className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      Medicinal Chemistry Portfolio
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Synthesis library, molecular targeting campaigns and PDF research records.
                    </p>
                  </div>
                </div>

                {!hasMedChem ? (
                  <div className="text-xs font-mono text-slate-400 bg-slate-50/50 dark:bg-slate-950/20 py-8 px-4 border border-dashed border-slate-200 dark:border-slate-850 rounded-lg text-center">
                    No medicinal chemistry projects published yet. Click "Developer Integration Guide" above to populate list.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MEDICINAL_CHEMISTRY_PROJECTS.map((proj, idx) => (
                      <div 
                        key={idx}
                        className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-900 shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-400/30 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h4 className="font-bold text-base text-slate-900 dark:text-white tracking-tight hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                              {proj.title}
                            </h4>
                            {proj.date && (
                              <span className="shrink-0 flex items-center gap-1 text-[10px] bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-mono py-1 px-2 rounded-md">
                                <Calendar className="w-3 h-3" /> {proj.date}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                            {proj.comments}
                          </p>
                        </div>

                        <div>
                          {proj.tags && proj.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {proj.tags.map((tag, tagIdx) => (
                                <span 
                                  key={tagIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <a 
                            href={proj.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 dark:bg-slate-950/80 dark:hover:bg-emerald-950/20 border border-slate-200 dark:border-slate-805 text-xs font-mono font-bold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 rounded-xl transition-all w-fit cursor-pointer outline-none"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Download Research PDF</span>
                            <ExternalLink className="w-3 h-3.5 opacity-60" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Subsection 2: Cheminformatics */}
            {(activeTab === 'all' || activeTab === 'cheminfo') && (
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      Cheminformatics Showcase
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Exploratory data analysis, molecular clustering, and computational modeling plots.
                    </p>
                  </div>
                </div>

                {!hasChemInfo ? (
                  <div className="text-xs font-mono text-slate-400 bg-slate-50/50 dark:bg-slate-950/20 py-8 px-4 border border-dashed border-slate-200 dark:border-slate-850 rounded-lg text-center">
                    No cheminformatics analyses added yet. Click "Developer Integration Guide" above to populate list.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {CHEMINFORMATICS_PROJECTS.map((proj, idx) => (
                      <div 
                        key={idx}
                        className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-900 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all flex flex-col justify-between md:flex-row"
                      >
                        {/* Visual Plot Zone */}
                        <div className="md:w-2/5 relative bg-slate-50 dark:bg-slate-900 min-h-[160px] md:min-h-full">
                          <img 
                            src={proj.imageUrl} 
                            alt={proj.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 left-2 bg-slate-950/70 backdrop-blur-sm text-white text-[9px] font-mono px-1.5 py-0.5 rounded capitalize flex items-center gap-1">
                            <Eye className="w-2.5 h-2.5" /> Analytical Plot
                          </div>
                        </div>

                        {/* Text and commentary description block */}
                        <div className="p-6 md:w-3/5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-2.5">
                              <h4 className="font-bold text-base text-slate-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {proj.title}
                              </h4>
                              {proj.date && (
                                <span className="shrink-0 flex items-center gap-1 text-[10px] bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-mono py-0.5 px-2 rounded-md">
                                  {proj.date}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                              {proj.comments}
                            </p>
                          </div>

                          {proj.tags && proj.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-auto">
                              {proj.tags.map((tag, tagIdx) => (
                                <span 
                                  key={tagIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 bg-blue-500/5 text-blue-600 dark:text-blue-400 border border-blue-500/10 dark:border-blue-900/40 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}


