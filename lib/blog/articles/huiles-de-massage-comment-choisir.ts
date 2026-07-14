import type { Article } from "../types";

const article: Article = {
  slug: "huiles-de-massage-comment-choisir",
  category: "techniques",
  title: "Huiles de massage : comment elles sont choisies (et pourquoi ça compte)",
  metaTitle: "Huiles de massage : lesquelles choisir et pourquoi",
  description:
    "Sésame, amande douce, coco, huiles essentielles : ce qui distingue les huiles de massage, comment un praticien les choisit et les précautions à connaître.",
  excerpt:
    "Sésame, amande douce, arnica, huiles essentielles : ce que change l'huile dans un massage, expliqué simplement.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/table-massage-serviettes.jpeg",
  imageAlt: "Flacons d'huiles de massage posés près des serviettes",
  blocks: [
    {
      t: "p",
      x: "L'huile est le troisième acteur du massage, après vos muscles et les mains du praticien. Elle porte le geste, nourrit la peau, diffuse la chaleur — et son choix change réellement la séance. Voici comment je compose ma sélection, et comment nous choisissons ensemble en début de séance.",
    },
    { t: "h2", x: "Les huiles végétales : la base de tout" },
    {
      t: "ul",
      items: [
        "**Amande douce** — la polyvalente : glisse soyeuse, odeur discrète, convient à la plupart des peaux. Ma base pour le [massage californien](/massage-californien-toulouse).",
        "**Sésame** — l'huile traditionnelle de l'[abhyanga ayurvédique](/blog/massage-abhyanga-guide-ayurvedique) : nourrissante, elle se prête merveilleusement au travail à l'huile chaude.",
        "**Macérât d'arnica** — apprécié en [massage sportif](/massage-sportif-toulouse) pour accompagner la récupération musculaire.",
        "**Coco fractionnée** — légère, ne tache presque pas, idéale pour les peaux qui n'aiment pas le film gras.",
      ],
    },
    { t: "h2", x: "Les huiles essentielles : le supplément d'âme, avec précaution" },
    {
      t: "p",
      x: "Quelques gouttes d'huile essentielle — lavande vraie pour l'apaisement, gaulthérie sur les zones musculaires chargées, agrumes pour la vitalité — personnalisent la séance. Mais les huiles essentielles sont des concentrés actifs : elles se dosent avec parcimonie et **se déconseillent dans plusieurs situations** (grossesse, allergies, asthme, épilepsie…), que nous passons en revue avant la séance, comme le prévoient [les contre-indications du massage](/blog/contre-indications-massage-bien-etre).",
    },
    { t: "h2", x: "La température : le détail qui fait le luxe" },
    {
      t: "p",
      x: "Une huile à température ambiante sur une peau détendue produit un micro-choc désagréable à chaque application. C'est pourquoi je chauffe systématiquement les huiles avant et pendant la séance — un confort qui participe beaucoup à la sensation d'enveloppement, particulièrement à domicile où [la pièce est déjà à bonne température](/blog/preparer-son-domicile-pour-un-massage).",
    },
    { t: "h2", x: "Allergies, peau sensible, vêtements : les questions pratiques" },
    {
      t: "ul",
      items: [
        "**Allergie aux fruits à coque** : signalez-la à la réservation — l'amande douce est remplacée par une huile neutre sans allergène.",
        "**Peau réactive** : une huile simple, sans huile essentielle, est toujours disponible.",
        "**Après la séance** : l'essentiel de l'huile a pénétré ; prévoyez simplement des vêtements confortables, et pour l'abhyanga, attendez quelques heures avant la douche.",
        "**Le linge** : serviettes et housse m'appartiennent et sont changées à chaque client — vos draps ne risquent rien.",
      ],
    },
    {
      t: "p",
      x: "Le choix final se fait toujours ensemble, en début de séance, selon votre peau, vos préférences olfactives et le massage choisi — un rituel décrit dans [le déroulement d'une séance à domicile](/blog/massage-a-domicile-toulouse-comment-ca-se-passe).",
    },
  ],
  faq: [
    {
      q: "Puis-je fournir ma propre huile de massage ?",
      a: "Oui, si vous avez une huile de prédilection ou des contraintes dermatologiques strictes, je m'adapte volontiers. Vérifiez simplement qu'elle est adaptée au massage corporel.",
    },
    {
      q: "Les huiles utilisées tachent-elles les vêtements ?",
      a: "Le surplus d'huile est essuyé en fin de séance et le corps est massé sous serviette. Prévoyez malgré tout des vêtements confortables plutôt que votre chemise préférée juste après.",
    },
    {
      q: "Utilisez-vous des huiles bio ?",
      a: "Je privilégie des huiles végétales de qualité, pressées à froid et d'origine contrôlée. N'hésitez pas à me demander le détail des références utilisées lors de la réservation.",
    },
  ],
  related: [
    "massage-abhyanga-guide-ayurvedique",
    "contre-indications-massage-bien-etre",
    "preparer-son-domicile-pour-un-massage",
  ],
};

export default article;
