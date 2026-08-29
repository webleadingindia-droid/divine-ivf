import type { Metadata } from "next";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { Videos } from "@/components/home/Videos";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/videos" },
  title: "Videos",
  description: "Fertility guidance videos with Dr. Mandavi Rai at Divine Ivf, Sector 76, Noida.",
};

export default function VideosPage() {
  return (
    <>
      <section className="bg-bloom-gradient pt-8 pb-2">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Videos" }]} />
        </div>
      </section>
      <Videos />
      <ConsultationBanner />
    </>
  );
}
