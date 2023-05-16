"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[3643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),i=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},_=function(e){var n=i(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),d=i(t),c=r,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||a;return t?o.createElement(m,l(l({ref:n},_),{},{components:t})):o.createElement(m,l({ref:n},_))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const a={},l="YOLOP Operator",s={unversionedId:"nodes_operators/yolop_op",id:"nodes_operators/yolop_op",title:"YOLOP Operator",description:"\x3c!---",source:"@site/docs/nodes_operators/yolop_op.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/yolop_op",permalink:"/docs/nodes_operators/yolop_op",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/yolop_op.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"Webcam Operator",permalink:"/docs/nodes_operators/webcam_op"},next:{title:"Yolov5 Operator",permalink:"/docs/nodes_operators/yolov5_op"}},p={},i=[{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],_={toc:i},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yolop-operator"},"YOLOP Operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n    Infering object from images\n    \n")),(0,r.kt)("h3",{id:"__init__"},(0,r.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(self):\n        self.model = torch.hub.load("hustvl/yolop", "yolop", pretrained=True)\n        self.model.to(torch.device(DEVICE))\n        self.model.eval()\n\n\n'))),(0,r.kt)("h3",{id:"on_event"},(0,r.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,r.kt)("h3",{id:"on_input"},(0,r.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n\n        # inference\n        frame = cv2.imdecode(\n            np.frombuffer(\n                dora_input["data"],\n                np.uint8,\n            ),\n            -1,\n        )\n\n        frame = frame[:, :, :3]\n        h0, w0, _ = frame.shape\n        h, w = (640, 640)\n        frame, _, (pad_w, pad_h) = letterbox_for_img(frame)\n        ratio = w / w0\n        pad_h, pad_w = (int(pad_h), int(pad_w))\n\n        img = torch.unsqueeze(transform(frame), dim=0)\n        half = False  # half precision only supported on CUDA\n        img = img.half() if half else img.float()  # uint8 to fp16/32\n        img = img.to(torch.device(DEVICE))\n        det_out, da_seg_out, ll_seg_out = self.model(img)\n\n        # det_out = [pred.reshape((1, -1, 6)) for pred in det_out]\n        # inf_out = torch.cat(det_out, dim=1)\n\n        # det_pred = non_max_suppression(\n        # inf_out,\n        # )\n        # det = det_pred[0]\n\n        da_predict = da_seg_out[\n            :, :, pad_h : (h0 - pad_h), pad_w : (w0 - pad_w)\n        ]\n        da_seg_mask = torch.nn.functional.interpolate(\n            da_predict, scale_factor=1 / ratio, mode="bilinear"\n        )\n        _, da_seg_mask = torch.max(da_seg_mask, 1)\n        da_seg_mask = da_seg_mask.int().squeeze().cpu().numpy()\n        da_seg_mask = morphological_process(da_seg_mask, kernel_size=7)\n\n        contours, _ = cv2.findContours(\n            da_seg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE\n        )\n        if len(contours) != 0:\n            contour = max(contours, key=cv2.contourArea)\n            contour = contour.astype(np.int32)\n            send_output(\n                "drivable_area", contour.tobytes(), dora_input["metadata"]\n            )\n        else:\n            send_output(\n                "drivable_area", np.array([]).tobytes(), dora_input["metadata"]\n            )\n\n        ll_predict = ll_seg_out[\n            :, :, pad_h : (h0 - pad_h), pad_w : (w0 - pad_w)\n        ]\n\n        ll_seg_mask = torch.nn.functional.interpolate(\n            ll_predict, scale_factor=1 / ratio, mode="bilinear"\n        )\n\n        _, ll_seg_mask = torch.max(ll_seg_mask, 1)\n        ll_seg_mask = ll_seg_mask.int().squeeze().cpu().numpy()\n        # Lane line post-processing\n        ll_seg_mask = morphological_process(\n            ll_seg_mask, kernel_size=7, func_type=cv2.MORPH_OPEN\n        )\n        ll_seg_points = np.array(connect_lane(ll_seg_mask), np.int32)\n        send_output("lanes", ll_seg_points.tobytes(), dora_input["metadata"])\n        return DoraStatus.CONTINUE\n\n\n'))))}u.isMDXComponent=!0}}]);