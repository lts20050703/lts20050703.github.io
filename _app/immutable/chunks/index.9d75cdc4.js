function w(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function L(){return Object.create(null)}function y(t){t.forEach(D)}function O(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(Q(n,e))}function pt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let c=0;c<s;c+=1)u[c]=n.dirty[c]|r[c];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const s=q(n,e,i,u);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function U(){$=!0}function V(){$=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:X(1,r,x=>n[e[x]].claim_order,o))-1;i[l]=e[a]+1;const f=a+1;e[f]=l,r=Math.max(f,r)}const u=[],s=[];let c=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);c>=l;c--)s.push(n[c]);c--}for(;c>=0;c--)s.push(n[c]);u.reverse(),s.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<s.length;l++){for(;o<u.length&&s[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[l],a)}}function Z(t,n){if($){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){$&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function B(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function Et(){return S(" ")}function wt(){return S("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Nt(t,n){let e=r(t),i;function r(c){for(let l=0;l<n.length;l++)c=c[n[l]]=c[n[l]]||[];return c}function u(){i.forEach(c=>e.push(c))}function s(){i.forEach(c=>e.splice(e.indexOf(c),1))}return{u(c){n=c;const l=r(t);l!==e&&(s(),e=l,u())},p(...c){i=c,u()},r:s}}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,n,e,i,r=!1){G(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(n(c)){const l=e(c);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(n(c)){const l=e(c);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return R(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];e[c.name]||u.push(c.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function vt(t,n,e){return rt(t,n,e,B)}function st(t,n){return R(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function At(t){return st(t," ")}function j(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function St(t,n){const e=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);G(t);const r=t.splice(e,i-e+1);T(r[0]),T(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(u,n)}function Mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ht(t,n){t.value=n==null?"":n}function Lt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function jt(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Ct(t){const n=t.querySelector(":checked");return n&&n.__value}function Pt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(r)):u===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=B(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(T)}}class C extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function kt(t,n){return new t(n)}let g;function p(t){g=t}function z(){if(!g)throw new Error("Function called outside component initialization");return g}function Dt(t){z().$$.on_mount.push(t)}function Ot(t){z().$$.after_update.push(t)}const h=[],P=[];let m=[];const k=[],F=Promise.resolve();let v=!1;function I(){v||(v=!0,F.then(W))}function qt(){return I(),F}function A(t){m.push(t)}const N=new Set;let d=0;function W(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const n=h[d];d++,p(n),ct(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];N.has(e)||(N.add(e),e())}m.length=0}while(h.length);for(;k.length;)k.pop()();v=!1,N.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function ot(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const E=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Gt(){_.r||y(_.c),_=_.p}function ut(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Rt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const zt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ft(t){t&&t.c()}function It(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||A(()=>{const s=t.$$.on_mount.map(D).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):y(s),t.$$.on_mount=[]}),u.forEach(A)}function at(t,n){const e=t.$$;e.fragment!==null&&(ot(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Wt(t,n,e,i,r,u,s,c=[-1]){const l=g;p(t);const o=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:L(),dirty:c,skip_bound:!1,root:n.target||l.$$.root};s&&s(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...M)=>{const H=M.length?M[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=H)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](H),a&&_t(t,f)),x}):[],o.update(),a=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){U();const f=it(n.target);o.fragment&&o.fragment.l(f),f.forEach(T)}else o.fragment&&o.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),V(),W()}p(l)}class Jt{$destroy(){at(this,1),this.$destroy=w}$on(n,e){if(!O(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ft as A,at as B,pt as C,yt as D,xt as E,gt as F,Z as G,w as H,mt as I,Pt as J,ht as K,bt as L,A as M,jt as N,Tt as O,y as P,zt as Q,Ct as R,Jt as S,Nt as T,C as U,St as V,Ht as W,Et as a,nt as b,At as c,Rt as d,wt as e,Gt as f,ut as g,T as h,Wt as i,Ot as j,B as k,vt as l,it as m,$t as n,Dt as o,Lt as p,S as q,st as r,dt as s,qt as t,Mt as u,Bt as v,P as w,kt as x,Ft as y,It as z};