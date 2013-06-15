/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.Donut");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseChart");sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.Donut",{metadata:{library:"sap.viz",aggregations:{"title":{type:"sap.viz.ui5.types.Title",multiple:false},"legend":{type:"sap.viz.ui5.types.Legend",multiple:false},"interaction":{type:"sap.viz.ui5.types.controller.Interaction",multiple:false},"plotArea":{type:"sap.viz.ui5.types.Pie",multiple:false}},events:{"showTooltip":{},"hideTooltip":{},"selectData":{},"deselectData":{}}}});sap.viz.ui5.Donut.M_EVENTS={'showTooltip':'showTooltip','hideTooltip':'hideTooltip','selectData':'selectData','deselectData':'deselectData'};
sap.viz.ui5.Donut.prototype.getVIZChartType=function(){return"viz/donut"};
sap.viz.ui5.Donut.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.Donut.prototype.getLegend=function(){return this._getOrCreate("legend")};
sap.viz.ui5.Donut.prototype.getInteraction=function(){return this._getOrCreate("interaction")};
sap.viz.ui5.Donut.prototype.getPlotArea=function(){return this._getOrCreate("plotArea")};
sap.viz.ui5.Donut.prototype.attachShowTooltip=function(d,h,l){return this._attachVIZEvent("showTooltip",d,h,l)};
sap.viz.ui5.Donut.prototype.detachShowTooltip=function(h,l){return this._detachVIZEvent("showTooltip",h,l)};
sap.viz.ui5.Donut.prototype.attachHideTooltip=function(d,h,l){return this._attachVIZEvent("hideTooltip",d,h,l)};
sap.viz.ui5.Donut.prototype.detachHideTooltip=function(h,l){return this._detachVIZEvent("hideTooltip",h,l)};
sap.viz.ui5.Donut.prototype.attachSelectData=function(d,h,l){return this._attachVIZEvent("selectData",d,h,l)};
sap.viz.ui5.Donut.prototype.detachSelectData=function(h,l){return this._detachVIZEvent("selectData",h,l)};
sap.viz.ui5.Donut.prototype.attachDeselectData=function(d,h,l){return this._attachVIZEvent("deselectData",d,h,l)};
sap.viz.ui5.Donut.prototype.detachDeselectData=function(h,l){return this._detachVIZEvent("deselectData",h,l)};