/* Panneau latéral "Idéal pour" : liste à coches + fiche technique. */
export default function IdealAside({
  items,
  facts,
}: {
  items: string[];
  facts: { dt: string; dd: string }[];
}) {
  return (
    <aside className="flex-[1_1_280px] min-w-[260px] self-start" data-reveal="140">
      <div className="bg-cream border border-[rgba(34,28,21,.08)] rounded-[4px] px-[30px] py-8">
        <h3 className="text-[12px] tracking-[.2em] uppercase font-semibold text-bronze m-0 mb-5">
          Idéal pour
        </h3>
        <ul className="list-none m-0 p-0 flex flex-col gap-[14px]">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-center gap-3 text-cocoa text-[16px]"
            >
              <span className="text-gold">✓</span> {it}
            </li>
          ))}
        </ul>
        <div className="h-px bg-[rgba(34,28,21,.1)] my-6" />
        <dl className="m-0 flex flex-col gap-3">
          {facts.map((f) => (
            <div key={f.dt} className="flex justify-between gap-3">
              <dt className="text-mute text-[13.5px]">{f.dt}</dt>
              <dd className="m-0 text-cocoa text-[13.5px] font-semibold">
                {f.dd}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
