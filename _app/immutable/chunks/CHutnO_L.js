const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../assets/nano.BWwpMGpr.css","./BXrFpaN7.js","./DYRd5Js_.js","./DxIxdwJJ.js","./asY5pKAJ.js","./Bg9kRutz.js","./CW3apKDm.js","./DX5c2CDw.js","./D4epzopT.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./C1FmrZbK.js";import"./Bg9kRutz.js";import{p,a as d}from"./DxIxdwJJ.js";import{t as m,a as g}from"./ZBGWEsqd.js";import{p as c}from"./CNQ8E8sm.js";import{o as _}from"./asY5pKAJ.js";var f=m('<div class="color-picker-container svelte-16oowqg"><div class="color-picker"></div></div>');function F(l,e){p(e,!0);let o=c(e,"defaultColor",3,"#FFFFFF"),s=c(e,"reset",15);_(async()=>{await n(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);let i=(await n(async()=>{const{default:t}=await import("./BXrFpaN7.js").then(a=>a.p);return{default:t}},__vite__mapDeps([1,2,3,4,5,6,7,8]),import.meta.url)).default;console.log(i);const r=i.create({el:".color-picker",theme:"nano",default:o(),defaultRepresentation:"HEX",swatches:["rgba(244, 67, 54, 1)","rgba(233, 30, 99, 1)","rgba(156, 39, 176, 1)","rgba(103, 58, 183, 1)","rgba(63, 81, 181, 1)","rgba(33, 150, 243, 1)","rgba(3, 169, 244, 1)","rgba(0, 188, 212, 1)","rgba(0, 150, 136, 1)","rgba(76, 175, 80, 1)","rgba(139, 195, 74, 1)","rgba(205, 220, 57, 1)","rgba(255, 235, 59, 1)","rgba(255, 193, 7, 1)"],components:{preview:!0,opacity:!1,hue:!0,interaction:{hex:!0,rgba:!0,input:!0,cancel:!0,save:!0}}});r.on("save",(t,a)=>{e.colorSaved(t.toHEXA().toString()),r.hide()}),r.on("cancel",(t,a)=>{r.hide()}),s(function(){r.setColor(o())})});var u=f();g(l,u),d()}export{F as C};
