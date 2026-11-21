import Image from "next/image";
import Link from "next/link";
import { getArticle } from "@/lib/blog";

/* Sports les plus pratiqués à Toulouse. Chaque pastille pointe vers l'article
   dédié dès qu'il est publié (publication programmée), sinon vers la page
   massage sportif. */
const SPORTS: { label: string; zones: string; slug: string }[] = [
  { label: "Rugby", zones: "Épaules, nuque, chaîne postérieure", slug: "massage-sportif-rugby" },
  { label: "Basket", zones: "Mollets, cuisses, bas du dos", slug: "massage-sportif-basket-toulouse" },
  { label: "Football", zones: "Ischios, adducteurs, mollets", slug: "massage-sportif-football-toulouse" },
  { label: "Handball", zones: "Épaule de tir, appuis, chevilles", slug: "massage-sportif-handball" },
  { label: "Course & trail", zones: "Mollets, quadriceps, piriforme", slug: "massage-sportif-course-a-pied-toulouse" },
  { label: "Tennis & padel", zones: "Épaule, avant-bras, lombaires", slug: "massage-tennis-epaule-avant-bras" },
  { label: "Cyclisme", zones: "Quadriceps, fessiers, nuque", slug: "massage-cyclisme-velo-toulouse" },
  { label: "Musculation & CrossFit", zones: "Dos, épaules, jambes", slug: "musculation-et-massage-sportif" },
];

export default function SportifsToulouse() {
  return (
    <section
      aria-labelledby="h-sportifs"
      className="bg-night py-[clamp(64px,9vw,128px)] px-[clamp(20px,5vw,64px)]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-[clamp(40px,6vw,80px)] items-center">
        <div className="flex-[1_1_420px] min-w-0" data-reveal>
          <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-goldlight m-0 mb-4">
            Sportifs toulousains
          </p>
          <h2
            id="h-sportifs"
            className="font-serif font-normal text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-[-.01em] text-linen m-0 max-w-[18ch]"
          >
            Votre récupération, chez vous, après le match
          </h2>
          <p className="mt-[22px] mb-0 text-[rgba(244,239,231,.78)] text-[17px] leading-[1.78]">
            Rugbymen, basketteurs, footballeurs, coureurs : je viens à domicile
            avec la table pour un massage sportif ciblé sur les zones que votre
            sport sollicite. Idéalement 48 à 72 h après l&apos;effort, dès 30 €.
          </p>

          <ul className="list-none p-0 mt-8 mb-0 grid grid-cols-[repeat(auto-fill,minmax(min(230px,100%),1fr))] gap-3">
            {SPORTS.map((s) => {
              const href = getArticle(s.slug)
                ? `/blog/${s.slug}`
                : "/massage-sportif-toulouse";
              return (
                <li key={s.label}>
                  <Link
                    href={href}
                    className="group flex flex-col gap-1 h-full border border-[rgba(216,165,90,.28)] rounded-[3px] px-4 py-3 transition-[background-color,border-color] duration-300 hover:bg-[rgba(216,165,90,.1)] hover:border-[rgba(216,165,90,.6)]"
                  >
                    <span className="font-serif text-[19px] leading-[1.2] text-linen group-hover:text-goldlight">
                      {s.label}
                    </span>
                    <span className="text-[13px] leading-[1.5] text-[rgba(244,239,231,.62)]">
                      {s.zones}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/massage-sportif-toulouse"
            className="inline-flex items-center gap-[10px] mt-8 bg-gold text-night font-semibold text-[13px] tracking-[.08em] uppercase px-[30px] py-[15px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px]"
          >
            Le massage sportif à domicile
          </Link>
        </div>

        <div
          className="flex-[1_1_340px] min-w-0 relative overflow-hidden rounded-[4px] aspect-[4/5] max-h-[620px]"
          data-reveal="140"
        >
          <Image
            src="/images/massage-sportif.webp"
            alt="Massage sportif profond du dos et des épaules à domicile"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
