var l=Object.defineProperty;var m=(a,t,e)=>t in a?l(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var s=(a,t,e)=>m(a,typeof t!="symbol"?t+"":t,e);const r=class r{static make(t){let e="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=n.length;let o=0;for(;o<t;)e+=n.charAt(Math.floor(Math.random()*h)),o+=1;return e}static makeDefault(){return r.make(r.lengthForComponents)}};s(r,"lengthForComponents",8);let c=r;export{c as I};
