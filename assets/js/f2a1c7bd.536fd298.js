"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[177],{494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>te,contentTitle:()=>Q,default:()=>se,frontMatter:()=>$,metadata:()=>ee,toc:()=>ae});var o=a(7462),r=a(7294),s=a(3905),n=a(6010),c=a(412),l=a(5999),i=a(6550),d=a(8824),m=a(9960);const u={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};function p(e){const{svgClass:t,colorAttr:a,children:s,color:c="inherit",size:l="medium",viewBox:i="0 0 24 24",...d}=e;return r.createElement("svg",(0,o.Z)({viewBox:i,color:a,"aria-hidden":!0,className:(0,n.Z)(u.svgIcon,u[c],u[l],t)},d),s)}function h(e){return r.createElement(p,e,r.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}function g(e,t){const a=[...e];return a.sort(((e,a)=>t(e)>t(a)?1:t(a)>t(e)?-1:0)),a}const b=[{title:"Yolov5 Operator",description:"Yolov5 object detection operator",preview:"/img/agilets.png",website:"yolov5_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/yolov5_op.py",tags:["object_detection","python"]},{title:"Plot Operator",description:"Plot operator based on cv2",preview:"/img/agilets.png",website:"plot_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/plot.py",tags:["python"]},{title:"PID Operator",description:"PID controller",preview:"/img/agilets.png",website:"pid_control_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/pid_control_op.py",tags:["python","control"]},{title:"Obstacle Location Operator",description:"Obstacle location based on LIDAR and 2D bounding boxes",preview:"/img/agilets.png",website:"obstacle_location_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/obstacle_location_op.py",tags:["python"]},{title:"GPS Operator",description:"Waypoint generation based on current position and a opendrive map.",preview:"/img/agilets.png",website:"obstacle_location_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/carla/gps_op.py",tags:["python"]},{title:"FOT Operator",description:"Waypoint generation based on current position and frenet optimal trajectory planner.",preview:"/img/agilets.png",website:"obstacle_location_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/carla/gps_op.py",tags:["python"]},{title:"YOLOP Operator",description:"YOLOP lane and drivable area detection",preview:"/img/agilets.png",website:"yolop_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/yolop_op.py",tags:["object_detection","python"]},{title:"MiDaS Operator",description:"MiDaS depth estimation",preview:"/img/agilets.png",website:"midas_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/midas_op.py",tags:["depth_estimation","python"]},{title:"Webcam Operator",description:"Webcam Operator",preview:"/img/agilets.png",website:"webcam_operator",source:"https://github.com/dora-rs/dora-drives/blob/main/operators/webcam_op.py",tags:["python"]}],f={object_detection:{label:(0,l.I)({message:"object detection"}),description:(0,l.I)({message:"Open-Source Docusaurus sites can be useful for inspiration!",id:"showcase.tag.opensource.description"}),color:"#39ca30"},python:{label:(0,l.I)({message:"Python"}),description:(0,l.I)({message:"Docusaurus sites associated to a commercial product!",id:"showcase.tag.product.description"}),color:"#dfd545"},control:{label:(0,l.I)({message:"Control"}),description:(0,l.I)({message:"Beautiful Docusaurus sites, polished and standing out from the initial template!",id:"showcase.tag.design.description"}),color:"#a44fb7"},depth_estimation:{label:(0,l.I)({message:"Depth Esimation"}),description:(0,l.I)({message:"Translated Docusaurus sites using the internationalization support with more than 1 locale.",id:"showcase.tag.i18n.description"}),color:"#127f82"}},E=Object.keys(f);const w=function(){let e=b;return e=g(e,(e=>e.title.toLowerCase())),e=g(e,(e=>!e.tags.includes("favorite"))),e}();var v=a(2503);const _="checkboxLabel_nyuG",y="tags";function C(e){return new URLSearchParams(e).getAll(y)}function L(e,t){let{id:a,icon:s,label:n,tag:c,...l}=e;const d=(0,i.TH)(),m=(0,i.k6)(),[u,p]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=C(d.search);p(e.includes(c))}),[c,d]);const h=(0,r.useCallback)((()=>{const e=function(e,t){const a=e.indexOf(t);if(-1===a)return e.concat(t);const o=[...e];return o.splice(a,1),o}(C(d.search),c),t=function(e,t){const a=new URLSearchParams(e);return a.delete(y),t.forEach((e=>a.append(y,e))),a.toString()}(d.search,e);m.push({...d,search:t,state:j()})}),[c,d,m]);return r.createElement(r.Fragment,null,r.createElement("input",(0,o.Z)({type:"checkbox",id:a,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&h()},onFocus:e=>{e.relatedTarget&&e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("focus"))},onBlur:e=>{e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("blur"))},onChange:h,checked:u},l)),r.createElement("label",{ref:t,htmlFor:a,className:_},n,s))}const k=r.forwardRef(L),N={checkboxLabel:"checkboxLabel_C_EF"},I="operator";function x(e){return new URLSearchParams(e).get(I)??"OR"}function S(){const e="showcase_filter_toggle",t=(0,i.TH)(),a=(0,i.k6)(),[o,s]=(0,r.useState)(!1);(0,r.useEffect)((()=>{s("AND"===x(t.search))}),[t]);const c=(0,r.useCallback)((()=>{s((e=>!e));const e=new URLSearchParams(t.search);e.delete(I),o||e.append(I,"AND"),a.push({...t,search:e.toString(),state:j()})}),[o,t,a]);return r.createElement("div",null,r.createElement("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:c,onKeyDown:e=>{"Enter"===e.key&&c()},checked:o}),r.createElement("label",{htmlFor:e,className:(0,n.Z)(N.checkboxLabel,"shadow--md")},r.createElement("span",{className:N.checkboxLabelOr},"OR"),r.createElement("span",{className:N.checkboxLabelAnd},"AND")))}var O=a(3935),Z=a(5237);const F={tooltip:"tooltip_u6Wa",tooltipArrow:"tooltipArrow_gH7I"};function T(e){let{children:t,id:a,anchorEl:s,text:n}=e;const[c,l]=(0,r.useState)(!1),[i,d]=(0,r.useState)(null),[m,u]=(0,r.useState)(null),[p,h]=(0,r.useState)(null),[g,b]=(0,r.useState)(null),{styles:f,attributes:E}=(0,Z.D)(i,m,{modifiers:[{name:"arrow",options:{element:p}},{name:"offset",options:{offset:[0,8]}}]}),w=(0,r.useRef)(null),v=`${a}_tooltip`;return(0,r.useEffect)((()=>{b(s?"string"==typeof s?document.querySelector(s):s:document.body)}),[g,s]),(0,r.useEffect)((()=>{const e=["mouseenter","focus"],t=["mouseleave","blur"],a=()=>{""!==n&&(i?.removeAttribute("title"),w.current=window.setTimeout((()=>{l(!0)}),400))},o=()=>{clearInterval(w.current),l(!1)};return i&&(e.forEach((e=>{i.addEventListener(e,a)})),t.forEach((e=>{i.addEventListener(e,o)}))),()=>{i&&(e.forEach((e=>{i.removeEventListener(e,a)})),t.forEach((e=>{i.removeEventListener(e,o)})))}}),[i,n]),r.createElement(r.Fragment,null,r.cloneElement(t,{ref:d,"aria-describedby":c?v:void 0}),g?O.createPortal(c&&r.createElement("div",(0,o.Z)({id:v,role:"tooltip",ref:u,className:F.tooltip,style:f.popper},E.popper),n,r.createElement("span",{ref:h,className:F.tooltipArrow,style:f.arrow})),g):g)}const P={showcaseCardImage:"showcaseCardImage_ilpR",showcaseCardHeader:"showcaseCardHeader_OEf6",showcaseCardTitle:"showcaseCardTitle_N5BJ",svgIconFavorite:"svgIconFavorite_ndny",showcaseCardSrcBtn:"showcaseCardSrcBtn_cNFV",showcaseCardBody:"showcaseCardBody_o6UT",cardFooter:"cardFooter_Z6cQ",tag:"tag_JW46",textLabel:"textLabel_zE2j",colorLabel:"colorLabel_K1aW"},D=r.forwardRef(((e,t)=>{let{label:a,color:o,description:s}=e;return r.createElement("li",{ref:t,className:P.tag,title:s},r.createElement("span",{className:P.textLabel},a.toLowerCase()),r.createElement("span",{className:P.colorLabel,style:{backgroundColor:o}}))}));function R(e){let{tags:t}=e;const a=g(t.map((e=>({tag:e,...f[e]}))),(e=>E.indexOf(e.tag)));return r.createElement(r.Fragment,null,a.map(((e,t)=>{const a=`showcase_card_tag_${e.tag}`;return r.createElement(T,{key:t,text:e.description,anchorEl:"#__docusaurus",id:a},r.createElement(D,(0,o.Z)({key:t},e)))})))}function B(e){let{user:t}=e;!function(e){e.preview}(t);return r.createElement("li",{key:t.title,className:"card shadow--md"},r.createElement("div",{className:"card__body"},r.createElement("div",{className:(0,n.Z)(P.showcaseCardHeader)},r.createElement(v.Z,{as:"h4",className:P.showcaseCardTitle},r.createElement(m.Z,{href:t.website,className:P.showcaseCardLink},t.title)),t.tags.includes("favorite")&&r.createElement(h,{svgClass:P.svgIconFavorite,size:"small"}),t.source&&r.createElement(m.Z,{href:t.source,className:(0,n.Z)("button button--secondary button--sm",P.showcaseCardSrcBtn)},r.createElement(l.Z,{id:"showcase.card.sourceLink"},"source"))),r.createElement("p",{className:P.showcaseCardBody},t.description)),r.createElement("ul",{className:(0,n.Z)("card__footer",P.cardFooter)},r.createElement(R,{tags:t.tags})))}const H=r.memo(B),U={filterCheckbox:"filterCheckbox_q3sb",checkboxList:"checkboxList_OUH8",checkboxListItem:"checkboxListItem_P6Ma",searchContainer:"searchContainer_e2L2",showcaseList:"showcaseList_lJcJ",showcaseFavorite:"showcaseFavorite_iniO",showcaseFavoriteHeader:"showcaseFavoriteHeader_bJ1Y",svgIconFavoriteXs:"svgIconFavoriteXs_BcXG",svgIconFavorite:"svgIconFavorite_wQHr"},A=((0,l.I)({message:"dora-rs nodes and operators"}),(0,l.I)({message:"List of operators already implemented by the community"})),M="https://github.com/dora-rs/dora/discussions";function j(){if(c.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}const W="name";function Y(e){return new URLSearchParams(e).get(W)}function X(){const e=(0,i.TH)(),[t,a]=(0,r.useState)("OR"),[o,s]=(0,r.useState)([]),[n,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{s(C(e.search)),a(x(e.search)),c(Y(e.search)),function(e){const{scrollTopPosition:t,focusedElementId:a}=e??{scrollTopPosition:0,focusedElementId:void 0};document.getElementById(a)?.focus(),window.scrollTo({top:t})}(e.state)}),[e]),(0,r.useMemo)((()=>function(e,t,a,o){return o&&(e=e.filter((e=>e.title.toLowerCase().includes(o.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===a?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(w,o,t,n)),[o,t,n])}function z(){return r.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},r.createElement("p",null,A),r.createElement(m.Z,{className:"button button--primary",to:M},r.createElement(l.Z,{id:"showcase.header.button"},"\ud83d\ude4f Please add your Operators or Nodes")))}function J(){const e=X(),t=function(){const{selectMessage:e}=(0,d.c)();return t=>e(t,(0,l.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 site|{sitesCount} sites"},{sitesCount:t}))}();return r.createElement("section",{className:"container margin-top--l margin-bottom--lg"},r.createElement("div",{className:(0,n.Z)("margin-bottom--sm",U.filterCheckbox)},r.createElement("div",null,r.createElement(v.Z,{as:"h2"},r.createElement(l.Z,{id:"showcase.filters.title"},"Filters")),r.createElement("span",null,t(e.length))),r.createElement(S,null)),r.createElement("ul",{className:(0,n.Z)("clean-list",U.checkboxList)},E.map(((e,t)=>{const{label:a,description:o,color:s}=f[e],n=`showcase_checkbox_id_${e}`;return r.createElement("li",{key:t,className:U.checkboxListItem},r.createElement(T,{id:n,text:o,anchorEl:"#__docusaurus"},r.createElement(k,{tag:e,id:n,label:a,icon:"favorite"===e?r.createElement(h,{svgClass:U.svgIconFavoriteXs}):r.createElement("span",{style:{backgroundColor:s,width:10,height:10,borderRadius:"50%",marginLeft:8}})})))}))))}w.filter((e=>e.tags.includes("favorite")));const K=w.filter((e=>!e.tags.includes("favorite")));function q(){const e=(0,i.k6)(),t=(0,i.TH)(),[a,o]=(0,r.useState)(null);return(0,r.useEffect)((()=>{o(Y(t.search))}),[t]),r.createElement("div",{className:U.searchContainer},r.createElement("input",{id:"searchbar",placeholder:(0,l.I)({message:"Search for site name...",id:"showcase.searchBar.placeholder"}),value:a??void 0,onInput:a=>{o(a.currentTarget.value);const r=new URLSearchParams(t.search);r.delete(W),a.currentTarget.value&&r.set(W,a.currentTarget.value),e.push({...t,search:r.toString(),state:j()}),setTimeout((()=>{document.getElementById("searchbar")?.focus()}),0)}}))}function G(){const e=X();return 0===e.length?r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container padding-vert--md text--center"},r.createElement(v.Z,{as:"h2"},r.createElement(l.Z,{id:"showcase.usersList.noResult"},"No result")),r.createElement(q,null))):r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},e.length===w.length?r.createElement(r.Fragment,null,r.createElement("div",{className:"container margin-top--lg"},r.createElement(v.Z,{as:"h2",className:U.showcaseHeader},r.createElement(l.Z,{id:"showcase.usersList.allUsers"},"All sites")),r.createElement("ul",{className:(0,n.Z)("clean-list",U.showcaseList)},K.map((e=>r.createElement(H,{key:e.title,user:e})))))):r.createElement("div",{className:"container"},r.createElement("div",{className:(0,n.Z)("margin-bottom--md",U.showcaseFavoriteHeader)},r.createElement(q,null)),r.createElement("ul",{className:(0,n.Z)("clean-list",U.showcaseList)},e.map((e=>r.createElement(H,{key:e.title,user:e}))))))}function V(){return r.createElement("div",null,r.createElement(z,null),r.createElement(J,null),r.createElement(G,null))}const $={sidebar_position:1},Q=void 0,ee={unversionedId:"nodes_operators/search",id:"nodes_operators/search",title:"search",description:"",source:"@site/docs/nodes_operators/search.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/search",permalink:"/docs/nodes_operators/search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes_operators/search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"nodes_operators",next:{title:"Control operator",permalink:"/docs/nodes_operators/control_operator"}},te={},ae=[],oe={toc:ae},re="wrapper";function se(e){let{components:t,...a}=e;return(0,s.kt)(re,(0,o.Z)({},oe,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(V,{mdxType:"Showcase"}))}se.isMDXComponent=!0}}]);