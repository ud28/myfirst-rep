/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.core.BaseChart");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.viz.ui5.core.BaseChart",{metadata:{"abstract":true,library:"sap.viz",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'640px'},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'480px'}},aggregations:{"dataset":{type:"sap.viz.ui5.data.Dataset",multiple:false},"noData":{type:"sap.ui.core.Control",multiple:false}},events:{"beforeCreateViz":{}}}});sap.viz.ui5.core.BaseChart.M_EVENTS={'beforeCreateViz':'beforeCreateViz'};jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");
sap.viz.ui5.core.BaseChart.prototype.init=function(){sap.viz._initializeVIZ();this._mVIZHandler={}};
sap.viz.ui5.core.BaseChart.prototype.onAfterRendering=function(){if(!this.getDataset().getVIZDataset()){return}var u={type:this.getVIZChartType(),data:this.getDataset().getVIZDataset(),container:this.getDomRef(),options:this._getOptions()};this.fireBeforeCreateViz({usrOptions:u});this._oVIZInstance=sap.viz.core.createViz(u);var t=this;jQuery.sap.forIn(this._mVIZHandler,function(n,h){t._oVIZInstance.on(n+sap.viz.ui5.core.BaseChart.EVENT_SUFFIX,h)})};
sap.viz.ui5.core.BaseChart.EVENT_SUFFIX=".sap.viz.ui5.core";sap.viz.ui5.core.BaseChart.prototype._getOrCreate=sap.viz.ui5.core.BaseStructuredType.prototype._getOrCreate;sap.viz.ui5.core.BaseChart.prototype._getOptions=sap.viz.ui5.core.BaseStructuredType.prototype._getOptions;
sap.viz.ui5.core.BaseChart.prototype._attachVIZEvent=function(n,d,h,l){var t=this;if(!this.hasListeners(n)){this._mVIZHandler[n]=function(o){t.fireEvent(n,o)};if(this._oVIZInstance){this._oVIZInstance.on(n+sap.viz.ui5.core.BaseChart.EVENT_SUFFIX,this._mVIZHandler[n])}}sap.ui.core.Control.prototype.attachEvent.apply(this,arguments);return this};
sap.viz.ui5.core.BaseChart.prototype._detachVIZEvent=function(n,d,h,l){sap.ui.core.Control.prototype.detachEvent.apply(this,arguments);if(!this.hasListeners(n)){if(this._oVIZInstance){this._oVIZInstance.on(n+sap.viz.ui5.core.BaseChart.EVENT_SUFFIX,null)}delete this._mVIZHandler[n]}return this};
sap.viz.ui5.core.BaseChart.prototype.getVIZInstance=function(){return this._oVIZInstance||null};
