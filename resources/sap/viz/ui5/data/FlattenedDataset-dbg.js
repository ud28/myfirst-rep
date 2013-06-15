/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.data.FlattenedDataset.
jQuery.sap.declare("sap.viz.ui5.data.FlattenedDataset");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.data.Dataset");

/**
 * Constructor for a new ui5/data/FlattenedDataset.
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
 * <li>{@link #getDimensions dimensions} : sap.viz.ui5.data.DimensionDefinition[]</li>
 * <li>{@link #getMeasures measures} : sap.viz.ui5.data.MeasureDefinition[]</li>
 * <li>{@link #getData data} : sap.ui.core.Element[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.data.Dataset#constructor sap.viz.ui5.data.Dataset}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A dataset for flattened (redundant) data using a tabular format.
 * @extends sap.viz.ui5.data.Dataset
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.data.FlattenedDataset
 */
sap.viz.ui5.data.Dataset.extend("sap.viz.ui5.data.FlattenedDataset", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	aggregations : {
    	"dimensions" : {type : "sap.viz.ui5.data.DimensionDefinition", multiple : true, singularName : "dimension"}, 
    	"measures" : {type : "sap.viz.ui5.data.MeasureDefinition", multiple : true, singularName : "measure"}, 
    	"data" : {type : "sap.ui.core.Element", multiple : true, singularName : "data", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.data.FlattenedDataset with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.data.FlattenedDataset.extend
 * @function
 */

	
/**
 * Getter for aggregation <code>dimensions</code>.<br/>
 * List of definitions of all dimensions in this dataset
 * 
 * @return {sap.viz.ui5.data.DimensionDefinition[]}
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#getDimensions
 * @function
 */

/**
 * Inserts a dimension into the aggregation named <code>dimensions</code>.
 *
 * @param {sap.viz.ui5.data.DimensionDefinition}
 *          oDimension the dimension to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dimension should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dimension is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dimension is inserted at 
 *             the last position        
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#insertDimension
 * @function
 */


/**
 * Adds some dimension <code>oDimension</code> 
 * to the aggregation named <code>dimensions</code>.
 *
 * @param {sap.viz.ui5.data.DimensionDefinition}
 *            oDimension the dimension to add; if empty, nothing is inserted
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#addDimension
 * @function
 */


/**
 * Removes an dimension from the aggregation named <code>dimensions</code>.
 *
 * @param {int | string | sap.viz.ui5.data.DimensionDefinition} vDimension the dimension to remove or its index or id
 * @return {sap.viz.ui5.data.DimensionDefinition} the removed dimension or null
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#removeDimension
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>dimensions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.viz.ui5.data.DimensionDefinition[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#removeAllDimensions
 * @function
 */


/**
 * Checks for the provided <code>sap.viz.ui5.data.DimensionDefinition</code> in the aggregation named <code>dimensions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.viz.ui5.data.DimensionDefinition}
 *            oDimension the dimension whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#indexOfDimension
 * @function
 */


/**
 * Destroys all the dimensions in the aggregation 
 * named <code>dimensions</code>.
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#destroyDimensions
 * @function
 */
	
/**
 * Getter for aggregation <code>measures</code>.<br/>
 * list of definitions of all measures in this dataset
 * 
 * @return {sap.viz.ui5.data.MeasureDefinition[]}
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#getMeasures
 * @function
 */

/**
 * Inserts a measure into the aggregation named <code>measures</code>.
 *
 * @param {sap.viz.ui5.data.MeasureDefinition}
 *          oMeasure the measure to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the measure should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the measure is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the measure is inserted at 
 *             the last position        
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#insertMeasure
 * @function
 */


/**
 * Adds some measure <code>oMeasure</code> 
 * to the aggregation named <code>measures</code>.
 *
 * @param {sap.viz.ui5.data.MeasureDefinition}
 *            oMeasure the measure to add; if empty, nothing is inserted
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#addMeasure
 * @function
 */


/**
 * Removes an measure from the aggregation named <code>measures</code>.
 *
 * @param {int | string | sap.viz.ui5.data.MeasureDefinition} vMeasure the measure to remove or its index or id
 * @return {sap.viz.ui5.data.MeasureDefinition} the removed measure or null
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#removeMeasure
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>measures</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.viz.ui5.data.MeasureDefinition[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#removeAllMeasures
 * @function
 */


/**
 * Checks for the provided <code>sap.viz.ui5.data.MeasureDefinition</code> in the aggregation named <code>measures</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.viz.ui5.data.MeasureDefinition}
 *            oMeasure the measure whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#indexOfMeasure
 * @function
 */


/**
 * Destroys all the measures in the aggregation 
 * named <code>measures</code>.
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#destroyMeasures
 * @function
 */
	
/**
 * Getter for aggregation <code>data</code>.<br/>
 * Data containing dimensions and measures
 * 
 * @return {sap.ui.core.Element[]}
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#getData
 * @function
 */

/**
 * Inserts a data into the aggregation named <code>data</code>.
 *
 * @param {sap.ui.core.Element}
 *          oData the data to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the data should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the data is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the data is inserted at 
 *             the last position        
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#insertData
 * @function
 */


/**
 * Adds some data <code>oData</code> 
 * to the aggregation named <code>data</code>.
 *
 * @param {sap.ui.core.Element}
 *            oData the data to add; if empty, nothing is inserted
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#addData
 * @function
 */


/**
 * Removes an data from the aggregation named <code>data</code>.
 *
 * @param {int | string | sap.ui.core.Element} vData the data to remove or its index or id
 * @return {sap.ui.core.Element} the removed data or null
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#removeData
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>data</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#removeAllData
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>data</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Element}
 *            oData the data whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#indexOfData
 * @function
 */


/**
 * Destroys all the data in the aggregation 
 * named <code>data</code>.
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#destroyData
 * @function
 */

/**
 * Binder for aggregation <code>data</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#bindData
 * @function
 */


/**
 * Unbinder for aggregation <code>data</code>.
 *
 * @return {sap.viz.ui5.data.FlattenedDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.data.FlattenedDataset#unbindData
 * @function
 */

// Start of sap/viz/ui5/data/FlattenedDataset.js
sap.viz.ui5.data.FlattenedDataset.prototype.init = function() {
};

sap.viz.ui5.data.FlattenedDataset.prototype.bindAggregation = function(sName, oBindingInfo) {
	// TODO the whole implementation has been copied from sap.ui.table.Table. Find a way to share it.
	// only purpose is to add a factory as the core implementation otherwise complains
	
	// special handling for the rows aggregation
	if (sName === "data") {
		// old API compatibility (sName, sPath, oTemplate, oSorter, aFilters)
		if (typeof oBindingInfo == "string") {
			oBindingInfo = {
				path: arguments[1],
				template: arguments[2],
				sorter: arguments[3], 
				filters: arguments[4]
			};
			// ensure old Table API compatibility (sName, sPath, [oSorter], [aFilters])
			if (oBindingInfo.template instanceof sap.ui.model.Sorter ||
				jQuery.isArray(oBindingInfo.sorter) && 
					oBindingInfo.sorter.length > 0 && 
					oBindingInfo.sorter[0] instanceof sap.ui.model.Filter) {
				oBindingInfo.filters = oBindingInfo.sorter;
				oBindingInfo.sorter = oBindingInfo.template;
			} 
		}
		// the rows aggregation has neither a template nor a factory function!
		oBindingInfo.template = undefined;
		oBindingInfo.factory = function() {};
		// call the real bindAggregation method
		return sap.ui.core.Element.prototype.bindAggregation.call(this, sName, oBindingInfo);
	}
	// call the real bindAggregation method
	return sap.ui.core.Element.prototype.bindAggregation.apply(this, arguments);
};

sap.viz.ui5.data.FlattenedDataset.prototype.updateData = function() {

	var oBinding = this.getBinding("data"),
			aContexts = oBinding && oBinding.getContexts(0, oBinding.getLength());

	// if there is no data, then there is no crosstab. Charts will render "no data" then. 
	if ( !aContexts || aContexts.length === 0 ) {
		delete this._oVIZCrosstab;
		return;
	}
	
	var aAxis1=[],
			aAxis2=[],
			aMeasures=[],
			data=[];

	// transform dimension definitions to a format more suitable for our transformation
	jQuery.each(this.getDimensions(), function(i,oColumn) {
	  if ( oColumn.getAxis() === 1 ) {
	  	aAxis1.push(oColumn);
	  } else if ( oColumn.getAxis() === 2 ) {
	  	aAxis2.push(oColumn);
	  } else {
	  	throw new Error();
	  	aMeasures.push(oColumn);
	  	data.push([]);
	  }	
	});

	// create empty data array for each measure
	jQuery.each(this.getMeasures(), function(i,oColumn) {
  	aMeasures.push(oColumn);
  	data.push([]);
	});

	// extracts the value for one dimension based on the given set of dimension components
	function get(oContext, aColumns) {
		if ( aColumns.length === 0 ) 
			return null;
		
		var r=[];
	  for(var i=0; i<aColumns.length; i++) {
	  	r.push(oContext.getProperty(aColumns[i].getBindingInfo("value").path));
	  }
	  return r;
	}

	function findOrAdd(aData, oData) {
		if ( !oData ) {
			return 0;
		}
		for(var i=0; i<aData.length; i++) {
			if ( jQuery.sap.equal(aData[i], oData) ) {
				return i;
			}
		}
		aData.push(oData);
		return aData.length-1;
	}
	
	var aAxis1DataSet=[];
	var aAxis2DataSet=[];
	
	// analyze data 
	jQuery.each(aContexts, function(iIndex, oContext) {
		var iAxis1Index = findOrAdd(aAxis1DataSet, get(oContext, aAxis1));
		var iAxis2Index = findOrAdd(aAxis2DataSet, get(oContext, aAxis2));
		for(var i=0; i<aMeasures.length; i++) {
			var value = oContext.getProperty(aMeasures[i].getBindingInfo("value").path);
			(data[i][iAxis2Index] = (data[i][iAxis2Index] || []))[iAxis1Index] = value;
		}
	});
	
	// start creating the dataset
	var dataset = {
			analysisAxis : [],
			measureValuesGroup : []
	};
	
	// convert data for axis1
	if ( aAxis1.length > 0 ) {
		var axis = { index : 1, data : [] };
		// process component by component for the axis1 dimension 
		for(var i=0; i<aAxis1.length; i++) {
			// collect values for the dimension component 'i' 
			var values=[];
			for(var j=0; j<aAxis1DataSet.length; j++) {
				values[j] = aAxis1DataSet[j][i];
			}
			// create an axis component from the collected data and the specified label
			axis.data.push({
				name : aAxis1[i].getName(),
				values : values
			});
		}
		// add axis to dataset
		dataset.analysisAxis.push(axis);
	}
	
	// do the same for axis2
	// TODO generalize to N axes, will reduce code as well. But maybe throw error above for more than two axes (limit of crosstab?)
	if ( aAxis2.length > 0 ) {
		var axis = { index : 2, data : [] };
		for(var i=0; i<aAxis2.length; i++) {
			var values=[];
			for(var j=0; j<aAxis2DataSet.length; j++) {
				values[j] = aAxis2DataSet[j][i];
			}
			axis.data.push({
				name : aAxis2[i].getName(),
				values : values
			});
		}
		dataset.analysisAxis.push(axis);
	}

	// now that the dimension lengths are known, transform measures to crosstable   
	for(var i=0; i<aMeasures.length; i++) {
		if ( !dataset.measureValuesGroup[aMeasures[i].getGroup()-1] ) {
			dataset.measureValuesGroup[aMeasures[i].getGroup()-1] = { index: aMeasures[i].getGroup(), data: []};
		}
		dataset.measureValuesGroup[aMeasures[i].getGroup()-1].data.push({
			name: aMeasures[i].getName(),
			values: data[i]
		})
	}
	
	// finally create the VIZ crosstab from the transformed data 
	this._oVIZCrosstab = new sap.viz.data.CrosstableDataset();
	this._oVIZCrosstab.setData(dataset);
	
	// invalidate will make the chart re-render with the new dataset
  this.invalidate();

};

sap.viz.ui5.data.FlattenedDataset.prototype.getVIZDataset = function() {
	return this._oVIZCrosstab || null;
};
