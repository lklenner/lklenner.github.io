import"../chunks/Bg9kRutz.js";import{p as _,f,a as g,s as r,c as s,r as o,t as B}from"../chunks/B_fWjAJn.js";import{c as k,a as h,t as E}from"../chunks/CGZ7VXBK.js";import{t as L,g as w,R as x,P as N,k as $}from"../chunks/BKL1c2gs.js";import{a as y,S as A}from"../chunks/DsUiww_e.js";import{s as P}from"../chunks/DuGrHTQZ.js";import{d as R}from"../chunks/dYPrhcUL.js";import{o as C}from"../chunks/-5UQ7fw5.js";import{g as n}from"../chunks/DAYJw6E-.js";import{N as G}from"../chunks/CFH1hw1G.js";function H(a){return L(a).getMonth()}function I(a,c){_(c,!0);var t=k(),d=f(t);w(d,()=>y.isLoaded(),null,void 0,(e,i)=>{x(e,{})}),h(a,t),g()}function Y(){const a=new Date;n(`/app/year/${H(a)}#${a.getDate()}`)}var z=a=>{document.getElementById("currentDayButton")!=a.target&&n("/app/year")},F=()=>n("/app/settings"),J=()=>n("/app/status"),K=()=>n("/app/track"),O=E('<!> <!>  <div class="container mt-3 mb-3"><h1> </h1> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Edit Year data</h5> <p class="card-text">Navigate through the year and edit single days.</p> <button id="currentDayButton" type="button" class="btn btn-secondary cardButton svelte-e8rjqc">Edit today</button></div></div> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Settings</h5> <p class="card-text">Edit general settings, tags and tasks.</p></div></div> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Status</h5> <p class="card-text">Generate a status report.</p></div></div> <div class="card mt-3 mb-3 shadow-sm clickable svelte-e8rjqc"><div class="card-body"><h5 class="card-title">Track</h5> <p class="card-text">Timesheet tracking for today.</p></div></div></div>',1);function Q(a,c){_(c,!0),C(()=>{window.onbeforeunload=function(){if(y.rune.modified!=A.Saved)return N.saveToLocalStorage(),"Are you sure you want to navigate away?"}});var t=O(),d=f(t);I(d,{});var e=r(d,2);G(e,{name:"Home"});var i=r(e,2),v=s(i),D=s(v);o(v);var l=r(v,2),m=s(l);m.__click=[z];var M=r(s(m),4);M.__click=[Y],o(m),o(l);var p=r(l,2),S=s(p);S.__click=[F],o(p);var u=r(p,2),j=s(u);j.__click=[J],o(u);var b=r(u,2),q=s(b);q.__click=[K],o(b),o(i),B(T=>P(D,`Today is ${T??""}.`),[()=>$(new Date,"dd MMMM yyyy")]),h(a,t),g()}R(["click"]);function oa(a,c){_(c,!0);var t=k(),d=f(t);w(d,()=>y.isLoaded(),null,(e,i)=>{Q(e,{})},(e,i)=>{x(e,{})}),h(a,t),g()}export{oa as component};
