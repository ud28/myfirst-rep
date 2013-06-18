/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.NotificationBar");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.NotificationBar",{metadata:{publicMethods:["hasItems"],library:"sap.ui.ux3",properties:{"visibleStatus":{type:"sap.ui.ux3.NotificationBarStatus",group:"Misc",defaultValue:sap.ui.ux3.NotificationBarStatus.Default},"resizeEnabled":{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{"messageNotifier":{type:"sap.ui.core.Element",multiple:false},"notifiers":{type:"sap.ui.core.Element",multiple:true,singularName:"notifier"}},events:{"display":{},"resize":{}}}});sap.ui.ux3.NotificationBar.M_EVENTS={'display':'display','resize':'resize'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");jQuery.sap.require("sap.ui.core.theming.Parameters");sap.ui.core.Control.extend("sap.ui.ux3.NotificationBar.NotifierView",{renderMessages:function(r){r.write("<div");r.writeAttribute("id",this.getId()+"-content");r.addClass("sapUiNotifierContent");r.writeClasses();r.write(">");var m=this.getMessages();var i=m.length-1;var f=true;for(;i>=0;i--){if(!f||(i==0&&m.length>1)){r.write("<div");r.addClass("sapUiNotificationBarCltSep");r.writeClasses();r.write(">");r.write("</div>")}else{f=false}var M=m[i];r.renderControl(M)}r.write("</div>")},metadata:{properties:{"title":"string","visibleItems":"int","renderMode":{type:"string",defaultValue:"callout"}},aggregations:{"messages":"sap.ui.ux3.NotificationBar.MessageView"}},init:function(){this._oResBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3")},exit:function(){if(this._renderedControl){delete this._renderedControl}delete this._oResBundle},getTitle:function(){var t=this.getProperty("title");var c=this.getMessages().length;if(c>0){var k="NOTIBAR_NOTIFIER_VIEW_TITLE";t=this._oResBundle.getText(k,[t,c])}return t},renderer:function(r,c){r.write("<div");r.addClass("sapUiNotifierContainer");r.writeControlData(c);r.writeClasses();r.write(">");r.write("<div");r.addClass("sapUiNotifierTitle");r.writeClasses();r.write(">");r.writeEscaped(c.getTitle());r.write("</div>");if(c.getMessages().length>0){c.renderMessages(r)}r.write("</div>")},onAfterRendering:function(){var $=jQuery.sap.byId(this.getId()+"-content");var a=$.children();var t=0,c=0;var v=this.getVisibleItems();for(var i=1;i<a.length;i++){var b=jQuery(a[i]);if(b.hasClass("sapUiNotifierMessage")){c++}var h=b.outerHeight(true);t+=h;if(c==v){t+=2;$.css("max-height",t)}}}});sap.ui.core.Control.extend("sap.ui.ux3.NotificationBar.MessageView",{metadata:{properties:{"text":"string","timestamp":"string","icon":"sap.ui.core.URI"}},renderer:function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiNotifierMessage");r.writeClasses();r.writeAttribute("tabindex","0");r.write(">");if(c.getIcon()){r.write("<div");r.addClass("sapUiNotifierMessageIcon");r.writeClasses();r.write(">");r.write("<img");r.writeAttribute("src",c.getIcon());r.write("/>");r.write("</div>")}r.write("<div");r.addClass("sapUiNotifierMessageText");r.writeClasses();r.write(">");r.writeEscaped(c.getText());r.write("</div>");r.write("<div");r.addClass("sapUiNotifierMessageTimestamp");r.writeClasses();r.write(">");r.writeEscaped(c.getTimestamp());r.write("</div>");r.write("</div>")},onclick:function(e){var n=this._message.getParent();this._message.getParent().fireMessageSelected({message:this._message,notifier:n})},onsapselect:function(e){this.onclick(e)},exit:function(e){if(this._message){delete this._message}}});(function(){var c=function(t){var i=t.hasItems();var l=t.getVisibleStatus();if(i&&l==="None"){return true}else if(!i&&l!=="None"){return true}else if(!i&&l!=="Min"){return true}else{return false}};var C=function(E){var l=E.getParameter("callout");switch(E.getParameter("type")){case"added":case"removed":var n=E.getParameter("notifier");if(this.getMessageNotifier()&&this.getMessageNotifier().getId()===n.getId()){var p=n.getMessages().concat(new Array());if(p.length>0){p.sort(sap.ui.core.Message.compareByType);var I=p.length-1;this._sSeverestMessageLevel=p[I].getLevel()}}if(c(this)){var q=this.hasItems();this.fireDisplay({show:q})}else{this.invalidate();if(E.getParameter("type")==="removed"){if(l.getContent().length>0){var N=l.getContent()[0];var M=E.getParameter("message");var t=N.getMessages();var u;for(var i=0;i<t.length;i++){u=t[i];if(M.getId()===u._message.getId()){u.destroy();l.rerender();break}}}}}break;case"openCallout":l.destroyContent();var n=E.getParameter("notifier");var v=new sap.ui.ux3.NotificationBar.NotifierView({title:n.getTitle(),visibleItems:this._visibleItems});var x=n.getMessages();for(var i=0;i<x.length;i++){var V=f(x[i],n,this);v.addMessage(V)}l.addContent(v);break}};sap.ui.ux3.NotificationBar.HOVER_ITEM_HEIGHT=16;sap.ui.ux3.NotificationBar.prototype.init=function(){this._oItemNavigation=new sap.ui.core.delegate.ItemNavigation();this._oItemNavigation.setCycling(true);this.addDelegate(this._oItemNavigation);this._iCalloutWidth=parseInt(250);this._iCalloutHeight=parseInt(200);this._visibleItems=5;this._eventListener=jQuery.proxy(C,this);this._oResBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");this._togglerPosition="50%";this._gapMessageArea="5";this._sSeverestMessageLevel=sap.ui.core.MessageType.None;jQuery(window).bind("resize",jQuery.proxy(o,this))};sap.ui.ux3.NotificationBar.prototype.exit=function(){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation;delete this._iCalloutWidth;delete this._iCalloutHeight;delete this._visibleItems;delete this._eventListener;if(this.getMessageNotifier()){var M=this.getMessageNotifier();M._oMessageArea.destroy();delete M._oMessageArea}delete this._resizeFrom;delete this._resizeTo;delete this._oResBundle;delete this._formerVisibleStatus;delete this._togglerPosition;delete this._gapMessageArea;delete this._isHovered;delete this._togglerClicked;delete this._sSeverestMessageLevel;jQuery(window).unbind("resize",o)};var f=function(M,n,N){var i=new sap.ui.ux3.NotificationBar.MessageView({text:M.getText(),timestamp:M.getTimestamp()});i._message=M;if(n.sParentAggregationName=="messageNotifier"){if(N.getVisibleStatus()==sap.ui.ux3.NotificationBarStatus.Max){i.setIcon(M.getIcon()||M.getDefaultIcon("32x32"))}else{i.setIcon(M.getIcon()||M.getDefaultIcon())}}else{i.setIcon(M.getIcon())}return i};var r=function(t,n){n.attachEvent("_childControlCalling",t._eventListener,t)};var d=function(t,n){n.detachEvent("_childControlCalling",t._eventListener,t)};sap.ui.ux3.NotificationBar.prototype.addNotifier=function(n){if(n){var i=(this.getVisibleStatus()==sap.ui.ux3.NotificationBarStatus.None)?true:false;this.addAggregation("notifiers",n,i);r(this,n)}return this};sap.ui.ux3.NotificationBar.prototype.insertNotifier=function(n,i){if(n){this.insertAggregation("notifiers",n,i);r(this,n)}return this};sap.ui.ux3.NotificationBar.prototype.removeNotifier=function(n){var i=this.removeAggregation("notifiers",n);d(this,i);return i};sap.ui.ux3.NotificationBar.prototype.removeAllNotifiers=function(){var l=this.removeAllAggregation("notifiers");for(var i=0;i<l.length;i++){var n=l[i];d(this,n)}return l};sap.ui.ux3.NotificationBar.prototype.destroyNotifiers=function(){var l=this.getNotifiers();for(var i=0;i<l.length;i++){var n=l[i];d(this,n)}this.destroyAggregation("notifiers");return this};sap.ui.ux3.NotificationBar.prototype.setMessageNotifier=function(M){var i=this.getMessageNotifier();if(i){i._oMessageArea.destroy();delete i._oMessageArea;d(this,i)}this.setAggregation("messageNotifier",M);if(M){M._oMessageArea=new sap.ui.ux3.NotificationBar.MessageView(this.getId()+"-inplaceMessage");M._oMessageArea.setParent(M);r(this,M)}return this};sap.ui.ux3.NotificationBar.prototype.destroyMessageNotifier=function(M){var i=this.getMessageNotifier();if(i){i._oMessageArea.destroy();delete i._oMessageArea;d(this,i)}this.destroyAggregation("messageNotifier");return this};var s=function(t,i){switch(i){case sap.ui.ux3.NotificationBarStatus.Min:t.$().addClass("sapUiNotificationBarMinimized");break;case sap.ui.ux3.NotificationBarStatus.Max:var H=t.getHeightOfStatus(t.getVisibleStatus());t.$().addClass("sapUiNotificationBarMaximized");t.$().css("height",H);var $=jQuery.sap.byId(t.getId()+"-containers");$.css("max-height",H);break;case sap.ui.ux3.NotificationBarStatus.None:if(!t._resizeTo){t.$().css("display","none")}break;case sap.ui.ux3.NotificationBarStatus.Default:default:t.$().removeClass("sapUiNotificationBarMaximized");t.$().removeClass("sapUiNotificationBarMinimized");break}};var R=function(t){if(w(t)){var F=t.getHeightOfStatus(t._resizeFrom);t.$().css("height",F);var T=t.getHeightOfStatus(t._resizeTo);t.$().stop().animate({height:T},"fast",function(){var l=t.getVisibleStatus();if(l==="None"){t.$().css("display","none");if(t.hasItems()){if(t.getMessageNotifier()){var M=t.getMessageNotifier();M.$().css("display","none")}if(t.getNotifiers().length>0){var n=t.getNotifiers();for(var i=0;i<n.length;i++){n[i].$().css("display","none")}}}}s(t,l);j(t,l)})}else{var l=t.getVisibleStatus();s(t,l)}delete t._resizeFrom;delete t._resizeTo};var S=function(t){if(t.getMessageNotifier()&&t.getMessageNotifier().hasItems()){var $=undefined;var I=t.getId()+"-notifiers";var l=jQuery.sap.byId(I);if(l.length>0){var T=parseInt(l.width());var n=l.children();for(var i=0;i<n.length;i++){var p=jQuery(n[i]);if(p.hasClass("sapUiNotifier")){T-=p.width()}else if(p.hasClass("sapUiNotifierSeparator")){T-=p.width()}else if(p.hasClass("sapUiInPlaceMessage")){$=p}}if($){T-=t._gapMessageArea+2;$.css("width",T+"px")}}}};var m=function(E){var i=jQuery(window).height();var n=E.data.notibar;var $=jQuery.sap.byId(n.getId()+"-hoverItem");var l=E.clientY;var p=parseInt(l,10);var B=i-$.outerHeight();if(n._isHovered){if(p<B){var H=jQuery.proxy(h,n);$.on("mouseleave",H);window.setTimeout(function(){var q=jQuery.Event("mouseleave",{notibar:n});$.trigger(q);$.off("mouseleave",H)},100);delete n._isHovered}}else{if(p>=B){var H=jQuery.proxy(h,n);$.on("mouseenter",H);window.setTimeout(function(){var q=jQuery.Event("mouseenter",{notibar:n});$.trigger(q);$.off("mouseenter",H)},100);n._isHovered=true}}};var a=function(n){var $=jQuery(document);if(n.getVisibleStatus()==="Min"){$.on("mousemove",{notibar:n},m)}else{$.off("mousemove",m)}};sap.ui.ux3.NotificationBar.prototype.onBeforeRendering=function(){if(jQuery.browser.msie){window.parent.document.mousePageY=0}};sap.ui.ux3.NotificationBar.prototype.onAfterRendering=function(){this._oItemNavigation.setRootDomRef(this.getDomRef());var I=[];var n=this.getNotifiers();for(var i=0;i<n.length;i++){I.push(n[i].getDomRef())}var M=this.getMessageNotifier();if(M!=null){I.push(M.getDomRef());I.push(jQuery.sap.byId(this.getId()+"-inplaceMessage"))}this._oItemNavigation.setItemDomRefs(I);R(this);S(this);b(this,this.getMessageNotifier());e(this);if(jQuery.browser.msie){a(this)}if(jQuery.browser.mobile){var $=jQuery.sap.byId(this.getId()+"-toggler");if(this.getVisibleStatus()!==sap.ui.ux3.NotificationBarStatus.None){$.css("display","block")}else{$.css("display","none")}}};var b=function(t,M){if(M&&M.hasItems()){var $=jQuery.sap.byId(M.getId()+"-counter");$.removeClass("sapUiMessageInformation");$.removeClass("sapUiMessageSuccess");$.removeClass("sapUiMessageWarning");$.removeClass("sapUiMessageError");var l=t._sSeverestMessageLevel;$.addClass("sapUiMessage"+l);var i=M.getMessages().length;var K="NOTIBAR_MESSAGE_NOTIFIER_DESC_LEVEL_"+l.toUpperCase()+i===1?"_SING":"_PL";g(t,M,K,i)}};var e=function(t){var n=t.getNotifiers();for(var i=0;i<n.length;i++){var l=n[i].getMessages().length;var K="NOTIBAR_NOTIFIER_COUNT_TEXT_"+l===1?"SING":"PL";g(t,n[i],K,l)}};var g=function(t,n,K,i){var I=n.getId();var $=jQuery.sap.byId(I+"-description");var M=t._oResBundle.getText(K,[i]);$.html(M)};var h=function(E){var i=this.getId()+"-toggler";var $=jQuery.sap.byId(i);var D=($.css("display")==="block")?true:false;if(D){if(E.type==="mouseleave"){$.css("display","none")}}else{if(E.type==="mouseenter"){$.css("display","block")}}};var o=function(E){S(this)};var w=function(t){if(t._resizeFrom&&t._resizeTo){if(t._resizeFrom!=t._resizeTo){return true}}return false};sap.ui.ux3.NotificationBar.prototype.hasItems=function(){var n=this.getNotifiers();if(n.length>0){for(var i=0;i<n.length;i++){var N=n[i];if(N.hasItems()){return true}}}if(this.getMessageNotifier()){if(this.getMessageNotifier().hasItems()){return true}}return false};var j=function(n,t){var i="none";switch(t){case sap.ui.ux3.NotificationBarStatus.Max:case sap.ui.ux3.NotificationBarStatus.None:break;case sap.ui.ux3.NotificationBarStatus.Min:n.$().stop().animate({height:n.getHeightOfStatus(t)},"fast");n.$().addClass("sapUiNotificationBarMinimized");i="block";break;default:case sap.ui.ux3.NotificationBarStatus.Default:n.$().stop().animate({height:n.getHeightOfStatus(t)},"fast");n.$().removeClass("sapUiNotificationBarMaximized");n.$().removeClass("sapUiNotificationBarMinimized");break}var $=jQuery.sap.byId(n.getId()+"-hoverItem");$.css("display",i)};sap.ui.ux3.NotificationBar.prototype.onfocusin=function(E){if(this._togglerClicked){delete this._togglerClicked;E.stopImmediatePropagation(true)}};sap.ui.ux3.NotificationBar.prototype.onclick=function(E){this._togglerClicked=true;this.$().blur();var $=jQuery(document.activeElement);k(this);var i=E.target.id;var l=i.split("-");if(l){var v=this.getVisibleStatus();var I=l.length-1;switch(l[I]){case"ArrowUp":if(v==="Min"){this.setVisibleStatus("Default")}else{this.setVisibleStatus("Max")}break;case"ArrowDown":if(v==="Max"){this.setVisibleStatus("Default")}else{this.setVisibleStatus("Min")}E.preventDefault();break;case"BarUp":if(this._formerVisibleStatus){this.setVisibleStatus(this._formerVisibleStatus)}else{this.setVisibleStatus("Default")}break;case"BarDown":this._formerVisibleStatus=v;this.setVisibleStatus("Min");$.blur();break;default:if($.hasClass("sapUiNotifier")){$.focus()}else{if(this.hasItems()){var n=this.getNotifiers();if(n.length>0){var p=jQuery(n[0]);p.focus()}else{var q=this.getMessageNotifier();if(q){jQuery(q).focus()}}}}break}}};sap.ui.ux3.NotificationBar.prototype.onThemeChanged=function(E){this.invalidate()};var k=function(t){var n=t.getNotifiers();for(var i=0;i<n.length;i++){var N=n[i];N._oCallout.close()}if(t.getMessageNotifier()){t.getMessageNotifier()._oCallout.close()}};sap.ui.ux3.NotificationBar.prototype.getHeightOfStatus=function(i){var p="sap.ui.ux3.NotificationBar:";var P="";if(i==sap.ui.ux3.NotificationBarStatus.Min){P=p+"sapUiNotificationBarHeightMinimized"}else if(i==sap.ui.ux3.NotificationBarStatus.Default){P=p+"sapUiNotificationBarHeight"}else if(i==sap.ui.ux3.NotificationBarStatus.Max){P=p+"sapUiNotificationBarHeightMaximized";P=sap.ui.core.theming.Parameters.get(P);var I=P.indexOf("%");if(I!=-1){var l=P.substring(0,I);var H=jQuery(window).height();H=parseInt(H/100*l);var _=parseInt(this.getHeightOfStatus(sap.ui.ux3.NotificationBarStatus.Default));if(H<_){H=_+1}}else{var M="No valid percantage value given for maximized size. 400px is used";jQuery.sap.log.warning(M);H=400}return H+"px"}else{return"0px"}P=sap.ui.core.theming.Parameters.get(P);return P};sap.ui.ux3.NotificationBar.prototype.setVisibleStatus=function(t){this._resizeFrom=this.getVisibleStatus();this._resizeTo=t;if(this._resizeFrom!==this._resizeTo){if(t===sap.ui.ux3.NotificationBarStatus.None){k(this);if(this.getDomRef()){j(this,t)}else{this.$().css("height","0px");this.$().css("display","none")}}this.setProperty("visibleStatus",t)}}}());