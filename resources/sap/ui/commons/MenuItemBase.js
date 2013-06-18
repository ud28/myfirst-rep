/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.MenuItemBase");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.MenuItemBase",{metadata:{library:"sap.ui.commons",properties:{"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Behavior",defaultValue:true},"startsSection":{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"submenu",aggregations:{"submenu":{type:"sap.ui.commons.Menu",multiple:false}},events:{"select":{}}}});sap.ui.commons.MenuItemBase.M_EVENTS={'select':'select'};
sap.ui.commons.MenuItemBase.prototype.init=function(){};
sap.ui.commons.MenuItemBase.prototype.render=function(r,i,m){var a=r;a.write("<li");a.writeElementData(i);a.write("><div style=\"white-space:nowrap;display:inline-block;padding:1px;color:black;\" id=\""+this.getId()+"-txt\">");a.write(i.getId());if(this.getSubmenu()){a.write("&nbsp;&nbsp;->")}a.write("</div></li>")};
sap.ui.commons.MenuItemBase.prototype.hover=function(h,m){jQuery.sap.byId(this.getId()+"-txt").attr("style",h?"white-space:nowrap;display:inline-block;padding:1px;color:red;":"white-space:nowrap;display:inline-block;padding:1px;color:black;")};
