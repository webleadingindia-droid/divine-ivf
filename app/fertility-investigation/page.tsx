// app/fertility-investigation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/fertility-investigation" },
  title: "Fertility Investigation in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Structured fertility investigation for both partners in Sector 76, Noida — hormonal, structural and semen analysis with Dr. Mandavi Rai, reviewed together before any treatment is recommended.",
  robots: { index: true, follow: true },
  keywords:
    "fertility investigation in Noida, fertility evaluation, fertility testing, infertility diagnosis, fertility clinic Noida, IVF specialist Noida, Dr. Mandavi Rai, fertility workup, couple infertility testing, Noida fertility center, fertility assessment, reproductive health evaluation",
  openGraph: {
    title: "Fertility Investigation in Noida | Divine IVF",
    description:
      "A structured evaluation for both partners, before treatment — with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida.",
    url: "https://www.divineivf.com/fertility-investigation",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Fertility investigation consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function FertilityInvestigationPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "Fertility Investigation" },
      ]}
      eyebrow="Fertility Care · Noida"
      titlePlain="Fertility Investigation:"
      titleAccent="clarity before treatment"
      intro="A structured evaluation for both partners builds an accurate picture of what's happening — and what treatment, if any, makes sense next."
      heroImage="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Doctor discussing fertility investigation results with a couple at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Hormonal blood test during fertility investigation at Divine IVF, Noida"
      whatItIs={[
        "Fertility investigation in Noida is the process of identifying what may be contributing to difficulty conceiving, through a combination of history-taking, examination and targeted tests for both partners. This fertility evaluation is the foundation of all fertility treatment.",
        "Rather than jumping straight to treatment, fertility investigation aims to understand the specific factors at play — timing, hormonal, structural, or male-factor — so the recommended path forward actually fits your situation, instead of a one-size-fits-all protocol.",
      ]}
      whoNeedsIt={[
        "Trying to conceive for a year without success (six months if over 35) — the most common reason for fertility testing",
        "Irregular or absent periods, which may indicate hormonal issues requiring fertility evaluation",
        "A known condition such as PCOS, endometriosis or fibroids that affects fertility",
        "Previous pregnancy loss, often requiring fertility investigation to identify underlying causes",
        "A partner with a known or suspected male infertility concern",
      ]}
      preparation={[
        "Some tests are timed to particular days of your cycle, so it helps to know your typical cycle length before your first visit. Bringing any previous reports, scans or blood tests — even from elsewhere — gives Dr. Rai a fuller picture from the outset, and can save you repeating tests unnecessarily.",
        "For the male partner, a semen analysis usually requires a short period of abstinence beforehand; the clinic will confirm exact timing when the test is booked.",
      ]}
      howItWorks={[
        { title: "History & discussion", description: "A detailed conversation about your cycle, history and any previous treatment." },
        { title: "Hormonal assessment", description: "Blood tests to evaluate ovarian reserve and hormonal balance." },
        { title: "Structural assessment", description: "Ultrasound, and hysteroscopy or laparoscopy where indicated." },
        { title: "Partner evaluation", description: "Semen analysis and further male fertility assessment where relevant." },
        { title: "Review & plan", description: "Results are reviewed together to agree on next steps." },
      ]}
      whatToExpect="Most investigations can be completed over a small number of visits, though timing may depend on your cycle for certain tests. Dr. Rai reviews results with you directly, in plain language, rather than leaving you to interpret reports alone."
      benefits={[
        "Builds a clear, individual picture before recommending fertility treatment",
        "Avoids unnecessary or mismatched treatment, saving time and emotional stress",
        "Involves both partners from the outset for complete fertility evaluation",
      ]}
      considerations={[
        "Some tests are timed to specific points in your cycle",
        "Results sometimes point toward further, more specific investigation",
        "Not every case results in a definitive single cause — a plan can still be made regardless",
      ]}
      related={[
        { name: "IUI Treatment", href: "/iui", blurb: "Often the next step for suitable fertility investigation findings." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Considered for more significant findings from your fertility evaluation." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Dedicated evaluation for male-factor fertility issues." },
      ]}
      externalResources={[
        {
          label: "Diagnostic Testing for Infertility",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/diagnostic-testing-for-infertility/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
      ]}
      faqs={[
        {
          question: "How long does the full fertility investigation take?",
          answer:
            "It varies, but many patients complete the core fertility evaluation within one to two cycles, depending on which tests are needed.",
        },
        {
          question: "Will I definitely need IVF after fertility investigation?",
          answer:
            "Not necessarily — fertility investigation exists specifically to determine whether simpler treatment, IVF, or another path is most appropriate.",
        },
        {
          question: "Do both partners need to be tested for infertility?",
          answer:
            "In most cases, yes. Male-factor issues contribute to roughly half of all fertility difficulties, so a semen analysis is usually part of the initial fertility evaluation alongside the female partner's assessment.",
        },
        {
          question: "Is fertility investigation painful?",
          answer:
            "Most of the process involves blood tests and an ultrasound, both routine and low-discomfort. If a hysteroscopy or laparoscopy is indicated, Dr. Rai will explain exactly what it involves and what to expect beforehand.",
        },
        {
          question: "What does a fertility investigation include?",
          answer:
            "A comprehensive fertility investigation in Noida includes hormonal assessment, ovarian reserve testing (AMH, AFC), ultrasound scans, and semen analysis. Additional tests like hysteroscopy may be recommended based on initial findings.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/OHxsbbUIOcQn7zP1Na8k/image.png"
              alt="Blood test for hormonal assessment during fertility investigation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan during fertility evaluation at Divine IVF Clinic in Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          A <strong>fertility investigation in Noida</strong> is usually the first real step for couples who
          have been trying to conceive without success. Rather than starting with a treatment and hoping it
          fits, a proper <strong>fertility evaluation</strong> looks at the actual, individual reasons —
          ovulation, hormone levels, the uterus and fallopian tubes, and{" "}
          <Link href="/male-infertility" className="text-rose-600 font-semibold hover:underline">
            male infertility
          </Link>{" "}
          — before any treatment is suggested.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Semen analysis for male fertility investigation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Fertility consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal blood test during fertility investigation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>,{" "}
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
            Dr. Mandavi Rai
          </Link>{" "}
          builds this <strong>fertility evaluation</strong> around your specific history rather than a standard checklist. Depending on
          what the initial <strong>fertility investigation</strong> shows, the next step may be simple monitoring,{" "}
          <Link href="/iui" className="text-rose-600 font-semibold hover:underline">
            IUI treatment
          </Link>
          , or{" "}
          <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">
            IVF treatment
          </Link>
          . Related concerns such as PCOS or fibroids are addressed as part of{" "}
          <Link href="/gynecology" className="text-rose-600 font-semibold hover:underline">
            gynaecological care
          </Link>
          , not treated in isolation.
        </p>

        <p>
          This approach follows recognised clinical guidance from bodies such as the{" "}
          <a
            href="https://www.asrm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            American Society for Reproductive Medicine (ASRM)
          </a>{" "}
          and the{" "}
          <a
            href="https://www.fogsi.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            Federation of Obstetric &amp; Gynaecological Societies of India (FOGSI)
          </a>
          , of which Dr. Rai is a member — a structured <strong>fertility workup</strong> before treatment,
          for both partners, rather than treatment-first guesswork.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Key Benefits of Fertility Investigation
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Comprehensive fertility evaluation for both partners
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Identifies the root cause of infertility
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Personalized treatment plan based on fertility investigation results
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Avoids unnecessary fertility treatment
            </li>
          </ul>
        </div>
      </div>
    </TreatmentTemplate>
  );
}