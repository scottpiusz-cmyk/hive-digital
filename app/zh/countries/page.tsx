import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "目的地文件服务 | 韩国日本越南泰国文件认证 | Hive Digital",
  description:
    "查看韩国、日本、越南和泰国的文件Apostille、认证与合法化服务入口。",
  alternates: {
    canonical: "/zh/countries/",
    languages: {
      en: "/countries/",
      "zh-CN": "/zh/countries/",
    },
  },
  openGraph: {
    title: "目的地文件服务 | Hive Digital",
    description: "按目的地查找韩国、日本、越南和泰国的文件认证服务。",
    type: "website",
  },
};

const countries = [
  {
    name: "韩国",
    href: "/korea-apostille/",
    service: "Apostille服务",
    description: "用于韩国的个人、教育及公司文件准备与Apostille支持。",
  },
  {
    name: "日本",
    href: "/japan-apostille/",
    service: "Apostille服务",
    description: "为计划在日本使用的文件提供Apostille及文件准备支持。",
  },
  {
    name: "越南",
    href: "/vietnam-authentication/",
    service: "文件认证服务",
    description: "为计划在越南使用的文件提供认证与合法化流程指导。",
  },
  {
    name: "泰国",
    href: "/thailand-authentication/",
    service: "文件认证服务",
    description: "为计划在泰国使用的文件提供认证与合法化支持。",
  },
];

export default function ChineseCountriesPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
            目的地指南
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mt-3 mb-5">
            国家与目的地文件服务
          </h1>
          <p className="text-hive-muted text-lg leading-relaxed">
            正确的文件流程取决于签发国家、使用目的地以及接收机构的具体要求。
            请先选择目的地，再联系我们审核您的具体情况，然后决定办理方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <Link
              key={country.href}
              href={country.href}
              hrefLang="en"
              className="group bg-hive-surface border border-hive-border rounded-2xl p-7 hover:border-red-500/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {country.service}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {country.name}
                  </h2>
                  <p className="text-hive-muted text-sm leading-relaxed mb-5">
                    {country.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:text-red-400 transition-colors">
                    查看英文目的地指南 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-hive-elevated border border-hive-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">
            不确定应采用哪种流程？
          </h2>
          <p className="text-hive-muted max-w-2xl mx-auto mb-6">
            请告诉我们文件签发国家、目的地、文件类型和接收机构，我们会协助判断合适的办理路径。
          </p>
          <Link
            href="/zh/contact/"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
          >
            咨询文件方案
          </Link>
        </div>
      </div>
    </main>
  );
}
