!function(){var e,t={957:function(e,t,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},639:function(e,t,n){var o=n(957),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},279:function(e,t,n){var o=n(218),r=n(771),i=n(841),a=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,d,u,v,f,p=0,m=!1,g=!1,_=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=c,o=s;return c=s=void 0,p=t,u=e.apply(o,n)}function y(e){return p=e,v=setTimeout(w,t),m?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-p>=d}function w(){var e=r();if(S(e))return E(e);v=setTimeout(w,function(e){var n=t-(e-f);return g?l(n,d-(e-p)):n}(e))}function E(e){return v=void 0,_&&c?b(e):(c=s=void 0,u)}function P(){var e=r(),n=S(e);if(c=arguments,s=this,f=e,n){if(void 0===v)return y(f);if(g)return clearTimeout(v),v=setTimeout(w,t),b(f)}return void 0===v&&(v=setTimeout(w,t)),u}return t=i(t)||0,o(n)&&(m=!!n.leading,d=(g="maxWait"in n)?a(i(n.maxWait)||0,t):d,_="trailing"in n?!!n.trailing:_),P.cancel=function(){void 0!==v&&clearTimeout(v),p=0,c=f=s=v=void 0},P.flush=function(){return void 0===v?u:E(r())},P}},218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},771:function(e,t,n){var o=n(639);e.exports=function(){return o.Date.now()}},493:function(e,t,n){var o=n(279),r=n(218);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:i,maxWait:t,trailing:a})}},841:function(e){e.exports=function(e){return e}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.amdO={},e=[],o.O=function(t,n,r,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],i=e[d][2];for(var l=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={483:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],l=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var d=c(o)}for(t&&t(n);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self.webpackChunkcommonutilsnodeserv=self.webpackChunkcommonutilsnodeserv||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.nc=void 0;var r={};!function(){"use strict";var e=!1;function t(e){return e.innerWidth<=768}function n(t){if(!e){var n=t.querySelector(".cw_navbar__subnav");if(n){var o=t.querySelector(".cw_navbar_mobile");o.parentElement.insertBefore(n,o.nextSibling)}e=!0}}function r(){var e=document.getElementById("PPAppDownloadBanner_Desktop");return e&&"none"!==window.getComputedStyle(e).display}var i,a=o(493),l=o.n(a);function c(){return{recordImpression:function(){for(var e,t,n,o,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];null===(e=window)||void 0===e||null===(t=e.PAYPAL)||void 0===t||null===(n=t.analytics)||void 0===n||null===(o=n.instance)||void 0===o||o.recordImpression(...i)},record:function(){for(var e,t,n,o,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];null===(e=window)||void 0===e||null===(t=e.PAYPAL)||void 0===t||null===(n=t.analytics)||void 0===n||null===(o=n.instance)||void 0===o||o.record(...i)},recordClick:function(){for(var e,t,n,o,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];null===(e=window)||void 0===e||null===(t=e.PAYPAL)||void 0===t||null===(n=t.analytics)||void 0===n||null===(o=n.instance)||void 0===o||o.recordClick(...i)},start:()=>{}}}function s(){var e,t,n;if(null===(e=window)||void 0===e||null===(t=e.PAYPAL)||void 0===t||null===(n=t.analytics)||void 0===n?void 0:n.instance)return c();var o,r={recordImpression:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o.push({methodName:"recordImpression",args:t})},record:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o.push({methodName:"record",args:t})},recordClick:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o.push({methodName:"recordClick",args:t})},queue:o=[],start:()=>{}};return r.start=()=>{!function(e){e.intervalId||(e.intervalId=setInterval((()=>function(e){var t,n,o,r=null===(t=window)||void 0===t||null===(n=t.PAYPAL)||void 0===n||null===(o=n.analytics)||void 0===o?void 0:o.instance;r&&!e.queue.length&&(Object.assign(e,c()),clearInterval(e.intervalId),e.intervalId=null),r&&e.queue.splice(0,10).forEach((e=>{var t=e.methodName,n=e.args;r[t](...n)}))}(e)),200))}(r)},r}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.includes("?")?"&":"?";return"".concat(e).concat(t,"cwt=").concat(Date.now())}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!n&&t.has(e))return!1;var o=new Image;return o.src=f(e),t.add(e),!0}function m(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(!e||!n||!Object.keys(n).length)return!1;var i=JSON.stringify(u(u({},n),{},{e:t}));return!(!r&&o.has(i)||("im"===t?(e.recordImpression(null,n),o.add(i),0):"av"===t?(e.record({data:u(u({},n),{},{e:"av"})}),o.add(i),0):"cl"!==t||(e.recordClick({data:n}),o.add(i),0)))}function g(e,t){var n=e.x+e.width/2,o=e.y+e.height/2;return n>=t.x&&n<=t.right&&o>=t.y&&o<=t.bottom}function _(e){try{var t=JSON.parse(e);return Array.isArray(t)?t[0]:t}catch(e){return console.error(e),{}}}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){var t=e.getAttribute(i.IMPRESSION_VIEWPORT);return t&&e.querySelector(t)||e}function E(e){var t=function(e){var t=A(e,i.IMPRESSION_VIEWPORT);return t?w(t):null}(e),n=t?t.getBoundingClientRect():null,o=e.getBoundingClientRect();return!(!g(o,{x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight,right:document.body.clientWidth,bottom:document.body.clientHeight})||n&&!g(o,n))}function P(e){return!A(e,i.IMPRESSION_OFF)}function I(e){return!A(e,i.LOAD_OFF)}function h(e){if(e.offsetParent)return!0;var t=getComputedStyle(e);return"fixed"===t.position&&"none"!==t.display}function O(e,t){return e.getAttribute(i.PS_IMPRESSION)||t&&e.getAttribute(i.PS_IMPRESSION_SENT)}function T(e,t){return e.getAttribute(i.FPTI_IMPRESSION)||t&&e.getAttribute(i.FPTI_IMPRESSION_SENT)}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Array.isArray(e)?e:[e];return(t||document).querySelectorAll(n.map((e=>"[".concat(e,"]"))).join(","))}function A(e,t){return e.closest("[".concat(t,"]"))}function N(e){for(var t=[],n=e;null!=n&&(n=A(n,i.FPTI_BASE));)t.push(_(n.getAttribute(i.FPTI_BASE))),n=n.parentNode;return t.reverse().reduce(((e,t)=>y(y({},e),t)),{})}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=N(e),r=t?_(e.getAttribute(t)):{};return y(y(y({},o),r),n)}!function(e){e.PS_CLICK="data-cwt-ps-cl",e.PS_IMPRESSION="data-cwt-ps-im",e.PS_IMPRESSION_SENT="data-cwt-ps-im-sent",e.PS_PRESENTMENT="data-cwt-ps-pr",e.PS_PRESENTMENT_SENT="data-cwt-ps-pr-sent",e.FPTI_CLICK="data-cwt-fpti-cl",e.FPTI_IMPRESSION="data-cwt-fpti-im",e.FPTI_IMPRESSION_SENT="data-cwt-fpti-im-sent",e.FPTI_LOAD="data-cwt-fpti-av",e.FPTI_LOAD_SENT="data-cwt-fpti-av-sent",e.FPTI_BASE="data-cwt-fpti-base",e.IMPRESSION_EVENT="data-cwt-im-event",e.IMPRESSION_VIEWPORT="data-cwt-im-viewport",e.IMPRESSION_REIMPRESS_EVENT="data-cwt-im-reimpress",e.IMPRESSION_OFF="data-cwt-im-off",e.LOAD_OFF="data-cwt-load-off"}(i||(i={}));var C={PS:"dashed",FPTI:"dotted",BOTH:"double"},q={PS:"darkmagenta",FPTI:"darkorange",BOTH:"darkgreen"};function k(e,t,n,o,r){var i=e.style[t];i===o?e.style[t]=r:[n,o,r].includes(i)||(e.style[t]=n)}var M={},R=new Set,j=!1,D=null;function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(h(e)&&P(e)&&E(e)){var o=O(e,n),r=T(e,n),a=A(e,i.IMPRESSION_REIMPRESS_EVENT),l=Boolean(a&&t&&t===a.getAttribute(i.IMPRESSION_REIMPRESS_EVENT));o&&p(o,R,l)&&Y(e,i.PS_IMPRESSION,i.PS_IMPRESSION_SENT),r&&m(D,"im",x(e,null,_(r)),R,l)&&Y(e,i.FPTI_IMPRESSION,i.FPTI_IMPRESSION_SENT)}}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];W(e);var o=[i.PS_IMPRESSION,i.FPTI_IMPRESSION];n&&o.push(i.PS_IMPRESSION_SENT,i.FPTI_IMPRESSION_SENT);var r=[...L(o,e)];(O(e,n)||T(e,n))&&r.push(e),r.forEach((e=>F(e,t,n)))}function V(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];L(e).forEach((n=>{var o=n.getAttribute(e)||"",r=M[o];r||(window.addEventListener(o,(()=>{M[o].forEach((e=>{B(e,o,t)}))})),r=[],M[o]=r),r.push(n)}))}function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;L(i.PS_PRESENTMENT,e).forEach((e=>{I(e)&&p(e.getAttribute(i.PS_PRESENTMENT),R)&&Y(e,i.PS_PRESENTMENT,i.PS_PRESENTMENT_SENT)})),L(i.FPTI_LOAD,e).forEach((e=>{I(e)&&m(D,"av",x(e,i.FPTI_LOAD),R)&&Y(e,i.FPTI_LOAD,i.FPTI_LOAD_SENT)}))}function X(e){var t=A(e.target,i.FPTI_CLICK);t&&(m(D,"cl",x(t,i.FPTI_CLICK),R,!0),H(t,i.PS_CLICK));var n,o,r=A(e.target,i.PS_CLICK);r&&(p((o=A(r,n=i.PS_CLICK))?o.getAttribute(n):"",R,!0),H(r,i.PS_CLICK))}function K(){var e=l()((()=>{B(document.body)}),1e3);window.addEventListener("scroll",e),window.addEventListener("resize",e),L(i.IMPRESSION_VIEWPORT).forEach((t=>{w(t).addEventListener("scroll",e)})),e()}function H(e,t){j&&function(e,t){if(t===i.FPTI_LOAD||t==i.PS_PRESENTMENT){e.style.borderColor||(e.style.borderColor="gray"),e.style.borderWidth||(e.style.borderWidth="1px");var n=t===i.FPTI_LOAD?"FPTI":"PS";k(e,"borderStyle",C[n],C["PS"===n?"FPTI":"PS"],C.BOTH),"double"===e.style.borderStyle&&(e.style.borderWidth="3px")}else if(t===i.FPTI_IMPRESSION||t==i.PS_IMPRESSION){e.style.borderStyle||(e.style.borderStyle="solid"),e.style.borderWidth||(e.style.borderWidth="1px");var o=t===i.FPTI_IMPRESSION?"FPTI":"PS";k(e,"borderColor",q[o],q["PS"===o?"FPTI":"PS"],q.BOTH)}else if(t===i.FPTI_CLICK||t==i.PS_CLICK){e.style.outlineStyle||(e.style.outlineStyle="solid"),e.style.outlineWidth||(e.style.outlineWidth="2px");var r=t===i.FPTI_CLICK?"FPTI":"PS";k(e,"outlineColor",q[r],q["PS"===r?"FPTI":"PS"],q.BOTH)}}(e,t)}function Y(e,t,n){H(e,t),function(e,t,n){var o=e.getAttribute(t);o&&(e.setAttribute(n,o),e.removeAttribute(t))}(e,t,n)}function z(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];M={},R=new Set,j=e,D=s()}[function(e,t){e.VX||(e.VX={}),e.VX.featDetection={hasFocusIn:!!("onfocusin"in e),hasPlaceholder:"string"==typeof t.createElement("input").placeholder,hasTransition:""===t.body.style.transition}},function(o,r){r.addEventListener("DOMContentLoaded",(()=>function(o,r){var i,a,l;e=!1;var c,s=r.getElementById("toggleNavigation"),d=r.getElementById("header-logout_mobile"),u=r.getElementById("toggleNavigationButton"),v=r.querySelector(".vx_globalNav-container")||r.querySelector(".cw_navbar_drawer"),f=!0;if(u&&s&&v){s.style.display="none";var p=e=>{s.checked=e,e?(v.classList.remove("cw_drawer_closed"),u.classList.add("cw_navbar_mobile--open")):u.classList.remove("cw_navbar_mobile--open"),(e=>{!t(o)||e?v.removeAttribute("data-cwt-im-off"):v.setAttribute("data-cwt-im-off","true"),window.dispatchEvent(new CustomEvent("CWTMenu"))})(e)};null===(i=r.querySelector(".vx_foreground-container"))||void 0===i||i.addEventListener("transitionend",(()=>{s.checked||v.classList.add("cw_drawer_closed")})),p(!1),v.classList.add("cw_drawer_closed"),u.addEventListener("click",(()=>{var e;f=!1;var t=!s.checked;p(t),t&&d&&d.focus(),null===(e=u.querySelector(t?".vx_globalNav-toggleTrigger_animated_open":".vx_globalNav-toggleTrigger_animated_close"))||void 0===e||e.click()})),window.addEventListener("load",(()=>{f&&s.checked&&p(!1)})),null===(a=u.querySelector(".vx_globalNav-toggleTrigger_animated_open"))||void 0===a||a.addEventListener("click",(e=>{e.stopPropagation()})),null===(l=u.querySelector(".vx_globalNav-toggleTrigger_animated_close"))||void 0===l||l.addEventListener("click",(e=>{e.stopPropagation()})),o.addEventListener("resize",(()=>{clearTimeout(c),c=setTimeout((()=>{o.innerWidth>768?(p(!1),function(t){if(e){var n=t.querySelector(".cw_navbar__subnav");n&&t.querySelector(".cw_navbar").appendChild(n),e=!1}}(r)):n(r)}),100)})),t(o)&&n(r)}}(o,r)))},function(e,t){var n=t.getElementById("vx_root")||t.body,o={focus:function(){}},r=null;function i(o){var r=t.documentElement.scrollTop||t.body.parentNode.scrollTop||t.body.scrollTop,i=t.getElementById(o),a=t.getElementById("vx_modal-background"),l=t.querySelector(".vx_globalNav-main"),c=t.querySelector(".vx_foreground-container");function s(){t.querySelector(".vx_foreground-container").setAttribute("style","top: -"+r+"px;"),n.setAttribute("data-scroll-position",r),t.body.scrollTop=0,n.classList.add("vx_hasOpenModal"),i.classList.remove("vx_modalIsOpening"),i.classList.add("vx_modalIsOpen"),i.removeEventListener("transitionend",s),i.focus(),l&&l.setAttribute&&(l.setAttribute("inert",!0),l.setAttribute("aria-hidden",!0)),c&&c.setAttribute&&(c.setAttribute("inert",!0),c.setAttribute("aria-hidden",!0))}a?a.classList.add("vx_modalPrepBg"):((a=t.createElement("div")).setAttribute("class","vx_modal-background vx_modalPrepBg"),a.setAttribute("id","vx_modal-background"),n.appendChild(a)),i.classList.add("vx_modalPrepToOpen"),setTimeout((function(){i.classList.add("vx_modalIsOpening"),a.classList.add("vx_modalBgIsShown"),i.hasAttribute("aria-label")||i.setAttribute("aria-label","Modal Dialog")}),35),e.VX.featDetection.hasTransition?i.addEventListener("transitionend",s):setTimeout(s,220)}function a(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=n.getAttribute("data-scroll-position"),c=i?t.getElementById(i):t.querySelector(".vx_modalIsOpen"),s=t.getElementById("vx_modal-background"),d=t.querySelector(".vx_globalNav-main"),u=t.querySelector(".vx_foreground-container");function v(){var e=r||a&&t.querySelector(a)||o;t.querySelector(".vx_foreground-container").removeAttribute("style"),n.removeAttribute("data-scroll-position"),t.body.scrollTop=l,c.classList.remove("vx_modalIsClosing"),c.classList.remove("vx_modalPrepToOpen"),s.classList.remove("vx_modalPrepBg"),c.removeEventListener("transitionend",v),e.focus(),r=null}d&&d.removeAttribute&&(d.removeAttribute("inert",!0),d.removeAttribute("aria-hidden",!0)),u&&u.removeAttribute&&(u.removeAttribute("inert",!0),u.removeAttribute("aria-hidden",!0)),n.classList.remove("vx_hasOpenModal"),c.classList.remove("vx_modalIsOpen"),s.classList.remove("vx_modalBgIsShown"),c.classList.add("vx_modalIsClosing"),e.VX.featDetection.hasTransition?c.addEventListener("transitionend",v):setTimeout(v,220)}n.addEventListener("click",(function(e){var t,n=e.target.className||"";n.indexOf&&(-1!==n.indexOf("vx_modal-trigger")&&(t=e.target.getAttribute("data-modal-id"),r=e.target,i(t)),-1===n.indexOf("vx_modal-dismiss_trigger")&&-1===n.indexOf("vx_modal-dismiss_x-trigger")||a(t=e.target.getAttribute("data-modal-id")))})),n.addEventListener("keyup",(function(e){var o;27===e.keyCode&&-1!==n.className.indexOf("vx_hasOpenModal")&&null!==(o=t.querySelector(".vx_modalIsOpen"))&&void 0!==o&&o.querySelector(".vx_modal-dismiss_x-trigger")&&a()})),e.VX?(e.VX.modal||(e.VX.modal={}),e.VX.modal.open=i,e.VX.modal.close=a):console.error("Error: the component `core.js` is required.")},function(e,t){var n=t.body,o=null,r=t.querySelectorAll("li.cw_notification"),i={};function a(e,t){if(!i[e]&&t){t+="&ts="+Date.now();var n=new XMLHttpRequest;n.open("GET",t,!0),n.withCredentials=!0,n.send(),i[e]=!0}}function l(e,o){var i=o,l=t.getElementById(e),c=i.getAttribute("data-popover-pagename-hide")||"";function d(){i.setAttribute("data-pagename",c),n.classList.add("cw_hasOpenPopover"),n.setAttribute("data-popover-id",e),l.classList.remove("cw_popOverIsOpening"),l.classList.add("cw_popoverIsOpen");var t=s("popoverIsOpen");l.dispatchEvent(t),l.removeEventListener("transitionend",d),l.focus();var o=s("open");l.dispatchEvent(o),function(){for(var e=0;e<r.length;e++){var t=r[e].getAttribute("data-fpti-impression-url");a(r[e].id,t)}}()}l.classList.add("cw_popoverPrepToOpen"),function(e){for(;e;)e.offsetLeft-e.scrollLeft+e.clientLeft,e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent}(i);var u=l.querySelector(".cw_popover-body");l.style.left=-(l.clientWidth/2-i.clientWidth/2)+"px",u.addEventListener("wheel",(function(e){var t=e.deltaY,n=u.scrollHeight,o=u.offsetHeight,r=u.scrollTop;(0===r&&t<0||o+r===n&&t>0)&&e.preventDefault()})),setTimeout((function(){var e=s("prepToOpen");l.dispatchEvent(e),l.classList.add("cw_popoverIsOpening"),l.hasAttribute("aria-label")||l.setAttribute("aria-label","Popover Dialog")}),35),window.VX.featDetection.hasTransition?l.addEventListener("transitionend",d):setTimeout(d,220)}function c(e){var r=e?t.getElementById(e):t.querySelector(".cw_popoverIsOpen"),i=o.getAttribute("data-popover-pagename-show")||"";function a(){o.setAttribute("data-pagename",i),r.classList.remove("cw_popoverIsClosing"),r.classList.remove("cw_popoverPrepToOpen"),r.classList.remove("cw_popoverIsOpening"),r.classList.remove("cw_popoverIsOpen"),r.removeEventListener("transitionend",a),o=null;var e=s("closed");r.dispatchEvent(e)}n.classList.remove("cw_hasOpenPopover"),n.removeAttribute("data-popover-id"),r.classList.remove("cw_popoverIsOpen"),r.classList.add("cw_popoverIsClosing"),window.VX.featDetection.hasTransition?r.addEventListener("transitionend",a):setTimeout(a,220),"true"===o.getAttribute("data-popover-autodisplay")&&o.removeAttribute("data-popover-autodisplay")}function s(e){var n=null;return"function"==typeof Event?n=new Event(e):(n=t.createEvent("Event")).initEvent(e,!0,!0),n}n.addEventListener("click",(function(e){var r=e.target,i=r.className,a=r.getAttribute&&r.getAttribute("data-popover-id"),s=n.classList.contains("cw_hasOpenPopover"),d=null;i&&i.indexOf&&(-1!==i.indexOf("cw_popover-trigger")?(e.preventDefault(),d=t.getElementById(a),o=r,d.classList.contains("cw_popoverIsOpening")?c(a):l(a,o)):s&&(a=n.getAttribute("data-popover-id"),(d=t.getElementById(a)).contains(r)||c(a)))})),n.addEventListener("keyup",(function(e){var o=n.getAttribute("data-popover-id"),r=t.querySelector(".cw_popover-trigger");27===e.keyCode&&-1!==t.body.className.indexOf("cw_hasOpenPopover")&&(c(o),r.focus())})),t.addEventListener("DOMContentLoaded",(function(){var n=t.querySelector(".cw_popover-trigger"),r=t.querySelector(".cw_notifications-mobile-trigger"),i=t.querySelector(".vx_globalNav-main_mobile")||t.querySelector(".cw_navbar_mobile");if(n&&"true"===n.getAttribute("data-popover-autodisplay")&&l(n.getAttribute("data-popover-id"),o=n),r){var a=r.getAttribute("data-popover-autodisplay"),c=null,s=null,d=i.currentStyle?i.currentStyle.display:getComputedStyle(i,null).display;"true"===a&&"none"!==d&&(c=r.getAttribute("data-modal-id"),(s=t.getElementById(c)).classList.add("cw_notifications_critical"),t.body.appendChild(s),setTimeout((function(){e.window.VX.modal.open(c)}),1e3))}}))},function(e,t){var n,o,r,i;function a(n,o){var r=t.getElementById(n);if(r){var i=r.querySelector(".cw_popover-body"),a=r.querySelector("#cw_tab-notifications"),l=r.querySelector("#cw_tab-messages");a.addEventListener("click",b,!1),l.addEventListener("click",b,!1);var c,s,d,u,v,f,p,m,g,_="notifications-mobile-popover"===n?t:i;_&&_.addEventListener("scroll",(function(o){var a=t.documentElement,l="notifications-mobile-popover"===n?(e.pageYOffset||a.scrollTop)-(a.clientTop||0):i.scrollTop-(i.clientTop||0);r.querySelector(".cw_tab-list-shadow").style.display=l>5?"block":"none"})),s=(c=r).querySelector("#notificationCount"),d=parseInt(s.textContent,10),u=c.querySelector("#cw_tab-notifications"),v=c.querySelector(".cw_panel_notifications"),f=c.querySelector("#messageCount"),p=parseInt(f.textContent,10),m=c.querySelector("#cw_tab-messages"),g=c.querySelector(".cw_panel_messages"),d=isNaN(d)?0:d,p=isNaN(p)?0:p,0===d&&p>0&&(m.classList.add("cw_tab_selected"),g.classList.add("cw_panel_selected"),u.classList.remove("cw_tab_selected"),v.classList.remove("cw_panel_selected")),e.addEventListener("resize",(function(){t.body.classList.contains("cw_hasOpenPopover")&&y()})),r.addEventListener("prepToOpen",(function(e){y()}))}else console.error("Failed to locate element with ID:"+n);function b(e){for(var t=r.querySelectorAll(".cw_tab_selected"),n=r.querySelectorAll(".cw_panel_selected"),o=0;o<t.length;o++)t[o].classList.remove("cw_tab_selected");for(var i=0;i<n.length;i++)n[i].classList.remove("cw_panel_selected");var a=e.target.id,l=r.querySelector("#"+a);l.classList.add("cw_tab_selected");var c=l.getAttribute("data-panel"),s=r.querySelector("#"+c);s&&s.classList.add("cw_panel_selected"),y()}function y(){r.querySelector(".cw_popover-body").querySelector(".cw_panel_selected")}}function l(t){var n,o=null==t||null===(n=t.target)||void 0===n?void 0:n.getAttribute("data-modal-id");e.VX.modal.close(o)}function c(n){var o,r,i,a,l=n.getAttribute("data-modal-id"),c=t.getElementById(l);null===(o=document)||void 0===o||null===(r=o.body)||void 0===r||r.appendChild(c),null==e||null===(i=e.VX)||void 0===i||null===(a=i.modal)||void 0===a||a.open(l),document.querySelector("#notifications-mobile").removeAttribute("data-cwt-load-off"),window.dispatchEvent(new CustomEvent("CWNotificationsPopover"))}null===(n=t.querySelector("#dismiss-notifications-modal__icon"))||void 0===n||n.addEventListener("click",l),null===(o=t.querySelector("#header-openNotifications"))||void 0===o||o.addEventListener("click",(function(e){c(e.target)})),null===(r=t.querySelector("#dismiss-notifications-modal__icon"))||void 0===r||r.addEventListener("keyup",(function(e){13===e.keyCode&&l(e)})),null===(i=t.querySelector("#header-openNotifications"))||void 0===i||i.addEventListener("keyup",(function(e){13===e.keyCode&&c(e.target)})),e.addEventListener("load",(function(){[{closeItemSelector:"#header-notifications",tabItemSelector:"#notifications-popover #cw_tab-messages",listSelectors:["#notifications-popover .cw_notification_new","#notifications-popover #cw_panel-messages .cw_message_tab"]},{closeItemSelector:"#dismiss-notifications-modal__icon",tabItemSelector:"#notifications-mobile-popover #cw_tab-messages",listSelectors:["#notifications-mobile-popover .cw_notification_new","#notifications-mobile-popover #cw_panel-messages .cw_message_tab"]}].forEach((function(e){var t=e.closeItemSelector,n=e.tabItemSelector,o=e.listSelectors,r=document.querySelector(t),i=document.querySelector(n);o.forEach((function(e){var t,n,o=document.querySelectorAll(e),a=(null==o?void 0:o.length)>0?o[o.length-1]:i;n=r,null==(t=a)||t.addEventListener("focusout",(function(e){var t;null!=e&&null!==(t=e.target)&&void 0!==t&&t.querySelector("a")||null==n||n.click(),null==e||e.stopPropagation()}))}))}))})),t.body.addEventListener("click",(function(n){var o,r=t.querySelector(".cw_notifications-mobile-trigger"),i=n.target.className,a=null;i&&i.indexOf&&(-1!==i.indexOf("cw_notifications-mobile-trigger")&&c(n.target),-1===i.indexOf("vx_modal-dismiss_trigger")&&-1===i.indexOf("vx_modal-dismiss_x-trigger")||(a=n.target.getAttribute("data-modal-id"),r.removeAttribute("data-popover-autodisplay"),e.VX.modal.close(a)),i.indexOf("js_notificationDesktopBtn")>=0&&(t.querySelectorAll(".js_notificationCount").forEach((function(e){e.parentNode.removeChild(e)})),null===(o=document.querySelector("#notifications-popover"))||void 0===o||o.removeAttribute("data-cwt-load-off"),window.dispatchEvent(new CustomEvent("CWNotificationsPopover"))))})),e.addEventListener("load",(function(){a("notifications-mobile-popover"),a("notifications-popover")}))},function(){window.cwEnableSubnav=()=>{document.body.classList.add("cw_navbar--enable-subnav")},document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".cw_navbar")&&(document.body.classList.add("cw_navbar_enabled"),r()&&document.body.classList.add("PP__DesktopBanner"))})),window.addEventListener("load",(()=>{document.querySelector(".cw_navbar")&&([...document.querySelectorAll(".cw_navbar__subnav-item")].forEach((e=>{e.addEventListener("click",(t=>function(e,t){var n,o;if(null!==(n=window)&&void 0!==n&&n.cwClientSideRouteTo)return e.preventDefault(),void(null===(o=window)||void 0===o||o.cwClientSideRouteTo(t.getAttribute("href")))}(t,e)))})),function(){if(r()){var e=document.getElementById("PPAppDownloadBannerCloseIcon"),t=document.getElementById("PPAppDownloadBanner_Desktop");e&&e.addEventListener("click",(function(e){e.preventDefault(),t.style.display="none",document.body.classList.remove("PP__DesktopBanner");var n=document.querySelectorAll(".PP__DesktopBanner__Top_Margin");if(n.length>0)for(var o=0;o<n.length;o++)n[o].classList.remove("PP__DesktopBanner__Top_Margin")}))}}())}))},function(){window.addEventListener("DOMContentLoaded",(()=>{!function(){z(((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{}).visualTracking),W(document.body),document.body.addEventListener("click",X),K(),V(i.IMPRESSION_EVENT),V(i.IMPRESSION_REIMPRESS_EVENT,!0),D.start()}({visualTracking:window.cwContext.visualTracking})}))}].forEach((e=>e(window,document)))}(),r=o.O(r)}();