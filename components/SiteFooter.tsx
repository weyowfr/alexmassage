import Link from "next/link";
import Logo from "./Logo";

const footLink =
  "block py-[6px] text-[14.5px] text-[#4A4235] hover:text-bronze";

export default function SiteFooter() {
  return (
    <footer className="bg-parchment text-ink pt-[clamp(56px,7vw,90px)] px-[clamp(20px,5vw,64px)] pb-0 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-[clamp(36px,5vw,60px)]">
        <div className="flex-[1_1_280px] min-w-[240px]">
          <div className="flex items-center gap-[11px] mb-5 text-ink">
            <Logo dim />
            <span className="font-serif font-medium text-[19px] tracking-[.2em] uppercase leading-none">
              Alex Massage
            </span>
          </div>
          <p className="text-taupe text-[15px] leading-[1.75] max-w-[320px] m-0">
            Un moment de bien-être et de relaxation à domicile, en solo ou en
            duo. Massage relaxant, énergétique ou sportif — dans le confort de
            chez vous.
          </p>
          <p className="mt-[18px] mb-0 text-[13px] tracking-[.05em] text-bronze">
            Toulouse &amp; sa région · rayon de 30 km
          </p>
        </div>

        <div className="flex-[1_1_190px] min-w-[170px]">
          <h3 className="text-[12px] tracking-[.2em] uppercase font-semibold text-bronze m-0 mb-5">
            Restez en contact
          </h3>
          <p className="m-0 mb-3 text-[14.5px] text-[#4A4235]">
            Toulouse &amp; sa région
          </p>
          <a
            href="mailto:contact@alexmassage.fr"
            className="block py-[5px] text-[14.5px] text-[#4A4235] hover:text-bronze"
          >
            contact@alexmassage.fr
          </a>
          <a
            href="tel:+33771838010"
            className="block py-[5px] text-[14.5px] text-[#4A4235] hover:text-bronze"
          >
            07 71 83 80 10
          </a>
          <p className="mt-3 mb-0 text-[14.5px] text-[#4A4235]">
            Lun – Ven · 9 h – 19 h
          </p>
          <a
            href="https://maps.app.goo.gl/kkjPhqm5aJjqnFJ3A"
            target="_blank"
            rel="noopener"
            className="block mt-2 py-[5px] text-[14.5px] font-semibold text-forest hover:text-bronze"
          >
            Voir mes avis Google →
          </a>
        </div>

        <div className="flex-[1_1_170px] min-w-[150px]">
          <h3 className="text-[12px] tracking-[.2em] uppercase font-semibold text-bronze m-0 mb-5">
            Liens rapides
          </h3>
          <Link href="/" className={footLink}>
            Accueil
          </Link>
          <Link href="/mes-massages-toulouse" className={footLink}>
            Mes massages
          </Link>
          <Link href="/mon-histoire" className={footLink}>
            Mon histoire
          </Link>
          <Link href="/tarifs-massage-toulouse" className={footLink}>
            Tarifs
          </Link>
          <Link href="/carte-cadeau-massage-toulouse" className={footLink}>
            Cartes cadeaux
          </Link>
        </div>

        <div className="flex-[1_1_170px] min-w-[150px]">
          <h3 className="text-[12px] tracking-[.2em] uppercase font-semibold text-bronze m-0 mb-5">
            Découvrir
          </h3>
          <Link href="/massage-duo-toulouse" className={footLink}>
            Massage duo
          </Link>
          <Link href="/massage-entreprise-toulouse" className={footLink}>
            Massage en entreprise
          </Link>
          <Link href="/blog" className={footLink}>
            Blog &amp; conseils
          </Link>
          <Link href="/contact" className={footLink}>
            Contact
          </Link>
          <Link href="/mentions-legales" className={footLink}>
            Mentions légales
          </Link>
          <Link href="/politique-cookies" className={footLink}>
            Politique de cookies
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-[52px] border-t border-[rgba(34,28,21,.13)] pt-6 pb-8 flex flex-wrap gap-3 justify-between items-center">
        <span className="text-[12.5px] text-mute tracking-[.02em]">
          © {new Date().getFullYear()} Alex Massage — Massage bien-être à domicile à Toulouse.
        </span>
        <span className="font-serif italic text-[14px] text-bronze">
          Le rituel qui vient à vous.
        </span>
      </div>
    </footer>
  );
}
