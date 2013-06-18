/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.FacetFilter
jQuery.sap.declare("sap.ui.ux3.FacetFilterRenderer");

/**
 * @class FacetFilter renderer.
 * @static
 */
sap.ui.ux3.FacetFilterRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.FacetFilterRenderer.render = function(oRenderManager, oControl) {
	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	var rm = oRenderManager;

	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUx3FacetFilter");
	rm.writeClasses();
	rm.write(">");
	var aLists = oControl.getLists();
	if (aLists) {
		for(var i = 0; i < aLists.length; i++) {
			aLists[i].sWidth = 100/aLists.length + "%";
			rm.renderControl(aLists[i]);
		}
	}
	rm.write("</div>");
};