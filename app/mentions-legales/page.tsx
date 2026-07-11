import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Mentions légales | Alex Massage",
  description:
    "Mentions légales du site alexmassage.fr — éditeur, hébergeur, propriété intellectuelle et données personnelles.",
  alternates: { canonical: "https://www.alexmassage.fr/mentions-legales" },
  robots: { index: true, follow: true },
};

const h2Class =
  "font-serif font-normal text-[clamp(22px,2.6vw,30px)] text-ink mt-[clamp(36px,4vw,52px)] mb-4 first:mt-0";
const pClass = "m-0 mb-4 text-taupe text-[16px] leading-[1.8]";

export default function MentionsLegales() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Informations légales"
          title="Mentions légales"
          crumb="Mentions légales"
          image="/images/table-massage-serviettes.jpeg"
          imageAlt="Table de massage et serviettes soigneusement pliées"
        />

        <section className="bg-linen py-[clamp(56px,7vw,100px)] px-[clamp(20px,5vw,64px)]">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class}>Éditeur du site</h2>
            <p className={pClass}>
              Le site <strong>alexmassage.fr</strong> est édité par Alexandre
              [NOM À COMPLÉTER], entrepreneur individuel, exerçant sous le nom
              commercial « Alex Massage ».
            </p>
            <p className={pClass}>
              SIRET : [À COMPLÉTER]
              <br />
              Siège : [ADRESSE À COMPLÉTER], Toulouse
              <br />
              Téléphone : 07 71 83 80 10
              <br />
              Email : contact@alexmassage.fr
              <br />
              Directeur de la publication : Alexandre [NOM À COMPLÉTER]
            </p>
            <p className={pClass}>
              Activité : massages de bien-être, non thérapeutiques et non
              médicaux, à domicile et en entreprise. Ces prestations ne
              s&apos;apparentent en rien à des actes de kinésithérapie ou de
              médecine.
            </p>

            <h2 className={h2Class}>Hébergement</h2>
            <p className={pClass}>
              Le site est hébergé par [HÉBERGEUR À COMPLÉTER — ex. Vercel Inc.,
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —
              vercel.com].
            </p>

            <h2 className={h2Class}>Propriété intellectuelle</h2>
            <p className={pClass}>
              L&apos;ensemble des contenus du site (textes, photographies,
              vidéos, logo, charte graphique) est la propriété exclusive de
              l&apos;éditeur, sauf mention contraire. Toute reproduction ou
              représentation, totale ou partielle, sans autorisation écrite
              préalable est interdite.
            </p>

            <h2 className={h2Class}>Données personnelles</h2>
            <p className={pClass}>
              Les informations transmises via les formulaires du site (nom,
              téléphone, email, contenu du message) sont utilisées uniquement
              pour répondre à votre demande de réservation, de carte cadeau ou
              de devis. Elles ne sont ni cédées ni vendues à des tiers, et sont
              conservées au maximum 3 ans après le dernier contact.
            </p>
            <p className={pClass}>
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données. Pour l&apos;exercer, écrivez à{" "}
              <a
                href="mailto:contact@alexmassage.fr"
                className="text-forest font-semibold hover:text-bronze"
              >
                contact@alexmassage.fr
              </a>
              . Vous pouvez également introduire une réclamation auprès de la
              CNIL (cnil.fr).
            </p>
            <p className={pClass}>
              Pour en savoir plus sur les traceurs utilisés par ce site,
              consultez la{" "}
              <Link
                href="/politique-cookies"
                className="text-forest font-semibold hover:text-bronze"
              >
                politique de cookies
              </Link>
              .
            </p>

            <h2 className={h2Class}>Médiation de la consommation</h2>
            <p className={pClass}>
              Conformément à l&apos;article L.612-1 du Code de la consommation,
              tout consommateur a le droit de recourir gratuitement à un
              médiateur de la consommation en vue de la résolution amiable
              d&apos;un litige. Médiateur compétent : [À COMPLÉTER].
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
