/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.MessageListRenderer");sap.ui.commons.MessageListRenderer={};
sap.ui.commons.MessageListRenderer.render=function(r,c){var a=r;a.write('<ul class="sapUiMsgList"');a.writeControlData(c);a.write(">");for(var i=c.aMessages.length-1;i>=0;i--){a.write('<li class="sapUiMsgListLi">');a.renderControl(c.aMessages[i]);a.write("</li>")}a.write("</ul>")};
