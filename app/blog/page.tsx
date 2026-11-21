import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import { CATEGORIES, publishedArticles } from "@/lib/blog";
import { businessRef, SITE_URL } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog massage Toulouse — conseils bien-être | Alex Massage",
  description:
    "Conseils d'un praticien certifié à Toulouse : massage à domicile, techniques (californien, abhyanga, suédois), bienfaits, récupération sportive et idées cadeaux.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Blog massage Toulouse — conseils bien-être d'un praticien",
    description:
      "Tout savoir sur le massage à domicile à Toulouse : techniques, bienfaits, préparation, récupération sportive et idées cadeaux.",
    images: ["/og-image.jpg"],
  },
};

/* Régénéré toutes les heures pour faire apparaître les articles programmés. */
export const revalidate = 3600;

const blogLd = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: "Blog Alex Massage — conseils massage et bien-être à Toulouse",
  description:
    "Conseils d'un praticien certifié : massage à domicile à Toulouse, techniques, bienfaits et récupération sportive.",
  url: `${SITE_URL}/blog`,
  inLanguage: "fr-FR",
  publisher: businessRef,
  blogPost: publishedArticles().map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    url: `${SITE_URL}/blog/${a.slug}`,
    datePublished: a.date,
  })),
});

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogHub() {
  return (
    <>
      <JsonLd data={blogLd()} />
      <JsonLd data={breadcrumbLd} />
      <SiteHeader current="blog" />

      <main>
        <PageHero
          kicker="Le blog"
          title="Conseils massage & bien-être à Toulouse"
          crumb="Blog"
          image="/images/espace-detente.jpeg"
          imageAlt="Ambiance douce et tamisée d'un espace de détente"
        />

        <section className="bg-linen py-[clamp(48px,6vw,80px)] px-[clamp(20px,5vw,64px)]">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-[clamp(24px,3vw,36px)] max-w-[680px] text-taupe text-[17px] leading-[1.8]">
              Les conseils que je donne chaque semaine à mes clients, sans
              jargon. Choisissez un thème ou parcourez les derniers articles.
            </p>
            <BlogGrid
              articles={publishedArticles()
                .slice()
                .sort((a, b) => b.date.localeCompare(a.date))
                .map(({ slug, category, title, excerpt, image, imageAlt, readingMinutes }) => ({
                  slug, category, title, excerpt, image, imageAlt, readingMinutes,
                }))}
              categories={CATEGORIES.map(({ id, label }) => ({ id, label }))}
            />
          </div>
        </section>

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
