// app/imsi-treatment-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/imsi-treatment-in-noida" },
  title: "IMSI Treatment in Noida | IMSI Centre & Specialist | Divine IVF",
  description:
    "Get IMSI treatment in Noida at Divine IVF for selected male infertility and sperm morphology concerns. Consult Dr. Mandavi Rai for personalised IVF-ICSI-IMSI care.",
  robots: { index: true, follow: true },
  keywords:
    "IMSI Treatment in Noida, IMSI Centre in Noida, IMSI Clinic in Noida, Best IMSI Centre in Noida, IMSI Specialist in Noida, IMSI Doctor in Noida, IMSI Cost in Noida, IMSI Treatment Cost in Noida, IMSI Procedure in Noida, Intracytoplasmic Morphologically Selected Sperm Injection in Noida, IMSI IVF Treatment in Noida, IMSI with ICSI in Noida, Advanced Sperm Selection in Noida, IMSI for Male Infertility in Noida, IMSI for Poor Sperm Morphology, IMSI for Low Sperm Count, IMSI After Failed ICSI, Male Infertility Treatment in Noida, ICSI Treatment in Noida, IVF Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida, IMSI Treatment Near Me",
  openGraph: {
    title: "IMSI Treatment in Noida | IMSI Centre & Specialist | Divine IVF",
    description:
      "Get IMSI treatment in Noida at Divine IVF for selected male infertility and sperm morphology concerns. Consult Dr. Mandavi Rai for personalised IVF-ICSI-IMSI care.",
    url: "http://divine-ivf.vercel.app/imsi-treatment-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/wgUf9xGLRx7nyegNScHl/image.png",
        width: 1200,
        height: 630,
        alt: "IMSI high-magnification sperm selection at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ImsiTreatmentPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "ICSI Treatment", href: "/icsi-treatment-in-noida" },
        { label: "IMSI Treatment in Noida" },
      ]}
      eyebrow="Advanced IVF · Embryology · Noida"
      // ========== H1 ==========
      titlePlain="IMSI Treatment in Noida"
      titleAccent="Advanced sperm selection technique for selected male infertility cases during IVF-ICSI treatment"
      // =========================
      intro="If male-factor infertility, poor sperm quality, repeated fertilisation problems, or previous unsuccessful IVF cycles are affecting your fertility treatment, IMSI treatment in Noida may be considered in selected cases."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/wgUf9xGLRx7nyegNScHl/image.png"
      heroAlt="High-magnification microscope for IMSI treatment at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Embryologist performing high-magnification sperm selection for IMSI at Divine IVF"
      whatItIs={[
        "IMSI stands for Intracytoplasmic Morphologically Selected Sperm Injection. IMSI is an advanced laboratory sperm-selection technique used in selected IVF-ICSI cycles.",
        "During standard ICSI, an embryologist selects a sperm and injects it directly into a mature egg. In IMSI, sperm are examined under very high magnification before selection. This allows the embryologist to evaluate sperm morphology in greater detail and select sperm that appear more suitable for injection.",
        "The selected sperm is then injected into the egg using the ICSI technique. IMSI is therefore not a separate alternative to IVF. It is a laboratory technique that may be used as part of an IVF-ICSI cycle.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and advanced treatment planning for couples who may require specialised sperm selection techniques as part of IVF and ICSI treatment.",
      ]}
      whoNeedsIt={[
        "Severe male-factor infertility — men with significant abnormalities in sperm count, motility, or morphology",
        "Poor sperm morphology — when semen analysis shows a high proportion of abnormally shaped sperm",
        "Previous IVF or ICSI failure — if previous IVF-ICSI treatment resulted in poor fertilisation or unsuccessful outcomes",
        "Repeated fertilisation problems — couples with a history of low or failed fertilisation",
        "Repeated embryo development problems — when embryo development has repeatedly been suboptimal",
        "Selected cases of recurrent pregnancy loss — where male factors may be contributing",
      ]}
      preparation={[
        "Before IVF treatment, the female partner may undergo investigations such as AMH, hormonal testing, ultrasound, antral follicle count, and uterine evaluation. Male fertility evaluation may include semen analysis, sperm concentration assessment, motility assessment, morphology assessment, hormonal evaluation where required, and additional testing in selected cases.",
        "IMSI is a lab-stage refinement within an existing IVF-ICSI cycle, so there's no separate preparation beyond your standard ovarian stimulation and monitoring schedule. The same egg retrieval process applies, and the female partner's experience is identical to a standard IVF cycle.",
        "For the male partner, the same preparation applies as for standard ICSI — providing a fresh semen sample on the day of egg retrieval, or undergoing surgical sperm retrieval if needed.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility Consultation", description: "Treatment begins with a detailed consultation reviewing duration of infertility, female age, ovarian reserve, semen analysis, previous IVF cycles, previous ICSI results, fertilisation history, embryo development history, and medical and surgical history." },
        { title: "Step 2 – Female Fertility Assessment", description: "Investigations such as AMH, hormonal testing, ultrasound, antral follicle count, and uterine evaluation may be performed." },
        { title: "Step 3 – Male Fertility Evaluation", description: "Semen analysis, sperm concentration, motility, morphology assessment, and hormonal evaluation where required." },
        { title: "Step 4 – Ovarian Stimulation", description: "Fertility medicines stimulate the ovaries so multiple follicles can develop. Response is monitored using ultrasound and blood tests." },
        { title: "Step 5 – Egg Retrieval", description: "Once follicles are ready, eggs are collected from the ovaries and transferred to the embryology laboratory." },
        { title: "Step 6 – Semen Sample Preparation", description: "A semen sample is collected and processed. The embryology team separates and prepares sperm for detailed assessment." },
        { title: "Step 7 – High-Magnification Sperm Selection", description: "Sperm are examined at very high magnification to assess morphology in greater detail. A suitable sperm is then chosen for injection." },
        { title: "Step 8 – ICSI Procedure", description: "The selected sperm is injected directly into a mature egg using the ICSI technique." },
        { title: "Step 9 – Fertilisation Check", description: "After injection, eggs are monitored to determine whether fertilisation has occurred. IMSI does not guarantee fertilisation of every egg." },
        { title: "Step 10 – Embryo Culture", description: "Fertilised eggs are cultured and monitored in the embryology laboratory. Embryo development is assessed over the following days." },
        { title: "Step 11 – Embryo Transfer or Freezing", description: "A suitable embryo may be transferred into the uterus or frozen for future transfer." },
        { title: "Step 12 – Pregnancy Test", description: "A pregnancy test is performed after embryo transfer according to the doctor's recommended timeline." },
      ]}
      whatToExpect="Like PICSI, IMSI is a lab-stage refinement within an IVF-ICSI cycle — your stimulation, egg retrieval, and embryo transfer process remains the same. You won't notice any difference in your experience, as the high-magnification selection happens entirely in the embryology lab. The key difference is in the precision of sperm selection, which may improve your chances of achieving fertilisation and healthy embryo development. IMSI does not guarantee fertilisation, better embryo development, implantation, pregnancy, or live birth."
      benefits={[
        "Detailed Sperm Assessment — IMSI allows sperm morphology to be examined under higher magnification",
        "Advanced Sperm Selection — The technique may help embryologists select sperm more carefully in selected cases",
        "Useful in Certain Male-Factor Cases — May be considered when significant sperm morphology abnormalities or previous fertilisation issues are present",
        "Used With ICSI — The selected sperm is injected directly into a mature egg using ICSI",
        "Personalised Laboratory Approach — IMSI can be considered as part of an individualised IVF plan rather than a routine add-on",
      ]}
      considerations={[
        "It is not required for every IVF patient",
        "It does not guarantee fertilisation",
        "It does not guarantee embryo development",
        "It does not guarantee pregnancy",
        "It does not replace proper male and female fertility evaluation",
        "The potential benefit varies according to the fertility diagnosis",
        "Adds to the cost of an IVF cycle due to specialised equipment and expertise required",
      ]}
      related={[
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "The base injection technique that IMSI refines with high-magnification sperm selection." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The complete IVF process within which IMSI is performed." },
        { name: "Male Infertility", href: "/male-infertility-treatment-in-noida", blurb: "Comprehensive male fertility evaluation that determines if IMSI may be needed." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The fertility evaluation that identifies the need for advanced sperm selection." },
        { name: "Low Sperm Count Treatment", href: "/low-sperm-count-treatment", blurb: "Treatment options for men with reduced sperm concentration." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval", blurb: "Surgical sperm retrieval techniques for use with IMSI." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
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
          question: "What does IMSI stand for?",
          answer:
            "IMSI stands for Intracytoplasmic Morphologically Selected Sperm Injection.",
        },
        {
          question: "What is IMSI treatment?",
          answer:
            "IMSI is an advanced sperm-selection technique in which sperm are examined under very high magnification before one is selected for injection into an egg using ICSI.",
        },
        {
          question: "Is IMSI the same as ICSI?",
          answer:
            "No. ICSI is the sperm-injection procedure, while IMSI is an advanced sperm-selection technique performed before ICSI.",
        },
        {
          question: "Who may need IMSI?",
          answer:
            "IMSI may be considered in selected cases of severe male-factor infertility, poor sperm morphology, previous fertilisation failure, or repeated unsuccessful IVF-ICSI treatment.",
        },
        {
          question: "Is IMSI better than ICSI?",
          answer:
            "Not necessarily. Standard ICSI is suitable for many patients. IMSI may be helpful only in selected cases where detailed sperm selection is considered clinically relevant.",
        },
        {
          question: "Can IMSI help with poor sperm morphology?",
          answer:
            "It may be considered when sperm morphology is significantly abnormal, but the decision depends on the full semen analysis and fertility history.",
        },
        {
          question: "Can IMSI help after failed ICSI?",
          answer:
            "In selected cases, IMSI may be discussed after poor fertilisation or unsuccessful ICSI, but other possible causes also need to be evaluated.",
        },
        {
          question: "Does IMSI guarantee pregnancy?",
          answer:
            "No. IMSI does not guarantee fertilisation, embryo development, implantation, or pregnancy.",
        },
        {
          question: "Is IMSI part of IVF?",
          answer:
            "Yes. IMSI is used as part of an IVF cycle when ICSI is being performed.",
        },
        {
          question: "Is IMSI painful?",
          answer:
            "The IMSI procedure takes place in the laboratory and is not felt by the patient. However, the IVF cycle itself includes ovarian stimulation and egg retrieval.",
        },
        {
          question: "What is the cost of IMSI treatment  ",
          answer:
            "The total cost depends on the IVF cycle, medicines, ICSI, IMSI laboratory charges, investigations, embryo freezing and other treatment components.",
        },
        {
          question: "Where can I get IMSI treatment  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised IVF-ICSI-IMSI treatment planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          IMSI Treatment in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Advanced sperm selection technique for selected male infertility cases during IVF-ICSI treatment.
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
              Book IMSI Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal blood test for IVF with IMSI treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for IVF with IMSI treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is IMSI Treatment Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is IMSI Treatment?</h2>
          <p className="text-ink-600">
            <strong>IMSI</strong> stands for <strong>Intracytoplasmic Morphologically Selected Sperm Injection</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            IMSI is an advanced laboratory sperm-selection technique used in selected <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link>-<Link href="/icsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">ICSI</Link> cycles.
          </p>
          <p className="text-ink-600 mt-2">
            During standard ICSI, an embryologist selects a sperm and injects it directly into a mature egg.
          </p>
          <p className="text-ink-600 mt-2">
            In IMSI, sperm are examined under very high magnification before selection. This allows the embryologist to evaluate sperm morphology in greater detail and select sperm that appear more suitable for injection.
          </p>
          <p className="text-ink-600 mt-2">
            The selected sperm is then injected into the egg using the ICSI technique.
          </p>
        </div>

        {/* How Does IMSI Work */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">How Does IMSI Work?</h2>
          <p className="text-ink-600 text-sm">IMSI combines detailed sperm selection with ICSI. The process generally involves:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 list-disc list-inside text-sm text-ink-600">
            <li>Collection of semen sample</li>
            <li>Laboratory preparation of sperm</li>
            <li>High-magnification sperm examination</li>
            <li>Detailed assessment of sperm morphology</li>
            <li>Selection of a suitable sperm</li>
            <li>Injection of the selected sperm into a mature egg</li>
            <li>Fertilisation monitoring</li>
            <li>Embryo development</li>
            <li>Embryo transfer or freezing, depending on the treatment plan</li>
          </ul>
          <p className="text-sm text-ink-500 mt-3">IMSI is therefore not a separate alternative to IVF. It is a laboratory technique that may be used as part of an IVF-ICSI cycle.</p>
        </div>

        {/* Who May Need IMSI Treatment */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Need IMSI Treatment?</h2>
          <p className="text-ink-600 text-sm mb-3">IMSI is not required for every IVF patient. It may be considered in selected situations.</p>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-ink-900">Severe Male-Factor Infertility</h3>
              <p className="text-ink-600 text-sm">Men with significant abnormalities in sperm count, motility, or morphology may be considered for advanced sperm selection.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Poor Sperm Morphology</h3>
              <p className="text-ink-600 text-sm">When semen analysis shows a high proportion of abnormally shaped sperm, detailed sperm evaluation may be considered.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previous IVF or ICSI Failure</h3>
              <p className="text-ink-600 text-sm">If previous IVF-ICSI treatment resulted in poor fertilisation or unsuccessful outcomes, the fertility team may review whether a different sperm-selection approach is appropriate.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Repeated Fertilisation Problems</h3>
              <p className="text-ink-600 text-sm">Couples with a history of low or failed fertilisation may sometimes be considered for IMSI depending on the underlying cause.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Repeated Embryo Development Problems</h3>
              <p className="text-ink-600 text-sm">In selected cases where embryo development has repeatedly been suboptimal, sperm-related factors may be reviewed as part of the overall fertility assessment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Selected Cases of Recurrent Pregnancy Loss</h3>
              <p className="text-ink-600 text-sm">In some fertility situations, a detailed evaluation of male factors may be considered as part of a broader investigation. IMSI is not automatically recommended for recurrent miscarriage, and the decision depends on the complete clinical picture.</p>
            </div>
          </div>
        </div>

        {/* IMSI vs ICSI / IMSI vs IVF */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">IMSI vs ICSI – What Is the Difference?</h2>
          <p className="text-ink-600 text-sm">The main difference between IMSI and ICSI is the sperm-selection process.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-sm text-rose-600">ICSI</h3>
              <p className="text-ink-600 text-sm">In standard ICSI:</p>
              <ul className="space-y-1 mt-2 text-xs text-ink-600">
                <li>• Sperm are assessed under laboratory magnification</li>
                <li>• A suitable sperm is selected</li>
                <li>• One sperm is injected directly into a mature egg</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h3 className="font-bold text-ink-900 text-sm text-rose-600">IMSI</h3>
              <p className="text-ink-600 text-sm">In IMSI:</p>
              <ul className="space-y-1 mt-2 text-xs text-ink-600">
                <li>• Sperm are examined at much higher magnification</li>
                <li>• Morphology is evaluated in greater detail</li>
                <li>• A selected sperm is then injected into the egg using ICSI</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">So, IMSI is essentially an advanced sperm-selection step used before ICSI.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Sperm preparation for IMSI high-magnification selection at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="IMSI consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/OQMsnnu9725K5j693Vfo/image.png"
              alt="Embryology lab for IMSI and IVF procedures at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* What Is High-Magnification Sperm Selection */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is High-Magnification Sperm Selection?</h2>
          <p className="text-ink-600 text-sm">The key feature of IMSI is the use of advanced microscopic magnification. This enables the embryologist to examine sperm morphology in greater detail.</p>
          <p className="text-ink-600 text-sm mt-2">The goal is to select a sperm that appears more suitable for injection.</p>
          <p className="text-ink-600 text-sm mt-2">However, sperm appearance alone does not determine the overall success of fertility treatment. Outcomes also depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Egg quality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Female age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Uterine health
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other fertility factors
            </div>
          </div>
        </div>

        {/* IMSI for Specific Conditions */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">IMSI for Specific Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">IMSI for Poor Sperm Morphology</h3>
              <p className="text-ink-600 text-sm">One of the situations in which IMSI may be considered is significant sperm morphology abnormality. When a high percentage of sperm appear structurally abnormal, detailed sperm assessment may help the embryologist select a more suitable sperm for ICSI. However, treatment decisions should consider the entire semen analysis rather than morphology alone.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IMSI for Low Sperm Count</h3>
              <p className="text-ink-600 text-sm">IMSI may sometimes be considered when low sperm count occurs along with other sperm-quality concerns. Low sperm count itself does not automatically mean IMSI is necessary. The decision depends on sperm concentration, motility, morphology, previous treatment outcomes, and female fertility factors.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IMSI for Poor Sperm Motility</h3>
              <p className="text-ink-600 text-sm">Poor sperm motility can make natural conception and conventional fertilisation more difficult. When ICSI is already planned, advanced sperm-selection methods may be discussed in selected cases.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IMSI After Failed ICSI</h3>
              <p className="text-ink-600 text-sm">If a previous ICSI cycle resulted in poor fertilisation, poor embryo development, or no pregnancy, the fertility team may review multiple possible factors. These may include egg quality, sperm quality, embryology factors, uterine factors, genetic factors, and treatment protocol. IMSI may be considered only when sperm-selection concerns are thought to be relevant.</p>
            </div>
          </div>
        </div>

        {/* Does IMSI Improve IVF Success */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Does IMSI Improve IVF Success?
          </h3>
          <p className="text-ink-600 text-sm">There is no single answer that applies to every patient.</p>
          <p className="text-ink-600 text-sm mt-2">IMSI may be considered in selected male-factor infertility cases, but it does not guarantee:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertilisation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Better embryo development
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
              Live birth
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The potential benefit depends on the underlying fertility condition. It should therefore be recommended only when clinically appropriate rather than being used routinely for every IVF cycle.</p>
        </div>

        {/* Benefits of IMSI Treatment */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Benefits of IMSI Treatment
          </h3>

          <ul className="space-y-2">
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Detailed Sperm Assessment
              </strong>
              IMSI allows sperm morphology to be examined under higher magnification.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Advanced Sperm Selection
              </strong>
              The technique may help embryologists select sperm more carefully in selected cases.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Useful in Certain Male-Factor Cases
              </strong>
              It may be considered when significant sperm morphology abnormalities or previous fertilisation issues are present.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Used With ICSI
              </strong>
              The selected sperm is injected directly into a mature egg using ICSI.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Personalised Laboratory Approach
              </strong>
              IMSI can be considered as part of an individualised IVF plan rather than a routine add-on.
            </li>
          </ul>
        </div>

        {/* Limitations of IMSI */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Limitations of IMSI</h2>
          <p className="text-ink-600 text-sm">Important limitations include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It is not required for every IVF patient
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It does not guarantee fertilisation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It does not guarantee embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It does not guarantee pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It does not replace proper male and female fertility evaluation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              The potential benefit varies according to the fertility diagnosis
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A personalised fertility consultation is important before deciding whether IMSI is appropriate.</p>
        </div>

        {/* IMSI Treatment Cost */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            IMSI Treatment Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of IMSI treatment in Noida depends on the overall IVF treatment plan. Factors may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF cycle charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ovarian stimulation medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Blood tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Egg retrieval
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI procedure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IMSI sperm selection
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryology laboratory services
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo freezing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Frozen embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Additional male fertility investigations
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because IMSI is usually used as part of IVF with ICSI, the total treatment cost can vary significantly. A personalised estimate should be provided after evaluation.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for IMSI Treatment  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Evaluation</strong> — Treatment planning is based on the couple`s complete fertility profile.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male and Female Fertility Assessment</strong> — Both partners are evaluated before advanced fertility treatment is selected.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF, ICSI and Advanced Sperm Selection Planning</strong> — Depending on clinical findings, conventional IVF, ICSI, IMSI, or other fertility options may be discussed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male Infertility Focus</strong> — Advanced sperm-selection techniques may be considered in selected male-factor infertility cases.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Treatment Planning</strong> — Treatment is planned under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Noida Location</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking fertility consultation and treatment in Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* When Should You Discuss IMSI */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When Should You Discuss IMSI With a Fertility Specialist?
          </h3>
          <p className="text-ink-600 text-sm">You may discuss IMSI if:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Severe sperm morphology abnormalities are present
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              There is significant male-factor infertility
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous IVF-ICSI cycles had poor fertilisation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous treatment had repeated embryo-development concerns
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Your embryology team identifies a sperm-selection issue
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have had repeated unsuccessful assisted reproduction cycles
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">IMSI should only be used when there is a clear clinical indication.</p>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an IMSI Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have severe male-factor infertility, poor sperm morphology, previous fertilisation failure, or unsuccessful IVF-ICSI treatment, discuss whether advanced sperm selection may be suitable for your case.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility assessment and advanced IVF treatment planning according to each couple`s individual fertility profile.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book IMSI Consultation
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