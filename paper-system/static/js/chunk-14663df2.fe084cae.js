(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-14663df2"],{"0bf9":function(e,t,a){"use strict";a.r(t);var o={data(){return{addForm:{moduleName:"",moduleID:"",moduleRemark:"",groupID:"",groupName:""},addDialogVisible:!1,rightsList:[],treeProps:{label:"t_Name",children:"Children"}}},created(){this.getRightsList(),this.$root.leveOnePathName="权限管理",this.$root.leveTwoPathName="一级权限列表"},methods:{async getRightsList(){var e=(await this.$http.post("getRightList"))["data"];if(200!==e.status)return this.$message.error("获取权限列表失败！");this.rightsList=JSON.parse(e.data)},append(e){this.addForm.groupName=e.t_Name,this.addForm.groupID=e.t_ID,this.addDialogVisible=!0},async addLevelTwo(){var e=(await this.$http.post("addLevelTwo",{hModuleID:this.addForm.groupID+this.addForm.moduleID,hModuleName:this.addForm.moduleName,hModuleRemark:this.addForm.moduleRemark,hGroupName:this.addForm.groupName}))["data"];if(200!==e.status)return this.$message.error("添加二级权限失败！");this.$message.error("添加二级权限列成功！"),this.getRightsList(),this.addDialogVisible=!1},async remove(e,t){if(t=(await this.$http.post("deleteLevelTwo",{hModuleID:t.t_ID})).data,200!==t.status)return this.$message.error("删除二级权限失败！");this.$message.error("删除二级权限列成功！"),this.getRightsList(),this.addDialogVisible=!1},addDialogClosed(){this.$refs.addFormRef.resetFields()}}};a("c97c"),a=a("2877"),a=Object(a.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"mainZone",staticClass:"datalist-container"},[a("el-card",[a("el-scrollbar",{staticStyle:{height:"500px"}},[a("el-tree",{ref:"treeRef",attrs:{data:e.rightsList,props:e.treeProps,"expand-on-click-node":!1,"show-checkbox":"","node-key":"t_ID"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.node,l=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(o.label))]),a("span",[null!==l.Children?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(l)}}},[e._v(" Append ")]):e._e(),null===l.Children?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(o,l)}}},[e._v("Delete")]):e._e()],1)])}}])})],1)],1),a("el-dialog",{attrs:{title:"添加二级权限",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,"label-width":"170px"}},[a("el-form-item",{attrs:{label:"ID",prop:"moduleID"}},[a("el-input",{attrs:{placeholder:"请输入大于100-200之间的整数"},model:{value:e.addForm.moduleID,callback:function(t){e.$set(e.addForm,"moduleID",t)},expression:"addForm.moduleID"}})],1),a("el-form-item",{attrs:{label:"二级权限",prop:"moduleName"}},[a("el-input",{model:{value:e.addForm.moduleName,callback:function(t){e.$set(e.addForm,"moduleName",t)},expression:"addForm.moduleName"}})],1),a("el-form-item",{attrs:{label:"说明",prop:"moduleRemark"}},[a("el-input",{model:{value:e.addForm.moduleRemark,callback:function(t){e.$set(e.addForm,"moduleRemark",t)},expression:"addForm.moduleRemark"}})],1),a("el-form-item",{attrs:{label:"一级权限",prop:"groupName"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.addForm.groupName,callback:function(t){e.$set(e.addForm,"groupName",t)},expression:"addForm.groupName"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addLevelTwo}},[e._v("确 定")])],1)],1),a("el-card",[a("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"一级权限",prop:"t_Name"}}),a("el-table-column",{attrs:{label:"ID",prop:"t_ID"}}),a("el-table-column",{attrs:{label:"序号",prop:"t_No"}})],1)],1)],1)}),[],!1,null,"7ea6c17a",null);t.default=a.exports},"257d":function(e,t,a){},c97c:function(e,t,a){"use strict";a("257d")}}]);