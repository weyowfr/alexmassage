import Link from "next/link";

type Key = "cali" | "abhy" | "sued";

const CARDS: Record<
  Key,
  { href: string; tag: string; title: string; text: string }
> = {
  cali: {
    href: "/massage-californien-toulouse",
    tag: "Relaxant",
    title: "Californien",
    text: "Mouvements lents et enveloppants pour un lâcher‑prise total.",
  },
  abhy: {
    href: "/massage-abhyanga-toulouse",
    tag: "Énergétique",
    title: "Abhyanga",
    text: "Ayurvéda, huile chaude et sept chakras pour se rééquilibrer.",
  },
  sued: {
    href: "/massage-sportif-toulouse",
    tag: "Sportif",
    title: "Suédois / Deep Tissue",
    text: "Pétrissage profond pour dénouer et récupérer.",
  },
};

/* Maillage interne "Découvrir aussi" en bas des pages protocole. */
export default function OtherMassages({
  exclude,
  headingId,
}: {
  exclude?: Key;
  headingId: string;
}) {
  const others = (Object.keys(CARDS) as Key[]).filter((k) => k !== exclude);

  return (
    <section
      aria-labelledby={headingId}
      className="bg-sand py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]"
    >
      <div className="max-w-[1120px] mx-auto">
        <p
          data-reveal
          className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
        >
          Découvrir aussi
        </p>
        <h2
          id={headingId}
          data-reveal="80"
          className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 mb-9 max-w-[18ch]"
        >
          Explorez mes autres massages à Toulouse
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(18px,2vw,26px)]">
          {others.map((k, i) => {
            const c = CARDS[k];
            return (
              <Link
                key={k}
                href={c.href}
                data-reveal={i ? "120" : ""}
                className="block bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] p-[30px] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-[6px] hover:shadow-[0_34px_60px_-40px_rgba(34,28,21,.5)]"
              >
                <span className="text-[11px] tracking-[.2em] uppercase text-bronze font-semibold">
                  {c.tag}
                </span>
                <h3 className="font-serif font-normal text-[26px] text-ink mt-[10px] mb-2">
                  {c.title}
                </h3>
                <p className="m-0 text-taupe text-[15px] leading-[1.65]">
                  {c.text}{" "}
                  <span className="text-forest font-semibold">
                    Découvrir →
                  </span>
                </p>
              </Link>
            );
          })}
        </div>
        <p
          data-reveal="180"
          className="mt-8 mb-0 text-taupe text-[15.5px]"
        >
          Voir tous les{" "}
          <Link
            href="/tarifs-massage-toulouse"
            className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
          >
            tarifs massages à Toulouse
          </Link>{" "}
          ou{" "}
          <Link
            href="/carte-cadeau-massage-toulouse"
            className="text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
          >
            offrir une carte cadeau
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
