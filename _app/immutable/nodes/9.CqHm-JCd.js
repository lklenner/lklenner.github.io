import"../chunks/Bg9kRutz.js";import{p as ht,X as Et,g as e,f as _t,v as X,s as i,c as a,r as o,n as mt,t as Ft,a as yt}from"../chunks/BUjIT_Mk.js";import{t as Kt,a as xt,c as Pt}from"../chunks/B9kf_Ie_.js";import{s as f,y as z,d as Wt,f as J,h as pt,Q as g,j as At,D as Gt,k as Ut,b as Vt,R as Xt}from"../chunks/Dnvx4tmM.js";import{a as zt}from"../chunks/DqWk7Urd.js";import{a as Z,s as tt,o as Jt}from"../chunks/CIwiONnU.js";import{s as n}from"../chunks/BjGBDkgq.js";import{s as u}from"../chunks/LVKOVOzu.js";import{s as gt}from"../chunks/DDCU0q_E.js";import{p as b}from"../chunks/BacJj1fc.js";import{N as Zt}from"../chunks/BXGJI-AL.js";import{N as bt}from"../chunks/C5m1Kr_D.js";import{i as te}from"../chunks/BJcQt1Sd.js";var ee=Kt(`<!> <div class="container mt-3 mb-3"><div class="card mt-3 mb-3 shadow-sm clickable"><div class="card-body"><h5 class="card-title">Statistics</h5> <p class="card-text">Considering the time period from <b> </b> to <b> </b>.</p> <p class="card-text">You have worked a total of <b> </b> hours. You spend <b> </b> at home 
                and <b> </b> at the office. Which gives the following distribution.
                Your current homeoffice quota is <b> </b> </p> <div class="progress-stacked mb-3 border"><div class="progress" role="progressbar"><div data-bs-toggle="tooltip" data-bs-placement="bottom"> </div></div> <div class="progress" role="progressbar"><div class="progress-bar office-bg svelte-1wq0gv9" data-bs-toggle="tooltip" data-bs-placement="bottom"> </div></div></div> <p class="card-text">The remaing year has <b> </b> working days left. That means, to achive a perfect quota, you can spend another <b> </b> hours at home. This is approximately <b> </b> days.</p> <p class="card-text">You projected distribution for the rest of the year is:</p> <div class="progress-stacked mb-3 border"><div class="progress" role="progressbar"><div data-bs-toggle="tooltip" data-bs-placement="bottom"> </div></div> <div class="progress" role="progressbar"><div class="progress-bar office-bg svelte-1wq0gv9" data-bs-toggle="tooltip" data-bs-placement="bottom"> </div></div></div></div></div></div>`,1);function ae(D,T){ht(T,!0);let s=Z(b({total:0,home:0,office:0})),v=Z(b({total:0,home:0,office:0})),h=X(()=>{let r=e(s).home/e(s).total;r=isNaN(r)?0:r;const t=f.rune.contract.homeOfficeQuota-r;return t>=.1?"OK":t>=0?"OK, but close":"OVERSHOOTING"}),m=Z(b([])),et=X(()=>f.rune.contract.homeOfficeQuota*(e(s).total+e(m).length*Y)-e(s).home);Et(()=>{let r=f.rune.contract.homeOfficeQuota;console.log(r*(e(s).total+e(m).length*Y)-e(s).home)});const at=new Date,_=new Date(z.rune.yearLiteral,0),k=Wt(_),N=at.getFullYear===_.getFullYear?at:k,Y=c(f.rune.contract.workingHours/5,2),qt=J({start:_,end:N}),Ot=J({start:_,end:k});function ot(r){const t={total:0,home:0,office:0},l=f.rune.contract.quotaCorrection.quotaDate,p=f.rune.contract.quotaCorrection.quota,A=f.rune.contract.quotaCorrection.workingHours;for(const y of r){const G=z.getDay(y),d=At.aggregateDurationsByType(G.timesheet),U=Object.values(d).reduce((V,H)=>V+H,0);t.total+=U,t.home+=(d==null?void 0:d[g.Home])??0,t.office+=(d==null?void 0:d[g.Office])??0,Gt.equal(y,l)&&(console.log("Correct homeoffice quota"),t.total=A,t.home=t.total*p,t.office=t.total*(1-p))}return console.log(t),t}function c(r,t=2){return r=isNaN(r)?0:r,Math.round(r*10**t)/10**t}function rt(r){let t=r.home/r.total;t=isNaN(t)?0:t;const l=f.rune.contract.homeOfficeQuota-t;return l>=.1?"bg-success":l>=0?"bg-warning":"bg-danger"}function wt(){const r=J({start:N,end:k});let t=[];for(const l of r){const p=z.getDay(l);te(l)||p.dayType===Ut.Regular&&t.push(l)}return t}tt(s,b(ot(qt))),tt(v,b(ot(Ot))),tt(m,b(wt())),Jt(()=>{[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(t=>new bootstrap.Tooltip(t))});var st=ee(),it=_t(st);const Ht=X(()=>[bt.HomeItem(),bt.UpItem()]);Zt(it,{name:"Status",get navItems(){return e(Ht)}});var nt=i(it,2),ct=a(nt),lt=a(ct),S=i(a(lt),2),Q=i(a(S)),Dt=a(Q,!0);o(Q);var dt=i(Q,2),Tt=a(dt,!0);o(dt),mt(),o(S);var $=i(S,2),C=i(a($)),kt=a(C,!0);o(C);var M=i(C,2),Nt=a(M,!0);o(M);var R=i(M,2),Yt=a(R,!0);o(R);var I=i(R,2),St=a(I);o(I);var Qt=i(I);o($);var j=i($,2),x=a(j),q=a(x),$t=a(q,!0);o(q),o(x);var L=i(x,2),B=a(L),Ct=a(B,!0);o(B),o(L),o(j);var E=i(j,2),F=i(a(E)),Mt=a(F,!0);o(F);var K=i(F,2),Rt=a(K,!0);o(K);var ft=i(K,2),It=a(ft,!0);o(ft),mt(),o(E);var vt=i(E,4),O=a(vt),w=a(O),jt=a(w,!0);o(w),o(O);var P=i(O,2),W=a(P),Lt=a(W,!0);o(W),o(P),o(vt),o(lt),o(ct),o(nt),Ft((r,t,l,p,A,y,G,d,U,V,H,Bt,ut)=>{n(Dt,r),n(Tt,t),n(kt,l),n(Nt,p),n(Yt,A),n(St,`${f.rune.contract.homeOfficeQuota*100}%`),n(Qt,`, therefore you are ${e(h)??""}.`),u(x,"style",`width: ${y??""}%;`),gt(q,1,`progress-bar ${G??""}`,"svelte-1wq0gv9"),u(q,"data-bs-title",`Homeoffice quota: ${y??""}%`),n($t,g.Home),u(L,"style",`width: ${d??""}%;`),u(B,"data-bs-title",`Office: ${d??""}%`),n(Ct,g.Office),n(Mt,e(m).length),n(Rt,U),n(It,V),u(O,"style",`width: ${H??""}%;`),gt(w,1,`progress-bar ${Bt??""}`,"svelte-1wq0gv9"),u(w,"data-bs-title",`Homeoffice quota: ${H??""}%`),n(jt,g.Home),u(P,"style",`width: ${ut??""}%;`),u(W,"data-bs-title",`Office: ${ut??""}%`),n(Lt,g.Office)},[()=>pt(_,"dd.MM.yyyy"),()=>pt(N,"dd.MM.yyyy"),()=>c(e(s).total,2),()=>c(e(s).home,2),()=>c(e(s).office,2),()=>c(e(s).home/e(s).total,4)*100,()=>rt(e(s)),()=>c(e(s).office/e(s).total,4)*100,()=>c(e(et),2),()=>c(e(et)/Y),()=>c(e(v).home/e(v).total,4)*100,()=>rt(e(v)),()=>c(e(v).office/e(v).total,4)*100]),xt(D,st),yt()}function ge(D,T){ht(T,!0);var s=Pt(),v=_t(s);Vt(v,()=>zt.isLoaded(),null,(h,m)=>{ae(h,{})},(h,m)=>{Xt(h,{})}),xt(D,s),yt()}export{ge as component};
