var m=Object.defineProperty,u=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var i=(a,n,e)=>n in a?m(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,d=(a,n)=>{for(var e in n||(n={}))f.call(n,e)&&i(a,e,n[e]);if(o)for(var e of o(n))p.call(n,e)&&i(a,e,n[e]);return a},c=(a,n)=>u(a,l(n));import{$ as s}from"./index.a85b29e5.js";import{d as g,_ as h,r as T,o as x,c as k,cH as v,cI as _,y as z}from"./vendor.d1eb2952.js";const S={name:"user"},P=g(c(d({},S),{setup(a){const n=h({border:!0,resizable:!0,keepSource:!0,height:578,printConfig:{},importConfig:{},exportConfig:{},pagerConfig:{perfect:!0,pageSize:15},editConfig:{trigger:"click",mode:"row",showStatus:!0},toolbarConfig:{buttons:[{code:"insert_actived",name:s("buttons.hsadd"),status:"perfect",icon:"fa fa-plus"},{code:"mark_cancel",name:s("buttons.hsmark"),status:"perfect",icon:"fa fa-trash-o"},{code:"save",name:s("buttons.hssave"),status:"perfect",icon:"fa fa-save"}],perfect:!0,refresh:{icon:"fa fa-refresh",iconLoading:"fa fa-spinner fa-spin"},import:{icon:"fa fa-upload"},export:{icon:"fa fa-download"},print:{icon:"fa fa-print"},zoom:{iconIn:"fa fa-arrows-alt",iconOut:"fa fa-expand"},custom:{icon:"fa fa-cog"}},proxyConfig:{props:{result:"result",total:"page.total"},ajax:{query:({page:e})=>new Promise(r=>{setTimeout(()=>{const t=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women ",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women ",age:21,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man ",age:29,address:"vxe-table \u4ECE\u5165\u95E8\u5230\u653E\u5F03"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man ",age:35,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"Man ",age:35,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"Man ",age:35,address:"Guangzhou"}];r({page:{total:t.length},result:t.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize)})},100)}),delete:()=>new Promise(e=>{setTimeout(()=>{e({})},100)}),save:()=>new Promise(e=>{setTimeout(()=>{e({})},100)})}},columns:[{type:"checkbox",width:50},{type:"seq",width:60},{field:"name",title:"Name",editRender:{name:"input"}},{field:"nickname",title:"Nickname",editRender:{name:"input"}},{field:"role",title:"Role",editRender:{name:"input"}},{field:"address",title:"Address",showOverflow:!0,editRender:{name:"input"}}]});return(e,r)=>{const t=T("vxe-grid");return x(),k(t,v(_(z(n))),null,16)}}}));export{P as default};
