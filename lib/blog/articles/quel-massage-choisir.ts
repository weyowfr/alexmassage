import type { Article } from "../types";

const article: Article = {
  slug: "quel-massage-choisir",
  category: "techniques",
  title: "Californien, abhyanga ou suédois : quel massage choisir ?",
  metaTitle: "Quel massage choisir ? Californien, abhyanga ou suédois",
  description:
    "Stress, fatigue, courbatures : à chaque besoin sa technique. Le guide simple d'un praticien pour choisir entre massage californien, abhyanga et suédois sportif.",
  excerpt:
    "Le guide de décision simple : à chaque état du corps sa technique, expliqué sans jargon par un praticien.",
  date: "2026-07-14",
  readingMinutes: 5,
  image: "/images/massage-californien.jpeg",
  imageAlt: "Massage du dos aux mouvements lents et enveloppants",
  blocks: [
    {
      t: "p",
      x: "Face à une carte de massages, la plupart des gens choisissent… au hasard, ou par habitude. Dommage : la bonne technique au bon moment démultiplie les effets de la séance. Voici comment je guide mes clients toulousains, avec une règle simple : **on ne choisit pas un massage, on part de son état du jour**.",
    },
    { t: "h2", x: "La question à se poser : de quoi votre corps a-t-il besoin ?" },
    {
      t: "ul",
      items: [
        "**« Je suis stressé, je dors mal, mon esprit tourne en boucle »** → massage californien.",
        "**« Je suis épuisé, vidé, en manque d'énergie »** → massage abhyanga.",
        "**« J'ai des tensions précises, des courbatures, je fais du sport »** → massage suédois / sportif.",
      ],
    },
    { t: "h2", x: "Le californien : pour calmer le mental" },
    {
      t: "p",
      x: "Le [massage californien](/massage-californien-toulouse) — aussi appelé massage relaxant — enchaîne de longs mouvements lents et enveloppants, avec une pression douce à modérée. C'est la technique du **lâcher-prise** : elle s'adresse au système nerveux plus qu'aux muscles. Idéal en période de surcharge mentale, avant un événement stressant, ou simplement pour retrouver un sommeil de qualité — j'en détaille les effets dans [les bienfaits du massage californien](/blog/bienfaits-massage-californien).",
    },
    { t: "h2", x: "L'abhyanga : pour relancer l'énergie" },
    {
      t: "p",
      x: "Issu de la tradition ayurvédique indienne, le [massage abhyanga](/massage-abhyanga-toulouse) se pratique avec une huile généreuse et chaude, sur l'ensemble du corps, dans un rythme soutenu et rythmé. Là où le californien apaise, l'abhyanga **revitalise** : c'est la séance des périodes de fatigue accumulée, des convalescences de gros dossiers, des changements de saison. Le guide complet est ici : [massage abhyanga, le guide ayurvédique](/blog/massage-abhyanga-guide-ayurvedique).",
    },
    { t: "h2", x: "Le suédois sportif : pour travailler le muscle" },
    {
      t: "p",
      x: "Le [massage suédois / sportif](/massage-sportif-toulouse) utilise pétrissages profonds, frictions et pressions ciblées pour dénouer les tensions installées. C'est le choix des sportifs — coureurs, rugbymen, adeptes de la salle — mais aussi des télétravailleurs aux trapèzes en béton, comme expliqué dans [télétravail : soulager nuque et épaules](/blog/teletravail-tensions-nuque-epaules). La pression est plus soutenue, toujours ajustée à votre retour — voir [quelle pression choisir](/blog/pression-massage-douce-moyenne-forte).",
    },
    { t: "h2", x: "Les cas particuliers" },
    {
      t: "ul",
      items: [
        "**Premier massage de votre vie** : commencez par le californien — le plus accessible, aucune appréhension possible.",
        "**Vous hésitez encore** : la formule découverte de 30 minutes permet de tester une technique à petit prix, [tarifs ici](/tarifs-massage-toulouse).",
        "**À deux** : toutes les techniques se déclinent en [massage duo](/massage-duo-toulouse), chacun choisissant la sienne.",
        "**Contre-indications** : fièvre, phlébite, grossesse non accompagnée médicalement… certains contextes imposent de reporter, détails dans [les contre-indications du massage](/blog/contre-indications-massage-bien-etre).",
      ],
    },
    {
      t: "quote",
      x: "Mon conseil de praticien : alternez. Un corps a rarement un seul besoin à l'année — un sportif stressé profite autant d'un californien en semaine chargée que d'un sportif après sa sortie longue.",
    },
    {
      t: "p",
      x: "Dernier point : le choix n'est jamais figé. L'échange en début de séance — décrit dans [le déroulement d'une séance à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe) — permet toujours d'ajuster la technique à votre état du jour.",
    },
  ],
  faq: [
    {
      q: "Quel massage choisir pour un premier massage ?",
      a: "Le californien : sa pression douce et ses mouvements enveloppants en font la technique la plus accessible. C'est celle que je recommande systématiquement aux personnes qui n'ont jamais été massées.",
    },
    {
      q: "Peut-on mélanger les techniques dans une même séance ?",
      a: "Oui, c'est même fréquent : un dos en suédois appuyé puis des jambes en californien, par exemple. L'échange en début de séance permet de composer le protocole selon vos besoins.",
    },
    {
      q: "Ces trois massages sont-ils au même prix ?",
      a: "Chez moi, oui : la grille de tarifs est identique quelle que soit la technique, de 30 € les 30 minutes à 85 € l'heure et demie, à domicile sur Toulouse et 30 km alentour.",
    },
  ],
  related: [
    "bienfaits-massage-californien",
    "massage-abhyanga-guide-ayurvedique",
    "massage-relaxant-ou-massage-sportif",
  ],
};

export default article;
