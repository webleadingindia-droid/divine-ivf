// app/male-infertility-treatment-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/male-infertility-treatment-in-noida" },
  title: "Male Infertility Treatment in Noida | Male Fertility Care | Divine IVF",
  description:
    "Get male infertility treatment in Noida at Divine IVF. Evaluation for low sperm count, motility issues, semen analysis, IUI, IVF and ICSI with personalised fertility care.",
  robots: { index: true, follow: true },
  keywords:
    "Male Infertility Treatment in Noida, Male Infertility Specialist in Noida, Male Fertility Specialist in Noida, Male Infertility Test in Noida, Male Fertility Test in Noida, Low Sperm Count Treatment in Noida, Semen Analysis in Noida, Male Infertility Doctor in Noida, Male Fertility Clinic in Noida, Male Infertility Clinic in Noida, Male Infertility Treatment Cost in Noida, Azoospermia Treatment in Noida, Poor Sperm Motility Treatment in Noida, ICSI Treatment for Male Infertility, Male Infertility Treatment Near Me, Fertility Clinic in Noida, Infertility Treatment in Noida",
  openGraph: {
    title: "Male Infertility Treatment in Noida | Male Fertility Care | Divine IVF",
    description:
      "Get male infertility treatment in Noida at Divine IVF. Evaluation for low sperm count, motility issues, semen analysis, IUI, IVF and ICSI with personalised fertility care.",
    url: "http://divine-ivf.vercel.app/male-infertility-treatment-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/9HLD3cY1wNPeXbow3PfW/image.png",
        width: 1200,
        height: 630,
        alt: "Male fertility consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function MaleInfertilityTreatmentPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "Male Infertility Treatment in Noida" },
      ]}
      eyebrow="Fertility Care · Noida"
      // ========== H1 ==========
      titlePlain="Male Infertility Treatment in Noida"
      titleAccent="Evaluation and personalised treatment planning for male fertility problems"
      // =========================
      intro="Male fertility factors can contribute to difficulty conceiving in many couples. Problems may be related to sperm count, sperm movement, sperm shape, hormonal health, ejaculation, reproductive tract conditions, lifestyle factors, or other medical causes."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/9HLD3cY1wNPeXbow3PfW/image.png"
      heroAlt="Male infertility consultation with Dr. Mandavi Rai at Divine IVF, Noida"
      secondaryImage="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
      secondaryImageAlt="Semen analysis sample preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "Male infertility refers to fertility-related problems in the male partner that may reduce the chance of achieving pregnancy. It may involve problems with sperm production, sperm concentration, sperm motility, sperm morphology, sperm delivery, hormonal function, ejaculation, reproductive tract obstruction, or certain genetic and medical conditions.",
        "A detailed male fertility evaluation in Noida can help identify whether male-related factors may be contributing to difficulty conceiving. Male factors are present in nearly half of all couples experiencing infertility, yet male evaluation is often delayed or skipped entirely.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides fertility evaluation for couples, including assessment of possible male-factor infertility. Based on semen analysis, medical history, fertility reports, and other investigations when required, an appropriate treatment plan can be discussed.",
      ]}
      whoNeedsIt={[
        "Couples trying to conceive without success — male evaluation should be part of the initial fertility investigation",
        "Men with a history of testicular injury, surgery, or infection that may affect fertility",
        "Men with known conditions such as varicocele, hormonal imbalances, or genetic disorders",
        "Men who have undergone chemotherapy or radiation therapy",
        "Men with lifestyle factors — smoking, alcohol use, or occupational exposures — that may affect sperm health",
        "Any couple where the female partner's evaluation is normal and pregnancy hasn't occurred",
        "Men with erectile or ejaculation difficulties",
        "Men with a history of undescended testicles",
      ]}
      preparation={[
        "For a semen analysis, a short period of abstinence is typically required — usually 2-5 days before providing a sample. The clinic will confirm the exact timing when your appointment is booked.",
        "It's helpful to bring any previous fertility reports, test results, or medical records you may have. This gives Dr. Rai a complete picture from the outset.",
        "If you're taking any medications or supplements, bring a list or the actual bottles to your consultation. Some medications can affect sperm production, and Dr. Rai can advise you on what to continue or adjust.",
      ]}
      howItWorks={[
        { title: "Step 1 – Couple Fertility Consultation", description: "Fertility evaluation begins by reviewing the reproductive history of both partners. Previous fertility reports and treatment records can also be reviewed." },
        { title: "Step 2 – Semen Analysis", description: "The male partner may undergo semen analysis to evaluate sperm concentration, motility, morphology and other parameters." },
        { title: "Step 3 – Further Investigation if Required", description: "If semen analysis shows significant abnormalities, additional testing or specialist evaluation may be recommended including hormonal tests, ultrasound, or genetic testing." },
        { title: "Step 4 – Review of Female Fertility Factors", description: "Male fertility results should not usually be interpreted in isolation. Female fertility factors such as age, ovarian reserve, ovulation and fallopian tube health also influence the treatment plan." },
        { title: "Step 5 – Personalised Treatment Plan", description: "Treatment is selected according to the underlying cause and the couple's complete fertility profile — from lifestyle guidance to IUI, IVF, or ICSI." },
      ]}
      whatToExpect="The initial male fertility evaluation is straightforward and non-invasive. A semen analysis is the primary test — it's simple, quick, and provides a wealth of information about sperm health. Hormonal blood tests are also routine. If further investigation is needed, Dr. Rai will explain each step clearly and ensure you understand what's being tested and why. A single abnormal semen analysis does not always establish a final diagnosis — repeat testing may be recommended depending on the findings."
      benefits={[
        "Identifies possible male factors contributing to infertility through systematic evaluation",
        "Prevents one-sided fertility evaluation — infertility should not be considered only a female problem",
        "Helps select the right treatment — natural attempts, IUI, IVF, or ICSI based on actual findings",
        "Can avoid delays — early identification of significant male-factor infertility helps couples avoid unnecessary delays",
        "Supports shared decision-making as a couple, with both partners fully informed",
      ]}
      considerations={[
        "Results can vary between semen samples — repeat testing is sometimes advised for confirmation",
        "A single abnormal result doesn't necessarily mean infertility — context and repeat testing matter",
        "Findings are best interpreted alongside your overall medical history and lifestyle factors",
        "Some male fertility causes may require advanced treatment like IVF with ICSI",
        "In some cases, surgical sperm retrieval may be needed if sperm isn't present in the ejaculate",
        "Male infertility often has no obvious symptoms — testing is important even without symptoms",
      ]}
      related={[
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive fertility evaluation that includes male assessment alongside female testing." },
        { name: "Semen Analysis / Male Fertility Evaluation", href: "/male-fertility-test", blurb: "Detailed evaluation of sperm health and male fertility factors." },
        { name: "IUI Treatment", href: "/iui-treatment-in-noida", blurb: "A less invasive option for milder male-factor infertility cases." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "Considered when male factors are more significant." },
        { name: "ICSI Treatment", href: "/icsi-treatment", blurb: "Specialised IVF procedure for severe male-factor infertility." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval", blurb: "Surgical sperm retrieval techniques for azoospermia." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Male Infertility – Evaluation and Treatment",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/male-infertility/",
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
          question: "What is the main test for male infertility?",
          answer:
            "Semen analysis is usually one of the first tests used to evaluate male fertility. It assesses sperm concentration, motility, morphology and other semen parameters.",
        },
        {
          question: "What causes male infertility?",
          answer:
            "Possible causes include low sperm count, poor motility, abnormal sperm morphology, varicocele, hormonal problems, reproductive tract blockage, infections, genetic factors and certain medical or lifestyle conditions.",
        },
        {
          question: "Can low sperm count be treated?",
          answer:
            "Treatment depends on the underlying cause. Some cases may respond to lifestyle or medical management, while others may require IUI, IVF or ICSI.",
        },
        {
          question: "Can a man with low sperm count have a baby?",
          answer:
            "Yes, pregnancy may still be possible depending on the severity of the sperm abnormality and the fertility profile of both partners.",
        },
        {
          question: "What is azoospermia?",
          answer:
            "Azoospermia is a condition in which no sperm are detected in the semen. Further evaluation is required to determine whether it is caused by sperm production problems or a blockage.",
        },
        {
          question: "Is male infertility permanent?",
          answer:
            "Not always. Some causes are treatable, while other conditions may require assisted reproductive techniques.",
        },
        {
          question: "Does smoking affect male fertility?",
          answer:
            "Smoking may negatively affect sperm health and is one of several lifestyle factors that can influence fertility.",
        },
        {
          question: "Does age affect male fertility?",
          answer:
            "Male fertility may also change with age, although the effect is generally different from age-related changes in female fertility.",
        },
        {
          question: "Is IUI suitable for male infertility?",
          answer:
            "IUI may be appropriate in selected cases of mild male-factor infertility when adequate motile sperm are available after preparation.",
        },
        {
          question: "When is ICSI used for male infertility?",
          answer:
            "ICSI may be considered for severe sperm abnormalities, previous fertilisation problems, very low sperm count, or when surgically retrieved sperm are used.",
        },
        {
          question: "What is the cost of male infertility treatment  ",
          answer:
            "The cost depends on the investigations and treatment required. Simple evaluation and medical management will differ in cost from IUI, IVF, ICSI or sperm retrieval procedures.",
        },
        {
          question: "Where can I get male infertility treatment  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised treatment planning for male-factor infertility.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Male Infertility Treatment in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Evaluation and personalised treatment planning for male fertility problems at Divine IVF, Noida.
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
              Book Male Fertility Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/3v4CVOwbziz21dZwZbEp/image.webp"
              alt="Hormonal blood test for male infertility evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/JDFEd5QBrUHFsEFYXoHO/image.jpg"
              alt="Ultrasound scan for male fertility assessment at Divine IVF Clinic Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Male Infertility Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Male Infertility?</h2>
          <p className="text-ink-600">
            <strong>Male infertility</strong> refers to fertility-related problems in the male partner that may reduce the chance of achieving pregnancy.
          </p>
          <p className="text-ink-600 mt-2">
            It may involve problems with:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 list-disc list-inside text-ink-600">
            <li>Sperm production</li>
            <li>Sperm concentration</li>
            <li>Sperm motility</li>
            <li>Sperm morphology</li>
            <li>Sperm delivery</li>
            <li>Hormonal function</li>
            <li>Ejaculation</li>
            <li>Reproductive tract obstruction</li>
            <li>Certain genetic or medical conditions</li>
          </ul>
          <p className="text-ink-600 mt-3">
            A detailed <strong>male fertility evaluation in Noida</strong> can help identify whether male-related factors may be contributing to difficulty conceiving.
          </p>
        </div>

        {/* Common Causes */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Common Causes of Male Infertility</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Low Sperm Count</h3>
              <p className="text-ink-600 text-sm mt-1">Low sperm count means that the number of sperm present in the semen is below the expected range. A reduced sperm concentration may decrease the chance of natural fertilisation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Poor Sperm Motility</h3>
              <p className="text-ink-600 text-sm mt-1">Sperm motility refers to the ability of sperm to move effectively. If a large proportion of sperm have reduced movement, reaching and fertilising the egg may become more difficult.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Abnormal Sperm Morphology</h3>
              <p className="text-ink-600 text-sm mt-1">Sperm morphology refers to sperm shape and structure. A high proportion of abnormally shaped sperm may affect fertilisation potential in some cases.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Azoospermia</h3>
              <p className="text-ink-600 text-sm mt-1">Azoospermia means that no sperm are detected in the ejaculate. It may be related to sperm production problems, blockage in the reproductive tract, hormonal conditions, or genetic factors. Further evaluation is usually required to determine the cause.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Varicocele</h3>
              <p className="text-ink-600 text-sm mt-1">A varicocele is an enlargement of veins around the testicle. In some men, it may affect sperm production, sperm quality, or testicular function. Not every varicocele causes infertility, so clinical evaluation is important.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hormonal Problems</h3>
              <p className="text-ink-600 text-sm mt-1">Hormones play an important role in sperm production. Abnormalities involving testosterone or hormones produced by the pituitary gland may affect male fertility.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Infections</h3>
              <p className="text-ink-600 text-sm mt-1">Certain infections may interfere with sperm production or reproductive tract function. Past infections may also sometimes result in scarring or blockage.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Ejaculation Problems</h3>
              <p className="text-ink-600 text-sm mt-1">Conditions such as retrograde ejaculation or other ejaculation disorders may affect sperm delivery.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Reproductive Tract Blockage</h3>
              <p className="text-ink-600 text-sm mt-1">Blockages in the reproductive tract can prevent sperm from entering the semen. These may be congenital or related to previous infection, surgery, trauma, or other medical conditions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Genetic Causes</h3>
              <p className="text-ink-600 text-sm mt-1">Certain genetic conditions may affect sperm production or reproductive development. Genetic evaluation may be advised in selected cases, especially with severe sperm abnormalities or azoospermia.</p>
            </div>
          </div>
        </div>

        {/* Lifestyle Factors */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Lifestyle Factors That May Affect Male Fertility
          </h3>
          <p className="text-ink-600 text-sm">Lifestyle does not explain every fertility problem, but certain factors may influence sperm health. These may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Smoking
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Excessive alcohol consumption
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Obesity
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Poor diet
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Lack of exercise
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Chronic stress
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Inadequate sleep
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Exposure to excessive heat
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Certain medications
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Occupational exposure to chemicals or toxins
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Your fertility specialist may discuss lifestyle modification as part of your overall fertility plan where relevant.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/jJ6dL6yUYlngz4Jlxkbs/image.webp"
              alt="Semen analysis for male infertility treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Male infertility consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/FTqU6H2mM9SLtMrh1YLH/image.jpg"
              alt="Hormonal assessment for male infertility treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Signs and Symptoms */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Signs and Symptoms of Male Infertility</h2>
          <p className="text-ink-600 text-sm">Male infertility often has no obvious symptoms. Some men only discover a fertility problem after undergoing testing because pregnancy has not occurred.</p>
          <p className="text-ink-600 text-sm mt-2">Possible signs that may require evaluation include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Difficulty achieving pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Reduced sexual desire
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Erectile difficulties
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ejaculation problems
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pain or swelling in the testicular area
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Small or abnormal testicular size
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              History of testicular surgery or trauma
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous reproductive tract infection
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Known hormonal disorders
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">However, absence of symptoms does not rule out a male fertility issue.</p>
        </div>

        {/* When to Consider Testing */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">When Should You Consider Male Fertility Testing?</h2>
          <p className="text-ink-600 text-sm mb-3">You may consider male fertility evaluation if:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You and your partner have been trying to conceive without success
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Your partner`s fertility tests are normal but pregnancy has not occurred
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have a history of testicular injury
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You previously had genital or reproductive tract surgery
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have erectile or ejaculation difficulties
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have had chemotherapy or radiation therapy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have known hormonal conditions
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have a history of undescended testicles
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have experienced repeated unsuccessful IUI or IVF cycles
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous semen analysis showed abnormalities
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Male fertility testing should generally be considered as part of the couple`s overall <Link href="/fertility-investigation-in-noida" className="text-rose-600 font-semibold hover:underline">fertility evaluation</Link>.</p>
        </div>

        {/* Male Fertility Tests */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Male Fertility Tests in Noida</h2>
          <p className="text-ink-600 text-sm mb-4">Male fertility evaluation may involve different investigations depending on the situation.</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">1. Medical and Fertility History</h3>
              <p className="text-ink-600 text-sm mt-1">The doctor may discuss how long you have been trying to conceive, previous pregnancies, past infections, surgeries, current medications, sexual health, lifestyle factors, family history, and previous fertility treatment. This helps determine which tests may be necessary.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">2. Semen Analysis</h3>
              <p className="text-ink-600 text-sm mt-1">Semen analysis is usually one of the first and most important tests for male fertility. The test evaluates several semen parameters, including semen volume, sperm concentration, total sperm count, sperm motility, and sperm morphology. A single abnormal semen analysis does not always establish a final diagnosis. Depending on the findings, repeat testing may be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">3. Hormonal Tests</h3>
              <p className="text-ink-600 text-sm mt-1">Hormonal blood tests may be advised if sperm production appears significantly reduced or there are other clinical concerns. Tests may include Testosterone, FSH, LH, Prolactin, and other hormone tests when appropriate. These results can help assess whether hormonal factors may be contributing to infertility.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">4. Physical Examination</h3>
              <p className="text-ink-600 text-sm mt-1">A clinical examination may be recommended to assess testicular size, varicocele, reproductive tract abnormalities, and other signs that may suggest an underlying condition.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">5. Ultrasound</h3>
              <p className="text-ink-600 text-sm mt-1">Scrotal or other ultrasound assessment may be advised when clinically indicated. It may help evaluate conditions such as varicocele, testicular abnormalities, or reproductive tract obstruction.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">6. Genetic Testing</h3>
              <p className="text-ink-600 text-sm mt-1">Genetic testing is not required for every male fertility patient. It may be recommended in selected situations such as azoospermia, very low sperm count, or suspected genetic conditions. The exact investigations depend on the clinical findings.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">7. Additional Sperm Testing</h3>
              <p className="text-ink-600 text-sm mt-1">In selected fertility cases, additional specialised sperm tests may be considered. These are not routinely required for every patient and should only be recommended when clinically appropriate.</p>
            </div>
          </div>
        </div>

        {/* Treatment Options */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Male Infertility Treatment Options</h2>
          <p className="text-ink-600 text-sm">Treatment depends on the cause of infertility and semen analysis findings.</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Lifestyle and Fertility Guidance</h3>
              <p className="text-ink-600 text-sm">When appropriate, your doctor may suggest changes related to smoking, alcohol, weight, nutrition, exercise, sleep, heat exposure, and other modifiable lifestyle factors.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Medical Treatment</h3>
              <p className="text-ink-600 text-sm">Some hormonal or medical conditions may require treatment depending on the diagnosis. Medicines should only be taken under professional medical guidance.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Treatment of Underlying Conditions</h3>
              <p className="text-ink-600 text-sm">If an underlying condition such as infection or another reproductive health problem is identified, appropriate treatment may be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">IUI</h3>
              <p className="text-ink-600 text-sm"><Link href="/iui-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IUI</Link> – Intrauterine Insemination may be considered in selected cases of mild male-factor infertility when sufficient motile sperm are available after semen preparation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">IVF</h3>
              <p className="text-ink-600 text-sm"><Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link> may be considered when other treatments are unlikely to be suitable, female fertility factors are also present, infertility has been present for a longer duration, or previous treatment has been unsuccessful.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">ICSI for Male Infertility</h3>
              <p className="text-ink-600 text-sm"><strong>ICSI</strong> – Intracytoplasmic Sperm Injection is an assisted fertilisation technique commonly used in male-factor infertility. During ICSI, an embryologist injects a single selected sperm directly into an egg. It may be considered in cases involving very low sperm count, poor sperm motility, significant sperm morphology abnormalities, previous fertilisation problems, surgically retrieved sperm, or certain severe male fertility conditions. The decision to use ICSI depends on the individual fertility situation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Sperm Retrieval Procedures</h3>
              <p className="text-ink-600 text-sm">In selected cases where sperm are not present in the ejaculate, surgical sperm retrieval may be considered. Techniques can vary depending on the cause and may include procedures used to retrieve sperm directly from the reproductive tract or testicular tissue. Retrieved sperm may then be used with IVF and ICSI when suitable.</p>
            </div>
          </div>
        </div>

        {/* Can Male Infertility Be Treated */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Can Male Infertility Be Treated?</h2>
          <p className="text-ink-600 text-sm">In many cases, treatment options are available. However, the appropriate treatment depends on the underlying cause.</p>
          <p className="text-ink-600 text-sm mt-2">Some conditions may improve with medical or lifestyle management, while others may require assisted reproductive techniques such as:</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <span className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium border border-rose-100">IUI</span>
            <span className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium border border-rose-100">IVF</span>
            <span className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium border border-rose-100">ICSI</span>
            <span className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium border border-rose-100">Sperm Retrieval</span>
          </div>
          <p className="text-sm text-ink-500 mt-3">A detailed evaluation is needed before choosing treatment.</p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Benefits of Proper Male Fertility Evaluation
          </h3>

          <ul className="space-y-2">
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Identifies Possible Male Factors
              </strong>
              Testing helps determine whether sperm-related or other male fertility factors may be contributing to infertility.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Prevents One-Sided Fertility Evaluation
              </strong>
              Infertility should not automatically be considered only a female problem. Evaluation of both partners is important.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Helps Select the Right Treatment
              </strong>
              The results may help determine whether natural attempts, IUI, IVF, ICSI or another treatment is appropriate.
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Can Avoid Delays
              </strong>
              Early identification of significant male-factor infertility can help couples avoid unnecessary treatment delays.
            </li>
          </ul>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Male Infertility Treatment  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Couple-Based Fertility Evaluation</strong> — Divine IVF evaluates fertility factors involving both partners rather than focusing only on the female partner.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Treatment Planning</strong> — Treatment is selected according to fertility test results and the couple`s reproductive history.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Semen Analysis-Based Assessment</strong> — Male fertility treatment planning starts with appropriate diagnostic evaluation rather than assumptions.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IUI, IVF and ICSI Options</strong> — Depending on the diagnosis, assisted fertility treatments including <Link href="/iui-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IUI</Link>, <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link> and ICSI may be discussed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Doctor-Led Fertility Care</strong> — Fertility treatment is planned under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Noida Location</strong> — Divine IVF is located in Sector 76, Noida, making fertility consultation accessible for patients from Noida and nearby areas.</div>
            </li>
          </ul>
        </div>

        {/* Male Infertility Treatment Cost */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Male Infertility Treatment Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of male infertility treatment in Noida depends on the underlying condition and the treatment required. Costs may vary according to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Semen analysis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hormonal tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Specialised fertility tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IUI
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Sperm retrieval procedures
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Additional investigations
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Because treatment can vary significantly from patient to patient, an accurate estimate is usually provided after evaluation.</p>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Male Fertility Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you and your partner are having difficulty conceiving, evaluation of both partners can help provide a clearer understanding of the possible causes.
            At Divine IVF, Sector 76, Noida, male fertility evaluation can include semen analysis and additional investigations when clinically required, followed by personalised fertility treatment planning.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Male Fertility Consultation
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