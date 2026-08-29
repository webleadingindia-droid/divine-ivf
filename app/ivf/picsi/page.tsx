// app/ivf/picsi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/picsi" },
  title: "PICSI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "PICSI (Physiological ICSI) in Sector 76, Noida — sperm selection guided by nature with Dr. Mandavi Rai at Divine IVF. Learn about PICSI procedure and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "PICSI treatment in Noida, Physiological ICSI, PICSI sperm selection, hyaluronan sperm selection, male infertility treatment, IVF with PICSI, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, sperm DNA fragmentation, advanced sperm selection, ICSI",
  openGraph: {
    title: "PICSI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "PICSI (Physiological ICSI) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — sperm selection guided by nature for improved outcomes.",
    url: "https://www.divineivf.com/ivf/picsi",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "PICSI sperm selection at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PicsiPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "PICSI" },
      ]}
      eyebrow="Advanced IVF · Sperm Selection"
      titlePlain="PICSI:"
      titleAccent="selection guided by nature"
      intro="Physiological ICSI (PICSI) adds a natural selection step before injection, choosing sperm based on their ability to bind to hyaluronan — a substance also present around the egg. This physiological approach may improve outcomes in specific cases."
      heroImage="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
      heroAlt="PICSI sperm selection procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="PICSI laboratory equipment at Divine IVF Clinic, Noida"
      whatItIs={[
        "PICSI (Physiological ICSI) is an advanced sperm selection technique that adds a natural, physiological step to the standard ICSI process. It uses a specially prepared dish coated with hyaluronan — a substance naturally found around a mature egg. Mature, healthy sperm tend to bind to hyaluronan, similar to how they would need to interact with the egg's outer layer during natural fertilisation.",
        "In the PICSI procedure, prepared sperm are introduced to the hyaluronan-coated dish. Sperm that bind to the hyaluronan are identified as more mature and physiologically capable candidates. The embryologist then selects one of these bound sperm for ICSI injection into the egg.",
        "This approach adds a selection layer that mimics natural fertilisation, potentially improving the chances of selecting sperm with better DNA integrity and lower DNA fragmentation. It builds on standard ICSI rather than replacing the overall IVF process."
      ]}
      whoNeedsIt={[
        "Men with elevated sperm DNA fragmentation — where the genetic material in sperm is damaged",
        "Couples who have had previous IVF/ICSI cycles with poor embryo development despite fertilisation",
        "Men with high levels of sperm DNA damage identified through DNA fragmentation testing",
        "Cases where standard ICSI has resulted in fertilisation but poor embryo quality",
        "Men with unexplained male infertility where finer sperm selection may improve outcomes",
        "Couples who have experienced recurrent pregnancy loss where sperm DNA fragmentation may be a contributing factor",
        "Men with advanced age where sperm quality may be compromised",
      ]}
      preparation={[
        "No separate preparation is needed beyond your standard IVF cycle — PICSI is a lab-stage decision made on the day of egg retrieval, based on your semen analysis and history reviewed beforehand.",
        "If DNA fragmentation testing hasn't already been done and is relevant to your case, Dr. Rai may recommend it ahead of your cycle to help decide whether PICSI is worth considering. This test measures the percentage of sperm with damaged DNA, which can help predict whether PICSI may be beneficial.",
        "The rest of your IVF cycle — including ovarian stimulation and egg retrieval — proceeds exactly as with standard IVF. The PICSI selection happens entirely in the embryology lab after egg retrieval."
      ]}
      howItWorks={[
        { title: "Hyaluronan Dish Preparation", description: "A specialised dish is prepared with a hyaluronan-coated surface — hyaluronan is a substance naturally found around a mature egg." },
        { title: "Sperm Preparation", description: "A semen sample is processed and prepared in the lab, just like for standard ICSI." },
        { title: "Sperm Introduction", description: "Prepared sperm are introduced to the hyaluronan-coated dish and given time to interact with the surface." },
        { title: "Binding Selection", description: "Sperm that bind naturally to the hyaluronan are identified as more mature and physiologically capable candidates." },
        { title: "Injection", description: "A selected, bound sperm is used for ICSI injection into the egg — combining physiological selection with precision injection." },
        { title: "Embryo Culture", description: "Fertilised eggs are cultured and monitored as they develop into embryos over 5-6 days." },
      ]}
      whatToExpect="PICSI takes place entirely at the lab stage of an IVF cycle — the rest of your treatment (stimulation, egg retrieval, embryo transfer) proceeds as with standard IVF or ICSI. You won't notice any difference in your experience, as the selection happens behind the scenes in the embryology lab. The key difference is in the precision of sperm selection, which may improve embryo development and pregnancy outcomes in specific cases."
      benefits={[
        "Adds a natural, physiological selection layer to sperm choice — mimicking the egg's natural selection process",
        "Selects sperm with better DNA integrity and lower DNA fragmentation",
        "May improve fertilisation rates, embryo quality, and pregnancy outcomes in selected cases",
        "Particularly beneficial for men with elevated sperm DNA fragmentation",
        "Builds on standard ICSI rather than replacing the overall IVF process",
        "Provides an additional layer of quality control for sperm selection",
        "May reduce the risk of selecting sperm with chromosomal abnormalities",
      ]}
      considerations={[
        "Not every case requires or benefits from PICSI over standard ICSI — it's selected based on individual findings",
        "Suitability depends on semen analysis findings and DNA fragmentation testing results",
        "Discussed individually as part of your treatment plan — not a routine add-on for everyone",
        "Adds to the cost of an IVF cycle due to the specialised dish and additional lab work",
        "The clinical benefit may vary depending on the specific cause of male infertility",
        "Requires an experienced embryologist to perform the selection correctly",
      ]}
      related={[
        { name: "ICSI Treatment", href: "/ivf/icsi", blurb: "The base technique that PICSI builds upon — sperm injection into the egg." },
        { name: "IMSI", href: "/ivf/imsi", blurb: "High-magnification sperm selection — an alternative approach to PICSI." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Understanding the male-factor evaluation behind the decision to use PICSI." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The complete IVF process within which PICSI is performed." },
      ]}
      externalResources={[
        {
          label: "Intracytoplasmic Sperm Injection (ICSI)",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/intracytoplasmic-sperm-injection-icsi/",
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
          question: "Is PICSI better than standard ICSI?",
          answer:
            "PICSI isn't universally 'better' than standard ICSI — it's a selection method suited to specific findings. In cases of elevated sperm DNA fragmentation or previous cycles with poor embryo development, PICSI may offer advantages. Dr. Rai will discuss whether PICSI is appropriate for your specific situation based on your semen analysis and history.",
        },
        {
          question: "What is the difference between PICSI and IMSI?",
          answer:
            "PICSI selects sperm based on their ability to bind to hyaluronan (a substance found around the egg) — a physiological selection method that mimics natural fertilisation. IMSI uses very high magnification (over 6,000x) to examine sperm structure in fine detail. They are different approaches to sperm selection, and both can be used depending on the specific case.",
        },
        {
          question: "Does PICSI cost more than ICSI?",
          answer:
            "As an additional selection step, PICSI can involve additional cost due to the specialised hyaluronan-coated dishes and the extra lab work required. Dr. Rai will discuss the costs and benefits with you so you can make an informed decision about whether PICSI is right for your situation.",
        },
        {
          question: "How does PICSI work to select better sperm?",
          answer:
            "PICSI uses a dish coated with hyaluronan, a substance naturally found around a mature egg. Mature, healthy sperm tend to bind to hyaluronan, similar to how they would interact with the egg's outer layer naturally. Sperm that bind are identified as more mature and physiologically capable, and one is selected for ICSI injection.",
        },
        {
          question: "Who is PICSI recommended for?",
          answer:
            "PICSI is typically recommended for men with elevated sperm DNA fragmentation, couples who have had previous IVF/ICSI cycles with poor embryo development, or cases where finer sperm selection may improve outcomes. Dr. Rai will discuss whether PICSI is appropriate for your specific case based on your evaluation results.",
        },
        {
          question: "Can PICSI improve pregnancy rates?",
          answer:
            "Studies suggest that PICSI may improve pregnancy rates in specific patient populations — particularly those with elevated sperm DNA fragmentation. However, the evidence is not conclusive for all patients, and the benefit varies depending on individual factors. Dr. Rai can help determine if PICSI may be beneficial for your specific situation.",
        },
        {
          question: "Is PICSI used with ICSI or IVF?",
          answer:
            "PICSI is used with ICSI — it's a sperm selection step that occurs before the ICSI injection. The PICSI selection process identifies mature, physiologically capable sperm, which are then injected into the eggs using the standard ICSI technique.",
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
          <strong>PICSI treatment in Noida</strong> represents an innovative approach to sperm 
          selection that mimics nature`s own quality control process. At <strong>Divine IVF, 
          Sector 76</strong>, <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> offers this advanced <strong>sperm selection</strong> technique 
          for patients where standard <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">
          ICSI</Link> may not be sufficient.
        </p>

        <p>
          The science behind <strong>PICSI</strong> is based on the natural process of fertilisation. 
          In nature, sperm must bind to the zona pellucida (the outer layer of the egg) before 
          fertilisation can occur. Hyaluronan is a key component of this binding process. Sperm 
          that can bind to hyaluronan are more mature and have better DNA integrity — they`re 
          the sperm that would naturally have the best chance of achieving fertilisation.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Sperm preparation for PICSI at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="PICSI consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Sperm DNA fragmentation testing for PICSI candidacy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>PICSI</strong> is particularly valuable for men with elevated sperm DNA 
          fragmentation — a condition where the genetic material in sperm is damaged. 
          <strong>DNA fragmentation</strong> can affect fertilisation, embryo development, 
          and pregnancy outcomes. By selecting sperm that bind to hyaluronan, <strong>PICSI</strong> 
          may help identify sperm with better DNA integrity and lower fragmentation.
        </p>

        <p>
          The decision to use <strong>PICSI</strong> is typically based on a combination of 
          factors including <Link href="/male-infertility" className="text-rose-600 font-semibold hover:underline">
          male fertility evaluation</Link> results, <strong>semen analysis</strong> findings, 
          and, where indicated, <strong>DNA fragmentation testing</strong>. Dr. Rai will review 
          your complete fertility history and previous treatment outcomes to determine whether 
          <strong>PICSI</strong> offers a meaningful advantage over standard <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">
          ICSI</Link> for your specific situation.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When Is PICSI Recommended?
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Elevated sperm DNA fragmentation identified through testing
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous ICSI cycles with poor embryo development despite fertilisation
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Men with high levels of sperm DNA damage from any cause
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Couples with recurrent pregnancy loss where sperm quality may be a factor
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Cases where standard ICSI selection may not be sufficient
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>PICSI</strong> 
          is evidence-based and personalised. Dr. Rai ensures that this advanced technique is 
          offered only when there`s a clinical indication suggesting it may be beneficial — 
          never as a routine add-on without proper evaluation.
        </p>

        <p>
          The use of <strong>PICSI</strong> in <strong>fertility treatment</strong> is supported 
          by guidelines from leading organisations including the{" "}
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
          . This ensures your <strong>fertility treatment</strong> is supported by the latest 
          clinical evidence and best practices in sperm selection.
        </p>
      </div>
    </TreatmentTemplate>
  );
}