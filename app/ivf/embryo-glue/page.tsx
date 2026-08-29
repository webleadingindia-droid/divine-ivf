// app/ivf/embryo-glue/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/ivf/embryo-glue" },
  title: "Embryo Glue in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Embryo Glue transfer support in Sector 76, Noida — a specialised transfer medium with Dr. Mandavi Rai at Divine IVF. Learn about Embryo Glue and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "Embryo Glue in Noida, embryo transfer support, hyaluronan transfer medium, IVF embryo glue, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, embryo transfer success, implantation support, advanced IVF, embryo culture medium",
  openGraph: {
    title: "Embryo Glue in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Embryo Glue transfer support with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — supporting embryo transfer with a specialised medium.",
    url: "https://www.divineivf.com/ivf/embryo-glue",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Embryo Glue transfer preparation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function EmbryoGluePage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf" },
        { label: "Embryo Glue" },
      ]}
      eyebrow="Advanced IVF · Transfer Support"
      titlePlain="Embryo Glue:"
      titleAccent="supporting the transfer"
      intro="A specialised transfer medium, sometimes used during embryo transfer, formulated to more closely resemble the natural uterine environment — potentially improving implantation outcomes in select cases."
      heroImage="https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Embryo Glue transfer preparation at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Embryo transfer medium preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "Embryo Glue is a specialised transfer medium containing hyaluronan (also known as hyaluronic acid), a substance naturally present in the uterine cavity and in the female reproductive tract. It is used in place of standard culture medium at the point of embryo transfer.",
        "The aim of Embryo Glue is to create a more supportive environment for the embryo during the critical moments around transfer. Hyaluronan is believed to play a role in implantation by helping the embryo attach to the uterine lining and by providing a viscous, protective environment that reduces mechanical stress during the transfer procedure.",
        "Developed by Vitrolife, a leading company in reproductive health, Embryo Glue has been used in IVF clinics worldwide. However, its use is considered on a case-by-case basis rather than as a routine default for every patient."
      ]}
      whoNeedsIt={[
        "Patients who have had previous transfer cycles without expected results or implantation failure",
        "As an adjunct considered alongside other transfer-support decisions and strategies",
        "Patients who have a limited number of embryos and want to maximise each transfer",
        "Women with a history of difficult transfers where a more viscous medium may be beneficial",
        "Cases where the transfer procedure is expected to be challenging (e.g., difficult cervical access)",
        "Discussed individually rather than used as a routine default for all patients",
        "Patients who have had previous IVF failures with good-quality embryos",
      ]}
      preparation={[
        "No separate preparation is required for Embryo Glue — the decision to use it is made ahead of your transfer day as part of planning the specifics of that procedure. It doesn't change how you prepare for transfer otherwise.",
        "Your regular transfer preparation — including hormonal medication, timing, and any other recommendations — remains exactly the same. The only difference is the medium used to suspend the embryo during transfer.",
        "Dr. Rai will discuss the decision to use Embryo Glue with you during your pre-transfer consultation, explaining why it may be beneficial in your specific case and what to expect."
      ]}
      howItWorks={[
        { title: "Embryo Selection", description: "The chosen embryo(s) are selected for transfer based on quality and development, just like in a standard transfer." },
        { title: "Medium Preparation", description: "The Embryo Glue medium is warmed to body temperature and prepared in the lab, replacing the standard culture medium." },
        { title: "Embryo Loading", description: "The embryo is carefully loaded into the transfer catheter with the Embryo Glue medium, just like a standard transfer but with the specialised medium." },
        { title: "Embryo Transfer", description: "The embryo is transferred into the uterus in the usual way — a quick, generally painless procedure typically without sedation." },
        { title: "Post-Transfer", description: "The hyaluronan in the Embryo Glue helps create a supportive environment during the critical moments after transfer." },
      ]}
      whatToExpect="Using Embryo Glue does not change the transfer procedure itself — it remains a quick, generally painless process, typically without sedation. You won't feel any difference during the procedure, as the change happens in the lab where the embryo is loaded into the transfer catheter. The only noticeable difference is a slightly more viscous transfer medium. Dr. Rai and the embryology team will ensure the transfer is performed with the same care and precision as always."
      benefits={[
        "Designed to more closely mimic the natural uterine environment, supporting embryo attachment",
        "Contains hyaluronan, a substance naturally present in the uterine cavity",
        "Does not add any extra procedural step or discomfort for the patient",
        "May improve implantation rates in selected patient populations",
        "Provides a more viscous medium that may reduce mechanical stress on the embryo during transfer",
        "Can be considered alongside other individualised transfer decisions",
        "No additional time required beyond the standard transfer procedure",
      ]}
      considerations={[
        "Evidence and suitability vary by individual case — not all patients benefit equally",
        "Not a substitute for addressing other underlying fertility factors — it's a supportive option, not a solution for all causes of implantation failure",
        "Discussed as one option among several, not a guaranteed solution for implantation",
        "The evidence for Embryo Glue is strongest in specific patient populations, not universally",
        "Adds a modest cost to the transfer procedure",
        "Should be considered as part of a comprehensive transfer strategy, not in isolation",
      ]}
      related={[
        { name: "ERA Test", href: "/ivf/era", blurb: "Assessing transfer timing alongside transfer-support decisions like Embryo Glue." },
        { name: "Intralipid Therapy", href: "/ivf/intralipid", blurb: "Another adjunct therapy sometimes considered in select cases alongside Embryo Glue." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The overall fertility treatment that Embryo Glue supports within." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The comprehensive evaluation that helps determine if transfer-support options are appropriate." },
      ]}
      externalResources={[
        {
          label: "Embryo Transfer and Embryo Glue",
          source: "Vitrolife",
          href: "https://www.vitrolife.com/products/embryo-glue/",
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
          question: "Is Embryo Glue used in every transfer?",
          answer:
            "No — its use is discussed individually and isn't a routine default for every patient. Embryo Glue is considered on a case-by-case basis based on your history, previous outcomes, and specific circumstances. Dr. Rai will discuss whether it's appropriate for your transfer.",
        },
        {
          question: "Does Embryo Glue guarantee implantation?",
          answer:
            "No adjunct can guarantee implantation — Embryo Glue is one supportive option considered as part of your overall plan. Success depends on multiple factors including embryo quality, uterine receptivity, and overall health. However, for select patients, it may improve the chances of implantation.",
        },
        {
          question: "What is hyaluronan and why is it used in Embryo Glue?",
          answer:
            "Hyaluronan (hyaluronic acid) is a substance naturally present in the uterine cavity and female reproductive tract. It's believed to play a role in implantation by helping the embryo attach to the uterine lining and by creating a viscous, protective environment that reduces mechanical stress during transfer.",
        },
        {
          question: "Does Embryo Glue change the transfer procedure?",
          answer:
            "No — the transfer procedure remains exactly the same. The only difference is the medium used to suspend the embryo during transfer. You won't feel any difference during the procedure, as the change happens in the lab.",
        },
        {
          question: "Is there any downside to using Embryo Glue?",
          answer:
            "Embryo Glue is generally considered safe with minimal downside. The primary considerations are that it adds a modest cost to the transfer procedure, and the evidence for benefit varies by individual case. It should be considered as part of a comprehensive transfer strategy, not in isolation.",
        },
        {
          question: "What evidence supports the use of Embryo Glue?",
          answer:
            "Several studies have shown that Embryo Glue may improve implantation and pregnancy rates in select patient populations. However, the evidence is strongest for specific groups, and not all studies show a benefit. Dr. Rai can discuss the evidence as it applies to your specific situation.",
        },
        {
          question: "Can Embryo Glue be combined with other transfer-support options?",
          answer:
            "Yes, Embryo Glue can be combined with other transfer-support options such as ERA testing, intralipid therapy, or other adjuncts. The combination of approaches is discussed individually based on your history and specific needs. Dr. Rai will develop a comprehensive transfer strategy for your case.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo Glue transfer medium preparation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1611688457537-89fed1a869f5?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo transfer preparation with Embryo Glue at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>Embryo Glue in Noida</strong> is offered at <strong>Divine IVF, Sector 76</strong> 
          as a supportive option for patients undergoing <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">
          IVF treatment</Link>. This specialised transfer medium, containing hyaluronan, is designed 
          to more closely mimic the natural uterine environment during the critical moments 
          surrounding embryo transfer.
        </p>

        <p>
          The concept behind <strong>Embryo Glue</strong> is based on understanding the natural 
          process of implantation. In the body, hyaluronan (a substance naturally present in the 
          uterine cavity) plays a role in helping the embryo attach to the uterine lining. 
          <strong>Embryo Glue</strong> provides a concentrated dose of hyaluronan at the exact 
          moment of transfer, potentially supporting the embryo`s ability to implant.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo transfer catheter loading with Embryo Glue at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo Glue consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Embryo transfer procedure with Embryo Glue at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          The decision to use <strong>Embryo Glue</strong> is typically based on a combination 
          of factors including previous transfer outcomes, embryo quality, and individual 
          circumstances. It is often considered for patients who have had previous transfer 
          cycles without expected results, or as part of a comprehensive strategy to maximise 
          the chances of success with a limited number of embryos.
        </p>

        <p>
          One of the advantages of <strong>Embryo Glue</strong> is that it adds no extra 
          procedural step or discomfort for the patient. The transfer procedure remains exactly 
          the same — quick, generally painless, and typically without sedation. The only 
          difference is the medium used to suspend the embryo during transfer.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            How Embryo Glue May Support Implantation
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Contains hyaluronan, a substance naturally present in the uterine cavity
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Helps create a more supportive environment during the critical moments around transfer
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              May reduce mechanical stress on the embryo during the transfer procedure
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Provides a more viscous medium that mimics the natural uterine environment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              May support embryo attachment to the uterine lining
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>Embryo Glue</strong> 
          is evidence-based and personalised. Dr. Rai ensures that this supportive option is 
          considered as part of a comprehensive transfer strategy — never as a guaranteed 
          solution, and always in the context of your overall <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> and treatment plan.
        </p>

        <p>
          <strong>Embryo Glue</strong> was developed by Vitrolife, a leading company in reproductive 
          health, and has been used in IVF clinics worldwide. Its use is supported by research 
          from leading organisations including the{" "}
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
          . This ensures your <strong>fertility treatment</strong> is supported by the latest 
          clinical evidence and best practices in transfer support.
        </p>
      </div>
    </TreatmentTemplate>
  );
}