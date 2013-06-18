/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.ThingInspector
jQuery.sap.declare("sap.ui.ux3.ThingInspectorRenderer");
jQuery.sap.require("sap.ui.ux3.OverlayRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ThingInspector renderer.
 * @static
 */
sap.ui.ux3.ThingInspectorRenderer = sap.ui.core.Renderer.extend(sap.ui.ux3.OverlayRenderer);

/**
 * Renders the ThingInspector content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingInspectorRenderer.renderContent = function(oRenderManager, oControl) {
	// convenience variable
	var rm = oRenderManager;	
	rm.write("<div role='Main' class='sapUiUx3TIContent' id='"+oControl.getId()+"-content'>");
	rm.renderControl(oControl._oThingViewer);
	rm.write("</div>");
};

/**
 * Add root class to ThingInspector
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingInspectorRenderer.addRootClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3TI");
};

/**
 * Add class to ThingInspector
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingInspectorRenderer.addOverlayClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3TIOverlay");
};