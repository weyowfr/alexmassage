import type { Article } from "../types";

const article: Article = {
  slug: "comment-se-preparer-a-un-massage",
  category: "pratique",
  title: "Comment se préparer à un massage : les réponses aux questions qu'on n'ose pas poser",
  metaTitle: "Se préparer à un massage : les questions qu'on n'ose pas poser",
  description:
    "Que porter, faut-il se doucher, manger avant, parler pendant ? Toutes les questions que les clients n'osent pas poser avant un massage — réponses franches.",
  excerpt:
    "Douche, tenue, repas, pilosité, silence ou bavardage : les vraies questions d'avant-séance, sans tabou.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/table-massage-serviettes.jpeg",
  imageAlt: "Table de massage prête, serviettes soigneusement pliées",
  blocks: [
    {
      t: "p",
      x: "Avant leur premier massage, la plupart des gens se posent les mêmes questions — et n'en posent aucune, par gêne. Après des centaines de séances à Toulouse, je les connais par cœur. Les voici, avec les réponses franches que je donnerais à un ami.",
    },
    { t: "h2", x: "« Dois-je me doucher juste avant ? »" },
    {
      t: "p",
      x: "L'idéal, oui — une douche chaude détend les muscles et met à l'aise. Mais soyons pragmatiques : une hygiène normale du jour suffit largement. Un cas particulier : si la séance suit une session de sport, une douche s'impose, davantage pour votre confort que pour le mien. Et après la séance, on évite au contraire de se doucher tout de suite, surtout après un [abhyanga à l'huile chaude](/blog/massage-abhyanga-guide-ayurvedique).",
    },
    { t: "h2", x: "« Que dois-je porter ? Jusqu'où se déshabille-t-on ? »" },
    {
      t: "p",
      x: "La règle universelle du massage bien-être : vous gardez **le bas de sous-vêtement**, et vous êtes couvert d'une serviette pendant toute la séance — seule la zone en cours de massage est découverte. Vous vous déshabillez seul, une fois le praticien sorti de la pièce. Venez (ou restez, [à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe)) en tenue confortable : après la séance, personne n'a envie de renfiler un jean serré.",
    },
    { t: "h2", x: "« Peut-on manger avant ? Et le café ? »" },
    {
      t: "p",
      x: "Mangez léger dans les deux heures qui précèdent — être massé en pleine digestion d'un cassoulet est inconfortable, position allongée sur le ventre oblige. À l'inverse, ne venez pas affamé : un ventre qui gronde parasite le lâcher-prise. Le café n'est pas interdit, mais un double expresso juste avant une séance de détente est un léger contresens.",
    },
    { t: "h2", x: "« Faut-il parler pendant le massage, ou se taire ? »" },
    {
      t: "p",
      x: "C'est **vous** qui décidez, et les deux sont parfaitement normaux. Certains clients décompressent en parlant les dix premières minutes puis glissent dans le silence ; d'autres ne disent pas un mot ; certains s'endorment — c'est un compliment. Une seule parole est toujours bienvenue : le retour sur la pression, comme expliqué dans [quelle intensité choisir](/blog/pression-massage-douce-moyenne-forte).",
    },
    { t: "h2", x: "Les dernières petites questions en vrac" },
    {
      t: "ul",
      items: [
        "**« Je ne suis pas épilé(e) »** — aucune importance, sincèrement. Les praticiens ne le remarquent même plus.",
        "**« Et si je m'endors ? »** — tant mieux : c'est le signe d'un système nerveux qui a lâché. Je vous réveille en douceur en fin de séance.",
        "**« J'ai mes règles, je maintiens ? »** — oui si vous vous sentez bien ; le protocole évite simplement le ventre si vous préférez. Dites-le simplement.",
        "**« Un traitement, une particularité de santé ? »** — signalez-les : c'est le seul point non négociable, détaillé dans [les contre-indications](/blog/contre-indications-massage-bien-etre).",
      ],
    },
    {
      t: "p",
      x: "Voilà — vous savez tout ce que les habitués savent. Il ne reste qu'à préparer la pièce ([check-list ici](/blog/preparer-son-domicile-pour-un-massage)) et à réserver via la [page contact](/contact) : le trac d'avant-première-séance disparaît, lui, dans les cinq premières minutes.",
    },
  ],
  faq: [
    {
      q: "Se déshabille-t-on entièrement pour un massage ?",
      a: "Non : le bas de sous-vêtement se garde, et une serviette vous couvre en permanence — seule la zone massée est découverte. Vous vous installez seul, avant que le praticien revienne dans la pièce.",
    },
    {
      q: "Peut-on demander à ne pas se faire masser certaines zones ?",
      a: "Bien sûr : ventre, pieds, visage, cuir chevelu… chacun a ses préférences. Signalez-les à l'échange de début de séance, le protocole s'adapte sans aucune gêne.",
    },
    {
      q: "Que se passe-t-il si je m'endors pendant le massage ?",
      a: "Rien de mieux : le sommeil pendant une séance est le signe d'une détente profonde. La séance continue normalement et je vous réveille en douceur à la fin.",
    },
  ],
  related: [
    "preparer-son-domicile-pour-un-massage",
    "que-faire-apres-un-massage",
    "massage-a-domicile-toulouse-comment-ca-se-passe",
  ],
};

export default article;
