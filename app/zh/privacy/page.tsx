import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私与数据处理 | Hive Digital",
  description: "了解Hive Digital如何处理网站咨询及文件服务相关的个人信息。",
  alternates: {
    canonical: "/zh/privacy/",
    languages: {
      en: "/privacy/",
      "zh-CN": "/zh/privacy/",
    },
  },
  openGraph: {
    title: "隐私与数据处理 | Hive Digital",
    description: "Hive Digital处理网站咨询及文件服务相关个人信息的说明。",
    type: "website",
  },
};

const sections = [
  {
    title: "您主动提供的信息",
    content: [
      "当您联系Hive Digital时，您可能会提供姓名、联系方式、目的地国家、文件类型、时间要求及其他用于了解咨询需求的信息。",
      "本网站不提供文件上传表单。在Hive确认合适的传输方式并说明所需材料之前，请勿发送护照、指纹、背景调查报告、身份证件号码或其他敏感记录。",
    ],
  },
  {
    title: "信息的使用方式",
    content: [
      "我们可能使用信息来回复咨询、判断文件要求、准备服务建议或报价、提供已约定的服务、沟通进度、保存业务记录、保护系统以及履行适用的法律义务。",
      "Hive致力于仅收集与相关咨询或服务合理所需的信息。",
    ],
  },
  {
    title: "联系渠道与服务提供方",
    content: [
      "本网站提供电子邮件、电话、WhatsApp及其他通讯服务的链接。通过这些渠道发送的信息也受相应服务提供方的条款和隐私规则约束。",
      "为提供已约定的服务，我们可能在必要范围内与选定的办理合作方、快递、翻译人员、专业顾问、技术服务提供方或相关主管机构共享信息。Hive不出售个人信息。",
    ],
  },
  {
    title: "网站技术数据",
    content: [
      "托管和安全系统可能会处理有限的技术信息，例如IP地址、浏览器类型、访问页面、时间记录以及错误或安全日志。这些信息可能用于网站运营、安全保护和故障排查。",
    ],
  },
  {
    title: "保存与安全",
    content: [
      "信息仅在咨询、服务、业务记录、争议处理、安全或适用法律要求所合理需要的期限内保存。具体保存期限可能因文件服务和司法辖区而异。",
      "Hive采取合理的管理和技术保护措施，但任何互联网传输或存储方式都无法保证绝对安全。",
    ],
  },
  {
    title: "跨境处理",
    content: [
      "跨境文件服务可能需要在多个国家或地区处理信息。在确有必要时，Hive会尽量将共享信息限制在完成已约定服务所需的范围内。",
    ],
  },
  {
    title: "您的请求",
    content: [
      "您可以联系Hive查询与您的咨询相关的个人信息，或申请更正或删除。因法律、安全、会计或服务记录需要，部分信息可能必须继续保存。",
    ],
  },
];

export default function ChinesePrivacyPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <article className="max-w-4xl mx-auto">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
          更新日期：2026年7月14日
        </p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          隐私与数据处理
        </h1>
        <p className="text-hive-muted text-lg leading-relaxed mb-12">
          Hive Digital Consulting协助客户判断并完成跨境文件流程。本说明介绍通过本网站及相关咨询渠道收到的信息可能如何被处理。本说明不替代特定服务可能适用的其他通知或协议。
        </p>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-hive-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 bg-hive-elevated border border-red-500/20 rounded-2xl p-6 lg:p-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-3">
            联系方式
          </h2>
          <p className="text-hive-muted leading-relaxed mb-4">
            如有隐私问题或请求，请通过以下邮箱联系Hive Digital Consulting：
          </p>
          <a
            href="mailto:sales@hiverelo.com"
            className="text-red-400 hover:text-red-300 font-semibold transition-colors"
          >
            sales@hiverelo.com
          </a>
          <p className="text-hive-dim text-sm mt-5">
            当网站、服务流程或适用要求发生变化时，本说明可能会更新。最新版本及更新日期将发布在本页面。
          </p>
        </section>
      </article>
    </main>
  );
}
