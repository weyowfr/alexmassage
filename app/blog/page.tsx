import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ARTICLES, articlesByCategory, CATEGORIES } from "@/lib/blog";
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

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: "Blog Alex Massage — conseils massage et bien-être à Toulouse",
  description:
    "Conseils d'un praticien certifié : massage à domicile à Toulouse, techniques, bienfaits et récupération sportive.",
  url: `${SITE_URL}/blog`,
  inLanguage: "fr-FR",
  publisher: businessRef,
  blogPost: ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    url: `${SITE_URL}/blog/${a.slug}`,
    datePublished: a.date,
  })),
};

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
      <JsonLd data={blogLd} />
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

        {/* Intro */}
        <section className="bg-linen pt-[clamp(56px,7vw,88px)] px-[clamp(20px,5vw,64px)]">
          <div className="max-w-[820px] mx-auto" data-reveal>
            <p className="m-0 text-taupe text-[17px] leading-[1.8]">
              Praticien certifié en{" "}
              <Link
                href="/mes-massages-toulouse"
                className="text-forest font-semibold underline decoration-[rgba(44,64,52,.35)] underline-offset-4 hover:text-bronze"
              >
                massages bien-être à domicile à Toulouse
              </Link>
              , je partage ici ce que j&apos;explique chaque semaine à mes
              clients : comment choisir sa technique, se préparer, récupérer
              après le sport, offrir un massage… Des réponses concrètes, sans
              jargon, tirées de la pratique.
            </p>
          </div>
        </section>

        {/* Sections par cluster */}
        {CATEGORIES.map((cat) => {
          const items = articlesByCategory(cat.id);
          if (items.length === 0) return null;
          return (
            <section
              key={cat.id}
              aria-labelledby={`h-blog-${cat.id}`}
              className="bg-linen py-[clamp(44px,6vw,72px)] px-[clamp(20px,5vw,64px)]"
            >
              <div className="max-w-[1160px] mx-auto">
                <p
                  data-reveal
                  className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-3"
                >
                  {cat.label}
                </p>
                <h2
                  id={`h-blog-${cat.id}`}
                  data-reveal="60"
                  className="font-serif font-normal text-[clamp(24px,3.2vw,38px)] leading-[1.12] text-ink m-0 max-w-[30ch]"
                >
                  {cat.tagline}
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-[clamp(20px,2.5vw,32px)] mt-[clamp(26px,3.5vw,40px)]">
                  {items.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/blog/${a.slug}`}
                      data-reveal
                      className="group flex flex-col bg-cream border border-[rgba(34,28,21,.08)] rounded-[3px] overflow-hidden transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-[4px] hover:shadow-[0_30px_50px_-30px_rgba(34,28,21,.45)]"
                    >
                      <span className="block relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={a.image}
                          alt={a.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 360px"
                          className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                        />
                      </span>
                      <span className="flex flex-col flex-1 p-5">
                        <span className="block font-serif text-[19px] leading-[1.3] text-ink">
                          {a.title}
                        </span>
                        <span className="block mt-3 text-[14px] leading-[1.65] text-taupe">
                          {a.excerpt}
                        </span>
                        <span className="block mt-auto pt-4 text-[13px] text-bronze font-semibold tracking-[.04em]">
                          Lire l&apos;article · {a.readingMinutes} min →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
