var _t=(e,t,l)=>new Promise((s,n)=>{var i=a=>{try{f(l.next(a))}catch(o){n(o)}},u=a=>{try{f(l.throw(a))}catch(o){n(o)}},f=a=>a.done?s(a.value):Promise.resolve(a.value).then(i,u);f((l=l.apply(e,t)).next())});import{s as Ot,h as dt,n as pt,r as jt,o as St,f as Dt}from"../chunks/scheduler.8ea2a124.js";import{S as Nt,i as Pt,e as we,s as A,g,m as Z,y as yt,f as b,c as H,h as m,j as V,n as G,z as K,k as c,A as $,x as r,a as z,C as Be,D as ve,o as Ue,B as Me,E as vt,H as Se,F as De,G as Vt}from"../chunks/index.27755550.js";import{e as ge}from"../chunks/each.e59479a4.js";import{t as Lt}from"../chunks/index.f5a69ea7.js";const At=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global,{document:Oe}=At;function gt(e,t,l){const s=e.slice();return s[23]=t[l],s[25]=l,s}function mt(e,t,l){const s=e.slice();return s[26]=t[l],s[27]=t,s[28]=l,s}function bt(e,t,l){const s=e.slice();return s[29]=t[l],s[31]=l,s}function kt(e,t,l){const s=e.slice();return s[32]=t[l],s[31]=l,s}function wt(e){let t,l='window.MathJax = { tex: { inlineMath: [["$", "$"]] } }',s,n,i="",u;return{c(){t=g("script"),t.textContent=l,s=A(),n=g("script"),n.innerHTML=i,this.h()},l(f){t=m(f,"SCRIPT",{"data-svelte-h":!0}),K(t)!=="svelte-i2rk6h"&&(t.textContent=l),s=H(f),n=m(f,"SCRIPT",{src:!0,"data-svelte-h":!0}),K(n)!=="svelte-1bmsrs3"&&(n.innerHTML=i),this.h()},h(){Dt(n.src,u="https://polyfill.io/v3/polyfill.min.js?features=es6")||c(n,"src",u)},m(f,a){z(f,t,a),z(f,s,a),z(f,n,a)},d(f){f&&(b(t),b(s),b(n))}}}function Ct(e){let t,l,s=e[23].title+"";return{c(){t=g("div"),l=new Se(!1),this.h()},l(n){t=m(n,"DIV",{});var i=V(t);l=De(i,!1),i.forEach(b),this.h()},h(){l.a=null},m(n,i){z(n,t,i),l.m(s,t)},p(n,i){i[0]&64&&s!==(s=n[23].title+"")&&l.p(s)},d(n){n&&b(t)}}}function Ht(e){let t,l,s,n;function i(a,o){return o[0]&64&&(l=null),l==null&&(l=!!a[32].trim().startsWith("<table>")),l?Mt:Ut}let u=i(e,[-1,-1]),f=u(e);return{c(){t=g("div"),f.c(),s=A(),this.h()},l(a){t=m(a,"DIV",{class:!0});var o=V(t);f.l(o),s=H(o),o.forEach(b),this.h()},h(){c(t,"class",n=e[32].startsWith("*")&&e[5]?"text-success":"")},m(a,o){z(a,t,o),f.m(t,null),r(t,s)},p(a,o){u===(u=i(a,o))&&f?f.p(a,o):(f.d(1),f=u(a),f&&(f.c(),f.m(t,s))),o[0]&96&&n!==(n=a[32].startsWith("*")&&a[5]?"text-success":"")&&c(t,"class",n)},d(a){a&&b(t),f.d()}}}function Bt(e){let t,l=e[26].fake_id+1+"",s,n,i,u,f=e[32].replace("*","")+"",a,o;function E(h,d){return h[0].subject==="anh"?zt:Wt}let k=E(e),T=k(e);return{c(){T.c(),t=A(),s=Z(l),n=Z(`:\r
									`),i=g("span"),u=new Se(!1),a=A(),this.h()},l(h){T.l(h),t=H(h),s=G(h,l),n=G(h,`:\r
									`),i=m(h,"SPAN",{class:!0});var d=V(i);u=De(d,!1),a=H(d),d.forEach(b),this.h()},h(){u.a=a,c(i,"class",o=e[32].startsWith("*")&&e[5]?"text-success":"")},m(h,d){T.m(h,d),z(h,t,d),z(h,s,d),z(h,n,d),z(h,i,d),u.m(f,i),r(i,a)},p(h,d){k!==(k=E(h))&&(T.d(1),T=k(h),T&&(T.c(),T.m(t.parentNode,t))),d[0]&64&&l!==(l=h[26].fake_id+1+"")&&Ue(s,l),d[0]&64&&f!==(f=h[32].replace("*","")+"")&&u.p(f),d[0]&96&&o!==(o=h[32].startsWith("*")&&h[5]?"text-success":"")&&c(i,"class",o)},d(h){h&&(b(t),b(s),b(n),b(i)),T.d(h)}}}function Ut(e){let t,l=e[32].replace("*","")+"",s;return{c(){t=new Se(!1),s=we(),this.h()},l(n){t=De(n,!1),s=we(),this.h()},h(){t.a=s},m(n,i){t.m(l,n,i),z(n,s,i)},p(n,i){i[0]&64&&l!==(l=n[32].replace("*","")+"")&&t.p(l)},d(n){n&&(b(s),t.d())}}}function Mt(e){let t,l,s=e[32].trim().slice(7,-8)+"";return{c(){t=g("table"),l=new Se(!1),this.h()},l(n){t=m(n,"TABLE",{class:!0});var i=V(t);l=De(i,!1),i.forEach(b),this.h()},h(){l.a=null,c(t,"class","border-separate border-spacing-x-4 border-spacing-y-2 px-4 py-2 text-center")},m(n,i){z(n,t,i),l.m(s,t)},p(n,i){i[0]&64&&s!==(s=n[32].trim().slice(7,-8)+"")&&l.p(s)},d(n){n&&b(t)}}}function Wt(e){let t;return{c(){t=Z("Câu")},l(l){t=G(l,"Câu")},m(l,s){z(l,t,s)},d(l){l&&b(t)}}}function zt(e){let t;return{c(){t=Z("Question")},l(l){t=G(l,"Question")},m(l,s){z(l,t,s)},d(l){l&&b(t)}}}function It(e){let t;function l(i,u){return i[31]===0?Bt:Ht}let n=l(e)(e);return{c(){n.c(),t=we()},l(i){n.l(i),t=we()},m(i,u){n.m(i,u),z(i,t,u)},p(i,u){n.p(i,u)},d(i){i&&b(t),n.d(i)}}}function qt(e){let t,l,s,n,i=!1,u,f,a,o=["A","B","C","D"][e[31]]+"",E,k,T,h=e[29].answer+"",d,L,j,q,D;function _(){return e[15](e[26],e[29])}function B(){e[16].call(l,e[26])}return j=Vt(e[17][0],[e[28],e[25]]),{c(){t=g("div"),l=g("input"),f=A(),a=g("label"),E=Z(o),k=Z(". "),T=new Se(!1),this.h()},l(S){t=m(S,"DIV",{class:!0});var N=V(t);l=m(N,"INPUT",{class:!0,type:!0,name:!0,id:!0}),f=H(N),a=m(N,"LABEL",{for:!0});var se=V(a);E=G(se,o),k=G(se,". "),T=De(se,!1),se.forEach(b),N.forEach(b),this.h()},h(){c(l,"class","input input-primary input-xs"),c(l,"type","radio"),c(l,"name",s=`${e[26].id}`),l.__value=n=e[29].id,$(l,l.__value),c(l,"id",u=`${e[26].id}${e[29].id}`),T.a=null,c(a,"for",d=`${e[26].id}${e[29].id}`),c(t,"class",L="m-3 flex flex-row items-center gap-4 "+(e[5]&&e[29].id===e[26].right?"text-success":"")+" "+((e[1]||e[5])&&e[3][e[26].id]===e[29].id?e[29].id===e[26].right?"text-success":"text-error":"")),j.p(l)},m(S,N){z(S,t,N),r(t,l),l.checked=l.__value===e[3][e[26].id],r(t,f),r(t,a),r(a,E),r(a,k),T.m(h,a),q||(D=[ve(l,"click",_),ve(l,"change",B)],q=!0)},p(S,N){e=S,N[0]&64&&s!==(s=`${e[26].id}`)&&c(l,"name",s),N[0]&64&&n!==(n=e[29].id)&&(l.__value=n,$(l,l.__value),i=!0),N[0]&64&&u!==(u=`${e[26].id}${e[29].id}`)&&c(l,"id",u),(i||N[0]&72)&&(l.checked=l.__value===e[3][e[26].id]),N[0]&64&&h!==(h=e[29].answer+"")&&T.p(h),N[0]&64&&d!==(d=`${e[26].id}${e[29].id}`)&&c(a,"for",d),N[0]&106&&L!==(L="m-3 flex flex-row items-center gap-4 "+(e[5]&&e[29].id===e[26].right?"text-success":"")+" "+((e[1]||e[5])&&e[3][e[26].id]===e[29].id?e[29].id===e[26].right?"text-success":"text-error":""))&&c(t,"class",L),N[0]&64&&j.u([e[28],e[25]])},d(S){S&&b(t),j.r(),q=!1,jt(D)}}}function Et(e){let t,l,s,n,i,u,f,a,o,E,k;function T(){e[14].call(i,e[26])}let h=ge(e[26].question.split("<br>")),d=[];for(let q=0;q<h.length;q+=1)d[q]=It(kt(e,h,q));let L=ge(e[26].answers),j=[];for(let q=0;q<L.length;q+=1)j[q]=qt(bt(e,L,q));return{c(){t=g("div"),l=g("br"),s=A(),n=g("div"),i=g("input"),u=A();for(let q=0;q<d.length;q+=1)d[q].c();a=A();for(let q=0;q<j.length;q+=1)j[q].c();this.h()},l(q){t=m(q,"DIV",{class:!0});var D=V(t);l=m(D,"BR",{}),s=H(D),n=m(D,"DIV",{class:!0});var _=V(n);i=m(_,"INPUT",{type:!0,class:!0}),u=H(_);for(let B=0;B<d.length;B+=1)d[B].l(_);_.forEach(b),a=H(D);for(let B=0;B<j.length;B+=1)j[B].l(D);D.forEach(b),this.h()},h(){c(i,"type","checkbox"),c(i,"class","toggle toggle-warning"),c(n,"class",f=e[2][e[26].id]?"text-warning":""),c(t,"class",o=e[4]==="wrong"?e[3][e[26].id]!==-1&&e[3][e[26].id]!==e[26].right?"":"hidden":e[4]==="unanswered"?e[3][e[26].id]===-1?"":"hidden":e[4]==="marked"?e[2][e[26].id]?"":"hidden":"")},m(q,D){z(q,t,D),r(t,l),r(t,s),r(t,n),r(n,i),i.checked=e[2][e[26].id],r(n,u);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(n,null);r(t,a);for(let _=0;_<j.length;_+=1)j[_]&&j[_].m(t,null);E||(k=ve(i,"change",T),E=!0)},p(q,D){if(e=q,D[0]&68&&(i.checked=e[2][e[26].id]),D[0]&97){h=ge(e[26].question.split("<br>"));let _;for(_=0;_<h.length;_+=1){const B=kt(e,h,_);d[_]?d[_].p(B,D):(d[_]=It(B),d[_].c(),d[_].m(n,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=h.length}if(D[0]&68&&f!==(f=e[2][e[26].id]?"text-warning":"")&&c(n,"class",f),D[0]&362){L=ge(e[26].answers);let _;for(_=0;_<L.length;_+=1){const B=bt(e,L,_);j[_]?j[_].p(B,D):(j[_]=qt(B),j[_].c(),j[_].m(t,null))}for(;_<j.length;_+=1)j[_].d(1);j.length=L.length}D[0]&92&&o!==(o=e[4]==="wrong"?e[3][e[26].id]!==-1&&e[3][e[26].id]!==e[26].right?"":"hidden":e[4]==="unanswered"?e[3][e[26].id]===-1?"":"hidden":e[4]==="marked"?e[2][e[26].id]?"":"hidden":"")&&c(t,"class",o)},d(q){q&&b(t),Me(d,q),Me(j,q),E=!1,k()}}}function Tt(e){let t,l,s,n,i,u=e[23].title&&Ct(e),f=ge(e[23].questions),a=[];for(let o=0;o<f.length;o+=1)a[o]=Et(mt(e,f,o));return{c(){t=g("div"),l=g("br"),s=A(),u&&u.c(),n=A();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=m(o,"DIV",{class:!0});var E=V(t);l=m(E,"BR",{}),s=H(E),u&&u.l(E),n=H(E);for(let k=0;k<a.length;k+=1)a[k].l(E);E.forEach(b),this.h()},h(){c(t,"class",i=e[9](e[4],e[23])?"":"hidden")},m(o,E){z(o,t,E),r(t,l),r(t,s),u&&u.m(t,null),r(t,n);for(let k=0;k<a.length;k+=1)a[k]&&a[k].m(t,null)},p(o,E){if(o[23].title?u?u.p(o,E):(u=Ct(o),u.c(),u.m(t,n)):u&&(u.d(1),u=null),E[0]&383){f=ge(o[23].questions);let k;for(k=0;k<f.length;k+=1){const T=mt(o,f,k);a[k]?a[k].p(T,E):(a[k]=Et(T),a[k].c(),a[k].m(t,null))}for(;k<a.length;k+=1)a[k].d(1);a.length=f.length}E[0]&80&&i!==(i=o[9](o[4],o[23])?"":"hidden")&&c(t,"class",i)},d(o){o&&b(t),u&&u.d(),Me(a,o)}}}function Rt(e){var ut,ct;let t,l,s,n,i,u,f,a,o=e[1]?"Bật":"Tắt",E,k,T,h,d,L,j=e[5]?"Hiện":"Ẩn",q,D,_,B,S,N,se,te,le,w="Hệ thống",v,I="Tối",p,O="Sáng",y,U,M,P="Quay lại",Ce,R,Ne="Xóa",We,ne,ze,Pe,Re,me,Ie=e[0].title+"",ye,Fe,_e,Je,X,ie,et="Hiện tất cả",ae,tt="Chỉ hiện câu sai",oe,lt="Chỉ hiện câu chưa làm",re,st="Chỉ hiện câu đã đánh dấu xem lại",Ve,Qe,Le,de,Ke,Y,ue,nt="Hiện tất cả",ce,it="Chỉ hiện câu sai",fe,at="Chỉ hiện câu chưa làm",he,ot="Chỉ hiện câu đã đánh dấu xem lại",Ae,Ze,rt;Oe.title=t=`\r
		LTS20050703 / 2023 / `+(e[0].subject[0].toUpperCase()+e[0].subject.slice(1))+" / "+((ut=e[0].title)==null?void 0:ut[0].toUpperCase())+((ct=e[0].title)==null?void 0:ct.slice(1).toLowerCase())+`\r
	`;let Q=e[0].subject==="lý"&&wt(),be=ge(e[6]),F=[];for(let C=0;C<be.length;C+=1)F[C]=Tt(gt(e,be,C));return{c(){Q&&Q.c(),l=we(),s=A(),n=g("div"),i=g("div"),u=g("div"),f=g("div"),a=Z("Kiểm tra: "),E=Z(o),k=A(),T=g("input"),h=A(),d=g("div"),L=Z("Đáp Án: "),q=Z(j),D=A(),_=g("input"),B=A(),S=g("div"),N=g("div"),se=Z("Chủ đề: "),te=g("select"),le=g("option"),le.textContent=w,v=g("option"),v.textContent=I,p=g("option"),p.textContent=O,y=A(),U=g("div"),M=g("a"),M.textContent=P,Ce=A(),R=g("button"),R.textContent=Ne,We=A(),ne=g("a"),ze=Z("AZOTA"),Re=A(),me=g("div"),ye=Z(Ie),Fe=A(),_e=g("div"),Je=Z(`Lọc:\r
			`),X=g("select"),ie=g("option"),ie.textContent=et,ae=g("option"),ae.textContent=tt,oe=g("option"),oe.textContent=lt,re=g("option"),re.textContent=st,Qe=A();for(let C=0;C<F.length;C+=1)F[C].c();Le=A(),de=g("div"),Ke=Z(`Lọc:\r
			`),Y=g("select"),ue=g("option"),ue.textContent=nt,ce=g("option"),ce.textContent=it,fe=g("option"),fe.textContent=at,he=g("option"),he.textContent=ot,this.h()},l(C){const W=yt("svelte-ypjz89",Oe.head);Q&&Q.l(W),l=we(),W.forEach(b),s=H(C),n=m(C,"DIV",{class:!0});var x=V(n);i=m(x,"DIV",{class:!0});var qe=V(i);u=m(qe,"DIV",{class:!0});var J=V(u);f=m(J,"DIV",{class:!0});var pe=V(f);a=G(pe,"Kiểm tra: "),E=G(pe,o),k=H(pe),T=m(pe,"INPUT",{type:!0,class:!0}),pe.forEach(b),h=H(J),d=m(J,"DIV",{class:!0});var Ee=V(d);L=G(Ee,"Đáp Án: "),q=G(Ee,j),D=H(Ee),_=m(Ee,"INPUT",{type:!0,class:!0}),Ee.forEach(b),J.forEach(b),qe.forEach(b),B=H(x),S=m(x,"DIV",{class:!0});var ee=V(S);N=m(ee,"DIV",{class:!0});var Ge=V(N);se=G(Ge,"Chủ đề: "),te=m(Ge,"SELECT",{class:!0,"data-choose-theme":!0});var He=V(te);le=m(He,"OPTION",{"data-svelte-h":!0}),K(le)!=="svelte-5n7nt9"&&(le.textContent=w),v=m(He,"OPTION",{"data-svelte-h":!0}),K(v)!=="svelte-auqr5i"&&(v.textContent=I),p=m(He,"OPTION",{"data-svelte-h":!0}),K(p)!=="svelte-12w4yw3"&&(p.textContent=O),He.forEach(b),Ge.forEach(b),y=H(ee),U=m(ee,"DIV",{class:!0});var ke=V(U);M=m(ke,"A",{href:!0,class:!0,"data-svelte-h":!0}),K(M)!=="svelte-3qoxnl"&&(M.textContent=P),Ce=H(ke),R=m(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),K(R)!=="svelte-yayep5"&&(R.textContent=Ne),We=H(ke),ne=m(ke,"A",{class:!0,href:!0,target:!0,rel:!0});var ft=V(ne);ze=G(ft,"AZOTA"),ft.forEach(b),ke.forEach(b),Re=H(ee),me=m(ee,"DIV",{class:!0});var ht=V(me);ye=G(ht,Ie),ht.forEach(b),Fe=H(ee),_e=m(ee,"DIV",{class:!0});var Xe=V(_e);Je=G(Xe,`Lọc:\r
			`),X=m(Xe,"SELECT",{class:!0});var Te=V(X);ie=m(Te,"OPTION",{class:!0,"data-svelte-h":!0}),K(ie)!=="svelte-1cd8oab"&&(ie.textContent=et),ae=m(Te,"OPTION",{class:!0,"data-svelte-h":!0}),K(ae)!=="svelte-9jdmv"&&(ae.textContent=tt),oe=m(Te,"OPTION",{class:!0,"data-svelte-h":!0}),K(oe)!=="svelte-16mymxg"&&(oe.textContent=lt),re=m(Te,"OPTION",{class:!0,"data-svelte-h":!0}),K(re)!=="svelte-4cvul3"&&(re.textContent=st),Te.forEach(b),Xe.forEach(b),Qe=H(ee);for(let $e=0;$e<F.length;$e+=1)F[$e].l(ee);Le=H(ee),de=m(ee,"DIV",{class:!0});var Ye=V(de);Ke=G(Ye,`Lọc:\r
			`),Y=m(Ye,"SELECT",{class:!0});var je=V(Y);ue=m(je,"OPTION",{class:!0,"data-svelte-h":!0}),K(ue)!=="svelte-1cd8oab"&&(ue.textContent=nt),ce=m(je,"OPTION",{class:!0,"data-svelte-h":!0}),K(ce)!=="svelte-9jdmv"&&(ce.textContent=it),fe=m(je,"OPTION",{class:!0,"data-svelte-h":!0}),K(fe)!=="svelte-16mymxg"&&(fe.textContent=at),he=m(je,"OPTION",{class:!0,"data-svelte-h":!0}),K(he)!=="svelte-4cvul3"&&(he.textContent=ot),je.forEach(b),Ye.forEach(b),ee.forEach(b),x.forEach(b),this.h()},h(){c(T,"type","checkbox"),c(T,"class","toggle toggle-primary"),c(f,"class","flex flex-row gap-1"),c(_,"type","checkbox"),c(_,"class","toggle toggle-primary"),c(d,"class","flex flex-row gap-1"),c(u,"class","flex flex-row gap-4"),c(i,"class","fixed m-1 rounded-md bg-base-100 p-1"),le.__value="",$(le,le.__value),v.__value="dark",$(v,v.__value),p.__value="light",$(p,p.__value),c(te,"class","select select-primary select-sm"),c(te,"data-choose-theme",""),c(N,"class","mb-2 flex flex-row items-center justify-center gap-1"),c(M,"href","../"),c(M,"class","btn btn-primary"),c(R,"class","btn btn-error"),c(ne,"class","btn btn-secondary"),c(ne,"href",Pe=e[0].azota),c(ne,"target","_blank"),c(ne,"rel","noopener noreferrer"),c(U,"class","flex flex-row justify-center gap-1"),c(me,"class","my-4 text-center text-3xl font-bold"),c(ie,"class","text-base-content"),ie.__value="",$(ie,ie.__value),c(ae,"class","text-error"),ae.__value="wrong",$(ae,ae.__value),c(oe,"class","text-error"),oe.__value="unanswered",$(oe,oe.__value),c(re,"class","text-warning"),re.__value="marked",$(re,re.__value),c(X,"class","select select-primary select-sm"),e[4]===void 0&&dt(()=>e[13].call(X)),c(_e,"class",Ve="flex flex-row items-center gap-2 "+(e[4]==="wrong"||e[4]==="unanswered"?"text-error":e[4]==="marked"?"text-warning":"")),c(ue,"class","text-base-content"),ue.__value="",$(ue,ue.__value),c(ce,"class","text-error"),ce.__value="wrong",$(ce,ce.__value),c(fe,"class","text-error"),fe.__value="unanswered",$(fe,fe.__value),c(he,"class","text-warning"),he.__value="marked",$(he,he.__value),c(Y,"class","select select-primary select-sm"),e[4]===void 0&&dt(()=>e[18].call(Y)),c(de,"class",Ae="flex "+(e[4]==="wrong"||e[4]==="unanswered"?"text-error":e[4]==="marked"?"text-warning":"")),c(S,"class","mt-6 w-full max-w-[48rem] p-4"),c(n,"class","absolute left-0 right-0 top-0 flex flex-col items-center")},m(C,W){Q&&Q.m(Oe.head,null),r(Oe.head,l),z(C,s,W),z(C,n,W),r(n,i),r(i,u),r(u,f),r(f,a),r(f,E),r(f,k),r(f,T),T.checked=e[1],r(u,h),r(u,d),r(d,L),r(d,q),r(d,D),r(d,_),_.checked=e[5],r(n,B),r(n,S),r(S,N),r(N,se),r(N,te),r(te,le),r(te,v),r(te,p),r(S,y),r(S,U),r(U,M),r(U,Ce),r(U,R),r(U,We),r(U,ne),r(ne,ze),r(S,Re),r(S,me),r(me,ye),r(S,Fe),r(S,_e),r(_e,Je),r(_e,X),r(X,ie),r(X,ae),r(X,oe),r(X,re),Be(X,e[4],!0),r(S,Qe);for(let x=0;x<F.length;x+=1)F[x]&&F[x].m(S,null);r(S,Le),r(S,de),r(de,Ke),r(de,Y),r(Y,ue),r(Y,ce),r(Y,fe),r(Y,he),Be(Y,e[4],!0),Ze||(rt=[ve(T,"change",e[11]),ve(_,"change",e[12]),ve(R,"click",e[7]),ve(X,"change",e[13]),ve(Y,"change",e[18])],Ze=!0)},p(C,W){var x,qe;if(W[0]&1&&t!==(t=`\r
		LTS20050703 / 2023 / `+(C[0].subject[0].toUpperCase()+C[0].subject.slice(1))+" / "+((x=C[0].title)==null?void 0:x[0].toUpperCase())+((qe=C[0].title)==null?void 0:qe.slice(1).toLowerCase())+`\r
	`)&&(Oe.title=t),C[0].subject==="lý"?Q||(Q=wt(),Q.c(),Q.m(l.parentNode,l)):Q&&(Q.d(1),Q=null),W[0]&2&&o!==(o=C[1]?"Bật":"Tắt")&&Ue(E,o),W[0]&2&&(T.checked=C[1]),W[0]&32&&j!==(j=C[5]?"Hiện":"Ẩn")&&Ue(q,j),W[0]&32&&(_.checked=C[5]),W[0]&1&&Pe!==(Pe=C[0].azota)&&c(ne,"href",Pe),W[0]&1&&Ie!==(Ie=C[0].title+"")&&Ue(ye,Ie),W[0]&16&&Be(X,C[4]),W[0]&16&&Ve!==(Ve="flex flex-row items-center gap-2 "+(C[4]==="wrong"||C[4]==="unanswered"?"text-error":C[4]==="marked"?"text-warning":""))&&c(_e,"class",Ve),W[0]&895){be=ge(C[6]);let J;for(J=0;J<be.length;J+=1){const pe=gt(C,be,J);F[J]?F[J].p(pe,W):(F[J]=Tt(pe),F[J].c(),F[J].m(S,Le))}for(;J<F.length;J+=1)F[J].d(1);F.length=be.length}W[0]&16&&Be(Y,C[4]),W[0]&16&&Ae!==(Ae="flex "+(C[4]==="wrong"||C[4]==="unanswered"?"text-error":C[4]==="marked"?"text-warning":""))&&c(de,"class",Ae)},i:pt,o:pt,d(C){C&&(b(s),b(n)),Q&&Q.d(C),b(l),Me(F,C),Ze=!1,jt(rt)}}}function xe(e){let t=e.length,l;for(;t!=0;)l=Math.floor(Math.random()*t),t--,[e[t],e[l]]=[e[l],e[t]];return e}function Ft(e,t,l){let{data:s}=t,n="",i=!1,u=!1;function f(){let w=0;for(let v=0;v<s.sections.length;v+=1)w+=s.sections[v].questions.length;l(3,h=[]);for(let v=0;v<w;v+=1)h.push(-1);k(),E(),s.subject==="lý"&&location.reload()}let a=!1,o=[];function E(){const w=[];for(let v=0;v<L.length;v+=1){const I=[],p=L[v];for(let O=0;O<p.questions.length;O+=1){const y=p.questions[O],U=[];for(let M=0;M<y.answers.length;M+=1)U.push(y.answers[M].id);I.push({id:y.id,answers:U})}w.push({id:p.id,questions:I})}localStorage.setItem(`section${s.subject}${s.id}`,JSON.stringify(w))}function k(){const w=[];for(let I=0;I<s.sections.length;I+=1){const p=s.sections[I];p.shuffle&&(p.questions=xe(p.questions));for(let O=0;O<s.sections[I].questions.length;O+=1)p.questions[O].answers=xe(p.questions[O].answers);w.push(p)}l(6,L=xe(w));let v=0;for(let I=0;I<L.length;I+=1){const p=L[I];let O=null;p.shuffle||(O=p.title.match(/(\(\d+\))/g));for(let y=0;y<p.questions.length;y+=1)p.questions[y].fake_id=v,O&&(p.title=p.title.replace(O[y],`(${v+1})`)),v+=1}}function T(){if(u)for(let w=0;w<h.length;w+=1){const v=h[w];let I=-1;for(let p=0;p<s.sections.length;p+=1){const O=s.sections[p];for(let y=0;y<O.questions.length;y+=1)O.questions[y].id===w&&(I=O.questions[y].right)}v!==-1&&v!==I&&l(2,o[w]=!0,o)}localStorage.setItem(`inputs${s.subject}${s.id}`,h.join(",")),localStorage.setItem(`marked${s.subject}${s.id}`,o.join(",")),u?localStorage.setItem("live","true"):localStorage.removeItem("live")}let h=[];function d(w,v){h[w]===v&&l(3,h[w]=-1,h)}let L=[];St(()=>_t(this,null,function*(){var y,U,M;l(1,u=localStorage.getItem("live")!==null);const w=((y=localStorage.getItem(`inputs${s.subject}${s.id}`))!=null?y:"-1").split(",");let v=0;for(let P=0;P<s.sections.length;P+=1)v+=s.sections[P].questions.length;w.length<v&&w.push(...Array(v-w.length).fill("-1")),l(3,h=[]);for(let P=0;P<w.length;P+=1)h.push(parseInt(w[P]));let I=((U=localStorage.getItem(`marked${s.subject}${s.id}`))!=null?U:"").split(",");I.length<v&&I.push(...Array(v-I.length).fill("")),l(2,o=[]);for(let P=0;P<I.length;P+=1)o.push(I[P]==="true");l(10,a=!0),Lt.themeChange(!1);const p=(M=localStorage.getItem(`section${s.subject}${s.id}`))!=null?M:"[]",O=JSON.parse(p);if(O.length<s.sections.length?(k(),E()):j(O),s.subject==="lý"){let P=document.createElement("script");P.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",document.head.append(P)}}));function j(w){let v=0;for(let I=0;I<w.length;I+=1){const p=w[I],O={id:p.id,shuffle:s.sections[p.id].shuffle,title:s.sections[p.id].title,questions:[]};let y=null;O.shuffle||(y=O.title.match(/(\(\d+\))/g));for(let U=0;U<p.questions.length;U+=1){const M=p.questions[U];let P;for(let R=0;R<s.sections[p.id].questions.length;R+=1)s.sections[p.id].questions[R].id===M.id&&(P=s.sections[p.id].questions[R],P.fake_id=v,y&&(O.title=O.title.replace(y[U],`(${v+1})`)),v+=1);if(!P)continue;const Ce=P.answers;P.answers=[];for(let R=0;R<M.answers.length;R+=1){const Ne=M.answers[R];P.answers.push(Ce[Ne])}O.questions.push(P)}L.push(O)}}function q(w,v){switch(w){case"":return!0;case"wrong":for(let I=0;I<v.questions.length;I+=1){const p=v.questions[I];if(!(h[p.id]===-1||h[p.id]===p.right))return!0}return!1;case"unanswered":for(let I=0;I<v.questions.length;I+=1){const p=v.questions[I];if(h[p.id]===-1)return!0}return!1;case"marked":for(let I=0;I<v.questions.length;I+=1){const p=v.questions[I];if(o[p.id])return!0}return!1}}const D=[[]];function _(){u=this.checked,l(1,u)}function B(){i=this.checked,l(5,i)}function S(){n=vt(this),l(4,n)}function N(w){o[w.id]=this.checked,l(2,o)}const se=(w,v)=>d(w.id,v.id);function te(w){h[w.id]=this.__value,l(3,h)}function le(){n=vt(this),l(4,n)}return e.$$set=w=>{"data"in w&&l(0,s=w.data)},e.$$.update=()=>{e.$$.dirty[0]&1038&&a&&T()},[s,u,o,h,n,i,L,f,d,q,a,_,B,S,N,se,te,D,le]}class Xt extends Nt{constructor(t){super(),Pt(this,t,Ft,Rt,Ot,{data:0},null,[-1,-1])}}export{Xt as component};
