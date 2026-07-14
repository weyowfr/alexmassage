import type { Article, Category, CategoryId } from "./types";

/* Cluster « massage à domicile Toulouse » */
import a01 from "./articles/massage-a-domicile-toulouse-comment-ca-se-passe";
import a02 from "./articles/massage-domicile-ou-institut";
import a03 from "./articles/prix-massage-toulouse";
import a04 from "./articles/comment-choisir-son-masseur-toulouse";
import a05 from "./articles/preparer-son-domicile-pour-un-massage";
import a06 from "./articles/table-de-massage-a-domicile-place-necessaire";
import a07 from "./articles/massage-a-domicile-autour-de-toulouse";
import a08 from "./articles/offrir-un-massage-a-domicile-toulouse";
/* Cluster « techniques de massage » */
import a09 from "./articles/quel-massage-choisir";
import a10 from "./articles/bienfaits-massage-californien";
import a11 from "./articles/massage-abhyanga-guide-ayurvedique";
import a12 from "./articles/massage-suedois-vs-deep-tissue";
import a13 from "./articles/massage-relaxant-ou-massage-sportif";
import a14 from "./articles/huiles-de-massage-comment-choisir";
import a15 from "./articles/massage-duo-pourquoi-se-faire-masser-a-deux";
import a16 from "./articles/pression-massage-douce-moyenne-forte";
/* Cluster « bienfaits & santé » */
import a17 from "./articles/massage-anti-stress-bienfaits";
import a18 from "./articles/massage-et-sommeil";
import a19 from "./articles/massage-et-mal-de-dos";
import a20 from "./articles/teletravail-tensions-nuque-epaules";
import a21 from "./articles/massage-et-recuperation-musculaire";
import a22 from "./articles/courbatures-et-massage";
import a23 from "./articles/contre-indications-massage-bien-etre";
import a24 from "./articles/a-quelle-frequence-se-faire-masser";
/* Cluster « sport & récupération » */
import a25 from "./articles/massage-sportif-course-a-pied-toulouse";
import a26 from "./articles/massage-sportif-rugby";
import a27 from "./articles/massage-recuperation-trail-pyrenees";
import a28 from "./articles/musculation-et-massage-sportif";
import a29 from "./articles/etirements-et-massage-combo-recuperation";
/* Cluster « cadeaux & occasions » */
import a30 from "./articles/carte-cadeau-massage-idee-cadeau";
import a31 from "./articles/massage-duo-saint-valentin-toulouse";
import a32 from "./articles/idee-cadeau-fete-des-meres-massage";
import a33 from "./articles/cadeau-noel-bien-etre-toulouse";
import a34 from "./articles/evjf-evg-massage-toulouse";
import a35 from "./articles/anniversaire-massage-a-domicile-surprise";
/* Cluster « entreprise & pratique » */
import a36 from "./articles/massage-en-entreprise-qvt";
import a37 from "./articles/massage-seminaire-entreprise-toulouse";
import a38 from "./articles/comment-se-preparer-a-un-massage";
import a39 from "./articles/que-faire-apres-un-massage";
import a40 from "./articles/rituel-bien-etre-maison";

export const CATEGORIES: Category[] = [
  {
    id: "domicile",
    label: "Massage à domicile",
    tagline:
      "Déroulement, prix, préparation : tout savoir sur le massage à domicile à Toulouse.",
  },
  {
    id: "techniques",
    label: "Techniques de massage",
    tagline:
      "Californien, abhyanga, suédois : comprendre chaque technique pour choisir la vôtre.",
  },
  {
    id: "bienfaits",
    label: "Bienfaits & santé",
    tagline:
      "Stress, sommeil, tensions : ce que le massage bien-être peut vous apporter au quotidien.",
  },
  {
    id: "sport",
    label: "Sport & récupération",
    tagline:
      "Course à pied, rugby, trail, musculation : le massage au service de votre récupération.",
  },
  {
    id: "cadeaux",
    label: "Cadeaux & occasions",
    tagline:
      "Carte cadeau, duo, grandes occasions : offrir un moment de bien-être qui marque.",
  },
  {
    id: "pratique",
    label: "Entreprise & pratique",
    tagline:
      "Massage en entreprise, conseils avant et après la séance, rituels bien-être.",
  },
];

export const ARTICLES: Article[] = [
  a01, a02, a03, a04, a05, a06, a07, a08,
  a09, a10, a11, a12, a13, a14, a15, a16,
  a17, a18, a19, a20, a21, a22, a23, a24,
  a25, a26, a27, a28, a29,
  a30, a31, a32, a33, a34, a35,
  a36, a37, a38, a39, a40,
];

const BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

export function getArticle(slug: string): Article | undefined {
  return BY_SLUG.get(slug);
}

export function getCategory(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id)!;
}

export function articlesByCategory(id: CategoryId): Article[] {
  return ARTICLES.filter((a) => a.category === id);
}
