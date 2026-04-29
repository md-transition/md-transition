"use client";

import { Ear, MagnifyingGlass, Rocket } from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    num: "01",
    icon: Ear,
    title: "Premier rendez-vous",
    sub: "Un moment d'échange, sans engagement.",
    items: [
      "En présentiel ou en visio",
      "Compréhension de votre activité",
      "Identification de vos problématiques",
    ],
    color: "bg-navy",
  },
  {
    num: "02",
    icon: MagnifyingGlass,
    title: "Proposition personnalisée",
    sub: "Pas de solution toute faite, uniquement du sur-mesure.",
    items: [
      "Recommandations adaptées",
      "Plan d'action clair",
      "Priorités définies",
    ],
    color: "bg-orange",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Mise en œuvre & Accompagnement",
    sub: "Vous avancez, accompagné à chaque étape.",
    items: [
      "Déploiement des actions",
      "Suivi régulier",
      "Ajustements si nécessaire",
    ],
    color: "bg-navy",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots opacity-70" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-eyebrow mb-4 block">Notre approche</span>
          <h2 className="section-title mb-3">
            Un accompagnement{" "}
            <span className="text-orange">simple et clair</span>
          </h2>
          <div className="orange-divider mx-auto mb-5" />
          <p className="section-subtitle max-w-xl mx-auto">
            De l&apos;écoute à l&apos;action
          </p>
          <p className="section-subtitle max-w-xl mx-auto">
            Une méthode claire pour transformer vos défis en opportunités
            concrètes.
          </p>
        </AnimatedSection>

        {/* Étapes */}
        <div className="relative">
          {/* Connecteur desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.7%+52px)] right-[calc(16.7%+52px)] h-[2px] z-0 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-navy via-orange to-navy rounded-full will-animate origin-left"
              data-dir="none"
              style={{ animation: "connector-grow 1.1s ease-in-out 0.4s both" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.num} delay={i * 0.18}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Numéro + Icône */}
                    <div className="relative mb-7 z-10">
                      <div
                        className={`w-[110px] h-[110px] ${s.color}/10 border-2 rounded-3xl flex items-center justify-center shadow-card hover:scale-[1.06] hover:rotate-3 transition-transform duration-200`}
                        style={{
                          borderColor:
                            s.color === "bg-orange"
                              ? "rgba(124,58,237,0.2)"
                              : "rgba(30,19,64,0.15)",
                        }}
                      >
                        <div
                          className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center shadow-sm`}
                        >
                          <Icon
                            size={26}
                            weight="duotone"
                            className="text-white"
                          />
                        </div>
                      </div>
                      {/* Numéro badge — agrandi */}
                      <div className="absolute -top-3 -right-3 w-11 h-11 bg-navy rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10">
                        <span className="text-white text-sm font-black tracking-wide">
                          {s.num}
                        </span>
                      </div>
                    </div>

                    {/* Flèche mobile */}
                    {i < 2 && (
                      <div className="lg:hidden flex justify-center mb-6 -mt-3">
                        <svg
                          className="text-orange/40"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                      </div>
                    )}

                    {/* Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-card group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-300 w-full border border-gray-100">
                      <h3 className="text-xl font-bold text-navy mb-2">
                        {s.title}
                      </h3>
                      <ul className="space-y-2 mb-4 text-left">
                        {s.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-text-gray text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-orange font-semibold text-xs italic text-left">
                        {s.sub}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Citation bas */}
        <AnimatedSection className="text-center mt-16" delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Carte 1 - Analyse */}
            <div className="bg-white border-2 border-navy/20 rounded-3xl p-8 flex flex-col items-center text-center hover:border-navy/40 hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-navy font-bold text-lg mb-4">Analyse</p>
              <p className="text-navy text-base leading-relaxed">
                Votre organisation et vos priorités pour identifier les leviers
                d&apos;action les plus efficaces.
              </p>
            </div>

            {/* Carte 2 - Approche */}
            <div className="bg-white border-2 border-orange/20 rounded-3xl p-8 flex flex-col items-center text-center hover:border-orange/40 hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h-2M10 10h-2m8 0h-2m4 0a2 2 0 11-4 0 2 2 0 014 0zM6 10a2 2 0 11-4 0 2 2 0 014 0zM12 14c-2.5 2-4 3-4 5v3h8v-3c0-2-1.5-3-4-5z"
                  />
                </svg>
              </div>
              <p className="text-orange font-bold text-lg mb-4">Approche</p>
              <p className="text-navy text-base leading-relaxed">
                Un regard extérieur, expert et bienveillant pour vous
                accompagner.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
