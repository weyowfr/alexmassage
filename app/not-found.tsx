import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-night min-h-[70vh] flex items-center px-[clamp(20px,5vw,64px)]">
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-1/2 -translate-y-1/2 grid place-items-center pointer-events-none"
          >
            <div className="w-[300px] h-[300px] border border-[rgba(216,165,90,.22)] rounded-full animate-[breathe_12s_cubic-bezier(.37,0,.63,1)_infinite]" />
            <div className="absolute w-[180px] h-[180px] border border-[rgba(216,165,90,.34)] rounded-full animate-[breathe_12s_cubic-bezier(.37,0,.63,1)_infinite] [animation-delay:-1.6s]" />
          </div>
          <div className="relative max-w-[1120px] mx-auto w-full pt-[120px] pb-16">
            <p className="text-[13px] tracking-[.28em] uppercase font-semibold text-goldlight m-0 mb-5">
              Erreur 404
            </p>
            <h1 className="font-serif font-normal text-[clamp(34px,5.6vw,68px)] leading-[1.06] text-linen m-0 max-w-[18ch] text-balance">
              Cette page a pris un moment{" "}
              <span className="italic text-goldlight">pour elle</span>.
            </h1>
            <p className="mt-6 mb-0 max-w-[52ch] text-[rgba(244,239,231,.8)] text-[17px] leading-[1.75]">
              L&apos;adresse demandée n&apos;existe pas ou plus. Respirez — tout
              ce qu&apos;il faut pour réserver votre massage à domicile à
              Toulouse est à portée de main.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                href="/"
                className="inline-flex items-center bg-gold text-night font-bold text-[14px] tracking-[.06em] uppercase px-9 py-[16px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/mes-massages-toulouse"
                className="inline-flex items-center text-linen border border-[rgba(244,239,231,.45)] font-semibold text-[14px] tracking-[.06em] uppercase px-8 py-[16px] rounded-[2px] transition-[background-color,border-color] duration-[350ms] hover:bg-[rgba(244,239,231,.1)] hover:border-linen hover:text-linen"
              >
                Voir mes massages
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-linen border border-[rgba(244,239,231,.45)] font-semibold text-[14px] tracking-[.06em] uppercase px-8 py-[16px] rounded-[2px] transition-[background-color,border-color] duration-[350ms] hover:bg-[rgba(244,239,231,.1)] hover:border-linen hover:text-linen"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
