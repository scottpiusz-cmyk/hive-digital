(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,i)=>{"use strict";function s({widthInt:e,heightInt:t,blurWidth:i,blurHeight:a,blurDataURL:l,objectFit:r}){let n=i?40*i:e,o=a?40*a:t,c=n&&o?`viewBox='0 0 ${n} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===r?"xMidYMid":"cover"===r?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return s}})},87690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={VALID_LOADERS:function(){return l},imageConfigDefault:function(){return r}};for(var a in s)Object.defineProperty(i,a,{enumerable:!0,get:s[a]});let l=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(33525);let s=e.r(43369),a=e.r(88143),l=e.r(87690),r=["-moz-initial","fill","none","scale-down",void 0];function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:i=!1,priority:d=!1,preload:m=!1,loading:u,className:h,quality:x,width:p,height:f,fill:g=!1,style:v,overrideSrc:b,onLoad:j,onLoadingComplete:y,placeholder:w="empty",blurDataURL:N,fetchPriority:C,decoding:P="async",layout:_,objectFit:k,objectPosition:S,lazyBoundary:I,lazyRoot:A,...O},R){var z;let E,F,D,{imgConf:$,showAltText:B,blurComplete:M,defaultLoader:T}=R,H=$||l.imageConfigDefault;if("allSizes"in H)E=H;else{let e=[...H.deviceSizes,...H.imageSizes].sort((e,t)=>e-t),t=H.deviceSizes.sort((e,t)=>e-t),i=H.qualities?.sort((e,t)=>e-t);E={...H,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===T)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let q=O.loader||T;delete O.loader,delete O.srcSet;let L="__next_img_default"in q;if(L){if("custom"===E.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=q;q=t=>{let{config:i,...s}=t;return e(s)}}if(_){"fill"===_&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(v={...v,...e});let i={responsive:"100vw",fill:"100vw"}[_];i&&!t&&(t=i)}let W="",U=o(p),V=o(f);if((z=e)&&"object"==typeof z&&(n(z)||void 0!==z.src)){let t=n(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(F=t.blurWidth,D=t.blurHeight,N=N||t.blurDataURL,W=t.src,!g)if(U||V){if(U&&!V){let e=U/t.width;V=Math.round(t.height*e)}else if(!U&&V){let e=V/t.height;U=Math.round(t.width*e)}}else U=t.width,V=t.height}let G=!d&&!m&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,G=!1),E.unoptimized&&(i=!0),L&&!E.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=o(x),J=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:S}:{},B?{}:{color:"transparent"},v),Q=M||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:U,heightInt:V,blurWidth:F,blurHeight:D,blurDataURL:N||"",objectFit:J.objectFit})}")`:`url("${w}")`,Z=r.includes(J.objectFit)?"fill"===J.objectFit?"100% 100%":"cover":J.objectFit,K=Q?{backgroundSize:Z,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q}:{},Y=function({config:e,src:t,unoptimized:i,width:a,quality:l,sizes:r,loader:n}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,s.getDeploymentId)();if(e){let i=t.indexOf("?");if(-1!==i){let s=new URLSearchParams(t.slice(i+1));s.get("dpl")||(s.append("dpl",e),t=t.slice(0,i)+"?"+s.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:c}=function({deviceSizes:e,allSizes:t},i,s){if(s){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(s);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,r),d=o.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:o.map((i,s)=>`${n({config:e,src:t,quality:l,width:i})} ${"w"===c?i:s+1}${c}`).join(", "),src:n({config:e,src:t,quality:l,width:o[d]})}}({config:E,src:e,unoptimized:i,width:U,quality:X,sizes:t,loader:q}),ee=G?"lazy":u;return{props:{...O,loading:ee,fetchPriority:C,width:U,height:V,decoding:P,className:h,style:{...J,...K},sizes:Y.sizes,srcSet:Y.srcSet,src:b||Y.src},meta:{unoptimized:i,preload:m||d,placeholder:w,fill:g}}}},98879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return n}});let s=e.r(71645),a="u"<typeof window,l=a?()=>{}:s.useLayoutEffect,r=a?()=>{}:s.useEffect;function n(e){let{headManager:t,reduceComponentsToState:i}=e;function n(){if(t&&t.mountedInstances){let e=s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),n()),l(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),l(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),r(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={default:function(){return p},defaultHead:function(){return m}};for(var a in s)Object.defineProperty(i,a,{enumerable:!0,get:s[a]});let l=e.r(55682),r=e.r(90809),n=e.r(43476),o=r._(e.r(71645)),c=l._(e.r(98879)),d=e.r(42732);function m(){return[(0,n.jsx)("meta",{charSet:"utf-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function x(e){let t,i,s,a;return e.reduce(u,[]).reverse().concat(m().reverse()).filter((t=new Set,i=new Set,s=new Set,a={},e=>{let l=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?l=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?l=!1:i.add(e.type);break;case"meta":for(let t=0,i=h.length;t<i;t++){let i=h[t];if(e.props.hasOwnProperty(i))if("charSet"===i)s.has(i)?l=!1:s.add(i);else{let t=e.props[i],s=a[i]||new Set;("name"!==i||!r)&&s.has(t)?l=!1:(s.add(t),a[i]=s)}}}return l})).reverse().map((e,t)=>{let i=e.key||t;return o.default.cloneElement(e,{key:i})})}let p=function({children:e}){let t=(0,o.useContext)(d.HeadManagerContext);return(0,n.jsx)(c.default,{reduceComponentsToState:x,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18556,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let s=e.r(55682)._(e.r(71645)),a=e.r(87690),l=s.default.createContext(a.imageConfigDefault)},65856,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return s}});let s=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,i)=>{"use strict";function s(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return s}})},1948,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return r}});let s=e.r(70965),a=e.r(43369);function l({config:e,src:t,width:i,quality:r}){let n=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),s=i.get("dpl");if(s){n=s,i.delete("dpl");let a=i.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,s.findClosestQuality)(r,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&n?`&dpl=${n}`:""}`}l.__next_img_default=!0;let r=l},85437,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return j}});let s=e.r(55682),a=e.r(90809),l=e.r(43476),r=a._(e.r(71645)),n=s._(e.r(74080)),o=s._(e.r(25633)),c=e.r(8927),d=e.r(87690),m=e.r(18556);e.r(33525);let u=e.r(65856),h=s._(e.r(1948)),x=e.r(18581),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,i,s,a,l,r){let n=e?.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}s?.current&&s.current(e)}}))}function g(e){return r.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,r.forwardRef)(({src:e,srcSet:t,sizes:i,height:s,width:a,decoding:n,className:o,style:c,fetchPriority:d,placeholder:m,loading:u,unoptimized:h,fill:p,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:j,setShowAltText:y,sizesInput:w,onLoad:N,onError:C,...P},_)=>{let k=(0,r.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&f(e,m,v,b,j,h,w))},[e,m,v,b,j,C,h,w]),S=(0,x.useMergedRef)(_,k);return(0,l.jsx)("img",{...P,...g(d),loading:u,width:a,height:s,decoding:n,"data-nimg":p?"fill":"1",className:o,style:c,sizes:i,srcSet:t,src:e,ref:S,onLoad:e=>{f(e.currentTarget,m,v,b,j,h,w)},onError:e=>{y(!0),"empty"!==m&&j(!0),C&&C(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...g(t.fetchPriority)};return e&&n.default.preload?(n.default.preload(t.src,i),null):(0,l.jsx)(o.default,{children:(0,l.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let j=(0,r.forwardRef)((e,t)=>{let i=(0,r.useContext)(u.RouterContext),s=(0,r.useContext)(m.ImageConfigContext),a=(0,r.useMemo)(()=>{let e=p||s||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:a,localPatterns:"u"<typeof window?s?.localPatterns:e.localPatterns}},[s]),{onLoad:n,onLoadingComplete:o}=e,x=(0,r.useRef)(n);(0,r.useEffect)(()=>{x.current=n},[n]);let f=(0,r.useRef)(o);(0,r.useEffect)(()=>{f.current=o},[o]);let[g,j]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),{props:N,meta:C}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:a,blurComplete:g,showAltText:y});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{...N,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:x,onLoadingCompleteRef:f,setBlurComplete:j,setShowAltText:w,sizesInput:e.sizes,ref:t}),C.preload?(0,l.jsx)(b,{isAppRouter:!i,imgAttributes:N}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73624,e=>{"use strict";var t=e.i(43476),i=e.i(22016),s=e.i(46932),a=e.i(68877);e.s(["default",0,function(){return(0,t.jsxs)("section",{className:"relative min-h-screen overflow-hidden flex flex-col justify-center",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('/hero-bg.jpg')"}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-hive-bg/30",style:{zIndex:1}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-hive-bg/70 via-hive-bg/30 to-transparent",style:{zIndex:2}}),(0,t.jsxs)("div",{className:"relative z-10 flex flex-col justify-start min-h-screen px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32 max-w-5xl",children:[(0,t.jsxs)(s.motion.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.9,delay:.3},className:"text-left mb-10",children:[(0,t.jsx)("span",{className:"block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05]",children:"您的文件。"}),(0,t.jsx)("span",{className:"block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05] mt-3",children:"亚太任何地方。"}),(0,t.jsx)("span",{className:"block font-serif text-5xl sm:text-6xl md:text-[74px] font-medium tracking-tight leading-[1.05] mt-2",style:{background:"linear-gradient(135deg, #D8A15B 0%, #F0C27B 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"智能处理。"})]}),(0,t.jsx)(s.motion.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.55},className:"text-left text-lg sm:text-xl md:text-2xl text-white/80 font-sans font-medium max-w-[620px] leading-[1.45] mb-12",children:"为跨境个人和企业提供Apostille、使馆公证和文件服务。"}),(0,t.jsxs)(s.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.75},className:"flex flex-col sm:flex-row items-start gap-4",children:[(0,t.jsxs)(i.default,{href:"/zh/contact/",className:"inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-hive-accent hover:bg-hive-accent-hover text-hive-bg text-sm font-semibold tracking-wide transition-all hover:shadow-glow",children:["联系我们 ",(0,t.jsx)(a.ArrowRight,{className:"w-4 h-4"})]}),(0,t.jsx)(i.default,{href:"/zh/services/",className:"inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full border border-hive-border text-hive-muted hover:text-white hover:border-hive-accent hover:bg-hive-accent/10 text-sm font-semibold tracking-wide transition-all",children:"探索服务 →"})]}),(0,t.jsxs)(s.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1},className:"mt-16 flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"text-green-400 text-sm",children:"★ 4.9"}),(0,t.jsx)("span",{className:"text-hive-muted text-xs",children:"/ 5"})]}),(0,t.jsx)("span",{className:"text-hive-dim text-xs",children:"Trustpilot"}),(0,t.jsx)("span",{className:"text-hive-dim text-[10px]",children:"— 300+ 真实评价"})]})]})]})}])},56290,e=>{"use strict";var t=e.i(43476),i=e.i(46932),s=e.i(86563),a=e.i(80656);e.s(["default",0,function(){return(0,t.jsx)("section",{className:"relative z-10 mt-8 px-6 lg:px-8",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,t.jsx)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8",children:(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"flex items-center gap-1",children:[void 0,void 0,void 0,void 0,void 0].map((e,i)=>(0,t.jsx)(s.Star,{className:"w-5 h-5 fill-green-500 text-green-500"},i))}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-white font-bold text-sm",children:"4.9 / 5 on Trustpilot"}),(0,t.jsx)("div",{className:"text-hive-dim text-xs",children:"来自100+验证评价"})]})]}),(0,t.jsx)("div",{className:"hidden lg:block w-px h-12 bg-white/10"}),(0,t.jsxs)("div",{className:"flex items-start gap-3 max-w-lg",children:[(0,t.jsx)(a.Quote,{className:"w-5 h-5 text-red-500/40 shrink-0 mt-0.5"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-hive-muted text-sm leading-relaxed",children:["“","Hive Digital为我们中国校区的教师背景调查和公证认证全程提供服务。周转快，通过企业微信沟通非常顺畅，每一份文件都完美处理。","”"]}),(0,t.jsxs)("div",{className:"mt-2 flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-white text-xs font-semibold",children:"James Whitfield"}),(0,t.jsx)("span",{className:"text-hive-dim text-xs",children:"国际学校人力资源总监"})]})]})]})]})})})})}])},60001,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(22016),a=e.i(46932),l=e.i(88653),r=e.i(84026),n=e.i(77355),o=e.i(26091),c=e.i(47255),d=e.i(69355),m=e.i(46387),u=e.i(16327),h=e.i(68590),x=e.i(57688);let p=[{id:"background-checks",icon:r.ShieldCheck,title:"联邦与州背景调查",image:"/background-checks.jpg",summary:"来自美国、加拿大、英国、澳大利亚等国家的犯罪记录检查和身份验证。",details:["FBI身份历史摘要检查（美国）","RCMP犯罪记录检查（加拿大）","ACRO警方证明（英国）","州级司法部检查"]},{id:"apostille",icon:n.Stamp,title:"文件Apostille与认证",image:"/apostille-auth-combined.jpg",summary:"海牙Apostille认证、使馆/领事馆公证、学位证明、教师证书、结婚证明和公司文件的公证。",details:["海牙Apostille（公约成员国）","中国使馆/领事馆认证","越南使馆公证","泰国外交部与使馆认证","韩国和日本领事馆认证","公证与翻译协调"]},{id:"china-pcc",icon:o.FileText,title:"中国无犯罪记录证明",image:"/china-pcc.jpg",summary:"从北京、上海、深圳等中国城市的公安局获取无犯罪记录证明。",details:["北京公安局无犯罪记录证明","上海公安局无犯罪记录证明","深圳公安局犯罪记录检查","其他城市可用 — 咨询确认","公证与英文翻译包含"]},{id:"fingerprinting",icon:c.Fingerprint,title:"指纹采集服务",image:"/fingerprinting.jpg",summary:"在上海、北京、成都等主要城市提供快速、便捷的指纹采集服务。",details:["FBI合规指纹采集","传统墨水指纹","24小时内数字交付","安全快递纸质版"],link:"/zh/shanghai-fingerprinting/"},{id:"visa",icon:d.Plane,title:"中国签证与工作许可",image:"/china-visa.jpg",summary:"中国Z签证申请和居留许可文件的全流程准备和指导。",details:["Z签证文件准备与审核","居留许可申请支持","文件翻译与认证"]},{id:"business",icon:m.Building2,title:"中国企业注册",image:"/business-registration.jpg",summary:"从WFOE和合资公司设立到注册后合规，帮助外国企业在中国建立法律实体。",details:["WFOE注册","合资公司设立","营业执照申请","银行账户开立"]},{id:"ancillary",icon:h.MessageSquare,title:"辅助服务",image:"/ancillary.jpg",summary:"后台运营支持——人力资源、薪资、财务、税务合规和办公选址。",details:["人力资源与薪资管理","财务、会计与税务合规","办公选址与租赁协调"]}];e.s(["default",0,function(){let[e,r]=(0,i.useState)(null);return(0,t.jsx)("section",{className:"py-24 px-6 lg:px-12 bg-hive-bg relative z-10",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[(0,t.jsx)("h2",{className:"text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4",children:"我们的服务"}),(0,t.jsx)("p",{className:"text-hive-muted max-w-2xl mx-auto",children:"覆盖亚洲及全球的端到端文件认证和合规支持。"})]}),(0,t.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:p.map(i=>{let n=i.icon,o=e===i.id;return(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300",children:[i.image&&(0,t.jsxs)("div",{className:"relative h-48 w-full",children:[(0,t.jsx)(x.default,{src:i.image,alt:i.title,fill:!0,className:"object-cover"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-hive-surface via-hive-surface/40 to-transparent"})]}),(0,t.jsx)("div",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0",children:(0,t.jsx)(n,{className:"w-5 h-5 text-red-500"})}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-white",children:i.title}),(0,t.jsx)("button",{onClick:()=>r(o?null:i.id),className:"ml-2 text-hive-dim hover:text-white transition-colors",children:(0,t.jsx)(u.ChevronDown,{className:`w-5 h-5 transition-transform duration-300 ${o?"rotate-180":""}`})})]}),(0,t.jsx)("p",{className:"text-hive-muted text-sm mt-1",children:i.summary}),(0,t.jsx)(l.AnimatePresence,{children:o&&(0,t.jsxs)(a.motion.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"overflow-hidden",children:[(0,t.jsx)("ul",{className:"mt-4 space-y-2",children:i.details.map((e,i)=>(0,t.jsxs)("li",{className:"flex items-start gap-2 text-sm text-hive-muted",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"}),e]},i))}),i.link&&(0,t.jsx)(s.default,{href:i.link,className:"inline-flex items-center gap-1 text-red-400 text-sm mt-4 hover:text-white transition-colors",children:"了解更多 →"})]})})]})]})})]},i.id)})})]})})}])},99103,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(46932),a=e.i(88653),l=e.i(86563),r=e.i(24071),n=e.i(67927),o=e.i(80656);let c=[{name:"James Whitfield",title:"国际学校人力资源总监",text:"Hive Digital为我们中国校区的教师背景调查和公证认证全程提供服务。周转快，通过企业微信沟通非常顺畅，每一份文件都完美处理。",rating:5},{name:"Sarah Chen",title:"从英国迁居至上海",text:"我需要认证学位和教师证书以办理中国工作签证。Hive Digital管理了从英国公证到中国领事馆认证的全部流程。整个过程不到3周，我可以始终跟踪进度。",rating:5},{name:"Michael Torres",title:"科技公司运营总监",text:"我们在中国、越南和泰国的员工文件处理一直使用Hive Digital。他们对每个国家具体要求的了解为我们节省了无数时间。真正的跨境招聘合作伙伴。",rating:5},{name:"Emily Park",title:"国际教师",text:"Scott和Hive Digital团队在微信上的响应非常迅速。他们指导我完成了每一步准备韩国所需文件。专业、耐心、真诚帮助。毫不犹豫给五星好评。",rating:5}];e.s(["default",0,function(){let[e,d]=(0,i.useState)(0),[m,u]=(0,i.useState)(0),h=e=>{u(e),d(t=>(t+e+c.length)%c.length)};return(0,i.useEffect)(()=>{let e=setInterval(()=>h(1),6e3);return()=>clearInterval(e)},[h]),(0,t.jsx)("section",{className:"py-24 px-6 lg:px-12 bg-hive-bg relative",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsxs)(s.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[(0,t.jsx)("h2",{className:"text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4",children:"全球客户信任"}),(0,t.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,t.jsx)("div",{className:"flex",children:[void 0,void 0,void 0,void 0,void 0].map((e,i)=>(0,t.jsx)(l.Star,{className:"w-5 h-5 fill-hive-accent text-hive-accent"},i))}),(0,t.jsx)("span",{className:"text-white font-semibold ml-1",children:"4.9 / 5"}),(0,t.jsx)("span",{className:"text-hive-dim text-sm ml-1",children:"on Trustpilot"})]})]}),(0,t.jsxs)("div",{className:"relative min-h-[280px] flex items-center justify-center",children:[(0,t.jsx)(a.AnimatePresence,{custom:m,mode:"wait",children:(0,t.jsxs)(s.motion.div,{custom:m,variants:{enter:e=>({x:e>0?300:-300,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?300:-300,opacity:0})},initial:"enter",animate:"center",exit:"exit",transition:{duration:.4,ease:"easeInOut"},className:"bg-hive-surface border border-hive-border rounded-2xl p-8 md:p-10 w-full",children:[(0,t.jsx)(o.Quote,{className:"w-8 h-8 text-hive-accent/40 mb-4"}),(0,t.jsxs)("p",{className:"text-white text-lg md:text-xl leading-relaxed mb-6",children:["“",c[e].text,"”"]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full bg-hive-accent/20 flex items-center justify-center text-hive-accent font-bold text-sm",children:c[e].name.charAt(0)}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-white font-semibold text-sm",children:c[e].name}),(0,t.jsx)("div",{className:"text-hive-dim text-xs",children:c[e].title})]}),(0,t.jsx)("div",{className:"ml-auto flex",children:[...Array(c[e].rating)].map((e,i)=>(0,t.jsx)(l.Star,{className:"w-4 h-4 fill-hive-accent text-hive-accent"},i))})]})]},e)}),(0,t.jsx)("button",{onClick:()=>h(-1),className:"absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-10 h-10 rounded-full bg-hive-surface border border-hive-border flex items-center justify-center hover:border-hive-accent/50 transition-colors z-10",children:(0,t.jsx)(r.ChevronLeft,{className:"w-5 h-5 text-hive-muted"})}),(0,t.jsx)("button",{onClick:()=>h(1),className:"absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-10 h-10 rounded-full bg-hive-surface border border-hive-border flex items-center justify-center hover:border-hive-accent/50 transition-colors z-10",children:(0,t.jsx)(n.ChevronRight,{className:"w-5 h-5 text-hive-muted"})})]}),(0,t.jsx)("div",{className:"flex justify-center gap-2 mt-6",children:c.map((i,s)=>(0,t.jsx)("button",{onClick:()=>{u(s>e?1:-1),d(s)},className:`w-2 h-2 rounded-full transition-all duration-300 ${s===e?"bg-hive-accent w-6":"bg-hive-border hover:bg-hive-dim"}`},s))})]})})}])},24423,e=>{"use strict";var t=e.i(43476),i=e.i(46932),s=e.i(54418),a=e.i(94508),l=e.i(73225),r=e.i(69355),n=e.i(57688);let o=[{icon:s.FileCheck,title:"免费咨询",description:"告诉我们您的目的国、文件类型和时间节点。我们将制定准确的认证路径并提供透明的全包报价。"},{icon:a.Files,title:"文件收集",description:"通过安全快递或数字上传发送文件。我们验证每份文件的完整性，并在提交前标注任何问题。"},{icon:l.FileSearch,title:"认证与验证",description:"我们处理公证、Apostille和使馆或领事馆认证 — 管理每个步骤，提供跟踪提交和实时状态更新。"},{icon:r.Plane,title:"全球配送",description:"您的完全认证文件将通过安全跟踪快递配送到世界任何地方 — 或从我们的上海办公室亲自领取。"}];e.s(["default",0,function(){return(0,t.jsxs)("section",{className:"py-24 px-6 lg:px-12 bg-hive-surface relative overflow-hidden",children:[(0,t.jsxs)("div",{className:"relative h-64 md:h-80 w-full max-w-7xl mx-auto mb-16 rounded-2xl overflow-hidden",children:[(0,t.jsx)(n.default,{src:"/bridge-compliance.jpg",alt:"无缝文件合规流程",fill:!0,className:"object-cover"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-hive-surface/80 via-transparent to-hive-surface/80"}),(0,t.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},className:"text-center",children:[(0,t.jsx)("h2",{className:"text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2",children:"四步达成合规"}),(0,t.jsx)("p",{className:"text-hive-muted text-lg",children:"从咨询到配送 — 无缝流程"})]})})]}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,t.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:o.map((e,s)=>{let a=e.icon;return(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1*s},className:"relative",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-hive-accent/10 flex items-center justify-center mb-5 ring-1 ring-hive-accent/20",children:(0,t.jsx)(a,{className:"w-7 h-7 text-hive-accent"})}),(0,t.jsxs)("div",{className:"text-xs font-bold uppercase tracking-widest text-hive-accent mb-3",children:["第 ",s+1," 步"]}),(0,t.jsx)("h3",{className:"text-lg font-semibold text-white mb-3",children:e.title}),(0,t.jsx)("p",{className:"text-hive-muted text-sm leading-relaxed",children:e.description})]}),s<o.length-1&&(0,t.jsx)("div",{className:"hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-hive-accent/30 to-transparent"})]},e.title)})})})]})}])},59435,e=>{"use strict";var t=e.i(43476),i=e.i(46932),s=e.i(22016),a=e.i(68877),l=e.i(74544),r=e.i(49882);let n=[{slug:"china-vietnam-document-legalization-2026",title:"中越文件认证合规指南：2026年越南加入海牙 Apostille 公约后的新规",category:"法规解读",excerpt:"越南加入海牙 Apostille 公约及第219/2025/ND-CP号法令对文件合规流程产生重大影响。HR团队需要了解的关键变化。",date:"2026年4月",readTime:"8分钟阅读",author:"Hive Digital 合规团队",relatedPipelines:[{label:"美国到中国文件流程",href:"/zh/services/background-checks/"},{label:"中国到越南文件流程",href:"/zh/services/"},{label:"中国签证服务",href:"/zh/services/"}],content:`
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
    `}];e.s(["default",0,function(){let e=n[0],o=n.slice(1);return(0,t.jsx)("section",{className:"py-24 px-6 lg:px-12 bg-hive-bg relative",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mb-12",children:[(0,t.jsx)("h2",{className:"text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4",children:"最新资讯"}),(0,t.jsx)("p",{className:"text-hive-muted max-w-xl",children:"跨境文件合规的监管智能和实用指南。"})]}),(0,t.jsxs)("div",{className:"grid lg:grid-cols-5 gap-6",children:[(0,t.jsx)(i.motion.article,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"lg:col-span-3 group bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 flex flex-col",children:(0,t.jsxs)("div",{className:"p-8 lg:p-10 flex-1 flex flex-col",children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)("span",{className:"inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20",children:e.category})}),(0,t.jsx)("h3",{className:"text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-red-400 transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-hive-muted leading-relaxed mb-6 flex-1",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-4 text-hive-dim text-sm mb-6",children:[(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)(r.Calendar,{className:"w-4 h-4"}),e.date]}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)(l.Clock,{className:"w-4 h-4"}),e.readTime]})]}),(0,t.jsxs)(s.default,{href:`/zh/insights/${e.slug}/`,className:"inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors",children:["阅读指南 ",(0,t.jsx)(a.ArrowRight,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})]})}),(0,t.jsx)("div",{className:"lg:col-span-2 flex flex-col gap-6",children:o.map((e,l)=>(0,t.jsxs)(i.motion.article,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1*l},className:"group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 flex-1 flex flex-col",children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("span",{className:"inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20",children:e.category})}),(0,t.jsx)("h3",{className:"text-lg font-bold text-white mb-2 leading-snug group-hover:text-red-400 transition-colors line-clamp-3",children:e.title}),(0,t.jsx)("p",{className:"text-hive-muted text-sm leading-relaxed line-clamp-2 flex-1",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-4 pt-4 border-t border-hive-border",children:[(0,t.jsx)("span",{className:"text-hive-dim text-xs",children:e.date}),(0,t.jsxs)(s.default,{href:`/zh/insights/${e.slug}/`,className:"inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm font-medium transition-colors",children:["阅读 ",(0,t.jsx)(a.ArrowRight,{className:"w-3.5 h-3.5"})]})]})]},e.slug))})]}),(0,t.jsx)("div",{className:"mt-8 text-center",children:(0,t.jsxs)(s.default,{href:"/zh/insights/",className:"inline-flex items-center gap-2 text-hive-muted hover:text-white text-sm font-medium transition-colors",children:["查看全部资讯 ",(0,t.jsx)(a.ArrowRight,{className:"w-4 h-4"})]})})]})})}],59435)},33962,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(46932),a=e.i(88653),l=e.i(16327);let r=[{question:"Apostille过程需要多长时间？",answer:"大多数Apostille请求在5–10个工作日内完成。使馆和领事馆公证通常需要10–20个工作日，具体取决于目的国家和当前处理量。我们在每个阶段都提供跟踪更新。"},{question:"你们支持哪些国家？",answer:"我们为21+国家提供文件认证和合规支持，包括中国、越南、泰国、韩国、日本、台湾、印度尼西亚等。如果您的目的地不在列表中，请联系我们 — 我们很可能也覆盖。"},{question:"如果我已经不在中国居住，还能获取中国无犯罪记录证明吗？",answer:"可以。对于北京、上海、深圳等城市，我们可以代您从当地公安局（PSB）获取无犯罪记录证明（PCC）。您必须提供在中国居住时间的证明，包括有效签证和居留许可证明。请联系我们确认您所在城市的资格。"},{question:"如何发送文件给你们？",answer:"文件可通过安全国际快递发送至我们上海办公室，或数字上传以供初步审核。在您的免费咨询中，我们将根据您的文件类型和目的国家确认最佳提交方式。"},{question:"你们提供文件翻译服务吗？",answer:"是的。我们协调所有主要语言的认证翻译，包括中文、越南语、泰语、韩语和日语。翻译由认证翻译人员完成，并可与您的原始文件一起进行公证或认证。"},{question:"联系你们团队最快的方式是什么？",answer:"企业微信/微信是联系我们获取实时更新的最快方式。您也可以通过WhatsApp Business、邮件sales@hiverelo.com或电话+86 13764322474联系我们。工作时间内我们通常2小时内回复。"}];e.s(["default",0,function(){let[e,n]=(0,i.useState)(null);return(0,t.jsx)("section",{id:"faq",className:"py-24 px-6 lg:px-12 bg-hive-surface",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,t.jsxs)(s.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[(0,t.jsx)("h2",{className:"text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4",children:"常见问题"}),(0,t.jsx)("p",{className:"text-hive-muted",children:"与Hive Digital合作您需要了解的一切"})]}),(0,t.jsx)("div",{className:"space-y-3",children:r.map((i,r)=>{let o=e===r;return(0,t.jsxs)(s.motion.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:.05*r},className:"bg-hive-bg border border-hive-border rounded-xl overflow-hidden",children:[(0,t.jsxs)("button",{onClick:()=>n(o?null:r),className:"w-full px-6 py-5 text-left flex items-center justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-white font-medium text-sm md:text-base",children:i.question}),(0,t.jsx)(l.ChevronDown,{className:`w-5 h-5 text-hive-dim shrink-0 transition-transform duration-300 ${o?"rotate-180":""}`})]}),(0,t.jsx)(a.AnimatePresence,{children:o&&(0,t.jsx)(s.motion.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"overflow-hidden",children:(0,t.jsx)("div",{className:"px-6 pb-5 pt-0 text-hive-muted text-sm leading-relaxed",children:i.answer})})})]},r)})})]})})}])}]);