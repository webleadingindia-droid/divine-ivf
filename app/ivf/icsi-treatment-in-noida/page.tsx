// app/icsi-treatment-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/icsi-treatment-in-noida" },
  title: "ICSI Treatment in Noida | ICSI Centre & Specialist | Divine IVF",
  description:
    "Get ICSI treatment in Noida at Divine IVF for male infertility, low sperm count and fertilisation problems. Consult Dr. Mandavi Rai for personalised IVF-ICSI care.",
  robots: { index: true, follow: true },
  keywords:
    "ICSI Treatment in Noida, ICSI Centre in Noida, ICSI Clinic in Noida, Best ICSI Centre in Noida, ICSI Specialist in Noida, ICSI Doctor in Noida, ICSI Cost in Noida, ICSI Treatment Cost in Noida, IVF with ICSI in Noida, ICSI Procedure in Noida, Intracytoplasmic Sperm Injection in Noida, ICSI for Male Infertility in Noida, ICSI for Low Sperm Count in Noida, ICSI for Poor Sperm Motility, ICSI for Azoospermia, Male Infertility Treatment in Noida, IVF Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida, ICSI Treatment Near Me",
  openGraph: {
    title: "ICSI Treatment in Noida | ICSI Centre & Specialist | Divine IVF",
    description:
      "Get ICSI treatment in Noida at Divine IVF for male infertility, low sperm count and fertilisation problems. Consult Dr. Mandavi Rai for personalised IVF-ICSI care.",
    url: "https://www.divineivf.com/icsi-treatment-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/OQMsnnu9725K5j693Vfo/image.png",
        width: 1200,
        height: 630,
        alt: "ICSI procedure at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IcsiTreatmentPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "ICSI Treatment in Noida" },
      ]}
      eyebrow="Advanced IVF · Embryology · Noida"
      // ========== H1 ==========
      titlePlain="ICSI Treatment in Noida"
      titleAccent="Advanced fertility treatment for selected cases of male-factor infertility and fertilisation problems"
      // =========================
      intro="If you are facing difficulty conceiving because of severe male infertility, low sperm count, poor sperm motility, previous fertilisation failure, or other fertility concerns, ICSI treatment in Noida may be considered as part of an IVF cycle."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/OQMsnnu9725K5j693Vfo/image.png"
      heroAlt="ICSI treatment procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="High-magnification laboratory equipment used in ICSI procedure at Divine IVF"
      whatItIs={[
        "ICSI stands for Intracytoplasmic Sperm Injection. ICSI is an assisted fertilisation technique used during IVF treatment. In conventional IVF, eggs and sperm are placed together in a laboratory environment and fertilisation is allowed to occur. In ICSI, an embryologist selects a sperm and injects it directly into a mature egg using specialised laboratory equipment.",
        "This technique can help overcome certain barriers to fertilisation, particularly in cases involving male-factor infertility. ICSI is not a completely separate fertility treatment from IVF — it is a specialised fertilisation method used as part of an IVF cycle.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and treatment planning for couples who may benefit from ICSI. The decision to use ICSI is based on the couple's fertility history, semen analysis, ovarian reserve, previous IVF outcomes, and other clinical findings.",
      ]}
      whoNeedsIt={[
        "Very low sperm count — if sperm concentration is significantly reduced, there may not be enough sperm to achieve fertilisation through conventional IVF",
        "Poor sperm motility — when sperm have difficulty moving effectively, reaching or penetrating an egg may become difficult",
        "Abnormal sperm morphology — severe abnormalities in sperm shape may affect the fertilisation process",
        "Azoospermia with surgically retrieved sperm — when sperm are not present in the ejaculate but may be retrieved from the reproductive tract or testicular tissue",
        "Previous fertilisation failure — if a previous IVF cycle resulted in failed or very low fertilisation",
        "Limited number of eggs — when only a small number of mature eggs are available",
        "Previously frozen sperm — in selected cases where frozen or limited sperm samples are being used",
        "Certain genetic testing cycles — ICSI may sometimes be used in IVF cycles involving embryo genetic testing",
      ]}
      preparation={[
        "Before IVF with ICSI, investigations may be recommended for both partners. Female fertility tests may include AMH, hormonal testing, ultrasound, antral follicle count, and uterine evaluation. Male fertility tests may include semen analysis, hormonal evaluation, clinical examination, and genetic testing in selected cases.",
        "The ICSI procedure is performed as part of an IVF cycle, so preparation follows the same pathway as standard IVF. This includes ovarian stimulation for the female partner, followed by egg retrieval when follicles are mature.",
        "For the male partner, a fresh semen sample is typically provided on the day of egg retrieval. If sperm retrieval is needed (for azoospermia), this is performed as a separate procedure before the IVF cycle begins.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility Consultation", description: "Treatment begins with a detailed fertility consultation reviewing duration of infertility, female age, ovarian reserve, previous pregnancies, previous IVF or IUI cycles, semen analysis, male fertility history, and medical and surgical history." },
        { title: "Step 2 – Ovarian Stimulation", description: "Fertility medicines stimulate the ovaries so multiple follicles can develop. Response is monitored through ultrasound scans and hormonal blood tests." },
        { title: "Step 3 – Trigger Injection", description: "When follicles reach an appropriate stage, a trigger injection is administered to support final egg maturation. Egg retrieval is then scheduled." },
        { title: "Step 4 – Egg Retrieval", description: "Egg retrieval is performed using ultrasound guidance. Eggs are collected from the ovaries and transferred to the embryology laboratory under sedation or anaesthesia." },
        { title: "Step 5 – Semen Collection or Sperm Retrieval", description: "A semen sample is collected on the day of egg retrieval. If sperm are not available in the ejaculate, surgically retrieved sperm may be used in selected cases." },
        { title: "Step 6 – Sperm Selection", description: "An embryologist examines the prepared sperm sample and selects suitable sperm for the ICSI procedure based on laboratory assessment." },
        { title: "Step 7 – Intracytoplasmic Sperm Injection", description: "A single selected sperm is carefully injected directly into a mature egg using specialised micromanipulation equipment." },
        { title: "Step 8 – Fertilisation Check", description: "After ICSI, eggs are monitored to determine whether fertilisation has occurred. Not every injected egg will necessarily fertilise." },
        { title: "Step 9 – Embryo Development", description: "Fertilised eggs are cultured in the embryology laboratory and monitored over the following days for embryo development." },
        { title: "Step 10 – Embryo Transfer", description: "A selected embryo or embryos may be transferred into the uterus. In some cases, embryos may instead be frozen for transfer in a later cycle." },
        { title: "Step 11 – Pregnancy Test", description: "A pregnancy test is performed after the embryo transfer according to your doctor's instructions." },
      ]}
      whatToExpect="The ICSI procedure itself happens entirely in the embryology lab — you won't feel anything during the injection process. Your experience will be the same as a standard IVF cycle, with the difference occurring at the fertilisation stage. You'll be informed the day after egg retrieval how many eggs have fertilised normally, with updates on embryo development over the following days. ICSI can assist fertilisation, but it does not guarantee fertilisation of every egg, embryo development, implantation, pregnancy, or live birth."
      benefits={[
        "Helps with severe male-factor infertility — may allow fertilisation when sperm count or motility is severely reduced",
        "Direct sperm injection — the sperm does not need to penetrate the egg on its own",
        "Can be used with retrieved sperm — ICSI can be used when sperm are obtained through surgical sperm retrieval procedures",
        "May help after previous fertilisation failure — couples with previous failed or very low fertilisation may be considered for ICSI",
        "Uses a small number of sperm — only a limited number of suitable sperm may be required for the injection procedure",
        "Can be combined with advanced sperm selection techniques like PICSI or IMSI where appropriate",
      ]}
      considerations={[
        "Not every mature egg will fertilise — fertilisation rates typically range from 70-80% of injected eggs",
        "Not every fertilised egg will develop into a usable embryo",
        "Pregnancy is not guaranteed",
        "ICSI does not correct all causes of infertility",
        "Some couples may require additional fertility evaluation",
        "Genetic counselling or testing may be advised in certain severe male infertility cases",
        "ICSI adds to the cost of an IVF cycle due to the specialised laboratory work required",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The complete IVF process within which ICSI is performed — from stimulation to embryo transfer." },
        { name: "Male Infertility", href: "/male-infertility-treatment-in-noida", blurb: "Comprehensive male fertility evaluation that determines if ICSI is needed." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The fertility evaluation that identifies the need for IVF with ICSI." },
        { name: "IUI Treatment", href: "/iui-treatment-in-noida", blurb: "A less invasive option for milder male-factor infertility cases." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval", blurb: "Surgical sperm retrieval techniques like TESA and PESA for use in ICSI." },
        { name: "Azoospermia Treatment", href: "/azoospermia-treatment", blurb: "Specialised treatment for men with no sperm in the ejaculate." },
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
          question: "What does ICSI stand for?",
          answer:
            "ICSI stands for Intracytoplasmic Sperm Injection. It is a laboratory technique in which a selected sperm is injected directly into a mature egg.",
        },
        {
          question: "Is ICSI the same as IVF?",
          answer:
            "ICSI is not exactly the same as IVF. It is a fertilisation technique used within an IVF treatment cycle.",
        },
        {
          question: "Who needs ICSI treatment?",
          answer:
            "ICSI may be recommended for severe male-factor infertility, very low sperm count, poor sperm motility, previous fertilisation failure, azoospermia with retrieved sperm, or other selected fertility conditions.",
        },
        {
          question: "Is ICSI better than IVF?",
          answer:
            "ICSI is not automatically better than conventional IVF for every patient. The appropriate fertilisation method depends on semen analysis and fertility history.",
        },
        {
          question: "Can ICSI help with low sperm count?",
          answer:
            "ICSI may be considered in cases of significantly reduced sperm count because a selected sperm can be injected directly into an egg.",
        },
        {
          question: "Can ICSI be used if sperm count is zero?",
          answer:
            "If no sperm are present in the ejaculate, further evaluation is required. In some cases, sperm may be surgically retrieved and used with ICSI.",
        },
        {
          question: "How are sperm selected for ICSI?",
          answer:
            "The embryology laboratory evaluates the available sperm sample and selects sperm for injection based on laboratory assessment.",
        },
        {
          question: "Does every egg fertilise with ICSI?",
          answer:
            "No. ICSI does not guarantee fertilisation of every mature egg. Typical fertilisation rates are around 70-80% of injected eggs.",
        },
        {
          question: "Is ICSI painful?",
          answer:
            "The ICSI procedure itself takes place in the laboratory and is not felt by the patient. However, the IVF cycle includes ovarian stimulation and egg retrieval which may involve some discomfort.",
        },
        {
          question: "Does ICSI increase the chance of twins?",
          answer:
            "ICSI itself does not directly cause twins. The chance of multiple pregnancy is more closely related to the number of embryos transferred.",
        },
        {
          question: "What is the cost of ICSI treatment in Noida?",
          answer:
            "The total cost depends on IVF cycle charges, medicines, ICSI laboratory fees, investigations, sperm retrieval if required, embryo freezing and other treatment components.",
        },
        {
          question: "Where can I get ICSI treatment in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised IVF with ICSI treatment planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          ICSI Treatment in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Advanced fertility treatment for selected cases of male-factor infertility and fertilisation problems.
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
              Book ICSI Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal blood test for IVF with ICSI treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for ovarian stimulation during ICSI treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is ICSI Treatment Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is ICSI Treatment?</h2>
          <p className="text-ink-600">
            <strong>ICSI</strong> stands for <strong>Intracytoplasmic Sperm Injection</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            ICSI is an assisted fertilisation technique used during <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF treatment</Link>.
          </p>
          <p className="text-ink-600 mt-2">
            In conventional IVF, eggs and sperm are placed together in a laboratory environment and fertilisation is allowed to occur.
          </p>
          <p className="text-ink-600 mt-2">
            In ICSI, an embryologist selects a sperm and injects it directly into a mature egg using specialised laboratory equipment.
          </p>
          <p className="text-ink-600 mt-2">
            This technique can help overcome certain barriers to fertilisation, particularly in cases involving <Link href="/male-infertility-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">male-factor infertility</Link>.
          </p>
        </div>

        {/* How Is ICSI Different From IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">How Is ICSI Different From IVF?</h2>
          <p className="text-ink-600 text-sm">ICSI is not a completely separate fertility treatment from IVF. It is a specialised fertilisation method used as part of an IVF cycle.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-ink-50/50 rounded-xl p-4">
              <h3 className="font-semibold text-ink-900">In Conventional IVF</h3>
              <ul className="space-y-1 mt-2 text-sm text-ink-600">
                <li>• Eggs are retrieved from the ovaries</li>
                <li>• Sperm and eggs are placed together in the laboratory</li>
                <li>• Sperm must penetrate the egg naturally</li>
                <li>• Fertilised eggs are then monitored for embryo development</li>
              </ul>
            </div>
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-semibold text-ink-900">In IVF With ICSI</h3>
              <ul className="space-y-1 mt-2 text-sm text-ink-600">
                <li>• Eggs are retrieved in the same way</li>
                <li>• A sperm is selected by an embryologist</li>
                <li>• The sperm is injected directly into a mature egg</li>
                <li>• Fertilised eggs are monitored for embryo development</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The main difference is therefore the method of fertilisation.</p>
        </div>

        {/* Who May Need ICSI Treatment */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Need ICSI Treatment?</h2>
          <p className="text-ink-600 text-sm mb-3">ICSI may be recommended in selected fertility cases.</p>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-ink-900">Very Low Sperm Count</h3>
              <p className="text-ink-600 text-sm">If sperm concentration is significantly reduced, there may not be enough sperm to achieve fertilisation through conventional IVF. ICSI may help by injecting a selected sperm directly into the egg.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Poor Sperm Motility</h3>
              <p className="text-ink-600 text-sm">When sperm have difficulty moving effectively, reaching or penetrating an egg may become difficult. ICSI may be considered when sperm motility is significantly reduced.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Abnormal Sperm Morphology</h3>
              <p className="text-ink-600 text-sm">Severe abnormalities in sperm shape may affect the fertilisation process. ICSI may be considered depending on the overall semen analysis and fertility profile.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Azoospermia With Surgically Retrieved Sperm</h3>
              <p className="text-ink-600 text-sm">In certain cases where sperm are not present in the ejaculate, sperm may be retrieved directly from the male reproductive tract or testicular tissue. ICSI is commonly used when surgically retrieved sperm are available.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previous Fertilisation Failure</h3>
              <p className="text-ink-600 text-sm">If a previous IVF cycle resulted in failed or very low fertilisation, ICSI may be considered in a subsequent cycle.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Limited Number of Eggs</h3>
              <p className="text-ink-600 text-sm">When only a small number of mature eggs are available, the fertility team may consider ICSI depending on the clinical circumstances.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Previously Frozen Sperm</h3>
              <p className="text-ink-600 text-sm">In selected cases where frozen or limited sperm samples are being used, ICSI may be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Certain Genetic Testing Cycles</h3>
              <p className="text-ink-600 text-sm">ICSI may sometimes be used in IVF cycles involving embryo genetic testing, depending on laboratory protocol and clinical requirements.</p>
            </div>
          </div>
        </div>

        {/* Is ICSI Only for Male Infertility */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Is ICSI Only for Male Infertility?
          </h3>
          <p className="text-ink-600 text-sm">No. ICSI is commonly associated with male-factor infertility, but it may also be considered in other situations including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous fertilisation failure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Very low fertilisation in an earlier IVF cycle
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Surgically retrieved sperm
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Limited sperm availability
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Selected embryo testing cycles
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other laboratory or clinical indications
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Your fertility specialist and embryology team determine whether ICSI is appropriate.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Sperm preparation for ICSI treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="ICSI consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/OQMsnnu9725K5j693Vfo/image.png"
              alt="Embryology lab for ICSI and IVF procedures at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* ICSI Treatment Process */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">ICSI Treatment Process at Divine IVF, Noida</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Step 1 – Fertility Consultation</h3>
              <p className="text-ink-600 text-sm mt-1">Treatment begins with a detailed fertility consultation reviewing duration of infertility, female age, ovarian reserve, previous pregnancies, previous IVF or IUI cycles, semen analysis, male fertility history, and medical and surgical history.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 2 – Ovarian Stimulation</h3>
              <p className="text-ink-600 text-sm mt-1">Fertility medicines are generally used to stimulate the ovaries so that multiple follicles can develop. The response is monitored through ultrasound scans and hormonal blood tests. Medication doses may be adjusted according to ovarian response.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 3 – Trigger Injection</h3>
              <p className="text-ink-600 text-sm mt-1">When follicles reach an appropriate stage of development, a trigger injection may be administered to support final egg maturation. Egg retrieval is then scheduled according to the treatment protocol.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 4 – Egg Retrieval</h3>
              <p className="text-ink-600 text-sm mt-1">Egg retrieval is performed using ultrasound guidance. The eggs are collected from the ovaries and transferred to the embryology laboratory. The procedure is usually performed under sedation or anaesthesia according to clinic protocol.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 5 – Semen Collection or Sperm Retrieval</h3>
              <p className="text-ink-600 text-sm mt-1">A semen sample is generally collected on the day of egg retrieval. If sperm are not available in the ejaculate, surgically retrieved sperm may be used in selected cases. The sample is processed in the laboratory before ICSI.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 6 – Sperm Selection</h3>
              <p className="text-ink-600 text-sm mt-1">An embryologist examines the prepared sperm sample and selects suitable sperm for the ICSI procedure. The sperm is selected based on laboratory assessment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 7 – Intracytoplasmic Sperm Injection</h3>
              <p className="text-ink-600 text-sm mt-1">A single selected sperm is carefully injected directly into a mature egg. This process is performed using specialised micromanipulation equipment in the embryology laboratory. Each suitable mature egg may be assessed for ICSI according to the treatment plan.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 8 – Fertilisation Check</h3>
              <p className="text-ink-600 text-sm mt-1">After ICSI, the eggs are monitored to determine whether fertilisation has occurred. Not every injected egg will necessarily fertilise, and fertilisation cannot be guaranteed.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 9 – Embryo Development</h3>
              <p className="text-ink-600 text-sm mt-1">Fertilised eggs are cultured in the embryology laboratory. Embryologists monitor their development over the following days. The appropriate embryo transfer strategy depends on embryo development, patient age, endometrial preparation, previous treatment history, and clinical recommendations.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 10 – Embryo Transfer</h3>
              <p className="text-ink-600 text-sm mt-1">A selected embryo or embryos may be transferred into the uterus according to the treatment plan. In some cases, embryos may instead be frozen for transfer in a later cycle.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 11 – Pregnancy Test</h3>
              <p className="text-ink-600 text-sm mt-1">A pregnancy test is performed after the embryo transfer according to your doctor's instructions.</p>
            </div>
          </div>
        </div>

        {/* ICSI for Specific Conditions */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">ICSI for Specific Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">ICSI for Low Sperm Count</h3>
              <p className="text-ink-600 text-sm">ICSI may be useful in selected men with very low sperm concentration. Because a sperm is injected directly into an egg, fertilisation does not depend on a large number of sperm reaching and penetrating the egg. However, the overall treatment outcome still depends on many factors, including egg quality, female age, embryo development, sperm quality, uterine factors, and other fertility conditions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">ICSI for Poor Sperm Motility</h3>
              <p className="text-ink-600 text-sm">Poor sperm motility can make natural fertilisation or conventional IVF more difficult. In ICSI, the embryologist selects sperm from the available sample and injects one directly into the egg. This can help bypass the need for the sperm to swim toward and penetrate the egg on its own.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">ICSI for Azoospermia</h3>
              <p className="text-ink-600 text-sm">Azoospermia means that sperm are not detected in the ejaculate. Depending on the cause, sperm may sometimes be retrieved through specialised procedures. If usable sperm are retrieved, they may be used with ICSI. A detailed <Link href="/male-infertility-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">male fertility evaluation</Link> is important before planning treatment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">ICSI With Surgically Retrieved Sperm</h3>
              <p className="text-ink-600 text-sm">In selected cases, sperm may be obtained using sperm retrieval procedures. These may involve retrieval from the epididymis or testicular tissue. The exact procedure depends on the cause of infertility. Retrieved sperm may then be used with ICSI when suitable.</p>
            </div>
          </div>
        </div>

        {/* ICSI vs IUI / ICSI vs Conventional IVF */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">ICSI vs IUI vs Conventional IVF</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-sm text-rose-600">IUI</h3>
              <ul className="space-y-1 mt-2 text-xs text-ink-600">
                <li>• Prepared sperm placed into the uterus</li>
                <li>• Fertilisation happens naturally inside the body</li>
                <li>• Egg retrieval is not required</li>
                <li>• Suitable for selected mild fertility problems</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-sm text-rose-600">Conventional IVF</h3>
              <ul className="space-y-1 mt-2 text-xs text-ink-600">
                <li>• Eggs retrieved from the ovaries</li>
                <li>• Sperm and eggs placed together in the lab</li>
                <li>• Sperm must penetrate the egg naturally</li>
                <li>• Suitable when sperm quality is adequate</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h3 className="font-bold text-ink-900 text-sm text-rose-600">IVF with ICSI</h3>
              <ul className="space-y-1 mt-2 text-xs text-ink-600">
                <li>• Eggs retrieved from the ovaries</li>
                <li>• A sperm is selected and injected directly into the egg</li>
                <li>• Bypasses natural fertilisation barriers</li>
                <li>• Recommended for severe male-factor infertility</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Your fertility specialist will decide which approach is more suitable based on semen parameters and the couple's fertility history.</p>
        </div>

        {/* ICSI Success Rate */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">ICSI Success Rate</h2>
          <p className="text-ink-600 text-sm">There is no single ICSI success rate that applies to every couple.</p>
          <p className="text-ink-600 text-sm mt-2">ICSI can assist fertilisation, but it does not guarantee:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertilisation of every egg
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo development
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
          <p className="text-ink-600 text-sm mt-2">Treatment outcome may depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Female age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Egg quality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Number of mature eggs
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Sperm quality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo quality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Uterine health
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous fertility history
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">It is better to discuss your individual prognosis after a complete <Link href="/fertility-investigation-in-noida" className="text-rose-600 font-semibold hover:underline">fertility evaluation</Link> rather than relying on a general success percentage.</p>
        </div>

        {/* Benefits of ICSI Treatment */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Benefits of ICSI Treatment
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Helps With Severe Male-Factor Infertility</strong> — ICSI may allow fertilisation to be attempted when sperm count or motility is severely reduced.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Direct Sperm Injection</strong> — The sperm does not need to penetrate the egg on its own.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Can Be Used With Retrieved Sperm</strong> — ICSI can be used when sperm are obtained through certain surgical sperm retrieval procedures.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>May Help After Previous Fertilisation Failure</strong> — Couples with previous failed or very low fertilisation may be considered for ICSI.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Uses a Small Number of Sperm</strong> — Only a limited number of suitable sperm may be required for the injection procedure.
            </li>
          </ul>
        </div>

        {/* Risks and Limitations */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Risks and Limitations of ICSI</h2>
          <p className="text-ink-600 text-sm">ICSI is an advanced fertility procedure, but it does not eliminate all fertility-related risks.</p>
          <p className="text-ink-600 text-sm mt-2">Important points include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Not every mature egg will fertilise
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Not every fertilised egg will develop into a usable embryo
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy is not guaranteed
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              ICSI does not correct all causes of infertility
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Some couples may require additional fertility evaluation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Genetic counselling or testing may be advised in certain severe male infertility cases
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Your doctor should explain the expected benefits and limitations based on your individual fertility profile.</p>
        </div>

        {/* ICSI Treatment Cost */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            ICSI Treatment Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of ICSI treatment in Noida can vary depending on the individual fertility treatment plan. Factors affecting cost may include:</p>
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
              Blood tests
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
              Embryology laboratory procedures
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI procedure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Sperm retrieval if required
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo freezing if required
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Frozen embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Additional fertility or genetic tests
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because ICSI is generally performed as part of IVF, it is important to understand what is included in the quoted treatment package. For an accurate estimate, a personalised fertility consultation is recommended.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for ICSI Treatment in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Evaluation</strong> — The decision to use ICSI is based on the couple's fertility profile rather than using the same treatment approach for everyone.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male and Female Fertility Assessment</strong> — Both partners are evaluated when planning fertility treatment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF and ICSI Treatment Planning</strong> — Depending on clinical findings, conventional IVF, ICSI, or other fertility options may be discussed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male Infertility Management</strong> — ICSI may be considered for low sperm count, poor motility, azoospermia, and other male-factor fertility problems where clinically appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Fertility Care</strong> — Treatment is planned under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Noida</strong> — Divine IVF is located in Sector 76, Noida, making fertility consultation accessible for couples from Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* When Should You Consider ICSI */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            When Should You Consider ICSI?
          </h3>
          <p className="text-ink-600 text-sm">You may be advised to discuss ICSI if:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Semen analysis shows severe abnormalities
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Sperm count is very low
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Sperm motility is significantly reduced
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              There is severe abnormal morphology
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              No sperm are present in the ejaculate but retrieval may be possible
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have experienced previous IVF fertilisation failure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Surgically retrieved sperm are being used
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Your fertility specialist identifies another clinical reason for ICSI
            </div>
          </div>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an ICSI Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have severe male-factor infertility, low sperm count, poor sperm motility, previous IVF fertilisation failure, or have been advised to consider ICSI, a detailed fertility evaluation is the first step.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised IVF and ICSI treatment planning according to the couple's individual fertility profile.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book ICSI Consultation
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