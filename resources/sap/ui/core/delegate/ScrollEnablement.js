/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.delegate.ScrollEnablement");jQuery.sap.require("sap.ui.base.Object");(function(){sap.ui.base.Object.extend("sap.ui.core.delegate.ScrollEnablement",{constructor:function(c,s,C){sap.ui.base.Object.apply(this);this._oControl=c;this._oControl.addDelegate(this);this._sContentId=s;this._bHorizontal=!!C.horizontal;this._bVertical=!!C.vertical;this._scrollX=0;this._scrollY=0;this._scroller=null;a(this,C);if(this._init){this._init.apply(this,arguments)}},setHorizontal:function(h){this._bHorizontal=!!h;if(this._scroller&&this._zynga){this._scroller.options.scrollingX=this._bHorizontal}},setVertical:function(v){this._bVertical=!!v;if(this._scroller&&this._zynga){this._scroller.options.scrollingY=this._bVertical}},scrollTo:function(x,y,t){this._scrollX=x;this._scrollY=y;if(this._scroller){if(this._zynga){if(!isNaN(t)){this._scroller.options.animationDuration=t}jQuery.sap.log.debug("Scroll: Zynga");this._scroller.scrollTo(x,y,!!t)}else{jQuery.sap.log.debug("Scroll: iScroll");this._scroller.scrollTo(-x,-y,t,false)}}return this},destroy:function(){if(this._exit){this._exit()}if(this._oControl){this._oControl.removeDelegate(this);this._oControl=undefined}this._isDestroyed=true},refresh:function(){if(this._refresh){this._refresh()}}});var i={_refresh:function(){if(this._scroller&&this._sContentId&&jQuery.sap.domById(this._sContentId)){this._scroller.refresh()}},_cleanup:function(){if(this._sScrollerResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sScrollerResizeListenerId);this._sScrollerResizeListenerId=null}if(this._sContentResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);this._sContentResizeListenerId=null}if(this._scroller){this._scroller.stop();this._scrollX=-this._scroller.x;this._scrollY=-this._scroller.y;this._scroller.destroy();this._scroller=null}},onBeforeRendering:function(){this._cleanup()},onAfterRendering:function(){var t=this;var b=false;if(jQuery.os.ios){b=true}this._sScrollerId=jQuery.sap.byId(this._sContentId).parent().attr("id");this._scroller=new window.iScroll(this._sScrollerId,{useTransition:true,bounce:b,hScroll:this._bHorizontal,vScroll:this._bVertical,onBeforeScrollStart:function(){},onScrollEnd:function(){if(t._scroll){t._scrollX=-t._scroll.x;t._scrollY=-t._scroll.y}}});this._scroller._pos(-this._scrollX,-this._scrollY);this._sScrollerResizeListenerId=sap.ui.core.ResizeHandler.register(jQuery.sap.domById(this._sScrollerId),jQuery.proxy(function(){if((!this._sContentId||!jQuery.sap.domById(this._sContentId))&&this._sScrollerResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sScrollerResizeListenerId);this._sScrollerResizeListenerId=null}else{this._refresh()}},this));this._sContentResizeListenerId=sap.ui.core.ResizeHandler.register(jQuery.sap.domById(this._sContentId),jQuery.proxy(function(){if((!this._sContentId||!jQuery.sap.domById(this._sContentId))&&this._sContentResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);this._sContentResizeListenerId=null}else{this._refresh()}},this))},ontouchmove:function(e){if(this._preventTouchMoveDefault){e.preventDefault()}}};var z={_refresh:function(){if(this._scroller&&this._sContentId&&jQuery.sap.domById(this._sContentId)){var c=jQuery.sap.byId(this._sContentId);var C=c.parent();this._scroller.setDimensions(C.width(),C.height(),c.width(),c.height())}},_cleanup:function(){if(this._sScrollerResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sScrollerResizeListenerId);this._sScrollerResizeListenerId=null}if(this._sContentResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);this._sContentResizeListenerId=null}if(this._scroller){var v=this._scroller.getValues();this._scrollX=v.left;this._scrollY=v.top}},onBeforeRendering:function(){this._cleanup()},onAfterRendering:function(){this._refresh();this._scroller.scrollTo(this._scrollX,this._scrollY,false);this._sContentResizeListenerId=sap.ui.core.ResizeHandler.register(jQuery.sap.domById(this._sContentId),jQuery.proxy(function(){if((!this._sContentId||!jQuery.sap.domById(this._sContentId))&&this._sContentResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);this._sContentResizeListenerId=null}else{this._refresh()}},this))},ontouchstart:function(e){if(e.target.tagName.match(/input|textarea|select/i)){return}this._scroller.doTouchStart(e.touches,e.timeStamp)},ontouchend:function(e){this._scroller.doTouchEnd(e.timeStamp)},ontouchmove:function(e){this._scroller.doTouchMove(e.touches,e.timeStamp);if(this._preventTouchMoveDefault){e.preventDefault()}else{e.stopPropagation()}}};function a(s,c){var d;if(!jQuery.support.touch&&!c.nonTouchScrolling){d={}}else{jQuery.sap.require("jquery.sap.mobile");d={_init:function(C,S,c){function b(e,h,v){var o=new window.Scroller(function(f,t,g){var j=jQuery.sap.byId(e).parent();j.scrollLeft(f);j.scrollTop(t)},{scrollingX:h,scrollingY:v,bouncing:false});return o}var l=c.zynga?"z":"i";this._preventTouchMoveDefault=!!c.preventDefault;this._scroller=null;switch(l){case"z":jQuery.sap.require("sap.ui.thirdparty.zyngascroll");jQuery.extend(this,z);this._zynga=true;this._scroller=b(this._sContentId,this._bHorizontal,this._bVertical);break;default:jQuery.sap.require("sap.ui.thirdparty.iscroll-lite");jQuery.extend(this,i);break}},_exit:function(){if(this._cleanup){this._cleanup()}this._scroller=null}}}jQuery.extend(s,d)}}());
