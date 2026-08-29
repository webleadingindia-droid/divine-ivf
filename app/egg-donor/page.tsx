// app/egg-donor/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/egg-donor" },
  title: "Egg Donor IVF in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Egg donor IVF in Sector 76, Noida — a compassionate pathway to parenthood with Dr. Mandavi Rai at Divine IVF. Learn about donor egg IVF, candidacy, and the process.",
  robots: { index: true, follow: true },
  keywords:
    "egg donor IVF in Noida, donor egg IVF, egg donation, fertility treatment Noida, donor egg fertility, IVF with donor eggs, Dr. Mandavi Rai, Divine IVF, fertility clinic Noida, donor egg IVF cost, egg donor programme, third-party reproduction, family building with donor eggs",
  openGraph: {
    title: "Egg Donor IVF in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Egg donor IVF with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — a compassionate pathway to parenthood with donor eggs.",
    url: "https://www.divineivf.com/egg-donor",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Egg donor IVF consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function EggDonorPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "Egg Donor IVF" },
      ]}
      eyebrow="Fertility Care · Third-Party Reproduction"
      titlePlain="A path forward with"
      titleAccent="donor eggs"
      intro="For some, a donor egg pathway is the clearest route to parenthood. It's a decision that deserves care, honesty and time — not a fallback discussed only when other options run out."
      heroImage="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Couple discussing egg donor IVF options with Dr. Mandavi Rai at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Supportive fertility consultation for donor egg IVF at Divine IVF, Noida"
      whatItIs={[
        "Egg donor IVF is a fertility treatment where eggs from a healthy donor are fertilised with sperm (from a partner or donor) in a laboratory, and the resulting embryo is transferred to the intended mother's or gestational carrier's uterus. This pathway offers a realistic chance of pregnancy when a person's own eggs are unlikely to result in a viable pregnancy.",
        "The use of donor eggs can be a deeply personal decision — one that involves not just medical considerations but also emotional, ethical, and legal dimensions. It's a pathway that deserves careful thought and open discussion, not a decision to be rushed.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai's role is to help you understand whether this pathway genuinely fits your situation, walk through what it involves, and support you through the decision at your own pace — this is rarely a decision made in a single visit."
      ]}
      whoNeedsIt={[
        "Women with reduced ovarian reserve (low AMH or high FSH) where own eggs are unlikely to result in a viable pregnancy",
        "Women who have had previous unsuccessful IVF cycles using their own eggs",
        "Women with premature ovarian insufficiency (POI) or early menopause",
        "Women who have undergone cancer treatment (chemotherapy or radiation) that has affected egg quality or quantity",
        "Women with genetic conditions they wish to avoid passing on to their children",
        "Same-sex male couples using a gestational carrier with donor eggs",
        "Women of advanced maternal age where the quality and quantity of eggs is significantly reduced",
        "Couples who have experienced multiple IVF failures with no clear cause",
      ]}
      preparation={[
        "Before considering donor egg IVF, Dr. Rai reviews your complete fertility history and evaluation results to confirm this pathway is appropriate for your situation. This includes assessing your uterine health through ultrasound and hysteroscopy to ensure it can support a pregnancy.",
        "The preparation process involves several important steps: selecting a donor (known or anonymous), coordinating with the donor's cycle, preparing your uterus with hormonal medication, and synchronising the donor's egg retrieval with your uterine preparation.",
        "If you're using an anonymous donor through a donor programme, you'll have access to detailed information about the donor's medical history, physical characteristics, and sometimes personal background. If you have a known donor in mind, additional legal and medical coordination may be needed.",
        "Genetic counselling is an essential part of the process. Dr. Rai works with genetic counsellors who can help you understand the implications of donor egg IVF, including any genetic screening of the donor and the embryo."
      ]}
      howItWorks={[
        { title: "Understanding Your Situation", description: "A full review of your fertility history and evaluation results to confirm this pathway is appropriate for your specific situation." },
        { title: "Donor Selection", description: "Choosing between an anonymous donor through a donor programme or a known donor (family member or friend) — with appropriate legal and medical coordination." },
        { title: "Donor Coordination", description: "Coordination around donor eggs, following applicable medical and legal requirements. The donor undergoes ovarian stimulation and egg retrieval." },
        { title: "Uterine Preparation", description: "Your uterus is prepared through hormonal medication to create the ideal environment for embryo implantation." },
        { title: "Fertilisation", description: "Donor eggs are fertilised with sperm (from your partner or a donor) in the lab — ICSI may be used if needed." },
        { title: "Embryo Culture", description: "Fertilised eggs are cultured and monitored as they develop into embryos over 5-6 days." },
        { title: "Embryo Transfer", description: "A healthy embryo is transferred into your uterus using a thin, flexible catheter — a quick, generally painless procedure." },
        { title: "Pregnancy Test", description: "A blood test is scheduled approximately 10-14 days after transfer to confirm pregnancy." },
      ]}
      whatToExpect="The donor egg IVF process typically takes longer to coordinate than standard IVF due to the donor selection and synchronisation steps. Your experience of the transfer and pregnancy test will be similar to a standard IVF cycle. Dr. Rai and her team will be with you throughout, explaining each step and answering any questions. The emotional journey of donor egg IVF is significant — you'll have support available to help you navigate both the practical and emotional aspects of this pathway."
      benefits={[
        "Offers a realistic chance of pregnancy when your own eggs are unlikely to result in a viable pregnancy",
        "Provides the experience of pregnancy, childbirth, and genetic connection to your child (through the uterine environment, even if not genetically related)",
        "Uses young, healthy donor eggs with excellent quality, significantly improving success rates compared to using your own eggs in challenging situations",
        "Allows you to carry the pregnancy and experience childbirth, even when using donor eggs",
        "Can be combined with your partner's sperm for a genetic connection to one parent",
        "Offers a pathway to parenthood for same-sex male couples using a gestational carrier",
        "Reduces the risk of passing on certain genetic conditions to your child",
      ]}
      considerations={[
        "The child will be genetically related to the egg donor and the sperm source, not to the intended mother (if using a donor egg and partner sperm)",
        "Involves complex emotional, ethical, and legal considerations that deserve careful thought and time",
        "Requires careful donor selection and coordination, which can take time",
        "Involves legal agreements and counselling (particularly with known donors)",
        "May involve additional costs beyond standard IVF for donor compensation, coordination, and legal fees",
        "The decision is deeply personal and should be made at your own pace, without pressure",
        "Not all patients are emotionally prepared for donor egg IVF — counselling is strongly recommended",
        "Some patients may need multiple attempts or a gestational carrier if uterine issues exist",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf", blurb: "The fertility treatment within which donor eggs are used — from fertilisation to embryo transfer." },
        { name: "Sperm Donor IVF", href: "/sperm-donor", blurb: "Using donor sperm with your own eggs — an alternative third-party reproduction pathway." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation that helps determine if donor egg IVF is appropriate for you." },
        { name: "Genetic Testing", href: "/ivf/genetic-testing", blurb: "Screening embryos created with donor eggs for chromosomal health." },
      ]}
      externalResources={[
        {
          label: "Donor Eggs: Information for Patients",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/donor-eggs-information-for-patients/",
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
          question: "Will the child be genetically related to me?",
          answer:
            "The child will be genetically related to the egg donor and the sperm source. If using your partner's sperm and a donor egg, the child will be genetically related to your partner but not to you (the intended mother who carries the pregnancy). However, the child will be connected to you through the experience of pregnancy, birth, and your role as the mother. Dr. Rai can walk through what this means for your specific family-building plan.",
        },
        {
          question: "Is donor egg IVF only for older patients?",
          answer:
            "No — while it's more commonly considered with age-related factors, it may also be relevant for premature ovarian insufficiency (POI), genetic conditions, previous unsuccessful IVF with one's own eggs, or cancer treatment that has affected egg quality — regardless of the patient's age.",
        },
        {
          question: "How is a decision like this made?",
          answer:
            "At your own pace. Dr. Rai's role is to give you clear, honest information and space to ask questions — not to rush a decision this significant. Many patients take weeks or months to feel ready to proceed with donor egg IVF. Counselling and support are available throughout.",
        },
        {
          question: "Can I use a known donor (friend or family member)?",
          answer:
            "Yes, you can use a known donor, but this involves additional legal and psychological considerations. Legal agreements are essential to clarify rights and responsibilities. Dr. Rai will guide you through the process and recommend appropriate counselling and legal advice.",
        },
        {
          question: "What information is available about anonymous donors?",
          answer:
            "Anonymous donors typically provide detailed medical and family history, physical characteristics, educational background, and sometimes personal interests. This information helps you make an informed choice. Some donor programmes also offer access to adult photos of donors.",
        },
        {
          question: "Does using donor eggs affect success rates?",
          answer:
            "Success rates with donor eggs are typically excellent — often higher than using your own eggs in challenging situations — because donor eggs come from young, healthy women. The success of the transfer also depends on your uterine health and other factors.",
        },
        {
          question: "What if I don't have a partner? Can I still use donor eggs?",
          answer:
            "Yes, you can use donor eggs with donor sperm to create embryos for transfer. This is a common pathway for single women or same-sex couples. The process is similar to using donor eggs with partner sperm.",
        },
        {
          question: "Is genetic testing of embryos possible with donor eggs?",
          answer:
            "Yes, genetic testing of embryos (PGT) can be performed on embryos created with donor eggs, just like with standard IVF. This can screen for chromosomal health or specific genetic conditions, depending on what's appropriate for your situation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1200&auto=format&fit=crop"
              alt="Supportive fertility consultation for egg donor IVF at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal preparation for donor egg IVF transfer at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>Egg donor IVF in Noida</strong> offers a compassionate and effective pathway to 
          parenthood for individuals and couples who may not be able to conceive using their own eggs. 
          This remarkable <strong>fertility treatment</strong> has helped countless people build their 
          families — but it`s a decision that deserves care, honesty, and time.
        </p>

        <p>
          The journey to <strong>donor egg IVF</strong> typically begins with a thorough <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> and consultation with <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link>. Unlike standard <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">
          IVF</Link>, where the intended mother uses her own eggs, <strong>donor egg IVF</strong> 
          involves using eggs from a healthy donor — either known or anonymous — to create embryos 
          for transfer.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Donor egg preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Egg donor IVF consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop"
              alt="Family building discussion for donor egg IVF at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Donor egg IVF</strong> is often considered when a person`s own eggs are unlikely 
          to result in a viable pregnancy — due to reduced ovarian reserve, previous unsuccessful 
          <strong>IVF</strong> cycles using one`s own eggs, premature ovarian insufficiency, 
          cancer treatment affecting egg quality, or a known genetic condition. For same-sex male 
          couples, <strong>donor egg IVF</strong> with a gestational carrier offers a path to 
          genetic parenthood for one or both partners.
        </p>

        <p>
          One of the most significant advantages of <strong>donor egg IVF</strong> is the high 
          success rate — because donor eggs come from young, healthy women, the quality is typically 
          excellent. This means the <strong>fertility treatment</strong> has significantly higher 
          success rates than using your own eggs in challenging situations, offering a realistic 
          chance of pregnancy when other pathways may not.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Understanding Your Options: Donor Types
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">Anonymous Donor</span>
              <span>A donor from a donor programme — you receive detailed medical and personal information but the donor remains anonymous. This is the most common option with robust screening and legal clarity.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">Known Donor</span>
              <span>A donor you know personally — a friend or family member. This option involves additional legal, emotional, and medical considerations that require careful discussion and legal agreements.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">Egg Bank</span>
              <span>Frozen donor eggs from an egg bank — allowing for immediate use without synchronising cycles. This offers convenience but may have slightly different success rates compared to fresh donor eggs.</span>
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>donor egg IVF</strong> 
          is rooted in compassion, honesty, and individualised care. Dr. Rai understands that this is 
          one of the most significant decisions you may ever make — and she`s committed to supporting 
          you through it at your own pace, without pressure.
        </p>

        <p>
          The use of <strong>donor eggs</strong> in <strong>fertility treatment</strong> is guided 
          by regulations and ethical guidelines from leading organisations including the{" "}
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
          evidence and ethical best practices.
        </p>

        <p>
          <strong>Donor egg IVF</strong> is a deeply personal decision — one that deserves careful 
          thought, open discussion, and the space to process emotions. Dr. Rai and her team are here 
          to provide clear, honest information and support, helping you find the pathway that feels 
          right for you and your family.
        </p>
      </div>
    </TreatmentTemplate>
  );
}