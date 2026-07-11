import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { businessLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact — massage à domicile à Toulouse | Alex Massage",
  description:
    "Réservez votre massage à domicile à Toulouse : téléphone 07 71 83 80 10, WhatsApp ou formulaire. Toulouse et 30 km alentour, lun-ven 9h-19h.",
  alternates: { canonical: "https://www.alexmassage.fr/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Contact — Alex Massage, massage à domicile à Toulouse",
    description:
      "Prenez rendez-vous pour un massage à domicile à Toulouse. Téléphone, WhatsApp ou formulaire.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.alexmassage.fr/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.alexmassage.fr/contact" },
  ],
};

const COMMUNES = [
  "Toulouse",
  "Muret",
  "Colomiers",
  "Blagnac",
  "Tournefeuille",
  "Balma",
  "Labège",
  "Ramonville-Saint-Agne",
  "Castanet-Tolosan",
  "Saint-Orens-de-Gameville",
  "Plaisance-du-Touch",
];

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={businessLd} />
      <SiteHeader current="contact" />

      <main>
        <PageHero
          kicker="Prendre rendez-vous"
          title="Réservez votre massage à domicile à Toulouse"
          crumb="Contact"
          image="/images/massage-jambes.png"
          imageAlt="Mains posées avec sérénité, lumière tamisée"
        />

        {/* Contact : coordonnées + formulaire */}
        <section
          aria-labelledby="h-contact"
          className="bg-linen py-[clamp(60px,8vw,116px)] px-[clamp(20px,5vw,64px)]"
        >
          <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[clamp(40px,5vw,80px)]">
            {/* Colonne coordonnées */}
            <div className="flex-[1_1_340px] min-w-[300px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Me joindre
              </p>
              <h2
                id="h-contact"
                className="font-serif font-normal text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-.01em] text-ink m-0 mb-[18px] max-w-[15ch]"
              >
                Le plus simple, c&apos;est de m&apos;appeler
              </h2>
              <p className="m-0 mb-[34px] text-taupe text-[16.5px] leading-[1.78]">
                Un appel ou un message, et nous convenons ensemble du massage,
                de la formule et du créneau. Je vous réponds avec plaisir.
              </p>

              <div className="flex flex-col gap-[14px]">
                <a
                  href="tel:+33771838010"
                  className="flex items-center gap-[18px] bg-forest text-linen rounded-[4px] px-6 py-5 transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
                >
                  <span className="w-11 h-11 rounded-full border border-[rgba(244,239,231,.35)] grid place-items-center text-[20px] shrink-0">
                    ✆
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[.16em] uppercase text-[rgba(244,239,231,.7)]">
                      Téléphone
                    </span>
                    <span className="block font-serif text-[22px] mt-[2px]">
                      07 71 83 80 10
                    </span>
                  </span>
                </a>
                <a
                  href="https://wa.me/33771838010"
                  className="flex items-center gap-[18px] bg-cream border border-[rgba(34,28,21,.1)] text-ink rounded-[4px] px-6 py-5 transition-[border-color,transform] duration-[400ms] hover:border-gold hover:-translate-y-[2px] hover:text-ink"
                >
                  <span className="w-11 h-11 rounded-full border border-[rgba(192,135,60,.5)] text-bronze grid place-items-center text-[20px] shrink-0">
                    ✉
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[.16em] uppercase text-mute">
                      WhatsApp / SMS
                    </span>
                    <span className="block font-serif text-[22px] mt-[2px] text-ink">
                      Écrire un message
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:contact@alexmassage.fr"
                  className="flex items-center gap-[18px] bg-cream border border-[rgba(34,28,21,.1)] text-ink rounded-[4px] px-6 py-5 transition-[border-color,transform] duration-[400ms] hover:border-gold hover:-translate-y-[2px] hover:text-ink"
                >
                  <span className="w-11 h-11 rounded-full border border-[rgba(192,135,60,.5)] text-bronze grid place-items-center text-[18px] shrink-0">
                    @
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[.16em] uppercase text-mute">
                      Email
                    </span>
                    <span className="block font-serif text-[19px] mt-[2px] text-ink">
                      contact@alexmassage.fr
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-8 pt-7 border-t border-[rgba(34,28,21,.12)] flex flex-wrap gap-7">
                <div>
                  <span className="block text-[11px] tracking-[.16em] uppercase text-mute mb-[6px]">
                    Horaires
                  </span>
                  <span className="text-cocoa text-[15.5px] font-medium">
                    Lun – Ven · 9 h – 19 h
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[.16em] uppercase text-mute mb-[6px]">
                    Zone
                  </span>
                  <span className="text-cocoa text-[15.5px] font-medium">
                    Toulouse &amp; 30 km alentour
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne formulaire */}
            <div className="flex-[1_1_380px] min-w-[300px]" data-reveal="140">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Zone d'intervention stylisée */}
        <section
          aria-labelledby="h-zone"
          className="relative overflow-hidden py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
          style={{
            background:
              "radial-gradient(130% 130% at 80% 20%, #2c2013 0%, #17120E 60%)",
          }}
        >
          <div className="max-w-[1120px] mx-auto flex flex-wrap gap-[clamp(36px,5vw,72px)] items-center">
            <div className="flex-[1_1_320px] min-w-[280px]" data-reveal>
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-goldlight m-0 mb-4">
                Zone d&apos;intervention
              </p>
              <h2
                id="h-zone"
                className="font-serif font-normal text-[clamp(28px,4vw,48px)] leading-[1.08] text-linen m-0 mb-5 max-w-[16ch]"
              >
                Toulouse et 30 km à la ronde
              </h2>
              <p className="m-0 mb-4 text-[rgba(244,239,231,.8)] text-[16.5px] leading-[1.78]">
                Je me déplace à domicile dans toute la métropole toulousaine
                et sa région — jusqu&apos;à Muret, où je collabore avec des
                instituts partenaires.
              </p>
              <p className="m-0 text-[rgba(244,239,231,.66)] text-[15px] leading-[1.7]">
                Une commune un peu plus loin ? Appelez‑moi, on trouvera une
                solution.
              </p>
              <div className="flex flex-wrap gap-[10px] mt-7">
                {COMMUNES.map((c) => (
                  <span
                    key={c}
                    className="text-[12px] tracking-[.06em] text-linen border border-[rgba(216,165,90,.4)] rounded-[100px] px-4 py-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="flex-[1_1_360px] min-w-[300px] grid place-items-center"
              data-reveal="140"
            >
              <div className="relative w-[min(100%,420px)] aspect-square grid place-items-center">
                <div
                  aria-hidden="true"
                  className="absolute w-full h-full border border-[rgba(216,165,90,.18)] rounded-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute w-[68%] h-[68%] border border-[rgba(216,165,90,.28)] rounded-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute w-[38%] h-[38%] border border-[rgba(216,165,90,.4)] rounded-full animate-[breatheGlow_12s_ease-in-out_infinite]"
                />
                <div
                  aria-hidden="true"
                  className="absolute w-[96%] h-[96%] rounded-full border border-dashed border-[rgba(216,165,90,.22)]"
                />
                <div className="relative text-center z-[1]">
                  <div className="w-[14px] h-[14px] bg-gold rounded-full mx-auto mb-3 shadow-[0_0_0_6px_rgba(192,135,60,.2)]" />
                  <span className="font-serif text-[22px] text-linen block">
                    Toulouse
                  </span>
                  <span className="text-[12px] tracking-[.14em] uppercase text-goldlight mt-1 block">
                    Rayon 30 km
                  </span>
                </div>
                <span className="absolute top-[6%] left-1/2 -translate-x-1/2 text-[11px] tracking-[.1em] text-[rgba(244,239,231,.5)]">
                  N
                </span>
                <span className="absolute bottom-[14%] left-[24%] text-[12px] text-[rgba(244,239,231,.7)]">
                  Muret
                </span>
                <span className="absolute top-[26%] right-[16%] text-[12px] text-[rgba(244,239,231,.7)]">
                  Balma
                </span>
                <span className="absolute top-[34%] left-[12%] text-[12px] text-[rgba(244,239,231,.7)]">
                  Colomiers
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
