import Image from "next/image";

/* Galerie 3 visuels portrait 3/4 sous l'intro d'un protocole. */
export default function Gallery({
  images,
  label,
}: {
  images: { src: string; alt: string }[];
  label: string;
}) {
  return (
    <section
      aria-label={label}
      className="bg-linen px-[clamp(20px,5vw,64px)] pb-[clamp(60px,8vw,110px)]"
    >
      <div className="max-w-[1160px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(14px,1.6vw,22px)]">
        {images.map((img, i) => (
          <div
            key={img.src + i}
            data-reveal={i ? String(i * 100) : ""}
            className="relative overflow-hidden rounded-[4px] aspect-[3/4]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
