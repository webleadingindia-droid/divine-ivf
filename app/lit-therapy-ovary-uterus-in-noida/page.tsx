// app/lit-therapy-ovary-uterus-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/lit-therapy-ovary-uterus-in-noida" },
  title: "LIT Therapy in Noida | Ovary & Uterus Fertility Evaluation | Divine IVF",
  description:
    "Explore LIT Therapy, ovary and uterus fertility evaluation in Noida at Divine IVF. Learn about recurrent miscarriage, implantation concerns, evidence and treatment options.",
  robots: { index: true, follow: true },
  keywords:
    "LIT Therapy in Noida, LIT Therapy Ovary and Uterus, LIT Treatment in Noida, Lymphocyte Immunization Therapy in Noida, Ovary and Uterus Evaluation in Noida, Ovary Fertility Test in Noida, Uterus Fertility Test in Noida, Ovarian Reserve Test in Noida, Uterus Test for Infertility in Noida, Uterine Evaluation in Noida, Ovarian Evaluation in Noida, AMH Test in Noida, Endometrial Evaluation in Noida, LIT for Recurrent Miscarriage, LIT for Implantation Failure, LIT After Failed IVF, Recurrent Pregnancy Loss Treatment in Noida, Recurrent Implantation Failure in Noida, Failed IVF Evaluation in Noida, Ovarian Cyst Evaluation in Noida, PCOS Treatment in Noida, Endometriosis Treatment in Noida, Fertility Investigation in Noida, IVF Treatment in Noida, Fertility Clinic in Noida",
  openGraph: {
    title: "LIT Therapy in Noida | Ovary & Uterus Fertility Evaluation | Divine IVF",
    description:
      "Learn about LIT Therapy and personalised ovarian and uterine fertility evaluation for recurrent miscarriage and implantation concerns in Noida.",
    url: "https://www.divineivf.com/lit-therapy-ovary-uterus-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/mCzr9ZaS8twkkFtG3WCQ/image.png",
        width: 1200,
        height: 630,
        alt: "LIT Therapy and fertility evaluation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LitTherapyOvaryUterusPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/gynaecological-care-in-noida" },
        { label: "LIT Therapy — Ovary & Uterus" },
      ]}
      eyebrow="Reproductive Immunology · Noida"
      // ========== H1 ==========
      titlePlain="LIT Therapy, Ovary & Uterus Evaluation in Noida"
      titleAccent="Personalised evaluation of ovarian, uterine and implantation-related factors for women experiencing recurrent pregnancy loss, failed embryo transfers or previous IVF failure"
      // =========================
      intro="If you have experienced repeated miscarriages, unsuccessful embryo transfers or failed IVF treatment, you may have come across Lymphocyte Immunization Therapy (LIT) while researching reproductive immunology and implantation treatments."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/mCzr9ZaS8twkkFtG3WCQ/image.png"
      heroAlt="LIT Therapy clinical procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1579154204845-15a696c8e6f4?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Immunology laboratory work for LIT Therapy at Divine IVF Clinic, Noida"
      whatItIs={[
        "LIT stands for Lymphocyte Immunization Therapy. It is an immune-based treatment in which lymphocytes are prepared and administered with the proposed aim of modifying the maternal immune response.",
        "Historically, LIT has been explored in women experiencing recurrent pregnancy loss, repeated implantation failure, previous IVF failure, and suspected immune-related reproductive concerns.",
        "However, reliable evidence of improved live-birth outcomes has not been established. LIT should therefore not be presented as a routine or proven fertility treatment.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised assessment of fertility factors involving the ovaries, uterus, embryos and reproductive history before optional or experimental immune treatments are considered. It is important to understand that LIT does not directly treat the ovaries or uterus.",
      ]}
      whoNeedsIt={[
        "Women with recurrent pregnancy loss who have undergone a complete evidence-based evaluation",
        "Women with recurrent implantation failure after comprehensive fertility assessment",
        "Women with previous IVF failure where all recognised causes have been evaluated",
        "Women who have been counselled about the experimental nature of LIT and its lack of proven benefit",
        "Women who understand that LIT is not recommended by major reproductive guidelines",
        "Women who have had all other recognised causes of pregnancy loss or implantation failure evaluated",
      ]}
      preparation={[
        "Before considering any experimental immune treatment, patients with recurrent miscarriage or failed implantation should receive a structured evaluation. This includes pregnancy history review, ovarian health assessment, uterine health evaluation, genetic assessment, review of relevant medical conditions, and male fertility factors.",
        "Before considering LIT Therapy, Dr. Rai reviews your fertility and pregnancy history in detail, including any previous IVF cycles, ovarian response, and uterine assessment findings. Specific immunological investigations may be recommended first to establish whether the therapy is relevant to your case.",
        "The therapy requires careful timing relative to your treatment cycle, and the preparation process is planned individually.",
      ]}
      howItWorks={[
        { title: "Step 1 – Evaluation", description: "A thorough review of your specific ovarian and uterine findings from fertility investigation, including hormonal levels, ovarian reserve, and uterine health." },
        { title: "Step 2 – Immunological Assessment", description: "Specific immunological investigations may be performed to identify potential immune factors affecting ovarian or uterine function." },
        { title: "Step 3 – Preparation", description: "Blood is taken from the partner (or a donor) to prepare the lymphocytes for administration, with the therapy targeted to ovarian or uterine findings." },
        { title: "Step 4 – Administration", description: "The prepared lymphocytes are administered to the patient in a clinical setting under medical supervision." },
        { title: "Step 5 – Treatment Monitoring", description: "The patient is monitored during and after administration as standard practice." },
        { title: "Step 6 – Treatment Integration", description: "The therapy is timed and integrated with your overall fertility treatment plan to specifically support ovarian function or uterine receptivity." },
      ]}
      whatToExpect="Dr. Rai will explain the specific reasoning and process for your case, since this therapy is considered only after individual evaluation. The administration itself is similar to a routine blood product transfusion, performed in a clinical setting under medical supervision. You'll be monitored during and after the procedure. The therapy is timed to support your fertility treatment cycle, and you'll receive clear guidance on the schedule and what to expect."
      benefits={[
        "Currently, there are no proven benefits of LIT for unexplained recurrent pregnancy loss or implantation failure that are supported by major reproductive-medicine guidelines.",
        "ESHRE specifically recommends that LIT should not be used as treatment for unexplained recurrent pregnancy loss because a significant beneficial effect has not been established and serious adverse effects may occur.",
        "Patients should be aware that LIT is not considered a standard evidence-based fertility treatment.",
      ]}
      considerations={[
        "It is not considered a standard evidence-based fertility treatment",
        "Major reproductive-medicine guidelines do not recommend its routine use for unexplained recurrent pregnancy loss",
        "A meaningful clinical benefit has not been established",
        "Potential adverse effects exist",
        "ESHRE recommends against its use due to lack of proven benefit and potential serious adverse effects",
        "LIT does not directly improve ovarian reserve, egg quantity or egg quality",
        "LIT does not correct structural problems within the uterus",
        "LIT should not be used as a substitute for proper ovarian and uterine assessment",
      ]}
      related={[
        { name: "LIT Therapy", href: "/lymphocyte-immunization-therapy-in-noida", blurb: "The broader immunological therapy that this targeted application builds upon." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation process behind this decision — identifying ovarian and uterine findings." },
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "General women's health evaluation and care — the foundation of reproductive health." },
        { name: "Laparoscopy", href: "/laparoscopy-in-noida", blurb: "Minimally invasive assessment of pelvic conditions including endometriosis and adhesions." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The fertility treatment within which this targeted LIT may be considered." },
        { name: "ERA Test", href: "/era-test-in-noida", blurb: "Endometrial receptivity testing for implantation concerns." },
        { name: "Intralipid Therapy", href: "/intralipid-therapy-in-noida", blurb: "Another immunological adjunct sometimes considered alongside LIT." },
        { name: "Genetic Testing / PGT", href: "/genetic-testing-in-ivf-noida", blurb: "Genetic screening that may identify causes of recurrent pregnancy loss." },
        { name: "Recurrent Pregnancy Loss", href: "/recurrent-pregnancy-loss", blurb: "Evaluation and treatment for recurrent pregnancy loss before considering experimental therapies." },
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
          question: "What is LIT Therapy?",
          answer:
            "LIT stands for Lymphocyte Immunization Therapy. It is an immune-based therapy that has historically been proposed for recurrent miscarriage and implantation concerns.",
        },
        {
          question: "Does LIT treat the ovaries?",
          answer:
            "No. LIT does not treat reduced ovarian reserve, poor egg quality, PCOS or ovarian cysts.",
        },
        {
          question: "Does LIT treat uterus problems?",
          answer:
            "No. It does not remove fibroids, polyps, adhesions, septum or other structural uterine abnormalities.",
        },
        {
          question: "Can LIT increase AMH?",
          answer:
            "There is no established evidence that LIT increases AMH or ovarian reserve.",
        },
        {
          question: "Can LIT improve egg quality?",
          answer:
            "There is no established evidence that LIT improves egg quality.",
        },
        {
          question: "Does LIT make the uterine lining thicker?",
          answer:
            "LIT has not been proven to increase endometrial thickness.",
        },
        {
          question: "Why are the ovaries checked after recurrent miscarriage?",
          answer:
            "Ovarian evaluation may provide information about fertility planning, although ovarian reserve testing itself is not routinely recommended solely as a recurrent pregnancy-loss test.",
        },
        {
          question: "Why is the uterus checked after recurrent miscarriage?",
          answer:
            "Certain uterine abnormalities may be associated with recurrent pregnancy loss and can require targeted evaluation.",
        },
        {
          question: "Is LIT recommended for recurrent miscarriage?",
          answer:
            "Current major reproductive guidelines do not recommend routine LIT for unexplained recurrent pregnancy loss.",
        },
        {
          question: "Is LIT recommended after failed IVF?",
          answer:
            "Not routinely. Previous IVF treatment should first be reviewed for embryo, ovarian, uterine and other relevant factors.",
        },
        {
          question: "Is LIT the same as intralipid therapy?",
          answer:
            "No. LIT involves lymphocytes whereas intralipid therapy uses an intravenous lipid emulsion.",
        },
        {
          question: "Can LIT guarantee pregnancy?",
          answer:
            "No.",
        },
        {
          question: "What tests evaluate the ovaries?",
          answer:
            "Depending on the fertility situation, evaluation may include AMH, ultrasound, antral follicle count and relevant hormone tests.",
        },
        {
          question: "How is the uterus evaluated?",
          answer:
            "Ultrasound is commonly used first. In selected cases, hysteroscopy or other imaging may be recommended.",
        },
        {
          question: "Where can I get ovary and uterus fertility evaluation in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for personalised fertility, ovarian and uterine assessment.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          LIT Therapy, Ovary & Uterus Evaluation in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Personalised evaluation of ovarian, uterine and implantation-related factors for women experiencing recurrent pregnancy loss, failed embryo transfers or previous IVF failure.
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
              Book Ovary & Uterus Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for ovary and uterus fertility evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for ovarian and uterine assessment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is LIT Therapy Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is LIT Therapy?</h2>
          <p className="text-ink-600">
            <strong>LIT</strong> stands for <strong>Lymphocyte Immunization Therapy</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            It is an immune-based treatment in which lymphocytes are prepared and administered with the proposed aim of modifying the maternal immune response.
          </p>
          <p className="text-ink-600 mt-2">
            Historically, LIT has been explored in women experiencing:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>Recurrent pregnancy loss</li>
            <li>Repeated implantation failure</li>
            <li>Previous IVF failure</li>
            <li>Suspected immune-related reproductive concerns</li>
          </ul>
          <p className="text-ink-600 mt-2 font-semibold">
            However, reliable evidence of improved live-birth outcomes has not been established. LIT should therefore not be presented as a routine or proven fertility treatment.
          </p>
        </div>

        {/* Does LIT Therapy Treat the Ovary / Uterus */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Does LIT Therapy Treat the Ovary?</h2>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">LIT does not directly improve ovarian reserve, egg quantity or egg quality.</p>
          <p className="text-ink-600 text-sm mt-2">Ovarian health is generally evaluated separately using factors such as:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Female age</li>
            <li>AMH</li>
            <li>Antral follicle count</li>
            <li>Menstrual history</li>
            <li>Ultrasound findings</li>
            <li>Previous ovarian response during IVF</li>
          </ul>
          <p className="text-ink-600 text-sm mt-2">Conditions affecting the ovaries may include PCOS, reduced ovarian reserve, ovarian cysts, endometriomas, and premature ovarian insufficiency. These conditions require diagnosis-specific management rather than LIT.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Does LIT Therapy Treat the Uterus?</h3>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">LIT does not correct structural problems within the uterus.</p>
          <p className="text-ink-600 text-sm mt-2">Conditions that can affect implantation or pregnancy may include:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Fibroids</li>
            <li>Uterine polyps</li>
            <li>Intrauterine adhesions</li>
            <li>Uterine septum</li>
            <li>Adenomyosis</li>
            <li>Endometrial abnormalities</li>
          </ul>
          <p className="text-ink-600 text-sm mt-2 font-semibold">These require appropriate gynaecological investigation and treatment. LIT should not be used as a substitute for proper uterine assessment.</p>
        </div>

        {/* Why Are the Ovary and Uterus Important for Fertility */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Are the Ovary and Uterus Important for Fertility?</h2>
          <p className="text-ink-600 text-sm">Successful conception and pregnancy depend on several reproductive factors working together.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Ovaries</h3>
              <p className="text-ink-600 text-sm">The ovaries are responsible for developing eggs, ovulation, and production of reproductive hormones. Ovarian reserve and egg quality can influence fertility and IVF outcomes.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Uterus</h3>
              <p className="text-ink-600 text-sm">The uterus provides the environment where an embryo implants and pregnancy develops. Structural or endometrial abnormalities may affect implantation, pregnancy maintenance, and menstrual health.</p>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A complete fertility assessment therefore considers both ovarian and uterine factors.</p>
        </div>

        {/* Ovary Evaluation / Uterus Evaluation */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Ovary and Uterus Evaluation in Fertility Treatment</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Ovary Evaluation in Fertility Treatment</h3>
              <p className="text-ink-600 text-sm">Ovarian assessment may include several investigations:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li><strong>AMH Test</strong> — Anti-Müllerian Hormone is commonly used as one marker of ovarian reserve</li>
                <li><strong>Antral Follicle Count</strong> — Antral follicles can be counted during ultrasound</li>
                <li><strong>Pelvic Ultrasound</strong> — Can help identify ovarian cysts, endometriomas, PCOS-related ovarian features, follicle development, and ovarian anatomy</li>
                <li><strong>Hormonal Testing</strong> — May include FSH, LH, Estradiol, thyroid function, and prolactin depending on clinical circumstances</li>
              </ul>
              <p className="text-xs text-ink-500 mt-2">Not every patient requires every hormonal test.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Uterus Evaluation in Fertility Treatment</h3>
              <p className="text-ink-600 text-sm">Several investigations may be used to assess uterine health:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li><strong>Pelvic or Transvaginal Ultrasound</strong> — May help evaluate uterine shape, fibroids, endometrial thickness, adenomyosis, certain polyps, and other abnormalities</li>
                <li><strong>Hysteroscopy</strong> — Allows a doctor to examine the inside of the uterine cavity for polyps, submucosal fibroids, adhesions, uterine septum, and other cavity abnormalities</li>
                <li><strong>Additional Imaging</strong> — Depending on findings, additional investigations may sometimes be recommended</li>
              </ul>
              <p className="text-xs text-ink-500 mt-2">The appropriate test depends on symptoms and reproductive history.</p>
            </div>
          </div>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="LIT Therapy preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Ovary and uterus consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Ovarian and uterine assessment for fertility evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* LIT and Recurrent Pregnancy Loss / Implantation Failure / Failed IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">LIT in Specific Situations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">LIT Therapy and Recurrent Pregnancy Loss</h3>
              <p className="text-ink-600 text-sm">Repeated pregnancy loss can occur for many different reasons. Possible factors include embryo chromosome abnormalities, maternal age, uterine abnormalities, parental chromosome abnormalities, antiphospholipid syndrome, certain endocrine conditions, and other medical factors. In many patients, no single cause is identified.</p>
              <p className="text-ink-600 text-sm mt-2 font-semibold">LIT has historically been proposed for unexplained recurrent miscarriage, but current evidence does not support its routine use.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">LIT and Recurrent Implantation Failure</h3>
              <p className="text-ink-600 text-sm">Repeated embryo-transfer failure can also have several possible causes. These may include embryo quality, embryo chromosomal abnormalities, female age, uterine conditions, endometrial preparation, hydrosalpinx, male fertility factors, embryology factors, and transfer-related factors.</p>
              <p className="text-ink-600 text-sm mt-2 font-semibold">Immune therapy should not replace investigation of these recognised causes.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">LIT After Failed IVF</h3>
              <p className="text-ink-600 text-sm">A failed IVF cycle does not automatically indicate an immune problem.</p>
              <p className="text-ink-600 text-sm mt-2">Before considering immune-related therapies, a fertility specialist may review:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Ovarian stimulation response
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Number of eggs retrieved
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Egg maturity
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
                  Blastocyst formation
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Embryo quality
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Uterine condition
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Endometrial preparation
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Embryo transfer
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Male fertility factors
                </div>
              </div>
              <p className="text-sm text-ink-500 mt-2">This helps identify whether changes to the standard fertility treatment plan may be more appropriate.</p>
            </div>
          </div>
        </div>

        {/* LIT Therapy and Natural Killer Cells */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">LIT Therapy and Natural Killer Cells</h2>
          <p className="text-ink-600 text-sm">Natural Killer, or NK cells, are normal components of the immune system and are also found in the uterus.</p>
          <p className="text-ink-600 text-sm mt-2">Some reproductive immunology theories have linked abnormal NK-cell activity with miscarriage or implantation failure.</p>
          <p className="text-ink-600 text-sm mt-2">However:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Blood NK cells do not necessarily represent uterine NK-cell activity</li>
            <li>Testing methods vary</li>
            <li>Reliable diagnostic thresholds are not established</li>
            <li>An abnormal result does not automatically indicate LIT</li>
          </ul>
          <p className="text-sm text-ink-500 mt-2">Routine immune testing and treatment are not currently recommended for recurrent pregnancy loss.</p>
        </div>

        {/* What Should Be Evaluated Before Considering LIT */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Should Be Evaluated Before Considering LIT?</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">1. Pregnancy History</h3>
              <p className="text-ink-600 text-sm">The doctor reviews number of miscarriages, gestational age at each loss, previous live births, previous IVF pregnancies, and previous genetic testing.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">2. Ovarian Health</h3>
              <p className="text-ink-600 text-sm">Assessment may include AMH, ultrasound, antral follicle count, previous IVF response, and female age.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">3. Uterine Health</h3>
              <p className="text-ink-600 text-sm">Evaluation may consider fibroids, polyps, adhesions, septum, adenomyosis, and uterine cavity abnormalities.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">4. Genetic Factors</h3>
              <p className="text-ink-600 text-sm">Genetic assessment may be considered according to pregnancy history. Testing miscarriage tissue can also provide useful information in selected recurrent pregnancy-loss cases.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">5. Relevant Medical Conditions</h3>
              <p className="text-ink-600 text-sm">Conditions such as thyroid disease, diabetes, antiphospholipid syndrome, and other maternal health conditions may require evaluation and appropriate management.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">6. Male Fertility Factors</h3>
              <p className="text-ink-600 text-sm">Evaluation of the male partner may include semen analysis, relevant medical history, and additional investigations in selected cases. Fertility assessment should consider both partners.</p>
            </div>
          </div>
        </div>

        {/* Ovary Problems / Uterine Problems */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Ovary and Uterine Problems That May Affect Fertility</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Ovary Problems That May Affect Fertility</h3>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li><strong>Reduced Ovarian Reserve</strong> — A reduced number of available eggs may affect response to fertility treatment</li>
                <li><strong>PCOS</strong> — Can interfere with regular ovulation and may affect fertility</li>
                <li><strong>Endometrioma</strong> — Endometriosis-related ovarian cysts may affect pain, ovarian reserve or fertility treatment planning</li>
                <li><strong>Ovarian Cysts</strong> — Not every ovarian cyst affects fertility, but persistent or clinically significant cysts may require assessment</li>
                <li><strong>Premature Ovarian Insufficiency</strong> — Reduced ovarian function at an unexpectedly young age may significantly affect natural conception and fertility-treatment options</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Uterine Problems That May Affect Implantation</h3>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li><strong>Fibroids</strong> — Certain fibroids may interfere with implantation depending on their size and location</li>
                <li><strong>Endometrial Polyps</strong> — Polyps within the uterine cavity may affect implantation in selected cases</li>
                <li><strong>Intrauterine Adhesions</strong> — Scar tissue within the uterine cavity can affect menstruation, implantation and pregnancy</li>
                <li><strong>Uterine Septum</strong> — A congenital uterine septum may be associated with certain pregnancy complications</li>
                <li><strong>Adenomyosis</strong> — May affect menstrual symptoms and fertility in some women</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LIT vs Standard Treatment / LIT vs Intralipid / LIT vs ERA */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">LIT vs Other Treatments</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">LIT vs Standard Ovary and Uterus Treatment</h3>
              <p className="text-ink-600 text-sm">LIT is fundamentally different from treatments targeting ovarian or uterine conditions.</p>
              <p className="text-ink-600 text-sm mt-2"><strong>Ovarian Treatment May Include:</strong> Ovulation management, PCOS management, IVF stimulation protocols, monitoring, and surgical treatment in selected cases.</p>
              <p className="text-ink-600 text-sm mt-2"><strong>Uterine Treatment May Include:</strong> Medical management, hysteroscopy, laparoscopy, fibroid or polyp management, and treatment of adhesions.</p>
              <p className="text-ink-600 text-sm mt-2 font-semibold">LIT is an immune-based experimental treatment and does not correct these structural or ovarian conditions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">LIT vs Intralipid Therapy</h3>
              <p className="text-ink-600 text-sm">Both have been discussed as reproductive immunology treatments, but they are different. LIT involves lymphocyte immunisation. <Link href="/intralipid-therapy-in-noida" className="text-rose-600 font-semibold hover:underline">Intralipid</Link> uses intravenous lipid emulsion. Neither treatment should replace recognised fertility evaluation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">LIT vs ERA Test</h3>
              <p className="text-ink-600 text-sm">LIT is an immune-based treatment. <Link href="/era-test-in-noida" className="text-rose-600 font-semibold hover:underline">ERA</Link> is an endometrial receptivity test intended to assess proposed embryo-transfer timing. These procedures target different theories and neither should automatically be added to IVF treatment.</p>
            </div>
          </div>
        </div>

        {/* Can LIT Improve Egg Quality / Ovarian Reserve / Uterine Lining */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Can LIT Improve Fertility Parameters?</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Can LIT Improve Egg Quality?</h3>
              <p className="text-ink-600 text-sm font-semibold">There is no established evidence that LIT improves egg quality.</p>
              <p className="text-ink-600 text-sm mt-2">Egg quality is strongly influenced by factors such as female age, ovarian biology, and certain medical and genetic factors.</p>
              <p className="text-ink-600 text-sm mt-2 font-semibold">LIT should not be marketed as an egg-quality treatment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can LIT Increase Ovarian Reserve?</h3>
              <p className="text-ink-600 text-sm font-semibold">No established evidence shows that LIT increases AMH, egg number, antral follicle count, or ovarian reserve.</p>
              <p className="text-ink-600 text-sm mt-2">Patients with reduced ovarian reserve require an appropriate fertility assessment and treatment strategy.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can LIT Improve the Uterine Lining?</h3>
              <p className="text-ink-600 text-sm font-semibold">LIT has not been established as a treatment for increasing endometrial thickness or correcting uterine lining problems.</p>
              <p className="text-ink-600 text-sm mt-2">Thin endometrium or other endometrial concerns require separate evaluation.</p>
            </div>
          </div>
        </div>

        {/* Does LIT Improve Implantation / Prevent Miscarriage */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Does LIT Improve Implantation?</h2>
          <p className="text-ink-600 text-sm font-semibold">Reliable clinical evidence has not established LIT as a proven method for improving implantation.</p>
          <p className="text-ink-600 text-sm mt-2">Repeated implantation problems should first undergo a structured evaluation for recognised causes.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Does LIT Prevent Miscarriage?</h3>
          <p className="text-ink-600 text-sm font-semibold">Current major guidelines do not support LIT as a proven miscarriage-prevention treatment.</p>
          <p className="text-ink-600 text-sm mt-2">ESHRE advises against LIT for unexplained recurrent pregnancy loss because significant benefit has not been shown and serious adverse effects may occur.</p>
        </div>

        {/* Risks and Limitations of LIT */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Risks and Limitations of LIT</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Potential Concerns</h3>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Injection-site reactions</li>
                <li>Pain</li>
                <li>Swelling</li>
                <li>Fever</li>
                <li>Allergic or immune reactions</li>
                <li>Infection-transmission concerns</li>
                <li>Immune sensitisation</li>
                <li>Other adverse effects</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Important Limitations</h3>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>No proven benefit for ovarian reserve</li>
                <li>No proven improvement in egg quality</li>
                <li>No structural treatment of the uterus</li>
                <li>No proven routine benefit for recurrent miscarriage</li>
                <li>No guaranteed improvement in implantation or live birth</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LIT Therapy Cost */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            LIT Therapy Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of LIT Therapy in Noida may vary depending on consultations, laboratory processing, proposed number of sessions, immune investigations, and associated fertility testing.</p>
          <p className="text-ink-600 text-sm mt-2 font-semibold">However, before considering cost, patients should establish whether the treatment is clinically justified.</p>
          <p className="text-ink-600 text-sm mt-2">The more important investment may be a proper assessment of:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Ovarian health</li>
            <li>Uterine anatomy</li>
            <li>Embryo factors</li>
            <li>Genetics</li>
            <li>Recurrent miscarriage causes</li>
            <li>Previous IVF treatment</li>
          </ul>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Ovary & Uterus Fertility Evaluation in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Complete Fertility Assessment</strong> — Treatment planning considers the ovaries, uterus, embryos and other reproductive factors.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Ovarian Reserve Evaluation</strong> — AMH, ultrasound and other appropriate investigations can help assess ovarian function.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Uterine Assessment</strong> — Fibroids, cysts, polyps, adenomyosis and other pelvic conditions can be evaluated where clinically indicated.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Recurrent Pregnancy Loss Evaluation</strong> — Repeated miscarriages can be investigated for recognised genetic, uterine and medical causes.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF Failure Review</strong> — Previous IVF and embryo-transfer outcomes can be reviewed before optional treatments are considered.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evidence-Based Fertility Counselling</strong> — Experimental immune therapies are discussed with appropriate information regarding evidence and limitations.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an Ovary & Uterus Fertility Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have experienced recurrent miscarriage, unsuccessful embryo transfers or IVF failure, identifying possible ovarian, uterine, embryo-related or medical factors should come before unproven treatments.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation according to your reproductive history and treatment needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Ovary & Uterus Consultation
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