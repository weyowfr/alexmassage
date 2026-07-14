import type { Article } from "../types";

const article: Article = {
  slug: "massage-et-recuperation-musculaire",
  category: "bienfaits",
  title: "Massage et récupération musculaire : ce que dit la pratique",
  metaTitle: "Massage et récupération musculaire : le vrai du faux",
  description:
    "Le massage accélère-t-il vraiment la récupération ? Effets sur les muscles, le bon timing après l'effort, et comment l'intégrer à sa routine sportive.",
  excerpt:
    "Jambes lourdes, muscles chargés : ce que le massage apporte réellement à la récupération, et quand le placer.",
  date: "2026-07-14",
  readingMinutes: 5,
  image: "/images/massage-jambes.png",
  imageAlt: "Massage de récupération des jambes après l'effort",
  blocks: [
    {
      t: "p",
      x: "Tous les sportifs de haut niveau se font masser — ce n'est pas un hasard, mais ce n'est pas magique non plus. Entre le mythe du massage qui « évacue les toxines » et la réalité de ce qu'une séance apporte à des muscles chargés, faisons le point honnêtement.",
    },
    { t: "h2", x: "Ce que le massage fait vraiment pour la récupération" },
    {
      t: "ul",
      items: [
        "**Il réduit la sensation de raideur et de lourdeur** — c'est l'effet le mieux établi : les muscles massés « rendent la main » plus vite subjectivement.",
        "**Il détend les zones qui restent contractées** — après l'effort, certains groupes musculaires ne relâchent pas complètement ; le pétrissage les y aide.",
        "**Il active la détente globale** — la récupération passe par le système nerveux autant que par le muscle : une séance bascule le corps en mode réparation, le mécanisme décrit dans [massage et stress](/blog/massage-anti-stress-bienfaits).",
        "**Il améliore le sommeil** — or c'est pendant le sommeil profond que le muscle se répare, voir [massage et sommeil](/blog/massage-et-sommeil).",
      ],
    },
    {
      t: "p",
      x: "Quant aux « toxines évacuées » : le terme est un raccourci marketing. Le massage ne filtre pas le sang — vos reins et votre foie s'en chargent très bien. Son bénéfice passe par la mécanique musculaire et le système nerveux, ce qui est déjà beaucoup.",
    },
    { t: "h2", x: "Le bon timing : ni trop tôt, ni trop tard" },
    {
      t: "p",
      x: "Juste après un effort intense, le muscle est inflammé : un travail profond immédiat est contre-productif. La fenêtre idéale pour un [massage sportif](/massage-sportif-toulouse) appuyé se situe **24 à 72 heures après** la grosse séance ou la compétition. Le lendemain d'un marathon, on privilégie au contraire un travail doux, drainant, non agressif — la nuance est développée dans [courbatures et massage](/blog/courbatures-et-massage).",
    },
    { t: "h2", x: "L'intégrer à sa routine d'entraînement" },
    {
      t: "ul",
      items: [
        "**En période d'entraînement régulier** — une séance toutes les 3 à 4 semaines entretient la souplesse des tissus et détecte les zones qui se chargent.",
        "**Avant une échéance** — une séance légère 3 à 5 jours avant la compétition, jamais un travail profond la veille.",
        "**Après l'échéance** — la séance de récupération à J+2 ou J+3, le grand classique de mes clients coureurs, détaillé dans [l'article course à pied](/blog/massage-sportif-course-a-pied-toulouse).",
        "**En complément, pas en remplacement** — sommeil, hydratation et [étirements](/blog/etirements-et-massage-combo-recuperation) restent les fondations ; le massage est l'étage au-dessus.",
      ],
    },
    {
      t: "p",
      x: "Dernier avantage, spécifique au [massage à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe) : après la séance, vos jambes ne servent qu'à rejoindre le canapé. Pas de conduite, pas de marche — la récupération continue. Séances de 30 min à 1 h 30, [tarifs ici](/tarifs-massage-toulouse).",
    },
  ],
  faq: [
    {
      q: "Faut-il se faire masser avant ou après le sport ?",
      a: "Pour la récupération : après, idéalement 24 à 72 heures après l'effort intense. Avant une compétition, seul un massage léger et dynamisant a sa place, jamais un travail profond la veille.",
    },
    {
      q: "Le massage remplace-t-il les étirements ?",
      a: "Non, les deux sont complémentaires : les étirements entretiennent l'amplitude au quotidien, le massage travaille les tissus en profondeur périodiquement. Le combo est détaillé dans un article dédié.",
    },
    {
      q: "Quel massage pour la récupération sportive ?",
      a: "Le massage suédois / sportif, avec pétrissages profonds et travail ciblé des groupes sollicités — jambes pour les coureurs, dos et épaules pour la musculation. La pression s'ajuste à la charge du moment.",
    },
  ],
  related: [
    "courbatures-et-massage",
    "massage-sportif-course-a-pied-toulouse",
    "etirements-et-massage-combo-recuperation",
  ],
};

export default article;
