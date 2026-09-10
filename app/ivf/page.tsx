// app/ivf-treatment-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf-treatment-in-noida" },
  title: "IVF Treatment in Noida | IVF Centre & Specialist | Divine IVF",
  description:
    "Looking for IVF treatment in Noida? Consult Dr. Mandavi Rai at Divine IVF for personalised IVF, ICSI, fertility evaluation and advanced fertility treatment.",
  robots: { index: true, follow: true },
  keywords:
    "IVF Treatment in Noida, IVF Centre in Noida, IVF Clinic in Noida, Best IVF Centre in Noida, Best IVF Clinic in Noida, IVF Specialist in Noida, IVF Doctor in Noida, Best IVF Doctor in Noida, IVF Cost in Noida, IVF Treatment Cost in Noida, IVF Procedure in Noida, IVF Fertility Treatment in Noida, IVF Treatment Near Me, IVF Centre Near Me, IVF Clinic Near Me, Fertility Clinic in Noida, Best Fertility Clinic in Noida, Fertility Specialist in Noida, Infertility Treatment in Noida, ICSI Treatment in Noida, IMSI Treatment in Noida, Embryo Transfer in Noida, IVF for Male Infertility in Noida, IVF for Blocked Fallopian Tubes, IVF for Low AMH, IVF for Endometriosis, IVF for PCOS",
  openGraph: {
    title: "IVF Treatment in Noida | IVF Centre & Specialist | Divine IVF",
    description:
      "Looking for IVF treatment in Noida? Consult Dr. Mandavi Rai at Divine IVF for personalised IVF, ICSI, fertility evaluation and advanced fertility treatment.",
    url: "https://www.divineivf.com/ivf-treatment-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/ubpLTQ5V0jud7NsdtcgO/image.png",
        width: 1200,
        height: 630,
        alt: "IVF treatment at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IvfTreatmentPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment in Noida" },
      ]}
      eyebrow="IVF · In Vitro Fertilisation · Noida"
      // ========== H1 ==========
      titlePlain="IVF Treatment in Noida"
      titleAccent="Personalised IVF treatment and fertility care for couples trying to conceive"
      // =========================
      intro="If you have been trying to conceive without success, have blocked fallopian tubes, male-factor infertility, reduced ovarian reserve, endometriosis, unexplained infertility, or previous unsuccessful fertility treatment, IVF treatment in Noida may be one of the options your fertility specialist discusses with you."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/ubpLTQ5V0jud7NsdtcgO/image.png"
      heroAlt="IVF treatment and embryology laboratory at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="IVF embryo culture at Divine IVF Clinic, Noida"
      whatItIs={[
        "IVF stands for In Vitro Fertilisation. It is an assisted reproductive treatment in which eggs are collected from the ovaries and fertilised with sperm in an embryology laboratory. The resulting embryos are monitored for development, and a suitable embryo may later be transferred into the uterus.",
        "A typical IVF cycle may involve fertility evaluation, ovarian stimulation, ultrasound monitoring, trigger injection, egg retrieval, sperm collection, fertilisation, embryo culture, embryo transfer or embryo freezing, and pregnancy testing. The exact treatment protocol varies from patient to patient.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and IVF treatment planning based on your age, ovarian reserve, semen analysis, reproductive history, previous treatment and other fertility factors.",
        "IVF is not automatically the first treatment for every couple. A detailed fertility evaluation helps determine whether IVF, IUI, ICSI, medical treatment, or another approach is more appropriate.",
      ]}
      whoNeedsIt={[
        "Blocked or damaged fallopian tubes — IVF bypasses the fallopian tubes by allowing fertilisation to occur in the laboratory",
        "Male factor infertility — low sperm count, poor motility, abnormal morphology, or other significant sperm-related concerns",
        "Ovulation disorders — when other treatments are unsuccessful or when additional fertility factors are present",
        "Endometriosis — can affect the ovaries, fallopian tubes and pelvic environment",
        "Reduced ovarian reserve — women with fewer eggs available may be considered for IVF",
        "Unexplained infertility — when routine fertility tests do not reveal a definite cause",
        "Repeated IUI failure — when properly selected IUI cycles have been unsuccessful",
        "Certain genetic conditions — when Preimplantation Genetic Testing (PGT) is planned",
        "Fertility preservation — through egg or embryo freezing in appropriate situations",
      ]}
      preparation={[
        "Before starting IVF, both partners generally undergo fertility assessment. Female fertility evaluation may include AMH, FSH, LH, Estradiol, thyroid testing, prolactin where required, pelvic ultrasound, antral follicle count, uterine evaluation, and other investigations depending on history.",
        "The male partner may undergo semen analysis, sperm concentration assessment, motility assessment, morphology assessment, hormonal testing in selected cases, and additional investigations when required.",
        "Your doctor may also review previous pregnancies, miscarriages, previous fertility treatment, menstrual history, surgeries, medical conditions, current medications, and family history. This information helps personalise the IVF protocol.",
        "Lifestyle factors such as diet, exercise, and stress management may also be discussed. Dr. Rai may recommend certain supplements or lifestyle modifications to optimise your chances of success.",
      ]}
      howItWorks={[
        { title: "Step 1 – Initial Fertility Consultation", description: "Your IVF journey begins with a detailed consultation. Dr. Mandavi Rai reviews your fertility history, previous reports and treatment goals. An appropriate investigation and treatment plan is then discussed." },
        { title: "Step 2 – Ovarian Stimulation", description: "Fertility medicines are used to stimulate the ovaries to develop multiple follicles. The medication protocol depends on age, AMH, ovarian reserve, previous ovarian response, and medical history." },
        { title: "Step 3 – Follicular Monitoring", description: "Ultrasound scans monitor follicle number, follicle size, ovarian response, and endometrial lining. Hormonal blood tests may also be used when clinically required." },
        { title: "Step 4 – Trigger Injection", description: "When follicles reach an appropriate stage, a trigger injection is administered to support final egg maturation. Egg retrieval is then scheduled." },
        { title: "Step 5 – Egg Retrieval", description: "Eggs are collected from the ovaries using ultrasound guidance under sedation or anaesthesia. The collected eggs are transferred to the embryology laboratory." },
        { title: "Step 6 – Semen Collection", description: "A semen sample is collected from the male partner and processed in the laboratory. In selected male infertility cases, surgically retrieved sperm may be used." },
        { title: "Step 7 – Fertilisation", description: "Eggs and sperm are brought together in the embryology laboratory. Fertilisation may be achieved through conventional IVF or ICSI where clinically indicated." },
        { title: "Step 8 – Embryo Culture", description: "After fertilisation, embryos are monitored in the embryology laboratory. Embryologists observe their development over the following days." },
        { title: "Step 9 – Embryo Selection", description: "Embryos are assessed according to their development and laboratory characteristics. Embryos may be transferred, frozen for future use, or biopsied for genetic testing." },
        { title: "Step 10 – Embryo Transfer", description: "A selected embryo may be transferred into the uterus using a thin catheter. The procedure is generally brief and usually does not require anaesthesia." },
        { title: "Step 11 – Embryo Freezing", description: "Suitable additional embryos may be frozen for future use when appropriate, such as when a frozen embryo transfer is preferred or genetic testing is being performed." },
        { title: "Step 12 – Pregnancy Test", description: "A pregnancy blood test is performed after embryo transfer according to the timeline advised by your fertility specialist. Further monitoring is arranged if the pregnancy test is positive." },
      ]}
      whatToExpect="Stimulation typically involves daily injectable medication over roughly one to two weeks, with periodic monitoring by ultrasound and blood tests. Egg retrieval is a short, sedated procedure taking about 15-20 minutes — you'll be able to go home the same day. After fertilisation, embryos are cultured for several days before transfer, which is a quick, generally painless procedure done without sedation. A pregnancy test follows around two weeks later. Throughout the process, Dr. Rai and the IVF team will be with you, explaining each step and answering any questions. Not every cycle produces the expected number of eggs, and not every egg fertilises or develops into a transferable embryo."
      benefits={[
        "Addresses a wide range of fertility factors — including male-factor infertility, blocked fallopian tubes, and ovulation disorders",
        "Allows additional screening such as genetic testing of embryos (PGT) where appropriate",
        "Can incorporate ICSI, PICSI or IMSI for suitable cases, improving outcomes for male-factor infertility",
        "Provides more control and monitoring than less involved fertility treatments",
        "Offers the highest success rates of any fertility treatment for appropriate candidates",
        "Can be combined with donor eggs, donor sperm, or donor embryos when needed",
        "Allows embryo freezing (vitrification) for future cycles, preserving fertility for later use",
      ]}
      considerations={[
        "Involves a structured, multi-step process over several weeks with multiple clinic visits",
        "Response to ovarian stimulation varies between individuals — not every cycle produces the expected number of eggs",
        "Not every cycle results in pregnancy on the first attempt — some patients may require multiple cycles",
        "Involves daily injectable medication and regular monitoring visits",
        "Adds to the cost of treatment compared to simpler options like IUI",
        "Embryo transfer success depends on multiple factors including embryo quality and uterine receptivity",
        "Some patients may experience mild side effects from stimulation medication",
        "The process can be emotionally demanding — support is available throughout",
      ]}
      related={[
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation that determines if IVF is right for you." },
        { name: "IUI Treatment", href: "/iui-treatment-in-noida", blurb: "A less invasive first-line option for suitable fertility profiles." },
        { name: "Male Infertility", href: "/male-infertility-treatment-in-noida", blurb: "Evaluation and treatment for male factor infertility that may require IVF." },
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "Sperm is injected directly into the egg for male-factor infertility cases." },
        { name: "IMSI Treatment", href: "/imsi-treatment-in-noida", blurb: "High-magnification sperm selection for severe male-factor infertility." },
        { name: "Genetic Testing in IVF", href: "/genetic-testing-in-ivf-noida", blurb: "Screening embryos for chromosomal health or inherited conditions." },
        { name: "Embryo Transfer", href: "/embryo-transfer", blurb: "The process of transferring embryos into the uterus." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval", blurb: "Surgical sperm retrieval techniques for use in IVF with ICSI." },
        { name: "Recurrent Implantation Failure", href: "/recurrent-implantation-failure", blurb: "Evaluation and treatment for repeated IVF failure." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your IVF specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "In Vitro Fertilization (IVF)",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/in-vitro-fertilization-ivf/",
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
          question: "What is IVF treatment?",
          answer:
            "IVF is a fertility treatment in which eggs are collected from the ovaries and fertilised with sperm in a laboratory. A suitable embryo may later be transferred into the uterus.",
        },
        {
          question: "Who needs IVF treatment?",
          answer:
            "IVF may be considered for blocked fallopian tubes, significant male-factor infertility, endometriosis, reduced ovarian reserve, unexplained infertility, unsuccessful IUI treatment and several other fertility conditions.",
        },
        {
          question: "How long does an IVF cycle take?",
          answer:
            "The exact duration varies depending on the treatment protocol. A full IVF cycle typically takes about 4-6 weeks from the start of ovarian stimulation to the pregnancy test.",
        },
        {
          question: "Is IVF painful?",
          answer:
            "IVF involves injections and procedures, but discomfort is generally managed through monitoring, medication and sedation or anaesthesia for egg retrieval. Most patients tolerate IVF well.",
        },
        {
          question: "What is the difference between IVF and ICSI?",
          answer:
            "In conventional IVF, sperm fertilise the egg without direct injection. In ICSI, an embryologist injects a selected sperm directly into a mature egg.",
        },
        {
          question: "Is ICSI necessary with every IVF cycle?",
          answer:
            "No. ICSI is generally used when there is a clinical indication, such as significant male-factor infertility or previous fertilisation problems.",
        },
        {
          question: "Can IVF work with low AMH?",
          answer:
            "IVF may still be considered in women with low AMH, but expected ovarian response and treatment outcome depend on age, ovarian reserve and several other factors.",
        },
        {
          question: "Can IVF help with blocked fallopian tubes?",
          answer:
            "Yes. IVF bypasses the fallopian tubes because fertilisation takes place in the laboratory.",
        },
        {
          question: "Can IVF help male infertility?",
          answer:
            "Yes. IVF, often combined with ICSI where appropriate, can be used for selected male fertility problems.",
        },
        {
          question: "How many embryos are transferred in IVF?",
          answer:
            "The number should be decided individually based on factors such as age, embryo development and medical guidance. Transferring more embryos can increase the risk of multiple pregnancy.",
        },
        {
          question: "Are embryos always transferred immediately after IVF?",
          answer:
            "No. In some cycles, embryos are frozen and transferred later in a frozen embryo transfer cycle.",
        },
        {
          question: "Can embryos be genetically tested during IVF?",
          answer:
            "Yes, Preimplantation Genetic Testing (PGT) may be performed in selected cases where there is an appropriate indication.",
        },
        {
          question: "Does IVF guarantee pregnancy?",
          answer:
            "No. IVF cannot guarantee pregnancy or live birth. Treatment outcomes depend on age, egg and sperm factors, embryo development, uterine health and other clinical factors.",
        },
        {
          question: "What is the cost of IVF treatment in Noida?",
          answer:
            "IVF cost varies according to medicines, investigations, laboratory treatment and whether additional procedures such as ICSI, embryo freezing, PGT or sperm retrieval are required.",
        },
        {
          question: "How do I choose an IVF centre in Noida?",
          answer:
            "Consider the fertility specialist's approach, diagnostic evaluation, embryology services, treatment transparency, laboratory standards, communication and whether treatment is personalised to your fertility condition.",
        },
        {
          question: "Where can I get IVF treatment in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised IVF treatment planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          IVF Treatment in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Personalised IVF treatment and fertility care for couples trying to conceive at Divine IVF, Sector 76, Noida.
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
              Book IVF Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Embryo culture and IVF laboratory at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Hormonal assessment and blood tests for IVF treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is IVF Treatment Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is IVF Treatment?</h2>
          <p className="text-ink-600">
            <strong>IVF</strong> stands for <strong>In Vitro Fertilisation</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            It is an assisted reproductive treatment in which eggs are collected from the ovaries and fertilised with sperm in an embryology laboratory.
          </p>
          <p className="text-ink-600 mt-2">
            The resulting embryos are monitored for development, and a suitable embryo may later be transferred into the uterus.
          </p>
          <p className="text-ink-600 mt-2">
            A typical IVF cycle may involve:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-3 list-disc list-inside text-sm text-ink-600">
            <li>Fertility evaluation</li>
            <li>Ovarian stimulation</li>
            <li>Ultrasound monitoring</li>
            <li>Trigger injection</li>
            <li>Egg retrieval</li>
            <li>Sperm collection</li>
            <li>Fertilisation</li>
            <li>Embryo culture</li>
            <li>Embryo transfer or embryo freezing</li>
            <li>Pregnancy testing</li>
          </ul>
          <p className="text-ink-600 text-sm mt-3">The exact treatment protocol varies from patient to patient.</p>
        </div>

        {/* Who May Need IVF Treatment */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Need IVF Treatment?</h2>
          <p className="text-ink-600 text-sm">IVF may be considered for several different fertility conditions.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Blocked or Damaged Fallopian Tubes</h3>
              <p className="text-ink-600 text-sm">Fallopian tubes normally allow sperm and egg to meet. If both tubes are blocked or significantly damaged, natural fertilisation may become difficult or impossible. IVF bypasses the fallopian tubes by allowing fertilisation to occur in the laboratory.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Male Factor Infertility</h3>
              <p className="text-ink-600 text-sm">IVF may be considered when semen analysis shows problems such as low sperm count, poor sperm motility, abnormal sperm morphology, or other significant sperm-related concerns. In more severe male-factor infertility, IVF may be combined with <Link href="/icsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">ICSI</Link>.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Ovulation Disorders</h3>
              <p className="text-ink-600 text-sm">Women with irregular or absent ovulation may initially be treated with simpler fertility options. IVF may be considered when other treatments are unsuccessful or when additional fertility factors are present.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Endometriosis</h3>
              <p className="text-ink-600 text-sm">Endometriosis can affect the ovaries, fallopian tubes and pelvic environment. Depending on age, severity and fertility history, IVF may be considered.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Reduced Ovarian Reserve</h3>
              <p className="text-ink-600 text-sm">Women with reduced ovarian reserve may have fewer eggs available. Treatment decisions depend on age, AMH, antral follicle count, previous ovarian response, and overall fertility history. IVF may be discussed when clinically appropriate.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Unexplained Infertility</h3>
              <p className="text-ink-600 text-sm">Sometimes routine fertility tests do not reveal a definite cause. Depending on the duration of infertility, age and previous treatment, IVF may be considered.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Repeated IUI Failure</h3>
              <p className="text-ink-600 text-sm">If properly selected <Link href="/iui-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IUI</Link> cycles have been unsuccessful, IVF may be the next treatment option depending on the couple's fertility profile.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Certain Genetic Conditions</h3>
              <p className="text-ink-600 text-sm">IVF may also be required when <Link href="/genetic-testing-in-ivf-noida" className="text-rose-600 font-semibold hover:underline">Preimplantation Genetic Testing (PGT)</Link> is planned for selected inherited genetic or chromosomal conditions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Fertility Preservation</h3>
              <p className="text-ink-600 text-sm">IVF techniques may also be used for fertility preservation through egg or embryo freezing in appropriate situations.</p>
            </div>
          </div>
        </div>

        {/* When Should You Consider IVF */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">When Should You Consider IVF?</h2>
          <p className="text-ink-600 text-sm">You may consider discussing IVF with a fertility specialist if:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have been trying to conceive without success
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Both fallopian tubes are blocked
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have severe endometriosis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Semen analysis shows significant abnormalities
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Your ovarian reserve is reduced
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous IUI cycles have failed
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have experienced previous IVF failure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You require genetic testing of embryos
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertility preservation is being considered
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other fertility treatments are unlikely to be effective
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The appropriate timing of IVF depends on your individual <Link href="/fertility-investigation-in-noida" className="text-rose-600 font-semibold hover:underline">fertility evaluation</Link>.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Sperm preparation for IVF treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="IVF consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/ubpLTQ5V0jud7NsdtcgO/image.png"
              alt="Embryo transfer preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* IVF vs IUI / IVF vs ICSI / IVF vs IMSI */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">IVF vs Other Fertility Treatments</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">IVF vs IUI – What Is the Difference?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">IUI</h4>
                  <ul className="space-y-1 mt-1 text-xs text-ink-600">
                    <li>• Prepared sperm is placed into the uterus</li>
                    <li>• Fertilisation occurs inside the body</li>
                    <li>• Egg retrieval is not required</li>
                    <li>• Less invasive</li>
                    <li>• Suitable for selected mild fertility problems</li>
                  </ul>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">IVF</h4>
                  <ul className="space-y-1 mt-1 text-xs text-ink-600">
                    <li>• Eggs are collected from the ovaries</li>
                    <li>• Fertilisation occurs in a laboratory</li>
                    <li>• Embryos are cultured before transfer</li>
                    <li>• More intensive monitoring is required</li>
                    <li>• Suitable for more complex fertility problems</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-ink-500 mt-2">The appropriate treatment depends on the fertility diagnosis.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IVF vs ICSI</h3>
              <p className="text-ink-600 text-sm">IVF and ICSI differ mainly in the method of fertilisation.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">Conventional IVF</h4>
                  <p className="text-xs text-ink-600 mt-1">Sperm are placed with eggs and must fertilise them without direct injection.</p>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">ICSI</h4>
                  <p className="text-xs text-ink-600 mt-1">One selected sperm is injected directly into a mature egg. Commonly considered when significant male-factor infertility or previous fertilisation difficulty is present.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IVF vs IMSI</h3>
              <p className="text-ink-600 text-sm"><Link href="/imsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IMSI</Link> is an advanced sperm-selection technique that may be used in selected IVF-ICSI cycles. It involves more detailed morphological assessment of sperm before ICSI. IMSI is not required for every IVF patient and should only be considered when clinically appropriate.</p>
            </div>
          </div>
        </div>

        {/* Fresh vs Frozen Embryo Transfer */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Fresh Embryo Transfer vs Frozen Embryo Transfer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">Fresh Embryo Transfer</h3>
              <p className="text-xs text-ink-600 mt-1">An embryo is transferred during the same IVF cycle in which eggs were retrieved.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h3 className="font-bold text-sm text-ink-900">Frozen Embryo Transfer</h3>
              <p className="text-xs text-ink-600 mt-1">Suitable embryos are frozen and transferred during a later cycle.</p>
            </div>
          </div>
          <p className="text-xs text-ink-500 mt-3">The appropriate approach depends on ovarian response, endometrial condition, hormonal levels, embryo testing, medical considerations, and individual treatment plan. Neither method is automatically best for every patient.</p>
        </div>

        {/* IVF for Specific Conditions */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">IVF for Specific Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">IVF for Male Infertility</h3>
              <p className="text-ink-600 text-sm">Male-factor infertility is one of the situations where IVF may be considered. Depending on sperm parameters, treatments can include conventional IVF, IVF with ICSI, surgical sperm retrieval with ICSI, or other laboratory techniques in selected cases. A <Link href="/male-infertility-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">semen analysis and male fertility evaluation</Link> help determine the appropriate approach.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IVF for Blocked Fallopian Tubes</h3>
              <p className="text-ink-600 text-sm">IVF can bypass blocked fallopian tubes because eggs are retrieved directly from the ovaries and fertilised in the laboratory. A detailed evaluation is important to assess whether any tubal condition needs treatment before IVF.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IVF for Endometriosis</h3>
              <p className="text-ink-600 text-sm">Women with endometriosis may experience fertility problems because the condition can affect ovaries, fallopian tubes, pelvic anatomy, and egg reserve. IVF may be discussed depending on age, ovarian reserve, previous surgery and duration of infertility.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IVF for PCOS</h3>
              <p className="text-ink-600 text-sm">Women with PCOS often have ovulation problems. Many patients may conceive with simpler treatments. IVF may be considered if other fertility treatments have failed, additional infertility factors are present, there is significant male-factor infertility, or the overall fertility profile indicates IVF. Careful ovarian stimulation and monitoring are especially important in patients with a high ovarian response.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">IVF for Low AMH</h3>
              <p className="text-ink-600 text-sm">A low AMH result may indicate reduced ovarian reserve. However, AMH alone does not determine whether pregnancy is possible. Your fertility specialist also considers age, antral follicle count, previous treatment response, egg quality factors, semen parameters, and overall reproductive history. The IVF protocol can then be personalised accordingly.</p>
            </div>
          </div>
        </div>

        {/* IVF Success Rate */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">IVF Success Rate</h2>
          <p className="text-ink-600 text-sm">There is no single IVF success percentage that applies to every patient. IVF outcomes depend on multiple factors.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Female Age</strong> — An important factor influencing egg quality and embryo potential
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Ovarian Reserve</strong> — AMH and antral follicle count provide information about expected ovarian response
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Egg Quality</strong> — Influences fertilisation and embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Sperm Quality</strong> — Significant sperm abnormalities can affect fertilisation and embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Embryo Development</strong> — Not every fertilised egg develops into a transferable embryo
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Uterine Health</strong> — Conditions affecting the uterus or endometrium may influence implantation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Cause of Infertility</strong> — Different fertility conditions may have different treatment outcomes
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              <strong>Previous Fertility Treatment</strong> — Previous IVF response provides useful information for future cycles
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">No clinic can guarantee an IVF pregnancy or live birth.</p>
        </div>

        {/* How Many IVF Cycles May Be Needed */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">How Many IVF Cycles May Be Needed?</h2>
          <p className="text-ink-600 text-sm">The number of IVF cycles required varies between patients. Some patients may achieve pregnancy after one treatment cycle, while others may need more than one attempt.</p>
          <p className="text-ink-600 text-sm mt-2">Factors influencing this include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Number of eggs retrieved
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertilisation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo development
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Number of usable embryos
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Uterine factors
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Underlying infertility diagnosis
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Your treatment plan should be reassessed after each cycle.</p>
        </div>

        {/* Is IVF Painful / Side Effects / OHSS */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Understanding IVF: Pain, Side Effects, and Risks</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Is IVF Painful?</h3>
              <p className="text-ink-600 text-sm">IVF involves several stages and experiences vary. Ovarian stimulation requires fertility medicine injections that may cause temporary discomfort. Ultrasound monitoring is generally well tolerated. Egg retrieval is normally performed with sedation or anaesthesia, so discomfort during the procedure is minimised. Embryo transfer is usually a brief procedure and most patients experience minimal discomfort.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Possible Side Effects of IVF Medicines</h3>
              <p className="text-ink-600 text-sm">Fertility medicines may cause temporary symptoms such as bloating, mild abdominal discomfort, mood changes, breast tenderness, headache, and injection-site reactions. Your treatment team monitors ovarian response to reduce risks.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">What Is OHSS?</h3>
              <p className="text-ink-600 text-sm">Ovarian Hyperstimulation Syndrome (OHSS) is a potential complication of ovarian stimulation. It occurs when the ovaries respond excessively to fertility medicines. Symptoms can range from mild abdominal bloating to more significant symptoms in uncommon severe cases. Modern monitoring and personalised stimulation protocols are used to reduce the risk.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Is IVF Safe?</h3>
              <p className="text-ink-600 text-sm">IVF is an established assisted reproductive treatment, but like any medical procedure it has potential risks. These may include medication side effects, OHSS, procedure-related complications, multiple pregnancy if multiple embryos are transferred, ectopic pregnancy, and emotional and financial stress. Your individual risks should be discussed before starting treatment.</p>
            </div>
          </div>
        </div>

        {/* IVF Treatment Cost */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">IVF Treatment Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The IVF treatment cost in Noida varies depending on the treatment protocol and services required. The total IVF cost may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Initial fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hormonal blood tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ovarian stimulation medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Egg retrieval
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Anaesthesia or sedation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryology laboratory charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertilisation procedure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo culture
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo transfer
            </div>
          </div>
          <p className="text-ink-600 text-sm mt-3">Additional costs may apply if treatment requires:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IMSI
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Sperm retrieval
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
              Genetic testing / PGT
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Donor eggs or sperm where legally and medically appropriate
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Additional investigations
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Before starting IVF, ask for a clear breakdown of what is included and what may be charged separately.</p>
        </div>

        {/* Questions to Ask Before Starting IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Should You Ask Before Starting IVF?</h2>
          <p className="text-ink-600 text-sm">Before beginning treatment, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is IVF recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Are there any simpler treatment options?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Which IVF protocol is being recommended?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will I need ICSI?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What tests are required?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What is included in the IVF cost?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Which services are charged separately?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are my individual chances based on age and fertility results?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How many embryos are likely to be transferred?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens to additional suitable embryos?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the possible risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if the first cycle is unsuccessful?
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Clear communication helps patients make informed fertility decisions.</p>
        </div>

        {/* Preparing for IVF Treatment */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Preparing for IVF Treatment
          </h3>
          <p className="text-ink-600 text-sm">Your doctor may recommend measures such as:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Stop smoking
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Limit or avoid alcohol
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Maintain an appropriate weight
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Follow a balanced diet
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Take prescribed folic acid or supplements
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Manage existing medical conditions
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Review current medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Maintain appropriate sleep and activity
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">No diet or supplement can guarantee IVF success.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for IVF Treatment in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised IVF Treatment Planning</strong> — The IVF protocol is selected according to your fertility diagnosis, age, ovarian reserve and previous treatment response.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evaluation of Both Partners</strong> — Female and male fertility factors are assessed before treatment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Advanced Fertility Treatment Options</strong> — Depending on clinical need, treatment may include IVF, ICSI, IMSI, embryo freezing, genetic testing/PGT, sperm retrieval, and other fertility treatments.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility Care Under Dr. Mandavi Rai</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility Investigation Before Treatment</strong> — Patients are evaluated before IVF so that treatment is not started without understanding the fertility factors involved.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking IVF and fertility treatment in Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an IVF Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you are having difficulty conceiving or have been advised to consider IVF, the first step is a detailed fertility evaluation.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised IVF treatment planning according to your fertility history, investigation results and reproductive goals.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book IVF Consultation
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