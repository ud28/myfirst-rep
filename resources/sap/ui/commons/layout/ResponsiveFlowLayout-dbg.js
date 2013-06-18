/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.ResponsiveFlowLayout.
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new layout/ResponsiveFlowLayout.
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
 * <li>{@link #getResponsive responsive} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a layout where several controls can be added. These controls are blown up to fit a whole line. If the window resizes the controls are moved between the lines and resized again.
 * @extends sap.ui.core.Control
 *
 * @author SAP 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.commons.layout.ResponsiveFlowLayout
 */
sap.ui.core.Control.extend("sap.ui.commons.layout.ResponsiveFlowLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"responsive" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.ResponsiveFlowLayout.extend
 * @function
 */


/**
 * Getter for property <code>responsive</code>.
 * If this property is 'false' all added controls keep their widths. Otherwise all added controls will be extended to the possible width of a row.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>responsive</code>
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#getResponsive
 * @function
 */

/**
 * Setter for property <code>responsive</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResponsive  new value for property <code>responsive</code>
 * @return {sap.ui.commons.layout.ResponsiveFlowLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#setResponsive
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached otherwise the default values are used.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#getContent
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
 * @return {sap.ui.commons.layout.ResponsiveFlowLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.ResponsiveFlowLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#removeAllContent
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
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.ResponsiveFlowLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayout#destroyContent
 * @function
 */


// Start of sap/ui/commons/layout/ResponsiveFlowLayout.js
jQuery.sap.require("sap.ui.commons.layout.ResponsiveFlowLayoutData");
jQuery.sap.require("sap.ui.core.IntervalTrigger");
jQuery.sap.require("sap.ui.core.theming.Parameters");

(function() {
	// a singelton instance of the centralized interval trigger
	sap.ui.commons.layout.ResponsiveFlowLayout.INTERVAL_TRIGGER = new sap.ui.core.IntervalTrigger(300);

	sap.ui.commons.layout.ResponsiveFlowLayout.prototype.init = function() {
		this._rows = [];

		this._bIsRegistered = false;
		this._proxyComputeWidths = jQuery.proxy(computeWidths, this);
	};
	sap.ui.commons.layout.ResponsiveFlowLayout.prototype.exit = function() {
		delete this._rows;

		if (this._bIsRegistered) {
			sap.ui.commons.layout.ResponsiveFlowLayout.INTERVAL_TRIGGER.removeListener(this._proxyComputeWidths, this);
			delete this._bIsRegistered;
		}

		delete this._proxyComputeWidths;
	};

	var updateRows = function(oThis) {
		var aControls = oThis.getContent();
		var aRows = [];
		var iRow = -1;
		var oItem = {}, oLast = {};
		var sId = "";
		var oLD;
		var minWidth = 0, weight = 0, length = 0;
		var bBreak = false, bMargin = false, bLinebreakable = false;

		for ( var i = 0; i < aControls.length; i++) {
			// use default values -> are overwritten if LayoutData exists
			minWidth = sap.ui.commons.layout.ResponsiveFlowLayoutData.MIN_WIDTH;
			weight = sap.ui.commons.layout.ResponsiveFlowLayoutData.WEIGHT;
			bBreak = sap.ui.commons.layout.ResponsiveFlowLayoutData.LINEBREAK;
			bMargin = sap.ui.commons.layout.ResponsiveFlowLayoutData.MARGIN;
			bLinebreakable = sap.ui.commons.layout.ResponsiveFlowLayoutData.LINEBREAKABLE;

			// set the values of the layout data if available
			oLD = _getLayoutDataForControl(aControls[i]);
			if (oLD instanceof sap.ui.commons.layout.ResponsiveFlowLayoutData) {
				bBreak = oLD.getLinebreak();
				minWidth = oLD.getMinWidth();
				weight = oLD.getWeight();
				bMargin = oLD.getMargin();
				bLinebreakable = oLD.getLinebreakable();
			}

			if (iRow < 0 || bBreak) {
				/*
				 * if first run OR current control should cause a linebreak the
				 * control will be placed in a new row
				 */
				iRow++;
				aRows.push({
					height : -1,
					cont : []
				});
			}

			length = aRows[iRow].cont.length;
			sId = aControls[i].getId() + "-cont" + iRow + "_" + length;
			oItem = {
				minWidth : minWidth,
				weight : weight,
				linebreakable : bLinebreakable,
				// since the margin of the element is used outside of it it
				// becomes padding
				padding : bMargin,
				control : aControls[i],
				id : sId,
				breakWith : []
			};

			// check if item has been pushed needed if no element was found that
			// is allowed to be wrapped into a new line
			var bPushed = false;
			if (!!!bLinebreakable) {
				// if an element mustn't break -> find any previous element that
				// is allowed to do wrapping
				for ( var br = length; br > 0; br--) {
					oLast = aRows[iRow].cont[br - 1];
					if (oLast.linebreakable) {
						oLast.breakWith.push(oItem);
						bPushed = true;
						break;
					}
				}
			}

			if (!bPushed) {
				aRows[iRow].cont.push(oItem);
			}

		}

		oThis._rows = aRows;
	};

	var getCurrrentWrapping = function(oRow, $Row, oThis) {
		var r = [];
		var lastOffsetLeft = 10000000;
		var currentRow = -1;

		// Find out the "rows" within a row
		for ( var j = 0; j < oRow.cont.length; j++) {
			var $cont = jQuery.sap.byId(oRow.cont[j].id);
			if ($cont.length > 0) {
				var offset = $cont[0].offsetLeft;
				if (lastOffsetLeft >= offset) {
					r.push({
						cont : []
					});
					currentRow++;
				}
				lastOffsetLeft = offset;
				r[currentRow].cont.push(oRow.cont[j]);
			}
		}
		return r;
	};

	var getTargetWrapping = function(oRow, $Row) {
		/*
		 * initiating all required variables to increase speed and memory
		 * efficiency
		 */
		var width = $Row.width();
		var r = [];
		var currentRow = -1;
		var currentWidth = 0;
		var totalWeight = 0;
		var indexLinebreak = 0;
		var w1 = 0, w2 = 0;
		var j = 0, k = 0;

		// Find out the "rows" within a row
		for (j = 0; j < oRow.cont.length; j++) {
			currentWidth = 0;
			totalWeight = 0;
			for (k = indexLinebreak; k <= j; k++) {
				totalWeight = totalWeight + oRow.cont[k].weight;
			}
			for (k = indexLinebreak; k <= j; k++) {
				w1 = width / totalWeight * oRow.cont[k].weight;
				w1 = Math.floor(w1);

				w2 = oRow.cont[k].minWidth;

				currentWidth += Math.max(w1, w2);
			}

			if (currentRow == -1 || currentWidth > width) {
				r.push({
					cont : []
				});
				if (currentRow !== -1) {
					/*
					 * if this is NOT the first run -> all coming iterations
					 * needn't to start from '0' since the calculation of a new
					 * row has begun
					 */
					indexLinebreak = j;
				}
				currentRow++;

			}
			r[currentRow].cont.push(oRow.cont[j]);
		}
		return r;
	};

	var checkWrappingDiff = function(wrap1, wrap2) {
		if (wrap1.length != wrap2.length) {
			return true;
		}

		for ( var i = 0; i < wrap1.length; i++) {
			if (wrap1[i].cont.length != wrap2[i].cont.length) {
				return true;
			}
		}

		return false;
	};

	/*
	 * Sets the width of an jQuery-object in percentage. If the percentage value
	 * is 100 (-> 100%) then a CSS-class called 'sapUiRFLFullLength' is added
	 */
	var fSetWidthPercentage = function($element, iProcWidth) {
		if (iProcWidth === 100) {
			$element.addClass("sapUiRFLFullLength");
		} else {
			$element.removeClass("sapUiRFLFullLength");
		}

		$element.css("width", iProcWidth + "%");
	};

	var computeWidths = function(bInitial) {
		if (this.getDomRef) {
			var rows = this._rows;
			var sId = this.getId();

			if (rows) {
				for ( var i = 0; i < rows.length; i++) {
					var $row = jQuery.sap.byId(sId + "-row" + i);
					var oTargetWrapping = getTargetWrapping(rows[i], $row);
					var oCurrentWrapping = getCurrrentWrapping(rows[i], $row, this);

					if (bInitial || this._bLayoutDataChanged || rows[i].height != $row.height() || checkWrappingDiff(oCurrentWrapping, oTargetWrapping)) {
						if (this._bLayoutDataChanged) {
							// reset this to be clean for next check interval
							this._bLayoutDataChanged = false;
						}
						var r = oTargetWrapping;
						var iRowProcWidth = 0;
						var aWidths = [];
						var j = 0, k = 0, z = 0;
						var totalWeight = 0;
						var iProcWidth = 0;
						var oCont, $cont;

						if (oTargetWrapping.length > 1) {
							$row.removeClass("sapUiRFLCompleteRow");
						} else {
							$row.addClass("sapUiRFLCompleteRow");
						}

						for (j = 0; j < r.length; j++) {
							iProcWidth = 0;
							aWidths.length = 0;

							for (k = 0; k < r[j].cont.length; k++) {
								totalWeight = 0;
								for (z = 0; z < r[j].cont.length; z++) {
									totalWeight += r[j].cont[z].weight;
								}

								oCont = r[j].cont[k];
								$cont = jQuery.sap.byId(oCont.id);
								iProcWidth = 100 / totalWeight * oCont.weight;
								iProcWidth = Math.floor(iProcWidth);

								aWidths.push(iProcWidth);
								iRowProcWidth += iProcWidth;

								// set the width of the container
								fSetWidthPercentage($cont, iProcWidth);

								/*
								 * calculate the widths of the elements inside
								 * to set a relative width to the surrounding
								 * container
								 */
								if (oCont.breakWith.length > 0) {
									var tWeight = oCont.weight;
									var tMinWidth = oCont.minWidth;
									for ( var br = 0; br < oCont.breakWith.length; br++) {
										tWeight += oCont.breakWith[br].weight;
										tMinWidth += oCont.breakWith[br].minWidth;
									}

									var aBreakWidths = [];

									// set width of first element
									var percW = 100 / tWeight * oCont.weight;
									percW = Math.floor(percW);
									aBreakWidths.push(percW);

									var $break = jQuery.sap.byId(oCont.id + "-multi0");
									fSetWidthPercentage($break, percW);
									$cont.css("min-width", tMinWidth + "px");

									// total percentage for all elements
									var tPercentage = percW;

									// set the corresponding width for every
									// other element
									for (br = 0; br < oCont.breakWith.length; br++) {
										percW = 100 / tWeight * oCont.breakWith[br].weight;
										percW = Math.floor(percW);

										aBreakWidths.push(percW);
										tPercentage += percW;

										$break = jQuery.sap.byId(oCont.id + "-multi" + (br + 1));
										fSetWidthPercentage($break, percW);
									}

									if (tPercentage < 100) {
										var diff = 100 - tPercentage;
										br = 0;

										while (diff > 0) {
											$break = jQuery.sap.byId(oCont.id + "-multi" + br);
											aBreakWidths[br] = aBreakWidths[br] + 1;
											fSetWidthPercentage($break, aBreakWidths[br]);

											br++;
											br = br >= aBreakWidths.length ? 0 : br;

											diff--;
										}
									}
								}
							}

							/*
							 * If the row isn't at 100% due to rounding mistakes
							 * the missing percentage points are distributed
							 * over the row's items as equal as possible
							 */
							if (iRowProcWidth < 100) {
								var iDiff = 100 - iRowProcWidth;
								var iStep = iDiff / r[j].cont.length;
								iStep = Math.ceil(iStep);

								for ( var k = 0; k < r[j].cont.length; k++) {
									oCont = r[j].cont[k];
									$cont = jQuery.sap.byId(oCont.id);
									var iWidth = aWidths[k];
									iWidth += iStep;

									fSetWidthPercentage($cont, iWidth);
									iDiff -= iStep;

									if (iDiff <= 0) {
										break;
									}
								}
							}
						}
						rows[i].height = $row.height();
					}
				}
			}
		} else {
			if (this._bIsRegistered) {
				this._bIsRegistered = false;
				sap.ui.commons.layout.ResponsiveFlowLayout.INTERVAL_TRIGGER.removeListener(this._proxyComputeWidths, this);
			}
		}
	};

	/**
	 * Before all controls are rendered it is needed to update the internal
	 * structure of the rows
	 */
	sap.ui.commons.layout.ResponsiveFlowLayout.prototype.onBeforeRendering = function() {
		// update the internal structure of the rows
		updateRows(this);
	};

	/**
	 * If the layout should be responsive it is necessary to fix the content's
	 * items' widths corresponding to the layout's width
	 */
	sap.ui.commons.layout.ResponsiveFlowLayout.prototype.onAfterRendering = function(oEvent) {
		if (this.getResponsive()) {
			// Initial Width Adaptation
			this._proxyComputeWidths(true);

			if (!this._bIsRegistered) {
				this._bIsRegistered = true;
				sap.ui.commons.layout.ResponsiveFlowLayout.INTERVAL_TRIGGER.addListener(this._proxyComputeWidths, this);
			}
		}
	};
	sap.ui.commons.layout.ResponsiveFlowLayout.prototype.onThemeChanged = function(oEvent) {

		if (oEvent.type === "LayoutDataChange") {
			this._bLayoutDataChanged = true;
		}

		this.invalidate();
	};

	/**
	 * If any LayoutData was changed the samte stuff like 'onThemeChanged' has
	 * to be done
	 */
	sap.ui.commons.layout.ResponsiveFlowLayout.prototype.onLayoutDataChange = sap.ui.commons.layout.ResponsiveFlowLayout.prototype.onThemeChanged;

	var _getLayoutDataForControl = function(oControl) {
		var oLayoutData = oControl.getLayoutData();

		if (!oLayoutData) {
			return undefined;
		} else if (oLayoutData instanceof sap.ui.commons.layout.ResponsiveFlowLayoutData) {
			return oLayoutData;
		} else if (oLayoutData.getMetadata().getName() == "sap.ui.core.VariantLayoutData") {
			// multiple LayoutData available - search here
			var aLayoutData = oLayoutData.getMultipleLayoutData();
			for ( var i = 0; i < aLayoutData.length; i++) {
				var oLayoutData2 = aLayoutData[i];
				if (oLayoutData2 instanceof sap.ui.commons.layout.ResponsiveFlowLayoutData) {
					return oLayoutData2;
				}
			}
		}
	};
}());
