import{_ as C,u as k}from"./index.fd4dc282.js";import{d as A,a as _,v as c,z as r,f as E,J as t,B as o,u as l,e as j,I as f}from"./vue.134335a7.js";import"./element-plus.38cafc94.js";import"./vform3-plus.0cc3f7ad.js";const z={id:"base-info"},D=f("\u4E0B\u4E00\u6B65"),h=f("\u91CD\u7F6E"),q=A({emits:["next"],setup(w,{emit:v}){const g=k(),b=_(""),i=_(),u=c({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),x=c({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],desc:[{required:!1,message:"Please input activity form",trigger:"blur"}]}),B=n=>{!n||n.validate(e=>{if(e)g.push("/newTask/upload"),v("next",1);else return!1})},F=n=>{!n||n.resetFields()};return(n,e)=>{const d=r("el-input"),a=r("el-form-item"),m=r("el-option"),y=r("el-select"),p=r("el-button"),V=r("el-form");return j(),E("div",z,[t(V,{ref_key:"ruleFormRef",ref:i,model:l(u),rules:l(x),"label-width":"120px",class:"ruleForm",size:b.value},{default:o(()=>[t(a,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"name"},{default:o(()=>[t(d,{modelValue:l(u).name,"onUpdate:modelValue":e[0]||(e[0]=s=>l(u).name=s)},null,8,["modelValue"])]),_:1}),t(a,{label:"\u6D41\u7A0B\u7C7B\u578B",prop:"region"},{default:o(()=>[t(y,{modelValue:l(u).region,"onUpdate:modelValue":e[1]||(e[1]=s=>l(u).region=s),placeholder:"\u9009\u62E9\u7C7B\u578B"},{default:o(()=>[t(m,{label:"\u56FE\u7EB8",value:"shanghai"}),t(m,{label:"\u666E\u901A",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),t(a,{label:"\u6D41\u7A0B\u63CF\u8FF0",prop:"desc"},{default:o(()=>[t(d,{modelValue:l(u).desc,"onUpdate:modelValue":e[2]||(e[2]=s=>l(u).desc=s),type:"textarea"},null,8,["modelValue"])]),_:1}),t(a,null,{default:o(()=>[t(p,{type:"primary",onClick:e[3]||(e[3]=s=>B(i.value))},{default:o(()=>[D]),_:1}),t(p,{onClick:e[4]||(e[4]=s=>F(i.value))},{default:o(()=>[h]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])}}});var N=C(q,[["__scopeId","data-v-4883839e"]]);export{N as default};
