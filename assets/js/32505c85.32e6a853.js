"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[4440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Getting started",l={unversionedId:"guides/getting-started/first-dataflow",id:"guides/getting-started/first-dataflow",title:"Getting started",description:"1. Install dora binaries from GitHub releases",source:"@site/docs/guides/getting-started/first-dataflow.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/first-dataflow",permalink:"/docs/guides/getting-started/first-dataflow",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/getting-started/first-dataflow.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Uninstalling",permalink:"/docs/guides/Installation/uninstalling"},next:{title:"Webcam Plot",permalink:"/docs/guides/getting-started/webcam_plot"}},d={},s=[],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," binaries from GitHub releases")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new dataflow"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora new abc_project --lang python\ncd abc_project\n")),(0,r.kt)("p",null,"This creates the following ",(0,r.kt)("inlineCode",{parentName:"p"},"abc_project")," directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 dataflow.yml\n\u251c\u2500\u2500 node_1\n\u2502   \u2514\u2500\u2500 node_1.py\n\u251c\u2500\u2500 op_1\n\u2502   \u2514\u2500\u2500 op_1.py\n\u2514\u2500\u2500 op_2\n    \u2514\u2500\u2500 op_2.py\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"dora-coordinator")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"dora-deamon"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora up \n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start your dataflow")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora start dataflow.yml\n# Output: c95d118b-cded-4531-a0e4-cd85b7c3916c\n")),(0,r.kt)("p",null,"The output is the unique ID of the dataflow instance, which can be used to control it through the ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," CLI."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You will see in your ",(0,r.kt)("inlineCode",{parentName:"li"},"dora-coordinator")," window operators receiving ticks.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Received input tick, with data: b''\nReceived input tick, with data: b''\nReceived input tick, with data: b''\n...\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop your dataflow")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora stop c95d118b-cded-4531-a0e4-cd85b7c3916c\n")),(0,r.kt)("p",null,"(Pass the ID returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"dora start")," here.)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can then add or modify operators or nodes. For adding nodes easily, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"dora")," CLI again:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"dora new --kind operator --lang rust <name>")," to create a new Rust operator named ",(0,r.kt)("inlineCode",{parentName:"li"},"<name>"),"."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"dora new --kind custom-node --lang rust <name>")," to create a new custom node named ",(0,r.kt)("inlineCode",{parentName:"li"},"<name>"),".")),(0,r.kt)("p",null,"You need to add the created operators/nodes to your dataflow YAML file."))}u.isMDXComponent=!0}}]);