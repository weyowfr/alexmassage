import type { Article } from "../types";

const article: Article = {
  slug: "massage-sportif-volley",
  category: "sport",
  title: "Volley et beach-volley : le massage sportif pour l'épaule de frappe et les jambes",
  metaTitle: "Massage volley : épaule de frappe, sauts et récupération",
  description:
    "Smashs, contres, sauts à répétition : le volley charge l'épaule, les genoux et le dos. Comment le massage sportif à domicile aide les volleyeurs toulousains.",
  excerpt:
    "Une épaule qui frappe, des jambes qui sautent, un dos qui plonge : la récupération du volleyeur en salle comme sur le sable.",
  date: "2027-01-09",
  readingMinutes: 4,
  image: "/images/massage-sportif.webp",
  imageAlt: "Massage appuyé de l'épaule et du haut du dos d'un joueur de volley",
  blocks: [
    {
      t: "p",
      x: "L'hiver, le volley se joue dans les gymnases de la métropole, entre deux créneaux de badminton. Dès les premiers beaux jours, une partie des joueurs migre vers les terrains de sable, au bord de l'eau ou dans les bases de loisirs autour de Toulouse. Le décor change, la facture physique beaucoup moins : **une épaule qui frappe fort, des jambes qui sautent sans arrêt et un bas du dos qui encaisse les réceptions**.",
    },
    { t: "h2", x: "Ce que le volley demande à votre corps" },
    {
      t: "p",
      x: "Le smash et le service smashé sollicitent l'épaule dans une amplitude extrême, à pleine vitesse, toujours du même côté. Ajoutez des dizaines de sauts par match pour attaquer et contrer, des réceptions en flexion, des plongeons au sol en défense. Le lundi, mes clients volleyeurs décrivent à peu près tous la même chose : une **épaule de frappe** lourde, des **mollets** et des **quadriceps** durs comme du bois, et des **lombaires** qui protestent en se baissant pour lacer leurs chaussures. Sur le sable, les mollets prennent encore plus cher, car chaque appui s'enfonce.",
    },
    { t: "h2", x: "La séance type du volleyeur" },
    {
      t: "ul",
      items: [
        "**Épaule de frappe et omoplate** — travail du pourtour de l'articulation, des rotateurs accessibles et des trapèzes, avec une pression progressive.",
        "**Mollets et tendon d'Achille (en périphérie)** — pétrissages des mollets, effleurages autour du tendon, jamais d'appui direct dessus.",
        "**Quadriceps et pourtour du genou** — les muscles qui amortissent chaque réception, détendus sans toucher l'articulation elle-même.",
        "**Lombaires et fessiers** — la zone qui fléchit et se redresse à chaque balle basse, voir [tensions lombaires](/blog/tensions-lombaires-bas-du-dos).",
        "**Avant-bras** — une petite attention pour ceux qui passent leurs matchs en manchette.",
      ],
    },
    { t: "h2", x: "Le bon créneau : entre le match et l'entraînement" },
    {
      t: "p",
      x: "Après un match ou un tournoi de beach qui a duré tout l'après-midi, laissez passer 48 heures : les [courbatures](/blog/courbatures-et-massage) d'abord, le travail profond ensuite. **Le milieu de semaine, un soir sans entraînement**, est idéal pour la plupart des joueurs. En pleine saison de tournois d'été, une séance plus légère la veille du départ reste possible, à condition de ne pas creuser en profondeur. À [domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe), vous évitez au moins de remonter dans la voiture avec du sable partout.",
    },
    { t: "h2", x: "Vigilance : genoux et épaules ne se massent pas à l'aveugle" },
    {
      t: "p",
      x: "Une douleur sous la rotule qui revient à chaque saut, une épaule qui lâche au smash, une cheville tournée sur une réception : ce sont des situations pour le médecin ou le kinésithérapeute. Le massage bien-être ne soigne pas ce type de problème, et je ne travaille pas une zone douloureuse non évaluée. Les [contre-indications](/blog/contre-indications-massage-bien-etre) sont les mêmes pour tous, volleyeurs compris.",
    },
    {
      t: "p",
      x: "Pour la fatigue musculaire de la saison, une séance de [massage sportif](/massage-sportif-toulouse) toutes les 3 semaines fait bien l'affaire, et les équipes de beach en duo peuvent se faire masser en même temps avec la formule [duo](/massage-duo-toulouse), deux praticiens, deux tables. [Tarifs ici](/tarifs-massage-toulouse), réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Quand se faire masser après un tournoi de volley ?",
      a: "Idéalement 48 à 72 heures après, une fois les courbatures passées. Le lendemain, un repos actif ou un massage très doux suffit.",
    },
    {
      q: "Peut-on masser un genou douloureux de volleyeur ?",
      a: "Pas l'articulation elle-même si la douleur n'a pas été évaluée par un médecin. On peut en revanche détendre les quadriceps et les mollets qui l'entourent, une fois le feu vert donné.",
    },
    {
      q: "Le beach-volley demande-t-il un massage différent du volley en salle ?",
      a: "Les zones sont les mêmes, mais les mollets et les pieds sont souvent plus chargés sur le sable. La séance insiste donc davantage sur le bas des jambes.",
    },
  ],
  related: [
    "massage-sportif-basket-toulouse",
    "courbatures-et-massage",
    "etirements-et-massage-combo-recuperation",
  ],
};

export default article;
