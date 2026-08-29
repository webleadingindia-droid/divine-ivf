import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { ServicePathways } from "@/components/home/ServicePathways";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/fertility" },
  title: "Fertility Care in Noida",
  description: "Fertility investigation, IVF, IUI and egg donor pathways with Dr. Mandavi Rai at Divine Ivf, Sector 76, Noida.",
};

export default function FertilityHubPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Fertility Care" }]}
        eyebrow="Fertility Care"
        title={<>Every fertility pathway, <span className="font-serif italic text-rose-600">under one roof</span></>}
        intro="From the first investigation to advanced IVF and donor egg pathways, fertility care at Divine IVF starts with understanding your specific situation."
        image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Fertility consultation"
      />
      <ServicePathways />
      <ConsultationBanner />
    </>
  );
}
