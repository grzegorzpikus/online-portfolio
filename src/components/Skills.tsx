import { useState } from 'react';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../data';
import { Award, CheckCircle, Cpu, Hammer, Search, ShieldAlert, Sparkles, Terminal, FlaskConical, Microscope, Monitor } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null); // null means show all
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering based on search query and selected category
  const filteredCategories = SKILL_CATEGORIES.map((cat, catIdx) => {
    if (selectedCategory !== null && selectedCategory !== catIdx) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: filteredSkills,
      originalIndex: catIdx
    };
  }).filter((cat): cat is NonNullable<typeof cat> => cat !== null && cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3 shadow-inner">
            <Cpu className="w-3.5 h-3.5" /> Capabilities Grid
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans sm:text-4xl">
            Technical Instrumentation & Expertise
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Expertise in wet-lab synthetic pathways, physical chemical analytics, and high-performance laboratory computing.
          </p>
        </div>

        {/* Dashboard Tools (Search and Category select) */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch md:items-center justify-between">
          
          {/* Categories Pill toggler */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-850/60 shrink-0">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === null
                  ? 'bg-slate-900 text-white dark:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === idx
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {idx === 0 ? 'Synthetic' : idx === 1 ? 'Analytical' : 'Computational'}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specific instruments or techniques..."
              className="w-full bg-white dark:bg-slate-950 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-950 dark:text-white"
            />
          </div>
        </div>

        {/* Technical skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/60">
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono tracking-wider">
                    {cat.title}
                  </h3>
                  <span className="p-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-lg shadow-sm border border-emerald-100 dark:border-emerald-900/30" title={cat.originalIndex === 0 ? "Synthetic" : cat.originalIndex === 1 ? "Analytical" : "Computational"}>
                    {cat.originalIndex === 0 ? (
                      <FlaskConical className="w-4 h-4" />
                    ) : cat.originalIndex === 1 ? (
                      <Microscope className="w-4 h-4" />
                    ) : (
                      <Monitor className="w-4 h-4" />
                    )}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="font-medium text-slate-800 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500/80 to-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill bottom badge */}
              <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-850/60 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" /> Active R&D validation rating
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="col-span-full py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center">
              <ShieldAlert className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
              <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
                No matching chemical skills found for &ldquo;{searchQuery}&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Soft Skills Section (Strict mandate: Avoid generic progress bars) */}
        <div className="mt-20">
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-2 shadow-inner">
              <Sparkles className="w-3.5 h-3.5" /> Professional Competencies
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Laboratory Leadership & Soft Skills
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
              Key operational parameters detailing cross-functional teamwork, safety governance, and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOFT_SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
                
                {/* Visual Circle Indicator (Alternative to boring progress bars) */}
                <div className="relative shrink-0 flex items-center justify-center w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl relative border border-emerald-100 dark:border-emerald-900/50">
                  <div className="text-emerald-700 dark:text-emerald-400 font-mono text-sm font-bold flex flex-col items-center">
                    <span className="text-[10px] text-slate-400 -mb-1 font-sans">Eff.</span>
                    <span>{skill.percentage}%</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-slate-950 dark:text-white font-sans">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
