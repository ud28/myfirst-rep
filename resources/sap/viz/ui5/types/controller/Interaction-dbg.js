/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.controller.Interaction.
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/controller/Interaction.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectability selectability} : sap.viz.ui5.types.controller.Interaction_selectability</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseStructuredType#constructor sap.viz.ui5.core.BaseStructuredType}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Module ui5/types/controller/Interaction
 * @extends sap.viz.ui5.core.BaseStructuredType
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.controller.Interaction
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.controller.Interaction", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	aggregations : {
    	"selectability" : {type : "sap.viz.ui5.types.controller.Interaction_selectability", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.controller.Interaction with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.viz.ui5.types.controller.Interaction.extend
 * @function
 */

	
/**
 * Getter for aggregation <code>selectability</code>.<br/>
 * Settings for selectability.
 * 
 * @return {sap.viz.ui5.types.controller.Interaction_selectability}
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getSelectability
 * @function
 */

/**
 * Setter for the aggregated <code>selectability</code>.
 * @param oSelectability {sap.viz.ui5.types.controller.Interaction_selectability}
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setSelectability
 * @function
 */


/**
 * Destroys the selectability in the aggregation 
 * named <code>selectability</code>.
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#destroySelectability
 * @function
 */

// Start of sap/viz/ui5/types/controller/Interaction.js
sap.viz.ui5.types.controller.Interaction.prototype.getSelectability = function() {
  return this._getOrCreate("selectability");
}
