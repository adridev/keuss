(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(6),r=(a(0),a(91)),l={id:"factory",title:"Factory API",sidebar_label:"Factory"},o={unversionedId:"api/factory",id:"api/factory",isDocsHomePage:!1,title:"Factory API",description:"Backends, which work as queue factories, have the following operations:",source:"@site/docs/api/factory.md",permalink:"/keuss/docs/api/factory",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/api/factory.md",sidebar_label:"Factory",sidebar:"someSidebar",previous:{title:"Pipelines",permalink:"/keuss/docs/usage/pipelines"},next:{title:"Signaller API",permalink:"/keuss/docs/api/signal"}},c=[{value:"<code>MQ</code>: Factory initialization",id:"mq-factory-initialization",children:[{value:"MongoDB defaults",id:"mongodb-defaults",children:[]},{value:"Dead Letter",id:"dead-letter",children:[]}]},{value:"<code>queue</code>: Queue creation",id:"queue-queue-creation",children:[]},{value:"<code>close</code>: Factory close",id:"close-factory-close",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Backends, which work as queue factories, have the following operations:"),Object(r.b)("h2",{id:"mq-factory-initialization"},Object(r.b)("inlineCode",{parentName:"h2"},"MQ"),": Factory initialization"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var QM = require ('keuss/backends/<backend>');\n\nMQ (opts, (err, factory) => {\n  // factory contains the actual factory, initialized\n})\n")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"opts")," is an object containing initialization options. Common properties to all backends are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": Name for the factory, defaults to 'N'."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stats"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": stats backend to use, as result of ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/stats/<provider>')"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/stats/mem')"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the provider."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"signaller"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": signaller provider to use, as result of ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/signal/<provider>')"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"require ('keuss/signal/local')"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the provider."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deadletter"),": deadletter options, described below.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_ko"),": max rollbacks per element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queue"),": deadletter queue name.")))),Object(r.b)("p",null,"The following are backend-dependent values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"backends ",Object(r.b)("em",{parentName:"li"},"mongo"),", ",Object(r.b)("em",{parentName:"li"},"pl-mongo")," and ",Object(r.b)("em",{parentName:"li"},"ps-mongo"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": mongodb url to use, defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"mongodb://localhost:27017/keuss"),"."))),Object(r.b)("li",{parentName:"ul"},"backends ",Object(r.b)("em",{parentName:"li"},"redis-list")," and ",Object(r.b)("em",{parentName:"li"},"redis-oq"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"redis"),": data to create a redis connection to the Redis acting as backend, see below."))),Object(r.b)("li",{parentName:"ul"},"backend ",Object(r.b)("em",{parentName:"li"},"ps-mongo"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ttl"),": time to keep consumed elements in the collection after being removed. Defauls to 3600 secs.")))),Object(r.b)("h3",{id:"mongodb-defaults"},"MongoDB defaults"),Object(r.b)("p",null,"On MongoDB-based backends, ",Object(r.b)("inlineCode",{parentName:"p"},"signaller")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stats")," defaults to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"signaller"),": uses ",Object(r.b)("inlineCode",{parentName:"li"},"mongo-capped"),", using the same mongodb url than the backend, but postfixing the db with ",Object(r.b)("inlineCode",{parentName:"li"},"_signal"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stats"),": uses ",Object(r.b)("inlineCode",{parentName:"li"},"mongo-capped"),", using the same mongodb url than the backend, but postfixing the db with ",Object(r.b)("inlineCode",{parentName:"li"},"_stats"),".\nThis alows cleaner and more concise initialization, using a sane default.")),Object(r.b)("h3",{id:"dead-letter"},"Dead Letter"),Object(r.b)("p",null,"The concept of ",Object(r.b)("em",{parentName:"p"},"deadletter")," is very common on queue middlewares: in case reserve/commit/rollback is used to consume, a maximum number of fails (reserve-rollback) can be set on each element; if an element sees more rollbacks than allowed, the element is moved to an special queue (dead letter queue) for later, offline inspection."),Object(r.b)("p",null,"By default, keuss uses no deadletter queue; it can be activated by passing a ",Object(r.b)("inlineCode",{parentName:"p"},"deadletter")," object at the time of factory creation, in the options:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var factory_opts = {\n  url: 'mongodb://localhost/qeus',\n  deadletter: {\n    max_ko: 3\n  }\n};\n\n// initialize factory\nMQ(factory_opts, (err, factory) => {\n  ...\n")),Object(r.b)("p",null,"This object must not be empty, and can contain the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_ko"),": maximum number of rollbacks per element allowed. The next rollback will cause the element to be moved to the deadletter queue. Defaults to 0, which means ",Object(r.b)("inlineCode",{parentName:"li"},"infinite"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queue"),": queue name of the deadletter queue, defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"__deadletter__"),".")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All storage backends support deadletter. In ",Object(r.b)("inlineCode",{parentName:"p"},"ps-mongo")," the move-to-deadletter (as it is the case with other move-to-queue operations) is atomic; in the rest, the element is first committed in the original queue and then pushed inside deadletter."))),Object(r.b)("h2",{id:"queue-queue-creation"},Object(r.b)("inlineCode",{parentName:"h2"},"queue"),": Queue creation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// factory has been initialized\nvar q = factory.queue (<name>, <options>);\n")),Object(r.b)("p",null,"Where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": string to be used as queue name. Queues with the same name are in fact the same queue if they're backed in the same factory type using the same initialization data (mongodb url or redis conn-data)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options"),": the options passed at backend initialization are used as default values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"pollInterval: rearm or poll period in millisecs for get operations, defaults to 15000 (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"../usage/no-signaller"}),"Working with no signallers"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"signaller"),": signaller to use for the queue.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": signaller factory."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the signaller factory (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"signal"}),"Signaler"),")."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stats"),": stats store to use for this queue.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),": stats factory."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"opts"),": options for the stats factory (see below).")))))),Object(r.b)("h2",{id:"close-factory-close"},Object(r.b)("inlineCode",{parentName:"h2"},"close"),": Factory close"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"factory.close (err => {...});\n")),Object(r.b)("p",null,"Frees up resources on the factory. Queues created with the factory will become unusable afterwards. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keuss/docs/usage/shutdown"}),"'Shutdown process'")," for more info."))}s.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?i.a.createElement(m,o(o({ref:t},b),{},{components:a})):i.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<r;b++)l[b]=a[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);