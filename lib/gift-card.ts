import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { escapeHtml } from "@/lib/mailer";
import { SITE_URL } from "@/lib/structured-data";

/* Commande de carte cadeau, transportée dans le lien « Accepter / Refuser »
   envoyé à Alex. Pas de base de données : le lien est signé (HMAC), il ne
   peut donc pas être fabriqué ni modifié par un tiers. */
export type GiftOrder = {
  id: string;
  nom: string;
  tel: string;
  email: string;
  montant: string;
  occasion: string;
  livraison: string;
  beneficiaire: string;
  /* Destinataire de la carte : l'acheteur (« acheteur ») ou le bénéficiaire. */
  envoi: "acheteur" | "beneficiaire";
  emailBeneficiaire: string;
  message: string;
  /* Date de commande (ms) — point de départ de la validité d'un an. */
  iat: number;
};

/* Un lien de validation reste utilisable 60 jours. */
const LINK_TTL_MS = 60 * 24 * 3600 * 1000;

function secret(): string {
  const s = process.env.GIFT_CARD_SECRET ?? process.env.SMTP_PASSWORD;
  if (!s) throw new Error("GIFT_CARD_SECRET (ou SMTP_PASSWORD) manquant");
  return s;
}

const hmac = (data: string) => createHmac("sha256", secret()).update(data).digest();

export const newOrderId = () => randomBytes(9).toString("base64url");

export function signOrder(order: GiftOrder): string {
  const payload = Buffer.from(JSON.stringify(order)).toString("base64url");
  return `${payload}.${hmac(payload).toString("base64url")}`;
}

export function verifyOrder(token: string): GiftOrder | null {
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = hmac(payload);
  const given = Buffer.from(sig, "base64url");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
  try {
    const order = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as GiftOrder;
    if (Date.now() - order.iat > LINK_TTL_MS) return null;
    return order;
  } catch {
    return null;
  }
}

export const decisionUrl = (token: string) =>
  `${SITE_URL}/carte-cadeau/validation?t=${encodeURIComponent(token)}`;

/* Code lisible, toujours le même pour une commande donnée :
   un double clic sur « Accepter » renvoie la même carte, pas une seconde. */
export function giftCode(order: GiftOrder): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = hmac(`code:${order.id}`);
  const chars = Array.from(bytes.subarray(0, 8), (b) => alphabet[b % alphabet.length]);
  return `AM-${chars.slice(0, 4).join("")}-${chars.slice(4).join("")}`;
}

export function expiryDate(order: GiftOrder): string {
  const d = new Date(order.iat);
  d.setFullYear(d.getFullYear() + 1);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
}

const PRESTATIONS: Record<string, string> = {
  "30 €": "Massage solo · 30 min",
  "50 €": "Massage solo · 45 min",
  "60 €": "Massage solo · 1 h",
  "85 €": "Massage solo · 1 h 30",
  "100 € (duo)": "Massage duo · 45 min",
  "120 € (duo)": "Massage duo · 1 h",
  "170 € (duo)": "Massage duo · 1 h 30",
};

export const prestationFor = (montant: string) =>
  PRESTATIONS[montant] ?? "Massage bien-être à domicile";

/* « 120 € (duo) » → « 120 € » pour l'affichage sur la carte. */
export const displayAmount = (montant: string) => montant.replace(/\s*\(duo\)/, "");

export function recipientEmail(order: GiftOrder): string {
  return order.envoi === "beneficiaire" && order.emailBeneficiaire
    ? order.emailBeneficiaire
    : order.email;
}

/* ---------- Emails ---------- */

const serif = "Georgia,'Times New Roman',serif";
const sans = "Arial,Helvetica,sans-serif";

export function giftCardEmail(order: GiftOrder): { subject: string; html: string; text: string } {
  const code = giftCode(order);
  const amount = displayAmount(order.montant);
  const prestation = prestationFor(order.montant);
  const expiry = expiryDate(order);
  const toBeneficiary = order.envoi === "beneficiaire" && !!order.emailBeneficiaire;
  const isNoel = order.occasion === "Noël";
  const prenom = order.beneficiaire || "vous";
  const e = escapeHtml;

  const subject = toBeneficiary
    ? `${order.nom} vous offre un massage${isNoel ? " pour Noël" : ""} 🎁`
    : `Votre carte cadeau Alex Massage${order.beneficiaire ? ` pour ${order.beneficiaire}` : ""}`;

  const intro = toBeneficiary
    ? `Bonjour${order.beneficiaire ? ` ${e(order.beneficiaire)}` : ""},<br><br><strong>${e(order.nom)}</strong> vous offre un massage à domicile${isNoel ? " pour Noël" : ""}. Voici votre carte cadeau : il ne vous reste plus qu'à choisir votre moment.`
    : `Bonjour ${e(order.nom)},<br><br>Merci pour votre commande. Voici la carte cadeau${order.beneficiaire ? ` à offrir à <strong>${e(order.beneficiaire)}</strong>` : ""}. Vous pouvez l'imprimer ou lui transférer cet email.`;

  const messageBlock = order.message
    ? `<tr><td style="padding:0 34px 26px;">
         <p style="margin:0;font-family:${serif};font-style:italic;font-size:17px;line-height:1.6;color:#f4efe7;border-left:2px solid #c0873c;padding-left:16px;">« ${e(order.message).replaceAll("\n", "<br>")} »</p>
         <p style="margin:10px 0 0 18px;font-family:${sans};font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#d8a55a;">${e(order.nom)}</p>
       </td></tr>`
    : "";

  const html = `<!doctype html>
<html lang="fr">
<body style="margin:0;padding:24px 12px;background:#f4efe7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr><td style="padding:0 6px 22px;font-family:${sans};font-size:15px;line-height:1.7;color:#3d362e;">${intro}</td></tr>
    <tr><td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c2a22;border-radius:10px;overflow:hidden;">
        <tr><td><img src="${SITE_URL}/images/noel/carte-cadeau-email.jpg" width="600" alt="Carte cadeau Alex Massage" style="display:block;width:100%;height:auto;border:0;"></td></tr>
        <tr><td style="padding:30px 34px 8px;">
          <p style="margin:0;font-family:${serif};font-size:14px;letter-spacing:4px;text-transform:uppercase;color:#f4efe7;">Alex Massage</p>
          <p style="margin:4px 0 0;font-family:${sans};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#d8a55a;">Carte cadeau${isNoel ? " · Édition Noël" : ""}</p>
        </td></tr>
        <tr><td style="padding:18px 34px 6px;">
          <p style="margin:0;font-family:${serif};font-style:italic;font-size:26px;line-height:1.25;color:#f4efe7;">Un moment rien qu'à ${order.beneficiaire ? e(prenom) : "toi"}</p>
          <p style="margin:16px 0 0;font-family:${serif};font-size:46px;line-height:1;color:#d8a55a;">${e(amount)}</p>
          <p style="margin:10px 0 0;font-family:${sans};font-size:14px;color:rgba(244,239,231,.8);">${e(prestation)} · à domicile, Toulouse et 30 km</p>
        </td></tr>
        <tr><td style="padding:22px 34px 26px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="border:1px dashed rgba(216,165,90,.6);border-radius:6px;">
            <tr><td style="padding:12px 18px;font-family:${sans};">
              <p style="margin:0;font-size:10.5px;letter-spacing:2px;text-transform:uppercase;color:rgba(244,239,231,.6);">Code de la carte</p>
              <p style="margin:4px 0 0;font-family:'Courier New',monospace;font-size:20px;letter-spacing:2px;color:#f4efe7;font-weight:bold;">${code}</p>
            </td></tr>
          </table>
          <p style="margin:12px 0 0;font-family:${sans};font-size:13px;color:rgba(244,239,231,.7);">Valable jusqu'au ${expiry}</p>
        </td></tr>
        ${messageBlock}
      </table>
    </td></tr>
    <tr><td style="padding:26px 6px 0;font-family:${sans};font-size:14.5px;line-height:1.7;color:#3d362e;">
      <p style="margin:0 0 6px;font-family:${serif};font-size:19px;color:#17120e;">Comment en profiter</p>
      Appelez ou écrivez à Alexandre en donnant le code de la carte. Vous choisissez ensemble le massage (californien, abhyanga ou sportif), la date et le lieu : chez vous, à Toulouse ou dans un rayon de 30 km. Le déplacement est inclus.
      <p style="margin:18px 0 0;">
        <a href="tel:+33771838010" style="display:inline-block;background:#c0873c;color:#17120e;text-decoration:none;font-weight:bold;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:13px 22px;border-radius:2px;">07 71 83 80 10</a>
        &nbsp;
        <a href="https://wa.me/33771838010?text=${encodeURIComponent(`Bonjour, je souhaite réserver mon massage avec la carte cadeau ${code}.`)}" style="display:inline-block;color:#2c4034;font-weight:bold;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:13px 8px;">WhatsApp →</a>
      </p>
    </td></tr>
    <tr><td style="padding:30px 6px 0;font-family:${sans};font-size:11.5px;line-height:1.6;color:#8a7f6d;">
      Massages de bien-être, non thérapeutiques. Carte utilisable en une fois, jusqu'à la date indiquée.<br>
      Alex Massage · <a href="${SITE_URL}" style="color:#8a7f6d;">alexmassage.fr</a> · contact@alexmassage.fr
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    toBeneficiary
      ? `${order.nom} vous offre un massage à domicile${isNoel ? " pour Noël" : ""}.`
      : `Voici votre carte cadeau Alex Massage${order.beneficiaire ? ` pour ${order.beneficiaire}` : ""}.`,
    "",
    `Montant : ${amount} — ${prestation}`,
    `Code : ${code}`,
    `Valable jusqu'au ${expiry}`,
    order.message ? `\nMessage : « ${order.message} »` : "",
    "",
    "Pour réserver : 07 71 83 80 10 (appel ou WhatsApp), en donnant le code de la carte.",
    "Alex Massage — alexmassage.fr",
  ].join("\n");

  return { subject, html, text };
}

export function refusalEmail(order: GiftOrder, motif: string): { subject: string; html: string; text: string } {
  const body = [
    `Bonjour ${order.nom},`,
    "",
    "Merci pour votre demande de carte cadeau. Je ne suis malheureusement pas en mesure de la valider en l'état.",
    motif ? `\n${motif}\n` : "",
    "Le plus simple est d'en parler directement : appelez-moi ou écrivez-moi sur WhatsApp au 07 71 83 80 10, je trouverai une solution avec vous.",
    "",
    "Bien à vous,",
    "Alexandre — Alex Massage",
  ].join("\n");
  const html = `<!doctype html><html lang="fr"><body style="margin:0;padding:24px 12px;background:#f4efe7;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5dccb;border-radius:10px;padding:28px 30px;font-family:${sans};font-size:15px;line-height:1.7;color:#3d362e;">
    ${escapeHtml(body).replaceAll("\n", "<br>")}
  </div></body></html>`;
  return { subject: "Votre demande de carte cadeau — Alex Massage", html, text: body };
}
