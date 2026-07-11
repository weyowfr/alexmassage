import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { businessLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Massage à domicile Toulouse — Alex Massage bien‑être",
  description:
    "Massage bien‑être à domicile à Toulouse : relaxant, ayurvédique ou sportif, en solo ou duo, dès 30 €. Alexandre se déplace chez vous — réservez !",
  alternates: { canonical: "https://www.alexmassage.fr/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Massage à domicile Toulouse — Alex Massage",
    description:
      "Massage bien‑être à domicile à Toulouse, en solo ou en duo, dès 30 €. Le rituel qui vient à vous.",
    url: "https://www.alexmassage.fr/",
    images: ["/og-image.jpg"],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alex Massage",
  url: "https://www.alexmassage.fr/",
  inLanguage: "fr-FR",
};

const MASSAGE_CARDS = [
  {
    href: "/massage-californien-toulouse",
    img: "/images/massage-californien.jpeg",
    alt: "Massage californien, glisse d'huile sur le dos",
    tags: "Relaxation · Détente · Apaisement",
    title: "Relaxant / Californien",
    text: "Mouvements lents et enveloppants pour un lâcher‑prise total du corps et de l'esprit.",
    delay: "",
  },
  {
    href: "/massage-abhyanga-toulouse",
    img: "/images/massage-abhyanga.jpeg",
    alt: "Abhyanga, huile chaude dorée, ambiance ayurvédique",
    tags: "Rééquilibrage · Vitalité · Sérénité",
    title: "Énergétique / Abhyanga",
    text: "Ayurvéda, huile chaude et sept chakras : un massage complet pour rétablir l'harmonie intérieure.",
    delay: "120",
  },
  {
    href: "/massage-sportif-toulouse",
    img: "/images/massage-sportif.webp",
    alt: "Massage sportif, pétrissage profond des épaules",
    tags: "Tensions · Récupération · Performance",
    title: "Suédois / Sportif",
    text: "Pétrissage profond et pressions ciblées pour dénouer les tensions et accélérer la récupération.",
    delay: "240",
  },
];

const TESTIMONIALS = [
  {
    quote: "Massé par Alexandre, un merveilleux moment de détente. Merci !",
    author: "Bérengère C.",
    tag: "· Toulouse",
    delay: "",
  },
  {
    quote:
      "Delphine et Alexandre, deux professionnels d'exception, qui ont su nous faire lâcher prise avec brio. Nous recommandons à 200 %.",
    author: "Hadda Y.",
    tag: "· Duo",
    delay: "120",
  },
  {
    quote:
      "Une parenthèse hors du temps, à la maison. Le rituel, la chaleur de l'huile, la lenteur des gestes — exactement ce dont j'avais besoin.",
    author: "Thomas D.",
    tag: "· Carte cadeau",
    delay: "240",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={businessLd} />
      <JsonLd data={websiteLd} />
      <SiteHeader />

      <main>
        {/* ░░ HERO — vidéo en fond ░░ */}
        <section
          aria-label="Massage bien-être à domicile à Toulouse"
          className="relative overflow-hidden bg-night min-h-[clamp(600px,94vh,940px)] flex items-center"
        >
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/massage-jambes.png"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(96deg, rgba(20,15,9,.92) 0%, rgba(20,15,9,.66) 44%, rgba(20,15,9,.28) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-[60px] top-[26%] grid place-items-center pointer-events-none opacity-90"
          >
            <div className="w-[420px] h-[420px] border border-[rgba(216,165,90,.22)] rounded-full animate-[breathe_12s_cubic-bezier(.37,0,.63,1)_infinite]" />
            <div className="absolute w-[280px] h-[280px] border border-[rgba(216,165,90,.3)] rounded-full animate-[breathe_12s_cubic-bezier(.37,0,.63,1)_infinite] [animation-delay:-1.6s]" />
            <div className="absolute w-[150px] h-[150px] border border-[rgba(216,165,90,.4)] rounded-full animate-[breathe_12s_cubic-bezier(.37,0,.63,1)_infinite] [animation-delay:-3s]" />
          </div>

          <div className="relative w-full max-w-[1120px] mx-auto pt-[120px] pb-24 px-[clamp(20px,5vw,64px)]">
            <p className="text-[13px] tracking-[.28em] uppercase font-semibold text-goldlight m-0 mb-[26px] animate-[fadeIn_1.1s_ease_.1s_both]">
              À domicile · Solo &amp; Duo · Entreprise
            </p>
            <h1 className="font-serif font-normal text-[clamp(42px,7.4vw,92px)] leading-[1.02] tracking-[-.015em] text-linen m-0 max-w-[16ch] text-balance animate-[riseIn_1.2s_cubic-bezier(.22,.61,.36,1)_.2s_both]">
              Le massage bien‑être{" "}
              <span className="italic text-goldlight">qui vient à vous</span>,
              à Toulouse.
            </h1>
            <p className="max-w-[52ch] text-[rgba(244,239,231,.84)] text-[clamp(16px,1.5vw,19px)] leading-[1.75] mt-[30px] mb-0 animate-[riseIn_1.2s_cubic-bezier(.22,.61,.36,1)_.45s_both]">
              Californien, ayurvédique ou sportif — Alexandre se déplace chez
              vous, dans un rayon de 30 km autour de Toulouse, avec sa table,
              ses huiles et sa musique. Vous n&apos;avez plus qu&apos;à
              respirer.
            </p>
            <div className="flex flex-wrap gap-4 mt-[38px] animate-[riseIn_1.2s_cubic-bezier(.22,.61,.36,1)_.65s_both]">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gold text-night font-bold text-[14px] tracking-[.06em] uppercase px-9 py-[17px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
              >
                Prendre rendez‑vous
              </Link>
              <Link
                href="/mes-massages-toulouse"
                className="inline-flex items-center text-linen border border-[rgba(244,239,231,.45)] font-semibold text-[14px] tracking-[.06em] uppercase px-[34px] py-[17px] rounded-[2px] transition-[background-color,border-color] duration-[350ms] hover:bg-[rgba(244,239,231,.1)] hover:border-linen hover:text-linen"
              >
                Découvrir mes massages
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute left-1/2 bottom-[30px] -translate-x-1/2 flex flex-col items-center gap-3 animate-[fadeIn_1.4s_ease_1.1s_both]"
          >
            <span className="text-[10.5px] tracking-[.28em] uppercase text-[rgba(244,239,231,.6)]">
              Défiler
            </span>
            <span className="w-2 h-2 rounded-full bg-goldlight animate-[breatheGlow_4.5s_ease-in-out_infinite]" />
            <span
              className="w-px h-11"
              style={{
                background:
                  "linear-gradient(180deg, rgba(216,165,90,.7), transparent)",
              }}
            />
          </div>
        </section>

        {/* ░░ MES MASSAGES ░░ */}
        <section
          aria-labelledby="h-massages"
          className="bg-linen py-[clamp(64px,9vw,128px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[640px] mb-[clamp(40px,5vw,68px)]">
              <p
                data-reveal
                className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
              >
                Mes massages
              </p>
              <h2
                id="h-massages"
                data-reveal="80"
                className="font-serif font-normal text-[clamp(30px,4.4vw,54px)] leading-[1.08] tracking-[-.01em] text-ink m-0"
              >
                Trois massages, trois intentions
              </h2>
              <p
                data-reveal="150"
                className="mt-[22px] mb-0 text-taupe text-[17px] leading-[1.78]"
              >
                Chaque séance est personnalisée selon votre corps, votre humeur
                et vos besoins du jour. À vous de choisir l&apos;intention.
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,2.4vw,32px)]">
              {MASSAGE_CARDS.map((card) => (
                <div
                  key={card.href}
                  data-reveal={card.delay}
                  className="group flex flex-col bg-cream border border-[rgba(34,28,21,.07)] rounded-[4px] overflow-hidden transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-2 hover:shadow-[0_44px_74px_-44px_rgba(34,28,21,.5)]"
                >
                  <div className="overflow-hidden aspect-[4/5] relative">
                    <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]">
                      <Image
                        src={card.img}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-7 px-[26px] pb-8 flex flex-col gap-3 flex-1">
                    <span className="text-[11px] tracking-[.2em] uppercase text-bronze font-semibold">
                      {card.tags}
                    </span>
                    <h3 className="font-serif font-normal text-[27px] leading-[1.1] text-ink m-0">
                      {card.title}
                    </h3>
                    <p className="m-0 text-taupe text-[15.5px] leading-[1.72] flex-1">
                      {card.text}
                    </p>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-[9px] mt-[6px] text-forest font-semibold text-[12.5px] tracking-[.1em] uppercase hover:text-bronze"
                    >
                      Découvrir <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ░░ ALEXANDRE ░░ */}
        <section
          aria-labelledby="h-alex"
          className="bg-sand py-[clamp(64px,9vw,128px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-[clamp(40px,6vw,88px)] items-center">
            <div className="flex-[1_1_380px] min-w-[300px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Votre masseur
              </p>
              <h2
                id="h-alex"
                className="font-serif font-normal text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[15ch]"
              >
                Alexandre, passeur de bien‑être à Toulouse
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Révélation lors de mes voyages en Inde et en Thaïlande,
                formation rigoureuse à l&apos;Institut Temana de Toulouse, puis
                le SPA d&apos;un palace toulousain : j&apos;ai fait du massage
                le sens de ma vie.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Aujourd&apos;hui, j&apos;interviens à domicile dans toute la
                région toulousaine, en solo comme en duo — avec une masseuse
                professionnelle et des instituts partenaires à Muret.
              </p>
              <Link
                href="/mon-histoire"
                className="inline-flex items-center gap-[10px] mt-8 text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[13px] tracking-[.08em] uppercase px-[30px] py-[15px] rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
              >
                Mon histoire
              </Link>
            </div>
            <div
              className="flex-[1_1_380px] min-w-[300px] relative"
              data-reveal="140"
            >
              <div
                aria-hidden="true"
                className="absolute top-[18px] -right-[18px] -bottom-[18px] left-[18px] border border-[rgba(192,135,60,.5)] rounded-[4px]"
              />
              <div className="relative overflow-hidden rounded-[4px] aspect-[4/5]">
                <Image
                  src="/images/alexandre-en-seance.jpeg"
                  alt="Alexandre en séance de massage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ░░ TEASERS ENTREPRISE + CARTES ░░ */}
        <section
          aria-label="Entreprise et cartes cadeaux"
          className="bg-linen py-[clamp(64px,9vw,128px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-[clamp(20px,2.4vw,30px)]">
            <div
              data-reveal
              className="group relative overflow-hidden rounded-[4px] min-h-[440px] flex items-end"
            >
              <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]">
                <Image
                  src="/images/massage-entreprise.jpeg"
                  alt="Massage amma assis en entreprise sur chaise ergonomique"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,15,9,.05) 30%, rgba(20,15,9,.86) 100%)",
                }}
              />
              <div className="relative p-[clamp(28px,3vw,40px)] z-[1]">
                <p className="text-[12px] tracking-[.22em] uppercase font-semibold text-goldlight m-0 mb-3">
                  En entreprise
                </p>
                <h3 className="font-serif font-normal text-[clamp(24px,3vw,34px)] leading-[1.1] text-linen m-0 mb-3">
                  Offrez à vos équipes un vrai temps de détente
                </h3>
                <p className="m-0 mb-[18px] text-[rgba(244,239,231,.82)] text-[15.5px] leading-[1.7] max-w-[44ch]">
                  Massage amma assis, QVCT et RSE : moral, motivation et
                  fidélisation, directement sur le lieu de travail.
                </p>
                <Link
                  href="/massage-entreprise-toulouse"
                  className="inline-flex items-center gap-[9px] text-linen font-semibold text-[12.5px] tracking-[.1em] uppercase border-b border-[rgba(216,165,90,.6)] pb-1 hover:text-goldlight"
                >
                  En savoir plus <span>→</span>
                </Link>
              </div>
            </div>

            <div
              data-reveal="120"
              className="group relative overflow-hidden rounded-[4px] min-h-[440px] flex items-end"
            >
              <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]">
                <Image
                  src="/images/espace-detente.jpeg"
                  alt="Espace détente chaleureux, ambiance spa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,15,9,.05) 30%, rgba(20,15,9,.86) 100%)",
                }}
              />
              <div className="relative p-[clamp(28px,3vw,40px)] z-[1]">
                <p className="text-[12px] tracking-[.22em] uppercase font-semibold text-goldlight m-0 mb-3">
                  Cartes cadeaux
                </p>
                <h3 className="font-serif font-normal text-[clamp(24px,3vw,34px)] leading-[1.1] text-linen m-0 mb-3">
                  Offrez un moment de bien‑être
                </h3>
                <p className="m-0 mb-[18px] text-[rgba(244,239,231,.82)] text-[15.5px] leading-[1.7] max-w-[44ch]">
                  Montants flexibles dès 30 €, valables 1 an, livraison
                  numérique instantanée. Le cadeau qui fait vraiment plaisir.
                </p>
                <Link
                  href="/carte-cadeau-massage-toulouse"
                  className="inline-flex items-center gap-[9px] text-linen font-semibold text-[12.5px] tracking-[.1em] uppercase border-b border-[rgba(216,165,90,.6)] pb-1 hover:text-goldlight"
                >
                  Offrir un massage <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ░░ TÉMOIGNAGES ░░ */}
        <section
          aria-labelledby="h-avis"
          className="bg-sand py-[clamp(64px,9vw,128px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto text-center">
            <div
              data-reveal
              className="font-serif text-[64px] leading-[.6] text-gold mb-3"
            >
              &ldquo;
            </div>
            <p
              data-reveal="60"
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-[14px]"
            >
              Ils parlent de moi
            </p>
            <h2
              id="h-avis"
              data-reveal="120"
              className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] text-ink m-0 mx-auto max-w-[20ch]"
            >
              Des expériences de détente partagées à Toulouse
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(20px,2.4vw,30px)] mt-[clamp(40px,5vw,64px)] text-left">
              {TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.author}
                  data-reveal={t.delay}
                  className="m-0 bg-cream border border-[rgba(34,28,21,.07)] rounded-[4px] px-[30px] py-[34px] flex flex-col gap-5"
                >
                  <p className="font-serif italic text-[20px] leading-[1.5] text-cocoa m-0 flex-1">
                    {t.quote}
                  </p>
                  <footer className="text-[12px] tracking-[.16em] uppercase text-bronze font-semibold">
                    {t.author} <span className="text-beige">{t.tag}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
