import{t as d,i as f,o as m,b as c,w as o,p as n,y as v,l as g,n as e,z as h,A as C,T as V,e as w,r as l}from"./main-b6631041.js";import{i as b,a as B}from"./auth-368f15e6.js";import R from"./Footer-3bb08230.js";import k from"./NavbarThemeSwitcher-19b0a56f.js";import y from"./UserProfile-4818197e.js";import{V as N}from"./VSpacer-c385105d.js";import"./VTooltip-5a155db2.js";import"./forwardRefs-813ef531.js";import"./transition-1cb87bca.js";import"./avatar-1-8ec11374.js";import"./VBadge-d11d4402.js";import"./VImg-06128a7e.js";import"./VMenu-f6e2ae7c.js";import"./dialog-transition-0b2641ee.js";import"./VList-29aa2d2e.js";import"./VAvatar-58f9d872.js";import"./VDivider-38ac4951.js";import"./VListItemAction-f647a685.js";const T=()=>{const p=b(),a=B(),i=[{title:"Campaigns",to:{name:"campaigns"},icon:{icon:"tabler-plane"}}],s={title:"Users",to:{name:"users"},icon:{icon:"tabler-user"}};let t=[];return p&&(t=[{title:"Categories",to:{name:"categories"},icon:{icon:"tabler-plane"}}]),a&&(t=[s,...t]),[...i,...t]},x={class:"d-flex h-100 align-center"},X={__name:"DefaultLayoutWithVerticalNav",setup(p){const{appRouteTransition:a,isLessThanOverlayNavBreakpoint:i}=d(),{width:s}=f(),t=T();return(A,I)=>{const u=l("IconBtn"),_=l("RouterView");return m(),c(n(v),{"nav-items":n(t)},{navbar:o(({toggleVerticalOverlayNavActive:r})=>[g("div",x,[n(i)(n(s))?(m(),c(u,{key:0,id:"vertical-nav-toggle-btn",class:"ms-n3",onClick:$=>r(!0)},{default:o(()=>[e(h,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"])):C("",!0),e(k),e(N),e(y)])]),footer:o(()=>[e(R)]),default:o(()=>[e(_,null,{default:o(({Component:r})=>[e(V,{name:n(a),mode:"out-in"},{default:o(()=>[(m(),c(w(r)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{X as default};
