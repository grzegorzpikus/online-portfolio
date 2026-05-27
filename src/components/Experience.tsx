import React, { useState } from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, Beaker, Activity, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [filterMode, setFilterMode] = useState<'all' | 'wet' | 'analytical'>('all');
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);

  const filteredExperiences = EXPERIENCES.filter(exp => {
    if (filterMode === 'wet') return exp.hasWetLab;
    if (filterMode === 'analytical') return !exp.hasWetLab;
    return true;
  });

  return (
    <section id="experience" className="py-20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3 shadow-inner">
              <Briefcase className="w-3.5 h-3.5" /> Chronological Path
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans sm:text-4xl">
              Professional Work Experience
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
              R&D careers spanning pharmaceutical drug design, process optimization, and high-level academic research.
            </p>
          </div>

          {/* Interactive Filtering Controller */}
          <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 self-center md:self-end">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white dark:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              All Careers ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilterMode('wet')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                filterMode === 'wet'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Beaker className="w-3.5 h-3.5" /> Wet Lab Discovery
            </button>
            <button
              onClick={() => setFilterMode('analytical')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                filterMode === 'analytical'
                  ? 'bg-yellow-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" /> Production & Process Only
            </button>
          </div>
        </div>

        {/* Timeline Columns */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {filteredExperiences.map((exp) => {
            const isHovered = hoveredExp === exp.id;
            
            return (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className="relative"
                onMouseEnter={() => setHoveredExp(exp.id)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                {/* Timeline node marker change on hover */}
                <span className={`absolute -left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 border transition-all duration-300 ${
                  isHovered 
                    ? 'scale-110 bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20' 
                    : exp.hasWetLab
                      ? 'bg-white dark:bg-slate-950 text-emerald-600 border-emerald-300 dark:border-emerald-800'
                      : 'bg-white dark:bg-slate-950 text-indigo-600 border-indigo-300 dark:border-indigo-800'
                }`}>
                  {exp.hasWetLab ? (
                    <Beaker className="w-4.5 h-4.5" />
                  ) : (
                    <Activity className="w-4.5 h-4.5" />
                  )}
                </span>

                {/* Experience Detail Card */}
                <div className={`p-6 sm:p-8 bg-white dark:bg-slate-900/65 rounded-2xl border transition-all duration-300 ${
                  isHovered
                    ? 'border-emerald-500 dark:border-emerald-500/60 shadow-lg shadow-emerald-500/5 -translate-y-1'
                    : 'border-slate-200 dark:border-slate-800/80 shadow-xs'
                }`}>
                                   {/* Card Header Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Logo or scientific fallback */}
                      <div className="shrink-0">
                        {exp.logoUrl ? (
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-white border border-slate-200 dark:border-slate-800/80 flex items-center justify-center p-1.5 shadow-sm">
                            <img
                              src={exp.logoUrl}
                              alt={`${exp.company} Logo`}
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-slate-400 dark:text-slate-500 flex items-center justify-center p-3 shadow-sm">
                            <Beaker className="w-6 h-6 text-emerald-550 shrink-0" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2 font-sans leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-base font-medium text-indigo-600 dark:text-indigo-400 mt-1 font-sans">
                          {exp.company} <span className="text-slate-300 dark:text-slate-700 mx-1.5">|</span> <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">{exp.location}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end gap-1.5 self-stretch sm:self-auto shrink-0 pl-20 sm:pl-0">
                      <span className="font-mono text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 rounded-lg whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* CRITICAL RESEARCH REQUIREMENT: Highlighted Badge of Chemistry Department Level */}
                  <div className="mb-6">
                    <div className={`inline-flex items-start gap-2.5 p-3.5 rounded-xl border leading-snug w-full ${
                      exp.hasWetLab
                        ? 'bg-emerald-500/10 dark:bg-emerald-500/5 border-emerald-500/30 text-slate-800 dark:text-slate-200'
                        : 'bg-yellow-500/10 dark:bg-yellow-500/5 border-yellow-500/20 text-slate-850 dark:text-slate-300'
                    }`}>
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        exp.hasWetLab 
                          ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' 
                          : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                      }`}>
                        <Beaker className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {exp.wetLabClassificationTitle || "Laboratory Asset & Synthesis Assessment"}
                        </span>
                        <div className="text-xs sm:text-sm font-semibold mt-0.5">
                          {exp.wetLabClassificationDesc}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements List */}
                  {exp.subsections && exp.subsections.length > 0 ? (
                    <div className="space-y-4 mb-6">
                      {exp.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-800/60">
                          <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 font-sans mb-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            {sub.title}
                          </h4>
                          <div className="space-y-2">
                            <h5 className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                              Key Chemistry Achievements
                            </h5>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                              {sub.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3 mb-6">
                      <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Key Chemistry Achievements
                      </h4>
                      <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Grid of Instrumentation and Methodologies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4.5 border-t border-slate-100 dark:border-slate-800/50">
                    
                    {/* Instrumentation Used */}
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                        {exp.instrumentationTitle || "Active Laboratory Instrumentation"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.instrumentation.map((inst, idx) => (
                          <span
                            key={idx}
                            className="inline-block text-xs font-mono px-2 py-1 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 rounded-md"
                          >
                            🔬 {inst}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Methodologies */}
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                        {exp.methodologiesTitle || "Synthetic & Analytical Methodologies"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.methodologies.map((meth, idx) => (
                          <span
                            key={idx}
                            className="inline-block text-xs font-mono px-2 py-1 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100/60 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-md"
                          >
                            🧪 {meth}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
