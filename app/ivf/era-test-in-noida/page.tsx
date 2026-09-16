// app/era-test-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/era-test-in-noida" },
  title: "ERA Test in Noida | Endometrial Receptivity Test for IVF | Divine IVF",
  description:
    "Explore ERA Test in Noida for selected IVF and implantation concerns. Learn about endometrial receptivity testing, process, limitations and personalised IVF guidance at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "ERA Test in Noida, ERA Test for IVF in Noida, ERA IVF Test in Noida, Endometrial Receptivity Test in Noida, Endometrial Receptivity Analysis in Noida, Endometrial Receptivity Array in Noida, ERA Test for Implantation in Noida, ERA Test After Failed IVF, ERA Test After Failed Embryo Transfer, ERA for Recurrent Implantation Failure, Window of Implantation Test in Noida, Endometrial Biopsy for IVF in Noida, Personalised Embryo Transfer in Noida, Embryo Implantation Test in Noida, Recurrent Implantation Failure Treatment in Noida, Failed IVF Treatment in Noida, Frozen Embryo Transfer in Noida, Embryo Transfer in Noida, IVF Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida, ERA Test Cost in Noida",
  openGraph: {
    title: "ERA Test in Noida | Endometrial Receptivity Test for IVF | Divine IVF",
    description:
      "Learn about ERA testing in Noida for selected IVF and implantation concerns, including process, limitations, risks and personalised fertility guidance.",
    url: "http://divine-ivf.vercel.app/era-test-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/QODFhZE6tDzy6NLnxqvP/image.png",
        width: 1200,
        height: 630,
        alt: "ERA testing at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function EraTestPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "ERA Test in Noida" },
      ]}
      eyebrow="Advanced IVF · Precision Diagnostics · Noida"
      // ========== H1 ==========
      titlePlain="ERA Test for IVF in Noida"
      titleAccent="Endometrial receptivity testing for selected IVF patients with implantation concerns"
      // =========================
      intro="If you have experienced repeated unsuccessful embryo transfers or have been advised to explore endometrial receptivity testing, you may have come across the ERA Test."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/QODFhZE6tDzy6NLnxqvP/image.png"
      heroAlt="ERA testing and endometrial analysis at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Endometrial biopsy for ERA testing at Divine IVF Clinic, Noida"
      whatItIs={[
        "ERA is a type of Endometrial Receptivity Test. It involves taking a small biopsy from the lining of the uterus, known as the endometrium, and analysing patterns of gene expression.",
        "The test aims to determine whether the endometrium is receptive, pre-receptive, or post-receptive. The goal is to estimate whether the timing of embryo transfer matches the proposed window of implantation.",
        "However, the clinical value of routine ERA testing remains uncertain.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised IVF evaluation and treatment planning based on your fertility history, embryo-transfer outcomes, uterine health and current scientific evidence. ERA is not a routine test required for every IVF patient. It should only be considered after careful assessment of whether it is likely to provide clinically useful information in your individual case.",
      ]}
      whoNeedsIt={[
        "Repeated unsuccessful embryo transfers — patients who have had multiple unsuccessful transfers may ask whether implantation timing could be a factor",
        "Recurrent implantation failure concerns — a broader evaluation may include embryo quality, chromosomal factors, uterine cavity, endometrial factors, hydrosalpinx, transfer technique, male fertility factors, and female age",
        "Previous good-quality embryo transfers without pregnancy — if good-quality embryos have repeatedly failed to implant, a full review of treatment history is important before considering add-on testing",
        "Patients who have had previous unexplained unsuccessful embryo transfers",
        "When you have a limited number of embryos and want to maximise each transfer",
        "As part of a more detailed evaluation before a further transfer attempt",
      ]}
      preparation={[
        "Before considering ERA, other possible uterine or endometrial factors may need review. These can include fibroids, polyps, adhesions, hydrosalpinx, endometrial thickness, and other structural abnormalities.",
        "ERA requires a dedicated mock cycle before your real transfer. The endometrium is prepared in a manner similar to the intended frozen embryo transfer protocol. This may involve estrogen, progesterone, and ultrasound monitoring.",
        "You'll be guided on timing medication precisely, since the biopsy needs to be taken at a specific point relative to your hormone protocol for the results to be meaningful. The biopsy is typically performed after approximately 5 days of progesterone exposure — the same time when a transfer would normally occur.",
        "If you're using a medicated frozen embryo transfer (FET) protocol, the mock cycle mimics the same hormonal preparation. If you're using a natural cycle, the ERA can be performed in a natural cycle as well, though timing may be more complex to coordinate.",
      ]}
      howItWorks={[
        { title: "Step 1 – IVF History Review", description: "The fertility specialist reviews number of previous IVF cycles, number of embryo transfers, embryo quality, embryo stage, fresh vs frozen transfer, previous implantation outcomes, endometrial findings, and previous pregnancy history." },
        { title: "Step 2 – Uterine and Endometrial Evaluation", description: "Before considering ERA, other possible uterine or endometrial factors may need review including fibroids, polyps, adhesions, hydrosalpinx, endometrial thickness, and other structural abnormalities." },
        { title: "Step 3 – Mock or Preparation Cycle", description: "The endometrium is prepared in a manner similar to the intended frozen embryo transfer protocol. This may involve estrogen, progesterone, and ultrasound monitoring." },
        { title: "Step 4 – Endometrial Biopsy", description: "At the planned time, a small sample of endometrial tissue is collected. A thin catheter is inserted through the cervix into the uterus to obtain the biopsy." },
        { title: "Step 5 – Laboratory Analysis", description: "The sample is analysed for gene-expression patterns associated with endometrial receptivity." },
        { title: "Step 6 – Result Interpretation", description: "The result may be reported as receptive, pre-receptive or post-receptive. Your fertility specialist discusses whether the result should influence future treatment timing." },
        { title: "Step 7 – Future Embryo Transfer", description: "If a personalised embryo-transfer plan is chosen, progesterone duration and transfer timing may be adjusted in a future cycle. However, changing transfer timing based on ERA does not guarantee improved implantation or pregnancy." },
      ]}
      whatToExpect="The ERA mock cycle involves daily hormonal medication and monitoring, similar to a standard frozen embryo transfer cycle. The endometrial biopsy itself is a brief procedure — similar to other uterine sampling procedures — performed without sedation in the clinic. You may experience mild cramping or discomfort during the biopsy, similar to period cramps, but it's generally well-tolerated. Results typically take about 2-3 weeks to process before your next steps are planned. Once results are available, Dr. Rai will discuss what they mean for your transfer timing."
      benefits={[
        "Information About Endometrial Timing — The test attempts to assess whether the endometrium appears receptive at the biopsy time",
        "Personalised Embryo Transfer Timing — The result may be used to modify progesterone exposure before transfer",
        "Additional Investigation in Selected Cases — It may be discussed as part of a broader review after repeated implantation failure",
        "Provides clear, actionable information about your specific window of receptivity in some cases",
        "May help avoid wasting good-quality embryos on poorly timed transfers",
      ]}
      considerations={[
        "Not required for every IVF patient",
        "Involves an endometrial biopsy",
        "May cause pain or bleeding",
        "Results may be inconclusive",
        "Repeat biopsy may occasionally be required",
        "The implantation window may vary between cycles",
        "Adds cost to treatment",
        "May delay embryo transfer",
        "Has not been shown to routinely improve live-birth outcomes",
        "HFEA currently rates endometrial receptivity testing red for increasing the chance of having a baby for most fertility patients",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The treatment that ERA findings help fine-tune for optimal transfer timing." },
        { name: "Embryo Transfer / Frozen Embryo Transfer", href: "/embryo-transfer", blurb: "The procedure for which ERA helps determine optimal timing." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation that identifies the need for advanced diagnostics like ERA." },
        { name: "Recurrent Implantation Failure", href: "/recurrent-implantation-failure", blurb: "A condition for which ERA testing may be discussed." },
        { name: "Genetic Testing / PGT", href: "/genetic-testing-in-ivf-noida", blurb: "Assessing the embryo side of the implantation equation alongside ERA's uterine assessment." },
        { name: "Intralipid Therapy", href: "/intralipid-therapy-in-noida", blurb: "Another add-on sometimes considered alongside ERA for implantation concerns." },
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "Often used in conjunction with ERA for male-factor cases." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
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
          question: "What does ERA stand for?",
          answer:
            "ERA commonly refers to Endometrial Receptivity Analysis or Endometrial Receptivity Array.",
        },
        {
          question: "What is an ERA test in IVF?",
          answer:
            "ERA is an endometrial receptivity test that analyses a biopsy of the uterine lining to estimate whether the endometrium is receptive at a particular time.",
        },
        {
          question: "What is the window of implantation?",
          answer:
            "It is the period when the endometrium is considered most suitable for embryo implantation.",
        },
        {
          question: "Is ERA required for every IVF patient?",
          answer:
            "No. Routine ERA testing is not recommended for every IVF patient.",
        },
        {
          question: "Who may consider ERA?",
          answer:
            "It may be discussed in selected patients with repeated unsuccessful embryo transfers, although its benefit remains uncertain.",
        },
        {
          question: "Is ERA useful after failed IVF?",
          answer:
            "The entire IVF cycle should first be reviewed. ERA may be discussed in selected circumstances but should not automatically be added after one failed cycle.",
        },
        {
          question: "Does ERA improve IVF success?",
          answer:
            "Current evidence does not show a routine improvement in live-birth outcomes. HFEA currently rates endometrial receptivity testing red for increasing the chance of having a baby for most fertility patients.",
        },
        {
          question: "Is ERA painful?",
          answer:
            "The endometrial biopsy can cause temporary cramping, pain or spotting.",
        },
        {
          question: "What does receptive mean on an ERA report?",
          answer:
            "It means the biopsy timing was classified as falling within the test's predicted implantation window.",
        },
        {
          question: "What does pre-receptive mean?",
          answer:
            "It means the test predicts that the endometrium had not yet reached the proposed receptive phase.",
        },
        {
          question: "What does post-receptive mean?",
          answer:
            "It means the test predicts that the proposed receptive phase may already have passed.",
        },
        {
          question: "Does ERA guarantee implantation?",
          answer:
            "No.",
        },
        {
          question: "Can ERA prevent miscarriage?",
          answer:
            "ERA should not be considered a proven miscarriage-prevention test.",
        },
        {
          question: "Is ERA done before frozen embryo transfer?",
          answer:
            "If used, it is commonly performed in a mock or preparation cycle designed to resemble the intended frozen embryo transfer protocol.",
        },
        {
          question: "How much does an ERA test cost  ",
          answer:
            "Cost varies according to the biopsy, laboratory analysis, medicines, monitoring and associated fertility treatment.",
        },
        {
          question: "Where can I discuss ERA testing  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida to review previous IVF and embryo-transfer outcomes and discuss whether an endometrial receptivity test is appropriate.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          ERA Test for IVF in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Endometrial receptivity testing for selected IVF patients with implantation concerns at Divine IVF, Sector 76, Noida.
        </p>
        {/* ============================================= */}

        {/* Clinic Info & CTA */}
        <div className="bg-gradient-to-r from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-ink-600 text-sm">
                📍 Sector 76, Noida, Uttar Pradesh
              </p>
              <p className="text-ink-600 text-sm">
                📞 Call: <a href="tel:+917678451808" className="text-rose-600 font-semibold hover:underline">+91 7678451808</a>
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-rose-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-rose-700 transition-colors text-center whitespace-nowrap"
            >
              Book ERA / IVF Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for ERA test preparation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound monitoring for ERA test mock cycle at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is an ERA Test Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is an ERA Test?</h2>
          <p className="text-ink-600">
            <strong>ERA</strong> is a type of <strong>Endometrial Receptivity Test</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            It involves taking a small biopsy from the lining of the uterus, known as the endometrium, and analysing patterns of gene expression.
          </p>
          <p className="text-ink-600 mt-2">
            The test aims to determine whether the endometrium is:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li><strong>Receptive</strong> — The biopsy timing is considered to fall within the predicted implantation window</li>
            <li><strong>Pre-receptive</strong> — The endometrium may not yet have reached the predicted receptive phase</li>
            <li><strong>Post-receptive</strong> — The predicted receptive phase may have already passed</li>
          </ul>
          <p className="text-ink-600 mt-2">
            The goal is to estimate whether the timing of <Link href="/embryo-transfer" className="text-rose-600 font-semibold hover:underline">embryo transfer</Link> matches the proposed window of implantation.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            However, the clinical value of routine ERA testing remains uncertain.
          </p>
        </div>

        {/* What Is the Window of Implantation */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is the Window of Implantation?</h2>
          <p className="text-ink-600 text-sm">The window of implantation refers to a period during which the endometrium is considered most suitable for an embryo to implant.</p>
          <p className="text-ink-600 text-sm mt-2">In a frozen embryo transfer cycle, progesterone exposure and embryo-transfer timing are carefully coordinated.</p>
          <p className="text-ink-600 text-sm mt-2">ERA attempts to identify whether the standard transfer timing may need adjustment.</p>
          <p className="text-ink-600 text-sm mt-2">However, questions remain about:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>How accurately receptivity tests identify the ideal window</li>
            <li>Whether the implantation window is consistent across treatment cycles</li>
            <li>Whether personalised transfer based on the test improves live-birth outcomes</li>
          </ul>
        </div>

        {/* How Does ERA Work / What Does an ERA Result Mean */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">How Does ERA Work?</h2>
          <p className="text-ink-600 text-sm">ERA generally involves:</p>
          <ol className="list-decimal list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Preparing the endometrium in a cycle similar to a frozen embryo transfer cycle</li>
            <li>Taking an endometrial biopsy</li>
            <li>Sending the sample for molecular analysis</li>
            <li>Assessing gene-expression patterns</li>
            <li>Categorising the endometrium as receptive or non-receptive</li>
            <li>Using the result to guide embryo-transfer timing in a future cycle, if clinically appropriate</li>
          </ol>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">What Does an ERA Result Mean?</h3>
          <p className="text-ink-600 text-sm">The report may describe the endometrium as:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li><strong>Receptive</strong> — The biopsy timing is considered to fall within the predicted implantation window</li>
            <li><strong>Pre-Receptive</strong> — The endometrium may not yet have reached the predicted receptive phase</li>
            <li><strong>Post-Receptive</strong> — The predicted receptive phase may have already passed</li>
          </ul>
          <p className="text-sm text-ink-500 mt-2">A fertility specialist interprets the result together with the complete IVF history.</p>
        </div>

        {/* Who May Be Considered for an ERA Test */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Be Considered for an ERA Test?</h2>
          <p className="text-ink-600 text-sm font-semibold">ERA should not be automatically recommended to all IVF patients.</p>
          <p className="text-ink-600 text-sm mt-2">It may sometimes be discussed in selected situations.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Repeated Unsuccessful Embryo Transfers</h3>
              <p className="text-ink-600 text-sm">Patients who have had multiple unsuccessful transfers may ask whether implantation timing could be a factor. However, other causes should be reviewed first.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Recurrent Implantation Failure Concerns</h3>
              <p className="text-ink-600 text-sm">A broader evaluation may include embryo quality, chromosomal factors, uterine cavity, endometrial factors, hydrosalpinx, transfer technique, male fertility factors, and female age. ERA is only one possible add-on and its routine benefit remains unproven.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previous Good-Quality Embryo Transfers Without Pregnancy</h3>
              <p className="text-ink-600 text-sm">If good-quality embryos have repeatedly failed to implant, a full review of treatment history is important before considering add-on testing.</p>
            </div>
          </div>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Who Does Not Routinely Need ERA?</h3>
          <p className="text-ink-600 text-sm">ERA is generally not required simply because a patient is:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Starting a first IVF cycle</li>
            <li>Having a first frozen embryo transfer</li>
            <li>Using a blastocyst</li>
            <li>Undergoing ICSI</li>
            <li>Having embryos genetically tested</li>
          </ul>
          <p className="text-sm text-ink-500 mt-2">Routine use has not been shown to improve live-birth outcomes for most patients.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Endometrial biopsy preparation for ERA test at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="ERA test consultation with Dr. Mandavi Rai at Divine IVF Noida"
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

        {/* ERA Test and Recurrent Implantation Failure */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">ERA Test and Recurrent Implantation Failure</h2>
          <p className="text-ink-600 text-sm">Repeated implantation failure is complex and may have several causes. Possible factors include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo chromosomal abnormalities
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo-development issues
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Uterine abnormalities
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Endometrial factors
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Hydrosalpinx
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Female age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Male infertility
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Laboratory or transfer-related factors
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">ERA should not replace a comprehensive assessment of these possible causes.</p>
        </div>

        {/* ERA Test After Failed IVF / ERA and Frozen Embryo Transfer */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">ERA in Specific Situations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">ERA Test After Failed IVF</h3>
              <p className="text-ink-600 text-sm">After unsuccessful IVF, the first step should generally be a structured review of the previous cycle. This may include ovarian response, egg quality, fertilisation, embryo development, blastocyst formation, embryo-transfer technique, endometrial preparation, male-factor infertility, and genetic factors. ERA may be discussed only after considering these more established factors.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">ERA and Frozen Embryo Transfer</h3>
              <p className="text-ink-600 text-sm">ERA is usually relevant to the timing of a future Frozen Embryo Transfer (FET). A mock cycle is often designed to mimic the hormonal protocol intended for the actual transfer. If the result is used clinically, the duration of progesterone exposure may be adjusted.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">ERA and Blastocyst Transfer</h3>
              <p className="text-ink-600 text-sm">Blastocyst transfer timing is already coordinated with progesterone exposure in standard fertility practice. ERA proposes additional personalised timing based on biopsy results. However, current evidence does not show that this routinely improves live-birth outcomes.</p>
            </div>
          </div>
        </div>

        {/* ERA vs Standard Embryo Transfer / ERA vs Endometrial Scratch */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">ERA vs Other Approaches</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">ERA vs Standard Embryo Transfer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-white rounded-xl p-3 border border-ink-100/50">
                  <h4 className="font-bold text-sm text-ink-900">Standard Embryo Transfer</h4>
                  <p className="text-xs text-ink-600 mt-1">Transfer timing is planned using established IVF protocols based on embryo stage, ovulation, hormonal preparation, and progesterone exposure.</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-rose-200 shadow-sm">
                  <h4 className="font-bold text-sm text-ink-900">ERA-Guided Transfer</h4>
                  <p className="text-xs text-ink-600 mt-1">Transfer timing may be adjusted according to an endometrial receptivity test result. The key issue is that routine ERA-guided transfer has not been shown to consistently improve pregnancy or live-birth outcomes.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">ERA vs Endometrial Scratch</h3>
              <p className="text-ink-600 text-sm">These are different procedures. ERA is an endometrial biopsy taken primarily for molecular receptivity testing. Endometrial Scratch is when the endometrium is intentionally injured with the theory that the healing response may improve implantation. Both are fertility add-ons, and neither should automatically be used for every patient.</p>
            </div>
          </div>
        </div>

        {/* Does ERA Improve IVF Success / Does ERA Improve Implantation Rate / Does ERA Reduce Miscarriage */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Does ERA Improve IVF Success?</h2>
          <p className="text-ink-600 text-sm font-semibold">Current evidence does not support routine ERA testing as a proven way to increase IVF success.</p>
          <p className="text-ink-600 text-sm mt-2">HFEA currently rates endometrial receptivity testing red for increasing the chance of having a baby for most fertility patients because available moderate/high-quality evidence suggests it may reduce treatment effectiveness.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Does ERA Improve Implantation Rate?</h3>
          <p className="text-ink-600 text-sm">Some earlier studies proposed that personalised embryo transfer may improve implantation in selected patients. However, stronger evidence has not confirmed a consistent benefit. It is therefore better to describe ERA as an investigational or optional add-on rather than a proven implantation-enhancing test.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Does ERA Reduce Miscarriage?</h3>
          <p className="text-ink-600 text-sm">ERA is designed primarily around embryo-transfer timing and endometrial receptivity. It should not be promoted as a proven miscarriage-prevention test. Miscarriage may be caused by many factors, particularly embryo chromosomal abnormalities, maternal age, uterine conditions and other medical factors.</p>
        </div>

        {/* Benefits Proposed / Limitations / Risks */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Benefits, Limitations, and Risks of ERA</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Benefits Proposed for ERA</h3>
              <p className="text-ink-600 text-sm">Possible proposed benefits include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1 space-y-1">
                <li><strong>Information About Endometrial Timing</strong> — The test attempts to assess whether the endometrium appears receptive at the biopsy time</li>
                <li><strong>Personalised Embryo Transfer Timing</strong> — The result may be used to modify progesterone exposure before transfer</li>
                <li><strong>Additional Investigation in Selected Cases</strong> — It may be discussed as part of a broader review after repeated implantation failure</li>
              </ul>
              <p className="text-xs text-ink-500 mt-2">However, these proposed benefits do not mean the test has been proven to improve live birth.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Limitations of the ERA Test</h3>
              <p className="text-ink-600 text-sm">ERA has several important limitations:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1 space-y-1">
                <li>It is not required for every IVF patient</li>
                <li>It involves an endometrial biopsy</li>
                <li>It may cause pain or bleeding</li>
                <li>Results may be inconclusive</li>
                <li>Repeat biopsy may occasionally be required</li>
                <li>The implantation window may vary</li>
                <li>It adds cost to treatment</li>
                <li>It may delay embryo transfer</li>
                <li>It has not been shown to routinely improve live-birth outcomes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Risks of ERA Testing</h3>
              <p className="text-ink-600 text-sm">Possible risks include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1 space-y-1">
                <li>Cramping</li>
                <li>Pain</li>
                <li>Light bleeding</li>
                <li>Infection</li>
                <li>Rare uterine perforation</li>
                <li>Additional treatment delay</li>
              </ul>
              <p className="text-xs text-ink-500 mt-2">The biopsy may occasionally need to be repeated if the sample is insufficient or the result is inconclusive. HFEA also notes that the associated freeze-all pathway introduces a small risk that not every frozen embryo will survive thawing.</p>
            </div>
          </div>
        </div>

        {/* ERA Test Cost */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            ERA Test Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The ERA Test cost in Noida may depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hormonal preparation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Endometrial biopsy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Laboratory analysis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Follow-up consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Frozen embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Other fertility investigations
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because ERA is an add-on rather than a standard requirement for all IVF patients, patients should ask whether the test is medically justified before paying for it.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Questions to Ask Before Choosing an ERA Test</h2>
          <p className="text-ink-600 text-sm">Before undergoing ERA, ask:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is ERA being recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What other causes of failed implantation have been evaluated?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will the result change my treatment plan?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What evidence supports ERA for my situation?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What is the total cost?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Could the biopsy delay my embryo transfer?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if the result is inconclusive?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Would standard frozen embryo transfer be equally reasonable?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are my alternatives?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for ERA and IVF Evaluation  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised IVF Review</strong> — Previous IVF and embryo-transfer cycles can be reviewed before adding optional tests.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Uterine and Endometrial Assessment</strong> — Possible uterine factors can be evaluated as part of implantation-failure assessment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evidence-Based Treatment Discussion</strong> — Add-on tests such as ERA should be discussed with clear information about their benefits, limitations and current evidence.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF and Frozen Embryo Transfer Planning</strong> — Treatment can be personalised according to embryo stage, endometrial preparation and previous outcomes.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Fertility Care</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking IVF evaluation and embryo-transfer planning.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an ERA / IVF Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have experienced repeated unsuccessful embryo transfers or failed IVF and are considering an ERA test, start with a detailed review of your previous treatment.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised IVF and embryo-transfer planning based on your fertility history and available evidence.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book ERA / IVF Consultation
            </Link>
            <a
              href="tel:+917678451808"
              className="bg-rose-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-rose-400 transition-colors border border-white/20"
            >
              Call +91 7678451808
            </a>
          </div>
          <p className="text-rose-200 text-sm mt-4">
            Divine IVF · Sector 76, Noida, Uttar Pradesh
          </p>
        </div>
      </div>
    </TreatmentTemplate>
  );
}