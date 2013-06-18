/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */


jQuery.sap.declare("sap.m.GrowingListRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListRenderer");


/**
 * @class GrowingList renderer. 
 * @static
 */
sap.m.GrowingListRenderer = sap.ui.core.Renderer.extend(sap.m.ListRenderer);


/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.GrowingListRenderer.renderGrowingListContent = function(rm, oControl) {
	rm.write("<ul id='" + oControl.getId() + "-triggerList'");
	
	if (oControl.getScrollToLoad()) {
		rm.addStyle("display", "none");
		rm.writeStyles();
	}	
	
	// no header or footer no div
	rm.addClass("sapMListUl");
	rm.addClass("sapMGrowingList");

	if (oControl.getInset()) {
		rm.addClass("sapMListInset");
		if (oControl.getHeaderText()) {
			rm.addClass("sapMListInsetHdr");
		}
		if (oControl.getFooterText()) {
			rm.addClass("sapMListInsetFtr");
		}
	}
	rm.writeClasses();
	rm.write(">");
	
	var oActionItem;
	if (oControl.getScrollToLoad()) {
		oActionItem = oControl._getLoading(oControl.getId() + "-loading");
	} else {
		oActionItem = oControl._getTrigger(oControl.getId() + "-trigger");
	}

	// this variable is needed to render loading indicator in list even in table mode
	oActionItem._renderInList = true;

	rm.renderControl(oActionItem);
	
	rm.write("</ul>");
}; 