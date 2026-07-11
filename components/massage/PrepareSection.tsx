const ITEMS = [
  {
    t: "Un peu d'espace",
    a: "Environ 2 m × 3 m dégagés — un coin de salon suffit (le double pour un duo). J'apporte la table, inutile d'en avoir une.",
  },
  {
    t: "Rien à fournir",
    a: "Draps, serviettes, huiles, musique : tout est compris. Vos sols et textiles sont protégés pendant toute la séance.",
  },
  {
    t: "Une tenue simple",
    a: "Vous êtes installé(e) sous une serviette, dans le respect de votre pudeur. Une douche tiède avant la séance en décuple les bienfaits.",
  },
  {
    t: "Animaux & enfants",
    a: "Aucun souci — prévoyez simplement qu'ils soient occupés ailleurs le temps de la séance, pour préserver votre bulle de calme.",
  },
];

/* "Que dois-je préparer ?" — répond à la première inquiétude avant de
   réserver un massage à domicile. */
export default function PrepareSection() {
  return (
    <section
      aria-labelledby="h-preparer"
      className="bg-linen py-[clamp(56px,8vw,104px)] px-[clamp(20px,5vw,64px)]"
    >
      <div className="max-w-[1120px] mx-auto">
        <p
          data-reveal
          className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
        >
          En pratique
        </p>
        <h2
          id="h-preparer"
          data-reveal="80"
          className="font-serif font-normal text-[clamp(26px,3.6vw,42px)] leading-[1.1] text-ink m-0 max-w-[18ch]"
        >
          Que dois-je préparer chez moi ?
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(20px,2.4vw,32px)] mt-[clamp(32px,4vw,48px)]">
          {ITEMS.map((it, i) => (
            <div
              key={it.t}
              data-reveal={i ? String(i * 90) : ""}
              className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[26px] py-7"
            >
              <h3 className="font-serif font-normal text-[21px] text-ink m-0 mb-[10px]">
                {it.t}
              </h3>
              <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                {it.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
