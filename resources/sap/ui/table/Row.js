/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.table.Row");jQuery.sap.require("sap.ui.table.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.table.Row",{metadata:{publicMethods:["getIndex"],library:"sap.ui.table",defaultAggregation:"cells",aggregations:{"cells":{type:"sap.ui.core.Control",multiple:true,singularName:"cell"}}}});
sap.ui.table.Row.prototype.getIndex=function(){var t=this.getParent();if(t){var f=t.getFirstVisibleRow();var r=t.indexOfRow(this);return f+r}return-1};
