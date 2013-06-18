/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PageRenderer");sap.m.PageRenderer={};
sap.m.PageRenderer.render=function(r,p){var h=null,e=p.getEnableScrolling()?" sapMPageScrollEnabled":"";if(p.getShowHeader()){h=p._getAnyHeader()}var s=p.getSubHeader();var f=p.getFooter();r.write("<div");r.writeControlData(p);r.addClass("sapMPage");if(h){r.addClass("sapMPageWithHeader")}if(s){r.addClass("sapMPageWithSubHeader")}if(f){r.addClass("sapMPageWithFooter")}r.writeClasses();var t=p.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(h){r.renderControl(h)}if(s){s._context='header';r.renderControl(s.addStyleClass('sapMPageSubHeader'))}r.write('<section id="'+p.getId()+'-cont" class="sapMPageBg'+p.getBackgroundDesign()+'">');r.write('<div id="'+p.getId()+'-scroll" class="sapMPageScroll'+e+'">');var c=p.getContent();var l=c.length;for(var i=0;i<l;i++){r.renderControl(c[i])}r.write("</div>");r.write("</section>");if(f){f._context='footer';r.renderControl(f)}r.write("</div>")};
