var y=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&_(e,t,n[t]);if(b)for(var t of b(n))U.call(n,t)&&_(e,t,n[t]);return e},g=(e,n)=>I(e,x(n));var k=(e,n,t)=>new Promise((o,r)=>{var c=a=>{try{s(t.next(a))}catch(l){r(l)}},i=a=>{try{s(t.throw(a))}catch(l){r(l)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(c,i);s((t=t.apply(e,n)).next())});import{n as d,s as L}from"./scheduler.e9b79cf6.js";const u=[];function p(e,n=d){let t;const o=new Set;function r(s){if(L(e,s)&&(e=s,t)){const a=!u.length;for(const l of o)l[1](),u.push(l,e);if(a){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function c(s){r(s(e))}function i(s,a=d){const l=[s,a];return o.add(l),o.size===1&&(t=n(r,c)||d),s(e),()=>{o.delete(l),o.size===0&&t&&(t(),t=null)}}return{set:r,update:c,subscribe:i}}var E,A;const N=(A=(E=globalThis.__sveltekit_1cvkuwm)==null?void 0:E.base)!=null?A:"";var R,S;const P=(S=(R=globalThis.__sveltekit_1cvkuwm)==null?void 0:R.assets)!=null?S:N,V="1694773961602",j="sveltekit:snapshot",z="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function D(e){let n=e.baseURI;if(!n){const t=e.getElementsByTagName("base");n=t.length?t[0].href:e.URL}return n}function G(){return{x:pageXOffset,y:pageYOffset}}function f(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const m=g(h({},v),{"":v.hover});function T(e){var t;let n=(t=e.assignedSlot)!=null?t:e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function X(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=T(e)}}function B(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch(i){}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!o||q(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(t==null?void 0:t.origin)===location.origin&&e.hasAttribute("download");return{url:t,external:r,target:o,download:c}}function H(e){let n=null,t=null,o=null,r=null,c=null,i=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),n===null&&(n=f(s,"keepfocus")),t===null&&(t=f(s,"noscroll")),c===null&&(c=f(s,"reload")),i===null&&(i=f(s,"replacestate")),s=T(s);function a(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:m[o!=null?o:"off"],preload_data:m[r!=null?r:"off"],keep_focus:a(n),noscroll:a(t),reload:a(c),replace_state:a(i)}}function w(e){const n=p(e);let t=!0;function o(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function c(i){let s;return n.subscribe(a=>{(s===void 0||t&&a!==s)&&i(s=a)})}return{notify:o,set:r,subscribe:c}}function Y(){const{set:e,subscribe:n}=p(!1);let t;function o(){return k(this,null,function*(){clearTimeout(t);try{const r=yield fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(yield r.json()).version!==V;return i&&(e(!0),clearTimeout(t)),i}catch(r){return!1}})}return{subscribe:n,check:o}}function q(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}function W(e){e.client}const F={url:w({}),page:w({}),navigating:p(null),updated:Y()};export{C as I,v as P,z as S,j as a,B as b,H as c,F as d,N as e,X as f,D as g,W as h,q as i,G as s};
