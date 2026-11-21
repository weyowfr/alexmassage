import type { Article } from "../types";

const article: Article = {
  slug: "massage-natation-nageurs",
  category: "sport",
  title: "Natation et massage : ménager les épaules du nageur toulousain",
  metaTitle: "Massage natation : épaules, dos et récupération du nageur",
  description:
    "Longueurs en bassin, nage en eau libre : épaules, dorsaux et nuque encaissent tout. Comment le massage sportif à domicile aide les nageurs à récupérer.",
  excerpt:
    "Des milliers de mouvements de bras par séance : ce que le massage apporte aux épaules, aux dorsaux et à la nuque des nageurs.",
  date: "2027-01-02",
  readingMinutes: 4,
  image: "/images/massage-sportif.webp",
  imageAlt: "Massage des épaules et des dorsaux d'un nageur allongé sur le ventre",
  blocks: [
    {
      t: "p",
      x: "Toulouse a beau être loin de la mer, ses piscines sont pleines dès 7 heures du matin : nageurs de club, triathlètes en quête de longueurs, adeptes du midi qui avalent leur kilomètre entre deux réunions. Et l'été, certains vont chercher l'eau libre dans les lacs de la région. Tous ont un point commun que je retrouve sur la table : **des épaules qui travaillent beaucoup plus qu'elles ne le laissent paraître**.",
    },
    { t: "h2", x: "Un sport doux… pour les articulations seulement" },
    {
      t: "p",
      x: "La natation a la réputation d'un sport sans impact, et c'est vrai pour les genoux. Pour le haut du corps, c'est une autre histoire. Un nageur régulier enchaîne des milliers de rotations d'épaule par séance, toujours dans la même amplitude. Les **dorsaux** tirent, les **pectoraux** se raccourcissent, la coiffe des rotateurs ne chôme jamais, et la **nuque** compense à chaque respiration, surtout chez ceux qui respirent toujours du même côté (je ne citerai personne, mais vous vous reconnaîtrez).",
    },
    { t: "h2", x: "La séance type du nageur" },
    {
      t: "ul",
      items: [
        "**Épaules et pourtour de l'omoplate** — pétrissages et pressions glissées autour de l'articulation, sans jamais forcer l'amplitude.",
        "**Grands dorsaux** — le moteur du crawl, travaillé en longues manœuvres de la taille jusqu'à l'aisselle.",
        "**Pectoraux et avant de l'épaule** — souvent oubliés, pourtant responsables de cette posture enroulée typique du nageur.",
        "**Nuque et trapèzes** — la zone qui paie la rotation de la tête, détaillée dans [nuque raide](/blog/nuque-raide-tensions-cervicales).",
        "**Pression : moyenne à soutenue** — les tissus du nageur sont souples mais denses, on dose selon les repères de [quelle pression choisir](/blog/pression-massage-douce-moyenne-forte).",
      ],
    },
    { t: "h2", x: "Le bon créneau : loin des grosses séances" },
    {
      t: "p",
      x: "Après un entraînement long ou une série de fractionné en bassin, les épaules ont besoin de 24 à 48 heures avant un travail profond. **Le jour de repos ou le soir d'une séance technique légère** reste le meilleur moment. Avant une compétition ou une traversée en eau libre, on se contente d'un massage léger à J-3 ou J-4. Et comme je viens [à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe), vous passez de la douche de la piscine au canapé, puis à la table, sans reprendre la voiture. Bonus : vos cheveux auront le temps de sécher.",
    },
    { t: "h2", x: "Vigilance : une épaule douloureuse n'attend pas la table" },
    {
      t: "p",
      x: "Le massage bien-être détend des muscles chargés, il ne soigne pas une épaule blessée. Une douleur qui réveille la nuit, qui pique à chaque entrée de bras dans l'eau ou qui limite le mouvement relève d'un médecin ou d'un kinésithérapeute. On en reparle ensuite, quand le feu vert est donné, et en respectant les [contre-indications habituelles](/blog/contre-indications-massage-bien-etre).",
    },
    {
      t: "p",
      x: "Mes clients nageurs prennent en général une séance de [massage sportif](/massage-sportif-toulouse) toutes les 3 à 4 semaines, avec l'abonnement à −15 % dès 3 séances. Le déplacement est inclus dans 30 km autour de Toulouse, les [tarifs sont ici](/tarifs-massage-toulouse) et la réservation se fait sur la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Peut-on nager le lendemain d'un massage sportif ?",
      a: "Oui, mais privilégiez une séance tranquille, axée sur la technique. Après un travail profond des épaules, une légère sensibilité peut durer un jour ou deux.",
    },
    {
      q: "Quelles zones masser en priorité chez un nageur ?",
      a: "Les épaules, les grands dorsaux, les pectoraux, les trapèzes et la nuque. Selon la nage pratiquée, on ajoute les lombaires et les mollets, souvent crispés chez ceux qui battent beaucoup des jambes.",
    },
    {
      q: "Le massage remplace-t-il le kiné pour une épaule du nageur ?",
      a: "Non. Une douleur persistante ou une perte de mobilité doit être évaluée par un médecin ou un kinésithérapeute. Le massage bien-être intervient pour la fatigue musculaire ordinaire, ou une fois la zone rétablie.",
    },
  ],
  related: [
    "massage-triathlon-recuperation",
    "epaules-tendues-trapezes",
    "pression-massage-douce-moyenne-forte",
  ],
};

export default article;
