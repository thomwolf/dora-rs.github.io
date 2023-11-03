"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[9428],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||l;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9592:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Installation",o={unversionedId:"guides/dora-drives/installation",id:"guides/dora-drives/installation",title:"Installation",description:"| Software      | Version Tested | Installation Guide |",source:"@site/docs/guides/dora-drives/installation.mdx",sourceDirName:"guides/dora-drives",slug:"/guides/dora-drives/installation",permalink:"/docs/guides/dora-drives/installation",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/dora-drives/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"readme",permalink:"/docs/guides/dora-drives/"},next:{title:"Carla Simulator",permalink:"/docs/guides/dora-drives/carla"}},d={},s=[{value:"Uninstalling package",id:"uninstalling-package",level:3}],p={toc:s},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Version Tested"),(0,r.kt)("th",{parentName:"tr",align:null},"Installation Guide"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 <"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Conda"),(0,r.kt)("td",{parentName:"tr",align:null},"22.11.1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pytorch"),(0,r.kt)("td",{parentName:"tr",align:null},"1.11"),(0,r.kt)("td",{parentName:"tr",align:null},"Installation below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVIDIA Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"515.86.01"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CUDA"),(0,r.kt)("td",{parentName:"tr",align:null},"11.7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dora-rs"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Installation below")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:dora-rs/dora-drives.git\ncd dora-drives\n\n## Add missing linux dependencies\nsudo apt-get -y update\nsudo apt-get -y install apt-utils git curl clang wget\nsudo apt-get install -y cmake unzip libpng-dev libgeos-dev python3-opencv libomp-dev\nsudo apt-get -y --fix-missing update && sudo apt-get install --fix-missing -y libcudnn8 libqt5core5a libeigen3-dev cmake qtbase5-dev libpng16-16 libtiff5 python3-tk libgeos-dev build-essential libopenblas-dev libssl-dev\n\n## Installing dependencies\nconda create -n dora3.7 python=3.7 -y\nconda activate dora3.7\nconda install pytorch=1.11.0 torchvision=0.12.0 cudatoolkit=11.3 -c pytorch -y\npip install --upgrade pip\npip install -r install_requirements.txt\npip install -r requirements.txt\n\n## Installing dora if its not already installed\nsudo wget https://github.com/dora-rs/dora/releases/download/v0.3.0/dora-v0.3.0-x86_64-Linux.zip && sudo unzip dora-v0.3.0-x86_64-Linux.zip -d /usr/local/bin\n")),(0,r.kt)("h3",{id:"uninstalling-package"},"Uninstalling package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda remove --name dora3.7 --all\nrm ~/.local/bin/dora*\n")))}c.isMDXComponent=!0}}]);