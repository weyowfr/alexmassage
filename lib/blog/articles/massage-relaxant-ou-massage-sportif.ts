import type { Article } from "../types";

const article: Article = {
  slug: "massage-relaxant-ou-massage-sportif",
  category: "techniques",
  title: "Massage relaxant ou massage sportif : lequel vous faut-il ?",
  metaTitle: "Massage relaxant ou sportif : lequel choisir ?",
  description:
    "Détente du mental ou travail du muscle ? Les différences concrètes entre massage relaxant et massage sportif, et comment choisir selon votre semaine.",
  excerpt:
    "Tête pleine ou muscles chargés ? Le duel amical entre les deux massages les plus demandés, tranché par la pratique.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/massage-jambes.png",
  imageAlt: "Massage des jambes, alternance de gestes doux et appuyés",
  blocks: [
    {
      t: "p",
      x: "C'est l'hésitation la plus fréquente au moment de réserver : **relaxant ou sportif ?** Les deux sont d'excellents massages — mais ils ne rendent pas le même service. Le bon choix tient en une question : qu'est-ce qui, chez vous, a le plus besoin de souffler — la tête ou les muscles ?",
    },
    { t: "h2", x: "Deux intentions opposées, deux touchers" },
    {
      t: "p",
      x: "Le [massage relaxant californien](/massage-californien-toulouse) travaille **du système nerveux vers le muscle** : gestes lents, enveloppants, pression douce — le corps se détend parce que l'esprit décroche. Le [massage sportif suédois](/massage-sportif-toulouse) fait le chemin inverse : pétrissages profonds, frictions ciblées — l'esprit se détend parce que le muscle lâche. Même table, même huile, deux logiques.",
    },
    { t: "h2", x: "Choisissez le relaxant si…" },
    {
      t: "ul",
      items: [
        "Votre fatigue est **mentale** : charge de travail, ruminations, sommeil léger.",
        "Vous êtes dans une période émotionnellement dense.",
        "C'est votre **premier massage** ou vous êtes sensible à la pression.",
        "Votre objectif est de dormir profondément — voir [massage et sommeil](/blog/massage-et-sommeil).",
      ],
    },
    { t: "h2", x: "Choisissez le sportif si…" },
    {
      t: "ul",
      items: [
        "Vous avez des **zones précises** qui tirent : trapèzes, lombaires, mollets.",
        "Vous vous entraînez régulièrement et cherchez à mieux [récupérer](/blog/massage-et-recuperation-musculaire).",
        "Le télétravail a transformé votre nuque en pierre — cas détaillé dans [l'article télétravail](/blog/teletravail-tensions-nuque-epaules).",
        "Vous aimez sentir que « ça travaille » — dans les limites décrites dans [quelle pression choisir](/blog/pression-massage-douce-moyenne-forte).",
      ],
    },
    { t: "h2", x: "Le piège classique : choisir par identité" },
    {
      t: "p",
      x: "Beaucoup de sportifs ne réservent que du sportif, par principe — et passent à côté du californien dont leur système nerveux aurait besoin en semaine de compétition ou de stress professionnel. Inversement, des habitués du relaxant gardent des trapèzes noués qu'une seule séance appuyée soulagerait. **Le bon massage est celui de votre état du moment, pas de votre étiquette** — c'est tout le propos du guide [quel massage choisir](/blog/quel-massage-choisir).",
    },
    {
      t: "quote",
      x: "Mes clients les plus fidèles alternent : sportif après les grosses semaines d'entraînement, californien quand c'est la tête qui sature.",
    },
    {
      t: "p",
      x: "Bonne nouvelle : le dilemme ne coûte rien, les deux techniques sont [au même tarif](/tarifs-massage-toulouse), à domicile partout sur [Toulouse et ses environs](/blog/massage-a-domicile-autour-de-toulouse). Et l'échange en début de séance permet même de panacher — dos sportif, jambes relaxantes.",
    },
  ],
  faq: [
    {
      q: "Peut-on combiner relaxant et sportif dans une même séance ?",
      a: "Oui : c'est fréquent sur les formats d'une heure et plus. Par exemple un travail appuyé sur le dos et les épaules, puis des enchaînements californiens sur les jambes et la nuque pour terminer en détente.",
    },
    {
      q: "Le massage sportif est-il réservé aux sportifs ?",
      a: "Pas du tout. Il convient à toute personne présentant des tensions musculaires installées — télétravailleurs, métiers physiques, porteurs de charges… Le nom décrit la technique, pas le public.",
    },
    {
      q: "Quelle durée pour un premier massage ?",
      a: "45 minutes à 1 heure : assez long pour un corps complet, sans être intimidant. La découverte de 30 minutes permet aussi de tester la technique sur le dos avant de s'engager.",
    },
  ],
  related: [
    "quel-massage-choisir",
    "massage-suedois-vs-deep-tissue",
    "bienfaits-massage-californien",
  ],
};

export default article;
