import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavigationProgress from "@/components/ui/NavigationProgress";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://md-transition.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MD Transition | Facilitateur & Partenaire pour Entrepreneurs",
    template: "%s | MD Transition",
  },
  description:
    "MD Transition accompagne entrepreneurs, artisans et professionnels de santé dans la structuration de leur organisation, la délégation et le développement de leur activité. Facilitateur et partenaire de confiance.",
  keywords: [
    "accompagnement entrepreneur",
    "facilitateur",
    "gestion administrative",
    "transformation digitale",
    "coaching entrepreneurial",
    "artisan",
    "professionnel de santé",
    "délégation",
    "organisation",
    "MD Transition",
    "Martine Dorival",
  ],
  authors: [{ name: "MD Transition" }],
  creator: "MD Transition",
  publisher: "MD Transition",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "MD Transition",
    title: "MD Transition | Facilitateur & Partenaire pour Entrepreneurs",
    description:
      "Accompagnement sur-mesure pour entrepreneurs, artisans et professionnels de santé. Structurez votre organisation et développez votre activité sereinement.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MD Transition - Facilitateur & Partenaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Transition | Facilitateur & Partenaire pour Entrepreneurs",
    description:
      "Accompagnement sur-mesure pour entrepreneurs, artisans et professionnels de santé.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32",   type: "image/png" },
      { url: "/favicon.png",    sizes: "512x512",  type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple:    "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#143459",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MD Transition",
  description:
    "Facilitateur et partenaire pour entrepreneurs, artisans et professionnels de santé. Accompagnement sur-mesure en gestion, organisation et transformation digitale.",
  url: "https://md-transition.fr",
  email: "contact@md-transition.fr",
  telephone: "+33749169972",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19, rue d'Andrésy",
    postalCode: "78700",
    addressLocality: "Conflans-Sainte-Honorine",
    addressCountry: "FR",
  },
  founder: {
    "@type": "Person",
    name: "Martine Dorival",
  },
  sameAs: [],
  knowsAbout: [
    "Accompagnement entrepreneurial",
    "Gestion administrative",
    "Transformation digitale",
    "Coaching professionnel",
    "Organisation d'entreprise",
  ],
  priceRange: "€€",
  areaServed: "FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavigationProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
