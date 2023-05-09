"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},o="Getting Started",i={unversionedId:"guides/getting-started",id:"guides/getting-started",title:"Getting Started",description:"Create a Rust workspace",source:"@site/docs/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/zh-CN/docs/guides/getting-started",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Installation",permalink:"/zh-CN/docs/guides/installation"},next:{title:"Webcam Plot",permalink:"/zh-CN/docs/guides/webcam_plot"}},s={},p=[{value:"Create a Rust workspace",id:"create-a-rust-workspace",level:3},{value:"Write your first node",id:"write-your-first-node",level:3},{value:"Write your first operator",id:"write-your-first-operator",level:3},{value:"Write your sink node",id:"write-your-sink-node",level:3},{value:"Compile everything",id:"compile-everything",level:3},{value:"Write a graph definition",id:"write-a-graph-definition",level:3},{value:"Run it!",id:"run-it",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"create-a-rust-workspace"},"Create a Rust workspace"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Initiate the workspace with:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my_first_dataflow\ncd my_first_dataflow\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create the Cargo.toml file that will configure the entire workspace:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[workspace]\n\nmembers = [\n    "rust-dataflow-example-node",\n]\n')),(0,n.kt)("h3",{id:"write-your-first-node"},"Write your first node"),(0,n.kt)("p",null,"Let's write a node which sends the current time periodically. Let's make it after 100 iterations. The other nodes/operators will then exit as well because all sources closed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate a new Rust binary (application):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new rust-dataflow-example-node\n")),(0,n.kt)("p",null,"with ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},"{{#include ../../examples/rust-dataflow/node/Cargo.toml}}\n")),(0,n.kt)("p",null,"with ",(0,n.kt)("inlineCode",{parentName:"p"},"src/main.rs"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"{{#include ../../examples/rust-dataflow/node/src/main.rs}}\n")),(0,n.kt)("h3",{id:"write-your-first-operator"},"Write your first operator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate a new Rust library:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new rust-dataflow-example-operator --lib\n")),(0,n.kt)("p",null,"with ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},"{{#include ../../examples/rust-dataflow/operator/Cargo.toml}}\n")),(0,n.kt)("p",null,"with ",(0,n.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"{{#include ../../examples/rust-dataflow/operator/src/lib.rs}}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"And modify the root ",(0,n.kt)("inlineCode",{parentName:"li"},"Cargo.toml"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml="},'[workspace]\n\nmembers = [\n    "rust-dataflow-example-node",\n    "rust-dataflow-example-operator",\n]\n')),(0,n.kt)("h3",{id:"write-your-sink-node"},"Write your sink node"),(0,n.kt)("p",null,"Let's write a ",(0,n.kt)("inlineCode",{parentName:"p"},"logger")," which will print incoming data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate a new Rust binary (application):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new sink_logger\n")),(0,n.kt)("p",null,"with ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},"{{#include ../../examples/rust-dataflow/sink/Cargo.toml}}\n")),(0,n.kt)("p",null,"with ",(0,n.kt)("inlineCode",{parentName:"p"},"src/main.rs"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"{{#include ../../examples/rust-dataflow/sink/src/main.rs}}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"And modify the root ",(0,n.kt)("inlineCode",{parentName:"li"},"Cargo.toml"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml="},'[workspace]\n\nmembers = [\n    "rust-dataflow-example-node",\n    "rust-dataflow-example-operator",\n    "rust-dataflow-example-sink"\n]\n')),(0,n.kt)("h3",{id:"compile-everything"},"Compile everything"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --all --release\n")),(0,n.kt)("h3",{id:"write-a-graph-definition"},"Write a graph definition"),(0,n.kt)("p",null,"Let's write the graph definition so that the nodes know who to communicate with."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dataflow.yml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"{{#include ../../examples/rust-dataflow/dataflow.yml}}\n")),(0,n.kt)("h3",{id:"run-it"},"Run it!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run the ",(0,n.kt)("inlineCode",{parentName:"li"},"dataflow"),": ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dora-daemon --run-dataflow dataflow.yml\n")))}c.isMDXComponent=!0}}]);