/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ListItemBase.
jQuery.sap.declare("sap.m.ListItemBase");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ListItemBase.
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
 * <li>{@link #getType type} : sap.m.ListType (default: sap.m.ListType.Inactive)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getUnread unread} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getCounter counter} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ListItemBase#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:detailTap detailTap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:detailPress detailPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ListItemBase contains the core features of all specific list items.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.ListItemBase
 */
sap.ui.core.Control.extend("sap.m.ListItemBase", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"isSelected"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"type" : {type : "sap.m.ListType", group : "Misc", defaultValue : sap.m.ListType.Inactive},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"unread" : {type : "boolean", group : "Misc", defaultValue : false},
		"selected" : {type : "boolean", group : "", defaultValue : false},
		"counter" : {type : "int", group : "Misc", defaultValue : null}
	},
	events : {
		"tap" : {}, 
		"detailTap" : {}, 
		"press" : {}, 
		"detailPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ListItemBase with name <code>sClassName</code> 
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
 * @name sap.m.ListItemBase.extend
 * @function
 */

sap.m.ListItemBase.M_EVENTS = {'tap':'tap','detailTap':'detailTap','press':'press','detailPress':'detailPress'};


/**
 * Getter for property <code>type</code>.
 * Type of the list item, defines the behaviour
 *
 * Default value is <code>Inactive</code>
 *
 * @return {sap.m.ListType} the value of property <code>type</code>
 * @public
 * @name sap.m.ListItemBase#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Inactive</code> 
 *
 * @param {sap.m.ListType} oType  new value for property <code>type</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setType
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible list items are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ListItemBase#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setVisible
 * @function
 */


/**
 * Getter for property <code>unread</code>.
 * If the unread indicator is set on the list, this boolean defines if it will be shown on this list item. Default is false.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>unread</code>
 * @public
 * @name sap.m.ListItemBase#getUnread
 * @function
 */

/**
 * Setter for property <code>unread</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUnread  new value for property <code>unread</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setUnread
 * @function
 */


/**
 * Getter for property <code>selected</code>.
 * This property defines the select state of the list item when using single/Multi-Selection
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * @name sap.m.ListItemBase#getSelected
 * @function
 */

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setSelected
 * @function
 */


/**
 * Getter for property <code>counter</code>.
 * Property sets a counter bubble with the integer given.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>counter</code>
 * @public
 * @name sap.m.ListItemBase#getCounter
 * @function
 */

/**
 * Setter for property <code>counter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCounter  new value for property <code>counter</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setCounter
 * @function
 */


/**
 * tap event (This event is deprecated, use the press event instead) 
 *
 * @name sap.m.ListItemBase#tap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * tap event (This event is deprecated, use the press event instead) 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachTap
 * @function
 */

/**
 * Fire event tap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#fireTap
 * @function
 */


/**
 * detail tap event (This event is deprecated, use the detailPress event instead) 
 *
 * @name sap.m.ListItemBase#detailTap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'detailTap' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * detail tap event (This event is deprecated, use the detailPress event instead) 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachDetailTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'detailTap' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachDetailTap
 * @function
 */

/**
 * Fire event detailTap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#fireDetailTap
 * @function
 */


/**
 * Event is fired when the user clicks on the control. 
 *
 * @name sap.m.ListItemBase#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks on the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#firePress
 * @function
 */


/**
 * Event is fired when the user clicks on the detail button of the control. 
 *
 * @name sap.m.ListItemBase#detailPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'detailPress' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks on the detail button of the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachDetailPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'detailPress' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachDetailPress
 * @function
 */

/**
 * Fire event detailPress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#fireDetailPress
 * @function
 */


/**
 * returns the state of the item selection as a boolean
 *
 * @name sap.m.ListItemBase.prototype.isSelected
 * @function

 * @type boolean
 * @public
 * @deprecated Since version 7.20.0. 
 * API Change makes this method unnecessary
 */


// Start of sap/m/ListItemBase.js
//mode of the list e.g. singleSelection, multi...
//internal selected state of the listitem
sap.m.ListItemBase.prototype.init = function(){
	this._mode = sap.m.ListMode.None;
};

// radiobutton for single selection
sap.m.ListItemBase.prototype._getRadioButton = function(oRadioButtonId, sGroupName) {
	var _radioButton = this._radioButton || new sap.m.RadioButton(oRadioButtonId, {
		groupName : sGroupName,
		activeHandling : false,
		selected: this.getSelected()
	}).setParent(this, null, true).attachSelect(this._select);
	return this._radioButton = _radioButton;
};

// checkbox for multiselection
sap.m.ListItemBase.prototype._getCheckBox = function(oBoxId) {
	var _checkBox = this._checkBox || new sap.m.CheckBox(oBoxId, {
		activeHandling : false,
		selected: this.getSelected()
	}).setParent(this, null, true).attachSelect(this._select);
	return this._checkBox = _checkBox;
};

sap.m.ListItemBase.prototype.exit = function() {
	if (this._radioButton) {
		this._radioButton.destroy();
	}
	if (this._checkBox) {
		this._checkBox.destroy();
	}
	if (this._navImage) {
		this._navImage.destroy();
	}
	if (this._delIcon) {
		this._delIcon.destroy();
	}
	if (this._detailIcon) {
		this._detailIcon.destroy();
	}
};

sap.m.ListItemBase.prototype.isSelected = function() {
	return this.getSelected();
};


//called when IncludeItemInSelection true and we have to handle check mark and styling
sap.m.ListItemBase.prototype.setSelected = function(select) {
	//argument true for not setting the selection control due internal handling
	if(this._listId && this.getDomRef() && !arguments[1]){
		var oList = sap.ui.getCore().byId(this._listId);
		oList.setSelectedItem(this, select);
	}
	else{
		this.setProperty("selected", select, true);
	}
	return this;
};

sap.m.ListItemBase.prototype.setUnread = function(unread) {
	this.setProperty("unread", unread, true);
	this.$().toggleClass('sapMLIBUnread', unread);
	return this;
};

sap.m.ListItemBase.prototype._getNavImage = function(oImgId, oImgStyle, oSrc, oActiveSrc) {
	// no navigation image for android
	if (!jQuery.os.ios && this.getType() == sap.m.ListType.Navigation)
		return null;

	if (!this._imagePath)
		if (jQuery.os.ios)
			this._imagePath = jQuery.sap.getModulePath("sap.m", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/list/ios/";
		else
			this._imagePath = jQuery.sap.getModulePath("sap.m", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/list/android/";

	if(oActiveSrc){
		oActiveSrc = this._imagePath + oActiveSrc;
	}

	var navImage = this._navImage || new sap.m.Image(oImgId, {
		src : this._imagePath + oSrc,
		activeSrc : oActiveSrc,
		densityAware: false
	}).addStyleClass(oImgStyle, true).setParent(this, null, true);
	;
	return this._navImage = navImage;
};

sap.m.ListItemBase.prototype._getDelImage = function(oImgId, oImgStyle, oSrc) {
	if (!this._imagePath)
		if (jQuery.os.ios)
			this._imagePath = jQuery.sap.getModulePath("sap.m", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/list/ios/";
		else
			this._imagePath = jQuery.sap.getModulePath("sap.m", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/list/android/";

	var delImage = this._delImage || new sap.m.Image(oImgId, {
		src : this._imagePath + oSrc,
		densityAware: false
	}).addStyleClass(oImgStyle, true).setParent(this, null, true).attachPress(this._delete);
	return this._delImage = delImage;
};

/**
 * @private
 */
sap.m.ListItemBase.prototype.ontap = function(oEvent) {
	var type = this.getType();

	if (this._includeItemInSelection && (this._mode === sap.m.ListMode.SingleSelect || this._mode === sap.m.ListMode.SingleSelectLeft || this._mode === sap.m.ListMode.MultiSelect) || this._mode === sap.m.ListMode.SingleSelectMaster) {
		// if _includeItemInSelection all tap events will be used for the mode
		// select/delete
		switch (this._mode) {
		case sap.m.ListMode.SingleSelect:
		case sap.m.ListMode.SingleSelectLeft:
		case sap.m.ListMode.SingleSelectMaster:
			// check if radiobutton fired the event and therefore do not set the
			// select
			if (oEvent.srcControl && oEvent.srcControl.getId() !== this._radioButton.getId()) {
				this.setSelected(true);
			}
			(sap.ui.getCore().byId(this._listId))._selectTapped(this);
			break;
		case sap.m.ListMode.MultiSelect:
			// check if checkbox fired the event and therefore do not set the select
			if (oEvent.srcControl && oEvent.srcControl.getId() !== this._checkBox.getId()) {
				this.setSelected(!this.isSelected());
			}
			(sap.ui.getCore().byId(this._listId))._selectTapped(this);
			break;
		}
	} else {
		switch (type) {
		// Inactive
		case sap.m.ListType.Inactive:
			break;

		// Active/Navigation
		case sap.m.ListType.Active:
		case sap.m.ListType.Navigation:
			// if a fast tap happens deactivate the touchstart/touchend timers and
			// their logic

			//activeHandled checks the control, whether it is handling the active feedback by its own or not... also delete icons won't cause an active feedback
			var activationHandled = this._doActiveHandling(oEvent);
			//check if the controls handles events on its own, imgNav must be handled anyhow

			if (activationHandled && (!this._eventHandledByControl)) {
				window.clearTimeout(this._timeoutIdStart);
				window.clearTimeout(this._timeoutIdEnd);
				this._event = oEvent;
				this._active = true;
				this._activeHandling();
				if(type === sap.m.ListType.Navigation){
					this._activeHandlingNav();
				}
				this._activeHandlingInheritor();
				var that = this;
			}
			if (!this._eventHandledByControl) {
				this.fireTap({/* no parameters */}); // (This event is deprecated, use the press event instead)
				this.firePress({/* no parameters */});
			}
			if (activationHandled && (!this._eventHandledByControl)) {
				window.setTimeout(function() {
					that._active = false;
					that._activeHandling();
					if(type === sap.m.ListType.Navigation){
						that._inactiveHandlingNav();
					}
					that._inactiveHandlingInheritor();
				}, 180);
			}
			break;

		// Detail
		case sap.m.ListType.Detail:
			if (oEvent.srcControl && oEvent.srcControl.getId() === (this.getId() + "-imgDet")) {
				this.fireDetailTap({/* no parameters */}); // (This event is deprecated, use the press event instead)
				this.fireDetailPress({/* no parameters */});
			}
			break;

		// DetailAndActive
		case sap.m.ListType.DetailAndActive:
			if (oEvent.srcControl && oEvent.srcControl.getId() === (this.getId() + "-imgDet")) {
				this.fireDetailTap({/* no parameters */}); // (This event is deprecated, use the press event instead)
				this.fireDetailPress({/* no parameters */});
			} else {
			//activeHandled checks the control, whether it is handling the active feedback by its own or not... also delete icons won't cause an active feedback
				var activationHandled = this._doActiveHandling(oEvent);
				if (activationHandled && (!this._eventHandledByControl)) {
					window.clearTimeout(this._timeoutIdStart);
					window.clearTimeout(this._timeoutIdEnd);
					this._event = oEvent;
					this._active = true;
					this._activeHandling();
					this._activeHandlingInheritor();
					var that = this;
				}
				if (!this._eventHandledByControl) {
					this.fireTap({/* no parameters */}); // (This event is deprecated, use the press event instead)
					this.firePress({/* no parameters */});
				}

				if (activationHandled && (!this._eventHandledByControl)) {
					window.setTimeout(function() {
						that._active = false;
						that._activeHandling();
						that._inactiveHandlingInheritor();
					}, 180);
				}
			}
			break;
		default:
		}
	}
};

sap.m.ListItemBase.prototype.ontouchstart = function(oEvent) {
	this._eventHandledByControl = oEvent.originalEvent._sapui_handledByControl;
	this._active = true;
	if(oEvent.targetTouches){
		this._touchedY = oEvent.targetTouches[0].clientY;
		this._touchedX = oEvent.targetTouches[0].clientX;
	}
	var that = this;
	var _event = oEvent;

	if (!that._touchEndProxy) {
		that._touchEndProxy = jQuery.proxy(that._ontouchend, that);
	}

	// here also bound to the mouseup mousemove event to enable it working in
	// desktop browsers#
	if(jQuery.support.touch){
		jQuery(window.document).bind("touchend touchcancel", that._touchEndProxy);
	}
	else{
		jQuery(window.document).bind("mouseup", that._touchEndProxy);
	}

	if (!that._touchMoveProxy) {
		that._touchMoveProxy = jQuery.proxy(that._ontouchmove, that);
	}

	jQuery(window.document).bind("vmousemove", that._touchMoveProxy);
	// timeout regarding active state when scrolling
	this._timeoutIdStart = window.setTimeout(function() {
		// several fingers could be used
		//for selections with whole list item interaction and singleselectmaster active handling is disabled
		if (!(that._includeItemInSelection && (that._mode === sap.m.ListMode.SingleSelect || that._mode === sap.m.ListMode.SingleSelectLeft || that._mode === sap.m.ListMode.MultiSelect))  && ((_event.touches && _event.touches.length === 1) || !_event.touches)) {
			var type = that.getType();
			switch (type) {
			case sap.m.ListType.Inactive:
			case sap.m.ListType.Detail:
				break;
			case sap.m.ListType.Active:
			case sap.m.ListType.Navigation:
				//activeHandled checks the control, whether it is handling the active feedback by its own or not... also delete icons won't cause an active feedback
				var activationHandled = that._doActiveHandling(oEvent);
				if (activationHandled && (!that._eventHandledByControl)) {
					that._event = oEvent;
					that._activeHandling();
					if(type === sap.m.ListType.Navigation){
						that._activeHandlingNav();
					}
					that._activeHandlingInheritor();
				}
				break;
			case sap.m.ListType.DetailAndActive:
				//activeHandled checks the control, whether it is handling the active feedback by its own or not... also delete icons won't cause an active feedback
				var activationHandled = that._doActiveHandling(oEvent);
				if (activationHandled && oEvent.srcControl.getId() !== (that.getId() + "-imgDet") && (!that._eventHandledByControl)) {
					that._event = oEvent;
					that._activeHandling();
					that._activeHandlingInheritor();
				}
				break;
			default:
			}
		}
	}, 100);
};

// touch move to prevent active state when scrolling
sap.m.ListItemBase.prototype._ontouchmove = function(oEvent) {
	var touchMovement = oEvent.targetTouches && ((Math.abs(this._touchedY - oEvent.targetTouches[0].clientY) > 10)||Math.abs(this._touchedX - oEvent.targetTouches[0].clientX) > 10);
	if ((this._active || this._timeoutIdStart) && touchMovement) {
		// there is movement and therefore no tap...remove active styles
		window.clearTimeout(this._timeoutIdStart);
		this._active = false;
		this._activeHandling();
		if(this.getType() === sap.m.ListType.Navigation){
			this._inactiveHandlingNav();
		}
		this._inactiveHandlingInheritor();
		this._timeoutIdStart = null;
		this._timeoutIdEnd = null;
	}
};

sap.m.ListItemBase.prototype._ontouchend = function(oEvent) {

	// several fingers could be used
	if (((oEvent.targetTouches && oEvent.targetTouches.length === 0) || !oEvent.targetTouches)) {
		var type = this.getType();
		var that = this;
		switch (type) {
		case sap.m.ListType.Active:
		case sap.m.ListType.Navigation:
		case sap.m.ListType.DetailAndActive:
			// wait maybe it is a tap
			this._timeoutIdEnd = window.setTimeout(function() {
				that._event = oEvent;
				that._active = false;
				that._activeHandling();
				that._inactiveHandlingNav();
				that._inactiveHandlingInheritor();
			}, 100);
			break;
		case sap.m.ListType.Detail:
		case sap.m.ListType.Inactive:
		default:
		}

		if(jQuery.support.touch){
			jQuery(window.document).unbind("touchend touchcancel", that._touchEndProxy);
		}
		else{
			jQuery(window.document).unbind("mouseup", that._touchEndProxy);
		}
		jQuery(window.document).unbind("vmousemove", this._touchMoveProxy);
	}
};

// remove active styles for navigation list items
sap.m.ListItemBase.prototype._inactiveHandlingNav = function() {
	this._active = false;
	// image active state
	if (jQuery.os.ios) {
		jQuery.sap.byId(this.getId() + "-imgNav").toggleClass('sapMLIBImgNavActive', this._active);
	}
};

// add active styles for navigation items
sap.m.ListItemBase.prototype._activeHandlingNav = function() {
	// image active state
	if (jQuery.os.ios) {
		jQuery.sap.byId(this.getId() + "-imgNav").toggleClass('sapMLIBImgNavActive', this._active);
	}
};

// hook method for active handling...inheritors should overwrite this method
// when needed
sap.m.ListItemBase.prototype._activeHandlingInheritor = function() {
};

// hook method for inactive handling...inheritors should overwrite this method
// when needed
sap.m.ListItemBase.prototype._inactiveHandlingInheritor = function() {
};

//switch background style...active feedback
sap.m.ListItemBase.prototype._activeHandling = function() {
	this.$().toggleClass('sapMLIBActive', this._active);
	jQuery.sap.byId(this.getId() + "-counter").toggleClass('sapMLIBActiveCounter', this._active);
	if (this.getUnread()) {
		jQuery.sap.byId(this.getId() + "-unread").toggleClass('sapMLIBActiveUnread', this._active);
	}
	var imgDet = sap.ui.getCore().byId(this.getId() + "-imgDet");
		if(imgDet instanceof sap.ui.core.Icon){
		imgDet.$().toggleClass('sapMLIBIconDetActive', this._active);
	}

	var imgDel = sap.ui.getCore().byId(this.getId() + "-imgDel");
		if(imgDel instanceof sap.ui.core.Icon){
		imgDel.$().toggleClass('sapMLIBIconDelActive', this._active);
	}
};

sap.m.ListItemBase.prototype._doActiveHandling = function(oEvent) {
	if(oEvent.srcControl	&& (!oEvent.srcControl.getActiveHandling || oEvent.srcControl.getActiveHandling && oEvent.srcControl.getActiveHandling() !== false)
		&& oEvent.srcControl.getId() !== (this.getId() + "-imgDel")){
		return true;
	}
	return false;
};
