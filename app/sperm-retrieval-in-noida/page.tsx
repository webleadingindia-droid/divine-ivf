// app/sperm-retrieval-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/sperm-retrieval-in-noida" },
  title: "Sperm Retrieval in Noida | TESA, PESA, TESE & Micro-TESE | Divine IVF",
  description:
    "Explore sperm retrieval in Noida for azoospermia and male infertility. Learn about TESA, PESA, TESE and Micro-TESE with personalised IVF-ICSI planning at Divine IVF.",
  robots: { index: true, follow: true },
  keywords:
    "Sperm Retrieval in Noida, Surgical Sperm Retrieval in Noida, Sperm Extraction in Noida, Sperm Retrieval for Azoospermia in Noida, Azoospermia Treatment in Noida, TESA in Noida, TESA Treatment in Noida, PESA in Noida, PESA Treatment in Noida, TESE in Noida, TESE Procedure in Noida, Micro-TESE in Noida, Micro-TESE Treatment in Noida, Micro-TESE for Azoospermia, Sperm Retrieval for IVF in Noida, Sperm Retrieval for ICSI in Noida, Testicular Sperm Retrieval in Noida, Testicular Sperm Extraction in Noida, Male Infertility Treatment in Noida, Male Fertility Specialist in Noida, ICSI Treatment in Noida, IVF Treatment in Noida, Fertility Clinic in Noida, Sperm Retrieval Cost in Noida",
  openGraph: {
    title: "Sperm Retrieval in Noida | TESA, PESA, TESE & Micro-TESE | Divine IVF",
    description:
      "Learn about sperm retrieval options in Noida for azoospermia and male infertility, including TESA, PESA, TESE and Micro-TESE with IVF-ICSI planning.",
    url: "http://divine-ivf.vercel.app/sperm-retrieval-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/rzTzHCB9qV8mJHV3ZqgE/image.png",
        width: 1200,
        height: 630,
        alt: "Sperm retrieval procedure at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function SpermRetrievalPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "Male Infertility", href: "/male-infertility-treatment-in-noida" },
        { label: "Sperm Retrieval in Noida" },
      ]}
      eyebrow="Male Fertility · Surgical Techniques · Noida"
      // ========== H1 ==========
      titlePlain="Sperm Retrieval in Noida"
      titleAccent="Advanced sperm retrieval options for selected male infertility and azoospermia cases"
      // =========================
      intro="For some men, sperm may be absent from the semen or present in extremely low numbers even though sperm may still be available within the epididymis or testicular tissue. In selected cases, Sperm Retrieval in Noida may be considered to obtain sperm for assisted reproductive treatment such as IVF with ICSI."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/rzTzHCB9qV8mJHV3ZqgE/image.png"
      heroAlt="Sperm retrieval procedure at Divine IVF, Noida"
      secondaryImage="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
      secondaryImageAlt="Laboratory processing of retrieved sperm at Divine IVF Clinic, Noida"
      whatItIs={[
        "Sperm retrieval refers to procedures used to obtain sperm directly from the male reproductive tract when usable sperm cannot be obtained through ejaculation. Sperm may be retrieved from the epididymis or testicular tissue.",
        "Depending on the condition, techniques may include PESA, TESA, TESE, and Micro-TESE. The sperm obtained may be used fresh or frozen depending on the treatment plan and laboratory findings.",
        "Retrieved sperm are commonly used with ICSI – Intracytoplasmic Sperm Injection because only a limited number of sperm may be available.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides couple-based fertility evaluation and treatment planning for male-factor infertility. Depending on the cause of azoospermia, semen-analysis findings and male fertility evaluation, procedures such as PESA, TESA, TESE or Micro-TESE may be discussed with an appropriate male fertility/urology specialist where required.",
      ]}
      whoNeedsIt={[
        "Azoospermia — no sperm detected in the ejaculate (obstructive or non-obstructive)",
        "Obstructive azoospermia — sperm production is present but a blockage prevents sperm from reaching the ejaculate",
        "Non-obstructive azoospermia — sperm production within the testes is severely reduced or absent in many areas",
        "Previous vasectomy — men who have undergone vasectomy and want biological children",
        "Extremely low sperm count — where ejaculated sperm is insufficient for IVF or ICSI",
        "Ejaculatory dysfunction or anejaculation — when sperm cannot be collected through normal means",
        "Previous failed vasectomy reversal",
        "Fertility preservation in selected medical situations (e.g., cancer treatment)",
      ]}
      preparation={[
        "A detailed male fertility evaluation is important before surgery. Tests may include semen analysis (to confirm azoospermia), medical history review (previous fertility, childhood testicular conditions, infections, surgeries, vasectomy, trauma, cancer treatment, medications), hormonal testing (FSH, LH, testosterone, prolactin), physical examination (testicular size, epididymis, vas deferens, varicocele), ultrasound, and genetic testing in selected cases.",
        "Because sperm retrieval is generally performed for IVF-ICSI treatment, the female partner's fertility should also be evaluated including age, AMH, ovarian reserve, ultrasound, uterine health, and other fertility factors.",
        "You'll receive specific instructions about fasting and medication before the procedure. Most retrieval procedures are performed under local or general anaesthesia, so you'll need to arrange for someone to drive you home afterward.",
        "Genetic counselling and testing may be recommended before the procedure, particularly if non-obstructive azoospermia is suspected, as some causes may be genetic and could be passed on to children.",
      ]}
      howItWorks={[
        { title: "Step 1 – Male Fertility Evaluation", description: "The first step is to determine why sperm are absent or extremely low in the semen through semen analysis, hormonal testing, physical examination, and genetic testing." },
        { title: "Step 2 – Couple Fertility Assessment", description: "Because sperm retrieval is generally performed for IVF-ICSI treatment, the female partner's fertility is also evaluated including age, AMH, ovarian reserve, ultrasound, and uterine health." },
        { title: "Step 3 – Selection of Retrieval Technique", description: "Depending on the diagnosis, the fertility and male reproductive specialist may discuss PESA, TESA, TESE, or Micro-TESE." },
        { title: "Step 4 – Procedure Planning", description: "The retrieval may be coordinated with the female partner's IVF cycle, egg retrieval, sperm freezing strategy, and embryology laboratory availability." },
        { title: "Step 5 – Anaesthesia or Local Pain Control", description: "The type of anaesthesia depends on the procedure. Minor aspiration procedures may use local anaesthesia, while more extensive surgical procedures may require additional sedation or anaesthesia." },
        { title: "Step 6 – Sperm Retrieval", description: "Tissue or fluid is collected from the epididymis or testis according to the chosen technique." },
        { title: "Step 7 – Laboratory Examination", description: "The embryology team examines the sample for usable sperm. Finding sperm is not guaranteed in every case." },
        { title: "Step 8 – ICSI", description: "If usable sperm are found and eggs are available, sperm may be used for ICSI where a selected sperm is injected directly into a mature egg." },
        { title: "Step 9 – Sperm Freezing if Appropriate", description: "Additional sperm may be frozen when enough viable sperm are available and cryopreservation is considered appropriate." },
        { title: "Step 10 – Follow-Up", description: "After the procedure, the patient receives instructions regarding pain management, wound care, activity restrictions, follow-up, and warning symptoms." },
      ]}
      whatToExpect="Retrieval procedures are typically done under local or general anaesthesia depending on the specific technique used, with most patients returning home the same day. The procedure itself takes 15-30 minutes. Some mild discomfort, swelling, or bruising afterward is common and usually resolves within a few days. You'll be given specific post-procedure care instructions, including activity restrictions and pain management guidance. After minor aspiration procedures, many men may resume routine activities relatively quickly. After TESE or Micro-TESE, recovery may take longer."
      benefits={[
        "Can enable biological parenthood even with no sperm in the ejaculate — offering hope for men with azoospermia",
        "Retrieved sperm can be frozen for future cycles, avoiding the need to repeat the procedure each time",
        "Performed as a minor, generally same-day procedure with minimal recovery time",
        "Various techniques available to suit different causes of azoospermia",
        "Can be combined with ICSI to achieve fertilisation even when sperm numbers are very low",
        "Offers the possibility of genetic parenthood for men who have had a vasectomy",
      ]}
      considerations={[
        "Sperm is not always found during retrieval — the success rate depends on the underlying cause of azoospermia and the technique used",
        "As with any surgical procedure, involves standard risks including bleeding, infection, and discomfort that Dr. Rai will explain beforehand",
        "Typically used together with ICSI, not conventional IVF fertilisation — the retrieved sperm is injected directly into the egg",
        "Some causes of non-obstructive azoospermia may be genetic and could be passed on to children — genetic counselling is recommended",
        "The success of the procedure depends on the quality and quantity of sperm retrieved",
        "Multiple retrieval attempts may be needed in some cases",
        "Recovery time and discomfort vary depending on the technique used — TESE and Micro-TESE generally involve more recovery than PESA or TESA",
        "Micro-TESE and TESE can affect testosterone production in some men, particularly those who already have impaired testicular function",
      ]}
      related={[
        { name: "Male Infertility", href: "/male-infertility-treatment-in-noida", blurb: "The comprehensive evaluation that determines whether sperm retrieval is appropriate for your situation." },
        { name: "Azoospermia Treatment", href: "/azoospermia-treatment", blurb: "Specialised treatment for men with no sperm in the ejaculate." },
        { name: "ICSI Treatment", href: "/icsi-treatment-in-noida", blurb: "The technique retrieved sperm is typically used with — single sperm injection into the egg." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The fertility treatment within which retrieved sperm is used for ICSI and embryo transfer." },
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The initial evaluation that identifies azoospermia and guides the need for sperm retrieval." },
        { name: "IMSI Treatment", href: "/imsi-treatment-in-noida", blurb: "High-magnification sperm selection for use with retrieved sperm and ICSI." },
        { name: "Genetic Testing", href: "/genetic-testing-in-ivf-noida", blurb: "Genetic screening of embryos created with retrieved sperm." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Sperm Retrieval for Infertility",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/sperm-retrieval-for-infertility/",
        },
        {
          label: "Federation of Obstetric & Gynaecological Societies of India",
          source: "FOGSI",
          href: "https://www.fogsi.org/",
        },
        {
          label: "Indian Society for Assisted Reproduction",
          source: "ISAR",
          href: "https://www.isarindia.com/",
        },
      ]}
      faqs={[
        {
          question: "What is sperm retrieval?",
          answer:
            "Sperm retrieval refers to medical procedures used to obtain sperm directly from the epididymis or testis when usable sperm cannot be obtained through ejaculation.",
        },
        {
          question: "What is PESA?",
          answer:
            "PESA stands for Percutaneous Epididymal Sperm Aspiration. It retrieves sperm from the epididymis using needle aspiration and may be used in selected obstructive azoospermia cases.",
        },
        {
          question: "What is TESA?",
          answer:
            "TESA stands for Testicular Sperm Aspiration. It uses a needle to retrieve material directly from the testis.",
        },
        {
          question: "What is TESE?",
          answer:
            "TESE stands for Testicular Sperm Extraction. A small sample of testicular tissue is surgically removed and examined for sperm.",
        },
        {
          question: "What is Micro-TESE?",
          answer:
            "Micro-TESE is a microsurgical procedure that searches testicular tissue under magnification for areas more likely to contain sperm. It is commonly considered in selected non-obstructive azoospermia cases.",
        },
        {
          question: "Which is better, TESA or Micro-TESE?",
          answer:
            "Neither is universally better. The appropriate procedure depends on whether infertility is obstructive or non-obstructive and on the underlying diagnosis.",
        },
        {
          question: "Can sperm be found in azoospermia?",
          answer:
            "Sometimes. The likelihood depends on whether azoospermia is caused by an obstruction or impaired sperm production.",
        },
        {
          question: "Is Micro-TESE used for non-obstructive azoospermia?",
          answer:
            "Yes. Micro-TESE is a recognised sperm-retrieval approach for men with non-obstructive azoospermia when retrieval is being attempted.",
        },
        {
          question: "Is sperm retrieval used with ICSI?",
          answer:
            "Yes. Surgically retrieved sperm are commonly used with ICSI, where a selected sperm is injected directly into an egg.",
        },
        {
          question: "Can retrieved sperm be frozen?",
          answer:
            "In suitable cases, retrieved sperm may be frozen for future ICSI use if enough viable sperm are available.",
        },
        {
          question: "Does sperm retrieval guarantee pregnancy?",
          answer:
            "No. Successfully retrieving sperm does not guarantee fertilisation, embryo development, implantation, pregnancy or live birth.",
        },
        {
          question: "Is sperm retrieval painful?",
          answer:
            "The procedure is performed with appropriate anaesthesia or pain control. Temporary discomfort, swelling or bruising may occur afterward.",
        },
        {
          question: "How much does sperm retrieval cost  ",
          answer:
            "Cost varies according to whether PESA, TESA, TESE or Micro-TESE is required and whether IVF, ICSI, sperm freezing and additional investigations are involved.",
        },
        {
          question: "Where can I discuss sperm retrieval  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for couple fertility assessment and treatment planning for male-factor infertility, azoospermia and IVF-ICSI.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          Sperm Retrieval in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Advanced sperm retrieval options for selected male infertility and azoospermia cases at Divine IVF, Sector 76, Noida.
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
              Book Sperm Retrieval Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal blood test for male infertility evaluation before sperm retrieval at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for testicular evaluation before sperm retrieval at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is Sperm Retrieval Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is Sperm Retrieval?</h2>
          <p className="text-ink-600">
            Sperm retrieval refers to procedures used to obtain sperm directly from the male reproductive tract when usable sperm cannot be obtained through ejaculation.
          </p>
          <p className="text-ink-600 mt-2">
            Sperm may be retrieved from:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li>Epididymis</li>
            <li>Testicular tissue</li>
          </ul>
          <p className="text-ink-600 mt-2">
            Depending on the condition, techniques may include:
          </p>
          <ul className="list-disc list-inside text-ink-600 mt-2 space-y-1">
            <li><strong>PESA</strong> — Percutaneous Epididymal Sperm Aspiration</li>
            <li><strong>TESA</strong> — Testicular Sperm Aspiration</li>
            <li><strong>TESE</strong> — Testicular Sperm Extraction</li>
            <li><strong>Micro-TESE</strong> — Microdissection Testicular Sperm Extraction</li>
          </ul>
          <p className="text-ink-600 mt-2">
            The sperm obtained may be used fresh or frozen depending on the treatment plan and laboratory findings.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            Retrieved sperm are commonly used with <Link href="/icsi-treatment-in-noida" className="text-rose-600 hover:underline">ICSI</Link> – Intracytoplasmic Sperm Injection because only a limited number of sperm may be available.
          </p>
        </div>

        {/* Who May Need Sperm Retrieval */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Who May Need Sperm Retrieval?</h2>
          <p className="text-ink-600 text-sm">Surgical sperm retrieval may be considered in selected male fertility situations.</p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Azoospermia</h3>
              <p className="text-ink-600 text-sm">Azoospermia means that no sperm are detected in the ejaculate. It can broadly be classified into obstructive azoospermia and non-obstructive azoospermia. The treatment approach differs depending on the cause.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Obstructive Azoospermia</h3>
              <p className="text-ink-600 text-sm">In obstructive azoospermia, sperm production may be present but a blockage prevents sperm from reaching the ejaculate. Possible causes include previous vasectomy, congenital reproductive-tract blockage, previous infection, previous surgery, injury, and certain structural abnormalities. In selected obstructive cases, sperm may be retrieved from either the epididymis or testis.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Non-Obstructive Azoospermia</h3>
              <p className="text-ink-600 text-sm">In non-obstructive azoospermia, sperm production within the testes is severely reduced or absent in many areas. Possible causes may include genetic abnormalities, hormonal disorders, testicular failure, previous chemotherapy, radiation treatment, undescended testes, and certain severe testicular conditions. In these cases, more specialised retrieval techniques such as Micro-TESE may be considered.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Other Reasons Sperm Retrieval May Be Required</h3>
              <p className="text-ink-600 text-sm">Sperm retrieval may also be discussed in situations such as extremely low sperm count, ejaculatory dysfunction, retrograde ejaculation in selected cases, previous vasectomy, certain spinal cord injuries, inability to produce a semen sample, ejaculatory duct obstruction, and fertility preservation in selected medical situations.</p>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A proper diagnosis should be made before deciding on surgery.</p>
        </div>

        {/* Types of Sperm Retrieval Procedures */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Types of Sperm Retrieval Procedures</h2>
          
          <div className="space-y-6">
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">PESA – Percutaneous Epididymal Sperm Aspiration</h3>
              <p className="text-ink-600 text-sm mt-1">PESA is a sperm retrieval procedure in which sperm-containing fluid is aspirated from the epididymis using a fine needle. It may be considered in selected men with obstructive azoospermia when sperm production is expected to be normal. PESA does not involve a large surgical incision.</p>
              <h4 className="font-semibold text-ink-900 text-sm mt-2">Who May Be Suitable for PESA?</h4>
              <p className="text-ink-600 text-sm">PESA may be considered in cases such as obstructive azoospermia, previous vasectomy, certain congenital reproductive tract blockages, and other epididymal obstruction conditions. Suitability depends on the individual diagnosis.</p>
            </div>
            
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">TESA – Testicular Sperm Aspiration</h3>
              <p className="text-ink-600 text-sm mt-1">TESA stands for Testicular Sperm Aspiration. During TESA, a needle is inserted into the testis to obtain tissue or fluid that may contain sperm. The collected material is examined in the laboratory to identify usable sperm. TESA may be considered in selected cases where testicular sperm retrieval is appropriate.</p>
            </div>
            
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">TESE – Testicular Sperm Extraction</h3>
              <p className="text-ink-600 text-sm mt-1">TESE involves removing a small sample of testicular tissue through a surgical procedure. The laboratory examines the tissue for sperm. TESE may be considered in selected men with azoospermia depending on the suspected cause and previous fertility evaluation.</p>
            </div>
            
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">Micro-TESE – Microdissection Testicular Sperm Extraction</h3>
              <p className="text-ink-600 text-sm mt-1">Micro-TESE is a more specialised surgical technique used particularly in selected cases of non-obstructive azoospermia. During Micro-TESE, testicular tissue is examined under magnification, the surgeon identifies seminiferous tubules that appear more likely to contain sperm, small tissue samples are collected, and the embryology laboratory examines those samples for sperm.</p>
              <p className="text-ink-600 text-sm mt-2">Micro-TESE is intended to search more selectively for areas of sperm production. For men with non-obstructive azoospermia, sperm production can be limited to very small areas within the testis. This makes simple aspiration less suitable in some cases. Micro-TESE allows a targeted search of testicular tissue and is commonly considered when there is a possibility that small areas of sperm production remain. However, sperm retrieval cannot be guaranteed.</p>
            </div>
          </div>
        </div>

        {/* Comparison Tables */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Comparing Sperm Retrieval Techniques</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">PESA vs TESA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">PESA</h4>
                  <ul className="space-y-1 mt-1 text-xs text-ink-600">
                    <li>• Sperm are retrieved from the epididymis</li>
                    <li>• Often considered for obstructive azoospermia</li>
                    <li>• Uses needle aspiration</li>
                    <li>• Does not require testicular tissue extraction</li>
                  </ul>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">TESA</h4>
                  <ul className="space-y-1 mt-1 text-xs text-ink-600">
                    <li>• Sperm are retrieved directly from the testis</li>
                    <li>• Uses needle aspiration</li>
                    <li>• May be considered depending on the underlying diagnosis</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-ink-500 mt-2">The appropriate technique depends on where sperm are expected to be found.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">TESA vs TESE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">TESA</h4>
                  <p className="text-xs text-ink-600 mt-1">A needle is used to aspirate testicular material.</p>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">TESE</h4>
                  <p className="text-xs text-ink-600 mt-1">A small surgical opening is made and testicular tissue is removed for laboratory examination. TESE provides direct tissue sampling and may be used when aspiration is insufficient or not appropriate.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">TESE vs Micro-TESE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-ink-50/50 rounded-xl p-3">
                  <h4 className="font-bold text-sm text-ink-900">Conventional TESE</h4>
                  <p className="text-xs text-ink-600 mt-1">Small samples of testicular tissue are surgically removed.</p>
                </div>
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                  <h4 className="font-bold text-sm text-ink-900">Micro-TESE</h4>
                  <p className="text-xs text-ink-600 mt-1">Testicular tissue is examined under surgical magnification to identify areas more likely to contain sperm. Especially relevant in selected men with non-obstructive azoospermia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Laboratory processing of retrieved sperm for ICSI at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="Sperm retrieval consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="Sperm preparation for ICSI after retrieval at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Sperm Retrieval and ICSI */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Sperm Retrieval and ICSI</h2>
          <p className="text-ink-600 text-sm">Retrieved sperm are generally used with <Link href="/icsi-treatment-in-noida" className="text-rose-600 font-semibold hover:underline">ICSI</Link>.</p>
          <p className="text-ink-600 text-sm mt-2">During ICSI:</p>
          <ol className="list-decimal list-inside text-sm text-ink-600 mt-2 space-y-1">
            <li>Eggs are retrieved from the female partner</li>
            <li>An embryologist selects a sperm</li>
            <li>The selected sperm is injected directly into a mature egg</li>
            <li>Fertilisation is monitored</li>
            <li>Resulting embryos are cultured</li>
            <li>A suitable embryo may later be transferred</li>
          </ol>
          <p className="text-sm text-ink-500 mt-2">ICSI is particularly useful because surgically retrieved sperm may be available only in limited numbers.</p>
        </div>

        {/* Can Retrieved Sperm Be Used for IVF Without ICSI / Can Retrieved Sperm Be Frozen */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Important Questions About Retrieved Sperm</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Can Retrieved Sperm Be Used for IVF Without ICSI?</h3>
              <p className="text-ink-600 text-sm">In most surgical sperm-retrieval cases, ICSI is typically the preferred fertilisation technique. This is because retrieved sperm may be limited in number, motility may be reduced, and the sperm may not be able to fertilise an egg effectively through conventional IVF. The embryology team decides the appropriate fertilisation method based on sperm availability and quality.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can Retrieved Sperm Be Frozen?</h3>
              <p className="text-ink-600 text-sm">Yes, sperm obtained through retrieval procedures may sometimes be cryopreserved for future fertility treatment. Whether freezing is appropriate depends on the number of sperm retrieved, sperm quality, cause of azoospermia, IVF treatment timing, and laboratory recommendations. In some non-obstructive azoospermia cases, retrieval may be coordinated closely with the female partner`s IVF cycle because only very limited sperm may be found.</p>
            </div>
          </div>
        </div>

        {/* Tests Before Sperm Retrieval */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Tests Before Sperm Retrieval</h2>
          <p className="text-ink-600 text-sm">A detailed male fertility evaluation is important before surgery.</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900">Semen Analysis</h3>
              <p className="text-ink-600 text-sm">Semen analysis confirms whether sperm are present and evaluates other semen parameters. A diagnosis of azoospermia generally requires appropriate laboratory evaluation rather than relying on one unverified result.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Medical History</h3>
              <p className="text-ink-600 text-sm">The doctor may review previous fertility, childhood testicular conditions, undescended testes, infections, surgeries, vasectomy, trauma, cancer treatment, medications, and sexual and ejaculation history.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Hormonal Testing</h3>
              <p className="text-ink-600 text-sm">Hormonal tests may include FSH, LH, testosterone, prolactin, and other hormones when clinically indicated. These can provide information about testicular function and sperm production.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Physical Examination</h3>
              <p className="text-ink-600 text-sm">Clinical evaluation may assess testicular size, epididymis, vas deferens, varicocele, and other reproductive tract findings.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Ultrasound</h3>
              <p className="text-ink-600 text-sm">Scrotal or reproductive tract ultrasound may be recommended in selected cases.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Genetic Testing</h3>
              <p className="text-ink-600 text-sm">Genetic evaluation may be advised in men with severe sperm abnormalities or non-obstructive azoospermia. Testing may include selected investigations depending on the clinical findings and suspected cause. Genetic counselling may also be appropriate in certain cases.</p>
            </div>
          </div>
        </div>

        {/* Is Sperm Retrieval Painful / Recovery / Risks */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Sperm Retrieval: Pain, Recovery, and Risks</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Is Sperm Retrieval Painful?</h3>
              <p className="text-ink-600 text-sm">Discomfort depends on the procedure. PESA and TESA are relatively less invasive procedures, while TESE and Micro-TESE involve surgical tissue retrieval. Anaesthesia or pain-control measures are used to minimise discomfort during treatment. Temporary soreness, swelling or bruising may occur afterward.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Recovery After Sperm Retrieval</h3>
              <p className="text-ink-600 text-sm">Recovery varies depending on the technique. After minor aspiration procedures, many men may resume routine activities relatively quickly. After TESE or Micro-TESE, recovery may take longer. Your doctor may advise temporarily avoiding heavy exercise, strenuous activity, sexual intercourse, and heavy lifting. Follow the specific post-procedure advice provided by your treating doctor.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Risks of Surgical Sperm Retrieval</h3>
              <p className="text-ink-600 text-sm">Possible risks can include pain, swelling, bruising, bleeding, infection, haematoma, temporary discomfort, and testicular tissue injury. More extensive procedures may have additional risks. Micro-TESE and TESE can also affect testosterone production in some men, particularly those who already have impaired testicular function.</p>
            </div>
          </div>
        </div>

        {/* Does Sperm Retrieval Always Find Sperm / What Happens If No Sperm Are Found */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Does Sperm Retrieval Always Find Sperm?</h2>
          <p className="text-ink-600 text-sm font-semibold">No.</p>
          <p className="text-ink-600 text-sm mt-2">The possibility of finding sperm depends greatly on the cause of infertility. Sperm retrieval tends to be more predictable in obstructive azoospermia because sperm production may still be normal. In non-obstructive azoospermia, sperm production may be severely impaired and successful retrieval cannot be guaranteed.</p>
          
          <h3 className="font-semibold text-ink-900 text-sm mt-4">What Happens If No Sperm Are Found?</h3>
          <p className="text-ink-600 text-sm">If sperm are not found, the fertility team will discuss what the findings mean and whether any other options are appropriate. Depending on the individual situation, these discussions may include further medical evaluation, genetic counselling, alternative reproductive options, and donor sperm where legally and medically appropriate. Treatment should be personalised to the couple.</p>
        </div>

        {/* Sperm Retrieval After Vasectomy / Sperm Retrieval for Azoospermia */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Special Situations</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Sperm Retrieval After Vasectomy</h3>
              <p className="text-ink-600 text-sm">Men who have undergone vasectomy may sometimes use surgically retrieved sperm with IVF-ICSI instead of vasectomy reversal. The appropriate option depends on time since vasectomy, female partner`s age, female fertility status, couple`s treatment goals, and surgical considerations. Both sperm retrieval with ICSI and vasectomy reversal may be discussed where appropriate.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Sperm Retrieval for Azoospermia</h3>
              <p className="text-ink-600 text-sm">The most important step is distinguishing between obstructive azoospermia (sperm are produced but cannot reach the semen because of a blockage) and non-obstructive azoospermia (sperm production itself is significantly impaired). This distinction strongly influences which sperm retrieval procedure may be recommended.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Does Azoospermia Mean a Man Can Never Have a Biological Child?</h3>
              <p className="text-ink-600 text-sm">Not necessarily. Some men with azoospermia may still have sperm available within the epididymis or testes. If usable sperm can be retrieved, they may potentially be used with ICSI. However, sperm retrieval and pregnancy cannot be guaranteed.</p>
            </div>
          </div>
        </div>

        {/* Sperm Retrieval Success Depends on the Cause */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Sperm Retrieval Success Depends on the Cause
          </h3>
          <p className="text-ink-600 text-sm">There is no single sperm-retrieval success percentage appropriate for every patient. The chances depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Obstructive vs non-obstructive azoospermia
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Testicular function
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Hormonal findings
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Genetic diagnosis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous treatment
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Retrieval technique
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous sperm retrieval results
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">It is better to discuss individual chances after completing a male fertility evaluation.</p>
        </div>

        {/* Sperm Retrieval Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Sperm Retrieval Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The cost of sperm retrieval in Noida varies according to the procedure and overall fertility-treatment plan. Cost may depend on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Male fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Semen analysis
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Hormonal tests
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Genetic testing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              PESA
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              TESA
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              TESE
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Micro-TESE
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Anaesthesia
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Embryology laboratory charges
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Sperm freezing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              IVF
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              ICSI
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Medicines and follow-up
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Micro-TESE is generally more complex than aspiration procedures, so costs can differ significantly. A personalised estimate should be provided once the appropriate retrieval technique has been identified.</p>
        </div>

        {/* Questions to Ask */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Questions to Ask Before Sperm Retrieval
          </h3>
          <p className="text-ink-600 text-sm">Before undergoing treatment, consider asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is sperm retrieval recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Do I have obstructive or non-obstructive azoospermia?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Which procedure is appropriate for me?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Should I consider PESA, TESA, TESE or Micro-TESE?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What is the likelihood of finding sperm in my situation?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will the sperm be used fresh or frozen?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Will ICSI be required?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Should the procedure be coordinated with egg retrieval?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the possible risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if no sperm are found?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What will the complete treatment cost include?
            </div>
          </div>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Sperm Retrieval Treatment Planning  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Couple-Based Fertility Evaluation</strong> — Both male and female fertility factors are considered before IVF-ICSI planning.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Male Infertility Assessment</strong> — Semen analysis and additional male fertility investigations can help determine the likely cause of azoospermia.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Multiple Retrieval Options</strong> — Depending on clinical indication, techniques such as PESA, TESA, TESE or Micro-TESE may be discussed with an appropriate specialist.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">IVF and ICSI Integration</strong> — Retrieved sperm can be incorporated into an IVF-ICSI treatment plan when suitable.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Treatment Planning</strong> — The retrieval technique is selected according to the underlying diagnosis rather than using the same procedure for every patient.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Fertility Care Under Dr. Mandavi Rai</strong> — Couple fertility treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida, with male specialist input where appropriate.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for couples seeking male infertility and advanced fertility treatment in Noida.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a Sperm Retrieval Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If semen analysis shows azoospermia, extremely low sperm numbers or another significant male fertility problem, further evaluation can help determine whether sperm retrieval is an appropriate option.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised couple fertility assessment and IVF-ICSI planning, with appropriate specialist evaluation for sperm retrieval when required.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Sperm Retrieval Consultation
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