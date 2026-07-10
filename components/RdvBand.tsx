import Image from "next/image";
import Link from "next/link";

export default function RdvBand() {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="absolute inset-0">
        <Image
          src="/images/espace-detente.jpeg"
          alt="Espace détente, voilage et lumière chaude tamisée"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,15,9,.94) 0%, rgba(20,15,9,.74) 42%, rgba(20,15,9,.36) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[7%] top-1/2 -translate-y-1/2 grid place-items-center pointer-events-none"
      >
        <div className="w-[230px] h-[230px] border border-[rgba(216,165,90,.3)] rounded-full animate-[breathe_11s_cubic-bezier(.37,0,.63,1)_infinite]" />
        <div className="absolute w-[150px] h-[150px] border border-[rgba(216,165,90,.42)] rounded-full animate-[breathe_11s_cubic-bezier(.37,0,.63,1)_infinite] [animation-delay:-1.4s]" />
        <div className="absolute w-2 h-2 bg-goldlight rounded-full animate-[breatheGlow_11s_ease-in-out_infinite]" />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(66px,9vw,124px)] min-h-[440px] flex flex-col justify-center gap-[22px]">
        <span className="text-[13px] tracking-[.26em] uppercase font-semibold text-goldlight">
          Rendez-vous
        </span>
        <h2 className="font-serif font-normal text-[clamp(34px,5.4vw,64px)] leading-[1.04] text-linen max-w-[15ch] m-0 text-balance">
          Prenez un rendez-vous dès maintenant
        </h2>
        <p className="text-[rgba(244,239,231,.82)] max-w-[46ch] text-[16.5px] leading-[1.75] m-0">
          Je me déplace chez vous — Toulouse et 30 km alentour — avec ma table,
          mes huiles et ma musique. Vous n&apos;avez plus qu&apos;à respirer.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-[10px]">
          <Link
            href="/contact"
            className="inline-flex items-center gap-[.6em] bg-gold text-night font-bold text-[13.5px] tracking-[.06em] uppercase px-8 py-4 rounded-[2px] transition-[background-color,transform] duration-[400ms] hover:bg-goldlight hover:-translate-y-[2px] hover:text-night"
          >
            Prendre rendez-vous
          </Link>
          <a
            href="tel:+33771838010"
            className="inline-flex items-center gap-[.5em] text-linen text-[14px] tracking-[.08em] uppercase border-b border-[rgba(244,239,231,.35)] pb-[3px] transition-[color,border-color] duration-300 hover:text-goldlight hover:border-goldlight"
          >
            07 71 83 80 10
          </a>
        </div>
      </div>
    </section>
  );
}
