'use client';

import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Rocket, Clock, Shield, ArrowRight, ArrowLeft,
  Euro, Banknote, CircleDollarSign,
  Loader2, CheckCircle2, AlertCircle, Calendar, User, FileText, Phone, Globe,
} from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

type Currency = 'EUR' | 'BRL' | 'USDT';

const currencyConfig: Record<Currency, { amount: number; label: string; icon: React.ReactNode; symbol: string }> = {
  EUR: {
    amount: 400,
    label: 'EURO',
    icon: <Euro className="w-5 h-5" />,
    symbol: '€',
  },
  BRL: {
    amount: 2500,
    label: 'BRL',
    icon: <Banknote className="w-5 h-5" />,
    symbol: 'R$',
  },
  USDT: {
    amount: 400,
    label: 'USDT TRC20',
    icon: <CircleDollarSign className="w-5 h-5" />,
    symbol: 'USDT',
  },
};

interface DevFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  solutionId: string;
  solutionName: string;
}

type Step = 'form' | 'payment' | 'checkout' | 'success';

export function DevFormModal({ isOpen, onClose, solutionId, solutionName }: DevFormModalProps) {
  const { t } = useLanguage();
  const translations = t();
  const devForm = translations.devForm;

  const [step, setStep] = useState<Step>('form');
  const [projectName, setProjectName] = useState('');
  const [details, setDetails] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [contact, setContact] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');
  const [txId, setTxId] = useState('');

  // Reset when modal opens/closes or solution changes
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setProjectName('');
      setDetails('');
      setMeetingDate('');
      setContact('');
      setError('');
      setCheckoutUrl('');
      setIframeUrl('');
      setTxId('');
    }
  }, [isOpen, solutionId]);

  // Listen for iframe postMessage success
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://checkout.nexflowx.tech' && event.data?.status === 'success') {
        setTxId(event.data.txId || '');
        setIframeUrl('');
        setStep('success');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const isFormValid = projectName.trim() && details.trim() && meetingDate && contact.trim();

  const handlePayment = useCallback(async (currency: Currency) => {
    if (!isFormValid || isProcessing) return;

    setIsProcessing(true);
    setError('');
    setCheckoutUrl('');
    setIframeUrl('');

    try {
      const config = currencyConfig[currency];

      const payload = {
        amount: config.amount,
        currency: currency,
        store_id: 'NeX-Store',
        description: `Implementação Solução Personalizada (7 dias) - ${solutionName} - ${projectName}`,
        metadata: {
          project_name: projectName.trim(),
          details: details.trim(),
          meeting_date: meetingDate,
          contact: contact.trim(),
          solution_id: solutionId,
          solution_name: solutionName,
        },
      };

      const response = await fetch('/api/payment-links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || devForm?.errorGeneric || 'Erro ao processar pagamento');
      }

      if (data.shareable_url) {
        setIframeUrl(data.shareable_url);
        setCheckoutUrl(data.shareable_url);
        setStep('checkout');
      } else if (data.url) {
        setCheckoutUrl(data.url);
        setStep('checkout');
      } else {
        throw new Error('URL de checkout não recebida');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : devForm?.errorGeneric || 'Erro ao processar pagamento. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  }, [isFormValid, isProcessing, projectName, details, meetingDate, contact, solutionId, solutionName, devForm?.errorGeneric]);

  const handleRedirectCheckout = () => {
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const steps: { key: Step; label: string; icon: React.ReactNode }[] = [
    { key: 'form', label: devForm?.labelDetails?.split(' *')[0] || 'Dados', icon: <FileText className="w-3.5 h-3.5" /> },
    { key: 'payment', label: devForm?.selectPayment || 'Pagamento', icon: <Shield className="w-3.5 h-3.5" /> },
    { key: 'checkout', label: devForm?.checkoutTitle || 'Checkout', icon: <Globe className="w-3.5 h-3.5" /> },
  ];

  const currentStepIdx = step === 'success' ? -1 : steps.findIndex(s => s.key === step);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="relative w-full sm:max-w-xl my-4 sm:my-8 mx-2 sm:mx-auto flex flex-col sm:rounded-xl border border-nex-dark-border bg-nex-dark-card overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-nex-dark-border bg-nex-surface/50 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-nex-matrix/10 border border-nex-matrix/20">
                  <Rocket className="w-5 h-5 text-nex-matrix" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-orbitron)] text-sm sm:text-base font-bold text-foreground">
                    {solutionName}
                  </h2>
                  <p className="font-mono text-[10px] sm:text-xs text-nex-muted">
                    {devForm?.subtitle || '-7 dias para implementar'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-nex-muted hover:text-nex-glitch hover:bg-nex-glitch/10 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Progress Bar (only for form/payment/checkout) */}
            {step !== 'success' && (
              <div className="px-4 sm:px-5 pt-3 pb-1 flex items-center gap-1">
                {steps.map((s, i) => (
                  <Fragment key={s.key}>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono transition-all ${
                      i === currentStepIdx
                        ? 'bg-nex-matrix/15 text-nex-matrix border border-nex-matrix/30'
                        : i < currentStepIdx
                        ? 'text-nex-matrix/60'
                        : 'text-nex-muted/40'
                    }`}>
                      {i < currentStepIdx ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        s.icon
                      )}
                      <span className="hidden sm:inline">{s.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-px mx-1 transition-colors ${
                        i < currentStepIdx ? 'bg-nex-matrix/30' : 'bg-nex-dark-border'
                      }`} />
                    )}
                  </Fragment>
                ))}
              </div>
            )}

            {/* Success State */}
            {step === 'success' ? (
              <div className="p-6 sm:p-10 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-nex-matrix mx-auto" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-orbitron)] font-bold text-foreground">
                  {devForm?.successTitle || 'Pagamento Confirmado!'}
                </h3>
                <p className="text-nex-muted font-mono text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  {devForm?.successMessage || 'O seu pedido de desenvolvimento personalizado foi registado com sucesso. A nossa equipa entrará em contacto em breve para agendar a reunião de estudo do projeto.'}
                </p>
                {txId && (
                  <p className="font-mono text-[10px] sm:text-xs text-nex-muted/60">
                    TX ID: {txId}
                  </p>
                )}
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-nex-matrix text-nex-dark font-bold font-mono text-sm rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all"
                >
                  {devForm?.closeBtn || 'Fechar'}
                </button>
              </div>
            ) : step === 'checkout' && iframeUrl ? (
              /* Iframe Checkout */
              <div className="p-4 sm:p-5 space-y-4">
                <div className="text-center">
                  <p className="font-mono text-xs sm:text-sm text-nex-matrix mb-3">
                    {devForm?.checkoutTitle || 'Concluir Pagamento'}
                  </p>
                  <div className="w-full max-w-[450px] mx-auto rounded-xl overflow-hidden border border-nex-dark-border">
                    <iframe
                      src={iframeUrl}
                      style={{ width: '100%', height: '600px', border: 'none' }}
                      allow="payment"
                      title="NeXFlowX Checkout"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setStep('payment')}
                    className="flex items-center gap-1.5 px-4 py-2 border border-nex-dark-border text-nex-muted font-mono text-xs rounded-lg hover:border-nex-muted transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {devForm?.backBtn || 'Voltar'}
                  </button>
                  <button
                    onClick={handleRedirectCheckout}
                    className="flex items-center gap-1.5 px-4 py-2 border border-nex-cyber/30 text-nex-cyber font-mono text-xs rounded-lg hover:bg-nex-cyber/10 hover:border-nex-cyber/60 transition-all"
                  >
                    {devForm?.openExternal || 'Abrir em nova janela →'}
                  </button>
                </div>
              </div>
            ) : step === 'payment' ? (
              /* Payment Selection */
              <div className="flex-1 p-4 sm:p-5 space-y-5">
                {/* Quick Summary */}
                <div className="rounded-lg p-3 bg-nex-surface/50 border border-nex-dark-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="w-3.5 h-3.5 text-nex-matrix" />
                    <span className="font-mono text-xs text-foreground font-bold">{projectName}</span>
                  </div>
                  <p className="font-mono text-[10px] text-nex-muted line-clamp-2">{details}</p>
                </div>

                {/* Info */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-nex-matrix/5 border border-nex-matrix/15">
                  <Shield className="w-4 h-4 text-nex-cyber flex-shrink-0 mt-0.5" />
                  <p className="font-mono text-[11px] text-nex-muted leading-relaxed">
                    {devForm?.infoGuarantee || 'Preço fixo. Sem surpresas. Pagamento seguro via NeXFlowX.'}
                  </p>
                </div>

                {/* Price Cards */}
                <div className="space-y-2.5">
                  <p className="font-mono text-xs text-nex-muted text-center uppercase tracking-wider">
                    {devForm?.selectPayment || 'Selecione o método de pagamento'}
                  </p>
                  <div className="space-y-2">
                    {(Object.keys(currencyConfig) as Currency[]).map((curr) => {
                      const config = currencyConfig[curr];
                      return (
                        <button
                          key={curr}
                          onClick={() => handlePayment(curr)}
                          disabled={isProcessing}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg border font-mono transition-all duration-200 ${
                            !isProcessing
                              ? 'border-nex-dark-border hover:border-nex-matrix/50 hover:bg-nex-matrix/5 text-foreground cursor-pointer'
                              : 'border-nex-dark-border text-nex-muted/40 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded bg-nex-surface text-nex-matrix">
                              {isProcessing ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                config.icon
                              )}
                            </div>
                            <div className="text-left">
                              <span className="text-sm font-bold">{config.label}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-nex-muted">{config.symbol}</span>
                            <span className="text-lg font-[family-name:var(--font-orbitron)] font-black text-foreground ml-1">
                              {config.amount.toLocaleString()}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-3 rounded-lg border border-nex-glitch/30 bg-nex-glitch/5"
                  >
                    <AlertCircle className="w-4 h-4 text-nex-glitch flex-shrink-0 mt-0.5" />
                    <p className="font-mono text-xs text-nex-glitch">{error}</p>
                  </motion.div>
                )}

                {/* Back button */}
                <button
                  onClick={() => setStep('form')}
                  className="flex items-center gap-1.5 text-nex-muted hover:text-foreground font-mono text-xs transition-colors mx-auto"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {devForm?.backBtn || '← Voltar'}
                </button>
              </div>
            ) : (
              /* Form Step */
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                {/* Info Banner */}
                <div className="rounded-lg p-3 bg-gradient-to-r from-nex-matrix/5 via-nex-cyber/5 to-nex-matrix/5 border border-nex-matrix/15">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded bg-nex-matrix/10 flex-shrink-0">
                      <Clock className="w-4 h-4 text-nex-matrix" />
                    </div>
                    <div>
                      <h3 className="font-bold font-mono text-xs text-nex-matrix mb-0.5">
                        {devForm?.infoTitle || 'Implemente a sua solução em menos de 7 dias'}
                      </h3>
                      <p className="font-mono text-[10px] text-nex-muted leading-relaxed">
                        {devForm?.infoDesc || 'Em menos de 7 dias implementamos a sua solução personalizada.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-3">
                  {/* Project Name */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 font-mono text-[10px] text-foreground uppercase tracking-wider">
                      <User className="w-3 h-3 text-nex-matrix" />
                      {devForm?.labelProjectName || 'Nome do Projeto *'}
                    </label>
                    <input
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder={devForm?.placeholderProjectName || 'Ex: Automação Clínica XYZ'}
                      className="w-full px-3 py-2.5 bg-nex-dark border border-nex-dark-border rounded-lg font-mono text-sm text-foreground placeholder:text-nex-muted/40 focus:outline-none focus:border-nex-matrix/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 font-mono text-[10px] text-foreground uppercase tracking-wider">
                      <FileText className="w-3 h-3 text-nex-matrix" />
                      {devForm?.labelDetails || 'Explicações do Projeto *'}
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder={devForm?.placeholderDetails || 'Descreva o que precisa, funcionalidades desejadas, integrações...'}
                      rows={3}
                      className="w-full px-3 py-2.5 bg-nex-dark border border-nex-dark-border rounded-lg font-mono text-sm text-foreground placeholder:text-nex-muted/40 focus:outline-none focus:border-nex-matrix/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all resize-none"
                    />
                  </div>

                  {/* Meeting Date */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 font-mono text-[10px] text-foreground uppercase tracking-wider">
                      <Calendar className="w-3 h-3 text-nex-cyber" />
                      {devForm?.labelDate || 'Data sugerida para 1ª reunião *'}
                    </label>
                    <input
                      type="date"
                      value={meetingDate}
                      onChange={(e) => setMeetingDate(e.target.value)}
                      min={getMinDate()}
                      className="w-full px-3 py-2.5 bg-nex-dark border border-nex-dark-border rounded-lg font-mono text-sm text-foreground focus:outline-none focus:border-nex-cyber/50 focus:shadow-[0_0_10px_rgba(0,212,255,0.1)] transition-all [color-scheme:dark]"
                    />
                  </div>

                  {/* Contact */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 font-mono text-[10px] text-foreground uppercase tracking-wider">
                      <Phone className="w-3 h-3 text-nex-glitch" />
                      {devForm?.labelContact || 'Contacto Preferencial *'}
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={devForm?.placeholderContact || 'Email, telefone, WhatsApp ou Telegram...'}
                      className="w-full px-3 py-2.5 bg-nex-dark border border-nex-dark-border rounded-lg font-mono text-sm text-foreground placeholder:text-nex-muted/40 focus:outline-none focus:border-nex-glitch/50 focus:shadow-[0_0_10px_rgba(255,0,60,0.1)] transition-all"
                    />
                  </div>
                </div>

                {/* Continue to Payment Button */}
                <button
                  onClick={() => {
                    if (isFormValid) setStep('payment');
                  }}
                  disabled={!isFormValid}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-mono text-sm font-bold transition-all duration-300 ${
                    isFormValid
                      ? 'bg-nex-matrix text-nex-dark hover:shadow-[0_0_24px_rgba(0,255,65,0.35)]'
                      : 'bg-nex-dark-border/30 text-nex-muted/40 cursor-not-allowed'
                  }`}
                >
                  {devForm?.selectPayment || 'Avançar para Pagamento'}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Terms */}
                <p className="font-mono text-[9px] text-nex-muted/40 text-center leading-relaxed">
                  {devForm?.termsNote || 'Ao submeter, concorda com os nossos Termos & Condições.'}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
