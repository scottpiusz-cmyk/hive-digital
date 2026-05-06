

import Link from "next/link";
import { ArrowRight, FileText, Clock, Shield, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnam Document Authentication & Legalization Services | Hive Digital",
  description: "Vietnam document authentication and legalization services for Americans. Embassy legalization pre-Sept 2025, Apostille post-Sept 2025. Degrees, teaching certificates, corporate documents.",
  openGraph: {
    title: "Vietnam Document Authentication & Legalization Services | Hive Digital",
    description: "Expert Vietnam document authentication for Americans. Embassy legalization and Apostille services.",
  },
};

export default function VietnamAuthenticationPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link href="/services/" className="text-hive-muted hover:text-white text-sm transition-colors">← All Services</Link>
        </nav>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Vietnam Focus</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          Vietnam Document<br />
          <span className="text-red-500">Legalization</span> & Authentication
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl leading-relaxed mb-8">
          Vietnam acceded to the Hague Apostille Convention on <strong className="text-white">September 30, 2025</strong>. 
          For documents needed before this date: Vietnamese Embassy authentication (legalization) is required. 
          For documents needed after this date: Hague Apostille is accepted. 
          Hive Digital handles both pathways for American professionals and employers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">
            Start Your Vietnam Document Process <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/8613764322474" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">
            WhatsApp: +86 13764322474
          </a>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500" /> Two Pathways for Vietnam
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-hive-bg border border-hive-border rounded-xl p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-2">Before Sept 30, 2025</div>
              <h3 className="text-white font-semibold mb-2">Embassy Authentication (Legalization)</h3>
              <p className="text-hive-muted text-sm">Documents must be legalized at the Vietnamese Embassy or Consulate General in the country of origin. This is a multi-step authentication process.</p>
            </div>
            <div className="bg-hive-bg border border-hive-border rounded-xl p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-2">After Sept 30, 2025</div>
              <h3 className="text-white font-semibold mb-2">Hague Apostille</h3>
              <p className="text-hive-muted text-sm">Apostille from the issuing state's competent authority is sufficient. No Vietnamese Embassy visit required.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight flex items-center gap-2"><FileText className="w-5 h-5 text-red-500" /> Documents We Process</h2>
            <ul className="space-y-2.5 text-sm text-hive-muted">
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Degree Certificates & Transcripts</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Teaching Certificates (TEFL/TESOL)</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Marriage & Birth Certificates</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />FBI Background Checks</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Corporate Documents & Articles of Incorporation</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Power of Attorney</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Commercial Contracts</li>
            </ul>
          </div>
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight flex items-center gap-2"><Shield className="w-5 h-5 text-red-500" /> Why Hive Digital</h2>
            <ul className="space-y-2.5 text-sm text-hive-muted">
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Deep knowledge of Decree 219/2025/ND-CP</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Bilingual coordination with Vietnamese embassies</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />End-to-end: legalization, translation, notarization, delivery</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Same-day response via WeCom/WeChat or email</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Trusted by international schools and corporate HR teams</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Vietnam's Apostille Transition</h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            Vietnam joined the Hague Apostille Convention on September 30, 2025. 
            We guide clients through the transition — whether your documents need 
            pre-accession Embassy authentication or post-accession Apostille processing.
          </p>
          <a href="/insights/china-vietnam-document-legalization-2026/" className="inline-flex items-center gap-2 text-red-400 hover:text-white text-sm font-semibold transition-colors">Read our Vietnam Legalization Guide →</a>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Process Documents for Vietnam?</h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto">Free consultation. We respond within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">Email sales@hiverelo.com</a>
            <a href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">Contact Page</a>
          </div>
        </div>
      </div>
    </main>
  );
}
