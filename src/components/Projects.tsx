import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { CheckCircle, Sliders, FlaskConical, Binary } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeStepP1, setActiveStepP1] = useState(0);
  const [activeStepP2, setActiveStepP2] = useState(0);

  const p1 = featuredProjects[0];
  const p2 = featuredProjects[1];

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      {/* Section Eyebrow */}
      <div className="mb-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest uppercase">
          <span>02 // ONGOING THESIS & LABORATORY RESEARCH</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-4">
          Featured Research Projects
        </h2>
        <p className="text-base sm:text-lg text-brand-navy/70 dark:text-brand-warmWhite/70">
          In-depth experimental synthesis and computational modeling currently underway at the School of Chemistry, University of Tehran.
        </p>
      </div>

      <div className="space-y-24">
        {/* ========================================================
            PROJECT 01: CoZnFe2O4 ELECTRODE & BIODIESEL ESTERIFICATION
            ======================================================== */}
        <article className="border border-brand-borderLight dark:border-brand-borderDark rounded-lg overflow-hidden bg-white/50 dark:bg-brand-darkBlue/25 p-8 sm:p-10 lg:p-12 shadow-sm">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-borderLight/80 dark:border-brand-borderDark/80 pb-6 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-brand-sciBlue/10 dark:bg-brand-sciBlue/20 text-brand-sciBlue dark:text-brand-sciBlueLight font-semibold">
                PROJECT {p1.number}
              </span>
              <span className="px-2.5 py-1 rounded border border-brand-gold/40 text-brand-gold font-medium">
                {p1.status} Experimental
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-brand-navy/60 dark:text-brand-warmWhite/60">
              <span>{p1.affiliation}</span>
              <span>•</span>
              <span>Supervisor: <strong className="text-brand-navy dark:text-brand-warmWhite">{p1.supervisor}</strong></span>
              <span>•</span>
              <span>{p1.period}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-brand-navy dark:text-brand-warmWhite leading-tight mb-3">
                {p1.title}
              </h3>
              <p className="font-mono text-sm text-brand-sciBlue dark:text-brand-sciBlueLight mb-6">
                {p1.subtitle}
              </p>
              <p className="text-base text-brand-navy/80 dark:text-brand-warmWhite/80 leading-relaxed mb-8">
                {p1.summary}
              </p>

              {/* Research Highlights Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-navy/50 dark:text-brand-warmWhite/50">
                  Key Experimental Parameters & Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {p1.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded bg-brand-softGray/20 dark:bg-brand-navy/60 border border-brand-borderLight/60 dark:border-brand-borderDark/60 text-xs">
                      <CheckCircle className="w-4 h-4 text-brand-sciBlue dark:text-brand-sciBlueLight mt-0.5 flex-shrink-0" />
                      <span className="text-brand-navy/90 dark:text-brand-warmWhite/90">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Abstract Scientific Schematic */}
            <div className="lg:col-span-5 bg-brand-warmWhite dark:bg-brand-navy rounded border border-brand-borderLight dark:border-brand-borderDark p-6">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-borderLight/60 dark:border-brand-borderDark/60 font-mono text-[11px] text-brand-navy/60 dark:text-brand-warmWhite/60 uppercase">
                <span className="flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-brand-sciBlue" />
                  Cell Architecture Schematic
                </span>
                <span>FIG 1.1</span>
              </div>

              {/* SVG Scientific Schematic */}
              <div className="relative w-full aspect-[4/3] bg-white dark:bg-brand-darkBlue/80 rounded border border-brand-borderLight/40 dark:border-brand-borderDark/40 p-4 flex flex-col justify-center items-center">
                <svg viewBox="0 0 320 220" className="w-full h-full text-brand-navy dark:text-brand-warmWhite">
                  <rect x="30" y="40" width="260" height="150" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.35" />
                  <path d="M 30 75 Q 160 85 290 75 L 290 185 Q 160 195 30 185 Z" fill="rgba(26, 101, 158, 0.08)" />

                  <rect x="70" y="30" width="24" height="135" rx="2" fill="rgba(7, 26, 43, 0.85)" stroke="#1A659E" strokeWidth="1" />
                  <rect x="94" y="55" width="8" height="110" fill="#D6A84F" rx="1" opacity="0.9" />
                  <text x="82" y="22" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="currentColor">Graphite</text>
                  <text x="98" y="178" fontSize="7.5" fontFamily="monospace" fill="#D6A84F">CoZnFe₂O₄</text>

                  <rect x="225" y="30" width="20" height="135" rx="2" fill="rgba(74, 91, 108, 0.6)" stroke="#4A5B6C" strokeWidth="1" />
                  <text x="235" y="22" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="currentColor">Cathode</text>

                  <path d="M 82 30 L 82 15 L 140 15" fill="none" stroke="#1A659E" strokeWidth="1.5" />
                  <circle cx="160" cy="15" r="10" fill="none" stroke="#D6A84F" strokeWidth="1.5" />
                  <text x="160" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="#D6A84F">V</text>
                  <path d="M 180 15 L 235 15 L 235 30" fill="none" stroke="#1A659E" strokeWidth="1.5" />

                  <g opacity="0.85">
                    <circle cx="140" cy="95" r="4" fill="#2C82C9" />
                    <text x="148" y="98" fontSize="7.5" fontFamily="monospace" fill="currentColor">Oleic Acid</text>

                    <circle cx="165" cy="130" r="3.5" fill="#D6A84F" />
                    <text x="173" y="133" fontSize="7.5" fontFamily="monospace" fill="currentColor">Methanol</text>

                    <circle cx="125" cy="145" r="2.5" fill="#1A659E" />
                    <text x="133" y="148" fontSize="7.5" fontFamily="monospace" fill="currentColor">Na⁺ / Cl⁻</text>
                  </g>

                  <path d="M 150 110 L 195 110" stroke="#D6A84F" strokeWidth="1.2" />
                  <text x="175" y="105" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#D6A84F">Esterification</text>
                </svg>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-borderLight/60 dark:border-brand-borderDark/60 text-[11px] font-mono text-brand-navy/70 dark:text-brand-warmWhite/70 space-y-1">
                <div>• Synthesis: Metal nitrates + L-arginine fuel (600°C)</div>
                <div>• Optimization: RSM / Central Composite Design</div>
                <div>• Benchmark: Against traditional KOH/H₂SO₄ controls</div>
              </div>
            </div>
          </div>

          {/* Interactive Workflow Sequence */}
          <div className="pt-6 border-t border-brand-borderLight/80 dark:border-brand-borderDark/80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-navy/60 dark:text-brand-warmWhite/60">
                Experimental Workflow Pipeline // Click steps to inspect details
              </h4>
              <span className="font-mono text-xs text-brand-sciBlue dark:text-brand-sciBlueLight">
                Step {activeStepP1 + 1} of {p1.workflow.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
              {p1.workflow.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStepP1(idx)}
                  className={`text-left p-3 rounded border transition-all ${
                    activeStepP1 === idx
                      ? 'border-brand-sciBlue bg-brand-sciBlue/10 dark:bg-brand-sciBlue/20 text-brand-navy dark:text-brand-warmWhite font-semibold'
                      : 'border-brand-borderLight/80 dark:border-brand-borderDark/60 bg-transparent text-brand-navy/60 dark:text-brand-warmWhite/60 hover:border-brand-sciBlue/40'
                  }`}
                >
                  <span className="text-[10px] font-mono block text-brand-sciBlue dark:text-brand-sciBlueLight mb-1">
                    0{item.step}
                  </span>
                  <span className="text-xs font-sans line-clamp-1">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Active Step Explanatory Card */}
            <div className="p-4 rounded bg-brand-softGray/30 dark:bg-brand-navy/70 border border-brand-borderLight dark:border-brand-borderDark flex items-start gap-3 text-xs">
              <div className="w-5 h-5 rounded-full bg-brand-sciBlue text-white flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                {activeStepP1 + 1}
              </div>
              <div>
                <strong className="text-brand-navy dark:text-brand-warmWhite text-xs font-semibold mr-2">
                  {p1.workflow[activeStepP1].label}:
                </strong>
                <span className="text-brand-navy/80 dark:text-brand-warmWhite/80">
                  {p1.workflow[activeStepP1].detail}
                </span>
              </div>
            </div>
          </div>
        </article>


        {/* ========================================================
            PROJECT 02: DATA-DRIVEN CATALYSIS (DOE & ANN MODELING)
            ======================================================== */}
        <article className="border border-brand-borderLight dark:border-brand-borderDark rounded-lg overflow-hidden bg-white/50 dark:bg-brand-darkBlue/25 p-8 sm:p-10 lg:p-12 shadow-sm">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-borderLight/80 dark:border-brand-borderDark/80 pb-6 mb-8 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-brand-sciBlue/10 dark:bg-brand-sciBlue/20 text-brand-sciBlue dark:text-brand-sciBlueLight font-semibold">
                PROJECT {p2.number}
              </span>
              <span className="px-2.5 py-1 rounded border border-brand-gold/40 text-brand-gold font-medium">
                {p2.status} Computational
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-brand-navy/60 dark:text-brand-warmWhite/60">
              <span>{p2.affiliation}</span>
              <span>•</span>
              <span>{p2.period}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-brand-navy dark:text-brand-warmWhite leading-tight mb-3">
                {p2.title}
              </h3>
              <p className="font-mono text-sm text-brand-sciBlue dark:text-brand-sciBlueLight mb-6">
                {p2.subtitle}
              </p>
              <p className="text-base text-brand-navy/80 dark:text-brand-warmWhite/80 leading-relaxed mb-8">
                {p2.summary}
              </p>

              {/* Research Highlights Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-navy/50 dark:text-brand-warmWhite/50">
                  Methodological Highlights & Computational Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {p2.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded bg-brand-softGray/20 dark:bg-brand-navy/60 border border-brand-borderLight/60 dark:border-brand-borderDark/60 text-xs">
                      <Binary className="w-4 h-4 text-brand-sciBlue dark:text-brand-sciBlueLight mt-0.5 flex-shrink-0" />
                      <span className="text-brand-navy/90 dark:text-brand-warmWhite/90">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Abstract Scientific Schematic */}
            <div className="lg:col-span-5 bg-brand-warmWhite dark:bg-brand-navy rounded border border-brand-borderLight dark:border-brand-borderDark p-6">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-borderLight/60 dark:border-brand-borderDark/60 font-mono text-[11px] text-brand-navy/60 dark:text-brand-warmWhite/60 uppercase">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-brand-gold" />
                  DOE-ANN Hybrid Pipeline
                </span>
                <span>FIG 2.1</span>
              </div>

              {/* SVG Scientific Schematic */}
              <div className="relative w-full aspect-[4/3] bg-white dark:bg-brand-darkBlue/80 rounded border border-brand-borderLight/40 dark:border-brand-borderDark/40 p-4 flex flex-col justify-center items-center">
                <svg viewBox="0 0 320 220" className="w-full h-full text-brand-navy dark:text-brand-warmWhite">
                  <g id="input-layer">
                    <circle cx="45" cy="50" r="10" fill="none" stroke="#1A659E" strokeWidth="1.5" />
                    <text x="45" y="53" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="currentColor">Temp</text>

                    <circle cx="45" cy="95" r="10" fill="none" stroke="#1A659E" strokeWidth="1.5" />
                    <text x="45" y="98" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="currentColor">Pres</text>

                    <circle cx="45" cy="140" r="10" fill="none" stroke="#1A659E" strokeWidth="1.5" />
                    <text x="45" y="143" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="currentColor">Time</text>

                    <circle cx="45" cy="185" r="10" fill="none" stroke="#1A659E" strokeWidth="1.5" />
                    <text x="45" y="188" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="currentColor">Cat%</text>

                    <text x="45" y="24" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#1A659E" fontWeight="bold">Factors</text>
                  </g>

                  <g stroke="currentColor" strokeWidth="0.5" opacity="0.25">
                    <line x1="55" y1="50" x2="150" y2="70" />
                    <line x1="55" y1="50" x2="150" y2="115" />
                    <line x1="55" y1="95" x2="150" y2="70" />
                    <line x1="55" y1="95" x2="150" y2="115" />
                    <line x1="55" y1="95" x2="150" y2="160" />
                    <line x1="55" y1="140" x2="150" y2="115" />
                    <line x1="55" y1="140" x2="150" y2="160" />
                    <line x1="55" y1="185" x2="150" y2="115" />
                    <line x1="55" y1="185" x2="150" y2="160" />
                  </g>

                  <g id="hidden-layer">
                    <circle cx="150" cy="70" r="12" fill="rgba(26, 101, 158, 0.15)" stroke="#2C82C9" strokeWidth="1.5" />
                    <text x="150" y="73" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="currentColor">h₁</text>

                    <circle cx="150" cy="115" r="12" fill="rgba(26, 101, 158, 0.15)" stroke="#2C82C9" strokeWidth="1.5" />
                    <text x="150" y="118" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="currentColor">h₂</text>

                    <circle cx="150" cy="160" r="12" fill="rgba(26, 101, 158, 0.15)" stroke="#2C82C9" strokeWidth="1.5" />
                    <text x="150" y="163" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="currentColor">h₃</text>

                    <text x="150" y="24" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#2C82C9" fontWeight="bold">ANN Layer</text>
                  </g>

                  <g stroke="#D6A84F" strokeWidth="0.8" opacity="0.45">
                    <line x1="162" y1="70" x2="265" y2="90" />
                    <line x1="162" y1="115" x2="265" y2="90" />
                    <line x1="162" y1="115" x2="265" y2="145" />
                    <line x1="162" y1="160" x2="265" y2="145" />
                  </g>

                  <g id="output-layer">
                    <circle cx="265" cy="90" r="13" fill="rgba(214, 168, 79, 0.15)" stroke="#D6A84F" strokeWidth="1.5" />
                    <text x="265" y="93" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#D6A84F" fontWeight="bold">Yield</text>

                    <circle cx="265" cy="145" r="13" fill="rgba(214, 168, 79, 0.15)" stroke="#D6A84F" strokeWidth="1.5" />
                    <text x="265" y="148" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#D6A84F" fontWeight="bold">Selectivity</text>

                    <text x="265" y="24" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#D6A84F" fontWeight="bold">Target</text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-borderLight/60 dark:border-brand-borderDark/60 text-[11px] font-mono text-brand-navy/70 dark:text-brand-warmWhite/70 space-y-1">
                <div>• Substrate: 4-Methylanisole catalytic upgrading</div>
                <div>• Tools: Design-Expert, Minitab, Python, NumPy/Pandas</div>
                <div>• Scope: Non-linear modeling & factor interaction mapping</div>
              </div>
            </div>
          </div>

          {/* Interactive Pipeline Sequence */}
          <div className="pt-6 border-t border-brand-borderLight/80 dark:border-brand-borderDark/80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-navy/60 dark:text-brand-warmWhite/60">
                Data-Driven Pipeline // Click nodes to inspect stage
              </h4>
              <span className="font-mono text-xs text-brand-sciBlue dark:text-brand-sciBlueLight">
                Phase {activeStepP2 + 1} of {p2.workflow.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
              {p2.workflow.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStepP2(idx)}
                  className={`text-left p-3 rounded border transition-all ${
                    activeStepP2 === idx
                      ? 'border-brand-sciBlue bg-brand-sciBlue/10 dark:bg-brand-sciBlue/20 text-brand-navy dark:text-brand-warmWhite font-semibold'
                      : 'border-brand-borderLight/80 dark:border-brand-borderDark/60 bg-transparent text-brand-navy/60 dark:text-brand-warmWhite/60 hover:border-brand-sciBlue/40'
                  }`}
                >
                  <span className="text-[10px] font-mono block text-brand-sciBlue dark:text-brand-sciBlueLight mb-1">
                    0{item.step}
                  </span>
                  <span className="text-xs font-sans line-clamp-1">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Active Step Explanatory Card */}
            <div className="p-4 rounded bg-brand-softGray/30 dark:bg-brand-navy/70 border border-brand-borderLight dark:border-brand-borderDark flex items-start gap-3 text-xs">
              <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                {activeStepP2 + 1}
              </div>
              <div>
                <strong className="text-brand-navy dark:text-brand-warmWhite text-xs font-semibold mr-2">
                  {p2.workflow[activeStepP2].label}:
                </strong>
                <span className="text-brand-navy/80 dark:text-brand-warmWhite/80">
                  {p2.workflow[activeStepP2].detail}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
