import React from 'react';
import { Mail, Linkedin, Github, FileText, MapPin, Award, Dna } from 'lucide-react';
import { CHEMIST_PROFILE } from '../data';
import { motion } from 'motion/react';

export default function Hero() {
  const profile = CHEMIST_PROFILE;

  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Polonius Ring Accents */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500/5 dark:bg-indigo-400/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          
          {/* Avatar Area with Floating Chemical Structures */}
          <div className="w-full lg:w-5/12 flex justify-center lg:pt-8">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-emerald-500/20 dark:border-emerald-400/20 rounded-full animate-spin-slow"></div>
              
              {/* Dynamic decorative atoms orbiting */}
              <div className="absolute -top-3 left-1/4 p-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-bold shadow-lg shadow-emerald-500/30 z-20 flex items-center justify-center w-7 h-7">
                H⁺
              </div>
              <div className="absolute -bottom-2 -right-1 p-1.5 bg-indigo-500 text-white rounded-full text-[10px] font-bold shadow-lg shadow-indigo-500/30 z-20 flex items-center justify-center w-7 h-7">
                NO₂
              </div>
              <div className="absolute top-1/2 -left-5 p-1.5 bg-yellow-500 text-white rounded-full text-[10px] font-bold shadow-lg shadow-yellow-500/30 z-20 flex items-center justify-center w-7 h-7">
                CH₃
              </div>

              {/* Main Avatar Container */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative group">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Lab Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 backdrop-blur-sm p-4 text-center border-t border-slate-800 z-20">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase flex items-center justify-center gap-1">
                    <Dna className="w-3 h-3 animate-pulse" /> {profile.name}
                  </span>
                  <p className="text-[11px] text-slate-300 mt-0.5">ORCID ID: {profile.orcid.split('/').pop()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Bio Context */}
          <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold rounded-full uppercase tracking-wider shadow-inner">
                <Award className="w-3.5 h-3.5" /> PhD Org Chemistry
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans leading-tight">
                {profile.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-emerald-600 dark:text-emerald-400 mt-2 font-sans">
                {profile.title} <span className="text-slate-400 dark:text-slate-500 font-normal">|</span> <span className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">{profile.specialization}</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {profile.about}
            </p>

            {/* Direct Contact Metadata Block */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-slate-500 dark:text-slate-400 py-2 border-y border-slate-100 dark:border-slate-800/80 max-w-2xl">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" /> {profile.location}
              </span>
              <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1.5 font-mono">
                <FileText className="w-4 h-4 text-slate-400" /> ORCID: {profile.orcid.split('/').pop()}
              </span>
            </div>

            {/* Quick Access Badges for Contacts */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm rounded-xl shadow transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4" /> Contact Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 font-medium text-sm rounded-xl transition-all border border-indigo-100 dark:border-indigo-900/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-xl transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Github className="w-4 h-4" /> GitHub Code
              </a>
              <a
                href={`https://orcid.org/${profile.orcid.split('/').pop()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 font-medium text-sm rounded-xl transition-all border border-emerald-100 dark:border-emerald-900/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span className="font-bold text-center border-2 border-emerald-600 dark:border-emerald-400 rounded-sm text-[10px] w-4.5 h-4.5 leading-[13px] flex items-center justify-center font-serif">iD</span> ORCID Profile
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
