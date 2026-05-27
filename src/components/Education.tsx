import React from 'react';
import { EDUCATION_ITEMS } from '../data';
import { GraduationCap, UserCheck, BookOpen } from 'lucide-react';

export default function Education() {

  return (
    <section id="education" className="py-20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3 shadow-inner">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans sm:text-4xl">
            Education & Thesis Directives
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Detailed academic record comprising classical chemistry programs, laboratory advising, and specialized thesis designs.
          </p>
        </div>

        {/* List of institutions */}
        <div className="grid grid-cols-1 gap-6 ml-4 md:ml-6 pl-6 md:pl-10">
          {EDUCATION_ITEMS.map((item) => {
            return (
              <div
                key={item.id}
                id={`edu-card-${item.id}`}
                className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl transition-all duration-300 overflow-hidden shadow-sm"
              >
                {/* Header Row */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Institute Logo */}
                    <div className="shrink-0">
                      {item.logoUrl ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-white border border-slate-200 dark:border-slate-800/80 flex items-center justify-center p-1.5 shadow-sm">
                          <img
                            src={item.logoUrl}
                            alt={`${item.institution} Logo`}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-slate-400 dark:text-slate-500 flex items-center justify-center p-3 shadow-sm">
                          <GraduationCap className="w-6 h-6 text-emerald-550 shrink-0" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white leading-tight font-sans">
                        {item.degree}
                      </h3>
                      <p className="text-base font-medium text-emerald-600 dark:text-emerald-400 mt-1 font-sans">
                        {item.institution} {item.gpa && <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 ml-1.5 font-bold">GPA: {item.gpa}</span>}
                      </p>
                    </div>
                  </div>

                  {/* Dates on the very right */}
                  <div className="flex flex-col items-start sm:items-end gap-1.5 self-stretch sm:self-auto shrink-0 pl-20 sm:pl-0">
                    <span className="font-mono text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 rounded-lg whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Always-Exposed Thesis & Advisor Panel */}
                <div className="border-t border-slate-100 dark:border-slate-850/60 p-6 sm:p-8 bg-slate-50/60 dark:bg-slate-950/20">
                  <div className="space-y-4">
                    {/* Dissertations of Master's/Ph.D */}
                    {item.thesisTitle && (
                      <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-xl p-4.5 space-y-2">
                        <h4 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          <BookOpen className="w-3.5 h-3.5" /> Dissertation / Thesis Title
                        </h4>
                        {item.thesisUrl ? (
                          <a
                            href={item.thesisUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-350 italic leading-relaxed hover:underline inline-flex flex-wrap items-center gap-1.5 focus:outline-none transition-all cursor-pointer"
                          >
                            &ldquo;{item.thesisTitle}&rdquo;
                            <span className="text-[10px] font-mono font-normal not-italic px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded border border-indigo-100 dark:border-indigo-900 shrink-0">
                              PDF
                            </span>
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-900 dark:text-white italic leading-relaxed">
                            &ldquo;{item.thesisTitle}&rdquo;
                          </p>
                        )}
                      </div>
                    )}

                    {/* Advisor Name */}
                    {item.advisor && (
                      <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <UserCheck className="w-4 h-4 text-emerald-550 shrink-0" />
                        <span>
                          Research Advisor: <strong className="text-slate-950 dark:text-white">{item.advisor}</strong>
                        </span>
                      </div>
                    )}

                    {/* Supervisor Name */}
                    {item.supervisor && (
                      <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <UserCheck className="w-4 h-4 text-emerald-555 shrink-0" />
                        <span>
                          Research Supervisor: <strong className="text-slate-950 dark:text-white">{item.supervisor}</strong>
                        </span>
                      </div>
                    )}

                    {/* Expandable summary details */}
                    {item.details && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/40">
                        {item.details}
                      </p>
                    )}
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
