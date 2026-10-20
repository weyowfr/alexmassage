"use server";

import { escapeHtml, FROM, getTransport, isEmail, SMTP_USER, TO_EMAILS } from "@/lib/mailer";
import {
  MASSAGES,
  MOTIFS,
  POURS,
  PRESSIONS,
  recommend,
  ZONES,
  type Answers,
  type Result,
} from "@/lib/quiz";
import { SITE_URL } from "@/lib/structured-data";

export type QuizState = { ok: boolean; error?: string; result?: Result; prenom?: string };

const pick = <T extends { id: string }>(list: T[], v: unknown) =>
  list.find((x) => x.id === v);

/* Les réponses arrivent du navigateur : on les revalide une à une. */
function parseAnswers(raw: string): Answers | null {
  try {
    const a = JSON.parse(raw);
    const zones = Array.isArray(a.zones)
      ? ZONES.map((z) => z.id).filter((id) => a.zones.includes(id))
      : [];
    const partout = a.partout === true;
    if (!zones.length && !partout) return null;
    if (!pick(MOTIFS, a.motif) || !pick(PRESSIONS, a.pression) || !pick(POURS, a.pour)) return null;
    return { zones, partout, motif: a.motif, pression: a.pression, pour: a.pour };
  } catch {
    return null;
  }
}

function resume(a: Answers): [string, string][] {
  return [
    ["Zones", a.partout ? "Un peu partout" : ZONES.filter((z) => a.zones.includes(z.id)).map((z) => z.label).join(", ")],
    ["Ce qui l'amène", pick(MOTIFS, a.motif)!.label],
    ["Pression", pick(PRESSIONS, a.pression)!.label],
    ["Pour", pick(POURS, a.pour)!.label],
  ];
}

const sans = "Arial,Helvetica,sans-serif";
const serif = "Georgia,'Times New Roman',serif";

function visitorEmail(prenom: string, a: Answers, r: Result) {
  const m = MASSAGES[r.massage];
  const e = escapeHtml;
  const offrir = a.pour === "offrir";
  const formule = r.formule === "duo" ? "Duo" : "Solo";
  const wa = `https://wa.me/33771838010?text=${encodeURIComponent(
    offrir
      ? `Bonjour Alexandre, je souhaite offrir une carte cadeau : ${m.nom.toLowerCase()}, ${r.duree} (${r.prix} €).`
      : `Bonjour Alexandre, je souhaite réserver ${m.nom.toLowerCase()} — ${formule.toLowerCase()} ${r.duree} (${r.prix} €).`,
  )}`;
  const cta = offrir ? `${SITE_URL}/carte-cadeau-massage-toulouse#reserver` : `${SITE_URL}/contact`;
  const alt = r.alternative ? MASSAGES[r.alternative] : null;

  const html = `<!doctype html>
<html lang="fr"><body style="margin:0;padding:24px 12px;background:#f4efe7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr><td style="padding:0 6px 20px;font-family:${sans};font-size:15px;line-height:1.7;color:#3d362e;">
    Bonjour ${e(prenom)},<br><br>Merci d'avoir pris ces quelques secondes. D'après vos réponses, voici le massage que je vous recommande${offrir ? " d'offrir" : ""}.
  </td></tr>
  <tr><td style="background:#1c2a22;border-radius:10px;padding:30px 32px;">
    <p style="margin:0;font-family:${sans};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#d8a55a;">Votre massage · ${e(m.sous)}</p>
    <p style="margin:10px 0 0;font-family:${serif};font-size:30px;line-height:1.15;color:#f4efe7;">${e(m.nom)}</p>
    <p style="margin:12px 0 0;font-family:${sans};font-size:15px;line-height:1.65;color:rgba(244,239,231,.82);">${e(m.promesse)}</p>
    <p style="margin:22px 0 0;font-family:${serif};font-size:38px;line-height:1;color:#d8a55a;">${r.prix} €</p>
    <p style="margin:8px 0 0;font-family:${sans};font-size:13px;color:rgba(244,239,231,.7);">${formule} · ${e(r.duree)} · à domicile, déplacement inclus (Toulouse + 30 km)</p>
  </td></tr>
  <tr><td style="padding:26px 6px 0;font-family:${sans};font-size:15px;line-height:1.7;color:#3d362e;">
    <p style="margin:0 0 8px;font-family:${serif};font-size:20px;color:#17120e;">Pourquoi ce choix</p>
    ${r.raisons.map((x) => `<p style="margin:0 0 8px;padding-left:16px;border-left:2px solid #c0873c;">${e(x)}</p>`).join("")}
    ${alt ? `<p style="margin:14px 0 0;color:#5a5142;font-size:14px;">Vous hésitez ? <a href="${SITE_URL}${alt.href}" style="color:#2c4034;">${e(alt.nom)}</a> vous conviendrait aussi très bien. On en parle avant la séance.</p>` : ""}
  </td></tr>
  <tr><td style="padding:28px 6px 0;">
    <a href="${cta}" style="display:inline-block;background:#c0873c;color:#17120e;text-decoration:none;font-family:${sans};font-weight:bold;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:15px 26px;border-radius:2px;">${offrir ? "Offrir cette carte cadeau" : "Réserver ma séance"}</a>
    <a href="${wa}" style="display:inline-block;font-family:${sans};color:#2c4034;font-weight:bold;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:15px 12px;">WhatsApp →</a>
    <p style="margin:14px 0 0;font-family:${sans};font-size:14px;color:#5a5142;">Ou appelez-moi au <a href="tel:+33771838010" style="color:#2c4034;font-weight:bold;">07 71 83 80 10</a>. Il suffit de répondre à cet email, je vous recontacte.</p>
  </td></tr>
  <tr><td style="padding:30px 6px 0;font-family:${sans};font-size:14px;line-height:1.7;color:#3d362e;">
    À très vite,<br><strong>Alexandre</strong> — Alex Massage<br>
    <span style="color:#8a7f6d;font-size:12.5px;">Formé à l'Institut Temana de Toulouse · ancien praticien en spa de palace</span>
  </td></tr>
  <tr><td style="padding:26px 6px 0;font-family:${sans};font-size:11.5px;line-height:1.6;color:#8a7f6d;">
    Massages de bien-être, non thérapeutiques. En cas de douleur aiguë, de grossesse ou de traitement en cours, demandez l'avis de votre médecin.<br>
    Vous recevez cet email car vous avez fait le questionnaire sur <a href="${SITE_URL}" style="color:#8a7f6d;">alexmassage.fr</a>.
  </td></tr>
</table></body></html>`;

  const text = [
    `Bonjour ${prenom},`,
    "",
    `Le massage que je vous recommande : ${m.nom} (${m.sous}).`,
    `${formule} · ${r.duree} · ${r.prix} € — à domicile, déplacement inclus.`,
    "",
    "Pourquoi ce choix :",
    ...r.raisons.map((x) => `- ${x}`),
    alt ? `\nVous hésitez ? ${alt.nom} vous conviendrait aussi.` : "",
    "",
    `Réserver : ${cta}`,
    "Ou appelez / WhatsApp : 07 71 83 80 10",
    "",
    "Alexandre — Alex Massage",
  ].join("\n");

  return { subject: `${prenom}, votre massage idéal : ${m.nom.replace(/^(Le |L')/, "")}`, html, text };
}

function leadEmail(prenom: string, email: string, tel: string, a: Answers, r: Result) {
  const rows: [string, string][] = [
    ["Prénom", prenom],
    ["Email", email],
    ["Téléphone", tel || "—"],
    ...resume(a),
    ["Recommandé", `${MASSAGES[r.massage].nom} · ${r.formule} ${r.duree} · ${r.prix} €`],
  ];
  const e = escapeHtml;
  const html = `<!doctype html><html lang="fr"><body style="margin:0;padding:24px 12px;background:#f4efe7;font-family:${sans};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5dccb;border-radius:12px;overflow:hidden;">
    <tr><td style="background:#17120e;padding:20px 24px;"><p style="margin:0;color:#d6b25e;font-family:${serif};font-size:18px;">Alex Massage</p>
    <p style="margin:4px 0 0;color:#b8ab97;font-size:13px;">Nouveau contact via le questionnaire${tel ? " — à rappeler" : ""}</p></td></tr>
    <tr><td style="padding:18px 24px 24px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border:1px solid #eee5d8;">
    ${rows.map(([k, v], i) => `<tr style="background:${i % 2 ? "#faf7f2" : "#fff"};"><td style="padding:9px 14px;font-weight:600;color:#17120e;white-space:nowrap;">${e(k)}</td><td style="padding:9px 14px;color:#3d362e;">${e(v)}</td></tr>`).join("")}
    </table><p style="margin:14px 0 0;color:#8a7f6d;font-size:12px;">Le client a reçu sa recommandation par email. Répondre à ce message lui écrit directement.</p></td></tr>
  </table></body></html>`;
  const text = rows.map(([k, v]) => `${k} : ${v}`).join("\n");
  return { subject: `Questionnaire — ${prenom} → ${MASSAGES[r.massage].nom}${tel ? " (à rappeler)" : ""}`, html, text };
}

export async function sendQuiz(_prev: QuizState, formData: FormData): Promise<QuizState> {
  if (formData.get("website")) return { ok: false, error: "Envoi refusé." };

  const prenom = String(formData.get("prenom") ?? "").trim().slice(0, 60);
  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const tel = String(formData.get("tel") ?? "").trim().slice(0, 40);
  if (!prenom) return { ok: false, error: "Indiquez votre prénom." };
  if (!isEmail(email)) return { ok: false, error: "Cette adresse email ne semble pas valide." };

  const answers = parseAnswers(String(formData.get("answers") ?? ""));
  if (!answers) return { ok: false, error: "Il manque une réponse. Revenez en arrière pour compléter." };
  const result = recommend(answers);

  const transporter = getTransport();
  if (!transporter) {
    console.error("sendQuiz: SMTP_PASSWORD manquant", { prenom, email, tel, answers });
    /* Le visiteur voit quand même son résultat. */
    return { ok: true, result, prenom, error: "mail" };
  }

  const v = visitorEmail(prenom, answers, result);
  const l = leadEmail(prenom, email, tel, answers, result);
  const [visitor] = await Promise.allSettled([
    transporter.sendMail({ from: FROM, to: email, replyTo: SMTP_USER, ...v }),
    transporter.sendMail({ from: FROM, to: TO_EMAILS, replyTo: email, ...l }),
  ]);
  if (visitor.status === "rejected") {
    console.error("sendQuiz: échec envoi visiteur", visitor.reason);
    return { ok: true, result, prenom, error: "mail" };
  }
  return { ok: true, result, prenom };
}
