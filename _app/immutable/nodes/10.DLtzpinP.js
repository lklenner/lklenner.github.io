import"../chunks/Bg9kRutz.js";import{h as Vt,a6 as zt,aA as Gt,p as G,k as t,c,r as s,t as A,a as J,n as Jt,f as ot,s as m,au as Kt,j as Ut,A as mt,i as Wt}from"../chunks/B_fWjAJn.js";import{t as E,a as I,c as Xt}from"../chunks/CGZ7VXBK.js";import{t as pt,c as kt,i as Zt,y as $t,h as te,s as vt,T as ft,Q as ht,P as ee,g as ae,R as oe}from"../chunks/BKL1c2gs.js";import{a as g,o as wt,s as v}from"../chunks/-5UQ7fw5.js";import{s as D}from"../chunks/DuGrHTQZ.js";import{p as Q,i as ne}from"../chunks/BKxV5vi2.js";import{s as at,r as se}from"../chunks/Ct4An_w0.js";import{s as z}from"../chunks/99q-nmkb.js";import{l as re,d as yt}from"../chunks/dYPrhcUL.js";import{p as C}from"../chunks/BqFMnoIm.js";import{N as ie}from"../chunks/CFH1hw1G.js";import{N as ce,a as bt}from"../chunks/Bf_bNlXY.js";import{g as V}from"../chunks/DAYJw6E-.js";import{_ as le}from"../chunks/CYSSDSxk.js";import{T as de}from"../chunks/DH4ajtYU.js";import{I as Tt,a as x}from"../chunks/DsUiww_e.js";import{s as ue}from"../chunks/Bqj9CX9d.js";import{T as me}from"../chunks/CmRE5a5A.js";function ve(r,o,a=o){re(r,"change",d=>{var l=d?r.defaultChecked:r.checked;a(l)}),(Vt&&r.defaultChecked!==r.checked||zt(o)==null)&&a(r.checked),Gt(()=>{var d=o();r.checked=!!d})}function _t(r){return pt(r).getHours()}function gt(r){return pt(r).getMinutes()}class M{static Button(o,a,d){return{text:o,cssClass:a,onClick:d}}}var fe=E('<div class="modal fade" tabindex="-1" style="background: rgba(0, 0, 0, 0.5);"><div class="modal-dialog"><div class="modal-content"><!></div></div></div>');function he(r,o){G(o,!0);let a=Q(o,"id",7),d=Q(o,"show",15);a(Tt.makeDefault());let l=g(null),_="static";d(function(){var h;(h=t(l))==null||h.show()}),wt(()=>{v(l,C(new bootstrap.Modal(`#${a()}`,{}))),document.getElementById(`${a()}`).addEventListener("hidden.bs.modal",k=>{var w;(w=o.onClose)==null||w.call(o,t(l))})});var u=fe();at(u,"data-bs-backdrop",_);var H=c(u),p=c(H),f=c(p);ue(f,()=>o.content,()=>t(l)),s(p),s(H),s(u),A(()=>at(u,"id",a())),I(r,u),J()}var be=(r,o,a,d)=>t(o).onClick(a(),d()),_e=E('<button type="button"> </button>'),ge=E('<div class="modal-header"><h5 class="modal-title"> </h5></div> <div class="modal-body"><p> </p></div> <div class="modal-footer"></div>',1);function et(r,o){G(o,!0);const a=(u,H=Jt)=>{var p=ge(),f=ot(p),h=c(f),k=c(h,!0);s(h),s(f);var w=m(f,2),j=c(w),P=c(j,!0);s(j),s(w);var N=m(w,2);kt(N,21,d,Zt,(R,S)=>{var y=_e();y.__click=[be,S,H,l];var K=c(y,!0);s(y),A(()=>{z(y,1,`btn ${t(S).cssClass??""}`),D(K,t(S).text)}),I(R,y)}),s(N),A(()=>{D(k,o.title),D(P,o.body)}),I(u,p)};let d=Q(o,"buttons",19,()=>[]),l=Q(o,"state",19,()=>({})),_=Q(o,"show",15);Tt.makeDefault(),he(r,{content:a,onClose:u=>o.onClose(u,l()),get show(){return _()},set show(u){_(u)}}),J()}yt(["click"]);var pe=(r,o,a)=>o(t(a)),ke=E('<div style="cursor: pointer;"><div><span><strong> </strong></span></div></div>'),we=(r,o)=>{o("timesheet")},ye=E('<div class="position-fixed bottom-0 start-0 w-100 bg-light border-top py-2 px-3 d-flex align-items-center justify-content-between"><div class="container gap-1"><div class="row"><div class="col col-md-auto"><strong class="me-2 text-nowrap">Active:</strong> <div class="w-100"></div> <strong class="me-2 text-nowrap">Started:</strong> <div class="w-100"></div> <strong class="me-2 text-nowrap">Duration:</strong></div> <div class="col col-md-auto"><span> </span> <div class="w-100"></div> <span> </span> <div class="w-100"></div> <span> </span></div></div></div> <div><button class="btn btn-outline-danger">Stop Task</button></div></div>'),Te=E(`<!> <div id="taskContainer"><h1 class="mb-3">Track today's tasks</h1>  <div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" id="homeOfficeToggle"> <label class="form-check-label" for="homeOfficeToggle">Homeoffice</label></div> <div class="row"></div> <button id="timesheetBtn" type="button" class="btn btn-outline-secondary mt-3">Switch to Timesheet</button></div> <!>  <!>  <!> <!> <!>`,1);function Be(r,o){G(o,!0);let a=g(null),d=g(null),l=g(0),_=g(""),u=g(void 0),H=$t.getDay(new Date),p=mt(()=>{let e=[],n=0;for(const i of te.rune)i.hidden||(e.push({id:n,name:i.name,color:i.color}),n++);return e});Kt(()=>{v(_,`${Math.floor(t(l)/3600).toString().padStart(2,"0")}:${Math.floor(t(l)/60%60).toString().padStart(2,"0")}:${(t(l)%60).toString().padStart(2,"0")}`)});let f=null,h=null,k=null;const w=ce.Item("Home",()=>{y("home")});function j(e){var n;if(((n=t(a))==null?void 0:n.id)!==e.id){if(t(a))if(vt.rune.track.confirmAllTaskSwitches||t(l)<5){h=e,t(U)();return}else S();P(e)}}async function P(e){v(a,C(e)),v(d,C(new Date)),v(l,0),f&&clearInterval(f),f=setInterval(()=>{v(l,C(Math.floor((new Date-t(d))/1e3)))},1e3),e.id===t(p).length-1&&(await Wt(),document.getElementById("timesheetBtn").scrollIntoView({behavior:"smooth"}))}function N(){}function R(){S(),v(a,null),v(d,null),v(l,0),clearInterval(f),f=null}function S(){const e=`${_t(t(d))}:${gt(t(d))}`,n=new Date,i=`${_t(n)}:${gt(n)}`;let T=ht.Office;x.rune.atHome&&(T=ht.Home),t(a).name;const b=ft.new(t(a).name,e,i,T,!1);try{ft.validate(b)}catch(B){t(u)("Task entry was not created!",B.message,"text-bg-danger");return}H.timesheet.push(b),console.log(b),ee.modified(),t(u)("Created task entry",t(a).name,"text-bg-success")}function y(e){if(k=e,t(a))t(W)();else switch(k){case"back":bt.goBack();break;case"timesheet":V(`/app/year/${new Date().getMonth()}/${new Date().getDate()}/timesheet`);break;case"home":default:V("/app");break}}const K="Confirm Item Switch",Bt=mt(()=>vt.rune.track.confirmAllTaskSwitches?"Are you sure you want to switch to another item?":"The current item has been active for less than a minute. Are you sure you want to switch to another item?"),Ct=M.Button("Yes, switch","btn-secondary",function(n,i){S(),P(h),h=null,n.hide()}),xt=M.Button("Cancel","btn-secondary",function(n,i){h=null,n.hide()}),St=[Ct,xt];let U=g(void 0);const Dt="Confirm Item Switch",It="Are you working from your home or the office?",Ht=M.Button("Yes, leave","btn-primary",function(n,i){n.hide()}),Mt=M.Button("Cancel","btn-secondary",function(n,i){k=null,n.hide()}),At=[Ht,Mt];let W=g(void 0);function Et(e,n){if(k)switch(t(a)&&R(),k){case"back":bt.goBack();break;case"timesheet":V(`/app/year/${new Date().getMonth()}/${new Date().getDate()}/timesheet`);break;case"home":default:V("/app");break}}const Nt="Set Quota Type",Ot="Are you sure you want to leave the site while the tracker is active? Leaving causes the tracking to stop.",Lt=M.Button("Home","btn-secondary",function(n,i){i.location="home",x.rune.atHome=!0,n.hide()}),Qt=M.Button("Office","btn-secondary",function(n,i){i.location="office",x.rune.atHome=!1,n.hide()}),jt=[Lt,Qt];let X=g(void 0);wt(()=>{me.enable(),x.rune.hasTracked||(t(X)(),x.rune.hasTracked=!0)});var nt=Te(),st=ot(nt);ie(st,{name:"Track",navItems:[w]});var Y=m(st,2),Z=m(c(Y),2),rt=c(Z);se(rt),Ut(2),s(Z);var $=m(Z,2);kt($,21,()=>t(p),e=>e.id,(e,n)=>{var i=ke();let T;i.__click=[pe,j,n];var b=c(i),B=c(b),q=c(B),O=c(q,!0);s(q),s(B),s(b),s(i),A(tt=>{var L,F;T=z(i,1,"col-12 mb-2 svelte-19s4utb",null,T,{active:((L=t(a))==null?void 0:L.id)===t(n).id}),z(b,1,`card p-3 ${(((F=t(a))==null?void 0:F.id)===t(n).id?"border-primary shadow active-item border-4":"border-2 ")??""}`,"svelte-19s4utb"),at(b,"style",`color: ${tt??""}; background-color: ${t(n).color??""};`),D(O,t(n).name)},[()=>le(t(n).color)]),I(e,i)}),s($);var Pt=m($,2);Pt.__click=[we,y],s(Y);var it=m(Y,2);{var Rt=e=>{var n=ye(),i=c(n),T=c(i),b=m(c(T),2),B=c(b),q=c(B,!0);s(B);var O=m(B,4),tt=c(O,!0);s(O);var L=m(O,4),F=c(L,!0);s(L),s(b),s(T),s(i);var ut=m(i,2),qt=c(ut);qt.__click=R,s(ut),s(n),A(Ft=>{D(q,t(a).name),D(tt,Ft),D(F,t(_))},[()=>t(d).toLocaleTimeString("de-DE")]),I(e,n)};ne(it,e=>{t(a)&&e(Rt)})}var ct=m(it,2);et(ct,{title:K,get body(){return t(Bt)},onClose:N,buttons:St,get show(){return t(U)},set show(e){v(U,C(e))}});var lt=m(ct,2);et(lt,{title:Dt,body:It,onClose:Et,buttons:At,get show(){return t(W)},set show(e){v(W,C(e))}});var dt=m(lt,2);et(dt,{title:Nt,body:Ot,onClose:N,buttons:jt,get show(){return t(X)},set show(e){v(X,C(e))}});var Yt=m(dt,2);de(Yt,{get show(){return t(u)},set show(e){v(u,C(e))}}),A(()=>z(Y,1,`container mt-3 mb-3 ${(t(a)?"navbar-aware":"")??""}`,"svelte-19s4utb")),ve(rt,()=>x.rune.atHome,e=>x.rune.atHome=e),I(r,nt),J()}yt(["click"]);function Ve(r,o){G(o,!0);var a=Xt(),d=ot(a);ae(d,()=>x.isLoaded(),null,(l,_)=>{Be(l,{})},(l,_)=>{oe(l,{})}),I(r,a),J()}export{Ve as component};
