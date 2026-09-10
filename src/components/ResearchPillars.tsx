import React, { useState } from 'react';
import { researchPillars } from '../data/portfolioData';
import { Activity, Layers, Zap, Cpu, CheckCircle2 } from 'lucide-react';

export const ResearchPillars: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>(researchPillars[0].id);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'electrochemistry':
        return <Activity className="w-5 h-5" />;
      case 'energy-materials':
        return <Layers className="w-5 h-5" />;
      case 'electrocatalysis':
        return <Zap className="w-5 h-5" />;
      case 'computational-chemistry':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="research" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      {/* Section Eyebrow & Opening Statement */}
      <div className="mb-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest uppercase">
          <span>01 // METHODOLOGY & DOMAINS</span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-6">
          Research Framework
        </h2>

        <p className="text-xl sm:text-2xl font-light text-brand-navy/90 dark:text-brand-warmWhite/90 leading-relaxed italic font-serif">
          “I work across experimental chemistry and computational modeling, with a focus on materials and catalytic systems relevant to energy and sustainable chemistry.”
        </p>
      </div>

      {/* 4 Research Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {researchPillars.map((pillar) => {
          const isSelected = selectedPillar === pillar.id;
          return (
            <div
              key={pillar.id}
              onClick={() => setSelectedPillar(pillar.id)}
              className={`cursor-pointer group relative p-6 sm:p-7 rounded border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'border-brand-sciBlue bg-brand-warmWhite dark:bg-brand-darkBlue shadow-md ring-1 ring-brand-sciBlue/30'
                  : 'border-brand-borderLight dark:border-brand-borderDark/80 bg-white/40 dark:bg-brand-darkBlue/30 hover:border-brand-sciBlue/60 hover:bg-white/70 dark:hover:bg-brand-darkBlue/50'
              }`}
            >
              {/* Pillar Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-brand-borderLight/60 dark:border-brand-borderDark/60">
                  <span className="font-mono text-2xl font-semibold tracking-tight text-brand-navy/40 dark:text-brand-warmWhite/40 group-hover:text-brand-sciBlue transition-colors">
                    {pillar.number}
                  </span>
                  <div className={`p-2 rounded ${isSelected ? 'text-brand-sciBlue dark:text-brand-sciBlueLight' : 'text-brand-navy/50 dark:text-brand-warmWhite/50'}`}>
                    {getPillarIcon(pillar.id)}
                  </div>
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-sciBlue dark:text-brand-sciBlueLight block mb-1">
                  {pillar.domain}
                </span>

                <h3 className="font-sans text-xl font-bold text-brand-navy dark:text-brand-warmWhite mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-navy/70 dark:text-brand-warmWhite/70 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Techniques list */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-brand-navy/50 dark:text-brand-warmWhite/50 mb-2.5">
                  Core Techniques
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.techniques.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-softGray/40 dark:bg-brand-navy/80 text-brand-navy/80 dark:text-brand-warmWhite/80 border border-brand-borderLight/80 dark:border-brand-borderDark/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Indicator dot */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-brand-gold" />
              )}
            </div>
          );
        })}
      </div>

      {/* Deep-dive banner for active pillar */}
      {selectedPillar && (
        <div className="p-6 rounded border border-brand-borderLight dark:border-brand-borderDark bg-brand-softGray/15 dark:bg-brand-darkBlue/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-sciBlue dark:text-brand-sciBlueLight mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-brand-navy dark:text-brand-warmWhite">
                Integrated Experimental-Computational Synergy
              </h4>
              <p className="text-xs text-brand-navy/70 dark:text-brand-warmWhite/70 mt-0.5 max-w-3xl">
                Techniques within <span className="font-semibold text-brand-navy dark:text-brand-warmWhite">{researchPillars.find(p => p.id === selectedPillar)?.title}</span> are directly coupled with reaction optimization and solid-state characterization in both ongoing thesis projects and peer-reviewed syntheses.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono font-medium text-brand-sciBlue dark:text-brand-sciBlueLight hover:underline self-start md:self-center whitespace-nowrap"
          >
            See Project Implementations →
          </a>
        </div>
      )}
    </section>
  );
};
