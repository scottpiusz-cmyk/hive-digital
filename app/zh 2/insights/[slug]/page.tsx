import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  User,
  FileText,
} from "lucide-react";
import {
  getZhInsightBySlug,
  getAllZhInsightSlugs,
  type ZhInsightArticle,
} from "@/lib/zh-insights-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllZhInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getZhInsightBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Hive Digital 资讯`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: article.author,
      locale: "zh_CN",
    },
  };
}

function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let key = 0;

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="space-y-2 mb-6">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "") continue;

    if (trimmed === "---") {
      flushList();
      elements.push(<hr key={`hr-${key++}`} className="border-hive-border my-10" />);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      const heading = trimmed.replace("## ", "");
      elements.push(
        <h2 key={`h2-${key++}`} className="text-2xl font-bold text-white mt-12 mb-5 uppercase tracking-tight">
          {heading}
        </h2>
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      const heading = trimmed.replace("### ", "");
      elements.push(
        <h3 key={`h3-${key++}`} className="text-xl font-semibold text-white mt-8 mb-4">
          {heading}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith("|")) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("**") && trimmed.includes(":**")) {
      flushList();
      const text = trimmed.replace(/\*\*/g, "");
      elements.push(
        <p key={`p-${key++}`} className="text-hive-text font-semibold mb-2 mt-6">{text}</p>
      );
      continue;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      const item = trimmed.replace(/^[-*]\s+/, "");
      const parsed = item.split(/(\*\*.*?\*\*)/).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      listItems.push(
        <li key={`li-${key++}`} className="flex items-start gap-3 text-hive-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
          <span>{parsed}</span>
        </li>
      );
      continue;
    }

    if (trimmed.startsWith("- [")) {
      inList = true;
      const item = trimmed.replace(/^- \[[x ]\]\s+/, "");
      listItems.push(
        <li key={`li-${key++}`} className="flex items-start gap-3 text-hive-muted">
          <span className="w-4 h-4 rounded border border-red-500/50 flex items-center justify-center shrink-0 mt-0.5">
            {trimmed.includes("[x]") && <span className="w-2 h-2 rounded-sm bg-red-500" />}
          </span>
          <span>{item}</span>
        </li>
      );
      continue;
    }

    flushList();
    const parsed = trimmed.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    elements.push(
      <p key={`p-${key++}`} className="text-hive-muted leading-relaxed mb-5">{parsed}</p>
    );
  }

  flushList();
  return <>{elements}</>;
}

function StickySidebar({ article }: { article: ZhInsightArticle }) {
  return (
    <aside className="space-y-6">
      <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-hive-muted">相关服务</h3>
        </div>
        <div className="space-y-2">
          {article.relatedPipelines.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-hive-bg border border-hive-border hover:border-red-500/30 transition-colors group"
            >
              <span className="text-sm text-hive-muted group-hover:text-white transition-colors">{link.label}</span>
              <ArrowRight className="w-4 h-4 text-hive-dim group-hover:text-red-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-hive-surface border border-red-500/30 rounded-2xl p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="text-white font-semibold mb-2">对此指南有疑问？</h3>
        <p className="text-hive-muted text-sm mb-4">我们的合规团队可通过企业微信/微信提供实时指导。</p>
        <div className="relative w-32 h-32 mx-auto rounded-xl overflow-hidden border border-hive-border mb-4">
          <Image src="/wechat-qr.jpg" alt="企业微信二维码" fill className="object-cover" />
        </div>
        <p className="text-hive-dim text-xs">扫码咨询 — 2小时内回复</p>
      </div>

      <Link
        href="/zh/insights/"
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-hive-border text-hive-muted hover:text-white hover:border-red-500/30 transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        全部资讯
      </Link>
    </aside>
  );
}

export default async function ZhInsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getZhInsightBySlug(slug);
  if (!article) notFound();

  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/zh/insights/"
          className="inline-flex items-center gap-2 text-hive-muted hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回资讯
        </Link>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <article>
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-hive-dim text-sm">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />{article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />{article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />{article.readTime}
                </span>
              </div>
            </header>

            <div className="h-px bg-hive-border mb-10" />

            <div className="prose-hive">
              <ArticleContent content={article.content} />
            </div>

            <div className="mt-16 bg-hive-surface border border-hive-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">需要文件合规帮助？</h3>
              <p className="text-hive-muted mb-6">
                Hive Digital管理21+国家的文件认证和工作许可文件。联系我们获取定制合规评估。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">
                  发送邮件
                </a>
                <Link href="/zh/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">
                  联系页面
                </Link>
              </div>
            </div>
          </article>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <StickySidebar article={article} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
