// app/gynecology/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/gynecology" },
  title: "Gynecology Care in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Comprehensive gynaecological care in Sector 76, Noida — menstrual health, pelvic concerns, hysteroscopy, and laparoscopy with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "gynecology care in Noida, women's health Noida, menstrual health, PCOS treatment, pelvic pain, hysteroscopy, laparoscopy, Dr. Mandavi Rai, Divine IVF, gynaecological consultation, women's health clinic Noida, gynecologist Noida",
  openGraph: {
    title: "Gynecology Care in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Comprehensive gynaecological care with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — menstrual health, pelvic concerns, and procedural care.",
    url: "https://www.divineivf.com/gynecology",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gynaecological consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GynecologyPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/gynecology" },
        { label: "Gynecology" },
      ]}
      eyebrow="Women's Health · Noida"
      titlePlain="Gynaecological care,"
      titleAccent="on its own terms"
      intro="Not every visit is about fertility. General gynaecological care — from menstrual health to pelvic concerns — is offered as its own, complete area of care at Divine IVF. Your health matters, independent of any fertility journey."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Gynaecological consultation with Dr. Mandavi Rai at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Women's health consultation room at Divine IVF Clinic, Noida"
      whatItIs={[
        "Gynaecological care encompasses the full spectrum of women's health — from routine check-ups and menstrual health to the investigation and treatment of pelvic concerns. At Divine IVF, Sector 76, Noida, this care is offered as its own, complete area of practice, independent of any fertility treatment.",
        "Dr. Mandavi Rai brings the same thorough, compassionate approach to general gynaecological care as she does to fertility treatment. Whether you're coming in for a routine check-up, investigating pelvic pain, or managing a condition like PCOS, you'll receive the same careful attention and evidence-based care.",
        "Gynaecological symptoms are often dismissed as 'normal' for far too long. Dr. Rai's approach is to take each concern seriously from the first conversation — whether that leads to simple reassurance, further investigation, or a referral for a specific procedure."
      ]}
      whoNeedsIt={[
        "Women experiencing irregular, heavy, or painful periods that affect daily life",
        "Women with concerns about PCOS/PCOD (Polycystic Ovary Syndrome) or other hormonal conditions",
        "Women with pelvic pain, fibroids, cysts, or endometriosis symptoms",
        "Women seeking routine gynaecological check-ups and preventive care",
        "Women who need hysteroscopy to examine the uterus or treat uterine conditions",
        "Women who need laparoscopy for diagnosis or treatment of pelvic conditions",
        "Women with concerns about menopause or perimenopause symptoms",
        "Women who want a second opinion on their gynaecological health",
        "Women of all ages seeking compassionate, thorough gynaecological care",
      ]}
      preparation={[
        "For your first gynaecological consultation, it's helpful to bring any previous test results, reports, or medical records you may have. This gives Dr. Rai a complete picture from the outset.",
        "If you're coming for a specific concern, think about when it started, what makes it better or worse, and any treatments you've tried before. This information helps Dr. Rai understand your situation more fully.",
        "For certain procedures like hysteroscopy or laparoscopy, specific preparation instructions will be provided in advance. Dr. Rai will explain exactly what to expect and how to prepare.",
        "No referral is needed to book a gynaecological consultation at Divine IVF — you can book directly."
      ]}
      howItWorks={[
        { title: "Initial Consultation", description: "A thorough conversation about your symptoms, medical history, and any concerns you have — taken seriously from the first visit." },
        { title: "Examination & Assessment", description: "A clinical examination and any appropriate investigations to understand what's happening." },
        { title: "Diagnosis & Discussion", description: "Dr. Rai explains what's happening in plain language and discusses your options." },
        { title: "Treatment Planning", description: "A personalised plan is developed — whether that's reassurance, medication, lifestyle changes, or a procedure." },
        { title: "Procedural Care", description: "Where needed, procedures like hysteroscopy or laparoscopy are performed with clear explanation and support." },
        { title: "Ongoing Care", description: "Follow-up and ongoing care to ensure your health is managed effectively over time." },
      ]}
      whatToExpect="A gynaecological consultation with Dr. Rai is a conversation — not a checklist. You'll have time to explain your concerns, ask questions, and understand your options. Dr. Rai explains things in plain language, not medical jargon. If you need further investigation or a procedure, she'll explain exactly what's involved, why it's recommended, and what to expect. You're never rushed into a decision."
      benefits={[
        "Comprehensive gynaecological care independent of fertility treatment — your health matters on its own terms",
        "Same thorough, compassionate approach whether you're here for routine care or a complex concern",
        "Access to advanced diagnostic and treatment procedures — hysteroscopy and laparoscopy",
        "A conversation-first approach that takes your concerns seriously from the first visit",
        "Care for the full spectrum of women's health — menstrual health, pelvic pain, PCOS, and more",
        "Evidence-based practice following the latest clinical guidelines",
        "No referral needed — you can book directly for gynaecological care",
      ]}
      considerations={[
        "Some conditions may require multiple visits or investigations to reach a clear diagnosis",
        "Certain procedures like hysteroscopy or laparoscopy may require a short recovery period",
        "Not all gynaecological concerns require treatment — some may simply need monitoring or reassurance",
        "Your care plan is individualised to your specific situation and preferences",
        "Dr. Rai will explain any risks or side effects of treatments or procedures before you decide",
      ]}
      related={[
        { name: "Hysteroscopy", href: "/hysteroscopy", blurb: "Examining and treating the inside of the uterus — a key diagnostic and treatment procedure." },
        { name: "Laparoscopy", href: "/laparoscopy", blurb: "Minimally invasive assessment and treatment of pelvic conditions." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "Comprehensive fertility evaluation available alongside general gynaecological care." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Fertility treatment available when needed, supported by thorough gynaecological care." },
      ]}
      externalResources={[
        {
          label: "Women's Health and Gynecology",
          source: "American College of Obstetricians and Gynecologists (ACOG)",
          href: "https://www.acog.org/womens-health",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "Polycystic Ovary Syndrome (PCOS)",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/polycystic-ovary-syndrome-pcos/",
        },
      ]}
      faqs={[
        {
          question: "Do I need a fertility concern to book a gynaecology visit?",
          answer:
            "No — general gynaecological care is available independently of any fertility treatment. You can book a consultation for menstrual health, pelvic pain, routine check-ups, or any other gynaecological concern.",
        },
        {
          question: "What should I bring to my first visit?",
          answer:
            "Any previous test results, reports, or medical records you have are helpful — but not required to book an initial consultation. Just bring yourself and your questions.",
        },
        {
          question: "What conditions does Dr. Rai treat in gynaecology?",
          answer:
            "Dr. Rai treats the full spectrum of women's health — including menstrual disorders, PCOS/PCOD, pelvic pain, fibroids, ovarian cysts, endometriosis, and menopausal concerns. She also provides routine check-ups and preventive care.",
        },
        {
          question: "Do I need a referral from another doctor?",
          answer:
            "No — you can book a gynaecological consultation directly without a referral. Dr. Rai welcomes new patients for general gynaecological care.",
        },
        {
          question: "What is hysteroscopy and when is it needed?",
          answer:
            "Hysteroscopy is a procedure where a thin, lighted tube is used to examine the inside of the uterus. It's used to investigate abnormal bleeding, remove fibroids or polyps, or assess uterine health. Dr. Rai will explain if it's appropriate for your situation.",
        },
        {
          question: "What is laparoscopy and when is it needed?",
          answer:
            "Laparoscopy is a minimally invasive procedure where a small camera is inserted through a tiny incision to examine the pelvis. It's used to investigate pelvic pain, endometriosis, or ovarian cysts, and can also be used for treatment. Dr. Rai will explain the procedure and its benefits for your specific case.",
        },
        {
          question: "How quickly can I get an appointment?",
          answer:
            "We aim to offer appointments promptly. Contact the clinic directly for current availability. Dr. Rai understands that gynaecological concerns can be worrying, and we try to see patients as soon as possible.",
        },
        {
          question: "Is gynaecological care at Divine IVF covered by insurance?",
          answer:
            "Coverage varies by insurance provider and policy. We recommend checking with your insurance provider to understand your coverage for gynaecological consultations and procedures. The clinic can provide you with the necessary documentation for claims.",
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
          <strong>Gynaecological care in Noida</strong> at <strong>Divine IVF, Sector 76</strong> 
          offers women a complete, compassionate approach to their health — independent of any 
          <strong>fertility treatment</strong> journey. Dr. Mandavi Rai provides care across the 
          full spectrum of women`s health, from routine check-ups to complex gynaecological conditions.
        </p>

        <p>
          Many women experience gynaecological symptoms for months or even years before seeking 
          help — often because they`ve been told their symptoms are normal or just part of 
          being a woman. Dr. Rai takes a different approach: every concern is taken seriously 
          from the first conversation, whether that leads to simple reassurance, further 
          investigation, or a specific treatment.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Gynaecological examination room at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/pRdWPryJcEFaMajpMv47/image.webp"
              alt="Women's health consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Diagnostic assessment for gynaecological care at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Gynaecological care</strong> at Divine IVF covers a wide range of concerns:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>Menstrual Health</strong> — Irregular, heavy, or painful periods; conditions such as PCOS/PCOD; and hormonal concerns at all stages of life.
          </li>
          <li>
            <strong>Pelvic Health</strong> — Investigation of pelvic pain, fibroids, ovarian cysts, endometriosis, and related concerns.
          </li>
          <li>
            <strong>Preventive Care</strong> — Routine gynaecological check-ups, cervical screening, and preventive health advice.
          </li>
          <li>
            <strong>Procedural Care</strong> — <Link href="/hysteroscopy" className="text-rose-600 font-semibold hover:underline">Hysteroscopy</Link> and <Link href="/laparoscopy" className="text-rose-600 font-semibold hover:underline">laparoscopy</Link> for diagnosis and treatment where needed.
          </li>
        </ul>

        <p>
          When a procedure is needed — such as <strong>hysteroscopy</strong> to examine the 
          uterus or <strong>laparoscopy</strong> to assess the pelvis — Dr. Rai explains the 
          reasoning, the expected process, and what to expect clearly before you decide how 
          to proceed. You`re never rushed into a decision, and you`ll have all the information 
          you need to make an informed choice.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Comprehensive Gynaecological Care at Divine IVF
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Menstrual health assessment and management — irregular, heavy, or painful periods
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              PCOS/PCOD diagnosis and comprehensive management
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Pelvic pain investigation — fibroids, cysts, endometriosis, and more
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hysteroscopy and laparoscopy for diagnosis and treatment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Routine gynaecological check-ups and preventive care
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Menopause and perimenopause care
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, Dr. Rai follows guidelines from 
          leading organisations including the{" "}
          <a
            href="https://www.acog.org/womens-health"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            American College of Obstetricians and Gynecologists (ACOG)
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
            href="https://www.asrm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            American Society for Reproductive Medicine (ASRM)
          </a>
          . This ensures your care is supported by the latest clinical evidence and best practices 
          in women`s health.
        </p>

        <p>
          Whether you`re coming in for a routine check-up, investigating a specific concern, 
          or seeking a second opinion, you`ll find the same thorough, compassionate, and 
          evidence-based care that defines <strong>Divine IVF</strong>. Your health matters 
          — on its own terms, independent of any fertility journey.
        </p>
      </div>
    </TreatmentTemplate>
  );
}