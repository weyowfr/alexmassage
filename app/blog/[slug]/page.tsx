import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/blog/ArticleBody";
import JsonLd from "@/components/JsonLd";
import RdvBand from "@/components/RdvBand";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ARTICLES, getArticle, getCategory } from "@/lib/blog";
import { businessRef, SITE_URL } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.metaTitle} | Alex Massage`,
    description: article.description,
    alternates: { canonical: `${SITE_URL}/blog/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      title: article.metaTitle,
      description: article.description,
      images: [article.image],
      publishedTime: article.date,
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const url = `${SITE_URL}/blog/${article.slug}`;
  const related = article.related
    .map((s) => getArticle(s))
    .filter((a) => a !== undefined);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: "Alexandre",
      jobTitle: "Praticien en massages bien-être",
      url: `${SITE_URL}/mon-histoire`,
      worksFor: businessRef,
    },
    publisher: businessRef,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const faqLd = article.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const dateLabel = new Date(`${article.date}T12:00:00`).toLocaleDateString(
    "fr-FR",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <SiteHeader current="blog" />

      <main>
        {/* En-tête d'article */}
        <section className="relative overflow-hidden bg-night">
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,15,9,.62) 0%, rgba(20,15,9,.45) 45%, rgba(20,15,9,.78) 100%)",
            }}
          />
          <div className="relative max-w-[860px] mx-auto pt-[clamp(140px,18vw,190px)] pb-[clamp(48px,6vw,72px)] px-[clamp(20px,5vw,64px)]">
            <nav
              aria-label="Fil d'Ariane"
              className="flex flex-wrap items-center gap-[10px] text-[12px] tracking-[.12em] uppercase mb-6"
            >
              <Link
                href="/"
                className="text-[rgba(244,239,231,.72)] hover:text-goldlight"
              >
                Accueil
              </Link>
              <span className="text-[rgba(216,165,90,.85)]">/</span>
              <Link
                href="/blog"
                className="text-[rgba(244,239,231,.72)] hover:text-goldlight"
              >
                Blog
              </Link>
              <span className="text-[rgba(216,165,90,.85)]">/</span>
              <span className="text-linen">{category.label}</span>
            </nav>
            <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-goldlight m-0 mb-[18px]">
              {category.label}
            </p>
            <h1 className="font-serif font-normal text-[clamp(30px,5vw,54px)] leading-[1.08] tracking-[-.01em] text-linen m-0 text-balance">
              {article.title}
            </h1>
            <p className="mt-6 mb-0 text-[13.5px] tracking-[.04em] text-[rgba(244,239,231,.82)]">
              Par{" "}
              <Link
                href="/mon-histoire"
                className="font-semibold text-linen underline decoration-[rgba(216,165,90,.6)] underline-offset-4 hover:text-goldlight"
              >
                Alexandre
              </Link>
              , praticien certifié · {dateLabel} · {article.readingMinutes} min
              de lecture
            </p>
          </div>
        </section>

        {/* Corps de l'article */}
        <article className="bg-linen py-[clamp(48px,7vw,88px)] px-[clamp(20px,5vw,64px)]">
          <div className="max-w-[760px] mx-auto">
            <ArticleBody blocks={article.blocks} />

            {article.faq && (
              <section aria-labelledby="h-article-faq" className="mt-[clamp(48px,6vw,64px)]">
                <h2
                  id="h-article-faq"
                  className="font-serif font-normal text-[clamp(24px,3vw,34px)] leading-[1.15] text-ink m-0 mb-6"
                >
                  Vos questions fréquentes
                </h2>
                <div className="flex flex-col gap-3">
                  {article.faq.map((f, i) => (
                    <details
                      key={i}
                      className="group bg-cream border border-[rgba(34,28,21,.08)] rounded-[3px] px-5 py-1"
                    >
                      <summary className="cursor-pointer list-none py-[14px] font-semibold text-[15.5px] text-ink flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span
                          aria-hidden="true"
                          className="text-bronze text-[18px] transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="m-0 pb-4 text-taupe text-[15.5px] leading-[1.75]">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA de fin d'article */}
            <div className="mt-[clamp(48px,6vw,64px)] bg-sand border border-[rgba(34,28,21,.08)] rounded-[3px] p-[clamp(24px,4vw,40px)]">
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-3">
                À domicile · Toulouse &amp; 30 km
              </p>
              <p className="font-serif text-[clamp(20px,2.6vw,28px)] leading-[1.25] text-ink m-0">
                Envie de passer de la lecture à la table de massage ?
              </p>
              <p className="mt-3 mb-6 text-taupe text-[15.5px] leading-[1.75]">
                Massage relaxant, énergétique ou sportif, en solo ou en duo —
                j&apos;apporte tout le matériel chez vous, à Toulouse et dans
                un rayon de 30 km. Séance découverte dès 30 €.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-forest text-linen font-semibold text-[13px] tracking-[.06em] uppercase px-[28px] py-[14px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
                >
                  Prendre rendez-vous
                </Link>
                <Link
                  href="/tarifs-massage-toulouse"
                  className="inline-flex items-center bg-transparent text-forest border border-[rgba(44,64,52,.4)] font-semibold text-[13px] tracking-[.06em] uppercase px-[28px] py-[14px] rounded-[2px] transition-[background-color,color] duration-[350ms] hover:bg-forest hover:text-linen"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Articles liés */}
        {related.length > 0 && (
          <section
            aria-labelledby="h-article-related"
            className="bg-sand py-[clamp(56px,8vw,96px)] px-[clamp(20px,5vw,64px)]"
          >
            <div className="max-w-[1120px] mx-auto">
              <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4">
                Pour aller plus loin
              </p>
              <h2
                id="h-article-related"
                className="font-serif font-normal text-[clamp(24px,3.2vw,38px)] leading-[1.12] text-ink m-0 mb-[clamp(28px,4vw,44px)]"
              >
                À lire aussi sur le blog
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(20px,2.5vw,32px)]">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group bg-cream border border-[rgba(34,28,21,.08)] rounded-[3px] overflow-hidden transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-[4px] hover:shadow-[0_30px_50px_-30px_rgba(34,28,21,.45)]"
                  >
                    <span className="block relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                      />
                    </span>
                    <span className="block p-5">
                      <span className="block text-[11.5px] tracking-[.18em] uppercase font-semibold text-bronze mb-2">
                        {getCategory(r.category).label}
                      </span>
                      <span className="block font-serif text-[19px] leading-[1.3] text-ink">
                        {r.title}
                      </span>
                      <span className="block mt-3 text-[13px] text-taupe">
                        {r.readingMinutes} min de lecture
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <RdvBand />
      </main>

      <SiteFooter />
    </>
  );
}
