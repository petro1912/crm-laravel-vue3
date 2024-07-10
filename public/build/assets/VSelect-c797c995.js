import{g as ve,h as fe,V as X}from"./VTextField-bfab999d.js";import{f as me}from"./forwardRefs-7b02b8f0.js";import{N as W,b0 as le,$ as te,aF as pe,a0 as ne,as as se,at as oe,au as ie,aG as he,aH as ye,a1 as R,S as ue,n as t,aI as ke,al as K,b8 as Y,b2 as Ce,am as Ve,ao as be,aN as ge,ar as Ie,b9 as Pe,b3 as Se,a4 as ce,ba as De,av as we,aw as xe,ay as Be,aB as Ae,bb as Te,Q as J,aO as _e,bc as Le,G as D,I as q,ad as Z,aD as Fe,bd as Ee,z as $,aE as F,J as Oe,F as Q,H as T,aL as Re,O as $e,j as G,C as Ge,a3 as Ke}from"./main-08db9eca.js";import{m as Me,u as ze,V as Ne,a as ee}from"./VList-47c889fc.js";import{m as He}from"./transition-6efa60be.js";import{a as Ue}from"./VDivider-4da7b810.js";import{V as je}from"./VMenu-dc90384d.js";import{V as qe}from"./VCheckboxBtn-777f44ee.js";import{V as ae}from"./VAvatar-f99f38b4.js";const de=Symbol.for("vuetify:v-chip-group");W()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:le},...te(),...pe({selectedClass:"v-chip--selected"}),...ne(),...se(),...oe({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,_){let{slots:l}=_;const{themeClasses:w}=ie(e),{isSelected:i,select:x,next:b,prev:c,selected:y}=he(e,de);return ye({VChip:{color:R(e,"color"),disabled:R(e,"disabled"),filter:R(e,"filter"),variant:R(e,"variant")}}),ue(()=>t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},w.value,e.class],style:e.style},{default:()=>{var B;return[(B=l.default)==null?void 0:B.call(l,{isSelected:i,select:x,next:b,prev:c,selected:y.value})]}})),{}}});const Je=W()({name:"VChip",directives:{Ripple:ke},props:{activeClass:String,appendAvatar:String,appendIcon:K,closable:Boolean,closeIcon:{type:K,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:K,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Y(),onClickOnce:Y(),...Ce(),...te(),...Ve(),...be(),...ge(),...Ie(),...Pe(),...Se(),...ne({tag:"span"}),...se(),...oe({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,_){let{attrs:l,emit:w,slots:i}=_;const{t:x}=ce(),{borderClasses:b}=De(e),{colorClasses:c,colorStyles:y,variantClasses:B}=we(e),{densityClasses:M}=xe(e),{elevationClasses:d}=Be(e),{roundedClasses:C}=Ae(e),{sizeClasses:A}=Te(e),{themeClasses:E}=ie(e),V=J(e,"modelValue"),n=_e(e,de,!1),p=Le(e,l),L=D(()=>e.link!==!1&&p.isLink.value),r=D(()=>!e.disabled&&e.link!==!1&&(!!n||e.link||p.isClickable.value)),z=D(()=>({"aria-label":x(e.closeLabel),onClick(u){V.value=!1,w("click:close",u)}}));function O(u){var g;w("click",u),r.value&&((g=p.navigate)==null||g.call(p,u),n==null||n.toggle())}function N(u){(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),O(u))}return()=>{const u=p.isLink.value?"a":e.tag,g=!!(e.appendIcon||e.appendAvatar),H=!!(g||i.append),U=!!(i.close||e.closable),a=!!(i.filter||e.filter)&&n,s=!!(e.prependIcon||e.prependAvatar),f=!!(s||i.prepend),I=!n||n.isSelected.value;return V.value&&q(t(u,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":r.value,"v-chip--filter":a,"v-chip--pill":e.pill},E.value,b.value,I?c.value:void 0,M.value,d.value,C.value,A.value,B.value,n==null?void 0:n.selectedClass.value,e.class],style:[I?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:p.href.value,tabindex:r.value?0:void 0,onClick:O,onKeydown:r.value&&!L.value&&N},{default:()=>{var P;return[Fe(r.value,"v-chip"),a&&t(Ee,{key:"filter"},{default:()=>[q(t("div",{class:"v-chip__filter"},[i.filter?q(t(F,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Z("slot"),i.filter,"default"]]):t($,{key:"filter-icon",icon:e.filterIcon},null)]),[[Oe,n.isSelected.value]])]}),f&&t("div",{key:"prepend",class:"v-chip__prepend"},[i.prepend?t(F,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},i.prepend):t(Q,null,[e.prependIcon&&t($,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(ae,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((P=i.default)==null?void 0:P.call(i,{isSelected:n==null?void 0:n.isSelected.value,selectedClass:n==null?void 0:n.selectedClass.value,select:n==null?void 0:n.select,toggle:n==null?void 0:n.toggle,value:n==null?void 0:n.value.value,disabled:e.disabled}))??e.text,H&&t("div",{key:"append",class:"v-chip__append"},[i.append?t(F,{key:"append-defaults",disabled:!g,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},i.append):t(Q,null,[e.appendIcon&&t($,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(ae,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),U&&t("div",T({key:"close",class:"v-chip__close"},z.value),[i.close?t(F,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},i.close):t($,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Z("ripple"),r.value&&e.ripple,null]])}}}),Qe=Re({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:K,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:le},...Me({itemChildren:!1})},"v-select"),sa=W()({name:"VSelect",props:{...Qe(),...$e(ve({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...He({transition:{component:Ue}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,_){let{slots:l}=_;const{t:w}=ce(),i=G(),x=G(),b=J(e,"menu"),c=D({get:()=>b.value,set:a=>{var s;b.value&&!a&&((s=x.value)!=null&&s.ΨopenChildren)||(b.value=a)}}),{items:y,transformIn:B,transformOut:M}=ze(e),d=J(e,"modelValue",[],a=>B(Ke(a)),a=>{const s=M(a);return e.multiple?s:s[0]??null}),C=fe(),A=D(()=>d.value.map(a=>y.value.find(s=>e.valueComparator(s.value,a.value))||a)),E=D(()=>A.value.map(a=>a.props.value)),V=G(!1);let n="",p;const L=D(()=>e.hideSelected?y.value.filter(a=>!A.value.some(s=>s===a)):y.value),r=G();function z(a){e.openOnClear&&(c.value=!0)}function O(){e.hideNoData&&!y.value.length||e.readonly||C!=null&&C.isReadonly.value||(c.value=!c.value)}function N(a){var o,k,S,m;if(e.readonly||C!=null&&C.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(c.value=!0),["Escape","Tab"].includes(a.key)&&(c.value=!1),a.key==="ArrowDown"?(o=r.value)==null||o.focus("next"):a.key==="ArrowUp"?(k=r.value)==null||k.focus("prev"):a.key==="Home"?(S=r.value)==null||S.focus("first"):a.key==="End"&&((m=r.value)==null||m.focus("last"));const s=1e3;function f(v){const h=v.key.length===1,j=!v.ctrlKey&&!v.metaKey&&!v.altKey;return h&&j}if(e.multiple||!f(a))return;const I=performance.now();I-p>s&&(n=""),n+=a.key.toLowerCase(),p=I;const P=y.value.find(v=>v.title.toLowerCase().startsWith(n));P!==void 0&&(d.value=[P])}function u(a){if(e.multiple){const s=E.value.findIndex(f=>e.valueComparator(f,a.value));if(s===-1)d.value=[...d.value,a];else{const f=[...d.value];f.splice(s,1),d.value=f}}else d.value=[a],c.value=!1}function g(a){var s;(s=r.value)!=null&&s.$el.contains(a.relatedTarget)||(c.value=!1)}function H(a){V.value=!0}function U(a){var s;a.relatedTarget==null&&((s=i.value)==null||s.focus())}return ue(()=>{const a=!!(e.chips||l.chip),s=!!(!e.hideNoData||L.value.length||l.prepend||l.append||l["no-data"]),f=d.value.length>0,[I]=X.filterProps(e),P=f||!V.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return t(X,T({ref:i},I,{modelValue:d.value.map(o=>o.props.value).join(", "),"onUpdate:modelValue":o=>{o==null&&(d.value=[])},focused:V.value,"onUpdate:focused":o=>V.value=o,validationValue:d.externalValue,dirty:f,class:["v-select",{"v-select--active-menu":c.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:P,"onClick:clear":z,"onMousedown:control":O,onBlur:g,onKeydown:N}),{...l,default:()=>t(Q,null,[t(je,T({ref:x,modelValue:c.value,"onUpdate:modelValue":o=>c.value=o,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[s&&t(Ne,{ref:r,selected:E.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:H,onFocusout:U},{default:()=>{var o,k,S;return[!L.value.length&&!e.hideNoData&&(((o=l["no-data"])==null?void 0:o.call(l))??t(ee,{title:w(e.noDataText)},null)),(k=l["prepend-item"])==null?void 0:k.call(l),L.value.map((m,v)=>{var h;return l.item?(h=l.item)==null?void 0:h.call(l,{item:m,index:v,props:T(m.props,{onClick:()=>u(m)})}):t(ee,T({key:v},m.props,{onClick:()=>u(m)}),{prepend:j=>{let{isSelected:re}=j;return e.multiple&&!e.hideSelected?t(qe,{modelValue:re,ripple:!1,tabindex:"-1"},null):void 0}})}),(S=l["append-item"])==null?void 0:S.call(l)]}})]}),A.value.map((o,k)=>{var v;function S(h){h.stopPropagation(),h.preventDefault(),u(o)}const m={"onClick:close":S,modelValue:!0,"onUpdate:modelValue":void 0};return t("div",{key:o.value,class:"v-select__selection"},[a?l.chip?t(F,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>{var h;return[(h=l.chip)==null?void 0:h.call(l,{item:o,index:k,props:m})]}}):t(Je,T({key:"chip",closable:e.closableChips,size:"small",text:o.title},m),null):((v=l.selection)==null?void 0:v.call(l,{item:o,index:k}))??t("span",{class:"v-select__selection-text"},[o.title,e.multiple&&k<A.value.length-1&&t("span",{class:"v-select__selection-comma"},[Ge(",")])])])})])})}),me({isFocused:V,menu:c,select:u},i)}});export{sa as V,Je as a};
