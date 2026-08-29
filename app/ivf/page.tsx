// app/ivf/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf" },
  title: "IVF Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "IVF (In Vitro Fertilisation) in Sector 76, Noida — comprehensive fertility treatment with Dr. Mandavi Rai at Divine IVF. Learn about IVF procedure, success rates, and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "IVF treatment in Noida, In Vitro Fertilisation, IVF procedure, fertility treatment Noida, IVF success rate, IVF specialist Noida, Dr. Mandavi Rai, Divine IVF, fertility clinic Noida, IVF cost, IVF cycle, embryo transfer, fertility treatment",
  openGraph: {
    title: "IVF Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "IVF (In Vitro Fertilisation) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — comprehensive fertility treatment from evaluation to embryo transfer.",
    url: "https://www.divineivf.com/ivf",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "IVF treatment at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IvfPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment" },
      ]}
      eyebrow="IVF · In Vitro Fertilisation"
      titlePlain="Understanding"
      titleAccent="IVF"
      intro="In vitro fertilisation brings eggs and sperm together outside the body, in a laboratory setting, before transferring a resulting embryo into the uterus. It's one of the most established fertility treatments — and one that benefits enormously from being planned around your specific situation."
      heroImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Embryology laboratory used for IVF treatment at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="IVF embryo culture at Divine IVF Clinic, Noida"
      whatItIs={[
        "IVF (In Vitro Fertilisation) is a comprehensive fertility treatment where eggs are retrieved from the ovaries, fertilised with sperm in a laboratory setting, and the resulting embryos are transferred back into the uterus. The term 'in vitro' means 'in glass' — referring to the laboratory dish where fertilisation takes place.",
        "Unlike simpler treatments like IUI that work with the body's natural processes, IVF takes over the entire fertilisation process. This makes it suitable for a wide range of fertility challenges — including blocked fallopian tubes, significant male-factor infertility, ovulation disorders, reduced ovarian reserve, and unexplained infertility.",
        "IVF can incorporate additional techniques depending on your fertility profile, including ICSI for male-factor infertility, genetic testing of embryos (PGT), or advanced sperm selection methods like PICSI or IMSI. It can also be combined with an ERA test to identify the best window for embryo transfer."
      ]}
      whoNeedsIt={[
        "Couples where simpler treatments such as IUI haven't resulted in pregnancy",
        "Significant male-factor infertility requiring ICSI or other advanced sperm selection",
        "Blocked or damaged fallopian tubes that prevent natural fertilisation",
        "Ovulation disorders that don't respond to medication alone",
        "Reduced ovarian reserve (low AMH or high FSH) requiring more intensive treatment",
        "Unexplained infertility that persists despite thorough investigation",
        "Couples using donor eggs or requiring genetic screening of embryos (PGT)",
        "Women of advanced maternal age where IVF may improve chances of success",
        "Couples who have experienced recurrent pregnancy loss",
      ]}
      preparation={[
        "Before starting an IVF cycle, Dr. Rai reviews your complete fertility investigation results — including hormonal profile, ovarian reserve (AMH and AFC), uterine health (through ultrasound and hysteroscopy), and semen analysis where relevant. This evaluation is essential to design a protocol suited to you, rather than a fixed default.",
        "Preparation may include adjusting medication, addressing any uterine findings from hysteroscopy (such as polyps or fibroids), and agreeing on a stimulation approach together. For some patients, a pre-cycle suppression phase may be recommended before ovarian stimulation begins.",
        "Lifestyle factors such as diet, exercise, and stress management may also be discussed. Dr. Rai may recommend certain supplements or lifestyle modifications to optimise your chances of success.",
        "If you're considering genetic testing of embryos, or if you're using donor eggs or sperm, these decisions should be made before the cycle begins."
      ]}
      howItWorks={[
        { title: "Fertility Evaluation", description: "A comprehensive review of your fertility investigation results to design an individualised IVF protocol." },
        { title: "Ovarian Stimulation", description: "Daily injectable medication is used to stimulate the ovaries to develop multiple mature eggs over approximately 10-14 days." },
        { title: "Cycle Monitoring", description: "Regular ultrasound scans and blood tests track follicle growth and hormone levels to time the egg retrieval perfectly." },
        { title: "Egg Retrieval", description: "A short, sedated procedure where mature eggs are collected from the ovaries using a thin needle guided by ultrasound." },
        { title: "Fertilisation", description: "Eggs are combined with sperm in the lab. ICSI may be used for male-factor cases where sperm is injected directly into the egg." },
        { title: "Embryo Culture", description: "Fertilised eggs are cultured and monitored as they develop into embryos over 5-6 days to the blastocyst stage." },
        { title: "Embryo Transfer", description: "A healthy embryo is selected and transferred into the uterus using a thin, flexible catheter — a quick, generally painless procedure." },
        { title: "Pregnancy Test", description: "A blood test is scheduled approximately 10-14 days after transfer to confirm pregnancy." },
      ]}
      whatToExpect="Stimulation typically involves daily injectable medication over roughly one to two weeks, with periodic monitoring by ultrasound and blood tests. Egg retrieval is a short, sedated procedure taking about 15-20 minutes — you'll be able to go home the same day. After fertilisation, embryos are cultured for several days before transfer, which is a quick, generally painless procedure done without sedation. A pregnancy test follows around two weeks later. Throughout the process, Dr. Rai and the IVF team will be with you, explaining each step and answering any questions."
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
        { name: "ICSI Treatment", href: "/ivf/icsi", blurb: "Sperm is injected directly into the egg for male-factor infertility cases." },
        { name: "Genetic Testing", href: "/ivf/genetic-testing", blurb: "Screening embryos for chromosomal health or inherited conditions." },
        { name: "ERA Test", href: "/ivf/era", blurb: "Identifies the best window for embryo transfer to improve implantation." },
        { name: "IUI Treatment", href: "/iui", blurb: "A less invasive first-line option for suitable fertility profiles." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation that determines if IVF is right for you." },
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
          question: "How many IVF cycles might I need?",
          answer:
            "This varies by individual and depends on factors identified during your fertility evaluation — including age, ovarian reserve, and the specific fertility challenges involved. Dr. Rai will discuss realistic expectations for your specific situation during consultation. Some patients conceive in their first cycle, while others may need multiple cycles.",
        },
        {
          question: "Is IVF painful?",
          answer:
            "Most patients tolerate IVF well. Egg retrieval is done under sedation, so you won't feel any pain during the procedure — you may experience some mild cramping afterward. Embryo transfer is typically quick and well-tolerated without sedation, similar to a routine gynaecological exam. Stimulation injections are generally well-tolerated with minimal discomfort.",
        },
        {
          question: "Can IVF be combined with genetic testing?",
          answer:
            "Yes, genetic testing of embryos (PGT) can be added to an IVF cycle in appropriate cases. This is discussed individually based on your history, age, and specific circumstances. PGT-A screens for chromosomal health, while PGT-M screens for specific inherited conditions.",
        },
        {
          question: "What is the success rate of IVF?",
          answer:
            "IVF success rates vary widely depending on age, fertility diagnosis, and individual factors. The highest success rates are typically seen in women under 35. Dr. Rai will discuss realistic expectations based on your specific fertility evaluation results and personal circumstances.",
        },
        {
          question: "How long does an IVF cycle take?",
          answer:
            "A full IVF cycle typically takes about 4-6 weeks from the start of ovarian stimulation to the pregnancy test. This includes 10-14 days of stimulation, egg retrieval, embryo culture (5-6 days), embryo transfer, and the two-week wait before the pregnancy test. If embryos are frozen for a future frozen embryo transfer, the timeline extends accordingly.",
        },
        {
          question: "Can I freeze embryos for future use?",
          answer:
            "Yes, embryo freezing (vitrification) is a standard part of IVF. If you have good quality embryos beyond what you need for your current cycle, they can be frozen for future use. Frozen embryo transfers (FET) have excellent success rates and offer the opportunity for additional pregnancies without going through another full IVF cycle.",
        },
        {
          question: "What is the difference between IVF and IUI?",
          answer:
            "IUI (Intrauterine Insemination) is a simpler procedure where prepared sperm is placed directly into the uterus, working with the body's natural processes. IVF is a more comprehensive treatment where eggs are retrieved, fertilised in the lab, and embryos are transferred. IVF is typically considered when IUI hasn't worked or isn't suitable due to factors like blocked tubes or significant male infertility.",
        },
        {
          question: "Can IVF be done with donor eggs or sperm?",
          answer:
            "Yes, IVF can be performed using donor eggs, donor sperm, or both. This is often recommended when the intended parents have specific fertility challenges, such as very low ovarian reserve, severe male-factor infertility, or when there's a risk of passing on genetic conditions. Dr. Rai will discuss donor options if they're appropriate for your situation.",
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
              alt="Embryo culture and IVF laboratory at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Hormonal assessment and blood tests for IVF treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>IVF treatment in Noida</strong> represents the most comprehensive and established 
          approach to <strong>fertility treatment</strong> for couples facing a wide range of 
          <strong>fertility</strong> challenges. Since the birth of the first IVF baby in 1978, 
          this remarkable technology has helped millions of couples around the world build their families.
        </p>

        <p>
          The journey to <strong>IVF</strong> typically begins with a thorough <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> and consultation with <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link>. Unlike simpler treatments that work with the body`s natural processes, 
          <strong>IVF</strong> takes over the entire fertilisation process — from egg retrieval to 
          embryo transfer — making it suitable for a broader range of fertility challenges.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Sperm preparation for IVF treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="IVF consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo transfer preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>IVF</strong> is particularly valuable for couples where simpler treatments like 
          <Link href="/iui" className="text-rose-600 font-semibold hover:underline">IUI</Link> haven`t 
          been successful, or where specific challenges such as blocked fallopian tubes, significant 
          <Link href="/male-infertility" className="text-rose-600 font-semibold hover:underline">
          male infertility</Link>, ovulation disorders, or reduced ovarian reserve are present. 
          For patients with severe <strong>male infertility</strong>, <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">
          ICSI</Link> can be performed as part of the IVF cycle — where a single sperm is injected 
          directly into the egg to achieve fertilisation.
        </p>

        <p>
          One of the significant advantages of <strong>IVF</strong> is the ability to incorporate 
          advanced techniques like <Link href="/ivf/genetic-testing" className="text-rose-600 font-semibold hover:underline">
          genetic testing of embryos</Link> (PGT) to screen for chromosomal health or specific 
          inherited conditions. This can be particularly valuable for couples with a known genetic 
          condition, those of advanced maternal age, or those who have experienced recurrent pregnancy loss.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Why Choose IVF at Divine IVF?
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Individualised treatment protocols designed by Dr. Mandavi Rai
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              State-of-the-art embryology laboratory with advanced equipment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Comprehensive range of IVF add-ons — ICSI, PGT, PICSI, IMSI, and more
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryo freezing (vitrification) for future cycles
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Evidence-based practice following ASRM, FOGSI, and ISAR guidelines
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Comprehensive support throughout your IVF journey
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>IVF treatment</strong> 
          is rooted in evidence-based practice and personalised care. Dr. Rai and her team follow 
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
          . This ensures your <strong>fertility treatment</strong> is supported by the latest clinical 
          evidence and best practices.
        </p>
      </div>
    </TreatmentTemplate>
  );
}