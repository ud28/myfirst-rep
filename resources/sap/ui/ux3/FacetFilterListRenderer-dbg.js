/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.FacetFilterListRenderer
jQuery.sap.declare("sap.ui.ux3.FacetFilterListRenderer");

/**
 * @class FacetFilterList renderer.
 * @static
 */
sap.ui.ux3.FacetFilterListRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.FacetFilterListRenderer.render = function(oRenderManager, oControl) {

	var rm = oRenderManager;

	rm.write("<div ");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUx3FFLst");
	rm.writeClasses();
	rm.writeAttribute("style", "width:" + oControl.sWidth);
	rm.write(">");

	/*Header*/
	rm.write("<header id=\"" + oControl.getId() + "-head\"  class=\"sapUiUx3FFLstHead\"");
	if(oControl.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
	}
	rm.write(">");
	rm.write("<h3 id=\"" + oControl.getId() + "-head-txt\"  class=\"sapUiUx3FFLstHeadTxt\">");
	if (oControl.getTitle()) {
		rm.writeEscaped(oControl.getTitle());
	}
	rm.write("</h3>");
	rm.write("</header>");

	// render the list area with the used listbox
	rm.renderControl(oControl._oListBox);

	rm.write("</div>");
};
