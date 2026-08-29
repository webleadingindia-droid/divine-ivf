// app/ivf/genetic-testing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/genetic-testing" },
  title: "Genetic Testing of Embryos in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Genetic testing of embryos in Sector 76, Noida — advanced screening for chromosomal health and inherited conditions with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "genetic testing of embryos in Noida, PGT, PGT-A, PGT-M, preimplantation genetic testing, embryo genetic screening, IVF genetic testing, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, chromosomal abnormality screening, inherited genetic conditions, embryo biopsy, advanced IVF",
  openGraph: {
    title: "Genetic Testing of Embryos in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Genetic testing of embryos with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — advanced screening for chromosomal health and inherited conditions.",
    url: "https://www.divineivf.com/ivf/genetic-testing",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Genetic testing of embryos at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GeneticTestingPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "Genetic Testing" },
      ]}
      eyebrow="Advanced IVF · Precision Diagnostics"
      titlePlain="Genetic Testing"
      titleAccent="of Embryos"
      intro="In appropriate cases, embryos can be screened before transfer as part of an individualised IVF plan — one additional layer of information, not a routine step for everyone."
      heroImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Embryology laboratory preparing for genetic testing at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Embryo biopsy for genetic testing at Divine IVF Clinic, Noida"
      whatItIs={[
        "Genetic testing of embryos — also known as Preimplantation Genetic Testing (PGT) — involves taking a careful, small biopsy from a developing embryo and analysing it in a specialised genetics laboratory before deciding which embryo to transfer. This testing can provide valuable information about chromosomal health or identify specific inherited genetic conditions.",
        "There are different types of genetic testing depending on what you're looking for. PGT-A screens for chromosomal abnormalities (when an embryo has too many or too few chromosomes), which become more common with advancing maternal age. PGT-M screens for specific single-gene disorders when there's a known family history of a particular genetic condition. PGT-SR screens for structural rearrangements in chromosomes.",
        "Genetic testing is not a routine step for everyone — it's an additional layer of information that Dr. Mandavi Rai discusses carefully with each couple based on their medical history, age, previous outcomes, and specific circumstances."
      ]}
      whoNeedsIt={[
        "Couples with a known family history of a specific genetic condition (PGT-M)",
        "Women of advanced maternal age (typically over 37), where chromosomal abnormalities are more common (PGT-A)",
        "Couples who have experienced recurrent pregnancy loss, where chromosomal factors may be involved",
        "Couples who have had previous unsuccessful IVF cycles with unclear cause",
        "Couples with a known chromosomal translocation or other structural rearrangement (PGT-SR)",
        "Couples who have had children with genetic conditions and want to avoid recurrence",
        "Cases where aneuploidy screening may help improve implantation and live birth rates",
      ]}
      preparation={[
        "If you're considering testing for a specific inherited condition (PGT-M), this is best discussed well before your cycle begins. It may involve additional preparatory genetic testing of both partners to design the correct genetic screen for the embryos.",
        "Because biopsied embryos are typically frozen while awaiting results (which can take 7-14 days), your plan should factor in a frozen embryo transfer cycle rather than a fresh transfer immediately after egg retrieval. This means your IVF cycle may be split into two parts: the retrieval/biopsy cycle and a separate frozen transfer cycle.",
        "Genetic counselling is an essential part of the process. Dr. Rai works with genetic counsellors who can help you understand the implications of the testing, what results mean, and what decisions you might face based on those results."
      ]}
      howItWorks={[
        { title: "IVF Cycle & Embryo Development", description: "The standard IVF process is followed — eggs are retrieved, fertilised, and embryos are cultured in the lab to the blastocyst stage (typically day 5-6)." },
        { title: "Embryo Biopsy", description: "Using a specialised laser and micromanipulation tools, the embryologist removes a small number of cells (typically 4-5) from the trophectoderm (the part that will become the placenta), leaving the inner cell mass (which becomes the baby) intact." },
        { title: "Embryo Vitrification", description: "After biopsy, embryos are frozen (vitrified) while the genetic analysis is being performed. This allows time for results to come back without rushing the transfer." },
        { title: "Genetic Laboratory Analysis", description: "The biopsied samples are sent to a specialised genetics lab where they are analysed. For PGT-A, this involves testing for chromosomal number. For PGT-M, specific gene mutations are identified." },
        { title: "Result Review", description: "Results are reviewed and discussed with you by Dr. Rai and the genetic counsellor, helping you understand which embryos are genetically normal and suitable for transfer." },
        { title: "Frozen Embryo Transfer", description: "A genetically normal embryo is selected and transferred in a frozen embryo transfer cycle, timed to your natural or medicated cycle." },
      ]}
      whatToExpect="Because samples are sent to a specialised genetics lab, results generally take 7-14 days to come back — longer than standard embryo assessment. This is factored into your transfer timeline, and involves vitrifying (freezing) embryos while awaiting results. The actual biopsy procedure is performed by an experienced embryologist under a high-powered microscope using micromanipulation tools. While it's a delicate procedure, the biopsy is designed to be as minimally disruptive as possible, with the goal of leaving the embryo's development unaffected."
      benefits={[
        "Adds objective genetic information to the transfer decision — beyond just embryo appearance",
        "Reduces the risk of transferring embryos with chromosomal abnormalities that could lead to miscarriage or genetic conditions",
        "Can be crucial for couples with known inherited genetic conditions, allowing them to select unaffected embryos",
        "May improve implantation rates and reduce the number of cycles needed by selecting chromosomally normal embryos",
        "Particularly valuable for couples with recurrent pregnancy loss or repeated IVF failures",
        "Provides peace of mind for couples who want to avoid passing on serious genetic conditions",
      ]}
      considerations={[
        "Involves an embryo biopsy — a delicate additional step that requires an experienced embryologist and specialised equipment",
        "Testing does not guarantee a successful pregnancy — even chromosomally normal embryos may not implant for other reasons",
        "Not every embryo may be suitable for testing or may not survive the biopsy process",
        "Best discussed case-by-case given the sensitivity of genetic findings and the decisions they may involve",
        "PGT-A has some limitations, including the possibility of false positives or negatives due to embryo mosaicism",
        "Adds to the cost of an IVF cycle — the testing itself, plus the need for embryo freezing and a frozen transfer cycle",
        "Results can sometimes be inconclusive or show no normal embryos available for transfer",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf", blurb: "The treatment within which genetic testing is performed." },
        { name: "ICSI", href: "/ivf/icsi", blurb: "Often used in conjunction with genetic testing for male-factor cases." },
        { name: "ERA Test", href: "/ivf/era", blurb: "Assessing the uterine side of implantation timing — complementary to embryo testing." },
        { name: "Egg Donor IVF", href: "/egg-donor", blurb: "An alternative path in select genetic or fertility situations where embryo testing may not be needed." },
      ]}
      externalResources={[
        {
          label: "Preimplantation Genetic Testing (PGT)",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/preimplantation-genetic-testing-pgt/",
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
          question: "Is genetic testing recommended for everyone doing IVF?",
          answer:
            "No — genetic testing is considered selectively, based on history, age, previous outcomes, and individual circumstances. Dr. Rai will discuss whether testing is appropriate for your specific situation. For younger women without known genetic risks, conventional IVF without testing may be recommended.",
        },
        {
          question: "Does embryo biopsy harm the embryo?",
          answer:
            "The biopsy technique is designed to be as minimally disruptive as possible. Embryologists remove a small number of cells from the trophectoderm (the part that will become the placenta), leaving the inner cell mass (which becomes the baby) intact. While there is some technical risk, studies suggest that skilled embryologists can perform the biopsy with minimal impact on embryo development.",
        },
        {
          question: "What is the difference between PGT-A and PGT-M?",
          answer:
            "PGT-A screens for chromosomal abnormalities (when an embryo has too many or too few chromosomes). It's typically recommended for women of advanced maternal age or those with recurrent pregnancy loss. PGT-M screens for specific single-gene disorders when there's a known family history of a particular genetic condition, such as cystic fibrosis or thalassemia.",
        },
        {
          question: "How long does genetic testing take?",
          answer:
            "Results typically take 7-14 days to come back from the specialised genetics lab. This is why embryos are frozen (vitrified) after biopsy while awaiting results, and a frozen embryo transfer is planned for a later cycle rather than a fresh transfer.",
        },
        {
          question: "What happens if all embryos are genetically abnormal?",
          answer:
            "If all tested embryos show chromosomal abnormalities or carry the genetic condition being screened for, you may have no suitable embryos for transfer. This can be emotionally challenging, but it provides important information about your fertility situation. Dr. Rai will discuss options with you, which may include considering donor eggs, donor embryos, or other pathways.",
        },
        {
          question: "Can genetic testing guarantee a healthy baby?",
          answer:
            "No testing can guarantee a healthy baby. Genetic testing of embryos can reduce the risk of transferring embryos with certain chromosomal abnormalities or specific genetic conditions, but it doesn't eliminate all risks. Many factors beyond genetics influence pregnancy outcomes, including uterine environment, hormonal balance, and maternal health.",
        },
        {
          question: "What is embryo mosaicism and does it affect testing?",
          answer:
            "Mosaicism occurs when an embryo has a mix of chromosomally normal and abnormal cells. This can make genetic testing results more complex, as the biopsy may not represent the entire embryo. Some embryos with mosaicism can still result in healthy pregnancies, and Dr. Rai will discuss your specific results and options with you.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo biopsy for genetic testing at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Genetic counseling consultation for embryo testing at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>Genetic testing of embryos</strong> represents a significant advancement in 
          <strong>fertility treatment</strong>, offering couples the ability to make more informed 
          decisions about which embryo to transfer. Also known as <strong>Preimplantation Genetic 
          Testing (PGT)</strong>, this technology has transformed outcomes for couples with specific 
          genetic concerns or those seeking to improve their chances of a successful pregnancy.
        </p>

        <p>
          The journey to <strong>genetic testing</strong> typically begins with a comprehensive 
          <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> and consultation with <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link>. Together, you`ll explore your medical history, family history, 
          age, and previous pregnancy outcomes to determine whether <strong>PGT</strong> is appropriate 
          for your situation.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo biopsy procedure for genetic testing at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Fertility consultation for genetic testing with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
              alt="Embryology lab at Divine IVF Clinic for genetic testing Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          For couples with a known family history of a genetic condition, <strong>PGT-M</strong> 
          (Preimplantation Genetic Testing for Monogenic disorders) can be life-changing. This 
          testing allows embryos to be screened for specific single-gene disorders such as cystic 
          fibrosis, thalassemia, Huntington`s disease, or other inherited conditions. By identifying 
          embryos that do not carry the genetic condition, couples can reduce the risk of passing 
          on serious genetic diseases to their children.
        </p>

        <p>
          For women of advanced maternal age (typically over 37) or those with recurrent pregnancy 
          loss, <strong>PGT-A</strong> (Preimplantation Genetic Testing for Aneuploidy) may be 
          recommended. As women age, the risk of chromosomal abnormalities in eggs increases — 
          leading to embryos with too many or too few chromosomes. These embryos often don`t 
          implant or result in miscarriage. <strong>PGT-A</strong> can identify chromosomally 
          normal embryos, potentially improving implantation rates and reducing the risk of miscarriage.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Types of Genetic Testing Available
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">PGT-A</span>
              <span>Screens for chromosomal abnormalities (too many or too few chromosomes). Recommended for advanced maternal age, recurrent pregnancy loss, or previous aneuploid pregnancies.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">PGT-M</span>
              <span>Screens for specific single-gene disorders when there`s a known family history. Used for conditions like cystic fibrosis, thalassemia, Huntington`s disease, and more.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">PGT-SR</span>
              <span>Screens for structural rearrangements in chromosomes, such as translocations. Used when one or both partners carry a chromosomal rearrangement that could affect embryo development.</span>
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>genetic testing</strong> 
          is guided by the latest evidence and ethical best practices. Dr. Rai works closely with 
          experienced genetic counsellors who can help you understand the implications of testing, 
          what different results mean, and what decisions you might face based on those results.
        </p>

        <p>
          <strong>Genetic testing of embryos</strong> is supported by guidelines from leading 
          organisations including the{" "}
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
          evidence and best practices in genetic testing.
        </p>
      </div>
    </TreatmentTemplate>
  );
}