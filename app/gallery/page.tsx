import type { Metadata } from "next";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { Gallery } from "@/components/home/Gallery";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/gallery" },
  title: "Gallery",
  description: "Inside Divine Ivf, Sector 76, Noida.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-bloom-gradient pt-8 pb-2">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
        </div>
      </section>
      <Gallery />
      <ConsultationBanner />
    </>
  );
}
