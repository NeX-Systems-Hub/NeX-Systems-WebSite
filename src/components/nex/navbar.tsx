'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, useInitLanguage } from '@/hooks/use-language';
import { type Locale, localeNames } from '@/lib/i18n';

const navLinks = ['home', 'services', 'product', 'enterprise', 'support'] as const;

const localeFlags: Record<Locale, string> = {
  pt: '🇵🇹',
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
};

const localeLabels: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
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

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleSetLocale = (loc: Locale) => {
    setLocale(loc);
    setLangOpen(false);
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

            {/* Language Switcher - Desktop */}
            <div ref={langRef} className="relative ml-3 pl-3 border-l border-nex-dark-border">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-nex-muted hover:text-foreground hover:bg-nex-surface/50 transition-all"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{localeFlags[locale]}</span>
                <span className="text-[11px]">{localeLabels[locale]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 py-1.5 bg-nex-dark-card border border-nex-dark-border rounded-xl shadow-2xl overflow-hidden"
                  >
                    {(Object.keys(localeNames) as Locale[]).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleSetLocale(loc)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono transition-all ${
                          locale === loc
                            ? 'text-nex-matrix bg-nex-matrix/10'
                            : 'text-nex-muted hover:text-foreground hover:bg-nex-surface/30'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{localeFlags[loc]}</span>
                          <span>{localeLabels[loc]}</span>
                        </span>
                        {locale === loc && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
                  className="block w-full text-left px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-mono text-nex-muted hover:text-nex-matrix hover:bg-nex-matrix/5 rounded-lg transition-all uppercase tracking-wider"
                >
                  {translations.nav[link as keyof typeof translations.nav]}
                </button>
              ))}

              {/* Language Selector - Mobile */}
              <div className="pt-2 mt-2 border-t border-nex-dark-border">
                <div className="flex items-center gap-2 px-4 py-2 text-[10px] sm:text-xs font-mono text-nex-muted uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Idioma</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 px-3 pt-1">
                  {(Object.keys(localeNames) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleSetLocale(loc)}
                      className={`flex items-center gap-2 px-3 py-2.5 text-xs font-mono rounded-lg transition-all ${
                        locale === loc
                          ? 'text-nex-matrix bg-nex-matrix/10 border border-nex-matrix/30'
                          : 'text-nex-muted hover:text-foreground hover:bg-nex-surface/30'
                      }`}
                    >
                      <span>{localeFlags[loc]}</span>
                      <span>{localeLabels[loc]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
