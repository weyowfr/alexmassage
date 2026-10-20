/* Moteur du questionnaire « Trouver mon massage ».
   Fonctions pures : chaque réponse ajoute des points aux trois massages,
   avec des exclusions franches quand un massage ne convient pas
   (ex. le sportif est ferme par nature : exclu si on veut de la douceur).
   Les règles reprennent ce que disent les pages massage du site. */

export type Zone = "nuque" | "haut-dos" | "lombaires" | "jambes";
export type Motif =
  | "tensions"
  | "sport"
  | "charge"
  | "stress"
  | "difficile"
  | "sommeil"
  | "fatigue"
  | "plaisir";
export type Pression = "douce" | "moderee" | "ferme" | "nsp";
export type Pour = "moi" | "duo" | "offrir";
export type MassageId = "californien" | "abhyanga" | "sportif";

export type Answers = {
  zones: Zone[];
  /* « Un peu partout / le corps entier » */
  partout: boolean;
  motif: Motif;
  pression: Pression;
  pour: Pour;
};

export const ZONES: { id: Zone; label: string; court: string }[] = [
  { id: "nuque", label: "Nuque & épaules", court: "la nuque, les épaules" },
  { id: "haut-dos", label: "Haut du dos", court: "le haut du dos" },
  { id: "lombaires", label: "Bas du dos & lombaires", court: "les lombaires" },
  { id: "jambes", label: "Jambes & pieds", court: "les jambes" },
];

export const MOTIFS: { id: Motif; label: string; detail: string }[] = [
  { id: "tensions", label: "Des nœuds, des raideurs", detail: "Le dos qui tire, les épaules en béton" },
  { id: "sport", label: "Récupérer après le sport", detail: "Courbatures, jambes lourdes, reprise" },
  { id: "charge", label: "Je porte tout, pour tout le monde", detail: "Les responsabilités, devoir tenir bon" },
  { id: "stress", label: "Le stress, l'anxiété", detail: "La tête qui ne s'arrête jamais" },
  { id: "difficile", label: "Une période difficile", detail: "Besoin de douceur et de réconfort" },
  { id: "sommeil", label: "Je dors mal", detail: "Du mal à décrocher le soir" },
  { id: "fatigue", label: "Batterie à plat", detail: "Fatigue, manque d'énergie" },
  { id: "plaisir", label: "Juste me faire du bien", detail: "Une vraie parenthèse pour moi" },
];

export const PRESSIONS: { id: Pression; label: string; detail: string }[] = [
  { id: "douce", label: "Douce et enveloppante", detail: "Des gestes lents, qui bercent" },
  { id: "moderee", label: "Modérée", detail: "Présente, sans jamais forcer" },
  { id: "ferme", label: "Ferme, en profondeur", detail: "J'aime sentir que ça travaille" },
  { id: "nsp", label: "Je ne sais pas", detail: "Alexandre ajustera pendant la séance" },
];

export const POURS: { id: Pour; label: string; detail: string }[] = [
  { id: "moi", label: "Pour moi", detail: "Un massage en solo, chez moi" },
  { id: "duo", label: "Pour nous deux", detail: "Duo : deux praticiens, en même temps" },
  { id: "offrir", label: "Pour l'offrir", detail: "En carte cadeau, valable 1 an" },
];

export const MASSAGES: Record<
  MassageId,
  { nom: string; sous: string; href: string; image: string; promesse: string }
> = {
  californien: {
    nom: "Le massage californien",
    sous: "Relaxant",
    href: "/massage-californien-toulouse",
    image: "/images/massage-californien.jpeg",
    promesse: "Des mouvements lents et enveloppants qui calment l'esprit et relâchent le corps.",
  },
  abhyanga: {
    nom: "L'abhyanga",
    sous: "Énergétique, à l'huile chaude",
    href: "/massage-abhyanga-toulouse",
    image: "/images/massage-abhyanga.jpeg",
    promesse: "Un massage ayurvédique du corps entier, à l'huile chaude, qui recharge et apaise à la fois.",
  },
  sportif: {
    nom: "Le massage sportif",
    sous: "Suédois · deep tissue",
    href: "/massage-sportif-toulouse",
    image: "/images/massage-sportif.webp",
    promesse: "Pétrissages profonds et pressions ciblées pour défaire les nœuds et récupérer.",
  },
};

/* Tarifs du site (page tarifs). */
const PRIX: Record<"solo" | "duo", Record<string, number>> = {
  solo: { "30 min": 30, "45 min": 50, "1 h": 60, "1 h 30": 85 },
  duo: { "45 min": 100, "1 h": 120, "1 h 30": 170 },
};

type Scores = Record<MassageId, number>;

const MOTIF_POINTS: Record<Motif, Partial<Scores>> = {
  tensions: { sportif: 4, abhyanga: 1 },
  sport: { sportif: 5 },
  charge: { abhyanga: 4, californien: 2, sportif: 1 },
  stress: { californien: 4, abhyanga: 2 },
  difficile: { californien: 5, abhyanga: 2 },
  sommeil: { californien: 4, abhyanga: 2 },
  fatigue: { abhyanga: 4, californien: 1 },
  plaisir: { californien: 4, abhyanga: 2 },
};

const PRESSION_POINTS: Record<Pression, Partial<Scores>> = {
  douce: { californien: 3, abhyanga: 1 },
  moderee: { abhyanga: 2, californien: 1, sportif: 1 },
  ferme: { sportif: 3, abhyanga: 1 },
  nsp: {},
};

export type Result = {
  massage: MassageId;
  alternative: MassageId | null;
  duree: string;
  formule: "solo" | "duo";
  prix: number;
  raisons: string[];
  scores: Scores;
};

function listeZones(a: Answers): string {
  const noms = ZONES.filter((z) => a.zones.includes(z.id)).map((z) => z.court);
  if (noms.length <= 1) return noms[0] ?? "";
  return `${noms.slice(0, -1).join(", ")} et ${noms.at(-1)}`;
}

export function recommend(a: Answers): Result {
  const scores: Scores = { californien: 0, abhyanga: 0, sportif: 0 };
  const add = (pts: Partial<Scores>) => {
    for (const [k, v] of Object.entries(pts)) scores[k as MassageId] += v;
  };

  add(MOTIF_POINTS[a.motif]);
  add(PRESSION_POINTS[a.pression]);

  /* Zones : les zones musculaires « porteuses » orientent vers le sportif
     quand on cherche à dénouer ; le corps entier oriente vers l'abhyanga,
     qui se pratique sur l'ensemble du corps. */
  const muscular = a.motif === "tensions" || a.motif === "sport";
  if (muscular) {
    if (a.zones.includes("lombaires")) scores.sportif += 1;
    if (a.zones.includes("jambes")) scores.sportif += 1;
  }
  if (a.partout || a.zones.length >= 3) scores.abhyanga += 1;

  /* Exclusions franches. */
  if (a.pression === "douce") scores.sportif = -Infinity;
  if (a.pression === "ferme") scores.californien -= 3;

  const ordre: MassageId[] = ["californien", "abhyanga", "sportif"];
  /* Égalité : on suit l'intention principale (motif), puis l'ordre ci-dessus. */
  const prefere: MassageId =
    a.motif === "tensions" || a.motif === "sport"
      ? "sportif"
      : a.motif === "fatigue" || a.motif === "charge"
        ? "abhyanga"
        : "californien";
  const classement = [...ordre].sort(
    (x, y) => scores[y] - scores[x] || (y === prefere ? 1 : 0) - (x === prefere ? 1 : 0),
  );
  const massage = classement[0];
  const second = classement[1];
  const alternative = scores[massage] - scores[second] <= 2 && Number.isFinite(scores[second]) ? second : null;

  /* Durée : le lâcher-prise demande du temps (1 h minimum) ; un travail
     ciblé sur une zone tient en 45 min ; 3 zones ou plus → 1 h 30. */
  const nbZones = a.partout ? 4 : a.zones.length;
  const relaxation = !muscular;
  let duree = nbZones >= 3 ? "1 h 30" : nbZones === 2 || relaxation ? "1 h" : "45 min";
  const formule = a.pour === "duo" ? "duo" : "solo";
  if (!(duree in PRIX[formule])) duree = "1 h";
  const prix = PRIX[formule][duree];

  /* Raisons affichées, dans l'ordre : zones, motif, pression, durée. */
  const raisons: string[] = [];
  const zonesTxt = a.partout ? "un peu partout" : listeZones(a);
  if (massage === "sportif") {
    raisons.push(
      a.motif === "sport"
        ? `Après l'effort, ${zonesTxt === "un peu partout" ? "tout le corps" : zonesTxt} ont besoin d'un travail profond pour récupérer.`
        : `Vos tensions sur ${zonesTxt === "un peu partout" ? "l'ensemble du corps" : zonesTxt} demandent des pressions ciblées pour défaire les nœuds.`,
    );
  } else if (massage === "abhyanga") {
    raisons.push(
      a.motif === "fatigue"
        ? "Quand l'énergie manque, l'huile chaude et les gestes rythmés de l'abhyanga rechargent sans épuiser."
        : a.motif === "charge"
          ? "À force de tout porter, on s'épuise. L'abhyanga relâche le corps et recharge l'énergie en même temps."
        : `L'abhyanga traite le corps entier : idéal quand ça se ressent ${a.partout ? "un peu partout" : `sur ${zonesTxt}`}.`,
    );
  } else {
    raisons.push(
      a.motif === "sommeil"
        ? "Les gestes lents du californien calment le système nerveux et préparent à un sommeil de meilleure qualité."
        : a.motif === "stress"
          ? "Quand la tête ne s'arrête pas, la lenteur du californien aide à décrocher pour de bon."
          : a.motif === "difficile"
            ? "Dans une période difficile, le corps a besoin d'enveloppement et de douceur. C'est tout l'esprit du californien."
          : "Le californien est le massage du lâcher-prise : rien à faire, juste se laisser porter.",
    );
  }
  if (massage !== "sportif" && zonesTxt && !a.partout)
    raisons.push(`Alexandre insistera sur ${zonesTxt}, là où vous le sentez.`);
  if (a.pression === "ferme" && massage !== "sportif")
    raisons.push("La pression sera ajustée plus ferme, à votre demande.");
  if (a.pression === "douce" && (a.motif === "tensions" || a.motif === "sport"))
    raisons.push("Vous préférez la douceur : on dénoue sans forcer, plutôt qu'en profondeur.");
  raisons.push(
    duree === "45 min"
      ? "45 min suffisent pour un travail ciblé sur une zone."
      : duree === "1 h 30"
        ? "Avec plusieurs zones à traiter, 1 h 30 laisse le temps de bien tout reprendre."
        : relaxation
          ? "Il faut une heure pour que le corps lâche vraiment prise."
          : "Une heure pour traiter correctement deux zones.",
  );
  if (a.pour === "duo")
    raisons.push("En duo, chacun choisit son massage et sa pression, sur la même durée.");

  return { massage, alternative, duree, formule, prix, raisons, scores };
}
