import{S as _t,i as ht,s as dt,k as b,a as U,l as k,m as E,c as H,h as u,J as pt,n as r,b as D,G as n,H as Ue,o as vt,q,r as N,M as ae,u as de,N as Le,O as et,P as tt,Q as be,L as He,e as ke,R as mt,T as ye,U as Re}from"../chunks/index.54149de5.js";import{t as gt,v as lt}from"../chunks/index.f71d35e8.js";function st(e,t,l){const s=e.slice();return s[23]=t[l],s[24]=t,s[25]=l,s}function at(e,t,l){const s=e.slice();return s[26]=t[l],s[28]=l,s}function it(e,t,l){const s=e.slice();return s[29]=t[l],s[28]=l,s}function nt(e){let t,l,s,i,a=e[1]?"Bật":"Tắt",o,c,d,C,p,w,m=e[5]?"Hiện":"Ẩn",v,f,O,I,g;return{c(){t=b("div"),l=b("div"),s=b("div"),i=q("Kiểm tra: "),o=q(a),c=U(),d=b("input"),C=U(),p=b("div"),w=q("Đáp Án: "),v=q(m),f=U(),O=b("input"),this.h()},l(A){t=k(A,"DIV",{class:!0});var h=E(t);l=k(h,"DIV",{class:!0});var V=E(l);s=k(V,"DIV",{class:!0});var L=E(s);i=N(L,"Kiểm tra: "),o=N(L,a),c=H(L),d=k(L,"INPUT",{type:!0,class:!0}),L.forEach(u),C=H(V),p=k(V,"DIV",{class:!0});var j=E(p);w=N(j,"Đáp Án: "),v=N(j,m),f=H(j),O=k(j,"INPUT",{type:!0,class:!0}),j.forEach(u),V.forEach(u),h.forEach(u),this.h()},h(){r(d,"type","checkbox"),r(d,"class","toggle toggle-primary"),r(s,"class","flex flex-row gap-1"),r(O,"type","checkbox"),r(O,"class","toggle toggle-primary"),r(p,"class","flex flex-row gap-1"),r(l,"class","flex flex-row gap-4"),r(t,"class","fixed m-1 p-1 rounded-md bg-base-100")},m(A,h){D(A,t,h),n(t,l),n(l,s),n(s,i),n(s,o),n(s,c),n(s,d),d.checked=e[1],n(l,C),n(l,p),n(p,w),n(p,v),n(p,f),n(p,O),O.checked=e[5],I||(g=[ae(d,"change",e[11]),ae(O,"change",e[12])],I=!0)},p(A,h){h&2&&a!==(a=A[1]?"Bật":"Tắt")&&de(o,a),h&2&&(d.checked=A[1]),h&32&&m!==(m=A[5]?"Hiện":"Ẩn")&&de(v,m),h&32&&(O.checked=A[5])},d(A){A&&u(t),I=!1,Le(g)}}}function bt(e){let t,l,s,i,a,o,c,d,C,p,w,m,v,f,O,I,g,A,h,V,L,j,J,oe,ue,T=e[0].subject[0].toUpperCase()+e[0].subject.slice(1)+"",P,B,X,M=e[0].title+"",R,se,W,ie,z,K,we,Y,Ie,G,Ee,F,Ce,pe,ve,ne,$,Oe,Z,x,Te,ee,Ae,te,qe,le,Ne,me,je,ze,re=e[6],Q=[];for(let _=0;_<re.length;_+=1)Q[_]=ut(st(e,re,_));return{c(){t=b("div"),l=b("a"),s=q("Quay lại"),i=U(),a=b("button"),o=q("Xóa"),c=U(),d=b("a"),C=q("AZOTA"),w=U(),m=b("div"),v=q("Chủ đề: "),f=b("select"),O=b("option"),I=q("Hệ thống"),g=b("option"),A=q("Tối"),h=b("option"),V=q("Sáng"),L=U(),j=b("div"),J=q("In Real Xperience / 2023 "),oe=q(lt),ue=q(" / "),P=q(T),B=U(),X=b("div"),R=q(M),se=U(),W=b("div"),ie=q(`Lọc:
				`),z=b("select"),K=b("option"),we=q("Hiện tất cả"),Y=b("option"),Ie=q("Chỉ hiện câu sai"),G=b("option"),Ee=q("Chỉ hiện câu chưa làm"),F=b("option"),Ce=q("Chỉ hiện câu đã đánh dấu xem lại"),ve=U();for(let _=0;_<Q.length;_+=1)Q[_].c();ne=U(),$=b("div"),Oe=q(`Lọc:
				`),Z=b("select"),x=b("option"),Te=q("Hiện tất cả"),ee=b("option"),Ae=q("Chỉ hiện câu sai"),te=b("option"),qe=q("Chỉ hiện câu chưa làm"),le=b("option"),Ne=q("Chỉ hiện câu đã đánh dấu xem lại"),this.h()},l(_){t=k(_,"DIV",{class:!0});var S=E(t);l=k(S,"A",{href:!0,class:!0});var y=E(l);s=N(y,"Quay lại"),y.forEach(u),i=H(S),a=k(S,"BUTTON",{class:!0});var fe=E(a);o=N(fe,"Xóa"),fe.forEach(u),c=H(S),d=k(S,"A",{class:!0,href:!0,target:!0,rel:!0});var Qe=E(d);C=N(Qe,"AZOTA"),Qe.forEach(u),S.forEach(u),w=H(_),m=k(_,"DIV",{class:!0});var De=E(m);v=N(De,"Chủ đề: "),f=k(De,"SELECT",{class:!0,"data-choose-theme":!0});var ge=E(f);O=k(ge,"OPTION",{});var Be=E(O);I=N(Be,"Hệ thống"),Be.forEach(u),g=k(ge,"OPTION",{});var We=E(g);A=N(We,"Tối"),We.forEach(u),h=k(ge,"OPTION",{});var Xe=E(h);V=N(Xe,"Sáng"),Xe.forEach(u),ge.forEach(u),De.forEach(u),L=H(_),j=k(_,"DIV",{class:!0});var ce=E(j);J=N(ce,"In Real Xperience / 2023 "),oe=N(ce,lt),ue=N(ce," / "),P=N(ce,T),ce.forEach(u),B=H(_),X=k(_,"DIV",{class:!0});var Ze=E(X);R=N(Ze,M),Ze.forEach(u),se=H(_),W=k(_,"DIV",{class:!0});var Se=E(W);ie=N(Se,`Lọc:
				`),z=k(Se,"SELECT",{class:!0});var _e=E(z);K=k(_e,"OPTION",{class:!0});var Me=E(K);we=N(Me,"Hiện tất cả"),Me.forEach(u),Y=k(_e,"OPTION",{class:!0});var Je=E(Y);Ie=N(Je,"Chỉ hiện câu sai"),Je.forEach(u),G=k(_e,"OPTION",{class:!0});var Ke=E(G);Ee=N(Ke,"Chỉ hiện câu chưa làm"),Ke.forEach(u),F=k(_e,"OPTION",{class:!0});var Ye=E(F);Ce=N(Ye,"Chỉ hiện câu đã đánh dấu xem lại"),Ye.forEach(u),_e.forEach(u),Se.forEach(u),ve=H(_);for(let Pe=0;Pe<Q.length;Pe+=1)Q[Pe].l(_);ne=H(_),$=k(_,"DIV",{class:!0});var Ve=E($);Oe=N(Ve,`Lọc:
				`),Z=k(Ve,"SELECT",{class:!0});var he=E(Z);x=k(he,"OPTION",{class:!0});var Ge=E(x);Te=N(Ge,"Hiện tất cả"),Ge.forEach(u),ee=k(he,"OPTION",{class:!0});var Fe=E(ee);Ae=N(Fe,"Chỉ hiện câu sai"),Fe.forEach(u),te=k(he,"OPTION",{class:!0});var $e=E(te);qe=N($e,"Chỉ hiện câu chưa làm"),$e.forEach(u),le=k(he,"OPTION",{class:!0});var xe=E(le);Ne=N(xe,"Chỉ hiện câu đã đánh dấu xem lại"),xe.forEach(u),he.forEach(u),Ve.forEach(u),this.h()},h(){r(l,"href","../"),r(l,"class","btn btn-primary"),r(a,"class","btn btn-error"),r(d,"class","btn btn-secondary"),r(d,"href",p=e[0].azota),r(d,"target","_blank"),r(d,"rel","noopener noreferrer"),r(t,"class","flex flex-row justify-center gap-1"),O.__value="",O.value=O.__value,g.__value="dark",g.value=g.__value,h.__value="light",h.value=h.__value,r(f,"class","select select-primary select-sm"),r(f,"data-choose-theme",""),r(m,"class","flex flex-row justify-center items-center gap-1 mt-1"),r(j,"class","text-center mt-4"),r(X,"class","text-center text-3xl font-bold my-4"),r(K,"class","text-base-content"),K.__value="",K.value=K.__value,r(Y,"class","text-error"),Y.__value="wrong",Y.value=Y.__value,r(G,"class","text-error"),G.__value="unanswered",G.value=G.__value,r(F,"class","text-warning"),F.__value="marked",F.value=F.__value,r(z,"class","select select-primary select-sm"),e[4]===void 0&&tt(()=>e[13].call(z)),r(W,"class",pe=e[4]==="wrong"||e[4]==="unanswered"?"text-error":e[4]==="marked"?"text-warning":""),r(x,"class","text-base-content"),x.__value="",x.value=x.__value,r(ee,"class","text-error"),ee.__value="wrong",ee.value=ee.__value,r(te,"class","text-error"),te.__value="unanswered",te.value=te.__value,r(le,"class","text-warning"),le.__value="marked",le.value=le.__value,r(Z,"class","select select-primary select-sm"),e[4]===void 0&&tt(()=>e[18].call(Z)),r($,"class",me=e[4]==="wrong"||e[4]==="unanswered"?"text-error":e[4]==="marked"?"text-warning":"")},m(_,S){D(_,t,S),n(t,l),n(l,s),n(t,i),n(t,a),n(a,o),n(t,c),n(t,d),n(d,C),D(_,w,S),D(_,m,S),n(m,v),n(m,f),n(f,O),n(O,I),n(f,g),n(g,A),n(f,h),n(h,V),D(_,L,S),D(_,j,S),n(j,J),n(j,oe),n(j,ue),n(j,P),D(_,B,S),D(_,X,S),n(X,R),D(_,se,S),D(_,W,S),n(W,ie),n(W,z),n(z,K),n(K,we),n(z,Y),n(Y,Ie),n(z,G),n(G,Ee),n(z,F),n(F,Ce),be(z,e[4],!0),D(_,ve,S);for(let y=0;y<Q.length;y+=1)Q[y]&&Q[y].m(_,S);D(_,ne,S),D(_,$,S),n($,Oe),n($,Z),n(Z,x),n(x,Te),n(Z,ee),n(ee,Ae),n(Z,te),n(te,qe),n(Z,le),n(le,Ne),be(Z,e[4],!0),je||(ze=[ae(a,"click",e[8]),ae(z,"change",e[13]),ae(Z,"change",e[18])],je=!0)},p(_,S){if(S&1&&p!==(p=_[0].azota)&&r(d,"href",p),S&1&&T!==(T=_[0].subject[0].toUpperCase()+_[0].subject.slice(1)+"")&&de(P,T),S&1&&M!==(M=_[0].title+"")&&de(R,M),S&16&&be(z,_[4]),S&16&&pe!==(pe=_[4]==="wrong"||_[4]==="unanswered"?"text-error":_[4]==="marked"?"text-warning":"")&&r(W,"class",pe),S&638){re=_[6];let y;for(y=0;y<re.length;y+=1){const fe=st(_,re,y);Q[y]?Q[y].p(fe,S):(Q[y]=ut(fe),Q[y].c(),Q[y].m(ne.parentNode,ne))}for(;y<Q.length;y+=1)Q[y].d(1);Q.length=re.length}S&16&&be(Z,_[4]),S&16&&me!==(me=_[4]==="wrong"||_[4]==="unanswered"?"text-error":_[4]==="marked"?"text-warning":"")&&r($,"class",me)},d(_){_&&u(t),_&&u(w),_&&u(m),_&&u(L),_&&u(j),_&&u(B),_&&u(X),_&&u(se),_&&u(W),_&&u(ve),He(Q,_),_&&u(ne),_&&u($),je=!1,Le(ze)}}}function kt(e){let t,l,s,i,a=e[0].title+"",o,c,d;function C(m,v){return m[0].azota?Ct:Et}let p=C(e),w=p(e);return{c(){t=b("a"),l=q("Quay lại"),s=U(),i=b("div"),o=q(a),c=U(),w.c(),d=ke(),this.h()},l(m){t=k(m,"A",{href:!0,class:!0});var v=E(t);l=N(v,"Quay lại"),v.forEach(u),s=H(m),i=k(m,"DIV",{class:!0});var f=E(i);o=N(f,a),f.forEach(u),c=H(m),w.l(m),d=ke(),this.h()},h(){r(t,"href","../"),r(t,"class","btn btn-primary"),r(i,"class","text-center text-3xl font-bold my-4")},m(m,v){D(m,t,v),n(t,l),D(m,s,v),D(m,i,v),n(i,o),D(m,c,v),w.m(m,v),D(m,d,v)},p(m,v){v&1&&a!==(a=m[0].title+"")&&de(o,a),p===(p=C(m))&&w?w.p(m,v):(w.d(1),w=p(m),w&&(w.c(),w.m(d.parentNode,d)))},d(m){m&&u(t),m&&u(s),m&&u(i),m&&u(c),w.d(m),m&&u(d)}}}function wt(e){let t,l,s=e[29].replace("*","")+"",i,a;return{c(){t=b("div"),l=new ye(!1),i=U(),this.h()},l(o){t=k(o,"DIV",{class:!0});var c=E(t);l=Re(c,!1),i=H(c),c.forEach(u),this.h()},h(){l.a=i,r(t,"class",a=e[29].startsWith("*")&&e[5]?"text-success":"")},m(o,c){D(o,t,c),l.m(s,t),n(t,i)},p(o,c){c&64&&s!==(s=o[29].replace("*","")+"")&&l.p(s),c&96&&a!==(a=o[29].startsWith("*")&&o[5]?"text-success":"")&&r(t,"class",a)},d(o){o&&u(t)}}}function It(e){let t,l=e[25]+1+"",s,i,a,o,c=e[29].replace("*","")+"",d,C;return{c(){t=q("Câu "),s=q(l),i=q(`:
								`),a=b("span"),o=new ye(!1),d=U(),this.h()},l(p){t=N(p,"Câu "),s=N(p,l),i=N(p,`:
								`),a=k(p,"SPAN",{class:!0});var w=E(a);o=Re(w,!1),d=H(w),w.forEach(u),this.h()},h(){o.a=d,r(a,"class",C=e[29].startsWith("*")&&e[5]?"text-success":"")},m(p,w){D(p,t,w),D(p,s,w),D(p,i,w),D(p,a,w),o.m(c,a),n(a,d)},p(p,w){w&64&&c!==(c=p[29].replace("*","")+"")&&o.p(c),w&96&&C!==(C=p[29].startsWith("*")&&p[5]?"text-success":"")&&r(a,"class",C)},d(p){p&&u(t),p&&u(s),p&&u(i),p&&u(a)}}}function rt(e){let t;function l(a,o){return a[28]===0?It:wt}let i=l(e)(e);return{c(){i.c(),t=ke()},l(a){i.l(a),t=ke()},m(a,o){i.m(a,o),D(a,t,o)},p(a,o){i.p(a,o)},d(a){i.d(a),a&&u(t)}}}function ot(e){let t,l,s,i,a=!1,o,c,d,C=["A","B","C","D"][e[28]]+"",p,w,m,v=e[26].answer+"",f,O,I,g,A;function h(){return e[15](e[23],e[26])}function V(){e[16].call(l,e[23])}return I=mt(e[17][0],[e[25]]),{c(){t=b("div"),l=b("input"),c=U(),d=b("label"),p=q(C),w=q(". "),m=new ye(!1),this.h()},l(L){t=k(L,"DIV",{class:!0});var j=E(t);l=k(j,"INPUT",{class:!0,type:!0,name:!0,id:!0}),c=H(j),d=k(j,"LABEL",{for:!0});var J=E(d);p=N(J,C),w=N(J,". "),m=Re(J,!1),J.forEach(u),j.forEach(u),this.h()},h(){r(l,"class","input input-primary input-xs"),r(l,"type","radio"),r(l,"name",s=`${e[23].id}`),l.__value=i=e[26].id,l.value=l.__value,r(l,"id",o=`${e[23].id}${e[26].id}`),m.a=null,r(d,"for",f=`${e[23].id}${e[26].id}`),r(t,"class",O="flex flex-row gap-4 m-3 items-center "+(e[5]&&e[26].id===e[23].right?"text-success":"")+" "+((e[1]||e[5])&&e[3][e[23].id]===e[26].id?e[26].id===e[23].right?"text-success":"text-error":"")),I.p(l)},m(L,j){D(L,t,j),n(t,l),l.checked=l.__value===e[3][e[23].id],n(t,c),n(t,d),n(d,p),n(d,w),m.m(v,d),g||(A=[ae(l,"click",h),ae(l,"change",V)],g=!0)},p(L,j){e=L,j&64&&s!==(s=`${e[23].id}`)&&r(l,"name",s),j&64&&i!==(i=e[26].id)&&(l.__value=i,l.value=l.__value,a=!0),j&64&&o!==(o=`${e[23].id}${e[26].id}`)&&r(l,"id",o),(a||j&72)&&(l.checked=l.__value===e[3][e[23].id]),j&64&&v!==(v=e[26].answer+"")&&m.p(v),j&64&&f!==(f=`${e[23].id}${e[26].id}`)&&r(d,"for",f),j&106&&O!==(O="flex flex-row gap-4 m-3 items-center "+(e[5]&&e[26].id===e[23].right?"text-success":"")+" "+((e[1]||e[5])&&e[3][e[23].id]===e[26].id?e[26].id===e[23].right?"text-success":"text-error":""))&&r(t,"class",O),j&64&&I.u([e[25]])},d(L){L&&u(t),I.r(),g=!1,Le(A)}}}function ut(e){let t,l,s,i,a,o,c,d,C,p,w;function m(){e[14].call(a,e[23])}let v=e[23].question.split("<br>"),f=[];for(let g=0;g<v.length;g+=1)f[g]=rt(it(e,v,g));let O=e[23].answers,I=[];for(let g=0;g<O.length;g+=1)I[g]=ot(at(e,O,g));return{c(){t=b("div"),l=b("br"),s=U(),i=b("div"),a=b("input"),o=U();for(let g=0;g<f.length;g+=1)f[g].c();d=U();for(let g=0;g<I.length;g+=1)I[g].c();this.h()},l(g){t=k(g,"DIV",{class:!0});var A=E(t);l=k(A,"BR",{}),s=H(A),i=k(A,"DIV",{class:!0});var h=E(i);a=k(h,"INPUT",{type:!0,class:!0}),o=H(h);for(let V=0;V<f.length;V+=1)f[V].l(h);h.forEach(u),d=H(A);for(let V=0;V<I.length;V+=1)I[V].l(A);A.forEach(u),this.h()},h(){r(a,"type","checkbox"),r(a,"class","toggle toggle-warning"),r(i,"class",c=e[2][e[23].id]?"text-warning":""),r(t,"class",C=e[4]==="wrong"?e[3][e[23].id]!==-1&&e[3][e[23].id]!==e[23].right?"":"hidden":e[4]==="unanswered"?e[3][e[23].id]!==-1?"hidden":"":e[4]==="marked"?e[2][e[23].id]?"":"hidden":"")},m(g,A){D(g,t,A),n(t,l),n(t,s),n(t,i),n(i,a),a.checked=e[2][e[23].id],n(i,o);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(i,null);n(t,d);for(let h=0;h<I.length;h+=1)I[h]&&I[h].m(t,null);p||(w=ae(a,"change",m),p=!0)},p(g,A){if(e=g,A&68&&(a.checked=e[2][e[23].id]),A&96){v=e[23].question.split("<br>");let h;for(h=0;h<v.length;h+=1){const V=it(e,v,h);f[h]?f[h].p(V,A):(f[h]=rt(V),f[h].c(),f[h].m(i,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=v.length}if(A&68&&c!==(c=e[2][e[23].id]?"text-warning":"")&&r(i,"class",c),A&618){O=e[23].answers;let h;for(h=0;h<O.length;h+=1){const V=at(e,O,h);I[h]?I[h].p(V,A):(I[h]=ot(V),I[h].c(),I[h].m(t,null))}for(;h<I.length;h+=1)I[h].d(1);I.length=O.length}A&92&&C!==(C=e[4]==="wrong"?e[3][e[23].id]!==-1&&e[3][e[23].id]!==e[23].right?"":"hidden":e[4]==="unanswered"?e[3][e[23].id]!==-1?"hidden":"":e[4]==="marked"?e[2][e[23].id]?"":"hidden":"")&&r(t,"class",C)},d(g){g&&u(t),He(f,g),He(I,g),p=!1,w()}}}function Et(e){let t,l;return{c(){t=b("div"),l=q("HIỆN TẠI CHƯA CÓ AZOTA, QUAY LẠI SAU!"),this.h()},l(s){t=k(s,"DIV",{class:!0});var i=E(t);l=N(i,"HIỆN TẠI CHƯA CÓ AZOTA, QUAY LẠI SAU!"),i.forEach(u),this.h()},h(){r(t,"class","text-3xl text-center")},m(s,i){D(s,t,i),n(t,l)},p:Ue,d(s){s&&u(t)}}}function Ct(e){let t,l,s,i,a,o=e[0].word&&ft(e);return{c(){t=b("div"),l=b("a"),s=q("AZOTA"),a=U(),o&&o.c(),this.h()},l(c){t=k(c,"DIV",{class:!0});var d=E(t);l=k(d,"A",{class:!0,href:!0,target:!0,rel:!0});var C=E(l);s=N(C,"AZOTA"),C.forEach(u),a=H(d),o&&o.l(d),d.forEach(u),this.h()},h(){r(l,"class","btn btn-secondary btn-lg"),r(l,"href",i=e[0].azota),r(l,"target","_blank"),r(l,"rel","noopener noreferrer"),r(t,"class","flex justify-center gap-1")},m(c,d){D(c,t,d),n(t,l),n(l,s),n(t,a),o&&o.m(t,null)},p(c,d){d&1&&i!==(i=c[0].azota)&&r(l,"href",i),c[0].word?o?o.p(c,d):(o=ft(c),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(c){c&&u(t),o&&o.d()}}}function ft(e){let t,l,s;return{c(){t=b("a"),l=q("WORD"),this.h()},l(i){t=k(i,"A",{class:!0,href:!0,target:!0,rel:!0});var a=E(t);l=N(a,"WORD"),a.forEach(u),this.h()},h(){r(t,"class","btn btn-primary btn-lg"),r(t,"href",s=e[0].word),r(t,"target","_blank"),r(t,"rel","noopener noreferrer")},m(i,a){D(i,t,a),n(t,l)},p(i,a){a&1&&s!==(s=i[0].word)&&r(t,"href",s)},d(i){i&&u(t)}}}function Ot(e){var w,m;let t,l,s,i,a,o,c=!e[7]&&nt(e);function d(v,f){return v[7]?kt:bt}let C=d(e),p=C(e);return document.title=o=`
		In Real Xperience / 2023 / `+(e[0].subject[0].toUpperCase()+e[0].subject.slice(1))+" / "+((w=e[0].title)==null?void 0:w[0].toUpperCase())+((m=e[0].title)==null?void 0:m.slice(1).toLowerCase()),{c(){t=b("div"),c&&c.c(),l=U(),s=b("div"),p.c(),a=U(),this.h()},l(v){t=k(v,"DIV",{class:!0});var f=E(t);c&&c.l(f),l=H(f),s=k(f,"DIV",{class:!0});var O=E(s);p.l(O),O.forEach(u),f.forEach(u),a=H(v),pt("svelte-hfbniz",document.head).forEach(u),this.h()},h(){r(s,"class",i="w-full max-w-[48rem] p-4 "+(e[7]?"":"mt-8")),r(t,"class","absolute top-0 left-0 right-0 flex flex-col items-center")},m(v,f){D(v,t,f),c&&c.m(t,null),n(t,l),n(t,s),p.m(s,null),D(v,a,f)},p(v,[f]){var O,I;v[7]?c&&(c.d(1),c=null):c?c.p(v,f):(c=nt(v),c.c(),c.m(t,l)),C===(C=d(v))&&p?p.p(v,f):(p.d(1),p=C(v),p&&(p.c(),p.m(s,null))),f&128&&i!==(i="w-full max-w-[48rem] p-4 "+(v[7]?"":"mt-8"))&&r(s,"class",i),f&1&&o!==(o=`
		In Real Xperience / 2023 / `+(v[0].subject[0].toUpperCase()+v[0].subject.slice(1))+" / "+((O=v[0].title)==null?void 0:O[0].toUpperCase())+((I=v[0].title)==null?void 0:I.slice(1).toLowerCase()))&&(document.title=o)},i:Ue,o:Ue,d(v){v&&u(t),c&&c.d(),p.d(),v&&u(a)}}}function ct(e){let t=e.length,l;for(;t!=0;)l=Math.floor(Math.random()*t),t--,[e[t],e[l]]=[e[l],e[t]];return e}function Tt(e,t,l){let{data:s}=t,i="",a=!1,o=!1;function c(){l(3,f=[]),m(),w()}let d=!1,C=[],p=[];function w(){const T=[];for(let P=0;P<I.length;P+=1){const B=I[P],X=B.answers,M=[];for(let R=0;R<X.length;R+=1)M.push(X[R].id);T.push({id:B.id,answers:M})}localStorage.setItem(`question${s.subject}${s.id}`,JSON.stringify(T))}function m(){const T=[];for(let P=0;P<s.questions.length;P+=1){const B=structuredClone(s.questions[P]);B.answers=ct(B.answers),T.push(B)}l(6,I=ct(T))}function v(){if(o)for(let T=0;T<f.length;T+=1){const P=f[T];p[T]===-1&&P!==-1&&P!==s.questions[T].right&&(p[T]=P,l(2,C[T]=!0,C))}localStorage.setItem(`inputs${s.subject}${s.id}`,f.join(",")),localStorage.setItem(`marked${s.subject}${s.id}`,C.join(",")),o?localStorage.setItem("live","true"):localStorage.removeItem("live")}let f=[];function O(T,P){f[T]===P&&l(3,f[T]=-1,f)}let I=[];vt(()=>{var X,M;l(1,o=localStorage.getItem("live")!==null);const T=((X=localStorage.getItem(`inputs${s.subject}${s.id}`))!=null?X:"-1").split(",");T.length<s.questions.length&&T.push(...Array(s.questions.length-T.length).fill("-1")),l(3,f=[]);for(let R=0;R<T.length;R+=1)f.push(parseInt(T[R]));p=structuredClone(f);let P=((M=localStorage.getItem(`marked${s.subject}${s.id}`))!=null?M:"").split(",");P.length<s.questions.length&&P.push(...Array(s.questions.length-P.length).fill("")),l(2,C=[]);for(let R=0;R<P.length;R+=1)C.push(P[R]==="true");l(10,d=!0);const B=localStorage.getItem(`question${s.subject}${s.id}`);if(B){l(6,I=[]);const R=JSON.parse(B);for(let se=0;se<R.length;se+=1){const W=R[se],ie=structuredClone(s.questions[W.id]);ie.answers=[];for(let z=0;z<W.answers.length;z+=1)ie.answers.push(s.questions[W.id].answers[W.answers[z]]);I.push(ie)}}else m(),w();gt.themeChange(!1),I.length<2&&l(7,g=!0)});let g=!1;const A=[[]];function h(){o=this.checked,l(1,o)}function V(){a=this.checked,l(5,a)}function L(){i=et(this),l(4,i)}function j(T){C[T.id]=this.checked,l(2,C)}const J=(T,P)=>O(T.id,P.id);function oe(T){f[T.id]=this.__value,l(3,f)}function ue(){i=et(this),l(4,i)}return e.$$set=T=>{"data"in T&&l(0,s=T.data)},e.$$.update=()=>{e.$$.dirty&1038&&d&&v()},[s,o,C,f,i,a,I,g,c,O,d,h,V,L,j,J,oe,A,ue]}class Nt extends _t{constructor(t){super(),ht(this,t,Tt,Ot,dt,{data:0})}}export{Nt as default};
