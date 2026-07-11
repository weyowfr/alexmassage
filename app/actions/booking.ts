"use server";

export type BookingState = {
  ok: boolean;
  error?: string;
};

const SUBJECTS: Record<string, string> = {
  massage: "Demande de réservation massage",
  cadeau: "Commande de carte cadeau",
  entreprise: "Demande de devis entreprise",
  contact: "Demande de rendez-vous",
};

/* Ordre et libellés des champs dans l'email récapitulatif. */
const LABELS: [string, string][] = [
  ["nom", "Nom & prénom"],
  ["tel", "Téléphone"],
  ["email", "Email"],
  ["prestation", "Prestation"],
  ["duree", "Durée"],
  ["formule", "Formule"],
  ["commune", "Commune"],
  ["dispo", "Disponibilités"],
  ["montant", "Montant"],
  ["occasion", "Occasion"],
  ["livraison", "Livraison"],
  ["beneficiaire", "Bénéficiaire"],
  ["societe", "Société"],
  ["effectif", "Effectif"],
  ["evenement", "Événement"],
  ["date", "Date souhaitée"],
  ["message", "Message"],
];

const FALLBACK_ERROR =
  "L'envoi n'a pas abouti. Réessayez, ou appelez-moi directement au 07 71 83 80 10.";

export async function sendBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  // Honeypot anti-spam : un humain ne remplit jamais ce champ caché.
  if (formData.get("website")) {
    return { ok: true };
  }

  const variant = String(formData.get("variant") ?? "contact");
  const subject = SUBJECTS[variant] ?? SUBJECTS.contact;

  const nom = String(formData.get("nom") ?? "").trim().slice(0, 120);
  const tel = String(formData.get("tel") ?? "").trim().slice(0, 40);
  if (!nom || !tel) {
    return {
      ok: false,
      error: "Merci d'indiquer au moins votre nom et votre téléphone.",
    };
  }

  const lines = LABELS.flatMap(([name, label]) => {
    const value = String(formData.get(name) ?? "").trim();
    return value ? [`${label} : ${value.slice(0, 2000)}`] : [];
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("sendBooking: RESEND_API_KEY manquante — demande perdue :", lines);
    return { ok: false, error: FALLBACK_ERROR };
  }

  const email = String(formData.get("email") ?? "").trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.BOOKING_FROM_EMAIL ??
          "Alex Massage <site@alexmassage.fr>",
        to: [process.env.BOOKING_TO_EMAIL ?? "contact@alexmassage.fr"],
        subject: `${subject} — ${nom}`,
        text: `${lines.join("\n")}\n\n— Envoyé depuis le formulaire alexmassage.fr`,
        ...(email ? { reply_to: email } : {}),
      }),
    });

    if (!res.ok) {
      console.error("sendBooking: Resend a répondu", res.status, await res.text());
      return { ok: false, error: FALLBACK_ERROR };
    }
  } catch (err) {
    console.error("sendBooking: échec de l'appel Resend", err);
    return { ok: false, error: FALLBACK_ERROR };
  }

  return { ok: true };
}
