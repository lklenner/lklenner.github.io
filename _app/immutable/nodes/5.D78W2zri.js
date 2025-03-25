import"../chunks/Bg9kRutz.js";import{p as b,f as w,g as o,v as T,s,c as p,r as u,a as h}from"../chunks/BUjIT_Mk.js";import{t as I,a as y,c as L}from"../chunks/B9kf_Ie_.js";import{a as l,T as P,P as A,b as S,R as V}from"../chunks/Dnvx4tmM.js";import{a as B}from"../chunks/DqWk7Urd.js";import{s as E,a as H}from"../chunks/CIwiONnU.js";import{d as R}from"../chunks/ChM4DITq.js";import{p as q}from"../chunks/BacJj1fc.js";import{N as M}from"../chunks/BXGJI-AL.js";import"../chunks/BwmWtf6n.js";import{T as $}from"../chunks/CqTqg-3p.js";import{N as f}from"../chunks/C5m1Kr_D.js";var j=I('<!> <div class="container mt-3 mb-3"><h1 class="mb-3">Add new tag</h1> <div class="row g-2 mb-3"><label for="inputName" class="col-sm-2 col-form-label">Name</label> <div class="col-sm-5"><input type="text" id="inputName" class="form-control" required pattern="^[\\w\\s\\-\\.:]+$"></div></div> <div class="row g-2 mb-3"><label for="colorPicker" class="col-sm-2 col-form-label">Color</label> <div class="col-auto"><input id="colorPicker" type="color" value="#FFFFFF"></div></div> <div class="row g-2 mb-3"><label for="inputStart" class="col-sm-2 col-form-label"></label> <div class="col-sm-5"><button type="button" class="btn btn-secondary">Add tag</button></div></div></div> <!>',1);function z(i,n){b(n,!0);let e=H(void 0);function c(){const t=document.getElementById("inputName");if(t.setCustomValidity(""),!t.reportValidity()){o(e)("Failed to create tag!","","text-bg-danger");return}if(l.rune.filter(m=>m.value.toLowerCase()===t.value.toLowerCase()).length>0){t.setCustomValidity("A tag with that name already exists."),t.reportValidity(),o(e)("Failed to create tag!","","text-bg-danger");return}const x=document.getElementById("colorPicker").value,F=P.new(t.value,x);l.rune.push(F),l.rune.sort((m,C)=>m.value.localeCompare(C.value)),l.regenerateLookup(),o(e)("Created tag:",t.value,"text-bg-success"),t.value="",A.modified()}var a=j(),r=w(a);const k=T(()=>[f.HomeItem(),f.ItemLink("Back","/app/settings")]);M(r,{name:"Settings",get navItems(){return o(k)}});var d=s(r,2),v=s(p(d),6),g=s(p(v),2),N=p(g);N.__click=c,u(g),u(v),u(d);var _=s(d,2);$(_,{get show(){return o(e)},set show(t){E(e,q(t))}}),y(i,a),h()}R(["click"]);function at(i,n){b(n,!0);var e=L(),c=w(e);S(c,()=>B.isLoaded(),null,(a,r)=>{z(a,{})},(a,r)=>{V(a,{})}),y(i,e),h()}export{at as component};
