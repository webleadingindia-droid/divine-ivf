// app/hysteroscopy-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/hysteroscopy-in-noida" },
  title: "Hysteroscopy in Noida | Diagnostic & Operative Hysteroscopy | Divine IVF",
  description:
    "Explore hysteroscopy in Noida for uterine polyps, fibroids, adhesions, abnormal bleeding and selected fertility concerns. Consult Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "Hysteroscopy in Noida, Diagnostic Hysteroscopy in Noida, Operative Hysteroscopy in Noida, Hysteroscopic Surgery in Noida, Hysteroscopy for Infertility in Noida, Hysteroscopy Before IVF in Noida, Hysteroscopy After Failed IVF, Hysteroscopy for Recurrent Miscarriage, Hysteroscopy for Polyps in Noida, Hysteroscopic Polyp Removal in Noida, Hysteroscopy for Fibroids in Noida, Hysteroscopic Fibroid Removal in Noida, Hysteroscopy for Uterine Adhesions, Asherman Syndrome Treatment in Noida, Hysteroscopy for Uterine Septum, Uterine Cavity Evaluation in Noida, Uterus Test for Infertility in Noida, Hysteroscopy for Abnormal Bleeding, Hysteroscopy Cost in Noida, Gynaecologist in Noida, Fertility Specialist in Noida, IVF Treatment in Noida",
  openGraph: {
    title: "Hysteroscopy in Noida | Diagnostic & Operative Hysteroscopy | Divine IVF",
    description:
      "Learn about hysteroscopy in Noida for uterine polyps, fibroids, adhesions, abnormal bleeding and selected fertility-related uterine conditions.",
    url: "http://divine-ivf.vercel.app/hysteroscopy-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/WxsmNpRZzEtnYzB4IjWL/image.png",
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
        { label: "Women's Health", href: "/gynaecological-care-in-noida" },
        { label: "Hysteroscopy in Noida" },
      ]}
      eyebrow="Reproductive Procedures · Minimally Invasive · Noida"
      // ========== H1 ==========
      titlePlain="Hysteroscopy in Noida"
      titleAccent="A closer look inside the uterus for selected fertility and gynaecological concerns"
      // =========================
      intro="Hysteroscopy is a minimally invasive procedure that allows a gynaecologist to directly examine the inside of the uterus using a thin camera called a hysteroscope."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/WxsmNpRZzEtnYzB4IjWL/image.png"
      heroAlt="Hysteroscopy procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Hysteroscopy surgical equipment at Divine IVF Clinic, Noida"
      whatItIs={[
        "Hysteroscopy is a procedure used to examine the inside of the uterus. A thin, lighted telescope-like device called a hysteroscope is passed through the vagina, the cervix, and into the uterine cavity. No abdominal incision is required.",
        "The hysteroscope allows the doctor to directly inspect the uterine lining and cavity. Depending on the indication, hysteroscopy can be diagnostic (to look inside the uterus and identify abnormalities) or operative (when treatment is performed through the hysteroscope).",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised gynaecological and fertility assessment to determine whether hysteroscopy is clinically indicated. Not every infertility patient requires hysteroscopy. Less-invasive investigations are often used first unless there is a specific reason to directly examine or treat the uterine cavity.",
      ]}
      whoNeedsIt={[
        "Women with abnormal uterine bleeding — heavy, prolonged, irregular, or post-menopausal bleeding",
        "Women with suspected uterine polyps, submucosal fibroids, or intrauterine adhesions",
        "Women with recurrent pregnancy loss where uterine factors may be involved",
        "Women with suspected uterine septum or other congenital uterine abnormalities",
        "Women with repeated implantation failure or unexplained IVF failure",
        "Women with retained products of conception after miscarriage or delivery",
        "Women with suspected endometrial pathology requiring biopsy",
        "Women with abnormal ultrasound findings requiring direct visualisation",
      ]}
      preparation={[
        "Before hysteroscopy, the doctor reviews symptoms, fertility history, menstrual history, ultrasound findings, previous surgery, pregnancy history, and current medicines.",
        "Hysteroscopy is usually planned when the uterine lining can be assessed clearly. The timing depends on the menstrual cycle, clinical indication, pregnancy possibility, and procedure type.",
        "Diagnostic hysteroscopy is often scheduled for a specific point in your cycle, usually shortly after your period ends (days 5-10), when the uterine lining is thinnest and easiest to assess.",
        "If operative hysteroscopy with sedation or anaesthesia is planned, you'll be given fasting instructions beforehand (typically no food or drink after midnight) and should arrange for someone to accompany you home afterward.",
      ]}
      howItWorks={[
        { title: "Step 1 – Consultation and Evaluation", description: "Before hysteroscopy, the doctor reviews symptoms, fertility history, menstrual history, ultrasound findings, previous surgery, pregnancy history, and current medicines." },
        { title: "Step 2 – Timing of the Procedure", description: "Hysteroscopy is usually planned when the uterine lining can be assessed clearly. The timing depends on the menstrual cycle, clinical indication, pregnancy possibility, and procedure type." },
        { title: "Step 3 – Pain Relief or Anaesthesia", description: "Depending on whether hysteroscopy is diagnostic or operative, pain-management options may include oral medication, local anaesthesia, sedation, or general anaesthesia. Not every hysteroscopy requires general anaesthesia." },
        { title: "Step 4 – Hysteroscope Insertion", description: "The hysteroscope is passed through the vagina and cervix into the uterus. No abdominal incision is needed." },
        { title: "Step 5 – Uterine Cavity Expansion", description: "Fluid, commonly saline, may be introduced into the uterine cavity. This gently expands the cavity so the lining and internal structures can be seen more clearly." },
        { title: "Step 6 – Direct Examination", description: "The doctor examines the uterine lining, cavity shape, polyps, fibroids, adhesions, and other abnormalities." },
        { title: "Step 7 – Treatment if Required", description: "If operative hysteroscopy is planned, small instruments may be passed through the hysteroscope to remove polyps, treat selected fibroids, divide adhesions, obtain tissue samples, or treat certain structural abnormalities." },
        { title: "Step 8 – Completion and Recovery", description: "After the procedure, the hysteroscope is removed. Many patients can return home the same day, depending on the procedure and anaesthesia used." },
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
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "General gynaecological care beyond fertility — including menstrual health and pelvic concerns." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "Where hysteroscopy often fits into the wider evaluation of fertility — assessing the uterine cavity." },
        { name: "Laparoscopy", href: "/laparoscopy", blurb: "A complementary procedure to assess the pelvis more broadly — often performed alongside hysteroscopy." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "Fertility treatment where hysteroscopy findings may inform the treatment plan and timing." },
        { name: "Embryo Transfer", href: "/embryo-transfer", blurb: "The procedure for which a normal uterine cavity is important for implantation." },
        { name: "Recurrent Pregnancy Loss", href: "/recurrent-pregnancy-loss", blurb: "Evaluation of uterine factors in recurrent miscarriage." },
        { name: "Fibroid Treatment", href: "/fibroid-treatment", blurb: "Treatment options for uterine fibroids including hysteroscopic removal." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your gynaecologist and fertility specialist at Divine IVF, Noida." },
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
          question: "What is hysteroscopy?",
          answer:
            "Hysteroscopy is a procedure in which a thin camera is passed through the vagina and cervix to examine the inside of the uterus.",
        },
        {
          question: "Is hysteroscopy a surgery?",
          answer:
            "Diagnostic hysteroscopy is a minimally invasive procedure. Operative hysteroscopy may involve surgical treatment inside the uterine cavity.",
        },
        {
          question: "Does hysteroscopy require an abdominal incision?",
          answer:
            "No.",
        },
        {
          question: "Why is hysteroscopy used for infertility?",
          answer:
            "It may identify uterine abnormalities such as polyps, submucosal fibroids, adhesions or septum that could affect implantation or pregnancy.",
        },
        {
          question: "Is hysteroscopy required before every IVF cycle?",
          answer:
            "No. It is usually considered only when there is a specific clinical indication.",
        },
        {
          question: "Can hysteroscopy remove polyps?",
          answer:
            "Yes, selected uterine polyps can often be removed hysteroscopically.",
        },
        {
          question: "Can hysteroscopy remove fibroids?",
          answer:
            "Selected submucosal fibroids projecting into the uterine cavity may be treated through hysteroscopy.",
        },
        {
          question: "Can hysteroscopy treat adhesions?",
          answer:
            "Yes. Intrauterine adhesions may be divided hysteroscopically in selected cases.",
        },
        {
          question: "Is hysteroscopy used for recurrent miscarriage?",
          answer:
            "It may be useful when a uterine cavity abnormality is suspected as part of recurrent pregnancy-loss evaluation.",
        },
        {
          question: "Is hysteroscopy painful?",
          answer:
            "Some patients experience cramping or discomfort. Pain-relief options depend on whether the procedure is diagnostic or operative.",
        },
        {
          question: "Is anaesthesia required?",
          answer:
            "Not always. Some diagnostic procedures can be performed with minimal pain relief, while operative hysteroscopy may require sedation or general anaesthesia.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Recovery is usually short after diagnostic hysteroscopy. Operative procedures may require more recovery time.",
        },
        {
          question: "Can I go home the same day?",
          answer:
            "Many hysteroscopies are day-care procedures.",
        },
        {
          question: "Does hysteroscopy improve IVF success?",
          answer:
            "It may help if a treatable uterine cavity abnormality is present, but hysteroscopy itself does not guarantee IVF success.",
        },
        {
          question: "What is the cost of hysteroscopy  ",
          answer:
            "Cost varies depending on whether the procedure is diagnostic or operative and whether treatment such as polyp, fibroid or adhesion removal is required.",
        },
        {
          question: "Where can I discuss hysteroscopy  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for personalised uterine, gynaecological and fertility evaluation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Hysteroscopy in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          A closer look inside the uterus for selected fertility and gynaecological concerns at Divine IVF, Sector 76, Noida.
        </p>
        {/* ============================================= */}

        {/* Clinic Info & CTA */}
        <div className="bg-gradient-to-r from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-ink-600 text-sm">
                📍 Sector 76, Noida, Uttar Pradesh
              </p>
              <p className="text-ink-600 text-sm">
                📞 Call: <a href="tel:+917678451808" className="text-rose-600 font-semibold hover:underline">+91 7678451808</a>
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-rose-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-rose-700 transition-colors text-center whitespace-nowrap"
            >
              Book Hysteroscopy Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for hysteroscopy evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for uterine assessment before hysteroscopy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Hysteroscopy Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Hysteroscopy?</h2>
          <p className="text-ink-600">
            Hysteroscopy is a procedure used to examine the inside of the uterus.
          </p>
          <p className="text-ink-600 mt-2">
            A thin, lighted telescope-like device called a <strong>hysteroscope</strong> is passed through:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>The vagina</li>
            <li>The cervix</li>
            <li>Into the uterine cavity</li>
          </ul>
          <p className="text-ink-600 mt-2 font-semibold">No abdominal incision is required.</p>
          <p className="text-ink-600 mt-2">
            The hysteroscope allows the doctor to directly inspect the uterine lining and cavity.
          </p>
          <p className="text-ink-600 mt-2">
            Depending on the indication, hysteroscopy can be:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li><strong>Diagnostic</strong> — performed mainly to look inside the uterus and identify abnormalities</li>
            <li><strong>Operative</strong> — used when treatment is performed through the hysteroscope</li>
          </ul>
        </div>

        {/* Why Is Hysteroscopy Done */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Is Hysteroscopy Done?</h2>
          <p className="text-ink-600 text-sm">Hysteroscopy may be used to investigate or treat conditions such as:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Endometrial polyps
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Submucosal fibroids
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Intrauterine adhesions
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Uterine septum
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Abnormal uterine bleeding
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Recurrent pregnancy loss
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Retained intrauterine tissue
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Certain fertility-related uterine abnormalities
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Foreign bodies such as an IUD in selected cases
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Hysteroscopy allows direct visualisation of the uterine cavity and, in many cases, treatment can be performed during the same procedure.</p>
        </div>

        {/* Diagnostic Hysteroscopy vs Operative Hysteroscopy */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Diagnostic Hysteroscopy vs Operative Hysteroscopy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">Diagnostic Hysteroscopy</h3>
              <p className="text-xs text-ink-600 mt-1">Performed mainly to look inside the uterus and identify abnormalities. It may help evaluate:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Uterine cavity shape</li>
                <li>Polyps</li>
                <li>Fibroids projecting into the cavity</li>
                <li>Adhesions</li>
                <li>Septum</li>
                <li>Causes of abnormal bleeding</li>
                <li>Selected recurrent miscarriage concerns</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h3 className="font-bold text-sm text-ink-900">Operative Hysteroscopy</h3>
              <p className="text-xs text-ink-600 mt-1">Used when treatment is performed through the hysteroscope. Depending on the condition, this may involve:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Polyp removal</li>
                <li>Removal of selected submucosal fibroids</li>
                <li>Division of adhesions</li>
                <li>Correction of certain uterine septa</li>
                <li>Removal of retained tissue</li>
                <li>Biopsy</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The exact treatment depends on the diagnosis.</p>
        </div>

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
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Hysteroscopy consultation with Dr. Mandavi Rai at Divine IVF Noida"
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

        {/* Is Hysteroscopy Used for Infertility / Hysteroscopy Before IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Hysteroscopy and Fertility</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Is Hysteroscopy Used for Infertility?</h3>
              <p className="text-ink-600 text-sm">Yes, but it is not required for every infertility patient.</p>
              <p className="text-ink-600 text-sm mt-2">Hysteroscopy can identify abnormalities inside the uterine cavity that may interfere with implantation, pregnancy, or embryo transfer. Possible findings include polyps, submucosal fibroids, adhesions, and septum.</p>
              <p className="text-ink-600 text-sm mt-2">However, fertility evaluation often begins with less-invasive investigations such as ultrasound or saline sonography. Hysteroscopy is usually considered when there is a specific indication or an abnormal uterine finding.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy Before IVF</h3>
              <p className="text-ink-600 text-sm">Hysteroscopy is not routinely required before every IVF cycle.</p>
              <p className="text-ink-600 text-sm mt-2">It may be considered when there is:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Abnormal ultrasound
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Suspected uterine polyp
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Suspected submucosal fibroid
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Previous uterine surgery
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Suspected intrauterine adhesions
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Recurrent pregnancy loss
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Repeated implantation concerns
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Unexplained abnormal uterine bleeding
                </div>
              </div>
              <p className="text-sm text-ink-500 mt-2">The decision should depend on whether hysteroscopy is likely to change the fertility treatment plan.</p>
            </div>
          </div>
        </div>

        {/* Hysteroscopy After Failed IVF / Hysteroscopy for Specific Conditions */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Hysteroscopy in Specific Situations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy After Failed IVF</h3>
              <p className="text-ink-600 text-sm">A failed IVF cycle does not automatically mean there is a uterine cavity problem.</p>
              <p className="text-ink-600 text-sm mt-2">Before recommending hysteroscopy, the fertility specialist may review:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Embryo quality
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Embryo transfer
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Endometrial preparation
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Uterine imaging
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Previous pregnancy history
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Female age
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Male fertility factors
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Genetic factors
                </div>
              </div>
              <p className="text-sm text-ink-500 mt-2">If a cavity abnormality is suspected, hysteroscopy may be useful.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy for Endometrial Polyps</h3>
              <p className="text-ink-600 text-sm">Endometrial polyps are growths arising from the lining of the uterus. They may be associated with irregular bleeding, heavy bleeding, bleeding between periods, and fertility concerns. During hysteroscopy, a polyp can be visualised directly and may be removed during the same procedure.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy for Fibroids</h3>
              <p className="text-ink-600 text-sm">Fibroids are benign growths arising from the uterine muscle. Not every fibroid can be treated through hysteroscopy. Hysteroscopic treatment is mainly relevant to submucosal fibroids that project into the uterine cavity. The suitability of hysteroscopic removal depends on fibroid size, location, depth within the uterine wall, symptoms, and fertility goals.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy for Intrauterine Adhesions</h3>
              <p className="text-ink-600 text-sm">Intrauterine adhesions are bands of scar tissue inside the uterine cavity. They may develop after uterine surgery, infection, pregnancy-related procedures, or previous instrumentation. Symptoms may include reduced menstrual flow, absent periods, infertility, and recurrent pregnancy loss. Hysteroscopy is an important method for directly identifying and treating adhesions.</p>
            </div>
          </div>
        </div>

        {/* What Is Asherman Syndrome / Hysteroscopy for Uterine Septum */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Special Uterine Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">What Is Asherman Syndrome?</h3>
              <p className="text-ink-600 text-sm">Asherman syndrome refers to significant intrauterine adhesions or scar tissue. It may affect menstrual flow, fertility, implantation, and pregnancy. Hysteroscopy can be used to diagnose and, in selected cases, divide the adhesions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy for Uterine Septum</h3>
              <p className="text-ink-600 text-sm">A uterine septum is a congenital abnormality in which a band of tissue partially or completely divides the uterine cavity. In selected cases, hysteroscopy may be used to evaluate and treat a septum. The decision depends on reproductive history, pregnancy-loss history, imaging, and septum anatomy.</p>
            </div>
          </div>
        </div>

        {/* Hysteroscopy for Recurrent Pregnancy Loss / Abnormal Uterine Bleeding / Endometrial Biopsy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Hysteroscopy for Other Gynaecological Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy for Recurrent Pregnancy Loss</h3>
              <p className="text-ink-600 text-sm">Certain uterine abnormalities may contribute to recurrent pregnancy loss. These can include septum, adhesions, cavity-distorting fibroids, and polyps in selected cases. Hysteroscopy may therefore be part of the evaluation when uterine pathology is suspected. It should be used as part of a complete recurrent pregnancy-loss assessment rather than as the only investigation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy for Abnormal Uterine Bleeding</h3>
              <p className="text-ink-600 text-sm">Hysteroscopy may be useful when a woman experiences heavy periods, prolonged bleeding, bleeding between periods, bleeding after menopause, or unexplained abnormal uterine bleeding. It can allow direct assessment of the uterine lining and removal or biopsy of selected abnormalities.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy and Endometrial Biopsy</h3>
              <p className="text-ink-600 text-sm">During hysteroscopy, a tissue sample may be taken from the uterine lining when clinically indicated. The sample can then be examined in a laboratory. Biopsy may be recommended in selected cases involving abnormal bleeding, suspicious endometrial findings, or other clinically relevant concerns.</p>
            </div>
          </div>
        </div>

        {/* Is Hysteroscopy Painful / Recovery After Hysteroscopy / Risks */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Pain, Recovery, and Risks</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Is Hysteroscopy Painful?</h3>
              <p className="text-ink-600 text-sm">The experience varies. Some patients undergoing office diagnostic hysteroscopy may experience period-like cramps, pressure, or temporary discomfort. More extensive procedures may require stronger pain relief or anaesthesia. You should discuss pain-management options before the procedure.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Recovery After Hysteroscopy</h3>
              <p className="text-ink-600 text-sm">After hysteroscopy, patients may experience mild cramping, light spotting, watery discharge, and temporary tiredness. For many patients undergoing minor hysteroscopy, normal activities can often be resumed relatively quickly. Recovery may take longer after operative procedures.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">When Can I Return to Work After Hysteroscopy?</h3>
              <p className="text-ink-600 text-sm">Many patients undergoing a simple diagnostic procedure can return to normal activities by the next day. More extensive operative hysteroscopy may require additional recovery time. Your doctor will provide advice based on procedure type, anaesthesia, treatment performed, and individual recovery.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Risks of Hysteroscopy</h3>
              <p className="text-ink-600 text-sm">Hysteroscopy is generally considered a safe procedure, but complications can occur. Possible risks include bleeding, infection, cervical injury, uterine perforation, fluid-related complications, anaesthesia-related risks, and rare need for additional surgery. Operative hysteroscopy generally carries a higher complication risk than simple diagnostic hysteroscopy.</p>
            </div>
          </div>
        </div>

        {/* Warning Signs After Hysteroscopy */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Warning Signs After Hysteroscopy
          </h3>
          <p className="text-ink-600 text-sm">Contact your doctor if you develop:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Heavy bleeding
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fever
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Chills
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Severe or worsening pelvic pain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Foul-smelling discharge
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fainting or significant weakness
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">These symptoms may require medical assessment.</p>
        </div>

        {/* Hysteroscopy vs Laparoscopy / Ultrasound / HSG / Saline Sonography */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Hysteroscopy vs Other Investigations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy vs Laparoscopy</h3>
              <p className="text-ink-600 text-sm">These procedures examine different parts of the reproductive system. Hysteroscopy examines the inside of the uterus through the vagina and cervix and is useful for polyps, cavity fibroids, adhesions, and septum. Laparoscopy examines the outside of the uterus and the pelvic organs through small abdominal incisions and may be useful for endometriosis, pelvic adhesions, ovarian cysts, and tubal abnormalities. Some fertility patients may require one procedure, while others may need neither or, rarely, both.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy vs Ultrasound</h3>
              <p className="text-ink-600 text-sm">Ultrasound is non-invasive and is commonly used first to assess the uterus, endometrium, fibroids, ovaries, and pelvic anatomy. Hysteroscopy provides direct visualisation of the uterine cavity and also allows certain problems to be treated during the same procedure. For this reason, hysteroscopy is considered the definitive method for diagnosing and treating many intrauterine abnormalities.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy vs HSG</h3>
              <p className="text-ink-600 text-sm">HSG (Hysterosalpingography) is an X-ray-based test mainly used to assess the uterine cavity shape and fallopian tube patency. Hysteroscopy directly visualises the uterine cavity but does not routinely assess the full length of the fallopian tubes. These tests answer different fertility questions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hysteroscopy vs Saline Sonography</h3>
              <p className="text-ink-600 text-sm">Saline sonography can provide detailed imaging of the uterine cavity without surgery. It may help identify polyps, submucosal fibroids, and adhesions. Hysteroscopy allows direct visualisation and can also allow treatment if a problem is identified.</p>
            </div>
          </div>
        </div>

        {/* Can Hysteroscopy Improve Fertility / Hysteroscopy and Embryo Transfer */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Can Hysteroscopy Improve Fertility?</h2>
          <p className="text-ink-600 text-sm">If hysteroscopy identifies and successfully treats a uterine cavity abnormality that is affecting fertility, it may improve the reproductive environment.</p>
          <p className="text-ink-600 text-sm mt-2 font-semibold">However, hysteroscopy does not guarantee:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Natural pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              IVF success
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Implantation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Prevention of miscarriage
            </div>
          </div>
          <p className="text-ink-600 text-sm mt-2">Fertility outcomes also depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Female age
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Egg quality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Sperm quality
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Embryo factors
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other reproductive conditions
            </div>
          </div>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Hysteroscopy and Embryo Transfer</h3>
          <p className="text-ink-600 text-sm">A normal uterine cavity can be important for embryo implantation. If hysteroscopy identifies a treatable cavity abnormality, treatment may be completed before embryo transfer. The timing of future IVF or frozen embryo transfer depends on the procedure performed, endometrial healing, fertility plan, and doctor`s recommendation.</p>
        </div>

        {/* Hysteroscopy Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Hysteroscopy Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The cost of hysteroscopy in Noida depends on the type of procedure. Cost may vary according to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Gynaecology consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Diagnostic hysteroscopy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Operative hysteroscopy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Anaesthesia
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hospital/day-care charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Polyp removal
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fibroid removal
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Adhesion treatment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Septum correction
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Biopsy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Laboratory testing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Follow-up
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">An accurate estimate should be provided after determining what procedure is actually required.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Questions to Ask Before Hysteroscopy
          </h3>
          <p className="text-ink-600 text-sm">Before undergoing hysteroscopy, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is hysteroscopy recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Is it diagnostic or operative?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Can ultrasound or saline sonography answer the same question?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will a polyp or fibroid be removed during the procedure?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will I need anaesthesia?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How long will the procedure take?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the possible risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How long is recovery?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              When can I resume fertility treatment?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will the procedure affect my IVF or embryo-transfer plan?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Hysteroscopy Assessment  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility-Focused Uterine Evaluation</strong> — The uterine cavity is evaluated with fertility and future pregnancy goals in mind.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Assessment</strong> — Hysteroscopy is considered based on symptoms, imaging and reproductive history rather than routinely for every patient.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Diagnostic and Operative Planning</strong> — Selected intrauterine abnormalities may be diagnosed and treated hysteroscopically where clinically appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evaluation Before IVF or Embryo Transfer</strong> — Patients with suspected cavity abnormalities can be assessed before fertility treatment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Gynaecological and Fertility Care</strong> — Uterine conditions can be managed within a broader fertility-treatment plan.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — Evaluation and fertility treatment planning are provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking gynaecological and fertility assessment in Noida.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Hysteroscopy Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have abnormal bleeding, suspected uterine polyps or fibroids, recurrent pregnancy loss, intrauterine adhesions, or fertility concerns involving the uterine cavity, a detailed consultation can help determine whether hysteroscopy is appropriate.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised gynaecological and fertility evaluation according to your symptoms, imaging and reproductive history.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Hysteroscopy Consultation
            </Link>
            <a
              href="tel:+917678451808"
              className="bg-rose-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-rose-400 transition-colors border border-white/20"
            >
              Call +91 7678451808
            </a>
          </div>
          <p className="text-rose-200 text-sm mt-4">
            Divine IVF · Sector 76, Noida, Uttar Pradesh
          </p>
        </div>
      </div>
    </TreatmentTemplate>
  );
}