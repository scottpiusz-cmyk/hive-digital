"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const featuredTestimonial = {
  name: "James Whitfield",
  title: "国际学校人力资源总监",
  text: "Hive Digital为我们中国校区的教师背景调查和公证认证全程提供服务。周转快，通过企业微信沟通非常顺畅，每一份文件都完美处理。",
};

export default function ZhTrustBar() {
  return (
    <section className="relative z-10 mt-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />)}
              </div>
              <div>
                <div className="text-white font-bold text-sm">4.9 / 5 on Trustpilot</div>
                <div className="text-hive-dim text-xs">来自100+验证评价</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10" />
            <div className="flex items-start gap-3 max-w-lg">
              <Quote className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" />
              <div>
                <p className="text-hive-muted text-sm leading-relaxed">&ldquo;{featuredTestimonial.text}&rdquo;</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-white text-xs font-semibold">{featuredTestimonial.name}</span>
                  <span className="text-hive-dim text-xs">{featuredTestimonial.title}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
