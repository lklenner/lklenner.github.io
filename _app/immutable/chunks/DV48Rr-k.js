import{F as t,am as o,an as p,ao as l,ap as h,aq as i,ar as w,as as F,at as C,y as f,au as _,av as k,aw as D,ax as c,ay as T,az as q,ag as y,aA as v,aB as R,aC as g,aD as A,aE as B,aF as N,a9 as O,ah as x}from"./DO-sNwcH.js";function I(a){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function d(a,e){var n={f:0,v:a,reactions:null,equals:q,rv:0,wv:0};return n}function M(a){return Y(d(a))}function z(a,e=!1){const n=d(a);return e||(n.equals=y),n}function Y(a){return t!==null&&!o&&t.f&l&&(i===null?F([a]):i.push(a)),a}function H(a,e){return t!==null&&!o&&p()&&t.f&(l|h)&&(i===null||!i.includes(a))&&w(),b(a,e)}function b(a,e){return a.equals(e)||(a.v,a.v=e,a.wv=C(),E(a,v),f!==null&&f.f&_&&!(f.f&(k|D))&&(c===null?T([a]):c.push(a))),e}function E(a,e){var n=a.reactions;if(n!==null)for(var m=n.length,r=0;r<m;r++){var s=n[r],u=s.f;u&v||(R(s,e),u&(_|g)&&(u&l?E(s,A):B(s)))}}function K(a){O===null&&I(),N(()=>{const e=x(a);if(typeof e=="function")return e})}export{M as a,d as b,b as i,z as m,K as o,H as s};
