import type { Article } from "../types";

const article: Article = {
  slug: "massage-sportif-rugby",
  category: "sport",
  title: "Rugby et massage sportif : récupérer dans la ville du Stade Toulousain",
  metaTitle: "Rugby et massage sportif : bien récupérer à Toulouse",
  description:
    "Impacts, mêlées, plaquages : le rugby amateur laisse des traces. Comment le massage sportif aide les rugbymen à récupérer entre deux matchs, à domicile.",
  excerpt:
    "Le rugby amateur cogne autant que le pro, sans le staff médical : le massage comme routine de récupération du rugbyman.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/massage-sportif.webp",
  imageAlt: "Travail musculaire profond des épaules et du dos",
  blocks: [
    {
      t: "p",
      x: "À Toulouse, le rugby n'est pas un sport, c'est une langue maternelle. Des clubs amateurs de la métropole aux équipes loisir du dimanche, des centaines de joueurs encaissent chaque week-end mêlées, plaquages et rucks — **sans le staff de récupération des pros**. C'est exactement le vide que le massage sportif vient combler.",
    },
    { t: "h2", x: "Ce que le rugby fait au corps (spoiler : beaucoup)" },
    {
      t: "p",
      x: "Le rugby cumule trois charges distinctes : l'**impact** (plaquages, chutes — le corps encaisse des chocs répétés), l'**isométrie extrême** (mêlée, maul — des contractions massives sans mouvement) et le **sprint**. Résultat typique du lundi : trapèzes et cou verrouillés, quadriceps et fessiers denses, et cette raideur générale que les joueurs appellent joliment « la carrosserie ».",
    },
    { t: "h2", x: "La séance type du rugbyman" },
    {
      t: "ul",
      items: [
        "**Épaules, trapèzes, cou** — la zone des plaquages et de la mêlée, travaillée en pétrissages profonds et pressions progressives.",
        "**Chaîne postérieure complète** — fessiers, ischio-jambiers, mollets : le moteur du joueur.",
        "**Bas du dos** — sollicité en permanence par les phases de poussée.",
        "**Pression : soutenue** — les gabarits rugby demandent généralement un travail appuyé, dosé selon les règles décrites dans [quelle pression choisir](/blog/pression-massage-douce-moyenne-forte).",
      ],
    },
    { t: "h2", x: "Le bon créneau : le fameux J+2" },
    {
      t: "p",
      x: "Après un match du samedi, le dimanche est aux courbatures — on ne masse pas profond un muscle en pleine réparation, comme expliqué dans [courbatures et massage](/blog/courbatures-et-massage). **Le lundi ou mardi soir est le créneau roi** : les courbatures s'estompent, le travail profond redevient productif, et la semaine d'entraînement peut repartir sur un corps déchargé. À [domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe), la séance se cale après le travail, sans déplacement.",
    },
    { t: "h2", x: "Attention : le massage ne « répare » pas les chocs" },
    {
      t: "p",
      x: "Un point de vigilance propre au rugby : on ne masse pas un hématome frais, une côte douteuse, une épaule qui a « craqué » ou tout traumatisme non évalué. Ces situations relèvent du médecin — le massage viendra après, en phase de récupération, dans le cadre des [contre-indications habituelles](/blog/contre-indications-massage-bien-etre). Pour la charge musculaire ordinaire du joueur, en revanche, c'est l'outil idéal.",
    },
    {
      t: "p",
      x: "Beaucoup de mes clients rugbymen ont adopté le rythme d'une séance de [massage sportif](/massage-sportif-toulouse) toutes les 3 semaines en saison — certains en [duo](/massage-duo-toulouse) avec leur moitié, qui n'a rien demandé mais ne s'en plaint pas. [Tarifs ici](/tarifs-massage-toulouse), réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Peut-on se faire masser le lendemain d'un match de rugby ?",
      a: "Le dimanche post-match, privilégiez le repos ou un massage très doux. La vraie séance de récupération se place à J+2 ou J+3, quand les courbatures s'estompent et que le travail profond redevient utile.",
    },
    {
      q: "Le massage aide-t-il après les bleus et les impacts ?",
      a: "On ne masse jamais un hématome frais ni un traumatisme non évalué par un médecin. En revanche, une fois la zone guérie, le massage aide à redonner de la souplesse aux tissus environnants.",
    },
    {
      q: "Faut-il une pression très forte pour un rugbyman ?",
      a: "Souvent soutenue, oui, mais la règle reste la même pour tous : intense sans jamais provoquer de crispation. La masse musculaire ne change pas le principe, seulement le dosage.",
    },
  ],
  related: [
    "massage-et-recuperation-musculaire",
    "courbatures-et-massage",
    "musculation-et-massage-sportif",
  ],
};

export default article;
