"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CategoryId } from "@/lib/blog/types";

export type BlogCard = {
  slug: string;
  category: CategoryId;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readingMinutes: number;
};

type Props = {
  articles: BlogCard[];
  categories: { id: CategoryId; label: string }[];
};

const PAGE = 9;

/* Grille unique du blog : filtre par thème + « Voir plus ».
   Toutes les cartes restent dans le DOM (masquées en CSS) pour garder
   le maillage interne visible des moteurs. */
export default function BlogGrid({ articles, categories }: Props) {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [limit, setLimit] = useState(PAGE);

  const matching = articles.filter(
    (a) => filter === "all" || a.category === filter,
  );
  const visible = new Set(matching.slice(0, limit).map((a) => a.slug));
  const labelOf = (id: CategoryId) =>
    categories.find((c) => c.id === id)?.label ?? "";

  const chip = (active: boolean) =>
    `inline-flex items-center gap-2 px-4 py-[9px] rounded-full text-[13px] font-semibold tracking-[.03em] border transition-colors duration-300 ${
      active
        ? "bg-forest text-linen border-forest"
        : "bg-transparent text-forest border-[rgba(44,64,52,.3)] hover:border-forest"
    }`;

  const count = (id: CategoryId | "all") =>
    id === "all" ? articles.length : articles.filter((a) => a.category === id).length;

  const badge = (active: boolean) =>
    `min-w-[22px] px-[7px] py-[1px] rounded-full text-[11px] leading-[18px] text-center ${
      active ? "bg-[rgba(244,239,231,.2)] text-linen" : "bg-[rgba(44,64,52,.1)] text-forest"
    }`;

  const select = (id: CategoryId | "all") => {
    setFilter(id);
    setLimit(PAGE);
  };

  return (
    <div>
      <div role="group" aria-label="Filtrer par thème" className="flex flex-wrap gap-2">
        <button type="button" onClick={() => select("all")} aria-pressed={filter === "all"} className={chip(filter === "all")}>
          Tous
          <span className={badge(filter === "all")}>{count("all")}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => select(c.id)}
            aria-pressed={filter === c.id}
            className={chip(filter === c.id)}
          >
            {c.label}
            <span className={badge(filter === c.id)}>{count(c.id)}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(270px,100%),1fr))] gap-[clamp(20px,2.5vw,32px)] mt-[clamp(26px,3.5vw,40px)]">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className={`group flex-col bg-cream border border-[rgba(34,28,21,.08)] rounded-[3px] overflow-hidden transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-[4px] hover:shadow-[0_30px_50px_-30px_rgba(34,28,21,.45)] ${
              visible.has(a.slug) ? "flex" : "hidden"
            }`}
          >
            <span className="block relative aspect-[16/9] overflow-hidden">
              <Image
                src={a.image}
                alt={a.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
              />
            </span>
            <span className="flex flex-col flex-1 p-5">
              <span className="self-start mb-3 px-[10px] py-[4px] rounded-full bg-[rgba(192,135,60,.14)] text-[11px] tracking-[.12em] uppercase font-semibold text-bronze">
                {labelOf(a.category)}
              </span>
              <span className="block font-serif text-[19px] leading-[1.3] text-ink">
                {a.title}
              </span>
              <span className="block mt-3 text-[14px] leading-[1.65] text-taupe">
                {a.excerpt}
              </span>
              <span className="block mt-auto pt-4 text-[13px] text-bronze font-semibold tracking-[.04em]">
                Lire · {a.readingMinutes} min →
              </span>
            </span>
          </Link>
        ))}
      </div>

      {matching.length > limit && (
        <div className="mt-[clamp(32px,4vw,48px)] text-center">
          <button
            type="button"
            onClick={() => setLimit((l) => l + PAGE)}
            className="inline-flex items-center bg-transparent text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[13px] tracking-[.06em] uppercase px-[28px] py-[14px] rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
          >
            Voir plus d&apos;articles ({matching.length - limit})
          </button>
        </div>
      )}
    </div>
  );
}
