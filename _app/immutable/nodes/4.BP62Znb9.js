import"../chunks/Bg9kRutz.js";import{p as b,f as w,s,c as t,r as i,t as N,a as S}from"../chunks/DxIxdwJJ.js";import{t as P,a as y,c as $}from"../chunks/ZBGWEsqd.js";import{s as k,P as j,S as q,a as H,R as L}from"../chunks/DYRd5Js_.js";import{a as M}from"../chunks/D4epzopT.js";import{s as V}from"../chunks/CBNDWGhJ.js";import{r as z,s as B}from"../chunks/CcgQRso9.js";import{d as C}from"../chunks/CHGbQ8eI.js";import{g as x}from"../chunks/CW3apKDm.js";import{N as D}from"../chunks/C-OrF9Lp.js";import"../chunks/CmQyqufN.js";var E=()=>{x("/app/settings/tasks/add")},F=()=>{x("/app/settings/tasks/modify")},G=P('<!> <div class="container mt-3 mb-3"><h5>Tasks</h5> <ul class="list-group"><button type="button" class="list-group-item list-group-item-action"><div><div class="fw-bold">Add</div> Add new tasks</div></button>  <button type="button" class="list-group-item list-group-item-action"><div><div class="fw-bold">Modify</div> Hide, delete or modify the appearance of tasks</div></button></ul> <h5 class="mt-3">Track</h5> <ul class="list-group"><li class="list-group-item"><div><div class="fw-bold">Switch</div> <div class="d-flex justify-content-between">Require confirmation for every switch <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="confirmSwitchToggle"></div></div></div></li></ul> <h5 class="mt-3">System</h5> <ul class="list-group"><li class="list-group-item"><div><div class="fw-bold">Version</div> </div></li></ul></div>',1);function I(c,l){b(l,!0);var e=G(),o=w(e);D(o,{name:"Settings",navigation:[!0,!1]});var a=s(o,2),r=s(t(a),2),v=t(r);v.__click=[E];var T=s(v,2);T.__click=[F],i(r);var n=s(r,4),m=t(n),p=t(m),u=s(t(p),2),f=s(t(u)),d=t(f);z(d),d.__change=R=>{k.rune.confirmAllTaskSwitches=R.target.checked,j.modified()},i(f),i(u),i(p),i(m),i(n);var g=s(n,4),_=t(g),h=t(_),A=s(t(h));i(h),i(_),i(g),i(a),N(()=>{B(d,k.rune.confirmAllTaskSwitches),V(A,` ${q.constants.version}`)}),y(c,e),S()}C(["click","change"]);function st(c,l){b(l,!0);var e=$(),o=w(e);H(o,()=>M.isLoaded(),null,(a,r)=>{I(a,{})},(a,r)=>{L(a,{})}),y(c,e),S()}export{st as component};
