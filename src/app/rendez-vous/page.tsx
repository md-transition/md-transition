import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Réservez votre premier échange avec MD Transition — 30 minutes, sans engagement, en présentiel ou en visio.",
  alternates: {
    canonical: "/rendez-vous",
  },
};

const CALENDLY = "https://calendly.com/contact-md-transition/contact";

export default function RendezVousPage() {
  return (
    <div className="bg-cream min-h-screen">

      {/* Hero compact */}
      <section className="bg-gradient-hero pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-orange-300/20 text-orange-300 border border-orange-300/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Premier échange sans engagement
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Prenons <span className="text-orange-300">rendez-vous</span>
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              30 minutes pour comprendre votre situation, identifier vos besoins
              et voir comment on peut avancer ensemble.
            </p>

            {/* Trois promesses */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2">
              {[
                "En présentiel ou en visio",
                "100% gratuit",
                "Sans engagement",
              ].map((info) => (
                <span
                  key={info}
                  className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white font-semibold text-sm px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  <span className="w-2 h-2 bg-orange-300 rounded-full flex-shrink-0" />
                  {info}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
               className="w-full" preserveAspectRatio="none">
            <path d="M0 60H1440V30C1440 30 1080 0 720 0C360 0 0 30 0 30V60Z" fill="#FFFDEE" />
          </svg>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
              <iframe
                src={CALENDLY}
                width="100%"
                height="750"
                frameBorder="0"
                title="Choisissez votre créneau — MD Transition"
                className="block"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Lien retour vers contact */}
          <AnimatedSection className="text-center mt-10" delay={0.2}>
            <p className="text-text-gray text-sm mb-3">
              Vous préférez envoyer un message ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-navy font-semibold text-sm underline underline-offset-4 hover:text-orange transition-colors"
            >
              Accéder au formulaire de contact
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
