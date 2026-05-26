/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { Beaker, ChevronUp, Star, Menu, X, Code, Globe, Shield, Terminal, ExternalLink } from 'lucide-react';
import { CHEMIST_PROFILE } from './data';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Projects from './components/Projects';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab ] = useState('about');

  // Sync theme to root DOM node
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  }, [darkMode]);

  // Handle intersection/scroll tracking to highlight section links
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll-to-top button
      setShowScrollTop(window.scrollY > 400);

      if (activeTab === 'projects') return;

      const sections = ['about', 'experience', 'education', 'skills', 'publications'];
      const scrollPos = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleScrollTo = (id: string) => {
    setMenuOpen(false);
    
    if (id === 'projects') {
      setActiveTab('projects');
      window.scrollTo({
        top: 0,
        behavior: 'instant' as any,
      });
      return;
    }

    if (activeTab === 'projects') {
      setActiveTab(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const topOffset = element.offsetTop - 100;
          window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
          });
        }
      }, 50);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.offsetTop - 100;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
        setActiveTab(id);
      }
    }
  };

  const navLinks = [
    { label: 'Introduction', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Articles & Patents', id: 'publications' },
    { label: 'Projects', id: 'projects' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/80 via-sky-50/60 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 antialiased selection:bg-emerald-500/20 selection:text-emerald-600 relative overflow-x-hidden">
      
      {/* Sticky Header Nav */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
          
          {/* Scientific Branding Logo */}
          <button
            onClick={() => handleScrollTo('about')}
            className="flex items-center gap-2.5 px-1 focus:outline-none cursor-pointer group text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200">
              <Beaker className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-base font-bold text-slate-950 dark:text-white leading-none font-sans uppercase tracking-tight">
                {CHEMIST_PROFILE.name}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold tracking-wider uppercase leading-none mt-1 block">
                {CHEMIST_PROFILE.specialization}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              if ('externalUrl' in link && link.externalUrl) {
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-sm font-mono font-medium rounded-xl transition-all cursor-pointer text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              }
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleScrollTo(link.id)}
                  className={`px-4 py-2.5 text-sm font-mono font-medium rounded-xl transition-all cursor-pointer ${
                    activeTab === link.id
                      ? 'bg-slate-100 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50/50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Theme Swapper & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <nav className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 px-4 py-4 space-y-1 transition-colors duration-200">
            {navLinks.map((link) => {
              if ('externalUrl' in link && link.externalUrl) {
                return (
                  <a
                    key={link.id}
                    href={link.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono font-medium transition-all cursor-pointer text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-mono font-medium transition-all cursor-pointer ${
                    activeTab === link.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        )}
      </header>

      {/* Main Single Page Sections Container */}
      <main className="pb-24 pointer-events-auto">
        {activeTab === 'projects' ? (
          <Projects />
        ) : (
          <>
            {/* CV Presentation Card Intro */}
            <Hero />

            {/* Career Timeline Experience, with Wet-chemistry badge mapping */}
            <Experience />

            {/* Educational Credentials, expandable thesis thesis */}
            <Education />

            {/* Skills categorization, with quick search and safety highlighting */}
            <Skills />

            {/* Bibliography and Patent lists */}
            <Publications />
          </>
        )}
      </main>

      {/* Responsive Lab Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-12 transition-colors duration-300 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-950 dark:text-white font-sans uppercase">
              {CHEMIST_PROFILE.name} &bull; Portfolio Website
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center md:justify-start gap-1 font-mono">
              <Shield className="w-3.5 h-3.5 text-emerald-500" /> Authorized Synthesis Laboratory R&D Record
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Code className="w-3.5 h-3.5" /> Built dynamically with React & Vite
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> Fully static site optimized for GitHub Pages deploy
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Beaker Balloon */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-500/10 transition-all hover:-translate-y-1 active:scale-95 z-50 cursor-pointer border border-emerald-500/20 group"
          title="Scroll back to top"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

    </div>
  );
}

