"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[6270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Design Overview",s={unversionedId:"references/overview",id:"references/overview",title:"Design Overview",description:"The dora framework is structured into different components:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/references/overview.md",sourceDirName:"references",slug:"/references/overview",permalink:"/zh-CN/docs/references/overview",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"Framework",permalink:"/zh-CN/docs/references/library-vs-framework"},next:{title:"State Management",permalink:"/zh-CN/docs/references/state-management"}},l={},c=[{value:"Operators vs Custom Nodes",id:"operators-vs-custom-nodes",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-overview"},"Design Overview"),(0,o.kt)("p",null,"The dora framework is structured into different components:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"design diagram",src:r(6154).Z,width:"671",height:"506"})),(0,o.kt)("p",null,"The following main components exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Nodes:")," Dora nodes are separate, isolated processes that communicate with other nodes through the dora library. Nodes can be either a custom, user-specified program, or a dora runtime node, which allows to run dora ",(0,o.kt)("em",{parentName:"p"},"operators"),". Nodes implement their own ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function and thus have full control over their execution."),(0,o.kt)("p",{parentName:"li"},"Nodes use the dora ",(0,o.kt)("em",{parentName:"p"},"library")," to communicate with other nodes, which is available for multiple languages (Rust, C; maybe Python, WASM). Communication happens through a ",(0,o.kt)("em",{parentName:"p"},"communication layer"),", which will be ",(0,o.kt)("inlineCode",{parentName:"p"},"zenoh")," in our first version. We plan to add more options in the future. All communication layer implementations should be robust against disconnections, so operators should be able to keep running even if they lose the connection to the coordinator.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Operators:")," Operators are light-weight, cooperative, library-based components that are executed by a dora runtime node. They must implement a specific interface, depending on the used language. Operators can use a wide range of advanced features provided by the dora runtime, for example priority scheduling or native deadline support.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Coordinator:")," The coordinator is responsible for reading the dataflow from a YAML file, verifying it, and deploying the nodes and operators to the specified or automatically determined machines. It monitors the operator's health and implements high level cluster management functionality. For example, we could implement automatic scaling for cloud nodes or operator replication and restarts. The coordinator can be controlled through a command line program (CLI)."))),(0,o.kt)("h2",{id:"operators-vs-custom-nodes"},"Operators vs Custom Nodes"),(0,o.kt)("p",null,"There are two ways to implement an operation in dora: Either as a dora operator, or as a custom nodes. Both approaches have their advantages and drawbacks, as explained below. In general, it is recommended to create dora operators and only use custom nodes when necessary."),(0,o.kt)("p",null,"Operators have the following advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They can use a wide range of advanced functionality provided by the dora runtime nodes. This includes special scheduling strategies and features such as deadlines."),(0,o.kt)("li",{parentName:"ul"},"They are ",(0,o.kt)("em",{parentName:"li"},"light-weight"),", so they only occupy minimal amounts of memory. This makes it possible to run thousands of operators on the same machine."),(0,o.kt)("li",{parentName:"ul"},"They can use runtime-managed state storage, for robustness or for sharing state with other operators."),(0,o.kt)("li",{parentName:"ul"},"They ",(0,o.kt)("em",{parentName:"li"},"share the address space")," with other operators on the same node, which makes communication much faster.")),(0,o.kt)("p",null,"Custom nodes provide a different set of advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each node is a separate, isolated process, which can be important for security-critical operations."),(0,o.kt)("li",{parentName:"ul"},"They support pinned resources. For example, a CPU core can be pinned to a custom node through the dataflow configuration file."),(0,o.kt)("li",{parentName:"ul"},"They have full control over their execution, which allows to create complex input and wake-up rules.")))}d.isMDXComponent=!0},6154:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview-44ded447dae4275cd68d5144d3489f59.svg"}}]);