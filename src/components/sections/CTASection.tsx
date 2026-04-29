"use client";

import Link from "next/link";
import { ArrowRight, Phone, Envelope, VideoCamera } from "@phosphor-icons/react";

const RENDEZ_VOUS = "/rendez-vous";
import AnimatedSection from "@/components/ui/AnimatedSection";

const particles = [
  { top: "20%", right: "6%", delay: "0s", dur: "3.2s" },
  { top: "36%", right: "14%", delay: "0.4s", dur: "3.8s" },
  { top: "52%", right: "22%", delay: "0.8s", dur: "4.4s" },
  { top: "68%", right: "30%", delay: "1.2s", dur: "5.0s" },
  { top: "84%", right: "38%", delay: "1.6s", dur: "5.6s" },
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-cta-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-orange/30 to-transparent" />
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-orange/30 rounded-full animate-float"
            style={{
              top: p.top,
              right: p.right,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne Gauche - Contenu */}
            <div className="lg:pr-8">
              {/* Badge */}
              <span className="badge-orange mb-6 inline-flex">
                Prêt à franchir le pas ?
              </span>

              {/* Titre Principal */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight whitespace-nowrap">
                Et si on en parlait ?
              </h2>

              {/* Descriptif court */}
              <p className="text-white text-lg sm:text-xl font-semibold mb-8">
                Votre activité mérite le meilleur de l&apos;accompagnement.
              </p>

              {/* Contenu structuré */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center mt-1">
                    <span className="text-orange text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Vous avez une problématique ?
                    </h3>
                    <p className="text-white/75">
                      Un besoin spécifique ou une question ?
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center mt-1">
                    <span className="text-orange text-sm font-bold">💡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Envie d&apos;y voir plus clair ?
                    </h3>
                    <p className="text-white/75">
                      Vous cherchez une nouvelle perspective sur votre activité.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center mt-1">
                    <span className="text-orange text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      La solution : un échange
                    </h3>
                    <p className="text-white/75">
                      Prenons un moment pour discuter et explorer vos
                      possibilités.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA principale */}
              <div className="flex flex-row gap-2 mb-4 items-center">
                <Link
                  href={RENDEZ_VOUS}
                  className="btn-primary group text-center whitespace-nowrap text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3"
                >
                  Prendre rendez-vous
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-semibold rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm hover:bg-white/25 hover:border-white/50 transition-all duration-200 whitespace-nowrap"
                >
                  Envoyer un message
                </Link>
              </div>

            </div>

            {/* Colonne Droite - Visuel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Boîte principale */}
                <div className="bg-gradient-to-br from-orange/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  {/* Titre du box */}
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-wide mb-6">
                    Premier échange
                  </p>

                  {/* Détails */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⏱️</span>
                      </div>
                      <div>
                        <p className="text-white/90 text-sm font-semibold">
                          30 minutes
                        </p>
                        <p className="text-white/60 text-xs">
                          Pour explorer ensemble
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎯</span>
                      </div>
                      <div>
                        <p className="text-white/90 text-sm font-semibold">
                          Sans engagement
                        </p>
                        <p className="text-white/60 text-xs">
                          Découvrez comment vous aider
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💬</span>
                      </div>
                      <div>
                        <p className="text-white/90 text-sm font-semibold">
                          Un vrai dialogue
                        </p>
                        <p className="text-white/60 text-xs">
                          Pour une compréhension mutuelle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modes de contact */}
                <div className="mt-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Disponible via</p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:+33749169972"
                      className="group flex items-center justify-between gap-2.5 rounded-lg px-3 py-2 hover:bg-white/10 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone size={14} className="text-orange-300 flex-shrink-0" />
                        <div>
                          <span className="text-white/80 text-sm group-hover:text-white transition-colors">Téléphone</span>
                          <span className="block text-white/40 text-xs group-hover:text-white/60 transition-colors">+33 7 49 16 99 72</span>
                        </div>
                      </div>
                      <ArrowRight size={12} className="text-white/20 group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>

                    <a
                      href="/contact"
                      className="group flex items-center justify-between gap-2.5 rounded-lg px-3 py-2 hover:bg-white/10 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <Envelope size={14} className="text-orange-300 flex-shrink-0" />
                        <div>
                          <span className="text-white/80 text-sm group-hover:text-white transition-colors">Email</span>
                          <span className="block text-white/40 text-xs group-hover:text-white/60 transition-colors">Réponse sous 24h ouvrées</span>
                        </div>
                      </div>
                      <ArrowRight size={12} className="text-white/20 group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>

                    <a
                      href="https://calendly.com/contact-md-transition/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2.5 rounded-lg px-3 py-2 hover:bg-white/10 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <VideoCamera size={14} className="text-orange-300 flex-shrink-0" />
                        <div>
                          <span className="text-white/80 text-sm group-hover:text-white transition-colors">Présentiel ou visio conférence</span>
                          <span className="block text-white/40 text-xs group-hover:text-white/60 transition-colors">Réserver un créneau</span>
                        </div>
                      </div>
                      <ArrowRight size={12} className="text-white/20 group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>
                  </div>
                </div>

                {/* Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
