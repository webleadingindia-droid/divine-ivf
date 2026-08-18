import Image from "next/image";
import { Breadcrumb, type Crumb } from "@/components/page/Breadcrumb";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
};

// A calmer, image-supported hero used across treatment / info pages —
// distinct from the homepage hero so inner pages don't feel repetitive.
export function PageHero({ crumbs, eyebrow, title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="bg-bloom-gradient">
      <div className="container-page pt-8 pb-16 md:pb-20">
        <Breadcrumb items={crumbs} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12] text-ink-900 mb-5">{title}</h1>
            <p className="text-ink-400 leading-relaxed max-w-xl mb-8">{intro}</p>
            <Button href="/consultation">Book Consultation</Button>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 90vw, 520px" className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
