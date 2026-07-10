import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SeanceAccordion from "@/components/SeanceAccordion";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BenefitCard from "@/components/massage/BenefitCard";
import Gallery from "@/components/massage/Gallery";
import IdealAside from "@/components/massage/IdealAside";
import OtherMassages from "@/components/massage/OtherMassages";
import PriceLine from "@/components/massage/PriceLine";
import TimeGuarantee from "@/components/massage/TimeGuarantee";

export const metadata: Metadata = {
  title: "Massage Abhyanga à domicile Toulouse | Alex Massage",
  description:
    "Massage énergétique Abhyanga à domicile à Toulouse : huile chaude, sept chakras, rééquilibrage ayurvédique profond. Formules dès 50 €. Réservez votre séance.",
  alternates: {
    canonical: "https://www.alexmassage.fr/massage-abhyanga-toulouse",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Massage Abhyanga à domicile à Toulouse — Alex Massage",
    description:
      "Le massage ayurvédique à l'huile chaude qui rééquilibre le corps et l'esprit, chez vous à Toulouse.",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage énergétique / abhyanga à domicile",
  name: "Massage énergétique / abhyanga à domicile à Toulouse",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Alex Massage",
    telephone: "+33771838010",
    areaServed: "Toulouse",
  },
  description:
    "Massage ayurvédique Abhyanga à domicile à Toulouse : huile chaude, sept chakras et rééquilibrage énergétique profond.",
  offers: [
    { "@type": "Offer", name: "45 min", price: "50", priceCurrency: "EUR" },
    { "@type": "Offer", name: "1 h", price: "60", priceCurrency: "EUR" },
    { "@type": "Offer", name: "1 h 30", price: "85", priceCurrency: "EUR" },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.alexmassage.fr/" },
    { "@type": "ListItem", position: 2, name: "Mes massages", item: "https://www.alexmassage.fr/mes-massages-toulouse" },
    { "@type": "ListItem", position: 3, name: "Massage abhyanga", item: "https://www.alexmassage.fr/massage-abhyanga-toulouse" },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Que se passe-t-il avant la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "J'arrive 15 à 20 minutes avant pour installer la table et préparer les huiles chaudes, serviettes et musique d'ambiance.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se choisissent les huiles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les huiles sont choisies selon votre constitution (dosha) et chauffées avec soin avant d'être appliquées sur l'ensemble du corps.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lissages, étirements doux et percussions rythmées stimulent la circulation des énergies et harmonisent les sept chakras.",
      },
    },
    {
      "@type": "Question",
      name: "À qui s'adresse l'Abhyanga ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À toute personne souhaitant se rééquilibrer, retrouver de la vitalité et vivre une relaxation profonde, physique et émotionnelle.",
      },
    },
    {
      "@type": "Question",
      name: "Et après la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je vous laisse revenir à votre rythme avec un verre d'eau, et quelques conseils pour prolonger les bienfaits du massage.",
      },
    },
  ],
};

export default function MassageAbhyanga() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="massages" />

      <main>
        <PageHero
          kicker="Massage énergétique"
          title="Massage énergétique / Abhyanga à Toulouse"
          crumb="Massage abhyanga"
          image="/images/massage-abhyanga.jpeg"
          imageAlt="Huile chaude dorée versée sur le dos, ambiance ayurvédique"
        />

        <section
          aria-labelledby="h-abhy-intro"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(36px,5vw,72px)]">
            <div className="flex-[1_1_420px] min-w-[320px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Le protocole
              </p>
              <h2
                id="h-abhy-intro"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[16ch]"
              >
                Rééquilibrer les énergies, corps et esprit
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                L&apos;Abhyanga est une pratique ancestrale de l&apos;
                <strong className="text-cocoa font-semibold">Ayurvéda</strong>,
                la médecine traditionnelle indienne. Réalisé avec une huile
                chaude infusée de plantes, il harmonise les{" "}
                <strong className="text-cocoa font-semibold">
                  sept chakras
                </strong>{" "}
                et favorise une profonde détente physique et émotionnelle.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Chaque séance est une expérience holistique : lissages,
                étirements doux et percussions rythmées stimulent la
                circulation des énergies et aident à débloquer ce qui stagne.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Les huiles sont choisies selon votre constitution (dosha) et
                chauffées avec soin. Les gestes, précis et enveloppants, vous
                transportent peu à peu dans un état de{" "}
                <strong className="text-cocoa font-semibold">
                  relaxation profonde
                </strong>
                .
              </p>
            </div>
            <IdealAside
              items={[
                "Bien‑être physique & émotionnel",
                "Rééquilibrage énergétique",
                "Vitalité retrouvée",
                "Se relaxer en profondeur",
              ]}
              facts={[
                { dt: "Durée", dd: "45 min → 1 h 30" },
                { dt: "Huile", dd: "Chaude, selon dosha" },
                { dt: "Lieu", dd: "À domicile · Toulouse 30 km" },
              ]}
            />
          </div>
        </section>

        <Gallery
          label="Galerie massage abhyanga"
          images={[
            {
              src: "/images/massage-abhyanga.jpeg",
              alt: "Mains huilées sur le dos, reflets dorés",
            },
            {
              src: "/images/institut-muret.jpeg",
              alt: "Cabine de soin apaisante, décor végétal",
            },
            {
              src: "/images/massage-jambes.png",
              alt: "Massage des jambes à l'huile chaude",
            },
          ]}
        />

        <section
          aria-labelledby="h-abhy-bienfaits"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4 text-center"
            >
              Les bienfaits
            </p>
            <h2
              id="h-abhy-bienfaits"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0 mx-auto text-center max-w-[22ch]"
            >
              Ce que l&apos;Abhyanga apporte à votre énergie
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,3vw,44px)] mt-[clamp(40px,5vw,64px)]">
              <BenefitCard
                badge="01"
                title="Rééquilibrage énergétique"
                text="Harmonise les chakras et rétablit l'équilibre entre le corps et l'esprit."
              />
              <BenefitCard
                badge="02"
                title="Système immunitaire"
                text="Stimule la circulation sanguine et favorise l'élimination des toxines."
                delay={100}
              />
              <BenefitCard
                badge="03"
                title="Détente musculaire"
                text="Apaise les tensions et offre une relaxation à la fois physique et mentale."
                delay={200}
              />
              <BenefitCard
                badge="04"
                title="Vitalité accrue"
                text="Revitalise l'énergie vitale, apportant calme et sérénité intérieurs."
                delay={300}
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="h-abhy-tarifs"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[720px] mx-auto text-center">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Tarifs
            </p>
            <h2
              id="h-abhy-tarifs"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(28px,3.8vw,46px)] leading-[1.1] text-ink m-0"
            >
              Formules à domicile
            </h2>
            <div data-reveal="150" className="mt-[34px] text-left">
              <PriceLine label="Formule · 45 min" price="50 €" />
              <PriceLine label="Formule · 1 heure" price="60 €" />
              <PriceLine label="Formule · 1 h 30" price="85 €" />
            </div>
            <a
              href="#reserver"
              data-reveal="200"
              className="inline-flex items-center mt-8 bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-[34px] py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
            >
              Prendre rendez‑vous
            </a>
            <TimeGuarantee center reveal={260} />
          </div>
        </section>

        <SeanceAccordion />

        <OtherMassages exclude="abhy" headingId="h-abhy-autres" />

        <BookingForm
          variant="massage"
          preset="Massage abhyanga (énergétique)"
        />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
