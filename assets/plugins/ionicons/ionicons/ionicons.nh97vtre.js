/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='ionicons']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,n,e,o){"use strict";function i(t,n){return"sc-"+t.t+(n&&n!==E?"-"+n:"")}function f(t,n){return t+(n?"-h":"-s")}function c(t){return{n:t[0],e:t[1],o:!!t[2],i:!!t[3],f:!!t[4]}}function r(t,n){if(T(n)&&"object"!=typeof n&&"function"!=typeof n){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n);if(t===String||2===t)return n.toString()}return n}function s(t,n,e,o){const i=t.c.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.c.delete(n))}function l(t,n){let e,o,i=null,f=!1,c=!1;for(var r=arguments.length;r-- >2;)q.push(arguments[r]);for(;q.length>0;){let n=q.pop();if(n&&void 0!==n.pop)for(r=n.length;r--;)q.push(n[r]);else"boolean"==typeof n&&(n=null),(c="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(c=!1)),c&&f?i[i.length-1].vtext+=n:null===i?i=[c?{vtext:n}:n]:i.push(c?{vtext:n}:n),f=c}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(r in n.class)n.class[r]&&q.push(r);n.class=q.join(" "),q.length=0}null!=n.key&&(e=n.key),null!=n.name&&(o=n.name)}return"function"==typeof t?t(n,i||[],B):{vtag:t,vchildren:i,vtext:void 0,vattrs:n,vkey:e,vname:o,r:void 0,s:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,n){t.l.has(n)||(t.l.set(n,!0),t.u?t.queue.write(()=>p(t,n)):t.queue.tick(()=>p(t,n)))}function p(t,n,e,o,i,f){if(t.l.delete(n),!t.a.has(n)){if(o=t.p.get(n),e=!o){if((i=t.c.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,n)}),void(i.$onRender=i["s-rc"]);o=function c(t,n,e,o,i,f,r){try{o=new(i=t.v(n).d),function s(t,n,e,o,i,f,c){for(c in t.m.set(o,e),t.y.has(e)||t.y.set(e,{}),(f=Object.assign({color:{type:String}},n.properties)).mode={type:String},f)v(t,f[c],e,o,c,i)}(t,i,n,o,e)}catch(e){o={},t.b(e,7,n,!0)}return t.p.set(n,o),o}(t,n,t.g.get(n));try{o.componentWillLoad&&(f=o.componentWillLoad())}catch(e){t.b(e,3,n)}}else try{o.componentWillUpdate&&(f=o.componentWillUpdate())}catch(e){t.b(e,5,n)}f&&f.then?f.then(()=>d(t,n,o,e)):d(t,n,o,e)}}function d(t,n,e,o){(function i(t,n,e,o){try{const i=n.d.host,c=n.d.encapsulation,r="shadow"===c&&t.M.w;let s,u;if(s=function i(t,n,e){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((e=e||{})[o]=n[o])}),e}(n.d.properties,o),u=r?e.shadowRoot:e,!e["s-rn"]){t.k(t,t.M,n,e);const i=e["s-sc"];i&&(t.M.C(e,f(i,!0)),o.render||t.M.C(e,f(i)))}if(o.render||o.hostData||i||s){t.x=!0;const n=o.render&&o.render();let i;i=o.hostData&&o.hostData(),s&&(i=i?Object.assign(i,s):s),t.x=!1;const f=t.j.get(e)||{};f.r=u;const a=l(null,i,n);a.s=!0,t.j.set(e,t.render(e,f,a,r,c))}e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.x=!1,t.b(n,8,e,!0)}})(t,t.v(n),n,e);try{o?n["s-init"]():C(t.j.get(n))}catch(e){t.b(e,6,n,!0)}}function v(t,n,e,o,i,f,c,s){if(n.type||n.state){const l=t.y.get(e);n.state||(!n.attr||void 0!==l[i]&&""!==l[i]||(c=f&&f.W)&&T(s=c[n.attr])&&(l[i]=r(n.type,s)),e.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=r(n.type,e[i])),"mode"!==i&&delete e[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),n.watchCallbacks&&(l[D+i]=n.watchCallbacks.slice()),y(o,i,function l(n){return(n=t.y.get(t.m.get(this)))&&n[i]},function u(e,o){(o=t.m.get(this))&&(n.state||n.mutable)&&m(t,o,i,e)})}else if(n.elementRef)h(o,i,e);else if(n.context){const f=t.N(n.context);void 0!==f&&h(o,i,f.O&&f.O(e)||f)}}function m(t,n,e,o,i,f,c){(i=t.y.get(n))||t.y.set(n,i={});const r=i[e];if(o!==r&&(i[e]=o,f=t.p.get(n))){if(c=i[D+e])for(let t=0;t<c.length;t++)try{f[c[t]].call(f,o,r,e)}catch(t){}!t.x&&n["s-rn"]&&a(t,n)}}function h(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function y(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function b(t,n,e,o="boolean"==typeof e){const i=n!==(n=n.replace(/^xlink\:?/,""));null==e||o&&(!e||"false"===e)?i?t.removeAttributeNS(P,R(n)):t.removeAttribute(n):"function"!=typeof e&&(e=o?"":e.toString(),i?t.setAttributeNS(P,R(n),e):t.setAttribute(n,e))}function g(t,n,e,o,i,f,c){if("class"!==e||f)if("style"===e){for(const t in o)i&&null!=i[t]||(/-/.test(t)?n.style.S(t):n.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?n.style.setProperty(t,i[t]):n.style[t]=i[t])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!f&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(n);o&&o.A&&o.A[e]?(M(n,e,i),c&&o.A[e].T&&b(n,o.A[e].R,i,3===o.A[e].L)):"ref"!==e&&(M(n,e,null==i?"":i),null!=i&&!1!==i||t.M.q(n,e))}else null!=i&&"key"!==e?b(n,e,i):(f||t.M.B(n,e)&&(null==i||!1===i))&&t.M.q(n,e);else e=R(e)in n?R(e.substring(2)):R(e[2])+e.substring(3),i?i!==o&&t.M.D(n,e,i):t.M.P(n,e);else if(o!==i){const t=w(o),e=w(i),f=t.filter(t=>!e.includes(t)),c=w(n.className).filter(t=>!f.includes(t)),r=e.filter(n=>!t.includes(n)&&!c.includes(n));c.push(...r),n.className=c.join(" ")}}function w(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function M(t,n,e){try{t[n]=e}catch(t){}}function $(t,n,e,o,i){const f=11===e.r.nodeType&&e.r.host?e.r.host:e.r,c=n&&n.vattrs||S,r=e.vattrs||S;for(i in c)r&&null!=r[i]||null==c[i]||g(t,f,i,c[i],void 0,o,e.s);for(i in r)i in c&&r[i]===("value"===i||"checked"===i?f[i]:c[i])||g(t,f,i,c[i],r[i],o,e.s)}function k(t,n){function e(i,f,c,r,s,l,p,h,y){if(h=f.vchildren[c],u||(d=!0,"slot"===h.vtag&&(a&&n.C(r,a+"-s"),h.vchildren?h.F=!0:h.H=!0)),T(h.vtext))h.r=n.I(h.vtext);else if(h.H)h.r=n.I("");else{if(l=h.r=F||"svg"===h.vtag?n.U("http://www.w3.org/2000/svg",h.vtag):n.Q(h.F?"slot-fb":h.vtag),F="svg"===h.vtag||"foreignObject"!==h.vtag&&F,$(t,null,h,F),T(a)&&l["s-si"]!==a&&n.C(l,l["s-si"]=a),h.vchildren)for(s=0;s<h.vchildren.length;++s)(p=e(i,h,s,l))&&n.Z(l,p);"svg"===h.vtag&&(F=!1)}return h.r["s-hn"]=v,(h.F||h.H)&&(h.r["s-sr"]=!0,h.r["s-cr"]=m,h.r["s-sn"]=h.vname||"",(y=i&&i.vchildren&&i.vchildren[c])&&y.vtag===h.vtag&&i.r&&o(i.r)),h.r}function o(e,i,f,c){t.z=!0;const l=n.G(e);for(f=l.length-1;f>=0;f--)(c=l[f])["s-hn"]!==v&&c["s-ol"]&&(n.J(c),n.K(s(c),c,r(c)),n.J(c["s-ol"]),c["s-ol"]=null,d=!0),i&&o(c,i);t.z=!1}function i(t,o,i,f,c,s,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&n.V(a)||t).shadowRoot&&n.X(l)===v&&(l=l.shadowRoot);c<=s;++c)f[c]&&(u=T(f[c].vtext)?n.I(f[c].vtext):e(null,i,c,t))&&(f[c].r=u,n.K(l,u,r(o)))}function f(t,e,i,f){for(;e<=i;++e)T(t[e])&&(f=t[e].r,p=!0,f["s-ol"]?n.J(f["s-ol"]):o(f,!0),n.J(f))}function c(t,n){return t.vtag===n.vtag&&t.vkey===n.vkey&&("slot"!==t.vtag||t.vname===n.vname)}function r(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return n.V(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,v,m;return function h(y,b,g,w,M,k,C,x,j,W,N,O){if(v=n.X(y),m=y["s-cr"],u=w,a=y["s-sc"],d=p=!1,function l(u,a,p){const d=a.r=u.r,v=u.vchildren,m=a.vchildren;F=a.r&&T(n.Y(a.r))&&void 0!==a.r.ownerSVGElement,F="svg"===a.vtag||"foreignObject"!==a.vtag&&F,T(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?n._(n.V(p),a.vtext):u.vtext!==a.vtext&&n._(d,a.vtext):("slot"!==a.vtag&&$(t,u,a,F),T(v)&&T(m)?function h(t,u,a,p,d,v,m,y){let b=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],x=p[k];for(;b<=w&&g<=k;)if(null==M)M=u[++b];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==x)x=p[--k];else if(c(M,C))l(M,C),M=u[++b],C=p[++g];else if(c($,x))l($,x),$=u[--w],x=p[--k];else if(c(M,x))"slot"!==M.vtag&&"slot"!==x.vtag||o(n.V(M.r)),l(M,x),n.K(t,M.r,n.tt($.r)),M=u[++b],x=p[--k];else if(c($,C))"slot"!==M.vtag&&"slot"!==x.vtag||o(n.V($.r)),l($,C),n.K(t,$.r,M.r),$=u[--w],C=p[++g];else{for(d=null,v=b;v<=w;++v)if(u[v]&&T(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}T(d)?((y=u[d]).vtag!==C.vtag?m=e(u&&u[g],a,d,t):(l(y,C),u[d]=void 0,m=y.r),C=p[++g]):(m=e(u&&u[g],a,g,t),C=p[++g]),m&&n.K(s(M.r),m,r(M.r))}b>w?i(t,null==p[k+1]?null:p[k+1].r,a,p,g,k):g>k&&f(u,b,w)}(d,v,a,m):T(m)?(T(u.vtext)&&n._(d,""),i(d,null,a,m,0,m.length-1)):T(v)&&f(v,0,v.length-1)),F&&"svg"===a.vtag&&(F=!1)}(b,g),d){for(function t(e,o,i,f,c,r,s,u,a,d){for(c=0,r=(o=n.G(e)).length;c<r;c++){if((i=o[c])["s-sr"]&&(f=i["s-cr"]))for(u=n.G(n.V(f)),a=i["s-sn"],s=u.length-1;s>=0;s--)(f=u[s])["s-cn"]||f["s-nr"]||f["s-hn"]===i["s-hn"]||((3===(d=n.nt(f))||8===d)&&""===a||1===d&&null===n.et(f,"slot")&&""===a||1===d&&n.et(f,"slot")===a)&&(l.some(t=>t.ot===f)||(p=!0,f["s-sn"]=a,l.push({it:i,ot:f})));1===n.nt(i)&&t(i)}}(g.r),C=0;C<l.length;C++)(x=l[C]).ot["s-ol"]||((j=n.I(""))["s-nr"]=x.ot,n.K(n.V(x.ot),x.ot["s-ol"]=j,x.ot));for(t.z=!0,C=0;C<l.length;C++){for(x=l[C],N=n.V(x.it),O=n.tt(x.it),j=x.ot["s-ol"];j=n.ft(j);)if((W=j["s-nr"])&&W&&W["s-sn"]===x.ot["s-sn"]&&N===n.V(W)&&(W=n.tt(W))&&W&&!W["s-nr"]){O=W;break}(!O&&N!==n.V(x.ot)||n.tt(x.ot)!==O)&&x.ot!==O&&(n.J(x.ot),n.K(N,x.ot,O))}t.z=!1}return p&&function t(e,o,i,f,c,r,s,l){for(f=0,c=(i=n.G(e)).length;f<c;f++)if(o=i[f],1===n.nt(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<c;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=n.nt(i[r]),""!==s){if(1===l&&s===n.et(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==n.ct(i[r]).trim()){o.hidden=!0;break}t(o)}}(g.r),l.length=0,g}}function C(t,n){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(n?null:t.r),t.vchildren&&t.vchildren.forEach(t=>{C(t,n)}))}function x(t,n,e,o,i){const f=t.nt(n);let c,r,s,l;if(i&&1===f){(r=t.et(n,O))&&(s=r.split("."))[0]===o&&((l={}).vtag=t.X(l.r=n),e.vchildren||(e.vchildren=[]),e.vchildren[s[1]]=l,e=l,i=""!==s[2]);for(let f=0;f<n.childNodes.length;f++)x(t,n.childNodes[f],e,o,i)}else 3===f&&(c=n.previousSibling)&&8===t.nt(c)&&"s"===(s=t.ct(c).split("."))[0]&&s[1]===o&&((l={vtext:t.ct(n)}).r=n,e.vchildren||(e.vchildren=[]),e.vchildren[s[2]]=l)}function j(t,n,e,o){e.connectedCallback=function(){(function e(t,n,o){t.a.delete(o),t.rt.has(o)||(t.rt.set(o,!0),o["s-id"]||(o["s-id"]=t.st()),function i(t,n,e){for(e=n;e=t.M.Y(e);)if(t.lt(e)){t.ut.has(n)||(t.c.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>{t.g.set(o,function e(t,n,o,i,f){return o.mode||(o.mode=t.at(o)),o["s-cr"]||t.et(o,N)||t.w&&1===n.pt||(o["s-cr"]=t.I(""),o["s-cr"]["s-cn"]=!0,t.K(o,o["s-cr"],t.G(o)[0])),t.w||1!==n.pt||(o.shadowRoot=o),1===n.pt&&t.w&&!o.shadowRoot&&t.dt(o,{mode:"open"}),i={vt:o["s-id"],W:{}},n.A&&Object.keys(n.A).forEach(e=>{(f=n.A[e].R)&&(i.W[f]=t.et(o,f))}),i}(t.M,n,o)),t.mt(n,o)}))})(t,n,this)},e.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,f,c,s){if(t&&o!==f)for(c in t)if((s=t[c]).R&&R(s.R)===R(e)){n[c]=r(s.L,f);break}})(n.A,this,t,e,o)},e.disconnectedCallback=function(){(function n(t,e){if(!t.z&&function o(t,n){for(;n;){if(!t.V(n))return 9!==t.nt(n);n=t.V(n)}}(t.M,e)){t.a.set(e,!0),s(t,e),C(t.j.get(e),!0),t.M.P(e),t.ht.delete(e);{const n=t.p.get(e);n&&n.componentDidUnload&&n.componentDidUnload()}[t.c,t.yt,t.g].forEach(t=>t.delete(e))}})(t,this)},e["s-init"]=function(){(function n(t,e,o,i,f){if(!t.ut.has(e)&&t.p.get(e)&&!t.a.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.ut.set(e,!0);try{C(t.j.get(e)),(f=t.yt.get(e))&&(f.forEach(t=>t(e)),t.yt.delete(e))}catch(n){t.b(n,4,e)}t.M.C(e,o),s(t,e)}})(t,this,o)},e.forceUpdate=function(){a(t,this)},function i(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o],f=i.bt;1===f||2===f?y(e,o,function n(){return(t.y.get(this)||{})[o]},function n(e){m(t,this,o,r(i.L,e))}):6===f&&h(e,o,L)})}(t,n.A,e)}function W(t,n,e,o){return function(){const i=arguments;return function f(t,n,e){let o=n[e];const i=t.gt.body;return i?(o||(o=i.querySelector(e)),o||(o=n[e]=t.Q(e),t.Z(i,o)),o.componentOnReady()):Promise.resolve()}(t,n,e).then(t=>t[o].apply(t,i))}}const N="ssrv",O="ssrc",E="$",S={},A={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=t=>null!=t,R=t=>t.toLowerCase(),L=()=>{},q=[],B={forEach:(t,n)=>{t.forEach((t,e,o)=>n(u(t),e,o))},map:(t,n)=>t.map((t,e,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(n(u(t),e,o)))},D="wc-",P="http://www.w3.org/1999/xlink";let F=!1;(function H(t,n,e,o,f,r){function s(t,n){if(!e.customElements.get(t.t)){j(b,u[t.t]=t,n.prototype,r);{const e=n.observedAttributes=[];for(const n in t.A)t.A[n].R&&e.push(t.A[n].R)}e.customElements.define(t.t,n)}}const u={html:{}},p={},d=e[t]=e[t]||{},v=function m(t,n,e){t.ael||(t.ael=((t,n,e,o)=>t.addEventListener(n,e,o)),t.rel=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={gt:e,wt:!1,nt:t=>t.nodeType,Q:t=>e.createElement(t),U:(t,n)=>e.createElementNS(t,n),I:t=>e.createTextNode(t),Mt:t=>e.createComment(t),K:(t,n,e)=>t.insertBefore(n,e),J:t=>t.remove(),Z:(t,n)=>t.appendChild(n),C:(t,n)=>t.classList.add(n),G:t=>t.childNodes,V:t=>t.parentNode,tt:t=>t.nextSibling,ft:t=>t.previousSibling,X:t=>R(t.nodeName),ct:t=>t.textContent,_:(t,n)=>t.textContent=n,et:(t,n)=>t.getAttribute(n),$t:(t,n,e)=>t.setAttribute(n,e),kt:(t,n,e,o)=>t.setAttributeNS(n,e,o),q:(t,n)=>t.removeAttribute(n),B:(t,n)=>t.hasAttribute(n),at:n=>n.getAttribute("mode")||(t.Context||{}).mode,Ct:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.Y(t):"body"===o?e.body:"document"===o?e:"window"===o?n:t,D:(n,e,f,c,r,s,l,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Ct(n,s):"object"==typeof s?p=s:(u=e.split(":")).length>1&&(p=i.Ct(n,u[0]),e=u[1]),!p)return;let v=f;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===A[u[1]]&&f(t)})),l=i.wt?{capture:!!c,passive:!!r}:!!c,t.ael(p,e,v,l),d||o.set(n,d={}),d[a]=(()=>{p&&t.rel(p,e,v,l),d[a]=null})},P:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},dt:(t,n)=>t.attachShadow(n)};return i.w=!!i.gt.documentElement.attachShadow,i.xt=((t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))),i.Y=((t,n)=>(n=i.V(t))&&11===i.nt(n)?n.host:n),i}(d,e,o);n.isServer=n.isPrerender=!(n.isClient=!0),n.window=e,n.location=e.location,n.document=o,n.resourcesUrl=n.publicPath=f,d.h=l,d.Context=n;const h=e["s-defined"]=e.$definedCmps=e["s-defined"]||e.$definedCmps||{};let y=0;const b={M:v,jt:s,Wt:n.emit,v:t=>u[v.X(t)],N:t=>n[t],isClient:!0,lt:t=>!(!h[v.X(t)]&&!b.v(t)),st:()=>t+y++,b:(t,n,e)=>void 0,Nt:t=>(function n(t,e,o){return{create:W(t,e,o,"create"),componentOnReady:W(t,e,o,"componentOnReady")}})(v,p,t),queue:n.queue=function g(t,n){function e(t){for(let n=0;n<t.length;n++)try{t[n](f())}catch(t){}t.length=0}function o(t,n){let e,o=0;for(;o<t.length&&(e=f())<n;)try{t[o++](e)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,e(s);const n=f()+7*Math.ceil(a*(1/22));o(l,n),o(u,n),l.length>0&&(u.push(...l),l.length=0),(p=s.length+l.length+u.length>0)?t.raf(i):a=0}const f=()=>n.performance.now(),c=Promise.resolve(),r=[],s=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick(t){r.push(t),1===r.length&&c.then(()=>e(r))},read(n){s.push(n),p||(p=!0,t.raf(i))},write(n){l.push(n),p||(p=!0,t.raf(i))}}}(d,e),mt:function w(t,n,e){if(t.d)a(b,n);else{const e="string"==typeof t.Ot?t.Ot:t.Ot[n.mode],o=2===t.pt||1===t.pt&&!v.w;import(f+e+(o?".sc":"")+".js").then(e=>{try{t.d=e[(t=>R(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e,i,f){if(i){const e=n.t+(f||E);if(!n[e]){const o=t.Q("template");n[e]=o,o.innerHTML=`<style>${i}</style>`,t.Z(t.gt.head,o)}}}(v,t,t.pt,t.d.style,t.d.styleMode)}catch(n){t.d=class{}}a(b,n)}).catch(t=>void 0)}},c:new WeakMap,Et:new WeakMap,rt:new WeakMap,ht:new WeakMap,ut:new WeakMap,m:new WeakMap,g:new WeakMap,p:new WeakMap,a:new WeakMap,l:new WeakMap,yt:new WeakMap,St:new WeakMap,j:new WeakMap,y:new WeakMap};b.render=k(b,v);const M=v.gt.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{b.ut.set(M,d.loaded=b.u=!0),v.xt(e,"appload",{detail:{namespace:t}})}),function $(t,n,e){const o=e.querySelectorAll(`[${N}]`),i=o.length;let f,c,r,s,l,u;if(i>0)for(t.ut.set(e,!0),s=0;s<i;s++)for(f=o[s],c=n.et(f,N),(r={}).vtag=n.X(r.r=f),t.j.set(f,r),l=0,u=f.childNodes.length;l<u;l++)x(n,f.childNodes[l],r,c,!0)}(b,v,M),b.k=((t,n,e,o)=>{(function f(t,n,e,o){const f=2===e.pt||1===e.pt&&!t.M.w;let c=e.t+o.mode,r=e[c];if(f&&(o["s-sc"]=i(e,o.mode)),r||(r=e[c=e.t+E],f&&(o["s-sc"]=i(e))),r){let i=n.gt.head;if(n.w)if(1===e.pt)i=o.shadowRoot;else{let t=o;for(;t=n.V(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let f=t.Et.get(i);if(f||t.Et.set(i,f={}),!f[c]){let t;{t=r.content.cloneNode(!0),f[c]=!0;const e=i.querySelectorAll("[data-styles]");n.K(i,t,e.length&&e[e.length-1].nextSibling||i.firstChild)}}}})(t,n,e,o)}),(d.components||[]).map(t=>{const n=function e(t,n,o){const i={t:t[0],A:{color:{R:"color"}}};i.Ot=t[1];const f=t[3];if(f)for(n=0;n<f.length;n++)o=f[n],i.A[o[0]]={bt:o[1],T:!!o[2],R:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,L:o[4]};return i.pt=t[4],t[5]&&(i.At=t[5].map(c)),i}(t);return u[n.t]=n}).forEach(t=>s(t,class extends HTMLElement{})),function C(t,n,e,o,i,f){if(n.componentOnReady=((n,e)=>{if(!n.nodeName.includes("-"))return e(null),!1;const o=t.v(n);if(o)if(t.ut.has(n))e(n);else{const o=t.yt.get(n)||[];o.push(e),t.yt.set(n,o)}return!!o}),i){for(f=i.length-1;f>=0;f--)n.componentOnReady(i[f][0],i[f][1])&&i.splice(f,1);for(f=0;f<o.length;f++)if(!e[o[f]].componentOnReady)return;for(f=0;f<i.length;f++)i[f][1](null);i.length=0}}(b,d,e,e["s-apps"],e["s-cr"]),d.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"ionicons","hydrated");