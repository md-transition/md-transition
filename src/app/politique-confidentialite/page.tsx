import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données de MD Transition.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy mb-8">
          Politique de confidentialité
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-card text-text-gray space-y-6">
          <section>
            <h2 className="text-navy font-bold text-xl mb-3">
              1. Collecte des données
            </h2>
            <p className="leading-relaxed">
              MD Transition collecte uniquement les données personnelles que vous
              nous transmettez volontairement via le formulaire de contact :
              prénom, nom, adresse email, numéro de téléphone (optionnel) et
              contenu de votre message.
            </p>
          </section>

          <section>
            <h2 className="text-navy font-bold text-xl mb-3">
              2. Utilisation des données
            </h2>
            <p className="leading-relaxed">
              Ces données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Traiter et répondre à votre demande de contact</li>
              <li>Vous envoyer une confirmation de réception</li>
              <li>Vous proposer un accompagnement adapté à vos besoins</li>
            </ul>
          </section>

          <section>
            <h2 className="text-navy font-bold text-xl mb-3">
              3. Conservation des données
            </h2>
            <p className="leading-relaxed">
              Vos données personnelles sont conservées pendant une durée maximale
              de 3 ans à compter de notre dernier échange. Au-delà, elles sont
              supprimées ou anonymisées.
            </p>
          </section>

          <section>
            <h2 className="text-navy font-bold text-xl mb-3">
              4. Partage des données
            </h2>
            <p className="leading-relaxed">
              Vos données ne sont jamais vendues, louées ou partagées avec des
              tiers à des fins commerciales. Elles peuvent être transmises à
              des prestataires techniques nécessaires au fonctionnement du site,
              dans le cadre de contrats garantissant leur protection.
            </p>
          </section>

          <section>
            <h2 className="text-navy font-bold text-xl mb-3">
              5. Vos droits (RGPD)
            </h2>
            <p className="leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a
                href="mailto:contact@md-transition.fr"
                className="text-orange hover:text-orange-600"
              >
                contact@md-transition.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-navy font-bold text-xl mb-3">6. Cookies</h2>
            <p className="leading-relaxed">
              Ce site utilise des cookies techniques essentiels au fonctionnement
              du site uniquement. Aucun cookie de tracking ou de publicité n&apos;est
              utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-navy font-bold text-xl mb-3">7. Contact DPO</h2>
            <p className="leading-relaxed">
              Pour toute question relative à la protection de vos données,
              contactez notre responsable RGPD :{" "}
              <a
                href="mailto:rgpd@md-transition.fr"
                className="text-orange hover:text-orange-600 font-medium transition-colors"
              >
                rgpd@md-transition.fr
              </a>
            </p>
          </section>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs text-gray-400">
              Dernière mise à jour : avril 2026
            </p>
            <a
              href="/mentions-legales"
              className="text-xs text-orange hover:text-orange-600 transition-colors"
            >
              Voir les mentions légales →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
