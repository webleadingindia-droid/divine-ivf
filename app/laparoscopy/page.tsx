// app/laparoscopy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/laparoscopy" },
  title: "Laparoscopy in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Diagnostic and operative laparoscopy in Sector 76, Noida — minimally invasive pelvic assessment with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "laparoscopy in Noida, diagnostic laparoscopy, operative laparoscopy, pelvic pain treatment, endometriosis surgery, ovarian cyst removal, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, minimally invasive surgery, gynaecological laparoscopy, blocked fallopian tubes",
  openGraph: {
    title: "Laparoscopy in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Diagnostic and operative laparoscopy with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — minimally invasive pelvic assessment and treatment.",
    url: "https://www.divineivf.com/laparoscopy",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Laparoscopy procedure at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LaparoscopyPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/gynecology" },
        { label: "Laparoscopy" },
      ]}
      eyebrow="Reproductive Procedures · Noida"
      titlePlain="Laparoscopy:"
      titleAccent="minimally invasive assessment"
      intro="A minimally invasive procedure that allows Dr. Rai to directly examine the pelvic organs — ovaries, fallopian tubes and uterus — through small incisions. It can be both diagnostic and operative, allowing treatment during the same procedure."
      heroImage="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Laparoscopy procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Laparoscopy surgical equipment at Divine IVF Clinic, Noida"
      whatItIs={[
        "Laparoscopy is a minimally invasive surgical procedure that uses a thin, lighted telescope called a laparoscope, inserted through a small incision in the abdomen. This allows Dr. Mandavi Rai to directly visualise the pelvic organs — including the ovaries, fallopian tubes, uterus, and surrounding structures — without the larger incision required for open surgery.",
        "Laparoscopy can be performed for two main purposes: diagnostic laparoscopy, to investigate a suspected condition or cause of symptoms; and operative laparoscopy, which allows treatment of findings such as endometriosis, ovarian cysts, or adhesions during the same procedure.",
        "The procedure is performed under general anaesthesia and typically takes 30-60 minutes for diagnostic purposes, or longer if operative treatment is needed. Most patients can go home the same day."
      ]}
      whoNeedsIt={[
        "Women with suspected endometriosis who need visual confirmation and treatment",
        "Women experiencing unexplained pelvic pain that hasn't been explained by other investigations",
        "Women with suspected blocked fallopian tubes where HSG or ultrasound suggests obstruction",
        "Women with ovarian cysts requiring closer assessment or removal",
        "Women with unexplained infertility after initial fertility investigation where pelvic assessment may reveal causes",
        "Women with suspected adhesions (scar tissue) from previous surgeries or infections",
        "Women with fibroids that may benefit from removal (myomectomy)",
        "Women with ectopic pregnancy where laparoscopic treatment may be needed",
        "Women with pelvic inflammatory disease (PID) requiring assessment",
      ]}
      preparation={[
        "Because laparoscopy is performed under general anaesthesia, you'll be given specific fasting instructions ahead of the procedure — typically no food or drink after midnight the night before. A pre-operative assessment will be arranged to confirm you're fit for anaesthesia.",
        "You'll need to arrange for someone to take you home afterward, as you won't be able to drive for 24-48 hours after general anaesthesia. Plan for a quiet day or two immediately following the procedure, depending on what's found and treated.",
        "You may be advised to stop certain medications before the procedure, particularly blood thinners. Dr. Rai will provide specific instructions tailored to your situation.",
        "If you're having the procedure as part of a fertility investigation, its timing relative to your menstrual cycle may be considered. Dr. Rai will advise on the best timing."
      ]}
      howItWorks={[
        { title: "Anaesthesia", description: "The procedure is performed under general anaesthesia, so you'll be asleep and feel nothing during the surgery." },
        { title: "Small Incisions", description: "A small number of tiny incisions (typically 2-4) are made in the abdomen — usually one at the navel and others lower down. The laparoscope is inserted through one incision." },
        { title: "Pelvic Examination", description: "The pelvic organs are examined directly via the laparoscope's high-definition camera, which projects images onto a screen for the surgical team." },
        { title: "Diagnosis & Treatment", description: "Findings are assessed. Where treatment is needed — such as removing endometriosis, cysts, or adhesions — this is performed using specialised instruments through the other small incisions." },
        { title: "Recovery", description: "You're monitored during initial recovery before discharge, typically the same day. Small incisions are closed with dissolvable stitches or surgical glue." },
      ]}
      whatToExpect="Most laparoscopic procedures are same-day or short-stay procedures. After the procedure, you'll be in recovery for 1-2 hours before discharge. Some abdominal discomfort and shoulder-tip pain (from gas used during the procedure) is common for a few days afterward. Most people return to light activity within about a week, though recovery time depends on what was found and treated during the procedure. Dr. Rai will provide specific recovery guidance tailored to your situation."
      benefits={[
        "Smaller incisions and generally faster recovery than open surgery — minimal scarring",
        "Direct visual assessment of the pelvis — the most accurate way to diagnose many pelvic conditions",
        "Can combine diagnosis and treatment in one procedure — no need for a second surgery",
        "Shorter hospital stay — typically same-day discharge",
        "Less post-operative pain and reduced risk of complications compared to open surgery",
        "Can be used to treat endometriosis, remove ovarian cysts, release adhesions, and more",
        "Provides the most definitive assessment of pelvic health for fertility evaluation",
      ]}
      considerations={[
        "Performed under general anaesthesia, with associated standard risks that Dr. Rai will discuss beforehand",
        "Recovery time can vary depending on findings and any treatment performed during the procedure",
        "As with any surgery, involves risks including bleeding, infection, and damage to surrounding structures",
        "Some patients may require open surgery if laparoscopic findings are more complex than expected",
        "Shoulder-tip pain from gas used during the procedure is common and can last a few days",
        "Not every patient with pelvic pain or infertility needs laparoscopy — it's considered selectively",
      ]}
      related={[
        { name: "Hysteroscopy", href: "/hysteroscopy", blurb: "A complementary procedure focused on the uterine cavity — often performed alongside laparoscopy." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "Where laparoscopy often fits into wider fertility evaluation when pelvic assessment is needed." },
        { name: "Gynecology Care", href: "/gynecology", blurb: "General gynaecological care beyond fertility — including pelvic pain and menstrual health." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Fertility treatment where laparoscopy findings may inform the treatment plan." },
      ]}
      externalResources={[
        {
          label: "Laparoscopy for Infertility",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/laparoscopy-for-infertility/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "American College of Obstetricians and Gynecologists",
          source: "ACOG",
          href: "https://www.acog.org/womens-health",
        },
      ]}
      faqs={[
        {
          question: "How long is recovery after laparoscopy?",
          answer:
            "Many patients return to light activity within about a week, though recovery time depends on what was found and treated during the procedure. For diagnostic laparoscopy, recovery is typically quicker. For operative laparoscopy with treatment like endometriosis excision, recovery may take longer. Dr. Rai will provide specific guidance for your situation.",
        },
        {
          question: "Is laparoscopy always needed for unexplained infertility?",
          answer:
            "Not always — laparoscopy is considered based on your specific history and earlier investigation findings. It's typically recommended when other tests suggest pelvic factors may be involved, or when you've had unexplained infertility after initial investigation. Dr. Rai will discuss whether it's appropriate for your situation.",
        },
        {
          question: "Is laparoscopy painful?",
          answer:
            "The procedure is performed under general anaesthesia, so you won't feel anything during surgery. Afterward, you may experience some abdominal discomfort and shoulder-tip pain (from gas used during the procedure) for a few days. Pain medication is provided to manage discomfort.",
        },
        {
          question: "What can laparoscopy diagnose?",
          answer:
            "Laparoscopy can diagnose endometriosis, adhesions (scar tissue), ovarian cysts, blocked fallopian tubes, fibroids, pelvic inflammatory disease (PID), and other pelvic conditions. It provides the most direct and accurate visual assessment of the pelvic organs.",
        },
        {
          question: "Can endometriosis be treated during laparoscopy?",
          answer:
            "Yes — endometriosis can be treated during operative laparoscopy. The endometriosis tissue can be removed (excised) or destroyed (ablated) using specialised instruments. This can significantly improve symptoms and may also improve fertility outcomes.",
        },
        {
          question: "How many incisions are made during laparoscopy?",
          answer:
            "Typically 2-4 small incisions are made, each about 0.5-1 cm in length. One incision at the navel is used for the laparoscope, and additional incisions are used for surgical instruments. The small size of the incisions means minimal scarring and faster recovery.",
        },
        {
          question: "Can I get pregnant after laparoscopy?",
          answer:
            "Many women go on to conceive after laparoscopy, particularly when endometriosis, adhesions, or other treatable conditions are addressed. The procedure can improve fertility by removing factors that may be affecting conception. However, results depend on the specific findings and your overall fertility situation.",
        },
        {
          question: "What is the difference between laparoscopy and hysteroscopy?",
          answer:
            "Laparoscopy examines the outside of the uterus and other pelvic organs (ovaries, fallopian tubes) through small incisions in the abdomen. Hysteroscopy examines the inside of the uterus through the cervix. They are complementary procedures and are often performed together for a complete pelvic assessment.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/yMbo9dEMxWHZX8fe6bdw/image.png"
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
          <strong>Laparoscopy in Noida</strong> is offered at <strong>Divine IVF, Sector 76</strong> 
          as a minimally invasive approach to diagnosing and treating pelvic conditions. 
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> performs this procedure to assess pelvic health, investigate 
          causes of pain or infertility, and treat conditions like endometriosis, ovarian 
          cysts, and adhesions.
        </p>

        <p>
          <strong>Laparoscopy</strong> is often described as the gold standard for diagnosing 
          conditions like endometriosis because it allows direct visualisation of the pelvic 
          organs — unlike scans or blood tests, which can only suggest the presence of a 
          condition. The high-definition camera provides clear, detailed images that can 
          reveal abnormalities that might otherwise go undetected.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Laparoscopy surgical preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Consultation for laparoscopy with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Post-laparoscopy recovery at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Laparoscopy</strong> is particularly valuable in fertility investigation 
          because it can identify and treat conditions that may be affecting conception:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>Endometriosis</strong> — Identified and treated during the same procedure, potentially improving fertility outcomes
          </li>
          <li>
            <strong>Adhesions (scar tissue)</strong> — Released to restore normal pelvic anatomy and improve tubal function
          </li>
          <li>
            <strong>Ovarian cysts</strong> — Assessed and removed if necessary
          </li>
          <li>
            <strong>Blocked fallopian tubes</strong> — Assessed directly, with treatment possible in some cases
          </li>
          <li>
            <strong>Fibroids</strong> — Assessed and sometimes removed (myomectomy)
          </li>
        </ul>

        <p>
          The decision to recommend <strong>laparoscopy</strong> is made carefully, based on 
          your specific history and investigation findings. Dr. Rai will explain the rationale, 
          what the procedure involves, and what you can expect — giving you all the information 
          you need to make an informed decision.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Conditions Diagnosed and Treated with Laparoscopy
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Endometriosis — diagnosis and excision or ablation
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Pelvic adhesions — release of scar tissue
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ovarian cysts — assessment and removal
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Blocked fallopian tubes — assessment and possible treatment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fibroids — assessment and removal (myomectomy)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Pelvic inflammatory disease (PID) — assessment and treatment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ectopic pregnancy — treatment
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, <strong>laparoscopy</strong> is 
          performed with the highest standards of safety and care. Dr. Rai follows guidelines 
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
            href="https://www.acog.org/womens-health"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            American College of Obstetricians and Gynecologists (ACOG)
          </a>
          . This ensures your care is supported by the latest clinical evidence and best 
          practices in minimally invasive surgery.
        </p>

        <p>
          Whether you`re having <strong>laparoscopy</strong> as part of a <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link>, for pelvic pain assessment, or for treatment of a 
          specific condition, you can expect the same thorough, compassionate, and 
          evidence-based care that defines <strong>Divine IVF</strong>.
        </p>
      </div>
    </TreatmentTemplate>
  );
}