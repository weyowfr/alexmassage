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
  title: "Massage sportif à domicile Toulouse — deep tissue | Alex Massage",
  description:
    "Massage suédois / sportif (deep tissue) à domicile à Toulouse : pétrissage profond, récupération musculaire, moins de tensions. Formules dès 50 €. Réservez.",
  alternates: {
    canonical: "https://www.alexmassage.fr/massage-suedois-sportif-toulouse",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Massage suédois / sportif à domicile à Toulouse — Alex Massage",
    description:
      "Le massage deep tissue qui dénoue en profondeur et accélère la récupération, chez vous à Toulouse.",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage suédois / sportif à domicile",
  name: "Massage suédois / sportif (deep tissue) à domicile à Toulouse",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Alex Massage",
    telephone: "+33771838010",
    areaServed: "Toulouse",
  },
  description:
    "Massage suédois / sportif à domicile à Toulouse : pétrissage profond pour dénouer les tensions et favoriser la récupération musculaire.",
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
    { "@type": "ListItem", position: 3, name: "Massage suédois / sportif", item: "https://www.alexmassage.fr/massage-suedois-sportif-toulouse" },
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
        text: "J'arrive 15 à 20 minutes avant pour installer la table de massage et préparer les accessoires nécessaires.",
      },
    },
    {
      "@type": "Question",
      name: "À qui s'adresse le massage sportif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aux sportifs comme à toute personne accumulant des tensions musculaires liées à une activité quotidienne.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La séance commence par une évaluation des zones à traiter, suivie de techniques profondes — pétrissages, pressions et étirements — pour libérer les tensions.",
      },
    },
    {
      "@type": "Question",
      name: "Le massage est-il douloureux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La pression est ferme mais toujours ajustée à votre ressenti ; je reste à l'écoute de vos réactions tout au long de la séance.",
      },
    },
    {
      "@type": "Question",
      name: "Et après la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un verre d'eau accompagne l'élimination des toxines, et quelques conseils simples aident à prolonger la récupération.",
      },
    },
  ],
};

export default function MassageSuedois() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="massages" />

      <main>
        <PageHero
          kicker="Massage sportif"
          title="Massage suédois / Sportif à Toulouse"
          crumb="Massage suédois / sportif"
          image="/images/massage-sportif.webp"
          imageAlt="Pétrissage profond du dos, massage sportif"
        />

        <section
          aria-labelledby="h-sued-intro"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(36px,5vw,72px)]">
            <div className="flex-[1_1_420px] min-w-[320px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Le protocole
              </p>
              <h2
                id="h-sued-intro"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[16ch]"
              >
                Dénouer en profondeur, récupérer plus vite
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Aussi appelé «{" "}
                <strong className="text-cocoa font-semibold">
                  Deep Tissue
                </strong>{" "}
                », le massage suédois est une technique puissante qui cible les
                couches profondes des muscles et des tissus conjonctifs. Conçu
                pour les sportifs comme pour ceux qui accumulent les tensions
                du quotidien, il aide à éliminer les nœuds et à relancer la
                circulation.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Pétrissages fermes, pressions profondes et étirements
                travaillent chaque groupe musculaire. Que vous soyez athlète de
                haut niveau ou simplement noué par le stress, le protocole
                s&apos;adapte précisément à vos besoins.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                La séance commence par une{" "}
                <strong className="text-cocoa font-semibold">
                  évaluation des zones à traiter
                </strong>
                , puis un travail ciblé pour libérer les tensions accumulées —
                et préparer le corps à de meilleures performances.
              </p>
            </div>
            <IdealAside
              items={[
                "Cibler vos tensions",
                "Soulagements musculaires",
                "Récupération physique",
                "Préparation à l'effort",
              ]}
              facts={[
                { dt: "Durée", dd: "45 min → 1 h 30" },
                { dt: "Intensité", dd: "Profonde, ajustée" },
                { dt: "Lieu", dd: "À domicile · Toulouse 30 km" },
              ]}
            />
          </div>
        </section>

        <Gallery
          label="Galerie massage sportif"
          images={[
            {
              src: "/images/massage-sportif.webp",
              alt: "Pression profonde sur le dos, travail musculaire",
            },
            {
              src: "/images/alexandre-en-seance.jpeg",
              alt: "Travail des trapèzes, mains fermes et précises",
            },
            {
              src: "/images/massage-jambes.png",
              alt: "Massage profond de la jambe sur table",
            },
          ]}
        />

        <section
          aria-labelledby="h-sued-bienfaits"
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
              id="h-sued-bienfaits"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0 mx-auto text-center max-w-[22ch]"
            >
              Ce que le massage sportif change pour vos muscles
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,3vw,44px)] mt-[clamp(40px,5vw,64px)]">
              <BenefitCard
                badge="01"
                title="Libération des tensions"
                text="Soulage efficacement les douleurs et les nœuds musculaires profonds."
              />
              <BenefitCard
                badge="02"
                title="Performances sportives"
                text="Améliore la souplesse, réduit le risque de blessure et prépare à l'effort."
                delay={100}
              />
              <BenefitCard
                badge="03"
                title="Meilleure circulation"
                text="Stimule la circulation sanguine et l'oxygénation des tissus."
                delay={200}
              />
              <BenefitCard
                badge="04"
                title="Récupération rapide"
                text="Accélère la récupération après l'effort et réduit les courbatures."
                delay={300}
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="h-sued-tarifs"
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
              id="h-sued-tarifs"
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
            <TimeGuarantee center withSetup reveal={260} />
          </div>
        </section>

        <SeanceAccordion />

        <OtherMassages exclude="sued" headingId="h-sued-autres" />

        <BookingForm variant="massage" preset="Massage suédois / sportif" />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
