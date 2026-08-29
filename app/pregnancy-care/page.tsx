import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  alternates: { canonical: "/pregnancy-care" },
  title: "Pregnancy Care in Noida",
  description: "Obstetric care through pregnancy, labour and delivery with Dr. Mandavi Rai at Divine Ivf, Sector 76, Noida.",
};

const stages = [
  { title: "Early Pregnancy", text: "Confirming and monitoring the early stages, including dating scans." },
  { title: "Routine Monitoring", text: "Regular obstetric ultrasound and check-ups through each trimester." },
  { title: "Birth Planning", text: "Discussing delivery options and preferences as your due date approaches." },
  { title: "Delivery", text: "Support through normal vaginal delivery or caesarean delivery, as appropriate." },
];

export default function PregnancyCarePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Pregnancy Care" }]}
        eyebrow="Pregnancy Care"
        title={<>Care through <span className="font-serif italic text-rose-600">every stage</span></>}
        intro="Whether your pregnancy followed fertility treatment or not, Dr. Rai provides ongoing obstetric care from early pregnancy through delivery."
        image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Pregnancy care consultation"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-page">
          <SectionLabel>Your Care Timeline</SectionLabel>
          <h2 className="mt-5 text-2xl md:text-3xl text-ink-900 mb-10 max-w-xl">A steady presence from early pregnancy to delivery</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-5 h-px bg-rose-400/40" aria-hidden="true" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stages.map((s, i) => (
                <div key={s.title} className="relative">
                  <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-rose-500 text-rose-600 text-sm font-semibold shadow-soft">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-ink-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-ink-400 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bloom-50 py-14 md:py-20">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl text-ink-900 mb-8">Explore delivery & monitoring care</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { name: "Obstetric Ultrasound", href: "/obstetric-ultrasound", blurb: "Monitoring your baby's growth and wellbeing." },
              { name: "Normal Vaginal Delivery", href: "/normal-delivery", blurb: "Supported, physiological delivery care." },
              { name: "Cesarean Delivery", href: "/cesarean-delivery", blurb: "Planned and emergency caesarean care." },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="group rounded-2xl bg-white border border-bloom-border p-6 hover:shadow-card hover:border-rose-200 transition-all">
                <h3 className="text-sm font-semibold text-ink-900 mb-2">{p.name}</h3>
                <p className="text-xs text-ink-400 leading-relaxed mb-4">{p.blurb}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
