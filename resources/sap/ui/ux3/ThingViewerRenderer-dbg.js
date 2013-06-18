/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
jQuery.sap.declare("sap.ui.ux3.ThingViewerRenderer");

/**
 * @class Thing renderer. 
 * @static
 */
sap.ui.ux3.ThingViewerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ThingViewerRenderer.render = function(oRenderManager, oControl){ 
    // convenience variable
	var rm = oRenderManager;
	
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.writeAttributeEscaped("style", "width:"+oControl.getWidth()+"; height:"+oControl.getHeight());
	rm.addClass('sapUiUx3TV');
	rm.writeClasses();
	rm.write(">");
	this.renderContent(rm,oControl);
	rm.write("</div>");
};

sap.ui.ux3.ThingViewerRenderer.renderContent = function(oRenderManager, oControl) {
// convenience variable
	var rm = oRenderManager;

	rm.write("<div role='Main' class='sapUiUx3TVContent' id='"+oControl.getId()+"-content'>");
	//render Header
	rm.write("<div class='sapUiUx3TVHeader sapUiUx3TVNoActionBar'>");
	rm.write("<div class='sapUiUx3TVHeaderContainerIdentifier'>");
	rm.write("<span role='heading' aria-level='1' class='sapUiUx3TVIdentifier'");
	rm.writeAttributeEscaped("title", oControl.getType());
	rm.write(">");
	rm.writeEscaped(oControl.getType());
	rm.write("</span>");
	rm.write("</div>");

	rm.write("<div class='sapUiUx3TVHeaderGroupScrollContainer'>");
	
	// render Header
	rm.write("<div id='" + oControl.getId() + "-header' class='sapUiUx3TVHeaderContainer'>");
	this.renderHeader(rm,oControl);
	rm.write("</div>");

	// render Header Content
	rm.write("<div id='" + oControl.getId() + "-headerContent'>");
	this.renderHeaderContent(rm, oControl);
	rm.write("</div>");

	rm.write("</div>");
	rm.write("</div>");

	// render Facets
	rm.write("<div class='sapUiUx3TVFacets sapUiUx3TVNoActionBar'>");
	rm.write("<div role='Navigation' class='sapUiUx3TVFacetBar'>");
	rm.renderControl(oControl._getNavBar());
	rm.write("</div>");
	rm.write("<div id='" + oControl.getId() + "-facetContent' class='sapUiUx3TVFacetContent'>");

	// render Facet Content
	this.renderFacetContent(rm, oControl);

	rm.write("</div>");
	rm.write("</div>");
	this.renderToolbar(rm, oControl);
	rm.write("</div>");
};

/**
 * Add root class to Thing
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingViewerRenderer.addRootClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3TV");
};

/**
 * Add class to Thing
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingViewerRenderer.addOverlayClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3TVOverlay");
};

/**
 * Renders the HTML for Thing Header
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingViewerRenderer.renderHeader = function(oRenderManager, oControl) {
	var rm = oRenderManager;

	rm.write("<div class='sapUiUx3TVIconBar'>");
	rm.write("<div class='sapUiUx3TVIcon'><img alt='' role='presentation' src='");
	rm.writeEscaped(oControl.getIcon());
	rm.write("' id='" + oControl.getId() + "-swatch'></div>");
	rm.write("<div class='sapUiUx3TVTitle'>");
	rm.write("<span role='heading' aria-level='2' class='sapUiUx3TVTitleFirst'");
	rm.writeAttributeEscaped("title", oControl.getTitle());
	rm.write(">");
	rm.writeEscaped(oControl.getTitle());
	rm.write("</span><br/>");
	rm.write("<span role='heading' aria-level='3' class='sapUiUx3TVTitleSecond'");
	rm.writeAttributeEscaped("title", oControl.getSubtitle());
	rm.write(">");
	rm.writeEscaped(oControl.getSubtitle());
	rm.write("</span>");
	rm.write("</div>");
	rm.write("</div>");	
};
 
 
/**
 * Renders the HTML for Thing Toolbar
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingViewerRenderer.renderToolbar = function(rm, oControl) {
	// render Toolbar
	if (oControl.getActionBar()) {
		rm.write("<div id='"+oControl.getId()+"-toolbar' class='sapUiUx3TVToolbar'>");
		rm.renderControl(oControl.getActionBar());
		rm.write("</div>");
	}
};

/**
 * Renders the HTML for Thing Header content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingViewerRenderer.renderHeaderContent = function(rm, oControl) {
	var headerContentList = oControl.getHeaderContent();
	for ( var i = 0; i < headerContentList.length; i++) {
		var headerContent = headerContentList[i];
		rm.write("<hr class='sapUiUx3TVHRWhite'>");
		rm.write("<div class='sapUiUx3TVHeaderContainer' role='form'>");
		rm.write("<div class='sapUiUx3TVHeaderGroupTitle'");
		rm.writeAttributeEscaped("title", headerContent.getTitle());
		rm.write("><span>");
		rm.writeEscaped(headerContent.getTitle());
		rm.write("</span></div>");
		rm.write("<div class='sapUiUx3TVHeaderGroupContent'>");
		var childContent = headerContent.getContent();
		for ( var j = 0; j < childContent.length; j++) {
			var childControl = childContent[j];
			rm.renderControl(childControl);
		}
		rm.write("</div>");
		rm.write("</div>");
	}
};

/**
 * Renders the HTML for Thing Facet content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.ThingViewerRenderer.renderFacetContent = function(rm, oControl) {
	var facetContent = oControl.getFacetContent();
	var bTitle = true;

	if (facetContent.length == 1 )  {
		bTitle = false;
	}

	for ( var i = 0; i < facetContent.length; i++) {
		var group = facetContent[i];
		if (group.getColspan()) {
			rm.write("<div class='sapUiUx3TVFacetThingGroupSpan' role='form'>");
		} else {
			rm.write("<div class='sapUiUx3TVFacetThingGroup' role='form'>");
		}
		if (bTitle) {
			rm.write("<div class='sapUiUx3TVFacetThingGroupContentTitle'");
			rm.writeAttributeEscaped("title", group.getTitle());
			rm.write("><span>");
			rm.writeEscaped(group.getTitle());
			rm.write("</span></div>");
		}
		rm.write("<div class='sapUiUx3TVFacetThingGroupContent'>");
		var groupContent = group.getContent();
		for ( var j = 0; j < groupContent.length; j++) {
			rm.renderControl(groupContent[j]);
		}
		rm.write("</div></div>");
	}
};