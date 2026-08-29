// app/ivf/imsi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/imsi" },
  title: "IMSI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "IMSI (Intracytoplasmic Morphologically Selected Sperm Injection) in Sector 76, Noida — high-magnification sperm selection with Dr. Mandavi Rai at Divine IVF. Learn about IMSI procedure and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "IMSI treatment in Noida, Intracytoplasmic Morphologically Selected Sperm Injection, high-magnification sperm selection, IMSI procedure, male infertility treatment, IVF with IMSI, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, advanced sperm selection, ICSI, male factor infertility treatment",
  openGraph: {
    title: "IMSI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "IMSI (high-magnification sperm selection) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — a closer look at sperm structure for severe male-factor infertility.",
    url: "https://www.divineivf.com/ivf/imsi",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "IMSI high-magnification sperm selection at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ImsiPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "IMSI" },
      ]}
      eyebrow="Advanced IVF · Embryology"
      titlePlain="IMSI:"
      titleAccent="a closer look at sperm structure"
      intro="Intracytoplasmic Morphologically Selected Sperm Injection (IMSI) uses very high magnification to examine sperm structure in fine detail before selection for injection — offering a more precise approach for severe male-factor infertility."
      heroImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      heroAlt="High-magnification microscope for IMSI procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Embryologist performing high-magnification sperm selection for IMSI at Divine IVF"
      whatItIs={[
        "IMSI (Intracytoplasmic Morphologically Selected Sperm Injection) is an advanced laboratory technique that takes sperm selection to a new level of precision. While standard ICSI examines sperm under magnification of approximately 200 to 400 times, IMSI uses significantly higher magnification — often over 6,000 times — allowing the embryologist to examine the fine structural details of the sperm head in unprecedented detail.",
        "This ultra-high magnification reveals subtle abnormalities in sperm structure that would be invisible at standard magnification. Vacuoles (small cavities) in the sperm head, abnormal nuclear shape, and other structural irregularities can be identified and avoided when selecting sperm for injection. The goal is to choose a sperm with the most typical internal structure possible, which may improve fertilisation and embryo development outcomes.",
        "IMSI builds on the foundation of ICSI — it's not a different treatment but rather a refinement of the sperm selection process within an IVF/ICSI cycle. The rest of the IVF process, from stimulation to embryo transfer, remains the same."
      ]}
      whoNeedsIt={[
        "Men with severe male-factor infertility where standard ICSI may not be sufficient",
        "Couples who have undergone repeated IVF or ICSI cycles without expected fertilisation or pregnancy outcomes",
        "Men with specific structural sperm abnormalities identified on detailed semen analysis",
        "Cases where previous ICSI cycles have resulted in poor embryo quality despite fertilisation",
        "Men with high levels of DNA fragmentation in sperm, where selecting structurally normal sperm may be beneficial",
        "Couples where previous IVF cycles have shown a pattern of fertilisation failure or poor embryo development",
      ]}
      preparation={[
        "IMSI is a lab-stage refinement within an existing IVF/ICSI cycle, so there's no separate preparation beyond your standard ovarian stimulation and monitoring schedule. The same egg retrieval process applies, and the female partner's experience is identical to a standard IVF cycle.",
        "Because IMSI is typically considered after a previous cycle, Dr. Rai will review what happened in earlier attempts alongside your semen analysis results to decide whether IMSI is a reasonable next step for your specific situation.",
        "For the male partner, the same preparation applies as for standard ICSI — providing a fresh semen sample on the day of egg retrieval, or undergoing surgical sperm retrieval if needed. The sample is processed in the lab, and sperm are then examined under high magnification for selection."
      ]}
      howItWorks={[
        { title: "IVF Stimulation & Egg Retrieval", description: "The same ovarian stimulation and egg retrieval process as standard IVF — your experience remains unchanged." },
        { title: "Sperm Preparation", description: "A semen sample is processed to separate healthy sperm, just like in standard ICSI." },
        { title: "High-Magnification Assessment", description: "Sperm are examined under very high magnification (over 6,000x) to assess fine structural details of the sperm head, neck, and tail." },
        { title: "Structural Evaluation", description: "The embryologist evaluates each sperm for vacuoles, nuclear shape abnormalities, and other structural irregularities that could affect embryo development." },
        { title: "Sperm Selection", description: "A structurally favourable sperm with the most normal appearance is selected for injection." },
        { title: "Injection & Culture", description: "The selected sperm is injected into the egg, with fertilisation checked the next day and embryos cultured as in standard IVF." },
      ]}
      whatToExpect="Like PICSI, IMSI is a lab-stage refinement within an IVF/ICSI cycle — your stimulation, egg retrieval, and embryo transfer process remains the same. You won't notice any difference in your experience, as the high-magnification selection happens entirely in the embryology lab. The key difference is in the precision of sperm selection, which may improve your chances of achieving fertilisation and healthy embryo development."
      benefits={[
        "Offers a much more detailed view of sperm structure than standard ICSI — over 6,000x magnification vs 400x",
        "Allows embryologists to identify and avoid structural abnormalities that could affect embryo development",
        "May improve fertilisation rates and embryo quality in cases of severe male-factor infertility",
        "Particularly beneficial for men with high levels of sperm DNA fragmentation",
        "Builds on, rather than replaces, standard ICSI — adding an extra layer of precision",
        "May be beneficial in cases of repeated IVF/ICSI cycles without expected outcomes",
      ]}
      considerations={[
        "Requires specialised high-magnification equipment and an experienced embryologist",
        "Not necessary for every case — discussed based on individual findings and previous cycle outcomes",
        "Like all selection techniques, cannot guarantee fertilisation or pregnancy",
        "Takes additional time in the lab compared to standard ICSI due to the detailed examination process",
        "Adds to the cost of an IVF cycle due to the specialised equipment and expertise required",
        "The clinical benefit of IMSI over standard ICSI is still being studied, with mixed results in research — Dr. Rai can help determine if it's appropriate for your specific case",
      ]}
      related={[
        { name: "ICSI Treatment", href: "/ivf/icsi", blurb: "The base injection technique that IMSI refines with high-magnification sperm selection." },
        { name: "PICSI", href: "/ivf/picsi", blurb: "An alternative physiological selection method using hyaluronan binding." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The complete IVF process within which IMSI is performed." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Comprehensive male fertility evaluation that determines if IMSI may be needed." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval", blurb: "Surgical sperm retrieval techniques for use with IMSI." },
      ]}
      externalResources={[
        {
          label: "Intracytoplasmic Sperm Injection (ICSI) and IMSI",
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
          question: "Is IMSI recommended for everyone doing ICSI?",
          answer:
            "No — IMSI is typically reserved for specific situations, such as severe male-factor infertility, previous IVF/ICSI cycles with poor outcomes, or when structural sperm abnormalities have been identified. Dr. Rai will discuss whether IMSI is appropriate for your specific case.",
        },
        {
          question: "How is IMSI different from standard ICSI?",
          answer:
            "The key difference is the magnification used for sperm selection. Standard ICSI uses 200-400x magnification, while IMSI uses over 6,000x magnification. This allows the embryologist to see fine structural details of the sperm head — including vacuoles and nuclear shape abnormalities — that are invisible at lower magnification.",
        },
        {
          question: "Does IMSI improve IVF success rates?",
          answer:
            "The evidence for IMSI is mixed. Some studies show improved fertilisation rates, embryo quality, and pregnancy rates in selected patient populations — particularly those with severe male-factor infertility. However, other studies have shown no significant difference. Dr. Rai can help determine if IMSI may be beneficial for your specific situation.",
        },
        {
          question: "Does IMSI take longer than standard ICSI?",
          answer:
            "The additional examination step can add some time to the lab process — typically 1-2 hours longer — but it doesn't change your overall treatment timeline significantly. The high-magnification assessment requires careful examination of each sperm, which is more time-consuming than standard ICSI selection.",
        },
        {
          question: "What is the difference between IMSI and PICSI?",
          answer:
            "IMSI uses very high magnification (over 6,000x) to examine sperm structure in fine detail. PICSI uses a different approach — selecting sperm based on their ability to bind to hyaluronan (a substance found around the egg) as a marker of sperm maturity. Some clinics may use both techniques together for optimal sperm selection.",
        },
        {
          question: "What are vacuoles in sperm, and why do they matter?",
          answer:
            "Vacuoles are small cavities or spaces within the sperm head that can be seen at high magnification. Large or numerous vacuoles are associated with abnormal sperm structure and may indicate DNA damage or packaging issues. IMSI allows embryologists to identify and avoid sperm with significant vacuoles, potentially improving fertilisation and embryo development.",
        },
        {
          question: "Is IMSI more expensive than standard ICSI?",
          answer:
            "Yes, IMSI typically adds to the cost of an IVF cycle due to the specialised equipment required and the additional time needed in the lab. Dr. Rai will discuss the costs and benefits with you so you can make an informed decision about whether IMSI is right for your situation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
              alt="High-magnification microscope used for IMSI procedure at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal assessment for IVF with IMSI at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>IMSI treatment in Noida</strong> represents the next evolution in addressing 
          <strong>male infertility</strong> at the cellular level. While <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">
          ICSI</Link> revolutionised fertility treatment by enabling fertilisation with a single sperm, 
          IMSI takes this further by ensuring the sperm selected has the most normal structural appearance 
          possible.
        </p>

        <p>
          The science behind <strong>IMSI</strong> is based on the understanding that sperm morphology 
          (shape) is linked to genetic integrity. Sperm with structural abnormalities — particularly 
          vacuoles (cavities) in the sperm head — may be more likely to carry DNA damage or chromosomal 
          abnormalities. By identifying and avoiding these structurally abnormal sperm, <strong>IMSI</strong> 
          may improve fertilisation rates, embryo quality, and pregnancy outcomes in selected cases.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Sperm preparation for IMSI high-magnification selection at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Fertility consultation for IMSI treatment with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
              alt="Embryology lab at Divine IVF Clinic for IMSI and IVF procedures Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The <strong>IMSI procedure</strong> requires specialised equipment known as an inverted 
          microscope with high-magnification (over 6,000x) and differential interference contrast 
          (DIC) optics. This technology allows the embryologist to see ultra-fine details of sperm 
          structure — including vacuoles, nuclear shape, and the presence of cytoplasmic droplets 
          — that would be completely invisible under standard ICSI magnification.
        </p>

        <p>
          The decision to use <strong>IMSI</strong> is typically based on a combination of factors 
          including the severity of <strong>male infertility</strong>, previous IVF/ICSI cycle outcomes, 
          and specific findings from <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link>. For men with severe oligospermia (very low sperm count), 
          high levels of sperm DNA fragmentation, or a history of poor embryo development in previous 
          cycles, <strong>IMSI</strong> may offer a valuable opportunity to improve outcomes.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When Is IMSI Recommended?
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Severe male-factor infertility with significant sperm structural abnormalities
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous ICSI cycles with unexpectedly low fertilisation or poor embryo quality
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              High levels of sperm DNA fragmentation identified on testing
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Repeated IVF failures despite apparently normal sperm parameters
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Cases where standard ICSI selection may not be sufficient
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>IMSI</strong> is 
          evidence-based and personalised. Dr. Rai carefully reviews each couple's complete history 
          — including <Link href="/male-infertility" className="text-rose-600 font-semibold hover:underline">
          male fertility evaluation</Link> results, previous treatment outcomes, and individual circumstances 
          — to determine whether <strong>IMSI</strong> offers a meaningful advantage over standard 
          <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">ICSI</Link>.
        </p>

        <p>
          The <strong>IMSI</strong> technique is supported by guidelines from leading organisations 
          including the{" "}
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
          . This ensures your <strong>fertility treatment</strong> is supported by the latest clinical 
          evidence and best practices in embryology.
        </p>
      </div>
    </TreatmentTemplate>
  );
}