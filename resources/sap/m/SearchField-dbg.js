/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.SearchField.
jQuery.sap.declare("sap.m.SearchField");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new SearchField.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getShowMagnifier showMagnifier} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SearchField#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SearchField#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to input a search string.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.SearchField
 */
sap.ui.core.Control.extend("sap.m.SearchField", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"value" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"maxLength" : {type : "int", group : "Behavior", defaultValue : 0},
		"placeholder" : {type : "string", group : "Misc", defaultValue : null},
		"showMagnifier" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"search" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.SearchField with name <code>sClassName</code> 
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
 * @name sap.m.SearchField.extend
 * @function
 */

sap.m.SearchField.M_EVENTS = {'search':'search','liveChange':'liveChange'};


/**
 * Getter for property <code>value</code>.
 * Input Value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.m.SearchField#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setValue
 * @function
 */


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#bindValue
 * @function
 */

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#unbindValue
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the input.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.SearchField#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true).
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.SearchField#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible inputs are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.SearchField#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setVisible
 * @function
 */


/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * @name sap.m.SearchField#getMaxLength
 * @function
 */

/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setMaxLength
 * @function
 */


/**
 * Getter for property <code>placeholder</code>.
 * Text shown when no value available.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * @name sap.m.SearchField#getPlaceholder
 * @function
 */

/**
 * Setter for property <code>placeholder</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setPlaceholder
 * @function
 */


/**
 * Getter for property <code>showMagnifier</code>.
 * Set to false to hide the magnifier icon.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showMagnifier</code>
 * @public
 * @name sap.m.SearchField#getShowMagnifier
 * @function
 */

/**
 * Setter for property <code>showMagnifier</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowMagnifier  new value for property <code>showMagnifier</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setShowMagnifier
 * @function
 */


/**
 * Event which is fired when the user triggers a search. 
 *
 * @name sap.m.SearchField#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The search query string.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.m.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SearchField</code>.<br/> itself. 
 *  
 * Event which is fired when the user triggers a search. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code>.<br/> itself.
 *
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.m.SearchField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query string.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SearchField#fireSearch
 * @function
 */


/**
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 *
 * @name sap.m.SearchField#liveChange
 * @event
 * @since 1.9.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue Current search string.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SearchField</code>.<br/> itself. 
 *  
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code>.<br/> itself.
 *
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * @name sap.m.SearchField#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.SearchField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * @name sap.m.SearchField#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> Current search string.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @since 1.9.1
 * @name sap.m.SearchField#fireLiveChange
 * @function
 */


// Start of sap/m/SearchField.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.apply(sap.m.SearchField.prototype, [true]);

jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();

sap.m.SearchField.prototype.init = function(){
	// IE9 does not fire input event when characters are deleted in an input field, use keyup instead
	this._inputEvent = jQuery.browser.msie && jQuery.browser.fVersion < 10 ? "keyup" : "input";
	// TODO: suggestions and search provider
};

sap.m.SearchField.prototype.onBeforeRendering = function() {
	jQuery(this._inputElement)
		.unbind(this._inputEvent,  this.onInput)
		.unbind("search", this.onSearch)
		.unbind("change", this.onChange)
		.unbind("focus",  this.onFocus)
		.unbind("blur",   this.onBlur);
};

sap.m.SearchField.prototype.onAfterRendering = function() {
	// DOM element for the embedded HTML input:
	this._inputElement = jQuery.sap.domById(this.getId() + "-I");
	// DOM element for the reset button:
	this._resetElement = jQuery.sap.domById(this.getId() + "-reset");
	// Bind events
	//  search: user has pressed "Enter" button -> fire search event, do search
	//  change: user has focused another control on the page -> do not trigger a search action
	//  input:  key press or paste/cut -> fire liveChange event
	jQuery(this._inputElement)
		.bind(this._inputEvent,  jQuery.proxy(this.onInput,  this))
		.bind("search", jQuery.proxy(this.onSearch, this))
		.bind("change", jQuery.proxy(this.onChange, this))
		.bind("focus",  jQuery.proxy(this.onFocus,  this))
		.bind("blur",   jQuery.proxy(this.onBlur,  this));
};

sap.m.SearchField.prototype.ontouchstart = function(oEvent) {
	// mark this event as processed
	oEvent.originalEvent._sapui_handledByControl = true;
	
	if (!this.getEnabled()) return;
	var oSrc = oEvent.srcElement;

	if(oSrc.id == this.getId()+"-reset"){
		if(oEvent.originalEvent.button === 2) return; // no action on the right mouse button
		var value = "";
		this._inputElement.value = value;
		this.setProperty("value", value, true);
		jQuery(this._resetElement).toggleClass("sapMSFVal", false); // remove the x button
		this.fireLiveChange({newValue: value});
		this.fireSearch({query: value});
		oEvent.preventDefault();
		oEvent.stopPropagation();
		// keep keyboard opened when a user touches "x", take focus from another active input too
		if(document.activeElement && document.activeElement.tagName == "INPUT"){this._inputElement.focus();}
	}
};

sap.m.SearchField.prototype.onclick = function(oEvent) {
	// focus if mouse-clicked on the magnifier button
	if(this.getEnabled() && oEvent.srcElement.className == "sapMSFMG"){
		this._inputElement.focus();
		this.fireSearch({query: this.getValue()}); // UX requirement: fire search on a magnifier glass click on desktop
	}
};

/**
 * Process the search event
 *
 * When a user deletes the search string using the "x" button,
 * change event is not fired.
 * Call setValue() to ensure that the value property is updated.
 *
 * @private
 */
sap.m.SearchField.prototype.onSearch = function(event){
	var value = this._inputElement.value;
	this.setProperty("value", value, true);
	this.fireSearch({query: value});
	// If the user has pressed the search button on the keyboard - close it:
	document.activeElement.blur();
};

/**
 * Process the change event. Update value and do not fire any control events
 * because the user has focused another control on the page without intention to do a search.
 * @private
 */
sap.m.SearchField.prototype.onChange = function(event){
	var value = this._inputElement.value;
	this.setProperty("value", value, true);
};

/**
 * Process the input event (key press or paste). Update value and fire the liveChange event.
 * @private
 */
sap.m.SearchField.prototype.onInput = function(event){
	var value = this._inputElement.value;
	jQuery(this._resetElement).toggleClass("sapMSFVal", !!value);
	this.setProperty("value", value, true);
	this.fireLiveChange({newValue: value});
};


/**
 * highlight the background on focus.
 * @private
 */
sap.m.SearchField.prototype.onFocus = function(event){
	this.$().toggleClass("sapFocus", true);
};

/**
 * Restore the background color on blur.
 * @private
 */
sap.m.SearchField.prototype.onBlur = function(event){
	this.$().toggleClass("sapFocus", false);
};
