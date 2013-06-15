/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Bubble.
jQuery.sap.declare("sap.viz.ui5.types.Bubble");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Bubble.
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
 * <ul>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4'])</li>
 * <li>{@link #getShapePalette shapePalette} : string[] (default: ['circle','square','diamond','triangle-up','triangle-down','triangle-left','triangle-right','cross','intersection'])</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Bubble_drawingEffect (default: sap.viz.ui5.types.Bubble_drawingEffect.normal)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Bubble_tooltip</li>
 * <li>{@link #getAnimation animation} : sap.viz.ui5.types.Bubble_animation</li></ul>
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
 * Module ui5/types/Bubble
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
 * @name sap.viz.ui5.types.Bubble
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Bubble", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"colorPalette" : {type : "string[]", group : "", defaultValue : ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},
		"shapePalette" : {type : "string[]", group : "", defaultValue : ['circle','square','diamond','triangle-up','triangle-down','triangle-left','triangle-right','cross','intersection']},
		"drawingEffect" : {type : "sap.viz.ui5.types.Bubble_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Bubble_drawingEffect.normal}
	},
	aggregations : {
    	"toolTip" : {type : "sap.viz.ui5.types.Bubble_tooltip", multiple : false}, 
    	"animation" : {type : "sap.viz.ui5.types.Bubble_animation", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Bubble with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Bubble.extend
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * Set marker color of bubble.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bubble#getColorPalette
 * @function
 */


/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#setColorPalette
 * @function
 */

/**
 * Getter for property <code>shapePalette</code>.
 * Set marker shape of bubble.
 *
 * Default value is <code>circle,square,diamond,triangle-up,triangle-down,triangle-left,triangle-right,cross,intersection</code>
 *
 * @return {string[]} the value of property <code>shapePalette</code>
 * @public
 * @name sap.viz.ui5.types.Bubble#getShapePalette
 * @function
 */


/**
 * Setter for property <code>shapePalette</code>.
 *
 * Default value is <code>circle,square,diamond,triangle-up,triangle-down,triangle-left,triangle-right,cross,intersection</code> 
 *
 * @param {string[]} aShapePalette  new value for property <code>shapePalette</code>
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#setShapePalette
 * @function
 */

/**
 * Getter for property <code>drawingEffect</code>.
 * Drawing effect of bubble marker.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Bubble_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Bubble#getDrawingEffect
 * @function
 */


/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Bubble_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#setDrawingEffect
 * @function
 */
	
/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Set tooltip related properties.
 * 
 * @return {sap.viz.ui5.types.Bubble_tooltip}
 * @public
 * @name sap.viz.ui5.types.Bubble#getToolTip
 * @function
 */

/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Bubble_tooltip}
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#setToolTip
 * @function
 */


/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#destroyToolTip
 * @function
 */
	
/**
 * Getter for aggregation <code>animation</code>.<br/>
 * Set animation of bubble/scatter.
 * 
 * @return {sap.viz.ui5.types.Bubble_animation}
 * @public
 * @name sap.viz.ui5.types.Bubble#getAnimation
 * @function
 */

/**
 * Setter for the aggregated <code>animation</code>.
 * @param oAnimation {sap.viz.ui5.types.Bubble_animation}
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#setAnimation
 * @function
 */


/**
 * Destroys the animation in the aggregation 
 * named <code>animation</code>.
 * @return {sap.viz.ui5.types.Bubble} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bubble#destroyAnimation
 * @function
 */

// Start of sap/viz/ui5/types/Bubble.js
sap.viz.ui5.types.Bubble.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.types.Bubble.prototype.getAnimation = function() {
  return this._getOrCreate("animation");
}