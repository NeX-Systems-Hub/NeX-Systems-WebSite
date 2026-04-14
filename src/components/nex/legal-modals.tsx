'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

type LegalPage = 'terms' | 'privacy' | 'refund' | 'shipping';

interface LegalModalsProps {
  openPage: LegalPage | null;
  onClose: () => void;
}

export function LegalModals({ openPage, onClose }: LegalModalsProps) {
  const { t } = useLanguage();
  const translations = t();
  const legal = translations.legal;

  const content = openPage ? legal[openPage] : null;

  return (
    <AnimatePresence>
      {openPage && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal - slides up on mobile, centers on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="relative w-full sm:max-w-3xl max-h-[90vh] sm:max-h-[85vh] flex flex-col sm:rounded-xl border-t sm:border border-nex-dark-border bg-nex-dark-card overflow-hidden shadow-2xl sm:rounded-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-nex-dark-border bg-nex-surface/50 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-nex-cyber/10 border border-nex-cyber/20">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-nex-cyber" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-orbitron)] text-sm sm:text-lg font-bold text-foreground">
                    {content.title}
                  </h2>
                  <p className="font-mono text-[10px] sm:text-xs text-nex-muted">{content.lastUpdated}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-nex-muted hover:text-nex-glitch hover:bg-nex-glitch/10 transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6">
              <div className="font-mono text-[11px] sm:text-sm text-foreground/85 leading-relaxed whitespace-pre-wrap">
                {content.content}
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 p-3 border-t border-nex-dark-border bg-nex-surface/30">
              <div className="font-mono text-[10px] sm:text-xs text-nex-muted text-center">
                Sara Talia de Carvalho Campelo &bull; NIF: 312668201 &bull; contact@nex-systems.xyz
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
