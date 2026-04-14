'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { SectionReveal } from './glitch-text';

const channelIcons: Record<string, React.ReactNode> = {
  WhatsApp: <MessageCircle className="w-5 h-5" />,
  Telegram: <Send className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
  Voz: <Phone className="w-5 h-5" />,
  Voice: <Phone className="w-5 h-5" />,
};

const channelColors: Record<string, string> = {
  WhatsApp: 'hover:border-green-500/40 hover:text-green-400',
  Telegram: 'hover:border-sky-400/40 hover:text-sky-400',
  Email: 'hover:border-nex-cyber/40 hover:text-nex-cyber',
  Voz: 'hover:border-nex-matrix/40 hover:text-nex-matrix',
  Voice: 'hover:border-nex-matrix/40 hover:text-nex-matrix',
};

const channelLinks: Record<string, string> = {
  WhatsApp: 'https://wa.me/351930598827',
  Telegram: 'https://t.me/+351930598827',
};

export function Support() {
  const { t } = useLanguage();
  const translations = t();
  const support = translations.support;

  const getChannelUrl = (name: string): string | null => {
    if (channelLinks[name]) return channelLinks[name];
    if (name === 'Email') return 'mailto:contact@nex-systems.xyz';
    if (name === 'Voice' || name === 'Voz') return 'tel:+351930598827';
    return null;
  };

  const handleChannelClick = (name: string) => {
    const url = getChannelUrl(name);
    if (!url) return;
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.assign(url);
    }
  };

  return (
    <section id="support" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nex-surface/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-mono text-nex-glitch uppercase tracking-[0.3em] mb-4 block">
              {'// '}{translations.nav.support}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-orbitron)] font-bold text-foreground mb-4">
              {support.title}
            </h2>
            <p className="text-nex-muted font-mono text-xs sm:text-sm max-w-2xl mx-auto">
              {support.subtitle}
            </p>
          </div>
        </SectionReveal>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {support.channels.map((channel, idx) => (
            <SectionReveal key={channel.name} delay={idx * 0.1}>
              <motion.button
                whileHover={{ y: -4 }}
                onClick={() => handleChannelClick(channel.name)}
                className={`group w-full p-4 sm:p-6 rounded-xl border border-nex-dark-border ${channelColors[channel.name] || 'hover:border-nex-matrix/40 hover:text-nex-matrix'} bg-nex-dark-card text-left transition-all duration-300`}
              >
                <div className="text-nex-muted group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3">
                  {channelIcons[channel.name] || <MessageCircle className="w-5 h-5" />}
                </div>
                <h3 className="font-bold font-mono text-xs sm:text-sm text-foreground mb-1">{channel.name}</h3>
                <p className="text-[10px] sm:text-xs text-nex-muted font-mono leading-relaxed">{channel.description}</p>
              </motion.button>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
