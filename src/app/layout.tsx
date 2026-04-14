import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

export const metadata: Metadata = {
  title: "Nex-Systems | Cloud Infrastructure, AI Engineering & n8n Automation",
  description: "Elite digital agency specializing in cloud infrastructure, AI engineering, DevOps automation, and high-performance digital assets. 4,300+ n8n automation templates. Freelance DevOps Portugal | n8n automation expert | IA consultancy Viseu/Torres Vedras.",
  keywords: [
    "Nex-Systems",
    "nex-systems.xyz",
    "Cloud Infrastructure",
    "DevOps",
    "AI Engineering",
    "n8n automation templates",
    "n8n workflows",
    "Freelance DevOps Portugal",
    "n8n automation expert",
    "IA consultancy Viseu",
    "IA consultancy Torres Vedras",
    "consultoria IA Portugal",
    "Docker",
    "AWS",
    "LLM Training",
    "Neural Agents",
    "Digital Assets",
    "Automation Library",
    "API Blueprints",
    "Docker Stack Presets",
    "Enterprise Automation",
    "NeXFlowX",
    "Sara Talia de Carvalho Campelo",
    "automação empresarial",
    "inteligência artificial",
    "Cloud DevOps Portugal",
    "desenvolvimento personalizado",
    "solução sob medida",
  ],
  authors: [{ name: "Sara Talia de Carvalho Campelo" }],
  creator: "Nex-Systems",
  publisher: "Nex-Systems",
  formatDetection: {
    email: true,
    telephone: true,
  },
  metadataBase: new URL("https://nex-systems.xyz"),
  alternates: {
    canonical: "https://nex-systems.xyz",
    languages: {
      "pt-PT": "https://nex-systems.xyz",
      "en-US": "https://nex-systems.xyz",
      "es-ES": "https://nex-systems.xyz",
      "fr-FR": "https://nex-systems.xyz",
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Nex-Systems | Architecting the Future of Automation",
    description: "Cloud Infrastructure, AI Solutions, n8n Automation, and High-Performance Digital Assets. 4,300+ pre-built workflows.",
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_US", "es_ES", "fr_FR"],
    siteName: "Nex-Systems",
    url: "https://nex-systems.xyz",
    images: [
      {
        url: "/logo.svg",
        width: 280,
        height: 48,
        alt: "Nex-Systems Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nex-Systems | Architecting the Future of Automation",
    description: "Cloud Infrastructure, AI Solutions, n8n Automation, and High-Performance Digital Assets.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "geo.region": "PT-18",
    "geo.placename": "Viseu, Portugal",
    "geo.position": "40.6610;-7.9097",
    "ICBM": "40.6610, -7.9097",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className="dark">
      <head>
        <link rel="dns-prefetch" href="https://nex-systems.xyz" />
        <link rel="preconnect" href="https://nex-systems.xyz" crossOrigin="anonymous" />
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nex-Systems",
              legalName: "Sara Talia de Carvalho Campelo",
              url: "https://nex-systems.xyz",
              logo: "https://nex-systems.xyz/logo.svg",
              description: "Elite digital agency specializing in cloud infrastructure, AI engineering, DevOps automation, and high-performance digital assets.",
              telephone: "+351930598827",
              email: "contact@nex-systems.xyz",
              taxID: "312668201",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Rua 31 de Janeiro Lote 9 Nº 3 2 Esq",
                  addressLocality: "Viseu",
                  postalCode: "3500-217",
                  addressCountry: "PT",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Rua de São Nuno 92",
                  addressLocality: "São Pedro da Cadeira, Torres Vedras",
                  postalCode: "2560-195",
                  addressCountry: "PT",
                },
              ],
              sameAs: [],
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "The Automation Library - 4,300+ n8n Templates",
                  price: "5.00",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                  category: "Digital Assets",
                },
                {
                  "@type": "Offer",
                  name: "Custom Development Solution - 7 Days",
                  price: "400.00",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                  category: "Custom Development",
                },
              ],
            }),
          }}
        />
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nex-Systems",
              url: "https://nex-systems.xyz",
              telephone: "+351930598827",
              email: "contact@nex-systems.xyz",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua de São Nuno 92",
                addressLocality: "São Pedro da Cadeira, Torres Vedras",
                postalCode: "2560-195",
                addressCountry: "PT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.6610,
                longitude: -7.9097,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 39.3999,
                  longitude: -8.2245,
                },
                geoRadius: "300000",
              },
              serviceType: [
                "Cloud Infrastructure",
                "DevOps Automation",
                "AI Engineering",
                "n8n Workflow Templates",
                "Custom Software Development",
                "Custom Development Solutions",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans antialiased bg-nex-dark text-foreground scan-line-overlay`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
