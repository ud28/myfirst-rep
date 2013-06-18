/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Dialog.
jQuery.sap.declare("sap.m.Dialog");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Dialog.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getType type} : sap.m.DialogType (default: sap.m.DialogType.Standard)</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getStretchOnPhone stretchOnPhone} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLeftButton leftButton} : string | sap.m.Button</li>
 * <li>{@link #getRightButton rightButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Dialog#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Dialog control is used to interrupt the current processing of an application to prompt the user for information or a response.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.Dialog
 */
sap.ui.core.Control.extend("sap.m.Dialog", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"open", "close", "isOpen"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"type" : {type : "sap.m.DialogType", group : "Appearance", defaultValue : sap.m.DialogType.Standard},
		"state" : {type : "sap.ui.core.ValueState", group : "Appearance", defaultValue : sap.ui.core.ValueState.None},
		"stretchOnPhone" : {type : "boolean", group : "Appearance", defaultValue : false}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"_header" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_leftButton" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_rightButton" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_title" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_icon" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	associations : {
		"leftButton" : {type : "sap.m.Button", multiple : false}, 
		"rightButton" : {type : "sap.m.Button", multiple : false}
	},
	events : {
		"beforeOpen" : {}, 
		"afterOpen" : {}, 
		"beforeClose" : {}, 
		"afterClose" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Dialog with name <code>sClassName</code> 
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
 * @name sap.m.Dialog.extend
 * @function
 */

sap.m.Dialog.M_EVENTS = {'beforeOpen':'beforeOpen','afterOpen':'afterOpen','beforeClose':'beforeClose','afterClose':'afterClose'};


/**
 * Getter for property <code>icon</code>.
 * Icon that is displayed in the dialog header. This icon is invisible in iOS platform and it's density aware that you can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.Dialog#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setIcon
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title text appears in the dialog header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.Dialog#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setTitle
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * The type of the dialog. It only affects the look and feel in iOS platform, type message is with button at the bottom inside of in the header.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.m.DialogType} the value of property <code>type</code>
 * @public
 * @name sap.m.Dialog#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.m.DialogType} oType  new value for property <code>type</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setType
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * State affects the icon and the title color. If other than None is set, a predefined icon will be added to the dialog. Setting icon property will overwrite the predefined icon. The default value is None which doesn't add any icon to the Dialog control. This property is by now only supported by blue crystal theme.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Dialog#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Dialog#setState
 * @function
 */


/**
 * Getter for property <code>stretchOnPhone</code>.
 * When it's set to true, the dialog will be full screen when it runs on a phone.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>stretchOnPhone</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Dialog#getStretchOnPhone
 * @function
 */

/**
 * Setter for property <code>stretchOnPhone</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStretchOnPhone  new value for property <code>stretchOnPhone</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Dialog#setStretchOnPhone
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content inside the dialog.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Dialog#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Dialog#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Dialog#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Dialog#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#destroyContent
 * @function
 */


/**
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @return {string} Id of the element which is the current target of the <code>leftButton</code> association, or null
 * @public
 * @name sap.m.Dialog#getLeftButton
 * @function
 */

/**
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @param {string | sap.m.Button} vLeftButton 
 *    Id of an element which becomes the new target of this <code>leftButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setLeftButton
 * @function
 */


	
/**
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @return {string} Id of the element which is the current target of the <code>rightButton</code> association, or null
 * @public
 * @name sap.m.Dialog#getRightButton
 * @function
 */

/**
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @param {string | sap.m.Button} vRightButton 
 *    Id of an element which becomes the new target of this <code>rightButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setRightButton
 * @function
 */


	
/**
 * This event will be fired before the dialog is opened. 
 *
 * @name sap.m.Dialog#beforeOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired before the dialog is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachBeforeOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachBeforeOpen
 * @function
 */

/**
 * Fire event beforeOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireBeforeOpen
 * @function
 */


/**
 * This event will be fired after the dialog is opened. 
 *
 * @name sap.m.Dialog#afterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired after the dialog is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachAfterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachAfterOpen
 * @function
 */

/**
 * Fire event afterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireAfterOpen
 * @function
 */


/**
 * This event will be fired before the dialog is closed. 
 *
 * @name sap.m.Dialog#beforeClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Button} oControlEvent.getParameters.origin This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired before the dialog is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachBeforeClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachBeforeClose
 * @function
 */

/**
 * Fire event beforeClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'origin' of type <code>sap.m.Button</code> This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireBeforeClose
 * @function
 */


/**
 * This event will be fired after the dialog is closed. 
 *
 * @name sap.m.Dialog#afterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Button} oControlEvent.getParameters.origin This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired after the dialog is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachAfterClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachAfterClose
 * @function
 */

/**
 * Fire event afterClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'origin' of type <code>sap.m.Button</code> This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireAfterClose
 * @function
 */


/**
 * Open the dialog.
 *
 * @name sap.m.Dialog.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Close the dialog.
 *
 * @name sap.m.Dialog.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * The method checks if the Dialog is open. It returns true when the Dialog is currently open (this includes opening and closing animations), otherwise it returns false.
 *
 * @name sap.m.Dialog.prototype.isOpen
 * @function

 * @type boolean
 * @public
 * @since 1.9.1
 */


// Start of sap/m/Dialog.js
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
jQuery.sap.require("sap.m.InstanceManager");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.ValueState");

sap.m.Dialog._bOneDesign = (sap.ui.core.theming.Parameters.get("sapMPlatformDependent") !== 'true');

sap.m.Dialog._mStateClasses = {};
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.None] = "";
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Success] = "sapMDialogSuccess";
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Warning] = "sapMDialogWarning";
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Error] = "sapMDialogError";

sap.m.Dialog._mIcons = {};
sap.m.Dialog._mIcons[sap.ui.core.ValueState.Success] = sap.ui.core.IconPool.getIconURI("accept");
sap.m.Dialog._mIcons[sap.ui.core.ValueState.Warning] = sap.ui.core.IconPool.getIconURI("warning2");
sap.m.Dialog._mIcons[sap.ui.core.ValueState.Error] = sap.ui.core.IconPool.getIconURI("alert");

/* =========================================================== */
/*                  begin: Lifecycle functions                 */
/* =========================================================== */
sap.m.Dialog.prototype.init = function(){
	var that = this;
	this._firstOpen = true;
	this._externalIcon = undefined;
	this._sResizeListenerId = null;
	this._$window = jQuery(window);
	
	if(sap.m.Dialog._bOneDesign){
		this._createHeader();
	}

	this.oPopup = new sap.ui.core.Popup();
	this.oPopup.setShadow(true);
	if(jQuery.device.is.iphone && !this._bMessageType){
		this.oPopup.setModal(true, "sapMDialogTransparentBlk");
	}else{
		this.oPopup.setModal(true, "sapMDialogBlockLayerInit");
	}

	//avoid playing fancy animation in android 2.3
	if(jQuery.os.ios || (jQuery.os.android && jQuery.os.fVersion > 2.4)){
		this.oPopup.setAnimations(jQuery.proxy(this._openAnimation, this), jQuery.proxy(this._closeAnimation, this));
	}

	//the orientationchange event listener
	this._fOrientationChange = jQuery.proxy(this._reposition, this);

	this.oPopup._applyPosition = function(oPosition){
		var $that = that.$();
		//hidden is not neccessary for iphone and it causes blinking
		if(!jQuery.device.is.iphone && that.oPopup.getOpenState() === sap.ui.core.OpenState.OPEN){
			$that.css("visibility", "hidden");
		}
		that._setDimensions();
		that._adjustScrollingPane();
		sap.ui.core.Popup.prototype._applyPosition.call(this, oPosition);
		if(!jQuery.device.is.iphone && that.oPopup.getOpenState() === sap.ui.core.OpenState.OPEN){
			$that.css("visibility", "visible");
		}
	};
	
	this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
		horizontal: false,
		vertical: true,
		zynga: false,
		preventDefault: false,
		nonTouchScrolling: "scrollbar"
	});
};

sap.m.Dialog.prototype.onBeforeRendering = function(){
	if(this._sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

sap.m.Dialog.prototype.exit = function(){
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	
	this._$window.unbind("resize", this._fOrientationChange);
	
	if(this.oPopup){
		this.oPopup.destroy();
		this.oPopup = null;
	}
	if(this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}

	if(this._header){
		this._header.destroy();
		this._header = null;
	}
	
	if(this._headerTitle){
		this._headerTitle.destroy();
		this._headerTitle = null;
	}

	if(this._iconImage){
		this._iconImage.destroy();
		this._iconImage = null;
	}
};
/* =========================================================== */
/*                   end: Lifecycle functions                  */
/* =========================================================== */

/* =========================================================== */
/*                    begin: public functions                  */
/* =========================================================== */
sap.m.Dialog.prototype.open = function(){
	var oPopup = this.oPopup;
	if (oPopup.isOpen()){
		return this;
	}
	//reset the close trigger
	this._oCloseTrigger = null;
	
	var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
	if($blockLayer.length > 0){
		var bTransparent = jQuery.device.is.iphone && !this._bMessageType && !this.hasStyleClass("sapMActionSheetDialog");
		$blockLayer.toggleClass("sapMDialogTransparentBlk", bTransparent);
		$blockLayer.toggleClass("sapMDialogBlockLayerInit", !bTransparent);
	}

	this.fireBeforeOpen();
	oPopup.attachEvent(sap.ui.core.Popup.M_EVENTS.opened, this._handleOpened, this);

	// Open popup
	oPopup.setContent(this);
	if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType) {
		oPopup.setPosition("center top", "center bottom", document, "0 0", "fit");
	} else {
		oPopup.setPosition("center center", "center center", document, "0 0", "fit");
	}
	oPopup.open();
	
	//register resize listener on scroll area
	if(!this._sResizeListenerId){
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(jQuery.sap.domById(this.getId() + "-scroll"),  this._fOrientationChange);
	}

	sap.m.InstanceManager.addDialogInstance(this);
	return this;
};

sap.m.Dialog.prototype.close = function(){
	var oPopup = this.oPopup;

	var eOpenState = this.oPopup.getOpenState();
	if(!(eOpenState === sap.ui.core.OpenState.CLOSED || eOpenState === sap.ui.core.OpenState.CLOSING)){
		this.fireBeforeClose({origin: this._oCloseTrigger});
		oPopup.attachEvent(sap.ui.core.Popup.M_EVENTS.closed, this._handleClosed, this);
		oPopup.close();
	}
	return this;
};

sap.m.Dialog.prototype.isOpen = function(){
	return this.oPopup && this.oPopup.isOpen();
};
/* =========================================================== */
/*                     end: public functions                   */
/* =========================================================== */

/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */
sap.m.Dialog.prototype._handleOpened = function(){
	this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.opened, this._handleOpened, this);
	
	// bind to window resize
	// In android, the orientationchange fires before the size of the window changes
	//  that's why the resize event is used here.
	this._$window.bind("resize", this._fOrientationChange);
	this.fireAfterOpen();
	this._firstOpen = false;
};

sap.m.Dialog.prototype._handleClosed = function(){
	this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.closed, this._handleClosed, this);

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	
	this._$window.unbind("resize", this._fOrientationChange);
	sap.m.InstanceManager.removeDialogInstance(this);
	this.fireAfterClose({origin: this._oCloseTrigger});
};
/* =========================================================== */
/*                      end: event handlers                  */
/* =========================================================== */


/* =========================================================== */
/*                      begin: private functions               */
/* =========================================================== */
sap.m.Dialog.prototype._openAnimation = function($Ref, iRealDuration, fnOpened) {
	$Ref.css("display", "block");
	if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType) {
		$Ref.addClass("sapMDialogBottom").removeClass("sapMDialogHidden");
		window.setTimeout(function(){
			$Ref.bind("webkitTransitionEnd transitionend", function(){
				jQuery(this).unbind("webkitTransitionEnd transitionend");
				$Ref.removeClass("sapMDialogSliding");
				fnOpened();
			});
			$Ref.addClass("sapMDialogSliding").removeClass("sapMDialogBottom");
		}, 0);
	} else {
		$Ref.bind("webkitAnimationEnd animationend", function(){
			jQuery(this).unbind("webkitTransitionEnd transitionend");
			fnOpened();
			$Ref.removeClass("sapMDialogOpening");
		});
		$Ref.addClass("sapMDialogOpening");
	}
};

sap.m.Dialog.prototype._closeAnimation = function($Ref, iRealDuration, fnClose) {
	if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType) {
		$Ref.bind("webkitTransitionEnd transitionend", function(){
			jQuery(this).unbind("webkitTransitionEnd transitionend");
			$Ref.addClass("sapMDialogHidden").removeClass("sapMDialogBottom").removeClass("sapMDialogSliding");
			fnClose();
		});
		$Ref.addClass("sapMDialogSliding").addClass("sapMDialogBottom");
	} else {
		if(sap.m.Dialog._bOneDesign || !jQuery.os.ios){
			$Ref.bind("webkitAnimationEnd animationend", function(){
				jQuery(this).unbind("webkitTransitionEnd transitionend");
				fnClose();
				$Ref.removeClass("sapMDialogClosing");
			});
			//$Ref.addClass("sapMDialogTransparent sapMDialogClosing");
			$Ref.addClass("sapMDialogClosing");
		}else{
			fnClose();
		}
	}
};

sap.m.Dialog.prototype._setDimensions = function() {
	// Derive width and height from viewport
	this._$window = jQuery(window);
	var iWindowWidth = this._$window.width(),
		iWindowHeight = this._$window.height(),
		$this = this.$(),
		bStretch = this.getStretchOnPhone(),
		iHPaddingToScreen = jQuery.device.is.phone ? 64 : 128,
		iVPaddingToScreen = 16,
		iPaddingLeft = window.parseInt($this.css("padding-left"), 10),
		iPaddingRight = window.parseInt($this.css("padding-right"), 10),
		iPaddingTop = window.parseInt($this.css("padding-top"), 10),
		iPaddingBottom = window.parseInt($this.css("padding-bottom"), 10),
		iMaxWidth = iWindowWidth - iHPaddingToScreen - iPaddingLeft - iPaddingRight,
		iMaxHeight = iWindowHeight - iVPaddingToScreen - iPaddingTop - iPaddingBottom,
		$content = jQuery.sap.byId(this.getId() + "-cont");

	//reset
	$this.css({
		"width": "",
		"height": "",
		"min-width": "",
		"max-width": "",
		"left": "0px",
		"top": "0px",
		"right": "",
		"bottom": "",
		"max-height": ""
	});
	
	$content.css("max-height", "");

	if(jQuery.device.is.tablet || jQuery.device.is.desktop){
		$this.css({
			"min-width": "400px",
			"max-width": iMaxWidth + "px",
			"max-height": iMaxHeight + "px"
		});
	}else{
		if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType){
			$this.css({width: "100%",  height: "100%"});
		}else{
			if(sap.m.Dialog._bOneDesign && bStretch){
				$this.css({
					"right": "0px",
					"bottom": "0px",
					"max-height": iWindowHeight + "px"
				});
			}else{
				if(jQuery.device.is.portrait){
					$this.css({
						"width": iMaxWidth + "px",
						"max-height": iMaxHeight + "px"
					});
				}else{
					$this.css({
						"min-width": iWindowHeight + "px",
						"max-width": iMaxWidth + "px",
						"max-height": iMaxHeight + "px"
					});
				}
			}
		}
	}
};

sap.m.Dialog.prototype._adjustScrollingPane = function(){
	var $this = this.$(),
		$content = jQuery.sap.byId(this.getId() + "-cont"),
		iContentPaddingTop = window.parseInt($content.css("padding-top"), 10),
		iContentPaddingBottom = window.parseInt($content.css("padding-bottom"), 10),
		$scrollArea = jQuery.sap.byId(this.getId() + "-scroll"),
		//this is a fix for setting useTransform false in ScrollEnablement.js line 236
		bSAreaPosAbs = $scrollArea.css("position") === "absolute",
		iMaxHeight = bSAreaPosAbs ? window.parseInt($this.css("max-height"), 10) : $this.height(),
		bStretch = this.getStretchOnPhone(),
		iHeaderHeight, iFooterHeight, iMaxValue, iScrollAreaHeight;

	if(!sap.m.Dialog._bOneDesign && jQuery.os.ios && !this._bMessageType){
		iHeaderHeight = $this.children(".sapMBar").outerHeight(true);
		iFooterHeight = 0;
	}else{
		iHeaderHeight = $this.children("header").outerHeight(true);
		iFooterHeight = $this.children("footer").outerHeight(true);
	}
	
	iMaxValue = iMaxHeight - iHeaderHeight - iFooterHeight - iContentPaddingTop - iContentPaddingBottom;
	
	if(bSAreaPosAbs){
		//this is a fix for setting useTransform false in ScrollEnablement.js line 236
		$scrollArea.css("width", "100%");
		iScrollAreaHeight = $scrollArea.outerHeight(true);
		if(sap.m.Dialog._bOneDesign && bStretch && jQuery.device.is.phone){
			$content.css("height", iMaxValue);
		}else{
			$content.css("height", Math.min(iMaxValue, iScrollAreaHeight));
		}
	}else{
		$content.css(((sap.m.Dialog._bOneDesign && bStretch && jQuery.device.is.phone) || (!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType)) ? "height" : "max-height", iMaxValue + "px");
	}
	this._oScroller.refresh();
};

sap.m.Dialog.prototype._reposition = function() {
	var that = this;
	var ePopupState = this.oPopup.getOpenState();
	if(ePopupState !== sap.ui.core.OpenState.OPEN || this._sAvoidRepeatTimer){
		return;
	}
	//this is needed for avoiding firing two consecutive resize events when closing the keyboard in iOS6.
	if(jQuery.support.touch && jQuery.os.ios && jQuery.os.fVersion >= 6){
		this._sAvoidRepeatTimer = window.setTimeout(function(){
			that._sAvoidRepeatTimer = null;
		}, 50);
	}
	this.oPopup._applyPosition(this.oPopup._oLastPosition);
};

sap.m.Dialog.prototype._createHeader = function(){
	if(sap.m.Dialog._bOneDesign || (jQuery.os.ios && !this._bMessageType)){
		if(!this._header){
			// set parent of header to detect changes on title
			this._header = new sap.m.Bar(this.getId()+"-header").addStyleClass("sapMHeader-CTX");
			this.setAggregation("_header", this._header, false);
		}
	}
};

sap.m.Dialog.prototype._getHeader = function(){
	if(!sap.m.Dialog._bOneDesign && !this.getTitle() && !this.getLeftButton() & !this.getRightButton()){
		//if there's no title, no left and right buttons, header isn't shown.
		return null;
	}
	
	this._createHeader();
	return this._header;
};


sap.m.Dialog.prototype._initBlockLayerAnimation = function(){
	//!!!now the animation on blocklayer is removed due to
	//problem with calling open, close, open without any interval
	//then blocklayer can't be removed and it blocks the whole UI
	if(!sap.m.Dialog._bOneDesign && (!jQuery.device.is.iphone || this._bMessageType)){
		// Animating also the block layer
		this.oPopup._showBlockLayer = function(){
			sap.ui.core.Popup.prototype._showBlockLayer.call(this);
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
			if(jQuery.os.ios){
				$blockLayer.addClass('sapMDialogBLyInit');
//				setTimeout(function() {
//					$blockLayer.addClass('sapMDialogBLyShown');
//				}, 0);
			}else{
				$blockLayer.addClass("sapMDialogBlockLayerAnimation");
				setTimeout(function(){
					$blockLayer.addClass("sapMDialogBlockLayer");
				}, 0);
			}
		};

		this.oPopup._hideBlockLayer = function(){
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup"), that = this;
			
			if(sap.ui.core.Popup.blStack.length > 1){
				// If there's still popups open, hide block layer without animation
				sap.ui.core.Popup.prototype._hideBlockLayer.call(that);
			}else{
				$blockLayer.removeClass('sapMDialogBlockLayerInit');
				if(jQuery.os.ios){
//					$blockLayer.removeClass('sapMDialogBLyShown');
//					$blockLayer.bind("webkitTransitionEnd", function(){
//						$blockLayer.unbind("webkitTransitionEnd");
						$blockLayer.removeClass("sapMDialogBLyInit");
						sap.ui.core.Popup.prototype._hideBlockLayer.call(that);
						
//					});
				}else{
					$blockLayer.removeClass("sapMDialogBlockLayer");
	
					$blockLayer.bind("webkitTransitionEnd transitionend", function(){
						jQuery(this).unbind("webkitTransitionEnd transitionend");
						sap.ui.core.Popup.prototype._hideBlockLayer.call(that);
						$blockLayer.removeClass("sapMDialogBlockLayerAnimation");
					});
				}
			}
		};
	}else{
		this.oPopup._hideBlockLayer = function(){
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
			$blockLayer.removeClass("sapMDialogTransparentBlk");
			sap.ui.core.Popup.prototype._hideBlockLayer.call(this);
		};
	}
};


sap.m.Dialog.prototype._clearBlockLayerAnimation = function(){
	if(jQuery.device.is.iphone && !this._bMessageType){
		delete this.oPopup._showBlockLayer;
		this.oPopup._hideBlockLayer = function(){
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
			$blockLayer.removeClass("sapMDialogTransparentBlk");
			sap.ui.core.Popup.prototype._hideBlockLayer.call(this);
		};
	}
};

/**
 * Returns the sap.ui.core.ScrollEnablement delegate which is used with this control.
 *
 * @private
 */
sap.m.Dialog.prototype.getScrollDelegate = function() {
	return this._oScroller;
};
/* =========================================================== */
/*                      end: private functions                 */
/* =========================================================== */

/* =========================================================== */
/*                         begin: setters                      */
/* =========================================================== */
sap.m.Dialog.prototype.setLeftButton = function(oButton){
	var that = this;
	if(typeof(oButton) === "string"){
		oButton = sap.ui.getCore().byId(oButton);
	}

	var oOldLeftButton = this.getLeftButton();

	if(oButton && oOldLeftButton === oButton.getId()){
		return this;
	}
	
	if(!this._oLeftButtonDelegate){
		this._oLeftButtonDelegate = {
			ontap: function(){
				that._oCloseTrigger = this;
			}
		};
	}
	
	if(oOldLeftButton){
		oOldLeftButton = sap.ui.getCore().byId(oOldLeftButton);
		oOldLeftButton.removeDelegate(this._oLeftButtonDelegate);
	}
	
	if(oButton){
		oButton.addDelegate(this._oLeftButtonDelegate, true, oButton);
		if(sap.m.Dialog._bOneDesign){
			if( !(oButton.getType() === sap.m.ButtonType.Accept || oButton.getType() === sap.m.ButtonType.Reject)){
				oButton.setType(sap.m.ButtonType.Transparent);
			}
		}
	}
	
	if(!sap.m.Dialog._bOneDesign && jQuery.os.ios && !this._bMessageType){
		this._createHeader();
		if(oButton){
			if(oOldLeftButton){
				this._header.removeAggregation("contentLeft", oOldLeftButton, true);
			}
			this._header.addAggregation("contentLeft", oButton, true);
			this._header.invalidate();
		}else{
			if(oOldLeftButton){
				this._header.removeContentLeft(oOldLeftButton);
			}
		}
	}else{
		if(oButton){
			this.setAggregation("_leftButton", oButton);
		}else{
			if(oOldLeftButton){
				this.removeAggregation("_leftButton", oOldLeftButton);
			}
		}
	}
	return this.setAssociation("leftButton", oButton, !sap.m.Dialog._bOneDesign && jQuery.os.ios && !this._bMessageType);
};

sap.m.Dialog.prototype.setRightButton = function(oButton){
	var that = this;
	if(typeof(oButton) === "string"){
		oButton = sap.ui.getCore().byId(oButton);
	}

	var oOldRightButton = this.getRightButton();

	if(oButton && oOldRightButton === oButton.getId()){
		return this;
	}
	
	if(!this._oRightButtonDelegate){
		this._oRightButtonDelegate = {
			ontap: function(){
				that._oCloseTrigger = this;
			}
		};
	}
	
	if(oOldRightButton){
		oOldRightButton = sap.ui.getCore().byId(oOldRightButton);
		oOldRightButton.removeDelegate(this._oRightButtonDelegate);
	}
	
	if(oButton){
		oButton.addDelegate(this._oRightButtonDelegate, true, oButton);
		if(sap.m.Dialog._bOneDesign){
			if( !(oButton.getType() === sap.m.ButtonType.Accept || oButton.getType() === sap.m.ButtonType.Reject)){
				oButton.setType(sap.m.ButtonType.Transparent);
			}
		}
	}

	if(!sap.m.Dialog._bOneDesign && jQuery.os.ios && !this._bMessageType){
		this._createHeader();
		if(oButton){
			if(oOldRightButton){
				this._header.removeAggregation("contentRight", oOldRightButton, true);
			}
			this._header.addAggregation("contentRight", oButton, true);
			this._header.invalidate();
		}else{
			if(oOldRightButton){
				this._header.removeContentRight(oOldRightButton);
			}
		}
	}else{
		if(oButton){
			this.setAggregation("_rightButton", oButton);
		}else{
			if(oOldRightButton){
				this.removeAggregation("_leftButton", oOldRightButton);
			}
		}
	}
	
	this.setAssociation("rightButton", oButton, !sap.m.Dialog._bOneDesign && jQuery.os.ios && !this._bMessageType);
	return this;
};

sap.m.Dialog.prototype.setTitle = function(sTitle){
	this.setProperty("title", sTitle, true);

	if(this._headerTitle){
		this._headerTitle.setText(sTitle);
	}else{
		this._headerTitle = new sap.m.Label(this.getId() + "-title", {
			text: sTitle
		}).addStyleClass("sapMDialogTitle");
		
		if(sap.m.Dialog._bOneDesign || (jQuery.os.ios && !this._bMessageType)){
			this._createHeader();
			this._header.addContentMiddle(this._headerTitle);
		}else{
			this.setAggregation("_title", this._headerTitle);
		}
	}
	return this;
};

sap.m.Dialog.prototype.setState = function(sState){
	var mFlags = {}, 
		$this = this.$(),
		sName;
	mFlags[sState] = true;
	
	this.setProperty("state", sState, true);
	if(sap.m.Dialog._bOneDesign){
		for(sName in sap.m.Dialog._mStateClasses){
			$this.toggleClass(sap.m.Dialog._mStateClasses[sName], !!mFlags[sName]);
		}
		this.setIcon(sap.m.Dialog._mIcons[sState], true);
	}
};

sap.m.Dialog.prototype.setIcon = function(sIcon, bInternal){
	if(!bInternal){
		this._externalIcon = sIcon;
	}else{
		if(this._externalIcon){
			sIcon = this._externalIcon;
		}
	}
	
	if(sap.m.Dialog._bOneDesign || !jQuery.os.ios){
		//icon is only shown in non iOS platform
		if(sIcon){
			if(sIcon!==this.getIcon()){
				if(this._iconImage){
					this._iconImage.setSrc(sIcon);
				}else{
					this._iconImage = sap.ui.core.IconPool.createControlByURI({
						id: this.getId() + "-icon",
						src: sIcon
					}, sap.m.Image).addStyleClass("sapMDialogIcon");
					
					if(sap.m.Dialog._bOneDesign){
						this._createHeader();
						this._header.insertAggregation("contentMiddle", this._iconImage, 0);
					}else{
						this.setAggregation("_icon", this._iconImage);
					}
				}
			}
		}else{
			var sDialogState = this.getState();
			if(!bInternal && sDialogState !== sap.ui.core.ValueState.None && sap.m.Dialog._bOneDesign){
				if(this._iconImage){
					this._iconImage.setSrc(sap.m.Dialog._mIcons[sDialogState]);
				}
			}else{
				if(this._iconImage){
					this._iconImage.destroy();
					this._iconImage = null;
				}
			}
		}
	}
	
	this.setProperty("icon", sIcon, true);
	return this;
};

sap.m.Dialog.prototype.setType = function(sType){
	if(!sap.m.Dialog._bOneDesign){
		var sOldType = this.getType();
		var $blockRef = jQuery("#sap-ui-blocklayer-popup");
		
		if(sOldType === sType){
			return;
		}
		
		this._bMessageType = (sType === sap.m.DialogType.Message);
	
		//reset blocklayer css and popup animation for iphone when changing the type
		if(jQuery.device.is.iphone){
			if(this._bMessageType){
				if($blockRef.length === 0){
					this.oPopup.setModal(true, "sapMDialogBlockLayerInit");
				}else{
					$blockRef.removeClass("sapMDialogTransparentBlk").addClass("sapMDialogBlockLayerInit");
					if(this.oPopup.isOpen()){
						$blockRef.addClass("sapMBusyBLyInit sapMBusyBLyShown");
					}	
				}
				this.oPopup.setPosition("center center", "center center", document, "0 0", "fit");
				this._initBlockLayerAnimation();
			}else{
				if($blockRef.length === 0){
					this.oPopup.setModal(true, "sapMDialogTransparentBlk");
				}else{
					$blockRef.removeClass("sapMBusyBLyShown sapMBusyBLyInit").addClass("sapMDialogTransparentBlk");
				}
				this.oPopup.setPosition("center top", "center bottom", document, "0 0", "fit");
				this._clearBlockLayerAnimation();
			}
		}
	}
	
	return this.setProperty("type", sType, false);
};
/* =========================================================== */
/*                           end: setters                      */
/* =========================================================== */

sap.m.Dialog.prototype.forceInvalidate = sap.ui.core.Control.prototype.invalidate;

//stop propagating the invalidate to static UIArea before the popover is opened once
//otherwise the open animation can't be seen for the first time
sap.m.Dialog.prototype.invalidate = function(oOrigin){
	if(!this._firstOpen){
		this.forceInvalidate();
	}
};
