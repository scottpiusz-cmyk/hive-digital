module.exports=[71306,(a,b,c)=>{b.exports=a.r(18622)},79847,a=>{a.n(a.i(3343))},9185,a=>{a.n(a.i(29432))},72842,a=>{a.n(a.i(75164))},54897,a=>{a.n(a.i(30106))},56157,a=>{a.n(a.i(18970))},94331,a=>{a.n(a.i(60644))},15988,a=>{a.n(a.i(56952))},25766,a=>{a.n(a.i(77341))},29725,a=>{a.n(a.i(94290))},5785,a=>{a.n(a.i(90588))},74793,a=>{a.n(a.i(33169))},85826,a=>{a.n(a.i(37111))},21565,a=>{a.n(a.i(41763))},65911,a=>{a.n(a.i(8950))},25128,a=>{a.n(a.i(91562))},40781,a=>{a.n(a.i(49670))},69411,a=>{a.n(a.i(75700))},63081,a=>{a.n(a.i(276))},62837,a=>{a.n(a.i(40795))},34607,a=>{a.n(a.i(11614))},96338,a=>{a.n(a.i(21751))},50642,a=>{a.n(a.i(12213))},32242,a=>{a.n(a.i(22693))},88530,a=>{a.n(a.i(10531))},93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},8583,a=>{a.n(a.i(1082))},38534,a=>{a.n(a.i(98175))},70408,a=>{a.n(a.i(9095))},22922,a=>{a.n(a.i(96772))},78294,a=>{a.n(a.i(71717))},16625,a=>{a.n(a.i(85034))},88648,a=>{a.n(a.i(68113))},51914,a=>{a.n(a.i(66482))},25466,a=>{a.n(a.i(91505))},8174,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.mjs <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/node_modules/lucide-react/dist/esm/Icon.mjs <module evaluation>","default")},90697,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.mjs from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/node_modules/lucide-react/dist/esm/Icon.mjs","default")},53808,a=>{"use strict";a.i(8174);var b=a.i(90697);a.n(b)},92277,a=>{"use strict";var b=a.i(717);let c=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)};var d=a.i(53808);a.s(["default",0,(a,e)=>{let f=(0,b.forwardRef)(({className:f,...g},h)=>(0,b.createElement)(d.default,{ref:h,iconNode:e,className:((...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim())(`lucide-${c(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,f),...g}));return f.displayName=c(a),f}],92277)},62284,a=>{"use strict";let b=(0,a.i(92277).default)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]);a.s(["Clock",0,b],62284)},64240,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},790,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},84707,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"))},97647,a=>{"use strict";a.i(790);var b=a.i(84707);a.n(b)},95936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64240),g=a.r(7997),h=f._(a.r(97647));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},23351,a=>{"use strict";let b=(0,a.i(92277).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);a.s(["ArrowRight",0,b],23351)},64254,a=>{"use strict";let b=(0,a.i(92277).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);a.s(["Calendar",0,b],64254)},83693,a=>{"use strict";let b=[{slug:"china-vietnam-document-legalization-2026",title:"中越文件认证合规指南：2026年越南加入海牙 Apostille 公约后的新规",category:"法规解读",excerpt:"越南加入海牙 Apostille 公约及第219/2025/ND-CP号法令对文件合规流程产生重大影响。HR团队需要了解的关键变化。",date:"2026年4月",readTime:"8分钟阅读",author:"Hive Digital 合规团队",relatedPipelines:[{label:"美国到中国文件流程",href:"/zh/services/background-checks/"},{label:"中国到越南文件流程",href:"/zh/services/"},{label:"中国签证服务",href:"/zh/services/"}],content:`
## 法规转折点

越南的文件认证领域正在经历数十年来的最大变革。2025年12月31日，越南正式加入1961年《海牙 Apostille 公约》，该条约将于**2026年9月11日**生效。与此同时，**第219/2025/ND-CP号法令**（2025年8月7日生效）已取代此前的第152/2020/ND-CP号法令，在简化工作许可程序的同时保持严格的文件合规标准。

**范围说明：** 本指南专门讨论**中国签发文件**——即在中国签发的、需要在越南使用的文件（学位证明、结婚证明、营业执照等）。来自美国、加拿大、英国或其他国家的文件必须通过该国自己的 Apostille 或领事认证程序进行认证。

对于管理中越之间员工流动的HR团队和合规官，这些同时发生的变化需要对文件处理流程进行战略性的重新评估。

---

## 中国文件的当前领事认证流程（2026年9月前）

在 Apostille 公约生效之前，**在中国签发的**需要在越南合法使用的文件必须经历四步领事认证流程：

### 第一步：翻译与公证

中国文件必须在中国经许可的公证处翻译成越南语或英语。公证处认证真实副本或签名，制作包含以下内容的装订册：

- 公证证书
- 原始公证文件
- 认证翻译件

### 第二步：中国领事部门认证

经公证的文件册提交至**中国外交部领事司**或其授权的省级外事办公室进行认证。

处理时间：**5-10个工作日**

### 第三步：越南驻华使馆认证

在中国外交部认证完成后，文件提交至**越南驻北京大使馆**或**越南驻上海、广州、昆明总领事馆**进行领事认证。

处理时间：**7-15个工作日**

### 第四步：越南语公证翻译

到达越南后，所有经认证的文件必须由持牌越南翻译公证员进行**越南语公证翻译**。

---

## Apostille 过渡：2026年9月11日后的变化

越南加入 Apostille 公约后，四步领事认证流程将简化为**一步 Apostille 流程**：

1. 由文件签发国指定主管机构签发**Apostille**
2. 到达越南后进行**越南语公证翻译**

越南使馆认证步骤完全取消。

| 流程 | 2026年9月前 | 2026年9月后 |
|------|------------|------------|
| 步骤 | 4步认证链 | 1步 Apostille |
| 总时间 | 4-8周 | 2-4周 |
| 每份文件费用 | $200-400 | $80-150 |
| 使馆依赖 | 必需 | 取消 |

---

## 第三方国家文件：美国、加拿大等

**中国签发的文件**才适用上述流程。如果您的员工持有美国学位、加拿大犯罪记录证明、英国教学证书，或任何在中国境外签发的文件，该文件必须在其**签发国**进行认证。

**常见错误：** 我们常见HR团队试图将美国学位或FBI检查提交给中国外交部认证，或在越南驻北京大使馆认证加拿大文件。**这些提交将被拒绝。**

---

## 第219/2025/ND-CP号法令：工作许可文件要求

新法令引入了以下变化：

### 合并申请流程

取消了单独的"职位审批"要求，雇主现在提交一份**03表**，合并劳动力需求论证和工作许可申请。

### 强制认证文件

- **犯罪记录证明**——必须在申请提交前6个月内签发
- **教育 credentials**——学士学位或更高，在签发国认证
- **经验验证**——雇主推荐信
- **健康证明**——由MOLISA认可的越南医院签发

---

## FBI背景调查：关键路径项目

对于部署到越南的美国公民，FBI身份历史摘要检查是文件准备时间线中**最长前置时间**的项目，需要**12-14周**。

### 加速策略

- 使用**FBI批准的中介机构**进行电子提交——将处理时间缩短至2-3周
- 在录用后立即提交指纹
- 在申请过程中请求FBI检查 Apostille

---

## 推荐行动计划

### 部署前90天

- [ ] 启动FBI背景调查
- [ ] 开始学位 Apostille 或领事认证流程
- [ ] 验证护照有效期

### 部署前60天

- [ ] 提交犯罪记录证明进行认证
- [ ] 获取经验验证信

### 部署前30天

- [ ] 完成越南使馆领事认证（2026年9月前）
- [ ] 安排所有文件的越南语公证翻译

Hive Digital为中越走廊提供端到端文件认证服务。联系我们的合规团队获取定制评估。
    `},{slug:"fbi-background-check-optimization-2026",title:"缩短FBI背景调查周期：时间紧迫部署的中介机构策略",category:"流程优化",excerpt:"FBI身份历史摘要检查是大多数流动工作流程中最长的处理项目。了解如何通过批准的中介机构将14周压缩到3周。",date:"2026年3月",readTime:"5分钟阅读",author:"Hive Digital 运营团队",relatedPipelines:[{label:"美国到中国文件流程",href:"/zh/services/background-checks/"},{label:"背景调查服务",href:"/zh/services/background-checks/"},{label:"中国签证服务",href:"/zh/services/"}],content:`
## 瓶颈问题

FBI身份历史摘要检查（通常称为FBI背景调查）仍然是国际流动工作流程中最长的单项处理项目。标准FBI处理需要**12-14周**，实际上决定了任何需要美国犯罪记录证明的部署的关键路径。

---

## 了解中介机构渠道

FBI授权私营公司（称为"中介机构"）代表申请人以电子方式提交指纹背景调查。这些中介机构访问相同的FBI刑事司法数据库，但利用电子提交协议大幅缩短处理时间。

### 时间对比

| 渠道 | FBI处理时间 | 含Apostille总时间 |
|------|------------|------------------|
| 标准FBI直接提交 | 12-14周 | 16-20周 |
| FBI批准中介机构（电子） | 2-3周 | 6-8周 |
| FBI批准中介机构（加急） | 3-5个工作日 | 3-4周 |

### 中介机构工作流程

1. 在中介机构关联地点**采集指纹**（LiveScan或卡片扫描）
2. **电子传输**直接至FBI刑事司法信息服务部（CJIS）
3. 通过安全邮件或门户网站在**2-3周内**交付结果
4. 提供Apostille处理的纸质副本选项

---

## 选择中介机构：关键标准

**Apostille协调：** 中介机构是否提供捆绑Apostille服务？最高效的提供商在单一工作流程中管理FBI检查和美国国务院Apostille。

**国际运输：** 中介机构能否将Apostille文件直接运送到目的地国家？

**企业账户管理：** 对于每年处理多次检查的组织，中介机构提供专属客户经理、批量提交门户和合并开票。

---

## 企业HR团队最佳实践

### 1. 并行处理

在确定候选人后立即启动FBI检查——不要等待录用信或签证文件。

### 2. 批量处理

对于群组部署（如国际学校招聘季），批量提交FBI检查。中介机构提供批量折扣。

### 3. 文件追踪

为每位员工的文件管道维护集中追踪系统。

### 4. 应急计划

在所有部署时间线中预留2周缓冲时间。

---

## 成本分析

| 费用项目 | 直接FBI | 中介机构（标准） | 中介机构（加急） |
|---------|--------|----------------|-----------------|
| FBI检查费 | $18 | $50-75 | $125-175 |
| Apostille | $20 | $20 | $20 |
| 运输 | $15-30 | $15-30 | $15-30 |
| 中介费 | 无 | $35-50 | $75-100 |
| **总计** | **$53-68** | **$120-175** | **$235-325** |

虽然中介机构增加了成本，但时间节省通常证明溢价是合理的。延迟部署造成的损失远远超过中介费差额。

---

## Hive Digital的集成方法

Hive Digital将FBI背景调查管理作为综合背景调查服务的一部分：

- 基于您的时间线和预算**选择中介机构**
- 在全球LiveScan地点**预约指纹采集**
- 与**美国国务院协调Apostille**
- 在目的地国家外交使团进行**使馆认证**
- **安全快递**到目的地国家

联系我们讨论您的具体需求。
    `},{slug:"china-pcc-guide-2026",title:"获取中国无犯罪记录证明：前居民完整指南",category:"文件指南",excerpt:"如果您曾在中国居住，需要无犯罪记录证明用于移民或就业，以下是2026年关于公安局流程的一切须知。",date:"2026年2月",readTime:"6分钟阅读",author:"Hive Digital 中国团队",relatedPipelines:[{label:"中国无犯罪记录证明",href:"/zh/services/"},{label:"背景调查服务",href:"/zh/services/background-checks/"},{label:"Apostille与认证",href:"/zh/services/"}],content:`
## 什么是中国无犯罪记录证明？

无犯罪记录证明（PCC）——官方称为**"无犯罪记录证明"**——是由中国公安局（PSB）签发的官方文件，确认个人在中国居住期间无犯罪记录。

此文件用于：
- 越南、韩国、日本等国的工作许可申请
- 永久居留申请
- 专业执照续期
- 移民和公民身份流程

---

## 资格要求

获取中国PCC，申请人必须提供：

1. **在中国居住时间证明**——租赁合同、雇主信或居留许可
2. **居住期间持有的有效签证副本**——工作签证（Z）、商务签证（M）或其他长期签证
3. **居留许可证明**——当地派出所签发的居留许可贴纸或登记证明
4. **当前护照复印件**和联系信息

**重要：** 旅游签证（L）持有者通常无法获得PCC，除非能证明特殊情况下的长期居住。

---

## 各城市具体流程

### 北京

- **签发机构：** 北京市公安局
- **处理时间：** 15-20个工作日
- **申请方式：** 亲自到公安局出入境管理处；或通过授权代表持委托书

### 上海

- **签发机构：** 上海市公安局
- **处理时间：** 10-15个工作日
- **申请方式：** 通过"随申办"APP在线预申请，然后亲自验证

### 深圳

- **签发机构：** 深圳市公安局
- **处理时间：** 10-15个工作日
- **申请方式：** 亲自到福田或南山公安局出入境办事处

### 其他城市

处理可用性因城市而异。二线城市（杭州、成都、南京、武汉）通常提供PCC服务，而小城市处理外国国民请求的经验可能有限。

---

## 四步流程

### 第一步：文件准备

收集所有证明居住、签证状态和身份的文件。

### 第二步：公安局申请提交

向相关公安局出入境管理处提交申请。对于已不在中国的申请人，Hive Digital可作为授权代表全权代办。

### 第三步：证书领取

签发后，PCC必须亲自（或由授权代表）领取。证书自签发日起通常**6个月**内有效。

### 第四步：公证和翻译

用于国际用途时，PCC必须：
1. 由中国公证处公证
2. 由中国外事办公室认证
3. 由目的地国家使馆认证
4. 翻译成目的地国家语言并公证

---

## 常见挑战

**居住期间空档：** 如果您更换雇主或有居留许可空档，公安局可能要求额外文件解释空档。

**姓名差异：** 如果您在中国居住期间更新了护照且护照号码变更，提供新旧护照并附书面解释。

**雇主已不存在：** 如果前雇主已关闭或搬迁，提供前雇主的营业执照号码（如有）和保留的任何雇佣文件。

---

## 时间线总结

| 阶段 | 时间线 |
|------|--------|
| 文件准备 | 3-5天 |
| 公安局处理 | 10-20个工作日 |
| 公证 | 3-5个工作日 |
| 外事办认证 | 5-10个工作日 |
| 使馆认证 | 7-15个工作日 |
| 翻译 | 3-5个工作日 |
| **总计** | **6-10周** |

---

## Hive Digital的中国PCC服务

Hive Digital提供全面的中国PCC获取服务：

- **资格评估**
- **文件准备**和清单指导
- **授权代表提交**（适用于境外申请人）
- **公证和认证**协调
- **使馆认证**
- **认证翻译**
- **安全递送**

联系我们的中国团队启动您的PCC申请。我们通常在工作时间2小时内通过微信/企业微信回复。
    `}];a.s(["getAllZhInsightSlugs",0,function(){return b.map(a=>a.slug)},"getZhInsightBySlug",0,function(a){return b.find(b=>b.slug===a)},"zhInsights",0,b])},48564,a=>{"use strict";var b=a.i(7997),c=a.i(95936),d=a.i(62284),e=a.i(64254),f=a.i(23351),g=a.i(83693);a.s(["default",0,function(){let a=g.zhInsights[0],h=g.zhInsights.slice(1);return(0,b.jsx)("main",{className:"pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen",children:(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4",children:["资讯与",(0,b.jsx)("span",{className:"text-red-500",children:"合规指南"})]}),(0,b.jsx)("p",{className:"text-hive-muted text-lg max-w-2xl mb-12",children:"跨境文件认证、工作许可和合规要求的深度分析。由Hive Digital专家团队撰写。"}),(0,b.jsx)(c.default,{href:`/zh/insights/${a.slug}/`,className:"group block bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all mb-10",children:(0,b.jsxs)("div",{className:"p-8 lg:p-10",children:[(0,b.jsx)("span",{className:"inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-4",children:a.category}),(0,b.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors",children:a.title}),(0,b.jsx)("p",{className:"text-hive-muted text-base leading-relaxed mb-6 max-w-3xl",children:a.excerpt}),(0,b.jsxs)("div",{className:"flex items-center gap-6 text-hive-dim text-sm",children:[(0,b.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,b.jsx)(e.Calendar,{className:"w-4 h-4"}),a.date]}),(0,b.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,b.jsx)(d.Clock,{className:"w-4 h-4"}),a.readTime]})]})]})}),(0,b.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:h.map(a=>(0,b.jsxs)(c.default,{href:`/zh/insights/${a.slug}/`,className:"group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-red-500/30 transition-all",children:[(0,b.jsx)("span",{className:"inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-3",children:a.category}),(0,b.jsx)("h3",{className:"text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2",children:a.title}),(0,b.jsx)("p",{className:"text-hive-muted text-sm leading-relaxed mb-4 line-clamp-3",children:a.excerpt}),(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{className:"flex items-center gap-4 text-hive-dim text-xs",children:[(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(e.Calendar,{className:"w-3 h-3"}),a.date]}),(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(d.Clock,{className:"w-3 h-3"}),a.readTime]})]}),(0,b.jsx)(f.ArrowRight,{className:"w-4 h-4 text-hive-dim group-hover:text-red-500 transition-colors"})]})]},a.slug))})]})})},"metadata",0,{title:"资讯与合规指南 | Hive Digital",description:"深入了解文件Apostille、使馆认证、背景调查和中国工作许可的合规指南。由Hive Digital专家团队撰写。"}])},23293,a=>{a.n(a.i(48564))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__095f.wx._.js.map