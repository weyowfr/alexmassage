/* Modèle de contenu du blog — les articles sont des données TypeScript
   rendues par un template unique (app/blog/[slug]/page.tsx).
   Le texte des blocs accepte une mini-syntaxe inline :
   [libellé](/chemin) pour les liens et **gras** pour l'emphase. */

export type CategoryId =
  | "domicile"
  | "techniques"
  | "bienfaits"
  | "sport"
  | "cadeaux"
  | "pratique";

export type Category = {
  id: CategoryId;
  label: string;
  /* Phrase d'intro affichée sur la page hub du blog. */
  tagline: string;
};

export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "h3"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "quote"; x: string };

export type Faq = { q: string; a: string };

export type Article = {
  slug: string;
  category: CategoryId;
  /* H1 de l'article. */
  title: string;
  /* Balise <title> — mot-clé devant, ~60 caractères. */
  metaTitle: string;
  /* Meta description — ~150 caractères, incitation au clic. */
  description: string;
  /* Accroche courte pour les cartes de la page hub. */
  excerpt: string;
  /* Date de publication ISO (YYYY-MM-DD). */
  date: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  blocks: Block[];
  faq?: Faq[];
  /* Slugs d'articles liés (maillage interne). */
  related: string[];
};
