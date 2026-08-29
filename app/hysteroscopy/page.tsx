// app/hysteroscopy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/hysteroscopy" },
  title: "Hysteroscopy in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Diagnostic and operative hysteroscopy in Sector 76, Noida — examining and treating the inside of the uterus with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "hysteroscopy in Noida, diagnostic hysteroscopy, operative hysteroscopy, uterine polyps, uterine fibroids, uterine adhesions, abnormal uterine bleeding, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, uterine cavity examination, hysteroscopy procedure",
  openGraph: {
    title: "Hysteroscopy in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Diagnostic and operative hysteroscopy with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — examining and treating the inside of the uterus.",
    url: "https://www.divineivf.com/hysteroscopy",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hysteroscopy procedure at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function HysteroscopyPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/gynecology" },
        { label: "Hysteroscopy" },
      ]}
      eyebrow="Reproductive Procedures · Noida"
      titlePlain="Hysteroscopy:"
      titleAccent="a closer look inside"
      intro="A procedure that lets Dr. Rai examine — and where needed, treat — the inside of the uterus using a thin, lighted instrument. This direct visualisation provides the most accurate assessment of the uterine cavity."
      heroImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Hysteroscopy procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Hysteroscopy surgical equipment at Divine IVF Clinic, Noida"
      whatItIs={[
        "Hysteroscopy is a procedure that uses a thin, lighted telescope-like instrument called a hysteroscope, which is passed through the cervix to directly examine the inside of the uterus. This allows Dr. Mandavi Rai to see the uterine cavity in detail — including the endometrial lining, the opening of the fallopian tubes, and any abnormalities within the uterus.",
        "Hysteroscopy can be performed for two main purposes: diagnostic hysteroscopy, simply to look and assess the uterine cavity; and operative hysteroscopy, which allows certain findings to be treated during the same procedure — such as removing polyps, fibroids, or adhesions (scar tissue).",
        "The procedure is typically performed as an outpatient procedure. Diagnostic hysteroscopy is usually quick and well-tolerated, while operative hysteroscopy may take longer and may involve sedation or anaesthesia depending on the complexity."
      ]}
      whoNeedsIt={[
        "Women experiencing abnormal uterine bleeding — including heavy, prolonged, or irregular bleeding",
        "Women with suspected polyps, fibroids, or adhesions within the uterine cavity",
        "Investigation before fertility treatment, particularly when recurrent implantation failure has occurred",
        "Follow-up after a previous abnormal ultrasound finding of the uterus",
        "Women with suspected uterine septum or other congenital uterine abnormalities",
        "Women with recurrent miscarriage where uterine factors may be involved",
        "Evaluation of the uterine cavity before IVF or embryo transfer",
        "Removal of retained products of conception after miscarriage or delivery",
        "Investigation of endometrial pathology in women with abnormal bleeding",
      ]}
      preparation={[
        "Diagnostic hysteroscopy is often scheduled for a specific point in your cycle, usually shortly after your period ends (days 5-10 of your cycle), when the uterine lining is thinnest and easiest to assess.",
        "If operative hysteroscopy with sedation or anaesthesia is planned, you'll be given fasting instructions beforehand (typically no food or drink after midnight) and should arrange for someone to accompany you home afterward.",
        "You may be advised to take pain relief medication before the procedure, depending on the type of hysteroscopy being performed. Dr. Rai will provide specific instructions.",
        "If you're having the procedure as part of a fertility investigation, its timing relative to your treatment plan will be coordinated. Dr. Rai will advise on the best timing."
      ]}
      howItWorks={[
        { title: "Preparation", description: "You'll be advised on timing relative to your cycle, and any preparation needed. For operative hysteroscopy, fasting instructions will be given." },
        { title: "Insertion", description: "The hysteroscope is gently passed through the cervix into the uterine cavity. A small amount of fluid or gas is used to expand the uterus for better visualisation." },
        { title: "Examination", description: "The uterine lining is examined directly via the attached camera, which projects high-definition images onto a screen for the surgical team." },
        { title: "Treatment (if needed)", description: "Certain findings, such as polyps, fibroids, or adhesions, can often be treated during the same procedure using specialised instruments passed through the hysteroscope." },
        { title: "Recovery", description: "You're monitored during initial recovery. Diagnostic hysteroscopy is typically same-day discharge; operative hysteroscopy may require a short observation period." },
      ]}
      whatToExpect="Diagnostic hysteroscopy is often a quick outpatient procedure lasting about 5-15 minutes. It's usually well-tolerated with mild cramping similar to period pain. Operative hysteroscopy may take longer (20-60 minutes or more depending on complexity) and, depending on the extent of treatment, may involve sedation or general anaesthesia. Mild cramping and light spotting afterward are common for a few days. Most patients can return to normal activity within a day or two, though this depends on what was found and treated."
      benefits={[
        "Direct visual assessment of the uterine cavity — the most accurate way to evaluate uterine health",
        "Can combine diagnosis and treatment in a single procedure — no need for a second procedure",
        "Minimally invasive — no incisions, performed through the natural opening of the cervix",
        "A valuable step in fertility investigation for suitable cases, especially recurrent implantation failure",
        "Can remove polyps, fibroids, and adhesions that may be affecting fertility or causing symptoms",
        "Provides definitive diagnosis of uterine abnormalities that may not be visible on ultrasound",
        "Quick recovery compared to more invasive surgical procedures",
      ]}
      considerations={[
        "As with any procedure, involves standard procedural risks that Dr. Rai will explain beforehand — including bleeding, infection, and perforation (rare)",
        "Some findings may require a separate, more extensive follow-up procedure if they can't be treated during the initial hysteroscopy",
        "Timing within your cycle may affect scheduling — diagnostic hysteroscopy is typically performed in the proliferative phase",
        "Mild cramping and spotting are common afterward — normal activities can usually resume within 1-2 days",
        "Operative hysteroscopy may require sedation or anaesthesia, with associated considerations",
        "Not all uterine conditions can be treated through hysteroscopy — some may require alternative approaches",
      ]}
      related={[
        { name: "Laparoscopy", href: "/laparoscopy", blurb: "A complementary procedure to assess the pelvis more broadly — often performed alongside hysteroscopy for complete pelvic evaluation." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "Where hysteroscopy often fits into the wider evaluation of fertility — assessing the uterine cavity." },
        { name: "Gynecology Care", href: "/gynecology", blurb: "General gynaecological care beyond fertility — including menstrual health and pelvic concerns." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Fertility treatment where hysteroscopy findings may inform the treatment plan and timing." },
      ]}
      externalResources={[
        {
          label: "Hysteroscopy",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/hysteroscopy/",
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
          question: "Is hysteroscopy painful?",
          answer:
            "Diagnostic hysteroscopy is usually well-tolerated, sometimes with mild cramping similar to period pain. Operative procedures may involve sedation or anaesthesia for comfort, depending on the complexity. Dr. Rai will discuss pain management options with you before the procedure.",
        },
        {
          question: "How soon can I return to normal activity?",
          answer:
            "Many patients resume normal activity within a day or two, though this can vary depending on what was found and treated. You may have some mild cramping and spotting for a few days. Dr. Rai will provide specific recovery guidance based on your procedure.",
        },
        {
          question: "What conditions can hysteroscopy diagnose?",
          answer:
            "Hysteroscopy can diagnose uterine polyps, fibroids (submucosal), adhesions (scar tissue), uterine septum, endometrial hyperplasia, and other abnormalities of the uterine cavity. It can also assess the opening of the fallopian tubes.",
        },
        {
          question: "Can hysteroscopy be used for treatment?",
          answer:
            "Yes — operative hysteroscopy allows treatment of conditions such as polyps, fibroids, and adhesions during the same procedure. The treatment is performed using specialised instruments passed through the hysteroscope.",
        },
        {
          question: "Is hysteroscopy necessary before IVF?",
          answer:
            "Not always — but it's often recommended when there's a suspicion of uterine abnormalities, when previous transfers have failed, or when ultrasound findings suggest potential issues. Dr. Rai will discuss whether hysteroscopy is appropriate for your specific situation.",
        },
        {
          question: "What is the difference between diagnostic and operative hysteroscopy?",
          answer:
            "Diagnostic hysteroscopy is performed simply to look at the uterine cavity and assess its condition. Operative hysteroscopy allows treatment of findings during the same procedure — such as removing polyps, fibroids, or adhesions. Operative hysteroscopy typically takes longer and may involve sedation or anaesthesia.",
        },
        {
          question: "How long does hysteroscopy take?",
          answer:
            "Diagnostic hysteroscopy typically takes 5-15 minutes. Operative hysteroscopy may take longer, typically 20-60 minutes or more depending on the complexity of the treatment being performed.",
        },
        {
          question: "What are the risks of hysteroscopy?",
          answer:
            "Hysteroscopy is generally a safe procedure. As with any procedure, there are standard risks including bleeding, infection, and perforation of the uterus (rare). Dr. Rai will explain the specific risks for your situation and answer any questions you have before the procedure.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
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
          <strong>Hysteroscopy in Noida</strong> is offered at <strong>Divine IVF, Sector 76</strong> 
          as a minimally invasive procedure for examining and treating the inside of the uterus. 
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> performs this procedure to assess uterine health, investigate 
          abnormal bleeding, and treat conditions that may be affecting fertility or reproductive 
          health.
        </p>

        <p>
          <strong>Hysteroscopy</strong> is often described as the gold standard for evaluating 
          the uterine cavity because it provides direct visualisation — unlike ultrasound or 
          HSG, which can only suggest the presence of abnormalities. The high-definition camera 
          provides clear, detailed images that can reveal polyps, fibroids, adhesions, and other 
          conditions that might otherwise go undetected.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Hysteroscopy preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/pRdWPryJcEFaMajpMv47/image.webp"
              alt="Consultation for hysteroscopy with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Uterine cavity assessment for hysteroscopy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Hysteroscopy</strong> is particularly valuable in fertility investigation 
          because it can identify and treat conditions that may be affecting implantation:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>Uterine Polyps</strong> — Small growths in the uterine lining that can interfere with implantation
          </li>
          <li>
            <strong>Submucosal Fibroids</strong> — Fibroids that bulge into the uterine cavity, affecting the uterine environment
          </li>
          <li>
            <strong>Uterine Adhesions</strong> — Scar tissue (Asherman`s syndrome) that can reduce the uterine cavity
          </li>
          <li>
            <strong>Uterine Septum</strong> — A congenital abnormality dividing the uterine cavity
          </li>
          <li>
            <strong>Endometrial Inflammation</strong> — Chronic inflammation that may affect receptivity
          </li>
        </ul>

        <p>
          The decision to recommend <strong>hysteroscopy</strong> is made carefully, based on 
          your specific history and investigation findings. Dr. Rai will explain the rationale, 
          what the procedure involves, and what you can expect — giving you all the information 
          you need to make an informed decision.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Conditions Diagnosed and Treated with Hysteroscopy
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Uterine polyps — removal (polypectomy)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Submucosal fibroids — removal (myomectomy)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Uterine adhesions — release (adhesiolysis)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Uterine septum — resection
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Abnormal uterine bleeding — diagnosis and treatment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Retained products of conception — removal
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Endometrial biopsy — tissue sampling for pathology
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, <strong>hysteroscopy</strong> is 
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
          practices in uterine health.
        </p>

        <p>
          Whether you`re having <strong>hysteroscopy</strong> as part of a <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link>, for abnormal bleeding assessment, or for treatment of 
          a specific uterine condition, you can expect the same thorough, compassionate, and 
          evidence-based care that defines <strong>Divine IVF</strong>.
        </p>
      </div>
    </TreatmentTemplate>
  );
}