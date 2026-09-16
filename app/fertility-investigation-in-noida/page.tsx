// app/fertility-investigation-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/fertility-investigation-in-noida" },
  title: "Fertility Investigation in Noida | Fertility Tests | Divine IVF",
  description:
    "Get fertility investigation in Noida with Dr. Mandavi Rai at Divine IVF. Female & male fertility tests, AMH, ultrasound, semen analysis and personalised evaluation.",
  robots: { index: true, follow: true },
  keywords:
    "Fertility Investigation in Noida, Fertility Tests in Noida, Fertility Evaluation in Noida, Infertility Tests in Noida, Female Fertility Test in Noida, Male Fertility Test in Noida, Fertility Checkup in Noida, Infertility Diagnosis in Noida, Fertility Specialist in Noida, AMH Test for Fertility, Semen Analysis in Noida, Ovarian Reserve Test, Fertility Clinic in Noida",
  openGraph: {
    title: "Fertility Investigation in Noida | Fertility Tests | Divine IVF",
    description:
      "Get fertility investigation in Noida with Dr. Mandavi Rai at Divine IVF. Female & male fertility tests, AMH, ultrasound, semen analysis and personalised evaluation.",
    url: "http://divine-ivf.vercel.app/fertility-investigation-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/3tmEBl39OFwhrUjpXsYO/image.png",
        width: 1200,
        height: 630,
        alt: "Fertility investigation consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function FertilityInvestigationPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "Fertility Investigation in Noida" },
      ]}
      eyebrow="Fertility Care · Noida"
      // ========== H1 ADDED HERE ==========
      titlePlain="Fertility Investigation in Noida"
      titleAccent="Understand the possible causes of infertility"
      // ====================================
      intro="Difficulty conceiving does not always mean that you immediately need IVF. The first step is often a detailed fertility investigation to understand the factors that may be affecting your chances of pregnancy."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/3tmEBl39OFwhrUjpXsYO/image.png"
      heroAlt="Fertility specialist consultation at Divine IVF, Sector 76, Noida"
      secondaryImage="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
      secondaryImageAlt="Hormonal blood test during fertility investigation at Divine IVF, Noida"
      whatItIs={[
        "Fertility investigation is a systematic evaluation performed to identify factors that may be making conception difficult. It can involve a combination of medical and reproductive history, hormonal blood tests, ovarian reserve testing, pelvic ultrasound, ovulation assessment, uterus and fallopian tube evaluation, semen analysis, and further specialised investigations when clinically required.",
        "A proper fertility evaluation in Noida can help your doctor understand whether difficulty conceiving may be related to ovulation, egg reserve, the uterus, fallopian tubes, sperm-related factors, or a combination of factors. Instead of starting treatment without knowing the underlying situation, investigations help build a more personalised treatment plan.",
        "At Divine IVF in Noida, Dr. Mandavi Rai provides a structured fertility evaluation for both female and male partners. Based on your medical history, menstrual cycles, previous pregnancy or fertility treatment, and investigation results, an appropriate next step can be planned.",
      ]}
      whoNeedsIt={[
        "Women under 35 who have been trying to conceive for 12 months or more without success",
        "Women aged 35 or above who have been trying for approximately 6 months",
        "Irregular, very infrequent, or absent periods that may indicate ovulation problems",
        "Known conditions such as PCOS, endometriosis, or fibroids that may affect fertility",
        "Recurrent pregnancy loss requiring further evaluation",
        "Suspected or known male fertility issues including low sperm count or motility",
        "Previous unsuccessful fertility treatment requiring review and further investigation",
      ]}
      preparation={[
        "Fertility investigation at Divine IVF begins with an initial consultation where your medical, menstrual, fertility, and treatment history is discussed in detail. You can bring any previous fertility reports, blood tests, ultrasound scans, semen analysis reports, or treatment records to avoid repeating tests unnecessarily.",
        "Some tests are timed to specific days of your cycle, so tracking your menstrual cycle before your first visit helps. For the male partner, a semen analysis typically requires 2-5 days of abstinence beforehand — the clinic will confirm exact timing when the test is booked.",
      ]}
      howItWorks={[
        { title: "Step 1 – Initial Consultation", description: "Your fertility journey begins with a consultation with Dr. Mandavi Rai, where your medical, menstrual, fertility, and treatment history is discussed. Bring any previous reports to your consultation." },
        { title: "Step 2 – Female Fertility Evaluation", description: "Based on your history, appropriate tests may be recommended to assess ovulation, hormonal health, ovarian reserve, ovaries, uterus, and fallopian tubes." },
        { title: "Step 3 – Male Fertility Evaluation", description: "The male partner undergoes semen analysis as part of the initial fertility assessment. Further evaluation is recommended only when necessary." },
        { title: "Step 4 – Review of Results", description: "Once relevant reports are available, Dr. Mandavi Rai reviews the findings with you and explains what they may mean for your fertility." },
        { title: "Step 5 – Personalised Next-Step Plan", description: "The next step depends entirely on the findings — which may include trying naturally with fertility guidance, lifestyle management, IUI, IVF, ICSI, or treatment for an underlying gynaecological condition." },
      ]}
      whatToExpect="Most investigations can be completed over a small number of visits, though timing may depend on your cycle for certain tests. Dr. Rai reviews results with you directly, in plain language, rather than leaving you to interpret reports alone. A fertility investigation does not automatically mean you will need IVF — the purpose is to determine which approach is appropriate for your situation."
      benefits={[
        "Helps identify possible causes of infertility through systematic evaluation",
        "Evaluates both partners, as fertility is a couple-related issue",
        "Helps avoid unnecessary treatment — not every couple requires IVF",
        "Supports personalised treatment planning based on actual clinical findings",
        "Helps save valuable time, especially for women with age-related fertility concerns",
      ]}
      considerations={[
        "Some tests are timed to specific points in your cycle",
        "Results sometimes point toward further, more specific investigation",
        "Not every case results in a definitive single cause — a plan can still be made regardless",
        "Some specialised procedures may cause temporary discomfort; your doctor will explain beforehand",
      ]}
      related={[
        { name: "IUI Treatment", href: "/iui", blurb: "Often the next step for suitable fertility investigation findings." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Considered for more significant findings from your fertility evaluation." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Dedicated evaluation for male-factor fertility issues." },
        { name: "Gynaecology Care", href: "/gynecology", blurb: "Conditions like PCOS and fibroids evaluated as part of fertility care." },
      ]}
      externalResources={[
        {
          label: "Diagnostic Testing for Infertility",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/diagnostic-testing-for-infertility/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
      ]}
      faqs={[
        {
          question: "What is included in a fertility investigation?",
          answer:
            "A fertility investigation may include medical history, hormonal blood tests, ovarian reserve assessment, ultrasound, ovulation assessment, evaluation of the uterus and fallopian tubes, and semen analysis for the male partner. The exact investigations depend on your individual history.",
        },
        {
          question: "How long does fertility investigation take?",
          answer:
            "Some tests can be completed immediately, while others need to be performed during specific days of the menstrual cycle. Therefore, the complete assessment may take several days or sometimes more than one cycle depending on the tests required.",
        },
        {
          question: "Do both partners need fertility tests?",
          answer:
            "In many cases, yes. Fertility problems can be related to either partner or a combination of female and male factors, so evaluating both partners can provide a more complete picture.",
        },
        {
          question: "What fertility tests are done for women?",
          answer:
            "Tests may include AMH, FSH, LH, thyroid and prolactin tests, pelvic ultrasound, antral follicle count, ovulation assessment, and fallopian tube or uterine evaluation when clinically required.",
        },
        {
          question: "What is the first fertility test for men?",
          answer:
            "Semen analysis is commonly one of the first male fertility tests because it assesses sperm concentration, motility, morphology and other semen parameters.",
        },
        {
          question: "Does a low AMH mean pregnancy is impossible?",
          answer:
            "No. AMH is primarily a marker used in assessing ovarian reserve and potential ovarian response. It should be interpreted alongside age, ultrasound findings, medical history and other fertility factors.",
        },
        {
          question: "Will I need IVF after fertility investigation?",
          answer:
            "Not necessarily. Depending on your results, your doctor may recommend continued natural attempts, ovulation-related treatment, IUI, IVF, another fertility procedure, or treatment of an underlying condition.",
        },
        {
          question: "Is fertility investigation painful?",
          answer:
            "Many initial investigations involve consultation, blood tests, semen analysis and ultrasound. Some specialised procedures may cause temporary discomfort. Your doctor should explain the procedure beforehand if additional testing is required.",
        },
        {
          question: "When should I visit a fertility specialist?",
          answer:
            "You may consider evaluation after trying unsuccessfully for approximately one year if under 35, or after around six months if 35 or older. Earlier consultation may be appropriate if you have irregular periods, PCOS, endometriosis, known reproductive problems, recurrent pregnancy loss, or male fertility concerns.",
        },
        {
          question: "Where can I get fertility investigation  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and investigation for both partners.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Fertility Investigation in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Understand the possible causes of infertility with a personalised fertility evaluation for both partners at Divine IVF, Sector 76, Noida.
        </p>
        {/* ============================================= */}

        {/* Clinic Info & CTA */}
        <div className="bg-gradient-to-r from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-ink-600 text-sm mt-1">
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
              Book Fertility Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 - Female Fertility Tests */}
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

        {/* What Is Fertility Investigation Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Fertility Investigation?</h2>
          <p className="text-ink-600">
            Fertility investigation is a systematic evaluation performed to identify factors that may be making conception difficult.
          </p>
          <p className="text-ink-600 mt-3">
            It can involve a combination of:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 list-disc list-inside text-ink-600">
            <li>Medical and reproductive history</li>
            <li>Hormonal blood tests</li>
            <li>Ovarian reserve testing (AMH &amp; AFC)</li>
            <li>Pelvic ultrasound</li>
            <li>Ovulation assessment</li>
            <li>Uterus and fallopian tube evaluation</li>
            <li>Semen analysis</li>
            <li>Further specialised investigations when clinically required</li>
          </ul>
        </div>

        {/* When Should You Consider Fertility Testing */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">When Should You Consider Fertility Testing?</h2>
          <p className="text-ink-600 mb-3">You may consider consulting a fertility specialist if:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Trying for 12 months</strong> (under 35)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Trying for 6 months</strong> (35 or older)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Irregular periods</strong> or absent periods</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>PCOS</strong> (Polycystic Ovary Syndrome)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Endometriosis</strong></span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Fibroids</strong> or uterine conditions</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Recurrent pregnancy loss</strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Male fertility concerns</strong> (low sperm count, motility)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-600">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>Previous unsuccessful</strong> fertility treatment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Row 2 - Male Fertility Tests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Semen analysis for male fertility investigation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Fertility consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Hormonal blood test during fertility investigation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Fertility Tests for Women */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Fertility Tests for Women</h2>
          <p className="text-ink-600 mb-4">Female fertility investigation may involve several tests depending on your age, symptoms, reproductive history, and previous treatment.</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">1. Detailed Medical &amp; Menstrual History</h3>
              <p className="text-ink-600 text-sm mt-1">Your fertility specialist may discuss how long you have been trying, cycle regularity, previous pregnancies, miscarriages, treatments, surgeries, medical conditions, family history, and current medications.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">2. Hormonal Blood Tests</h3>
              <p className="text-ink-600 text-sm mt-1">Tests may include AMH (Anti-Müllerian Hormone), FSH, LH, Estradiol, Progesterone, TSH (Thyroid-Stimulating Hormone), and Prolactin — not every patient needs every test.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">3. Ovarian Reserve Testing</h3>
              <p className="text-ink-600 text-sm mt-1">AMH blood test and Antral Follicle Count (AFC) via ultrasound are used to estimate the remaining quantity of eggs in the ovaries.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">4. Ultrasound Scan</h3>
              <p className="text-ink-600 text-sm mt-1">A pelvic or transvaginal ultrasound evaluates ovaries, follicle development, antral follicle count, uterine lining, fibroids, ovarian cysts, PCOS features, and other structural abnormalities.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">5. Ovulation Assessment</h3>
              <p className="text-ink-600 text-sm mt-1">If periods are irregular, ovulation can be assessed through menstrual history, ultrasound monitoring, and hormonal blood tests.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">6. Fallopian Tube Assessment</h3>
              <p className="text-ink-600 text-sm mt-1">If clinically indicated, testing to evaluate whether the fallopian tubes appear open may be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">7. Uterine Evaluation</h3>
              <p className="text-ink-600 text-sm mt-1">Ultrasound is usually an initial assessment. In selected cases, procedures such as hysteroscopy may be recommended for a closer evaluation of the uterine cavity.</p>
            </div>
          </div>
        </div>

        {/* Fertility Tests for Men */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Fertility Tests for Men</h2>
          <p className="text-ink-600 mb-3">Male fertility evaluation is an important part of a couple`s fertility assessment. Fertility investigation should generally not focus only on the female partner.</p>
          
          <div>
            <h3 className="font-semibold text-ink-900">Semen Analysis</h3>
            <p className="text-ink-600 text-sm mt-1">Semen analysis is often the first investigation performed for the male partner. It evaluates sperm concentration, sperm motility, sperm morphology, and semen volume.</p>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold text-ink-900">Additional Male Fertility Tests</h3>
            <p className="text-ink-600 text-sm mt-1">Some men may require additional investigations such as hormonal evaluation, clinical examination, ultrasound where indicated, or additional specialised sperm testing. These tests are not routinely required for every patient.</p>
          </div>
        </div>

        {/* Conditions Identified */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">What Conditions Can Fertility Investigation Help Identify?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Ovulation Disorders</strong> — Women who do not ovulate regularly may have difficulty conceiving naturally.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>PCOS</strong> — Can cause irregular ovulation and hormonal imbalance.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Reduced Ovarian Reserve</strong> — Can decline with age or due to certain medical factors.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Fallopian Tube Problems</strong> — Blocked or damaged tubes may prevent egg and sperm from meeting.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Endometriosis</strong> — May affect the ovaries, fallopian tubes, or pelvic environment.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Fibroids or Uterine Abnormalities</strong> — Certain structural abnormalities can interfere with implantation.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Male Factor Infertility</strong> — Changes in sperm concentration, movement, or morphology.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">✓</span>
              <span><strong>Unexplained Infertility</strong> — Even when no definite cause is found, evaluation helps determine suitable options.</span>
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Fertility Investigation  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility Evaluation Led by Dr. Mandavi Rai</strong> — Your fertility assessment is guided by a Gynecologist &amp; IVF Specialist with experience in obstetrics, gynaecology and reproductive medicine.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evaluation for Both Partners</strong> — Female and male fertility factors are considered as part of the fertility work-up.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Individualised Investigation</strong> — Investigations are recommended according to your history and fertility concerns rather than following the same checklist for every patient.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility &amp; Gynaecology Care Under One Roof</strong> — Conditions such as PCOS, fibroids, menstrual problems, and other gynaecological concerns can also be evaluated.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Multiple Fertility Treatment Options</strong> — Treatment options may include fertility guidance, IUI, IVF, ICSI and other advanced reproductive treatments when medically appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Making fertility consultations accessible for patients from Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* What to Bring */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            What Should You Bring to Your Fertility Consultation?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous fertility reports
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous AMH or hormonal reports
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound reports
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Semen analysis reports
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous IUI or IVF records
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Details of previous pregnancies or miscarriages
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Current medication list
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Relevant surgical or medical records
            </li>
          </ul>
          <p className="text-sm text-ink-500 mt-3">Having previous reports available can help your fertility specialist understand your history and may prevent unnecessary repetition of investigations.</p>
        </div>

        {/* Key Benefits Summary */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Key Benefits of Fertility Investigation at Divine IVF
          </h3>
          <ul className="space-y-2">
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Helps Identify Possible Causes</strong> A systematic evaluation provides more information about factors that may be affecting conception.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Evaluates Both Partners</strong> Fertility is a couple-related issue, which is why assessment of both partners may be important.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Helps Avoid Unnecessary Treatment</strong> Not every couple experiencing difficulty conceiving requires IVF.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Supports Personalised Treatment Planning</strong> Treatment can be selected based on actual clinical findings rather than assumptions.
            </li>
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
              <span className="text-rose-500">✓ </span>
                Helps Save Valuable Time</strong> For women with age-related fertility concerns or reduced ovarian reserve, early evaluation may help avoid unnecessary delay.
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Start Your Fertility Evaluation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have been trying to conceive without success, understanding the possible reason is an important first step.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility investigation and treatment planning based on your reproductive history and investigation results.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Fertility Consultation
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