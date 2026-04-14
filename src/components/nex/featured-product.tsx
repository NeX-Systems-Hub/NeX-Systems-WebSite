'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Lock, Download, Users, RefreshCw, ArrowRight, Shield, ExternalLink } from 'lucide-react';
import { SectionReveal } from './glitch-text';
import { useLanguage } from '@/hooks/use-language';

function BitcoinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
    </svg>
  );
}

export function FeaturedProduct() {
  const { t } = useLanguage();
  const translations = t();
  const prod = translations.product;

  const handleBuyNow = () => {
    window.location.href = 'mailto:contact@nex-systems.xyz?subject=NeXFlowX%20Automation%20Library%20Purchase%20-%E2%82%AC5.00';
  };

  return (
    <section id="product" className="relative py-16 sm:py-24 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nex-cyber/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nex-matrix/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <SectionReveal>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-nex-glitch/30 bg-nex-glitch/5">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-nex-glitch" />
              <span className="text-[10px] sm:text-xs font-mono text-nex-glitch uppercase tracking-wider font-bold">{prod.activeLabel}</span>
            </span>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Product Info */}
          <SectionReveal>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-orbitron)] font-bold leading-tight">
                <span className="text-nex-cyber text-glow-cyber">The Automation</span>
                <br />
                <span className="text-foreground">Library</span>
              </h2>

              <p className="text-nex-muted font-mono text-xs sm:text-sm leading-relaxed max-w-lg">
                {prod.description}
                <span className="text-nex-cyber font-bold"> {prod.browseImport}</span>
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
                {[
                  { value: '4,300+', label: prod.statsTemplates },
                  { value: '150+', label: prod.statsIntegrations },
                  { value: '24/7', label: prod.statsAccess },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-nex-dark-border bg-nex-surface/50">
                    <span className="text-nex-matrix font-bold font-mono text-sm sm:text-base lg:text-lg">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-nex-muted font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Category tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['AI Agents & Data', 'Comms & Chatbots', 'CRM & E-commerce', 'Cloud & DevOps', 'Productivity'].map((cat) => (
                  <span key={cat} className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono text-nex-muted border border-nex-dark-border rounded-full hover:border-nex-matrix/30 hover:text-nex-matrix transition-colors cursor-default">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right - Pricing Card */}
          <SectionReveal delay={0.2}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-nex-cyber/5 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl" />

              <motion.div
                className="relative card-cyber rounded-lg sm:rounded-xl overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Best Value Banner */}
                <div className="bg-gradient-to-r from-nex-glitch via-nex-cyber to-nex-matrix p-0.5 sm:p-1">
                  <div className="bg-nex-dark-card text-center py-1.5 sm:py-2">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-nex-cyber uppercase tracking-[0.2em]">
                      {prod.bestValue}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-0.5 sm:mb-1">
                      <span className="text-xs sm:text-sm font-mono text-nex-muted">€</span>
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-orbitron)] font-black text-foreground">5</span>
                      <span className="text-lg sm:text-xl font-mono text-nex-muted">.00</span>
                    </div>
                    <p className="text-[10px] sm:text-xs font-mono text-nex-muted">{prod.singlePayment}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                    {[
                      { icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: prod.featureWorkflows },
                      { icon: <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: prod.featureLifetime },
                      { icon: <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: prod.featureInstant },
                      { icon: <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: prod.featureJson },
                      { icon: <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: prod.featureUpdates },
                      { icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: prod.featureCommunity },
                    ].map((feature) => (
                      <div key={feature.text} className="flex items-center gap-2 sm:gap-3">
                        <div className="flex-shrink-0 text-nex-matrix">{feature.icon}</div>
                        <span className="text-xs sm:text-sm font-mono text-foreground/90">{feature.text}</span>
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-nex-matrix ml-auto flex-shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={handleBuyNow}
                      className="w-full py-2.5 sm:py-3.5 bg-nex-matrix text-nex-dark font-bold font-mono text-xs sm:text-sm uppercase tracking-wider rounded-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all flex items-center justify-center gap-1.5 sm:gap-2"
                    >
                      <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {prod.buyNow} — €5.00
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-nex-dark-border" />
                      </div>
                      <span className="relative bg-nex-dark-card px-2.5 sm:px-3 text-[10px] sm:text-xs font-mono text-nex-muted">{prod.or}</span>
                    </div>
                    <button
                      disabled
                      className="w-full py-2.5 sm:py-3 border border-nex-dark-border text-nex-muted font-mono text-xs sm:text-sm rounded-lg cursor-not-allowed opacity-60 flex items-center justify-center gap-1.5 sm:gap-2"
                    >
                      <BitcoinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {prod.payCrypto}
                      <span className="text-[9px] sm:text-xs bg-nex-cyber/10 text-nex-cyber px-1.5 sm:px-2 py-0.5 rounded-full ml-0.5 sm:ml-1">{prod.comingSoon}</span>
                    </button>
                  </div>

                  {/* Delivery note */}
                  <p className="text-center font-mono text-[10px] sm:text-xs text-nex-muted mt-3 sm:mt-4 flex items-center justify-center gap-1 sm:gap-1.5">
                    <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {prod.deliveryNote}
                  </p>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
        </div>

        {/* Use Cases Preview */}
        <SectionReveal delay={0.3}>
          <div className="mt-10 sm:mt-16">
            <h3 className="text-sm sm:text-base lg:text-lg font-[family-name:var(--font-orbitron)] font-bold text-foreground mb-4 sm:mb-6 text-center">
              {'// '}{prod.featuredWorkflows}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  title: 'The Autonomous Researcher',
                  desc: 'Telegram → AI Deep Research → Notion Archive',
                  tags: ['Telegram', 'OpenAI', 'Google', 'Notion'],
                },
                {
                  title: 'The Sales Machine',
                  desc: 'Shopify Purchases → HubSpot CRM Sync',
                  tags: ['Shopify', 'HubSpot', 'CRM'],
                },
                {
                  title: 'The Executive Assistant',
                  desc: 'Calendly Scheduling → Notion Meeting Cards',
                  tags: ['Calendly', 'Notion'],
                },
                {
                  title: 'The DevOps Watchdog',
                  desc: 'GitHub PR Monitoring → Slack Alerts',
                  tags: ['GitHub', 'Slack', 'DevOps'],
                },
              ].map((wf) => (
                <div key={wf.title} className="p-3 sm:p-4 rounded-lg border border-nex-dark-border bg-nex-dark-card/50 hover:border-nex-matrix/20 transition-all group">
                  <h4 className="text-xs sm:text-sm font-bold font-mono text-foreground mb-1 group-hover:text-nex-matrix transition-colors">
                    {wf.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-mono text-nex-muted mb-1.5 sm:mb-2">{wf.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {wf.tags.map((tag) => (
                      <span key={tag} className="px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-nex-muted border border-nex-dark-border rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
