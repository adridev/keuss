(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(96)),c={id:"shutdown",title:"Shutdown",sidebar_label:"Shutdown"},i={unversionedId:"usage/shutdown",id:"usage/shutdown",isDocsHomePage:!1,title:"Shutdown",description:"It is a good practice to call close(cb) on the factories to release all resources once you're done, or at shutdown if you want your shutdowns clean and graceful (the log-lived redis or mongodb connections are terminated here, for example); also, you should loop over your queues and perform a drain() on them before calling close() on their factories: this will ensure any un-consumed data is popped, and any unwritten data is written. Also, it'll ensure all your (local) waiting consumers will end (on 'cancel' error).",source:"@site/docs/usage/shutdown.md",slug:"/usage/shutdown",permalink:"/keuss/docs/usage/shutdown",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/usage/shutdown.md",version:"current",sidebar_label:"Shutdown",sidebar:"someSidebar",previous:{title:"Bucket-based backends",permalink:"/keuss/docs/usage/buckets"},next:{title:"Using no signaller",permalink:"/keuss/docs/usage/no-signaller"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It is a good practice to call ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../api/factory#close-factory-close"}),Object(a.b)("inlineCode",{parentName:"a"},"close(cb)"))," on the factories to release all resources once you're done, or at shutdown if you want your shutdowns clean and graceful (the log-lived redis or mongodb connections are terminated here, for example); also, you should loop over your queues and perform a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../api/queue#drain-drain-queue"}),Object(a.b)("inlineCode",{parentName:"a"},"drain()"))," on them before calling ",Object(a.b)("inlineCode",{parentName:"p"},"close()")," on their factories: this will ensure any un-consumed data is popped, and any unwritten data is written. Also, it'll ensure all your (local) waiting consumers will end (on 'cancel' error)."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Factories do not keep track of the created Queues, so this can't be done internally as part of the ",Object(a.b)("inlineCode",{parentName:"p"},"close()"),"; this may change in the future."))))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);