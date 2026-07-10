/* Pétale Alex Massage — lotus stylisé, cœur doré. */
export default function Logo({ dim = false }: { dim?: boolean }) {
  const side = dim ? 0.5 : 0.55;
  const mid = dim ? 0.75 : 0.8;
  return (
    <svg
      viewBox="0 0 40 44"
      width={26}
      height={29}
      aria-hidden="true"
      className="block overflow-visible"
    >
      <g fill="currentColor">
        <ellipse cx={20} cy={17} rx={3.1} ry={11} transform="rotate(-74 20 25)" opacity={side} />
        <ellipse cx={20} cy={17} rx={3.1} ry={11} transform="rotate(74 20 25)" opacity={side} />
        <ellipse cx={20} cy={17} rx={3.2} ry={11.5} transform="rotate(-38 20 25)" opacity={mid} />
        <ellipse cx={20} cy={17} rx={3.2} ry={11.5} transform="rotate(38 20 25)" opacity={mid} />
      </g>
      <ellipse cx={20} cy={16} rx={3.3} ry={12} fill="#C0873C" />
    </svg>
  );
}
