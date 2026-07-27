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

export interface PartnerPageConfig {
  slug: string;
  lastModified: string;
  recruiterName: string;
  referralCode: string;
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
  partnerOrganization: {
    url: string;
    description: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    about: string[];
  };
  coBrandLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportingText: string;
    illustration: {
      ariaLabel: string;
      backgroundCheck: {
        jurisdiction: string;
        title: string;
        subtitle: string;
      };
      fingerprintCard: {
        eyebrow: string;
        title: string;
      };
      degree: {
        eyebrow: string;
        title: string;
      };
      apostille: {
        title: string;
        subtitle: string;
      };
    };
  };
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    secondaryDownload?: boolean;
  };
  contact: {
    whatsapp: string;
    kakao: string;
    wechat: string;
    email: string;
  };
  checklist: {
    eyebrow: string;
    title: string;
    introduction: string;
    applicant: {
      title: string;
      description: string;
      items: PartnerChecklistItem[];
    };
    hive: {
      title: string;
      description: string;
      items: PartnerChecklistItem[];
    };
  };
  countrySelector?: {
    eyebrow: string;
    title: string;
    introduction: string;
    countries: Array<{
      name: string;
      href: string;
    }>;
  };
  apostille?: {
    eyebrow: string;
    title: string;
    introduction: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  partnership: {
    eyebrow: string;
    heading: string;
    highlight: string;
    paragraphs: string[];
  };
  commonMistakes: {
    eyebrow: string;
    title: string;
    introduction: string;
    items: Array<{
      title: string;
      explanation: string;
    }>;
  };
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
    eyebrow: string;
    title: string;
    introduction: string;
    guideLabel: string;
    guideHref: string;
    options: string[];
    reviewTitle: string;
    reviewNote: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    recruiterText: string;
    hiveText: string;
    togetherText: string;
  };
  faq: {
    heading: string;
    introduction: string;
    items: PartnerFaq[];
    sourcesHeading: string;
    sourcesIntroduction: string;
    officialSources: Array<{
      label: string;
      href: string;
    }>;
  };
  finalCta: {
    heading: string;
    description: string;
    disclaimer: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    secondaryExternal?: boolean;
  };
}
