var y=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(t,n,e)=>n in t?y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,g=(t,n)=>{for(var e in n||(n={}))O.call(n,e)&&_(t,e,n[e]);if(b)for(var e of b(n))U.call(n,e)&&_(t,e,n[e]);return t},h=(t,n)=>I(t,x(n));var k=(t,n,e)=>new Promise((o,r)=>{var c=a=>{try{s(e.next(a))}catch(l){r(l)}},i=a=>{try{s(e.throw(a))}catch(l){r(l)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(c,i);s((e=e.apply(t,n)).next())});import{n as d,s as L}from"./scheduler.8ea2a124.js";const u=[];function p(t,n=d){let e;const o=new Set;function r(s){if(L(t,s)&&(t=s,e)){const a=!u.length;for(const l of o)l[1](),u.push(l,t);if(a){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function c(s){r(s(t))}function i(s,a=d){const l=[s,a];return o.add(l),o.size===1&&(e=n(r,c)||d),s(t),()=>{o.delete(l),o.size===0&&e&&(e(),e=null)}}return{set:r,update:c,subscribe:i}}var w,A;const N=(A=(w=globalThis.__sveltekit_1tg0193)==null?void 0:w.base)!=null?A:"";var R,S;const P=(S=(R=globalThis.__sveltekit_1tg0193)==null?void 0:R.assets)!=null?S:N,V="1691955121363",j="sveltekit:snapshot",z="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function D(t){let n=t.baseURI;if(!n){const e=t.getElementsByTagName("base");n=e.length?e[0].href:t.URL}return n}function G(){return{x:pageXOffset,y:pageYOffset}}function f(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const m=h(g({},v),{"":v.hover});function T(t){var e;let n=(e=t.assignedSlot)!=null?e:t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function X(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=T(t)}}function B(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch(i){}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!e||!!o||q(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(e==null?void 0:e.origin)===location.origin&&t.hasAttribute("download");return{url:e,external:r,target:o,download:c}}function H(t){let n=null,e=null,o=null,r=null,c=null,i=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),n===null&&(n=f(s,"keepfocus")),e===null&&(e=f(s,"noscroll")),c===null&&(c=f(s,"reload")),i===null&&(i=f(s,"replacestate")),s=T(s);function a(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:m[o!=null?o:"off"],preload_data:m[r!=null?r:"off"],keep_focus:a(n),noscroll:a(e),reload:a(c),replace_state:a(i)}}function E(t){const n=p(t);let e=!0;function o(){e=!0,n.update(i=>i)}function r(i){e=!1,n.set(i)}function c(i){let s;return n.subscribe(a=>{(s===void 0||e&&a!==s)&&i(s=a)})}return{notify:o,set:r,subscribe:c}}function Y(){const{set:t,subscribe:n}=p(!1);let e;function o(){return k(this,null,function*(){clearTimeout(e);try{const r=yield fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(yield r.json()).version!==V;return i&&(t(!0),clearTimeout(e)),i}catch(r){return!1}})}return{subscribe:n,check:o}}function q(t,n){return t.origin!==location.origin||!t.pathname.startsWith(n)}function W(t){t.client}const F={url:E({}),page:E({}),navigating:p(null),updated:Y()};export{C as I,v as P,z as S,j as a,B as b,H as c,F as d,N as e,X as f,D as g,W as h,q as i,G as s};
