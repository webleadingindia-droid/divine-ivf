// app/obstetric-ultrasound-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/obstetric-ultrasound-in-noida" },
  title: "Obstetric Ultrasound in Noida | Pregnancy Scan | Divine IVF",
  description:
    "Looking for obstetric ultrasound in Noida? Consult Dr. Mandavi Rai at Divine IVF for pregnancy dating scan, anomaly scan, growth scan and personalised pregnancy monitoring.",
  robots: { index: true, follow: true },
  keywords:
    "Obstetric Ultrasound in Noida, Pregnancy Ultrasound in Noida, Pregnancy Scan in Noida, Dating Scan in Noida, Anomaly Scan in Noida, Nuchal Translucency Scan in Noida, Growth Scan in Noida, Fetal Ultrasound in Noida, Prenatal Ultrasound in Noida, Pregnancy Monitoring in Noida, Pregnancy Care in Noida, Obstetrician in Noida, Gynaecologist in Noida, Ultrasound Clinic in Noida, Fetal Medicine in Noida, IVF Pregnancy Scan in Noida, High-Risk Pregnancy Care in Noida, Obstetric Ultrasound Cost in Noida, Fetal Wellbeing Scan in Noida, Pregnancy Ultrasound Near Me",
  openGraph: {
    title: "Obstetric Ultrasound in Noida | Pregnancy Scan | Divine IVF",
    description:
      "Personalised pregnancy ultrasound monitoring in Noida with Dr. Mandavi Rai — dating scan, anomaly scan, growth scan and comprehensive pregnancy care.",
    url: "https://www.divineivf.com/obstetric-ultrasound-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/wlhii3LBUqopP3nsLqD4/image.jpg",
        width: 1200,
        height: 630,
        alt: "Obstetric ultrasound scan at Divine IVF, Noida",
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
        { label: "Obstetric Ultrasound in Noida" },
      ]}
      eyebrow="Pregnancy Care · Noida"
      // ========== H1 ==========
      titlePlain="Obstetric Ultrasound in Noida"
      titleAccent="Regular ultrasound monitoring through pregnancy helps track your baby's growth and wellbeing at each stage"
      // =========================
      intro="Regular ultrasound monitoring through pregnancy helps track your baby's growth and wellbeing at each stage — from confirming the pregnancy to monitoring your baby's development right through to the final weeks."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/wlhii3LBUqopP3nsLqD4/image.jpg"
      heroAlt="Obstetric ultrasound scan at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Pregnancy ultrasound monitoring at Divine IVF Clinic, Noida"
      whatItIs={[
        "Obstetric ultrasound uses high-frequency sound waves to create detailed images of your baby throughout pregnancy. This non-invasive, painless procedure is used to confirm pregnancy dates, monitor fetal growth, check for structural abnormalities, and assess the wellbeing of both mother and baby at key stages.",
        "Different scans serve different purposes at different stages of pregnancy. An early dating scan confirms the pregnancy location and estimates the due date. A detailed anomaly scan (typically performed around 18-22 weeks) checks for structural abnormalities. Later growth scans monitor your baby's size, position, and wellbeing as you approach delivery.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides obstetric ultrasound as part of comprehensive pregnancy care — whether you've conceived through fertility treatment or naturally.",
      ]}
      whoNeedsIt={[
        "Women who have just confirmed a positive pregnancy and need a dating scan",
        "Pregnant women needing first-trimester screening (nuchal translucency scan)",
        "Women requiring detailed anatomy scan at 18-22 weeks",
        "Women needing growth scans in the third trimester",
        "Women with high-risk pregnancies requiring more frequent monitoring",
        "Pregnancies conceived through IVF or fertility treatment",
        "Women with medical conditions requiring additional pregnancy monitoring",
        "Women with concerns about fetal growth, position, or wellbeing",
        "Women approaching their due date needing assessment of fetal position and wellbeing",
      ]}
      preparation={[
        "For very early scans (first trimester), arriving with a comfortably full bladder can improve image clarity by pushing the uterus into a better position for viewing. The clinic will let you know if this applies to your specific appointment.",
        "For later pregnancy scans (second and third trimester), generally no special preparation is needed — you can eat and drink normally before your appointment.",
        "Wear comfortable, loose-fitting clothing that allows easy access to your abdomen. You may be asked to change into a gown for the scan.",
        "If you have any previous ultrasound reports or medical records, bring them along so Dr. Rai can see the full picture of your pregnancy.",
      ]}
      howItWorks={[
        { title: "01 – Early Dating Scan (6-10 weeks)", description: "Confirms pregnancy location (intrauterine), estimates the gestational age and due date, checks for the baby's heartbeat, and may detect multiple pregnancies." },
        { title: "02 – Nuchal Translucency Scan (11-14 weeks)", description: "Measures the fluid at the back of the baby's neck as part of first-trimester screening for chromosomal conditions. Combined with maternal blood tests for comprehensive screening." },
        { title: "03 – Anomaly Scan (18-22 weeks)", description: "A detailed scan that checks for structural abnormalities in the baby's anatomy — including the brain, spine, heart, abdomen, and limbs. Also checks the placenta and amniotic fluid levels." },
        { title: "04 – Growth Scans (Third Trimester)", description: "Later scans track your baby's growth, position, and wellbeing. They assess fetal size, amniotic fluid volume, placental position, and blood flow to the baby." },
        { title: "05 – Discussion", description: "Findings are explained clearly at each visit. You'll see your baby in real time and have the opportunity to ask questions." },
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
        { name: "Pregnancy Care", href: "/pregnancy-care", blurb: "The full pregnancy care timeline — from confirmation to delivery and beyond." },
        { name: "Normal Vaginal Delivery", href: "/normal-vaginal-delivery-in-noida", blurb: "Supported vaginal delivery for suitable pregnancies." },
        { name: "Cesarean Delivery", href: "/cesarean-delivery-in-noida", blurb: "Planned and emergency cesarean delivery care." },
        { name: "IVF Pregnancy Care", href: "/ivf-pregnancy-care", blurb: "Specialised pregnancy monitoring after IVF treatment." },
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "Comprehensive women's health care before, during, and after pregnancy." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your obstetrician and gynaecologist at Divine IVF, Noida." },
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
          href: "https://www.who.int/news-room/fact-sheets/detail/antenatal-care",
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
            "Yes — obstetric ultrasound has been used for decades and is considered safe for both mother and baby. It uses sound waves, not radiation, and has no known harmful effects when performed by trained professionals for medical purposes.",
        },
        {
          question: "What can I expect during the anomaly scan?",
          answer:
            "The anomaly scan (18-22 weeks) is a detailed examination of your baby's anatomy. The sonographer will check the baby's head, brain, face, spine, heart, abdomen, kidneys, limbs, and placenta. It typically takes 20-45 minutes and you'll see your baby on the screen throughout.",
        },
        {
          question: "Do I need a full bladder for my scan?",
          answer:
            "For early first-trimester scans, a full bladder can help improve image quality. For later scans, it's usually not necessary. The clinic will advise you when you book your appointment.",
        },
        {
          question: "Can I find out the baby's sex during the ultrasound?",
          answer:
            "Yes — if you wish to know, the baby's sex can often be determined during the anomaly scan (around 18-22 weeks), though it depends on the baby's position. Dr. Rai will let you know if it's possible at your scan.",
        },
        {
          question: "What if something abnormal is found on the scan?",
          answer:
            "If something is found, Dr. Rai will explain the findings clearly and discuss next steps. This may include additional monitoring, further scans, or referral to a specialist. You'll have the opportunity to ask questions and understand what it means for your pregnancy.",
        },
        {
          question: "Is obstetric ultrasound available for pregnancies after fertility treatment?",
          answer:
            "Yes — obstetric ultrasound is available for all pregnancies, including those conceived through IVF or other fertility treatments. Additional monitoring may be offered based on your individual needs.",
        },
        {
          question: "When should I have my first pregnancy scan?",
          answer:
            "The first scan is usually performed around 6-10 weeks to confirm the pregnancy, check for a heartbeat, and estimate the due date. Dr. Rai will advise on the best timing for your specific situation.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Obstetric Ultrasound in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Regular ultrasound monitoring through pregnancy helps track your baby's growth and wellbeing at each stage — from confirming the pregnancy to monitoring your baby's development right through to the final weeks.
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
              Book Obstetric Ultrasound Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Blood test for hormonal assessment during pregnancy care at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan during pregnancy monitoring at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Obstetric Ultrasound Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Obstetric Ultrasound?</h2>
          <p className="text-ink-600">
            Obstetric ultrasound uses high-frequency sound waves to create detailed images of your baby throughout pregnancy. This non-invasive, painless procedure is used to confirm pregnancy dates, monitor fetal growth, check for structural abnormalities, and assess the wellbeing of both mother and baby at key stages.
          </p>
          <p className="text-ink-600 mt-2">
            Different scans serve different purposes at different stages of pregnancy. An early dating scan confirms the pregnancy location and estimates the due date. A detailed anomaly scan (typically performed around 18-22 weeks) checks for structural abnormalities. Later growth scans monitor your baby's size, position, and wellbeing as you approach delivery.
          </p>
          <p className="text-ink-600 mt-2">
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides obstetric ultrasound as part of comprehensive <Link href="/pregnancy-care" className="text-rose-600 font-semibold hover:underline">pregnancy care</Link> — whether you've conceived through fertility treatment or naturally.
          </p>
        </div>

        {/* Key Pregnancy Scans */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Key Pregnancy Scans at a Glance</h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <div className="flex items-center gap-2">
                <span className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">6-10 Weeks</span>
                <h3 className="font-bold text-sm text-ink-900">Dating Scan</h3>
              </div>
              <p className="text-sm text-ink-600 mt-1">Confirms pregnancy, estimates due date, checks heartbeat, confirms pregnancy location (intrauterine), and may detect multiple pregnancies.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <div className="flex items-center gap-2">
                <span className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">11-14 Weeks</span>
                <h3 className="font-bold text-sm text-ink-900">Nuchal Translucency Scan</h3>
              </div>
              <p className="text-sm text-ink-600 mt-1">Measures the fluid at the back of the baby's neck as part of first-trimester screening for chromosomal conditions. Combined with maternal blood tests for comprehensive screening.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">18-22 Weeks</span>
                <h3 className="font-bold text-sm text-ink-900">Anomaly Scan</h3>
              </div>
              <p className="text-sm text-ink-600 mt-1">Detailed anatomy scan of your baby's development — checking the brain, spine, heart, abdomen, limbs, placenta, and amniotic fluid levels.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <div className="flex items-center gap-2">
                <span className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">Third Trimester</span>
                <h3 className="font-bold text-sm text-ink-900">Growth Scans</h3>
              </div>
              <p className="text-sm text-ink-600 mt-1">Monitor growth, position, and wellbeing as you approach delivery — assessing fetal size, amniotic fluid volume, placental position, and blood flow to the baby.</p>
            </div>
          </div>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Early pregnancy dating scan at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Obstetric ultrasound consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Third trimester growth scan at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Who May Need Obstetric Ultrasound */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Need Obstetric Ultrasound?</h2>
          <p className="text-ink-600 text-sm">Obstetric ultrasound is recommended for all pregnant women at key stages of pregnancy:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women who have just confirmed a positive pregnancy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women needing first-trimester screening
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women requiring detailed anatomy scan at 18-22 weeks
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women needing growth scans in the third trimester
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women with high-risk pregnancies
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancies conceived through IVF or fertility treatment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women with medical conditions requiring additional monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Women approaching their due date
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Dr. Rai will recommend a scan schedule based on your individual pregnancy needs.</p>
        </div>

        {/* Preparing for Obstetric Ultrasound */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Preparing for Your Obstetric Ultrasound</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">For Early Scans (First Trimester)</h3>
              <p className="text-ink-600 text-sm">Arriving with a comfortably full bladder can improve image clarity by pushing the uterus into a better position for viewing. The clinic will let you know if this applies to your specific appointment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">For Later Scans (Second and Third Trimester)</h3>
              <p className="text-ink-600 text-sm">Generally no special preparation is needed — you can eat and drink normally before your appointment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">What to Wear</h3>
              <p className="text-ink-600 text-sm">Wear comfortable, loose-fitting clothing that allows easy access to your abdomen. You may be asked to change into a gown for the scan.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Previous Records</h3>
              <p className="text-ink-600 text-sm">If you have any previous ultrasound reports or medical records, bring them along so Dr. Rai can see the full picture of your pregnancy.</p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">What to Expect During Your Scan</h2>
          <p className="text-ink-600 text-sm">Ultrasound scans are non-invasive and generally quick — typically lasting 15-30 minutes depending on the type of scan.</p>
          <p className="text-ink-600 text-sm mt-2">You'll lie on an examination table, and a small amount of gel is applied to your abdomen. A handheld probe (transducer) is then moved over your skin to capture images.</p>
          <p className="text-ink-600 text-sm mt-2">You'll usually see the images in real time during your visit. There's no discomfort beyond mild pressure from the probe.</p>
          <p className="text-ink-600 text-sm mt-2">After the scan, Dr. Rai will explain the findings and what they mean for your pregnancy.</p>
        </div>

        {/* Benefits of Obstetric Ultrasound */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Benefits of Obstetric Ultrasound</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Non-invasive and painless way to monitor your baby through every stage of pregnancy
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Helps confirm pregnancy dates and estimate the due date accurately
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Detects certain concerns early — including structural abnormalities and growth issues
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Provides reassurance and peace of mind throughout pregnancy
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Results explained directly during your visit — no waiting for reports
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Allows you to see your baby in real time and bond during pregnancy
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Essential for monitoring high-risk pregnancies and pregnancies following fertility treatment
            </li>
          </ul>
        </div>

        {/* Important Considerations */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Important Things to Know</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Scan schedule may be adjusted based on your individual pregnancy and any specific concerns
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Some findings may prompt additional monitoring, further scans, or specialist referral
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Not all abnormalities can be detected on ultrasound — some conditions may become apparent only later in pregnancy or after birth
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              The accuracy of dating and growth measurements can vary slightly
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Some women may need internal (transvaginal) scans in early pregnancy for better visualisation
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You may need to return for a repeat scan if the baby's position doesn't allow all measurements to be taken
            </li>
          </ul>
        </div>

        {/* Obstetric Ultrasound After IVF */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Obstetric Ultrasound for IVF Pregnancies
          </h3>
          <p className="text-ink-600 text-sm">Obstetric ultrasound is available for all pregnancies, including those conceived through IVF or other fertility treatments. Additional monitoring may be offered based on your individual needs.</p>
          <p className="text-ink-600 text-sm mt-2">Women who conceived through IVF may benefit from:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Early dating scan to confirm pregnancy viability</li>
            <li>Regular growth monitoring throughout pregnancy</li>
            <li>Close monitoring of placental position and function</li>
            <li>Detailed anatomy scan at 18-22 weeks</li>
            <li>Additional scans if any concerns arise</li>
          </ul>
          <p className="text-sm text-ink-500 mt-2">Dr. Rai will recommend a monitoring schedule suited to your specific pregnancy needs.</p>
        </div>

        {/* Obstetric Ultrasound Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Obstetric Ultrasound Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The cost of obstetric ultrasound in Noida varies depending on the type of scan and any additional assessments required.</p>
          <p className="text-ink-600 text-sm mt-2">Factors that may affect cost include:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Type of scan (dating, nuchal translucency, anomaly, growth)</li>
            <li>Number of scans required</li>
            <li>Additional assessments (Doppler, 3D/4D imaging)</li>
            <li>Whether the scan is part of a pregnancy care package</li>
          </ul>
          <p className="text-sm text-ink-500 mt-3">Dr. Rai can provide detailed information about costs during your consultation.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Obstetric Ultrasound in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Comprehensive Pregnancy Care</strong> — Ultrasound monitoring is part of a complete pregnancy care package with Dr. Mandavi Rai.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Scan Schedule</strong> — Monitoring is tailored to your individual pregnancy needs and risk factors.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Real-Time Results</strong> — Findings are explained immediately during your visit — no waiting for reports.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — All scans are reviewed by Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evidence-Based Practice</strong> — Care follows guidelines from ACOG, FOGSI, and WHO for high-quality pregnancy monitoring.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Easy access for patients in Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book an Obstetric Ultrasound Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you are pregnant and need ultrasound monitoring, or want to understand your scan options, discuss your pregnancy individually with Dr. Mandavi Rai.
            At Divine IVF, Sector 76, Noida, Dr. Rai provides personalised pregnancy monitoring and ultrasound care based on your individual pregnancy needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Obstetric Ultrasound Consultation
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