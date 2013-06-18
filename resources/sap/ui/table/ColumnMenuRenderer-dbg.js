/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.ComboBox
jQuery.sap.declare("sap.ui.table.ColumnMenuRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.commons.MenuRenderer");

/**
 * @class Renderer for the sap.ui.commons.ComboBox
 * @static
 */
sap.ui.table.ColumnMenuRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.MenuRenderer);