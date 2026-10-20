"use server";

import {
  giftCardEmail,
  giftCode,
  recipientEmail,
  refusalEmail,
  verifyOrder,
} from "@/lib/gift-card";
import { FROM, getTransport, isEmail, SMTP_USER } from "@/lib/mailer";

export type DecisionState = {
  done?: "accepted" | "refused";
  info?: string;
  error?: string;
};

const SEND_ERROR = "L'envoi du mail a échoué. Réessayez dans un instant.";

export async function acceptGiftCard(
  _prev: DecisionState,
  formData: FormData,
): Promise<DecisionState> {
  const order = verifyOrder(String(formData.get("t") ?? ""));
  if (!order) return { error: "Lien invalide ou expiré." };

  /* Alex peut corriger le montant (montant libre, geste commercial…). */
  const montant = String(formData.get("montant") ?? "").trim().slice(0, 40);
  if (montant) order.montant = montant;

  const to = recipientEmail(order);
  if (!isEmail(to)) return { error: "Aucune adresse email valide pour envoyer la carte." };

  const transporter = getTransport();
  if (!transporter) return { error: "SMTP_PASSWORD n'est pas configuré sur le serveur." };

  const mail = giftCardEmail(order);
  try {
    await transporter.sendMail({
      from: FROM,
      to,
      /* Copie à l'acheteur quand la carte part directement au bénéficiaire,
         et copie cachée à la boîte contact pour garder une trace. */
      ...(to !== order.email && isEmail(order.email) ? { cc: order.email } : {}),
      bcc: SMTP_USER,
      replyTo: SMTP_USER,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
  } catch (err) {
    console.error("acceptGiftCard: échec de l'envoi SMTP", err);
    return { error: SEND_ERROR };
  }

  return { done: "accepted", info: `Carte ${giftCode(order)} envoyée à ${to}.` };
}

export async function refuseGiftCard(
  _prev: DecisionState,
  formData: FormData,
): Promise<DecisionState> {
  const order = verifyOrder(String(formData.get("t") ?? ""));
  if (!order) return { error: "Lien invalide ou expiré." };

  const notify = formData.get("notify") === "on" && isEmail(order.email);
  if (!notify) return { done: "refused", info: "Commande refusée. Aucun mail envoyé au client." };

  const transporter = getTransport();
  if (!transporter) return { error: "SMTP_PASSWORD n'est pas configuré sur le serveur." };

  const motif = String(formData.get("motif") ?? "").trim().slice(0, 1000);
  const mail = refusalEmail(order, motif);
  try {
    await transporter.sendMail({
      from: FROM,
      to: order.email,
      bcc: SMTP_USER,
      replyTo: SMTP_USER,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
  } catch (err) {
    console.error("refuseGiftCard: échec de l'envoi SMTP", err);
    return { error: SEND_ERROR };
  }

  return { done: "refused", info: `Commande refusée. ${order.nom} a été prévenu(e) par email.` };
}
