import"../chunks/Bg9kRutz.js";import{p as Y,s as l,c as a,r as e,a as q,f as V,g as t,t as T,aF as Bt,ag as ot,b as Ht,n as Pt}from"../chunks/DxIxdwJJ.js";import{t as $,a as f,c as G,n as St}from"../chunks/ZBGWEsqd.js";import{t as I,Q as st,c as Qt,D as ht,y as yt,P as kt,e as Tt,a as It,R as Nt}from"../chunks/DYRd5Js_.js";import{a as Rt}from"../chunks/D4epzopT.js";import{a as xt,s as wt}from"../chunks/asY5pKAJ.js";import{s as h}from"../chunks/CBNDWGhJ.js";import{p as J,i as lt}from"../chunks/CNQ8E8sm.js";import{e as N,i as R}from"../chunks/lG1nzOo9.js";import{a as C}from"../chunks/CcgQRso9.js";import{s as Vt}from"../chunks/Dqg-VxYc.js";import{d as nt}from"../chunks/CHGbQ8eI.js";import{p as L}from"../chunks/DX5c2CDw.js";import{p as rt}from"../chunks/e4bw9QY_.js";import{g as it}from"../chunks/CW3apKDm.js";import{N as Xt}from"../chunks/C-OrF9Lp.js";import{T as j}from"../chunks/BrEmoiAG.js";import{_ as Yt}from"../chunks/s0C2yGmA.js";import{X as qt}from"../chunks/CRd-7pXg.js";const Gt=!1,ze=Object.freeze(Object.defineProperty({__proto__:null,prerender:Gt},Symbol.toStringTag,{value:"Module"}));function Jt(v,n){console.log(v.target.value),n(v.target.value)}var Kt=$("<option selected> </option>"),Ut=$("<option> </option>"),Wt=$('<div class="row g-2 mb-3"><label for="select-quota-type" class="col-sm-3 col-form-label">Task</label> <div class="col-sm-5"><select class="form-select" id="select-quota-type"></select></div></div>');function Zt(v,n){Y(n,!0);const s=I.rune[0];let c=J(n,"selected",31,()=>L(s.name));var m=Wt(),_=l(a(m),2),S=a(_);S.__change=[Jt,c],N(S,21,()=>I.rune,R,(i,b)=>{var O=G(),F=V(O);{var z=d=>{var u=Kt(),x={},E=a(u,!0);e(u),T(()=>{x!==(x=t(b).name)&&(u.value=(u.__value=t(b).name)==null?"":t(b).name),h(E,t(b).name)}),f(d,u)},k=d=>{var u=Ut(),x={},E=a(u,!0);e(u),T(()=>{x!==(x=t(b).name)&&(u.value=(u.__value=t(b).name)==null?"":t(b).name),h(E,t(b).name)}),f(d,u)};lt(F,d=>{t(b).name==c()?d(z):d(k,!1)})}f(i,O)}),e(S),e(_),e(m),f(v,m),q()}nt(["change"]);function te(v,n){console.log(v.target.value),n(v.target.value)}var ee=$("<option selected> </option>"),ae=$("<option> </option>"),oe=$('<div class="row g-2 mb-3"><label for="select-quota-type" class="col-sm-3 col-form-label">Quota Type</label> <div class="col-sm-5"><select class="form-select" id="select-quota-type"></select></div></div>');function re(v,n){Y(n,!0);let s=J(n,"selected",31,()=>L(st.Office));var c=oe(),m=l(a(c),2),_=a(m);_.__change=[te,s],N(_,21,()=>st.values(),R,(S,i)=>{var b=G(),O=V(b);{var F=k=>{var d=ee(),u={},x=a(d,!0);e(d),T(()=>{u!==(u=t(i))&&(d.value=(d.__value=t(i))==null?"":t(i)),h(x,t(i))}),f(k,d)},z=k=>{var d=ae(),u={},x=a(d,!0);e(d),T(()=>{u!==(u=t(i))&&(d.value=(d.__value=t(i))==null?"":t(i)),h(x,t(i))}),f(k,d)};lt(O,k=>{t(i)==s()?k(F):k(z,!1)})}f(S,b)}),e(_),e(m),e(c),f(v,c),q()}nt(["change"]);var se=St('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path></svg>');function le(v,n){let s=J(n,"size",3,16);var c=se();T(()=>{C(c,"width",s()),C(c,"height",s())}),f(v,c)}var ne=St('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>');function ie(v,n){let s=J(n,"size",3,16);var c=ne();T(()=>{C(c,"width",s()),C(c,"height",s())}),f(v,c)}function ce(v,n,s,c){const m=document.getElementById("inputStart"),_=document.getElementById("inputEnd");if(!m.reportValidity()||!_.reportValidity())return;const S=m.value,i=_.value,b=j.new(t(n),S,i,t(s),!1);try{j.validate(b)}catch{return}t(c).timesheet.push(b),console.log(b),kt.modified()}function de(v,n){let s=Tt(t(n),-1);it(`/app/year/${s.getMonth()}/${s.getDate()}/timesheet`)}function ve(v,n){let s=Tt(t(n),1);it(`/app/year/${s.getMonth()}/${s.getDate()}/timesheet`)}var ue=$('<tr><th scope="row"></th><td> </td><td> </td><td> </td><td> </td><td> </td><td><button type="button" class="btn btn-sm d-flex align-items-center"><!></button></td></tr>'),me=$('<div class="progress" role="progressbar"><div data-bs-toggle="tooltip" data-bs-placement="bottom"> </div></div>'),pe=$("<tr><td> </td><td> </td><td> </td></tr>"),be=$('<!> <div class="container mt-3 mb-3"><h1 class="mt-3 mb-3"> </h1> <ul class="nav nav-tabs" id="myTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="editor-tab" data-bs-toggle="tab" data-bs-target="#editor-tab-pane" type="button" role="tab">Editor</button></li> <li class="nav-item" role="presentation"><button class="nav-link" id="statistics-tab" data-bs-toggle="tab" data-bs-target="#statistics-tab-pane" type="button" role="tab">Statistics</button></li></ul> <div class="tab-content mb-5"><div class="tab-pane show active" id="editor-tab-pane" role="tabpanel" tabindex="0"><h3 class="mt-5 mb-3">All entries</h3> <table class="table"><thead><tr><th scope="col">#</th><th scope="col">Task</th><th scope="col">Start</th><th scope="col">End</th><th scope="col">Duration</th><th scope="col">Location</th><th scope="col">Action</th></tr></thead><tbody></tbody></table> <h3 class="mt-5 mb-3">Insert new entry</h3> <!> <form novalidate=""><div class="row g-2 mb-3"><label for="inputStart" class="col-sm-3 col-form-label">Start</label> <div class="col-sm-5"><input type="text" id="inputStart" class="form-control" required pattern="^(([0-1]?\\d)|(2[0-3])):[0-5]\\d$"></div></div></form> <div class="row g-2 mb-3"><label for="inputEnd" class="col-sm-3 col-form-label">End</label> <div class="col-sm-5"><input type="text" id="inputEnd" class="form-control" required pattern="^(([0-1]?\\d)|(2[0-3])):[0-5]\\d$"></div></div> <!> <div class="row g-2 mb-3"><label for="inputStart" class="col-sm-3 col-form-label"></label> <div class="col-sm-5"><button type="button" class="btn btn-secondary">Add Entry</button></div></div></div> <div class="tab-pane" id="statistics-tab-pane" role="tabpanel" tabindex="0"><h3 class="mt-5 mb-3">Task distrubiton</h3> <div class="progress-stacked mb-3 border" style="height: 50px"><!></div> <h3 class="mt-5 mb-3">Task summary</h3> <table class="table"><thead><tr><th scope="col">Task</th><th scope="col">Duration</th><th scope="col">Share</th></tr></thead><tbody></tbody></table></div></div> <div class="d-flex justify-content-between"><button type="button" class="btn btn-outline-secondary"><!> <span style="vertical-align: middle;">Previous</span></button> <button type="button" class="btn btn-outline-secondary"><span style="vertical-align: middle;">Next</span> <!></button></div></div>',1);function fe(v,n){Y(n,!0);const s=ot(()=>new Date(yt.rune.yearLiteral,rt.params.month,rt.params.day)),c=["text-bg-primary","text-bg-success","text-bg-danger","text-bg-warning","text-bg-info","text-bg-light","text-bg-dark"];let m=ot(()=>yt.getDay(t(s))),_=xt(L(st.Home)),S=xt(L(I.rune[0].name)),i=ot(()=>{const r={};for(const o of t(m).timesheet)o.task in r||(r[o.task]=0),r[o.task]+=j.duration(o);return console.log("Calculate bins",r),r});Bt(async()=>{t(i),await Ht(),[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(o=>new bootstrap.Tooltip(o)),console.log("Enable tooltips")});function b(){it(`/app/year/${rt.params.month}`)}function O(r){console.log("Remove:",r),t(m).timesheet=t(m).timesheet.filter((o,p)=>p!=r),kt.modified()}function F(){return Object.values(t(i)).reduce((r,o)=>r+o,0)}function z(r){const o=I.rune.find(g=>g.name==r);let p="";return o!==void 0&&o.color!=="#FFFFFF"&&(p+=`color: ${Yt(o.color)};`,p+=`background-color: ${o.color};`),p}function k(r,o){const p=I.rune.find(y=>y.name==r);let g="";return p!==void 0&&p.color==="#FFFFFF"&&(g=`${c[o%c.length]}`),g}var d=be(),u=V(d);Xt(u,{name:"Timesheet",goBack:b});var x=l(u,2),E=a(x),$t=a(E);e(E);var K=l(E,4),U=a(K),W=l(a(U),2),ct=l(a(W));N(ct,21,()=>t(m).timesheet,R,(r,o,p)=>{var g=ue(),y=a(g);y.textContent=p+1;var D=l(y),M=a(D,!0);e(D);var w=l(D),H=a(w,!0);e(w);var A=l(w),P=a(A,!0);e(A);var Q=l(A),tt=a(Q,!0);e(Q);var et=l(Q),Ct=a(et,!0);e(et);var gt=l(et),at=a(gt);at.__click=()=>{O(p)};var Ot=a(at);qt(Ot,{colorStyle:"text-danger"}),e(at),e(gt),e(g),T((Lt,jt,zt)=>{h(M,t(o).task),h(H,Lt),h(P,jt),h(tt,zt),h(Ct,t(o).qType)},[()=>j.formatTimespamp(t(o).start),()=>j.formatTimespamp(t(o).end),()=>Math.round(j.duration(t(o))*1e4)/1e4]),f(r,g)}),e(ct),e(W);var dt=l(W,4);Zt(dt,{get selected(){return t(S)},set selected(r){wt(S,L(r))}});var vt=l(dt,6);re(vt,{get selected(){return t(_)},set selected(r){wt(_,L(r))}});var ut=l(vt,2),mt=l(a(ut),2),Dt=a(mt);Dt.__click=[ce,S,_,m],e(mt),e(ut),e(U);var pt=l(U,2),Z=l(a(pt),2),Mt=a(Z);{var Ft=r=>{var o=G(),p=V(o);N(p,17,()=>Object.keys(t(i)).sort(),R,(g,y,D)=>{var M=me(),w=a(M),H=a(w,!0);e(w),e(M),T((A,P,Q,tt)=>{C(M,"style",`width: ${A??""}%; height: 50px;`),Vt(w,1,`progress-bar ${P??""}`),C(w,"style",Q),C(w,"data-bs-title",`${t(y)??""}: ${tt??""}%`),h(H,t(y))},[()=>t(i)[t(y)]/F()*100,()=>k(t(y),D),()=>z(t(y)),()=>Math.round(t(i)[t(y)]/F()*1e4)/100]),f(g,M)}),f(r,o)};lt(Mt,r=>{Object.keys(t(i)).length>0&&r(Ft)})}e(Z);var bt=l(Z,4),ft=l(a(bt));N(ft,21,()=>Object.keys(t(i)).sort(),R,(r,o)=>{var p=pe(),g=a(p),y=a(g,!0);e(g);var D=l(g),M=a(D,!0);e(D);var w=l(D),H=a(w);e(w),e(p),T((A,P)=>{h(y,t(o)),h(M,A),h(H,`${P??""}%`)},[()=>Math.round(t(i)[t(o)]*100)/100,()=>Math.round(t(i)[t(o)]/F()*1e4)/100]),f(r,p)}),e(ft),e(bt),e(pt),e(K);var _t=l(K,2),B=a(_t);B.__click=[de,s];var Et=a(B);le(Et,{}),Pt(2),e(B);var X=l(B,2);X.__click=[ve,s];var At=l(a(X),2);ie(At,{}),e(X),e(_t),e(x),T((r,o,p)=>{h($t,`Timesheet for ${r??""}.`),B.disabled=o,X.disabled=p},[()=>Qt(t(s),"E dd MMMM yyyy"),()=>ht.isFirstDayOfYear(t(s)),()=>ht.isLastDayOfYear(t(s))]),f(v,d),q()}nt(["click"]);function Be(v,n){Y(n,!0);var s=G(),c=V(s);It(c,()=>Rt.isLoaded(),null,(m,_)=>{fe(m,{})},m=>{Nt(m,{})}),f(v,s),q()}export{Be as component,ze as universal};
