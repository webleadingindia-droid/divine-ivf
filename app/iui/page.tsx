// app/iui/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/iui" },
  title: "IUI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Intrauterine Insemination (IUI) in Sector 76, Noida — a gentle first-step fertility treatment with Dr. Mandavi Rai. Learn about IUI procedure, success rates, and candidacy.",
  robots: { index: true, follow: true },
  keywords:
    "IUI treatment in Noida, intrauterine insemination, IUI procedure, fertility treatment Noida, IUI success rate, artificial insemination, IVF specialist Noida, Dr. Mandavi Rai, Divine IVF, fertility clinic Noida, IUI cost, IUI for infertility",
  openGraph: {
    title: "IUI Treatment in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Intrauterine Insemination (IUI) with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — a gentle first step for suitable fertility profiles.",
    url: "https://www.divineivf.com/iui",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "IUI treatment consultation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IuiPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IUI Treatment" },
      ]}
      eyebrow="Fertility Care · Noida"
      titlePlain="IUI —"
      titleAccent="a gentler first step"
      intro="Intrauterine insemination (IUI) places specially prepared sperm directly into the uterus around the time of ovulation — often considered before moving to more involved treatment like IVF."
      heroImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Doctor discussing IUI treatment with a couple at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="IUI procedure preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "IUI treatment in Noida (Intrauterine Insemination) is a fertility procedure where sperm is washed, concentrated, and placed directly into the uterus using a thin catheter. The procedure is timed precisely around ovulation to maximise the chances of fertilisation.",
        "Unlike IVF treatment, IUI works with your body's natural processes — it simply gives the sperm a head start by placing them closer to the egg. This intrauterine insemination procedure is less invasive, more affordable, and often the first fertility treatment recommended for suitable couples.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai carefully evaluates each couple's fertility investigation results to determine if IUI is the right path forward — or if another approach like IVF treatment would be more appropriate."
      ]}
      whoNeedsIt={[
        "Couples with mild male infertility — low sperm count or motility issues that can be overcome with sperm washing",
        "Unexplained infertility where initial fertility investigation shows no clear cause but IUI may help",
        "Ovulatory concerns that can be managed with fertility medication and cycle monitoring",
        "Same-sex couples or single women using donor sperm for conception",
        "Couples where the female partner has open, healthy fallopian tubes and normal ovarian reserve",
      ]}
      preparation={[
        "Before your first IUI cycle, Dr. Rai will confirm that your fallopian tubes are open and that ovulation can be tracked reliably — this is usually established during your initial fertility investigation. You may be prescribed ovulation-support medication to stimulate follicle development.",
        "You'll undergo ultrasound monitoring to track follicle growth and time the IUI procedure precisely around your fertile window. Your partner (or donor sample) will need to provide a fresh sample on the day of the procedure, so timing is coordinated in advance. The sample is then processed in the lab to select healthy, motile sperm.",
        "For the artificial insemination procedure itself, you'll be asked to arrive with a comfortably full bladder, which helps straighten the uterine angle for easier catheter placement. The entire process is explained step-by-step, so you know exactly what to expect."
      ]}
      howItWorks={[
        { title: "Cycle Monitoring", description: "Ovulation is tracked via ultrasound monitoring, sometimes with medication support to stimulate follicle development." },
        { title: "Sperm Preparation", description: "A fresh sample is washed and concentrated in the lab to select healthy, motile sperm for intrauterine insemination." },
        { title: "Insemination", description: "The prepared sperm is placed directly into the uterus using a thin, flexible catheter — a quick, nearly painless procedure." },
        { title: "Luteal Phase Support", description: "You may receive progesterone support to help prepare the uterine lining for implantation." },
        { title: "Follow-Up", description: "A pregnancy test is scheduled roughly two weeks later, followed by a consultation to review results." },
      ]}
      whatToExpect="The IUI procedure itself takes only a few minutes and is typically well-tolerated — most patients describe it as similar to a routine gynaecological exam. Mild cramping afterward is common and usually resolves within a few hours. You can resume normal activities the same day. Dr. Rai and her team will be with you throughout, explaining each step and answering any questions."
      benefits={[
        "Less invasive and more affordable than IVF treatment — making it accessible for many couples",
        "Works with your body's natural processes rather than replacing them entirely",
        "Can be repeated across multiple cycles if needed, often with increasing success",
        "No need for anaesthesia or surgical intervention — a simple outpatient procedure",
        "A reasonable first step for suitable fertility profiles before considering more complex options",
      ]}
      considerations={[
        "Success rates for IUI treatment are lower than IVF — approximately 10-20% per cycle depending on individual factors",
        "Not suitable when fallopian tubes are blocked or damaged, or when male infertility is severe",
        "May be recommended for a limited number of cycles (typically 3-6) before reconsidering IVF",
        "Success depends heavily on timing — precise ultrasound monitoring is essential",
        "Some patients may experience mild cramping or spotting after the procedure",
      ]}
      related={[
        { name: "IVF Treatment", href: "/ivf", blurb: "Considered when IUI isn't suitable or hasn't worked — a more advanced fertility treatment." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The fertility evaluation that determines if IUI is right for you." },
        { name: "Male Infertility", href: "/male-infertility", blurb: "Evaluating male-factor contributions to fertility — essential for IUI candidacy." },
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
          question: "How many IUI cycles are typically recommended?",
          answer:
            "This is individual and depends on your evaluation and response. Dr. Rai typically recommends 3-6 cycles of IUI treatment before considering IVF, but this varies based on age, fertility factors, and how you respond to each cycle.",
        },
        {
          question: "Is the IUI procedure painful?",
          answer:
            "Most patients describe intrauterine insemination as similar to a routine gynaecological exam. You may feel mild cramping during or after the procedure, similar to menstrual cramps, which typically resolves within a few hours.",
        },
        {
          question: "What is the success rate of IUI treatment?",
          answer:
            "Success rates for IUI vary widely depending on age, fertility diagnosis, and individual factors. On average, success rates range from 10-20% per cycle. Dr. Rai will discuss realistic expectations based on your specific fertility evaluation results.",
        },
        {
          question: "Can IUI be done with donor sperm?",
          answer:
            "Yes, IUI treatment is commonly performed with donor sperm for same-sex couples, single women, or couples with severe male-factor infertility. The donor sperm is prepared in the lab just like a fresh partner sample.",
        },
        {
          question: "Do I need to take fertility medication for IUI?",
          answer:
            "In many cases, fertility medication is prescribed to stimulate follicle development and time ovulation precisely. This is determined during your fertility investigation and cycle monitoring. Some patients may attempt natural cycle IUI without medication.",
        },
        {
          question: "How long does the IUI procedure take?",
          answer:
            "The actual IUI procedure takes only 5-10 minutes. However, plan to spend 1-2 hours at the clinic total, including sperm preparation time and any pre-procedure monitoring.",
        },
        {
          question: "Can I go back to work after IUI?",
          answer:
            "Yes, most patients resume normal activities — including work — immediately after the intrauterine insemination procedure. Mild cramping is common but typically doesn't interfere with daily activities.",
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
          <strong>IUI treatment in Noida</strong> offers couples a gentle, accessible entry point into 
          <strong>fertility treatment</strong>. Unlike <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">IVF</Link>, 
          which involves retrieving eggs and creating embryos in the lab, <strong>intrauterine insemination</strong> 
          works with your body`s natural cycle — simply placing prepared sperm closer to the egg at the optimal time.
        </p>

        <p>
          The journey typically begins with a comprehensive <Link href="/fertility-investigation" className="text-rose-600 font-semibold hover:underline">
          fertility investigation</Link> to confirm that IUI is the right fit. Dr. Mandavi Rai reviews your 
          <strong>fertility evaluation</strong> results — including <strong>hormonal assessment</strong>, 
          <strong>semen analysis</strong>, and <strong>ultrasound</strong> findings — to ensure your fallopian 
          tubes are open, ovulation is occurring, and sperm quality is adequate for <strong>IUI</strong> to be effective.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Sperm preparation for IUI treatment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="IUI consultation with Dr. Mandavi Rai at Divine IVF Sector 76 Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="IUI procedure preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          For many couples, <strong>IUI treatment</strong> represents the sweet spot between natural conception 
          and more intensive interventions. It`s particularly effective for couples with mild <strong>male infertility</strong>, 
          unexplained <strong>fertility</strong> challenges, or those using <strong>donor sperm</strong>. The 
          <strong>artificial insemination</strong> procedure bypasses cervical mucus barriers and delivers a 
          concentrated sample of healthy sperm directly to the uterus — significantly improving the chances 
          of fertilisation.
        </p>

        <p>
          <strong>Intrauterine insemination</strong> is also a valuable diagnostic tool. If three to six cycles 
          of well-timed <strong>IUI</strong> don`t result in pregnancy, it may suggest that more advanced 
          <strong>fertility treatment</strong> like <Link href="/ivf" className="text-rose-600 font-semibold hover:underline">IVF</Link> 
          is needed — information that helps guide the next steps of your journey.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Why Choose IUI Treatment at Divine IVF?
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Expert fertility evaluation by Dr. Mandavi Rai before recommending IUI
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Advanced lab facilities for precise sperm preparation
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Individualised cycle monitoring with ultrasound and hormonal assessment
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Transparent guidance on IUI success rates and realistic expectations
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Coordinated care with male infertility evaluation when needed
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>IUI treatment</strong> is 
          rooted in evidence-based practice and personalised care. Dr. Rai follows guidelines from leading 
          organisations including the{" "}
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
            href="https://main.icmr.nic.in/content/guidelines-art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            ICMR Guidelines for ART
          </a>
          . This ensures your <strong>fertility treatment</strong> is supported by the latest clinical evidence 
          and best practices.
        </p>
      </div>
    </TreatmentTemplate>
  );
}