'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionReveal } from './glitch-text';
import { useLanguage } from '@/hooks/use-language';
import { ArrowRight, Building2, Globe, Zap } from 'lucide-react';

const IMG_BASE = 'https://raw.githubusercontent.com/nextrustx-hub/NeXFlowX/main/public/images';

const enterpriseSolutions = [
  {
    id: 'clini360',
    name: 'Clini360',
    sectorKey: 'clini360',
    img: `${IMG_BASE}/clini360.jpg`,
    tags: ['Scheduling', 'WhatsApp', 'Billing'],
    color: 'nex-matrix',
  },
  {
    id: 'farma360',
    name: 'Farma360',
    sectorKey: 'farma360',
    img: `${IMG_BASE}/farma360.jpg`,
    tags: ['Inventory', 'Billing', 'Control'],
    color: 'nex-cyber',
  },
  {
    id: 'estetica360',
    name: 'Estética360',
    sectorKey: 'estetica360',
    img: `${IMG_BASE}/estetica360.jpg`,
    tags: ['Booking', 'CRM', 'Payments'],
    color: 'nex-glitch',
  },
  {
    id: 'fit360',
    name: 'Fit360',
    sectorKey: 'fit360',
    img: `${IMG_BASE}/fit360.jpg`,
    tags: ['Billing', 'Retention', 'Alerts'],
    color: 'nex-matrix',
  },
  {
    id: 'imob360',
    name: 'Imob360',
    sectorKey: 'imob360',
    img: `${IMG_BASE}/imob360.jpg`,
    tags: ['CRM', 'Calendar', 'Contracts'],
    color: 'nex-cyber',
  },
  {
    id: 'construi360',
    name: 'Construi360',
    sectorKey: 'construi360',
    img: `${IMG_BASE}/construi360.jpg`,
    tags: ['Tasks', 'Communication', 'Costs'],
    color: 'nex-glitch',
  },
  {
    id: 'ecom360',
    name: 'Ecom360',
    sectorKey: 'ecom360',
    img: `${IMG_BASE}/ecom360.jpg`,
    tags: ['Shopify', 'CRM', 'Recovery'],
    color: 'nex-matrix',
  },
  {
    id: 'retail360',
    name: 'Retail360',
    sectorKey: 'retail360',
    img: `${IMG_BASE}/retailcalcado360.jpg`,
    tags: ['Inventory', 'Omnichannel', 'Loyalty'],
    color: 'nex-cyber',
  },
  {
    id: 'creator360',
    name: 'Creator360',
    sectorKey: 'creator360',
    img: `${IMG_BASE}/creatortiktok360.jpg`,
    tags: ['YouTube', 'TikTok', 'Instagram'],
    color: 'nex-glitch',
  },
  {
    id: 'edu360',
    name: 'Edu360',
    sectorKey: 'edu360',
    img: `${IMG_BASE}/edu360.jpg`,
    tags: ['Enrollment', 'Onboarding', 'CRM'],
    color: 'nex-matrix',
  },
  {
    id: 'dev360',
    name: 'Dev360',
    sectorKey: 'dev360',
    img: `${IMG_BASE}/dev360.jpg`,
    tags: ['GitHub', 'Slack', 'Deploy'],
    color: 'nex-cyber',
  },
  {
    id: 'rh360',
    name: 'RH360',
    sectorKey: 'rh360',
    img: `${IMG_BASE}/rh360.jpg`,
    tags: ['Screening', 'Onboarding', 'HR'],
    color: 'nex-glitch',
  },
  {
    id: 'fin360',
    name: 'Fin360',
    sectorKey: 'fin360',
    img: `${IMG_BASE}/fin360.jpg`,
    tags: ['Invoice', 'ERP', 'Dashboard'],
    color: 'nex-matrix',
  },
  {
    id: 'manut360',
    name: 'Manut360',
    sectorKey: 'manut360',
    img: `${IMG_BASE}/manut360.jpg`,
    tags: ['Scheduling', 'Orders', 'Parts'],
    color: 'nex-cyber',
  },
  {
    id: 'limpeza360',
    name: 'Limpeza360',
    sectorKey: 'limpeza360',
    img: `${IMG_BASE}/limpeza360.jpg`,
    tags: ['Scheduling', 'Quality', 'CSAT'],
    color: 'nex-glitch',
  },
  {
    id: 'turismo360',
    name: 'Turismo360',
    sectorKey: 'turismo360',
    img: `${IMG_BASE}/turismo360.jpg`,
    tags: ['Booking', 'Payment', 'Travel'],
    color: 'nex-matrix',
  },
  {
    id: 'ware360',
    name: 'Ware360',
    sectorKey: 'ware360',
    img: `${IMG_BASE}/ware360.jpg`,
    tags: ['Stock', 'Picking', 'Carriers'],
    color: 'nex-cyber',
  },
  {
    id: 'log360',
    name: 'Log360',
    sectorKey: 'log360',
    img: `${IMG_BASE}/log360.jpg`,
    tags: ['Routing', 'Tracking', 'Costs'],
    color: 'nex-glitch',
  },
];

interface EnterpriseSolutionsProps {
  onOpenDevForm: (solutionId: string, solutionName: string) => void;
}

export function EnterpriseSolutions({ onOpenDevForm }: EnterpriseSolutionsProps) {
  const { t } = useLanguage();
  const translations = t();

  const sectors = translations.enterprise;
  const title = sectors.title;
  const subtitle = sectors.subtitle;
  const sectionLabel = sectors.label;
  const ctaTitle = sectors.ctaTitle;
  const ctaDesc = sectors.ctaDesc;

  return (
    <section id="enterprise" className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nex-surface/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-nex-matrix/30 bg-nex-matrix/5 mb-4 sm:mb-6">
              <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-nex-matrix" />
              <span className="text-[10px] sm:text-xs font-mono text-nex-matrix uppercase tracking-wider font-bold">{sectionLabel}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-orbitron)] font-bold text-foreground mb-3 sm:mb-4">
              {title}
            </h2>
            <p className="text-nex-muted font-mono text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {enterpriseSolutions.map((solution, idx) => {
            const sectorData = sectors.items[solution.sectorKey as keyof typeof sectors.items];
            return (
              <SectionReveal key={solution.id} delay={Math.min(idx * 0.03, 0.3)}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  className={`group relative h-full rounded-lg sm:rounded-xl border border-nex-dark-border hover:border-${solution.color}/40 bg-nex-dark-card/80 overflow-hidden transition-all duration-300`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${solution.color}/50 to-transparent z-10`} />

                  {/* Image */}
                  <div className="relative h-28 sm:h-36 lg:h-40 overflow-hidden">
                    <Image
                      src={solution.img}
                      alt={solution.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nex-dark-card via-nex-dark-card/60 to-transparent" />
                    {/* Name badge on image */}
                    <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 z-10">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold font-[family-name:var(--font-orbitron)] text-foreground group-hover:text-nex-matrix transition-colors">
                        {solution.name}
                      </h3>
                      {sectorData && (
                        <p className="text-[10px] sm:text-[11px] font-mono text-nex-muted/80">{sectorData}</p>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3">
                      {solution.tags.map((tag) => (
                        <span key={tag} className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono text-${solution.color}/70 border border-${solution.color}/15 rounded-full`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hire Now Button - Simple & Clean */}
                    <button
                      onClick={() => onOpenDevForm(solution.id, solution.name)}
                      className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-nex-matrix text-nex-dark font-bold font-mono text-xs sm:text-sm rounded-lg hover:shadow-[0_0_24px_rgba(0,255,65,0.35)] transition-all duration-300 group/btn"
                    >
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{translations.devForm?.btnLabel || 'CONTRATAR AGORA'}</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        {/* CTA */}
        <SectionReveal delay={0.5}>
          <div className="mt-8 sm:mt-12 text-center">
            <div className="card-cyber rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-nex-matrix/10 border border-nex-matrix/20">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-nex-matrix" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold font-[family-name:var(--font-orbitron)] text-sm sm:text-base lg:text-lg text-foreground mb-0.5 sm:mb-1">
                    {ctaTitle}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-xs text-nex-muted">{ctaDesc}</p>
                </div>
                <a
                  href="mailto:contact@nex-systems.xyz?subject=Enterprise%20Automation%20Consultation"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-nex-matrix text-nex-dark font-bold font-mono text-xs sm:text-sm rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all"
                >
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{ctaTitle.split('?')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
