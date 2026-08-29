// app/ivf/icsi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/icsi" },
  title: "ICSI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "ICSI (Intracytoplasmic Sperm Injection) in Sector 76, Noida — precision fertilisation for male-factor infertility with Dr. Mandavi Rai at Divine IVF. Learn about ICSI procedure, success rates, and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "ICSI treatment in Noida, Intracytoplasmic Sperm Injection, ICSI procedure, male infertility treatment, IVF with ICSI, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, ICSI success rate, sperm injection, PICSI, IMSI, male factor infertility treatment",
  openGraph: {
    title: "ICSI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "ICSI (Intracytoplasmic Sperm Injection) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — precision at the cellular level for male-factor infertility.",
    url: "https://www.divineivf.com/ivf/icsi",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "ICSI procedure at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IcsiPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "ICSI" },
      ]}
      eyebrow="Advanced IVF · Embryology"
      titlePlain="ICSI:"
      titleAccent="precision at the cellular level"
      intro="Intracytoplasmic Sperm Injection (ICSI) is a specialised laboratory technique used within an IVF cycle, where a single sperm is injected directly into an egg to support fertilisation — most often recommended for male-factor infertility."
      heroImage="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Embryologist performing ICSI procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="High-magnification laboratory equipment used in ICSI procedure"
      whatItIs={[
        "ICSI (Intracytoplasmic Sperm Injection) is an advanced laboratory technique where a single sperm is selected by an embryologist and injected directly into the centre of a mature egg using a fine glass needle under a high-powered microscope. This precision technique was developed specifically to overcome male-factor infertility challenges.",
        "In conventional IVF, many sperm are placed near an egg and fertilisation happens naturally. ICSI instead bypasses natural barriers by delivering the sperm directly into the egg — making it possible to achieve fertilisation even when sperm count, motility, or morphology would otherwise make natural fertilisation difficult or impossible.",
        "ICSI is performed as part of an IVF cycle, following the same ovarian stimulation and egg retrieval process as conventional IVF. The difference takes place at the fertilisation stage in the embryology lab, where the embryologist performs the delicate injection procedure."
      ]}
      whoNeedsIt={[
        "Men with low sperm count (oligospermia) — where too few sperm are present for natural fertilisation",
        "Men with poor sperm motility (asthenospermia) — where sperm movement is insufficient",
        "Men with abnormal sperm morphology (teratospermia) — where sperm shape is abnormal",
        "Cases where sperm is obtained through surgical retrieval techniques like TESA or PESA",
        "Couples who have had previous IVF cycles with unexpectedly low or no fertilisation",
        "Couples using frozen sperm or donor sperm in certain cases where ICSI improves outcomes",
        "Men with genetic conditions or obstructions affecting sperm delivery",
      ]}
      preparation={[
        "The ICSI procedure is part of an IVF cycle, so preparation follows the same pathway as standard IVF. This includes ovarian stimulation for the female partner, followed by egg retrieval when follicles are mature.",
        "For the male partner, a fresh semen sample is typically provided on the day of egg retrieval. The sample is processed in the lab to identify healthy, motile sperm for injection. If sperm retrieval is needed, this is performed as a separate procedure before the IVF cycle begins.",
        "Dr. Rai will review your complete fertility investigation results — including semen analysis, hormonal assessment, and any genetic testing — to determine whether ICSI is the most appropriate approach for your specific situation."
      ]}
      howItWorks={[
        { title: "Egg Retrieval", description: "Mature eggs are collected from the female partner following ovarian stimulation, just like in a standard IVF cycle." },
        { title: "Sperm Preparation", description: "A semen sample is processed in the lab to separate and identify healthy, motile sperm for injection." },
        { title: "Sperm Selection & Injection", description: "Using a fine glass needle under a high-powered microscope, the embryologist selects a single sperm and injects it directly into the centre of a mature egg." },
        { title: "Fertilisation Check", description: "Eggs are examined the next day to confirm normal fertilisation — typically successful in about 70-80% of injected eggs." },
        { title: "Embryo Culture", description: "Fertilised eggs are cultured and monitored as they develop into embryos over the next 5-6 days." },
        { title: "Embryo Transfer", description: "A healthy embryo is selected and transferred to the uterus, with any remaining embryos frozen for future use." },
      ]}
      whatToExpect="The ICSI procedure itself happens entirely in the embryology lab — you won't feel anything during the injection process. Your experience will be the same as a standard IVF cycle, with the difference occurring at the fertilisation stage. You'll be informed the day after egg retrieval how many eggs have fertilised normally, with updates on embryo development over the following days."
      benefits={[
        "Directly addresses male-factor infertility — overcoming low count, poor motility, and abnormal morphology",
        "Can be used with sperm obtained through surgical retrieval techniques (TESA, PESA, TESE)",
        "Improves the chance of fertilisation significantly when sperm numbers or quality are limited",
        "Can be combined with advanced sperm selection techniques like PICSI or IMSI where appropriate",
        "Has been a well-established, proven technique used worldwide for over three decades",
        "Offers hope for couples who may not have been able to conceive with conventional IVF",
      ]}
      considerations={[
        "Fertilisation is not guaranteed even with direct injection — typically 70-80% of eggs fertilise normally",
        "It is a lab-stage technique — the rest of the IVF process (stimulation, egg retrieval, embryo transfer) still applies",
        "Embryo development and implantation still depend on multiple biological factors beyond fertilisation",
        "The technique requires an experienced embryologist and specialised equipment",
        "ICSI adds to the cost of an IVF cycle due to the specialised laboratory work required",
        "Some studies suggest a slightly higher rate of certain genetic conditions with ICSI, though this is primarily linked to underlying male infertility factors rather than the technique itself",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf", blurb: "The complete IVF process within which ICSI is performed — from stimulation to embryo transfer." },
        { name: "PICSI", href: "/ivf/picsi", blurb: "Advanced sperm selection using hyaluronan binding — an additional step before ICSI." },
        { name: "IMSI", href: "/ivf/imsi", blurb: "High-magnification sperm selection for ICSI — examining sperm structure in finer detail." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Comprehensive male fertility evaluation that determines if ICSI is needed." },
        { name: "Sperm Retrieval", href: "/sperm-retrieval", blurb: "Surgical sperm retrieval techniques like TESA and PESA for use in ICSI." },
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
          question: "What is the difference between IVF and ICSI?",
          answer:
            "In conventional IVF, sperm and eggs are placed together in a dish and fertilisation happens naturally. In ICSI, a single sperm is selected and injected directly into the egg under a microscope. ICSI is typically used for male-factor infertility or when previous IVF cycles have had poor fertilisation.",
        },
        {
          question: "What is the success rate of ICSI?",
          answer:
            "Fertilisation rates with ICSI typically range from 70-80% of injected eggs. The overall success of the IVF cycle depends on many factors including egg quality, embryo development, and uterine receptivity. Dr. Rai will discuss realistic expectations based on your individual situation.",
        },
        {
          question: "Is ICSI more successful than conventional IVF?",
          answer:
            "ICSI is not inherently 'more successful' than conventional IVF — it's specifically designed for cases where male-factor infertility is present. For couples without male factor issues, conventional IVF is typically recommended. ICSI provides the best chance of fertilisation when sperm quality or quantity is compromised.",
        },
        {
          question: "Does ICSI increase the risk of birth defects?",
          answer:
            "Research shows that ICSI itself does not significantly increase the risk of birth defects beyond the risks associated with the underlying male infertility. Some genetic conditions that cause male infertility can be passed on to sons, which is why genetic counselling and testing may be recommended before ICSI.",
        },
        {
          question: "What is the difference between ICSI, PICSI, and IMSI?",
          answer:
            "ICSI selects sperm primarily by shape and movement under standard magnification. PICSI adds a step where sperm are tested for their ability to bind to hyaluronan (a substance found around the egg) as an additional marker of maturity. IMSI uses much higher magnification (over 6000x) to examine sperm structure in finer detail before selection. Which approach is recommended depends on your specific case.",
        },
        {
          question: "Can ICSI be done with frozen or donor sperm?",
          answer:
            "Yes, ICSI can be performed with frozen sperm or donor sperm. The sperm is thawed and prepared in the lab just like a fresh sample. The embryologist selects healthy, motile sperm from the sample for injection into the egg.",
        },
        {
          question: "What happens if no sperm are found in the semen sample?",
          answer:
            "If no sperm are present in the ejaculate (azoospermia), surgical sperm retrieval techniques like TESA, PESA, or TESE may be performed to collect sperm directly from the testicles or epididymis. The retrieved sperm can then be used for ICSI, offering hope even in cases where no sperm appears in the semen.",
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
          <strong>ICSI treatment in Noida</strong> offers hope to couples where male factors are 
          contributing to <strong>fertility</strong> challenges. Since its introduction in the 1990s, 
          ICSI has revolutionised the treatment of <strong>male infertility</strong>, making it possible 
          for men with low sperm count, poor motility, or abnormal morphology to achieve biological 
          parenthood.
        </p>

        <p>
          The journey to <strong>ICSI</strong> typically begins with a comprehensive <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> that includes a thorough <strong>semen analysis</strong> and 
          <strong>male fertility evaluation</strong> with <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link>. If significant male factors are identified, <strong>ICSI</strong> 
          may be recommended as part of your <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">
          IVF treatment</Link> plan.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Sperm preparation for ICSI procedure at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Fertility consultation for ICSI treatment with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
              alt="Embryology lab for ICSI and IVF procedures at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The <strong>ICSI procedure</strong> requires exceptional precision and skill. Under high-powered 
          magnification (over 400x), the embryologist carefully immobilises a single sperm, draws it into 
          a fine glass needle, and gently injects it through the outer shell of the egg directly into the 
          cytoplasm (the centre of the egg). This delicate process takes only a few seconds per egg but 
          requires years of training and experience to perform successfully.
        </p>

        <p>
          For men with azoospermia (no sperm in the ejaculate), <strong>ICSI</strong> can be combined with 
          surgical sperm retrieval techniques like <strong>TESA</strong> (Testicular Sperm Aspiration), 
          <strong>PESA</strong> (Percutaneous Epididymal Sperm Aspiration), or <strong>TESE</strong> 
          (Testicular Sperm Extraction). Sperm retrieved through these procedures can be used directly 
          for <strong>ICSI</strong>, offering hope even in cases where sperm is not present in the semen.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            ICSI, PICSI, and IMSI — What`s the Difference?
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">ICSI</span>
              <span>Selects sperm primarily by shape and movement under standard magnification (400x). The standard technique for male-factor infertility.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">PICSI</span>
              <span>Adds a selection step where sperm are tested for their ability to bind to hyaluronan (a substance found around the egg) as an additional marker of sperm maturity.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">IMSI</span>
              <span>Uses much higher magnification (over 6000x) to examine sperm structure in finer detail before selection, allowing embryologists to identify subtle abnormalities.</span>
            </li>
          </ul>
          <p className="text-xs text-ink-400 mt-3">
            Which approach suits your case depends on your semen analysis and history — something Dr. Rai will discuss directly with you.
          </p>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>ICSI treatment</strong> 
          is rooted in evidence-based practice and supported by state-of-the-art embryology facilities. 
          Dr. Rai follows guidelines from leading organisations including the{" "}
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
          . This ensures your <strong>fertility treatment</strong> is supported by the latest clinical 
          evidence and best practices in embryology.
        </p>
      </div>
    </TreatmentTemplate>
  );
}