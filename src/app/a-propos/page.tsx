import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Target,
  Users,
  Lightbulb,
  ShieldCheck,
  Star,
  Rocket,
  Wrench,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez MD Transition et notre philosophie d'accompagnement. Ensemble, faisons de votre vision une réalité grâce à un accompagnement sur-mesure, humain et concret.",
  alternates: {
    canonical: "/a-propos",
  },
};

const values = [
  {
    icon: Heart,
    title: "L'humain avant tout",
    description:
      "Chaque entrepreneur a son histoire, ses contraintes et ses ambitions. On prend le temps de vous connaître vraiment avant de proposer quoi que ce soit.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Target,
    title: "Sur-mesure, toujours",
    description:
      "Aucune solution préfabriquée ici. Chaque accompagnement est co-construit avec vous, pour vous, selon votre réalité du moment.",
    color: "bg-orange-50",
    iconColor: "text-orange",
  },
  {
    icon: ShieldCheck,
    title: "Confiance et transparence",
    description:
      "Une relation professionnelle doit reposer sur la confiance. On s'engage à vous donner des retours honnêtes, même quand c'est difficile à entendre.",
    color: "bg-blue-50",
    iconColor: "text-navy",
  },
  {
    icon: Lightbulb,
    title: "L'organisation comme levier",
    description:
      "Structurer votre gestion et votre communication, ce n'est pas une contrainte : c'est vous redonner la liberté d'évoluer sereinement.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Users,
    title: "Partenariat durable",
    description:
      "On n'est pas juste un prestataire : on est votre partenaire. Notre succès est intimement lié au vôtre, et c'est ça qui fait toute la différence.",
    color: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    icon: Star,
    title: "Résultats concrets",
    description:
      "L'accompagnement ne doit pas rester dans le flou. À chaque étape, des actions concrètes, mesurables, alignées avec vos objectifs réels.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const targets = [
  {
    title: "Entrepreneurs",
    description:
      "Vous avez lancé votre activité avec passion, mais la gestion quotidienne prend trop de place. Il est temps de reprendre le contrôle et d'avancer sereinement.",
    icon: Rocket,
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    title: "Artisans",
    description:
      "Votre savoir-faire est exceptionnel, mais la partie administrative vous pèse. Concentrez-vous sur ce que vous faites de mieux.",
    icon: Wrench,
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
  },
  {
    title: "Associations",
    description:
      "Entre les adhérents, la paperasse et la gestion quotidienne, vous méritez un soutien solide pour avancer sereinement.",
    icon: Users,
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
  },
];

export default function AProposPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-orange-300/20 text-orange-300 border border-orange-300/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Accompagnement Expert des TPE &amp; Associations
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Une approche basée sur{" "}
              <span className="text-orange-300">
                l&apos;écoute et la confiance
              </span>
            </h1>
            <p className="text-white/90 text-xl leading-relaxed max-w-2xl mx-auto">
              &ldquo;Tout seul on va plus vite, ensemble on va plus loin.&rdquo;
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 90H1440V45C1200 10 960 0 720 2C480 4 240 30 0 45V90Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 lg:py-28 border-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <AnimatedSection direction="left">
              <span className="badge mb-3 block">Notre objectif</span>
              <h2 className="section-title mb-6">
                Vous aider à grandir{" "}
                <span className="text-orange">sans vous épuiser</span>
              </h2>
              <div className="space-y-4 text-text-gray leading-relaxed">
                <p className="text-lg">
                  Notre objectif est simple : vous aider à développer votre
                  activité sans vous épuiser. Parce que trop souvent, les
                  entrepreneurs, artisans et association que nous rencontrons
                  ont une vision claire, mais se retrouvent noyés sous les
                  tâches quotidiennes.
                </p>
                <div className="flex items-start gap-3 bg-orange/8 border-l-4 border-orange rounded-r-xl px-5 py-4">
                  <span className="text-2xl text-orange/50 font-serif leading-none mt-0.5 flex-shrink-0">
                    &ldquo;
                  </span>
                  <p className="text-navy font-semibold italic text-base leading-relaxed">
                    Être votre partenaire pour vous faciliter le quotidien.
                  </p>
                </div>
                <p>
                  Chaque entrepreneur mérite d&apos;être accompagné pour ne plus
                  rester seul face à ses décisions. C&apos;est cette conviction
                  profonde qui a donné naissance à MD Transition.
                </p>
                <p>
                  La relation humaine est le moteur de notre réussite commune :
                  aucune solution &ldquo;toute faite&rdquo;, mais un
                  accompagnement sur-mesure construit ensemble, brique par
                  brique.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                  <div className="mb-4">
                    <Image
                      src="/logo-white.png"
                      alt="MD Transition"
                      width={1435}
                      height={716}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Pourquoi MD Transition ?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Parce que chaque entrepreneur mérite un accompagnement personnalisé",
                      "Parce que la relation humaine est le moteur de la réussite",
                      "Parce que l'organisation est une force, pas une contrainte",
                      "Parce que vous n'êtes pas un simple numéro de dossier",
                    ].map((reason, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/80 text-sm"
                      >
                        <span className="w-6 h-6 bg-orange-300/25 rounded-full flex items-center justify-center flex-shrink-0 text-orange-300 font-bold text-xs mt-0.5">
                          {i + 1}
                        </span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote overlay */}
                <div className="mt-4 bg-white rounded-xl p-5 shadow-card border-l-4 border-orange">
                  <p className="text-navy font-semibold italic text-sm leading-relaxed">
                    &ldquo;Ici, vous n&apos;êtes pas un simple numéro de
                    dossier. Vous êtes un entrepreneur ou une association avec
                    un projet unique.&rdquo;
                  </p>
                  <p className="text-orange text-sm font-medium mt-2">
                    — MD Transition
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Target audiences */}
          <AnimatedSection className="mb-20">
            <div className="text-center mb-12">
              <span className="badge mb-3 block">Pour qui ?</span>
              <h2 className="section-title mb-4">
                Un accompagnement pensé pour{" "}
                <span className="text-orange">vous</span>
              </h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Quel que soit votre domaine d&apos;activité, si vous avez une
                vision mais êtes débordé au quotidien, MD Transition est là pour
                vous.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targets.map((target, index) => {
                const Icon = target.icon;
                return (
                  <AnimatedSection key={target.title} delay={index * 0.1}>
                    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col items-center">
                      <div
                        className={`w-14 h-14 ${target.iconBg} rounded-2xl flex items-center justify-center mb-5`}
                      >
                        <Icon
                          size={26}
                          className={target.iconColor}
                          strokeWidth={1.75}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">
                        {target.title}
                      </h3>
                      <p className="text-text-gray text-sm leading-relaxed">
                        {target.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="badge mb-3 block">Nos valeurs</span>
              <h2 className="section-title mb-4">
                Ce qui nous guide{" "}
                <span className="text-orange">au quotidien</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <AnimatedSection key={value.title} delay={index * 0.08}>
                    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                      <div
                        className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <Icon size={22} className={value.iconColor} />
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2">
                        {value.title}
                      </h3>
                      <p className="text-text-gray text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-gradient-hero rounded-2xl p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-6xl text-orange-300/50 font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-6">
                  Ensemble, faisons de votre vision une réalité.
                </blockquote>
                <p className="text-white/90 text-lg mb-8">
                  Parce que vous méritez un accompagnement qui vous ressemble,
                  construit sur la confiance et axé sur des résultats concrets.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 rounded-xl font-bold hover:bg-white/90 hover:-translate-y-0.5 shadow-lg transition-all duration-200"
                >
                  Commençons ensemble
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
