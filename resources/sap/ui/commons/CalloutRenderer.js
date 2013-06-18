/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.CalloutRenderer");jQuery.sap.require("sap.ui.commons.CalloutBaseRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ui.commons.CalloutRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.CalloutBaseRenderer);
sap.ui.commons.CalloutRenderer.renderContent=function(r,c){var a=r;var b=c.getContent();for(var i=0;i<b.length;i++){a.renderControl(b[i])}};
sap.ui.commons.CalloutRenderer.addRootClasses=function(r,c){r.addClass("sapUiClt")};
sap.ui.commons.CalloutRenderer.addContentClasses=function(r,c){r.addClass("sapUiCltCont")};
sap.ui.commons.CalloutRenderer.addArrowClasses=function(r,c){r.addClass("sapUiCltArr")};
