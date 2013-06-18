/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.MessageToastRenderer");sap.ui.commons.MessageToastRenderer={};
sap.ui.commons.MessageToastRenderer.render=function(r,c){var a=r;a.write('<div class="'+c.getClasses()+'"');a.writeControlData(c);a.write('>');a.write('<div class="sapUiMsgToastMsg sapUiShd">');if(c.oMessage){a.renderControl(c.oMessage)}else{var m=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons").getText("MSGTOAST_MULTI_MSGS");a.write('<div class="sapUiMsg" tabindex="0"><span class="sapUiMsgTxt">'+m+'</span></div>')}a.write("</div>");a.write('<div id="'+c.getId()+'Arrow" class="sapUiMsgToastArrow"></div>');a.write("</div>")};
