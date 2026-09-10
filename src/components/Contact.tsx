import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-sciBlue/30 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight uppercase tracking-widest mb-6">
          <span>07 // SCHOLARLY INQUIRIES & GRADUATE ADMISSIONS</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-6">
          Let’s explore a research problem.
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl font-light text-brand-navy/80 dark:text-brand-warmWhite/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Interested in materials, electrochemistry, catalysis, or data-driven chemical research? I welcome dialogue regarding research initiatives, graduate study opportunities, and collaborative experiments.
        </p>

        {/* Direct Email Display & Interactive Copy */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 sm:p-2.5 rounded-lg border border-brand-borderLight dark:border-brand-borderDark bg-white dark:bg-brand-darkBlue/70 shadow-sm mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 px-5 py-3 rounded text-sm sm:text-base font-mono font-medium text-brand-navy dark:text-brand-warmWhite hover:text-brand-sciBlue transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-sciBlue" />
            <span>{personalInfo.email}</span>
          </a>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-brand-navy dark:bg-brand-warmWhite text-brand-warmWhite dark:text-brand-navy text-xs font-mono font-medium hover:bg-brand-sciBlue dark:hover:bg-brand-warmWhite/90 transition-colors"
            title="Copy Email Address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400 dark:text-green-700" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-70" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Academic Profile Channels */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a
            href={personalInfo.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-brand-borderLight dark:border-brand-borderDark hover:border-brand-sciBlue text-brand-navy dark:text-brand-warmWhite transition-colors"
          >
            <span>Google Scholar Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-sciBlue" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-brand-borderLight dark:border-brand-borderDark hover:border-brand-sciBlue text-brand-navy dark:text-brand-warmWhite transition-colors"
          >
            <span>LinkedIn Academic Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-sciBlue" />
          </a>
        </div>
      </div>
    </section>
  );
};
