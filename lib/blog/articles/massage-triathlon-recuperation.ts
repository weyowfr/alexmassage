import type { Article } from "../types";

const article: Article = {
  slug: "massage-triathlon-recuperation",
  category: "sport",
  title: "Triathlon et massage : organiser la récupération sur trois disciplines",
  metaTitle: "Massage triathlon : planifier la récup nage, vélo, course",
  description:
    "Nage, vélo, course : le triathlète cumule trois fatigues. Comment placer le massage sportif dans votre semaine et quelles zones travailler, à domicile.",
  excerpt:
    "Trois sports, un seul corps : comment le triathlète toulousain peut caler le massage dans un planning déjà bien rempli.",
  date: "2027-01-16",
  readingMinutes: 5,
  image: "/images/massage-jambes.png",
  imageAlt: "Massage des quadriceps et des mollets d'un triathlète après l'entraînement",
  blocks: [
    {
      t: "p",
      x: "Un triathlète toulousain, c'est quelqu'un qui nage à la piscine le mardi à l'aube, roule vers les coteaux du Lauragais le samedi et court le long du canal du Midi le dimanche. Et qui trouve quand même le moyen de dire qu'il n'a « pas beaucoup de temps ». Je le comprends : avec trois disciplines, **la récupération est souvent la case qui saute en premier**. C'est pourtant elle qui permet d'empiler les semaines.",
    },
    { t: "h2", x: "Trois sports, trois fatigues qui s'additionnent" },
    {
      t: "p",
      x: "Chaque discipline charge une zone différente, et c'est justement ce qui rend le triathlon trompeur. La **natation** fatigue les épaules, les dorsaux et la nuque. Le **vélo** verrouille les quadriceps, les fléchisseurs de hanche et le bas du dos, tout en laissant la nuque tendue en position aéro. La **course** martèle les mollets, les ischio-jambiers et le tendon d'Achille. Au bout de quelques semaines, on ne sait plus très bien quelle séance a causé quoi, mais tout le corps est un peu raide. Le [massage sportif](/massage-sportif-toulouse) permet de faire le tour complet, sans oublier de zone.",
    },
    { t: "h2", x: "La séance type du triathlète" },
    {
      t: "ul",
      items: [
        "**Nuque et trapèzes** — la grande perdante de la position aéro et de la respiration en crawl.",
        "**Épaules et dorsaux** — le bloc natation, travaillé en pétrissages et longues manœuvres glissées.",
        "**Quadriceps et fléchisseurs de hanche** — le moteur du vélo, souvent très dense chez ceux qui roulent beaucoup.",
        "**Mollets et ischio-jambiers** — la part de la course, avec un passage tout en douceur autour du tendon d'Achille.",
        "**Bas du dos** — le point de jonction des trois disciplines, abordé avec une pression adaptée.",
      ],
    },
    { t: "h2", x: "Planifier la récup quand on s'entraîne presque tous les jours" },
    {
      t: "p",
      x: "Le principe reste celui de [massage et récupération musculaire](/blog/massage-et-recuperation-musculaire) : pas de travail profond juste après une grosse séance, ni la veille d'une séance clé. Pour un triathlète, cela donne souvent **le soir du jour de repos, ou après une séance de natation tranquille**, qui charge peu les jambes. En période d'affûtage, on passe à un massage léger, au plus tard 4 jours avant la course. Après un triathlon longue distance, on attend J+2 ou J+3 pour la vraie séance de récupération, comme pour le [trail](/blog/massage-recuperation-trail-pyrenees). Et comme je me déplace à domicile dans un rayon de 30 km autour de Toulouse, la séance ne vous coûte aucun trajet supplémentaire dans un planning déjà serré.",
    },
    { t: "h2", x: "Vigilance : le massage ne soigne pas une blessure de surcharge" },
    {
      t: "p",
      x: "Les triathlètes ont un talent particulier pour transformer une petite gêne en vraie blessure, à force de « continuer en vélo puisque ça ne fait mal qu'en courant ». Une douleur qui persiste, un tendon sensible au toucher ou une gêne qui modifie votre geste relèvent du médecin du sport ou du kinésithérapeute. Le massage bien-être s'occupe de la fatigue musculaire ordinaire, dans le respect des [contre-indications](/blog/contre-indications-massage-bien-etre).",
    },
    {
      t: "p",
      x: "En saison, la plupart de mes clients triathlètes prennent une séance d'1 h ou d'1 h 30 toutes les 2 à 3 semaines, souvent en abonnement à −15 % dès 3 séances. Les [tarifs sont ici](/tarifs-massage-toulouse), et vous pouvez réserver votre créneau via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "À quelle fréquence un triathlète doit-il se faire masser ?",
      a: "En période de gros volume, toutes les 2 à 3 semaines fonctionne bien. Hors saison, une séance par mois suffit en général pour garder des tissus souples.",
    },
    {
      q: "Combien de temps avant un triathlon peut-on se faire masser ?",
      a: "Un massage appuyé au plus tard 4 à 5 jours avant la course. Dans les derniers jours, uniquement un travail léger pour arriver avec des sensations fraîches.",
    },
    {
      q: "Faut-il choisir une séance d'1 h ou d'1 h 30 pour le triathlon ?",
      a: "Une heure permet de couvrir l'essentiel. Une heure trente laisse le temps de bien travailler le haut et le bas du corps, ce qui colle mieux aux trois disciplines.",
    },
  ],
  related: [
    "massage-natation-nageurs",
    "massage-sportif-course-a-pied-toulouse",
    "a-quelle-frequence-se-faire-masser",
  ],
};

export default article;
