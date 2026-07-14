import type { Article } from "../types";

const article: Article = {
  slug: "preparer-son-domicile-pour-un-massage",
  category: "domicile",
  title: "Préparer son domicile pour un massage : la check-list en 10 minutes",
  metaTitle: "Préparer son domicile pour un massage : check-list simple",
  description:
    "Quelle pièce choisir, quelle température, quoi faire des enfants et du chien ? La check-list express pour accueillir un massage à domicile dans de bonnes conditions.",
  excerpt:
    "Pièce, température, lumière, animaux : dix minutes de préparation suffisent pour une séance parfaite chez vous.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/espace-detente.jpeg",
  imageAlt: "Pièce préparée pour un massage, lumière douce et ambiance calme",
  blocks: [
    {
      t: "p",
      x: "Bonne nouvelle : recevoir un **massage à domicile** ne demande presque aucune préparation — j'apporte la table, le linge, les huiles et la musique. Mais dix minutes d'anticipation transforment une bonne séance en séance parfaite. Voici la check-list que j'envoie à mes nouveaux clients toulousains.",
    },
    { t: "h2", x: "Choisir la pièce : au calme plutôt que spacieuse" },
    {
      t: "p",
      x: "Il faut un rectangle libre d'environ **2 m sur 3** : la table fait 1,85 m de long et je dois pouvoir circuler autour. Un salon, une chambre, un bureau — tout convient. Le critère n° 1 n'est pas la taille mais le calme : mieux vaut une petite chambre paisible qu'un grand salon traversé par la vie de la maison. Pour les détails de dimensions, voir [combien de place pour une table de massage](/blog/table-de-massage-a-domicile-place-necessaire).",
    },
    { t: "h2", x: "La température : le détail qui change tout" },
    {
      t: "p",
      x: "Un corps massé à l'huile se refroidit vite. Montez le chauffage d'un ou deux degrés une heure avant la séance — visez **22-23 °C** dans la pièce. En été toulousain, à l'inverse, fermez les volets en journée et coupez la climatisation directe pendant la séance : un filet d'air froid sur une peau huilée est désagréable.",
    },
    { t: "h2", x: "Lumière et ambiance : moins il y en a, mieux c'est" },
    {
      t: "ul",
      items: [
        "Fermez ou tamisez les volets, éteignez les plafonniers — une lampe d'appoint suffit.",
        "Coupez la télévision et mettez votre téléphone en silencieux.",
        "J'apporte une enceinte et une musique adaptée, mais votre propre playlist est la bienvenue si vous préférez.",
        "Une bougie si vous aimez, mais évitez les parfums d'intérieur puissants qui entrent en conflit avec les huiles.",
      ],
    },
    { t: "h2", x: "Enfants, conjoint, animaux : on anticipe" },
    {
      t: "p",
      x: "Le lâcher-prise ne résiste pas à un enfant qui ouvre la porte ou un chat qui saute sur la table (véridique). Prévenez la maisonnée que vous êtes indisponible pendant une heure, et installez les animaux dans une autre pièce. Si votre conjoint est tenté par l'expérience, le [massage duo](/massage-duo-toulouse) règle élégamment la question.",
    },
    { t: "h2", x: "Vous, juste avant la séance" },
    {
      t: "ul",
      items: [
        "Une douche chaude juste avant : elle prépare les muscles et rend le massage plus agréable.",
        "Mangez léger — pas de repas copieux dans les deux heures qui précèdent.",
        "Pas besoin de tenue particulière : vous vous installez sous la serviette, seule la zone massée est découverte. Plus de détails dans [comment se préparer à un massage](/blog/comment-se-preparer-a-un-massage).",
      ],
    },
    {
      t: "p",
      x: "Et c'est tout. J'arrive 15 à 20 minutes avant l'heure pour l'installation, comme décrit dans [le déroulement complet d'une séance](/blog/massage-a-domicile-toulouse-comment-ca-se-passe) — vous n'avez plus qu'à vous laisser faire. Les créneaux se réservent simplement via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Faut-il fournir des serviettes ou des huiles ?",
      a: "Non, j'apporte tout : table professionnelle, housse et linge propres, serviettes, huiles chauffées et musique. Vous ne fournissez que la pièce.",
    },
    {
      q: "Mon salon est petit, est-ce un problème ?",
      a: "Rarement. Il faut environ 2 m sur 3 au sol — en décalant une table basse, la plupart des salons toulousains, même en T2, offrent l'espace nécessaire.",
    },
    {
      q: "Peut-on faire la séance en musique ou en silence ?",
      a: "Les deux. Je propose une ambiance sonore douce par défaut, mais certains clients préfèrent le silence complet ou leur propre playlist : c'est vous qui choisissez.",
    },
  ],
  related: [
    "table-de-massage-a-domicile-place-necessaire",
    "comment-se-preparer-a-un-massage",
    "massage-a-domicile-toulouse-comment-ca-se-passe",
  ],
};

export default article;
