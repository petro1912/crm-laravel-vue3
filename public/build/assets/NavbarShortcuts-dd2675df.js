import{s as b,r as h,o,b as n,w as e,n as t,z as r,C as g,p,P as V,c as x,F as y,a as C,q as v,l as m,x as d}from"./main-435b88bd.js";import{V as S}from"./VMenu-5fe8859b.js";import{V as A,a as I,b as k}from"./VCard-3d7c157e.js";import{V as w}from"./VDivider-0ebdb365.js";import{V as B,a as z}from"./VRow-00a81854.js";import{V as D}from"./VAvatar-c0c79609.js";import"./forwardRefs-9d31fcaa.js";import"./VOverlay-285ab444.js";import"./transition-e3df27dd.js";import"./dialog-transition-d9e091e1.js";import"./VImg-6bf03b96.js";const N={class:"text-base font-weight-medium mt-2 mb-0"},q={class:"text-sm"},F={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(l){const s=l,c=b();return(_,i)=>{const u=h("IconBtn");return o(),n(u,null,{default:e(()=>[t(r,{size:"26",icon:s.togglerIcon},null,8,["icon"]),t(S,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(A,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(I,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(r,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(k,null,{default:e(()=>[g("Shortcuts")]),_:1})]),_:1}),t(w),t(p(V),{options:{wheelPropagation:!1}},{default:e(()=>[t(B,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),x(y,null,C(s.shortcuts,(a,f)=>(o(),n(z,{key:a.title,cols:"6",class:v(["text-center border-t cursor-pointer pa-4 shortcut-icon",(f+1)%2?"border-e":""]),onClick:M=>p(c).push(a.to)},{default:e(()=>[t(D,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),m("h6",N,d(a.title),1),m("span",q,d(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},J={__name:"NavbarShortcuts",setup(l){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(c,_)=>{const i=F;return o(),n(i,{shortcuts:s})}}};export{J as default};
