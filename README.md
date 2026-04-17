# NeX-Systems WebSite

> Arquitetar o Futuro da Automação — Infraestrutura Cloud, Soluções de IA e Ativos Digitais de Alto Desempenho.

**Website oficial:** [nex-systems.xyz](https://www.nex-systems.xyz)

---

## Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Componentes](#componentes)
- [Sistema de Internacionalização (i18n)](#sistema-de-internacionalização-i18n)
- [Integração NeXFlowX — Pagamentos](#integração-nexflowx--pagamentos)
  - [Desenvolvimento Personalizado -7 dias](#desenvolvimento-personalizado--7-dias)
  - [API: Criação de Payment Links](#api-criação-de-payment-links)
  - [Webhook: Confirmação de Pagamentos](#webhook-confirmação-de-pagamentos)
  - [Iframe de Checkout Embutido](#iframe-de-checkout-embutido)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Instalação e Desenvolvimento](#instalação-e-desenvolvimento)
- [Segurança](#segurança)
- [SEO e Meta Dados](#seo-e-meta-dados)
- [Licença e Contacto](#licença-e-contacto)

---

## Visão Geral

Website empresarial da **NeX-Systems**, com design cyberpunk dark-theme, animações Matrix e integração completa com o gateway de pagamentos **NeXFlowX**. O site apresenta os serviços da empresa (Cloud & DevOps, AI Engineering, Software à Medida), o produto principal (The Automation Library — 4.300+ templates n8n) e 18 pacotes setoriais 360° com funcionalidade de desenvolvimento personalizado em 7 dias.

### Funcionalidades Principais

| Funcionalidade | Descrição |
|---|---|
| **Pacotes Setoriais 360°** | 18 cards de soluções setoriais (Clínicas, Farmácias, Imobiliárias, etc.) |
| **Desenvolvimento Personalizado -7 dias** | Modal completo com formulário + checkout NeXFlowX integrado |
| **Pagamento Multi-Moeda** | EUR (€400), BRL (R$2.500), USDT TRC20 (400) |
| **Checkout Iframe** | Checkout embutido via iframe com `postMessage` para sucesso |
| **Webhook HMAC-SHA256** | Validação criptográfica de webhooks de pagamento |
| **Internacionalização** | 4 idiomas: PT, EN, ES, FR (Zustand + localStorage) |
| **IA Chat** | Terminal de chat assistido por IA |
| **SEO Completo** | OpenGraph, Twitter Cards, Schema.org (Organization + LocalBusiness) |

---

## Stack Tecnológico

| Tecnologia | Versão | Uso |
|---|---|---|
| **Next.js** | 16.1+ (App Router) | Framework principal |
| **React** | 19 | UI Components |
| **TypeScript** | 5 | Tipagem estática |
| **Tailwind CSS** | 4 | Styling utility-first |
| **shadcn/ui** | New York | Component library |
| **Framer Motion** | 12 | Animações e transições |
| **Zustand** | 5 | State management (i18n) |
| **Lucide React** | 0.525+ | Ícones SVG |
| **Prisma** | 6 | ORM (SQLite) |
| **Prisma Client** | 6 | Database client |

---

## Arquitetura do Projeto

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                     │
│                                                         │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │ page.tsx │──│  Components   │  │  Zustand Store    │  │
│  │ (Route /) │  │  (nex/*)     │  │  (use-language)   │  │
│  └──────────┘  └──────────────┘  └───────────────────┘  │
│       │               │                   │             │
│       ▼               ▼                   ▼             │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │ layout   │  │  Modais      │  │  i18n.ts          │  │
│  │ + SEO    │  │  DevForm     │  │  (4 idiomas)      │  │
│  │ + Fonts  │  │  Legal       │  │                   │  │
│  └──────────┘  │  AIChat      │  └───────────────────┘  │
│                └──────────────┘                          │
│                                                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │                   API Routes                       │  │
│  │  POST /api/payment-links  ──► NeXFlowX API        │  │
│  │  POST /api/webhook/nexflowx ◄── NeXFlowX Webhook  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Fluxo de Pagamento (Desenvolvimento Personalizado)

```
Usuário clica "Desenvolvimento Personalizado -7 dias"
    │
    ▼
Modal DevFormModal abre (solução setorial pré-selecionada)
    │
    ▼
Preenche formulário (Nome, Detalhes, Data Reunião, Contacto)
    │
    ▼
Seleciona moeda (EUR / BRL / USDT TRC20)
    │
    ▼
POST /api/payment-links ──────────► NeXFlowX API
    │  Payload:                          │
    │  { amount, currency,               │
    │    store_id, description,          │
    │    metadata: { project_name,       │
    │    details, meeting_date,          │
    │    contact, solution_id,           │
    │    solution_name } }               │
    │                                    │
    ◄── { url, shareable_url } ─────────┘
    │
    ▼
Checkout NeXFlowX abre em iframe embutido
    │
    ▼
Usuário conclui pagamento no checkout
    │
    ▼
NeXFlowX envia webhook:
POST /api/webhook/nexflowx (HMAC-SHA256)
    │  Evento: payment.gateway_confirmed
    │  Payload: transaction_id, amount,
    │    currency, customer_details, metadata...
    │
    ▼
postMessage from iframe → { status: 'success', txId }
    │
    ▼
Tela de sucesso exibida no modal
```

---

## Estrutura de Diretórios

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, meta, structured data)
│   ├── page.tsx                # Single-page app (todas as secções)
│   ├── globals.css             # Cyberpunk theme + animações CSS
│   └── api/
│       ├── payment-links/
│       │   └── route.ts        # Proxy para NeXFlowX /api/v1/payment-links
│       └── webhook/
│           └── nexflowx/
│               └── route.ts    # Recebe webhooks de pagamento NeXFlowX
├── components/
│   ├── nex/
│   │   ├── ai-chat.tsx         # Chat flutuante com IA
│   │   ├── dev-form-modal.tsx  # Modal de desenvolvimento personalizado + checkout
│   │   ├── digital-vault.tsx   # Secção Digital Vault
│   │   ├── enterprise-solutions.tsx  # 18 pacotes setoriais 360°
│   │   ├── featured-product.tsx # The Automation Library
│   │   ├── footer.tsx          # Footer com info legal + pagamentos
│   │   ├── glitch-text.tsx     # Componentes de animação (GlitchText, SectionReveal)
│   │   ├── hero.tsx            # Hero section com terminal typing
│   │   ├── legal-modals.tsx    # Modais de Terms, Privacy, Refund, Shipping
│   │   ├── matrix-bg.tsx       # Canvas animado Matrix rain
│   │   ├── navbar.tsx          # Navegação fixa + language switcher
│   │   ├── payment-icons.tsx   # SVG icons (Visa, MC, PayPal, MBWay, etc.)
│   │   └── services.tsx        # Secção de serviços (Cloud, AI, Software)
│   └── ui/                     # shadcn/ui components
├── hooks/
│   └── use-language.ts         # Zustand store para i18n
└── lib/
    ├── db.ts                   # Prisma client instance
    ├── i18n.ts                 # Translations (PT, EN, ES, FR)
    └── utils.ts                # Utility functions (cn)
```

---

## Componentes

### Componentes Principais (nex/*)

| Componente | Tipo | Descrição |
|---|---|---|
| `Navbar` | Client | Navegação fixa com scroll effect, links smooth, language switcher (PT/EN/ES/FR) |
| `Hero` | Client | Hero section com terminal typing effect, stats, CTAs |
| `Services` | Client | 3 cards de serviço (Cloud & DevOps, AI Engineering, Software à Medida) |
| `FeaturedProduct` | Client | The Automation Library (4.300+ templates, €5.00) |
| `DigitalVault` | Client | 3 ativos digitais (n8n Templates, API Blueprints, Docker Presets) |
| `EnterpriseSolutions` | Client | Grid de 18 pacotes setoriais com botão de dev personalizado |
| `DevFormModal` | Client | Modal completo: formulário + checkout NeXFlowX + iframe |
| `Support` | Client | 4 canais de contacto (WhatsApp, Telegram, Email, Voz) |
| `Footer` | Client | Info legal, links rápidos, pagamentos aceites |
| `AIChat` | Client | Chat flutuante com terminal theme |
| `LegalModals` | Client | 4 modais legais (Terms, Privacy, Refund, Shipping) |
| `MatrixBackground` | Client | Canvas animado com Matrix rain (performance optimized) |
| `GlitchText` | Client | Exporta `GlitchText` e `SectionReveal` para animações |
| `PaymentIcons` | Client | SVG inline icons para métodos de pagamento |

---

## Sistema de Internacionalização (i18n)

Implementado com **Zustand** (state management) + **localStorage** para persistência.

### Idiomas Suportados

| Código | Idioma |
|---|---|
| `pt` | Português |
| `en` | English |
| `es` | Español |
| `fr` | Français |

### Como Funciona

1. `use-language.ts` — Store Zustand com `locale`, `setLocale`, `t()`
2. `i18n.ts` — Objeto `translations` com 4 localizações completas
3. Auto-detecção: `localStorage → navigator.language → 'en' (fallback)`
4. Cada componente acede traduções via `const { t } = useLanguage(); const tr = t();`

### Secções com Traduções

`nav`, `hero`, `services`, `vault`, `support`, `footer`, `enterprise`, `product`, `chat`, `legal` (terms, privacy, refund, shipping), `devForm`

---

## Integração NeXFlowX — Pagamentos

### Desenvolvimento Personalizado -7 dias

Cada um dos 18 Pacotes Setoriais 360° possui um botão **"Desenvolvimento Personalizado -7 dias"** que abre um modal com:

1. **Informação**: Explica que em menos de 7 dias se implementa a solução personalizada sem custos adicionais.
2. **Preços Fixos**:
   - **EUR**: €400
   - **BRL**: R$2.500
   - **USDT TRC20**: 400 USDT
3. **Formulário**:
   - Nome do Projeto
   - Explicações do Projeto
   - Data sugerida para 1ª reunião de estudo
   - Contacto Preferencial
4. **3 Botões de Pagamento**: Cada botão submete o formulário + moeda para o endpoint interno.

### API: Criação de Payment Links

**Endpoint:** `POST /api/payment-links`

Este endpoint atua como proxy entre o frontend e a API da NeXFlowX.

#### Request Body

```json
{
  "amount": 400,
  "currency": "EUR",
  "store_id": "NeX-Store",
  "description": "Implementação Solução Personalizada (7 dias) - Clini360 - Projeto XYZ",
  "metadata": {
    "project_name": "Projeto XYZ",
    "details": "Automação de agendamentos e WhatsApp...",
    "meeting_date": "2025-02-15",
    "contact": "+351 912 345 678",
    "solution_id": "clini360",
    "solution_name": "Clini360"
  }
}
```

#### Mapeamento de Moedas

| Botão Frontend | `currency` no Request | `currency` Enviado à NeXFlowX |
|---|---|---|
| EURO | `EUR` | `EUR` |
| BRL | `BRL` | `BRL` |
| USDT TRC20 | `USDT` | `USDT_TRC20` |

#### Response (Sucesso)

```json
{
  "url": "https://checkout.nexflowx.tech/slug",
  "shareable_url": "https://checkout.nexflowx.tech/slug",
  "payment_link_id": "cmnabc...link99"
}
```

#### Response (Erro)

```json
{
  "error": "Erro ao criar link de pagamento na NeXFlowX"
}
```

#### Fluxo Interno

```
Frontend ──POST /api/payment-links──► Next.js API Route
                                         │
                                         ├── Valida campos obrigatórios
                                         ├── Mapeia moeda (USDT → USDT_TRC20)
                                         ├── Adiciona webhook_url
                                         │
                                         ▼
                                  POST https://api-core.nexflowx.tech/api/v1/payment-links
                                         │
                                         │  Headers:
                                         │    Content-Type: application/json
                                         │    Authorization: Bearer {NEXFLOWX_API_KEY}
                                         │
                                         │  Body:
                                         │    { amount, currency, store_id,
                                         │      description, webhook_url, metadata }
                                         │
                                         ◄── { url, shareable_url, id }
                                         │
                                         ▼
                                  Retorna URL ao frontend
```

### Webhook: Confirmação de Pagamentos

**Endpoint:** `POST /api/webhook/nexflowx`

Recebe notificações de pagamento confirmado da NeXFlowX. Valida a assinatura HMAC-SHA256 e processa o evento.

#### Validação de Segurança (Obrigatória)

1. Lê o header `x-nexflowx-signature`
2. Calcula HMAC-SHA256 do corpo bruto (raw body) com `NEXFLOWX_WEBHOOK_SECRET`
3. Compara com `crypto.timingSafeEqual()` (constant-time comparison)

#### Evento Recebido

| Campo | Valor |
|---|---|
| `event` | `payment.gateway_confirmed` |
| Método | `POST` |
| Content-Type | `application/json` |

#### Webhook Payload (Exemplo)

```json
{
  "event": "payment.gateway_confirmed",
  "transaction_id": "cmnfrzh...tx123",
  "store_id": "cmnabc...store99",
  "amount": "400.00",
  "net_amount": "396.50",
  "method": "card",
  "currency": "EUR",
  "country": "PT",
  "customer_email": "cliente@email.com",
  "logistics_status": "processing",
  "customer_details": {
    "project_name": "Projeto XYZ",
    "details": "Automação de agendamentos...",
    "meeting_date": "2025-02-15",
    "contact": "+351 912 345 678"
  }
}
```

#### Endpoint de Verificação

`GET /api/webhook/nexflowx` — Retorna status do endpoint (ativo/inativo, secret configurado).

### Iframe de Checkout Embutido

O checkout NeXFlowX é integrado via `<iframe>` para uma experiência nativa dentro do site.

```html
<iframe
  src="{shareable_url}"
  style="width: 100%; height: 600px; border: none; border-radius: 12px;"
  allow="payment"
/>
```

#### Evento de Sucesso (postMessage)

O iframe envia mensagens via `window.postMessage` quando o pagamento é concluído:

| Campo | Descrição |
|---|---|
| `event.data.status` | `"success"` quando pagamento confirmado |
| `event.data.txId` | ID da transação confirmada |
| `event.origin` | Validado contra `https://checkout.nexflowx.tech` |

```javascript
window.addEventListener('message', function(event) {
  if (event.origin !== 'https://checkout.nexflowx.tech') return;
  if (event.data.status === 'success') {
    // Pagamento confirmado — exibir tela de sucesso
    console.log('Transaction ID:', event.data.txId);
  }
});
```

---

## Variáveis de Ambiente

| Variável | Obrigatória | Default | Descrição |
|---|---|---|---|
| `NEXFLOWX_API_BASE` | Sim | `https://api-core.nexflowx.tech` | URL base da API NeXFlowX |
| `NEXFLOWX_API_KEY` | Sim | — | Chave de API para autenticação Bearer |
| `NEXFLOWX_STORE_ID` | Sim | `NeX-Store` | ID da loja na NeXFlowX |
| `NEXFLOWX_WEBHOOK_SECRET` | Sim | — | Secret para validação HMAC-SHA256 dos webhooks |
| `NEXFLOWX_WEBHOOK_URL` | Sim | `https://www.nex-systems.xyz/api/webhook/nexflowx` | URL do webhook (configurada na tabela Store NeXFlowX) |
| `DATABASE_URL` | Sim | `file:./db/custom.db` | URL da base de dados SQLite (Prisma) |

### Configuração do Webhook na NeXFlowX

O campo `webhook_url` deve ser configurado na tabela **Store** da base de dados NeXFlowX para a loja `NeX-Store`:

```
webhook_url = https://www.nex-systems.xyz/api/webhook/nexflowx
```

O `NEXFLOWX_WEBHOOK_SECRET` deve ser obtido na aba "Gerir Chaves & Webhooks" do painel NeXFlowX.

---

## Instalação e Desenvolvimento

### Pré-requisitos

- **Bun** (runtime + package manager)
- **Node.js** 18+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/NeX-Systems-Hub/NeX-Systems-WebSite.git
cd NeX-Systems-WebSite

# Instalar dependências
bun install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com as variáveis necessárias

# Iniciar base de dados
bun run db:push

# Iniciar servidor de desenvolvimento
bun run dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `bun run dev` | Servidor de desenvolvimento (porta 3000) |
| `bun run build` | Build de produção (standalone) |
| `bun run start` | Servidor de produção |
| `bun run lint` | ESLint check |
| `bun run db:push` | Push do schema Prisma para a BD |
| `bun run db:generate` | Gerar Prisma Client |
| `bun run db:migrate` | Run migrations |

---

## Segurança

| Medida | Implementação |
|---|---|
| **Validação HMAC-SHA256** | Webhooks validados com `crypto.timingSafeEqual()` |
| **Constant-Time Comparison** | Previne timing attacks na validação de assinaturas |
| **CORS** | Configurado via Next.js middleware |
| **Input Validation** | Validação de campos obrigatórios no API route |
| **Rate Limiting** | Recomendado configurar via proxy/reverso (Caddy/Nginx) |
| **Env Vars** | Chaves sensíveis exclusivamente em variáveis de ambiente |
| **SSL/TLS** | Forçado via `https://www.nex-systems.xyz` |

---

## SEO e Meta Dados

### OpenGraph / Twitter Cards

- Title: "Nex-Systems \| Architecting the Future of Automation"
- URL: `https://nex-systems.xyz`
- Imagem: `/logo.svg`

### Schema.org (Structured Data)

Dois schemas JSON-LD implementados:

1. **Organization** — Nome, contacto, NIF, endereços, ofertas
2. **ProfessionalService** — Serviços, horários, área de cobertura

### Meta Tags

- Keywords: 20+ keywords otimizados (Cloud DevOps, n8n, IA, etc.)
- Geo: PT-18, Viseu, Portugal (40.6610, -7.9097)
- robots: index, follow, max-image-preview:large
- Theme color: #050505 (dark)

---

## Licença e Contacto

- **Empresa:** Nex-Systems
- **Titular:** Sara Talia de Carvalho Campelo
- **NIF:** 312668201
- **CAE:** 47910 / CIRS: 1320
- **Sede Fiscal:** Rua 31 de Janeiro Lote 9 Nº 3 2 Esq, 3500-217 Viseu, Portugal
- **Escritórios:** Rua de São Nuno 92, 2560-195 São Pedro da Cadeira, Torres Vedras, Portugal

| Canal | Contacto |
|---|---|
| Email | contact@nex-systems.xyz |
| WhatsApp | +351 930 598 827 |
| Telegram | +351 930 598 827 |
| Website | [nex-systems.xyz](https://www.nex-systems.xyz) |
| GitHub | [NeX-Systems-Hub](https://github.com/NeX-Systems-Hub) |

---

*Desenvolvido com Next.js 16, Tailwind CSS 4, Framer Motion e NeXFlowX.*
