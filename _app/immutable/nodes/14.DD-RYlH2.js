import"../chunks/Bg9kRutz.js";import{p as Q,c as _,r as y,t as G,a as X,i as dr,s as N,k as h,$ as fr,f as Y,A as q}from"../chunks/D6YVLWc7.js";import{t as R,a as A,c as ge}from"../chunks/CDD5XS2z.js";import{c as Te,y as ce,s as ue,j as We,b as K,g as B,i as U,z as lr,D as Z,l as qe,A as ur,f as vr}from"../chunks/NRRmGcJT.js";import{s as L}from"../chunks/p4ygoAWT.js";import{i as z}from"../chunks/UPzZwpuN.js";import{g as hr,k as mr}from"../chunks/CXEPKorh.js";import{s as V}from"../chunks/Br45A0WC.js";import{d as xe}from"../chunks/BI9NCyiX.js";import{o as De,a as Ke,s as Ze,c as gr}from"../chunks/CcHHxoBb.js";import{p as Fe}from"../chunks/aPyRa76Y.js";import{N as pr}from"../chunks/DO_J4-0g.js";import{p as pe}from"../chunks/DEahiPon.js";import{s as ye}from"../chunks/CY6KYGQT.js";import{I as ie,a as yr}from"../chunks/BPWqFRe1.js";import{D as br}from"../chunks/BZpHHhxt.js";import{_ as Je}from"../chunks/BdMqpO4Y.js";import{i as Qe}from"../chunks/u8O5nmxo.js";import{i as Xe}from"../chunks/CWDzKwbA.js";import{g as re}from"../chunks/BfzahOUo.js";import{N as Pe,a as wr}from"../chunks/De9GgzYy.js";import{A as xr,a as kr}from"../chunks/B7pk6xwO.js";import{R as _r}from"../chunks/Cs_ouzOI.js";const Sr=!1,la=Object.freeze(Object.defineProperty({__proto__:null,prerender:Sr},Symbol.toStringTag,{value:"Module"}));var Cr=R("<span> </span>");function Ar(e,r){Q(r,!0);const t=Je(Te.get(r.tagValue).bgColor);let a=Te.get(r.tagValue).bgColor;function n(){return a.toUpperCase()==="#FFFFFF"?"outline":""}var s=Cr();V(s,"style",`color: ${t??""}; background-color: ${a??""};`);var i=_(s,!0);y(s),G(c=>{ye(s,1,`badge rounded-pill mx-1 align-items-center ${c??""}`,"svelte-1hey1wl"),L(i,r.tagValue)},[n]),A(e,s),X()}var Er=R('<div class="mx-3"></div>'),Or=R('<div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne"><div class="d-flex justify-content-between w-100"><div> </div> <!></div></button></h2> <div class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><!></div></div></div></div>');function Ae(e,r){Q(r,!0);const t=ie.make(ie.lengthForComponents),a=ie.make(ie.lengthForComponents);let n=ce.getDay(r.date);function s(m){if(Qe(m))return"dsToday";switch(n.dayType){case K.Holiday:return"dsHoliday"}if(Xe(m))return"dsWeekend";switch(n.dayType){case K.Vacation:return"dsVacation";case K.Sick:return"dsSick";case K.SickNoAttest:return"dsSickNoAttest"}return""}De(async()=>{await dr(),window.location.hash==`#${r.date.getDate()}`&&r.isAdditional==!1&&(console.log("I am into view",t),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"}))});var i=Or();V(i,"id",t);var c=_(i),o=_(c);V(o,"id",`headingOne-${t??""}`);var v=_(o);V(v,"data-bs-target",`#${a??""}`);var f=_(v),g=_(f),p=_(g);y(g);var S=N(g,2);{var C=m=>{var b=Er();B(b,21,()=>n.tags,U,(E,O)=>{Ar(E,{get tagValue(){return h(O)}})}),y(b),A(m,b)};z(S,m=>{ue.rune.style.showTagsOnDays&&m(C)})}y(f),y(v),y(o);var l=N(o,2);V(l,"id",a),V(l,"aria-labelledby",`headingOne-${t??""}`);var d=_(l),u=_(d);br(u,{get date(){return r.date}}),y(d),y(l),y(c),y(i),G((m,b,E)=>{ye(i,1,`accordion mb-2 ${m??""}`,"svelte-140uf3"),L(p,`${b??""}. ${E??""} ${(n.additionalName?" - ":"")??""} ${n.additionalName??""}`)},[()=>s(r.date),()=>We(r.date,"d"),()=>We(r.date,"EEEE")]),A(e,i),X()}function Ge(e,r,t){h(r)===1&&h(t)?re("/app/year/week/53"):re(`/app/year/week/${h(r)}`)}var Tr=R('<h2 class="mb-2 mt-3 clickable svelte-s66s5j"> </h2>'),Rr=R('<h2 class="mb-2 mt-3 clickable svelte-s66s5j"> </h2>'),Nr=R('<!> <p class="mt-3 d-flex justify-content-center"> </p>',1),Dr=R('<p class="mt-3 d-flex justify-content-center"> </p> <!>',1),Mr=R("<!> <!> <!> <!>",1);function $r(e,r){Q(r,!0);const t=q(()=>qe(r.week[0],{weekStartsOn:1,firstWeekContainsDate:4}));hr(new Date(ce.rune.yearLiteral,0)),lr(new Date(ce.rune.yearLiteral,0));const a=q(()=>r.month==0),n=q(()=>r.month==11);let s=Ke(pe({prefix:!1,days:[]}));r.week.length<7&&fr(()=>{Ze(s,pe(Z.getRestDays(r.week)))});var i=Mr(),c=Y(i);{var o=l=>{var d=Tr();d.__click=[Ge,t,n];var u=_(d);y(d),G(()=>L(u,`Week ${h(t)??""} (53)`)),A(l,d)},v=l=>{var d=Rr();d.__click=[Ge,t,n];var u=_(d);y(d),G(()=>L(u,`Week ${h(t)??""}`)),A(l,d)};z(c,l=>{h(t)===1&&h(n)?l(o):l(v,!1)})}var f=N(c,2);{var g=l=>{var d=Nr(),u=Y(d);B(u,17,()=>h(s).days,U,(E,O)=>{Ae(E,{get date(){return h(O)},isAdditional:!0})});var m=N(u,2),b=_(m);y(m),G(()=>L(b,`Begin of ${Z.MonthNames[r.month]??""}`)),A(l,d)};z(f,l=>{h(s).days.length>0&&h(s).prefix&&!h(a)&&l(g)})}var p=N(f,2);B(p,17,()=>r.week,U,(l,d)=>{Ae(l,{get date(){return h(d)},isAdditional:!1})});var S=N(p,2);{var C=l=>{var d=Dr(),u=Y(d),m=_(u);y(u);var b=N(u,2);B(b,17,()=>h(s).days,U,(E,O)=>{Ae(E,{get date(){return h(O)},isAdditional:!0})}),G(()=>L(m,`End of ${Z.MonthNames[r.month]??""}`)),A(l,d)};z(S,l=>{h(s).days.length>0&&!h(s).prefix&&!h(n)&&l(C)})}A(e,i),X()}xe(["click"]);var Ir=R('<div class="text-center weekgrid mb-5 svelte-6boz77"><div class="empty d-flex align-items-end svelte-6boz77">CW</div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Monday</h6></div></div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Tuesday</h6></div></div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Wensday</h6></div></div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Thursday</h6></div></div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Friday</h6></div></div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Saturday</h6></div></div> <div class="card"><div class="card-body"><h6 class="card-title svelte-6boz77">Sunday</h6></div></div></div>');function Wr(e){var r=Ir();A(e,r)}function Fr(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Pr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Gr=function(){function e(t){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Pr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Fr(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},e}(),$="-ms-",be="-moz-",x="-webkit-",er="comm",Me="rule",$e="decl",Lr="@import",rr="@keyframes",jr="@layer",Vr=Math.abs,ke=String.fromCharCode,zr=Object.assign;function Hr(e,r){return D(e,0)^45?(((r<<2^D(e,0))<<2^D(e,1))<<2^D(e,2))<<2^D(e,3):0}function tr(e){return e.trim()}function Yr(e,r){return(e=r.exec(e))?e[0]:e}function k(e,r,t){return e.replace(r,t)}function Re(e,r){return e.indexOf(r)}function D(e,r){return e.charCodeAt(r)|0}function oe(e,r,t){return e.slice(r,t)}function j(e){return e.length}function Ie(e){return e.length}function le(e,r){return r.push(e),e}function Br(e,r){return e.map(r).join("")}var _e=1,te=1,ar=0,W=0,T=0,ae="";function Se(e,r,t,a,n,s,i){return{value:e,root:r,parent:t,type:a,props:n,children:s,line:_e,column:te,length:i,return:""}}function se(e,r){return zr(Se("",null,null,"",null,null,0),e,{length:-e.length},r)}function Ur(){return T}function qr(){return T=W>0?D(ae,--W):0,te--,T===10&&(te=1,_e--),T}function F(){return T=W<ar?D(ae,W++):0,te++,T===10&&(te=1,_e++),T}function H(){return D(ae,W)}function ve(){return W}function fe(e,r){return oe(ae,e,r)}function de(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nr(e){return _e=te=1,ar=j(ae=e),W=0,[]}function sr(e){return ae="",e}function he(e){return tr(fe(W-1,Ne(e===91?e+2:e===40?e+1:e)))}function Kr(e){for(;(T=H())&&T<33;)F();return de(e)>2||de(T)>3?"":" "}function Zr(e,r){for(;--r&&F()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return fe(e,ve()+(r<6&&H()==32&&F()==32))}function Ne(e){for(;F();)switch(T){case e:return W;case 34:case 39:e!==34&&e!==39&&Ne(T);break;case 40:e===41&&Ne(e);break;case 92:F();break}return W}function Jr(e,r){for(;F()&&e+T!==57;)if(e+T===84&&H()===47)break;return"/*"+fe(r,W-1)+"*"+ke(e===47?e:F())}function Qr(e){for(;!de(H());)F();return fe(e,W)}function Xr(e){return sr(me("",null,null,null,[""],e=nr(e),0,[0],e))}function me(e,r,t,a,n,s,i,c,o){for(var v=0,f=0,g=i,p=0,S=0,C=0,l=1,d=1,u=1,m=0,b="",E=n,O=s,I=a,w=b;d;)switch(C=m,m=F()){case 40:if(C!=108&&D(w,g-1)==58){Re(w+=k(he(m),"&","&\f"),"&\f")!=-1&&(u=-1);break}case 34:case 39:case 91:w+=he(m);break;case 9:case 10:case 13:case 32:w+=Kr(C);break;case 92:w+=Zr(ve()-1,7);continue;case 47:switch(H()){case 42:case 47:le(et(Jr(F(),ve()),r,t),o);break;default:w+="/"}break;case 123*l:c[v++]=j(w)*u;case 125*l:case 59:case 0:switch(m){case 0:case 125:d=0;case 59+f:u==-1&&(w=k(w,/\f/g,"")),S>0&&j(w)-g&&le(S>32?je(w+";",a,t,g-1):je(k(w," ","")+";",a,t,g-2),o);break;case 59:w+=";";default:if(le(I=Le(w,r,t,v,f,n,c,b,E=[],O=[],g),s),m===123)if(f===0)me(w,r,I,I,E,s,g,c,O);else switch(p===99&&D(w,3)===110?100:p){case 100:case 108:case 109:case 115:me(e,I,I,a&&le(Le(e,I,I,0,0,n,c,b,n,E=[],g),O),n,O,g,c,a?E:O);break;default:me(w,I,I,I,[""],O,0,c,O)}}v=f=S=0,l=u=1,b=w="",g=i;break;case 58:g=1+j(w),S=C;default:if(l<1){if(m==123)--l;else if(m==125&&l++==0&&qr()==125)continue}switch(w+=ke(m),m*l){case 38:u=f>0?1:(w+="\f",-1);break;case 44:c[v++]=(j(w)-1)*u,u=1;break;case 64:H()===45&&(w+=he(F())),p=H(),f=g=j(b=w+=Qr(ve())),m++;break;case 45:C===45&&j(w)==2&&(l=0)}}return s}function Le(e,r,t,a,n,s,i,c,o,v,f){for(var g=n-1,p=n===0?s:[""],S=Ie(p),C=0,l=0,d=0;C<a;++C)for(var u=0,m=oe(e,g+1,g=Vr(l=i[C])),b=e;u<S;++u)(b=tr(l>0?p[u]+" "+m:k(m,/&\f/g,p[u])))&&(o[d++]=b);return Se(e,r,t,n===0?Me:c,o,v,f)}function et(e,r,t){return Se(e,r,t,er,ke(Ur()),oe(e,2,-2),0)}function je(e,r,t,a){return Se(e,r,t,$e,oe(e,0,a),oe(e,a+1,-1),a)}function ee(e,r){for(var t="",a=Ie(e),n=0;n<a;n++)t+=r(e[n],n,e,r)||"";return t}function rt(e,r,t,a){switch(e.type){case jr:if(e.children.length)break;case Lr:case $e:return e.return=e.return||e.value;case er:return"";case rr:return e.return=e.value+"{"+ee(e.children,a)+"}";case Me:e.value=e.props.join(",")}return j(t=ee(e.children,a))?e.return=e.value+"{"+t+"}":""}function tt(e){var r=Ie(e);return function(t,a,n,s){for(var i="",c=0;c<r;c++)i+=e[c](t,a,n,s)||"";return i}}function at(e){return function(r){r.root||(r=r.return)&&e(r)}}function nt(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var st=function(r,t,a){for(var n=0,s=0;n=s,s=H(),n===38&&s===12&&(t[a]=1),!de(s);)F();return fe(r,W)},it=function(r,t){var a=-1,n=44;do switch(de(n)){case 0:n===38&&H()===12&&(t[a]=1),r[a]+=st(W-1,t,a);break;case 2:r[a]+=he(n);break;case 4:if(n===44){r[++a]=H()===58?"&\f":"",t[a]=r[a].length;break}default:r[a]+=ke(n)}while(n=F());return r},ct=function(r,t){return sr(it(nr(r),t))},Ve=new WeakMap,ot=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!Ve.get(a))&&!n){Ve.set(r,!0);for(var s=[],i=ct(t,s),c=a.props,o=0,v=0;o<i.length;o++)for(var f=0;f<c.length;f++,v++)r.props[v]=s[o]?i[o].replace(/&\f/g,c[f]):c[f]+" "+i[o]}}},dt=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function ir(e,r){switch(Hr(e,r)){case 5103:return x+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+be+e+$+e+e;case 6828:case 4268:return x+e+$+e+e;case 6165:return x+e+$+"flex-"+e+e;case 5187:return x+e+k(e,/(\w+).+(:[^]+)/,x+"box-$1$2"+$+"flex-$1$2")+e;case 5443:return x+e+$+"flex-item-"+k(e,/flex-|-self/,"")+e;case 4675:return x+e+$+"flex-line-pack"+k(e,/align-content|flex-|-self/,"")+e;case 5548:return x+e+$+k(e,"shrink","negative")+e;case 5292:return x+e+$+k(e,"basis","preferred-size")+e;case 6060:return x+"box-"+k(e,"-grow","")+x+e+$+k(e,"grow","positive")+e;case 4554:return x+k(e,/([^-])(transform)/g,"$1"+x+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+$+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+e+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,x+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-r>6)switch(D(e,r+1)){case 109:if(D(e,r+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+be+(D(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Re(e,"stretch")?ir(k(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(D(e,r+1)!==115)break;case 6444:switch(D(e,j(e)-3-(~Re(e,"!important")&&10))){case 107:return k(e,":",":"+x)+e;case 101:return k(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+x+(D(e,14)===45?"inline-":"")+"box$3$1"+x+"$2$3$1"+$+"$2box$3")+e}break;case 5936:switch(D(e,r+11)){case 114:return x+e+$+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return x+e+$+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return x+e+$+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return x+e+$+e+e}return e}var ft=function(r,t,a,n){if(r.length>-1&&!r.return)switch(r.type){case $e:r.return=ir(r.value,r.length);break;case rr:return ee([se(r,{value:k(r.value,"@","@"+x)})],n);case Me:if(r.length)return Br(r.props,function(s){switch(Yr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ee([se(r,{props:[k(s,/:(read-\w+)/,":"+be+"$1")]})],n);case"::placeholder":return ee([se(r,{props:[k(s,/:(plac\w+)/,":"+x+"input-$1")]}),se(r,{props:[k(s,/:(plac\w+)/,":"+be+"$1")]}),se(r,{props:[k(s,/:(plac\w+)/,$+"input-$1")]})],n)}return""})}},lt=[ft],ut=function(r){var t=r.key;if(t==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(l){var d=l.getAttribute("data-emotion");d.indexOf(" ")!==-1&&(document.head.appendChild(l),l.setAttribute("data-s",""))})}var n=r.stylisPlugins||lt,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(l){for(var d=l.getAttribute("data-emotion").split(" "),u=1;u<d.length;u++)s[d[u]]=!0;c.push(l)});var o,v=[ot,dt];{var f,g=[rt,at(function(l){f.insert(l)})],p=tt(v.concat(n,g)),S=function(d){return ee(Xr(d),p)};o=function(d,u,m,b){f=m,S(d?d+"{"+u.styles+"}":u.styles),b&&(C.inserted[u.name]=!0)}}var C={key:t,sheet:new Gr({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:o};return C.sheet.hydrate(c),C};function vt(e){for(var r=0,t,a=0,n=e.length;n>=4;++a,n-=4)t=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(e.charCodeAt(a+2)&255)<<16;case 2:r^=(e.charCodeAt(a+1)&255)<<8;case 1:r^=e.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var ht={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt=/[A-Z]|^ms/g,gt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,cr=function(r){return r.charCodeAt(1)===45},ze=function(r){return r!=null&&typeof r!="boolean"},Ee=nt(function(e){return cr(e)?e:e.replace(mt,"-$&").toLowerCase()}),He=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(gt,function(a,n,s){return J={name:n,styles:s,next:J},n})}return ht[r]!==1&&!cr(r)&&typeof t=="number"&&t!==0?t+"px":t};function we(e,r,t){if(t==null)return"";var a=t;if(a.__emotion_styles!==void 0)return a;switch(typeof t){case"boolean":return"";case"object":{var n=t;if(n.anim===1)return J={name:n.name,styles:n.styles,next:J},n.name;var s=t;if(s.styles!==void 0){var i=s.next;if(i!==void 0)for(;i!==void 0;)J={name:i.name,styles:i.styles,next:J},i=i.next;var c=s.styles+";";return c}return pt(e,r,t)}}var o=t;if(r==null)return o;var v=r[o];return v!==void 0?v:o}function pt(e,r,t){var a="";if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=we(e,r,t[n])+";";else for(var s in t){var i=t[s];if(typeof i!="object"){var c=i;r!=null&&r[c]!==void 0?a+=s+"{"+r[c]+"}":ze(c)&&(a+=Ee(s)+":"+He(s,c)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var o=0;o<i.length;o++)ze(i[o])&&(a+=Ee(s)+":"+He(s,i[o])+";");else{var v=we(e,r,i);switch(s){case"animation":case"animationName":{a+=Ee(s)+":"+v+";";break}default:a+=s+"{"+v+"}"}}}return a}var Ye=/label:\s*([^\s;{]+)\s*(;|$)/g,J;function Oe(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,n="";J=void 0;var s=e[0];if(s==null||s.raw===void 0)a=!1,n+=we(t,r,s);else{var i=s;n+=i[0]}for(var c=1;c<e.length;c++)if(n+=we(t,r,e[c]),a){var o=s;n+=o[c]}Ye.lastIndex=0;for(var v="",f;(f=Ye.exec(n))!==null;)v+="-"+f[1];var g=vt(n)+v;return{name:g,styles:n,next:J}}function or(e,r,t){var a="";return t.split(" ").forEach(function(n){e[n]!==void 0?r.push(e[n]+";"):n&&(a+=n+" ")}),a}var yt=function(r,t,a){var n=r.key+"-"+t.name;r.registered[n]===void 0&&(r.registered[n]=t.styles)},bt=function(r,t,a){yt(r,t);var n=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+n:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function Be(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function Ue(e,r,t){var a=[],n=or(e,a,t);return a.length<2?t:n+r(a)}var wt=function(r){var t=ut(r);t.sheet.speedy=function(c){this.isSpeedy=c},t.compat=!0;var a=function(){for(var o=arguments.length,v=new Array(o),f=0;f<o;f++)v[f]=arguments[f];var g=Oe(v,t.registered,void 0);return bt(t,g),t.key+"-"+g.name},n=function(){for(var o=arguments.length,v=new Array(o),f=0;f<o;f++)v[f]=arguments[f];var g=Oe(v,t.registered),p="animation-"+g.name;return Be(t,{name:g.name,styles:"@keyframes "+p+"{"+g.styles+"}"}),p},s=function(){for(var o=arguments.length,v=new Array(o),f=0;f<o;f++)v[f]=arguments[f];var g=Oe(v,t.registered);Be(t,g)},i=function(){for(var o=arguments.length,v=new Array(o),f=0;f<o;f++)v[f]=arguments[f];return Ue(t.registered,a,xt(v))};return{css:a,cx:i,injectGlobal:s,keyframes:n,hydrate:function(o){o.forEach(function(v){t.inserted[v]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:or.bind(null,t.registered),merge:Ue.bind(null,t.registered,a)}},xt=function e(r){for(var t="",a=0;a<r.length;a++){var n=r[a];if(n!=null){var s=void 0;switch(typeof n){case"boolean":break;case"object":{if(Array.isArray(n))s=e(n);else{s="";for(var i in n)n[i]&&i&&(s&&(s+=" "),s+=i)}break}default:s=n}s&&(t&&(t+=" "),t+=s)}}return t},kt=wt({key:"css"}),_t=kt.css;function St(e,r){re(`/app/year/${r.date.getMonth()}/${r.date.getDate()}`)}var Ct=R('<span data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-html="true" data-bs-placement="right"> </span>'),At=R('<div><div class="card-header"><h5 class="nomargin svelte-n5g1p4"> </h5></div> <div class="card-body overflow svelte-n5g1p4"><span class="nomargin svelte-n5g1p4"> </span> <!></div></div>');function Et(e,r){Q(r,!0),ie.makeDefault();const t=ce.getDay(r.date);function a(d){if(Qe(d))return"dsToday";switch(t.dayType){case K.Holiday:return"dsHoliday"}if(Xe(d))return"dsWeekend";switch(t.dayType){case K.Vacation:return"dsVacation";case K.Sick:return"dsSick";case K.SickNoAttest:return"dsSickNoAttest"}return""}function n(d){return d.toUpperCase()==="#FFFFFF"?"border: 1px solid #6c757d;":""}function s(d){const m=Te.get(d).bgColor,b=Je(m);return _t`
            color: ${b};
            background-color: ${m};
            margin-right: 2px;
            ${n(m)}
        `}function i(){let d="";for(const u of t.tags)d+=`<span class="badge rounded-pill ${s(u)}">${u}</span>`;return d}var c=At();c.__click=[St,r];var o=_(c),v=_(o),f=_(v,!0);y(v),y(o);var g=N(o,2),p=_(g),S=_(p,!0);y(p);var C=N(p,2);{var l=d=>{var u=Ct(),m=_(u,!0);y(u),G((b,E)=>{ye(u,1,`badge rounded-pill ${b??""}`,"svelte-n5g1p4"),V(u,"data-bs-content",`
                <div>
                    ${E??""}
                </div>`),L(m,t.tags.length)},[()=>s(t.tags[0]),i]),A(d,u)};z(C,d=>{t.tags.length>0&&d(l)})}y(g),y(c),G((d,u)=>{ye(c,1,`card shadow-sm spaced clickable ${d??""} mb-1`,"svelte-n5g1p4"),L(f,u),L(S,t.additionalName)},[()=>a(r.date),()=>ur(r.date)]),A(e,c),X()}xe(["click"]);var Ot=(e,r)=>re(`/app/year/week/${r}`),Tt=R('<div class="empty svelte-t4nt6v"></div>'),Rt=R('<div class="empty svelte-t4nt6v"></div>'),Nt=R('<div class="text-center week-row svelte-t4nt6v"><div class="d-flex align-items-center"><span class="align-middle cw clickable svelte-t4nt6v"></span></div> <!> <!> <!></div>');function Dt(e,r){Q(r,!0);const t=qe(r.week[0],{weekStartsOn:1,firstWeekContainsDate:4});let a=Ke(pe({prefix:!1,days:[]}));r.week.length<7&&Ze(a,pe(Z.getRestDays(r.week)));var n=Nt(),s=_(n),i=_(s);i.__click=[Ot,t],i.textContent=t,y(s);var c=N(s,2);{var o=p=>{var S=ge(),C=Y(S);B(C,17,()=>Array(h(a).days.length).fill(0),U,(l,d)=>{var u=Tt();A(l,u)}),A(p,S)};z(c,p=>{h(a).days.length>0&&h(a).prefix&&p(o)})}var v=N(c,2);B(v,17,()=>r.week,U,(p,S)=>{Et(p,{get date(){return h(S)}})});var f=N(v,2);{var g=p=>{var S=ge(),C=Y(S);B(C,17,()=>Array(h(a).days.length).fill(0),U,(l,d)=>{var u=Rt();A(l,u)}),A(p,S)};z(f,p=>{h(a).days.length>0&&!h(a).prefix&&p(g)})}y(n),A(e,n),X()}xe(["click"]);class Mt{static enable(){return[...document.querySelectorAll('[data-bs-toggle="popover"]')].map(a=>new bootstrap.Popover(a))}}var $t=R('<!> <div class="outer-container svelte-1sdg2zi"><div class="row-grid svelte-1sdg2zi"></div></div>',1);function It(e,r){Q(r,!0),De(()=>{Mt.enable()});var t=$t(),a=Y(t);Wr(a);var n=N(a,2),s=_(n);B(s,21,()=>r.weeks,U,(i,c)=>{Dt(i,{get week(){return h(c)}})}),y(s),y(n),G(()=>V(s,"style",`grid-template-rows: repeat(${r.weeks.length??""}, 1fr)`)),A(e,t),X()}var Wt=R('<div class="d-flex mt-3 mb-3"><div class="d-flex m-4 align-items-center"><button class="btn btn-outline-secondary py-4 d-flex align-items-center"><!></button></div> <div class="flex-fill"><!></div> <div class="d-flex m-4 align-items-center"><button class="btn btn-outline-secondary py-4 d-flex align-items-center"><!></button></div></div>'),Ft=R('<p class="mt-3 d-flex p-2 justify-content-center clickable svelte-s66s5j"> </p>'),Pt=R('<p class="mt-3 d-flex justify-content-center clickable svelte-s66s5j"> </p>'),Gt=R('<div class="container mt-3 mb-3"><!> <!> <!></div>'),Lt=R("<!> <!>",1);function jt(e,r){Q(r,!0);const t=q(()=>Number(Fe.params.month)),a=q(()=>h(t)==0),n=q(()=>h(t)==11),s=q(()=>Z.getWeeks(new Date(ce.rune.yearLiteral,h(t))));function i(){re(`/app/year/${h(t)-1}`)}function c(){re(`/app/year/${h(t)+1}`)}function o(S){S.key=="ArrowLeft"&&!h(a)?i():S.key=="ArrowRight"&&!h(n)&&c()}De(()=>{ue.rune.style.useMonthGridView&&window.addEventListener("keydown",o)}),gr(()=>{ue.rune.style.useMonthGridView&&window.removeEventListener("keydown",o)});var v=Lt(),f=Y(v);const g=q(()=>[Pe.HomeItem(),Pe.Item("Months",wr.goUp)]);pr(f,{get name(){return Z.MonthNames[h(t)]},get navItems(){return h(g)}});var p=N(f,2);mr(p,()=>Fe.params.month,S=>{var C=ge(),l=Y(C);{var d=m=>{var b=Wt(),E=_(b),O=_(E);O.__click=i;var I=_(O);xr(I,{}),y(O),y(E);var w=N(E,2),Ce=_(w);It(Ce,{get weeks(){return h(s)}}),y(w);var P=N(w,2),M=_(P);M.__click=c;var ne=_(M);kr(ne,{}),y(M),y(P),y(b),G(()=>{V(O,"style",`visibility: ${(h(a)?"hidden":"visble")??""}`),V(M,"style",`visibility: ${(h(n)?"hidden":"visble")??""}`)}),A(m,b)},u=m=>{var b=Gt(),E=_(b);{var O=P=>{var M=Ft();M.__click=i;var ne=_(M);y(M),G(()=>L(ne,`Go to ${Z.MonthNames[h(t)-1]??""}`)),A(P,M)};z(E,P=>{h(a)||P(O)})}var I=N(E,2);B(I,17,()=>h(s),U,(P,M)=>{$r(P,{get month(){return h(t)},get week(){return h(M)}})});var w=N(I,2);{var Ce=P=>{var M=Pt();M.__click=c;var ne=_(M);y(M),G(()=>L(ne,`Go to ${Z.MonthNames[h(t)+1]??""}`)),A(P,M)};z(w,P=>{h(n)||P(Ce)})}y(b),A(m,b)};z(l,m=>{ue.rune.style.useMonthGridView?m(d):m(u,!1)})}A(S,C)}),A(e,v),X()}xe(["click"]);function ua(e,r){Q(r,!0);var t=ge(),a=Y(t);vr(a,()=>yr.isLoaded(),null,(n,s)=>{jt(n,{})},(n,s)=>{_r(n,{})}),A(e,t),X()}export{ua as component,la as universal};
