/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.NavigationItem");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Item");sap.ui.core.Item.extend("sap.ui.ux3.NavigationItem",{metadata:{library:"sap.ui.ux3",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"href":{type:"sap.ui.core.URI",group:"Behavior",defaultValue:null}},defaultAggregation:"subItems",aggregations:{"subItems":{type:"sap.ui.ux3.NavigationItem",multiple:true,singularName:"subItem"}}}});
