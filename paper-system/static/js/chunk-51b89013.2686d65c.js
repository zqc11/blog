(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-51b89013"],{"9de7":function(t,e,l){},a02b:function(t,e,l){"use strict";l("9de7")},c304:function(t,e,l){"use strict";l.r(e);var i={data(){return{activePageName:"1",mFlowItemID:"",optionList:[],templateList:[],vTemplateID:"",addFlowDialogVisible:!1,vFlowName:"",vRemark:"",mtemp:[""],checkedData:{},vdx:[""],vdd:[[]],mainHeight:this.$root.gScreenHeight-70,FlowDetaileDialogVisible:!1,StepersDialogVisible:!1,AllStepersDialogVisible:!1,steplist:[],flowlist:[],flowBfieldlist:[],stepdoclist:[],operatorList:[],active:0,total:0}},created(){this.getMyFlowList(),this.$root.leveOnePathName="流程管理",this.$root.leveTwoPathName="流程列表",this.tableHeight=JSON.parse(window.localStorage.getItem("gHeight"))-200,this.slbHeight=JSON.parse(window.localStorage.getItem("gHeight"))-195,this.mainHeight=JSON.parse(window.localStorage.getItem("gHeight"))-185,this.mainWidth=this.$root.gScreenWidth-210,this.getAllFlowTemplate()},mounted(){},methods:{addClass({row:t,column:e,columnIndex:l}){if(1<l&&""!==t[e.label])return"cell-grey"},async getMyFlowList(){var t=(await this.$http.post("getMyFlowList",{hToken:window.sessionStorage.getItem("token")}))["data"];200!==t.status&&this.$message.error("获取流程失败！"),0===t.total?this.flowlist="":this.flowlist=JSON.parse(t.data),this.flowBfieldlist=JSON.parse(t.tableBfield)},async getFlowStepList(t){this.mFlowItemID=t,t=(await this.$http.post("getFlowStepList",{hFlowItemID:t})).data,200!==t.status&&this.$message.error("获取 FlowItem 失败！"),0===t.total?this.steplist="":(this.steplist=t.datastep,this.steplist=JSON.parse(t.data))},async getFlowDocList(t,e){t=(await this.$http.post("getFlowDocList",{hFlowItemID:t,hStepID:e,hToken:window.sessionStorage.getItem("token")})).data,200!==t.status&&this.$message.error("获取 FlowItem 失败！"),0===t.total?(this.stepdoclist=null,this.operatorList=null):(this.operatorList=JSON.parse(t.mStream),this.stepdoclist=JSON.parse(t.data))},getAllOperatorList(t){this.getFlowStepList(t).then(()=>{if(null===this.steplist)return this.$message.error("流程节点数为0，工作流设计错误！");this.getFlowDocList(t,""),this.AllStepersDialogVisible=!0})},getOperatorList(t){this.getFlowStepList(t).then(()=>{if(null===this.steplist)return this.$message.error("流程节点数为0，工作流设计错误！");this.getFlowDocList(t,this.steplist[0].t_ID),this.activePageName=this.steplist[0].t_ID,this.StepersDialogVisible=!0,this.FlowDetaileDialogVisible=!1})},async removeDocInFlow(t){var e;return"confirm"!==await this.$confirm("确信要从审批流程中移出文件-"+t.t_Name+"-吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(t=>t)?this.$message.info("已取消移出"):(e=(await this.$http.post("removeItemFromFlow",{hDocCatID:t.t_CatID,hItemID:t.t_ID,hStepID:t.t_StepID,hStepName:t.t_StepName,hFlowItemID:t.t_FlowItemID,hInstanceID:t.WFInstanceId,hToken:window.sessionStorage.getItem("token")}))["data"],200!==e.status?this.$message.error("移出文件时出错！"+e.Msg):(this.$message.success("移出文件-"+t.t_Name+"-成功！"),void this.getDocList(t.t_FlowItemID)))},getDocList(t){this.mFlowItemID=t,this.getFlowDocList(t),this.StepersDialogVisible=!1,this.FlowDetaileDialogVisible=!0},handleClick(t,e){t=t.name,this.getFlowDocList(this.mFlowItemID,t)},FlowDetaileDialogClosed(){this.FlowDetaileDialogVisible=!1},StepersDialogClosed(){this.StepersDialogVisible=!1},AllStepersDialogClosed(){this.AllStepersDialogVisible=!1},async getAllFlowTemplate(){var t=(await this.$http.post("getAllFlowTemplate",{hToken:window.sessionStorage.getItem("token")}))["data"];200!==t.status&&this.$message.error("获取流程失败！"),0===t.total?this.templateList="":(this.templateList=JSON.parse(t.data),this.optionList=this.templateList.map(t=>({value:""+t.t_ID,label:""+t.t_Name})))},async addFlowItem(){var t=(await this.$http.post("addFlowItem",{hFlowName:this.vFlowName,hTemplateID:this.vTemplateID,hToken:window.sessionStorage.getItem("token")}))["data"];if(200!==t.status)return this.$message.error("所选模板无效，请修正后选用，或者选择其他模板！"+t.Msg);this.$message.success("增加 FlowItem  成功！"),this.getFlowDocList()},async openaddFlowDialog(){this.addFlowDialogVisible=!0},addFlowDialogClosed(){}}};l("a02b"),l=l("2877"),l=Object(l.a)(i,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{ref:"mainZone",staticClass:"datalist-container",style:{height:t.mainHeight+"px"}},[l("el-card",{attrs:{"body-style":{padding:"5px"}}},[l("el-row",{attrs:{gutter:5}},[l("el-button-group",{staticStyle:{float:"right"}},[l("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:t.openaddFlowDialog}},[t._v("添加")]),l("el-button",{attrs:{icon:"el-icon-view",type:"primary"}},[t._v("浏览")]),l("el-button",{attrs:{icon:"el-icon-edit",type:"primary"}},[t._v("编辑")]),l("el-button",{attrs:{icon:"el-icon-delete",type:"primary"}},[t._v("删除")]),l("el-button",{attrs:{icon:"el-icon-upload2",type:"primary"}},[t._v("提交")])],1)],1),l("el-table",{attrs:{data:t.flowlist,height:t.tableHeight,border:"",stripe:"","highlight-current-row":"","row-style":{height:"30px"},"cell-style":{padding:"0px"}}},[l("el-table-column",{attrs:{type:"index"}}),l("el-table-column",{attrs:{prop:"t_FlowNumber",label:"流程编码"}}),l("el-table-column",{attrs:{prop:"t_Name",label:"流程名称"}}),l("el-table-column",{attrs:{prop:"FLOWTEMPLNAME",label:"模板"}}),t._e(),l("el-table-column",{attrs:{label:"状态",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(2===e.row.t_FlowState?"执行":e.row.t_FlowState)+" ")]}}])}),l("el-table-column",{attrs:{prop:"v_LeaderName",label:"管理者"}}),t._e(),l("el-table-column",{attrs:{prop:"t_CreateTime",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.t_CreateTime.substring(0,10).replace("T"," ")))])]}}])}),l("el-table-column",{attrs:{label:"操作",width:"280px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){return t.getAllOperatorList(e.row.t_ID)}}},[t._v("全部执行人")]),l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){return t.getOperatorList(e.row.t_ID)}}},[t._v("执行人")]),l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){return t.getDocList(e.row.t_ID)}}},[t._v("文件")])]}}])})],1),l("el-dialog",{attrs:{title:"文件审批人员",visible:t.AllStepersDialogVisible,width:"80%"},on:{"update:visible":function(e){t.AllStepersDialogVisible=e},close:t.AllStepersDialogClosed}},[l("el-table",{attrs:{data:t.operatorList,height:"500px",border:"","highlight-current-row":"","header-cell-style":{"text-align":"center"},"cell-class-name":t.addClass,"row-style":{height:"30px"},"cell-style":{padding:"0px"}}},[l("el-table-column",{attrs:{fixed:"",type:"index"}}),l("el-table-column",{attrs:{fixed:"",prop:"文档名",label:"文档名",width:"200"}}),t._l(t.steplist,(function(t){return l("li",{key:t.t_ID},[l("el-table-column",{attrs:{"show-overflow-tooltip":!0,align:"center",label:t.t_Name,prop:t.t_Name}})],1)}))],2)],1),l("el-dialog",{attrs:{title:"文件审批人员",visible:t.StepersDialogVisible,width:"80%"},on:{"update:visible":function(e){t.StepersDialogVisible=e},close:t.StepersDialogClosed}},[l("el-tabs",{ref:"tabsRef",attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activePageName,callback:function(e){t.activePageName=e},expression:"activePageName"}},t._l(t.steplist,(function(e){return l("el-tab-pane",{key:e.t_ID,attrs:{label:e.t_Name,name:e.t_ID}},[l("el-table",{attrs:{data:t.operatorList,height:"500px",border:"",stripe:"","highlight-current-row":"","row-style":{height:"30px"},"cell-style":{padding:"0px"}}},[l("el-table-column",{attrs:{fixed:"",type:"index"}}),l("el-table-column",{attrs:{fixed:"",prop:"文档名",label:"文档名",width:"200"}}),t._l(t.steplist,(function(t){return l("li",{key:t.t_ID},[l("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:t.t_Name,prop:t.t_Name}})],1)}))],2)],1)})),1)],1),l("el-dialog",{attrs:{title:"审批中的文件",visible:t.FlowDetaileDialogVisible,width:"80%"},on:{"update:visible":function(e){t.FlowDetaileDialogVisible=e},close:t.FlowDetaileDialogClosed}},[l("el-table",{attrs:{data:t.stepdoclist,height:"500px",border:"",stripe:"","highlight-current-row":"","row-style":{height:"30px"},"cell-style":{padding:"0px"}}},[l("el-table-column",{attrs:{type:"index"}}),l("el-table-column",{attrs:{prop:"t_Name",label:"文档名"}}),l("el-table-column",{attrs:{prop:"t_StepName",label:"当前节点"}}),l("el-table-column",{attrs:{prop:"v_FlowItemName",label:"所在流程"}}),l("el-table-column",{attrs:{prop:"t_LastModTime",label:"修改时间",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.t_LastModTime.substring(0,16).replace("T"," ")))])]}}])}),t._e(),l("el-table-column",{attrs:{prop:"v_CatName",label:"文档类"}}),l("el-table-column",{attrs:{label:"操作",width:"125px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){return t.removeDocInFlow(e.row)}}},[t._v("移出文件")])]}}])})],1)],1),l("el-dialog",{attrs:{title:"增加流程",visible:t.addFlowDialogVisible,width:"40%"},on:{"update:visible":function(e){t.addFlowDialogVisible=e}}},[l("el-form",{staticClass:"form-1",attrs:{"label-width":"70px","label-position":"left"},nativeOn:{submit:function(t){t.preventDefault()}}},[l("el-form-item",{attrs:{label:"流程名称"}},[l("el-input",{model:{value:t.vFlowName,callback:function(e){t.vFlowName=e},expression:"vFlowName"}})],1),l("el-form-item",{attrs:{label:"复制模板"}},[l("el-select",{attrs:{size:"medium",placeholder:"请选择"},model:{value:t.vTemplateID,callback:function(e){t.vTemplateID=e},expression:"vTemplateID"}},t._l(t.optionList,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("el-form-item",{attrs:{label:"备注"}},[l("el-input",{model:{value:t.vRemark,callback:function(e){t.vRemark=e},expression:"vRemark"}})],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{ref:"addSubmit",attrs:{type:"primary"},on:{click:t.addFlowItem}},[t._v("确 定")]),l("el-button",{on:{click:function(e){t.addFlowDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)],1)}),[],!1,null,"600831d8",null);e.default=l.exports}}]);