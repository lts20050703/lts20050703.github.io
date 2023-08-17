import{s as N,n as P,r as R,o as V}from"../chunks/scheduler.8ea2a124.js";import{S as W,i as X,s as I,g as m,m as z,y as H,f as A,c as O,h as _,j as v,n as Q,z as S,A as T,k as E,a as q,x as f,D as j}from"../chunks/index.27755550.js";import{v as U}from"../chunks/v.372a9c06.js";import{t as G}from"../chunks/index.f5a69ea7.js";function J(C){let B,t,h,p,u,n,w="Hệ thống",x,b="Tối",g,y="Sáng",d,i,l,a,s,e,o="Quay lại",c,M;return document.title="LTS20050703 / Library "+U,{c(){B=I(),t=m("div"),h=m("div"),p=z("Chủ đề: "),u=m("select"),n=m("option"),n.textContent=w,x=m("option"),x.textContent=b,g=m("option"),g.textContent=y,d=I(),i=m("textarea"),l=I(),a=m("textarea"),s=I(),e=m("a"),e.textContent=o,this.h()},l(r){H("svelte-1trmumi",document.head).forEach(A),B=O(r),t=_(r,"DIV",{class:!0});var D=v(t);h=_(D,"DIV",{class:!0});var L=v(h);p=Q(L,"Chủ đề: "),u=_(L,"SELECT",{class:!0,"data-choose-theme":!0});var k=v(u);n=_(k,"OPTION",{"data-svelte-h":!0}),S(n)!=="svelte-5n7nt9"&&(n.textContent=w),x=_(k,"OPTION",{"data-svelte-h":!0}),S(x)!=="svelte-auqr5i"&&(x.textContent=b),g=_(k,"OPTION",{"data-svelte-h":!0}),S(g)!=="svelte-12w4yw3"&&(g.textContent=y),k.forEach(A),L.forEach(A),d=O(D),i=_(D,"TEXTAREA",{class:!0,cols:!0,rows:!0,placeholder:!0}),v(i).forEach(A),l=O(D),a=_(D,"TEXTAREA",{placeholder:!0,class:!0,cols:!0,rows:!0}),v(a).forEach(A),D.forEach(A),s=O(r),e=_(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-c1n9c8"&&(e.textContent=o),this.h()},h(){n.__value="",T(n,n.__value),x.__value="dark",T(x,x.__value),g.__value="light",T(g,g.__value),E(u,"class","select select-primary select-sm"),E(u,"data-choose-theme",""),E(h,"class","m-1 rounded-md bg-base-100 p-1"),E(i,"class","textarea textarea-primary"),E(i,"cols","100"),E(i,"rows","10"),E(i,"placeholder","Tên sách (mỗi dòng 1 tên sách)"),E(a,"placeholder","Mã hóa sách (mỗi dòng 1 sách)"),E(a,"class","textarea textarea-primary"),a.readOnly=!0,a.value=C[1],E(a,"cols","100"),E(a,"rows","10"),E(t,"class","flex flex-col items-center justify-center"),E(e,"href","/projects"),E(e,"class","btn btn-primary absolute left-0 top-0 m-4")},m(r,F){q(r,B,F),q(r,t,F),f(t,h),f(h,p),f(h,u),f(u,n),f(u,x),f(u,g),f(t,d),f(t,i),T(i,C[0]),f(t,l),f(t,a),q(r,s,F),q(r,e,F),c||(M=[j(i,"input",C[3]),j(i,"keydown",C[2])],c=!0)},p(r,[F]){F&1&&T(i,r[0]),F&2&&(a.value=r[1])},i:P,o:P,d(r){r&&(A(B),A(t),A(s),A(e)),c=!1,R(M)}}}function K(C,B,t){let h=!1,p="",u="";const n=new Map([["a","100"],["ac","101"],["ach","102"],["ai","103"],["am","104"],["an","105"],["ang","106"],["anh","107"],["ao","108"],["ap","109"],["at","110"],["au","111"],["ay","112"],["ăc","113"],["ăm","114"],["ăn","115"],["ăng","116"],["áp","117"],["ăt","118"],["âc","119"],["âm","120"],["ân","121"],["âng","122"],["âp","123"],["ât","124"],["âu","125"],["ây","126"],["e","200"],["ec","201"],["em","202"],["en","203"],["eng","204"],["eo","205"],["ep","206"],["et","207"],["ê","250"],["êc","251"],["êch","252"],["êm","253"],["ên","254"],["êng","255"],["ênh","256"],["êp","257"],["êt","258"],["êu","259"],["i","300"],["ia","301"],["ich","302"],["iec","303"],["iêm","304"],["iêt","308"],["iêu","309"],["im","310"],["in","311"],["inh","312"],["ip","313"],["it","314"],["iu","315"],["o","400"],["oa","401"],["oac","402"],["oach","403"],["oai","404"],["oam","405"],["oan","406"],["oang","407"],["oanh","408"],["oao","409"],["oap","410"],["oat","411"],["oay","412"],["oăc","413"],["oăm","414"],["oăn","415"],["oăng","416"],["oăp","417"],["oăt","418"],["oc","419"],["oe","420"],["oec","421"],["oem","422"],["oen","423"],["oeng","424"],["oeo","425"],["oep","426"],["oet","427"],["oi","428"],["om","429"],["on","430"],["ong","431"],["ôc","432"],["oong","433"],["op","434"],["ot","435"],["ô","450"],["ôc","451"],["ôi","452"],["ôm","453"],["ôn","454"],["ông","455"],["ôông","456"],["ôp","457"],["ôt","458"],["ơ","460"],["ơc","461"],["ơi","462"],["ơm","463"],["ơn","464"],["ơng","465"],["ơp","466"],["ơt","467"],["u","500"],["ua","501"],["uân","502"],["uâng","503"],["uât","504"],["uây","505"],["uc","506"],["uê","507"],["uêch","508"],["uênh","509"],["ui","510"],["um","511"],["un","512"],["ung","513"],["uôc","514"],["uôi","515"],["uôm","516"],["uôn","517"],["uông","518"],["uôt","519"],["uơ","520"],["up","521"],["ut","523"],["uy","524"],["uya","525"],["uyêch","526"],["uyên","527"],["uyêt","528"],["uym","529"],["uyn","530"],["uynh","531"],["uyp","532"],["uyt","533"],["ư","550"],["ưa","551"],["ưc","552"],["ưi","553"],["ưm","554"],["ưn","555"],["ưng","556"],["ươc","557"],["ươi","558"],["ươm","559"],["ươn","560"],["ương","561"],["ươp","562"],["ươt","563"],["ươu","564"],["ưt","565"],["ưu","566"],["y","600"],["ych","601"],["yêm","602"],["yên","603"],["yêng","604"],["yêt","605"],["yêu","606"],["ym","607"],["yn","608"],["ynh","609"],["yp","610"]]),w=new Map([["á","a"],["à","a"],["ả","a"],["ã","a"],["ạ","a"],["ắ","ă"],["ằ","ă"],["ẳ","ă"],["ẵ","ă"],["ặ","ă"],["ấ","â"],["ầ","â"],["ẩ","â"],["ẫ","â"],["ậ","â"],["é","e"],["è","e"],["ẻ","e"],["ẽ","e"],["ẹ","e"],["ế","ê"],["ề","ê"],["ể","ê"],["ễ","ê"],["ệ","ê"],["ẹ","e"],["í","i"],["ì","i"],["ỉ","i"],["ĩ","i"],["ị","i"],["ó","o"],["ò","o"],["ỏ","o"],["õ","o"],["ọ","o"],["ố","ô"],["ồ","ô"],["ổ","ô"],["ỗ","ô"],["ộ","ô"],["ớ","ơ"],["ờ","ơ"],["ở","ơ"],["ỡ","ơ"],["ợ","ơ"],["ú","u"],["ù","u"],["ủ","u"],["ũ","u"],["ụ","u"],["ứ","ư"],["ừ","ư"],["ử","ư"],["ữ","ư"],["ự","ư"],["ý","y"],["ỳ","y"],["ỷ","y"],["ỹ","y"],["ỵ","y"]]),x=new Map([["ă","a"],["â","a"],["đ","d"],["ê","e"],["ô","o"],["ơ","o"],["ư","u"]]);function b(){h&&localStorage.setItem("library",p);const y=p.split(`
`);t(1,u="");for(let d=0;d<y.length;d+=1){const i=y[d];if(i==="")continue;let l=i.toLowerCase().split(" ")[0];if(["gi","gim","gin","ginh","gip","git"].includes(l))t(1,u+={gi:"gi300",gim:"gi310",gin:"gi311",ginh:"gi312",gip:"gi313",git:"gi314"}[l]);else if(l.startsWith("qu"))t(1,u+="qu"+n.get(l.slice(2)));else for(let s=0;s<l.length;s+=1){if(n.get(l.slice(s))){s===0?t(1,u+=l[0]):t(1,u+=l.slice(0,s)),t(1,u+=n.get(l.slice(s)));break}let e=l;for(let o=0;o<e.length;o+=1){const c=w.get(e[o]);c&&(e=e.slice(0,o)+c+e.slice(o+1))}if(n.get(e.slice(s))){s===0?t(1,u+=e[0]):t(1,u+=e.slice(0,s)),t(1,u+=n.get(e.slice(s)));break}for(let o=0;o<e.length;o+=1){const c=x.get(e[o]);c&&(l=e.slice(0,o+1)+c+e.slice(o+2))}if(n.get(e.slice(s))){s===0?t(1,u+=e[0]):t(1,u+=e.slice(0,s)),t(1,u+=n.get(e.slice(s)));break}}let a=i.toLowerCase().split(" ")[1];if(a){if(["gi","gim","gin","ginh","gip","git"].includes(a))t(1,u+="gi");else if(a.startsWith("qu"))t(1,u+="qu");else for(let s=0;s<a.length;s+=1){if(n.get(a.slice(s))){s===0?t(1,u+=a[0]):t(1,u+=a.slice(0,s));break}let e=a;for(let o=0;o<e.length;o+=1){const c=w.get(e[o]);c&&(e=e.slice(0,o)+c+e.slice(o+1))}if(n.get(e.slice(s))){s===0?t(1,u+=e[0]):t(1,u+=e.slice(0,s));break}for(let o=0;o<e.length;o+=1){const c=x.get(e[o]);c&&(l=e.slice(0,o+1)+c+e.slice(o+2))}if(n.get(e.slice(s))){s===0?t(1,u+=e[0]):t(1,u+=e.slice(0,s));break}}t(1,u+=`
`)}}t(1,u=u.toUpperCase())}V(()=>{var y;G.themeChange(!1),h=!0,t(0,p=(y=localStorage.getItem("library"))!=null?y:""),b()});function g(){p=this.value,t(0,p)}return[p,u,b,g]}class te extends W{constructor(B){super(),X(this,B,K,J,N,{})}}export{te as component};
