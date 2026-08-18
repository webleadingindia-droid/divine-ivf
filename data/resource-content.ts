// Full article bodies for each resource in resources.ts, keyed by slug.
// Kept separate from the summary list so /resources/[slug] can look up
// full content without bloating the listing page's data.

export type ResourceBody = { slug: string; paragraphs: string[] };

export const resourceBodies: ResourceBody[] = [
  {
    slug: "when-to-see-a-fertility-specialist",
    paragraphs: [
      "Many people wait far longer than necessary before seeing a fertility specialist, often because there's no single clear sign that it's time. As a general guide, it's reasonable to seek an evaluation after a year of trying to conceive without success — or after six months if you're over 35.",
      "Certain situations are worth acting on sooner. Irregular or absent periods, a known condition such as PCOS or endometriosis, previous pregnancy loss, or a known fertility concern in either partner are all reasons to bring the conversation forward rather than waiting out the full year.",
      "An initial consultation isn't a commitment to treatment — it's simply a conversation to understand your situation and decide, together, whether investigation makes sense right now.",
    ],
  },
  {
    slug: "iui-vs-ivf",
    paragraphs: [
      "IUI and IVF are often mentioned in the same breath, but they're quite different in what they involve. IUI places specially prepared sperm directly into the uterus around ovulation — a relatively simple procedure that keeps fertilisation happening naturally inside the body.",
      "IVF is more involved: eggs are retrieved and fertilised with sperm in a lab, and the resulting embryo is transferred into the uterus. It allows for more monitoring and additional techniques, such as ICSI, along the way.",
      "Which is right for you depends on what your fertility investigation shows. IUI is often considered first for milder factors, while IVF is generally recommended for more significant male-factor infertility, blocked fallopian tubes, or after IUI hasn't worked.",
    ],
  },
  {
    slug: "understanding-icsi-picsi-imsi",
    paragraphs: [
      "ICSI, PICSI and IMSI can sound like a confusing alphabet soup, but they all describe ways of selecting and using sperm during IVF, specifically to address male-factor infertility.",
      "ICSI is the base technique — a single sperm is injected directly into an egg, rather than relying on natural fertilisation. PICSI adds a step beforehand, selecting sperm based on their ability to bind to a substance also found around the egg. IMSI uses much higher magnification to examine sperm structure in finer detail before selection.",
      "None of these techniques guarantee fertilisation or pregnancy, but they give the embryology team more precise tools to work with in specific, well-evaluated situations.",
    ],
  },
  {
    slug: "what-is-era",
    paragraphs: [
      "Endometrial Receptivity Analysis, or ERA, is a test that looks at whether your uterine lining is receptive at the time a transfer would normally take place.",
      "For most patients, standard timing works well. For those with previous unexplained implantation failure, ERA can reveal whether the true window of receptivity is shifted earlier or later than expected.",
      "The test itself involves a small tissue sample taken during a mock cycle, without an actual embryo transfer. Results then guide the timing of your subsequent, real transfer.",
    ],
  },
  {
    slug: "pcos-and-fertility",
    paragraphs: [
      "PCOS (Polycystic Ovary Syndrome) is one of the most common causes of ovulatory-related fertility difficulty, and it affects each person differently — from irregular cycles to more complex hormonal patterns.",
      "A fertility evaluation for PCOS typically looks at hormonal balance, ovulation patterns and ovarian structure via ultrasound, alongside your broader health history.",
      "Treatment is individualised: some respond well to ovulation-inducing medication, others may benefit from IUI, and some require IVF depending on the full picture. The right path starts with a clear evaluation, not assumptions.",
    ],
  },
  {
    slug: "understanding-male-infertility",
    paragraphs: [
      "Male-factor infertility contributes to roughly half of all fertility difficulties, yet is often the last thing investigated. A semen analysis is quick, non-invasive, and can immediately clarify whether male factors are contributing.",
      "Common causes include low sperm count, reduced motility, abnormal sperm shape, or — in some cases — no sperm present in the ejaculate at all, which doesn't necessarily mean sperm isn't being produced.",
      "Evaluation shapes treatment directly: some cases respond to addressing an underlying condition, others benefit from IUI, and more significant factors often point toward IVF with ICSI, sometimes alongside surgical sperm retrieval.",
    ],
  },
];
