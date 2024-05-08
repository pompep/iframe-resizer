/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/jquery 5.0.0-alpha.12 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              http://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link http://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-alpha.12",n="[iFrameSizer]",i=n.length,t=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),o=(e,n,i,t)=>e.addEventListener(n,i,t||!1),r=(e,n,i)=>e.removeEventListener(n,i,!1),s="[iframeResizer]";const a=e=>`${s}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(e)}]`,c=(e,n,...i)=>window?.console[e](a(n),...i),d=(e,...n)=>c("info",e,...n),l=(e,...n)=>c("warn",e,...n),u=(e,n)=>window?.console.warn(((e,...n)=>[`${s}[${e}]`,...n])(e,window.chrome?n:n.replaceAll(/\u001B\[[\d;]*m/gi,""))),f=e=>!Number.isNaN(e);var m=e=>{if(!e)return"";let n=-559038744,i=1103547984;for(let t,o=0;o<e.length;o++)t=e.codePointAt(o),n=Math.imul(n^t,2246822519),i=Math.imul(i^t,3266489917);return n^=Math.imul(n^i>>>15,1935289751),i^=Math.imul(i^n>>>15,3405138345),n^=i>>>16,i^=n>>>16,(2097152*(i>>>0)+(n>>>11)).toString(36)},h={};var g=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof h[e.id].onInit&&(u(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),h[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),p={position:null,version:e};function w(e){function t(){c("Height"),c("Width"),k(j),R(),L("onResized",j)}function s(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function a(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function c(e){const n=Number(h[B][`max${e}`]),i=Number(h[B][`min${e}`]),t=e.toLowerCase();let o=j[t];o<i&&(o=i),o>n&&(o=n),j[t]=o}function d(e){return C.slice(C.indexOf(":")+7+e)}const u=(e,n)=>(i,t)=>{const o={};var r,s;r=function(){I(`Send ${e} (${i})`,`${e}:${n()}`,t)},o[s=t]||(r(),o[s]=requestAnimationFrame((()=>{o[s]=null})))},f=(e,n)=>()=>{const i=n=>()=>{h[a]?e(n,a):s()};function t(e,n){n(window,"scroll",i("scroll")),n(window,"resize",i("resize window"))}function s(){t(0,r),c.disconnect(),d.disconnect()}const a=B,c=new ResizeObserver(i("page observed")),d=new ResizeObserver(i("iframe observed"));t(0,o),c.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),d.observe(h[a].iframe,{attributes:!0,childList:!1,subtree:!1}),h[a]&&(h[a][`stop${n}`]=s)},m=e=>()=>{e in h[B]&&(h[B][e](),delete h[B][e])},g=u("pageInfo",(function(){const e=document.body.getBoundingClientRect(),n=j.iframe.getBoundingClientRect(),{scrollY:i,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:s,clientWidth:a}=document.documentElement;return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(s,o||0),clientWidth:Math.max(a,r||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:i,scrollLeft:t,documentHeight:s,documentWidth:a,windowHeight:o,windowWidth:r})})),w=u("parentInfo",(function(){const{iframe:e}=j,{scrollWidth:n,scrollHeight:i}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:c,scale:d}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:n,scrollHeight:i},viewport:{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:c,scale:d}})})),y=f(g,"PageInfo"),x=f(w,"ParentInfo"),H=m("stopPageInfo"),E=m("stopParentInfo");function F(e){const n=e.getBoundingClientRect();return z(),{x:Math.floor(Number(n.left)+Number(p.position.x)),y:Math.floor(Number(n.top)+Number(p.position.y))}}function N(e){const n=e?F(j.iframe):{x:0,y:0};let i=((e,n)=>({x:e.width+n.x,y:e.height+n.y}))(j,n);window.top===window.self?(p.position=i,O()):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):l(B,"Unable to scroll to requested position, window.parentIFrame not found")}function O(){!1!==L("onScroll",p.position)?R():$()}function S(e){let n={};if(0===j.width&&0===j.height){const e=d(9).split(":");n={x:e[1],y:e[0]}}else n={x:j.width,y:j.height};L(e,{iframe:j.iframe,screenX:Number(n.x),screenY:Number(n.y),type:j.type})}const L=(e,n)=>b(B,e,n);let C=e.data,j={},B=null;"[iFrameResizerChild]Ready"!==C?n===`${C}`.slice(0,i)&&C.slice(i).split(":")[0]in h&&(j=function(){const e=C.slice(i).split(":"),n=e[1]?Number(e[1]):0,t=h[e[0]]?.iframe,o=getComputedStyle(t);return{iframe:t,id:e[0],height:n+s(o)+a(o),width:Number(e[2]),type:e[3]}}(),B=j.id,B?(function(e){if(!h[e])throw new Error(`${j.type} No settings for ${e}. Message was: ${C}`)}(B),j.type in{true:1,false:1,undefined:1}||(h[B].loaded=!0,function(){let e=!0;return null===j.iframe&&(l(B,`The iframe (${j.id}) was not found.`),e=!1),e}()&&function(){const{origin:n,sameDomain:i}=e;if(i)return!0;let t=h[B]?.checkOrigin;if(t&&"null"!=`${n}`&&!(t.constructor===Array?function(){let e=0,i=!1;for(;e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){const e=h[B]?.remoteHost;return n===e}()))throw new Error(`Unexpected message received from: ${n} for ${j.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(h[B]?.firstRun&&h[B]&&(h[B].firstRun=!1),j.type){case"close":v(j.iframe);break;case"message":e=d(6),L("onMessage",{iframe:j.iframe,message:JSON.parse(e)});break;case"mouseenter":S("onMouseEnter");break;case"mouseleave":S("onMouseLeave");break;case"autoResize":h[B].autoResize=JSON.parse(d(9));break;case"scrollTo":N(!1);break;case"scrollToOffset":N(!0);break;case"pageInfo":g("start",B),y();break;case"parentInfo":w("start",B),x();break;case"pageInfoStop":H();break;case"parentInfoStop":E();break;case"inPageLink":!function(e){const n=e.split("#")[1]||"",i=decodeURIComponent(n);let t=document.getElementById(i)||document.getElementsByName(i)[0];t?function(){const e=F(t);p.position={x:e.x,y:e.y},O()}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(n)}(d(9));break;case"reset":T(j);break;case"init":t(),function(e){try{h[e].sameDomain=!!h[e]?.iframe?.contentWindow?.iframeChildListener}catch(n){h[e].sameDomain=!1}}(B),W=!0,L("onReady",j.iframe);break;default:if(0===j.width&&0===j.height)return void l(`Unsupported message received (${j.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===j.width||0===j.height)return;if(document.hidden)return;t()}var e}())):l("iframeResizer received messageData without id, message was: ",C)):Object.keys(h).forEach((e=>I("iFrame requested init",M(e),e)))}function b(e,n,i){let t=null,o=null;if(h[e]){if(t=h[e][n],"function"!=typeof t)throw new TypeError(`${n} on iFrame[${e}] is not a function`);o=t(i)}return o}function y(e){const n=e.id;delete h[n]}function v(e){const n=e.id;if(!1!==b(n,"onClose",n)){try{e.parentNode&&e.remove()}catch(e){l(e)}b(n,"onClosed",n),y(e)}}function z(e){null===p.position&&(p.position={x:window.scrollX,y:window.scrollY})}function $(){p.position=null}function R(e){null!==p.position&&(window.scrollTo(p.position.x,p.position.y),$())}function T(e){z(e.id),k(e),I("reset","reset",e.id)}function k(e){const n=e.id;function i(n){const i=`${e[n]}px`;e.iframe.style[n]=i}h[n].sizeHeight&&i("height"),h[n].sizeWidth&&i("width")}function I(e,i,t,o){h[t]&&(h[t]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:o}=h[t];if(h[t].sameDomain)try{return void h[t].iframe.contentWindow.iframeChildListener(n+i)}catch(e){d(t,"Same domain connection failed. Trying cross domain"),h[t].sameDomain=!1}e.postMessage(n+i,o)}():l(t,`[${e}] IFrame(${t}) not found`),o&&h[t]?.warningTimeout&&(h[t].msgTimeout=setTimeout((function(){void 0!==h[t]&&(h[t].loaded||h[t].loadErrorShown||(h[t].loadErrorShown=!0,u(t,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${t}[m) has not responded within ${h[t].warningTimeout/1e3} seconds. Check [1m@iframe-resizer/child[m package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),h[t].warningTimeout)))}function M(e){const n=h[e];return[e,"8",n.sizeWidth,n.log,"32",n.enablePublicMethods,n.autoResize,n.bodyMargin,n.heightCalculationMethod,n.bodyBackground,n.bodyPadding,n.tolerance,n.inPageLinks,"child",n.widthCalculationMethod,n.mouseEvents,n.offsetHeight,n.offsetWidth,n.sizeHeight,m(n.license),p.version].join(":")}let x=0,W=!1;var H=n=>i=>{function r(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&u(s,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const s=function(e){if(e&&"string"!=typeof e)throw new TypeError("Invaild id for iFrame. Expected String");return""!==e&&e||(i.id=e=function(){let e=n?.id||g.id+x++;return null!==document.getElementById(e)&&(e+=x++),e}(),(n||{}).log),e}(i.id);return s in h&&"iFrameResizer"in i?l(s,"Ignored iFrame, already setup."):(d(`v${e}`),u(i.id,"[31;1mAlpha Release[m\n        \nDo not use in production, API is not stable."),function(e){var n;h[s]={iframe:i,firstRun:!0,remoteHost:i?.src.split("/").slice(0,3).join("/"),...g,...r(e)},function(){if("horizontal"===h[s].direction)return h[s].sizeWidth=!0,void(h[s].sizeHeight=!1);if("none"===h[s].direction)return h[s].sizeWidth=!1,h[s].sizeHeight=!1,void(h[s].autoResize=!1);if("vertical"!==h[s].direction)throw new TypeError(s,`Direction value of "${h[s].direction}" is not valid`)}(),null===h[s].postMessageTarget&&(h[s].postMessageTarget=i.contentWindow),h[s].targetOrigin=!0===h[s].checkOrigin?""===(n=h[s].remoteHost)||null!==n.match(/^(about:blank|javascript:|file:\/\/)/)?"*":n:"*"}(n),F(),function(){switch(i.style.overflow=!1===h[s]?.scrolling?"hidden":"auto",h[s]?.scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=h[s]?h[s].scrolling:"no"}}(),function(){function e(e){const n=h[s][e];1/0!==n&&0!==n&&(i.style[e]=f(n)?`${n}px`:n)}function n(e){if(f(`min${e}`)&&f(`max${e}`)&&h[s][`min${e}`]>h[s][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}n("Height"),n("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),function(){const{bodyMargin:e}=h[s];"number"!=typeof e&&"0"!==e||(h[s].bodyMargin=`${e}px`)}(),function(e){const{id:n}=i;o(i,"load",(function(){I("iFrame.onload",`${e}:${W}`,n,!0),function(){const e=h[s]?.firstRun,n=h[s]?.heightCalculationMethod in t;!e&&n&&T({iframe:i,height:0,width:0,type:"init"})}()})),I("init",`${e}:${W}`,n,!0)}(M(s)),function(){if(h[s]){const e={close:v.bind(null,h[s].iframe),disconnect:y.bind(null,h[s].iframe),removeListeners(){u(s,"\n[31;1mDeprecated Method Namem\n\nThe [removeListeners()[m method has been renamed to [disconnect()[m.\n"),this.disconnect()},resize:I.bind(null,"Window resize","resize",s),moveToAnchor(e){I("Move to anchor",`moveToAnchor:${e}`,s)},sendMessage(e){I("Send Message",`message:${e=JSON.stringify(e)}`,s)}};h[s].iframe.iframeResizer=e,h[s].iframe.iFrameResizer=e}}()),i?.iFrameResizer};function E(){!1===document.hidden&&function(e,n){const i=e=>h[e]?.autoResize&&!h[e]?.firstRun;Object.keys(h).forEach((function(t){i(t)&&I(e,n,t)}))}("Tab Visible","resize")}const F=(e=>{let n=!1;return function(){return n?void 0:(n=!0,Reflect.apply(e,this,arguments))}})((()=>{o(window,"message",w),o(document,"visibilitychange",E),window.iframeParentListener=e=>w({data:e,sameDomain:!0})}));switch(!0){case void 0===window.jQuery:l("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:l("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iframeResize:l("","iframeResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){const n=H(e);return this.filter("iframe").each(n).end()},window.jQuery.fn.iFrameResize=function(e){return l("","Deprecated:  Use the iframeResize method instead of iFrameResize"),this.iframeResize(e)}}}();
