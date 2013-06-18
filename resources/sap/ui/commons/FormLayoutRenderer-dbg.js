/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.commons.FormLayoutRenderer");

/**
 * @class FormLayout renderer.
 * @static
 */
sap.ui.commons.FormLayoutRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the control that should be rendered
 */
sap.ui.commons.FormLayoutRenderer.render = function(oRenderManager, oLayout){
    // convenience variable
	var rm = oRenderManager;

	// stand alone the layout should render nothing

};

/**
 * Renders the HTML for the given form content, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the Layout control that should be rendered
 * @param {sap.ui.commons.Form} oForm, a form control to render its content
 */
sap.ui.commons.FormLayoutRenderer.renderForm = function(rm, oLayout, oForm){

	/*
	 * TODO:
	 *   - consider to define hooks in the layout for rendering the groups and elements
	 */

	// Form header
	this.renderTitle(rm, oForm.getTitle(), oForm.getId(), false);

	var aContainers = oForm.getFormContainers();
	for (var i = 0, il = aContainers.length; i < il; i++) {
		var oContainer = aContainers[i];
		var oContainerLayout = sap.ui.getCore().byId(oContainer.getLayout());
		if (oContainerLayout && oContainerLayout != oLayout) {
			oContainerLayout.getRenderer().renderContainer(rm, oContainerLayout, oContainer);
		}else{
			// same layout -> use internal function direct
			this.renderContainer(rm, oContainerLayout, oContainer);
		}
	}

};

sap.ui.commons.FormLayoutRenderer.renderContainer = function(rm, oLayout, oContainer){

	var bExpandable = false;

	rm.write("<section");
	rm.writeElementData(oContainer);
	rm.addClass("sapUiFormContainer");
	rm.addClass(oLayout.getClass());
	switch (oContainer.getType()) {
	case sap.ui.commons.FormContainerType.Border:
		rm.addClass("sapUiFormContainerBorder");
		break;
	case sap.ui.commons.FormContainerType.Expandable:
		rm.addClass("sapUiFormContainerExp");
		bExpandable = true;
		break;

	default:
		break;
	}
	if(oContainer.getTooltip_AsString()) {
		rm.writeAttributeEscaped('title', oContainer.getTooltip_AsString());
	}
	rm.writeClasses();
	rm.write(">");
	this.renderTitle(rm, oContainer.getTitle(), oContainer.getId(), bExpandable);

	if (bExpandable) {
		rm.write("<div id='"+oContainer.getId()+"-content'");
		if (!oContainer.getExpanded()) {
			rm.writeStyle("display", "none");
			rm.addStyles();
		}
		rm.write(">");
	}

	var aElements = oContainer.getFormElements();
	for (var j = 0, jl = aElements.length; j < jl; j++) {

		var oElement = aElements[j];

		this.renderElement(rm, oLayout, oElement);

	}
	if (bExpandable) {
		rm.write("</div>");
	}
	rm.write("</section>");

};

sap.ui.commons.FormLayoutRenderer.renderElement = function(rm, oLayout, oElement){

	rm.write("<div");
	rm.writeElementData(oElement);
	rm.addClass("sapUiFormElement");
	rm.writeClasses();
	rm.write(">");

	// use .getAggregation("label") because getter is overwritten to return only text if provided as string
	var oLabel = oElement.getAggregation("label");
	if (oLabel) {
		rm.renderControl(oLabel);
	}

	var aFields = oElement.getFields();
	if (aFields && aFields.length > 0) {
		for (var k = 0, kl = aFields.length; k < kl; k++) {
			var oField = aFields[k];
			rm.renderControl(oField);
		}
	}
	rm.write("</div>");

};

/*
 * Renders the title for a Form or a FormContainer
 */
sap.ui.commons.FormLayoutRenderer.renderTitle = function(rm, oTitle, sId, bExpander){

	if (oTitle){
		rm.write("<header");
		if(typeof oTitle !== "string"){
			rm.writeElementData(oTitle);
			if (oTitle.getTooltip_AsString()) {
				rm.writeAttributeEscaped('title', oTitle.getTooltip_AsString());
			}
		}
		rm.write(">");

		if (bExpander) {
			rm.write("<div id='"+sId+"-exp' class='sapUiFormContainerExpander' tabindex='0'>+</div>");
		}
		if (typeof oTitle === "string") {
			// Title is just a string
			rm.writeEscaped(oTitle, true);
		}else{
			// title control
			if (oTitle.getIcon()) {
				rm.write("<img id='" + sId + "-ico' src='");
				rm.writeEscaped(oTitle.getIcon());
				rm.write("' role='presentation' alt=''/>"); // role and alt added as per accessibility requirement
			}
			rm.writeEscaped(oTitle.getText(), true);
		}
		rm.write("</header>");
	}

};