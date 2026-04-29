"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Handshake,
  ChartLineUp,
  UserCheck,
  Lightbulb,
} from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: UserCheck,
    title: "Écoute active",
    desc: "Votre situation, vos priorités",
  },
  {
    icon: Lightbulb,
    title: "Sur-mesure",
    desc: "Pas de solution préfabriquée",
  },
  {
    icon: Handshake,
    title: "Confiance",
    desc: "Une relation durable et sincère",
  },
  {
    icon: ChartLineUp,
    title: "Résultats",
    desc: "Des actions concrètes et mesurables",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Côté visuel ── */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Carte citation */}
              <div className="bg-gradient-hero rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-dots-white rounded-3xl" />
                <div className="relative z-10">
                  {/* Guillemets */}
                  <div className="text-5xl text-orange-300/50 font-serif leading-none mb-3">
                    &ldquo;
                  </div>

                  <blockquote className="text-xl sm:text-2xl font-bold leading-snug mb-5 text-white">
                    Tout seul on va plus vite,{" "}
                    <span className="text-orange-300">
                      ensemble on va plus loin.
                    </span>
                  </blockquote>

                  <p className="text-white/85 leading-relaxed mb-7 text-sm sm:text-base">
                    Notre objectif est simple : vous aider à développer votre
                    activité sans vous épuiser. Parce que vous méritez un
                    accompagnement qui vous ressemble et qui s&apos;adapte à
                    votre réalité.
                  </p>

                  {/* Piliers */}
                  <div className="space-y-3">
                    {[
                      "Chaque entrepreneur mérite d'être accompagné",
                      "Les meilleures solutions sont celles construites ensemble",
                      "La relation humaine est au cœur de la réussite",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-orange/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 bg-orange rounded-full" />
                        </span>
                        <span className="text-white/90 text-sm leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                    <Image
                      src="/logo-white.png"
                      alt="MD Transition"
                      width={1435}
                      height={716}
                      className="h-10 w-auto object-contain flex-shrink-0"
                    />
                    <p className="text-white/70 text-xs">
                      Accompagnement Expert des TPE &amp; Associations
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { v: "100%", l: "Humain" },
                  { v: "∞", l: "Sur-mesure" },
                  { v: "24h", l: "Réponse" },
                ].map(({ v, l }) => (
                  <div
                    key={l}
                    className="bg-white rounded-2xl p-4 text-center shadow-card border border-gray-100/50"
                  >
                    <p className="font-bold text-orange text-lg sm:text-xl">
                      {v}
                    </p>
                    <p className="text-text-gray text-xs mt-1">{l}</p>
                  </div>
                ))}
              </div>

              {/* Blobs déco */}
              <div className="absolute -top-5 -right-5 w-28 h-28 bg-orange/10 rounded-full blur-2xl -z-10 animate-blob" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-navy/6 rounded-full blur-xl -z-10 animate-blob-slow" />
            </div>
          </AnimatedSection>

          {/* ── Côté contenu ── */}
          <AnimatedSection direction="right">
            <span className="section-eyebrow mb-4 block">
              👤 Qui sommes-nous ?
            </span>
            <h2 className="section-title mb-3">
              Une approche basée sur{" "}
              <span className="text-orange">l&apos;écoute et la confiance</span>
            </h2>
            <div className="orange-divider mb-6" />

            <div className="space-y-4 mb-8">
              <p className="text-text-gray leading-relaxed text-base sm:text-lg">
                Notre objectif est simple : vous aider à développer votre
                activité sans vous épuiser.
              </p>
              <p className="text-text-gray leading-relaxed text-sm sm:text-base">
                Ici, vous n&apos;êtes pas un client parmi d&apos;autres.{" "}
                <span className="font-bold text-navy">
                  Vous êtes une personne, un projet, une vision.
                </span>
              </p>
              <p className="text-text-gray leading-relaxed text-sm sm:text-base">
                Ici, vous n&apos;êtes pas un simple numéro de dossier. Vous êtes
                un entrepreneur ou une association avec un projet unique, et
                c&apos;est cette singularité que nous accompagnons.
              </p>
            </div>

            {/* Valeurs en cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card border border-gray-100/60 hover:border-orange/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} weight="duotone" className="text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{title}</p>
                    <p className="text-text-gray text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/a-propos" className="btn-secondary group inline-flex">
              En savoir plus
              <ArrowRight
                size={17}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
