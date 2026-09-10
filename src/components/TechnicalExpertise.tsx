import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Activity, Microscope, Cpu, PenTool } from 'lucide-react';

export const TechnicalExpertise: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Electrochemical')) return <Activity className="w-5 h-5 text-brand-sciBlue" />;
    if (category.includes('Structural')) return <Microscope className="w-5 h-5 text-brand-gold" />;
    if (category.includes('Computational')) return <Cpu className="w-5 h-5 text-brand-sciBlueLight" />;
    return <PenTool className="w-5 h-5 text-brand-navy dark:text-brand-warmWhite" />;
  };

  return (
    <section id="expertise" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      {/* Section Eyebrow */}
      <div className="mb-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest uppercase">
          <span>04 // METHODOLOGICAL CAPABILITIES</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-4">
          Technical Expertise
        </h2>
        <p className="text-base sm:text-lg text-brand-navy/70 dark:text-brand-warmWhite/70">
          Curated laboratory and computational competencies spanning quantitative electrochemistry, materials spectroscopy, and statistical process optimization.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {skillCategories.map((cat, idx) => (
          <div
            key={cat.category}
            className="p-8 rounded border border-brand-borderLight dark:border-brand-borderDark bg-white/40 dark:bg-brand-darkBlue/25 hover:border-brand-sciBlue/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-borderLight/60 dark:border-brand-borderDark/60">
              <div className="p-2 rounded bg-brand-softGray/30 dark:bg-brand-navy/70">
                {getCategoryIcon(cat.category)}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-brand-navy/40 dark:text-brand-warmWhite/40 tracking-wider">
                  DOMAIN 0{idx + 1}
                </span>
                <h3 className="font-sans text-lg font-semibold text-brand-navy dark:text-brand-warmWhite">
                  {cat.category}
                </h3>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`relative px-3.5 py-2 rounded text-xs font-mono transition-all cursor-default border ${
                      isHovered
                        ? 'border-brand-sciBlue bg-brand-sciBlue/10 dark:bg-brand-sciBlue/25 text-brand-navy dark:text-brand-warmWhite shadow-xs'
                        : 'border-brand-borderLight/80 dark:border-brand-borderDark/80 bg-brand-warmWhite/60 dark:bg-brand-navy/60 text-brand-navy/80 dark:text-brand-warmWhite/80'
                    }`}
                  >
                    <span className="font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Skill Details Preview Bar */}
      <div className="p-5 rounded border border-brand-borderLight dark:border-brand-borderDark bg-brand-warmWhite dark:bg-brand-navy/60 text-xs font-mono text-brand-navy/75 dark:text-brand-warmWhite/75 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-brand-gold font-bold">INFO:</span>
          <span>
            {hoveredSkill ? (
              <>
                <strong className="text-brand-navy dark:text-brand-warmWhite">{hoveredSkill}:</strong>{' '}
                {
                  skillCategories
                    .flatMap((c) => c.skills)
                    .find((s) => s.name === hoveredSkill)?.fullName
                }
              </>
            ) : (
              'Hover over any technique or software above to view practical analytical application details.'
            )}
          </span>
        </div>
        <span className="hidden sm:inline text-[11px] text-brand-navy/40 dark:text-brand-warmWhite/40">
          ACCREDITED LAB PROTOCOLS
        </span>
      </div>
    </section>
  );
};
