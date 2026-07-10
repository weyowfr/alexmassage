"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export type NavKey =
  | "histoire"
  | "massages"
  | "tarifs"
  | "cartes"
  | "entreprise"
  | "contact"
  | "";

const MASSAGES = [
  { href: "/mes-massages-toulouse", label: "Vue d'ensemble" },
  { href: "/massage-californien-toulouse", label: "Relaxant / Californien" },
  { href: "/massage-abhyanga-toulouse", label: "Énergétique / Abhyanga" },
  { href: "/massage-suedois-sportif-toulouse", label: "Suédois / Sportif" },
];

export default function SiteHeader({ current = "" }: { current?: NavKey }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    const onResize = () => {
      if (window.innerWidth >= 992) {
        document.body.style.overflow = "";
        setMenu(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMenu = () => {
    const m = !menu;
    document.body.style.overflow = m ? "hidden" : "";
    setMenu(m);
  };
  const closeMenu = () => {
    document.body.style.overflow = "";
    setMenu(false);
  };

  const onLight = scrolled || menu;
  const txt = onLight ? "text-ink" : "text-linen";

  const navLink = (key: NavKey) =>
    `relative inline-flex items-center gap-1 py-2 text-[12.5px] font-semibold tracking-[.15em] uppercase whitespace-nowrap border-b-2 transition-[color,border-color] duration-[350ms] hover:text-gold ${
      current === key ? "text-gold border-gold" : `border-transparent ${txt}`
    }`;

  const overLink =
    "font-serif text-[clamp(28px,8vw,40px)] font-normal text-ink py-[13px] border-b border-[rgba(34,28,21,.1)] leading-[1.1]";
  const overSubLink =
    "font-sans text-[15px] text-taupe py-[7px] tracking-[.02em]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] font-sans transition-[height,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(.22,.61,.36,1)] border-b ${
          scrolled ? "h-[66px]" : "h-[86px]"
        } ${
          onLight
            ? "bg-[rgba(244,239,231,.94)] backdrop-blur-[14px] backdrop-saturate-150 border-[rgba(34,28,21,.09)] shadow-[0_18px_50px_-34px_rgba(34,28,21,.7)]"
            : "bg-transparent border-[rgba(244,239,231,.16)] shadow-none"
        }`}
      >
        <Link
          href="/"
          aria-label="Alex Massage — retour à l'accueil"
          className={`flex items-center gap-[11px] shrink-0 transition-colors duration-500 ${txt} ${onLight ? "hover:text-ink" : "hover:text-linen"}`}
        >
          <span className="flex">
            <Logo />
          </span>
          <span className="font-serif font-medium text-[clamp(16px,1.5vw,19px)] tracking-[.2em] uppercase leading-none">
            Alex Massage
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden min-[992px]:flex items-center gap-[clamp(16px,1.8vw,30px)]"
        >
          <Link href="/mon-histoire" className={navLink("histoire")}>
            Mon histoire
          </Link>
          <span
            className="relative inline-flex"
            onMouseEnter={() => setSub(true)}
            onMouseLeave={() => setSub(false)}
          >
            <Link
              href="/mes-massages-toulouse"
              className={navLink("massages")}
              aria-haspopup="true"
              aria-expanded={sub}
            >
              Mes massages
              <span
                className={`text-[11px] inline-block transition-transform duration-[350ms] ${
                  sub ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </Link>
            {sub && (
              <div
                role="menu"
                className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 min-w-[250px] bg-cream rounded-[3px] border border-[rgba(34,28,21,.08)] shadow-[0_30px_60px_-24px_rgba(34,28,21,.4)] p-[10px] flex flex-col z-[1001] animate-[fadeIn_.3s_ease_both]"
              >
                {MASSAGES.map((m, i) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    role="menuitem"
                    className={`px-[14px] py-[11px] text-[13px] font-medium tracking-[.02em] normal-case text-ink rounded-[2px] transition-[background-color,color] duration-300 hover:bg-[rgba(192,135,60,.12)] hover:text-bronze ${
                      i < MASSAGES.length - 1
                        ? "border-b border-[rgba(34,28,21,.06)]"
                        : ""
                    }`}
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            )}
          </span>
          <Link href="/tarifs-massage-toulouse" className={navLink("tarifs")}>
            Tarifs
          </Link>
          <Link
            href="/carte-cadeau-massage-toulouse"
            className={navLink("cartes")}
          >
            Cartes cadeaux
          </Link>
          <Link
            href="/massage-entreprise-toulouse"
            className={navLink("entreprise")}
          >
            Entreprise
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden min-[992px]:inline-flex items-center bg-forest text-linen text-[12.5px] font-semibold tracking-[.08em] uppercase px-6 py-[13px] rounded-[2px] whitespace-nowrap shrink-0 transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
        >
          Prendre rendez-vous
        </Link>

        {/* Burger mobile */}
        <button
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={menu}
          className="min-[992px]:hidden inline-flex flex-col justify-center gap-[5px] w-11 h-11 px-2 bg-transparent border-none cursor-pointer"
        >
          <span className={`block h-[1.5px] w-full transition-colors duration-500 ${onLight ? "bg-ink" : "bg-linen"}`} />
          <span className={`block h-[1.5px] w-full transition-colors duration-500 ${onLight ? "bg-ink" : "bg-linen"}`} />
          <span className={`block h-[1.5px] w-full transition-colors duration-500 ${onLight ? "bg-ink" : "bg-linen"}`} />
        </button>
      </header>

      {/* Menu mobile plein écran */}
      {menu && (
        <div className="fixed inset-0 z-[1200] bg-linen flex flex-col p-[clamp(20px,6vw,48px)] pt-[92px] overflow-y-auto animate-[fadeIn_.4s_ease_both]">
          <button
            onClick={closeMenu}
            aria-label="Fermer le menu"
            className="absolute top-5 right-[clamp(16px,5vw,40px)] w-12 h-12 text-[32px] leading-none bg-transparent border-none text-ink cursor-pointer font-serif"
          >
            &times;
          </button>
          <nav aria-label="Navigation mobile" className="flex flex-col">
            <Link href="/" onClick={closeMenu} className={overLink}>
              Accueil
            </Link>
            <Link href="/mon-histoire" onClick={closeMenu} className={overLink}>
              Mon histoire
            </Link>
            <Link
              href="/mes-massages-toulouse"
              onClick={closeMenu}
              className={overLink}
            >
              Mes massages
            </Link>
            <div className="flex flex-col gap-[2px] pt-[10px] pb-[14px] pl-[18px] border-b border-[rgba(34,28,21,.1)]">
              <Link
                href="/massage-californien-toulouse"
                onClick={closeMenu}
                className={overSubLink}
              >
                Relaxant / Californien
              </Link>
              <Link
                href="/massage-abhyanga-toulouse"
                onClick={closeMenu}
                className={overSubLink}
              >
                Énergétique / Abhyanga
              </Link>
              <Link
                href="/massage-suedois-sportif-toulouse"
                onClick={closeMenu}
                className={overSubLink}
              >
                Suédois / Sportif
              </Link>
            </div>
            <Link
              href="/tarifs-massage-toulouse"
              onClick={closeMenu}
              className={overLink}
            >
              Tarifs
            </Link>
            <Link
              href="/carte-cadeau-massage-toulouse"
              onClick={closeMenu}
              className={overLink}
            >
              Cartes cadeaux
            </Link>
            <Link
              href="/massage-entreprise-toulouse"
              onClick={closeMenu}
              className={overLink}
            >
              Massage en entreprise
            </Link>
            <Link href="/contact" onClick={closeMenu} className={overLink}>
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="tel:+33771838010"
              className="inline-flex items-center bg-forest text-linen text-[13px] font-semibold tracking-[.06em] uppercase px-[26px] py-[15px] rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-forestlight hover:-translate-y-[2px] hover:text-linen"
            >
              Appeler — 07 71 83 80 10
            </a>
            <a
              href="https://wa.me/33771838010"
              className="inline-flex items-center bg-transparent text-forest border border-[rgba(44,64,52,.4)] text-[13px] font-semibold tracking-[.06em] uppercase px-[26px] py-[15px] rounded-[2px] transition-[background-color,color] duration-300 hover:bg-[rgba(44,64,52,.08)] hover:text-forest"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
