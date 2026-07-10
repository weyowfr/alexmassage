/* Mention "temps réel garanti" sous les grilles tarifaires. */
export default function TimeGuarantee({
  center = false,
  withSetup = false,
  reveal,
}: {
  center?: boolean;
  withSetup?: boolean;
  reveal?: number;
}) {
  return (
    <div
      data-reveal={reveal ? String(reveal) : undefined}
      className={center ? "mt-10" : "max-w-[1120px] mx-auto mt-[clamp(40px,5vw,60px)] text-center"}
    >
      <div className="w-12 h-px bg-gold mx-auto mb-5" />
      <p className="font-serif italic text-[16px] md:text-[17px] leading-[1.7] text-cocoa max-w-[60ch] mx-auto m-0 text-center">
        <strong className="not-italic font-semibold">
          Le temps de massage annoncé et payé est réellement celui pratiqué
        </strong>{" "}
        — le temps d&apos;installation{withSetup ? " et de mise en route" : ""}{" "}
        est en plus. Paiement le jour de la séance.
      </p>
    </div>
  );
}
