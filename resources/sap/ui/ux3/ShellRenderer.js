/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ShellRenderer");sap.ui.ux3.ShellRenderer={};
sap.ui.ux3.ShellRenderer.render=function(r,c){var a=r;var p=c.isPaneOpen();var P=c.getPaneWidth()+sap.ui.ux3.Shell._PANE_OUTER_DISTANCE;var R=sap.ui.getCore().getConfiguration().getRTL();if(sap.ui.ux3.Shell.FIRST_RENDERING){document.body.style.margin="0"}a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3Shell");a.addClass("sapUiUx3ShellHead"+c.getHeaderType());a.addClass("sapUiUx3ShellDesign"+c.getDesignType());if(c.getFullHeightContent()){a.addClass("sapUiUx3ShellFullHeightContent")}if(!c.getApplyContentPadding()){a.addClass("sapUiUx3ShellNoContentPadding")}if(!c.getShowTools()){a.addClass("sapUiUx3ShellNoTools")}if(!c.getShowPane()){a.addClass("sapUiUx3ShellNoPane")}a.writeClasses();a.write(">");var I=c.getId();a.write("<img id='"+c.getId()+"-hdrImg' class='sapUiUx3ShellHeaderImg' src='");var s=sap.ui.core.theming.Parameters.get('sapUiUx3ShellHeaderImageURL');s=c._convertImageParameter(s);if(s){a.writeEscaped(s)}else{a.write(sap.ui.resource('sap.ui.core','themes/base/img/1x1.gif'))}a.write("' />");a.write("<header id='"+c.getId()+"-hdr' class='sapUiUx3ShellHeader' role='banner'>");sap.ui.ux3.ShellRenderer.renderHeader(a,c);a.write("</header>   <!-- end of sapUiUx3ShellHeader -->");a.write("<div id='",c.getId(),"-bg' class='sapUiUx3ShellBg'></div>");a.write("<img id='",c.getId(),"-bgImg' class='sapUiUx3ShellBgImg' src='");s=sap.ui.core.theming.Parameters.get('sapUiUx3ShellBackgroundImageURL');s=c._convertImageParameter(s);if(s){a.writeEscaped(s)}else{a.write(sap.ui.resource('sap.ui.core','themes/base/img/1x1.gif'))}a.write("'/>");var w=p?" style='margin-"+(R?"left":"right")+":"+(P+22)+"px'":"";a.write("<div id='",c.getId(),"-wBar'"+w+" class='sapUiUx3ShellWorksetBar'>");sap.ui.ux3.ShellRenderer.renderWorksetItems(a,c);a.write("</div>   <!--  end of worksetBar -->");a.write("<section id='"+c.getId()+"-tp' class='sapUiUx3ShellToolPaletteArea' role='complementary'>");sap.ui.ux3.ShellRenderer.renderToolPalette(a,c);a.write("</section> <!-- end of toolPaletteArea -->");var b=p?" style='"+(R?"left":"right")+":"+P+"px'":"";a.write("<div class='sapUiUx3ShellCanvas'"+b+" id='"+I+"-canvas'>");sap.ui.ux3.ShellRenderer.renderFacetBar(a,c);a.write("<article class='sapUiUx3ShellContent' id='"+I+"-content' role='main'>");var C=c.getContent();for(var i=0;i<C.length;i++){a.renderControl(C[i])}a.write("</article><div class='sapUiUx3ShellNotifySpace'></div></div>");var t=c._tiOpen?" tabindex='0'":"";a.write("<span class='sapUiUx3ShellFocusDummy' id='"+c.getId()+"-focusDummyPane'"+t+"></span>");a.write("<aside id='"+I+"-paneBar' class='sapUiUx3ShellPaneBar"+(p?" sapUiUx3ShellPaneBarOpen":"")+"' role='complementary' style='width:"+P+"px;'>");a.write("<section id='"+I+"-paneContent' style='width:"+c.getPaneWidth()+"px;' class='sapUiUx3ShellPaneBarContent' role='tabpanel'>");var d=c.getPaneContent();for(var i=0;i<d.length;i++){a.renderControl(d[i])}a.write("</section>");a.write("<div class='sapUiUx3ShellPaneBarRight'><ul class='sapUiUx3ShellPaneEntries' role='tablist'>");sap.ui.ux3.ShellRenderer.renderPaneBarItems(a,c);a.write("</ul></div></aside>   <!-- end of paneBar -->");a.write("<div class='sapUiUx3ShellCanvasBackground "+(p?"sapUiUx3ShellCanvasBackgroundOpen":"sapUiUx3ShellCanvasBackgroundClosed")+"' id='"+I+"-canvasBackground'"+b+">");a.write("<div class='sapUiUx3ShellCanvasBackgroundRight'></div>");a.write("</div>");a.write("<div id='"+I+"-notify' class='sapUiUx3ShellNotify'>");sap.ui.ux3.ShellRenderer.renderNotificationArea(a,c);a.write("</div>");a.write("</div>")};
sap.ui.ux3.ShellRenderer.renderHeader=function(r,c){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");var b=c.getAppIcon();r.write("<hr id='"+c.getId()+"-hdrLine'/><img id='"+c.getId()+"-logoImg' src='");if(b){r.writeEscaped(c.getAppIcon())}else{var I=sap.ui.core.theming.Parameters.get('sapUiUx3ShellApplicationImageURL');I=c._convertImageParameter(I);if(I){r.writeEscaped(I)}else{r.write(sap.ui.resource('sap.ui.core','themes/base/img/1x1.gif'))}}r.write("'");var d=c.getAppIconTooltip()||a.getText("SHELL_LOGO");r.writeAttributeEscaped("alt",d);r.writeAttributeEscaped("title",d);r.write("><h1>");r.writeEscaped(c.getAppTitle());r.write("</h1><span class='sapUiUx3ShellHeaderTitleRight'>");var h=c.getHeaderItems();for(var i=0;i<h.length;i++){if(h[i]instanceof sap.ui.commons.MenuButton){if(h[i].getMenu()){h[i].getMenu().addStyleClass("sapUiMnuTop",true)}}r.renderControl(h[i]);if((i<(h.length-1))||(c.getShowLogoutButton())){r.write("<span class='sapUiUx3ShellHeaderSep'></span>")}}if(c.getShowLogoutButton()){r.write("<a id='"+c.getId()+"-logout' title='");r.write(c.getLogoutButtonTooltip()?jQuery.sap.escapeHTML(c.getLogoutButtonTooltip()):a.getText("SHELL_LOGOUT"));r.write("' tabindex='0' role='button' class='sapUiUx3ShellHeaderButton sapUiUx3ShellHeader-logout'></a>")}r.write("</span>")};
sap.ui.ux3.ShellRenderer.renderToolPalette=function(r,c){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");var I=c.getId();var t=c._tiOpen?" tabindex='0'":"";r.write("<span class='sapUiUx3ShellFocusDummy' id='"+c.getId()+"-focusDummyTPStart'"+t+"></span>");var A=a.getText("SHELL_TOOLPANE_GENERIC"),s=false,f=true,S="";if(c.getShowSearchTool()){s=true;S+="<a id='"+I+sap.ui.ux3.Shell.TOOL_PREFIX+I+"-searchTool' title='"+a.getText("SHELL_SEARCH")+"' class='sapUiUx3ShellTool sapUiUx3ShellTool-search' tabindex='0' role='button' aria-pressed='false'></a>";if(f){f=false}else{A+=","}A+=" "+a.getText("SHELL_SEARCH")}if(c.getShowFeederTool()){s=true;S+="<a id='"+I+sap.ui.ux3.Shell.TOOL_PREFIX+I+"-feederTool' title='"+a.getText("SHELL_FEEDER")+"' class='sapUiUx3ShellTool sapUiUx3ShellTool-feeder' tabindex='0' role='button' aria-pressed='false'></a>";if(f){f=false}else{A+=","}A+=" "+a.getText("SHELL_FEEDER")}if(s){r.write("<div role='toolbar'aria-describedby='"+I+"-genericToolsDescr'>");r.write("<span id='"+I+"-genericToolsDescr' style='display:none;'>"+A+"</span>");r.write(S+"</div>")}var T=c.getToolPopups();if(s&&(T.length>0)){r.write("<hr class='sapUiUx3ShellToolSep'></hr>")}if(T.length>0){r.write("<div role='toolbar' aria-describedby='"+I+"-appToolsDescr'>");r.write("<span id='"+I+"-appToolsDescr' style='display:none;'>"+a.getText("SHELL_TOOLPANE_APP")+"</span>");for(var i=0;i<T.length;i++){var o=T[i];if(o instanceof sap.ui.core.SeparatorItem){r.write("<hr class='sapUiUx3ShellToolSep'></hr>")}else{r.write("<a id='"+I+"-tool-"+o.getId()+"' class='sapUiUx3ShellTool'");var b=o.getTooltip_AsString();if(!b){b=o.getTitle()}if(b){r.write(" title='");r.writeEscaped(b);r.write("' ")}r.write(" tabindex='0' role='button' aria-pressed='false'><img src='");r.writeEscaped(o.getIcon());r.write("' alt='' role='presentation'/></a>")}}r.write("</div>")}r.write("<span class='sapUiUx3ShellFocusDummy' id='"+c.getId()+"-focusDummyTPEnd'"+t+"></span>")};
sap.ui.ux3.ShellRenderer.renderPaneBarItems=function(r,c){var I=c.getId();var p=c.getPaneBarItems();var n=p.length;for(var i=0;i<n;i++){var a=p[i];var b=a.getId();r.write("<li");r.writeElementData(a);r.write(" role='tab' aria-controls='"+I+"-paneContent' aria-setsize='"+n+"' aria-posinset='"+(i+1)+"' tabindex='-1' class='sapUiUx3ShellPaneEntry");if(c._sOpenPaneId===b){r.write(" sapUiUx3ShellPaneEntrySelected")}r.write("'");if(a.getTooltip_AsString()){r.writeAttributeEscaped("title",a.getTooltip_AsString())}r.write(">");r.writeEscaped(a.getText().toUpperCase());r.write("</li>")}};
sap.ui.ux3.ShellRenderer.renderNotificationArea=function(r,c){r.write("<div class='sapUiUx3ShellNotifyBG'></div>");if(c.getNotificationBar()){r.renderControl(c.getNotificationBar())}};
sap.ui.ux3.ShellRenderer.renderWorksetItems=function(r,c){var i=c.getWorksetItems();c._oWorksetBar.setAssociatedItems(i);if(!c._oWorksetBar.isSelectedItemValid()&&(i.length>0)){c.setAssociation("selectedWorksetItem",i[0],true);c._oWorksetBar.setSelectedItem(i[0])}if(r){r.renderControl(c._oWorksetBar)}};
sap.ui.ux3.ShellRenderer.renderFacetBar=function(r,c){var s=sap.ui.getCore().byId(c.getSelectedWorksetItem());if(s){var p=s.getParent();if(p&&p instanceof sap.ui.ux3.NavigationItem){s=p}var S=s.getSubItems();c._oFacetBar.setAssociatedItems(S);if(!c._oFacetBar.isSelectedItemValid()&&(S.length>0)){c._oFacetBar.setSelectedItem(S[0])}}if(r){r.renderControl(c._oFacetBar)}};
