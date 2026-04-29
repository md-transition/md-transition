import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

// Sections sous le fold — chargées après le Hero pour accélérer le LCP
const ProblematiquesSection = dynamic(() => import("@/components/sections/ProblematiquesSection"));
const ServicesSection       = dynamic(() => import("@/components/sections/ServicesSection"));
const ProcessSection        = dynamic(() => import("@/components/sections/ProcessSection"));
const AboutSection          = dynamic(() => import("@/components/sections/AboutSection"));
const CTASection            = dynamic(() => import("@/components/sections/CTASection"));

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "MD Transition : votre partenaire de confiance pour développer votre activité sans vous épuiser. Accompagnement sur-mesure pour entrepreneurs, artisans et professionnels de santé.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblematiquesSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
