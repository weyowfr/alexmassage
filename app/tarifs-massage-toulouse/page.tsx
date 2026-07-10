import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PriceLine from "@/components/massage/PriceLine";

export const metadata: Metadata = {
  title: "Tarifs massage à domicile Toulouse — solo & duo | Alex Massage",
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

const offerCatalogLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Tarifs massage à domicile à Toulouse",
  itemListElement: [
    { "@type": "Offer", name: "Solo — Découverte 30 min (californien)", price: "30", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Solo — 45 min", price: "50", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Solo — 1 h", price: "60", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Solo — 1 h 30", price: "85", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo — 45 min", price: "100", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo — 1 h", price: "120", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Duo — 1 h 30", price: "170", priceCurrency: "EUR" },
  ],
};

export default function Tarifs() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={offerCatalogLd} />
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
              <Link
                href="/contact"
                className="inline-flex items-center mt-[30px] bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
              >
                Prendre rendez‑vous
              </Link>
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
                et ses alentours.
              </p>
              <div>
                <PriceLine label="Duo · 45 min" price="100 €" size={23} strong />
                <PriceLine label="Duo · 1 heure" price="120 €" size={23} strong />
                <PriceLine label="Duo · 1 h 30" price="170 €" size={23} strong />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center mt-[30px] bg-transparent text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[13px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
              >
                Réserver un duo
              </Link>
            </div>
          </div>
        </section>

        {/* Mention + promo */}
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
            <div className="mt-10 bg-night rounded-[4px] p-[clamp(28px,4vw,44px)] flex flex-wrap gap-5 items-center justify-center text-left">
              <div className="flex-[1_1_300px]">
                <p className="text-[12px] tracking-[.2em] uppercase text-goldlight m-0 mb-[10px] font-semibold">
                  Pack Bien‑Être · jusqu&apos;au 31/12/2025
                </p>
                <p className="font-serif text-[clamp(22px,3vw,32px)] text-linen m-0">
                  2 séances achetées{" "}
                  <span className="italic text-goldlight">= 1 offerte</span>
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gold text-night font-bold text-[13px] tracking-[.06em] uppercase px-[30px] py-[15px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
              >
                En profiter
              </Link>
            </div>
          </div>
        </section>

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
