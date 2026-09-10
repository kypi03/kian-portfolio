import React, { useState } from 'react';
import { publications } from '../data/portfolioData';
import { ExternalLink, Copy, Check, BookOpen, Quote } from 'lucide-react';

export const Publications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      {/* Section Eyebrow */}
      <div className="mb-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest uppercase">
          <span>03 // PEER-REVIEWED SCHOLARSHIP</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-4">
          Selected Publications
        </h2>
        <p className="text-base sm:text-lg text-brand-navy/70 dark:text-brand-warmWhite/70">
          Peer-reviewed review articles focusing on perovskite-based solid-state architectures for advanced electrochemical energy storage.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-8">
        {publications.map((pub, idx) => (
          <article
            key={pub.id}
            className="p-8 sm:p-10 rounded border border-brand-borderLight dark:border-brand-borderDark bg-white/40 dark:bg-brand-darkBlue/30 hover:border-brand-sciBlue/50 transition-all shadow-xs"
          >
            {/* Top metadata line */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono mb-4 pb-4 border-b border-brand-borderLight/60 dark:border-brand-borderDark/60">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-brand-sciBlue/10 dark:bg-brand-sciBlue/20 text-brand-sciBlue dark:text-brand-sciBlueLight border border-brand-sciBlue/20">
                  {pub.type}
                </span>
                <span className="font-semibold text-brand-navy dark:text-brand-warmWhite">
                  {pub.journal}
                </span>
                <span className="text-brand-navy/40 dark:text-brand-warmWhite/40">•</span>
                <span className="text-brand-navy/60 dark:text-brand-warmWhite/60">
                  {pub.volumeInfo}
                </span>
              </div>
              <div className="font-mono text-xs font-semibold text-brand-gold">
                {pub.year}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-brand-navy dark:text-brand-warmWhite mb-4 leading-snug">
              {pub.title}
            </h3>

            {/* Authors */}
            <div className="font-sans text-sm text-brand-navy/75 dark:text-brand-warmWhite/75 mb-4">
              <span className="font-mono text-xs text-brand-navy/50 dark:text-brand-warmWhite/50 mr-2 uppercase tracking-wider">
                Authors:
              </span>
              {pub.authors.map((author, aIdx) => {
                const isCandidate = author.includes('Pishvaie');
                return (
                  <span key={aIdx}>
                    <span className={isCandidate ? 'font-bold underline decoration-brand-gold decoration-2 underline-offset-4 text-brand-navy dark:text-brand-warmWhite' : ''}>
                      {author}
                    </span>
                    {aIdx < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                );
              })}
            </div>

            {/* Summary */}
            <p className="text-sm text-brand-navy/70 dark:text-brand-warmWhite/70 leading-relaxed mb-6 font-normal">
              {pub.summary}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-borderLight/60 dark:border-brand-borderDark/60">
              <div className="flex items-center gap-4 text-xs font-mono">
                {pub.doiLink && (
                  <a
                    href={pub.doiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-sciBlue dark:text-brand-sciBlueLight hover:underline"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>DOI: {pub.doiLabel}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>

              <button
                onClick={() => copyBibtex(pub.id, pub.bibtex)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-brand-borderLight dark:border-brand-borderDark hover:bg-brand-softGray/30 dark:hover:bg-brand-navy text-xs font-mono text-brand-navy dark:text-brand-warmWhite transition-colors"
                title="Copy BibTeX Citation"
              >
                {copiedId === pub.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    <span className="text-green-600 dark:text-green-400 font-medium">Copied BibTeX</span>
                  </>
                ) : (
                  <>
                    <Quote className="w-3.5 h-3.5 opacity-60" />
                    <span>Cite BibTeX</span>
                  </>
                )}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
