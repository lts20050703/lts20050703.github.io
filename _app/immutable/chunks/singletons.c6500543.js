var I=Object.defineProperty,y=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&_(e,n,t[n]);if(p)for(var n of p(t))U.call(t,n)&&_(e,n,t[n]);return e},g=(e,t)=>y(e,x(t));var k=(e,t,n)=>new Promise((o,l)=>{var u=a=>{try{s(n.next(a))}catch(i){l(i)}},r=a=>{try{s(n.throw(a))}catch(i){l(i)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(u,r);s((n=n.apply(e,t)).next())});import{H as d,s as L}from"./index.54149de5.js";const c=[];function b(e,t=d){let n;const o=new Set;function l(s){if(L(e,s)&&(e=s,n)){const a=!c.length;for(const i of o)i[1](),c.push(i,e);if(a){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function u(s){l(s(e))}function r(s,a=d){const i=[s,a];return o.add(i),o.size===1&&(n=t(l)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:l,update:u,subscribe:r}}var w,A;const N=(A=(w=globalThis.__sveltekit_9u62l1)==null?void 0:w.base)!=null?A:"";var R,S;const V=(S=(R=globalThis.__sveltekit_9u62l1)==null?void 0:R.assets)!=null?S:N,P="1681957416521",j="sveltekit:snapshot",z="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function D(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function G(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const E=g(h({},v),{"":v.hover});function T(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function H(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=T(e)}}function X(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch(u){}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!o||$(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:l,target:o}}function B(e){let t=null,n=null,o=null,l=null,u=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),l===null&&(l=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),u===null&&(u=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=T(s);return{preload_code:E[o!=null?o:"off"],preload_data:E[l!=null?l:"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:u==="off"?!1:u===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function m(e){const t=b(e);let n=!0;function o(){n=!0,t.update(r=>r)}function l(r){n=!1,t.set(r)}function u(r){let s;return t.subscribe(a=>{(s===void 0||n&&a!==s)&&r(s=a)})}return{notify:o,set:l,subscribe:u}}function Y(){const{set:e,subscribe:t}=b(!1);let n;function o(){return k(this,null,function*(){clearTimeout(n);const l=yield fetch(`${V}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(l.ok){const r=(yield l.json()).version!==P;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${l.status}`)})}return{subscribe:t,check:o}}function $(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function W(e){e.client}const F={url:m({}),page:m({}),navigating:b(null),updated:Y()};export{C as I,v as P,z as S,j as a,X as b,B as c,G as d,N as e,H as f,D as g,W as h,$ as i,F as s};
