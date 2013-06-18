/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.form.ResponsiveLayout");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.form.FormLayout");sap.ui.commons.form.FormLayout.extend("sap.ui.commons.form.ResponsiveLayout",{metadata:{library:"sap.ui.commons"}});jQuery.sap.require("sap.ui.commons.layout.ResponsiveFlowLayout");jQuery.sap.require("sap.ui.commons.layout.ResponsiveFlowLayoutData");sap.ui.core.Control.extend("sap.ui.commons.form.ResponsiveLayoutPanel",{metadata:{aggregations:{"content":{type:"sap.ui.commons.layout.ResponsiveFlowLayout",multiple:false}},associations:{"container":{type:"sap.ui.commons.form.FormContainer",multiple:false},"layout":{type:"sap.ui.commons.form.ResponsiveLayout",multiple:false},}},getLayoutData:function(){var c=sap.ui.getCore().byId(this.getContainer());var l=sap.ui.getCore().byId(this.getLayout());var L;if(l&&c){L=l.getLayoutDataForElement(c,"sap.ui.commons.layout.ResponsiveFlowLayoutData")}return L},getCustomData:function(){var c=sap.ui.getCore().byId(this.getContainer());if(c){return c.getCustomData()}},refreshExpanded:function(){var c=sap.ui.getCore().byId(this.getContainer());if(c){if(c.getExpanded()){jQuery.sap.byId(this.getId()).removeClass("sapUiRLContainerColl")}else{jQuery.sap.byId(this.getId()).addClass("sapUiRLContainerColl")}}},renderer:function(r,p){var c=sap.ui.getCore().byId(p.getContainer());var l=sap.ui.getCore().byId(p.getLayout());var C=p.getContent();var e=c.getExpandable();var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(p);r.addClass("sapUiRLContainer");if(e&&!c.getExpanded()){r.addClass("sapUiRLContainerColl")}if(t){r.writeAttributeEscaped('title',t)}r.writeClasses();r.write(">");if(c.getTitle()){l.getRenderer().renderTitle(r,c.getTitle(),c._oExpandButton,e,sap.ui.commons.TitleLevel.H4,c.getId())}if(C){r.write("<div");r.addClass("sapUiRLContainerCont");r.writeClasses();r.write(">");r.renderControl(C);r.write("</div>")}r.write("</div>")}});(function(){sap.ui.commons.form.ResponsiveLayout.prototype.init=function(){this.mContainers={};this._defaultLayoutData=new sap.ui.commons.layout.ResponsiveFlowLayoutData({margin:false})};sap.ui.commons.form.ResponsiveLayout.prototype.exit=function(){var t=this;for(var C in this.mContainers){h(t,C)}if(this._mainRFLayout){this._mainRFLayout.destroy();delete this._mainRFLayout}this._defaultLayoutData.destroy();delete this._defaultLayoutData};sap.ui.commons.form.ResponsiveLayout.prototype.onBeforeRendering=function(E){var F=this.getParent();if(!F||!(F instanceof sap.ui.commons.form.Form)){return}var t=this;_(t,F);j(t,F)};sap.ui.commons.form.ResponsiveLayout.prototype.contentOnAfterRendering=function(F,C){sap.ui.commons.form.FormLayout.prototype.contentOnAfterRendering.apply(this,arguments);if(C.getWidth&&!C.getWidth()){C.$().css("width","100%")}};sap.ui.commons.form.ResponsiveLayout.prototype.toggleContainerExpanded=function(C){var E=C.getExpanded();var s=C.getId();if(this.mContainers[s]&&this.mContainers[s][0]){var p=this.mContainers[s][0];p.refreshExpanded()}};sap.ui.commons.form.ResponsiveLayout.prototype.onLayoutDataChange=function(E){var s=E.srcControl;if(s instanceof sap.ui.commons.form.FormContainer){if(this._mainRFLayout){this._mainRFLayout.onLayoutDataChange(E)}}else if(s instanceof sap.ui.commons.form.FormElement){var C=s.getParent().getId();if(this.mContainers[C]&&this.mContainers[C][1]){this.mContainers[C][1].onLayoutDataChange(E)}}else{var p=s.getParent();if(p instanceof sap.ui.commons.form.FormElement){var o=p.getParent();var C=o.getId();var i=p.getId();if(this.mContainers[C]&&this.mContainers[C][2]&&this.mContainers[C][2][i]){this.mContainers[C][2][i][0].onLayoutDataChange(E)}}}};sap.ui.commons.form.ResponsiveLayout.prototype.onsapup=function(E){this.onsapleft(E)};sap.ui.commons.form.ResponsiveLayout.prototype.onsapdown=function(E){this.onsapright(E)};var _=function(l,F){var C=F.getFormContainers();var L=C.length;var v=0;for(var i=0;i<L;i++){var o=C[i];if(o.getVisible()){v++;var s=o.getId();var p=undefined;var r=undefined;if(l.mContainers[s]&&l.mContainers[s][1]){r=l.mContainers[s][1]}else{r=d(l,o,undefined)}var t=o.getTitle();if(t||o.getExpandable()){if(l.mContainers[s]&&l.mContainers[s][0]){p=l.mContainers[s][0]}else{p=a(l,o,r);e(r,true)}}else{if(l.mContainers[s]&&l.mContainers[s][0]){b(l.mContainers[s][0]);e(r,false)}}var m=c(l,o,r);l.mContainers[s]=[p,r,m]}}var O=k(l.mContainers);if(v<O){for(var s in l.mContainers){var n=false;for(var i=0;i<L;i++){var o=C[i];if(s==o.getId()&&o.getVisible()){n=true;break}}if(!n){h(l,s)}}}};var a=function(l,C,r){var s=C.getId();var p=new sap.ui.commons.form.ResponsiveLayoutPanel(s+"--Panel",{container:C,layout:l,content:r});return p};var b=function(p){p.setContent("");p.setLayout("");p.setContainer("");p.destroy();delete p};var c=function(l,C,o){var s=C.getId();var E=C.getFormElements();var L=E.length;var v=0;var r={};if(l.mContainers[s]&&l.mContainers[s][2]){r=l.mContainers[s][2]}var R;var F;for(var i=0;i<L;i++){var m=E[i];if(m.getVisible()){v++;var n=m.getId();if(r[n]){R=r[n][0]}else{R=d(l,C,m);R.addStyleClass("sapUiRLElement");r[n]=[R,undefined];o.insertContent(R,i)}var p=m.getFields();if(m.getLabel()&&p.length>1){if(r[n][1]){F=r[n][1]}else{F=d(l,C,m,true);F.addStyleClass("sapUiRLElementFields");r[n][1]=F}f(l,F,p)}else{if(r[n][1]){F=r[n][1];g(F);r[n][1]=undefined}}}}var O=k(r);if(v<O){for(var n in r){var q=false;for(var i=0;i<L;i++){var m=E[i];if(n==m.getId()&&m.getVisible()){q=true;break}}if(!q){if(r[n][1]){F=r[n][1];g(F)}R=r[n][0];o.removeContent(R);g(R);delete r[n]}}}return r};var d=function(l,C,E,i){var I;if(E&&!i){I=E.getId()+"--RFLayout"}else if(E&&i){I=E.getId()+"--content--RFLayout"}else if(C){I=C.getId()+"--RFLayout"}else{return}var r=new sap.ui.commons.layout.ResponsiveFlowLayout(I);r.__myParentLayout=l;r.__myParentContainer=C;if(E){r.__myParentElement=E;if(!i){r.getContent=function(){var E=this.__myParentElement;if(E){var m=new Array();var L=E.getLabelControl();var F=E.getFields();if(!L||F.length<=1){var m=F;if(L){m.unshift(L)}}else{var l=this.__myParentLayout;var C=this.__myParentContainer;var s=C.getId();var n=E.getId();if(L){m.push(L)}if(l.mContainers[s]&&l.mContainers[s][2]&&l.mContainers[s][2][n]){m.push(l.mContainers[s][2][n][1])}}return m}else{return false}}}else{r.getContent=function(){var E=this.__myParentElement;if(E){return E.getFields()}else{return false}}}}if((E&&!i)||(!E&&!C.getTitle()&&!C.getExpandable())){e(r,false)}else{r.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData({margin:false}))}return r};var e=function(r,o){if(o){if(r.__originalGetLayoutData){r.getLayoutData=r.__originalGetLayoutData;delete r.__originalGetLayoutData}}else if(!r.__originalGetLayoutData){r.__originalGetLayoutData=r.getLayoutData;r.getLayoutData=function(){var l=this.__myParentLayout;var C=this.__myParentContainer;var E=this.__myParentElement;var L;if(E){L=l.getLayoutDataForElement(E,"sap.ui.commons.layout.ResponsiveFlowLayoutData")}else if(C){L=l.getLayoutDataForElement(C,"sap.ui.commons.layout.ResponsiveFlowLayoutData")}if(L){return L}else{return l._defaultLayoutData}}}};var f=function(l,r,F){var L;var w=0;for(var i=0;i<F.length;i++){var o=F[i];L=l.getLayoutDataForElement(o,"sap.ui.commons.layout.ResponsiveFlowLayoutData");if(L){w=w+L.getWeight()}else{w++}}L=r.getLayoutData();if(L){L.setWeight(w)}else{r.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData({weight:w}))}};var g=function(r){if(r.__myParentContainer){r.__myParentContainer=undefined}if(r.__myParentElement){r.__myParentElement=undefined}r.__myParentLayout=undefined;r.destroy();delete r};var h=function(l,C){var i=l.mContainers[C];var r;var E=i[2];if(E){for(var s in E){if(E[s][1]){g(E[s][1])}r=E[s][0];g(r);delete E[s]}}r=i[1];if(r){r.removeAllContent();g(r)}var p=i[0];if(p){b(p)}delete l.mContainers[C]};var j=function(l,F){var C=F.getFormContainers();var L=0;var m=0;for(var i=0;i<C.length;i++){var o=C[i];if(o.getVisible()){L++}}if(L>1){if(!l._mainRFLayout){l._mainRFLayout=new sap.ui.commons.layout.ResponsiveFlowLayout(F.getId()+"--RFLayout").setParent(l)}else{var n=l._mainRFLayout.getContent();m=n.length;var E=false;for(var i=0;i<m;i++){var p=n[i];var o=undefined;if(p.getContainer){o=sap.ui.getCore().byId(p.getContainer())}else{o=p.__myParentContainer}if(o&&o.getVisible()){var q=l.mContainers[o.getId()];if(q[0]&&q[0]!=p){E=true;break}if(!q[0]&&q[1]&&q[1]!=p){E=true;break}}else{l._mainRFLayout.removeContent(p)}}if(E){l._mainRFLayout.removeAllContent();m=0}}if(m<L){for(var i=0;i<C.length;i++){var o=C[i];if(o.getVisible()){var s=o.getId();if(l.mContainers[s]){if(l.mContainers[s][0]){l._mainRFLayout.addContent(l.mContainers[s][0])}else if(l.mContainers[s][1]){l._mainRFLayout.addContent(l.mContainers[s][1])}}}}}}};var k=function(o){var l=0;if(!Object.keys){jQuery.each(o,function(){l++})}else{l=Object.keys(o).length}return l}}());