"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[285],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(o),b=r,h=u["".concat(p,".").concat(b)]||u[b]||d[b]||a;return o?n.createElement(h,i(i({ref:e},c),{},{components:o})):n.createElement(h,i({ref:e},c))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},41:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={},i="Obstacle location operator",l={unversionedId:"nodes_operators/obstacle_location_operator",id:"nodes_operators/obstacle_location_operator",title:"Obstacle location operator",description:"The obstacle location operator match bounding box with depth frame to find an approximative position of obstacles.",source:"@site/docs/nodes_operators/obstacle_location_operator.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/obstacle_location_operator",permalink:"/docs/nodes_operators/obstacle_location_operator",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/obstacle_location_operator.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"MiDaS",permalink:"/docs/nodes_operators/midas_operator"},next:{title:"PID Control operator",permalink:"/docs/nodes_operators/pid_control_operator"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Graph Description",id:"graph-description",level:2},{value:"Graph visualisation",id:"graph-visualisation",level:2}],c={toc:s},u="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"obstacle-location-operator"},"Obstacle location operator"),(0,r.kt)("p",null,"The obstacle location operator match bounding box with depth frame to find an approximative position of obstacles."),(0,r.kt)("p",null,"There is two logic within it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One is for the ground dot for lane detection."),(0,r.kt)("li",{parentName:"ul"},"One is for bounding box obstacle localisation.")),(0,r.kt)("p",null,"Both logic are based on he computation of the projection in 2D space of the lidar 3D point and then reusing the index to get the 3D position."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the case of ground dot detection, the approximation is based on a knnr, as we might not have enough data on the floor."),(0,r.kt)("li",{parentName:"ul"},"In the case of bounding box, we use first quantile closest point within the bounding box to estimate the distance. We use the first quantile closest point to remove the noise.")),(0,r.kt)("p",null,"The mecanism to project the lidar point cloud into a 2D is also used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plot.py")," operator. You can use the input ",(0,r.kt)("inlineCode",{parentName:"p"},"lidar_pc")," within it to help you debug."),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2D Obstacles bounding box.")),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3D position of obstacles as dot.")),(0,r.kt)("h2",{id:"graph-description"},"Graph Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: obstacle_location_op\n    operator: \n      outputs:\n        - obstacles\n      inputs:\n        lidar_pc: agent/lidar_pc\n        obstacles_bbox: yolov5/bbox\n        position: agent/position\n      python: ../../operators/obstacle_location_op.py\n")),(0,r.kt)("h2",{id:"graph-visualisation"},"Graph visualisation"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"        flowchart TB\n  agent\nsubgraph yolov5\n  yolov5/op[op]\nend\nsubgraph fot_op\n  fot_op/op[op]\nend\nsubgraph obstacle_location_op\n  obstacle_location_op/op[op]\nend\n  agent -- lidar_pc --\x3e obstacle_location_op/op\n  yolov5/op -- bbox as obstacles_bbox --\x3e obstacle_location_op/op\n  agent -- position --\x3e obstacle_location_op/op\n  obstacle_location_op/op -- obstacles --\x3e fot_op/op"})))}d.isMDXComponent=!0}}]);