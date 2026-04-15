'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { SectionReveal } from './glitch-text';

export function Hero() {
  const { t } = useLanguage();
  const translations = t();
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Terminal typing effect
  useEffect(() => {
    if (currentLine >= translations.hero.terminalLines.length) {
      setIsTyping(false);
      return;
    }

    const fullLine = translations.hero.terminalLines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= fullLine.length) {
        setDisplayText(fullLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 300);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, [currentLine, translations.hero.terminalLines]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayText]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.05)_0%,transparent_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-nex-matrix/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-nex-cyber/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left - Content */}
          <SectionReveal>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-nex-matrix/30 bg-nex-matrix/5"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nex-matrix animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono text-nex-matrix uppercase tracking-wider">
                  Systems Online
                </span>
              </motion.div>

              {/* Headline */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-orbitron)] font-bold leading-tight">
                  <span className="text-foreground">{translations.hero.headline.split(' ').slice(0, 3).join(' ')}</span>
                  <br />
                  <span className="text-nex-matrix text-glow-matrix">
                    {translations.hero.headline.split(' ').slice(3).join(' ')}
                  </span>
                </h1>
              </div>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base lg:text-lg text-nex-muted max-w-lg font-mono text-xs sm:text-sm leading-relaxed"
              >
                {translations.hero.subheadline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <button
                  onClick={scrollToServices}
                  className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-nex-matrix text-nex-dark font-bold font-mono text-xs sm:text-sm uppercase tracking-wider rounded overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]"
                >
                  <span className="relative z-10">{translations.hero.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-nex-matrix to-nex-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border border-nex-cyber/50 text-nex-cyber font-mono text-xs sm:text-sm uppercase tracking-wider rounded hover:bg-nex-cyber/10 hover:border-nex-cyber transition-all"
                >
                  {translations.hero.ctaSecondary}
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-6 sm:gap-8 pt-2 sm:pt-4"
              >
                {[
                  { value: '99.9%', label: 'Uptime' },
                  { value: '24/7', label: 'Support' },
                  { value: '<2ms', label: 'Response' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-base sm:text-lg lg:text-xl font-bold font-mono text-nex-matrix">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-nex-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </SectionReveal>

          {/* Right - Terminal */}
          <SectionReveal delay={0.3}>
            <div className="relative">
              {/* Terminal glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-nex-matrix/5 rounded-xl sm:rounded-2xl blur-xl" />

              <div className="relative card-cyber rounded-lg sm:rounded-xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-nex-dark-border bg-nex-surface/50">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-nex-glitch/70" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-nex-matrix/70" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-nex-muted ml-1 sm:ml-2">nex-systems@terminal ~ %</span>
                </div>

                {/* Terminal Body */}
                <div
                  ref={terminalRef}
                  className="p-3 sm:p-4 lg:p-6 min-h-[180px] sm:min-h-[250px] lg:min-h-[320px] max-h-[350px] sm:max-h-[400px] overflow-y-auto font-mono text-xs sm:text-sm"
                >
                  {translations.hero.terminalLines.slice(0, currentLine).map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`mb-1.5 sm:mb-2 ${
                        line.includes('[OK]')
                          ? 'text-nex-matrix'
                          : line.includes('Welcome')
                          ? 'text-nex-cyber text-glow-cyber'
                          : 'text-nex-muted'
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}
                  {currentLine < translations.hero.terminalLines.length && (
                    <div className="text-nex-matrix">
                      {displayText}
                      <span className="terminal-cursor" />
                    </div>
                  )}
                  {!isTyping && (
                    <div className="mt-3 sm:mt-4 text-nex-matrix/70">
                      nex-systems@terminal ~ % <span className="terminal-cursor" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-nex-muted hover:text-nex-matrix transition-colors animate-float"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
    </section>
  );
}
