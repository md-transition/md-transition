import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de MD Transition.",
  robots: { index: false },
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
        <span className="w-1 h-5 bg-orange rounded-full inline-block flex-shrink-0" />
        {title}
      </h2>
      <div className="text-text-gray text-sm leading-relaxed pl-3">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-orange/10 text-orange border border-orange/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Informations légales
          </span>
          <h1 className="text-3xl font-bold text-navy mb-2">
            Mentions légales
          </h1>
          <p className="text-text-gray text-sm">
            Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21
            juin 2004 pour la Confiance dans l&apos;économie numérique (LCEN).
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-card divide-y divide-gray-100">
          {/* Éditeur */}
          <div className="p-8">
            <Section id="editeur" title="Éditeur du site">
              <p className="mb-2">
                <strong className="text-navy">MD Transition</strong>
                <br />
                Facilitateur &amp; Partenaire pour entrepreneurs, artisans et
                professionnels de santé
              </p>
              <table className="w-full text-sm mt-3 border-collapse">
                <tbody>
                  {[
                    ["Raison sociale", "MD TRANSITION"],
                    ["Forme juridique", "SASU"],
                    ["SIRET", "993 303 031 00013"],
                    ["RCS Versailles", "993 303 031"],
                    ["N° TVA intracommunautaire", "FR41 993 303 031"],
                    [
                      "Adresse",
                      "19, rue d'Andrésy — 78700 Conflans-Sainte-Honorine",
                    ],
                    ["Email", "contact@md-transition.fr"],
                    ["Téléphone", "+33 7 49 16 99 72"],
                    ["Directeur de publication", "Martine Dorival"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-50">
                      <td className="py-2 pr-4 font-medium text-navy/70 w-1/3">
                        {label}
                      </td>
                      <td className="py-2 text-text-gray">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>
          </div>

          {/* Propriété intellectuelle */}
          <div className="p-8">
            <Section id="propriete" title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes,
                images, logos, graphismes, icônes, sons, vidéos) est la
                propriété exclusive de MD Transition ou de ses ayants droit, et
                est protégé par les lois françaises et internationales relatives
                à la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite sans
                l&apos;autorisation préalable et écrite de MD Transition.
              </p>
            </Section>
          </div>

          {/* Données personnelles */}
          <div className="p-8">
            <Section id="rgpd" title="Données personnelles (RGPD)">
              <p>
                MD Transition collecte des données personnelles uniquement via
                le formulaire de contact (prénom, nom, email, téléphone
                optionnel, message). Ces données sont utilisées exclusivement
                pour répondre à vos demandes et ne sont jamais transmises à des
                tiers à des fins commerciales.
              </p>
              <p className="mt-3">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD — UE 2016/679), vous disposez d&apos;un droit
                d&apos;accès, de rectification, d&apos;effacement, de
                portabilité et d&apos;opposition concernant vos données.
              </p>
              <p className="mt-3">
                Pour exercer ces droits ou pour toute question relative à la
                protection de vos données, contactez notre responsable RGPD :{" "}
                <a
                  href="mailto:rgpd@md-transition.fr"
                  className="text-orange hover:text-orange-600 font-medium transition-colors"
                >
                  rgpd@md-transition.fr
                </a>
              </p>
              <p className="mt-3">
                Pour plus de détails, consultez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-orange hover:text-orange-600 font-medium transition-colors"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </Section>
          </div>

          {/* Cookies */}
          <div className="p-8">
            <Section id="cookies" title="Cookies">
              <p>
                Ce site utilise uniquement des cookies techniques strictement
                nécessaires à son fonctionnement. Aucun cookie de tracking, de
                publicité ou d&apos;analyse comportementale n&apos;est déposé
                sans votre consentement.
              </p>
            </Section>
          </div>

          {/* Responsabilité */}
          <div className="p-8">
            <Section id="responsabilite" title="Limitation de responsabilité">
              <p>
                MD Transition s&apos;efforce de fournir sur ce site des
                informations aussi précises que possible. Toutefois, elle ne
                pourra être tenue responsable des omissions, des inexactitudes
                et des carences dans la mise à jour, qu&apos;elles soient de son
                fait ou du fait des tiers partenaires qui lui fournissent ces
                informations.
              </p>
              <p className="mt-3">
                Les liens hypertextes mis en place dans le cadre du site
                internet en direction d&apos;autres ressources présentes sur
                Internet ne sauraient engager la responsabilité de MD
                Transition.
              </p>
            </Section>
          </div>

          {/* Droit applicable */}
          <div className="p-8">
            <Section id="droit" title="Droit applicable et juridiction">
              <p>
                Tout litige en relation avec l&apos;utilisation du site{" "}
                <strong>md-transition.fr</strong> est soumis au droit français.
                En dehors des cas où la loi ne le permet pas, il est fait
                attribution exclusive de juridiction aux tribunaux compétents
                français.
              </p>
            </Section>
          </div>

          {/* Contact */}
          <div className="p-8">
            <Section id="contact" title="Contact">
              <p>
                Pour toute question relative aux présentes mentions légales :{" "}
                <a
                  href="mailto:contact@md-transition.fr"
                  className="text-orange hover:text-orange-600 font-medium transition-colors"
                >
                  contact@md-transition.fr
                </a>
              </p>
            </Section>
          </div>

          {/* Footer note */}
          <div className="px-8 py-5 bg-gray-50 rounded-b-2xl">
            <p className="text-xs text-gray-400">
              Dernière mise à jour : avril 2026 — Ces mentions légales sont
              susceptibles d&apos;être modifiées à tout moment ; veillez à les
              consulter régulièrement.
            </p>
          </div>
        </div>

        {/* Retour */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-orange text-sm font-medium transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
