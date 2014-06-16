/**! 
 * Prototipe Core
 *
 */
(function(){if(!String.prototype.endsWith){String.prototype.endsWith=function(b){return this.indexOf(b,this.length-b.length)!==-1}}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b,d){var c,e,f;if(this===void 0||this===null){throw new TypeError('"this" is null or not defined')}e=this.length>>>0;d=+d||0;if(Math.abs(d)===Infinity){d=0}if(d<0){d+=e;if(d<0){d=0}}for(c=f=d;d<=e?f<e:f>e;c=d<=e?++f:--f){if(this[c]===b){return c}}return-1}}if(!Function.prototype.bind){Function.prototype.bind=function(b){var f,e,c,d;if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}f=Array.prototype.slice.call(arguments,1);d=this;c=function(){};e=function(){return d.apply((this instanceof c&&b?this:b),f.concat(Array.prototype.slice.call(arguments)))};c.prototype=this.prototype;e.prototype=new c();return e}}if(!Object.keys){Object.keys=(function(){var b,d,c;c=Object.prototype.hasOwnProperty;d={toString:null}.propertyIsEnumerable("toString")?false:true;b=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];return function(k){var f,l,e,j,i,h,g;if(typeof k!=="object"&&(typeof k!=="function"||k===null)){throw new TypeError("Object.keys called on non-object")}e=[];for(j=0,h=k.length;j<h;j++){l=k[j];if(c.call(k,l)){e.push(l)}}if(d){for(i=0,g=b.length;i<g;i++){f=b[i];if(c.call(k,f)){e.push(f)}}}return e}}).call(this)}window.getScreenSize=function(c,b){if(c.is(":visible")){return"small"}else{if(b.is(":visible")){return"tablet"}else{return"desktop"}}}}).call(this);

/**!
 * Maybe this for mobile / layouting
 */
(function(){var c,b;b={is_mobile:false,resize_delay:400,stored_values_prefix:"pa_",main_menu:{accordion:true,animation_speed:250,store_state:true,store_state_key:"mmstate"},consts:{COLORS:["#71c73e","#77b7c5","#d54848","#6c42e5","#e8e64e","#dd56e6","#ecad3f","#618b9d","#b68b68","#36a766","#3156be","#00b3ff","#646464","#a946e8","#9d9d9d"]}};c=function(){this.init=[];this.plugins={};this.settings={};this.localStorageSupported=typeof window.Storage!=="undefined"?true:false;return this};c.prototype.start=function(e,d){if(e==null){e=[]}if(d==null){d={}}window.onload=(function(f){return function(){var j,i,g,h;$("html").addClass("pxajs");if(e.length>0){$.merge(f.init,e)}f.settings=$.extend(true,{},b,d||{});f.settings.is_mobile=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase());if(f.settings.is_mobile){if(FastClick){FastClick.attach(document.body)}}h=f.init;for(i=0,g=h.length;i<g;i++){j=h[i];$.proxy(j,f)()}$(window).trigger("pa.loaded");return $(window).resize()}})(this);return this};c.prototype.addInitializer=function(d){return this.init.push(d)};c.prototype.initPlugin=function(d,e){this.plugins[d]=e;if(e.init){return e.init()}};c.prototype.storeValue=function(f,g,d){var h;if(d==null){d=false}if(this.localStorageSupported&&!d){try{window.localStorage.setItem(this.settings.stored_values_prefix+f,g);return}catch(i){h=i;1}}return document.cookie=this.settings.stored_values_prefix+f+"="+escape(g)};c.prototype.storeValues=function(i,d){var j,g,h,f;if(d==null){d=false}if(this.localStorageSupported&&!d){try{for(g in i){h=i[g];window.localStorage.setItem(this.settings.stored_values_prefix+g,h)}return}catch(k){j=k;1}}f=[];for(g in i){h=i[g];f.push(document.cookie=this.settings.stored_values_prefix+g+"="+escape(h))}return f};c.prototype.getStoredValue=function(s,g,j){var f,u,l,h,m,d,q,i,n;if(g==null){g=false}if(j==null){j=null}if(this.localStorageSupported&&!g){try{d=window.localStorage.getItem(this.settings.stored_values_prefix+s);return(d?d:j)}catch(o){l=o;1}}u=document.cookie.split(";");for(i=0,n=u.length;i<n;i++){f=u[i];m=f.indexOf("=");h=f.substr(0,m).replace(/^\s+|\s+$/g,"");q=f.substr(m+1).replace(/^\s+|\s+$/g,"");if(h===(this.settings.stored_values_prefix+s)){return q}}return j};c.prototype.getStoredValues=function(q,h,n){var x,i,w,u,B,l,s,m,o,g,f,d,y,A,z;if(h==null){h=false}if(n==null){n=null}m={};for(g=0,y=q.length;g<y;g++){B=q[g];m[B]=n}if(this.localStorageSupported&&!h){try{for(f=0,A=q.length;f<A;f++){B=q[f];s=window.localStorage.getItem(this.settings.stored_values_prefix+B);if(s){m[B]=s}}return m}catch(j){w=j;1}}i=document.cookie.split(";");for(d=0,z=i.length;d<z;d++){x=i[d];l=x.indexOf("=");u=x.substr(0,l).replace(/^\s+|\s+$/g,"");o=x.substr(l+1).replace(/^\s+|\s+$/g,"");if(u===(this.settings.stored_values_prefix+B)){m[B]=o}}return m};c.Constructor=c;window.Winkel=new c}).call(this);

/**!
 * Screen Layout
 */
(function(){var b;b=function(d){var c;c=null;return function(){if(c){clearTimeout(c)}return c=setTimeout(function(){c=null;return d.call(this)},Winkel.settings.resize_delay)}};Winkel.addInitializer(function(){var d,c,e,f;f=null;e=$(window);d=$('<div id="small-screen-width-point" style="position:absolute;top:-10000px;width:10px;height:10px;background:#fff;"></div>');c=$('<div id="tablet-screen-width-point" style="position:absolute;top:-10000px;width:10px;height:10px;background:#fff;"></div>');$("body").append(d).append(c);return e.on("resize",b(function(){e.trigger("pa.resize");if(d.is(":visible")){if(f!=="small"){e.trigger("pa.screen.small")}return f="small"}else{if(c.is(":visible")){if(f!=="tablet"){e.trigger("pa.screen.tablet")}return f="tablet"}else{if(f!=="desktop"){e.trigger("pa.screen.desktop")}return f="desktop"}}}))})}).call(this);

/**!
 * Fastclick
 */
function FastClick(c){var d,b=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=c;if(!c||!c.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(b,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(b,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(b,arguments)};this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(b,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(b,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(b,arguments)};if(FastClick.notNeeded(c)){return}if(this.deviceIsAndroid){c.addEventListener("mouseover",this.onMouse,true);c.addEventListener("mousedown",this.onMouse,true);c.addEventListener("mouseup",this.onMouse,true)}c.addEventListener("click",this.onClick,true);c.addEventListener("touchstart",this.onTouchStart,false);c.addEventListener("touchmove",this.onTouchMove,false);c.addEventListener("touchend",this.onTouchEnd,false);c.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){c.removeEventListener=function(f,h,e){var g=Node.prototype.removeEventListener;if(f==="click"){g.call(c,f,h.hijacked||h,e)}else{g.call(c,f,h,e)}};c.addEventListener=function(g,h,f){var e=Node.prototype.addEventListener;if(g==="click"){e.call(c,g,h.hijacked||(h.hijacked=function(i){if(!i.propagationStopped){h(i)}}),f)}else{e.call(c,g,h,f)}}}if(typeof c.onclick==="function"){d=c.onclick;c.addEventListener("click",function(e){d(e)},false);c.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&(/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);FastClick.prototype.needsClick=function(b){switch(b.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(b.disabled){return true}break;case"input":if((this.deviceIsIOS&&b.type==="file")||b.disabled){return true}break;case"label":case"video":return true}return(/\bneedsclick\b/).test(b.className)};FastClick.prototype.needsFocus=function(b){switch(b.nodeName.toLowerCase()){case"textarea":return true;case"select":return!this.deviceIsAndroid;case"input":switch(b.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!b.disabled&&!b.readOnly;default:return(/\bneedsfocus\b/).test(b.className)}};FastClick.prototype.sendClick=function(c,d){var b,e;if(document.activeElement&&document.activeElement!==c){document.activeElement.blur()}e=d.changedTouches[0];b=document.createEvent("MouseEvents");b.initMouseEvent(this.determineEventType(c),true,true,window,1,e.screenX,e.screenY,e.clientX,e.clientY,false,false,false,false,0,null);b.forwardedTouchEvent=true;c.dispatchEvent(b)};FastClick.prototype.determineEventType=function(b){if(this.deviceIsAndroid&&b.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(b){var c;if(this.deviceIsIOS&&b.setSelectionRange&&b.type.indexOf("date")!==0&&b.type!=="time"){c=b.value.length;b.setSelectionRange(c,c)}else{b.focus()}};FastClick.prototype.updateScrollParent=function(c){var d,b;d=c.fastClickScrollParent;if(!d||!d.contains(c)){b=c;do{if(b.scrollHeight>b.offsetHeight){d=b;c.fastClickScrollParent=b;break}b=b.parentElement}while(b)}if(d){d.fastClickLastScrollTop=d.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(b){if(b.nodeType===Node.TEXT_NODE){return b.parentNode}return b};FastClick.prototype.onTouchStart=function(d){var b,e,c;if(d.targetTouches.length>1){return true}b=this.getTargetElementFromEventTarget(d.target);e=d.targetTouches[0];if(this.deviceIsIOS){c=window.getSelection();if(c.rangeCount&&!c.isCollapsed){return true}if(!this.deviceIsIOS4){if(e.identifier===this.lastTouchIdentifier){d.preventDefault();return false}this.lastTouchIdentifier=e.identifier;this.updateScrollParent(b)}}this.trackingClick=true;this.trackingClickStart=d.timeStamp;this.targetElement=b;this.touchStartX=e.pageX;this.touchStartY=e.pageY;if((d.timeStamp-this.lastClickTime)<200){d.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(b){var d=b.changedTouches[0],c=this.touchBoundary;if(Math.abs(d.pageX-this.touchStartX)>c||Math.abs(d.pageY-this.touchStartY)>c){return true}return false};FastClick.prototype.onTouchMove=function(b){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(b.target)||this.touchHasMoved(b)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(b){if(b.control!==undefined){return b.control}if(b.htmlFor){return document.getElementById(b.htmlFor)}return b.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(d){var f,e,c,h,g,b=this.targetElement;if(!this.trackingClick){return true}if((d.timeStamp-this.lastClickTime)<200){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=d.timeStamp;e=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){g=d.changedTouches[0];b=document.elementFromPoint(g.pageX-window.pageXOffset,g.pageY-window.pageYOffset)||b;b.fastClickScrollParent=this.targetElement.fastClickScrollParent}c=b.tagName.toLowerCase();if(c==="label"){f=this.findControl(b);if(f){this.focus(b);if(this.deviceIsAndroid){return false}b=f}}else{if(this.needsFocus(b)){if((d.timeStamp-e)>100||(this.deviceIsIOS&&window.top!==window&&c==="input")){this.targetElement=null;return false}this.focus(b);if(!this.deviceIsIOS4||c!=="select"){this.targetElement=null;d.preventDefault()}return false}}if(this.deviceIsIOS&&!this.deviceIsIOS4){h=b.fastClickScrollParent;if(h&&h.fastClickLastScrollTop!==h.scrollTop){return true}}if(!this.needsClick(b)){d.preventDefault();this.sendClick(b,d)}return false};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(b){if(!this.targetElement){return true}if(b.forwardedTouchEvent){return true}if(!b.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(b.stopImmediatePropagation){b.stopImmediatePropagation()}else{b.propagationStopped=true}b.stopPropagation();b.preventDefault();return false}return true};FastClick.prototype.onClick=function(b){var c;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(b.target.type==="submit"&&b.detail===0){return true}c=this.onMouse(b);if(!c){this.targetElement=null}return c};FastClick.prototype.destroy=function(){var b=this.layer;if(this.deviceIsAndroid){b.removeEventListener("mouseover",this.onMouse,true);b.removeEventListener("mousedown",this.onMouse,true);b.removeEventListener("mouseup",this.onMouse,true)}b.removeEventListener("click",this.onClick,true);b.removeEventListener("touchstart",this.onTouchStart,false);b.removeEventListener("touchmove",this.onTouchMove,false);b.removeEventListener("touchend",this.onTouchEnd,false);b.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(c){var b;var d;if(typeof window.ontouchstart==="undefined"){return true}d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(d){if(FastClick.prototype.deviceIsAndroid){b=document.querySelector("meta[name=viewport]");if(b){if(b.content.indexOf("user-scalable=no")!==-1){return true}if(d>31&&window.innerWidth<=window.screen.width){return true}}}else{return true}}if(c.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(b){return new FastClick(b)};if(typeof define!=="undefined"&&define.amd){define(function(){return FastClick})}else{if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}}

/*! 
 * iScroll v5.1.1 ~ 
 * (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license 
 */
(function(g,b,f){var i=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||g.msRequestAnimationFrame||function(j){g.setTimeout(j,1000/60)};var d=(function(){var n={};var o=b.createElement("div").style;var l=(function(){var u=["t","webkitT","MozT","msT","OT"],r,s=0,q=u.length;for(;s<q;s++){r=u[s]+"ransform";if(r in o){return u[s].substr(0,u[s].length-1)}}return false})();function m(q){if(l===false){return false}if(l===""){return q}return l+q.charAt(0).toUpperCase()+q.substr(1)}n.getTime=Date.now||function j(){return new Date().getTime()};n.extend=function(s,r){for(var q in r){s[q]=r[q]}};n.addEvent=function(u,s,r,q){u.addEventListener(s,r,!!q)};n.removeEvent=function(u,s,r,q){u.removeEventListener(s,r,!!q)};n.momentum=function(x,s,u,q,y,z){var r=x-s,v=f.abs(r)/u,A,w;z=z===undefined?0.0006:z;A=x+(v*v)/(2*z)*(r<0?-1:1);w=v/z;if(A<q){A=y?q-(y/2.5*(v/8)):q;r=f.abs(A-x);w=r/v}else{if(A>0){A=y?y/2.5*(v/8):0;r=f.abs(x)+A;w=r/v}}return{destination:f.round(A),duration:w}};var k=m("transform");n.extend(n,{hasTransform:k!==false,hasPerspective:m("perspective")in o,hasTouch:"ontouchstart"in g,hasPointer:navigator.msPointerEnabled,hasTransition:m("transition")in o});n.isBadAndroid=/Android /.test(g.navigator.appVersion)&&!(/Chrome\/\d/.test(g.navigator.appVersion));n.extend(n.style={},{transform:k,transitionTimingFunction:m("transitionTimingFunction"),transitionDuration:m("transitionDuration"),transitionDelay:m("transitionDelay"),transformOrigin:m("transformOrigin")});n.hasClass=function(r,s){var q=new RegExp("(^|\\s)"+s+"(\\s|$)");return q.test(r.className)};n.addClass=function(r,s){if(n.hasClass(r,s)){return}var q=r.className.split(" ");q.push(s);r.className=q.join(" ")};n.removeClass=function(r,s){if(!n.hasClass(r,s)){return}var q=new RegExp("(^|\\s)"+s+"(\\s|$)","g");r.className=r.className.replace(q," ")};n.offset=function(q){var s=-q.offsetLeft,r=-q.offsetTop;while(q=q.offsetParent){s-=q.offsetLeft;r-=q.offsetTop}return{left:s,top:r}};n.preventDefaultException=function(s,r){for(var q in r){if(r[q].test(s[q])){return true}}return false};n.extend(n.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});n.extend(n.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(q){return q*(2-q)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(q){return f.sqrt(1-(--q*q))}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(r){var q=4;return(r=r-1)*r*((q+1)*r+q)+1}},bounce:{style:"",fn:function(q){if((q/=1)<(1/2.75)){return 7.5625*q*q}else{if(q<(2/2.75)){return 7.5625*(q-=(1.5/2.75))*q+0.75}else{if(q<(2.5/2.75)){return 7.5625*(q-=(2.25/2.75))*q+0.9375}else{return 7.5625*(q-=(2.625/2.75))*q+0.984375}}}}},elastic:{style:"",fn:function(q){var r=0.22,s=0.4;if(q===0){return 0}if(q==1){return 1}return(s*f.pow(2,-10*q)*f.sin((q-r/4)*(2*f.PI)/r)+1)}}});n.tap=function(s,q){var r=b.createEvent("Event");r.initEvent(q,true,true);r.pageX=s.pageX;r.pageY=s.pageY;s.target.dispatchEvent(r)};n.click=function(s){var r=s.target,q;if(!(/(SELECT|INPUT|TEXTAREA)/i).test(r.tagName)){q=b.createEvent("MouseEvents");q.initMouseEvent("click",true,true,s.view,1,r.screenX,r.screenY,r.clientX,r.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,0,null);q._constructed=true;r.dispatchEvent(q)}};return n})();function h(l,j){this.wrapper=typeof l=="string"?b.querySelector(l):l;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={resizeScrollbars:true,mouseWheelSpeed:20,snapThreshold:0.334,startX:0,startY:0,scrollY:true,directionLockThreshold:5,momentum:true,bounce:true,bounceTime:600,bounceEasing:"",preventDefault:true,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:true,useTransition:true,useTransform:true};for(var k in j){this.options[k]=j[k]}this.translateZ=this.options.HWCompositing&&d.hasPerspective?" translateZ(0)":"";this.options.useTransition=d.hasTransition&&this.options.useTransition;this.options.useTransform=d.hasTransform&&this.options.useTransform;this.options.eventPassthrough=this.options.eventPassthrough===true?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY=this.options.eventPassthrough=="vertical"?false:this.options.scrollY;this.options.scrollX=this.options.eventPassthrough=="horizontal"?false:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing=typeof this.options.bounceEasing=="string"?d.ease[this.options.bounceEasing]||d.ease.circular:this.options.bounceEasing;this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling;if(this.options.tap===true){this.options.tap="tap"}if(this.options.shrinkScrollbars=="scale"){this.options.useTransition=false}this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;this.x=0;this.y=0;this.directionX=0;this.directionY=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}h.prototype={version:"5.1.1",_init:function(){this._initEvents();if(this.options.scrollbars||this.options.indicators){this._initIndicators()}if(this.options.mouseWheel){this._initWheel()}if(this.options.snap){this._initSnap()}if(this.options.keyBindings){this._initKeys()}},destroy:function(){this._initEvents(true);this._execEvent("destroy")},_transitionEnd:function(j){if(j.target!=this.scroller||!this.isInTransition){return}this._transitionTime();if(!this.resetPosition(this.options.bounceTime)){this.isInTransition=false;this._execEvent("scrollEnd")}},_start:function(k){if(d.eventType[k.type]!=1){if(k.button!==0){return}}if(!this.enabled||(this.initiated&&d.eventType[k.type]!==this.initiated)){return}if(this.options.preventDefault&&!d.isBadAndroid&&!d.preventDefaultException(k.target,this.options.preventDefaultException)){k.preventDefault()}var j=k.touches?k.touches[0]:k,l;this.initiated=d.eventType[k.type];this.moved=false;this.distX=0;this.distY=0;this.directionX=0;this.directionY=0;this.directionLocked=0;this._transitionTime();this.startTime=d.getTime();if(this.options.useTransition&&this.isInTransition){this.isInTransition=false;l=this.getComputedPosition();this._translate(f.round(l.x),f.round(l.y));this._execEvent("scrollEnd")}else{if(!this.options.useTransition&&this.isAnimating){this.isAnimating=false;this._execEvent("scrollEnd")}}this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=j.pageX;this.pointY=j.pageY;this._execEvent("beforeScrollStart")},_move:function(o){if(!this.enabled||d.eventType[o.type]!==this.initiated){return}if(this.options.preventDefault){o.preventDefault()}var r=o.touches?o.touches[0]:o,l=r.pageX-this.pointX,k=r.pageY-this.pointY,q=d.getTime(),j,s,n,m;this.pointX=r.pageX;this.pointY=r.pageY;this.distX+=l;this.distY+=k;n=f.abs(this.distX);m=f.abs(this.distY);if(q-this.endTime>300&&(n<10&&m<10)){return}if(!this.directionLocked&&!this.options.freeScroll){if(n>m+this.options.directionLockThreshold){this.directionLocked="h"}else{if(m>=n+this.options.directionLockThreshold){this.directionLocked="v"}else{this.directionLocked="n"}}}if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical"){o.preventDefault()}else{if(this.options.eventPassthrough=="horizontal"){this.initiated=false;return}}k=0}else{if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal"){o.preventDefault()}else{if(this.options.eventPassthrough=="vertical"){this.initiated=false;return}}l=0}}l=this.hasHorizontalScroll?l:0;k=this.hasVerticalScroll?k:0;j=this.x+l;s=this.y+k;if(j>0||j<this.maxScrollX){j=this.options.bounce?this.x+l/3:j>0?0:this.maxScrollX}if(s>0||s<this.maxScrollY){s=this.options.bounce?this.y+k/3:s>0?0:this.maxScrollY}this.directionX=l>0?-1:l<0?1:0;this.directionY=k>0?-1:k<0?1:0;if(!this.moved){this._execEvent("scrollStart")}this.moved=true;this._translate(j,s);if(q-this.startTime>300){this.startTime=q;this.startX=this.x;this.startY=this.y}},_end:function(q){if(!this.enabled||d.eventType[q.type]!==this.initiated){return}if(this.options.preventDefault&&!d.preventDefaultException(q.target,this.options.preventDefaultException)){q.preventDefault()}var s=q.changedTouches?q.changedTouches[0]:q,l,k,o=d.getTime()-this.startTime,j=f.round(this.x),w=f.round(this.y),v=f.abs(j-this.startX),u=f.abs(w-this.startY),m=0,r="";this.isInTransition=0;this.initiated=0;this.endTime=d.getTime();if(this.resetPosition(this.options.bounceTime)){return}this.scrollTo(j,w);if(!this.moved){if(this.options.tap){d.tap(q,this.options.tap)}if(this.options.click){d.click(q)}this._execEvent("scrollCancel");return}if(this._events.flick&&o<200&&v<100&&u<100){this._execEvent("flick");return}if(this.options.momentum&&o<300){l=this.hasHorizontalScroll?d.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:j,duration:0};k=this.hasVerticalScroll?d.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:w,duration:0};j=l.destination;w=k.destination;m=f.max(l.duration,k.duration);this.isInTransition=1}if(this.options.snap){var n=this._nearestSnap(j,w);this.currentPage=n;m=this.options.snapSpeed||f.max(f.max(f.min(f.abs(j-n.x),1000),f.min(f.abs(w-n.y),1000)),300);j=n.x;w=n.y;this.directionX=0;this.directionY=0;r=this.options.bounceEasing}if(j!=this.x||w!=this.y){if(j>0||j<this.maxScrollX||w>0||w<this.maxScrollY){r=d.ease.quadratic}this.scrollTo(j,w,m,r);return}this._execEvent("scrollEnd")},_resize:function(){var j=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){j.refresh()},this.options.resizePolling)},resetPosition:function(k){var j=this.x,l=this.y;k=k||0;if(!this.hasHorizontalScroll||this.x>0){j=0}else{if(this.x<this.maxScrollX){j=this.maxScrollX}}if(!this.hasVerticalScroll||this.y>0){l=0}else{if(this.y<this.maxScrollY){l=this.maxScrollY}}if(j==this.x&&l==this.y){return false}this.scrollTo(j,l,k,this.options.bounceEasing);return true},disable:function(){this.enabled=false},enable:function(){this.enabled=true},refresh:function(){var j=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0;this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0;if(!this.hasHorizontalScroll){this.maxScrollX=0;this.scrollerWidth=this.wrapperWidth}if(!this.hasVerticalScroll){this.maxScrollY=0;this.scrollerHeight=this.wrapperHeight}this.endTime=0;this.directionX=0;this.directionY=0;this.wrapperOffset=d.offset(this.wrapper);this._execEvent("refresh");this.resetPosition()},on:function(k,j){if(!this._events[k]){this._events[k]=[]}this._events[k].push(j)},off:function(l,k){if(!this._events[l]){return}var j=this._events[l].indexOf(k);if(j>-1){this._events[l].splice(j,1)}},_execEvent:function(m){if(!this._events[m]){return}var k=0,j=this._events[m].length;if(!j){return}for(;k<j;k++){this._events[m][k].apply(this,[].slice.call(arguments,1))}},scrollBy:function(j,m,k,l){j=this.x+j;m=this.y+m;k=k||0;this.scrollTo(j,m,k,l)},scrollTo:function(j,m,k,l){l=l||d.ease.circular;this.isInTransition=this.options.useTransition&&k>0;if(!k||(this.options.useTransition&&l.style)){this._transitionTimingFunction(l.style);this._transitionTime(k);this._translate(j,m)}else{this._animate(j,m,k,l.fn)}},scrollToElement:function(k,l,j,o,n){k=k.nodeType?k:this.scroller.querySelector(k);if(!k){return}var m=d.offset(k);m.left-=this.wrapperOffset.left;m.top-=this.wrapperOffset.top;if(j===true){j=f.round(k.offsetWidth/2-this.wrapper.offsetWidth/2)}if(o===true){o=f.round(k.offsetHeight/2-this.wrapper.offsetHeight/2)}m.left-=j||0;m.top-=o||0;m.left=m.left>0?0:m.left<this.maxScrollX?this.maxScrollX:m.left;m.top=m.top>0?0:m.top<this.maxScrollY?this.maxScrollY:m.top;l=l===undefined||l===null||l==="auto"?f.max(f.abs(this.x-m.left),f.abs(this.y-m.top)):l;this.scrollTo(m.left,m.top,l,n)},_transitionTime:function(k){k=k||0;this.scrollerStyle[d.style.transitionDuration]=k+"ms";if(!k&&d.isBadAndroid){this.scrollerStyle[d.style.transitionDuration]="0.001s"}if(this.indicators){for(var j=this.indicators.length;j--;){this.indicators[j].transitionTime(k)}}},_transitionTimingFunction:function(k){this.scrollerStyle[d.style.transitionTimingFunction]=k;if(this.indicators){for(var j=this.indicators.length;j--;){this.indicators[j].transitionTimingFunction(k)}}},_translate:function(j,l){if(this.options.useTransform){this.scrollerStyle[d.style.transform]="translate("+j+"px,"+l+"px)"+this.translateZ}else{j=f.round(j);l=f.round(l);this.scrollerStyle.left=j+"px";this.scrollerStyle.top=l+"px"}this.x=j;this.y=l;if(this.indicators){for(var k=this.indicators.length;k--;){this.indicators[k].updatePosition()}}},_initEvents:function(j){var k=j?d.removeEvent:d.addEvent,l=this.options.bindToWrapper?this.wrapper:g;k(g,"orientationchange",this);k(g,"resize",this);if(this.options.click){k(this.wrapper,"click",this,true)}if(!this.options.disableMouse){k(this.wrapper,"mousedown",this);k(l,"mousemove",this);k(l,"mousecancel",this);k(l,"mouseup",this)}if(d.hasPointer&&!this.options.disablePointer){k(this.wrapper,"MSPointerDown",this);k(l,"MSPointerMove",this);k(l,"MSPointerCancel",this);k(l,"MSPointerUp",this)}if(d.hasTouch&&!this.options.disableTouch){k(this.wrapper,"touchstart",this);k(l,"touchmove",this);k(l,"touchcancel",this);k(l,"touchend",this)}k(this.scroller,"transitionend",this);k(this.scroller,"webkitTransitionEnd",this);k(this.scroller,"oTransitionEnd",this);k(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var k=g.getComputedStyle(this.scroller,null),j,l;if(this.options.useTransform){k=k[d.style.transform].split(")")[0].split(", ");j=+(k[12]||k[4]);l=+(k[13]||k[5])}else{j=+k.left.replace(/[^-\d.]/g,"");l=+k.top.replace(/[^-\d.]/g,"")}return{x:j,y:l}},_initIndicators:function(){var l=this.options.interactiveScrollbars,n=typeof this.options.scrollbars!="string",q=[],k;var o=this;this.indicators=[];if(this.options.scrollbars){if(this.options.scrollY){k={el:e("v",l,this.options.scrollbars),interactive:l,defaultScrollbars:true,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:false};this.wrapper.appendChild(k.el);q.push(k)}if(this.options.scrollX){k={el:e("h",l,this.options.scrollbars),interactive:l,defaultScrollbars:true,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:false};this.wrapper.appendChild(k.el);q.push(k)}}if(this.options.indicators){q=q.concat(this.options.indicators)}for(var m=q.length;m--;){this.indicators.push(new c(this,q[m]))}function j(s){for(var r=o.indicators.length;r--;){s.call(o.indicators[r])}}if(this.options.fadeScrollbars){this.on("scrollEnd",function(){j(function(){this.fade()})});this.on("scrollCancel",function(){j(function(){this.fade()})});this.on("scrollStart",function(){j(function(){this.fade(1)})});this.on("beforeScrollStart",function(){j(function(){this.fade(1,true)})})}this.on("refresh",function(){j(function(){this.refresh()})});this.on("destroy",function(){j(function(){this.destroy()});delete this.indicators})},_initWheel:function(){d.addEvent(this.wrapper,"wheel",this);d.addEvent(this.wrapper,"mousewheel",this);d.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){d.removeEvent(this.wrapper,"wheel",this);d.removeEvent(this.wrapper,"mousewheel",this);d.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(n){if(!this.enabled){return}n.preventDefault();n.stopPropagation();var l,k,o,m,j=this;if(this.wheelTimeout===undefined){j._execEvent("scrollStart")}clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){j._execEvent("scrollEnd");j.wheelTimeout=undefined},400);if("deltaX"in n){l=-n.deltaX;k=-n.deltaY}else{if("wheelDeltaX"in n){l=n.wheelDeltaX/120*this.options.mouseWheelSpeed;k=n.wheelDeltaY/120*this.options.mouseWheelSpeed}else{if("wheelDelta"in n){l=k=n.wheelDelta/120*this.options.mouseWheelSpeed}else{if("detail"in n){l=k=-n.detail/3*this.options.mouseWheelSpeed}else{return}}}}l*=this.options.invertWheelDirection;k*=this.options.invertWheelDirection;if(!this.hasVerticalScroll){l=k;k=0}if(this.options.snap){o=this.currentPage.pageX;m=this.currentPage.pageY;if(l>0){o--}else{if(l<0){o++}}if(k>0){m--}else{if(k<0){m++}}this.goToPage(o,m);return}o=this.x+f.round(this.hasHorizontalScroll?l:0);m=this.y+f.round(this.hasVerticalScroll?k:0);if(o>0){o=0}else{if(o<this.maxScrollX){o=this.maxScrollX}}if(m>0){m=0}else{if(m<this.maxScrollY){m=this.maxScrollY}}this.scrollTo(o,m,0)},_initSnap:function(){this.currentPage={};if(typeof this.options.snap=="string"){this.options.snap=this.scroller.querySelectorAll(this.options.snap)}this.on("refresh",function(){var u=0,r,o=0,k,s,q,w=0,v,A=this.options.snapStepX||this.wrapperWidth,z=this.options.snapStepY||this.wrapperHeight,j;this.pages=[];if(!this.wrapperWidth||!this.wrapperHeight||!this.scrollerWidth||!this.scrollerHeight){return}if(this.options.snap===true){s=f.round(A/2);q=f.round(z/2);while(w>-this.scrollerWidth){this.pages[u]=[];r=0;v=0;while(v>-this.scrollerHeight){this.pages[u][r]={x:f.max(w,this.maxScrollX),y:f.max(v,this.maxScrollY),width:A,height:z,cx:w-s,cy:v-q};v-=z;r++}w-=A;u++}}else{j=this.options.snap;r=j.length;k=-1;for(;u<r;u++){if(u===0||j[u].offsetLeft<=j[u-1].offsetLeft){o=0;k++}if(!this.pages[o]){this.pages[o]=[]}w=f.max(-j[u].offsetLeft,this.maxScrollX);v=f.max(-j[u].offsetTop,this.maxScrollY);s=w-f.round(j[u].offsetWidth/2);q=v-f.round(j[u].offsetHeight/2);this.pages[o][k]={x:w,y:v,width:j[u].offsetWidth,height:j[u].offsetHeight,cx:s,cy:q};if(w>this.maxScrollX){o++}}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);if(this.options.snapThreshold%1===0){this.snapThresholdX=this.options.snapThreshold;this.snapThresholdY=this.options.snapThreshold}else{this.snapThresholdX=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold);this.snapThresholdY=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold)}});this.on("flick",function(){var j=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.x-this.startX),1000),f.min(f.abs(this.y-this.startY),1000)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,j)})},_nearestSnap:function(k,q){if(!this.pages.length){return{x:0,y:0,pageX:0,pageY:0}}var o=0,n=this.pages.length,j=0;if(f.abs(k-this.absStartX)<this.snapThresholdX&&f.abs(q-this.absStartY)<this.snapThresholdY){return this.currentPage}if(k>0){k=0}else{if(k<this.maxScrollX){k=this.maxScrollX}}if(q>0){q=0}else{if(q<this.maxScrollY){q=this.maxScrollY}}for(;o<n;o++){if(k>=this.pages[o][0].cx){k=this.pages[o][0].x;break}}n=this.pages[o].length;for(;j<n;j++){if(q>=this.pages[0][j].cy){q=this.pages[0][j].y;break}}if(o==this.currentPage.pageX){o+=this.directionX;if(o<0){o=0}else{if(o>=this.pages.length){o=this.pages.length-1}}k=this.pages[o][0].x}if(j==this.currentPage.pageY){j+=this.directionY;if(j<0){j=0}else{if(j>=this.pages[0].length){j=this.pages[0].length-1}}q=this.pages[0][j].y}return{x:k,y:q,pageX:o,pageY:j}},goToPage:function(j,o,k,n){n=n||this.options.bounceEasing;if(j>=this.pages.length){j=this.pages.length-1}else{if(j<0){j=0}}if(o>=this.pages[j].length){o=this.pages[j].length-1}else{if(o<0){o=0}}var m=this.pages[j][o].x,l=this.pages[j][o].y;k=k===undefined?this.options.snapSpeed||f.max(f.max(f.min(f.abs(m-this.x),1000),f.min(f.abs(l-this.y),1000)),300):k;this.currentPage={x:m,y:l,pageX:j,pageY:o};this.scrollTo(m,l,k,n)},next:function(k,m){var j=this.currentPage.pageX,l=this.currentPage.pageY;j++;if(j>=this.pages.length&&this.hasVerticalScroll){j=0;l++}this.goToPage(j,l,k,m)},prev:function(k,m){var j=this.currentPage.pageX,l=this.currentPage.pageY;j--;if(j<0&&this.hasVerticalScroll){j=0;l--}this.goToPage(j,l,k,m)},_initKeys:function(l){var k={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var j;if(typeof this.options.keyBindings=="object"){for(j in this.options.keyBindings){if(typeof this.options.keyBindings[j]=="string"){this.options.keyBindings[j]=this.options.keyBindings[j].toUpperCase().charCodeAt(0)}}}else{this.options.keyBindings={}}for(j in k){this.options.keyBindings[j]=this.options.keyBindings[j]||k[j]}d.addEvent(g,"keydown",this);this.on("destroy",function(){d.removeEvent(g,"keydown",this)})},_key:function(o){if(!this.enabled){return}var j=this.options.snap,q=j?this.currentPage.pageX:this.x,n=j?this.currentPage.pageY:this.y,l=d.getTime(),k=this.keyTime||0,m=0.25,r;if(this.options.useTransition&&this.isInTransition){r=this.getComputedPosition();this._translate(f.round(r.x),f.round(r.y));this.isInTransition=false}this.keyAcceleration=l-k<200?f.min(this.keyAcceleration+m,50):0;switch(o.keyCode){case this.options.keyBindings.pageUp:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){q+=j?1:this.wrapperWidth}else{n+=j?1:this.wrapperHeight}break;case this.options.keyBindings.pageDown:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){q-=j?1:this.wrapperWidth}else{n-=j?1:this.wrapperHeight}break;case this.options.keyBindings.end:q=j?this.pages.length-1:this.maxScrollX;n=j?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:q=0;n=0;break;case this.options.keyBindings.left:q+=j?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=j?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:q-=j?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=j?1:5+this.keyAcceleration>>0;break;default:return}if(j){this.goToPage(q,n);return}if(q>0){q=0;this.keyAcceleration=0}else{if(q<this.maxScrollX){q=this.maxScrollX;this.keyAcceleration=0}}if(n>0){n=0;this.keyAcceleration=0}else{if(n<this.maxScrollY){n=this.maxScrollY;this.keyAcceleration=0}}this.scrollTo(q,n,0);this.keyTime=l},_animate:function(u,s,m,j){var q=this,o=this.x,n=this.y,k=d.getTime(),r=k+m;function l(){var v=d.getTime(),x,w,y;if(v>=r){q.isAnimating=false;q._translate(u,s);if(!q.resetPosition(q.options.bounceTime)){q._execEvent("scrollEnd")}return}v=(v-k)/m;y=j(v);x=(u-o)*y+o;w=(s-n)*y+n;q._translate(x,w);if(q.isAnimating){i(l)}}this.isAnimating=true;l()},handleEvent:function(j){switch(j.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(j);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(j);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(j);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(j);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(j);break;case"keydown":this._key(j);break;case"click":if(!j._constructed){j.preventDefault();j.stopPropagation()}break}}};function e(m,k,l){var n=b.createElement("div"),j=b.createElement("div");if(l===true){n.style.cssText="position:absolute;z-index:9999";j.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"}j.className="iScrollIndicator";if(m=="h"){if(l===true){n.style.cssText+=";height:7px;left:2px;right:2px;bottom:0";j.style.height="100%"}n.className="iScrollHorizontalScrollbar"}else{if(l===true){n.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px";j.style.width="100%"}n.className="iScrollVerticalScrollbar"}n.style.cssText+=";overflow:hidden";if(!k){n.style.pointerEvents="none"}n.appendChild(j);return n}function c(j,k){this.wrapper=typeof k.el=="string"?b.querySelector(k.el):k.el;this.wrapperStyle=this.wrapper.style;this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=j;this.options={listenX:true,listenY:true,interactive:false,resize:true,defaultScrollbars:false,shrink:false,fade:false,speedRatioX:0,speedRatioY:0};for(var l in k){this.options[l]=k[l]}this.sizeRatioX=1;this.sizeRatioY=1;this.maxPosX=0;this.maxPosY=0;if(this.options.interactive){if(!this.options.disableTouch){d.addEvent(this.indicator,"touchstart",this);d.addEvent(g,"touchend",this)}if(!this.options.disablePointer){d.addEvent(this.indicator,"MSPointerDown",this);d.addEvent(g,"MSPointerUp",this)}if(!this.options.disableMouse){d.addEvent(this.indicator,"mousedown",this);d.addEvent(g,"mouseup",this)}}if(this.options.fade){this.wrapperStyle[d.style.transform]=this.scroller.translateZ;this.wrapperStyle[d.style.transitionDuration]=d.isBadAndroid?"0.001s":"0ms";this.wrapperStyle.opacity="0"}}c.prototype={handleEvent:function(j){switch(j.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(j);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(j);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(j);break}},destroy:function(){if(this.options.interactive){d.removeEvent(this.indicator,"touchstart",this);d.removeEvent(this.indicator,"MSPointerDown",this);d.removeEvent(this.indicator,"mousedown",this);d.removeEvent(g,"touchmove",this);d.removeEvent(g,"MSPointerMove",this);d.removeEvent(g,"mousemove",this);d.removeEvent(g,"touchend",this);d.removeEvent(g,"MSPointerUp",this);d.removeEvent(g,"mouseup",this)}if(this.options.defaultScrollbars){this.wrapper.parentNode.removeChild(this.wrapper)}},_start:function(k){var j=k.touches?k.touches[0]:k;k.preventDefault();k.stopPropagation();this.transitionTime();this.initiated=true;this.moved=false;this.lastPointX=j.pageX;this.lastPointY=j.pageY;this.startTime=d.getTime();if(!this.options.disableTouch){d.addEvent(g,"touchmove",this)}if(!this.options.disablePointer){d.addEvent(g,"MSPointerMove",this)}if(!this.options.disableMouse){d.addEvent(g,"mousemove",this)}this.scroller._execEvent("beforeScrollStart")},_move:function(o){var k=o.touches?o.touches[0]:o,l,j,q,n,m=d.getTime();if(!this.moved){this.scroller._execEvent("scrollStart")}this.moved=true;l=k.pageX-this.lastPointX;this.lastPointX=k.pageX;j=k.pageY-this.lastPointY;this.lastPointY=k.pageY;q=this.x+l;n=this.y+j;this._pos(q,n);o.preventDefault();o.stopPropagation()},_end:function(l){if(!this.initiated){return}this.initiated=false;l.preventDefault();l.stopPropagation();d.removeEvent(g,"touchmove",this);d.removeEvent(g,"MSPointerMove",this);d.removeEvent(g,"mousemove",this);if(this.scroller.options.snap){var j=this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var k=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.scroller.x-j.x),1000),f.min(f.abs(this.scroller.y-j.y),1000)),300);if(this.scroller.x!=j.x||this.scroller.y!=j.y){this.scroller.directionX=0;this.scroller.directionY=0;this.scroller.currentPage=j;this.scroller.scrollTo(j.x,j.y,k,this.scroller.options.bounceEasing)}}if(this.moved){this.scroller._execEvent("scrollEnd")}},transitionTime:function(j){j=j||0;this.indicatorStyle[d.style.transitionDuration]=j+"ms";if(!j&&d.isBadAndroid){this.indicatorStyle[d.style.transitionDuration]="0.001s"}},transitionTimingFunction:function(j){this.indicatorStyle[d.style.transitionTimingFunction]=j},refresh:function(){this.transitionTime();if(this.options.listenX&&!this.options.listenY){this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none"}else{if(this.options.listenY&&!this.options.listenX){this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none"}else{this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none"}}if(this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll){d.addClass(this.wrapper,"iScrollBothScrollbars");d.removeClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="8px"}else{this.wrapper.style.bottom="8px"}}}else{d.removeClass(this.wrapper,"iScrollBothScrollbars");d.addClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="2px"}else{this.wrapper.style.bottom="2px"}}}var j=this.wrapper.offsetHeight;if(this.options.listenX){this.wrapperWidth=this.wrapper.clientWidth;if(this.options.resize){this.indicatorWidth=f.max(f.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8);this.indicatorStyle.width=this.indicatorWidth+"px"}else{this.indicatorWidth=this.indicator.clientWidth}this.maxPosX=this.wrapperWidth-this.indicatorWidth;if(this.options.shrink=="clip"){this.minBoundaryX=-this.indicatorWidth+8;this.maxBoundaryX=this.wrapperWidth-8}else{this.minBoundaryX=0;this.maxBoundaryX=this.maxPosX}this.sizeRatioX=this.options.speedRatioX||(this.scroller.maxScrollX&&(this.maxPosX/this.scroller.maxScrollX))}if(this.options.listenY){this.wrapperHeight=this.wrapper.clientHeight;if(this.options.resize){this.indicatorHeight=f.max(f.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8);this.indicatorStyle.height=this.indicatorHeight+"px"}else{this.indicatorHeight=this.indicator.clientHeight}this.maxPosY=this.wrapperHeight-this.indicatorHeight;if(this.options.shrink=="clip"){this.minBoundaryY=-this.indicatorHeight+8;this.maxBoundaryY=this.wrapperHeight-8}else{this.minBoundaryY=0;this.maxBoundaryY=this.maxPosY}this.maxPosY=this.wrapperHeight-this.indicatorHeight;this.sizeRatioY=this.options.speedRatioY||(this.scroller.maxScrollY&&(this.maxPosY/this.scroller.maxScrollY))}this.updatePosition()},updatePosition:function(){var j=this.options.listenX&&f.round(this.sizeRatioX*this.scroller.x)||0,k=this.options.listenY&&f.round(this.sizeRatioY*this.scroller.y)||0;if(!this.options.ignoreBoundaries){if(j<this.minBoundaryX){if(this.options.shrink=="scale"){this.width=f.max(this.indicatorWidth+j,8);this.indicatorStyle.width=this.width+"px"}j=this.minBoundaryX}else{if(j>this.maxBoundaryX){if(this.options.shrink=="scale"){this.width=f.max(this.indicatorWidth-(j-this.maxPosX),8);this.indicatorStyle.width=this.width+"px";j=this.maxPosX+this.indicatorWidth-this.width}else{j=this.maxBoundaryX}}else{if(this.options.shrink=="scale"&&this.width!=this.indicatorWidth){this.width=this.indicatorWidth;this.indicatorStyle.width=this.width+"px"}}}if(k<this.minBoundaryY){if(this.options.shrink=="scale"){this.height=f.max(this.indicatorHeight+k*3,8);this.indicatorStyle.height=this.height+"px"}k=this.minBoundaryY}else{if(k>this.maxBoundaryY){if(this.options.shrink=="scale"){this.height=f.max(this.indicatorHeight-(k-this.maxPosY)*3,8);this.indicatorStyle.height=this.height+"px";k=this.maxPosY+this.indicatorHeight-this.height}else{k=this.maxBoundaryY}}else{if(this.options.shrink=="scale"&&this.height!=this.indicatorHeight){this.height=this.indicatorHeight;this.indicatorStyle.height=this.height+"px"}}}}this.x=j;this.y=k;if(this.scroller.options.useTransform){this.indicatorStyle[d.style.transform]="translate("+j+"px,"+k+"px)"+this.scroller.translateZ}else{this.indicatorStyle.left=j+"px";this.indicatorStyle.top=k+"px"}},_pos:function(j,k){if(j<0){j=0}else{if(j>this.maxPosX){j=this.maxPosX}}if(k<0){k=0}else{if(k>this.maxPosY){k=this.maxPosY}}j=this.options.listenX?f.round(j/this.sizeRatioX):this.scroller.x;k=this.options.listenY?f.round(k/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(j,k)},fade:function(m,l){if(l&&!this.visible){return}clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var k=m?250:500,j=m?0:300;m=m?"1":"0";this.wrapperStyle[d.style.transitionDuration]=k+"ms";this.fadeTimeout=setTimeout((function(n){this.wrapperStyle.opacity=n;this.visible=+n}).bind(this,m),j)}};h.utils=d;if(typeof module!="undefined"&&module.exports){module.exports=h}else{g.IScroll=h}})(window,document,Math);

/*!
 * Blurred
 */
(function(e,c,f){var d={filterId:0};var b=function(m,q){var j={intensity:5,forceSVGUrl:false},r=f.extend(j,q);this.$elm=m instanceof f?m:f(m);var l=false;var k=" -webkit- -moz- -o- -ms- ".split(" "),n={},i=function(v){if(n[v]||n[v]===""){return n[v]+v}var w=c.createElement("div");var u=["","Moz","Webkit","O","ms","Khtml"];for(var s in u){if(typeof w.style[u[s]+v]!=="undefined"){n[v]=u[s];return u[s]+v}}return v.toLowerCase()},h=function(){var s=c.createElement("div");s.style.cssText=k.join("filter:blur(2px); ");return!!s.style.length&&((c.documentMode===undefined||c.documentMode>9))}(),g=function(){var s=false;try{s=typeof SVGFEColorMatrixElement!==undefined&&SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE==2}catch(u){}return s}(),o=function(){var s="<svg id='vague-svg-blur' style='position:absolute;' width='0' height='0' ><filter id='blur-effect-id-"+d.filterId+"'><feGaussianBlur stdDeviation='"+r.intensity+"' /></filter></svg>";f("body").append(s)};this.init=function(){if(g){o()}this.$elm.data("vague-filter-id",d.filterId);d.filterId++};this.blur=function(){var x,v=e.location,w=r.forceSVGUrl?v.protocol+"//"+v.host+v.pathname:"",s=this.$elm.data("vague-filter-id"),u={};if(h){x="blur("+r.intensity+"px)"}else{if(g){x="url("+w+"#blur-effect-id-"+s+")"}else{x="progid:DXImageTransform.Microsoft.Blur(pixelradius="+r.intensity+")"}}u[i("Filter")]=x;this.$elm.css(u);l=true};this.unblur=function(){var s={};s[i("Filter")]="none";this.$elm.css(s);l=false};this.toggleblur=function(){if(l){this.unblur()}else{this.blur()}};this.destroy=function(){if(g){f("filter#blur-effect-id-"+this.$elm.data("vague-filter-id")).parent().remove()}this.unblur()};return this.init()};f.fn.Vague=function(g){return new b(this,g)};e.Vague=b}(window,document,jQuery));

/*!
 * each2
 */
(function(b){if(typeof b.fn.each2=="undefined"){b.extend(b.fn,{each2:function(g){var e=b([0]),f=-1,d=this.length;while(++f<d&&(e.context=e[0]=this[f])&&g.call(e[0],f,e)!==false){}return this}})}})(jQuery);

/*!
 * Select2
 */
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function o(a){function b(a){return m[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function p(a,b){for(var c=0,d=b.length;d>c;c+=1)if(r(a,b[c]))return c;return-1}function q(){var b=a(l);b.appendTo("body");var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function r(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function s(b,c){var d,e,f;if(null===b||b.length<1)return[];for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d}function t(a){return a.outerWidth(!1)-a.width()}function u(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function v(c){c.on("mousemove",function(c){var d=i;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function w(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function x(a,b){var c=w(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){p(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus();var e=b.offsetWidth>0||b.offsetHeight>0;e&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!h){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);h=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),h.attr("class","select2-sizer"),a("body").append(h)}return h.text(b.val()),h.width()}function D(b,c,d){var e,g,f=[];e=b.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=c.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(g))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=o(a.toUpperCase()).indexOf(o(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page);i.callback(b)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function K(b){if(a.isFunction(b)){var c=Array.prototype.slice.call(arguments,1);return b.apply(null,c)}return b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(r(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(){var a=this;Array.prototype.forEach.call(arguments,function(b){a[b].remove(),a[b]=null})}function O(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,h,j,k,i={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case c.SHIFT:case c.CTRL:case c.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z"};j=a(document),g=function(){var a=1;return function(){return a++}}(),j.on("mousemove",function(a){i.x=a.pageX,i.y=a.pageY}),d=O(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,f=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a("body"),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss)),this.container.addClass(K(c.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",f,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",f,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",f,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",f,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",f,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),k=k||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2");this.close(),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show()),N.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:r(a.attr("locked"),"locked")||r(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,f,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,f){var h,j=this.opts.id,k=this.liveRegion;h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;for(d=c.sortResults(d,e,f),m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+g()),t.attr("role","option"),v=c.formatResult(o,t,f,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),e.append(s);k.text(c.formatMatches(d.length))},h(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,h,c={results:[],more:!1},e=a.term;h=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(i.optionToData(b)):b.is("optgroup")&&(d=i.optionToData(b),b.children().each2(function(a,b){h(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){h(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(s(b.val(),c.separator)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return r(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var c,d,a=this.opts.element;a.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),c=this.bind(function(){var c=a.prop("disabled");c===b&&(c=!1),this.enable(!c);var d=a.prop("readonly");d===b&&(d=!1),this.readonly(d),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass)),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass))}),a.length&&a[0].attachEvent&&a.each(function(){this.attachEvent("onpropertychange",c)}),d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(a){a.forEach(c)}),this.propertyObserver.observe(a.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t,u,v,w,x,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window),h=g.width(),i=g.height(),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,o=l>=m+f,p=c.top-f>=g.scrollTop(),q=b.outerWidth(!1),r=j>=n+q,s=b.hasClass("select2-drop-above");s?(u=!0,!p&&o&&(v=!0,u=!1)):(u=!1,!o&&p&&(v=!0,u=!0)),v&&(b.hide(),c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,q=b.outerWidth(!1),r=j>=n+q,b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(x=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),q=b.outerWidth(!1)+(x.scrollHeight===x.clientHeight?0:k.width),q>e?e=q:q=e,f=b.outerHeight(!1),r=j>=n+q):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(t=this.body.offset(),m-=t.top,n-=t.left),r||(n=c.left+this.container.outerWidth(!1)-q),w={left:n,width:e},u?(w.top=c.top-f,w.bottom="auto",this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(w.top=m,w.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),w=a.extend(w,K(this.opts.dropdownCss)),b.css(w)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),!0):!1},opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",function(b){n(f);var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close(),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){g.opened()&&g.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),f=e.offset().top+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=e.offset().top-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?p(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",d.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(d.text()),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length
},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(K(e.opts.formatLoadMore,d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown(),e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?h.liveRegion.text(e.text()):h.liveRegion.text(h.opts.formatMatches(e.find(".select2-result-selectable").length))}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+K(f.formatInputTooShort,d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+K(f.formatInputTooLong,d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return r(h.id(this),h.id(i))}).length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+h.opts.escapeMarkup(K(f.formatLoadMore,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){if(this._touchMoved)return this.clearTouchMoved(),void 0;var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function c(){var c,d,e,f,g,h;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(h=d[f].replace(/\s/g,""),e=h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),e=O(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e))),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,h,d=this.container,e=this.dropdown,f=g();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+f),this.focusser.attr("aria-labelledby","select2-chosen-"+f),this.results.attr("id","select2-results-"+f),this.search.attr("aria-owns","select2-results-"+f),this.focusser.attr("id","s2id_autogen"+f),h=a("label[for='"+this.opts.element.attr("id")+"']"),this.focusser.prev().text(h.text()).attr("for",this.focusser.attr("id"));var i=this.opts.element.attr("title");this.opts.element.attr("title",i||h.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),void 0;case c.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.ESC){if(this.opts.openOnEnter===!1&&a.which===c.ENTER)return A(a),void 0;if(a.which==c.DOWN||a.which==c.UP||a.which==c.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==c.DELETE||a.which==c.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),u(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(c){n(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(c)})),e.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder(),c.nextSearchTerm=c.opts.nextSearchTerm(a,c.search.val()))})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=r(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return r(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),r(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),f=O(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=s(c.val(),b.separator),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return r(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(r(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"searchContainer","selection")},initContainer:function(){var d,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);var e=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(){e.search[0].focus(),e.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+g()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=d.find(".select2-search-choice-focus"),e=b.prev(".select2-search-choice:not(.select2-locked)"),f=b.next(".select2-search-choice:not(.select2-locked)"),g=z(this.search);if(b.length&&(a.which==c.LEFT||a.which==c.RIGHT||a.which==c.BACKSPACE||a.which==c.DELETE||a.which==c.ENTER)){var h=b;return a.which==c.LEFT&&e.length?h=e:a.which==c.RIGHT?h=f.length?f:null:a.which===c.BACKSPACE?this.unselect(b.first())&&(this.search.width(10),h=e.length?e:f):a.which==c.DELETE?this.unselect(b.first())&&(this.search.width(10),h=f.length?f:null):a.which==c.ENTER&&(h=null),this.selectChoice(h),A(a),h&&h.length||this.open(),void 0}if((a.which===c.BACKSPACE&&1==this.keydowns||a.which==c.LEFT)&&0==g.offset&&!g.length)return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),this.close(),void 0;case c.ESC:return this.cancel(a),A(a),void 0}if(a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.BACKSPACE&&a.which!==c.ESC){if(a.which===c.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)&&A(a),a.which===c.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){p(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,c){this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),c&&c.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith("<div>"+j+"</div>"),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),A(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(b){var d,e,c=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(d=b.data("select2-data")){var f=a.Event("select2-removing");if(f.val=this.id(d),f.choice=d,this.opts.element.trigger(f),f.isDefaultPrevented())return!1;for(;(e=p(this.id(d),c))>=0;)c.splice(e,1),this.setVal(c),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(d),choice:d}),this.triggerChange({removed:d}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));p(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-t(this.search)},resizeSearch:function(){var a,b,c,d,e,f=t(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),s(a,this.opts.separator))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){p(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)r(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c>0&&c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,e,f,g,h,c=Array.prototype.slice.call(arguments,0),i=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],j=["opened","isFocused","container","dropdown"],k=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?h=d.element.prop("multiple"):(h=d.multiple||!1,"tags"in d&&(d.multiple=h=!0)),e=h?new window.Select2["class"].multi:new window.Select2["class"].single,e.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(p(c[0],i)<0)throw"Unknown method: "+c[0];if(g=b,e=a(this).data("select2"),e===b)return;if(f=c[0],"container"===f?g=e.container:"dropdown"===f?g=e.dropdown:(l[f]&&(f=l[f]),g=e[f].apply(e,c.slice(1))),p(c[0],j)>=0||p(c[0],k)>=0&&1==c.length)return!1}}),g===b?this:g},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(a.text,c.term,e,d),e.join("")},formatSelection:function(a,c,d){return a?d(a.text):b},sortResults:function(a){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(){return b},formatMatches:function(a){return a+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},matcher:function(a,b){return o(""+b).toUpperCase().indexOf(o(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b?a.opts.minimumResultsForSearch<0?!1:!0:!0}},a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":d,single:e,multi:f}}}}(jQuery);

/*!
 * jQuery UI Core 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function(c,g){var b=0,f=/^ui-id-\d+$/;c.ui=c.ui||{};c.extend(c.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});c.fn.extend({focus:(function(h){return function(i,j){return typeof i==="number"?this.each(function(){var k=this;setTimeout(function(){c(k).focus();if(j){j.call(k)}},i)}):h.apply(this,arguments)}})(c.fn.focus),scrollParent:function(){var h;if((c.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){h=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.css(this,"position"))&&(/(auto|scroll)/).test(c.css(this,"overflow")+c.css(this,"overflow-y")+c.css(this,"overflow-x"))}).eq(0)}else{h=this.parents().filter(function(){return(/(auto|scroll)/).test(c.css(this,"overflow")+c.css(this,"overflow-y")+c.css(this,"overflow-x"))}).eq(0)}return(/fixed/).test(this.css("position"))||!h.length?c(document):h},zIndex:function(k){if(k!==g){return this.css("zIndex",k)}if(this.length){var i=c(this[0]),h,j;while(i.length&&i[0]!==document){h=i.css("position");if(h==="absolute"||h==="relative"||h==="fixed"){j=parseInt(i.css("zIndex"),10);if(!isNaN(j)&&j!==0){return j}}i=i.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++b)}})},removeUniqueId:function(){return this.each(function(){if(f.test(this.id)){c(this).removeAttr("id")}})}});function e(j,h){var l,k,i,m=j.nodeName.toLowerCase();if("area"===m){l=j.parentNode;k=l.name;if(!j.href||!k||l.nodeName.toLowerCase()!=="map"){return false}i=c("img[usemap=#"+k+"]")[0];return!!i&&d(i)}return(/input|select|textarea|button|object/.test(m)?!j.disabled:"a"===m?j.href||h:h)&&d(j)}function d(h){return c.expr.filters.visible(h)&&!c(h).parents().addBack().filter(function(){return c.css(this,"visibility")==="hidden"}).length}c.extend(c.expr[":"],{data:c.expr.createPseudo?c.expr.createPseudo(function(h){return function(i){return!!c.data(i,h)}}):function(k,j,h){return!!c.data(k,h[3])},focusable:function(h){return e(h,!isNaN(c.attr(h,"tabindex")))},tabbable:function(j){var h=c.attr(j,"tabindex"),i=isNaN(h);return(i||h>=0)&&e(j,!i)}});if(!c("<a>").outerWidth(1).jquery){c.each(["Width","Height"],function(k,h){var j=h==="Width"?["Left","Right"]:["Top","Bottom"],l=h.toLowerCase(),n={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};function m(q,o,i,r){c.each(j,function(){o-=parseFloat(c.css(q,"padding"+this))||0;if(i){o-=parseFloat(c.css(q,"border"+this+"Width"))||0}if(r){o-=parseFloat(c.css(q,"margin"+this))||0}});return o}c.fn["inner"+h]=function(i){if(i===g){return n["inner"+h].call(this)}return this.each(function(){c(this).css(l,m(this,i)+"px")})};c.fn["outer"+h]=function(i,o){if(typeof i!=="number"){return n["outer"+h].call(this,i)}return this.each(function(){c(this).css(l,m(this,i,true,o)+"px")})}})}if(!c.fn.addBack){c.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))}}if(c("<a>").data("a-b","a").removeData("a-b").data("a-b")){c.fn.removeData=(function(h){return function(i){if(arguments.length){return h.call(this,c.camelCase(i))}else{return h.call(this)}}})(c.fn.removeData)}c.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());c.support.selectstart="onselectstart"in document.createElement("div");c.fn.extend({disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(h){h.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.extend(c.ui,{plugin:{add:function(j,k,m){var h,l=c.ui[j].prototype;for(h in m){l.plugins[h]=l.plugins[h]||[];l.plugins[h].push([k,m[h]])}},call:function(h,k,j){var l,m=h.plugins[k];if(!m||!h.element[0].parentNode||h.element[0].parentNode.nodeType===11){return}for(l=0;l<m.length;l++){if(h.options[m[l][0]]){m[l][1].apply(h.element,j)}}}},hasScroll:function(k,i){if(c(k).css("overflow")==="hidden"){return false}var h=(i&&i==="left")?"scrollLeft":"scrollTop",j=false;if(k[h]>0){return true}k[h]=1;j=(k[h]>0);k[h]=0;return j}})})(jQuery);
 
 /*!
 * jQuery UI Widget 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function(c,f){var b=0,e=Array.prototype.slice,d=c.cleanData;c.cleanData=function(g){for(var h=0,j;(j=g[h])!=null;h++){try{c(j).triggerHandler("remove")}catch(k){}}d(g)};c.widget=function(g,h,o){var l,m,j,n,i={},k=g.split(".")[0];g=g.split(".")[1];l=k+"-"+g;if(!o){o=h;h=c.Widget}c.expr[":"][l.toLowerCase()]=function(q){return!!c.data(q,l)};c[k]=c[k]||{};m=c[k][g];j=c[k][g]=function(q,r){if(!this._createWidget){return new j(q,r)}if(arguments.length){this._createWidget(q,r)}};c.extend(j,m,{version:o.version,_proto:c.extend({},o),_childConstructors:[]});n=new h();n.options=c.widget.extend({},n.options);c.each(o,function(r,q){if(!c.isFunction(q)){i[r]=q;return}i[r]=(function(){var s=function(){return h.prototype[r].apply(this,arguments)},u=function(v){return h.prototype[r].apply(this,v)};return function(){var x=this._super,v=this._superApply,w;this._super=s;this._superApply=u;w=q.apply(this,arguments);this._super=x;this._superApply=v;return w}})()});j.prototype=c.widget.extend(n,{widgetEventPrefix:m?(n.widgetEventPrefix||g):g},i,{constructor:j,namespace:k,widgetName:g,widgetFullName:l});if(m){c.each(m._childConstructors,function(r,s){var q=s.prototype;c.widget(q.namespace+"."+q.widgetName,j,s._proto)});delete m._childConstructors}else{h._childConstructors.push(j)}c.widget.bridge(g,j)};c.widget.extend=function(l){var h=e.call(arguments,1),k=0,g=h.length,i,j;for(;k<g;k++){for(i in h[k]){j=h[k][i];if(h[k].hasOwnProperty(i)&&j!==f){if(c.isPlainObject(j)){l[i]=c.isPlainObject(l[i])?c.widget.extend({},l[i],j):c.widget.extend({},j)}else{l[i]=j}}}}return l};c.widget.bridge=function(h,g){var i=g.prototype.widgetFullName||h;c.fn[h]=function(l){var j=typeof l==="string",k=e.call(arguments,1),m=this;l=!j&&k.length?c.widget.extend.apply(null,[l].concat(k)):l;if(j){this.each(function(){var o,n=c.data(this,i);if(!n){return c.error("cannot call methods on "+h+" prior to initialization; attempted to call method '"+l+"'")}if(!c.isFunction(n[l])||l.charAt(0)==="_"){return c.error("no such method '"+l+"' for "+h+" widget instance")}o=n[l].apply(n,k);if(o!==n&&o!==f){m=o&&o.jquery?m.pushStack(o.get()):o;return false}})}else{this.each(function(){var n=c.data(this,i);if(n){n.option(l||{})._init()}else{c.data(this,i,new g(l,this))}})}return m}};c.Widget=function(){};c.Widget._childConstructors=[];c.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(g,h){h=c(h||this.defaultElement||this)[0];this.element=c(h);this.uuid=b++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=c.widget.extend({},this.options,this._getCreateOptions(),g);this.bindings=c();this.hoverable=c();this.focusable=c();if(h!==this){c.data(h,this.widgetFullName,this);this._on(true,this.element,{remove:function(i){if(i.target===h){this.destroy()}}});this.document=c(h.style?h.ownerDocument:h.document||h);this.window=c(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:c.noop,_getCreateEventData:c.noop,_create:c.noop,_init:c.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:c.noop,widget:function(){return this.element},option:function(k,l){var g=k,m,j,h;if(arguments.length===0){return c.widget.extend({},this.options)}if(typeof k==="string"){g={};m=k.split(".");k=m.shift();if(m.length){j=g[k]=c.widget.extend({},this.options[k]);for(h=0;h<m.length-1;h++){j[m[h]]=j[m[h]]||{};j=j[m[h]]}k=m.pop();if(arguments.length===1){return j[k]===f?null:j[k]}j[k]=l}else{if(arguments.length===1){return this.options[k]===f?null:this.options[k]}g[k]=l}}this._setOptions(g);return this},_setOptions:function(g){var h;for(h in g){this._setOption(h,g[h])}return this},_setOption:function(g,h){this.options[g]=h;if(g==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!h).attr("aria-disabled",h);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(j,i,h){var k,g=this;if(typeof j!=="boolean"){h=i;i=j;j=false}if(!h){h=i;i=this.element;k=this.widget()}else{i=k=c(i);this.bindings=this.bindings.add(i)}c.each(h,function(r,q){function n(){if(!j&&(g.options.disabled===true||c(this).hasClass("ui-state-disabled"))){return}return(typeof q==="string"?g[q]:q).apply(g,arguments)}if(typeof q!=="string"){n.guid=q.guid=q.guid||n.guid||c.guid++}var o=r.match(/^(\w+)\s*(.*)$/),m=o[1]+g.eventNamespace,l=o[2];if(l){k.delegate(l,m,n)}else{i.bind(m,n)}})},_off:function(h,g){g=(g||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;h.unbind(g).undelegate(g)},_delay:function(j,i){function h(){return(typeof j==="string"?g[j]:j).apply(g,arguments)}var g=this;return setTimeout(h,i||0)},_hoverable:function(g){this.hoverable=this.hoverable.add(g);this._on(g,{mouseenter:function(h){c(h.currentTarget).addClass("ui-state-hover")},mouseleave:function(h){c(h.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(g){this.focusable=this.focusable.add(g);this._on(g,{focusin:function(h){c(h.currentTarget).addClass("ui-state-focus")},focusout:function(h){c(h.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(g,h,i){var l,k,j=this.options[g];i=i||{};h=c.Event(h);h.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();h.target=this.element[0];k=h.originalEvent;if(k){for(l in k){if(!(l in h)){h[l]=k[l]}}}this.element.trigger(h,i);return!(c.isFunction(j)&&j.apply(this.element[0],[h].concat(i))===false||h.isDefaultPrevented())}};c.each({show:"fadeIn",hide:"fadeOut"},function(h,g){c.Widget.prototype["_"+h]=function(k,j,m){if(typeof j==="string"){j={effect:j}}var l,i=!j?h:j===true||typeof j==="number"?g:j.effect||g;j=j||{};if(typeof j==="number"){j={duration:j}}l=!c.isEmptyObject(j);j.complete=m;if(j.delay){k.delay(j.delay)}if(l&&c.effects&&c.effects.effect[i]){k[h](j)}else{if(i!==h&&k[i]){k[i](j.duration,j.easing,m)}else{k.queue(function(n){c(this)[h]();if(m){m.call(k[0])}n()})}}}})})(jQuery);
 
 /*!
 * jQuery UI Mouse 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(c,d){var b=false;c(document).mouseup(function(){b=false});c.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(f){return e._mouseDown(f)}).bind("click."+this.widgetName,function(f){if(true===c.data(f.target,e.widgetName+".preventClickEvent")){c.removeData(f.target,e.widgetName+".preventClickEvent");f.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(g){if(b){return}(this._mouseStarted&&this._mouseUp(g));this._mouseDownEvent=g;var f=this,h=(g.which===1),e=(typeof this.options.cancel==="string"&&g.target.nodeName?c(g.target).closest(this.options.cancel).length:false);if(!h||e||!this._mouseCapture(g)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(g)&&this._mouseDelayMet(g)){this._mouseStarted=(this._mouseStart(g)!==false);if(!this._mouseStarted){g.preventDefault();return true}}if(true===c.data(g.target,this.widgetName+".preventClickEvent")){c.removeData(g.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(i){return f._mouseMove(i)};this._mouseUpDelegate=function(i){return f._mouseUp(i)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);g.preventDefault();b=true;return true},_mouseMove:function(e){if(c.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button){return this._mouseUp(e)}if(this._mouseStarted){this._mouseDrag(e);return e.preventDefault()}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,e)!==false);(this._mouseStarted?this._mouseDrag(e):this._mouseUp(e))}return!this._mouseStarted},_mouseUp:function(e){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(e.target===this._mouseDownEvent.target){c.data(e.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return(Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance)},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
 

 /*!
 * jQuery UI Spinner 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.button.js
 */
(function(c){function b(d){return function(){var e=this.element.val();d.apply(this,arguments);this._refresh();if(e!==this.element.val()){this._trigger("change")}}}c.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);if(this.value()!==""){this._value(this.element.val(),true)}this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var d={},e=this.element;c.each(["min","max","step"],function(f,g){var h=e.attr(g);if(h!==undefined&&h.length){d[g]=h}});return d},_events:{keydown:function(d){if(this._start(d)&&this._keydown(d)){d.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(d){if(this.cancelBlur){delete this.cancelBlur;return}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",d)}},mousewheel:function(d,e){if(!e){return}if(!this.spinning&&!this._start(d)){return false}this._spin((e>0?1:-1)*this.options.step,d);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(d)}},100);d.preventDefault()},"mousedown .ui-spinner-button":function(e){var d;d=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function f(){var g=this.element[0]===this.document[0].activeElement;if(!g){this.element.focus();this.previous=d;this._delay(function(){this.previous=d})}}e.preventDefault();f.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;f.call(this)});if(this._start(e)===false){return}this._repeat(null,c(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(d){if(!c(d.currentTarget).hasClass("ui-state-active")){return}if(this._start(d)===false){return false}this._repeat(null,c(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var d=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=d.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(d.height()*0.5)&&d.height()>0){d.height(d.height())}if(this.options.disabled){this.disable()}},_keydown:function(e){var d=this.options,f=c.ui.keyCode;switch(e.keyCode){case f.UP:this._repeat(null,1,e);return true;case f.DOWN:this._repeat(null,-1,e);return true;case f.PAGE_UP:this._repeat(null,d.page,e);return true;case f.PAGE_DOWN:this._repeat(null,-d.page,e);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(d){if(!this.spinning&&this._trigger("start",d)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(e,d,f){e=e||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,d,f)},e);this._spin(d*this.options.step,f)},_spin:function(e,d){var f=this.value()||0;if(!this.counter){this.counter=1}f=this._adjustValue(f+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",d,{value:f})!==false){this._value(f);this.counter++}},_increment:function(d){var e=this.options.incremental;if(e){return c.isFunction(e)?e(d):Math.floor(d*d*d/50000-d*d/500+17*d/200+1)}return 1},_precision:function(){var d=this._precisionOf(this.options.step);if(this.options.min!==null){d=Math.max(d,this._precisionOf(this.options.min))}return d},_precisionOf:function(e){var f=e.toString(),d=f.indexOf(".");return d===-1?0:f.length-d-1},_adjustValue:function(f){var e,g,d=this.options;e=d.min!==null?d.min:0;g=f-e;g=Math.round(g/d.step)*d.step;f=e+g;f=parseFloat(f.toFixed(this._precision()));if(d.max!==null&&f>d.max){return d.max}if(d.min!==null&&f<d.min){return d.min}return f},_stop:function(d){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",d)},_setOption:function(d,e){if(d==="culture"||d==="numberFormat"){var f=this._parse(this.element.val());this.options[d]=e;this.element.val(this._format(f));return}if(d==="max"||d==="min"||d==="step"){if(typeof e==="string"){e=this._parse(e)}}if(d==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)}this._super(d,e);if(d==="disabled"){if(e){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);this.buttons.button("enable")}}},_setOptions:b(function(d){this._super(d);this._value(this.element.val())}),_parse:function(d){if(typeof d==="string"&&d!==""){d=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(d,10,this.options.culture):+d}return d===""||isNaN(d)?null:d},_format:function(d){if(d===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(d,this.options.numberFormat,this.options.culture):d},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(f,d){var e;if(f!==""){e=this._parse(f);if(e!==null){if(!d){e=this._adjustValue(e)}f=this._format(e)}}this.element.val(f);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:b(function(d){this._stepUp(d)}),_stepUp:function(d){if(this._start()){this._spin((d||1)*this.options.step);this._stop()}},stepDown:b(function(d){this._stepDown(d)}),_stepDown:function(d){if(this._start()){this._spin((d||1)*-this.options.step);this._stop()}},pageUp:b(function(d){this._stepUp((d||1)*this.options.page)}),pageDown:b(function(d){this._stepDown((d||1)*this.options.page)}),value:function(d){if(!arguments.length){return this._parse(this.element.val())}b(this._value).call(this,d)},widget:function(){return this.uiSpinner}})}(jQuery));
 
 /*!
 * jQuery UI Progressbar 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,c){b.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(d){if(d===c){return this.options.value}this.options.value=this._constrainedValue(d);this._refreshValue()},_constrainedValue:function(d){if(d===c){d=this.options.value}this.indeterminate=d===false;if(typeof d!=="number"){d=0}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,d))},_setOptions:function(d){var e=d.value;delete d.value;this._super(d);this.options.value=this._constrainedValue(e);this._refreshValue()},_setOption:function(d,e){if(d==="max"){e=Math.max(this.min,e)}this._super(d,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,d=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(d.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=b("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null}}if(this.oldValue!==e){this.oldValue=e;this._trigger("change")}if(e===this.options.max){this._trigger("complete")}}})})(jQuery);

/*!
 * jQuery UI Tabs 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,f){var b=0,g=/#.*$/;function e(){return++b}function c(h){h=h.cloneNode(false);return h.hash.length>1&&decodeURIComponent(h.href.replace(g,""))===decodeURIComponent(location.href.replace(g,""))}d.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var i=this,h=this.options;this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",h.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(j){if(d(this).is(".ui-state-disabled")){j.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(d(this).closest("li").is(".ui-state-disabled")){this.blur()}});this._processTabs();h.active=this._initialActive();if(d.isArray(h.disabled)){h.disabled=d.unique(h.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"),function(j){return i.tabs.index(j)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(h.active)}else{this.active=d()}this._refresh();if(this.active.length){this.load(h.active)}},_initialActive:function(){var i=this.options.active,h=this.options.collapsible,j=location.hash.substring(1);if(i===null){if(j){this.tabs.each(function(k,l){if(d(l).attr("aria-controls")===j){i=k;return false}})}if(i===null){i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(i===null||i===-1){i=this.tabs.length?0:false}}if(i!==false){i=this.tabs.index(this.tabs.eq(i));if(i===-1){i=h?false:0}}if(!h&&i===false&&this.anchors.length){i=0}return i},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?d():this._getPanelForTab(this.active)}},_tabKeydown:function(j){var i=d(this.document[0].activeElement).closest("li"),h=this.tabs.index(i),k=true;if(this._handlePageNav(j)){return}switch(j.keyCode){case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:h++;break;case d.ui.keyCode.UP:case d.ui.keyCode.LEFT:k=false;h--;break;case d.ui.keyCode.END:h=this.anchors.length-1;break;case d.ui.keyCode.HOME:h=0;break;case d.ui.keyCode.SPACE:j.preventDefault();clearTimeout(this.activating);this._activate(h);return;case d.ui.keyCode.ENTER:j.preventDefault();clearTimeout(this.activating);this._activate(h===this.options.active?false:h);return;default:return}j.preventDefault();clearTimeout(this.activating);h=this._focusNextTab(h,k);if(!j.ctrlKey){i.attr("aria-selected","false");this.tabs.eq(h).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",h)},this.delay)}},_panelKeydown:function(h){if(this._handlePageNav(h)){return}if(h.ctrlKey&&h.keyCode===d.ui.keyCode.UP){h.preventDefault();this.active.focus()}},_handlePageNav:function(h){if(h.altKey&&h.keyCode===d.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(h.altKey&&h.keyCode===d.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(i,j){var h=this.tabs.length-1;function k(){if(i>h){i=0}if(i<0){i=h}return i}while(d.inArray(k(),this.options.disabled)!==-1){i=j?i+1:i-1}return i},_focusNextTab:function(h,i){h=this._findNextTab(h,i);this.tabs.eq(h).focus();return h},_setOption:function(h,i){if(h==="active"){this._activate(i);return}if(h==="disabled"){this._setupDisabled(i);return}this._super(h,i);if(h==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",i);if(!i&&this.options.active===false){this._activate(0)}}if(h==="event"){this._setupEvents(i)}if(h==="heightStyle"){this._setupHeightStyle(i)}},_tabId:function(h){return h.attr("aria-controls")||"ui-tabs-"+e()},_sanitizeSelector:function(h){return h?h.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var i=this.options,h=this.tablist.children(":has(a[href])");i.disabled=d.map(h.filter(".ui-state-disabled"),function(j){return h.index(j)});this._processTabs();if(i.active===false||!this.anchors.length){i.active=false;this.active=d()}else{if(this.active.length&&!d.contains(this.tablist[0],this.active[0])){if(this.tabs.length===i.disabled.length){i.active=false;this.active=d()}else{this._activate(this._findNextTab(Math.max(0,i.active-1),false))}}else{i.active=this.tabs.index(this.active)}}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var h=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return d("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=d();this.anchors.each(function(o,m){var j,k,n,l=d(m).uniqueId().attr("id"),q=d(m).closest("li"),r=q.attr("aria-controls");if(c(m)){j=m.hash;k=h.element.find(h._sanitizeSelector(j))}else{n=h._tabId(q);j="#"+n;k=h.element.find(j);if(!k.length){k=h._createPanel(n);k.insertAfter(h.panels[o-1]||h.tablist)}k.attr("aria-live","polite")}if(k.length){h.panels=h.panels.add(k)}if(r){q.data("ui-tabs-aria-controls",r)}q.attr({"aria-controls":j.substring(1),"aria-labelledby":l});k.attr("aria-labelledby",l)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(h){return d("<div>").attr("id",h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(k){if(d.isArray(k)){if(!k.length){k=false}else{if(k.length===this.anchors.length){k=true}}}for(var j=0,h;(h=this.tabs[j]);j++){if(k===true||d.inArray(j,k)!==-1){d(h).addClass("ui-state-disabled").attr("aria-disabled","true")}else{d(h).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=k},_setupEvents:function(i){var h={click:function(j){j.preventDefault()}};if(i){d.each(i.split(" "),function(k,j){h[j]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,h);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(h){var j,i=this.element.parent();if(h==="fill"){j=i.height();j-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var l=d(this),k=l.css("position");if(k==="absolute"||k==="fixed"){return}j-=l.outerHeight(true)});this.element.children().not(this.panels).each(function(){j-=d(this).outerHeight(true)});this.panels.each(function(){d(this).height(Math.max(0,j-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")}else{if(h==="auto"){j=0;this.panels.each(function(){j=Math.max(j,d(this).height("").height())}).height(j)}}},_eventHandler:function(h){var r=this.options,l=this.active,m=d(h.currentTarget),k=m.closest("li"),o=k[0]===l[0],i=o&&r.collapsible,j=i?d():this._getPanelForTab(k),n=!l.length?d():this._getPanelForTab(l),q={oldTab:l,oldPanel:n,newTab:i?d():k,newPanel:j};h.preventDefault();if(k.hasClass("ui-state-disabled")||k.hasClass("ui-tabs-loading")||this.running||(o&&!r.collapsible)||(this._trigger("beforeActivate",h,q)===false)){return}r.active=i?false:this.tabs.index(k);this.active=o?d():k;if(this.xhr){this.xhr.abort()}if(!n.length&&!j.length){d.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(j.length){this.load(this.tabs.index(k),h)}this._toggle(h,q)},_toggle:function(n,m){var l=this,h=m.newPanel,k=m.oldPanel;this.running=true;function j(){l.running=false;l._trigger("activate",n,m)}function i(){m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(h.length&&l.options.show){l._show(h,l.options.show,j)}else{h.show();j()}}if(k.length&&this.options.hide){this._hide(k,this.options.hide,function(){m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");i()})}else{m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");k.hide();i()}k.attr({"aria-expanded":"false","aria-hidden":"true"});m.oldTab.attr("aria-selected","false");if(h.length&&k.length){m.oldTab.attr("tabIndex",-1)}else{if(h.length){this.tabs.filter(function(){return d(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}h.attr({"aria-expanded":"true","aria-hidden":"false"});m.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(i){var h,j=this._findActive(i);if(j[0]===this.active[0]){return}if(!j.length){j=this.active}h=j.find(".ui-tabs-anchor")[0];this._eventHandler({target:h,currentTarget:h,preventDefault:d.noop})},_findActive:function(h){return h===false?d():this.tabs.eq(h)},_getIndex:function(h){if(typeof h==="string"){h=this.anchors.index(this.anchors.filter("[href$='"+h+"']"))}return h},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if(d.data(this,"ui-tabs-destroy")){d(this).remove()}else{d(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var h=d(this),i=h.data("ui-tabs-aria-controls");if(i){h.attr("aria-controls",i).removeData("ui-tabs-aria-controls")}else{h.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(h){var i=this.options.disabled;if(i===false){return}if(h===f){i=false}else{h=this._getIndex(h);if(d.isArray(i)){i=d.map(i,function(j){return j!==h?j:null})}else{i=d.map(this.tabs,function(j,k){return k!==h?k:null})}}this._setupDisabled(i)},disable:function(h){var i=this.options.disabled;if(i===true){return}if(h===f){i=true}else{h=this._getIndex(h);if(d.inArray(h,i)!==-1){return}if(d.isArray(i)){i=d.merge([h],i).sort()}else{i=[h]}}this._setupDisabled(i)},load:function(j,n){j=this._getIndex(j);var m=this,k=this.tabs.eq(j),i=k.find(".ui-tabs-anchor"),h=this._getPanelForTab(k),l={tab:k,panel:h};if(c(i[0])){return}this.xhr=d.ajax(this._ajaxSettings(i,n,l));if(this.xhr&&this.xhr.statusText!=="canceled"){k.addClass("ui-tabs-loading");h.attr("aria-busy","true");this.xhr.success(function(o){setTimeout(function(){h.html(o);m._trigger("load",n,l)},1)}).complete(function(q,o){setTimeout(function(){if(o==="abort"){m.panels.stop(false,true)}k.removeClass("ui-tabs-loading");h.removeAttr("aria-busy");if(q===m.xhr){delete m.xhr}},1)})}},_ajaxSettings:function(h,k,j){var i=this;return{url:h.attr("href"),beforeSend:function(m,l){return i._trigger("beforeLoad",k,d.extend({jqXHR:m,ajaxSettings:l},j))}}},_getPanelForTab:function(h){var i=d(h).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);

/*!
 * Date Picker
 */
(function(k,g){var d=k(window);function o(){return new Date(Date.UTC.apply(Date,arguments))}function h(){var s=new Date();return o(s.getFullYear(),s.getMonth(),s.getDate())}function m(s){return function(){return this[s].apply(this,arguments)}}var f=(function(){var s={get:function(u){return this.slice(u)[0]},contains:function(x){var w=x&&x.valueOf();for(var v=0,u=this.length;v<u;v++){if(this[v].valueOf()===w){return v}}return-1},remove:function(u){this.splice(u,1)},replace:function(u){if(!u){return}if(!k.isArray(u)){u=[u]}this.clear();this.push.apply(this,u)},clear:function(){this.splice(0)},copy:function(){var u=new f();u.replace(this);return u}};return function(){var u=[];u.push.apply(u,arguments);k.extend(u,s);return u}})();var l=function(u,s){this.dates=new f();this.viewDate=h();this.focusDate=null;this._process_options(s);this.element=k(u);this.isInline=false;this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on, .input-group-addon, .btn"):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.picker=k(n.template);this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element)}else{this.picker.addClass("datepicker-dropdown dropdown-menu")}if(this.o.rtl){this.picker.addClass("datepicker-rtl")}this.viewMode=this.o.startView;if(this.o.calendarWeeks){this.picker.find("tfoot th.today").attr("colspan",function(v,w){return parseInt(w)+1})}this._allow_update=false;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show()}};l.prototype={constructor:l,_process_options:function(s){this._o=k.extend({},this._o,s);var x=this.o=k.extend({},this._o);var w=x.language;if(!c[w]){w=w.split("-")[0];if(!c[w]){w=i.language}}x.language=w;switch(x.startView){case 2:case"decade":x.startView=2;break;case 1:case"year":x.startView=1;break;default:x.startView=0}switch(x.minViewMode){case 1:case"months":x.minViewMode=1;break;case 2:case"years":x.minViewMode=2;break;default:x.minViewMode=0}x.startView=Math.max(x.startView,x.minViewMode);if(x.multidate!==true){x.multidate=Number(x.multidate)||false;if(x.multidate!==false){x.multidate=Math.max(0,x.multidate)}else{x.multidate=1}}x.multidateSeparator=String(x.multidateSeparator);x.weekStart%=7;x.weekEnd=((x.weekStart+6)%7);var u=n.parseFormat(x.format);if(x.startDate!==-Infinity){if(!!x.startDate){if(x.startDate instanceof Date){x.startDate=this._local_to_utc(this._zero_time(x.startDate))}else{x.startDate=n.parseDate(x.startDate,u,x.language)}}else{x.startDate=-Infinity}}if(x.endDate!==Infinity){if(!!x.endDate){if(x.endDate instanceof Date){x.endDate=this._local_to_utc(this._zero_time(x.endDate))}else{x.endDate=n.parseDate(x.endDate,u,x.language)}}else{x.endDate=Infinity}}x.daysOfWeekDisabled=x.daysOfWeekDisabled||[];if(!k.isArray(x.daysOfWeekDisabled)){x.daysOfWeekDisabled=x.daysOfWeekDisabled.split(/[,\s]*/)}x.daysOfWeekDisabled=k.map(x.daysOfWeekDisabled,function(z){return parseInt(z,10)});var v=String(x.orientation).toLowerCase().split(/\s+/g),y=x.orientation.toLowerCase();v=k.grep(v,function(z){return(/^auto|left|right|top|bottom$/).test(z)});x.orientation={x:"auto",y:"auto"};if(!y||y==="auto"){}else{if(v.length===1){switch(v[0]){case"top":case"bottom":x.orientation.y=v[0];break;case"left":case"right":x.orientation.x=v[0];break}}else{y=k.grep(v,function(z){return(/^left|right$/).test(z)});x.orientation.x=y[0]||"auto";y=k.grep(v,function(z){return(/^top|bottom$/).test(z)});x.orientation.y=y[0]||"auto"}}},_events:[],_secondaryEvents:[],_applyEvents:function(s){for(var u=0,w,v,x;u<s.length;u++){w=s[u][0];if(s[u].length===2){v=g;x=s[u][1]}else{if(s[u].length===3){v=s[u][1];x=s[u][2]}}w.on(x,v)}},_unapplyEvents:function(s){for(var u=0,w,x,v;u<s.length;u++){w=s[u][0];if(s[u].length===2){v=g;x=s[u][1]}else{if(s[u].length===3){v=s[u][1];x=s[u][2]}}w.off(x,v)}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:k.proxy(this.show,this),keyup:k.proxy(function(s){if(k.inArray(s.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update()}},this),keydown:k.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:k.proxy(this.show,this),keyup:k.proxy(function(s){if(k.inArray(s.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update()}},this),keydown:k.proxy(this.keydown,this)}],[this.component,{click:k.proxy(this.show,this)}]]}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:k.proxy(this.show,this)}]]}}}this._events.push([this.element,"*",{blur:k.proxy(function(s){this._focused_from=s.target},this)}],[this.element,{blur:k.proxy(function(s){this._focused_from=s.target},this)}]);this._secondaryEvents=[[this.picker,{click:k.proxy(this.click,this)}],[k(window),{resize:k.proxy(this.place,this)}],[k(document),{"mousedown touchstart":k.proxy(function(s){if(!(this.element.is(s.target)||this.element.find(s.target).length||this.picker.is(s.target)||this.picker.find(s.target).length)){this.hide()}},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(v,w){var u=w||this.dates.get(-1),s=this._utc_to_local(u);this.element.trigger({type:v,date:s,dates:k.map(this.dates,this._utc_to_local),format:k.proxy(function(x,z){if(arguments.length===0){x=this.dates.length-1;z=this.o.format}else{if(typeof x==="string"){z=x;x=this.dates.length-1}}z=z||this.o.format;var y=this.dates.get(x);return n.formatDate(y,z,this.o.language)},this)})},show:function(){if(!this.isInline){this.picker.appendTo("body")}this.picker.show();this.place();this._attachSecondaryEvents();this._trigger("show")},hide:function(){if(this.isInline){return}if(!this.picker.is(":visible")){return}this.focusDate=null;this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this._trigger("hide")},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date}},_utc_to_local:function(s){return s&&new Date(s.getTime()+(s.getTimezoneOffset()*60000))},_local_to_utc:function(s){return s&&new Date(s.getTime()-(s.getTimezoneOffset()*60000))},_zero_time:function(s){return s&&new Date(s.getFullYear(),s.getMonth(),s.getDate())},_zero_utc_time:function(s){return s&&new Date(Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()))},getDates:function(){return k.map(this.dates,this._utc_to_local)},getUTCDates:function(){return k.map(this.dates,function(s){return new Date(s)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){return new Date(this.dates.get(-1))},setDates:function(){var s=k.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,s);this._trigger("changeDate");this.setValue()},setUTCDates:function(){var s=k.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,k.map(s,this._utc_to_local));this._trigger("changeDate");this.setValue()},setDate:m("setDates"),setUTCDate:m("setUTCDates"),setValue:function(){var s=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(s).change()}}else{this.element.val(s).change()}},getFormattedDate:function(s){if(s===g){s=this.o.format}var u=this.o.language;return k.map(this.dates,function(v){return n.formatDate(v,s,u)}).join(this.o.multidateSeparator)},setStartDate:function(s){this._process_options({startDate:s});this.update();this.updateNavArrows()},setEndDate:function(s){this._process_options({endDate:s});this.update();this.updateNavArrows()},setDaysOfWeekDisabled:function(s){this._process_options({daysOfWeekDisabled:s});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}var H=this.picker.outerWidth(),D=this.picker.outerHeight(),x=10,z=d.width(),u=d.height(),y=d.scrollTop();var F=parseInt(this.element.parents().filter(function(){return k(this).css("z-index")!=="auto"}).first().css("z-index"))+10;var C=this.component?this.component.parent().offset():this.element.offset();var G=this.component?this.component.outerHeight(true):this.element.outerHeight(false);var w=this.component?this.component.outerWidth(true):this.element.outerWidth(false);var B=C.left,E=C.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");if(this.o.orientation.x!=="auto"){this.picker.addClass("datepicker-orient-"+this.o.orientation.x);if(this.o.orientation.x==="right"){B-=H-w}}else{this.picker.addClass("datepicker-orient-left");if(C.left<0){B-=C.left-x}else{if(C.left+H>z){B=z-H-x}}}var s=this.o.orientation.y,v,A;if(s==="auto"){v=-y+C.top-D;A=y+u-(C.top+G+D);if(Math.max(v,A)===A){s="top"}else{s="bottom"}}this.picker.addClass("datepicker-orient-"+s);if(s==="top"){E+=G}else{E-=D+parseInt(this.picker.css("padding-top"))}this.picker.css({top:E,left:B,zIndex:F})},_allow_update:true,update:function(){if(!this._allow_update){return}var u=this.dates.copy(),v=[],s=false;if(arguments.length){k.each(arguments,k.proxy(function(x,w){if(w instanceof Date){w=this._local_to_utc(w)}v.push(w)},this));s=true}else{v=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val();if(v&&this.o.multidate){v=v.split(this.o.multidateSeparator)}else{v=[v]}delete this.element.data().date}v=k.map(v,k.proxy(function(w){return n.parseDate(w,this.o.format,this.o.language)},this));v=k.grep(v,k.proxy(function(w){return(w<this.o.startDate||w>this.o.endDate||!w)},this),true);this.dates.replace(v);if(this.dates.length){this.viewDate=new Date(this.dates.get(-1))}else{if(this.viewDate<this.o.startDate){this.viewDate=new Date(this.o.startDate)}else{if(this.viewDate>this.o.endDate){this.viewDate=new Date(this.o.endDate)}}}if(s){this.setValue()}else{if(v.length){if(String(u)!==String(this.dates)){this._trigger("changeDate")}}}if(!this.dates.length&&u.length){this._trigger("clearDate")}this.fill()},fillDow:function(){var u=this.o.weekStart,v="<tr>";if(this.o.calendarWeeks){var s='<th class="cw">&nbsp;</th>';v+=s;this.picker.find(".datepicker-days thead tr:first-child").prepend(s)}while(u<this.o.weekStart+7){v+='<th class="dow">'+c[this.o.language].daysMin[(u++)%7]+"</th>"}v+="</tr>";this.picker.find(".datepicker-days thead").append(v)},fillMonths:function(){var u="",s=0;while(s<12){u+='<span class="month">'+c[this.o.language].monthsShort[s++]+"</span>"}this.picker.find(".datepicker-months td").html(u)},setRange:function(s){if(!s||!s.length){delete this.range}else{this.range=k.map(s,function(u){return u.valueOf()})}this.fill()},getClassNames:function(v){var s=[],w=this.viewDate.getUTCFullYear(),x=this.viewDate.getUTCMonth(),u=new Date();if(v.getUTCFullYear()<w||(v.getUTCFullYear()===w&&v.getUTCMonth()<x)){s.push("old")}else{if(v.getUTCFullYear()>w||(v.getUTCFullYear()===w&&v.getUTCMonth()>x)){s.push("new")}}if(this.focusDate&&v.valueOf()===this.focusDate.valueOf()){s.push("focused")}if(this.o.todayHighlight&&v.getUTCFullYear()===u.getFullYear()&&v.getUTCMonth()===u.getMonth()&&v.getUTCDate()===u.getDate()){s.push("today")}if(this.dates.contains(v)!==-1){s.push("active")}if(v.valueOf()<this.o.startDate||v.valueOf()>this.o.endDate||k.inArray(v.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){s.push("disabled")}if(this.range){if(v>this.range[0]&&v<this.range[this.range.length-1]){s.push("range")}if(k.inArray(v.valueOf(),this.range)!==-1){s.push("selected")}}return s},fill:function(){var O=new Date(this.viewDate),D=O.getUTCFullYear(),P=O.getUTCMonth(),I=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,M=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,A=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,J=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,B=c[this.o.language].today||c.en.today||"",v=c[this.o.language].clear||c.en.clear||"",x;this.picker.find(".datepicker-days thead th.datepicker-switch").text(c[this.o.language].months[P]+" "+D);this.picker.find("tfoot th.today").text(B).toggle(this.o.todayBtn!==false);this.picker.find("tfoot th.clear").text(v).toggle(this.o.clearBtn!==false);this.updateNavArrows();this.fillMonths();var R=o(D,P-1,28),L=n.getDaysInMonth(R.getUTCFullYear(),R.getUTCMonth());R.setUTCDate(L);R.setUTCDate(L-(R.getUTCDay()-this.o.weekStart+7)%7);var s=new Date(R);s.setUTCDate(s.getUTCDate()+42);s=s.valueOf();var C=[];var G;while(R.valueOf()<s){if(R.getUTCDay()===this.o.weekStart){C.push("<tr>");if(this.o.calendarWeeks){var u=new Date(+R+(this.o.weekStart-R.getUTCDay()-7)%7*86400000),y=new Date(Number(u)+(7+4-u.getUTCDay())%7*86400000),w=new Date(Number(w=o(y.getUTCFullYear(),0,1))+(7+4-w.getUTCDay())%7*86400000),E=(y-w)/86400000/7+1;C.push('<td class="cw">'+E+"</td>")}}G=this.getClassNames(R);G.push("day");if(this.o.beforeShowDay!==k.noop){var F=this.o.beforeShowDay(this._utc_to_local(R));if(F===g){F={}}else{if(typeof(F)==="boolean"){F={enabled:F}}else{if(typeof(F)==="string"){F={classes:F}}}}if(F.enabled===false){G.push("disabled")}if(F.classes){G=G.concat(F.classes.split(/\s+/))}if(F.tooltip){x=F.tooltip}}G=k.unique(G);C.push('<td class="'+G.join(" ")+'"'+(x?' title="'+x+'"':"")+">"+R.getUTCDate()+"</td>");if(R.getUTCDay()===this.o.weekEnd){C.push("</tr>")}R.setUTCDate(R.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(C.join(""));var z=this.picker.find(".datepicker-months").find("th:eq(1)").text(D).end().find("span").removeClass("active");k.each(this.dates,function(S,T){if(T.getUTCFullYear()===D){z.eq(T.getUTCMonth()).addClass("active")}});if(D<I||D>A){z.addClass("disabled")}if(D===I){z.slice(0,M).addClass("disabled")}if(D===A){z.slice(J+1).addClass("disabled")}C="";D=parseInt(D/10,10)*10;var Q=this.picker.find(".datepicker-years").find("th:eq(1)").text(D+"-"+(D+9)).end().find("td");D-=1;var H=k.map(this.dates,function(S){return S.getUTCFullYear()}),N;for(var K=-1;K<11;K++){N=["year"];if(K===-1){N.push("old")}else{if(K===10){N.push("new")}}if(k.inArray(D,H)!==-1){N.push("active")}if(D<I||D>A){N.push("disabled")}C+='<span class="'+N.join(" ")+'">'+D+"</span>";D+=1}Q.html(C)},updateNavArrows:function(){if(!this._allow_update){return}var v=new Date(this.viewDate),s=v.getUTCFullYear(),u=v.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&s<=this.o.startDate.getUTCFullYear()&&u<=this.o.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&s>=this.o.endDate.getUTCFullYear()&&u>=this.o.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:case 2:if(this.o.startDate!==-Infinity&&s<=this.o.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&s>=this.o.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},click:function(x){x.preventDefault();var y=k(x.target).closest("span, td, th"),A,z,B;if(y.length===1){switch(y[0].nodeName.toLowerCase()){case"th":switch(y[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var s=n.modes[this.viewMode].navStep*(y[0].className==="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,s);this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,s);if(this.viewMode===1){this._trigger("changeYear",this.viewDate)}break}this.fill();break;case"today":var u=new Date();u=o(u.getFullYear(),u.getMonth(),u.getDate(),0,0,0);this.showMode(-2);var v=this.o.todayBtn==="linked"?null:"view";this._setDate(u,v);break;case"clear":var w;if(this.isInput){w=this.element}else{if(this.component){w=this.element.find("input")}}if(w){w.val("").change()}this.update();this._trigger("changeDate");if(this.o.autoclose){this.hide()}break}break;case"span":if(!y.is(".disabled")){this.viewDate.setUTCDate(1);if(y.is(".month")){B=1;z=y.parent().find("span").index(y);A=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(z);this._trigger("changeMonth",this.viewDate);if(this.o.minViewMode===1){this._setDate(o(A,z,B))}}else{B=1;z=0;A=parseInt(y.text(),10)||0;this.viewDate.setUTCFullYear(A);this._trigger("changeYear",this.viewDate);if(this.o.minViewMode===2){this._setDate(o(A,z,B))}}this.showMode(-1);this.fill()}break;case"td":if(y.is(".day")&&!y.is(".disabled")){B=parseInt(y.text(),10)||1;A=this.viewDate.getUTCFullYear();z=this.viewDate.getUTCMonth();if(y.is(".old")){if(z===0){z=11;A-=1}else{z-=1}}else{if(y.is(".new")){if(z===11){z=0;A+=1}else{z+=1}}}this._setDate(o(A,z,B))}break}}if(this.picker.is(":visible")&&this._focused_from){k(this._focused_from).focus()}delete this._focused_from},_toggle_multidate:function(u){var s=this.dates.contains(u);if(!u){this.dates.clear()}else{if(s!==-1){this.dates.remove(s)}else{this.dates.push(u)}}if(typeof this.o.multidate==="number"){while(this.dates.length>this.o.multidate){this.dates.remove(0)}}},_setDate:function(s,v){if(!v||v==="date"){this._toggle_multidate(s&&new Date(s))}if(!v||v==="view"){this.viewDate=s&&new Date(s)}this.fill();this.setValue();this._trigger("changeDate");var u;if(this.isInput){u=this.element}else{if(this.component){u=this.element.find("input")}}if(u){u.change()}if(this.o.autoclose&&(!v||v==="date")){this.hide()}},moveMonth:function(s,u){if(!s){return g}if(!u){return s}var x=new Date(s.valueOf()),B=x.getUTCDate(),y=x.getUTCMonth(),w=Math.abs(u),A,z;u=u>0?1:-1;if(w===1){z=u===-1?function(){return x.getUTCMonth()===y}:function(){return x.getUTCMonth()!==A};A=y+u;x.setUTCMonth(A);if(A<0||A>11){A=(A+12)%12}}else{for(var v=0;v<w;v++){x=this.moveMonth(x,u)}A=x.getUTCMonth();x.setUTCDate(B);z=function(){return A!==x.getUTCMonth()}}while(z()){x.setUTCDate(--B);x.setUTCMonth(A)}return x},moveYear:function(u,s){return this.moveMonth(u,s*12)},dateWithinRange:function(s){return s>=this.o.startDate&&s<=this.o.endDate},keydown:function(z){if(this.picker.is(":not(:visible)")){if(z.keyCode===27){this.show()}return}var v=false,u,s,x,y=this.focusDate||this.viewDate;switch(z.keyCode){case 27:if(this.focusDate){this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill()}else{this.hide()}z.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation){break}u=z.keyCode===37?-1:1;if(z.ctrlKey){s=this.moveYear(this.dates.get(-1)||h(),u);x=this.moveYear(y,u);this._trigger("changeYear",this.viewDate)}else{if(z.shiftKey){s=this.moveMonth(this.dates.get(-1)||h(),u);x=this.moveMonth(y,u);this._trigger("changeMonth",this.viewDate)}else{s=new Date(this.dates.get(-1)||h());s.setUTCDate(s.getUTCDate()+u);x=new Date(y);x.setUTCDate(y.getUTCDate()+u)}}if(this.dateWithinRange(s)){this.focusDate=this.viewDate=x;this.setValue();this.fill();z.preventDefault()}break;case 38:case 40:if(!this.o.keyboardNavigation){break}u=z.keyCode===38?-1:1;if(z.ctrlKey){s=this.moveYear(this.dates.get(-1)||h(),u);x=this.moveYear(y,u);this._trigger("changeYear",this.viewDate)}else{if(z.shiftKey){s=this.moveMonth(this.dates.get(-1)||h(),u);x=this.moveMonth(y,u);this._trigger("changeMonth",this.viewDate)}else{s=new Date(this.dates.get(-1)||h());s.setUTCDate(s.getUTCDate()+u*7);x=new Date(y);x.setUTCDate(y.getUTCDate()+u*7)}}if(this.dateWithinRange(s)){this.focusDate=this.viewDate=x;this.setValue();this.fill();z.preventDefault()}break;case 32:break;case 13:y=this.focusDate||this.dates.get(-1)||this.viewDate;this._toggle_multidate(y);v=true;this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();if(this.picker.is(":visible")){z.preventDefault();if(this.o.autoclose){this.hide()}}break;case 9:this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide();break}if(v){if(this.dates.length){this._trigger("changeDate")}else{this._trigger("clearDate")}var w;if(this.isInput){w=this.element}else{if(this.component){w=this.element.find("input")}}if(w){w.change()}}},showMode:function(s){if(s){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+s))}this.picker.find(">div").hide().filter(".datepicker-"+n.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()}};var r=function(u,s){this.element=k(u);this.inputs=k.map(s.inputs,function(v){return v.jquery?v[0]:v});delete s.inputs;k(this.inputs).datepicker(s).bind("changeDate",k.proxy(this.dateUpdated,this));this.pickers=k.map(this.inputs,function(v){return k(v).data("datepicker")});this.updateDates()};r.prototype={updateDates:function(){this.dates=k.map(this.pickers,function(s){return s.getUTCDate()});this.updateRanges()},updateRanges:function(){var s=k.map(this.dates,function(u){return u.valueOf()});k.each(this.pickers,function(u,v){v.setRange(s)})},dateUpdated:function(w){if(this.updating){return}this.updating=true;var x=k(w.target).data("datepicker"),v=x.getUTCDate(),u=k.inArray(w.target,this.inputs),s=this.inputs.length;if(u===-1){return}k.each(this.pickers,function(y,z){if(!z.getUTCDate()){z.setUTCDate(v)}});if(v<this.dates[u]){while(u>=0&&v<this.dates[u]){this.pickers[u--].setUTCDate(v)}}else{if(v>this.dates[u]){while(u<s&&v>this.dates[u]){this.pickers[u++].setUTCDate(v)}}}this.updateDates();delete this.updating},remove:function(){k.map(this.pickers,function(s){s.remove()});delete this.element.data().datepicker}};function j(w,z){var y=k(w).data(),s={},x,v=new RegExp("^"+z.toLowerCase()+"([A-Z])");z=new RegExp("^"+z.toLowerCase());function A(C,B){return B.toLowerCase()}for(var u in y){if(z.test(u)){x=u.replace(v,A);s[x]=y[u]}}return s}function b(v){var s={};if(!c[v]){v=v.split("-")[0];if(!c[v]){return}}var u=c[v];k.each(q,function(x,w){if(w in u){s[w]=u[w]}});return s}var e=k.fn.datepicker;k.fn.datepicker=function(v){var s=Array.apply(null,arguments);s.shift();var u;this.each(function(){var D=k(this),B=D.data("datepicker"),x=typeof v==="object"&&v;if(!B){var z=j(this,"date"),w=k.extend({},i,z,x),y=b(w.language),A=k.extend({},i,y,z,x);if(D.is(".input-daterange")||A.inputs){var C={inputs:A.inputs||D.find("input").toArray()};D.data("datepicker",(B=new r(this,k.extend(A,C))))}else{D.data("datepicker",(B=new l(this,A)))}}if(typeof v==="string"&&typeof B[v]==="function"){u=B[v].apply(B,s);if(u!==g){return false}}});if(u!==g){return u}else{return this}};var i=k.fn.datepicker.defaults={autoclose:false,beforeShowDay:k.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:"mm/dd/yyyy",keyboardNavigation:true,language:"en",minViewMode:0,multidate:false,multidateSeparator:",",orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};var q=k.fn.datepicker.locale_opts=["format","rtl","weekStart"];k.fn.datepicker.Constructor=l;var c=k.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};var n={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(s){return(((s%4===0)&&(s%100!==0))||(s%400===0))},getDaysInMonth:function(s,u){return[31,(n.isLeapYear(s)?29:28),31,30,31,30,31,31,30,31,30,31][u]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(v){var s=v.replace(this.validParts,"\0").split("\0"),u=v.match(this.validParts);if(!s||!s.length||!u||u.length===0){throw new Error("Invalid date format.")}return{separators:s,parts:u}},parseDate:function(K,H,E){if(!K){return g}if(K instanceof Date){return K}if(typeof H==="string"){H=n.parseFormat(H)}var w=/([\-+]\d+)([dmwy])/,C=K.match(/([\-+]\d+)([dmwy])/g),D,B,G;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(K)){K=new Date();for(G=0;G<C.length;G++){D=w.exec(C[G]);B=parseInt(D[1]);switch(D[2]){case"d":K.setUTCDate(K.getUTCDate()+B);break;case"m":K=l.prototype.moveMonth.call(l.prototype,K,B);break;case"w":K.setUTCDate(K.getUTCDate()+B*7);break;case"y":K=l.prototype.moveYear.call(l.prototype,K,B);break}}return o(K.getUTCFullYear(),K.getUTCMonth(),K.getUTCDate(),0,0,0)}C=K&&K.match(this.nonpunctuation)||[];K=new Date();var x={},I=["yyyy","yy","M","MM","m","mm","d","dd"],A={yyyy:function(M,s){return M.setUTCFullYear(s)},yy:function(M,s){return M.setUTCFullYear(2000+s)},m:function(M,s){if(isNaN(M)){return M}s-=1;while(s<0){s+=12}s%=12;M.setUTCMonth(s);while(M.getUTCMonth()!==s){M.setUTCDate(M.getUTCDate()-1)}return M},d:function(M,s){return M.setUTCDate(s)}},L,v;A.M=A.MM=A.mm=A.m;A.dd=A.d;K=o(K.getFullYear(),K.getMonth(),K.getDate(),0,0,0);var u=H.parts.slice();if(C.length!==u.length){u=k(u).filter(function(s,M){return k.inArray(M,I)!==-1}).toArray()}function J(){var s=this.slice(0,C[G].length),M=C[G].slice(0,s.length);return s===M}if(C.length===u.length){var F;for(G=0,F=u.length;G<F;G++){L=parseInt(C[G],10);D=u[G];if(isNaN(L)){switch(D){case"MM":v=k(c[E].months).filter(J);L=k.inArray(v[0],c[E].months)+1;break;case"M":v=k(c[E].monthsShort).filter(J);L=k.inArray(v[0],c[E].monthsShort)+1;break}}x[D]=L}var y,z;for(G=0;G<I.length;G++){z=I[G];if(z in x&&!isNaN(x[z])){y=new Date(K);A[z](y,x[z]);if(!isNaN(y)){K=y}}}}return K},formatDate:function(s,x,z){if(!s){return""}if(typeof x==="string"){x=n.parseFormat(x)}var y={d:s.getUTCDate(),D:c[z].daysShort[s.getUTCDay()],DD:c[z].days[s.getUTCDay()],m:s.getUTCMonth()+1,M:c[z].monthsShort[s.getUTCMonth()],MM:c[z].months[s.getUTCMonth()],yy:s.getUTCFullYear().toString().substring(2),yyyy:s.getUTCFullYear()};y.dd=(y.d<10?"0":"")+y.d;y.mm=(y.m<10?"0":"")+y.m;s=[];var w=k.extend([],x.separators);for(var v=0,u=x.parts.length;v<=u;v++){if(w.length){s.push(w.shift())}s.push(y[x.parts[v]])}return s.join("")},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};n.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+n.headTemplate+"<tbody></tbody>"+n.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+n.headTemplate+n.contTemplate+n.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+n.headTemplate+n.contTemplate+n.footTemplate+"</table></div></div>";k.fn.datepicker.DPGlobal=n;k.fn.datepicker.noConflict=function(){k.fn.datepicker=e;return this};k(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(u){var s=k(this);if(s.data("datepicker")){return}u.preventDefault();s.datepicker("show")});k(function(){k('[data-provide="datepicker-inline"]').datepicker()})}(window.jQuery));


/*!
 * Tabdrop
 */
!function(d){var c=(function(){var i=[];var e=false;var h;var f=function(j){clearTimeout(h);h=setTimeout(g,100)};var g=function(){for(var k=0,j=i.length;k<j;k++){i[k].apply()}};return{register:function(j){i.push(j);if(e===false){d(window).bind("resize",f);e=true}},unregister:function(l){for(var k=0,j=i.length;k<j;k++){if(i[k]==l){delete i[k];break}}}}}());var b=function(f,e){this.element=d(f);this.dropdown=d('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+e.text+' <b class="caret"></b></a><ul class="dropdown-menu"></ul></li>').prependTo(this.element);if(this.element.parent().is(".tabs-below")){this.dropdown.addClass("dropup")}c.register(d.proxy(this.layout,this));this.layout()};b.prototype={constructor:b,layout:function(){var e=[];this.dropdown.removeClass("hide");this.element.append(this.dropdown.find("li")).find(">li").not(".tabdrop").each(function(){if(this.offsetTop>0){e.push(this)}});if(e.length>0){e=d(e);this.dropdown.find("ul").empty().append(e);if(this.dropdown.find(".active").length==1){this.dropdown.addClass("active")}else{this.dropdown.removeClass("active")}}else{this.dropdown.addClass("hide")}}};d.fn.tabdrop=function(e){return this.each(function(){var h=d(this),g=h.data("tabdrop"),f=typeof e==="object"&&e;if(!g){h.data("tabdrop",(g=new b(this,d.extend({},d.fn.tabdrop.defaults,f))))}if(typeof e=="string"){g[e]()}})};d.fn.tabdrop.defaults={text:'<i class="icon-align-justify"></i>'};d.fn.tabdrop.Constructor=b}(window.jQuery);


/*!
 * Input Mast
 */
!function(g){function i(){var k=document.createElement("input"),j="onpaste";return k.setAttribute(j,""),"function"==typeof k[j]?"paste":"input"}var h,d=i()+".mask",f=navigator.userAgent,e=/iphone/i.test(f),b=/chrome/i.test(f),c=/android/i.test(f);g.mask={definitions:{"9":"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},g.fn.extend({caret:function(l,j){var k;if(0!==this.length&&!this.is(":hidden")){return"number"==typeof l?(j="number"==typeof j?j:l,this.each(function(){this.setSelectionRange?this.setSelectionRange(l,j):this.createTextRange&&(k=this.createTextRange(),k.collapse(!0),k.moveEnd("character",j),k.moveStart("character",l),k.select())})):(this[0].setSelectionRange?(l=this[0].selectionStart,j=this[0].selectionEnd):document.selection&&document.selection.createRange&&(k=document.selection.createRange(),l=0-k.duplicate().moveStart("character",-100000),j=l+k.text.length),{begin:l,end:j})}},unmask:function(){return this.trigger("unmask")},mask:function(l,q){var m,k,o,r,n,j;return!l&&this.length>0?(m=g(this[0]),m.data(g.mask.dataName)()):(q=g.extend({autoclear:g.mask.autoclear,placeholder:g.mask.placeholder,completed:null},q),k=g.mask.definitions,o=[],r=j=l.length,n=null,g.each(l.split(""),function(s,u){"?"==u?(j--,r=s):k[u]?(o.push(new RegExp(k[u])),null===n&&(n=o.length-1)):o.push(null)}),this.trigger("unmask").each(function(){function C(G){for(;++G<j&&!o[G];){}return G}function y(G){for(;--G>=0&&!o[G];){}return G}function w(J,G){var I,H;if(!(0>J)){for(I=J,H=C(G);j>I;I++){if(o[I]){if(!(j>H&&o[I].test(x[H]))){break}x[I]=x[H],x[H]=q.placeholder,H=C(H)}}B(),D.caret(Math.max(n,J))}}function s(K){var I,J,G,H;for(I=K,J=q.placeholder;j>I;I++){if(o[I]){if(G=C(I),H=x[I],x[I]=J,!(j>G&&o[G].test(H))){break}J=H}}}function z(J){var K,I,G,H=J.which;8===H||46===H||e&&127===H?(K=D.caret(),I=K.begin,G=K.end,0===G-I&&(I=46!==H?y(I):G=C(I-1),G=46===H?C(G):G),u(I,G),w(I,G-1),J.preventDefault()):27==H&&(D.val(F),D.caret(0,v()),J.preventDefault())}function E(J){var I,L,H,G=J.which,K=D.caret();if(0==G){if(K.begin>=j){return D.val(D.val().substr(0,j)),J.preventDefault(),!1}K.begin==K.end&&(G=D.val().charCodeAt(K.begin-1),K.begin--,K.end--)}J.ctrlKey||J.altKey||J.metaKey||32>G||G&&(0!==K.end-K.begin&&(u(K.begin,K.end),w(K.begin,K.end-1)),I=C(K.begin-1),j>I&&(L=String.fromCharCode(G),o[I].test(L)&&(s(I),x[I]=L,B(),H=C(I),c?setTimeout(g.proxy(g.fn.caret,D,H),0):D.caret(H),q.completed&&H>=j&&q.completed.call(D))),J.preventDefault())}function u(I,G){var H;for(H=I;G>H&&j>H;H++){o[H]&&(x[H]=q.placeholder)}}function B(){D.val(x.join(""))}function v(H){var G,L,K,J=D.val(),I=-1;for(G=0,K=0;j>G;G++){if(o[G]){for(x[G]=q.placeholder;K++<J.length;){if(L=J.charAt(K-1),o[G].test(L)){x[G]=L,I=G;break}}if(K>J.length){break}}else{x[G]===J.charAt(K)&&G!==r&&(K++,I=G)}}return H?B():r>I+1?q.autoclear||x.join("")===A?(D.val(""),u(0,j)):B():(B(),D.val(D.val().substring(0,I+1))),r?G:n}var D=g(this),x=g.map(l.split(""),function(G){return"?"!=G?k[G]?q.placeholder:G:void 0}),A=x.join(""),F=D.val();D.data(g.mask.dataName,function(){return g.map(x,function(H,G){return o[G]&&H!=q.placeholder?H:null}).join("")}),D.attr("readonly")||D.one("unmask",function(){D.unbind(".mask").removeData(g.mask.dataName)}).bind("focus.mask",function(){clearTimeout(h);var G;F=D.val(),G=v(),h=setTimeout(function(){B(),G==l.length?D.caret(0,G):D.caret(G)},10)}).bind("blur.mask",function(){v(),D.val()!=F&&D.change()}).bind("keydown.mask",z).bind("keypress.mask",E).bind(d,function(){setTimeout(function(){var G=v(!0);D.caret(G),q.completed&&G==D.val().length&&q.completed.call(D)},0)}),b&&c&&D.bind("keyup.mask",E),v()}))}})}(jQuery);


/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2
 *
 */
(function(b){jQuery.fn.extend({slimScroll:function(c){var d={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:false,disableFadeOut:false,railVisible:false,railColor:"#333",railOpacity:0.2,railDraggable:true,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:false,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"};var e=b.extend(d,c);this.each(function(){var z,u,l,r,C,v,q,k,m="<div></div>",w=30,s=false;var D=b(this);if(D.parent().hasClass(e.wrapperClass)){var i=D.scrollTop();x=D.parent().find("."+e.barClass);f=D.parent().find("."+e.railClass);E();if(b.isPlainObject(c)){if("height"in c&&c.height=="auto"){D.parent().css("height","auto");D.css("height","auto");var o=D.parent().parent().height();D.parent().css("height",o);D.css("height",o)}if("scrollTo"in c){i=parseInt(e.scrollTo)}else{if("scrollBy"in c){i+=parseInt(e.scrollBy)}else{if("destroy"in c){x.remove();f.remove();D.unwrap();return}}}y(i,false,true)}return}e.height=(c.height=="auto")?D.parent().height():c.height;var j=b(m).addClass(e.wrapperClass).css({position:"relative",overflow:"hidden",width:e.width,height:e.height});D.css({overflow:"hidden",width:e.width,height:e.height});var f=b(m).addClass(e.railClass).css({width:e.size,height:"100%",position:"absolute",top:0,display:(e.alwaysVisible&&e.railVisible)?"block":"none","border-radius":e.railBorderRadius,background:e.railColor,opacity:e.railOpacity,zIndex:90});var x=b(m).addClass(e.barClass).css({background:e.color,width:e.size,position:"absolute",top:0,opacity:e.opacity,display:e.alwaysVisible?"block":"none","border-radius":e.borderRadius,BorderRadius:e.borderRadius,MozBorderRadius:e.borderRadius,WebkitBorderRadius:e.borderRadius,zIndex:99});var g=(e.position=="right")?{right:e.distance}:{left:e.distance};f.css(g);x.css(g);D.wrap(j);D.parent().append(x);D.parent().append(f);if(e.railDraggable){x.bind("mousedown",function(F){var G=b(document);l=true;t=parseFloat(x.css("top"));pageY=F.pageY;G.bind("mousemove.slimscroll",function(H){currTop=t+H.pageY-pageY;x.css("top",currTop);y(0,x.position().top,false)});G.bind("mouseup.slimscroll",function(H){l=false;n();G.unbind(".slimscroll")});return false}).bind("selectstart.slimscroll",function(F){F.stopPropagation();F.preventDefault();return false})}f.hover(function(){h()},function(){n()});x.hover(function(){u=true},function(){u=false});D.hover(function(){z=true;h();n()},function(){z=false;n()});D.bind("touchstart",function(G,F){if(G.originalEvent.touches.length){C=G.originalEvent.touches[0].pageY}});D.bind("touchmove",function(G){if(!s){G.originalEvent.preventDefault()}if(G.originalEvent.touches.length){var F=(C-G.originalEvent.touches[0].pageY)/e.touchScrollStep;y(F,true);C=G.originalEvent.touches[0].pageY}});E();if(e.start==="bottom"){x.css({top:D.outerHeight()-x.outerHeight()});y(0,true)}else{if(e.start!=="top"){y(b(e.start).position().top,null,true);if(!e.alwaysVisible){x.hide()}}}A();function B(G){if(!z){return}var G=G||window.event;var H=0;if(G.wheelDelta){H=-G.wheelDelta/120}if(G.detail){H=G.detail/3}var F=G.target||G.srcTarget||G.srcElement;if(b(F).closest("."+e.wrapperClass).is(D.parent())){y(H,true)}if(G.preventDefault&&!s){G.preventDefault()}if(!s){G.returnValue=false}}function y(K,H,F){s=false;var J=K;var I=D.outerHeight()-x.outerHeight();if(H){J=parseInt(x.css("top"))+K*parseInt(e.wheelStep)/100*x.outerHeight();J=Math.min(Math.max(J,0),I);J=(K>0)?Math.ceil(J):Math.floor(J);x.css({top:J+"px"})}q=parseInt(x.css("top"))/(D.outerHeight()-x.outerHeight());J=q*(D[0].scrollHeight-D.outerHeight());if(F){J=K;var G=J/D[0].scrollHeight*D.outerHeight();G=Math.min(Math.max(G,0),I);x.css({top:G+"px"})}D.scrollTop(J);D.trigger("slimscrolling",~~J);h();n()}function A(){if(window.addEventListener){this.addEventListener("DOMMouseScroll",B,false);this.addEventListener("mousewheel",B,false)}else{document.attachEvent("onmousewheel",B)}}function E(){v=Math.max((D.outerHeight()/D[0].scrollHeight)*D.outerHeight(),w);x.css({height:v+"px"});var F=v==D.outerHeight()?"none":"block";x.css({display:F})}function h(){E();clearTimeout(r);if(q==~~q){s=e.allowPageScroll;if(k!=q){var F=(~~q==0)?"top":"bottom";D.trigger("slimscroll",F)}}else{s=false}k=q;if(v>=D.outerHeight()){s=true;return}x.stop(true,true).fadeIn("fast");if(e.railVisible){f.stop(true,true).fadeIn("fast")}}function n(){if(!e.alwaysVisible){r=setTimeout(function(){if(!(e.disableFadeOut&&z)&&!u&&!l){x.fadeOut("slow");f.fadeOut("slow")}},1000)}}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);

/*!
 * Moment
 */
(function(E){var R,aB="2.5.1",A=this,W=Math.round,ac,w=0,f=1,aQ=2,v=3,av=4,s=5,T=6,ax={},aK={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},al=(typeof module!=="undefined"&&module.exports&&typeof require!=="undefined"),c=/^\/?Date\((\-?\d+)/i,aZ=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,aD=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,ao=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,ab=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,g=/\d\d?/,ad=/\d{1,3}/,F=/\d{1,4}/,a6=/[+\-]?\d{1,6}/,aV=/\d+/,J=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,o=/Z|[\+\-]\d\d:?\d\d/gi,k=/T/i,aN=/[\+\-]?\d+(\.\d{1,3})?/,a8=/\d{1,2}/,aa=/\d/,q=/\d\d/,aY=/\d{3}/,aM=/\d{4}/,ah=/[+-]?\d{6}/,Y=/[+-]?\d+/,aJ=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,U="YYYY-MM-DDTHH:mm:ssZ",aX=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],H=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Z=/([\+\-]|\d\d)/gi,aE="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),D={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},d={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},aU={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ak={},aP="DDD w W M D d".split(" "),am="M D H h m s w W".split(" "),aR={M:function(){return this.month()+1},MMM:function(i){return this.lang().monthsShort(this,i)},MMMM:function(i){return this.lang().months(this,i)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(i){return this.lang().weekdaysMin(this,i)},ddd:function(i){return this.lang().weekdaysShort(this,i)},dddd:function(i){return this.lang().weekdays(this,i)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},YYYYY:function(){return K(this.year(),5)},YYYYYY:function(){var a=this.year(),i=a>=0?"+":"-";return i+K(Math.abs(a),6)},gg:function(){return K(this.weekYear()%100,2)},gggg:function(){return K(this.weekYear(),4)},ggggg:function(){return K(this.weekYear(),5)},GG:function(){return K(this.isoWeekYear()%100,2)},GGGG:function(){return K(this.isoWeekYear(),4)},GGGGG:function(){return K(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return M(this.milliseconds()/100)},SS:function(){return K(M(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},SSSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),i="+";if(a<0){a=-a;i="-"}return i+K(M(a/60),2)+":"+K(M(a)%60,2)},ZZ:function(){var a=-this.zone(),i="+";if(a<0){a=-a;i="-"}return i+K(M(a/60),2)+K(M(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},V=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];function af(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function O(b,i){return function(a){return K(b.call(this,a),i)}}function h(i,b){return function(a){return this.lang().ordinal(i.call(this,a),b)}}while(aP.length){ac=aP.pop();aR[ac+"o"]=h(aR[ac],ac)}while(am.length){ac=am.pop();aR[ac+ac]=O(aR[ac],2)}aR.DDDD=O(aR.DDD,3);function aG(){}function L(i){a3(i);az(this,i)}function ae(a){var b=m(a),bd=b.year||0,a9=b.month||0,i=b.week||0,bh=b.day||0,bf=b.hour||0,bc=b.minute||0,bg=b.second||0,ba=b.millisecond||0;this._milliseconds=+ba+bg*1000+bc*60000+bf*3600000;this._days=+bh+i*7;this._months=+a9+bd*12;this._data={};this._bubble()}function az(a,b){for(var c in b){if(b.hasOwnProperty(c)){a[c]=b[c]}}if(b.hasOwnProperty("toString")){a.toString=b.toString}if(b.hasOwnProperty("valueOf")){a.valueOf=b.valueOf}return a}function a5(a){var b={},bb;for(bb in a){if(a.hasOwnProperty(bb)&&aK.hasOwnProperty(bb)){b[bb]=a[bb]}}return b}function l(i){if(i<0){return Math.ceil(i)}else{return Math.floor(i)}}function K(a,b,c){var d=""+Math.abs(a),i=a>=0;while(d.length<b){d="0"+d}return(i?(c?"+":""):"-")+d}function G(a,b,c,d){var e=b._milliseconds,bg=b._days,i=b._months,bc,bf;if(e){a._d.setTime(+a._d+e*c)}if(bg||i){bc=a.minute();bf=a.hour()}if(bg){a.date(a.date()+bg*c)}if(i){a.month(a.month()+i*c)}if(e&&!d){R.updateOffset(a,bg||i)}if(bg||i){a.minute(bc);a.hour(bf)}}function b(i){return Object.prototype.toString.call(i)==="[object Array]"}function e(i){return Object.prototype.toString.call(i)==="[object Date]"||i instanceof Date}function aO(a,b,c){var d=Math.min(a.length,b.length),bb=Math.abs(a.length-b.length),bf=0,bc;for(bc=0;bc<d;bc++){if((c&&a[bc]!==b[bc])||(!c&&M(a[bc])!==M(b[bc]))){bf++}}return bf+bb}function aT(a){if(a){var i=a.toLowerCase().replace(/(.)s$/,"$1");a=d[a]||aU[i]||i}return a}function m(a){var b={},i,bb;for(bb in a){if(a.hasOwnProperty(bb)){i=aT(bb);if(i){b[i]=a[bb]}}}return b}function ar(f){var i,ba;if(f.indexOf("week")===0){i=7;ba="day"}else{if(f.indexOf("month")===0){i=12;ba="month"}else{return}}R[f]=function(c,d){var e,bb,bg=R.fn._lang[f],bd=[];if(typeof c==="number"){d=c;c=E}bb=function(a){var b=R().utc().set(ba,a);return bg.call(R.fn._lang,b,c||"")};if(d!=null){return bb(d)}else{for(e=0;e<i;e++){bd.push(bb(e))}return bd}}}function M(i){var a=+i,a9=0;if(a!==0&&isFinite(a)){if(a>=0){a9=Math.floor(a)}else{a9=Math.ceil(a)}}return a9}function a1(i,a){return new Date(Date.UTC(i,a+1,0)).getUTCDate()}function aF(i,a,b){return B(R([i,11,31+a-b]),a,b).week}function aW(i){return aI(i)?366:365}function aI(i){return(i%4===0&&i%100!==0)||i%400===0}function a3(i){var a;if(i._a&&i._pf.overflow===-2){a=i._a[f]<0||i._a[f]>11?f:i._a[aQ]<1||i._a[aQ]>a1(i._a[w],i._a[f])?aQ:i._a[v]<0||i._a[v]>23?v:i._a[av]<0||i._a[av]>59?av:i._a[s]<0||i._a[s]>59?s:i._a[T]<0||i._a[T]>999?T:-1;if(i._pf._overflowDayOfYear&&(a<w||a>aQ)){a=aQ}i._pf.overflow=a}}function aA(i){if(i._isValid==null){i._isValid=!isNaN(i._d.getTime())&&i._pf.overflow<0&&!i._pf.empty&&!i._pf.invalidMonth&&!i._pf.nullInput&&!i._pf.invalidFormat&&!i._pf.userInvalidated;if(i._strict){i._isValid=i._isValid&&i._pf.charsLeftOver===0&&i._pf.unusedTokens.length===0}}return i._isValid}function C(i){return i?i.toLowerCase().replace("_","-"):i}function x(i,a){return a._isUTC?R(i).zone(a._offset||0):R(i).local()}az(aG.prototype,{set:function(a){var b,ba;for(ba in a){b=a[ba];if(typeof b==="function"){this[ba]=b}else{this["_"+ba]=b}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(i){return this._months[i.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(i){return this._monthsShort[i.month()]},monthsParse:function(a){var b,bc,bb;if(!this._monthsParse){this._monthsParse=[]}for(b=0;b<12;b++){if(!this._monthsParse[b]){bc=R.utc([2000,b]);bb="^"+this.months(bc,"")+"|^"+this.monthsShort(bc,"");this._monthsParse[b]=new RegExp(bb.replace(".",""),"i")}if(this._monthsParse[b].test(a)){return b}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(i){return this._weekdays[i.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(i){return this._weekdaysShort[i.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(i){return this._weekdaysMin[i.day()]},weekdaysParse:function(a){var b,bb,ba;if(!this._weekdaysParse){this._weekdaysParse=[]}for(b=0;b<7;b++){if(!this._weekdaysParse[b]){bb=R([2000,1]).day(b);ba="^"+this.weekdays(bb,"")+"|^"+this.weekdaysShort(bb,"")+"|^"+this.weekdaysMin(bb,"");this._weekdaysParse[b]=new RegExp(ba.replace(".",""),"i")}if(this._weekdaysParse[b].test(a)){return b}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(b){var i=this._longDateFormat[b];if(!i&&this._longDateFormat[b.toUpperCase()]){i=this._longDateFormat[b.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)});this._longDateFormat[b]=i}return i},isPM:function(i){return((i+"").toLowerCase().charAt(0)==="p")},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(i,a,b){if(i>11){return b?"pm":"PM"}else{return b?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var i=this._calendar[a];return typeof i==="function"?i.apply(b):i},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var i=this._relativeTime[c];return(typeof i==="function")?i(a,b,c,d):i.replace(/%d/i,a)},pastFuture:function(a,i){var b=this._relativeTime[a>0?"future":"past"];return typeof b==="function"?b(i):b.replace(/%s/i,i)},ordinal:function(i){return this._ordinal.replace("%d",i)},_ordinal:"%d",preparse:function(i){return i},postformat:function(i){return i},week:function(i){return B(i,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});function aj(a,i){i.abbr=a;if(!ax[a]){ax[a]=new aG()}ax[a].set(i);return ax[a]}function a0(i){delete ax[i]}function ay(a){var c=0,ba,bf,be,bb,a9=function(i){if(!ax[i]&&al){try{require("./lang/"+i)}catch(bg){}}return ax[i]};if(!a){return R.fn._lang}if(!b(a)){bf=a9(a);if(bf){return bf}a=[a]}while(c<a.length){bb=C(a[c]).split("-");ba=bb.length;be=C(a[c+1]);be=be?be.split("-"):null;while(ba>0){bf=a9(bb.slice(0,ba).join("-"));if(bf){return bf}if(be&&be.length>=ba&&aO(bb,be,true)>=ba-1){break}ba--}c++}return R.fn._lang}function ai(i){if(i.match(/\[[\s\S]/)){return i.replace(/^\[|\]$/g,"")}return i.replace(/\\/g,"")}function r(b){var c=b.match(ao),a9,ba;for(a9=0,ba=c.length;a9<ba;a9++){if(aR[c[a9]]){c[a9]=aR[c[a9]]}else{c[a9]=ai(c[a9])}}return function(a){var i="";for(a9=0;a9<ba;a9++){i+=c[a9]instanceof Function?c[a9].call(a,b):c[a9]}return i}}function an(i,a){if(!i.isValid()){return i.lang().invalidDate()}a=a7(a,i.lang());if(!ak[a]){ak[a]=r(a)}return ak[a](i)}function a7(a,b){var c=5;function ba(i){return b.longDateFormat(i)||i}ab.lastIndex=0;while(c>=0&&ab.test(a)){a=a.replace(ab,ba);ab.lastIndex=0;c-=1}return a}function aq(a,b){var c,i=b._strict;switch(a){case"DDDD":return aY;case"YYYY":case"GGGG":case"gggg":return i?aM:F;case"Y":case"G":case"g":return Y;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return i?ah:a6;case"S":if(i){return aa}case"SS":if(i){return q}case"SSS":if(i){return aY}case"DDD":return ad;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return J;case"a":case"A":return ay(b._l)._meridiemParse;case"X":return aN;case"Z":case"ZZ":return o;case"T":return k;case"SSSS":return aV;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return i?q:g;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return g;case"Do":return a8;default:c=new RegExp(a4(au(a.replace("\\","")),"i"));return c}}function y(a){a=a||"";var i=(a.match(o)||[]),bc=i[i.length-1]||[],bb=(bc+"").match(Z)||["-",0,0],ba=+(bb[1]*60)+M(bb[2]);return bb[0]==="+"?-ba:ba}function at(a,b,c){var d,i=c._a;switch(a){case"M":case"MM":if(b!=null){i[f]=M(b)-1}break;case"MMM":case"MMMM":d=ay(c._l).monthsParse(b);if(d!=null){i[f]=d}else{c._pf.invalidMonth=b}break;case"D":case"DD":if(b!=null){i[aQ]=M(b)}break;case"Do":if(b!=null){i[aQ]=M(parseInt(b,10))}break;case"DDD":case"DDDD":if(b!=null){c._dayOfYear=M(b)}break;case"YY":i[w]=M(b)+(M(b)>68?1900:2000);break;case"YYYY":case"YYYYY":case"YYYYYY":i[w]=M(b);break;case"a":case"A":c._isPm=ay(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":i[v]=M(b);break;case"m":case"mm":i[av]=M(b);break;case"s":case"ss":i[s]=M(b);break;case"S":case"SS":case"SSS":case"SSSS":i[T]=M(("0."+b)*1000);break;case"X":c._d=new Date(parseFloat(b)*1000);break;case"Z":case"ZZ":c._useUTC=true;c._tzm=y(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2);if(b){c._w=c._w||{};c._w[a]=b}break}}function ag(b){var c,be,bi=[],bb,bh,ba,bj,bk,bc,bg,a9;if(b._d){return}bb=n(b);if(b._w&&b._a[aQ]==null&&b._a[f]==null){ba=function(a){var i=parseInt(a,10);return a?(a.length<3?(i>68?1900+i:2000+i):i):(b._a[w]==null?R().weekYear():b._a[w])};bj=b._w;if(bj.GG!=null||bj.W!=null||bj.E!=null){bk=u(ba(bj.GG),bj.W||1,bj.E,4,1)}else{bc=ay(b._l);bg=bj.d!=null?a2(bj.d,bc):(bj.e!=null?parseInt(bj.e,10)+bc._week.dow:0);a9=parseInt(bj.w,10)||1;if(bj.d!=null&&bg<bc._week.dow){a9++}bk=u(ba(bj.gg),a9,bg,bc._week.doy,bc._week.dow)}b._a[w]=bk.year;b._dayOfYear=bk.dayOfYear}if(b._dayOfYear){bh=b._a[w]==null?bb[w]:b._a[w];if(b._dayOfYear>aW(bh)){b._pf._overflowDayOfYear=true}be=I(bh,0,b._dayOfYear);b._a[f]=be.getUTCMonth();b._a[aQ]=be.getUTCDate()}for(c=0;c<3&&b._a[c]==null;++c){b._a[c]=bi[c]=bb[c]}for(;c<7;c++){b._a[c]=bi[c]=(b._a[c]==null)?(c===2?1:0):b._a[c]}bi[v]+=M((b._tzm||0)/60);bi[av]+=M((b._tzm||0)%60);b._d=(b._useUTC?I:ap).apply(null,bi)}function aC(a){var i;if(a._d){return}i=m(a._i);a._a=[i.year,i.month,i.day,i.hour,i.minute,i.second,i.millisecond];ag(a)}function n(a){var i=new Date();if(a._useUTC){return[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]}else{return[i.getFullYear(),i.getMonth(),i.getDate()]}}function Q(a){a._a=[];a._pf.empty=true;var b=ay(a._l),bf=""+a._i,be,ba,bi,bd,bh,a9=bf.length,bg=0;bi=a7(a._f,b).match(ao)||[];for(be=0;be<bi.length;be++){bd=bi[be];ba=(bf.match(aq(bd,a))||[])[0];if(ba){bh=bf.substr(0,bf.indexOf(ba));if(bh.length>0){a._pf.unusedInput.push(bh)}bf=bf.slice(bf.indexOf(ba)+ba.length);bg+=ba.length}if(aR[bd]){if(ba){a._pf.empty=false}else{a._pf.unusedTokens.push(bd)}at(bd,ba,a)}else{if(a._strict&&!ba){a._pf.unusedTokens.push(bd)}}}a._pf.charsLeftOver=a9-bg;if(bf.length>0){a._pf.unusedInput.push(bf)}if(a._isPm&&a._a[v]<12){a._a[v]+=12}if(a._isPm===false&&a._a[v]===12){a._a[v]=0}ag(a);a3(a)}function au(i){return i.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function a4(i){return i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aS(a){var b,bb,bc,ba,be;if(a._f.length===0){a._pf.invalidFormat=true;a._d=new Date(NaN);return}for(ba=0;ba<a._f.length;ba++){be=0;b=az({},a);b._pf=af();b._f=a._f[ba];Q(b);if(!aA(b)){continue}be+=b._pf.charsLeftOver;be+=b._pf.unusedTokens.length*10;b._pf.score=be;if(bc==null||be<bc){bc=be;bb=b}}az(a,bb||b)}function j(a){var b,a9,bb=a._i,ba=aJ.exec(bb);if(ba){a._pf.iso=true;for(b=0,a9=aX.length;b<a9;b++){if(aX[b][1].exec(bb)){a._f=aX[b][0]+(ba[6]||" ");break}}for(b=0,a9=H.length;b<a9;b++){if(H[b][1].exec(bb)){a._f+=H[b][0];break}}if(bb.match(o)){a._f+="Z"}Q(a)}else{a._d=new Date(bb)}}function P(a){var d=a._i,i=c.exec(d);if(d===E){a._d=new Date()}else{if(i){a._d=new Date(+i[1])}else{if(typeof d==="string"){j(a)}else{if(b(d)){a._a=d.slice(0);ag(a)}else{if(e(d)){a._d=new Date(+d)}else{if(typeof(d)==="object"){aC(a)}else{a._d=new Date(d)}}}}}}}function ap(a,i,b,c,d,e,f){var g=new Date(a,i,b,c,d,e,f);if(a<1970){g.setFullYear(a)}return g}function I(a){var i=new Date(Date.UTC.apply(null,arguments));if(a<1970){i.setUTCFullYear(a)}return i}function a2(i,a){if(typeof i==="string"){if(!isNaN(i)){i=parseInt(i,10)}else{i=a.weekdaysParse(i);if(typeof i!=="number"){return null}}}return i}function aH(i,a,b,c,d){return d.relativeTime(a||1,!!b,i,c)}function z(a,i,b){var c=W(Math.abs(a)/1000),bb=W(c/60),be=W(bb/60),bg=W(be/24),bc=W(bg/365),bd=c<45&&["s",c]||bb===1&&["m"]||bb<45&&["mm",bb]||be===1&&["h"]||be<22&&["hh",be]||bg===1&&["d"]||bg<=25&&["dd",bg]||bg<=45&&["M"]||bg<345&&["MM",W(bg/30)]||bc===1&&["y"]||["yy",bc];bd[2]=i;bd[3]=a>0;bd[4]=b;return aH.apply({},bd)}function B(a,b,c){var d=c-b,i=c-a.day(),bb;if(i>d){i-=7}if(i<d-7){i+=7}bb=R(a).add("d",i);return{week:Math.ceil(bb.dayOfYear()/7),year:bb.year()}}function u(a,b,c,d,i){var e=I(a,0,1).getUTCDay(),ba,a9;c=c!=null?c:i;ba=i-e+(e>d?7:0)-(e<i?7:0);a9=7*(b-1)+(c-i)+ba+1;return{year:a9>0?a:a-1,dayOfYear:a9>0?a9:aW(a-1)+a9}}function N(a){var i=a._i,ba=a._f;if(i===null){return R.invalid({nullInput:true})}if(typeof i==="string"){a._i=i=ay().preparse(i)}if(R.isMoment(i)){a=a5(i);a._d=new Date(+i._d)}else{if(ba){if(b(ba)){aS(a)}else{Q(a)}}else{P(a)}}return new L(a)}R=function(a,b,c,i){var d;if(typeof(c)==="boolean"){i=c;c=E}d={};d._isAMomentObject=true;d._i=a;d._f=b;d._l=c;d._strict=i;d._isUTC=false;d._pf=af();return N(d)};R.utc=function(a,b,c,i){var d;if(typeof(c)==="boolean"){i=c;c=E}d={};d._isAMomentObject=true;d._useUTC=true;d._isUTC=true;d._l=c;d._i=a;d._f=b;d._strict=i;d._pf=af();return N(d).utc()};R.unix=function(i){return R(i*1000)};R.duration=function(c,d){var e=c,bc=null,i,bb,ba;if(R.isDuration(c)){e={ms:c._milliseconds,d:c._days,M:c._months}}else{if(typeof c==="number"){e={};if(d){e[d]=c}else{e.milliseconds=c}}else{if(!!(bc=aZ.exec(c))){i=(bc[1]==="-")?-1:1;e={y:0,d:M(bc[aQ])*i,h:M(bc[v])*i,m:M(bc[av])*i,s:M(bc[s])*i,ms:M(bc[T])*i}}else{if(!!(bc=aD.exec(c))){i=(bc[1]==="-")?-1:1;ba=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*i};e={y:ba(bc[2]),M:ba(bc[3]),d:ba(bc[4]),h:ba(bc[5]),m:ba(bc[6]),s:ba(bc[7]),w:ba(bc[8])}}}}}bb=new ae(e);if(R.isDuration(c)&&c.hasOwnProperty("_lang")){bb._lang=c._lang}return bb};R.version=aB;R.defaultFormat=U;R.updateOffset=function(){};R.lang=function(a,i){var b;if(!a){return R.fn._lang._abbr}if(i){aj(C(a),i)}else{if(i===null){a0(a);a="en"}else{if(!ax[a]){ay(a)}}}b=R.duration.fn._lang=R.fn._lang=ay(a);return b._abbr};R.langData=function(i){if(i&&i._lang&&i._lang._abbr){i=i._lang._abbr}return ay(i)};R.isMoment=function(i){return i instanceof L||(i!=null&&i.hasOwnProperty("_isAMomentObject"))};R.isDuration=function(i){return i instanceof ae};for(ac=V.length-1;ac>=0;--ac){ar(V[ac])}R.normalizeUnits=function(i){return aT(i)};R.invalid=function(a){var i=R.utc(NaN);if(a!=null){az(i._pf,a)}else{i._pf.userInvalidated=true}return i};R.parseZone=function(){return R.apply(null,arguments).parseZone()};az(R.fn=L.prototype,{clone:function(){return R(this)},valueOf:function(){return+this._d+((this._offset||0)*60000)},unix:function(){return Math.floor(+this/1000)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var i=R(this).utc();if(0<i.year()&&i.year()<=9999){return an(i,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}else{return an(i,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}},toArray:function(){var i=this;return[i.year(),i.month(),i.date(),i.hours(),i.minutes(),i.seconds(),i.milliseconds()]},isValid:function(){return aA(this)},isDSTShifted:function(){if(this._a){return this.isValid()&&aO(this._a,(this._isUTC?R.utc(this._a):R(this._a)).toArray())>0}return false},parsingFlags:function(){return az({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){this.zone(0);this._isUTC=false;return this},format:function(a){var i=an(this,a||R.defaultFormat);return this.lang().postformat(i)},add:function(i,a){var b;if(typeof i==="string"){b=R.duration(+a,i)}else{b=R.duration(i,a)}G(this,b,1);return this},subtract:function(i,a){var b;if(typeof i==="string"){b=R.duration(+a,i)}else{b=R.duration(i,a)}G(this,b,-1);return this},diff:function(a,b,i){var c=x(a,this),a9=(this.zone()-c.zone())*60000,be,ba;b=aT(b);if(b==="year"||b==="month"){be=(this.daysInMonth()+c.daysInMonth())*43200000;ba=((this.year()-c.year())*12)+(this.month()-c.month());ba+=((this-R(this).startOf("month"))-(c-R(c).startOf("month")))/be;ba-=((this.zone()-R(this).startOf("month").zone())-(c.zone()-R(c).startOf("month").zone()))*60000/be;if(b==="year"){ba=ba/12}}else{be=(this-c);ba=b==="second"?be/1000:b==="minute"?be/60000:b==="hour"?be/3600000:b==="day"?(be-a9)/86400000:b==="week"?(be-a9)/604800000:be}return i?ba:l(ba)},from:function(a,i){return R.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!i)},fromNow:function(i){return this.from(R(),i)},calendar:function(){var i=x(R(),this).startOf("day"),ba=this.diff(i,"days",true),a9=ba<-6?"sameElse":ba<-1?"lastWeek":ba<0?"lastDay":ba<1?"sameDay":ba<2?"nextDay":ba<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(a9,this))},isLeapYear:function(){return aI(this.year())},isDST:function(){return(this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone())},day:function(a){var i=this._isUTC?this._d.getUTCDay():this._d.getDay();if(a!=null){a=a2(a,this.lang());return this.add({d:a-i})}else{return i}},month:function(i){var a=this._isUTC?"UTC":"",ba;if(i!=null){if(typeof i==="string"){i=this.lang().monthsParse(i);if(typeof i!=="number"){return this}}ba=Math.min(this.date(),a1(this.year(),i));this._d["set"+a+"Month"](i,ba);R.updateOffset(this,true);return this}else{return this._d["get"+a+"Month"]()}},startOf:function(i){i=aT(i);switch(i){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(i==="week"){this.weekday(0)}else{if(i==="isoWeek"){this.isoWeekday(1)}}return this},endOf:function(i){i=aT(i);return this.startOf(i).add((i==="isoWeek"?"week":i),1).subtract("ms",1)},isAfter:function(a,i){i=typeof i!=="undefined"?i:"millisecond";return+this.clone().startOf(i)>+R(a).startOf(i)},isBefore:function(a,i){i=typeof i!=="undefined"?i:"millisecond";return+this.clone().startOf(i)<+R(a).startOf(i)},isSame:function(a,i){i=i||"ms";return+this.clone().startOf(i)===+x(a,this).startOf(i)},min:function(i){i=R.apply(null,arguments);return i<this?this:i},max:function(i){i=R.apply(null,arguments);return i>this?this:i},zone:function(i,a){a=(a==null?true:false);var b=this._offset||0;if(i!=null){if(typeof i==="string"){i=y(i)}if(Math.abs(i)<16){i=i*60}this._offset=i;this._isUTC=true;if(b!==i&&a){G(this,R.duration(b-i,"m"),1,true)}}else{return this._isUTC?b:this._d.getTimezoneOffset()}return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){if(this._tzm){this.zone(this._tzm)}else{if(typeof this._i==="string"){this.zone(this._i)}}return this},hasAlignedHourOffset:function(i){if(!i){i=0}else{i=R(i).zone()}return(this.zone()-i)%60===0},daysInMonth:function(){return a1(this.year(),this.month())},dayOfYear:function(i){var a=W((R(this).startOf("day")-R(this).startOf("year"))/86400000)+1;return i==null?a:this.add("d",(i-a))},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(i){var a=B(this,this.lang()._week.dow,this.lang()._week.doy).year;return i==null?a:this.add("y",(i-a))},isoWeekYear:function(i){var a=B(this,1,4).year;return i==null?a:this.add("y",(i-a))},week:function(i){var a=this.lang().week(this);return i==null?a:this.add("d",(i-a)*7)},isoWeek:function(i){var a=B(this,1,4).week;return i==null?a:this.add("d",(i-a)*7)},weekday:function(i){var a=(this.day()+7-this.lang()._week.dow)%7;return i==null?a:this.add("d",i-a)},isoWeekday:function(i){return i==null?this.day()||7:this.day(this.day()%7?i:i-7)},isoWeeksInYear:function(){return aF(this.year(),1,4)},weeksInYear:function(){var i=this._lang._week;return aF(this.year(),i.dow,i.doy)},get:function(i){i=aT(i);return this[i]()},set:function(i,a){i=aT(i);if(typeof this[i]==="function"){this[i](a)}return this},lang:function(i){if(i===E){return this._lang}else{this._lang=ay(i);return this}}});function aL(d,e){var i=e==="date"||e==="month"||e==="year";R.fn[d]=R.fn[d+"s"]=function(a,b){var c=this._isUTC?"UTC":"";if(b==null){b=i}if(a!=null){this._d["set"+c+e](a);R.updateOffset(this,b);return this}else{return this._d["get"+c+e]()}}}for(ac=0;ac<aE.length;ac++){aL(aE[ac].toLowerCase().replace(/s$/,""),aE[ac])}aL("year","FullYear");R.fn.days=R.fn.day;R.fn.months=R.fn.month;R.fn.weeks=R.fn.week;R.fn.isoWeeks=R.fn.isoWeek;R.fn.toJSON=R.fn.toISOString;az(R.duration.fn=ae.prototype,{_bubble:function(){var a=this._milliseconds,bf=this._days,i=this._months,bd=this._data,be,bc,a9,bb;bd.milliseconds=a%1000;be=l(a/1000);bd.seconds=be%60;bc=l(be/60);bd.minutes=bc%60;a9=l(bc/60);bd.hours=a9%24;bf+=l(a9/24);bd.days=bf%30;i+=l(bf/30);bd.months=i%12;bb=l(i/12);bd.years=bb},weeks:function(){return l(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*86400000+(this._months%12)*2592000000+M(this._months/12)*31536000000},humanize:function(a){var b=+this,i=z(b,!a,this.lang());if(a){i=this.lang().pastFuture(b,i)}return this.lang().postformat(i)},add:function(i,a){var b=R.duration(i,a);this._milliseconds+=b._milliseconds;this._days+=b._days;this._months+=b._months;this._bubble();return this},subtract:function(i,a){var b=R.duration(i,a);this._milliseconds-=b._milliseconds;this._days-=b._days;this._months-=b._months;this._bubble();return this},get:function(i){i=aT(i);return this[i.toLowerCase()+"s"]()},as:function(i){i=aT(i);return this["as"+i.charAt(0).toUpperCase()+i.slice(1)+"s"]()},lang:R.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),i=Math.abs(this.months()),bd=Math.abs(this.days()),a9=Math.abs(this.hours()),ba=Math.abs(this.minutes()),bc=Math.abs(this.seconds()+this.milliseconds()/1000);if(!this.asSeconds()){return"P0D"}return(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(i?i+"M":"")+(bd?bd+"D":"")+((a9||ba||bc)?"T":"")+(a9?a9+"H":"")+(ba?ba+"M":"")+(bc?bc+"S":"")}});function X(i){R.duration.fn[i]=function(){return this._data[i]}}function aw(i,a){R.duration.fn["as"+i]=function(){return+this/a}}for(ac in D){if(D.hasOwnProperty(ac)){aw(ac,D[ac]);X(ac.toLowerCase())}}aw("Weeks",604800000);R.duration.fn.asMonths=function(){return(+this-this.years()*31536000000)/2592000000+this.years()*12};R.lang("en",{ordinal:function(a){var i=a%10,a9=(M(a%100/10)===1)?"th":(i===1)?"st":(i===2)?"nd":(i===3)?"rd":"th";return a+a9}});function S(a){var i=false,ba=R;if(typeof ender!=="undefined"){return}if(a){A.moment=function(){if(!i&&console&&console.warn){i=true;console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")}return ba.apply(null,arguments)};az(A.moment,ba)}else{A.moment=R}}if(al){module.exports=R;S(true)}else{if(typeof define==="function"&&define.amd){define("moment",function(a,i,b){if(b.config&&b.config()&&b.config().noGlobal!==true){S(b.config().noGlobal===E)}return R})}else{S()}}}).call(this);

/*!
 * Datepicker again ?
 */
 (function(h){function l(){return new Date(Date.UTC.apply(Date,arguments))}function e(){var o=new Date();return l(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate())}var i=function(q,o){var r=this;this._process_options(o);this.element=h(q);this.isInline=false;this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on, .btn"):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.picker=h(j.template);this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element)}else{this.picker.addClass("datepicker-dropdown dropdown-menu")}if(this.o.rtl){this.picker.addClass("datepicker-rtl");this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")}this.viewMode=this.o.startView;if(this.o.calendarWeeks){this.picker.find("tfoot th.today").attr("colspan",function(s,u){return parseInt(u)+1})}this._allow_update=false;this.setStartDate(this.o.startDate);this.setEndDate(this.o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show()}};i.prototype={constructor:i,_process_options:function(q){this._o=h.extend({},this._o,q);var u=this.o=h.extend({},this._o);var s=u.language;if(!c[s]){s=s.split("-")[0];if(!c[s]){s=f.language}}u.language=s;switch(u.startView){case 2:case"decade":u.startView=2;break;case 1:case"year":u.startView=1;break;default:u.startView=0}switch(u.minViewMode){case 1:case"months":u.minViewMode=1;break;case 2:case"years":u.minViewMode=2;break;default:u.minViewMode=0}u.startView=Math.max(u.startView,u.minViewMode);u.weekStart%=7;u.weekEnd=((u.weekStart+6)%7);var r=j.parseFormat(u.format);if(u.startDate!==-Infinity){u.startDate=j.parseDate(u.startDate,r,u.language)}if(u.endDate!==Infinity){u.endDate=j.parseDate(u.endDate,r,u.language)}u.daysOfWeekDisabled=u.daysOfWeekDisabled||[];if(!h.isArray(u.daysOfWeekDisabled)){u.daysOfWeekDisabled=u.daysOfWeekDisabled.split(/[,\s]*/)}u.daysOfWeekDisabled=h.map(u.daysOfWeekDisabled,function(o){return parseInt(o,10)})},_events:[],_secondaryEvents:[],_applyEvents:function(o){for(var q=0,r,s;q<o.length;q++){r=o[q][0];s=o[q][1];r.on(s)}},_unapplyEvents:function(o){for(var q=0,r,s;q<o.length;q++){r=o[q][0];s=o[q][1];r.off(s)}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:h.proxy(this.show,this),keyup:h.proxy(this.update,this),keydown:h.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:h.proxy(this.show,this),keyup:h.proxy(this.update,this),keydown:h.proxy(this.keydown,this)}],[this.component,{click:h.proxy(this.show,this)}]]}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:h.proxy(this.show,this)}]]}}}this._secondaryEvents=[[this.picker,{click:h.proxy(this.click,this)}],[h(window),{resize:h.proxy(this.place,this)}],[h(document),{mousedown:h.proxy(function(o){if(!(this.element.is(o.target)||this.element.find(o.target).size()||this.picker.is(o.target)||this.picker.find(o.target).size())){this.hide()}},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(r,s){var q=s||this.date,o=new Date(q.getTime()+(q.getTimezoneOffset()*60000));this.element.trigger({type:r,date:o,format:h.proxy(function(v){var u=v||this.o.format;return j.formatDate(q,u,this.o.language)},this)})},show:function(o){if(!this.isInline){this.picker.appendTo("body")}this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();this._attachSecondaryEvents();if(o){o.preventDefault()}this._trigger("show")},hide:function(o){if(this.isInline){return}if(!this.picker.is(":visible")){return}this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this._trigger("hide")},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date}},getDate:function(){var o=this.getUTCDate();return new Date(o.getTime()+(o.getTimezoneOffset()*60000))},getUTCDate:function(){return this.date},setDate:function(o){this.setUTCDate(new Date(o.getTime()-(o.getTimezoneOffset()*60000)))},setUTCDate:function(o){this.date=o;this.setValue()},setValue:function(){var o=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(o)}}else{this.element.val(o)}},getFormattedDate:function(o){if(o===undefined){o=this.o.format}return j.formatDate(this.date,o,this.o.language)},setStartDate:function(o){this._process_options({startDate:o});this.update();this.updateNavArrows()},setEndDate:function(o){this._process_options({endDate:o});this.update();this.updateNavArrows()},setDaysOfWeekDisabled:function(o){this._process_options({daysOfWeekDisabled:o});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}var r=parseInt(this.element.parents().filter(function(){return h(this).css("z-index")!="auto"}).first().css("z-index"))+10;var q=this.component?this.component.parent().offset():this.element.offset();var o=this.component?this.component.outerHeight(true):this.element.outerHeight(true);this.picker.css({top:q.top+o,left:q.left,zIndex:r})},_allow_update:true,update:function(){if(!this._allow_update){return}var o,q=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0]instanceof Date)){o=arguments[0];q=true}else{o=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val();delete this.element.data().date}this.date=j.parseDate(o,this.o.format,this.o.language);if(q){this.setValue()}if(this.date<this.o.startDate){this.viewDate=new Date(this.o.startDate)}else{if(this.date>this.o.endDate){this.viewDate=new Date(this.o.endDate)}else{this.viewDate=new Date(this.date)}}this.fill()},fillDow:function(){var q=this.o.weekStart,r="<tr>";if(this.o.calendarWeeks){var o='<th class="cw">&nbsp;</th>';r+=o;this.picker.find(".datepicker-days thead tr:first-child").prepend(o)}while(q<this.o.weekStart+7){r+='<th class="dow">'+c[this.o.language].daysMin[(q++)%7]+"</th>"}r+="</tr>";this.picker.find(".datepicker-days thead").append(r)},fillMonths:function(){var q="",o=0;while(o<12){q+='<span class="month">'+c[this.o.language].monthsShort[o++]+"</span>"}this.picker.find(".datepicker-months td").html(q)},setRange:function(o){if(!o||!o.length){delete this.range}else{this.range=h.map(o,function(q){return q.valueOf()})}this.fill()},getClassNames:function(s){var q=[],u=this.viewDate.getUTCFullYear(),v=this.viewDate.getUTCMonth(),o=this.date.valueOf(),r=new Date();if(s.getUTCFullYear()<u||(s.getUTCFullYear()==u&&s.getUTCMonth()<v)){q.push("old")}else{if(s.getUTCFullYear()>u||(s.getUTCFullYear()==u&&s.getUTCMonth()>v)){q.push("new")}}if(this.o.todayHighlight&&s.getUTCFullYear()==r.getFullYear()&&s.getUTCMonth()==r.getMonth()&&s.getUTCDate()==r.getDate()){q.push("today")}if(o&&s.valueOf()==o){q.push("active")}if(s.valueOf()<this.o.startDate||s.valueOf()>this.o.endDate||h.inArray(s.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){q.push("disabled")}if(this.range){if(s>this.range[0]&&s<this.range[this.range.length-1]){q.push("range")}if(h.inArray(s.valueOf(),this.range)!=-1){q.push("selected")}}return q},fill:function(){var I=new Date(this.viewDate),z=I.getUTCFullYear(),J=I.getUTCMonth(),D=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,H=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,w=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,E=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,x=this.date&&this.date.valueOf(),s;this.picker.find(".datepicker-days thead th.datepicker-switch").text(c[this.o.language].months[J]+" "+z);this.picker.find("tfoot th.today").text(c[this.o.language].today).toggle(this.o.todayBtn!==false);this.picker.find("tfoot th.clear").text(c[this.o.language].clear).toggle(this.o.clearBtn!==false);this.updateNavArrows();this.fillMonths();var L=l(z,J-1,28,0,0,0,0),G=j.getDaysInMonth(L.getUTCFullYear(),L.getUTCMonth());L.setUTCDate(G);L.setUTCDate(G-(L.getUTCDay()-this.o.weekStart+7)%7);var o=new Date(L);o.setUTCDate(o.getUTCDate()+42);o=o.valueOf();var y=[];var C;while(L.valueOf()<o){if(L.getUTCDay()==this.o.weekStart){y.push("<tr>");if(this.o.calendarWeeks){var q=new Date(+L+(this.o.weekStart-L.getUTCDay()-7)%7*86400000),u=new Date(+q+(7+4-q.getUTCDay())%7*86400000),r=new Date(+(r=l(u.getUTCFullYear(),0,1))+(7+4-r.getUTCDay())%7*86400000),A=(u-r)/86400000/7+1;y.push('<td class="cw">'+A+"</td>")}}C=this.getClassNames(L);C.push("day");var B=this.o.beforeShowDay(L);if(B===undefined){B={}}else{if(typeof(B)==="boolean"){B={enabled:B}}else{if(typeof(B)==="string"){B={classes:B}}}}if(B.enabled===false){C.push("disabled")}if(B.classes){C=C.concat(B.classes.split(/\s+/))}if(B.tooltip){s=B.tooltip}C=h.unique(C);y.push('<td class="'+C.join(" ")+'"'+(s?' title="'+s+'"':"")+">"+L.getUTCDate()+"</td>");if(L.getUTCDay()==this.o.weekEnd){y.push("</tr>")}L.setUTCDate(L.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(y.join(""));var M=this.date&&this.date.getUTCFullYear();var v=this.picker.find(".datepicker-months").find("th:eq(1)").text(z).end().find("span").removeClass("active");if(M&&M==z){v.eq(this.date.getUTCMonth()).addClass("active")}if(z<D||z>w){v.addClass("disabled")}if(z==D){v.slice(0,H).addClass("disabled")}if(z==w){v.slice(E+1).addClass("disabled")}y="";z=parseInt(z/10,10)*10;var K=this.picker.find(".datepicker-years").find("th:eq(1)").text(z+"-"+(z+9)).end().find("td");z-=1;for(var F=-1;F<11;F++){y+='<span class="year'+(F==-1?" old":F==10?" new":"")+(M==z?" active":"")+(z<D||z>w?" disabled":"")+'">'+z+"</span>";z+=1}K.html(y)},updateNavArrows:function(){if(!this._allow_update){return}var r=new Date(this.viewDate),o=r.getUTCFullYear(),q=r.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&o<=this.o.startDate.getUTCFullYear()&&q<=this.o.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&o>=this.o.endDate.getUTCFullYear()&&q>=this.o.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:case 2:if(this.o.startDate!==-Infinity&&o<=this.o.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&o>=this.o.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},click:function(u){u.preventDefault();var v=h(u.target).closest("span, td, th");if(v.length==1){switch(v[0].nodeName.toLowerCase()){case"th":switch(v[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var o=j.modes[this.viewMode].navStep*(v[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,o);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,o);break}this.fill();break;case"today":var q=new Date();q=l(q.getFullYear(),q.getMonth(),q.getDate(),0,0,0);this.showMode(-2);var r=this.o.todayBtn=="linked"?null:"view";this._setDate(q,r);break;case"clear":var s;if(this.isInput){s=this.element}else{if(this.component){s=this.element.find("input")}}if(s){s.val("").change()}this._trigger("changeDate");this.update();if(this.o.autoclose){this.hide()}break}break;case"span":if(!v.is(".disabled")){this.viewDate.setUTCDate(1);if(v.is(".month")){var y=1;var w=v.parent().find("span").index(v);var x=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(w);this._trigger("changeMonth",this.viewDate);if(this.o.minViewMode===1){this._setDate(l(x,w,y,0,0,0,0))}}else{var x=parseInt(v.text(),10)||0;var y=1;var w=0;this.viewDate.setUTCFullYear(x);this._trigger("changeYear",this.viewDate);if(this.o.minViewMode===2){this._setDate(l(x,w,y,0,0,0,0))}}this.showMode(-1);this.fill()}break;case"td":if(v.is(".day")&&!v.is(".disabled")){var y=parseInt(v.text(),10)||1;var x=this.viewDate.getUTCFullYear(),w=this.viewDate.getUTCMonth();if(v.is(".old")){if(w===0){w=11;x-=1}else{w-=1}}else{if(v.is(".new")){if(w==11){w=0;x+=1}else{w+=1}}}this._setDate(l(x,w,y,0,0,0,0))}break}}},_setDate:function(o,r){if(!r||r=="date"){this.date=new Date(o)}if(!r||r=="view"){this.viewDate=new Date(o)}this.fill();this.setValue();this._trigger("changeDate");var q;if(this.isInput){q=this.element}else{if(this.component){q=this.element.find("input")}}if(q){q.change();if(this.o.autoclose&&(!r||r=="date")){this.hide()}}},moveMonth:function(o,q){if(!q){return o}var u=new Date(o.valueOf()),y=u.getUTCDate(),v=u.getUTCMonth(),s=Math.abs(q),x,w;q=q>0?1:-1;if(s==1){w=q==-1?function(){return u.getUTCMonth()==v}:function(){return u.getUTCMonth()!=x};x=v+q;u.setUTCMonth(x);if(x<0||x>11){x=(x+12)%12}}else{for(var r=0;r<s;r++){u=this.moveMonth(u,q)}x=u.getUTCMonth();u.setUTCDate(y);w=function(){return x!=u.getUTCMonth()}}while(w()){u.setUTCDate(--y);u.setUTCMonth(x)}return u},moveYear:function(q,o){return this.moveMonth(q,o*12)},dateWithinRange:function(o){return o>=this.o.startDate&&o<=this.o.endDate},keydown:function(x){if(this.picker.is(":not(:visible)")){if(x.keyCode==27){this.show()}return}var s=false,r,q,w,o,v;switch(x.keyCode){case 27:this.hide();x.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation){break}r=x.keyCode==37?-1:1;if(x.ctrlKey){o=this.moveYear(this.date,r);v=this.moveYear(this.viewDate,r)}else{if(x.shiftKey){o=this.moveMonth(this.date,r);v=this.moveMonth(this.viewDate,r)}else{o=new Date(this.date);o.setUTCDate(this.date.getUTCDate()+r);v=new Date(this.viewDate);v.setUTCDate(this.viewDate.getUTCDate()+r)}}if(this.dateWithinRange(o)){this.date=o;this.viewDate=v;this.setValue();this.update();x.preventDefault();s=true}break;case 38:case 40:if(!this.o.keyboardNavigation){break}r=x.keyCode==38?-1:1;if(x.ctrlKey){o=this.moveYear(this.date,r);v=this.moveYear(this.viewDate,r)}else{if(x.shiftKey){o=this.moveMonth(this.date,r);v=this.moveMonth(this.viewDate,r)}else{o=new Date(this.date);o.setUTCDate(this.date.getUTCDate()+r*7);v=new Date(this.viewDate);v.setUTCDate(this.viewDate.getUTCDate()+r*7)}}if(this.dateWithinRange(o)){this.date=o;this.viewDate=v;this.setValue();this.update();x.preventDefault();s=true}break;case 13:this.hide();x.preventDefault();break;case 9:this.hide();break}if(s){this._trigger("changeDate");var u;if(this.isInput){u=this.element}else{if(this.component){u=this.element.find("input")}}if(u){u.change()}}},showMode:function(o){if(o){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+o))}this.picker.find(">div").hide().filter(".datepicker-"+j.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()}};var n=function(q,o){this.element=h(q);this.inputs=h.map(o.inputs,function(r){return r.jquery?r[0]:r});delete o.inputs;h(this.inputs).datepicker(o).bind("changeDate",h.proxy(this.dateUpdated,this));this.pickers=h.map(this.inputs,function(r){return h(r).data("datepicker")});this.updateDates()};n.prototype={updateDates:function(){this.dates=h.map(this.pickers,function(o){return o.date});this.updateRanges()},updateRanges:function(){var o=h.map(this.dates,function(q){return q.valueOf()});h.each(this.pickers,function(q,r){r.setRange(o)})},dateUpdated:function(s){var u=h(s.target).data("datepicker"),r=u.getUTCDate(),q=h.inArray(s.target,this.inputs),o=this.inputs.length;if(q==-1){return}if(r<this.dates[q]){while(q>=0&&r<this.dates[q]){this.pickers[q--].setUTCDate(r)}}else{if(r>this.dates[q]){while(q<o&&r>this.dates[q]){this.pickers[q++].setUTCDate(r)}}}this.updateDates()},remove:function(){h.map(this.pickers,function(o){o.remove()});delete this.element.data().datepicker}};function g(s,w){var v=h(s).data(),o={},u,r=new RegExp("^"+w.toLowerCase()+"([A-Z])"),w=new RegExp("^"+w.toLowerCase());for(var q in v){if(w.test(q)){u=q.replace(r,function(y,x){return x.toLowerCase()});o[u]=v[q]}}return o}function b(r){var o={};if(!c[r]){r=r.split("-")[0];if(!c[r]){return}}var q=c[r];h.each(m,function(u,s){if(s in q){o[s]=q[s]}});return o}var d=h.fn.datepicker;var k=h.fn.datepicker=function(s){var q=Array.apply(null,arguments);q.shift();var r,o;this.each(function(){var B=h(this),z=B.data("datepicker"),v=typeof s=="object"&&s;if(!z){var x=g(this,"date"),u=h.extend({},f,x,v),w=b(u.language),y=h.extend({},f,w,x,v);if(B.is(".input-daterange")||y.inputs){var A={inputs:y.inputs||B.find("input").toArray()};B.data("datepicker",(z=new n(this,h.extend(y,A))))}else{B.data("datepicker",(z=new i(this,y)))}}if(typeof s=="string"&&typeof z[s]=="function"){r=z[s].apply(z,q);if(r!==undefined){return false}}});if(r!==undefined){return r}else{return this}};var f=h.fn.datepicker.defaults={autoclose:false,beforeShowDay:h.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:"mm/dd/yyyy",keyboardNavigation:true,language:"en",minViewMode:0,rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};var m=h.fn.datepicker.locale_opts=["format","rtl","weekStart"];h.fn.datepicker.Constructor=i;var c=h.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};var j={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(o){return(((o%4===0)&&(o%100!==0))||(o%400===0))},getDaysInMonth:function(o,q){return[31,(j.isLeapYear(o)?29:28),31,30,31,30,31,31,30,31,30,31][q]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(r){var o=r.replace(this.validParts,"\0").split("\0"),q=r.match(this.validParts);if(!o||!o.length||!q||q.length===0){throw new Error("Invalid date format.")}return{separators:o,parts:q}},parseDate:function(u,D,x){if(u instanceof Date){return u}if(typeof D==="string"){D=j.parseFormat(D)}if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(u)){var F=/([\-+]\d+)([dmwy])/,w=u.match(/([\-+]\d+)([dmwy])/g),o,v;u=new Date();for(var y=0;y<w.length;y++){o=F.exec(w[y]);v=parseInt(o[1]);switch(o[2]){case"d":u.setUTCDate(u.getUTCDate()+v);break;case"m":u=i.prototype.moveMonth.call(i.prototype,u,v);break;case"w":u.setUTCDate(u.getUTCDate()+v*7);break;case"y":u=i.prototype.moveYear.call(i.prototype,u,v);break}}return l(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),0,0,0)}var w=u&&u.match(this.nonpunctuation)||[],u=new Date(),B={},C=["yyyy","yy","M","MM","m","mm","d","dd"],E={yyyy:function(H,s){return H.setUTCFullYear(s)},yy:function(H,s){return H.setUTCFullYear(2000+s)},m:function(H,s){s-=1;while(s<0){s+=12}s%=12;H.setUTCMonth(s);while(H.getUTCMonth()!=s){H.setUTCDate(H.getUTCDate()-1)}return H},d:function(H,s){return H.setUTCDate(s)}},r,z,o;E.M=E.MM=E.mm=E.m;E.dd=E.d;u=l(u.getFullYear(),u.getMonth(),u.getDate(),0,0,0);var A=D.parts.slice();if(w.length!=A.length){A=h(A).filter(function(s,H){return h.inArray(H,C)!==-1}).toArray()}if(w.length==A.length){for(var y=0,q=A.length;y<q;y++){r=parseInt(w[y],10);o=A[y];if(isNaN(r)){switch(o){case"MM":z=h(c[x].months).filter(function(){var s=this.slice(0,w[y].length),H=w[y].slice(0,s.length);return s==H});r=h.inArray(z[0],c[x].months)+1;break;case"M":z=h(c[x].monthsShort).filter(function(){var s=this.slice(0,w[y].length),H=w[y].slice(0,s.length);return s==H});r=h.inArray(z[0],c[x].monthsShort)+1;break}}B[o]=r}for(var y=0,G;y<C.length;y++){G=C[y];if(G in B&&!isNaN(B[G])){E[G](u,B[G])}}}return u},formatDate:function(o,u,w){if(typeof u==="string"){u=j.parseFormat(u)}var v={d:o.getUTCDate(),D:c[w].daysShort[o.getUTCDay()],DD:c[w].days[o.getUTCDay()],m:o.getUTCMonth()+1,M:c[w].monthsShort[o.getUTCMonth()],MM:c[w].months[o.getUTCMonth()],yy:o.getUTCFullYear().toString().substring(2),yyyy:o.getUTCFullYear()};v.dd=(v.d<10?"0":"")+v.d;v.mm=(v.m<10?"0":"")+v.m;var o=[],s=h.extend([],u.separators);for(var r=0,q=u.parts.length;r<=q;r++){if(s.length){o.push(s.shift())}o.push(v[u.parts[r]])}return o.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};j.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+j.headTemplate+"<tbody></tbody>"+j.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+j.headTemplate+j.contTemplate+j.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+j.headTemplate+j.contTemplate+j.footTemplate+"</table></div></div>";h.fn.datepicker.DPGlobal=j;h.fn.datepicker.noConflict=function(){h.fn.datepicker=d;return this};h(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(q){var o=h(this);if(o.data("datepicker")){return}q.preventDefault();k.call(o,"show")});h(function(){k.call(h('[data-provide="datepicker-inline"]'))})}(window.jQuery));
  
/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */
 (function(d){var m="0.9.3";var k={isMsie:function(){var n=/(msie) ([\w.]+)/i.exec(navigator.userAgent);return n?parseInt(n[2],10):false},isBlankString:function(n){return!n||/^\s*$/.test(n)},escapeRegExChars:function(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(n){return typeof n==="string"},isNumber:function(n){return typeof n==="number"},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(n){return typeof n==="undefined"},bind:d.proxy,bindAll:function(o){var q;for(var n in o){d.isFunction(q=o[n])&&(o[n]=d.proxy(q,o))}},indexOf:function(o,q){for(var n=0;n<o.length;n++){if(o[n]===q){return n}}return-1},each:d.each,map:d.map,filter:d.grep,every:function(o,q){var n=true;if(!o){return n}d.each(o,function(r,s){if(!(n=q.call(null,s,r,o))){return false}});return!!n},some:function(o,q){var n=false;if(!o){return n}d.each(o,function(r,s){if(n=q.call(null,s,r,o)){return false}});return!!n},mixin:d.extend,getUniqueId:function(){var n=0;return function(){return n++}}(),defer:function(n){setTimeout(n,0)},debounce:function(q,s,o){var r,n;return function(){var x=this,w=arguments,v,u;v=function(){r=null;if(!o){n=q.apply(x,w)}};u=o&&!r;clearTimeout(r);r=setTimeout(v,s);if(u){n=q.apply(x,w)}return n}},throttle:function(u,w){var r,q,v,n,s,o;s=0;o=function(){s=new Date();v=null;n=u.apply(r,q)};return function(){var x=new Date(),y=w-(x-s);r=this;q=arguments;if(y<=0){clearTimeout(v);v=null;s=x;n=u.apply(r,q)}else{if(!v){v=setTimeout(o,y)}}return n}},tokenizeQuery:function(n){return d.trim(n).toLowerCase().split(/[\s]+/)},tokenizeText:function(n){return d.trim(n).toLowerCase().split(/[\s\-_]+/)},getProtocol:function(){return location.protocol},noop:function(){}};var l=function(){var n=/\s+/;return{on:function(o,r){var q;if(!r){return this}this._callbacks=this._callbacks||{};o=o.split(n);while(q=o.shift()){this._callbacks[q]=this._callbacks[q]||[];this._callbacks[q].push(r)}return this},trigger:function(q,u){var s,r;if(!this._callbacks){return this}q=q.split(n);while(s=q.shift()){if(r=this._callbacks[s]){for(var o=0;o<r.length;o+=1){r[o].call(this,{type:s,data:u})}}}return this}}}();var f=function(){var o="typeahead:";function n(q){if(!q||!q.el){d.error("EventBus initialized without el")}this.$el=d(q.el)}k.mixin(n.prototype,{trigger:function(r){var q=[].slice.call(arguments,1);this.$el.trigger(o+r,q)}});return n}();var h=function(){var n,o;try{n=window.localStorage;n.setItem("~~~","!");n.removeItem("~~~")}catch(u){n=null}function r(w){this.prefix=["__",w,"__"].join("");this.ttlKey="__ttl__";this.keyMatcher=new RegExp("^"+this.prefix)}if(n&&window.JSON){o={_prefix:function(w){return this.prefix+w},_ttlKey:function(w){return this._prefix(w)+this.ttlKey},get:function(w){if(this.isExpired(w)){this.remove(w)}return v(n.getItem(this._prefix(w)))},set:function(x,y,w){if(k.isNumber(w)){n.setItem(this._ttlKey(x),s(q()+w))}else{n.removeItem(this._ttlKey(x))}return n.setItem(this._prefix(x),s(y))},remove:function(w){n.removeItem(this._ttlKey(w));n.removeItem(this._prefix(w));return this},clear:function(){var y,x,z=[],w=n.length;for(y=0;y<w;y++){if((x=n.key(y)).match(this.keyMatcher)){z.push(x.replace(this.keyMatcher,""))}}for(y=z.length;y--;){this.remove(z[y])}return this},isExpired:function(x){var w=v(n.getItem(this._ttlKey(x)));return k.isNumber(w)&&q()>w?true:false}}}else{o={get:k.noop,set:k.noop,remove:k.noop,clear:k.noop,isExpired:k.noop}}k.mixin(r.prototype,o);return r;function q(){return new Date().getTime()}function s(w){return JSON.stringify(k.isUndefined(w)?null:w)}function v(w){return JSON.parse(w)}}();var j=function(){function n(q){k.bindAll(this);q=q||{};this.sizeLimit=q.sizeLimit||10;this.cache={};this.cachedKeysByAge=[]}k.mixin(n.prototype,{get:function(o){return this.cache[o]},set:function(q,r){var o;if(this.cachedKeysByAge.length===this.sizeLimit){o=this.cachedKeysByAge.shift();delete this.cache[o]}this.cache[q]=r;this.cachedKeysByAge.push(q)}});return n}();var e=function(){var o=0,s={},n,v;function w(x){k.bindAll(this);x=k.isString(x)?{url:x}:x;v=v||new j();n=k.isNumber(x.maxParallelRequests)?x.maxParallelRequests:n||6;this.url=x.url;this.wildcard=x.wildcard||"%QUERY";this.filter=x.filter;this.replace=x.replace;this.ajaxSettings={type:"get",cache:x.cache,timeout:x.timeout,dataType:x.dataType||"json",beforeSend:x.beforeSend};this._get=(/^throttle$/i.test(x.rateLimitFn)?k.throttle:k.debounce)(this._get,x.rateLimitWait||300)}k.mixin(w.prototype,{_get:function(z,x){var A=this;if(r()){this._sendRequest(z).done(y)}else{this.onDeckRequestArgs=[].slice.call(arguments,0)}function y(C){var B=A.filter?A.filter(C):C;x&&x(B);v.set(z,C)}},_sendRequest:function(y){var A=this,z=s[y];if(!z){q();z=s[y]=d.ajax(y,this.ajaxSettings).always(x)}return z;function x(){u();s[y]=null;if(A.onDeckRequestArgs){A._get.apply(A,A.onDeckRequestArgs);A.onDeckRequestArgs=null}}},get:function(B,x){var A=this,z=encodeURIComponent(B||""),y,C;x=x||k.noop;y=this.replace?this.replace(this.url,z):this.url.replace(this.wildcard,z);if(C=v.get(y)){k.defer(function(){x(A.filter?A.filter(C):C)})}else{this._get(y,x)}return!!C}});return w;function q(){o++}function u(){o--}function r(){return o<n}}();var b=function(){var q={thumbprint:"thumbprint",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"};function o(r){k.bindAll(this);if(k.isString(r.template)&&!r.engine){d.error("no template engine specified")}if(!r.local&&!r.prefetch&&!r.remote){d.error("one of local, prefetch, or remote is required")}this.name=r.name||k.getUniqueId();this.limit=r.limit||5;this.minLength=r.minLength||1;this.header=r.header;this.footer=r.footer;this.valueKey=r.valueKey||"value";this.template=n(r.template,r.engine,this.valueKey);this.local=r.local;this.prefetch=r.prefetch;this.remote=r.remote;this.itemHash={};this.adjacencyList={};this.storage=r.name?new h(r.name):null}k.mixin(o.prototype,{_processLocalData:function(r){this._mergeProcessedData(this._processData(r))},_loadPrefetchData:function(s){var w=this,B=m+(s.thumbprint||""),z,u,x,r,v,A;if(this.storage){z=this.storage.get(q.thumbprint);u=this.storage.get(q.protocol);x=this.storage.get(q.itemHash);r=this.storage.get(q.adjacencyList)}v=z!==B||u!==k.getProtocol();s=k.isString(s)?{url:s}:s;s.ttl=k.isNumber(s.ttl)?s.ttl:24*60*60*1000;if(x&&r&&!v){this._mergeProcessedData({itemHash:x,adjacencyList:r});A=d.Deferred().resolve()}else{A=d.getJSON(s.url).done(y)}return A;function y(G){var F=s.filter?s.filter(G):G,E=w._processData(F),C=E.itemHash,D=E.adjacencyList;if(w.storage){w.storage.set(q.itemHash,C,s.ttl);w.storage.set(q.adjacencyList,D,s.ttl);w.storage.set(q.thumbprint,B,s.ttl);w.storage.set(q.protocol,k.getProtocol(),s.ttl)}w._mergeProcessedData(E)}},_transformDatum:function(r){var u=k.isString(r)?r:r[this.valueKey],v=r.tokens||k.tokenizeText(u),s={value:u,tokens:v};if(k.isString(r)){s.datum={};s.datum[this.valueKey]=r}else{s.datum=r}s.tokens=k.filter(s.tokens,function(w){return!k.isBlankString(w)});s.tokens=k.map(s.tokens,function(w){return w.toLowerCase()});return s},_processData:function(v){var u=this,r={},s={};k.each(v,function(x,w){var y=u._transformDatum(w),z=k.getUniqueId(y.value);r[z]=y;k.each(y.tokens,function(B,A){var D=A.charAt(0),C=s[D]||(s[D]=[z]);!~k.indexOf(C,z)&&C.push(z)})});return{itemHash:r,adjacencyList:s}},_mergeProcessedData:function(r){var s=this;k.mixin(this.itemHash,r.itemHash);k.each(r.adjacencyList,function(w,v){var u=s.adjacencyList[w];s.adjacencyList[w]=u?u.concat(v):v})},_getLocalSuggestions:function(x){var w=this,v=[],s=[],u,r=[];k.each(x,function(z,y){var A=y.charAt(0);!~k.indexOf(v,A)&&v.push(A)});k.each(v,function(y,z){var A=w.adjacencyList[z];if(!A){return false}s.push(A);if(!u||A.length<u.length){u=A}});if(s.length<v.length){return[]}k.each(u,function(y,C){var A=w.itemHash[C],B,z;B=k.every(s,function(D){return~k.indexOf(D,C)});z=B&&k.every(x,function(D){return k.some(A.tokens,function(E){return E.indexOf(D)===0})});z&&r.push(A)});return r},initialize:function(){var r;this.local&&this._processLocalData(this.local);this.transport=this.remote?new e(this.remote):null;r=this.prefetch?this._loadPrefetchData(this.prefetch):d.Deferred().resolve();this.local=this.prefetch=this.remote=null;this.initialize=function(){return r};return r},getSuggestions:function(x,s){var w=this,v,r,u=false;if(x.length<this.minLength){return}v=k.tokenizeQuery(x);r=this._getLocalSuggestions(v).slice(0,this.limit);if(r.length<this.limit&&this.transport){u=this.transport.get(x,y)}!u&&s&&s(r);function y(z){r=r.slice(0);k.each(z,function(C,B){var D=w._transformDatum(B),A;A=k.some(r,function(E){return D.value===E.value});!A&&r.push(D);return r.length<w.limit});s&&s(r)}}});return o;function n(v,u,w){var s,r;if(k.isFunction(v)){s=v}else{if(k.isString(v)){r=u.compile(v);s=k.bind(r.render,r)}else{s=function(x){return"<p>"+x[w]+"</p>"}}}return s}}();var c=function(){function o(s){var r=this;k.bindAll(this);this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};this.$hint=d(s.hint);this.$input=d(s.input).on("blur.tt",this._handleBlur).on("focus.tt",this._handleFocus).on("keydown.tt",this._handleSpecialKeyEvent);if(!k.isMsie()){this.$input.on("input.tt",this._compareQueryToInputValue)}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(u){if(r.specialKeyCodeMap[u.which||u.keyCode]){return}k.defer(r._compareQueryToInputValue)})}this.query=this.$input.val();this.$overflowHelper=q(this.$input)}k.mixin(o.prototype,l,{_handleFocus:function(){this.trigger("focused")},_handleBlur:function(){this.trigger("blured")},_handleSpecialKeyEvent:function(r){var s=this.specialKeyCodeMap[r.which||r.keyCode];s&&this.trigger(s+"Keyed",r)},_compareQueryToInputValue:function(){var r=this.getInputValue(),u=n(this.query,r),s=u?this.query.length!==r.length:false;if(s){this.trigger("whitespaceChanged",{value:this.query})}else{if(!u){this.trigger("queryChanged",{value:this.query=r})}}},destroy:function(){this.$hint.off(".tt");this.$input.off(".tt");this.$hint=this.$input=this.$overflowHelper=null},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(r){this.query=r},getInputValue:function(){return this.$input.val()},setInputValue:function(s,r){this.$input.val(s);!r&&this._compareQueryToInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(r){this.$hint.val(r)},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},isOverflow:function(){this.$overflowHelper.text(this.getInputValue());return this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var s=this.$input.val().length,u=this.$input[0].selectionStart,r;if(k.isNumber(u)){return u===s}else{if(document.selection){r=document.selection.createRange();r.moveStart("character",-s);return s===r.text.length}}return true}});return o;function q(r){return d("<span></span>").css({position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:r.css("font-family"),fontSize:r.css("font-size"),fontStyle:r.css("font-style"),fontVariant:r.css("font-variant"),fontWeight:r.css("font-weight"),wordSpacing:r.css("word-spacing"),letterSpacing:r.css("letter-spacing"),textIndent:r.css("text-indent"),textRendering:r.css("text-rendering"),textTransform:r.css("text-transform")}).insertAfter(r)}function n(s,r){s=(s||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ");r=(r||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ");return s===r}}();var g=function(){var q={suggestionsList:'<span class="tt-suggestions"></span>'},o={suggestionsList:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"}};function r(s){k.bindAll(this);this.isOpen=false;this.isEmpty=true;this.isMouseOverDropdown=false;this.$menu=d(s.menu).on("mouseenter.tt",this._handleMouseenter).on("mouseleave.tt",this._handleMouseleave).on("click.tt",".tt-suggestion",this._handleSelection).on("mouseover.tt",".tt-suggestion",this._handleMouseover)}k.mixin(r.prototype,l,{_handleMouseenter:function(){this.isMouseOverDropdown=true},_handleMouseleave:function(){this.isMouseOverDropdown=false},_handleMouseover:function(u){var s=d(u.currentTarget);this._getSuggestions().removeClass("tt-is-under-cursor");s.addClass("tt-is-under-cursor")},_handleSelection:function(u){var s=d(u.currentTarget);this.trigger("suggestionSelected",n(s))},_show:function(){this.$menu.css("display","block")},_hide:function(){this.$menu.hide()},_moveCursor:function(v){var x,u,s,w;if(!this.isVisible()){return}x=this._getSuggestions();u=x.filter(".tt-is-under-cursor");u.removeClass("tt-is-under-cursor");s=x.index(u)+v;s=(s+1)%(x.length+1)-1;if(s===-1){this.trigger("cursorRemoved");return}else{if(s<-1){s=x.length-1}}w=x.eq(s).addClass("tt-is-under-cursor");this._ensureVisibility(w);this.trigger("cursorMoved",n(w))},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")},_ensureVisibility:function(w){var x=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),u=this.$menu.scrollTop(),s=w.position().top,v=s+w.outerHeight(true);if(s<0){this.$menu.scrollTop(u+s)}else{if(x<v){this.$menu.scrollTop(u+(v-x))}}},destroy:function(){this.$menu.off(".tt");this.$menu=null},isVisible:function(){return this.isOpen&&!this.isEmpty},closeUnlessMouseIsOverDropdown:function(){if(!this.isMouseOverDropdown){this.close()}},close:function(){if(this.isOpen){this.isOpen=false;this.isMouseOverDropdown=false;this._hide();this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor");this.trigger("closed")}},open:function(){if(!this.isOpen){this.isOpen=true;!this.isEmpty&&this._show();this.trigger("opened")}},setLanguageDirection:function(s){var u={left:"0",right:"auto"},v={left:"auto",right:" 0"};s==="ltr"?this.$menu.css(u):this.$menu.css(v)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(+1)},getSuggestionUnderCursor:function(){var s=this._getSuggestions().filter(".tt-is-under-cursor").first();return s.length>0?n(s):null},getFirstSuggestion:function(){var s=this._getSuggestions().first();return s.length>0?n(s):null},renderSuggestions:function(w,x){var s="tt-dataset-"+w.name,u='<div class="tt-suggestion">%body</div>',A,z,B=this.$menu.find("."+s),v,y,C;if(B.length===0){z=d(q.suggestionsList).css(o.suggestionsList);B=d("<div></div>").addClass(s).append(w.header).append(z).append(w.footer).appendTo(this.$menu)}if(x.length>0){this.isEmpty=false;this.isOpen&&this._show();v=document.createElement("div");y=document.createDocumentFragment();k.each(x,function(E,D){D.dataset=w.name;A=w.template(D.datum);v.innerHTML=u.replace("%body",A);C=d(v.firstChild).css(o.suggestion).data("suggestion",D);C.children().each(function(){d(this).css(o.suggestionChild)});y.appendChild(C[0])});B.show().find(".tt-suggestions").html(y)}else{this.clearSuggestions(w.name)}this.trigger("suggestionsRendered")},clearSuggestions:function(v){var s=v?this.$menu.find(".tt-dataset-"+v):this.$menu.find('[class^="tt-dataset-"]'),u=s.find(".tt-suggestions");s.hide();u.empty();if(this._getSuggestions().length===0){this.isEmpty=true;this._hide()}}});return r;function n(s){return s.data("suggestion")}}();var i=function(){var s={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',dropdown:'<span class="tt-dropdown-menu"></span>'},r={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},query:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"}};if(k.isMsie()){k.mixin(r.query,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})}if(k.isMsie()&&k.isMsie()<=7){k.mixin(r.wrapper,{display:"inline",zoom:"1"});k.mixin(r.query,{marginTop:"-1px"})}function o(w){var v,x,u;k.bindAll(this);this.$node=n(w.input);this.datasets=w.datasets;this.dir=null;this.eventBus=w.eventBus;v=this.$node.find(".tt-dropdown-menu");x=this.$node.find(".tt-query");u=this.$node.find(".tt-hint");this.dropdownView=new g({menu:v}).on("suggestionSelected",this._handleSelection).on("cursorMoved",this._clearHint).on("cursorMoved",this._setInputValueToSuggestionUnderCursor).on("cursorRemoved",this._setInputValueToQuery).on("cursorRemoved",this._updateHint).on("suggestionsRendered",this._updateHint).on("opened",this._updateHint).on("closed",this._clearHint).on("opened closed",this._propagateEvent);this.inputView=new c({input:x,hint:u}).on("focused",this._openDropdown).on("blured",this._closeDropdown).on("blured",this._setInputValueToQuery).on("enterKeyed tabKeyed",this._handleSelection).on("queryChanged",this._clearHint).on("queryChanged",this._clearSuggestions).on("queryChanged",this._getSuggestions).on("whitespaceChanged",this._updateHint).on("queryChanged whitespaceChanged",this._openDropdown).on("queryChanged whitespaceChanged",this._setLanguageDirection).on("escKeyed",this._closeDropdown).on("escKeyed",this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed",this._managePreventDefault).on("upKeyed downKeyed",this._moveDropdownCursor).on("upKeyed downKeyed",this._openDropdown).on("tabKeyed leftKeyed rightKeyed",this._autocomplete)}k.mixin(o.prototype,l,{_managePreventDefault:function(x){var w=x.data,y,u,v=false;switch(x.type){case"tabKeyed":y=this.inputView.getHintValue();u=this.inputView.getInputValue();v=y&&y!==u;break;case"upKeyed":case"downKeyed":v=!w.shiftKey&&!w.ctrlKey&&!w.metaKey;break}v&&w.preventDefault()},_setLanguageDirection:function(){var u=this.inputView.getLanguageDirection();if(u!==this.dir){this.dir=u;this.$node.css("direction",u);this.dropdownView.setLanguageDirection(u)}},_updateHint:function(){var x=this.dropdownView.getFirstSuggestion(),w=x?x.value:null,A=this.dropdownView.isVisible(),z=this.inputView.isOverflow(),v,B,C,u,y;if(w&&A&&!z){v=this.inputView.getInputValue();B=v.replace(/\s{2,}/g," ").replace(/^\s+/g,"");C=k.escapeRegExChars(B);u=new RegExp("^(?:"+C+")(.*$)","i");y=u.exec(w);this.inputView.setHintValue(v+(y?y[1]:""))}},_clearHint:function(){this.inputView.setHintValue("")},_clearSuggestions:function(){this.dropdownView.clearSuggestions()},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursor:function(v){var u=v.data;this.inputView.setInputValue(u.value,true)},_openDropdown:function(){this.dropdownView.open()},_closeDropdown:function(u){this.dropdownView[u.type==="blured"?"closeUnlessMouseIsOverDropdown":"close"]()},_moveDropdownCursor:function(v){var u=v.data;if(!u.shiftKey&&!u.ctrlKey&&!u.metaKey){this.dropdownView[v.type==="upKeyed"?"moveCursorUp":"moveCursorDown"]()}},_handleSelection:function(w){var v=w.type==="suggestionSelected",u=v?w.data:this.dropdownView.getSuggestionUnderCursor();if(u){this.inputView.setInputValue(u.value);v?this.inputView.focus():w.data.preventDefault();v&&k.isMsie()?k.defer(this.dropdownView.close):this.dropdownView.close();this.eventBus.trigger("selected",u.datum,u.dataset)}},_getSuggestions:function(){var u=this,v=this.inputView.getQuery();if(k.isBlankString(v)){return}k.each(this.datasets,function(w,x){x.getSuggestions(v,function(y){if(v===u.inputView.getQuery()){u.dropdownView.renderSuggestions(x,y)}})})},_autocomplete:function(y){var v,u,x,z,w;if(y.type==="rightKeyed"||y.type==="leftKeyed"){v=this.inputView.isCursorAtEnd();u=this.inputView.getLanguageDirection()==="ltr"?y.type==="leftKeyed":y.type==="rightKeyed";if(!v||u){return}}x=this.inputView.getQuery();z=this.inputView.getHintValue();if(z!==""&&x!==z){w=this.dropdownView.getFirstSuggestion();this.inputView.setInputValue(w.value);this.eventBus.trigger("autocompleted",w.datum,w.dataset)}},_propagateEvent:function(u){this.eventBus.trigger(u.type)},destroy:function(){this.inputView.destroy();this.dropdownView.destroy();q(this.$node);this.$node=null},setQuery:function(u){this.inputView.setQuery(u);this.inputView.setInputValue(u);this._clearHint();this._clearSuggestions();this._getSuggestions()}});return o;function n(u){var w=d(s.wrapper),y=d(s.dropdown),z=d(u),v=d(s.hint);w=w.css(r.wrapper);y=y.css(r.dropdown);v.css(r.hint).css({backgroundAttachment:z.css("background-attachment"),backgroundClip:z.css("background-clip"),backgroundColor:z.css("background-color"),backgroundImage:z.css("background-image"),backgroundOrigin:z.css("background-origin"),backgroundPosition:z.css("background-position"),backgroundRepeat:z.css("background-repeat"),backgroundSize:z.css("background-size")});z.data("ttAttrs",{dir:z.attr("dir"),autocomplete:z.attr("autocomplete"),spellcheck:z.attr("spellcheck"),style:z.attr("style")});z.addClass("tt-query").attr({autocomplete:"off",spellcheck:false}).css(r.query);try{!z.attr("dir")&&z.attr("dir","auto")}catch(x){}return z.wrap(w).parent().prepend(v).append(y)}function q(u){var v=u.find(".tt-query");k.each(v.data("ttAttrs"),function(w,x){k.isUndefined(x)?v.removeAttr(w):v.attr(w,x)});v.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(u);u.remove()}}();(function(){var o={},q="ttView",n;n={initialize:function(u){var s;u=k.isArray(u)?u:[u];if(u.length===0){d.error("no datasets provided")}s=k.map(u,function(w){var v=o[w.name]?o[w.name]:new b(w);if(w.name){o[w.name]=v}return v});return this.each(r);function r(){var x=d(this),w,v=new f({el:x});w=k.map(s,function(y){return y.initialize()});x.data(q,new i({input:x,eventBus:v=new f({el:x}),datasets:s}));d.when.apply(d,w).always(function(){k.defer(function(){v.trigger("initialized")})})}},destroy:function(){return this.each(r);function r(){var u=d(this),s=u.data(q);if(s){s.destroy();u.removeData(q)}}},setQuery:function(r){return this.each(s);function s(){var u=d(this).data(q);u&&u.setQuery(r)}}};jQuery.fn.typeahead=function(r){if(n[r]){return n[r].apply(this,[].slice.call(arguments,1))}else{return n.initialize.apply(this,arguments)}}})()})(window.jQuery);
 
 /*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 (function(b){b.extend(b.fn,{validate:function(c){if(!this.length){if(c&&c.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")}return}var d=b.data(this[0],"validator");if(d){return d}this.attr("novalidate","novalidate");d=new b.validator(c,this[0]);b.data(this[0],"validator",d);if(d.settings.onsubmit){this.validateDelegate(":submit","click",function(e){if(d.settings.submitHandler){d.submitButton=e.target}if(b(e.target).hasClass("cancel")){d.cancelSubmit=true}if(b(e.target).attr("formnovalidate")!==undefined){d.cancelSubmit=true}});this.submit(function(e){if(d.settings.debug){e.preventDefault()}function f(){var g;if(d.settings.submitHandler){if(d.submitButton){g=b("<input type='hidden'/>").attr("name",d.submitButton.name).val(b(d.submitButton).val()).appendTo(d.currentForm)}d.settings.submitHandler.call(d,d.currentForm,e);if(d.submitButton){g.remove()}return false}return true}if(d.cancelSubmit){d.cancelSubmit=false;return f()}if(d.form()){if(d.pendingRequest){d.formSubmitted=true;return false}return f()}else{d.focusInvalid();return false}})}return d},valid:function(){if(b(this[0]).is("form")){return this.validate().form()}else{var d=true;var c=b(this[0].form).validate();this.each(function(){d=d&&c.element(this)});return d}},removeAttrs:function(e){var c={},d=this;b.each(e.split(/\s/),function(f,g){c[g]=d.attr(g);d.removeAttr(g)});return c},rules:function(f,c){var h=this[0];if(f){var e=b.data(h.form,"validator").settings;var j=e.rules;var k=b.validator.staticRules(h);switch(f){case"add":b.extend(k,b.validator.normalizeRule(c));delete k.messages;j[h.name]=k;if(c.messages){e.messages[h.name]=b.extend(e.messages[h.name],c.messages)}break;case"remove":if(!c){delete j[h.name];return k}var i={};b.each(c.split(/\s/),function(l,m){i[m]=k[m];delete k[m]});return i}}var g=b.validator.normalizeRules(b.extend({},b.validator.classRules(h),b.validator.attributeRules(h),b.validator.dataRules(h),b.validator.staticRules(h)),h);if(g.required){var d=g.required;delete g.required;g=b.extend({required:d},g)}return g}});b.extend(b.expr[":"],{blank:function(c){return!b.trim(""+b(c).val())},filled:function(c){return!!b.trim(""+b(c).val())},unchecked:function(c){return!b(c).prop("checked")}});b.validator=function(c,d){this.settings=b.extend(true,{},b.validator.defaults,c);this.currentForm=d;this.init()};b.validator.format=function(c,d){if(arguments.length===1){return function(){var e=b.makeArray(arguments);e.unshift(c);return b.validator.format.apply(this,e)}}if(arguments.length>2&&d.constructor!==Array){d=b.makeArray(arguments).slice(1)}if(d.constructor!==Array){d=[d]}b.each(d,function(e,f){c=c.replace(new RegExp("\\{"+e+"\\}","g"),function(){return f})});return c};b.extend(b.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:b([]),errorLabelContainer:b([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(c,d){this.lastActive=c;if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,c,this.settings.errorClass,this.settings.validClass)}this.addWrapper(this.errorsFor(c)).hide()}},onfocusout:function(c,d){if(!this.checkable(c)&&(c.name in this.submitted||!this.optional(c))){this.element(c)}},onkeyup:function(c,d){if(d.which===9&&this.elementValue(c)===""){return}else{if(c.name in this.submitted||c===this.lastElement){this.element(c)}}},onclick:function(c,d){if(c.name in this.submitted){this.element(c)}else{if(c.parentNode.name in this.submitted){this.element(c.parentNode)}}},highlight:function(e,c,d){if(e.type==="radio"){this.findByName(e.name).addClass(c).removeClass(d)}else{b(e).addClass(c).removeClass(d)}},unhighlight:function(e,c,d){if(e.type==="radio"){this.findByName(e.name).removeClass(c).addClass(d)}else{b(e).removeClass(c).addClass(d)}}},setDefaults:function(c){b.extend(b.validator.defaults,c)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:b.validator.format("Please enter no more than {0} characters."),minlength:b.validator.format("Please enter at least {0} characters."),rangelength:b.validator.format("Please enter a value between {0} and {1} characters long."),range:b.validator.format("Please enter a value between {0} and {1}."),max:b.validator.format("Please enter a value less than or equal to {0}."),min:b.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=b(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||b(this.currentForm);this.containers=b(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var c=(this.groups={});b.each(this.settings.groups,function(f,g){if(typeof g==="string"){g=g.split(/\s/)}b.each(g,function(i,h){c[h]=f})});var e=this.settings.rules;b.each(e,function(f,g){e[f]=b.validator.normalizeRule(g)});function d(h){var g=b.data(this[0].form,"validator"),f="on"+h.type.replace(/^validate/,"");if(g.settings[f]){g.settings[f].call(g,this[0],h)}}b(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",d).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",d);if(this.settings.invalidHandler){b(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)}},form:function(){this.checkForm();b.extend(this.submitted,this.errorMap);this.invalid=b.extend({},this.errorMap);if(!this.valid()){b(this.currentForm).triggerHandler("invalid-form",[this])}this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var c=0,d=(this.currentElements=this.elements());d[c];c++){this.check(d[c])}return this.valid()},element:function(d){d=this.validationTargetFor(this.clean(d));this.lastElement=d;this.prepareElement(d);this.currentElements=b(d);var c=this.check(d)!==false;if(c){delete this.invalid[d.name]}else{this.invalid[d.name]=true}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)}this.showErrors();return c},showErrors:function(d){if(d){b.extend(this.errorMap,d);this.errorList=[];for(var c in d){this.errorList.push({message:d[c],element:this.findByName(c)[0]})}this.successList=b.grep(this.successList,function(e){return!(e.name in d)})}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)}else{this.defaultShowErrors()}},resetForm:function(){if(b.fn.resetForm){b(this.currentForm).resetForm()}this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var d=0;for(var c in e){d++}return d},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()===0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid){try{b(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(c){}}},findLastActive:function(){var c=this.lastActive;return c&&b.grep(this.errorList,function(d){return d.element.name===c.name}).length===1&&c},elements:function(){var d=this,c={};return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&d.settings.debug&&window.console){console.error("%o has no name assigned",this)}if(this.name in c||!d.objectLength(b(this).rules())){return false}c[this.name]=true;return true})},clean:function(c){return b(c)[0]},errors:function(){var c=this.settings.errorClass.replace(" ",".");return b(this.settings.errorElement+"."+c,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=b([]);this.toHide=b([]);this.currentElements=b([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(c){this.reset();this.toHide=this.errorsFor(c)},elementValue:function(c){var d=b(c).attr("type"),e=b(c).val();if(d==="radio"||d==="checkbox"){return b("input[name='"+b(c).attr("name")+"']:checked").val()}if(typeof e==="string"){return e.replace(/\r/g,"")}return e},check:function(d){d=this.validationTargetFor(this.clean(d));var j=b(d).rules();var f=false;var i=this.elementValue(d);var c;for(var k in j){var h={method:k,parameters:j[k]};try{c=b.validator.methods[k].call(this,i,d,h.parameters);if(c==="dependency-mismatch"){f=true;continue}f=false;if(c==="pending"){this.toHide=this.toHide.not(this.errorsFor(d));return}if(!c){this.formatAndAdd(d,h);return false}}catch(g){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+d.id+", check the '"+h.method+"' method.",g)}throw g}}if(f){return}if(this.objectLength(j)){this.successList.push(d)}return true},customDataMessage:function(c,d){return b(c).data("msg-"+d.toLowerCase())||(c.attributes&&b(c).attr("data-msg-"+d.toLowerCase()))},customMessage:function(d,e){var c=this.settings.messages[d];return c&&(c.constructor===String?c:c[e])},findDefined:function(){for(var c=0;c<arguments.length;c++){if(arguments[c]!==undefined){return arguments[c]}}return undefined},defaultMessage:function(c,d){return this.findDefined(this.customMessage(c.name,d),this.customDataMessage(c,d),!this.settings.ignoreTitle&&c.title||undefined,b.validator.messages[d],"<strong>Warning: No message defined for "+c.name+"</strong>")},formatAndAdd:function(d,f){var e=this.defaultMessage(d,f.method),c=/\$?\{(\d+)\}/g;if(typeof e==="function"){e=e.call(this,f.parameters,d)}else{if(c.test(e)){e=b.validator.format(e.replace(c,"{$1}"),f.parameters)}}this.errorList.push({message:e,element:d});this.errorMap[d.name]=e;this.submitted[d.name]=e},addWrapper:function(c){if(this.settings.wrapper){c=c.add(c.parent(this.settings.wrapper))}return c},defaultShowErrors:function(){var d,e;for(d=0;this.errorList[d];d++){var c=this.errorList[d];if(this.settings.highlight){this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass)}this.showLabel(c.element,c.message)}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)}if(this.settings.success){for(d=0;this.successList[d];d++){this.showLabel(this.successList[d])}}if(this.settings.unhighlight){for(d=0,e=this.validElements();e[d];d++){this.settings.unhighlight.call(this,e[d],this.settings.errorClass,this.settings.validClass)}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return b(this.errorList).map(function(){return this.element})},showLabel:function(d,e){var c=this.errorsFor(d);if(c.length){c.removeClass(this.settings.validClass).addClass(this.settings.errorClass);c.html(e)}else{c=b("<"+this.settings.errorElement+">").attr("for",this.idOrName(d)).addClass(this.settings.errorClass).html(e||"");if(this.settings.wrapper){c=c.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()}if(!this.labelContainer.append(c).length){if(this.settings.errorPlacement){this.settings.errorPlacement(c,b(d))}else{c.insertAfter(d)}}}if(!e&&this.settings.success){c.text("");if(typeof this.settings.success==="string"){c.addClass(this.settings.success)}else{this.settings.success(c,d)}}this.toShow=this.toShow.add(c)},errorsFor:function(d){var c=this.idOrName(d);return this.errors().filter(function(){return b(this).attr("for")===c})},idOrName:function(c){return this.groups[c.name]||(this.checkable(c)?c.name:c.id||c.name)},validationTargetFor:function(c){if(this.checkable(c)){c=this.findByName(c.name).not(this.settings.ignore)[0]}return c},checkable:function(c){return(/radio|checkbox/i).test(c.type)},findByName:function(c){return b(this.currentForm).find("[name='"+c+"']")},getLength:function(d,c){switch(c.nodeName.toLowerCase()){case"select":return b("option:selected",c).length;case"input":if(this.checkable(c)){return this.findByName(c.name).filter(":checked").length}}return d.length},depend:function(d,c){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,c):true},dependTypes:{"boolean":function(d,c){return d},string:function(d,c){return!!b(d,c.form).length},"function":function(d,c){return d(c)}},optional:function(c){var d=this.elementValue(c);return!b.validator.methods.required.call(this,d,c)&&"dependency-mismatch"},startRequest:function(c){if(!this.pending[c.name]){this.pendingRequest++;this.pending[c.name]=true}},stopRequest:function(c,d){this.pendingRequest--;if(this.pendingRequest<0){this.pendingRequest=0}delete this.pending[c.name];if(d&&this.pendingRequest===0&&this.formSubmitted&&this.form()){b(this.currentForm).submit();this.formSubmitted=false}else{if(!d&&this.pendingRequest===0&&this.formSubmitted){b(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false}}},previousValue:function(c){return b.data(c,"previousValue")||b.data(c,"previousValue",{old:null,valid:true,message:this.defaultMessage(c,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(c,d){if(c.constructor===String){this.classRuleSettings[c]=d}else{b.extend(this.classRuleSettings,c)}},classRules:function(d){var e={};var c=b(d).attr("class");if(c){b.each(c.split(" "),function(){if(this in b.validator.classRuleSettings){b.extend(e,b.validator.classRuleSettings[this])}})}return e},attributeRules:function(d){var g={};var c=b(d);var e=c[0].getAttribute("type");for(var h in b.validator.methods){var f;if(h==="required"){f=c.get(0).getAttribute(h);if(f===""){f=true}f=!!f}else{f=c.attr(h)}if(/min|max/.test(h)&&(e===null||/number|range|text/.test(e))){f=Number(f)}if(f){g[h]=f}else{if(e===h&&e!=="range"){g[h]=true}}}if(g.maxlength&&/-1|2147483647|524288/.test(g.maxlength)){delete g.maxlength}return g},dataRules:function(d){var g,e,f={},c=b(d);for(g in b.validator.methods){e=c.data("rule-"+g.toLowerCase());if(e!==undefined){f[g]=e}}return f},staticRules:function(d){var e={};var c=b.data(d.form,"validator");if(c.settings.rules){e=b.validator.normalizeRule(c.settings.rules[d.name])||{}}return e},normalizeRules:function(d,c){b.each(d,function(g,f){if(f===false){delete d[g];return}if(f.param||f.depends){var e=true;switch(typeof f.depends){case"string":e=!!b(f.depends,c.form).length;break;case"function":e=f.depends.call(c,c);break}if(e){d[g]=f.param!==undefined?f.param:true}else{delete d[g]}}});b.each(d,function(e,f){d[e]=b.isFunction(f)?f(c):f});b.each(["minlength","maxlength"],function(){if(d[this]){d[this]=Number(d[this])}});b.each(["rangelength","range"],function(){var e;if(d[this]){if(b.isArray(d[this])){d[this]=[Number(d[this][0]),Number(d[this][1])]}else{if(typeof d[this]==="string"){e=d[this].split(/[\s,]+/);d[this]=[Number(e[0]),Number(e[1])]}}}});if(b.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];delete d.min;delete d.max}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];delete d.minlength;delete d.maxlength}}return d},normalizeRule:function(d){if(typeof d==="string"){var c={};b.each(d.split(/\s/),function(){c[this]=true});d=c}return d},addMethod:function(c,e,d){b.validator.methods[c]=e;b.validator.messages[c]=d!==undefined?d:b.validator.messages[c];if(e.length<3){b.validator.addClassRules(c,b.validator.normalizeRule(c))}},methods:{required:function(d,c,f){if(!this.depend(f,c)){return"dependency-mismatch"}if(c.nodeName.toLowerCase()==="select"){var e=b(c).val();return e&&e.length>0}if(this.checkable(c)){return this.getLength(d,c)>0}return b.trim(d).length>0},email:function(d,c){return this.optional(c)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)},url:function(d,c){return this.optional(c)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)},date:function(d,c){return this.optional(c)||!/Invalid|NaN/.test(new Date(d).toString())},dateISO:function(d,c){return this.optional(c)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)},number:function(d,c){return this.optional(c)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(d)},digits:function(d,c){return this.optional(c)||/^\d+$/.test(d)},creditcard:function(g,d){if(this.optional(d)){return"dependency-mismatch"}if(/[^0-9 \-]+/.test(g)){return false}var h=0,f=0,c=false;g=g.replace(/\D/g,"");for(var i=g.length-1;i>=0;i--){var e=g.charAt(i);f=parseInt(e,10);if(c){if((f*=2)>9){f-=9}}h+=f;c=!c}return(h%10)===0},minlength:function(e,c,f){var d=b.isArray(e)?e.length:this.getLength(b.trim(e),c);return this.optional(c)||d>=f},maxlength:function(e,c,f){var d=b.isArray(e)?e.length:this.getLength(b.trim(e),c);return this.optional(c)||d<=f},rangelength:function(e,c,f){var d=b.isArray(e)?e.length:this.getLength(b.trim(e),c);return this.optional(c)||(d>=f[0]&&d<=f[1])},min:function(d,c,e){return this.optional(c)||d>=e},max:function(d,c,e){return this.optional(c)||d<=e},range:function(d,c,e){return this.optional(c)||(d>=e[0]&&d<=e[1])},equalTo:function(d,c,f){var e=b(f);if(this.settings.onfocusout){e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){b(c).valid()})}return d===e.val()},remote:function(g,d,h){if(this.optional(d)){return"dependency-mismatch"}var e=this.previousValue(d);if(!this.settings.messages[d.name]){this.settings.messages[d.name]={}}e.originalMessage=this.settings.messages[d.name].remote;this.settings.messages[d.name].remote=e.message;h=typeof h==="string"&&{url:h}||h;if(e.old===g){return e.valid}e.old=g;var c=this;this.startRequest(d);var f={};f[d.name]=g;b.ajax(b.extend(true,{url:h,mode:"abort",port:"validate"+d.name,dataType:"json",data:f,success:function(j){c.settings.messages[d.name].remote=e.originalMessage;var l=j===true||j==="true";if(l){var i=c.formSubmitted;c.prepareElement(d);c.formSubmitted=i;c.successList.push(d);delete c.invalid[d.name];c.showErrors()}else{var m={};var k=j||c.defaultMessage(d,"remote");m[d.name]=e.message=b.isFunction(k)?k(g):k;c.invalid[d.name]=true;c.showErrors(m)}e.valid=l;c.stopRequest(d,l)}},h));return"pending"}}});b.format=b.validator.format}(jQuery));
 
 /*!
  * Ajax prefilter
  */
  (function(d){var b={};if(d.ajaxPrefilter){d.ajaxPrefilter(function(g,f,h){var e=g.port;if(g.mode==="abort"){if(b[e]){b[e].abort()}b[e]=h}})}else{var c=d.ajax;d.ajax=function(f){var g=("mode"in f?f:d.ajaxSettings).mode,e=("port"in f?f:d.ajaxSettings).port;if(g==="abort"){if(b[e]){b[e].abort()}b[e]=c.apply(this,arguments);return b[e]}return c.apply(this,arguments)}}}(jQuery));
  
/*!
 * Validate delegate
 */  
(function(b){b.extend(b.fn,{validateDelegate:function(e,d,c){return this.bind(d,function(f){var g=b(f.target);if(g.is(e)){return c.apply(g,arguments)}})}})}(jQuery));

/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */ 
(function(){function b(c){return c.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")}jQuery.validator.addMethod("maxWords",function(d,c,e){return this.optional(c)||b(d).match(/\b\w+\b/g).length<=e},jQuery.validator.format("Please enter {0} words or less."));jQuery.validator.addMethod("minWords",function(d,c,e){return this.optional(c)||b(d).match(/\b\w+\b/g).length>=e},jQuery.validator.format("Please enter at least {0} words."));jQuery.validator.addMethod("rangeWords",function(f,c,g){var e=b(f);var d=/\b\w+\b/g;return this.optional(c)||e.match(d).length>=g[0]&&e.match(d).length<=g[1]},jQuery.validator.format("Please enter between {0} and {1} words."))}());jQuery.validator.addMethod("letterswithbasicpunc",function(c,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(c)},"Letters or punctuation only please");jQuery.validator.addMethod("alphanumeric",function(c,b){return this.optional(b)||/^\w+$/i.test(c)},"Letters, numbers, and underscores only please");jQuery.validator.addMethod("lettersonly",function(c,b){return this.optional(b)||/^[a-z]+$/i.test(c)},"Letters only please");jQuery.validator.addMethod("nowhitespace",function(c,b){return this.optional(b)||/^\S+$/i.test(c)},"No white space please");jQuery.validator.addMethod("ziprange",function(c,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(c)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");jQuery.validator.addMethod("zipcodeUS",function(c,b){return this.optional(b)||/\d{5}-\d{4}$|^\d{5}$/.test(c)},"The specified US ZIP Code is invalid");jQuery.validator.addMethod("integer",function(c,b){return this.optional(b)||/^-?\d+$/.test(c)},"A positive or negative non-decimal number please");jQuery.validator.addMethod("vinUS",function(q){if(q.length!==17){return false}var j,b,m,k,c,l;var e=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"];var o=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9];var h=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];var g=0;for(j=0;j<17;j++){k=h[j];m=q.slice(j,j+1);if(j===8){l=m}if(!isNaN(m)){m*=k}else{for(b=0;b<e.length;b++){if(m.toUpperCase()===e[b]){m=o[b];m*=k;if(isNaN(l)&&b===8){l=e[b]}break}}}g+=m}c=g%11;if(c===10){c="X"}if(c===l){return true}return false},"The specified vehicle identification number (VIN) is invalid.");jQuery.validator.addMethod("dateITA",function(f,d){var b=false;var h=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(h.test(f)){var j=f.split("/");var e=parseInt(j[0],10);var c=parseInt(j[1],10);var g=parseInt(j[2],10);var i=new Date(g,c-1,e);if((i.getFullYear()===g)&&(i.getMonth()===c-1)&&(i.getDate()===e)){b=true}else{b=false}}else{b=false}return this.optional(d)||b},"Please enter a correct date");jQuery.validator.addMethod("iban",function(r,k){if(this.optional(k)){return true}if(!(/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(r))){return false}var h=r.replace(/ /g,"").toUpperCase();var d=h.substring(0,2);var b={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"};var n=b[d];if(typeof n!=="undefined"){var l=new RegExp("^[A-Z]{2}\\d{2}"+n+"$","");if(!(l.test(h))){return false}}var f=h.substring(4,h.length)+h.substring(0,4);var g="";var m=true;var e;for(var j=0;j<f.length;j++){e=f.charAt(j);if(e!=="0"){m=false}if(!m){g+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e)}}var s="";var q="";for(var c=0;c<g.length;c++){var o=g.charAt(c);q=""+s+""+o;s=q%97}return s===1},"Please specify a valid IBAN");jQuery.validator.addMethod("dateNL",function(c,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(c)},"Please enter a correct date");jQuery.validator.addMethod("phoneNL",function(c,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(c)},"Please specify a valid phone number.");jQuery.validator.addMethod("mobileNL",function(c,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(c)},"Please specify a valid mobile number");jQuery.validator.addMethod("postalcodeNL",function(c,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(c)},"Please specify a valid postal code");jQuery.validator.addMethod("bankaccountNL",function(g,d){if(this.optional(d)){return true}if(!(/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(g))){return false}var f=g.replace(/ /g,"");var e=0;var b=f.length;for(var i=0;i<b;i++){var c=b-i;var h=f.substring(i,i+1);e=e+c*h}return e%11===0},"Please specify a valid bank account number");jQuery.validator.addMethod("giroaccountNL",function(c,b){return this.optional(b)||/^[0-9]{1,7}$/.test(c)},"Please specify a valid giro account number");jQuery.validator.addMethod("bankorgiroaccountNL",function(c,b){return this.optional(b)||($.validator.methods.bankaccountNL.call(this,c,b))||($.validator.methods.giroaccountNL.call(this,c,b))},"Please specify a valid bank or giro account number");jQuery.validator.addMethod("time",function(c,b){return this.optional(b)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(c)},"Please enter a valid time, between 00:00 and 23:59");jQuery.validator.addMethod("time12h",function(c,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(c)},"Please enter a valid time in 12-hour am/pm format");jQuery.validator.addMethod("phoneUS",function(b,c){b=b.replace(/\s+/g,"");return this.optional(c)||b.length>9&&b.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number");jQuery.validator.addMethod("phoneUK",function(b,c){b=b.replace(/\(|\)|\s+|-/g,"");return this.optional(c)||b.length>9&&b.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number");jQuery.validator.addMethod("mobileUK",function(b,c){b=b.replace(/\(|\)|\s+|-/g,"");return this.optional(c)||b.length>9&&b.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number");jQuery.validator.addMethod("phonesUK",function(b,c){b=b.replace(/\(|\)|\s+|-/g,"");return this.optional(c)||b.length>9&&b.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number");jQuery.validator.addMethod("postcodeUK",function(c,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(c)},"Please specify a valid UK postcode");jQuery.validator.addMethod("strippedminlength",function(c,b,d){return jQuery(c).text().length>=d},jQuery.validator.format("Please enter at least {0} characters"));jQuery.validator.addMethod("email2",function(c,b,d){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(c)},jQuery.validator.messages.email);jQuery.validator.addMethod("url2",function(c,b,d){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)},jQuery.validator.messages.url);jQuery.validator.addMethod("creditcardtypes",function(c,b,d){if(/[^0-9\-]+/.test(c)){return false}c=c.replace(/\D/g,"");var e=0;if(d.mastercard){e|=1}if(d.visa){e|=2}if(d.amex){e|=4}if(d.dinersclub){e|=8}if(d.enroute){e|=16}if(d.discover){e|=32}if(d.jcb){e|=64}if(d.unknown){e|=128}if(d.all){e=1|2|4|8|16|32|64|128}if(e&1&&/^(5[12345])/.test(c)){return c.length===16}if(e&2&&/^(4)/.test(c)){return c.length===16}if(e&4&&/^(3[47])/.test(c)){return c.length===15}if(e&8&&/^(3(0[012345]|[68]))/.test(c)){return c.length===14}if(e&16&&/^(2(014|149))/.test(c)){return c.length===15}if(e&32&&/^(6011)/.test(c)){return c.length===16}if(e&64&&/^(3)/.test(c)){return c.length===16}if(e&64&&/^(2131|1800)/.test(c)){return c.length===15}if(e&128){return true}return false},"Please enter a valid credit card number.");jQuery.validator.addMethod("ipv4",function(c,b,d){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(c)},"Please enter a valid IP v4 address.");jQuery.validator.addMethod("ipv6",function(c,b,d){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(c)},"Please enter a valid IP v6 address.");jQuery.validator.addMethod("pattern",function(c,b,d){if(this.optional(b)){return true}if(typeof d==="string"){d=new RegExp("^(?:"+d+")$")}return d.test(c)},"Invalid format.");jQuery.validator.addMethod("require_from_group",function(h,g,e){var f=this;var c=e[1];var d=$(c,g.form).filter(function(){return f.elementValue(this)}).length>=e[0];if(!$(g).data("being_validated")){var b=$(c,g.form);b.data("being_validated",true);b.valid();$(g.form).valid();b.data("being_validated",false)}return d},jQuery.format("Please fill at least {0} of these fields."));jQuery.validator.addMethod("skip_or_fill_minimum",function(i,f,j){var c=this,d=j[0],e=j[1];var h=$(e,f.form).filter(function(){return c.elementValue(this)}).length;var b=h>=d||h===0;if(!$(f).data("being_validated")){var g=$(e,f.form);g.data("being_validated",true);g.valid();g.data("being_validated",false)}return b},jQuery.format("Please either skip these fields or fill at least {0} of them."));jQuery.validator.addMethod("accept",function(f,d,h){var g=typeof h==="string"?h.replace(/\s/g,"").replace(/,/g,"|"):"image/*",e=this.optional(d),c,b;if(e){return e}if($(d).attr("type")==="file"){g=g.replace(/\*/g,".*");if(d.files&&d.files.length){for(c=0;c<d.files.length;c++){b=d.files[c];if(!b.type.match(new RegExp(".?("+g+")$","i"))){return false}}}}return true},jQuery.format("Please enter a value with a valid mimetype."));jQuery.validator.addMethod("extension",function(c,b,d){d=typeof d==="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||c.match(new RegExp(".("+d+")$","i"))},jQuery.format("Please enter a value with a valid extension."));
 
 /*! DataTables 1.10.0-beta.2
 * 2008-2014 SpryMedia Ltd - datatables.net/license
 */

 /*!
  * Emiters 
  */
 function Emitter(b){if(b){return mixin(b)}}function mixin(c){for(var b in Emitter.prototype){c[b]=Emitter.prototype[b]}return c}Emitter.prototype.on=function(c,b){this._callbacks=this._callbacks||{};(this._callbacks[c]=this._callbacks[c]||[]).push(b);return this};Emitter.prototype.once=function(e,d){var c=this;this._callbacks=this._callbacks||{};function b(){c.off(e,b);d.apply(this,arguments)}d._off=b;this.on(e,b);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=function(e,c){this._callbacks=this._callbacks||{};var d=this._callbacks[e];if(!d){return this}if(1==arguments.length){delete this._callbacks[e];return this}var b=d.indexOf(c._off||c);if(~b){d.splice(b,1)}return this};Emitter.prototype.emit=function(f){this._callbacks=this._callbacks||{};var c=[].slice.call(arguments,1),e=this._callbacks[f];if(e){e=e.slice(0);for(var d=0,b=e.length;d<b;++d){e[d].apply(this,c)}}return this};Emitter.prototype.listeners=function(b){this._callbacks=this._callbacks||{};return this._callbacks[b]||[]};Emitter.prototype.hasListeners=function(b){return!!this.listeners(b).length};
 
/*!
 * Markdown
 */
(function(L){var e=L.Markdown=function e(S){switch(typeof S){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=S;break;default:if(S in e.dialects){this.dialect=e.dialects[S]}else{throw new Error("Unknown Markdown dialect '"+String(S)+"'")}break}this.em_state=[];this.strong_state=[];this.debug_indent=""};L.parse=function(U,S){var T=new e(S);return T.toTree(U)};L.toHTML=function v(V,U,T){var S=L.toHTMLTree(V,U,T);return L.renderJsonML(S)};L.toHTMLTree=function x(T,X,V){if(typeof T==="string"){T=this.parse(T,X)}var U=D(T),S={};if(U&&U.references){S=U.references}var W=i(T,S,V);q(W);return W};function f(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function I(){var S=require("util");return"Markdown.mk_block( "+S.inspect(this.toString())+", "+S.inspect(this.trailing)+", "+S.inspect(this.lineNumber)+" )"}var g=e.mk_block=function(V,T,S){if(arguments.length==1){T="\n\n"}var U=new String(V);U.trailing=T;U.inspect=I;U.toSource=f;if(S!=undefined){U.lineNumber=S}return U};function H(T){var U=0,S=-1;while((S=T.indexOf("\n",S+1))!==-1){U++}return U}e.prototype.split_blocks=function A(U,X){var V=/([\s\S]+?)($|\n(?:\s*\n|$)+)/g,W=[],S;var T=1;if((S=/^(\s*\n)/.exec(U))!=null){T+=H(S[0]);V.lastIndex=S[0].length}while((S=V.exec(U))!==null){W.push(g(S[1],S[2],T));T+=H(S[0])}return W};e.prototype.processBlock=function N(X,W){var T=this.dialect.block,S=T.__order__;if("__call__"in T){return T.__call__.call(this,X,W)}for(var V=0;V<S.length;V++){var U=T[S[V]].call(this,X,W);if(U){if(!B(U)||(U.length>0&&!(B(U[0])))){this.debug(S[V],"didn't return a proper array")}return U}}return[]};e.prototype.processInline=function h(S){return this.dialect.inline.__call__.call(this,String(S))};e.prototype.toTree=function J(U,T){var V=U instanceof Array?U:this.split_blocks(U);var W=this.tree;try{this.tree=T||this.tree||["markdown"];V:while(V.length){var S=this.processBlock(V.shift(),V);if(!S.length){continue V}this.tree.push.apply(this.tree,S)}return this.tree}finally{if(T){this.tree=W}}};e.prototype.debug=function(){var S=Array.prototype.slice.call(arguments);S.unshift(this.debug_indent);if(typeof print!=="undefined"){print.apply(print,S)}if(typeof console!=="undefined"&&typeof console.log!=="undefined"){console.log.apply(null,S)}};e.prototype.loop_re_over_block=function(V,W,U){var T,S=W.valueOf();while(S.length&&(T=V.exec(S))!=null){S=S.substr(T[0].length);U.call(this,T)}return S};e.dialects={};e.dialects.Gruber={block:{atxHeader:function s(U,T){var S=U.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!S){return undefined}var V=["header",{level:S[1].length}];Array.prototype.push.apply(V,this.processInline(S[2]));if(S[0].length<U.length){T.unshift(g(U.substr(S[0].length),U.trailing,U.lineNumber+2))}return[V]},setextHeader:function y(U,T){var S=U.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!S){return undefined}var W=(S[2]==="=")?1:2;var V=["header",{level:W},S[1]];if(S[0].length<U.length){T.unshift(g(U.substr(S[0].length),U.trailing,U.lineNumber+2))}return[V]},code:function l(X,W){var U=[],V=/^(?: {0,3}\t| {4})(.*)\n?/,T;if(!X.match(V)){return undefined}block_search:do{var S=this.loop_re_over_block(V,X.valueOf(),function(Y){U.push(Y[1])});if(S.length){W.unshift(g(S,X.trailing));break block_search}else{if(W.length){if(!W[0].match(V)){break block_search}U.push(X.trailing.replace(/[^\n]/g,"").substring(2));X=W.shift()}else{break block_search}}}while(true);return[["code_block",U.join("\n")]]},horizRule:function Q(U,T){var S=U.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!S){return undefined}var V=[["hr"]];if(S[1]){V.unshift.apply(V,this.processBlock(S[1],[]))}if(S[3]){T.unshift(g(S[3]))}return V},lists:(function(){var V="[*+-]|\\d+\\.",T=/[*+-]/,ab=/\d+\./,Z=new RegExp("^( {0,3})("+V+")[ \t]+"),U="(?: {0,3}\\t| {4})";function W(a){return new RegExp("(?:^("+U+"{0,"+a+"} {0,3})("+V+")\\s+)|(^"+U+"{0,"+(a-1)+"}[ ]{0,4})")}function S(a){return a.replace(/ {0,3}\t/g,"    ")}function aa(a,b,c,d){if(b){a.push(["para"].concat(c));return}var e=a[a.length-1]instanceof Array&&a[a.length-1][0]=="para"?a[a.length-1]:a;if(d&&a.length>1){c.unshift(d)}for(var f=0;f<c.length;f++){var g=c[f],af=typeof g=="string";if(af&&e.length>1&&typeof e[e.length-1]=="string"){e[e.length-1]+=g}else{e.push(g)}}}function X(a,b){var c=new RegExp("^("+U+"{"+a+"}.*?\\n?)*$"),af=new RegExp("^"+U+"{"+a+"}","gm"),ae=[];while(b.length>0){if(c.exec(b[0])){var d=b.shift(),ac=d.replace(af,"");ae.push(g(ac,d.trailing,d.lineNumber))}break}return ae}function Y(a,b,c){var d=a.list;var e=d[d.length-1];if(e[1]instanceof Array&&e[1][0]=="para"){return}if(b+1==c.length){e.push(["para"].concat(e.splice(1)))}else{var f=e.pop();e.push(["para"].concat(e.splice(1)),f)}}return function(d,e){var f=d.match(Z);if(!f){return undefined}function af(a){var b=T.exec(a[2])?["bulletlist"]:["numberlist"];g.push({list:b,indent:a[1]});return b}var g=[],at=af(f),ae,am=false,ax=[g[0].list],aq;loose_search:while(true){var h=d.split(/(?=\n)/);var i="";tight_search:for(var j=0;j<h.length;j++){var k="",ap=h[j].replace(/^\n/,function(a){k=a;return""});var l=W(g.length);f=ap.match(l);if(f[1]!==undefined){if(i.length){aa(ae,am,this.processInline(i),k);am=false;i=""}f[1]=S(f[1]);var m=Math.floor(f[1].length/4)+1;if(m>g.length){at=af(f);ae.push(at);ae=at[1]=["listitem"]}else{var n=false;for(aq=0;aq<g.length;aq++){if(g[aq].indent!=f[1]){continue}at=g[aq].list;g.splice(aq+1);n=true;break}if(!n){m++;if(m<=g.length){g.splice(m);at=g[m-1].list}else{at=af(f);ae.push(at)}}ae=["listitem"];at.push(ae)}k=""}if(ap.length>f[0].length){i+=k+ap.substr(f[0].length)}}if(i.length){aa(ae,am,this.processInline(i),k);am=false;i=""}var o=X(g.length,e);if(o.length>0){c(g,Y,this);ae.push.apply(ae,this.toTree(o,[]))}var p=e[0]&&e[0].valueOf()||"";if(p.match(Z)||p.match(/^ /)){d=e.shift();var q=this.dialect.block.horizRule(d,e);if(q){ax.push.apply(ax,q);break}c(g,Y,this);am=true;continue loose_search}break}return ax}})(),blockquote:function M(X,V){if(!X.match(/^>/m)){return undefined}var Z=[];if(X[0]!=">"){var T=X.split(/\n/),W=[];while(T.length&&T[0][0]!=">"){W.push(T.shift())}X=T.join("\n");Z.push.apply(Z,this.processBlock(W.join("\n"),[]))}while(V.length&&V[0][0]==">"){var S=V.shift();X=new String(X+X.trailing+S);X.trailing=S.trailing}var U=X.replace(/^> ?/gm,""),Y=this.tree;Z.push(this.toTree(U,["blockquote"]));return Z},referenceDefn:function K(W,V){var U=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!W.match(U)){return undefined}if(!D(this.tree)){this.tree.splice(1,0,{})}var T=D(this.tree);if(T.references===undefined){T.references={}}var S=this.loop_re_over_block(U,W,function(X){if(X[2]&&X[2][0]=="<"&&X[2][X[2].length-1]==">"){X[2]=X[2].substring(1,X[2].length-1)}var Y=T.references[X[1].toLowerCase()]={href:X[2]};if(X[4]!==undefined){Y.title=X[4]}else{if(X[5]!==undefined){Y.title=X[5]}}});if(S.length){V.unshift(g(S,W.trailing))}return[]},para:function E(T,S){return[["para"].concat(this.processInline(T))]}}};e.dialects.Gruber.inline={__oneElement__:function d(X,T,W){var S,U,Y=0;T=T||this.dialect.inline.__patterns__;var V=new RegExp("([\\s\\S]*?)("+(T.source||T)+")");S=V.exec(X);if(!S){return[X.length,X]}else{if(S[1]){return[S[1].length,S[1]]}}var U;if(S[2]in this.dialect.inline){U=this.dialect.inline[S[2]].call(this,X.substr(S.index),S,W||[])}U=U||[S[2].length,S[2]];return U},__call__:function r(W,U){var S=[],T;function V(X){if(typeof X=="string"&&typeof S[S.length-1]=="string"){S[S.length-1]+=X}else{S.push(X)}}while(W.length>0){T=this.dialect.inline.__oneElement__.call(this,W,U,S);W=W.substr(T.shift());c(T,V)}return S},"]":function(){},"}":function(){},"\\":function u(S){if(S.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/)){return[2,S[1]]}else{return[1,"\\"]}},"![":function m(U){var S=U.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(S){if(S[2]&&S[2][0]=="<"&&S[2][S[2].length-1]==">"){S[2]=S[2].substring(1,S[2].length-1)}S[2]=this.dialect.inline.__call__.call(this,S[2],/\\/)[0];var T={alt:S[1],href:S[2]||""};if(S[4]!==undefined){T.title=S[4]}return[S[0].length,["img",T]]}S=U.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/);if(S){return[S[0].length,["img_ref",{alt:S[1],ref:S[2].toLowerCase(),original:S[0]}]]}return[2,"!["]},"[":function n(a){var Z=String(a);var X=e.DialectHelpers.inline_until_char.call(this,a.substr(1),"]");if(!X){return[1,"["]}var b=1+X[0],T=X[1],Y,ab;a=a.substr(b);var V=a.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(V){var S=V[1];b+=V[0].length;if(S&&S[0]=="<"&&S[S.length-1]==">"){S=S.substring(1,S.length-1)}if(!V[3]){var U=1;for(var W=0;W<S.length;W++){switch(S[W]){case"(":U++;break;case")":if(--U==0){b-=S.length-W;S=S.substring(0,W)}break}}}S=this.dialect.inline.__call__.call(this,S,/\\/)[0];ab={href:S||""};if(V[3]!==undefined){ab.title=V[3]}Y=["link",ab].concat(T);return[b,Y]}V=a.match(/^\s*\[(.*?)\]/);if(V){b+=V[0].length;ab={ref:(V[1]||String(T)).toLowerCase(),original:Z.substr(0,b)};Y=["link_ref",ab].concat(T);return[b,Y]}if(T.length==1&&typeof T[0]=="string"){ab={ref:T[0].toLowerCase(),original:Z.substr(0,b)};Y=["link_ref",ab,T[0]];return[b,Y]}return[1,"["]},"<":function w(T){var S;if((S=T.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null){if(S[3]){return[S[0].length,["link",{href:"mailto:"+S[3]},S[3]]]}else{if(S[2]=="mailto"){return[S[0].length,["link",{href:S[1]},S[1].substr("mailto:".length)]]}else{return[S[0].length,["link",{href:S[1]},S[1]]]}}}return[1,"<"]},"`":function z(T){var S=T.match(/(`+)(([\s\S]*?)\1)/);if(S&&S[2]){return[S[1].length+S[2].length,["inlinecode",S[3]]]}else{return[1,"`"]}},"  \n":function P(S){return[3,["linebreak"]]}};function G(S,V){var U=S+"_state",W=S=="strong"?"em_state":"strong_state";function T(X){this.len_after=X;this.name="close_"+V}return function(a,b){if(this[U][0]==V){this[U].shift();return[a.length,new T(a.length-V.length)]}else{var X=this[W].slice(),ac=this[U].slice();this[U].unshift(V);var Z=this.processInline(a.substr(V.length));var c=Z[Z.length-1];var Y=this[U].shift();if(c instanceof T){Z.pop();var d=a.length-c.len_after;return[d,[S].concat(Z)]}else{this[W]=X;this[U]=ac;return[V.length,V]}}}}e.dialects.Gruber.inline["**"]=G("strong","**");e.dialects.Gruber.inline.__=G("strong","__");e.dialects.Gruber.inline["*"]=G("em","*");e.dialects.Gruber.inline._=G("em","_");e.buildBlockOrder=function(U){var S=[];for(var T in U){if(T=="__order__"||T=="__call__"){continue}S.push(T)}U.__order__=S};e.buildInlinePatterns=function(W){var V=[];for(var T in W){if(T.match(/^__.*__$/)){continue}var S=T.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");V.push(T.length==1?S:"(?:"+S+")")}V=V.join("|");W.__patterns__=V;var U=W.__call__;W.__call__=function(Y,X){if(X!=undefined){return U.call(this,Y,X)}else{return U.call(this,Y,V)}}};e.DialectHelpers={};e.DialectHelpers.inline_until_char=function(W,V){var U=0,S=[];while(true){if(W[U]==V){U++;return[U,S]}if(U>=W.length){return null}var T=this.dialect.inline.__oneElement__.call(this,W.substr(U));U+=T[0];S.push.apply(S,T.slice(1))}};e.subclassDialect=function(U){function S(){}S.prototype=U.block;function T(){}T.prototype=U.inline;return{block:new S(),inline:new T()}};e.buildBlockOrder(e.dialects.Gruber.block);e.buildInlinePatterns(e.dialects.Gruber.inline);e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber);e.dialects.Maruku.processMetaHash=function k(V){var W=o(V),S={};for(var T=0;T<W.length;++T){if(/^#/.test(W[T])){S.id=W[T].substring(1)}else{if(/^\./.test(W[T])){if(S["class"]){S["class"]=S["class"]+W[T].replace(/./," ")}else{S["class"]=W[T].substring(1)}}else{if(/\=/.test(W[T])){var U=W[T].split(/\=/);S[U[0]]=U[1]}}}}return S};function o(U){var W=U.split(""),V=[""],S=false;while(W.length){var T=W.shift();switch(T){case" ":if(S){V[V.length-1]+=T}else{V.push("")}break;case"'":case'"':S=!S;break;case"\\":T=W.shift();default:V[V.length-1]+=T;break}}return V}e.dialects.Maruku.block.document_meta=function j(X,U){if(X.lineNumber>1){return undefined}if(!X.match(/^(?:\w+:.*\n)*\w+:.*$/)){return undefined}if(!D(this.tree)){this.tree.splice(1,0,{})}var W=X.split(/\n/);for(p in W){var S=W[p].match(/(\w+):\s*(.*)$/),T=S[1].toLowerCase(),V=S[2];this.tree[1][T]=V}return[]};e.dialects.Maruku.block.block_meta=function F(Z,W){var V=Z.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!V){return undefined}var U=this.dialect.processMetaHash(V[2]);var Y;if(V[1]===""){var X=this.tree[this.tree.length-1];Y=D(X);if(typeof X==="string"){return undefined}if(!Y){Y={};X.splice(1,0,Y)}for(a in U){Y[a]=U[a]}return[]}var T=Z.replace(/\n.*$/,""),S=this.processBlock(T,[]);Y=D(S[0]);if(!Y){Y={};S[0].splice(1,0,Y)}for(a in U){Y[a]=U[a]}return S};e.dialects.Maruku.block.definition_list=function O(U,X){var Z=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,Y=["dl"],W;if((T=U.match(Z))){var S=[U];while(X.length&&Z.exec(X[0])){S.push(X.shift())}for(var a=0;a<S.length;++a){var T=S[a].match(Z),V=T[1].replace(/\n$/,"").split(/\n/),ab=T[2].split(/\n:\s+/);for(W=0;W<V.length;++W){Y.push(["dt",V[W]])}for(W=0;W<ab.length;++W){Y.push(["dd"].concat(this.processInline(ab[W].replace(/(\n)\s+/,"$1"))))}}}else{return undefined}return[Y]};e.dialects.Maruku.inline["{:"]=function C(Z,X,V){if(!V.length){return[2,"{:"]}var W=V[V.length-1];if(typeof W==="string"){return[2,"{:"]}var T=Z.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!T){return[2,"{:"]}var Y=this.dialect.processMetaHash(T[1]),S=D(W);if(!S){S={};W.splice(1,0,S)}for(var U in Y){S[U]=Y[U]}return[T[0].length,""]};e.buildBlockOrder(e.dialects.Maruku.block);e.buildInlinePatterns(e.dialects.Maruku.inline);var B=Array.isArray||function(S){return Object.prototype.toString.call(S)=="[object Array]"};var c;if(Array.prototype.forEach){c=function(T,S,U){return T.forEach(S,U)}}else{c=function(T,S,V){for(var U=0;U<T.length;U++){S.call(V||T,T[U],U,T)}}}function D(S){return B(S)&&S.length>1&&typeof S[1]==="object"&&!(B(S[1]))?S[1]:undefined}L.renderJsonML=function(U,S){S=S||{};S.root=S.root||false;var T=[];if(S.root){T.push(R(U))}else{U.shift();if(U.length&&typeof U[0]==="object"&&!(U[0]instanceof Array)){U.shift()}while(U.length){T.push(R(U.shift()))}}return T.join("\n\n")};function b(S){return S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R(X){if(typeof X==="string"){return b(X)}var S=X.shift(),U={},V=[];if(X.length&&typeof X[0]==="object"&&!(X[0]instanceof Array)){U=X.shift()}while(X.length){V.push(arguments.callee(X.shift()))}var W="";for(var T in U){W+=" "+T+'="'+b(U[T])+'"'}if(S=="img"||S=="br"||S=="hr"){return"<"+S+W+"/>"}else{return"<"+S+W+">"+V.join("")+"</"+S+">"}}function i(a,X,Z){var U;Z=Z||{};var W=a.slice(0);if(typeof Z.preprocessTreeNode==="function"){W=Z.preprocessTreeNode(W,X)}var Y=D(W);if(Y){W[1]={};for(U in Y){W[1][U]=Y[U]}Y=W[1]}if(typeof W==="string"){return W}switch(W[0]){case"header":W[0]="h"+W[1].level;delete W[1].level;break;case"bulletlist":W[0]="ul";break;case"numberlist":W[0]="ol";break;case"listitem":W[0]="li";break;case"para":W[0]="p";break;case"markdown":W[0]="html";if(Y){delete Y.references}break;case"code_block":W[0]="pre";U=Y?2:1;var S=["code"];S.push.apply(S,W.splice(U));W[U]=S;break;case"inlinecode":W[0]="code";break;case"img":W[1].src=W[1].href;delete W[1].href;break;case"linebreak":W[0]="br";break;case"link":W[0]="a";break;case"link_ref":W[0]="a";var T=X[Y.ref];if(T){delete Y.ref;Y.href=T.href;if(T.title){Y.title=T.title}delete Y.original}else{return Y.original}break;case"img_ref":W[0]="img";var T=X[Y.ref];if(T){delete Y.ref;Y.src=T.href;if(T.title){Y.title=T.title}delete Y.original}else{return Y.original}break}U=1;if(Y){for(var V in W[1]){U=2}if(U===1){W.splice(U,1)}}for(;U<W.length;++U){W[U]=arguments.callee(W[U],X,Z)}return W}function q(T){var S=D(T)?2:1;while(S<T.length){if(typeof T[S]==="string"){if(S+1<T.length&&typeof T[S+1]==="string"){T[S]+=T.splice(S+1,1)[0]}else{++S}}else{arguments.callee(T[S]);++S}}}})((function(){if(typeof exports==="undefined"){window.markdown={};return window.markdown}else{return exports}})());
var toMarkdown=function(m){var k=[{patterns:"p",replacement:function(j,i,r){return r?"\n\n"+r+"\n":""}},{patterns:"br",type:"void",replacement:"\n"},{patterns:"h([1-6])",replacement:function(v,j,s,w){var r="";for(var u=0;u<j;u++){r+="#"}return"\n\n"+r+" "+w+"\n"}},{patterns:"hr",type:"void",replacement:"\n\n* * *\n"},{patterns:"a",replacement:function(s,j,u){var i=j.match(o("href")),r=j.match(o("title"));return i?"["+u+"]("+i[1]+(r&&r[1]?' "'+r[1]+'"':"")+")":s}},{patterns:["b","strong"],replacement:function(j,i,r){return r?"**"+r+"**":""}},{patterns:["i","em"],replacement:function(j,i,r){return r?"_"+r+"_":""}},{patterns:"code",replacement:function(j,i,r){return r?"`"+r+"`":""}},{patterns:"img",type:"void",replacement:function(u,i,v){var s=i.match(o("src")),j=i.match(o("alt")),r=i.match(o("title"));return"!["+(j&&j[1]?j[1]:"")+"]("+s[1]+(r&&r[1]?' "'+r[1]+'"':"")+")"}}];for(var l=0,n=k.length;l<n;l++){if(typeof k[l].patterns==="string"){m=f(m,{tag:k[l].patterns,replacement:k[l].replacement,type:k[l].type})}else{for(var g=0,h=k[l].patterns.length;g<h;g++){m=f(m,{tag:k[l].patterns[g],replacement:k[l].replacement,type:k[l].type})}}}function f(j,s){var u=s.type==="void"?"<"+s.tag+"\\b([^>]*)\\/?>":"<"+s.tag+"\\b([^>]*)>([\\s\\S]*?)<\\/"+s.tag+">",r=new RegExp(u,"gi"),i="";if(typeof s.replacement==="string"){i=j.replace(r,s.replacement)}else{i=j.replace(r,function(y,x,w,v){return s.replacement.call(this,y,x,w,v)})}return i}function o(i){return new RegExp(i+"\\s*=\\s*[\"']?([^\"']*)[\"']?","i")}m=m.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi,function(i,j){j=j.replace(/^\t+/g,"  ");j=j.replace(/\n/g,"\n    ");return"\n\n    "+j+"\n"});m=m.replace(/^(\s{0,3}\d+)\. /g,"$1\\. ");var q=/<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi;while(m.match(q)){m=m.replace(q,function(i){return d(i)})}function d(i){i=i.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi,function(u,r,v){var j=v.split("</li>");j.splice(j.length-1,1);for(l=0,n=j.length;l<n;l++){if(j[l]){var s=(r==="ol")?(l+1)+".  ":"*   ";j[l]=j[l].replace(/\s*<li[^>]*>([\s\S]*)/i,function(w,x){x=x.replace(/^\s+/,"");x=x.replace(/\n\n/g,"\n\n    ");x=x.replace(/\n([ ]*)+(\*|\d+\.) /g,"\n$1    $2 ");return s+x})}}return j.join("\n")});return"\n\n"+i.replace(/[ \t]+\n|\s+$/g,"")}var c=/<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi;while(m.match(c)){m=m.replace(c,function(i){return b(i)})}function b(i){i=i.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi,function(r,j){j=j.replace(/^\s+|\s+$/g,"");j=e(j);j=j.replace(/^/gm,"> ");j=j.replace(/^(>([ \t]{2,}>)+)/gm,"> >");return j});return i}function e(i){i=i.replace(/^[\t\r\n]+|[\t\r\n]+$/g,"");i=i.replace(/\n\s+\n/g,"\n\n");i=i.replace(/\n{3,}/g,"\n\n");return i}return e(m)};
if(typeof exports==="object"){exports.toMarkdown=toMarkdown}!function(f){var d=function(h,g){this.$ns="bootstrap-markdown";this.$element=f(h);this.$editable={el:null,type:null,attrKeys:[],attrValues:[],content:null};this.$options=f.extend(true,{},f.fn.markdown.defaults,g);this.$oldContent=null;this.$isPreview=false;this.$editor=null;this.$textarea=null;this.$handler=[];this.$callback=[];this.$nextTab=[];this.showEditor()};d.prototype={constructor:d,__alterButtons:function(i,h){var j=this.$handler,g=(i=="all"),k=this;f.each(j,function(m,l){var n=true;if(g){n=false}else{n=l.indexOf(i)<0}if(n==false){h(k.$editor.find('button[data-handler="'+l+'"]'))}})},__buildButtons:function(w,v){var A,C=this.$ns,j=this.$handler,l=this.$callback;for(A=0;A<w.length;A++){var r,m=w[A];for(r=0;r<m.length;r++){var q,B=m[r].data,u=f("<div/>",{"class":"btn-group"});for(q=0;q<B.length;q++){var h=B[q],s="",x=C+"-"+h.name,o=h.icon instanceof Object?h.icon[this.$options.iconlibrary]:h.icon,g=h.btnText?h.btnText:"",n=h.btnClass?h.btnClass:"btn",k=h.tabIndex?h.tabIndex:"-1";if(h.toggle==true){s=' data-toggle="button"'}u.append('<button type="button" class="'+n+' btn-default btn-sm" title="'+h.title+'" tabindex="'+k+'" data-provider="'+C+'" data-handler="'+x+'"'+s+'><span class="'+o+'"></span> '+g+"</button>");j.push(x);l.push(h.callback)}v.append(u)}}return v},__setListener:function(){var h=typeof this.$textarea.attr("rows")!="undefined",g=this.$textarea.val().split("\n").length>5?this.$textarea.val().split("\n").length:"5",i=h?this.$textarea.attr("rows"):g;this.$textarea.attr("rows",i);this.$textarea.css("resize","none");this.$textarea.on("focus",f.proxy(this.focus,this)).on("keypress",f.proxy(this.keypress,this)).on("keyup",f.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$textarea.on("keydown",f.proxy(this.keydown,this))}this.$textarea.data("markdown",this)},__handle:function(k){var j=f(k.currentTarget),i=this.$handler,m=this.$callback,h=j.attr("data-handler"),l=i.indexOf(h),g=m[l];f(k.currentTarget).focus();g(this);if(h.indexOf("cmdSave")<0){this.$textarea.focus()}k.preventDefault()},showEditor:function(){var u=this,s,q=this.$ns,g=this.$element,r=g.css("height"),i=g.css("width"),k=this.$editable,w=this.$handler,v=this.$callback,x=this.$options,m=f("<div/>",{"class":"md-editor",click:function(){u.focus()}});if(this.$editor==null){var h=f("<div/>",{"class":"md-header btn-toolbar"});if(x.buttons.length>0){h=this.__buildButtons(x.buttons,h)}if(x.additionalButtons.length>0){h=this.__buildButtons(x.additionalButtons,h)}m.append(h);if(g.is("textarea")){g.before(m);s=g;s.addClass("md-input");m.append(s)}else{var n=(typeof toMarkdown=="function")?toMarkdown(g.html()):g.html(),o=f.trim(n);s=f("<textarea/>",{"class":"md-input",val:o});m.append(s);k.el=g;k.type=g.prop("tagName").toLowerCase();k.content=g.html();f(g[0].attributes).each(function(){k.attrKeys.push(this.nodeName);k.attrValues.push(this.nodeValue)});g.replaceWith(m)}if(x.savable){var l=f("<div/>",{"class":"md-footer"}),j="cmdSave";w.push(j);v.push(x.onSave);l.append('<button class="btn btn-success" data-provider="'+q+'" data-handler="'+j+'"><i class="icon icon-white icon-ok"></i> Save</button>');m.append(l)}f.each(["height","width"],function(z,y){if(x[y]!="inherit"){if(jQuery.isNumeric(x[y])){m.css(y,x[y]+"px")}else{m.addClass(x[y])}}});this.$editor=m;this.$textarea=s;this.$editable=k;this.$oldContent=this.getContent();this.__setListener();this.$editor.attr("id",(new Date).getTime());this.$editor.on("click",'[data-provider="bootstrap-markdown"]',f.proxy(this.__handle,this))}else{this.$editor.show()}if(x.autofocus){this.$textarea.focus();this.$editor.addClass("active")}x.onShow(this);return this},showPreview:function(){var i=this.$options,j=i.onPreview(this),g=this.$textarea,l=g.next(),h=f("<div/>",{"class":"md-preview","data-provider":"markdown-preview"}),k;this.$isPreview=true;this.disableButtons("all").enableButtons("cmdPreview");if(typeof j=="string"){k=j}else{var m=g.val();if(typeof markdown=="object"){k=markdown.toHTML(m)}else{if(typeof marked=="function"){k=marked(m)}else{k=m}}}h.html(k);if(l&&l.attr("class")=="md-footer"){h.insertBefore(l)}else{g.parent().append(h)}g.hide();h.data("markdown",this);return this},hidePreview:function(){this.$isPreview=false;var g=this.$editor.find('div[data-provider="markdown-preview"]');g.remove();this.enableButtons("all");this.$textarea.show();this.__setListener();return this},isDirty:function(){return this.$oldContent!=this.getContent()},getContent:function(){return this.$textarea.val()},setContent:function(g){this.$textarea.val(g);return this},findSelection:function(h){var k=this.getContent(),j;if(j=k.indexOf(h),j>=0&&h.length>0){var g=this.getSelection(),i;this.setSelection(j,j+h.length);i=this.getSelection();this.setSelection(g.start,g.end);return i}else{return null}},getSelection:function(){var g=this.$textarea[0];return(("selectionStart"in g&&function(){var h=g.selectionEnd-g.selectionStart;return{start:g.selectionStart,end:g.selectionEnd,length:h,text:g.value.substr(g.selectionStart,h)}})||function(){return null})()},setSelection:function(i,g){var h=this.$textarea[0];return(("selectionStart"in h&&function(){h.selectionStart=i;h.selectionEnd=g;return})||function(){return null})()},replaceSelection:function(h){var g=this.$textarea[0];return(("selectionStart"in g&&function(){g.value=g.value.substr(0,g.selectionStart)+h+g.value.substr(g.selectionEnd,g.value.length);g.selectionStart=g.value.length;return this})||function(){g.value+=h;return jQuery(g)})()},getNextTab:function(){if(this.$nextTab.length==0){return null}else{var g,h=this.$nextTab.shift();if(typeof h=="function"){g=h()}else{if(typeof h=="object"&&h.length>0){g=h}}return g}},setNextTab:function(j,h){if(typeof j=="string"){var i=this;this.$nextTab.push(function(){return i.findSelection(j)})}else{if(typeof j=="numeric"&&typeof h=="numeric"){var g=this.getSelection();this.setSelection(j,h);this.$nextTab.push(this.getSelection());this.setSelection(g.start,g.end)}}return},enableButtons:function(h){var g=function(i){i.removeAttr("disabled")};this.__alterButtons(h,g);return this},disableButtons:function(h){var g=function(i){i.attr("disabled","disabled")};this.__alterButtons(h,g);return this},eventSupported:function(g){var h=g in this.$element;if(!h){this.$element.setAttribute(g,"return;");h=typeof this.$element[g]==="function"}return h},keydown:function(g){this.suppressKeyPressRepeat=~f.inArray(g.keyCode,[40,38,9,13,27]);this.keyup(g)},keypress:function(g){if(this.suppressKeyPressRepeat){return}this.keyup(g)},keyup:function(j){var h=false;switch(j.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:var g;if(g=this.getNextTab(),g!=null){var i=this;setTimeout(function(){i.setSelection(g.start,g.end)},500);h=true}else{var k=this.getSelection();if(k.start==k.end&&k.end==this.getContent().length){h=false}else{this.setSelection(this.getContent().length,this.getContent().length);h=true}}break;case 13:case 27:h=false;break;default:h=false}if(h){j.stopPropagation();j.preventDefault()}},focus:function(j){var g=this.$options,i=g.hideable,h=this.$editor;h.addClass("active");f(document).find(".md-editor").each(function(){if(f(this).attr("id")!=h.attr("id")){var k;if(k=f(this).find("textarea").data("markdown"),k==null){k=f(this).find('div[data-provider="markdown-preview"]').data("markdown")}if(k){k.blur()}}});g.onFocus(this);return this},blur:function(n){var h=this.$options,m=h.hideable,k=this.$editor,i=this.$editable;if(k.hasClass("active")||this.$element.parent().length==0){k.removeClass("active");if(m){if(i.el!=null){var g=f("<"+i.type+"/>"),l=this.getContent(),j=(typeof markdown=="object")?markdown.toHTML(l):l;f(i.attrKeys).each(function(q,o){g.attr(i.attrKeys[q],i.attrValues[q])});g.html(j);k.replaceWith(g)}else{k.hide()}}h.onBlur(this)}return this}};var b=f.fn.markdown;f.fn.markdown=function(g){return this.each(function(){var j=f(this),i=j.data("markdown"),h=typeof g=="object"&&g;if(!i){j.data("markdown",(i=new d(this,h)))}})};f.fn.markdown.defaults={autofocus:false,hideable:false,savable:false,width:"inherit",height:"inherit",iconlibrary:"glyph",buttons:[[{name:"groupFont",data:[{name:"cmdBold",title:"Bold",icon:{glyph:"glyphicon glyphicon-bold",fa:"fa fa-bold"},callback:function(j){var g,k,h=j.getSelection(),i=j.getContent();if(h.length==0){g="strong text"}else{g=h.text}if(i.substr(h.start-2,2)=="**"&&i.substr(h.end,2)=="**"){j.setSelection(h.start-2,h.end+2);j.replaceSelection(g);k=h.start-2}else{j.replaceSelection("**"+g+"**");k=h.start+2}j.setSelection(k,k+g.length)}},{name:"cmdItalic",title:"Italic",icon:{glyph:"glyphicon glyphicon-italic",fa:"fa fa-italic"},callback:function(j){var g,k,h=j.getSelection(),i=j.getContent();if(h.length==0){g="emphasized text"}else{g=h.text}if(i.substr(h.start-1,1)=="*"&&i.substr(h.end,1)=="*"){j.setSelection(h.start-1,h.end+1);j.replaceSelection(g);k=h.start-1}else{j.replaceSelection("*"+g+"*");k=h.start+1}j.setSelection(k,k+g.length)}},{name:"cmdHeading",title:"Heading",icon:{glyph:"glyphicon glyphicon-header",fa:"fa fa-font"},callback:function(j){var g,l,h=j.getSelection(),i=j.getContent(),k,m;if(h.length==0){g="heading text"}else{g=h.text+"\n"}if((k=4,i.substr(h.start-k,k)=="### ")||(k=3,i.substr(h.start-k,k)=="###")){j.setSelection(h.start-k,h.end);j.replaceSelection(g);l=h.start-k}else{if(h.start>0&&(m=i.substr(h.start-1,1),!!m&&m!="\n")){j.replaceSelection("\n\n### "+g);l=h.start+6}else{j.replaceSelection("### "+g);l=h.start+4}}j.setSelection(l,l+g.length)}}]},{name:"groupLink",data:[{name:"cmdUrl",title:"URL/Link",icon:{glyph:"glyphicon glyphicon-globe",fa:"fa fa-globe"},callback:function(k){var g,l,h=k.getSelection(),j=k.getContent(),i;if(h.length==0){g="enter link description here"}else{g=h.text}i=prompt("Insert Hyperlink","http://");if(i!=null&&i!=""&&i!="http://"){k.replaceSelection("["+g+"]("+i+")");l=h.start+1;k.setSelection(l,l+g.length)}}},{name:"cmdImage",title:"Image",icon:{glyph:"glyphicon glyphicon-picture",fa:"fa fa-picture-o"},callback:function(k){var g,l,h=k.getSelection(),j=k.getContent(),i;if(h.length==0){g="enter image description here"}else{g=h.text}i=prompt("Insert Image Hyperlink","http://");if(i!=null){k.replaceSelection("!["+g+"]("+i+' "enter image title here")');l=h.start+2;k.setNextTab("enter image title here");k.setSelection(l,l+g.length)}}}]},{name:"groupMisc",data:[{name:"cmdList",title:"List",icon:{glyph:"glyphicon glyphicon-list",fa:"fa fa-list"},callback:function(k){var g,l,h=k.getSelection(),i=k.getContent();if(h.length==0){g="list text here";k.replaceSelection("- "+g);l=h.start+2}else{if(h.text.indexOf("\n")<0){g=h.text;k.replaceSelection("- "+g);l=h.start+2}else{var j=[];j=h.text.split("\n");g=j[0];f.each(j,function(n,m){j[n]="- "+m});k.replaceSelection("\n\n"+j.join("\n"));l=h.start+4}}k.setSelection(l,l+g.length)}}]},{name:"groupUtil",data:[{name:"cmdPreview",toggle:true,title:"Preview",btnText:"Preview",btnClass:"btn btn-primary btn-sm",icon:{glyph:"glyphicon glyphicon-search",fa:"fa fa-search"},callback:function(i){var g=i.$isPreview,h;if(g==false){i.showPreview()}else{i.hidePreview()}}}]}]],additionalButtons:[],onShow:function(g){},onPreview:function(g){},onSave:function(g){},onBlur:function(g){},onFocus:function(g){}};f.fn.markdown.Constructor=d;f.fn.markdown.noConflict=function(){f.fn.markdown=b;return this};var e=function(g){var h=g;if(h.data("markdown")){h.data("markdown").showEditor();return}h.markdown(h.data())};var c=function(i){var j=false,h,g=f(i.currentTarget);if((i.type=="focusin"||i.type=="click")&&g.length==1&&typeof g[0]=="object"){h=g[0].activeElement;if(!f(h).data("markdown")){if(typeof f(h).parent().parent().parent().attr("class")=="undefined"||f(h).parent().parent().parent().attr("class").indexOf("md-editor")<0){if(typeof f(h).parent().parent().attr("class")=="undefined"||f(h).parent().parent().attr("class").indexOf("md-editor")<0){j=true}}else{j=false}}if(j){f(document).find(".md-editor").each(function(){var l=f(h).parent();if(f(this).attr("id")!=l.attr("id")){var k;if(k=f(this).find("textarea").data("markdown"),k==null){k=f(this).find('div[data-provider="markdown-preview"]').data("markdown")}if(k){k.blur()}}})}i.stopPropagation()}};f(document).on("click.markdown.data-api",'[data-provide="markdown-editable"]',function(g){e(f(this));g.preventDefault()}).on("click",function(g){c(g)}).on("focusin",function(g){c(g)}).ready(function(){f('textarea[data-provide="markdown"]').each(function(){e(f(this))})})}(window.jQuery);

/*!
 * Raphael
 */
!function(x){var w,v,u="0.4.2",s="hasOwnProperty",r=/[\.\/]/,q="*",o=function(){},n=function(d,c){return d-c},m={n:{}},l=function(G,F){G=String(G);var E,D=v,C=Array.prototype.slice.call(arguments,2),B=l.listeners(G),A=0,z=[],y={},k=[],i=w;w=G,v=0;for(var c=0,b=B.length;b>c;c++){"zIndex"in B[c]&&(z.push(B[c].zIndex),B[c].zIndex<0&&(y[B[c].zIndex]=B[c]))}for(z.sort(n);z[A]<0;){if(E=y[z[A++]],k.push(E.apply(F,C)),v){return v=D,k}}for(c=0;b>c;c++){if(E=B[c],"zIndex"in E){if(E.zIndex==z[A]){if(k.push(E.apply(F,C)),v){break}do{if(A++,E=y[z[A]],E&&k.push(E.apply(F,C)),v){break}}while(E)}else{y[E.zIndex]=E}}else{if(k.push(E.apply(F,C)),v){break}}}return v=D,w=i,k.length?k:null};l._events=m,l.listeners=function(H){var G,F,E,D,C,B,A,z,y=H.split(r),j=m,g=[j],f=[];for(D=0,C=y.length;C>D;D++){for(z=[],B=0,A=g.length;A>B;B++){for(j=g[B].n,F=[j[y[D]],j[q]],E=2;E--;){G=F[E],G&&(z.push(G),f=f.concat(G.f||[]))}}g=z}return f},l.on=function(h,f){if(h=String(h),"function"!=typeof f){return function(){}}for(var y=h.split(r),k=m,j=0,i=y.length;i>j;j++){k=k.n,k=k.hasOwnProperty(y[j])&&k[y[j]]||(k[y[j]]={n:{}})}for(k.f=k.f||[],j=0,i=k.f.length;i>j;j++){if(k.f[j]==f){return o}}return k.f.push(f),function(b){+b==+b&&(f.zIndex=+b)}},l.f=function(d){var c=[].slice.call(arguments,1);return function(){l.apply(null,[d,null].concat(c).concat([].slice.call(arguments,0)))}},l.stop=function(){v=1},l.nt=function(b){return b?new RegExp("(?:\\.|\\/|^)"+b+"(?:\\.|\\/|$)").test(w):w},l.nts=function(){return w.split(r)},l.off=l.unbind=function(E,D){if(!E){return l._events=m={n:{}},void 0}var C,B,A,z,y,k,j,g=E.split(r),f=[m];for(z=0,y=g.length;y>z;z++){for(k=0;k<f.length;k+=A.length-2){if(A=[k,1],C=f[k].n,g[z]!=q){C[g[z]]&&A.push(C[g[z]])}else{for(B in C){C[s](B)&&A.push(C[B])}}f.splice.apply(f,A)}}for(z=0,y=f.length;y>z;z++){for(C=f[z];C.n;){if(D){if(C.f){for(k=0,j=C.f.length;j>k;k++){if(C.f[k]==D){C.f.splice(k,1);break}}!C.f.length&&delete C.f}for(B in C.n){if(C.n[s](B)&&C.n[B].f){var e=C.n[B].f;for(k=0,j=e.length;j>k;k++){if(e[k]==D){e.splice(k,1);break}}!e.length&&delete C.n[B].f}}}else{delete C.f;for(B in C.n){C.n[s](B)&&C.n[B].f&&delete C.n[B].f}}C=C.n}}},l.once=function(e,d){var f=function(){return l.unbind(e,f),d.apply(this,arguments)};return l.on(e,f)},l.version=u,l.toString=function(){return"You are running Eve "+u},"undefined"!=typeof module&&module.exports?module.exports=l:"undefined"!=typeof define?define("eve",[],function(){return l}):x.eve=l}(window||this),function(d,c){"function"==typeof define&&define.amd?define(["eve"],function(b){return c(d,b)}):c(d,d.eve)}(this,function(cC,cD){function a6(b){if(a6.is(b,"function")){return cE?b():cD.on("raphael.DOMload",b)}if(a6.is(b,bj)){return a6._engine.create[bK](a6,b.splice(0,3+a6.is(b[0],bl))).add(b)}var f=Array.prototype.slice.call(arguments,0);if(a6.is(f[f.length-1],"function")){var c=f.pop();return cE?c.call(a6._engine.create[bK](a6,f)):cD.on("raphael.DOMload",function(){c.call(a6._engine.create[bK](a6,f))})}return a6._engine.create[bK](a6,arguments)}function a5(e){if("function"==typeof e||Object(e)!==e){return e}var d=new e.constructor;for(var f in e){e[aA](f)&&(d[f]=a5(e[f]))}return d}function a2(f,e){for(var h=0,g=f.length;g>h;h++){if(f[h]===e){return f.push(f.splice(h,1)[0])}}}function a1(f,e,h){function g(){var j=Array.prototype.slice.call(arguments,0),d=j.join("â�€"),c=g.cache=g.cache||{},b=g.count=g.count||[];return c[aA](d)?(a2(b,d),h?h(c[d]):c[d]):(b.length>=1000&&delete c[b.shift()],b.push(d),c[d]=f[bK](e,j),h?h(c[d]):c[d])}return g}function aZ(){return this.hex}function aY(h,g){for(var l=[],k=0,j=h.length;j-2*!g>k;k+=2){var i=[{x:+h[k-2],y:+h[k-1]},{x:+h[k],y:+h[k+1]},{x:+h[k+2],y:+h[k+3]},{x:+h[k+4],y:+h[k+5]}];g?k?j-4==k?i[3]={x:+h[0],y:+h[1]}:j-2==k&&(i[2]={x:+h[0],y:+h[1]},i[3]={x:+h[2],y:+h[3]}):i[0]={x:+h[j-2],y:+h[j-1]}:j-4==k?i[3]=i[2]:k||(i[0]={x:+h[k],y:+h[k+1]}),l.push(["C",(-i[0].x+6*i[1].x+i[2].x)/6,(-i[0].y+6*i[1].y+i[2].y)/6,(i[1].x+6*i[2].x-i[3].x)/6,(i[1].y+6*i[2].y-i[3].y)/6,i[2].x,i[2].y])}return l}function aX(i,h,n,m,l){var k=-3*h+9*n-9*m+3*l,j=i*k+6*h-12*n+6*m;return i*j-3*h+3*n}function aU(L,K,J,I,H,G,F,E,D){null==D&&(D=1),D=D>1?1:0>D?0:D;for(var C=D/2,B=12,A=[-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],z=[0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],y=0,x=0;B>x;x++){var w=C*A[x]+C,v=aX(w,L,J,H,F),u=aX(w,K,I,G,E),i=v*v+u*u;y+=z[x]*bt.sqrt(i)}return C*y}function aT(D,C,B,A,z,y,x,w,v){if(!(0>v||aU(D,C,B,A,z,y,x,w)<v)){var u,s=1,r=s/2,q=s-r,j=0.01;for(u=aU(D,C,B,A,z,y,x,w,q);bp(u-v)>j;){r/=2,q+=(v>u?1:-1)*r,u=aU(D,C,B,A,z,y,x,w,q)}return q}}function aR(F,E,D,C,B,A,z,y){if(!(bs(F,D)<br(B,z)||br(F,D)>bs(B,z)||bs(E,C)<br(A,y)||br(E,C)>bs(A,y))){var x=(F*C-E*D)*(B-z)-(F-D)*(B*y-A*z),w=(F*C-E*D)*(A-y)-(E-C)*(B*y-A*z),v=(F-D)*(A-y)-(E-C)*(B-z);if(v){var u=x/v,s=w/v,r=+u.toFixed(2),q=+s.toFixed(2);if(!(r<+br(F,D).toFixed(2)||r>+bs(F,D).toFixed(2)||r<+br(B,z).toFixed(2)||r>+bs(B,z).toFixed(2)||q<+br(E,C).toFixed(2)||q>+bs(E,C).toFixed(2)||q<+br(A,y).toFixed(2)||q>+bs(A,y).toFixed(2))){return{x:u,y:s}}}}}function aQ(X,W,V){var U=a6.bezierBBox(X),T=a6.bezierBBox(W);if(!a6.isBBoxIntersect(U,T)){return V?0:[]}for(var S=aU.apply(0,X),R=aU.apply(0,W),Q=bs(~~(S/5),1),P=bs(~~(R/5),1),O=[],N=[],M={},L=V?0:[],J=0;Q+1>J;J++){var H=a6.findDotsAtSegment.apply(a6,X.concat(J/Q));O.push({x:H.x,y:H.y,t:J/Q})}for(J=0;P+1>J;J++){H=a6.findDotsAtSegment.apply(a6,W.concat(J/P)),N.push({x:H.x,y:H.y,t:J/P})}for(J=0;Q>J;J++){for(var G=0;P>G;G++){var F=O[J],E=O[J+1],D=N[G],C=N[G+1],l=bp(E.x-F.x)<0.001?"y":"x",j=bp(C.x-D.x)<0.001?"y":"x",c=aR(F.x,F.y,E.x,E.y,D.x,D.y,C.x,C.y);if(c){if(M[c.x.toFixed(4)]==c.y.toFixed(4)){continue}M[c.x.toFixed(4)]=c.y.toFixed(4);var K=F.t+bp((c[l]-F[l])/(E[l]-F[l]))*(E.t-F.t),I=D.t+bp((c[j]-D[j])/(C[j]-D[j]))*(C.t-D.t);K>=0&&1.001>=K&&I>=0&&1.001>=I&&(V?L++:L.push({x:c.x,y:c.y,t1:br(K,1),t2:br(I,1)}))}}}return L}function aP(T,S,R){T=a6._path2curve(T),S=a6._path2curve(S);for(var Q,P,O,N,M,L,K,J,I,H,G=R?0:[],F=0,E=T.length;E>F;F++){var D=T[F];if("M"==D[0]){Q=M=D[1],P=L=D[2]}else{"C"==D[0]?(I=[Q,P].concat(D.slice(1)),Q=I[6],P=I[7]):(I=[Q,P,Q,P,M,L,M,L],Q=M,P=L);for(var C=0,B=S.length;B>C;C++){var A=S[C];if("M"==A[0]){O=K=A[1],N=J=A[2]}else{"C"==A[0]?(H=[O,N].concat(A.slice(1)),O=H[6],N=H[7]):(H=[O,N,O,N,K,J,K,J],O=K,N=J);var z=aQ(I,H,R);if(R){G+=z}else{for(var m=0,c=z.length;c>m;m++){z[m].segment1=F,z[m].segment2=C,z[m].bez1=I,z[m].bez2=H}G=G.concat(z)}}}}}return G}function aN(h,g,l,k,j,i){null!=h?(this.a=+h,this.b=+g,this.c=+l,this.d=+k,this.e=+j,this.f=+i):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function aM(){return this.x+bC+this.y+bC+this.width+" Ã— "+this.height}function aK(F,E,D,C,B,A){function z(b){return((u*b+v)*b+w)*b}function y(e,d){var f=x(e,d);return((q*f+r)*f+s)*f}function x(j,g){var G,o,n,m,l,k;for(n=j,k=0;8>k;k++){if(m=z(n)-j,bp(m)<g){return n}if(l=(3*u*n+2*v)*n+w,bp(l)<0.000001){break}n-=m/l}if(G=0,o=1,n=j,G>n){return G}if(n>o){return o}for(;o>G;){if(m=z(n),bp(m-j)<g){return n}j>m?G=n:o=n,n=(o-G)/2+G}return n}var w=3*E,v=3*(C-E)-w,u=1-w-v,s=3*D,r=3*(B-D)-s,q=1-s-r;return y(F,1/(200*A))}function aJ(g,f){var j=[],i={};if(this.ms=f,this.times=1,g){for(var h in g){g[aA](h)&&(i[bd(h)]=g[h],j.push(bd(h)))}j.sort(ca)}this.anim=i,this.top=j[j.length-1],this.percents=j}function aI(a,e,f,g,h,i){f=bd(f);var j,ci,ch,cg,cc,cb,bc=a.ms,ab={},Y={},W={};if(g){for(T=0,J=cP.length;J>T;T++){var V=cP[T];if(V.el.id==e.id&&V.anim==a){V.percent!=f?(cP.splice(T,1),ch=1):ci=V,e.attr(V.totalOrigin);break}}}else{g=+Y}for(var T=0,J=a.percents.length;J>T;T++){if(a.percents[T]==f||a.percents[T]>g*a.top){f=a.percents[T],cc=a.percents[T-1]||0,bc=bc/a.top*(f-cc),cg=a.percents[T+1],j=a.anim[f];break}g&&e.attr(a.anim[a.percents[T]])}if(j){if(ci){ci.initstatus=g,ci.start=new Date-ci.ms*g}else{for(var I in j){if(j[aA](I)&&(ar[aA](I)||e.paper.customAttributes[aA](I))){switch(ab[I]=e.attr(I),null==ab[I]&&(ab[I]=aO[I]),Y[I]=j[I],ar[I]){case bl:W[I]=(Y[I]-ab[I])/bc;break;case"colour":ab[I]=a6.getRGB(ab[I]);var k=a6.getRGB(Y[I]);W[I]={r:(k.r-ab[I].r)/bc,g:(k.g-ab[I].g)/bc,b:(k.b-ab[I].b)/bc};break;case"path":var l=ax(ab[I],Y[I]),Z=l[1];for(ab[I]=l[0],W[I]=[],T=0,J=ab[I].length;J>T;T++){W[I][T]=[0];for(var X=1,U=ab[I][T].length;U>X;X++){W[I][T][X]=(Z[T][X]-ab[I][T][X])/bc}}break;case"transform":var S=e._,R=ba(S[I],Y[I]);if(R){for(ab[I]=R.from,Y[I]=R.to,W[I]=[],W[I].real=!0,T=0,J=ab[I].length;J>T;T++){for(W[I][T]=[ab[I][T][0]],X=1,U=ab[I][T].length;U>X;X++){W[I][T][X]=(Y[I][T][X]-ab[I][T][X])/bc}}}else{var E=e.matrix||new aN,z={_:{transform:S.transform},getBBox:function(){return e.getBBox(1)}};ab[I]=[E.a,E.b,E.c,E.d,E.e,E.f],b2(z,Y[I]),Y[I]=z._.transform,W[I]=[(z.matrix.a-E.a)/bc,(z.matrix.b-E.b)/bc,(z.matrix.c-E.c)/bc,(z.matrix.d-E.d)/bc,(z.matrix.e-E.e)/bc,(z.matrix.f-E.f)/bc]}break;case"csv":var w=bB(j[I])[bA](aE),q=bB(ab[I])[bA](aE);if("clip-rect"==I){for(ab[I]=q,W[I]=[],T=q.length;T--;){W[I][T]=(w[T]-ab[I][T])/bc}}Y[I]=w;break;default:for(w=[][bI](j[I]),q=[][bI](ab[I]),W[I]=[],T=e.paper.customAttributes[I].length;T--;){W[I][T]=((w[T]||0)-(q[T]||0))/bc}}}}var o=j.easing,c=a6.easing_formulas[o];if(!c){if(c=bB(o).match(bf),c&&5==c.length){var b=c;c=function(d){return aK(d,+b[1],+b[2],+b[3],+b[4],bc)}}else{c=bG}}if(cb=j.start||a.start||+new Date,V={anim:a,percent:f,timestamp:cb,start:cb+(a.del||0),status:0,initstatus:g||0,stop:!1,ms:bc,easing:c,from:ab,diff:W,to:Y,el:e,callback:j.callback,prev:cc,next:cg,repeat:i||a.times,origin:e.attr(),totalOrigin:h},cP.push(V),g&&!ci&&!ch&&(V.stop=!0,V.start=new Date-bc*g,1==cP.length)){return ai()}ch&&(V.start=new Date-V.ms*g),1==cP.length&&at(ai)}cD("raphael.anim.start."+e.id,e,a)}}function aH(d){for(var c=0;c<cP.length;c++){cP[c].el.paper==d&&cP.splice(c--,1)}}a6.version="2.1.2",a6.eve=cD;var cE,aF,aE=/[, ]+/,aD={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},aC=/\{(\d+)\}/g,aA="hasOwnProperty",bO={doc:document,win:cC},bM={was:Object.prototype[aA].call(bO.win,"Raphael"),is:bO.win.Raphael},bL=function(){this.ca=this.customAttributes={}},bK="apply",bI="concat",bF="ontouchstart"in bO.win||bO.win.DocumentTouch&&bO.doc instanceof DocumentTouch,bE="",bC=" ",bB=String,bA="split",bx="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[bA](bC),bw={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},bu=bB.prototype.toLowerCase,bt=Math,bs=bt.max,br=bt.min,bp=bt.abs,bn=bt.pow,bm=bt.PI,bl="number",bk="string",bj="array",bi=Object.prototype.toString,bh=(a6._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),bg={NaN:1,Infinity:1,"-Infinity":1},bf=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,b0=bt.round,bd=parseFloat,bT=parseInt,bq=bB.prototype.toUpperCase,aO=a6._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ar=a6._availableAnimAttrs={blur:bl,"clip-rect":"csv",cx:bl,cy:bl,fill:"colour","fill-opacity":bl,"font-size":bl,height:bl,opacity:bl,path:"path",r:bl,rx:bl,ry:bl,stroke:"colour","stroke-opacity":bl,"stroke-width":bl,transform:"transform",width:bl,x:bl,y:bl},ah=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,b7={hs:1,rg:1},bV=/,?([achlmqrstvxz]),?/gi,by=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,aV=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,au=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,aj=(a6._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ca=function(d,c){return bd(d)-bd(c)},bY=function(){},bG=function(b){return b},a3=a6._rectPath=function(g,f,j,i,h){return h?[["M",g+h,f],["l",j-2*h,0],["a",h,h,0,0,1,h,h],["l",0,i-2*h],["a",h,h,0,0,1,-h,h],["l",2*h-j,0],["a",h,h,0,0,1,-h,-h],["l",0,2*h-i],["a",h,h,0,0,1,h,-h],["z"]]:[["M",g,f],["l",j,0],["l",0,i],["l",-j,0],["z"]]},aw=function(f,e,h,g){return null==g&&(g=h),[["M",f,e],["m",0,-g],["a",h,g,0,1,1,0,2*g],["a",h,g,0,1,1,0,-2*g],["z"]]},al=a6._getPath={path:function(b){return b.attr("path")},circle:function(d){var c=d.attrs;return aw(c.cx,c.cy,c.r)},ellipse:function(d){var c=d.attrs;return aw(c.cx,c.cy,c.rx,c.ry)},rect:function(d){var c=d.attrs;return a3(c.x,c.y,c.width,c.height,c.r)},image:function(d){var c=d.attrs;return a3(c.x,c.y,c.width,c.height)},text:function(d){var c=d._getBBox();return a3(c.x,c.y,c.width,c.height)},set:function(d){var c=d._getBBox();return a3(c.x,c.y,c.width,c.height)}},ce=a6.mapPath=function(s,r){if(!r){return s}var q,o,n,m,l,k,j;for(s=ax(s),n=0,l=s.length;l>n;n++){for(j=s[n],m=1,k=j.length;k>m;m+=2){q=r.x(j[m],j[m+1]),o=r.y(j[m],j[m+1]),j[m]=q,j[m+1]=o}}return s};if(a6._g=bO,a6.type=bO.win.SVGAngle||bO.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==a6.type){var cF,bN=bO.doc.createElement("div");if(bN.innerHTML='<v:shape adj="1"/>',cF=bN.firstChild,cF.style.behavior="url(#default#VML)",!cF||"object"!=typeof cF.adj){return a6.type=bE}bN=null}a6.svg=!(a6.vml="VML"==a6.type),a6._Paper=bL,a6.fn=aF=bL.prototype=a6.prototype,a6._id=0,a6._oid=0,a6.is=function(d,c){return c=bu.call(c),"finite"==c?!bg[aA](+d):"array"==c?d instanceof Array:"null"==c&&null===d||c==typeof d&&null!==d||"object"==c&&d===Object(d)||"array"==c&&Array.isArray&&Array.isArray(d)||bi.call(d).slice(8,-1).toLowerCase()==c},a6.angle=function(j,c,q,o,n,m){if(null==n){var l=j-q,k=c-o;return l||k?(180+180*bt.atan2(-k,-l)/bm+360)%360:0}return a6.angle(j,c,n,m)-a6.angle(q,o,n,m)},a6.rad=function(b){return b%360*bm/180},a6.deg=function(b){return 180*b/bm%360},a6.snapTo=function(g,c,j){if(j=a6.is(j,"finite")?j:10,a6.is(g,bj)){for(var i=g.length;i--;){if(bp(g[i]-c)<=j){return g[i]}}}else{g=+g;var h=c%g;if(j>h){return c-h}if(h>g-j){return c-h+g}}return c};a6.createUUID=function(d,c){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(d,c).toUpperCase()}}(/[xy]/g,function(e){var d=16*bt.random()|0,f="x"==e?d:3&d|8;return f.toString(16)});a6.setWindow=function(b){cD("raphael.setWindow",a6,bO.win,b),bO.win=b,bO.doc=bO.win.document,a6._engine.initWin&&a6._engine.initWin(bO.win)};var cG=function(f){if(a6.vml){var c,n=/^\s+|\s+$/g;try{var m=new ActiveXObject("htmlfile");m.write("<body>"),m.close(),c=m.body}catch(l){c=createPopup().document.body}var k=c.createTextRange();cG=a1(function(b){try{c.style.color=bB(b).replace(n,bE);var g=k.queryCommandValue("ForeColor");return g=(255&g)<<16|65280&g|(16711680&g)>>>16,"#"+("000000"+g.toString(16)).slice(-6)}catch(d){return"none"}})}else{var j=bO.doc.createElement("i");j.title="RaphaÃ«l Colour Picker",j.style.display="none",bO.doc.body.appendChild(j),cG=a1(function(b){return j.style.color=b,bO.doc.defaultView.getComputedStyle(j,bE).getPropertyValue("color")})}return cG(f)},ay=function(){return"hsb("+[this.h,this.s,this.b]+")"},an=function(){return"hsl("+[this.h,this.s,this.l]+")"},aa=function(){return this.hex},b3=function(f,c,h){if(null==c&&a6.is(f,"object")&&"r"in f&&"g"in f&&"b"in f&&(h=f.b,c=f.g,f=f.r),null==c&&a6.is(f,bk)){var g=a6.getRGB(f);f=g.r,c=g.g,h=g.b}return(f>1||c>1||h>1)&&(f/=255,c/=255,h/=255),[f,c,h]},bQ=function(g,c,j,i){g*=255,c*=255,j*=255;var h={r:g,g:c,b:j,hex:a6.rgb(g,c,j),toString:aa};return a6.is(i,"finite")&&(h.opacity=i),h};a6.color=function(d){var c;return a6.is(d,"object")&&"h"in d&&"s"in d&&"b"in d?(c=a6.hsb2rgb(d),d.r=c.r,d.g=c.g,d.b=c.b,d.hex=c.hex):a6.is(d,"object")&&"h"in d&&"s"in d&&"l"in d?(c=a6.hsl2rgb(d),d.r=c.r,d.g=c.g,d.b=c.b,d.hex=c.hex):(a6.is(d,"string")&&(d=a6.getRGB(d)),a6.is(d,"object")&&"r"in d&&"g"in d&&"b"in d?(c=a6.rgb2hsl(d),d.h=c.h,d.s=c.s,d.l=c.l,c=a6.rgb2hsb(d),d.v=c.b):(d={hex:"none"},d.r=d.g=d.b=d.h=d.s=d.v=d.l=-1)),d.toString=aa,d},a6.hsb2rgb=function(s,r,q,o){this.is(s,"object")&&"h"in s&&"s"in s&&"b"in s&&(q=s.b,r=s.s,s=s.h,o=s.o),s*=360;var n,m,l,k,j;return s=s%360/60,j=q*r,k=j*(1-bp(s%2-1)),n=m=l=q-j,s=~~s,n+=[j,k,0,0,k,j][s],m+=[k,j,j,k,0,0][s],l+=[0,0,k,j,j,k][s],bQ(n,m,l,o)},a6.hsl2rgb=function(s,r,q,o){this.is(s,"object")&&"h"in s&&"s"in s&&"l"in s&&(q=s.l,r=s.s,s=s.h),(s>1||r>1||q>1)&&(s/=360,r/=100,q/=100),s*=360;var n,m,l,k,j;return s=s%360/60,j=2*r*(0.5>q?q:1-q),k=j*(1-bp(s%2-1)),n=m=l=q-j/2,s=~~s,n+=[j,k,0,0,k,j][s],m+=[k,j,j,k,0,0][s],l+=[0,0,k,j,j,k][s],bQ(n,m,l,o)},a6.rgb2hsb=function(i,h,n){n=b3(i,h,n),i=n[0],h=n[1],n=n[2];var m,l,k,j;return k=bs(i,h,n),j=k-br(i,h,n),m=0==j?null:k==i?(h-n)/j:k==h?(n-i)/j+2:(i-h)/j+4,m=(m+360)%6*60/360,l=0==j?0:j/k,{h:m,s:l,b:k,toString:ay}},a6.rgb2hsl=function(s,r,q){q=b3(s,r,q),s=q[0],r=q[1],q=q[2];var o,n,m,l,k,j;return l=bs(s,r,q),k=br(s,r,q),j=l-k,o=0==j?null:l==s?(r-q)/j:l==r?(q-s)/j+2:(s-r)/j+4,o=(o+360)%6*60/360,m=(l+k)/2,n=0==j?0:0.5>m?j/(2*m):j/(2-2*m),{h:o,s:n,l:m,toString:an}},a6._path2string=function(){return this.join(",").replace(bV,"$1")};a6._preload=function(e,d){var f=bO.doc.createElement("img");f.style.cssText="position:absolute;left:-9999em;top:-9999em",f.onload=function(){d.call(this),this.onload=null,bO.doc.body.removeChild(this)},f.onerror=function(){bO.doc.body.removeChild(this)},bO.doc.body.appendChild(f),f.src=e};a6.getRGB=a1(function(g){if(!g||(g=bB(g)).indexOf("-")+1){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:aZ}}if("none"==g){return{r:-1,g:-1,b:-1,hex:"none",toString:aZ}}!(b7[aA](g.toLowerCase().substring(0,2))||"#"==g.charAt())&&(g=cG(g));var c,q,o,n,m,l,k=g.match(bh);return k?(k[2]&&(o=bT(k[2].substring(5),16),q=bT(k[2].substring(3,5),16),c=bT(k[2].substring(1,3),16)),k[3]&&(o=bT((m=k[3].charAt(3))+m,16),q=bT((m=k[3].charAt(2))+m,16),c=bT((m=k[3].charAt(1))+m,16)),k[4]&&(l=k[4][bA](ah),c=bd(l[0]),"%"==l[0].slice(-1)&&(c*=2.55),q=bd(l[1]),"%"==l[1].slice(-1)&&(q*=2.55),o=bd(l[2]),"%"==l[2].slice(-1)&&(o*=2.55),"rgba"==k[1].toLowerCase().slice(0,4)&&(n=bd(l[3])),l[3]&&"%"==l[3].slice(-1)&&(n/=100)),k[5]?(l=k[5][bA](ah),c=bd(l[0]),"%"==l[0].slice(-1)&&(c*=2.55),q=bd(l[1]),"%"==l[1].slice(-1)&&(q*=2.55),o=bd(l[2]),"%"==l[2].slice(-1)&&(o*=2.55),("deg"==l[0].slice(-3)||"Â°"==l[0].slice(-1))&&(c/=360),"hsba"==k[1].toLowerCase().slice(0,4)&&(n=bd(l[3])),l[3]&&"%"==l[3].slice(-1)&&(n/=100),a6.hsb2rgb(c,q,o,n)):k[6]?(l=k[6][bA](ah),c=bd(l[0]),"%"==l[0].slice(-1)&&(c*=2.55),q=bd(l[1]),"%"==l[1].slice(-1)&&(q*=2.55),o=bd(l[2]),"%"==l[2].slice(-1)&&(o*=2.55),("deg"==l[0].slice(-3)||"Â°"==l[0].slice(-1))&&(c/=360),"hsla"==k[1].toLowerCase().slice(0,4)&&(n=bd(l[3])),l[3]&&"%"==l[3].slice(-1)&&(n/=100),a6.hsl2rgb(c,q,o,n)):(k={r:c,g:q,b:o,toString:aZ},k.hex="#"+(16777216|o|q<<8|c<<16).toString(16).slice(1),a6.is(n,"finite")&&(k.opacity=n),k)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:aZ}},a6),a6.hsb=a1(function(e,c,f){return a6.hsb2rgb(e,c,f).hex}),a6.hsl=a1(function(e,c,f){return a6.hsl2rgb(e,c,f).hex}),a6.rgb=a1(function(e,d,f){return"#"+(16777216|f|d<<8|e<<16).toString(16).slice(1)}),a6.getColor=function(e){var d=this.getColor.start=this.getColor.start||{h:0,s:1,b:e||0.75},f=this.hsb2rgb(d.h,d.s,d.b);return d.h+=0.075,d.h>1&&(d.h=0,d.s-=0.2,d.s<=0&&(this.getColor.start={h:0,s:1,b:d.b})),f.hex},a6.getColor.reset=function(){delete this.start},a6.parsePathString=function(f){if(!f){return null}var c=cH(f);if(c.arr){return bz(c.arr)}var h={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},g=[];return a6.is(f,bj)&&a6.is(f[0],bj)&&(g=bz(f)),g.length||bB(f).replace(by,function(e,d,k){var j=[],i=d.toLowerCase();if(k.replace(au,function(m,l){l&&j.push(+l)}),"m"==i&&j.length>2&&(g.push([d][bI](j.splice(0,2))),i="l",d="m"==d?"l":"L"),"r"==i){g.push([d][bI](j))}else{for(;j.length>=h[i]&&(g.push([d][bI](j.splice(0,h[i]))),h[i]);){}}}),g.toString=a6._path2string,c.arr=bz(g),g},a6.parseTransformString=a1(function(d){if(!d){return null}var c=[];return a6.is(d,bj)&&a6.is(d[0],bj)&&(c=bz(d)),c.length||bB(d).replace(aV,function(b,h,g){var f=[];bu.call(h);g.replace(au,function(i,e){e&&f.push(+e)}),c.push([h][bI](f))}),c.toString=a6._path2string,c});var cH=function(d){var c=cH.ps=cH.ps||{};return c[d]?c[d].sleep=100:c[d]={sleep:100},setTimeout(function(){for(var b in c){c[aA](b)&&b!=d&&(c[b].sleep--,!c[b].sleep&&delete c[b])}}),c[d]};a6.findDotsAtSegment=function(X,W,V,U,T,S,R,Q,P){var O=1-P,N=bn(O,3),M=bn(O,2),L=P*P,K=L*P,J=N*X+3*M*P*V+3*O*P*P*T+K*R,I=N*W+3*M*P*U+3*O*P*P*S+K*Q,H=X+2*P*(V-X)+L*(T-2*V+X),G=W+2*P*(U-W)+L*(S-2*U+W),F=V+2*P*(T-V)+L*(R-2*T+V),E=U+2*P*(S-U)+L*(Q-2*S+U),D=O*X+P*V,C=O*W+P*U,B=O*T+P*R,A=O*S+P*Q,z=90-180*bt.atan2(H-F,G-E)/bm;return(H>F||E>G)&&(z+=180),{x:J,y:I,m:{x:H,y:G},n:{x:F,y:E},start:{x:D,y:C},end:{x:B,y:A},alpha:z}},a6.bezierBBox=function(s,r,q,o,n,m,l,k){a6.is(s,"array")||(s=[s,r,q,o,n,m,l,k]);var c=a4.apply(null,s);return{x:c.min.x,y:c.min.y,x2:c.max.x,y2:c.max.y,width:c.max.x-c.min.x,height:c.max.y-c.min.y}},a6.isPointInsideBBox=function(e,d,f){return d>=e.x&&d<=e.x2&&f>=e.y&&f<=e.y2},a6.isBBoxIntersect=function(e,c){var f=a6.isPointInsideBBox;return f(c,e.x,e.y)||f(c,e.x2,e.y)||f(c,e.x,e.y2)||f(c,e.x2,e.y2)||f(e,c.x,c.y)||f(e,c.x2,c.y)||f(e,c.x,c.y2)||f(e,c.x2,c.y2)||(e.x<c.x2&&e.x>c.x||c.x<e.x2&&c.x>e.x)&&(e.y<c.y2&&e.y>c.y||c.y<e.y2&&c.y>e.y)},a6.pathIntersection=function(d,c){return aP(d,c)},a6.pathIntersectionNumber=function(d,c){return aP(d,c,1)},a6.isPointInsidePath=function(f,c,h){var g=a6.pathBBox(f);return a6.isPointInsideBBox(g,c,h)&&aP(f,[["M",c,h],["H",g.x2+10]],1)%2==1},a6._removedFactory=function(b){return function(){cD("raphael.log",null,"RaphaÃ«l: you are calling to method â€œ"+b+"â€� of removed object",b)}};var cI=a6.pathBBox=function(I){var H=cH(I);if(H.bbox){return a5(H.bbox)}if(!I){return{x:0,y:0,width:0,height:0,x2:0,y2:0}}I=ax(I);for(var G,F=0,E=0,D=[],C=[],B=0,A=I.length;A>B;B++){if(G=I[B],"M"==G[0]){F=G[1],E=G[2],D.push(F),C.push(E)}else{var z=a4(F,E,G[1],G[2],G[3],G[4],G[5],G[6]);D=D[bI](z.min.x,z.max.x),C=C[bI](z.min.y,z.max.y),F=G[5],E=G[6]}}var y=br[bK](0,D),x=br[bK](0,C),w=bs[bK](0,D),v=bs[bK](0,C),u=w-y,s=v-x,d={x:y,y:x,x2:w,y2:v,width:u,height:s,cx:y+u/2,cy:x+s/2};return H.bbox=a5(d),d},bz=function(d){var c=a5(d);return c.toString=a6._path2string,c},aW=a6._pathToRelative=function(I){var H=cH(I);if(H.rel){return bz(H.rel)}a6.is(I,bj)&&a6.is(I&&I[0],bj)||(I=a6.parsePathString(I));var G=[],F=0,E=0,D=0,C=0,B=0;"M"==I[0][0]&&(F=I[0][1],E=I[0][2],D=F,C=E,B++,G.push(["M",F,E]));for(var A=B,z=I.length;z>A;A++){var y=G[A]=[],x=I[A];if(x[0]!=bu.call(x[0])){switch(y[0]=bu.call(x[0]),y[0]){case"a":y[1]=x[1],y[2]=x[2],y[3]=x[3],y[4]=x[4],y[5]=x[5],y[6]=+(x[6]-F).toFixed(3),y[7]=+(x[7]-E).toFixed(3);break;case"v":y[1]=+(x[1]-E).toFixed(3);break;case"m":D=x[1],C=x[2];default:for(var w=1,v=x.length;v>w;w++){y[w]=+(x[w]-(w%2?F:E)).toFixed(3)}}}else{y=G[A]=[],"m"==x[0]&&(D=x[1]+F,C=x[2]+E);for(var u=0,s=x.length;s>u;u++){G[A][u]=x[u]}}var c=G[A].length;switch(G[A][0]){case"z":F=D,E=C;break;case"h":F+=+G[A][c-1];break;case"v":E+=+G[A][c-1];break;default:F+=+G[A][c-2],E+=+G[A][c-1]}}return G.toString=a6._path2string,H.rel=bz(G),G},av=a6._pathToAbsolute=function(J){var I=cH(J);if(I.abs){return bz(I.abs)}if(a6.is(J,bj)&&a6.is(J&&J[0],bj)||(J=a6.parsePathString(J)),!J||!J.length){return[["M",0,0]]}var H=[],G=0,F=0,E=0,D=0,C=0;"M"==J[0][0]&&(G=+J[0][1],F=+J[0][2],E=G,D=F,C++,H[0]=["M",G,F]);for(var B,A,z=3==J.length&&"M"==J[0][0]&&"R"==J[1][0].toUpperCase()&&"Z"==J[2][0].toUpperCase(),y=C,x=J.length;x>y;y++){if(H.push(B=[]),A=J[y],A[0]!=bq.call(A[0])){switch(B[0]=bq.call(A[0]),B[0]){case"A":B[1]=A[1],B[2]=A[2],B[3]=A[3],B[4]=A[4],B[5]=A[5],B[6]=+(A[6]+G),B[7]=+(A[7]+F);break;case"V":B[1]=+A[1]+F;break;case"H":B[1]=+A[1]+G;break;case"R":for(var w=[G,F][bI](A.slice(1)),v=2,u=w.length;u>v;v++){w[v]=+w[v]+G,w[++v]=+w[v]+F}H.pop(),H=H[bI](aY(w,z));break;case"M":E=+A[1]+G,D=+A[2]+F;default:for(v=1,u=A.length;u>v;v++){B[v]=+A[v]+(v%2?G:F)}}}else{if("R"==A[0]){w=[G,F][bI](A.slice(1)),H.pop(),H=H[bI](aY(w,z)),B=["R"][bI](A.slice(-2))}else{for(var h=0,c=A.length;c>h;h++){B[h]=A[h]}}}switch(B[0]){case"Z":G=E,F=D;break;case"H":G=B[1];break;case"V":F=B[1];break;case"M":E=B[B.length-2],D=B[B.length-1];default:G=B[B.length-2],F=B[B.length-1]}}return H.toString=a6._path2string,I.abs=bz(H),H},ak=function(f,e,h,g){return[f,e,h,g,h,g]},cd=function(j,i,q,o,n,m){var l=1/3,k=2/3;return[l*j+k*q,l*i+k*o,l*n+k*q,l*m+k*o,n,m]},bZ=function(a,b,c,d,e,l,m,n,o,p){var q,cw=120*bm/180,cv=bm/180*(+e||0),cu=[],ct=a1(function(h,g,k){var j=h*bt.cos(k)-g*bt.sin(k),i=h*bt.sin(k)+g*bt.cos(k);return{x:j,y:i}});if(p){ck=p[0],cj=p[1],cm=p[2],cl=p[3]}else{q=ct(a,b,-cv),a=q.x,b=q.y,q=ct(n,o,-cv),n=q.x,o=q.y;var r=(bt.cos(bm/180*e),bt.sin(bm/180*e),(a-n)/2),cr=(b-o)/2,cq=r*r/(c*c)+cr*cr/(d*d);cq>1&&(cq=bt.sqrt(cq),c=cq*c,d=cq*d);var s=c*c,co=d*d,cn=(l==m?-1:1)*bt.sqrt(bp((s*co-s*cr*cr-co*r*r)/(s*cr*cr+co*r*r))),cm=cn*c*cr/d+(a+n)/2,cl=cn*-d*r/c+(b+o)/2,ck=bt.asin(((b-cl)/d).toFixed(9)),cj=bt.asin(((o-cl)/d).toFixed(9));ck=cm>a?bm-ck:ck,cj=cm>n?bm-cj:cj,0>ck&&(ck=2*bm+ck),0>cj&&(cj=2*bm+cj),m&&ck>cj&&(ck-=2*bm),!m&&cj>ck&&(cj-=2*bm)}var t=cj-ck;if(bp(t)>cw){var u=cj,cg=n,cc=o;cj=ck+cw*(m&&cj>ck?1:-1),n=cm+c*bt.cos(cj),o=cl+d*bt.sin(cj),cu=bZ(n,o,c,d,e,0,m,cg,cc,[cj,u,cm,cl])}t=cj-ck;var v=bt.cos(ck),bc=bt.sin(ck),bb=bt.cos(cj),ac=bt.sin(cj),ab=bt.tan(t/4),Z=4/3*c*ab,Y=4/3*d*ab,X=[a,b],S=[a+Z*bc,b-Y*v],Q=[n+Z*ac,o-Y*bb],N=[n,o];if(S[0]=2*X[0]-S[0],S[1]=2*X[1]-S[1],p){return[S,Q,N][bI](cu)}cu=[S,Q,N][bI](cu).join()[bA](",");for(var J=[],E=0,f=cu.length;f>E;E++){J[E]=E%2?ct(cu[E-1],cu[E],cv).y:ct(cu[E],cu[E+1],cv).x}return J},bH=function(v,u,s,r,q,o,n,m,l){var k=1-l;return{x:bn(k,3)*v+3*bn(k,2)*l*s+3*k*l*l*q+bn(l,3)*n,y:bn(k,3)*u+3*bn(k,2)*l*r+3*k*l*l*o+bn(l,3)*m}},a4=a1(function(G,F,E,D,C,B,A,z){var y,x=C-2*E+G-(A-2*C+E),w=2*(E-G)-2*(C-E),v=G-E,u=(-w+bt.sqrt(w*w-4*x*v))/2/x,s=(-w-bt.sqrt(w*w-4*x*v))/2/x,r=[F,z],q=[G,A];return bp(u)>"1e12"&&(u=0.5),bp(s)>"1e12"&&(s=0.5),u>0&&1>u&&(y=bH(G,F,E,D,C,B,A,z,u),q.push(y.x),r.push(y.y)),s>0&&1>s&&(y=bH(G,F,E,D,C,B,A,z,s),q.push(y.x),r.push(y.y)),x=B-2*D+F-(z-2*B+D),w=2*(D-F)-2*(B-D),v=F-D,u=(-w+bt.sqrt(w*w-4*x*v))/2/x,s=(-w-bt.sqrt(w*w-4*x*v))/2/x,bp(u)>"1e12"&&(u=0.5),bp(s)>"1e12"&&(s=0.5),u>0&&1>u&&(y=bH(G,F,E,D,C,B,A,z,u),q.push(y.x),r.push(y.y)),s>0&&1>s&&(y=bH(G,F,E,D,C,B,A,z,s),q.push(y.x),r.push(y.y)),{min:{x:br[bK](0,q),y:br[bK](0,r)},max:{x:bs[bK](0,q),y:bs[bK](0,r)}}}),ax=a6._path2curve=a1(function(G,F){var E=!F&&cH(G);if(!F&&E.curve){return bz(E.curve)}for(var D=av(G),C=F&&av(F),B={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},A={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},z=(function(h,g,l){var k,j,i={T:1,Q:1};if(!h){return["C",g.x,g.y,g.x,g.y,g.x,g.y]}switch(!(h[0]in i)&&(g.qx=g.qy=null),h[0]){case"M":g.X=h[1],g.Y=h[2];break;case"A":h=["C"][bI](bZ[bK](0,[g.x,g.y][bI](h.slice(1))));break;case"S":"C"==l||"S"==l?(k=2*g.x-g.bx,j=2*g.y-g.by):(k=g.x,j=g.y),h=["C",k,j][bI](h.slice(1));break;case"T":"Q"==l||"T"==l?(g.qx=2*g.x-g.qx,g.qy=2*g.y-g.qy):(g.qx=g.x,g.qy=g.y),h=["C"][bI](cd(g.x,g.y,g.qx,g.qy,h[1],h[2]));break;case"Q":g.qx=h[1],g.qy=h[2],h=["C"][bI](cd(g.x,g.y,h[1],h[2],h[3],h[4]));break;case"L":h=["C"][bI](ak(g.x,g.y,h[1],h[2]));break;case"H":h=["C"][bI](ak(g.x,g.y,h[1],g.y));break;case"V":h=["C"][bI](ak(g.x,g.y,g.x,h[1]));break;case"Z":h=["C"][bI](ak(g.x,g.y,g.X,g.Y))}return h}),y=function(e,d){if(e[d].length>7){e[d].shift();for(var f=e[d];f.length;){e.splice(d++,0,["C"][bI](f.splice(0,6)))}e.splice(d,1),v=bs(D.length,C&&C.length||0)}},x=function(e,d,j,i,h){e&&d&&"M"==e[h][0]&&"M"!=d[h][0]&&(d.splice(h,0,["M",i.x,i.y]),j.bx=0,j.by=0,j.x=e[h][1],j.y=e[h][2],v=bs(D.length,C&&C.length||0))},w=0,v=bs(D.length,C&&C.length||0);v>w;w++){D[w]=z(D[w],B),y(D,w),C&&(C[w]=z(C[w],A)),C&&y(C,w),x(D,C,B,A,w),x(C,D,A,B,w);var u=D[w],s=C&&C[w],r=u.length,q=C&&s.length;B.x=u[r-2],B.y=u[r-1],B.bx=bd(u[r-4])||B.x,B.by=bd(u[r-3])||B.y,A.bx=C&&(bd(s[q-4])||A.x),A.by=C&&(bd(s[q-3])||A.y),A.x=C&&s[q-2],A.y=C&&s[q-1]}return C||(E.curve=bz(D)),C?[D,C]:D},null,bz),am=(a6._parseDots=a1(function(v){for(var u=[],s=0,r=v.length;r>s;s++){var q={},o=v[s].match(/^([^:]*):?([\d\.]*)/);if(q.color=a6.getRGB(o[1]),q.color.error){return null}q.color=q.color.hex,o[2]&&(q.offset=o[2]+"%"),u.push(q)}for(s=1,r=u.length-1;r>s;s++){if(!u[s].offset){for(var n=bd(u[s-1].offset||0),m=0,l=s+1;r>l;l++){if(u[l].offset){m=u[l].offset;break}}m||(m=100,l=r),m=bd(m);for(var c=(m-n)/(l-s+1);l>s;s++){n+=c,u[s].offset=n+"%"}}}return u}),a6._tear=function(d,c){d==c.top&&(c.top=d.prev),d==c.bottom&&(c.bottom=d.next),d.next&&(d.next.prev=d.prev),d.prev&&(d.prev.next=d.next)}),cf=(a6._tofront=function(d,c){c.top!==d&&(am(d,c),d.next=null,d.prev=c.top,c.top.next=d,c.top=d)},a6._toback=function(d,c){c.bottom!==d&&(am(d,c),d.next=c.bottom,d.prev=null,c.bottom.prev=d,c.bottom=d)},a6._insertafter=function(e,d,f){am(e,f),d==f.top&&(f.top=e),d.next&&(d.next.prev=e),e.next=d.next,e.prev=d,d.next=e},a6._insertbefore=function(e,d,f){am(e,f),d==f.bottom&&(f.bottom=e),d.prev&&(d.prev.next=e),e.prev=d.prev,d.prev=e,e.next=d},a6.toMatrix=function(f,e){var h=cI(f),g={_:{transform:bE},getBBox:function(){return h}};return b2(g,e),g.matrix}),b2=(a6.transformPath=function(d,c){return ce(d,cf(d,c))},a6._extractTransform=function(R,Q){if(null==Q){return R._.transform}Q=bB(Q).replace(/\.{3}|\u2026/g,R._.transform||bE);var P=a6.parseTransformString(Q),O=0,N=0,M=0,L=1,K=1,J=R._,I=new aN;if(J.transform=P||[],P){for(var H=0,G=P.length;G>H;H++){var F,E,D,C,B,A=P[H],z=A.length,y=bB(A[0]).toLowerCase(),o=A[0]!=y,c=o?I.invert():0;"t"==y&&3==z?o?(F=c.x(0,0),E=c.y(0,0),D=c.x(A[1],A[2]),C=c.y(A[1],A[2]),I.translate(D-F,C-E)):I.translate(A[1],A[2]):"r"==y?2==z?(B=B||R.getBBox(1),I.rotate(A[1],B.x+B.width/2,B.y+B.height/2),O+=A[1]):4==z&&(o?(D=c.x(A[2],A[3]),C=c.y(A[2],A[3]),I.rotate(A[1],D,C)):I.rotate(A[1],A[2],A[3]),O+=A[1]):"s"==y?2==z||3==z?(B=B||R.getBBox(1),I.scale(A[1],A[z-1],B.x+B.width/2,B.y+B.height/2),L*=A[1],K*=A[z-1]):5==z&&(o?(D=c.x(A[3],A[4]),C=c.y(A[3],A[4]),I.scale(A[1],A[2],D,C)):I.scale(A[1],A[2],A[3],A[4]),L*=A[1],K*=A[2]):"m"==y&&7==z&&I.add(A[1],A[2],A[3],A[4],A[5],A[6]),J.dirtyT=1,R.matrix=I}}R.matrix=I,J.sx=L,J.sy=K,J.deg=O,J.dx=N=I.e,J.dy=M=I.f,1==L&&1==K&&!O&&J.bbox?(J.bbox.x+=+N,J.bbox.y+=+M):J.dirtyT=1}),bP=function(d){var c=d[0];switch(c.toLowerCase()){case"t":return[c,0,0];case"m":return[c,1,0,0,1,0,0];case"r":return 4==d.length?[c,0,d[2],d[3]]:[c,0];case"s":return 5==d.length?[c,1,1,d[3],d[4]]:3==d.length?[c,1,1]:[c,1]}},ba=a6._equaliseTransform=function(v,u){u=bB(u).replace(/\.{3}|\u2026/g,v),v=a6.parseTransformString(v)||[],u=a6.parseTransformString(u)||[];for(var s,r,q,o,n=bs(v.length,u.length),m=[],l=[],c=0;n>c;c++){if(q=v[c]||bP(u[c]),o=u[c]||bP(q),q[0]!=o[0]||"r"==q[0].toLowerCase()&&(q[2]!=o[2]||q[3]!=o[3])||"s"==q[0].toLowerCase()&&(q[3]!=o[3]||q[4]!=o[4])){return}for(m[c]=[],l[c]=[],s=0,r=bs(q.length,o.length);r>s;s++){s in q&&(m[c][s]=q[s]),s in o&&(l[c][s]=o[s])}}return{from:m,to:l}};a6._getContainer=function(g,c,j,i){var h;return h=null!=i||a6.is(g,"object")?g:bO.doc.getElementById(g),null!=h?h.tagName?null==c?{container:h,width:h.style.pixelWidth||h.offsetWidth,height:h.style.pixelHeight||h.offsetHeight}:{container:h,width:c,height:j}:{container:1,x:g,y:c,width:j,height:i}:void 0},a6.pathToRelative=aW,a6._engine={},a6.path2curve=ax,a6.matrix=function(h,g,l,k,j,i){return new aN(h,g,l,k,j,i)},function(e){function c(b){return b[0]*b[0]+b[1]*b[1]}function f(b){var d=bt.sqrt(c(b));b[0]&&(b[0]/=d),b[1]&&(b[1]/=d)}e.add=function(B,A,z,y,x,w){var v,u,s,r,q=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],n=[[B,z,x],[A,y,w],[0,0,1]];for(B&&B instanceof aN&&(n=[[B.a,B.c,B.e],[B.b,B.d,B.f],[0,0,1]]),v=0;3>v;v++){for(u=0;3>u;u++){for(r=0,s=0;3>s;s++){r+=o[v][s]*n[s][u]}q[v][u]=r}}this.a=q[0][0],this.b=q[1][0],this.c=q[0][1],this.d=q[1][1],this.e=q[0][2],this.f=q[1][2]},e.invert=function(){var g=this,d=g.a*g.d-g.b*g.c;return new aN(g.d/d,-g.b/d,-g.c/d,g.a/d,(g.c*g.f-g.d*g.e)/d,(g.b*g.e-g.a*g.f)/d)},e.clone=function(){return new aN(this.a,this.b,this.c,this.d,this.e,this.f)},e.translate=function(g,d){this.add(1,0,0,1,g,d)},e.scale=function(h,g,j,i){null==g&&(g=h),(j||i)&&this.add(1,0,0,1,j,i),this.add(h,0,0,g,0,0),(j||i)&&this.add(1,0,0,1,-j,-i)},e.rotate=function(h,g,k){h=a6.rad(h),g=g||0,k=k||0;var j=+bt.cos(h).toFixed(9),i=+bt.sin(h).toFixed(9);this.add(j,i,-i,j,g,k),this.add(1,0,0,1,-g,-k)},e.x=function(g,d){return g*this.a+d*this.c+this.e},e.y=function(g,d){return g*this.b+d*this.d+this.f},e.get=function(b){return+this[bB.fromCharCode(97+b)].toFixed(4)},e.toString=function(){return a6.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},e.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},e.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},e.split=function(){var b={};b.dx=this.e,b.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];b.scalex=bt.sqrt(c(i[0])),f(i[0]),b.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*b.shear,i[1][1]-i[0][1]*b.shear],b.scaley=bt.sqrt(c(i[1])),f(i[1]),b.shear/=b.scaley;var h=-i[0][1],d=i[1][1];return 0>d?(b.rotate=a6.deg(bt.acos(d)),0>h&&(b.rotate=360-b.rotate)):b.rotate=a6.deg(bt.asin(h)),b.isSimple=!(+b.shear.toFixed(9)||b.scalex.toFixed(9)!=b.scaley.toFixed(9)&&b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate,b},e.toTransformString=function(g){var d=g||this[bA]();return d.isSimple?(d.scalex=+d.scalex.toFixed(4),d.scaley=+d.scaley.toFixed(4),d.rotate=+d.rotate.toFixed(4),(d.dx||d.dy?"t"+[d.dx,d.dy]:bE)+(1!=d.scalex||1!=d.scaley?"s"+[d.scalex,d.scaley,0,0]:bE)+(d.rotate?"r"+[d.rotate,0,0]:bE)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(aN.prototype);var cJ=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);aF.safari="Apple Computer, Inc."==navigator.vendor&&(cJ&&cJ[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&cJ&&cJ[1]<8?function(){var b=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){b.remove()})}:bY;for(var cK=function(){this.returnValue=!1},ad=function(){return this.originalEvent.preventDefault()},b4=function(){this.cancelBubble=!0},bR=function(){return this.originalEvent.stopPropagation()},be=function(e){var d=bO.doc.documentElement.scrollTop||bO.doc.body.scrollTop,f=bO.doc.documentElement.scrollLeft||bO.doc.body.scrollLeft;return{x:e.clientX+f,y:e.clientY+d}},aB=function(){return bO.doc.addEventListener?function(h,g,l,k){var j=function(d){var c=be(d);return l.call(k,d,c.x,c.y)};if(h.addEventListener(g,j,!1),bF&&bw[g]){var i=function(c){for(var o=be(c),n=c,m=0,d=c.targetTouches&&c.targetTouches.length;d>m;m++){if(c.targetTouches[m].target==h){c=c.targetTouches[m],c.originalEvent=n,c.preventDefault=ad,c.stopPropagation=bR;break}}return l.call(k,c,o.x,o.y)};h.addEventListener(bw[g],i,!1)}return function(){return h.removeEventListener(g,j,!1),bF&&bw[g]&&h.removeEventListener(bw[g],j,!1),!0}}:bO.doc.attachEvent?function(h,g,l,k){var j=function(d){d=d||bO.win.event;var c=bO.doc.documentElement.scrollTop||bO.doc.body.scrollTop,o=bO.doc.documentElement.scrollLeft||bO.doc.body.scrollLeft,n=d.clientX+o,m=d.clientY+c;return d.preventDefault=d.preventDefault||cK,d.stopPropagation=d.stopPropagation||b4,l.call(k,d,n,m)};h.attachEvent("on"+g,j);var i=function(){return h.detachEvent("on"+g,j),!0};return i}:void 0}(),ap=[],ae=function(D){for(var C,B=D.clientX,A=D.clientY,z=bO.doc.documentElement.scrollTop||bO.doc.body.scrollTop,y=bO.doc.documentElement.scrollLeft||bO.doc.body.scrollLeft,x=ap.length;x--;){if(C=ap[x],bF&&D.touches){for(var w,v=D.touches.length;v--;){if(w=D.touches[v],w.identifier==C.el._drag.id){B=w.clientX,A=w.clientY,(D.originalEvent?D.originalEvent:D).preventDefault();break}}}else{D.preventDefault()}var u,s=C.el.node,r=s.nextSibling,q=s.parentNode,b=s.style.display;bO.win.opera&&q.removeChild(s),s.style.display="none",u=C.el.paper.getElementByPoint(B,A),s.style.display=b,bO.win.opera&&(r?q.insertBefore(s,r):q.appendChild(s)),u&&cD("raphael.drag.over."+C.el.id,C.el,u),B+=y,A+=z,cD("raphael.drag.move."+C.el.id,C.move_scope||C.el,B-C.el._drag.x,A-C.el._drag.y,B,A,D)}},b5=function(b){a6.unmousemove(ae).unmouseup(b5);for(var f,c=ap.length;c--;){f=ap[c],f.el._drag={},cD("raphael.drag.end."+f.el.id,f.end_scope||f.start_scope||f.move_scope||f.el,b)}ap=[]},bJ=a6.el={},af=bx.length;af--;){!function(b){a6[b]=bJ[b]=function(c,e){return a6.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:aB(this.shape||this.node||bO.doc,b,c,e||this)})),this},a6["un"+b]=bJ["un"+b]=function(c){for(var g=this.events||[],f=g.length;f--;){g[f].name!=b||!a6.is(c,"undefined")&&g[f].f!=c||(g[f].unbind(),g.splice(f,1),!g.length&&delete this.events)}return this}}(bx[af])}bJ.data=function(b,h){var g=aj[this.id]=aj[this.id]||{};if(0==arguments.length){return g}if(1==arguments.length){if(a6.is(b,"object")){for(var c in b){b[aA](c)&&this.data(c,b[c])}return this}return cD("raphael.data.get."+this.id,this,g[b],b),g[b]}return g[b]=h,cD("raphael.data.set."+this.id,this,h,b),this},bJ.removeData=function(b){return null==b?aj[this.id]={}:aj[this.id]&&delete aj[this.id][b],this},bJ.getData=function(){return a5(aj[this.id]||{})},bJ.hover=function(f,e,h,g){return this.mouseover(f,h).mouseout(e,g||h)},bJ.unhover=function(d,c){return this.unmouseover(d).unmouseout(c)};var cL=[];bJ.drag=function(b,n,m,l,k,j){function c(h){(h.originalEvent||h).preventDefault();var g=h.clientX,f=h.clientY,e=bO.doc.documentElement.scrollTop||bO.doc.body.scrollTop,d=bO.doc.documentElement.scrollLeft||bO.doc.body.scrollLeft;if(this._drag.id=h.identifier,bF&&h.touches){for(var r,q=h.touches.length;q--;){if(r=h.touches[q],this._drag.id=r.identifier,r.identifier==this._drag.id){g=r.clientX,f=r.clientY;break}}}this._drag.x=g+d,this._drag.y=f+e,!ap.length&&a6.mousemove(ae).mouseup(b5),ap.push({el:this,move_scope:l,start_scope:k,end_scope:j}),n&&cD.on("raphael.drag.start."+this.id,n),b&&cD.on("raphael.drag.move."+this.id,b),m&&cD.on("raphael.drag.end."+this.id,m),cD("raphael.drag.start."+this.id,k||l||this,h.clientX+d,h.clientY+e,h)}return this._drag={},cL.push({el:this,start:c}),this.mousedown(c),this},bJ.onDragOver=function(b){b?cD.on("raphael.drag.over."+this.id,b):cD.unbind("raphael.drag.over."+this.id)},bJ.undrag=function(){for(var b=cL.length;b--;){cL[b].el==this&&(this.unmousedown(cL[b].start),cL.splice(b,1),cD.unbind("raphael.drag.*."+this.id))}!cL.length&&a6.unmousemove(ae).unmouseup(b5),ap=[]},aF.circle=function(f,c,h){var g=a6._engine.circle(this,f||0,c||0,h||0);return this.__set__&&this.__set__.push(g),g},aF.rect=function(h,c,l,k,j){var i=a6._engine.rect(this,h||0,c||0,l||0,k||0,j||0);return this.__set__&&this.__set__.push(i),i},aF.ellipse=function(g,c,j,i){var h=a6._engine.ellipse(this,g||0,c||0,j||0,i||0);return this.__set__&&this.__set__.push(h),h},aF.path=function(d){d&&!a6.is(d,bk)&&!a6.is(d[0],bj)&&(d+=bE);var c=a6._engine.path(a6.format[bK](a6,arguments),this);return this.__set__&&this.__set__.push(c),c},aF.image=function(h,c,l,k,j){var i=a6._engine.image(this,h||"about:blank",c||0,l||0,k||0,j||0);return this.__set__&&this.__set__.push(i),i},aF.text=function(f,c,h){var g=a6._engine.text(this,f||0,c||0,bB(h));return this.__set__&&this.__set__.push(g),g},aF.set=function(d){!a6.is(d,"array")&&(d=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cQ(d);return this.__set__&&this.__set__.push(c),c.paper=this,c.type="set",c},aF.setStart=function(b){this.__set__=b||this.set()},aF.setFinish=function(){var b=this.__set__;return delete this.__set__,b},aF.setSize=function(d,c){return a6._engine.setSize.call(this,d,c)},aF.setViewBox=function(g,c,j,i,h){return a6._engine.setViewBox.call(this,g,c,j,i,h)},aF.top=aF.bottom=null,aF.raphael=a6;var cM=function(s){var r=s.getBoundingClientRect(),q=s.ownerDocument,o=q.body,n=q.documentElement,m=n.clientTop||o.clientTop||0,l=n.clientLeft||o.clientLeft||0,k=r.top+(bO.win.pageYOffset||n.scrollTop||o.scrollTop)-m,j=r.left+(bO.win.pageXOffset||n.scrollLeft||o.scrollLeft)-l;return{y:k,x:j}};aF.getElementByPoint=function(j,i){var q=this,o=q.canvas,n=bO.doc.elementFromPoint(j,i);if(bO.win.opera&&"svg"==n.tagName){var m=cM(o),l=o.createSVGRect();l.x=j-m.x,l.y=i-m.y,l.width=l.height=1;var k=o.getIntersectionList(l,null);k.length&&(n=k[k.length-1])}if(!n){return null}for(;n.parentNode&&n!=o.parentNode&&!n.raphael;){n=n.parentNode}return n==q.canvas.parentNode&&(n=o),n=n&&n.raphael?q.getById(n.raphaelid):null},aF.getElementsByBBox=function(d){var c=this.set();return this.forEach(function(b){a6.isBBoxIntersect(b.getBBox(),d)&&c.push(b)}),c},aF.getById=function(d){for(var c=this.bottom;c;){if(c.id==d){return c}c=c.next}return null},aF.forEach=function(e,d){for(var f=this.bottom;f;){if(e.call(d,f)===!1){return this}f=f.next}return this},aF.getElementsByPoint=function(e,d){var f=this.set();return this.forEach(function(b){b.isPointInside(e,d)&&f.push(b)}),f},bJ.isPointInside=function(e,c){var f=this.realPath=al[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(f=a6.transformPath(f,this.attr("transform"))),a6.isPointInsidePath(f,e,c)},bJ.getBBox=function(d){if(this.removed){return{}}var c=this._;return d?((c.dirty||!c.bboxwt)&&(this.realPath=al[this.type](this),c.bboxwt=cI(this.realPath),c.bboxwt.toString=aM,c.dirty=0),c.bboxwt):((c.dirty||c.dirtyT||!c.bbox)&&((c.dirty||!this.realPath)&&(c.bboxwt=0,this.realPath=al[this.type](this)),c.bbox=cI(ce(this.realPath,this.matrix)),c.bbox.toString=aM,c.dirty=c.dirtyT=0),c.bbox)},bJ.clone=function(){if(this.removed){return null}var b=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(b),b},bJ.glow=function(i){if("text"==this.type){return null}i=i||{};var h={width:(i.width||10)+(+this.attr("stroke-width")||1),fill:i.fill||!1,opacity:i.opacity||0.5,offsetx:i.offsetx||0,offsety:i.offsety||0,color:i.color||"#000"},n=h.width/2,m=this.paper,l=m.set(),k=this.realPath||al[this.type](this);k=this.matrix?ce(k,this.matrix):k;for(var j=1;n+1>j;j++){l.push(m.path(k).attr({stroke:h.color,fill:h.fill?h.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(h.width/n*j).toFixed(3),opacity:+(h.opacity/n).toFixed(3)}))}return l.insertBefore(this).translate(h.offsetx,h.offsety)};var cN=function(s,r,q,o,n,m,k,j,c){return null==c?aU(s,r,q,o,n,m,k,j):a6.findDotsAtSegment(s,r,q,o,n,m,k,j,aT(s,r,q,o,n,m,k,j,c))},aq=function(d,c){return function(C,B,A){C=ax(C);for(var z,y,x,w,v,u="",s={},r=0,q=0,b=C.length;b>q;q++){if(x=C[q],"M"==x[0]){z=+x[1],y=+x[2]}else{if(w=cN(z,y,x[1],x[2],x[3],x[4],x[5],x[6]),r+w>B){if(c&&!s.start){if(v=cN(z,y,x[1],x[2],x[3],x[4],x[5],x[6],B-r),u+=["C"+v.start.x,v.start.y,v.m.x,v.m.y,v.x,v.y],A){return u}s.start=u,u=["M"+v.x,v.y+"C"+v.n.x,v.n.y,v.end.x,v.end.y,x[5],x[6]].join(),r+=w,z=+x[5],y=+x[6];continue}if(!d&&!c){return v=cN(z,y,x[1],x[2],x[3],x[4],x[5],x[6],B-r),{x:v.x,y:v.y,alpha:v.alpha}}}r+=w,z=+x[5],y=+x[6]}u+=x.shift()+x}return s.end=u,v=d?r:c?s:a6.findDotsAtSegment(z,y,x[0],x[1],x[2],x[3],x[4],x[5],1),v.alpha&&(v={x:v.x,y:v.y,alpha:v.alpha}),v}},ag=aq(1),b6=aq(),bU=aq(0,1);a6.getTotalLength=ag,a6.getPointAtLength=b6,a6.getSubpath=function(f,e,h){if(this.getTotalLength(f)-h<0.000001){return bU(f,e).end}var g=bU(f,h,1);return e?bU(g,e).end:g},bJ.getTotalLength=function(){var b=this.getPath();if(b){return this.node.getTotalLength?this.node.getTotalLength():ag(b)}},bJ.getPointAtLength=function(d){var c=this.getPath();if(c){return b6(c,d)}},bJ.getPath=function(){var d,c=a6._getPath[this.type];if("text"!=this.type&&"set"!=this.type){return c&&(d=c(this)),d}},bJ.getSubpath=function(e,c){var f=this.getPath();if(f){return a6.getSubpath(f,e,c)}};var cO=a6.easing_formulas={linear:function(b){return b},"<":function(b){return bn(b,1.7)},">":function(b){return bn(b,0.48)},"<>":function(j){var i=0.48-j/1.04,q=bt.sqrt(0.1734+i*i),o=q-i,n=bn(bp(o),1/3)*(0>o?-1:1),m=-q-i,l=bn(bp(m),1/3)*(0>m?-1:1),k=n+l+0.5;return 3*(1-k)*k*k+k*k*k},backIn:function(d){var c=1.70158;return d*d*((c+1)*d-c)},backOut:function(d){d-=1;var c=1.70158;return d*d*((c+1)*d+c)+1},elastic:function(b){return b==!!b?b:bn(2,-10*b)*bt.sin(2*(b-0.075)*bm/0.3)+1},bounce:function(f){var e,h=7.5625,g=2.75;return 1/g>f?e=h*f*f:2/g>f?(f-=1.5/g,e=h*f*f+0.75):2.5/g>f?(f-=2.25/g,e=h*f*f+0.9375):(f-=2.625/g,e=h*f*f+0.984375),e}};cO.easeIn=cO["ease-in"]=cO["<"],cO.easeOut=cO["ease-out"]=cO[">"],cO.easeInOut=cO["ease-in-out"]=cO["<>"],cO["back-in"]=cO.backIn,cO["back-out"]=cO.backOut;var cP=[],at=cC.requestAnimationFrame||cC.webkitRequestAnimationFrame||cC.mozRequestAnimationFrame||cC.oRequestAnimationFrame||cC.msRequestAnimationFrame||function(b){setTimeout(b,16)},ai=function(){for(var R=+new Date,Q=0;Q<cP.length;Q++){var P=cP[Q];if(!P.el.removed&&!P.paused){var O,N,M=R-P.start,L=P.ms,K=P.easing,J=P.from,I=P.diff,H=P.to,G=(P.t,P.el),F={},E={};if(P.initstatus?(M=(P.initstatus*P.anim.top-P.prev)/(P.percent-P.prev)*L,P.status=P.initstatus,delete P.initstatus,P.stop&&cP.splice(Q--,1)):P.status=(P.prev+(P.percent-P.prev)*(M/L))/P.anim.top,!(0>M)){if(L>M){var D=K(M/L);for(var C in J){if(J[aA](C)){switch(ar[C]){case bl:O=+J[C]+D*L*I[C];break;case"colour":O="rgb("+[b9(b0(J[C].r+D*L*I[C].r)),b9(b0(J[C].g+D*L*I[C].g)),b9(b0(J[C].b+D*L*I[C].b))].join(",")+")";break;case"path":O=[];for(var B=0,A=J[C].length;A>B;B++){O[B]=[J[C][B][0]];for(var z=1,s=J[C][B].length;s>z;z++){O[B][z]=+J[C][B][z]+D*L*I[C][B][z]}O[B]=O[B].join(bC)}O=O.join(bC);break;case"transform":if(I[C].real){for(O=[],B=0,A=J[C].length;A>B;B++){for(O[B]=[J[C][B][0]],z=1,s=J[C][B].length;s>z;z++){O[B][z]=J[C][B][z]+D*L*I[C][B][z]}}}else{var c=function(d){return+J[C][d]+D*L*I[C][d]};O=[["m",c(0),c(1),c(2),c(3),c(4),c(5)]]}break;case"csv":if("clip-rect"==C){for(O=[],B=4;B--;){O[B]=+J[C][B]+D*L*I[C][B]}}break;default:var b=[][bI](J[C]);for(O=[],B=G.paper.customAttributes[C].length;B--;){O[B]=+b[B]+D*L*I[C][B]}}F[C]=O}}G.attr(F),function(e,g,f){setTimeout(function(){cD("raphael.anim.frame."+e,g,f)})}(G.id,G,P.anim)}else{if(function(f,h,g){setTimeout(function(){cD("raphael.anim.frame."+h.id,h,g),cD("raphael.anim.finish."+h.id,h,g),a6.is(f,"function")&&f.call(h)})}(P.callback,G,P.anim),G.attr(H),cP.splice(Q--,1),P.repeat>1&&!P.next){for(N in H){H[aA](N)&&(E[N]=P.totalOrigin[N])}P.el.attr(E),aI(P.anim,P.el,P.anim.percents[0],null,P.totalOrigin,P.repeat-1)}P.next&&!P.stop&&aI(P.anim,P.el,P.next,null,P.totalOrigin,P.repeat)}}}}a6.svg&&G&&G.paper&&G.paper.safari(),cP.length&&at(ai)},b9=function(b){return b>255?255:0>b?0:b};bJ.animateWith=function(v,u,s,r,q,o){var n=this;if(n.removed){return o&&o.call(n),n}var m=s instanceof aJ?s:a6.animation(s,r,q,o);aI(m,n,m.percents[0],null,n.attr());for(var l=0,c=cP.length;c>l;l++){if(cP[l].anim==u&&cP[l].el==v){cP[c-1].start=cP[l].start;break}}return n},bJ.onAnimation=function(b){return b?cD.on("raphael.anim.frame."+this.id,b):cD.unbind("raphael.anim.frame."+this.id),this},aJ.prototype.delay=function(d){var c=new aJ(this.anim,this.ms);return c.times=this.times,c.del=+d||0,c},aJ.prototype.repeat=function(d){var c=new aJ(this.anim,this.ms);return c.del=this.del,c.times=bt.floor(bs(d,0))||1,c},a6.animation=function(i,c,n,m){if(i instanceof aJ){return i}(a6.is(n,"function")||!n)&&(m=m||n||null,n=null),i=Object(i),c=+c||0;var l,k,j={};for(k in i){i[aA](k)&&bd(k)!=k&&bd(k)+"%"!=k&&(l=!0,j[k]=i[k])}return l?(n&&(j.easing=n),m&&(j.callback=m),new aJ({100:j},c)):new aJ(i,c)},bJ.animate=function(h,c,l,k){var j=this;if(j.removed){return k&&k.call(j),j}var i=h instanceof aJ?h:a6.animation(h,c,l,k);return aI(i,j,i.percents[0],null,j.attr()),j},bJ.setTime=function(d,c){return d&&null!=c&&this.status(d,br(c,d.ms)/d.ms),this},bJ.status=function(h,g){var l,k,j=[],i=0;if(null!=g){return aI(h,this,-1,br(g,1)),this}for(l=cP.length;l>i;i++){if(k=cP[i],k.el.id==this.id&&(!h||k.anim==h)){if(h){return k.status}j.push({anim:k.anim,status:k.status})}}return h?0:j},bJ.pause=function(b){for(var d=0;d<cP.length;d++){cP[d].el.id!=this.id||b&&cP[d].anim!=b||cD("raphael.anim.pause."+this.id,this,cP[d].anim)!==!1&&(cP[d].paused=!0)}return this},bJ.resume=function(b){for(var f=0;f<cP.length;f++){if(cP[f].el.id==this.id&&(!b||cP[f].anim==b)){var e=cP[f];cD("raphael.anim.resume."+this.id,this,e.anim)!==!1&&(delete e.paused,this.status(e.anim,e.status))}}return this},bJ.stop=function(b){for(var d=0;d<cP.length;d++){cP[d].el.id!=this.id||b&&cP[d].anim!=b||cD("raphael.anim.stop."+this.id,this,cP[d].anim)!==!1&&cP.splice(d--,1)}return this},cD.on("raphael.remove",aH),cD.on("raphael.clear",aH),bJ.toString=function(){return"RaphaÃ«lâ€™s object"};var cQ=function(e){if(this.items=[],this.length=0,this.type="set",e){for(var d=0,f=e.length;f>d;d++){!e[d]||e[d].constructor!=bJ.constructor&&e[d].constructor!=cQ||(this[this.items.length]=this.items[this.items.length]=e[d],this.length++)}}},bD=cQ.prototype;bD.push=function(){for(var f,e,h=0,g=arguments.length;g>h;h++){f=arguments[h],!f||f.constructor!=bJ.constructor&&f.constructor!=cQ||(e=this.items.length,this[e]=this.items[e]=f,this.length++)}return this},bD.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},bD.forEach=function(f,e){for(var h=0,g=this.items.length;g>h;h++){if(f.call(e,this.items[h],h)===!1){return this}}return this};for(var cR in bJ){bJ[aA](cR)&&(bD[cR]=function(b){return function(){var c=arguments;return this.forEach(function(d){d[b][bK](d,c)})}}(cR))}return bD.attr=function(h,c){if(h&&a6.is(h,bj)&&a6.is(h[0],"object")){for(var l=0,k=h.length;k>l;l++){this.items[l].attr(h[l])}}else{for(var j=0,i=this.items.length;i>j;j++){this.items[j].attr(h,c)}}return this},bD.clear=function(){for(;this.length;){this.pop()}},bD.splice=function(i,h){i=0>i?bs(this.length+i,0):i,h=bs(0,br(this.length-i,h));var n,m=[],l=[],k=[];for(n=2;n<arguments.length;n++){k.push(arguments[n])}for(n=0;h>n;n++){l.push(this[i+n])}for(;n<this.length-i;n++){m.push(this[i+n])}var j=k.length;for(n=0;n<j+m.length;n++){this.items[i+n]=this[i+n]=j>n?k[n]:m[n-j]}for(n=this.items.length=this.length-=h-j;this[n];){delete this[n++]}return new cQ(l)},bD.exclude=function(e){for(var d=0,f=this.length;f>d;d++){if(this[d]==e){return this.splice(d,1),!0}}},bD.animate=function(v,u,s,r){(a6.is(s,"function")||!s)&&(r=s||null);var q,o,n=this.items.length,m=n,l=this;if(!n){return this}r&&(o=function(){!--n&&r.call(l)}),s=a6.is(s,bk)?s:o;var c=a6.animation(v,u,s,o);for(q=this.items[--m].animate(c);m--;){this.items[m]&&!this.items[m].removed&&this.items[m].animateWith(q,c,c),this.items[m]&&!this.items[m].removed||n--}return this},bD.insertAfter=function(d){for(var c=this.items.length;c--;){this.items[c].insertAfter(d)}return this},bD.getBBox=function(){for(var h=[],g=[],l=[],k=[],j=this.items.length;j--;){if(!this.items[j].removed){var i=this.items[j].getBBox();h.push(i.x),g.push(i.y),l.push(i.x+i.width),k.push(i.y+i.height)}}return h=br[bK](0,h),g=br[bK](0,g),l=bs[bK](0,l),k=bs[bK](0,k),{x:h,y:g,x2:l,y2:k,width:l-h,height:k-g}},bD.clone=function(e){e=this.paper.set();for(var d=0,f=this.items.length;f>d;d++){e.push(this.items[d].clone())}return e},bD.toString=function(){return"RaphaÃ«lâ€˜s set"},bD.glow=function(d){var c=this.paper.set();return this.forEach(function(e){var b=e.glow(d);null!=b&&b.forEach(function(f){c.push(f)})}),c},bD.isPointInside=function(e,d){var f=!1;return this.forEach(function(b){return b.isPointInside(e,d)?(console.log("runned"),f=!0,!1):void 0}),f},a6.registerFont=function(i){if(!i.face){return i}this.fonts=this.fonts||{};var h={w:i.w,face:{},glyphs:{}},n=i.face["font-family"];for(var m in i.face){i.face[aA](m)&&(h.face[m]=i.face[m])}if(this.fonts[n]?this.fonts[n].push(h):this.fonts[n]=[h],!i.svg){h.face["units-per-em"]=bT(i.face["units-per-em"],10);for(var l in i.glyphs){if(i.glyphs[aA](l)){var k=i.glyphs[l];if(h.glyphs[l]={w:k.w,k:{},d:k.d&&"M"+k.d.replace(/[mlcxtrv]/g,function(b){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[b]||"M"})+"z"},k.k){for(var j in k.k){k[aA](j)&&(h.glyphs[l].k[j]=k.k[j])}}}}}return i},aF.getFont=function(v,u,s,r){if(r=r||"normal",s=s||"normal",u=+u||{normal:400,bold:700,lighter:300,bolder:800}[u]||400,a6.fonts){var q=a6.fonts[v];if(!q){var o=new RegExp("(^|\\s)"+v.replace(/[^\w\d\s+!~.:_-]/g,bE)+"(\\s|$)","i");for(var n in a6.fonts){if(a6.fonts[aA](n)&&o.test(n)){q=a6.fonts[n];break}}}var m;if(q){for(var l=0,c=q.length;c>l&&(m=q[l],m.face["font-weight"]!=u||m.face["font-style"]!=s&&m.face["font-style"]||m.face["font-stretch"]!=r);l++){}}return m}},aF.print=function(R,Q,P,O,N,M,L,K){M=M||"middle",L=bs(br(L||0,1),-1),K=bs(br(K||1,3),1);var J,I=bB(P)[bA](bE),H=0,G=0,F=bE;if(a6.is(O,"string")&&(O=this.getFont(O)),O){J=(N||16)/O.face["units-per-em"];for(var E=O.face.bbox[bA](aE),D=+E[0],C=E[3]-E[1],B=0,A=+E[1]+("baseline"==M?C+ +O.face.descent:C/2),z=0,y=I.length;y>z;z++){if("\n"==I[z]){H=0,c=0,G=0,B+=C*K}else{var w=G&&O.glyphs[I[z-1]]||{},c=O.glyphs[I[z]];H+=G?(w.w||O.w)+(w.k&&w.k[I[z]]||0)+O.w*L:0,G=1}c&&c.d&&(F+=a6.transformPath(c.d,["t",H*J,B*J,"s",J,J,D,A,"t",(R-D)/J,(Q-A)/J]))}}return this.path(F).attr({fill:"#000",stroke:"none"})},aF.add=function(g){if(a6.is(g,"array")){for(var c,j=this.set(),i=0,h=g.length;h>i;i++){c=g[i]||{},aD[aA](c.type)&&j.push(this[c.type]().attr(c))}}return j},a6.format=function(e,c){var f=a6.is(c,bj)?[0][bI](c):arguments;return e&&a6.is(e,bk)&&f.length-1&&(e=e.replace(aC,function(g,d){return null==f[++d]?bE:f[d]})),e||bE},a6.fullfill=function(){var e=/\{([^\}]+)\}/g,d=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,f=function(b,i,h){var g=h;return i.replace(d,function(k,j,n,m,l){j=j||m,g&&(j in g&&(g=g[j]),"function"==typeof g&&l&&(g=g()))}),g=(null==g||g==h?b:g)+""};return function(c,g){return String(c).replace(e,function(i,h){return f(i,h,g)})}}(),a6.ninja=function(){return bM.was?bO.win.Raphael=bM.is:delete Raphael,a6},a6.st=bD,function(f,c,h){function g(){/in/.test(f.readyState)?setTimeout(g,9):a6.eve("raphael.DOMload")}null==f.readyState&&f.addEventListener&&(f.addEventListener(c,h=function(){f.removeEventListener(c,h,!1),f.readyState="complete"},!1),f.readyState="loading"),g()}(document,"DOMContentLoaded"),cD.on("raphael.DOMload",function(){cE=!0}),function(){if(a6.svg){var t="hasOwnProperty",bb=String,ac=parseFloat,ab=parseInt,Z=Math,Y=Z.max,X=Z.abs,W=Z.pow,V=/[, ]+/,U=a6.eve,T="",S=" ",R="http://www.w3.org/1999/xlink",Q={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},P={};a6.toString=function(){return"Your browser supports SVG.\nYou are running RaphaÃ«l "+this.version};var N=function(h,g){if(g){"string"==typeof h&&(h=N(h));for(var b in g){g[t](b)&&("xlink:"==b.substring(0,6)?h.setAttributeNS(R,b.substring(6),bb(g[b])):h.setAttribute(b,bb(g[b])))}}else{h=a6._g.doc.createElementNS("http://www.w3.org/2000/svg",h),h.style&&(h.style.webkitTapHighlightColor="rgba(0,0,0,0)")}return h},L=function(B,q){var l="linear",i=B.id+q,h=0.5,g=0.5,f=B.node,d=B.paper,b=f.style,ch=a6._g.doc.getElementById(i);if(!ch){if(q=bb(q).replace(a6._radial_gradient,function(k,j,n){if(l="radial",j&&n){h=ac(j),g=ac(n);var m=2*(g>0.5)-1;W(h-0.5,2)+W(g-0.5,2)>0.25&&(g=Z.sqrt(0.25-W(h-0.5,2))*m+0.5)&&0.5!=g&&(g=g.toFixed(5)-0.00001*m)}return T}),q=q.split(/\s*\-\s*/),"linear"==l){var a=q.shift();if(a=-ac(a),isNaN(a)){return null}var c=[0,0,Z.cos(a6.rad(a)),Z.sin(a6.rad(a))],cb=1/(Y(X(c[2]),X(c[3]))||1);c[2]*=cb,c[3]*=cb,c[2]<0&&(c[0]=-c[2],c[2]=0),c[3]<0&&(c[1]=-c[3],c[3]=0)}var C=a6._parseDots(q);if(!C){return null}if(i=i.replace(/[\(\)\s,\xb0#]/g,"_"),B.gradient&&i!=B.gradient.id&&(d.defs.removeChild(B.gradient),delete B.gradient),!B.gradient){ch=N(l+"Gradient",{id:i}),B.gradient=ch,N(ch,"radial"==l?{fx:h,fy:g}:{x1:c[0],y1:c[1],x2:c[2],y2:c[3],gradientTransform:B.matrix.invert()}),d.defs.appendChild(ch);for(var A=0,z=C.length;z>A;A++){ch.appendChild(N("stop",{offset:C[A].offset?C[A].offset:A?"100%":"0%","stop-color":C[A].color||"#fff"}))}}}return N(f,{fill:"url(#"+i+")",opacity:1,"fill-opacity":1}),b.fill=T,b.opacity=1,b.fillOpacity=1,1},J=function(e){var d=e.getBBox(1);N(e.pattern,{patternTransform:e.matrix.invert()+" translate("+d.x+","+d.y+")"})},I=function(a,c,d){if("path"==a.type){for(var e,cu,ct,cs,cr,cq=bb(c).toLowerCase().split("-"),cp=a.paper,cm=d?"end":"start",ck=a.node,ci=a.attrs,cg=ci["stroke-width"],cb=cq.length,q="classic",o=3,l=3,b=5;cb--;){switch(cq[cb]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":q=cq[cb];break;case"wide":l=5;break;case"narrow":l=2;break;case"long":o=5;break;case"short":o=2}}if("open"==q?(o+=2,l+=2,b+=2,ct=1,cs=d?4:1,cr={fill:"none",stroke:ci.stroke}):(cs=ct=o/2,cr={fill:ci.stroke,stroke:"none"}),a._.arrows?d?(a._.arrows.endPath&&P[a._.arrows.endPath]--,a._.arrows.endMarker&&P[a._.arrows.endMarker]--):(a._.arrows.startPath&&P[a._.arrows.startPath]--,a._.arrows.startMarker&&P[a._.arrows.startMarker]--):a._.arrows={},"none"!=q){var f="raphael-marker-"+q,cn="raphael-marker-"+cm+q+o+l;a6._g.doc.getElementById(f)?P[f]++:(cp.defs.appendChild(N(N("path"),{"stroke-linecap":"round",d:Q[q],id:f})),P[f]=1);var g,cj=a6._g.doc.getElementById(cn);cj?(P[cn]++,g=cj.getElementsByTagName("use")[0]):(cj=N(N("marker"),{id:cn,markerHeight:l,markerWidth:o,orient:"auto",refX:cs,refY:l/2}),g=N(N("use"),{"xlink:href":"#"+f,transform:(d?"rotate(180 "+o/2+" "+l/2+") ":T)+"scale("+o/b+","+l/b+")","stroke-width":(1/((o/b+l/b)/2)).toFixed(4)}),cj.appendChild(g),cp.defs.appendChild(cj),P[cn]=1),N(g,cr);var h=ct*("diamond"!=q&&"oval"!=q);d?(e=a._.arrows.startdx*cg||0,cu=a6.getTotalLength(ci.path)-h*cg):(e=h*cg,cu=a6.getTotalLength(ci.path)-(a._.arrows.enddx*cg||0)),cr={},cr["marker-"+cm]="url(#"+cn+")",(cu||e)&&(cr.d=a6.getSubpath(ci.path,e,cu)),N(ck,cr),a._.arrows[cm+"Path"]=f,a._.arrows[cm+"Marker"]=cn,a._.arrows[cm+"dx"]=h,a._.arrows[cm+"Type"]=q,a._.arrows[cm+"String"]=c}else{d?(e=a._.arrows.startdx*cg||0,cu=a6.getTotalLength(ci.path)-e):(e=0,cu=a6.getTotalLength(ci.path)-(a._.arrows.enddx*cg||0)),a._.arrows[cm+"Path"]&&N(ck,{d:a6.getSubpath(ci.path,e,cu)}),delete a._.arrows[cm+"Path"],delete a._.arrows[cm+"Marker"],delete a._.arrows[cm+"dx"],delete a._.arrows[cm+"Type"],delete a._.arrows[cm+"String"]}for(cr in P){if(P[t](cr)&&!P[cr]){var i=a6._g.doc.getElementById(cr);i&&i.parentNode.removeChild(i)}}}},H={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},G=function(b,n,m){if(n=H[bb(n).toLowerCase()]){for(var l=b.attrs["stroke-width"]||"1",k={round:l,square:l,butt:0}[b.attrs["stroke-linecap"]||m["stroke-linecap"]]||0,j=[],i=n.length;i--;){j[i]=n[i]*l+(i%2?1:-1)*k}N(b.node,{"stroke-dasharray":j.join(",")})}},F=function(a,c){var k=a.node,cj=a.attrs,ci=k.style.visibility;k.style.visibility="hidden";for(var m in c){if(c[t](m)){if(!a6._availableAttrs[t](m)){continue}var o=c[m];switch(cj[m]=o,m){case"blur":a.blur(o);break;case"href":case"title":var r=N("title"),l=a6._g.doc.createTextNode(o);r.appendChild(l),k.appendChild(r);break;case"target":var h=k.parentNode;if("a"!=h.tagName.toLowerCase()){var r=N("a");h.insertBefore(r,k),r.appendChild(k),h=r}"target"==m?h.setAttributeNS(R,"show","blank"==o?"new":o):h.setAttributeNS(R,m,o);break;case"cursor":k.style.cursor=o;break;case"transform":a.transform(o);break;case"arrow-start":I(a,o);break;case"arrow-end":I(a,o,1);break;case"clip-rect":var b=bb(o).split(V);if(4==b.length){a.clip&&a.clip.parentNode.parentNode.removeChild(a.clip.parentNode);var p=N("clipPath"),cb=N("rect");p.id=a6.createUUID(),N(cb,{x:b[0],y:b[1],width:b[2],height:b[3]}),p.appendChild(cb),a.paper.defs.appendChild(p),N(k,{"clip-path":"url(#"+p.id+")"}),a.clip=cb}if(!o){var y=k.getAttribute("clip-path");if(y){var v=a6._g.doc.getElementById(y.replace(/(^url\(#|\)$)/g,T));v&&v.parentNode.removeChild(v),N(k,{"clip-path":T}),delete a.clip}}break;case"path":"path"==a.type&&(N(k,{d:o?cj.path=a6._pathToAbsolute(o):"M0,0"}),a._.dirty=1,a._.arrows&&("startString"in a._.arrows&&I(a,a._.arrows.startString),"endString"in a._.arrows&&I(a,a._.arrows.endString,1)));break;case"width":if(k.setAttribute(m,o),a._.dirty=1,!cj.fx){break}m="x",o=cj.x;case"x":cj.fx&&(o=-cj.x-(cj.width||0));case"rx":if("rx"==m&&"rect"==a.type){break}case"cx":k.setAttribute(m,o),a.pattern&&J(a),a._.dirty=1;break;case"height":if(k.setAttribute(m,o),a._.dirty=1,!cj.fy){break}m="y",o=cj.y;case"y":cj.fy&&(o=-cj.y-(cj.height||0));case"ry":if("ry"==m&&"rect"==a.type){break}case"cy":k.setAttribute(m,o),a.pattern&&J(a),a._.dirty=1;break;case"r":"rect"==a.type?N(k,{rx:o,ry:o}):k.setAttribute(m,o),a._.dirty=1;break;case"src":"image"==a.type&&k.setAttributeNS(R,"href",o);break;case"stroke-width":(1!=a._.sx||1!=a._.sy)&&(o/=Y(X(a._.sx),X(a._.sy))||1),a.paper._vbSize&&(o*=a.paper._vbSize),k.setAttribute(m,o),cj["stroke-dasharray"]&&G(a,cj["stroke-dasharray"],c),a._.arrows&&("startString"in a._.arrows&&I(a,a._.arrows.startString),"endString"in a._.arrows&&I(a,a._.arrows.endString,1));break;case"stroke-dasharray":G(a,o,c);break;case"fill":var s=bb(o).match(a6._ISURL);if(s){p=N("pattern");var q=N("image");p.id=a6.createUUID(),N(p,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),N(q,{x:0,y:0,"xlink:href":s[1]}),p.appendChild(q),function(d){a6._preload(s[1],function(){var f=this.offsetWidth,i=this.offsetHeight;N(d,{width:f,height:i}),N(q,{width:f,height:i}),a.paper.safari()})}(p),a.paper.defs.appendChild(p),N(k,{fill:"url(#"+p.id+")"}),a.pattern=p,a.pattern&&J(a);break}var n=a6.getRGB(o);if(n.error){if(("circle"==a.type||"ellipse"==a.type||"r"!=bb(o).charAt())&&L(a,o)){if("opacity"in cj||"fill-opacity"in cj){var j=a6._g.doc.getElementById(k.getAttribute("fill").replace(/^url\(#|\)$/g,T));if(j){var g=j.getElementsByTagName("stop");N(g[g.length-1],{"stop-opacity":("opacity"in cj?cj.opacity:1)*("fill-opacity"in cj?cj["fill-opacity"]:1)})}}cj.gradient=o,cj.fill="none";break}}else{delete c.gradient,delete cj.gradient,!a6.is(cj.opacity,"undefined")&&a6.is(c.opacity,"undefined")&&N(k,{opacity:cj.opacity}),!a6.is(cj["fill-opacity"],"undefined")&&a6.is(c["fill-opacity"],"undefined")&&N(k,{"fill-opacity":cj["fill-opacity"]})}n[t]("opacity")&&N(k,{"fill-opacity":n.opacity>1?n.opacity/100:n.opacity});case"stroke":n=a6.getRGB(o),k.setAttribute(m,n.hex),"stroke"==m&&n[t]("opacity")&&N(k,{"stroke-opacity":n.opacity>1?n.opacity/100:n.opacity}),"stroke"==m&&a._.arrows&&("startString"in a._.arrows&&I(a,a._.arrows.startString),"endString"in a._.arrows&&I(a,a._.arrows.endString,1));break;case"gradient":("circle"==a.type||"ellipse"==a.type||"r"!=bb(o).charAt())&&L(a,o);break;case"opacity":cj.gradient&&!cj[t]("stroke-opacity")&&N(k,{"stroke-opacity":o>1?o/100:o});case"fill-opacity":if(cj.gradient){j=a6._g.doc.getElementById(k.getAttribute("fill").replace(/^url\(#|\)$/g,T)),j&&(g=j.getElementsByTagName("stop"),N(g[g.length-1],{"stop-opacity":o}));break}default:"font-size"==m&&(o=ab(o,10)+"px");var e=m.replace(/(\-.)/g,function(d){return d.substring(1).toUpperCase()});k.style[e]=o,a._.dirty=1,k.setAttribute(m,o)}}}D(a,c),k.style.visibility=ci},E=1.2,D=function(A,z){if("text"==A.type&&(z[t]("text")||z[t]("font")||z[t]("font-size")||z[t]("x")||z[t]("y"))){var y=A.attrs,x=A.node,w=x.firstChild?ab(a6._g.doc.defaultView.getComputedStyle(x.firstChild,T).getPropertyValue("font-size"),10):10;if(z[t]("text")){for(y.text=z.text;x.firstChild;){x.removeChild(x.firstChild)}for(var v,u=bb(z.text).split("\n"),s=[],q=0,l=u.length;l>q;q++){v=N("tspan"),q&&N(v,{dy:w*E,x:y.x}),v.appendChild(a6._g.doc.createTextNode(u[q])),x.appendChild(v),s[q]=v}}else{for(s=x.getElementsByTagName("tspan"),q=0,l=s.length;l>q;q++){q?N(s[q],{dy:w*E,x:y.x}):N(s[0],{dy:0})}}N(x,{x:y.x,y:y.y}),A._.dirty=1;var e=A._getBBox(),b=y.y-(e.y+e.height/2);b&&a6.is(b,"finite")&&N(s[0],{dy:b})}},c=function(e,d){this[0]=this.node=e,e.raphael=!0,this.id=a6._oid++,e.raphaelid=this.id,this.matrix=a6.matrix(),this.realPath=null,this.paper=d,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!d.bottom&&(d.bottom=this),this.prev=d.top,d.top&&(d.top.next=this),d.top=this,this.next=null},O=a6.el;c.prototype=O,O.constructor=c,a6._engine.path=function(f,e){var h=N("path");e.canvas&&e.canvas.appendChild(h);var g=new c(h,e);return g.type="path",F(g,{fill:"none",stroke:"#000",path:f}),g},O.rotate=function(b,h,g){if(this.removed){return this}if(b=bb(b).split(V),b.length-1&&(h=ac(b[1]),g=ac(b[2])),b=ac(b[0]),null==g&&(h=g),null==h||null==g){var d=this.getBBox(1);h=d.x+d.width/2,g=d.y+d.height/2}return this.transform(this._.transform.concat([["r",b,h,g]])),this},O.scale=function(b,j,i,h){if(this.removed){return this}if(b=bb(b).split(V),b.length-1&&(j=ac(b[1]),i=ac(b[2]),h=ac(b[3])),b=ac(b[0]),null==j&&(j=b),null==h&&(i=h),null==i||null==h){var d=this.getBBox(1)}return i=null==i?d.x+d.width/2:i,h=null==h?d.y+d.height/2:h,this.transform(this._.transform.concat([["s",b,j,i,h]])),this},O.translate=function(b,d){return this.removed?this:(b=bb(b).split(V),b.length-1&&(d=ac(b[1])),b=ac(b[0])||0,d=+d||0,this.transform(this._.transform.concat([["t",b,d]])),this)},O.transform=function(f){var h=this._;if(null==f){return h.transform}if(a6._extractTransform(this,f),this.clip&&N(this.clip,{transform:this.matrix.invert()}),this.pattern&&J(this),this.node&&N(this.node,{transform:this.matrix}),1!=h.sx||1!=h.sy){var g=this.attrs[t]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":g})}return this},O.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},O.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},O.remove=function(){if(!this.removed&&this.node.parentNode){var e=this.paper;e.__set__&&e.__set__.exclude(this),U.unbind("raphael.*.*."+this.id),this.gradient&&e.defs.removeChild(this.gradient),a6._tear(this,e),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var d in this){this[d]="function"==typeof this[d]?a6._removedFactory(d):null}this.removed=!0}},O._getBBox=function(){if("none"==this.node.style.display){this.show();var e=!0}var d={};try{d=this.node.getBBox()}catch(f){}finally{d=d||{}}return e&&this.hide(),d},O.attr=function(A,z){if(this.removed){return this}if(null==A){var y={};for(var x in this.attrs){this.attrs[t](x)&&(y[x]=this.attrs[x])}return y.gradient&&"none"==y.fill&&(y.fill=y.gradient)&&delete y.gradient,y.transform=this._.transform,y}if(null==z&&a6.is(A,"string")){if("fill"==A&&"none"==this.attrs.fill&&this.attrs.gradient){return this.attrs.gradient}if("transform"==A){return this._.transform}for(var w=A.split(V),v={},u=0,s=w.length;s>u;u++){A=w[u],v[A]=A in this.attrs?this.attrs[A]:a6.is(this.paper.customAttributes[A],"function")?this.paper.customAttributes[A].def:a6._availableAttrs[A]}return s-1?v:v[w[0]]}if(null==z&&a6.is(A,"array")){for(v={},u=0,s=A.length;s>u;u++){v[A[u]]=this.attr(A[u])}return v}if(null!=z){var r={};r[A]=z}else{null!=A&&a6.is(A,"object")&&(r=A)}for(var q in r){U("raphael.attr."+q+"."+this.id,this,r[q])}for(q in this.paper.customAttributes){if(this.paper.customAttributes[t](q)&&r[t](q)&&a6.is(this.paper.customAttributes[q],"function")){var k=this.paper.customAttributes[q].apply(this,[].concat(r[q]));this.attrs[q]=r[q];for(var j in k){k[t](j)&&(r[j]=k[j])}}}return F(this,r),this},O.toFront=function(){if(this.removed){return this}"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;return b.top!=this&&a6._tofront(this,b),this},O.toBack=function(){if(this.removed){return this}var b=this.node.parentNode;"a"==b.tagName.toLowerCase()?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a6._toback(this,this.paper);this.paper;return this},O.insertAfter=function(e){if(this.removed){return this}var d=e.node||e[e.length-1].node;return d.nextSibling?d.parentNode.insertBefore(this.node,d.nextSibling):d.parentNode.appendChild(this.node),a6._insertafter(this,e,this.paper),this},O.insertBefore=function(e){if(this.removed){return this}var d=e.node||e[0].node;return d.parentNode.insertBefore(this.node,d),a6._insertbefore(this,e,this.paper),this},O.blur=function(g){var f=this;if(0!==+g){var i=N("filter"),h=N("feGaussianBlur");f.attrs.blur=g,i.id=a6.createUUID(),N(h,{stdDeviation:+g||1.5}),i.appendChild(h),f.paper.defs.appendChild(i),f._blur=i,N(f.node,{filter:"url(#"+i.id+")"})}else{f._blur&&(f._blur.parentNode.removeChild(f._blur),delete f._blur,delete f.attrs.blur),f.node.removeAttribute("filter")}return f},a6._engine.circle=function(h,g,l,k){var j=N("circle");h.canvas&&h.canvas.appendChild(j);var i=new c(j,h);return i.attrs={cx:g,cy:l,r:k,fill:"none",stroke:"#000"},i.type="circle",N(j,i.attrs),i},a6._engine.rect=function(j,i,q,o,n,m){var l=N("rect");j.canvas&&j.canvas.appendChild(l);var k=new c(l,j);return k.attrs={x:i,y:q,width:o,height:n,r:m||0,rx:m||0,ry:m||0,fill:"none",stroke:"#000"},k.type="rect",N(l,k.attrs),k},a6._engine.ellipse=function(i,h,n,m,l){var k=N("ellipse");i.canvas&&i.canvas.appendChild(k);var j=new c(k,i);return j.attrs={cx:h,cy:n,rx:m,ry:l,fill:"none",stroke:"#000"},j.type="ellipse",N(k,j.attrs),j},a6._engine.image=function(j,i,q,o,n,m){var l=N("image");N(l,{x:q,y:o,width:n,height:m,preserveAspectRatio:"none"}),l.setAttributeNS(R,"href",i),j.canvas&&j.canvas.appendChild(l);var k=new c(l,j);return k.attrs={x:q,y:o,width:n,height:m,src:i},k.type="image",k},a6._engine.text=function(i,h,m,l){var k=N("text");i.canvas&&i.canvas.appendChild(k);var j=new c(k,i);return j.attrs={x:h,y:m,"text-anchor":"middle",text:l,font:a6._availableAttrs.font,stroke:"none",fill:"#000"},j.type="text",F(j,j.attrs),j},a6._engine.setSize=function(e,d){return this.width=e||this.width,this.height=d||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},a6._engine.create=function(){var u=a6._getContainer.apply(0,arguments),s=u&&u.container,r=u.x,q=u.y,o=u.width,n=u.height;if(!s){throw new Error("SVG container not found.")}var m,l=N("svg"),k="overflow:hidden;";return r=r||0,q=q||0,o=o||512,n=n||342,N(l,{height:n,version:1.1,width:o,xmlns:"http://www.w3.org/2000/svg"}),1==s?(l.style.cssText=k+"position:absolute;left:"+r+"px;top:"+q+"px",a6._g.doc.body.appendChild(l),m=1):(l.style.cssText=k+"position:relative",s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l)),s=new a6._Paper,s.width=o,s.height=n,s.canvas=l,s.clear(),s._left=s._top=0,m&&(s.renderfix=function(){}),s.renderfix(),s},a6._engine.setViewBox=function(v,u,s,r,q){U("raphael.setViewBox",this,this._viewBox,[v,u,s,r,q]);var o,n,m=Y(s/this.width,r/this.height),k=this.top,g=q?"meet":"xMinYMin";for(null==v?(this._vbSize&&(m=1),delete this._vbSize,o="0 0 "+this.width+S+this.height):(this._vbSize=m,o=v+S+u+S+s+S+r),N(this.canvas,{viewBox:o,preserveAspectRatio:g});m&&k;){n="stroke-width"in k.attrs?k.attrs["stroke-width"]:1,k.attr({"stroke-width":n}),k._.dirty=1,k._.dirtyT=1,k=k.prev}return this._viewBox=[v,u,s,r,!!q],this},a6.prototype.renderfix=function(){var h,g=this.canvas,l=g.style;try{h=g.getScreenCTM()||g.createSVGMatrix()}catch(k){h=g.createSVGMatrix()}var j=-h.e%1,i=-h.f%1;(j||i)&&(j&&(this._left=(this._left+j)%1,l.left=this._left+"px"),i&&(this._top=(this._top+i)%1,l.top=this._top+"px"))},a6.prototype.clear=function(){a6.eve("raphael.clear",this);for(var b=this.canvas;b.firstChild;){b.removeChild(b.firstChild)}this.bottom=this.top=null,(this.desc=N("desc")).appendChild(a6._g.doc.createTextNode("Created with RaphaÃ«l "+a6.version)),b.appendChild(this.desc),b.appendChild(this.defs=N("defs"))},a6.prototype.remove=function(){U("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this){this[b]="function"==typeof this[b]?a6._removedFactory(b):null}};var M=a6.st;for(var K in O){O[t](K)&&!M[t](K)&&(M[K]=function(b){return function(){var d=arguments;return this.forEach(function(e){e[b].apply(e,d)})}}(K))}}}(),function(){if(a6.vml){var t="hasOwnProperty",cm=String,cl=parseFloat,ck=Math,cj=ck.round,ci=ck.max,ch=ck.min,cg=ck.abs,cc="fill",cb=/[, ]+/,bc=a6.eve,bb=" progid:DXImageTransform.Microsoft",ac=" ",ab="",Z={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},X=/([clmz]),?([^clmz]*)/gi,V=/ progid:\S+Blur\([^\)]+\)/g,T=/-?[^,\s-]+/g,R="position:absolute;left:0;top:0;width:1px;height:1px",P=21600,N={path:1,rect:1,image:1},L={circle:1,ellipse:1},J=function(y){var x=/[ahqstv]/gi,w=a6._pathToAbsolute;if(cm(y).match(x)&&(w=a6._path2curve),x=/[clmz]/g,w==a6._pathToAbsolute&&!cm(y).match(x)){var v=cm(y).replace(X,function(i,h,m){var l=[],k="m"==h.toLowerCase(),j=Z[h];return m.replace(T,function(d){k&&2==l.length&&(j+=l+Z["m"==h?"l":"L"],l=[]),l.push(cj(d*P))}),j+l});return v}var u,s,q=w(y);v=[];for(var o=0,n=q.length;n>o;o++){u=q[o],s=q[o][0].toLowerCase(),"z"==s&&(s="x");for(var f=1,b=u.length;b>f;f++){s+=cj(u[f]*P)+(f!=b-1?",":ab)}v.push(s)}return v.join(ac)},I=function(g,f,i){var h=a6.matrix();return h.rotate(-g,0.5,0.5),{dx:h.x(f,i),dy:h.y(f,i)}},c=function(F,E,D,C,B,A){var z=F._,y=F.matrix,x=z.fillpos,w=F.node,v=w.style,u=1,n="",j=P/E,i=P/D;if(v.visibility="hidden",E&&D){if(w.coordsize=cg(j)+ac+cg(i),v.rotation=A*(0>E*D?-1:1),A){var H=I(A,C,B);C=H.dx,B=H.dy}if(0>E&&(n+="x"),0>D&&(n+=" y")&&(u=-1),v.flip=n,w.coordorigin=C*-j+ac+B*-i,x||z.fillsize){var G=w.getElementsByTagName(cc);G=G&&G[0],w.removeChild(G),x&&(H=I(A,y.x(x[0],x[1]),y.y(x[0],x[1])),G.position=H.dx*u+ac+H.dy*u),z.fillsize&&(G.size=z.fillsize[0]*cg(E)+ac+z.fillsize[1]*cg(D)),w.appendChild(G)}v.visibility="visible"}};a6.toString=function(){return"Your browser doesnâ€™t support SVG. Falling down to VML.\nYou are running RaphaÃ«l "+this.version};var Y=function(v,u,s){for(var r=cm(u).toLowerCase().split("-"),q=s?"end":"start",o=r.length,n="classic",m="medium",l="medium";o--;){switch(r[o]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":n=r[o];break;case"wide":case"narrow":l=r[o];break;case"long":case"short":m=r[o]}}var b=v.node.getElementsByTagName("stroke")[0];b[q+"arrow"]=n,b[q+"arrowlength"]=m,b[q+"arrowwidth"]=l},W=function(a,e){a.attrs=a.attrs||{};var i=a.node,cB=a.attrs,cA=i.style,cz=N[a.type]&&(e.x!=cB.x||e.y!=cB.y||e.width!=cB.width||e.height!=cB.height||e.cx!=cB.cx||e.cy!=cB.cy||e.rx!=cB.rx||e.ry!=cB.ry||e.r!=cB.r),cx=L[a.type]&&(cB.cx!=e.cx||cB.cy!=e.cy||cB.r!=e.r||cB.rx!=e.rx||cB.ry!=e.ry),cv=a;for(var l in e){e[t](l)&&(cB[l]=e[l])}if(cz&&(cB.path=a6._getPath[a.type](a),a._.dirty=1),e.href&&(i.href=e.href),e.title&&(i.title=e.title),e.target&&(i.target=e.target),e.cursor&&(cA.cursor=e.cursor),"blur"in e&&a.blur(e.blur),(e.path&&"path"==a.type||cz)&&(i.path=J(~cm(cB.path).toLowerCase().indexOf("r")?a6._pathToAbsolute(cB.path):cB.path),"image"==a.type&&(a._.fillpos=[cB.x,cB.y],a._.fillsize=[cB.width,cB.height],c(a,1,1,0,0,0))),"transform"in e&&a.transform(e.transform),cx){var m=+cB.cx,cy=+cB.cy,cw=+cB.rx||+cB.r||0,ct=+cB.ry||+cB.r||0;i.path=a6.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",cj((m-cw)*P),cj((cy-ct)*P),cj((m+cw)*P),cj((cy+ct)*P),cj(m*P)),a._.dirty=1}if("clip-rect"in e){var p=cm(e["clip-rect"]).split(cb);if(4==p.length){p[2]=+p[2]+ +p[0],p[3]=+p[3]+ +p[1];var q=i.clipRect||a6._g.doc.createElement("div"),cq=q.style;cq.clip=a6.format("rect({1}px {2}px {3}px {0}px)",p),i.clipRect||(cq.position="absolute",cq.top=0,cq.left=0,cq.width=a.paper.width+"px",cq.height=a.paper.height+"px",i.parentNode.insertBefore(q,i),q.appendChild(i),i.clipRect=q)}e["clip-rect"]||i.clipRect&&(i.clipRect.style.clip="auto")}if(a.textpath){var r=a.textpath.style;e.font&&(r.font=e.font),e["font-family"]&&(r.fontFamily='"'+e["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,ab)+'"'),e["font-size"]&&(r.fontSize=e["font-size"]),e["font-weight"]&&(r.fontWeight=e["font-weight"]),e["font-style"]&&(r.fontStyle=e["font-style"])}if("arrow-start"in e&&Y(cv,e["arrow-start"]),"arrow-end"in e&&Y(cv,e["arrow-end"],1),null!=e.opacity||null!=e["stroke-width"]||null!=e.fill||null!=e.src||null!=e.stroke||null!=e["stroke-width"]||null!=e["stroke-opacity"]||null!=e["fill-opacity"]||null!=e["stroke-dasharray"]||null!=e["stroke-miterlimit"]||null!=e["stroke-linejoin"]||null!=e["stroke-linecap"]){var F=i.getElementsByTagName(cc),C=!1;if(F=F&&F[0],!F&&(C=F=O(cc)),"image"==a.type&&e.src&&(F.src=e.src),e.fill&&(F.on=!0),(null==F.on||"none"==e.fill||null===e.fill)&&(F.on=!1),F.on&&e.fill){var A=cm(e.fill).match(a6._ISURL);if(A){F.parentNode==i&&i.removeChild(F),F.rotate=!0,F.src=A[1],F.type="tile";var z=a.getBBox(1);F.position=z.x+ac+z.y,a._.fillpos=[z.x,z.y],a6._preload(A[1],function(){a._.fillsize=[this.offsetWidth,this.offsetHeight]})}else{F.color=a6.getRGB(e.fill).hex,F.src=ab,F.type="solid",a6.getRGB(e.fill).error&&(cv.type in{circle:1,ellipse:1}||"r"!=cm(e.fill).charAt())&&U(cv,e.fill,F)&&(cB.fill="none",cB.gradient=e.fill,F.rotate=!1)}}if("fill-opacity"in e||"opacity"in e){var x=((+cB["fill-opacity"]+1||2)-1)*((+cB.opacity+1||2)-1)*((+a6.getRGB(e.fill).o+1||2)-1);x=ch(ci(x,0),1),F.opacity=x,F.src&&(F.color="none")}i.appendChild(F);var w=i.getElementsByTagName("stroke")&&i.getElementsByTagName("stroke")[0],v=!1;!w&&(v=w=O("stroke")),(e.stroke&&"none"!=e.stroke||e["stroke-width"]||null!=e["stroke-opacity"]||e["stroke-dasharray"]||e["stroke-miterlimit"]||e["stroke-linejoin"]||e["stroke-linecap"])&&(w.on=!0),("none"==e.stroke||null===e.stroke||null==w.on||0==e.stroke||0==e["stroke-width"])&&(w.on=!1);var u=a6.getRGB(e.stroke);w.on&&e.stroke&&(w.color=u.hex),x=((+cB["stroke-opacity"]+1||2)-1)*((+cB.opacity+1||2)-1)*((+u.o+1||2)-1);var o=0.75*(cl(e["stroke-width"])||1);if(x=ch(ci(x,0),1),null==e["stroke-width"]&&(o=cB["stroke-width"]),e["stroke-width"]&&(w.weight=o),o&&1>o&&(x*=o)&&(w.weight=1),w.opacity=x,e["stroke-linejoin"]&&(w.joinstyle=e["stroke-linejoin"]||"miter"),w.miterlimit=e["stroke-miterlimit"]||8,e["stroke-linecap"]&&(w.endcap="butt"==e["stroke-linecap"]?"flat":"square"==e["stroke-linecap"]?"square":"round"),"stroke-dasharray"in e){var k={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};w.dashstyle=k[t](e["stroke-dasharray"])?k[e["stroke-dasharray"]]:ab}v&&i.appendChild(w)}if("text"==cv.type){cv.paper.canvas.style.display=ab;var j=cv.paper.span,h=100,g=cB.font&&cB.font.match(/\d+(?:\.\d*)?(?=px)/);cA=j.style,cB.font&&(cA.font=cB.font),cB["font-family"]&&(cA.fontFamily=cB["font-family"]),cB["font-weight"]&&(cA.fontWeight=cB["font-weight"]),cB["font-style"]&&(cA.fontStyle=cB["font-style"]),g=cl(cB["font-size"]||g&&g[0])||10,cA.fontSize=g*h+"px",cv.textpath.string&&(j.innerHTML=cm(cv.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var f=j.getBoundingClientRect();cv.W=cB.w=(f.right-f.left)/h,cv.H=cB.h=(f.bottom-f.top)/h,cv.X=cB.x,cv.Y=cB.y+cv.H/2,("x"in e||"y"in e)&&(cv.path.v=a6.format("m{0},{1}l{2},{1}",cj(cB.x*P),cj(cB.y*P),cj(cB.x*P)+1));for(var d=["x","y","text","font","font-family","font-weight","font-style","font-size"],b=0,n=d.length;n>b;b++){if(d[b]in e){cv._.dirty=1;break}}switch(cB["text-anchor"]){case"start":cv.textpath.style["v-text-align"]="left",cv.bbx=cv.W/2;break;case"end":cv.textpath.style["v-text-align"]="right",cv.bbx=-cv.W/2;break;default:cv.textpath.style["v-text-align"]="center",cv.bbx=0}cv.textpath.style["v-text-kern"]=!0}},U=function(x,w,v){x.attrs=x.attrs||{};var u=(x.attrs,Math.pow),s="linear",r=".5 .5";if(x.attrs.gradient=w,w=cm(w).replace(a6._radial_gradient,function(g,f,h){return s="radial",f&&h&&(f=cl(f),h=cl(h),u(f-0.5,2)+u(h-0.5,2)>0.25&&(h=ck.sqrt(0.25-u(f-0.5,2))*(2*(h>0.5)-1)+0.5),r=f+ac+h),ab}),w=w.split(/\s*\-\s*/),"linear"==s){var o=w.shift();if(o=-cl(o),isNaN(o)){return null}}var n=a6._parseDots(w);if(!n){return null}if(x=x.shape||x.node,n.length){x.removeChild(v),v.on=!0,v.method="none",v.color=n[0].color,v.color2=n[n.length-1].color;for(var e=[],d=0,b=n.length;b>d;d++){n[d].offset&&e.push(n[d].offset+ac+n[d].color)}v.colors=e.length?e.join():"0% "+v.color,"radial"==s?(v.type="gradientTitle",v.focus="100%",v.focussize="0 0",v.focusposition=r,v.angle=0):(v.type="gradient",v.angle=(270-o)%360),x.appendChild(v)}return 1},S=function(e,d){this[0]=this.node=e,e.raphael=!0,this.id=a6._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=d,this.matrix=a6.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!d.bottom&&(d.bottom=this),this.prev=d.top,d.top&&(d.top.next=this),d.top=this,this.next=null},Q=a6.el;S.prototype=Q,Q.constructor=S,Q.transform=function(D){if(null==D){return this._.transform}var C,B=this.paper._viewBoxShift,A=B?"s"+[B.scale,B.scale]+"-1-1t"+[B.dx,B.dy]:ab;B&&(C=D=cm(D).replace(/\.{3}|\u2026/g,this._.transform||ab)),a6._extractTransform(this,A+D);var z,y=this.matrix.clone(),x=this.skew,w=this.node,v=~cm(this.attrs.fill).indexOf("-"),u=!cm(this.attrs.fill).indexOf("url(");if(y.translate(1,1),u||v||"image"==this.type){if(x.matrix="1 0 0 1",x.offset="0 0",z=y.split(),v&&z.noRotation||!z.isSimple){w.style.filter=y.toFilter();var s=this.getBBox(),o=this.getBBox(1),n=s.x-o.x,b=s.y-o.y;w.coordorigin=n*-P+ac+b*-P,c(this,1,1,n,b,0)}else{w.style.filter=ab,c(this,z.scalex,z.scaley,z.dx,z.dy,z.rotate)}}else{w.style.filter=ab,x.matrix=cm(y),x.offset=y.offset()}return C&&(this._.transform=C),this},Q.rotate=function(b,h,g){if(this.removed){return this}if(null!=b){if(b=cm(b).split(cb),b.length-1&&(h=cl(b[1]),g=cl(b[2])),b=cl(b[0]),null==g&&(h=g),null==h||null==g){var d=this.getBBox(1);h=d.x+d.width/2,g=d.y+d.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",b,h,g]])),this}},Q.translate=function(b,d){return this.removed?this:(b=cm(b).split(cb),b.length-1&&(d=cl(b[1])),b=cl(b[0])||0,d=+d||0,this._.bbox&&(this._.bbox.x+=b,this._.bbox.y+=d),this.transform(this._.transform.concat([["t",b,d]])),this)},Q.scale=function(b,j,i,h){if(this.removed){return this}if(b=cm(b).split(cb),b.length-1&&(j=cl(b[1]),i=cl(b[2]),h=cl(b[3]),isNaN(i)&&(i=null),isNaN(h)&&(h=null)),b=cl(b[0]),null==j&&(j=b),null==h&&(i=h),null==i||null==h){var d=this.getBBox(1)}return i=null==i?d.x+d.width/2:i,h=null==h?d.y+d.height/2:h,this.transform(this._.transform.concat([["s",b,j,i,h]])),this._.dirtyT=1,this},Q.hide=function(){return!this.removed&&(this.node.style.display="none"),this},Q.show=function(){return!this.removed&&(this.node.style.display=ab),this},Q._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},Q.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a6.eve.unbind("raphael.*.*."+this.id),a6._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this){this[b]="function"==typeof this[b]?a6._removedFactory(b):null}this.removed=!0}},Q.attr=function(A,z){if(this.removed){return this}if(null==A){var y={};for(var x in this.attrs){this.attrs[t](x)&&(y[x]=this.attrs[x])}return y.gradient&&"none"==y.fill&&(y.fill=y.gradient)&&delete y.gradient,y.transform=this._.transform,y}if(null==z&&a6.is(A,"string")){if(A==cc&&"none"==this.attrs.fill&&this.attrs.gradient){return this.attrs.gradient}for(var w=A.split(cb),v={},u=0,s=w.length;s>u;u++){A=w[u],v[A]=A in this.attrs?this.attrs[A]:a6.is(this.paper.customAttributes[A],"function")?this.paper.customAttributes[A].def:a6._availableAttrs[A]}return s-1?v:v[w[0]]}if(this.attrs&&null==z&&a6.is(A,"array")){for(v={},u=0,s=A.length;s>u;u++){v[A[u]]=this.attr(A[u])}return v}var r;null!=z&&(r={},r[A]=z),null==z&&a6.is(A,"object")&&(r=A);for(var l in r){bc("raphael.attr."+l+"."+this.id,this,r[l])}if(r){for(l in this.paper.customAttributes){if(this.paper.customAttributes[t](l)&&r[t](l)&&a6.is(this.paper.customAttributes[l],"function")){var k=this.paper.customAttributes[l].apply(this,[].concat(r[l]));this.attrs[l]=r[l];for(var j in k){k[t](j)&&(r[j]=k[j])}}}r.text&&"text"==this.type&&(this.textpath.string=r.text),W(this,r)}return this},Q.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a6._tofront(this,this.paper),this},Q.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a6._toback(this,this.paper)),this)},Q.insertAfter=function(b){return this.removed?this:(b.constructor==a6.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a6._insertafter(this,b,this.paper),this)},Q.insertBefore=function(b){return this.removed?this:(b.constructor==a6.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a6._insertbefore(this,b,this.paper),this)},Q.blur=function(f){var e=this.node.runtimeStyle,g=e.filter;return g=g.replace(V,ab),0!==+f?(this.attrs.blur=f,e.filter=g+ac+bb+".Blur(pixelradius="+(+f||1.5)+")",e.margin=a6.format("-{0}px 0 0 -{0}px",cj(+f||1.5))):(e.filter=g,e.margin=0,delete this.attrs.blur),this},a6._engine.path=function(h,g){var l=O("shape");l.style.cssText=R,l.coordsize=P+ac+P,l.coordorigin=g.coordorigin;var k=new S(l,g),j={fill:"none",stroke:"#000"};h&&(j.path=h),k.type="path",k.path=[],k.Path=ab,W(k,j),g.canvas.appendChild(l);var i=O("skew");return i.on=!0,l.appendChild(i),k.skew=i,k.transform(ab),k},a6._engine.rect=function(u,s,r,q,o,n){var m=a6._rectPath(s,r,q,o,n),l=u.path(m),k=l.attrs;return l.X=k.x=s,l.Y=k.y=r,l.W=k.width=q,l.H=k.height=o,k.r=n,k.path=m,l.type="rect",l},a6._engine.ellipse=function(h,g,l,k,j){var i=h.path();i.attrs;return i.X=g-k,i.Y=l-j,i.W=2*k,i.H=2*j,i.type="ellipse",W(i,{cx:g,cy:l,rx:k,ry:j}),i},a6._engine.circle=function(g,f,j,i){var h=g.path();h.attrs;return h.X=f-i,h.Y=j-i,h.W=h.H=2*i,h.type="circle",W(h,{cx:f,cy:j,r:i}),h},a6._engine.image=function(y,x,w,v,u,s){var r=a6._rectPath(w,v,u,s),q=y.path(r).attr({stroke:"none"}),o=q.attrs,n=q.node,j=n.getElementsByTagName(cc)[0];return o.src=x,q.X=o.x=w,q.Y=o.y=v,q.W=o.width=u,q.H=o.height=s,o.path=r,q.type="image",j.parentNode==n&&n.removeChild(j),j.rotate=!0,j.src=x,j.type="tile",q._.fillpos=[w,v],q._.fillsize=[u,s],n.appendChild(j),c(q,1,1,0,0,0),q},a6._engine.text=function(w,v,u,s){var r=O("shape"),q=O("path"),o=O("textpath");v=v||0,u=u||0,s=s||"",q.v=a6.format("m{0},{1}l{2},{1}",cj(v*P),cj(u*P),cj(v*P)+1),q.textpathok=!0,o.string=cm(s),o.on=!0,r.style.cssText=R,r.coordsize=P+ac+P,r.coordorigin="0 0";var n=new S(r,w),f={fill:"#000",stroke:"none",font:a6._availableAttrs.font,text:s};n.shape=r,n.path=q,n.textpath=o,n.type="text",n.attrs.text=cm(s),n.attrs.x=v,n.attrs.y=u,n.attrs.w=1,n.attrs.h=1,W(n,f),r.appendChild(o),r.appendChild(q),w.canvas.appendChild(r);var b=O("skew");return b.on=!0,r.appendChild(b),n.skew=b,n.transform(ab),n},a6._engine.setSize=function(f,e){var g=this.canvas.style;return this.width=f,this.height=e,f==+f&&(f+="px"),e==+e&&(e+="px"),g.width=f,g.height=e,g.clip="rect(0 "+f+" "+e+" 0)",this._viewBox&&a6._engine.setViewBox.apply(this,this._viewBox),this},a6._engine.setViewBox=function(w,v,u,s,r){a6.eve("raphael.setViewBox",this,this._viewBox,[w,v,u,s,r]);var q,o,n=this.width,m=this.height,g=1/ci(u/n,s/m);return r&&(q=m/s,o=n/u,n>u*q&&(w-=(n-u*q)/2/q),m>s*o&&(v-=(m-s*o)/2/o)),this._viewBox=[w,v,u,s,!!r],this._viewBoxShift={dx:-w,dy:-v,scale:g},this.forEach(function(b){b.transform("...")}),this};var O;a6._engine.initWin=function(e){var d=e.document;d.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!d.namespaces.rvml&&d.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),O=function(b){return d.createElement("<rvml:"+b+' class="rvml">')}}catch(f){O=function(b){return d.createElement("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a6._engine.initWin(a6._g.win),a6._engine.create=function(){var u=a6._getContainer.apply(0,arguments),s=u.container,r=u.height,q=u.width,o=u.x,n=u.y;if(!s){throw new Error("VML container not found.")}var m=new a6._Paper,l=m.canvas=a6._g.doc.createElement("div"),k=l.style;return o=o||0,n=n||0,q=q||512,r=r||342,m.width=q,m.height=r,q==+q&&(q+="px"),r==+r&&(r+="px"),m.coordsize=1000*P+ac+1000*P,m.coordorigin="0 0",m.span=a6._g.doc.createElement("span"),m.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(m.span),k.cssText=a6.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",q,r),1==s?(a6._g.doc.body.appendChild(l),k.left=o+"px",k.top=n+"px",k.position="absolute"):s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),m.renderfix=function(){},m},a6.prototype.clear=function(){a6.eve("raphael.clear",this),this.canvas.innerHTML=ab,this.span=a6._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a6.prototype.remove=function(){a6.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this){this[b]="function"==typeof this[b]?a6._removedFactory(b):null}return!0};var M=a6.st;for(var K in Q){Q[t](K)&&!M[t](K)&&(M[K]=function(b){return function(){var d=arguments;return this.forEach(function(e){e[b].apply(e,d)})}}(K))}}}(),bM.was?bO.win.Raphael=a6:Raphael=a6,a6});

/*!
 * Color
 */
(function(c){c.color={};c.color.make=function(h,f,d,e){var i={};i.r=h||0;i.g=f||0;i.b=d||0;i.a=e!=null?e:1;i.add=function(k,j){for(var g=0;g<k.length;++g){i[k.charAt(g)]+=j}return i.normalize()};i.scale=function(k,j){for(var g=0;g<k.length;++g){i[k.charAt(g)]*=j}return i.normalize()};i.toString=function(){if(i.a>=1){return"rgb("+[i.r,i.g,i.b].join(",")+")"}else{return"rgba("+[i.r,i.g,i.b,i.a].join(",")+")"}};i.normalize=function(){function g(k,l,j){return l<k?k:l>j?j:l}i.r=g(0,parseInt(i.r),255);i.g=g(0,parseInt(i.g),255);i.b=g(0,parseInt(i.b),255);i.a=g(0,i.a,1);return i};i.clone=function(){return c.color.make(i.r,i.b,i.g,i.a)};return i.normalize()};c.color.extract=function(e,d){var f;do{f=e.css(d).toLowerCase();if(f!=""&&f!="transparent"){break}e=e.parent()}while(e.length&&!c.nodeName(e.get(0),"body"));if(f=="rgba(0, 0, 0, 0)"){f="transparent"}return c.color.parse(f)};c.color.parse=function(g){var f,d=c.color.make;if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return d(parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10))}if(f=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(g)){return d(parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10),parseFloat(f[4]))}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return d(parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55)}if(f=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(g)){return d(parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55,parseFloat(f[4]))}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return d(parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16))}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return d(parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16))}var e=c.trim(g).toLowerCase();if(e=="transparent"){return d(255,255,255,0)}else{f=b[e]||[0,0,0];return d(f[0],f[1],f[2])}};var b={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);


/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($,j,k){2 m=/\\+/g;5 8(s){3 s}5 q(s){3 A(s.B(m,\' \'))}2 n=$.6=5(a,b,c){7(b!==k){c=$.C({},n.r,c);7(b===9){c.4=-1}7(D c.4===\'E\'){2 d=c.4,t=c.4=F G();t.H(t.I()+d)}b=n.u?v.J(b):K(b);3(j.6=[w(a),\'=\',n.8?b:w(b),c.4?\'; 4=\'+c.4.L():\'\',c.o?\'; o=\'+c.o:\'\',c.p?\'; p=\'+c.p:\'\',c.x?\'; x\':\'\'].y(\'\'))}2 e=n.8?8:q;2 f=j.6.z(\'; \');M(2 i=0,l=f.N;i<l;i++){2 g=f[i].z(\'=\');7(e(g.O())===a){2 h=e(g.y(\'=\'));3 n.u?v.P(h):h}}3 9};n.r={};$.Q=5(a,b){7($.6(a)!==9){$.6(a,9,b);3 R}3 S}})(T,U);',57,57,'||var|return|expires|function|cookie|if|raw|null|||||||||||||||path|domain|decoded|defaults|||json|JSON|encodeURIComponent|secure|join|split|decodeURIComponent|replace|extend|typeof|number|new|Date|setDate|getDate|stringify|String|toUTCString|for|length|shift|parse|removeCookie|true|false|jQuery|document'.split('|'),0,{}));


/*!
 * jQuery Form Plugin
 * version: 2.94 (13-DEC-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4(){2 d=E,w=F;4 1l(a){5(1m a=="1n")a=d.1X(a);7 a}4 z(a,b,c){5(w.1o){a.1o(b,c,m)}q 5(w.1p){2 f=4(){c.T(a,w.1Y)};a.1p(\'1Z\'+b,f)}}2 j=4(){2 c=d.15(\'20\');7 4(a){c.16=a;2 b=c.21[0];c.G(b);7 b}}();4 1q(a,b){7 a.U.22(1r 1s(\'(\\\\s|^)\'+b+\'(\\\\s|$)\'))}4 1t(a,b){5(!1q(a,b))a.U+=" "+b}4 17(a,b){2 c=1r 1s(\'(\\\\s|^)\'+b+\'(\\\\s|$)\');a.U=a.U.1u(c,\' \')}5(E.V["A"]){2 k=4(a){2 b=a.A(),18=a.23,6=18.6,t=18.V,H=t.H||6.H||0,I=t.I||6.I||0,p=1;5(6.A){2 c=6.A();p=(c.u-c.8)/6.1v}5(p>1){H=0;I=0}2 d=b.n/p+(F.24||t&&t.W/p||6.W/p)-H,8=b.8/p+(F.25||t&&t.X/p||6.X/p)-I;7{n:d,8:8}}}q{2 k=4(a){5(w.B){7 B(a).26()}2 b=0,8=0;27{b+=a.28||0;8+=a.29||0}2a(a=a.2b);7{8:8,n:b}}}4 1w(a){2 b,u,n,J;2 c=k(a);b=c.8;n=c.n;u=b+a.2c;J=n+a.2d;7{8:b,u:u,n:n,J:J}}4 1x(e){5(!e.1y&&e.1z){2 a=1;2 b=E.6;5(b.A){2 c=b.A();a=(c.u-c.8)/b.1v}7{x:e.1z/a+d.6.X+d.V.X,y:e.2e/a+d.6.W+d.V.W}}7{x:e.1y,y:e.2f}}2 l=4(){2 a=0;7 4(){7\'2g\'+a++}}();4 19(a){7 a.1u(/.*(\\/|\\\\)/,"")}4 1a(a){7(/[.]/.1A(a))?/[^.]+$/.1A(a.1B()):\'\'}2h=1C=4(c,e){5(c.2i){c=c[0]}q 5(1m c=="1n"&&/^#.*/.2j(c)){c=c.2k(1)}c=1l(c);3.9=K;3.v=c;3.Y=m;3.2l=m;3.2m=m;3.L=d.6;5(F.B&&B.1b&&B.1b.1D){2 f=B(3.v).2n(\'.1b-1D\');5(f.2o){3.L=f[0]}}3.r={1c:\'2p.2q\',C:\'2r\',M:{},1E:N,1d:"1F",1G:4(a,b){},1H:4(a,b){},1I:4(a,b){}};1e(2 i 1f e){3.r[i]=e[i]}3.Z();3.1J()};1C.2s={2t:4(a){3.r.M=a},2u:4(){3.Y=N},2v:4(){3.Y=m},2w:4(){5(3.9){5(3.9.1K){3.9.1K.G(3.9)}3.9=K}},Z:4(){2 b=3;2 c=d.15("1L");c.1M(\'1N\',\'2x\');c.1M(\'C\',3.r.C);2 e={\'2y\':\'2z\',\'2A\':\'-2B 0 0 -2C\',\'2D\':0,\'2E\':\'2F\',\'2G\':\'2H\',\'2I\':\'2J\',\'1g\':0,\'2K\':\'2L\',\'D\':\'O\',\'2M\':2N};1e(2 i 1f e){c.o[i]=e[i]}5(!(c.o.1g==="0")){c.o.2O="2P(1g=0)"}3.L.P(c);z(c,\'2Q\',4(){2 a=19(3.10);5(b.r.1G.T(b,a,1a(a))==m){7}5(b.r.1E){b.1h()}});z(c,\'2R\',4(){b.1i=N;1O(4(){b.1i=m},2S)});3.9=c},1J:4(){2 b=3;2 f,11={n:0,8:0},Q=m;z(b.v,\'2T\',4(e){5(!b.9||Q)7;Q=N;f=1w(b.v);5(b.L!=d.6){11=k(b.L)}});z(E,\'2U\',4(e){2 a=b.9;5(!a||!Q)7;5(b.Y){17(b.v,\'1j\');a.o.D=\'O\';7}2 c=1x(e);5((c.x>=f.8)&&(c.x<=f.u)&&(c.y>=f.n)&&(c.y<=f.J)){a.o.n=c.y-11.n+\'1P\';a.o.8=c.x-11.8+\'1P\';a.o.D=\'2V\';1t(b.v,\'1j\')}q{Q=m;5(!b.1i){a.o.D=\'O\'}17(b.v,\'1j\')}})},1Q:4(){2 a=l();2 b=j(\'<2W 12="13:m;" C="\'+a+\'" />\');b.1R=a;b.o.D=\'O\';d.6.P(b);7 b},1h:4(){2 c=3,R=3.r;5(3.9.10===\'\'){7}2 f=19(3.9.10);5(!(R.1H.T(3,f,1a(f))==m)){2 g=3.1Q();2 h=3.1S(g);h.P(3.9);h.1h();d.6.G(h);h=K;3.9=K;3.Z();2 i=m;z(g,\'2X\',4(e){5(g.12=="13:\'%2Y%1T%2Z/S%1T\';"||g.12=="13:\'<S></S>\';"){5(i){1O(4(){d.6.G(g)},0)}7}2 a=g.1U?g.1U:30[g.1R].E;5(a.1V&&a.1V!=\'31\'){7}5(a.6&&a.6.16=="m"){7}2 b;5(a.1W){b=a.1W}q 5(a.6){b=a.6.16;5(R.1d&&R.1d.1B()==\'1F\'){5(a.6.14&&a.6.14.32.33()==\'34\'){b=a.6.14.14.35}5(b){b=F["36"]("("+b+")")}q{b={}}}}q{2 b=a}R.1I.T(c,f,b);i=N;g.12="13:\'<S></S>\';"})}q{d.6.G(3.9);3.9=K;3.Z()}},1S:4(a){2 b=3.r;2 c=j(\'<1k 37="38" 39="3a/1k-M"></1k>\');c.o.D=\'O\';c.1c=b.1c;c.3b=a.C;d.6.P(c);1e(2 e 1f b.M){2 f=d.15("1L");f.1N=\'3c\';f.C=e;f.10=b.M[e];c.P(f)}7 c}}})();',62,199,'||var|this|function|if|body|return|left|_input|||||||||||||false|top|style|zoom|else|_settings||docElem|right|_button||||addEvent|getBoundingClientRect|jQuery|name|display|document|window|removeChild|clientTop|clientLeft|bottom|null|_parentDialog|data|true|none|appendChild|over|settings|html|call|className|documentElement|scrollTop|scrollLeft|_disabled|_createInput|value|dialogOffset|src|javascript|firstChild|createElement|innerHTML|removeClass|doc|fileFromPath|getExt|ui|action|responseType|for|in|opacity|submit|justClicked|hover|form|get|typeof|string|addEventListener|attachEvent|hasClass|new|RegExp|addClass|replace|clientWidth|getBox|getMouseCoords|pageX|clientX|exec|toLowerCase|AjaxUpload|dialog|autoSubmit|json|onChange|onSubmit|onComplete|_rerouteClicks|parentNode|input|setAttribute|type|setTimeout|px|_createIframe|id|_createForm|3E|contentDocument|readyState|XMLDocument|getElementById|event|on|div|childNodes|match|ownerDocument|pageYOffset|pageXOffset|offset|do|offsetTop|offsetLeft|while|offsetParent|offsetWidth|offsetHeight|clientY|pageY|ValumsAjaxUpload|Ajax_upload|jquery|test|slice|_submitting|_justClicked|parents|length|upload|php|userfile|prototype|setData|disable|enable|destroy|file|position|absolute|margin|5px|175px|padding|width|220px|height|30px|fontSize|14px|cursor|pointer|zIndex|2147483583|filter|alpha|change|click|3000|mouseover|mousemove|block|iframe|load|3Chtml|3C|frames|complete|nodeName|toUpperCase|PRE|nodeValue|eval|method|post|enctype|multipart|target|hidden'.split('|'),0,{}));
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(6($){"49 4a";4 M={};M.2n=$("<1d P=\'2o\'/>").31(0).32!==17;M.33=18.34!==17;$.W.1i=6(y){3(!5.X){U(\'1i: 4b V 4c - 4d 4e 1L\');8 5}4 z,1m,13,$9=5;3(1f y==\'6\'){y={14:y}}z=5.16(\'35\');1m=5.16(\'1m\');13=(1f 1m===\'2p\')?$.4f(1m):\'\';13=13||18.2q.2r||\'\';3(13){13=(13.4g(/^([^#]+)/)||[])[1]}y=$.2s(1g,{13:13,14:$.1M.14,P:z||\'36\',1X:/^4h/i.1N(18.2q.2r||\'\')?\'37:12\':\'4i:4j\'},y);4 A={};5.19(\'9-2t-38\',[5,y,A]);3(A.39){U(\'1i: V 3a 1Y 9-2t-38 19\');8 5}3(y.2u&&y.2u(5,y)===12){U(\'1i: V 1j 1Y 2u 2v\');8 5}4 B=y.3b;3(B===17){B=$.1M.3b}4 C=[];4 D,a=5.2w(y.4k,C);3(y.1a){y.Y=y.1a;D=$.1O(y.1a,B)}3(y.2x&&y.2x(a,5,y)===12){U(\'1i: V 1j 1Y 2x 2v\');8 5}5.19(\'9-V-3c\',[a,5,y,A]);3(A.39){U(\'1i: V 3a 1Y 9-V-3c 19\');8 5}4 q=$.1O(a,B);3(D){q=(q?(q+\'&\'+D):D)}3(y.P.4l()==\'36\'){y.13+=(y.13.1Z(\'?\')>=0?\'&\':\'?\')+q;y.1a=Z}N{y.1a=q}4 E=[];3(y.2y){E.S(6(){$9.2y()})}3(y.2z){E.S(6(){$9.2z(y.4m)})}3(!y.1P&&y.1v){4 F=y.14||6(){};E.S(6(a){4 b=y.4n?\'4o\':\'4p\';$(y.1v)[b](a).1w(F,3d)})}N 3(y.14){E.S(y.14)}y.14=6(a,b,c){4 d=y.1h||y;1b(4 i=0,1k=E.X;i<1k;i++){E[i].4q(d,[a,b,c||$9,$9])}};4 G=$(\'1d:2o:4r[Q]\',5);4 H=G.X>0;4 I=\'2A/9-1a\';4 J=($9.16(\'3e\')==I||$9.16(\'3f\')==I);4 K=M.2n&&M.33;U("4s :"+K);4 L=(H||J)&&!K;3(y.2B!==12&&(y.2B||L)){3(y.3g){$.31(y.3g,6(){2C(a)})}N{2C(a)}}N 3((H||J)&&K){3h(a)}N{$.3i(y)}1b(4 k=0;k<C.X;k++)C[k]=Z;5.19(\'9-V-4t\',[5,y]);8 5;6 3h(a){4 f=20 34();1b(4 i=0;i<a.X;i++){f.3j(a[i].O,a[i].Q)}3(y.Y){1b(4 p 3k y.Y)3(y.Y.3l(p))f.3j(p,y.Y[p])}y.1a=Z;4 s=$.2s(1g,{},$.1M,y,{4u:12,4v:12,4w:12,P:\'3m\'});3(y.3n){s.7=6(){4 e=3o.1M.7();3(e.21){e.21.4x=6(a){4 b=0;4 c=a.4y||a.3p;4 d=a.4z;3(a.4A){b=4B.4C(c/d*2D)}y.3n(a,c,d,b)}}8 e}}s.1a=Z;4 g=s.22;s.22=6(a,o){o.1a=f;3(g)g.1n(o,a,y)};$.3i(s)}6 2C(a){4 l=$9[0],R,i,s,g,1o,$T,T,7,1x,n,23,1F;4 m=!!$.W.3q;3($(\':1d[O=V],:1d[1o=V]\',l).X){4D(\'4E: 4F 2E 4G 24 4H O 4I 1o 4J "V".\');8}3(a){1b(i=0;i<C.X;i++){R=$(C[i]);3(m)R.3q(\'1p\',12);N R.3r(\'1p\')}}s=$.2s(1g,{},$.1M,y);s.1h=s.1h||s;1o=\'4K\'+(20 4L().4M());3(s.25){$T=$(s.25);n=$T.16(\'O\');3(!n)$T.16(\'O\',1o);N 1o=n}N{$T=$(\'<2B O="\'+1o+\'" 3s="\'+s.1X+\'" />\');$T.4N({3p:\'4O\',3t:\'-3u\',3v:\'-3u\'})}T=$T[0];7={1j:0,1q:Z,1G:Z,1e:0,1r:\'n/a\',4P:6(){},2F:6(){},4Q:6(){},1Q:6(a){4 e=(a===\'1y\'?\'1y\':\'1j\');U(\'4R 21... \'+e);5.1j=1;$T.16(\'3s\',s.1X);7.1c=e;3(s.1c)s.1c.1n(s.1h,7,e,a);3(g)$.1z.19("3w",[7,s,e]);3(s.26)s.26.1n(s.1h,7,e)}};g=s.3x;3(g&&0===$.2G++){$.1z.19("4S")}3(g){$.1z.19("4T",[7,s])}3(s.22&&s.22.1n(s.1h,7,s)===12){3(s.3x){$.2G--}8}3(7.1j){8}1x=l.1s;3(1x){n=1x.O;3(n&&!1x.1p){s.Y=s.Y||{};s.Y[n]=1x.Q;3(1x.P=="1H"){s.Y[n+\'.x\']=l.1A;s.Y[n+\'.y\']=l.1B}}}4 o=1;4 p=2;6 2H(a){4 b=a.3y?a.3y.27:a.3z?a.3z:a.27;8 b}4 q=$(\'3A[O=3B-4U]\').16(\'28\');4 r=$(\'3A[O=3B-1O]\').16(\'28\');3(r&&q){s.Y=s.Y||{};s.Y[r]=q}6 2I(){4 t=$9.16(\'1v\'),a=$9.16(\'1m\');l.1R(\'1v\',1o);3(!z){l.1R(\'35\',\'3m\')}3(a!=s.13){l.1R(\'1m\',s.13)}3(!s.4V&&(!z||/4W/i.1N(z))){$9.16({3f:\'2A/9-1a\',3e:\'2A/9-1a\'})}3(s.1y){1F=1C(6(){23=1g;1t(o)},s.1y)}6 2J(){1S{4 a=2H(T).4X;U(\'4Y = \'+a);3(a&&a.1T()==\'4Z\')1C(2J,50)}29(e){U(\'51 1Q: \',e,\' (\',e.O,\')\');1t(p);3(1F)3C(1F);1F=17}}4 b=[];1S{3(s.Y){1b(4 n 3k s.Y){3(s.Y.3l(n)){b.S($(\'<1d P="3D" O="\'+n+\'">\').16(\'Q\',s.Y[n]).3E(l)[0])}}}3(!s.25){$T.3E(\'1I\');3(T.3F)T.3F(\'3G\',1t);N T.52(\'3H\',1t,12)}1C(2J,15);l.V()}53{l.1R(\'1m\',a);3(t){l.1R(\'1v\',t)}N{$9.3r(\'1v\')}$(b).3I()}}3(s.54){2I()}N{1C(2I,10)}4 u,11,3J=50,2K;6 1t(e){3(7.1j||2K){8}1S{11=2H(T)}29(3K){U(\'55 56 57 27: \',3K);e=p}3(e===o&&7){7.1Q(\'1y\');8}N 3(e==p&&7){7.1Q(\'58 1Q\');8}3(!11||11.2q.2r==s.1X){3(!23)8}3(T.3L)T.3L(\'3G\',1t);N T.59(\'3H\',1t,12);4 c=\'14\',1D;1S{3(23){5a\'1y\';}4 d=s.1P==\'1l\'||11.2L||$.5b(11);U(\'5c=\'+d);3(!d&&18.2a&&(11.1I===Z||!11.1I.3M)){3(--3J){U(\'5d 5e 2v, 2M 24 5f\');1C(1t,5g);8}}4 f=11.1I?11.1I:11.2b;7.1q=f?f.3M:Z;7.1G=11.2L?11.2L:11;3(d)s.1P=\'1l\';7.2F=6(a){4 b={\'28-P\':s.1P};8 b[a]};3(f){7.1e=3N(f.2c(\'1e\'))||7.1e;7.1r=f.2c(\'1r\')||7.1r}4 h=(s.1P||\'\').1T();4 i=/(2N|3O|2d)/.1N(h);3(i||s.2e){4 j=11.2f(\'2e\')[0];3(j){7.1q=j.Q;7.1e=3N(j.2c(\'1e\'))||7.1e;7.1r=j.2c(\'1r\')||7.1r}N 3(i){4 k=11.2f(\'2t\')[0];4 b=11.2f(\'1I\')[0];3(k){7.1q=k.2g?k.2g:k.3P}N 3(b){7.1q=b.2g?b.2g:b.3P}}}N 3(h==\'1l\'&&!7.1G&&7.1q){7.1G=v(7.1q)}1S{u=x(7,h,s)}29(e){c=\'2h\';7.1c=1D=(e||c)}}29(e){U(\'1c 5h: \',e);c=\'1c\';7.1c=1D=(e||c)}3(7.1j){U(\'21 1j\');c=Z}3(7.1e){c=(7.1e>=5i&&7.1e<5j||7.1e===5k)?\'14\':\'1c\'}3(c===\'14\'){3(s.14)s.14.1n(s.1h,u,\'14\',7);3(g)$.1z.19("5l",[7,s])}N 3(c){3(1D===17)1D=7.1r;3(s.1c)s.1c.1n(s.1h,7,c,1D);3(g)$.1z.19("3w",[7,s,1D])}3(g)$.1z.19("5m",[7,s]);3(g&&!--$.2G){$.1z.19("5n")}3(s.26)s.26.1n(s.1h,7,c);2K=1g;3(s.1y)3C(1F);1C(6(){3(!s.25)$T.3I();7.1G=Z},2D)}4 v=$.5o||6(s,a){3(18.3Q){a=20 3Q(\'5p.5q\');a.5r=\'12\';a.5s(s)}N{a=(20 5t()).5u(s,\'2d/1l\')}8(a&&a.2b&&a.2b.3R!=\'2h\')?a:Z};4 w=$.5v||6(s){8 18[\'5w\'](\'(\'+s+\')\')};4 x=6(a,b,s){4 c=a.2F(\'28-P\')||\'\',1l=b===\'1l\'||!b&&c.1Z(\'1l\')>=0,u=1l?a.1G:a.1q;3(1l&&u.2b.3R===\'2h\'){3($.1c)$.1c(\'2h\')}3(s&&s.3S){u=s.3S(u,b)}3(1f u===\'2p\'){3(b===\'2N\'||!b&&c.1Z(\'2N\')>=0){u=w(u)}N 3(b==="3O"||!b&&c.1Z("37")>=0){$.5x(u)}}8 u}}};$.W.2O=6(a){a=a||{};a.2i=a.2i&&$.5y($.W.2P);3(!a.2i&&5.X===0){4 o={s:5.1J,c:5.1h};3(!$.3T&&o.s){U(\'2M 24 3U, 5z 2O\');$(6(){$(o.s,o.c).2O(a)});8 5}U(\'5A; 5B 2E 5C 5D 1J\'+($.3T?\'\':\' (2M 24 3U)\'));8 5}3(a.2i){$(27).3V(\'V.9-1u\',5.1J,2j).3V(\'2k.9-1u\',5.1J,2l).2P(\'V.9-1u\',5.1J,a,2j).2P(\'2k.9-1u\',5.1J,a,2l);8 5}8 5.3W().3X(\'V.9-1u\',a,2j).3X(\'2k.9-1u\',a,2l)};6 2j(e){4 a=e.1a;3(!e.5E()){e.5F();$(5).1i(a)}}6 2l(e){4 a=e.1v;4 b=$(a);3(!(b.3Y(":V,1d:1H"))){4 t=b.5G(\':V\');3(t.X===0){8}a=t[0]}4 c=5;c.1s=a;3(a.P==\'1H\'){3(e.3Z!==17){c.1A=e.3Z;c.1B=e.5H}N 3(1f $.W.40==\'6\'){4 d=b.40();c.1A=e.41-d.3v;c.1B=e.42-d.3t}N{c.1A=e.41-a.5I;c.1B=e.42-a.5J}}1C(6(){c.1s=c.1A=c.1B=Z},2D)}$.W.3W=6(){8 5.5K(\'V.9-1u 2k.9-1u\')};$.W.2w=6(b,c){4 a=[];3(5.X===0){8 a}4 d=5[0];4 e=b?d.2f(\'*\'):d.2E;3(!e){8 a}4 i,j,n,v,R,1k,2Q;1b(i=0,1k=e.X;i<1k;i++){R=e[i];n=R.O;3(!n){2R}3(b&&d.1s&&R.P=="1H"){3(!R.1p&&d.1s==R){a.S({O:n,Q:$(R).2S(),P:R.P});a.S({O:n+\'.x\',Q:d.1A},{O:n+\'.y\',Q:d.1B})}2R}v=$.1U(R,1g);3(v&&v.2m==1V){3(c)c.S(R);1b(j=0,2Q=v.X;j<2Q;j++){a.S({O:n,Q:v[j]})}}N 3(M.2n&&R.P==\'2o\'&&!R.1p){3(c)c.S(R);4 f=R.32;3(f.X){1b(j=0;j<f.X;j++){a.S({O:n,Q:f[j],P:R.P})}}N{a.S({O:n,Q:\'\',P:R.P})}}N 3(v!==Z&&1f v!=\'17\'){3(c)c.S(R);a.S({O:n,Q:v,P:R.P,43:R.43})}}3(!b&&d.1s){4 g=$(d.1s),1d=g[0];n=1d.O;3(n&&!1d.1p&&1d.P==\'1H\'){a.S({O:n,Q:g.2S()});a.S({O:n+\'.x\',Q:d.1A},{O:n+\'.y\',Q:d.1B})}}8 a};$.W.5L=6(a){8 $.1O(5.2w(a))};$.W.5M=6(b){4 a=[];5.1w(6(){4 n=5.O;3(!n){8}4 v=$.1U(5,b);3(v&&v.2m==1V){1b(4 i=0,1k=v.X;i<1k;i++){a.S({O:n,Q:v[i]})}}N 3(v!==Z&&1f v!=\'17\'){a.S({O:5.O,Q:v})}});8 $.1O(a)};$.W.1U=6(a){1b(4 b=[],i=0,1k=5.X;i<1k;i++){4 c=5[i];4 v=$.1U(c,a);3(v===Z||1f v==\'17\'||(v.2m==1V&&!v.X)){2R}3(v.2m==1V)$.5N(b,v);N b.S(v)}8 b};$.1U=6(b,c){4 n=b.O,t=b.P,1K=b.2T.1T();3(c===17){c=1g}3(c&&(!n||b.1p||t==\'1W\'||t==\'5O\'||(t==\'2U\'||t==\'2V\')&&!b.2W||(t==\'V\'||t==\'1H\')&&b.9&&b.9.1s!=b||1K==\'1E\'&&b.2X==-1)){8 Z}3(1K==\'1E\'){4 d=b.2X;3(d<0){8 Z}4 a=[],2Y=b.5P;4 e=(t==\'1E-44\');4 f=(e?d+1:2Y.X);1b(4 i=(e?d:0);i<f;i++){4 g=2Y[i];3(g.1L){4 v=g.Q;3(!v){v=(g.2Z&&g.2Z[\'Q\']&&!(g.2Z[\'Q\'].5Q))?g.2d:g.Q}3(e){8 v}a.S(v)}}8 a}8 $(b).2S()};$.W.2z=6(a){8 5.1w(6(){$(\'1d,1E,2e\',5).45(a)})};$.W.45=$.W.5R=6(a){4 b=/^(?:5S|5T|5U|5V|5W|5X|5Y|5Z|60|61|2d|62|13|63)$/i;8 5.1w(6(){4 t=5.P,1K=5.2T.1T();3(b.1N(t)||1K==\'2e\'){5.Q=\'\'}N 3(t==\'2U\'||t==\'2V\'){5.2W=12}N 3(1K==\'1E\'){5.2X=-1}N 3(a){3((a===1g&&/3D/.1N(t))||(1f a==\'2p\'&&$(5).3Y(a)))5.Q=\'\'}})};$.W.2y=6(){8 5.1w(6(){3(1f 5.1W==\'6\'||(1f 5.1W==\'64\'&&!5.1W.65)){5.1W()}})};$.W.66=6(b){3(b===17){b=1g}8 5.1w(6(){5.1p=!b})};$.W.1L=6(b){3(b===17){b=1g}8 5.1w(6(){4 t=5.P;3(t==\'2U\'||t==\'2V\'){5.2W=b}N 3(5.2T.1T()==\'46\'){4 a=$(5).67(\'1E\');3(b&&a[0]&&a[0].P==\'1E-44\'){a.68(\'46\').1L(12)}5.1L=b}})};$.W.1i.47=12;6 U(){3(!$.W.1i.47)8;4 a=\'[69.9] \'+1V.6a.6b.1n(3d,\'\');3(18.30&&18.30.U){18.30.U(a)}N 3(18.2a&&18.2a.48){18.2a.48(a)}}})(3o);',62,384,'|||if|var|this|function|xhr|return|form||||||||||||||||||||||||||||||||||||||||else|name|type|value|el|push|io|log|submit|fn|length|extraData|null||doc|false|url|success||attr|undefined|window|trigger|data|for|error|input|status|typeof|true|context|ajaxSubmit|aborted|max|xml|action|call|id|disabled|responseText|statusText|clk|cb|plugin|target|each|sub|timeout|event|clk_x|clk_y|setTimeout|errMsg|select|timeoutHandle|responseXML|image|body|selector|tag|selected|ajaxSettings|test|param|dataType|abort|setAttribute|try|toLowerCase|fieldValue|Array|reset|iframeSrc|via|indexOf|new|upload|beforeSend|timedOut|not|iframeTarget|complete|document|content|catch|opera|documentElement|getAttribute|text|textarea|getElementsByTagName|textContent|parsererror|delegation|doAjaxSubmit|click|captureSubmittingElement|constructor|fileapi|file|string|location|href|extend|pre|beforeSerialize|callback|formToArray|beforeSubmit|resetForm|clearForm|multipart|iframe|fileUploadIframe|100|elements|getResponseHeader|active|getDoc|doSubmit|checkState|callbackProcessed|XMLDocument|DOM|json|ajaxForm|on|jmax|continue|val|tagName|checkbox|radio|checked|selectedIndex|ops|attributes|console|get|files|formdata|FormData|method|GET|javascript|serialize|veto|vetoed|traditional|validate|arguments|enctype|encoding|closeKeepAlive|fileUploadXhr|ajax|append|in|hasOwnProperty|POST|uploadProgress|jQuery|position|prop|removeAttr|src|top|1000px|left|ajaxError|global|contentWindow|contentDocument|meta|csrf|clearTimeout|hidden|appendTo|attachEvent|onload|load|remove|domCheckCount|ex|detachEvent|innerHTML|Number|script|innerText|ActiveXObject|nodeName|dataFilter|isReady|ready|off|ajaxFormUnbind|bind|is|offsetX|offset|pageX|pageY|required|one|clearFields|option|debug|postError|use|strict|skipping|process|no|element|trim|match|https|about|blank|semantic|toUpperCase|includeHidden|replaceTarget|replaceWith|html|apply|enabled|fileAPI|notify|contentType|processData|cache|onprogress|loaded|total|lengthComputable|Math|ceil|alert|Error|Form|must|have|or|of|jqFormIO|Date|getTime|css|absolute|getAllResponseHeaders|setRequestHeader|aborting|ajaxStart|ajaxSend|token|skipEncodingOverride|post|readyState|state|uninitialized||Server|addEventListener|finally|forceSync|cannot|access|response|server|removeEventListener|throw|isXMLDoc|isXml|requeing|onLoad|available|250|caught|200|300|304|ajaxSuccess|ajaxComplete|ajaxStop|parseXML|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parseJSON|eval|globalEval|isFunction|queuing|terminating|zero|found|by|isDefaultPrevented|preventDefault|closest|offsetY|offsetLeft|offsetTop|unbind|formSerialize|fieldSerialize|merge|button|options|specified|clearInputs|color|date|datetime|email|month|number|password|range|search|tel|time|week|object|nodeType|enable|parent|find|jquery|prototype|join'.split('|'),0,{}));
;/*! DataTables 1.10.0-rc.1
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.0-rc.1
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2008-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidateRow,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnScrollingWidthAdjust,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnScrollBarWidth,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(/** @lends <global> */function( window, document, undefined ) {
(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// Define as an AMD module if possible
		define( 'datatables', ['jquery'], factory );
	}
    else if ( typeof exports === 'object' ) {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
	else if ( jQuery && !jQuery.fn.dataTable ) {
		// Define using browser globals otherwise
		// Prevent multiple instantiations if the script is loaded twice
		factory( jQuery );
	}
}
(/** @lends <global> */function( $ ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable;

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n]/g;
	var _re_html = /<.*?>/g;
	var _re_date_start = /^[\d\+\-a-zA-Z]/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// U+2009 is thin space and U+202F is narrow no-break space, both used in many
	// standards as thousands separators
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F]/g;
	
	
	var _empty = function ( d ) {
		return !d || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !d || d==='-' || (!isNaN( parseFloat(d) ) && isFinite( d ));
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return !d || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ][ prop2 ] );
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				//console.log( key, match );
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		var defaults = DataTable.defaults.oLanguage;
		var zeroRecords = lang.sZeroRecords;
	
		/* Backwards compatibility - if there is no sEmptyTable given, then use the same as
		 * sZeroRecords - assuming that is given.
		 */
		if ( ! lang.sEmptyTable && zeroRecords &&
			defaults.sEmptyTable === "No data available in table" )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
		}
	
		/* Likewise with loading records */
		if ( ! lang.sLoadingRecords && zeroRecords &&
			defaults.sLoadingRecords === "Loading..." )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
		}
	
		// Old parameter name of the thousands separator mapped onto the new
		if ( lang.sInfoThousands ) {
			lang.sThousands = lang.sInfoThousands;
		}
	
		var decimal = lang.sDecimal;
		if ( decimal ) {
			_addNumericSort( decimal );
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		var browser = settings.oBrowser;
	
		// Scrolling feature / quirks detection
		var n = $('<div/>')
			.css( {
				position: 'absolute',
				top: 0,
				left: 0,
				height: 1,
				width: 1,
				overflow: 'hidden'
			} )
			.append(
				$('<div/>')
					.css( {
						position: 'absolute',
						top: 1,
						left: 1,
						width: 100,
						overflow: 'scroll'
					} )
					.append(
						$('<div class="test"/>')
							.css( {
								width: '100%',
								height: 10
							} )
					)
			)
			.appendTo( 'body' );
	
		var test = n.find('.test');
	
		// IE6/7 will oversize a width 100% element inside a scrolling element, to
		// include the width of the scrollbar, while other browsers ensure the inner
		// element is contained without forcing scrolling
		browser.bScrollOversize = test[0].offsetWidth === 100;
	
		// In rtl text layout, some browsers (most, but not all) will place the
		// scrollbar on the left, rather than the right.
		browser.bScrollbarLeft = test.offset().left !== 1;
	
		n.remove();
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, null );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			var th = $(oCol.nTh);
	
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%])/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( typeof oOptions.iDataSort === 'number' )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
	
		oCol.fnGetData = function (oData, sSpecific) {
			var innerData = mData( oData, sSpecific );
	
			if ( oCol.mRender && (sSpecific && sSpecific !== '') )
			{
				return mRender( innerData, sSpecific, oData );
			}
			return innerData;
		};
		oCol.fnSetData = _fnSetObjectDataFn( mDataSrc );
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		return _fnGetColumns( oSettings, 'bVisible' ).length;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// Doesn't match, so break early, since this type can't
						// apply to this column. Also, HTML is a special case since
						// it is so similar to `string`. Just a single match is
						// needed for a column to be html type
						if ( ! detectedType || detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data'
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			// When working with a row, the data source object must be populated. In
			// all other cases, the data source object is already populated, so we
			// don't overwrite it, which might break bindings etc
			if ( nTr ) {
				_fnSetCellData( oSettings, iRow, i, _fnGetCellData( oSettings, iRow, i ) );
			}
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		/* Create the DOM information */
		if ( !oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow aoData row id
	 *  @param {int} iCol Column index
	 *  @param {string} sSpecific data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( oSettings, iRow, iCol, sSpecific )
	{
		var oCol = oSettings.aoColumns[iCol];
		var oData = oSettings.aoData[iRow]._aData;
		var sData = oCol.fnGetData( oData, sSpecific );
	
		if ( sData === undefined )
		{
			if ( oSettings.iDrawError != oSettings.iDraw && oCol.sDefaultContent === null )
			{
				_fnLog( oSettings, 0, "Requested unknown parameter "+
					(typeof oCol.mData=='function' ? '{function}' : "'"+oCol.mData+"'")+
					" for row "+iRow, 4 );
				oSettings.iDrawError = oSettings.iDraw;
			}
			return oCol.sDefaultContent;
		}
	
		/* When the data source is null, we can use default column data */
		if ( (sData === oData || sData === null) && oCol.sDefaultContent !== null )
		{
			sData = oCol.sDefaultContent;
		}
		else if ( typeof sData === 'function' )
		{
			// If the data source is a function, then we run it and use the return
			return sData();
		}
	
		if ( sData === null && sSpecific == 'display' )
		{
			return '';
		}
		return sData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow aoData row id
	 *  @param {int} iCol Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( oSettings, iRow, iCol, val )
	{
		var oCol = oSettings.aoColumns[iCol];
		var oData = oSettings.aoData[iRow]._aData;
	
		oCol.fnSetData( oData, val );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g), function ( s ) {
			return s.replace('\\.', '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, extra) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, extra) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data, type) {
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, extra) {
				return mSource( data, type, extra );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
								out.push( fetchData( data[j], type, innerSrc ) );
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) {
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) {
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function (data, val) {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val) {
				mSource( data, 'set', val );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						for ( var j=0, jLen=val.length ; j<jLen ; j++ )
						{
							o = {};
							setData( o, val[j], innerSrc );
							data[ a[i] ].push( o );
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) {
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) {
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param  {int}    rowIdx   Row index to invalidate
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidateRow( settings, rowIdx, src, column )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements( settings, row ).data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				for ( i=0, ien=cells.length ; i<ien ; i++ ) {
					cells[i].innerHTML = _fnGetCellData( settings, rowIdx, i, 'display' );
				}
			}
		}
	
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( column !== undefined ) {
			cols[ column ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
		}
	
		// Update DataTables special `DT_*` attributes for the row
		_fnRowAttributes( row );
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row )
	{
		var
			d = [],
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns;
	
		var attr = function ( str, data, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var src = str.substring( idx+1 );
					o[ '@'+src ] = td.getAttribute( src );
				}
			}
		};
	
		var cellProcess = function ( cell ) {
			col = columns[i];
			contents = $.trim(cell.innerHTML);
	
			if ( col && col._bAttrSrc ) {
				o = {
					display: contents
				};
	
				attr( col.mData.sort, o, cell );
				attr( col.mData.type, o, cell );
				attr( col.mData.filter, o, cell );
	
				d.push( o );
			}
			else {
				d.push( contents );
			}
	
			tds.push( cell );
			i++;
		};
	
		if ( td ) {
			// `tr` element passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
			
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
	
				nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( !nTrIn || oCol.mRender || oCol.mData !== i )
				{
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i, 'display' ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			if ( data.DT_RowId ) {
				tr.id = data.DT_RowId;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell.html() ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				/* Row callback functions - might want to manipulate the row */
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		_fnDraw( settings );
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = $.isFunction( ajaxData ) ?
				ajaxData( data ) :  // fn can manipulate data or return an object
				ajaxData;           // object or array to merge
	
			// If the function returned an object, use that alone
			data = $.isFunction( ajaxData ) && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					oSettings.oApi._fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json] );
				fn( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var log = oSettings.oApi._fnLog;
	
				if ( error == "parsererror" ) {
					log( oSettings, 0, 'Invalid JSON response', 1 );
				}
				else if ( xhr.readyState === 4 ) {
					log( oSettings, 0, 'Ajax error', 7 );
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				fn,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( $.isFunction( ajax ) )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, fn, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( oSettings )
	{
		if ( oSettings.bAjaxDataGet )
		{
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, true );
			var iColumns = oSettings.aoColumns.length;
			var aoData = _fnAjaxParameters( oSettings );
	
			_fnBuildAjax( oSettings, aoData, function(json) {
				_fnAjaxUpdateDraw( oSettings, json );
			}, oSettings );
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var rocordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(rocordsFiltered, 10);
	
		var data = _fnAjaxDataSrc( settings, json );
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = settings.oLanguage.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch.replace('"','&quot;') )
			.bind(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				_fnDataSource( settings ) === 'ssp' ?
					_fnThrottle( searchFn, 400 ):
					searchFn
			)
			.bind( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'filter.DT', function () {
			// IE9 throws an 'unknown error' if document.activeElement is used
			// inside an iframe or frame...
			try {
				if ( jqFilter[0] !== document.activeElement ) {
					jqFilter.val( previousSearch.sSearch );
				}
			}
			catch ( e ) {}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex,
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, iLen=filters.length ; i<iLen ; i++ ) {
			for ( var j=displayRows.length-1 ; j>=0 ; j-- ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( ! filters[i]( settings, row._aFilterData, rowIdx, row._aData ) ) {
					displayRows.splice( j, 1 );
				}
			}
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=display.length-1 ; i>=0 ; i-- ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( ! rpSearch.test( data ) ) {
				display.splice( i, 1 );
			}
		}
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=display.length-1 ; i>=0 ; i-- ) {
				if ( ! rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					display.splice( i, 1 );
				}
			}
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || '', function ( word ) {
				return word.charAt(0) === '"' ?
					word.match( /^"(.*)"$/ )[1] :
					word;
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * scape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	function _fnEscapeRegex ( sVal )
	{
		return sVal.replace( _re_escape_regex, '\\$1' );
	}
	
	
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						cellData = fomatters[ column.sType ] ?
							fomatters[ column.sType ]( cellData ) :
							cellData !== null ?
								cellData :
								'';
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// On an Ajax load we now have data and therefore want to apply the column
		// sizing
		if ( json ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option( language[i], lengths[i] );
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		var a = settings.oLanguage.sLengthMenu.split(/(_MENU_)/);
		div.children().append( a.length > 1 ?
			[ a[0], select, a[2] ] :
			a[0]
		);
	
		// Can't use `select` variable, as user might provide their own select menu
		$('select', div)
			.val( settings._iDisplayLength )
			.bind( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).bind( 'length.dt.DT', function (e, s, len) {
			$('select', div).val( len );
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		// This is fairly messy, but with x scrolling enabled, if the table has a
		// width attribute, regardless of any width applied using the column width
		// options, the browser will shrink or grow the table as needed to fit into
		// that 100%. That would make the width options useless. So we remove it.
		// This is okay, under the assumption that width:100% is applied to the
		// table in CSS (it is in the default stylesheet) which will set the table
		// width as appropriate (the attribute and css behave differently...)
		if ( scroll.sX && table.attr('width') === '100%' ) {
			table.removeAttr('width');
		}
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append(
										table.children('thead')
									)
							)
					)
					.append( captionSide === 'top' ? caption : null )
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						overflow: 'auto',
						height: size( scrollY ),
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append(
										table.children('tfoot')
									)
							)
					)
					.append( captionSide === 'bottom' ? caption : null )
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).scroll( function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// If scroll collapse is enabled, when we put the headers back into the body for sizing, we
		// will end up forcing the scrollbar to appear, making our measurements wrong for when we
		// then hide it (end of this function), so add the header height to the body scroller.
		if ( scroll.bCollapse && scrollY !== "" ) {
			divBodyStyle.height = (divBody[0].offsetHeight + header[0].offsetHeight)+"px";
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
		}
		else
		{
			// x scrolling
			if ( scrollXInner !== "" ) {
				// x scroll inner has been given - use it
				tableStyle.width = _fnStringToCss(scrollXInner);
			}
			else if ( sanityWidth == divBody.width() && divBody.height() < table.height() ) {
				// There is y-scrolling - try to take account of the y scroll bar
				tableStyle.width = _fnStringToCss( sanityWidth-barWidth );
				if ( table.outerWidth() > sanityWidth-barWidth ) {
					// Not possible to take account of it
					tableStyle.width = _fnStringToCss( sanityWidth );
				}
			}
			else {
				// When all else fails
				tableStyle.width = _fnStringToCss( sanityWidth );
			}
		}
	
		// Recalculate the sanity width - now that we've applied the required width,
		// before it was a temporary variable. This is required because the column
		// width calculation is done before this table DOM is created.
		sanityWidth = table.outerWidth();
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			nToSize.style.width = headerWidths[i];
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = "";
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		if ( scrollY && scroll.bCollapse ) {
			divBodyStyle.height = _fnStringToCss( scrollY );
	
			var iExtra = (scrollX && tableEl.offsetWidth > divBodyEl.offsetWidth) ?
				barWidth :
				0;
	
			if ( tableEl.offsetHeight < divBodyEl.offsetHeight ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+iExtra );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.scroll();
	
		/* If sorting or filtering has occurred, jump the scrolling back to the top */
		if ( settings.bSorted || settings.bFiltered ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'),
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth;
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ! userInputs && ! scrollX && ! scrollY &&
		    columnCount == _fnVisbleColumns( oSettings ) &&
			columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				columns[i].sWidth = _fnStringToCss( headerCells.eq(i).width() );
			}
		}
		else
		{
			// Otherwise construct a single row table with the widest node in the
			// data, assign any user defined widths, then insert it into the DOM and
			// allow the browser to do all the hard work of calculating table widths
			var tmpTable = $( table.cloneNode( false ) )
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' )
				.append( $(oSettings.nTHead).clone( false ) )
				.append( $(oSettings.nTFoot).clone( false ) )
				.append( $('<tbody><tr/></tbody>') );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			var tr = tmpTable.find( 'tbody tr' );
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Table has been built, attach to the document so we can work with it
			tmpTable.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
	
				if ( tmpTable.width() < tableContainer.offsetWidth ) {
					tmpTable.width( tableContainer.offsetWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.offsetWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Take into account the y scrollbar
			_fnScrollingWidthAdjust( oSettings, tmpTable[0] );
	
			// Browsers need a bit of a hand when a width is assigned to any columns
			// when x-scrolling as they tend to collapse the table to the min-width,
			// even if we sent the column widths. So we need to keep track of what
			// the table width should be by summing the user given values, and the
			// automatic values
			if ( scrollX )
			{
				var total = 0;
	
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					column = columns[ visibleColumns[i] ];
					outerWidth = $(headerCells[i]).outerWidth();
	
					total += column.sWidthOrig === null ?
						outerWidth :
						parseInt( column.sWidth, 10 ) + outerWidth - $(headerCells[i]).width();
				}
	
				tmpTable.width( _fnStringToCss( total ) );
				table.style.width = _fnStringToCss( total );
			}
	
			// Get the width of each column in the constructed table
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
				width = $(headerCells[i]).width();
	
				if ( width ) {
					column.sWidth = _fnStringToCss( width );
				}
			}
	
			table.style.width = _fnStringToCss( tmpTable.css('width') );
	
			// Finished with the table - ditch it
			tmpTable.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			$(window).bind('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
				_fnAdjustColumnSizing( oSettings );
			} ) );
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	function _fnThrottle( fn, freq ) {
		var
			frequency = freq || 200,
			last,
			timer;
	
		return function () {
			var
				that = this,
				now  = +new Date(),
				args = arguments;
	
			if ( last && now < last + frequency ) {
				clearTimeout( timer );
	
				timer = setTimeout( function () {
					last = undefined;
					fn.apply( that, args );
				}, frequency );
			}
			else if ( last ) {
				last = now;
				fn.apply( that, args );
			}
			else {
				last = now;
			}
		};
	}
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Adjust a table's width to take account of vertical scroll bar
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n table node
	 *  @memberof DataTable#oApi
	 */
	
	function _fnScrollingWidthAdjust ( settings, n )
	{
		var scroll = settings.oScroll;
	
		if ( scroll.sX || scroll.sY ) {
			// When y-scrolling only, we want to remove the width of the scroll bar
			// so the table + scroll bar will fit into the area available, otherwise
			// we fix the table at its current size with no adjustment
			var correction = ! scroll.sX ? scroll.iBarWidth : 0;
			n.style.width = _fnStringToCss( $(n).outerWidth() - correction );
		}
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	/**
	 * Get the width of a scroll bar in this browser being used
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollBarWidth ()
	{
		// On first run a static variable is set, since this is only needed once.
		// Subsequent runs will just use the previously calculated value
		if ( ! DataTable.__scrollbarWidth ) {
			var inner = $('<p/>').css( {
				width: '100%',
				height: 200,
				padding: 0
			} )[0];
	
			var outer = $('<div/>')
				.css( {
					position: 'absolute',
					top: 0,
					left: 0,
					width: 200,
					height: 150,
					padding: 0,
					overflow: 'hidden',
					visibility: 'hidden'
				} )
				.append( inner )
				.appendTo( 'body' );
	
			var w1 = inner.offsetWidth;
			outer.css( 'overflow', 'scroll' );
			var w2 = inner.offsetWidth;
	
			if ( w1 === w2 ) {
				w2 = outer[0].clientWidth;
			}
	
			outer.remove();
	
			DataTable.__scrollbarWidth = w1 - w2;
		}
	
		return DataTable.__scrollbarWidth;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					nestedSort.push.apply( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i][2],
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 >= asSorting.length ? 0 : idx+1;
		};
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx] );
	
				sorting[sortIdx][1] = asSorting[ nextSortIdx ];
				sorting[sortIdx]._idx = nextSortIdx;
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			_fnProcessingDisplay( settings, true );
	
			// Use a timeout to allow the processing display to be shown.
			setTimeout( function() {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
				// In server-side processing, the draw callback will remove the
				// processing display
				if ( _fnDataSource( settings ) !== 'ssp' ) {
					_fnProcessingDisplay( settings, false );
				}
			}, 0 );
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( oSettings )
	{
		if ( !oSettings.oFeatures.bStateSave || oSettings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var i, iLen;
		var oState = {
			"iCreate":      new Date().getTime(),
			"iStart":       oSettings._iDisplayStart,
			"iLength":      oSettings._iDisplayLength,
			"aaSorting":    $.extend( true, [], oSettings.aaSorting ),
			"oSearch":      $.extend( true, {}, oSettings.oPreviousSearch ),
			"aoSearchCols": $.extend( true, [], oSettings.aoPreSearchCols ),
			"abVisCols":    []
		};
	
		for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
		{
			oState.abVisCols.push( oSettings.aoColumns[i].bVisible );
		}
	
		_fnCallbackFire( oSettings, "aoStateSaveParams", 'stateSaveParams', [oSettings, oState] );
	
		oSettings.fnStateSaveCallback.call( oSettings.oInstance, oSettings, oState );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( oSettings, oInit )
	{
		var i, ien;
		var columns = oSettings.aoColumns;
	
		if ( !oSettings.oFeatures.bStateSave )
		{
			return;
		}
	
		var oData = oSettings.fnStateLoadCallback.call( oSettings.oInstance, oSettings );
		if ( !oData )
		{
			return;
		}
	
		/* Allow custom and plug-in manipulation functions to alter the saved data set and
		 * cancelling of loading by returning false
		 */
		var abStateLoad = _fnCallbackFire( oSettings, 'aoStateLoadParams', 'stateLoadParams', [oSettings, oData] );
		if ( $.inArray( false, abStateLoad ) !== -1 )
		{
			return;
		}
	
		/* Reject old data */
		if ( oData.iCreate < new Date().getTime() - (oSettings.iStateDuration*1000) ) {
			return;
		}
	
		// Number of columns have changed - all bets are off, no restore of settings
		if ( columns.length !== oData.aoSearchCols.length ) {
			return;
		}
	
		/* Store the saved state so it might be accessed at any time */
		oSettings.oLoadedState = $.extend( true, {}, oData );
	
		/* Restore key features */
		oSettings._iDisplayStart    = oData.iStart;
		oSettings.iInitDisplayStart = oData.iStart;
		oSettings._iDisplayLength   = oData.iLength;
		oSettings.aaSorting         = [];
	
		var savedSort = oData.aaSorting;
		for ( i=0, ien=savedSort.length ; i<ien ; i++ ) {
			oSettings.aaSorting.push( savedSort[i][0] >= columns.length ?
				[ 0, savedSort[i][1] ] :
				savedSort[i]
			);
		}
	
		/* Search filtering  */
		$.extend( oSettings.oPreviousSearch, oData.oSearch );
		$.extend( true, oSettings.aoPreSearchCols, oData.aoSearchCols );
	
		/* Column visibility state */
		for ( i=0, ien=oData.abVisCols.length ; i<ien ; i++ ) {
			columns[i].bVisible = oData.abVisCols[i];
		}
	
		_fnCallbackFire( oSettings, 'aoStateLoaded', 'stateLoaded', [oSettings, oData] );
	}
	
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings!==null ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else {
				throw new Error(msg);
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.bind( 'click.DT', oData, function (e) {
					n.blur(); // Remove focus outline for mouse users
					fn(e);
				} )
			.bind( 'keypress.DT', oData, function (e){
				if ( e.which === 13 ) {
					fn(e);
				} } )
			.bind( 'selectstart.DT', function () {
				/* Take the brutal approach to cancelling text selection */
				return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} event Name of the jQuery custom event to trigger. If null no
	 *      trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, event, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( event !== null ) {
			$(settings.nTable).trigger( event+'.dt', args );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( end === settings.fnRecordsDisplay() )
		{
			start = end - len;
		}
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	DataTable = function( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).bind('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can old position.
			this.api( true ).draw( ! complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, oInit );
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				/* Base check on table node */
				if ( allSettings[i].nTable == this )
				{
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return allSettings[i].oInstance;
					}
					else if ( bDestroy )
					{
						allSettings[i].oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( allSettings[i], 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( allSettings[i].sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"nTable":        this,
				"oApi":          _that.internal,
				"oInit":         oInit,
				"sDestroyWidth": $(this)[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $(this).dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			
			if ( oInit.oLanguage )
			{
				_fnLanguageCompat( oInit.oLanguage );
			}
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ],
				[ "bJQueryUI", "bJUI" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			var oClasses = oSettings.oClasses;
			
			// @todo Remove in 1.11
			if ( oInit.bJQueryUI )
			{
				/* Use the JUI classes object for display. You could clone the oStdClasses object if
				 * you want to have multiple tables with multiple independent classes
				 */
				$.extend( oClasses, DataTable.ext.oJUIClasses, oInit.oClasses );
			
				if ( oInit.sDom === defaults.sDom && defaults.sDom === "lfrtip" )
				{
					/* Set the DOM to use a layout suitable for jQuery UI's theming */
					oSettings.sDom = '<"H"lfr>t<"F"ip>';
				}
			
				if ( ! oSettings.renderer ) {
					oSettings.renderer = 'jqueryui';
				}
				else if ( $.isPlainObject( oSettings.renderer ) && ! oSettings.renderer.header ) {
					oSettings.renderer.header = 'jqueryui';
				}
			}
			else
			{
				$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			}
			$(this).addClass( oClasses.sTable );
			
			/* Calculate the scroll bar width and cache it for use later on */
			if ( oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "" )
			{
				oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
			}
			if ( oSettings.oScroll.sX === true ) { // Easy initialisation of x-scrolling
				oSettings.oScroll.sX = '100%';
			}
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			if ( oInit.oLanguage.sUrl !== "" )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;
				$.getJSON( oSettings.oLanguage.sUrl, null, function( json ) {
					_fnLanguageCompat( json );
					_fnCamelToHungarian( defaults.oLanguage, json );
					$.extend( true, oSettings.oLanguage, oInit.oLanguage, json );
					_fnInitialise( oSettings );
				} );
				bInitHandedOff = true;
			}
			else
			{
				$.extend( true, oSettings.oLanguage, oInit.oLanguage );
			}
			
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $('tbody tr:eq(0)', this);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) ? name : null;
				};
			
				$.each( _fnGetRowElements( oSettings, rowOne[0] ).cells, function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnLoadState( oSettings, oInit );
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
			}
			
			
			/*
			 * Sorting
			 * @todo For modularisation (1.11) this needs to do into a sort start up handler
			 */
			
			// If aaSorting is not defined, then we use the first indicator in asSorting
			// in case that has been altered, so the default sort reflects that option
			if ( oInit.aaSorting === undefined )
			{
				var sorting = oSettings.aaSorting;
				for ( i=0, iLen=sorting.length ; i<iLen ; i++ )
				{
					sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
				}
			}
			
			/* Do a first pass on the sorting classes (allows any size changes to be taken into
			 * account, and also will apply sorting disabled classes if disabled
			 */
			_fnSortingClasses( oSettings );
			
			if ( features.bSort )
			{
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted ) {
						var aSort = _fnSortFlatten( oSettings );
						var sortedColumns = {};
			
						$.each( aSort, function (i, val) {
							sortedColumns[ val.src ] = val.dir;
						} );
			
						_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
						_fnSortAria( oSettings );
					}
				} );
			}
			
			_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
				if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
					_fnSortingClasses( oSettings );
				}
			}, 'sc' );
			
			
			/*
			 * Final init
			 * Cache the header, body and footer as required, creating them if needed
			 */
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			// Work around for Webkit bug 83867 - store the caption-side before removing from doc
			var captions = $(this).children('caption').each( function () {
				this._captionSide = $(this).css('caption-side');
			} );
			
			var thead = $(this).children('thead');
			if ( thead.length === 0 )
			{
				thead = $('<thead/>').appendTo(this);
			}
			oSettings.nTHead = thead[0];
			
			var tbody = $(this).children('tbody');
			if ( tbody.length === 0 )
			{
				tbody = $('<tbody/>').appendTo(this);
			}
			oSettings.nTBody = tbody[0];
			
			var tfoot = $(this).children('tfoot');
			if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") )
			{
				// If we are a scrolling table, and no footer has been given, then we need to create
				// a tfoot element for the caption element to be appended to
				tfoot = $('<tfoot/>').appendTo(this);
			}
			
			if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
				$(this).addClass( oClasses.sNoFooter );
			}
			else if ( tfoot.length > 0 ) {
				oSettings.nTFoot = tfoot[0];
				_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
			}
			
			/* Check if there is data passing into the constructor */
			if ( oInit.aaData )
			{
				for ( i=0 ; i<oInit.aaData.length ; i++ )
				{
					_fnAddData( oSettings, oInit.aaData[ i ] );
				}
			}
			else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' )
			{
				/* Grab the data from the page - only do this when deferred loading or no Ajax
				 * source since there is no point in reading the DOM data if we are then going
				 * to replace it with Ajax data
				 */
				_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
			}
			
			/* Copy the data index array */
			oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
			/* Initialisation complete - table can be drawn */
			oSettings.bInitialised = true;
			
			/* Check if we need to initialise the table (it might not have been handed off to the
			 * language processor)
			 */
			if ( bInitHandedOff === false )
			{
				_fnInitialise( oSettings );
			}
		} );
		_that = null;
		return this;
	};

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	DataTable.Api = _Api = function ( context, data )
	{
		if ( ! this instanceof _Api ) {
			throw 'DT API must be constructed as a new object';
			// or should it do the 'new' for the caller?
			// return new _Api.apply( this, arguments );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings.push.apply( settings, a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			this.push.apply( this, data.toArray ? data.toArray() : data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	
	_Api.prototype = /** @lends DataTables.Api */{
		/**
		 * Return a new Api instance, comprised of the data held in the current
		 * instance, join with the other array(s) and/or value(s).
		 *
		 * An alias for `Array.prototype.concat`.
		 *
		 * @type method
		 * @param {*} value1 Arrays and/or values to concatenate.
		 * @param {*} [...] Additional arrays and/or values to concatenate.
		 * @returns {DataTables.Api} New API instance, comprising of the combined
		 *   array.
		 */
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		each: function ( fn )
		{
			if ( __arrayProto.forEach ) {
				// Where possible, use the built-in forEach
				__arrayProto.forEach.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien; i++ ) {
					// In strict mode the execution scope is the passed value
					fn.call( this, this[i], i, this );
				}
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		// Internal only at the moment - relax?
		iterator: function ( flatten, type, fn ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				if ( type === 'table' ) {
					ret = fn( context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn( context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn( context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn( context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	};
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			j, jen,
			struct, inner,
			methodScoping = function ( fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = typeof struct.val === 'function' ?
				methodScoping( struct.val, struct ) :
				$.isPlainObject( struct.val ) ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   []
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	
		// Rebuild the API with the new construct
		if ( _Api.ready ) {
			DataTable.api.build();
		}
	};
	
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		} );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		} );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		} );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		} );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'draw()', function ( resetPaging ) {
		return this.iterator( 'table', function ( settings ) {
			_fnReDraw( settings, resetPaging===false );
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings._iDisplayLength,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			// Trigger xhr
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	
		// Use the draw event to trigger a callback, regardless of if it is an async
		// or sync draw
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( selector, select )
	{
		var
			out = [], res,
			a, i, ien, j, jen;
	
		if ( ! selector || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			a = selector[i] && selector[i].split ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = select( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out.push.apply( out, res );
				}
			}
		}
	
		return out;
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && ! opts.search ) {
			opts.search = opts.filter;
		}
	
		return {
			search: opts.search || 'none',
			order:  opts.order  || 'current',
			page:   opts.page   || 'all'
		};
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			a = search == 'none' ?
				displayMaster.slice() :                      // no search
				search == 'applied' ?
					displayFiltered.slice() :                // applied search
					$.map( displayMaster, function (el, i) { // removed search
						return $.inArray( el, displayFiltered ) === -1 ? el : null;
					} );
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp === 1  && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	
	
	var __row_selector = function ( settings, selector, opts )
	{
		return _selector_run( selector, function ( sel ) {
			var selInt = _intVal( sel );
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			var rows = _selector_row_indexes( settings, opts );
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( ! sel ) {
				// Selector - none
				return rows;
			}
	
			// Get nodes in the order from the `rows` array (can't use `pluck`) @todo - use pluck_order
			var nodes = [];
			for ( var i=0, ien=rows.length ; i<ien ; i++ ) {
				nodes.push( settings.aoData[ rows[i] ].nTr );
			}
	
			if ( sel.nodeName ) {
				// Selector - node
				if ( $.inArray( sel, nodes ) !== -1 ) {
					return [ sel._DT_RowIndex ];// sel is a TR node that is in the table
											// and DataTables adds a prop for fast lookup
				}
			}
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		} );
	};
	
	
	/**
	 *
	 */
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		} );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		} );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		} );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		} );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidateRow( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		} );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		return this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
	
			data.splice( row, 1 );
	
			// Update the _DT_RowIndex parameter on all rows in the table
			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				if ( data[i].nTr !== null ) {
					data[i].nTr._DT_RowIndex = i;
				}
			}
	
			// Remove the target row from the search array
			var displayIndex = $.inArray( row, settings.aiDisplay );
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
		} );
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			} );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		modRows.push.apply( modRows, newRows.toArray() );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		ctx[0].aoData[ this[0] ]._aData = data;
	
		// Automatically invalidate
		_fnInvalidateRow( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>');
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		if ( $.isArray( data ) || data instanceof $ ) {
			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				addRow( data[i], klass );
			}
		}
		else {
			addRow( data, klass );
		}
	
		if ( row._details ) {
			row._details.remove();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_display = function ( show ) {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			var row = ctx[0].aoData[ this[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.remove();
				}
	
				__details_events( ctx[0] );
			}
		}
	
		return this;
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
	
		api.off( drawEvent +' '+ colvisEvent );
	
		if ( _pluck( settings.aoData, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function () {
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = settings.aoData[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, settings, idx, vis ) {
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( settings );
	
				for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
					row = settings.aoData[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
		}
	};
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( 'row().child()', function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	_api_register( [
		'row().child.show()',
		'row().child().show()'
	], function () {
		__details_display.call( this, true );
		return this;
	} );
	
	_api_register( [
		'row().child.hide()',
		'row().child().hide()'
	], function () {
		__details_display.call( this, false );
		return this;
	} );
	
	_api_register( 'row().child.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^(.*):(name|visIdx|visible)$/;
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		return _selector_run( selector, function ( s ) {
			var selInt = _intVal( s );
	
			if ( s === '' ) {
				// All columns
				return _range( columns.length );
			}
			else if ( selInt !== null ) {
				// Integer selector
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
			else {
				var match = typeof match === 'string' ?
					s.match( __re_column_selector ) :
					'';
	
				if ( match ) {
					switch( match[2] ) {
						case 'visIdx':
						case 'visible':
							var idx = parseInt( match[1], 10 );
							// Visible index given, convert to column index
							if ( idx < 0 ) {
								// Counting from the right
								var visColumns = $.map( columns, function (col,i) {
									return col.bVisible ? i : null;
								} );
								return [ visColumns[ visColumns.length + idx ] ];
							}
							// Counting from the left
							return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
						case 'name':
							// match by name. `names` is column index complete and in order
							return $.map( names, function (name, i) {
								return name === match[1] ? i : null;
							} );
					}
				}
				else {
					// jQuery selector on the TH elements for the columns
					return $( nodes )
						.filter( s )
						.map( function () {
							return $.inArray( this, nodes ); // `nodes` is column index complete and in order
						} )
						.toArray();
				}
			}
		} );
	};
	
	
	
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
	
			col.bVisible = false;
			_fnDrawHead( settings, settings.aoHeader );
			_fnDrawHead( settings, settings.aoFooter );
	
			_fnSaveState( settings );
		}
	
		// Common actions
		col.bVisible = vis;
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		// Automatically adjust column sizing
		_fnAdjustColumnSizing( settings );
	
		// Realign columns for scrolling
		if ( settings.oScroll.sX || settings.oScroll.sY ) {
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis] );
	
		_fnSaveState( settings );
	};
	
	
	/**
	 *
	 */
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		} );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	
	/**
	 *
	 */
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		} );
	} );
	
	
	/**
	 *
	 */
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		} );
	} );
	
	
	/**
	 *
	 */
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			var a = [];
			for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
				a.push( _fnGetCellData( settings, rows[row], column, '' ) );
			}
			return a;
		} );
	} );
	
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		} );
	} );
	
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		} );
	} );
	
	
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis ) {
		return this.iterator( 'column', function ( settings, column ) {
			return vis === undefined ?
				settings.aoColumns[ column ].bVisible :
				__setColumnVis( settings, column, vis );
		} );
	} );
	
	
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		} );
	} );
	
	
	// _api_register( 'columns().show()', function () {
	// 	var selector = this.selector;
	// 	return this.columns( selector.cols, selector.opts ).visible( true );
	// } );
	
	
	// _api_register( 'columns().hide()', function () {
	// 	var selector = this.selector;
	// 	return this.columns( selector.cols, selector.opts ).visible( false );
	// } );
	
	
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		} );
	} );
	
	
	// Convert from one column index type, to another type
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _pluck_order( data, rows, 'anCells' );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j;
	
		return _selector_run( selector, function ( s ) {
			if ( ! s ) {
				// All cells
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						a.push( {
							row: row,
							column: j
						} );
					}
				}
	
				return a;
			}
			else if ( $.isPlainObject( s ) ) {
				return [s];
			}
	
			// jQuery filtered cells
			return allCells
				.filter( s )
				.map( function (i, el) {
					row = el.parentNode._DT_RowIndex;
	
					return {
						row: row,
						column: $.inArray( el, data[ row ].anCells )
					};
				} )
				.toArray();
		} );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// If passing in a cell index
			if ( rowSelector.row ) {
				opts = columnSelector;
				columnSelector = null;
			}
			else {
				opts = rowSelector;
				rowSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// Row + column selector
		var columns = this.columns( columnSelector, opts );
		var rows = this.rows( rowSelector, opts );
		var a, i, ien, j, jen;
	
		var cells = this.iterator( 'table', function ( settings, idx ) {
			a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
	
			return a;
		} );
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ].anCells[ column ];
		} );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		} );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		} );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		} );
	} );
	
	
	_api_register( [
		'cells().invalidate()',
		'cell().invalidate()'
	], function ( src ) {
		var selector = this.selector;
	
		// Use the rows method of the instance to perform the invalidation, rather
		// than doing it here. This avoids needing to handle duplicate rows from
		// the cells.
		this.rows( selector.rows, selector.opts ).invalidate( src );
	
		return this;
	} );
	
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidateRow( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_register( [
		'columns().search()',
		'column().search()'
	], function ( input, regex, smart, caseInsen ) {
		return this.iterator( 'column', function ( settings, column ) {
			var preSearch = settings.aoPreSearchCols;
	
			if ( input === undefined ) {
				// get
				return preSearch[ column ].sSearch;
			}
	
			// set
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			$.extend( preSearch[ column ], {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} );
	
			_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		$.each( DataTable.settings, function (i, o) {
			if ( o.nTable === t || o.nScrollHead === t || o.nScrollFoot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		return jQuery.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			if ( args[0].indexOf( '.dt' ) === -1 ) {
				args[0] += '.dt';
			}
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');
			$(window).unbind('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			// Remove the DataTables generated nodes, events and classes
			jqTable.detach();
			jqWrapper.detach();
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			if ( settings.bJUI ) {
				$('th span.'+classes.sSortIcon+ ', td span.'+classes.sSortIcon, thead).detach();
				$('th, td', thead).each( function () {
					var wrapper = $('div.'+classes.sSortJUIWrapper, this);
					$(this).append( wrapper.contents() );
					wrapper.detach();
				} );
			}
	
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
			}
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Restore the width of the original table - was read from the style property,
			// so we can restore directly to that
			jqTable
				.css( 'width', settings.sDestroyWidth )
				.removeClass( classes.sTable );
	
			// If the were originally stripe classes - then we add them back here.
			// Note this is not fool proof (for example if not all rows had stripe
			// classes - but it's a good effort without getting carried away
			ien = settings.asDestroyStripes.length;
	
			if ( ien ) {
				jqTbody.children().each( function (i) {
					$(this).addClass( settings.asDestroyStripes[i % ien] );
				} );
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	

	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.0-rc.1";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
		 * slightly different and additional mark-up from what DataTables has
		 * traditionally used).
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.jQueryUI
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "jQueryUI": true
		 *      } );
		 *    } );
		 */
		"bJQueryUI": false,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings) {
		 *          var o;
		 *
		 *          // Send an Ajax request to the server to get the data. Note that
		 *          // this is a synchronous request.
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "async": false,
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              o = json;
		 *            }
		 *          } );
		 *
		 *          return o;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					localStorage.getItem('DataTables_'+settings.sInstance+'_'+location.pathname)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				localStorage.setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify(data)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * DataTables features four different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus
		 *   page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * Flag to indicate if jQuery UI marking and classes should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bJUI": null,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {}
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert' or
		 * 'throw'
		 *
		 *  @type string
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	(function() {
	
	// Reused strings for better compression. Closure compiler appears to have a
	// weird edge case where it is trying to expand strings rather than use the
	// variable version. This results in about 200 bytes being added, for very
	// little preference benefit since it this run on script load only.
	var _empty = '';
	_empty = '';
	
	var _stateDefault = _empty + 'ui-state-default';
	var _sortIcon     = _empty + 'css_right ui-icon ui-icon-';
	var _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';
	
	$.extend( DataTable.ext.oJUIClasses, DataTable.ext.classes, {
		/* Full numbers paging buttons */
		"sPageButton":         "fg-button ui-button "+_stateDefault,
		"sPageButtonActive":   "ui-state-disabled",
		"sPageButtonDisabled": "ui-state-disabled",
	
		/* Features */
		"sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+
			"ui-buttonset-multi paging_", /* Note that the type is postfixed */
	
		/* Sorting */
		"sSortAsc":            _stateDefault+" sorting_asc",
		"sSortDesc":           _stateDefault+" sorting_desc",
		"sSortable":           _stateDefault+" sorting",
		"sSortableAsc":        _stateDefault+" sorting_asc_disabled",
		"sSortableDesc":       _stateDefault+" sorting_desc_disabled",
		"sSortableNone":       _stateDefault+" sorting_disabled",
		"sSortJUIAsc":         _sortIcon+"triangle-1-n",
		"sSortJUIDesc":        _sortIcon+"triangle-1-s",
		"sSortJUI":            _sortIcon+"carat-2-n-s",
		"sSortJUIAscAllowed":  _sortIcon+"carat-1-n",
		"sSortJUIDescAllowed": _sortIcon+"carat-1-s",
		"sSortJUIWrapper":     "DataTables_sort_wrapper",
		"sSortIcon":           "DataTables_sort_icon",
	
		/* Scrolling */
		"sScrollHead": "dataTables_scrollHead "+_stateDefault,
		"sScrollFoot": "dataTables_scrollFoot "+_stateDefault,
	
		/* Misc */
		"sHeaderTH":  _stateDefault,
		"sFooterTH":  _stateDefault,
		"sJUIHeader": _headerFooter+" ui-corner-tl ui-corner-tr",
		"sJUIFooter": _headerFooter+" ui-corner-bl ui-corner-br"
	} );
	
	}());
	
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-1, page+2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = '';
							btnClass = '';
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span>&hellip;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// Because this approach is destroying and recreating the paging
				// elements, focus is lost on the select button which is bad for
				// accessibility. So we want to restore focus once the draw has
				// completed
				var activeEl = $(document.activeElement).data('dt-idx');
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== null ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
				}
			}
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( !d || d === '-' ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting. This is done in a
	// function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			return Date.parse( d ) || 0;
		},
	
		// html
		"html-pre": function ( a ) {
			return ! a ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			return typeof a === 'string' ?
				a.toLowerCase() :
				! a || ! a.toString ?
					'' :
					a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 will remove any unknown characters at the start of the expression,
			// leading to false matches such as `$245.12` being a valid date. See
			// forum thread 18941 for detail.
			if ( d && ! _re_date_start.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				'' :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				'' :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, settings, sorting, columns ) {
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				var colIdx = column.idx;
	
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, settings, sorting, columns ) {
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span' )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 4 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix ) {
			return {
				display: function ( d ) {
					d = parseFloat( d );
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						(decimal+(d - intPart).toFixed( precision )).substring( 2 ):
						'';
	
					return (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart;
				}
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidateRow: _fnInvalidateRow,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnScrollingWidthAdjust: _fnScrollingWidthAdjust,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnScrollBarWidth: _fnScrollBarWidth,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));

}(window, document));

;/*!
 ColReorder 1.1.1-dev
 ©2010-2014 SpryMedia Ltd - datatables.net/license
*/
(function(n,p,q){function m(b){for(var e=[],a=0,f=b.length;a<f;a++)e[b[a]]=a;return e}function i(b,e,a){e=b.splice(e,1)[0];b.splice(a,0,e)}function o(b,e,a){for(var f=[],c=0,d=b.childNodes.length;c<d;c++)1==b.childNodes[c].nodeType&&f.push(b.childNodes[c]);e=f[e];null!==a?b.insertBefore(e,f[a]):b.appendChild(e)}$.fn.dataTableExt.oApi.fnColReorder=function(b,e,a){var f=$.fn.dataTable.Api?!0:!1,c,d,g,l,j=b.aoColumns.length,h;if(e!=a)if(0>e||e>=j)this.oApi._fnLog(b,1,"ColReorder 'from' index is out of bounds: "+
e);else if(0>a||a>=j)this.oApi._fnLog(b,1,"ColReorder 'to' index is out of bounds: "+a);else{g=[];c=0;for(d=j;c<d;c++)g[c]=c;i(g,e,a);var k=m(g);c=0;for(d=b.aaSorting.length;c<d;c++)b.aaSorting[c][0]=k[b.aaSorting[c][0]];if(null!==b.aaSortingFixed){c=0;for(d=b.aaSortingFixed.length;c<d;c++)b.aaSortingFixed[c][0]=k[b.aaSortingFixed[c][0]]}c=0;for(d=j;c<d;c++){h=b.aoColumns[c];g=0;for(l=h.aDataSort.length;g<l;g++)h.aDataSort[g]=k[h.aDataSort[g]];f&&(h.idx=k[h.idx])}f&&$.each(b.aLastSort,function(a,
c){b.aLastSort[a].src=k[c.src]});c=0;for(d=j;c<d;c++)h=b.aoColumns[c],"number"==typeof h.mData&&(h.mData=k[h.mData],b.oApi._fnColumnOptions(b,c,{}));if(b.aoColumns[e].bVisible){l=this.oApi._fnColumnIndexToVisible(b,e);h=null;for(c=a<e?a:a+1;null===h&&c<j;)h=this.oApi._fnColumnIndexToVisible(b,c),c++;g=b.nTHead.getElementsByTagName("tr");c=0;for(d=g.length;c<d;c++)o(g[c],l,h);if(null!==b.nTFoot){g=b.nTFoot.getElementsByTagName("tr");c=0;for(d=g.length;c<d;c++)o(g[c],l,h)}c=0;for(d=b.aoData.length;c<
d;c++)null!==b.aoData[c].nTr&&o(b.aoData[c].nTr,l,h)}i(b.aoColumns,e,a);i(b.aoPreSearchCols,e,a);c=0;for(d=b.aoData.length;c<d;c++)g=b.aoData[c],f?(i(g.anCells,e,a),"dom"!==g.src&&$.isArray(g._aData)&&i(g._aData,e,a)):($.isArray(g._aData)&&i(g._aData,e,a),i(g._anHidden,e,a));c=0;for(d=b.aoHeader.length;c<d;c++)i(b.aoHeader[c],e,a);if(null!==b.aoFooter){c=0;for(d=b.aoFooter.length;c<d;c++)i(b.aoFooter[c],e,a)}f&&(new $.fn.dataTable.Api(b)).rows().invalidate();c=0;for(d=j;c<d;c++)$(b.aoColumns[c].nTh).off("click.DT"),
this.oApi._fnSortAttachListener(b,b.aoColumns[c].nTh,c);$(b.oInstance).trigger("column-reorder",[b,{iFrom:e,iTo:a,aiInvertMapping:k}])}};n=function(b){var e=function(a,f){var c;b.fn.dataTable.Api?c=(new b.fn.dataTable.Api(a)).settings()[0]:a.fnSettings?c=a.fnSettings():"string"===typeof a?b.fn.dataTable.fnIsDataTable(b(a)[0])&&(c=b(a).eq(0).dataTable().fnSettings()):a.nodeName&&"table"===a.nodeName.toLowerCase()?b.fn.dataTable.fnIsDataTable(a.nodeName)&&(c=b(a.nodeName).dataTable().fnSettings()):
a instanceof jQuery?b.fn.dataTable.fnIsDataTable(a[0])&&(c=a.eq(0).dataTable().fnSettings()):c=a;b.fn.dataTable.camelToHungarian&&b.fn.dataTable.camelToHungarian(e.defaults,f||{});this.s={dt:null,init:b.extend(!0,{},e.defaults,f),fixed:0,fixedRight:0,dropCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]};this.dom={drag:null,pointer:null};this.s.dt=c.oInstance.fnSettings();this.s.dt._colReorder=this;this._fnConstruct();c.oApi._fnCallbackReg(c,
"aoDestroyCallback",b.proxy(this._fnDestroy,this),"ColReorder");return this};e.prototype={fnReset:function(){for(var a=[],b=0,c=this.s.dt.aoColumns.length;b<c;b++)a.push(this.s.dt.aoColumns[b]._ColReorder_iOrigCol);this._fnOrderColumns(a);return this},fnGetCurrentOrder:function(){return this.fnOrder()},fnOrder:function(a){if(a===q){for(var a=[],b=0,c=this.s.dt.aoColumns.length;b<c;b++)a.push(this.s.dt.aoColumns[b]._ColReorder_iOrigCol);return a}this._fnOrderColumns(m(a));return this},_fnConstruct:function(){var a=
this,b=this.s.dt.aoColumns.length,c;this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns);this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0;this.s.init.fnReorderCallback&&(this.s.dropCallback=this.s.init.fnReorderCallback);for(c=0;c<b;c++)c>this.s.fixed-1&&c<b-this.s.fixedRight&&this._fnMouseListener(c,this.s.dt.aoColumns[c].nTh),this.s.dt.aoColumns[c]._ColReorder_iOrigCol=c;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(c,b){a._fnStateSave.call(a,
b)},"ColReorder_State");var d=null;this.s.init.aiOrder&&(d=this.s.init.aiOrder.slice());this.s.dt.oLoadedState&&("undefined"!=typeof this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==this.s.dt.aoColumns.length)&&(d=this.s.dt.oLoadedState.ColReorder);if(d)if(a.s.dt._bInitComplete)b=m(d),a._fnOrderColumns.call(a,b);else{var g=!1;this.s.dt.aoDrawCallback.push({fn:function(){if(!a.s.dt._bInitComplete&&!g){g=true;var c=m(d);a._fnOrderColumns.call(a,c)}},sName:"ColReorder_Pre"})}else this._fnSetColumnIndexes()},
_fnOrderColumns:function(a){if(a.length!=this.s.dt.aoColumns.length)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.");else{for(var f=0,c=a.length;f<c;f++){var d=b.inArray(f,a);f!=d&&(i(a,d,f),this.s.dt.oInstance.fnColReorder(d,f))}(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing();this.s.dt.oInstance.oApi._fnSaveState(this.s.dt);this._fnSetColumnIndexes()}},_fnStateSave:function(a){var f,
c,d,g=this.s.dt;for(f=0;f<a.aaSorting.length;f++)a.aaSorting[f][0]=g.aoColumns[a.aaSorting[f][0]]._ColReorder_iOrigCol;var e=b.extend(!0,[],a.aoSearchCols);a.ColReorder=[];f=0;for(c=g.aoColumns.length;f<c;f++)d=g.aoColumns[f]._ColReorder_iOrigCol,a.aoSearchCols[d]=e[f],a.abVisCols[d]=g.aoColumns[f].bVisible,a.ColReorder.push(d)},_fnMouseListener:function(a,f){var c=this;b(f).on("mousedown.ColReorder",function(a){a.preventDefault();c._fnMouseDown.call(c,a,f)})},_fnMouseDown:function(a,f){var c=this,
d=b(a.target).closest("th, td").offset(),e=parseInt(b(f).attr("data-column-index"),10);e!==q&&(this.s.mouse.startX=a.pageX,this.s.mouse.startY=a.pageY,this.s.mouse.offsetX=a.pageX-d.left,this.s.mouse.offsetY=a.pageY-d.top,this.s.mouse.target=this.s.dt.aoColumns[e].nTh,this.s.mouse.targetIndex=e,this.s.mouse.fromIndex=e,this._fnRegions(),b(p).on("mousemove.ColReorder",function(a){c._fnMouseMove.call(c,a)}).on("mouseup.ColReorder",function(a){c._fnMouseUp.call(c,a)}))},_fnMouseMove:function(a){if(null===
this.dom.drag){if(5>Math.pow(Math.pow(a.pageX-this.s.mouse.startX,2)+Math.pow(a.pageY-this.s.mouse.startY,2),0.5))return;this._fnCreateDragNode()}this.dom.drag.css({left:a.pageX-this.s.mouse.offsetX,top:a.pageY-this.s.mouse.offsetY});for(var b=!1,c=this.s.mouse.toIndex,d=1,e=this.s.aoTargets.length;d<e;d++)if(a.pageX<this.s.aoTargets[d-1].x+(this.s.aoTargets[d].x-this.s.aoTargets[d-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[d-1].x);this.s.mouse.toIndex=this.s.aoTargets[d-1].to;b=!0;break}b||
(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to);this.s.init.bRealtime&&c!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())},_fnMouseUp:function(){b(p).off("mousemove.ColReorder mouseup.ColReorder");null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),this.dom.drag=null,
this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this._fnSetColumnIndexes(),(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(),null!==this.s.dropCallback&&this.s.dropCallback.call(this),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt))},_fnRegions:function(){var a=this.s.dt.aoColumns;this.s.aoTargets.splice(0,this.s.aoTargets.length);this.s.aoTargets.push({x:b(this.s.dt.nTable).offset().left,to:0});
for(var f=0,c=0,d=a.length;c<d;c++)c!=this.s.mouse.fromIndex&&f++,a[c].bVisible&&this.s.aoTargets.push({x:b(a[c].nTh).offset().left+b(a[c].nTh).outerWidth(),to:f});0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight);0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)},_fnCreateDragNode:function(){var a=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,f=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,c=f.parentNode,d=c.parentNode,e=d.parentNode,i=b(f).clone();
this.dom.drag=b(e.cloneNode(!1)).addClass("DTCR_clonedTable").append(d.cloneNode(!1).appendChild(c.cloneNode(!1).appendChild(i[0]))).css({position:"absolute",top:0,left:0,width:b(f).outerWidth(),height:b(f).outerHeight()}).appendTo("body");this.dom.pointer=b("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:a?b("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:b(this.s.dt.nTable).offset().top,height:a?b("div.dataTables_scroll",this.s.dt.nTableWrapper).height():b(this.s.dt.nTable).height()}).appendTo("body")},
_fnDestroy:function(){var a,f;a=0;for(f=this.s.dt.aoDrawCallback.length;a<f;a++)if("ColReorder_Pre"===this.s.dt.aoDrawCallback[a].sName){this.s.dt.aoDrawCallback.splice(a,1);break}b(this.s.dt.nTHead).find("*").off(".ColReorder");b.each(this.s.dt.aoColumns,function(a,d){b(d.nTh).removeAttr("data-column-index")});this.s=this.s.dt._colReorder=null},_fnSetColumnIndexes:function(){b.each(this.s.dt.aoColumns,function(a,f){b(f.nTh).attr("data-column-index",a)})}};e.defaults={aiOrder:null,bRealtime:!1,iFixedColumns:0,
iFixedColumnsRight:0,fnReorderCallback:null};e.version="1.1.1-dev";b.fn.dataTable.ColReorder=e;b.fn.DataTable.ColReorder=e;"function"==typeof b.fn.dataTable&&"function"==typeof b.fn.dataTableExt.fnVersionCheck&&b.fn.dataTableExt.fnVersionCheck("1.9.3")?b.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInstance;a._colReorder?b.oApi._fnLog(a,1,"ColReorder attempted to initialise twice. Ignoring second"):(b=a.oInit,new e(a,b.colReorder||b.oColReorder||{}));return null},cFeature:"R",sFeature:"ColReorder"}):
alert("Warning: ColReorder requires DataTables 1.9.3 or greater - www.datatables.net/download");b.fn.dataTable.Api&&(b.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(a){a._colReorder.fnReset()})}),b.fn.dataTable.Api.register("colReorder.order()",function(a){return a?this.iterator("table",function(b){b._colReorder.fnOrder(a)}):this.context.length?this.context[0]._colReorder.fnOrder():null}));return e};"function"===typeof define&&define.amd?define("datatables-colreorder",
["jquery","datatables"],n):jQuery&&!jQuery.fn.dataTable.ColReorder&&n(jQuery,jQuery.fn.dataTable)})(window,document);


;/* Set the defaults for DataTables initialisation */
$.extend( true, $.fn.dataTable.defaults, {
	"sDom":
		"<'row'<'col-xs-6'l><'col-xs-6'f>r>"+
		"t"+
		"<'row'<'col-xs-6'i><'col-xs-6'p>>",
	"oLanguage": {
		"sLengthMenu": "_MENU_ records per page"
	}
} );


/* Default class modification */
$.extend( $.fn.dataTableExt.oStdClasses, {
	"sWrapper": "dataTables_wrapper form-inline",
	"sFilterInput": "form-control input-sm",
	"sLengthSelect": "form-control input-sm"
} );

// In 1.10 we use the pagination renderers to draw the Bootstrap paging,
// rather than  custom plug-in
	// Integration for 1.9-
	$.fn.dataTable.defaults.sPaginationType = 'bootstrap';

	/* API method to get paging information */
	$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
	{
		return {
			"iStart":         oSettings._iDisplayStart,
			"iEnd":           oSettings.fnDisplayEnd(),
			"iLength":        oSettings._iDisplayLength,
			"iTotal":         oSettings.fnRecordsTotal(),
			"iFilteredTotal": oSettings.fnRecordsDisplay(),
			"iPage":          oSettings._iDisplayLength === -1 ?
				0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
			"iTotalPages":    oSettings._iDisplayLength === -1 ?
				0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
		};
	};

	/* Bootstrap style pagination control */
	$.extend( $.fn.dataTableExt.oPagination, {
		"bootstrap": {
			"fnInit": function( oSettings, nPaging, fnDraw ) {
				var oLang = oSettings.oLanguage.oPaginate;
				var fnClickHandler = function ( e ) {
					e.preventDefault();
					if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
						fnDraw( oSettings );
					}
				};

				$(nPaging).append(
					'<ul class="pagination">'+
						'<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
						'<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
					'</ul>'
				);
				var els = $('a', nPaging);
				$(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
				$(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
			},

			"fnUpdate": function ( oSettings, fnDraw ) {
				var iListLength = 5;
				var oPaging = oSettings.oInstance.fnPagingInfo();
				var an = oSettings.aanFeatures.p;
				var i, ien, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

				if ( oPaging.iTotalPages < iListLength) {
					iStart = 1;
					iEnd = oPaging.iTotalPages;
				}
				else if ( oPaging.iPage <= iHalf ) {
					iStart = 1;
					iEnd = iListLength;
				} else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
					iStart = oPaging.iTotalPages - iListLength + 1;
					iEnd = oPaging.iTotalPages;
				} else {
					iStart = oPaging.iPage - iHalf + 1;
					iEnd = iStart + iListLength - 1;
				}

				for ( i=0, ien=an.length ; i<ien ; i++ ) {
					// Remove the middle elements
					$('li:gt(0)', an[i]).filter(':not(:last)').remove();

					// Add the new list items and their event handlers
					for ( j=iStart ; j<=iEnd ; j++ ) {
						sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
						$('<li '+sClass+'><a href="#">'+j+'</a></li>')
							.insertBefore( $('li:last', an[i])[0] )
							.bind('click', function (e) {
								e.preventDefault();
								oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
								fnDraw( oSettings );
							} );
					}

					// Add / remove disabled classes from the static elements
					if ( oPaging.iPage === 0 ) {
						$('li:first', an[i]).addClass('disabled');
					} else {
						$('li:first', an[i]).removeClass('disabled');
					}

					if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
						$('li:last', an[i]).addClass('disabled');
					} else {
						$('li:last', an[i]).removeClass('disabled');
					}
				}
			}
		}
	} );



;/*!
 * jQuery Form Plugin
 * version: 3.50.0-2014.02.05
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form=' + formId + ']').get();
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
		else if (t == "file") {
			if (/MSIE/.test(navigator.userAgent)) {
				$(this).replaceWith($(this).clone(true));
			} else {
				$(this).val('');
			}
		}
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));



;/*! pace 0.4.15 */

(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=[].slice,P={}.hasOwnProperty,Q=function(a,b){function c(){this.constructor=a}for(var d in b)P.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},R=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};s={catchupTime:500,initialRate:.03,minTime:500,ghostTime:250,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},z=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},B=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,r=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==B&&(B=function(a){return setTimeout(a,50)},r=function(a){return clearTimeout(a)}),D=function(a){var b,c;return b=z(),c=function(){var d;return d=z()-b,b=z(),a(d,function(){return B(c)})},c()},C=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?O.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},t=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?O.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)P.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?t(b[a],e):b[a]=e);return b},o=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},v=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},null==window.Pace&&(window.Pace={}),A=Pace.options=t(s,window.paceOptions,v()),h=function(a){function b(){return M=b.__super__.constructor.apply(this,arguments)}return Q(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(A.target),!a)throw new h;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){h=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(A.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||0|(this.lastRenderedProgress|0!==this.progress))&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),g=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),J=window.XMLHttpRequest,I=window.XDomainRequest,H=window.WebSocket,u=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},i=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){var f;return f=(null!=d?d:"GET").toUpperCase(),R.call(A.ajax.trackMethods,f)>=0&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new J(b),a(c),c},u(window.XMLHttpRequest,J),null!=I&&(window.XDomainRequest=function(){var b;return b=new I,a(b),b},u(window.XDomainRequest,I)),null!=H&&A.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=new H(a,b),c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},u(window.WebSocket,H))}return Q(b,a),b}(g),K=null,w=function(){return null==K&&(K=new i),K},A.restartOnRequestAfter!==!1&&w().on("request",function(b){var c,d,e;return e=b.type,d=b.request,Pace.running?void 0:(c=arguments,setTimeout(function(){var b,f,g,h,i,j,k;if(f="socket"===e?d.readyState<2:0<(i=d.readyState)&&4>i){for(Pace.restart(),j=Pace.sources,k=[],g=0,h=j.length;h>g;g++){if(b=j[g],b instanceof a){b.watch.apply(b,c);break}k.push(void 0)}return k}},A.restartOnRequestAfter))}),a=function(){function a(){var a=this;this.elements=[],w().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d;return d=a.type,b=a.request,c="socket"===d?new l(b):new m(b),this.elements.push(c)},a}(),m=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),l=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},A.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=z(),b=setInterval(function(){var g;return g=z()-c-50,c=z(),e.push(g),e.length>A.eventLag.sampleCount&&e.shift(),a=o(e),++d>=A.eventLag.minSamples&&a<A.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),k=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=A.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=C(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=C(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/A.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,A.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+A.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),F=null,E=null,p=null,G=null,n=null,q=null,Pace.running=!1,x=function(){return A.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(L=window.history.pushState,window.history.pushState=function(){return x(),L.apply(window.history,arguments)}),null!=window.history.replaceState&&(N=window.history.replaceState,window.history.replaceState=function(){return x(),N.apply(window.history,arguments)}),j={ajax:a,elements:d,document:c,eventLag:f},(y=function(){var a,c,d,e,f,g,h,i,l;for(Pace.sources=F=[],h=["ajax","elements","document","eventLag"],d=0,f=h.length;f>d;d++)c=h[d],A[c]!==!1&&F.push(new j[c](A[c]));for(l=null!=(i=A.extraSources)?i:[],e=0,g=l.length;g>e;e++)a=l[e],F.push(new a(A));return Pace.bar=p=new b,E=[],G=new k})(),Pace.stop=function(){return Pace.running=!1,p.destroy(),q=!0,null!=n&&("function"==typeof r&&r(n),n=null),y()},Pace.restart=function(){return Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,p.render(),q=!1,n=D(function(a,b){var c,d,e,f,g,h,i,j,l,m,n,o,r,s,t,u,v,w;for(j=100-p.progress,d=r=0,e=!0,h=s=0,u=F.length;u>s;h=++s)for(n=F[h],m=null!=E[h]?E[h]:E[h]=[],g=null!=(w=n.elements)?w:[n],i=t=0,v=g.length;v>t;i=++t)f=g[i],l=null!=m[i]?m[i]:m[i]=new k(f),e&=l.done,l.done||(d++,r+=l.tick(a));return c=r/d,p.update(G.tick(a,c)),o=z(),p.done()||e||q?(p.update(100),setTimeout(function(){return p.finish(),Pace.running=!1},Math.max(A.ghostTime,Math.min(A.minTime,z()-o)))):b()})},Pace.start=function(a){t(A,a),Pace.running=!0;try{p.render()}catch(b){h=b}return document.querySelector(".pace")?Pace.go():setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:A.startOnPageLoad&&Pace.start()}).call(this);