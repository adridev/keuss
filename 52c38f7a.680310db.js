(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(6),r=(a(0),a(90)),l={id:"factory",title:"Factory API",sidebar_label:"Factory"},o={unversionedId:"api/factory",id:"api/factory",isDocsHomePage:!1,title:"Factory API",description:"Backends, which work as queue factories, have the following operations",source:"@site/docs/api/factory.md",permalink:"/keuss/docs/api/factory",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/api/factory.md",sidebar_label:"Factory",sidebar:"someSidebar",previous:{title:"Pipelines",permalink:"/keuss/docs/usage/pipelines"},next:{title:"Signaller API",permalink:"/keuss/docs/api/signal"}},c=[{value:"MongoDB defaults",id:"mongodb-defaults",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Backends, which work as queue factories, have the following operations"),Object(r.b)("h1",{id:"initialization"},"Initialization"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var QM = require ('keuss/backends/<backend>');\n\nMQ (opts, (err, factory) => {\n  // factory contains the actual factory, initialized\n})\n")),Object(r.b)("p",null,"where 'opts' is an object containing initialization options. Options common to all backends are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": Name for the factory, defaults to 'N'"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stats"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": stats backend to use, as result of ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/stats/<provider>')"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/stats/mem')")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the provider"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"signaller"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": signaller provider to use, as result of ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/signal/<provider>')"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/signal/local')")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the provider"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deadletter"),": deadletter options, described above",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_ko"),": max rollbacks per element"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queue"),": deadletter queue name")))),Object(r.b)("p",null,"the following backend-dependent values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"backends ",Object(r.b)("em",{parentName:"li"},"mongo"),", ",Object(r.b)("em",{parentName:"li"},"pl-mongo")," and ",Object(r.b)("em",{parentName:"li"},"ps-mongo"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": mongodb url to use, defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"mongodb://localhost:27017/keuss")))),Object(r.b)("li",{parentName:"ul"},"backends ",Object(r.b)("em",{parentName:"li"},"redis-list")," and ",Object(r.b)("em",{parentName:"li"},"redis-oq"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"redis"),": data to create a redis connection to the Redis acting as backend, see below"))),Object(r.b)("li",{parentName:"ul"},"backend ",Object(r.b)("em",{parentName:"li"},"ps-mongo"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ttl"),": time to keep consumed elements in the collection after being removed. Defauls to 3600 secs")))),Object(r.b)("h2",{id:"mongodb-defaults"},"MongoDB defaults"),Object(r.b)("p",null,"On MongoDB-based backends, ",Object(r.b)("inlineCode",{parentName:"p"},"signaller")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stats")," default to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"signaller"),": uses ",Object(r.b)("inlineCode",{parentName:"li"},"mongo-capped"),", using the same mongodb url than the backend, but postfixing the db with ",Object(r.b)("inlineCode",{parentName:"li"},"_signal")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stats"),": uses ",Object(r.b)("inlineCode",{parentName:"li"},"mongo-capped"),", using the same mongodb url than the backend, but postfixing the db with ",Object(r.b)("inlineCode",{parentName:"li"},"_stats"),"\nThis alows cleaner and more concise initialization, using a sane default")),Object(r.b)("h1",{id:"queue-creation"},"Queue creation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// factory has been initialized\nvar q = factory.queue (<name>, <options>);\n")),Object(r.b)("p",null,"Where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": string to be used as queue name. Queues with the same name are in fact the same queue if they're backed in the same factory type using the same initialization data (mongodb url or redis conn-data)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options"),": the options passed at backend initialization are used as default values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"pollInterval: rearm or poll period in millisecs for get operations, defaults to 15000 (see ",Object(r.b)("em",{parentName:"li"},"Working with no signallers")," below)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"signaller"),": signaller to use for the queue",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": signaller factory"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the signaller factory (see below)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stats"),": stats store to use for this queue",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": stats factory"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the stats factory (see below)")))))),Object(r.b)("h1",{id:"factory-close"},"Factory close"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"factory.close (err => {...});\n")),Object(r.b)("p",null,"Frees up resources on the factory. Queues created with the factory will become unusable afterwards. See 'Shutdown process' below for more info."),Object(r.b)("h1",{id:"dead-letter"},"Dead Letter"),Object(r.b)("p",null,"The concept of ",Object(r.b)("em",{parentName:"p"},"deadletter")," is very common on queue middlewares: in the case reserve/commit/rollback is used to consume, a maximum number of fails (reserve-rollback) can be set on each element; if an element sees more rollbacks than allowed, the element is moved to an special queue (dead letter queue) for later, offline inspection"),Object(r.b)("p",null,"By default, keuss uses no deadletter queue; it can be activated vy passing an object ",Object(r.b)("inlineCode",{parentName:"p"},"deadletter")," at factory creation time, inside the options:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var factory_opts = {\n  url: 'mongodb://localhost/qeus',\n  deadletter: {\n    max_ko: 3\n  }\n};\n\n// initialize factory\nMQ(factory_opts, (err, factory) => {\n  ...\n")),Object(r.b)("p",null,"This object must not be empty, and can contain the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_ko"),": maximum number of rollbacks pero element allowed. The next rollback will cause the element to be moved to the deadletter queue. Defaults to 0, which means ",Object(r.b)("inlineCode",{parentName:"li"},"infinite")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queue"),": queue name of the deadletter queue, defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"__deadletter__"))),Object(r.b)("p",null,"All storage backends support deadletter. In ",Object(r.b)("inlineCode",{parentName:"p"},"ps-mongo")," the move-to-deadletter (as it is the case with other move-to-queue operations) is atomic; in the rest, the element is first committed in the original queue and then pushed inside deadletter"))}s.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?i.a.createElement(d,o(o({ref:t},b),{},{components:a})):i.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<r;b++)l[b]=a[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);