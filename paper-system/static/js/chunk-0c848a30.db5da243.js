(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0c848a30"],{"2c24":function(e,t,a){"use strict";a.r(t);var o=a("eff8");o={name:"viewPDF",props:["cUrl","url"],components:{pdf:a.n(o).a},data(){return{pageNum:1,pageTotalNum:1,pdfWidth:50,pdfLeft:25,pdfTop:2,pdfBottom:2,loadedRatio:0,pdfDialog:!1,canDownPDF:!1,downPDFCode:"",viewType:"page",clientHeight:1,rotate:0,nowScrollPage:1}},created(){this.pageNum=1,this.pageTotalNum=1,this.pdfWidth=50,this.pdfLeft=25,this.pdfTop=2,this.pdfBottom=2,this.loadedRatio=0,this.pdfDialog=!1,this.canDownPDF=!1,this.downPDFCode="",this.viewType="page",this.clientHeight=1,this.rotate=0,this.nowScrollPage=1},mounted(){window.addEventListener("scroll",this.setScrollPage,!0)},methods:{closePdf(){this.$emit("on-close")},setScrollPage(){var e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight;this.nowScrollPage=Math.ceil(this.pageTotalNum*(e/t))},scrollView(){this.viewType="scroll",this.pageNum=this.pageTotalNum},pageView(){this.viewType="page",this.pageNum=1},downPDF(){"1234"==this.downPDFCode?(this.canDownPDF=!0,this.$notify({title:"提取码正确",message:"请点击按钮下载文件！",type:"success"})):this.$notify({title:"请重试",message:"提取码校验错误！",type:"error"})},zoomPDF(e){var t=this;"plus"===e&&(100===t.pdfWidth?t.$message({showClose:!0,message:"已放大至：100%",type:"info"}):(t.pdfWidth=t.pdfWidth+10,t.pdfLeft=(100-t.pdfWidth)/2)),"minus"===e&&(50===t.pdfWidth?t.$message({showClose:!0,message:"已缩小至标准尺寸，不可再缩小。",type:"info"}):(t.pdfWidth=t.pdfWidth-10,t.pdfLeft=(100-t.pdfWidth)/2))},rotatePDF(e){var t=this;"+90"===e&&(t.rotate+=90),"-90"===e&&(t.rotate-=90),t.rotate},prePage(){let e=this.pageNum;e=1<e?e-1:this.pageTotalNum,this.pageNum=e,window.scrollTo(0,0)},nextPage(){let e=this.pageNum;e=e<this.pageTotalNum?e+1:1,this.pageNum=e,window.scrollTo(0,0)}}},a("5376"),a=a("2877"),a=Object(a.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vpdf-container"},[a("div",{staticClass:"pre_page page_bar pointer"},[e._e()]),e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:"page"==e.viewType&&1<e.pageTotalNum,expression:"viewType == 'page' && pageTotalNum > 1 "}],staticClass:"num_bar"},[e._e(),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pageNum,callback:function(t){e.pageNum=t},expression:"pageNum"}},e._l(e.pageTotalNum,(function(t){return a("el-option",{key:t,attrs:{label:"第"+t+"页，共"+e.pageTotalNum+"页",value:t}})})),1)],1),e._e(),a("div",{staticClass:"tools_bar"},[a("div",{staticClass:"mt10"},[a("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-close",circle:""},on:{click:e.closePdf}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"scroll"==e.viewType&&1<e.pageTotalNum,expression:"viewType == 'scroll'  && pageTotalNum > 1  "}]},[a("el-button",{attrs:{plain:"",icon:"el-icon-document-copy",circle:""},on:{click:function(t){return e.pageView()}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"page"==e.viewType&&1<e.pageTotalNum,expression:"viewType == 'page'  && pageTotalNum > 1 "}]},[a("el-button",{attrs:{plain:"",icon:"el-icon-tickets",circle:""},on:{click:function(t){return e.scrollView()}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"page"==e.viewType&&1<e.pageTotalNum,expression:"viewType == 'page' && pageTotalNum > 1 "}],staticClass:"mt30"},[a("el-button",{attrs:{plain:"",icon:"el-icon-arrow-left",circle:""},on:{click:e.prePage}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"page"==e.viewType&&1<e.pageTotalNum,expression:"viewType == 'page' && pageTotalNum > 1 "}],staticClass:"mt10"},[a("el-button",{attrs:{plain:"",icon:"el-icon-arrow-right",circle:""},on:{click:e.nextPage}})],1),a("div",{staticClass:"mt30"},[a("el-button",{attrs:{plain:"",icon:"el-icon-plus",circle:""},on:{click:function(t){return e.zoomPDF("plus")}}})],1),a("div",{staticClass:"mt10"},[a("el-button",{attrs:{plain:"",icon:"el-icon-minus",circle:""},on:{click:function(t){return e.zoomPDF("minus")}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"page"==e.viewType,expression:"viewType == 'page'"}],staticClass:"mt30"},[a("el-button",{attrs:{plain:"",icon:"el-icon-refresh-right",circle:""},on:{click:function(t){return e.rotatePDF("+90")}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"page"==e.viewType,expression:"viewType == 'page'"}],staticClass:"mt10"},[a("el-button",{attrs:{plain:"",icon:"el-icon-refresh-left",circle:""},on:{click:function(t){return e.rotatePDF("-90")}}})],1),e._e()]),a("el-dialog",{attrs:{title:"下载 PDF 文件",visible:e.pdfDialog,width:"30%"},on:{"update:visible":function(t){e.pdfDialog=t}}},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:0==e.canDownPDF,expression:"canDownPDF == false"}],attrs:{gutter:20}},[a("el-col",{staticClass:"tagr mt10",attrs:{span:12,offset:6}},[a("el-input",{attrs:{placeholder:"请输入提取码"},model:{value:e.downPDFCode,callback:function(t){e.downPDFCode=t},expression:"downPDFCode"}},[a("el-button",{attrs:{slot:"append"},on:{click:function(t){return e.downPDF()}},slot:"append"},[e._v("提取文件")])],1)],1)],1),1==e.canDownPDF?a("div",{staticClass:"tagc"},[a("a",{attrs:{href:e.url,download:"文件"}},[a("el-button",{attrs:{type:"primary",plain:""}},[e._v("点击下载")])],1)]):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.pdfDialog=!1}}},[e._v("取 消")])],1)],1),a("div",{staticStyle:{transition:"all .3s"},style:{width:e.pdfWidth+"%",marginLeft:e.pdfLeft+"%",marginTop:e.pdfTop+"%",marginBottom:e.pdfBottom+"%"}},["page"==e.viewType?a("pdf",{attrs:{page:e.pageNum,src:e.url,rotate:e.rotate},on:{progress:function(t){e.loadedRatio=t},"num-pages":function(t){e.pageTotalNum=t}}}):e._e(),"scroll"==e.viewType?a("div",e._l(e.pageNum,(function(t){return a("pdf",{key:t,ref:"pdf",refInFor:!0,attrs:{src:e.url,page:t}})})),1):e._e()],1)],1)}),[],!1,null,"0ff7e82c",null);t.default=a.exports},"4f30":function(e,t,a){},5376:function(e,t,a){"use strict";a("4f30")}}]);