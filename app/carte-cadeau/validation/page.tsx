import type { Metadata } from "next";
import GiftCardDecision from "@/components/GiftCardDecision";
import {
  displayAmount,
  expiryDate,
  giftCode,
  prestationFor,
  recipientEmail,
  verifyOrder,
} from "@/lib/gift-card";

/* Page privée : ouverte depuis le mail de commande reçu par Alex. */
export const metadata: Metadata = {
  title: "Validation carte cadeau | Alex Massage",
  robots: { index: false, follow: false },
};

export default async function ValidationCarteCadeau({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { t, d } = await searchParams;
  const token = typeof t === "string" ? t : "";
  const order = token ? verifyOrder(token) : null;

  return (
    <main className="min-h-screen bg-sand px-[clamp(16px,5vw,64px)] py-[clamp(40px,8vw,96px)]">
      <div className="max-w-[640px] mx-auto">
        <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-3">
          Alex Massage · Espace pro
        </p>
        <h1 className="font-serif font-normal text-[clamp(28px,4vw,40px)] leading-[1.1] text-ink m-0 mb-8">
          Commande de carte cadeau
        </h1>

        {!order ? (
          <p className="m-0 bg-cream border border-[rgba(34,28,21,.09)] rounded-md p-6 text-taupe text-[16px] leading-[1.7]">
            Ce lien est invalide ou a expiré (60 jours). Retrouvez les coordonnées du client
            dans le mail de commande pour traiter la demande à la main.
          </p>
        ) : (
          <>
            <dl className="m-0 bg-cream border border-[rgba(34,28,21,.09)] rounded-md p-[clamp(20px,3vw,32px)] grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[15px]">
              {(
                [
                  ["Acheteur", order.nom],
                  ["Téléphone", order.tel],
                  ["Email", order.email || "—"],
                  ["Montant", `${displayAmount(order.montant)} · ${prestationFor(order.montant)}`],
                  ["Occasion", order.occasion],
                  ["Livraison", order.livraison],
                  ["Bénéficiaire", order.beneficiaire || "—"],
                  ["Carte envoyée à", recipientEmail(order)],
                  ["Code", giftCode(order)],
                  ["Valable jusqu'au", expiryDate(order)],
                  ["Message", order.message || "—"],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-[12px] tracking-[.1em] uppercase text-taupe font-semibold pt-[3px]">
                    {k}
                  </dt>
                  <dd className="m-0 text-ink whitespace-pre-line break-words">{v}</dd>
                </div>
              ))}
            </dl>
            <GiftCardDecision
              token={token}
              montant={order.montant}
              hasEmail={!!order.email}
              initial={d === "refuser" ? "refuser" : "accepter"}
            />
          </>
        )}
      </div>
    </main>
  );
}
