import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Mon histoire — Alexandre, masseur bien-être à Toulouse",
  description:
    "De l'Inde et la Thaïlande à l'Institut Temana de Toulouse : découvrez le parcours d'Alexandre, passeur de bien-être et masseur à domicile à Toulouse.",
  alternates: { canonical: "https://www.alexmassage.fr/mon-histoire" },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    title: "Mon histoire — Alexandre, masseur bien-être à Toulouse",
    description:
      "Une vocation née en Inde et en Thaïlande, une pratique ancrée à Toulouse.",
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
      name: "Mon histoire",
      item: "https://www.alexmassage.fr/mon-histoire",
    },
  ],
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre",
  jobTitle: "Masseur bien-être",
  worksFor: { "@type": "HealthAndBeautyBusiness", name: "Alex Massage" },
  areaServed: "Toulouse",
  description:
    "Masseur bien-être à domicile à Toulouse, formé à l'Institut Temana, passeur de bien-être.",
};

const chapterImg =
  "flex-[1_1_300px] min-w-[280px] relative overflow-hidden rounded-[4px] aspect-[4/5]";
const chapterTxt = "flex-[1_1_340px] min-w-[300px]";
const chapterKicker = "font-serif italic text-[16px] text-bronze";
const chapterTitle =
  "font-serif font-normal text-[clamp(24px,3vw,36px)] leading-[1.12] text-ink mt-[10px] mb-4";
const chapterPara = "m-0 text-taupe text-[16.5px] leading-[1.8]";

export default function MonHistoire() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={personLd} />
      <SiteHeader current="histoire" />

      <main>
        <PageHero
          kicker="Mon histoire"
          title="Alexandre, passeur de bien-être"
          crumb="Mon histoire"
          image="/images/alexandre-en-seance.jpeg"
          imageAlt="Portrait d'Alexandre en séance de massage"
        />

        {/* Chapô */}
        <section
          aria-labelledby="h-hist-intro"
          className="bg-linen py-[clamp(60px,8vw,110px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[760px] mx-auto" data-reveal>
            <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-[18px] text-center">
              La vocation
            </p>
            <h2
              id="h-hist-intro"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.14] tracking-[-.01em] text-ink m-0 text-center text-balance"
            >
              Après 30 ans d&apos;entrepreneuriat, j&apos;ai choisi de faire du
              bien‑être des autres le sens de ma vie.
            </h2>
          </div>
        </section>

        {/* Récit en chapitres alternés */}
        <section
          aria-label="Mon parcours"
          className="bg-linen px-[clamp(20px,5vw,64px)] pb-[clamp(30px,5vw,70px)]"
        >
          <div className="max-w-[1080px] mx-auto flex flex-col gap-[clamp(40px,6vw,88px)]">
            <div
              data-reveal
              className="flex flex-wrap gap-[clamp(28px,4vw,60px)] items-center"
            >
              <div className={chapterImg}>
                <Image
                  src="/images/espace-detente.jpeg"
                  alt="Ambiance de voyage, voilages et lumière dorée"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className={chapterTxt}>
                <span className={chapterKicker}>Le déclic</span>
                <h3 className={chapterTitle}>
                  Une révélation en Inde et en Thaïlande
                </h3>
                <p className={`${chapterPara} mb-4`}>
                  Lors de voyages en Inde et en Thaïlande, j&apos;ai découvert
                  le massage non comme un soin, mais comme un langage — une
                  manière d&apos;apaiser, de relier, de transmettre. Au{" "}
                  <strong className="text-cocoa font-semibold">
                    temple Wat Pho de Bangkok
                  </strong>
                  , berceau du massage traditionnel thaï, cette intuition est
                  devenue une évidence.
                </p>
                <p className={chapterPara}>
                  Je suis rentré avec une certitude : je voulais faire de ce
                  geste ma vie.
                </p>
              </div>
            </div>

            <div
              data-reveal
              className="flex flex-wrap-reverse gap-[clamp(28px,4vw,60px)] items-center"
            >
              <div className={chapterTxt}>
                <span className={chapterKicker}>La formation</span>
                <h3 className={chapterTitle}>
                  L&apos;exigence de l&apos;Institut Temana
                </h3>
                <p className={`${chapterPara} mb-4`}>
                  De retour à Toulouse, je me suis formé rigoureusement à
                  l&apos;
                  <strong className="text-cocoa font-semibold">
                    Institut Temana
                  </strong>
                  , référence du massage bien‑être. Californien, abhyanga
                  ayurvédique, suédois : j&apos;ai appris à écouter les corps
                  et à adapter chaque geste.
                </p>
                <p className={chapterPara}>
                  J&apos;ai ensuite exercé au{" "}
                  <strong className="text-cocoa font-semibold">
                    SPA d&apos;un palace toulousain
                  </strong>
                  , où j&apos;ai affiné mon sens du détail et de
                  l&apos;accueil — cette attention qui transforme un massage en
                  véritable parenthèse.
                </p>
              </div>
              <div className={chapterImg}>
                <Image
                  src="/images/massage-californien.jpeg"
                  alt="Mains au travail, huile et gestes précis"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              data-reveal
              className="flex flex-wrap gap-[clamp(28px,4vw,60px)] items-center"
            >
              <div className={chapterImg}>
                <Image
                  src="/images/table-massage-serviettes.jpeg"
                  alt="La table de massage d'Alexandre, installée avec ses serviettes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className={chapterTxt}>
                <span className={chapterKicker}>Aujourd&apos;hui</span>
                <h3 className={chapterTitle}>
                  Le bien‑être qui vient à vous
                </h3>
                <p className={`${chapterPara} mb-4`}>
                  Aujourd&apos;hui, je me déplace chez vous, partout à Toulouse
                  et dans un rayon de 30 km, avec ma table, mes huiles et ma
                  musique. Je travaille aussi en{" "}
                  <strong className="text-cocoa font-semibold">duo</strong>,
                  avec une masseuse professionnelle, et en lien avec des{" "}
                  <strong className="text-cocoa font-semibold">
                    instituts partenaires à Muret
                  </strong>
                  .
                </p>
                <p className={chapterPara}>
                  Je me définis comme un{" "}
                  <em className="text-bronze italic">passeur de bien‑être</em>{" "}
                  : celui qui apporte, jusque chez vous, un moment de calme
                  dans un quotidien qui va trop vite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section
          aria-label="Ma philosophie"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[860px] mx-auto text-center" data-reveal>
            <div className="font-serif text-[70px] leading-[.6] text-gold mb-[10px]">
              &ldquo;
            </div>
            <p className="font-serif italic font-light text-[clamp(24px,3.6vw,40px)] leading-[1.32] text-ink m-0">
              Prendre soin de l&apos;autre, c&apos;est lui offrir ce que le
              quotidien lui refuse : du temps, du silence, et une présence
              entière.
            </p>
            <p className="mt-7 mb-0 text-[12.5px] tracking-[.2em] uppercase text-bronze font-semibold">
              Alexandre · Alex Massage
            </p>
          </div>
        </section>

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
