import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/lib/blog/types";

/* Rend la mini-syntaxe inline des articles :
   [libellé](/chemin) → <Link>, **texte** → <strong>. */
const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <Link
          key={key++}
          href={m[2]}
          className="text-forest font-semibold underline decoration-[rgba(44,64,52,.35)] underline-offset-4 transition-colors duration-300 hover:text-bronze hover:decoration-bronze"
        >
          {m[1]}
        </Link>,
      );
    } else {
      out.push(
        <strong key={key++} className="text-cocoa font-semibold">
          {m[3]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(b.x)}
                className="font-serif font-normal text-[clamp(24px,3vw,34px)] leading-[1.15] tracking-[-.01em] text-ink mt-[clamp(40px,5vw,56px)] mb-[18px] scroll-mt-24"
              >
                {renderInline(b.x)}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-serif font-normal text-[clamp(19px,2.2vw,24px)] leading-[1.2] text-ink mt-8 mb-3"
              >
                {renderInline(b.x)}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="list-none m-0 mt-4 mb-5 p-0 flex flex-col gap-[10px]"
              >
                {b.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-[26px] text-taupe text-[16.5px] leading-[1.75] before:content-['—'] before:absolute before:left-0 before:text-bronze"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 mx-0 pl-6 border-l-2 border-gold font-serif italic text-[clamp(18px,2vw,21px)] leading-[1.6] text-cocoa"
              >
                {renderInline(b.x)}
              </blockquote>
            );
          default:
            return (
              <p
                key={i}
                className="mt-[18px] mb-0 text-taupe text-[16.5px] leading-[1.8]"
              >
                {renderInline(b.x)}
              </p>
            );
        }
      })}
    </div>
  );
}
