/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.ValueHelpField
jQuery.sap.declare("sap.ui.commons.ValueHelpFieldRenderer");
jQuery.sap.require("sap.ui.commons.TextFieldRenderer");

/**
 * @class ValueHelpField renderer.
 * @static
 * For a common look&feel, the ValueHelpFeild extends the TextField control,
 * just like the ComboBox does.
 */
sap.ui.commons.ValueHelpFieldRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);

/**
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager currently rendering this control
 * @param {sap.ui.commons.ValueHelpField}
 *            oControl the ValueHelpField whose "value help" should be rendered
 * @private
 * P.S.: "renderOuterAttributes" is a reserved/hard-coded TextField extending function!
 *       It is used to allow extensions to display help icons.
 */
sap.ui.commons.ValueHelpFieldRenderer.renderOuterAttributes = function(rm, oControl) {
	// To share the overall ComboBox styling:
	// Note: Would be best if a more generic className had been used for this, like
	//       "sapUiTfIconContainer", as ComboBox and DatePicker and ValueHelpField are likely
	//       to always share a common container look. (Only icon should differ.)
	//       Then, in the unlikely case where one of them would want to differ from the
	//       others, then this one would only need to add its own className on top of
	//       the generic one, e.g. "sapUiTfDateContainer" for the DatePicker.
	// Referencing "sapUiTfCombo" for now.
	rm.addClass("sapUiTfCombo");
//as only input field gets focus, render aria info there
	rm.writeAttribute("aria-owns", oControl.getId() + '-input '+oControl.getId() + '-icon');
};

/**
 * Renders additional HTML for the ComboBox to the TextField (sets the icon)
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager The RenderManager that can be used for
 *                                                 writing to the Render-Output-Buffer.
 * @param {sap.ui.fw.Control} oControl An object representation of the control that should
 *                                     be rendered.
 */
sap.ui.commons.ValueHelpFieldRenderer.renderOuterContent = function(rm, oControl){

	rm.write('<img id=', oControl.getId() + '-icon');
	// As mentioned above, a more generic "sapUiTfIcon" className could have been used...
	// One would just have had to add its own icon className!
	// Using "sapUiTfValueHelpIcon" for now, as it proved easier to define instead of overwriting
	// the ComboBox image sources and backgrounds.
	rm.addClass("sapUiTfValueHelpIcon");
	if (oControl.getEnabled() && oControl.getEditable()) {
		rm.addClass("sapUiTfValueHelpRegularIcon");
	}

	this.renderIcon(rm, oControl);
	rm.writeClasses();
	rm.writeAttribute("role","button");
	rm.write(">");
};

/**
 * as onBeforeRendering only runs while re-rendering this module is called in renderer
 */
sap.ui.commons.ValueHelpFieldRenderer.renderIcon = function(rm, oControl){

	var sIcon = "";

	oControl.sIcon = "";
	oControl.sIconRegularUrl = "";
	oControl.sIconHoverUrl = "";
	oControl.sIconDsblUrl = "";

	if (!oControl.getEnabled()) {
		if (oControl.getIconDisabledURL()) {
			oControl.sIconDsblUrl = oControl.getIconDisabledURL();
		} else if (oControl.getIconURL()) {
			oControl.sIconDsblUrl = oControl.getIconURL();
			var oIcon  = jQuery.sap.domById(oControl.getId() + '-icon');
			rm.addClass('sapUiTfValueHelpDsblIcon');
		} else {
			oControl.sIcon = sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconDsblUrl');
			oControl.sIconDsblUrl = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + oControl.sIcon;
		}
		sIcon = oControl.sIconDsblUrl;
	} else {
		if (oControl.getIconURL()) {
			oControl.sIconRegularUrl = oControl.getIconURL();
		} else {
			oControl.sIcon = sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconRegularUrl');
			oControl.sIconRegularUrl = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + oControl.sIcon;
		}
		sIcon = oControl.sIconRegularUrl;
	}
	rm.writeAttributeEscaped('src', sIcon);
};

///**
// * Renders ARIA information for the outer DIV
// *
// * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for
// *                                                 writing to the Render-Output-Buffer
// * @param {sap.ui.fw.Control} oControl an object representation of the control that should
// *                                     be rendered
// */
//sap.ui.commons.ValueHelpFieldRenderer.renderARIAInfo = function(rm, oControl) {
//	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
//	// Widgets are discrete user interface objects with which the user can interact.
//	// Widget roles map to standard features in accessibility APIs.
//	// When a user navigates an element assigned any of the non-abstract subclass roles of widget,
//	// assistive technologies that typically intercept standard keyboard events SHOULD switch to
//	// an application browsing mode, and pass keyboard events through to the web application.
//	// The intent is to hint to certain assistive technologies to switch from normal browsing mode
//	// into a mode more appropriate for interacting with a web application; some user agents have
//	// a browse navigation mode where keys, such as up and down arrows, are used to browse the
//	// document, and this native behavior prevents the use of these keys by a web application.
//		rm.writeAttribute('role', 'widget');
//		rm.writeAttribute('aria-haspopup', 'true');
//		// IMPORTANT: According to jQuery forums, DatePicker Accessibility is to be delivered in a
//		//            future release. No release mentionned.
//		// So there is not much point about doing more about this at the moment.
//	}
//};