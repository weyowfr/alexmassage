import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BesoinsReels from "@/components/BesoinsReels";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PriceLine from "@/components/massage/PriceLine";
import { businessRef } from "@/lib/structured-data";

const FAQ = [
  {
    q: "Le déplacement est-il compris dans le prix ?",
    a: "Oui : dans un rayon de 30 km autour de Toulouse, le déplacement et l'installation (table, draps, huiles, musique) sont inclus dans le tarif affiché. Au-delà, appelez-moi — on trouvera une solution.",
  },
  {
    q: "Le temps affiché correspond-il vraiment au temps massé ?",
    a: "Oui. Le temps annoncé et payé est réellement celui pratiqué : l'installation et le rangement sont en plus. Une heure réservée, c'est une heure de massage.",
  },
  {
    q: "Quand et comment se passe le paiement ?",
    a: "Le paiement s'effectue le jour de la séance, une fois le massage terminé. Les modalités sont convenues ensemble lors de la réservation.",
  },
  {
    q: "Puis-je régler avec une carte cadeau ?",
    a: "Bien sûr : les cartes cadeaux Alex Massage, valables 1 an, s'utilisent sur toutes les formules, en solo comme en duo.",
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

export const metadata: Metadata = {
  title: "Tarifs massage à domicile Toulouse | Alex Massage",
  description:
    "Tarifs des massages à domicile à Toulouse : solo dès 30 € (découverte 30 min), duo dès 100 €. Californien, ayurvédique ou sportif. Réservez votre séance.",
  alternates: {
    canonical: "https://www.alexmassage.fr/tarifs-massage-toulouse",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Tarifs massage à domicile à Toulouse — Alex Massage",
    description:
      "Formules solo et duo, dès 30 €. Massage à domicile à Toulouse et 30 km alentour.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.alexmassage.fr/" },
    { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://www.alexmassage.fr/tarifs-massage-toulouse" },
  ],
};

/* Service + offers (itemListElement n'est pas une propriété valide sur
   OfferCatalog pour des Offer directes). */
const pricingLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage bien-être à domicile",
  name: "Massage à domicile à Toulouse — formules solo et duo",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: businessRef,
  offers: [
    { "@type": "Offer", name: "Solo — Découverte 30 min (californien)", price: "30", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Solo — 45 min", price: "50", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Solo — 1 h", price: "60", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Solo — 1 h 30", price: "85", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo — 45 min", price: "100", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo — 1 h", price: "120", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo — 1 h 30", price: "170", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Abonnement Solo — 3 × 45 min (−15 %)", price: "127.50", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Abonnement Solo — 3 × 1 h (−15 %)", price: "153", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Abonnement Solo — 3 × 1 h 30 (−15 %)", price: "216.75", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Abonnement Duo — 3 × 1 h (−15 %)", price: "306", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Abonnement Duo — 3 × 1 h 30 (−15 %)", price: "433.50", priceCurrency: "EUR" },
  ],
};

export default function Tarifs() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={pricingLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="tarifs" />

      <main>
        <PageHero
          kicker="Nos formules"
          title="Tarifs des massages à domicile à Toulouse"
          crumb="Tarifs"
          image="/images/massage-jambes.png"
          imageAlt="Mains massant à la lumière ambrée"
        />

        {/* SOLO */}
        <section
          aria-labelledby="h-solo"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(40px,5vw,72px)] items-center">
            <div className="flex-[1_1_380px] min-w-[300px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Formules Solo
              </p>
              <h2
                id="h-solo"
                className="font-serif font-normal text-[clamp(27px,3.6vw,44px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[18ch]"
              >
                Un moment de relaxation, rien que pour vous
              </h2>
              <p className="mt-[22px] mb-[30px] text-taupe text-[16.5px] leading-[1.78]">
                Californien, ayurvédique ou suédois — choisissez la durée qui
                vous correspond pour un lâcher‑prise total, à domicile à
                Toulouse et dans un rayon de 30 km.
              </p>
              <div>
                <PriceLine
                  label="Découverte · 30 min"
                  note="(californien)"
                  price="30 €"
                  size={23}
                />
                <PriceLine label="Formule · 45 min" price="50 €" size={23} />
                <PriceLine label="Formule · 1 heure" price="60 €" size={23} />
                <PriceLine label="Formule · 1 h 30" price="85 €" size={23} />
              </div>
              <a
                href="#reserver"
                className="inline-flex items-center mt-[30px] bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
              >
                Prendre rendez‑vous
              </a>
            </div>
            <div
              className="flex-[1_1_360px] min-w-[300px] relative overflow-hidden rounded-[4px] aspect-[4/5]"
              data-reveal="140"
            >
              <Image
                src="/images/massage-sportif.webp"
                alt="Massage du dos, homme détendu sur la table"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* DUO */}
        <section
          aria-labelledby="h-duo"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(40px,5vw,72px)] items-center">
            <div
              className="flex-[1_1_360px] min-w-[300px] relative overflow-hidden rounded-[4px] aspect-[4/5]"
              data-reveal
            >
              <Image
                src="/images/salle-duo.jpeg"
                alt="Salle de massage duo, deux tables côte à côte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex-[1_1_380px] min-w-[300px]" data-reveal="140">
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Formules Duo
              </p>
              <h2
                id="h-duo"
                className="font-serif font-normal text-[clamp(27px,3.6vw,44px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[18ch]"
              >
                Un moment de complicité, à deux
              </h2>
              <p className="mt-[22px] mb-[30px] text-taupe text-[16.5px] leading-[1.78]">
                Partagez un massage à deux, en parallèle — idéal pour un cadeau
                romantique ou un moment de complicité, à domicile sur Toulouse
                et ses alentours. Découvrez le déroulé complet sur la page{" "}
                <Link
                  href="/massage-duo-toulouse"
                  className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
                >
                  massage duo à Toulouse
                </Link>
                .
              </p>
              <div>
                <PriceLine label="Duo · 45 min" price="100 €" size={23} strong />
                <PriceLine label="Duo · 1 heure" price="120 €" size={23} strong />
                <PriceLine label="Duo · 1 h 30" price="170 €" size={23} strong />
              </div>
              <a
                href="#reserver"
                className="inline-flex items-center mt-[30px] bg-transparent text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[13px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
              >
                Réserver un duo
              </a>
            </div>
          </div>
        </section>

        {/* ABONNEMENT */}
        <section
          aria-labelledby="h-abo"
          className="bg-forest py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[680px] mb-[clamp(36px,4vw,56px)]">
              <p
                data-reveal
                className="text-[13px] tracking-[.24em] uppercase font-semibold text-goldlight m-0 mb-4"
              >
                Nouveau · Abonnement
              </p>
              <h2
                id="h-abo"
                data-reveal="80"
                className="font-serif font-normal text-[clamp(27px,3.6vw,44px)] leading-[1.1] tracking-[-.01em] text-linen m-0 max-w-[20ch]"
              >
                Massez-vous régulièrement, économisez 15 %
              </h2>
              <p
                data-reveal="150"
                className="mt-[22px] mb-0 text-[rgba(244,239,231,.84)] text-[16.5px] leading-[1.78]"
              >
                Le massage donne le meilleur de lui-même dans la durée. Dès 3
                séances achetées, profitez de −15 % sur votre formule — par
                exemple 3 séances d&apos;une heure à{" "}
                <strong className="text-goldlight font-semibold">153 €</strong>{" "}
                au lieu de 180 €, soit 27 € d&apos;économie. Le massage, acteur
                de votre routine bien-être.
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(20px,2.4vw,30px)]">
              {/* Carnet Solo */}
              <div
                data-reveal
                className="bg-cream border border-[rgba(34,28,21,.07)] rounded-[4px] px-[clamp(24px,3vw,36px)] py-[clamp(28px,3vw,40px)]"
              >
                <p className="text-[12px] tracking-[.2em] uppercase text-bronze font-semibold m-0 mb-1">
                  Carnet Solo · 3 séances
                </p>
                <p className="font-serif italic text-taupe text-[15px] m-0 mb-5">
                  −15 % sur votre formule habituelle
                </p>
                <PriceLine label="3 × 45 min" note="au lieu de 150 €" price="127,50 €" />
                <PriceLine label="3 × 1 heure" note="au lieu de 180 €" price="153 €" strong />
                <PriceLine label="3 × 1 h 30" note="au lieu de 255 €" price="216,75 €" />
              </div>

              {/* Carnet Duo */}
              <div
                data-reveal="120"
                className="bg-cream border border-[rgba(34,28,21,.07)] rounded-[4px] px-[clamp(24px,3vw,36px)] py-[clamp(28px,3vw,40px)]"
              >
                <p className="text-[12px] tracking-[.2em] uppercase text-bronze font-semibold m-0 mb-1">
                  Carnet Duo · 3 séances
                </p>
                <p className="font-serif italic text-taupe text-[15px] m-0 mb-5">
                  À deux, la même régularité, −15 %
                </p>
                <PriceLine label="3 × 1 heure" note="au lieu de 360 €" price="306 €" strong />
                <PriceLine label="3 × 1 h 30" note="au lieu de 510 €" price="433,50 €" />
              </div>
            </div>

            <p
              data-reveal="200"
              className="mt-8 mb-0 text-[rgba(244,239,231,.7)] text-[14px] leading-[1.7]"
            >
              Avantage réservé aux carnets d&apos;au moins 3 séances achetées.
              Séances utilisables sur 1 an, en solo comme en duo, sur tous les
              massages.
            </p>
          </div>
        </section>

        {/* Mention tarifaire */}
        <section
          aria-label="Informations tarifaires"
          className="bg-linen py-[clamp(56px,7vw,96px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[820px] mx-auto text-center" data-reveal>
            <div className="w-12 h-px bg-gold mx-auto mb-[22px]" />
            <p className="font-serif italic text-[clamp(17px,2vw,21px)] leading-[1.6] text-cocoa m-0">
              <strong className="not-italic font-semibold">
                Le temps de massage annoncé et payé est réellement celui
                pratiqué
              </strong>{" "}
              — le temps d&apos;installation est en plus. Paiement le jour de
              la séance.
            </p>
          </div>
        </section>

        {/* FAQ tarifs */}
        <section
          aria-labelledby="h-tarifs-faq"
          className="bg-sand py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[840px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Questions fréquentes
            </p>
            <h2
              id="h-tarifs-faq"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[18ch]"
            >
              Tout savoir avant de réserver
            </h2>
            <div data-reveal="160" className="mt-8 border-t border-[rgba(34,28,21,.14)]">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  name="faq-tarifs"
                  className="group border-b border-[rgba(34,28,21,.14)]"
                >
                  <summary className="flex items-center gap-4 py-5 px-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="flex-1 font-serif text-[19px] text-cocoa transition-colors duration-[400ms] group-open:text-ink">
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-sans text-[22px] font-light leading-none text-bronze transition-transform duration-[400ms] group-open:rotate-45 group-open:text-gold"
                    >
                      +
                    </span>
                  </summary>
                  <p className="m-0 px-1 pb-6 text-taupe text-[15.5px] leading-[1.75] max-w-[66ch]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <BesoinsReels bg="bg-linen" />

        <BookingForm
          variant="massage"
          heading="Réservez au tarif affiché"
          sub="Choisissez le massage, la durée et la formule — je vous rappelle sous 24 h ouvrées pour caler le créneau. Aucun supplément : déplacement et installation compris."
        />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
