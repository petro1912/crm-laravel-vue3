import{a as d}from"./VTextField-33a062f4.js";import{V as u}from"./VSelect-62ecfe7f.js";import{d as f,G as r,ah as o,o as c,c as _,p as t,b,A as h,n as $,aa as g,a as k,w as v,m as C,ai as i,aj as p,q as S}from"./main-ba954960.js";const V=f({name:"AppSelect",inheritAttrs:!1}),j=Object.assign(V,{setup(A){const a=r(()=>{const e=o(),s=e.id||e.label;return s?`app-select-${s}-${Math.random().toString(36).slice(2,7)}`:void 0}),n=r(()=>o().label);return(e,s)=>(c(),_("div",{class:S(["app-select flex-grow-1",e.$attrs.class])},[t(n)?(c(),b(d,{key:0,for:t(a),class:"mb-1 text-body-2 text-high-emphasis",text:t(n)},null,8,["for","text"])):h("",!0),$(u,i(p({...e.$attrs,class:null,label:void 0,variant:"outlined",id:t(a),menuProps:{contentClass:["app-inner-list","app-select__content","v-select__content",e.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),g({_:2},[k(e.$slots,(w,l)=>({name:l,fn:v(m=>[C(e.$slots,l,i(p(m||{})))])}))]),1040)],2))}});export{j as _};
