const s="All",a="Admin",i="Team Leader",l="Agent",n="active",o="inactive",c=[i,l],r=[l],p=[n,o],k=[s,n,o],d=[s,a,i,l],m={username:"",name:"",email:"",password:"",role:l,status:n,team_leader:"",caller_id:0,contact_number:""},A={id:-1,name:"",parent_id:-1},u={id:-1,name:"",company:"",category:"",sub_category:"",start_date:new Date().toISOString().slice(0,19).replace("T"," "),end_date:new Date().toISOString().slice(0,19).replace("T"," "),status:"active",today_sales:0,total_sales:0},g={page:1,itemsPerPage:5,sortBy:[""],sortDesc:[!1]},S=[s,...p],T=()=>e()==a?c:r,C=()=>e()==a?d:r,E={user:[{key:"username",title:"Username"},{key:"name",title:"Name"},{key:"team_leader",title:"Team Leader"},{key:"email",title:"Email"},{key:"role",title:"Role"},{key:"status",title:"Status"},{key:"created_at",title:"Created Date"},{key:"actions",title:"Action"}],campaign:[{title:"NAME",key:"name"},{title:"Company",key:"company"},{title:"Category",key:"category"},{title:"Sub Category",key:"sub_category"},{title:"Start Date",key:"start_date"},{title:"End Date",key:"end_date"},{title:"Today Sales",key:"today_sales"},{title:"Total Sales",key:"total_sales"},{title:"STATUS",key:"status"},{title:"Action",key:"actions"}],campaignDetail:[{key:"id",title:"id"},{key:"campaignAgentRemark",title:"Campaign Agent Remark"},{key:"currentstatusdate",title:"Current Status Date"},{key:"applicanttypename",title:"Applicant Type Name"},{key:"applicantidentity",title:"Applicant Identity"},{key:"applicantcompany",title:"Applicant Company"},{key:"applicantbusinessregistrationnumber",title:"Applicant Business Registration Number"},{key:"applicantname",title:"Applicant Name"},{key:"applicantgender",title:"Applicant Gender"},{key:"racename",title:"Race name"},{key:"applicantmobile",title:"Applicant Mobile"},{key:"applicantfax",title:"Applicant Fax"},{key:"applicantotherphone",title:"Applicant Other Phone"},{key:"applicantaddress1",title:"Applicant Address1"},{key:"applicantaddress2",title:"Applicant Address2"},{key:"applicantaddress3",title:"Applicant Address3"},{key:"applicantpostcode",title:"Applicant Postcode"},{key:"applicantcity",title:"Applicant City"},{key:"applicantstate",title:"Applicant State"},{key:"applicantemail",title:"Applicant Email"},{key:"installationaddress1",title:"Installation Address1"},{key:"installationaddress2",title:"Installation Address2"},{key:"installationaddress3",title:"Installation Address3"},{key:"installationpostcode",title:"Installation Postcode"},{key:"installationcity",title:"Installation City"},{key:"installationstate",title:"Installation State"},{key:"installationpropertytype",title:"Installation Property Type"},{key:"installationcontactperson",title:"Installation Contact Person"},{key:"installationcontactnumber",title:"installation Contact Number"},{key:"billingaddress1",title:"Billing Address1"},{key:"billingaddress2",title:"Billing Address2"},{key:"billingaddress3",title:"Billing Address3"},{key:"billingpostcode",title:"Billing Postcode"},{key:"billingcity",title:"Billing City"},{key:"billingstate",title:"Billing State"},{key:"productgroup",title:"Product Group"},{key:"productname",title:"Product Name"}]},I={product:"",package:"",fullname:"",passportNo:"",address1:"",address2:"",address3:"",state:"",area:"",postcode:"",contact:"",email:"",citizen:"",agentcode:""},_={product:"PRODUCT",package:"PACKAGE",fullname:"FULL NAME as per NRIC",passportNo:"NRIC / PASSPORT NO",address1:"ADDRESS 1",address2:"ADDRESS 2",address3:"ADDRESS 3",state:"STATE",area:"AREA",postcode:"POSTCODE",contact:"CONTACT",email:"EMAIL",citizen:"CITIZEN",agentcode:"AGENT CODE"},e=()=>{const t=localStorage.getItem("userData");return JSON.parse(t).role},b=()=>{const t=localStorage.getItem("userData");return JSON.parse(t)},D=()=>e()==a,N=()=>e()==a||e()==i;export{s as A,l as R,N as a,C as b,b as c,S as d,m as e,E as f,A as g,u as h,D as i,k as j,I as k,T as r,_ as s,g as t,p as u};
