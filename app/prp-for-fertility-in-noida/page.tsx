// app/prp-for-fertility-in-noida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/prp-for-fertility-in-noida" },
  title: "PRP for Fertility in Noida | Ovarian & Endometrial PRP | Divine IVF",
  description:
    "Explore PRP for Fertility in Noida, including ovarian PRP for low ovarian reserve and intrauterine PRP for thin endometrium. Learn about evidence, risks and options.",
  robots: { index: true, follow: true },
  keywords:
    "PRP for Fertility in Noida, Fertility PRP in Noida, Ovarian PRP in Noida, Ovarian PRP Treatment in Noida, Ovarian Rejuvenation in Noida, Ovarian Rejuvenation PRP in Noida, PRP for Low AMH in Noida, PRP for Diminished Ovarian Reserve, PRP for Poor Ovarian Reserve, PRP for Poor Ovarian Response, PRP for Premature Ovarian Insufficiency, Intraovarian PRP in Noida, Intrauterine PRP in Noida, Endometrial PRP in Noida, PRP for Thin Endometrium in Noida, PRP for Thin Uterine Lining, PRP for Recurrent Implantation Failure, PRP Before IVF, PRP Before Embryo Transfer, PRP Fertility Treatment Cost in Noida, Ovarian PRP Cost in Noida, Low AMH Treatment in Noida, IVF Treatment in Noida, Fertility Clinic in Noida, Fertility Specialist in Noida",
  openGraph: {
    title: "PRP for Fertility in Noida | Ovarian & Endometrial PRP | Divine IVF",
    description:
      "Learn about ovarian and intrauterine PRP for fertility concerns in Noida, including current evidence, limitations, possible risks and alternatives.",
    url: "http://divine-ivf.vercel.app/prp-for-fertility-in-noida",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://plain-apac-prod-public.komododecks.com/202609/09/M1Usg72BTyczgY9HQ90r/image.png",
        width: 1200,
        height: 630,
        alt: "PRP therapy preparation at Divine IVF, Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PrpForFertilityPage() {
  return (
    <TreatmentTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Fertility Care", href: "/fertility" },
        { label: "IVF Treatment", href: "/ivf-treatment-in-noida" },
        { label: "PRP for Fertility in Noida" },
      ]}
      eyebrow="Reproductive Procedures · Noida"
      // ========== H1 ==========
      titlePlain="PRP for Fertility in Noida"
      titleAccent="Ovarian PRP for low ovarian reserve and intrauterine PRP for thin endometrium"
      // =========================
      intro="If you have low ovarian reserve, poor ovarian response, premature ovarian insufficiency, thin endometrium, or recurrent implantation failure, you may have come across Platelet-Rich Plasma (PRP) therapy while researching fertility treatment options."
      heroImage="https://plain-apac-prod-public.komododecks.com/202609/09/M1Usg72BTyczgY9HQ90r/image.png"
      heroAlt="PRP therapy preparation at Divine IVF, Noida"
      secondaryImage="https://images.unsplash.com/photo-1584982935372-1c0a3a3f7dcb?q=80&w=1200&auto=format&fit=crop"
      secondaryImageAlt="Blood sample processing for PRP therapy at Divine IVF Clinic, Noida"
      whatItIs={[
        "PRP stands for Platelet-Rich Plasma. It is an autologous therapy prepared from your own blood sample, which is processed to concentrate platelets that contain growth factors and bioactive proteins.",
        "In fertility care, PRP has been explored in specific, individually evaluated contexts. It is not a routine fertility treatment and its routine benefit for improving pregnancy or live-birth outcomes remains uncertain.",
        "At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation for diminished ovarian reserve, poor ovarian response, thin endometrium and implantation concerns, including evidence-based counselling regarding PRP fertility treatment add-ons.",
      ]}
      whoNeedsIt={[
        "Patients with diminished ovarian reserve where ovarian rejuvenation is being considered",
        "Patients with poor ovarian response in previous IVF cycles",
        "Patients with premature ovarian insufficiency (POI) where PRP may be explored",
        "Patients with thin endometrium that hasn't responded to standard hormonal treatment",
        "Patients with recurrent implantation failure where uterine factors are suspected",
        "Patients who have been thoroughly evaluated and have specific indications for PRP",
      ]}
      preparation={[
        "Before considering PRP, Dr. Rai reviews your complete fertility history, including ovarian reserve testing (AMH, AFC), endometrial assessment, previous IVF cycles, and any other relevant investigations.",
        "PRP starts with a routine blood draw, similar to a standard blood test — no special preparation is usually required beforehand, though Dr. Rai will confirm any specific instructions relevant to your planned procedure.",
        "If you're having PRP as part of a fertility treatment cycle, the timing of the procedure will be coordinated with your overall treatment plan. Dr. Rai will advise on the best timing for your specific situation.",
        "You should inform the clinic of any medications you're taking, particularly blood thinners, as these may affect the PRP preparation or the procedure itself.",
      ]}
      howItWorks={[
        { title: "Step 1 – Blood Draw", description: "A small blood sample is taken from your arm, similar to a routine blood test. The process is quick and well-tolerated." },
        { title: "Step 2 – Laboratory Processing", description: "The blood sample is processed in a centrifuge to separate and concentrate the platelets, creating the PRP preparation." },
        { title: "Step 3 – Preparation", description: "The concentrated PRP is prepared for administration. The entire process from blood draw to prepared PRP typically takes about 30-45 minutes." },
        { title: "Step 4 – Administration", description: "The prepared PRP is administered as part of your planned procedure — which may involve intrauterine infusion, ovarian injection, or another approach depending on your specific case." },
        { title: "Step 5 – Follow-Up", description: "Timing and follow-up are coordinated with your overall treatment plan. Dr. Rai will explain what to expect and when." },
      ]}
      whatToExpect="Because PRP is prepared from your own blood, the process starts with a straightforward blood draw — similar to having blood taken for a routine test. The blood is then processed in the lab while you wait. The PRP is then administered as part of your planned procedure. Dr. Rai will explain the specific administration process relevant to your case, whether that involves intrauterine infusion, ovarian injection, or another approach. The entire process is performed in a clinical setting under medical supervision."
      benefits={[
        "Uses your own blood sample, prepared in a controlled process — no risk of transmission of infectious diseases or allergic reactions",
        "Contains concentrated growth factors that may support tissue regeneration and healing",
        "Considered only after individual evaluation — never recommended without proper clinical indication",
        "Minimally invasive with no incisions required",
        "Can be integrated into a broader, individualised fertility treatment plan",
        "Autologous therapy with low risk of adverse reactions",
      ]}
      considerations={[
        "Not appropriate or established for every situation — discussed individually based on your specific findings",
        "Should follow a proper evaluation rather than be requested as a standalone option without clinical indication",
        "Outcomes vary by individual case and are not guaranteed — the evidence base is still evolving",
        "The mechanism of action is not fully understood, and research is ongoing",
        "Multiple treatments may be needed in some cases",
        "Costs associated with the therapy should be discussed upfront",
        "Not all patients will be suitable candidates for PRP therapy",
        "HFEA currently rates PRP red for improving the chance of having a baby for most fertility patients because available evidence suggests it may reduce treatment effectiveness or there are safety concerns",
      ]}
      related={[
        { name: "Fertility Investigation", href: "/fertility-investigation-in-noida", blurb: "The comprehensive evaluation that informs whether PRP is relevant to your specific situation." },
        { name: "IVF Treatment", href: "/ivf-treatment-in-noida", blurb: "The core fertility treatment that PRP may be considered alongside as an adjunct therapy." },
        { name: "Egg Donor IVF", href: "/egg-donor-ivf-in-noida", blurb: "Alternative option for women with severely reduced ovarian reserve." },
        { name: "Embryo Transfer", href: "/embryo-transfer", blurb: "The procedure that PRP may support through improved endometrial thickness." },
        { name: "ERA Test", href: "/era-test-in-noida", blurb: "Endometrial receptivity testing that may be considered alongside PRP." },
        { name: "Hysteroscopy", href: "/hysteroscopy-in-noida", blurb: "A uterine evaluation procedure that may be performed alongside PRP therapy." },
        { name: "Gynaecological Care", href: "/gynaecological-care-in-noida", blurb: "Broader women's health care alongside fertility treatment." },
        { name: "Recurrent Implantation Failure", href: "/recurrent-implantation-failure", blurb: "A condition for which PRP may be discussed." },
        { name: "Genetic Testing / PGT", href: "/genetic-testing-in-ivf-noida", blurb: "Genetic screening that may be considered alongside PRP." },
        { name: "Dr. Mandavi Rai", href: "/doctor/dr-mandavi-rai", blurb: "Meet your fertility specialist at Divine IVF, Noida." },
      ]}
      externalResources={[
        {
          label: "Platelet-Rich Plasma in Reproductive Medicine",
          source: "ASRM · ReproductiveFacts.org",
          href: "https://www.reproductivefacts.org/",
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
          question: "What is PRP for fertility?",
          answer:
            "PRP stands for Platelet-Rich Plasma. It is an autologous therapy prepared from your own blood, processed to concentrate platelets and growth factors. In fertility, it has been explored for ovarian rejuvenation and improving endometrial thickness, but its routine benefit remains uncertain.",
        },
        {
          question: "Is PRP a proven fertility treatment?",
          answer:
            "No. PRP is not considered a standard evidence-based fertility treatment. HFEA currently rates PRP red for improving the chance of having a baby for most fertility patients because available evidence suggests it may reduce treatment effectiveness or there are safety concerns.",
        },
        {
          question: "Who may be considered for PRP?",
          answer:
            "PRP may be discussed in selected patients with diminished ovarian reserve, poor ovarian response, premature ovarian insufficiency, thin endometrium, or recurrent implantation failure after thorough evaluation of all recognised causes.",
        },
        {
          question: "What is ovarian PRP?",
          answer:
            "Ovarian PRP involves injecting concentrated platelets and growth factors into the ovaries. It has been proposed to potentially improve ovarian function, but its routine benefit remains unproven.",
        },
        {
          question: "What is intrauterine PRP?",
          answer:
            "Intrauterine PRP involves infusing PRP into the uterine cavity. It has been proposed to potentially improve endometrial thickness and receptivity, but its routine benefit remains unproven.",
        },
        {
          question: "Can PRP increase AMH?",
          answer:
            "Some studies have reported possible AMH increases after PRP, but findings are inconsistent. There is no reliable evidence that PRP consistently improves AMH or ovarian reserve.",
        },
        {
          question: "Can PRP improve endometrial thickness?",
          answer:
            "Some studies have reported improvements in endometrial thickness after PRP, but evidence is limited and inconsistent. Standard treatments for thin endometrium should be considered before experimental therapies.",
        },
        {
          question: "Does PRP guarantee pregnancy?",
          answer:
            "No. PRP cannot guarantee pregnancy. It should be considered as an experimental adjunct, not a proven fertility treatment.",
        },
        {
          question: "Is PRP safe?",
          answer:
            "PRP is prepared from your own blood, which minimises the risk of allergic reactions or transmission of infectious diseases. However, the procedure itself carries risks including infection, bleeding, and pain at the injection site.",
        },
        {
          question: "What is the cost of PRP for fertility  ",
          answer:
            "Cost varies depending on the type of PRP (ovarian vs intrauterine), number of treatments, and associated procedures. Patients should ask about the evidence supporting PRP in their specific case before paying for this experimental add-on.",
        },
        {
          question: "Where can I discuss PRP for fertility  ",
          answer:
            "You can consult Dr. Mandavi Rai at Divine IVF, Sector 76, Noida for personalised fertility evaluation and evidence-based counselling regarding PRP and other fertility treatment options.",
        },
      ]}
    >
      {/* Rich Content with Images and Links */}
      <div className="space-y-6">
        {/* ========== H1 DISPLAYED PROMINENTLY ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          PRP for Fertility in Noida
        </h1>
        <p className="text-lg text-ink-600 -mt-2">
          Ovarian PRP for low ovarian reserve and intrauterine PRP for thin endometrium at Divine IVF, Sector 76, Noida.
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
              Book PRP Consultation
            </Link>
          </div>
        </div>

        {/* Image Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/r4FssgyOn1CDI8HHbnql/image.png"
              alt="Hormonal assessment for PRP fertility evaluation at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/ihoqxAWpk2sngcSobHAv/image.png"
              alt="Ultrasound scan for ovarian and endometrial assessment before PRP at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* What Is PRP Section */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Is PRP for Fertility?</h2>
          <p className="text-ink-600">
            <strong>PRP</strong> stands for <strong>Platelet-Rich Plasma</strong>. It is an autologous therapy prepared from your own blood sample, which is processed to concentrate platelets that contain growth factors and bioactive proteins.
          </p>
          <p className="text-ink-600 mt-2">
            In fertility care, PRP has been explored in specific, individually evaluated contexts. It is not a routine fertility treatment and its routine benefit for improving pregnancy or live-birth outcomes remains uncertain.
          </p>
          <p className="text-ink-600 mt-2 font-semibold">
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility evaluation for diminished ovarian reserve, poor ovarian response, thin endometrium and implantation concerns, including evidence-based counselling regarding PRP fertility treatment add-ons.
          </p>
        </div>

        {/* Ovarian PRP / Intrauterine PRP */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Types of PRP for Fertility</h2>
          
          <div className="space-y-4">
            <div className="bg-ink-50/50 rounded-xl p-4 border border-ink-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">Ovarian PRP</h3>
              <p className="text-ink-600 text-sm mt-1">Ovarian PRP involves injecting concentrated platelets and growth factors into the ovaries. It has been proposed to potentially improve ovarian function in women with:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Diminished ovarian reserve</li>
                <li>Poor ovarian response</li>
                <li>Premature ovarian insufficiency (POI)</li>
                <li>Low AMH</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2 font-semibold">However, its routine benefit remains unproven.</p>
            </div>
            
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100/50">
              <h3 className="font-bold text-ink-900 text-rose-600">Intrauterine PRP</h3>
              <p className="text-ink-600 text-sm mt-1">Intrauterine PRP involves infusing PRP into the uterine cavity. It has been proposed to potentially improve endometrial thickness and receptivity in women with:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Thin endometrium</li>
                <li>Refractory endometrium</li>
                <li>Recurrent implantation failure</li>
              </ul>
              <p className="text-ink-600 text-sm mt-2 font-semibold">However, its routine benefit remains unproven.</p>
            </div>
          </div>
        </div>

        {/* Who May Be Considered for PRP */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Who May Be Considered for PRP?</h2>
          <p className="text-ink-600 text-sm">PRP is not for everyone. It may be discussed in selected patients after thorough evaluation:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Diminished ovarian reserve
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Poor ovarian response
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Premature ovarian insufficiency
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Thin endometrium
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Recurrent implantation failure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Previous IVF failure
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">A thorough evaluation of recognised causes should be completed before considering PRP.</p>
        </div>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="PRP preparation at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202609/08/CDBKdEp8rE4QX4kMEGcA/image.jpg"
              alt="PRP consultation with Dr. Mandavi Rai at Divine IVF Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/k0D4Ufj5KatKSZhS85VD/image.webp"
              alt="PRP administration at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* What Does the Evidence Say */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Does the Evidence Say?</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">Is PRP Proven to Improve IVF Success?</h3>
              <p className="text-ink-600 text-sm font-semibold">No.</p>
              <p className="text-ink-600 text-sm mt-2">HFEA currently rates PRP red for improving the chance of having a baby for most fertility patients because available evidence suggests it may reduce treatment effectiveness or there are safety concerns.</p>
              <p className="text-ink-600 text-sm mt-2">Some smaller studies have suggested possible benefits, but the evidence is inconsistent and limited by small sample sizes and lack of robust controls.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can PRP Improve Ovarian Function?</h3>
              <p className="text-ink-600 text-sm">Some studies have reported possible improvements in AMH, antral follicle count, and ovarian response after ovarian PRP. However:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Studies are limited and results inconsistent</li>
                <li>Mechanism of action is not fully understood</li>
                <li>No reliable evidence that PRP consistently improves live-birth rates</li>
                <li>Individual responses vary significantly</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">Can PRP Improve Endometrial Thickness?</h3>
              <p className="text-ink-600 text-sm">Some studies have reported improvements in endometrial thickness and pregnancy rates after intrauterine PRP in women with thin endometrium. However:</p>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Evidence is limited and inconsistent</li>
                <li>Standard treatments should be considered first</li>
                <li>No reliable evidence that PRP consistently improves live-birth rates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risks and Limitations of PRP */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h2 className="text-lg font-bold text-ink-900 mb-3">Risks and Limitations of PRP</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Possible Risks</h3>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Pain at injection site</li>
                <li>Bleeding</li>
                <li>Infection</li>
                <li>Ovarian injury (for ovarian PRP)</li>
                <li>Uterine perforation (for intrauterine PRP)</li>
                <li>Allergic reactions (rare, but possible)</li>
                <li>Adhesion formation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">Important Limitations</h3>
              <ul className="list-disc list-inside text-sm text-ink-600 mt-2 space-y-1">
                <li>Not a proven standard fertility treatment</li>
                <li>Does not guarantee pregnancy</li>
                <li>Does not guarantee improved ovarian reserve</li>
                <li>Does not guarantee improved endometrial thickness</li>
                <li>Evidence base is limited and inconsistent</li>
                <li>May involve significant cost</li>
                <li>Not all patients are suitable candidates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Should Be Evaluated Before PRP */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What Should Be Evaluated Before PRP?</h2>
          <p className="text-ink-600 text-sm">Before considering PRP, a thorough evaluation should be completed:</p>
          
          <div className="space-y-3 mt-3">
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">1. Ovarian Reserve Assessment</h3>
              <p className="text-ink-600 text-sm">AMH, antral follicle count, and FSH levels to assess ovarian function.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">2. Uterine Evaluation</h3>
              <p className="text-ink-600 text-sm">Ultrasound, saline sonography, or hysteroscopy to assess uterine cavity and endometrium.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">3. Previous IVF History</h3>
              <p className="text-ink-600 text-sm">Review of previous ovarian response, embryo development, and transfer outcomes.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">4. Male Fertility Factors</h3>
              <p className="text-ink-600 text-sm">Semen analysis and relevant male fertility assessment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">5. Genetic Factors</h3>
              <p className="text-ink-600 text-sm">Genetic evaluation when clinically indicated.</p>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">This helps identify whether PRP is likely to be relevant or whether other treatments are more appropriate.</p>
        </div>

        {/* PRP vs Standard Treatments */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">PRP vs Standard Fertility Treatments</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-ink-900">PRP vs IVF</h3>
              <p className="text-ink-600 text-sm">PRP is not a replacement for IVF. IVF is the core fertility treatment that involves ovarian stimulation, egg retrieval, fertilisation, and embryo transfer. PRP may be discussed as an experimental adjunct in selected cases, not as an alternative to standard fertility treatment.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PRP vs Fertility Investigation</h3>
              <p className="text-ink-600 text-sm">A proper fertility investigation should come before any experimental treatment. This includes assessment of ovarian reserve, uterine health, tubal patency, semen analysis, and other relevant factors. PRP should only be considered after this evaluation is complete.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-900">PRP vs Egg Donor IVF</h3>
              <p className="text-ink-600 text-sm">For women with severely reduced ovarian reserve, <Link href="/egg-donor-ivf-in-noida" className="text-rose-600 font-semibold hover:underline">Egg Donor IVF</Link> is an established treatment option with evidence of benefit. PRP is experimental and should not be presented as an alternative to established treatments.</p>
            </div>
          </div>
        </div>

        {/* Questions to Ask Before PRP */}
        <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
          <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Questions to Ask Before PRP
          </h3>
          <p className="text-ink-600 text-sm">Before considering PRP, ask your fertility specialist:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Why is PRP being recommended in my case?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What evidence supports PRP for my situation?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are the potential risks?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              Is it recommended by major fertility guidelines?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What happens if I choose standard treatment instead?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What is the total cost?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              How many treatments are recommended?
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">•</span>
              What are my alternatives?
            </div>
          </div>
        </div>

        {/* PRP Cost */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">PRP for Fertility Cost in Noida</h2>
          <p className="text-ink-600 text-sm">The cost of PRP for fertility in Noida varies depending on the type of PRP (ovarian vs intrauterine), number of treatments, and associated procedures.</p>
          <p className="text-ink-600 text-sm mt-2">Costs may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Fertility consultation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Blood draw and processing
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              PRP preparation
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Administration procedure
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Ultrasound monitoring
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Follow-up
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500">✓</span>
              Associated fertility treatment
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-3">Patients should ask about the evidence supporting PRP in their specific case before paying for this experimental add-on.</p>
        </div>

        {/* Why Choose Divine IVF */}
        <div className="bg-white rounded-2xl p-6 border border-ink-100/50">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Why Choose Divine IVF for Fertility Evaluation  </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Personalised Fertility Assessment</strong> — PRP is considered only after reviewing your ovarian reserve, endometrial health, previous treatment and overall fertility profile.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Evidence-Based Counselling</strong> — Experimental add-ons are discussed with clear information about their benefits, limitations and current evidence.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Comprehensive Fertility Care</strong> — From ovarian reserve testing to IVF treatment and embryo transfer, all aspects of fertility care are available.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Care Under Dr. Mandavi Rai</strong> — Treatment planning is provided under the guidance of Dr. Mandavi Rai, Gynecologist &amp; IVF Specialist in Noida.</div>
            </li>
            <li className="flex items-start gap-3 text-ink-600">
              <span className="text-rose-500 font-bold text-lg">✓</span>
              <div><strong className="text-ink-900">Convenient Location in Sector 76, Noida</strong> — Divine IVF is located in Sector 76, Noida, for patients seeking fertility evaluation and treatment in Noida.</div>
            </li>
          </ul>
        </div>

        {/* Closing CTA Section */}
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Book a PRP Consultation in Noida</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            If you have low ovarian reserve, thin endometrium, poor ovarian response, or recurrent implantation failure, start with a detailed fertility evaluation to understand your options.
            At Divine IVF, Sector 76, Noida, Dr. Mandavi Rai provides personalised fertility assessment and evidence-based counselling regarding PRP and other fertility treatment options.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
            >
              Book PRP Consultation
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