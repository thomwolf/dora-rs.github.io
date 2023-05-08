"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(n),d=o,m=l["".concat(c,".").concat(d)]||l[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var f=2;f<i;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2503:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7462),o=n(7294),i=n(6010),a=n(5999),s=n(6668),c=n(9960);const f={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:l}}=(0,s.L)();if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},u,{id:void 0}));const p=(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return o.createElement(t,(0,r.Z)({},u,{className:(0,i.Z)("anchor",l?f.anchorWithHideOnScrollNavbar:f.anchorWithStickyNavbar,u.className),id:n}),u.children,o.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},8824:(e,t,n)=>{n.d(t,{c:()=>f});var r=n(7294),o=n(2263);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function f(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},5237:(e,t,n)=>{n.d(t,{D:()=>Ee});var r=n(7294),o=n(3935);function i(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function a(e){return e instanceof i(e).Element||e instanceof Element}function s(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!=typeof ShadowRoot&&(e instanceof i(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.max,u=Math.min,l=Math.round;function p(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function d(){return!/^((?!chrome|android).)*safari/i.test(p())}function m(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,c=1;t&&s(e)&&(o=e.offsetWidth>0&&l(r.width)/e.offsetWidth||1,c=e.offsetHeight>0&&l(r.height)/e.offsetHeight||1);var f=(a(e)?i(e):window).visualViewport,u=!d()&&n,p=(r.left+(u&&f?f.offsetLeft:0))/o,m=(r.top+(u&&f?f.offsetTop:0))/c,h=r.width/o,v=r.height/c;return{width:h,height:v,top:m,right:p+h,bottom:m+v,left:p,x:p,y:m}}function h(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function v(e){return e?(e.nodeName||"").toLowerCase():null}function y(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function g(e){return m(y(e)).left+h(e).scrollLeft}function b(e){return i(e).getComputedStyle(e)}function w(e){var t=b(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function x(e,t,n){void 0===n&&(n=!1);var r,o,a=s(t),c=s(t)&&function(e){var t=e.getBoundingClientRect(),n=l(t.width)/e.offsetWidth||1,r=l(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),f=y(t),u=m(e,c,n),p={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(a||!a&&!n)&&(("body"!==v(t)||w(f))&&(p=(r=t)!==i(r)&&s(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:h(r)),s(t)?((d=m(t,!0)).x+=t.clientLeft,d.y+=t.clientTop):f&&(d.x=g(f))),{x:u.left+p.scrollLeft-d.x,y:u.top+p.scrollTop-d.y,width:u.width,height:u.height}}function O(e){var t=m(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function j(e){return"html"===v(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||y(e)}function E(e){return["html","body","#document"].indexOf(v(e))>=0?e.ownerDocument.body:s(e)&&w(e)?e:E(j(e))}function D(e,t){var n;void 0===t&&(t=[]);var r=E(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=i(r),s=o?[a].concat(a.visualViewport||[],w(r)?r:[]):r,c=t.concat(s);return o?c:c.concat(D(j(s)))}function k(e){return["table","td","th"].indexOf(v(e))>=0}function P(e){return s(e)&&"fixed"!==b(e).position?e.offsetParent:null}function A(e){for(var t=i(e),n=P(e);n&&k(n)&&"static"===b(n).position;)n=P(n);return n&&("html"===v(n)||"body"===v(n)&&"static"===b(n).position)?t:n||function(e){var t=/firefox/i.test(p());if(/Trident/i.test(p())&&s(e)&&"fixed"===b(e).position)return null;var n=j(e);for(c(n)&&(n=n.host);s(n)&&["html","body"].indexOf(v(n))<0;){var r=b(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var S="top",W="bottom",L="right",M="left",T="auto",H=[S,W,L,M],R="start",N="end",F="clippingParents",B="viewport",C="popper",q="reference",U=H.reduce((function(e,t){return e.concat([t+"-"+R,t+"-"+N])}),[]),V=[].concat(H,[T]).reduce((function(e,t){return e.concat([t,t+"-"+R,t+"-"+N])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function I(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var $={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?$:o;return function(e,t,n){void 0===n&&(n=i);var o,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},$,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],u=!1,l={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n;p(),c.options=Object.assign({},i,c.options,o),c.scrollParents={reference:a(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var s=function(e){var t=I(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=s.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:l,options:r}),a=function(){};f.push(i||a)}})),l.update()},forceUpdate:function(){if(!u){var e=c.elements,t=e.reference,n=e.popper;if(Z(t,n)){c.rects={reference:x(t,A(n),"fixed"===c.options.strategy),popper:O(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,f=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:f,instance:l})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){p(),u=!0}};if(!Z(e,t))return l;function p(){f.forEach((function(e){return e()})),f=[]}return l.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var X={passive:!0};function Y(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Y(o):null,a=o?G(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case S:t={x:s,y:n.y-r.height};break;case W:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:c};break;case M:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?J(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case R:t[f]=t[f]-(n[u]/2-r[u]/2);break;case N:t[f]=t[f]+(n[u]/2-r[u]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,c=e.position,f=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,d=e.isFixed,m=s.x,h=void 0===m?0:m,v=s.y,g=void 0===v?0:v,w="function"==typeof p?p({x:h,y:g}):{x:h,y:g};h=w.x,g=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),j=M,E=S,D=window;if(u){var k=A(n),P="clientHeight",T="clientWidth";if(k===i(n)&&"static"!==b(k=y(n)).position&&"absolute"===c&&(P="scrollHeight",T="scrollWidth"),o===S||(o===M||o===L)&&a===N)E=W,g-=(d&&k===D&&D.visualViewport?D.visualViewport.height:k[P])-r.height,g*=f?1:-1;if(o===M||(o===S||o===W)&&a===N)j=L,h-=(d&&k===D&&D.visualViewport?D.visualViewport.width:k[T])-r.width,h*=f?1:-1}var H,R=Object.assign({position:c},u&&Q),F=!0===p?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:l(n*o)/o||0,y:l(r*o)/o||0}}({x:h,y:g},i(n)):{x:h,y:g};return h=F.x,g=F.y,f?Object.assign({},R,((H={})[E]=O?"0":"",H[j]=x?"0":"",H.transform=(D.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",H)):Object.assign({},R,((t={})[E]=O?g+"px":"",t[j]=x?h+"px":"",t.transform="",t))}const te={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=V.reduce((function(e,n){return e[n]=function(e,t,n){var r=Y(e),o=[M,S].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[M,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}};var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t,n){return t===B?se(function(e,t){var n=i(e),r=y(e),o=n.visualViewport,a=r.clientWidth,s=r.clientHeight,c=0,f=0;if(o){a=o.width,s=o.height;var u=d();(u||!u&&"fixed"===t)&&(c=o.offsetLeft,f=o.offsetTop)}return{width:a,height:s,x:c+g(e),y:f}}(e,n)):a(t)?function(e,t){var n=m(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):se(function(e){var t,n=y(e),r=h(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=f(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=f(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+g(e),c=-r.scrollTop;return"rtl"===b(o||n).direction&&(s+=f(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(y(e)))}function fe(e,t,n,r){var o="clippingParents"===t?function(e){var t=D(j(e)),n=["absolute","fixed"].indexOf(b(e).position)>=0&&s(e)?A(e):e;return a(n)?t.filter((function(e){return a(e)&&ae(e,n)&&"body"!==v(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),c=i[0],l=i.reduce((function(t,n){var o=ce(e,n,r);return t.top=f(o.top,t.top),t.right=u(o.right,t.right),t.bottom=u(o.bottom,t.bottom),t.left=f(o.left,t.left),t}),ce(e,c,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,s=void 0===i?e.strategy:i,c=n.boundary,f=void 0===c?F:c,u=n.rootBoundary,l=void 0===u?B:u,p=n.elementContext,d=void 0===p?C:p,h=n.altBoundary,v=void 0!==h&&h,g=n.padding,b=void 0===g?0:g,w=ue("number"!=typeof b?b:le(b,H)),x=d===C?q:C,O=e.rects.popper,j=e.elements[v?x:d],E=fe(a(j)?j:j.contextElement||y(e.elements.popper),f,l,s),D=m(e.elements.reference),k=K({reference:D,element:O,strategy:"absolute",placement:o}),P=se(Object.assign({},O,k)),A=d===C?P:D,M={top:E.top-A.top+w.top,bottom:A.bottom-E.bottom+w.bottom,left:E.left-A.left+w.left,right:A.right-E.right+w.right},T=e.modifiersData.offset;if(d===C&&T){var R=T[o];Object.keys(M).forEach((function(e){var t=[L,W].indexOf(e)>=0?1:-1,n=[S,W].indexOf(e)>=0?"y":"x";M[e]+=R[n]*t}))}return M}function de(e,t,n){return f(e,u(t,n))}const me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,y=void 0===v?0:v,g=pe(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:p}),b=Y(t.placement),w=G(t.placement),x=!w,j=J(b),E="x"===j?"y":"x",D=t.modifiersData.popperOffsets,k=t.rects.reference,P=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,H="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,F={x:0,y:0};if(D){if(i){var B,C="y"===j?S:M,q="y"===j?W:L,U="y"===j?"height":"width",V=D[j],_=V+g[C],I=V-g[q],$=h?-P[U]/2:0,Z=w===R?k[U]:P[U],z=w===R?-P[U]:-k[U],X=t.elements.arrow,K=h&&X?O(X):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[C],te=Q[q],ne=de(0,k[U],K[U]),re=x?k[U]/2-$-ne-ee-H.mainAxis:Z-ne-ee-H.mainAxis,oe=x?-k[U]/2+$+ne+te+H.mainAxis:z+ne+te+H.mainAxis,ie=t.elements.arrow&&A(t.elements.arrow),ae=ie?"y"===j?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(B=null==N?void 0:N[j])?B:0,ce=V+oe-se,fe=de(h?u(_,V+re-se-ae):_,V,h?f(I,ce):I);D[j]=fe,F[j]=fe-V}if(s){var ue,le="x"===j?S:M,me="x"===j?W:L,he=D[E],ve="y"===E?"height":"width",ye=he+g[le],ge=he-g[me],be=-1!==[S,M].indexOf(b),we=null!=(ue=null==N?void 0:N[E])?ue:0,xe=be?ye:he-k[ve]-P[ve]-we+H.altAxis,Oe=be?he+k[ve]+P[ve]-we-H.altAxis:ge,je=h&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(xe,he,Oe):de(h?xe:ye,he,h?Oe:ge);D[E]=je,F[E]=je-he}t.modifiersData[r]=F}},requiresIfExists:["offset"]};const he={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Y(n.placement),c=J(s),f=[M,L].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ue("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:le(e,H))}(o.padding,n),l=O(i),p="y"===c?S:M,d="y"===c?W:L,m=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],h=a[c]-n.rects.reference[c],v=A(i),y=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=u[p],w=y-l[f]-u[d],x=y/2-l[f]/2+g,j=de(b,x,w),E=c;n.modifiersData[r]=((t={})[E]=j,t.centerOffset=j-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ae(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[S,L,W,M].some((function(t){return e[t]>=0}))}var ge=z({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,s=r.resize,c=void 0===s||s,f=i(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,X)})),c&&f.addEventListener("resize",n.update,X),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,X)})),c&&f.removeEventListener("resize",n.update,X)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:Y(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&v(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&v(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},te,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=Y(v),g=c||(y===v||!m?[re(v)]:function(e){if(Y(e)===T)return[];var t=re(e);return[ie(e),t,ie(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(Y(n)===T?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?V:c,u=G(r),l=u?s?U:U.filter((function(e){return G(e)===u})):H,p=l.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Y(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],D=0;D<b.length;D++){var k=b[D],P=Y(k),A=G(k)===R,N=[S,W].indexOf(P)>=0,F=N?"width":"height",B=pe(t,{placement:k,boundary:u,rootBoundary:l,altBoundary:p,padding:f}),C=N?A?L:M:A?W:S;w[F]>x[F]&&(C=re(C));var q=re(C),_=[];if(i&&_.push(B[P]<=0),s&&_.push(B[C]<=0,B[q]<=0),_.every((function(e){return e}))){E=k,j=!1;break}O.set(k,_)}if(j)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},$=m?3:1;$>0;$--){if("break"===I($))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},me,he,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),c=ve(a,r),f=ve(s,o,i),u=ye(c),l=ye(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),be=n(9590),we=n.n(be),xe=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},Oe="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,je=[],Ee=function(e,t,n){void 0===n&&(n={});var i=r.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||je},s=r.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),c=s[0],f=s[1],u=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);o.flushSync((function(){f({styles:xe(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:xe(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=r.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[u,{name:"applyStyles",enabled:!1}])};return we()(i.current,e)?i.current||e:(i.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,u]),p=r.useRef();return Oe((function(){p.current&&p.current.setOptions(l)}),[l]),Oe((function(){if(null!=e&&null!=t){var r=(n.createPopper||ge)(e,t,l);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:c.styles,attributes:c.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}}}]);