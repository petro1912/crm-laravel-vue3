import{_ as ue}from"./AppSelect-4ea30f7a.js";import{V as ne,_ as re}from"./VSnackbar-c7b05951.js";import{_ as de}from"./DialogCloseBtn-7aeb1939.js";import{r as ie,R as me,u as pe,b as ce,A as Y,d as fe,t as Ve,e as j,f as ve}from"./auth-6f71121d.js";import{a as k}from"./axios-92953ab3.js";import{_ as ge}from"./AvatarPicker-2b599145.js";import{V as S,d as I,a as h,b as N,c as Z}from"./VCard-4d0186bd.js";import{V as ee,a as g}from"./VRow-7a47c5d5.js";import{j as v,a1 as J,G as Q,a2 as le,o as $,b as B,w as l,n as e,p as a,A as z,E as L,L as w,C as V,x as M,l as ae,c as _e,z as W,r as Ue}from"./main-ba954960.js";import{V as G}from"./VDialog-e4ed048c.js";import{V as K}from"./VTextField-33a062f4.js";import{V as X,a as Ce}from"./VSelect-62ecfe7f.js";import{V as be,a as we}from"./VPagination-3e879991.js";import{V as F}from"./VSpacer-466fc719.js";import"./forwardRefs-9c8cfe26.js";import"./transition-c7299037.js";import"./VBadge-3eb8ce38.js";import"./VAvatar-76d73489.js";import"./VImg-cfd5b846.js";import"./VDivider-d0778b72.js";import"./VList-8a00952c.js";import"./VMenu-40c07e5e.js";import"./VCheckboxBtn-9b8ab3ee.js";const ye={__name:"CreateDialog",props:{isDialogVisible:{type:Boolean,required:!1},user:{type:Object,required:!1},isUpdate:{type:Boolean,required:!1}},emits:["close-dialog"],setup(T,{emit:D}){const p=T,_=ie(),r=pe,U=v([]),C=J(p,"isDialogVisible"),t=J(p,"user"),i=v(""),y=Q(()=>c.value.length>0),x=Q(()=>t.value.role==me),c=v(""),R=()=>{D("close-dialog",!1)},q=()=>{const m=t.value;if(m.username.length==0){c.value="Username must be not empty.";return}if(!/^[a-zA-Z0-9_]+$/.test(m.username)){c.value="Username must contain alphanumeric and underscore characters only.";return}if(m.role=="Agent"&&(m.team_leader==0||m.team_leader=="")){c.value="You must select team leader.";return}if(m.status!="active"&&m.status!="inactive"){c.value="Status is wrong.";return}if(!p.isUpdate&&m.password.length==0){c.value="Password must be not empty.";return}if(!p.isUpdate&&m.password!=i.value){c.value="Password mismatch.";return}p.isUpdate?k.put("/users",m).then(s=>{D("close-dialog",!0),t.value=defaultUser}).catch(s=>{s.response?(console.log(s.response.data),console.log(s.response.status),console.log(s.response.headers)):s.request?console.log(s.request):c.value=s.message}):k.post("/users",m).then(s=>{D("close-dialog",!0),t.value=defaultUser}).catch(s=>{s.response?(console.log(s.response.data),console.log(s.response.status),console.log(s.response.headers)):s.request?console.log(s.request):c.value=s.message})},E=()=>{k.get("/users/leaders").then(m=>{const{leaders:s}=m.data;U.value=s.map(P=>({value:P.id,title:P.name}))})};return le(()=>{E()}),(m,s)=>{const P=de,b=re,A=ue;return $(),B(G,{modelValue:a(C),"onUpdate:modelValue":s[12]||(s[12]=n=>L(C)?C.value=n:null),persistent:"","max-width":"720"},{default:l(()=>[e(P,{onClick:R}),e(S,{title:"User Profile"},{default:l(()=>[e(I,null,{default:l(()=>[e(ge),e(ee,{class:"mt-4"},{default:l(()=>[e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(b,{modelValue:a(t).username,"onUpdate:modelValue":s[0]||(s[0]=n=>a(t).username=n),label:"User Name"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(b,{modelValue:a(t).name,"onUpdate:modelValue":s[1]||(s[1]=n=>a(t).name=n),label:"Name"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(b,{modelValue:a(t).email,"onUpdate:modelValue":s[2]||(s[2]=n=>a(t).email=n),label:"Email","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(A,{modelValue:a(t).role,"onUpdate:modelValue":s[3]||(s[3]=n=>a(t).role=n),items:a(_),label:"Role"},null,8,["modelValue","items"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[a(x)?($(),B(A,{key:0,modelValue:a(t).team_leader,"onUpdate:modelValue":s[4]||(s[4]=n=>a(t).team_leader=n),items:a(U),label:"Team Leader"},null,8,["modelValue","items"])):z("",!0)]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(A,{modelValue:a(t).status,"onUpdate:modelValue":s[5]||(s[5]=n=>a(t).status=n),items:a(r),label:"Status"},null,8,["modelValue","items"])]),_:1}),p.isUpdate?z("",!0):($(),B(g,{key:0,cols:"12",sm:"6"},{default:l(()=>[e(b,{modelValue:a(t).password,"onUpdate:modelValue":s[6]||(s[6]=n=>a(t).password=n),label:"Password",type:"password"},null,8,["modelValue"])]),_:1})),p.isUpdate?z("",!0):($(),B(g,{key:1,cols:"12",sm:"6"},{default:l(()=>[e(b,{modelValue:a(i),"onUpdate:modelValue":s[7]||(s[7]=n=>L(i)?i.value=n:null),label:"Password Confirmation",type:"password"},null,8,["modelValue"])]),_:1})),e(g,{cols:"12",sm:"6"},{default:l(()=>[e(b,{modelValue:a(t).caller_id,"onUpdate:modelValue":s[8]||(s[8]=n=>a(t).caller_id=n),label:"Caller ID",type:"number"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6"},{default:l(()=>[e(b,{modelValue:a(t).contact_number,"onUpdate:modelValue":s[9]||(s[9]=n=>a(t).contact_number=n),label:"Contact Number",type:"text"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(I,{class:"d-flex justify-end flex-wrap gap-3"},{default:l(()=>[e(w,{variant:"tonal",color:"secondary",onClick:s[10]||(s[10]=n=>C.value=!1)},{default:l(()=>[V(" Close ")]),_:1}),e(w,{onClick:q},{default:l(()=>[V(" Save ")]),_:1})]),_:1})]),_:1}),e(ne,{modelValue:a(y),"onUpdate:modelValue":s[11]||(s[11]=n=>L(y)?y.value=n:null),timeout:1e3,location:"top end",variant:"tonal",color:"error"},{default:l(()=>[V(M(a(c)),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}},xe={class:"d-flex align-center mx-4"},ke={__name:"FilterUser",emits:["apply-filter"],setup(T,{emit:D}){const p=ce(),_=fe,r=v({id:"",name:"",role:Y,status:Y}),U=()=>{D("apply-filter",r.value)};return(C,t)=>($(),B(S,null,{default:l(()=>[e(h,null,{default:l(()=>[e(N,null,{default:l(()=>[V("Filter ")]),_:1})]),_:1}),e(I,null,{default:l(()=>[ae("div",xe,[e(K,{modelValue:a(r).id,"onUpdate:modelValue":t[0]||(t[0]=i=>a(r).id=i),label:"Id"},null,8,["modelValue"]),e(K,{class:"ml-4",modelValue:a(r).name,"onUpdate:modelValue":t[1]||(t[1]=i=>a(r).name=i),label:"Name"},null,8,["modelValue"]),e(X,{class:"ml-4",modelValue:a(r).role,"onUpdate:modelValue":t[2]||(t[2]=i=>a(r).role=i),items:a(p),variant:"outlined",label:"Role"},null,8,["modelValue","items"]),e(X,{class:"ml-4",modelValue:a(r).status,"onUpdate:modelValue":t[3]||(t[3]=i=>a(r).status=i),items:a(_),variant:"outlined",label:"Status"},null,8,["modelValue","items"]),e(w,{class:"ml-4",onClick:U},{default:l(()=>[V(" Apply ")]),_:1})])]),_:1})]),_:1}))}},De={class:"d-flex gap-1"},Qe={__name:"index",setup(T){const D=ve.user,p=v([]),_=v([]),r=v(Ve),U=v(j),C=v(!1),t=v(!1),i=v(!1),y=v(-1),x=v(!1),c=v(-1),R=u=>u==="active"?{color:"success",text:u}:{color:"secondary",text:u},q=()=>{t.value=!0,C.value=!1,U.value=j},E=u=>{t.value=!1,U.value=j,u&&H()},m=u=>{k.get(`/users/${u}`).then(o=>{const{user:f}=o.data;U.value=f,t.value=!0,C.value=!0})},s=u=>{i.value=!0,y.value=u},P=()=>{i.value=!1,y.value=-1},b=()=>{k.delete(`/users/${y.value}`).then(u=>{const{users:o}=u.data;p.value=o,_.value=o,i.value=!1,y.value=-1})},A=u=>{x.value=!0,c.value=u},n=()=>{x.value=!0,c.value=id},se=()=>{k.put(`/users/${c.value}/reset-password`).then(u=>{x.value=!1,c.value=-1})},H=()=>{k.get("/users").then(u=>{const{users:o}=u.data;console.log("users",o),p.value=o,_.value=o})},te=u=>{k.put(`/users/activate/${u}`).then(o=>{const{users:f}=o.data;p.value=f,_.value=f})},oe=u=>{let o=p.value;u.id!=""&&(o=o.filter(f=>f.id==u.id)),u.name!=""&&(o=o.filter(f=>f.username.includes(u.name))),u.role!="All"&&(o=o.filter(f=>f.role==u.role)),u.status!="All"&&(o=o.filter(f=>f.status==u.status)),_.value=[...o]};return le(()=>{H()}),(u,o)=>{const f=Ue("IconBtn");return $(),_e("div",null,[e(ke,{onApplyFilter:oe}),e(S,{class:"mt-4"},{default:l(()=>[e(h,null,{append:l(()=>[e(w,{onClick:q,size:"small",icon:"tabler-plus"})]),default:l(()=>[e(N,null,{default:l(()=>[V("User List")]),_:1})]),_:1}),e(I,null,{default:l(()=>[e(a(be),{headers:a(D),items:a(_),"items-per-page":a(r).itemsPerPage,page:a(r).page,"onUpdate:options":o[2]||(o[2]=d=>r.value=d)},{"item.status":l(({item:d})=>[e(Ce,{color:R(d.raw.status).color,onClick:O=>te(d.raw.id),size:"small"},{default:l(()=>[V(M(R(d.raw.status).text),1)]),_:2},1032,["color","onClick"])]),"item.team_leader":l(({item:d})=>[V(M(d.raw.leader?d.raw.leader.name:""),1)]),"item.actions":l(({item:d})=>[ae("div",De,[e(f,{onClick:O=>m(d.raw.id)},{default:l(()=>[e(W,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(f,{onClick:O=>s(d.raw.id)},{default:l(()=>[e(W,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"]),e(w,{rounded:"",onClick:O=>A(d.raw.id)},{default:l(()=>[V(" Reset Password ")]),_:2},1032,["onClick"])])]),bottom:l(()=>[e(I,{class:"mt-8"},{default:l(()=>[e(ee,null,{default:l(()=>[e(g,{lg:"2",cols:"3"},{default:l(()=>[e(K,{modelValue:a(r).itemsPerPage,"onUpdate:modelValue":o[0]||(o[0]=d=>a(r).itemsPerPage=d),label:"Rows per page:",type:"number",min:"-1",max:"15","hide-details":""},null,8,["modelValue"])]),_:1}),e(g,{lg:"10",cols:"9",class:"d-flex justify-end"},{default:l(()=>[e(we,{modelValue:a(r).page,"onUpdate:modelValue":o[1]||(o[1]=d=>a(r).page=d),"total-visible":"5",length:Math.ceil(a(p).length/a(r).itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headers","items","items-per-page","page"]),e(ye,{isDialogVisible:a(t),user:a(U),isUpdate:a(C),onCloseDialog:E},null,8,["isDialogVisible","user","isUpdate"]),e(G,{modelValue:a(i),"onUpdate:modelValue":o[3]||(o[3]=d=>L(i)?i.value=d:null),"max-width":"500px"},{default:l(()=>[e(S,null,{default:l(()=>[e(N,{class:"px-8 py-8"},{default:l(()=>[V(" Are you sure you want to delete this user? ")]),_:1}),e(Z,null,{default:l(()=>[e(F),e(w,{color:"error",variant:"outlined",onClick:P},{default:l(()=>[V(" Cancel ")]),_:1}),e(w,{color:"success",variant:"elevated",onClick:b},{default:l(()=>[V(" OK ")]),_:1}),e(F)]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(G,{modelValue:a(x),"onUpdate:modelValue":o[4]||(o[4]=d=>L(x)?x.value=d:null),"max-width":"500px"},{default:l(()=>[e(S,null,{default:l(()=>[e(N,{class:"px-8 py-8"},{default:l(()=>[V(" Are you sure you want to reset password of this user (Password: 123456)? ")]),_:1}),e(Z,null,{default:l(()=>[e(F),e(w,{color:"error",variant:"outlined",onClick:n},{default:l(()=>[V(" Cancel ")]),_:1}),e(w,{color:"success",variant:"elevated",onClick:se},{default:l(()=>[V(" OK ")]),_:1}),e(F)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}};export{Qe as default};
