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

/* Envoi via FormSubmit.co : sans compte ni clé API. Au tout premier envoi,
   FormSubmit adresse un email d'activation à TO_EMAIL — un clic suffit. */
const TO_EMAIL = process.env.BOOKING_TO_EMAIL ?? "contact@alexmassage.fr";
const CC_EMAILS =
  process.env.BOOKING_CC_EMAILS ??
  "alexandre.roux31@gmail.com,alexmassage31@gmail.com";

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

  // Les libellés servent de clés : FormSubmit les affiche tels quels,
  // une ligne par champ, dans l'ordre de LABELS.
  const fields: Record<string, string> = {};
  for (const [name, label] of LABELS) {
    const value = String(formData.get(name) ?? "").trim();
    if (value) fields[label] = value.slice(0, 2000);
  }

  const email = String(formData.get("email") ?? "").trim();

  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // FormSubmit rejette les requêtes sans origine web identifiable.
          Origin: "https://alexmassage.fr",
          Referer: "https://alexmassage.fr/",
        },
        body: JSON.stringify({
          _subject: `${subject} — ${nom}`,
          _template: "table",
          _captcha: "false",
          ...(CC_EMAILS ? { _cc: CC_EMAILS } : {}),
          ...(email ? { _replyto: email } : {}),
          ...fields,
        }),
      },
    );

    const data = (await res.json().catch(() => null)) as {
      success?: string | boolean;
    } | null;

    if (!res.ok || String(data?.success) !== "true") {
      console.error(
        "sendBooking: FormSubmit a répondu",
        res.status,
        JSON.stringify(data),
      );
      return { ok: false, error: FALLBACK_ERROR };
    }
  } catch (err) {
    console.error("sendBooking: échec de l'appel FormSubmit", err);
    return { ok: false, error: FALLBACK_ERROR };
  }

  return { ok: true };
}
