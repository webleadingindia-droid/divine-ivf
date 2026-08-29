// app/normal-delivery/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/normal-delivery" },
  title: "Normal Vaginal Delivery in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Supported normal vaginal delivery in Sector 76, Noida — compassionate, physiological labour and birth care with Dr. Mandavi Rai at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "normal vaginal delivery in Noida, natural delivery, vaginal birth, physiological labour, pregnancy care Noida, Dr. Mandavi Rai, Divine IVF, delivery care, childbirth, labour support, postnatal care",
  openGraph: {
    title: "Normal Vaginal Delivery in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Supported normal vaginal delivery with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — compassionate, physiological labour and birth care.",
    url: "https://www.divineivf.com/normal-delivery",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Normal vaginal delivery care at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function NormalDeliveryPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Pregnancy Care", href: "/pregnancy-care" },
        { label: "Normal Delivery" },
      ]}
      eyebrow="Pregnancy Care · Noida"
      titlePlain="Normal Vaginal"
      titleAccent="Delivery"
      intro="For suitable pregnancies, a supported, physiological approach to labour and delivery, with Dr. Rai present through the process — offering compassionate care that respects your birth preferences while prioritising safety."
      heroImage="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Warm delivery care at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Labour and delivery support at Divine IVF Clinic, Noida"
      whatItIs={[
        "Normal vaginal delivery refers to labour and birth occurring through the birth canal, without surgical intervention, when both mother and baby are progressing well. This is the most common and natural way to give birth, allowing the body to work with its own physiological processes.",
        "During a vaginal delivery, labour progresses through three stages: early labour and dilation of the cervix (first stage), pushing and delivery of the baby (second stage), and delivery of the placenta (third stage). Dr. Mandavi Rai monitors labour progress closely throughout, supporting a physiological delivery while remaining ready to adjust the plan if circumstances change.",
        "At Divine IVF, Sector 76, Noida, normal vaginal delivery is provided with the same thorough, compassionate care that defines all aspects of pregnancy care. Dr. Rai respects your birth preferences while prioritising the safety of both you and your baby."
      ]}
      whoNeedsIt={[
        "Pregnancies progressing without complications suggesting otherwise — where both mother and baby are healthy",
        "Those who have discussed and prefer a vaginal delivery where medically appropriate",
        "Women who have had a normal, low-risk pregnancy without significant medical concerns",
        "Women who are emotionally prepared and supported for a vaginal delivery",
        "Those who have previously had a vaginal delivery and are planning another",
      ]}
      preparation={[
        "As your due date approaches, it's worth discussing your birth preferences with Dr. Rai, including pain relief options and who you'd like present, so the care team understands your priorities in advance. This conversation helps ensure your preferences are respected while keeping safety as the top priority.",
        "Knowing the signs of labour and when to come in is covered in your later pregnancy visits, so you feel prepared rather than uncertain when the time comes. Signs of labour include regular contractions, rupture of membranes (your water breaking), and changes in vaginal discharge.",
        "Consider packing a hospital bag with comfortable clothing, toiletries, items for your baby, and anything that will help you feel more at ease during labour — such as music, a pillow, or relaxation aids.",
        "If you're planning to use a birth partner, bring them to the later pregnancy visits so they can understand the process and how they can support you during labour."
      ]}
      howItWorks={[
        { title: "Labour Assessment", description: "You're assessed on arrival to confirm labour progress — including cervical dilation, contractions, and the baby's position and wellbeing." },
        { title: "Continuous Monitoring", description: "Both you and your baby are monitored throughout labour. The fetal heart rate is monitored, and your contractions and progress are assessed regularly." },
        { title: "First Stage of Labour", description: "The cervix dilates from 0 to 10 centimetres. This stage is divided into early labour and active labour, with contractions becoming stronger and more frequent." },
        { title: "Second Stage of Labour (Delivery)", description: "You're fully dilated and begin pushing to deliver your baby. This stage can last from a few minutes to several hours, depending on various factors." },
        { title: "Third Stage of Labour", description: "After your baby is born, the placenta is delivered. This usually happens within 5-30 minutes after the baby's birth." },
        { title: "Immediate Postnatal Care", description: "Care continues for both you and your baby immediately after birth — including skin-to-skin contact, breastfeeding support, and monitoring of both mother and baby." },
      ]}
      whatToExpect="Labour duration and experience vary widely between individuals — there's no 'normal' when it comes to how long labour takes. For first-time mothers, labour typically lasts 8-18 hours; for subsequent pregnancies, it's often shorter. Dr. Rai and the care team monitor progress continuously and will discuss any changes to the plan with you as they arise. You'll have access to pain relief options including breathing techniques, TENS machines, gas and air, and epidural anaesthesia if needed. Throughout the process, you'll be supported by a caring team who respect your preferences and prioritise your safety."
      benefits={[
        "Generally shorter recovery than surgical delivery — most women can return to normal activities within a few weeks",
        "A physiological process, supported rather than routinely intervened upon — working with your body's natural processes",
        "Less invasive than cesarean delivery — no surgical incisions, less bleeding, and lower risk of infection",
        "Earlier bonding and breastfeeding — immediate skin-to-skin contact is possible immediately after birth",
        "Shorter hospital stay — typically 1-2 days, compared to 2-4 days for cesarean delivery",
        "Lower risk of complications in future pregnancies — vaginal birth is generally safer for future pregnancies than multiple cesareans",
        "Empowering experience — many women find vaginal birth a powerful and positive experience",
      ]}
      considerations={[
        "Labour can be unpredictable — plans may need to adapt in real time based on how labour progresses",
        "Not every labour progresses toward a vaginal delivery, and a change of plan is sometimes medically necessary for the safety of you or your baby",
        "Discussed and planned together in advance where possible, while remaining flexible to medical needs",
        "Pain management preferences should be discussed in advance — there are various options available",
        "Some women experience perineal tears or episiotomy during vaginal delivery, which may require stitches",
        "You'll need to be prepared for the possibility of an unplanned cesarean if labour doesn't progress as expected",
        "Recovery from vaginal birth includes postpartum bleeding, perineal discomfort, and hormonal changes",
      ]}
      related={[
        { name: "Cesarean Delivery", href: "/cesarean-delivery", blurb: "Planned and emergency cesarean care, when needed for you or your baby." },
        { name: "Obstetric Ultrasound", href: "/obstetric-ultrasound", blurb: "Monitoring through pregnancy leading up to delivery — informing your birth plan." },
        { name: "Pregnancy Care", href: "/pregnancy-care", blurb: "The full pregnancy care timeline — from confirmation to delivery and beyond." },
      ]}
      externalResources={[
        {
          label: "Labor and Delivery",
          source: "ACOG",
          href: "https://www.acog.org/womens-health/faqs/labor-and-delivery",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "WHO Recommendations on Intrapartum Care",
          source: "WHO",
          href: "https://www.who.int/news-room/fact-sheets/detail/labour-and-delivery-care",
        },
      ]}
      faqs={[
        {
          question: "Can I discuss my birth preferences in advance?",
          answer:
            "Yes — Dr. Rai encourages this conversation well before your due date, while remaining clear about when medical circumstances may require a different approach. Your birth preferences are respected, but safety is always the top priority.",
        },
        {
          question: "How long does a normal vaginal delivery take?",
          answer:
            "Labour duration varies widely. For first-time mothers, labour typically lasts 8-18 hours. For subsequent pregnancies, it's often shorter. The second stage (pushing) can last from a few minutes to several hours. Every labour is different, and Dr. Rai will monitor your progress continuously.",
        },
        {
          question: "What pain relief options are available during labour?",
          answer:
            "Various pain relief options are available, including breathing techniques, TENS machines, gas and air (Entonox), and epidural anaesthesia. Dr. Rai will discuss these options with you during your pregnancy, so you can make informed choices about what feels right for you.",
        },
        {
          question: "Can I have a vaginal delivery after a previous cesarean?",
          answer:
            "In many cases, vaginal birth after cesarean (VBAC) is possible and safe. The decision depends on the reason for your previous cesarean, the type of incision, and your current pregnancy. Dr. Rai will discuss your options and the risks and benefits with you.",
        },
        {
          question: "What happens if labour doesn't progress?",
          answer:
            "If labour doesn't progress as expected, Dr. Rai will discuss your options with you. This may involve additional monitoring, interventions to help labour progress, or — if necessary — a change of plan to cesarean delivery. You'll be kept informed throughout.",
        },
        {
          question: "How soon can I go home after a vaginal delivery?",
          answer:
            "Most women stay in hospital for 1-2 days after a vaginal delivery, depending on your recovery and any specific needs. You'll be discharged when both you and your baby are well and you're comfortable managing at home.",
        },
        {
          question: "Can I have a water birth at Divine IVF?",
          answer:
            "Dr. Rai can discuss your preferences for labour and delivery, including the possibility of a water birth or other comfort measures. The availability of specific birth options may vary, and Dr. Rai will help you understand what's possible for your specific pregnancy.",
        },
        {
          question: "Is it normal to feel scared about giving birth?",
          answer:
            "Yes — it's completely normal to feel nervous or scared about giving birth. Dr. Rai and the care team are here to support you, answer your questions, and help you feel as prepared and confident as possible. You're not alone in this journey.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/OHxsbbUIOcQn7zP1Na8k/image.png"
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
          <strong>Normal vaginal delivery in Noida</strong> is offered at <strong>Divine IVF, 
          Sector 76</strong> as a supported, compassionate approach to childbirth. 
          <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> provides care throughout labour and delivery, respecting your 
          preferences while prioritising the safety of both you and your baby.
        </p>

        <p>
          <strong>Normal vaginal delivery</strong> is the most common and natural way to give 
          birth. It allows your body to work with its own physiological processes, supported 
          by a caring medical team who monitor progress and provide guidance when needed. 
          For suitable pregnancies, vaginal delivery offers many benefits — including shorter 
          recovery time, immediate bonding with your baby, and a less invasive birth experience.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="Labour assessment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Birth preparation consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop"
              alt="Postnatal care after vaginal delivery at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>
          <strong>Normal vaginal delivery</strong> progresses through three stages:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>First Stage (Labour)</strong> — The cervix dilates from 0 to 10 centimetres. This stage includes early labour (mild, irregular contractions) and active labour (stronger, more frequent contractions). This is typically the longest stage of labour.
          </li>
          <li>
            <strong>Second Stage (Delivery)</strong> — You`re fully dilated and begin pushing to deliver your baby. This stage can last from a few minutes to several hours. Dr. Rai and the care team will guide and support you through this stage.
          </li>
          <li>
            <strong>Third Stage (Placental Delivery)</strong> — After your baby is born, the placenta is delivered. This usually happens within 5-30 minutes and is typically the shortest and easiest stage.
          </li>
        </ul>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Pain Relief Options During Labour
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Breathing and relaxation techniques — for early labour and mild pain
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              TENS machines — electrical stimulation that may help with pain relief
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Gas and air (Entonox) — inhaled nitrous oxide for pain relief
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Epidural anaesthesia — regional anaesthesia for more significant pain relief
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Water therapy — warm water immersion for comfort (availability varies)
            </li>
          </ul>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, <strong>normal vaginal delivery</strong> 
          is provided with the highest standards of safety and care. Dr. Rai follows guidelines 
          from leading organisations including the{" "}
          <a
            href="https://www.acog.org/womens-health/faqs/labor-and-delivery"
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
            href="https://www.who.int/news-room/fact-sheets/detail/labour-and-delivery-care"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            World Health Organization (WHO)
          </a>
          . This ensures your care is supported by the latest clinical evidence and best 
          practices in labour and delivery.
        </p>

        <p>
          Whether this is your first baby or you`re adding to your family, you can expect 
          the same thorough, compassionate, and evidence-based care that defines 
          <strong>Divine IVF</strong> — supporting you through every stage of labour, 
          delivery, and the precious moments that follow.
        </p>
      </div>
    </TreatmentTemplate>
  );
}