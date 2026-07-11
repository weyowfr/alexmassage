import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Politique de cookies | Alex Massage",
  description:
    "Politique de cookies du site alexmassage.fr — quels traceurs sont utilisés et comment les gérer.",
  alternates: { canonical: "https://www.alexmassage.fr/politique-cookies" },
  robots: { index: true, follow: true },
};

const h2Class =
  "font-serif font-normal text-[clamp(22px,2.6vw,30px)] text-ink mt-[clamp(36px,4vw,52px)] mb-4 first:mt-0";
const pClass = "m-0 mb-4 text-taupe text-[16px] leading-[1.8]";

export default function PolitiqueCookies() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Confidentialité"
          title="Politique de cookies"
          crumb="Politique de cookies"
          image="/images/espace-detente.jpeg"
          imageAlt="Espace détente chaleureux, ambiance apaisée"
        />

        <section className="bg-linen py-[clamp(56px,7vw,100px)] px-[clamp(20px,5vw,64px)]">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class}>L&apos;essentiel</h2>
            <p className={pClass}>
              Le site <strong>alexmassage.fr</strong> ne dépose actuellement{" "}
              <strong>aucun cookie publicitaire, de mesure d&apos;audience ou
              de suivi</strong>. Aucune bannière de consentement n&apos;est
              donc nécessaire : il n&apos;y a rien à accepter ni à refuser.
            </p>

            <h2 className={h2Class}>Cookies techniques</h2>
            <p className={pClass}>
              Seuls des cookies ou stockages strictement nécessaires au
              fonctionnement du site peuvent être déposés par notre hébergeur
              (répartition de charge, sécurité). Ils sont exemptés de
              consentement au sens des lignes directrices de la CNIL et ne
              permettent pas de vous identifier.
            </p>

            <h2 className={h2Class}>Services tiers</h2>
            <p className={pClass}>
              Les liens vers WhatsApp présents sur le site ouvrent
              l&apos;application ou le site de WhatsApp (Meta), qui applique
              alors sa propre politique de confidentialité. Aucun traceur de
              Meta n&apos;est intégré aux pages d&apos;alexmassage.fr.
            </p>

            <h2 className={h2Class}>Si cela change</h2>
            <p className={pClass}>
              Si un outil de mesure d&apos;audience ou tout autre traceur
              soumis à consentement venait à être ajouté, cette page serait
              mise à jour et une bannière de consentement conforme au RGPD
              serait mise en place avant tout dépôt de cookie.
            </p>

            <h2 className={h2Class}>Vos données personnelles</h2>
            <p className={pClass}>
              Le traitement des données transmises via les formulaires est
              décrit dans les{" "}
              <Link
                href="/mentions-legales"
                className="text-forest font-semibold hover:text-bronze"
              >
                mentions légales
              </Link>
              . Pour toute question :{" "}
              <a
                href="mailto:contact@alexmassage.fr"
                className="text-forest font-semibold hover:text-bronze"
              >
                contact@alexmassage.fr
              </a>
              .
            </p>

            <p className={`${pClass} mt-10 text-[14px] text-mute`}>
              Dernière mise à jour : juillet 2026.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
