"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const solutions = [
  {
    title: "Gagnez du temps au quotidien",
    intro: "Nous vous aidons à simplifier et structurer votre activité :",
    items: [
      "Optimisation de vos process",
      "Organisation de votre gestion",
      "Mise en place d'outils adaptés",
      "Délégation de tâches chronophages",
    ],
    conclusion: "Objectif : libérer du temps pour votre cœur de métier",
    accent: "navy" as const,
  },
  {
    title: "Développez votre visibilité",
    intro: "",
    items: [
      "Gestion de vos réseaux sociaux",
      "Création ou refonte de site web",
      "Maintenance et mise à jour",
      "Stratégie de visibilité en ligne",
    ],
    conclusion: "Objectif : être visible et attirer les bons clients",
    accent: "orange" as const,
  },
  {
    title: "Un accompagnement humain",
    intro: "",
    items: [
      "Écoute de votre situation",
      "Conseils personnalisés",
      "Accompagnement dans la durée",
      "Résolution de problématiques co-construite avec vous",
    ],
    conclusion: "Un humain qui parle à un humain.",
    accent: "navy" as const,
  },
];

const accentMap = {
  navy:   { bar: "bg-navy",   dot: "bg-navy",   hover: "group-hover:border-navy/30" },
  orange: { bar: "bg-orange", dot: "bg-orange",  hover: "group-hover:border-orange/30" },
};

export default function ServicesSection() {
  return (
    <>
      {/* ── Section 3 : Nos solutions ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center mb-14">
            <span className="section-eyebrow mb-4 block">Nos solutions</span>
            <h2 className="section-title mb-4">
              Des solutions <span className="text-orange">concrètes</span>
            </h2>
            <div className="orange-divider mx-auto mb-5" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Chaque accompagnement est construit sur-mesure selon votre situation,
              vos objectifs et votre rythme.
            </p>
          </AnimatedSection>

          {/* Subgrid : 4 rangées partagées entre les 3 colonnes → conclusions alignées */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto] gap-5 lg:gap-x-6 lg:gap-y-0">
            {solutions.map((s, i) => {
              const a = accentMap[s.accent];
              return (
                <AnimatedSection
                  key={s.title}
                  delay={i * 0.1}
                  className={`group bg-white border border-gray-100 rounded-2xl p-6 lg:p-7 shadow-card flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-4 ${a.hover} hover:-translate-y-[5px] hover:shadow-[0_12px_36px_rgba(30,19,64,0.11)] transition-all duration-300`}
                >
                  {/* Rangée 1 : barre colorée */}
                  <div className={`h-[3px] w-10 ${a.bar} rounded-full mb-5 group-hover:w-16 transition-all duration-300`} />

                  {/* Rangée 2 : titre + intro */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 leading-snug">
                      {s.title}
                    </h3>
                    {s.intro && (
                      <p className="text-text-gray text-sm">{s.intro}</p>
                    )}
                  </div>

                  {/* Rangée 3 : liste (1fr — s'étire) */}
                  <ul className="space-y-2 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-text-gray">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${a.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Rangée 4 : conclusion — toujours sur la même ligne horizontale */}
                  <div className="mt-auto lg:mt-0 pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-navy/80 italic">{s.conclusion}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
