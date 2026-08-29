import type { Metadata } from "next";
import { Breadcrumb } from "@/components/page/Breadcrumb";

export const metadata: Metadata = { title: "Medical Disclaimer", alternates: { canonical: "/medical-disclaimer" } };

export default function MedicalDisclaimerPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page max-w-2xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medical Disclaimer" }]} />
        <h1 className="mt-6 text-3xl md:text-4xl text-ink-900 mb-8">Medical Disclaimer</h1>
        <div className="prose-content text-ink-400 leading-relaxed space-y-4">
          <p>
            The information on this website, including descriptions of
            fertility, gynaecological and pregnancy-related treatments, is
            provided for general educational purposes only. It is not
            medical advice and should not be treated as a diagnosis,
            prognosis or guarantee of any outcome.
          </p>
          <p>
            Fertility treatment outcomes vary by individual, and no
            treatment — including IVF, IUI or any advanced fertility
            procedure — can guarantee pregnancy or a successful outcome.
            Any figures, timelines or processes described are general in
            nature and may differ from your own treatment plan.
          </p>
          <p>
            Please consult Dr. Mandavi Rai or another qualified healthcare
            professional before making any decisions about your fertility,
            gynaecological or pregnancy care.
          </p>
        </div>
      </div>
    </section>
  );
}
