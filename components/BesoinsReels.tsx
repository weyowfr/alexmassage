/* Section « besoins réels » : nomme, avec un ton plus intime, ce qu'un massage
   apporte vraiment — au-delà de la technique. Cartes cream réutilisant le
   pattern des autres sections. */

const BESOINS = [
  {
    title: "S'autoriser à lâcher prise",
    text: "Faire le vide, poser les armes, arrêter de penser à tout le reste. Le temps d'une séance, il n'y a plus rien à gérer.",
    delay: "",
  },
  {
    title: "S'occuper de soi",
    text: "Prendre soin de son corps n'est pas un luxe : c'est un plaisir légitime, et l'une des façons les plus simples de recharger son énergie.",
    delay: "100",
  },
  {
    title: "Être écouté et pris en charge",
    text: "Un moment où quelqu'un s'occupe de vous, vraiment. On vous écoute, on ajuste, on prend soin — vous n'avez qu'à vous laisser faire.",
    delay: "200",
  },
  {
    title: "Un temps rien qu'à vous",
    text: "Une parenthèse qui n'appartient qu'à vous, chez vous. Ni téléphone, ni obligations : juste vous, et le retour au calme.",
    delay: "300",
  },
];

export default function BesoinsReels({
  bg = "bg-linen",
}: {
  bg?: "bg-linen" | "bg-sand";
}) {
  return (
    <section
      aria-labelledby="h-besoins"
      className={`${bg} py-[clamp(64px,9vw,120px)] px-[clamp(20px,5vw,64px)]`}
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[640px] mb-[clamp(40px,5vw,64px)]">
          <p
            data-reveal
            className="text-[13px] tracking-[.24em] uppercase font-semibold text-bronze m-0 mb-4"
          >
            Pourquoi s&apos;offrir un massage
          </p>
          <h2
            id="h-besoins"
            data-reveal="80"
            className="font-serif font-normal text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-[-.01em] text-ink m-0"
          >
            Bien plus qu&apos;un soin
          </h2>
          <p
            data-reveal="150"
            className="mt-[22px] mb-0 text-taupe text-[17px] leading-[1.8]"
          >
            Derrière chaque réservation, un besoin réel : dénouer un dos ou des
            épaules, souffler, se retrouver, reprendre soin de soi. Un massage
            répond d&apos;abord à ça.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(20px,2.4vw,30px)]">
          {BESOINS.map((b) => (
            <div
              key={b.title}
              data-reveal={b.delay}
              className="bg-cream border border-[rgba(34,28,21,.07)] rounded-[4px] px-[26px] py-8 flex flex-col gap-3"
            >
              <h3 className="font-serif font-normal text-[21px] leading-[1.15] text-ink m-0">
                {b.title}
              </h3>
              <p className="m-0 text-taupe text-[15px] leading-[1.72]">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
