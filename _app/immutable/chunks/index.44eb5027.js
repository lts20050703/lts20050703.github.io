function $(){}function U(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function L(){return Object.create(null)}function y(t){t.forEach(O)}function k(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function W(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(V(n,e))}function pt(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?U(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=n.dirty[l]|r[l];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const s=B(n,e,i,u);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function X(){w=!0}function Y(){w=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:Z(1,r,x=>n[e[x]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[c],a)}}function nt(t,n){if(w){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){w&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function q(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function Et(){return M(" ")}function $t(){return M("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Nt(t,n){let e=r(t),i;function r(l){for(let c=0;c<n.length;c++)l=l[n[c]]=l[n[c]]||[];return l}function u(){i.forEach(l=>e.push(l))}function s(){i.forEach(l=>e.splice(e.indexOf(l),1))}return{u(l){n=l;const c=r(t);c!==e&&(s(),e=c,u())},p(...l){i=l,u()},r:s}}function rt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){R(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function vt(t,n,e){return F(t,n,e,q)}function At(t,n,e){return F(t,n,e,G)}function st(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function Mt(t){return st(t," ")}function j(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function St(t,n){const e=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);R(t);const r=t.splice(e,i-e+1);T(r[0]),T(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(u,n)}function Ht(t,n){n=""+n,t.data!==n&&(t.data=n)}function Lt(t,n){t.value=n==null?"":n}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ct(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(r)):u===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class ct{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=G(e.nodeName):this.e=q(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(T)}}class C extends ct{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function Pt(t,n){return new t(n)}let g;function p(t){g=t}function I(){if(!g)throw new Error("Function called outside component initialization");return g}function Dt(t){I().$$.on_mount.push(t)}function Ot(t){I().$$.after_update.push(t)}const h=[],P=[];let m=[];const D=[],J=Promise.resolve();let v=!1;function K(){v||(v=!0,J.then(Q))}function kt(){return K(),J}function A(t){m.push(t)}const N=new Set;let d=0;function Q(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const n=h[d];d++,p(n),lt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];N.has(e)||(N.add(e),e())}m.length=0}while(h.length);for(;D.length;)D.pop()();v=!1,N.clear(),p(t)}function lt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function ot(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const E=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function qt(){_.r||y(_.c),_=_.p}function ut(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Gt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Rt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||A(()=>{const s=t.$$.on_mount.map(O).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...s):y(s),t.$$.on_mount=[]}),u.forEach(A)}function at(t,n){const e=t.$$;e.fragment!==null&&(ot(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,u,s,l=[-1]){const c=g;p(t);const o=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...S)=>{const H=S.length?S[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=H)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](H),a&&_t(t,f)),x}):[],o.update(),a=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){X();const f=rt(n.target);o.fragment&&o.fragment.l(f),f.forEach(T)}else o.fragment&&o.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),Y(),Q()}p(c)}class It{$destroy(){at(this,1),this.$destroy=$}$on(n,e){if(!k(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ft as A,at as B,pt as C,yt as D,xt as E,gt as F,nt as G,$ as H,mt as I,Ct as J,ht as K,G as L,At as M,Tt as N,bt as O,y as P,C as Q,St as R,It as S,Nt as T,Lt as U,Et as a,it as b,Mt as c,Gt as d,$t as e,qt as f,ut as g,T as h,Ft as i,Ot as j,q as k,vt as l,rt as m,wt as n,Dt as o,jt as p,M as q,st as r,dt as s,kt as t,Ht as u,Bt as v,P as w,Pt as x,Rt as y,zt as z};
