var I=Object.defineProperty,y=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&_(e,n,t[n]);if(b)for(var n of b(t))U.call(t,n)&&_(e,n,t[n]);return e},g=(e,t)=>y(e,x(t));var k=(e,t,n)=>new Promise((o,r)=>{var u=a=>{try{s(n.next(a))}catch(i){r(i)}},l=a=>{try{s(n.throw(a))}catch(i){r(i)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(u,l);s((n=n.apply(e,t)).next())});import{H as d,s as L}from"./index.45259b4e.js";const c=[];function p(e,t=d){let n;const o=new Set;function r(s){if(L(e,s)&&(e=s,n)){const a=!c.length;for(const i of o)i[1](),c.push(i,e);if(a){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function u(s){r(s(e))}function l(s,a=d){const i=[s,a];return o.add(i),o.size===1&&(n=t(r)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:l}}var w,A;const N=(A=(w=globalThis.__sveltekit_tpr2e2)==null?void 0:w.base)!=null?A:"";var R,S;const V=(S=(R=globalThis.__sveltekit_tpr2e2)==null?void 0:R.assets)!=null?S:N,P="1681645910428",j="sveltekit:snapshot",z="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function D(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function G(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const E=g(h({},v),{"":v.hover});function T(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function H(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=T(e)}}function X(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch(u){}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||$(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:r,target:o}}function B(e){let t=null,n=null,o=null,r=null,u=null,l=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),u===null&&(u=f(s,"reload")),l===null&&(l=f(s,"replacestate")),s=T(s);return{preload_code:E[o!=null?o:"off"],preload_data:E[r!=null?r:"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:u==="off"?!1:u===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function m(e){const t=p(e);let n=!0;function o(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function u(l){let s;return t.subscribe(a=>{(s===void 0||n&&a!==s)&&l(s=a)})}return{notify:o,set:r,subscribe:u}}function Y(){const{set:e,subscribe:t}=p(!1);let n;function o(){return k(this,null,function*(){clearTimeout(n);const r=yield fetch(`${V}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const l=(yield r.json()).version!==P;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${r.status}`)})}return{subscribe:t,check:o}}function $(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function W(e){e.client}const F={url:m({}),page:m({}),navigating:p(null),updated:Y()};export{C as I,v as P,z as S,j as a,X as b,B as c,G as d,N as e,H as f,D as g,W as h,$ as i,F as s};
