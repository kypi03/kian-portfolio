import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScientificCanvas } from './components/ScientificCanvas';
import { ResearchPillars } from './components/ResearchPillars';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { ExperienceEducation } from './components/ExperienceEducation';
import { AboutStatement } from './components/AboutStatement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('kp_portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to the sleek luxury dark mode
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kp_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kp_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-brand-sciBlue selection:text-white bg-brand-warmWhite text-brand-navy dark:bg-brand-navy dark:text-brand-warmWhite transition-colors duration-300 scientific-grid">
      {/* Dynamic ambient scientific canvas */}
      <ScientificCanvas darkMode={darkMode} />

      {/* Main page content wrapper */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <ResearchPillars />
          <Projects />
          <Publications />
          <TechnicalExpertise />
          <ExperienceEducation />
          <AboutStatement />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
