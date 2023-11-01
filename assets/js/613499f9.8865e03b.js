"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[7847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},l="Yolov5 operator",i={unversionedId:"nodes_operators/yolov5_op",id:"nodes_operators/yolov5_op",title:"Yolov5 operator",description:"Yolov5 object detection operator generates bounding boxes on images where it detects object.",source:"@site/docs/nodes_operators/yolov5_op.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/yolov5_op",permalink:"/docs/nodes_operators/yolov5_op",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/yolov5_op.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"yolop operator",permalink:"/docs/nodes_operators/yolop_op"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Example Image",id:"example-image",level:2},{value:"Graph Description",id:"graph-description",level:2},{value:"Graph Visualisation",id:"graph-visualisation",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yolov5-operator"},"Yolov5 operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Yolov5")," object detection operator generates bounding boxes on images where it detects object. "),(0,r.kt)("p",null,"More info here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5"},"https://github.com/ultralytics/yolov5")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Yolov5")," has not been finetuned on the simulation and is directly importing weight from Pytorch Hub."),(0,r.kt)("p",null,"In case you want to run ",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5")," without internet you can clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5"},"https://github.com/ultralytics/yolov5")," and download the weights you want to use from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/releases/tag/v7.0"},"the release page")," and then specify within the yaml graph the two environments variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YOLOV5_PATH: YOUR/PATH")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YOLOV5_WEIGHT_PATH: YOUR/WEIGHT/PATH"))),(0,r.kt)("p",null,"You can also choose to allocate the model in GPU using the environment variable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PYTORCH_DEVICE: cuda # or cpu"))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"image: HEIGHT x WIDTH x BGR array.")),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bbox: N_BBOX, X_MIN, X_MAX, Y_MIN, Y_MAX, CONDIDENCE, CLASS, array")),(0,r.kt)("h2",{id:"example-image"},"Example Image"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/hPrazyl.jpg",alt:"yolov5 example"})),(0,r.kt)("h2",{id:"graph-description"},"Graph Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: yolov5\n    operator: \n      outputs:\n        - bbox\n      inputs:\n        image: webcam/image\n      python: ../../operators/yolov5_op.py\n")),(0,r.kt)("h2",{id:"graph-visualisation"},"Graph Visualisation"),(0,r.kt)("mermaid",{value:"        flowchart TB\n  oasis_agent\nsubgraph yolov5\n  yolov5/op[op]\nend\nsubgraph obstacle_location_op\n  obstacle_location_op/op[op]\nend\n  oasis_agent -- image --\x3e yolov5/op\n  yolov5/op -- bbox as obstacles_bbox --\x3e obstacle_location_op/op"}),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"__init__"},(0,r.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(self):\n        if YOLOV5_PATH is None:\n            # With internet\n            self.model = torch.hub.load(\n                "ultralytics/yolov5",\n                "yolov5n",\n            )\n        else:\n            # Without internet\n            #\n            # To install:\n            # cd $DORA_HOME_DEP/dependecies # Optional\n            # git clone https://github.com/ultralytics/yolov5.git\n            # rm yolov5/.git -rf\n            # Add YOLOV5_PATH and YOLOV5_WEIGHT_PATH in your YAML graph\n\n            self.model = torch.hub.load(\n                YOLOV5_PATH,\n                "custom",\n                path=YOLOV5_WEIGHT_PATH,\n                source="local",\n            )\n\n        self.model.to(torch.device(DEVICE))\n        self.model.eval()\n\n\n'))),(0,r.kt)("h3",{id:"on_event"},(0,r.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,r.kt)("h3",{id:"on_input"},(0,r.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    Handle image\n    Args:\n        dora_input["id"] (str): Id of the input declared in the yaml configuration\n        dora_input["value"] (arrow.array (UInt8)): Bytes message of the input\n        send_output (Callable[[str, bytes]]): Function enabling sending output back to dora.\n    \n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        """\n        Handle image\n        Args:\n            dora_input["id"] (str): Id of the input declared in the yaml configuration\n            dora_input["value"] (arrow.array (UInt8)): Bytes message of the input\n            send_output (Callable[[str, bytes]]): Function enabling sending output back to dora.\n        """\n        if dora_input["id"] == "image":\n            frame = (\n                dora_input["value"].to_numpy().reshape((IMAGE_HEIGHT, IMAGE_WIDTH, 4))\n            )\n            frame = frame[:, :, :3]\n\n            results = self.model(frame)  # includes NMS\n            arrays = np.array(results.xyxy[0].cpu())[\n                :, [0, 2, 1, 3, 4, 5]\n            ]  # xyxy -> xxyy\n            arrays[:, 4] *= 100\n            arrays = arrays.astype(np.int32)\n            arrays = pa.array(arrays.ravel())\n            send_output("bbox", arrays, dora_input["metadata"])\n            return DoraStatus.CONTINUE\n\n\n'))))}c.isMDXComponent=!0}}]);