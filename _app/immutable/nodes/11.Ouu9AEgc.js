import"../chunks/Bg9kRutz.js";import{p as d,c as m,r as c,t as N,a as h,f as u,g as p,v as f,s as g}from"../chunks/BUjIT_Mk.js";import{t as _,a as v,c as C}from"../chunks/B9kf_Ie_.js";import{D as b,e as I,i as w,y,b as D,R as H}from"../chunks/Dnvx4tmM.js";import{I as i,a as L}from"../chunks/DqWk7Urd.js";import{o as k}from"../chunks/CIwiONnU.js";import{s as F}from"../chunks/BjGBDkgq.js";import{d as R}from"../chunks/ChM4DITq.js";import{s as S}from"../chunks/DDCU0q_E.js";import{g as Y}from"../chunks/BwmWtf6n.js";import{N as j}from"../chunks/BXGJI-AL.js";import{N as q}from"../chunks/C5m1Kr_D.js";function z(o,a){console.log("click"),Y(`/app/year/${a.month}`)}var A=_('<div><div class="card-body"><h5 class="card-title"> </h5></div></div>');function B(o,a){d(a,!0),i.make(i.lengthForComponents),i.make(i.lengthForComponents);function r(){return new Date().getMonth()===a.month?"thisMonth":""}k(async()=>{});var e=A(),t=m(e);t.__click=[z,a];var s=m(t),n=m(s);c(s),c(t),c(e),N(l=>{S(e,1,`card mb-3 shadow-sm clickable ${l??""}`,"svelte-1opylh4"),F(n,`${a.month+1}. ${b.MonthNames[a.month]??""}`)},[r]),v(o,e),h()}R(["click"]);var E=_('<!> <div class="container mt-3"><h1 class="mb-3">Months</h1> <!></div>',1);function G(o,a){d(a,!0),a.shared,k(async()=>{});var r=E(),e=u(r);const t=f(()=>`${y.rune.yearLiteral}`),s=f(()=>[q.HomeItem()]);j(e,{get name(){return p(t)},get navItems(){return p(s)}});var n=g(e,2),l=g(m(n),2);I(l,17,()=>b.MonthNames,w,(M,J,x)=>{B(M,{month:x})}),c(n),v(o,r),h()}function ea(o,a){d(a,!0),console.log(y.rune.yearLiteral);var r=C(),e=u(r);D(e,()=>L.isLoaded(),null,(t,s)=>{G(t,{})},(t,s)=>{H(t,{})}),v(o,r),h()}export{ea as component};
