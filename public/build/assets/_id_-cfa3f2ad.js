import{o as r,b as L,w as l,l as m,x as B,n as e,z as Q,c as p,F as J,a as H,C as y,A as k,L as T,j as f,p as o,N as M,ac as ee,$ as q,ad as Ne,ae as we,af as ie,ag as De,ah as Fe,ai as ue,a0 as te,aj as ce,ak as Oe,Q as Re,G as E,al as re,am as Ue,an as je,ao as Me,ap as de,aq as qe,ar as ze,as as me,at as Ge,a1 as K,a4 as We,au as Je,av as se,H as pe,aw as _e,a2 as ve,a9 as He,E as w,ax as Ke,ay as Ye,az as Qe,S as X,aA as Xe,aB as fe,aC as ge,I as ye,aD as Ze,aE as et,J as tt,aF as at,aG as lt,aH as st,aI as nt}from"./main-435b88bd.js";import{V as be}from"./VMenu-5fe8859b.js";import{V as xe,a as he}from"./VList-0905629d.js";import{_ as Ae,V as ot,b as it,a as Ve}from"./VPagination-6fbfa7cb.js";import{a as P,V as z}from"./VRow-00a81854.js";import{a as ut,V as c}from"./VTextField-68bd9a10.js";import{_ as ct}from"./AppTextField-86421514.js";import{a as W}from"./axios-c33000d8.js";import{c as rt}from"./VAvatar-c0c79609.js";import{t as dt,f as mt}from"./auth-6f82e049.js";import{d as ke,a as pt,b as _t,V as vt}from"./VCard-3d7c157e.js";import{_ as Ce}from"./AppDateTimePicker-0da80f60.js";import{a as Se,b as ft}from"./VOverlay-285ab444.js";import{V as D}from"./VSelect-4a9fff3c.js";import{V as ne}from"./VBadge-a83f31ee.js";import"./forwardRefs-9d31fcaa.js";import"./dialog-transition-d9e091e1.js";import"./transition-e3df27dd.js";import"./VDivider-0ebdb365.js";import"./VCheckboxBtn-655737f3.js";import"./VImg-6bf03b96.js";const oe={__name:"ActionButton",props:{menuList:{type:Array,required:!1},menuTitle:{type:String,required:!0},itemProps:{type:Boolean,required:!1}},emits:["update-action"],setup(t,{emit:u}){const s=t,a=d=>{u("update-action",d),console.log(d)};return(d,n)=>(r(),L(T,{color:"primary",rounded:"pill"},{default:l(()=>[m("span",null,B(t.menuTitle),1),e(Q,{icon:"tabler-chevron-down"}),s.menuList?(r(),L(be,{key:0,activator:"parent"},{default:l(()=>[e(xe,null,{default:l(()=>[(r(!0),p(J,null,H(s.menuList,(i,_)=>(r(),L(he,{onClick:v=>a(i.value)},{default:l(()=>[y(B(i.title),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),_:1})):k("",!0)]),_:1}))}};const gt=m("div",{class:"v-card-title"},"Blocking",-1),yt={class:"mt-2"},bt=m("div",{class:"d-flex align-center mt-4"},[m("div",{class:"text-high-emphasis fixed-label font-weight-bold"}," Name "),m("div",{class:"text-high-emphasis fixed-label font-weight-bold"}," Status ")],-1),xt={key:0},ht={class:"mt-6 d-flex justify-center"},At={__name:"Blocking",setup(t){const u=f([{id:1952,name:"NICOLE"},{id:1953,name:"JENNY"},{id:1954,name:"SOPHIE"}]),s=["Allow","Block"];return(a,d)=>(r(),p("div",null,[gt,m("div",yt,[e(z,null,{default:l(()=>[e(P,{cols:"12",md:"4"}),e(P,{cols:"12",md:"4"},{default:l(()=>[bt,(r(!0),p(J,null,H(o(u),(n,i)=>(r(),p("div",{key:i,class:"d-flex align-center mt-4"},[e(ut,{for:a.elementId,class:"text-high-emphasis fixed-label",text:`(${n.id}) ${n.name}`},null,8,["for","text"]),e(Ae,{items:s})]))),128)),o(u).length==0?(r(),p("div",xt," There are no agents. ")):k("",!0),m("div",ht,[e(T,null,{default:l(()=>[y(" Apply ")]),_:1})])]),_:1}),e(P,{cols:"12",md:"4"})]),_:1})])]))}};const Vt=rt("v-alert-title"),kt=["success","info","warning","error"],Y=M()({name:"VAlert",props:{border:{type:[Boolean,String],validator:t=>typeof t=="boolean"||["top","end","bottom","start"].includes(t)},borderColor:String,closable:Boolean,closeIcon:{type:ee,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:t=>kt.includes(t)},...q(),...Ne(),...we(),...ie(),...De(),...Fe(),...ue(),...te(),...ce(),...Oe({variant:"flat"})},emits:{"click:close":t=>!0,"update:modelValue":t=>!0},setup(t,u){let{emit:s,slots:a}=u;const d=Re(t,"modelValue"),n=E(()=>{if(t.icon!==!1)return t.type?t.icon??`$${t.type}`:t.icon}),i=E(()=>({color:t.color??t.type,variant:t.variant})),{themeClasses:_}=re(t),{colorClasses:v,colorStyles:A,variantClasses:C}=Ue(i),{densityClasses:$}=je(t),{dimensionStyles:x}=Me(t),{elevationClasses:b}=de(t),{locationStyles:I}=qe(t),{positionClasses:N}=ze(t),{roundedClasses:V}=me(t),{textColorClasses:g,textColorStyles:h}=Ge(K(t,"borderColor")),{t:F}=We(),S=E(()=>({"aria-label":F(t.closeLabel),onClick(Z){d.value=!1,s("click:close",Z)}}));return()=>{const Z=!!(a.prepend||n.value),Te=!!(a.title||t.title),Ee=!!(t.text||a.text),Be=!!(a.close||t.closable);return d.value&&e(t.tag,{class:["v-alert",t.border&&{"v-alert--border":!!t.border,[`v-alert--border-${t.border===!0?"start":t.border}`]:!0},{"v-alert--prominent":t.prominent},_.value,v.value,$.value,b.value,N.value,V.value,C.value,t.class],style:[A.value,x.value,I.value,t.style],role:"alert"},{default:()=>{var ae,le;return[Je(!1,"v-alert"),t.border&&e("div",{key:"border",class:["v-alert__border",g.value],style:h.value},null),Z&&e("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?e(se,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:t.density,icon:n.value,size:t.prominent?44:28}}},a.prepend):e(Q,{key:"prepend-icon",density:t.density,icon:n.value,size:t.prominent?44:28},null)]),e("div",{class:"v-alert__content"},[Te&&e(Vt,{key:"title"},{default:()=>{var O;return[((O=a.title)==null?void 0:O.call(a))??t.title]}}),Ee&&(((ae=a.text)==null?void 0:ae.call(a))??t.text),(le=a.default)==null?void 0:le.call(a)]),a.append&&e("div",{key:"append",class:"v-alert__append"},[a.append()]),Be&&e("div",{key:"close",class:"v-alert__close"},[a.close?e(se,{key:"close-defaults",defaults:{VBtn:{icon:t.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var O;return[(O=a.close)==null?void 0:O.call(a,{props:S.value})]}}):e(T,pe({key:"close-btn",icon:t.closeIcon,size:"x-small",variant:"text"},S.value),null)])]}})}}}),Ct=m("div",{class:"v-card-title"},"Auto Assign",-1),St=m("div",{class:"mt-4 font-weight-bold"},[m("small",null,"Available List")],-1),Pt={class:"text-right"},$t={class:"font-weight-bold"},It={__name:"AutoAssign",setup(t){const u=f(0),s=f(0),a=f(0),d=_e(),n=parseInt(d.params.id),i=f(""),_=E(()=>i.value.length>0),v=["Normal","Random"],A=f([]),C=f(null),$=f("Normal"),x=f(0),b=()=>{const V=C.value,g=$.value,h=x.value;if(V==null||V==""){i.value="Please select a team leader";return}if(g==null||g==""){i.value="Please select a assign method";return}if(h==0){i.value="Amount must not be 0";return}if(h>u.value){i.value="amount must be less than or equal to available count";return}const F={leader:V,method:g,amount:h};W.post(`/admin/campaigns/${n}/assign`,F).then(S=>{N()})},I=()=>{W.get("/users/leaders").then(V=>{const{leaders:g}=V.data;A.value=g.map(h=>({value:h.id,title:h.name}))})},N=()=>{W.get(`/admin/campaigns/${n}/count-unassigned`).then(V=>{const{unassigned_count:g,total_count:h}=V.data;u.value=g,s.value=h,h!=0&&(a.value=(h-g)*100/h)})};return ve(()=>{I(),N()}),(V,g)=>{const h=Ae,F=ct;return r(),p("div",null,[Ct,e(z,{class:"my-4"},{default:l(()=>[e(P,{cols:"12",md:"3"}),e(P,{cols:"12",md:"6"},{default:l(()=>[e(Y,{class:"mt-4",variant:"outlined",color:"error"},{default:l(()=>[y(" Note: This will apply on unassigned data ")]),_:1}),St,e(He,{color:"primary",modelValue:o(a),"onUpdate:modelValue":g[0]||(g[0]=S=>w(a)?a.value=S:null),striped:""},null,8,["modelValue"]),m("div",Pt,[m("small",$t,B(o(u)),1),m("small",null," / "+B(o(s)),1)]),e(h,{class:"mt-4",items:o(A),modelValue:o(C),"onUpdate:modelValue":g[1]||(g[1]=S=>w(C)?C.value=S:null),label:"Assign Data To"},null,8,["items","modelValue"]),e(h,{class:"mt-4",items:v,modelValue:o($),"onUpdate:modelValue":g[2]||(g[2]=S=>w($)?$.value=S:null),label:"Method"},null,8,["modelValue"]),e(F,{class:"mt-4",label:"Amount",type:"number",modelValue:o(x),"onUpdate:modelValue":g[3]||(g[3]=S=>w(x)?x.value=S:null)},null,8,["modelValue"]),e(T,{class:"my-4",onClick:b},{default:l(()=>[y(" Assign ")]),_:1})]),_:1}),e(P,{cols:"12",md:"3"}),e(ot,{modelValue:o(_),"onUpdate:modelValue":g[4]||(g[4]=S=>w(_)?_.value=S:null),timeout:1e3,location:"top end",color:"error"},{default:l(()=>[y(B(o(i)),1)]),_:1},8,["modelValue"])]),_:1})])}}},Pe={__name:"FilteredList",props:{showSelect:{type:Boolean,required:!1},data:{type:Array,required:!0}},setup(t){const s=K(t,"data"),a=f(dt);return(d,n)=>(r(),L(o(Ve),{headers:o(mt).campaignDetail,items:o(s),"items-per-page":o(a).itemsPerPage,page:o(a).page,"show-select":t.showSelect,"onUpdate:options":n[2]||(n[2]=i=>a.value=i)},{bottom:l(()=>[e(ke,{class:"mt-8"},{default:l(()=>[e(z,null,{default:l(()=>[e(P,{lg:"2",cols:"3"},{default:l(()=>[e(c,{modelValue:o(a).itemsPerPage,"onUpdate:modelValue":n[0]||(n[0]=i=>o(a).itemsPerPage=i),label:"Rows per page:",type:"number",min:"-1",max:"15","hide-details":""},null,8,["modelValue"])]),_:1}),e(P,{lg:"10",cols:"9",class:"d-flex justify-end"},{default:l(()=>[e(it,{modelValue:o(a).page,"onUpdate:modelValue":n[1]||(n[1]=i=>o(a).page=i),"total-visible":"5",length:Math.ceil(o(s).length/o(a).itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headers","items","items-per-page","page","show-select"]))}};const j=Symbol.for("vuetify:v-expansion-panel"),Lt=["default","accordion","inset","popout"],Tt=M()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:t=>Lt.includes(t)},readonly:Boolean,...q(),...Ke(),...te(),...ce()},emits:{"update:modelValue":t=>!0},setup(t,u){let{slots:s}=u;Ye(t,j);const{themeClasses:a}=re(t),d=E(()=>t.variant&&`v-expansion-panels--variant-${t.variant}`);return Qe({VExpansionPanel:{color:K(t,"color")},VExpansionPanelTitle:{readonly:K(t,"readonly")}}),X(()=>e(t.tag,{class:["v-expansion-panels",a.value,d.value,t.class],style:t.style},s)),{}}}),$e=et({color:String,expandIcon:{type:ee,default:"$expand"},collapseIcon:{type:ee,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),R=M()({name:"VExpansionPanelTitle",directives:{Ripple:Xe},props:{...q(),...$e()},setup(t,u){let{slots:s}=u;const a=fe(j);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:d,backgroundColorStyles:n}=ge(t,"color"),i=E(()=>({collapseIcon:t.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:t.expandIcon,readonly:t.readonly}));return X(()=>{var _;return ye(e("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},d.value,t.class],style:[n.value,t.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:t.readonly?void 0:a.toggle},[e("span",{class:"v-expansion-panel-title__overlay"},null),(_=s.default)==null?void 0:_.call(s,i.value),!t.hideActions&&e("span",{class:"v-expansion-panel-title__icon"},[s.actions?s.actions(i.value):e(Q,{icon:a.isSelected.value?t.collapseIcon:t.expandIcon},null)])]),[[Ze("ripple"),t.ripple]])}),{}}}),U=M()({name:"VExpansionPanelText",props:{...q(),...Se()},setup(t,u){let{slots:s}=u;const a=fe(j);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:d,onAfterLeave:n}=ft(t,a.isSelected);return X(()=>e(at,{onAfterLeave:n},{default:()=>{var i;return[ye(e("div",{class:["v-expansion-panel-text",t.class],style:t.style},[s.default&&d.value&&e("div",{class:"v-expansion-panel-text__wrapper"},[(i=s.default)==null?void 0:i.call(s)])]),[[tt,a.isSelected.value]])]}})),{}}}),G=M()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...q(),...ie(),...lt(),...Se(),...ue(),...te(),...$e()},emits:{"group:selected":t=>!0},setup(t,u){let{slots:s}=u;const a=st(t,j),{backgroundColorClasses:d,backgroundColorStyles:n}=ge(t,"bgColor"),{elevationClasses:i}=de(t),{roundedClasses:_}=me(t),v=E(()=>(a==null?void 0:a.disabled.value)||t.disabled),A=E(()=>a.group.items.value.reduce((x,b,I)=>(a.group.selected.value.includes(b.id)&&x.push(I),x),[])),C=E(()=>{const x=a.group.items.value.findIndex(b=>b.id===a.id);return!a.isSelected.value&&A.value.some(b=>b-x===1)}),$=E(()=>{const x=a.group.items.value.findIndex(b=>b.id===a.id);return!a.isSelected.value&&A.value.some(b=>b-x===-1)});return nt(j,a),X(()=>{const x=!!(s.text||t.text),b=!!(s.title||t.title);return e(t.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":C.value,"v-expansion-panel--after-active":$.value,"v-expansion-panel--disabled":v.value},_.value,d.value,t.class],style:[n.value,t.style],"aria-expanded":a.isSelected.value},{default:()=>{var I;return[e("div",{class:["v-expansion-panel__shadow",...i.value]},null),b&&e(R,{key:"title",collapseIcon:t.collapseIcon,color:t.color,expandIcon:t.expandIcon,hideActions:t.hideActions,ripple:t.ripple},{default:()=>[s.title?s.title():t.title]}),x&&e(U,{key:"text",eager:t.eager},{default:()=>[s.text?s.text():t.text]}),(I=s.default)==null?void 0:I.call(s)]}})}),{}}}),Et={class:"w-full align-center justify-between mb-4"},Bt=m("span",{class:"mr-2"},"Filter",-1),Ie={__name:"Filter",setup(t){const u=f(["(1952) NICOLE","(1953) JENNY"]);return(s,a)=>{const d=Ce;return r(),p("div",null,[m("div",Et,[Bt,e(T,null,{default:l(()=>[y(" Apply ")]),_:1})]),e(Tt,{multiple:""},{default:l(()=>[e(G,null,{default:l(()=>[e(R,null,{default:l(()=>[y("Filter Basic: ")]),_:1}),e(U,null,{default:l(()=>[e(D,{class:"mt-2",items:o(u),variant:"outlined",label:"Assigned User"},null,8,["items"]),e(D,{class:"mt-2",items:o(u),variant:"outlined",label:"Project Status"},null,8,["items"]),e(D,{class:"mt-2",items:o(u),variant:"outlined",label:"Sub Status"},null,8,["items"]),e(d,{class:"mt-2",label:"Import Date",modelValue:s.dateRange,"onUpdate:modelValue":a[0]||(a[0]=n=>s.dateRange=n)},null,8,["modelValue"]),e(c,{class:"mt-2",label:"Id"}),e(c,{class:"mt-2",label:"Current Status Date"}),e(c,{class:"mt-2",label:"Product Group"}),e(c,{class:"mt-2",label:"Product Name"})]),_:1})]),_:1}),e(G,null,{default:l(()=>[e(R,null,{default:l(()=>[y("Filter Applicant: ")]),_:1}),e(U,null,{default:l(()=>[e(c,{class:"mt-2",label:"Applicant Type Name"}),e(c,{class:"mt-2",label:"Applicant Company"}),e(c,{class:"mt-2",label:"Application Business Registration Number"}),e(c,{class:"mt-2",label:"Applicant Name"}),e(c,{class:"mt-2",label:"Applicant Identity"}),e(c,{class:"mt-2",label:"Applicant Gender"}),e(c,{class:"mt-2",label:"Race Name"}),e(c,{class:"mt-2",label:"Applicant Mobile"}),e(c,{class:"mt-2",label:"Applicant Fax"}),e(c,{class:"mt-2",label:"Applicant Other Phone"}),e(c,{class:"mt-2",label:"Applicant Address1"}),e(c,{class:"mt-2",label:"Applicant Address2"}),e(c,{class:"mt-2",label:"Applicant Address3"}),e(c,{class:"mt-2",label:"Applicant Postcode"}),e(c,{class:"mt-2",label:"Applicant City"}),e(c,{class:"mt-2",label:"Applicant State"}),e(c,{class:"mt-2",label:"Applicant Email"})]),_:1})]),_:1}),e(G,null,{default:l(()=>[e(R,null,{default:l(()=>[y("Filter Instanllation: ")]),_:1}),e(U,null,{default:l(()=>[e(c,{class:"mt-2",label:"Installation Address1"}),e(c,{class:"mt-2",label:"Installation Address2"}),e(c,{class:"mt-2",label:"Installation Address3"}),e(c,{class:"mt-2",label:"Installation Postcode"}),e(c,{class:"mt-2",label:"Installation City"}),e(c,{class:"mt-2",label:"Installation State"}),e(c,{class:"mt-2",label:"Installation Property Type"}),e(c,{class:"mt-2",label:"Installation Contact Person"}),e(c,{class:"mt-2",label:"Installation Contact Number"})]),_:1})]),_:1}),e(G,null,{default:l(()=>[e(R,null,{default:l(()=>[y("Filter Billing: ")]),_:1}),e(U,null,{default:l(()=>[e(c,{class:"mt-2",label:"Billing Address1"}),e(c,{class:"mt-2",label:"Billing Address2"}),e(c,{class:"mt-2",label:"Billing Address3"}),e(c,{class:"mt-2",label:"Billing Postcode"}),e(c,{class:"mt-2",label:"Billing City"}),e(c,{class:"mt-2",label:"Billing State"})]),_:1})]),_:1})]),_:1})])}}},Nt=m("div",{class:"v-card-title"},"Manual Assign",-1),wt={class:"mx-2"},Dt={class:"d-flex align-center justify-center my-4"},Ft={__name:"ManualAssign",setup(t){const u=()=>{console.log("here")};return(s,a)=>(r(),p("div",null,[Nt,e(z,{class:"my-4"},{default:l(()=>[e(P,{cols:"12",md:"3"},{default:l(()=>[e(Ie)]),_:1}),e(P,{cols:"12",md:"9"},{default:l(()=>[m("div",wt,[e(Y,{variant:"outlined",color:"error"},{default:l(()=>[y(" Note: This action will replace on assigned data, if data assigned, and each time will limit 200 result ")]),_:1}),m("div",Dt,[e(D,{items:s.users,variant:"outlined",label:"Assign Data To"},null,8,["items"]),e(T,{class:"ml-2",onClick:u},{default:l(()=>[y(" Assign ")]),_:1})]),e(Pe,{showSelect:""})])]),_:1})]),_:1})]))}},Ot=m("div",{class:"v-card-title"},"Manual Assign 2",-1),Rt={class:"mx-2"},Ut={key:0,class:"text-right",style:{color:"rgb(var(--v-theme-error))"}},jt={__name:"ManualAssign2",setup(t){const u=f("result: 2"),s=f("FOLLOWUP = 2"),a=()=>{console.log("here")};return(d,n)=>(r(),p("div",null,[Ot,e(z,{class:"my-4"},{default:l(()=>[e(P,{cols:"12",md:"3"},{default:l(()=>[e(Ie)]),_:1}),e(P,{cols:"12",md:"6"},{default:l(()=>[m("div",Rt,[e(Y,{variant:"outlined",color:"error"},{default:l(()=>[y(" Note: This action will replace on assigned data, if data assigned, and each time will limit 200 result ")]),_:1}),e(D,{class:"mt-4",items:d.users,variant:"outlined",label:"Assign Data To"},null,8,["items"]),e(c,{class:"mt-4",label:"Assign Limit"}),o(u).length>0?(r(),p("div",Ut,B(o(u)),1)):k("",!0),e(T,{class:"mt-4",onClick:a},{default:l(()=>[y(" Assign ")]),_:1})])]),_:1}),e(P,{cols:"12",md:"3"},{default:l(()=>[o(s).length>0?(r(),L(Y,{key:0,variant:"outlined",color:"error"},{default:l(()=>[y(B(o(s)),1)]),_:1})):k("",!0)]),_:1})]),_:1})]))}};const Mt={class:"filter-tabs"},qt=m("div",{class:"d-flex w-full"},[m("small",null,"Filter: ")],-1),zt={class:"mb-2"},Gt={__name:"FilterTabs",props:{filterList:{type:Object,required:!1}},emits:["set-filter"],setup(t,{emit:u}){const s=t,a=f("Default"),d=(n,i)=>{console.log(n,i),u("set-filter",{status:n,sub_status:i})};return(n,i)=>(r(),p("div",Mt,[qt,m("div",zt,[(r(!0),p(J,null,H(s.filterList,(_,v)=>(r(),L(be,{key:v},{activator:l(({props:A})=>[_.All>0?(r(),L(T,pe({key:0,variant:"text",color:v==o(a)?"primary":"black"},A),{default:l(()=>[e(ne,{class:"custom__badge mr-4",content:_.All,"offset-x":-8,"offset-y":-8},{default:l(()=>[y(B(v),1)]),_:2},1032,["content"]),Object.keys(_).length>1?(r(),L(Q,{key:0,icon:"tabler-chevron-down"})):k("",!0)]),_:2},1040,["color"])):k("",!0)]),default:l(()=>[Object.keys(_).length>1?(r(),L(xe,{key:0},{default:l(()=>[(r(!0),p(J,null,H(_,(A,C)=>(r(),L(he,{key:C,onClick:$=>d(v,C)},{default:l(()=>[e(ne,{class:"custom__badge",content:A,"offset-x":-18,"offset-y":6},{default:l(()=>[y(B(C),1)]),_:2},1032,["content"])]),_:2},1032,["onClick"]))),128))]),_:2},1024)):k("",!0)]),_:2},1024))),128))])]))}},Wt={__name:"ListWithFilter",props:{campaign_id:{type:Number,required:!0}},setup(t){const u=t,s=f({}),a=f([]),d=f("Default"),n=f(""),i=()=>{W.post(`/admin/campaigns/${u.campaign_id}/detail`,{status:d.value,sub_status:n.value}).then(v=>{const A={},{counts_status:C,counts_substatus:$,list:x}=v.data;for(var b of C){const I=b.progressStatus==""?"Default":b.progressStatus,N={All:b.count};I!="Default"&&$.filter(V=>V.progressStatus==b.progressStatus).forEach(V=>{N[V.progressSubStatus]=V.count}),A[`${I}`]=N}s.value=A,a.value=x})},_=v=>{d.value!=v.status&&n.value!=v.sub_status&&(d.value=v.status,n.value=v.sub_status,i())};return ve(()=>{i()}),(v,A)=>(r(),p("div",null,[Object.keys(o(s)).length>0?(r(),L(Gt,{key:0,filterList:o(s),status:o(d),sub_status:o(n),onSetFilter:_},null,8,["filterList","status","sub_status"])):k("",!0),e(Pe,{data:o(a)},null,8,["data"])]))}},Jt={class:"mt-4"},Le={__name:"StatisticsList",props:{data:{type:Array,required:!0}},setup(t){const u=[{key:"name",title:"Name"},{key:"INEFFECTIVE",title:"INEFFECTIVE"},{key:"REJECT",title:"REJECT"},{key:"SUCCESS",title:"SUCCESS (Consumer Plan)"},{key:"WINBACK",title:"WINBACK"},{key:"NEW_NEW",title:"NEW NEW"},{key:"TOTAL_CALLS	",title:"TOTAL CALLS"},{key:"CONVERSION_RATE",title:"CONVERSION RATE"}];return(s,a)=>(r(),p("div",Jt,[e(o(Ve),{headers:u,items:t.data},null,8,["items"])]))}},Ht=m("div",{class:"v-card-title"},"Accumulated Data",-1),Kt={__name:"AccumulateList",setup(t){const u=f([]);return(s,a)=>(r(),p("div",null,[Ht,e(Le,{data:o(u)},null,8,["data"])]))}};const Yt=m("div",{class:"v-card-title"},"Filtered Accumulated Data",-1),Qt=m("div",{class:"d-flex mb-2 mx-4"},[m("small",null,"Filter: ")],-1),Xt={class:"d-flex mx-4 align-center"},Zt={__name:"DateAccumulateList",setup(t){const u=f([]),s=f(""),a=["By Progress Updated Date","By Import Date","By Successful Date"];return(d,n)=>{const i=Ce;return r(),p("div",null,[Yt,Qt,m("div",Xt,[e(D,{class:"mr-2 date-option",items:a,label:"Date Option"}),e(i,{class:"mr-4 date-picker",modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=_=>w(s)?s.value=_:null),config:{mode:"range"}},null,8,["modelValue"]),e(T,null,{default:l(()=>[y(" Apply ")]),_:1})]),e(Le,{data:o(u)},null,8,["data"])])}}};const ea={key:0},ta={key:1},aa={key:2},la={key:3},sa={key:4},na={key:5},oa={key:6},$a={__name:"[id]",setup(t){const u=[{title:"Auto Assign",value:"auto-assign"},{title:"Manual Assign",value:"manual-assign"},{title:"Manual Assign2",value:"manual-assign2"}],s=[{title:"Accumulate",value:"accumulate"},{title:"Today",value:"today"}],a=_e(),d=parseInt(a.params.id),n=f("list"),i=_=>{n.value=_};return(_,v)=>(r(),p("div",null,[e(vt,null,{default:l(()=>[e(pt,null,{append:l(()=>[e(oe,{class:"mr-2",menuTitle:"Assign",onUpdateAction:i,menuList:u}),e(oe,{class:"mr-2",menuTitle:"Lead Progress",onUpdateAction:i,menuList:s}),e(T,{class:"mr-2",color:"success",rounded:"pill",onClick:v[0]||(v[0]=()=>i("list"))},{default:l(()=>[y(" Manage ")]),_:1}),e(T,{color:"error",rounded:"pill",onClick:v[1]||(v[1]=()=>i("blocking"))},{default:l(()=>[y(" Blocking ")]),_:1})]),default:l(()=>[e(_t,null,{default:l(()=>[y("Campaign Detail")]),_:1})]),_:1}),e(ke,null,{default:l(()=>[o(n)=="auto-assign"?(r(),p("div",ea,[e(It)])):k("",!0),o(n)=="manual-assign"?(r(),p("div",ta,[e(Ft)])):k("",!0),o(n)=="manual-assign2"?(r(),p("div",aa,[e(jt)])):k("",!0),o(n)=="list"?(r(),p("div",la,[e(Wt,{campaign_id:o(d)},null,8,["campaign_id"])])):k("",!0),o(n)=="accumulate"?(r(),p("div",sa,[e(Kt)])):k("",!0),o(n)=="today"?(r(),p("div",na,[e(Zt)])):k("",!0),o(n)=="blocking"?(r(),p("div",oa,[e(At)])):k("",!0)]),_:1})]),_:1})]))}};export{$a as default};
