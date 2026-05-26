import { useState } from 'react';
import { PUBLICATIONS } from '../data';
import { BookOpen, ExternalLink, Search, Newspaper, Landmark } from 'lucide-react';

export default function Publications() {
  const [activeType, setActiveType] = useState<'all' | 'paper' | 'patent'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPubs = PUBLICATIONS.filter(pub => {
    const matchesType = activeType === 'all' || pub.type === activeType;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section id="publications" className="py-20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3 shadow-inner">
            <BookOpen className="w-3.5 h-3.5" /> Published Research
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans sm:text-4xl">
            Articles & Patents
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Reverse-chronological compilation of peer-reviewed articles and patent.
          </p>
        </div>

        {/* Dashboard Tools */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch md:items-center justify-between">
          
          {/* Paper and Patent buttons toggle */}
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-850/60 self-start">
            <button
              onClick={() => setActiveType('all')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeType === 'all'
                  ? 'bg-slate-900 text-white dark:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              All publications
            </button>
            <button
              onClick={() => setActiveType('paper')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                activeType === 'paper'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" /> Articles
            </button>
            <button
              onClick={() => setActiveType('patent')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                activeType === 'patent'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" /> Patents
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, journal, author..."
              className="w-full bg-white dark:bg-slate-950 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-950 dark:text-white font-sans"
            />
          </div>
        </div>

        {/* Bibliography List */}
        <div className="space-y-6">
          {filteredPubs.map((pub, idx) => (
            <div
              key={pub.id}
              id={`pub-card-${pub.id}`}
              className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-emerald-500 dark:hover:border-emerald-500/70 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/5 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4.5 justify-between">
                
                <div className="space-y-2 flex-1">
                  
                  {/* Category Pill Tag */}
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                      pub.type === 'patent'
                        ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/20'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="text-slate-400 text-xs font-mono font-medium">#{PUBLICATIONS.length - idx} • Published {pub.year}</span>
                  </div>

                  {/* CRITICAL REQUIREMENT: The title or citation MUST be a clean hyperlink opening in a new browser tab */}
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-baseline gap-1 cursor-pointer"
                      title="Open publication in a new browser tab"
                    >
                      {pub.title}
                      <ExternalLink className="w-3.5 h-3.5 inline-block opacity-40 group-hover:opacity-100 shrink-0 transform translate-y-0.5 ml-0.5 transition-all text-slate-400 group-hover:text-emerald-500" />
                    </a>
                  </h3>

                  {/* Authors List */}
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {pub.authors}
                  </p>

                  {/* Complete Journal Citation details */}
                  <p className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                    📚 {pub.journal} <span className="text-emerald-600 dark:text-emerald-400 font-bold ml-1.5">{pub.citation}</span>
                  </p>

                </div>

                {/* Direct Link Badge */}
                <div className="shrink-0 self-start">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 dark:bg-slate-950/85 dark:hover:bg-emerald-950/30 dark:border-slate-850 dark:hover:border-emerald-800/80 text-xs font-mono font-semibold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 border rounded-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>{pub.type === 'patent' ? pub.doi : `DOI: ${pub.doi}`}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          ))}

          {filteredPubs.length === 0 && (
            <div className="py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center">
              <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
                {searchQuery ? (
                  <>No publications found for &ldquo;{searchQuery}&rdquo;.</>
                ) : (
                  <>No {activeType === 'paper' ? 'articles' : activeType === 'patent' ? 'patents' : 'publications'} available.</>
                )}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
