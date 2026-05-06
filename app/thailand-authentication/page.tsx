import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Clock, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thailand Document Authentication & Legalization Services | Hive Digital",
  description: "Thailand document authentication and legalization services for Americans. Thai Embassy legalization for degrees, teaching certificates, FBI checks, and corporate documents.",
  openGraph: {
    title: "Thailand Document Authentication & Legalization Services | Hive Digital",
    description: "Expert Thailand document authentication for Americans. Thai Embassy legalization and translation services.",
  },
};

export default function ThailandAuthenticationPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link href="/services/" className="text-hive-muted hover:text-white text-sm transition-colors">← All Services</Link>
        </nav>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Thailand Focus</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          Thailand Document<br />
          <span className="text-red-500">Authentication</span> & Legalization
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl leading-relaxed mb-8">
          Thailand is <strong className="text-white">not a Hague Apostille Convention member</strong>. 
          All documents destined for Thailand require authentication through the 
          Thai Embassy or Consulate in the document's country of origin, followed 
          by certified Thai translation. Hive Digital handles the entire process 
          for American professionals, teachers, and employers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">
            Start Your Thailand Document Process <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/8613764322474" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">
            WhatsApp: +86 13764322474
          </a>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500" /> The Thailand Authentication Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Document Verification", text: "We verify your documents are complete and eligible for Thai Embassy authentication." },
              { step: "2", title: "State/Federal Authentication", text: "U.S. documents require Secretary of State or U.S. Department of State authentication first." },
              { step: "3", title: "Thai Embassy Legalization", text: "Documents are legalized at the Royal Thai Embassy or Consulate General." },
              { step: "4", title: "Thai Translation & Delivery", text: "Certified Thai translation and secure delivery to your employer or immigration office." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3"><span className="text-red-500 font-bold">{s.step}</span></div>
                <h3 className="text-white font-semibold mb-2 text-sm">{s.title}</h3>
                <p className="text-hive-muted text-xs leading-relaxed">{s.text}</p>
              </div>
            ))}
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
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Corporate Documents</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Power of Attorney</li>
            </ul>
          </div>
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight flex items-center gap-2"><Shield className="w-5 h-5 text-red-500" /> Why Hive Digital</h2>
            <ul className="space-y-2.5 text-sm text-hive-muted">
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Expert coordination with Royal Thai Embassy</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Certified Thai translation services</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />End-to-end: authentication, translation, delivery</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Same-day response via WeCom/WeChat or email</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Trusted by teachers, schools, and corporate HR</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Teaching in Thailand?</h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            Thailand is one of the top destinations for TEFL teachers. Most schools 
            require authenticated degrees, teaching certificates, and clean background 
            checks. We handle the full document package for teachers heading to Bangkok, 
            Chiang Mai, Phuket, and beyond.
          </p>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Process Documents for Thailand?</h2>
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
