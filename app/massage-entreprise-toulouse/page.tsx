import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BenefitCard from "@/components/massage/BenefitCard";
import Credentials from "@/components/massage/Credentials";
import { businessRef } from "@/lib/structured-data";

const FAQ = [
  {
    q: "Combien de collaborateurs peuvent être massés dans une journée ?",
    a: "Comptez 3 à 4 personnes par heure (séances de 15 à 20 minutes chacune). Une demi-journée permet de masser 9 à 12 collaborateurs, une journée complète 18 à 24. Pour des effectifs plus importants, j'interviens sur plusieurs jours ou avec un second praticien.",
  },
  {
    q: "Que devons-nous prévoir côté logistique ?",
    a: "Presque rien : une salle au calme d'environ 2 m × 2 m (salle de réunion, bureau libre) suffit. J'apporte la chaise ergonomique, la musique et tout le nécessaire. Le massage amma assis se pratique habillé, sans huile — les collaborateurs retournent travailler immédiatement.",
  },
  {
    q: "Comment se passe le planning des séances ?",
    a: "Je vous fournis un créneau type et vos équipes s'inscrivent sur un planning (le vôtre ou un simple tableau partagé). Les séances s'enchaînent sans temps mort et sans désorganiser le service — c'est le format le plus apprécié des équipes RH.",
  },
  {
    q: "La prestation peut-elle être financée par le CSE ?",
    a: "Oui : la prestation entre dans le budget œuvres sociales du CSE au titre du bien-être au travail (QVCT). Une facture détaillée est fournie, et le format récurrent (mensuel ou trimestriel) est possible.",
  },
  {
    q: "Êtes-vous assuré pour intervenir en entreprise ?",
    a: "Oui, je suis couvert par une assurance responsabilité civile professionnelle, et formé à l'Institut Temana de Toulouse. L'attestation RC pro peut être jointe au devis sur simple demande.",
  },
  {
    q: "Dans quelle zone intervenez-vous ?",
    a: "À Toulouse et dans un rayon de 30 km : Blagnac, Colomiers, Labège, Balma… Pour un site plus éloigné en Occitanie, contactez-moi — c'est souvent possible sur une journée complète.",
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

export const metadata: Metadata = {
  title: "Massage entreprise Toulouse — amma assis | Alex Massage",
  description:
    "Massage amma assis en entreprise à Toulouse : QVCT, RSE, bien-être au travail. Offrez à vos équipes détente et motivation. Devis rapide — contactez-moi.",
  alternates: {
    canonical: "https://www.alexmassage.fr/massage-entreprise-toulouse",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Massage en entreprise à Toulouse — Alex Massage",
    description:
      "Le massage amma assis qui détend vos équipes et booste la motivation. En entreprise à Toulouse.",
    images: ["/og-image.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage en entreprise — amma assis",
  name: "Massage amma assis en entreprise à Toulouse",
  areaServed: { "@type": "City", name: "Toulouse" },
  provider: businessRef,
  description:
    "Massage amma assis en entreprise à Toulouse : QVCT, RSE, bien-être au travail, motivation et fidélisation des équipes.",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.alexmassage.fr/" },
    { "@type": "ListItem", position: 2, name: "Massage en entreprise", item: "https://www.alexmassage.fr/massage-entreprise-toulouse" },
  ],
};

const STEPS = [
  {
    num: "01",
    title: "On échange sur vos besoins",
    text: "Nombre de collaborateurs, événement (semaine QVCT, séminaire, remerciement…), lieu et créneaux. Je vous propose un format adapté.",
    delay: "",
    last: false,
  },
  {
    num: "02",
    title: "J'installe un espace détente",
    text: "Une chaise ergonomique dans une salle au calme suffit. J'apporte tout le nécessaire et crée une bulle de sérénité.",
    delay: "80",
    last: false,
  },
  {
    num: "03",
    title: "Vos équipes se détendent, à tour de rôle",
    text: "Des séances de 15 à 20 minutes s'enchaînent sur un planning fluide, sans perturber l'activité.",
    delay: "160",
    last: true,
  },
];

export default function MassageEntreprise() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <SiteHeader current="entreprise" />

      <main>
        <PageHero
          kicker="En entreprise"
          title="Massage en entreprise à Toulouse"
          crumb="Massage en entreprise"
          image="/images/massage-entreprise.jpeg"
          imageAlt="Massage amma assis sur chaise ergonomique en entreprise"
        />

        <Credentials />

        {/* Intro */}
        <section
          aria-labelledby="h-ent-intro"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(40px,5vw,72px)] items-center">
            <div className="flex-[1_1_400px] min-w-[320px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Bien‑être au travail
              </p>
              <h2
                id="h-ent-intro"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-.01em] text-ink m-0 max-w-[17ch]"
              >
                Offrez à vos équipes un vrai temps pour souffler
              </h2>
              <p className="mt-[26px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Le{" "}
                <strong className="text-cocoa font-semibold">
                  massage amma assis
                </strong>{" "}
                se pratique habillé, sur une chaise ergonomique, directement
                sur le lieu de travail. En 15 à 20 minutes, il dénoue les
                tensions du dos, des épaules et de la nuque — là où le stress
                s&apos;accumule.
              </p>
              <p className="mt-[18px] mb-0 text-taupe text-[17px] leading-[1.8]">
                Un geste concret de votre politique{" "}
                <strong className="text-cocoa font-semibold">QVCT</strong> et{" "}
                <strong className="text-cocoa font-semibold">RSE</strong> :
                vos collaborateurs se sentent considérés, repartent détendus
                et reviennent plus motivés. J&apos;interviens à Toulouse et
                dans toute la région.
              </p>
              <a
                href="#reserver"
                className="inline-flex items-center mt-8 bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-[34px] py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
              >
                Demander un devis
              </a>
            </div>
            <div
              className="flex-[1_1_360px] min-w-[300px] relative overflow-hidden rounded-[4px] aspect-[4/5]"
              data-reveal="140"
            >
              <Image
                src="/images/massage-entreprise.jpeg"
                alt="Salariée détendue sur chaise de massage amma"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Bénéfices entreprise */}
        <section
          aria-labelledby="h-ent-benefices"
          className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4 text-center"
            >
              Ce que ça change
            </p>
            <h2
              id="h-ent-benefices"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,44px)] leading-[1.1] text-ink m-0 mx-auto mb-12 text-center max-w-[22ch]"
            >
              Un investissement qui se ressent dans l&apos;équipe
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,3vw,44px)]">
              <BenefitCard
                badge="01"
                title="Moins de stress"
                text="Une vraie coupure qui réduit les tensions et prévient l'épuisement."
              />
              <BenefitCard
                badge="02"
                title="Plus de productivité"
                text="Des collaborateurs détendus, concentrés et plus efficaces."
                delay={100}
              />
              <BenefitCard
                badge="03"
                title="Fidélisation"
                text="Un signal fort de reconnaissance qui renforce l'attachement à l'entreprise."
                delay={200}
              />
              <BenefitCard
                badge="04"
                title="Marque employeur"
                text="Une démarche QVCT et RSE concrète, valorisante pour votre image."
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section
          aria-labelledby="h-ent-comment"
          className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[900px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Comment ça se passe
            </p>
            <h2
              id="h-ent-comment"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(28px,4vw,46px)] leading-[1.08] text-ink m-0 mb-11 max-w-[16ch]"
            >
              Simple à organiser, pour vous comme pour vos équipes
            </h2>
            <div className="flex flex-col">
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  data-reveal={s.delay}
                  className={`flex gap-6 py-[26px] border-t border-[rgba(34,28,21,.14)] ${
                    s.last ? "border-b" : ""
                  }`}
                >
                  <span className="font-serif italic text-[22px] text-gold min-w-[44px]">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-serif font-normal text-[23px] text-ink m-0 mb-2">
                      {s.title}
                    </h3>
                    <p className="m-0 text-taupe text-[16px] leading-[1.72]">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repères devis : prix, formats, CSE, assurance */}
        <section
          aria-labelledby="h-ent-reperes"
          className="bg-sand py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1120px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Repères pour votre devis
            </p>
            <h2
              id="h-ent-reperes"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[20ch]"
            >
              Formats, budget et garanties
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(20px,2.4vw,32px)] mt-[clamp(32px,4vw,48px)]">
              <div data-reveal className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Formats d&apos;intervention
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  Séances de 15 à 20 minutes par collaborateur, soit 3 à 4
                  personnes massées par heure. Formats de 2 heures, demi-journée
                  ou journée complète, ponctuels ou récurrents.
                </p>
              </div>
              <div data-reveal="90" className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Devis sur mesure
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  Chaque intervention est chiffrée selon votre effectif, la
                  durée et le lieu. Devis précis et sans engagement sous 24 h
                  ouvrées — un appel suffit pour cadrer votre projet.
                </p>
              </div>
              <div data-reveal="180" className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Finançable via le CSE
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  La prestation peut être prise en charge par le budget œuvres
                  sociales de votre CSE, dans le cadre d&apos;une démarche QVCT.
                  Facture détaillée fournie.
                </p>
              </div>
              <div data-reveal="270" className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7">
                <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                  Cadre professionnel
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                  Praticien formé à l&apos;Institut Temana, assuré en
                  responsabilité civile professionnelle. Massage habillé, sur
                  chaise ergonomique — aucune installation à prévoir de votre
                  côté, une salle au calme suffit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ entreprise */}
        <section
          aria-labelledby="h-ent-faq"
          className="bg-linen py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[840px] mx-auto">
            <p
              data-reveal
              className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
            >
              Vos questions
            </p>
            <h2
              id="h-ent-faq"
              data-reveal="80"
              className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[20ch]"
            >
              Le massage en entreprise, en pratique
            </h2>
            <div data-reveal="160" className="mt-8 border-t border-[rgba(34,28,21,.14)]">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  name="faq-entreprise"
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

        {/* CTA devis dédié */}
        <section
          aria-label="Devis entreprise"
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(130% 120% at 12% 10%, #243447 0%, #17120E 62%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute right-[6%] top-1/2 -translate-y-1/2 grid place-items-center pointer-events-none"
          >
            <div className="w-[220px] h-[220px] border border-[rgba(216,165,90,.24)] rounded-full animate-[breathe_11s_cubic-bezier(.37,0,.63,1)_infinite]" />
            <div className="absolute w-[130px] h-[130px] border border-[rgba(216,165,90,.36)] rounded-full animate-[breathe_11s_cubic-bezier(.37,0,.63,1)_infinite] [animation-delay:-1.5s]" />
          </div>
          <div className="relative max-w-[1120px] mx-auto py-[clamp(56px,7vw,96px)] px-[clamp(20px,5vw,64px)] flex flex-wrap gap-7 items-center justify-between">
            <div data-reveal className="max-w-[560px]">
              <h2 className="font-serif font-normal text-[clamp(28px,4.4vw,52px)] leading-[1.06] text-linen m-0">
                Parlons de votre projet bien‑être
              </h2>
              <p className="mt-[18px] mb-0 text-[rgba(244,239,231,.78)] text-[16.5px] leading-[1.7]">
                Devis personnalisé et sans engagement, adapté à la taille de
                vos équipes et à votre événement.
              </p>
            </div>
            <div
              data-reveal="120"
              className="flex flex-wrap gap-[14px] shrink-0"
            >
              <a
                href="#reserver"
                className="inline-flex items-center bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
              >
                Demander un devis
              </a>
              <a
                href="tel:+33771838010"
                className="inline-flex items-center text-linen border border-[rgba(244,239,231,.4)] font-semibold text-[13.5px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,border-color] duration-300 hover:bg-[rgba(244,239,231,.1)] hover:border-linen hover:text-linen"
              >
                07 71 83 80 10
              </a>
            </div>
          </div>
        </section>

        <BookingForm variant="entreprise" />
      </main>

      <SiteFooter />
    </>
  );
}
