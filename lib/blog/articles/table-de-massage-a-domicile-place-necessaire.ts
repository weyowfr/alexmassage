import type { Article } from "../types";

const article: Article = {
  slug: "table-de-massage-a-domicile-place-necessaire",
  category: "domicile",
  title: "Faut-il beaucoup de place pour un massage à domicile ?",
  metaTitle: "Massage à domicile : combien de place faut-il vraiment ?",
  description:
    "2 mètres sur 3 suffisent : dimensions de la table, configurations possibles en appartement, étages sans ascenseur — les réponses concrètes d'un praticien mobile.",
  excerpt:
    "La table fait 1,85 m, il faut circuler autour : les dimensions réelles, pièce par pièce, appartement compris.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/table-massage-serviettes.jpeg",
  imageAlt: "Table de massage pliante installée dans une pièce de vie",
  blocks: [
    {
      t: "p",
      x: "« J'habite un T2 au centre de Toulouse, ça va rentrer ? » C'est l'objection que j'entends le plus souvent — et dans 95 % des cas, la réponse est oui. Voici les dimensions réelles, les configurations qui marchent et les rares cas où il faut ruser.",
    },
    { t: "h2", x: "Les dimensions exactes dont j'ai besoin" },
    {
      t: "ul",
      items: [
        "**La table** : 1,85 m de long sur 0,70 m de large, hauteur réglable.",
        "**L'espace de travail** : je dois circuler autour de la table, soit un rectangle d'environ **2 m sur 3 m** au total.",
        "**Rien d'autre** : pas de prise électrique indispensable, pas de point d'eau dans la pièce (un lavabo quelque part dans le logement suffit).",
      ],
    },
    {
      t: "p",
      x: "Concrètement, c'est l'empreinte d'un grand tapis de salon. En décalant une table basse ou en poussant deux chaises, la quasi-totalité des logements toulousains — y compris les T1 bis de l'hyper-centre — offrent cet espace.",
    },
    { t: "h2", x: "Quelle pièce fonctionne le mieux ?" },
    {
      t: "p",
      x: "**Le salon** est le choix le plus fréquent : spacieux, facile à tamiser. **La chambre** est parfaite si le lit laisse 70 cm de passage d'un côté — et l'ambiance y est naturellement propice au sommeil post-massage. **Une véranda ou un bureau** font très bien l'affaire hors heures chaudes. Les critères d'ambiance (température, lumière, calme) comptent finalement plus que les mètres carrés, comme je l'explique dans [préparer son domicile pour un massage](/blog/preparer-son-domicile-pour-un-massage).",
    },
    { t: "h2", x: "Appartement, étage, escalier étroit : pas de panique" },
    {
      t: "p",
      x: "La table est pliante et se transporte comme une grosse valise. Immeuble sans ascenseur du vieux Toulouse, escalier en colimaçon, résidence étudiante : j'ai déjà tout pratiqué. Signalez simplement l'étage et les particularités d'accès à la réservation via la [page contact](/contact), pour que je prévoie les minutes de portage en plus.",
    },
    { t: "h2", x: "Et pour un massage duo ?" },
    {
      t: "p",
      x: "Le [massage duo](/massage-duo-toulouse) à domicile se déroule **en simultané** : deux tables côte à côte, deux praticiens — j'interviens avec une masseuse professionnelle. Prévoyez donc un espace un peu plus grand, environ **3 m sur 4** : un salon dont on pousse la table basse convient très bien.",
    },
    {
      t: "p",
      x: "En résumé : si un tapis de 2 m sur 3 tient chez vous, un massage professionnel tient chez vous. Le reste du déroulement est décrit pas à pas dans [comment se passe une séance à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe), et les [tarifs sont ici](/tarifs-massage-toulouse).",
    },
  ],
  faq: [
    {
      q: "La table de massage peut-elle abîmer mon parquet ?",
      a: "Non : les pieds sont munis de patins, et la table est stable une fois réglée. Sur un sol fragile ou un tapis épais, je positionne la table à l'endroit le plus adapté avec vous.",
    },
    {
      q: "Peut-on faire le massage sur mon lit plutôt que sur la table ?",
      a: "Je privilégie toujours la table : la hauteur de travail et la fermeté du support conditionnent la qualité des gestes. Le lit reste une solution de repli ponctuelle pour les personnes à mobilité très réduite.",
    },
    {
      q: "Intervenez-vous dans les petits appartements du centre de Toulouse ?",
      a: "Oui, très régulièrement — Capitole, Carmes, Saint-Cyprien… Les T1 bis et T2 anciens suffisent presque toujours. En cas de doute, envoyez-moi une photo de la pièce, je vous confirme la faisabilité.",
    },
  ],
  related: [
    "preparer-son-domicile-pour-un-massage",
    "massage-a-domicile-toulouse-comment-ca-se-passe",
    "massage-domicile-ou-institut",
  ],
};

export default article;
