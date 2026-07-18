import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Fingerprint,
  Globe2,
  GraduationCap,
  Landmark,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "亚洲指纹采集解决方案 | Hive Digital",
  description:
    "面向中国、韩国、日本及亚太地区的FBI、RCMP和国际背景调查指纹采集支持。预约前先确认正确的采集和提交方式。",
  alternates: {
    canonical: "/zh/fingerprinting/",
    languages: {
      en: "/fingerprinting/",
      "zh-CN": "/zh/fingerprinting/",
    },
  },
  openGraph: {
    title: "亚洲指纹采集解决方案 | Hive Digital",
    description:
      "为亚洲地区的FBI、RCMP及其他国际背景调查要求提供指纹采集咨询与流程支持。",
  },
};

const coverage = [
  {
    name: "中国",
    description:
      "上海是我们的主要中国服务地点，部分其他城市也可提供协助。采集方式和预约安排会因地点而异。",
    href: "/zh/shanghai-fingerprinting/",
    linkLabel: "了解中国指纹采集服务",
  },
  {
    name: "韩国",
    description:
      "我们协助申请人确认背景调查所需的指纹格式和采集路径。当地可选方案会因地点而异。",
    status: "国家指南规划中",
  },
  {
    name: "日本",
    description:
      "指纹采集流程取决于接收机构、记录类型和申请人所在地。采集前应先确认具体要求。",
    status: "国家指南规划中",
  },
  {
    name: "亚太其他地区",
    description:
      "对于其他地点，Hive会先审核接收机构的说明，并在可行的情况下协助确定合适的采集路径。",
    status: "咨询您所在的地区",
  },
];

const useCases = [
  { label: "海外就业", icon: BriefcaseBusiness },
  { label: "教师职位", icon: GraduationCap },
  { label: "移民", icon: Globe2 },
  { label: "专业执照", icon: BadgeCheck },
  { label: "签证申请", icon: Plane },
  { label: "永久居留", icon: Landmark },
];

export default function ChineseFingerprintingAsiaPage() {
  return (
    <main className="min-h-screen bg-hive-bg px-6 pb-16 pt-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8" aria-label="面包屑导航">
          <Link
            href="/zh/services/"
            className="text-sm text-hive-muted transition-colors hover:text-white"
          >
            &larr; 全部服务
          </Link>
        </nav>

        <section className="mb-16" aria-labelledby="page-title">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
              区域指纹采集支持
            </span>
          </div>
          <h1
            id="page-title"
            className="mb-6 max-w-5xl text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
          >
            亚洲指纹采集解决方案
          </h1>
          <p className="mb-8 max-w-4xl text-lg leading-relaxed text-hive-muted">
            Hive协助在亚洲生活或旅行、并需要办理国际犯罪背景调查的客户准备指纹。正确的采集方式取决于所需记录、接收机构和申请人所在地，因此我们会先确认这些信息，再建议处理流程。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/zh/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
            >
              确认您的要求
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#coverage"
              className="inline-flex items-center justify-center rounded-xl border border-hive-border px-6 py-3 font-semibold text-white transition-colors hover:border-red-500/50"
            >
              查看区域覆盖
            </a>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="primary-services">
          <div className="mb-8 max-w-3xl">
            <h2
              id="primary-services"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              背景调查指纹采集
            </h2>
            <p className="leading-relaxed text-hive-muted">
              指纹要求由出具背景调查记录的机构决定。Hive会在安排预约前，协助确认合适的采集和提交路径。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-hive-border bg-hive-surface p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <ShieldCheck className="h-6 w-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                FBI背景调查（美国）
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-hive-muted">
                FBI身份历史摘要属于指纹类背景调查。Hive协助亚洲地区的申请人根据当前所在地了解可行的采集和提交方式。
              </p>
              <Link
                href="/zh/services/#background-checks"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-white"
              >
                了解背景调查支持
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>

            <article className="rounded-2xl border border-hive-border bg-hive-surface p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <Fingerprint className="h-6 w-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                RCMP / CPIC犯罪记录调查（加拿大）
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-hive-muted">
                加拿大指纹类犯罪记录调查通常采用RCMP认证流程。CPIC及其他记录类型可能不同，因此Hive会在采集指纹前确认所需的加拿大调查类型。
              </p>
              <Link
                href="/zh/services/#background-checks"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-white"
              >
                确认加拿大记录类型
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <aside className="mb-16 rounded-2xl border border-red-500/20 bg-red-600/10 p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
              <Fingerprint className="h-6 w-6 text-red-400" aria-hidden="true" />
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                采集指纹前先确认背景调查类型
              </h2>
              <p className="max-w-4xl leading-relaxed text-hive-muted">
                指纹采集机构负责采集指纹，但接收机构决定可接受的表格、格式和提交方式。请先告知Hive您当前的位置、目的地、所需记录和截止日期，我们会建议与您情况相关的必要步骤。
              </p>
            </div>
          </div>
        </aside>

        <section id="coverage" className="mb-16 scroll-mt-24" aria-labelledby="coverage-title">
          <div className="mb-8 max-w-3xl">
            <h2
              id="coverage-title"
              className="mb-3 flex items-center gap-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              <MapPin className="h-6 w-6 text-red-500" aria-hidden="true" />
              区域覆盖
            </h2>
            <p className="leading-relaxed text-hive-muted">
              指纹采集选项和流程会因国家、城市、服务类型及接收机构而异。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {coverage.map((region) => (
              <article
                key={region.name}
                className="rounded-2xl border border-hive-border bg-hive-surface p-7"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {region.name}
                </h3>
                <p className="text-sm leading-relaxed text-hive-muted">
                  {region.description}
                </p>
                {region.href ? (
                  <Link
                    href={region.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-white"
                  >
                    {region.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex rounded-full border border-hive-border bg-hive-bg px-3 py-1 text-xs font-medium text-hive-dim">
                    {region.status}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="use-cases">
          <div className="mb-8 max-w-3xl">
            <h2
              id="use-cases"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              常见用途
            </h2>
            <p className="leading-relaxed text-hive-muted">
              所需的背景调查和指纹采集方式取决于用途及要求提供记录的机构。
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-hive-border bg-hive-surface p-5 text-sm font-medium text-white"
              >
                <Icon className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-hive-border bg-hive-surface p-8 text-center md:p-10">
          <h2 className="mb-3 text-2xl font-bold uppercase tracking-tight text-white">
            安排指纹采集前先咨询
          </h2>
          <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-hive-muted">
            请告知我们您需要的背景调查类型和目前所在地。我们会在您预约采集前，确认相关指纹要求和可行的下一步。
          </p>
          <Link
            href="/zh/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
          >
            联系Hive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
