import{B as m,C as I,H as O,D as S,F as p,G as c,I as R,J as H,g as _,K as L,M as V,N as b,O as C,P as M,Q as P,R as Y,d as $,h as E,p as j,T as k,x as B,a as F}from"./B_fWjAJn.js";import{a as G,r as N,h}from"./dYPrhcUL.js";import{r as J,d as K}from"./CGZ7VXBK.js";const Q=["touchstart","touchmove"];function W(t){return Q.includes(t)}function Z(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function q(t,e){return A(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const r=e.target,u=E,l=_;try{for(var a=I(r);a&&(a.nodeType!==8||a.data!==O);)a=S(a);if(!a)throw p;c(!0),R(a),H();const i=A(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==L)throw V(),p;return c(!1),i}catch(i){if(i===p)return e.recover===!1&&b(),m(),C(r),c(!1),q(t,e);throw i}finally{c(u),R(l),J()}}const d=new Map;function A(t,{target:e,anchor:r,props:u={},events:l,context:a,intro:i=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=W(n);e.addEventListener(n,h,{passive:f});var w=d.get(n);w===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,w+1)}}};y(M(G)),N.add(y);var g=void 0,D=P(()=>{var o=r??e.appendChild(Y());return $(()=>{if(a){j({});var s=k;s.c=a}l&&(u.$$events=l),E&&K(o,null),g=t(o,u)||{},E&&(B.nodes_end=_),a&&F()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}N.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return T.set(g,D),g}let T=new WeakMap;function ee(t,e){const r=T.get(t);return r?(T.delete(t),r(e)):Promise.resolve()}export{x as h,q as m,Z as s,ee as u};
