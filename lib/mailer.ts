import nodemailer from "nodemailer";

/* SMTP de la boîte contact@alexmassage.fr (OVH par défaut).
   Seul SMTP_PASSWORD est indispensable dans .env.local. */
const SMTP_HOST = process.env.SMTP_HOST ?? "ssl0.ovh.net";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
export const SMTP_USER = process.env.SMTP_USER ?? "contact@alexmassage.fr";

export const TO_EMAILS = (
  process.env.BOOKING_TO_EMAILS ??
  "contact@alexmassage.fr,alexandre.roux31@gmail.com,alexmassage31@gmail.com,allwinstake@gmail.com"
)
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

export const FROM = `"Alex Massage" <${SMTP_USER}>`;

/* Renvoie null si SMTP_PASSWORD n'est pas configuré. */
export function getTransport() {
  const password = process.env.SMTP_PASSWORD;
  if (!password) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: password },
  });
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
