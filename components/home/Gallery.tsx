import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Placeholder imagery — replace with real clinic photography before launch.
const images = [
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/KRcG7smtahfq6fGxmU7l/image.webp", alt: "Clinic waiting area", tall: true },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/2H3dM9zeubWw6ORVUYMY/image.webp", alt: "Consultation room" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/J2l5Zskar7c6qhYlNq4B/image.webp", alt: "Clinic reception" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/01cWnsENvI7stQNt9iIu/image.webp", alt: "Medical equipment", tall: true },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/N2uY2EqWGc7MAZjsQnBH/image.webp", alt: "Clinical corridor" },
  { src: "https://plain-apac-prod-public.komododecks.com/202608/13/Fjwy4vn5ZRwAtHW5IPdy/image.webp", alt: "Clinical corridor" },
];

export function Gallery() {
  return (
    <section className="bg-bloom-50 py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">Gallery</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Inside <span className="font-serif italic text-rose-600">Divine IVF</span>
          </h2>
          <p className="text-sm text-ink-400 mt-3">Representative imagery — clinic photography to be added.</p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`relative mb-4 w-full overflow-hidden rounded-2xl break-inside-avoid shadow-card group ${
                img.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
