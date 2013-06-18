/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSetRenderer");sap.ui.ux3.DataSetRenderer={};
sap.ui.ux3.DataSetRenderer.render=function(r,c){var a=r,v=null,s,V;c.prepareRendering();a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3DS");a.writeClasses();a.write(">");a.write("<div id='"+c.getId()+"-toolbar'");a.addClass('sapUiUx3DSToolbar');if(!c.getShowToolbar()){a.addClass('noPadding')}a.writeClasses();a.write(">");this.renderToolbar(a,c);a.write("</div>");a.write("<div id='"+c.getId()+"-filter'");a.addClass('sapUiUx3DSFilterArea');if(!c.getShowFilter()){a.addClass('noPadding')}a.writeClasses();a.write(">");this.renderFilterArea(a,c);a.write("</div>");a.write("<div id='"+c.getId()+"-items'>");v=sap.ui.getCore().byId(c.getSelectedView());a.renderControl(v);a.write("</div>");a.write("</div>")};
sap.ui.ux3.DataSetRenderer.renderToolbar=function(r,c){var a=r;if(c.getShowToolbar()){a.renderControl(c._getToolbar())}};
sap.ui.ux3.DataSetRenderer.renderFilterArea=function(r,c){var a=r,f=c.getFilter();if(c.getShowFilter()){jQuery.each(f,function(i,F){a.renderControl(F)})}};
