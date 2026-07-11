type Variant = "cali" | "abhy" | "sportif";

type Step = { t: string; a: string };

/* Étapes communes à tous les protocoles. */
const BASE: Step[] = [
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

/* Étapes réécrites par protocole (indices 1 = échange, 2 = huiles,
   4 = déroulé, 5 = après) pour que chaque page porte un rituel qui lui
   est propre plutôt qu'un bloc template dupliqué. */
const OVERRIDES: Record<Variant, Partial<Record<number, Step>>> = {
  cali: {
    1: {
      t: "Échange et préparation",
      a: "Nous parlons de votre niveau de fatigue, de votre sommeil et de ce que vous attendez de ce moment : le californien est un massage d'écoute, et c'est votre état du jour qui donne le tempo de la séance.",
    },
    2: {
      t: "Choix des huiles",
      a: "Pour le californien, je privilégie des huiles végétales douces et fluides, à la glisse longue, tiédies juste au-dessus de la température du corps — c'est cette chaleur discrète qui rend les grands lissages si enveloppants.",
    },
    4: {
      t: "Déroulé de la séance",
      a: "De grands lissages lents relient les zones du corps les unes aux autres, entrecoupés de pétrissages légers et de drainages. La pression reste douce à modérée du début à la fin : l'objectif n'est pas de forcer le muscle, mais d'endormir la vigilance.",
    },
  },
  abhy: {
    1: {
      t: "Échange et constitution",
      a: "Avant un Abhyanga, notre échange s'attarde sur votre constitution : sommeil, digestion, frilosité, agitation… Ces indices m'orientent vers le dosha à apaiser — Vata, Pitta ou Kapha — qui guidera le rythme et la pression de la séance.",
    },
    2: {
      t: "L'huile chaude",
      a: "L'huile — traditionnellement de sésame, nourrissante et réchauffante — est chauffée au bain-marie juste avant la séance, puis appliquée généreusement de la tête aux pieds. C'est elle, autant que le geste, qui fait le soin.",
    },
    4: {
      t: "Déroulé de la séance",
      a: "Lissages amples, frictions rythmées et pressions sur les points d'énergie s'enchaînent dans un mouvement continu, sans rupture, en parcourant les sept chakras. Le corps entier est traité, cuir chevelu et pieds compris.",
    },
    5: {
      t: "Après la séance",
      a: "L'huile continue d'agir après le massage : idéalement, laissez-la pénétrer une heure avant la douche. Un verre d'eau tiède et un moment au calme prolongent le rééquilibrage bien après mon départ.",
    },
  },
  sportif: {
    1: {
      t: "Évaluation des zones",
      a: "Nous passons en revue votre pratique sportive, vos douleurs du moment et votre calendrier — préparation ou récupération. Je palpe les zones de tension pour cibler précisément les groupes musculaires à travailler.",
    },
    2: {
      t: "Préparation des tissus",
      a: "Ici l'huile est utilisée avec parcimonie : juste assez pour travailler en profondeur sans glisser. La séance commence par un échauffement des tissus en surface avant d'aller chercher les couches musculaires profondes.",
    },
    4: {
      t: "Déroulé de la séance",
      a: "Pétrissages fermes, pressions statiques sur les nœuds, frictions transversales et étirements alternent selon la réaction du muscle. La pression est profonde mais toujours ajustée à votre ressenti — vous gardez la main.",
    },
    5: {
      t: "Après la séance",
      a: "Hydratez-vous davantage dans les 24 heures et laissez au muscle une journée avant l'effort intense suivant : une sensibilité passagère est normale après un travail profond, c'est le signe que les tensions ont lâché.",
    },
  },
};

/* <details>/<summary> natif : le contenu des 6 panneaux est présent dans le
   HTML SSR (crawlable), l'attribut name assure l'ouverture exclusive. */
export default function SeanceAccordion({ variant }: { variant?: Variant }) {
  const data = BASE.map((step, i) =>
    variant ? (OVERRIDES[variant][i] ?? step) : step,
  );

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
          {data.map((d, i) => (
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
