/* Ma méthode en 4 étapes : le cœur du positionnement « spécialiste du massage
   musculaire ». Structure calquée sur la grille réassurance (numéros 01→04,
   titres serif, texte taupe, animation data-reveal). */

const STEPS = [
  {
    num: "01",
    title: "Diagnostic",
    text: "J'identifie vos tensions et déséquilibres musculaires. La première question est toujours la même : que dit votre corps ?",
    delay: "",
  },
  {
    num: "02",
    title: "Massage structuré",
    text: "Je construis un massage cohérent, séquencé selon vos besoins réels du jour — pas un protocole standard appliqué à l'aveugle.",
    delay: "100",
  },
  {
    num: "03",
    title: "Techniques sur mesure",
    text: "J'adapte pression, mobilisation et relâchement à votre physiologie, dans le respect de votre confort et de votre sécurité.",
    delay: "200",
  },
  {
    num: "04",
    title: "Intégration",
    text: "J'inscris la séance dans une pratique bien-être globale ou un protocole de récupération sportive. Le massage devient un acteur de votre routine bien-être.",
    delay: "300",
  },
];

export default function MethodeSection({
  bg = "bg-sand",
}: {
  /* Alterner le fond selon la section qui précède sur chaque page. */
  bg?: "bg-sand" | "bg-linen";
}) {
  return (
    <section
      aria-labelledby="h-methode"
      className={`${bg} py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]`}
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[680px] mb-[clamp(40px,5vw,64px)]">
          <p
            data-reveal
            className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
          >
            Ma méthode
          </p>
          <h2
            id="h-methode"
            data-reveal="80"
            className="font-serif font-normal text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-[-.01em] text-ink m-0"
          >
            Spécialiste du massage musculaire
          </h2>
          <p
            data-reveal="150"
            className="mt-[22px] mb-0 text-taupe text-[17px] leading-[1.8]"
          >
            Chaque séance suit une démarche précise : lire le corps, construire
            un massage sur mesure et l&apos;intégrer à votre équilibre — bien-être,
            récupération, regain d&apos;énergie.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[clamp(24px,3vw,44px)]">
          {STEPS.map((s) => (
            <div
              key={s.num}
              data-reveal={s.delay}
              className="flex flex-col gap-3"
            >
              <span className="font-serif text-[34px] leading-none text-gold">
                {s.num}
              </span>
              <h3 className="font-serif font-normal text-[21px] text-ink m-0">
                {s.title}
              </h3>
              <p className="m-0 text-taupe text-[15px] leading-[1.7]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
