import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  kicker: string;
  title: string;
  crumb: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  kicker,
  title,
  crumb,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night min-h-[clamp(440px,62vh,624px)] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
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
            "linear-gradient(180deg, rgba(20,15,9,.6) 0%, rgba(20,15,9,.4) 42%, rgba(20,15,9,.74) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[52%] translate-x-[-28%] -translate-y-1/2 w-[540px] h-[540px] rounded-full blur-[18px] animate-[breatheGlow_12s_ease-in-out_infinite] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(192,135,60,.4) 0%, rgba(192,135,60,0) 62%)",
        }}
      />

      <div className="relative w-full max-w-[1120px] mx-auto pt-[108px] pb-[58px] px-[clamp(20px,5vw,64px)]">
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center gap-[10px] text-[12px] tracking-[.12em] uppercase mb-6 animate-[fadeIn_1s_ease_.1s_both]"
        >
          <Link
            href="/"
            className="text-[rgba(244,239,231,.72)] hover:text-goldlight"
          >
            Accueil
          </Link>
          <span className="text-[rgba(216,165,90,.85)]">/</span>
          <span className="text-linen">{crumb}</span>
        </nav>
        <p className="text-[13px] tracking-[.24em] uppercase font-semibold text-goldlight m-0 mb-[18px] animate-[riseIn_1s_cubic-bezier(.22,.61,.36,1)_.2s_both]">
          {kicker}
        </p>
        <h1 className="font-serif font-normal text-[clamp(36px,6vw,74px)] leading-[1.04] tracking-[-.01em] text-linen m-0 max-w-[20ch] text-balance animate-[riseIn_1.1s_cubic-bezier(.22,.61,.36,1)_.32s_both]">
          {title}
        </h1>
        <div className="w-[66px] h-[2px] bg-gold mt-8 animate-[fadeIn_1.2s_ease_.7s_both]" />
      </div>
    </section>
  );
}
