import"../chunks/Bg9kRutz.js";import{t as C,p as $t,au as Kt,k as t,A as L,i as Zt,f as ot,s,c as r,r as a,j as te,a as St}from"../chunks/B_fWjAJn.js";import{n as ee,a as _,t as I,c as Mt}from"../chunks/CGZ7VXBK.js";import{Q as ae,h as J,g as K,k as Z,n as oe,D as P,y as kt,T as f,i as wt,P as Et,q as re,f as se}from"../chunks/OwI2tFtm.js";import{R as ne}from"../chunks/DtyOdfFN.js";import{a as ie}from"../chunks/DmNFN6rQ.js";import{a as tt,o as le,c as de,s as et}from"../chunks/CRjo6MhA.js";import{s as u}from"../chunks/DuGrHTQZ.js";import{p as ce,i as Tt}from"../chunks/CQam9C4R.js";import{s as y}from"../chunks/Ct4An_w0.js";import{s as me}from"../chunks/99q-nmkb.js";import{d as pe}from"../chunks/dYPrhcUL.js";import{p as j}from"../chunks/Bpl_FzqZ.js";import{p as R}from"../chunks/CKoJ0kxm.js";import{g as M}from"../chunks/tkmHHtdh.js";import{N as ve}from"../chunks/BRgEesOk.js";import{T as be,Q as ue}from"../chunks/BXaSIAFW.js";import{A as fe,a as he}from"../chunks/DlkemsOt.js";import{_ as ge}from"../chunks/Bk--xVoV.js";import{X as _e}from"../chunks/Dc7OB1SJ.js";import{N as at}from"../chunks/C4r051LV.js";import{T as ye}from"../chunks/B2uNb4Sz.js";import{T as xe}from"../chunks/CmRE5a5A.js";import{i as Dt}from"../chunks/DQ_0QYdl.js";const ke=!1,oa=Object.freeze(Object.defineProperty({__proto__:null,prerender:ke},Symbol.toStringTag,{value:"Module"}));var we=ee('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"></path></svg>');function Te(D,g){let n=ce(g,"size",3,16);var p=we();C(()=>{y(p,"width",n()),y(p,"height",n())}),_(D,p)}function De(D,g,n,p,c){const x=document.getElementById("inputStart"),$=document.getElementById("inputEnd");if(!x.reportValidity()||!$.reportValidity())return;const E=x.value,m=$.value,F=f.new(t(g),E,m,t(n),!1);try{f.validate(F)}catch(H){t(p)("Entry could not be created!",H.message,"text-bg-danger");return}t(c).timesheet.push(F),console.log(F),Et.modified(),t(p)("Created entry",t(g),"text-bg-success")}function $e(){M("/app/track")}var Se=I('<tr><th scope="row"></th><td> </td><td> </td><td> </td><td><span data-bs-toggle="tooltip" data-bs-placement="bottom"> </span></td><td> </td><td><div class="d-flex"><button type="button" class="btn btn-sm d-flex align-items-center"><!></button> <button type="button" class="btn btn-sm d-flex align-items-center"><!></button></div></td></tr>'),Me=I('<div class="progress" role="progressbar"><div data-bs-toggle="tooltip" data-bs-placement="bottom"> </div></div>'),Ee=I('<tr><td> </td><td><span data-bs-toggle="tooltip" data-bs-placement="bottom"> </span></td><td> </td></tr>'),Fe=I('<button type="button" class="btn btn-outline-secondary">Switch to Tracking</button>'),Ae=I('<!> <div class="container mt-3 mb-3"><h1 class="mt-3 mb-3"> </h1> <ul class="nav nav-tabs" id="myTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="editor-tab" data-bs-toggle="tab" data-bs-target="#editor-tab-pane" type="button" role="tab">Editor</button></li> <li class="nav-item" role="presentation"><button class="nav-link" id="statistics-tab" data-bs-toggle="tab" data-bs-target="#statistics-tab-pane" type="button" role="tab">Statistics</button></li></ul> <div class="tab-content mb-5"><div class="tab-pane show active" id="editor-tab-pane" role="tabpanel" tabindex="0"><h3 class="mt-5 mb-3">Total time</h3> <input type="text" class="form-control" disabled> <h3 class="mt-5 mb-3">All entries</h3> <table class="table"><thead><tr><th scope="col">#</th><th scope="col">Task</th><th scope="col">Start</th><th scope="col">End</th><th scope="col">Duration</th><th scope="col">Location</th><th scope="col">Action</th></tr></thead><tbody></tbody></table> <h3 class="mt-5 mb-3">Insert new entry</h3> <!> <form novalidate=""><div class="row g-2 mb-3"><label for="inputStart" class="col-sm-3 col-form-label">Start</label> <div class="col-sm-2"><input type="time" id="inputStart" class="form-control"></div></div></form> <div class="row g-2 mb-3"><label for="inputEnd" class="col-sm-3 col-form-label">End</label> <div class="col-sm-2"><input type="time" id="inputEnd" class="form-control"></div></div> <!> <div class="row g-2 mb-3"><label for="inputStart" class="col-sm-3 col-form-label"></label> <div class="col-sm-5"><button type="button" class="btn btn-secondary">Add Entry</button></div></div></div> <div class="tab-pane" id="statistics-tab-pane" role="tabpanel" tabindex="0"><h3 class="mt-5 mb-3">Task distrubiton</h3> <div class="progress-stacked mb-3 border" style="height: 50px"><!></div> <h3 class="mt-5 mb-3">Task summary</h3> <table class="table"><thead><tr><th scope="col">Task</th><th scope="col">Duration</th><th scope="col">Share</th></tr></thead><tbody></tbody></table></div></div> <div class="d-flex justify-content-between"><button type="button" class="btn btn-outline-secondary"><!> <span style="vertical-align: middle;">Previous</span></button> <!> <button type="button" class="btn btn-outline-secondary"><span style="vertical-align: middle;">Next</span> <!></button></div></div> <!>',1);function Oe(D,g){$t(g,!0);const n=L(()=>new Date(kt.rune.yearLiteral,R.params.month,R.params.day)),p=["text-bg-primary","text-bg-success","text-bg-danger","text-bg-warning","text-bg-info","text-bg-light","text-bg-dark"];let c=L(()=>kt.getDay(t(n))),x=tt(j(ae.Home)),$=tt(j(J.rune[0].name)),E=tt(void 0),m=L(()=>f.aggregateDurations(t(c).timesheet)),F=L(()=>{let e=0;for(const o of t(c).timesheet)e+=f.duration(o);return e});Kt(async()=>{t(m),await Zt(),xe.enable(),console.log("Enable tooltips")});function H(){M(`/app/year/${R.params.month}#${t(n).getDate()}`)}function Ft(e){console.log("Remove:",e),t(c).timesheet=t(c).timesheet.filter((o,i)=>i!=e),Et.modified()}function At(e){M(`/app/year/${R.params.month}/${t(n).getDate()}/timesheet/${e}`)}function Q(){return Object.values(t(m)).reduce((e,o)=>e+o,0)}function rt(){let e=wt(t(n),-1);M(`/app/year/${e.getMonth()}/${e.getDate()}/timesheet`)}function st(){let e=wt(t(n),1);M(`/app/year/${e.getMonth()}/${e.getDate()}/timesheet`)}function Ot(){const e=re(t(n),{weekStartsOn:1,firstWeekContainsDate:4});M(`/app/year/week/${e}`)}function Lt(e){const o=J.rune.find(l=>l.name==e);let i="";return o!==void 0&&o.color!=="#FFFFFF"&&(i+=`color: ${ge(o.color)};`,i+=`background-color: ${o.color};`),i}function jt(e,o){const i=J.rune.find(d=>d.name==e);let l="";return(i===void 0||i.color.toUpperCase()==="#FFFFFF")&&(l=`${p[o%p.length]}`),l}function nt(e){e.key=="ArrowLeft"&&!P.isFirstDayOfYear(t(n))?rt():e.key=="ArrowRight"&&!P.isLastDayOfYear(t(n))&&st()}le(()=>{window.addEventListener("keydown",nt)}),de(()=>{window.removeEventListener("keydown",nt)});var it=Ae(),lt=ot(it);const Ct=L(()=>[at.HomeItem(),at.Item("Days",H),at.Item("Week Report",Ot)]);ve(lt,{name:"Timesheet",get navItems(){return t(Ct)}});var V=s(lt,2),B=r(V),It=r(B);a(B);var W=s(B,4),Y=r(W),dt=s(r(Y),2),q=s(dt,4),ct=s(r(q));K(ct,21,()=>t(c).timesheet,Z,(e,o,i)=>{var l=Se(),d=r(l);d.textContent=i+1;var h=s(d),b=r(h,!0);a(h);var v=s(h),S=r(v,!0);a(v);var k=s(v),O=r(k,!0);a(k);var w=s(k),T=r(w),Bt=r(T,!0);a(T),a(w);var U=s(w),Wt=r(U,!0);a(U);var yt=s(U),xt=r(yt),z=r(xt);z.__click=()=>{At(i)};var Yt=r(z);Te(Yt,{}),a(z);var G=s(z,2);G.__click=()=>{Ft(i)};var qt=r(G);_e(qt,{colorStyle:"text-danger"}),a(G),a(xt),a(yt),a(l),C((Xt,Ut,Gt,Jt)=>{u(b,t(o).taskName),u(S,Xt),u(O,Ut),y(T,"data-bs-title",`${Gt??""} h`),u(Bt,Jt),u(Wt,t(o).quotaType)},[()=>f.formatTimespamp(t(o).start),()=>f.formatTimespamp(t(o).end),()=>f.formatDecimalTime(f.duration(t(o))),()=>Math.round(f.duration(t(o))*1e4)/1e4]),_(e,l)}),a(ct),a(q);var mt=s(q,4);be(mt,{get selected(){return t($)},set selected(e){et($,j(e))}});var pt=s(mt,6);ue(pt,{get selected(){return t(x)},set selected(e){et(x,j(e))}});var vt=s(pt,2),bt=s(r(vt),2),Nt=r(bt);Nt.__click=[De,$,x,E,c],a(bt),a(vt),a(Y);var ut=s(Y,2),X=s(r(ut),2),zt=r(X);{var Pt=e=>{var o=Mt(),i=ot(o);K(i,17,()=>Object.keys(t(m)).sort(),Z,(l,d,h)=>{var b=Me(),v=r(b),S=r(v,!0);a(v),a(b),C((k,O,w,T)=>{y(b,"style",`width: ${k??""}%; height: 50px;`),me(v,1,`progress-bar ${O??""}`),y(v,"style",w),y(v,"data-bs-title",`${t(d)??""}: ${T??""}%`),u(S,t(d))},[()=>t(m)[t(d)]/Q()*100,()=>jt(t(d),h),()=>Lt(t(d)),()=>Math.round(t(m)[t(d)]/Q()*1e4)/100]),_(l,b)}),_(e,o)};Tt(zt,e=>{Object.keys(t(m)).length>0&&e(Pt)})}a(X);var ft=s(X,4),ht=s(r(ft));K(ht,21,()=>Object.keys(t(m)).sort(),Z,(e,o)=>{var i=Ee(),l=r(i),d=r(l,!0);a(l);var h=s(l),b=r(h),v=r(b,!0);a(b),a(h);var S=s(h),k=r(S);a(S),a(i),C((O,w,T)=>{u(d,t(o)),y(b,"data-bs-title",`${O??""} h`),u(v,w),u(k,`${T??""}%`)},[()=>f.formatDecimalTime(Math.round(t(m)[t(o)]*100)/100),()=>Math.round(t(m)[t(o)]*100)/100,()=>Math.round(t(m)[t(o)]/Q()*1e4)/100]),_(e,i)}),a(ht),a(ft),a(ut),a(W);var gt=s(W,2),A=r(gt);A.__click=rt;var Rt=r(A);fe(Rt,{}),te(2),a(A);var _t=s(A,2);{var Ht=e=>{var o=Fe();o.__click=[$e],_(e,o)};Tt(_t,e=>{Dt(t(n))&&e(Ht)})}var N=s(_t,2);N.__click=st;var Qt=s(r(N),2);he(Qt,{}),a(N),a(gt),a(V);var Vt=s(V,2);ye(Vt,{get show(){return t(E)},set show(e){et(E,j(e))}}),C((e,o,i,l)=>{u(It,`Timesheet for ${e??""}${o??""}`),y(dt,"placeholder",t(F)),A.disabled=i,N.disabled=l},[()=>oe(t(n),"E dd MMMM yyyy"),()=>Dt(t(n))?" (Today)":"",()=>P.isFirstDayOfYear(t(n)),()=>P.isLastDayOfYear(t(n))]),_(D,it),St()}pe(["click"]);function ra(D,g){$t(g,!0);var n=Mt(),p=ot(n);se(p,()=>ie.isLoaded(),null,(c,x)=>{Oe(c,{})},c=>{ne(c,{})}),_(D,n),St()}export{ra as component,oa as universal};
