(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(90)),s={id:"stats",title:"Stats API",sidebar_label:"Stats"},i={unversionedId:"api/stats",id:"api/stats",isDocsHomePage:!1,title:"Stats API",description:"Stats factory is passed to queues either in queue creation or in backend init, inside opts.signaller. Note that the result fo the new operation is indeed the factory; the result of the require is therefore a metafactory",source:"@site/docs/api/stats.md",permalink:"/keuss/docs/api/stats",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/api/stats.md",sidebar_label:"Stats",sidebar:"someSidebar",previous:{title:"Signaller API",permalink:"/keuss/docs/api/signal"},next:{title:"Queue API",permalink:"/keuss/docs/api/queue"}},c=[],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stats factory is passed to queues either in queue creation or in backend init, inside ",Object(o.b)("em",{parentName:"p"},"opts.signaller"),". Note that the result fo the ",Object(o.b)("em",{parentName:"p"},"new")," operation is indeed the factory; the result of the require is therefore a ",Object(o.b)("em",{parentName:"p"},"metafactory")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var local_redis_pubsub = require ('keuss/signal/redis-pubsub');\n\nvar local_redis_opts = {\n  Redis: {\n    port: 6379,\n    host: 'localhost',\n    db: 6\n  }\n};\n\nvar f_opts = {\n  stats: {\n    provider: signal_redis_pubsub,\n    opts: local_redis_opts\n  }\n  .\n  .\n  .\n}\n\nMQ (f_opts, (err, factory) => {\n  // queues created by factory here will use a redis-backed stats, hosted at redis at localhost, db 6\n})\n")),Object(o.b)("p",null,"Stats objects, as of now, store the numer of elements inserted and the number of elements extracted; they are created behind the scenes and tied to queue instances, and the stats-related interface is in fact part of the queues' interface"))}p.isMDXComponent=!0},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?a.a.createElement(b,i(i({ref:t},u),{},{components:r})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);