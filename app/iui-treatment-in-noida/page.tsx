// app/iui-treatment-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/iui-treatment-in-noida" },
  title: "IUI Treatment in Noida | IUI Centre & Specialist | Divine IVF",
  description:
    "Looking for IUI treatment in Noida? Consult Dr. Mandavi Rai at Divine IVF for fertility evaluation, ovulation monitoring and personalised IUI treatment.",
  robots: { index: true, follow: true },
  keywords:
    "IUI Treatment in Noida, IUI Centre in Noida, IUI Clinic in Noida, Best IUI Centre in Noida, IUI Specialist in Noida, IUI Doctor in Noida, IUI Cost in Noida, IUI Treatment Cost in Noida, Intrauterine Insemination in Noida, IUI Procedure in Noida, IUI Fertility Treatment in Noida, IUI Treatment Near Me, Fertility Clinic in Noida, Infertility Treatment in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "IUI Treatment in Noida | IUI Centre & Specialist | Divine IVF",
    description:
      "Looking for IUI treatment in Noida? Consult Dr. Mandavi Rai at Divine IVF for fertility evaluation, ovulation monitoring and personalised IUI treatment.",
    url: "https://www.divineivf.com/iui-treatment-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/08/jlCyuiuFDN9eoCdYgMyo/image.png",
        width: 1200,
        height: 630,
        alt: "IUI treatment consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IuiTreatmentPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IUI Treatment in Noida" },
      ]}
      eyebrow="Fertility Care · Noida"
      // ========== H1 ==========
      titlePlain="IUI Treatment in Noida"
      titleAccent="A simple and less invasive fertility treatment for selected couples"
      // =========================
      intro="If you are facing difficulty getting pregnant, IUI treatment in Noida may be one of the fertility options your doctor recommends, depending on your age, fertility test results, sperm parameters, ovulation status, and reproductive history."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/08/jlCyuiuFDN9eoCdYgMyo/image.png"
      heroAlt="IUI treatment consultation with Dr. Mandavi Rai at Divine IVF, Noida"
      secondaryImage="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
      secondaryImageAlt="IUI procedure preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "IUI stands for Intrauterine Insemination. It is a fertility treatment in which specially prepared sperm is placed directly inside the uterus around the time of ovulation. The purpose is to bring a higher concentration of healthy, motile sperm closer to the egg and improve the chance of fertilisation.",
        "IUI is generally simpler and less invasive than IVF and may be recommended for selected fertility conditions. Unlike IVF, which involves retrieving eggs and creating embryos in the lab, IUI works with your body's natural cycle — simply placing prepared sperm closer to the egg at the optimal time.",
        "At Divine IVF, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and IUI treatment planning for suitable patients. The goal is to identify whether IUI is appropriate for you before starting treatment.",
      ]}
      whoNeedsIt={[
        "Unexplained infertility — when fertility tests do not identify a clear reason for difficulty conceiving",
        "Ovulation problems — women with irregular ovulation may undergo ovulation induction followed by IUI",
        "Mild male factor infertility — mild abnormalities in sperm count or motility with sufficient healthy sperm after preparation",
        "Cervical factor infertility — IUI bypasses the cervix by placing prepared sperm directly into the uterus",
        "Sexual or ejaculatory difficulties that affect natural conception",
        "Same-sex couples or single women using donor sperm for conception",
      ]}
      preparation={[
        "Before IUI treatment, certain investigations may be recommended. For women, these may include hormonal tests, AMH test, ultrasound, ovulation assessment, and fallopian tube evaluation. For men, semen analysis and additional tests if required.",
        "The IUI cycle may be performed during a natural cycle or with fertility medicines. Ultrasound scans may be used to monitor follicle growth, number of developing follicles, endometrial lining, and timing of ovulation. The aim is to determine the appropriate time for insemination.",
        "On the day of IUI, a semen sample is collected and processed in the laboratory to separate and concentrate healthy, motile sperm — this process is commonly known as sperm washing.",
      ]}
      howItWorks={[
        { title: "Step 1 – Fertility Consultation", description: "The process begins with a consultation with Dr. Mandavi Rai, where your fertility history, medical conditions, menstrual cycles, previous treatments, and fertility reports are reviewed." },
        { title: "Step 2 – Fertility Tests", description: "Before IUI treatment, investigations may be recommended including hormonal tests, AMH, ultrasound, ovulation assessment, fallopian tube evaluation, and semen analysis." },
        { title: "Step 3 – Ovulation Monitoring", description: "Ultrasound scans monitor follicle growth, number of developing follicles, endometrial lining, and timing of ovulation to determine the appropriate time for insemination." },
        { title: "Step 4 – Semen Sample Collection", description: "On the day of IUI, a semen sample is collected and processed in the laboratory to separate and concentrate healthy, motile sperm through sperm washing." },
        { title: "Step 5 – Intrauterine Insemination", description: "The prepared sperm sample is placed into the uterus using a thin catheter. The procedure generally takes only a few minutes and usually does not require anaesthesia." },
        { title: "Step 6 – After IUI", description: "After the procedure, most patients can return to normal daily activities. Your fertility specialist may prescribe medicines or supplements depending on your treatment plan." },
        { title: "Step 7 – Pregnancy Test", description: "A pregnancy test is usually advised approximately two weeks after the IUI procedure or according to your doctor's instructions." },
      ]}
      whatToExpect="The actual insemination procedure usually takes only a few minutes. However, semen preparation and other clinic processes can take additional time. IUI is generally performed as an outpatient fertility procedure, so hospital admission is usually not required. Most women experience little or no significant pain. Some patients may experience mild cramping, temporary discomfort, or minor spotting — these symptoms are generally short-lived."
      benefits={[
        "Less invasive than IVF — usually does not require egg retrieval or anaesthesia",
        "Simple fertility procedure — the actual insemination is relatively quick",
        "Can be combined with ovulation treatment when clinically appropriate",
        "Lower treatment complexity compared with IVF",
        "Suitable for selected fertility problems before moving to more advanced treatments",
        "Can be performed with donor sperm for same-sex couples or single women",
      ]}
      considerations={[
        "Not suitable for severe male factor infertility, very low sperm count, or motility issues",
        "Not recommended when fallopian tubes are blocked or damaged bilaterally",
        "May not be appropriate for severe endometriosis or significantly reduced ovarian reserve",
        "Success rates are lower than IVF — approximately 10-20% per cycle depending on individual factors",
        "May be recommended for a limited number of cycles (typically 3-6) before reconsidering IVF",
        "Success depends heavily on timing — precise ultrasound monitoring is essential",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf", blurb: "Considered when IUI isn't suitable or hasn't worked — a more advanced fertility treatment." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The fertility evaluation that determines if IUI is right for you." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Evaluating male-factor contributions to fertility — essential for IUI candidacy." },
        { name: "Female Infertility", href: "/female-infertility", blurb: "Understanding female fertility factors that may affect IUI success." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your IUI specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Intrauterine Insemination (IUI)",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/intrauterine-insemination-iui/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "ICMR Guidelines for Assisted Reproductive Technology",
          source: "ICMR - Government of India",
          href: "https://main.icmr.nic.in/content/guidelines-art",
        },
      ]}
      faqs={[
        {
          question: "What is IUI treatment?",
          answer:
            "IUI, or Intrauterine Insemination, is a fertility treatment in which specially prepared sperm is placed directly into the uterus around the time of ovulation.",
        },
        {
          question: "Is IUI better than IVF?",
          answer:
            "Neither treatment is universally better. IUI is simpler and may be suitable for selected fertility conditions, while IVF may be more appropriate for blocked fallopian tubes, severe male infertility, reduced ovarian reserve or other complex fertility problems.",
        },
        {
          question: "How long does IUI take?",
          answer:
            "The insemination procedure itself usually takes only a few minutes, although semen preparation and clinic procedures require additional time.",
        },
        {
          question: "Is IUI painful?",
          answer:
            "Most women experience little or no significant pain during IUI. Mild temporary cramping or discomfort can occur.",
        },
        {
          question: "Does IUI require hospital admission?",
          answer:
            "IUI is generally an outpatient procedure and hospital admission is usually not required.",
        },
        {
          question: "How many times can IUI be tried?",
          answer:
            "The number of cycles depends on your age, fertility diagnosis, sperm quality, ovarian reserve and previous treatment response. Your fertility specialist will reassess treatment after unsuccessful cycles.",
        },
        {
          question: "Is bed rest required after IUI?",
          answer:
            "Extended bed rest is generally not necessary after uncomplicated IUI. Most patients can return to routine activities based on their doctor's advice.",
        },
        {
          question: "What tests are required before IUI?",
          answer:
            "Tests may include hormonal testing, AMH, ultrasound, ovulation evaluation, fallopian tube assessment and semen analysis depending on the patient's fertility history.",
        },
        {
          question: "Can IUI work with low sperm count?",
          answer:
            "IUI may be considered in some cases of mild male factor infertility. Severe sperm abnormalities may require other treatments such as IVF with ICSI.",
        },
        {
          question: "What is the cost of IUI treatment in Noida?",
          answer:
            "The cost varies according to medicines, ultrasound monitoring, semen preparation, tests and the number of cycles required. A personalised estimate can be provided after fertility evaluation.",
        },
        {
          question: "Where can I get IUI treatment in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for fertility evaluation and personalised IUI treatment planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          IUI Treatment in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          A simple and less invasive fertility treatment for selected couples trying to conceive.
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
              Book IUI Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Fertility evaluation for IUI treatment at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ovulation monitoring for IUI treatment at Divine IVF Clinic Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is IUI Treatment Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is IUI Treatment?</h2>
          <p className="text-ink-600">
            <strong>IUI</strong> stands for <strong>Intrauterine Insemination</strong>.
          </p>
          <p className="text-ink-600 mt-2">
            It is a fertility treatment in which specially prepared sperm is placed directly inside the uterus around the time of ovulation.
          </p>
          <p className="text-ink-600 mt-2">
            The purpose is to bring a higher concentration of healthy, motile sperm closer to the egg and improve the chance of fertilisation.
          </p>
          <p className="text-ink-600 mt-2">
            IUI is generally simpler and less invasive than <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link> and may be recommended for selected fertility conditions.
          </p>
        </div>

        {/* Who May Need IUI Treatment */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Need IUI Treatment?</h2>
          <p className="text-ink-600 mb-3">IUI may be considered in certain cases, including:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Unexplained Infertility</strong> — Sometimes fertility tests do not identify a clear reason. In such cases, IUI may be considered depending on age and fertility profile.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Ovulation Problems</strong> — Women with irregular ovulation may undergo ovulation induction followed by IUI.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Mild Male Factor Infertility</strong> — IUI may be considered when there are mild abnormalities in sperm count or motility and sufficient healthy sperm are available after preparation.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Cervical Factor Infertility</strong> — In some cases, cervical mucus or other cervical factors may interfere with sperm movement. IUI bypasses the cervix by placing prepared sperm directly into the uterus.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Sexual or Ejaculatory Difficulties</strong> — Certain couples may benefit from IUI where intercourse or ejaculatory difficulties affect natural conception.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Donor Sperm Treatment</strong> — IUI can also be used in treatment cycles involving donor sperm where clinically appropriate.</span>
            </div>
          </div>
        </div>

        {/* Who May Not Be Suitable */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Who May Not Be Suitable for IUI?
          </h3>
          <p className="text-ink-600 text-sm mb-3">IUI is not the right treatment for every fertility condition. Your doctor may recommend other options if there is:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Severe male factor infertility
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Very low sperm count or motility
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Bilateral fallopian tube blockage
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Severe endometriosis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Significantly reduced ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Certain age-related fertility concerns
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Repeated unsuccessful IUI cycles
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Other conditions requiring IVF or ICSI
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A detailed <Link href="/fertility-investigation-in-noida" className="text-rose-600 font-semibold hover:underline">fertility evaluation</Link> is therefore important before deciding whether IUI is appropriate.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Sperm preparation for IUI treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="IUI consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="IUI procedure preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* IUI Treatment Process */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">IUI Treatment Process at Divine IVF, Noida</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Step 1 – Fertility Consultation</h3>
              <p className="text-ink-600 text-sm mt-1">The process begins with a consultation with Dr. Mandavi Rai, where your fertility history, medical conditions, menstrual cycles, previous treatments, and fertility reports are reviewed.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 2 – Fertility Tests</h3>
              <p className="text-ink-600 text-sm mt-1">Before IUI treatment, certain investigations may be recommended. For women, these may include hormonal tests, AMH test, ultrasound, ovulation assessment, and fallopian tube evaluation. For men, semen analysis and additional tests if required.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 3 – Ovulation Monitoring</h3>
              <p className="text-ink-600 text-sm mt-1">The IUI cycle may be performed during a natural cycle or with fertility medicines. Ultrasound scans may be used to monitor follicle growth, number of developing follicles, endometrial lining, and timing of ovulation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 4 – Semen Sample Collection</h3>
              <p className="text-ink-600 text-sm mt-1">On the day of IUI, a semen sample is collected. The sample is processed in the laboratory to separate and concentrate healthy, motile sperm — this process is commonly known as sperm washing.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 5 – Intrauterine Insemination</h3>
              <p className="text-ink-600 text-sm mt-1">The prepared sperm sample is placed into the uterus using a thin catheter. The procedure generally takes only a few minutes and usually does not require anaesthesia. Some women may experience mild temporary cramping or discomfort.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 6 – After IUI</h3>
              <p className="text-ink-600 text-sm mt-1">After the procedure, most patients can return to normal daily activities. Your fertility specialist may prescribe medicines or supplements depending on your treatment plan.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Step 7 – Pregnancy Test</h3>
              <p className="text-ink-600 text-sm mt-1">A pregnancy test is usually advised approximately two weeks after the IUI procedure or according to your doctor`s instructions.</p>
            </div>
          </div>
        </div>

        {/* Natural Cycle vs Stimulated IUI */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Natural Cycle IUI vs Stimulated IUI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-ink-50/50 rounded-xl p-4">
              <h3 className="font-semibold text-ink-900">Natural Cycle IUI</h3>
              <p className="text-ink-600 text-sm mt-1">Natural cycle IUI may be performed when a woman ovulates regularly. The natural menstrual cycle is monitored and IUI is timed around ovulation.</p>
            </div>
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-semibold text-ink-900">Stimulated IUI</h3>
              <p className="text-ink-600 text-sm mt-1">In some patients, fertility medicines may be used to stimulate follicle development. Ultrasound monitoring is performed to help identify the right time for IUI. The appropriate protocol depends on the patient`s fertility profile.</p>
            </div>
          </div>
        </div>

        {/* IUI vs IVF */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">IUI vs IVF – What Is the Difference?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">IUI</h3>
              <ul className="space-y-1 mt-2 text-sm text-ink-600">
                <li>• Fertilisation takes place inside the woman`s body</li>
                <li>• Prepared sperm is inserted into the uterus</li>
                <li>• The procedure is relatively simple</li>
                <li>• It is less invasive than IVF</li>
                <li>• May be suitable for selected fertility conditions</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">IVF</h3>
              <ul className="space-y-1 mt-2 text-sm text-ink-600">
                <li>• Eggs are retrieved from the ovaries</li>
                <li>• Fertilisation takes place in an embryology laboratory</li>
                <li>• Embryos are developed before transfer into the uterus</li>
                <li>• IVF involves more steps and procedures</li>
                <li>• Recommended for more complex fertility conditions</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-4">Your fertility specialist can help determine whether <Link href="/iui-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IUI</Link> or <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link> is more appropriate based on your test results.</p>
        </div>

        {/* Success Factors */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">IUI Success Depends on Several Factors</h2>
          <p className="text-ink-600 text-sm mb-3">The possibility of pregnancy with IUI varies from patient to patient. Factors that may affect the outcome include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Female Age</strong> — Fertility potential generally declines with increasing age.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Ovarian Reserve</strong> — The number and quality of available eggs may affect treatment outcomes.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Sperm Quality</strong> — Sperm count, motility and morphology can influence the likelihood of fertilisation.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Fallopian Tube Health</strong> — At least one functional fallopian tube is usually important for IUI.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Cause of Infertility</strong> — Certain fertility conditions respond better to IUI than others.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Duration of Infertility</strong> — How long a couple has been trying to conceive may also influence treatment planning.</span>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Therefore, no fertility clinic can guarantee an individual IUI outcome.</p>
        </div>

        {/* IUI Cost */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            IUI Cost in Noida
          </h3>
          <p className="text-ink-600 text-sm">The cost of IUI treatment in Noida may vary depending on the individual treatment plan. Factors influencing the total cost may include:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Initial fertility consultation
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound monitoring
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility medicines
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hormonal blood tests
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Semen preparation
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IUI procedure
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Number of treatment cycles required
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Additional investigations if necessary
            </li>
          </ul>
          <p className="text-sm text-ink-500 mt-3">Because every patient`s fertility condition is different, it is better to obtain a personalised cost estimate after fertility evaluation.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for IUI Treatment in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Treatment Under Dr. Mandavi Rai</strong> — Your fertility evaluation and IUI treatment plan are guided by a Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Assessment</strong> — IUI is recommended only after reviewing your reproductive history and <Link href="/fertility-investigation-in-noida" className="text-rose-600 font-semibold hover:underline">fertility investigation</Link> results.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evaluation of Both Partners</strong> — Female and male fertility factors are considered before treatment planning.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Ovulation Monitoring</strong> — Ultrasound and fertility assessments can be used to help determine the appropriate timing for IUI.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Multiple Fertility Treatment Options</strong> — If IUI is not suitable for your fertility condition, other options such as <Link href="/ivf-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">IVF</Link> or ICSI can be discussed when medically appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Located in Sector 76, Noida</strong> — Conveniently located for patients seeking fertility treatment in Noida and nearby areas.</div>
            </li>
          </ul>
        </div>

        {/* Key Benefits Summary */}
        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Benefits of IUI Treatment at Divine IVF
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Less Invasive Than IVF</strong> — IUI usually does not require egg retrieval or anaesthesia.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Simple Fertility Procedure</strong> — The actual insemination procedure is relatively quick.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Can Be Combined With Ovulation Treatment</strong> — IUI can be performed with ovulation induction when clinically appropriate.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Lower Treatment Complexity</strong> — Compared with IVF, IUI generally involves fewer treatment steps.
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              <strong>Suitable for Selected Fertility Problems</strong> — For properly selected patients, IUI may be considered before moving to more advanced treatments.
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an IUI Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have been trying to conceive and want to understand whether IUI may be suitable for you, start with a detailed fertility consultation.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation and treatment planning based on your individual fertility profile.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book IUI Consultation
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