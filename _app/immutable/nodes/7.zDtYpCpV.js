import"../chunks/Bg9kRutz.js";import{p as x,f as F,k as t,A as H,s as o,c as i,r as l,a as T}from"../chunks/B_fWjAJn.js";import{t as R,a as A,c as q}from"../chunks/CGZ7VXBK.js";import{h as u,P as E,g as M,R as $}from"../chunks/BKL1c2gs.js";import{a as j}from"../chunks/DsUiww_e.js";import{s as f,a as b}from"../chunks/-5UQ7fw5.js";import{d as z}from"../chunks/dYPrhcUL.js";import{p as g}from"../chunks/BqFMnoIm.js";import{N as D}from"../chunks/CFH1hw1G.js";import"../chunks/DAYJw6E-.js";import{C as G}from"../chunks/BDJBbIxn.js";import{T as J}from"../chunks/B46hv7NI.js";import{T as K}from"../chunks/DH4ajtYU.js";import{N}from"../chunks/Bf_bNlXY.js";var O=R('<!> <div class="container mt-3 mb-3"><h1 class="mb-3">Add new task</h1> <div class="row g-2 mb-3"><label for="inputName" class="col-sm-2 col-form-label">Name</label> <div class="col-sm-5"><input type="text" id="inputName" class="form-control" required pattern="^[\\w\\s\\-\\.:]+$"></div></div> <div class="row g-2 mb-3"><label for="colorPicker" class="col-sm-2 col-form-label">Color</label> <div id="colorPicker" class="col-auto"><!></div></div> <div class="row g-2 mb-3"><label for="inputStart" class="col-sm-2 col-form-label"></label> <div class="col-sm-5"><button type="button" class="btn btn-secondary">Add Task</button></div></div></div> <!>',1);function Q(n,d){x(d,!0);let r=b("#FFFFFF"),a=b(void 0),s=b(void 0);function m(e){f(r,g(e))}function P(){const e=document.getElementById("inputName");if(e.setCustomValidity(""),!e.reportValidity()){t(a)("Failed to create task!","","text-bg-danger");return}if(u.rune.filter(v=>v.name.toLowerCase()===e.value.toLowerCase()).length>0){e.setCustomValidity("A task with that name already exists."),e.reportValidity(),t(a)("Failed to create task!","","text-bg-danger");return}const y=J.new(e.value,!1,!1,t(r));u.rune.push(y),u.rune.sort((v,B)=>v.name.localeCompare(B.name)),console.log(y),t(a)("Created task:",e.value,"text-bg-success"),e.value="",t(s)(),E.modified()}var k=O(),h=F(k);const S=H(()=>[N.HomeItem(),N.ItemLink("Back","/app/settings")]);D(h,{name:"Settings",get navItems(){return t(S)}});var c=o(h,2),p=o(i(c),4),w=o(i(p),2),I=i(w);G(I,{colorSaved:m,get reset(){return t(s)},set reset(e){f(s,g(e))}}),l(w),l(p);var _=o(p,2),C=o(i(_),2),L=i(C);L.__click=P,l(C),l(_),l(c);var V=o(c,2);K(V,{get show(){return t(a)},set show(e){f(a,g(e))}}),A(n,k),T()}z(["click"]);function me(n,d){x(d,!0);var r=q(),a=F(r);M(a,()=>j.isLoaded(),null,(s,m)=>{Q(s,{})},(s,m)=>{$(s,{})}),A(n,r),T()}export{me as component};
