/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.declare("sap.ui.commons.form.GridLayoutRenderer");jQuery.sap.require("sap.ui.commons.form.FormLayoutRenderer");sap.ui.commons.form.GridLayoutRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.form.FormLayoutRenderer);
sap.ui.commons.form.GridLayoutRenderer.renderForm=function(r,l,f){var s=l.getSingleColumn();var c=16;var S=false;var C=0;var a=f.getFormContainers();var b=a.length;if(s){c=c/2;C=c}else{C=c/2;for(var i=0;i<b;i++){var o=this.getContainerData(l,a[i]);if(o&&o.getHalfGrid()){S=true;break}}}r.write("<table role=\"presentation\"");r.writeControlData(l);r.write(" cellpadding=\"0\" cellspacing=\"0\"");r.addStyle("border-collapse","collapse");r.addStyle("table-layout","fixed");r.addStyle("width","100%");r.addClass("sapUiGrid");r.writeStyles();r.writeClasses();r.write(">");r.write("<colgroup>");r.write("<col span="+C+">");if(S){r.write("<col class = \"sapUiGridSpace\"span=1>")}if(!s){r.write("<col span="+C+">")}r.write("</colgroup><tbody>");if(f.getTitle()){var t=c;if(S){t++}r.write("<tr><th colspan="+t+">");this.renderTitle(r,f.getTitle(),undefined,false,sap.ui.commons.TitleLevel.H3,f.getId());r.write("</th></tr>")}var i=0;while(i<b){var d=a[i];if(d.getVisible()){var o=this.getContainerData(l,d);if(o&&o.getHalfGrid()&&!s){var e=a[i+1];var g=undefined;if(e&&e.getVisible()){g=this.getContainerData(l,e)}if(g&&g.getHalfGrid()){this.renderContainerHalfSize(r,l,d,e,c);i++}else{this.renderContainerHalfSize(r,l,d,undefined,c)}}else{this.renderContainerFullSize(r,l,d,c,S)}}i++}if(jQuery.browser.msie&&jQuery.browser.version.substring(0,1)=="9"){r.write("<tr style=\"visibility:hidden;\">");for(var i=0;i<c;i++){r.write("<td style=\"visibility:hidden; padding:0; height: 0;\"></td>")}if(S){r.write("<td style=\"visibility:hidden; padding:0; height: 0;\"></td>")}r.write("</tr>")}r.write("</tbody></table>")};
sap.ui.commons.form.GridLayoutRenderer.renderContainerFullSize=function(r,l,c,C,s){var e=c.getExpandable();var t=c.getTooltip_AsString();if(c.getTitle()){var T=C;if(s){T++}r.write("<tr><td colspan="+T+" class=\"sapUiGridHeader\"");if(t){r.writeAttributeEscaped('title',t)}r.write(">");this.renderTitle(r,c.getTitle(),c._oExpandButton,e,sap.ui.commons.TitleLevel.H4,c.getId());r.write("</td></tr>")}if(!e||c.getExpanded()){var E=c.getFormElements();var R=[];for(var j=0,a=E.length;j<a;j++){var o=E[j];if(o.getVisible()){var b=R[0]&&(R[0][0]==C);r.write("<tr");if(R[0]!="full"&&!b){r.writeElementData(o);r.addClass("sapUiFormElement")}r.writeClasses();r.write(">");if(!b){R=this.renderElement(r,l,o,false,C,s,R)}else{R.splice(0,1)}r.write("</tr>");if(R[0]=="full"||b){j=j-1}}}if(R.length>0){for(var i=0;i<R.length;i++){r.write("<tr></tr>")}}}};
sap.ui.commons.form.GridLayoutRenderer.renderContainerHalfSize=function(r,l,c,C,a){var b=a/2;var e=c.getExpandable();var t=c.getTooltip_AsString();var T;var o=c.getTitle();var d;var E=[];if(!e||c.getExpanded()){E=c.getFormElements()}var L=E.length;var f=[];var g=0;var h=false;if(C){h=C.getExpandable();T=C.getTooltip_AsString();d=C.getTitle();if(!h||C.getExpanded()){f=C.getFormElements()}g=f.length}if(o||d){r.write("<tr><td colspan="+b+" class=\"sapUiGridHeader\"");if(t){r.writeAttributeEscaped('title',t)}r.write(">");if(o){this.renderTitle(r,o,c._oExpandButton,e,sap.ui.commons.TitleLevel.H4,c.getId())}r.write("</td><td></td><td colspan="+b+" class=\"sapUiGridHeader\"");if(T){r.writeAttributeEscaped('title',T)}r.write(">");if(d){this.renderTitle(r,d,C._oExpandButton,h,sap.ui.commons.TitleLevel.H4,C.getId())}r.write("</td></tr>")}if((!e||c.getExpanded())||(!h||C.getExpanded())){var R=[],j=[];var k=0,m=0;while(k<L||m<g){var n=E[k];var p=f[m];var q=R[0]&&(R[0][0]==b);var s=j[0]&&(j[0][0]==b);if((n&&n.getVisible())||(p&&p.getVisible())||q||s){r.write("<tr>");if(!q){if(n&&n.getVisible()&&(!e||c.getExpanded())){R=this.renderElement(r,l,n,true,b,false,R)}else{r.write("<td colspan="+b+"></td>")}if(R[0]!="full"){k++}}else{if(R[0][2]>0){r.write("<td colspan="+R[0][2]+"></td>")}R.splice(0,1)}r.write("<td></td>");if(!s){if(p&&p.getVisible()&&(!h||C.getExpanded())){j=this.renderElement(r,l,p,true,b,false,j)}else{r.write("<td colspan="+b+"></td>")}if(j[0]!="full"){m++}}else{if(j[0][2]>0){r.write("<td colspan="+j[0][2]+"></td>")}j.splice(0,1)}r.write("</tr>")}else{k++;m++}}if(R.length>0||j.length>0){for(var i=0;i<R.length||i<j.length;i++){r.write("<tr></tr>")}}}};
sap.ui.commons.form.GridLayoutRenderer.renderElement=function(r,l,e,h,c,s,R){var L=e.getLabelControl();var a=0;var f=e.getFields();var C=0;var A=0;var m=false;if(f.length==1&&this.getElementData(l,f[0])&&this.getElementData(l,f[0]).getHCells()=="full"){if(R.length>0&&R[0]!="full"){jQuery.sap.log.error("Element \""+e.getId()+"\" - Too much fields for one row!","Renderer","GridLayout");return R}if(s){c=c+1}if(L&&R[0]!="full"){r.write("<td colspan="+c+" >");r.renderControl(L);r.write("</td>");return["full"]}else{R.splice(0,1);var b=this.getElementData(l,f[0]).getVCells();r.write("<td colspan="+c);if(b>1&&h){r.write(" rowspan="+b);for(var x=0;x<b-1;x++){R.push([c,undefined,false])}}r.write(" >");r.renderControl(f[0]);r.write("</td>");return R}}if(R.length>0&&R[0][0]>0){c=c-R[0][0]+R[0][2];m=R[0][1];a=R[0][2];R.splice(0,1)}var d=a;if(L||a>0){d=3;if(L&&a==0){var E=this.getElementData(l,L);if(E){var g=E.getHCells();if(g!="auto"&&g!="full"){d=parseInt(g)}}}r.write("<td colspan="+d+" class=\"sapUiGridLabel\">");if(L){r.renderControl(L)}c=c-d;r.write("</td>")}if(f&&f.length>0){var j=c;var k=f.length;for(var i=0,n=f.length;i<n;i++){var F=f[i];var E=this.getElementData(l,F);if(E&&E.getHCells()!="auto"){j=j-parseInt(E.getHCells());k=k-1}}for(var i=0,o=0,n=f.length;i<n;i++){var F=f[i];var E=this.getElementData(l,F);var g="auto";var p=1;var b=1;if(E){g=E.getHCells();b=E.getVCells()}if(g=="auto"){if(j>0){p=Math.floor(j/k);if(p<1){p=1}o++;A=A+p;if((o==k)&&(j>A)){p=p+(j-A)}}else{p=1}}else{p=parseInt(g)}C=C+p;if(C>c){jQuery.sap.log.error("Element \""+e.getId()+"\" - Too much fields for one row!","Renderer","GridLayout");C=C-p;break}if(b>1){for(var x=0;x<b-1;x++){if(L){a=d}if(R.length>x){R[x][0]=R[x][0]+p;R[x][2]=a}else{R.push([d+p,undefined,a])}}}if(s&&C>=Math.floor(c/2)&&!m){p=p+1;m=true;if(b>1){for(var x=0;x<b-1;x++){R[x][1]=true}}}r.write("<td");if(p>1){r.write(" colspan="+p)}if(b>1){r.write(" rowspan="+b)}r.write(" >");r.renderControl(F);r.write("</td>")}}if(h&&C<c){var q=c-C;r.write("<td colspan="+q+" ></td>")}return R};
sap.ui.commons.form.GridLayoutRenderer.getContainerData=function(l,c){return l.getLayoutDataForElement(c,"sap.ui.commons.form.GridContainerData")};
sap.ui.commons.form.GridLayoutRenderer.getElementData=function(l,c){return l.getLayoutDataForElement(c,"sap.ui.commons.form.GridElementData")};
