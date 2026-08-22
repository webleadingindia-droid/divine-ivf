export type Faq = { question: string; answer: string };
export type FaqCategory = { category: string; items: Faq[] };

export const faqCategories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I know if I need a fertility evaluation?",
        answer: "If you've been trying to conceive for about a year without success (or six months if you're over 35), or have a known condition that affects fertility, a fertility investigation is a reasonable first step. An initial consultation can help clarify whether — and what — evaluation makes sense for you.",
      },
      {
        question: "Do both partners need to be evaluated?",
        answer: "In most cases, yes. Fertility can involve either or both partners, so a thorough evaluation usually looks at both female and male factors before recommending a treatment plan.",
      },
      {
        question: "What happens in the first consultation?",
        answer: "The first consultation is about understanding your history, any previous treatment, and your goals. From there, Dr. Rai will advise on which investigations, if any, would help build a clear picture before recommending next steps.",
      },
    ],
  },
  {
    category: "IVF & IUI",
    items: [
      {
        question: "What's the difference between IUI and IVF?",
        answer: "IUI places prepared sperm directly into the uterus around ovulation and is generally considered a less invasive first step for suitable cases. IVF involves fertilising eggs with sperm outside the body and transferring the resulting embryo — it's typically considered when IUI isn't suitable or hasn't worked.",
      },
      {
        question: "How long does an IVF cycle take?",
        answer: "A typical cycle spans several weeks, from ovarian stimulation through monitoring, egg retrieval, fertilisation, embryo development and transfer. Your exact timeline depends on your individual protocol.",
      },
      {
        question: "When are ICSI, PICSI or IMSI recommended?",
        answer: "These are advanced sperm-selection techniques generally considered in cases of male-factor infertility or previous fertilisation difficulty. Whether one is appropriate for you depends on your fertility assessment.",
      },
    ],
  },
  {
    category: "Male Fertility",
    items: [
      {
        question: "What does a male fertility evaluation involve?",
        answer: "It typically starts with a semen analysis and a review of medical history, and may extend to further investigation depending on the findings.",
      },
      {
        question: "What is sperm retrieval used for?",
        answer: "Sperm retrieval techniques are used when sperm isn't present in the ejaculate but may still be present in the testes, allowing it to be used in procedures such as ICSI.",
      },
    ],
  },
  {
    category: "Pregnancy & Women's Health",
    items: [
      {
        question: "Do you provide care through pregnancy, not just fertility treatment?",
        answer: "Yes — the clinic supports obstetric ultrasound and delivery care, including both normal vaginal delivery and caesarean delivery, alongside general gynaecological care.",
      },
      {
        question: "Is gynaecological care available without a fertility concern?",
        answer: "Yes, general gynaecology is offered independently of fertility treatment.",
      },
    ],
  },
  {
    category: "Consultation",
    items: [
      {
        question: "Where is the clinic located?",
        answer: "Divine Ivf is located at Shop Number 13, First Floor, Street 76 Market, Sector 76, Noida, Uttar Pradesh.",
      },
      {
        question: "How can I book a consultation?",
        answer: "You can call or WhatsApp +91 7678451808, email mandavirai1988@gmail.com, or use the consultation form on this website.",
      },
    ],
  },
];
