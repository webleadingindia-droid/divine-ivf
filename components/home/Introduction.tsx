import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Introduction() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-card">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/mBr4bMEVS9BL6objOuAb/image.webp"
              alt="Warm consultation room at Divine Women & IVF Clinic"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden md:block w-40 aspect-square rounded-2xl overflow-hidden shadow-lift border-4 border-white">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/ewYGCmdoK918NqSG404B/image.webp"
              alt="Care during pregnancy at the clinic"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>About Divine IVF</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900 mb-6">
            Fertility care that begins with{" "}
            <span className="font-serif italic text-rose-600">understanding</span>
          </h2>
          <p className="text-ink-400 leading-relaxed mb-4">
            Divine Women &amp; IVF Clinic was built around a simple idea: before
            recommending treatment, understand the person in front of you. Every
            consultation with Dr. Mandavi Rai starts with your history, your
            previous attempts, and what matters to you.
          </p>
          <p className="text-ink-400 leading-relaxed mb-8">
            From fertility investigation and IUI to IVF and advanced embryology
            techniques, the clinic brings together gynaecology, male fertility
            evaluation and pregnancy care under one roof in Sector 76, Noida.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-serif italic text-3xl text-rose-600">22+</p>
              <p className="text-sm text-ink-400 mt-1">Fertility &amp; women&apos;s health services</p>
            </div>
            <div>
              <p className="font-serif italic text-3xl text-rose-600">1</p>
              <p className="text-sm text-ink-400 mt-1">Doctor-led care team, start to finish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
