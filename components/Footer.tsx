import Link from "next/link";
import { Mail, MapPin, Clock, Phone, MessageCircle, ChevronRight } from "lucide-react";

const serviceLinks = ["Federal & State Background Checks","Apostille Services","Document Authentication","Work Permit Support","China Business Registration","Back-Office Support (HR, Finance, Tax)"];
const companyLinks = [{ label: "About Hive", href: "/about/" },{ label: "Our Process", href: "/about/" },{ label: "Contact", href: "/contact/" }];

export default function Footer() {
  return (
    <footer className="bg-hive-surface border-t border-hive-border/50">
      <div className="border-b border-hive-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight">Questions? We&apos;re on <span className="text-hive-accent">WeCom/WeChat</span>.</h3>
              <p className="text-hive-muted mb-8 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">Whether you&apos;re heading to China, Vietnam, Thailand, Korea, Japan or beyond &mdash; message us on WeCom/WeChat (fastest) or WhatsApp (+86 13764322474). Average response: under 2 hours.</p>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-hive-bg bg-hive-accent hover:bg-hive-accent-hover rounded-full transition-all hover:shadow-glow">
                <MessageCircle className="w-4 h-4" />CONTACT US
              </Link>
            </div>
            <div className="text-center lg:text-left lg:border-l lg:border-hive-border/50 lg:pl-16">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight">Prefer email? <span className="text-hive-accent">Get a quote</span>.</h3>
              <p className="text-hive-muted mb-8 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">Tell us what documents you need and your timeline. We&apos;ll reply with a clear breakdown and next steps.</p>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-hive-muted border border-hive-border hover:text-white hover:border-hive-accent hover:bg-hive-accent/10 rounded-full transition-all">
                <Mail className="w-4 h-4" />EMAIL sales@hiverelo.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex flex-col mb-4 leading-none">
              <span className="text-lg font-black tracking-tight text-white">Hive <span className="text-hive-accent">Digital</span></span>
              <span className="text-[8px] tracking-[0.12em] uppercase text-hive-dim mt-0.5">Crossborder Document Specialists</span>
            </Link>
            <p className="text-xs text-hive-dim leading-relaxed">Documentation infrastructure for international hiring in 21+ countries including China, Vietnam, Thailand, Korea &amp; Japan.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[10px] uppercase tracking-[0.15em] text-hive-dim">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}><Link href="/services/" className="text-xs text-hive-muted hover:text-hive-accent transition-colors inline-flex items-center gap-1"><ChevronRight className="w-3 h-3" />{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[10px] uppercase tracking-[0.15em] text-hive-dim">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}><Link href={item.href} className="text-xs text-hive-muted hover:text-hive-accent transition-colors inline-flex items-center gap-1"><ChevronRight className="w-3 h-3" />{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[10px] uppercase tracking-[0.15em] text-hive-dim">Contact</h4>
            <ul className="space-y-3 text-xs text-hive-muted">
              <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 text-hive-accent flex-shrink-0" /><span>Shanghai &amp; Beijing, China &mdash; Serving 21+ countries</span></li>
              <li className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 mt-0.5 text-hive-accent flex-shrink-0" /><span>Mon-Fri, 9:00-18:00 CST</span></li>
              <li className="flex items-start gap-2"><MessageCircle className="w-3.5 h-3.5 mt-0.5 text-hive-accent flex-shrink-0" /><span>WeCom/WeChat: Hive Digital (fastest)</span></li>
              <li className="flex items-start gap-2"><Phone className="w-3.5 h-3.5 mt-0.5 text-green-400 flex-shrink-0" /><span>WhatsApp: +86 13764322474</span></li>
              <li className="flex items-start gap-2"><Mail className="w-3.5 h-3.5 mt-0.5 text-hive-accent flex-shrink-0" /><span>sales@hiverelo.com</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-hive-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-hive-dim tracking-wider">&copy; {new Date().getFullYear()} Hive Digital Consulting. All rights reserved.</p>
          <p className="text-[10px] text-hive-dim tracking-wider">15+ years navigating document compliance for 21+ countries.</p>
        </div>
      </div>
    </footer>
  );
}
