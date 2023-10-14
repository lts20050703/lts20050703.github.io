import{s as De,n as de,r as Te,o as Le}from"../chunks/scheduler.e9b79cf6.js";import{S as Ne,i as Ve,s as O,g as h,m as z,y as ze,f as p,c as S,h as d,j as E,n as P,z as $,k as c,A as ee,a as C,x as o,D as J,o as K,B as Pe,e as ie}from"../chunks/index.df82042d.js";import{e as Ie}from"../chunks/each.e59479a4.js";import{v as Ee}from"../chunks/v.98f102d5.js";import{t as je}from"../chunks/index.f5a69ea7.js";function Oe(e,t,s){const n=e.slice();return n[6]=t[s],n[14]=t,n[15]=s,n}function Ae(e){let t,s,n,a;function i(){e[11].call(t,e[15])}return{c(){t=h("input"),this.h()},l(l){t=d(l,"INPUT",{type:!0,class:!0,size:!0}),this.h()},h(){var l;c(t,"type","text"),c(t,"class",s="input mx-1 h-7 p-1 lowercase "+(!e[4][(e[15]-1)/2]||!e[1]?"input-primary":((l=e[4][(e[15]-1)/2])==null?void 0:l.toLowerCase().split(/ +/).join(" ").trim())===e[5][(e[15]-1)/2]?"input-success":"input-error")),c(t,"size",e[5][(e[15]-1)/2].length)},m(l,f){C(l,t,f),ee(t,e[4][(e[15]-1)/2]),n||(a=[J(t,"input",i),J(t,"keydown",e[12])],n=!0)},p(l,f){var r;e=l,f&18&&s!==(s="input mx-1 h-7 p-1 lowercase "+(!e[4][(e[15]-1)/2]||!e[1]?"input-primary":((r=e[4][(e[15]-1)/2])==null?void 0:r.toLowerCase().split(/ +/).join(" ").trim())===e[5][(e[15]-1)/2]?"input-success":"input-error"))&&c(t,"class",s),f&16&&t.value!==e[4][(e[15]-1)/2]&&ee(t,e[4][(e[15]-1)/2])},d(l){l&&p(t),n=!1,Te(a)}}}function Ue(e){let t;return{c(){t=h("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0,class:!0,size:!0}),this.h()},h(){c(t,"type","text"),c(t,"class","input input-info mx-1 h-7 p-1"),c(t,"size",e[5][(e[15]-1)/2].length),t.value=e[5][(e[15]-1)/2],t.readOnly=!0},m(s,n){C(s,t,n)},p:de,d(s){s&&p(t)}}}function Be(e){let t,s;function n(l,f){return f&1&&(t=null),t==null&&(t=!!l[6].includes(`
`)),t?qe:He}let a=n(e,-1),i=a(e);return{c(){i.c(),s=ie()},l(l){i.l(l),s=ie()},m(l,f){i.m(l,f),C(l,s,f)},p(l,f){a===(a=n(l,f))&&i?i.p(l,f):(i.d(1),i=a(l),i&&(i.c(),i.m(s.parentNode,s)))},d(l){l&&p(s),i.d(l)}}}function He(e){let t=e[6]+"",s;return{c(){s=z(t)},l(n){s=P(n,t)},m(n,a){C(n,s,a)},p(n,a){a&1&&t!==(t=n[6]+"")&&K(s,t)},d(n){n&&p(s)}}}function qe(e){let t=e[6].split(`
`)[0]+"",s,n,a,i,l=e[6].split(`
`)[1]+"",f;return{c(){s=z(t),n=O(),a=h("br"),i=O(),f=z(l)},l(r){s=P(r,t),n=S(r),a=d(r,"BR",{}),i=S(r),f=P(r,l)},m(r,m){C(r,s,m),C(r,n,m),C(r,a,m),C(r,i,m),C(r,f,m)},p(r,m){m&1&&t!==(t=r[6].split(`
`)[0]+"")&&K(s,t),m&1&&l!==(l=r[6].split(`
`)[1]+"")&&K(f,l)},d(r){r&&(p(s),p(n),p(a),p(i),p(f))}}}function Se(e){let t;function s(i,l){return i[15]%2===0?Be:i[2]?Ue:Ae}let n=s(e),a=n(e);return{c(){a.c(),t=ie()},l(i){a.l(i),t=ie()},m(i,l){a.m(i,l),C(i,t,l)},p(i,l){n===(n=s(i))&&a?a.p(i,l):(a.d(1),a=n(i),a&&(a.c(),a.m(t.parentNode,t)))},d(i){i&&p(t),a.d(i)}}}function Me(e){let t,s,n,a,i,l,f,r=e[1]?"On":"Off",m,w,y,Q,I,W,H=e[2]?"Show":"Hide",R,g,T,ae,k,q,oe,D,L,me="System",N,ve="Dark",V,ge="Light",re,j,A,ke="Back",ue,U,be="Clear",ce,F,X=e[0].title[0]+e[0].title.slice(1).toLowerCase()+"",te,fe,M,pe,Ce;document.title=t="LTS20050703 / Openclozes "+Ee+" / "+(e[0].title[0]+e[0].title.slice(1).toLowerCase());let G=Ie(e[0].text.split(/{|}/)),v=[];for(let u=0;u<G.length;u+=1)v[u]=Se(Oe(e,G,u));return{c(){s=O(),n=h("div"),a=h("div"),i=h("div"),l=h("div"),f=z("Check: "),m=z(r),w=O(),y=h("input"),Q=O(),I=h("div"),W=z("Answers: "),R=z(H),g=O(),T=h("input"),ae=O(),k=h("div"),q=h("div"),oe=z("Theme: "),D=h("select"),L=h("option"),L.textContent=me,N=h("option"),N.textContent=ve,V=h("option"),V.textContent=ge,re=O(),j=h("div"),A=h("a"),A.textContent=ke,ue=O(),U=h("button"),U.textContent=be,ce=O(),F=h("div"),te=z(X),fe=O(),M=h("div");for(let u=0;u<v.length;u+=1)v[u].c();this.h()},l(u){ze("svelte-1dk0ito",document.head).forEach(p),s=S(u),n=d(u,"DIV",{class:!0});var _=E(n);a=d(_,"DIV",{class:!0});var Y=E(a);i=d(Y,"DIV",{class:!0});var le=E(i);l=d(le,"DIV",{class:!0});var Z=E(l);f=P(Z,"Check: "),m=P(Z,r),w=S(Z),y=d(Z,"INPUT",{type:!0,class:!0}),Z.forEach(p),Q=S(le),I=d(le,"DIV",{class:!0});var x=E(I);W=P(x,"Answers: "),R=P(x,H),g=S(x),T=d(x,"INPUT",{type:!0,class:!0}),x.forEach(p),le.forEach(p),Y.forEach(p),ae=S(_),k=d(_,"DIV",{class:!0});var B=E(k);q=d(B,"DIV",{class:!0});var _e=E(q);oe=P(_e,"Theme: "),D=d(_e,"SELECT",{class:!0,"data-choose-theme":!0});var se=E(D);L=d(se,"OPTION",{"data-svelte-h":!0}),$(L)!=="svelte-1w04r4t"&&(L.textContent=me),N=d(se,"OPTION",{"data-svelte-h":!0}),$(N)!=="svelte-6c4gk6"&&(N.textContent=ve),V=d(se,"OPTION",{"data-svelte-h":!0}),$(V)!=="svelte-yop7ea"&&(V.textContent=ge),se.forEach(p),_e.forEach(p),re=S(B),j=d(B,"DIV",{class:!0});var ne=E(j);A=d(ne,"A",{href:!0,class:!0,"data-svelte-h":!0}),$(A)!=="svelte-vo1430"&&(A.textContent=ke),ue=S(ne),U=d(ne,"BUTTON",{class:!0,"data-svelte-h":!0}),$(U)!=="svelte-tzwey7"&&(U.textContent=be),ne.forEach(p),ce=S(B),F=d(B,"DIV",{class:!0});var we=E(F);te=P(we,X),we.forEach(p),fe=S(B),M=d(B,"DIV",{class:!0});var ye=E(M);for(let he=0;he<v.length;he+=1)v[he].l(ye);ye.forEach(p),B.forEach(p),_.forEach(p),this.h()},h(){c(y,"type","checkbox"),c(y,"class","toggle toggle-primary"),c(l,"class","flex flex-row items-center gap-1"),c(T,"type","checkbox"),c(T,"class","toggle toggle-primary"),c(I,"class","flex flex-row items-center gap-1"),c(i,"class","flex flex-row items-center gap-4"),c(a,"class","fixed m-1 rounded-md bg-base-100 p-1"),L.__value="",ee(L,L.__value),N.__value="dark",ee(N,N.__value),V.__value="light",ee(V,V.__value),c(D,"class","select select-primary select-sm"),c(D,"data-choose-theme",""),c(q,"class","mb-2 flex flex-row items-center justify-center gap-2"),c(A,"href","../"),c(A,"class","btn btn-primary"),c(U,"class","btn btn-error"),c(j,"class","flex flex-row justify-center gap-1"),c(F,"class","my-4 text-center text-3xl font-bold"),c(M,"class","leading-loose"),c(k,"class","mt-6 w-full max-w-[48rem] p-4"),c(n,"class","absolute left-0 right-0 top-0 flex flex-col items-center")},m(u,b){C(u,s,b),C(u,n,b),o(n,a),o(a,i),o(i,l),o(l,f),o(l,m),o(l,w),o(l,y),y.checked=e[1],o(i,Q),o(i,I),o(I,W),o(I,R),o(I,g),o(I,T),T.checked=e[2],o(n,ae),o(n,k),o(k,q),o(q,oe),o(q,D),o(D,L),o(D,N),o(D,V),o(k,re),o(k,j),o(j,A),o(j,ue),o(j,U),o(k,ce),o(k,F),o(F,te),o(k,fe),o(k,M);for(let _=0;_<v.length;_+=1)v[_]&&v[_].m(M,null);pe||(Ce=[J(y,"change",e[7]),J(y,"change",e[8]),J(T,"change",e[9]),J(U,"click",e[10])],pe=!0)},p(u,[b]){if(b&1&&t!==(t="LTS20050703 / Openclozes "+Ee+" / "+(u[0].title[0]+u[0].title.slice(1).toLowerCase()))&&(document.title=t),b&2&&r!==(r=u[1]?"On":"Off")&&K(m,r),b&2&&(y.checked=u[1]),b&4&&H!==(H=u[2]?"Show":"Hide")&&K(R,H),b&4&&(T.checked=u[2]),b&1&&X!==(X=u[0].title[0]+u[0].title.slice(1).toLowerCase()+"")&&K(te,X),b&63){G=Ie(u[0].text.split(/{|}/));let _;for(_=0;_<G.length;_+=1){const Y=Oe(u,G,_);v[_]?v[_].p(Y,b):(v[_]=Se(Y),v[_].c(),v[_].m(M,null))}for(;_<v.length;_+=1)v[_].d(1);v.length=G.length}},i:de,o:de,d(u){u&&(p(s),p(n)),Pe(v,u),pe=!1,Te(Ce)}}}function Re(e,t,s){let{data:n}=t,a=!1,i=!1,l=[],f=n.text.split(/{|}/),r=f.filter((g,T)=>T%2===1),m=!1,w=[];Le(()=>{var g;s(1,a=localStorage.getItem("live")!==null),l=((g=localStorage.getItem(`inputs${n.title}`))!=null?g:"").split(","),l.length<r.length&&l.push(...Array(r.length-l.length).fill("")),s(4,w=l),s(3,m=!0),je.themeChange(!1)});function y(){a=this.checked,s(1,a)}const Q=()=>{m&&(a?localStorage.setItem("live","true"):localStorage.removeItem("live"))};function I(){i=this.checked,s(2,i)}const W=()=>{s(4,w=r.map(()=>"")),localStorage.setItem(`inputs${n.title}`,w.join())};function H(g){w[(g-1)/2]=this.value,s(4,w)}const R=()=>{m&&localStorage.setItem(`inputs${n.title}`,w.join())};return e.$$set=g=>{"data"in g&&s(0,n=g.data)},[n,a,i,m,w,r,f,y,Q,I,W,H,R]}class We extends Ne{constructor(t){super(),Ve(this,t,Re,Me,De,{data:0})}}export{We as component};
