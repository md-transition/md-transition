"use client";

import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeSimple,
  MapPin,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Gestion Administrative", href: "/services#administration" },
  { label: "Accompagnement Financier", href: "/services#finance" },
  { label: "Transformation Digitale", href: "/services#digital" },
  { label: "Coaching Entrepreneurial", href: "/services#coaching" },
];

const socials = [
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/md-transition/",
    hoverColor: "hover:bg-[#0077B5]",
    external: true,
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    href:
      "https://wa.me/33749169972?text=" +
      encodeURIComponent(
        "Bonjour, je souhaite en savoir plus sur vos services MD Transition.",
      ),
    hoverColor: "hover:bg-[#25D366]",
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-navy-950 text-white"
      style={{ backgroundColor: "#0C2038" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* ── Marque ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                  src="/logo-white.png"
                  alt="MD Transition"
                  width={1435}
                  height={716}
                  className="h-12 w-auto object-contain"
                />
            </Link>

            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Libérer votre temps pour l&apos;essentiel.
              <br />
              Ne restez plus seul face à vos problématiques.
              <br />
              <span className="text-orange-300/90 italic">
                Tout seul on va plus vite, ensemble on va plus loin.
              </span>
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-2.5">
              {socials.map(
                ({ icon: Icon, label, href, hoverColor, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/75 ${hoverColor} hover:text-white hover:border-transparent transition-all duration-200`}
                  >
                    <Icon size={17} weight="fill" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-[0.12em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 text-sm hover:text-orange-300 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
                  >
                    <span className="w-1 h-1 bg-orange-300/50 rounded-full" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-[0.12em] mb-5">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/70 text-sm hover:text-orange-300 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
                  >
                    <span className="w-1 h-1 bg-orange-300/50 rounded-full" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-[0.12em] mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5">
              {/* Emails */}
              {[{ addr: "contact@md-transition.fr", label: "Contact" }].map(
                ({ addr, label }) => (
                  <li key={addr}>
                    <a
                      href={`mailto:${addr}`}
                      className="flex items-start gap-2.5 text-white/75 text-sm hover:text-orange-300 transition-colors duration-200 group"
                    >
                      <EnvelopeSimple
                        size={14}
                        weight="fill"
                        className="flex-shrink-0 mt-0.5 group-hover:text-orange-300"
                      />
                      <span className="break-all">{addr}</span>
                    </a>
                  </li>
                ),
              )}
              {/* WhatsApp */}
              <li>
                <a
                  href={"https://wa.me/33749169972"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/75 text-sm hover:text-[#25D366] transition-colors duration-200"
                >
                  <WhatsappLogo
                    size={14}
                    weight="fill"
                    className="flex-shrink-0"
                  />
                  +33 7 49 16 99 72
                </a>
              </li>
              {/* Localisation */}
              <li className="flex items-center gap-2.5 text-white/65 text-sm">
                <MapPin size={14} weight="fill" className="flex-shrink-0" />
                France
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* ── Barre bas ── */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs text-center sm:text-left">
            &copy; {year} MD Transition. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link
              href="/mentions-legales"
              className="text-white/60 hover:text-orange-300 transition-colors"
            >
              Mentions légales
            </Link>
            <span className="text-white/15">|</span>
            <Link
              href="/politique-confidentialite"
              className="text-white/60 hover:text-orange-300 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
