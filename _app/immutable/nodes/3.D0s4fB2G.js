import"../chunks/Bg9kRutz.js";import{p as f,f as _,a as u,s as c,c as d,r as i,t as E}from"../chunks/DxIxdwJJ.js";import{c as y,a as h,t as S}from"../chunks/ZBGWEsqd.js";import{b as L,a as k,R as w,f as N,c as T}from"../chunks/BY3ZuFNT.js";import{a as x}from"../chunks/D4epzopT.js";import{s as A}from"../chunks/CBNDWGhJ.js";import{d as R}from"../chunks/CHGbQ8eI.js";import{g as n}from"../chunks/Bau4CZnN.js";import{N as $}from"../chunks/A3Y5_I6J.js";function C(a){return L(a).getMonth()}function G(a,r){f(r,!0);var e=y(),s=_(e);k(s,()=>x.isLoaded(),null,void 0,(t,o)=>{w(t,{})}),h(a,e),u()}function H(){n(`/app/year/${C(new Date)}#today`)}var I=a=>{document.getElementById("currentDayButton")!=a.target&&n("/app/year")},Y=()=>n("/app/settings"),z=()=>n("/app/track"),F=S('<!> <!>  <div class="container mt-3 mb-3"><h1> </h1> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Edit Year data</h5> <p class="card-text">Navigate through the year and edit single days.</p> <button id="currentDayButton" type="button" class="btn btn-secondary cardButton svelte-e8rjqc">Edit today</button></div></div> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Settings</h5> <p class="card-text">Edit general settings, tags and tasks.</p></div></div> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Status</h5> <p class="card-text">Generate a status report.</p></div></div> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Track</h5> <p class="card-text">Timesheet tracking for today.</p></div></div></div>',1);function J(a,r){f(r,!0);const{saveAs:e}=N;var s=F(),t=_(s);G(t,{});var o=c(t,2);$(o,{name:"Home",navigation:[!1,!1]});var b=c(o,2),l=d(b),D=d(l);i(l);var v=c(l,2),m=d(v);m.__click=[I];var M=c(d(m),4);M.__click=[H],i(m),i(v);var p=c(v,2),j=d(p);j.__click=[Y],i(p);var g=c(p,4),q=d(g);q.__click=[z],i(g),i(b),E(B=>A(D,`Today is ${B??""}.`),[()=>T(new Date,"dd MMMM yyyy")]),h(a,s),u()}R(["click"]);function aa(a,r){f(r,!0);var e=y(),s=_(e);k(s,()=>x.isLoaded(),null,(t,o)=>{J(t,{})},(t,o)=>{w(t,{})}),h(a,e),u()}export{aa as component};
