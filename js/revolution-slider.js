/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 27.02.2015
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/


(function(a){if(typeof defineSlider==="function"&&defineSlider.amd&&defineSlider.amd.jQuery){defineSlider(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-03
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},f=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),m={},p=function(s,r,n,a){this.sc=m[s]?m[s].sc:[],m[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,f,c,d,v=r.length,g=v;--v>-1;)(_=m[r[v]]||new p(r[v],[])).gsClass?(o[v]=_.gsClass,g--):h&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),f=u.pop(),c=l(u.join("."))[f]=this.gsClass=n.apply(n,o),a&&(i[f]=c,d="undefined"!=typeof module&&module.exports,!d&&"function"==typeof defineSlider&&defineSlider.amd?defineSlider((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&d&&(module.exports=c)),v=0;this.sc.length>v;v++)this.sc[v].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],A=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),c=e!==!1&&k,m=500,p=33,d="tick",v=function(t){var e,a,o=S()-x;o>m&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(v)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){v(!0)},h.lagSmoothing=function(t,e){m=t||1/_,p=Math.min(e,m,0)},h.sleep=function(){null!=r&&(c&&A?A(r):clearTimeout(r),s=f,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=S()-m+5),s=0===i?f:c&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),v(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),c=t,h.fps(i),void 0):c},h.fps(t),setTimeout(function(){c&&5>h.frame&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,H){o||a.wake();var i=this.vars.useFrames?K:H;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||T)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(z.length&&V(),this.render(t,e,!1),z.length&&V())}return this},n.progress=n.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?$[I.defaultOverwrite]:"number"==typeof l?l>>0:$[l],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=W(n,this,!1),1===l&&this._siblings[r].length>1&&Y(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=W(e,this,!1),1===l&&this._siblings.length>1&&Y(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)M[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!Q[i]||Q[i]&&Q[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.18.0",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=120,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],F={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},U=function(t,e,i,s){var r,n,a,o,l,h,_,u=[t,e],f=0,c="",m=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(L)||[],n=e.match(L)||[],s&&(s._next=null,s.blob=1,u._firstPT=s),l=n.length,o=0;l>o;o++)_=n[o],h=e.substr(f,e.indexOf(_,f)-f),c+=h||!o?h:",",f+=h.length,m?m=(m+1)%5:"rgba("===h.substr(-5)&&(m=1),_===r[o]||o>=r.length?c+=_:(c&&(u.push(c),c=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,r:m&&4>m}),f+=_.length;return c+=e.substr(f),c&&u.push(c),u.setRatio=N,u},j=function(t,e,i,s,r,n,a,o){var l,h,_="get"===i?t[e]:i,u=typeof t[e],f="string"==typeof s&&"="===s.charAt(1),c={t:t,p:e,s:_,f:"function"===u,pg:0,n:r||e,r:n,pr:0,c:f?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-_||0};return"number"!==u&&("function"===u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),c.s=_=a?t[h](a):t[h]()),"string"==typeof _&&(a||isNaN(_))?(c.fp=a,l=U(_,s,o||I.defaultStringFilter,c),c={t:l,p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0}):f||(c.c=parseFloat(s)-parseFloat(_)||0)),c.c?((c._next=this._firstPT)&&(c._next._prev=c),this._firstPT=c,c):void 0},G=I._internals={isArray:c,isSelector:E,lazyTweens:z,blobDif:U},Q=I._plugins={},q=G.tweenLookup={},B=0,M=G.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},$={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},K=R._rootFramesTimeline=new D,H=R._rootTimeline=new D,J=30,V=G.lazyRender=function(){var t,e=z.length;for(F={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};H._startTime=a.time,K._startTime=a.frame,H._active=K._active=!0,setTimeout(V,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&V(),H.render((a.time-H._startTime)*H._timeScale,!1,!1),K.render((a.frame-K._startTime)*K._timeScale,!1,!1),z.length&&V(),a.frame>=J){J=a.frame+(parseInt(I.autoSleep,10)||120);for(i in q){for(e=q[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete q[i]}if(i=H._first,(!i||i._paused)&&I.autoSleep&&!K._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var W=function(t,e,i){var s,r,n=t._gsTweenID;if(q[n||(t._gsTweenID=n="t"+B++)]||(q[n]={target:t,tweens:[]}),e&&(s=q[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return q[n].tweens},X=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Y=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,f=[],c=0,m=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||Z(e,0,m),0===Z(o,h,m)&&(f[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((m||!o._initted)&&2e-10>=u-o._startTime||(f[c++]=o)));for(n=c;--n>-1;)if(o=f[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!X(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Z=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)M[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&Q.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars)if(_=this.vars[n],M[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(Q[n]&&(l=new Q[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else i[n]=j.call(this,e,n,"get",_,n,0,null,this.vars.stringFilter);return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Y(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,f=this._easeType,c=this._easePower;(1===f||3===f&&u>=.5)&&(u=1-u),3===f&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===f?1-u:2===f?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u,f=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((c(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!X(this,i,e,u))return!1}for(n in h)(a=o[n])&&(f&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=W(s[i],this,!0);else this._siblings=W(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((c(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=W(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var te=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=te.prototype},!0);if(n=te.prototype,te.version="1.18.0",te.API=2,n._firstPT=null,n._addTween=j,n.setRatio=N,n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},te.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===te.API&&(Q[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){te.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new te(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,te.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in m)m[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

/*!
 * VERSION: 1.18.0
 * DATE: 2015-08-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],l(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));l(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,l=n.isArray,h=n.lazyTweens,_=n.lazyRender,u=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},p=a.pauseCallback=function(){},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.18.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,l,h,_){var u,p,d=new s({onComplete:l,onCompleteParams:h,callbackScope:_,smoothChildTiming:this.smoothChildTiming}),g=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),p=0;t.length>p;p++)u=f(r),u.startAt&&(u.startAt=f(u.startAt),u.startAt.cycle&&c(u.startAt,t,p)),g&&c(u,t,p),d.to(t[p],e,u,p*n);return this.add(d,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,l)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var h,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&l(r)){for(a=a||"normal",o=o||0,h=n,_=r.length,u=0;_>u;u++)l(f=r[u])&&(f=new s({tweens:f})),this.add(f,h),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?h=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,s,r||this);return n.vars.onComplete=n.vars.onReverseComplete=e,n.data="isPause",this._hasPause=!0,this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&l(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,l,u,f=this._dirty?this.totalDuration():this._totalDuration,c=this._time,p=this._startTime,m=this._timeScale,d=this._paused;if(t>=f)this._totalTime=this._time=f,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=f+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=c)for(s=this._first;s&&t>=s._startTime&&!u;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(u=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!u;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(u=s),s=s._prev;u&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==c&&this._first||i||l||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(u===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);){if(s._active||c>=s._startTime&&!s._paused&&!s._gc){if(u===s){for(u=s._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,i),u=u._prev;u=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(h.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(p===this._startTime||m!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(n&&(h.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof defineSlider&&defineSlider.amd?defineSlider(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");

/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.18.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var u,f,c,_,p,d,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,S=/([A-Z])/g,O=/-([a-z])/gi,C=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},R=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,M=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,L=Math.PI/180,N=180/Math.PI,F={},X=document,z=function(t){return X.createElementNS?X.createElementNS("http://www.w3.org/1999/xhtml",t):X.createElement(t)},B=z("div"),I=z("img"),E=a._internals={_specialProps:l},Y=navigator.userAgent,W=function(){var t=Y.indexOf("Android"),e=z("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),_=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(d=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),V=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},G="",U="",q=function(t,e){e=e||B;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(U=3===r?"ms":i[r],G="-"+U.toLowerCase()+"-",U+t):null},H=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,r,s){var n;return W||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||H(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(S,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):V(t)},Z=E.convertToPixels=function(t,i,r,s,n){if("px"===s||!s)return r;if("auto"===s||!r)return 0;var o,l,h,u=R.test(i),f=t,c=B.style,_=0>r;if(_&&(r=-r),"%"===s&&-1!==i.indexOf("border"))o=r/100*(u?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&f.appendChild&&"v"!==s.charAt(0)&&"rem"!==s)c[u?"borderLeftWidth":"borderTopWidth"]=r+s;else{if(f=t.parentNode||X.body,l=f._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;c[u?"width":"height"]=r+s}f.appendChild(B),o=parseFloat(B[u?"offsetWidth":"offsetHeight"]),f.removeChild(B),u&&"%"===s&&a.cacheWidths!==!1&&(l=f._gsCache=f._gsCache||{},l.time=h,l.width=100*(o/r)),0!==o||n||(o=Z(t,i,r,s,!0))}return _?-o:o},$=E.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=Q(t,"margin"+r,i);return t["offset"+r]-(Z(t,e,parseFloat(s),s.replace(x,""))||0)},K=function(t,e){var i,r,s,n={};if(e=e||H(t,null))if(i=e.length)for(;--i>-1;)s=e[i],(-1===s.indexOf("-transform")||Se===s)&&(n[s.replace(O,k)]=e.getPropertyValue(s));else for(i in e)(-1===i.indexOf("Transform")||Pe===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(O,k)]=e[i]);return W||(n.opacity=V(t)),r=ze(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Ce&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:$(t,a),void 0!==h[a]&&(o=new pe(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=te[e],n=s.length;for(i=i||H(t,null);--n>-1;)r-=parseFloat(Q(t,"padding"+s[n],i,!0))||0,r-=parseFloat(Q(t,"border"+s[n]+"Width",i,!0))||0;return r},re=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="center"===r?"50%":"0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),t=r+" "+s+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(y,"")),e.oy=parseFloat(s.replace(y,"")),e.v=t),e||t},se=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,r){var s,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:N)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},he=a.parseColor=function(t,e){var i,r,s,n,a,o,l,h,u,f,c;if(t)if("number"==typeof t)i=[t>>16,255&t>>8,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t])i=oe[t];else if("#"===t.charAt(0))4===t.length&&(r=t.charAt(1),s=t.charAt(2),n=t.charAt(3),t="#"+r+r+s+s+n+n),t=parseInt(t.substr(1),16),i=[t>>16,255&t>>8,255&t];else if("hsl"===t.substr(0,3))if(i=c=t.match(m),e){if(-1!==t.indexOf("="))return t.match(g)}else a=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,s=.5>=l?l*(o+1):l+o-l*o,r=2*l-s,i.length>3&&(i[3]=Number(t[3])),i[0]=le(a+1/3,r,s),i[1]=le(a,r,s),i[2]=le(a-1/3,r,s);else i=t.match(m)||oe.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=oe.black;return e&&!c&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,h=Math.max(r,s,n),u=Math.min(r,s,n),l=(h+u)/2,h===u?a=o=0:(f=h-u,o=l>.5?f/(2-h-u):f/(h+u),a=h===r?(s-n)/f+(n>s?6:0):h===s?(n-r)/f+2:(r-s)/f+4,a*=60),i[0]=0|a+.5,i[1]=0|100*o+.5,i[2]=0|100*l+.5),i},ue=function(t,e){var i,r,s,n=t.match(fe)||[],a=0,o=n.length?"":t;for(i=0;n.length>i;i++)r=n[i],s=t.substr(a,t.indexOf(r,a)-a),a+=s.length+r.length,r=he(r,e),3===r.length&&r.push(1),o+=s+(e?"hsla("+r[0]+","+r[1]+"%,"+r[2]+"%,"+r[3]:"rgba("+r.join(","))+")";return o},fe="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in oe)fe+="|"+h+"\\b";fe=RegExp(fe+")","gi"),a.colorStringFilter=function(t){var e,i=t[0]+t[1];fe.lastIndex=0,fe.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=ue(t[0],e),t[1]=ue(t[1],e))},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ce=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(fe)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,f=u>0?a[0].replace(m,""):"";return u?s=e?function(t){var e,c,_,p;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(p=t.replace(D,"|").split("|"),_=0;p.length>_;_++)p[_]=s(p[_]);return p.join(",")}if(e=(t.match(fe)||[n])[0],c=t.split(e).join("").match(v)||[],_=c.length,u>_--)for(;u>++_;)c[_]=i?c[0|(_-1)/2]:a[_];return o+c.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),c=0;n.length>c;c++)n[c]=s(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,u>c--)for(;u>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(h)+l}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},pe=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),de=(E._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,f=r,c={},_={},p=i._transform,d=F;for(i._transform=null,F=e,r=u=i.parse(t,e,r,s),F=d,n&&(i._transform=p,f&&(f._prev=null,f._prev&&(f._prev._next=null)));r&&r!==f;){if(1>=r.type&&(o=r.p,_[o]=r.s+r.c,c[o]=r.s,n||(h=new pe(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,_[o]=r.data[l],c[o]=r[l],n||(h=new pe(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:c,end:_,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,r,s,a,o,l,h,u,f,c){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof de||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===f?r:f,this.e=void 0===c?r+s:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,r,s,n){var a=new de(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a},ge=a.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"",a=new de(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="";var f,c,_,p,d,v,y,x,T,w,b,P,S,O=i.split(", ").join(",").split(" "),C=r.split(", ").join(",").split(" "),k=O.length,R=u!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(O=O.join(" ").replace(D,", ").split(" "),C=C.join(" ").replace(D,", ").split(" "),k=O.length),k!==C.length&&(O=(n||"").split(" "),k=O.length),a.plugin=l,a.setRatio=h,fe.lastIndex=0,f=0;k>f;f++)if(p=O[f],d=C[f],x=parseFloat(p),x||0===x)a.appendXtra("",x,se(d,x),d.replace(g,""),R&&-1!==d.indexOf("px"),!0);else if(s&&fe.test(p))P=","===d.charAt(d.length-1)?"),":")",S=-1!==d.indexOf("hsl")&&W,p=he(p,S),d=he(d,S),T=p.length+d.length>6,T&&!W&&0===d[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(C[f]).join("transparent")):(W||(T=!1),S?a.appendXtra(T?"hsla(":"hsl(",p[0],se(d[0],p[0]),",",!1,!0).appendXtra("",p[1],se(d[1],p[1]),"%,",!1).appendXtra("",p[2],se(d[2],p[2]),T?"%,":"%"+P,!1):a.appendXtra(T?"rgba(":"rgb(",p[0],d[0]-p[0],",",!0,!0).appendXtra("",p[1],d[1]-p[1],",",!0).appendXtra("",p[2],d[2]-p[2],T?",":P,!0),T&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>d.length?1:d[3])-p,P,!1))),fe.lastIndex=0;else if(v=p.match(m)){if(y=d.match(g),!y||y.length!==v.length)return a;for(_=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,_),a.appendXtra(p.substr(_,w-_),Number(b),se(y[c],b),"",R&&"px"===p.substr(w+b.length,2),0===c),_=w+b.length;a["xs"+a.l]+=p.substr(_)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==r.indexOf("=")&&a.data){for(P=a.xs0+a.data.s,f=1;a.l>f;f++)P+=a["xs"+f]+a.data["xn"+f];a.e=P+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ve=9;for(h=de.prototype,h.l=h.pr=0;--ve>0;)h["xn"+ve]=0,h["xs"+ve]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new de(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var ye=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},xe=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new ye(n[r],e)},Te=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";xe(t,{parser:function(t,i,r,s,n,a,h){var u=o.com.greensock.plugins[e];return u?(u._cssRegister(),l[r].parse(t,i,r,s,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=ye.prototype,h.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,f,c=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):c&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,c&&(u=e.indexOf(c),f=i.indexOf(c),u!==f&&(-1===f?o[a]=o[a].split(c).join(""):-1===u&&(o[a]+=" "+c)));e=o.join(", "),i=l.join(", ")}return ge(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},h.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){xe(t,{parser:function(t,r,s,n,a,o){var l=new de(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})},a.useSVGTransformAttr=c||_;var we,be="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Pe=q("transform"),Se=G+"transform",Oe=q("transformOrigin"),Ce=null!==q("perspective"),ke=E.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Ce?a.defaultForce3D||"auto":!1},Re=window.SVGElement,Ae=function(t,e,i){var r,s=X.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s},Me=X.documentElement,De=function(){var t,e,i,r=d||/Android/i.test(Y)&&!window.chrome;return X.createElementNS&&!r&&(t=Ae("svg",Me),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Oe]="50% 50%",e.style[Pe]="scaleX(0.5)",r=i===e.getBoundingClientRect().width&&!(_&&Ce),Me.removeChild(t)),r}(),Le=function(t,e,i,r,s){var n,o,l,h,u,f,c,_,p,d,m,g,v,y,x=t._gsTransform,T=Xe(t,!0);x&&(v=x.xOrigin,y=x.yOrigin),(!r||2>(n=r.split(" ")).length)&&(c=t.getBBox(),e=re(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=h=parseFloat(n[0]),i.yOrigin=u=parseFloat(n[1]),r&&T!==Fe&&(f=T[0],c=T[1],_=T[2],p=T[3],d=T[4],m=T[5],g=f*p-c*_,o=h*(p/g)+u*(-_/g)+(_*m-p*d)/g,l=h*(-c/g)+u*(f/g)-(f*m-c*d)/g,h=i.xOrigin=n[0]=o,u=i.yOrigin=n[1]=l),x&&(s||s!==!1&&a.defaultSmoothOrigin!==!1?(o=h-v,l=u-y,x.xOffset+=o*T[0]+l*T[2]-o,x.yOffset+=o*T[1]+l*T[3]-l):x.xOffset=x.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Ne=function(t){return!!(Re&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Fe=[1,0,0,1,0,0],Xe=function(t,e){var i,r,s,n,a,o=t._gsTransform||new ke,l=1e5;if(Pe?r=Q(t,Se,null,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),o.x||0,o.y||0].join(","):""),i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,(o.svg||t.getBBox&&Ne(t))&&(i&&-1!==(t.style[Pe]+"").indexOf("matrix")&&(r=t.style[Pe],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Fe;for(s=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ve=s.length;--ve>-1;)n=Number(s[ve]),s[ve]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},ze=E.getTransform=function(t,i,r,n){if(t._gsTransform&&r&&!n)return t._gsTransform;var o,l,h,u,f,c,_=r?t._gsTransform||new ke:new ke,p=0>_.scaleX,d=2e-5,m=1e5,g=Ce?parseFloat(Q(t,Oe,i,!1,"0 0 0").split(" ")[2])||_.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(_.svg=!(!t.getBBox||!Ne(t)),_.svg&&(Le(t,Q(t,Oe,s,!1,"50% 50%")+"",_,t.getAttribute("data-svg-origin")),we=a.useSVGTransformAttr||De),o=Xe(t),o!==Fe){if(16===o.length){var y,x,T,w,b,P=o[0],S=o[1],O=o[2],C=o[3],k=o[4],R=o[5],A=o[6],M=o[7],D=o[8],L=o[9],F=o[10],X=o[12],z=o[13],B=o[14],I=o[11],E=Math.atan2(A,F);_.zOrigin&&(B=-_.zOrigin,X=D*B-o[12],z=L*B-o[13],B=F*B+_.zOrigin-o[14]),_.rotationX=E*N,E&&(w=Math.cos(-E),b=Math.sin(-E),y=k*w+D*b,x=R*w+L*b,T=A*w+F*b,D=k*-b+D*w,L=R*-b+L*w,F=A*-b+F*w,I=M*-b+I*w,k=y,R=x,A=T),E=Math.atan2(D,F),_.rotationY=E*N,E&&(w=Math.cos(-E),b=Math.sin(-E),y=P*w-D*b,x=S*w-L*b,T=O*w-F*b,L=S*b+L*w,F=O*b+F*w,I=C*b+I*w,P=y,S=x,O=T),E=Math.atan2(S,P),_.rotation=E*N,E&&(w=Math.cos(-E),b=Math.sin(-E),P=P*w+k*b,x=S*w+R*b,R=S*-b+R*w,A=O*-b+A*w,S=x),_.rotationX&&Math.abs(_.rotationX)+Math.abs(_.rotation)>359.9&&(_.rotationX=_.rotation=0,_.rotationY+=180),_.scaleX=(0|Math.sqrt(P*P+S*S)*m+.5)/m,_.scaleY=(0|Math.sqrt(R*R+L*L)*m+.5)/m,_.scaleZ=(0|Math.sqrt(A*A+F*F)*m+.5)/m,_.skewX=0,_.perspective=I?1/(0>I?-I:I):0,_.x=X,_.y=z,_.z=B,_.svg&&(_.x-=_.xOrigin-(_.xOrigin*P-_.yOrigin*k),_.y-=_.yOrigin-(_.yOrigin*S-_.xOrigin*R))}else if(!(Ce&&!n&&o.length&&_.x===o[4]&&_.y===o[5]&&(_.rotationX||_.rotationY)||void 0!==_.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,W=Y?o[0]:1,V=o[1]||0,j=o[2]||0,G=Y?o[3]:1;_.x=o[4]||0,_.y=o[5]||0,h=Math.sqrt(W*W+V*V),u=Math.sqrt(G*G+j*j),f=W||V?Math.atan2(V,W)*N:_.rotation||0,c=j||G?Math.atan2(j,G)*N+f:_.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(h*=-1,c+=0>=f?180:-180,f+=0>=f?180:-180):(u*=-1,c+=0>=c?180:-180)),_.scaleX=h,_.scaleY=u,_.rotation=f,_.skewX=c,Ce&&(_.rotationX=_.rotationY=_.z=0,_.perspective=v,_.scaleZ=1),_.svg&&(_.x-=_.xOrigin-(_.xOrigin*W+_.yOrigin*j),_.y-=_.yOrigin-(_.xOrigin*V+_.yOrigin*G))}_.zOrigin=g;for(l in _)d>_[l]&&_[l]>-d&&(_[l]=0)}return r&&(t._gsTransform=_,_.svg&&(we&&t.style[Pe]?e.delayedCall(.001,function(){Ye(t.style,Pe)}):!we&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),_},Be=function(t){var e,i,r=this.data,s=-r.rotation*L,n=s+r.skewX*L,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,f=this.t.style,c=this.t.currentStyle;if(c){i=l,l=-h,h=-i,e=c.filter,f.filter="";var _,p,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x+m*r.xPercent/100,b=r.y+g*r.yPercent/100;if(null!=r.ox&&(_=(r.oxp?.01*m*r.ox:r.ox)-m/2,p=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=_-(_*o+p*l),b+=p-(_*h+p*u)),v?(_=m/2,p=g/2,y+=", Dx="+(_-(_*o+p*l)+w)+", Dy="+(p-(_*h+p*u)+b)+")"):y+=", sizingMethod='auto expand')",f.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(M,y):y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===y.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&f.removeAttribute("filter")),!v){var P,S,O,C=8>d?1:-1;for(_=r.ieOffsetX||0,p=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ve=0;4>ve;ve++)S=ee[ve],P=c[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(x,""))||0,O=i!==r[S]?2>ve?-r.ieOffsetX:-r.ieOffsetY:2>ve?_-r.ieOffsetX:p-r.ieOffsetY,f[S]=(r[S]=Math.round(i-O*(0===ve||2===ve?1:C)))+"px"}}},Ie=E.set3DTransformRatio=E.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,c,p,d,m,g,v,y,x,T,w,b,P,S=this.data,O=this.t.style,C=S.rotation,k=S.rotationX,R=S.rotationY,A=S.scaleX,M=S.scaleY,D=S.scaleZ,N=S.x,F=S.y,X=S.z,z=S.svg,B=S.perspective,I=S.force3D;if(!(((1!==t&&0!==t||"auto"!==I||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&I||X||B||R||k)&&(!we||!z)&&Ce))return C||S.skewX||z?(C*=L,b=S.skewX*L,P=1e5,e=Math.cos(C)*A,s=Math.sin(C)*A,i=Math.sin(C-b)*-M,n=Math.cos(C-b)*M,b&&"simple"===S.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,S.skewY&&(e*=v,s*=v)),z&&(N+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,F+=S.yOrigin-(S.xOrigin*s+S.yOrigin*n)+S.yOffset,we&&(S.xPercent||S.yPercent)&&(d=this.t.getBBox(),N+=.01*S.xPercent*d.width,F+=.01*S.yPercent*d.height),d=1e-6,d>N&&N>-d&&(N=0),d>F&&F>-d&&(F=0)),x=(0|e*P)/P+","+(0|s*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+N+","+F+")",z&&we?this.t.setAttribute("transform","matrix("+x):O[Pe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+x):O[Pe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+N+","+F+")",void 0;if(_&&(d=1e-4,d>A&&A>-d&&(A=D=2e-5),d>M&&M>-d&&(M=D=2e-5),!B||S.z||S.rotationX||S.rotationY||(B=0)),C||S.skewX)C*=L,m=e=Math.cos(C),g=s=Math.sin(C),S.skewX&&(C-=S.skewX*L,m=Math.cos(C),g=Math.sin(C),"simple"===S.skewType&&(v=Math.tan(S.skewX*L),v=Math.sqrt(1+v*v),m*=v,g*=v,S.skewY&&(e*=v,s*=v))),i=-g,n=m;else{if(!(R||k||1!==D||B||z))return O[Pe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+N+"px,"+F+"px,"+X+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""),void 0;e=n=1,i=s=0}h=1,r=a=o=l=u=f=0,c=B?-1/B:0,p=S.zOrigin,d=1e-6,T=",",w="0",C=R*L,C&&(m=Math.cos(C),g=Math.sin(C),o=-g,u=c*-g,r=e*g,a=s*g,h=m,c*=m,e*=m,s*=m),C=k*L,C&&(m=Math.cos(C),g=Math.sin(C),v=i*m+r*g,y=n*m+a*g,l=h*g,f=c*g,r=i*-g+r*m,a=n*-g+a*m,h*=m,c*=m,i=v,n=y),1!==D&&(r*=D,a*=D,h*=D,c*=D),1!==M&&(i*=M,n*=M,l*=M,f*=M),1!==A&&(e*=A,s*=A,o*=A,u*=A),(p||z)&&(p&&(N+=r*-p,F+=a*-p,X+=h*-p+p),z&&(N+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,F+=S.yOrigin-(S.xOrigin*s+S.yOrigin*n)+S.yOffset),d>N&&N>-d&&(N=w),d>F&&F>-d&&(F=w),d>X&&X>-d&&(X=0)),x=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",x+=(d>e&&e>-d?w:e)+T+(d>s&&s>-d?w:s)+T+(d>o&&o>-d?w:o),x+=T+(d>u&&u>-d?w:u)+T+(d>i&&i>-d?w:i)+T+(d>n&&n>-d?w:n),k||R?(x+=T+(d>l&&l>-d?w:l)+T+(d>f&&f>-d?w:f)+T+(d>r&&r>-d?w:r),x+=T+(d>a&&a>-d?w:a)+T+(d>h&&h>-d?w:h)+T+(d>c&&c>-d?w:c)+T):x+=",0,0,0,0,1,0,",x+=N+T+F+T+X+T+(B?1+-X/B:1)+")",O[Pe]=x};h=ke.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,xe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,n,o,l){if(r._lastParsedTransform===l)return n;r._lastParsedTransform=l;var h,u,f,c,_,p,d,m,g,v,y=t._gsTransform,x=t.style,T=1e-6,w=be.length,b=l,P={},S="transformOrigin";if(l.display?(c=Q(t,"display"),x.display="block",h=ze(t,s,!0,l.parseTransform),x.display=c):h=ze(t,s,!0,l.parseTransform),r._transform=h,"string"==typeof b.transform&&Pe)c=B.style,c[Pe]=b.transform,c.display="block",c.position="absolute",X.body.appendChild(B),u=ze(B,null,!1),X.body.removeChild(B),u.perspective||(u.perspective=h.perspective),null!=b.xPercent&&(u.xPercent=ne(b.xPercent,h.xPercent)),null!=b.yPercent&&(u.yPercent=ne(b.yPercent,h.yPercent));else if("object"==typeof b){if(u={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,h.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,h.scaleY),scaleZ:ne(b.scaleZ,h.scaleZ),x:ne(b.x,h.x),y:ne(b.y,h.y),z:ne(b.z,h.z),xPercent:ne(b.xPercent,h.xPercent),yPercent:ne(b.yPercent,h.yPercent),perspective:ne(b.transformPerspective,h.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(c in m)b[c]=m[c];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(u.x=0,u.xPercent=ne(b.x,h.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(u.y=0,u.yPercent=ne(b.y,h.yPercent)),u.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:h.rotation,h.rotation,"rotation",P),Ce&&(u.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":h.rotationX||0,h.rotationX,"rotationX",P),u.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":h.rotationY||0,h.rotationY,"rotationY",P)),u.skewX=null==b.skewX?h.skewX:ae(b.skewX,h.skewX),u.skewY=null==b.skewY?h.skewY:ae(b.skewY,h.skewY),(f=u.skewY-h.skewY)&&(u.skewX+=f,u.rotation+=f)}for(Ce&&null!=b.force3D&&(h.force3D=b.force3D,d=!0),h.skewType=b.skewType||h.skewType||a.defaultSkewType,p=h.force3D||h.z||h.rotationX||h.rotationY||u.z||u.rotationX||u.rotationY||u.perspective,p||null==b.scale||(u.scaleZ=1);--w>-1;)i=be[w],_=u[i]-h[i],(_>T||-T>_||null!=b[i]||null!=F[i])&&(d=!0,n=new de(h,i,h[i],_,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return _=b.transformOrigin,h.svg&&(_||b.svgOrigin)&&(g=h.xOffset,v=h.yOffset,Le(t,re(_),u,b.svgOrigin,b.smoothOrigin),n=me(h,"xOrigin",(y?h:u).xOrigin,u.xOrigin,n,S),n=me(h,"yOrigin",(y?h:u).yOrigin,u.yOrigin,n,S),(g!==h.xOffset||v!==h.yOffset)&&(n=me(h,"xOffset",y?g:h.xOffset,h.xOffset,n,S),n=me(h,"yOffset",y?v:h.yOffset,h.yOffset,n,S)),_=we?null:"0px 0px"),(_||Ce&&p&&h.zOrigin)&&(Pe?(d=!0,i=Oe,_=(_||Q(t,i,s,!1,"50% 50%"))+"",n=new de(x,i,0,0,n,-1,S),n.b=x[i],n.plugin=o,Ce?(c=h.zOrigin,_=_.split(" "),h.zOrigin=(_.length>2&&(0===c||"0px"!==_[2])?parseFloat(_[2]):c)||0,n.xs0=n.e=_[0]+" "+(_[1]||"50%")+" 0px",n=new de(h,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=h.zOrigin):n.xs0=n.e=_):re(_+"",h)),d&&(r._transformType=h.svg&&we||!p&&3!==this._transformType?2:3),n},prefix:!0}),xe("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xe("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,f,c,_,p,d,m,g,v,y,x,T,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),f=u=Q(t,b[l],s,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),c=h=o[l],_=parseFloat(f),v=f.substr((_+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=r[i]||v),g!==v&&(x=Z(t,"borderLeft",_,v),T=Z(t,"borderTop",_,v),"%"===g?(f=100*(x/d)+"%",u=100*(T/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),f=x/w+"em",u=T/w+"em"):(f=x+"px",u=T+"px"),y&&(c=parseFloat(f)+p+g,h=parseFloat(u)+p+g)),a=ge(P,b[l],f+" "+u,c+" "+h,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),xe("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,f,c,_="background-position",p=s||H(t,null),m=this.format((p?d?p.getPropertyValue(_+"-x")+" "+p.getPropertyValue(_+"-y"):p.getPropertyValue(_):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(C,""),c&&"none"!==c)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",c),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(f=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*f+"px":100*(parseFloat(m)/f)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:re}),xe("backgroundSize",{defaultValue:"0 0",formatter:re}),xe("perspective",{defaultValue:"0px",prefix:!0}),xe("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xe("transformStyle",{prefix:!0}),xe("backfaceVisibility",{prefix:!0}),xe("userSelect",{prefix:!0}),xe("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),xe("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xe("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>d?(l=t.currentStyle,h=8>d?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),xe("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xe("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),xe("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",s,!1,"0px")+" "+Q(t,"borderTopStyle",s,!1,"solid")+" "+Q(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(fe)||["#000"])[0]}}),xe("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xe("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new de(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ee=function(t){var e,i=this.t,r=i.filter||Q(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=r.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(T,"opacity="+s))};xe("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(Q(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",s)&&0!==e&&(o=0),W?n=new de(l,"opacity",o,e-o,n):(n=new de(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ee),h&&(n=new de(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var Ye=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},We=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ye(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};xe("className",{parser:function(t,e,r,n,a,o,l){var h,u,f,c,_,p=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new de(t,r,0,0,a,2),a.setRatio=We,a.pr=-11,i=!0,a.b=p,u=K(t,s),f=t._gsClassPT){for(c={},_=f.data;_;)c[_.p]=1,_=_._next;
f.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=J(t,u,K(t),l,c),t.setAttribute("class",p),a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)}});var Ve=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],l[i]&&(l[i].parse===o?s=!0:i="transformOrigin"===i?Oe:l[i].p),Ye(a,i);s&&(Ye(a,Pe),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(xe("clearProps",{parser:function(t,e,r,s,n){return n=new de(t,r,0,0,n,2),n.setRatio=Ve,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ve=h.length;ve--;)Te(h[ve]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,u=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=H(t,""),n=this._overwriteProps;var h,_,d,m,g,v,y,x,T,b=t.style;if(f&&""===b.zIndex&&(h=Q(t,"zIndex",s),("auto"===h||""===h)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(m=b.cssText,h=K(t,s),b.cssText=m+";"+e,h=J(t,h,K(t)).difs,!W&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,b.cssText=m),this._firstPT=_=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(T=3===this._transformType,Pe?c&&(f=!0,""===b.zIndex&&(y=Q(t,"zIndex",s),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):b.zoom=1,d=_;d&&d._next;)d=d._next;x=new de(t,"transform",0,0,null,2),this._linkCSSP(x,null,d),x.setRatio=Pe?Ie:Be,x.data=this._transform||ze(t,s,!0),x.tween=o,x.pr=-1,n.pop()}if(i){for(;_;){for(v=_._next,d=m;d&&d.pr>_.pr;)d=d._next;(_._prev=d?d._prev:g)?_._prev._next=_:m=_,(_._next=d)?d._prev=_:g=_,_=v}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,o,h,f,c,_,p,d,m,g,v=t.style;for(a in e)_=e[a],o=l[a],o?i=o.parse(t,_,a,this,i,n,e):(c=Q(t,a,s)+"",m="string"==typeof _,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&P.test(_)?(m||(_=he(_),_=(_.length>3?"rgba(":"rgb(")+_.join(",")+")"),i=ge(v,a,c,_,!0,"transparent",i,0,n)):!m||-1===_.indexOf(" ")&&-1===_.indexOf(",")?(h=parseFloat(c),p=h||0===h?c.substr((h+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(h=ie(t,a,s),p="px"):"left"===a||"top"===a?(h=$(t,a,s),p="px"):(h="opacity"!==a?0:1,p="")),g=m&&"="===_.charAt(1),g?(f=parseInt(_.charAt(0)+"1",10),_=_.substr(2),f*=parseFloat(_),d=_.replace(x,"")):(f=parseFloat(_),d=m?_.replace(x,""):""),""===d&&(d=a in r?r[a]:p),_=f||0===f?(g?f+h:f)+d:e[a],p!==d&&""!==d&&(f||0===f)&&h&&(h=Z(t,a,h,p),"%"===d?(h/=Z(t,a,100,"%")/100,e.strictUnits!==!0&&(c=h+"%")):"em"===d||"rem"===d?h/=Z(t,a,1,d):"px"!==d&&(f=Z(t,a,f,d),d="px"),g&&(f||0===f)&&(_=f+h+d)),g&&(f+=h),!h&&0!==h||!f&&0!==f?void 0!==v[a]&&(_||"NaN"!=_+""&&null!=_)?(i=new de(v,a,f||h||0,0,i,-1,a,!1,0,c,_),i.xs0="none"!==_||"display"!==a&&-1===a.indexOf("Style")?_:c):j("invalid "+a+" tween value: "+e[a]):(i=new de(v,a,h,f-h,i,0,a,u!==!1&&("px"===d||"zIndex"===a),0,c,_),i.xs0=d)):i=ge(v,a,c,_,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},h._enableTransforms=function(t){this._transform=this._transform||ze(this._target,s,!0),this._transformType=this._transform.svg&&we||!t&&3!==this._transformType?2:3};var je=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var r=this._firstPT=new de(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=je,r.data=this},h._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ge=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Ge(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ge(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o,l=e.to(t,i,r),h=[l],u=[],f=[],c=[],_=e._internals.reservedProps;for(t=l._targets||l.target,Ge(t,u,c),l.render(i,!0,!0),Ge(t,f),l.render(0,!0,!0),l._enabled(!0),s=c.length;--s>-1;)if(n=J(c[s],u[s],f[s]),n.firstMPT){n=n.difs;for(a in r)_[a]&&(n[a]=r[a]);o={};for(a in n)o[a]=u[s][a];h.push(e.fromTo(c[s],i,o,n))}return h},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof defineSlider&&defineSlider.amd?defineSlider(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");


/*!
 * VERSION: beta 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(t){"use strict";var e=t.GreenSockGlobals||t,i=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},s=i("com.greensock.utils"),r=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=r(t)}else if(3===e||4===e)return t.nodeValue;return i},n=document,a=n.defaultView?n.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,l=function(t,e,i,s){var r;return(i=i||a(t,null))?(t=i.getPropertyValue(e.replace(o,"-$1").toLowerCase()),r=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,r=i[e]),s?r:parseInt(r,10)||0},h=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},_=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],h(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},u=")eefec303079ad17405c",c=/(?:<br>|<br\/>|<br \/>)/gi,f=n.all&&!n.addEventListener,p="<div style='position:relative;display:inline-block;"+(f?"*display:inline;*zoom:1;'":"'"),m=function(t){t=t||"";var e=-1!==t.indexOf("++"),i=1;return e&&(t=t.split("++").join("")),function(){return p+(t?" class='"+t+(e?i++:"")+"'>":">")}},d=s.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=d.selector(t)),!t)throw"cannot split a null element.";this.elements=h(t)?_(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},g=function(t,e,i){var s=t.nodeType;if(1===s||9===s||11===s)for(t=t.firstChild;t;t=t.nextSibling)g(t,e,i);else(3===s||4===s)&&(t.nodeValue=t.nodeValue.split(e).join(i))},v=function(t,e){for(var i=e.length;--i>-1;)t.push(e[i])},y=function(t,e,i,s,o){c.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(c,u));var h,_,f,p,d,y,T,w,b,x,P,S,k,C,R=r(t),O=e.type||e.split||"chars,words,lines",A=-1!==O.indexOf("lines")?[]:null,D=-1!==O.indexOf("words"),M=-1!==O.indexOf("chars"),L="absolute"===e.position||e.absolute===!0,F=L?"&#173; ":" ",z=-999,I=a(t),E=l(t,"paddingLeft",I),N=l(t,"borderBottomWidth",I)+l(t,"borderTopWidth",I),X=l(t,"borderLeftWidth",I)+l(t,"borderRightWidth",I),B=l(t,"paddingTop",I)+l(t,"paddingBottom",I),j=l(t,"paddingLeft",I)+l(t,"paddingRight",I),U=l(t,"textAlign",I,!0),Y=t.clientHeight,q=t.clientWidth,V="</div>",G=m(e.wordsClass),Q=m(e.charsClass),W=-1!==(e.linesClass||"").indexOf("++"),Z=e.linesClass,H=-1!==R.indexOf("<"),$=!0,K=[],J=[],te=[];for(W&&(Z=Z.split("++").join("")),H&&(R=R.split("<").join("{{LT}}")),h=R.length,p=G(),d=0;h>d;d++)if(T=R.charAt(d),")"===T&&R.substr(d,20)===u)p+=($?V:"")+"<BR/>",$=!1,d!==h-20&&R.substr(d+20,20)!==u&&(p+=" "+G(),$=!0),d+=19;else if(" "===T&&" "!==R.charAt(d-1)&&d!==h-1&&R.substr(d-20,20)!==u){for(p+=$?V:"",$=!1;" "===R.charAt(d+1);)p+=F,d++;(")"!==R.charAt(d+1)||R.substr(d+1,20)!==u)&&(p+=F+G(),$=!0)}else"{"===T&&"{{LT}}"===R.substr(d,6)?(p+=M?Q()+"{{LT}}"+"</div>":"{{LT}}",d+=5):p+=M&&" "!==T?Q()+T+"</div>":T;for(t.innerHTML=p+($?V:""),H&&g(t,"{{LT}}","<"),y=t.getElementsByTagName("*"),h=y.length,w=[],d=0;h>d;d++)w[d]=y[d];if(A||L)for(d=0;h>d;d++)b=w[d],f=b.parentNode===t,(f||L||M&&!D)&&(x=b.offsetTop,A&&f&&x!==z&&"BR"!==b.nodeName&&(_=[],A.push(_),z=x),L&&(b._x=b.offsetLeft,b._y=x,b._w=b.offsetWidth,b._h=b.offsetHeight),A&&(D!==f&&M||(_.push(b),b._x-=E),f&&d&&(w[d-1]._wordEnd=!0),"BR"===b.nodeName&&b.nextSibling&&"BR"===b.nextSibling.nodeName&&A.push([])));for(d=0;h>d;d++)b=w[d],f=b.parentNode===t,"BR"!==b.nodeName?(L&&(S=b.style,D||f||(b._x+=b.parentNode._x,b._y+=b.parentNode._y),S.left=b._x+"px",S.top=b._y+"px",S.position="absolute",S.display="block",S.width=b._w+1+"px",S.height=b._h+"px"),D?f&&""!==b.innerHTML?J.push(b):M&&K.push(b):f?(t.removeChild(b),w.splice(d--,1),h--):!f&&M&&(x=!A&&!L&&b.nextSibling,t.appendChild(b),x||t.appendChild(n.createTextNode(" ")),K.push(b))):A||L?(t.removeChild(b),w.splice(d--,1),h--):D||t.appendChild(b);if(A){for(L&&(P=n.createElement("div"),t.appendChild(P),k=P.offsetWidth+"px",x=P.offsetParent===t?0:t.offsetLeft,t.removeChild(P)),S=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(C=!L||!D&&!M,d=0;A.length>d;d++){for(_=A[d],P=n.createElement("div"),P.style.cssText="display:block;text-align:"+U+";position:"+(L?"absolute;":"relative;"),Z&&(P.className=Z+(W?d+1:"")),te.push(P),h=_.length,y=0;h>y;y++)"BR"!==_[y].nodeName&&(b=_[y],P.appendChild(b),C&&(b._wordEnd||D)&&P.appendChild(n.createTextNode(" ")),L&&(0===y&&(P.style.top=b._y+"px",P.style.left=E+x+"px"),b.style.top="0px",x&&(b.style.left=b._x-x+"px")));0===h&&(P.innerHTML="&nbsp;"),D||M||(P.innerHTML=r(P).split(String.fromCharCode(160)).join(" ")),L&&(P.style.width=k,P.style.height=b._h+"px"),t.appendChild(P)}t.style.cssText=S}L&&(Y>t.clientHeight&&(t.style.height=Y-B+"px",Y>t.clientHeight&&(t.style.height=Y+N+"px")),q>t.clientWidth&&(t.style.width=q-j+"px",q>t.clientWidth&&(t.style.width=q+X+"px"))),v(i,K),v(s,J),v(o,te)},T=d.prototype;T.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=this.elements.length;--e>-1;)this._originals[e]=this.elements[e].innerHTML,y(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},d.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(d.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},d.version="0.3.4"})(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof defineSlider&&defineSlider.amd?defineSlider(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery);

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.1.6 (04.12.2015)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
(function(jQuery,undefined){
  "use strict";
    
  jQuery.fn.extend({

    revolution: function(options) {

      // SET DEFAULT VALUES OF ITEM //
      var defaults = {
        delay:9000,
        responsiveLevels:4064,          // Single or Array for Responsive Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]          
        visibilityLevels:[2048,1024,778,480], // Single or Array for Responsive Visibility Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]         
        gridwidth:960,              // Single or Array i.e. 960 or [960, 840,760,460]
        gridheight:500,             // Single or Array i.e. 500 or [500, 450,400,350]
        minHeight:0,
        autoHeight:"off",         
        sliderType : "standard",        // standard, carousel, hero         
        sliderLayout : "auto",          // auto, fullwidth, fullscreen        

        fullScreenAutoWidth:"off",        // Turns the FullScreen Slider to be a FullHeight but auto Width Slider
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer:"",     // Size for FullScreen Slider minimising Calculated on the Container sizes
        fullScreenOffset:"0",         // Size for FullScreen Slider minimising          

        hideCaptionAtLimit:0,         // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
        hideAllCaptionAtLimit:0,        // Hide all The Captions if Width of Browser is less then this value
        hideSliderAtLimit:0,          // Hide the whole slider, and stop also functions if Width of Browser is less than this value                   
        disableProgressBar:"off",       // Hides Progress Bar if is set to "on"
        stopAtSlide:-1,             // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
        stopAfterLoops:-1,            // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
        shadow:0,               //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
        dottedOverlay:"none",         //twoxtwo, threexthree, twoxtwowhite, threexthreewhite
        startDelay:0,             // Delay before the first Animation starts.                   
        lazyType : "smart",           //full, smart, single
        spinner:"spinner0",
        shuffle:"off",              // Random Order of Slides,

        
        viewPort:{
          enable:false,           // if enabled, slider wait with start or wait at first slide.
          outof:"wait",           // wait,pause           
          visible_area:"60%"          
        },

        fallbacks:{
          isJoomla:false,
          panZoomDisableOnMobile:"off",
          simplifyAll:"on",
          nextSlideOnWindowFocus:"off", 
          disableFocusListener:true           
        },
        
        parallax : {
          type : "off",           // off, mouse, scroll, mouse+scroll
          levels: [10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
          origo:"enterpoint",       // slidercenter or enterpoint
          speed:400,
          bgparallax : "on",
          opacity:"on",
          disable_onmobile:"off",
          ddd_shadow:"on",
          ddd_bgfreeze:"off",
          ddd_overflow:"visible",
          ddd_layer_overflow:"visible",
          ddd_z_correction:65,
          ddd_path:"mouse"
          
        },
        
        carousel : {
          horizontal_align : "center",
          vertical_align : "center",
          infinity : "on",
          space : 0,
          maxVisibleItems : 3,            
          stretch:"off",            
          fadeout:"on",           
          maxRotation:0,            
          minScale:0,
          vary_fade:"off",
          vary_rotation:"on",
          vary_scale:"off",           
          border_radius:"0px",
          padding_top:0,
          padding_bottom:0
        },

        navigation : {
          keyboardNavigation:"on",  
          keyboard_direction:"horizontal",    //  horizontal - left/right arrows,  vertical - top/bottom arrows
          mouseScrollNavigation:"off",      // on, off, carousel          
          onHoverStop:"on",           // Stop Banner Timet at Hover on Slide on/off

          touch:{
            touchenabled:"off",           // Enable Swipe Function : on/off
            swipe_treshold : 75,          // The number of pixels that the user must move their finger by before it is considered a swipe.
            swipe_min_touches : 1,          // Min Finger (touch) used for swipe              
            drag_block_vertical:false,        // Prevent Vertical Scroll during Swipe
            swipe_direction:"horizontal"
          },
          arrows: {
            style:"",
            enable:false,
            hide_onmobile:false,              
            hide_onleave:true,
            hide_delay:200,
            hide_delay_mobile:1200,
            hide_under:0,
            hide_over:9999,
            tmp:'',
            left : {                              
              h_align:"left",
              v_align:"center",
              h_offset:20,
              v_offset:0,               
            },
            right : {
              h_align:"right",
              v_align:"center",
              h_offset:20,
              v_offset:0
            }
          },
          bullets: {
            style:"",
            enable:false,
            hide_onmobile:false,              
            hide_onleave:true,
            hide_delay:200,
            hide_delay_mobile:1200,
            hide_under:0,
            hide_over:9999,
            direction:"horizontal",
            h_align:"left",
            v_align:"center",
            space:0,
            h_offset:20,
            v_offset:0,
            tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
          },
          thumbnails: {
            style:"",
            enable:false,
            width:100,
            height:50,
            min_width:100,
            wrapper_padding:2,
            wrapper_color:"#f5f5f5",
            wrapper_opacity:1,
            tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
            visibleAmount:5,
            hide_onmobile:false,              
            hide_onleave:true,
            hide_delay:200,
            hide_delay_mobile:1200,
            hide_under:0,
            hide_over:9999,
            direction:"horizontal",
            span:false,
            position:"inner",             
            space:2,
            h_align:"left",
            v_align:"center",
            h_offset:20,
            v_offset:0
          },
          tabs: {
            style:"",
            enable:false,
            width:100,
            min_width:100,
            height:50,
            wrapper_padding:10,
            wrapper_color:"#f5f5f5",
            wrapper_opacity:1,
            tmp:'<span class="tp-tab-image"></span>',
            visibleAmount:5,
            hide_onmobile:false,              
            hide_onleave:true,
            hide_delay:200,
            hide_delay_mobile:1200,
            hide_under:0,
            hide_over:9999,
            direction:"horizontal",
            span:false,
            space:0,
            position:"inner",             
            h_align:"left",
            v_align:"center",
            h_offset:20,
            v_offset:0
          }
        },          
        extensions:"extensions/",     //example extensions/ or extensions/source/
        extensions_suffix:".min.js",
        debugMode:false
      };
        
      // Merge of Defaults                  
      options = jQuery.extend(true,{},defaults, options);
      
      return this.each(function() {       
        
        var c = jQuery(this);
        //REMOVE SLIDES IF SLIDER IS HERO
        if (options.sliderType=="hero") {
          c.find('>ul>li').each(function(i) {
            if (i>0) jQuery(this).remove();
          })
        }
        options.jsFileLocation = options.jsFileLocation || getScriptLocation("themepunch.revolution.min.js");           
        options.jsFileLocation = options.jsFileLocation + options.extensions;
        options.scriptsneeded = getNeededScripts(options,c);
        options.curWinRange = 0;  

          if (options.navigation!=undefined && options.navigation.touch!=undefined) 
               options.navigation.touch.swipe_min_touches = options.navigation.touch.swipe_min_touches >5 ? 1 : options.navigation.touch.swipe_min_touches;
   


        jQuery(this).on("scriptsloaded",function() {
          if (options.modulesfailing ) {
            c.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+options.errorm+'</div>').show();
            return false;
          }

          // CHECK FOR MIGRATION
          if (_R.migration!=undefined) options = _R.migration(c,options);     
          punchgs.force3D = true;
          if (options.simplifyAll!=="on") punchgs.TweenLite.lagSmoothing(1000,16);                          
          prepareOptions(c,options);
          initSlider(c,options);
        });           

        waitForScripts(c,options.scriptsneeded);
      })
    },

    // Remove a Slide from the Slider
    revremoveslide : function(sindex) {

      return this.each(function() { 
        
        var container=jQuery(this);
        if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
          var bt = container.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');
          if (opt && opt.li.length>0) {
            if (sindex>0 || sindex<=opt.li.length) {
              
              var li = jQuery(opt.li[sindex]),
                ref = li.data("index"),
                nextslideafter = false;
                    
              opt.slideamount = opt.slideamount-1;                    
              removeNavWithLiref('.tp-bullet',ref,opt);
              removeNavWithLiref('.tp-tab',ref,opt);
              removeNavWithLiref('.tp-thumb',ref,opt);  
              if (li.hasClass('active-revslide')) 
                nextslideafter = true;                          
              li.remove();
              opt.li = removeArray(opt.li,sindex);  
              if (opt.carousel && opt.carousel.slides)
                opt.carousel.slides = removeArray(opt.carousel.slides,sindex)
              opt.thumbs = removeArray(opt.thumbs,sindex);  
              if (_R.updateNavIndexes) _R.updateNavIndexes(opt); 
              if (nextslideafter) container.revnext();
                
            }
          }
        }
      });
      
    },

    // Add a New Call Back to some Module
    revaddcallback: function(callback) {
      return this.each(function() {           
        var container=jQuery(this);
        if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
          var bt = container.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');
          if (opt.callBackArray === undefined)
            opt.callBackArray = new Array();
          opt.callBackArray.push(callback);           
        }
      })
    },

    // Get Current Parallax Proc
    revgetparallaxproc : function() {   
      var container=jQuery(this);
      if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
        var bt = container.parent().find('.tp-bannertimer'),
          opt = bt.data('opt');
        return opt.scrollproc;
      }
      
    },

    // ENABLE DEBUG MODE
    revdebugmode: function() {
      return this.each(function() {           
        var container=jQuery(this);
        if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
          var bt = container.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');
            opt.debugMode = true;
          containerResized(container,opt);
        }
      })
    },

    // METHODE SCROLL
    revscroll: function(oy) {
          return this.each(function() {
            var container=jQuery(this);
            if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0)
              jQuery('body,html').animate({scrollTop:(container.offset().top+(container.height())-oy)+"px"},{duration:400});
          })
        },

    // METHODE PAUSE
    revredraw: function(oy) {
          return this.each(function() {
            
            var container=jQuery(this);
            if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
              var bt = container.parent().find('.tp-bannertimer');
              var opt = bt.data('opt');
              containerResized(container,opt);                                  
            }
          })
        },
    // METHODE PAUSE
    revkill: function(oy) {

            var self = this,
              container=jQuery(this);

              punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements);
              if (_R.endMoveCaption)
                punchgs.TweenLite.killDelayedCallsTo(_R.endMoveCaption);

            if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {

              container.data('conthover',1);
              container.data('conthover-changed',1);
              container.trigger('revolution.slide.onpause');
              var bt = container.parent().find('.tp-bannertimer'),
                opt = bt.data('opt');
              opt.tonpause = true;
              container.trigger('stoptimer');

              punchgs.TweenLite.killTweensOf(container.find('*'),false);
              punchgs.TweenLite.killTweensOf(container,false);
              container.unbind('hover, mouseover, mouseenter,mouseleave, resize');
              var resizid = "resize.revslider-"+container.attr('id');
              jQuery(window).off(resizid);
              container.find('*').each(function() {
                  var el = jQuery(this);

                  el.unbind('on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer');
                  el.off('on, hover, mouseenter,mouseleave,mouseover, resize');
                  el.data('mySplitText',null);
                  el.data('ctl',null);
                  if (el.data('tween')!=undefined)
                    el.data('tween').kill();
                  if (el.data('kenburn')!=undefined)
                    el.data('kenburn').kill();
                  if (el.data('timeline_out')!=undefined)                     
                    el.data('timeline_out').kill(); 
                  if (el.data('timeline')!=undefined)                     
                    el.data('timeline').kill();                         
                    
                  el.remove();
                  el.empty();
                  el=null;
              })


              punchgs.TweenLite.killTweensOf(container.find('*'),false);
              punchgs.TweenLite.killTweensOf(container,false);
              bt.remove();
              try{container.closest('.forcefullwidth_wrapper_tp_banner').remove();} catch(e) {}
              try{container.closest('.rev_slider_wrapper').remove()} catch(e) {}
              try{container.remove();} catch(e) {}
              container.empty();
              container.html();
              container = null;

              opt = null;
              delete(self.c);
              delete(self.opt);

              return true;
            } else {
              return false;
            }


        },

    // METHODE PAUSE
    revpause: function() {
      return this.each(function() {
        var c=jQuery(this);
        if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
          c.data('conthover',1);
          c.data('conthover-changed',1);
          c.trigger('revolution.slide.onpause');
          var bt = c.parent().find('.tp-bannertimer');
          var opt = bt.data('opt');
          opt.tonpause = true;
          c.trigger('stoptimer');
        }
      })
    },

    // METHODE RESUME
    revresume: function() {
      return this.each(function() {
        var c=jQuery(this);
        if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
          c.data('conthover',0);
          c.data('conthover-changed',1);
          c.trigger('revolution.slide.onresume');
          var bt = c.parent().find('.tp-bannertimer');
          var opt = bt.data('opt');
          opt.tonpause = false;         
          c.trigger('starttimer');
        }
      })
    },

    // METHODE NEXT
    revnext: function() {
      return this.each(function() {
        // CATCH THE CONTAINER
        var c=jQuery(this);
        if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
          var bt = c.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');         
          _R.callingNewSlide(opt,c,1);
        }
      })
    },

    // METHODE RESUME
    revprev: function() {
      return this.each(function() {
        // CATCH THE CONTAINER
        var c=jQuery(this);
        if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
          var bt = c.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');         
          _R.callingNewSlide(opt,c,-1);
        }
      })
    },

    // METHODE LENGTH
    revmaxslide: function() {
      // CATCH THE CONTAINER
      return jQuery(this).find('.tp-revslider-mainul >li').length;
    },


    // METHODE CURRENT
    revcurrentslide: function() {
      // CATCH THE CONTAINER
      var c=jQuery(this);
      if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
        var bt = c.parent().find('.tp-bannertimer');
        var opt = bt.data('opt');
        return parseInt(opt.act,0)+1;
      }
    },

    // METHODE CURRENT
    revlastslide: function() {
      // CATCH THE CONTAINER
      return jQuery(this).find('.tp-revslider-mainul >li').length;
    },


    // METHODE JUMP TO SLIDE
    revshowslide: function(slide) {
      return this.each(function() {
        // CATCH THE CONTAINER
        var c=jQuery(this);
        if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
          var bt = c.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');             
          _R.callingNewSlide(opt,c,"to"+(slide-1));
        }
      })
    },
    revcallslidewithid: function(slide) {
      return this.each(function() {
        // CATCH THE CONTAINER
        var c=jQuery(this);
        if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
          var bt = c.parent().find('.tp-bannertimer'),
            opt = bt.data('opt');                   
          _R.callingNewSlide(opt,c,slide);
        }
      })
    }   
});



//////////////////////////////////////////////////////////////
// -  REVOLUTION FUNCTION EXTENSIONS FOR GLOBAL USAGE  -  //  
//////////////////////////////////////////////////////////////
var _R = jQuery.fn.revolution;

jQuery.extend(true, _R, {
  
  simp : function(a,b,basic) {
    var c = Math.abs(a) - (Math.floor(Math.abs(a / b))*b);                                      
    if (basic)
      return c;
    else 
      return a<0 ? -1*c : c;
  },

  //  - IS IOS VERSION OLDER THAN 5 ??  
  iOSVersion : function() {
    var oldios = false;
    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
          if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
            oldios = true;
      }
      } else {
         oldios = false;
      }
    return oldios;
  },


  //  - CHECK IF BROWSER IS IE    -   
  isIE : function( version, comparison ){
      var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
      $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
      var ieTest = $div.find('a').length;
      $div.remove();
      return ieTest;
  },

  //  - IS MOBILE ?? 
  is_mobile : function() {
      var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
    var ismobile=false;
      for(var i in agents) {
  
        if (navigator.userAgent.split(agents[i]).length>1) {
              ismobile = true;
  
            }
      }
      return ismobile;        
  },

  // -  CALL BACK HANDLINGS - //
   callBackHandling : function(opt,type,position) {
    try{
      if (opt.callBackArray)
        jQuery.each(opt.callBackArray,function(i,c) {       
          if (c) {
            if (c.inmodule && c.inmodule === type)
              if (c.atposition && c.atposition === position)
                if (c.callback) 
                  c.callback.call();                      
          }
        });
    } catch(e) {
      console.log("Call Back Failed");
    }
  },

  get_browser : function(){
      var N=navigator.appName, ua=navigator.userAgent, tem;
      var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
      M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
      return M[0];
    },

  get_browser_version  : function(){
      var N=navigator.appName, ua=navigator.userAgent, tem;
      var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
      M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
      return M[1];
    },

    // GET THE HORIZONTAL OFFSET OF SLIDER BASED ON THE THU`MBNAIL AND TABS LEFT AND RIGHT SIDE
  getHorizontalOffset : function(container,side) {
    var thumbloff = gWiderOut(container,'.outer-left'),
      thumbroff = gWiderOut(container,'.outer-right');
              
    switch (side) {
      case "left":
        return thumbloff;
      break;
      case "right":
        return thumbroff;
      break;
      case "both":
        return thumbloff+thumbroff;
      break;
    }
  },


  //  - CALLING THE NEW SLIDE   - //    
  callingNewSlide : function(opt,container,direction) {
    
    
    var aindex = container.find('.next-revslide').length>0 ? container.find('.next-revslide').index() : container.find('.processing-revslide').length>0 ? container.find('.processing-revslide').index() : container.find('.active-revslide').index(),
      nindex = 0;
  
    container.find('.next-revslide').removeClass("next-revslide");
    

    // SET NEXT DIRECTION
    if (direction && jQuery.isNumeric(direction) || direction.match(/to/g)) {     
      if (direction===1 || direction === -1) {
        nindex = aindex + direction;
        nindex = nindex<0 ? opt.slideamount-1 : nindex>=opt.slideamount ? 0 : nindex;           
      } else {              

        direction=jQuery.isNumeric(direction) ? direction : parseInt(direction.split("to")[1],0);
        nindex = direction<0 ? 0 : direction>opt.slideamount-1 ? opt.slideamount-1 : direction;           
      }
      container.find('.tp-revslider-slidesli:eq('+nindex+')').addClass("next-revslide");
    } else    
    if (direction) {
      
      container.find('.tp-revslider-slidesli').each(function() {
        var li=jQuery(this);        
        if (li.data('index')===direction) li.addClass("next-revslide");                 
      })      
    }

    
    nindex = container.find('.next-revslide').index();        
    container.trigger("revolution.nextslide.waiting");
        

    if (nindex !== aindex && nindex!=-1)
      swapSlide(container,opt); 
    else
      container.find('.next-revslide').removeClass("next-revslide");
  },

  slotSize : function(img,opt) {
    opt.slotw=Math.ceil(opt.width/opt.slots);

    if (opt.sliderLayout=="fullscreen")
      opt.sloth=Math.ceil(jQuery(window).height()/opt.slots);
    else
      opt.sloth=Math.ceil(opt.height/opt.slots);

    if (opt.autoHeight=="on" && img!==undefined && img!=="")
      opt.sloth=Math.ceil(img.height()/opt.slots);


  },

  setSize : function(opt) {
  
    var ofh = (opt.top_outer || 0) + (opt.bottom_outer || 0),
      cpt = parseInt((opt.carousel.padding_top||0),0),
      cpb = parseInt((opt.carousel.padding_bottom||0),0),
      maxhei = opt.gridheight[opt.curWinRange];
      
    maxhei = maxhei<opt.minHeight ? opt.minHeight : maxhei;   
    if (opt.sliderLayout=="fullwidth" && opt.autoHeight=="off") punchgs.TweenLite.set(opt.c,{maxHeight:maxhei+"px"}); 
    opt.c.css({marginTop:cpt,marginBottom:cpb});          
    opt.width=opt.ul.width();
    opt.height=opt.ul.height(); 
    setScale(opt);
      
    opt.height = Math.round(opt.gridheight[opt.curWinRange] * (opt.width/opt.gridwidth[opt.curWinRange]));

    if (opt.height>opt.gridheight[opt.curWinRange] && opt.autoHeight!="on") opt.height=opt.gridheight[opt.curWinRange];

    if (opt.sliderLayout=="fullscreen" || opt.infullscreenmode) {
      opt.height = opt.bw * opt.gridheight[opt.curWinRange];
      var cow = opt.c.parent().width();
      var coh = jQuery(window).height();

      if (opt.fullScreenOffsetContainer!=undefined) {
        try{
          var offcontainers = opt.fullScreenOffsetContainer.split(",");
          if (offcontainers)
            jQuery.each(offcontainers,function(index,searchedcont) {
              coh = jQuery(searchedcont).length>0 ? coh - jQuery(searchedcont).outerHeight(true) : coh;                   
            });
        } catch(e) {}
        try{
          if (opt.fullScreenOffset.split("%").length>1 && opt.fullScreenOffset!=undefined && opt.fullScreenOffset.length>0) 
              coh = coh - (jQuery(window).height()* parseInt(opt.fullScreenOffset,0)/100);
          else
          if (opt.fullScreenOffset!=undefined && opt.fullScreenOffset.length>0)
              coh = coh - parseInt(opt.fullScreenOffset,0);               
        } catch(e) {}
      }

      coh = coh<opt.minHeight ? opt.minHeight : coh;  
      coh = coh - ofh;      
      opt.c.parent().height(coh);

      opt.c.closest('.rev_slider_wrapper').height(coh);
      opt.c.css({'height':'100%'});

      opt.height=coh;
      if (opt.minHeight!=undefined && opt.height<opt.minHeight)
        opt.height = opt.minHeight;
    } else {

      if (opt.minHeight!=undefined && opt.height<opt.minHeight)
        opt.height = opt.minHeight;     
      opt.c.height(opt.height);
    }
    var si = {  height:(cpt+cpb+ofh+opt.height)};     
    opt.c.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css(si);
    opt.c.closest('.rev_slider_wrapper').css(si);   
    setScale(opt);    
  },

  enterInViewPort : function(opt) {
    // START COUNTER IF VP ENTERED, AND COUNTDOWN WAS NOT ON YET
    if (opt.waitForCountDown) {
      countDown(opt.c,opt);   
      opt.waitForCountDown=false;     
    }
    // START FIRST SLIDE IF NOT YET STARTED AND VP ENTERED
    if (opt.waitForFirstSlide) {
      swapSlide(opt.c,opt);   
      opt.waitForFirstSlide=false;      
    }     

    if (opt.sliderlaststatus == "playing" || opt.sliderlaststatus==undefined) {
      opt.c.trigger("starttimer");
    }     

    
    if (opt.lastplayedvideos != undefined && opt.lastplayedvideos.length>0) {
      
      jQuery.each(opt.lastplayedvideos,function(i,_nc) {
        
        _R.playVideo(_nc,opt);
      });
    } 
  },

  leaveViewPort : function(opt) {   
    opt.sliderlaststatus = opt.sliderstatus;
    opt.c.trigger("stoptimer");   
    if (opt.playingvideos != undefined && opt.playingvideos.length>0) { 
      opt.lastplayedvideos = jQuery.extend(true,[],opt.playingvideos);
      if (opt.playingvideos)
        jQuery.each(opt.playingvideos,function(i,_nc) {       
          if (_R.stopVideo) _R.stopVideo(_nc,opt);
        });
    }
  },

  unToggleState : function(a) {     
    if (a!=undefined && a.length>0)
      jQuery.each(a,function(i,layer) {
        layer.removeClass("rs-toggle-content-active");
      });   
  },

  toggleState : function(a) {
    if (a!=undefined && a.length>0)
      jQuery.each(a,function(i,layer) {
        layer.addClass("rs-toggle-content-active");
      });
  },
  lastToggleState : function(a) {
    var state = 0;
    if (a!=undefined && a.length>0)
      jQuery.each(a,function(i,layer) {
        state = layer.hasClass("rs-toggle-content-active");
      });
    return state;
  }

});


var _ISM = _R.is_mobile();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
var removeArray = function(arr,i) {
        var newarr = [];
        jQuery.each(arr,function(a,b) {
          if (a!=i) newarr.push(b);
        })
        return newarr;
      }

var removeNavWithLiref = function(a,ref,opt) {
  opt.c.find(a).each(function() {
    var a = jQuery(this);
    if (a.data('liref')===ref)
      a.remove();
  })
}


var lAjax = function(s,o) {
  if (jQuery('body').data(s)) return false;
  if (o.filesystem) {
    if (o.errorm===undefined) 
      o.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:";
    console.warn('Local Filesystem detected !');
    o.errorm = o.errorm+'<br>&lt;script type="text/javascript" src="'+o.jsFileLocation+s+o.extensions_suffix+'"&gt;&lt;/script&gt;';
    console.warn(o.jsFileLocation+s+o.extensions_suffix+' could not be loaded !');
    console.warn('Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document.');
    console.log(" ");
    o.modulesfailing = true;
    return false;
  }
  jQuery.ajax({
    url:o.jsFileLocation+s+o.extensions_suffix,
    'dataType':'script',
    'cache':true,
    "error":function(e) {
      console.warn("Slider Revolution 5.0 Error !")
      console.error("Failure at Loading:"+s+o.extensions_suffix+" on Path:"+o.jsFileLocation)
      console.info(e);
    }     
  });
  jQuery('body').data(s,true);
}

var getNeededScripts = function(o,c) {  
  var n = new Object(),
    _n = o.navigation;
  
  n.kenburns = false;
  n.parallax = false;
  n.carousel = false;
  n.navigation = false;
  n.videos = false;
  n.actions = false;
  n.layeranim = false;
  n.migration = false;


  // MIGRATION EXTENSION
  if (!c.data('version') || !c.data('version').toString().match(/5./gi)) {
    n.kenburns = true;
    n.parallax = true;
    n.carousel = false;
    n.navigation = true;
    n.videos = true;
    n.actions = true;
    n.layeranim = true;
    n.migration = true;   
  }
  else {
    // KEN BURN MODUL
    c.find('img').each(function(){      
      if (jQuery(this).data('kenburns')=="on") n.kenburns = true;
    });           

    // NAVIGATION EXTENSTION
    if (o.sliderType =="carousel" || _n.keyboardNavigation=="on" || _n.mouseScrollNavigation=="on" || _n.touch.touchenabled=="on" || _n.arrows.enable || _n.bullets.enable || _n.thumbnails.enable || _n.tabs.enable )
      n.navigation = true;
    
    // LAYERANIM, VIDEOS, ACTIONS EXTENSIONS
    c.find('.tp-caption, .tp-static-layer, .rs-background-video-layer').each(function(){
      var _nc = jQuery(this);
      if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0))
        n.videos = true;
      if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0))
        n.videos = true;    
      if (_nc.data('actions')!==undefined) 
        n.actions = true;
      n.layeranim = true;
    });

    c.find('li').each(function() {
      if (jQuery(this).data('link') && jQuery(this).data('link')!=undefined) {
        n.layeranim = true;
        n.actions = true;
      }
    })

    // VIDEO EXTENSION
    if (!n.videos && (c.find('.rs-background-video-layer').length>0 || c.find(".tp-videolayer").length>0 || c.find('iframe').length>0 || c.find('video').length>0))
      n.videos = true;

    // VIDEO EXTENSION
    if (o.sliderType =="carousel")
      n.carousel = true;

    

    if (o.parallax.type!=="off" || o.viewPort.enable || o.viewPort.enable=="true")
      n.parallax = true;
  }
  
  if (o.sliderType=="hero") {
    n.carousel = false;
    n.navigation = false;
  }
  
  if (window.location.href.match(/file:/gi)) {
    n.filesystem = true;
    o.filesystem = true;
  }

  // LOAD THE NEEDED LIBRARIES
  if (n.videos && typeof _R.isVideoPlaying=='undefined') lAjax('revolution.extension.video',o);
  if (n.carousel && typeof _R.prepareCarousel=='undefined') lAjax('revolution.extension.carousel',o);               
  if (!n.carousel && typeof _R.animateSlide=='undefined') lAjax('revolution.extension.slideanims',o);               
  if (n.actions && typeof _R.checkActions=='undefined') lAjax('revolution.extension.actions',o);            
  if (n.layeranim && typeof _R.handleStaticLayers=='undefined') lAjax('revolution.extension.layeranimation',o);           
  if (n.kenburns && typeof _R.stopKenBurn=='undefined') lAjax('revolution.extension.kenburn',o); 
  if (n.navigation && typeof _R.createNavigation=='undefined') lAjax('revolution.extension.navigation',o);          
  if (n.migration && typeof _R.migration=='undefined') lAjax('revolution.extension.migration',o);         
  if (n.parallax && typeof _R.checkForParallax=='undefined') lAjax('revolution.extension.parallax',o);          
  
  

  return n;
}

///////////////////////////////////
//   -  WAIT FOR SCRIPT LOADS  - //
/////////////////////////////////// 
var waitForScripts = function(c,n) {
  // CHECK KEN BURN DEPENDENCIES
   
  if (n.filesystem || 
    (typeof punchgs !== 'undefined' &&
    (!n.kenburns || (n.kenburns && typeof _R.stopKenBurn !== 'undefined')) &&
    (!n.navigation || (n.navigation && typeof _R.createNavigation !== 'undefined')) &&
    (!n.carousel || (n.carousel && typeof _R.prepareCarousel !== 'undefined')) &&
    (!n.videos || (n.videos && typeof _R.resetVideo !== 'undefined')) &&
    (!n.actions || (n.actions && typeof _R.checkActions !== 'undefined')) &&
    (!n.layeranim || (n.layeranim && typeof _R.handleStaticLayers !== 'undefined')) &&
    (!n.migration || (n.migration && typeof _R.migration !== 'undefined')) &&
    (!n.parallax || (n.parallax && typeof _R.checkForParallax !== 'undefined')) &&
    (n.carousel || (!n.carousel && typeof _R.animateSlide !== 'undefined'))
     ))
    c.trigger("scriptsloaded");
  else      
    setTimeout(function() {
      waitForScripts(c,n);
    },50);
    
}

//////////////////////////////////
//  - GET SCRIPT LOCATION - //
//////////////////////////////////
var getScriptLocation = function(a) {

  var srcexp = new RegExp("themepunch.revolution.min.js","gi"),
    ret = "";
  jQuery("script").each(function() {
    var src = jQuery(this).attr("src");
    if (src && src.match(srcexp))                 
      ret = src;              
  });
  
  ret = ret.replace('jquery.themepunch.revolution.min.js', ''); 
  ret = ret.replace('jquery.themepunch.revolution.js', '');   
  ret = ret.split("?")[0];    
  return ret;
}

//////////////////////////////////////////
//  - ADVANCED RESPONSIVE LEVELS  - //
//////////////////////////////////////////
var setCurWinRange = function(opt,vis) {    
  var curlevel = 0,
    curwidth = 9999,
    lastmaxlevel = 0,
    lastmaxid = 0,
    curid = 0,
    winw = jQuery(window).width(),
    l = vis && opt.responsiveLevels==9999 ? opt.visibilityLevels : opt.responsiveLevels;
  
   if (l && l.length)
    jQuery.each(l,function(index,level) {       
      if (winw<level) {
        if (lastmaxlevel==0 || lastmaxlevel>level) {          
          curwidth = level;
          curid = index;
          lastmaxlevel = level;
        }
      }
    
    if (winw>level && lastmaxlevel<level) {
      lastmaxlevel = level;
      lastmaxid = index;
    }
  });

  if (lastmaxlevel<curwidth) 
    curid = lastmaxid;    

  
  if (!vis)
    opt.curWinRange = curid;        
  else
    opt.forcedWinRange = curid;

  
}




//////////////////////////////////////////
//  - INITIALISATION OF OPTIONS   - //
//////////////////////////////////////////
var prepareOptions = function(container,opt) {    
  opt.carousel.maxVisibleItems = opt.carousel.maxVisibleItems < 1 ? 999 : opt.carousel.maxVisibleItems; // === 1 ? 2 : opt.carousel.maxVisibleItems;
  opt.carousel.vertical_align = opt.carousel.vertical_align === "top" ? "0%" : opt.carousel.vertical_align==="bottom" ? "100%" : "50%";
}

var gWiderOut = function(c,cl) {
  var r = 0;
  c.find(cl).each(function() {
    var a = jQuery(this);
    if (!a.hasClass("tp-forcenotvisible") && r<a.outerWidth())
      r = a.outerWidth();     
  });
  return r;
}




//////////////////////////////////////////
//  - INITIALISATION OF SLIDER  - //
//////////////////////////////////////////
var initSlider = function (container,opt) {
  if (container==undefined) return false;

  // CHECK FOR ALTERNATIVE IMAGE, AND IFRAM EXIST, AND WE ARE IN IE8, MOBILE, DRAW IT SIMPLE
  if (container.data('aimg')!=undefined) 
    if ((container.data('aie8')=="enabled" && _R.isIE(8)) || (container.data('amobile')=="enabled" && _ISM))
      container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">');
  
  // PREPRARE SOME CLASSES AND VARIABLES
  container.find('>ul').addClass("tp-revslider-mainul");

  
  // CREATE SOME DEFAULT OPTIONS FOR LATER      
  opt.c=container;
  opt.ul = container.find('.tp-revslider-mainul');

   // Remove Not Needed Slides for Mobile Devices
    opt.ul.find('>li').each(function(i) {
      var li = jQuery(this);      
      if (li.data('hideslideonmobile')=="on" && _ISM) li.remove();
    });


  opt.cid = container.attr('id');
  opt.ul.css({visibility:"visible"});
    opt.slideamount = opt.ul.find('>li').length;
    opt.slayers = container.find('.tp-static-layers');

   


    // Save Original Index of Slides
    opt.ul.find('>li').each(function(i) {
      jQuery(this).data('originalindex',i);
    });
  
  // RANDOMIZE THE SLIDER SHUFFLE MODE
  if (opt.shuffle=="on") {    
    var fsa = new Object,
      fli = opt.ul.find('>li:first-child');
    fsa.fstransition = fli.data('fstransition');
    fsa.fsmasterspeed = fli.data('fsmasterspeed');
    fsa.fsslotamount = fli.data('fsslotamount');

    for (var u=0;u<opt.slideamount;u++) {
      var it = Math.round(Math.random()*opt.slideamount);     
      opt.ul.find('>li:eq('+it+')').prependTo(opt.ul);      
    }

    var newfli = opt.ul.find('>li:first-child');
    newfli.data('fstransition',fsa.fstransition);
    newfli.data('fsmasterspeed',fsa.fsmasterspeed);
    newfli.data('fsslotamount',fsa.fsslotamount);
     // COLLECT ALL LI INTO AN ARRAY
    opt.li = opt.ul.find('>li');
  }


  opt.li = opt.ul.find('>li');
  opt.thumbs = new Array();   
  
  opt.slots=4;
  opt.act=-1;         
  opt.firststart=1;
  opt.loadqueue = new Array();
  opt.syncload = 0;
  opt.conw = container.width();
  opt.conh = container.height();

  if (opt.responsiveLevels.length>1) 
    opt.responsiveLevels[0] = 9999;
  else
    opt.responsiveLevels = 9999;
  
  // RECORD THUMBS AND SET INDEXES
  jQuery.each(opt.li,function(index,li) {
    var li = jQuery(li),
      img = li.find('.rev-slidebg') || li.find('img').first(),
      i = 0;    
    
  
    li.addClass("tp-revslider-slidesli");
    if (li.data('index')===undefined) li.data('index','rs-'+Math.round(Math.random()*999999));

    var obj = new Object;
    obj.params = new Array();
    
    obj.id = li.data('index');
    obj.src = li.data('thumb')!==undefined ? li.data('thumb') : img.data('lazyload') !== undefined ? img.data('lazyload') : img.attr('src');          
    if (li.data('title') !== undefined) obj.params.push({from:RegExp("\\{\\{title\\}\\}","g"), to:li.data("title")})    
    if (li.data('description') !== undefined) obj.params.push({from:RegExp("\\{\\{description\\}\\}","g"), to:li.data("description")})    
    for (var i=1;i<=10;i++) {
      if (li.data("param"+i)!==undefined) 
        obj.params.push({from:RegExp("\\{\\{param"+i+"\\}\\}","g"), to:li.data("param"+i)})
    }     
    opt.thumbs.push(obj); 

    li.data('origindex',li.index());
    
    // IF LINK ON SLIDE EXISTS, NEED TO CREATE A PROPER LAYER FOR IT.
    if (li.data('link')!=undefined) {
      var link = li.data('link'),
        target= li.data('target') || "_self",
        zindex= li.data('slideindex')==="back" ? 0 : 60,          
        linktoslide=li.data('linktoslide'),
        checksl = linktoslide;  
      
      if (linktoslide != undefined) 
        if (linktoslide!="next" && linktoslide!="prev")
          opt.li.each(function() {
            var t = jQuery(this);
            if (t.data('origindex')+1==checksl) linktoslide = t.data('index');
          });
      
      
      if (link!="slide") linktoslide="no";
      
      var apptxt = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+zindex+';" data-x="center" data-y="center" ',
        jts = linktoslide==="scroll_under" ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : 
           linktoslide==="prev" ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : 
           linktoslide==="next" ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"'+linktoslide+'","delay":"0.2"}]'
      
      apptxt = linktoslide=="no" ? apptxt +' data-start="0">' : apptxt + 'data-actions='+"'"+jts + "'"+' data-start="0">';
      apptxt = apptxt + '<a style="width:100%;height:100%;display:block"';          
      apptxt = link!="slide" ? apptxt + ' target="'+target+'" href="'+link+'"' : apptxt;
      apptxt = apptxt + '><span style="width:100%;height:100%;display:block"></span></a></div>';
      li.append(apptxt);
    }     
  });

  
  // CREATE GRID WIDTH AND HEIGHT ARRAYS    
  opt.rle = opt.responsiveLevels.length || 1;
  opt.gridwidth = cArray(opt.gridwidth,opt.rle);
  opt.gridheight = cArray(opt.gridheight,opt.rle);                                                            
  // END OF VERSION 5.0 INIT MODIFICATION



  // SIMPLIFY ANIMATIONS ON OLD IOS AND IE8 IF NEEDED
  if (opt.simplifyAll=="on" && (_R.isIE(8) || _R.iOSVersion())) {
    container.find('.tp-caption').each(function() {
      var tc = jQuery(this);
      tc.removeClass("customin customout").addClass("fadein fadeout");
      tc.data('splitin',"");
      tc.data('speed',400);
    })
    opt.li.each(function() {
      var li= jQuery(this);       
      li.data('transition',"fade");
      li.data('masterspeed',500);
      li.data('slotamount',1);
      var img = li.find('.rev-slidebg') || li.find('>img').first();
      img.data('kenburns',"off");
    });
  }

  opt.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);

  // SOME OPTIONS WHICH SHOULD CLOSE OUT SOME OTHER SETTINGS    
  opt.autoHeight = opt.sliderLayout=="fullscreen" ? "on" : opt.autoHeight;    

  if (opt.sliderLayout=="fullwidth" && opt.autoHeight=="off") container.css({maxHeight:opt.gridheight[opt.curWinRange]+"px"});
  
  // BUILD A FORCE FULLWIDTH CONTAINER, TO SPAN THE FULL SLIDER TO THE FULL WIDTH OF BROWSER
  if (opt.sliderLayout!="auto" && container.closest('.forcefullwidth_wrapper_tp_banner').length==0) {
    if (opt.sliderLayout!=="fullscreen" || opt.fullScreenAutoWidth!="on") {     
      var cp = container.parent(),        
        mb = cp.css('marginBottom'),
        mt = cp.css('marginTop');
      mb = mb===undefined ? 0 : mb;
      mt = mt===undefined ? 0 : mt;

      cp.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'"></div>');
      container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
      container.parent().css({marginTop:"0px",marginBottom:"0px"});
      //container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
      container.parent().css({position:'absolute'});            
    }
  }



  // SHADOW ADD ONS
  if (opt.shadow!==undefined && opt.shadow>0) {
    container.parent().addClass('tp-shadow'+opt.shadow);      
    container.parent().append('<div class="tp-shadowcover"></div>');
    container.parent().find('.tp-shadowcover').css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
  }

  // ESTIMATE THE CURRENT WINDOWS RANGE INDEX
  setCurWinRange(opt);
  setCurWinRange(opt,true);
  
  // IF THE CONTAINER IS NOT YET INITIALISED, LETS GO FOR IT
  if (!container.hasClass("revslider-initialised")) {
    // MARK THAT THE CONTAINER IS INITIALISED WITH SLIDER REVOLUTION ALREADY
    container.addClass("revslider-initialised");

    // FOR BETTER SELECTION, ADD SOME BASIC CLASS
    container.addClass("tp-simpleresponsive");

    // WE DONT HAVE ANY ID YET ? WE NEED ONE ! LETS GIVE ONE RANDOMLY FOR RUNTIME
    if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

    // CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED
    opt.firefox13 = false;
    opt.ie = !jQuery.support.opacity;
    opt.ie9 = (document.documentMode == 9);

    opt.origcd=opt.delay;



    // CHECK THE jQUERY VERSION
    var version = jQuery.fn.jquery.split('.'),
      versionTop = parseFloat(version[0]),
      versionMinor = parseFloat(version[1]),
      versionIncrement = parseFloat(version[2] || '0');
    if (versionTop==1 && versionMinor < 7) 
      container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');                 
    if (versionTop>1) opt.ie=false;
        
          

    // PREPARE VIDEO PLAYERS
    var addedApis = new Object();       
    addedApis.addedyt=0;
    addedApis.addedvim=0;
    addedApis.addedvid=0;
    
    container.find('.tp-caption, .rs-background-video-layer').each(function(i) {
      var _nc = jQuery(this),
        an = _nc.data('autoplayonlyfirsttime'),
        ap = _nc.data('autoplay');


      if (_nc.hasClass("tp-static-layer") && _R.handleStaticLayers)
        _R.handleStaticLayers(_nc,opt);

      var pom = _nc.data('noposteronmobile') || _nc.data('noPosterOnMobile') ||  _nc.data('posteronmobile') || _nc.data('posterOnMobile') || _nc.data('posterOnMObile');
      _nc.data('noposteronmobile',pom);

      // FIX VISIBLE IFRAME BUG IN SAFARI
      var iff = 0;
      _nc.find('iframe').each(function() {
        punchgs.TweenLite.set(jQuery(this),{autoAlpha:0});
        iff++;
      })
      if (iff>0)
        _nc.data('iframes',true)

      if (_nc.hasClass("tp-caption")) {
        // PREPARE LAYERS AND WRAP THEM WITH PARALLAX, LOOP, MASK HELP CONTAINERS
        var ec = _nc.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
        _nc.wrap('<div class="tp-parallax-wrap" style="'+ec+'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="'+ec+'position:absolute;"><div class="tp-mask-wrap" style="'+ec+'position:absolute" ></div></div></div>');       
        var lar = ['pendulum', 'rotate','slideloop','pulse','wave'],
          _lc = _nc.closest('.tp-loop-wrap');
        
        jQuery.each(lar,function(i,k) { 
          var lw = _nc.find('.rs-'+k),
            f = lw.data() || "";
          if (f!="") {      
            _lc.data(f);
            _lc.addClass("rs-"+k);                  
            lw.children(0).unwrap();
            _nc.data('loopanimation',"on");
          }
        }); 
        punchgs.TweenLite.set(_nc,{visibility:"hidden"});
      }

      var as = _nc.data('actions');
      if (as!==undefined) _R.checkActions(_nc,opt,as);

      checkHoverDependencies(_nc,opt);

      if (_R.checkVideoApis)
        addedApis = _R.checkVideoApis(_nc,opt,addedApis);

      // REMOVE VIDEO AUTOPLAYS FOR MOBILE DEVICES 
      if (_ISM) {
        if (an == true || an=="true") {
            _nc.data('autoplayonlyfirsttime',"false");
            an=false;
        }
        if (ap==true || ap=="true" || ap=="on" || ap=="1sttime") {
           _nc.data('autoplay',"off");
           ap="off";
        }

      }
      

      // PREPARE TIMER BEHAVIOUR BASED ON AUTO PLAYED VIDEOS IN SLIDES
      if (an == true || an=="true" || ap == "1sttime")  
        _nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-once");
      
      if (ap==true || ap=="true" || ap == "on" || ap == "no1sttime") 
        _nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-always");
        
              
    });

    container.hover(
      function() {        
          container.trigger('tp-mouseenter');   
          opt.overcontainer=true;     
      },
      function() {
          container.trigger('tp-mouseleft');                        
          opt.overcontainer=false;
      });


    container.on('mouseover',function() {
      container.trigger('tp-mouseover');
      opt.overcontainer=true;
    })

    // REMOVE ANY VIDEO JS SETTINGS OF THE VIDEO  IF NEEDED  (OLD FALL BACK, AND HELP FOR 3THD PARTY PLUGIN CONFLICTS)
    container.find('.tp-caption video').each(function(i) {
      var v = jQuery(this);
      v.removeClass("video-js vjs-default-skin");
      v.attr("preload","");
      v.css({display:"none"});
    });

    //PREPARE LOADINGS ALL IN SEQUENCE
    if (opt.sliderType!=="standard") opt.lazyType = "all";
    
    
    // PRELOAD STATIC LAYERS      
    loadImages(container.find('.tp-static-layers'),opt,0);

    waitForCurrentImages(container.find('.tp-static-layers img'),opt,function() {
      container.find('.tp-static-layers img').each(function() {               
        var e = jQuery(this),
          src = e.data('lazyload') != undefined ? e.data('lazyload') : e.attr('src'),
          loadobj = getLoadObj(opt,src);                
        e.attr('src',loadobj.src)       
      })
    })



    // SET ALL LI AN INDEX AND INIT LAZY LOADING
    opt.li.each(function(i) {
      var li = jQuery(this);
      
      if (opt.lazyType=="all" || (opt.lazyType=="smart" && (i==0 || i == 1 || i == opt.slideamount || i == opt.slideamount-1))) {                 
        loadImages(li,opt,i); 
        waitForCurrentImages(li,opt,function() { 
          if (opt.sliderType=="carousel") 
            punchgs.TweenLite.to(li,1,{autoAlpha:1,ease:punchgs.Power3.easeInOut});
        });         
      }

    });

    

    // IF DEEPLINK HAS BEEN SET
    var deeplink = getUrlVars("#")[0];
    if (deeplink.length<9) {
      if (deeplink.split('slide').length>1) {
        var dslide=parseInt(deeplink.split('slide')[1],0);
        if (dslide<1) dslide=1;
        if (dslide>opt.slideamount) dslide=opt.slideamount;
        opt.startWithSlide=dslide-1;
      }
    }
    
    // PREPARE THE SPINNER
    container.append( '<div class="tp-loader '+opt.spinner+'">'+
                '<div class="dot1"></div>'+
                  '<div class="dot2"></div>'+
                  '<div class="bounce1"></div>'+
              '<div class="bounce2"></div>'+
              '<div class="bounce3"></div>'+
             '</div>');
    

    // RESET THE TIMER
    if (container.find('.tp-bannertimer').length===0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
    container.find('.tp-bannertimer').css({'width':'0%'});
    container.find('.tp-bannertimer').data('opt',opt);

    
    // PREPARE THE SLIDES
    opt.ul.css({'display':'block'});
    prepareSlides(container,opt);
    if (opt.parallax.type!=="off") _R.checkForParallax(container,opt);

    
    // PREPARE SLIDER SIZE      
    _R.setSize(opt);
    

    // Call the Navigation Builder
    if (opt.sliderType!=="hero") _R.createNavigation(container,opt);
    if (_R.resizeThumbsTabs) _R.resizeThumbsTabs(opt);
    contWidthManager(opt);
    var _v = opt.viewPort;
    opt.inviewport = false;
    
    if (_v !=undefined && _v.enable) {
      if (!jQuery.isNumeric(_v.visible_area))
       if (_v.visible_area.indexOf('%')!==-1) 
        _v.visible_area = parseInt(_v.visible_area)/100;
        
      if (_R.scrollTicker) _R.scrollTicker(opt,container);
    }
    


    // START THE SLIDER
    setTimeout(function() {
      if ( opt.sliderType =="carousel") _R.prepareCarousel(opt);  
      
      if (!_v.enable || (_v.enable && opt.inviewport) || (_v.enable &&  !opt.inviewport && !_v.outof=="wait")) {
        swapSlide(container,opt); 
      }
      else
        opt.waitForFirstSlide = true;

      if (_R.manageNavigation) _R.manageNavigation(opt);  


      // START COUNTDOWN
      if (opt.slideamount>1) {
        if (!_v.enable || (_v.enable && opt.inviewport)) 
          countDown(container,opt);
        else
          opt.waitForCountDown = true;
      }
      setTimeout(function() {         
        container.trigger('revolution.slide.onloaded');         
      },100);
    },opt.startDelay);
    opt.startDelay=0;

    

    /******************************
      - FULLSCREEN CHANGE -
    ********************************/
    // FULLSCREEN MODE TESTING
    jQuery("body").data('rs-fullScreenMode',false);
    jQuery(window).on ('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(){
         jQuery("body").data('rs-fullScreenMode',!jQuery("body").data('rs-fullScreenMode'));
         if (jQuery("body").data('rs-fullScreenMode')) {
           setTimeout(function() {
            jQuery(window).trigger("resize");
           },200);
         }
    });

    var resizid = "resize.revslider-"+container.attr('id');

    // IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
    jQuery(window).on(resizid,function() {
      if (container==undefined || !jQuery('#' + container.attr('id')).length) return false;
      
      if (jQuery('body').find(container)!=0)        
        contWidthManager(opt);              
        
        if (container.outerWidth(true)!=opt.width || container.is(":hidden") || (opt.sliderLayout=="fullscreen" && jQuery(window).height()!=opt.lastwindowheight)) {
            opt.lastwindowheight = jQuery(window).height();
            containerResized(container,opt);
        }


    });
    
    hideSliderUnder(container,opt); 
    contWidthManager(opt);    
    if (!opt.fallbacks.disableFocusListener && opt.fallbacks.disableFocusListener != "true" && opt.fallbacks.disableFocusListener !== true) tabBlurringCheck(container,opt);
  }
}

/*************************************
  -  CREATE SIMPLE ARRAYS -
**************************************/
var cArray = function(b,l) {    
  if (!jQuery.isArray(b)) {
    var t = b;
    b = new Array();
    b.push(t);
  }   
  if (b.length<l) {     
    var t = b[b.length-1];
    for (var i=0;i<(l-b.length)+2;i++)
      b.push(t)
  }   
  return b;
}



var checkHoverDependencies = function(_nc,opt) {
  
  if (_nc.data('start')==="sliderenter") {    
    if (opt.layersonhover===undefined) {          
      opt.c.on('tp-mouseenter',function() {               
        if (opt.layersonhover)          
          jQuery.each(opt.layersonhover,function(i,tnc) {                     
            tnc.data('animdirection',"in");
            var otl = tnc.data('timeline_out'),
              base_offsetx = opt.sliderType==="carousel" ? 0 : opt.width/2 - (opt.gridwidth[opt.curWinRange]*opt.bw)/2,
              base_offsety=0,
              cli = tnc.closest('.tp-revslider-slidesli');

            if (cli.hasClass("active-revslide") || cli.hasClass("processing-revslide")) {

              if (otl!=undefined) {                   
                otl.pause(0);
                otl.kill();                         
              }             
              _R.animateSingleCaption(tnc,opt,base_offsetx,base_offsety,0,false,true);  
              var tl = tnc.data('timeline');
              tnc.data('triggerstate',"on");                                                              
              tl.play(0);                   
            }
          });
      });
      opt.c.on('tp-mouseleft',function() {
        if (opt.layersonhover)
          jQuery.each(opt.layersonhover,function(i,tnc) {
            tnc.data('animdirection',"out");
            tnc.data('triggered',true);
            tnc.data('triggerstate',"off");
            if (_R.stopVideo) _R.stopVideo(tnc,opt);                        
            if (_R.endMoveCaption) _R.endMoveCaption(tnc,null,null,opt);  
          });
      });     
      opt.layersonhover = new Array;
    }         
    opt.layersonhover.push(_nc);
  }
}



var contWidthManager = function(opt) {  

  var rl = _R.getHorizontalOffset(opt.c,"left");

  if (opt.sliderLayout!="auto" && (opt.sliderLayout!=="fullscreen" || opt.fullScreenAutoWidth!="on")) {   
    var loff = Math.ceil(opt.c.closest('.forcefullwidth_wrapper_tp_banner').offset().left - rl);                                
    punchgs.TweenLite.set(opt.c.parent(),{'left':(0-loff)+"px",'width':jQuery(window).width()-_R.getHorizontalOffset(opt.c,"both")});   
  } else {    
    if (opt.sliderLayout=="fullscreen" && opt.fullScreenAutoWidth=="on")
      punchgs.TweenLite.set(opt.ul,{left:0,width:opt.c.width()});   
    else
      punchgs.TweenLite.set(opt.ul,{left:rl,width:opt.c.width()-_R.getHorizontalOffset(opt.c,"both")});   
  } 


  // put Static Layer Wrapper in Position 
  if (opt.slayers && (opt.sliderLayout!="fullwidth" && opt.sliderLayout!="fullscreen"))
    punchgs.TweenLite.set(opt.slayers,{left:rl});
}


var cv = function(a,d) {
    return a===undefined ? d : a;
}


var hideSliderUnder = function(container,opt,resized) {
  // FIRST TIME STOP/START HIDE / SHOW SLIDER
  //REMOVE AND SHOW SLIDER ON DEMAND
  var contpar= container.parent();
  if (jQuery(window).width()<opt.hideSliderAtLimit) {
    container.trigger('stoptimer');
    if (contpar.css('display')!="none")
      contpar.data('olddisplay',contpar.css('display'));
    contpar.css({display:"none"});
  } else {
    if (container.is(":hidden") && resized) {
      if (contpar.data('olddisplay')!=undefined && contpar.data('olddisplay')!="undefined" && contpar.data('olddisplay') != "none")
        contpar.css({display:contpar.data('olddisplay')});
      else
        contpar.css({display:"block"});
      container.trigger('restarttimer');
      setTimeout(function() {
        containerResized(container,opt);
      },150)
    }
  }
  if (_R.hideUnHideNav) _R.hideUnHideNav(opt);  
}


//////////////////////////
//  CONTAINER RESIZED //
/////////////////////////
var containerResized = function (c,opt) {
  if(!jQuery('#' + c.attr('id')).length) return false;               
  if (opt.infullscreenmode == true)
    opt.minHeight = jQuery(window).height();              
  

  setCurWinRange(opt);
  setCurWinRange(opt,true);
  if (!_R.resizeThumbsTabs || _R.resizeThumbsTabs(opt)===true) {
    
    hideSliderUnder(c,opt,true);
    contWidthManager(opt);
    
    if ( opt.sliderType =="carousel") _R.prepareCarousel(opt,true);   

    if (c===undefined) return false;
                
    _R.setSize(opt);
    
    opt.conw = opt.c.width();
    opt.conh = opt.infullscreenmode ? opt.minHeight : opt.c.height();
    
    
    var actsh = c.find('.active-revslide .slotholder'),
      nextsh = c.find('.processing-revslide .slotholder');
    
    removeSlots(c,opt,c,2);

    if (opt.sliderType==="standard") {
      punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0});    
      actsh.find('.defaultimg').css({'opacity':1});
    } 

    
    if ( opt.sliderType =="carousel" && opt.lastconw != opt.conw)  {
      clearTimeout(opt.pcartimer);
      opt.pcartimer = setTimeout(function() {
        _R.prepareCarousel(opt,true);   
      },100);
      opt.lastconw = opt.conw;
    }

    if (_R.manageNavigation) _R.manageNavigation(opt);


    if (_R.animateTheCaptions) _R.animateTheCaptions(c.find('.active-revslide'), opt,true);
    
    if (nextsh.data('kenburns')=="on")        
      _R.startKenBurn(nextsh,opt,nextsh.data('kbtl').progress());

    if (actsh.data('kenburns')=="on")         
      _R.startKenBurn(actsh,opt,actsh.data('kbtl').progress());

    // DOUBLE CALL FOR SOME FUNCTION TO AVOID PORTRAIT/LANDSCAPE ISSUES, AND TO AVOID FULLSCREEN/NORMAL SWAP ISSUES
    if (_R.animateTheCaptions) _R.animateTheCaptions(nextsh.closest('li'), opt,true);
    if (_R.manageNavigation) _R.manageNavigation(opt);
    
  }       
}

  
  
  
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       PREPARING / REMOVING    ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
var setScale = function(opt) {
  opt.bw = (opt.width / opt.gridwidth[opt.curWinRange]);
  opt.bh = (opt.height / opt.gridheight[opt.curWinRange]);
  
  
  if (opt.bh>opt.bw) 
    opt.bh=opt.bw
  else
    opt.bw = opt.bh;
  
  if (opt.bh>1 || opt.bw>1) { opt.bw=1; opt.bh=1; }
}

  



/////////////////////////////////////////
//  - PREPARE THE SLIDES / SLOTS -  //
///////////////////////////////////////
var prepareSlides = function(container,opt) {

  container.find('.tp-caption').each(function() { 
    var c = jQuery(this);
    if (c.data('transition')!==undefined) c.addClass(c.data('transition')); 
  });

  // PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
  opt.ul.css({overflow:'hidden',width:'100%',height:'100%',maxHeight:container.parent().css('maxHeight')})
  if (opt.autoHeight=="on") {
     opt.ul.css({overflow:'hidden',width:'100%',height:'100%',maxHeight:"none"});
     container.css({'maxHeight':'none'});
     container.parent().css({'maxHeight':'none'});
   }
  //_R.setSize("",opt);
  opt.li.each(function(j) {
    var li=jQuery(this),
      originalIndex = li.data('originalindex');
          
    //START WITH CORRECT SLIDE
    if ((opt.startWithSlide !=undefined && originalIndex==opt.startWithSlide) || opt.startWithSlide ===undefined && j==0)
      li.addClass("next-revslide");
    

    // MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
    li.css({'width':'100%','height':'100%','overflow':'hidden'});
          
  });

  if (opt.sliderType === "carousel") {
    //SET CAROUSEL        
    opt.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
    var apt = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
    opt.c.parent().prepend(apt);
    opt.c.parent().append(apt);
    _R.prepareCarousel(opt);        
  }

  // RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
  container.parent().css({'overflow':'visible'});


  opt.li.find('>img').each(function(j) {

    var img=jQuery(this),
      bgvid = img.closest('li').find('.rs-background-video-layer');

    bgvid.addClass("defaultvid").css({zIndex:30});

    img.addClass('defaultimg');       
            
    // TURN OF KEN BURNS IF WE ARE ON MOBILE AND IT IS WISHED SO
    if (opt.fallbacks.panZoomDisableOnMobile == "on"  && _ISM) {
      img.data('kenburns',"off");
      img.data('bgfit',"cover");
    }

    img.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
    bgvid.appendTo(img.closest('li').find('.slotholder'));
    var dts = img.data();
    img.closest('.slotholder').data(dts);
                  
    if (bgvid.length>0 && dts.bgparallax!=undefined)
      bgvid.data('bgparallax',dts.bgparallax);

    if (opt.dottedOverlay!="none" && opt.dottedOverlay!=undefined)
        img.closest('.slotholder').append('<div class="tp-dottedoverlay '+opt.dottedOverlay+'"></div>');

    var src=img.attr('src');    
    dts.src = src;    
    dts.bgfit = dts.bgfit || "cover";
    dts.bgrepeat = dts.bgrepeat || "no-repeat",
    dts.bgposition = dts.bgposition || "center center";

    var pari = img.closest('.slotholder');
    img.parent().append('<div class="tp-bgimg defaultimg" style="background-color:'+img.css("backgroundColor")+';background-repeat:'+dts.bgrepeat+';background-image:url('+src+');background-size:'+dts.bgfit+';background-position:'+dts.bgposition+';width:100%;height:100%;"></div>');
    var comment = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + img.get(0).outerHTML);
    img.replaceWith(comment);
    img = pari.find('.tp-bgimg');     
    img.data(dts);
    img.attr("src",src);

    if (opt.sliderType === "standard" || opt.sliderType==="undefined")        
      img.css({'opacity':0});
  
  })

  
}


//  REMOVE SLOTS  //
var removeSlots = function(container,opt,where,addon) {
  opt.removePrepare = opt.removePrepare + addon;
  where.find('.slot, .slot-circle-wrapper').each(function() {
    jQuery(this).remove();
  }); 
  opt.transition = 0; 
  opt.removePrepare = 0;  
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       SLIDE SWAPS     ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


// THE IMAGE IS LOADED, WIDTH, HEIGHT CAN BE SAVED
var cutParams = function(a) {
  var b = a;
  if (a!=undefined && a.length>0)
    b = a.split("?")[0];
  return b;
}

var relativeRedir = function(redir){
  return location.pathname.replace(/(.*)\/[^/]*/, "$1/"+redir);
}

var abstorel = function (base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}

var imgLoaded = function(img,opt,progress) {
  opt.syncload--; 
  if (opt.loadqueue)
    jQuery.each(opt.loadqueue, function(index,queue) {    

      var mqsrc = queue.src.replace(/\.\.\/\.\.\//gi,""),
        fullsrc = self.location.href,
        origin = document.location.origin,
        fullsrc_b = fullsrc.substring(0,fullsrc.length-1)+"/"+mqsrc,
        origin_b = origin+"/"+mqsrc,
        absolute = abstorel(self.location.href,queue.src);
            
      fullsrc = fullsrc.substring(0,fullsrc.length-1)+mqsrc;            
      origin = origin+mqsrc;
            
      if (cutParams(origin) === cutParams(decodeURIComponent(img.src)) || 
        cutParams(fullsrc)=== cutParams(decodeURIComponent(img.src)) || 
        cutParams(absolute)=== cutParams(decodeURIComponent(img.src)) || 
        cutParams(origin_b) === cutParams(decodeURIComponent(img.src)) || 
        cutParams(fullsrc_b)=== cutParams(decodeURIComponent(img.src)) || 
        cutParams(queue.src) === cutParams(decodeURIComponent(img.src)) || 
        cutParams(queue.src).replace(/^.*\/\/[^\/]+/, '') === cutParams(decodeURIComponent(img.src)).replace(/^.*\/\/[^\/]+/, '') || 
        (window.location.origin==="file://" && cutParams(img.src).match(new RegExp(mqsrc)))) {                                  
          queue.progress = progress;
          queue.width = img.width;
          queue.height = img.height;
      } 
    });   
  progressImageLoad(opt);
}

// PRELOAD IMAGES 3 PIECES ON ONE GO, CHECK LOAD PRIORITY
var progressImageLoad = function(opt) {   
  if (opt.syncload == 3) return;
  if (opt.loadqueue)
    jQuery.each(opt.loadqueue, function(index,queue) {  
      if (queue.progress.match(/prepared/g)) {        
         if (opt.syncload<=3) {         
          opt.syncload++;         
          var img = new Image();
          
          img.onload = function() {                     
            imgLoaded(this,opt,"loaded");         
          };
          img.onerror = function() {
            imgLoaded(this,opt,"failed");         
          };           
          img.src=queue.src;
          queue.progress="inload";
        }
      }       
    });
}

// ADD TO QUEUE THE NOT LOADED IMAGES YES
var addToLoadQueue = function(src,opt,prio) {   
  var alreadyexist = false; 
  if (opt.loadqueue)  
    jQuery.each(opt.loadqueue, function(index,queue) {      
      if (queue.src === src) alreadyexist = true;
    });


  if (!alreadyexist) {
    var loadobj = new Object();     
    loadobj.src = src;
    loadobj.prio = prio;
    loadobj.progress = "prepared";
    opt.loadqueue.push(loadobj);
  }       

}

// LOAD THE IMAGES OF THE PREDEFINED CONTAINER
var loadImages = function(container,opt,prio) { 
  
  container.find('img,.defaultimg').each(function() {
    var element = jQuery(this),
      src = element.data('lazyload') !== undefined && element.data('lazyload')!=="undefined" ? element.data('lazyload') : element.attr('src');              
    
    element.data('start-to-load',jQuery.now());
    addToLoadQueue(src,opt,prio);
  });
  progressImageLoad(opt);
}

// FIND SEARCHED IMAGE IN THE LOAD QUEUE
var getLoadObj = function(opt,src) {  
  var obj = new Object();
  if (opt.loadqueue)
    jQuery.each(opt.loadqueue, function(index,queue) {      
      if (queue.src == src) obj = queue;
    });
  return obj;
}

// WAIT PROGRESS TILL THE PREDEFINED CONTAINER HAS ALL IMAGES LOADED INSIDE
var waitForCurrentImages = function(nextli,opt,callback) {

  var waitforload = false;
  nextli.find('img,.defaultimg').each(function() {
    var element = jQuery(this),
      src = element.data('lazyload') != undefined ? element.data('lazyload') : element.attr('src'),
      loadobj = getLoadObj(opt,src);
    

    // IF ELEMENTS IS NOT LOADED YET, AND IT IS NOW LOADED
    if (element.data('loaded')===undefined && loadobj !==undefined && loadobj.progress && loadobj.progress.match(/loaded/g)) {
      
      element.attr('src',loadobj.src);
      // IF IT IS A DEFAULT IMG, WE NEED TO ASSIGN SOME SPECIAL VALUES TO IT
      if (element.hasClass("defaultimg")) {   
        if (!_R.isIE(8))
          element.css({backgroundImage:'url("'+loadobj.src+'")'});
        else {
          defimg.attr('src',loadobj.src);
        }     
        nextli.data('owidth',loadobj.width);
        nextli.data('oheight',loadobj.height);
        nextli.find('.slotholder').data('owidth',loadobj.width);
        nextli.find('.slotholder').data('oheight',loadobj.height);
      } else { 
        var w = element.data('ww'),
          h = element.data('hh');
        
        element.data('owidth',loadobj.width);
        element.data('oheight',loadobj.height);

        w = w==undefined || w =="auto" || w=="" ? loadobj.width : w;
        h = h==undefined || h =="auto" || h=="" ? loadobj.height : h;
        
        
        element.data('ww',w);
        element.data('hh',h); 
        
      }
      // ELEMENT IS NOW FULLY LOADED
      element.data('loaded',true);
    }     


    if (loadobj && loadobj.progress && loadobj.progress.match(/inprogress|inload|prepared/g)) 
      if (jQuery.now()-element.data('start-to-load')<5000) 
          waitforload = true;     
      else
        console.error(src+"  Could not be loaded !");
    
    // WAIT FOR VIDEO API'S         
    if (opt.youtubeapineeded == true && (!window['YT'] || YT.Player==undefined)) {    
      waitforload = true;     
      if (jQuery.now()-opt.youtubestarttime>5000 && opt.youtubewarning!=true) {
        opt.youtubewarning = true;
        var txt = "YouTube Api Could not be loaded !";
        if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
        console.error(txt); 
        opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+txt+'</strong></div>')                
      }
    }

    if (opt.vimeoapineeded == true && !window['Froogaloop']) {
      waitforload = true;
      if (jQuery.now()-opt.vimeostarttime>5000 && opt.vimeowarning!=true) {
        opt.vimeowarning= true;
        var txt = "Vimeo Froogaloop Api Could not be loaded !";
        if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
        console.error(txt); 
        opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+txt+'</strong></div>')         
      }
    }     
  });
  

  if (waitforload) 
    setTimeout(function() {
        waitForCurrentImages(nextli,opt,callback) ;
      },19);
  else    
    callback();
  
}


//////////////////////////////////////
//  - CALL TO SWAP THE SLIDES -  //
/////////////////////////////////////
var swapSlide = function(container,opt) { 

  clearTimeout(opt.waitWithSwapSlide);



  if (container.find('.processing-revslide').length>0) {      
    opt.waitWithSwapSlide = setTimeout(function() {
      swapSlide(container,opt);
      
    },150);
    return false;
  } 

  var actli = container.find('.active-revslide'),
    nextli = container.find('.next-revslide'),
    defimg= nextli.find('.defaultimg');
  
  
  if (nextli.index() === actli.index()) {
    nextli.removeClass("next-revslide");
    return false;
  }
  nextli.removeClass("next-revslide").addClass("processing-revslide");
    
  nextli.data('slide_on_focus_amount',(nextli.data('slide_on_focus_amount')+1) || 1);
  // CHECK IF WE ARE ALREADY AT LAST ITEM TO PLAY IN REAL LOOP SESSION
  if (opt.stopLoop=="on" && nextli.index()==opt.lastslidetoshow-1) {
    container.find('.tp-bannertimer').css({'visibility':'hidden'});
    container.trigger('revolution.slide.onstop');
    opt.noloopanymore = 1;
  } 

  // INCREASE LOOP AMOUNTS
  if (nextli.index()===opt.slideamount-1) {
    opt.looptogo=opt.looptogo-1;
    if (opt.looptogo<=0)
        opt.stopLoop="on";
  } 

  opt.tonpause = true;
  container.trigger('stoptimer');
  opt.cd=0;
  if (opt.spinner==="off")
    container.find('.tp-loader').css({display:"none"});
  else
    container.find('.tp-loader').css({display:"block"});

  
  loadImages(nextli,opt,1);


  // WAIT FOR SWAP SLIDE PROGRESS
  waitForCurrentImages(nextli,opt,function() {         


    // MANAGE BG VIDEOS
    nextli.find('.rs-background-video-layer').each(function() {
      var _nc = jQuery(this);       
      if (!_nc.hasClass("HasListener")) {
        _nc.data('bgvideo',1);
        _R.manageVideoLayer(_nc,opt);
      }
      if (_nc.find('.rs-fullvideo-cover').length==0)
        _nc.append('<div class="rs-fullvideo-cover"></div>')
    });
    swapSlideProgress(opt,defimg,container)
  });     

}

//////////////////////////////////////
//  - PROGRESS SWAP THE SLIDES -  //
/////////////////////////////////////
var swapSlideProgress = function(opt,defimg,container) {
  
  var actli = container.find('.active-revslide'), 
    nextli = container.find('.processing-revslide'),    
    actsh = actli.find('.slotholder'),
    nextsh = nextli.find('.slotholder');
  opt.tonpause = false;
    opt.cd=0;
    container.trigger('nulltimer');

    
    container.find('.tp-loader').css({display:"none"}); 
   // if ( opt.sliderType =="carousel") _R.prepareCarousel(opt);
  _R.setSize(opt);
  _R.slotSize(defimg,opt);
  
    if (_R.manageNavigation) _R.manageNavigation(opt);
    var data={};
    data.nextslide=nextli;
    data.currentslide=actli;
  container.trigger('revolution.slide.onbeforeswap',data);

  opt.transition = 1;
  opt.videoplaying = false;

  // IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
  if (nextli.data('delay')!=undefined) {
        opt.cd=0;
        opt.delay=nextli.data('delay');
  } else 
    opt.delay=opt.origcd;


  var ai = actli.index(),
    ni = nextli.index();
  opt.sdir = ni<ai ? 1 : 0;
  
  if (opt.sc_indicator=="arrow") {  
    if (ai==0 && ni==opt.slideamount-1) opt.sdir = 1;
    if (ai==opt.slideamount-1 && ni==0) opt.sdir = 0; 
  }

  opt.lsdir = opt.lsdir === undefined ? opt.sdir : opt.lsdir; 
  opt.dirc = opt.lsdir != opt.sdir;
  opt.lsdir = opt.sdir;

  ///////////////////////////
  //  REMOVE THE CAPTIONS //
  ///////////////////////////


  
  if (actli.index() != nextli.index() && opt.firststart!=1)   
    if (_R.removeTheCaptions) _R.removeTheCaptions(actli,opt);
    
  
  if (!nextli.hasClass('rs-pause-timer-once') && !nextli.hasClass("rs-pause-timer-always"))     
      container.trigger('restarttimer');    
    else
      opt.videoplaying = true;   
  
    nextli.removeClass("rs-pause-timer-once");
    
  var nexttrans,
    direction=-1,
    mtl;
    
  // SELECT SLIDER TYPE
  if ( opt.sliderType =="carousel") {                 
    mtl = new punchgs.TimelineLite();
    _R.prepareCarousel(opt,mtl);    
    letItFree(container,opt,nextsh,actsh,nextli,actli,mtl);
    opt.transition = 0;
    opt.firststart = 0;
  } else {  
    mtl = new punchgs.TimelineLite({onComplete:function() {       
      letItFree(container,opt,nextsh,actsh,nextli,actli,mtl);
    }});  
    mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0}));
    mtl.pause();

    if (opt.firststart==1) {
      punchgs.TweenLite.set(actli,{autoAlpha:0});     
      opt.firststart=0;
    }

    
    punchgs.TweenLite.set(actli,{zIndex:18});
    punchgs.TweenLite.set(nextli,{autoAlpha:0,zIndex:20});
    
        
    // IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
    if (nextli.data('differentissplayed') =='prepared') {
      nextli.data('differentissplayed','done');
      nextli.data('transition',nextli.data('savedtransition'));
      nextli.data('slotamount',nextli.data('savedslotamount'));
      nextli.data('masterspeed',nextli.data('savedmasterspeed'));
    }


    if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') !="done") {

      nextli.data('savedtransition',nextli.data('transition'));
      nextli.data('savedslotamount',nextli.data('slotamount'));
      nextli.data('savedmasterspeed',nextli.data('masterspeed'));
      nextli.data('transition',nextli.data('fstransition'));
      nextli.data('slotamount',nextli.data('fsslotamount'));
      nextli.data('masterspeed',nextli.data('fsmasterspeed'));
      nextli.data('differentissplayed','prepared');
    }

    if (nextli.data('transition')==undefined) nextli.data('transition',"random");
    
    nexttrans = 0;    
    var transtext = nextli.data('transition') !== undefined ? nextli.data('transition').split(",") : "fade",
      curtransid = nextli.data('nexttransid') == undefined ? -1 : nextli.data('nexttransid');   
    if (nextli.data('randomtransition')=="on")
      curtransid = Math.round(Math.random()*transtext.length);
    else
      curtransid=curtransid+1;

    if (curtransid==transtext.length) curtransid=0;
    nextli.data('nexttransid',curtransid);

    var comingtransition = transtext[curtransid];

    if (opt.ie) {
      if (comingtransition=="boxfade") comingtransition = "boxslide";
      if (comingtransition=="slotfade-vertical") comingtransition = "slotzoom-vertical";
      if (comingtransition=="slotfade-horizontal") comingtransition = "slotzoom-horizontal";
    }

    if (_R.isIE(8)) 
      comingtransition = 11;  
    

            
    mtl = _R.animateSlide(nexttrans, comingtransition, container,  opt, nextli, actli, nextsh, actsh,  mtl);  
    if (nextsh.data('kenburns')=="on") {
      _R.startKenBurn(nextsh,opt);        
      mtl.add(punchgs.TweenLite.set(nextsh,{autoAlpha:0}))
    }
    
    // SHOW FIRST LI && ANIMATE THE CAPTIONS
    mtl.pause();
  }

  if (_R.scrollHandling) {
    _R.scrollHandling(opt, true);
    mtl.eventCallback("onUpdate",function() {
      _R.scrollHandling(opt, true);
    });
  }
  
  // START PARALLAX IF NEEDED   
  if (opt.parallax.type!="off" && opt.parallax.firstgo==undefined && _R.scrollHandling) {
    opt.parallax.firstgo = true;
    opt.lastscrolltop = -999;
    _R.scrollHandling(opt,true);
    setTimeout(function() {
      opt.lastscrolltop = -999;
      _R.scrollHandling(opt,true);
    },210);
    setTimeout(function() {
      opt.lastscrolltop = -999;
      _R.scrollHandling(opt,true);
    },420);
  }
  
  
  if (_R.animateTheCaptions) {
    _R.animateTheCaptions(nextli, opt,null,mtl);  
  } else {
    if (mtl != undefined) setTimeout(function() {     
      mtl.resume();
    },30);
  }
  punchgs.TweenLite.to(nextli,0.001,{autoAlpha:1});

  
  //if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli); 
  
}


//////////////////////////////////////////
//  GIVE FREE THE TRANSITIOSN     //
//////////////////////////////////////////
var letItFree = function(container,opt,nextsh,actsh,nextli,actli,mtl) {
    
  if (opt.sliderType==="carousel") {
    // CAROUSEL SLIDER
  }  else {
    opt.removePrepare = 0;
    punchgs.TweenLite.to(nextsh.find('.defaultimg'),0.001,{zIndex:20,autoAlpha:1,onComplete:function() {
      removeSlots(container,opt,nextli,1);

    }});
    if (nextli.index()!=actli.index()) {
      punchgs.TweenLite.to(actli,0.2,{zIndex:18,autoAlpha:0,onComplete:function() {
        removeSlots(container,opt,actli,1);             
      }});
    }
  }


  container.find('.active-revslide').removeClass("active-revslide");  
  container.find('.processing-revslide').removeClass("processing-revslide").addClass("active-revslide");
  opt.act=nextli.index();
      
  
  if (opt.parallax.type=="scroll" || opt.parallax.type=="scroll+mouse" || opt.parallax.type=="mouse+scroll") {
    opt.lastscrolltop = -999;
    _R.scrollHandling(opt);
  }
  
  mtl.clear();    
  
  
  if (actsh.data('kbtl')!=undefined) {
    actsh.data('kbtl').reverse();
    actsh.data('kbtl').timeScale(25);
  } 
  if (nextsh.data('kenburns')=="on") {    
    if (nextsh.data('kbtl')!=undefined) {
      nextsh.data('kbtl').timeScale(1); 
      nextsh.data('kbtl').play();           
    }
    else
      _R.startKenBurn(nextsh,opt);            
  }

  nextli.find('.rs-background-video-layer').each(function(i) {    
    if (_ISM) return false;
    var _nc = jQuery(this)
    _R.resetVideo(_nc,opt);               
    
    punchgs.TweenLite.fromTo(_nc,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:0.2,onComplete:function() {   
      if (_R.animcompleted) _R.animcompleted(_nc,opt);
    }});
  });
  

  actli.find('.rs-background-video-layer').each(function(i) {   
    if (_ISM) return false;
    var _nc = jQuery(this);
    if (_R.stopVideo) {
      _R.resetVideo(_nc,opt);
      _R.stopVideo(_nc,opt);          
    }
    punchgs.TweenLite.to(_nc,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:0.2});
  });
  // TIRGGER THE ON CHANGE EVENTS
  var data={};
  data.slideIndex=nextli.index()+1;
  data.slideLIIndex=nextli.index();
  data.slide = nextli;
  data.currentslide=nextli;
  data.prevslide = actli;
  container.trigger('revolution.slide.onchange',data);
  container.trigger('revolution.slide.onafterswap',data); 

  opt.duringslidechange = false;

  var lastSlideLoop = actli.data('slide_on_focus_amount'),
    lastSlideMaxLoop = actli.data('hideafterloop'); 
  if (lastSlideMaxLoop!=0 && lastSlideMaxLoop<=lastSlideLoop) {
    opt.c.revremoveslide(actli.index());
  }
  //if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);   
  
}





///////////////////////////
//  REMOVE THE LISTENERS //
///////////////////////////
var removeAllListeners = function(container,opt) {
  container.children().each(function() {
    try{ jQuery(this).die('click'); } catch(e) {}
    try{ jQuery(this).die('mouseenter');} catch(e) {}
    try{ jQuery(this).die('mouseleave');} catch(e) {}
    try{ jQuery(this).unbind('hover');} catch(e) {}
  })
  try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
  clearInterval(opt.cdint);
  container=null;
}

///////////////////////////
//  - countDown - //
/////////////////////////
var countDown = function(container,opt) {
  opt.cd=0;
  opt.loop=0;
  if (opt.stopAfterLoops!=undefined && opt.stopAfterLoops>-1)
      opt.looptogo=opt.stopAfterLoops;
  else
    opt.looptogo=9999999;

  if (opt.stopAtSlide!=undefined && opt.stopAtSlide>-1)
      opt.lastslidetoshow=opt.stopAtSlide;
  else
      opt.lastslidetoshow=999;

  opt.stopLoop="off";

  if (opt.looptogo==0) opt.stopLoop="on";

  
  var bt=container.find('.tp-bannertimer');

  // LISTENERS  //container.trigger('stoptimer');
  container.on('stoptimer',function() {   
    var bt = jQuery(this).find('.tp-bannertimer');
    bt.data('tween').pause();
    if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
    opt.sliderstatus = "paused";
    _R.unToggleState(opt.slidertoggledby);
  });


  container.on('starttimer',function() {    
    if (opt.conthover!=1 && opt.videoplaying!=true && opt.width>opt.hideSliderAtLimit && opt.tonpause != true && opt.overnav !=true)
      if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport)) {                
        bt.css({visibility:"visible"});
        bt.data('tween').resume();
        opt.sliderstatus = "playing";
      }

      if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
      _R.toggleState(opt.slidertoggledby);
  });


  container.on('restarttimer',function() {  

    var bt = jQuery(this).find('.tp-bannertimer');
    if (opt.mouseoncontainer && opt.navigation.onHoverStop=="on" && (!_ISM)) return false; 
    if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport)) {
      bt.css({visibility:"visible"});
      bt.data('tween').kill();
      bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
      opt.sliderstatus = "playing";
    }
    if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
    _R.toggleState(opt.slidertoggledby);
  });

  container.on('nulltimer',function() {
      bt.data('tween').pause(0);
      if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
      opt.sliderstatus = "paused";
  });

  var countDownNext = function() {
    if (jQuery('body').find(container).length==0) {
      removeAllListeners(container,opt);
      clearInterval(opt.cdint);
    }

    container.trigger("revolution.slide.slideatend");

    //STATE OF API CHANGED -> MOVE TO AIP BETTER
    if (container.data('conthover-changed') == 1) {
      opt.conthover=  container.data('conthover');
      container.data('conthover-changed',0);
    }

    _R.callingNewSlide(opt,container,1);                        
  }

  bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
  bt.data('opt',opt);

  if (opt.slideamount >1 && !(opt.stopAfterLoops==0 && opt.stopAtSlide==1)) {
    container.trigger("starttimer");
  }
  else {
    opt.noloopanymore = 1;
    container.trigger("nulltimer");   
  }

  container.on('tp-mouseenter',function() { 
        opt.mouseoncontainer = true;      
      if (opt.navigation.onHoverStop=="on" && (!_ISM)) {
        container.trigger('stoptimer');
        container.trigger('revolution.slide.onpause');                
      }
  });
  container.on('tp-mouseleft',function() {
      opt.mouseoncontainer = false;
      if (container.data('conthover')!=1 && opt.navigation.onHoverStop=="on" && ((opt.viewPort.enable==true && opt.inviewport) || opt.viewPort.enable==false)) {
        container.trigger('revolution.slide.onresume');
        container.trigger('starttimer');                  
      }
  });
  
}


 

//////////////////////////////////////////////////////
// * Revolution Slider - NEEDFULL FUNCTIONS
// * @version: 1.0 (30.10.2014)
// * @author ThemePunch
//////////////////////////////////////////////////////



//  - BLUR / FOXUS FUNCTIONS ON BROWSER 

var vis = (function(){
      var stateKey,
          eventKey,
          keys = {
                  hidden: "visibilitychange",
                  webkitHidden: "webkitvisibilitychange",
                  mozHidden: "mozvisibilitychange",
                  msHidden: "msvisibilitychange"
      };
      for (stateKey in keys) {
          if (stateKey in document) {
              eventKey = keys[stateKey];
              break;
          }
      }
      return function(c) {
          if (c) document.addEventListener(eventKey, c);
          return !document[stateKey];
      }
  })();

var restartOnFocus = function(opt) {
  if (opt==undefined || opt.c==undefined) return false;
  if (opt.windowfocused!=true) {
    opt.windowfocused = true;
      punchgs.TweenLite.delayedCall(0.3,function(){         
          // TAB IS ACTIVE, WE CAN START ANY PART OF THE SLIDER        
          if (opt.fallbacks.nextSlideOnWindowFocus=="on") opt.c.revnext();
          opt.c.revredraw();
          if (opt.lastsliderstatus=="playing")                
      opt.c.revresume();
      });
  }
}

var lastStatBlur = function(opt) {
  opt.windowfocused = false;
  opt.lastsliderstatus = opt.sliderstatus;
  opt.c.revpause(); 
  var actsh = opt.c.find('.active-revslide .slotholder'),
    nextsh = opt.c.find('.processing-revslide .slotholder');

  if (nextsh.data('kenburns')=="on")        
    _R.stopKenBurn(nextsh,opt);

  if (actsh.data('kenburns')=="on")         
    _R.stopKenBurn(actsh,opt);
  
  
}

var tabBlurringCheck = function(container,opt) {
  var notIE = (document.documentMode === undefined),
      isChromium = window.chrome;

  if (notIE && !isChromium) {
      // checks for Firefox and other  NON IE Chrome versions
      jQuery(window).on("focusin", function () {
      restartOnFocus(opt);
      }).on("focusout", function () {
        lastStatBlur(opt);                
      });
  } else {
      // checks for IE and Chromium versions
      if (window.addEventListener) {            
          // bind focus event
          window.addEventListener("focus", function (event) {
        restartOnFocus(opt);
          }, false);
          // bind blur event
          window.addEventListener("blur", function (event) {
        lastStatBlur(opt);    
          }, false);

      } else {
          // bind focus event
          window.attachEvent("focus", function (event) {
            restartOnFocus(opt);
          });
          // bind focus event
          window.attachEvent("blur", function (event) {
        lastStatBlur(opt);    
          });
      }
  }
}


//  - GET THE URL PARAMETER //

var getUrlVars = function (hashdivider){
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
  for(var i = 0; i < hashes.length; i++)
  {
    hashes[i] = hashes[i].replace('%3D',"=");
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
})(jQuery);