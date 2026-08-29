// app/lit-therapy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/lit-therapy" },
  title: "LIT Therapy — Ovary & Uterus in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Targeted LIT (Lymphocyte Immunization Therapy) applications for ovarian and uterine care in Sector 76, Noida with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "LIT therapy ovary uterus, targeted LIT, ovarian immunotherapy, uterine immunotherapy, recurrent implantation failure, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, immunological fertility therapy, ovarian health, uterine health",
  openGraph: {
    title: "LIT Therapy — Ovary & Uterus in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Targeted LIT (Lymphocyte Immunization Therapy) for ovarian and uterine care with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida.",
    url: "https://www.divineivf.com/lit-therapy",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "LIT Therapy clinical procedure at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LitTherapyPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/gynecology" },
        { label: "LIT — Ovary & Uterus" },
      ]}
      eyebrow="Reproductive Procedures · Noida"
      titlePlain="LIT Therapy —"
      titleAccent="Ovary & Uterus"
      intro="A more targeted application of Lymphocyte Immunization Therapy (LIT), considered for specific ovarian or uterine findings identified during fertility evaluation — offering a focused approach to immunological factors affecting reproductive health."
      heroImage="https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop"
      heroAlt="LIT Therapy clinical procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Immunology laboratory work for LIT Therapy at Divine IVF Clinic, Noida"
      whatItIs={[
        "LIT Therapy — Ovary & Uterus is a more targeted application of Lymphocyte Immunization Therapy (LIT), considered specifically in relation to ovarian or uterine findings identified during fertility evaluation. This focused approach aims to address immunological factors that may be affecting ovarian function or uterine receptivity.",
        "The therapy involves administering prepared lymphocytes (a type of white blood cell) to modulate the immune response in a way that specifically supports ovarian health and uterine function. This is distinct from the broader use of LIT in fertility care, as it targets findings localised to the ovaries or uterus.",
        "As with any immunologically-focused therapy, its relevance depends entirely on your individual evaluation and history. This therapy is considered only after thorough investigation by Dr. Mandavi Rai and is never recommended without proper clinical indication."
      ]}
      whoNeedsIt={[
        "Patients with specific ovarian findings identified during fertility evaluation — such as premature ovarian insufficiency (POI) or diminished ovarian reserve where immunological factors may be involved",
        "Patients with specific uterine findings — such as thin endometrium or recurrent implantation failure where immune factors are suspected",
        "Patients who have undergone extensive fertility investigation and have been found to have immune-related issues affecting the ovaries or uterus",
        "As part of a broader, individualised fertility plan — not as a standalone therapy",
        "Patients who have not responded to other immunotherapy approaches",
        "After detailed evaluation by Dr. Rai to determine if this targeted LIT therapy is appropriate",
      ]}
      preparation={[
        "This targeted application follows directly from findings in your fertility evaluation, so preparation largely involves completing that evaluation first. Dr. Rai will explain any further preparatory steps specific to your findings.",
        "Before considering LIT Therapy — Ovary & Uterus, Dr. Rai reviews your fertility and pregnancy history in detail, including any previous IVF cycles, ovarian response, and uterine assessment findings. Specific immunological investigations may be recommended first to establish whether the therapy is relevant to your case.",
        "The therapy requires careful timing relative to your treatment cycle, and the preparation process is planned individually. You may need to have blood tests and other investigations before the therapy can begin."
      ]}
      howItWorks={[
        { title: "Evaluation", description: "A thorough review of your specific ovarian and uterine findings from fertility investigation, including hormonal levels, ovarian reserve, and uterine health." },
        { title: "Immunological Assessment", description: "Specific immunological investigations may be performed to identify potential immune factors affecting ovarian or uterine function." },
        { title: "Preparation", description: "Blood is taken from the partner (or a donor) to prepare the lymphocytes for administration, with the therapy targeted to ovarian or uterine findings." },
        { title: "Administration", description: "The prepared lymphocytes are administered to the patient in a clinical setting under medical supervision." },
        { title: "Treatment Monitoring", description: "The patient is monitored during and after administration as standard practice." },
        { title: "Treatment Integration", description: "The therapy is timed and integrated with your overall fertility treatment plan to specifically support ovarian function or uterine receptivity." },
      ]}
      whatToExpect="Dr. Rai will explain the specific reasoning and process for your case, since this therapy is considered only after individual evaluation. The administration itself is similar to a routine blood product transfusion, performed in a clinical setting under medical supervision. You'll be monitored during and after the procedure. The therapy is timed to support your fertility treatment cycle, and you'll receive clear guidance on the schedule and what to expect."
      benefits={[
        "Targeted to specific ovarian or uterine findings — not used as a general default therapy",
        "Administered under clinical supervision with proper monitoring",
        "May offer an additional approach for patients with immunological factors affecting ovarian function or uterine receptivity",
        "Can be integrated into a broader, individualised treatment plan",
        "Focused approach that addresses specific reproductive health concerns",
      ]}
      considerations={[
        "Relevance varies significantly by individual case — not appropriate for every patient",
        "Should follow a proper evaluation, not be requested independently without clinical indication",
        "The evidence base for targeted LIT applications is still evolving and should be carefully considered",
        "May not be effective for all patients, and response can vary",
        "Requires careful timing and coordination with your fertility treatment cycle",
        "Costs associated with the therapy should be discussed upfront",
      ]}
      related={[
        { name: "LIT Therapy", href: "/ivf/lit", blurb: "The broader immunological therapy that this targeted application builds upon." },
        { name: "Gynecology Care", href: "/gynecology", blurb: "General women's health evaluation and care — the foundation of reproductive health." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation process behind this decision — identifying ovarian and uterine findings." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The fertility treatment within which this targeted LIT may be considered." },
        { name: "Intralipid Therapy", href: "/ivf/intralipid", blurb: "Another immunological adjunct sometimes considered alongside LIT." },
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
          question: "How is this different from the general LIT page?",
          answer:
            "This describes a more targeted application specifically related to ovarian or uterine findings, while the general LIT page covers its broader use in fertility care. This focused approach addresses specific findings in the ovaries or uterus identified during fertility investigation.",
        },
        {
          question: "What ovarian findings might indicate LIT Therapy?",
          answer:
            "Ovarian findings that might indicate targeted LIT include premature ovarian insufficiency (POI), diminished ovarian reserve where immunological factors are suspected, or poor ovarian response in previous IVF cycles. Dr. Rai will determine if this therapy is appropriate based on your specific evaluation.",
        },
        {
          question: "What uterine findings might indicate LIT Therapy?",
          answer:
            "Uterine findings that might indicate targeted LIT include thin endometrium that doesn't respond to standard treatment, recurrent implantation failure where immune factors are suspected, or other uterine factors affecting receptivity. Dr. Rai will evaluate your specific situation.",
        },
        {
          question: "How does targeted LIT work for ovarian and uterine health?",
          answer:
            "Targeted LIT aims to modulate the immune response specifically to support ovarian function and uterine receptivity. The therapy may help address immunological factors that could be affecting egg quality, ovarian response, or the uterine environment for implantation.",
        },
        {
          question: "Is this therapy suitable for everyone with ovarian or uterine issues?",
          answer:
            "No — this therapy is considered only for specific cases where immunological factors are suspected to be contributing to ovarian or uterine findings. It's not a treatment for all ovarian or uterine conditions. Dr. Rai will determine if it's appropriate for your specific situation.",
        },
        {
          question: "What tests are done before recommending targeted LIT?",
          answer:
            "Before recommending targeted LIT, Dr. Rai reviews your complete fertility evaluation, including ovarian reserve testing (AMH, AFC), hormonal assessment, uterine evaluation (ultrasound, hysteroscopy), and any previous treatment outcomes. Specific immunological investigations may also be recommended.",
        },
        {
          question: "Can targeted LIT be combined with other immunotherapies?",
          answer:
            "In some cases, targeted LIT may be combined with other immunotherapy approaches such as Intralipid therapy. This is determined on a case-by-case basis following a thorough evaluation. Dr. Rai will discuss the full treatment plan with you, including any combinations that may be recommended.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop"
              alt="LIT Therapy clinical procedure at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop"
              alt="Immunology laboratory work for LIT Therapy at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>LIT Therapy — Ovary & Uterus</strong> is offered at <strong>Divine IVF, 
          Sector 76, Noida</strong> as a targeted immunologically-focused therapy for patients 
          with specific ovarian or uterine findings identified during <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link>. This focused approach aims to address immunological 
          factors that may be affecting ovarian function or uterine receptivity.
        </p>

        <p>
          The immune system plays a complex and crucial role in reproductive health. In some 
          patients, immune factors may contribute to ovarian issues (such as diminished ovarian 
          reserve or poor response to stimulation) or uterine issues (such as thin endometrium 
          or recurrent implantation failure). <strong>Targeted LIT</strong> is designed to 
          address these specific concerns.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="LIT Therapy preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Consultation for LIT Therapy with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Ovarian and uterine assessment for LIT Therapy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The journey to <strong>targeted LIT Therapy</strong> always begins with a comprehensive 
          evaluation. Dr. Rai reviews your fertility history, ovarian reserve testing (AMH, AFC), 
          hormonal assessment, uterine evaluation (ultrasound, <Link href="/hysteroscopy" className="text-rose-600 font-semibold hover:underline">
          hysteroscopy</Link>), and any previous treatment outcomes. This thorough approach 
          ensures that the therapy is only considered when there`s a clinical indication that 
          immunological factors may be involved.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Ovarian and Uterine Findings That May Indicate Targeted LIT
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Premature ovarian insufficiency (POI) where immunological factors are suspected
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Diminished ovarian reserve with immune involvement
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Poor ovarian response in previous IVF cycles
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Thin endometrium not responding to standard treatment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Recurrent implantation failure where uterine immune factors are suspected
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Other uterine factors affecting receptivity with immune involvement
            </li>
          </ul>
        </div>

        <p>
          The science behind <strong>targeted LIT</strong> is based on the understanding that 
          the immune system influences both ovarian function and uterine receptivity. By 
          modulating the immune response specifically in relation to the ovaries or uterus, 
          the therapy aims to create a more favourable environment for egg development, 
          ovulation, and implantation.
        </p>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>targeted 
          LIT Therapy</strong> is evidence-based and transparent. Dr. Rai discusses openly 
          with patients what is and isn`t established about the therapy`s role in their 
          specific case. The therapy is never recommended as a standalone add-on or without 
          proper clinical indication.
        </p>

        <p>
          The use of <strong>targeted LIT</strong> in fertility treatment is guided by 
          professional standards and recommendations from leading organisations including 
          the{" "}
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
          . Dr. Rai ensures that all treatments, including targeted immunological therapies, 
          are supported by appropriate clinical evidence and used judiciously.
        </p>
      </div>
    </TreatmentTemplate>
  );
}