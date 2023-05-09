"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,_=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(_,i(i({ref:t},u),{},{components:n})):a.createElement(_,i({ref:t},u))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="C API",l={unversionedId:"api/c-api",id:"api/c-api",title:"C API",description:"Operator",source:"@site/docs/api/c-api.md",sourceDirName:"api",slug:"/api/c-api",permalink:"/zh-CN/docs/api/c-api",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"Operator",id:"operator",level:2},{value:"Try it out!",id:"try-it-out",level:3},{value:"Custom Node",id:"custom-node",level:2},{value:"<code>init_dora_context_from_env</code>",id:"init_dora_context_from_env",level:4},{value:"<code>dora_next_event</code>",id:"dora_next_event",level:4},{value:"<code>dora_send_output</code>",id:"dora_send_output",level:4},{value:"Try it out!",id:"try-it-out-1",level:3}],u={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-api"},"C API"),(0,r.kt)("h2",{id:"operator"},"Operator"),(0,r.kt)("p",null,"The operator API is a framework for you to implement. The implemented operator will be managed by ",(0,r.kt)("inlineCode",{parentName:"p"},"dora"),". This framework enable us to make optimisation and provide advanced features."),(0,r.kt)("p",null,"The operator definition is composed of 3 functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"dora_init_operator")," that initialise the operator and its context. ",(0,r.kt)("inlineCode",{parentName:"p"},"dora_drop_operator")," that free the memory, and ",(0,r.kt)("inlineCode",{parentName:"p"},"dora_on_event")," that action the logic of the operator on receiving an input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{{#include ../../examples/c-dataflow/operator.c:0:29}}\n")),(0,r.kt)("h3",{id:"try-it-out"},"Try it out!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("inlineCode",{parentName:"li"},"operator.c")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{{#include ../../examples/c-dataflow/operator.c}}\n")),(0,r.kt)("p",null,"{{#include ../../examples/c-dataflow/README.md:40:46}}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Link it in your graph as:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"{{#include ../../examples/c-dataflow/dataflow.yml:13:20}}\n")),(0,r.kt)("h2",{id:"custom-node"},"Custom Node"),(0,r.kt)("p",null,"The custom node API allow you to integrate ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," into your application. It allows you to retrieve input and send output in any fashion you want. "),(0,r.kt)("h4",{id:"init_dora_context_from_env"},(0,r.kt)("inlineCode",{parentName:"h4"},"init_dora_context_from_env")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"init_dora_context_from_env")," initiate a node from environment variables set by ",(0,r.kt)("inlineCode",{parentName:"p"},"dora-coordinator")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void *dora_context = init_dora_context_from_env();\n")),(0,r.kt)("h4",{id:"dora_next_event"},(0,r.kt)("inlineCode",{parentName:"h4"},"dora_next_event")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dora_next_event")," waits for the next event (e.g. an input). Use ",(0,r.kt)("inlineCode",{parentName:"p"},"read_dora_event_type")," to read the event's type. Inputs are of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DoraEventType_Input"),". To extract the ID and data of an input event, use ",(0,r.kt)("inlineCode",{parentName:"p"},"read_dora_input_id"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"read_dora_input_data")," on the returned pointer. It is safe to ignore any events and handle only the events that are relevant to the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void *input = dora_next_input(dora_context);\n\n// read out the ID as a UTF8-encoded string\nchar *id;\nsize_t id_len;\nread_dora_input_id(input, &id, &id_len);\n\n// read out the data as a byte array\nchar *data;\nsize_t data_len;\nread_dora_input_data(input, &data, &data_len);\n")),(0,r.kt)("h4",{id:"dora_send_output"},(0,r.kt)("inlineCode",{parentName:"h4"},"dora_send_output")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dora_send_output")," send data from the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char out_id[] = "tick";\nchar out_data[50];\ndora_send_output(dora_context, out_id, strlen(out_id), out_data, out_data_len);\n')),(0,r.kt)("h3",{id:"try-it-out-1"},"Try it out!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("inlineCode",{parentName:"li"},"node.c")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{{#include ../../examples/c-dataflow/node.c}}\n")),(0,r.kt)("p",null,"{{#include ../../examples/c-dataflow/README.md:26:35}}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Link it in your graph as:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"{{#include ../../examples/c-dataflow/dataflow.yml:6:12}}\n")))}s.isMDXComponent=!0}}]);