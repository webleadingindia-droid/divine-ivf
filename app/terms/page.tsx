import type { Metadata } from "next";
import { Breadcrumb } from "@/components/page/Breadcrumb";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page max-w-2xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
        <h1 className="mt-6 text-3xl md:text-4xl text-ink-900 mb-8">Terms of Use</h1>
        <div className="prose-content text-ink-400 leading-relaxed space-y-4">
          <p>
            This website provides general information about Divine Women
            &amp; IVF Clinic and Dr. Mandavi Rai&apos;s practice. It is
            intended to help you understand the services offered and how to
            get in touch — it is not a substitute for a medical
            consultation.
          </p>
          <p>
            Content on this site should not be used to self-diagnose or
            self-treat any condition. Always consult Dr. Rai or another
            qualified medical professional for advice specific to your
            situation.
          </p>
          <p>
            The clinic makes reasonable efforts to keep information on this
            site accurate, but details such as services offered may change
            over time. Please confirm current details by contacting the
            clinic directly.
          </p>
        </div>
      </div>
    </section>
  );
}
