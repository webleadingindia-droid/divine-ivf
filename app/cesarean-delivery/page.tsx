// app/cesarean-delivery/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/cesarean-delivery" },
  title: "Cesarean Delivery in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Planned and emergency cesarean delivery care in Sector 76, Noida — safe surgical delivery with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "cesarean delivery in Noida, c-section delivery, planned cesarean, emergency cesarean, surgical delivery, pregnancy care Noida, Dr. Mandavi Rai, Divine IVF, cesarean recovery, maternal health, safe delivery",
  openGraph: {
    title: "Cesarean Delivery in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Planned and emergency cesarean delivery with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — safe surgical delivery for you and your baby.",
    url: "https://www.divineivf.com/cesarean-delivery",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
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
        { label: "Cesarean Delivery" },
      ]}
      eyebrow="Pregnancy Care · Noida"
      titlePlain="Cesarean"
      titleAccent="Delivery"
      intro="Whether planned in advance or needed during labour, cesarean delivery is provided with the same care and clear communication as any other part of your pregnancy — ensuring the safest outcome for you and your baby."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Cesarean delivery team at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Surgical delivery preparation at Divine IVF Clinic, Noida"
      whatItIs={[
        "A cesarean delivery (also known as a C-section) is a surgical procedure to deliver a baby through an incision in the abdomen and uterus. It may be planned in advance for specific medical reasons, or it may arise as an unplanned decision during labour when vaginal delivery becomes inadvisable.",
        "Caesarean delivery is one of the most common surgical procedures worldwide and is a safe, established method of delivery when indicated. Whether planned or unplanned, Dr. Mandavi Rai discusses the reasoning clearly and ensures you understand why a cesarean is recommended for your specific situation.",
        "At Divine IVF, Sector 76, Noida, cesarean delivery is provided with the same thorough, compassionate care as all other aspects of your pregnancy journey — from pre-operative preparation through to postnatal recovery."
      ]}
      whoNeedsIt={[
        "Specific medical indications identified during pregnancy — such as placenta previa (placenta covering the cervix) or certain fetal conditions",
        "Certain positions of the baby that make vaginal delivery inadvisable — such as breech (feet or bottom first) or transverse (sideways) position",
        "Labour that isn't progressing safely — including prolonged labour or fetal distress",
        "Personal or medical history that makes a planned cesarean the safer option — such as previous cesarean delivery or certain uterine surgeries",
        "Multiple pregnancies (twins, triplets) where cesarean may be recommended",
        "Maternal medical conditions — such as heart disease or pre-eclampsia — where vaginal delivery may pose risks",
        "Large baby (macrosomia) where vaginal delivery may be difficult or risky",
        "Infection such as active herpes that could be transmitted to the baby during vaginal delivery",
      ]}
      preparation={[
        "For a planned cesarean, you'll typically have a pre-operative visit 1-2 weeks before your scheduled date to discuss anaesthesia options, fasting instructions, and what to expect on the day — so there are no surprises. This is also a good time to ask any questions you may have.",
        "You'll be given clear instructions about when to stop eating and drinking before the procedure (typically nothing after midnight). You'll also be advised about any medications to take or avoid.",
        "Packing for a slightly longer hospital stay than a vaginal delivery (typically 2-4 days) is recommended. Also, arranging support at home for the first couple of weeks is worth planning ahead of time, as recovery from a cesarean takes longer than vaginal delivery.",
        "For an emergency cesarean during labour, the preparation is more immediate — the team will explain what's happening and the reasons for the procedure clearly, and you'll be prepared for surgery as quickly and safely as possible."
      ]}
      howItWorks={[
        { title: "Pre-Operative Preparation", description: "Preparation for the procedure — including anaesthesia consultation, fasting instructions, and a review of your medical history. An IV line is started, and a catheter is placed to empty the bladder." },
        { title: "Anaesthesia", description: "The procedure is typically performed under regional anaesthesia (spinal or epidural), allowing you to be awake and see your baby immediately after delivery. General anaesthesia may be used in emergency situations." },
        { title: "The Procedure", description: "A horizontal incision is made in the lower abdomen (bikini-line incision), followed by an incision in the uterus. The baby is delivered through these incisions, typically taking 30-60 minutes in total." },
        { title: "Immediate Post-Delivery", description: "Your baby is checked by the paediatric team immediately after delivery, and you'll have the opportunity to see and hold your baby as soon as it's safe." },
        { title: "Recovery", description: "You're monitored closely in the recovery room in the immediate hours after delivery. Pain management is provided, and you'll be guided through moving and caring for your incision." },
        { title: "Postnatal Care", description: "Ongoing care and guidance through your recovery period, including wound care, pain management, and support with breastfeeding and newborn care." },
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
        "Future pregnancies may be affected — the risk of uterine rupture in subsequent pregnancies is increased, and you may be advised to have planned cesareans for future births",
        "Recovery guidance is provided to support healing after the procedure — including wound care, activity restrictions, and pain management",
        "Breastfeeding may be slightly more challenging initially due to positioning and discomfort, but support is available",
        "You may need more help at home during the first few weeks of recovery",
      ]}
      related={[
        { name: "Normal Vaginal Delivery", href: "/normal-delivery", blurb: "The alternative delivery pathway for suitable pregnancies — comparing your options." },
        { name: "Obstetric Ultrasound", href: "/obstetric-ultrasound", blurb: "Monitoring that helps inform delivery planning and identify when cesarean may be needed." },
        { name: "Pregnancy Care", href: "/pregnancy-care", blurb: "The full pregnancy care timeline — from confirmation to delivery and beyond." },
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
          question: "Can I choose a cesarean delivery in advance?",
          answer:
            "This is a conversation to have directly with Dr. Rai, who will discuss what's medically appropriate for your specific pregnancy. While maternal request cesarean is possible in some cases, the decision is made based on your individual medical history and circumstances. Dr. Rai will explain the benefits and risks to help you make an informed decision.",
        },
        {
          question: "How long is recovery after a cesarean?",
          answer:
            "Recovery varies by individual, generally taking longer than vaginal delivery. Most women stay in hospital for 2-4 days and can return to light activities within 4-6 weeks. Full recovery, including return to all normal activities, may take 6-8 weeks. Dr. Rai's team will guide you through the recovery period with personalised advice.",
        },
        {
          question: "Will I be awake during the cesarean?",
          answer:
            "In most cases, cesarean delivery is performed under regional anaesthesia (spinal or epidural), which means you'll be awake and able to see your baby immediately after delivery. You won't feel pain, but you may feel some pressure or pulling sensations. General anaesthesia (where you're asleep) is used only in emergency situations where regional anaesthesia isn't possible or safe.",
        },
        {
          question: "Can I have a vaginal birth after a cesarean (VBAC)?",
          answer:
            "In many cases, vaginal birth after cesarean (VBAC) is possible, depending on the reason for your previous cesarean and your current pregnancy. Dr. Rai will discuss your options and the risks and benefits of both vaginal delivery and repeat cesarean during your pregnancy.",
        },
        {
          question: "Will I be able to breastfeed after a cesarean?",
          answer:
            "Yes — most women can breastfeed successfully after a cesarean. You'll be encouraged to breastfeed as soon as possible after delivery, and lactation support is available. Some women find positioning slightly more challenging initially due to abdominal discomfort, but with support, breastfeeding is usually successful.",
        },
        {
          question: "How long will I be in the hospital after a cesarean?",
          answer:
            "Most women stay in hospital for 2-4 days after a cesarean delivery. This allows time for recovery, wound care, and monitoring of both you and your baby. The length of stay may vary depending on your individual recovery and any specific needs.",
        },
        {
          question: "What should I pack for a planned cesarean?",
          answer:
            "For a planned cesarean, pack as you would for a hospital stay of 2-4 days — comfortable clothing, toiletries, a phone charger, and items for your baby. Consider packing loose, comfortable clothing that won't rub against your incision. Also arrange for someone to help you at home for the first couple of weeks after discharge.",
        },
        {
          question: "Is a cesarean safe for my baby?",
          answer:
            "Yes — cesarean delivery is a safe procedure for babies when medically indicated. The surgical team is experienced in safely delivering babies by cesarean, and the paediatric team is present to check your baby immediately after delivery. Recovery from birth may be slightly different for babies born by cesarean, but they typically do very well.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
              alt="Cesarean delivery team at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
              alt="Surgical delivery preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <p>
          <strong>Cesarean delivery in Noida</strong> is offered at <strong>Divine IVF, 
          Sector 76</strong> as a safe, established option for childbirth when indicated. 
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> provides both planned and emergency cesarean deliveries with 
          the same thorough, compassionate care that defines all aspects of 
          <Link href="/pregnancy-care" className="text-rose-600 font-semibold hover:underline">
          pregnancy care</Link> at Divine IVF.
        </p>

        <p>
          A <strong>cesarean delivery</strong> (also known as a C-section) is a surgical 
          procedure where your baby is delivered through an incision in your abdomen and 
          uterus. While many women deliver vaginally, cesarean delivery is the safest option 
          for many pregnancies — and it's important to understand that a cesarean is not a 
          failure or a lesser way to give birth. It's a safe, established medical procedure 
          that can be the best choice for you and your baby.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Cesarean pre-operative preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Cesarean consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Postnatal care after cesarean delivery at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Cesarean delivery</strong> may be recommended for a variety of reasons:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>Planned (Elective) Cesarean</strong> — When specific medical indications are identified during pregnancy, such as placenta previa (placenta covering the cervix), certain fetal positions (breech or transverse), or maternal medical conditions.
          </li>
          <li>
            <strong>Unplanned (Emergency) Cesarean</strong> — When labour isn`t progressing safely, when fetal distress is detected, or when other complications arise during labour.
          </li>
          <li>
            <strong>Previous Cesarean</strong> — Some women choose or are advised to have a repeat cesarean, though vaginal birth after cesarean (VBAC) is possible in many cases.
          </li>
        </ul>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Common Reasons for Cesarean Delivery
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Breech or transverse baby position
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Placenta previa (placenta covering the cervix)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fetal distress during labour
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Prolonged or obstructed labour
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Multiple pregnancies (twins, triplets)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Maternal medical conditions (heart disease, pre-eclampsia)
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Previous cesarean delivery
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, <strong>cesarean delivery</strong> 
          is performed with the highest standards of safety and care. Dr. Rai follows guidelines 
          from leading organisations including the{" "}
          <a
            href="https://www.acog.org/womens-health/faqs/cesarean-delivery"
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
            href="https://www.who.int/news-room/fact-sheets/detail/caesarean-section"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            World Health Organization (WHO)
          </a>
          . This ensures your care is supported by the latest clinical evidence and best 
          practices in obstetric surgery.
        </p>

        <p>
          Whether you`re planning a cesarean in advance or it becomes necessary during labour, 
          Dr. Rai is committed to providing clear communication, compassionate support, and 
          excellent surgical care — ensuring the safest possible outcome for you and your baby.
        </p>
      </div>
    </TreatmentTemplate>
  );
}