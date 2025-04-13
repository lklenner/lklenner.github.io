import"./Bg9kRutz.js";import{p as B,s as u,c as m,r as d,a as E,f as U,k as i,t as C}from"./B_fWjAJn.js";import{d as P}from"./dYPrhcUL.js";import{t as h,a as _,c as J}from"./CGZ7VXBK.js";import{s as b,r as K,a as O}from"./Ct4An_w0.js";import{b as F,g as A,k as N,y as j,c as M,P as S,T as Q}from"./OwI2tFtm.js";import{g as W}from"./tkmHHtdh.js";import{s as T}from"./DuGrHTQZ.js";import{p as R,i as q}from"./CQam9C4R.js";import{I}from"./DmNFN6rQ.js";import{s as X}from"./99q-nmkb.js";import{_ as Y}from"./Bk--xVoV.js";function Z(c,a,r){console.log(c.target.value),a(c.target.value),r()(c.target.value)}var $=h("<option selected> </option>"),V=h("<option> </option>"),ee=h('<div class="mb-3"><label for="select-day-type" class="form-label">Type of day</label> <select class="form-select"></select></div>');function te(c,a){B(a,!0);let r=R(a,"selected",23,()=>F.Regular),x=R(a,"selectedChange",3,()=>{});const f=I.makeDefault();var k=ee(),v=u(m(k),2);b(v,"id",`select-day-type-${f??""}`),v.__change=[Z,r,x],A(v,21,()=>F.values(),N,(g,s)=>{var y=J(),w=U(y);{var o=l=>{var e=$(),t={},p=m(e,!0);d(e),C(D=>{t!==(t=i(s))&&(e.value=(e.__value=i(s))==null?"":i(s)),T(p,D)},[()=>F.toString(i(s))]),_(l,e)},n=l=>{var e=V(),t={},p=m(e,!0);d(e),C(D=>{t!==(t=i(s))&&(e.value=(e.__value=i(s))==null?"":i(s)),T(p,D)},[()=>F.toString(i(s))]),_(l,e)};q(w,l=>{i(s)==r()?l(o):l(n,!1)})}_(g,y)}),d(v),d(k),_(c,k),E()}P(["change"]);var ae=(c,a,r)=>a(i(r)),oe=h('<li><a class="dropdown-item"> </a></li>'),le=(c,a,r)=>a(i(r)),re=h('<div><span> </span> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-circle ps-2" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path></svg></div>'),se=h('<div class="d-flex mt-2"></div>'),ie=h('<div class="mb-3"><label for="select-day-type" class="form-label">Tags</label> <div class="dropdown"><a class="btn btn-outline-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Add tag...</a> <ul class="dropdown-menu"></ul></div> <!></div>');function ne(c,a){B(a,!0);let r=j.getDay(a.date);I.makeDefault();function x(o){r.tags.filter(l=>l==o.value).length>0||(r.tags.push(o.value),console.log(o),S.modified())}function f(o){r.tags=r.tags.filter(n=>n!=o),S.modified()}function k(o){return o.toUpperCase()==="#FFFFFF"?"outline":""}var v=ie(),g=u(m(v),2),s=u(m(g),2);A(s,21,()=>M.rune,N,(o,n)=>{var l=oe(),e=m(l);e.__click=[ae,x,n];var t=m(e,!0);d(e),d(l),C(()=>T(t,i(n).value)),_(o,l)}),d(s),d(g);var y=u(g,2);{var w=o=>{var n=se();A(n,21,()=>r.tags,N,(l,e)=>{var t=re(),p=m(t),D=m(p,!0);d(p);var L=u(p,2);b(L,"width",22),b(L,"height",22),L.__click=[le,f,e],d(t),C((z,G,H)=>{X(t,1,`badge rounded-pill mx-1 d-flex align-items-center ${z??""}`,"svelte-1hey1wl"),b(t,"style",`color: ${G??""}; background-color: ${H??""};`),T(D,i(e))},[()=>k(M.get(i(e)).bgColor),()=>Y(M.get(i(e)).bgColor),()=>M.get(i(e)).bgColor]),_(l,t)}),d(n),_(o,n)};q(y,o=>{r.tags.length>0&&o(w)})}d(v),_(c,v),E()}P(["click"]);var de=(c,a)=>{W(`/app/year/${a.date.getMonth()}/${a.date.getDate()}/timesheet`)},ce=h('<div class="mb-3"><label for="t1" class="form-label">Name</label> <input type="text" class="form-control"></div> <!> <!>  <div class="mb-3"><label class="form-label">Total Time</label> <input type="text" class="form-control" disabled> <button type="button" class="btn btn-outline-secondary mt-3">Switch to timesheet</button></div>',1);function we(c,a){B(a,!0);const r=`day-info-${I.makeDefault()}`,x=`time-input-${I.makeDefault()}`;let f=j.getDay(a.date);function k(){let t=0;for(const p of f.timesheet)t+=Q.duration(p);return t}var v=ce(),g=U(v),s=u(m(g),2);K(s),b(s,"id",r),s.__change=t=>{f.additionalName=t.target.value,S.modified()},d(g);var y=u(g,2);te(y,{get selected(){return f.dayType},selectedChange:t=>{f.dayType=t,S.modified()}});var w=u(y,2);ne(w,{get date(){return a.date}});var o=u(w,2),n=m(o);b(n,"for",x);var l=u(n,2);b(l,"id",x);var e=u(l,2);e.__click=[de,a],d(o),C(t=>{O(s,f.additionalName),b(l,"placeholder",t)},[k]),_(c,v),E()}P(["change","click"]);export{we as D};
