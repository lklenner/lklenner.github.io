import{V as f,W as _,X as b,x as y,Y as x,Z as S,_ as W,z as A,h as B}from"./B_fWjAJn.js";import{b as M}from"./CGZ7VXBK.js";function w(r){var t=b,a=y;f(null),_(null);try{return r()}finally{f(t),_(a)}}function P(r,t,a,n=a){r.addEventListener(t,()=>w(a));const i=r.__on_r;i?r.__on_r=()=>{i(),n(!0)}:r.__on_r=()=>n(!0),M()}const O=new Set,T=new Set;function V(r){if(!B)return;r.onload&&r.removeAttribute("onload"),r.onerror&&r.removeAttribute("onerror");const t=r.__e;t!==void 0&&(r.__e=void 0,queueMicrotask(()=>{r.isConnected&&r.dispatchEvent(t)}))}function z(r,t,a,n={}){function i(e){if(n.capture||C.call(t,e),!e.cancelBubble)return w(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?S(()=>{t.addEventListener(r,i,n)}):t.addEventListener(r,i,n),i}function X(r,t,a,n,i){var e={capture:n,passive:i},o=z(r,t,a,e);(t===document.body||t===window||t===document)&&x(()=>{t.removeEventListener(r,o,e)})}function Y(r){for(var t=0;t<r.length;t++)O.add(r[t]);for(var a of T)a(r)}function C(r){var g;var t=this,a=t.ownerDocument,n=r.type,i=((g=r.composedPath)==null?void 0:g.call(r))||[],e=i[0]||r.target,o=0,d=r.__root;if(d){var l=i.indexOf(d);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var p=i.indexOf(t);if(p===-1)return;l<=p&&(o=l)}if(e=i[o]||r.target,e!==t){W(r,"currentTarget",{configurable:!0,get(){return e||a}});var E=b,k=y;f(null),_(null);try{for(var u,h=[];e!==null;){var v=e.assignedSlot||e.parentNode||e.host||null;try{var s=e["__"+n];if(s!==void 0&&(!e.disabled||r.target===e))if(A(s)){var[L,...q]=s;L.apply(e,[r,...q])}else s.call(e,r)}catch(c){u?h.push(c):u=c}if(r.cancelBubble||v===t||v===null)break;e=v}if(u){for(let c of h)queueMicrotask(()=>{throw c});throw u}}finally{r.__root=t,delete r.currentTarget,f(E),_(k)}}}export{O as a,V as b,Y as d,X as e,C as h,P as l,T as r};
