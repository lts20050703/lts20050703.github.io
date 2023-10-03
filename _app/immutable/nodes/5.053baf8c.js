var qt=Object.defineProperty,Vt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var dt=Object.getOwnPropertySymbols;var Lt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var pt=(e,t,l)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,vt=(e,t)=>{for(var l in t||(t={}))Lt.call(t,l)&&pt(e,l,t[l]);if(dt)for(var l of dt(t))At.call(t,l)&&pt(e,l,t[l]);return e},mt=(e,t)=>Vt(e,yt(t));var gt=(e,t,l)=>new Promise((s,n)=>{var a=i=>{try{u(l.next(i))}catch(c){n(c)}},o=i=>{try{u(l.throw(i))}catch(c){n(c)}},u=i=>i.done?s(i.value):Promise.resolve(i.value).then(a,o);u((l=l.apply(e,t)).next())});import{s as Ht,f as bt,n as wt,r as et,o as Bt,h as Ut}from"../chunks/scheduler.e9b79cf6.js";import{S as Mt,i as Wt,e as je,s as q,g as p,m as $,y as zt,f as m,c as V,h as v,j as D,n as J,z as R,k as f,A as Z,x as r,a as H,C as ze,D as le,o as Re,B as $e,E as kt,H as Le,F as Ae,G as Rt}from"../chunks/index.795ea0fc.js";import{e as we}from"../chunks/each.e59479a4.js";import{t as $t}from"../chunks/index.f5a69ea7.js";const Jt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global,{document:Ve}=Jt;function Ct(e,t,l){const s=e.slice();return s[23]=t[l],s[25]=l,s}function It(e,t,l){const s=e.slice();return s[26]=t[l],s[27]=t,s[28]=l,s}function Et(e,t,l){const s=e.slice();return s[29]=t[l],s[31]=l,s}function Tt(e,t,l){const s=e.slice();return s[32]=t[l],s[31]=l,s}function Ot(e){let t,l='window.MathJax = { tex: { inlineMath: [["$", "$"]] } }',s,n,a="",o;return{c(){t=p("script"),t.textContent=l,s=q(),n=p("script"),n.innerHTML=a,this.h()},l(u){t=v(u,"SCRIPT",{"data-svelte-h":!0}),R(t)!=="svelte-i2rk6h"&&(t.textContent=l),s=V(u),n=v(u,"SCRIPT",{src:!0,"data-svelte-h":!0}),R(n)!=="svelte-1bmsrs3"&&(n.innerHTML=a),this.h()},h(){Ut(n.src,o="https://polyfill.io/v3/polyfill.min.js?features=es6")||f(n,"src",o)},m(u,i){H(u,t,i),H(u,s,i),H(u,n,i)},d(u){u&&(m(t),m(s),m(n))}}}function jt(e){let t,l,s=e[23].title+"";return{c(){t=p("div"),l=new Le(!1),this.h()},l(n){t=v(n,"DIV",{});var a=D(t);l=Ae(a,!1),a.forEach(m),this.h()},h(){l.a=null},m(n,a){H(n,t,a),l.m(s,t)},p(n,a){a[0]&128&&s!==(s=n[23].title+"")&&l.p(s)},d(n){n&&m(t)}}}function Qt(e){let t,l,s,n;function a(i,c){return c[0]&128&&(l=null),l==null&&(l=!!i[32].trim().startsWith("<table>")),l?Zt:Kt}let o=a(e,[-1,-1]),u=o(e);return{c(){t=p("div"),u.c(),s=q(),this.h()},l(i){t=v(i,"DIV",{class:!0});var c=D(t);u.l(c),s=V(c),c.forEach(m),this.h()},h(){f(t,"class",n=e[32].startsWith("*")&&e[2]?"text-success":"")},m(i,c){H(i,t,c),u.m(t,null),r(t,s)},p(i,c){o===(o=a(i,c))&&u?u.p(i,c):(u.d(1),u=o(i),u&&(u.c(),u.m(t,s))),c[0]&132&&n!==(n=i[32].startsWith("*")&&i[2]?"text-success":"")&&f(t,"class",n)},d(i){i&&m(t),u.d()}}}function Ft(e){var L;let t,l=((L=e[26].fake_id)!=null?L:0)+1+"",s,n,a,o,u=e[32].replace("*","")+"",i,c;function C(h,E){return h[0].subject==="anh"?Xt:Gt}let d=C(e),w=d(e);return{c(){w.c(),t=q(),s=$(l),n=$(`:\r
									`),a=p("span"),o=new Le(!1),i=q(),this.h()},l(h){w.l(h),t=V(h),s=J(h,l),n=J(h,`:\r
									`),a=v(h,"SPAN",{class:!0});var E=D(a);o=Ae(E,!1),i=V(E),E.forEach(m),this.h()},h(){o.a=i,f(a,"class",c=e[32].startsWith("*")&&e[2]?"text-success":"")},m(h,E){w.m(h,E),H(h,t,E),H(h,s,E),H(h,n,E),H(h,a,E),o.m(u,a),r(a,i)},p(h,E){var I;d!==(d=C(h))&&(w.d(1),w=d(h),w&&(w.c(),w.m(t.parentNode,t))),E[0]&128&&l!==(l=((I=h[26].fake_id)!=null?I:0)+1+"")&&Re(s,l),E[0]&128&&u!==(u=h[32].replace("*","")+"")&&o.p(u),E[0]&132&&c!==(c=h[32].startsWith("*")&&h[2]?"text-success":"")&&f(a,"class",c)},d(h){h&&(m(t),m(s),m(n),m(a)),w.d(h)}}}function Kt(e){let t,l=e[32].replace("*","")+"",s;return{c(){t=new Le(!1),s=je(),this.h()},l(n){t=Ae(n,!1),s=je(),this.h()},h(){t.a=s},m(n,a){t.m(l,n,a),H(n,s,a)},p(n,a){a[0]&128&&l!==(l=n[32].replace("*","")+"")&&t.p(l)},d(n){n&&(m(s),t.d())}}}function Zt(e){let t,l,s=e[32].trim().slice(7,-8)+"";return{c(){t=p("table"),l=new Le(!1),this.h()},l(n){t=v(n,"TABLE",{class:!0});var a=D(t);l=Ae(a,!1),a.forEach(m),this.h()},h(){l.a=null,f(t,"class","border-separate border-spacing-x-4 border-spacing-y-2 px-4 py-2 text-center")},m(n,a){H(n,t,a),l.m(s,t)},p(n,a){a[0]&128&&s!==(s=n[32].trim().slice(7,-8)+"")&&l.p(s)},d(n){n&&m(t)}}}function Gt(e){let t;return{c(){t=$("Câu")},l(l){t=J(l,"Câu")},m(l,s){H(l,t,s)},d(l){l&&m(t)}}}function Xt(e){let t;return{c(){t=$("Question")},l(l){t=J(l,"Question")},m(l,s){H(l,t,s)},d(l){l&&m(t)}}}function St(e){let t;function l(a,o){return a[31]===0?Ft:Qt}let n=l(e)(e);return{c(){n.c(),t=je()},l(a){n.l(a),t=je()},m(a,o){n.m(a,o),H(a,t,o)},p(a,o){n.p(a,o)},d(a){a&&m(t),n.d(a)}}}function Nt(e){let t,l,s,n,a=!1,o,u,i,c=["A","B","C","D"][e[31]]+"",C,d,w,L=e[29].answer+"",h,E,I,b,S;function _(){return e[17](e[26],e[29])}function y(){e[18].call(l,e[26])}return I=Rt(e[19][0],[e[28],e[25]]),{c(){t=p("div"),l=p("input"),u=q(),i=p("label"),C=$(c),d=$(". "),w=new Le(!1),this.h()},l(j){t=v(j,"DIV",{class:!0});var N=D(t);l=v(N,"INPUT",{class:!0,type:!0,name:!0,id:!0}),u=V(N),i=v(N,"LABEL",{for:!0});var se=D(i);C=J(se,c),d=J(se,". "),w=Ae(se,!1),se.forEach(m),N.forEach(m),this.h()},h(){f(l,"class","input input-primary input-xs"),f(l,"type","radio"),f(l,"name",s=`${e[26].id}`),l.__value=n=e[29].id,Z(l,l.__value),f(l,"id",o=`${e[26].id}${e[29].id}`),w.a=null,f(i,"for",h=`${e[26].id}${e[29].id}`),f(t,"class",E="m-3 flex flex-row items-center gap-4 "+(e[2]&&e[29].id===e[26].right?"text-success":"")+" "+((e[3]||e[2])&&e[6][e[26].id]===e[29].id?e[29].id===e[26].right?"text-success":"text-error":"")),I.p(l)},m(j,N){H(j,t,N),r(t,l),l.checked=l.__value===e[6][e[26].id],r(t,u),r(t,i),r(i,C),r(i,d),w.m(L,i),b||(S=[le(l,"click",_),le(l,"change",y),le(l,"change",e[20])],b=!0)},p(j,N){e=j,N[0]&128&&s!==(s=`${e[26].id}`)&&f(l,"name",s),N[0]&128&&n!==(n=e[29].id)&&(l.__value=n,Z(l,l.__value),a=!0),N[0]&128&&o!==(o=`${e[26].id}${e[29].id}`)&&f(l,"id",o),(a||N[0]&192)&&(l.checked=l.__value===e[6][e[26].id]),N[0]&128&&L!==(L=e[29].answer+"")&&w.p(L),N[0]&128&&h!==(h=`${e[26].id}${e[29].id}`)&&f(i,"for",h),N[0]&204&&E!==(E="m-3 flex flex-row items-center gap-4 "+(e[2]&&e[29].id===e[26].right?"text-success":"")+" "+((e[3]||e[2])&&e[6][e[26].id]===e[29].id?e[29].id===e[26].right?"text-success":"text-error":""))&&f(t,"class",E),N[0]&128&&I.u([e[28],e[25]])},d(j){j&&m(t),I.r(),b=!1,et(S)}}}function Dt(e){let t,l,s,n,a,o,u,i,c,C,d;function w(){e[15].call(a,e[26])}let L=we(e[26].question.split("<br>")),h=[];for(let b=0;b<L.length;b+=1)h[b]=St(Tt(e,L,b));let E=we(e[26].answers),I=[];for(let b=0;b<E.length;b+=1)I[b]=Nt(Et(e,E,b));return{c(){t=p("div"),l=p("br"),s=q(),n=p("div"),a=p("input"),o=q();for(let b=0;b<h.length;b+=1)h[b].c();i=q();for(let b=0;b<I.length;b+=1)I[b].c();this.h()},l(b){t=v(b,"DIV",{class:!0});var S=D(t);l=v(S,"BR",{}),s=V(S),n=v(S,"DIV",{class:!0});var _=D(n);a=v(_,"INPUT",{type:!0,class:!0}),o=V(_);for(let y=0;y<h.length;y+=1)h[y].l(_);_.forEach(m),i=V(S);for(let y=0;y<I.length;y+=1)I[y].l(S);S.forEach(m),this.h()},h(){f(a,"type","checkbox"),f(a,"class","toggle toggle-warning"),f(n,"class",u=e[5][e[26].id]?"text-warning":""),f(t,"class",c=e[1]==="wrong"?e[6][e[26].id]!==-1&&e[6][e[26].id]!==e[26].right?"":"hidden":e[1]==="unanswered"?e[6][e[26].id]===-1?"":"hidden":e[1]==="marked"?e[5][e[26].id]?"":"hidden":"")},m(b,S){H(b,t,S),r(t,l),r(t,s),r(t,n),r(n,a),a.checked=e[5][e[26].id],r(n,o);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(n,null);r(t,i);for(let _=0;_<I.length;_+=1)I[_]&&I[_].m(t,null);C||(d=[le(a,"change",w),le(a,"change",e[16])],C=!0)},p(b,S){if(e=b,S[0]&160&&(a.checked=e[5][e[26].id]),S[0]&133){L=we(e[26].question.split("<br>"));let _;for(_=0;_<L.length;_+=1){const y=Tt(e,L,_);h[_]?h[_].p(y,S):(h[_]=St(y),h[_].c(),h[_].m(n,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=L.length}if(S[0]&160&&u!==(u=e[5][e[26].id]?"text-warning":"")&&f(n,"class",u),S[0]&253){E=we(e[26].answers);let _;for(_=0;_<E.length;_+=1){const y=Et(e,E,_);I[_]?I[_].p(y,S):(I[_]=Nt(y),I[_].c(),I[_].m(t,null))}for(;_<I.length;_+=1)I[_].d(1);I.length=E.length}S[0]&226&&c!==(c=e[1]==="wrong"?e[6][e[26].id]!==-1&&e[6][e[26].id]!==e[26].right?"":"hidden":e[1]==="unanswered"?e[6][e[26].id]===-1?"":"hidden":e[1]==="marked"?e[5][e[26].id]?"":"hidden":"")&&f(t,"class",c)},d(b){b&&m(t),$e(h,b),$e(I,b),C=!1,et(d)}}}function Pt(e){let t,l,s,n,a,o=e[23].title&&jt(e),u=we(e[23].questions),i=[];for(let c=0;c<u.length;c+=1)i[c]=Dt(It(e,u,c));return{c(){t=p("div"),l=p("br"),s=q(),o&&o.c(),n=q();for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){t=v(c,"DIV",{class:!0});var C=D(t);l=v(C,"BR",{}),s=V(C),o&&o.l(C),n=V(C);for(let d=0;d<i.length;d+=1)i[d].l(C);C.forEach(m),this.h()},h(){f(t,"class",a=e[23].questions.some(e[21])?"":"hidden")},m(c,C){H(c,t,C),r(t,l),r(t,s),o&&o.m(t,null),r(t,n);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null)},p(c,C){if(c[23].title?o?o.p(c,C):(o=jt(c),o.c(),o.m(t,n)):o&&(o.d(1),o=null),C[0]&255){u=we(c[23].questions);let d;for(d=0;d<u.length;d+=1){const w=It(c,u,d);i[d]?i[d].p(w,C):(i[d]=Dt(w),i[d].c(),i[d].m(t,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=u.length}C[0]&226&&a!==(a=c[23].questions.some(c[21])?"":"hidden")&&f(t,"class",a)},d(c){c&&m(t),o&&o.d(),$e(i,c)}}}function Yt(e){var ct,ft;let t,l,s,n,a,o,u,i,c=e[3]?"Bật":"Tắt",C,d,w,L,h,E,I=e[2]?"Hiện":"Ẩn",b,S,_,y,j,N,se,Y,x,k="Hệ thống",O,T="Tối",P,ne="Sáng",pe,Q,ee,B="Quay lại",te,W,ke="Xóa",Ce,ae,de,Ie,ve,Ee,Se=e[0].title+"",He,Je,me,Qe,F,ie,tt="Hiện tất cả",re,lt="Chỉ hiện câu sai",oe,st="Chỉ hiện câu chưa làm",ue,nt="Chỉ hiện câu đã đánh dấu xem lại",Be,Fe,Ue,ge,Ke,K,ce,at="Hiện tất cả",fe,it="Chỉ hiện câu sai",he,rt="Chỉ hiện câu chưa làm",_e,ot="Chỉ hiện câu đã đánh dấu xem lại",Me,Ze,ut;Ve.title=t=`\r
		LTS20050703 / 2023 / `+(e[0].subject[0].toUpperCase()+e[0].subject.slice(1))+" / "+((ct=e[0].title)==null?void 0:ct[0].toUpperCase())+((ft=e[0].title)==null?void 0:ft.slice(1).toLowerCase())+`\r
	`;let z=e[0].subject==="lý"&&Ot(),Te=we(e[7]),U=[];for(let g=0;g<Te.length;g+=1)U[g]=Pt(Ct(e,Te,g));return{c(){z&&z.c(),l=je(),s=q(),n=p("div"),a=p("div"),o=p("div"),u=p("div"),i=$("Kiểm tra: "),C=$(c),d=q(),w=p("input"),L=q(),h=p("div"),E=$("Đáp Án: "),b=$(I),S=q(),_=p("input"),y=q(),j=p("div"),N=p("div"),se=$("Chủ đề: "),Y=p("select"),x=p("option"),x.textContent=k,O=p("option"),O.textContent=T,P=p("option"),P.textContent=ne,pe=q(),Q=p("div"),ee=p("a"),ee.textContent=B,te=q(),W=p("button"),W.textContent=ke,Ce=q(),ae=p("a"),de=$("AZOTA"),ve=q(),Ee=p("div"),He=$(Se),Je=q(),me=p("div"),Qe=$(`Lọc:\r
			`),F=p("select"),ie=p("option"),ie.textContent=tt,re=p("option"),re.textContent=lt,oe=p("option"),oe.textContent=st,ue=p("option"),ue.textContent=nt,Fe=q();for(let g=0;g<U.length;g+=1)U[g].c();Ue=q(),ge=p("div"),Ke=$(`Lọc:\r
			`),K=p("select"),ce=p("option"),ce.textContent=at,fe=p("option"),fe.textContent=it,he=p("option"),he.textContent=rt,_e=p("option"),_e.textContent=ot,this.h()},l(g){const A=zt("svelte-ypjz89",Ve.head);z&&z.l(A),l=je(),A.forEach(m),s=V(g),n=v(g,"DIV",{class:!0});var G=D(n);a=v(G,"DIV",{class:!0});var Ne=D(a);o=v(Ne,"DIV",{class:!0});var M=D(o);u=v(M,"DIV",{class:!0});var be=D(u);i=J(be,"Kiểm tra: "),C=J(be,c),d=V(be),w=v(be,"INPUT",{type:!0,class:!0}),be.forEach(m),L=V(M),h=v(M,"DIV",{class:!0});var De=D(h);E=J(De,"Đáp Án: "),b=J(De,I),S=V(De),_=v(De,"INPUT",{type:!0,class:!0}),De.forEach(m),M.forEach(m),Ne.forEach(m),y=V(G),j=v(G,"DIV",{class:!0});var X=D(j);N=v(X,"DIV",{class:!0});var Ge=D(N);se=J(Ge,"Chủ đề: "),Y=v(Ge,"SELECT",{class:!0,"data-choose-theme":!0});var We=D(Y);x=v(We,"OPTION",{"data-svelte-h":!0}),R(x)!=="svelte-5n7nt9"&&(x.textContent=k),O=v(We,"OPTION",{"data-svelte-h":!0}),R(O)!=="svelte-auqr5i"&&(O.textContent=T),P=v(We,"OPTION",{"data-svelte-h":!0}),R(P)!=="svelte-12w4yw3"&&(P.textContent=ne),We.forEach(m),Ge.forEach(m),pe=V(X),Q=v(X,"DIV",{class:!0});var Oe=D(Q);ee=v(Oe,"A",{href:!0,class:!0,"data-svelte-h":!0}),R(ee)!=="svelte-3qoxnl"&&(ee.textContent=B),te=V(Oe),W=v(Oe,"BUTTON",{class:!0,"data-svelte-h":!0}),R(W)!=="svelte-436xa"&&(W.textContent=ke),Ce=V(Oe),ae=v(Oe,"A",{class:!0,href:!0});var ht=D(ae);de=J(ht,"AZOTA"),ht.forEach(m),Oe.forEach(m),ve=V(X),Ee=v(X,"DIV",{class:!0});var _t=D(Ee);He=J(_t,Se),_t.forEach(m),Je=V(X),me=v(X,"DIV",{class:!0});var Xe=D(me);Qe=J(Xe,`Lọc:\r
			`),F=v(Xe,"SELECT",{class:!0});var Pe=D(F);ie=v(Pe,"OPTION",{class:!0,"data-svelte-h":!0}),R(ie)!=="svelte-1cd8oab"&&(ie.textContent=tt),re=v(Pe,"OPTION",{class:!0,"data-svelte-h":!0}),R(re)!=="svelte-9jdmv"&&(re.textContent=lt),oe=v(Pe,"OPTION",{class:!0,"data-svelte-h":!0}),R(oe)!=="svelte-16mymxg"&&(oe.textContent=st),ue=v(Pe,"OPTION",{class:!0,"data-svelte-h":!0}),R(ue)!=="svelte-4cvul3"&&(ue.textContent=nt),Pe.forEach(m),Xe.forEach(m),Fe=V(X);for(let xe=0;xe<U.length;xe+=1)U[xe].l(X);Ue=V(X),ge=v(X,"DIV",{class:!0});var Ye=D(ge);Ke=J(Ye,`Lọc:\r
			`),K=v(Ye,"SELECT",{class:!0});var qe=D(K);ce=v(qe,"OPTION",{class:!0,"data-svelte-h":!0}),R(ce)!=="svelte-1cd8oab"&&(ce.textContent=at),fe=v(qe,"OPTION",{class:!0,"data-svelte-h":!0}),R(fe)!=="svelte-9jdmv"&&(fe.textContent=it),he=v(qe,"OPTION",{class:!0,"data-svelte-h":!0}),R(he)!=="svelte-16mymxg"&&(he.textContent=rt),_e=v(qe,"OPTION",{class:!0,"data-svelte-h":!0}),R(_e)!=="svelte-4cvul3"&&(_e.textContent=ot),qe.forEach(m),Ye.forEach(m),X.forEach(m),G.forEach(m),this.h()},h(){f(w,"type","checkbox"),f(w,"class","toggle toggle-primary"),f(u,"class","flex flex-row gap-1"),f(_,"type","checkbox"),f(_,"class","toggle toggle-primary"),f(h,"class","flex flex-row gap-1"),f(o,"class","flex flex-row gap-4"),f(a,"class","fixed m-1 rounded-md bg-base-100 p-1"),x.__value="",Z(x,x.__value),O.__value="dark",Z(O,O.__value),P.__value="light",Z(P,P.__value),f(Y,"class","select select-primary select-sm"),f(Y,"data-choose-theme",""),f(N,"class","mb-2 flex flex-row items-center justify-center gap-1"),f(ee,"href","../"),f(ee,"class","btn btn-primary"),f(W,"class","btn btn-error"),f(ae,"class","btn btn-secondary"),f(ae,"href",Ie=e[0].azota),f(Q,"class","flex flex-row justify-center gap-1"),f(Ee,"class","my-4 text-center text-3xl font-bold"),f(ie,"class","text-base-content"),ie.__value="",Z(ie,ie.__value),f(re,"class","text-error"),re.__value="wrong",Z(re,re.__value),f(oe,"class","text-error"),oe.__value="unanswered",Z(oe,oe.__value),f(ue,"class","text-warning"),ue.__value="marked",Z(ue,ue.__value),f(F,"class","select select-primary select-sm"),e[1]===void 0&&bt(()=>e[14].call(F)),f(me,"class",Be="flex flex-row items-center gap-2 "+(e[1]==="wrong"||e[1]==="unanswered"?"text-error":e[1]==="marked"?"text-warning":"")),f(ce,"class","text-base-content"),ce.__value="",Z(ce,ce.__value),f(fe,"class","text-error"),fe.__value="wrong",Z(fe,fe.__value),f(he,"class","text-error"),he.__value="unanswered",Z(he,he.__value),f(_e,"class","text-warning"),_e.__value="marked",Z(_e,_e.__value),f(K,"class","select select-primary select-sm"),e[1]===void 0&&bt(()=>e[22].call(K)),f(ge,"class",Me="flex "+(e[1]==="wrong"||e[1]==="unanswered"?"text-error":e[1]==="marked"?"text-warning":"")),f(j,"class","mt-6 w-full max-w-[48rem] p-4"),f(n,"class","absolute left-0 right-0 top-0 flex flex-col items-center")},m(g,A){z&&z.m(Ve.head,null),r(Ve.head,l),H(g,s,A),H(g,n,A),r(n,a),r(a,o),r(o,u),r(u,i),r(u,C),r(u,d),r(u,w),w.checked=e[3],r(o,L),r(o,h),r(h,E),r(h,b),r(h,S),r(h,_),_.checked=e[2],r(n,y),r(n,j),r(j,N),r(N,se),r(N,Y),r(Y,x),r(Y,O),r(Y,P),r(j,pe),r(j,Q),r(Q,ee),r(Q,te),r(Q,W),r(Q,Ce),r(Q,ae),r(ae,de),r(j,ve),r(j,Ee),r(Ee,He),r(j,Je),r(j,me),r(me,Qe),r(me,F),r(F,ie),r(F,re),r(F,oe),r(F,ue),ze(F,e[1],!0),r(j,Fe);for(let G=0;G<U.length;G+=1)U[G]&&U[G].m(j,null);r(j,Ue),r(j,ge),r(ge,Ke),r(ge,K),r(K,ce),r(K,fe),r(K,he),r(K,_e),ze(K,e[1],!0),Ze||(ut=[le(w,"change",e[10]),le(w,"change",e[11]),le(_,"change",e[12]),le(W,"click",e[13]),le(F,"change",e[14]),le(K,"change",e[22])],Ze=!0)},p(g,A){var G,Ne;if(A[0]&1&&t!==(t=`\r
		LTS20050703 / 2023 / `+(g[0].subject[0].toUpperCase()+g[0].subject.slice(1))+" / "+((G=g[0].title)==null?void 0:G[0].toUpperCase())+((Ne=g[0].title)==null?void 0:Ne.slice(1).toLowerCase())+`\r
	`)&&(Ve.title=t),g[0].subject==="lý"?z||(z=Ot(),z.c(),z.m(l.parentNode,l)):z&&(z.d(1),z=null),A[0]&8&&c!==(c=g[3]?"Bật":"Tắt")&&Re(C,c),A[0]&8&&(w.checked=g[3]),A[0]&4&&I!==(I=g[2]?"Hiện":"Ẩn")&&Re(b,I),A[0]&4&&(_.checked=g[2]),A[0]&1&&Ie!==(Ie=g[0].azota)&&f(ae,"href",Ie),A[0]&1&&Se!==(Se=g[0].title+"")&&Re(He,Se),A[0]&2&&ze(F,g[1]),A[0]&2&&Be!==(Be="flex flex-row items-center gap-2 "+(g[1]==="wrong"||g[1]==="unanswered"?"text-error":g[1]==="marked"?"text-warning":""))&&f(me,"class",Be),A[0]&255){Te=we(g[7]);let M;for(M=0;M<Te.length;M+=1){const be=Ct(g,Te,M);U[M]?U[M].p(be,A):(U[M]=Pt(be),U[M].c(),U[M].m(j,Ue))}for(;M<U.length;M+=1)U[M].d(1);U.length=Te.length}A[0]&2&&ze(K,g[1]),A[0]&2&&Me!==(Me="flex "+(g[1]==="wrong"||g[1]==="unanswered"?"text-error":g[1]==="marked"?"text-warning":""))&&f(ge,"class",Me)},i:wt,o:wt,d(g){g&&(m(s),m(n)),z&&z.d(g),m(l),$e(U,g),Ze=!1,et(ut)}}}function ye(e){let t=e.length,l;for(;t!=0;)l=Math.floor(Math.random()*t),t--,[e[t],e[l]]=[e[l],e[t]];return e}function xt(e,t,l){let{data:s}=t,n="",a=!1,o=!1,u=!1,i=[];function c(){localStorage.setItem(`section${s.subject}${s.id}`,JSON.stringify(w.map(k=>({id:k.id,questions:k.questions.map(O=>({id:O.id,answers:O.answers.map(T=>T.id)}))}))))}function C(){const k=s.sections.map(T=>(T.shuffle&&(T.questions=ye(T.questions)),T.questions.forEach(P=>P.answers=ye(P.answers)),T));s.sections.forEach(T=>{T.shuffle&&(T.questions=ye(T.questions)),T.questions.forEach(P=>{P.answers=ye(P.answers)})}),l(7,w=ye(k));let O=0;w.forEach(T=>{let P=null;T.shuffle||(P=T.title.match(/(\(\d+\))/g)),T.questions.forEach((ne,pe)=>{ne.fake_id=O,P&&(T.title=T.title.replace(P[pe],`(${O+1})`)),O+=1})})}let d=[],w=[];Bt(()=>gt(this,null,function*(){var pe,Q,ee;l(3,o=localStorage.getItem("live")!==null);const k=((pe=localStorage.getItem(`inputs${s.subject}${s.id}`))!=null?pe:"").split(",");let O=s.sections.map(B=>B.questions.length).reduce((B,te)=>B+te,0);k.length<O&&k.push(...Array(O-k.length).fill("-1")),l(6,d=k.map(B=>parseInt(B)));let T=((Q=localStorage.getItem(`marked${s.subject}${s.id}`))!=null?Q:"").split(",");T.length<O&&T.push(...Array(O-T.length).fill("")),l(5,i=T.map(B=>B==="true")),l(4,u=!0),$t.themeChange(!1);const P=(ee=localStorage.getItem(`section${s.subject}${s.id}`))!=null?ee:"[]",ne=JSON.parse(P);if(ne.length<s.sections.length)C(),c();else{let B=0;ne.forEach(te=>{const W={id:te.id,shuffle:s.sections[te.id].shuffle,title:s.sections[te.id].title,questions:[]};let ke=null;W.shuffle||(ke=W.title.match(/(\(\d+\))/g)),te.questions.forEach((Ce,ae)=>{let de;if(s.sections[te.id].questions.forEach(ve=>{ve.id===Ce.id&&(de=mt(vt({},ve),{fake_id:B}),B+=1,ke&&(W.title=W.title.replace(ke[ae],`(${B})`)))}),!de)return;const Ie=de.answers;de.answers=Ce.answers.map(ve=>Ie[ve]),W.questions.push(de)}),w.push(W)})}if(s.subject==="lý"){let B=document.createElement("script");B.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",document.head.append(B)}}));const L=[[]];function h(){o=this.checked,l(3,o)}const E=()=>{u&&(o?localStorage.setItem("live","true"):localStorage.removeItem("live"))};function I(){a=this.checked,l(2,a)}const b=()=>{l(6,d=new Array(s.sections.map(k=>k.questions.length).reduce((k,O)=>k+O,0)).fill(-1)),C(),c(),s.subject==="lý"&&location.reload()};function S(){n=kt(this),l(1,n)}function _(k){i[k.id]=this.checked,l(5,i)}const y=()=>{u&&localStorage.setItem(`marked${s.subject}${s.id}`,i.join(","))},j=(k,O)=>{d[k.id]===O.id&&(l(6,d[k.id]=-1,d),u&&localStorage.setItem(`inputs${s.subject}${s.id}`,d.join(",")))};function N(k){d[k.id]=this.__value,l(6,d)}const se=()=>{u&&(localStorage.setItem(`inputs${s.subject}${s.id}`,d.join(",")),o&&d.forEach((k,O)=>{let T=-1;s.sections.forEach(P=>{P.questions.forEach(ne=>{ne.id===O&&(T=ne.right)})}),k!==-1&&k!==T&&(l(5,i[O]=!0,i),localStorage.setItem(`marked${s.subject}${s.id}`,i.join(",")))}))},Y=k=>{switch(n){case"":return!0;case"wrong":return d[k.id]!==-1&&d[k.id]!==k.right;case"unanswered":return d[k.id]===-1;case"marked":return i[k.id]}};function x(){n=kt(this),l(1,n)}return e.$$set=k=>{"data"in k&&l(0,s=k.data)},[s,n,a,o,u,i,d,w,c,C,h,E,I,b,S,_,y,j,N,L,se,Y,x]}class al extends Mt{constructor(t){super(),Wt(this,t,xt,Yt,Ht,{data:0},null,[-1,-1])}}export{al as component};