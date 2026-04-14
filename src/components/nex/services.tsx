'use client';

import { motion } from 'framer-motion';
import { Cloud, Brain, Code2, Server, Shield, Workflow, Cpu, Database, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { SectionReveal } from './glitch-text';

const serviceIcons: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
  ai: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
  software: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
};

const featureIcons: Record<string, React.ReactNode> = {
  'AWS/VPS Orchestration': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'AWS/VPS Orquestación': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Orchestration AWS/VPS': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Orquestación AWS/VPS': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Docker & Containerization': <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Docker y Contenedorización': <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Docker & Conteneurisation': <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Docker & Contentorização': <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Nginx Configuration': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Configuración Nginx': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Configuration Nginx': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Security Hardening': <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'CI/CD Pipelines': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Pipelines CI/CD': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Monitoring & Alerts': <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Monitorização & Alertas': <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Monitoring & Alertes': <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'LLM Training & Fine-tuning': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Entrenamiento y Fine-tuning LLM': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Entraînement & Fine-tuning LLM': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'API Integrations': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Integraciones API': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Intégrations API': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Integrações API': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Neural Agent Development': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Desarrollo Agentes Neuronales': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Développement Agents Neuronaux': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Desenvolvimento de Agentes Neuronais': <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Data Pipelines': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Pipelines de Dados': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'RAG Systems': <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Sistemas RAG': <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Prompt Engineering': <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Web Applications': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Aplicaciones Web': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Applications Web': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Aplicações Web': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'n8n Workflows': <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'JSON Automation': <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Automatización JSON': <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Automatisation JSON': <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Automação JSON': <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'API Development': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Desarrollo API': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Développement API': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Desenvolvimento API': <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Database Design': <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Diseño Base de Datos': <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Conception Base de Données': <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Desenho de Bases de Dados': <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'System Integration': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Integración Sistemas': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Intégration Systèmes': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  'Integração de Sistemas': <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
};

export function Services() {
  const { t } = useLanguage();
  const translations = t();
  const services = translations.services;

  const serviceCards = [
    {
      key: 'cloud' as const,
      icon: serviceIcons.cloud,
      color: 'nex-matrix',
      gradient: 'from-nex-matrix/20 to-transparent',
      borderHover: 'hover:border-nex-matrix/40',
      data: services.cloud,
    },
    {
      key: 'ai' as const,
      icon: serviceIcons.ai,
      color: 'nex-cyber',
      gradient: 'from-nex-cyber/20 to-transparent',
      borderHover: 'hover:border-nex-cyber/40',
      data: services.ai,
    },
    {
      key: 'software' as const,
      icon: serviceIcons.software,
      color: 'nex-glitch',
      gradient: 'from-nex-glitch/20 to-transparent',
      borderHover: 'hover:border-nex-glitch/40',
      data: services.software,
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-mono text-nex-matrix uppercase tracking-[0.3em] mb-3 sm:mb-4 block">
              {'// '}{translations.nav.services}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-orbitron)] font-bold text-foreground mb-3 sm:mb-4">
              {services.title}
            </h2>
            <p className="text-nex-muted font-mono text-xs sm:text-sm max-w-2xl mx-auto">
              {services.subtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {serviceCards.map((service, idx) => (
            <SectionReveal key={service.key} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`group relative h-full rounded-lg sm:rounded-xl border border-nex-dark-border ${service.borderHover} bg-nex-dark-card overflow-hidden transition-all duration-300`}
              >
                {/* Gradient top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl ${service.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-${service.color}/10 text-${service.color} mb-4 sm:mb-6`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-base sm:text-lg lg:text-xl font-bold font-[family-name:var(--font-orbitron)] text-${service.color} mb-2 sm:mb-3`}>
                    {service.data.title}
                  </h3>

                  {/* Description */}
                  <p className="text-nex-muted font-mono text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {service.data.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3">
                    {service.data.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-foreground/80">
                        <div className={`flex-shrink-0 text-${service.color}`}>
                          {featureIcons[feature] || <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                        </div>
                        <span className="text-[11px] sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
