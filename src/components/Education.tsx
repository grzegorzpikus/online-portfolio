import React, { useState, useEffect } from 'react';
import { EDUCATION_ITEMS } from '../data';
import { GraduationCap, Calendar, Award, UserCheck, BookOpen, Upload, Camera, Trash2 } from 'lucide-react';

export default function Education() {
  const [avatars, setAvatars] = useState<Record<string, string>>({});

  useEffect(() => {
    const loaded: Record<string, string> = {};
    EDUCATION_ITEMS.forEach(item => {
      const saved = localStorage.getItem(`edu-avatar-${item.id}`);
      if (saved) {
        loaded[item.id] = saved;
      }
    });
    setAvatars(loaded);
  }, []);

  const handleFileChange = (itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Please upload an image smaller than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          localStorage.setItem(`edu-avatar-${itemId}`, result);
          setAvatars(prev => ({ ...prev, [itemId]: result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = (itemId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem(`edu-avatar-${itemId}`);
    setAvatars(prev => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

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
                    {/* Uploadable Avatar Container */}
                    <div className="relative group shrink-0">
                      <label
                        htmlFor={`file-upload-${item.id}`}
                        className="relative flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 cursor-pointer overflow-hidden group hover:border-emerald-500 hover:bg-emerald-50/25 dark:hover:border-emerald-400 dark:hover:bg-emerald-950/10 transition-all duration-300 shadow-xs"
                      >
                        {avatars[item.id] ? (
                          <>
                            <img
                              src={avatars[item.id]}
                              alt={`${item.institution} Logo`}
                              className="w-full h-full object-cover"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-[9px] font-medium text-white transition-opacity duration-200">
                              <Camera className="w-3.5 h-3.5 mb-0.5" />
                              <span>Change</span>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 text-center p-1.5">
                            <Upload className="w-4 h-4 mb-1" />
                            <span className="text-[9px] font-sans font-medium leading-none">Add Logo</span>
                          </div>
                        )}
                      </label>
                      <input
                        id={`file-upload-${item.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(item.id, e)}
                      />

                      {/* Remove button if avatar exists */}
                      {avatars[item.id] && (
                        <button
                          onClick={(e) => removeAvatar(item.id, e)}
                          title="Remove logo"
                          className="absolute -top-1 -right-1 p-1 bg-red-100 hover:bg-red-200 dark:bg-red-950/80 dark:hover:bg-red-900 text-red-600 dark:text-red-450 rounded-full shadow-xs transition-transform hover:scale-110 cursor-pointer z-10 animate-fade-in"
                        >
                          <Trash2 className="w-2.5 h-2.5" />
                        </button>
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
