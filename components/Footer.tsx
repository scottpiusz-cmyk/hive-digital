"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Building2,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  ThumbsUp,
  UsersRound,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface ConnectLink extends FooterLink {
  icon: LucideIcon;
}

const trustpilotHref = "https://www.trustpilot.com/review/www.hiverelo.com";

const englishContent = {
  description:
    "Hive Digital Consulting helps international professionals, educators, recruiters and businesses obtain FBI background checks, apostilles, fingerprinting services and document legalization throughout Asia-Pacific.",
  trustPoints: [
    "Trusted by 1,000+ clients",
    "Operating since 2017",
    "Clear pricing",
    "Personal support",
  ],
  services: [
    { label: "FBI Background Checks", href: "/services/background-checks/" },
    {
      label: "State Police Background Checks",
      href: "/services/background-checks/",
    },
    {
      label: "RCMP / CPIC Background Checks",
      href: "/services/background-checks/",
    },
    { label: "Apostille Services", href: "/services/apostille/" },
    { label: "Degree Apostilles", href: "/services/apostille/" },
    { label: "TEFL Apostilles", href: "/services/apostille/" },
    { label: "Fingerprinting Solutions", href: "/fingerprinting/" },
    { label: "Translation Services", href: "/services/apostille/" },
  ],
  countries: [
    { label: "China Document Services", href: "/services/china-visa/" },
    {
      label: "Preparing Documents for South Korea",
      href: "/korea-apostille/",
    },
    { label: "Preparing Documents for Japan", href: "/japan-apostille/" },
    {
      label: "Document Services for Vietnam",
      href: "/vietnam-authentication/",
    },
    {
      label: "Document Services for Thailand",
      href: "/thailand-authentication/",
    },
    {
      label: "Canadian Background Check Services",
      href: "/services/background-checks/",
    },
    {
      label: "United States Background Check Services",
      href: "/services/background-checks/",
    },
  ],
  resources: [
    { label: "Preparing Documents for China", href: "/services/china-visa/" },
    { label: "Frequently Asked Questions", href: "/#faq" },
    {
      label: "FBI Background Check Processing Guide",
      href: "/insights/fbi-background-check-optimization-2026/",
    },
    { label: "Fingerprinting Guide", href: "/fingerprinting/" },
    { label: "Document Insights and News", href: "/insights/" },
    { label: "Contact Hive Digital", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy/" },
  ],
  popularSearches: [
    {
      label: "FBI Fingerprinting in Seoul",
      href: "/korea-apostille/#fingerprinting",
    },
    {
      label: "Fingerprinting Services in Shanghai",
      href: "/shanghai-fingerprinting/",
    },
    { label: "FBI Background Checks", href: "/services/background-checks/" },
    { label: "Degree Apostille Services", href: "/services/apostille/" },
    { label: "China Work Documents", href: "/services/china-visa/" },
    { label: "China Police Clearance Certificates", href: "/services/china-pcc/" },
    {
      label: "Vietnam Document Legalization",
      href: "/vietnam-authentication/",
    },
    {
      label: "South Korea Document Services",
      href: "/korea-apostille/",
    },
  ],
  connect: [
    {
      label: "Hive Digital on LinkedIn",
      href: "https://www.linkedin.com/company/hive-relocations/",
      icon: Building2,
      external: true,
    },
    {
      label: "Hive Digital on Facebook",
      href: "https://www.facebook.com/share/1DAH4SuAr9/?mibextid=wwXIfr",
      icon: ThumbsUp,
      external: true,
    },
    { label: "WeChat", href: "/contact/#wechat", icon: MessageCircle },
    { label: "KakaoTalk", href: "/contact/#kakao", icon: MessageCircle },
    {
      label: "WhatsApp",
      href: "https://wa.me/8613764322474",
      icon: MessageCircle,
      external: true,
    },
    { label: "sales@hiverelo.com", href: "mailto:sales@hiverelo.com", icon: Mail },
    { label: "+86 137 6432 2474", href: "tel:+8613764322474", icon: Phone },
  ] satisfies ConnectLink[],
  labels: {
    popularEyebrow: "Explore Hive",
    popularHeading: "Popular Searches",
    popularDescription:
      "Quick access to the document services and destination guidance clients use most.",
    services: "Services",
    countries: "Countries",
    resources: "Resources",
    connect: "Connect With Hive",
    trustpilot: "4.9/5 Rated Excellent on Trustpilot",
    clients: "1,000+ Clients Served",
    since: "Serving Asia-Pacific Since 2017",
    serving:
      "Serving clients throughout China, South Korea, Japan and the Asia-Pacific region.",
    rights: "Hive Digital Consulting. All rights reserved.",
  },
};

const chineseContent = {
  description:
    "Hive Digital Consulting为国际专业人士、教育工作者、招聘机构和企业提供FBI背景调查、Apostille认证、指纹采集及亚太地区跨境文件服务。",
  trustPoints: ["已服务1,000+客户", "成立于2017年", "价格清晰", "专人支持"],
  services: [
    { label: "FBI背景调查", href: "/zh/services/#background-checks" },
    { label: "美国州级背景调查", href: "/zh/services/#background-checks" },
    { label: "RCMP / CPIC背景调查", href: "/zh/services/#background-checks" },
    { label: "Apostille认证服务", href: "/zh/services/#apostille" },
    { label: "学位Apostille认证", href: "/zh/services/#apostille" },
    { label: "TEFL证书Apostille认证", href: "/zh/services/#apostille" },
    { label: "指纹采集服务", href: "/zh/fingerprinting/" },
    { label: "翻译服务", href: "/zh/services/#apostille" },
  ],
  countries: [
    { label: "中国文件服务", href: "/zh/services/" },
    { label: "韩国文件准备指南", href: "/korea-apostille/" },
    { label: "日本文件准备指南", href: "/japan-apostille/" },
    { label: "越南文件认证服务", href: "/vietnam-authentication/" },
    { label: "泰国文件认证服务", href: "/thailand-authentication/" },
    { label: "加拿大背景调查服务", href: "/zh/services/#background-checks" },
    { label: "美国背景调查服务", href: "/zh/services/#background-checks" },
  ],
  resources: [
    { label: "中国文件准备", href: "/zh/services/" },
    { label: "常见问题", href: "/zh/#faq" },
    {
      label: "FBI背景调查办理指南",
      href: "/zh/insights/fbi-background-check-optimization-2026/",
    },
    { label: "指纹采集指南", href: "/zh/fingerprinting/" },
    { label: "文件资讯与新闻", href: "/zh/insights/" },
    { label: "联系Hive Digital", href: "/zh/contact/" },
    { label: "隐私政策", href: "/zh/privacy/" },
  ],
  popularSearches: [
    { label: "首尔FBI指纹采集", href: "/korea-apostille/#fingerprinting" },
    { label: "上海指纹采集服务", href: "/zh/shanghai-fingerprinting/" },
    { label: "FBI背景调查", href: "/zh/services/#background-checks" },
    { label: "学位Apostille认证", href: "/zh/services/#apostille" },
    { label: "中国工作文件准备", href: "/zh/services/#china-visa" },
    { label: "中国无犯罪记录证明", href: "/zh/services/#china-pcc" },
    { label: "越南文件认证", href: "/vietnam-authentication/" },
    { label: "韩国文件服务", href: "/korea-apostille/" },
  ],
  connect: [
    {
      label: "Hive Digital领英主页",
      href: "https://www.linkedin.com/company/hive-relocations/",
      icon: Building2,
      external: true,
    },
    {
      label: "Hive Digital脸书主页",
      href: "https://www.facebook.com/share/1DAH4SuAr9/?mibextid=wwXIfr",
      icon: ThumbsUp,
      external: true,
    },
    { label: "微信", href: "/zh/contact/#wechat", icon: MessageCircle },
    { label: "KakaoTalk", href: "/contact/#kakao", icon: MessageCircle },
    {
      label: "WhatsApp",
      href: "https://wa.me/8613764322474",
      icon: MessageCircle,
      external: true,
    },
    { label: "sales@hiverelo.com", href: "mailto:sales@hiverelo.com", icon: Mail },
    { label: "+86 137 6432 2474", href: "tel:+8613764322474", icon: Phone },
  ] satisfies ConnectLink[],
  labels: {
    popularEyebrow: "探索Hive",
    popularHeading: "热门搜索",
    popularDescription: "快速查找客户最常使用的文件服务和目的地指南。",
    services: "服务",
    countries: "国家与地区",
    resources: "资源",
    connect: "联系Hive",
    trustpilot: "Trustpilot 4.9/5优秀评分",
    clients: "已服务1,000+客户",
    since: "自2017年服务亚太地区",
    serving: "服务覆盖中国、韩国、日本及亚太地区。",
    rights: "Hive Digital Consulting。保留所有权利。",
  },
};

const linkClassName =
  "text-sm leading-relaxed text-hive-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-hive-bg rounded-sm";

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link href={link.href} className={linkClassName}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isChinese = pathname?.startsWith("/zh") ?? false;
  const content = isChinese ? chineseContent : englishContent;
  const currentYear = new Date().getUTCFullYear();

  return (
    <>
      <section
        className="border-t border-hive-border bg-hive-surface px-6 py-14 lg:px-12 lg:py-16"
        aria-labelledby="popular-searches-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              {content.labels.popularEyebrow}
            </p>
            <h2
              id="popular-searches-heading"
              className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              {content.labels.popularHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-hive-muted">
              {content.labels.popularDescription}
            </p>
          </div>
          <nav aria-label={content.labels.popularHeading}>
            <ul className="flex flex-wrap gap-3">
              {content.popularSearches.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full border border-hive-border bg-hive-bg px-4 py-2 text-sm font-medium text-hive-muted transition-colors hover:border-red-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <aside
        className="border-y border-hive-border bg-hive-elevated px-6 py-5 lg:px-12"
        aria-label={isChinese ? "信任与服务记录" : "Trust and service record"}
      >
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3 sm:divide-x sm:divide-hive-border">
          <a
            href={trustpilotHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:justify-center"
          >
            <Star className="h-4 w-4 fill-red-500 text-red-500" aria-hidden="true" />
            {content.labels.trustpilot}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <div className="flex items-center gap-3 text-sm font-semibold text-white sm:justify-center">
            <UsersRound className="h-4 w-4 text-red-500" aria-hidden="true" />
            {content.labels.clients}
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold text-white sm:justify-center">
            <CalendarCheck className="h-4 w-4 text-red-500" aria-hidden="true" />
            {content.labels.since}
          </div>
        </div>
      </aside>

      <footer className="bg-hive-bg pb-20 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.55fr_repeat(4,minmax(0,1fr))] lg:gap-7">
            <div className="md:col-span-2 lg:col-span-1 lg:pr-5">
              <Link
                href={isChinese ? "/zh/" : "/"}
                className="inline-flex items-center text-2xl font-black tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={isChinese ? "Hive Digital中文首页" : "Hive Digital home"}
              >
                Hive <span className="ml-1 text-red-500">Digital</span>
              </Link>
              <p className="mt-5 text-sm leading-6 text-hive-muted">
                {content.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {content.trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-hive-muted"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <nav
              className="border-t border-hive-border pt-7 md:border-t-0 md:pt-0 lg:border-l lg:pl-6"
              aria-labelledby="footer-services-heading"
            >
              <h2
                id="footer-services-heading"
                className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                {content.labels.services}
              </h2>
              <FooterLinkList links={content.services} />
            </nav>

            <nav
              className="border-t border-hive-border pt-7 md:border-t-0 md:pt-0 lg:border-l lg:pl-6"
              aria-labelledby="footer-countries-heading"
            >
              <h2
                id="footer-countries-heading"
                className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                {content.labels.countries}
              </h2>
              <FooterLinkList links={content.countries} />
            </nav>

            <nav
              className="border-t border-hive-border pt-7 md:border-t-0 md:pt-0 lg:border-l lg:pl-6"
              aria-labelledby="footer-resources-heading"
            >
              <h2
                id="footer-resources-heading"
                className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                {content.labels.resources}
              </h2>
              <FooterLinkList links={content.resources} />
            </nav>

            <nav
              className="border-t border-hive-border pt-7 md:border-t-0 md:pt-0 lg:border-l lg:pl-6"
              aria-labelledby="footer-connect-heading"
            >
              <h2
                id="footer-connect-heading"
                className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                {content.labels.connect}
              </h2>
              <ul className="space-y-3">
                {content.connect.map((link) => {
                  const Icon = link.icon;
                  const children = (
                    <>
                      <Icon className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                      <span>{link.label}</span>
                      {link.external && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </>
                  );

                  return (
                    <li key={link.label}>
                      {link.external || link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className={`${linkClassName} inline-flex items-center gap-2.5`}
                        >
                          {children}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={`${linkClassName} inline-flex items-center gap-2.5`}
                        >
                          {children}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-7 rounded-xl border border-hive-border bg-hive-surface p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <ShieldCheck className="h-4 w-4 text-red-500" aria-hidden="true" />
                  {isChinese ? "专人咨询" : "Personal consultation"}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-hive-dim">
                  {isChinese
                    ? "先确认文件要求，再开始办理。"
                    : "Confirm the document requirements before processing begins."}
                </p>
              </div>
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-hive-border pt-7 text-xs text-hive-dim md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {currentYear} {content.labels.rights}
            </p>
            <p>{content.labels.serving}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
