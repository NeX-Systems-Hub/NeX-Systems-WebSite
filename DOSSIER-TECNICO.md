# ═══════════════════════════════════════════════════════════════════
#  DOSSIER TÉCNICO COMPLETO — NeX-Systems Website
#  Guia de Duplicação Exata do Projeto
# ═══════════════════════════════════════════════════════════════════

> Este documento captura **cada detalhe** do ambiente visual, code design, cores, animações,
> arquitetura e configurações do projeto NeX-Systems. Use como prompt para duplicar
> o projeto em qualquer outro ambiente.

---

## 1. TECNOLOGIA BASE

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | ^16.1.1 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| UI Library | shadcn/ui (New York style) | latest |
| Animations | Framer Motion | ^12.23.2 |
| Icons | Lucide React | ^0.525.0 |
| State | Zustand | ^5.0.6 |
| Server State | TanStack Query | ^5.82.0 |
| Database ORM | Prisma (SQLite) | ^6.11.1 |
| Runtime | Bun | latest |
| Output | Standalone | — |

### shadcn/ui Config (`components.json`)
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### next.config.ts
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

---

## 2. SISTEMA DE CORES — CYBERPUNK THEME

### 2.1 Paleta Principal (CSS Custom Properties)

```
── Fundo ─────────────────────────────────────────
nex-dark:         #050505   ← Background principal (quase preto)
nex-dark-card:    #0a0a0a   ← Background de cards
nex-surface:      #111118   ← Superfícies elevadas, inputs, terminal header
nex-dark-border:  #1a1a2e   ← Bordas padrão (azul escuro profundo)

── Cores Cibernéticas ────────────────────────────
nex-matrix:       #00ff41   ← VERDE MATRIX (cor primária, CTA, acentos)
nex-cyber:        #00d4ff   ← CIANO CYBER (accento secundário, hover, info)
nex-glitch:       #ff003c   ← VERMELHO GLITCH (destructivo, erros, alertas)

── Texto ────────────────────────────────────────
foreground:       #e0e0e8   ← Texto principal (branco com leve tom azulado)
nex-muted:        #8b8b9e   ← Texto secundário/muted

── shadcn Tokens ────────────────────────────────
primary:          #00ff41   ← nex-matrix
primary-foreground: #050505
secondary:        #111118   ← nex-surface
accent:           #00d4ff   ← nex-cyber
destructive:      #ff003c   ← nex-glitch
border:           #1a1a2e   ← nex-dark-border
ring:             #00ff41   ← nex-matrix
```

### 2.2 Regras de Uso das Cores

| Contexto | Cor | Uso |
|----------|-----|-----|
| Botões CTA primários | `bg-nex-matrix text-nex-dark` | Fundo verde, texto preto |
| Botões secundários | `border-nex-cyber/50 text-nex-cyber` | Borda e texto ciano |
| Tags/Labels | `text-{color}/70 border-{color}/15` | Opacidade reduzida |
| Cards hover border | `hover:border-{color}/40` | 40% opacidade na hover |
| Títulos seção | `text-foreground` (branco) | Orbitron bold |
| Labels | `text-nex-muted font-mono text-xs uppercase tracking-[0.2em]` | Mono, uppercase |
| Preço/Stats | `text-nex-matrix font-bold font-mono` | Verde mono bold |
| Erro | `border-nex-glitch/30 bg-nex-glitch/5 text-nex-glitch` | Vermelho suave |
| Sucesso | `text-nex-matrix` ou `bg-nex-matrix/10` | Verde |

### 2.3 Efeitos de Glow (Box Shadow)

```css
/* Botão CTA hover */
hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]

/* Card hover suave */
hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]

/* Input focus */
focus:shadow-[0_0_10px_rgba(0,255,65,0.1)]

/* Texto com glow */
.text-glow-matrix { text-shadow: 0 0 7px #00ff41, 0 0 10px #00ff41, 0 0 21px #00ff41; }
.text-glow-cyber  { text-shadow: 0 0 7px #00d4ff, 0 0 10px #00d4ff, 0 0 21px #00d4ff; }
.text-glow-glitch { text-shadow: 0 0 7px #ff003c, 0 0 10px #ff003c, 0 0 21px #ff003c; }

/* Bordas com glow */
.border-glow-matrix { box-shadow: 0 0 5px rgba(0,255,65,0.2), inset 0 0 5px rgba(0,255,65,0.1); }
.border-glow-cyber  { box-shadow: 0 0 5px rgba(0,212,255,0.2), inset 0 0 5px rgba(0,212,255,0.1); }
```

---

## 3. TIPOGRAFIA

### 3.1 Fontes (Google Fonts via next/font)

| Variável CSS | Fonte | Uso |
|-------------|-------|-----|
| `--font-inter` | Inter | Texto corrido (body, parágrafos) |
| `--font-jetbrains-mono` | JetBrains Mono | Código, terminal, labels, inputs |
| `--font-orbitron` | Orbitron | Títulos, branding, preços (weights 400-900) |

### 3.2 Hierarquia Tipográfica

| Elemento | Fonte | Size | Weight | Style |
|----------|-------|------|--------|-------|
| H1 Hero | Orbitron | `text-4xl sm:text-5xl xl:text-6xl` | bold | line-tight |
| H2 Secção | Orbitron | `text-3xl sm:text-4xl lg:text-5xl` | bold | — |
| H3 Card Title | Orbitron | `text-base sm:text-lg lg:text-xl` | bold | — |
| Preço grande | Orbitron | `text-5xl sm:text-6xl` | black (900) | — |
| Labels | JetBrains Mono | `text-[10px] sm:text-xs` | normal | UPPERCASE tracking-[0.2em] |
| Body text | JetBrains Mono | `text-xs sm:text-sm` | normal | — |
| Descrição card | JetBrains Mono | `text-[11px] sm:text-sm` | normal | leading-relaxed |
| Botões | JetBrains Mono | `text-xs sm:text-sm` | bold | UPPERCASE tracking-wider |
| Stats/Números | JetBrains Mono | `text-base sm:text-lg lg:text-xl` | bold | mono |

### 3.3 Convention: Font Classes

```jsx
// Título de secção
className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-orbitron)] font-bold"

// Label/categoria
className="text-[10px] sm:text-xs font-mono text-nex-matrix uppercase tracking-[0.2em]"

// Código/terminal
className="font-mono text-xs sm:text-sm"

// Botão
className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold"
```

---

## 4. ANIMAÇÕES

### 4.1 Framer Motion — Padrões Consistentes

```jsx
// ═══ ENTRADA DE SEÇÃO (SectionReveal) ═══
// Usado em TODOS os componentes de seção via wrapper <SectionReveal>
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}  // quando isVisible = true
transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
// IntersectionObserver: threshold: 0.1, rootMargin: '0px 0px -50px 0px'

// ═══ NAVBAR ═══
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.5, ease: 'easeOut' }}

// ═══ CARDS HOVER ═══
whileHover={{ y: -4 }}                    // cards normais
whileHover={{ y: -3, scale: 1.01 }}      // enterprise cards
whileHover={{ y: -4, scale: 1.01 }}      // vault cards

// ═══ MODAL ENTRADA ═══
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 40 }}
transition={{ duration: 0.3 }}

// ═══ AI CHAT BUTTON ═══
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// ═══ STATUS BADGE (Hero) ═══
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.2 }}

// ═══ STAGGER DELAY EM GRIDS ═══
delay={idx * 0.15}   // serviços (3 cards)
delay={idx * 0.03}   // enterprise (18 cards, max 0.3)
delay={idx * 0.1}    // suporte (4 cards)
```

### 4.2 CSS Keyframes

```css
/* GLITCH — texto com efeito de interferência */
@keyframes glitch {
  0%   { transform: translate(0); }
  20%  { transform: translate(-2px, 2px); }
  40%  { transform: translate(-2px, -2px); }
  60%  { transform: translate(2px, 2px); }
  80%  { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
/* Aplicação: .glitch-text com ::before (#ff003c) e ::after (#00d4ff) */
/* clip-path: before = top 35%, after = bottom 35% */
/* Duração: 0.3s, easing: cubic-bezier(0.25, 0.46, 0.45, 0.94), infinite */

/* GLITCH-SKEW — rotação sutil contínua */
@keyframes glitch-skew {
  0%   { transform: skew(0deg); }
  20%  { transform: skew(-1deg); }
  40%  { transform: skew(0.5deg); }
  60%  { transform: skew(-0.5deg); }
  80%  { transform: skew(0.5deg); }
  100% { transform: skew(0deg); }
}
/* Aplicação: 4s infinite linear alternate-reverse */

/* FLICKER — efeito de flickering de terminal */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  42% { opacity: 0.8; }
  43% { opacity: 1; }
  45% { opacity: 0.3; }
  46% { opacity: 1; }
  55% { opacity: 0.6; }
  56% { opacity: 1; }
}

/* SCAN-LINE — linha de scan horizontal */
@keyframes scan-line {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
/* Aplicação: .scan-line-overlay::after, 8s linear infinite, z-index: 9999 */
/* height: 4px, background: rgba(0,255,65,0.05), pointer-events: none */

/* BLINK-CARET — cursor de terminal */
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50%      { border-color: #00ff41; }
}
/* Aplicação: .terminal-cursor, 1s step-end infinite */

/* PULSE-GLOW — box-shadow pulsante verde */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px #00ff41, 0 0 10px rgba(0,255,65,0.3); }
  50%      { box-shadow: 0 0 15px #00ff41, 0 0 30px rgba(0,255,65,0.5); }
}

/* FLOAT — flutuação suave vertical */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
/* Aplicação: 3s ease-in-out infinite (scroll indicator no Hero) */

/* MATRIX-FADE — entrada com fade + slide up */
@keyframes matrix-fade {
  0%   { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

### 4.3 CSS Utility Classes

```css
.card-cyber {
  background: linear-gradient(135deg, rgba(10,10,10,0.9), rgba(17,17,24,0.9));
  border: 1px solid rgba(26,26,46,0.8);
  backdrop-filter: blur(10px);
}
.card-cyber:hover {
  border-color: rgba(0,255,65,0.4);
  box-shadow: 0 0 20px rgba(0,255,65,0.1), 0 0 40px rgba(0,255,65,0.05);
  transform: translateY(-2px);
}

.gradient-border::before {
  /* Borda gradiente verde→ciano via mask-composite */
  background: linear-gradient(135deg, #00ff41, #00d4ff);
}

.terminal-cursor { width: 10px; height: 1.2em; background: #00ff41; animation: blink-caret 1s step-end infinite; }
.scan-line-overlay::after { height: 4px; background: rgba(0,255,65,0.05); animation: scan-line 8s linear infinite; }
.terminal-bg { background: radial-gradient(ellipse at top, rgba(0,255,65,0.03) 0%, transparent 50%); }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
::selection { background: rgba(0,255,65,0.3); color: #fff; }
```

---

## 5. MATRIX BACKGROUND (Canvas)

```
Tipo: HTML5 Canvas full-screen (fixed, inset-0, pointer-events-none, z-0)
Opacidade: 0.15
Font: JetBrains Mono, monospace
Chars: katakana (アイウエオ...) + 0-9 + A-F + <>/{}[];:#
fontSize: 14px
maxSpeed: 0.5
Fade: rgba(5, 5, 5, 0.05)
Brilho: rand() > 0.95 → branco #fff, > 0.7 → verde #00ff41, else → verde 40% opacity
Reset: y > height && rand() > 0.975 → drop[i] = 0
Init: drops randomizados entre 0 e canvas.height (visual imediato)
```

---

## 6. ARQUITETURA DE COMPONENTES

### 6.1 Estrutura de Pastas

```
src/
├── app/
│   ├── globals.css          ← CSS theme completo (Tailwind v4)
│   ├── layout.tsx           ← Root layout (fonts, metadata, structured data, scan-line-overlay)
│   ├── page.tsx             ← Single-page app (todas as seções)
│   └── api/
│       ├── payment-links/route.ts   ← Proxy NeXFlowX payment API
│       └── webhook/nexflowx/route.ts ← HMAC-SHA256 webhook handler
├── components/
│   ├── nex/                 ← Componentes custom do NeX-Systems
│   │   ├── navbar.tsx       ← Navegação + seletor de idiomas
│   │   ├── hero.tsx         ← Hero section com terminal typing
│   │   ├── services.tsx     ← 3 cards de serviços
│   │   ├── featured-product.tsx  ← Produto (Automation Library €5)
│   │   ├── digital-vault.tsx    ← Vault digital (3 items)
│   │   ├── enterprise-solutions.tsx ← 18 sector packages + botão CONTRATAR AGORA
│   │   ├── dev-form-modal.tsx    ← Modal de checkout (3-step wizard)
│   │   ├── support.tsx      ← 4 canais de contacto
│   │   ├── ai-chat.tsx      ← Chat flutuante (bottom-right)
│   │   ├── footer.tsx       ← Footer com links, legal, pagamentos
│   │   ├── legal-modals.tsx ← Modais de páginas legais
│   │   ├── matrix-bg.tsx    ← Canvas Matrix background
│   │   ├── glitch-text.tsx  ← SectionReveal + GlitchText
│   │   └── payment-icons.tsx ← SVGs de métodos de pagamento
│   └── ui/                  ← shadcn/ui components
├── hooks/
│   └── use-language.ts     ← Zustand store + hook de idioma
└── lib/
    ├── i18n.ts            ← Traduções (PT, EN, ES, FR)
    └── utils.ts           ← cn() helper (clsx + tailwind-merge)
```

### 6.2 Fluxo do Page.tsx

```
<div min-h-screen flex flex-col bg-nex-dark relative>
  <MatrixBackground />     ← Canvas z-0
  <Navbar />                ← Fixed z-50
  <main z-10 flex-1>
    <Hero />                ← id="home"
    <Services />            ← id="services"
    <FeaturedProduct />     ← id="product"
    <DigitalVault />        ← id="vault"
    <EnterpriseSolutions /> ← id="enterprise"
    <Support />             ← id="support"
  </main>
  <Footer />                ← Sticky bottom, mt-auto
  <AIChat />                ← Floating z-50
  <LegalModals />           ← z-100
  <DevFormModal />          ← z-100
</div>
```

---

## 7. PADRÕES DE DESIGN REPETIDOS

### 7.1 Section Label (acima de cada título)
```jsx
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
  border border-nex-matrix/30 bg-nex-matrix/5">
  <Icon className="w-3 h-3 text-nex-matrix" />
  <span className="text-[10px] sm:text-xs font-mono text-nex-matrix 
    uppercase tracking-wider font-bold">
    LABEL TEXT
  </span>
</span>
```

### 7.2 Section Heading
```jsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 
  font-[family-name:var(--font-orbitron)] font-bold text-foreground mb-3 sm:mb-4">
  {title}
</h2>
<p className="text-nex-muted font-mono text-xs sm:text-sm max-w-2xl mx-auto">
  {subtitle}
</p>
```

### 7.3 Card Padrão
```jsx
<motion.div
  whileHover={{ y: -4 }}
  className="group relative h-full rounded-lg sm:rounded-xl 
    border border-nex-dark-border hover:border-nex-{color}/40 
    bg-nex-dark-card overflow-hidden transition-all duration-300"
>
  {/* Top accent line */}
  <div className="absolute top-0 left-0 right-0 h-px 
    bg-gradient-to-r from-transparent via-{color}/50 to-transparent z-10" />
  
  {/* Content com p-4 sm:p-6 */}
</motion.div>
```

### 7.4 Botão CTA Primário (Verde)
```jsx
<button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-nex-matrix text-nex-dark 
  font-bold font-mono text-xs sm:text-sm uppercase tracking-wider rounded 
  hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all">
  TEXT
</button>
```

### 7.5 Botão Secundário (Ciano outline)
```jsx
<button className="px-4 sm:px-6 py-2.5 sm:py-3 border border-nex-cyber/50 
  text-nex-cyber font-mono text-xs sm:text-sm uppercase tracking-wider rounded 
  hover:bg-nex-cyber/10 hover:border-nex-cyber transition-all">
  TEXT
</button>
```

### 7.6 Tag/Pill
```jsx
<span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono 
  text-{color}/70 border border-{color}/15 rounded-full">
  TAG
</span>
```

### 7.7 Input Field
```jsx
<input className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-nex-dark 
  border border-nex-dark-border rounded-lg font-mono text-xs sm:text-sm 
  text-foreground placeholder:text-nex-muted/40 
  focus:outline-none focus:border-nex-matrix/50 
  focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all" />
```

---

## 8. SISTEMA i18n (4 IDIOMAS)

### Store (Zustand)
- Locale salvo em `localStorage('nex-locale')`
- Detecção automática do browser language → PT, EN, ES, FR
- Fallback: EN

### Seletor Desktop (Navbar)
- Dropdown com `Globe` icon + flag emoji + nome completo
- Checkmark no idioma ativo
- Fechamento por outside click
- Animação: scale 0.95→1, opacity fade

### Seletor Mobile (Navbar drawer)
- Grid 2×2 com flag + nome
- Borda verde + background verde 10% no ativo

### Traduções disponíveis
| Key | PT | EN | ES | FR |
|-----|----|----|----|-----|
| nav | Início, Serviços, Produto, Enterprise, Suporte | Home, Services, Product, Enterprise, Support | Inicio, Servicios, Producto, Empresa, Soporte | (mesmo padrão) |
| hero | Headline + 4 terminal lines | Same structure | Same | Same |
| services | cloud/ai/software com 6 features cada | Same structure | Same | Same |
| enterprise | 18 items com labels locais | Same structure | Same | Same |
| devForm | btnLabel, labels, placeholders, mensagens | Same structure | Same | Same |
| legal | terms, privacy, refund, shipping (conteúdo completo) | Same structure | Same | Same |
| footer | companyName, tagline, legal, links | Same structure | Same | Same |
| chat | title, placeholder, welcome, send | Same structure | Same | Same |
| product | descriptions, features, CTAs | Same structure | Same | Same |
| vault | 3 items com descriptions/tags | Same structure | Same | Same |

---

## 9. INTEGRAÇÃO NeXFlowX (Pagamentos)

### 9.1 Variáveis de Ambiente
```
NEXFLOWX_API_BASE=https://api-core.nexflowx.tech
NEXFLOWX_API_KEY=<token>
NEXFLOWX_STORE_ID=NeX-Store
NEXFLOWX_WEBHOOK_SECRET=<secret>
NEXFLOWX_WEBHOOK_URL=https://www.nex-systems.xyz/api/webhook/nexflowx
```

### 9.2 Fluxo de Checkout (3-step wizard)

```
STEP 1: FORM ────────────────────────────
- Nome do Projeto (text input)
- Explicações (textarea)
- Data reunião (date input, min = amanhã)
- Contacto (text input)
→ Botão "Avançar para Pagamento" (verde, full-width)

STEP 2: PAYMENT ────────────────────────
- Resumo do projeto (card compacto)
- 3 moedas em botões full-width verticais:
    €400 EUR  |  R$2.500 BRL  |  400 USDT TRC20
- Cada botão: ícone + label + preço à direita
- Info badge de segurança
→ Clica → POST /api/payment-links → recebe shareable_url

STEP 3: CHECKOUT ───────────────────────
- Iframe (600px height) com URL do NeXFlowX
- Botões "Voltar" e "Abrir em nova janela"
- PostMessage listener: origin=checkout.nexflowx.tech, status=success
→ Sucesso → STEP 4

STEP 4: SUCCESS ────────────────────────
- CheckCircle2 animado (spring animation)
- Mensagem de confirmação
- TX ID
- Botão "Fechar"
```

### 9.3 API Payload
```json
POST /api/v1/payment-links
{
  "amount": 400,
  "currency": "EUR",          // EUR | BRL | USDT_TRC20
  "store_id": "NeX-Store",
  "description": "Implementação Solução - {solutionName} - {projectName}",
  "webhook_url": "https://www.nex-systems.xyz/api/webhook/nexflowx",
  "metadata": {
    "project_name": "...",
    "details": "...",
    "meeting_date": "2025-01-15",
    "contact": "...",
    "solution_id": "clini360",
    "solution_name": "Clini360"
  }
}
```

### 9.4 Webhook Validation
- Header: `x-nexflowx-signature` (hex HMAC-SHA256)
- Compara com `crypto.timingSafeEqual` (timing-safe)
- Evento processado: `payment.gateway_confirmed`
- Sempre retorna 200

---

## 10. COMPONENTE AI CHAT

- Posição: fixed bottom-right
- Botão: `w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-nex-matrix`
- Glow: `shadow-[0_0_20px_rgba(0,255,65,0.3)]`
- Ícone: MessageSquare → X (rotação 90° AnimatePresence)
- Janela: `w-[calc(100vw-1.5rem)] sm:w-96 h-[60vh]`
- Header: Terminal icon + "NeX IA Terminal" + "Online" (verde pulsante)
- Messages: user = bg-nex-matrix/10 border-nex-matrix/20, assistant = bg-nex-surface border-nex-dark-border
- Assistant prefix: `>` em ciano
- Input: `> ` prefix verde, send button verde
- Loading: `. . .` com pulse animation

---

## 11. FOOTER

- Background: `border-t border-nex-dark-border bg-nex-dark-card/50`
- Grid decoration: `bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,...)] bg-[size:40px_40px]`
- 4 colunas: Brand | Company Info | Links+Legal | Contact
- Payment methods: Mastercard, Visa, Amex, PayPal, Apple Pay, Google Pay, Multibanco, MB WAY, Bitcoin
- Bottom bar: copyright + NIF/CAE

---

## 12. FAVICON (logo.svg)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="12" fill="#050505"/>
  <rect x="1" y="1" width="62" height="62" rx="11" stroke="#1a1a2e" stroke-width="1"/>
  <text x="50%" y="54%" dominant-baseline="central" text-anchor="middle"
    font-family="system-ui" font-weight="800" font-size="26" letter-spacing="-1">
    <tspan fill="#00ff41">N</tspan><tspan fill="#e0e0e8">S</tspan>
  </text>
  <rect x="8" y="52" width="48" height="2" rx="1" fill="#00ff41" opacity="0.4"/>
</svg>
```

---

## 13. CUSTOM SCROLLBAR

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #050505; }
::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #00ff41; }
```

---

## 14. SEO & METADATA

- `theme-color: #050505`
- `color-scheme: dark`
- `html` classe: `dark`
- Structured Data: Organization + ProfessionalService (JSON-LD)
- OpenGraph + Twitter Cards
- Alternates: pt-PT, en-US, es-ES, fr-FR
- Robots: index, follow (all bots)

---

## 15. PACOTES SETORIAIS (18 CARDS)

```
clini360, farma360, estetica360, fit360, imob360, construi360,
ecom360, retail360, creator360, edu360, dev360, rh360, fin360,
manut360, limpeza360, turismo360, ware360, log360
```
- Imagens: `https://raw.githubusercontent.com/nextrustx-hub/NeXFlowX/main/public/images/{id}.jpg`
- 3 tags por card
- Cores rotativas: nex-matrix, nex-cyber, nex-glitch (sequência)
- Botão: "CONTRATAR AGORA" (bg-nex-matrix, text-nex-dark, Zap icon, ArrowRight)

---

## 16. RESPONSIVE BREAKPOINTS (Tailwind)

| Breakpoint | Largura | Uso |
|-----------|---------|-----|
| Default | < 640px | Mobile (1 col, texto menor) |
| sm | ≥ 640px | Tablet pequena |
| md | ≥ 768px | Tablet, mobile menu fecha |
| lg | ≥ 1024px | Desktop, 2-3 colunas |
| xl | ≥ 1280px | Desktop grande, textos maiores |

### Padrão de Sizes Consistente

```
text-[10px] sm:text-xs          ← labels micro
text-xs sm:text-sm              ← body text
text-sm sm:text-base            ← descrições
text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  ← headings
p-3 sm:p-4 lg:p-6              ← padding cards
gap-2 sm:gap-3 lg:gap-5        ← grid gaps
w-3 h-3 sm:w-3.5 sm:h-3.5      ← icons
w-5 h-5 sm:w-6 sm:h-6           ← icons médios
```

---

## 17. PROMPT DE DUPLICAÇÃO

Use o texto abaixo como prompt para reconstruir o projeto do zero:

---

### PROMPT:

> Cria um website Next.js 16 (App Router, TypeScript, Tailwind CSS v4, shadcn/ui New York style)
> com tema **cyberpunk escuro** para uma agência digital chamada "NeX-Systems".
>
> **CORES** (CSS custom properties):
> - Fundo: `#050505` (dark), cards `#0a0a0a`, surface `#111118`, borders `#1a1a2e`
> - Primária: `#00ff41` (Matrix Green), Accent: `#00d4ff` (Cyber Cyan), Destructive: `#ff003c` (Glitch Red)
> - Foreground: `#e0e0e8`, Muted: `#8b8b9e`
>
> **FONTES**: Inter (body), JetBrains Mono (terminal/labels), Orbitron (títulos/branding)
> - Orbitron weights: 400-900
> - Labels: mono, uppercase, tracking-[0.2em], 10-12px
>
> **BACKGROUND**: Canvas full-screen com efeito Matrix Rain (katakana + hex chars),
> opacity 0.15, fade rgba(5,5,5,0.05), chars variando entre branco/verde/verde-40%.
>
> **ANIMAÇÕES**: Framer Motion em tudo. SectionReveal (IntersectionObserver, 
> fade+slide-up 30px, 0.6s). Card hover y:-4. Modal fade+slide. Navbar slide-down.
> CSS: glitch (translate ±2px, 0.3s), scan-line (4px, 8s, z-9999), blink-caret,
> float (6px, 3s), pulse-glow.
>
> **COMPONENTES**: Navbar fixa com blur no scroll, Hero com terminal typing effect,
> 3 cards de serviço (Cloud/AI/Software), produto com preço €5, vault digital com 3 items,
> 18 cards de pacotes setoriais com imagens externas, chat IA flutuante, 
> footer com 4 colunas + métodos de pagamento (SVG inline).
>
> **i18n**: 4 idiomas (PT/EN/ES/FR) via Zustand + localStorage. Seletor dropdown desktop
> com flags + checkmark. Grid 2x2 no mobile.
>
> **CHECKOUT**: Modal 3-step (Form → Payment → Iframe). 3 moedas: €400 EUR, R$2500 BRL,
> 400 USDT TRC20. Integração NeXFlowX API (payment-links). Iframe embed. PostMessage.
>
> **SCROLLBAR**: Custom 6px, dark track, green thumb on hover.
>
> **SELEÇÃO**: bg rgba(0,255,65,0.3), texto branco.
>
> Single page app, dark mode only, standalone output, shadcn/ui components.

---

## 18. RESUMO VISUAL

```
┌─────────────────────────────────────────────┐
│  ████ NEX-SYSTEMS ██████████████████████████  │  ← Navbar fixa, blur
│  Home  Services  Product  Enterprise  Support  │     + Language dropdown
│                         [🌐 PT ▼]             │
├─────────────────────────────────────────────┤
│                                             │
│  ● Systems Online                           │  ← Hero
│  A ARQUITETAR O FUTURO                     │     Terminal typing
│  DA AUTOMAÇÃO                               │     Status badges
│                                             │
│  ┌─────────────────┬──────────────────┐     │
│  │ > Loading...     │ nex-systems@term  │     │
│  │ > Cloud... [OK]   │ % _              │     │
│  │ > AI... [OK]      │                  │     │
│  └─────────────────┴──────────────────┘     │
│                                             │
│          [Explore Services] [Contact Us]     │
│                                             │
│        99.9%    24/7    <2ms                │
│        Uptime  Support Response              │
│                  ↓                            │
├─────────────────────────────────────────────┤
│  // SERVICES                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │  Cloud   │ │    AI    │ │ Software │    │  ← 3 cards
│  │  &DevOps │ │Engineering│ │ à Medida │    │
│  │ ○ AWS    │ │ ○ LLM    │ │ ○ Web    │    │
│  │ ○ Docker │ │ ○ Agent  │ │ ○ n8n    │    │
│  └──────────┘ └──────────┘ └──────────┘    │
├─────────────────────────────────────────────┤
│  // PRODUCT                                │
│  ┌───────────────┬──────────────────┐     │
│  │ The Automation │  ┌────────────┐  │     │
│  │ Library       │  │  € 5.00    │  │     │  ← Pricing card
│  │ 4,300+ JSON   │  │  Lifetime  │  │     │
│  │ templates     │  │  Access    │  │     │
│  │               │  │ [BUY NOW] │  │     │
│  └───────────────┴──┴────────────┴──┘     │
├─────────────────────────────────────────────┤
│  // PACOTES SETORIAIS 360°                  │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │
│  │Clini│ │Farma│ │Estet│ │Fit  │        │  ← 18 cards
│  │360  │ │360  │ │360  │ │360  │        │     3x grid
│  │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│        │     [CONTRATAR AGORA]
│  │[CTA]│ │[CTA]│ │[CTA]│ │[CTA]│        │
│  └─────┘ └─────┘ └─────┘ └─────┘        │
├─────────────────────────────────────────────┤
│  // SUPPORT                                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│  │WhatsApp│ │Telegram│ │ Email │ │Phone│    │  ← 4 canais
│  └──────┘ └──────┘ └──────┘ └──────┘    │
├─────────────────────────────────────────────┤
│  NEX-SYSTEMS  │  Quick Links  │  Contact    │  ← Footer
│  tagline     │  Legal         │  +351...   │
│  ─────────────────────────────────────     │
│  💳💳💳💳💳🏦 crypto                    │  ← Payment icons
│  ─────────────────────────────────────     │
│  © 2025 NeX-Systems. All rights reserved.  │
└─────────────────────────────────────────────┘
                                    💬        │  ← AI Chat float
```

---

> **Versão**: 2.0 | **Última atualização**: Julho 2025
> **Repositório**: https://github.com/NeX-Systems-Hub/NeX-Systems-WebSite
