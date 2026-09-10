// app/gynaecological-care-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/gynaecological-care-in-noida" },
  title: "Gynaecologist in Noida | Gynaecological Care | Divine IVF",
  description:
    "Looking for a gynaecologist in Noida? Consult Dr. Mandavi Rai at Divine IVF for PCOS, irregular periods, fibroids, ovarian cysts, pelvic pain and women's health care.",
  robots: { index: true, follow: true },
  keywords:
    "Gynaecological Care in Noida, Gynaecologist in Noida, Gynecologist in Noida, Gynaecology Clinic in Noida, Gynecology Clinic in Noida, Gynaecologist in Sector 76 Noida, Women's Health Clinic in Noida, Women's Health Specialist in Noida, Female Gynaecologist in Noida, PCOS Treatment in Noida, PCOD Treatment in Noida, Irregular Periods Treatment in Noida, Heavy Periods Treatment in Noida, Painful Periods Treatment in Noida, Fibroid Treatment in Noida, Ovarian Cyst Treatment in Noida, Endometriosis Treatment in Noida, Adenomyosis Treatment in Noida, Pelvic Pain Treatment in Noida, Hormonal Imbalance Treatment in Noida, Abnormal Uterine Bleeding Treatment in Noida, Menopause Treatment in Noida, Fertility Specialist in Noida, Fertility Clinic in Noida, Gynaecologist Near Me, Gynecologist Near Me",
  openGraph: {
    title: "Gynaecologist in Noida | Gynaecological Care | Divine IVF",
    description:
      "Consult Dr. Mandavi Rai at Divine IVF, Noida for PCOS, irregular periods, fibroids, ovarian cysts, pelvic pain and personalised women's health care.",
    url: "https://www.divineivf.com/gynaecological-care-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/zG1XYyKz2VImbiDBFHvi/image.png",
        width: 1200,
        height: 630,
        alt: "Gynaecological consultation with Dr. Mandavi Rai at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GynaecologicalCarePage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Women's Health", href: "/women-health" },
        { label: "Gynaecological Care in Noida" },
      ]}
      eyebrow="Women's Health · Noida"
      // ========== H1 ==========
      titlePlain="Gynaecological Care in Noida"
      titleAccent="Personalised women's health and gynaecological care for menstrual, hormonal, reproductive and fertility-related concerns"
      // =========================
      intro="Women may experience gynaecological concerns at different stages of life—from irregular periods and PCOS to fibroids, ovarian cysts, abnormal bleeding, fertility concerns and menopausal symptoms."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/zG1XYyKz2VImbiDBFHvi/image.png"
      heroAlt="Gynaecological consultation with Dr. Mandavi Rai at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Women's health consultation room at Divine IVF Clinic, Noida"
      whatItIs={[
        "Gynaecological care focuses on the health of the female reproductive system. It may involve evaluation and treatment of conditions affecting menstrual cycles, ovaries, uterus, cervix, fallopian tubes, hormonal health, fertility, sexual and reproductive health, and menopause.",
        "A gynaecologist can help evaluate symptoms, provide preventive care and manage both short-term and long-term women's health concerns.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised gynaecological care in Noida with evaluation and treatment planning based on your symptoms, age, reproductive goals and medical history.",
        "Whether you need a routine gynaecological consultation or evaluation for a specific concern, timely assessment can help identify the cause and determine an appropriate treatment plan.",
      ]}
      whoNeedsIt={[
        "Women experiencing irregular periods — missed, infrequent, or unpredictable cycles",
        "Women with very heavy periods that affect quality of life",
        "Women with painful periods that interfere with daily activities",
        "Women with bleeding between periods or after intercourse",
        "Women with pelvic pain or pain during intercourse",
        "Women with unusual vaginal discharge or recurrent infections",
        "Women with PCOS/PCOD symptoms — irregular periods, acne, excess hair growth, weight concerns",
        "Women with fibroids, ovarian cysts, or endometriosis symptoms",
        "Women with fertility concerns or difficulty conceiving",
        "Women experiencing menopausal or perimenopausal symptoms",
        "Women seeking routine gynaecological check-ups and preventive care",
        "Women with abnormal ultrasound findings requiring evaluation",
      ]}
      preparation={[
        "For your first gynaecological consultation, it's helpful to bring any previous test results, reports, or medical records you may have. This gives Dr. Rai a complete picture from the outset.",
        "If you're coming for a specific concern, think about when it started, what makes it better or worse, and any treatments you've tried before. This information helps Dr. Rai understand your situation more fully.",
        "For certain procedures like hysteroscopy or laparoscopy, specific preparation instructions will be provided in advance. Dr. Rai will explain exactly what to expect and how to prepare.",
        "No referral is needed to book a gynaecological consultation at Divine IVF — you can book directly.",
      ]}
      howItWorks={[
        { title: "Step 1 – Detailed Medical History", description: "Dr. Mandavi Rai reviews menstrual cycle, symptoms, previous pregnancies, fertility history, surgeries, medications, family history, and existing health conditions." },
        { title: "Step 2 – Clinical Evaluation", description: "A general and gynaecological examination may be recommended depending on the symptoms." },
        { title: "Step 3 – Diagnostic Tests", description: "Appropriate tests may include ultrasound, blood tests, hormone testing, cervical screening, and additional investigations. Not every patient requires the same tests." },
        { title: "Step 4 – Diagnosis and Explanation", description: "Once sufficient information is available, your doctor discusses likely diagnosis, available treatment options, expected follow-up, and fertility implications when relevant." },
        { title: "Step 5 – Personalised Treatment", description: "Treatment may involve lifestyle modification, medicines, hormonal treatment, fertility treatment, minor procedures, surgical referral when appropriate, and monitoring." },
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
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "Comprehensive fertility evaluation available alongside general gynaecological care." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "Fertility treatment available when needed, supported by thorough gynaecological care." },
        { name: "IUI Treatment", href: "/iui-treatment-in-noida", blurb: "First-line fertility treatment for suitable couples." },
        { name: "PCOS / PCOD", href: "/pcos-treatment", blurb: "Evaluation and management of Polycystic Ovary Syndrome." },
        { name: "Endometriosis", href: "/endometriosis-treatment", blurb: "Diagnosis and treatment of endometriosis." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your gynaecologist and fertility specialist at Divine IVF, Noida." },
        { name: "Recurrent Pregnancy Loss", href: "/recurrent-pregnancy-loss", blurb: "Evaluation and treatment for recurrent miscarriage." },
        { name: "Genetic Testing", href: "/genetic-testing-in-ivf-noida", blurb: "Genetic screening for fertility and gynaecological concerns." },
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
          question: "When should I visit a gynaecologist?",
          answer:
            "You should consider a consultation if you have irregular periods, heavy bleeding, pelvic pain, unusual discharge, fertility problems, menopausal symptoms or other reproductive-health concerns.",
        },
        {
          question: "What conditions does a gynaecologist treat?",
          answer:
            "A gynaecologist may evaluate and manage menstrual disorders, PCOS, fibroids, ovarian cysts, endometriosis, infections, fertility-related conditions and menopausal symptoms.",
        },
        {
          question: "Are irregular periods always caused by PCOS?",
          answer:
            "No. Irregular periods may be caused by PCOS, thyroid disorders, weight changes, stress, hormonal conditions, pregnancy or other factors.",
        },
        {
          question: "Can PCOS affect fertility?",
          answer:
            "Yes. PCOS can interfere with regular ovulation, which may make conception more difficult for some women.",
        },
        {
          question: "Do all ovarian cysts need surgery?",
          answer:
            "No. Many ovarian cysts resolve naturally or can be monitored. Surgery is considered only when clinically appropriate.",
        },
        {
          question: "Can fibroids affect pregnancy?",
          answer:
            "Certain fibroids may affect fertility or pregnancy depending on their size and location, while others cause no fertility problems.",
        },
        {
          question: "What tests are done for heavy periods?",
          answer:
            "Depending on the situation, tests may include blood investigations, pelvic ultrasound, thyroid testing and further uterine evaluation.",
        },
        {
          question: "Is severe period pain normal?",
          answer:
            "Mild cramping is common, but severe or worsening period pain may need evaluation for conditions such as endometriosis or adenomyosis.",
        },
        {
          question: "When should I get checked for PCOS?",
          answer:
            "Consider evaluation if you have irregular periods, acne, excessive hair growth, weight concerns or difficulty conceiving.",
        },
        {
          question: "Can endometriosis cause infertility?",
          answer:
            "Yes. Endometriosis can affect fertility in some women, although many women with endometriosis can still conceive.",
        },
        {
          question: "Do I need a gynaecologist before trying to conceive?",
          answer:
            "A preconception consultation can be useful, especially if you have irregular cycles, chronic medical conditions, previous miscarriages or fertility concerns.",
        },
        {
          question: "What is the difference between a gynaecologist and fertility specialist?",
          answer:
            "A gynaecologist manages general female reproductive health, while a fertility specialist has additional focus on infertility and assisted reproductive treatment. Some doctors provide both forms of care.",
        },
        {
          question: "Where can I consult a gynaecologist in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for gynaecological and fertility-related evaluation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Gynaecological Care in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Personalised women`s health and gynaecological care for menstrual, hormonal, reproductive and fertility-related concerns at Divine IVF, Sector 76, Noida.
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
              Book Gynaecology Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal blood test for gynaecological evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Pelvic ultrasound scan for gynaecological care at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Gynaecological Care Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Gynaecological Care?</h2>
          <p className="text-ink-600">
            Gynaecological care focuses on the health of the female reproductive system.
          </p>
          <p className="text-ink-600 mt-2">
            It may involve evaluation and treatment of conditions affecting:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-3 list-disc list-inside text-sm text-ink-600">
            <li>Menstrual cycles</li>
            <li>Ovaries</li>
            <li>Uterus</li>
            <li>Cervix</li>
            <li>Fallopian tubes</li>
            <li>Hormonal health</li>
            <li>Fertility</li>
            <li>Sexual and reproductive health</li>
            <li>Menopause</li>
          </ul>
          <p className="text-ink-600 text-sm mt-3">A gynaecologist can help evaluate symptoms, provide preventive care and manage both short-term and long-term women`s health concerns.</p>
        </div>

        {/* When Should You Visit a Gynaecologist */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">When Should You Visit a Gynaecologist?</h2>
          <p className="text-ink-600 text-sm">You may consider consulting a gynaecologist in Noida if you experience:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Irregular periods
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Very heavy periods
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Painful periods
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Missed periods
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Bleeding between periods
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pelvic pain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pain during intercourse
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Unusual vaginal discharge
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Recurrent vaginal infections
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fertility concerns
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              PCOS symptoms
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
              Recurrent pregnancy loss
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Menopausal symptoms
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Abnormal ultrasound findings
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Routine gynaecological consultations can also be useful even when no major symptoms are present.</p>
        </div>

        {/* Common Gynaecological Conditions */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Common Gynaecological Conditions We Evaluate</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Irregular Periods</h3>
              <p className="text-ink-600 text-sm">Irregular menstrual cycles can occur due to PCOS, thyroid disorders, weight changes, stress, hormonal imbalance, perimenopause, certain medications, and other medical conditions. Evaluation may include medical history, hormonal tests and ultrasound depending on the situation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Heavy Menstrual Bleeding</h3>
              <p className="text-ink-600 text-sm">Heavy or prolonged periods may be related to fibroids, adenomyosis, hormonal imbalance, uterine polyps, thyroid disorders, bleeding disorders, or other gynaecological conditions. Persistent heavy bleeding should not be ignored, especially if it causes weakness or anaemia.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Painful Periods</h3>
              <p className="text-ink-600 text-sm">Severe menstrual pain may sometimes be associated with endometriosis, adenomyosis, fibroids, pelvic inflammatory disease, or other pelvic conditions. The cause should be evaluated when pain is severe, worsening or interfering with daily activities.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PCOS Treatment in Noida</h3>
              <p className="text-ink-600 text-sm">Polycystic Ovary Syndrome (PCOS) is a common hormonal condition that may affect menstrual regularity, ovulation, fertility, weight, acne, excess hair growth, and metabolic health. Treatment depends on your symptoms and goals. Management may include lifestyle guidance, menstrual-cycle management, hormonal treatment, fertility treatment when required, and metabolic evaluation. PCOS treatment should be personalised rather than based on a single symptom.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PCOD and Hormonal Problems</h3>
              <p className="text-ink-600 text-sm">Many patients use the terms PCOD and PCOS interchangeably. Hormonal concerns may present with irregular periods, acne, weight gain, hair loss, excess facial or body hair, and difficulty conceiving. A proper evaluation can help determine whether PCOS, thyroid dysfunction, elevated prolactin or another hormonal condition is involved.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Fibroids</h3>
              <p className="text-ink-600 text-sm">Uterine fibroids are non-cancerous growths arising from the muscular wall of the uterus. Some women have no symptoms. Others may experience heavy periods, pelvic pressure, pain, frequent urination, fertility difficulties, or pregnancy-related concerns. Treatment depends on fibroid size, location, symptoms, age, and fertility goals. Not every fibroid requires surgery.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Ovarian Cysts</h3>
              <p className="text-ink-600 text-sm">Ovarian cysts are fluid-filled structures that can develop within or on the ovaries. Many are benign and may resolve without treatment. Some cysts may require closer evaluation if they persist, grow, cause pain, have unusual ultrasound features, or occur after menopause. Treatment depends on the type of cyst and the patient`s age and symptoms.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Endometriosis</h3>
              <p className="text-ink-600 text-sm">Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus. Symptoms may include painful periods, chronic pelvic pain, pain during intercourse, difficulty conceiving, and bowel or bladder-related symptoms in some cases. Treatment may involve medicines, surgery or fertility treatment depending on severity and reproductive goals.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Adenomyosis</h3>
              <p className="text-ink-600 text-sm">Adenomyosis occurs when tissue similar to the uterine lining grows into the muscular wall of the uterus. Possible symptoms include heavy periods, painful periods, enlarged uterus, and pelvic discomfort. Treatment depends on age, symptom severity and whether pregnancy is desired.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Pelvic Pain</h3>
              <p className="text-ink-600 text-sm">Pelvic pain can have multiple causes. Possible gynaecological causes include endometriosis, fibroids, ovarian cysts, adenomyosis, pelvic inflammatory disease, and ovulation-related pain. A detailed evaluation helps determine the likely source.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Abnormal Vaginal Discharge</h3>
              <p className="text-ink-600 text-sm">Changes in vaginal discharge may occur because of vaginal infection, cervical infection, sexually transmitted infections, hormonal changes, or other gynaecological conditions. If discharge is associated with itching, smell, pain, bleeding or fever, medical evaluation is advisable.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Vaginal and Pelvic Infections</h3>
              <p className="text-ink-600 text-sm">Gynaecological infections may cause itching, burning, abnormal discharge, pelvic pain, painful urination, and pain during intercourse. Treatment depends on the specific cause. Self-medication may temporarily mask symptoms without treating the underlying problem.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Abnormal Uterine Bleeding</h3>
              <p className="text-ink-600 text-sm">Abnormal uterine bleeding may include very heavy periods, bleeding between cycles, prolonged bleeding, bleeding after intercourse, or bleeding after menopause. Evaluation may include medical history, pelvic examination, ultrasound, blood tests, cervical screening, and endometrial assessment when indicated.</p>
            </div>
          </div>
        </div>

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
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Women`s health consultation with Dr. Mandavi Rai at Divine IVF Noida"
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

        {/* Fertility and Gynaecological Care */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Fertility and Gynaecological Care</h2>
          <p className="text-ink-600 text-sm">Several gynaecological conditions can affect fertility. These may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              PCOS
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Endometriosis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fibroids
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Ovarian cysts
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Tubal problems
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Reduced ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Irregular ovulation
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">At Divine IVF, gynaecological and fertility evaluation can be coordinated when conception is also a concern.</p>
        </div>

        {/* Gynaecological Care Before Pregnancy / After Recurrent Miscarriage */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Gynaecological Care at Different Life Stages</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Gynaecological Care Before Pregnancy</h3>
              <p className="text-ink-600 text-sm">A preconception consultation can help review menstrual history, existing medical conditions, current medications, previous pregnancies, fertility concerns, vaccination status, and nutritional considerations. This can help identify health issues before attempting pregnancy.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Gynaecological Care After Recurrent Miscarriage</h3>
              <p className="text-ink-600 text-sm">Patients with repeated pregnancy loss may require evaluation for uterine abnormalities, fibroids or polyps, certain hormonal conditions, antiphospholipid syndrome where indicated, genetic factors, and other medical conditions. The exact assessment depends on individual pregnancy history.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Cervical Health and Screening</h3>
              <p className="text-ink-600 text-sm">Cervical screening helps detect changes that may require further evaluation. Depending on age and medical history, your doctor may discuss Pap smear, HPV testing, and further cervical evaluation if required. Routine screening schedules should be followed according to clinical recommendations.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Menopause and Perimenopause Care</h3>
              <p className="text-ink-600 text-sm">Hormonal changes around menopause may cause irregular periods, hot flashes, mood changes, sleep problems, vaginal dryness, changes in sexual health, and bone-health concerns. Treatment depends on the severity of symptoms, medical history and individual preferences.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Adolescent Gynaecological Care</h3>
              <p className="text-ink-600 text-sm">Teenagers may also experience gynaecological concerns such as very irregular periods, excessively painful periods, heavy bleeding, PCOS symptoms, delayed menstruation, and hormonal concerns. Evaluation should be age-appropriate and sensitive to the patient`s needs.</p>
            </div>
          </div>
        </div>

        {/* Tests Used in Gynaecological Evaluation */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Tests Used in Gynaecological Evaluation</h2>
          <p className="text-ink-600 text-sm">The investigations recommended depend on symptoms.</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Pelvic Ultrasound</h3>
              <p className="text-ink-600 text-sm">Ultrasound may help assess the uterus, endometrium, ovaries, fibroids, cysts, and certain features of PCOS.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Hormonal Blood Tests</h3>
              <p className="text-ink-600 text-sm">Tests may include thyroid function, prolactin, FSH, LH, estradiol, AMH when fertility assessment is relevant, and other tests depending on symptoms.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Pregnancy Testing</h3>
              <p className="text-ink-600 text-sm">Pregnancy testing may be advised when periods are delayed or symptoms suggest possible pregnancy.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Cervical Screening</h3>
              <p className="text-ink-600 text-sm">Pap smear or HPV testing may be advised according to age and clinical history.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Endometrial Evaluation</h3>
              <p className="text-ink-600 text-sm">In selected cases of abnormal bleeding, further assessment of the uterine lining may be required.</p>
            </div>
          </div>
        </div>

        {/* Gynaecological Care and Fertility Treatment Under One Roof */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Gynaecological Care and Fertility Treatment Under One Roof</h2>
          <p className="text-ink-600 text-sm">For patients who also have difficulty conceiving, combining gynaecological and fertility evaluation can be useful.</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">PCOS</h3>
              <p className="text-ink-600 text-sm">Ovulation and metabolic concerns can be evaluated alongside fertility planning.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Endometriosis</h3>
              <p className="text-ink-600 text-sm">Treatment decisions can account for both pain symptoms and fertility goals.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Fibroids</h3>
              <p className="text-ink-600 text-sm">The location and size of fibroids can be considered when planning pregnancy or <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Ovarian Cysts</h3>
              <p className="text-ink-600 text-sm">The effect of cysts on ovarian reserve and fertility treatment can be assessed.</p>
            </div>
          </div>
        </div>

        {/* When Is Surgery Needed / Why Regular Check-Ups Matter */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Surgery and Preventive Care in Gynaecology</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">When Is Surgery Needed for a Gynaecological Condition?</h3>
              <p className="text-ink-600 text-sm">Not every gynaecological problem needs surgery. Surgery may be considered in selected cases depending on severity of symptoms, size and location of abnormality, risk of complications, fertility goals, and response to medical treatment. Possible procedures can include hysteroscopic or laparoscopic approaches depending on the condition.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Why Regular Gynaecological Check-Ups Matter</h3>
              <p className="text-ink-600 text-sm">Regular gynaecological care can help identify menstrual problems, detect reproductive-health concerns, manage PCOS, monitor fibroids and ovarian cysts, discuss contraception and pregnancy planning, review fertility concerns, support menopause care, and keep cervical screening up to date. Early evaluation is especially useful when symptoms are persistent or worsening.</p>
            </div>
          </div>
        </div>

        {/* Gynaecological Consultation Cost */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Gynaecological Consultation Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of gynaecological care in Noida depends on the type of consultation and investigations required.</p>
          <p className="text-ink-600 text-sm mt-2">Costs may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Gynaecology consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Pelvic ultrasound
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hormonal tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Blood investigations
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Cervical screening
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility evaluation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Medicines
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Procedures if required
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The exact cost can only be estimated after understanding your symptoms and required investigations.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Gynaecological Care in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — Consultations are provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Women`s Health and Fertility Care</strong> — Gynaecological concerns and fertility-related issues can be evaluated within the same care setting.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Treatment Planning</strong> — Treatment is based on symptoms, diagnosis, age and reproductive goals.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">PCOS and Menstrual Care</strong> — Irregular periods, ovulation concerns and hormonal symptoms can be evaluated and managed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fibroid, Cyst and Endometriosis Evaluation</strong> — Ultrasound and appropriate diagnostic assessment can help guide treatment decisions.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility-Focused Gynaecology</strong> — Patients planning pregnancy or experiencing infertility can receive treatment with fertility goals in mind.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking gynaecological and fertility care in Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Gynaecology Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you are experiencing irregular periods, PCOS symptoms, heavy bleeding, pelvic pain, fertility problems, fibroids, ovarian cysts or another women`s health concern, an accurate diagnosis is the first step.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised gynaecological and fertility care based on your individual health needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Gynaecology Consultation
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