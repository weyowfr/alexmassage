/* Carte bienfait : pastille cerclée or (numéro ou icône) + titre + texte. */
export default function BenefitCard({
  badge,
  badgeIsNum = true,
  title,
  text,
  delay,
}: {
  badge: string;
  badgeIsNum?: boolean;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal={delay ? String(delay) : ""}
      className="flex flex-col gap-[14px]"
    >
      <div
        className={`w-[54px] h-[54px] border-[1.5px] border-[rgba(192,135,60,.55)] rounded-full grid place-items-center text-gold ${
          badgeIsNum ? "font-serif italic text-[20px]" : "text-[22px]"
        }`}
      >
        {badge}
      </div>
      <h3 className="font-serif font-normal text-[22px] text-ink m-0">
        {title}
      </h3>
      <p className="m-0 text-taupe text-[15.5px] leading-[1.7]">{text}</p>
    </div>
  );
}
