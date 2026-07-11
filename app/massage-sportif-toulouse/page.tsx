import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SeanceAccordion from "@/components/SeanceAccordion";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BenefitCard from "@/components/massage/BenefitCard";
import Credentials from "@/components/massage/Credentials";
import Gallery from "@/components/massage/Gallery";
import IdealAside from "@/components/massage/IdealAside";
import OtherMassages from "@/components/massage/OtherMassages";
import PrepareSection from "@/components/massage/PrepareSection";
import PriceLine from "@/components/massage/PriceLine";
import TimeGuarantee from "@/components/massage/TimeGuarantee";
import { businessRef } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Massage sportif à domicile Toulouse | Alex Massage",
  description:
    "Massage sportif (deep tissue) à domicile à Toulouse : pétrissage profond, récupération, préparation à l'effort. Dès 50 €. Réservez.",
  alternates: {
    canonical: "https://www.alexmassage.fr/massage-sportif-toulouse",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Massage sportif à domicile à Toulouse — Alex Massage",
    description:
      "Le massage deep tissue qui dénoue en profondeur et accélère la récupération, chez vous à Toulouse.",
    images: ["/og-image.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage sportif à domicile",
  name: "Massage sportif (deep tissue) à domicile à Toulouse",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: businessRef,
  description:
    "Massage sportif / suédois à domicile à Toulouse : pétrissage profond pour dénouer les tensions et favoriser la récupération musculaire.",
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
    { "@type": "ListItem", position: 3, name: "Massage sportif", item: "https://www.alexmassage.fr/massage-sportif-toulouse" },
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

const SPORTS = [
  {
    t: "Course & trail",
    a: "Mollets, ischio-jambiers et fascia plantaire sollicités par les kilomètres — un travail profond des jambes pour relâcher et prévenir les blessures, avant le marathon de Toulouse ou après une sortie longue.",
  },
  {
    t: "Musculation & CrossFit",
    a: "Trapèzes, lombaires et épaules chargés séance après séance : pétrissages fermes et pressions ciblées pour défaire les nœuds et retrouver l'amplitude.",
  },
  {
    t: "Rugby & sports de contact",
    a: "Après les impacts, un travail global de décompression musculaire — cuisses, dos, nuque — pour accélérer la récupération entre deux matchs.",
  },
  {
    t: "Vélo & sports d'endurance",
    a: "Quadriceps, psoas et nuque figés par la position : étirements et pressions profondes pour relancer la circulation et délier les chaînes musculaires.",
  },
];

export default function MassageSportif() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="massages" />

      <main>
        <PageHero
          kicker="Massage sportif"
          title="Massage sportif à domicile à Toulouse"
          crumb="Massage sportif"
          image="/images/massage-sportif.webp"
          imageAlt="Pétrissage profond du dos, massage sportif"
        />

        <Credentials />

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
                Issu du massage suédois et aussi appelé «{" "}
                <strong className="text-cocoa font-semibold">
                  Deep Tissue
                </strong>{" "}
                », le massage sportif est une technique puissante qui cible les
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

        {/* Cas d'usage par sport */}
        <section
          aria-labelledby="h-sued-sports"
          className="bg-sand py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Selon votre pratique
            </p>
            <h2
              id="h-sued-sports"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[20ch]"
            >
              Un travail adapté à votre sport
            </h2>
            <p
              data-reveal="140"
              className="mt-5 mb-0 text-taupe text-[16.5px] leading-[1.78] max-w-[62ch]"
            >
              Avant l&apos;effort pour préparer les muscles, ou dans les 24 à
              48 heures qui suivent pour accélérer la récupération — le
              protocole se cale sur votre discipline et votre calendrier.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(20px,2.4vw,32px)] mt-[clamp(32px,4vw,48px)]">
              {SPORTS.map((s, i) => (
                <div
                  key={s.t}
                  data-reveal={i ? String(i * 90) : ""}
                  className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7"
                >
                  <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                    {s.t}
                  </h3>
                  <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                    {s.a}
                  </p>
                </div>
              ))}
            </div>
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

        <PrepareSection />

        <OtherMassages exclude="sued" headingId="h-sued-autres" />

        <BookingForm variant="massage" preset="Massage suédois / sportif" />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
