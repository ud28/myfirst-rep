/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.StackedColumn.
jQuery.sap.declare("sap.viz.ui5.StackedColumn");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseChart");

/**
 * Constructor for a new ui5/StackedColumn.
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
 * <li>{@link #getTitle title} : sap.viz.ui5.types.Title</li>
 * <li>{@link #getLegend legend} : sap.viz.ui5.types.Legend</li>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Tooltip</li>
 * <li>{@link #getInteraction interaction} : sap.viz.ui5.types.controller.Interaction</li>
 * <li>{@link #getYAxis yAxis} : sap.viz.ui5.types.Axis</li>
 * <li>{@link #getXAxis xAxis} : sap.viz.ui5.types.Axis</li>
 * <li>{@link #getBackground background} : sap.viz.ui5.types.Background</li>
 * <li>{@link #getPlotArea plotArea} : sap.viz.ui5.types.StackedVerticalBar</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.viz.ui5.StackedColumn#event:showTooltip showTooltip} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.StackedColumn#event:hideTooltip hideTooltip} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.StackedColumn#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.StackedColumn#event:deselectData deselectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseChart#constructor sap.viz.ui5.core.BaseChart}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Chart ui5/StackedColumn
 * @extends sap.viz.ui5.core.BaseChart
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.StackedColumn
 */
sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.StackedColumn", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	aggregations : {
    	"title" : {type : "sap.viz.ui5.types.Title", multiple : false}, 
    	"legend" : {type : "sap.viz.ui5.types.Legend", multiple : false}, 
    	"toolTip" : {type : "sap.viz.ui5.types.Tooltip", multiple : false}, 
    	"interaction" : {type : "sap.viz.ui5.types.controller.Interaction", multiple : false}, 
    	"yAxis" : {type : "sap.viz.ui5.types.Axis", multiple : false}, 
    	"xAxis" : {type : "sap.viz.ui5.types.Axis", multiple : false}, 
    	"background" : {type : "sap.viz.ui5.types.Background", multiple : false}, 
    	"plotArea" : {type : "sap.viz.ui5.types.StackedVerticalBar", multiple : false}
	},
	events : {
		"showTooltip" : {}, 
		"hideTooltip" : {}, 
		"selectData" : {}, 
		"deselectData" : {}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.StackedColumn with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.StackedColumn.extend
 * @function
 */

sap.viz.ui5.StackedColumn.M_EVENTS = {'showTooltip':'showTooltip','hideTooltip':'hideTooltip','selectData':'selectData','deselectData':'deselectData'};

	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Module sap.viz.modules.title
 * 
 * @return {sap.viz.ui5.types.Title}
 * @public
 * @name sap.viz.ui5.StackedColumn#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.viz.ui5.types.Title}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyTitle
 * @function
 */
	
/**
 * Getter for aggregation <code>legend</code>.<br/>
 * Module sap.viz.modules.legend
 * 
 * @return {sap.viz.ui5.types.Legend}
 * @public
 * @name sap.viz.ui5.StackedColumn#getLegend
 * @function
 */

/**
 * Setter for the aggregated <code>legend</code>.
 * @param oLegend {sap.viz.ui5.types.Legend}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setLegend
 * @function
 */


/**
 * Destroys the legend in the aggregation 
 * named <code>legend</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyLegend
 * @function
 */
	
/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Module sap.viz.modules.tooltip
 * 
 * @return {sap.viz.ui5.types.Tooltip}
 * @public
 * @name sap.viz.ui5.StackedColumn#getToolTip
 * @function
 */

/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Tooltip}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setToolTip
 * @function
 */


/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyToolTip
 * @function
 */
	
/**
 * Getter for aggregation <code>interaction</code>.<br/>
 * Module sap.viz.modules.controller.interaction
 * 
 * @return {sap.viz.ui5.types.controller.Interaction}
 * @public
 * @name sap.viz.ui5.StackedColumn#getInteraction
 * @function
 */

/**
 * Setter for the aggregated <code>interaction</code>.
 * @param oInteraction {sap.viz.ui5.types.controller.Interaction}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setInteraction
 * @function
 */


/**
 * Destroys the interaction in the aggregation 
 * named <code>interaction</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyInteraction
 * @function
 */
	
/**
 * Getter for aggregation <code>yAxis</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.StackedColumn#getYAxis
 * @function
 */

/**
 * Setter for the aggregated <code>yAxis</code>.
 * @param oYAxis {sap.viz.ui5.types.Axis}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setYAxi
 * @function
 */


/**
 * Destroys the yAxi in the aggregation 
 * named <code>yAxis</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyYAxis
 * @function
 */
	
/**
 * Getter for aggregation <code>xAxis</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.StackedColumn#getXAxis
 * @function
 */

/**
 * Setter for the aggregated <code>xAxis</code>.
 * @param oXAxis {sap.viz.ui5.types.Axis}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setXAxi
 * @function
 */


/**
 * Destroys the xAxi in the aggregation 
 * named <code>xAxis</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyXAxis
 * @function
 */
	
/**
 * Getter for aggregation <code>background</code>.<br/>
 * Module sap.viz.modules.background
 * 
 * @return {sap.viz.ui5.types.Background}
 * @public
 * @name sap.viz.ui5.StackedColumn#getBackground
 * @function
 */

/**
 * Setter for the aggregated <code>background</code>.
 * @param oBackground {sap.viz.ui5.types.Background}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setBackground
 * @function
 */


/**
 * Destroys the background in the aggregation 
 * named <code>background</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyBackground
 * @function
 */
	
/**
 * Getter for aggregation <code>plotArea</code>.<br/>
 * Module sap.viz.modules.stackedverticalbar
 * 
 * @return {sap.viz.ui5.types.StackedVerticalBar}
 * @public
 * @name sap.viz.ui5.StackedColumn#getPlotArea
 * @function
 */

/**
 * Setter for the aggregated <code>plotArea</code>.
 * @param oPlotArea {sap.viz.ui5.types.StackedVerticalBar}
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#setPlotArea
 * @function
 */


/**
 * Destroys the plotArea in the aggregation 
 * named <code>plotArea</code>.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#destroyPlotArea
 * @function
 */

/**
 * Event fired when the mouse hover onto the specific part of chart, data context of tooltip would be passed in accordance with the following format.<code>{name:"showTooltip",data:{body:[{
 * //data of one group
 * name:"...",val:[{
 * //data of one row
 * color:"...",label:"...",shape:"...",value:"..."},"..."]},"..."],footer:[{label:"...",value:"..."},"..."],plotArea:{
 * //this object specifies the plot area of the chart
 * height:"...",width:"...",x:"...",y:"..."},point:{
 * //this object specifies a point which affects the position of tooltip
 * x:"...",y:"..."}}} 
 *
 * @name sap.viz.ui5.StackedColumn#showTooltip
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'showTooltip' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself. 
 *  
 * Event fired when the mouse hover onto the specific part of chart, data context of tooltip would be passed in accordance with the following format.<code>{name:"showTooltip",data:{body:[{
 * //data of one group
 * name:"...",val:[{
 * //data of one row
 * color:"...",label:"...",shape:"...",value:"..."},"..."]},"..."],footer:[{label:"...",value:"..."},"..."],plotArea:{
 * //this object specifies the plot area of the chart
 * height:"...",width:"...",x:"...",y:"..."},point:{
 * //this object specifies a point which affects the position of tooltip
 * x:"...",y:"..."}}} 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#attachShowTooltip
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'showTooltip' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#detachShowTooltip
 * @function
 */


/**
 * Fire event showTooltip to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.StackedColumn#fireShowTooltip
 * @function
 */

/**
 * Event fired when the mouse hover out of the specific part of chart, no data is passed. 
 *
 * @name sap.viz.ui5.StackedColumn#hideTooltip
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'hideTooltip' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself. 
 *  
 * Event fired when the mouse hover out of the specific part of chart, no data is passed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#attachHideTooltip
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'hideTooltip' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#detachHideTooltip
 * @function
 */


/**
 * Fire event hideTooltip to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.StackedColumn#fireHideTooltip
 * @function
 */

/**
 * Event fired when certain data point(s) is(are) selected, data context of selected item(s) would be passed in accordance with the following format.<code>{name: "selectData",data:[{
 * //selected element's detail
 * target:"Dom Element",//an object pointed to corresponding dom element
 * data:[{val: "...",//value of this element
 * ctx:{type:"Dimension"||"Measure"||"MND",
 * //for Dimension
 * path:{aa:"...",di:"...",dii:"..."},
 * //for Measure
 * path:{mg:"...",mi:"...",dii_a1:"...",dii_a2:"..."},
 * //for MND
 * path:{mg:"...",mi:"..."}
 * //path: analysis path
 * //aa: analysis axis index // 0 for analysis axis 1, 1 for analysis 2
 * //di: dimension index //zero based
 * //dii: dimension item index //zero based
 * //mg: measure group index // 0 for measure group 1,1 for measure group 2
 * //mi: measure index // measure index in measure group zero based
 * //dii_a1: each dii of di in analysis axis 1 index
 * //dii_a2: each dii of di in analysis axis 2 index
 * }},{
 * //for bubble, tagcloud and scatter, there will be more than one values in one selected element.
 * var:"...",ctx:"..."}]},{
 * //if under multi selection, there will be more than one selected elements
 * target:"...",data:["..."]}]} 
 *
 * @name sap.viz.ui5.StackedColumn#selectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself. 
 *  
 * Event fired when certain data point(s) is(are) selected, data context of selected item(s) would be passed in accordance with the following format.<code>{name: "selectData",data:[{
 * //selected element's detail
 * target:"Dom Element",//an object pointed to corresponding dom element
 * data:[{val: "...",//value of this element
 * ctx:{type:"Dimension"||"Measure"||"MND",
 * //for Dimension
 * path:{aa:"...",di:"...",dii:"..."},
 * //for Measure
 * path:{mg:"...",mi:"...",dii_a1:"...",dii_a2:"..."},
 * //for MND
 * path:{mg:"...",mi:"..."}
 * //path: analysis path
 * //aa: analysis axis index // 0 for analysis axis 1, 1 for analysis 2
 * //di: dimension index //zero based
 * //dii: dimension item index //zero based
 * //mg: measure group index // 0 for measure group 1,1 for measure group 2
 * //mi: measure index // measure index in measure group zero based
 * //dii_a1: each dii of di in analysis axis 1 index
 * //dii_a2: each dii of di in analysis axis 2 index
 * }},{
 * //for bubble, tagcloud and scatter, there will be more than one values in one selected element.
 * var:"...",ctx:"..."}]},{
 * //if under multi selection, there will be more than one selected elements
 * target:"...",data:["..."]}]} 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#attachSelectData
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#detachSelectData
 * @function
 */


/**
 * Fire event selectData to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.StackedColumn#fireSelectData
 * @function
 */

/**
 * Event fired when certain data point(s) is(are) deselected, data context of deselected item(s) would be passed in accordance with the following format.<code>{name: "deselectData",data:["---the same as selectedData---"]} 
 *
 * @name sap.viz.ui5.StackedColumn#deselectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deselectData' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself. 
 *  
 * Event fired when certain data point(s) is(are) deselected, data context of deselected item(s) would be passed in accordance with the following format.<code>{name: "deselectData",data:["---the same as selectedData---"]} 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.StackedColumn</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#attachDeselectData
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'deselectData' event of this <code>sap.viz.ui5.StackedColumn</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.StackedColumn#detachDeselectData
 * @function
 */


/**
 * Fire event deselectData to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.StackedColumn} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.StackedColumn#fireDeselectData
 * @function
 */

// Start of sap/viz/ui5/StackedColumn.js
sap.viz.ui5.StackedColumn.prototype.getVIZChartType = function() {
  return "viz/stacked_column";
};

sap.viz.ui5.StackedColumn.prototype.getTitle = function() {
  return this._getOrCreate("title");
}
sap.viz.ui5.StackedColumn.prototype.getLegend = function() {
  return this._getOrCreate("legend");
}
sap.viz.ui5.StackedColumn.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.StackedColumn.prototype.getInteraction = function() {
  return this._getOrCreate("interaction");
}
sap.viz.ui5.StackedColumn.prototype.getYAxis = function() {
  return this._getOrCreate("yAxis");
}
sap.viz.ui5.StackedColumn.prototype.getXAxis = function() {
  return this._getOrCreate("xAxis");
}
sap.viz.ui5.StackedColumn.prototype.getBackground = function() {
  return this._getOrCreate("background");
}
sap.viz.ui5.StackedColumn.prototype.getPlotArea = function() {
  return this._getOrCreate("plotArea");
}
sap.viz.ui5.StackedColumn.prototype.attachShowTooltip = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("showTooltip", oData, fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.detachShowTooltip = function(fnHandler, oListener) {
  return this._detachVIZEvent("showTooltip", fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.attachHideTooltip = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("hideTooltip", oData, fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.detachHideTooltip = function(fnHandler, oListener) {
  return this._detachVIZEvent("hideTooltip", fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.attachSelectData = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("selectData", oData, fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.detachSelectData = function(fnHandler, oListener) {
  return this._detachVIZEvent("selectData", fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.attachDeselectData = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("deselectData", oData, fnHandler, oListener);
};

sap.viz.ui5.StackedColumn.prototype.detachDeselectData = function(fnHandler, oListener) {
  return this._detachVIZEvent("deselectData", fnHandler, oListener);
};

