(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(91)),c={id:"quickstart",title:"Quickstart",sidebar_label:"Quickstart"},o={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Package Install",source:"@site/docs/quickstart.md",permalink:"/keuss/docs/quickstart",editUrl:"https://github.com/pepmartinez/keuss/edit/master/website/docs/quickstart.md",sidebar_label:"Quickstart",sidebar:"someSidebar",previous:{title:"About",permalink:"/keuss/docs/"},next:{title:"Concepts",permalink:"/keuss/docs/concepts"}},s=[{value:"Package Install",id:"package-install",children:[]},{value:"Basic usage (with regular MongoDB backend)",id:"basic-usage-with-regular-mongodb-backend",children:[{value:"Backend interchangeability",id:"backend-interchangeability",children:[]}]},{value:"reserve-commit-rollback",id:"reserve-commit-rollback",children:[{value:"Backend interchangeability",id:"backend-interchangeability-1",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"package-install"},"Package Install"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"keuss")," is installed in the regular way for any npm package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install keuss\n")),Object(i.b)("h2",{id:"basic-usage-with-regular-mongodb-backend"},"Basic usage (with regular MongoDB backend)"),Object(i.b)("p",null,"Here's a minimal example of how keuss works. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/async"}),"async")," is used to implement asynchronous flows in a much readable manner"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const async = require ('async');\nconst MQ =    require ('keuss/backends/mongo');\n\nMQ ({\n  url: 'mongodb://localhost/keuss_test'\n}, (err, factory) => {\n  if (err) return console.error(err);\n\n  // factory ready, create one queue\n  const q = factory.queue ('test_queue', {});\n\n  async.series([\n    cb => q.push ({elem: 1, headline: 'something something', tags: {a: 1, b: 2}}, cb),\n    cb => q.pop ('consumer-1', cb)\n  ], (err, res) => {\n    if (err) {\n      console.error (err);\n    }\n    else {\n      console.log (res[1]);\n      // this should print something like:\n      // {\n      //   _id: <some id>,\n      //   mature: <some date>,\n      //   payload: { elem: 1, headline: 'something something', tags: { a: 1, b: 2 } },\n      //   tries: 0\n      // }\n    }\n\n    factory.close ();\n  });\n});\n")),Object(i.b)("p",null,"This small test creates a queue named ",Object(i.b)("inlineCode",{parentName:"p"},"test_queue")," backed by mongodb in the mongoDB collection at ",Object(i.b)("inlineCode",{parentName:"p"},"mongodb://localhost/keuss_test"),". Then, a single element is first inserted in the queue, then read from it and printed"),Object(i.b)("h3",{id:"backend-interchangeability"},"Backend interchangeability"),Object(i.b)("p",null,"This example works with any available definition of ",Object(i.b)("inlineCode",{parentName:"p"},"MQ"),"; you just need to specify the chosen backend. For example, to use the ",Object(i.b)("inlineCode",{parentName:"p"},"redis-list")," backend:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const MQ = require ('keuss/backends/redis-list');\n")),Object(i.b)("h2",{id:"reserve-commit-rollback"},"reserve-commit-rollback"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const async = require ('async');\nconst MQ =    require ('keuss/backends/mongo');\n\nMQ ({\n  url: 'mongodb://localhost/keuss_test'\n}, (err, factory) => {\n  if (err) return console.error(err);\n\n  // factory ready, create one queue\n  const q = factory.queue ('test_queue', {});\n\n  async.waterfall ([\n    cb => q.push ({elem: 1, headline: 'something something', tags: {a: 1, b: 2}}, cb),  // (1)\n    (item_id, cb) => q.pop ('consumer-1', {reserve: true}, cb),                         // (2)\n    (item, cb) => {\n      console.log ('%s: got %o', new Date().toString (), item);                         // (3)\n      const next_t = new Date().getTime () + 1500;\n      q.ko (item, next_t, cb);                                                          // (4)\n    },\n    (ko_res, cb) => q.pop ('consumer-1', {reserve: true}, cb),                          // (5)\n    (item, cb) => {\n      console.log ('%s: got %o', new Date().toString (), item);                         // (6)\n      q.ok (item, cb);                                                                  // (7)\n    },\n  ], (err, res) => {\n    if (err) console.error (err);\n    factory.close ();\n  });\n});\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"an element is inserted"),Object(i.b)("li",{parentName:"ol"},"an element is reserved. It reserves the element previously inserted, and returns it"),Object(i.b)("li",{parentName:"ol"},"this should print the element reserved"),Object(i.b)("li",{parentName:"ol"},"the element reserved is rejected, indicating that it should not be made available until ",Object(i.b)("inlineCode",{parentName:"li"},"now + 1500")," millisecs"),Object(i.b)("li",{parentName:"ol"},"a second attempt at a reserve, this should return an element after 1500 millisecs"),Object(i.b)("li",{parentName:"ol"},"the same element should be printed here, except for the ",Object(i.b)("inlineCode",{parentName:"li"},"tries")," that should be ",Object(i.b)("inlineCode",{parentName:"li"},"1")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"0")),Object(i.b)("li",{parentName:"ol"},"the element is committed and thus removed from the queue")),Object(i.b)("h3",{id:"backend-interchangeability-1"},"Backend interchangeability"),Object(i.b)("p",null,"This example works with any definition of ",Object(i.b)("inlineCode",{parentName:"p"},"MQ")," that supports reserve/commit (that is, any except ",Object(i.b)("inlineCode",{parentName:"p"},"redis-list")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bucket-mongo"),"); you just need to specify the chosen backend. For example, to use the ",Object(i.b)("inlineCode",{parentName:"p"},"bucket-mongo-safe")," backend:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const MQ = require ('keuss/backends/bucket-mongo-safe');\n")))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);