import { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "\u8054\u7cfb\u6211\u4eec | Hive Digital",
  description: "\u8054\u7cfbHive Digital\u83b7\u53d6\u6587\u4ef6\u8ba4\u8bc1\u670d\u52a1\u54a8\u8be2\u3002\u5fae\u4fe1/WhatsApp/\u90ae\u4ef6\uff0c2\u5c0f\u65f6\u5185\u56de\u590d\u3002",
};

export default function ChineseContactPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          \u8054\u7cfb<span className="text-red-500">\u6211\u4eec</span>
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl mb-12">
          \u65e0\u8bba\u60a8\u9700\u8981Apostille\u8ba4\u8bc1\u3001\u4f7f\u9986\u516c\u8bc1\u3001\u80cc\u666f\u8c03\u67e5\u8fd8\u662f\u5176\u4ed6\u6587\u4ef6\u670d\u52a1\uff0c\u6211\u4eec\u968f\u65f6\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">\u5fae\u4fe1/\u4f01\u4e1a\u5fae\u4fe1</h2>
            </div>
            <p className="text-hive-muted text-sm mb-4">
              \u6700\u5feb\u901f\u7684\u8054\u7cfb\u65b9\u5f0f\u3002\u626b\u63cf\u4e0b\u65b9\u4e8c\u7ef4\u7801\u6dfb\u52a0\u6211\u4eec\u7684\u4f01\u4e1a\u5fae\u4fe1\uff0c\u901a\u5e38\u57282\u5c0f\u65f6\u5185\u56de\u590d\u3002
            </p>
            <div className="bg-hive-bg rounded-xl p-4 text-center">
              <div className="relative w-32 h-32 mx-auto mb-2">
                <Image
                  src="/wechat-qr.jpg"
                  alt="\u4f01\u4e1a\u5fae\u4fe1\u4e8c\u7ef4\u7801"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="text-hive-dim text-xs">\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u4f01\u4e1a\u5fae\u4fe1</p>
            </div>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">\u7535\u5b50\u90ae\u4ef6</h2>
            </div>
            <p className="text-hive-muted text-sm mb-4">
              \u53d1\u9001\u90ae\u4ef6\u81f3\u6211\u4eec\u7684\u9500\u552e\u56e2\u961f\uff0c\u8be6\u7ec6\u8bf4\u660e\u60a8\u7684\u6587\u4ef6\u8ba4\u8bc1\u9700\u6c42\u3002
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
              <h2 className="text-lg font-bold text-white">\u529e\u516c\u5730\u5740</h2>
            </div>
            <p className="text-hive-muted text-sm">
              \u4e2d\u56fd\u4e0a\u6d77\u5e02<br />
              \u670d\u52a1\u8986\u76d6\uff1a\u4e0a\u6d77\u3001\u5317\u4eac\u3001\u6210\u90fd\u3001\u6df1\u5733\u3001\u5e7f\u5dde\u7b49
            </p>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">\u5de5\u4f5c\u65f6\u95f4</h2>
            </div>
            <p className="text-hive-muted text-sm">
              \u5468\u4e00\u81f3\u5468\u4e94\uff1a9:00 - 18:00 (\u5317\u4eac\u65f6\u95f4)<br />
              \u7d27\u6025\u54a8\u8be2\uff1a7\u00d724\u5c0f\u65f6\u5fae\u4fe1\u54cd\u5e94
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
