// app/ivf/era/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/era" },
  title: "ERA Testing in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "ERA (Endometrial Receptivity Analysis) in Sector 76, Noida — personalised embryo transfer timing with Dr. Mandavi Rai at Divine IVF. Learn about ERA testing and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "ERA testing in Noida, Endometrial Receptivity Analysis, ERA test, embryo transfer timing, recurrent implantation failure, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, personalized embryo transfer, uterine receptivity, ERA biopsy, advanced IVF",
  openGraph: {
    title: "ERA Testing in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "ERA (Endometrial Receptivity Analysis) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — finding the right window for embryo transfer.",
    url: "https://www.divineivf.com/ivf/era",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "ERA testing at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function EraPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "ERA Testing" },
      ]}
      eyebrow="Advanced IVF · Precision Diagnostics"
      titlePlain="ERA:"
      titleAccent="finding the right window"
      intro="Endometrial Receptivity Analysis identifies the specific window in which your uterine lining is most receptive to an embryo — useful when timing may be part of the picture in recurrent implantation failure."
      heroImage="https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop"
      heroAlt="ERA testing and endometrial analysis at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Endometrial biopsy for ERA testing at Divine IVF Clinic, Noida"
      whatItIs={[
        "ERA (Endometrial Receptivity Analysis) is a precision diagnostic test that analyses the gene expression pattern of the endometrial lining to determine the optimal timing for embryo transfer. The endometrium — the lining of the uterus — is only receptive to an embryo during a specific window of time each cycle. For most people, standard timing works well. For some, that window shifts earlier or later.",
        "The ERA test involves taking a small tissue sample from the endometrium at a specific point in a mock cycle and analysing the expression of 236 genes related to endometrial receptivity. This analysis determines whether your personal window of receptivity aligns with standard timing, or falls earlier (pre-receptive) or later (post-receptive).",
        "The test was developed by the Spanish research group Igenomix and has been validated in numerous clinical studies. It provides an evidence-based approach to personalising embryo transfer timing, potentially improving outcomes in patients with recurrent implantation failure."
      ]}
      whoNeedsIt={[
        "Patients with recurrent implantation failure (RIF) despite transferring good-quality embryos",
        "Women who have had previous unexplained unsuccessful embryo transfers",
        "Patients who have had multiple failed IVF cycles with no clear explanation",
        "Women with a history of implantation failure where the embryo quality was good",
        "As part of a more detailed evaluation before a further transfer attempt",
        "Patients who have had a previous ERA test showing a displaced window (pre-receptive or post-receptive)",
        "Women with a history of thin endometrium or other uterine factors affecting implantation",
      ]}
      preparation={[
        "ERA requires a dedicated mock cycle before your real transfer. Hormonal medication is used to prepare your lining exactly as it would be for an actual transfer, but no embryo is transferred during this cycle. This allows the test to accurately determine your personal window of receptivity.",
        "You'll be guided on timing medication precisely, since the biopsy needs to be taken at a specific point relative to your hormone protocol for the results to be meaningful. The biopsy is typically performed after approximately 5 days of progesterone exposure — the same time when a transfer would normally occur.",
        "If you're using a medicated frozen embryo transfer (FET) protocol, the mock cycle mimics the same hormonal preparation. If you're using a natural cycle, the ERA can be performed in a natural cycle as well, though timing may be more complex to coordinate."
      ]}
      howItWorks={[
        { title: "Mock Cycle Preparation", description: "Hormonal preparation mimics a real transfer cycle, with estrogen and progesterone given exactly as they would be for an actual embryo transfer, but without an embryo transfer." },
        { title: "Endometrial Biopsy", description: "A small tissue sample (about the size of a grain of rice) is taken from the uterine lining at the expected window of receptivity (typically after 5 days of progesterone exposure)." },
        { title: "Laboratory Analysis", description: "The sample is sent to a specialised genetics lab where gene expression patterns are analysed. The expression of 236 genes related to receptivity is measured." },
        { title: "Results Interpretation", description: "The test results indicate whether you are pre-receptive (window is later than standard), receptive (window is as expected), or post-receptive (window is earlier than standard)." },
        { title: "Transfer Adjustment", description: "Findings guide whether your actual transfer timing should be adjusted — for pre-receptive patients, more progesterone days are needed; for post-receptive patients, fewer progesterone days are needed." },
        { title: "Personalised Transfer", description: "With the personalised timing identified, your embryo transfer is scheduled at the optimal time for your specific endometrial receptivity window." },
      ]}
      whatToExpect="The ERA mock cycle involves daily hormonal medication and monitoring, similar to a standard frozen embryo transfer cycle. The endometrial biopsy itself is a brief procedure — similar to other uterine sampling procedures — performed without sedation in the clinic. You may experience mild cramping or discomfort during the biopsy, similar to period cramps, but it's generally well-tolerated. Results typically take about 2-3 weeks to process before your next steps are planned. Once results are available, Dr. Rai will discuss what they mean for your transfer timing."
      benefits={[
        "Personalises transfer timing rather than assuming a standard window for everyone",
        "Can be particularly valuable after previous unexplained implantation failure",
        "Adds an evidence-based, scientific layer to transfer planning",
        "May improve implantation and pregnancy rates in patients with recurrent implantation failure",
        "Provides clear, actionable information about your specific window of receptivity",
        "Can be repeated if needed to confirm results or after significant treatment changes",
        "Helps avoid wasting good-quality embryos on poorly timed transfers",
      ]}
      considerations={[
        "Involves an additional mock cycle and procedure before the real transfer — adding time to your treatment plan",
        "Not necessary for every patient — typically considered after specific findings or previous failures",
        "Like any test, it's one input among several in your overall treatment plan",
        "Results may show a displaced window in some patients but not all — some patients will have standard timing",
        "Adds to the cost of treatment due to the specialised analysis required",
        "The biopsy procedure involves mild discomfort and a small risk of infection or bleeding (rare)",
        "Some patients may need more than one ERA cycle if results are inconclusive or if treatment changes significantly",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf", blurb: "The treatment that ERA findings help fine-tune for optimal transfer timing." },
        { name: "Genetic Testing of Embryos", href: "/ivf/genetic-testing", blurb: "Assessing the embryo side of the implantation equation alongside ERA's uterine assessment." },
        { name: "Embryo Glue", href: "/ivf/embryo-glue", blurb: "A transfer-support option sometimes used alongside timing adjustments for enhanced implantation." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation that identifies the need for advanced diagnostics like ERA." },
      ]}
      externalResources={[
        {
          label: "Endometrial Receptivity Analysis (ERA)",
          source: "Igenomix",
          href: "https://www.igenomix.com/our-tests/era/",
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
          question: "Is ERA needed for every IVF cycle?",
          answer:
            "No — ERA is generally reserved for cases with previous unexplained implantation failure, not used as a routine first step. Most patients with standard timing and no previous failures don't need ERA testing. Dr. Rai will discuss whether ERA is appropriate for your specific situation.",
        },
        {
          question: "Does ERA delay treatment significantly?",
          answer:
            "ERA does add a preparatory mock cycle before your actual transfer — typically adding about 4-6 weeks to your overall timeline. Dr. Rai will factor this into your treatment plan and help you understand the timeline. For many patients, the benefit of personalised timing outweighs the additional time required.",
        },
        {
          question: "What do ERA test results mean?",
          answer:
            "ERA results indicate whether you are pre-receptive (your window of receptivity is later than standard), receptive (your window is as expected), or post-receptive (your window is earlier than standard). If you're pre-receptive, you need more progesterone days before transfer. If you're post-receptive, you need fewer progesterone days.",
        },
        {
          question: "Is the ERA biopsy painful?",
          answer:
            "The endometrial biopsy is a brief procedure that may cause mild cramping or discomfort, similar to period cramps. It's performed without sedation and takes only a few minutes. Most patients tolerate it well. Dr. Rai will explain what to expect and may recommend taking a mild pain reliever beforehand.",
        },
        {
          question: "How accurate is the ERA test?",
          answer:
            "The ERA test has been validated in numerous clinical studies and has shown good accuracy in identifying the window of receptivity. The test analyses the expression of 236 genes related to endometrial receptivity. However, like any test, it's one piece of information among several in your overall treatment plan.",
        },
        {
          question: "Can ERA improve pregnancy rates?",
          answer:
            "Studies suggest that ERA-guided transfer may improve implantation and pregnancy rates in patients with recurrent implantation failure (RIF). However, the evidence is strongest for patients with RIF, not for all IVF patients. Dr. Rai can help determine if ERA is likely to be beneficial for your specific situation.",
        },
        {
          question: "What happens if my ERA results show a displaced window?",
          answer:
            "If your ERA results show that you are pre-receptive or post-receptive, your embryo transfer timing will be adjusted accordingly in your actual cycle. For pre-receptive patients, this means more days of progesterone before transfer. For post-receptive patients, fewer days of progesterone. This personalised timing may improve your chances of implantation.",
        },
        {
          question: "Can ERA be done in a natural cycle?",
          answer:
            "Yes, ERA can be performed in a natural cycle, though timing is more complex to coordinate than in a medicated cycle. Natural cycle ERA requires careful monitoring of ovulation to time the biopsy correctly. Dr. Rai will discuss the best approach for your specific situation.",
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
              alt="ERA testing and endometrial analysis at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
              alt="Endometrial biopsy for ERA testing at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>ERA testing in Noida</strong> represents a significant advancement in personalised 
          <strong>fertility treatment</strong>. At <strong>Divine IVF, Sector 76</strong>,{" "}
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> offers this precision diagnostic test for patients who have 
          experienced recurrent implantation failure or unexplained failed transfers.
        </p>

        <p>
          The concept behind <strong>ERA testing</strong> is elegantly simple yet scientifically 
          sophisticated: the uterine lining is only receptive to an embryo during a specific window 
          of time each cycle. For most women, this window occurs after approximately 5 days of 
          progesterone exposure. However, research has shown that in some women — particularly 
          those with recurrent implantation failure — this window may be displaced (shifted earlier 
          or later). The <strong>ERA test</strong> identifies this displacement, allowing for 
          personalised transfer timing.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="ERA mock cycle preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="ERA consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal preparation for ERA mock cycle at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The <strong>ERA test</strong> has been particularly valuable for patients with 
          <strong>recurrent implantation failure</strong> — a challenging condition where 
          high-quality embryos are transferred but fail to implant. Studies have shown that 
          approximately 20-30% of patients with recurrent implantation failure have a displaced 
          window of receptivity, which can be identified and addressed through <strong>ERA testing</strong>.
        </p>

        <p>
          The decision to use <strong>ERA testing</strong> is typically based on a combination 
          of factors including previous transfer outcomes, embryo quality, and uterine assessment 
          findings. Dr. Rai will review your complete <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> results and treatment history to determine whether 
          <strong>ERA</strong> is appropriate for your specific situation.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When Is ERA Testing Recommended?
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Recurrent implantation failure (RIF) despite good-quality embryos
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous unexplained unsuccessful embryo transfers
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              When you have a limited number of embryos and want to maximise each transfer
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              As part of a more detailed evaluation before a further transfer attempt
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              When other potential causes of implantation failure have been ruled out
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>ERA testing</strong> 
          is evidence-based and personalised. Dr. Rai ensures that this advanced diagnostic test is 
          offered only when there's a clinical indication suggesting it may be beneficial — never 
          as a routine test without proper evaluation.
        </p>

        <p>
          The <strong>ERA test</strong> was developed by Igenomix, a leading research group in 
          reproductive medicine, and has been validated in numerous clinical studies worldwide. 
          It is supported by guidelines from leading organisations including the{" "}
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
          clinical evidence and best practices in precision diagnostics.
        </p>
      </div>
    </TreatmentTemplate>
  );
}