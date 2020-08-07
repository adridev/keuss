(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),l=(n(0),n(91)),i={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},o={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"* v1.6.0",source:"@site/docs/changelog.md",permalink:"/keuss/docs/changelog",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/changelog.md",sidebar_label:"Changelog",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/keuss/docs/examples"}},c=[],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"v1.6.0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"added sane defaults for stats and signal for mongodb-based backends (using mongo stats and signal)"),Object(l.b)("li",{parentName:"ul"},"added pipeline builder"),Object(l.b)("li",{parentName:"ul"},"added ability to create a full pipeline from text (making it trivial to be stored in file)"))),Object(l.b)("li",{parentName:"ul"},"v1.5.12",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"corrected small pipeline-related issues"))),Object(l.b)("li",{parentName:"ul"},"v1.5.11 (void)"),Object(l.b)("li",{parentName:"ul"},"v1.5.10",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pipelines overhaul"),Object(l.b)("li",{parentName:"ul"},"mubsub change to @nodebb/mubsub"))),Object(l.b)("li",{parentName:"ul"},"v1.5.9:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"added some complete, meaningful examples"))),Object(l.b)("li",{parentName:"ul"},"v1.5.8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"added deadletter support"))),Object(l.b)("li",{parentName:"ul"},"v1.5.7",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"added resvSize support"))),Object(l.b)("li",{parentName:"ul"},"v1.5.4:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"added pause support"),Object(l.b)("li",{parentName:"ul"},"deps updated"))),Object(l.b)("li",{parentName:"ul"},"v1.5.3:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"use mongodb driver v3.2 (was v2.2)"))),Object(l.b)("li",{parentName:"ul"},"v1.5.2",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"added bucket-based backends: 2 backends using buckets/buffering on top of mongodb")))))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);