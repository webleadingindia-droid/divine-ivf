// app/ivf/lit/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/lit" },
  title: "LIT — Lymphocyte Immunization Therapy in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Lymphocyte Immunization Therapy (LIT) in Sector 76, Noida — an immunological therapy for recurrent implantation failure and pregnancy loss with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "LIT therapy in Noida, Lymphocyte Immunization Therapy, immunotherapy for fertility, recurrent implantation failure treatment, recurrent pregnancy loss treatment, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, immunological fertility factors, adjuvant fertility therapy, LIT treatment",
  openGraph: {
    title: "LIT — Lymphocyte Immunization Therapy in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Lymphocyte Immunization Therapy (LIT) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — an immunological therapy considered in select fertility cases.",
    url: "https://www.divineivf.com/ivf/lit",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lymphocyte Immunization Therapy at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LitPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "LIT Therapy" },
      ]}
      eyebrow="Advanced IVF · Immunotherapy"
      titlePlain="LIT —"
      titleAccent="Lymphocyte Immunization Therapy"
      intro="Lymphocyte Immunization Therapy (LIT) is an immunological therapy considered in specific clinical situations — particularly for recurrent implantation failure or recurrent pregnancy loss where immune factors may be involved."
      heroImage="https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Immunology laboratory work for LIT therapy at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="LIT therapy preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "Lymphocyte Immunization Therapy (LIT) is an immunologically-focused treatment sometimes considered in specific, evaluated fertility contexts. It involves administering prepared lymphocytes (a type of white blood cell) from the partner (or a donor) to the patient, with the aim of modulating the immune response to support embryo implantation and early pregnancy.",
        "The theory behind LIT is based on the understanding that the immune system plays a complex role in implantation and pregnancy. In some patients, the immune system may not adequately recognise the embryo as 'acceptable' tissue, potentially leading to implantation failure or early pregnancy loss. LIT aims to help the immune system become more tolerant of the embryo.",
        "As with other immunological therapies, whether LIT is relevant to you depends entirely on your individual history and evaluation. This page is a general explanation, not a recommendation for your specific case. The decision to use LIT follows a thorough evaluation by Dr. Mandavi Rai."
      ]}
      whoNeedsIt={[
        "Patients with recurrent implantation failure (RIF) in specific evaluated contexts where immunological factors are suspected",
        "Patients with recurrent pregnancy loss (RPL) where immunological factors are being explored as a potential cause",
        "Patients who have undergone extensive fertility investigation and have been found to have immune-related issues",
        "As part of a broader, individualised treatment plan — not as a standalone therapy",
        "Patients who have not responded to other immunotherapy approaches",
        "After detailed evaluation by Dr. Rai to determine if LIT is appropriate",
      ]}
      preparation={[
        "As with other immunologically-focused therapies, LIT follows a detailed review of your history rather than being started on request. Any preparatory testing needed will be arranged and explained before the therapy itself begins.",
        "Before considering LIT, Dr. Rai reviews your fertility and pregnancy history in detail — including any previous IVF cycles, pregnancy outcomes, and relevant medical conditions. Specific immunological investigations may be recommended first to establish whether the therapy is relevant to your case.",
        "The therapy requires careful timing relative to your treatment cycle, and the preparation process is planned individually. You may need to have blood tests and other investigations before the therapy can begin."
      ]}
      howItWorks={[
        { title: "Evaluation", description: "A thorough review of your fertility and pregnancy history, including previous IVF outcomes and pregnancy losses, to establish whether LIT may be relevant." },
        { title: "Immunological Assessment", description: "Specific immunological investigations may be performed to identify potential immune factors that could be addressed with LIT." },
        { title: "Preparation", description: "Blood is taken from the partner (or a donor) to prepare the lymphocytes for administration." },
        { title: "Administration", description: "The prepared lymphocytes are administered to the patient in a clinical setting under medical supervision." },
        { title: "Treatment Monitoring", description: "The patient is monitored during and after the administration as standard practice." },
        { title: "Treatment Integration", description: "LIT is timed and integrated with your overall fertility treatment plan — typically before embryo transfer or in early pregnancy." },
      ]}
      whatToExpect="The LIT process takes place in a supervised clinical setting. The administration itself is similar to a routine blood product transfusion. You'll be monitored during and after the procedure as standard practice. Dr. Rai will walk you through what's involved and the reasoning specific to your case before proceeding. The therapy is timed to support your fertility treatment cycle, and you'll receive clear guidance on the schedule."
      benefits={[
        "Considered only after individual evaluation, not as a default step for all patients",
        "Administered under clinical supervision with proper monitoring",
        "May offer an additional approach for patients who have experienced recurrent implantation failure or recurrent pregnancy loss",
        "Can be integrated into a broader, individualised treatment plan",
        "May help modulate the immune response to support embryo implantation",
      ]}
      considerations={[
        "Relevance varies significantly by individual case — not appropriate or necessary for every patient",
        "Should follow a proper evaluation rather than be requested independently without clinical indication",
        "Discussed openly as part of a broader treatment conversation, including what is and isn't established about its role",
        "The evidence base for LIT is still evolving, and its use should be carefully considered",
        "May not be effective for all patients, and response can vary",
        "Requires careful timing and coordination with your fertility treatment cycle",
        "Costs associated with the therapy should be discussed upfront",
      ]}
      related={[
        { name: "Intralipid Therapy", href: "/ivf/intralipid", blurb: "Another adjunct therapy considered in select immunological contexts alongside LIT." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation behind these treatment decisions — the foundation of your fertility care." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The fertility treatment within which LIT may be considered as part of an individualised plan." },
      ]}
      externalResources={[
        {
          label: "Immunological Factors in Infertility",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/immunological-factors-in-infertility/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "Indian Society for Assisted Reproduction",
          source: "ISAR",
          href: "https://www.isarindia.com/",
        },
      ]}
      faqs={[
        {
          question: "Is LIT a standard part of every IVF cycle?",
          answer:
            "No — LIT is considered only in specific situations following individual evaluation. It is not a routine treatment and is only recommended when there is a clinical indication suggesting immunological factors may be involved. Dr. Rai will determine if LIT is appropriate for your specific case.",
        },
        {
          question: "How does LIT work for fertility treatment?",
          answer:
            "LIT is based on the theory that the immune system plays a role in implantation and pregnancy. In some patients, the immune system may not adequately recognise the embryo as 'acceptable' tissue. LIT aims to help the immune system become more tolerant of the embryo, potentially improving implantation and pregnancy outcomes.",
        },
        {
          question: "Is LIT therapy safe?",
          answer:
            "LIT is administered in a clinical setting under medical supervision. As with any therapy, there are potential risks and side effects that Dr. Rai will discuss with you before proceeding. The therapy should only be considered after thorough evaluation and when there's a clinical indication.",
        },
        {
          question: "What is the difference between LIT and Intralipid therapy?",
          answer:
            "Both are immunologically-focused therapies, but they work through different mechanisms. LIT involves administering prepared lymphocytes to modulate the immune response, while Intralipid is a fat emulsion thought to suppress certain immune cells. Both are considered in select cases, and the choice between them depends on your specific evaluation findings.",
        },
        {
          question: "Does LIT guarantee a successful pregnancy?",
          answer:
            "No therapy can guarantee a successful pregnancy. LIT is considered as an adjunct approach that may improve outcomes for specific patients with immunological factors. Success depends on multiple factors, and the therapy is only one part of a broader treatment plan.",
        },
        {
          question: "What tests are done before recommending LIT?",
          answer:
            "Before recommending LIT, Dr. Rai typically reviews your complete fertility and pregnancy history. Specific immunological investigations may be recommended to identify potential immune factors that could be addressed with LIT. These tests help determine whether the therapy is likely to be beneficial in your specific case.",
        },
        {
          question: "Can LIT be combined with other immunotherapies?",
          answer:
            "In some cases, LIT may be combined with other immunotherapy approaches such as Intralipid therapy or other treatments. This is determined on a case-by-case basis following a thorough evaluation. Dr. Rai will discuss the full treatment plan with you, including any combinations that may be recommended.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop"
              alt="Immunology laboratory work for LIT therapy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop"
              alt="LIT therapy preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>LIT (Lymphocyte Immunization Therapy) in Noida</strong> is offered at 
          <strong>Divine IVF, Sector 76</strong> as part of an individualised approach to 
          <strong>fertility treatment</strong> for patients where immunological factors may be 
          contributing to recurrent implantation failure or recurrent pregnancy loss.
        </p>

        <p>
          The journey to <strong>LIT therapy</strong> always begins with a comprehensive 
          <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> and detailed consultation with <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link>. Unlike standard fertility treatments, LIT is not something 
          that's recommended without thorough evaluation — it's considered only after reviewing 
          your complete history, previous treatment outcomes, and specific immunological markers.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="LIT therapy administration at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Consultation for LIT therapy with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Immunological assessment for LIT therapy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The science behind <strong>LIT</strong> is based on the understanding that the 
          immune system plays a complex and crucial role in implantation and early pregnancy. 
          The embryo is a semi-foreign body to the mother's immune system, and successful 
          pregnancy requires a delicate balance of immune tolerance. In some patients, this 
          tolerance may be inadequate, potentially contributing to implantation failure or 
          early pregnancy loss.
        </p>

        <p>
          <strong>LIT</strong> aims to address this by helping the immune system become 
          more tolerant of the embryo. The therapy involves administering prepared lymphocytes 
          (a type of white blood cell) from the partner or a donor. This is thought to help 
          modulate the immune response, potentially creating a more favourable environment 
          for embryo implantation and early pregnancy.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When Is LIT Therapy Considered?
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              After thorough evaluation including immunological testing
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              For patients with recurrent implantation failure despite good embryo quality
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              For patients with recurrent pregnancy loss where immune factors may be involved
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              As part of a comprehensive, individualised treatment plan
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Only when there is a clinical indication suggesting immunological involvement
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>LIT therapy</strong> 
          is evidence-based and transparent. Dr. Rai discusses openly with patients what is and 
          isn't established about the therapy's role in their specific case. The therapy is 
          never recommended as a standalone add-on or without proper clinical indication.
        </p>

        <p>
          The use of <strong>LIT</strong> in fertility treatment is guided by professional 
          standards and recommendations from leading organisations including the{" "}
          <a
            href="https://www.asrm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            American Society for Reproductive Medicine (ASRM)
          </a>
          , the{" "}
          <a
            href="https://www.fogsi.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            Federation of Obstetric &amp; Gynaecological Societies of India (FOGSI)
          </a>
          , and the{" "}
          <a
            href="https://www.isarindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            Indian Society for Assisted Reproduction (ISAR)
          </a>
          . Dr. Rai ensures that all treatments, including immunological therapies like LIT, 
          are supported by appropriate clinical evidence and used judiciously.
        </p>
      </div>
    </TreatmentTemplate>
  );
}