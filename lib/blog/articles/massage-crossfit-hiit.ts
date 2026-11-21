import type { Article } from "../types";

const article: Article = {
  slug: "massage-crossfit-hiit",
  category: "sport",
  title: "CrossFit, HIIT, training fonctionnel : le massage pour encaisser les WOD",
  metaTitle: "Massage CrossFit et HIIT : récupérer entre deux WOD",
  description:
    "Charges lourdes, cardio, gymnastique : le CrossFit sollicite tout le corps. Comment le massage sportif à domicile aide à récupérer entre deux WOD à Toulouse.",
  excerpt:
    "Épaules, lombaires, avant-bras, quadriceps : la récupération des adeptes de CrossFit et de HIIT, séance par séance.",
  date: "2027-01-23",
  readingMinutes: 4,
  image: "/images/massage-sportif.webp",
  imageAlt: "Massage profond des épaules et du dos d'un pratiquant de CrossFit",
  blocks: [
    {
      t: "p",
      x: "Les box de CrossFit et les salles de training fonctionnel ont poussé un peu partout dans la métropole toulousaine, souvent dans d'anciens entrepôts avec de la musique forte et un tableau blanc rempli d'abréviations mystérieuses. Ceux qui y passent trois ou quatre soirs par semaine le savent : **le WOD du jour se termine en dix minutes, mais il se rappelle à vous pendant trois jours**.",
    },
    { t: "h2", x: "Pourquoi le CrossFit fatigue autant" },
    {
      t: "p",
      x: "Le training fonctionnel mélange tout ce qui fatigue un muscle : des charges lourdes (épaulés, squats, soulevés de terre), de la gymnastique (tractions, dips, muscle-ups pour les plus courageux) et du cardio à haute intensité, le tout enchaîné sans vraie pause. Les **épaules** travaillent au-dessus de la tête à chaque séance, les **lombaires** stabilisent chaque mouvement, les **avant-bras** s'épuisent sur la barre et le rameur, et les **quadriceps** finissent souvent en feu après les wall balls. C'est un peu la [musculation](/blog/musculation-et-massage-sportif) et la course réunies, avec moins de temps pour souffler.",
    },
    { t: "h2", x: "La séance type de l'adepte de CrossFit" },
    {
      t: "ul",
      items: [
        "**Épaules, trapèzes et haut du dos** — la zone des mouvements au-dessus de la tête, travaillée en pressions progressives autour de l'omoplate.",
        "**Avant-bras et mains** — les grands oubliés, pourtant très chargés par les tractions et le grip sur la barre.",
        "**Lombaires et fessiers** — la ceinture qui stabilise tous les mouvements de charge, voir [tensions lombaires](/blog/tensions-lombaires-bas-du-dos).",
        "**Quadriceps, ischio-jambiers et mollets** — squats, box jumps, double unders : le bas du corps prend sa part.",
        "**Pression : soutenue, mais dosée** — on peut appuyer, à condition de rester sous le seuil de crispation décrit dans [quelle pression choisir](/blog/pression-massage-douce-moyenne-forte).",
      ],
    },
    { t: "h2", x: "Le bon créneau : le jour de repos, pas le lendemain du benchmark" },
    {
      t: "p",
      x: "Après un WOD très chargé ou une séance de tests, le muscle a besoin de 24 à 48 heures avant un travail en profondeur. **Le jour de repos est le créneau idéal**, ou le soir d'une séance plus légère axée sur la technique. Évitez simplement le massage appuyé la veille d'une compétition ou d'un benchmark que vous préparez depuis des semaines. À [domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe), la séance se cale le soir après le travail, et vous ne repassez pas par le périphérique avec des cuisses qui tremblent.",
    },
    { t: "h2", x: "Vigilance : la douleur n'est pas une médaille" },
    {
      t: "p",
      x: "Dans les box, on aime bien dire que « ça pique ». Les courbatures, d'accord. Une douleur aiguë dans le bas du dos après un soulevé, une épaule qui fait mal au-dessus de la tête ou un poignet qui gonfle, c'est autre chose : direction le médecin ou le kinésithérapeute. Le massage bien-être n'a pas vocation à soigner ces situations, il intervient ensuite, dans le cadre des [contre-indications habituelles](/blog/contre-indications-massage-bien-etre).",
    },
    {
      t: "p",
      x: "Pour un rythme de trois à quatre séances par semaine, une séance de [massage sportif](/massage-sportif-toulouse) toutes les 3 semaines est un bon point de départ, avec l'abonnement à −15 % dès 3 séances. [Tarifs ici](/tarifs-massage-toulouse), réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Peut-on faire un WOD le lendemain d'un massage sportif ?",
      a: "Oui, mais préférez une séance légère ou technique. Après un travail profond, les muscles peuvent rester sensibles 24 à 48 heures, ce qui n'est pas idéal pour un WOD chargé.",
    },
    {
      q: "Le massage remplace-t-il le rouleau et la mobilité ?",
      a: "Non, les deux se complètent. Le rouleau et la mobilité entretiennent au quotidien, le massage permet un travail plus fin et plus profond, avec une pression adaptée à chaque zone.",
    },
    {
      q: "Pourquoi masser les avant-bras après le CrossFit ?",
      a: "Tractions, kettlebells, rameur et barre sollicitent énormément la prise. Les avant-bras se raidissent vite, et les détendre rend souvent la séance suivante plus confortable.",
    },
  ],
  related: [
    "musculation-et-massage-sportif",
    "courbatures-et-massage",
    "massage-escalade-grimpeurs",
  ],
};

export default article;
