(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-627026df"],{1750:function(t,e,r){"use strict";r.r(e);var s={props:{vHeight:{type:Number,default:450},vTemplateID:{type:String,default:"defaultID"},vChangeNum:{type:Number,default:0}},data(){return{executorList:[],mCurrentStepID:"",currentTemplateID:this.vTemplateID,mID:"",spanArr:[]}},watch:{vTemplateID(t,e){this.currentTemplateID=t},vChangeNum(t,e){this.getExecutorList().then(()=>{null!==this.executorList&&(this.mCurrentStepID=this.executorList[0].t_PubStepID,this.$refs.refStepTable.setCurrentRow(this.executorList[0]))})}},created(){this.getExecutorList().then(()=>{null!==this.executorList&&(this.mCurrentStepID=this.executorList[0].t_PubStepID,this.mID=this.executorList[0].t_ID,this.$refs.refStepTable.setCurrentRow(this.executorList[0]),this.$emit("getCurrentStepID",this.mCurrentStepID))})},methods:{selectCreaterID(){var t=[];t[0]="FLOWDOCCREATOR",this.$emit("getCurrentUserID",t)},getSpanArr(t){this.spanArr=[];for(var e=0;e<t.length;e++)0===e?(this.spanArr.push(1),this.pos=0):t[e].t_Name===t[e-1].t_Name?(this.spanArr[this.pos]+=1,this.spanArr.push(0)):(this.spanArr.push(1),this.pos=e)},objectSpanMethod({rowIndex:t,columnIndex:e}){if(0===e||1===e)return{rowspan:e=this.spanArr[t],colspan:0<e?1:0}},async deleteStepExecutor(){if("confirm"!==await this.$confirm("确信要移除该执行人吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(t=>t))return this.$message.info("已取消移除执行人！");var t=(await this.$http.post("deleteStepExecutor",{hID:this.mID}))["data"];200!==t.status?this.$message.error("移除执行人失败，"+t.Msg):(this.$message.success("删除流程节点成功！"),this.getExecutorList())},async getExecutorList(){var t=(await this.$http.post("getFlowExecutor",{hTemplateID:this.currentTemplateID,hToken:window.sessionStorage.getItem("token")}))["data"];if(200!==t.status)return this.$message.error("获取执行人失败！");this.executorList=JSON.parse(t.data),this.getSpanArr(this.executorList)},handItemRowClick(t,e,r){this.mCurrentStepID=t.t_PubStepID,this.mID=t.t_ID,this.$emit("getCurrentStepID",this.mCurrentStepID)}}};r("6d66"),r=r("2877"),r=Object(r.a)(s,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{ref:"mainZone"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:24}},[e("el-button-group",{staticStyle:{float:"right"}},[t._e(),e("el-button",{attrs:{type:"plain"},on:{click:t.deleteStepExecutor}},[t._v("移除执行人")])],1)],1)],1),e("el-row",{attrs:{gutter:0}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("el-table",{ref:"refStepTable",attrs:{height:t.vHeight,data:t.executorList,"highlight-current-row":""},on:{"row-click":t.handItemRowClick}},[t._e(),e("el-table-column",{attrs:{label:"节点",prop:"t_Name"}}),t._e(),t._e(),t._e(),t._e(),e("el-table-column",{attrs:{label:"缺省执行人",prop:"t_LoginName"}}),t._e(),t._e()],1)],1)],1)],1)],1)}),[],!1,null,"41840dbd",null);e.default=r.exports},"2bc8":function(t,e,r){},"6d66":function(t,e,r){"use strict";r("2bc8")}}]);