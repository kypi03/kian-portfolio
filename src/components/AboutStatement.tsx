import React from 'react';
import { personalInfo, languages, academicReferences } from '../data/portfolioData';
import { Globe, Users, Mail, ExternalLink, Quote } from 'lucide-react';

export const AboutStatement: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      {/* Section Eyebrow */}
      <div className="mb-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest uppercase">
          <span>06 // PROFILE & PHILOSOPHY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-4">
          Research Statement & References
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Personal Statement & Research Vision */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-8 sm:p-10 rounded border border-brand-borderLight dark:border-brand-borderDark bg-white/40 dark:bg-brand-darkBlue/25 relative">
            <Quote className="w-8 h-8 text-brand-gold/40 mb-4" />
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-brand-navy dark:text-brand-warmWhite leading-relaxed mb-6 italic">
              “{personalInfo.statement}”
            </h3>
            <div className="pt-6 border-t border-brand-borderLight/60 dark:border-brand-borderDark/60 flex items-center justify-between text-xs font-mono text-brand-navy/60 dark:text-brand-warmWhite/60">
              <span>RESEARCH OUTLOOK // GRADUATE CANDIDATE</span>
              <span>TEHRAN, IRAN</span>
            </div>
          </div>

          {/* Languages Box */}
          <div className="p-6 rounded border border-brand-borderLight dark:border-brand-borderDark bg-brand-warmWhite/50 dark:bg-brand-navy/60">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-brand-borderLight/60 dark:border-brand-borderDark/60">
              <Globe className="w-4 h-4 text-brand-sciBlue" />
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-navy dark:text-brand-warmWhite font-semibold">
                Language Proficiencies
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-3 rounded border border-brand-borderLight/60 dark:border-brand-borderDark/60 bg-white/30 dark:bg-brand-darkBlue/40"
                >
                  <span className="text-sm font-semibold text-brand-navy dark:text-brand-warmWhite block">
                    {lang.name}
                  </span>
                  <span className="text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight block mb-1">
                    {lang.level}
                  </span>
                  <span className="text-[11px] text-brand-navy/50 dark:text-brand-warmWhite/50 block">
                    {lang.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Academic References */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-brand-borderLight/80 dark:border-brand-borderDark/80">
            <Users className="w-4 h-4 text-brand-sciBlue" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-navy dark:text-brand-warmWhite font-semibold">
              Academic Referees
            </h4>
          </div>

          <div className="space-y-4">
            {academicReferences.map((ref, idx) => (
              <div
                key={idx}
                className="p-6 rounded border border-brand-borderLight dark:border-brand-borderDark bg-white/40 dark:bg-brand-darkBlue/25"
              >
                <h5 className="font-serif text-lg font-semibold text-brand-navy dark:text-brand-warmWhite mb-1">
                  {ref.name}
                </h5>
                <p className="text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight mb-1">
                  {ref.title}
                </p>
                <p className="text-xs text-brand-navy/60 dark:text-brand-warmWhite/60 mb-4">
                  {ref.affiliation}
                </p>

                <div className="pt-3 border-t border-brand-borderLight/60 dark:border-brand-borderDark/60 flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1 text-brand-navy/80 dark:text-brand-warmWhite/80 hover:text-brand-sciBlue transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{ref.email}</span>
                  </a>
                  {ref.scholar && (
                    <a
                      href={ref.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-sciBlue dark:text-brand-sciBlueLight hover:underline"
                    >
                      <span>Scholar</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-brand-navy/50 dark:text-brand-warmWhite/50 mt-4 leading-relaxed">
            * Formal letters of academic recommendation are available upon committee or faculty request.
          </p>
        </div>
      </div>
    </section>
  );
};
