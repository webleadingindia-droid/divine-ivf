// app/cesarean-delivery-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/cesarean-delivery-in-noida" },
  title: "Cesarean Delivery in Noida | C-Section Delivery | Divine IVF",
  description:
    "Looking for Cesarean Delivery in Noida? Consult Dr. Mandavi Rai at Divine IVF for planned C-section, pregnancy care and personalised delivery planning.",
  robots: { index: true, follow: true },
  keywords:
    "Cesarean Delivery in Noida, C-Section Delivery in Noida, C Section in Noida, Cesarean Birth in Noida, Caesarean Delivery in Noida, Caesarean Section in Noida, Planned Cesarean Delivery in Noida, Emergency Cesarean Delivery in Noida, Planned C Section in Noida, Emergency C Section in Noida, C Section Doctor in Noida, Cesarean Delivery Doctor in Noida, Cesarean Delivery Cost in Noida, C Section Delivery Cost in Noida, Pregnancy Delivery in Noida, Pregnancy Care in Noida, Obstetrician in Noida, Gynaecologist in Noida, IVF Pregnancy Delivery in Noida, Repeat Cesarean Delivery in Noida, VBAC in Noida",
  openGraph: {
    title: "Cesarean Delivery in Noida | C-Section Delivery | Divine IVF",
    description:
      "Personalised pregnancy and C-section delivery planning in Noida with guidance for planned and emergency Cesarean birth.",
    url: "https://www.divineivf.com/cesarean-delivery-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/rNGJj0cNyAzEtVwuWSwZ/image.png",
        width: 1200,
        height: 630,
        alt: "Cesarean delivery at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function CesareanDeliveryPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Pregnancy Care", href: "/pregnancy-care" },
        { label: "Cesarean Delivery in Noida" },
      ]}
      eyebrow="Pregnancy Care · Noida"
      // ========== H1 ==========
      titlePlain="Cesarean Delivery in Noida"
      titleAccent="Personalised pregnancy and delivery planning for planned and emergency Cesarean birth"
      // =========================
      intro="A Cesarean delivery, commonly called a C-section, is a surgical method of delivering a baby through incisions made in the abdomen and uterus. In some pregnancies, Cesarean delivery may be the safest or most appropriate option for the mother, baby, or both."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/rNGJj0cNyAzEtVwuWSwZ/image.png"
      heroAlt="Cesarean delivery team at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Surgical delivery preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "A Cesarean delivery (C-section) is an operation in which a baby is delivered through surgical incisions made in the mother's abdomen and the uterus.",
        "It may be planned before labour begins, decided during labour, or performed urgently in an emergency. The exact reason, timing and surgical approach depend on the individual pregnancy.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised pregnancy assessment and delivery planning based on maternal health, fetal well-being, previous pregnancy history, placental position, fetal presentation and progress of labour.",
        "The decision for Cesarean delivery should be based on individual clinical circumstances rather than being considered necessary for every pregnancy.",
      ]}
      whoNeedsIt={[
        "Labour not progressing — cervix does not dilate sufficiently or baby does not descend despite adequate labour",
        "Fetal distress or fetal heart-rate concern — patterns suggesting the baby may not be tolerating labour well",
        "Breech presentation — baby positioned with buttocks or feet toward the birth canal",
        "Transverse lie — baby positioned sideways near the time of delivery",
        "Placenta previa — placenta lies low and covers or approaches the cervical opening",
        "Placental abruption — placenta separates from the uterus before the baby is born",
        "Umbilical cord problems — cord prolapse or significant cord compression",
        "Multiple pregnancy — depending on position of each baby, gestational age, and placental arrangement",
        "Large baby — suspected very large baby may influence delivery planning",
        "Maternal medical conditions — heart conditions, neurological conditions, severe pregnancy complications",
        "Previous cesarean delivery — depending on type of previous uterine incision and other factors",
        "Active genital infections — such as herpes that could be transmitted during vaginal delivery",
      ]}
      preparation={[
        "For a planned cesarean, you'll typically have a pre-operative visit 1-2 weeks before your scheduled date to discuss anaesthesia options, fasting instructions, and what to expect on the day — so there are no surprises.",
        "You'll be given clear instructions about when to stop eating and drinking before the procedure (typically nothing after midnight). You'll also be advised about any medications to take or avoid.",
        "Packing for a slightly longer hospital stay than a vaginal delivery (typically 2-4 days) is recommended. Also, arranging support at home for the first couple of weeks is worth planning ahead of time.",
        "For an emergency cesarean during labour, the preparation is more immediate — the team will explain what's happening and the reasons for the procedure clearly, and you'll be prepared for surgery as quickly and safely as possible.",
      ]}
      howItWorks={[
        { title: "Step 1 – Preoperative Assessment", description: "Before surgery, the healthcare team reviews maternal condition, fetal condition, blood pressure, blood tests, fetal heart rate, reason for Cesarean, and previous medical and pregnancy history." },
        { title: "Step 2 – IV Line and Preparation", description: "An intravenous line is usually placed to provide fluids, medicines, and antibiotics when appropriate. The abdomen is prepared for surgery. A urinary catheter is commonly inserted to keep the bladder empty." },
        { title: "Step 3 – Anaesthesia", description: "Most Cesarean deliveries are performed using regional anaesthesia (spinal or epidural) which numbs the lower body while allowing the mother to remain awake. General anaesthesia may be required in selected urgent situations." },
        { title: "Step 4 – Abdominal Incision", description: "A surgical incision is made through the abdominal wall. The common skin incision is usually horizontal in the lower abdomen (bikini-line)." },
        { title: "Step 5 – Uterine Incision", description: "An incision is then made in the uterus. The type of uterine incision depends on the clinical situation." },
        { title: "Step 6 – Delivery of the Baby", description: "The baby is carefully delivered through the uterine and abdominal incisions. The umbilical cord is clamped and cut." },
        { title: "Step 7 – Placenta Delivery", description: "The placenta is removed and the uterus is examined." },
        { title: "Step 8 – Closing the Incisions", description: "The uterus and abdominal layers are closed using appropriate surgical techniques." },
        { title: "Step 9 – Recovery Monitoring", description: "After surgery, the mother is monitored for blood pressure, pulse, bleeding, pain, uterine contraction, surgical wound, and recovery from anaesthesia." },
      ]}
      whatToExpect="A cesarean delivery is a routine surgical procedure performed by an experienced surgical team. You'll be awake (with regional anaesthesia) and able to see your baby immediately after delivery. The procedure itself typically takes 30-60 minutes. Recovery from a cesarean typically takes longer than vaginal delivery, with attention to incision care and gradual return to normal activity. You'll be encouraged to walk within 12-24 hours to aid recovery and prevent blood clots. You can expect to stay in hospital for 2-4 days. The care team will guide you through what to expect in the days and weeks following."
      benefits={[
        "A planned, controlled approach when medically indicated — reducing uncertainty and risks",
        "Available as a safe option when vaginal delivery isn't advisable — ensuring the safest outcome for you and your baby",
        "Can be scheduled in advance, allowing you to plan and prepare for your baby's arrival",
        "Reduces the risk of certain birth injuries that may occur with difficult vaginal deliveries",
        "Provides a predictable, controlled environment for delivery",
        "Allows you to be awake and see your baby immediately after birth (with regional anaesthesia)",
        "Can be performed in emergency situations to protect the health of mother and baby",
      ]}
      considerations={[
        "Generally involves a longer recovery period than vaginal delivery — typically 4-6 weeks before returning to normal activities",
        "As with any surgery, involves standard surgical risks — including bleeding, infection, and anaesthesia risks — which will be explained beforehand",
        "You'll have a visible scar on your lower abdomen, though it's placed low (bikini-line) for minimal visibility",
        "Future pregnancies may be affected — the risk of uterine rupture in subsequent pregnancies is increased",
        "Recovery guidance is provided to support healing after the procedure — including wound care, activity restrictions, and pain management",
        "Breastfeeding may be slightly more challenging initially due to positioning and discomfort, but support is available",
        "You may need more help at home during the first few weeks of recovery",
      ]}
      related={[
        { name: "Pregnancy Care", href: "/pregnancy-care", blurb: "The full pregnancy care timeline — from confirmation to delivery and beyond." },
        { name: "Obstetric Ultrasound", href: "/obstetric-ultrasound", blurb: "Monitoring that helps inform delivery planning and identify when cesarean may be needed." },
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "Comprehensive women's health care before, during, and after pregnancy." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "Fertility treatment that may lead to pregnancy requiring delivery planning." },
        { name: "IVF Pregnancy Care", href: "/ivf-pregnancy-care", blurb: "Specialised pregnancy monitoring after IVF treatment." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your obstetrician and gynaecologist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Cesarean Delivery (C-Section)",
          source: "ACOG",
          href: "https://www.acog.org/womens-health/faqs/cesarean-delivery",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "WHO Recommendations on Cesarean Delivery",
          source: "WHO",
          href: "https://www.who.int/news-room/fact-sheets/detail/caesarean-section",
        },
      ]}
      faqs={[
        {
          question: "What is a Cesarean delivery?",
          answer:
            "A Cesarean delivery is the surgical birth of a baby through incisions made in the abdomen and uterus.",
        },
        {
          question: "Is C-section and Cesarean delivery the same?",
          answer:
            "Yes. C-section is the commonly used short form of Cesarean delivery.",
        },
        {
          question: "When is a C-section needed?",
          answer:
            "It may be required for reasons such as labour not progressing, fetal concern, certain fetal positions, placental problems or maternal medical conditions.",
        },
        {
          question: "Is Cesarean delivery always planned?",
          answer:
            "No. It can be planned in advance or performed unexpectedly during labour.",
        },
        {
          question: "Is C-section painful?",
          answer:
            "Anaesthesia is used during surgery, so pain is controlled during the operation. Incisional discomfort and soreness are common during recovery.",
        },
        {
          question: "How long does a C-section take?",
          answer:
            "The exact duration varies depending on the clinical situation and complexity of surgery, typically 30-60 minutes.",
        },
        {
          question: "Can I stay awake during C-section?",
          answer:
            "Most planned Cesareans use spinal or epidural anaesthesia, allowing the mother to remain awake. General anaesthesia may be required in selected situations.",
        },
        {
          question: "Can I breastfeed after a Cesarean?",
          answer:
            "Yes. Breastfeeding can usually begin once mother and baby are medically stable.",
        },
        {
          question: "How long is the hospital stay after C-section?",
          answer:
            "ACOG notes that hospital stay is commonly around 2–4 days, although individual recovery varies.",
        },
        {
          question: "How long does recovery take?",
          answer:
            "Healing generally takes several weeks, with gradual return to normal activity according to medical advice.",
        },
        {
          question: "Does an IVF pregnancy require Cesarean delivery?",
          answer:
            "No. IVF conception alone is not an automatic reason for C-section.",
        },
        {
          question: "Does a breech baby always require Cesarean?",
          answer:
            "Not always, but Cesarean delivery is commonly considered depending on breech type and other maternal and fetal factors.",
        },
        {
          question: "Can I have a vaginal birth after C-section?",
          answer:
            "Some women may be candidates for VBAC after appropriate evaluation.",
        },
        {
          question: "Are repeated Cesareans risky?",
          answer:
            "Risks of certain complications, particularly placenta-related problems in future pregnancies, increase with repeated Cesarean deliveries.",
        },
        {
          question: "What is the cost of Cesarean delivery in Noida?",
          answer:
            "Cost depends on hospital charges, anaesthesia, planned or emergency surgery, newborn care and additional medical requirements.",
        },
        {
          question: "Where can I discuss Cesarean delivery in Noida?",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for personalised pregnancy and delivery planning.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Cesarean Delivery in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Personalised pregnancy and delivery planning for planned and emergency Cesarean birth at Divine IVF, Sector 76, Noida.
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
              Book Pregnancy & Delivery Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Pregnancy monitoring for cesarean delivery planning at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Obstetric ultrasound for delivery planning at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is a Cesarean Delivery Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is a Cesarean Delivery?</h2>
          <p className="text-ink-600">
            A Cesarean delivery (C-section) is an operation in which a baby is delivered through surgical incisions made in:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>The mother`s abdomen</li>
            <li>The uterus</li>
          </ul>
          <p className="text-ink-600 mt-2">
            It may be:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>Planned before labour begins</li>
            <li>Decided during labour</li>
            <li>Performed urgently in an emergency</li>
          </ul>
          <p className="text-ink-600 mt-2">The exact reason, timing and surgical approach depend on the individual pregnancy.</p>
        </div>

        {/* Planned vs Emergency Cesarean Delivery */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Planned vs Emergency Cesarean Delivery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">Planned Cesarean Delivery</h3>
              <p className="text-xs text-ink-600 mt-1">Arranged before labour begins when there is a known medical or obstetric reason. Possible situations may include:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Certain placenta problems</li>
                <li>Certain fetal presentations</li>
                <li>Selected previous uterine surgeries</li>
                <li>Some multiple pregnancies</li>
                <li>Certain maternal medical conditions</li>
                <li>Other obstetric indications</li>
              </ul>
            </div>
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-bold text-sm text-ink-900">Emergency Cesarean Delivery</h3>
              <p className="text-xs text-ink-600 mt-1">May become necessary during labour or pregnancy when a concern develops unexpectedly. Possible reasons include:</p>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Fetal heart-rate concerns</li>
                <li>Labour not progressing adequately</li>
                <li>Umbilical-cord complications</li>
                <li>Significant bleeding</li>
                <li>Certain placental complications</li>
                <li>Other urgent maternal or fetal concerns</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The speed of surgery depends on how urgent the situation is.</p>
        </div>

        {/* Why Is a Cesarean Delivery Performed */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Why Is a Cesarean Delivery Performed?</h2>
          <p className="text-ink-600 text-sm">There is no single reason for C-section delivery. The decision depends on the condition of both mother and baby.</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Labour Not Progressing</h3>
              <p className="text-ink-600 text-sm">Sometimes the cervix does not dilate sufficiently or the baby does not descend despite adequate labour. Cesarean delivery may then be considered.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Fetal Distress or Fetal Heart-Rate Concern</h3>
              <p className="text-ink-600 text-sm">During labour, fetal heart-rate monitoring may show patterns suggesting that the baby may not be tolerating labour well. Depending on the situation, urgent delivery may be required.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Breech Presentation</h3>
              <p className="text-ink-600 text-sm">A breech baby is positioned with the buttocks or feet toward the birth canal rather than the head. Depending on gestational age, type of breech presentation and other clinical factors, Cesarean delivery may be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Transverse Lie</h3>
              <p className="text-ink-600 text-sm">If the baby is positioned sideways near the time of delivery, vaginal birth may not be possible and Cesarean delivery may be required.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Placenta Previa</h3>
              <p className="text-ink-600 text-sm">Placenta previa occurs when the placenta lies low in the uterus and covers or approaches the cervical opening. Significant placenta previa can make vaginal delivery unsafe due to the risk of bleeding. Cesarean delivery may therefore be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Placental Abruption</h3>
              <p className="text-ink-600 text-sm">Placental abruption occurs when the placenta separates from the uterus before the baby is born. If significant bleeding or fetal compromise occurs, urgent Cesarean delivery may be necessary.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Umbilical Cord Problems</h3>
              <p className="text-ink-600 text-sm">Certain cord complications can reduce oxygen supply to the baby. Examples may include umbilical cord prolapse or significant cord compression. Depending on severity, emergency Cesarean delivery may be required.</p>
            </div>
          </div>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Cesarean pre-operative preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Cesarean delivery consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Postnatal care after cesarean delivery at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Cesarean Delivery After IVF Pregnancy */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Cesarean Delivery After IVF Pregnancy</h2>
          <p className="text-ink-600 text-sm">IVF pregnancy alone does not automatically require Cesarean delivery.</p>
          <p className="text-ink-600 text-sm mt-2">The mode of birth depends on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Maternal health
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Fetal position
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Placenta
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Number of babies
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy complications
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous uterine surgery
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Labour progress
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Other obstetric indications
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Pregnancies conceived through IVF should receive appropriate antenatal monitoring, but delivery planning remains individualised.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">Does Every IVF Pregnancy Need a C-Section?</h3>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">An IVF pregnancy can sometimes be delivered vaginally if there is no medical reason for Cesarean delivery. Cesarean birth should be based on obstetric indications rather than IVF conception alone.</p>
        </div>

        {/* Cesarean vs Vaginal Delivery / VBAC */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Cesarean vs Vaginal Delivery & VBAC</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Cesarean vs Vaginal Delivery</h3>
              <p className="text-ink-600 text-sm">Neither method is universally better for every woman.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-white rounded-xl p-3 border border-ink-100/50">
                  <h4 className="font-bold text-sm text-ink-900">Vaginal Delivery</h4>
                  <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                    <li>Avoiding abdominal surgery</li>
                    <li>Shorter hospital stay</li>
                    <li>Faster recovery in many cases</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-3 border border-rose-200 shadow-sm">
                  <h4 className="font-bold text-sm text-ink-900">Cesarean Delivery</h4>
                  <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                    <li>Can be lifesaving when vaginal delivery poses increased risk</li>
                    <li>Planned approach when medically indicated</li>
                    <li>Reduces certain birth injury risks</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-ink-500 mt-2">The safest option depends on individual clinical circumstances.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">What Is VBAC?</h3>
              <p className="text-ink-600 text-sm">VBAC stands for Vaginal Birth After Cesarean. It refers to vaginal delivery after a previous Cesarean birth.</p>
              <p className="text-ink-600 text-sm mt-2">A woman attempting vaginal birth after Cesarean is undergoing a Trial of Labor After Cesarean (TOLAC).</p>
              <p className="text-ink-600 text-sm mt-2">If successful, potential advantages can include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Avoiding another abdominal operation</li>
                <li>Shorter recovery</li>
                <li>Lower blood loss</li>
                <li>Lower infection risk</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2 font-semibold">However, VBAC is not suitable for every patient because uterine scar rupture, although uncommon, can be serious.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Can You Have a Normal Delivery After C-Section?</h3>
              <p className="text-ink-600 text-sm">Some women can. Suitability depends on:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Type of previous uterine scar</li>
                <li>Reason for previous Cesarean</li>
                <li>Number of previous Cesareans</li>
                <li>Current pregnancy</li>
                <li>Fetal presentation</li>
                <li>Other maternal or fetal conditions</li>
                <li>Facility`s ability to perform emergency Cesarean if needed</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2">This decision should be made with an obstetrician.</p>
            </div>
          </div>
        </div>

        {/* Cesarean Delivery Procedure */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Cesarean Delivery Procedure – Step by Step</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 1 – Preoperative Assessment</h3>
              <p className="text-ink-600 text-sm">Before surgery, the healthcare team reviews maternal condition, fetal condition, blood pressure, blood tests, fetal heart rate, reason for Cesarean, and previous medical and pregnancy history.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 2 – IV Line and Preparation</h3>
              <p className="text-ink-600 text-sm">An intravenous line is usually placed to provide fluids, medicines, and antibiotics when appropriate. The abdomen is prepared for surgery. A urinary catheter is commonly inserted to keep the bladder empty.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 3 – Anaesthesia</h3>
              <p className="text-ink-600 text-sm">Most Cesarean deliveries are performed using regional anaesthesia (spinal or epidural) which numbs the lower body while allowing the mother to remain awake. General anaesthesia may be required in selected urgent or medical circumstances.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 4 – Abdominal Incision</h3>
              <p className="text-ink-600 text-sm">A surgical incision is made through the abdominal wall. The common skin incision is usually horizontal in the lower abdomen.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 5 – Uterine Incision</h3>
              <p className="text-ink-600 text-sm">An incision is then made in the uterus. The type of uterine incision depends on the clinical situation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 6 – Delivery of the Baby</h3>
              <p className="text-ink-600 text-sm">The baby is carefully delivered through the uterine and abdominal incisions. The umbilical cord is clamped and cut.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 7 – Placenta Delivery</h3>
              <p className="text-ink-600 text-sm">The placenta is removed and the uterus is examined.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 8 – Closing the Incisions</h3>
              <p className="text-ink-600 text-sm">The uterus and abdominal layers are closed using appropriate surgical techniques.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Step 9 – Recovery Monitoring</h3>
              <p className="text-ink-600 text-sm">After surgery, the mother is monitored for blood pressure, pulse, bleeding, pain, uterine contraction, surgical wound, and recovery from anaesthesia.</p>
            </div>
          </div>
        </div>

        {/* Recovery After Cesarean Delivery / Warning Signs */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Recovery After Cesarean Delivery</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">How Long Does C-Section Recovery Take?</h3>
              <p className="text-ink-600 text-sm">Initial healing usually takes several weeks. Recovery varies depending on planned vs emergency surgery, maternal health, surgical complications, previous Cesareans, infection, blood loss, and individual healing.</p>
              <p className="text-ink-600 text-sm mt-2">Patients should follow their obstetrician`s instructions regarding walking, lifting, exercise, driving, sexual activity, and wound care.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Caring for the Cesarean Incision</h3>
              <p className="text-ink-600 text-sm">General wound-care advice may include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Keep the wound clean and dry</li>
                <li>Follow dressing instructions</li>
                <li>Avoid unnecessary pressure on the incision</li>
                <li>Watch for redness or discharge</li>
                <li>Take prescribed medicines correctly</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2">Specific care instructions should come from the treating surgical team.</p>
            </div>
          </div>
        </div>

        {/* Warning Signs After Cesarean Delivery */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Warning Signs After Cesarean Delivery
          </h3>
          <p className="text-ink-600 text-sm">Seek medical attention if you experience:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              High fever
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Increasing wound redness
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pus or foul-smelling discharge
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Severe abdominal pain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Heavy vaginal bleeding
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Shortness of breath
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Chest pain
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Painful swelling in one leg
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Severe weakness or fainting
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">These symptoms can indicate complications requiring prompt medical evaluation.</p>
        </div>

        {/* Risks of Cesarean Delivery */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Risks of Cesarean Delivery</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Maternal Risks</h3>
              <p className="text-ink-600 text-sm">Most Cesarean deliveries are completed safely, but like any major operation, there are risks. Possible maternal complications include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Infection
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Heavy bleeding
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Blood transfusion
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Blood clots
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Anaesthesia complications
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Injury to bladder
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Injury to bowel
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">•</span>
                  Surgical wound complications
                </div>
              </div>
              <p className="text-sm text-ink-500 mt-2">Rarely, severe bleeding may require additional surgery. ACOG also notes that risks of certain placenta problems and other complications increase with repeated Cesarean births.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Risks for the Baby</h3>
              <p className="text-ink-600 text-sm">Potential newborn considerations may include:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Temporary breathing problems</li>
                <li>Accidental surgical injury in rare cases</li>
                <li>Need for newborn monitoring</li>
              </ul>
              <p className="text-sm text-ink-500 mt-2">Risk depends on gestational age, reason for surgery and urgency of delivery.</p>
            </div>
          </div>
        </div>

        {/* Cesarean Delivery Cost / Preparing for Planned Cesarean */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Preparing for Cesarean Delivery</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Preparing for a Planned Cesarean Delivery</h3>
              <p className="text-ink-600 text-sm">Your obstetric team may advise:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Preoperative blood tests</li>
                <li>Anaesthesia consultation</li>
                <li>Fasting instructions</li>
                <li>Medication instructions</li>
                <li>Hospital admission timing</li>
                <li>Birth and newborn-care planning</li>
              </ul>
              <p className="text-sm text-ink-500 mt-2">Do not stop prescribed medication unless advised by your doctor.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Cesarean Delivery Cost in Noida</h3>
              <p className="text-ink-600 text-sm">The Cesarean Delivery cost in Noida varies according to several factors. These may include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Obstetric consultation
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Hospital charges
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Operating theatre
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Anaesthesia
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Medicines
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Maternal monitoring
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Newborn care
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Duration of hospital stay
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Planned vs emergency Cesarean
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Pregnancy complications
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-rose-500">✓</span>
                  Additional medical care
                </div>
              </div>
              <p className="text-sm text-ink-500 mt-3">The final cost should be discussed with the hospital after evaluating the pregnancy and delivery plan.</p>
            </div>
          </div>
        </div>

        {/* Questions to Ask */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Questions to Ask Before a Planned Cesarean
          </h3>
          <p className="text-ink-600 text-sm">Consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is Cesarean delivery recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Is vaginal delivery still an option?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              When should the Cesarean be scheduled?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What type of anaesthesia will be used?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Can my birth partner be present?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Can I have skin-to-skin contact?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              When can breastfeeding begin?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are my individual surgical risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How long might I stay in hospital?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What will recovery involve?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What does this mean for future pregnancies?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Could VBAC be an option in a future pregnancy?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Pregnancy & Cesarean Delivery Planning in Noida?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Pregnancy Care</strong> — Delivery planning considers maternal and fetal health rather than using the same approach for every pregnancy.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Planned and Emergency Delivery Assessment</strong> — Pregnancy conditions are monitored so that the appropriate delivery method can be discussed.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF Pregnancy Care</strong> — Women who conceived through IVF can receive pregnancy follow-up and individualised delivery planning.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Gynaecology and Obstetric Care</strong> — Pregnancy management can take into account previous gynaecological, fertility and obstetric history.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evidence-Based Birth Planning</strong> — The aim is to choose the mode of delivery according to maternal and fetal indications.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — Pregnancy and delivery planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for women seeking pregnancy and delivery consultation in Noida.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Cesarean Delivery Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you are pregnant and have been advised a C-section, have had a previous Cesarean, conceived through IVF, or want to understand your delivery options, discuss your pregnancy individually with your obstetrician.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised pregnancy and delivery planning based on maternal health, fetal well-being and obstetric indications.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Pregnancy & Delivery Consultation
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