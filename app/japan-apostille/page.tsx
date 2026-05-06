import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Clock, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Japan Document Apostille Services | Hive Digital",
  description: "Japan document apostille services for Americans. Hague Apostille for work visas, teaching positions, corporate documents, and immigration since 1970.",
  openGraph: {
    title: "Japan Document Apostille Services | Hive Digital",
    description: "Expert Japan apostille processing for American documents. Work visa, teaching, and corporate authentication.",
  },
};

export default function JapanApostillePage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link href="/services/" className="text-hive-muted hover:text-white text-sm transition-colors">← All Services</Link>
        </nav>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Japan Focus</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          Japan Document<br />
          <span className="text-red-500">Apostille</span> Services
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl leading-relaxed mb-8">
          Japan has been a Hague Apostille Convention member since <strong className="text-white">1970</strong>. 
          For all documents destined for Japan, a Hague Apostille from the issuing country's 
          competent authority is required. Hive Digital processes apostilles for Americans 
          needing document compliance for Japan work visas, teaching positions, business 
          registration, and immigration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">
            Start Your Japan Apostille <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/8613764322474" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">
            WhatsApp: +86 13764322474
          </a>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500" /> The Japan Apostille Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Document Review", text: "We verify your documents are original, complete, and eligible for apostille in your state or at the federal level." },
              { step: "2", title: "Apostille Issuance", text: "For U.S. documents: state-level (Secretary of State) or federal apostille (U.S. Department of State) as required." },
              { step: "3", title: "Japanese Translation", text: "Japanese employers and immigration often require certified Japanese translation of apostilled documents." },
              { step: "4", title: "Delivery to Japan", text: "Secure international courier to your employer, immigration office, or designated recipient in Tokyo, Osaka, or elsewhere." },
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
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />FBI Background Checks</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Teaching Certificates</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Marriage & Birth Certificates</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Corporate Documents & Articles of Incorporation</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Power of Attorney</li>
            </ul>
          </div>
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight flex items-center gap-2"><Shield className="w-5 h-5 text-red-500" /> Why Hive Digital</h2>
            <ul className="space-y-2.5 text-sm text-hive-muted">
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Expert in U.S. state-level and federal apostille</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Japanese translation coordination</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />End-to-end: apostille, translation, and delivery</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />Same-day response via WeCom/WeChat or email</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />15+ years handling Japan-bound documents</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Japan Work Visa & Immigration Documents</h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            Working in Japan? Most employers and immigration offices require apostilled 
            degrees, background checks, and professional certificates. We handle the 
            complete document package for engineers, teachers, and corporate transfers.
          </p>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Apostille Documents for Japan?</h2>
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
