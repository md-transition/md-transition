"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Sparkle } from "@phosphor-icons/react";

const benefits = [
  "Structurer votre organisation",
  "Améliorer votre visibilité",
  "Vous libérer des tâches chronophages",
  "Avancer sereinement, avec un interlocuteur à vos côtés",
];

const stats = [
  { value: "3", label: "Domaines\nd'expertise" },
  { value: "100%", label: "Sur-mesure\npour vous" },
  { value: "24h", label: "Délai de\nréponse" },
];

const particles = [
  {
    size: 7,
    top: "18%",
    left: "8%",
    color: "rgba(242,148,48,0.45)",
    delay: "0s",
    dur: "4s",
  },
  {
    size: 5,
    top: "42%",
    left: "28%",
    color: "rgba(255,255,255,0.12)",
    delay: "0.8s",
    dur: "5s",
  },
  {
    size: 6,
    top: "68%",
    left: "62%",
    color: "rgba(242,148,48,0.35)",
    delay: "1.4s",
    dur: "3.5s",
  },
  {
    size: 4,
    top: "30%",
    left: "80%",
    color: "rgba(255,255,255,0.15)",
    delay: "0.4s",
    dur: "6s",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* ── Arrière-plan — CSS pur ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots-white" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] bg-white/4 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 left-0 w-[1px] h-40 bg-gradient-to-b from-transparent via-orange-300/20 to-transparent" />
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      {/* ── Contenu ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-14 items-center">
          {/* Colonne texte */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-7 bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-xs sm:text-sm font-medium hero-fade-up">
              <Sparkle size={13} weight="fill" className="text-orange-300" />
              Accompagnement Expert des TPE &amp; Association
            </div>

            {/* Titre */}
            <h1
              className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold text-white leading-[1.08] tracking-tight mb-6 hero-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Libérez votre temps{" "}
              <span className="relative inline-block">
                <span className="text-orange-400">pour l&apos;essentiel</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-orange-400/60 rounded-full hero-scale-x"
                  style={{ animationDelay: "0.9s" }}
                />
              </span>
            </h1>

            {/* Sous-titre */}
            <p
              className="text-base sm:text-lg text-white/90 leading-relaxed mb-2 max-w-xl hero-fade-up"
              style={{ animationDelay: "0.18s" }}
            >
              On s&apos;occupe du reste.
            </p>
            <p
              className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-xl hero-fade-up"
              style={{ animationDelay: "0.22s" }}
            >
              Vous êtes entrepreneur, artisan, commerçant, professionnel
              indépendant ou association ? Vous jonglez entre votre cœur de
              métier, la gestion, la communication… et vous manquez de temps ?
              <span className="block mt-2 text-white/90 font-semibold">
                Vous n&apos;avez pas à tout faire seul.
              </span>
            </p>

            {/* Avantages */}
            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-white/90 hero-fade-left"
                  style={{ animationDelay: `${0.35 + i * 0.08}s` }}
                >
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-orange-300 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 hero-fade-up"
              style={{ animationDelay: "0.78s" }}
            >
              <Link
                href="/rendez-vous"
                className="btn-primary group text-center"
              >
                Prendre rendez-vous
              </Link>
              <Link href="/services" className="btn-ghost text-center">
                En savoir plus
              </Link>
            </div>

            {/* Indicateurs de confiance */}
            <div
              className="mt-8 flex flex-wrap gap-5 text-white/70 text-xs hero-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              {[
                "Premier échange gratuit",
                "Sans engagement",
                "Réponse sous 24h",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-orange-300/70 rounded-full" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne carte — desktop uniquement */}
          <div
            className="hidden lg:block hero-fade-right"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="relative">
              <div className="bg-navy-950/60 border border-white/15 rounded-3xl p-7 xl:p-9 shadow-card">
                {/* Quote */}
                <div className="mb-7 pb-7 border-b border-white/10">
                  <div className="text-5xl text-orange-300/50 font-serif leading-none mb-3">
                    &ldquo;
                  </div>
                  <blockquote className="text-white text-lg xl:text-xl font-semibold leading-snug">
                    Tout seul on va plus vite,{" "}
                    <span className="text-orange-300">
                      ensemble on va plus loin.
                    </span>
                  </blockquote>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="bg-white/10 rounded-2xl p-4 text-center border border-white/10"
                    >
                      <p className="text-white font-bold text-2xl xl:text-3xl leading-none">
                        {value}
                      </p>
                      <p className="text-white/80 text-[10px] mt-1.5 leading-tight whitespace-pre-line">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Signature */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <Image
                    src="/logo-white.png"
                    alt="MD Transition"
                    width={1435}
                    height={716}
                    className="h-10 w-auto object-contain flex-shrink-0"
                  />
                  <p className="text-white/65 text-xs">
                    Accompagnement Expert des TPE &amp; Association
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Vague */}
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
  );
}
