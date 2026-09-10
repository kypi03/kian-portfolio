import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-brand-borderLight dark:border-brand-borderDark/60 py-12 px-6 sm:px-8 bg-brand-warmWhite dark:bg-brand-navy text-brand-navy/60 dark:text-brand-warmWhite/60 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-brand-navy dark:text-brand-warmWhite font-semibold uppercase tracking-wider mb-1">
            {personalInfo.name} — {personalInfo.title}
          </div>
          <div className="text-[11px] text-brand-navy/40 dark:text-brand-warmWhite/40">
            School of Chemistry • University of Tehran • Tehran, Iran
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[11px] text-brand-navy/40 dark:text-brand-warmWhite/40">
            Editorial Scientific Architecture // 2026
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded border border-brand-borderLight dark:border-brand-borderDark hover:bg-brand-softGray/30 dark:hover:bg-brand-darkBlue text-brand-navy dark:text-brand-warmWhite transition-colors flex items-center gap-1"
          >
            <span className="text-[10px] uppercase tracking-wider">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
