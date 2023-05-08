"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[285],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),b=r,h=u["".concat(p,".").concat(b)]||u[b]||d[b]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},41:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={},i="Obstacle location operator",l={unversionedId:"nodes_operators/obstacle_location_operator",id:"nodes_operators/obstacle_location_operator",title:"Obstacle location operator",description:"The obstacle location operator match bounding box with depth frame to find an approximative position of obstacles.",source:"@site/docs/nodes_operators/obstacle_location_operator.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/obstacle_location_operator",permalink:"/docs/nodes_operators/obstacle_location_operator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes_operators/obstacle_location_operator.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"MiDaS",permalink:"/docs/nodes_operators/midas_operator"},next:{title:"PID Control operator",permalink:"/docs/nodes_operators/pid_control_operator"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Graph Description",id:"graph-description",level:2},{value:"Graph visualisation",id:"graph-visualisation",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"obstacle-location-operator"},"Obstacle location operator"),(0,r.kt)("p",null,"The obstacle location operator match bounding box with depth frame to find an approximative position of obstacles."),(0,r.kt)("p",null,"There is two logic within it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One is for the ground dot for lane detection."),(0,r.kt)("li",{parentName:"ul"},"One is for bounding box obstacle localisation.")),(0,r.kt)("p",null,"Both logic are based on he computation of the projection in 2D space of the lidar 3D point and then reusing the index to get the 3D position."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the case of ground dot detection, the approximation is based on a knnr, as we might not have enough data on the floor."),(0,r.kt)("li",{parentName:"ul"},"In the case of bounding box, we use first quantile closest point within the bounding box to estimate the distance. We use the first quantile closest point to remove the noise.")),(0,r.kt)("p",null,"The mecanism to project the lidar point cloud into a 2D is also used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plot.py")," operator. You can use the input ",(0,r.kt)("inlineCode",{parentName:"p"},"lidar_pc")," within it to help you debug."),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2D Obstacles bounding box.")),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3D position of obstacles as dot.")),(0,r.kt)("h2",{id:"graph-description"},"Graph Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: obstacle_location_op\n    operator: \n      outputs:\n        - obstacles\n      inputs:\n        lidar_pc: agent/lidar_pc\n        obstacles_bbox: yolov5/bbox\n        position: agent/position\n      python: ../../operators/obstacle_location_op.py\n")),(0,r.kt)("h2",{id:"graph-visualisation"},"Graph visualisation"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"        flowchart TB\n  agent\nsubgraph yolov5\n  yolov5/op[op]\nend\nsubgraph fot_op\n  fot_op/op[op]\nend\nsubgraph obstacle_location_op\n  obstacle_location_op/op[op]\nend\n  agent -- lidar_pc --\x3e obstacle_location_op/op\n  yolov5/op -- bbox as obstacles_bbox --\x3e obstacle_location_op/op\n  agent -- position --\x3e obstacle_location_op/op\n  obstacle_location_op/op -- obstacles --\x3e fot_op/op"})))}d.isMDXComponent=!0}}]);