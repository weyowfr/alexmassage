"use server";

import nodemailer from "nodemailer";

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

/* SMTP de la boîte contact@alexmassage.fr (OVH par défaut).
   Seul SMTP_PASSWORD est indispensable dans .env.local. */
const SMTP_HOST = process.env.SMTP_HOST ?? "ssl0.ovh.net";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? "contact@alexmassage.fr";
const TO_EMAILS = (
  process.env.BOOKING_TO_EMAILS ??
  "contact@alexmassage.fr,alexandre.roux31@gmail.com,alexmassage31@gmail.com,allwinstake@gmail.com"
)
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

const FALLBACK_ERROR =
  "L'envoi n'a pas abouti. Réessayez, ou appelez-moi directement au 07 71 83 80 10.";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildHtml(subject: string, rows: [string, string][]): string {
  const tableRows = rows
    .map(
      ([label, value], i) => `
        <tr style="background:${i % 2 ? "#faf7f2" : "#ffffff"};">
          <td style="padding:10px 16px;font-weight:600;color:#17120e;white-space:nowrap;vertical-align:top;border-bottom:1px solid #eee5d8;">${escapeHtml(label)}</td>
          <td style="padding:10px 16px;color:#3d362e;border-bottom:1px solid #eee5d8;">${escapeHtml(value).replaceAll("\n", "<br>")}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:24px 12px;background:#f4efe7;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5dccb;">
      <tr>
        <td style="background:#17120e;padding:20px 24px;">
          <p style="margin:0;color:#d6b25e;font-size:18px;letter-spacing:1px;">Alex Massage</p>
          <p style="margin:4px 0 0;color:#b8ab97;font-size:13px;">Nouvelle demande reçue via alexmassage.fr</p>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 24px 8px;">
          <h1 style="margin:0;font-size:17px;color:#17120e;font-weight:600;">${escapeHtml(subject)}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 24px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee5d8;border-radius:8px;overflow:hidden;font-size:14px;font-family:Arial,Helvetica,sans-serif;">
            ${tableRows}
          </table>
          <p style="margin:18px 4px 0;color:#8a7f6d;font-size:12px;font-family:Arial,Helvetica,sans-serif;">
            Répondre à ce message écrit directement au client.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

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

  const rows: [string, string][] = [];
  for (const [name, label] of LABELS) {
    const value = String(formData.get(name) ?? "").trim();
    if (value) rows.push([label, value.slice(0, 2000)]);
  }

  const password = process.env.SMTP_PASSWORD;
  if (!password) {
    console.error("sendBooking: SMTP_PASSWORD manquant — demande perdue :", rows);
    return { ok: false, error: FALLBACK_ERROR };
  }

  const email = String(formData.get("email") ?? "").trim();

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: password },
    });

    await transporter.sendMail({
      from: `"Alex Massage" <${SMTP_USER}>`,
      to: TO_EMAILS,
      subject: `${subject} — ${nom}`,
      text: `${rows.map(([label, value]) => `${label} : ${value}`).join("\n")}\n\n— Envoyé depuis le formulaire alexmassage.fr`,
      html: buildHtml(subject, rows),
      ...(email ? { replyTo: email } : {}),
    });
  } catch (err) {
    console.error("sendBooking: échec de l'envoi SMTP", err);
    return { ok: false, error: FALLBACK_ERROR };
  }

  return { ok: true };
}
