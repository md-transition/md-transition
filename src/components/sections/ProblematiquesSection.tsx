"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const problemes = [
  "Vous manquez de temps pour gérer votre entreprise",
  "Vous êtes submergé par l'administratif ou l'organisation",
  "Votre communication est irrégulière ou peu efficace",
  "Vous avez un site... mais peu de visibilité",
  "Vous êtes seul face à vos décisions",
  "Vous avez des idées, mais ne savez pas par où commencer",
];

export default function ProblematiquesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texte + liste */}
          <AnimatedSection direction="left">
            <span className="section-eyebrow mb-4 block">
              Vous vous reconnaissez ?
            </span>
            <h2 className="section-title mb-3">
              Ces situations vous{" "}
              <span className="text-orange">parlent&nbsp;?</span>
            </h2>
            <div className="orange-divider mb-8" />

            <ul className="space-y-4">
              {problemes.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-gray text-sm sm:text-base leading-relaxed"
                >
                  <span className="mt-1.5 w-2 h-2 bg-orange rounded-full flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Encadré conclusion */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              {/* Résultat */}
              <div className="bg-white rounded-2xl p-7 shadow-card border border-gray-100">
                <p className="text-text-gray text-base leading-relaxed mb-4">
                  <strong className="text-navy">Résultat :</strong> vous passez
                  plus de temps à gérer qu&apos;à développer votre activité.
                </p>
                <div className="h-px bg-gray-100 my-4" />
                <div className="bg-orange/8 border border-orange/20 rounded-xl px-5 py-4">
                  <p className="text-navy text-base sm:text-lg leading-snug">
                    Bonne nouvelle :{" "}
                    <strong>Faites le choix d&apos;évoluer.</strong>
                  </p>
                </div>
              </div>

              {/* Citation */}
              <div className="bg-gradient-hero rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-dots-white rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-4xl text-orange-300/50 font-serif leading-none mb-2">
                    &ldquo;
                  </div>
                  <p className="text-white font-semibold text-lg leading-snug">
                    Vous n&apos;avez pas à tout faire seul.{" "}
                    <span className="text-orange-300">On est là pour ça.</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
