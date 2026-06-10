import { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们 | Hive Digital",
  description: "联系Hive Digital获取文件认证服务咨询。微信/WhatsApp/邮件，2小时内回复。",
};

export default function ChineseContactPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            联系我们
          </h1>
          <p className="text-hive-muted text-lg max-w-2xl mx-auto">
            准备好开始了吗？联系我们获取免费咨询和定制报价。我们的团队通常在2小时内回复。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* WeCom/WeChat */}
          <div className="bg-hive-surface border border-hive-accent/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-hive-accent text-hive-bg text-xs font-bold uppercase px-3 py-1 rounded-bl-xl">
              最快回复
            </div>
            <div className="w-14 h-14 rounded-2xl bg-hive-accent/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-hive-accent" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              企业微信 / 微信
            </h2>
            <p className="text-hive-muted text-sm mb-6">
              扫描二维码添加我们的企业微信/微信，获取最快回复。
            </p>
            <div className="relative w-44 h-44 mx-auto rounded-xl overflow-hidden border border-hive-border">
              <Image
                src="/wechat-qr.jpg"
                alt="企业微信二维码"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-hive-dim text-xs mt-4">
              用户名: HiveRelo (扫描验证)
            </p>
          </div>

          {/* WhatsApp Business */}
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              WhatsApp Business
            </h2>
            <p className="text-hive-muted text-sm mb-6">
              通过WhatsApp Business联系我们进行国际咨询。
            </p>
            <div className="relative w-44 h-44 mx-auto rounded-xl overflow-hidden border border-hive-border">
              <Image
                src="/whatsapp-qr.jpg"
                alt="WhatsApp Business 二维码"
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
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 text-center">
            <div className="w-11 h-11 rounded-xl bg-hive-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-hive-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">电子邮件</h3>
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
            <h3 className="text-white font-semibold mb-1">电话</h3>
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
            <h3 className="text-white font-semibold mb-1">回复时间</h3>
            <p className="text-hive-muted text-sm">2小时内</p>
          </div>
        </div>

        {/* Shanghai office */}
        <div className="bg-hive-surface border border-hive-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
            上海办公室
          </h2>
          <p className="text-hive-muted mb-2">
            文件可以预约后亲自到我们上海办公室领取。
          </p>
          <p className="text-hive-dim text-sm">
            联系我们安排取件或投递。
          </p>
        </div>
      </div>
    </main>
  );
}
