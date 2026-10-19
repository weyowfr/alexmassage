"use client";

import { useEffect, useState } from "react";

type Left = { j: number; h: number; m: number };

function remaining(deadline: number): Left | null {
  const ms = deadline - Date.now();
  if (ms <= 0) return null;
  const min = Math.floor(ms / 60000);
  return { j: Math.floor(min / 1440), h: Math.floor((min % 1440) / 60), m: min % 60 };
}

/* Compte à rebours jusqu'à la date limite de commande. Rendu serveur sans
   chiffres (pas de mismatch d'hydratation), puis mis à jour chaque minute.
   Une fois la date passée, affiche `expired` à la place. */
export default function NoelCountdown({
  deadline,
  expired,
}: {
  deadline: string;
  expired: string;
}) {
  const target = new Date(deadline).getTime();
  const [left, setLeft] = useState<Left | null | undefined>(undefined);

  useEffect(() => {
    const tick = () => setLeft(remaining(target));
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [target]);

  if (left === undefined) return null;
  if (left === null) {
    return (
      <p className="m-0 font-serif italic text-[18px] text-goldlight">
        {expired}
      </p>
    );
  }

  const units: [number, string][] = [
    [left.j, left.j > 1 ? "jours" : "jour"],
    [left.h, "h"],
    [left.m, "min"],
  ];

  return (
    <div
      role="timer"
      aria-label={`Encore ${left.j} jours, ${left.h} heures et ${left.m} minutes pour commander`}
      className="flex gap-[10px]"
    >
      {units.map(([n, u]) => (
        <div
          key={u}
          className="min-w-[68px] border border-[rgba(216,165,90,.4)] rounded-[3px] px-3 py-[10px] text-center"
        >
          <span className="block font-serif text-[30px] leading-none text-linen tabular-nums">
            {String(n).padStart(2, "0")}
          </span>
          <span className="block mt-[6px] text-[10.5px] tracking-[.18em] uppercase text-goldlight">
            {u}
          </span>
        </div>
      ))}
    </div>
  );
}
