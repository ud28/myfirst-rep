/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");sap.ui.getCore().initLibrary({name:"sap.viz",dependencies:["sap.ui.core"],types:["sap.viz.ui5.types.Axis_gridline_type","sap.viz.ui5.types.Axis_position","sap.viz.ui5.types.Axis_type","sap.viz.ui5.types.Background_direction","sap.viz.ui5.types.Background_drawingEffect","sap.viz.ui5.types.Bar_drawingEffect","sap.viz.ui5.types.Bubble_drawingEffect","sap.viz.ui5.types.Combination_drawingEffect","sap.viz.ui5.types.Legend_alignment","sap.viz.ui5.types.Legend_drawingEffect","sap.viz.ui5.types.Legend_position","sap.viz.ui5.types.Legend_type","sap.viz.ui5.types.Line_drawingEffect","sap.viz.ui5.types.Line_marker_shape","sap.viz.ui5.types.Pie_drawingEffect","sap.viz.ui5.types.Pie_valign","sap.viz.ui5.types.Scatter_drawingEffect","sap.viz.ui5.types.StackedVerticalBar_drawingEffect","sap.viz.ui5.types.StackedVerticalBar_mode","sap.viz.ui5.types.Title_alignment","sap.viz.ui5.types.Tooltip_drawingEffect","sap.viz.ui5.types.VerticalBar_drawingEffect","sap.viz.ui5.types.controller.Interaction_selectability_mode"],interfaces:[],controls:["sap.viz.ui5.Bar","sap.viz.ui5.Bubble","sap.viz.ui5.Column","sap.viz.ui5.Combination","sap.viz.ui5.Donut","sap.viz.ui5.Line","sap.viz.ui5.Pie","sap.viz.ui5.Scatter","sap.viz.ui5.StackedColumn","sap.viz.ui5.StackedColumn100","sap.viz.ui5.core.BaseChart"],elements:["sap.viz.ui5.core.BaseStructuredType","sap.viz.ui5.data.Dataset","sap.viz.ui5.data.DimensionDefinition","sap.viz.ui5.data.FlattenedDataset","sap.viz.ui5.data.MeasureDefinition","sap.viz.ui5.types.Axis","sap.viz.ui5.types.Axis_axisline","sap.viz.ui5.types.Axis_gridline","sap.viz.ui5.types.Axis_label","sap.viz.ui5.types.Axis_title","sap.viz.ui5.types.Background","sap.viz.ui5.types.Background_border","sap.viz.ui5.types.Background_border_bottom","sap.viz.ui5.types.Background_border_left","sap.viz.ui5.types.Background_border_right","sap.viz.ui5.types.Background_border_top","sap.viz.ui5.types.Bar","sap.viz.ui5.types.Bar_animation","sap.viz.ui5.types.Bar_tooltip","sap.viz.ui5.types.Bubble","sap.viz.ui5.types.Bubble_animation","sap.viz.ui5.types.Bubble_tooltip","sap.viz.ui5.types.Combination","sap.viz.ui5.types.Combination_animation","sap.viz.ui5.types.Combination_bar","sap.viz.ui5.types.Combination_line","sap.viz.ui5.types.Combination_line_marker","sap.viz.ui5.types.Combination_tooltip","sap.viz.ui5.types.Legend","sap.viz.ui5.types.Legend_title","sap.viz.ui5.types.Line","sap.viz.ui5.types.Line_animation","sap.viz.ui5.types.Line_hoverline","sap.viz.ui5.types.Line_marker","sap.viz.ui5.types.Line_tooltip","sap.viz.ui5.types.Pie","sap.viz.ui5.types.Pie_animation","sap.viz.ui5.types.Pie_tooltip","sap.viz.ui5.types.Scatter","sap.viz.ui5.types.Scatter_animation","sap.viz.ui5.types.Scatter_tooltip","sap.viz.ui5.types.StackedVerticalBar","sap.viz.ui5.types.StackedVerticalBar_animation","sap.viz.ui5.types.StackedVerticalBar_tooltip","sap.viz.ui5.types.Title","sap.viz.ui5.types.Tooltip","sap.viz.ui5.types.VerticalBar","sap.viz.ui5.types.VerticalBar_animation","sap.viz.ui5.types.VerticalBar_tooltip","sap.viz.ui5.types.XYContainer","sap.viz.ui5.types.controller.Interaction","sap.viz.ui5.types.controller.Interaction_selectability"],version:"1.8.4"});jQuery.sap.declare("sap.viz.ui5.types.Axis_gridline_type");sap.viz.ui5.types.Axis_gridline_type={line:"line",dotted:"dotted",incised:"incised"};jQuery.sap.declare("sap.viz.ui5.types.Axis_position");sap.viz.ui5.types.Axis_position={left:"left",right:"right",top:"top",bottom:"bottom"};jQuery.sap.declare("sap.viz.ui5.types.Axis_type");sap.viz.ui5.types.Axis_type={value:"value",category:"category"};jQuery.sap.declare("sap.viz.ui5.types.Background_direction");sap.viz.ui5.types.Background_direction={horizontal:"horizontal",vertical:"vertical"};jQuery.sap.declare("sap.viz.ui5.types.Background_drawingEffect");sap.viz.ui5.types.Background_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Bar_drawingEffect");sap.viz.ui5.types.Bar_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Bubble_drawingEffect");sap.viz.ui5.types.Bubble_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Combination_drawingEffect");sap.viz.ui5.types.Combination_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Legend_alignment");sap.viz.ui5.types.Legend_alignment={start:"start",middle:"middle",end:"end"};jQuery.sap.declare("sap.viz.ui5.types.Legend_drawingEffect");sap.viz.ui5.types.Legend_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Legend_position");sap.viz.ui5.types.Legend_position={right:"right"};jQuery.sap.declare("sap.viz.ui5.types.Legend_type");sap.viz.ui5.types.Legend_type={ColorLegend:"ColorLegend",BubbleColorLegend:"BubbleColorLegend",SizeLegend:"SizeLegend",MeasureBasedColoringLegend:"MeasureBasedColoringLegend"};jQuery.sap.declare("sap.viz.ui5.types.Line_drawingEffect");sap.viz.ui5.types.Line_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Line_marker_shape");sap.viz.ui5.types.Line_marker_shape={circle:"circle",diamond:"diamond",triangleUp:"triangleUp",triangleDown:"triangleDown",triangleLeft:"triangleLeft",triangleRight:"triangleRight",cross:"cross",intersection:"intersection"};jQuery.sap.declare("sap.viz.ui5.types.Pie_drawingEffect");sap.viz.ui5.types.Pie_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.Pie_valign");sap.viz.ui5.types.Pie_valign={top:"top",center:"center"};jQuery.sap.declare("sap.viz.ui5.types.Scatter_drawingEffect");sap.viz.ui5.types.Scatter_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.StackedVerticalBar_drawingEffect");sap.viz.ui5.types.StackedVerticalBar_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.StackedVerticalBar_mode");sap.viz.ui5.types.StackedVerticalBar_mode={comparison:"comparison",percentage:"percentage"};jQuery.sap.declare("sap.viz.ui5.types.Title_alignment");sap.viz.ui5.types.Title_alignment={left:"left",center:"center",right:"right"};jQuery.sap.declare("sap.viz.ui5.types.Tooltip_drawingEffect");sap.viz.ui5.types.Tooltip_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.VerticalBar_drawingEffect");sap.viz.ui5.types.VerticalBar_drawingEffect={normal:"normal",glossy:"glossy"};jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction_selectability_mode");sap.viz.ui5.types.controller.Interaction_selectability_mode={single:"single",multiple:"multiple",none:"none"};jQuery.sap.require("sap.ui.thirdparty.d3");jQuery.sap.require("sap.viz.libs.canvg");jQuery.sap.require("sap.viz.libs.rgbcolor");jQuery.sap.require("sap.viz.libs.sap-viz");(function(){function i(){var L={"sap.viz.core.BaseChart":"sap.viz.ui5.core.BaseChart","sap.viz.core.BaseStructuredType":"sap.viz.ui5.core.BaseStructuredType","sap.viz.core.Dataset":"sap.viz.ui5.data.Dataset","sap.viz.core.DimensionDefinition":"sap.viz.ui5.data.DimensionDefinition","sap.viz.core.FlattenedDataset":"sap.viz.ui5.data.FlattenedDataset","sap.viz.core.MeasureDefinition":"sap.viz.ui5.data.MeasureDefinition","sap.viz.Bar":"sap.viz.ui5.Bar","sap.viz.Bubble":"sap.viz.ui5.Bubble","sap.viz.VerticalBar":"sap.viz.ui5.Column","sap.viz.Combination":"sap.viz.ui5.Combination","sap.viz.Donut":"sap.viz.ui5.Donut","sap.viz.Line":"sap.viz.ui5.Line","sap.viz.Pie":"sap.viz.ui5.Pie","sap.viz.Scatter":"sap.viz.ui5.Scatter","sap.viz.StackedVerticalBar":"sap.viz.ui5.StackedColumn","sap.viz.PercentageStackedVerticalBar":"sap.viz.ui5.StackedColumn100"};jQuery.each(L,function(o,n){jQuery.sap.setObject(o,function(){var N=jQuery.sap.getObject(n);var a=jQuery.sap.newObject(N.prototype);return N.apply(a,arguments)||a});jQuery.sap.setObject(o+".extend",function(){return jQuery.sap.getObject(n).extend.apply(this,arguments)})});var l=sap.ui.getCore().getLoadedLibraries()["sap.viz"];if(l&&l.types){jQuery.each(l.types,function(a,n){if(n.indexOf("sap.viz.ui5.types.")===0){jQuery.sap.setObject("sap.viz.types."+n.slice("sap.viz.ui5.types.".length),jQuery.sap.getObject(n))}})}}i();var I=false;sap.viz._initializeVIZ=function(){if(!I){if(sap.viz.lang&&sap.viz.lang.langManager&&jQuery.isArray(sap.viz.lang.langManager.loadPath)){var p=jQuery.sap.getModulePath("sap.viz.resources.langs","/");sap.viz.lang.langManager.loadPath=[p];jQuery.sap.log.info("VIZ: load path for lang manager set to "+p)}sap.viz.env.initialize({'locale':sap.ui.getCore().getConfiguration().getLanguage(),'log':'debug'});jQuery.sap.log.info("VIZ: env initialized (locale="+sap.ui.getCore().getConfiguration().getLanguage()+")");sap.ui.getCore().attachThemeChanged(function(e){});I=true}}}());