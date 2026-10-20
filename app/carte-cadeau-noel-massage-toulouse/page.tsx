import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import NoelCountdown from "@/components/NoelCountdown";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/lib/structured-data";

/* Dates limites de commande pour une carte reçue avant le 24/12.
   À ajuster chaque année (heure de Paris). */
const DEADLINE_EMAIL = "2026-12-23T12:00:00+01:00";
const DEADLINE_EMAIL_LABEL = "mercredi 23 décembre, midi";
const DEADLINE_PAPIER_LABEL = "samedi 19 décembre";

const PAGE_URL = `${SITE_URL}/carte-cadeau-noel-massage-toulouse`;

export const metadata: Metadata = {
  title: "Carte cadeau massage Noël Toulouse — dès 30 € | Alex Massage",
  description:
    "Le cadeau de Noël qui fait du bien : un massage à domicile à Toulouse. Dès 30 €, solo ou duo, valable 1 an, reçu par email sous 24 h ouvrées.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: PAGE_URL,
    title: "Offrez un massage à domicile pour Noël — Alex Massage Toulouse",
    description:
      "Carte cadeau massage à domicile à Toulouse : dès 30 €, solo ou duo, valable 1 an.",
    images: ["/images/noel/carte-cadeau-enveloppe-doree.jpg"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Cartes cadeaux", item: `${SITE_URL}/carte-cadeau-massage-toulouse` },
    { "@type": "ListItem", position: 3, name: "Noël", item: PAGE_URL },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carte cadeau Noël — massage à domicile à Toulouse",
  description:
    "Carte cadeau de Noël pour un massage bien-être à domicile à Toulouse et 30 km alentour : solo ou duo, valable 1 an, envoyée par email sous 24 h ouvrées ou remise en carte papier.",
  image: `${SITE_URL}/images/noel/carte-cadeau-enveloppe-doree.jpg`,
  brand: { "@type": "Brand", name: "Alex Massage" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "30",
    highPrice: "170",
    priceCurrency: "EUR",
    offerCount: "7",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  },
};

const CARDS = [
  { prix: "30 €", titre: "Découverte", detail: "Solo · 30 min", note: "Pour une première fois, ou un petit cadeau." },
  { prix: "50 €", titre: "Pause", detail: "Solo · 45 min", note: "Le temps de vraiment relâcher le dos et les épaules." },
  { prix: "60 €", titre: "Coup de cœur de Noël", detail: "Solo · 1 h", note: "Une heure de californien ou d'abhyanga à l'huile chaude. C'est la carte la plus offerte.", star: true },
  { prix: "85 €", titre: "Grande parenthèse", detail: "Solo · 1 h 30", note: "La séance longue, pour celles et ceux qui ont tout donné cette année." },
  { prix: "100 €", titre: "Duo découverte", detail: "Duo · 45 min", note: "Deux tables, deux praticiens, un massage en même temps." },
  { prix: "120 €", titre: "Duo cocooning", detail: "Duo · 1 h", note: "Le cadeau de couple : une soirée de janvier rien qu'à deux.", duo: true },
  { prix: "170 €", titre: "Duo signature", detail: "Duo · 1 h 30", note: "La version longue, pour un vrai moment à deux." },
];

const POURQUOI = [
  {
    t: "Le massage vient à la personne",
    a: "Elle n'a pas à sortir dans le froid ni à traverser Toulouse. J'arrive chez elle avec la table, les huiles, les serviettes chaudes et la musique.",
  },
  {
    t: "Une date libre pendant un an",
    a: "La personne réserve quand elle le souhaite. Souvent en janvier, quand la fatigue des fêtes et la grisaille se font sentir.",
  },
  {
    t: "Le temps payé est le temps massé",
    a: "Une heure offerte, c'est une heure de massage. L'installation et le rangement ne sont pas décomptés.",
  },
  {
    t: "Un geste de spa, chez soi",
    a: "Formé à l'Institut Temana de Toulouse, j'ai exercé dans le spa d'un palace toulousain. Je retrouve ce même soin du détail à domicile.",
  },
];

const PROFILS = [
  {
    pour: "Pour votre compagne ou votre compagnon",
    idee: "Un californien d'une heure, lent et enveloppant.",
    href: "/massage-californien-toulouse",
    lien: "Le massage californien",
  },
  {
    pour: "Pour votre mère, votre père",
    idee: "Une séance à domicile, sans avoir à se déplacer.",
    href: "/massage-abhyanga-toulouse",
    lien: "L'abhyanga à l'huile chaude",
  },
  {
    pour: "Pour un couple",
    idee: "Le duo : deux praticiens, deux personnes massées en même temps.",
    href: "/massage-duo-toulouse",
    lien: "Le massage duo",
  },
  {
    pour: "Pour la personne sportive de la famille",
    idee: "Un suédois aux pressions profondes, pour récupérer après l'effort.",
    href: "/massage-sportif-toulouse",
    lien: "Le massage sportif",
  },
  {
    pour: "Pour vos équipes ou votre CSE",
    idee: "Du massage amma assis sur chaise ergonomique, au bureau.",
    href: "/massage-entreprise-toulouse",
    lien: "Le massage en entreprise",
  },
];

const ETAPES = [
  {
    n: "1",
    t: "Vous commandez",
    a: "Indiquez le montant et le prénom de la personne à qui vous l'offrez. Vous pouvez ajouter un petit mot via le formulaire, par téléphone ou par WhatsApp.",
  },
  {
    n: "2",
    t: "Vous recevez la carte",
    a: "Par email sous 24 h ouvrées, à vous ou directement à la personne gâtée, prête à imprimer ou à transférer. Ou en carte papier remise en main propre.",
  },
  {
    n: "3",
    t: "La personne réserve",
    a: "Elle choisit son massage, son créneau et son lieu, chez elle à Toulouse ou dans un rayon de 30 km, quand elle le veut dans l'année.",
  },
];

const FAQ = [
  {
    q: "Jusqu'à quand puis-je commander pour Noël ?",
    a: `Pour une carte numérique reçue à temps, commandez avant le ${DEADLINE_EMAIL_LABEL}. Pour une carte papier remise en main propre, commandez avant le ${DEADLINE_PAPIER_LABEL}. Après ces dates, appelez-moi ou écrivez-moi sur WhatsApp et nous trouverons une solution.`,
  },
  {
    q: "Combien de temps la carte est-elle valable ?",
    a: "Un an à compter de la date d'achat. La personne a donc tout le temps de choisir son moment.",
  },
  {
    q: "Puis-je choisir un autre montant ?",
    a: "Oui. Les montants indiqués correspondent aux formules, mais vous pouvez offrir le montant de votre choix à partir de 30 €.",
  },
  {
    q: "La personne pourra-t-elle choisir son massage ?",
    a: "Oui. Elle choisit entre le californien, l'abhyanga et le suédois ou sportif, dans la limite du montant offert.",
  },
  {
    q: "Comment se passe un massage duo à domicile ?",
    a: "Nous venons à deux, avec une masseuse professionnelle partenaire et deux tables. Les deux personnes sont massées en même temps, dans la même pièce. Il faut un espace d'environ 3 × 4 m.",
  },
  {
    q: "Quelles communes sont desservies ?",
    a: "Toulouse et un rayon de 30 km, dont Muret, Colomiers, Blagnac, Tournefeuille et Balma. Le déplacement est inclus. Au-delà, sur demande.",
  },
  {
    q: "Et si la personne a peu de place chez elle ?",
    a: "La table se déplie dans un salon ou une chambre : il suffit d'un peu d'espace autour. En cas de doute, on en parle au moment de la réservation.",
  },
  {
    q: "Le massage convient-il à tout le monde ?",
    a: "Ce sont des massages de bien-être, pas des soins médicaux. En cas de grossesse, de problème de santé ou de traitement en cours, demandez l'avis de votre médecin avant la séance.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const eyebrow =
  "text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4";
const h2Class =
  "font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0";
const section = "py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]";

/* Brin de sapin au trait — seule touche « Noël » graphique de la page. */
function Sprig({ className = "" }: { className?: string }) {
  const needles = Array.from({ length: 9 }, (_, i) => 14 + i * 13);
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M12 128 C 50 92, 86 56, 128 12" />
      {needles.map((d) => {
        const x = 12 + d * 0.82;
        const y = 128 - d * 0.82;
        const len = 18 - d * 0.07;
        return (
          <g key={d}>
            <path d={`M${x} ${y} l ${-len * 0.25} ${-len}`} />
            <path d={`M${x} ${y} l ${len} ${len * 0.25}`} />
          </g>
        );
      })}
      <circle cx="34" cy="96" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="44" cy="102" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function CarteCadeauNoel() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={productLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="cartes" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-night min-h-[clamp(560px,82vh,760px)] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/noel/salon-massage-toulouse-noel.jpg"
              alt="Table de massage installée dans un salon toulousain à la lueur des bougies, vue sur le clocher de Saint-Sernin"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(100deg, rgba(20,15,9,.92) 0%, rgba(23,32,26,.7) 42%, rgba(20,15,9,.08) 78%, rgba(20,15,9,0) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute left-[6%] top-[55%] -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[18px] animate-[breatheGlow_12s_ease-in-out_infinite] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(192,135,60,.42) 0%, rgba(192,135,60,0) 62%)",
            }}
          />

          <div className="relative w-full max-w-[1120px] mx-auto pt-[118px] pb-[64px] px-[clamp(20px,5vw,64px)]">
            <nav
              aria-label="Fil d'Ariane"
              className="flex flex-wrap items-center gap-[10px] text-[12px] tracking-[.12em] uppercase mb-6 animate-[fadeIn_1s_ease_.1s_both]"
            >
              <Link href="/" className="text-[rgba(244,239,231,.72)] hover:text-goldlight">
                Accueil
              </Link>
              <span className="text-[rgba(216,165,90,.85)]">/</span>
              <Link
                href="/carte-cadeau-massage-toulouse"
                className="text-[rgba(244,239,231,.72)] hover:text-goldlight"
              >
                Cartes cadeaux
              </Link>
              <span className="text-[rgba(216,165,90,.85)]">/</span>
              <span className="text-linen">Noël</span>
            </nav>
            <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-goldlight m-0 mb-[18px] animate-[riseIn_1s_cubic-bezier(.22,.61,.36,1)_.2s_both]">
              Carte cadeau de Noël
            </p>
            <h1 className="font-serif font-normal text-[clamp(36px,6vw,72px)] leading-[1.04] tracking-[-.01em] text-linen m-0 max-w-[19ch] text-balance animate-[riseIn_1.1s_cubic-bezier(.22,.61,.36,1)_.32s_both]">
              Pour Noël, offrez un massage à domicile à Toulouse
            </h1>
            <p className="mt-6 mb-0 max-w-[50ch] text-[rgba(244,239,231,.84)] text-[clamp(16px,1.6vw,18.5px)] leading-[1.75] animate-[riseIn_1.1s_cubic-bezier(.22,.61,.36,1)_.45s_both]">
              Un vrai moment de détente, qui ne finira pas au fond d&apos;un placard. La séance
              se déroule chez la personne, en solo ou en duo. La carte est valable 1 an
              et vous la recevez par email sous 24 h ouvrées.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9 animate-[fadeIn_1.2s_ease_.7s_both]">
              <a
                href="#reserver"
                className="inline-flex items-center bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
              >
                Offrir une carte cadeau
              </a>
              <a
                href="https://wa.me/33771838010?text=Bonjour%2C%20je%20souhaite%20offrir%20une%20carte%20cadeau%20massage%20pour%20No%C3%ABl."
                className="inline-flex items-center gap-[.5em] text-linen text-[14px] tracking-[.08em] uppercase border-b border-[rgba(244,239,231,.35)] pb-[3px] transition-[color,border-color] duration-300 hover:text-goldlight hover:border-goldlight"
              >
                WhatsApp · 07 71 83 80 10
              </a>
            </div>
            <ul className="list-none p-0 m-0 mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[12.5px] tracking-[.1em] uppercase text-[rgba(244,239,231,.7)] animate-[fadeIn_1.2s_ease_.9s_both]">
              <li>Dès 30 €</li>
              <li aria-hidden="true" className="text-gold">·</li>
              <li>Valable 1 an</li>
              <li aria-hidden="true" className="text-gold">·</li>
              <li>Déplacement inclus 30 km</li>
            </ul>
          </div>
        </section>

        {/* Date limite */}
        <section
          aria-labelledby="h-noel-delai"
          className="bg-forest px-[clamp(20px,5vw,64px)] py-[clamp(30px,4vw,44px)]"
        >
          <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
            <div className="flex-[1_1_320px]">
              <h2
                id="h-noel-delai"
                className="font-serif font-normal text-[clamp(21px,2.4vw,27px)] text-linen m-0 leading-[1.25]"
              >
                Pour qu&apos;elle soit sous le sapin
              </h2>
              <p className="m-0 mt-2 text-[15px] leading-[1.65] text-[rgba(244,239,231,.78)]">
                Commandez avant le {DEADLINE_EMAIL_LABEL} pour la carte numérique, et avant
                le {DEADLINE_PAPIER_LABEL} pour la carte papier.
              </p>
            </div>
            <NoelCountdown
              deadline={DEADLINE_EMAIL}
              expired="Vous êtes en retard ? Appelez-moi, il y a souvent une solution."
            />
          </div>
        </section>

        {/* Pourquoi */}
        <section aria-labelledby="h-noel-pourquoi" className={`bg-linen ${section}`}>
          <div className="max-w-[1120px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <p data-reveal className={eyebrow}>
                Le cadeau qui tombe juste
              </p>
              <h2 id="h-noel-pourquoi" data-reveal="80" className={`${h2Class} max-w-[18ch]`}>
                Pourquoi un massage sous le sapin
              </h2>
            </div>
            <div className="grid lg:grid-cols-[5fr_7fr] gap-[clamp(32px,4vw,56px)] items-start">
              <figure data-reveal className="m-0 relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[4px] shadow-[0_40px_70px_-40px_rgba(34,28,21,.6)]">
                <Image
                  src="/images/noel/carte-cadeau-enveloppe-doree.jpg"
                  alt="Carte cadeau Alex Massage glissée dans une enveloppe kraft nouée d'un ruban doré, bougie et oranges séchées"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover object-[62%_50%]"
                />
              </figure>
            <div className="grid sm:grid-cols-2 gap-[clamp(20px,3vw,40px)]">
              {POURQUOI.map((p, i) => (
                <div key={p.t} data-reveal={String(i * 100)} className="border-t border-[rgba(192,135,60,.55)] pt-6">
                  <h3 className="font-serif font-normal text-[22px] text-ink m-0 mb-3 leading-[1.25]">
                    {p.t}
                  </h3>
                  <p className="m-0 text-taupe text-[15.5px] leading-[1.7]">{p.a}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Cartes */}
        <section aria-labelledby="h-noel-cartes" className={`bg-sand ${section}`}>
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[680px] mx-auto mb-12 text-center">
              <p data-reveal className={eyebrow}>
                Les cartes à offrir
              </p>
              <h2 id="h-noel-cartes" data-reveal="80" className={h2Class}>
                Choisissez la carte de Noël
              </h2>
              <p data-reveal="140" className="mt-5 mb-0 text-taupe text-[16.5px] leading-[1.7]">
                Ce sont les tarifs habituels, sans supplément de déplacement. La personne
                choisit son massage : californien, abhyanga ou sportif.{" "}
                <Link href="/tarifs-massage-toulouse" className="text-forest underline underline-offset-4 hover:text-bronze">
                  Voir tous les tarifs
                </Link>
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(16px,2vw,24px)]">
              {CARDS.map((c, i) => (
                <article
                  key={c.prix}
                  data-reveal={String((i % 4) * 80)}
                  className={`relative flex flex-col rounded-[4px] px-[26px] py-[30px] ${
                    c.star
                      ? "bg-night text-linen shadow-[0_40px_70px_-40px_rgba(34,28,21,.8)]"
                      : "bg-cream border border-[rgba(34,28,21,.08)]"
                  }`}
                >
                  {(c.star || c.duo) && (
                    <span
                      className={`absolute top-0 -translate-y-1/2 left-[26px] text-[10.5px] tracking-[.18em] uppercase font-bold px-3 py-[6px] rounded-[2px] ${
                        c.star ? "bg-gold text-night" : "bg-forest text-linen"
                      }`}
                    >
                      {c.star ? "Le plus offert" : "Cadeau de couple"}
                    </span>
                  )}
                  <p className={`m-0 text-[12px] tracking-[.16em] uppercase font-semibold ${c.star ? "text-goldlight" : "text-bronze"}`}>
                    {c.detail}
                  </p>
                  <h3 className={`font-serif font-normal text-[23px] m-0 mt-2 ${c.star ? "text-linen" : "text-ink"}`}>
                    {c.titre}
                  </h3>
                  <p className="font-serif text-[40px] leading-none text-gold m-0 mt-4">{c.prix}</p>
                  <p className={`m-0 mt-4 flex-1 text-[15px] leading-[1.65] ${c.star ? "text-[rgba(244,239,231,.78)]" : "text-taupe"}`}>
                    {c.note}
                  </p>
                  <a
                    href="#reserver"
                    className={`mt-6 inline-flex justify-center font-semibold text-[12.5px] tracking-[.06em] uppercase px-5 py-[13px] rounded-[2px] transition-[background-color,color,border-color] duration-300 ${
                      c.star
                        ? "bg-gold text-night hover:bg-goldlight hover:text-night"
                        : "border border-[rgba(44,64,52,.45)] text-forest hover:bg-forest hover:text-linen"
                    }`}
                  >
                    Offrir cette carte
                  </a>
                </article>
              ))}
              <article
                data-reveal="240"
                className="flex flex-col justify-center rounded-[4px] px-[26px] py-[30px] border border-dashed border-[rgba(44,64,52,.4)]"
              >
                <h3 className="font-serif italic font-normal text-[24px] text-forest m-0">
                  Montant libre
                </h3>
                <p className="m-0 mt-3 text-taupe text-[15px] leading-[1.65]">
                  À partir de 30 €. Vous pouvez aussi vous regrouper en famille ou entre amis
                  pour offrir une carte plus longue.
                </p>
                <a
                  href="#reserver"
                  className="mt-6 self-start text-forest font-semibold text-[13px] tracking-[.06em] uppercase border-b border-[rgba(44,64,52,.4)] pb-[3px] hover:text-bronze hover:border-bronze"
                >
                  Composer ma carte
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Idées par profil */}
        <section aria-labelledby="h-noel-profils" className={`bg-linen ${section}`}>
          <div className="max-w-[1000px] mx-auto">
            <p data-reveal className={eyebrow}>
              Idées cadeaux
            </p>
            <h2 id="h-noel-profils" data-reveal="80" className={`${h2Class} mb-10 max-w-[18ch]`}>
              Quel massage offrir, et à qui ?
            </h2>
            <figure data-reveal="120" className="m-0 mb-10 relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-[4px]">
              <Image
                src="/images/noel/massage-duo-coin-du-feu.jpg"
                alt="Deux tables de massage préparées côte à côte près d'une cheminée, décor de Noël et bougies"
                fill
                sizes="(min-width: 1040px) 1000px, 100vw"
                className="object-cover object-[50%_60%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-[clamp(18px,3vw,32px)] pt-16 pb-[clamp(16px,2.4vw,26px)] bg-[linear-gradient(0deg,rgba(20,15,9,.85),rgba(20,15,9,0))] font-serif italic text-linen text-[clamp(17px,2vw,22px)]">
                Le duo : deux tables, deux praticiens, un même moment.
              </figcaption>
            </figure>
            <ul className="list-none p-0 m-0 border-t border-[rgba(34,28,21,.14)]">
              {PROFILS.map((p, i) => (
                <li
                  key={p.pour}
                  data-reveal={String(i * 60)}
                  className="border-b border-[rgba(34,28,21,.14)] py-6 flex flex-wrap items-baseline gap-x-8 gap-y-2"
                >
                  <h3 className="flex-[1_1_260px] font-serif font-normal text-[clamp(19px,2.2vw,23px)] text-ink m-0">
                    {p.pour}
                  </h3>
                  <p className="flex-[2_1_300px] m-0 text-taupe text-[15.5px] leading-[1.65]">
                    {p.idee}{" "}
                    <Link href={p.href} className="text-forest font-semibold whitespace-nowrap hover:text-bronze">
                      {p.lien} →
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comment ça marche + aperçu carte */}
        <section aria-labelledby="h-noel-etapes" className={`bg-sand ${section}`}>
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(40px,5vw,72px)] items-center">
            <div className="flex-[1_1_400px] min-w-0">
              <p data-reveal className={eyebrow}>
                Comment ça marche
              </p>
              <h2 id="h-noel-etapes" data-reveal="80" className={`${h2Class} mb-10 max-w-[16ch]`}>
                Trois étapes, sans stress
              </h2>
              <ol className="list-none p-0 m-0 flex flex-col gap-7">
                {ETAPES.map((e, i) => (
                  <li key={e.n} data-reveal={String(i * 100)} className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-[46px] h-[46px] rounded-full border-[1.5px] border-[rgba(192,135,60,.55)] grid place-items-center font-serif italic text-[19px] text-gold"
                    >
                      {e.n}
                    </span>
                    <div>
                      <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[6px]">{e.t}</h3>
                      <p className="m-0 text-taupe text-[15.5px] leading-[1.7]">{e.a}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex-[1_1_360px] min-w-0" data-reveal="140">
              <div
                className="relative rounded-lg p-[clamp(26px,4vw,44px)] aspect-[1.6/1] flex flex-col justify-between shadow-[0_40px_70px_-40px_rgba(34,28,21,.7)] overflow-hidden"
                style={{
                  background:
                    "radial-gradient(120% 120% at 15% 10%, #35503f 0%, #1c2a22 58%, #17120E 100%)",
                }}
              >
                {/* Ruban doré */}
                <div aria-hidden="true" className="absolute top-0 bottom-0 right-[11%] w-[10px] bg-[linear-gradient(180deg,#d8a55a,#9c6b24)] opacity-80" />
                <Sprig className="absolute -left-4 -bottom-4 w-[130px] text-[rgba(216,165,90,.45)]" />
                <div className="relative flex justify-between items-start">
                  <span className="font-serif font-medium text-[15px] tracking-[.2em] uppercase text-linen">
                    Alex Massage
                  </span>
                  <span className="text-[10.5px] tracking-[.2em] uppercase text-goldlight mr-[12%]">
                    Édition Noël
                  </span>
                </div>
                <div className="relative pl-[clamp(40px,8vw,90px)] pr-[14%]">
                  <p className="font-serif italic text-[clamp(20px,3vw,28px)] text-linen m-0 mb-[6px] leading-[1.2]">
                    Un moment rien qu&apos;à toi
                  </p>
                  <p className="text-[12.5px] tracking-[.06em] text-[rgba(244,239,231,.72)] m-0">
                    Massage à domicile · Toulouse · Valable 1 an
                  </p>
                </div>
              </div>
              <p className="mt-6 mb-0 text-taupe text-[15px] leading-[1.7]">
                <strong className="text-cocoa font-semibold">Une idée pour l&apos;emballer :</strong>{" "}
                glissez la carte dans une boîte avec une bougie ou un plaid. Le paquet prend du
                volume et la surprise reste entière.{" "}
                <Link
                  href="/blog/cadeau-noel-bien-etre-toulouse"
                  className="text-forest underline underline-offset-4 hover:text-bronze"
                >
                  D&apos;autres conseils pour Noël
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Avis */}
        <section aria-labelledby="h-noel-avis" className={`bg-linen ${section}`}>
          <div className="max-w-[1000px] mx-auto">
            <p data-reveal className={`${eyebrow} text-center`}>
              Ils ont offert
            </p>
            <h2 id="h-noel-avis" data-reveal="80" className={`${h2Class} mx-auto mb-11 text-center max-w-[20ch]`}>
              Des cadeaux qui ont fait mouche
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,2.4vw,30px)]">
              <blockquote
                data-reveal
                className="m-0 bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[30px] py-[34px] flex flex-col gap-5"
              >
                <p className="font-serif italic text-[19px] leading-[1.55] text-cocoa m-0 flex-1">
                  J&apos;ai offert une carte cadeau à ma compagne : réservation simple, Alexandre
                  ponctuel et très professionnel. Un cadeau qui a fait mouche.
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
                  Reçue par email en quelques minutes pour l&apos;anniversaire de ma mère. Elle a
                  adoré son massage à domicile. Je recommande les yeux fermés.
                </p>
                <footer className="text-[12px] tracking-[.16em] uppercase text-bronze font-semibold">
                  Clara B. <span className="text-beige">· Muret</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="h-noel-faq" className={`bg-sand ${section}`}>
          <div className="max-w-[820px] mx-auto">
            <p data-reveal className={eyebrow}>
              Questions fréquentes
            </p>
            <h2 id="h-noel-faq" data-reveal="80" className={`${h2Class} mb-10 max-w-[18ch]`}>
              La carte cadeau de Noël en questions
            </h2>
            <div data-reveal="160" className="border-t border-[rgba(34,28,21,.14)]">
              {FAQ.map((item) => (
                <details key={item.q} className="border-b border-[rgba(34,28,21,.14)]">
                  <summary className="flex items-center gap-4 py-6 px-1">
                    <span className="font-serif text-[24px] font-light text-bronze leading-none">+</span>
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

        <BookingForm
          variant="cadeau"
          preset="60 €"
          occasion="Noël"
          heading="Commandez votre carte cadeau de Noël"
          sub={`Choisissez le montant et le mode de livraison. Je vous recontacte pour finaliser. Pour une carte reçue avant Noël, commandez avant le ${DEADLINE_EMAIL_LABEL}.`}
        />

        {/* Bandeau final */}
        <section className="relative overflow-hidden bg-night">
          <div className="absolute inset-0">
            <Image
              src="/images/noel/huile-massage-bougies.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,8,5,.92) 0%, rgba(10,8,5,.78) 50%, rgba(10,8,5,.2) 100%)",
            }}
          />
          <div className="relative max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(66px,9vw,118px)] flex flex-col gap-[22px]">
            <span className="text-[13px] tracking-[.26em] uppercase font-semibold text-goldlight">
              Joyeux Noël
            </span>
            <h2 className="font-serif font-normal text-[clamp(32px,5vw,58px)] leading-[1.06] text-linen max-w-[17ch] m-0 text-balance">
              Le plus beau cadeau, c&apos;est du temps pour soi
            </h2>
            <p className="text-[rgba(244,239,231,.82)] max-w-[48ch] text-[16.5px] leading-[1.75] m-0">
              Carte numérique : commande avant le {DEADLINE_EMAIL_LABEL}. Carte papier : avant
              le {DEADLINE_PAPIER_LABEL}. Pour une question, je réponds du lundi au vendredi,
              de 9 h à 19 h.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-[10px]">
              <a
                href="#reserver"
                className="inline-flex items-center bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
              >
                Offrir une carte cadeau
              </a>
              <a
                href="tel:+33771838010"
                className="inline-flex items-center text-linen text-[14px] tracking-[.08em] uppercase border-b border-[rgba(244,239,231,.35)] pb-[3px] transition-[color,border-color] duration-300 hover:text-goldlight hover:border-goldlight"
              >
                07 71 83 80 10
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
