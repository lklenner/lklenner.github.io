import"../chunks/Bg9kRutz.js";import{p as I,s as h,c as g,f as D,g as i,r as m,a as N,t as S,b as Q}from"../chunks/DxIxdwJJ.js";import{t as k,c as G,a as _}from"../chunks/ZBGWEsqd.js";import{d as U,i as X,m as P,n as Z,o as w,y as C,P as V,e as B,p as $,q as ee,D as O,a as te,R as ae}from"../chunks/CIDEEFTv.js";import{e as M,i as W}from"../chunks/lG1nzOo9.js";import{o as J,a as oe,s as re}from"../chunks/asY5pKAJ.js";import{p as ne}from"../chunks/OnErItA2.js";import{N as se}from"../chunks/DFaO6Fj-.js";import{s as Y}from"../chunks/CBNDWGhJ.js";import{p as F,i as H}from"../chunks/CNQ8E8sm.js";import{p as q}from"../chunks/DX5c2CDw.js";import{a as E}from"../chunks/CcgQRso9.js";import{s as ie}from"../chunks/Dqg-VxYc.js";import{I as T}from"../chunks/DZYRfo_j.js";import{d as K}from"../chunks/CHGbQ8eI.js";import{g as le}from"../chunks/DcGapuE8.js";import{T as de}from"../chunks/Cfk0PfAc.js";import{i as z}from"../chunks/BZH22qtm.js";import{a as ce}from"../chunks/3wMF4q86.js";function me(o){const e=U(o).getDay();return e===0||e===6}function ve(o,e){const t=e*7;return X(o,t)}function fe(o){const e=P(o),v=+P(ve(e,60))-+e;return Math.round(v/Z)}const ue=!1,Qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue},Symbol.toStringTag,{value:"Module"}));function ge(o,e,t){console.log(o.target.value),e(o.target.value),t()(o.target.value)}var he=k("<option selected> </option>"),pe=k("<option> </option>"),_e=k('<div class="mb-3"><label for="select-day-type" class="form-label">Type of day</label> <select class="form-select" id="select-day-type"></select></div>');function ye(o,e){I(e,!0);let t=F(e,"selected",23,()=>w.Regular),v=F(e,"selectedChange",3,()=>{});var n=_e(),r=h(g(n),2);r.__change=[ge,t,v],M(r,21,()=>w.values(),W,(d,s)=>{var f=G(),y=D(f);{var x=u=>{var a=he(),l={},p=g(a,!0);m(a),S(b=>{l!==(l=i(s))&&(a.value=(a.__value=i(s))==null?"":i(s)),Y(p,b)},[()=>w.toString(i(s))]),_(u,a)},c=u=>{var a=pe(),l={},p=g(a,!0);m(a),S(b=>{l!==(l=i(s))&&(a.value=(a.__value=i(s))==null?"":i(s)),Y(p,b)},[()=>w.toString(i(s))]),_(u,a)};H(y,u=>{i(s)==t()?u(x):u(c,!1)})}_(d,f)}),m(r),m(n),_(o,n),N()}K(["change"]);var be=(o,e)=>{le(`/app/year/${e.date.getMonth()}/${e.date.getDate()}/timesheet`)},ke=k('<div class="mb-3"><label for="t1" class="form-label">Name</label> <input type="text" class="form-control" id="t1"></div> <!>  <div class="mb-3"><label for="t2" class="form-label">Total Time</label> <input type="text" class="form-control" id="t2" disabled> <button type="button" class="btn btn-outline-secondary mt-3">Switch to timesheet</button></div>',1);function xe(o,e){I(e,!0);let t=C.getDay(e.date);function v(){let c=0;for(const u of t.timesheet)c+=de.duration(u);return c}var n=ke(),r=D(n),d=h(g(r),2);d.__change=c=>{t.additionalName=c.target.value,V.modified()},m(r);var s=h(r,2);ye(s,{get selected(){return t.dayType},selectedChange:c=>{t.dayType=c,V.modified()}});var f=h(s,2),y=h(g(f),2),x=h(y,2);x.__click=[be,e],m(f),S(c=>{E(d,"placeholder",t.additionalName),E(y,"placeholder",c)},[v]),_(o,n),N()}K(["change","click"]);var we=k('<div><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne"> </button></h2> <div class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"><!></div></div></div></div>');function R(o,e){I(e,!0);const t=T.make(T.lengthForComponents),v=T.make(T.lengthForComponents);let n=C.getDay(e.date);function r(l){if(z(l))return"dsToday";switch(n.dayType){case w.Holiday:return"dsHoliday"}if(me(l))return"dsWeekend";switch(n.dayType){case w.Vacation:return"dsVacation";case w.Sick:return"dsSick";case w.SickNoAttest:return"dsSickNoAttest"}return""}J(async()=>{await Q(),window.location.hash=="#today"&&z(e.date)&&(console.log(t),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"}))});var d=we();E(d,"id",t);var s=g(d),f=g(s),y=g(f);E(y,"data-bs-target",`#${v??""}`);var x=g(y);m(y),m(f);var c=h(f,2);E(c,"id",v);var u=g(c),a=g(u);xe(a,{get date(){return e.date}}),m(u),m(c),m(s),m(d),S((l,p,b)=>{ie(d,1,`accordion mb-2 ${l??""}`,"svelte-140uf3"),Y(x,`${p??""}. ${b??""} ${(n.additionalName?" - ":"")??""} ${n.additionalName??""}`)},[()=>r(e.date),()=>B(e.date,"d"),()=>B(e.date,"EEEE")]),_(o,d),N()}var De=k('<!> <p class="mt-3 d-flex justify-content-center"> </p>',1),Se=k('<p class="mt-3 d-flex justify-content-center"> </p> <!>',1),Ie=k('<h2 class="mb-2 mt-3"></h2> <!> <!> <!>',1);function Ne(o,e){I(e,!0);const t=$(e.week[0],{weekStartsOn:1,firstWeekContainsDate:4});fe(new Date(C.rune.yearLiteral,0)),ee(new Date(C.rune.yearLiteral,0));const v=e.month==0,n=e.month==11;let r=oe(q({prefix:!1,days:[]}));e.week.length<7&&re(r,q(O.getRestDays(e.week)));var d=Ie(),s=D(d);s.textContent=`Week ${t??""}`;var f=h(s,2);{var y=a=>{var l=De(),p=D(l);M(p,17,()=>i(r).days,W,(j,L)=>{R(j,{get date(){return i(L)},isAdditional:!0})});var b=h(p,2),A=g(b);m(b),S(()=>Y(A,`Begin of ${O.MonthNames[e.month]??""}`)),_(a,l)};H(f,a=>{i(r).days.length>0&&i(r).prefix&&!v&&a(y)})}var x=h(f,2);M(x,17,()=>e.week,W,(a,l)=>{R(a,{get date(){return i(l)},isAdditional:!1})});var c=h(x,2);{var u=a=>{var l=Se(),p=D(l),b=g(p);m(p);var A=h(p,2);M(A,17,()=>i(r).days,W,(j,L)=>{R(j,{get date(){return i(L)},isAdditional:!0})}),S(()=>Y(b,`End of ${O.MonthNames[e.month]??""}`)),_(a,l)};H(c,a=>{i(r).days.length>0&&!i(r).prefix&&!n&&a(u)})}_(o,d),N()}var Oe=k('<!> <div class="container mt-3 mb-3"></div>',1);function Me(o,e){I(e,!0);const t=ne.params.month,v=O.getWeeks(new Date(C.rune.yearLiteral,t));J(async()=>{});var n=Oe(),r=D(n);se(r,{get name(){return O.MonthNames[t]}});var d=h(r,2);M(d,21,()=>v,W,(s,f)=>{Ne(s,{month:t,get week(){return i(f)}})}),m(d),_(o,n),N()}function Ue(o,e){I(e,!0);var t=G(),v=D(t);te(v,()=>ce.isLoaded(),null,(n,r)=>{Me(n,{})},(n,r)=>{ae(n,{})}),_(o,t),N()}export{Ue as component,Qe as universal};
