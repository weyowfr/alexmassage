/* Ligne de tarif "pointillés" : libellé — prix or, typographie Spectral. */
export default function PriceLine({
  label,
  note,
  price,
  size = 22,
  strong = false,
}: {
  label: string;
  note?: string;
  price: string;
  size?: 22 | 23;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-4 py-[18px] border-b ${
        strong ? "border-[rgba(34,28,21,.14)]" : "border-[rgba(34,28,21,.12)]"
      }`}
    >
      <span className="text-[13px] tracking-[.12em] uppercase text-cocoa font-semibold whitespace-nowrap">
        {label}
        {note && (
          <span className="text-mute font-normal normal-case tracking-normal">
            {" "}
            {note}
          </span>
        )}
      </span>
      <span
        className={`flex-1 -translate-y-1 border-b border-dotted ${
          strong ? "border-[rgba(34,28,21,.3)]" : "border-[rgba(34,28,21,.28)]"
        }`}
      />
      <span
        className={`font-serif text-gold whitespace-nowrap ${
          size === 23 ? "text-[23px]" : "text-[22px]"
        }`}
      >
        {price}
      </span>
    </div>
  );
}
