import type { Article } from "../types";

const article: Article = {
  slug: "massage-escalade-grimpeurs",
  category: "sport",
  title: "Escalade et bloc : le massage pour les avant-bras et la nuque du grimpeur",
  metaTitle: "Massage escalade : avant-bras, épaules et nuque du grimpeur",
  description:
    "Bloc en salle, voies en falaise dans les Pyrénées : avant-bras, doigts, épaules et nuque trinquent. Ce que le massage sportif à domicile apporte aux grimpeurs.",
  excerpt:
    "Des avant-bras gonflés, des épaules tirées et une nuque qui regarde en l'air : la récupération du grimpeur, de la salle de bloc à la falaise.",
  date: "2027-01-30",
  readingMinutes: 5,
  image: "/images/massage-sportif.webp",
  imageAlt: "Massage des avant-bras et des épaules d'un grimpeur",
  blocks: [
    {
      t: "p",
      x: "Les salles de bloc toulousaines ne désemplissent pas, et le week-end, une bonne partie de leurs habitués file vers les falaises des Pyrénées dès que la météo le permet. Je reconnais un grimpeur avant même qu'il me le dise : **des avant-bras durs comme une prise en résine, des épaules légèrement enroulées et une nuque qui a passé trop de temps à regarder en haut**.",
    },
    { t: "h2", x: "Ce que la grimpe demande au haut du corps" },
    {
      t: "p",
      x: "En escalade, les jambes poussent, mais ce sont les **avant-bras** et les **doigts** qui tiennent. Les fléchisseurs travaillent en contraction prolongée, d'où la fameuse « bouteille » qui fait lâcher la prise. Les **épaules** et le **haut du dos** tirent, gainent et bloquent dans des positions parfois improbables. Et entre deux essais, le grimpeur reste la tête en arrière pour lire la voie ou assurer son partenaire : la **nuque** finit la journée en extension prolongée. Sur une séance de bloc de deux heures, ça fait beaucoup de travail pour des muscles qui n'ont pas une très grande taille.",
    },
    { t: "h2", x: "La séance type du grimpeur" },
    {
      t: "ul",
      items: [
        "**Avant-bras** — pétrissages et pressions glissées le long des fléchisseurs et des extenseurs, la zone prioritaire.",
        "**Mains et paumes** — un travail doux et précis des muscles de la main, sans tirer sur les doigts ni forcer les articulations.",
        "**Épaules et omoplates** — pourtour de l'articulation, dorsaux et rhomboïdes, souvent très sollicités dans les dévers.",
        "**Pectoraux** — détendus pour limiter la posture enroulée typique des grimpeurs réguliers.",
        "**Nuque et trapèzes** — la note de fin pour ceux qui assurent beaucoup, détaillée dans [nuque raide](/blog/nuque-raide-tensions-cervicales).",
      ],
    },
    { t: "h2", x: "Le bon créneau : pas la veille de la sortie falaise" },
    {
      t: "p",
      x: "Après une grosse session de bloc ou une journée de voies en falaise, on laisse passer 24 à 48 heures avant de travailler en profondeur. **Le jour de repos en milieu de semaine** convient à la plupart des grimpeurs. En revanche, évitez le massage appuyé des avant-bras la veille d'une sortie où vous comptez enchaîner votre projet : les sensations de prise doivent être fraîches. Les [étirements doux](/blog/etirements-et-massage-combo-recuperation) complètent bien la séance entre deux journées de grimpe. Et à [domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe), vous n'avez même pas besoin de serrer le volant après la séance.",
    },
    { t: "h2", x: "Vigilance : les doigts ne se massent pas après un « clac »" },
    {
      t: "p",
      x: "Les grimpeurs connaissent ce petit bruit sec dans un doigt sur une réglette, suivi d'une douleur vive. Ce type de situation, comme un coude douloureux qui persiste ou une épaule qui lâche dans un jeté, se fait évaluer par un médecin ou un kinésithérapeute. Le massage bien-être ne soigne pas ces blessures, et je ne travaille pas une zone douloureuse sans avis médical, dans le respect des [contre-indications](/blog/contre-indications-massage-bien-etre). Pour la fatigue musculaire classique, en revanche, il a toute sa place.",
    },
    {
      t: "p",
      x: "Une séance de [massage sportif](/massage-sportif-toulouse) de 45 minutes ciblée sur le haut du corps, ou d'une heure pour le corps entier, toutes les 3 à 4 semaines suffit à la plupart des grimpeurs réguliers. Les cordées peuvent aussi réserver en [duo](/massage-duo-toulouse), deux praticiens et deux massages en même temps. [Tarifs ici](/tarifs-massage-toulouse), réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Peut-on grimper le lendemain d'un massage des avant-bras ?",
      a: "Oui, en restant sur une séance tranquille. Après un travail profond, la prise peut sembler un peu moins précise pendant un jour, donc évitez de tenter votre projet le lendemain.",
    },
    {
      q: "Masse-t-on les doigts lors d'un massage pour grimpeur ?",
      a: "On travaille les muscles de la main et de la paume avec douceur, sans manipulation ni étirement forcé des doigts. Toute douleur au niveau d'une poulie doit d'abord être vue par un médecin.",
    },
    {
      q: "Pourquoi la nuque est-elle tendue après l'escalade ?",
      a: "Le grimpeur passe beaucoup de temps la tête en arrière pour lire les voies et assurer son partenaire. Cette extension prolongée tend la nuque et les trapèzes, d'où l'intérêt de les inclure dans la séance.",
    },
  ],
  related: [
    "massage-crossfit-hiit",
    "nuque-raide-tensions-cervicales",
    "epaules-tendues-trapezes",
  ],
};

export default article;
