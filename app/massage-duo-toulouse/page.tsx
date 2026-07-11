import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BenefitCard from "@/components/massage/BenefitCard";
import Credentials from "@/components/massage/Credentials";
import Gallery from "@/components/massage/Gallery";
import IdealAside from "@/components/massage/IdealAside";
import OtherMassages from "@/components/massage/OtherMassages";
import PriceLine from "@/components/massage/PriceLine";
import TimeGuarantee from "@/components/massage/TimeGuarantee";
import { businessRef } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Massage duo à domicile Toulouse — dès 100 € | Alex Massage",
  description:
    "Massage duo à domicile à Toulouse : deux tables, deux praticiens, massés ensemble chez vous. En couple ou entre proches, dès 100 €. Réservez votre duo.",
  alternates: {
    canonical: "https://www.alexmassage.fr/massage-duo-toulouse",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Massage duo à domicile à Toulouse — Alex Massage",
    description:
      "Deux tables, deux praticiens, chez vous : le massage duo qui se vit vraiment ensemble. Dès 100 €.",
    images: ["/og-image.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage duo à domicile",
  name: "Massage duo à domicile à Toulouse",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: businessRef,
  description:
    "Massage duo à domicile à Toulouse : deux tables, deux praticiens, deux massages simultanés dans la même pièce, en couple ou entre proches.",
  offers: [
    { "@type": "Offer", name: "Duo 45 min", price: "100", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo 1 h", price: "120", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo 1 h 30", price: "170", priceCurrency: "EUR" },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.alexmassage.fr/" },
    { "@type": "ListItem", position: 2, name: "Mes massages", item: "https://www.alexmassage.fr/mes-massages-toulouse" },
    { "@type": "ListItem", position: 3, name: "Massage duo", item: "https://www.alexmassage.fr/massage-duo-toulouse" },
  ],
};

const FAQ = [
  {
    q: "Sommes-nous massés en même temps ou l'un après l'autre ?",
    a: "En même temps. J'interviens avec une masseuse professionnelle : deux tables installées côte à côte dans la même pièce, deux massages simultanés du début à la fin. C'est ce qui fait du duo un vrai moment partagé — et non deux séances qui se succèdent.",
  },
  {
    q: "Quelle place faut-il prévoir chez soi ?",
    a: "Un espace d'environ 3 m × 4 m dégagé suffit pour installer les deux tables — un salon dont on pousse la table basse convient très bien. Nous apportons tout le reste : tables, draps, serviettes, huiles et musique.",
  },
  {
    q: "Peut-on choisir chacun un massage différent ?",
    a: "Oui. Chaque personne choisit son protocole (californien relaxant, abhyanga énergétique ou suédois sportif) et la pression qui lui convient. Les deux séances restent synchronisées sur la même durée.",
  },
  {
    q: "Pour quelles occasions réserver un massage duo ?",
    a: "Anniversaire de couple, Saint-Valentin, moment mère-fille ou entre amis, EVJF, ou simplement une parenthèse à deux sans avoir à sortir de chez soi. La carte cadeau duo est aussi une très belle attention.",
  },
  {
    q: "Dans quelles communes vous déplacez-vous ?",
    a: "À Toulouse et dans un rayon de 30 km : Muret, Colomiers, Blagnac, Tournefeuille, Balma… Un peu plus loin ? Appelez-moi, on trouvera une solution.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function MassageDuo() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="massages" />

      <main>
        <PageHero
          kicker="Massage duo"
          title="Massage duo à domicile à Toulouse"
          crumb="Massage duo"
          image="/images/salle-duo.jpeg"
          imageAlt="Deux tables de massage côte à côte, prêtes pour un duo"
        />

        <Credentials />

        {/* Intro + panneau idéal pour */}
        <section
          aria-labelledby="h-duo-intro"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(36px,5vw,72px)]">
            <div className="flex-[1_1_420px] min-w-[320px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                L&apos;expérience
              </p>
              <h2
                id="h-duo-intro"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[16ch]"
              >
                Deux tables, deux praticiens, chez vous
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Contrairement aux instituts qui vous reçoivent en cabine, le
                massage duo Alex Massage vient à vous :{" "}
                <strong className="text-cocoa font-semibold">
                  deux tables installées côte à côte dans votre salon, deux
                  praticiens, deux massages simultanés
                </strong>
                . Vous vivez le même moment, au même rythme, sans quitter votre
                cocon.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                J&apos;interviens avec une masseuse professionnelle avec qui je
                travaille régulièrement. Nous arrivons 20 minutes avant la
                séance avec tables, draps, serviettes, huiles et musique — vous
                n&apos;avez rien à préparer, sinon un peu d&apos;espace.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Chacun choisit son protocole —{" "}
                <strong className="text-cocoa font-semibold">
                  californien relaxant, abhyanga énergétique ou suédois sportif
                </strong>{" "}
                — et sa pression. En couple, entre amis, en famille : le duo
                s&apos;adapte à votre binôme.
              </p>
            </div>
            <IdealAside
              items={[
                "Couples & Saint-Valentin",
                "Moments mère-fille",
                "Entre amis · EVJF",
                "Cadeau à partager",
              ]}
              facts={[
                { dt: "Durée", dd: "45 min → 1 h 30" },
                { dt: "Praticiens", dd: "2 — Alexandre & une masseuse pro" },
                { dt: "Lieu", dd: "À domicile · Toulouse 30 km" },
              ]}
            />
          </div>
        </section>

        <Gallery
          label="Galerie massage duo"
          images={[
            {
              src: "/images/salle-duo.jpeg",
              alt: "Deux tables de massage dressées côte à côte",
            },
            {
              src: "/images/massage-californien.jpeg",
              alt: "Massage relaxant du dos, glisse d'huile",
            },
            {
              src: "/images/espace-detente.jpeg",
              alt: "Ambiance détente chaleureuse, esprit spa à la maison",
            },
          ]}
        />

        {/* Bienfaits */}
        <section
          aria-labelledby="h-duo-bienfaits"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4 text-center"
            >
              Pourquoi à deux
            </p>
            <h2
              id="h-duo-bienfaits"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0 mx-auto text-center max-w-[22ch]"
            >
              Ce que le massage duo change vraiment
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,3vw,44px)] mt-[clamp(40px,5vw,64px)]">
              <BenefitCard
                badge="01"
                title="Un moment partagé"
                text="Détente vécue ensemble, au même rythme — un souvenir commun, pas deux séances séparées."
              />
              <BenefitCard
                badge="02"
                title="Zéro logistique"
                text="Pas de trajet ni de cabine : le spa vient chez vous, tables et huiles comprises."
                delay={100}
              />
              <BenefitCard
                badge="03"
                title="Chacun son massage"
                text="Protocole et pression personnalisés pour chaque personne, sur la même durée."
                delay={200}
              />
              <BenefitCard
                badge="04"
                title="Prolonger la détente"
                text="La séance finie, vous êtes déjà à la maison — la relaxation continue toute la soirée."
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section
          aria-labelledby="h-duo-tarifs"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto flex flex-wrap gap-[clamp(40px,6vw,80px)]">
            <div className="flex-[1_1_360px] min-w-[300px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Formules duo
              </p>
              <h2
                id="h-duo-tarifs"
                className="font-serif font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.1] text-ink m-0 mb-[26px]"
              >
                Tarifs à domicile, pour deux
              </h2>
              <div>
                <PriceLine label="Duo · 45 min" price="100 €" strong />
                <PriceLine label="Duo · 1 heure" price="120 €" strong />
                <PriceLine label="Duo · 1 h 30" price="170 €" strong />
              </div>
              <p className="mt-5 mb-0 text-mute text-[14px] leading-[1.6]">
                Prix pour deux personnes, déplacement et installation compris
                (Toulouse et 30 km).
              </p>
              <a
                href="#reserver"
                className="inline-flex items-center mt-[30px] bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-[30px] py-[15px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
              >
                Réserver un duo
              </a>
            </div>

            {/* FAQ visible (et crawlable) */}
            <div className="flex-[1_1_420px] min-w-[300px]" data-reveal="140">
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Vos questions
              </p>
              <h2 className="font-serif font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.1] text-ink m-0 mb-[10px]">
                Le duo, en pratique
              </h2>
              <div className="border-t border-[rgba(34,28,21,.14)] mt-4">
                {FAQ.map((f) => (
                  <details
                    key={f.q}
                    name="faq-duo"
                    className="group border-b border-[rgba(34,28,21,.14)]"
                  >
                    <summary className="flex items-center gap-4 py-5 px-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="flex-1 font-serif text-[18px] text-cocoa transition-colors duration-[400ms] group-open:text-ink">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-sans text-[22px] font-light leading-none text-bronze transition-transform duration-[400ms] group-open:rotate-45 group-open:text-gold"
                      >
                        +
                      </span>
                    </summary>
                    <p className="m-0 px-1 pb-6 text-taupe text-[15.5px] leading-[1.75] max-w-[64ch]">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <TimeGuarantee />
        </section>

        <OtherMassages headingId="h-duo-autres" />

        <BookingForm
          variant="massage"
          preset="Massage duo"
          heading="Réservez votre massage duo"
          sub="Dites-moi vos massages préférés, votre commune et vos disponibilités — je vous rappelle sous 24 h ouvrées pour caler le créneau à deux."
        />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
