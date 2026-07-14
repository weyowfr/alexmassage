import type { Article } from "../types";

const article: Article = {
  slug: "massage-sportif-course-a-pied-toulouse",
  category: "sport",
  title: "Coureurs toulousains : le massage sportif au service de vos kilomètres",
  metaTitle: "Massage sportif et course à pied à Toulouse",
  description:
    "Marathon de Toulouse, sorties le long du Canal, trails du dimanche : comment intégrer le massage sportif à votre plan d'entraînement de coureur, semaine par semaine.",
  excerpt:
    "Du 10 km au marathon de Toulouse : où placer le massage dans votre plan d'entraînement, et quelles zones travailler.",
  date: "2026-07-14",
  readingMinutes: 5,
  image: "/images/massage-jambes.png",
  imageAlt: "Massage des mollets et des cuisses d'un coureur",
  blocks: [
    {
      t: "p",
      x: "Les berges de la Garonne, le canal du Midi, la coulée verte de l'Hers : Toulouse est une ville de coureurs, et mes clients runners ne me laissent aucun doute sur les zones qui trinquent — **mollets, ischio-jambiers, quadriceps et ce fameux piriforme**. Voici comment le massage sportif s'intègre concrètement dans une saison de course à pied.",
    },
    { t: "h2", x: "Ce que la course inflige (et ce que le massage en fait)" },
    {
      t: "p",
      x: "Courir, c'est encaisser deux à trois fois son poids à chaque foulée, des milliers de fois par sortie. Les tissus encaissent bien — c'est leur métier — mais ils se **densifient** : mollets qui durcissent, ischio-jambiers qui raccourcissent, hanches qui se verrouillent. Le [massage sportif](/massage-sportif-toulouse) travaille précisément cette densification : pétrissages profonds des chaînes postérieures, travail ciblé des points de tension, drainage des jambes lourdes — les mécanismes détaillés dans [massage et récupération musculaire](/blog/massage-et-recuperation-musculaire).",
    },
    { t: "h2", x: "Le calendrier type autour d'une échéance" },
    {
      t: "ul",
      items: [
        "**En préparation (volume d'entraînement)** — une séance toutes les 3 semaines, en insistant sur les zones qui « parlent » : c'est souvent là qu'on détecte une tension avant qu'elle ne devienne gêne.",
        "**Semaine de course** — au plus tard un massage léger à J-4 ; **jamais de travail profond à moins de 3 jours** d'un objectif : la sensibilité résiduelle décrite dans [courbatures et massage](/blog/courbatures-et-massage) coûterait des sensations le jour J.",
        "**Après la course** — J+1 : rien ou effleurages très doux. **J+2 à J+4 : la vraie séance de récupération**, le rendez-vous que mes marathoniens réservent avant même la course.",
      ],
    },
    { t: "h2", x: "L'avantage décisif du domicile pour un coureur" },
    {
      t: "p",
      x: "Le lendemain d'un marathon ou d'un trail long, chaque escalier est une épreuve. Le [massage à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe) prend ici tout son sens : je viens chez vous, vous ne conduisez pas avec des quadriceps en compote, et après la séance vos jambes restent au repos complet. J'interviens dans [tout Toulouse et 30 km alentour](/blog/massage-a-domicile-autour-de-toulouse) — de quoi couvrir la plupart des dossards de la région.",
    },
    { t: "h2", x: "Entre les séances : l'entretien du coureur" },
    {
      t: "ul",
      items: [
        "**Étirements doux post-sortie** — pas de stretching agressif à chaud ; le protocole raisonnable est dans [étirements et massage](/blog/etirements-et-massage-combo-recuperation).",
        "**Auto-massage** — rouleau ou balle sur les mollets et le piriforme entre deux séances professionnelles.",
        "**Hydratation et sommeil** — la vraie salle de récupération, voir [massage et sommeil](/blog/massage-et-sommeil).",
        "**Écoutez les signaux** — une douleur qui modifie la foulée n'est plus du ressort du massage : médecin du sport d'abord.",
      ],
    },
    {
      t: "p",
      x: "Que vous prépariez le Marathon de Toulouse Métropole, le 10 km ou votre premier trail des Pyrénées — un cas à part traité dans [l'article trail](/blog/massage-recuperation-trail-pyrenees) —, une chose ne change pas : les jambes qui vous portent méritent mieux qu'un oubli. Séances dès 30 €, [tarifs ici](/tarifs-massage-toulouse), réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Combien de temps avant un marathon peut-on se faire masser ?",
      a: "Un massage appuyé : au plus tard J-4 ou J-5. Dans les trois derniers jours, uniquement un travail très léger — la priorité est d'arriver avec des jambes fraîches, sans sensibilité résiduelle.",
    },
    {
      q: "Le massage prévient-il les blessures du coureur ?",
      a: "Il ne les empêche pas à lui seul, mais il aide : des tissus souples encaissent mieux, et la séance permet de repérer des zones qui se chargent avant qu'elles ne deviennent douloureuses. La prévention reste globale : progressivité, sommeil, renforcement.",
    },
    {
      q: "Quelles zones masser en priorité chez un coureur ?",
      a: "Mollets, ischio-jambiers, quadriceps, fessiers et piriforme — toute la chaîne propulsive. Le bas du dos, souvent sollicité par la posture de course, complète utilement la séance.",
    },
  ],
  related: [
    "massage-et-recuperation-musculaire",
    "massage-recuperation-trail-pyrenees",
    "etirements-et-massage-combo-recuperation",
  ],
};

export default article;
