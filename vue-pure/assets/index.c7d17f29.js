import{d as v,p as C,G as b,r as t,c as h,w as e,o as D,a as u,y as i,cb as w,B as y,C as A,n,u as _,cE as f}from"./vendor.d1eb2952.js";/* empty css                   */import{_ as j}from"./index.a85b29e5.js";import{u as k}from"./upload-filled.bca549a6.js";const m=o=>(y("data-v-4e6ad48c"),o=o(),A(),o),G=m(()=>n("div",{class:"el-upload__text"},[_("\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216"),n("em",null,"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6")],-1)),I=m(()=>n("div",{class:"el-upload__tip"}," \u53EA\u652F\u630110MB\u5927\u5C0F\u4EE5\u5185\u7684DWG\u6587\u4EF6\uFF0C\u6CA1\u6709\u56FE\u7EB8\u8BF7\u76F4\u63A5\u4E0B\u4E00\u6B65 ",-1)),M=_("\u6E05\u7A7A\u5DF2\u9009\u62E9\u6587\u4EF6"),N=_("\u4E0A\u4F20\u56FE\u7EB8\u5E76\u8FDB\u5165\u4E0B\u4E00\u6B65"),R=v({emits:["next"],setup(o,{emit:E}){const a=C(),F=b(),x=()=>{a.value.submit(),F.push("/newTask/formDesign"),E("next",2)},B=()=>{a.value.clearFiles()},g=l=>{const c=l.name.split(".")[1]==="dwg",s=l.size/1024/1024<10;return c||f.error("\u56FE\u7EB8\u6587\u4EF6\u53EA\u652F\u6301dwg\u683C\u5F0F"),s||f.error("\u56FE\u7EB8\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB!"),c&&s};return(l,c)=>{const s=t("el-icon"),p=t("el-button"),d=t("el-col"),r=t("el-row");return D(),h(r,{type:"flex",justify:"center"},{default:e(()=>[u(d,{id:"upload-box",xs:24,sm:24,md:20,lg:20,xl:20},{default:e(()=>[u(i(w),{ref_key:"uploadRef",ref:a,class:"upload",action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,"before-upload":g,accept:".dwg",drag:"",multiple:""},{tip:e(()=>[I]),default:e(()=>[u(s,{class:"el-icon--upload"},{default:e(()=>[u(i(k))]),_:1}),G]),_:1},512),u(r,{gutter:20},{default:e(()=>[u(d,{xs:24,sm:12,md:12,lg:12,xl:12},{default:e(()=>[u(p,{class:"ml-3",type:"default",onClick:B},{default:e(()=>[M]),_:1})]),_:1}),u(d,{xs:24,sm:12,md:12,lg:12,xl:12},{default:e(()=>[u(p,{class:"ml-3",type:"success",onClick:x},{default:e(()=>[N]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});var T=j(R,[["__scopeId","data-v-4e6ad48c"]]);export{T as default};
