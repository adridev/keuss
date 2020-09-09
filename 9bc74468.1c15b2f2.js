(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(92)),l={id:"queue",title:"Queue API",sidebar_label:"Queue"},c={unversionedId:"api/queue",id:"api/queue",isDocsHomePage:!1,title:"Queue API",description:"stats: Queue stats",source:"@site/docs/api/queue.md",permalink:"/keuss/docs/api/queue",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/api/queue.md",sidebar_label:"Queue",sidebar:"someSidebar",previous:{title:"Stats API",permalink:"/keuss/docs/api/stats"},next:{title:"Examples",permalink:"/keuss/docs/examples"}},o=[{value:"<code>stats</code>: Queue stats",id:"stats-queue-stats",children:[]},{value:"<code>name</code>: Queue name",id:"name-queue-name",children:[]},{value:"<code>type</code>: Queue type",id:"type-queue-type",children:[]},{value:"<code>size</code>: Queue occupation",id:"size-queue-occupation",children:[]},{value:"<code>totalSize</code>: Total queue occupation",id:"totalsize-total-queue-occupation",children:[]},{value:"<code>schedSize</code>: Size of Scheduled",id:"schedsize-size-of-scheduled",children:[]},{value:"<code>resvSize</code>: Reserved elements size",id:"resvsize-reserved-elements-size",children:[]},{value:"<code>pause</code> / <code>paused</code>: Pause/Resume",id:"pause--paused-pauseresume",children:[]},{value:"<code>next_t</code>: Time of schedule of next message",id:"next_t-time-of-schedule-of-next-message",children:[]},{value:"<code>push</code>: Add element to queue",id:"push-add-element-to-queue",children:[]},{value:"<code>pop</code>: Get element from queue",id:"pop-get-element-from-queue",children:[]},{value:"<code>cancel</code>: Cancel a pending Pop",id:"cancel-cancel-a-pending-pop",children:[]},{value:"<code>ok</code>: Commit a reserved element",id:"ok-commit-a-reserved-element",children:[]},{value:"<code>ko</code>: Roll back a reserved element",id:"ko-roll-back-a-reserved-element",children:[]},{value:"<code>drain</code>: Drain queue",id:"drain-drain-queue",children:[]}],s={rightToc:o};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"stats-queue-stats"},Object(r.b)("inlineCode",{parentName:"h3"},"stats"),": Queue stats"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.stats ((err, res) => {\n  ...\n})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"res")," contains usage statistics (elements inserted, elements extracted, paused status).")),Object(r.b)("h3",{id:"name-queue-name"},Object(r.b)("inlineCode",{parentName:"h3"},"name"),": Queue name"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var qname = q.name ()\n")),Object(r.b)("h3",{id:"type-queue-type"},Object(r.b)("inlineCode",{parentName:"h3"},"type"),": Queue type"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var qtype = q.type ()\n")),Object(r.b)("p",null,"Returns a string with the type of the queue (the type of backend which was used to create it)."),Object(r.b)("h3",{id:"size-queue-occupation"},Object(r.b)("inlineCode",{parentName:"h3"},"size"),": Queue occupation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.size ((err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Returns the number of elements in the queue that are already elligible (that is, excluding scheduled elements with a schedule time in the future)."),Object(r.b)("h3",{id:"totalsize-total-queue-occupation"},Object(r.b)("inlineCode",{parentName:"h3"},"totalSize"),": Total queue occupation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.totalSize ((err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Returns the number of elements in the queue (that is, including scheduled elements with a schedule time in the future)."),Object(r.b)("h3",{id:"schedsize-size-of-scheduled"},Object(r.b)("inlineCode",{parentName:"h3"},"schedSize"),": Size of Scheduled"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.schedSize ((err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Returns the number of scheduled elements in the queue (that is, those with a schedule time in the future). Returns 0 if the queue does not support scheduling."),Object(r.b)("h3",{id:"resvsize-reserved-elements-size"},Object(r.b)("inlineCode",{parentName:"h3"},"resvSize"),": Reserved elements size"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.resvSize ((err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Returns the number of reserved elements in the queue. Returns ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if the queue does not support reserve."),Object(r.b)("h3",{id:"pause--paused-pauseresume"},Object(r.b)("inlineCode",{parentName:"h3"},"pause")," / ",Object(r.b)("inlineCode",{parentName:"h3"},"paused"),": Pause/Resume"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// pauses the queue\nq.pause (true)\n\n// resumes the queue\nq.pause (false)\n\n// gets paused status of queue\nq.paused ((err, is_paused) => {\n  ...\n})\n")),Object(r.b)("p",null,"Pauses/Resumes all consumers on this queue (calls to ",Object(r.b)("inlineCode",{parentName:"p"},"pop()"),"). Producers are not afected (calls to ",Object(r.b)("inlineCode",{parentName:"p"},"push()"),")."),Object(r.b)("p",null,"The pause/resume condition is propagated via the signallers, so this affects all consumers, not only those local to the process, if a redis-pubsub or mongo-capped signaller is used."),Object(r.b)("p",null,"Also, the paused condition is stored as stats, so any new call to ",Object(r.b)("inlineCode",{parentName:"p"},"pop()")," will honor it."),Object(r.b)("h3",{id:"next_t-time-of-schedule-of-next-message"},Object(r.b)("inlineCode",{parentName:"h3"},"next_t"),": Time of schedule of next message"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.next_t ((err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Date"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if queue is empty. Queues with no support for schedule/delay always return `null "),Object(r.b)("h3",{id:"push-add-element-to-queue"},Object(r.b)("inlineCode",{parentName:"h3"},"push"),": Add element to queue"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.push (payload, [opts,] (err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Adds payload to the queue and calls passed callback upon completion. Callback's ",Object(r.b)("em",{parentName:"p"},"res")," will contain the id assigned to the inserted element, if the backup provides one."),Object(r.b)("p",null,"Possible opts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mature"),": unix timestamp where the element would be elligible for extraction. It is guaranteed that the element won't be extracted before this time."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delay"),": delay in seconds to calculate the mature timestamp, if mature is not provided. For example, a delay=120 guarantees the element won't be extracted until 120 secs have elapsed ",Object(r.b)("em",{parentName:"li"},"at least"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tries"),": value to initialize the retry counter, defaults to 0 (still no retries).")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"mature")," and ",Object(r.b)("strong",{parentName:"p"},"delay")," have no effect if the backend does not support delay/schedule."))),Object(r.b)("h3",{id:"pop-get-element-from-queue"},Object(r.b)("inlineCode",{parentName:"h3"},"pop"),": Get element from queue"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var tr = q.pop (cid, [opts,] (err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Obtains an element from the queue. Callback is called with the element obtained if any, or if an error happened. If defined, the operation will wait for ",Object(r.b)("inlineCode",{parentName:"p"},"opts.timeout")," seconds for an element to appear in the queue before bailing out (with both ",Object(r.b)("inlineCode",{parentName:"p"},"err")," and ",Object(r.b)("inlineCode",{parentName:"p"},"res")," being null). However, it immediately returns an id that can be used to cancel the operation at anytime."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"*cid*")," is an string that identifies the consumer entity; it is used only for debugging purposes."),Object(r.b)("p",null,"Possible opts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"timeout"),": milliseconds to wait for an elligible element to appear in the queue to be returned. If not defined it will wait forever"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"reserve"),": if ",Object(r.b)("inlineCode",{parentName:"li"},"true")," the element is only reserved, not completely returned. This means either ",Object(r.b)("em",{parentName:"li"},"ok")," or ",Object(r.b)("em",{parentName:"li"},"ko")," operations are needed upon the obtained element once processed, otherwise the element will be rolled back (and made available again) at some point in the future (this is only available on backends capable of reserve/commit).")),Object(r.b)("h3",{id:"cancel-cancel-a-pending-pop"},Object(r.b)("inlineCode",{parentName:"h3"},"cancel"),": Cancel a pending Pop"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var tr = q.pop (cid, opts, (err, res) => {...});\n.\n.\n.\nq.cancel (tr);\n")),Object(r.b)("p",null,"Cancels a pending ",Object(r.b)("inlineCode",{parentName:"p"},"pop")," operation, identified by the value returned by ",Object(r.b)("inlineCode",{parentName:"p"},"pop()")),Object(r.b)("p",null,"If no ",Object(r.b)("inlineCode",{parentName:"p"},"tr")," param is passed, or it is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", all pending ",Object(r.b)("inlineCode",{parentName:"p"},"pop")," operations on the queue are cancelled. Cancelled ",Object(r.b)("inlineCode",{parentName:"p"},"pop")," operations will get ",Object(r.b)("inlineCode",{parentName:"p"},"'cancel'")," (a string) in the ",Object(r.b)("inlineCode",{parentName:"p"},"error")," parameter value of the callback."),Object(r.b)("h3",{id:"ok-commit-a-reserved-element"},Object(r.b)("inlineCode",{parentName:"h3"},"ok"),": Commit a reserved element"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.ok (id, (err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Commits a reserved element by its id (the id would be assigned to ",Object(r.b)("inlineCode",{parentName:"p"},"res._id")," on the ",Object(r.b)("inlineCode",{parentName:"p"},"res")," param of ",Object(r.b)("inlineCode",{parentName:"p"},"pop()")," operation). This effectively erases the element from the queue."),Object(r.b)("p",null,"Alternatively, you can pass the entire ",Object(r.b)("inlineCode",{parentName:"p"},"res")," object from the ",Object(r.b)("inlineCode",{parentName:"p"},"pop()")," operation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var tr = q.pop ('my-consumer-id', {reserve: true}, (err, res) => {\n  // do something with res\n  ...\n\n  // commit it\n  q.ok (res, (err, res) => {\n    ...\n  });\n});\n")),Object(r.b)("h3",{id:"ko-roll-back-a-reserved-element"},Object(r.b)("inlineCode",{parentName:"h3"},"ko"),": Roll back a reserved element"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.ko (id, next_t, (err, res) => {\n  ...\n})\n")),Object(r.b)("p",null,"Rolls back a reserved element by its id (the id would be at ",Object(r.b)("inlineCode",{parentName:"p"},"res._id")," on the ",Object(r.b)("inlineCode",{parentName:"p"},"res")," param of ",Object(r.b)("inlineCode",{parentName:"p"},"pop()")," operation). This effectively makes the element available again at the queue, marking it to be mature at ",Object(r.b)("inlineCode",{parentName:"p"},"next_t")," (",Object(r.b)("inlineCode",{parentName:"p"},"next_t")," being a millsec-unixtime). If no ",Object(r.b)("inlineCode",{parentName:"p"},"next_t")," is specified or a ",Object(r.b)("inlineCode",{parentName:"p"},"null")," is passed, ",Object(r.b)("inlineCode",{parentName:"p"},"now()")," is assumed."),Object(r.b)("p",null,"As with ",Object(r.b)("inlineCode",{parentName:"p"},"ok()"),", you can use the entire ",Object(r.b)("inlineCode",{parentName:"p"},"res")," object instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var tr = q.pop ('my-consumer-id', {reserve: true}, (err, res) => {\n  // do something with res\n  ...\n\n  // commit or rollback it\n  if (succeed) q.ok (res, (err, res) => {\n    ...\n  })\n  else q.ko (res, (err, res) => {\n    ...\n  })\n});\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You must pass the entire ",Object(r.b)("inlineCode",{parentName:"p"},"res")," object for the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../api/factory#dead-letter"}),"deadletter")," feature to work; even if activated at the factory, ",Object(r.b)("inlineCode",{parentName:"p"},"ko()")," will not honor deadletter if you only pass the ",Object(r.b)("inlineCode",{parentName:"p"},"res._id")," as ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"."))),Object(r.b)("h3",{id:"drain-drain-queue"},Object(r.b)("inlineCode",{parentName:"h3"},"drain"),": Drain queue"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"q.drain (err => {\n  ...\n})\n")),Object(r.b)("p",null,"Drains a queue. This is a needed operation when a backend does read-ahead upon a ",Object(r.b)("inlineCode",{parentName:"p"},"pop()"),", or buffers ",Object(r.b)("inlineCode",{parentName:"p"},"push()")," operations for later; in this case, you may want to be sure that all extra elemens read are actually popped, and all pending pushes are committed."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"'drain' will immediately inhibit ",Object(r.b)("inlineCode",{parentName:"p"},"push()"),": any call to ",Object(r.b)("inlineCode",{parentName:"p"},"push()")," will immediately result in a ",Object(r.b)("inlineCode",{parentName:"p"},"'drain'")," (a string)  in the ",Object(r.b)("inlineCode",{parentName:"p"},"error")," parameter value of the callback. The callback will be called when all pending pushes are committed, and all read-ahead on a pop() has been actually popped."))),Object(r.b)("p",null,"Also, ",Object(r.b)("inlineCode",{parentName:"p"},"drain()")," will also call ",Object(r.b)("inlineCode",{parentName:"p"},"cancel()")," on the queue immediately before finishing, in case of success."))}p.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||r;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);