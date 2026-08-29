// app/sperm-retrieval/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TreatmentTemplate } from "@/components/page/TreatmentTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "/sperm-retrieval" },
  title: "Sperm Retrieval Techniques in Noida | Divine IVF – Dr. Mandavi Rai",
  description:
    "Surgical sperm retrieval techniques in Sector 76, Noida — TESA, PESA, and TESE with Dr. Mandavi Rai at Divine IVF for male-factor infertility.",
  robots: { index: true, follow: true },
  keywords:
    "sperm retrieval in Noida, TESA, PESA, TESE, surgical sperm retrieval, azoospermia treatment, male infertility treatment, sperm aspiration, fertility clinic Noida, Dr. Mandavi Rai, Divine IVF, ICSI sperm retrieval, male factor infertility, sperm freezing",
  openGraph: {
    title: "Sperm Retrieval Techniques in Noida | Divine IVF – Dr. Mandavi Rai",
    description:
      "Surgical sperm retrieval techniques with Dr. Mandavi Rai at Divine IVF, Sector 76, Noida — TESA, PESA, and TESE for male-factor infertility.",
    url: "https://www.divineivf.com/sperm-retrieval",
    siteName: "Divine IVF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=1200&auto=format&fit=crop",
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
        { label: "Male Infertility", href: "/male-infertility" },
        { label: "Sperm Retrieval" },
      ]}
      eyebrow="Male Fertility · Surgical Techniques"
      titlePlain="Sperm Retrieval"
      titleAccent="Techniques"
      intro="When sperm isn't present in the ejaculate, surgical retrieval can allow sperm to be collected directly from the testes or epididymis for use in ICSI — offering hope for biological parenthood even in cases of azoospermia."
      heroImage="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=1200&auto=format&fit=crop"
      heroAlt="Sperm retrieval procedure at Divine IVF, Noida"
      secondaryImage="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
      secondaryImageAlt="Laboratory processing of retrieved sperm at Divine IVF Clinic, Noida"
      whatItIs={[
        "Sperm retrieval techniques are minor surgical procedures used to collect sperm directly from the testes (testicles) or epididymis (the tube where sperm mature and are stored). These techniques are used when no sperm is found in a semen sample — a condition known as azoospermia.",
        "In cases of azoospermia, it doesn't necessarily mean sperm isn't being produced at all. Sperm may still be present within the testes or nearby structures, but something is preventing it from appearing in the ejaculate. This could be due to an obstruction (obstructive azoospermia) or a problem with sperm production itself (non-obstructive azoospermia).",
        "Retrieved sperm can be used immediately for ICSI (Intracytoplasmic Sperm Injection) in a fresh IVF cycle, or it can be frozen and stored for future use. This offers hope for biological parenthood even in cases where sperm cannot be obtained through ejaculation."
      ]}
      whoNeedsIt={[
        "Men with azoospermia — no sperm found in the ejaculate on semen analysis",
        "Men who have had a previous vasectomy and are not pursuing reversal but want biological children",
        "Men with obstructive azoospermia — where sperm production is normal but blocked by a physical obstruction",
        "Men with non-obstructive azoospermia — where sperm production is impaired but sperm may still be present in small quantities",
        "Men with certain structural or genetic causes of absent sperm in the ejaculate",
        "Men who have previously had a failed vasectomy reversal",
        "Men with ejaculatory dysfunction or anejaculation that prevents sperm collection through normal means",
      ]}
      preparation={[
        "Before sperm retrieval, Dr. Rai will conduct a thorough evaluation including hormonal blood tests (FSH, LH, testosterone) to help predict the likelihood of finding sperm and to choose the most appropriate retrieval technique for your specific situation. A physical examination and ultrasound may also be performed.",
        "If retrieval is timed alongside a partner's egg retrieval for fresh use in ICSI, both schedules are carefully coordinated in advance. If sperm will be frozen for later use, timing is more flexible.",
        "You'll receive specific instructions about fasting and medication before the procedure. Most retrieval procedures are performed under local or general anaesthesia, so you'll need to arrange for someone to drive you home afterward.",
        "Genetic counselling may be recommended before the procedure, particularly if non-obstructive azoospermia is suspected, as some causes may be genetic and could be passed on to children."
      ]}
      howItWorks={[
        { title: "Evaluation", description: "Prior investigation including hormonal testing, physical examination, and ultrasound helps determine the likely cause of azoospermia and the best retrieval approach." },
        { title: "PESA (Percutaneous Epididymal Sperm Aspiration)", description: "A fine needle is inserted through the skin into the epididymis to aspirate fluid containing sperm. Used for obstructive azoospermia where sperm production is normal." },
        { title: "TESA (Testicular Sperm Aspiration)", description: "A fine needle is inserted through the skin into the testicle to aspirate tissue containing sperm. Used for both obstructive and non-obstructive azoospermia." },
        { title: "TESE (Testicular Sperm Extraction)", description: "A small incision is made in the testicle to remove a small amount of testicular tissue, which is then processed in the lab to find sperm. Used for non-obstructive azoospermia." },
        { title: "Laboratory Processing", description: "Retrieved tissue or fluid is processed in the lab to identify, isolate, and prepare sperm for ICSI." },
        { title: "Use or Freezing", description: "Sperm can be used fresh for that cycle's ICSI, or frozen (vitrified) for future use, avoiding the need to repeat the retrieval procedure." },
      ]}
      whatToExpect="Retrieval procedures are typically done under local or general anaesthesia depending on the specific technique used, with most patients returning home the same day. The procedure itself takes 15-30 minutes. Some mild discomfort, swelling, or bruising afterward is common and usually resolves within a few days. You'll be given specific post-procedure care instructions, including activity restrictions and pain management guidance."
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
        "Recovery time and discomfort vary depending on the technique used — TESE generally involves more recovery than PESA or TESA",
      ]}
      related={[
        { name: "Male Infertility", href: "/male-infertility", blurb: "The comprehensive evaluation that determines whether sperm retrieval is appropriate for your situation." },
        { name: "ICSI Treatment", href: "/ivf/icsi", blurb: "The technique retrieved sperm is typically used with — single sperm injection into the egg." },
        { name: "IVF Treatment", href: "/ivf", blurb: "The fertility treatment within which retrieved sperm is used for ICSI and embryo transfer." },
        { name: "Fertility Investigation", href: "/fertility-investigation", blurb: "The initial evaluation that identifies azoospermia and guides the need for sperm retrieval." },
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
          question: "Is sperm always found during retrieval?",
          answer:
            "Not always — this depends on the underlying cause of azoospermia. In obstructive azoospermia, sperm is almost always found. In non-obstructive azoospermia, the success rate varies and prior evaluation (including hormonal testing) helps predict the likelihood of finding sperm. Dr. Rai will discuss realistic expectations based on your specific situation.",
        },
        {
          question: "Can retrieved sperm be frozen?",
          answer:
            "Yes, retrieved sperm can often be frozen for use in a future cycle, avoiding the need to repeat the procedure each time. This is particularly valuable if the retrieval is done before your partner's IVF cycle or if you want to preserve fertility for future use.",
        },
        {
          question: "What is the difference between PESA, TESA, and TESE?",
          answer:
            "PESA (Percutaneous Epididymal Sperm Aspiration) retrieves sperm from the epididymis using a fine needle — used for obstructive azoospermia. TESA (Testicular Sperm Aspiration) retrieves sperm from the testicle using a fine needle — used for both obstructive and non-obstructive cases. TESE (Testicular Sperm Extraction) involves a small incision in the testicle to remove tissue — typically used for non-obstructive azoospermia when TESA isn't successful.",
        },
        {
          question: "Is sperm retrieval painful?",
          answer:
            "Retrieval procedures are performed under local or general anaesthesia, so you won't feel pain during the procedure. Afterward, some mild discomfort, swelling, or bruising is common and usually resolves within a few days. Dr. Rai will provide pain management guidance and activity restrictions.",
        },
        {
          question: "How long does it take to recover from sperm retrieval?",
          answer:
            "Recovery time varies depending on the technique used. For PESA and TESA, most men can return to normal activities within 1-2 days. For TESE, which involves a small incision, recovery may take 3-5 days. You'll receive specific post-procedure care instructions.",
        },
        {
          question: "Can sperm retrieval be done if I've had a vasectomy?",
          answer:
            "Yes, sperm retrieval can be performed in men who have had a vasectomy. Sperm production continues in the testicles after a vasectomy, and sperm can be retrieved directly from the epididymis or testicles for use in ICSI.",
        },
        {
          question: "What happens if no sperm is found during retrieval?",
          answer:
            "If no sperm is found during the retrieval procedure, Dr. Rai will discuss your options. In some cases, a different technique or a repeat procedure may be recommended. If sperm cannot be found, alternatives such as donor sperm or adoption may be discussed. Dr. Rai will support you through this difficult conversation with honesty and compassion.",
        },
        {
          question: "Is genetic testing recommended before sperm retrieval?",
          answer:
            "Genetic counselling and testing may be recommended before sperm retrieval, particularly if non-obstructive azoospermia is suspected. Some causes of azoospermia are genetic (such as Y chromosome microdeletions or Klinefelter syndrome) and could be passed on to children. Understanding this before the procedure helps you make informed decisions.",
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
          <strong>Sperm retrieval techniques in Noida</strong> offer hope for biological parenthood 
          to men who have no sperm in their ejaculate — a condition known as <strong>azoospermia</strong>. 
          At <strong>Divine IVF, Sector 76</strong>, <Link href="/doctor/dr-mandavi-rai" className="text-rose-600 font-semibold hover:underline">
          Dr. Mandavi Rai</Link> performs these specialised procedures as part of a comprehensive 
          approach to <Link href="/male-infertility" className="text-rose-600 font-semibold hover:underline">
          male infertility</Link> treatment.
        </p>

        <p>
          <strong>Azoospermia</strong> affects approximately 1% of all men and 10-15% of men with 
          <strong>infertility</strong>. It can be classified into two main types: obstructive 
          azoospermia, where sperm production is normal but something is blocking its release; and 
          non-obstructive azoospermia, where sperm production itself is impaired. <strong>Sperm retrieval</strong> 
          techniques can help in both cases, though the specific approach and success rates differ.
        </p>

        {/* Image Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/44zaH8kJRjOoRCqyCDM2/image.webp"
              alt="Laboratory processing of retrieved sperm at Divine IVF Clinic Noida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/29/pRdWPryJcEFaMajpMv47/image.webp"
              alt="Consultation for sperm retrieval with Dr. Mandavi Rai at Divine IVF Noida"
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

        <p>
          The most commonly performed <strong>sperm retrieval techniques</strong> include:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-ink-500">
          <li>
            <strong>PESA (Percutaneous Epididymal Sperm Aspiration)</strong> — A fine needle is inserted through the skin into the epididymis to aspirate fluid containing sperm. This technique is typically used for obstructive azoospermia where sperm production is normal.
          </li>
          <li>
            <strong>TESA (Testicular Sperm Aspiration)</strong> — A fine needle is inserted through the skin into the testicle to aspirate tissue containing sperm. This technique can be used for both obstructive and non-obstructive azoospermia.
          </li>
          <li>
            <strong>TESE (Testicular Sperm Extraction)</strong> — A small incision is made in the testicle to remove a small amount of testicular tissue, which is then processed in the lab to find sperm. This technique is typically used for non-obstructive azoospermia when TESA isn`t successful.
          </li>
        </ul>

        <p>
          The choice of technique depends on the underlying cause of <strong>azoospermia</strong>, 
          which is determined through a thorough <Link href="/male-infertility" className="text-rose-600 font-semibold hover:underline">
          male fertility evaluation</Link> including hormonal blood tests, physical examination, 
          and sometimes ultrasound.
        </p>

        <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/50 rounded-2xl p-6 border border-rose-100/50 mt-6">
          <h4 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Sperm Retrieval Success Rates by Technique
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">PESA</span>
              <span>~90-100% success rate in obstructive azoospermia — sperm is almost always found when there`s a physical blockage.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">TESA</span>
              <span>~70-80% success rate in non-obstructive azoospermia — depends on the underlying cause and hormonal status.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-600">
              <span className="text-rose-500 font-bold">TESE</span>
              <span>~50-70% success rate in non-obstructive azoospermia — often used when TESA is unsuccessful or in cases of more severe impairment.</span>
            </li>
          </ul>
          <p className="text-xs text-ink-400 mt-3">
            Success rates vary based on individual factors. Dr. Rai will discuss realistic expectations for your specific situation.
          </p>
        </div>

        <p>
          At <strong>Divine IVF, Sector 76, Noida</strong>, the approach to <strong>sperm retrieval</strong> 
          is guided by evidence-based practice and personalised care. Dr. Rai works closely with 
          experienced embryologists to ensure retrieved sperm is optimally prepared for <Link href="/ivf/icsi" className="text-rose-600 font-semibold hover:underline">
          ICSI</Link>, maximising the chances of successful fertilisation.
        </p>

        <p>
          <strong>Sperm retrieval</strong> techniques are supported by guidelines from leading 
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
            href="https://www.isarindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            Indian Society for Assisted Reproduction (ISAR)
          </a>
          . This ensures your <strong>fertility treatment</strong> is supported by the latest clinical 
          evidence and best practices in male fertility.
        </p>
      </div>
    </TreatmentTemplate>
  );
}