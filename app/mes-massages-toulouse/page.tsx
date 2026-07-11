import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Credentials from "@/components/massage/Credentials";

export const metadata: Metadata = {
  title: "Mes massages à domicile à Toulouse | Alex Massage",
  description:
    "Découvrez mes 3 massages à domicile à Toulouse : californien relaxant, abhyanga énergétique, suédois sportif. Solo ou duo, dès 30 €. Réservez votre séance.",
  alternates: { canonical: "https://www.alexmassage.fr/mes-massages-toulouse" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Mes massages à domicile à Toulouse — Alex Massage",
    description:
      "Trois protocoles, trois intentions : relaxant, énergétique, sportif. À domicile à Toulouse.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.alexmassage.fr/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mes massages",
      item: "https://www.alexmassage.fr/mes-massages-toulouse",
    },
  ],
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Massages à domicile à Toulouse",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Massage relaxant / californien",
      url: "https://www.alexmassage.fr/massage-californien-toulouse",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Massage énergétique / abhyanga",
      url: "https://www.alexmassage.fr/massage-abhyanga-toulouse",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Massage sportif",
      url: "https://www.alexmassage.fr/massage-sportif-toulouse",
    },
  ],
};

const PROTOCOLS = [
  {
    href: "/massage-californien-toulouse",
    img: "/images/massage-californien.jpeg",
    alt: "Massage californien, glisse d'huile sur le dos",
    num: "01 · Relaxant",
    title: "Californien",
    text: "Mouvements lents et enveloppants pour un lâcher‑prise total du corps et de l'esprit. Idéal pour la relaxation, la détente et l'apaisement.",
    price: "Solo dès 30 € · Duo dès 100 €",
    reverse: false,
    delay: "",
  },
  {
    href: "/massage-abhyanga-toulouse",
    img: "/images/massage-abhyanga.jpeg",
    alt: "Abhyanga, huile chaude dorée versée sur le dos",
    num: "02 · Énergétique",
    title: "Abhyanga",
    text: "Ayurvéda, huile chaude et sept chakras : un massage holistique pour rééquilibrer les énergies et retrouver vitalité et sérénité.",
    price: "Formules dès 50 €",
    reverse: true,
    delay: "80",
  },
  {
    href: "/massage-sportif-toulouse",
    img: "/images/massage-sportif.webp",
    alt: "Massage sportif, pétrissage profond des épaules",
    num: "03 · Sportif",
    title: "Sportif / Deep Tissue",
    text: "Pétrissage profond et pressions ciblées pour dénouer les tensions, soulager les muscles et accélérer la récupération physique.",
    price: "Formules dès 50 €",
    reverse: false,
    delay: "80",
  },
];

/* Tableau comparatif : la vraie valeur ajoutée d'une page hub par rapport
   aux trois pages protocole qu'elle relie. */
const COMPARE_ROWS: { label: string; cali: string; abhy: string; sued: string }[] = [
  { label: "Intention", cali: "Se détendre, lâcher prise", abhy: "Se rééquilibrer, retrouver de l'énergie", sued: "Dénouer, récupérer" },
  { label: "Pression", cali: "Douce à modérée", abhy: "Modérée, rythmée", sued: "Profonde, ajustée" },
  { label: "Rythme", cali: "Lent, enveloppant", abhy: "Continu, tonique", sued: "Soutenu, ciblé" },
  { label: "Huile", cali: "Douce, glisse longue", abhy: "Chaude, choisie selon le dosha", sued: "Parcimonieuse, travail profond" },
  { label: "Idéal si…", cali: "Stress, fatigue mentale, sommeil difficile", abhy: "Baisse de vitalité, besoin d'harmonie", sued: "Sport, tensions et nœuds musculaires" },
  { label: "Durées", cali: "30 min à 1 h 30", abhy: "45 min à 1 h 30", sued: "45 min à 1 h 30" },
  { label: "À partir de", cali: "30 €", abhy: "50 €", sued: "50 €" },
];

const FAQ = [
  {
    q: "Quel massage choisir pour une première fois ?",
    a: "Le californien est le plus accessible : pression douce, mouvements enveloppants, aucune sensibilité particulière après la séance. C'est le massage que je recommande si vous ne savez pas par où commencer — la formule découverte de 30 minutes à 30 € permet d'essayer sans engagement.",
  },
  {
    q: "Quelle est la différence entre le californien et l'abhyanga ?",
    a: "Le californien vise la détente nerveuse par des gestes lents et une pression douce ; l'abhyanga, issu de l'Ayurvéda, travaille la circulation de l'énergie avec une huile chaude et un rythme plus soutenu. Détente pure d'un côté, revitalisation de l'autre.",
  },
  {
    q: "Le massage sportif est-il réservé aux sportifs ?",
    a: "Non : il s'adresse aussi à toute personne qui accumule des tensions profondes — nuque, trapèzes, lombaires — à cause du travail de bureau ou du stress. La pression est simplement plus appuyée que sur un massage relaxant, et toujours ajustée à votre ressenti.",
  },
  {
    q: "Peut-on choisir des massages différents en duo ?",
    a: "Oui. En massage duo, chaque personne choisit son protocole et sa pression : un californien pour l'une, un sportif pour l'autre, sur la même durée et dans la même pièce. Tous les détails sont sur la page massage duo.",
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

const REASSURANCE = [
  {
    icon: "⌖",
    title: "Déplacement inclus",
    text: "Je viens chez vous, gratuitement, dans un rayon de 30 km autour de Toulouse.",
    delay: "",
  },
  {
    icon: "▤",
    title: "Matériel fourni",
    text: "Table, huiles chaudes, serviettes et musique : je m'occupe de tout.",
    delay: "100",
  },
  {
    icon: "✎",
    title: "Séance personnalisée",
    text: "Chaque massage s'adapte à votre corps, votre humeur et vos besoins.",
    delay: "200",
  },
  {
    icon: "♢",
    title: "Temps réel garanti",
    text: "Le temps de massage payé est celui pratiqué — l'installation est en plus.",
    delay: "300",
  },
];

export default function MesMassages() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={itemListLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="massages" />

      <main>
        <PageHero
          kicker="Mes massages"
          title="Trois massages à domicile à Toulouse"
          crumb="Mes massages"
          image="/images/table-massage-serviettes.jpeg"
          imageAlt="Table de massage dressée avec serviettes et huiles"
        />

        <Credentials />

        {/* Intro pilier */}
        <section
          aria-labelledby="h-pilier-intro"
          className="bg-linen py-[clamp(60px,8vw,110px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[760px] mx-auto text-center" data-reveal>
            <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-[18px]">
              Trois intentions
            </p>
            <h2
              id="h-pilier-intro"
              className="font-serif font-normal text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-[-.01em] text-ink m-0"
            >
              À chaque besoin, son massage
            </h2>
            <p className="mt-6 mb-0 text-taupe text-[17.5px] leading-[1.8]">
              Relaxant, énergétique ou sportif : chaque protocole répond à une
              intention différente. Je me déplace chez vous, à Toulouse et dans
              un rayon de 30 km, avec ma table, mes huiles et ma musique — pour
              une séance entièrement personnalisée, en solo ou en duo.
            </p>
          </div>
        </section>

        {/* Les 3 protocoles en rangées alternées */}
        <section
          aria-label="Les trois massages"
          className="bg-linen px-[clamp(20px,5vw,64px)] pb-[clamp(40px,6vw,80px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-col gap-[clamp(24px,3vw,40px)]">
            {PROTOCOLS.map((p) => {
              const img = (
                <div
                  key="img"
                  className="flex-[1_1_280px] min-w-[260px] relative overflow-hidden rounded-[4px] aspect-[5/4]"
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              );
              const txt = (
                <div key="txt" className="flex-[1_1_320px] min-w-[280px]">
                  <span className="text-[11px] tracking-[.2em] uppercase text-bronze font-semibold">
                    {p.num}
                  </span>
                  <h3 className="font-serif font-normal text-[clamp(26px,3.2vw,38px)] leading-[1.1] text-ink mt-[10px] mb-[14px]">
                    {p.title}
                  </h3>
                  <p className="m-0 mb-[18px] text-taupe text-[16.5px] leading-[1.75]">
                    {p.text}
                  </p>
                  <p className="m-0 mb-5 font-serif italic text-bronze text-[16px]">
                    {p.price}
                  </p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-[10px] text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[12.5px] tracking-[.08em] uppercase px-[26px] py-[13px] rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
                  >
                    Découvrir ce massage
                  </Link>
                </div>
              );
              return (
                <article
                  key={p.href}
                  data-reveal={p.delay}
                  className={`flex ${
                    p.reverse ? "flex-wrap-reverse" : "flex-wrap"
                  } gap-[clamp(28px,4vw,60px)] items-center bg-cream border border-[rgba(34,28,21,.07)] rounded-md overflow-hidden p-[clamp(20px,3vw,40px)]`}
                >
                  {p.reverse ? [txt, img] : [img, txt]}
                </article>
              );
            })}
          </div>
        </section>

        {/* Comparateur */}
        <section
          aria-labelledby="h-pilier-compare"
          className="bg-linen px-[clamp(20px,5vw,64px)] pb-[clamp(56px,8vw,104px)]"
        >
          <div className="max-w-[1160px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Comparer
            </p>
            <h2
              id="h-pilier-compare"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[20ch]"
            >
              Les trois massages en un coup d&apos;œil
            </h2>
            <div data-reveal="160" className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-[rgba(192,135,60,.5)]">
                    <th className="py-4 pr-4 text-[12px] tracking-[.14em] uppercase text-mute font-semibold w-[16%]" />
                    <th className="py-4 px-4 font-serif font-normal text-[19px] text-ink">
                      <Link href="/massage-californien-toulouse" className="hover:text-bronze">
                        Californien
                      </Link>
                    </th>
                    <th className="py-4 px-4 font-serif font-normal text-[19px] text-ink">
                      <Link href="/massage-abhyanga-toulouse" className="hover:text-bronze">
                        Abhyanga
                      </Link>
                    </th>
                    <th className="py-4 pl-4 font-serif font-normal text-[19px] text-ink">
                      <Link href="/massage-sportif-toulouse" className="hover:text-bronze">
                        Sportif
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-[rgba(34,28,21,.1)]">
                      <th className="py-4 pr-4 text-[12px] tracking-[.12em] uppercase text-bronze font-semibold align-top">
                        {r.label}
                      </th>
                      <td className="py-4 px-4 text-taupe text-[15px] leading-[1.6] align-top">{r.cali}</td>
                      <td className="py-4 px-4 text-taupe text-[15px] leading-[1.6] align-top">{r.abhy}</td>
                      <td className="py-4 pl-4 text-taupe text-[15px] leading-[1.6] align-top">{r.sued}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p data-reveal="220" className="mt-6 mb-0 text-taupe text-[15.5px]">
              Envie de partager la séance ? Les trois protocoles existent aussi
              en{" "}
              <Link
                href="/massage-duo-toulouse"
                className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
              >
                massage duo à domicile
              </Link>{" "}
              — deux tables, deux praticiens, chez vous.
            </p>
          </div>
        </section>

        {/* Réassurance */}
        <section
          aria-labelledby="h-pilier-reassurance"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <h2
              id="h-pilier-reassurance"
              data-reveal
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 mx-auto mb-12 text-center max-w-[20ch]"
            >
              Le confort du domicile, la rigueur d&apos;un professionnel
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(24px,3vw,44px)]">
              {REASSURANCE.map((r) => (
                <div
                  key={r.title}
                  data-reveal={r.delay}
                  className="flex flex-col gap-3"
                >
                  <div className="w-[52px] h-[52px] border-[1.5px] border-[rgba(192,135,60,.55)] rounded-full grid place-items-center text-gold text-[22px]">
                    {r.icon}
                  </div>
                  <h3 className="font-serif font-normal text-[21px] text-ink m-0">
                    {r.title}
                  </h3>
                  <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
            <p
              data-reveal="180"
              className="mt-11 mx-auto mb-0 text-center text-taupe text-[15.5px]"
            >
              Consultez les{" "}
              <Link
                href="/tarifs-massage-toulouse"
                className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
              >
                tarifs complets
              </Link>
              , découvrez le{" "}
              <Link
                href="/massage-entreprise-toulouse"
                className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
              >
                massage en entreprise
              </Link>{" "}
              ou{" "}
              <Link
                href="/carte-cadeau-massage-toulouse"
                className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
              >
                offrez une carte cadeau
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ choix du massage */}
        <section
          aria-labelledby="h-pilier-faq"
          className="bg-linen py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[840px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Bien choisir
            </p>
            <h2
              id="h-pilier-faq"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[18ch]"
            >
              Quel massage choisir ?
            </h2>
            <div data-reveal="160" className="mt-8 border-t border-[rgba(34,28,21,.14)]">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  name="faq-massages"
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

        <BookingForm variant="massage" />

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
