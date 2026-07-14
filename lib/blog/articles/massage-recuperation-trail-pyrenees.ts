import type { Article } from "../types";

const article: Article = {
  slug: "massage-recuperation-trail-pyrenees",
  category: "sport",
  title: "Trail dans les Pyrénées : récupérer quand on rentre à Toulouse",
  metaTitle: "Trail Pyrénées : massage de récupération à Toulouse",
  description:
    "Dénivelé, descentes qui cassent les quadriceps, week-ends en altitude : le protocole de récupération des traileurs toulousains, massage à domicile compris.",
  excerpt:
    "Les descentes pyrénéennes détruisent les quadriceps comme aucune route : le protocole de récupération du traileur.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/massage-jambes.png",
  imageAlt: "Massage de récupération des quadriceps après un trail",
  blocks: [
    {
      t: "p",
      x: "Vivre à Toulouse quand on aime le trail, c'est avoir les Pyrénées à 1 h 30 de voiture — et des lundis mémorables. Car la montagne ne fatigue pas comme la plaine : **ce sont les descentes qui détruisent**, pas les montées. Voici le protocole de récupération que je conseille à mes clients traileurs, de Luchon au canapé toulousain.",
    },
    { t: "h2", x: "Pourquoi le trail casse plus que le bitume" },
    {
      t: "p",
      x: "En descente, le quadriceps travaille en **contraction excentrique** : il freine en s'allongeant, le mode de contraction qui crée le plus de micro-lésions musculaires. Mille mètres de descente laissent plus de traces que trente kilomètres de plat — d'où ces courbatures spectaculaires de J+1 à J+3, dont le mécanisme est expliqué dans [courbatures et massage](/blog/courbatures-et-massage). Ajoutez les chevilles sollicitées par le terrain, les mollets par les montées, et le dos par le sac : le traileur rentre entier, mais dense.",
    },
    { t: "h2", x: "Le protocole de la semaine post-trail" },
    {
      t: "ul",
      items: [
        "**Dimanche soir (retour)** — douche, repas complet, sommeil long. Pas de massage profond : le muscle vient d'encaisser.",
        "**Lundi-mardi** — marche facile, hydratation, éventuellement effleurages doux sur les jambes.",
        "**Mercredi-jeudi : la séance de récupération** — [massage sportif](/massage-sportif-toulouse) complet des jambes : quadriceps en priorité, mollets, fessiers, et le dos porteur du sac. Le timing suit la logique détaillée dans [massage et récupération](/blog/massage-et-recuperation-musculaire).",
        "**Le week-end suivant** — reprise légère, et la boucle repart.",
      ],
    },
    { t: "h2", x: "L'argument massue du domicile pour le traileur" },
    {
      t: "p",
      x: "Après un ultra ou un gros dénivelé, la perspective de reprendre la voiture pour aller « se détendre » est une plaisanterie. Le [massage à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe) inverse la logique : la récupération vient à vous, la table s'installe dans le salon, et après la séance vos quadriceps n'ont plus qu'un escalier à négocier — celui de votre lit. J'interviens sur [Toulouse et 30 km](/blog/massage-a-domicile-autour-de-toulouse), là où rentrent la plupart des dossards pyrénéens.",
    },
    { t: "h2", x: "Préparer la saison, pas seulement la réparer" },
    {
      t: "p",
      x: "Les traileurs qui durent ne se contentent pas du massage post-course : en période de préparation, une séance toutes les 3 semaines entretient des quadriceps souples qui encaisseront mieux les descentes, complétée par les [étirements raisonnés](/blog/etirements-et-massage-combo-recuperation) et un vrai [sommeil](/blog/massage-et-sommeil). La montagne se gagne dans la vallée — [tarifs ici](/tarifs-massage-toulouse), réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Combien de jours après un trail faut-il se faire masser ?",
      a: "Attendez que le plus fort des courbatures passe : J+3 ou J+4 pour un trail long, J+2 pour un format court. Avant cela, seuls des effleurages doux sont utiles.",
    },
    {
      q: "Quelles zones travailler après un trail à fort dénivelé ?",
      a: "Les quadriceps avant tout — ce sont eux qui freinent en descente — puis mollets, fessiers, ischio-jambiers, et le haut du dos si vous portiez un sac ou des bâtons.",
    },
    {
      q: "Le massage peut-il aider à préparer un ultra-trail ?",
      a: "Oui, en entretien : une séance toutes les 3 semaines pendant la préparation garde des tissus souples et permet de repérer les zones qui se chargent. Le dernier massage appuyé se place à J-5 minimum de la course.",
    },
  ],
  related: [
    "massage-sportif-course-a-pied-toulouse",
    "courbatures-et-massage",
    "massage-et-recuperation-musculaire",
  ],
};

export default article;
