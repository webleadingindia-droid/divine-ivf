import type { Metadata } from "next";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { Testimonials } from "@/components/home/Testimonials";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/testimonials" },
  title: "Testimonials",
  description: "Patient experiences shared about care at Divine Ivf, Sector 76, Noida.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-white pt-8 pb-2">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
        </div>
      </section>
      <Testimonials />
      <ConsultationBanner />
    </>
  );
}
