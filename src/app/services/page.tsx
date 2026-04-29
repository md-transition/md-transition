import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  Globe,
  Compass,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez nos services d'accompagnement : gestion administrative, accompagnement financier, transformation digitale et coaching entrepreneurial. Solutions sur-mesure pour entrepreneurs.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "administration",
    icon: Briefcase,
    title: "Gestion Administrative",
    tagline: "Libérez-vous des tâches qui vous pèsent",
    description:
      "L'administration est souvent le premier frein à la croissance d'une activité. Entre la gestion des courriers, le suivi des dossiers, la rédaction de documents et l'organisation générale, ces tâches chronophages vous éloignent de votre cœur de métier.",
    longDescription:
      "Notre rôle est de prendre en charge, structurer et optimiser tout ce volet administratif pour que vous puissiez vous concentrer sur ce que vous faites de mieux.",
    features: [
      "Organisation et classement des documents",
      "Suivi et gestion des dossiers clients",
      "Rédaction de courriers et d'emails professionnels",
      "Création de tableaux de bord de suivi",
      "Mise en place de processus et procédures",
      "Gestion des relations fournisseurs",
      "Préparation des documents comptables",
    ],
    benefits: [
      "Gagnez 5 à 10h par semaine",
      "Plus d'oublis ou de retards",
      "Des processus clairs et reproductibles",
    ],
    color: "bg-blue-50",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    accentColor: "border-navy",
  },
  {
    id: "finance",
    icon: TrendingUp,
    title: "Accompagnement Financier",
    tagline: "Pilotez votre activité avec sérénité",
    description:
      "Connaître en temps réel l'état financier de votre activité est essentiel pour prendre les bonnes décisions. Pourtant, beaucoup d'entrepreneurs naviguent à vue, sans indicateurs clairs ni suivi régulier.",
    longDescription:
      "On vous aide à mettre en place des outils de pilotage financier adaptés à votre taille et vos besoins, pour que les chiffres deviennent vos alliés, pas vos ennemis.",
    features: [
      "Mise en place du suivi de trésorerie",
      "Création de tableaux de bord financiers",
      "Analyse des flux entrants et sortants",
      "Suivi et relance des impayés",
      "Pilotage budgétaire mensuel",
      "Préparation des éléments pour votre comptable",
      "Indicateurs clés de performance (KPIs)",
    ],
    benefits: [
      "Vision claire de votre situation financière",
      "Anticipation des difficultés",
      "Décisions basées sur des données réelles",
    ],
    color: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    accentColor: "border-green-500",
  },
  {
    id: "digital",
    icon: Globe,
    title: "Transformation Digitale",
    tagline: "Modernisez votre activité sans vous perdre",
    description:
      "Le digital offre des opportunités considérables, mais le choix des outils, la mise en place de process numériques et la communication en ligne peuvent vite devenir un casse-tête. Surtout quand ce n'est pas votre cœur de métier.",
    longDescription:
      "On vous accompagne dans votre transition numérique de manière progressive et adaptée à vos besoins réels, sans gadgets inutiles ni complexité artificielle.",
    features: [
      "Audit de vos outils digitaux actuels",
      "Sélection et mise en place d'outils adaptés",
      "Stratégie de communication sur les réseaux sociaux",
      "Création et animation de contenu",
      "Optimisation de votre présence en ligne",
      "Formation à l'utilisation des nouveaux outils",
      "Automatisation des tâches répétitives",
    ],
    benefits: [
      "Gagner en visibilité en ligne",
      "Des outils qui font gagner du temps",
      "Une communication cohérente et professionnelle",
    ],
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    accentColor: "border-purple-500",
  },
  {
    id: "coaching",
    icon: Compass,
    title: "Coaching Entrepreneurial",
    tagline: "Clarifiez votre vision et passez à l'action",
    description:
      "Prendre du recul sur son activité, définir ses priorités, surmonter les blocages et prendre les bonnes décisions seul, c'est difficile. Un regard extérieur bienveillant et expert change tout.",
    longDescription:
      "Notre accompagnement décisionnel vous aide à clarifier votre vision, structurer votre stratégie et vous donner les outils pour avancer avec confiance et efficacité.",
    features: [
      "Bilan de votre situation actuelle",
      "Définition des objectifs à court et long terme",
      "Stratégie de développement de l'activité",
      "Accompagnement dans les prises de décision",
      "Plan d'action personnalisé",
      "Suivi régulier et ajustements",
      "Travail sur la posture entrepreneuriale",
    ],
    benefits: [
      "Clarté sur vos priorités",
      "Plus de confiance dans vos décisions",
      "Un cap clair et une méthode pour y arriver",
    ],
    color: "bg-orange-50",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
    accentColor: "border-orange",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-orange-300/20 text-orange-300 border border-orange-300/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Accompagnement Expert des TPE &amp; Associations
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Des services sur-mesure pour{" "}
              <span className="text-orange-300">chaque besoin</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-white/90 text-xl leading-relaxed">
                Déléguez, concentrez-vous sur ce qui compte vraiment.
              </p>
              <p className="text-white/90 text-xl leading-relaxed">
                Chaque accompagnement est co-construit avec vous, pour vous.
              </p>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60H1440V30C1440 30 1080 0 720 0C360 0 0 30 0 30V60Z"
              fill="#FFFDEE"
            />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection key={service.id} id={service.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}
                      >
                        <Icon size={24} className={service.iconColor} />
                      </div>
                      <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                      {service.title}
                    </h2>

                    <p className="text-text-gray leading-relaxed text-lg mb-3">
                      {service.description}
                    </p>
                    <p className="text-text-gray leading-relaxed mb-6">
                      {service.longDescription}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-flex items-center gap-1.5 bg-orange/10 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold"
                        >
                          <CheckCircle size={12} />
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                    >
                      En discuter avec nous
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Features card */}
                  <div
                    className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    <div
                      className={`${service.color} rounded-2xl p-7 border-l-4 ${service.accentColor}`}
                    >
                      <h3 className="font-bold text-navy text-lg mb-5">
                        Ce que nous prenons en charge
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-gray-700"
                          >
                            <CheckCircle
                              size={16}
                              className={`${service.iconColor} flex-shrink-0 mt-0.5`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Finance & transformation */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute -top-20 right-0 w-80 h-80 bg-orange/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Finance &amp; Transformation
            </h2>
            <div className="w-12 h-[3px] bg-orange-300 rounded-full mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
            <AnimatedSection direction="left">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
                <h3 className="text-white font-bold text-xl mb-5">
                  Management de transition
                </h3>
                <ul className="space-y-3">
                  {[
                    "Direction financière de transition",
                    "Pilotage en période de changement",
                    "Sécurisation de vos décisions",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/85 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-300 rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
                <h3 className="text-white font-bold text-xl mb-5">
                  Transformation des fonctions finance
                </h3>
                <ul className="space-y-3">
                  {[
                    "AMOA",
                    "PMO / pilotage de projets",
                    "Transformation des processus financiers",
                    "Optimisation des outils",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/85 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-300 rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
              <span className="w-2 h-2 bg-orange-300 rounded-full flex-shrink-0" />
              <p className="text-white/90 text-sm sm:text-base italic">
                Une fonction finance plus performante et alignée avec votre
                stratégie
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60H1440V30C1440 30 1080 0 720 0C360 0 0 30 0 30V60Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">
              Comment ça <span className="text-orange">fonctionne ?</span>
            </h2>
            <p className="section-subtitle mb-10 max-w-2xl mx-auto">
              Pas de packages rigides. On construit ensemble la formule qui
              correspond exactement à votre situation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Premier contact",
                  desc: "Un échange gratuit de 30 min pour comprendre votre situation et vos priorités",
                },
                {
                  step: "02",
                  title: "Proposition",
                  desc: "Une proposition d'accompagnement sur-mesure, construite avec vous",
                },
                {
                  step: "03",
                  title: "On démarre",
                  desc: "Mise en place progressive avec suivi régulier et ajustements en temps réel",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="bg-white border border-slate-100 rounded-xl p-5 text-left shadow-sm"
                >
                  <div className="text-4xl font-black text-orange mb-2 leading-none">
                    {step}
                  </div>
                  <h3 className="font-bold text-navy mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-7 py-4 rounded-xl font-bold hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-200 shadow-navy-sm"
            >
              Démarrer mon accompagnement
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
