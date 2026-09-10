import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['research', 'projects', 'publications', 'expertise', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-warmWhite/90 dark:bg-brand-navy/90 backdrop-blur-md shadow-sm border-b border-brand-softGray/50 dark:border-brand-borderDark/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sciBlue"
        >
          <div className="w-8 h-8 rounded border border-brand-sciBlue/40 dark:border-brand-sciBlue/60 flex items-center justify-center font-mono text-xs font-semibold text-brand-navy dark:text-brand-warmWhite bg-brand-warmWhite dark:bg-brand-darkBlue shadow-xs transition-colors group-hover:border-brand-gold">
            {personalInfo.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-wider uppercase text-brand-navy dark:text-brand-warmWhite">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-brand-sciBlue dark:text-brand-sciBlueLight tracking-widest">
              APPLIED CHEMISTRY
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-brand-sciBlue dark:text-brand-sciBlueLight font-semibold'
                    : 'text-brand-navy/70 dark:text-brand-warmWhite/70 hover:text-brand-navy dark:hover:text-brand-warmWhite'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-gold" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-3">
          {/* Quick email action */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-brand-borderLight dark:border-brand-borderDark rounded hover:border-brand-sciBlue dark:hover:border-brand-sciBlueLight transition-all text-brand-navy dark:text-brand-warmWhite"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-sciBlue dark:text-brand-sciBlueLight" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded border border-brand-borderLight dark:border-brand-borderDark hover:bg-brand-softGray/30 dark:hover:bg-brand-darkBlue/70 transition-colors text-brand-navy dark:text-brand-warmWhite"
          >
            {darkMode ? <Sun className="w-4 h-4 text-brand-gold" /> : <Moon className="w-4 h-4 text-brand-sciBlue" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded border border-brand-borderLight dark:border-brand-borderDark text-brand-navy dark:text-brand-warmWhite hover:bg-brand-softGray/30"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-brand-warmWhite dark:bg-brand-navy border-b border-brand-borderLight dark:border-brand-borderDark p-6 shadow-xl z-50">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-brand-softGray/20 dark:border-brand-borderDark/40 flex items-center justify-between text-brand-navy dark:text-brand-warmWhite"
              >
                <span>{link.label}</span>
                <span className="text-xs text-brand-sciBlue dark:text-brand-sciBlueLight font-sans">→</span>
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs font-mono text-brand-sciBlue dark:text-brand-sciBlueLight"
              >
                {personalInfo.email}
              </a>
              <span className="text-[11px] font-mono text-brand-navy/50 dark:text-brand-warmWhite/50">
                Tehran, Iran
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
