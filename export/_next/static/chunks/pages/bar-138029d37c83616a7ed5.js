_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"6aMf":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("q1tI"),a=r.n(n),o=r("rDiO"),c=a.a.createElement;function l(){return c(o.a,null,"BAR")}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},hSky:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bar",function(){return r("6aMf")}])},rDiO:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("q1tI"),a=r.n(n);let o={data:""},c=e=>{try{let t=e?e.querySelector("#_goober"):self._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}catch(o){}return e||o},l=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,i=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,u=(e,t)=>{let r,n="",a="",o="";for(let c in e){let l=e[c];"object"==typeof l?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?u(l,c):c+"{"+u(l,"k"==c[1]?"":t)+"}":u(l,r)):"@"==c[0]&&"i"==c[1]?n=c+" "+l+";":o+=u.p?u.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),l):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+l+";"}return o[0]?(r=t?t+"{"+o+"}":o,n+r+a):n+a},f={},s=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?s(e[r]):e[r]);return t},p=(e,t,r,n,a)=>{let o="object"==typeof e?s(e):e,c=f[o]||(f[o]="go"+o.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));if(!f[c]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(i,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);f[c]=u(a?{["@keyframes "+c]:t}:t,r?"":"."+c)}return((e,t,r)=>{t.data.indexOf(e)<0&&(t.data=r?e+t.data:t.data+e)})(f[c],t,n),c},d=(e,t,r)=>e.reduce((e,n,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):e}return e+n+(null==o?"":o)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return p(r.map?d(r,[].slice.call(arguments,1),t.p):r,c(t.target),t.g,t.o,t.k)}b.bind({g:1}),b.bind({k:1});var g=a.a.createElement;function h(){var e,t,r=(e=["\n  background-color: gold;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return h=function(){return r},r}var _=function(e){var t=e.children;return g("section",{className:w},g("div",null,t),g("hr",null),g("a",{href:"/foo"},"foo")," |",g("a",{href:"/bar"},"bar")," |",g("a",{href:"/baz"},"baz")," |",g("a",{href:"/qux"},"qux"))},w=b(h())}},[["hSky",0,1]]]);