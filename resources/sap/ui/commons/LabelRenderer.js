/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.LabelRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ui.commons.LabelRenderer={};
sap.ui.commons.LabelRenderer.render=function(R,l){var a=R;var r=sap.ui.commons.LabelRenderer;if(!l.getVisible()){return}var m="";a.write("<label");a.writeControlData(l);var t=l.getTooltip_AsString();if(l.getLabelForRendering()){var f=sap.ui.getCore().byId(l.getLabelForRendering());a.write(" for=\"");if(f&&f.getIdForLabel){a.write(f.getIdForLabel())}else{a.write(l.getLabelForRendering())}a.write("\"");if((!t||t=="")&&f&&f.getTooltip_AsString()&&f.getTooltip_AsString()!=""){t=f.getTooltip_AsString()}}if(l.isRequired()){a.addClass('sapUiLblReq')}if(t){a.writeAttributeEscaped('title',t)}a.addClass("sapUiLbl");if(l.getDesign()==sap.ui.commons.LabelDesign.Bold){a.addClass("sapUiLblEmph")}var T=l.getTextDirection();if(T){a.writeAttribute("dir",T)}var o=l.getTextAlign();if(o){m+="text-align:"+r.getTextAlign(o,T)+";"}var w=l.getWidth();if(w){m+="width:"+w+";"}if(!l.getWrapping()){a.addClass("sapUiLblNowrap")}a.writeAttribute("style",m);a.writeClasses();a.write(">");if(l.getIcon()){this.writeImgHtml(a,l)}if(l.getText()){a.writeEscaped(l.getText())}a.write("</label>")};
sap.ui.commons.LabelRenderer.writeImgHtml=function(r,l){var a=r;var i=l.getIcon();var c=r.getConfiguration();a.write("<img");a.writeAttributeEscaped("src",i);a.addClass("sapUiLblIco");if(l.getTextDirection()=="RTL"||(l.getTextDirection()=="Inherit"&&c.getRTL())){a.addClass("sapUiLblIcoR")}else{a.addClass("sapUiLblIcoL")}a.writeClasses();a.write("/>")};
sap.ui.commons.LabelRenderer.getTextAlign=sap.ui.core.Renderer.getTextAlign;
