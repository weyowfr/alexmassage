"use server";

import { decisionUrl, newOrderId, signOrder, type GiftOrder } from "@/lib/gift-card";
import { escapeHtml, FROM, getTransport, isEmail, TO_EMAILS } from "@/lib/mailer";

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
  ["envoi", "Carte envoyée à"],
  ["emailBeneficiaire", "Email du bénéficiaire"],
  ["societe", "Société"],
  ["effectif", "Effectif"],
  ["evenement", "Événement"],
  ["date", "Date souhaitée"],
  ["message", "Message"],
];

const FALLBACK_ERROR =
  "L'envoi n'a pas abouti. Réessayez, ou appelez-moi directement au 07 71 83 80 10.";

/* Boutons Accepter / Refuser du mail de commande de carte cadeau. */
function decisionHtml(url: string): string {
  const btn = (label: string, href: string, bg: string, fg: string) =>
    `<a href="${href}" style="display:inline-block;background:${bg};color:${fg};text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:13px 24px;border-radius:3px;margin:0 6px 8px 0;border:1px solid #2c4034;">${label}</a>`;
  return `
      <tr>
        <td style="padding:4px 24px 24px;">
          <p style="margin:0 0 12px;color:#3d362e;font-size:14px;font-family:Arial,Helvetica,sans-serif;">
            Une fois le paiement reçu, acceptez pour envoyer la carte cadeau automatiquement.
          </p>
          ${btn("✓ Accepter et envoyer la carte", `${url}&amp;d=accepter`, "#2c4034", "#f4efe7")}
          ${btn("✕ Refuser", `${url}&amp;d=refuser`, "#ffffff", "#8a3b2a")}
        </td>
      </tr>`;
}

function buildHtml(subject: string, rows: [string, string][], decisionLink?: string): string {
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
      </tr>${decisionLink ? decisionHtml(escapeHtml(decisionLink)) : ""}
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

  const transporter = getTransport();
  if (!transporter) {
    console.error("sendBooking: SMTP_PASSWORD manquant — demande perdue :", rows);
    return { ok: false, error: FALLBACK_ERROR };
  }

  const email = String(formData.get("email") ?? "").trim();

  /* Carte cadeau : lien signé pour qu'Alex accepte ou refuse depuis le mail. */
  let decisionLink: string | undefined;
  if (variant === "cadeau") {
    const field = (name: string, max: number) =>
      String(formData.get(name) ?? "").trim().slice(0, max);
    const envoi = field("envoi", 40) === "beneficiaire" ? "beneficiaire" : "acheteur";
    const emailBeneficiaire = field("emailBeneficiaire", 200);
    if (envoi === "beneficiaire" ? !isEmail(emailBeneficiaire) : !isEmail(email)) {
      return {
        ok: false,
        error:
          envoi === "beneficiaire"
            ? "Indiquez l'email du bénéficiaire pour qu'il reçoive la carte."
            : "Indiquez votre email pour recevoir la carte cadeau.",
      };
    }
    const order: GiftOrder = {
      id: newOrderId(),
      nom,
      tel,
      email,
      montant: field("montant", 40),
      occasion: field("occasion", 60),
      livraison: field("livraison", 60),
      beneficiaire: field("beneficiaire", 80),
      envoi,
      emailBeneficiaire,
      message: field("message", 600),
      iat: Date.now(),
    };
    decisionLink = decisionUrl(signOrder(order));
  }

  try {
    await transporter.sendMail({
      from: FROM,
      to: TO_EMAILS,
      subject: `${subject} — ${nom}`,
      text: `${rows.map(([label, value]) => `${label} : ${value}`).join("\n")}${decisionLink ? `\n\nAccepter ou refuser la carte cadeau : ${decisionLink}` : ""}\n\n— Envoyé depuis le formulaire alexmassage.fr`,
      html: buildHtml(subject, rows, decisionLink),
      ...(email ? { replyTo: email } : {}),
    });
  } catch (err) {
    console.error("sendBooking: échec de l'envoi SMTP", err);
    return { ok: false, error: FALLBACK_ERROR };
  }

  return { ok: true };
}
