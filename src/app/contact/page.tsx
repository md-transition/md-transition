import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MD Transition pour un premier échange gratuit. Ensemble, définissons comment vous accompagner au mieux dans le développement de votre activité.",
  alternates: {
    canonical: "/contact",
  },
};

const WHATSAPP_URL =
  "https://wa.me/33749169972?text=" +
  encodeURIComponent(
    "Bonjour, je souhaite en savoir plus sur vos services MD Transition.",
  );

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-cta-gradient pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-orange-300/20 text-orange-300 border border-orange-300/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Parlons de votre projet
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Envoyez-nous un <span className="text-orange-300">message</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Décrivez votre situation et vos besoins. On vous répond sous 24h
              ouvrées.
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

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Sidebar infos */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bloc RDV mis en avant */}
              <AnimatedSection direction="left">
                <Link
                  href="/rendez-vous"
                  className="flex items-center gap-4 bg-orange rounded-2xl p-6 hover:bg-orange-700 transition-all duration-200 hover:-translate-y-0.5 group shadow-orange-sm"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="text-white"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base leading-tight">
                      Prendre rendez-vous
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      30 min, sans engagement, en visio ou présentiel
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  />
                </Link>
              </AnimatedSection>

              {/* Infos de contact */}
              <AnimatedSection direction="left" delay={0.08}>
                <div className="bg-cta-gradient rounded-2xl p-7 text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <MessageCircle size={22} className="text-orange-300" />
                    <h2 className="text-lg font-bold">Coordonnées</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={15} className="text-orange-300" />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:contact@md-transition.fr"
                          className="block text-white font-medium text-sm hover:text-orange-300 transition-colors"
                        >
                          contact@md-transition.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-[#25D366]">
                          <WhatsAppIcon size={15} />
                        </span>
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">
                          WhatsApp
                        </p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium text-sm hover:text-[#25D366] transition-colors"
                        >
                          +33 7 49 16 99 72
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={15} className="text-orange-300" />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">
                          Localisation
                        </p>
                        <p className="text-white font-medium text-sm">France</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={15} className="text-orange-300" />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">
                          Disponibilité
                        </p>
                        <p className="text-white font-medium text-sm">
                          Lun – Ven, 9h – 18h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA */}
              <AnimatedSection direction="left" delay={0.12}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] rounded-2xl p-5 hover:bg-[#20b85a] transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <WhatsAppIcon size={22} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      Écrire sur WhatsApp
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      +33 7 49 16 99 72
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-white/60 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </AnimatedSection>

              {/* Garanties */}
              <AnimatedSection direction="left" delay={0.16}>
                <div className="bg-white rounded-2xl p-5 shadow-card">
                  <ul className="space-y-2.5">
                    {[
                      "Réponse sous 24h ouvrées",
                      "Aucun engagement",
                      "Accompagnement sur-mesure",
                      "Confidentialité garantie",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-text-gray"
                      >
                        <span className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* RGPD */}
              <AnimatedSection direction="left" delay={0.2}>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-text-gray text-xs leading-relaxed">
                    <strong className="text-navy">
                      Vos données sont protégées.
                    </strong>{" "}
                    Conformément au RGPD, vos informations sont utilisées
                    uniquement pour traiter votre demande. Contact RGPD :{" "}
                    <a
                      href="mailto:rgpd@md-transition.fr"
                      className="text-navy hover:text-orange-300 transition-colors"
                    >
                      rgpd@md-transition.fr
                    </a>
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl p-7 lg:p-9 shadow-card">
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-navy mb-2">
                      Votre message
                    </h2>
                    <p className="text-text-gray text-sm">
                      Décrivez votre situation et vos besoins. Plus vous êtes
                      précis, mieux on pourra vous accompagner.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
