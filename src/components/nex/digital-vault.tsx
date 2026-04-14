'use client';

import { motion } from 'framer-motion';
import { Workflow, FileCode2, Container, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { SectionReveal } from './glitch-text';

const itemIcons: Record<string, React.ReactNode> = {
  'n8n Automation Templates': <Workflow className="w-8 h-8 sm:w-10 sm:h-10" />,
  'API Blueprints': <FileCode2 className="w-8 h-8 sm:w-10 sm:h-10" />,
  'Docker Stack Presets': <Container className="w-8 h-8 sm:w-10 sm:h-10" />,
};

const tagColors: Record<string, string> = {
  Popular: 'bg-nex-matrix/10 text-nex-matrix border-nex-matrix/30',
  Novo: 'bg-nex-matrix/10 text-nex-matrix border-nex-matrix/30',
  New: 'bg-nex-cyber/10 text-nex-cyber border-nex-cyber/30',
  Nouveau: 'bg-nex-cyber/10 text-nex-cyber border-nex-cyber/30',
  Essencial: 'bg-nex-glitch/10 text-nex-glitch border-nex-glitch/30',
  Essential: 'bg-nex-glitch/10 text-nex-glitch border-nex-glitch/30',
};

export function DigitalVault() {
  const { t } = useLanguage();
  const translations = t();
  const vault = translations.vault;

  return (
    <section id="vault" className="relative py-16 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nex-surface/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-mono text-nex-cyber uppercase tracking-[0.3em] mb-3 sm:mb-4 block">
              {'// CAE 47910'}
            </span>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-nex-cyber" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-orbitron)] font-bold text-foreground">
                {vault.title}
              </h2>
            </div>
            <p className="text-nex-muted font-mono text-xs sm:text-sm max-w-2xl mx-auto">
              {vault.subtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {vault.items.map((item, idx) => (
            <SectionReveal key={item.name} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative h-full rounded-lg sm:rounded-xl border border-nex-dark-border hover:border-nex-cyber/40 bg-nex-dark-card overflow-hidden transition-all duration-300"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nex-cyber/60 to-nex-matrix/60" />

                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Tag */}
                  <div className="mb-3 sm:mb-4">
                    <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono uppercase rounded-full border ${tagColors[item.tag] || 'bg-nex-muted/10 text-nex-muted border-nex-muted/30'}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-nex-cyber mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {itemIcons[item.name] || <FileCode2 className="w-8 h-8 sm:w-10 sm:h-10" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold font-[family-name:var(--font-orbitron)] text-foreground mb-2 sm:mb-3 group-hover:text-nex-cyber transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-nex-muted font-mono text-[11px] sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <button className="w-full py-2 sm:py-2.5 border border-nex-cyber/30 text-nex-cyber font-mono text-[10px] sm:text-xs uppercase tracking-wider rounded hover:bg-nex-cyber/10 hover:border-nex-cyber/60 transition-all group-hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]">
                    View Details →
                  </button>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
