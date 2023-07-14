"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[715],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:e},p),{},{components:r})):n.createElement(g,i({ref:e},p))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2325:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Dora Drives",s={unversionedId:"guides/autonomous-driving/readme",id:"guides/autonomous-driving/readme",title:"Dora Drives",description:"Dora drives is a starter kit project to use dora-rs for autonomous driving.",source:"@site/docs/guides/autonomous-driving/readme.mdx",sourceDirName:"guides/autonomous-driving",slug:"/guides/autonomous-driving/",permalink:"/docs/guides/autonomous-driving/",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/autonomous-driving/readme.mdx",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Tracing",permalink:"/docs/guides/Debugging/tracing"},next:{title:"Installation Guide",permalink:"/docs/guides/autonomous-driving/installation"}},c={},l=[{value:"Object dectection",id:"object-dectection",level:3},{value:"Traffic sign recognition",id:"traffic-sign-recognition",level:3},{value:"Lane detection",id:"lane-detection",level:3},{value:"Drivable Area detection",id:"drivable-area-detection",level:3},{value:"Multiple Object tracking(MOT)",id:"multiple-object-trackingmot",level:3},{value:"strong sort",id:"strong-sort",level:4},{value:"Motion Planning",id:"motion-planning",level:3},{value:"Path Tracking",id:"path-tracking",level:3}],p={toc:l},d="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dora-drives"},"Dora Drives"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/dora-rs/dora-drives"},"Dora drives")," is a starter kit project to use dora-rs for autonomous driving.\nIn order to do that we build a dataflow splitting autonomous driving into several nodes from perception to control.\nWe can then feed the dataflow with data from a simulated car within the Carla Simulator."),(0,o.kt)("p",null,"The goal of dora drives is to be a simple and instructive approach into autonomous driving."),(0,o.kt)("p",null,"It does this by implemnating a set of operators:"),(0,o.kt)("h3",{id:"object-dectection"},(0,o.kt)("a",{parentName:"h3",href:"https://paperswithcode.com/task/object-detection"},"Object dectection")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ultralytics/yolov5"},"yolov5")," ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://paperswithcode.com/sota/object-detection-on-coco?p=path-aggregation-network-for-instance"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/path-aggregation-network-for-instance/object-detection-on-coco",alt:"PWC"}))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/22787340/187723794-3623bee2-91d6-436a-a5d7-d2e363483c76.gif",width:"600"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Perfect detection on Carla Simulator")),(0,o.kt)("h3",{id:"traffic-sign-recognition"},(0,o.kt)("a",{parentName:"h3",href:"https://paperswithcode.com/task/traffic-sign-recognition"},"Traffic sign recognition")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/haixuanTao/yolov7"},"Custom trained yolov7 on tt100k"))),(0,o.kt)("h3",{id:"lane-detection"},(0,o.kt)("a",{parentName:"h3",href:"https://paperswithcode.com/task/lane-detection"},"Lane detection")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hustvl/YOLOP"},"yolop")," ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://paperswithcode.com/sota/lane-detection-on-bdd100k?p=hybridnets-end-to-end-perception-network-1"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/hybridnets-end-to-end-perception-network-1/lane-detection-on-bdd100k",alt:"PWC"}))," "),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/22787340/187723841-7f3ba560-dbbe-4d43-886a-fb3b0be9247a.gif",width:"600"}),(0,o.kt)("h3",{id:"drivable-area-detection"},(0,o.kt)("a",{parentName:"h3",href:"https://paperswithcode.com/task/drivable-area-detection"},"Drivable Area detection")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hustvl/YOLOP"},"yolop")," ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://paperswithcode.com/sota/drivable-area-detection-on-bdd100k?p=hybridnets-end-to-end-perception-network-1"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/hybridnets-end-to-end-perception-network-1/drivable-area-detection-on-bdd100k",alt:"PWC"}))," "),(0,o.kt)("h3",{id:"multiple-object-trackingmot"},(0,o.kt)("a",{parentName:"h3",href:"https://paperswithcode.com/task/multi-object-tracking"},"Multiple Object tracking(MOT)")),(0,o.kt)("h4",{id:"strong-sort"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/haixuanTao/yolov5_strongsort_package"},"strong sort")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://paperswithcode.com/sota/multi-object-tracking-on-mot20-1?p=strongsort-make-deepsort-great-again"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/strongsort-make-deepsort-great-again/multi-object-tracking-on-mot20-1",alt:"PWC"}))," "),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/22787340/187723873-473cda4f-573d-4663-a5b9-a4df2611c482.gif",width:"600"}),(0,o.kt)("h3",{id:"motion-planning"},(0,o.kt)("a",{parentName:"h3",href:"https://paperswithcode.com/task/motion-planning"},"Motion Planning")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/erdos-project/hybrid_astar_planner"},"Hybrid A-star"))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/22787340/192555777-1d5e4c5f-d654-4ef3-a019-387e56e46970.gif",width:"600"}),(0,o.kt)("h3",{id:"path-tracking"},"Path Tracking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Proportional Integral Derivative controller (PID)")))}u.isMDXComponent=!0}}]);