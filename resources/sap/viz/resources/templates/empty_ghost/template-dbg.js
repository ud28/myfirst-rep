var axisColor = "#333333";
var backgroundProperty = {
    	border:{
    		left:{
    			visible: false
    		},
    		
    		right:{
    			visible: false
    		},
    		
    		top:{
    			visible: false
    		},
    		
    		bottom:{
    			visible: false
    		}
    	}
};

var interactionProperty = {
	selectability : {
		mode : "none"
	},
	enableMouseOver : false,
	enableMouseOut : false,
	enableMouseMove : false
};

var animationProperty = {
	dataLoading : false,
	dataUpdating : false
};

var ghost_properties_vertical_bar = {
    xAxis :{
			visible : false
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false
    },
    
    yAxis2 :{
    		visible : false
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
    

	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}
    	

	},
	columnAxis:{
		color:axisColor,
		label:{
			visible:false
		}

	},
    
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_horizontal_bar = {
	    xAxis :{
	    		visible : false
	    },
		
	    plotArea : {
			animation : animationProperty
		},
	    
	    yAxis :{
				visible:false
	    },
	    
	    xAxis2 :{
	    		visible : false
	    },
	    
	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },
		rowAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
		columnAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
	    
	    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_horizontal_stackedbar = {
	    xAxis :{
	    		visible : false
	    },
		
	    plotArea : {
			animation : animationProperty
		},
	    
	    yAxis :{
				visible : false
	    },
	    
	    xAxis2 :{
	    		visible : false
	    },
	    
	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },
		rowAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
		columnAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
	    
	   background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_vertical_stackedbar = {
    xAxis :{
    		visible : false
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false
    },
    
    yAxis2 :{
    		visible : false
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_horizontal_line = {
	    xAxis :{
	    		visible : false
	    },
	    
	    yAxis :{
				visible : false
	    },
	    
	    xAxis2 :{
	    		visible : false
	    },
	    
	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },

	    plotArea:{
    		marker:{
    			 visible : false
    		},
			tooltipVisble : false,
			animation : animationProperty
    	},	
    	rowAxis:{
        	color:axisColor,
			label:{
			visible:false
			}
    	
    	},
		columnAxis:{
        	color:axisColor,
			label:{
				visible:false
			}

	},
		
		background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_vertical_line = {
	    xAxis :{
				visible : false
	    },
	    
	    yAxis :{
	    		visible : false
	    },
	    
	    yAxis2 :{
	    		visible : false
	    },
	    
	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },
	    
	    plotArea:{
    		marker:{
    			 visible : false
    		},
			animation : animationProperty
    	},
    	rowAxis:{
        	color:axisColor,
			label:{
				visible:false
			}
	
		},
		columnAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
    	
	background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_horizontal_combination = {
	    xAxis :{
	    	visible : false
	    },
	    
	    yAxis :{
			visible : false
	    },
	    
	    xAxis2 :{
	    		visible : false
	    },
	    
	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },
		rowAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
		columnAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
	    
		plotArea:{
	    	line:{
	    		marker:{
	    			 visible : false
	    		}
	    	},
			tooltipVisble : false,
			animation : animationProperty
	    },
	    
	    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_vertical_combination = {
	    xAxis :{
	    visible : false,
	    },
	    
	    yAxis :{
	    		visible : false,
	    },
	    
	    yAxis2 :{
	    		visible : false,
	    },
	    
	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },
	    
	    plotArea:{
	    	line:{
	    		marker:{
	    			 visible : false
	    		}
	    	},
			animation : animationProperty
	    },
		rowAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
		columnAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
	    
	    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_bubble = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
    sizeLegend:{
    	visible:false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		},
	    gridline:{
	    	visible:true,
	    }
	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		},
		gridline:{
			visible:true,
		}
	},
    
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_scatter = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		},
    	gridline:{
			visible:true,
		}
	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		},
		gridline:{
			visible:true,
		}	
	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_scattermatrix = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
  		visible : false,
    },
	
	multiLayout : {
		plotTitle : { visible: false},
	},
    
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
		label:{
			visible:false
		}

	},
	columnAxis:{
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_heatmap = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_tagcloud = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
    	startColor: axisColor,
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
    
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_pie = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_donut = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_radar = {

	    title:{
	    	visible: false
	    },
	    
	    legend:{
	    	visible: false
	    },
	    
	    plotArea:{
	    	polarAxis:{
	    		title:{
	    		     visible: false
	    	    }
	    	},	  
	    	valueAxis:{
	    		visible:false,
	    	},
			animation : animationProperty
	    },
		
	    rowAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
		columnAxis:{
	    	color:axisColor,
			label:{
				visible:false
			}
	
		},
	    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_vertical_boxplot = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_horizontal_boxplot = {
    xAxis :{
    		visible : false,
    },
    
    plotArea : {
		animation : animationProperty
	},
	
    yAxis :{
    		visible : false,
    },
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_vertical_waterfall = {
    xAxis :{
    		visible : false,
    },
    
    yAxis :{
    		visible : false,
    },
	
    plotArea : {
		animation : animationProperty
	},
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};

var ghost_properties_horizontal_waterfall = {
    xAxis :{
    		visible : false,
    },
    
    yAxis :{
    		visible : false,
    },
	
    plotArea : {
		animation : animationProperty
	},
    
    yAxis2 :{
    		visible : false,
    },
    
    title:{
    	visible: false
    },
    
    legend:{
    	visible: false
    },
	rowAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
	columnAxis:{
    	color:axisColor,
		label:{
			visible:false
		}

	},
    background : backgroundProperty,
	interaction : interactionProperty
};
sap.viz.TemplateManager.register({
  id : "empty_ghost",
  name : "Empty Ghost",
  version : "4.0.0",
  properties : {
	  'viz/bar' :ghost_properties_horizontal_bar,
	  'viz/multi_bar' :ghost_properties_horizontal_bar,
	  'viz/dual_bar' :ghost_properties_horizontal_bar,
	  'viz/multi_dual_bar' :ghost_properties_horizontal_bar,  
	  'viz/column' : ghost_properties_vertical_bar,
	  'viz/multi_column' : ghost_properties_vertical_bar,
	  'viz/dual_column' :ghost_properties_vertical_bar,	  
	  'viz/multi_dual_column' :ghost_properties_vertical_bar,
	  'viz/stacked_bar' : ghost_properties_horizontal_stackedbar, 
	  'viz/multi_stacked_bar' :ghost_properties_horizontal_stackedbar, 
	  'viz/dual_stacked_bar' : ghost_properties_horizontal_stackedbar, 
	  'viz/multi_dual_stacked_bar' :ghost_properties_horizontal_stackedbar, 
	  'viz/100_stacked_bar' :ghost_properties_horizontal_stackedbar,
	  'viz/multi_100_stacked_bar' : ghost_properties_horizontal_stackedbar,
	  'viz/100_dual_stacked_bar' : ghost_properties_horizontal_stackedbar,
	  'viz/multi_100_dual_stacked_bar' : ghost_properties_horizontal_stackedbar,
	  'viz/stacked_column' : ghost_properties_vertical_stackedbar, 
	  'viz/multi_stacked_column' : ghost_properties_vertical_stackedbar,
	  'viz/dual_stacked_column' :ghost_properties_vertical_stackedbar, 
	  'viz/multi_dual_stacked_column' :ghost_properties_vertical_stackedbar,
	  'viz/100_stacked_column' : ghost_properties_vertical_stackedbar,
	  'viz/multi_100_stacked_column' :ghost_properties_vertical_stackedbar,
	  'viz/100_dual_stacked_column' : ghost_properties_vertical_stackedbar,
	  'viz/multi_100_dual_stacked_column' : ghost_properties_vertical_stackedbar,
	  'riv/cbar' : ghost_properties_vertical_bar,
	  'viz/stacked_column' : ghost_properties_vertical_stackedbar, 
	  'viz/multi_stacked_column' : ghost_properties_vertical_stackedbar,
	  
	  'viz/combination' : ghost_properties_vertical_combination,
	  'viz/horizontal_combination' : ghost_properties_horizontal_combination,
	  'viz/dual_combination' : ghost_properties_vertical_combination,
	  'viz/dual_horizontal_combination' : ghost_properties_horizontal_combination,
	  
	  'viz/boxplot' : ghost_properties_vertical_boxplot,
	  'viz/horizontal_boxplot' :ghost_properties_horizontal_boxplot,
	  
	  'viz/waterfall' : ghost_properties_vertical_waterfall,
	  'viz/horizontal_waterfall' :ghost_properties_horizontal_waterfall,

	  'viz/line' : ghost_properties_vertical_line,
	  'viz/multi_line' :ghost_properties_vertical_line,
	  'viz/dual_line' : ghost_properties_vertical_line,
	  'viz/multi_dual_line' : ghost_properties_vertical_line,
	  'viz/horizontal_line' : ghost_properties_horizontal_line,
	  'viz/multi_horizontal_line' : ghost_properties_horizontal_line,
	  'viz/dual_horizontal_line' : ghost_properties_horizontal_line,
	  'viz/multi_dual_horizontal_line' :ghost_properties_horizontal_line,
	  
	  'viz/pie' : ghost_properties_pie,
	  'viz/multi_pie' : ghost_properties_pie,
	  'viz/donut' :ghost_properties_donut,
	  'viz/multi_donut' : ghost_properties_donut,
	  
	  'viz/bubble' : ghost_properties_bubble,
	  'viz/multi_bubble' : ghost_properties_bubble,
	  'viz/scatter' : ghost_properties_scatter,
	  'viz/multi_scatter' : ghost_properties_scatter,
	  'viz/scatter_matrix' : ghost_properties_scattermatrix,
	  
	  'viz/radar' : ghost_properties_radar,
	  'viz/multi_radar': ghost_properties_radar,
	  
	  'viz/tagcloud' : ghost_properties_tagcloud,
	  
	  'viz/heatmap': ghost_properties_heatmap
   }//properties

});