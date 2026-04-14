'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Terminal } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat() {
  const { t } = useLanguage();
  const translations = t();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: translations.chat.welcome },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat?XTransformPort=3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || 'System error. Please try again.' },
      ]);
    } catch {
      const fallbackResponses: Record<string, string> = {
        pt: 'Conexão estabilizada. A equipa Nex-Systems irá responder em breve. Para assistência imediata, contacte +351 930 598 827.',
        en: 'Connection stabilized. The Nex-Systems team will respond shortly. For immediate assistance, contact +351 930 598 827.',
        es: 'Conexión estabilizada. El equipo Nex-Systems responderá en breve.',
        fr: 'Connexion stabilisée. L\'équipe Nex-Systems répondra sous peu.',
      };
      const locale = useLanguage.getState().locale;
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: fallbackResponses[locale] || fallbackResponses.en },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-nex-matrix text-nex-dark flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={translations.chat.title}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[4.5rem] right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[22rem] sm:w-96 h-[60vh] sm:h-[500px] max-h-[70vh] flex flex-col rounded-xl border border-nex-dark-border bg-nex-dark-card overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-nex-dark-border bg-nex-surface/50">
              <div className="relative">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-nex-matrix" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-nex-matrix rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="font-mono text-xs sm:text-sm font-bold text-foreground">{translations.chat.title}</h3>
                <p className="font-mono text-[10px] sm:text-xs text-nex-matrix">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-2.5 py-2 sm:px-3 sm:py-2 rounded-lg font-mono text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-nex-matrix/10 text-nex-matrix border border-nex-matrix/20'
                        : 'bg-nex-surface text-foreground/90 border border-nex-dark-border'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <span className="text-nex-cyber mr-1">&gt;</span>
                    )}
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg font-mono text-xs text-nex-muted bg-nex-surface border border-nex-dark-border">
                    <span className="inline-flex gap-1">
                      <span className="animate-pulse">.</span>
                      <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
                      <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2.5 sm:p-3 border-t border-nex-dark-border bg-nex-surface/30">
              <div className="flex-1 relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-nex-matrix font-mono text-xs sm:text-sm">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={translations.chat.placeholder}
                  className="w-full pl-6 sm:pl-7 pr-2 sm:pr-3 py-2 bg-nex-dark border border-nex-dark-border rounded font-mono text-[11px] sm:text-xs text-foreground placeholder:text-nex-muted/50 focus:outline-none focus:border-nex-matrix/40 transition-colors"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-nex-matrix text-nex-dark rounded hover:bg-nex-matrix/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
