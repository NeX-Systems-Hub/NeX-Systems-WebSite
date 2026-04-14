'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage, useInitLanguage } from '@/hooks/use-language';
import { type Locale, localeNames } from '@/lib/i18n';

const navLinks = ['home', 'services', 'product', 'enterprise', 'support'] as const;

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const translations = t();

  useInitLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-nex-dark/90 backdrop-blur-xl border-b border-nex-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-1.5 sm:gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-nex-matrix" />
              <div className="absolute inset-0 blur-md bg-nex-matrix/30 group-hover:bg-nex-matrix/50 transition-all" />
            </div>
            <span className="font-[family-name:var(--font-orbitron)] text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-foreground tracking-wider">
              NEX<span className="text-nex-matrix">-</span>SYSTEMS
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-mono text-nex-muted hover:text-nex-matrix transition-colors duration-200 uppercase tracking-wider relative group"
              >
                {translations.nav[link as keyof typeof translations.nav]}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-nex-matrix group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 ml-3 pl-3 border-l border-nex-dark-border">
              {(Object.keys(localeNames) as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={`px-1.5 lg:px-2 py-1 text-[10px] lg:text-xs font-mono uppercase transition-all duration-200 rounded ${
                    locale === loc
                      ? 'text-nex-matrix bg-nex-matrix/10'
                      : 'text-nex-muted hover:text-foreground'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-nex-muted hover:text-nex-matrix transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-nex-dark/95 backdrop-blur-xl border-b border-nex-dark-border overflow-hidden"
          >
            <div className="px-4 py-3 sm:py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-mono text-nex-muted hover:text-nex-matrix hover:bg-nex-matrix/5 rounded transition-all uppercase tracking-wider"
                >
                  {translations.nav[link as keyof typeof translations.nav]}
                </button>
              ))}
              <div className="flex items-center gap-1.5 sm:gap-2 pt-2 mt-2 border-t border-nex-dark-border">
                {(Object.keys(localeNames) as Locale[]).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={`flex-1 py-2 text-[10px] sm:text-xs font-mono uppercase text-center rounded transition-all ${
                      locale === loc
                        ? 'text-nex-matrix bg-nex-matrix/10 border border-nex-matrix/30'
                        : 'text-nex-muted hover:text-foreground'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
