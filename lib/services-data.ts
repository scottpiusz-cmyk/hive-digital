export interface ServiceDefinition {
  title: string;
  subtitle: string;
  description: string;
  metaDescription?: string;
  features: string[];
  process: string[];
  pricing: string;
  lastModified: string;
}

export const services: Record<string, ServiceDefinition> = {
  "background-checks": {
    title: "Federal & State Background Checks",
    subtitle: "Comprehensive criminal record verification",
    description:
      "We provide fast, secure criminal background checks from the United States, Canada, UK, Australia, and other jurisdictions. Our team manages the entire application process — from form submission to secure digital delivery — ensuring accuracy and compliance with your destination countrys requirements.",
    features: [
      "FBI Identity History Summary Checks (U.S.)",
      "RCMP Criminal Record Checks (Canada)",
      "ACRO Police Certificates (UK)",
      "State-level Department of Justice checks",
      "Fingerprint-based and name-based searches",
      "Secure digital delivery with full tracking",
    ],
    process: [
      "Submit your document requirements via WeCom/WeChat or email",
      "We verify your identity and required documents",
      "Application submitted to the relevant authority",
      "Processing and verification (varies by jurisdiction)",
      "Results delivered securely via encrypted transfer",
    ],
    pricing:
      "Pricing varies by jurisdiction and urgency. Contact us for a tailored quote.",
    lastModified: "2026-05-06",
  },
  apostille: {
    title: "Apostille & Document Authentication",
    subtitle: "Hague Apostille and embassy legalization",
    description:
      "Our apostille and document authentication service covers every step from notarization to final legalization. Whether your destination is a Hague Convention member state requiring an apostille, or a non-member country requiring full embassy legalization, we manage the entire chain of custody with tracked submissions and real-time updates.",
    features: [
      "Hague Apostille certification (120+ member states)",
      "Chinese Embassy / Consulate Authentication",
      "Vietnamese Embassy Legalization",
      "Thai MOFA & Embassy Authentication",
      "Korean & Japanese Consulate Authentication",
      "Notarization and certified translation coordination",
    ],
    process: [
      "Free consultation to determine the correct authentication path",
      "Document review and notarization (if required)",
      "Apostille or embassy submission with tracking",
      "Consulate legalization (for non-Hague countries)",
      "Certified translation coordination (if needed)",
      "Secure delivery to your destination",
    ],
    pricing:
      "Fees depend on document count, destination country, and processing speed. Request a quote for exact pricing.",
    lastModified: "2026-05-06",
  },
  "china-pcc": {
    title: "Local China PCC Reports (Police Clearance)",
    subtitle: "Police Clearance Certificates for former China residents",
    description:
      "We obtain Police Clearance Certificates (Non-Criminal Record Certificates) from Public Security Bureau (PSB) offices across major Chinese cities including Beijing, Shanghai, and Shenzhen. This service is ideal for former residents who need to prove a clean criminal record for visa applications, employment, or immigration purposes.",
    features: [
      "Beijing PSB Non-Criminal Record Certificate",
      "Shanghai PSB Police Clearance Certificate",
      "Shenzhen PSB Criminal Record Check",
      "Other cities available — inquire for availability",
      "Notarization and English translation included",
      "Apostille and embassy legalization add-on available",
    ],
    process: [
      "Confirm eligibility and city-specific requirements",
      "Submit proof of residence, visa copies, and passport",
      "Application filed with local PSB office",
      "Certificate collection and notarization",
      "English translation (certified)",
      "Optional apostille or embassy legalization",
      "Secure delivery to your destination",
    ],
    pricing:
      "Each city has different processing fees. Contact us with your specific city and timeline for a quote.",
    lastModified: "2026-05-06",
  },
  "china-visa": {
    title: "China Work Permit & Visa Document Services",
    subtitle: "Documents required to work in China",
    description:
      "Hive helps professionals, teachers, families, and HR teams prepare and legalize documents an employer may require before beginning a China work permit and visa application. Hive does not issue visas or work permits.",
    metaDescription:
      "Prepare background checks, degrees, teaching qualifications, and family documents for China employment. Confirm requirements before obtaining Apostilles.",
    features: [
      "Criminal background check selection",
      "Degree document preparation",
      "TEFL, TESOL, or teaching qualification review where applicable",
      "Marriage certificate preparation for a spouse",
      "Birth certificate preparation for dependents",
      "Apostille coordination where required",
    ],
    process: [
      "Receive job offer",
      "Confirm employer requirements",
      "Prepare required documents",
      "Obtain Apostilles where required",
      "Send documents to employer",
      "Employer continues the China work permit and visa process",
    ],
    pricing:
      "Pricing depends on the documents actually required and where they were issued. Confirm the employer's requirements before ordering services.",
    lastModified: "2026-07-18",
  },
  "business-reg": {
    title: "China Business Registration",
    subtitle: "WFOE, JV setup and post-registration compliance",
    description:
      "We guide foreign companies through every stage of establishing a legal presence in China — from initial entity structure selection (WFOE, Joint Venture, or Representative Office) to post-registration operational compliance including tax setup, social insurance registration, and bank account opening.",
    features: [
      "WFOE (Wholly Foreign-Owned Enterprise) registration",
      "Joint Venture setup & structuring",
      "Business license & Certificate application",
      "Chop carving & bank account opening",
      "Post-registration tax & compliance setup",
      "Social insurance and housing fund registration",
    ],
    process: [
      "Initial consultation on entity type and structure",
      "Name pre-approval and MOFCOM filing",
      "Business license application",
      "Chop carving and bank account opening",
      "Tax registration and invoice system setup",
      "Ongoing compliance and reporting guidance",
    ],
    pricing:
      "Business registration packages start from basic WFOE setup to full-service corporate establishment. Contact us for a customized proposal.",
    lastModified: "2026-05-06",
  },
  ancillary: {
    title: "Ancillary Services",
    subtitle: "Back-office support for your China entity",
    description:
      "Once your China entity is established, our ancillary services keep operations running smoothly. We provide HR administration, payroll processing, accounting and tax compliance, office lease coordination, and ongoing operational consulting — essentially functioning as your local back office without the overhead of building one from scratch.",
    features: [
      "HR & payroll administration",
      "Finance, accounting & tax compliance",
      "Office selection & lease coordination",
      "Ongoing operational consulting",
      "Employee onboarding support",
      "Government liaison and compliance updates",
      "China Z-Visa & Work Permit assistance",
    ],
    process: [
      "Assessment of your operational needs",
      "Service scope and SLA agreement",
      "Monthly HR, payroll, and accounting management",
      "Quarterly compliance reviews",
      "Ongoing advisory and expansion support",
    ],
    pricing:
      "Ancillary services are billed monthly based on headcount and service scope. Contact us for a service proposal.",
    lastModified: "2026-05-06",
  },
};

export function getAllServiceSlugs(): string[] {
  return Object.keys(services);
}
