"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendQuiz, type QuizState } from "@/app/actions/quiz";
import { FormError, HoneypotField, inputClass, labelClass } from "@/components/BookingForm";
import {
  MASSAGES,
  MOTIFS,
  POURS,
  PRESSIONS,
  recommend,
  ZONES,
  type Motif,
  type Pour,
  type Pression,
  type Zone,
} from "@/lib/quiz";

/* ---------- Silhouette de dos cliquable ---------- */

const ZONE_COLORS: Record<Zone, string> = {
  nuque: "#4f6d84",
  "haut-dos": "#b9643d",
  lombaires: "#6f7a45",
  jambes: "#c08f36",
};

/* Bandes horizontales découpées dans le torse (coordonnées du viewBox). */
const BANDS: { id: Exclude<Zone, "jambes">; y: number; h: number; ly: number; label: string }[] = [
  { id: "nuque", y: 40, h: 78, ly: 100, label: "NUQUE & ÉPAULES" },
  { id: "haut-dos", y: 118, h: 60, ly: 152, label: "HAUT DU DOS" },
  { id: "lombaires", y: 178, h: 120, ly: 232, label: "LOMBAIRES" },
];

/* Moitié gauche des formes ; la droite est obtenue par symétrie. */
const TORSO =
  "M101,56 L91,56 C91,66 90,72 87,77 C79,82 64,84 54,89 C45,94 41,101 40,112 C39,122 43,130 50,136 C55,152 61,172 68,196 C66,212 57,228 55,248 C54,266 63,282 80,288 C90,291 96,290 101,288 Z";
const ARM =
  "M50,92 C42,96 38,104 37,116 C34,140 32,166 31,190 C30,214 32,236 34,254 C35,264 40,270 45,268 C49,266 48,258 47,250 C46,232 48,210 50,190 C52,170 52,150 51,134 C44,128 40,120 41,110 Z";
const LEG =
  "M58,258 C58,300 62,330 66,360 C68,380 70,398 72,410 C72,418 78,422 88,421 C93,420 94,414 93,408 C92,380 94,340 95,310 C96,298 97,292 98.6,290 L98.6,280 C90,284 70,278 58,258 Z";
const MIRROR = "translate(200,0) scale(-1,1)";

function BodyMap({
  zones,
  partout,
  onToggle,
  className = "",
}: {
  zones: Zone[];
  partout: boolean;
  onToggle?: (z: Zone) => void;
  className?: string;
}) {
  const on = (z: Zone) => partout || zones.includes(z);
  const interactive = !!onToggle;
  const zoneProps = (z: Zone, label: string) =>
    interactive
      ? {
          role: "checkbox" as const,
          "aria-checked": on(z),
          "aria-label": label,
          tabIndex: 0,
          onClick: () => onToggle!(z),
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle!(z);
            }
          },
          className: "cursor-pointer outline-none group",
        }
      : { "aria-hidden": true as const };
  const fillOpacity = (z: Zone) => (on(z) ? 1 : 0.5);
  const labelFill = (z: Zone) => (on(z) ? "#fbf8f2" : "#2a2018");

  return (
    <svg viewBox="0 0 200 430" className={className} role={interactive ? "group" : undefined} aria-label={interactive ? "Zones du corps" : undefined}>
      <defs>
        <clipPath id="quiz-torso">
          <path d={TORSO} />
          <path d={TORSO} transform={MIRROR} />
        </clipPath>
      </defs>

      {/* Bras */}
      <g fill="#e6c9ad">
        <path d={ARM} />
        <path d={ARM} transform={MIRROR} />
      </g>

      {/* Jambes */}
      <g {...zoneProps("jambes", "Jambes et pieds")}>
        <g
          fill={ZONE_COLORS.jambes}
          fillOpacity={fillOpacity("jambes")} style={{ transition: "fill-opacity .35s ease" }}
          className={interactive && !on("jambes") ? "group-hover:[fill-opacity:.75] group-focus-visible:[fill-opacity:.75]" : ""}
        >
          <path d={LEG} />
          <path d={LEG} transform={MIRROR} />
        </g>
        <text x="100" y="372" textAnchor="middle" className="pointer-events-none" fill={labelFill("jambes")} fontSize="6.4" letterSpacing=".8" fontWeight="700">
          <tspan x="100" dy="0">JAMBES</tspan>
        </text>
      </g>

      {/* Peau du torse, sous les bandes */}
      <g fill="#e6c9ad">
        <path d={TORSO} />
        <path d={TORSO} transform={MIRROR} />
      </g>

      {/* Bandes */}
      <g clipPath="url(#quiz-torso)">
        {BANDS.map((b) => (
          <g key={b.id} {...zoneProps(b.id, ZONES.find((z) => z.id === b.id)!.label)}>
            <rect
              x="0"
              y={b.y}
              width="200"
              height={b.h}
              fill={ZONE_COLORS[b.id]}
              fillOpacity={fillOpacity(b.id)} style={{ transition: "fill-opacity .35s ease" }}
              className={interactive && !on(b.id) ? "group-hover:[fill-opacity:.75] group-focus-visible:[fill-opacity:.75]" : ""}
            />
            <text x="100" y={b.ly} textAnchor="middle" className="pointer-events-none" fill={labelFill(b.id)} fontSize="6.4" letterSpacing=".8" fontWeight="700">
              {b.label}
            </text>
            {on(b.id) && (
              <g transform={`translate(100 ${b.ly - 17})`} className="pointer-events-none">
                <circle r="6.5" fill="#f8f2e8" />
                <path d="M-3,0 L-1,2.4 L3.2,-2.4" fill="none" stroke={ZONE_COLORS[b.id]} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            )}
          </g>
        ))}
        {/* Séparations fines entre les bandes */}
        {[118, 178].map((y) => (
          <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#f4efe7" strokeWidth="1.2" />
        ))}
      </g>

      {on("jambes") && (
        <g transform="translate(100 352)" className="pointer-events-none">
          <circle r="6.5" fill="#f8f2e8" />
          <path d="M-3,0 L-1,2.4 L3.2,-2.4" fill="none" stroke={ZONE_COLORS.jambes} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {/* Tête, vue de dos */}
      <ellipse cx="100" cy="36" rx="21" ry="25" fill="#5a3f2c" />
      <circle cx="100" cy="15" r="11" fill="#4a3324" />
    </svg>
  );
}

/* ---------- Questionnaire ---------- */

const STEPS = ["zones", "motif", "pression", "pour", "contact"] as const;

type Choice<T extends string> = { id: T; label: string; detail: string };

function Options<T extends string>({
  list,
  value,
  onPick,
  cols = 1,
}: {
  list: Choice<T>[];
  value: T | null;
  onPick: (v: T) => void;
  cols?: 1 | 2;
}) {
  return (
    <div role="radiogroup" className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {list.map((o) => {
        const sel = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={sel}
            onClick={() => onPick(o.id)}
            className={`group text-left flex items-center gap-4 rounded-[4px] border px-5 py-4 transition-[border-color,background-color,transform,box-shadow] duration-300 active:scale-[.99] ${
              sel
                ? "border-gold bg-[rgba(192,135,60,.09)] shadow-[0_0_0_3px_rgba(192,135,60,.14)]"
                : "border-[rgba(34,28,21,.14)] bg-white hover:border-[rgba(192,135,60,.6)] hover:-translate-y-[1px]"
            }`}
          >
            <span
              aria-hidden="true"
              className={`shrink-0 w-[22px] h-[22px] rounded-full border-[1.5px] grid place-items-center transition-colors ${
                sel ? "border-gold bg-gold" : "border-[rgba(34,28,21,.28)] group-hover:border-gold"
              }`}
            >
              {sel && <span className="w-2 h-2 rounded-full bg-cream" />}
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-[18.5px] leading-[1.25] text-ink">{o.label}</span>
              <span className="text-[13.5px] text-taupe leading-[1.5] mt-[2px]">{o.detail}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* Remonter le composant (key) remet aussi à zéro l'état de l'envoi. */
export default function QuizMassage() {
  const [run, setRun] = useState(0);
  return <Quiz key={run} onRestart={() => setRun((r) => r + 1)} />;
}

function Quiz({ onRestart }: { onRestart: () => void }) {
  const [step, setStep] = useState(0);
  const [zones, setZones] = useState<Zone[]>([]);
  const [partout, setPartout] = useState(false);
  const [motif, setMotif] = useState<Motif | null>(null);
  const [pression, setPression] = useState<Pression | null>(null);
  const [pour, setPour] = useState<Pour | null>(null);
  const [state, formAction, pending] = useActionState<QuizState, FormData>(sendQuiz, { ok: false });
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const done = state.ok && state.result;

  /* À chaque étape : focus sur la question, et on la ramène à l'écran si besoin (mobile). */
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    titleRef.current?.focus({ preventScroll: true });
    const top = panelRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 70 || top > window.innerHeight * 0.5) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step, done]);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const pickThenNext = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    window.setTimeout(next, 260);
  };

  const toggleZone = (z: Zone) => {
    setPartout(false);
    setZones((prev) => (prev.includes(z) ? prev.filter((x) => x !== z) : [...prev, z]));
  };
  const togglePartout = () => {
    setPartout((p) => !p);
    setZones([]);
  };
  const hasZones = partout || zones.length > 0;

  const answers = motif && pression && pour ? { zones, partout, motif, pression, pour } : null;
  const preview = answers ? recommend(answers) : null;
  const result = done ? state.result! : null;
  const progress = done ? 100 : ((step + (step === 4 ? 0.6 : 0)) / (STEPS.length - 1)) * 100;

  const titles = [
    "Où sentez-vous des tensions ?",
    "Qu'est-ce qui vous amène, surtout ?",
    "Quelle pression aimez-vous ?",
    "C'est pour qui ?",
    "Votre massage est prêt",
  ];

  return (
    <section
      id="trouver-mon-massage"
      aria-labelledby="h-quiz"
      className="bg-linen py-[clamp(64px,9vw,120px)] px-[clamp(16px,5vw,64px)] scroll-mt-16"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[640px] mb-[clamp(30px,4vw,48px)]">
          <p data-reveal className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
            Trouver mon massage · 30 secondes
          </p>
          <h2 id="h-quiz" data-reveal="80" className="font-serif font-normal text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-[-.01em] text-ink m-0">
            Votre corps sait ce dont il a besoin
          </h2>
          <p data-reveal="150" className="mt-5 mb-0 text-taupe text-[17px] leading-[1.75]">
            Le stress, la fatigue et tout ce qu&apos;on porte finissent par se loger dans le dos.
            Quatre questions, et je vous dis quel massage vous fera le plus de bien.
          </p>
        </div>

        <div
          ref={panelRef}
          className="scroll-mt-24 bg-cream border border-[rgba(34,28,21,.08)] rounded-md shadow-[0_40px_80px_-50px_rgba(34,28,21,.45)] overflow-hidden"
        >
          {/* Progression */}
          <div className="h-[3px] bg-[rgba(34,28,21,.07)]">
            <div className="h-full bg-gold transition-[width] duration-500 ease-[cubic-bezier(.22,.61,.36,1)]" style={{ width: `${progress}%` }} />
          </div>

          <div className="grid md:grid-cols-[minmax(240px,4fr)_7fr]">
            {/* Silhouette : toujours visible sur desktop, à la 1re étape sur mobile */}
            <div
              className={`${step === 0 && !done ? "flex" : "hidden md:flex"} items-center justify-center bg-[linear-gradient(180deg,#f6f0e6,#efe6d8)] px-6 pt-8 pb-4 md:py-10 md:border-r border-[rgba(34,28,21,.06)]`}
            >
              <BodyMap
                zones={zones}
                partout={partout}
                onToggle={step === 0 && !done ? toggleZone : undefined}
                className="w-full max-w-[200px] md:max-w-[250px] h-auto select-none"
              />
            </div>

            <div className="p-[clamp(22px,4vw,48px)] min-h-[440px] flex flex-col">
              {result ? (
                <Resultat
                  result={result}
                  prenom={state.prenom ?? ""}
                  mailError={state.error === "mail"}
                  pour={pour}
                  onRestart={onRestart}
                  titleRef={titleRef}
                />
              ) : (
                <div key={step} className="flex flex-col flex-1 animate-[riseIn_.55s_cubic-bezier(.22,.61,.36,1)_both]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] tracking-[.16em] uppercase font-semibold text-bronze">
                      {step < 4 ? `Question ${step + 1} sur 4` : "Dernière étape"}
                    </span>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="text-[13px] text-taupe hover:text-ink inline-flex items-center gap-1"
                      >
                        ← Retour
                      </button>
                    )}
                  </div>
                  <h3
                    ref={titleRef}
                    tabIndex={-1}
                    className="font-serif font-normal text-[clamp(23px,2.8vw,32px)] leading-[1.15] text-ink m-0 mb-6 outline-none"
                  >
                    {titles[step]}
                  </h3>

                  {step === 0 && (
                    <div className="flex flex-col gap-3 flex-1">
                      <p className="m-0 -mt-3 mb-1 text-taupe text-[14.5px]">
                        Touchez le dos, ou choisissez ci-dessous. Plusieurs réponses possibles.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {ZONES.map((z) => {
                          const sel = partout || zones.includes(z.id);
                          return (
                            <button
                              key={z.id}
                              type="button"
                              aria-pressed={sel}
                              onClick={() => toggleZone(z.id)}
                              className={`inline-flex items-center gap-2 rounded-full border px-4 py-[10px] text-[14.5px] transition-colors duration-200 ${
                                sel ? "text-white border-transparent" : "bg-white border-[rgba(34,28,21,.16)] text-ink hover:border-[rgba(34,28,21,.4)]"
                              }`}
                              style={sel ? { backgroundColor: ZONE_COLORS[z.id] } : undefined}
                            >
                              <span aria-hidden="true" className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: sel ? "#f8f2e8" : ZONE_COLORS[z.id] }} />
                              {z.label}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          aria-pressed={partout}
                          onClick={togglePartout}
                          className={`rounded-full border px-4 py-[10px] text-[14.5px] transition-colors duration-200 ${
                            partout ? "bg-ink text-linen border-ink" : "bg-white border-dashed border-[rgba(34,28,21,.3)] text-ink hover:border-[rgba(34,28,21,.5)]"
                          }`}
                        >
                          Un peu partout
                        </button>
                      </div>
                      <div className="mt-auto pt-6">
                        <button
                          type="button"
                          disabled={!hasZones}
                          onClick={next}
                          className="w-full sm:w-auto bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-9 py-4 rounded-[2px] transition-[background-color,transform,opacity] duration-300 hover:bg-goldlight hover:-translate-y-[2px] disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                        >
                          Continuer →
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 1 && <Options list={MOTIFS} value={motif} onPick={pickThenNext(setMotif)} cols={2} />}
                  {step === 2 && <Options list={PRESSIONS} value={pression} onPick={pickThenNext(setPression)} cols={2} />}
                  {step === 3 && <Options list={POURS} value={pour} onPick={pickThenNext(setPour)} />}

                  {step === 4 && preview && answers && (
                    <form action={formAction} className="flex flex-col gap-4">
                      {/* Aperçu flouté : le résultat est là, il ne reste qu'à le recevoir */}
                      <div className="relative flex items-center gap-4 rounded-[4px] bg-[#1c2a22] p-4 overflow-hidden">
                        <div className="relative w-[64px] h-[64px] shrink-0 rounded-[3px] overflow-hidden">
                          <Image src={MASSAGES[preview.massage].image} alt="" fill sizes="64px" className="object-cover blur-[3px] scale-110" />
                        </div>
                        <div className="min-w-0">
                          <p className="m-0 text-[11px] tracking-[.18em] uppercase text-goldlight font-semibold">Votre résultat</p>
                          <p aria-hidden="true" className="m-0 mt-1 font-serif text-[21px] text-linen blur-[6px] select-none truncate">
                            {MASSAGES[preview.massage].nom}
                          </p>
                          <p className="m-0 mt-[2px] text-[13px] text-[rgba(244,239,231,.7)]">
                            {preview.formule === "duo" ? "Duo" : "Solo"} · {preview.duree} · <span className="blur-[4px] select-none" aria-hidden="true">{preview.prix} €</span>
                          </p>
                        </div>
                      </div>
                      <p className="m-0 text-taupe text-[15px] leading-[1.6]">
                        Recevez votre recommandation détaillée par email : le massage, la durée idéale,
                        le tarif et pourquoi il vous correspond.
                      </p>

                      <input type="hidden" name="answers" value={JSON.stringify(answers)} />
                      <HoneypotField />
                      <div className="flex flex-wrap gap-4">
                        <label className="block flex-[1_1_180px]">
                          <span className={labelClass}>Prénom</span>
                          <input name="prenom" required autoComplete="given-name" className={inputClass} placeholder="Votre prénom" />
                        </label>
                        <label className="block flex-[1_1_220px]">
                          <span className={labelClass}>Email</span>
                          <input name="email" type="email" required autoComplete="email" inputMode="email" className={inputClass} placeholder="vous@exemple.fr" />
                        </label>
                      </div>
                      <label className="block">
                        <span className={labelClass}>
                          Téléphone{" "}
                          <span className="normal-case tracking-normal text-mute font-normal">(facultatif, si vous voulez que je vous rappelle)</span>
                        </span>
                        <input name="tel" type="tel" autoComplete="tel" inputMode="tel" className={inputClass} placeholder="06 XX XX XX XX" />
                      </label>
                      {state.error && state.error !== "mail" && <FormError text={state.error} />}
                      <button
                        type="submit"
                        disabled={pending}
                        className="w-full bg-gold text-night font-bold text-[14px] tracking-[.06em] uppercase px-6 py-[18px] rounded-[2px] transition-[background-color,transform] duration-300 hover:bg-goldlight hover:-translate-y-[2px] disabled:opacity-60 disabled:cursor-wait disabled:hover:translate-y-0"
                      >
                        {pending ? "Envoi…" : "Voir mon massage idéal"}
                      </button>
                      <p className="m-0 text-mute text-[12.5px] leading-[1.6] text-center">
                        Gratuit, sans engagement. Votre email sert uniquement à vous envoyer ce résultat
                        et, si vous le souhaitez, à convenir d&apos;une séance.
                      </p>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resultat({
  result,
  prenom,
  mailError,
  pour,
  onRestart,
  titleRef,
}: {
  result: NonNullable<QuizState["result"]>;
  prenom: string;
  mailError: boolean;
  pour: Pour | null;
  onRestart: () => void;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const m = MASSAGES[result.massage];
  const alt = result.alternative ? MASSAGES[result.alternative] : null;
  const offrir = pour === "offrir";
  const formule = result.formule === "duo" ? "Duo" : "Solo";
  const wa = `https://wa.me/33771838010?text=${encodeURIComponent(
    offrir
      ? `Bonjour Alexandre, je souhaite offrir une carte cadeau : ${m.nom.toLowerCase()}, ${result.duree} (${result.prix} €).`
      : `Bonjour Alexandre, je souhaite réserver ${m.nom.toLowerCase()} — ${formule.toLowerCase()} ${result.duree} (${result.prix} €).`,
  )}`;

  return (
    <div className="flex flex-col gap-5 animate-[riseIn_.6s_cubic-bezier(.22,.61,.36,1)_both]">
      <p className="m-0 text-[12px] tracking-[.16em] uppercase font-semibold text-bronze">
        {prenom ? `${prenom}, votre massage idéal` : "Votre massage idéal"}
      </p>
      <div className="flex gap-5 items-start">
        <div className="relative w-[88px] h-[110px] sm:w-[110px] sm:h-[136px] shrink-0 rounded-[3px] overflow-hidden">
          <Image src={m.image} alt="" fill sizes="110px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <h3 ref={titleRef} tabIndex={-1} className="font-serif font-normal text-[clamp(25px,3vw,34px)] leading-[1.1] text-ink m-0 outline-none">
            {m.nom}
          </h3>
          <p className="m-0 mt-1 text-[13px] tracking-[.08em] uppercase text-taupe">{m.sous}</p>
          <p className="m-0 mt-3 flex items-baseline gap-3 flex-wrap">
            <span className="font-serif text-[34px] leading-none text-gold">{result.prix} €</span>
            <span className="text-[14px] text-taupe">
              {formule} · {result.duree} · déplacement inclus
            </span>
          </p>
        </div>
      </div>

      <ul className="list-none m-0 p-0 flex flex-col gap-2">
        {result.raisons.map((r) => (
          <li key={r} className="pl-4 border-l-2 border-gold text-[15px] leading-[1.6] text-cocoa">
            {r}
          </li>
        ))}
      </ul>
      {alt && (
        <p className="m-0 text-[14px] text-taupe">
          Vous hésitez ?{" "}
          <Link href={alt.href} className="text-forest font-semibold underline underline-offset-4 hover:text-bronze">
            {alt.nom}
          </Link>{" "}
          vous conviendrait aussi. On en parle avant la séance.
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-1">
        {offrir ? (
          <Link
            href="/carte-cadeau-massage-toulouse#reserver"
            className="inline-flex justify-center items-center bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-7 py-4 rounded-[2px] hover:bg-goldlight hover:text-night"
          >
            Offrir cette carte cadeau
          </Link>
        ) : (
          <a
            href={wa}
            className="inline-flex justify-center items-center bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-7 py-4 rounded-[2px] hover:bg-goldlight hover:text-night"
          >
            Réserver sur WhatsApp
          </a>
        )}
        <a
          href="tel:+33771838010"
          className="inline-flex justify-center items-center border border-[rgba(44,64,52,.45)] text-forest font-semibold text-[13.5px] tracking-[.06em] uppercase px-7 py-4 rounded-[2px] hover:bg-forest hover:text-linen"
        >
          07 71 83 80 10
        </a>
      </div>

      <p className="m-0 text-[13.5px] text-taupe leading-[1.6]">
        {mailError
          ? "L'email n'a pas pu partir, mais tout est ici. Gardez cette page ou écrivez-moi directement."
          : "C'est aussi dans votre boîte mail. Pensez à regarder les spams si vous ne le voyez pas."}{" "}
        <Link href={m.href} className="text-forest underline underline-offset-4 hover:text-bronze">
          Tout savoir sur ce massage
        </Link>{" "}
        ·{" "}
        <button type="button" onClick={onRestart} className="text-taupe underline underline-offset-4 hover:text-ink">
          Refaire le questionnaire
        </button>
      </p>
    </div>
  );
}
