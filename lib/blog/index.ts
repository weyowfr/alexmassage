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

/* Cluster « dos, épaules & tensions » */
import a41 from "./articles/massage-dos-et-epaules-toulouse";
import a42 from "./articles/dos-noue-que-faire";
import a43 from "./articles/epaules-tendues-trapezes";
import a44 from "./articles/nuque-raide-tensions-cervicales";
import a45 from "./articles/tensions-lombaires-bas-du-dos";
import a46 from "./articles/diagnostic-des-tensions-musculaires";
import a47 from "./articles/massage-sur-mesure-ou-protocole-standard";
import a48 from "./articles/massage-corps-entier-ou-zone-ciblee";
import a49 from "./articles/lacher-prise-massage-besoins-reels";
import a50 from "./articles/massage-routine-bien-etre-abonnement";

/* Sports toulousains — publication programmée, un article par semaine */
import a51 from "./articles/massage-sportif-basket-toulouse";
import a52 from "./articles/massage-sportif-football-toulouse";
import a53 from "./articles/massage-sportif-handball";
import a54 from "./articles/massage-tennis-epaule-avant-bras";
import a55 from "./articles/massage-padel-toulouse";
import a56 from "./articles/massage-cyclisme-velo-toulouse";
import a57 from "./articles/massage-natation-nageurs";
import a58 from "./articles/massage-sportif-volley";
import a59 from "./articles/massage-triathlon-recuperation";
import a60 from "./articles/massage-crossfit-hiit";
import a61 from "./articles/massage-escalade-grimpeurs";

export const CATEGORIES: Category[] = [
  {
    id: "dos-tensions",
    label: "Dos, épaules & tensions",
    tagline:
      "Dos noué, épaules tendues, nuque raide : comprendre vos tensions et le massage sur mesure qui les dénoue.",
  },
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
  a41, a42, a43, a44, a45, a46, a47, a48, a49, a50,
  a51, a52, a53, a54, a55, a56, a57, a58, a59, a60, a61,
];

const BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

/* Publication programmée : un article dont la date est dans le futur reste
   invisible (hub, sitemap, liens « à lire aussi », URL en 404) jusqu'à ce
   jour-là, heure de Paris. Les pages du blog sont régénérées toutes les
   heures (ISR), donc l'article apparaît sans nouveau déploiement. */
function todayInParis(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function isPublished(a: Article): boolean {
  return a.date <= todayInParis();
}

export function publishedArticles(): Article[] {
  return ARTICLES.filter(isPublished);
}

/* Renvoie uniquement un article déjà publié. */
export function getArticle(slug: string): Article | undefined {
  const a = BY_SLUG.get(slug);
  return a && isPublished(a) ? a : undefined;
}

export function getCategory(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id)!;
}

export function articlesByCategory(id: CategoryId): Article[] {
  return publishedArticles().filter((a) => a.category === id);
}
