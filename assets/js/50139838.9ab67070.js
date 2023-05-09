"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,y=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},l="Python API",i={unversionedId:"api/python-api",id:"api/python-api",title:"Python API",description:"Operator",source:"@site/docs/api/python-api.md",sourceDirName:"api",slug:"/api/python-api",permalink:"/docs/api/python-api",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/api/python-api.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Operator",id:"operator",level:2},{value:"Try it out!",id:"try-it-out",level:3},{value:"Custom Node",id:"custom-node",level:2},{value:"<code>Node()</code>",id:"node",level:4},{value:"<code>.next()</code> or <code>__next__()</code> as an iterator",id:"next-or-__next__-as-an-iterator",level:4},{value:"<code>.send_output(output_id, data)</code>",id:"send_outputoutput_id-data",level:4},{value:"Try it out!",id:"try-it-out-1",level:3}],d={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-api"},"Python API"),(0,o.kt)("h2",{id:"operator"},"Operator"),(0,o.kt)("p",null,"The operator API is a framework for you to implement. The implemented operator will be managed by ",(0,o.kt)("inlineCode",{parentName:"p"},"dora"),". This framework enable us to make optimisation and provide advanced features. It is the recommended way of using ",(0,o.kt)("inlineCode",{parentName:"p"},"dora"),"."),(0,o.kt)("p",null,"An operator requires an ",(0,o.kt)("inlineCode",{parentName:"p"},"on_event")," method and requires to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"DoraStatus")," , depending of it needs to continue or stop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{{#include ../../examples/python-operator-dataflow/object_detection.py:0:25}}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For Python, we recommend to allocate the operator on a single runtime. A runtime will share the same GIL with several operators making those operators run almost sequentially. See: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/pyo3/latest/pyo3/marker/struct.Python.html#deadlocks"},"https://docs.rs/pyo3/latest/pyo3/marker/struct.Python.html#deadlocks"))),(0,o.kt)("h3",{id:"try-it-out"},"Try it out!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an operator python file called ",(0,o.kt)("inlineCode",{parentName:"li"},"object_detection.py"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{{#include ../../examples/python-dataflow/object_detection.py}}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Link it in your graph as:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"{{#include ../../examples/python-dataflow/dataflow.yml:14:20}}\n")),(0,o.kt)("h2",{id:"custom-node"},"Custom Node"),(0,o.kt)("p",null,"The custom node API allow you to integrate ",(0,o.kt)("inlineCode",{parentName:"p"},"dora")," into your application. It allows you to retrieve input and send output in any fashion you want."),(0,o.kt)("h4",{id:"node"},(0,o.kt)("inlineCode",{parentName:"h4"},"Node()")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Node()")," initiate a node from environment variables set by ",(0,o.kt)("inlineCode",{parentName:"p"},"dora-coordinator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from dora import Node\n\nnode = Node()\n")),(0,o.kt)("h4",{id:"next-or-__next__-as-an-iterator"},(0,o.kt)("inlineCode",{parentName:"h4"},".next()")," or ",(0,o.kt)("inlineCode",{parentName:"h4"},"__next__()")," as an iterator"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".next()")," gives you the next input that the node has received. It blocks until the next input becomes available. It will return ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," when all senders has been dropped."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"input_id, value, metadata = node.next()\n\n# or\n\nfor input_id, value, metadata in node:\n")),(0,o.kt)("h4",{id:"send_outputoutput_id-data"},(0,o.kt)("inlineCode",{parentName:"h4"},".send_output(output_id, data)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"send_output")," send data from the node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'node.send_output("string", b"string", {"open_telemetry_context": "7632e76"})\n')),(0,o.kt)("h3",{id:"try-it-out-1"},"Try it out!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install python node API:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dora-rs\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a python file called ",(0,o.kt)("inlineCode",{parentName:"li"},"webcam.py"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{{#include ../../examples/python-dataflow/webcam.py}}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Link it in your graph as:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"{{#include ../../examples/python-dataflow/dataflow.yml:6:12}}\n")))}c.isMDXComponent=!0}}]);