/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.PullToRefresh.
jQuery.sap.declare("sap.m.PullToRefresh");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new PullToRefresh.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getShowIcon showIcon} : boolean (default: false)</li>
 * <li>{@link #getCustomIcon customIcon} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.PullToRefresh#event:refresh refresh} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * PullToRefresh control. Put it as the first control in contents of a scroll container or a scrollable page. Do not place it into a page with disabled scrolling.
 * On touch devices it gets hidden by default and when the user pulls down the page far enough, it gets visible and triggers the "refresh" event.
 * In non-touch browsers where scrollbars are used for scrolling, it is always visible and triggers the "refresh" event when clicked.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.9.2
 * @name sap.m.PullToRefresh
 */
sap.ui.core.Control.extend("sap.m.PullToRefresh", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"hide"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"showIcon" : {type : "boolean", group : "Appearance", defaultValue : false},
		"customIcon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null}
	},
	events : {
		"refresh" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.PullToRefresh with name <code>sClassName</code> 
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
 * @name sap.m.PullToRefresh.extend
 * @function
 */

sap.m.PullToRefresh.M_EVENTS = {'refresh':'refresh'};


/**
 * Getter for property <code>description</code>.
 * Optional description. May be used to inform a user, for example, when the list has been updated last time.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.m.PullToRefresh#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.PullToRefresh#setDescription
 * @function
 */


/**
 * Getter for property <code>showIcon</code>.
 * Set to true to display an icon/logo. Icon must be set either in the customIcon property or in the CSS theme for the PullToRefresh control.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showIcon</code>
 * @public
 * @name sap.m.PullToRefresh#getShowIcon
 * @function
 */

/**
 * Setter for property <code>showIcon</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowIcon  new value for property <code>showIcon</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.PullToRefresh#setShowIcon
 * @function
 */


/**
 * Getter for property <code>customIcon</code>.
 * Provide a URI to a custom icon image to replace the SAP logo. Large images are scaled down to max 50px height.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>customIcon</code>
 * @public
 * @name sap.m.PullToRefresh#getCustomIcon
 * @function
 */

/**
 * Setter for property <code>customIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sCustomIcon  new value for property <code>customIcon</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.PullToRefresh#setCustomIcon
 * @function
 */


/**
 * Event indicates that the user has requested new data 
 *
 * @name sap.m.PullToRefresh#refresh
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'refresh' event of this <code>sap.m.PullToRefresh</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.PullToRefresh</code>.<br/> itself. 
 *  
 * Event indicates that the user has requested new data 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.PullToRefresh</code>.<br/> itself.
 *
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.PullToRefresh#attachRefresh
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'refresh' event of this <code>sap.m.PullToRefresh</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.PullToRefresh#detachRefresh
 * @function
 */

/**
 * Fire event refresh to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.PullToRefresh#fireRefresh
 * @function
 */


/**
 * Hides the control and resets it to the normal state. In non-touch environments the control is not hidden.
 *
 * @name sap.m.PullToRefresh.prototype.hide
 * @function

 * @type void
 * @public
 */


// Start of sap/m/PullToRefresh.js
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.m.PullToRefresh.prototype.init = function(){
	this._bTouchMode = jQuery.support.touch || jQuery.sap.simulateMobileOnDesktop; // FIXME: plus fakeOS mode
	this._bPltfDpndnt = sap.ui.core.theming.Parameters.get("sapMPlatformDependent") == "true"; 
	
	this._iState = 0; // 0 - normal; 1 - release to refresh; 2 - loading
	this.oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m"); // texts
	
	if (this._bTouchMode) {
		// recalculate top pull offset by resize
		jQuery(window).on("resize.sapMP2R", jQuery.proxy(this.calculateTopTrigger, this));
	}
	
	// Busy indicator
	jQuery.sap.require("sap.m.BusyIndicator");
	this._oBusyIndicator = new sap.m.BusyIndicator({
		size: this._bTouchMode ? "2em" : "1.7em", 
		design: this._bPltfDpndnt? "light" : "auto" 
	});
	this._oBusyIndicator.setParent(this);
};

sap.m.PullToRefresh.prototype.exit = function(){
	if(this._oCustomImage){
		this._oCustomImage.destroy();
	}
	this._oBusyIndicator.destroy();
};

sap.m.PullToRefresh.prototype.onBeforeRendering = function(){
	if (this._bTouchMode) {
		var oParent = this.getParent();
		this._oScroller = oParent && oParent.getScrollDelegate? oParent.getScrollDelegate() : null;
		if(this._oScroller){
			this._oScroller.setPullDown(this);
		}
	}
};

sap.m.PullToRefresh.prototype.calculateTopTrigger = function(){
	this._iTopTrigger = 1;
	// find the scroll container that embeds the PullToRefresh control
	if(this._oDomRef && this._oDomRef.parentNode && this._oDomRef.parentNode.parentNode &&
			this._oDomRef.parentNode.parentNode.offsetHeight < this._oDomRef.offsetHeight * 1.5){
		// if there is no place to pull to show the image, pull only until the top line of text
		this._iTopTrigger = jQuery.sap.domById(this.getId() + "-T").offsetTop;
	}
};

sap.m.PullToRefresh.prototype.onAfterRendering = function(){
	if (this._bTouchMode) {
		if(this._oScroller){
			this._oScroller.refresh();
		}
		this._oDomRef = this.getDomRef();
		this.calculateTopTrigger();
	}
};

sap.m.PullToRefresh.prototype.exit = function(){
	if (this._bTouchMode) {
		jQuery(window).off("resize.sapMP2R");
		if(this._oScroller) {
			this._oScroller.setPullDown(null);
		}
		this._oScroller = null;
	}
};

// ScrollEnablement callback functions
sap.m.PullToRefresh.prototype.doScrollMove = function(){
	if(!this._oScroller){ return; }
	var _scroller = this._oScroller._scroller;
	if(_scroller.y > -this._iTopTrigger && this._iState < 1 ){
		this.setState(1);
		_scroller.minScrollY = 0;
	} else if (_scroller.y < -this._iTopTrigger && this._iState == 1){
		this.setState(0);
		_scroller.minScrollY = -this._oDomRef.offsetHeight;
	}
};

sap.m.PullToRefresh.prototype.doRefresh = function(){
	this.setState(0);
};

sap.m.PullToRefresh.prototype.doScrollEnd = function(){
	if(this._iState == 1){ // if released when ready - load
		this.setState(2);
		this.fireRefresh();
	}
};

/*
* Set display state: 0 - pull to refresh, 1 - release to refresh, 2 - loading
* @private
*/
sap.m.PullToRefresh.prototype.setState = function(iState){

	if(this._iState == iState){ return; }

	var $this = this.$();
	var $text = $this.find(".sapMPullDownText");
	switch(iState){
		case 0:
			$this.toggleClass("sapMFlip", false).toggleClass("sapMLoading", false);
			$text.html(this.oRb.getText(this._bTouchMode ? "PULL2REFRESH_PULLDOWN" : "PULL2REFRESH_REFRESH"));
			$this.find(".sapMPullDownInfo").html(this.getDescription());
			this._iState = iState;
			break;
		case 1:
			$this.toggleClass("sapMFlip", true);
			$text.html(this.oRb.getText("PULL2REFRESH_RELEASE"));
			this._iState = iState;
			break;
		case 2:
			$this.toggleClass("sapMFlip", false).toggleClass("sapMLoading", true);
			this._oBusyIndicator.setVisible(true);
			$text.html(this.oRb.getText("PULL2REFRESH_LOADING"));
			$this.find(".sapMPullDownInfo").html(this._bTouchMode ? this.oRb.getText("PULL2REFRESH_LOADING_LONG") : "");
			this._iState = iState;
			break;
	}
};

/*
* Override re-rendering for description
* @private
*/
sap.m.PullToRefresh.prototype.setDescription = function(sDescription){
	this.$().find(".sapMPullDownInfo").html(jQuery.sap.encodeHTML(sDescription));
	return this.setProperty("description", sDescription, true);
};

/*
* Return a private custom icon image control for internal rendering
* @private
*/
sap.m.PullToRefresh.prototype.getCustomIconImage = function(){
	if(!this._oCustomImage){
		this._oCustomImage = new sap.m.Image({src:this.getCustomIcon()}).addStyleClass("sapMPullDownCIImg");
	} else {
		this._oCustomImage.setSrc(this.getCustomIcon());
	}
	return this._oCustomImage;
};


// mouse version (non-touch)
sap.m.PullToRefresh.prototype.onclick = function() {
	if (!this._bTouchMode) {
		this.setState(2);
		this.fireRefresh();
	}
};


// API implementation
sap.m.PullToRefresh.prototype.hide = function(){
	if (this._bTouchMode) {
		if(this._oScroller){ this._oScroller.refresh(); }
		else { this.setState(0); }
	} else {
		this.setState(0);
	}
};
