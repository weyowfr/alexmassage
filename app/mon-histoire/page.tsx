import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { businessRef } from "@/lib/structured-data";

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
      name: "Mon histoire",
      item: "https://www.alexmassage.fr/mon-histoire",
    },
  ],
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.alexmassage.fr/mon-histoire#alexandre",
  name: "Alexandre",
  jobTitle: "Masseur bien-être",
  url: "https://www.alexmassage.fr/mon-histoire",
  worksFor: businessRef,
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Institut Temana",
    address: { "@type": "PostalAddress", addressLocality: "Toulouse", addressCountry: "FR" },
  },
  knowsAbout: [
    "Massage californien",
    "Massage abhyanga (Ayurvéda)",
    "Massage suédois / sportif",
    "Massage amma assis en entreprise",
  ],
  areaServed: "Toulouse",
  description:
    "Masseur bien-être à domicile à Toulouse, formé à l'Institut Temana, expérience en spa de palace, passeur de bien-être.",
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
              className="flex flex-wrap-reverse gap-[clamp(28px,4vw,60px)] items-center"
            >
              <div className={chapterTxt}>
                <span className={chapterKicker}>Avant</span>
                <h3 className={chapterTitle}>
                  Trente ans d&apos;une première vie
                </h3>
                <p className={`${chapterPara} mb-4`}>
                  Pendant trente ans, j&apos;ai été entrepreneur : des
                  journées denses, des décisions rapides, un corps et un
                  esprit sollicités en permanence. Je connais de
                  l&apos;intérieur cette fatigue-là — celle qu&apos;on ne
                  s&apos;avoue pas, qui s&apos;installe dans la nuque, le dos,
                  le sommeil.
                </p>
                <p className={chapterPara}>
                  C&apos;est précisément parce que j&apos;ai vécu ce rythme
                  que je comprends celles et ceux que je masse
                  aujourd&apos;hui : je ne propose pas un soin abstrait, mais
                  la pause que j&apos;aurais aimé recevoir.
                </p>
              </div>
              <div className={chapterImg}>
                <Image
                  src="/images/institut-muret.jpeg"
                  alt="Espace de soin calme, lumière douce"
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

        {/* Engagements */}
        <section
          aria-labelledby="h-hist-engagements"
          className="bg-linen py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1080px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Ma manière de travailler
            </p>
            <h2
              id="h-hist-engagements"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[20ch]"
            >
              Ce que je vous garantis, à chaque séance
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(20px,2.4vw,32px)] mt-[clamp(32px,4vw,48px)]">
              <div data-reveal className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Le temps annoncé, massé
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  L&apos;installation est en plus : une heure réservée est une
                  heure de massage, pas cinquante minutes.
                </p>
              </div>
              <div data-reveal="90" className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  L&apos;écoute d&apos;abord
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  Chaque séance commence par un échange et s&apos;adapte à
                  votre corps du jour — pression, rythme, zones à éviter ou à
                  privilégier.
                </p>
              </div>
              <div data-reveal="180" className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Pudeur et hygiène
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  Draps et serviettes frais à chaque séance, installation
                  respectueuse de votre intimité, cadre professionnel du
                  premier au dernier geste.
                </p>
              </div>
              <div data-reveal="270" className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Bien-être, pas médical
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  Mes massages sont des soins de bien-être : ils ne remplacent
                  ni kinésithérapie ni avis médical, et je vous le dirai
                  toujours honnêtement.
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
