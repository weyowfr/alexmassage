"use client";

import { useState } from "react";
import {
  FormSuccess,
  inputClass,
  labelClass,
  submitClass,
  textareaClass,
} from "./BookingForm";

/* Formulaire de la page Contact (colonne droite). */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      aria-label="Formulaire de contact"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-cream border border-[rgba(34,28,21,.09)] rounded-md p-[clamp(26px,3vw,40px)]"
    >
      {sent ? (
        <div className="py-[6px]">
          <FormSuccess
            title="Message bien envoyé"
            text="Merci, je vous recontacte très vite pour convenir de votre séance. À bientôt."
          />
        </div>
      ) : (
        <div>
          <h3 className="font-serif font-normal text-[clamp(22px,2.6vw,28px)] text-ink m-0 mb-[6px]">
            Demande de rendez‑vous
          </h3>
          <p className="m-0 mb-[26px] text-mute text-[14.5px]">
            Réponse sous 24 h ouvrées.
          </p>

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
              <label className="block flex-[1_1_160px]">
                <span className={labelClass}>Téléphone</span>
                <input
                  type="tel"
                  name="tel"
                  required
                  className={inputClass}
                  placeholder="06 XX XX XX XX"
                />
              </label>
              <label className="block flex-[1_1_160px]">
                <span className={labelClass}>Email</span>
                <input
                  type="email"
                  name="email"
                  className={inputClass}
                  placeholder="vous@exemple.fr"
                />
              </label>
            </div>
            <label className="block">
              <span className={labelClass}>Prestation souhaitée</span>
              <select
                name="prestation"
                defaultValue="Massage californien (relaxant)"
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
            <label className="block">
              <span className={labelClass}>Votre message</span>
              <textarea
                name="message"
                rows={4}
                className={textareaClass}
                placeholder="Vos disponibilités, votre commune, vos attentes…"
              />
            </label>
            <button type="submit" className={submitClass}>
              Envoyer ma demande
            </button>
            <p className="m-0 text-mute text-[12.5px] leading-[1.6] text-center">
              En envoyant ce formulaire, vous acceptez d&apos;être
              recontacté(e) au sujet de votre demande.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
