import{S as _t,i as ht,s as dt,k,a as U,l as w,m as C,c as H,h as u,J as pt,n as r,b as D,G as n,H as Ue,o as vt,q as A,r as N,M as ae,u as de,N as Le,O as et,P as tt,Q as be,L as He,e as ke,R as mt,T as ye,U as Re}from"../chunks/index.54149de5.js";import{t as gt,v as lt}from"../chunks/index.ced78214.js";function st(e,t,l){const s=e.slice();return s[23]=t[l],s[24]=t,s[25]=l,s}function at(e,t,l){const s=e.slice();return s[26]=t[l],s[28]=l,s}function it(e,t,l){const s=e.slice();return s[29]=t[l],s[28]=l,s}function nt(e){let t,l,s,i,a=e[1]?"Bật":"Tắt",o,v,h,g,f,I,m=e[5]?"Hiện":"Ẩn",p,c,O,E,b;return{c(){t=k("div"),l=k("div"),s=k("div"),i=A("Kiểm tra: "),o=A(a),v=U(),h=k("input"),g=U(),f=k("div"),I=A("Đáp Án: "),p=A(m),c=U(),O=k("input"),this.h()},l(q){t=w(q,"DIV",{class:!0});var d=C(t);l=w(d,"DIV",{class:!0});var V=C(l);s=w(V,"DIV",{class:!0});var L=C(s);i=N(L,"Kiểm tra: "),o=N(L,a),v=H(L),h=w(L,"INPUT",{type:!0,class:!0}),L.forEach(u),g=H(V),f=w(V,"DIV",{class:!0});var j=C(f);I=N(j,"Đáp Án: "),p=N(j,m),c=H(j),O=w(j,"INPUT",{type:!0,class:!0}),j.forEach(u),V.forEach(u),d.forEach(u),this.h()},h(){r(h,"type","checkbox"),r(h,"class","toggle toggle-primary"),r(s,"class","flex flex-row gap-1"),r(O,"type","checkbox"),r(O,"class","toggle toggle-primary"),r(f,"class","flex flex-row gap-1"),r(l,"class","flex flex-row gap-4"),r(t,"class","fixed m-1 p-1 rounded-md bg-base-100")},m(q,d){D(q,t,d),n(t,l),n(l,s),n(s,i),n(s,o),n(s,v),n(s,h),h.checked=e[1],n(l,g),n(l,f),n(f,I),n(f,p),n(f,c),n(f,O),O.checked=e[5],E||(b=[ae(h,"change",e[11]),ae(O,"change",e[12])],E=!0)},p(q,d){d&2&&a!==(a=q[1]?"Bật":"Tắt")&&de(o,a),d&2&&(h.checked=q[1]),d&32&&m!==(m=q[5]?"Hiện":"Ẩn")&&de(p,m),d&32&&(O.checked=q[5])},d(q){q&&u(t),E=!1,Le(b)}}}function bt(e){let t,l,s,i,a,o,v,h,g,f,I,m,p,c,O,E,b,q,d,V,L,j,J,oe,ue,T=e[0].subject[0].toUpperCase()+e[0].subject.slice(1)+"",P,B,X,M=e[0].title+"",R,se,W,ie,z,K,we,Y,Ie,G,Ee,F,Ce,pe,ve,ne,$,Oe,Z,x,Te,ee,qe,te,Ae,le,Ne,me,je,ze,re=e[6],Q=[];for(let _=0;_<re.length;_+=1)Q[_]=ut(st(e,re,_));return{c(){t=k("div"),l=k("a"),s=A("Quay lại"),i=U(),a=k("button"),o=A("Xóa"),v=U(),h=k("a"),g=A("AZOTA"),I=U(),m=k("div"),p=A("Chủ đề: "),c=k("select"),O=k("option"),E=A("Hệ thống"),b=k("option"),q=A("Tối"),d=k("option"),V=A("Sáng"),L=U(),j=k("div"),J=A("In Real Xperience / 2023 "),oe=A(lt),ue=A(" / "),P=A(T),B=U(),X=k("div"),R=A(M),se=U(),W=k("div"),ie=A(`Lọc:
				`),z=k("select"),K=k("option"),we=A("Hiện tất cả"),Y=k("option"),Ie=A("Chỉ hiện câu sai"),G=k("option"),Ee=A("Chỉ hiện câu chưa làm"),F=k("option"),Ce=A("Chỉ hiện câu đã đánh dấu xem lại"),ve=U();for(let _=0;_<Q.length;_+=1)Q[_].c();ne=U(),$=k("div"),Oe=A(`Lọc:
				`),Z=k("select"),x=k("option"),Te=A("Hiện tất cả"),ee=k("option"),qe=A("Chỉ hiện câu sai"),te=k("option"),Ae=A("Chỉ hiện câu chưa làm"),le=k("option"),Ne=A("Chỉ hiện câu đã đánh dấu xem lại"),this.h()},l(_){t=w(_,"DIV",{class:!0});var S=C(t);l=w(S,"A",{href:!0,class:!0});var y=C(l);s=N(y,"Quay lại"),y.forEach(u),i=H(S),a=w(S,"BUTTON",{class:!0});var fe=C(a);o=N(fe,"Xóa"),fe.forEach(u),v=H(S),h=w(S,"A",{class:!0,href:!0,target:!0,rel:!0});var Qe=C(h);g=N(Qe,"AZOTA"),Qe.forEach(u),S.forEach(u),I=H(_),m=w(_,"DIV",{class:!0});var De=C(m);p=N(De,"Chủ đề: "),c=w(De,"SELECT",{class:!0,"data-choose-theme":!0});var ge=C(c);O=w(ge,"OPTION",{});var Be=C(O);E=N(Be,"Hệ thống"),Be.forEach(u),b=w(ge,"OPTION",{});var We=C(b);q=N(We,"Tối"),We.forEach(u),d=w(ge,"OPTION",{});var Xe=C(d);V=N(Xe,"Sáng"),Xe.forEach(u),ge.forEach(u),De.forEach(u),L=H(_),j=w(_,"DIV",{class:!0});var ce=C(j);J=N(ce,"In Real Xperience / 2023 "),oe=N(ce,lt),ue=N(ce," / "),P=N(ce,T),ce.forEach(u),B=H(_),X=w(_,"DIV",{class:!0});var Ze=C(X);R=N(Ze,M),Ze.forEach(u),se=H(_),W=w(_,"DIV",{class:!0});var Se=C(W);ie=N(Se,`Lọc:
				`),z=w(Se,"SELECT",{class:!0});var _e=C(z);K=w(_e,"OPTION",{class:!0});var Me=C(K);we=N(Me,"Hiện tất cả"),Me.forEach(u),Y=w(_e,"OPTION",{class:!0});var Je=C(Y);Ie=N(Je,"Chỉ hiện câu sai"),Je.forEach(u),G=w(_e,"OPTION",{class:!0});var Ke=C(G);Ee=N(Ke,"Chỉ hiện câu chưa làm"),Ke.forEach(u),F=w(_e,"OPTION",{class:!0});var Ye=C(F);Ce=N(Ye,"Chỉ hiện câu đã đánh dấu xem lại"),Ye.forEach(u),_e.forEach(u),Se.forEach(u),ve=H(_);for(let Pe=0;Pe<Q.length;Pe+=1)Q[Pe].l(_);ne=H(_),$=w(_,"DIV",{class:!0});var Ve=C($);Oe=N(Ve,`Lọc:
				`),Z=w(Ve,"SELECT",{class:!0});var he=C(Z);x=w(he,"OPTION",{class:!0});var Ge=C(x);Te=N(Ge,"Hiện tất cả"),Ge.forEach(u),ee=w(he,"OPTION",{class:!0});var Fe=C(ee);qe=N(Fe,"Chỉ hiện câu sai"),Fe.forEach(u),te=w(he,"OPTION",{class:!0});var $e=C(te);Ae=N($e,"Chỉ hiện câu chưa làm"),$e.forEach(u),le=w(he,"OPTION",{class:!0});var xe=C(le);Ne=N(xe,"Chỉ hiện câu đã đánh dấu xem lại"),xe.forEach(u),he.forEach(u),Ve.forEach(u),this.h()},h(){r(l,"href","../"),r(l,"class","btn btn-primary"),r(a,"class","btn btn-error"),r(h,"class","btn btn-secondary"),r(h,"href",f=e[0].azota),r(h,"target","_blank"),r(h,"rel","noopener noreferrer"),r(t,"class","flex flex-row justify-center gap-1"),O.__value="",O.value=O.__value,b.__value="dark",b.value=b.__value,d.__value="light",d.value=d.__value,r(c,"class","select select-primary select-sm"),r(c,"data-choose-theme",""),r(m,"class","flex flex-row justify-center items-center gap-1 mt-1"),r(j,"class","text-center mt-4"),r(X,"class","text-center text-3xl font-bold my-4"),r(K,"class","text-base-content"),K.__value="",K.value=K.__value,r(Y,"class","text-error"),Y.__value="wrong",Y.value=Y.__value,r(G,"class","text-error"),G.__value="unanswered",G.value=G.__value,r(F,"class","text-warning"),F.__value="marked",F.value=F.__value,r(z,"class","select select-primary select-sm"),e[4]===void 0&&tt(()=>e[13].call(z)),r(W,"class",pe=e[4]==="wrong"||e[4]==="unanswered"?"text-error":e[4]==="marked"?"text-warning":""),r(x,"class","text-base-content"),x.__value="",x.value=x.__value,r(ee,"class","text-error"),ee.__value="wrong",ee.value=ee.__value,r(te,"class","text-error"),te.__value="unanswered",te.value=te.__value,r(le,"class","text-warning"),le.__value="marked",le.value=le.__value,r(Z,"class","select select-primary select-sm"),e[4]===void 0&&tt(()=>e[18].call(Z)),r($,"class",me=e[4]==="wrong"||e[4]==="unanswered"?"text-error":e[4]==="marked"?"text-warning":"")},m(_,S){D(_,t,S),n(t,l),n(l,s),n(t,i),n(t,a),n(a,o),n(t,v),n(t,h),n(h,g),D(_,I,S),D(_,m,S),n(m,p),n(m,c),n(c,O),n(O,E),n(c,b),n(b,q),n(c,d),n(d,V),D(_,L,S),D(_,j,S),n(j,J),n(j,oe),n(j,ue),n(j,P),D(_,B,S),D(_,X,S),n(X,R),D(_,se,S),D(_,W,S),n(W,ie),n(W,z),n(z,K),n(K,we),n(z,Y),n(Y,Ie),n(z,G),n(G,Ee),n(z,F),n(F,Ce),be(z,e[4],!0),D(_,ve,S);for(let y=0;y<Q.length;y+=1)Q[y]&&Q[y].m(_,S);D(_,ne,S),D(_,$,S),n($,Oe),n($,Z),n(Z,x),n(x,Te),n(Z,ee),n(ee,qe),n(Z,te),n(te,Ae),n(Z,le),n(le,Ne),be(Z,e[4],!0),je||(ze=[ae(a,"click",e[8]),ae(z,"change",e[13]),ae(Z,"change",e[18])],je=!0)},p(_,S){if(S&1&&f!==(f=_[0].azota)&&r(h,"href",f),S&1&&T!==(T=_[0].subject[0].toUpperCase()+_[0].subject.slice(1)+"")&&de(P,T),S&1&&M!==(M=_[0].title+"")&&de(R,M),S&16&&be(z,_[4]),S&16&&pe!==(pe=_[4]==="wrong"||_[4]==="unanswered"?"text-error":_[4]==="marked"?"text-warning":"")&&r(W,"class",pe),S&638){re=_[6];let y;for(y=0;y<re.length;y+=1){const fe=st(_,re,y);Q[y]?Q[y].p(fe,S):(Q[y]=ut(fe),Q[y].c(),Q[y].m(ne.parentNode,ne))}for(;y<Q.length;y+=1)Q[y].d(1);Q.length=re.length}S&16&&be(Z,_[4]),S&16&&me!==(me=_[4]==="wrong"||_[4]==="unanswered"?"text-error":_[4]==="marked"?"text-warning":"")&&r($,"class",me)},d(_){_&&u(t),_&&u(I),_&&u(m),_&&u(L),_&&u(j),_&&u(B),_&&u(X),_&&u(se),_&&u(W),_&&u(ve),He(Q,_),_&&u(ne),_&&u($),je=!1,Le(ze)}}}function kt(e){let t,l,s,i,a=e[0].title+"",o,v,h;function g(m,p){return m[0].azota?Ct:Et}let f=g(e),I=f(e);return{c(){t=k("a"),l=A("Quay lại"),s=U(),i=k("div"),o=A(a),v=U(),I.c(),h=ke(),this.h()},l(m){t=w(m,"A",{href:!0,class:!0});var p=C(t);l=N(p,"Quay lại"),p.forEach(u),s=H(m),i=w(m,"DIV",{class:!0});var c=C(i);o=N(c,a),c.forEach(u),v=H(m),I.l(m),h=ke(),this.h()},h(){r(t,"href","../"),r(t,"class","btn btn-primary"),r(i,"class","text-center text-3xl font-bold my-4")},m(m,p){D(m,t,p),n(t,l),D(m,s,p),D(m,i,p),n(i,o),D(m,v,p),I.m(m,p),D(m,h,p)},p(m,p){p&1&&a!==(a=m[0].title+"")&&de(o,a),f===(f=g(m))&&I?I.p(m,p):(I.d(1),I=f(m),I&&(I.c(),I.m(h.parentNode,h)))},d(m){m&&u(t),m&&u(s),m&&u(i),m&&u(v),I.d(m),m&&u(h)}}}function wt(e){let t,l,s=e[29].replace("*","")+"",i,a;return{c(){t=k("div"),l=new ye(!1),i=U(),this.h()},l(o){t=w(o,"DIV",{class:!0});var v=C(t);l=Re(v,!1),i=H(v),v.forEach(u),this.h()},h(){l.a=i,r(t,"class",a=e[29].startsWith("*")&&e[5]?"text-success":"")},m(o,v){D(o,t,v),l.m(s,t),n(t,i)},p(o,v){v&64&&s!==(s=o[29].replace("*","")+"")&&l.p(s),v&96&&a!==(a=o[29].startsWith("*")&&o[5]?"text-success":"")&&r(t,"class",a)},d(o){o&&u(t)}}}function It(e){let t,l=e[25]+1+"",s,i,a,o,v=e[29].replace("*","")+"",h,g;return{c(){t=A("Câu "),s=A(l),i=A(`:
								`),a=k("span"),o=new ye(!1),h=U(),this.h()},l(f){t=N(f,"Câu "),s=N(f,l),i=N(f,`:
								`),a=w(f,"SPAN",{class:!0});var I=C(a);o=Re(I,!1),h=H(I),I.forEach(u),this.h()},h(){o.a=h,r(a,"class",g=e[29].startsWith("*")&&e[5]?"text-success":"")},m(f,I){D(f,t,I),D(f,s,I),D(f,i,I),D(f,a,I),o.m(v,a),n(a,h)},p(f,I){I&64&&v!==(v=f[29].replace("*","")+"")&&o.p(v),I&96&&g!==(g=f[29].startsWith("*")&&f[5]?"text-success":"")&&r(a,"class",g)},d(f){f&&u(t),f&&u(s),f&&u(i),f&&u(a)}}}function rt(e){let t;function l(a,o){return a[28]===0?It:wt}let i=l(e)(e);return{c(){i.c(),t=ke()},l(a){i.l(a),t=ke()},m(a,o){i.m(a,o),D(a,t,o)},p(a,o){i.p(a,o)},d(a){i.d(a),a&&u(t)}}}function ot(e){let t,l,s,i,a=!1,o,v,h,g=["A","B","C","D"][e[28]]+"",f,I,m,p=e[26].answer+"",c,O,E,b,q;function d(){return e[15](e[23],e[26])}function V(){e[16].call(l,e[23])}return E=mt(e[17][0],[e[25]]),{c(){t=k("div"),l=k("input"),v=U(),h=k("label"),f=A(g),I=A(". "),m=new ye(!1),this.h()},l(L){t=w(L,"DIV",{class:!0});var j=C(t);l=w(j,"INPUT",{class:!0,type:!0,name:!0,id:!0}),v=H(j),h=w(j,"LABEL",{for:!0});var J=C(h);f=N(J,g),I=N(J,". "),m=Re(J,!1),J.forEach(u),j.forEach(u),this.h()},h(){r(l,"class","input input-primary input-xs"),r(l,"type","radio"),r(l,"name",s=`${e[23].id}`),l.__value=i=e[26].id,l.value=l.__value,r(l,"id",o=`${e[23].id}${e[26].id}`),m.a=null,r(h,"for",c=`${e[23].id}${e[26].id}`),r(t,"class",O="flex flex-row gap-4 m-3 items-center "+(e[5]&&e[26].id===e[23].right?"text-success":"")+" "+((e[1]||e[5])&&e[3][e[23].id]===e[26].id?e[26].id===e[23].right?"text-success":"text-error":"")),E.p(l)},m(L,j){D(L,t,j),n(t,l),l.checked=l.__value===e[3][e[23].id],n(t,v),n(t,h),n(h,f),n(h,I),m.m(p,h),b||(q=[ae(l,"click",d),ae(l,"change",V)],b=!0)},p(L,j){e=L,j&64&&s!==(s=`${e[23].id}`)&&r(l,"name",s),j&64&&i!==(i=e[26].id)&&(l.__value=i,l.value=l.__value,a=!0),j&64&&o!==(o=`${e[23].id}${e[26].id}`)&&r(l,"id",o),(a||j&72)&&(l.checked=l.__value===e[3][e[23].id]),j&64&&p!==(p=e[26].answer+"")&&m.p(p),j&64&&c!==(c=`${e[23].id}${e[26].id}`)&&r(h,"for",c),j&106&&O!==(O="flex flex-row gap-4 m-3 items-center "+(e[5]&&e[26].id===e[23].right?"text-success":"")+" "+((e[1]||e[5])&&e[3][e[23].id]===e[26].id?e[26].id===e[23].right?"text-success":"text-error":""))&&r(t,"class",O),j&64&&E.u([e[25]])},d(L){L&&u(t),E.r(),b=!1,Le(q)}}}function ut(e){let t,l,s,i,a,o,v,h,g,f,I;function m(){e[14].call(a,e[23])}let p=e[23].question.split("<br>"),c=[];for(let b=0;b<p.length;b+=1)c[b]=rt(it(e,p,b));let O=e[23].answers,E=[];for(let b=0;b<O.length;b+=1)E[b]=ot(at(e,O,b));return{c(){t=k("div"),l=k("br"),s=U(),i=k("div"),a=k("input"),o=U();for(let b=0;b<c.length;b+=1)c[b].c();h=U();for(let b=0;b<E.length;b+=1)E[b].c();this.h()},l(b){t=w(b,"DIV",{class:!0});var q=C(t);l=w(q,"BR",{}),s=H(q),i=w(q,"DIV",{class:!0});var d=C(i);a=w(d,"INPUT",{type:!0,class:!0}),o=H(d);for(let V=0;V<c.length;V+=1)c[V].l(d);d.forEach(u),h=H(q);for(let V=0;V<E.length;V+=1)E[V].l(q);q.forEach(u),this.h()},h(){r(a,"type","checkbox"),r(a,"class","toggle toggle-warning"),r(i,"class",v=e[2][e[23].id]?"text-warning":""),r(t,"class",g=e[4]==="wrong"?e[3][e[23].id]!==-1&&e[3][e[23].id]!==e[23].right?"":"hidden":e[4]==="unanswered"?e[3][e[23].id]!==-1?"hidden":"":e[4]==="marked"?e[2][e[23].id]?"":"hidden":"")},m(b,q){D(b,t,q),n(t,l),n(t,s),n(t,i),n(i,a),a.checked=e[2][e[23].id],n(i,o);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(i,null);n(t,h);for(let d=0;d<E.length;d+=1)E[d]&&E[d].m(t,null);f||(I=ae(a,"change",m),f=!0)},p(b,q){if(e=b,q&68&&(a.checked=e[2][e[23].id]),q&96){p=e[23].question.split("<br>");let d;for(d=0;d<p.length;d+=1){const V=it(e,p,d);c[d]?c[d].p(V,q):(c[d]=rt(V),c[d].c(),c[d].m(i,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=p.length}if(q&68&&v!==(v=e[2][e[23].id]?"text-warning":"")&&r(i,"class",v),q&618){O=e[23].answers;let d;for(d=0;d<O.length;d+=1){const V=at(e,O,d);E[d]?E[d].p(V,q):(E[d]=ot(V),E[d].c(),E[d].m(t,null))}for(;d<E.length;d+=1)E[d].d(1);E.length=O.length}q&92&&g!==(g=e[4]==="wrong"?e[3][e[23].id]!==-1&&e[3][e[23].id]!==e[23].right?"":"hidden":e[4]==="unanswered"?e[3][e[23].id]!==-1?"hidden":"":e[4]==="marked"?e[2][e[23].id]?"":"hidden":"")&&r(t,"class",g)},d(b){b&&u(t),He(c,b),He(E,b),f=!1,I()}}}function Et(e){let t,l;return{c(){t=k("div"),l=A("HIỆN TẠI CHƯA CÓ AZOTA, QUAY LẠI SAU!"),this.h()},l(s){t=w(s,"DIV",{class:!0});var i=C(t);l=N(i,"HIỆN TẠI CHƯA CÓ AZOTA, QUAY LẠI SAU!"),i.forEach(u),this.h()},h(){r(t,"class","text-3xl text-center")},m(s,i){D(s,t,i),n(t,l)},p:Ue,d(s){s&&u(t)}}}function Ct(e){var v;let t,l,s,i,a,o=((v=e[0].questions[0])==null?void 0:v.question)&&ft(e);return{c(){t=k("div"),l=k("a"),s=A("AZOTA"),a=U(),o&&o.c(),this.h()},l(h){t=w(h,"DIV",{class:!0});var g=C(t);l=w(g,"A",{class:!0,href:!0,target:!0,rel:!0});var f=C(l);s=N(f,"AZOTA"),f.forEach(u),a=H(g),o&&o.l(g),g.forEach(u),this.h()},h(){r(l,"class","btn btn-secondary btn-lg"),r(l,"href",i=e[0].azota),r(l,"target","_blank"),r(l,"rel","noopener noreferrer"),r(t,"class","flex justify-center gap-1")},m(h,g){D(h,t,g),n(t,l),n(l,s),n(t,a),o&&o.m(t,null)},p(h,g){var f;g&1&&i!==(i=h[0].azota)&&r(l,"href",i),(f=h[0].questions[0])!=null&&f.question?o?o.p(h,g):(o=ft(h),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(h){h&&u(t),o&&o.d()}}}function ft(e){let t,l,s;return{c(){t=k("a"),l=A("WORD"),this.h()},l(i){t=w(i,"A",{class:!0,href:!0,target:!0,rel:!0});var a=C(t);l=N(a,"WORD"),a.forEach(u),this.h()},h(){r(t,"class","btn btn-primary btn-lg"),r(t,"href",s=e[0].questions[0].question.replace("<br>","")),r(t,"target","_blank"),r(t,"rel","noopener noreferrer")},m(i,a){D(i,t,a),n(t,l)},p(i,a){a&1&&s!==(s=i[0].questions[0].question.replace("<br>",""))&&r(t,"href",s)},d(i){i&&u(t)}}}function Ot(e){var I,m;let t,l,s,i,a,o,v=!e[7]&&nt(e);function h(p,c){return p[7]?kt:bt}let g=h(e),f=g(e);return document.title=o=`
		In Real Xperience / 2023 / `+(e[0].subject[0].toUpperCase()+e[0].subject.slice(1))+" / "+((I=e[0].title)==null?void 0:I[0].toUpperCase())+((m=e[0].title)==null?void 0:m.slice(1).toLowerCase()),{c(){t=k("div"),v&&v.c(),l=U(),s=k("div"),f.c(),a=U(),this.h()},l(p){t=w(p,"DIV",{class:!0});var c=C(t);v&&v.l(c),l=H(c),s=w(c,"DIV",{class:!0});var O=C(s);f.l(O),O.forEach(u),c.forEach(u),a=H(p),pt("svelte-hfbniz",document.head).forEach(u),this.h()},h(){r(s,"class",i="w-full max-w-[48rem] p-4 "+(e[7]?"":"mt-8")),r(t,"class","absolute top-0 left-0 right-0 flex flex-col items-center")},m(p,c){D(p,t,c),v&&v.m(t,null),n(t,l),n(t,s),f.m(s,null),D(p,a,c)},p(p,[c]){var O,E;p[7]?v&&(v.d(1),v=null):v?v.p(p,c):(v=nt(p),v.c(),v.m(t,l)),g===(g=h(p))&&f?f.p(p,c):(f.d(1),f=g(p),f&&(f.c(),f.m(s,null))),c&128&&i!==(i="w-full max-w-[48rem] p-4 "+(p[7]?"":"mt-8"))&&r(s,"class",i),c&1&&o!==(o=`
		In Real Xperience / 2023 / `+(p[0].subject[0].toUpperCase()+p[0].subject.slice(1))+" / "+((O=p[0].title)==null?void 0:O[0].toUpperCase())+((E=p[0].title)==null?void 0:E.slice(1).toLowerCase()))&&(document.title=o)},i:Ue,o:Ue,d(p){p&&u(t),v&&v.d(),f.d(),p&&u(a)}}}function ct(e){let t=e.length,l;for(;t!=0;)l=Math.floor(Math.random()*t),t--,[e[t],e[l]]=[e[l],e[t]];return e}function Tt(e,t,l){let{data:s}=t,i="",a=!1,o=!1;function v(){l(3,c=[]),m(),I()}let h=!1,g=[],f=[];function I(){const T=[];for(let P=0;P<E.length;P+=1){const B=E[P],X=B.answers,M=[];for(let R=0;R<X.length;R+=1)M.push(X[R].id);T.push({id:B.id,answers:M})}localStorage.setItem(`question${s.subject}${s.id}`,JSON.stringify(T))}function m(){const T=[];for(let P=0;P<s.questions.length;P+=1){const B=structuredClone(s.questions[P]);B.answers=ct(B.answers),T.push(B)}l(6,E=ct(T))}function p(){if(o)for(let T=0;T<c.length;T+=1){const P=c[T];f[T]===-1&&P!==-1&&P!==s.questions[T].right&&(f[T]=P,l(2,g[T]=!0,g))}localStorage.setItem(`inputs${s.subject}${s.id}`,c.join(",")),localStorage.setItem(`marked${s.subject}${s.id}`,g.join(",")),o?localStorage.setItem("live","true"):localStorage.removeItem("live")}let c=[];function O(T,P){c[T]===P&&l(3,c[T]=-1,c)}let E=[];vt(()=>{var X,M;l(1,o=localStorage.getItem("live")!==null);const T=((X=localStorage.getItem(`inputs${s.subject}${s.id}`))!=null?X:"").split(",");T.length<s.questions.length&&T.push(...Array(s.questions.length-T.length).fill("-1")),l(3,c=[]);for(let R=0;R<T.length;R+=1)c.push(parseInt(T[R]));f=structuredClone(c);let P=((M=localStorage.getItem(`marked${s.subject}${s.id}`))!=null?M:"").split(",");P.length<s.questions.length&&P.push(...Array(s.questions.length-P.length).fill(""));for(let R=0;R<P.length;R+=1)g.push(P[R]==="true");l(2,g=[]),l(10,h=!0);const B=localStorage.getItem(`question${s.subject}${s.id}`);if(B){l(6,E=[]);const R=JSON.parse(B);for(let se=0;se<R.length;se+=1){const W=R[se],ie=structuredClone(s.questions[W.id]);ie.answers=[];for(let z=0;z<W.answers.length;z+=1)ie.answers.push(s.questions[W.id].answers[W.answers[z]]);E.push(ie)}}else m(),I();gt.themeChange(!1),E.length<2&&l(7,b=!0)});let b=!1;const q=[[]];function d(){o=this.checked,l(1,o)}function V(){a=this.checked,l(5,a)}function L(){i=et(this),l(4,i)}function j(T){g[T.id]=this.checked,l(2,g)}const J=(T,P)=>O(T.id,P.id);function oe(T){c[T.id]=this.__value,l(3,c)}function ue(){i=et(this),l(4,i)}return e.$$set=T=>{"data"in T&&l(0,s=T.data)},e.$$.update=()=>{e.$$.dirty&1038&&h&&p()},[s,o,g,c,i,a,E,b,v,O,h,d,V,L,j,J,oe,q,ue]}class Nt extends _t{constructor(t){super(),ht(this,t,Tt,Ot,dt,{data:0})}}export{Nt as default};
