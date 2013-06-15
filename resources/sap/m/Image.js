/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Image");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Image",{metadata:{library:"sap.m",properties:{"src":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"height":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"decorative":{type:"boolean",group:"Accessibility",defaultValue:true},"alt":{type:"string",group:"Accessibility",defaultValue:null},"useMap":{type:"string",group:"Misc",defaultValue:null},"densityAware":{type:"boolean",group:"Misc",defaultValue:true},"activeSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:""}},events:{"tap":{}}}});sap.m.Image.M_EVENTS={'tap':'tap'};
sap.m.Image.prototype.getDevicePixelRatio=function(){return window.devicePixelRatio===undefined?1:window.devicePixelRatio};
sap.m.Image.prototype.onload=function(e){if(!this._defaultEventTriggered){this._defaultEventTriggered=true}var $=this.$(),d=$[0];if(!this._isWidthOrHeightSet()){if(this._iLoadImageDensity>1){if(($.width()===d.naturalWidth)&&($.height()===d.naturalHeight)){$.width($.width()/this._iLoadImageDensity)}}}$.removeClass("sapMNoImg")};
sap.m.Image.prototype.onerror=function(e){if(!this._defaultEventTriggered){this._defaultEventTriggered=true}var $=this.$(),c=$.attr("src"),d=this.getDevicePixelRatio();$.addClass("sapMNoImg");if(!c||this._iLoadImageDensity===1){return}if(d===2||d<1){this._iLoadImageDensity=1;$.attr("src",this._generateSrcByDensity(c,1))}else if(d===1.5){if(this._bVersion2Tried){this._iLoadImageDensity=1;$.attr("src",this._generateSrcByDensity(c,1))}else{this._iLoadImageDensity=2;$.attr("src",this._generateSrcByDensity(c,2));this._bVersion2Tried=true}}};
sap.m.Image.prototype.onAfterRendering=function(){if(this.getDensityAware()){var d=this.$();d.bind("load",jQuery.proxy(this.onload,this));d.bind("error",jQuery.proxy(this.onerror,this));var a=this.getDomRef();if(a.complete&&!this._defaultEventTriggered){if(a.naturalWidth>0){d.trigger("load")}else{d.trigger("error")}}}};
sap.m.Image.prototype.ontouchstart=function(e){if(e.srcControl.mEventRegistry["tap"]){e.originalEvent._sapui_handledByControl=true}var a=this.getActiveSrc();if(a){if((e.targetTouches&&e.targetTouches.length===1)||!e.targetTouches){this.$().attr("src",this._getDensityAwareActiveSrc());if(!this._touchEndProxy){this._touchEndProxy=jQuery.proxy(this._ontouchend,this)}jQuery(window.document).bind("touchcancel vmouseup",this._touchEndProxy)}}if(!jQuery.os.ios)e.preventDefault()};
sap.m.Image.prototype._ontouchend=function(e){if((e.targetTouches&&e.targetTouches.length===0)||!e.targetTouches){this.$().attr("src",this._getDensityAwareSrc()).show();jQuery(window.document).unbind("touchcancel vmouseup",this._touchEndProxy)}};
sap.m.Image.prototype.setSrc=function(s){if(s===this.getSrc()){return}this.setProperty("src",s,true);var d=this.getDomRef();if(d){this.$().attr("src",this._getDensityAwareSrc())}};
sap.m.Image.prototype.setActiveSrc=function(a){if(!a){a=""}this.setProperty("activeSrc",a,true)};
sap.m.Image.prototype.ontap=function(e){this.fireTap({})};
sap.m.Image.prototype._isWidthOrHeightSet=function(){return(this.getWidth()&&this.getWidth()!=='')||(this.getHeight()&&this.getHeight()!=='')};
sap.m.Image.prototype._getDensityAwareSrc=function(){var d=this.getDevicePixelRatio(),s=this.getSrc();this._iLoadImageDensity=d;if(d===1||!this.getDensityAware()){return s}return this._generateSrcByDensity(s,d)};
sap.m.Image.prototype._getDensityAwareActiveSrc=function(){var d=this.getDevicePixelRatio(),a=this.getActiveSrc();this._iLoadImageDensity=d;if(d===1||!this.getDensityAware()){return a}return this._generateSrcByDensity(a,d)};
sap.m.Image.prototype._generateSrcByDensity=function(s,d){if(!s){return""}var p=s.lastIndexOf("."),n=s.substring(0,p),e=s.substring(p),a=n.lastIndexOf("@");if(p==-1){return s+"@"+d}if(a!==-1&&n.length-a<6){n=n.substring(0,a)}if(d===1){return n+e}n=n+"@"+d;return n+e};
