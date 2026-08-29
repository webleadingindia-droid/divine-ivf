// app/obstetric-ultrasound/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/obstetric-ultrasound" },
  title: "Obstetric Ultrasound in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Obstetric ultrasound and pregnancy monitoring in Sector 76, Noida — dating scans, anomaly scans, and growth monitoring with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "obstetric ultrasound in Noida, pregnancy ultrasound, dating scan, anomaly scan, growth scan, pregnancy monitoring, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, pregnancy care, ultrasound during pregnancy, fetal monitoring",
  openGraph: {
    title: "Obstetric Ultrasound in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Obstetric ultrasound and pregnancy monitoring with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — dating scans, anomaly scans, and growth monitoring.",
    url: "https://www.divineivf.com/obstetric-ultrasound",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Obstetric ultrasound at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ObstetricUltrasoundPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Pregnancy Care", href: "/pregnancy-care" },
        { label: "Obstetric Ultrasound" },
      ]}
      eyebrow="Pregnancy Care · Noida"
      titlePlain="Obstetric"
      titleAccent="Ultrasound"
      intro="Regular ultrasound monitoring through pregnancy helps track your baby's growth and wellbeing at each stage — from confirming the pregnancy to monitoring your baby's development right through to the final weeks."
      heroImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Obstetric ultrasound monitoring during pregnancy at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Pregnancy ultrasound consultation at Divine IVF Clinic, Noida"
      whatItIs={[
        "Obstetric ultrasound uses high-frequency sound waves to create detailed images of your baby throughout pregnancy. This non-invasive, painless procedure is used to confirm pregnancy dates, monitor fetal growth, check for structural abnormalities, and assess the wellbeing of both mother and baby at key stages.",
        "Different scans serve different purposes at different stages of pregnancy. An early dating scan confirms the pregnancy location and estimates the due date. A detailed anomaly scan (typically performed around 18-22 weeks) checks for structural abnormalities. Later growth scans monitor your baby's size, position, and wellbeing as you approach delivery.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides obstetric ultrasound as part of comprehensive pregnancy care — whether you've conceived through fertility treatment or naturally."
      ]}
      whoNeedsIt={[
        "All pregnant women benefit from routine obstetric ultrasound monitoring at key stages of pregnancy",
        "Confirming and dating an early pregnancy — usually performed around 6-10 weeks",
        "Routine monitoring at each trimester to track your baby's growth and development",
        "Following up on any specific concern raised during pregnancy — such as reduced fetal movements or growth concerns",
        "Monitoring pregnancies that followed fertility treatment — which may benefit from additional scans",
        "Checking the position of the baby and placenta in the third trimester",
        "Assessing fetal wellbeing in high-risk pregnancies or pregnancies with complications",
        "Monitoring multiple pregnancies (twins, triplets) which require more frequent scans",
      ]}
      preparation={[
        "For very early scans (first trimester), arriving with a comfortably full bladder can improve image clarity by pushing the uterus into a better position for viewing. The clinic will let you know if this applies to your specific appointment.",
        "For later pregnancy scans (second and third trimester), generally no special preparation is needed — you can eat and drink normally before your appointment.",
        "Wear comfortable, loose-fitting clothing that allows easy access to your abdomen. You may be asked to change into a gown for the scan.",
        "If you have any previous ultrasound reports or medical records, bring them along so Dr. Rai can see the full picture of your pregnancy."
      ]}
      howItWorks={[
        { title: "Early Dating Scan (6-10 weeks)", description: "Confirms pregnancy location (intrauterine), estimates the gestational age and due date, checks for the baby's heartbeat, and may detect multiple pregnancies." },
        { title: "Nuchal Translucency Scan (11-14 weeks)", description: "Measures the fluid at the back of the baby's neck as part of first-trimester screening for chromosomal conditions. Combined with maternal blood tests for comprehensive screening." },
        { title: "Anomaly Scan (18-22 weeks)", description: "A detailed scan that checks for structural abnormalities in the baby's anatomy — including the brain, spine, heart, abdomen, and limbs. Also checks the placenta and amniotic fluid levels." },
        { title: "Growth Scans (Third Trimester)", description: "Later scans track your baby's growth, position, and wellbeing. They assess fetal size, amniotic fluid volume, placental position, and blood flow to the baby." },
        { title: "Discussion", description: "Findings are explained clearly at each visit. You'll see your baby in real time and have the opportunity to ask questions." },
      ]}
      whatToExpect="Ultrasound scans are non-invasive and generally quick — typically lasting 15-30 minutes depending on the type of scan. You'll lie on an examination table, and a small amount of gel is applied to your abdomen. A handheld probe (transducer) is then moved over your skin to capture images. You'll usually see the images in real time during your visit. There's no discomfort beyond mild pressure from the probe. After the scan, Dr. Rai will explain the findings and what they mean for your pregnancy."
      benefits={[
        "Non-invasive and painless way to monitor your baby through every stage of pregnancy",
        "Helps confirm pregnancy dates and estimate the due date accurately",
        "Detects certain concerns early — including structural abnormalities and growth issues",
        "Provides reassurance and peace of mind throughout pregnancy",
        "Results explained directly during your visit — no waiting for reports",
        "Allows you to see your baby in real time and bond during pregnancy",
        "Essential for monitoring high-risk pregnancies and pregnancies following fertility treatment",
      ]}
      considerations={[
        "Scan schedule may be adjusted based on your individual pregnancy and any specific concerns",
        "Some findings may prompt additional monitoring, further scans, or specialist referral",
        "Not all abnormalities can be detected on ultrasound — some conditions may become apparent only later in pregnancy or after birth",
        "The accuracy of dating and growth measurements can vary slightly",
        "Some women may need internal (transvaginal) scans in early pregnancy for better visualisation",
        "You may need to return for a repeat scan if the baby's position doesn't allow all measurements to be taken",
      ]}
      related={[
        { name: "Normal Vaginal Delivery", href: "/normal-delivery", blurb: "Delivery care as your pregnancy progresses — preparing for a natural birth." },
        { name: "Cesarean Delivery", href: "/cesarean-delivery", blurb: "Planned and emergency caesarean care when needed for you or your baby." },
        { name: "Pregnancy Care", href: "/pregnancy-care", blurb: "The full pregnancy care timeline — from confirmation to delivery and beyond." },
        { name: "IVF Treatment", href: "/ivf", blurb: "Fertility treatment that may have led to your pregnancy — with dedicated pregnancy monitoring." },
      ]}
      externalResources={[
        {
          label: "Ultrasound Imaging in Pregnancy",
          source: "ACOG",
          href: "https://www.acog.org/womens-health/faqs/ultrasound-exams",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "Routine Antenatal Care",
          source: "WHO",
          href: "https://www.who.int/health-topics/antenatal-care",
        },
      ]}
      faqs={[
        {
          question: "How many ultrasounds will I have during pregnancy?",
          answer:
            "This varies by individual pregnancy. Most women have 2-3 routine scans: an early dating scan, a nuchal translucency scan (optional), and a detailed anomaly scan. Additional growth scans may be recommended in the third trimester based on your individual needs. Dr. Rai will outline a monitoring schedule suited to you at your first visit.",
        },
        {
          question: "Are ultrasounds safe during pregnancy?",
          answer:
            "Yes — ultrasound is a standard, non-invasive part of routine pregnancy care used worldwide. It uses sound waves, not radiation, and has been shown to be safe for both mother and baby. The scans are performed using the lowest possible energy levels to obtain the necessary images.",
        },
        {
          question: "What can I expect during the anomaly scan?",
          answer:
            "The anomaly scan (typically performed around 18-22 weeks) is a detailed examination of your baby's anatomy. The sonographer will check your baby's brain, spine, heart, abdomen, limbs, and other structures. The scan takes about 30-45 minutes and may require you to change position if your baby is not in an ideal position for viewing.",
        },
        {
          question: "Do I need a full bladder for my scan?",
          answer:
            "For early scans (first trimester), a comfortably full bladder can help improve image quality. For later scans, a full bladder is generally not needed. The clinic will let you know if this applies to your specific appointment.",
        },
        {
          question: "Can I find out the baby's sex during the ultrasound?",
          answer:
            "The baby's sex can often be determined during the anomaly scan (around 18-22 weeks), but this depends on your baby's position and cooperation. If you wish to know, Dr. Rai will try to determine the sex if possible. Some parents prefer to wait and find out at birth — it's entirely your choice.",
        },
        {
          question: "What if something abnormal is found on the scan?",
          answer:
            "If something unusual is found, Dr. Rai will explain the findings clearly and discuss the next steps. This may include additional monitoring, further scans, referral to a specialist, or additional tests. Most findings are minor and resolve on their own. Dr. Rai is committed to supporting you through any concerns with honesty and compassion.",
        },
        {
          question: "Is obstetric ultrasound available for pregnancies after fertility treatment?",
          answer:
            "Yes — obstetric ultrasound is available for all pregnancies, including those conceived through fertility treatment. Pregnancies following IVF or other fertility treatments may benefit from additional monitoring, and Dr. Rai provides dedicated pregnancy care for these patients.",
        },
        {
          question: "When should I have my first pregnancy scan?",
          answer:
            "The first scan is typically performed around 6-10 weeks of pregnancy to confirm the pregnancy location and estimate the due date. Dr. Rai will advise on the best timing for your first scan based on your individual situation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
              alt="Obstetric ultrasound monitoring at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
              alt="Pregnancy ultrasound consultation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>Obstetric ultrasound in Noida</strong> is offered at <strong>Divine IVF, 
          Sector 76</strong> as part of comprehensive <Link href="/pregnancy-care" className="text-rose-600 font-semibold hover:underline">
          pregnancy care</Link>. <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> provides ultrasound monitoring to track your baby's growth and 
          wellbeing at every stage — from confirming the pregnancy to monitoring your baby's 
          development right through to the final weeks.
        </p>

        <p>
          <strong>Obstetric ultrasound</strong> is one of the most important tools in pregnancy 
          care. It allows you to see your baby in real time, provides reassurance about your 
          baby's health, and helps identify any potential concerns early when they can be 
          addressed most effectively.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Early pregnancy dating scan at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Obstetric ultrasound consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631815589968-25f8a2c7aa92?q=80&w=1200&auto=format&fit=crop"
              alt="Third trimester growth scan at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Obstetric ultrasound</strong> is used at key stages throughout pregnancy:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>Early Dating Scan (6-10 weeks)</strong> — Confirms the pregnancy location (ensuring it's in the uterus), estimates the gestational age and due date, and checks for the baby's heartbeat.
          </li>
          <li>
            <strong>Nuchal Translucency Scan (11-14 weeks)</strong> — Measures the fluid at the back of the baby's neck as part of first-trimester screening, combined with maternal blood tests.
          </li>
          <li>
            <strong>Anomaly Scan (18-22 weeks)</strong> — A detailed scan checking the baby's anatomy, including the brain, spine, heart, abdomen, and limbs.
          </li>
          <li>
            <strong>Growth Scans (Third Trimester)</strong> — Monitor your baby's size, position, amniotic fluid levels, and placental position as you approach delivery.
          </li>
        </ul>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Key Pregnancy Scans at a Glance
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">6-10 Weeks</span>
              <span>Dating Scan — Confirms pregnancy, estimates due date, checks heartbeat</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">11-14 Weeks</span>
              <span>Nuchal Translucency — First-trimester screening for chromosomal conditions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">18-22 Weeks</span>
              <span>Anomaly Scan — Detailed anatomy scan of your baby's development</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">Third Trimester</span>
              <span>Growth Scans — Monitor growth, position, and wellbeing as you approach delivery</span>
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, <strong>obstetric ultrasound</strong> 
          is performed with the highest standards of care. Dr. Rai follows guidelines from 
          leading organisations including the{" "}
          <a
            href="https://www.acog.org/womens-health/faqs/ultrasound-exams"
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
            href="https://www.who.int/health-topics/antenatal-care"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            World Health Organization (WHO)
          </a>
          . This ensures your pregnancy care is supported by the latest clinical evidence and 
          best practices in obstetric ultrasound.
        </p>

        <p>
          Whether you're having your first scan to confirm your pregnancy, the detailed anomaly 
          scan to check your baby's development, or a growth scan in the final weeks, you can 
          expect the same thorough, compassionate, and evidence-based care that defines 
          <strong>Divine IVF</strong>.
        </p>
      </div>
    </TreatmentTemplate>
  );
}