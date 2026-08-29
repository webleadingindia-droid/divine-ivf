import type { Metadata } from "next";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page max-w-2xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="mt-6 text-3xl md:text-4xl text-ink-900 mb-8">Privacy Policy</h1>
        <div className="prose-content text-ink-400 leading-relaxed space-y-4">
          <p>
            This website is an informational, static site for Divine Women
            &amp; IVF Clinic. It does not have a backend, database or login
            system, and does not collect or store personal information
            submitted through its consultation form — that form is
            frontend-only and is not connected to any server.
          </p>
          <p>
            If you contact the clinic directly by phone, WhatsApp or email
            using the details on this site, any information you share is
            handled by the clinic directly, in line with standard medical
            confidentiality practice.
          </p>
          <p>
            If this site is later connected to a live booking or contact
            system, this policy will be updated to describe what
            information is collected and how it is used.
          </p>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={clinic.emailHref} className="text-rose-600 font-semibold">{clinic.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
