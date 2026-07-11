import Link from "next/link";

/* Bandeau de confiance affiché sur chaque page de service : pour un massage
   à domicile, savoir qui entre chez soi est le premier critère de réservation. */
export default function Credentials() {
  return (
    <section
      aria-label="Qualifications d'Alexandre"
      className="bg-parchment py-[clamp(28px,3.6vw,44px)] px-[clamp(20px,5vw,64px)]"
    >
      <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-center gap-x-[clamp(24px,4vw,56px)] gap-y-3 text-center">
        <span className="text-[13.5px] tracking-[.04em] text-cocoa">
          <strong className="font-semibold">
            Formé à l&apos;Institut Temana
          </strong>{" "}
          (Toulouse)
        </span>
        <span aria-hidden="true" className="w-1 h-1 rounded-full bg-gold" />
        <span className="text-[13.5px] tracking-[.04em] text-cocoa">
          Expérience en <strong className="font-semibold">spa de palace</strong>{" "}
          toulousain
        </span>
        <span aria-hidden="true" className="w-1 h-1 rounded-full bg-gold" />
        <Link
          href="/mon-histoire"
          className="text-[13.5px] tracking-[.04em] text-forest font-semibold border-b border-[rgba(192,135,60,.5)] hover:text-bronze"
        >
          Le parcours d&apos;Alexandre →
        </Link>
      </div>
    </section>
  );
}
