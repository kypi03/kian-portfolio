import React from 'react';
import { educationHistory, experienceHistory } from '../data/portfolioData';
import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-brand-borderLight dark:border-brand-borderDark/60">
      {/* Section Eyebrow */}
      <div className="mb-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest uppercase">
          <span>05 // TRAJECTORY & APPLIED PRACTICE</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-brand-navy dark:text-brand-warmWhite mb-4">
          Education & Experience
        </h2>
        <p className="text-base sm:text-lg text-brand-navy/70 dark:text-brand-warmWhite/70">
          Academic foundation at Iran's premier university combined with computational software engineering and pedagogy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ========================================================
            LEFT COLUMN: EDUCATION & NATIONAL MERIT
            ======================================================== */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-brand-borderLight/80 dark:border-brand-borderDark/80">
              <GraduationCap className="w-5 h-5 text-brand-sciBlue dark:text-brand-sciBlueLight" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-brand-navy dark:text-brand-warmWhite font-semibold">
                Academic Background
              </h3>
            </div>

            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 rounded border border-brand-borderLight dark:border-brand-borderDark bg-white/40 dark:bg-brand-darkBlue/25 relative overflow-hidden"
              >
                <span className="text-[11px] font-mono text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest block mb-2">
                  {edu.period}
                </span>

                <h4 className="font-serif text-2xl font-normal text-brand-navy dark:text-brand-warmWhite mb-2">
                  {edu.degree}
                </h4>

                <p className="text-sm font-sans font-medium text-brand-navy/70 dark:text-brand-warmWhite/70 mb-6">
                  {edu.institution}
                </p>

                {/* Metrics / GPA & Distinction */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-borderLight/60 dark:border-brand-borderDark/60">
                  <div className="p-3 rounded bg-brand-softGray/20 dark:bg-brand-navy/60 border border-brand-borderLight/50 dark:border-brand-borderDark/50">
                    <span className="text-[10px] font-mono uppercase text-brand-navy/50 dark:text-brand-warmWhite/50 block mb-1">
                      Cumulative GPA
                    </span>
                    <span className="font-mono text-lg font-bold text-brand-navy dark:text-brand-warmWhite">
                      {edu.gpa}
                    </span>
                  </div>

                  <div className="p-3 rounded bg-brand-softGray/20 dark:bg-brand-navy/60 border border-brand-borderLight/50 dark:border-brand-borderDark/50">
                    <span className="text-[10px] font-mono uppercase text-brand-navy/50 dark:text-brand-warmWhite/50 block mb-1">
                      National Standing
                    </span>
                    <span className="font-mono text-lg font-bold text-brand-gold">
                      Top 3%
                    </span>
                  </div>
                </div>

                {/* Competitive Entrance Exam badge */}
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-brand-navy/70 dark:text-brand-warmWhite/70">
                  <Award className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>{edu.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pedagogy / Teaching Focus Box */}
          <div className="p-6 rounded border border-brand-borderLight dark:border-brand-borderDark bg-brand-softGray/15 dark:bg-brand-navy/40">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-brand-sciBlue" />
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-navy dark:text-brand-warmWhite font-semibold">
                Pedagogical Experience
              </h4>
            </div>
            <p className="text-xs text-brand-navy/75 dark:text-brand-warmWhite/75 leading-relaxed">
              Serving as Teaching Assistant for General Chemistry at the University of Tehran provided deep exposure to curriculum delivery, grading standardization, and synthesizing complex chemical mechanisms into clear instructional recitations.
            </p>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: EXPERIENCE TIMELINE
            ======================================================== */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-brand-borderLight/80 dark:border-brand-borderDark/80">
            <Briefcase className="w-5 h-5 text-brand-sciBlue dark:text-brand-sciBlueLight" />
            <h3 className="font-mono text-sm uppercase tracking-widest text-brand-navy dark:text-brand-warmWhite font-semibold">
              Appointments & Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experienceHistory.map((exp) => (
              <div
                key={exp.id}
                className="p-7 rounded border border-brand-borderLight dark:border-brand-borderDark bg-white/40 dark:bg-brand-darkBlue/25 hover:border-brand-sciBlue/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-brand-sciBlue dark:text-brand-sciBlueLight">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-brand-borderLight dark:border-brand-borderDark text-brand-navy/70 dark:text-brand-warmWhite/70">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-brand-navy/40 dark:text-brand-warmWhite/40">
                    {exp.location}
                  </span>
                </div>

                <h4 className="font-sans text-lg font-bold text-brand-navy dark:text-brand-warmWhite mb-1">
                  {exp.role}
                </h4>

                <p className="font-mono text-xs text-brand-navy/60 dark:text-brand-warmWhite/60 mb-4">
                  {exp.organization}
                </p>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-brand-navy/75 dark:text-brand-warmWhite/75 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-sciBlue mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
