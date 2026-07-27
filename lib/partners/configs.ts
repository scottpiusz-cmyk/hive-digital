import type { PartnerFaq, PartnerPageConfig } from "@/lib/partners/types";

const koreaPartnerFaqTemplate: PartnerFaq[] = [
  {
    category: "Korea documents",
    question: "Which documents should I begin preparing for Korean Horizons?",
    answer:
      "Start with the checklist supplied by Korean Horizons. Teaching programs in South Korea commonly request a passport copy, application materials, an apostilled degree copy, and an apostilled national-level criminal record check. Your final list can vary by program, nationality, employer, and circumstances, so treat current recruiter instructions as authoritative for your application.",
  },
  {
    category: "Korea documents",
    question:
      "Should I wait for a final contract before starting my paperwork?",
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
      "Do not assume that it can. Korean teaching-document workflows commonly call for a national-level criminal record check from the applicant's country of citizenship. A state or local check covers a different jurisdiction and should only be used if Korean Horizons or the receiving authority specifically confirms it.",
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
      "Korean teaching-document workflows commonly apply an issue-date window to criminal record checks, and the exact reference date can vary by recruiter, employer, intake, consular office, or immigration instruction. Confirm the current timing with Korean Horizons before ordering.",
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
      "Many Korean teaching-document workflows use an apostilled or otherwise certified degree copy. The copy, notarization, and apostille process must be prepared in the format requested. Do not send or alter an original diploma until the required format has been confirmed.",
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
    question:
      "Can fingerprints taken outside Canada be used for an RCMP check?",
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

function createKoreaPartnerFaqs(recruiterName: string): PartnerFaq[] {
  return koreaPartnerFaqTemplate.map((faq) => ({
    ...faq,
    question: faq.question.replaceAll("Korean Horizons", recruiterName),
    answer: faq.answer.replaceAll("Korean Horizons", recruiterName),
  }));
}

/**
 * Add one typed object to this array for each recruiter partner. The dynamic
 * route, metadata, structured data, and sitemap entry are generated from it.
 */
export const partnerPageConfigs = [
  {
    slug: "korean-horizons",
    lastModified: "2026-07-27",
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
    partnerOrganization: {
      url: "https://koreanhorizons.com/",
      description:
        "Recruiter supporting applicants seeking public-school teaching positions in South Korea.",
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
      about: [
        "Teaching in Korea documents",
        "FBI and RCMP background checks",
        "Apostilles and fingerprinting",
      ],
    },
    coBrandLabel: "Candidate document resource partner",
    hero: {
      eyebrow: "Prepared exclusively for Korean Horizons applicants",
      title: "Korean Horizons Candidate Resource Centre",
      subtitle:
        "Everything you need to prepare your U.S. or Canadian employment documents for teaching in South Korea.",
      supportingText:
        "Hive Digital Consulting specializes in FBI background checks, fingerprinting, apostilles and employment documentation, helping applicants prepare their paperwork correctly the first time.",
      illustration: {
        ariaLabel:
          "Document preparation illustration for Korean Horizons applicants showing an FBI background check, fingerprint card, university degree and apostille certificate",
        backgroundCheck: {
          jurisdiction: "United States",
          title: "FBI Background Check",
          subtitle: "Identity History Summary",
        },
        fingerprintCard: {
          eyebrow: "Applicant",
          title: "FD-258",
        },
        degree: {
          eyebrow: "Academic credential",
          title: "University Degree",
        },
        apostille: {
          title: "Apostille",
          subtitle: "Convention of 1961",
        },
      },
    },
    cta: {
      primaryLabel: "Start My Documents",
      primaryHref: "/contact/?partner=korean-horizons",
      secondaryLabel: "Download Checklist",
      secondaryHref: "/resources/korean-horizons-document-checklist.pdf",
      secondaryDownload: true,
    },
    contact: {
      whatsapp: "https://wa.me/8613764322474",
      kakao: "/contact/#kakao",
      wechat: "/contact/#wechat",
      email:
        "mailto:sales@hiverelo.com?subject=Korean%20Horizons%20candidate%20documents",
    },
    countrySelector: {
      eyebrow: "Start here",
      title: "Select Your Country",
      introduction:
        "Choose the country that issued your documents so Hive can confirm the correct background-check and legalization path.",
      countries: [
        {
          name: "United States",
          href: "/contact/?partner=korean-horizons&country=united-states",
        },
        {
          name: "Canada",
          href: "/contact/?partner=korean-horizons&country=canada",
        },
        {
          name: "United Kingdom",
          href: "/contact/?partner=korean-horizons&country=united-kingdom",
        },
        {
          name: "Ireland",
          href: "/contact/?partner=korean-horizons&country=ireland",
        },
        {
          name: "Australia",
          href: "/contact/?partner=korean-horizons&country=australia",
        },
        {
          name: "New Zealand",
          href: "/contact/?partner=korean-horizons&country=new-zealand",
        },
        {
          name: "South Africa",
          href: "/contact/?partner=korean-horizons&country=south-africa",
        },
      ],
    },
    checklist: {
      eyebrow: "Start with clarity",
      title: "Korea Document Checklist",
      introduction:
        "Use this as an orientation guide, then follow the current checklist and timing instructions supplied by Korean Horizons.",
      applicant: {
        title: "Documents You'll Prepare",
        description:
          "Personal and application materials normally supplied by the candidate.",
        items: [
          { label: "Passport", icon: "passport" },
          { label: "University Degree", icon: "degree" },
          { label: "Resume", icon: "resume" },
          { label: "Passport Photos", icon: "photo" },
          { label: "References", icon: "references" },
        ],
      },
      hive: {
        title: "Documents Hive Can Help With",
        description:
          "Specialist background-check, fingerprinting and apostille workflows.",
        items: [
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
    },
    apostille: {
      eyebrow: "Match the document to the authority",
      title: "Apostille Guidance",
      introduction:
        "The correct process depends on where each document originated and where it will be used. Hive reviews both before recommending a route.",
      items: [
        {
          title: "Federal Background Checks",
          description:
            "An FBI Identity History Summary is a U.S. federal document. Its federal apostille is handled through the U.S. Department of State.",
        },
        {
          title: "University Degrees",
          description:
            "Degree preparation depends on the issuing country and the certification or notarization format requested for the placement.",
        },
        {
          title: "Documents Outside the U.S.",
          description:
            "Canadian, British, Irish, Australian, New Zealand and South African documents follow their own competent-authority procedures.",
        },
      ],
    },
    partnership: {
      eyebrow: "Managed, not merely mailed",
      heading: "Why Korean Horizons Partners With Hive",
      highlight:
        "The goal is a smoother applicant experience: clear instructions, fewer avoidable corrections, and a documented next step.",
      paragraphs: [
        "Hive Digital Consulting specializes in cross-border employment documentation for educators, recruiters and international employers.",
        "Hive is headquartered in China, with a U.S. office and trusted service partners across the United Kingdom, Australia, New Zealand, South Africa and Ireland.",
        "Our founder's background is in international mobility and building cross-border document workflows. We approach each case as a managed process designed to prevent document mistakes, unnecessary delays and document-related issues during the visa process.",
        "We support teachers throughout Asia while working closely with recruiters and schools to simplify international hiring.",
      ],
    },
    commonMistakes: {
      eyebrow: "Avoid preventable delays",
      title: "Common Document Mistakes",
      introduction:
        "Most corrections begin with a small mismatch: the wrong authority, a poor scan, an incomplete card, or a document ordered at the wrong time.",
      items: [
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
    },
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
          description: "Electronic processing after fingerprint submission.",
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
      eyebrow: "Capture it correctly",
      title: "Fingerprinting Options",
      introduction:
        "The right fingerprinting option depends on where you are located, which record you need, and the submission route selected for your case.",
      guideLabel: "Review regional fingerprinting guidance",
      guideHref: "/fingerprinting/",
      options: [
        "Professional fingerprinting providers",
        "Police station fingerprinting where available",
        "FBI FD-258 fingerprint cards",
        "Hive quality review before submission",
        "High-resolution scans accepted before originals are mailed",
      ],
      reviewTitle: "Quality review before submission",
      reviewNote:
        "Send Hive a complete scan at a minimum of 400 DPI before mailing an original. We review ridge quality, card format and required fields, then confirm the next step.",
    },
    about: {
      eyebrow: "Shared applicant support",
      heading: "About the Partnership",
      recruiterText:
        "Korean Horizons specializes in helping teachers build successful careers in South Korea.",
      hiveText:
        "Hive Digital Consulting specializes in ensuring employment documents are prepared correctly.",
      togetherText:
        "Together we help applicants complete one of the most stressful parts of relocating overseas with confidence.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      introduction:
        "Practical answers for Korean Horizons applicants preparing U.S. or Canadian documents for teaching in South Korea.",
      items: createKoreaPartnerFaqs("Korean Horizons"),
      sourcesHeading: "Official references",
      sourcesIntroduction:
        "Requirements and agency processing practices can change. Check current recruiter instructions alongside these primary sources:",
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
    },
    finalCta: {
      heading: "Ready to Start Your Documents?",
      description:
        "Whether you have already accepted a position or are preparing in advance, our specialists are ready to help you complete your documentation accurately and on time.",
      disclaimer:
        "Hive prepares documents and coordinates document services. Final acceptance decisions remain with the recruiter, employer and relevant government authorities.",
      secondaryLabel: "Visit Korean Horizons",
      secondaryHref: "https://koreanhorizons.com/",
      secondaryExternal: true,
    },
  },
  {
    slug: "esl-consulting",
    lastModified: "2026-07-27",
    recruiterName: "ESL Consulting",
    logo: {
      src: "/esl-consulting-logo.png",
      alt: "ESL Consulting",
      width: 98,
      height: 55,
    },
    brand: {
      primary: "#00b8e5",
      primaryRgb: "0 184 229",
      secondary: "#087da5",
    },
    partnerOrganization: {
      url: "https://www.eslcon.com/",
      description:
        "English-teacher recruitment company supporting placements with schools in South Korea and China.",
    },
    referralCode: "esl-consulting",
    metadata: {
      title:
        "ESL Consulting Document Resource Centre | Hive Digital Consulting",
      description:
        "Official document preparation guide for ESL Consulting applicants. Learn about FBI background checks, RCMP checks, fingerprinting, apostilles and required documents for teaching in South Korea.",
      keywords: [
        "ESL Consulting document guide",
        "ESL Consulting FBI background check",
        "ESL Consulting apostille",
        "teaching in South Korea documents",
        "Korea teacher fingerprinting",
        "RCMP check for South Korea",
      ],
      about: [
        "ESL Consulting applicant documents",
        "Teaching in South Korea documents",
        "FBI and RCMP background checks",
        "Apostilles and fingerprinting",
      ],
    },
    coBrandLabel: "Candidate document resource partner",
    hero: {
      eyebrow: "Prepared for ESL Consulting applicants",
      title: "ESL Consulting Document Resource Centre",
      subtitle:
        "Prepared in partnership with Hive Digital Consulting to help ESL Consulting applicants prepare the documents required for teaching in South Korea.",
      supportingText:
        "Whether you're applying from the United States, Canada, the United Kingdom, Ireland, Australia, New Zealand or South Africa, this guide explains which documents you may need, how to prepare them, and how to avoid unnecessary delays.",
      illustration: {
        ariaLabel:
          "Document preparation illustration for ESL Consulting applicants showing a national background check, fingerprint card, university degree and apostille certificate",
        backgroundCheck: {
          jurisdiction: "Employment documents",
          title: "Background Check",
          subtitle: "National criminal record",
        },
        fingerprintCard: {
          eyebrow: "Applicant",
          title: "Fingerprints",
        },
        degree: {
          eyebrow: "Academic credential",
          title: "University Degree",
        },
        apostille: {
          title: "Apostille",
          subtitle: "Document certification",
        },
      },
    },
    cta: {
      primaryLabel: "Get Started",
      primaryHref: "#country-selector",
      secondaryLabel: "Contact Hive",
      secondaryHref: "/contact/?partner=esl-consulting",
    },
    contact: {
      whatsapp: "https://wa.me/8613764322474",
      kakao: "/contact/#kakao",
      wechat: "/contact/#wechat",
      email:
        "mailto:sales@hiverelo.com?subject=ESL%20Consulting%20applicant%20documents",
    },
    countrySelector: {
      eyebrow: "Start here",
      title: "Select Your Country",
      introduction:
        "Choose the country that issued your documents so Hive can confirm the correct background-check and legalization path.",
      countries: [
        {
          name: "United States",
          href: "/contact/?partner=esl-consulting&country=united-states",
        },
        {
          name: "Canada",
          href: "/contact/?partner=esl-consulting&country=canada",
        },
        {
          name: "United Kingdom",
          href: "/contact/?partner=esl-consulting&country=united-kingdom",
        },
        {
          name: "Ireland",
          href: "/contact/?partner=esl-consulting&country=ireland",
        },
        {
          name: "Australia",
          href: "/contact/?partner=esl-consulting&country=australia",
        },
        {
          name: "New Zealand",
          href: "/contact/?partner=esl-consulting&country=new-zealand",
        },
        {
          name: "South Africa",
          href: "/contact/?partner=esl-consulting&country=south-africa",
        },
      ],
    },
    checklist: {
      eyebrow: "Prepare the right records",
      title: "Required Documents",
      introduction:
        "Use this as an orientation guide, then follow the current checklist and timing instructions supplied by ESL Consulting for your placement.",
      applicant: {
        title: "Documents You'll Prepare",
        description:
          "Personal and application materials normally supplied by the candidate.",
        items: [
          { label: "Passport", icon: "passport" },
          { label: "University Degree", icon: "degree" },
          { label: "Resume", icon: "resume" },
          { label: "Passport Photos", icon: "photo" },
          { label: "References", icon: "references" },
        ],
      },
      hive: {
        title: "Documents Hive Can Help With",
        description:
          "Specialist background-check, fingerprinting and apostille workflows.",
        items: [
          {
            label: "FBI Background Check",
            icon: "background-check",
            href: "/services/background-checks/",
          },
          {
            label: "RCMP Background Check",
            icon: "canada",
            href: "/services/background-checks/",
          },
          {
            label: "Fingerprinting Guidance",
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
            label: "Document Authentication",
            icon: "apostille",
            href: "/services/apostille/",
          },
        ],
      },
    },
    apostille: {
      eyebrow: "Match the document to the authority",
      title: "Apostille Guidance",
      introduction:
        "The correct process depends on where each document originated and where it will be used. Hive reviews both before recommending a route.",
      items: [
        {
          title: "Federal Background Checks",
          description:
            "An FBI Identity History Summary is a U.S. federal document. Its federal apostille is handled through the U.S. Department of State.",
        },
        {
          title: "University Degrees",
          description:
            "Degree preparation depends on the issuing country and the certification or notarization format requested for the placement.",
        },
        {
          title: "Documents Outside the U.S.",
          description:
            "Canadian, British, Irish, Australian, New Zealand and South African documents follow their own competent-authority procedures.",
        },
      ],
    },
    partnership: {
      eyebrow: "Recruitment and documents, coordinated",
      heading: "Working Together",
      highlight:
        "ESL Consulting guides the placement process while Hive manages the supporting document workflow.",
      paragraphs: [
        "ESL Consulting assists qualified teachers in finding positions with reputable schools throughout South Korea and China.",
        "Hive Digital Consulting specializes in document preparation including criminal record checks, fingerprint guidance, apostilles, and document authentication.",
        "Together we help applicants prepare complete and accurate documentation before submission, reducing delays and minimizing rejected applications.",
      ],
    },
    commonMistakes: {
      eyebrow: "Avoid preventable delays",
      title: "Common Document Mistakes",
      introduction:
        "Most corrections begin with a small mismatch: the wrong authority, a poor scan, an incomplete card, or a document ordered at the wrong time.",
      items: [
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
            "The copy, notarization and apostille route must match the requested format and document origin.",
        },
        {
          title: "Date-window problems",
          explanation:
            "A criminal record check ordered too early may fall outside the program's accepted date window.",
        },
        {
          title: "Assuming every case is identical",
          explanation:
            "Nationality, employer, document origin and filing location can change the required path.",
        },
      ],
    },
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
          title: "Background Check",
          typicalTime: "24–48 Hours",
          description:
            "Electronic processing after fingerprint submission for eligible U.S. FBI requests.",
        },
        {
          title: "Degree Apostille",
          typicalTime: "24 Hours",
          description:
            "For eligible U.S. degrees. State-specific requirements may apply.",
        },
        {
          title: "Federal Apostille",
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
      eyebrow: "Capture it correctly",
      title: "Fingerprinting Options",
      introduction:
        "The right fingerprinting option depends on where you are located, which record you need, and the submission route selected for your case.",
      guideLabel: "Review regional fingerprinting guidance",
      guideHref: "/fingerprinting/",
      options: [
        "Professional fingerprinting providers",
        "Police station fingerprinting where available",
        "FBI FD-258 fingerprint cards",
        "Hive quality review before submission",
        "High-resolution scans accepted before originals are mailed",
      ],
      reviewTitle: "Quality review before submission",
      reviewNote:
        "Send Hive a complete scan at a minimum of 400 DPI before mailing an original. We review ridge quality, card format and required fields, then confirm the next step.",
    },
    about: {
      eyebrow: "Recruiter experience since 2005",
      heading: "About ESL Consulting",
      recruiterText:
        "ESL Consulting traces its beginnings to former ESL teachers who established SeoulESL in 2005. The organization later expanded its recruiting work under the ESL Consulting name, supporting teaching opportunities in South Korea and China.",
      hiveText:
        "Its recruiting team includes professionals with international experience who connect qualified teachers with public and private schools and guide applicants through the placement process.",
      togetherText:
        "Applicants receive personalized information and ongoing support designed to make an international move and new teaching role easier to navigate.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      introduction:
        "Practical answers for ESL Consulting applicants preparing documents for teaching in South Korea.",
      items: createKoreaPartnerFaqs("ESL Consulting"),
      sourcesHeading: "Official references",
      sourcesIntroduction:
        "Requirements and agency processing practices can change. Check current recruiter instructions alongside these primary sources:",
      officialSources: [
        {
          label: "ESL Consulting",
          href: "https://www.eslcon.com/",
        },
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
    },
    finalCta: {
      heading: "Ready to Prepare Your Documents?",
      description:
        "If you're applying through ESL Consulting, Hive can help you prepare criminal record checks, fingerprint cards, apostilles and supporting documentation before your documents are submitted.",
      disclaimer:
        "Hive prepares documents and coordinates document services. Final acceptance decisions remain with ESL Consulting, the employer and relevant government authorities.",
      primaryLabel: "Contact Hive",
      primaryHref: "/contact/?partner=esl-consulting",
      secondaryLabel: "Visit ESL Consulting",
      secondaryHref: "https://www.eslcon.com/",
      secondaryExternal: true,
    },
  },
  {
    slug: "ok-recruiting",
    lastModified: "2026-07-27",
    recruiterName: "OK Recruiting",
    logo: {
      src: "/ok-recruiting-logo.webp",
      alt: "OK Recruiting",
      width: 400,
      height: 128,
    },
    brand: {
      primary: "#f5820b",
      primaryRgb: "245 130 11",
      secondary: "#7da527",
    },
    partnerOrganization: {
      url: "https://www.okrecruiting.com/",
      description:
        "Seoul-based English-teacher recruitment company supporting placements with schools throughout South Korea.",
    },
    referralCode: "ok-recruiting",
    metadata: {
      title: "OK Recruiting Document Resource Centre | Hive Digital Consulting",
      description:
        "Document preparation guide for OK Recruiting applicants. Learn about national criminal record checks, fingerprinting, degree apostilles and documents for teaching in South Korea.",
      keywords: [
        "OK Recruiting required documents",
        "OK Recruiting E-2 visa documents",
        "OK Recruiting FBI background check",
        "teaching in Korea document checklist",
        "Korea degree apostille",
        "fingerprinting for Korea teachers",
      ],
      about: [
        "OK Recruiting applicant documents",
        "Teaching in South Korea documents",
        "National criminal record checks",
        "Degree apostilles and fingerprinting",
      ],
    },
    coBrandLabel: "Candidate document resource partner",
    hero: {
      eyebrow: "Prepared for OK Recruiting applicants",
      title: "OK Recruiting Document Resource Centre",
      subtitle:
        "Prepared with Hive Digital Consulting to help OK Recruiting applicants organize documents commonly required for teaching in South Korea.",
      supportingText:
        "Start with the country that issued your documents. Hive will help identify the appropriate background check, fingerprinting and apostille route before you submit originals.",
      illustration: {
        ariaLabel:
          "Document preparation illustration for OK Recruiting applicants showing a national background check, fingerprint card, university degree and apostille certificate",
        backgroundCheck: {
          jurisdiction: "Employment documents",
          title: "Background Check",
          subtitle: "National criminal record",
        },
        fingerprintCard: {
          eyebrow: "Applicant",
          title: "Fingerprints",
        },
        degree: {
          eyebrow: "Academic credential",
          title: "University Degree",
        },
        apostille: {
          title: "Apostille",
          subtitle: "Document certification",
        },
      },
    },
    cta: {
      primaryLabel: "Get Started",
      primaryHref: "#country-selector",
      secondaryLabel: "Contact Hive",
      secondaryHref: "/contact/?partner=ok-recruiting",
    },
    contact: {
      whatsapp: "https://wa.me/8613764322474",
      kakao: "/contact/#kakao",
      wechat: "/contact/#wechat",
      email:
        "mailto:sales@hiverelo.com?subject=OK%20Recruiting%20applicant%20documents",
    },
    countrySelector: {
      eyebrow: "Start here",
      title: "Select Your Country",
      introduction:
        "Choose the country that issued your documents so Hive can confirm the appropriate national background-check and apostille path.",
      countries: [
        {
          name: "United States",
          href: "/contact/?partner=ok-recruiting&country=united-states",
        },
        {
          name: "Canada",
          href: "/contact/?partner=ok-recruiting&country=canada",
        },
        {
          name: "United Kingdom",
          href: "/contact/?partner=ok-recruiting&country=united-kingdom",
        },
        {
          name: "Ireland",
          href: "/contact/?partner=ok-recruiting&country=ireland",
        },
        {
          name: "Australia",
          href: "/contact/?partner=ok-recruiting&country=australia",
        },
        {
          name: "New Zealand",
          href: "/contact/?partner=ok-recruiting&country=new-zealand",
        },
        {
          name: "South Africa",
          href: "/contact/?partner=ok-recruiting&country=south-africa",
        },
      ],
    },
    checklist: {
      eyebrow: "Prepare the right records",
      title: "Required Documents",
      introduction:
        "Use this as an orientation guide, then follow the current document list and timing instructions supplied by OK Recruiting and the Korean mission handling your application.",
      applicant: {
        title: "Documents You'll Prepare",
        description:
          "Personal, academic and application materials normally supplied by the candidate.",
        items: [
          { label: "Valid Passport", icon: "passport" },
          { label: "University Degree", icon: "degree" },
          { label: "Resume", icon: "resume" },
          { label: "Passport Photos", icon: "photo" },
          { label: "Signed Forms", icon: "references" },
        ],
      },
      hive: {
        title: "Documents Hive Can Help With",
        description:
          "Specialist background-check, fingerprinting and apostille workflows.",
        items: [
          {
            label: "FBI Background Check",
            icon: "background-check",
            href: "/services/background-checks/",
          },
          {
            label: "RCMP Background Check",
            icon: "canada",
            href: "/services/background-checks/",
          },
          {
            label: "Fingerprinting Guidance",
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
            label: "Country-Specific Guidance",
            icon: "apostille",
            href: "/services/apostille/",
          },
        ],
      },
    },
    apostille: {
      eyebrow: "Match the document to the authority",
      title: "Apostille Guidance",
      introduction:
        "The correct route depends on where each document originated and how it was issued or certified. Hive reviews those details before recommending a process.",
      items: [
        {
          title: "National Background Checks",
          description:
            "Use the national-level record requested for your country. Local, state or provincial checks cover a different jurisdiction and should not be substituted without confirmation.",
        },
        {
          title: "University Degrees",
          description:
            "Degree preparation depends on the issuing country and whether the placement requires an original, certified copy or notarized copy.",
        },
        {
          title: "Correct Competent Authority",
          description:
            "Each eligible country has its own apostille authority. U.S. federal records and state-prepared degree documents also follow different authorities.",
        },
      ],
    },
    partnership: {
      eyebrow: "Recruitment and documents, coordinated",
      heading: "Working Together",
      highlight:
        "OK Recruiting manages the placement relationship while Hive focuses on the supporting document workflow.",
      paragraphs: [
        "OK Recruiting connects qualified teachers with Korean schools and provides guidance through the recruitment and placement stages.",
        "Hive Digital Consulting specializes in document preparation including criminal record checks, fingerprint guidance, apostilles and country-specific document coordination.",
        "Together we help applicants identify document issues early, prepare clearer submissions and reduce avoidable corrections before records are sent onward.",
      ],
    },
    commonMistakes: {
      eyebrow: "Avoid preventable delays",
      title: "Common Document Mistakes",
      introduction:
        "The most expensive corrections often begin with the wrong record, an expired document or an apostille requested from the wrong authority.",
      items: [
        {
          title: "Using a local police check",
          explanation:
            "A local, state or provincial record is not the same as a national-level criminal record check.",
        },
        {
          title: "Starting too late",
          explanation:
            "Background checks and apostilles involve separate authorities, review steps and delivery time.",
        },
        {
          title: "Incorrect fingerprint card",
          explanation:
            "The card and submission format should be confirmed before the appointment, especially outside North America.",
        },
        {
          title: "Low-quality fingerprints",
          explanation:
            "Smudged, incomplete or faint ridge detail can cause rejection and require a new set.",
        },
        {
          title: "Missing an apostille",
          explanation:
            "The degree and national criminal record commonly require separate preparation through the correct authorities.",
        },
        {
          title: "Incorrect degree preparation",
          explanation:
            "The copy, certification and apostille route must match the document's origin and requested format.",
        },
        {
          title: "Date-window problems",
          explanation:
            "A criminal record ordered too early may fall outside the receiving authority's accepted issue-date window.",
        },
        {
          title: "Using outdated forms",
          explanation:
            "Use the current forms and instructions supplied by OK Recruiting and the Korean mission handling the application.",
        },
      ],
    },
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
          title: "Background Check",
          typicalTime: "24–48 Hours",
          description:
            "Electronic processing after fingerprint submission for eligible U.S. FBI requests.",
        },
        {
          title: "Degree Apostille",
          typicalTime: "24 Hours",
          description:
            "For eligible U.S. degree workflows. State-specific requirements may apply.",
        },
        {
          title: "Federal Apostille",
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
      eyebrow: "Capture it correctly",
      title: "Fingerprinting Options",
      introduction:
        "The right fingerprinting option depends on where you are located, which national record you need and the submission route selected for your case.",
      guideLabel: "Review regional fingerprinting guidance",
      guideHref: "/fingerprinting/",
      options: [
        "Professional fingerprinting providers",
        "Police station fingerprinting where available",
        "FBI FD-258 fingerprint cards",
        "Hive quality review before submission",
        "High-resolution scans accepted before originals are mailed",
      ],
      reviewTitle: "Quality review before submission",
      reviewNote:
        "Send Hive a complete scan at a minimum of 400 DPI before mailing an original. We review ridge quality, card format and required fields, then confirm the next step.",
    },
    about: {
      eyebrow: "Recruiting in Korea since 2006",
      heading: "About OK Recruiting",
      recruiterText:
        "OK Recruiting is a Seoul-based recruitment company that has worked with English teachers and Korean schools since 2006.",
      hiveText:
        "Its team supports candidates with role matching, recruitment communication and the placement stages associated with moving into a teaching position in South Korea.",
      togetherText:
        "Candidates receive recruiter guidance for the job process while Hive provides specialist support for the background checks, fingerprints and apostilles that sit behind the document submission.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      introduction:
        "Practical answers for OK Recruiting applicants preparing documents for teaching in South Korea.",
      items: createKoreaPartnerFaqs("OK Recruiting"),
      sourcesHeading: "Official references",
      sourcesIntroduction:
        "Requirements and agency processing practices can change. Check current recruiter and consular instructions alongside these sources:",
      officialSources: [
        {
          label: "OK Recruiting Required Documents",
          href: "https://www.okrecruiting.com/teach-in-korea/required-documents-for-e2-visa/",
        },
        {
          label: "OK Recruiting",
          href: "https://www.okrecruiting.com/",
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
    },
    finalCta: {
      heading: "Ready to Prepare Your Documents?",
      description:
        "If you're applying through OK Recruiting, Hive can help you prepare criminal record checks, fingerprint cards, apostilles and supporting documentation before your records are submitted.",
      disclaimer:
        "Hive prepares documents and coordinates document services. Final acceptance decisions remain with OK Recruiting, the employer and relevant government authorities.",
      primaryLabel: "Contact Hive",
      primaryHref: "/contact/?partner=ok-recruiting",
      secondaryLabel: "Visit OK Recruiting",
      secondaryHref: "https://www.okrecruiting.com/",
      secondaryExternal: true,
    },
  },
] satisfies readonly PartnerPageConfig[];

const partnerPageConfigsBySlug = new Map(
  partnerPageConfigs.map((config) => [config.slug, config]),
);

if (partnerPageConfigsBySlug.size !== partnerPageConfigs.length) {
  throw new Error("Partner page configuration slugs must be unique.");
}

export function getPartnerPageConfig(
  slug: string,
): PartnerPageConfig | undefined {
  return partnerPageConfigsBySlug.get(slug);
}
