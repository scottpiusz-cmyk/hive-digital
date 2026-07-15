import { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Hive Digital — Get Your Free Quote",
  description:
    "Contact Hive Digital for document authentication, apostille, background checks, and visa documentation services. Reach us via WeCom/WeChat, WhatsApp, KakaoTalk, email, or phone.",
  alternates: {
    canonical: "/contact/",
    languages: {
      en: "/contact/",
      "zh-CN": "/zh/contact/",
    },
  },
  openGraph: {
    title: "Contact Hive Digital",
    description:
      "Get a free consultation and quote for your document authentication needs.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <p className="text-hive-muted text-lg max-w-2xl mx-auto">
            Ready to get started? Reach out for a free consultation and tailored
            quote. Our team typically responds within 2 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* WeCom/WeChat — Primary */}
          <div className="bg-hive-surface border border-hive-accent/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-hive-accent text-hive-bg text-xs font-bold uppercase px-3 py-1 rounded-bl-xl">
              Quickest Response
            </div>
            <div className="w-14 h-14 rounded-2xl bg-hive-accent/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-hive-accent" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              WeCom / WeChat
            </h2>
            <p className="text-hive-muted text-sm mb-6">
              Scan the QR code to add us on WeCom/WeChat for the fastest
              response.
            </p>
            <div className="relative w-44 h-44 mx-auto rounded-xl overflow-hidden border border-hive-border">
              <Image
                src="/wechat-qr.jpg"
                alt="WeCom WeChat QR Code"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-hive-dim text-xs mt-4">
              Username: HiveRelo (scan to verify)
            </p>
          </div>

          {/* WhatsApp Business — Secondary */}
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              WhatsApp Business
            </h2>
            <p className="text-hive-muted text-sm mb-6">
              Message us on WhatsApp Business for international inquiries.
            </p>
            <div className="relative w-44 h-44 mx-auto rounded-xl overflow-hidden border border-hive-border">
              <Image
                src="/whatsapp-qr.jpg"
                alt="WhatsApp Business QR Code"
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://wa.me/8613764322474"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-green-400 hover:text-green-300 text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              +86 13764322474
            </a>
          </div>

          {/* KakaoTalk — South Korea */}
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">KakaoTalk</h2>
            <p className="text-hive-muted text-sm mb-6">
              Scan the QR code to contact Hive on KakaoTalk for South Korea
              inquiries.
            </p>
            <div className="relative w-44 h-44 mx-auto rounded-xl overflow-hidden border border-hive-border bg-white">
              <Image
                src="/kakao-qr.jpg"
                alt="Hive KakaoTalk contact QR code"
                fill
                sizes="176px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 text-center">
            <div className="w-11 h-11 rounded-xl bg-hive-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-hive-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <a
              href="mailto:sales@hiverelo.com"
              className="text-hive-accent hover:text-hive-accent-hover text-sm transition-colors"
            >
              sales@hiverelo.com
            </a>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 text-center">
            <div className="w-11 h-11 rounded-xl bg-hive-accent/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-hive-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Phone</h3>
            <a
              href="tel:+8613764322474"
              className="text-hive-accent hover:text-hive-accent-hover text-sm transition-colors"
            >
              +86 13764322474
            </a>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 text-center">
            <div className="w-11 h-11 rounded-xl bg-hive-accent/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-hive-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Response Time</h3>
            <p className="text-hive-muted text-sm">Within 2 hours</p>
          </div>
        </div>

        {/* Shanghai office */}
        <div className="bg-hive-surface border border-hive-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
            Shanghai Office
          </h2>
          <p className="text-hive-muted mb-2">
            Documents can be collected in person from our Shanghai office by
            appointment.
          </p>
          <p className="text-hive-dim text-sm">
            Contact us to schedule a pickup or drop-off.
          </p>
        </div>
      </div>
    </main>
  );
}
