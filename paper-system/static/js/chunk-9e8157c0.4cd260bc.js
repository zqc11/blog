(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9e8157c0"],{"0a14":function(e,t,i){"use strict";i.r(t);var a={name:"DocItemDetail",props:["mDocItemID"],data(){return{ItemCatID:"",DataName:"Item Detail",DataDetailDialogVisible:!1,activeName:"tab-1",addFileFlag:!1,delFlag:!0,fileList:[],mUrl:"",mDocObj:{DocID:"",hToken:window.sessionStorage.getItem("token"),mFileType:"mMainFile"},loadProgress:0,progressFlag:!1,addDocForm:{},editDocForm:{},docList:[],fileItemlist:[],fileHistorylist:[],templist:[],linkExpressionList:[],linkItemList:[],tableBfieldlist:[],tableAfieldlist:[],linkAfieldlist:[],reviewItemList:[],reviewFieldList:[],versionItemList:[],treeProps:{value:"t_ID",label:"label",t_Type:-1,children:"Children",isLeaf:!0,checkStrictly:!0,expandTrigger:"hover"},selectedKeys:[],idArray:[],total:0,pageFlag:!0}},created(){this.getDocItemDetail(),this.mUrl=this.$root.gBaseURL+"/UploadFileDoc"},methods:{async getDocItemDetail(){this.addFileFlag=!1;var e=(await this.$http.post("getDocItemDetail",{hDocItemID:this.mDocItemID,hToken:window.sessionStorage.getItem("token")}))["data"];if(202===e.status)return this.$message.error("请重新登录！");200===e.status&&(0!==e.total?(this.fileItemlist=JSON.parse(e.data),this.fileHistorylist=JSON.parse(e.Msg)):(this.fileItemlist=[],this.fileHistorylist=[]),this.editDocForm=JSON.parse(e.mStream)[0],this.linkExpressionList=e.data_MetaLink,this.tableAfieldlist=JSON.parse(e.tableAfield),this.tableBfieldlist=JSON.parse(e.tableBfield),this.DataName=this.editDocForm.t_Name,this.editDocForm.t_CreateTime=this.showDate(this.editDocForm.t_CreateTime),this.editDocForm.t_CheckOutTime=this.showDate(this.editDocForm.t_CheckOutTime),this.editDocForm.t_ReleaseTime=this.showDate(this.editDocForm.t_ReleaseTime),this.editDocForm.t_LastModTime=this.showDate(this.editDocForm.t_LastModTime),this.DataDetailDialogVisible=!0,this.$nextTick(()=>{this.$refs.tableRef.setCurrentRow(this.fileItemlist[0]),this.$refs.linkRef.setCurrentRow(this.linkExpressionList[0])}),0<this.linkExpressionList.length&&this.getlinkItemList(this.linkExpressionList[0].SourceCatID,this.linkExpressionList[0].TargetCatID,this.mDocItemID,this.linkExpressionList[0].ExpressionID),this.getReviewList(this.mDocItemID))},HandCloseDetail(){this.$nextTick(()=>{})},uploadProcess(e,t,i){this.progressFlag=!0,this.loadProgress=parseInt(e.percent),100<=this.loadProgress&&(this.loadProgress=100,setTimeout(()=>{this.progressFlag=!1,this.addDialogVisible=!1},1e3))},handleSuccess(e){this.$message.success("上传 文件 成功！"),this.getDocItemDetail(),this.$refs.upload.clearFiles(),this.$nextTick((function(){this.addFileFlag=!1}))},handleFileChange(e,t){if(1<t.length&&"fail"!==e.status?t.splice(0,1):"fail"===e.status&&(this.$message.warning("上传失败，请重新上传！"),t.splice(0,1)),50<e.size/1048576)return this.$message.warning("当前限制文件大小不能大于50M"),!1;var i=e.name.replace(/(.*\/)*([^.]+).*/gi,"$2");e=e.name.split(".").pop();this.fileList=t.slice(-3),this.addFileFlag=!0,this.mDocObj.DocID=this.mDocItemID,this.addDocForm.t_Name=i,this.addDocForm.t_Extension=e},handLinkRowClick(e,t,i){this.linkItemList=[],this.getlinkItemList(e.SourceCatID,e.TargetCatID,this.mDocItemID,e.ExpressionID)},async getlinkItemList(e,t,i,a){if(e=(await this.$http.post("getLinkItemList",{hSourceCatID:e,hTargetCatID:t,hItemID:i,hExpressionID:a,hToken:window.sessionStorage.getItem("token"),argItemIDs:null})).data,200!==e.status)return this.$message.error("获取关联表达式对应的 LinkItem 数据失败！");0!==e.total?this.linkItemList=JSON.parse(e.data):this.linkItemList=[],this.linkAfieldlist=JSON.parse(e.tableAfield)},async submitFile(e){var t="正本必须是PDF格式，确信要替换为正式版本吗?";if("confirm"!==await this.$confirm(t="mMainFile"!==e?"附件通常为非PDF格式的Word、Excel、DWG等文件，确信要上传该文件吗?":t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(e=>e))return this.$message.info("已取消上传");this.mDocObj.DocID=this.mDocItemID,this.mDocObj.mFileType=e,this.$refs.upload.submit().then(()=>{this.getDocItemDetail()}),this.$nextTick((function(){this.$refs.addSubmit.display=!1,this.addFileFlag=!1}))},showDate(e){return new Date(e).toLocaleString()},handleClick(e,t){"tab-whereused"===e.paneName?this.getWhereUsedItemList(this.queryInfo.catID,this.mDocItemID):"second"===e.paneName?alert(2):"third"===e.paneName&&alert(3),this.addFileFlag=!1},async downloadFile(e){-1===e.FILETYPE?this.downloadMainFile(this.mDocItemID):this.downloadAttachFile(e.t_ID)},async downloadMainFile(e){const t=new FormData;t.append("mDocID",e),this.loading=!0,await this.$http.post("DownloadMainFile",t,{responseType:"arraybuffer"}).then(e=>{if(0===e.data.size)return this.loading=!1,this.$message.error("文件已经不存在，下载失败！");var t=e.headers["content-disposition"].split(";")[1].split("FileName=")[1];t=decodeURIComponent(t);this.saveMainFile(e.data,t),this.loading=!1}).catch(e=>{this.loading=!1,this.$message.error("文件可能不存在，或者网络处于断开状态！")})},async downloadAttachFile(e){const t=new FormData;t.append("mAttachFileID",e),this.loading=!0,await this.$http.post("DownloadAttachFile",t,{responseType:"arraybuffer"}).then(e=>{if(0===e.data.size)return this.loading=!1,this.$message.error("文件已经不存在，下载失败！");var t=e.headers["content-disposition"].split(";")[1].split("FileName=")[1];t=decodeURIComponent(t);this.saveMainFile(e.data,t),this.loading=!1}).catch(e=>{this.loading=!1,this.$message.error("文件可能不存在，或者网络处于断开状态！")})},saveMainFile(e,t){if(e){e=window.URL.createObjectURL(new Blob([e]));const i=document.createElement("a");i.style.display="none",i.href=e,i.setAttribute("download",t),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(e)}},async deleteAttachFile(e){return-1===e.FILETYPE?this.$message.error("正本文件不允许删除！"):"confirm"!==await this.$confirm("此操作将永久删除附件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(e=>e)?this.$message.info("已取消删除"):(e=(await this.$http.post("DeleteAttachFile",{mSavePathFileName:e.t_SavePath,mFileIDServer:e.t_FileNameServer,mFileName:e.t_FileName}))["data"],200!==e.status?this.$message.error("删除附属文件失败 -- "+e.Msg):(this.getDocItemDetail(),void this.$message.success("删除附属文件成功！")))},getDocItem(e){this.itemList.forEach(t=>{t.t_ID===e&&(t.t_ControlType,this.editDocForm=t,this.editDocForm.t_CreateTime=this.showDate(this.editDocForm.t_CreateTime),this.editDocForm.t_CheckOutTime=this.showDate(this.editDocForm.t_CheckOutTime),this.editDocForm.t_ReleaseTime=this.showDate(this.editDocForm.t_ReleaseTime),this.editDocForm.t_LastModTime=this.showDate(this.editDocForm.t_LastModTime))})},async getDocFile(){var e=(await this.$http.post("getDocFile",{hDocItemID:this.mDocItemID,hCatID:this.queryInfo.catID,hToken:window.sessionStorage.getItem("token")}))["data"];if(202===e.status)return this.$message.error("请重新登录！");200===e.status&&(0!==e.total?this.fileItemlist=JSON.parse(e.data):this.fileItemlist=[],this.total=e.total,this.$nextTick(()=>{this.$refs.tableRef.setCurrentRow(this.fileItemlist[0])}))},async getlinkExpressionList(){var e=(await this.$http.post("getlinkExpressionList",{hCatID:this.queryInfo.catID}))["data"];if(200!==e.status)return this.$message.error("获取父级分类数据失败！");this.linkExpressionList=e.data_MetaLink,this.tableAfieldlist=JSON.parse(e.tableAfield),this.tableBfieldlist=JSON.parse(e.tableBfield)},async getReviewList(e){if(e=(await this.$http.post("getReviewList",{hItemID:e})).data,200!==e.status)return this.$message.error("评审过程数据失败！");0!==e.total?this.reviewItemList=JSON.parse(e.data):this.reviewItemList=[],this.reviewFieldList=JSON.parse(e.tableBfield)}}};i("c063"),i=i("2877"),i=Object(i.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{attrs:{title:e.DataName,visible:e.DataDetailDialogVisible,width:"70%"},on:{"update:visible":function(t){e.DataDetailDialogVisible=t},close:e.HandCloseDetail}},[i("el-card",{staticClass:"card-3",attrs:{"body-style":{padding:"5px"}}},[i("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"属性",name:"tab-1"}},e._l(e.tableBfieldlist,(function(t){return i("el-form",{key:t.t_FieldID,ref:"editDataFormRef",refInFor:!0,staticClass:"form-field",attrs:{model:e.editDocForm,"label-width":"80px",disabled:"",size:"small","label-position":"left"}},[i("el-form-item",{attrs:{label:t.t_Name}},[3===t.t_ControlType?i("div",[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.editDocForm[t.t_FieldName],callback:function(i){e.$set(e.editDocForm,t.t_FieldName,i)},expression:"editDocForm[Bfield.t_FieldName]"}},e._l(t.PropValue,(function(e){return i("el-option",{key:e.t_No,attrs:{label:e.t_Display,value:e.t_Value}})})),1)],1):i("div",[i("el-input",{model:{value:e.editDocForm[t.t_FieldName],callback:function(i){e.$set(e.editDocForm,t.t_FieldName,i)},expression:"editDocForm[Bfield.t_FieldName]"}})],1)])],1)})),1),i("el-tab-pane",{attrs:{label:"状态",name:"tab-2"}},[i("el-form",{ref:"editDataFormRef",staticClass:"form-field",attrs:{model:e.editDocForm,"label-width":"80px","label-position":"left",disabled:""}},[i("el-form-item",{attrs:{label:"创建者"}},[i("el-input",{model:{value:e.editDocForm.v_CreateByName,callback:function(t){e.$set(e.editDocForm,"v_CreateByName",t)},expression:"editDocForm['v_CreateByName']"}})],1),i("el-form-item",{attrs:{label:"创建时间"}},[i("el-input",{model:{value:e.editDocForm.t_CreateTime,callback:function(t){e.$set(e.editDocForm,"t_CreateTime",t)},expression:"editDocForm['t_CreateTime']"}})],1),i("el-form-item",{attrs:{label:"修改者"}},[i("el-input",{model:{value:e.editDocForm.v_ModByName,callback:function(t){e.$set(e.editDocForm,"v_ModByName",t)},expression:"editDocForm['v_ModByName']"}})],1),i("el-form-item",{attrs:{label:"修改时间"}},[i("el-input",{model:{value:e.editDocForm.t_LastModTime,callback:function(t){e.$set(e.editDocForm,"t_LastModTime",t)},expression:"editDocForm['t_LastModTime']"}})],1),i("el-form-item",{attrs:{label:"类别"}},[i("el-input",{model:{value:e.editDocForm.v_CatName,callback:function(t){e.$set(e.editDocForm,"v_CatName",t)},expression:"editDocForm['v_CatName']"}})],1),i("el-form-item",{attrs:{label:"状态"}},[i("el-input",{model:{value:e.editDocForm.v_StateName,callback:function(t){e.$set(e.editDocForm,"v_StateName",t)},expression:"editDocForm['v_StateName']"}})],1),i("el-form-item",{attrs:{label:"版本"}},[i("el-input",{model:{value:e.editDocForm.t_Ver,callback:function(t){e.$set(e.editDocForm,"t_Ver",t)},expression:"editDocForm['t_Ver']"}})],1),e._e()],1)],1),i("el-tab-pane",{attrs:{label:"文件",name:"tab-3"}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-table",{ref:"tableRef",attrs:{data:e.fileItemlist,"header-cell-style":{"text-align":"center"},height:"250px",border:"",stripe:""}},[i("el-table-column",{attrs:{type:"index"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"文件名",prop:"t_FileName"}}),i("el-table-column",{attrs:{width:"50px",label:"版本",prop:"v_VerNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.v_VerNo?i("span",[e._v(" 0 ")]):0<t.row.v_VerNo?i("span",[e._v(e._s(t.row.v_VerNo))]):-1===t.row.v_VerNo?i("span",[e._v("/")]):i("span",[e._v("?")])]}}])}),i("el-table-column",{attrs:{width:"80px",label:"类型",prop:"FILETYPE"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.FILETYPE?i("span",[e._v("附件")]):-1===t.row.FILETYPE?i("span",[e._v("正本")]):i("span",[e._v("未知")])]}}])}),e._e(),e._e(),e._e(),e._e(),i("el-table-column",{attrs:{width:"100px","show-overflow-tooltip":!0,label:"大小",prop:"t_StrFileLen"}}),e._e(),e._e(),i("el-table-column",{attrs:{width:"150px","show-overflow-tooltip":!0,label:"提交时间",prop:"t_ModTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.t_ModTime.substring(0,16).replace("T"," ")))])]}}])}),i("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载文件",enterable:!1,placement:"top"}},[i("el-button",{attrs:{type:"warning",icon:"el-icon-download",size:"mini",circle:"",plain:""},on:{click:function(i){return e.downloadFile(t.row)}}})],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除文件",enterable:!1,placement:"top"}},[0===t.row.FILETYPE?i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:"",plain:""},on:{click:function(i){return e.deleteAttachFile(t.row)}}}):e._e()],1)]}}])})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("el-card",{attrs:{"body-style":{padding:"0px"}}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{data:e.mDocObj,"on-change":e.handleFileChange,"on-progress":e.uploadProcess,"on-success":e.handleSuccess,drag:"",action:e.mUrl,limit:10,"file-list":e.fileList,"auto-upload":!1}},[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v(" 添加或替换，请将文件拖到此处；或 "),i("em",[e._v("点击上传")])])]),e.progressFlag?i("el-progress",{attrs:{percentage:e.loadProgress}}):e._e()],1),e.addFileFlag?i("el-button",{ref:"addSubmit",attrs:{type:"primary"},on:{click:function(t){return e.submitFile("mMainFile")}}},[e._v("替换正本")]):e._e(),e.addFileFlag?i("el-button",{ref:"addSubmit",attrs:{type:"primary"},on:{click:function(t){return e.submitFile("attachFile")}}},[e._v("添加附件")]):e._e()],1)],1)],1),i("el-tab-pane",{attrs:{label:"历史过程",name:"tab-7"}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-table",{ref:"tableRef",attrs:{data:e.fileHistorylist,"header-cell-style":{"text-align":"center"},height:"530px",border:"",stripe:""}},[i("el-table-column",{attrs:{type:"index"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"文件名",prop:"t_FileName"}}),i("el-table-column",{attrs:{width:"50px",label:"版本",prop:"t_VerNo"}}),i("el-table-column",{attrs:{width:"60px",label:"有效性",prop:"t_IsNew"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.t_IsNew?i("span",[e._v("生效中")]):i("span",[e._v("已失效")])]}}])}),e._e(),e._e(),e._e(),i("el-table-column",{attrs:{width:"80px","show-overflow-tooltip":!0,label:"大小",prop:"t_StrFileLen"}}),e._e(),i("el-table-column",{attrs:{width:"120px","show-overflow-tooltip":!0,label:"提交人",prop:"t_Name"}}),i("el-table-column",{attrs:{width:"150px","show-overflow-tooltip":!0,label:"提交时间",prop:"t_ModTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.t_ModTime.substring(0,16).replace("T"," ")))])]}}])})],1)],1)],1)],1),i("el-tab-pane",{attrs:{label:"相关",name:"tab-4"}},[i("el-row",{attrs:{gutter:5}},[i("el-col",{attrs:{span:6}},[i("el-table",{ref:"linkRef",attrs:{data:e.linkExpressionList,height:"500px","header-cell-style":{"text-align":"center"},border:"",stripe:""},on:{"row-click":e.handLinkRowClick}},[i("el-table-column",{attrs:{type:"index",width:"50"}}),i("el-table-column",{attrs:{prop:"LinkName",label:"相关类别"}})],1)],1),i("el-col",{attrs:{span:18}},[i("el-table",{directives:[{name:"show",rawName:"v-show",value:0<e.linkItemList.length,expression:"linkItemList.length > 0 ? true: false"}],attrs:{data:e.linkItemList,"header-cell-style":{"text-align":"center"},height:"500px",border:"",stripe:""}},[i("el-table-column",{attrs:{type:"index"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"名称",prop:"t_Name"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"代号",prop:"t_Code"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"类别",prop:"v_CatName"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"创建者",prop:"v_CreateByName"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"创建时间",prop:"t_CreateTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.t_CreateTime.substring(0,16).replace("T"," ")))])]}}],null,!1,791078019)}),i("el-table-column",{attrs:{label:"操作",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载文件",enterable:!1,placement:"top"}},[i("el-button",{attrs:{type:"warning",icon:"el-icon-download",size:"mini",circle:"",plain:""},on:{click:function(i){return e.downloadMainFile(t.row.t_ID)}}})],1)]}}],null,!1,3448935882)})],1)],1)],1)],1),e._e(),e._e(),e._e()],1)],1)],1)],1)}),[],!1,null,"34e0edb4",null);t.default=i.exports},a952:function(e,t,i){},c063:function(e,t,i){"use strict";i("a952")}}]);