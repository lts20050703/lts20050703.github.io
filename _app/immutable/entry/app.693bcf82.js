import{S as B,i as C,s as q,a as U,e as h,c as j,b,d,f as P,g,h as w,j as W,o as F,k as G,l as H,m as J,n as D,p as m,q as K,r as M,u as Q,v as A,w as I,x as E,y as v,z as O,A as R,B as L}from"../chunks/index.90c3a8c9.js";const X="modulepreload",Y=function(l,e){return new URL(l,e).href},T={},p=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(l){let e,n,i;var s=l[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(l)),l[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){A();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){l[12](null),t&&w(n),e&&L(e,t)}}}function $(l){let e,n,i;var s=l[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(l)),l[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){A();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){l[11](null),t&&w(n),e&&L(e,t)}}}function x(l){let e,n,i;var s=l[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(l)),l[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){A();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){l[10](null),t&&w(n),e&&L(e,t)}}}function V(l){let e,n=l[6]&&y(l);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function y(l){let e;return{c(){e=K(l[7])},l(n){e=M(n,l[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(l){let e,n,i,s,f;const t=[$,Z],r=[];function _(a,u){return a[1][1]?0:1}e=_(l),n=r[e]=t[e](l);let o=l[5]&&V(l);return{c(){n.c(),i=U(),o&&o.c(),s=h()},l(a){n.l(a),i=j(a),o&&o.l(a),s=h()},m(a,u){r[e].m(a,u),b(a,i,u),o&&o.m(a,u),b(a,s,u),f=!0},p(a,[u]){let k=e;e=_(a),e===k?r[e].p(a,u):(A(),d(r[k],1,1,()=>{r[k]=null}),P(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),g(n,1),n.m(i.parentNode,i)),a[5]?o?o.p(a,u):(o=V(a),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(a){f||(g(n),f=!0)},o(a){d(n),f=!1},d(a){r[e].d(a),a&&w(i),o&&o.d(a),a&&w(s)}}}function te(l,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;W(i.page.notify);let a=!1,u=!1,k=null;F(()=>{const c=i.page.subscribe(()=>{a&&(n(6,u=!0),n(7,k=document.title||"untitled page"))});return n(5,a=!0),c});function z(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function N(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function S(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return l.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},l.$$.update=()=>{l.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,a,u,k,i,s,z,N,S]}class se extends B{constructor(e){super(),C(this,e,te,ee,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const re=[()=>p(()=>import("../chunks/0.50e70f54.js"),["..\\chunks\\0.50e70f54.js","..\\chunks\\_layout.fdd757eb.js","./_layout.svelte.8b730760.js","..\\chunks\\index.90c3a8c9.js","..\\assets\\_layout.6e2af924.css"],import.meta.url),()=>p(()=>import("../chunks/1.f793f801.js"),["..\\chunks\\1.f793f801.js","./error.svelte.53055077.js","..\\chunks\\index.90c3a8c9.js","..\\chunks\\singletons.69e9f6e8.js"],import.meta.url),()=>p(()=>import("../chunks/2.55ae56c6.js"),["..\\chunks\\2.55ae56c6.js","./_page.svelte.8c2ded81.js","..\\chunks\\index.90c3a8c9.js","..\\chunks\\v.f7c85ecd.js"],import.meta.url),()=>p(()=>import("../chunks/3.dfb9671c.js"),["..\\chunks\\3.dfb9671c.js","./openclozes-page.svelte.17e195bb.js","..\\chunks\\index.90c3a8c9.js","..\\chunks\\v.f7c85ecd.js"],import.meta.url),()=>p(()=>import("../chunks/4.6920646a.js"),["..\\chunks\\4.6920646a.js","./openclozes-0-page.svelte.3ad15629.js","..\\chunks\\index.90c3a8c9.js"],import.meta.url),()=>p(()=>import("../chunks/5.1e0860e9.js"),["..\\chunks\\5.1e0860e9.js","./openclozes-1-page.svelte.1fe8e87f.js","..\\chunks\\index.90c3a8c9.js"],import.meta.url),()=>p(()=>import("../chunks/6.cd77cb7f.js"),["..\\chunks\\6.cd77cb7f.js","./openclozes-2-page.svelte.74af0663.js","..\\chunks\\index.90c3a8c9.js"],import.meta.url),()=>p(()=>import("../chunks/7.95cdd5c3.js"),["..\\chunks\\7.95cdd5c3.js","./openclozes-3-page.svelte.99b1cc73.js","..\\chunks\\index.90c3a8c9.js"],import.meta.url)],oe=[],le={"/":[2],"/openclozes":[3],"/openclozes/0":[4],"/openclozes/1":[5],"/openclozes/2":[6],"/openclozes/3":[7]},ae={handleError:({error:l})=>{console.error(l)}};export{le as dictionary,ae as hooks,ie as matchers,re as nodes,se as root,oe as server_loads};
