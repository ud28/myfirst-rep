/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayoutRenderer");

/**
 * @class ResponsiveFlowLayout renderer.
 * @static
 */
sap.ui.commons.layout.ResponsiveFlowLayoutRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
(function() {
	sap.ui.commons.layout.ResponsiveFlowLayoutRenderer.render = function(oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("sapUiRFL");
		oRm.writeClasses();
		oRm.write(">"); // div element

		fnRenderContent(oRm, oControl);

		oRm.write("</div>");
	};

	var fnRenderContent = function(oRm, oControl) {
		var rows = oControl._rows;
		var sId = oControl.getId();

		for ( var i = 0; i < rows.length; i++) {
			oRm.write('<div id="' + sId + '-row' + i + '"');
			oRm.addClass("sapUiRFLRow");
			oRm.writeClasses();
			oRm.write(">");

			for ( var j = 0; j < rows[i].cont.length; j++) {
				var oCont = rows[i].cont[j];
				// rows[i].cont[j].id = sId + "-cont" + i + "_" + j;

				// container
				oRm.write('<div id="' + rows[i].cont[j].id + '"');
				oRm.addClass("sapUiRFLContainer");
				oRm.writeClasses();

				oRm.addStyle("min-width", oCont.minWidth + "px");
				oRm.writeStyles();
				oRm.write(">");

				// content rendering (render control)
				oRm.write("<div");
				oRm.addClass("sapUiRFLContainerContent");
				if (oCont.breakWith.length > 0) {
					oRm.addClass("sapUiRFLMultiContainerContent");
				}
				if (oCont.padding) {
					oRm.addClass("sapUiRFLPaddingClass");
				}

				oRm.writeClasses();
				oRm.write(">");

				if (oCont.breakWith.length > 0) {
					oRm.write('<div id="' + rows[i].cont[j].id + '-multi0"');
					oRm.addClass("sapUiRFLMultiContent");
					if (rows[i].cont[j].padding) {
						oRm.addClass("sapUiRFLPaddingClass");
					}
					oRm.writeClasses();
					oRm.write(">");

					oRm.renderControl(oCont.control);
					oRm.write("</div>");

					for ( var l = 0; l < oCont.breakWith.length; l++) {
						oRm.write('<div id="' + rows[i].cont[j].id + '-multi' + (l + 1) + '"');
						oRm.addClass("sapUiRFLMultiContent");
						if (oCont.breakWith[l].padding) {
							oRm.addClass("sapUiRFLPaddingClass");
						}
						oRm.writeClasses();
						oRm.write(">");

						oRm.renderControl(oCont.breakWith[l].control);
						oRm.write("</div>");
					}
				} else {
					oRm.renderControl(oCont.control);
				}
				oRm.write("</div>"); // content

				oRm.write("</div>"); // container
			}
			oRm.write("</div>"); // row
		}
	};
}());
