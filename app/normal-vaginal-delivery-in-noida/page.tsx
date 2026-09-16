// app/normal-vaginal-delivery-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/normal-vaginal-delivery-in-noida" },
  title: "Normal Delivery in Noida | Vaginal Delivery & Pregnancy Care | Divine IVF",
  description:
    "Looking for normal delivery   Consult Dr. Mandavi Rai at Divine IVF for vaginal birth planning, labour care, pain relief and personalised pregnancy care.",
  robots: { index: true, follow: true },
  keywords:
    "Normal Delivery in Noida, Normal Vaginal Delivery in Noida, Vaginal Delivery in Noida, Normal Birth in Noida, Normal Delivery Doctor in Noida, Vaginal Birth Doctor in Noida, Pregnancy Delivery in Noida, Pregnancy Delivery Doctor in Noida, Normal Delivery Hospital in Noida, Pregnancy Care in Noida, Labour and Delivery in Noida, Labour Pain Management in Noida, Painless Normal Delivery in Noida, Epidural for Normal Delivery in Noida, Induced Labour in Noida, Labour Induction in Noida, Assisted Vaginal Delivery in Noida, Vacuum Delivery in Noida, Forceps Delivery in Noida, Normal Delivery After IVF, IVF Pregnancy Normal Delivery, VBAC in Noida, Vaginal Birth After Cesarean in Noida, Obstetrician in Noida, Gynaecologist in Noida, Normal Delivery Cost in Noida",
  openGraph: {
    title: "Normal Delivery in Noida | Vaginal Delivery & Pregnancy Care | Divine IVF",
    description:
      "Personalised vaginal birth and labour planning in Noida with pregnancy monitoring, pain-relief options and safety-based delivery care.",
    url: "http://divine-ivf.vercel.app/normal-vaginal-delivery-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/JZqWgmQWDm8HwVDbvJXg/image.png",
        width: 1200,
        height: 630,
        alt: "Normal vaginal delivery care at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function NormalVaginalDeliveryPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Pregnancy Care", href: "/pregnancy-care" },
        { label: "Normal Vaginal Delivery in Noida" },
      ]}
      eyebrow="Pregnancy Care · Noida"
      // ========== H1 ==========
      titlePlain="Normal Vaginal Delivery in Noida"
      titleAccent="Personalised vaginal birth planning, labour care and pregnancy delivery"
      // =========================
      intro="Looking for normal delivery   Consult Dr. Mandavi Rai at Divine IVF for vaginal birth planning, labour care, pain relief and personalised pregnancy care."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/JZqWgmQWDm8HwVDbvJXg/image.png"
      heroAlt="Warm delivery care at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Labour and delivery support at Divine IVF Clinic, Noida"
      whatItIs={[
        "Normal vaginal delivery refers to labour and birth occurring through the birth canal, without surgical intervention, when both mother and baby are progressing well. This is the most common and natural way to give birth, allowing the body to work with its own physiological processes.",
        "During a vaginal delivery, labour progresses through three stages: early labour and dilation of the cervix (first stage), pushing and delivery of the baby (second stage), and delivery of the placenta (third stage). Dr. Mandavi Rai monitors labour progress closely throughout, supporting a physiological delivery while remaining ready to adjust the plan if circumstances change.",
        "At Divine IVF, Sector 76, Noida, normal vaginal delivery is provided with the same thorough, compassionate care that defines all aspects of pregnancy care. Dr. Rai respects your birth preferences while prioritising the safety of both you and your baby.",
      ]}
      whoNeedsIt={[
        "Pregnancies progressing without complications suggesting otherwise — where both mother and baby are healthy",
        "Those who have discussed and prefer a vaginal delivery where medically appropriate",
        "Women who have had a normal, low-risk pregnancy without significant medical concerns",
        "Women who are emotionally prepared and supported for a vaginal delivery",
        "Those who have previously had a vaginal delivery and are planning another",
        "Women with a normal fetal position (head-down) and no obstetric contraindications to vaginal delivery",
      ]}
      preparation={[
        "As your due date approaches, it's worth discussing your birth preferences with Dr. Rai, including pain relief options and who you'd like present, so the care team understands your priorities in advance. This conversation helps ensure your preferences are respected while keeping safety as the top priority.",
        "Knowing the signs of labour and when to come in is covered in your later pregnancy visits, so you feel prepared rather than uncertain when the time comes. Signs of labour include regular contractions, rupture of membranes (your water breaking), and changes in vaginal discharge.",
        "Consider packing a hospital bag with comfortable clothing, toiletries, items for your baby, and anything that will help you feel more at ease during labour — such as music, a pillow, or relaxation aids.",
        "If you're planning to use a birth partner, bring them to the later pregnancy visits so they can understand the process and how they can support you during labour.",
        "Consider attending antenatal classes to learn about breathing techniques, relaxation methods, and what to expect during labour and delivery.",
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
        { name: "Pregnancy Care", href: "/pregnancy-care", blurb: "The full pregnancy care timeline — from confirmation to delivery and beyond." },
        { name: "Obstetric Ultrasound", href: "/obstetric-ultrasound", blurb: "Monitoring through pregnancy leading up to delivery — informing your birth plan." },
        { name: "Cesarean Delivery", href: "/cesarean-delivery", blurb: "Planned and emergency cesarean care, when needed for you or your baby." },
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "Comprehensive women's health care before, during, and after pregnancy." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "Fertility treatment that may lead to pregnancy and normal delivery." },
        { name: "IVF Pregnancy Care", href: "/ivf-pregnancy-care", blurb: "Specialised pregnancy monitoring after IVF treatment." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your obstetrician and gynaecologist at Divine IVF, Noida." },
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
        {
          question: "What is the cost of normal delivery  ",
          answer:
            "The cost of normal delivery varies depending on the hospital, duration of stay, pain relief options used, and any additional medical care required. Dr. Rai can provide more information about what to expect during your consultation.",
        },
        {
          question: "Can I have a normal delivery after IVF?",
          answer:
            "Yes. Many women who conceive through IVF go on to have normal vaginal deliveries. The mode of delivery depends on your pregnancy progress, fetal position, and any obstetric factors — not on the method of conception.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Normal Vaginal Delivery in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Personalised vaginal birth planning, labour care and pregnancy delivery at Divine IVF, Sector 76, Noida.
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
              Book Normal Delivery Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Pregnancy monitoring for normal delivery at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Obstetric ultrasound for pregnancy care at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Normal Vaginal Delivery Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Normal Vaginal Delivery?</h2>
          <p className="text-ink-600">
            Normal vaginal delivery refers to labour and birth occurring through the birth canal, without surgical intervention, when both mother and baby are progressing well. This is the most common and natural way to give birth, allowing the body to work with its own physiological processes.
          </p>
          <p className="text-ink-600 mt-2">
            During a vaginal delivery, labour progresses through three stages:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li><strong>First Stage (Labour)</strong> — The cervix dilates from 0 to 10 centimetres, with contractions becoming stronger and more frequent</li>
            <li><strong>Second Stage (Delivery)</strong> — You`re fully dilated and begin pushing to deliver your baby</li>
            <li><strong>Third Stage (Placental Delivery)</strong> — After your baby is born, the placenta is delivered</li>
          </ul>
          <p className="text-ink-600 mt-2">
            Dr. Mandavi Rai monitors labour progress closely throughout, supporting a physiological delivery while remaining ready to adjust the plan if circumstances change.
          </p>
        </div>

        {/* When Should You Consider Normal Delivery */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">When Should You Consider Normal Delivery?</h2>
          <p className="text-ink-600 text-sm">Normal vaginal delivery may be appropriate when:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Pregnancy is progressing without complications
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Both mother and baby are healthy
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Baby is in a favourable position (head-down)
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              No obstetric contraindications to vaginal delivery
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You prefer a vaginal delivery where medically appropriate
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              You have had a previous vaginal delivery (for subsequent pregnancies)
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">The decision is made in consultation with Dr. Rai, based on your pregnancy progress and health status.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Labour assessment at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Birth preparation consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Postnatal care after vaginal delivery at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* The Three Stages of Labour */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">The Three Stages of Labour</h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">First Stage — Labour</h3>
              <p className="text-sm text-ink-600 mt-1">The cervix dilates from 0 to 10 centimetres. This stage is divided into:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-1 space-y-1">
                <li><strong>Early Labour:</strong> Mild, irregular contractions; cervix dilates to about 3-4 centimetres</li>
                <li><strong>Active Labour:</strong> Stronger, more frequent contractions; cervix dilates from 4 to 10 centimetres</li>
              </ul>
              <p className="text-xs text-ink-500 mt-1">This is typically the longest stage of labour, especially for first-time mothers.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-rose-200 shadow-sm">
              <h3 className="font-bold text-sm text-ink-900">Second Stage — Delivery</h3>
              <p className="text-sm text-ink-600 mt-1">You`re fully dilated and begin pushing to deliver your baby. This stage can last from a few minutes to several hours. Dr. Rai and the care team will guide and support you through this stage.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-sm text-ink-900">Third Stage — Placental Delivery</h3>
              <p className="text-sm text-ink-600 mt-1">After your baby is born, the placenta is delivered. This usually happens within 5-30 minutes and is typically the shortest and easiest stage.</p>
            </div>
          </div>
        </div>

        {/* Pain Relief Options During Labour */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Pain Relief Options During Labour</h2>
          <p className="text-ink-600 text-sm">Various pain relief options are available during labour. Dr. Rai will discuss these options with you during your pregnancy, so you can make informed choices about what feels right for you.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-ink-50/50 rounded-xl p-3">
              <h4 className="font-bold text-sm text-ink-900">Non-Medical Options</h4>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Breathing and relaxation techniques</li>
                <li>Changes in position and movement</li>
                <li>TENS machines (electrical stimulation)</li>
                <li>Water therapy (availability varies)</li>
                <li>Massage and counter-pressure</li>
                <li>Support from a birth partner or doula</li>
              </ul>
            </div>
            <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
              <h4 className="font-bold text-sm text-ink-900">Medical Options</h4>
              <ul className="list-disc list-inside text-xs text-ink-600 mt-1 space-y-1">
                <li>Gas and air (Entonox) — inhaled nitrous oxide</li>
                <li>Epidural anaesthesia — regional pain relief</li>
                <li>Pethidine or other opioid pain relief</li>
                <li>Local anaesthesia (for episiotomy or suturing)</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-ink-500 mt-3">The choice of pain relief depends on your preferences, the stage of labour, and medical considerations.</p>
        </div>

        {/* Benefits of Normal Vaginal Delivery */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">
            Benefits of Normal Vaginal Delivery
          </h2>

          <ul className="space-y-2">
            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Shorter recovery time
              </strong>
              Most women can return to normal activities within a few weeks
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Less invasive than cesarean
              </strong>
              No surgical incisions, less bleeding, and lower risk of infection
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Earlier bonding
              </strong>
              Immediate skin-to-skin contact is possible immediately after birth
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Shorter hospital stay
              </strong>
              Typically 1-2 days, compared to 2-4 days for cesarean delivery
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Lower risk of complications in future pregnancies
              </strong>
              Vaginal birth is generally safer for future pregnancies than multiple cesareans
            </li>

            <li className="grid grid-cols-2 items-start gap-2 text-sm text-ink-600">
              <strong>
                <span className="text-rose-500">✓ </span>
                Empowering experience
              </strong>
              Many women find vaginal birth a powerful and positive experience
            </li>
          </ul>
        </div>

        {/* Considerations / What Happens If Labour Doesn`t Progress */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Important Considerations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">What Happens If Labour Doesn`t Progress?</h3>
              <p className="text-ink-600 text-sm">If labour doesn`t progress as expected, Dr. Rai will discuss your options with you. This may involve:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Additional monitoring of you and your baby</li>
                <li>Interventions to help labour progress (such as amniotomy or oxytocin)</li>
                <li>If necessary — a change of plan to cesarean delivery</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2">You`ll be kept informed throughout and involved in all decisions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Can I Have a Vaginal Delivery After a Previous Cesarean?</h3>
              <p className="text-ink-600 text-sm">In many cases, vaginal birth after cesarean (VBAC) is possible and safe. The decision depends on:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>The reason for your previous cesarean</li>
                <li>The type of incision used</li>
                <li>Your current pregnancy and health status</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2">Dr. Rai will discuss your options and the risks and benefits with you.</p>
            </div>
          </div>
        </div>

        {/* Preparing for Normal Delivery */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Preparing for Normal Delivery</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Discuss Your Birth Preferences</h3>
              <p className="text-ink-600 text-sm">As your due date approaches, discuss your birth preferences with Dr. Rai, including pain relief options and who you`d like present. This conversation helps ensure your preferences are respected while keeping safety as the top priority.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Know the Signs of Labour</h3>
              <p className="text-ink-600 text-sm">Knowing the signs of labour and when to come in is covered in your later pregnancy visits. Signs of labour include regular contractions, rupture of membranes (your water breaking), and changes in vaginal discharge.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Pack Your Hospital Bag</h3>
              <p className="text-ink-600 text-sm">Consider packing comfortable clothing, toiletries, items for your baby, and anything that will help you feel more at ease during labour — such as music, a pillow, or relaxation aids.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Involve Your Birth Partner</h3>
              <p className="text-ink-600 text-sm">If you`re planning to use a birth partner, bring them to the later pregnancy visits so they can understand the process and how they can support you during labour.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Consider Antenatal Classes</h3>
              <p className="text-ink-600 text-sm">Attending antenatal classes can help you learn about breathing techniques, relaxation methods, and what to expect during labour and delivery.</p>
            </div>
          </div>
        </div>

        {/* Normal Delivery After IVF */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Normal Delivery After IVF
          </h3>
          <p className="text-ink-600 text-sm">Many women who conceive through IVF go on to have normal vaginal deliveries. The mode of delivery depends on your pregnancy progress, fetal position, and any obstetric factors — not on the method of conception. Dr. Rai will provide the same compassionate, high-quality care for your delivery regardless of how you conceived.</p>
        </div>

        {/* Normal Delivery Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Normal Delivery Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The cost of normal delivery in Noida varies depending on several factors:</p>
          <ul className="list-disc list-inside text-sm text-ink-600 mt-3 space-y-1">
            <li>Hospital or birthing facility chosen</li>
            <li>Duration of hospital stay</li>
            <li>Pain relief options used</li>
            <li>Any additional medical care required</li>
            <li>Assisted delivery if needed (vacuum or forceps)</li>
            <li>Postnatal care for mother and baby</li>
          </ul>
          <p className="text-sm text-ink-500 mt-3">Dr. Rai can provide more information about what to expect during your consultation.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Normal Delivery  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Pregnancy and Delivery Care</strong> — Your birth preferences are respected while safety remains the top priority.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Comprehensive Labour Monitoring</strong> — Continuous monitoring of both mother and baby throughout labour and delivery.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Pain Relief Options</strong> — A range of pain relief options available, discussed in advance to suit your preferences.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — Your obstetrician is present throughout labour and delivery, providing continuity of care.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evidence-Based Practice</strong> — Care follows guidelines from ACOG, FOGSI, and WHO for safe, high-quality delivery care.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Easy access for patients in Noida and surrounding areas.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Normal Delivery Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you are planning a normal vaginal delivery and want compassionate, personalised pregnancy care in Noida, Dr. Mandavi Rai at Divine IVF is here to support you.
            From birth planning to labour care and postnatal support, you`ll receive the highest quality care for you and your baby.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Normal Delivery Consultation
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