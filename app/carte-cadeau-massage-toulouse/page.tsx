import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Carte cadeau massage Toulouse — dès 30 € | Alex Massage",
  description:
    "Offrez une carte cadeau massage à domicile à Toulouse : montants flexibles dès 30 €, valable 1 an, livraison instantanée. Noël, anniversaire, Saint-Valentin.",
  alternates: {
    canonical: "https://www.alexmassage.fr/carte-cadeau-massage-toulouse",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Carte cadeau massage à domicile à Toulouse — Alex Massage",
    description:
      "Le cadeau qui fait vraiment plaisir : un massage à domicile à Toulouse. Dès 30 €, valable 1 an.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.alexmassage.fr/" },
    { "@type": "ListItem", position: 2, name: "Cartes cadeaux", item: "https://www.alexmassage.fr/carte-cadeau-massage-toulouse" },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carte cadeau massage à domicile à Toulouse",
  description:
    "Carte cadeau pour un massage bien-être à domicile à Toulouse : montants flexibles, valable 1 an, livraison numérique instantanée.",
  brand: { "@type": "Brand", name: "Alex Massage" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "30",
    highPrice: "170",
    priceCurrency: "EUR",
    offerCount: "6",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la durée de validité de la carte cadeau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toutes les cartes cadeaux Alex Massage sont valables 1 an à compter de la date d'achat.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je choisir le montant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les montants sont entièrement flexibles : 30 €, 50 €, 60 € ou tout autre montant correspondant à la formule que vous souhaitez offrir.",
      },
    },
    {
      "@type": "Question",
      name: "Comment est livrée la carte cadeau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous choisissez la livraison numérique instantanée par email, ou une carte papier remise en main propre.",
      },
    },
    {
      "@type": "Question",
      name: "Le bénéficiaire choisit-il son massage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la personne qui reçoit la carte choisit le massage (relaxant, énergétique ou sportif), la durée et le créneau qui lui conviennent.",
      },
    },
    {
      "@type": "Question",
      name: "La carte cadeau est-elle valable en duo ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument : la carte peut être utilisée pour une séance solo ou duo, selon le montant offert.",
      },
    },
  ],
};

const OCCASIONS = [
  {
    title: "Noël",
    text: "Le cadeau sous le sapin qui promet un vrai moment de détente.",
    delay: "",
  },
  {
    title: "Anniversaire",
    text: "Une attention personnelle, à mille lieues du cadeau convenu.",
    delay: "100",
  },
  {
    title: "Saint‑Valentin",
    text: "Un massage duo à partager, pour un moment de complicité.",
    delay: "200",
  },
  {
    title: "Départ en retraite",
    text: "Le début d'un nouveau chapitre, sous le signe du bien‑être.",
    delay: "300",
  },
];

const FAQ_ITEMS = [
  {
    q: "Quelle est la durée de validité de la carte cadeau ?",
    a: (
      <>
        Toutes les cartes cadeaux Alex Massage sont valables{" "}
        <strong className="text-cocoa font-semibold">1 an</strong> à compter de
        la date d&apos;achat — de quoi trouver le moment idéal pour lâcher
        prise.
      </>
    ),
  },
  {
    q: "Puis‑je choisir le montant ?",
    a: (
      <>
        Oui, les montants sont entièrement flexibles : 30 €, 50 €, 60 € ou
        tout autre montant correspondant à la formule que vous souhaitez
        offrir, solo comme duo.
      </>
    ),
  },
  {
    q: "Comment est livrée la carte cadeau ?",
    a: (
      <>
        Vous choisissez la{" "}
        <strong className="text-cocoa font-semibold">
          livraison numérique instantanée
        </strong>{" "}
        par email, ou une carte papier remise en main propre.
      </>
    ),
  },
  {
    q: "Le bénéficiaire choisit‑il son massage ?",
    a: (
      <>
        Oui, la personne qui reçoit la carte choisit le massage (relaxant,
        énergétique ou sportif), la durée et le créneau qui lui conviennent.
      </>
    ),
  },
  {
    q: "La carte cadeau est‑elle valable en duo ?",
    a: (
      <>
        Absolument : la carte peut être utilisée pour une séance solo ou duo,
        selon le montant offert.
      </>
    ),
  },
];

export default function CarteCadeau() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={productLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="cartes" />

      <main>
        <PageHero
          kicker="Cartes cadeaux"
          title="Offrez un massage à domicile à Toulouse"
          crumb="Cartes cadeaux"
          image="/images/espace-detente.jpeg"
          imageAlt="Ambiance douce et chaleureuse pour offrir un massage"
        />

        {/* Intro + carte visuelle */}
        <section
          aria-labelledby="h-cadeau-intro"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(40px,5vw,72px)] items-center">
            <div className="flex-[1_1_400px] min-w-[320px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Le cadeau qui fait du bien
              </p>
              <h2
                id="h-cadeau-intro"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[16ch]"
              >
                Offrez une parenthèse de bien‑être
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Pour un anniversaire, Noël, la Saint‑Valentin, un départ en
                retraite ou simplement pour faire plaisir : offrez un massage
                à domicile à Toulouse. Un cadeau sensoriel, mémorable, à des
                années‑lumière du énième objet oublié dans un tiroir.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                La personne qui la reçoit choisit son massage, sa durée et son
                créneau. Vous, vous n&apos;avez qu&apos;à choisir le montant.
              </p>
              <a
                href="#reserver"
                className="inline-flex items-center mt-8 bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-[34px] py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
              >
                Commander une carte cadeau
              </a>
            </div>
            <div className="flex-[1_1_360px] min-w-[300px]" data-reveal="140">
              <div
                className="relative rounded-lg p-[clamp(30px,4vw,44px)] aspect-[1.6/1] flex flex-col justify-between shadow-[0_40px_70px_-40px_rgba(34,28,21,.7)] overflow-hidden"
                style={{
                  background:
                    "radial-gradient(120% 120% at 15% 10%, #2c2013 0%, #17120E 62%)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 top-1/2 -translate-y-1/2 grid place-items-center pointer-events-none"
                >
                  <div className="w-[200px] h-[200px] border border-[rgba(216,165,90,.3)] rounded-full animate-[breathe_11s_cubic-bezier(.37,0,.63,1)_infinite]" />
                  <div className="absolute w-[120px] h-[120px] border border-[rgba(216,165,90,.42)] rounded-full animate-[breathe_11s_cubic-bezier(.37,0,.63,1)_infinite] [animation-delay:-1.5s]" />
                </div>
                <div className="relative flex justify-between items-start">
                  <span className="font-serif font-medium text-[15px] tracking-[.2em] uppercase text-linen">
                    Alex Massage
                  </span>
                  <span className="text-[10.5px] tracking-[.2em] uppercase text-goldlight">
                    Carte cadeau
                  </span>
                </div>
                <div className="relative">
                  <p className="font-serif italic text-[clamp(20px,3vw,28px)] text-linen m-0 mb-[6px] leading-[1.2]">
                    Un moment de bien‑être
                  </p>
                  <p className="text-[12.5px] tracking-[.06em] text-[rgba(244,239,231,.7)] m-0">
                    Massage à domicile · Toulouse &amp; région · Valable 1 an
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section
          aria-labelledby="h-occasions"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4 text-center"
            >
              Pour chaque occasion
            </p>
            <h2
              id="h-occasions"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0 mx-auto mb-12 text-center max-w-[20ch]"
            >
              Le bon cadeau, au bon moment
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(16px,2vw,24px)]">
              {OCCASIONS.map((o) => (
                <div
                  key={o.title}
                  data-reveal={o.delay}
                  className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-[30px]"
                >
                  <h3 className="font-serif font-normal text-[23px] text-ink m-0 mb-[10px]">
                    {o.title}
                  </h3>
                  <p className="m-0 text-taupe text-[15px] leading-[1.65]">
                    {o.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Montants + réassurance */}
        <section
          aria-labelledby="h-montants"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <div className="max-w-[640px] mx-auto mb-12 text-center">
              <p
                data-reveal
                className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
              >
                Montants flexibles
              </p>
              <h2
                id="h-montants"
                data-reveal="80"
                className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0"
              >
                Vous choisissez le montant
              </h2>
            </div>
            <div
              className="flex flex-wrap gap-4 justify-center"
              data-reveal="120"
            >
              {["30 €", "50 €", "60 €"].map((m) => (
                <div
                  key={m}
                  className="border border-[rgba(192,135,60,.5)] rounded-[4px] px-10 py-6 text-center bg-cream"
                >
                  <span className="font-serif text-[34px] text-gold block">
                    {m}
                  </span>
                </div>
              ))}
              <div className="border border-dashed border-[rgba(44,64,52,.4)] rounded-[4px] px-10 py-6 text-center bg-transparent flex flex-col justify-center">
                <span className="font-serif italic text-[22px] text-forest block">
                  Montant libre
                </span>
                <span className="text-[12px] text-mute tracking-[.04em] mt-1">
                  selon la formule
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[clamp(20px,3vw,40px)] mt-[clamp(48px,6vw,72px)]">
              <div data-reveal className="text-center">
                <div className="w-[52px] h-[52px] mx-auto mb-4 border-[1.5px] border-[rgba(192,135,60,.55)] rounded-full grid place-items-center font-serif italic text-[19px] text-gold">
                  1 an
                </div>
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-2">
                  Valable 1 an
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.65]">
                  Tout le temps de trouver le bon moment pour lâcher prise.
                </p>
              </div>
              <div data-reveal="120" className="text-center">
                <div className="w-[52px] h-[52px] mx-auto mb-4 border-[1.5px] border-[rgba(192,135,60,.55)] rounded-full grid place-items-center text-gold text-[22px]">
                  ✉
                </div>
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-2">
                  Livraison instantanée
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.65]">
                  Reçue par email en quelques minutes, ou en carte papier.
                </p>
              </div>
              <div data-reveal="240" className="text-center">
                <div className="w-[52px] h-[52px] mx-auto mb-4 border-[1.5px] border-[rgba(192,135,60,.55)] rounded-full grid place-items-center text-gold text-[22px]">
                  ♡
                </div>
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-2">
                  Solo ou duo
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.65]">
                  Le bénéficiaire choisit son massage et sa formule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section
          aria-labelledby="h-cadeau-avis"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1000px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4 text-center"
            >
              Ils ont offert
            </p>
            <h2
              id="h-cadeau-avis"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 mx-auto mb-11 text-center max-w-[20ch]"
            >
              Des cadeaux qui ont fait mouche
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,2.4vw,30px)]">
              <blockquote
                data-reveal
                className="m-0 bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[30px] py-[34px] flex flex-col gap-5"
              >
                <p className="font-serif italic text-[19px] leading-[1.55] text-cocoa m-0 flex-1">
                  J&apos;ai offert une carte cadeau à ma compagne : réservation
                  simple, Alexandre ponctuel et très professionnel. Un cadeau
                  qui a fait mouche.
                </p>
                <footer className="text-[12px] tracking-[.16em] uppercase text-bronze font-semibold">
                  Thomas D. <span className="text-beige">· Toulouse</span>
                </footer>
              </blockquote>
              <blockquote
                data-reveal="120"
                className="m-0 bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[30px] py-[34px] flex flex-col gap-5"
              >
                <p className="font-serif italic text-[19px] leading-[1.55] text-cocoa m-0 flex-1">
                  Reçue par email en quelques minutes pour l&apos;anniversaire
                  de ma mère. Elle a adoré son massage à domicile. Je
                  recommande les yeux fermés.
                </p>
                <footer className="text-[12px] tracking-[.16em] uppercase text-bronze font-semibold">
                  Clara B. <span className="text-beige">· Muret</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="h-cadeau-faq"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[820px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Questions fréquentes
            </p>
            <h2
              id="h-cadeau-faq"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(28px,4vw,46px)] leading-[1.08] text-ink m-0 mb-10 max-w-[16ch]"
            >
              Tout savoir sur les cartes cadeaux
            </h2>
            <div data-reveal="160" className="border-t border-[rgba(34,28,21,.14)]">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.q}
                  className="border-b border-[rgba(34,28,21,.14)]"
                >
                  <summary className="flex items-center gap-4 py-6 px-1">
                    <span className="font-serif text-[24px] font-light text-bronze leading-none">
                      +
                    </span>
                    <span className="flex-1 font-serif text-[clamp(18px,2.2vw,23px)] text-ink">
                      {item.q}
                    </span>
                  </summary>
                  <p className="m-0 pl-10 pr-1 pb-[26px] text-taupe text-[16px] leading-[1.75]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <BookingForm variant="cadeau" />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
