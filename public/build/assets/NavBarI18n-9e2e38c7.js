import{D as g,j as d,r as f,o as l,b as i,w as a,n as r,z as _,p as L,E as b,c as h,F as v,a as C,C as V,x as I,t as x}from"./main-b6631041.js";import{V as k}from"./VMenu-f6e2ae7c.js";import{V as B,a as y,b as w}from"./VList-29aa2d2e.js";import"./forwardRefs-813ef531.js";import"./transition-1cb87bca.js";import"./dialog-transition-0b2641ee.js";import"./VAvatar-58f9d872.js";import"./VImg-06128a7e.js";import"./VDivider-38ac4951.js";const A={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(c,{emit:u}){const n=c,{locale:o}=useI18n({useScope:"global"});g(o,s=>{document.documentElement.setAttribute("lang",s)});const t=d(["en"]);return(s,p)=>{const m=f("IconBtn");return l(),i(m,null,{default:a(()=>[r(_,{size:"26",icon:"tabler-language"}),r(k,{activator:"parent",location:n.location,offset:"14px"},{default:a(()=>[r(B,{selected:L(t),"onUpdate:selected":p[0]||(p[0]=e=>b(t)?t.value=e:null),"min-width":"175px"},{default:a(()=>[(l(!0),h(v,null,C(n.languages,e=>(l(),i(y,{key:e.i18nLang,value:e.i18nLang,onClick:E=>{o.value=e.i18nLang,s.$emit("change",e.i18nLang)}},{default:a(()=>[r(w,null,{default:a(()=>[V(I(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}},j={__name:"NavBarI18n",setup(c){const{isAppRtl:u}=x(),n=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],o=t=>{u.value=t==="ar"};return(t,s)=>(l(),i(A,{languages:n,onChange:o}))}};export{j as default};
