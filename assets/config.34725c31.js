import{d as z,Y as D,_ as T,r as n,o as F,l as R,a as t,w as s,n as _,y as a,t as m,u as f}from"./vendor.ab8ff9dc.js";import{_ as I}from"./index.88f5bf22.js";const N={class:"config"},V={class:"list"},E=f("\u7F16\u8F91"),S=f("\u5220\u9664"),$={class:"page-left"},B={class:"select-count"},J=z({props:{drawer:{type:Boolean,default:!1},drawTitle:{default:""},direction:{default:"rtl"}},emits:["handleClose"],setup(r,{emit:g}){const i=D("xTable",null),e=T({tableData:[{name:"\u7981\u7528",dataval:"0"},{name:"\u542F\u7528",dataval:"1"}],isAllChecked:!1,isIndeterminate:!1,selectRecords:[],tablePage:{total:0,currentPage:1,pageSize:10}});function b(){e.isAllChecked=!1,e.isIndeterminate=!1,g("handleClose")}function v(l){}function x(l){}const C=()=>{setTimeout(()=>{console.log(i)},1e3);const l=i.value;l.setAllCheckboxRow(e.isAllChecked),e.selectRecords=l.getCheckboxRecords()},p=({records:l})=>{const o=i.value;e.isAllChecked=o.isAllCheckboxChecked(),e.isIndeterminate=o.isCheckboxIndeterminate(),e.selectRecords=l};return(l,o)=>{const h=n("el-divider"),d=n("vxe-table-column"),u=n("vxe-button"),k=n("vxe-table"),w=n("vxe-checkbox"),P=n("vxe-pager"),y=n("el-drawer");return F(),R("div",N,[t(y,{"model-value":r.drawer,title:r.drawTitle,direction:r.direction,"before-close":b,"destroy-on-close":"",size:"640px"},{default:s(()=>[t(h),_("div",V,[t(k,{ref_key:"xTable",ref:i,border:"",data:a(e).tableData,onCheckboxChange:p,onCheckboxAll:p},{default:s(()=>[t(d,{type:"checkbox",width:"60"}),t(d,{field:"name",title:"\u540D\u79F0"}),t(d,{field:"dataval",title:"\u6570\u636E\u503C"}),t(d,{title:"\u64CD\u4F5C",fixed:"right"},{default:s(({row:c})=>[t(u,{type:"text",icon:"fa fa-pencil-square-o",onClick:A=>v()},{default:s(()=>[E]),_:2},1032,["onClick"]),t(u,{type:"text",icon:"fa fa-trash-o",onClick:A=>x()},{default:s(()=>[S]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(P,{perfect:"","current-page":a(e).tablePage.currentPage,"onUpdate:current-page":o[1]||(o[1]=c=>a(e).tablePage.currentPage=c),"page-size":a(e).tablePage.pageSize,"onUpdate:page-size":o[2]||(o[2]=c=>a(e).tablePage.pageSize=c),total:a(e).tablePage.total,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},{left:s(()=>[_("span",$,[t(w,{modelValue:a(e).isAllChecked,"onUpdate:modelValue":o[0]||(o[0]=c=>a(e).isAllChecked=c),indeterminate:a(e).isIndeterminate,onChange:C},null,8,["modelValue","indeterminate"]),_("span",B,"\u5DF2\u9009\u4E2D"+m(a(e).selectRecords.length)+"\u6761",1),t(u,{size:"small"},{default:s(()=>[f(m(l.$t("buttons.hsdelete")),1)]),_:1})])]),_:1},8,["current-page","page-size","total"])])]),_:1},8,["model-value","title","direction"])])}}});var q=I(J,[["__scopeId","data-v-1763d464"]]);export{q as default};
