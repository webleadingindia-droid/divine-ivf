// app/genetic-testing-in-ivf-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/genetic-testing-in-ivf-noida" },
  title: "Genetic Testing in IVF Noida | PGT & Embryo Testing | Divine IVF",
  description:
    "Explore genetic testing in IVF in Noida at Divine IVF, including PGT-A, PGT-M and PGT-SR. Consult Dr. Mandavi Rai for personalised embryo genetic testing guidance.",
  robots: { index: true, follow: true },
  keywords:
    "Genetic Testing in IVF Noida, Genetic Testing in Noida, Embryo Genetic Testing in Noida, Genetic Testing for Embryos in Noida, PGT Test in Noida, PGT Treatment in Noida, Preimplantation Genetic Testing in Noida, PGT-A Testing in Noida, PGT-M Testing in Noida, PGT-SR Testing in Noida, Embryo Screening in Noida, IVF Genetic Testing in Noida, Genetic Testing Before IVF in Noida, Genetic Testing for IVF in Noida, Genetic Testing for Infertility in Noida, PGT for Recurrent Miscarriage, PGT for Genetic Disorders, Embryo Biopsy in Noida, IVF Treatment in Noida, ICSI Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "Genetic Testing in IVF Noida | PGT & Embryo Testing | Divine IVF",
    description:
      "Explore genetic testing in IVF in Noida at Divine IVF, including PGT-A, PGT-M and PGT-SR. Consult Dr. Mandavi Rai for personalised embryo genetic testing guidance.",
    url: "http://divine-ivf.vercel.app/genetic-testing-in-ivf-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/cfCHYUUuJ7hVFBjrqajL/image.png",
        width: 1200,
        height: 630,
        alt: "Genetic testing for embryos at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GeneticTestingInIVFPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "Genetic Testing in IVF Noida" },
      ]}
      eyebrow="Advanced IVF · Precision Diagnostics · Noida"
      // ========== H1 ==========
      titlePlain="Genetic Testing for Embryos in Noida"
      titleAccent="Advanced Preimplantation Genetic Testing (PGT) for selected IVF patients and couples with genetic or chromosomal concerns"
      // =========================
      intro="If you have a known inherited genetic condition, recurrent pregnancy loss, a chromosomal rearrangement, or have been advised to consider embryo genetic testing during IVF, genetic testing for embryos in Noida may be discussed as part of your fertility treatment."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/cfCHYUUuJ7hVFBjrqajL/image.png"
      heroAlt="Embryology laboratory preparing for genetic testing at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Embryo biopsy for genetic testing at Divine IVF Clinic, Noida"
      whatItIs={[
        "Genetic testing in IVF commonly refers to Preimplantation Genetic Testing (PGT). PGT involves testing cells from embryos created through IVF to obtain information about certain chromosome or genetic abnormalities before an embryo is selected for transfer.",
        "Depending on the indication, different forms of PGT may be considered: PGT-A, PGT-M, and PGT-SR. These tests answer different genetic questions and should not be considered interchangeable.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and IVF treatment planning for couples who may require Preimplantation Genetic Testing (PGT). Depending on your medical and family history, genetic counselling and specific genetic testing may be recommended before deciding whether PGT is appropriate.",
      ]}
      whoNeedsIt={[
        "Known genetic disease in the family — if you or your partner have a serious inherited genetic disorder in the family",
        "Known carrier status — if testing shows that one or both partners carry a disease-related genetic variant",
        "Previous child with a genetic condition — couples who have previously had an affected child",
        "Recurrent miscarriages — some recurrent pregnancy losses may be associated with chromosome abnormalities",
        "Chromosomal rearrangement in either partner — if a karyotype identifies a structural chromosome rearrangement",
        "Repeated IVF failure — in selected patients with repeated unsuccessful IVF cycles",
        "Advanced maternal age — chromosome abnormalities in eggs and embryos become more common with increasing maternal age",
      ]}
      preparation={[
        "Some couples may require genetic testing even before starting an IVF cycle. Testing can include carrier screening, karyotyping, disease-specific genetic testing, assessment based on family history, and genetic counselling.",
        "If you're considering testing for a specific inherited condition (PGT-M), this is best discussed well before your cycle begins. It may involve additional preparatory genetic testing of both partners to design the correct genetic screen for the embryos.",
        "Genetic counselling is an essential part of the process. A genetic counsellor can help explain why testing is being considered, which test is appropriate, what the possible results mean, what cannot be detected, the chance of inconclusive results, reproductive options, and whether relatives may need testing.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility and Medical Consultation", description: "Your fertility specialist reviews reproductive history, previous pregnancies, miscarriages, previous IVF cycles, family history, known genetic disorders, and previous genetic reports." },
        { title: "Step 2 – Genetic Evaluation if Required", description: "Depending on the indication, you may be advised to undergo carrier screening, karyotype, disease-specific genetic testing, genetic counselling, or additional laboratory investigations." },
        { title: "Step 3 – IVF Planning", description: "Because embryo genetic testing requires embryos, PGT is generally performed as part of IVF. The female partner undergoes ovarian stimulation to develop multiple follicles." },
        { title: "Step 4 – Egg Retrieval", description: "Once follicles are ready, eggs are retrieved from the ovaries and transferred to the embryology laboratory." },
        { title: "Step 5 – Fertilisation", description: "Eggs are fertilised using IVF or ICSI according to the clinical and laboratory plan." },
        { title: "Step 6 – Embryo Culture", description: "Fertilised eggs are cultured in the laboratory. Suitable embryos may develop to the blastocyst stage over several days." },
        { title: "Step 7 – Embryo Biopsy", description: "A small number of cells may be removed from the outer portion of a suitable blastocyst. The biopsy sample is then prepared for genetic testing." },
        { title: "Step 8 – Embryo Freezing", description: "Embryos are commonly frozen after biopsy while genetic results are processed." },
        { title: "Step 9 – Genetic Laboratory Analysis", description: "The biopsied cells are analysed according to the type of PGT being performed: PGT-A, PGT-M, or PGT-SR." },
        { title: "Step 10 – Results and Counselling", description: "Results are reviewed with the couple. The fertility and genetics teams explain which embryos may be considered for transfer and any limitations of the findings." },
        { title: "Step 11 – Frozen Embryo Transfer", description: "If a suitable embryo is available, a frozen embryo transfer cycle may be planned. The uterine lining is prepared and the selected embryo is transferred." },
      ]}
      whatToExpect="Because samples are sent to a specialised genetics lab, results generally take 7-14 days to come back — longer than standard embryo assessment. This is factored into your transfer timeline, and involves vitrifying (freezing) embryos while awaiting results. The actual biopsy procedure is performed by an experienced embryologist under a high-powered microscope using micromanipulation tools. PGT does not guarantee pregnancy or the birth of a baby without health problems."
      benefits={[
        "Provides Genetic Information Before Embryo Transfer — PGT can provide information about selected genetic or chromosomal abnormalities before an embryo is transferred",
        "May Help Couples With Known Inherited Conditions — PGT-M can help couples at risk of transmitting certain known inherited diseases",
        "Helps With Structural Chromosome Rearrangements — PGT-SR may help couples where one partner carries an appropriate structural chromosome rearrangement",
        "Supports Informed Embryo Selection — Testing results may provide additional information when choosing embryos for transfer",
        "Enables Personalised Fertility Planning — PGT can be incorporated into IVF only when there is an appropriate clinical or genetic indication",
        "May improve implantation rates by selecting chromosomally normal embryos",
      ]}
      considerations={[
        "Cannot detect every genetic disorder",
        "Cannot guarantee pregnancy",
        "Cannot guarantee a healthy baby",
        "May produce inconclusive results",
        "May identify mosaic findings",
        "Requires an IVF cycle",
        "May increase overall treatment cost",
        "May result in no embryos being suitable for transfer",
        "Embryo biopsy carries a small risk of affecting embryo development",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The treatment within which genetic testing is performed." },
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "Often used in conjunction with genetic testing for male-factor cases." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation that may identify the need for genetic testing." },
        { name: "Recurrent Miscarriage", href: "/recurrent-miscarriage", blurb: "Evaluation and treatment options for couples experiencing recurrent pregnancy loss." },
        { name: "Embryo Transfer", href: "/embryo-transfer", blurb: "The process of transferring genetically tested embryos." },
        { name: "Male Infertility", href: "/male-infertility-treatment-in-noida", blurb: "Male factor evaluation that may influence genetic testing decisions." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Preimplantation Genetic Testing (PGT)",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/preimplantation-genetic-testing-pgt/",
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
          question: "What is genetic testing in IVF?",
          answer:
            "Genetic testing in IVF generally refers to Preimplantation Genetic Testing, where cells from embryos are analysed for selected genetic or chromosomal abnormalities before embryo transfer.",
        },
        {
          question: "What does PGT stand for?",
          answer:
            "PGT stands for Preimplantation Genetic Testing.",
        },
        {
          question: "What is the difference between PGT-A and PGT-M?",
          answer:
            "PGT-A evaluates chromosome number, while PGT-M is designed to test for a specific known single-gene disorder.",
        },
        {
          question: "What is PGT-SR?",
          answer:
            "PGT-SR is used in selected cases where one parent carries a structural chromosome rearrangement.",
        },
        {
          question: "Is PGT-A necessary for every IVF patient?",
          answer:
            "No. PGT-A is not routinely necessary for every patient. Its potential benefit should be assessed individually.",
        },
        {
          question: "Can genetic testing detect all diseases?",
          answer:
            "No. PGT cannot detect every genetic or medical condition.",
        },
        {
          question: "Can genetic testing prevent miscarriage?",
          answer:
            "PGT may provide useful information in selected cases, but it cannot guarantee that miscarriage will not occur.",
        },
        {
          question: "Does PGT guarantee pregnancy?",
          answer:
            "No. Implantation and pregnancy depend on many factors beyond the genetic test result.",
        },
        {
          question: "Is IVF necessary for PGT?",
          answer:
            "Embryos need to be created in the laboratory before preimplantation genetic testing can be performed, so PGT is carried out as part of IVF.",
        },
        {
          question: "What happens after embryo biopsy?",
          answer:
            "Embryos are commonly frozen while the biopsy sample undergoes laboratory testing. A suitable embryo may later be transferred in a frozen embryo transfer cycle.",
        },
        {
          question: "Can PGT be used for inherited genetic diseases?",
          answer:
            "PGT-M may be used for selected known inherited single-gene disorders when an appropriate genetic test can be developed.",
        },
        {
          question: "What is the cost of embryo genetic testing  ",
          answer:
            "Cost depends on the type of PGT, number of samples, IVF treatment, embryo biopsy, genetic laboratory charges and other fertility procedures.",
        },
        {
          question: "Where can I discuss genetic testing for IVF  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised discussion regarding IVF and embryo genetic testing.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Genetic Testing for Embryos in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Advanced Preimplantation Genetic Testing (PGT) for selected IVF patients and couples with genetic or chromosomal concerns.
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
              Book Genetic Testing Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Blood test for genetic screening before IVF at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for IVF with genetic testing at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Genetic Testing in IVF Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Genetic Testing in IVF?</h2>
          <p className="text-ink-600">
            Genetic testing in IVF commonly refers to <strong>Preimplantation Genetic Testing (PGT)</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            PGT involves testing cells from embryos created through <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link> to obtain information about certain chromosome or genetic abnormalities before an embryo is selected for transfer.
          </p>
          <p className="text-ink-600 mt-2">
            Depending on the indication, different forms of PGT may be considered:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li><strong>PGT-A</strong> — Preimplantation Genetic Testing for Aneuploidy</li>
            <li><strong>PGT-M</strong> — Preimplantation Genetic Testing for Monogenic Disorders</li>
            <li><strong>PGT-SR</strong> — Preimplantation Genetic Testing for Structural Rearrangements</li>
          </ul>
          <p className="text-ink-600 mt-2">These tests answer different genetic questions and should not be considered interchangeable.</p>
        </div>

        {/* Types of Genetic Testing */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Types of Genetic Testing for Embryos</h2>
          
          <div className="space-y-6">
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">PGT-A – Preimplantation Genetic Testing for Aneuploidy</h3>
              <p className="text-ink-600 text-sm mt-1">PGT-A evaluates the number of chromosomes present in sampled embryo cells. A typical human cell has 46 chromosomes. An embryo with the expected chromosome number is commonly described as euploid, while an embryo with missing or extra chromosomes may be described as aneuploid.</p>
              <p className="text-ink-600 text-sm mt-2">PGT-A may be discussed in selected IVF cases, but it should not automatically be used for every IVF patient.</p>
              
              <h4 className="font-semibold text-ink-900 text-sm mt-3">Who May Discuss PGT-A?</h4>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1">
                <li>Advanced maternal age</li>
                <li>Recurrent pregnancy loss</li>
                <li>Repeated unsuccessful IVF treatment</li>
                <li>Certain previous chromosomal findings</li>
                <li>Other situations identified by the fertility specialist</li>
              </ul>
            </div>
            
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">PGT-M – Preimplantation Genetic Testing for Monogenic Disorders</h3>
              <p className="text-ink-600 text-sm mt-1">PGT-M is used when there is a known risk of passing a specific single-gene condition to a child. Examples may include certain inherited disorders where the causative genetic variant has already been identified.</p>
              <p className="text-ink-600 text-sm mt-2">PGT-M is generally performed as part of IVF even when a couple does not otherwise have infertility.</p>
              
              <h4 className="font-semibold text-ink-900 text-sm mt-3">Who May Consider PGT-M?</h4>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1">
                <li>One partner has a known inherited genetic condition</li>
                <li>Both partners carry variants for the same recessive genetic condition</li>
                <li>There is a serious inherited condition in the family</li>
                <li>A previous child has been affected by a known genetic disorder</li>
                <li>Genetic testing has identified a specific disease-causing variant</li>
                <li>A genetic specialist recommends embryo testing</li>
              </ul>
              <p className="text-sm text-ink-500 mt-2">Because PGT-M is condition-specific, genetic counselling and test development may be required before the IVF cycle.</p>
            </div>
            
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">PGT-SR – Preimplantation Genetic Testing for Structural Rearrangements</h3>
              <p className="text-ink-600 text-sm mt-1">PGT-SR is used in selected couples where one partner carries a known structural chromosome rearrangement. Examples may include balanced translocations, certain inversions, and other clinically relevant chromosome rearrangements.</p>
              <p className="text-ink-600 text-sm mt-2">These abnormalities may increase the likelihood of embryos having unbalanced chromosome material. PGT-SR can help evaluate embryos for relevant chromosome imbalance before transfer.</p>
            </div>
          </div>
        </div>

        {/* PGT-A vs PGT-M vs PGT-SR */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            PGT-A vs PGT-M vs PGT-SR
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h4 className="font-bold text-ink-900 text-sm text-rose-600">PGT-A</h4>
              <p className="text-ink-600 text-xs mt-1">Evaluates chromosome number abnormalities.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h4 className="font-bold text-ink-900 text-sm text-rose-600">PGT-M</h4>
              <p className="text-ink-600 text-xs mt-1">Tests embryos for a specific known single-gene disorder.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h4 className="font-bold text-ink-900 text-sm text-rose-600">PGT-SR</h4>
              <p className="text-ink-600 text-xs mt-1">Evaluates embryos when a parent carries a known structural chromosome rearrangement.</p>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The correct test depends on your genetic history and clinical indication.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Embryo biopsy procedure for genetic testing at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Genetic testing consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
              alt="Embryology lab at Divine IVF Clinic for genetic testing Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Genetic Carrier Screening Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Genetic Carrier Screening?</h2>
          <p className="text-ink-600 text-sm">Carrier screening can help identify whether an individual carries certain inherited genetic conditions. A carrier may be healthy but could pass a disease-related genetic variant to their child.</p>
          <p className="text-ink-600 text-sm mt-2">When both partners carry variants affecting the same recessive condition, genetic counselling can help explain reproductive risks and available options.</p>
          <p className="text-ink-600 text-sm mt-2">Not every couple requires the same carrier-screening panel.</p>
        </div>

        {/* Genetic Counselling Section */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Why Is Genetic Counselling Important?
          </h3>
          <p className="text-ink-600 text-sm">Genetic counselling is an important part of reproductive genetic testing. A genetic counsellor or appropriately trained specialist can help explain:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why testing is being considered
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Which test is appropriate
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What the possible results mean
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What cannot be detected
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              The chance of inconclusive results
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Reproductive options
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Whether relatives may need testing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Whether prenatal testing may still be recommended
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Genetic counselling is particularly important when PGT-M is being considered.</p>
        </div>

        {/* Does Genetic Testing Guarantee a Healthy Baby */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Does Genetic Testing Guarantee a Healthy Baby?</h2>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">PGT can provide information about specific chromosome or genetic abnormalities, but it cannot test for every possible medical, developmental or genetic condition.</p>
          <p className="text-ink-600 text-sm mt-2">It also does not guarantee:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertilisation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Blastocyst development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              A genetically suitable embryo
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Implantation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Avoidance of miscarriage
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              A completely healthy baby
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Prenatal screening or diagnostic testing may still be discussed during pregnancy.</p>
        </div>

        {/* How Accurate Is PGT / Mosaic Embryo / Embryo Biopsy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Important Considerations About PGT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">How Accurate Is PGT?</h3>
              <p className="text-ink-600 text-sm">Modern genetic testing can provide valuable information, but no genetic test is perfect. Possible limitations include no-result or inconclusive findings, mosaic results, sampling limitations, laboratory limitations, rare diagnostic errors, embryos unsuitable for biopsy, and no suitable embryo being available after testing. These possibilities should be discussed before treatment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">What Is a Mosaic Embryo?</h3>
              <p className="text-ink-600 text-sm">A mosaic result generally means that the sampled cells show a mixture of cells with different chromosome findings. Interpretation can be complex. Decisions about whether a mosaic embryo should be considered for transfer require careful discussion with the fertility team and, where appropriate, a genetics specialist.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Does Embryo Biopsy Damage the Embryo?</h3>
              <p className="text-ink-600 text-sm">Embryo biopsy is a specialised laboratory procedure. Most embryos continue to develop after an appropriately performed biopsy, but the procedure is not completely risk-free. There is a small possibility that an embryo may be affected or may not survive later processes such as freezing and thawing.</p>
            </div>
          </div>
        </div>

        {/* Is PGT-A Recommended for Every IVF Patient */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Is PGT-A Recommended for Every IVF Patient?
          </h3>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">PGT-A should not automatically be added to every IVF cycle. Whether it may be useful depends on factors such as:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Female age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              IVF history
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Number of embryos
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy-loss history
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Genetic findings
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Individual treatment goals
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The potential advantages, costs and limitations should be discussed before deciding.</p>
        </div>

        {/* Benefits of Genetic Testing */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Benefits of Genetic Testing in IVF
          </h3>
          <ul className="space-y-2">
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Provides Genetic Information Before Embryo Transfer</strong> PGT can provide information about selected genetic or chromosomal abnormalities before an embryo is transferred.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                May Help Couples With Known Inherited Conditions</strong> PGT-M can help couples at risk of transmitting certain known inherited diseases.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Helps With Structural Chromosome Rearrangements</strong> PGT-SR may help couples where one partner carries an appropriate structural chromosome rearrangement.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Supports Informed Embryo Selection</strong> Testing results may provide additional information when choosing embryos for transfer.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Enables Personalised Fertility Planning</strong> PGT can be incorporated into IVF only when there is an appropriate clinical or genetic indication.
            </li>
          </ul>
        </div>

        {/* Limitations of Genetic Testing */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Limitations of Genetic Testing in IVF</h2>
          <p className="text-ink-600 text-sm">Patients should understand that PGT:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Cannot detect every genetic disorder
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Cannot guarantee pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Cannot guarantee a healthy baby
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              May produce inconclusive results
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              May identify mosaic findings
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Requires an IVF cycle
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              May increase overall treatment cost
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              May result in no embryos being suitable for transfer
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Proper counselling before testing is important.</p>
        </div>

        {/* Genetic Testing Cost */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Genetic Testing Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of genetic testing in IVF in Noida varies depending on the type of testing and the overall fertility treatment plan. Costs may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Genetic consultation or counselling
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Genetic blood tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF cycle
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Egg retrieval
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI if required
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo culture
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo biopsy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              PGT laboratory testing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo freezing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Frozen embryo transfer
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">PGT-M may also involve condition-specific testing preparation. An accurate cost estimate can therefore only be given after the required test has been identified.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Genetic Testing  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Assessment</strong> — Genetic testing is considered according to each couple`s reproductive history and clinical findings rather than being routinely recommended to everyone.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF Treatment Planning</strong> — Embryo genetic testing can be incorporated into an IVF treatment plan when clinically appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evaluation of Both Partners</strong> — Family history and fertility factors involving both partners are considered.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Advanced Fertility Options</strong> — Depending on the fertility diagnosis, treatments may include IVF, ICSI and embryo genetic testing where appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Fertility Care</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Noida Location</strong> — Divine IVF is located in Sector 76, Noida, for couples seeking fertility evaluation and advanced reproductive treatment.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Genetic Testing Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have a family history of a genetic disorder, recurrent pregnancy loss, a known chromosome rearrangement, or have been advised to consider embryo genetic testing, a detailed consultation can help determine the appropriate next step.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised IVF treatment planning based on your fertility and medical history.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Genetic Testing Consultation
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