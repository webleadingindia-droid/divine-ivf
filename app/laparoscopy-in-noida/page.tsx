// app/laparoscopy-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/laparoscopy-in-noida" },
  title: "Laparoscopy in Noida | Minimally Invasive Gynaecology | Divine IVF",
  description:
    "Explore laparoscopy in Noida for endometriosis, pelvic pain, ovarian cysts, adhesions and selected fertility concerns. Consult Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "Laparoscopy in Noida, Diagnostic Laparoscopy in Noida, Gynaecological Laparoscopy in Noida, Gynecological Laparoscopy in Noida, Laparoscopic Surgery in Noida, Minimally Invasive Gynaecology in Noida, Laparoscopy for Infertility in Noida, Diagnostic Laparoscopy for Infertility, Laparoscopy for Endometriosis in Noida, Endometriosis Laparoscopy in Noida, Laparoscopy for Pelvic Pain in Noida, Laparoscopy for Ovarian Cyst in Noida, Laparoscopic Ovarian Cyst Surgery in Noida, Laparoscopy for Fibroids in Noida, Laparoscopy and Dye Test in Noida, Fallopian Tube Laparoscopy in Noida, Tubal Patency Test in Noida, Laparoscopy for Pelvic Adhesions, Keyhole Surgery in Noida, Laparoscopy Cost in Noida, Gynaecologist in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "Laparoscopy in Noida | Minimally Invasive Gynaecology | Divine IVF",
    description:
      "Learn about diagnostic and operative laparoscopy in Noida for endometriosis, pelvic pain, ovarian cysts, adhesions and selected fertility concerns.",
    url: "http://divine-ivf.vercel.app/laparoscopy-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/lZKxB3Y4Bme4vErLoFxO/image.png",
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
        { label: "Women's Health", href: "/gynaecological-care-in-noida" },
        { label: "Laparoscopy in Noida" },
      ]}
      eyebrow="Reproductive Procedures · Minimally Invasive · Noida"
      // ========== H1 ==========
      titlePlain="Laparoscopy in Noida"
      titleAccent="Minimally invasive assessment and treatment for selected gynaecological and fertility-related conditions"
      // =========================
      intro="Laparoscopy is a minimally invasive surgical procedure that allows a gynaecologist to directly examine the pelvic organs through small abdominal incisions."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/lZKxB3Y4Bme4vErLoFxO/image.png"
      heroAlt="Laparoscopy procedure at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Laparoscopy surgical equipment at Divine IVF Clinic, Noida"
      whatItIs={[
        "Laparoscopy is a type of minimally invasive surgery performed using a thin instrument called a laparoscope. The laparoscope contains a camera and light source.",
        "It is inserted through a small incision in the abdomen, allowing the surgeon to view structures such as the uterus, fallopian tubes, ovaries, pelvic cavity, and outer surface of reproductive organs.",
        "Additional small instruments can be inserted through other tiny incisions if treatment is required. Because the procedure uses small incisions rather than a large abdominal incision, laparoscopy is commonly referred to as keyhole surgery or minimally invasive surgery.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised gynaecological and fertility evaluation to determine whether laparoscopy is actually required. Laparoscopy is not routinely necessary for every infertility patient. Less invasive investigations are generally used first unless there is a specific clinical indication.",
      ]}
      whoNeedsIt={[
        "Women with suspected endometriosis — severe period pain, chronic pelvic pain, pain during intercourse, or endometrioma on ultrasound",
        "Women with suspected pelvic adhesions — scar tissue from previous pelvic infection, surgery, endometriosis, or inflammation",
        "Women with persistent or severe pelvic pain where imaging and other investigations do not provide a clear diagnosis",
        "Women with ovarian cysts or endometriomas requiring assessment or removal based on size, symptoms, ultrasound appearance, persistence, or fertility goals",
        "Women with abnormal fallopian tube findings suggesting tubal blockage or other abnormalities",
        "Women with fibroids that may require removal (myomectomy) depending on size, number, location, symptoms, and effect on fertility",
        "Women with unexplained infertility after initial fertility investigation where pelvic assessment may reveal causes",
        "Women with ectopic pregnancy where laparoscopic treatment may be needed",
      ]}
      preparation={[
        "Before surgery, the doctor reviews symptoms, medical history, fertility history, ultrasound reports, previous surgery, current medicines, and relevant blood tests.",
        "Because laparoscopy is performed under general anaesthesia, you'll be given specific fasting instructions ahead of the procedure — typically no food or drink after midnight the night before. A pre-operative assessment will be arranged to confirm you're fit for anaesthesia.",
        "You'll need to arrange for someone to take you home afterward, as you won't be able to drive for 24-48 hours after general anaesthesia. Plan for a quiet day or two immediately following the procedure, depending on what's found and treated.",
        "You may be advised to stop certain medications before the procedure, particularly blood thinners. Dr. Rai will provide specific instructions tailored to your situation.",
      ]}
      howItWorks={[
        { title: "Step 1 – Preoperative Assessment", description: "Before surgery, the doctor reviews symptoms, medical history, fertility history, ultrasound reports, previous surgery, current medicines, and relevant blood tests." },
        { title: "Step 2 – Anaesthesia", description: "Laparoscopy is generally performed under general anaesthesia, meaning the patient is asleep during the procedure." },
        { title: "Step 3 – Small Abdominal Incision", description: "A small incision is usually made around or below the belly button." },
        { title: "Step 4 – Abdominal Inflation", description: "Carbon dioxide gas is introduced into the abdomen. This creates space so that the pelvic organs can be viewed more clearly." },
        { title: "Step 5 – Camera Examination", description: "The laparoscope is inserted and the surgeon examines the uterus, ovaries, fallopian tubes, and pelvic cavity." },
        { title: "Step 6 – Additional Treatment if Required", description: "If an abnormality is identified and treatment has been planned, additional instruments may be inserted through small incisions." },
        { title: "Step 7 – Completion", description: "The instruments are removed and the small incisions are closed." },
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
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "General gynaecological care beyond fertility — including pelvic pain and menstrual health." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "Where laparoscopy often fits into wider fertility evaluation when pelvic assessment is needed." },
        { name: "Endometriosis", href: "/endometriosis-treatment", blurb: "Evaluation and treatment of endometriosis through laparoscopy." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "Fertility treatment where laparoscopy findings may inform the treatment plan." },
        { name: "IUI Treatment", href: "/iui-treatment-in-noida", blurb: "First-line fertility treatment that may be informed by laparoscopy findings." },
        { name: "Ovarian Cyst Treatment", href: "/ovarian-cyst-treatment", blurb: "Evaluation and treatment of ovarian cysts through laparoscopy." },
        { name: "Fibroid Treatment", href: "/fibroid-treatment", blurb: "Treatment options for uterine fibroids including laparoscopic removal." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your gynaecologist and fertility specialist at Divine IVF, Noida." },
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
          question: "What is laparoscopy?",
          answer:
            "Laparoscopy is minimally invasive surgery that uses a camera inserted through a small abdominal incision to examine the pelvic organs.",
        },
        {
          question: "Why is laparoscopy done for infertility?",
          answer:
            "It may help identify conditions such as endometriosis, pelvic adhesions or tubal abnormalities that can affect fertility.",
        },
        {
          question: "Does every infertility patient need laparoscopy?",
          answer:
            "No. Routine laparoscopy is not recommended without a suspected pelvic condition or another specific indication.",
        },
        {
          question: "Is laparoscopy used for endometriosis?",
          answer:
            "Yes. Laparoscopy can directly identify endometriosis and may allow treatment during the same procedure.",
        },
        {
          question: "Can laparoscopy check blocked fallopian tubes?",
          answer:
            "In selected cases, laparoscopy can be combined with a dye test to assess whether the tubes appear open.",
        },
        {
          question: "Is laparoscopy painful?",
          answer:
            "The procedure is generally performed under general anaesthesia. Temporary soreness and gas-related discomfort can occur afterward.",
        },
        {
          question: "How long does laparoscopy take?",
          answer:
            "The duration depends on whether the procedure is purely diagnostic or involves additional treatment.",
        },
        {
          question: "Can I go home after laparoscopy?",
          answer:
            "Many minor laparoscopic procedures are performed as day-care surgery, but more complex procedures may require hospital observation.",
        },
        {
          question: "How long does recovery take?",
          answer:
            "Recovery varies according to the extent of surgery. Minor procedures generally have shorter recovery than more complex operations.",
        },
        {
          question: "Is laparoscopy required before IVF?",
          answer:
            "No. It is only considered when there is a specific reason such as suspected pelvic pathology.",
        },
        {
          question: "Can laparoscopy treat ovarian cysts?",
          answer:
            "Certain ovarian cysts may be removed laparoscopically when surgery is clinically indicated.",
        },
        {
          question: "Can laparoscopy treat fibroids?",
          answer:
            "Selected fibroids can be treated laparoscopically depending on their size, number and location.",
        },
        {
          question: "Does laparoscopy improve fertility?",
          answer:
            "It may help when a treatable pelvic condition is affecting fertility, but it does not guarantee pregnancy.",
        },
        {
          question: "What is the cost of laparoscopy  ",
          answer:
            "The cost depends on whether it is diagnostic or operative and whether additional procedures such as endometriosis treatment, cyst removal or tubal evaluation are required.",
        },
        {
          question: "Where can I discuss laparoscopy for fertility  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for personalised gynaecological and fertility evaluation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Laparoscopy in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Minimally invasive assessment and treatment for selected gynaecological and fertility-related conditions at Divine IVF, Sector 76, Noida.
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
              Book Laparoscopy Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for laparoscopy evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for pelvic assessment before laparoscopy at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Laparoscopy Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Laparoscopy?</h2>
          <p className="text-ink-600">
            Laparoscopy is a type of minimally invasive surgery performed using a thin instrument called a <strong>laparoscope</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            The laparoscope contains a camera and light source. It is inserted through a small incision in the abdomen, allowing the surgeon to view structures such as:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>Uterus</li>
            <li>Fallopian tubes</li>
            <li>Ovaries</li>
            <li>Pelvic cavity</li>
            <li>Outer surface of reproductive organs</li>
          </ul>
          <p className="text-ink-600 mt-2">
            Additional small instruments can be inserted through other tiny incisions if treatment is required.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            Because the procedure uses small incisions rather than a large abdominal incision, laparoscopy is commonly referred to as keyhole surgery or minimally invasive surgery.
          </p>
        </div>

        {/* Why Is Laparoscopy Used in Gynaecology */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Is Laparoscopy Used in Gynaecology?</h2>
          <p className="text-ink-600 text-sm">Laparoscopy can help diagnose and sometimes treat several gynaecological conditions.</p>
          <p className="text-ink-600 text-sm mt-2">These may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Endometriosis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pelvic adhesions
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ovarian cysts
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fibroids
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ectopic pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Chronic pelvic pain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Certain tubal abnormalities
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Selected fertility-related conditions
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">If an abnormality is identified, treatment can often be performed during the same surgical procedure depending on the condition.</p>
        </div>

        {/* Is Laparoscopy Used for Infertility / When May Laparoscopy Be Recommended */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Is Laparoscopy Used for Infertility?</h2>
          <p className="text-ink-600 text-sm">Yes, but not in every infertility case.</p>
          <p className="text-ink-600 text-sm mt-2">Laparoscopy can provide a direct view of the pelvic reproductive organs and may identify factors that are difficult to diagnose through routine imaging. These may include endometriosis, pelvic adhesions, tubal damage, and certain pelvic abnormalities.</p>
          <p className="text-ink-600 text-sm mt-2">However, modern fertility evaluation usually starts with less invasive methods such as ultrasound and tubal assessment.</p>
          <p className="text-ink-600 text-sm mt-2 font-semibold">ASRM advises that laparoscopy should not be used routinely in infertility evaluation when there is no suspected pelvic pathology or another specific surgical indication.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">When May Laparoscopy Be Recommended for Fertility?</h3>
          <p className="text-ink-600 text-sm">A fertility specialist may consider laparoscopy in selected situations such as:</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h4 className="font-semibold text-ink-900 text-sm">Suspected Endometriosis</h4>
              <p className="text-ink-600 text-sm">Symptoms may include severe period pain, chronic pelvic pain, pain during intercourse, difficulty conceiving, or endometrioma on ultrasound. Laparoscopy can directly visualise endometriosis and, in selected cases, allow treatment during the same procedure.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-ink-900 text-sm">Suspected Pelvic Adhesions</h4>
              <p className="text-ink-600 text-sm">Scar tissue may develop after pelvic infection, previous surgery, endometriosis, or inflammation. Adhesions can affect the relationship between the ovaries and fallopian tubes. Laparoscopy may help diagnose and sometimes treat adhesions.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-ink-900 text-sm">Abnormal Fallopian Tube Findings</h4>
              <p className="text-ink-600 text-sm">If previous testing suggests tubal blockage or another abnormality, laparoscopy may occasionally be used for further assessment.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-ink-900 text-sm">Severe Pelvic Pain</h4>
              <p className="text-ink-600 text-sm">Persistent or severe pelvic pain may require laparoscopy when imaging and other investigations do not provide a clear diagnosis.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-ink-900 text-sm">Ovarian Cysts or Endometriomas</h4>
              <p className="text-ink-600 text-sm">Certain ovarian cysts may require laparoscopic evaluation or removal depending on size, symptoms, ultrasound appearance, persistence, and fertility goals.</p>
            </div>
          </div>
        </div>

        {/* Diagnostic Laparoscopy vs Operative Laparoscopy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Diagnostic Laparoscopy vs Operative Laparoscopy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">Diagnostic Laparoscopy</h3>
              <p className="text-xs text-ink-600 mt-1">Primarily performed to examine the pelvis and identify abnormalities. It may help diagnose:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Endometriosis</li>
                <li>Adhesions</li>
                <li>Tubal abnormalities</li>
                <li>Pelvic masses</li>
                <li>Causes of pelvic pain</li>
              </ul>
            </div>
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-bold text-sm text-ink-900">Operative Laparoscopy</h3>
              <p className="text-xs text-ink-600 mt-1">If a treatable problem is identified, additional instruments may be used during the procedure. Depending on the condition, operative laparoscopy may involve:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Removing endometriosis</li>
                <li>Releasing adhesions</li>
                <li>Removing ovarian cysts</li>
                <li>Treating selected fibroids</li>
                <li>Managing ectopic pregnancy</li>
                <li>Other gynaecological procedures</li>
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
              alt="Laparoscopy surgical preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Laparoscopy consultation with Dr. Mandavi Rai at Divine IVF Noida"
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

        {/* Laparoscopy and Endometriosis */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Laparoscopy and Endometriosis</h2>
          <p className="text-ink-600 text-sm">Endometriosis is one of the most common fertility-related reasons laparoscopy may be considered.</p>
          <p className="text-ink-600 text-sm mt-2">The condition occurs when tissue similar to the uterine lining grows outside the uterus. Possible symptoms include painful periods, pelvic pain, pain during intercourse, difficulty conceiving, and bowel or bladder symptoms in some cases.</p>
          <p className="text-ink-600 text-sm mt-2">Laparoscopy allows the surgeon to directly inspect the pelvis and identify endometriosis lesions. If appropriate, lesions may be treated during the same procedure.</p>
        </div>

        {/* Laparoscopy and Fallopian Tube Assessment / Laparoscopy and Dye Test */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Laparoscopy and Fallopian Tube Assessment</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy and Fallopian Tube Assessment</h3>
              <p className="text-ink-600 text-sm">Healthy fallopian tubes are important for natural conception. During selected fertility evaluations, laparoscopy may be combined with a dye test, sometimes called chromopertubation or hydrotubation.</p>
              <p className="text-ink-600 text-sm mt-2">Dye is introduced through the cervix and uterus while the surgeon observes whether it passes through the fallopian tubes. This can help evaluate whether the tubes appear open.</p>
              <p className="text-ink-600 text-sm mt-2">NHS patient guidance notes that laparoscopy with dye testing may be used to investigate fertility problems and possible tubal blockage.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy and Dye Test</h3>
              <p className="text-ink-600 text-sm">During a laparoscopy and dye test:</p>
              <ol className="list-decimal list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>The patient is placed under anaesthesia</li>
                <li>A laparoscope is inserted through a small abdominal incision</li>
                <li>The pelvic organs are examined</li>
                <li>Dye is introduced through the cervix</li>
                <li>The surgeon observes whether the dye passes through the fallopian tubes</li>
                <li>Any additional pelvic abnormalities may also be assessed</li>
              </ol>
              <p className="text-sm text-ink-500 mt-2">This procedure may provide information about both tubal patency and pelvic anatomy.</p>
            </div>
          </div>
        </div>

        {/* Laparoscopy for Pelvic Adhesions / Ovarian Cysts / Fibroids */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Laparoscopy for Specific Conditions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy for Pelvic Adhesions</h3>
              <p className="text-ink-600 text-sm">Pelvic adhesions are bands of scar tissue that can cause organs to stick together. They may develop following endometriosis, infection, previous pelvic surgery, or inflammation. Significant adhesions can sometimes interfere with fertility. Laparoscopy allows direct assessment and may allow adhesions to be divided when clinically appropriate.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy for Ovarian Cysts</h3>
              <p className="text-ink-600 text-sm">Many ovarian cysts do not require surgery. However, laparoscopy may be considered if a cyst persists, causes significant pain, becomes large, has concerning ultrasound characteristics, or interferes with fertility treatment. A fertility-focused approach is important because ovarian surgery can affect ovarian reserve in some situations.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy for Fibroids</h3>
              <p className="text-ink-600 text-sm">Some fibroids may be treated laparoscopically depending on their size, number, location, symptoms, and effect on fertility. Not every fibroid requires treatment. A fibroid affecting the uterine cavity may require a different procedure such as hysteroscopy.</p>
            </div>
          </div>
        </div>

        {/* Laparoscopy vs Hysteroscopy / Laparoscopy vs Ultrasound */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Laparoscopy vs Other Investigations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy vs Hysteroscopy</h3>
              <p className="text-ink-600 text-sm">These procedures examine different areas. Laparoscopy uses a camera inserted through the abdomen to examine the outside of the uterus, ovaries, fallopian tubes and pelvis. Hysteroscopy uses a camera inserted through the vagina and cervix to examine the inside of the uterine cavity. Depending on the fertility problem, one or both procedures may be considered.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy vs Ultrasound</h3>
              <p className="text-ink-600 text-sm">Ultrasound is usually a first-line, non-invasive investigation. It can provide information about the uterus, ovaries, fibroids, ovarian cysts, endometriomas, and other pelvic abnormalities. Laparoscopy provides a direct surgical view but is more invasive. For this reason, it is generally reserved for situations where the information gained is expected to influence diagnosis or treatment.</p>
            </div>
          </div>
        </div>

        {/* Is Laparoscopy Necessary Before IVF / Laparoscopy for Endometriosis Before IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Laparoscopy and IVF</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Is Laparoscopy Necessary Before IVF?</h3>
              <p className="text-ink-600 text-sm font-semibold">No.</p>
              <p className="text-ink-600 text-sm mt-2">Laparoscopy is not routinely required before IVF. Most patients can begin fertility treatment after appropriate non-invasive evaluation.</p>
              <p className="text-ink-600 text-sm mt-2">Laparoscopy may be considered before IVF if there is significant pelvic pain, suspected endometriosis, suspected hydrosalpinx or tubal disease, persistent ovarian cyst, previous pelvic infection or surgery, or another surgical indication. The decision should depend on whether surgery is likely to change fertility management.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy for Endometriosis Before IVF</h3>
              <p className="text-ink-600 text-sm">Whether endometriosis surgery should be performed before IVF depends on severity, pain symptoms, ovarian reserve, presence of endometriomas, age, previous treatment, and fertility goals.</p>
              <p className="text-ink-600 text-sm mt-2 font-semibold">Surgery is not automatically required simply because endometriosis is suspected.</p>
              <p className="text-ink-600 text-sm mt-2">A fertility specialist should consider the possible benefits against risks to ovarian reserve and treatment delay.</p>
            </div>
          </div>
        </div>

        {/* Is Laparoscopy Painful / Recovery After Laparoscopy */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Is Laparoscopy Painful?</h2>
          <p className="text-ink-600 text-sm">Because the procedure is performed under anaesthesia, pain is generally controlled during surgery.</p>
          <p className="text-ink-600 text-sm mt-2">After surgery, patients may experience:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Abdominal soreness
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Incision discomfort
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Shoulder-tip pain from residual gas
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Mild nausea
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fatigue
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">These symptoms usually improve during recovery.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Recovery After Laparoscopy</h3>
          <p className="text-ink-600 text-sm">Recovery depends on whether the procedure is diagnostic or involved more extensive surgery.</p>
          <p className="text-ink-600 text-sm mt-2">After a minor laparoscopy:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Many patients go home the same day</li>
            <li>Mild discomfort may continue for several days</li>
            <li>Light activities may resume relatively soon</li>
          </ul>
          <p className="text-ink-600 text-sm mt-2">More complex surgery may require a longer recovery period.</p>
          <p className="text-ink-600 text-sm mt-2">Your doctor will advise when to resume work, exercise, heavy lifting, and sexual activity.</p>
          <p className="text-sm text-ink-500 mt-2">ACOG notes that minor procedures may allow return to regular activity relatively quickly, while more complex operations require more recovery time.</p>
        </div>

        {/* Benefits of Minimally Invasive Laparoscopy / Risks of Laparoscopy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Benefits and Risks of Laparoscopy</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Benefits of Minimally Invasive Laparoscopy</h3>
              <p className="text-ink-600 text-sm">Compared with traditional open surgery, potential advantages may include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Smaller incisions</li>
                <li>Less visible scarring</li>
                <li>Shorter hospital stay in many cases</li>
                <li>Faster recovery for selected procedures</li>
                <li>Direct visualisation of pelvic anatomy</li>
                <li>Ability to diagnose and treat certain problems during the same procedure</li>
              </ul>
              <p className="text-xs text-ink-500 mt-2">The exact benefit depends on the type of surgery performed.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Risks of Laparoscopy</h3>
              <p className="text-ink-600 text-sm">Although laparoscopy is minimally invasive, it is still surgery. Possible complications may include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Bleeding
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Infection
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Anaesthesia-related complications
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Injury to bowel
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Injury to bladder
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Injury to blood vessels
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Injury to urinary tract
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Blood clots
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Need for conversion to open surgery in uncommon situations
                </div>
              </div>
              <p className="text-xs text-ink-500 mt-2">Individual risks depend on the procedure and medical history.</p>
            </div>
          </div>
        </div>

        {/* Warning Signs After Laparoscopy */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Warning Signs After Laparoscopy
          </h3>
          <p className="text-ink-600 text-sm">Contact your doctor promptly if you develop:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fever
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Severe or worsening pain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Heavy vaginal bleeding
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Increasing redness or discharge from an incision
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fainting
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Difficulty urinating
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">These are among the warning symptoms highlighted in ACOG patient guidance.</p>
        </div>

        {/* Laparoscopy and Fertility Treatment / Can Laparoscopy Improve Fertility */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Laparoscopy and Fertility</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Laparoscopy and Fertility Treatment</h3>
              <p className="text-ink-600 text-sm">Laparoscopy may affect the fertility plan when it identifies conditions such as endometriosis, significant adhesions, tubal damage, hydrosalpinx, or ovarian pathology.</p>
              <p className="text-ink-600 text-sm mt-2">After surgery, possible fertility options may include trying naturally, ovulation treatment, <Link href="/iui-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IUI</Link>, <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link>, or <Link href="/icsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">ICSI</Link>. The appropriate next step depends on age, ovarian reserve, sperm parameters and surgical findings.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can Laparoscopy Improve Fertility?</h3>
              <p className="text-ink-600 text-sm">Laparoscopy can diagnose and treat certain conditions that contribute to infertility.</p>
              <p className="text-ink-600 text-sm mt-2 font-semibold">However, it does not guarantee natural pregnancy or IVF success.</p>
              <p className="text-ink-600 text-sm mt-2">Treatment outcomes depend on:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
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
                  Severity of disease
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Fallopian tube condition
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Sperm quality
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Duration of infertility
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Other fertility factors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laparoscopy Cost */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Laparoscopy Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of laparoscopy in Noida varies depending on the procedure. Factors may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Gynaecology consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Preoperative investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Diagnostic vs operative laparoscopy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Anaesthesia
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hospital or day-care charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Treatment of endometriosis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Cyst removal
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Adhesion removal
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Tubal assessment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Other surgical procedures
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Follow-up care
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A personalised estimate can be provided after determining whether diagnostic or operative laparoscopy is required.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Questions to Ask Before Laparoscopy</h2>
          <p className="text-ink-600 text-sm">Before surgery, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is laparoscopy recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Are there less invasive alternatives?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Is it diagnostic or operative?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What condition are you looking for?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will treatment be performed during the same procedure?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will my fallopian tubes be tested?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Could the procedure affect ovarian reserve?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How long will recovery take?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the surgical risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How might the results change my fertility treatment plan?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Laparoscopy Assessment  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility-Focused Gynaecological Evaluation</strong> — The decision to perform laparoscopy considers both the gynaecological condition and future fertility goals.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Assessment</strong> — Laparoscopy is recommended only when symptoms or investigations provide a clinical reason for surgical assessment.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Endometriosis and Pelvic Condition Evaluation</strong> — Conditions such as endometriosis, ovarian cysts, pelvic adhesions and tubal abnormalities can be assessed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility Treatment Planning</strong> — Following diagnosis or surgery, fertility options such as natural conception, IUI, IVF or ICSI can be discussed.</div>
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
          <h2 className="text-2xl font-bold mb-3">Book a Laparoscopy Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have severe pelvic pain, suspected endometriosis, ovarian cysts, tubal concerns or fertility problems that may require surgical evaluation, the first step is a detailed consultation.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised gynaecological and fertility assessment to determine whether laparoscopy or a less invasive investigation is more appropriate.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Laparoscopy Consultation
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