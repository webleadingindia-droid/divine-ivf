// app/male-infertility/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/male-infertility" },
  title: "Male Infertility Evaluation in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Comprehensive male infertility evaluation in Sector 76, Noida — semen analysis, hormonal assessment, and treatment planning with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "male infertility treatment in Noida, male fertility evaluation, semen analysis, male infertility treatment, male fertility specialist Noida, Dr. Mandavi Rai, Divine IVF, low sperm count treatment, male infertility causes, fertility clinic Noida, IVF specialist Noida, male infertility diagnosis",
  openGraph: {
    title: "Male Infertility Evaluation in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Expert male fertility assessment and treatment with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — semen analysis, hormonal evaluation, and personalised treatment planning.",
    url: "https://www.divineivf.com/male-infertility",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Male fertility consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function MaleInfertilityPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "Male Infertility" },
      ]}
      eyebrow="Fertility Care · Noida"
      titlePlain="Male Infertility:"
      titleAccent="evaluated properly"
      intro="Male factors contribute to roughly half of all fertility difficulties, yet are often the last thing investigated. A clear, early evaluation for both partners helps avoid unnecessary delay."
      heroImage="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Doctor discussing male fertility evaluation results with a couple at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Semen analysis sample preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "Male infertility evaluation is the process of identifying factors that may be contributing to difficulty conceiving from the male partner's side. This includes a comprehensive semen analysis, hormonal assessment, physical examination, and where indicated, genetic testing or advanced diagnostic procedures.",
        "A proper male fertility evaluation is essential because male factors are present in nearly half of all couples experiencing infertility. Yet surprisingly, male evaluation is often delayed or skipped entirely — which can lead to unnecessary treatments and wasted time.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai ensures that male fertility assessment is an integral part of every couple's fertility investigation, performed alongside the female partner's evaluation from the very beginning."
      ]}
      whoNeedsIt={[
        "Couples who have been trying to conceive for a year (or six months if the female partner is over 35) — male evaluation should be part of the initial fertility investigation",
        "Men with a history of testicular injury, surgery, or infection that may affect fertility",
        "Men with known conditions such as varicocele, hormonal imbalances, or genetic disorders",
        "Men who have undergone chemotherapy or radiation therapy",
        "Men with lifestyle factors — smoking, alcohol use, or occupational exposures — that may affect sperm health",
        "Any couple where the female partner's evaluation is normal and pregnancy hasn't occurred",
      ]}
      preparation={[
        "For a semen analysis, a short period of abstinence is typically required — usually 2-5 days before providing a sample. The clinic will confirm the exact timing when your appointment is booked.",
        "It's helpful to bring any previous fertility reports, test results, or medical records you may have. This gives Dr. Rai a complete picture from the outset.",
        "If you're taking any medications or supplements, bring a list or the actual bottles to your consultation. Some medications can affect sperm production, and Dr. Rai can advise you on what to continue or adjust.",
      ]}
      howItWorks={[
        { title: "Medical History & Physical Examination", description: "A detailed review of your medical history, lifestyle factors, medications, and a clinical physical examination." },
        { title: "Semen Analysis", description: "The cornerstone of male fertility evaluation — assessing sperm count, motility, morphology, and other key parameters." },
        { title: "Hormonal Assessment", description: "Blood tests to evaluate hormone levels that regulate sperm production, including testosterone, FSH, and LH." },
        { title: "Advanced Testing", description: "Genetic testing, DNA fragmentation analysis, or testicular ultrasound where indicated by initial findings." },
        { title: "Treatment Planning", description: "A personalised treatment plan built around what the evaluation actually shows — from lifestyle changes to IUI, IVF, or ICSI." },
      ]}
      whatToExpect="The initial male fertility evaluation is straightforward and non-invasive. A semen analysis is the primary test — it's simple, quick, and provides a wealth of information about sperm health. Hormonal blood tests are also routine. If further investigation is needed, Dr. Rai will explain each step clearly and ensure you understand what's being tested and why."
      benefits={[
        "A semen analysis is quick, non-invasive, and provides immediate clarity about male factors",
        "Early male evaluation prevents unnecessary rounds of female-only investigation and treatment",
        "Clarifies the right treatment path from the outset — whether IUI, IVF, or ICSI is most appropriate",
        "Supports shared decision-making as a couple, with both partners fully informed",
        "Identifies treatable conditions that may respond to simple interventions",
      ]}
      considerations={[
        "Results can vary between semen samples — repeat testing is sometimes advised for confirmation",
        "A single abnormal result doesn't necessarily mean infertility — context and repeat testing matter",
        "Findings are best interpreted alongside your overall medical history and lifestyle factors",
        "Some male fertility causes may require advanced treatment like IVF with ICSI",
        "In some cases, surgical sperm retrieval may be needed if sperm isn't present in the ejaculate",
      ]}
      related={[
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive fertility evaluation that includes male assessment alongside female testing." },
        { name: "IUI Treatment", href: "/iui", blurb: "A less invasive option for milder male-factor infertility cases." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Considered when male factors are more significant, often with ICSI for sperm injection." },
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
          question: "What does a male fertility evaluation include?",
          answer:
            "A comprehensive male fertility evaluation includes a semen analysis (assessing sperm count, motility, and morphology), hormonal blood tests (including testosterone, FSH, and LH), a physical examination, and a review of your medical and lifestyle history. Additional testing like genetic screening or ultrasound may be recommended based on initial findings.",
        },
        {
          question: "Is a semen analysis painful or invasive?",
          answer:
            "No, a semen analysis is completely non-invasive and painless. It involves providing a sample through masturbation in a private room at the clinic. The sample is then analysed in the lab to assess sperm health.",
        },
        {
          question: "How long does it take to get semen analysis results?",
          answer:
            "Results from a semen analysis are typically available within a few hours to a day. Dr. Rai will review the results with you in a follow-up consultation, explaining what they mean for your fertility journey.",
        },
        {
          question: "Can male infertility be treated without IVF?",
          answer:
            "Yes, it depends on the underlying cause. Some male fertility issues respond to lifestyle changes, medication, or surgical treatment of conditions like varicocele. For milder male factors, IUI may be sufficient. IVF with ICSI is generally recommended for more significant male-factor infertility.",
        },
        {
          question: "What causes low sperm count?",
          answer:
            "Low sperm count can result from various factors including hormonal imbalances, varicocele, genetic conditions, infections, lifestyle factors (smoking, alcohol, obesity), certain medications, and environmental exposures. Dr. Rai will investigate to identify the specific cause in your case.",
        },
        {
          question: "Should I see a fertility specialist even if my partner is being investigated?",
          answer:
            "Yes, absolutely. Male factors contribute to about half of all fertility difficulties. Both partners should be evaluated simultaneously to avoid unnecessary delays and ensure the treatment plan addresses the complete picture.",
        },
        {
          question: "What is ICSI and when is it needed?",
          answer:
            "ICSI (Intracytoplasmic Sperm Injection) is a specialised IVF procedure where a single sperm is injected directly into an egg. It's typically recommended for significant male-factor infertility — including very low sperm count, poor motility, or abnormal morphology — or when sperm retrieval techniques are required.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal blood test for male fertility evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1582719471384-1d8df1b6cf4d?q=80&w=1200&auto=format&fit=crop"
              alt="Testicular ultrasound during male fertility assessment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>Male infertility</strong> is often misunderstood as a less significant factor in 
          <strong>fertility</strong> challenges — yet the reality is that male factors contribute to 
          approximately half of all infertility cases. Despite this, many couples undergo months or 
          even years of <strong>fertility treatment</strong> before a <strong>semen analysis</strong> 
          is performed on the male partner.
        </p>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> follows a different approach — one that treats both partners as equals 
          from the very beginning of the <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link>. This means a <strong>male fertility evaluation</strong> is 
          performed alongside the female partner's assessment, providing a complete picture of what's 
          happening and what <strong>fertility treatment</strong> — if any — makes sense next.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Semen analysis sample preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Male fertility consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal assessment for male infertility treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The cornerstone of <strong>male infertility evaluation</strong> is the <strong>semen analysis</strong> 
          — a simple, non-invasive test that assesses sperm count, motility (movement), and morphology (shape). 
          These three parameters provide a wealth of information about male <strong>fertility</strong> and help 
          determine whether <strong>IUI treatment</strong>, <strong>IVF treatment</strong>, or <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">
          IVF with ICSI</Link> is the most appropriate path forward.
        </p>

        <p>
          Beyond semen analysis, a complete <strong>male fertility assessment</strong> includes <strong>hormonal 
          evaluation</strong> through blood tests — measuring testosterone, FSH, and LH levels that regulate 
          sperm production. Where indicated, <strong>genetic testing</strong>, <strong>DNA fragmentation analysis</strong>, 
          or testicular <strong>ultrasound</strong> may be recommended to identify underlying causes.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Why Early Male Evaluation Matters
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Semen analysis is quick, non-invasive, and provides immediate clarity
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Identifies treatable conditions early — avoiding unnecessary treatment delays
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Clarifies the right treatment path — IUI, IVF, or ICSI — from the outset
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Involves both partners equally, supporting shared decision-making as a couple
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Prevents unnecessary rounds of female-only investigation and treatment
            </li>
          </ul>
        </div>

        <p>
          The approach to <strong>male infertility treatment</strong> at Divine IVF follows evidence-based 
          guidelines from leading organisations including the{" "}
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
          . This ensures your <strong>fertility treatment</strong> is informed by the latest clinical 
          evidence and best practices.
        </p>

        <p>
          Depending on what the <strong>male infertility evaluation</strong> reveals, treatment may range 
          from lifestyle modifications and medication to <Link href="/iui" className="text-rose-600 font-semibold hover:underline">
          IUI</Link> for mild male factors, or <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">
          IVF with ICSI</Link> for more significant findings. Where sperm isn't present in the ejaculate, 
          surgical sperm retrieval techniques can allow sperm to be collected directly for use in ICSI — 
          offering hope even in cases of non-obstructive azoospermia.
        </p>
      </div>
    </TreatmentTemplate>
  );
}