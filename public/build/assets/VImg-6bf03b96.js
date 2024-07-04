import{N as C,$ as D,ae as q,ao as x,S as F,n,G as y,bK as O,j as S,D as z,bF as A,a7 as H,I as j,aD as L,F as U,aP as G,J}from"./main-435b88bd.js";import{m as K,M as b}from"./transition-e3df27dd.js";function Q(e){return{aspectStyles:y(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const X=C()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...D(),...q()},setup(e,u){let{slots:i}=u;const{aspectStyles:a}=Q(e),{dimensionStyles:m}=x(e);return F(()=>{var r;return n("div",{class:["v-responsive",e.class],style:[m.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(r=i.additional)==null?void 0:r.call(i),i.default&&n("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function Y(e,u){if(!O)return;const i=u.modifiers||{},a=u.value,{handler:m,options:r}=typeof a=="object"?a:{handler:a,options:{}},l=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const s=(f=e._observe)==null?void 0:f[u.instance.$.uid];if(!s)return;const o=v.some(_=>_.isIntersecting);m&&(!i.quiet||s.init)&&(!i.once||o||s.init)&&m(o,v,g),o&&i.once?P(e,u):s.init=!0},r);e._observe=Object(e._observe),e._observe[u.instance.$.uid]={init:!1,observer:l},l.observe(e)}function P(e,u){var a;const i=(a=e._observe)==null?void 0:a[u.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[u.instance.$.uid])}const Z={mounted:Y,unmounted:P},p=Z,ne=C()({name:"VImg",directives:{intersect:p},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...D(),...K()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:i,slots:a}=u;const m=S(""),r=S(),l=S(e.eager?"loading":"idle"),v=S(),g=S(),s=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),o=y(()=>s.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{f(l.value!=="idle")}),z(o,(t,c)=>{!t&&c&&r.value&&h(r.value)}),A(()=>f());function f(t){if(!(e.eager&&t)&&!(O&&!t&&!e.eager)){if(l.value="loading",s.value.lazySrc){const c=new Image;c.src=s.value.lazySrc,h(c,null)}s.value.src&&H(()=>{var c,d;if(i("loadstart",((c=r.value)==null?void 0:c.currentSrc)||s.value.src),(d=r.value)!=null&&d.complete){if(r.value.naturalWidth||I(),l.value==="error")return;o.value||h(r.value,null),_()}else o.value||h(r.value),R()})}}function _(){var t;R(),l.value="loaded",i("load",((t=r.value)==null?void 0:t.currentSrc)||s.value.src)}function I(){var t;l.value="error",i("error",((t=r.value)==null?void 0:t.currentSrc)||s.value.src)}function R(){const t=r.value;t&&(m.value=t.currentSrc||t.src)}let w=-1;function h(t){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(w);const{naturalHeight:$,naturalWidth:V}=t;$||V?(v.value=V,g.value=$):!t.complete&&l.value==="loading"&&c!=null?w=window.setTimeout(d,c):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};d()}const N=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),W=()=>{var d;if(!s.value.src||l.value==="idle")return null;const t=n("img",{class:["v-img__img",N.value],src:s.value.src,srcset:s.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:_,onError:I},null),c=(d=a.sources)==null?void 0:d.call(a);return n(b,{transition:e.transition,appear:!0},{default:()=>[j(c?n("picture",{class:"v-img__picture"},[c,t]):t,[[J,l.value==="loaded"]])]})},k=()=>n(b,{transition:e.transition},{default:()=>[s.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",N.value],src:s.value.lazySrc,alt:e.alt},null)]}),B=()=>a.placeholder?n(b,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,E=()=>a.error?n(b,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,M=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=S(!1);{const t=z(o,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return F(()=>j(n(X,{class:["v-img",{"v-img--booting":!T.value},e.class],style:[{width:G(e.width==="auto"?v.value:e.width)},e.style],aspectRatio:o.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>n(U,null,[n(W,null,null),n(k,null,null),n(M,null,null),n(B,null,null),n(E,null,null)]),default:a.default}),[[L("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:m,image:r,state:l,naturalWidth:v,naturalHeight:g}}});export{p as I,ne as V};
