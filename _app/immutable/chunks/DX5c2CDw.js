import{S as h,Q as D,R as T,T as S,g as c,U as u,V as x,z as j,W as A,X as E,J as K}from"./DxIxdwJJ.js";import{b as v,s as l}from"./asY5pKAJ.js";function y(s,P=null,L){if(typeof s!="object"||s===null||h in s)return s;const I=E(s);if(I!==D&&I!==T)return s;var i=new Map,b=K(s),w=v(0);b&&i.set("length",v(s.length));var g;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&A();var r=i.get(e);return r===void 0?(r=v(t.value),i.set(e,r)):l(r,y(t.value,g)),!0},deleteProperty(f,e){var t=i.get(e);if(t===void 0)e in f&&i.set(e,v(u));else{if(b&&typeof e=="string"){var r=i.get("length"),n=Number(e);Number.isInteger(n)&&n<r.v&&l(r,n)}l(t,u),O(w)}return!0},get(f,e,t){var d;if(e===h)return s;var r=i.get(e),n=e in f;if(r===void 0&&(!n||(d=x(f,e))!=null&&d.writable)&&(r=v(y(n?f[e]:u,g)),i.set(e,r)),r!==void 0){var a=c(r);return a===u?void 0:a}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var r=i.get(e);r&&(t.value=c(r))}else if(t===void 0){var n=i.get(e),a=n==null?void 0:n.v;if(n!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(f,e){var a;if(e===h)return!0;var t=i.get(e),r=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||j!==null&&(!r||(a=x(f,e))!=null&&a.writable)){t===void 0&&(t=v(r?y(f[e],g):u),i.set(e,t));var n=c(t);if(n===u)return!1}return r},set(f,e,t,r){var R;var n=i.get(e),a=e in f;if(b&&e==="length")for(var d=t;d<n.v;d+=1){var o=i.get(d+"");o!==void 0?l(o,u):d in f&&(o=v(u),i.set(d+"",o))}n===void 0?(!a||(R=x(f,e))!=null&&R.writable)&&(n=v(void 0),l(n,y(t,g)),i.set(e,n)):(a=n.v!==u,l(n,y(t,g)));var _=Reflect.getOwnPropertyDescriptor(f,e);if(_!=null&&_.set&&_.set.call(r,t),!a){if(b&&typeof e=="string"){var N=i.get("length"),m=Number(e);Number.isInteger(m)&&m>=N.v&&l(N,m+1)}O(w)}return!0},ownKeys(f){c(w);var e=Reflect.ownKeys(f).filter(n=>{var a=i.get(n);return a===void 0||a.v!==u});for(var[t,r]of i)r.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){S()}})}function O(s,P=1){l(s,s.v+P)}export{y as p};
