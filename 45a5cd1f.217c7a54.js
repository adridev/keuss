(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(92)),b={id:"concepts",title:"Concepts",sidebar_label:"Concepts"},c={unversionedId:"concepts",id:"concepts",isDocsHomePage:!1,title:"Concepts",description:"Queue",source:"@site/docs/concepts.md",permalink:"/keuss/docs/concepts",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/concepts.md",sidebar_label:"Concepts",sidebar:"someSidebar",previous:{title:"Quickstart",permalink:"/keuss/docs/quickstart"},next:{title:"Putting all together",permalink:"/keuss/docs/usage/putting-all-together"}},l=[{value:"Queue",id:"queue",children:[]},{value:"Bucket",id:"bucket",children:[]},{value:"Pipeline",id:"pipeline",children:[]},{value:"Processor",id:"processor",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Signaller",id:"signaller",children:[]},{value:"Stats",id:"stats",children:[]},{value:"How all fits together",id:"how-all-fits-together",children:[]}],o={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"queue"},"Queue"),Object(i.b)("p",null,"a ",Object(i.b)("strong",{parentName:"p"},"Queue")," is more of an interface, a definition of what it can do. Keuss queues are capable of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Insert one element."),Object(i.b)("li",{parentName:"ul"},"Schedule an element: insert one element with a not-before datetime."),Object(i.b)("li",{parentName:"ul"},"Get an element, and block for some specified time if no element is available."),Object(i.b)("li",{parentName:"ul"},"Reserve an element, and block for some specified time if no element is available."),Object(i.b)("li",{parentName:"ul"},"Commit (remove) or rollback (return back) a previously reserved element."),Object(i.b)("li",{parentName:"ul"},"Get element count."),Object(i.b)("li",{parentName:"ul"},"Get element count whose not-before datetime is in the future (scheduled elements)."),Object(i.b)("li",{parentName:"ul"},"Get usage stats: elements inserted, elements extracted.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Element")," here translates to any js object. Internally, it's usually managed as json."),Object(i.b)("h2",{id:"bucket"},"Bucket"),Object(i.b)("p",null,"The initial idea for Keuss Queues, transtated the elements inserted in the queue into rows of the backed storage. This makes it easy to inspect the elements values directly in the backend, which is pretty useful when you need to debug things up. Buckets came later, as a way to pack more than one message into a single row of the backend to gain performance. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"usage/buckets"}),"Bucked-based backends"),"."),Object(i.b)("h2",{id:"pipeline"},"Pipeline"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"usage/pipelines"}),"pipeline"))," is an enhanced queue that provides an extra operation: pass an element to another queue ",Object(i.b)("strong",{parentName:"p"},"atomically"),". In an scenario where processors are linked with queues, it is usually a good feature to allow the ",Object(i.b)("em",{parentName:"p"},"'commit element in incoming queue, insert element in the next queue'")," to be atomic. This removes chances for race conditions, or message losses."),Object(i.b)("p",null,"The pipeline concept is, indeed, an extension of the reserve-commit model; it is so far implemented only atop mongodb, and it is anyway considered as a 'low-level' feature, best used by means of specialized classes to encapsulate the aforementioned processors."),Object(i.b)("h2",{id:"processor"},"Processor"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"processor")," is an object tied to one or more queues, that controls the flow of messages between them. They are used mainly to define ",Object(i.b)("strong",{parentName:"p"},"pipelines"),". Currently there are 4 specialized classes of processors defined:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"usage/pipelines#baselink"}),"BaseLink"),": This is really more of a base definition for the rest of the specialized processors."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"usage/pipelines#directlink"}),"DirectLink")," (one queue to another)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"usage/pipelines#choicelink"}),"ChoiceLink")," (one queue to one or more queues)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"usage/pipelines#sink"}),"Sink")," (endpoint, one queue to none).")),Object(i.b)("h2",{id:"storage"},"Storage"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Storage")," or ",Object(i.b)("strong",{parentName:"p"},"Backend")," provides almost-complete queue primitives, fully functional and already usable as is. Keuss comes with 7 backends, with various levels of features and performance:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo")),", a mongodb-based backend that provides the full set of queue features, still with decent performance."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"redis-oq")),", backed using an ordered queue on top of redis (made in turn with a sorted set, a hash and some lua). Provides all queue features including reserve-commit-rollback. Noticeable faster than mongodb."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"redis-list")),", backed using a redis list. Does not offer reserve-commit-rollback nor the ability to schedule, but is much faster than redis-oq"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"pl-mongo")),", a version of the ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo"))," backend that provides pipelining capabilities (the queues it produces are also pipelines)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"ps-mongo")),", a version of the ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo"))," backend where elements are not physically deleted from the collection when extracted; instead, they are just marked as processed and later deleted automatically using a mongodb TTL index."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"bucket-mongo")),", a first attepmt on storing more than one element on each mongodb record in order to break past mongodb I/O limitations. It is very simple, lacking schedule and reserve support. However, it has staggering throughput on a reasonable durability."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"bucket-mongo-safe")),", an evolution of ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"bucket-mongo")),", provides both scheduling and reserve support with a performance only a bit below ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"bucket-mongo")),".")),Object(i.b)("p",null,"As mentioned before, persistence and High Availability (HA) depends exclusively on the underliying system: mongodb provides production-grade HA and persistence while using potentially gigantic queues, and with redis one can balance performance and simplicity over reliability and durability, by using standalone redis, redis sentinel or redis cluster. Keuss uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/luin/ioredis"}),"ioredis")," as redis driver, which supports all 3 cases."),Object(i.b)("p",null,"The following table shows the capabilities of each backend:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"backend"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"delay/schedule"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"reserve/commit"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"pipelining"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"history"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"throughput"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redis-list"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"++++")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redis-oq"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"+++")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mongo"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"++")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pl-mongo"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ps-mongo"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"++")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket-mongo"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"+++++")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket-mongo-safe"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"+++++")))),Object(i.b)("h2",{id:"signaller"},"Signaller"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Signaller")," provides a bus interconnecting all keuss clients, so events can be shared. Keuss provides 3 signallers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"local"))," : provides in-proccess messaging, useful only for simple cases or testing"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"redis-pubsub")),": uses the pubsub subsystem provided by redis"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo-capped")),": uses pubsub on top of a mongodb capped collection, using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@nodebb/mubsub"}),"@nodebb/mubsub"))),Object(i.b)("p",null,"So far, the only events published by keuss are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"element inserted in queue X"),", which allows other clients waiting for elements to be available to wake up and retry. A client will not fire an event if\nanother one of the same type (same client, same queue) was already fired less than 50ms ago."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"queue X paused/resumed"),".")),Object(i.b)("p",null,"The use of a signaller provider different from ",Object(i.b)("inlineCode",{parentName:"p"},"local")," allows the formation of a cluster of clients: all those clients sharing the same signaller object\n(with the same configuration, obviously) will see and share the same set of events and therefore can collaborate (for example, all consumers of a given\nqueue ",Object(i.b)("em",{parentName:"p"},"on every machine")," will be awaken when an insertion happens ",Object(i.b)("em",{parentName:"p"},"on any machine"),")"),Object(i.b)("h2",{id:"stats"},"Stats"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Stats")," provides counters and metrics on queues, shared among keuss clients. The supported stats are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Elements put"),Object(i.b)("li",{parentName:"ul"},"Elements got"),Object(i.b)("li",{parentName:"ul"},"Paused status")),Object(i.b)("p",null,"Three options are provided to store the stats:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mem")),": very simple in-process, memory based."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"redis")),": backed by redis hashes. Modifications are buffered in memory and flushed every 100ms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo")),": backed by mongodb using one object per queue inside a single collection. Modifications are buffered in memory and flushed every 100ms.")),Object(i.b)("p",null,"The use of a stats provider different from ",Object(i.b)("inlineCode",{parentName:"p"},"mem")," allows for a shared view of a cluster of clients: all those clients sharing the same stats object\n(with the same configuration, obviously) will see a coherent, aggregated view of the stats (all clients will update the stats)"),Object(i.b)("p",null,"The stats can also be used as a queue discovery source: existing queues can be recreated from the information stored (in fact, extra information\nneeded to ensure this is also stored alongside the actual stats). Keuss does not, at this point, provide any actual ",Object(i.b)("em",{parentName:"p"},"recreate")," functionality on\ntop of this"),Object(i.b)("h2",{id:"how-all-fits-together"},"How all fits together"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"Queues")),", or rather clients to individual queues, are created using a ",Object(i.b)("em",{parentName:"li"},"backend")," as factory."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"Backends"))," need to be initialized before being used. Exact initialization details depend on each backend."),Object(i.b)("li",{parentName:"ul"},"When creating a ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"queue")),", a ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"signaller"))," and a ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"stats"))," are assigned to it. The actual class/type to be used can be specified at the queue's creation moment, or at the backend initialization moment. By default ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"local"))," and ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mem")),", respectively, are used for redis-based backends; for mongodb-based backends, ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo-capped"))," and ",Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"mongo"))," are used intead as defaults"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"Queues"))," are created on-demand, and are never destroyed as far as Keuss is concerned. They do exist as long as the underlying backend kepts them in existence: for example, redis queues dissapear as such when they become empty."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"em"},"Pipelines"))," are, strictly speaking, just enhanced queues; as such they behave and can be used as a queue. More info on pipelines ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/keuss/docs/usage/pipelines"}),"here"))))}s.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(b,".").concat(u)]||m[u]||p[u]||i;return a?r.a.createElement(d,c(c({ref:t},o),{},{components:a})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);