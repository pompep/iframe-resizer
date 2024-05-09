/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/jquery 5.0.0-beta.3 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-beta.3",i="[iFrameSizer]",n=i.length,t=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1});var o=e=>{if(!e)return"";let i=-559038744,n=1103547984;for(let t,o=0;o<e.length;o++)t=e.codePointAt(o),i=Math.imul(i^t,2246822519),n=Math.imul(n^t,3266489917);return i^=Math.imul(i^n>>>15,1935289751),n^=Math.imul(n^i>>>15,3405138345),i^=n>>>16,n^=i>>>16,(2097152*(n>>>0)+(i>>>11)).toString(36)};const r=(e,i,n,t)=>e.addEventListener(i,n,t||!1),s=(e,i,n)=>e.removeEventListener(i,n,!1);const a="[iframe-resizer]";const c=e=>`${a}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(e)}]`,d=(e,i,...n)=>window?.console[e](c(i),...n),l=(e,...i)=>d("warn",e,...i),f=(e,i)=>console?.warn((e=>i=>window.chrome?e(i.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(i.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((e=>(...i)=>[`${a}[${e}]`,...i].join(" "))(e))(i));var u={};var m=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof u[e.id].onInit&&(f(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),u[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),h={position:null,version:e};function g(e){function t(){T(N),z(),L("onResized",N)}function o(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function a(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function c(e){return C.slice(C.indexOf(":")+7+e)}const d=(e,i)=>(n,t)=>{const o={};var r,s;r=function(){$(`Send ${e} (${n})`,`${e}:${i()}`,t)},o[s=t]||(r(),o[s]=requestAnimationFrame((()=>{o[s]=null})))},f=(e,i)=>()=>{const n=i=>()=>{u[a]?e(i,a):o()};function t(e,i){i(window,"scroll",n("scroll")),i(window,"resize",n("resize window"))}function o(){t(0,s),c.disconnect(),d.disconnect()}const a=j,c=new ResizeObserver(n("page observed")),d=new ResizeObserver(n("iframe observed"));t(0,r),c.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),d.observe(u[a].iframe,{attributes:!0,childList:!1,subtree:!1}),u[a]&&(u[a][`stop${i}`]=o)},m=e=>()=>{e in u[j]&&(u[j][e](),delete u[j][e])},g=d("pageInfo",(function(){const e=document.body.getBoundingClientRect(),i=N.iframe.getBoundingClientRect(),{scrollY:n,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:s,clientWidth:a}=document.documentElement;return JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(s,o||0),clientWidth:Math.max(a,r||0),offsetTop:parseInt(i.top-e.top,10),offsetLeft:parseInt(i.left-e.left,10),scrollTop:n,scrollLeft:t,documentHeight:s,documentWidth:a,windowHeight:o,windowWidth:r})})),w=d("parentInfo",(function(){const{iframe:e}=N,{scrollWidth:i,scrollHeight:n}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:c,scale:d}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:i,scrollHeight:n},viewport:{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:c,scale:d}})})),I=f(g,"PageInfo"),x=f(w,"ParentInfo"),W=m("stopPageInfo"),F=m("stopParentInfo");function E(e){const i=e.getBoundingClientRect();return y(),{x:Number(i.left)+Number(h.position.x),y:Number(i.top)+Number(h.position.y)}}function O(e){const i=e?E(N.iframe):{x:0,y:0};let n=((e,i)=>({x:e.width+i.x,y:e.height+i.y}))(N,i);window.top===window.self?(h.position=n,H()):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):l(j,"Unable to scroll to requested position, window.parentIFrame not found")}function H(){!1!==L("onScroll",h.position)?z():v()}function S(e){let i={};if(0===N.width&&0===N.height){const e=c(9).split(":");i={x:e[1],y:e[0]}}else i={x:N.width,y:N.height};L(e,{iframe:N.iframe,screenX:Number(i.x),screenY:Number(i.y),type:N.type})}const L=(e,i)=>p(j,e,i);let C=e.data,N={},j=null;"[iFrameResizerChild]Ready"!==C?i===`${C}`.slice(0,n)&&C.slice(n).split(":")[0]in u&&(N=function(){const e=C.slice(n).split(":"),i=e[1]?Number(e[1]):0,t=u[e[0]]?.iframe,r=getComputedStyle(t);return{iframe:t,id:e[0],height:i+o(r)+a(r),width:Number(e[2]),type:e[3]}}(),j=N.id,j?(function(e){if(!u[e])throw new Error(`${N.type} No settings for ${e}. Message was: ${C}`)}(j),N.type in{true:1,false:1,undefined:1}||(u[j].loaded=!0,function(){let e=!0;return null===N.iframe&&(l(j,`The iframe (${N.id}) was not found.`),e=!1),e}()&&function(){const{origin:i,sameDomain:n}=e;if(n)return!0;let t=u[j]?.checkOrigin;if(t&&"null"!=`${i}`&&!(t.constructor===Array?function(){let e=0,n=!1;for(;e<t.length;e++)if(t[e]===i){n=!0;break}return n}():function(){const e=u[j]?.remoteHost;return i===e}()))throw new Error(`Unexpected message received from: ${i} for ${N.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(u[j]?.firstRun&&u[j]&&(u[j].firstRun=!1),N.type){case"close":b(N.iframe);break;case"message":e=c(6),L("onMessage",{iframe:N.iframe,message:JSON.parse(e)});break;case"mouseenter":S("onMouseEnter");break;case"mouseleave":S("onMouseLeave");break;case"autoResize":u[j].autoResize=JSON.parse(c(9));break;case"scrollTo":O(!1);break;case"scrollToOffset":O(!0);break;case"pageInfo":g("start",j),I();break;case"parentInfo":w("start",j),x();break;case"pageInfoStop":W();break;case"parentInfoStop":F();break;case"inPageLink":!function(e){const i=e.split("#")[1]||"",n=decodeURIComponent(i);let t=document.getElementById(n)||document.getElementsByName(n)[0];t?function(){const e=E(t);h.position={x:e.x,y:e.y},H()}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(i)}(c(9));break;case"reset":R(N);break;case"init":t(),function(e){try{u[e].sameDomain=!!u[e]?.iframe?.contentWindow?.iframeChildListener}catch(i){u[e].sameDomain=!1}}(j),M=!0,L("onReady",N.iframe);break;default:if(0===N.width&&0===N.height)return void l(`Unsupported message received (${N.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===N.width||0===N.height)return;if(document.hidden)return;t()}var e}())):l("iframeResizer received messageData without id, message was: ",C)):Object.keys(u).forEach((e=>$("iFrame requested init",k(e),e)))}function p(e,i,n){let t=null,o=null;if(u[e]){if(t=u[e][i],"function"!=typeof t)throw new TypeError(`${i} on iFrame[${e}] is not a function`);o=t(n)}return o}function w(e){const i=e.id;delete u[i]}function b(e){const i=e.id;if(!1!==p(i,"onClose",i)){try{e.parentNode&&e.remove()}catch(e){l(e)}p(i,"onClosed",i),w(e)}}function y(e){null===h.position&&(h.position={x:window.scrollX,y:window.scrollY})}function v(){h.position=null}function z(e){null!==h.position&&(window.scrollTo(h.position.x,h.position.y),v())}function R(e){y(e.id),T(e),$("reset","reset",e.id)}function T(e){const i=e.id;function n(i){const n=`${e[i]}px`;e.iframe.style[i]=n}u[i].sizeHeight&&n("height"),u[i].sizeWidth&&n("width")}function $(e,n,t,o){u[t]&&(u[t]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:o}=u[t];if(u[t].sameDomain)try{return void u[t].iframe.contentWindow.iframeChildListener(i+n)}catch(e){u[t].sameDomain=!1}e.postMessage(i+n,o)}():l(t,`[${e}] IFrame(${t}) not found`),o&&u[t]?.warningTimeout&&(u[t].msgTimeout=setTimeout((function(){void 0!==u[t]&&(u[t].loaded||u[t].loadErrorShown||(u[t].loadErrorShown=!0,f(t,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${t}</>) has not responded within ${u[t].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`)))}),u[t].warningTimeout)))}function k(e){const i=u[e];return[e,"8",i.sizeWidth,i.log,"32",i.enablePublicMethods,i.autoResize,i.bodyMargin,i.heightCalculationMethod,i.bodyBackground,i.bodyPadding,i.tolerance,i.inPageLinks,"child",i.widthCalculationMethod,i.mouseEvents,i.offsetHeight,i.offsetWidth,i.sizeHeight,o(i.license),h.version].join(":")}let I=0,M=!1;var x=i=>n=>{function o(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&f(s,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}const s=function(e){if(e&&"string"!=typeof e)throw new TypeError("Invaild id for iFrame. Expected String");return""!==e&&e||(n.id=e=function(){let e=i?.id||m.id+I++;return null!==document.getElementById(e)&&(e+=I++),e}(),(i||{}).log),e}(n.id);return s in u&&"iFrameResizer"in n?l(s,"Ignored iFrame, already setup."):(W||(W=!0,((e,...i)=>{d("info",e,...i)})(`v${e}`)),function(e){var i,t;u[s]={iframe:n,firstRun:!0,remoteHost:n?.src.split("/").slice(0,3).join("/"),...m,...o(e)},function(){if("horizontal"===u[s].direction)return u[s].sizeWidth=!0,void(u[s].sizeHeight=!1);if("none"===u[s].direction)return u[s].sizeWidth=!1,u[s].sizeHeight=!1,void(u[s].autoResize=!1);if("vertical"!==u[s].direction)throw new TypeError(s,`Direction value of "${u[s].direction}" is not valid`)}(),i=e?.offset,i&&("vertical"===u[s].direction?u[s].offsetHeight=i:u[s].offsetWidth=i),null===u[s].postMessageTarget&&(u[s].postMessageTarget=n.contentWindow),u[s].targetOrigin=!0===u[s].checkOrigin?""===(t=u[s].remoteHost)||null!==t.match(/^(about:blank|javascript:|file:\/\/)/)?"*":t:"*"}(i),E(),function(){switch(n.style.overflow=!1===u[s]?.scrolling?"hidden":"auto",u[s]?.scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=u[s]?u[s].scrolling:"no"}}(),function(){const{bodyMargin:e}=u[s];"number"!=typeof e&&"0"!==e||(u[s].bodyMargin=`${e}px`)}(),function(e){const{id:i}=n;r(n,"load",(function(){$("iFrame.onload",`${e}:${M}`,i,!0),function(){const e=u[s]?.firstRun,i=u[s]?.heightCalculationMethod in t;!e&&i&&R({iframe:n,height:0,width:0,type:"init"})}()})),$("init",`${e}:${M}`,i,!0)}(k(s)),function(){if(u[s]){const e={close:b.bind(null,u[s].iframe),disconnect:w.bind(null,u[s].iframe),removeListeners(){f(s,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:$.bind(null,"Window resize","resize",s),moveToAnchor(e){$("Move to anchor",`moveToAnchor:${e}`,s)},sendMessage(e){$("Send Message",`message:${e=JSON.stringify(e)}`,s)}};u[s].iframe.iframeResizer=e,u[s].iframe.iFrameResizer=e}}()),n?.iFrameResizer};let W=!1;function F(){!1===document.hidden&&function(e,i){const n=e=>u[e]?.autoResize&&!u[e]?.firstRun;Object.keys(u).forEach((function(t){n(t)&&$(e,i,t)}))}("Tab Visible","resize")}const E=(e=>{let i=!1;return function(){return i?void 0:(i=!0,Reflect.apply(e,this,arguments))}})((()=>{r(window,"message",g),r(document,"visibilitychange",F),window.iframeParentListener=e=>g({data:e,sameDomain:!0})}));switch(!0){case void 0===window.jQuery:l("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:l("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iframeResize:l("","iframeResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){const i=x(e);return this.filter("iframe").each(i).end()},window.jQuery.fn.iFrameResize=function(e){return l("","Deprecated:  Use the iframeResize method instead of iFrameResize"),this.iframeResize(e)}}}();
