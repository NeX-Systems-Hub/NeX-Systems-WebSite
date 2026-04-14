'use client';

import { Zap, Mail, MessageCircle, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import {
  MastercardIcon,
  VisaIcon,
  AmexIcon,
  PaypalIcon,
  ApplePayIcon,
  GooglePayIcon,
  BitcoinIcon,
  MultibancoIcon,
  MbWayIcon,
} from './payment-icons';

type LegalPage = 'terms' | 'privacy' | 'refund' | 'shipping';

interface FooterProps {
  onOpenLegal: (page: LegalPage) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const { t } = useLanguage();
  const translations = t();
  const footer = translations.footer;

  return (
    <footer className="relative border-t border-nex-dark-border bg-nex-dark-card/50">
      {/* Grid lines decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-nex-matrix" />
              <span className="font-[family-name:var(--font-orbitron)] text-base sm:text-lg font-bold text-foreground tracking-wider">
                NEX<span className="text-nex-matrix">-</span>SYSTEMS
              </span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-nex-muted leading-relaxed mb-4">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:contact@nex-systems.xyz"
                className="w-9 h-9 rounded-lg border border-nex-dark-border flex items-center justify-center text-nex-muted hover:text-nex-cyber hover:border-nex-cyber/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/351930598827"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-nex-dark-border flex items-center justify-center text-nex-muted hover:text-green-400 hover:border-green-500/40 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/+351930598827"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-nex-dark-border flex items-center justify-center text-nex-muted hover:text-sky-400 hover:border-sky-400/40 transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="tel:+351930598827"
                className="w-9 h-9 rounded-lg border border-nex-dark-border flex items-center justify-center text-nex-muted hover:text-nex-matrix hover:border-nex-matrix/40 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-nex-matrix mb-4">
              {footer.companyName}
            </h3>
            <div className="space-y-1.5 font-mono text-[11px] sm:text-xs text-nex-muted leading-relaxed">
              <p>{footer.legalName}</p>
              <p>{footer.nif} &bull; {footer.cae}</p>
              <p className="leading-relaxed">{footer.headquarters}</p>
              <p className="leading-relaxed">{footer.offices}</p>
            </div>
          </div>

          {/* Quick Links + Legal */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              {footer.quickLinks}
            </h3>
            <div className="space-y-2 mb-6">
              {['home', 'services', 'product', 'enterprise', 'support'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block font-mono text-[11px] sm:text-xs text-nex-muted hover:text-nex-matrix transition-colors uppercase tracking-wider"
                >
                  {translations.nav[link as keyof typeof translations.nav] || link}
                </button>
              ))}
            </div>

            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-3">
              {footer.legal}
            </h3>
            <div className="space-y-2">
              {([
                ['terms', footer.terms],
                ['privacy', footer.privacy],
                ['refund', footer.refund],
                ['shipping', footer.shipping],
              ] as [LegalPage, string][]).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key === 'refund' ? 'refunds' : key === 'shipping' ? 'delivery' : key}`}
                  onClick={(e) => { e.preventDefault(); onOpenLegal(key); }}
                  className="block font-mono text-[11px] sm:text-xs text-nex-muted hover:text-nex-cyber transition-colors uppercase tracking-wider"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Quick Access */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              {translations.nav.contact}
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+351930598827"
                className="flex items-center gap-3 font-mono text-xs text-nex-muted hover:text-nex-matrix transition-colors group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+351 930 598 827</span>
              </a>
              <a
                href="mailto:contact@nex-systems.xyz"
                className="flex items-center gap-3 font-mono text-xs text-nex-muted hover:text-nex-cyber transition-colors group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">contact@nex-systems.xyz</span>
              </a>
              <a
                href="https://wa.me/351930598827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-xs text-nex-muted hover:text-green-400 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/+351930598827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-xs text-nex-muted hover:text-sky-400 transition-colors group"
              >
                <Send className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-5 border-t border-nex-dark-border">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-nex-muted/60">
              Accepted Payment Methods
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-nex-dark-border bg-nex-surface/30">
                <MastercardIcon className="h-6 sm:h-7 w-auto text-foreground/70 hover:text-foreground transition-colors" />
                <VisaIcon className="h-6 sm:h-7 w-auto text-foreground/70 hover:text-foreground transition-colors" />
                <AmexIcon className="h-6 sm:h-7 w-auto text-foreground/70 hover:text-foreground transition-colors" />
                <PaypalIcon className="h-6 sm:h-7 w-auto text-foreground/70 hover:text-foreground transition-colors" />
                <ApplePayIcon className="h-6 sm:h-7 w-auto text-foreground/70 hover:text-foreground transition-colors" />
                <GooglePayIcon className="h-6 sm:h-7 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-nex-dark-border bg-nex-surface/30">
                <MultibancoIcon className="h-7 sm:h-8 w-auto" />
                <MbWayIcon className="h-6 sm:h-7 w-auto" />
                <div className="flex items-center gap-1 px-1.5">
                  <BitcoinIcon className="h-4 sm:h-5 w-auto text-amber-500/70 hover:text-amber-500 transition-colors" />
                  <span className="text-[9px] sm:text-[10px] font-mono text-nex-muted/50">Crypto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-nex-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] sm:text-xs text-nex-muted">
            &copy; {new Date().getFullYear()} {footer.companyName}. {footer.rights}
          </p>
          <p className="font-mono text-[10px] sm:text-xs text-nex-muted/60">
            {footer.nif} &bull; {footer.cae}
          </p>
        </div>
      </div>
    </footer>
  );
}
