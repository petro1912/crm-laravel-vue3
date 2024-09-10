import{d as T,G as f,ai as k,o as b,c as A,p as c,b as $,A as B,n,aa as L,a as N,w as I,m as O,aj as p,ak as P,q as R,N as M,aG as j,aH as z,az as G,aI as D,an as F,O as H,Q,aM as q,aN as E,ap as J,aJ as U,aC as K,j as W,D as V,a2 as X,S as Y,aP as Z,aQ as ee,H as _}from"./main-61484bfe.js";import{a as ae,V as te}from"./VTextField-a174cf70.js";import{m as se,u as oe,V as y,f as ne}from"./forwardRefs-6ee72851.js";const le=T({name:"AppTextField",inheritAttrs:!1}),ue=Object.assign(le,{setup(e){const l=f(()=>{const a=k(),s=a.id||a.label;return s?`app-text-field-${s}-${Math.random().toString(36).slice(2,7)}`:void 0}),t=f(()=>k().label);return(a,s)=>(b(),A("div",{class:R(["app-text-field flex-grow-1",a.$attrs.class])},[c(t)?(b(),$(ae,{key:0,for:c(l),class:"mb-1 text-body-2 text-high-emphasis",text:c(t)},null,8,["for","text"])):B("",!0),n(te,p(P({...a.$attrs,class:null,label:void 0,variant:"outlined",id:c(l)})),L({_:2},[N(a.$slots,(d,r)=>({name:r,fn:I(u=>[O(a.$slots,r,p(P(u||{})))])}))]),1040)],2))}});const me=M()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...j({location:"bottom"}),...z(),...G(),...D(),...F(),...H(se({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const a=Q(e,"modelValue"),{locationStyles:s}=q(e),{positionClasses:d}=E(e),{scopeId:r}=oe(),{themeClasses:u}=J(e),{colorClasses:S,colorStyles:C,variantClasses:w}=U(e),{roundedClasses:g}=K(e),v=W();V(a,i),V(()=>e.timeout,i),X(()=>{a.value&&i()});let m=-1;function i(){window.clearTimeout(m);const o=Number(e.timeout);!a.value||o===-1||(m=window.setTimeout(()=>{a.value=!1},o))}function h(){window.clearTimeout(m)}return Y(()=>{const[o]=y.filterProps(e);return n(y,_({ref:v,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},d.value,e.class],style:e.style},o,{modelValue:a.value,"onUpdate:modelValue":x=>a.value=x,contentProps:_({class:["v-snackbar__wrapper",u.value,S.value,g.value,w.value],style:[s.value,C.value],onPointerenter:h,onPointerleave:i},o.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},r),{default:()=>[Z(!1,"v-snackbar"),t.default&&n("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[t.default()]),t.actions&&n(ee,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[n("div",{class:"v-snackbar__actions"},[t.actions()])]})],activator:t.activator})}),ne({},v)}});export{me as V,ue as _};
