import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Massage californien à domicile Toulouse — dès 30 € | Alex Massage",
  description:
    "Massage relaxant / californien à domicile à Toulouse : mouvements lents et enveloppants pour un lâcher-prise total. Solo dès 30 €, duo dès 100 €. Réservez.",
  alternates: {
    canonical: "https://www.alexmassage.fr/massage-californien-toulouse",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Massage californien à domicile à Toulouse — Alex Massage",
    description:
      "Le massage relaxant qui apaise le corps et l'esprit, chez vous à Toulouse. Dès 30 €.",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage relaxant / californien à domicile",
  name: "Massage relaxant / californien à domicile à Toulouse",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Alex Massage",
    telephone: "+33771838010",
    areaServed: "Toulouse",
  },
  description:
    "Massage californien à domicile à Toulouse : mouvements lents et enveloppants pour une relaxation profonde, en solo ou en duo.",
  offers: [
    { "@type": "Offer", name: "Découverte 30 min", price: "30", priceCurrency: "EUR" },
    { "@type": "Offer", name: "45 min", price: "50", priceCurrency: "EUR" },
    { "@type": "Offer", name: "1 h", price: "60", priceCurrency: "EUR" },
    { "@type": "Offer", name: "1 h 30", price: "85", priceCurrency: "EUR" },
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
    { "@type": "ListItem", position: 3, name: "Massage californien", item: "https://www.alexmassage.fr/massage-californien-toulouse" },
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
        text: "J'arrive 15 à 20 minutes avant l'heure prévue pour installer la table de massage et préparer les accessoires — huiles, serviettes chaudes, musique d'ambiance.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule l'échange et la préparation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous prenons un moment pour échanger sur vos attentes, vos zones de tension et vos éventuelles contre-indications, afin d'adapter précisément le massage.",
      },
    },
    {
      "@type": "Question",
      name: "Comment sont choisies les huiles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je vous propose une sélection d'huiles végétales et essentielles ; ensemble nous choisissons celle qui vous correspond, chauffée à la juste température.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se passe l'installation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous vous installez sous une serviette douce, dans une ambiance tamisée et chaleureuse pensée pour le lâcher-prise.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le massage débute par des gestes lents puis s'intensifie selon vos besoins. Je reste à l'écoute de vos réactions tout au long de la séance.",
      },
    },
    {
      "@type": "Question",
      name: "Et après la séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je vous laisse revenir à votre rythme avec un verre d'eau, et quelques conseils simples pour prolonger les bienfaits.",
      },
    },
  ],
};

export default function MassageCalifornien() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="massages" />

      <main>
        <PageHero
          kicker="Massage relaxant"
          title="Massage relaxant / Californien à Toulouse"
          crumb="Massage californien"
          image="/images/table-massage-serviettes.jpeg"
          imageAlt="Serviettes roulées sur la table de massage, ambiance chaleureuse"
        />

        {/* Intro + panneau idéal pour */}
        <section
          aria-labelledby="h-cali-intro"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(36px,5vw,72px)]">
            <div className="flex-[1_1_420px] min-w-[320px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Le protocole
              </p>
              <h2
                id="h-cali-intro"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[16ch]"
              >
                Le lâcher‑prise, geste après geste
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Aussi appelé « massage relaxant », le californien est une
                technique douce et enveloppante, née en Californie dans les
                années 1970 pour sa capacité à induire une{" "}
                <strong className="text-cocoa font-semibold">
                  relaxation profonde
                </strong>
                .
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Lissages, pétrissages légers et drainages s&apos;enchaînent
                avec une pression douce à modérée. Chaque geste est pensé pour
                détendre les muscles et apaiser l&apos;esprit — la lumière
                tamisée et la musique feutrée installent, dès les premières
                minutes, un état de calme profond.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Le{" "}
                <strong className="text-cocoa font-semibold">
                  massage duo californien
                </strong>{" "}
                se partage à deux — en couple, entre amis ou en famille — pour
                vivre, en parallèle, un moment de bien‑être commun et une
                sérénité inégalées.
              </p>
            </div>
            <IdealAside
              items={[
                "Relaxation profonde",
                "Détente du corps",
                "Apaisement de l'esprit",
                "Lâcher‑prise total",
              ]}
              facts={[
                { dt: "Durée", dd: "30 min → 1 h 30" },
                { dt: "Formule", dd: "Solo & Duo" },
                { dt: "Lieu", dd: "À domicile · Toulouse 30 km" },
              ]}
            />
          </div>
        </section>

        <Gallery
          label="Galerie massage californien"
          images={[
            {
              src: "/images/massage-californien.jpeg",
              alt: "Dos massé, glisse d'huile aux mouvements lents",
            },
            {
              src: "/images/massage-jambes.png",
              alt: "Massage enveloppant des jambes, lumière douce",
            },
            {
              src: "/images/table-massage-serviettes.jpeg",
              alt: "Table préparée, serviettes moelleuses et huiles",
            },
          ]}
        />

        {/* Bienfaits */}
        <section
          aria-labelledby="h-cali-bienfaits"
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
              id="h-cali-bienfaits"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0 mx-auto text-center max-w-[22ch]"
            >
              Ce que le massage californien apporte à votre corps
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,3vw,44px)] mt-[clamp(40px,5vw,64px)]">
              <BenefitCard
                badge="01"
                title="Réduction du stress"
                text="Aide à calmer l'esprit et à apaiser les tensions nerveuses accumulées."
              />
              <BenefitCard
                badge="02"
                title="Meilleure circulation"
                text="Favorise l'irrigation des tissus grâce aux manœuvres de drainage."
                delay={100}
              />
              <BenefitCard
                badge="03"
                title="Détente musculaire"
                text="Soulage les tensions et redonne de la souplesse au corps."
                delay={200}
              />
              <BenefitCard
                badge="04"
                title="Sommeil réparateur"
                text="Un lâcher‑prise profond qui prépare à un repos de qualité."
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section
          aria-labelledby="h-cali-tarifs"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto flex flex-wrap gap-[clamp(40px,6vw,80px)]">
            <div className="flex-[1_1_360px] min-w-[300px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Solo
              </p>
              <h2
                id="h-cali-tarifs"
                className="font-serif font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.1] text-ink m-0 mb-[26px]"
              >
                Tarifs à domicile
              </h2>
              <div>
                <PriceLine label="Découverte · 30 min" price="30 €" />
                <PriceLine label="Formule · 45 min" price="50 €" />
                <PriceLine label="Formule · 1 heure" price="60 €" />
                <PriceLine label="Formule · 1 h 30" price="85 €" />
              </div>
              <a
                href="#reserver"
                className="inline-flex items-center mt-[30px] bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-[30px] py-[15px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
              >
                Prendre rendez‑vous
              </a>
            </div>

            <div className="flex-[1_1_360px] min-w-[300px]" data-reveal="140">
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Duo
              </p>
              <h2 className="font-serif font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.1] text-ink m-0 mb-[26px]">
                À deux, en parallèle
              </h2>
              <div>
                <PriceLine label="Duo · 45 min" price="100 €" />
                <PriceLine label="Duo · 1 heure" price="120 €" />
                <PriceLine label="Duo · 1 h 30" price="170 €" />
              </div>
              <a
                href="#reserver"
                className="inline-flex items-center mt-[30px] bg-transparent text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[13px] tracking-[.06em] uppercase px-[30px] py-[15px] rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
              >
                Réserver un duo
              </a>
            </div>
          </div>
          <TimeGuarantee />
        </section>

        <SeanceAccordion />

        <OtherMassages exclude="cali" headingId="h-cali-autres" />

        <BookingForm
          variant="massage"
          preset="Massage californien (relaxant)"
        />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
