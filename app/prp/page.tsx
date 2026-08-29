// app/prp/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/prp" },
  title: "PRP for Fertility in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "PRP (Platelet Rich Plasma) therapy for fertility in Sector 76, Noida — an individualised approach with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "PRP for fertility in Noida, Platelet Rich Plasma therapy, PRP treatment, ovarian rejuvenation, thin endometrium treatment, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, PRP fertility, growth factor therapy, reproductive health",
  openGraph: {
    title: "PRP for Fertility in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "PRP (Platelet Rich Plasma) therapy for fertility with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — an individualised approach using your own blood.",
    url: "https://www.divineivf.com/prp",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "PRP therapy preparation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PrpPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/gynecology" },
        { label: "PRP Therapy" },
      ]}
      eyebrow="Reproductive Procedures · Noida"
      titlePlain="PRP —"
      titleAccent="Platelet Rich Plasma"
      intro="Platelet Rich Plasma (PRP) is used in select fertility contexts as part of an individualised plan, prepared from your own blood sample — offering a personalised approach to reproductive health."
      heroImage="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
      heroAlt="PRP therapy preparation at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Blood sample processing for PRP therapy at Divine IVF Clinic, Noida"
      whatItIs={[
        "PRP (Platelet Rich Plasma) is a therapy prepared from your own blood. A small blood sample is drawn and processed in a laboratory to concentrate platelets, which contain growth factors and other bioactive proteins. In fertility care, PRP has been explored in specific, individually evaluated contexts — such as ovarian rejuvenation or improving endometrial thickness.",
        "The concentrated platelets are rich in growth factors that may support tissue regeneration and healing. In reproductive medicine, this has led to interest in using PRP to potentially improve ovarian function or enhance the uterine environment for implantation.",
        "PRP is prepared from your own blood, making it an autologous therapy. Its use is considered case by case, based on your history and findings, and discussed openly regarding what is and isn't established for your situation."
      ]}
      whoNeedsIt={[
        "Specific findings identified during fertility evaluation where PRP may be relevant, discussed individually with Dr. Rai",
        "Patients with thin endometrium that hasn't responded to standard treatment approaches",
        "Patients with diminished ovarian reserve where ovarian rejuvenation is being considered",
        "Patients with premature ovarian insufficiency (POI) where PRP may be explored",
        "As part of a broader plan alongside other investigations and treatment — not as a standalone therapy",
        "Patients who have been thoroughly evaluated and have specific indications for PRP",
      ]}
      preparation={[
        "PRP starts with a routine blood draw, similar to a standard blood test — no special preparation is usually required beforehand, though Dr. Rai will confirm any specific instructions relevant to your planned procedure.",
        "If you're having PRP as part of a fertility treatment cycle, the timing of the procedure will be coordinated with your overall treatment plan. Dr. Rai will advise on the best timing for your specific situation.",
        "You should inform the clinic of any medications you're taking, particularly blood thinners, as these may affect the PRP preparation or the procedure itself."
      ]}
      howItWorks={[
        { title: "Blood Draw", description: "A small blood sample is taken from your arm, similar to a routine blood test. The process is quick and well-tolerated." },
        { title: "Laboratory Processing", description: "The blood sample is processed in a centrifuge to separate and concentrate the platelets, creating the PRP preparation." },
        { title: "Preparation", description: "The concentrated PRP is prepared for administration. The entire process from blood draw to prepared PRP typically takes about 30-45 minutes." },
        { title: "Administration", description: "The prepared PRP is administered as part of your planned procedure — which may involve intrauterine infusion, ovarian injection, or another approach depending on your specific case." },
        { title: "Follow-Up", description: "Timing and follow-up are coordinated with your overall treatment plan. Dr. Rai will explain what to expect and when." },
      ]}
      whatToExpect="Because PRP is prepared from your own blood, the process starts with a straightforward blood draw — similar to having blood taken for a routine test. The blood is then processed in the lab while you wait. The PRP is then administered as part of your planned procedure. Dr. Rai will explain the specific administration process relevant to your case, whether that involves intrauterine infusion, ovarian injection, or another approach. The entire process is performed in a clinical setting under medical supervision."
      benefits={[
        "Uses your own blood sample, prepared in a controlled process — no risk of transmission of infectious diseases or allergic reactions",
        "Contains concentrated growth factors that may support tissue regeneration and healing",
        "Considered only after individual evaluation — never recommended without proper clinical indication",
        "Minimally invasive with no incisions required",
        "Can be integrated into a broader, individualised fertility treatment plan",
        "Autologous therapy with low risk of adverse reactions",
      ]}
      considerations={[
        "Not appropriate or established for every situation — discussed individually based on your specific findings",
        "Should follow a proper evaluation rather than be requested as a standalone option without clinical indication",
        "Outcomes vary by individual case and are not guaranteed — the evidence base is still evolving",
        "The mechanism of action is not fully understood, and research is ongoing",
        "Multiple treatments may be needed in some cases",
        "Costs associated with the therapy should be discussed upfront",
        "Not all patients will be suitable candidates for PRP therapy",
      ]}
      related={[
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation that informs whether PRP is relevant to your specific situation." },
        { name: "Gynecology Care", href: "/gynecology", blurb: "Broader women's health care alongside fertility treatment — the foundation of reproductive health." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The core fertility treatment that PRP may be considered alongside as an adjunct therapy." },
        { name: "Hysteroscopy", href: "/hysteroscopy", blurb: "A uterine evaluation procedure that may be performed alongside PRP therapy." },
      ]}
      externalResources={[
        {
          label: "Platelet-Rich Plasma in Reproductive Medicine",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/",
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
          question: "Is PRP a standalone fertility treatment?",
          answer:
            "No — PRP is considered as part of a broader, individualised plan following proper evaluation, not as a treatment on its own. It's explored in specific contexts where there may be a clinical indication, such as thin endometrium or diminished ovarian reserve.",
        },
        {
          question: "How does PRP work for fertility?",
          answer:
            "PRP contains concentrated growth factors that may support tissue regeneration and healing. In fertility, it's explored for potential benefits in ovarian function or endometrial thickness. The exact mechanism is still being researched, and outcomes vary by individual case.",
        },
        {
          question: "Is PRP safe?",
          answer:
            "PRP is prepared from your own blood, which minimises the risk of allergic reactions or transmission of infectious diseases. It's administered in a clinical setting under medical supervision. As with any procedure, there are potential risks that Dr. Rai will discuss with you before proceeding.",
        },
        {
          question: "What conditions might PRP be used for in fertility?",
          answer:
            "PRP has been explored for thin endometrium (to improve thickness), diminished ovarian reserve (to potentially improve ovarian function), and premature ovarian insufficiency (POI). Its use is based on individual evaluation and specific clinical indications.",
        },
        {
          question: "How is PRP prepared?",
          answer:
            "A small blood sample is taken from your arm. The blood is then processed in a centrifuge to separate and concentrate the platelets, creating the PRP preparation. The entire process typically takes about 30-45 minutes.",
        },
        {
          question: "Is PRP painful?",
          answer:
            "The blood draw is similar to a routine blood test and is typically well-tolerated. The administration process depends on the specific procedure — Dr. Rai will explain what to expect and discuss pain management options if needed.",
        },
        {
          question: "How many PRP treatments might I need?",
          answer:
            "The number of treatments varies based on your specific situation and response. Some patients may have a single treatment, while others may need multiple treatments. Dr. Rai will discuss the recommended plan for your individual case.",
        },
        {
          question: "Does PRP guarantee pregnancy?",
          answer:
            "No therapy can guarantee pregnancy. PRP is considered as an adjunct approach that may support reproductive health in specific cases. Success depends on multiple factors, and PRP is only one part of a broader treatment plan.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Blood test for hormonal assessment during fertility investigation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan during fertility evaluation at Divine IVF Clinic in Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>PRP therapy for fertility in Noida</strong> is offered at <strong>Divine IVF, 
          Sector 76</strong> as a personalised, individualised approach to reproductive health. 
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> considers PRP only after thorough evaluation and when specific 
          clinical indications suggest it may be beneficial.
        </p>

        <p>
          <strong>PRP (Platelet Rich Plasma)</strong> is an autologous therapy — meaning it`s 
          prepared from your own blood. A small blood sample is drawn and processed in a 
          laboratory to concentrate platelets, which contain growth factors and other bioactive 
          proteins that may support tissue regeneration and healing.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="PRP preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="PRP consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="PRP administration at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          In reproductive medicine, <strong>PRP</strong> has been explored in several specific 
          contexts:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>Thin Endometrium</strong> — PRP may help improve endometrial thickness in women who haven`t responded to standard treatment
          </li>
          <li>
            <strong>Diminished Ovarian Reserve</strong> — PRP has been explored for potential ovarian rejuvenation
          </li>
          <li>
            <strong>Premature Ovarian Insufficiency (POI)</strong> — PRP may be considered in select cases
          </li>
          <li>
            <strong>Repeated Implantation Failure</strong> — PRP may be explored to improve the uterine environment
          </li>
        </ul>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When PRP May Be Considered in Fertility Care
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Thin endometrium not responding to standard hormonal treatment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Diminished ovarian reserve where ovarian function may be supported
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Premature ovarian insufficiency (POI) in select cases
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Recurrent implantation failure where uterine factors are suspected
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Following thorough evaluation and when there`s a clinical indication
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>PRP therapy</strong> 
          is evidence-based and transparent. Dr. Rai discusses openly with patients what is and 
          isn`t established about the therapy`s role in their specific case. The therapy is 
          never recommended as a standalone add-on or without proper clinical indication.
        </p>

        <p>
          The use of <strong>PRP</strong> in fertility treatment is guided by professional 
          standards and ongoing research from leading organisations including the{" "}
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
          . Dr. Rai ensures that all treatments, including adjunct therapies like PRP, are 
          supported by appropriate clinical evidence and used judiciously.
        </p>
      </div>
    </TreatmentTemplate>
  );
}