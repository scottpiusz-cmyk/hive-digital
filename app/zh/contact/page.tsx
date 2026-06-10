import { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们 | Hive Digital",
  description: "联系Hive Digital获取文件认证服务咨询。微信/WhatsApp/邮件，2小时内回复。",
};

export default function ChineseContactPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          联系<span className="text-red-500">我们</span>
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl mb-12">
          无论您需要Apostille认证、使馆公证、背景调查还是其他文件服务，我们随时为您提供帮助。
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">微信/企业微信</h2>
            </div>
            <p className="text-hive-muted text-sm mb-4">
              最快速的联系方式。扫描下方二维码添加我们的企业微信，通常在2小时内回复。
            </p>
            <div className="bg-hive-bg rounded-xl p-4 text-center">
              <div className="w-32 h-32 bg-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-hive-dim text-xs">WeCom QR</span>
              </div>
              <p className="text-hive-dim text-xs">扫描二维码添加企业微信</p>
            </div>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">电子邮件</h2>
            </div>
            <p className="text-hive-muted text-sm mb-4">
              发送邮件至我们的销售团队，详细说明您的文件认证需求。
            </p>
            <a 
              href="mailto:sales@hiverelo.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
            >
              sales@hiverelo.com
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">办公地址</h2>
            </div>
            <p className="text-hive-muted text-sm">
              中国上海市<br />
              服务覆盖：上海、北京、成都、深圳、广州等
            </p>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">工作时间</h2>
            </div>
            <p className="text-hive-muted text-sm">
              周一至周五：9:00 - 18:00 (北京时间)<br />
              紧急咨询：7×24小时微信响应
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
