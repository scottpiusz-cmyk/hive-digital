export type PartnerIconName =
  | "passport"
  | "degree"
  | "resume"
  | "photo"
  | "references"
  | "background-check"
  | "fingerprint"
  | "apostille"
  | "canada";

export interface PartnerChecklistItem {
  label: string;
  icon: PartnerIconName;
  href?: string;
}

export interface PartnerFaq {
  category: string;
  question: string;
  answer: string;
}

export interface RecruiterPartnerConfig {
  slug: string;
  recruiterName: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  brand: {
    primary: string;
    primaryRgb: string;
    secondary: string;
  };
  referralCode: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportingText: string;
  };
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  resourceDownloads: Array<{
    label: string;
    href: string;
  }>;
  contact: {
    whatsapp: string;
    kakao: string;
    wechat: string;
    email: string;
  };
  checklist: {
    applicant: PartnerChecklistItem[];
    hive: PartnerChecklistItem[];
  };
  partnership: {
    heading: string;
    paragraphs: string[];
  };
  commonMistakes: Array<{
    title: string;
    explanation: string;
  }>;
  timeline: {
    eyebrow: string;
    title: string;
    steps: Array<{
      title: string;
      typicalTime?: string;
      timeOptions?: Array<{
        label: string;
        value: string;
      }>;
      description: string;
      featured?: boolean;
    }>;
    disclaimer: string;
  };
  fingerprinting: {
    introduction: string;
    options: string[];
    reviewNote: string;
  };
  about: {
    recruiterText: string;
    hiveText: string;
    togetherText: string;
  };
  faqAdditions: PartnerFaq[];
  officialSources: Array<{
    label: string;
    href: string;
  }>;
}

const koreanHorizonsFaqs: PartnerFaq[] = [
  {
    category: "Korea documents",
    question: "Which documents should I begin preparing for Korean Horizons?",
    answer:
      "Start with the checklist supplied by Korean Horizons. Public-school programs commonly request a passport copy, application materials, references, an apostilled degree copy, and an apostilled national-level criminal record check. Your final list can vary by program, nationality, and circumstances, so treat recruiter instructions as authoritative for your application.",
  },
  {
    category: "Korea documents",
    question: "Should I wait for a final contract before starting my paperwork?",
    answer:
      "Usually not. Background checks, fingerprinting, and apostilles can involve several organizations and mailing steps. Begin when Korean Horizons advises you to do so, while making sure date-sensitive records are not ordered too early.",
  },
  {
    category: "FBI background checks",
    question: "What FBI document is normally used by U.S. applicants?",
    answer:
      "U.S. applicants are commonly asked for an FBI Identity History Summary because it is a national-level, fingerprint-based record. Confirm the exact document name and acceptable issue date with Korean Horizons before ordering.",
  },
  {
    category: "FBI background checks",
    question: "Can a state police background check replace an FBI report?",
    answer:
      "Do not assume that it can. EPIK guidance calls for a national-level criminal record check from the applicant's country of primary citizenship. A state or local check covers a different jurisdiction and should only be used if Korean Horizons or the receiving authority specifically confirms it.",
  },
  {
    category: "FBI background checks",
    question: "Does the FBI require current fingerprints?",
    answer:
      "Yes. The FBI states that a fingerprint card used for a previous Identity History Summary cannot be reused. A current set of fingerprints is required for a new request.",
  },
  {
    category: "Fingerprinting",
    question: "Which fingerprint card should I use?",
    answer:
      "Hive commonly supports applicants using an FBI FD-258 fingerprint card. The submission route can affect the preferred card or format, so send Hive your blank card or provider instructions before your appointment if you are unsure.",
  },
  {
    category: "Fingerprinting",
    question: "Where can I have fingerprints taken?",
    answer:
      "Options can include professional fingerprinting providers and police stations that offer applicant fingerprinting. Availability, fees, identification requirements, and whether you must supply a card vary by location. Call ahead before visiting.",
  },
  {
    category: "Fingerprinting",
    question: "What happens if my fingerprints are low quality?",
    answer:
      "Poor ridge detail, smudging, incomplete rolls, or prints outside the boxes can cause a rejection. Hive can review a high-resolution scan before submission and may recommend a new set when quality is not sufficient.",
  },
  {
    category: "Fingerprinting",
    question: "Should the fingerprint technician sign or stamp my card?",
    answer:
      "Requirements depend on the selected processing route and the information requested on the card. Ask the technician to complete the provider fields when they are willing and send Hive a scan afterward. We will flag missing information that matters for your workflow.",
  },
  {
    category: "Fingerprinting",
    question: "What scan quality should I send to Hive?",
    answer:
      "Scan the complete card in color at a minimum of 400 DPI, with all edges, fingerprint boxes, and handwritten fields visible. Avoid shadows, perspective distortion, compression, and messaging-app settings that reduce image quality.",
  },
  {
    category: "Mailing",
    question: "Should I mail my original fingerprint card immediately?",
    answer:
      "Send Hive the high-resolution scan first. Once the card has been reviewed, Hive will confirm whether the original is needed and provide the correct mailing instructions for the agreed FBI or RCMP processing route.",
  },
  {
    category: "Mailing",
    question: "Can I send more than one fingerprint card?",
    answer:
      "Yes, and a second completed card can be useful when print quality is uncertain. The FBI advises applicants with repeated fingerprint rejections to have multiple sets taken, preferably by a fingerprinting technician.",
  },
  {
    category: "Processing times",
    question: "How long does an FBI background check take?",
    answer:
      "Timing depends on the submission method, fingerprint quality, current agency workload, and delivery method. The FBI does not promise expedited handling for direct requests. Hive will confirm the current estimate for the route you select, but government processing times can change.",
  },
  {
    category: "Processing times",
    question: "How long does an apostille take?",
    answer:
      "Timing depends on the authority, submission method, current workload, and courier route. Federal and state apostilles follow different processes. Request a current estimate after Hive confirms which authority is correct for your document.",
  },
  {
    category: "Validity periods",
    question: "How recent must my criminal record check be?",
    answer:
      "The EPIK Spring 2026 guide states that the criminal record check must be dated within six months of the contract start date. Recruiter, intake, late-arrival, or immigration instructions may set a more specific date window, so confirm timing with Korean Horizons before ordering.",
  },
  {
    category: "Apostilles",
    question: "Who issues the apostille for an FBI background check?",
    answer:
      "An FBI Identity History Summary is a U.S. federal document. The appropriate federal apostille is issued through the U.S. Department of State Office of Authentications, not by an individual state's Secretary of State.",
  },
  {
    category: "Apostilles",
    question: "Why is a state apostille wrong for an FBI report?",
    answer:
      "State authorities generally authenticate documents issued or notarized within their state. An FBI report is issued by a federal agency. Using the wrong authority can leave the document unacceptable for its intended overseas use.",
  },
  {
    category: "Apostilles",
    question: "Does an apostille verify the contents of my background check?",
    answer:
      "No. An apostille certifies the origin of the public document, such as the signature or seal of the issuing official. It does not change, approve, or interpret the information contained in the background check.",
  },
  {
    category: "Degree apostilles",
    question: "Do I apostille my original university degree?",
    answer:
      "EPIK guidance refers to an apostilled copy of the bachelor's diploma. The copy, notarization, and state process must be prepared in the format requested. Do not send or alter an original diploma until the required format has been confirmed.",
  },
  {
    category: "Degree apostilles",
    question: "Which state handles a U.S. degree apostille?",
    answer:
      "The correct state route depends on how the degree copy is certified or notarized and where that act takes place. It is not determined only by where the applicant currently lives. Hive reviews the degree and requested format before recommending a state process.",
  },
  {
    category: "Degree apostilles",
    question: "Does a degree apostille expire?",
    answer:
      "The apostille itself does not normally carry a general expiration date, but the receiving program or authority can impose document-format, issue-date, or submission-window rules. Follow the current Korean Horizons checklist for your intake.",
  },
  {
    category: "RCMP checks",
    question: "What background check is commonly used by Canadian applicants?",
    answer:
      "Canadian applicants are commonly asked for a national-level RCMP criminal record check. The exact product, fingerprint route, and certification format should be confirmed against the Korean Horizons instructions for your program.",
  },
  {
    category: "RCMP checks",
    question: "Can fingerprints taken outside Canada be used for an RCMP check?",
    answer:
      "In many workflows, ink fingerprints taken abroad can be converted and submitted through an accredited Canadian fingerprinting provider. The provider's forms, identification, consent, and card requirements vary, so Hive confirms the route before you collect fingerprints.",
  },
  {
    category: "Canadian documents",
    question: "Does my Canadian document need an apostille or authentication?",
    answer:
      "Canada now issues apostilles under the Apostille Convention, but the correct competent authority depends on the document and where it was issued. Hive will confirm the route for an RCMP record or degree after reviewing the document and Korean Horizons requirements.",
  },
  {
    category: "Korean immigration",
    question: "Does Hive process my E-2 visa?",
    answer:
      "No. Hive prepares and coordinates document services such as background checks, fingerprinting guidance, and apostilles. Korean Horizons, the sponsoring employer, Korean immigration, and the relevant consular office manage their respective recruitment and visa steps.",
  },
];

export const koreanHorizonsPartner: RecruiterPartnerConfig = {
  slug: "korean-horizons",
  recruiterName: "Korean Horizons",
  logo: {
    src: "/korean-horizons-logo.png",
    alt: "Korean Horizons",
    width: 237,
    height: 118,
  },
  brand: {
    primary: "#c00429",
    primaryRgb: "192 4 41",
    secondary: "#1d5b9b",
  },
  referralCode: "korean-horizons",
  metadata: {
    title: "Korean Horizons Candidate Document Resource Centre",
    description:
      "Korean Horizons document checklist for FBI and RCMP background checks, fingerprinting, degree apostilles and teaching in Korea documents.",
    keywords: [
      "Korean Horizons document checklist",
      "Korean Horizons FBI Background Check",
      "Korean Horizons Apostille",
      "Korean Horizons Fingerprinting",
      "Teaching in Korea Documents",
      "E-2 Visa Documents",
    ],
  },
  hero: {
    eyebrow: "Prepared exclusively for Korean Horizons applicants",
    title: "Korean Horizons Candidate Resource Centre",
    subtitle:
      "Everything you need to prepare your U.S. or Canadian employment documents for teaching in South Korea.",
    supportingText:
      "Hive Digital Consulting specializes in FBI background checks, fingerprinting, apostilles and employment documentation, helping applicants prepare their paperwork correctly the first time.",
  },
  cta: {
    primaryLabel: "Start My Documents",
    primaryHref: "/contact/?partner=korean-horizons",
    secondaryLabel: "Download Checklist",
    secondaryHref: "/resources/korean-horizons-document-checklist.pdf",
  },
  resourceDownloads: [
    {
      label: "Korean Horizons Candidate Document Checklist",
      href: "/resources/korean-horizons-document-checklist.pdf",
    },
  ],
  contact: {
    whatsapp: "https://wa.me/8613764322474",
    kakao: "/contact/#kakao",
    wechat: "/contact/#wechat",
    email:
      "mailto:sales@hiverelo.com?subject=Korean%20Horizons%20candidate%20documents",
  },
  checklist: {
    applicant: [
      { label: "Passport", icon: "passport" },
      { label: "University Degree", icon: "degree" },
      { label: "Resume", icon: "resume" },
      { label: "Passport Photos", icon: "photo" },
      { label: "References", icon: "references" },
    ],
    hive: [
      {
        label: "FBI Background Check",
        icon: "background-check",
        href: "/services/background-checks/",
      },
      {
        label: "FBI Fingerprinting",
        icon: "fingerprint",
        href: "/fingerprinting/",
      },
      {
        label: "Federal Apostille",
        icon: "apostille",
        href: "/services/apostille/",
      },
      {
        label: "Degree Apostille",
        icon: "degree",
        href: "/services/apostille/",
      },
      {
        label: "RCMP Background Check",
        icon: "canada",
        href: "/services/background-checks/",
      },
      {
        label: "Canadian Apostille Guidance",
        icon: "apostille",
        href: "/services/apostille/",
      },
    ],
  },
  partnership: {
    heading: "Why Korean Horizons Partners With Hive",
    paragraphs: [
      "Hive Digital Consulting specializes in cross-border employment documentation for educators, recruiters and international employers.",
      "Hive is headquartered in China, with a U.S. office and trusted service partners across the United Kingdom, Australia, New Zealand, South Africa and Ireland.",
      "Our founder's background is in international mobility and building cross-border document workflows. We approach each case as a managed process designed to prevent document mistakes, unnecessary delays and document-related issues during the visa process.",
      "We support teachers throughout Asia while working closely with recruiters and schools to simplify international hiring.",
    ],
  },
  commonMistakes: [
    {
      title: "Wrong apostille authority",
      explanation:
        "An FBI report is federal and should not be sent to a State Secretary of State for its federal apostille.",
    },
    {
      title: "Starting too late",
      explanation:
        "Waiting until after a contract is finalized can leave too little time for fingerprinting, government processing and delivery.",
    },
    {
      title: "Incorrect fingerprint card",
      explanation:
        "The card and submission format should be confirmed before the appointment, especially when fingerprints are taken outside North America.",
    },
    {
      title: "Low-quality fingerprints",
      explanation:
        "Smudged, incomplete or faint ridge detail can cause rejection and force the applicant to start again.",
    },
    {
      title: "Missing information",
      explanation:
        "Unsigned forms, incomplete biographic fields and inconsistent names can interrupt processing.",
    },
    {
      title: "Incorrect degree preparation",
      explanation:
        "The copy, notarization and state apostille route must match the requested format.",
    },
    {
      title: "Date-window problems",
      explanation:
        "A criminal record check ordered too early may fall outside the program's accepted date window.",
    },
    {
      title: "Assuming every case is identical",
      explanation:
        "Nationality, program, employer, document origin and filing location can change the required path.",
    },
  ],
  timeline: {
    eyebrow: "Typical U.S. Processing Times",
    title: "Document Processing Timeline",
    steps: [
      {
        title: "Fingerprinting",
        typicalTime: "Same Day",
        description:
          "Professional fingerprinting or police station fingerprinting. Hive accepts high-resolution scans for quality review before originals are mailed.",
      },
      {
        title: "FBI Background Check",
        typicalTime: "24–48 Hours",
        description:
          "Electronic processing after fingerprint submission.",
      },
      {
        title: "U.S. Degree Apostille",
        typicalTime: "24 Hours",
        description:
          "For eligible U.S. degrees. State-specific requirements may apply.",
      },
      {
        title: "U.S. Department of State Apostille",
        timeOptions: [
          {
            label: "Rush Service",
            value: "Approximately 2 Weeks",
          },
          {
            label: "Standard Service",
            value: "Approximately 4 Weeks",
          },
        ],
        description:
          "Federal apostille for FBI reports and other federally issued documents.",
        featured: true,
      },
      {
        title: "Documents Ready",
        description:
          "Your completed documents are ready for submission to your recruiter, employer or immigration process.",
      },
    ],
    disclaimer:
      "Processing times are estimates and may vary depending on government agencies and document requirements.",
  },
  fingerprinting: {
    introduction:
      "The right fingerprinting option depends on where you are located, which record you need, and the submission route selected for your case.",
    options: [
      "Professional fingerprinting providers",
      "Police station fingerprinting where available",
      "FBI FD-258 fingerprint cards",
      "Hive quality review before submission",
      "High-resolution scans accepted before originals are mailed",
    ],
    reviewNote:
      "Send Hive a complete scan at a minimum of 400 DPI before mailing an original. We review ridge quality, card format and required fields, then confirm the next step.",
  },
  about: {
    recruiterText:
      "Korean Horizons specializes in helping teachers build successful careers in South Korea.",
    hiveText:
      "Hive Digital Consulting specializes in ensuring employment documents are prepared correctly.",
    togetherText:
      "Together we help applicants complete one of the most stressful parts of relocating overseas with confidence.",
  },
  faqAdditions: koreanHorizonsFaqs,
  officialSources: [
    {
      label: "EPIK Required Documents",
      href: "https://m.epik.go.kr/application/required.php",
    },
    {
      label: "FBI Identity History Summary FAQs",
      href: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks/identity-history-summary-checks-faqs",
    },
    {
      label: "U.S. Department of State Apostille Guidance",
      href: "https://travel.state.gov/content/travel/en/replace-certify-docs/authenticate-your-document/apostille-requirements.html",
    },
    {
      label: "Government of Canada Apostille Guidance",
      href: "https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=eng",
    },
  ],
};

export const recruiterPartners: Record<string, RecruiterPartnerConfig> = {
  [koreanHorizonsPartner.slug]: koreanHorizonsPartner,
};
