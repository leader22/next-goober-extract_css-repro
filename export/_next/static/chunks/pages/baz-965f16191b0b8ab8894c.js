_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"93nd":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/baz",function(){return r("oFCl")}])},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},oFCl:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("q1tI"),o=r.n(n),a=r("rDiO"),c=o.a.createElement;function l(){var e=Object(n.useState)(!0),t=e[0],r=e[1];return Object(n.useEffect)((function(){setTimeout((function(){return r(!1)}),1e3)}),[]),t?c("div",null,"Loading..."):c(a.a,null,"BAZ")}},rDiO:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("q1tI"),o=r.n(n);let a={data:""},c=e=>{try{let t=e?e.querySelector("#_goober"):self._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}catch(a){}return e||a},l=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,i=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,u=(e,t)=>{let r,n="",o="",a="";for(let c in e){let l=e[c];"object"==typeof l?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,o+="@"==c[0]?"f"==c[1]?u(l,c):c+"{"+u(l,"k"==c[1]?"":t)+"}":u(l,r)):"@"==c[0]&&"i"==c[1]?n=c+" "+l+";":a+=u.p?u.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),l):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+l+";"}return a[0]?(r=t?t+"{"+a+"}":a,n+r+o):n+o},f={},s=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?s(e[r]):e[r]);return t},d=(e,t,r,n,o)=>{let a="object"==typeof e?s(e):e,c=f[a]||(f[a]="go"+a.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));if(!f[c]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(i,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);f[c]=u(o?{["@keyframes "+c]:t}:t,r?"":"."+c)}return((e,t,r)=>{t.data.indexOf(e)<0&&(t.data=r?e+t.data:t.data+e)})(f[c],t,n),c},p=(e,t,r)=>e.reduce((e,n,o)=>{let a=t[o];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):e}return e+n+(null==a?"":a)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return d(r.map?p(r,[].slice.call(arguments,1),t.p):r,c(t.target),t.g,t.o,t.k)}b.bind({g:1}),b.bind({k:1});var g=o.a.createElement;function h(){var e,t,r=(e=["\n  color: red;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return h=function(){return r},r}var _=function(e){var t=e.children;return g("section",{className:w},g("div",null,t),g("hr",null),g("a",{href:"/"},"index")," |",g("a",{href:"/foo"},"foo")," |",g("a",{href:"/bar"},"bar")," |",g("a",{href:"/baz"},"baz")," |",g("a",{href:"/qux"},"qux"))},w=b(h())}},[["93nd",0,1]]]);