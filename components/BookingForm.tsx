"use client";

import { useState } from "react";

type Variant = "massage" | "cadeau" | "entreprise" | "contact";

type BookingFormProps = {
  variant?: Variant;
  preset?: string;
  heading?: string;
  sub?: string;
};

const COPY: Record<
  Variant,
  {
    eye: string;
    h: string;
    s: string;
    ok: string;
    submit: string;
    ml: string;
    mp: string;
  }
> = {
  massage: {
    eye: "Réserver",
    h: "Réservez votre massage",
    s: "Dites-moi le massage, la formule et vos disponibilités — je vous rappelle sous 24 h ouvrées pour caler le créneau.",
    ok: "Je vous recontacte très vite pour convenir de votre séance à domicile. À très bientôt.",
    submit: "Envoyer ma demande",
    ml: "Message",
    mp: "Une attente particulière, une zone à soulager…",
  },
  cadeau: {
    eye: "Carte cadeau",
    h: "Commandez une carte cadeau",
    s: "Choisissez le montant et l'occasion — je vous recontacte pour finaliser et vous envoyer la carte.",
    ok: "Je vous recontacte pour finaliser votre carte cadeau et vous l'envoyer. Merci pour cette belle attention.",
    submit: "Commander la carte cadeau",
    ml: "Message pour le bénéficiaire",
    mp: "Un petit mot à joindre à la carte (facultatif)…",
  },
  entreprise: {
    eye: "Devis entreprise",
    h: "Demandez votre devis",
    s: "Parlez-moi de vos équipes et de votre événement — je reviens vers vous avec une proposition sur mesure, sans engagement.",
    ok: "Je reviens très vite vers vous avec une proposition adaptée à vos équipes. Merci de votre confiance.",
    submit: "Demander un devis",
    ml: "Votre projet",
    mp: "Contexte, lieu, contraintes, objectifs bien-être…",
  },
  contact: {
    eye: "Prendre rendez-vous",
    h: "Demande de rendez-vous",
    s: "Réponse sous 24 h ouvrées. Un appel ou un message, et nous convenons ensemble de votre séance.",
    ok: "Je vous recontacte très vite pour convenir de votre séance. À bientôt.",
    submit: "Envoyer ma demande",
    ml: "Votre message",
    mp: "Vos disponibilités, votre commune, vos attentes…",
  },
};

export const inputClass =
  "w-full box-border font-sans text-[15.5px] text-ink bg-white border border-[rgba(34,28,21,.16)] rounded-[3px] px-[15px] py-[13px] transition-[border-color,box-shadow] duration-300 outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(192,135,60,.16)]";

export const textareaClass = `${inputClass} resize-y min-h-[104px] leading-[1.6]`;

export const labelClass =
  "block text-[12px] tracking-[.1em] uppercase text-taupe font-semibold mb-2";

export const submitClass =
  "w-full border-none cursor-pointer font-sans bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-6 py-[17px] rounded-[2px] transition-[background-color,transform] duration-[400ms] mt-1 hover:bg-goldlight hover:-translate-y-[2px]";

export function FormSuccess({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-center py-[34px] px-[10px]">
      <div
        aria-hidden="true"
        className="w-[66px] h-[66px] mx-auto mb-[22px] rounded-full border-[1.5px] border-[rgba(192,135,60,.55)] grid place-items-center text-gold text-[30px]"
      >
        ✓
      </div>
      <h3 className="font-serif font-normal text-[26px] text-ink m-0 mb-[10px]">
        {title}
      </h3>
      <p className="m-0 mx-auto text-taupe text-[16px] leading-[1.7] max-w-[38ch]">
        {text}
      </p>
    </div>
  );
}

export default function BookingForm({
  variant = "contact",
  preset,
  heading,
  sub,
}: BookingFormProps) {
  const [sent, setSent] = useState(false);
  const c = COPY[variant];

  const isMassage = variant === "massage";
  const isCadeau = variant === "cadeau";
  const isEntreprise = variant === "entreprise";
  const isContact = variant === "contact";

  return (
    <section
      id="reserver"
      className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
    >
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-[clamp(30px,4vw,46px)]">
          <p
            data-reveal
            className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
          >
            {c.eye}
          </p>
          <h2
            data-reveal="80"
            className="font-serif font-normal text-[clamp(28px,4vw,46px)] leading-[1.08] tracking-[-.01em] text-ink m-0 max-w-[18ch] mx-auto text-balance"
          >
            {heading || c.h}
          </h2>
          <p
            data-reveal="150"
            className="mt-[18px] mx-auto mb-0 text-taupe text-[16.5px] leading-[1.7] max-w-[52ch]"
          >
            {sub || c.s}
          </p>
          <div
            data-reveal="200"
            className="flex flex-wrap gap-y-[10px] gap-x-[22px] justify-center items-center mt-6"
          >
            <a
              href="tel:+33771838010"
              className="inline-flex items-center gap-[9px] text-forest font-semibold text-[13.5px] tracking-[.03em] hover:text-bronze"
            >
              <span aria-hidden="true">✆</span> 07 71 83 80 10
            </a>
            <span
              aria-hidden="true"
              className="w-1 h-1 rounded-full bg-gold"
            />
            <a
              href="https://wa.me/33771838010"
              className="inline-flex items-center gap-[9px] text-forest font-semibold text-[13.5px] tracking-[.03em] hover:text-bronze"
            >
              <span aria-hidden="true">✉</span> WhatsApp
            </a>
          </div>
        </div>

        <form
          data-reveal="120"
          aria-label={heading || c.h}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-cream border border-[rgba(34,28,21,.09)] rounded-md p-[clamp(26px,3.4vw,44px)]"
        >
          {sent ? (
            <FormSuccess title="C'est envoyé, merci !" text={c.ok} />
          ) : (
            <div className="flex flex-col gap-[18px]">
              <label className="block">
                <span className={labelClass}>Nom &amp; prénom</span>
                <input
                  type="text"
                  name="nom"
                  required
                  className={inputClass}
                  placeholder="Votre nom"
                />
              </label>
              <div className="flex flex-wrap gap-[18px]">
                <label className="block flex-[1_1_170px]">
                  <span className={labelClass}>Téléphone</span>
                  <input
                    type="tel"
                    name="tel"
                    required
                    className={inputClass}
                    placeholder="06 XX XX XX XX"
                  />
                </label>
                <label className="block flex-[1_1_170px]">
                  <span className={labelClass}>Email</span>
                  <input
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="vous@exemple.fr"
                  />
                </label>
              </div>

              {isMassage && (
                <div className="flex flex-col gap-[18px]">
                  <label className="block">
                    <span className={labelClass}>Massage souhaité</span>
                    <select
                      name="prestation"
                      defaultValue={preset || "Massage californien (relaxant)"}
                      className={inputClass}
                    >
                      <option value="Massage californien (relaxant)">
                        Massage californien (relaxant)
                      </option>
                      <option value="Massage abhyanga (énergétique)">
                        Massage abhyanga (énergétique)
                      </option>
                      <option value="Massage suédois / sportif">
                        Massage suédois / sportif
                      </option>
                      <option value="Massage duo">Massage duo</option>
                    </select>
                  </label>
                  <div className="flex flex-wrap gap-[18px]">
                    <label className="block flex-[1_1_160px]">
                      <span className={labelClass}>Durée</span>
                      <select
                        name="duree"
                        defaultValue="1 h"
                        className={inputClass}
                      >
                        <option value="Découverte 30 min">
                          Découverte 30 min
                        </option>
                        <option value="45 min">45 min</option>
                        <option value="1 h">1 heure</option>
                        <option value="1 h 30">1 h 30</option>
                      </select>
                    </label>
                    <label className="block flex-[1_1_160px]">
                      <span className={labelClass}>Formule</span>
                      <select
                        name="formule"
                        defaultValue="Solo"
                        className={inputClass}
                      >
                        <option value="Solo">Solo</option>
                        <option value="Duo">Duo</option>
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className={labelClass}>Votre commune</span>
                    <input
                      type="text"
                      name="commune"
                      className={inputClass}
                      placeholder="Toulouse, Muret, Colomiers…"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Vos disponibilités</span>
                    <input
                      type="text"
                      name="dispo"
                      className={inputClass}
                      placeholder="Ex. en semaine après 18 h, le samedi matin…"
                    />
                  </label>
                </div>
              )}

              {isCadeau && (
                <div className="flex flex-col gap-[18px]">
                  <div className="flex flex-wrap gap-[18px]">
                    <label className="block flex-[1_1_160px]">
                      <span className={labelClass}>Montant</span>
                      <select
                        name="montant"
                        defaultValue="50 €"
                        className={inputClass}
                      >
                        <option value="30 €">30 €</option>
                        <option value="50 €">50 €</option>
                        <option value="60 €">60 €</option>
                        <option value="Montant libre">Montant libre</option>
                      </select>
                    </label>
                    <label className="block flex-[1_1_160px]">
                      <span className={labelClass}>Occasion</span>
                      <select
                        name="occasion"
                        defaultValue="Anniversaire"
                        className={inputClass}
                      >
                        <option value="Noël">Noël</option>
                        <option value="Anniversaire">Anniversaire</option>
                        <option value="Saint-Valentin">Saint-Valentin</option>
                        <option value="Départ en retraite">
                          Départ en retraite
                        </option>
                        <option value="Juste pour faire plaisir">
                          Juste pour faire plaisir
                        </option>
                        <option value="Autre">Autre</option>
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className={labelClass}>Livraison</span>
                    <select
                      name="livraison"
                      defaultValue="Numérique (par email)"
                      className={inputClass}
                    >
                      <option value="Numérique (par email)">
                        Numérique — par email, instantané
                      </option>
                      <option value="Carte papier">Carte papier</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>
                      Bénéficiaire{" "}
                      <span className="normal-case tracking-normal text-mute font-normal">
                        (facultatif)
                      </span>
                    </span>
                    <input
                      type="text"
                      name="beneficiaire"
                      className={inputClass}
                      placeholder="Le prénom de la personne à qui l'offrir"
                    />
                  </label>
                </div>
              )}

              {isEntreprise && (
                <div className="flex flex-col gap-[18px]">
                  <label className="block">
                    <span className={labelClass}>Société</span>
                    <input
                      type="text"
                      name="societe"
                      className={inputClass}
                      placeholder="Nom de votre entreprise"
                    />
                  </label>
                  <div className="flex flex-wrap gap-[18px]">
                    <label className="block flex-[1_1_160px]">
                      <span className={labelClass}>Effectif concerné</span>
                      <select
                        name="effectif"
                        defaultValue="10 à 30"
                        className={inputClass}
                      >
                        <option value="Moins de 10">Moins de 10</option>
                        <option value="10 à 30">10 à 30</option>
                        <option value="30 à 100">30 à 100</option>
                        <option value="Plus de 100">Plus de 100</option>
                      </select>
                    </label>
                    <label className="block flex-[1_1_160px]">
                      <span className={labelClass}>Type d&apos;événement</span>
                      <select
                        name="evenement"
                        defaultValue="Semaine QVCT"
                        className={inputClass}
                      >
                        <option value="Semaine QVCT">Semaine QVCT</option>
                        <option value="Séminaire">Séminaire</option>
                        <option value="Team building">Team building</option>
                        <option value="Remerciement des équipes">
                          Remerciement des équipes
                        </option>
                        <option value="Rendez-vous régulier">
                          Rendez-vous régulier
                        </option>
                        <option value="Autre">Autre</option>
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className={labelClass}>
                      Date souhaitée{" "}
                      <span className="normal-case tracking-normal text-mute font-normal">
                        (facultatif)
                      </span>
                    </span>
                    <input
                      type="text"
                      name="date"
                      className={inputClass}
                      placeholder="Ex. semaine du 12 mai, à définir…"
                    />
                  </label>
                </div>
              )}

              {isContact && (
                <label className="block">
                  <span className={labelClass}>Prestation souhaitée</span>
                  <select
                    name="prestation"
                    defaultValue={preset || "Massage californien (relaxant)"}
                    className={inputClass}
                  >
                    <option value="Massage californien (relaxant)">
                      Massage californien (relaxant)
                    </option>
                    <option value="Massage abhyanga (énergétique)">
                      Massage abhyanga (énergétique)
                    </option>
                    <option value="Massage suédois / sportif">
                      Massage suédois / sportif
                    </option>
                    <option value="Massage duo">Massage duo</option>
                    <option value="Carte cadeau">Carte cadeau</option>
                    <option value="Massage en entreprise">
                      Massage en entreprise
                    </option>
                    <option value="Je ne sais pas encore">
                      Je ne sais pas encore
                    </option>
                  </select>
                </label>
              )}

              <label className="block">
                <span className={labelClass}>{c.ml}</span>
                <textarea
                  name="message"
                  rows={4}
                  className={textareaClass}
                  placeholder={c.mp}
                />
              </label>
              <button type="submit" className={submitClass}>
                {c.submit}
              </button>
              <p className="m-0 text-mute text-[12.5px] leading-[1.6] text-center">
                En envoyant ce formulaire, vous acceptez d&apos;être
                recontacté(e) au sujet de votre demande.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
