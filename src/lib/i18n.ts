export type Locale = 'pt' | 'en' | 'es' | 'fr';

export const localeNames: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
  fr: 'FR',
};

export const translations = {
  pt: {
    // Nav
    nav: {
      home: 'Início',
      services: 'Serviços',
      vault: 'Vault Digital',
      product: 'Produto',
      enterprise: 'Enterprise',
      support: 'Suporte',
      contact: 'Contactos',
    },
    // Hero
    hero: {
      headline: 'A Arquitetar o Futuro da Automação',
      subheadline: 'Infraestrutura Cloud, Soluções de IA e Ativos Digitais de Alto Desempenho',
      terminalLines: [
        '> A inicializar protocolos Nex-Systems...',
        '> A carregar módulos de infraestrutura Cloud... [OK]',
        '> Redes neurais de IA online... [OK]',
        '> Protocolos de segurança ativos... [OK]',
        '> Sistema pronto. Bem-vindo ao futuro.',
      ],
      cta: 'Explorar Serviços',
      ctaSecondary: 'Contactar-nos',
    },
    // Services
    services: {
      title: 'Serviços',
      subtitle: 'Soluções de elite para infraestrutura digital de alto desempenho',
      cloud: {
        title: 'Cloud & DevOps',
        description: 'Orquestração AWS/VPS, Docker, Nginx e Security Hardening. Infraestrutura resilient e escalável.',
        features: ['Orquestração AWS/VPS', 'Docker & Contentorização', 'Configuração Nginx', 'Security Hardening', 'Pipelines CI/CD', 'Monitorização & Alertas'],
      },
      ai: {
        title: 'AI Engineering',
        description: 'Treino de LLMs, integrações de API, agentes neurais e pipelines de dados inteligentes.',
        features: ['Treino & Fine-tuning LLM', 'Integrações API', 'Desenvolvimento de Agentes Neuronais', 'Pipelines de Dados', 'Sistemas RAG', 'Prompt Engineering'],
      },
      software: {
        title: 'Software à Medida',
        description: 'Aplicações web, workflows JSON especializados e soluções sob medida.',
        features: ['Aplicações Web', 'Workflows n8n', 'Automação JSON', 'Desenvolvimento API', 'Desenho de Bases de Dados', 'Integração de Sistemas'],
      },
    },
    // Digital Vault
    vault: {
      title: 'Digital Vault',
      subtitle: 'Ativos digitais de alta performance para aceleração de projetos',
      items: [
        {
          name: 'n8n Automation Templates',
          description: 'Workflows pré-construídos para automação empresarial. Integrações com APIs populares, CRMs e ferramentas de produtividade.',
          tag: 'Popular',
        },
        {
          name: 'API Blueprints',
          description: 'Estruturas completas de API REST/GraphQL prontas para deploy. Documentação Swagger incluída.',
          tag: 'Novo',
        },
        {
          name: 'Docker Stack Presets',
          description: 'Ambientes containerizados otimizados com configs de Nginx, SSL, monitoring e auto-scaling.',
          tag: 'Essencial',
        },
      ],
    },
    // Support
    support: {
      title: 'Suporte & Contacto',
      subtitle: 'Suporte técnico especializado disponível 24/7',
      channels: [
        { name: 'WhatsApp', description: 'Resposta rápida via mensagem direta' },
        { name: 'Telegram', description: 'Canal dedicado para suporte técnico' },
        { name: 'Email', description: 'contact@nex-systems.xyz' },
        { name: 'Voz', description: 'Chamada direta +351 930 598 827' },
      ],
    },
    // Footer
    footer: {
      companyName: 'Nex-Systems',
      tagline: 'A Arquitetar o Futuro da Infraestrutura Digital',
      legalName: 'Sara Talia de Carvalho Campelo',
      nif: 'NIF: 312668201',
      headquarters: 'Sede Fiscal: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal',
      offices: 'Escritórios Operacionais: Rua de São Nuno 92, 2560-195 São Pedro da Cadeira, Torres Vedras, Portugal',
      cae: 'CAE: 47910 / CIRS: 1320',
      quickLinks: 'Links Rápidos',
      legal: 'Legal',
      terms: 'Termos & Condições',
      privacy: 'Política de Privacidade',
      refund: 'Política de Reembolso',
      shipping: 'Política de Entrega',
      rights: 'Todos os direitos reservados.',
    },
    // Enterprise
    enterprise: {
      label: 'Soluções Empresariais e Implementação',
      title: 'Pacotes Setoriais 360°',
      subtitle: 'Arquitetura ponta-a-ponta para operações empresariais complexas. Os nossos engenheiros concebem, constroem e implementam infraestrutura de workflows personalizada.',
      ctaTitle: 'Precisa de uma Solução à Medida?',
      ctaDesc: 'Os nossos engenheiros concebem, constroem e implementam infraestrutura de automação personalizada para o seu negócio.',
      items: {
        clini360: 'Clínicas e Gabinetes Médicos',
        farma360: 'Farmácias',
        estetica360: 'Salões e Estética',
        fit360: 'Ginásios e Fitness',
        imob360: 'Imobiliárias',
        construi360: 'Construção e Renovação',
        ecom360: 'Lojas Online',
        retail360: 'Retalho e Moda',
        creator360: 'Criadores de Conteúdo',
        edu360: 'Escolas e Cursos',
        dev360: 'Startups e Tecnologia',
        rh360: 'Recursos Humanos e Recrutamento',
        fin360: 'Finanças e Contabilidade',
        manut360: 'Serviços Técnicos e Reparações',
        limpeza360: 'Limpezas Profissionais',
        turismo360: 'Agências de Viagens',
        ware360: 'Armazéns e Fulfillment',
        log360: 'Transportes e Entregas',
      },
    },
    // Product
    product: {
      activeLabel: 'Produto Ativo',
      description: 'Desbloqueie a Biblioteca Master: +4.300 templates n8n JSON pré-construídos. Acesso instantâneo a workflows prontos para produção para cada função empresarial.',
      browseImport: 'Navegue. Importe. Automatize.',
      statsTemplates: 'Templates JSON',
      statsIntegrations: 'Integrações',
      statsAccess: 'Acesso Cloud',
      bestValue: 'Melhor Valor — Acesso Vitalício',
      singlePayment: 'Pagamento único · Acesso vitalício',
      featureWorkflows: '4.300+ Workflows Premium',
      featureLifetime: 'Acesso Vitalício',
      featureInstant: 'Acesso Instantâneo via Google Drive',
      featureJson: 'Ficheiros JSON Prontos a Importar',
      featureUpdates: 'Atualizações Gratuitas para Sempre',
      featureCommunity: 'Suporte da Comunidade',
      buyNow: 'Comprar Agora',
      or: 'ou',
      payCrypto: 'Pagar com Crypto',
      comingSoon: 'Brevemente',
      deliveryNote: 'Entrega digital instantânea via link seguro.',
      featuredWorkflows: 'Workflows em Destaque',
      customSolution: 'Precisa de uma Solução à Medida?',
    },
    // Dev Form
    devForm: {
      title: 'Desenvolvimento Personalizado',
      subtitle: '-7 dias para implementar',
      btnLabel: 'Desenvolvimento Personalizado -7 dias',
      infoTitle: 'Implemente a sua solução em menos de 7 dias',
      infoDesc: 'Em menos de 7 dias implementamos a sua solução personalizada, sem custos adicionais de desenvolvimento. O nosso engenheiro dedicado trabalha exclusivamente no seu projeto.',
      infoGuarantee: 'Preço fixo. Sem surpresas. Pagamento seguro via NeXFlowX.',
      labelProjectName: 'Nome do Projeto *',
      placeholderProjectName: 'Ex: Automação Clínica XYZ',
      labelDetails: 'Explicações do Projeto *',
      placeholderDetails: 'Descreva o que precisa, funcionalidades desejadas, integrações...',
      labelDate: 'Data sugerida para 1ª reunião de estudo *',
      labelContact: 'Contacto Preferencial *',
      placeholderContact: 'Email, telefone, WhatsApp ou Telegram...',
      selectPayment: 'Selecione o método de pagamento',
      termsNote: 'Ao submeter, concorda com os nossos Termos & Condições. Pagamento processado de forma segura por NeXFlowX.',
      checkoutTitle: 'Concluir Pagamento',
      backBtn: '← Voltar',
      openExternal: 'Abrir em nova janela →',
      successTitle: 'Pagamento Confirmado!',
      successMessage: 'O seu pedido de desenvolvimento personalizado foi registado com sucesso. A nossa equipa entrará em contacto em breve para agendar a reunião de estudo do projeto.',
      closeBtn: 'Fechar',
      errorGeneric: 'Erro ao processar pagamento. Tente novamente.',
    },
    // Chat
    chat: {
      title: 'NeX IA Terminal',
      placeholder: 'Digite um comando ou pergunta...',
      welcome: 'Conexão estabelecida com NeX IA v3.2.1\nSistema pronto. Digite "help" para comandos disponíveis.',
      send: 'Enviar',
    },
    // Legal
    legal: {
      terms: {
        title: 'Termos & Condições',
        lastUpdated: 'Última atualização: Janeiro 2025',
        content: `ESTES TERMOS E CONDIÇÕES ("TERMOS") GOVERNAM O SEU ACESSO E USO DOS SERVIÇOS E PRODUTOS DIGITAIS FORNECIDOS PELA NEX-SYSTEMS ("EMPRESA", "NÓS", "NOSSO").

1. PARTES DO CONTRATO
Estes Termos constituem um acordo legal entre Sara Talia de Carvalho Campelo, NIF: 312668201, com sede fiscal em Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal ("Empresa") e o utilizador ("Cliente", "Você").

2. SERVIÇOS
A Nex-Systems fornece os seguintes serviços:
- Consultoria e implementação de infraestrutura cloud e DevOps
- Desenvolvimento e integração de soluções de Inteligência Artificial
- Desenvolvimento de software personalizado
- Venda de ativos digitais (templates, blueprints, presets)

3. PROPRIEDADE INTELECTUAL
Todo o conteúdo, incluindo mas não limitado a código, designs, templates, documentação e materiais de formação fornecidos pela Nex-Systems, são protegidos por direitos de autor. O Cliente recebe uma licença não-exclusiva, não-transferível de uso.

4. ATIVOS DIGITAIS
- A compra de ativos digitais (templates, blueprints, presets) inclui uma licença de uso perpetua para o comprador original.
- A revenda, redistribuição ou partilha dos ativos digitais é estritamente proibida sem autorização escrita.
- Os ativos digitais são entregues instantaneamente após confirmação do pagamento, via download direto ou API.

5. LIMITAÇÃO DE RESPONSABILIDADE
A Nex-Systems não será responsável por danos indiretos, incidentais ou consequenciais resultantes do uso dos nossos serviços ou produtos. A responsabilidade total fica limitada ao valor pago pelo serviço ou produto em questão.

6. LEGISLAÇÃO APLICÁVEL
Estes Termos são regidos pelas leis da República Portuguesa e da União Europeia. Qualquer litígio será submetido à jurisdição dos tribunais de Viseu, Portugal.`,
      },
      privacy: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: Janeiro 2025',
        content: `A NEX-SYSTEMS ("NÓS", "EMPRESA") ESTÁ COMPROMETIDA COM A PROTEÇÃO DOS SEUS DADOS PESSOAIS, EM CONFORMIDADE COM O REGULAMENTO GERAL DE PROTEÇÃO DE DADOS (RGPD/GDPR) - REGULAMENTO (UE) 2016/679.

1. RESPONSÁVEL PELO TRATAMENTO
Sara Talia de Carvalho Campelo
NIF: 312668201
Sede: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal
Email: contact@nex-systems.xyz

2. DADOS PESSOAIS RECOLHIDOS
Podemos recolher os seguintes dados:
- Nome e dados de contacto (email, telefone)
- Dados de faturação (nome, morada, NIF)
- Dados técnicos (endereço IP, tipo de navegador, logs de acesso)
- Dados de transação (histórico de compras, pagamentos)

3. BASE LEGAL DO TRATAMENTO
- Execução de contrato: processamento necessário para fornecer os serviços contratados
- Consentimento: quando o utilizador dá consentimento explícito
- Interesse legítimo: para melhoria dos nossos serviços
- Obrigação legal: para fins fiscais e de faturação

4. DIREITOS DO TITULAR DOS DADOS
Nos termos do RGPD, tem direito a:
- Acesso aos seus dados pessoais
- Retificação de dados incorretos
- Apagamento dos seus dados ("direito ao esquecimento")
- Limitação do tratamento
- Portabilidade dos dados
- Oposição ao tratamento
- Retirada do consentimento a qualquer momento

Para exercer os seus direitos, contacte-nos via: contact@nex-systems.xyz

5. RETENÇÃO DE DADOS
Os dados pessoais são retidos apenas pelo período necessário para a finalidade para a qual foram recolhidos. Dados de faturação são retidos por 10 anos conforme exigido pela legislação fiscal portuguesa.

6. COOKIES E TECNOLOGIAS SIMILARES
Utilizamos cookies essenciais para o funcionamento do site. Cookies analíticos e de marketing apenas são utilizados com o seu consentimento.

7. SEGURANÇA DOS DADOS
Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais, incluindo encriptação SSL/TLS, controlos de acesso e monitorização de segurança.

8. TRANSFERÊNCIA INTERNACIONAL DE DADOS
Os seus dados podem ser processados dentro da UE/EEE. Não serão transferidos para países fora da UE sem garantias adequadas.

9. ALTERAÇÕES
Reservamo-nos o direito de atualizar esta política. Notificaremos os utilizadores de alterações significativas.

10. AUTORIDADE DE CONTROLO
Se considerar que os seus dados foram tratados de forma ilícita, tem o direito de apresentar reclamação à CNPD - Comissão Nacional de Proteção de Dados (www.cnpd.pt).`,
      },
      refund: {
        title: 'Política de Reembolso',
        lastUpdated: 'Última atualização: Janeiro 2025',
        content: `POLÍTICA DE REEMBOLSO - NEX-SYSTEMS

Esta política aplica-se a todos os produtos e serviços adquiridos através da Nex-Systems.

1. PRODUTOS DIGITAIS (Templates, Blueprints, Presets)
Devido à natureza dos produtos digitais e entrega imediata:
- NÃO é possível solicitar reembolso após o download ou acesso ao ficheiro
- A entrega é instantânea via download direto após confirmação do pagamento
- Ao proceder à compra, o Cliente reconhece e aceita a natureza irrevogável da transação
- Produtos digitais incluem licenças de uso e não podem ser "devolvidos"

2. SERVIÇOS DE CONSULTORIA E DESENVOLVIMENTO
- Projetos personalizados: O reembolso será avaliado caso a caso, dependendo do estágio de desenvolvimento
- Consultoria: Reembolso total se cancelado com 48h de antecedência
- Serviços em andamento: Será faturado apenas o trabalho já realizado

3. PLANOS DE SUBSCRIÇÃO
- Cancelamento a qualquer momento sem penalização
- O acesso permanece ativo até ao final do período pago
- Sem reembolso de períodos já faturados

4. COMO SOLICITAR
Contacte-nos via email (contact@nex-systems.xyz) ou WhatsApp (+351 930 598 827) com:
- Número da encomenda
- Motivo do pedido
- Prova de compra

5. PRAZO DE PROCESSAMENTO
Os pedidos elegíveis serão processados em 5-10 dias úteis.
O reembolso será efetuado pelo mesmo método de pagamento original.

6. EXCEÇÕES
Não serão aceites pedidos de reembolso quando:
- O produto digital foi já descarregado ou acedido
- O Cliente violou os Termos & Condições
- O pedido é feito após 30 dias da compra (para serviços)

Para questões adicionais: contact@nex-systems.xyz | +351 930 598 827`,
      },
      shipping: {
        title: 'Política de Entrega',
        lastUpdated: 'Última atualização: Janeiro 2025',
        content: `POLÍTICA DE ENTREGA - NEX-SYSTEMS

Todos os nossos produtos são digitais, pelo que o processo de entrega é instantâneo e automatizado.

1. PRODUTOS DIGITAIS (Templates, Blueprints, Presets)
- Entrega: INSTANTÂNEA após confirmação do pagamento
- Método: Download direto via link seguro ou API
- Formato: Arquivo comprimido (.zip) contendo todos os ficheiros e documentação
- Acesso: Link de download válido por 72 horas, renovável mediante solicitação
- Notificação: Email de confirmação com link de download enviado automaticamente

2. PROCESSO TÉCNICO DE ENTREGA
Passo 1: Confirmação do pagamento pelo gateway de pagamento
Passo 2: Geração automatizada do link de download seguro
Passo 3: Envio do email de confirmação com instruções de acesso
Passo 4: O Cliente acede e descarrega os ficheiros

Tempo estimado total: < 2 minutos (após confirmação do pagamento)

3. SERVIÇOS PERSONALIZADOS
- Entrega de projetos: Conforme definido no contrato/scope do projeto
- Consultoria: Sessões agendadas conforme calendário acordado
- Acesso a plataformas: Credenciais enviadas via email seguro

4. PROBLEMAS COM A ENTREGA
Se não receber o seu produto dentro de 30 minutos após a confirmação do pagamento:
1. Verifique a pasta de Spam do seu email
2. Contacte-nos via: contact@nex-systems.xyz
3. Ou via WhatsApp: +351 930 598 827

Enviaremos uma cópia do link de download em menos de 24 horas.

5. REENVIO DE LINKS
- Links expirados podem ser reenviados mediante solicitação
- Limitado a 3 reenvios por produto adquirido
- Solicite via email com o número da encomenda

6. ATUALIZAÇÕES DE PRODUTOS
- Atualizações menores: Disponibilizadas gratuitamente
- Atualizações major: Desconto especial para compradores anteriores
- Notificação automática por email quando disponíveis

Para questões adicionais: contact@nex-systems.xyz | +351 930 598 827`,
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      vault: 'Digital Vault',
      product: 'Product',
      enterprise: 'Enterprise',
      support: 'Support',
      contact: 'Contact',
    },
    hero: {
      headline: 'Architecting the Future of Automation',
      subheadline: 'Cloud Infrastructure, AI Solutions, and High-Performance Digital Assets',
      terminalLines: [
        '> Initializing Nex-Systems Protocols...',
        '> Loading Cloud Infrastructure Modules... [OK]',
        '> AI Neural Networks Online... [OK]',
        '> Security Protocols Active... [OK]',
        '> System Ready. Welcome to the Future.',
      ],
      cta: 'Explore Services',
      ctaSecondary: 'Contact Us',
    },
    services: {
      title: 'Services',
      subtitle: 'Elite solutions for high-performance digital infrastructure',
      cloud: {
        title: 'Cloud & DevOps',
        description: 'AWS/VPS orchestration, Docker, Nginx, and Security Hardening. Resilient and scalable infrastructure.',
        features: ['AWS/VPS Orchestration', 'Docker & Containerization', 'Nginx Configuration', 'Security Hardening', 'CI/CD Pipelines', 'Monitoring & Alerts'],
      },
      ai: {
        title: 'AI Engineering',
        description: 'LLM training, API integrations, neural agents, and intelligent data pipelines.',
        features: ['LLM Training & Fine-tuning', 'API Integrations', 'Neural Agent Development', 'Data Pipelines', 'RAG Systems', 'Prompt Engineering'],
      },
      software: {
        title: 'Custom Software',
        description: 'Web applications, specialized JSON workflows, and tailored solutions.',
        features: ['Web Applications', 'n8n Workflows', 'JSON Automation', 'API Development', 'Database Design', 'System Integration'],
      },
    },
    vault: {
      title: 'Digital Vault',
      subtitle: 'High-performance digital assets for project acceleration',
      items: [
        {
          name: 'n8n Automation Templates',
          description: 'Pre-built enterprise automation workflows. Integrations with popular APIs, CRMs, and productivity tools.',
          tag: 'Popular',
        },
        {
          name: 'API Blueprints',
          description: 'Complete REST/GraphQL API structures ready for deployment. Swagger documentation included.',
          tag: 'New',
        },
        {
          name: 'Docker Stack Presets',
          description: 'Optimized containerized environments with Nginx, SSL, monitoring, and auto-scaling configs.',
          tag: 'Essential',
        },
      ],
    },
    support: {
      title: 'Support & Contact',
      subtitle: 'Specialized technical support available 24/7',
      channels: [
        { name: 'WhatsApp', description: 'Quick response via direct message' },
        { name: 'Telegram', description: 'Dedicated channel for tech support' },
        { name: 'Email', description: 'contact@nex-systems.xyz' },
        { name: 'Voice', description: 'Direct call +351 930 598 827' },
      ],
    },
    footer: {
      companyName: 'Nex-Systems',
      tagline: 'Architecting the Future of Digital Infrastructure',
      legalName: 'Sara Talia de Carvalho Campelo',
      nif: 'NIF: 312668201',
      headquarters: 'Registered Office: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal',
      offices: 'Operational Offices: Rua de São Nuno 92, 2560-195 São Pedro da Cadeira, Torres Vedras, Portugal',
      cae: 'CAE: 47910 / CIRS: 1320',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
      shipping: 'Delivery / Shipping',
      rights: 'All rights reserved.',
    },
    // Enterprise
    enterprise: {
      label: 'Enterprise Solutions & Implementation',
      title: 'Sector 360° Packages',
      subtitle: 'End-to-end automation architecture for complex business operations. Our engineers design, build, and deploy custom workflow infrastructure.',
      ctaTitle: 'Need a Custom Solution?',
      ctaDesc: 'Our engineers design, build, and deploy bespoke automation infrastructure for your business.',
      items: {
        clini360: 'Clinics & Medical Offices',
        farma360: 'Pharmacies',
        estetica360: 'Salons & Beauty',
        fit360: 'Gyms & Fitness',
        imob360: 'Real Estate Agencies',
        construi360: 'Construction & Renovation',
        ecom360: 'Online Stores',
        retail360: 'Retail & Fashion',
        creator360: 'Content Creators',
        edu360: 'Schools & Courses',
        dev360: 'Startups & Tech',
        rh360: 'Human Resources & Recruitment',
        fin360: 'Finance & Accounting',
        manut360: 'Technical Services & Repairs',
        limpeza360: 'Professional Cleaning',
        turismo360: 'Travel Agencies',
        ware360: 'Warehouses & Fulfillment',
        log360: 'Transport & Delivery',
      },
    },
    // Product
    product: {
      activeLabel: 'Active Product',
      description: 'Unlock the Master Library: +4,300 pre-built n8n JSON templates. Instant access to production-ready workflows for every business function.',
      browseImport: 'Browse. Import. Automate.',
      statsTemplates: 'JSON Templates',
      statsIntegrations: 'Integrations',
      statsAccess: 'Cloud Access',
      bestValue: 'Best Value — Lifetime Access',
      singlePayment: 'Single payment · Lifetime Access',
      featureWorkflows: '4,300+ Premium Workflows',
      featureLifetime: 'Lifetime Access',
      featureInstant: 'Instant Access via Google Drive',
      featureJson: 'JSON Files Ready to Import',
      featureUpdates: 'Free Updates Forever',
      featureCommunity: 'Community Support',
      buyNow: 'Buy Now',
      or: 'or',
      payCrypto: 'Pay with Crypto',
      comingSoon: 'Coming Soon',
      deliveryNote: 'Instant digital delivery via secure cloud link.',
      featuredWorkflows: 'Featured Workflows',
      customSolution: 'Need a Custom Solution?',
    },
    // Dev Form
    devForm: {
      title: 'Custom Development',
      subtitle: '-7 days to implement',
      btnLabel: 'Custom Development -7 days',
      infoTitle: 'Implement your solution in less than 7 days',
      infoDesc: 'In less than 7 days we implement your custom solution with no additional development costs. Our dedicated engineer works exclusively on your project.',
      infoGuarantee: 'Fixed price. No surprises. Secure payment via NeXFlowX.',
      labelProjectName: 'Project Name *',
      placeholderProjectName: 'Ex: XYZ Clinic Automation',
      labelDetails: 'Project Description *',
      placeholderDetails: 'Describe what you need, desired features, integrations...',
      labelDate: 'Suggested date for 1st study meeting *',
      labelContact: 'Preferred Contact *',
      placeholderContact: 'Email, phone, WhatsApp or Telegram...',
      selectPayment: 'Select payment method',
      termsNote: 'By submitting, you agree to our Terms & Conditions. Payment processed securely by NeXFlowX.',
      checkoutTitle: 'Complete Payment',
      backBtn: '← Back',
      openExternal: 'Open in new window →',
      successTitle: 'Payment Confirmed!',
      successMessage: 'Your custom development request has been successfully registered. Our team will contact you shortly to schedule the project study meeting.',
      closeBtn: 'Close',
      errorGeneric: 'Error processing payment. Please try again.',
    },
    chat: {
      title: 'NeX IA Terminal',
      placeholder: 'Type a command or question...',
      welcome: 'Connection established with NeX IA v3.2.1\nSystem ready. Type "help" for available commands.',
      send: 'Send',
    },
    legal: {
      terms: {
        title: 'Terms & Conditions',
        lastUpdated: 'Last updated: January 2025',
        content: `THESE TERMS AND CONDITIONS ("TERMS") GOVERN YOUR ACCESS AND USE OF THE SERVICES AND DIGITAL PRODUCTS PROVIDED BY NEX-SYSTEMS ("COMPANY", "WE", "OUR").

1. PARTIES TO THE AGREEMENT
These Terms constitute a legally binding agreement between Sara Talia de Carvalho Campelo, NIF: 312668201, with registered office at Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal ("Company") and the user ("Client", "You").

2. SERVICES
Nex-Systems provides the following services:
- Cloud infrastructure consulting and DevOps implementation
- Artificial Intelligence solutions development and integration
- Custom software development
- Digital asset sales (templates, blueprints, presets)

3. INTELLECTUAL PROPERTY
All content, including but not limited to code, designs, templates, documentation, and training materials provided by Nex-Systems, are protected by copyright. The Client receives a non-exclusive, non-transferable license to use the materials.

4. DIGITAL ASSETS
- Purchase of digital assets (templates, blueprints, presets) includes a perpetual use license for the original buyer.
- Resale, redistribution, or sharing of digital assets is strictly prohibited without written authorization.
- Digital assets are delivered instantly upon payment confirmation, via direct download or API.

5. LIMITATION OF LIABILITY
Nex-Systems shall not be liable for indirect, incidental, or consequential damages arising from the use of our services or products. Total liability is limited to the amount paid for the service or product in question.

6. APPLICABLE LAW
These Terms are governed by the laws of the Portuguese Republic and the European Union. Any disputes shall be submitted to the jurisdiction of the courts of Viseu, Portugal.`,
      },
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: January 2025',
        content: `NEX-SYSTEMS ("WE", "COMPANY") IS COMMITTED TO PROTECTING YOUR PERSONAL DATA, IN COMPLIANCE WITH THE GENERAL DATA PROTECTION REGULATION (GDPR) - REGULATION (EU) 2016/679.

1. DATA CONTROLLER
Sara Talia de Carvalho Campelo
NIF: 312668201
Address: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal
Email: contact@nex-systems.xyz

2. PERSONAL DATA COLLECTED
We may collect the following data:
- Name and contact details (email, phone)
- Billing data (name, address, tax ID)
- Technical data (IP address, browser type, access logs)
- Transaction data (purchase history, payments)

3. LEGAL BASIS FOR PROCESSING
- Contract performance: processing necessary to provide contracted services
- Consent: when the user provides explicit consent
- Legitimate interest: for improving our services
- Legal obligation: for tax and invoicing purposes

4. DATA SUBJECT RIGHTS
Under GDPR, you have the right to:
- Access your personal data
- Rectification of incorrect data
- Erasure of your data ("right to be forgotten")
- Restriction of processing
- Data portability
- Objection to processing
- Withdrawal of consent at any time

To exercise your rights, contact us at: contact@nex-systems.xyz

5. DATA RETENTION
Personal data is retained only for the period necessary for the purpose for which it was collected. Billing data is retained for 10 years as required by Portuguese tax legislation.

6. COOKIES AND SIMILAR TECHNOLOGIES
We use essential cookies for website functionality. Analytical and marketing cookies are only used with your consent.

7. DATA SECURITY
We implement appropriate technical and organizational measures to protect your personal data, including SSL/TLS encryption, access controls, and security monitoring.

8. INTERNATIONAL DATA TRANSFER
Your data may be processed within the EU/EEA. It will not be transferred to countries outside the EU without adequate safeguards.

9. CHANGES
We reserve the right to update this policy. We will notify users of significant changes.

10. SUPERVISORY AUTHORITY
If you believe your data has been processed unlawfully, you have the right to lodge a complaint with the CNPD - Comissão Nacional de Proteção de Dados (www.cnpd.pt).`,
      },
      refund: {
        title: 'Refund Policy',
        lastUpdated: 'Last updated: January 2025',
        content: `REFUND POLICY - NEX-SYSTEMS

This policy applies to all products and services purchased through Nex-Systems.

1. DIGITAL PRODUCTS (Templates, Blueprints, Presets)
Due to the nature of digital products and immediate delivery:
- NO refund is possible after download or access to the file
- Delivery is instant via direct download after payment confirmation
- By proceeding with the purchase, the Client acknowledges and accepts the irrevocable nature of the transaction
- Digital products include use licenses and cannot be "returned"

2. CONSULTING AND DEVELOPMENT SERVICES
- Custom projects: Refund evaluated case by case depending on development stage
- Consulting: Full refund if cancelled 48 hours in advance
- In-progress services: Only completed work will be billed

3. SUBSCRIPTION PLANS
- Cancel anytime without penalty
- Access remains active until the end of the paid period
- No refund for already billed periods

4. HOW TO REQUEST
Contact us via email (contact@nex-systems.xyz) or WhatsApp (+351 930 598 827) with:
- Order number
- Reason for request
- Proof of purchase

5. PROCESSING TIME
Eligible requests will be processed within 5-10 business days.
Refunds will be issued via the original payment method.

6. EXCEPTIONS
Refund requests will not be accepted when:
- The digital product has been downloaded or accessed
- The Client violated the Terms & Conditions
- The request is made after 30 days from purchase (for services)

For additional questions: contact@nex-systems.xyz | +351 930 598 827`,
      },
      shipping: {
        title: 'Delivery / Shipping Policy',
        lastUpdated: 'Last updated: January 2025',
        content: `DELIVERY POLICY - NEX-SYSTEMS

All our products are digital, so the delivery process is instant and automated.

1. DIGITAL PRODUCTS (Templates, Blueprints, Presets)
- Delivery: INSTANT upon payment confirmation
- Method: Direct download via secure link or API
- Format: Compressed archive (.zip) containing all files and documentation
- Access: Download link valid for 72 hours, renewable upon request
- Notification: Confirmation email with download link sent automatically

2. TECHNICAL DELIVERY PROCESS
Step 1: Payment confirmation from the payment gateway
Step 2: Automated generation of secure download link
Step 3: Confirmation email with access instructions sent
Step 4: Client accesses and downloads the files

Estimated total time: < 2 minutes (after payment confirmation)

3. CUSTOMIZED SERVICES
- Project delivery: As defined in the contract/project scope
- Consulting: Sessions scheduled according to agreed calendar
- Platform access: Credentials sent via secure email

4. DELIVERY ISSUES
If you do not receive your product within 30 minutes after payment confirmation:
1. Check your email Spam folder
2. Contact us at: contact@nex-systems.xyz
3. Or via WhatsApp: +351 930 598 827

We will send a copy of the download link within 24 hours.

5. LINK RESENDING
- Expired links can be resent upon request
- Limited to 3 resends per purchased product
- Request via email with order number

6. PRODUCT UPDATES
- Minor updates: Available free of charge
- Major updates: Special discount for previous buyers
- Automatic notification by email when available

For additional questions: contact@nex-systems.xyz | +351 930 598 827`,
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      vault: 'Bóveda Digital',
      product: 'Producto',
      enterprise: 'Empresa',
      support: 'Soporte',
      contact: 'Contacto',
    },
    hero: {
      headline: 'Arquitectando el Futuro de la Automatización',
      subheadline: 'Infraestructura Cloud, Soluciones de IA y Activos Digitales de Alto Rendimiento',
      terminalLines: [
        '> Inicializando Protocolos Nex-Systems...',
        '> Cargando Módulos Cloud Infrastructure... [OK]',
        '> Redes Neuronales IA Online... [OK]',
        '> Protocolos de Seguridad Activos... [OK]',
        '> Sistema Listo. Bienvenido al Futuro.',
      ],
      cta: 'Explorar Servicios',
      ctaSecondary: 'Contáctenos',
    },
    services: {
      title: 'Servicios',
      subtitle: 'Soluciones de élite para infraestructura digital de alto rendimiento',
      cloud: {
        title: 'Cloud & DevOps',
        description: 'Orquestación AWS/VPS, Docker, Nginx y Security Hardening. Infraestructura resiliente y escalable.',
        features: ['Orquestación AWS/VPS', 'Docker y Contenedorización', 'Configuración Nginx', 'Security Hardening', 'CI/CD Pipelines', 'Monitorización & Alertas'],
      },
      ai: {
        title: 'AI Engineering',
        description: 'Entrenamiento de LLMs, integraciones de API, agentes neurales y pipelines de datos inteligentes.',
        features: ['Entrenamiento y Fine-tuning LLM', 'Integraciones API', 'Desarrollo Agentes Neuronales', 'Pipelines de Datos', 'Sistemas RAG', 'Prompt Engineering'],
      },
      software: {
        title: 'Software a Medida',
        description: 'Aplicaciones web, workflows JSON especializados y soluciones a medida.',
        features: ['Aplicaciones Web', 'Workflows n8n', 'Automatización JSON', 'Desarrollo de API', 'Diseño de Bases de Datos', 'Integración de Sistemas'],
      },
    },
    vault: {
      title: 'Bóveda Digital',
      subtitle: 'Activos digitales de alto rendimiento para aceleración de proyectos',
      items: [
        {
          name: 'n8n Automation Templates',
          description: 'Workflows pre-construidos para automatización empresarial. Integraciones con APIs populares, CRMs y herramientas de productividad.',
          tag: 'Popular',
        },
        {
          name: 'API Blueprints',
          description: 'Estructuras completas de API REST/GraphQL listas para deploy. Documentación Swagger incluida.',
          tag: 'Nuevo',
        },
        {
          name: 'Docker Stack Presets',
          description: 'Entornos containerizados optimizados con configs de Nginx, SSL, monitorización y auto-scaling.',
          tag: 'Esencial',
        },
      ],
    },
    support: {
      title: 'Soporte & Contacto',
      subtitle: 'Soporte técnico especializado disponible 24/7',
      channels: [
        { name: 'WhatsApp', description: 'Respuesta rápida vía mensaje directo' },
        { name: 'Telegram', description: 'Canal dedicado para soporte técnico' },
        { name: 'Email', description: 'contact@nex-systems.xyz' },
        { name: 'Voz', description: 'Llamada directa +351 930 598 827' },
      ],
    },
    footer: {
      companyName: 'Nex-Systems',
      tagline: 'Arquitectando el Futuro de la Infraestructura Digital',
      legalName: 'Sara Talia de Carvalho Campelo',
      nif: 'NIF: 312668201',
      headquarters: 'Sede Fiscal: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal',
      offices: 'Oficinas Operacionales: Rua de São Nuno 92, 2560-195 São Pedro da Cadeira, Torres Vedras, Portugal',
      cae: 'CAE: 47910 / CIRS: 1320',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      terms: 'Términos & Condiciones',
      privacy: 'Política de Privacidad',
      refund: 'Política de Reembolso',
      shipping: 'Entrega / Envío',
      rights: 'Todos los derechos reservados.',
    },
    // Enterprise
    enterprise: {
      label: 'Soluciones Empresariales e Implementación',
      title: 'Paquetes Sectoriales 360°',
      subtitle: 'Arquitectura integral para operaciones empresariales complejas. Nuestros ingenieros diseñan, construyen e implementan infraestructura de workflows personalizada.',
      ctaTitle: '¿Necesita una Solución Personalizada?',
      ctaDesc: 'Nuestros ingenieros diseñan, construyen e implementan infraestructura de automatización a medida para su negocio.',
      items: {
        clini360: 'Clínicas y Consultorios Médicos',
        farma360: 'Farmacias',
        estetica360: 'Salones y Estética',
        fit360: 'Gimnasios y Fitness',
        imob360: 'Inmobiliarias',
        construi360: 'Construcción y Renovación',
        ecom360: 'Tiendas Online',
        retail360: 'Retail y Moda',
        creator360: 'Creadores de Contenido',
        edu360: 'Escuelas y Cursos',
        dev360: 'Startups y Tecnología',
        rh360: 'Recursos Humanos y Reclutamiento',
        fin360: 'Finanzas y Contabilidad',
        manut360: 'Servicios Técnicos y Reparaciones',
        limpeza360: 'Limpieza Profesional',
        turismo360: 'Agencias de Viajes',
        ware360: 'Almacenes y Fulfillment',
        log360: 'Transporte y Entregas',
      },
    },
    // Product
    product: {
      activeLabel: 'Producto Activo',
      description: 'Desbloquea la Biblioteca Master: +4.300 templates n8n JSON pre-construidos. Acceso instantáneo a workflows listos para producción para cada función empresarial.',
      browseImport: 'Navega. Importa. Automatiza.',
      statsTemplates: 'Templates JSON',
      statsIntegrations: 'Integraciones',
      statsAccess: 'Acceso Cloud',
      bestValue: 'Mejor Valor — Acceso Vitalicio',
      singlePayment: 'Pago único · Acceso vitalicio',
      featureWorkflows: '4.300+ Workflows Premium',
      featureLifetime: 'Acceso Vitalicio',
      featureInstant: 'Acceso Instantáneo via Google Drive',
      featureJson: 'Ficheros JSON Listos para Importar',
      featureUpdates: 'Actualizaciones Gratuitas para Siempre',
      featureCommunity: 'Soporte de Comunidad',
      buyNow: 'Comprar Ahora',
      or: 'o',
      payCrypto: 'Pagar con Crypto',
      comingSoon: 'Próximamente',
      deliveryNote: 'Entrega digital instantánea via link seguro.',
      featuredWorkflows: 'Workflows Destacados',
      customSolution: '¿Necesita una Solución Personalizada?',
    },
    // Dev Form
    devForm: {
      title: 'Desarrollo Personalizado',
      subtitle: '-7 días para implementar',
      btnLabel: 'Desarrollo Personalizado -7 días',
      infoTitle: 'Implemente su solución en menos de 7 días',
      infoDesc: 'En menos de 7 días implementamos su solución personalizada, sin costos adicionales de desarrollo. Nuestro ingeniero dedicado trabaja exclusivamente en su proyecto.',
      infoGuarantee: 'Precio fijo. Sin sorpresas. Pago seguro vía NeXFlowX.',
      labelProjectName: 'Nombre del Proyecto *',
      placeholderProjectName: 'Ex: Automatización Clínica XYZ',
      labelDetails: 'Explicaciones del Proyecto *',
      placeholderDetails: 'Describa lo que necesita, funcionalidades deseadas, integraciones...',
      labelDate: 'Fecha sugerida para 1ª reunión de estudio *',
      labelContact: 'Contacto Preferido *',
      placeholderContact: 'Email, teléfono, WhatsApp o Telegram...',
      selectPayment: 'Seleccione el método de pago',
      termsNote: 'Al enviar, acepta nuestros Términos & Condiciones. Pago procesado de forma segura por NeXFlowX.',
      checkoutTitle: 'Completar Pago',
      backBtn: '← Volver',
      openExternal: 'Abrir en nueva ventana →',
      successTitle: '¡Pago Confirmado!',
      successMessage: 'Su solicitud de desarrollo personalizado ha sido registrada con éxito. Nuestro equipo se pondrá en contacto en breve para programar la reunión de estudio del proyecto.',
      closeBtn: 'Cerrar',
      errorGeneric: 'Error al procesar el pago. Inténtelo de nuevo.',
    },
    chat: {
      title: 'NeX IA Terminal',
      placeholder: 'Escriba un comando o pregunta...',
      welcome: 'Conexión establecida con NeX IA v3.2.1\nSistema listo. Escriba "help" para comandos disponibles.',
      send: 'Enviar',
    },
    legal: {
      terms: {
        title: 'Términos & Condiciones',
        lastUpdated: 'Última actualización: Enero 2025',
        content: `ESTOS TÉRMINOS Y CONDICIONES ("TÉRMINOS") GOBIERNAN SU ACCESO Y USO DE LOS SERVICIOS Y PRODUCTOS DIGITALES PROPORCIONADOS POR NEX-SYSTEMS ("EMPRESA", "NOSOTROS", "NUESTRO").

1. PARTES DEL CONTRATO
Estos Términos constituyen un acuerdo legal entre Sara Talia de Carvalho Campelo, NIF: 312668201, con sede fiscal en Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal ("Empresa") y el usuario ("Cliente", "Usted").

2. SERVICIOS
Nex-Systems proporciona los siguientes servicios:
- Consultoría e implementación de infraestructura cloud y DevOps
- Desarrollo e integración de soluciones de Inteligencia Artificial
- Desarrollo de software personalizado
- Venta de activos digitales (templates, blueprints, presets)

3. PROPIEDAD INTELECTUAL
Todo el contenido, incluyendo pero no limitado a código, diseños, templates, documentación y materiales de formación proporcionados por Nex-Systems, están protegidos por derechos de autor. El Cliente recibe una licencia no-exclusiva, no-transferible de uso.

4. ACTIVOS DIGITALES
- La compra de activos digitales (templates, blueprints, presets) incluye una licencia de uso perpetua para el comprador original.
- La reventa, redistribución o compartición de activos digitales está estrictamente prohibida sin autorización escrita.
- Los activos digitales se entregan instantáneamente tras la confirmación del pago, vía descarga directa o API.

5. LIMITACIÓN DE RESPONSABILIDAD
Nex-Systems no será responsable por daños indirectos, incidentales o consecuentes resultantes del uso de nuestros servicios o productos. La responsabilidad total se limita al valor pagado por el servicio o producto en cuestión.

6. LEGISLACIÓN APLICABLE
Estos Términos se rigen por las leyes de la República Portuguesa y de la Unión Europea. Cualquier litigio se someterá a la jurisdicción de los tribunales de Viseu, Portugal.`,
      },
      privacy: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última actualización: Enero 2025',
        content: `NEX-SYSTEMS ("NOSOTROS", "EMPRESA") ESTÁ COMPROMETIDA CON LA PROTECCIÓN DE SUS DATOS PERSONALES, EN CONFORMIDAD CON EL REGLAMENTO GENERAL DE PROTECCIÓN DE DATOS (RGPD/GDPR) - REGLAMENTO (UE) 2016/679.

1. RESPONSABLE DEL TRATAMIENTO
Sara Talia de Carvalho Campelo
NIF: 312668201
Sede: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal
Email: contact@nex-systems.xyz

2. DATOS PERSONALES RECOGIDOS
Podemos recoger los siguientes datos:
- Nombre y datos de contacto (email, teléfono)
- Datos de facturación (nombre, dirección, NIF)
- Datos técnicos (dirección IP, tipo de navegador, logs de acceso)
- Datos de transacción (historial de compras, pagamentos)

3. BASE LEGAL DEL TRATAMIENTO
- Ejecución de contrato: procesamiento necesario para proporcionar los servicios contratados
- Consentimiento: cuando el usuario da consentimiento explícito
- Interés legítimo: para mejora de nuestros servicios
- Obligación legal: para fines fiscales y de facturación

4. DERECHOS DEL TITULAR DE LOS DATOS
Bajo el RGPD, tiene derecho a:
- Acceso a sus datos personales
- Rectificación de datos incorrectos
- Supresión de sus datos ("derecho al olvido")
- Limitación del tratamiento
- Portabilidad de los datos
- Oposición al tratamiento
- Retirada del consentimiento en cualquier momento

Para ejercer sus derechos: contact@nex-systems.xyz

5. RETENCIÓN DE DATOS
Los datos personales se retienen solo por el período necesario. Datos de facturación se retienen por 10 años según legislación fiscal portuguesa.

6. COOKIES Y TECNOLOGÍAS SIMILARES
Usamos cookies esenciales para el funcionamiento del sitio. Cookies analíticas y de marketing solo con su consentimiento.

7. SEGURIDAD DE LOS DATOS
Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos.

8. TRANSFERENCIA INTERNACIONAL DE DATOS
Sus datos pueden ser procesados dentro de la UE/EEE. No serán transferidos fuera de la UE sin garantías adecuadas.

9. CAMBIOS
Nos reservamos el derecho de actualizar esta política.

10. AUTORIDAD DE CONTROL
Si considera que sus datos han sido tratados ilícitamente, puede presentar una reclamación ante la CNPD (www.cnpd.pt).`,
      },
      refund: {
        title: 'Política de Reembolso',
        lastUpdated: 'Última actualización: Enero 2025',
        content: `POLÍTICA DE REEMBOLSO - NEX-SYSTEMS

Esta política aplica a todos los productos y servicios adquiridos a través de Nex-Systems.

1. PRODUCTOS DIGITALES (Templates, Blueprints, Presets)
Debido a la naturaleza de los productos digitales y entrega inmediata:
- NO es posible solicitar reembolso después de la descarga o acceso al archivo
- La entrega es instantánea vía descarga directa después de la confirmación del pago
- Al proceder con la compra, el Cliente reconoce y acepta la naturaleza irrevocable de la transacción

2. SERVICIOS DE CONSULTORÍA Y DESARROLLO
- Proyectos personalizados: El reembolso será evaluado caso por caso
- Consultoría: Reembolso total si se cancela con 48h de antelación
- Servicios en curso: Solo se facturará el trabajo ya realizado

3. PLANES DE SUSCRIPCIÓN
- Cancelación en cualquier momento sin penalización
- El acceso permanece activo hasta el final del período pagado

4. CÓMO SOLICITAR
Contacte vía email (contact@nex-systems.xyz) o WhatsApp (+351 930 598 827)

5. PLAZO DE PROCESAMIENTO
Solicitudes elegibles serán procesadas en 5-10 días hábiles.

6. EXCEPCIONES
No se aceptarán solicitudes cuando:
- El producto digital ya fue descargado o accedido
- El Cliente violó los Términos & Condiciones

Para preguntas adicionales: contact@nex-systems.xyz | +351 930 598 827`,
      },
      shipping: {
        title: 'Entrega / Envío',
        lastUpdated: 'Última actualización: Enero 2025',
        content: `POLÍTICA DE ENTREGA - NEX-SYSTEMS

Todos nuestros productos son digitales, por lo que la entrega es instantánea y automatizada.

1. PRODUCTOS DIGITALES
- Entrega: INSTANTÁNEA tras confirmación del pago
- Método: Descarga directa vía enlace seguro o API
- Formato: Archivo comprimido (.zip)
- Acceso: Enlace de descarga válido por 72 horas
- Notificación: Email de confirmación con enlace de descarga

2. PROCESO TÉCNICO DE ENTREGA
Paso 1: Confirmación del pago por el gateway de pago
Paso 2: Generación automatizada del enlace de descarga seguro
Paso 3: Envío del email de confirmación con instrucciones
Paso 4: El Cliente accede y descarga los archivos

Tiempo estimado total: < 2 minutos

3. SERVICIOS PERSONALIZADOS
- Entrega de proyectos: Según lo definido en el contrato
- Consultoría: Sesiones según calendario acordado

4. PROBLEMAS CON LA ENTREGA
Si no recibe su producto en 30 minutos:
1. Verifique la carpeta de Spam
2. Contacte: contact@nex-systems.xyz
3. O WhatsApp: +351 930 598 827

Para preguntas adicionales: contact@nex-systems.xyz | +351 930 598 827`,
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      vault: 'Coffre Digital',
      product: 'Produit',
      enterprise: 'Entreprise',
      support: 'Support',
      contact: 'Contact',
    },
    hero: {
      headline: "Architecturer l'Avenir de l'Automatisation",
      subheadline: "Infrastructure Cloud, Solutions IA et Actifs Numériques Haute Performance",
      terminalLines: [
        '> Initialisation des Protocoles Nex-Systems...',
        '> Chargement des Modules Cloud Infrastructure... [OK]',
        '> Réseaux Neuronaux IA en Ligne... [OK]',
        '> Protocoles de Sécurité Actifs... [OK]',
        '> Système Prêt. Bienvenue dans le Futur.',
      ],
      cta: 'Explorer les Services',
      ctaSecondary: 'Nous Contacter',
    },
    services: {
      title: 'Services',
      subtitle: "Solutions d'élite pour l'infrastructure numérique haute performance",
      cloud: {
        title: 'Cloud & DevOps',
        description: "Orchestration AWS/VPS, Docker, Nginx et Security Hardening. Infrastructure résiliente et évolutive.",
        features: ["Orchestration AWS/VPS", "Docker & Conteneurisation", "Configuration Nginx", "Security Hardening", "Pipelines CI/CD", "Monitoring & Alertes"],
      },
      ai: {
        title: 'AI Engineering',
        description: "Entraînement LLM, intégrations API, agents neuronaux et pipelines de données intelligents.",
        features: ["Entraînement & Fine-tuning LLM", "Intégrations API", "Développement Agents Neuronaux", "Pipelines de Données", "Systèmes RAG", "Prompt Engineering"],
      },
      software: {
        title: 'Logiciels Sur Mesure',
        description: "Applications web, workflows JSON spécialisés et solutions personnalisées.",
        features: ["Applications Web", "Workflows n8n", "Automatisation JSON", "Développement API", "Conception Base de Données", "Intégration Systèmes"],
      },
    },
    vault: {
      title: 'Coffre Digital',
      subtitle: "Actifs numériques haute performance pour l'accélération de projets",
      items: [
        {
          name: 'n8n Automation Templates',
          description: "Workflows d'automatisation entreprise pré-construits. Intégrations avec APIs populaires, CRMs et outils de productivité.",
          tag: 'Populaire',
        },
        {
          name: 'API Blueprints',
          description: "Structures API REST/GraphQL complètes prêtes au déploiement. Documentation Swagger incluse.",
          tag: 'Nouveau',
        },
        {
          name: 'Docker Stack Presets',
          description: "Environnements conteneurisés optimisés avec configs Nginx, SSL, monitoring et auto-scaling.",
          tag: 'Essentiel',
        },
      ],
    },
    support: {
      title: 'Support & Contact',
      subtitle: 'Support technique spécialisé disponible 24/7',
      channels: [
        { name: 'WhatsApp', description: 'Réponse rapide via message direct' },
        { name: 'Telegram', description: 'Canal dédié au support technique' },
        { name: 'Email', description: 'contact@nex-systems.xyz' },
        { name: 'Voix', description: 'Appel direct +351 930 598 827' },
      ],
    },
    footer: {
      companyName: 'Nex-Systems',
      tagline: "Architecturer l'Avenir de l'Infrastructure Numérique",
      legalName: 'Sara Talia de Carvalho Campelo',
      nif: 'NIF: 312668201',
      headquarters: 'Siège Social: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal',
      offices: 'Bureaux Opérationnels: Rua de São Nuno 92, 2560-195 São Pedro da Cadeira, Torres Vedras, Portugal',
      cae: 'CAE: 47910 / CIRS: 1320',
      quickLinks: 'Liens Rapides',
      legal: 'Légal',
      terms: "Termes & Conditions",
      privacy: 'Politique de Confidentialité',
      refund: 'Politique de Remboursement',
      shipping: 'Livraison / Expédition',
      rights: 'Tous droits réservés.',
    },
    // Enterprise
    enterprise: {
      label: 'Solutions Entreprise & Implémentation',
      title: 'Packages Sectoriels 360°',
      subtitle: "Architecture de bout en bout pour les opérations commerciales complexes. Nos ingénieurs conçoivent, construisent et déploient une infrastructure de workflows sur mesure.",
      ctaTitle: 'Besoin d\'une Solution Personnalisée ?',
      ctaDesc: 'Nos ingénieurs conçoivent, construisent et déploient une infrastructure d\'automatisation sur mesure pour votre entreprise.',
      items: {
        clini360: 'Cliniques & Cabinets Médicaux',
        farma360: 'Pharmacies',
        estetica360: 'Salons & Esthétique',
        fit360: 'Salles de Sport & Fitness',
        imob360: 'Agences Immobilières',
        construi360: 'Construction & Rénovation',
        ecom360: 'Boutiques en Ligne',
        retail360: 'Commerce & Mode',
        creator360: 'Créateurs de Contenu',
        edu360: 'Écoles & Formations',
        dev360: 'Startups & Tech',
        rh360: 'Ressources Humaines & Recrutement',
        fin360: 'Finance & Comptabilité',
        manut360: 'Services Techniques & Réparations',
        limpeza360: 'Nettoyage Professionnel',
        turismo360: 'Agences de Voyages',
        ware360: 'Entrepôts & Fulfillment',
        log360: 'Transport & Livraison',
      },
    },
    // Product
    product: {
      activeLabel: 'Produit Actif',
      description: "Débloquez la Bibliothèque Master : +4 300 templates n8n JSON pré-construits. Accès instantané à des workflows prêts pour la production.",
      browseImport: 'Parcourez. Importez. Automatisez.',
      statsTemplates: 'Templates JSON',
      statsIntegrations: 'Intégrations',
      statsAccess: 'Accès Cloud',
      bestValue: "Meilleur Rapport — Accès à Vie",
      singlePayment: "Paiement unique · Accès à vie",
      featureWorkflows: '4 300+ Workflows Premium',
      featureLifetime: "Accès à vie",
      featureInstant: "Accès instantané via Google Drive",
      featureJson: 'Fichiers JSON prêts à importer',
      featureUpdates: 'Mises à jour gratuites pour toujours',
      featureCommunity: 'Support communautaire',
      buyNow: "Acheter maintenant",
      or: 'ou',
      payCrypto: 'Payer en Crypto',
      comingSoon: 'Bientôt',
      deliveryNote: "Livraison numérique instantanée via lien sécurisé.",
      featuredWorkflows: "Workflows en vedette",
      customSolution: "Besoin d'une solution personnalisée ?",
    },
    // Dev Form
    devForm: {
      title: 'Développement Personnalisé',
      subtitle: '-7 jours pour implémenter',
      btnLabel: 'Développement Personnalisé -7 jours',
      infoTitle: 'Implémentez votre solution en moins de 7 jours',
      infoDesc: "En moins de 7 jours, nous implémentons votre solution personnalisée sans coûts de développement supplémentaires. Notre ingénieur dédié travaille exclusivement sur votre projet.",
      infoGuarantee: 'Prix fixe. Sans surprises. Paiement sécurisé via NeXFlowX.',
      labelProjectName: 'Nom du Projet *',
      placeholderProjectName: 'Ex: Automatisation Clinique XYZ',
      labelDetails: "Description du Projet *",
      placeholderDetails: "Décrivez ce dont vous avez besoin, fonctionnalités souhaitées, intégrations...",
      labelDate: "Date suggérée pour la 1ère réunion d'étude *",
      labelContact: 'Contact Préféré *',
      placeholderContact: 'Email, téléphone, WhatsApp ou Telegram...',
      selectPayment: 'Sélectionnez le mode de paiement',
      termsNote: "En soumettant, vous acceptez nos Termes & Conditions. Paiement traité de manière sécurisée par NeXFlowX.",
      checkoutTitle: 'Compléter le Paiement',
      backBtn: '← Retour',
      openExternal: 'Ouvrir dans une nouvelle fenêtre →',
      successTitle: 'Paiement Confirmé !',
      successMessage: "Votre demande de développement personnalisé a été enregistrée avec succès. Notre équipe vous contactera sous peu pour planifier la réunion d'étude du projet.",
      closeBtn: 'Fermer',
      errorGeneric: "Erreur lors du traitement du paiement. Veuillez réessayer.",
    },
    chat: {
      title: 'Terminal NeX IA',
      placeholder: 'Tapez une commande ou question...',
      welcome: 'Connexion établie avec NeX IA v3.2.1\nSystème prêt. Tapez "help" pour les commandes disponibles.',
      send: 'Envoyer',
    },
    legal: {
      terms: {
        title: 'Termes & Conditions',
        lastUpdated: 'Dernière mise à jour: Janvier 2025',
        content: `CES TERMES ET CONDITIONS ("TERMES") RÉGISSENT VOTRE ACCÈS ET UTILISATION DES SERVICES ET PRODUITS NUMÉRIQUES FOURNIS PAR NEX-SYSTEMS ("ENTREPRISE", "NOUS", "NOTRE").

1. PARTIES AU CONTRAT
Ces Termes constituent un accord juridique entre Sara Talia de Carvalho Campelo, NIF: 312668201, dont le siège social est situé au Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal ("Entreprise") et l'utilisateur ("Client", "Vous").

2. SERVICES
Nex-Systems fournit les services suivants:
- Conseil et implémentation d'infrastructure cloud et DevOps
- Développement et intégration de solutions d'Intelligence Artificielle
- Développement de logiciels personnalisés
- Vente d'actifs numériques (templates, blueprints, presets)

3. PROPRIÉTÉ INTELLECTUELLE
Tout le contenu, y compris mais sans s'y limiter le code, les designs, templates, documentation et matériaux de formation fournis par Nex-Systems, sont protégés par le droit d'auteur. Le Client reçoit une licence non-exclusive, non-transférable d'utilisation.

4. ACTIFS NUMÉRIQUES
- L'achat d'actifs numériques inclut une licence d'utilisation perpétuelle pour l'acheteur original.
- La revente, redistribution ou partage des actifs numériques est strictement interdite sans autorisation écrite.
- Les actifs numériques sont livrés instantanément après confirmation du paiement.

5. LIMITATION DE RESPONSABILITÉ
Nex-Systems ne sera pas responsable des dommages indirects, incidents ou consécutifs résultant de l'utilisation de nos services ou produits.

6. LOI APPLICABLE
Ces Termes sont régis par les lois de la République Portugaise et de l'Union Européenne.`,
      },
      privacy: {
        title: 'Politique de Confidentialité',
        lastUpdated: 'Dernière mise à jour: Janvier 2025',
        content: `NEX-SYSTEMS ("NOUS", "ENTREPRISE") S'ENGAGE À PROTÉGER VOS DONNÉES PERSONNELLES, EN CONFORMITÉ AVEC LE RÈGLEMENT GÉNÉRAL SUR LA PROTECTION DES DONNÉES (RGPD) - RÈGLEMENT (UE) 2016/679.

1. RESPONSABLE DU TRAITEMENT
Sara Talia de Carvalho Campelo
NIF: 312668201
Adresse: Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal
Email: contact@nex-systems.xyz

2. DONNÉES PERSONNELLES COLLECTÉES
Nous pouvons collecter les données suivantes:
- Nom et coordonnées (email, téléphone)
- Données de facturation (nom, adresse, NIF)
- Données techniques (adresse IP, type de navigateur, logs d'accès)
- Données de transaction (historique d'achats, paiements)

3. BASE LÉGALE DU TRAITEMENT
- Exécution du contrat
- Consentement explicite de l'utilisateur
- Intérêt légitime
- Obligation légale

4. DROITS DE LA PERSONNE CONCERNÉE
Sous le RGPD, vous avez le droit de:
- Accéder à vos données personnelles
- Rectifier des données incorrectes
- Effacer vos données ("droit à l'oubli")
- Limiter le traitement
- Portabilité des données
- S'opposer au traitement
- Retirer votre consentement à tout moment

Contact: contact@nex-systems.xyz

5. CONSERVATION DES DONNÉES
Les données personnelles sont conservées uniquement pour la période nécessaire.

6. SÉCURITÉ DES DONNÉES
Nous mettons en œuvre des mesures techniques et organisationnelles appropriées.

7. AUTORITÉ DE CONTRÔLE
Vous pouvez déposer une plainte auprès de la CNPD (www.cnpd.pt).`,
      },
      refund: {
        title: 'Politique de Remboursement',
        lastUpdated: 'Dernière mise à jour: Janvier 2025',
        content: `POLITIQUE DE REMBOURSEMENT - NEX-SYSTEMS

1. PRODUITS NUMÉRIQUES
En raison de la nature des produits numériques et de la livraison immédiate:
- AUCUN remboursement possible après le téléchargement
- La livraison est instantanée après confirmation du paiement

2. SERVICES DE CONSEIL ET DÉVELOPPEMENT
- Projets personnalisés: Évaluation au cas par cas
- Conseil: Remboursement total si annulé 48h à l'avance

3. ABONNEMENTS
- Annulation à tout moment sans pénalité

4. COMMENT DEMANDER
Contactez-nous: contact@nex-systems.xyz | +351 930 598 827

Pour questions supplémentaires: contact@nex-systems.xyz`,
      },
      shipping: {
        title: 'Livraison / Expédition',
        lastUpdated: 'Dernière mise à jour: Janvier 2025',
        content: `POLITIQUE DE LIVRAISON - NEX-SYSTEMS

Tous nos produits sont numériques, la livraison est instantanée et automatisée.

1. PRODUITS NUMÉRIQUES
- Livraison: INSTANTANÉE après confirmation du paiement
- Méthode: Téléchargement direct via lien sécurisé ou API
- Format: Archive compressée (.zip)
- Accès: Lien de téléchargement valide 72 heures

2. PROCESSUS TECHNIQUE
Étape 1: Confirmation du paiement
Étape 2: Génération du lien de téléchargement sécurisé
Étape 3: Email de confirmation avec instructions
Étape 4: Le Client accède et télécharge les fichiers

Temps estimé total: < 2 minutes

3. PROBLÈMES DE LIVRAISON
Si vous ne recevez pas votre produit dans les 30 minutes:
1. Vérifiez votre dossier Spam
2. Contactez: contact@nex-systems.xyz
3. Ou WhatsApp: +351 930 598 827

Pour questions supplémentaires: contact@nex-systems.xyz | +351 930 598 827`,
      },
    },
  },
} as const;

export type Translations = typeof translations.pt;
