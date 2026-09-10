import React from 'react';
import { ArrowDown, FileText, Compass, ExternalLink, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial top eyebrow with scientific coordinates */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono text-brand-navy/60 dark:text-brand-warmWhite/60 tracking-widest uppercase border-b border-brand-borderLight dark:border-brand-borderDark/60 pb-3">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-sciBlue animate-pulse" />
          <span>RESEARCH PORTFOLIO // 2026</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>UNIV. OF TEHRAN</span>
          <span className="text-brand-borderLight dark:text-brand-borderDark">|</span>
          <span>35.705° N, 51.391° E</span>
        </div>
      </div>

      {/* Main intellectual headline */}
      <div className="max-w-5xl">
        <p className="font-mono text-xs sm:text-sm font-semibold text-brand-sciBlue dark:text-brand-sciBlueLight uppercase tracking-widest-scientific mb-4">
          Applied Chemistry & Advanced Materials
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite leading-[1.12] mb-8">
          Chemistry at the <span className="italic font-normal text-brand-sciBlue dark:text-brand-sciBlueLight">intersection</span> of materials, energy, and computation.
        </h1>

        {/* Name and qualification badge */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy dark:text-brand-warmWhite">
            {personalInfo.name}
          </h2>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-brand-gold font-mono">•</span>
            <span className="font-mono text-sm sm:text-base text-brand-navy/70 dark:text-brand-warmWhite/70">
              {personalInfo.title}
            </span>
          </div>
        </div>

        {/* Narrative supporting statement */}
        <p className="text-lg sm:text-xl font-normal text-brand-navy/80 dark:text-brand-warmWhite/80 max-w-3xl leading-relaxed mb-10">
          {personalInfo.summary}
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2 mb-12">
          <a
            href="#research"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-brand-navy dark:bg-brand-warmWhite text-brand-warmWhite dark:text-brand-navy font-sans text-sm font-medium tracking-wide hover:bg-brand-sciBlue dark:hover:bg-brand-warmWhite/90 transition-all shadow-sm"
          >
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>Explore Research</span>
          </a>

          <a
            href="#publications"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded border border-brand-borderLight dark:border-brand-borderDark text-brand-navy dark:text-brand-warmWhite font-sans text-sm font-medium tracking-wide hover:border-brand-sciBlue dark:hover:border-brand-sciBlueLight hover:bg-brand-softGray/20 dark:hover:bg-brand-darkBlue/50 transition-all"
          >
            <FileText className="w-4 h-4 text-brand-sciBlue dark:text-brand-sciBlueLight" />
            <span>View Publications</span>
          </a>
        </div>

        {/* Understated academic channels */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-brand-borderLight/80 dark:border-brand-borderDark/60 font-mono text-xs text-brand-navy/70 dark:text-brand-warmWhite/70">
          <span className="text-brand-navy/40 dark:text-brand-warmWhite/40 uppercase tracking-widest text-[10px]">
            Direct Channels:
          </span>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-sciBlue dark:hover:text-brand-sciBlueLight transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-brand-sciBlue dark:hover:text-brand-sciBlueLight transition-colors"
          >
            <span>Google Scholar</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-brand-sciBlue dark:hover:text-brand-sciBlueLight transition-colors"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="hidden lg:flex absolute bottom-4 right-8 items-center gap-2 font-mono text-[11px] text-brand-navy/40 dark:text-brand-warmWhite/40 tracking-widest uppercase">
        <span>Scroll down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
