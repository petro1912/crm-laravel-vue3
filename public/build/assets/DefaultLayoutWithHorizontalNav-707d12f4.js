import{o as n,c as d,F as g,a as $,b as f,e as w,_ as b,f as k,g as C,i as z,j as N,k as S,l as e,m,n as o,p as t,q as v,s as V,t as L,w as r,V as R,v as h,x,T as I,r as y}from"./main-b6631041.js";import B from"./Footer-3bb08230.js";import E from"./NavbarThemeSwitcher-19b0a56f.js";import H from"./UserProfile-4818197e.js";import{V as T}from"./VSpacer-c385105d.js";import"./VTooltip-5a155db2.js";import"./forwardRefs-813ef531.js";import"./transition-1cb87bca.js";import"./auth-368f15e6.js";import"./avatar-1-8ec11374.js";import"./VBadge-d11d4402.js";import"./VImg-06128a7e.js";import"./VMenu-f6e2ae7c.js";import"./dialog-transition-0b2641ee.js";import"./VList-29aa2d2e.js";import"./VAvatar-58f9d872.js";import"./VDivider-38ac4951.js";import"./VListItemAction-f647a685.js";const W={class:"nav-items"},q={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(u){const i=l=>"children"in l?b:k;return(l,p)=>(n(),d("ul",W,[(n(!0),d(g,null,$(u.navItems,(a,c)=>(n(),f(w(i(a)),{key:c,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},P={class:"horizontal-nav-content-container"},Y={class:"layout-page-content"},A={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(u){const{y:i}=C(),{width:l}=z(),p=V(),a=N(!1);p.beforeEach(()=>{a.value=!0}),p.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=S();return(s,O)=>(n(),d("div",{class:v(["layout-wrapper",t(c)(t(l),t(i))])},[e("div",{class:v(["layout-navbar-and-nav-container",t(_)&&"header-blur"])},[e("div",D,[e("div",F,[m(s.$slots,"navbar")])]),e("div",j,[e("div",P,[o(t(q),{"nav-items":u.navItems},null,8,["nav-items"])])])],2),e("main",Y,[s.$slots["content-loading"]?(n(),d(g,{key:0},[t(a)?m(s.$slots,"content-loading",{key:0}):m(s.$slots,"default",{key:1})],64)):m(s.$slots,"default",{key:1})]),e("footer",A,[e("div",G,[m(s.$slots,"footer")])])],2))}},K=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],M={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},_t={__name:"DefaultLayoutWithHorizontalNav",setup(u){const{appRouteTransition:i}=L();return(l,p)=>{const a=y("RouterLink"),c=y("RouterView");return n(),f(t(J),{"nav-items":t(K)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(t(R),{nodes:t(h).app.logo},null,8,["nodes"]),e("h1",M,x(t(h).app.title),1)]),_:1}),o(T),o(E,{class:"me-2"}),o(H)]),footer:r(()=>[o(B)]),default:r(()=>[o(c,null,{default:r(({Component:_})=>[o(I,{name:t(i),mode:"out-in"},{default:r(()=>[(n(),f(w(_)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{_t as default};
