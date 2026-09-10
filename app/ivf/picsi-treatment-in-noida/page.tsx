// app/picsi-treatment-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/picsi-treatment-in-noida" },
  title: "PICSI Treatment in Noida | PICSI IVF & Sperm Selection | Divine IVF",
  description:
    "Explore PICSI treatment in Noida at Divine IVF for selected male-factor infertility cases. Learn about HA sperm selection, ICSI, benefits, limitations and cost.",
  robots: { index: true, follow: true },
  keywords:
    "PICSI Treatment in Noida, PICSI in Noida, PICSI IVF in Noida, PICSI ICSI in Noida, PICSI Centre in Noida, PICSI Clinic in Noida, PICSI Specialist in Noida, PICSI Treatment Cost in Noida, PICSI Cost in Noida, Physiological ICSI in Noida, Physiological Intracytoplasmic Sperm Injection in Noida, Hyaluronic Acid Sperm Selection in Noida, HA Sperm Selection in Noida, Advanced Sperm Selection in Noida, PICSI for Male Infertility in Noida, PICSI for Low Sperm Count, PICSI for Poor Sperm Motility, PICSI for Poor Sperm Quality, PICSI After Failed ICSI, Male Infertility Treatment in Noida, ICSI Treatment in Noida, IMSI Treatment in Noida, IVF Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "PICSI Treatment in Noida | PICSI IVF & Sperm Selection | Divine IVF",
    description:
      "Learn about PICSI treatment in Noida, HA-based sperm selection and its use with ICSI for selected male-factor infertility cases at Divine IVF.",
    url: "https://www.divineivf.com/picsi-treatment-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/ERTJSqNlZHvRXIiltip9/image.png",
        width: 1200,
        height: 630,
        alt: "PICSI sperm selection at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PicsiTreatmentPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "ICSI Treatment", href: "/icsi-treatment-in-noida" },
        { label: "PICSI Treatment in Noida" },
      ]}
      eyebrow="Advanced IVF · Sperm Selection · Noida"
      // ========== H1 ==========
      titlePlain="PICSI Treatment in Noida"
      titleAccent="Advanced sperm-selection technique used with ICSI for selected male-factor infertility cases"
      // =========================
      intro="If male infertility, poor sperm quality, previous fertilisation problems, or unsuccessful IVF-ICSI treatment is affecting your fertility journey, PICSI Treatment in Noida may be discussed in selected cases."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/ERTJSqNlZHvRXIiltip9/image.png"
      heroAlt="PICSI sperm selection procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="PICSI laboratory equipment at Divine IVF Clinic, Noida"
      whatItIs={[
        "PICSI stands for Physiological Intracytoplasmic Sperm Injection. PICSI is an advanced sperm-selection method used before ICSI.",
        "During PICSI, sperm are exposed to hyaluronic acid (HA), a naturally occurring substance found in the body. Sperm that are able to bind to hyaluronic acid may be selected for use during the ICSI procedure.",
        "The selected sperm is then injected directly into a mature egg. PICSI therefore does not replace IVF or ICSI. It is an additional sperm-selection step that may be used during an IVF-ICSI cycle.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and advanced IVF-ICSI treatment planning. PICSI is not required for every IVF patient and should be considered only after reviewing semen analysis, previous treatment outcomes, female fertility factors and the available scientific evidence.",
      ]}
      whoNeedsIt={[
        "Male-factor infertility — men with significant sperm abnormalities who already require ICSI",
        "Poor sperm quality — issues involving sperm quality where available sperm-selection options are reviewed",
        "Previous fertilisation problems — patients who have experienced poor or failed fertilisation during a previous IVF-ICSI cycle",
        "Previous unsuccessful ICSI — after reviewing egg quality, sperm quality, fertilisation, embryo development, female age, ovarian reserve, uterine factors, and laboratory factors",
        "Couples with elevated sperm DNA fragmentation where finer sperm selection may improve outcomes",
        "Men with advanced age where sperm quality may be compromised",
      ]}
      preparation={[
        "No separate preparation is needed beyond your standard IVF cycle — PICSI is a lab-stage decision made on the day of egg retrieval, based on your semen analysis and history reviewed beforehand.",
        "Before treatment, the female partner may undergo investigations such as AMH, hormonal tests, pelvic ultrasound, antral follicle count, uterine assessment, and additional fertility tests where required. Male fertility testing may include semen analysis, sperm concentration, motility, morphology, hormonal tests when clinically indicated, and additional investigations where required.",
        "If DNA fragmentation testing hasn't already been done and is relevant to your case, Dr. Rai may recommend it ahead of your cycle to help decide whether PICSI is worth considering.",
        "The rest of your IVF cycle — including ovarian stimulation and egg retrieval — proceeds exactly as with standard IVF. The PICSI selection happens entirely in the embryology lab after egg retrieval.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility Consultation", description: "The treatment journey begins with a detailed fertility consultation reviewing duration of infertility, previous pregnancies, previous IVF cycles, previous ICSI outcomes, female age, ovarian reserve, male fertility history, semen analysis, and fertilisation history." },
        { title: "Step 2 – Female Fertility Evaluation", description: "The female partner may undergo investigations such as AMH, hormonal tests, pelvic ultrasound, antral follicle count, uterine assessment, and additional fertility tests where required." },
        { title: "Step 3 – Male Fertility Evaluation", description: "Male fertility testing may include semen analysis, sperm concentration, motility, morphology, hormonal tests when clinically indicated, and additional investigations where required." },
        { title: "Step 4 – IVF Ovarian Stimulation", description: "The female partner receives fertility medication to stimulate the ovaries. Follicular development is monitored through ultrasound and, where needed, hormonal testing." },
        { title: "Step 5 – Egg Retrieval", description: "When follicles are appropriately developed, eggs are collected through an ultrasound-guided egg retrieval procedure and transferred to the embryology laboratory." },
        { title: "Step 6 – Semen Preparation", description: "A semen sample is collected and processed. Laboratory preparation helps isolate sperm that may be suitable for fertilisation." },
        { title: "Step 7 – PICSI Sperm Selection", description: "Prepared sperm are exposed to a hyaluronic-acid-containing medium. Sperm capable of binding to the HA surface may be identified and selected." },
        { title: "Step 8 – ICSI Procedure", description: "A selected sperm is injected directly into a mature egg using ICSI." },
        { title: "Step 9 – Fertilisation Check", description: "The eggs are checked after injection to determine whether fertilisation has occurred. Not every injected egg will necessarily fertilise." },
        { title: "Step 10 – Embryo Development", description: "Fertilised eggs are cultured in the embryology laboratory. Embryologists monitor development over the following days." },
        { title: "Step 11 – Embryo Transfer or Freezing", description: "Depending on the IVF plan, a suitable embryo may be transferred or frozen for a later frozen embryo transfer cycle." },
        { title: "Step 12 – Pregnancy Test", description: "A pregnancy test is performed after embryo transfer according to your fertility specialist's instructions." },
      ]}
      whatToExpect="PICSI takes place entirely at the lab stage of an IVF cycle — the rest of your treatment (stimulation, egg retrieval, embryo transfer) proceeds as with standard IVF or ICSI. You won't notice any difference in your experience, as the selection happens behind the scenes in the embryology lab. The key difference is in the precision of sperm selection, which may improve embryo development and pregnancy outcomes in specific cases. However, this selection method does not guarantee that every egg will fertilise, embryos will develop normally, implantation will occur, pregnancy will occur, or a live birth will result."
      benefits={[
        "Additional Sperm-Selection Method — HA binding provides another biological characteristic by which sperm can be selected",
        "Used Within ICSI — Selected sperm can be directly injected into an egg",
        "Non-Invasive Sperm Selection — The selection step is performed on the semen sample in the laboratory",
        "May Be Discussed in Selected Male-Factor Cases — The technique can be considered individually where an embryologist or fertility specialist believes additional sperm selection may be relevant",
        "Selects sperm with better DNA integrity and lower DNA fragmentation in selected cases",
        "May improve fertilisation rates and embryo quality in specific patient populations",
      ]}
      considerations={[
        "Not required for every IVF patient",
        "Does not guarantee fertilisation",
        "Does not guarantee better embryos",
        "Does not guarantee implantation",
        "Does not guarantee pregnancy",
        "Has not been shown to routinely improve live-birth outcomes over standard ICSI",
        "Should not replace proper male and female fertility evaluation",
        "Adds to the cost of an IVF cycle due to the specialised dish and additional lab work",
      ]}
      related={[
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "The base technique that PICSI builds upon — sperm injection into the egg." },
        { name: "IMSI Treatment", href: "/imsi-treatment-in-noida", blurb: "High-magnification sperm selection — an alternative approach to PICSI." },
        { name: "Male Infertility", href: "/male-infertility-treatment-in-noida", blurb: "Understanding the male-factor evaluation behind the decision to use PICSI." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The complete IVF process within which PICSI is performed." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation that may identify the need for PICSI." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval-in-noida", blurb: "Surgical sperm retrieval techniques for use with PICSI." },
        { name: "Genetic Testing", href: "/genetic-testing-in-ivf-noida", blurb: "Genetic screening of embryos created with PICSI-selected sperm." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
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
          question: "What does PICSI stand for?",
          answer:
            "PICSI stands for Physiological Intracytoplasmic Sperm Injection.",
        },
        {
          question: "What is PICSI?",
          answer:
            "PICSI is a sperm-selection technique in which sperm are exposed to hyaluronic acid. Sperm that bind to HA may be selected for use in ICSI.",
        },
        {
          question: "Is PICSI the same as ICSI?",
          answer:
            "No. ICSI is the procedure in which sperm is injected directly into an egg. PICSI is an additional sperm-selection method performed before ICSI.",
        },
        {
          question: "What is the difference between PICSI and IMSI?",
          answer:
            "PICSI selects sperm based on hyaluronic-acid binding, whereas IMSI selects sperm using very high magnification to evaluate morphology.",
        },
        {
          question: "Who may need PICSI?",
          answer:
            "PICSI may be discussed in selected patients undergoing ICSI for male-factor infertility or previous fertilisation concerns, although routine benefit has not been proven.",
        },
        {
          question: "Is PICSI better than ICSI?",
          answer:
            "Not routinely. Current evidence has not shown that PICSI increases live-birth rates compared with standard ICSI for male-factor infertility.",
        },
        {
          question: "Can PICSI help with low sperm count?",
          answer:
            "Low sperm count may be an indication for ICSI in certain cases, but it does not automatically mean PICSI is required.",
        },
        {
          question: "Can PICSI help poor sperm morphology?",
          answer:
            "PICSI selects sperm based on HA binding rather than morphology alone. Whether it is useful depends on the individual fertility situation.",
        },
        {
          question: "Does PICSI reduce miscarriage?",
          answer:
            "Some research has suggested a possible effect, but evidence is insufficient to confirm that PICSI reliably reduces miscarriage.",
        },
        {
          question: "Does PICSI guarantee better embryos?",
          answer:
            "No. Embryo development depends on both sperm and egg factors and many other biological variables.",
        },
        {
          question: "Does PICSI increase IVF success?",
          answer:
            "Current evidence does not show a routine live-birth advantage over standard ICSI.",
        },
        {
          question: "Is PICSI painful?",
          answer:
            "PICSI itself is a laboratory procedure performed on the sperm sample, so there is no separate invasive procedure for the patient.",
        },
        {
          question: "How much does PICSI cost in Noida?",
          answer:
            "The total cost depends on the IVF-ICSI package, laboratory charges, medicines, investigations and any additional procedures required.",
        },
        {
          question: "Where can I discuss PICSI treatment in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised IVF-ICSI treatment planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          PICSI Treatment in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Advanced sperm-selection technique used with ICSI for selected male-factor infertility cases.
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
              Book PICSI / IVF-ICSI Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for PICSI treatment evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for IVF with PICSI treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is PICSI Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is PICSI?</h2>
          <p className="text-ink-600">
            <strong>PICSI</strong> stands for <strong>Physiological Intracytoplasmic Sperm Injection</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            PICSI is an advanced sperm-selection method used before <Link href="/icsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">ICSI</Link>.
          </p>
          <p className="text-ink-600 mt-2">
            During PICSI, sperm are exposed to hyaluronic acid (HA), a naturally occurring substance found in the body.
          </p>
          <p className="text-ink-600 mt-2">
            Sperm that are able to bind to hyaluronic acid may be selected for use during the ICSI procedure.
          </p>
          <p className="text-ink-600 mt-2">
            The selected sperm is then injected directly into a mature egg.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            PICSI therefore does not replace IVF or ICSI. It is an additional sperm-selection step that may be used during an IVF-ICSI cycle.
          </p>
        </div>

        {/* How Does PICSI Work / What Is Hyaluronic Acid Sperm Selection */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">How Does PICSI Work?</h2>
          <p className="text-ink-600 text-sm">The PICSI process generally involves:</p>
          <ol className="list-decimal list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Semen sample collection</li>
            <li>Laboratory preparation of sperm</li>
            <li>Exposure of sperm to hyaluronic acid</li>
            <li>Identification of sperm that bind to HA</li>
            <li>Selection of suitable sperm</li>
            <li>Injection of the selected sperm into a mature egg through ICSI</li>
            <li>Fertilisation monitoring</li>
            <li>Embryo culture</li>
            <li>Embryo transfer or freezing according to the treatment plan</li>
          </ol>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">What Is Hyaluronic Acid Sperm Selection?</h3>
          <p className="text-ink-600 text-sm mt-1">Hyaluronic acid is naturally present in the reproductive environment. PICSI uses the ability of certain sperm to bind to hyaluronic acid as one method of sperm selection.</p>
          <p className="text-ink-600 text-sm mt-2">Sperm that demonstrate HA binding are selected for ICSI.</p>
          <p className="text-ink-600 text-sm mt-2 font-semibold">However, this selection method does not guarantee that:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-1">
            <li>Every egg will fertilise</li>
            <li>Embryos will develop normally</li>
            <li>Implantation will occur</li>
            <li>Pregnancy will occur</li>
            <li>A live birth will result</li>
          </ul>
        </div>

        {/* PICSI vs ICSI / Is PICSI Better Than ICSI */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">PICSI vs ICSI – What Is the Difference?</h2>
          <p className="text-ink-600 text-sm">PICSI and ICSI are closely related but are not exactly the same.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">ICSI</h3>
              <p className="text-ink-600 text-sm">During standard ICSI:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1">
                <li>Sperm are prepared in the laboratory</li>
                <li>An embryologist selects a suitable sperm</li>
                <li>The sperm is injected directly into a mature egg</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h3 className="font-bold text-sm text-ink-900">PICSI</h3>
              <p className="text-ink-600 text-sm">During PICSI:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1">
                <li>Sperm are exposed to hyaluronic acid</li>
                <li>Sperm capable of binding to HA are identified</li>
                <li>A selected HA-binding sperm is used for ICSI</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The main difference is therefore the sperm-selection method before injection.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Is PICSI Better Than ICSI?</h3>
          <p className="text-ink-600 text-sm font-semibold">PICSI should not automatically be considered better than standard ICSI.</p>
          <p className="text-ink-600 text-sm mt-2">Available evidence has not demonstrated that PICSI routinely increases the chance of having a baby compared with standard ICSI for male-factor infertility.</p>
          <p className="text-ink-600 text-sm mt-2">For many patients, standard ICSI remains an appropriate fertilisation technique. PICSI may be discussed only in selected circumstances after counselling about its potential benefits and limitations.</p>
        </div>

        {/* Who May Discuss PICSI Treatment */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Discuss PICSI Treatment?</h2>
          <p className="text-ink-600 text-sm">PICSI may be discussed in selected IVF-ICSI cases involving male fertility concerns.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Male-Factor Infertility</h3>
              <p className="text-ink-600 text-sm">Men with significant sperm abnormalities may already require ICSI. PICSI may occasionally be discussed as an additional sperm-selection method.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Poor Sperm Quality</h3>
              <p className="text-ink-600 text-sm">If semen analysis shows issues involving sperm quality, the fertility and embryology teams may review available sperm-selection options.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previous Fertilisation Problems</h3>
              <p className="text-ink-600 text-sm">Patients who have experienced poor or failed fertilisation during a previous IVF-ICSI cycle may have the overall treatment reviewed. PICSI may be discussed as one possible laboratory option, although other factors also need evaluation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previous Unsuccessful ICSI</h3>
              <p className="text-ink-600 text-sm">After an unsuccessful ICSI cycle, the fertility team should assess egg quality, sperm quality, fertilisation, embryo development, female age, ovarian reserve, uterine factors, and laboratory factors. PICSI should not automatically be added without identifying a possible reason for previous treatment failure.</p>
            </div>
          </div>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Is PICSI Only for Male Infertility?</h3>
          <p className="text-ink-600 text-sm">PICSI has mainly been studied in patients undergoing ICSI for male-factor infertility. It is not generally considered a routine treatment for patients without a sperm-related indication. The decision should depend on individual fertility findings.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Sperm preparation for PICSI at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="PICSI consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Sperm DNA fragmentation testing for PICSI candidacy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* PICSI vs IMSI / PICSI vs Conventional IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">PICSI vs Other Techniques</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">PICSI vs IMSI</h3>
              <p className="text-ink-600 text-sm">PICSI and IMSI are different sperm-selection techniques. PICSI selects sperm according to their ability to bind with hyaluronic acid. IMSI uses very high magnification to evaluate sperm morphology in greater detail before ICSI. Neither sperm-selection add-on should automatically be assumed to improve IVF live-birth outcomes. The appropriate approach depends on individual circumstances.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PICSI vs Conventional IVF</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">Conventional IVF</h4>
                  <p className="text-xs text-ink-600 mt-1">Sperm and eggs are placed together in the laboratory and sperm must penetrate the egg without direct injection.</p>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">PICSI With ICSI</h4>
                  <p className="text-xs text-ink-600 mt-1">Sperm are first selected using HA binding and then injected directly into the egg through ICSI. PICSI is therefore relevant only when ICSI is being performed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PICSI for Specific Conditions */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">PICSI for Specific Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">PICSI for Low Sperm Count</h3>
              <p className="text-ink-600 text-sm">PICSI may be discussed in some male infertility cases involving low sperm count, but low sperm count alone does not automatically indicate PICSI. Treatment planning also considers motility, morphology, total usable sperm, previous fertilisation results, and female fertility factors. Severe low sperm count may primarily lead to consideration of ICSI rather than PICSI specifically.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PICSI for Poor Sperm Motility</h3>
              <p className="text-ink-600 text-sm">Poor motility may make natural fertilisation more difficult. When ICSI is planned, the embryology team selects sperm for injection. PICSI may be considered as an additional selection method in certain situations, but it is not routinely necessary.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PICSI for Poor Sperm Morphology</h3>
              <p className="text-ink-600 text-sm">Men with abnormal sperm morphology may undergo ICSI depending on the severity of male-factor infertility. PICSI selects sperm based on HA binding rather than detailed visual morphology. If advanced morphology-based sperm selection is being considered, techniques such as <Link href="/imsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IMSI</Link> are conceptually different.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PICSI After Failed ICSI</h3>
              <p className="text-ink-600 text-sm">A failed ICSI cycle can occur for many reasons. These include egg quality, sperm-related factors, oocyte maturity, fertilisation problems, embryo development, chromosomal factors, female age, and laboratory factors. PICSI may occasionally be discussed after unsuccessful treatment, but the entire cycle should first be reviewed.</p>
            </div>
          </div>
        </div>

        {/* Can PICSI Reduce Miscarriage / Does PICSI Improve IVF Success Rate */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Can PICSI Reduce Miscarriage?</h2>
          <p className="text-ink-600 text-sm">Some research has suggested a possible reduction in miscarriage in certain ICSI patients, but the evidence is not currently strong enough to confirm this benefit for all patients.</p>
          <p className="text-ink-600 text-sm font-semibold mt-3">PICSI should therefore not be advertised as a proven miscarriage-prevention treatment.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Does PICSI Improve IVF Success Rate?</h3>
          <p className="text-ink-600 text-sm">There is currently no good evidence that PICSI routinely improves the chance of having a baby compared with standard ICSI for male-factor infertility.</p>
          <p className="text-ink-600 text-sm font-semibold mt-2">PICSI should therefore be presented as a sperm-selection add-on, not a guaranteed IVF-success technique.</p>
        </div>

        {/* Benefits Proposed for PICSI / Limitations of PICSI */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Benefits and Limitations of PICSI</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Benefits Proposed for PICSI</h3>
              <p className="text-ink-600 text-sm">Possible reasons PICSI may be considered include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1 space-y-1">
                <li><strong>Additional Sperm-Selection Method</strong> — HA binding provides another biological characteristic by which sperm can be selected</li>
                <li><strong>Used Within ICSI</strong> — Selected sperm can be directly injected into an egg</li>
                <li><strong>Non-Invasive Sperm Selection</strong> — The selection step is performed on the semen sample in the laboratory</li>
                <li><strong>May Be Discussed in Selected Male-Factor Cases</strong> — The technique can be considered individually where an embryologist or fertility specialist believes additional sperm selection may be relevant</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Limitations of PICSI</h3>
              <p className="text-ink-600 text-sm">PICSI has important limitations. It:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1 space-y-1">
                <li>Is not required for every IVF patient</li>
                <li>Does not guarantee fertilisation</li>
                <li>Does not guarantee better embryos</li>
                <li>Does not guarantee implantation</li>
                <li>Does not guarantee pregnancy</li>
                <li>Has not been shown to routinely improve live-birth outcomes over standard ICSI</li>
                <li>Should not replace proper male and female fertility evaluation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Is PICSI Safe */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Is PICSI Safe?
          </h3>
          <p className="text-ink-600 text-sm">PICSI is performed on the semen sample as an additional laboratory selection step before ICSI. The patient does not undergo an additional invasive procedure specifically for PICSI.</p>
          <p className="text-ink-600 text-sm mt-2">However, the overall IVF-ICSI cycle still carries the usual risks and considerations associated with assisted reproductive treatment.</p>
        </div>

        {/* PICSI Treatment Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">PICSI Treatment Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The PICSI treatment cost in Noida depends on the overall IVF-ICSI treatment plan. Costs may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Female fertility investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Semen analysis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Male fertility investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF treatment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Egg retrieval
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              PICSI sperm-selection charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo culture
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo transfer
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
              Additional fertility procedures where required
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Since PICSI is an additional laboratory technique used with ICSI, it may involve an additional charge beyond the standard IVF-ICSI package. Patients should ask whether PICSI is medically justified for their individual case before choosing an additional paid treatment add-on.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Questions to Ask Before Choosing PICSI
          </h3>
          <p className="text-ink-600 text-sm">Before choosing PICSI, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is PICSI being recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Do I already require ICSI?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What problem is PICSI expected to address?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Is there evidence that it will benefit my situation?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How is PICSI different from standard ICSI?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How is PICSI different from IMSI?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Does PICSI increase the chance of live birth?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What additional cost is involved?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if I choose standard ICSI instead?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for PICSI Treatment Planning in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Evaluation</strong> — Advanced laboratory techniques are considered according to the couple`s fertility profile.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male Fertility Assessment</strong> — Semen analysis and male-factor infertility are evaluated before selecting fertilisation techniques.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF and ICSI Treatment Planning</strong> — PICSI is considered within a complete IVF-ICSI treatment strategy rather than as an isolated procedure.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Advanced Sperm Selection Options</strong> — Where clinically appropriate, advanced sperm-selection approaches can be discussed based on individual findings.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Fertility Care</strong> — Fertility treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking advanced fertility and IVF treatment in Noida.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a PICSI Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have male-factor infertility, previous fertilisation problems or unsuccessful IVF-ICSI treatment and want to understand whether advanced sperm selection may be relevant, a detailed fertility assessment is the first step.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and IVF-ICSI treatment planning based on your individual reproductive history.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book PICSI / IVF-ICSI Consultation
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