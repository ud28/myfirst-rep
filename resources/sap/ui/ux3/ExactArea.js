/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ExactArea");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.ExactArea",{metadata:{library:"sap.ui.ux3",properties:{"toolbarVisible":{type:"boolean",group:"Appearance",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"},"toolbarItems":{type:"sap.ui.commons.ToolbarItem",multiple:true,singularName:"toolbarItem"}}}});jQuery.sap.require("sap.ui.commons.Toolbar");(function(){sap.ui.core.Element.extend("sap.ui.ux3.ExactAreaToolbarTitle",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],properties:{text:{name:"text",type:"string",group:"Appearance",defaultValue:''}}}})}());
