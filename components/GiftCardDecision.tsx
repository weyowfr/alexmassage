"use client";

import { useActionState, useState } from "react";
import {
  acceptGiftCard,
  refuseGiftCard,
  type DecisionState,
} from "@/app/actions/gift-card";
import {
  FormError,
  FormSuccess,
  inputClass,
  labelClass,
  submitClass,
  textareaClass,
} from "@/components/BookingForm";

type Props = {
  token: string;
  montant: string;
  hasEmail: boolean;
  initial: "accepter" | "refuser";
};

/* Le mail contient des liens : la décision est confirmée ici par un bouton
   (POST), pour qu'un antivirus qui « visite » les liens n'envoie rien. */
export default function GiftCardDecision({ token, montant, hasEmail, initial }: Props) {
  const [tab, setTab] = useState(initial);
  const [accepted, accept, accepting] = useActionState<DecisionState, FormData>(
    acceptGiftCard,
    {},
  );
  const [refused, refuse, refusing] = useActionState<DecisionState, FormData>(
    refuseGiftCard,
    {},
  );

  const done = accepted.done ? accepted : refused.done ? refused : null;
  if (done) {
    return (
      <div className="mt-6 bg-cream border border-[rgba(34,28,21,.09)] rounded-md">
        <FormSuccess
          title={done.done === "accepted" ? "Carte cadeau envoyée" : "Commande refusée"}
          text={done.info ?? ""}
        />
      </div>
    );
  }

  const tabClass = (on: boolean) =>
    `flex-1 py-3 text-[13px] tracking-[.08em] uppercase font-semibold border-b-2 transition-colors ${
      on ? "border-gold text-ink" : "border-transparent text-taupe hover:text-ink"
    }`;

  return (
    <div className="mt-6 bg-cream border border-[rgba(34,28,21,.09)] rounded-md p-[clamp(20px,3vw,32px)]">
      <div role="tablist" className="flex mb-6 border-b border-[rgba(34,28,21,.12)]">
        <button type="button" role="tab" aria-selected={tab === "accepter"} className={tabClass(tab === "accepter")} onClick={() => setTab("accepter")}>
          Accepter
        </button>
        <button type="button" role="tab" aria-selected={tab === "refuser"} className={tabClass(tab === "refuser")} onClick={() => setTab("refuser")}>
          Refuser
        </button>
      </div>

      {tab === "accepter" ? (
        <form action={accept} className="flex flex-col gap-[18px]">
          <input type="hidden" name="t" value={token} />
          <label className="block">
            <span className={labelClass}>Montant inscrit sur la carte</span>
            <input name="montant" defaultValue={montant} className={inputClass} />
          </label>
          <p className="m-0 text-taupe text-[14.5px] leading-[1.65]">
            À valider une fois le paiement reçu. La carte part immédiatement par email, avec son
            code et sa date de validité. Une copie arrive sur contact@alexmassage.fr.
          </p>
          {accepted.error && <FormError text={accepted.error} />}
          <button type="submit" disabled={accepting} className={`${submitClass} disabled:opacity-60 disabled:cursor-wait`}>
            {accepting ? "Envoi en cours…" : "Accepter et envoyer la carte"}
          </button>
        </form>
      ) : (
        <form action={refuse} className="flex flex-col gap-[18px]">
          <input type="hidden" name="t" value={token} />
          <label className="flex items-center gap-3 text-[15px] text-ink">
            <input type="checkbox" name="notify" defaultChecked={hasEmail} disabled={!hasEmail} className="w-4 h-4 accent-[#2c4034]" />
            Prévenir le client par email
            {!hasEmail && <span className="text-mute text-[13px]">(pas d&apos;email fourni)</span>}
          </label>
          <label className="block">
            <span className={labelClass}>
              Motif{" "}
              <span className="normal-case tracking-normal text-mute font-normal">(facultatif, inclus dans le mail)</span>
            </span>
            <textarea name="motif" rows={3} className={textareaClass} placeholder="Ex. paiement non reçu, zone non desservie…" />
          </label>
          {refused.error && <FormError text={refused.error} />}
          <button
            type="submit"
            disabled={refusing}
            className="w-full border border-[rgba(138,59,42,.45)] cursor-pointer bg-transparent text-[#8a3b2a] font-bold text-[13.5px] tracking-[.06em] uppercase px-6 py-[17px] rounded-[2px] transition-colors hover:bg-[rgba(138,59,42,.07)] disabled:opacity-60 disabled:cursor-wait"
          >
            {refusing ? "Envoi en cours…" : "Refuser la commande"}
          </button>
        </form>
      )}
    </div>
  );
}
