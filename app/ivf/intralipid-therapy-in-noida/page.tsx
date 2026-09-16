// app/intralipid-therapy-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/intralipid-therapy-in-noida" },
  title: "Intralipid Therapy in Noida | IVF Intralipid Infusion | Divine IVF",
  description:
    "Learn about intralipid therapy in Noida for IVF and implantation concerns at Divine IVF. Understand its uses, limited evidence, risks and personalised fertility guidance.",
  robots: { index: true, follow: true },
  keywords:
    "Intralipid Therapy in Noida, Intralipid Infusion in Noida, Intralipid Therapy for IVF in Noida, Intralipid Infusion for IVF in Noida, IVF Intralipid Therapy in Noida, Intralipid Treatment in Noida, Intralipid Therapy for Implantation, Intralipid Therapy for Recurrent Implantation Failure, Intralipid for Recurrent Miscarriage, Intralipid Before Embryo Transfer, Intralipid Infusion Before Embryo Transfer, Intralipid Therapy for NK Cells, IVF Add-On Treatment in Noida, Recurrent Implantation Failure Treatment in Noida, Repeated IVF Failure Treatment in Noida, IVF Treatment in Noida, Embryo Transfer in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "Intralipid Therapy in Noida | IVF Intralipid Infusion | Divine IVF",
    description:
      "Learn about intralipid therapy for IVF and implantation concerns in Noida, including its potential uses, limited evidence, risks and personalised fertility guidance.",
    url: "http://divine-ivf.vercel.app/intralipid-therapy-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/gn3K4dNJ5inq2Zs5oeui/image.png",
        width: 1200,
        height: 630,
        alt: "Intralipid therapy infusion at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IntralipidTherapyPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "Intralipid Therapy in Noida" },
      ]}
      eyebrow="Advanced IVF · Immunotherapy · Noida"
      // ========== H1 ==========
      titlePlain="Intralipid Therapy in Noida"
      titleAccent="Understanding intralipid infusion as a fertility treatment add-on for selected patients undergoing IVF or fertility care"
      // =========================
      intro="If you have experienced repeated unsuccessful embryo transfers, recurrent pregnancy loss, or have been advised to explore immune-related fertility treatment add-ons, you may have come across Intralipid Therapy."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/gn3K4dNJ5inq2Zs5oeui/image.png"
      heroAlt="Intralipid therapy intravenous infusion at Divine IVF, Noida"
      secondaryImage="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
      secondaryImageAlt="Pre-infusion preparation for Intralipid therapy at Divine IVF Clinic, Noida"
      whatItIs={[
        "Intralipid is an intravenous fat emulsion originally developed for nutritional support. It generally contains components such as soybean oil, egg phospholipids, glycerol, and water.",
        "In some fertility settings, intralipid infusion has been explored as an immune-modulating treatment add-on. However, its role in improving implantation, pregnancy or live-birth outcomes remains uncertain.",
        "At Divine IVF, Sector 76, Noida, fertility treatment planning is based on your complete reproductive history, previous IVF cycles, embryo-transfer outcomes, medical conditions and available scientific evidence. Intralipid therapy is not a routine fertility treatment and should only be considered after an individual medical assessment and discussion of its potential benefits, limitations and risks.",
      ]}
      whoNeedsIt={[
        "Patients with repeated unsuccessful embryo transfers where other causes have been evaluated",
        "Patients with recurrent implantation failure who have undergone comprehensive fertility evaluation",
        "Patients with recurrent pregnancy loss where immune factors are being explored as a potential cause",
        "Patients who have had extensive fertility investigation and immunological testing",
        "Patients who have had previous IVF cycles with unexplained failure despite good embryo quality",
      ]}
      preparation={[
        "Before considering intralipid therapy, Dr. Rai reviews your fertility and pregnancy history in detail — including any previous IVF cycles, pregnancy outcomes, and relevant medical conditions. Specific immunological investigations may be recommended first to establish whether the therapy is relevant to your case.",
        "No special preparation is needed on the day of the infusion itself beyond arriving for a routine intravenous infusion appointment. The infusion is timed around your fertility treatment cycle — typically before embryo transfer or in early pregnancy, depending on your individual plan.",
        "You should inform the clinic of any allergies, particularly to soy, eggs, or any medications. Special caution may be required in people with soy allergy, egg allergy, peanut-related allergy concerns, previous severe allergic reactions, certain metabolic disorders, significant liver or lipid-metabolism disorders, or certain infections.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility Consultation", description: "The doctor reviews fertility history, previous IVF cycles, previous embryo transfers, pregnancy-loss history, medical history, medications, and known allergies." },
        { title: "Step 2 – Review of Previous IVF Records", description: "Previous treatment records can help identify potential reasons for unsuccessful cycles including embryo quality, embryo stage, number of transfers, endometrial findings, ovarian response, semen parameters, and genetic testing results." },
        { title: "Step 3 – Medical Suitability Assessment", description: "Before intravenous treatment, the doctor assesses whether there are any contraindications or allergy risks." },
        { title: "Step 4 – Intravenous Infusion", description: "Intralipid is administered intravenously through a drip. The dose, dilution and infusion duration vary according to the medical protocol." },
        { title: "Step 5 – Monitoring", description: "Patients are monitored during infusion for possible reactions." },
        { title: "Step 6 – Follow-Up", description: "Further fertility treatment proceeds according to the individual IVF or embryo-transfer plan." },
      ]}
      whatToExpect="An intralipid infusion typically takes 1-3 hours to administer in a supervised clinical setting. You'll be seated comfortably while the intravenous drip runs, and a nurse will monitor your vital signs throughout. Most patients tolerate the infusion well, though some may experience mild side effects. Dr. Rai will explain the specific timing and monitoring plan for your situation, including how the therapy fits into your overall treatment schedule."
      benefits={[
        "Considered in specific, individually evaluated cases where immunological factors may be contributing",
        "Administered under clinical supervision with proper monitoring",
        "May offer an additional approach for patients who have experienced recurrent implantation failure or recurrent pregnancy loss",
        "Relatively well-tolerated with a generally favourable safety profile",
        "Can be integrated into a broader, individualised treatment plan",
      ]}
      considerations={[
        "Not appropriate or necessary for every patient — only considered after thorough evaluation",
        "Its use should follow a proper evaluation, not be requested as a standalone add-on without clinical indication",
        "Discussed openly, including what is and isn't established about its role in your specific case — the evidence base is still evolving",
        "May not be effective for all patients, and response can vary",
        "Requires intravenous administration in a clinical setting with time commitment",
        "Costs associated with the therapy should be discussed upfront",
        "Potential side effects include mild fever, chills, headache, nausea, dizziness, flushing, injection-site discomfort, or allergic reactions (rare)",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The fertility treatment within which intralipid therapy may be considered." },
        { name: "Embryo Transfer", href: "/embryo-transfer", blurb: "The procedure around which intralipid therapy is often timed." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation process that helps determine if these therapies are appropriate." },
        { name: "Genetic Testing", href: "/genetic-testing-in-ivf-noida", blurb: "Another advanced option considered in complex fertility cases." },
        { name: "Recurrent Implantation Failure", href: "/recurrent-implantation-failure", blurb: "A condition for which intralipid therapy may be discussed." },
        { name: "Recurrent Pregnancy Loss", href: "/recurrent-pregnancy-loss", blurb: "A condition for which intralipid therapy may be discussed." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Immunological Factors in Infertility",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/immunological-factors-in-infertility/",
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
          question: "What is intralipid therapy?",
          answer:
            "Intralipid therapy involves intravenous administration of a fat emulsion. It has been explored as an immune-related fertility treatment add-on in some IVF settings.",
        },
        {
          question: "Why is intralipid used in IVF?",
          answer:
            "It has been proposed that intralipids may influence immune activity involved in implantation, but this potential fertility benefit has not been conclusively proven.",
        },
        {
          question: "Does intralipid improve IVF success?",
          answer:
            "There is currently insufficient high-quality evidence to confirm that intralipid therapy improves IVF live-birth rates for most patients.",
        },
        {
          question: "Is intralipid recommended for recurrent implantation failure?",
          answer:
            "Routine intralipid therapy is not currently supported by sufficient evidence for recurrent implantation failure.",
        },
        {
          question: "Can intralipid prevent miscarriage?",
          answer:
            "There is insufficient evidence to recommend intralipid therapy routinely for preventing unexplained recurrent pregnancy loss.",
        },
        {
          question: "What are NK cells?",
          answer:
            "Natural Killer cells are part of the immune system and are naturally present in the uterus. Their role in fertility is complex and not fully understood.",
        },
        {
          question: "Do high NK cells mean I need intralipid therapy?",
          answer:
            "Not necessarily. Immune tests used in fertility treatment have important limitations and should not alone determine treatment.",
        },
        {
          question: "When is intralipid given during IVF?",
          answer:
            "Different protocols have used it at different times, but there is no universally accepted fertility protocol.",
        },
        {
          question: "What are the side effects of intralipid therapy?",
          answer:
            "Possible side effects include headache, nausea, dizziness, flushing and infusion-related reactions. Rarely, serious allergic reactions can occur.",
        },
        {
          question: "Who should avoid intralipid therapy?",
          answer:
            "Patients with relevant allergies, particularly to components such as soybean or egg products, or certain medical conditions may not be suitable.",
        },
        {
          question: "Is intralipid the same as IVIG?",
          answer:
            "No. Intralipid is a fat emulsion, while IVIG contains immunoglobulins obtained from donated plasma.",
        },
        {
          question: "What is the cost of intralipid therapy  ",
          answer:
            "Cost varies according to the product, dose, number of infusions, monitoring and associated fertility treatment.",
        },
        {
          question: "Where can I discuss intralipid therapy  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida to review your fertility history and discuss whether any treatment add-on is medically appropriate.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Intralipid Therapy in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Understanding intralipid infusion as a fertility treatment add-on for selected patients undergoing IVF or fertility care.
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
              Book Fertility Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Blood test for fertility evaluation before considering intralipid therapy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for fertility assessment before intralipid therapy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Intralipid Therapy Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Intralipid Therapy?</h2>
          <p className="text-ink-600">
            <strong>Intralipid</strong> is an intravenous fat emulsion originally developed for nutritional support.
          </p>
          <p className="text-ink-600 mt-2">
            It generally contains components such as:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>Soybean oil</li>
            <li>Egg phospholipids</li>
            <li>Glycerol</li>
            <li>Water</li>
          </ul>
          <p className="text-ink-600 mt-2">
            In some fertility settings, <strong>intralipid infusion</strong> has been explored as an immune-modulating treatment add-on.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            However, its role in improving implantation, pregnancy or live-birth outcomes remains uncertain.
          </p>
        </div>

        {/* What Is Intralipid Therapy in IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Intralipid Therapy in IVF?</h2>
          <p className="text-ink-600">
            Intralipid therapy in IVF refers to giving an intravenous lipid emulsion before or around fertility treatment or <Link href="/embryo-transfer" className="text-rose-600 font-semibold hover:underline">embryo transfer</Link>.
          </p>
          <p className="text-ink-600 mt-2">
            It has been proposed that intralipids may influence certain immune responses involved in implantation.
          </p>
          <p className="text-ink-600 mt-2">
            However, the relationship between immune-cell activity and IVF failure is complex, and current research has not established that intralipid infusion reliably improves fertility outcomes.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            Therefore, intralipid therapy should not be considered a standard part of every IVF treatment cycle.
          </p>
        </div>

        {/* Why Is Intralipid Therapy Discussed in Fertility Treatment */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Why Is Intralipid Therapy Discussed in Fertility Treatment?</h2>
          <p className="text-ink-600 text-sm">Intralipid therapy has mainly been explored in patients with:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Repeated unsuccessful embryo transfers
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Recurrent implantation concerns
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Recurrent pregnancy loss
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Suspected immune-related fertility concerns
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous fertility-treatment failure
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">However, these situations can have many different causes. A comprehensive <Link href="/fertility-investigation-in-noida" className="text-rose-600 font-semibold hover:underline">fertility evaluation</Link> is more important than automatically adding immune therapies.</p>
        </div>

        {/* What Is Recurrent Implantation Failure */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Recurrent Implantation Failure?</h2>
          <p className="text-ink-600 text-sm">Recurrent implantation failure refers broadly to repeated failure to achieve implantation after embryo transfer, although definitions vary.</p>
          <p className="text-ink-600 text-sm mt-2">Possible contributing factors may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo-related factors
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Chromosomal abnormalities
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
              Age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Male fertility factors
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryology factors
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other medical conditions
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because implantation is influenced by many factors, treatment should focus first on identifying potentially correctable causes.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Intralipid infusion preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Intralipid therapy consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Immunological assessment for intralipid therapy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Intralipid Therapy and Natural Killer Cells */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Intralipid Therapy and Natural Killer Cells</h2>
          <p className="text-ink-600 text-sm">One of the reasons intralipid therapy has been proposed in fertility treatment relates to Natural Killer (NK) cells.</p>
          <p className="text-ink-600 text-sm mt-2">NK cells are part of the immune system and are also naturally present in the uterus.</p>
          <p className="text-ink-600 text-sm mt-2">Some theories have suggested that abnormal immune-cell activity may interfere with implantation. However:</p>
          <div className="space-y-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Uterine NK cells are a normal part of reproductive biology
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Blood NK-cell results may not accurately represent the uterine environment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              The relationship between NK cells and implantation failure remains uncertain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Routine immune testing has not been established as necessary for most fertility patients
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">For this reason, fertility treatment should not be based only on an abnormal immune test without broader clinical assessment.</p>
        </div>

        {/* Is Intralipid Therapy Proven to Improve IVF Success */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Is Intralipid Therapy Proven to Improve IVF Success?</h2>
          <p className="text-ink-600 text-sm font-semibold">At present, there is insufficient high-quality evidence to say that intralipid therapy reliably improves the chance of having a baby for most fertility patients.</p>
          <p className="text-ink-600 text-sm mt-2">Some smaller studies have suggested possible benefits, while other evidence remains inconsistent or limited.</p>
          <p className="text-ink-600 text-sm mt-2">Therefore:</p>
          <div className="space-y-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It should not be considered a guaranteed IVF-success treatment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It should not replace standard fertility evaluation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              It should not automatically be added to every IVF cycle
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Patients should receive clear counselling before considering it
            </div>
          </div>
        </div>

        {/* Who May Be Considered for Intralipid Therapy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Be Considered for Intralipid Therapy?</h2>
          <p className="text-ink-600 text-sm">A fertility specialist may discuss intralipid therapy in selected cases, although routine use is not established.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Repeated IVF Failure</h3>
              <p className="text-ink-600 text-sm">Patients who have experienced multiple unsuccessful IVF cycles may seek additional treatment options. However, embryo quality, uterine factors, sperm factors and treatment protocol should be reviewed first.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Repeated Implantation Failure</h3>
              <p className="text-ink-600 text-sm">After repeated unsuccessful embryo transfers, a detailed review should be performed before considering treatment add-ons.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Recurrent Pregnancy Loss</h3>
              <p className="text-ink-600 text-sm">Recurrent miscarriage may have several possible causes. Evaluation can include uterine factors, chromosomal causes, hormonal conditions, medical disorders, antiphospholipid syndrome where clinically indicated, and other reproductive factors. Intralipid therapy is not an established routine treatment for unexplained recurrent miscarriage.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Selected Immune-Related Concerns</h3>
              <p className="text-ink-600 text-sm">Some fertility clinics may discuss intralipid treatment after immune-related investigations. However, current evidence for many fertility immunology tests and treatments remains limited.</p>
            </div>
          </div>
        </div>

        {/* Who Should Not Receive Intralipid Therapy */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Who Should Not Receive Intralipid Therapy Without Careful Assessment?
          </h3>
          <p className="text-ink-600 text-sm">Intralipid infusion may not be appropriate for every patient. Special caution may be required in people with:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Soy allergy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Egg allergy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Peanut-related allergy concerns depending on product information
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous severe allergic reactions
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Certain metabolic disorders
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Significant liver or lipid-metabolism disorders
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Certain infections or medical conditions
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A complete medical history should always be reviewed before intravenous treatment.</p>
        </div>

        {/* When Is Intralipid Given During IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">When Is Intralipid Given During IVF?</h2>
          <p className="text-ink-600 text-sm">There is no universally accepted intralipid protocol for fertility treatment. Different fertility settings have used intralipid:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Before embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Around the time of embryo transfer
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              During an IVF cycle
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Repeated at different intervals
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because protocols vary and evidence is limited, there is no single scientifically established schedule suitable for every patient.</p>
        </div>

        {/* Risks and Side Effects */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Risks and Side Effects of Intralipid Therapy</h2>
          <p className="text-ink-600 text-sm">Like any intravenous infusion, intralipid therapy can cause side effects.</p>
          <p className="text-ink-600 text-sm mt-2">Possible effects may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Headache
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Nausea
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Vomiting
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Dizziness
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Flushing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Injection-site discomfort
            </div>
          </div>
          <p className="text-ink-600 text-sm mt-3">Less common but potentially serious complications may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Allergic reaction
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Infection
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Breathing difficulty
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Severe hypersensitivity or anaphylaxis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other infusion-related reactions
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">For this reason, intralipid should only be administered under appropriate medical supervision.</p>
        </div>

        {/* Benefits Claimed */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Benefits Claimed for Intralipid Therapy
          </h3>
          <p className="text-ink-600 text-sm">Some fertility literature and clinics have proposed that intralipids may:</p>
          <div className="space-y-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Influence immune activity
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Affect NK-cell function
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Support implantation in selected patients
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Help certain recurrent implantation cases
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">However, these potential benefits have not been conclusively established through high-quality evidence. Patients should distinguish between a proposed mechanism and a proven clinical benefit.</p>
        </div>

        {/* Intralipid Therapy Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Intralipid Therapy Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The cost of intralipid therapy in Noida may depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Medication/product used
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Dose required
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Infusion charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Number of infusions
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Other fertility investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF or frozen embryo transfer treatment
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because protocols vary, the exact cost can only be discussed after clinical assessment. Patients should also ask whether the proposed treatment has evidence of benefit for their specific condition before paying for fertility add-ons.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Questions to Ask Before Choosing Intralipid Therapy
          </h3>
          <p className="text-ink-600 text-sm">Before undergoing intralipid infusion, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why are you recommending intralipid in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What evidence supports it for my fertility condition?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Is it necessary for my IVF cycle?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What alternatives are available?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the possible side effects?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Do I need any tests before treatment?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How many infusions are being recommended?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What will the complete treatment cost be?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if I choose not to use this add-on?
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">These questions can help you make an informed fertility-treatment decision.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Fertility Evaluation  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Individualised Treatment Planning</strong> — Treatment decisions are based on each couple`s fertility history rather than automatically adding optional therapies.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Review of Previous IVF Failures</strong> — Previous treatment cycles can be reviewed to identify potential causes of unsuccessful implantation.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male and Female Fertility Assessment</strong> — Fertility evaluation considers factors involving both partners.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF and Advanced Fertility Care</strong> — Depending on your diagnosis, appropriate evidence-based fertility treatment options can be discussed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Fertility Care</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking fertility consultation, IVF treatment and evaluation after previous treatment failure.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Fertility Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have experienced repeated unsuccessful embryo transfers, recurrent pregnancy loss, or previous IVF failure, the priority is to understand the possible cause before adding additional treatments.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and IVF treatment planning based on your individual reproductive history.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Fertility Consultation
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