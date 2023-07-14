"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[6730],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6699:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Installation Guide",o={unversionedId:"guides/autonomous-driving/installation",id:"guides/autonomous-driving/installation",title:"Installation Guide",description:"Hardware requirements",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/autonomous-driving/installation.mdx",sourceDirName:"guides/autonomous-driving",slug:"/guides/autonomous-driving/installation",permalink:"/zh-CN/docs/guides/autonomous-driving/installation",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"Dora Drives",permalink:"/zh-CN/docs/guides/autonomous-driving/"},next:{title:"Carla Simulator",permalink:"/zh-CN/docs/guides/autonomous-driving/carla"}},s={},d=[{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"From Source",id:"from-source",level:2},{value:"Environments",id:"environments",level:3},{value:"Using <code>dora-drives</code> without Docker",id:"using-dora-drives-without-docker",level:2},{value:"Environments",id:"environments-1",level:3},{value:"Installation",id:"installation",level:3},{value:"Uninstalling package",id:"uninstalling-package",level:3}],u={toc:d},p="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,r.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NVIDIA GPU with CUDA")),(0,r.kt)("h2",{id:"from-source"},"From Source"),(0,r.kt)("h3",{id:"environments"},"Environments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Installation Guide"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html"},"nvidia-docker")),(0,r.kt)("td",{parentName:"tr",align:null},"20.10.18"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html"},"nvidia-docker"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 \\<"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"For linux, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:dora-rs/dora-drives.git\ncd dora-drives\n./scripts/launch.sh -b -s -g tutorials/carla_full.yaml\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This script has been built with my setup and you might need to install further dependencies that I have not listed, and additional configuration for cross-compiling on other OS."),(0,r.kt)("p",{parentName:"blockquote"},"If you're having build difficulties with CUDA. Check out :",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/extension-cpp/issues/71#issuecomment-1061880626"},"https://github.com/pytorch/extension-cpp/issues/71#issuecomment-1061880626")," and make sure to have the exact same daemon.\nYou will need to have ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," to be exactly:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "runtimes": {\n       "nvidia": {\n           "path": "nvidia-container-runtime",\n           "runtimeArgs": []\n       }\n   },\n   "default-runtime": "nvidia"\n}\n')),(0,r.kt)("p",{parentName:"blockquote"},"And restart:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart docker\n"))),(0,r.kt)("h2",{id:"using-dora-drives-without-docker"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"dora-drives")," without Docker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Version Tested"),(0,r.kt)("th",{parentName:"tr",align:null},"Installation Guide"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 \\<"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Miniconda"),(0,r.kt)("td",{parentName:"tr",align:null},"22.11.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Check the Dockerfile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pytorch"),(0,r.kt)("td",{parentName:"tr",align:null},"1.11"),(0,r.kt)("td",{parentName:"tr",align:null},"Installation below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Carla"),(0,r.kt)("td",{parentName:"tr",align:null},"Carla Leaderboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Installation below in ",(0,r.kt)("inlineCode",{parentName:"td"},"scripts/install.sh"),". Version: ",(0,r.kt)("a",{parentName:"td",href:"https://carla-releases.s3.eu-west-3.amazonaws.com/Linux/Leaderboard/CARLA_Leaderboard_20.tar.gz"},"Leaderboard Version"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVIDIA Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"515.86.01"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CUDA"),(0,r.kt)("td",{parentName:"tr",align:null},"11.7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dora-rs"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Installation below")))),(0,r.kt)("h3",{id:"environments-1"},"Environments"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:dora-rs/dora-drives.git\ncd dora-drives\n\nexport DORA_DEP_HOME=<PATH TO A PARENT FOLDER> # Ex: $HOME/Documents\nexport DORA_DEP_HOME=$HOME/Documents\nexport CARLA_HOME=$DORA_DEP_HOME/dependencies/CARLA_0.9.13\nexport PYLOT_HOME=$DORA_DEP_HOME\nexport PYTHONPATH=$PYTHONPATH:$DORA_DEP_HOME/dependencies:$DORA_DEP_HOME/dependencies/CARLA_0.9.13/PythonAPI/carla:$DORA_DEP_HOME/dependencies/Carsmos/simulate_py37\n\n\n## Add missing linux dependencies\nsudo apt-get -y update \nsudo apt-get -y install apt-utils git curl clang wget\nsudo apt-get install -y cmake unzip libpng-dev libgeos-dev python3-opencv\nsudo apt-get -y --fix-missing update && sudo apt-get install --fix-missing -y libcudnn8 ssh libqt5core5a libeigen3-dev cmake qtbase5-dev libpng16-16 libtiff5 python3-tk libgeos-dev vim build-essential libopenblas-dev libssl-dev \n\n## Installing dependencies\nconda create -n dora3.7 python=3.7 -y\nconda activate dora3.7\nconda install pytorch=1.11.0 torchvision=0.12.0 cudatoolkit=11.3 -c pytorch -y\npip install --upgrade pip\npip install -r install_requirements.txt\npip install -r requirements.txt\n\n\nchmod +x ./scripts/*\n./scripts/install.sh\n\n## Installing Carla\ncd $DORA_DEP_HOME/dependencies/\nwget https://carla-releases.s3.eu-west-3.amazonaws.com/Linux/CARLA_0.9.13.tar.gz \ntar -xvf CARLA_0.9.13.tar.gz\nrm CARLA_0.9.13.tar.gz\n\n## Installing dora\nsudo wget https://github.com/dora-rs/dora/releases/download/v0.2.3/dora-v0.2.3-x86_64-Linux.zip && sudo unzip dora-v0.2.3-x86_64-Linux.zip -d ~/.local/bin \n")),(0,r.kt)("h3",{id:"uninstalling-package"},"Uninstalling package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda remove --name dora3.7 --all\nsudo rm -rf $DORA_DEP_HOME/dependencies\nrm ~/.local/bin/dora*\n")))}c.isMDXComponent=!0}}]);