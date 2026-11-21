import type { Article } from "../types";

const article: Article = {
  slug: "massage-sportif-handball",
  category: "sport",
  title: "Handball et massage sportif : l'épaule du tireur, les chevilles et le reste",
  metaTitle: "Massage sportif handball : épaules, appuis et récupération",
  description:
    "Tirs en suspension, contacts, appuis explosifs : le handball sollicite épaule, chevilles et dos. Le massage sportif à domicile pour les handballeurs de Toulouse.",
  excerpt:
    "Le handballeur cumule lancers, réceptions et contacts : comment organiser sa récupération avec le massage sportif.",
  date: "2026-12-05",
  readingMinutes: 4,
  image: "/images/massage-sportif.webp",
  imageAlt: "Massage profond de l'épaule et de l'omoplate d'un handballeur",
  blocks: [
    {
      t: "p",
      x: "Dans les gymnases de la métropole toulousaine, le handball se joue à un rythme qui ferait transpirer un rugbyman : on court, on saute, on tire, on se fait ceinturer par un pivot de cent kilos, et on recommence trente secondes plus tard. Mes clients handballeurs arrivent rarement avec une seule zone à travailler. En général, la liste commence par **l'épaule du bras qui tire** et se termine par **des mollets et des chevilles fatigués par les appuis**.",
    },
    { t: "h2", x: "Un sport qui sollicite le corps de la tête aux pieds" },
    {
      t: "p",
      x: "Le tir au handball est un geste de lanceur : l'épaule part loin en arrière, puis accélère violemment vers l'avant. Les muscles qui entourent l'omoplate et la coiffe de l'épaule freinent ce mouvement à chaque tir, à chaque passe longue. En parallèle, les jambes enchaînent les **appuis explosifs** : feintes, changements de direction, réceptions de suspension. Ajoutez les **contacts permanents** en défense, et vous avez un sport qui charge à la fois le haut du corps, le tronc et les membres inférieurs, souvent de façon asymétrique.",
    },
    { t: "h2", x: "La séance type du handballeur" },
    {
      t: "ul",
      items: [
        "**Épaule et omoplate du bras fort** : travail des muscles autour de l'omoplate, du deltoïde postérieur et des rotateurs accessibles, en pressions progressives.",
        "**Trapèzes, nuque et pectoraux** : les contacts et les ceinturages crispent le haut du corps, et les pectoraux raccourcis tirent l'épaule vers l'avant.",
        "**Mollets et pieds** : les appuis répétés sur parquet durcissent les mollets, la voûte plantaire apprécie aussi un peu d'attention.",
        "**Quadriceps et fessiers** : moteurs des sauts et des réceptions.",
        "**Pression : modulée** selon les zones, soutenue sur les cuisses, plus nuancée autour de l'épaule (voir [quelle pression choisir](/blog/pression-massage-douce-moyenne-forte)).",
      ],
    },
    { t: "h2", x: "Quand placer le massage dans la semaine" },
    {
      t: "p",
      x: "La plupart des championnats amateurs se jouent le samedi soir ou le dimanche. Le lendemain, place au repos : les [courbatures](/blog/courbatures-et-massage) n'aiment pas les pressions profondes. **Le lundi soir ou le mardi**, la séance devient vraiment efficace et vous libère pour l'entraînement de milieu de semaine. Évitez en revanche le massage appuyé la veille d'un match : une détente trop profonde peut laisser les épaules un peu molles au moment de l'échauffement. Je me déplace chez vous dans un rayon de 30 km autour de Toulouse, ce qui permet de caser la séance après le boulot sans détour par le gymnase.",
    },
    { t: "h2", x: "Vigilance : le massage ne soigne pas une entorse" },
    {
      t: "p",
      x: "Le handball a ses classiques : chevilles qui tournent sur une réception, doigts retournés, épaule douloureuse au moment d'armer. Une douleur qui persiste, un gonflement ou une perte de mobilité relèvent du médecin ou du kiné, et ce n'est pas mon rôle de les soigner. Je ne masse pas une articulation fraîchement touchée, conformément aux [contre-indications habituelles](/blog/contre-indications-massage-bien-etre). Le massage bien-être intervient sur la charge musculaire ordinaire, et peut accompagner la reprise une fois le feu vert médical donné.",
    },
    {
      t: "p",
      x: "Les handballeurs que je suis viennent en général toutes les trois semaines en saison, en séance d'1 h (60 €) pour couvrir le haut et le bas du corps. Avec l'abonnement, le tarif baisse de 15 % dès 3 séances. Plus d'infos sur la page [massage sportif](/massage-sportif-toulouse), les [tarifs ici](/tarifs-massage-toulouse) et la réservation via la [page contact](/contact).",
    },
  ],
  faq: [
    {
      q: "Le massage aide-t-il l'épaule d'un handballeur ?",
      a: "Il aide à relâcher les muscles qui entourent l'épaule et l'omoplate, très sollicités par les tirs et les passes. En cas de douleur persistante ou de perte de force, il faut consulter un médecin avant tout massage.",
    },
    {
      q: "Peut-on masser une cheville après une entorse ?",
      a: "Pas tant qu'elle n'a pas été évaluée par un médecin et qu'elle reste gonflée ou douloureuse. Une fois la reprise autorisée, le massage des mollets et du pied peut redonner de la souplesse autour de l'articulation.",
    },
    {
      q: "Quelle fréquence de massage pour un handballeur amateur ?",
      a: "Une séance toutes les trois à quatre semaines en saison convient à la plupart des joueurs. En période de matchs rapprochés ou de tournoi, on peut resserrer à toutes les deux semaines.",
    },
  ],
  related: [
    "massage-sportif-basket-toulouse",
    "massage-sportif-rugby",
    "pression-massage-douce-moyenne-forte",
  ],
};

export default article;
