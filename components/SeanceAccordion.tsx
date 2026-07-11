const DATA = [
  {
    t: "Avant la séance",
    a: "J'arrive 15 à 20 minutes avant l'heure prévue pour installer la table de massage et préparer les accessoires — huiles, serviettes chaudes, musique d'ambiance. Ce temps me permet de créer un cocon propice à la détente, avant même que la séance ne commence.",
  },
  {
    t: "Échange et préparation",
    a: "Nous prenons un moment pour échanger : vos attentes, vos zones de tension, vos éventuelles contre-indications. Ce court dialogue me permet d'adapter précisément le massage à votre corps et à votre humeur du jour.",
  },
  {
    t: "Choix des huiles",
    a: "Je vous propose une sélection d'huiles végétales et essentielles. Ensemble, nous choisissons celle dont le parfum et les propriétés vous correspondent — chauffée à la juste température pour une glisse enveloppante.",
  },
  {
    t: "Installation et confort",
    a: "Vous vous installez sous une serviette douce. Lumière tamisée, musique feutrée, chaleur maîtrisée : tout est pensé pour que vous n'ayez plus qu'une seule chose à faire — lâcher prise.",
  },
  {
    t: "Déroulé de la séance",
    a: "Le massage débute par des gestes lents qui installent la respiration, puis s'intensifie selon le protocole choisi et vos besoins. Je reste à l'écoute de vos réactions tout au long de la séance.",
  },
  {
    t: "Après la séance",
    a: "Je vous laisse revenir à votre rythme, avec un verre d'eau pour accompagner l'élimination des toxines. Quelques conseils simples vous aident à prolonger les bienfaits une fois seul(e).",
  },
];

/* <details>/<summary> natif : le contenu des 6 panneaux est présent dans le
   HTML SSR (crawlable), l'attribut name assure l'ouverture exclusive. */
export default function SeanceAccordion() {
  return (
    <section className="bg-linen py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[840px] mx-auto px-[clamp(20px,5vw,40px)]">
        <p
          data-reveal
          className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
        >
          Le rituel
        </p>
        <h2
          data-reveal="80"
          className="font-serif font-normal text-[clamp(28px,4vw,46px)] leading-[1.08] text-ink m-0 max-w-[16ch]"
        >
          Comment se déroule une séance ?
        </h2>
        <div
          data-reveal="160"
          className="mt-10 border-t border-[rgba(34,28,21,.14)]"
        >
          {DATA.map((d, i) => (
            <details
              key={d.t}
              name="seance"
              open={i === 0}
              className="group border-b border-[rgba(34,28,21,.14)]"
            >
              <summary className="flex items-center gap-[18px] w-full py-6 px-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-serif italic text-[15px] min-w-[26px] text-beige transition-colors duration-[400ms] group-open:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-serif text-[clamp(18px,2.2vw,24px)] font-normal tracking-[.01em] text-cocoa transition-colors duration-[400ms] group-open:text-ink">
                  {d.t}
                </span>
                <span
                  aria-hidden="true"
                  className="font-sans text-[24px] font-light leading-none text-bronze transition-[transform,color] duration-[400ms] ease-[cubic-bezier(.22,.61,.36,1)] group-open:text-gold group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="m-0 pl-11 pr-1 pb-7 text-taupe text-[16px] leading-[1.78] max-w-[64ch]">
                {d.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
